// 2)	Write a class that prints the list of the first n Fibonacci numbers. 
// The first two Fibonacci numbers are 1 and 1. The n+1 Fibonacci number can be computed by adding the n and the n-1 Fibonacci number.
//  The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
    static generate(n) {
      const fib = [1, 1];
      for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }
      return fib;
    }
  
    static print(n) {
      const fib = Fibonacci.generate(n);
      console.log(`First ${n} Fibonacci numbers: ${fib.join(', ')}`);
    }
  }
  
  Fibonacci.print(6); 
  