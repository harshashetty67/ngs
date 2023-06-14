const callMe = (t)=>{
    console.log(`Hello after ${t} seconds`);
}

setTimeout(callMe,4*1000,4); // Here delay is in seconds as its multiplied by 1000.
setTimeout(callMe,8*1000,8); 

/*Note: setTimeout(funcRef, delay, arg);  
funcRef => Refernce of the function to be called, if arg is there it will be called after the delay
delay => In milliseconds, 
arg=> is passed to the reference function after the delay. */