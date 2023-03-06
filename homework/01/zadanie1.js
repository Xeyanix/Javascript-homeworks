
// d.	display how many words of length same as the longest is in the string
// e.	Examples:
// f.	“This is an example.”
// g.	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let text1 = "This is an example.";
let text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// a.	count how many words it contains ######################################################
function countSpace(a) {

    if (a.length < 1) {
        console.log("there is no string")
    }

    if (a.length === 1) {
        console.log("there is too short")
    }

    if (a.length > 1) {
        let words = 1
        for (let i = 0; i < a.length; i++) {
            let space = 0
            if (a[i] === " ") {
                space++
                words += space
            }
        }
        console.log("given string has: " + words + " words")

    }
}
countSpace(text1)
countSpace(text2)

//  b.	count how many letter “A”  is in it   #########################################################################

function countA(a) {
    let occurenceA = 0
    for (let i = 0; i < a.length; i++) {

        if (a[i].toLowerCase() === "a") {
            occurenceA++
            occurenceA += occurenceA

        }
    }
    console.log("letter 'a' occur in given text:" + occurenceA + " times ")

}
countA(text1)
countA(text2)


// c.	display longest word ##############################################

function LongestWords(a) {
    let word = a.split(" ")
    let LongestWords = ""

    for (let i = 0; i < word.length; i++) {
        if (word[i].length > LongestWords.length) {
            LongestWords = word[i];


        }
    }
    console.log(LongestWords)

}
LongestWords(text1)
LongestWords(text2)

//d.	display longest word ##############################################

function howMannyWordsHaveTheSameLongest(a) {
    let word = a.split(" ")
    let Longestword = ""
    let counter = 0

    for (const i of word) {
        if (i.length > Longestword.length) {
            Longestword = i;
        }
    }
    for (const j of word) {
        if (j.length === Longestword.length) {
            counter++
        }
    }
    let lengthOfLongestWord = Longestword.length
    if (Longestword.endsWith(".")) {
        lengthOfLongestWord -= 1

    }

    console.log("Words with length same as longest: ", Longestword);

}
howMannyWordsHaveTheSameLongest(text1)
howMannyWordsHaveTheSameLongest(text2)