// Question 1
console.log('\n Question 1 returns')
const myNames = ['Alice', 'Bob', 'Charlie', 'Debbie'];
const myForEach = (arr, callback) => {
  const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(callback(arr[i]))
    }
    return
};

// Test Cases 
const result = (name) => console.log(`Hi, ${name}!`);
console.log(myForEach(myNames, result))



// Question 2
console.log('\n Question 2 returns')
const myNums = [1, 4, 9, 16];
console.log(myNums)
const myMap = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
};

// Test Cases 
const myDoubledNums = myMap(myNums, (x) => x * 2);
console.log(myDoubledNums); // expected output: [2, 8, 18, 32]
console.log(myNums); // expected output: [1, 4, 9, 16] unaffected!




// Question 3
console.log('\n Question 3 returns')
const myNames3 = ['Alice', 'Bob', 'Charlie', 'Debbie', 'Barry'];
console.log(myNames3)
const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++)
    if (callback(arr[i])) {
      return arr[i]
    } return undefined
};

// Test Cases 
const nameHasB = myFind(myNames3, (name) => name.includes('B'));
console.log(nameHasB);




// Question 4 //
console.log('\n Question 4')
const myFilter = (arr, callback) => {
  const newArr = []
  for(let i = 0; i < arr.length; i++) {
    if (callback(arr[i])){
      newArr.push(arr[i]);
    } 
  }
    return newArr;
};

// Test Cases 
  const myNames2 = ['Alice', 'Bob', 'Charlie', 'Bert', 'Debbie', 'Barry', 'Beatrice'];
  const namesWithB = myFilter(myNames2, (name) => name.includes('B'));
  console.log(namesWithB); // ['Bob', 'Barry']
  const namesWithZ = myFilter(myNames2, (name) => name.includes('Z'));
  console.log(namesWithZ); // []



// Question 5
console.log('\n Question 5')
const sortWords = (arr) => {
  const newArr2 = [...arr];
return newArr2.sort()
};

// Test Cases 
const unsortedNames = ['Charlie', 'Debbie', 'Alice', 'Bob'];
const sortedNames = sortWords(unsortedNames);

console.log('Unsorted Names:', unsortedNames); // ['Charlie', 'Debbie', 'Alice', 'Bob']
console.log('Newly Sorted Names:', sortedNames); // ['Alice', 'Bob', 'Charlie', 'Debbie']
// ^ Shoutout to Madhur Arrays lecture. Part 1 (48:30) ^ 🙌
// Im reviewing those lectures trust



// Question 6 //
console.log('\n Question 6')
const sortNumbers = (arr) => {
  const newArr3 = [...arr];
  return newArr3.sort((a,b) => a - b)
};

// Test Cases 
const unsortedNums = [1, 100, 14, 3, 2, 11];
const sortedNums = sortNumbers(unsortedNums);

console.log('Unsorted Numbers:', unsortedNums); // [1, 2, 3, 11, 14, 100]
console.log('Newly sorted Original:', sortedNums); // [1, 100, 14, 3, 2, 11]



// Question 7 //
console.log("\n Question 7")
const sortNumbersBetter = (arr, isDescending) => {const newArr3 = [...arr];
  if (isDescending === true) {
    return newArr3.sort((a,b) => b - a)
  } else {
    return newArr3.sort((a, b) => a - b)
  }
};

  const unsortedNums1 = [1, 100, 14, 3, 2, 11];
  const bigToSmall = sortNumbersBetter(unsortedNums1, true);
  console.log('Descending Nums:', bigToSmall); // [100, 14, 11, 3, 2, 1]
  
  const smallToBig = sortNumbersBetter(unsortedNums); // default param
  console.log('Ascending Nums:', smallToBig); // [1, 2, 3, 11, 14, 100]



// Question 8//
console.log("\n Question 8")
const sortUsersByOrder = (arr) => {
  const newArr4 = [...arr];
  return newArr4.sort((a, b) => a.order - b.order);
};

const users = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

const sortedUsers = sortUsersByOrder(users);
console.log(sortedUsers);

// [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]



// Question 9 //
console.log("\n Question 9")
const sortUsersByName = (arr) => {
  const newArr5 = [...arr]
  newArr5.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  return newArr5
};
const users1 = [
  { name: 'Alice', order: 1 },
  { name: 'Bob', order: 3 },
  { name: 'Charlie', order: 2 },
  { name: 'Debbie', order: 4 },
];

const sortedUsers1 = sortUsersByOrder(users1);
console.log(sortedUsers1);
// [
//   { name: 'Alice', order: 1 },
//   { name: 'Charlie', order: 2 },
//   { name: 'Bob', order: 3 },
//   { name: 'Debbie', order: 4 },
// ]

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
