
{
  const i=10; // Block Scope
}

if (true) {
  // Block Scope
}

for (let i = 1; i <= 10; i++) {
}

function sum(a, b) {
  // Function Scope
  let result = a + b;
}

sum(4 + 3);



console.log(result);