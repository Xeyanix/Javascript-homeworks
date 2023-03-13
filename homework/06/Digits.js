// 3)	Write a code that takes in a string and returns a list of its digits. 
// So for 2342 it should return [2,3,4,2], and for ’A243b’ it should return [2,4,3].

function extractDigits(str) {
  const regex = /\d/g;
  const matches = str.match(regex);
  if (matches) {
    return matches.map((match) => parseInt(match));
  }
  return [];
}

console.log(extractDigits("2342")); // Output: [2, 3, 4, 2]
console.log(extractDigits("A243b")); // Output: [2, 4, 3]

