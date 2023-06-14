// Printing Hello-world every second for 5 times. After 5 time is one print Done and exit.

let counter = 1;
const timerId = setInterval(()=>{  // callback function is void
console.log('Hello-World');
if(counter==5)
{
    console.log('Done');
    clearInterval(timerId);
}
counter++;
}
,1000);