// Create a function that returns number of days till Friday

let today = new Date();
let dayNumber = today.getDay();
if ((dayNumber, 5)) {
  console.log("days till Friday: ", 5 - dayNumber);
} else {
  console.log("days till friday: ", 5 - dayNumber + 7);
}
