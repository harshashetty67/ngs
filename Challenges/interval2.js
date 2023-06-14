var x = 1; 
var counter=1;     // Display data
var int = 1000;   // Initial delay // will hold reference to timer

function countDown() // this function is a infinite loop as it is done from assignment perspective.
{
console.log(x*100+"ms"); // printing the delay in ms

if(counter==5)
{
x+=1; // increment the delay
counter=1; // reset the counter
}
else
{
counter++;
}
  setTimeout(countDown, x*100); // recursive call to current function will establish a new timer
}

countDown();