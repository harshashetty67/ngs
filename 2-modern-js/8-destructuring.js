// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 }  = Math; // Instead of referencing them induvidually, we can use object destructuring to import required fucntion from a module.

// With require
// const { readFile } = require('fs');


const circle = {
   label: 'circleX',
   radius: 2,
 };
//
 const circleArea = ({ radius }) =>{
    console.log(radius);
   return (PI * radius * radius).toFixed(2);
 }

 console.log(circleArea(circle));
