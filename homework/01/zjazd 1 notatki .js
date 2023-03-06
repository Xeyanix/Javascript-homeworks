
// let myText = "hello world";
// let myHello = myText.slice(6);
// console.log myHello;
// console.log myText;`
// --------------------------------------------
// let name = "Janek "; 

// if name === ("Janek") 
// {
//     console.log("hello Janek");
// }

// else if (name === "Michał")
//  {
//     console.log(" hello Michał ");
//  } 

// else 
// {
//     console.log(" hello unknown");
// }
// ----------------------------------------------
// let counter = 0;
// while  (counter < 5)
//  {
//     console.log(counter)
//     counter++;
// }

// for (let i=0; i <10; i++)
//  {


// }

// // ---------------------------------------

// let height= 10; //zmienna wysokosc choinki 

// for (let i=1; i <=height ; i++)
// {
// let spacesCount = height - i;
// let hashesCount = i;
// let output = "";
// for (let j = 1; j <= spacesCount; j++)
//  {
//     output=output + " ";
//  }
//  for (let k = 1; k <= hashesCount; k++)
//  {
//    output = output + "*";
//  }
// console.log(output);
// }

// WYSWIETLACZ

// let sentence = "Hello, this is my long sentence, please break it up on the display."
// //if sentence lenth <=12 - dispaly it 
// if (sentence.length <=12) {
//   console.log(sentence);
// } else {
// //else as long as sentence length >12 reapeat;
//  while(sentence.length > 12) {
//  //a.take part of sentence  that ends with space that is 13th character or less
//  let output sentence.lastIndexOf(" ",13)
//  //b.display it 
// console.log(output);

// //c.delete what is dispplayed and save rest of sentence 
// sentence = output.slice(13+1)
// }

let longSentence = 'Hello, this is my long sentence, please break it up on the display.';
let DISPLAY_SIZE = 12;
// 1 As long as sentence is longer than 12 characters
while (longSentence.length > DISPLAY_SIZE) {
// a. Take part of sentence that ends with space that is 13th character or lower
let indexOfLastSpace = longSentence.lastIndexOf(' ', DISPLAY_SIZE);
let partOfSentence = longSentence.slice(0, indexOfLastSpace);
// b. Display it
console.log(partOfSentence);
// c. Save rest of sentence
longSentence = longSentence.slice(indexOfLastSpace + 1);
}
// 2. If sentence length < 12


















