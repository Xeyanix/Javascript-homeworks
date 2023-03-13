class Soldier {
  constructor(id) {
    this.id = id;
    this.next = null;
    this.prev = null;
  }
}

class Circle {
  constructor(numSoldiers) {
    this.numSoldiers = numSoldiers;
    this.head = null;
    this.tail = null;
    this.currentSoldier = null;

    // create the circle of soldiers
    for (let i = 1; i <= numSoldiers; i++) {
      this.addSoldier(i);
    }

    // link up the soldiers
    this.linkSoldiers();
  }

  addSoldier(id) {
    const soldier = new Soldier(id);

    if (this.head === null) {
      this.head = soldier;
      this.tail = soldier;
    } else {
      this.tail.next = soldier;
      soldier.prev = this.tail;
      this.tail = soldier;
    }
  }

  linkSoldiers() {
    let currentSoldier = this.head;

    while (currentSoldier.next !== null) {
      currentSoldier = currentSoldier.next;
    }

    currentSoldier.next = this.head;
    this.head.prev = currentSoldier;
  }

  play() {
    let count = 1;
    this.currentSoldier = this.head;

    while (this.numSoldiers > 1) {
      if (count % 2 === 0) {
        console.log(`${this.currentSoldier.prev.id} kills ${this.currentSoldier.id}`);
        this.currentSoldier.prev.next = this.currentSoldier.next;
        this.currentSoldier.next.prev = this.currentSoldier.prev;
        this.currentSoldier = this.currentSoldier.next;
        this.numSoldiers--;
      } else {
        this.currentSoldier = this.currentSoldier.next;
      }

      count++;
    }

    console.log(`${this.currentSoldier.id} remains alive`);
  }
}

const circle = new Circle(7);
circle.play();
