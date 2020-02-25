/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-console */
const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40,
};
var width = window.innerWidth - margin.left - margin.right;
var height = window.innerHeight - margin.top - margin.bottom;
var w = width + margin.left + margin.right;
var h = height + margin.top + margin.bottom;

let svg = d3
    .select('body')
    .append('svg')
    .attr('viewBox', [0, 0, w, h])
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

var y = d3
    .scaleBand()
    .rangeRound([0, height])
    .paddingInner(0.05)
    .align(0.1);

var x = d3.scaleLinear().rangeRound([0, width]);

var rowConverter = function(d) {
  genre = d.genre,
  count = +d.count;
};

d3.csv('data.csv', rowConverter, function (dataset) {
  console.log(dataset);
  
  // y.domain(dataset.map(d => d.genre));
  x.domain([0, d3.max(dataset, d => d.count)]);

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .attr('y', d => y(d.genre))
    .attr('x', d => x(d[0]))
    .attr('width', d => x(d[1]) - x(d[0]))
    .attr('height', y.bandwidth())
    .attr('fill', 'teal');
})
