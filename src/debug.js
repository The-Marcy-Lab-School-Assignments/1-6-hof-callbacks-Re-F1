// Question 10 //
console.log("\n Question 10")
const myEvery = (arr, callback) => {
  for (const value of arr) {
    if (!callback(value)) return false;
  }
  return true;
};
const oddNums = [1, 3, 5, 7, 9];
const areAllNumsOdd1 = myEvery(oddNums, (num) => num % 2);
console.log(areAllNumsOdd1)

const sortUsersBy = (arr, callback) => {
  const newArr = [...arr]
  return newArr.sort(callback);
};
const users = [
  { name: 'Alice', height: 22 },
  { name: 'Bob', height: 32 },
  { name: 'Charlie', height: 28 },
  { name: 'Diana', height: 40 },
];
console.log(users)
const usersSortedByAge = sortUsersBy(users, (a, b) => b.height - a.height);
console.log(usersSortedByAge)


// Question 11 //
console.log("\n Question 11")
const logEachName = (names) => {
  names.forEach((value, index, array) => {
    console.log(value, index, array);
  });
};

const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
logEachName(names);


// Question 12 
console.log("\n Question 12")
const logEachUserBio = (users) => {
  users.forEach((users) => {;
  console.log(users.bio)
})
}

    const users1 = [
      { name: 'Alice', bio: 'Alice is a software engineer' },
      { name: 'Bob', bio: 'Bob is a teacher' },
      { name: 'Charlie', bio: 'Charlie is a student' },
      { name: 'Diana', bio: 'Diana is a doctor' },
    ];
logEachUserBio(users1)

module.exports = {
  myEvery,
  sortUsersBy,
  logEachName,
  logEachUserBio,
};
