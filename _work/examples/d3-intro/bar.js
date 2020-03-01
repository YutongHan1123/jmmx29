// 1. Define chart dimensions
//This first section is all about setting up our chart in terms of sizes. Depending on how you're working you can abstract this section of the code for multiple charts.

// we can group all dimensions into an object. This is a really neat way I'm borrowing from Amelia's book.
let dimensions = {
	width: window.innerWidth * 0.9,
	height: 600,
	margin: {
		top: 20,
		right: 20,
		bottom: 30,
		left: 80,
	},
};

// these two new paramaters we're making work without var, let or const, because we're updating the pre-existing object.
dimensions.boundedWidth = dimensions.width -
	dimensions.margin.left -
	dimensions.margin.right
dimensions.boundedHeight = dimensions.height -
	dimensions.margin.top -
	dimensions.margin.bottom

// 2. define most of the scaffolding.

// 2-01 create the svg background
// Find the figure on the page with id="chart" and add an svg element inside. Set the viewBox of that svg, then add it to a group, and finally move the svg right and down by the margin.left, and margin.top values respectively. These methods are chained and could be written on one line, but that's too long, so we give each method it's own line.
var svg = d3.select("figure#chart")
	.append("svg")
	.attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`)
	.append('g')
	.attr('transform', `translate(${dimensions.margin.left},${dimensions.margin.top})`);

// 2-02 create the scales
// Scales are how we translate our values into pixels. D3 has a lot of example scales. For a bar chart we'll use scaleLinear() for the bar lengths, and scaleBand() for the categories. If we were doing a line chart or scatter plot, both axes might be scaleLinear().
// For each scale, there is a domain -- the spread of the variable in your data -- and a range -- the spread of pixels you're working with.

// We don't know the max number of votes a category might have gotten, so we'll just define the range of the xScale. We'll add the domain when we load the data. 
var xScale = d3.scaleLinear()
	.range([0, dimensions.boundedWidth]);

// We likewise don't know the max number of categories, so we'll save that for when we load the data.
var yScale = d3.scaleBand()
	.range([0, dimensions.boundedHeight])
	.padding(0.3);


// 3. Ensure data types
// we can use a rowConverter to ensure the data we load is properly formatted. The + in front of a category will set the specific data to load as an int.

var rowConverter = function (d) {
	return {
		genre: d.genre,
		votes: +d.count
	}
}

d3.csv("data.csv", rowConverter)
	.then(function (dataset) {
		// all your chart making goes here. Nearly everything that worked in d3v4 will work in d3v5

		// We can check that our data loaded!
		console.log(dataset);

		// Let's update the domains for the xScale and the yScale. For xScale we'll set 0 as the lowest value and the max of all the votes column.
		xScale.domain([0, d3.max(dataset, d => d.votes)]);
		// for yScale, we'll use the map() method to pull the genre column from the data. 
		yScale.domain(dataset.map(d => d.genre));

		// Now that we've finished the scales, we'll actually draw the x and y axes.The pattern is the same, except we have to do some moving of the x-axis.
		var y_axis = svg.append("g")
			.attr("class", "y axis")
			.call(d3.axisLeft(yScale))
			.selectAll("text")
			.attr("class", "axis_text")
			.style("text-anchor", "center");

		var x_axis = svg.append("g")
			.attr("class", "x axis")
			.call(d3.axisBottom(xScale))
			.attr('transform', `translate(0,${dimensions.boundedHeight})`)
			.selectAll("text")
			.attr("class", "axis_text")
			.style("text-anchor", "center");

		// now we finally add the bars!
		// we select all the rectangles we'll be making
		var bars = svg.selectAll("rect")
			// the data() method connects the data to the current chain, so we can use it to influence what we make
			.data(dataset)
			// once connected, we use enter() for adding things to the scene based on what we gave to data
			.enter()
			// for each data point, append a rectangle
			.append("rect")
			// set the y position of the rectangle based on the data's category
			.attr("y", d => yScale(d.genre))
			// set the width of the rectangle based on how many votes the category got.
			.attr("width", d => xScale(d.votes))
			// bandwidth is a great shortcut for setting equal thickness for each category without math
			.attr("height", yScale.bandwidth())
			// we could introduce a more selective way of adding color to the bars, but we'll leave it as is right now.
			.attr("fill", "teal");


	});
