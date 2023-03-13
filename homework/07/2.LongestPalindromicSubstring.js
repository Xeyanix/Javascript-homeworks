class LongestPalindromicSubstring {
    constructor(str) {
      this.str = str;
    }
  
    find() {
      let longestPalindrome = '';
      for (let i = 0; i < this.str.length; i++) {
        for (let j = i + 1; j <= this.str.length; j++) {
          const substring = this.str.slice(i, j);
          if (this.isPalindrome(substring) && substring.length > longestPalindrome.length) {
            longestPalindrome = substring;
          }
        }
      }
      return longestPalindrome;
    }
  
    isPalindrome(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    }
  }
  
  // Example usage:
  const input = 'cccKAJAKaaa';
  const longestPalindromicSubstring = new LongestPalindromicSubstring(input).find();
  console.log(longestPalindromicSubstring); 
  