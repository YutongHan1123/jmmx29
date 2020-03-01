// This first section is all about setting up our chart in terms of 
var margin = {
	top: 20, 
	right: 20, 
	bottom: 30, 
	left: 40,
};

var width = 800,
	height = 400,
	w = width + margin.left + margin.right,
	h = height + margin.top + margin.bottom;


// we can use a rowConverter to ensure the data we load is properly formatted.
var rowConverter = function(d) {
	return {
		genre: d.genre,
		votes: +d.count
	}
}

d3.csv("data.csv", rowConverter)
.then(function(data) {
	// all your chart making goes here. Nearly everything that worked in d3v4 will work in d3v5

	// We can check that our data loaded!
	console.log(data);
})
