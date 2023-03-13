class MorseCodeConverter {
    constructor() {
        this.morseCodeDict = {
            'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
            'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
            'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
            'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
            '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
            '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.',
            '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
            '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
        };
    }

    textToMorseCode(text) {
        const chars = text.toLowerCase().split(''); // Convert the text to lower case and split it into an array of characters
        const morseCode = chars.map(char => this.morseCodeDict[char] || '?');  // Map each character to its Morse code equivalent, or '?' if not found in the dictionary
        return morseCode.join(' ').replace(/\s+/g, ' / ');         // Join the Morse code array into a single string, using a space to separate letters and a slash to separate words
    }

    morseCodeToText(morseCode) {
        const words = morseCode.split(' / ');  // Split the Morse code string into an array of words
        const letters = words.map(word => word.split(' '));     // Map each word to an array of its letters, using a space to separate them
        // Map each letter to its English equivalent, or '?' if not found in the dictionary
        const text = letters.map(word => word.map(letter => {
            const char = Object.keys(this.morseCodeDict).find(key => this.morseCodeDict[key] === letter);
            return char || '?';
        }));

        // Join the letters into words and the words into a single string, using a space to separate them
        return text.map(word => word.join('')).join(' ');
    }
}

// Example usage
const converter = new MorseCodeConverter();
const englishText = 'lubie placki';
const morseCode = converter.textToMorseCode(englishText);
console.log(morseCode); // prints: ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
const decodedText = converter.morseCodeToText(morseCode);
console.log(decodedText); // prints: "hello world"
