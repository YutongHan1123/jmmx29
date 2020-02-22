/* eslint-disable prefer-const */
/* eslint-disable no-console */
let x;
let y;
let z;

x = 25;
y = 'string';
z = true;

x + z;
console.log(x + z);

x + y;
console.log(x + y);

let myArray = [1, 'string', true, 4, 5, 6, 7, 8, 9];

// Looking at how let works and is different from var
console.log(x);
{
        let x = 2;
        console.log(x);
}
console.log(x);

let fruit = {
        kind: 'orange',
        color: 'orange',
        quantity: 9,
        tasty: true,
};

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
