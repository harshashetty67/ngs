// More examples on destructuring - Arrays we use [] for destructuring

const [x,y,,fourth] = [10,20,30,40]; // Here we skipped assigning the third element. x = 10, y = 20 and fourth = 40.
console.log(x);
console.log(y);
console.log(fourth);

// advnaced destructuring on Arrays
const [first, ...restOfItems] = [100, 200, 300, 400]; // splitting the array into two separate arrays. first = >10 , restOfItems => [20,30,40]
console.log(first);
console.log(restOfItems);

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data; // we are extracting temp1,temp2 to variables and rest fields to person object.
console.log(temp1);
console.log(temp2);
console.log(person);

const newArray = [...restOfItems]; // copying the entire restOfItems array to newArray.
console.log(newArray);

const newObject = {
  ...person,   // copying the entire person object to newObject.
};
console.log(newObject);
