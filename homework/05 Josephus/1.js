
function josephus(n, k) {
  let soldiers = [];
  for (let i = 1; i <= n; i++) {
    soldiers.push(i);
  }
  let index = 0;
  while (soldiers.length > 1) {
    index = (index + k - 1) % soldiers.length;
    soldiers.splice(index, 1);
  }
  return soldiers[0];
}

// Example usage:
console.log("soldier alive is:", josephus(7, 2))

; // Output: 1
// 1.	Solve Josephus's Problem for 7 soldiers using JavaScript. (You can try to solve it with classes)
// Display in the console
// a.	1st Kills 2nd
// b.	3rd Kills 4fourth
// c.	5th Kills 6th
// d.	7th Kills 1th
// e.	3th Kills 5th
// f.	7th Kills 3th
// g.	7th Remains alive