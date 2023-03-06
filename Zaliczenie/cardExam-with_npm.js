
// 5.	EXAM Create a solution that will tell us what poker set we have. 
// The solution is to deal us 5 cards from the standard 52 card Table at random. 
// Based on cards on our hand the program should tell us what is the best poker set. Reference: https://pl.wikipedia.org/wiki/Poker#Starsze%C5%84stwo_uk%C5%82ad%C3%B3w_kart

const founded = [];
const poker = require('poker-hands');

function createTable() {
  const suits = ['H', 'C', 'D', 'S'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  let table = [];

  for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (let rankCounter = 0; rankCounter < 5; rankCounter++) {
      table.push(ranks[rankCounter] + suits[suitCounter]);
    }
  }
  // console.log(table);  //sprawdzenie czy pokazuje talie kart - 52 karty 
  return table;
}

//  shuffle 52 cards 
function shuffleCards(table) {
  for (let i = 0; i < 52; i++) {        //kazda pozycja w talii startujac od indexu 0 do 52 pokolei 
    let tempCard = table[i];        // PS: tempCard  - card that we pick up (at each position)
    let randomIndex = Math.floor(Math.random() * 52);           //zwraca a random index  from 0 to 51 w sumie są 52 karty     //pick up each card in random position |
    table[i] = table[randomIndex]           //replace randomIndex with tempCard
    table[randomIndex] = tempCard;
  }
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

let  counter = 0 ;
// for (let i = 0; i < 10; i++) { //---------------1
  
do { //----------2
  let myTable = createTable();
  shuffleCards(myTable);
  // console.log(myTable); // pomieszana talia kart  
  
  //------------------------ takes Random 5 cards  -----------------------
  let fiveRandomCards = getMultipleRandom(myTable, 5);
  
  var myFiveRandomCards = fiveRandomCards.join(' '); //konwersja zeby było bez tablicy
  console.log(myFiveRandomCards);
  
  console.log('My 5 cards setup is  ' + poker.getHandStrength(myFiveRandomCards));
  // } //-----------1
  counter++;

} while(poker.getHandStrength(myFiveRandomCards) > 1);   //----------2

console.log('it took ' + counter + 'times'); //-----2
console.log(
  "RoyalFlush - 0  ,", "StraightFlush - 1  ,", "FourOfAKind - 2  ,", "FullHouse -3  ,", "Flush - 4  ,", "Straight - 5  ,", "ThreeOfAKind - 6  ,", "TwoPairs - 7  ,", "Pair - 8  ,", "highestCard - 9  ,"
);







