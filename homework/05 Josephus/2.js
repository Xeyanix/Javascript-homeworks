

// 1.	Solve Josephus's Problem for 7 soldiers using JavaScript. (You can try to solve it with classes)
// Display in the console
// a.	1st Kills 2nd
// b.	3rd Kills 4fourth
// c.	5th Kills 6th
// d.	7th Kills 1th
// e.	3th Kills 5th
// f.	7th Kills 3th
// // g.	7th Remains alive

class Josephus {
    constructor(Soldiers) {
      this.Soldiers = Soldiers;
      this.nextSoldier = new Array(Soldiers);
      for (let i = 0; i < Soldiers; i++) {
        this.nextSoldier[i] = i + 1;
      }
    }
  
    kill(k) {
      let i = k % this.Soldiers;
      while (this.Soldiers > 1) {
        this.nextSoldier.splice(i, 1);
        this.Soldiers--;
        i = (i + k) % this.Soldiers;
      }
      return this.nextSoldier[0];
    }
  }
  
  const josephus = new Josephus(7);
  console.log(josephus.kill(1));
