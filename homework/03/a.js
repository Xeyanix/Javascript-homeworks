const episodes = require("./episodes.json");
const characters = require("./characters.json");
const locations = require("./locations.json");

// function sumdeaths() {
//   const result = characters.reduce((sum, cureentChar) => {
//     if (cureentChar.status === "Dead") {
//       return sum + 1;
//     } else {
//       return sum;
//     }
//   }, 0);

//   return result;
// }
// console.log(sumdeaths());

// ______________________________________________________

function AllCharactersLivingOnEarth(location) {
  const result = characters
    .filter((character) => {
      return character.location.name.includes(location);
    })

    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  return result;
}
console.log(AllCharactersLivingOnEarth("Earth").slice(0, 10));

// console.log('a'); //zpauzujemy debugera i pokaze
