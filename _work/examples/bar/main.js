/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable no-console */

var dataset = [5, 10, 15, 20, 25, 30];
let theFruits = [
    {
        kind: 'orange',
        color: 'orange',
        quantity: 9,
        tasty: true,
    },
    {
        kind: 'grapes',
        color: 'purple',
        quantity: 100,
        tasty: true,
    },
    {
        kind: 'durian',
        color: 'orangey-yellow',
        quantity: 1,
        tasty: false,
    },
];

var body = d3.select('body');

body.selectAll('future-paragraph')
    .data(dataset)
    .enter()
    .append('p')
    // .text('This is a paragraph');
    .text(function(d) {
        return `I want to eat a ${d}`;
    })
    .style('color', function(d) {
        if (d > 15) {
            // Threshold of 15
            return 'red';
        }

        return 'black';
    });
