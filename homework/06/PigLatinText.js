// 4)	Write a function that translates a text to Pig Latin and back.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word, and adding ‘ay’.
// “The quick brown fox” becomes “hetay uickqay rownbay oxfay”.

function toPigLatin(text) {
    return text
      .split(" ")
      .map((word) => {
        const firstLetter = word[0];
        return word.slice(1) + firstLetter + "ay";
      })
      .join(" ");
  }
  
  function fromPigLatin(text) {
    return text
      .split(" ")
      .map((word) => {
        const index = word.length - 3;
        return word[index] + word.slice(0, index);
      })
      .join(" ");
  }
  
  const englishText = "The quick brown fox";
  const pigLatinText = toPigLatin(englishText);
  console.log(pigLatinText); // Output: "Hetay uickqay rownbay oxfay"
  const originalText = fromPigLatin(pigLatinText);
  console.log(originalText); // Output: "The quick brown fox"
  