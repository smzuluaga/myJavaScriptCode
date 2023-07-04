// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input / Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output / Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//Path 1
function openOrSenior(data) {
  let category = [];

  for (let i = 0; i < data.length; i++) {
    data[i][0] >= 55 && data[i][1] > 7
      ? category.push("Senior")
      : category.push("Open");
  }
  return category;
}

// Path 2
function openOrSenior2(data) {
  let category = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      category.push("Senior");
    } else {
      category.push("Open");
    }
  }
  return category;
}

// Path 3
function openOrSenior3(data) {
  let category = [];

  category = data.map((user) => {
    if (user[0] >= 55 && user[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
  return category;
}

// Console proofs
let group1 = [
  [45, 12],
  [55, 21],
  [19, -2],
  [104, 20],
]; // ['Open', 'Senior', 'Open', 'Senior']
let group2 = [
  [3, 12],
  [55, 1],
  [91, -2],
  [53, 23],
]; // ['Open', 'Open', 'Open', 'Open']
let group3 = [
  [59, 12],
  [55, -1],
  [12, -2],
  [12, 12],
]; // ['Senior', 'Open', 'Open', 'Open']

console.log(openOrSenior(group1));
console.log(openOrSenior2(group1));
console.log(openOrSenior3(group1));

console.log(openOrSenior(group2));
console.log(openOrSenior2(group2));
console.log(openOrSenior3(group2));

console.log(openOrSenior(group3));
console.log(openOrSenior2(group3));
console.log(openOrSenior3(group3));
