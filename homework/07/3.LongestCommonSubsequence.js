class LongestCommonSubsequence {
  constructor(str1, str2) {
    this.str1 = str1;
    this.str2 = str2;
    this.m = str1.length;
    this.n = str2.length;
    this.lcs = Array.from(Array(this.m + 1), () => Array(this.n + 1).fill(0));
    this.maxLength = 0;
    this.result = [];
  }

  find() {
    for (let i = 1; i <= this.m; i++) {
      for (let j = 1; j <= this.n; j++) {
        if (this.str1[i - 1] === this.str2[j - 1]) {
          this.lcs[i][j] = this.lcs[i - 1][j - 1] + 1;
          if (this.lcs[i][j] > 0) {
            this.maxLength = this.lcs[i][j];
            this.result = [this.str1.slice(i - this.maxLength, i)];
          } else if (this.lcs[i][j] === this.maxLength) {
            this.result.push(this.str1.slice(i - this.maxLength, i));
          }
        } else {
          this.lcs[i][j] = 0;
        }
      }
    }
    return this.result;
  }
}


const input = 'siemandero aasdasdasdsiemandero';
const inputs = input.split(' ');
const longestCommonSubsequence = new LongestCommonSubsequence(inputs[0], inputs[1]).find();
console.log(longestCommonSubsequence.join(', '));


