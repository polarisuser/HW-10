// Cars

class Cars {
  constructor(model, year, color, engine) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.engine = engine;
  }

  showInfo() {
    return `
    Model: ${this.model};
    Year: ${this.year};
    Color: ${this.color};
    Engine type : ${this.engine}`;
  }
}

class Electrocars extends Cars {
  constructor(model, year, color, engine, battery) {
    super(model, year, color, engine);
    this.battery = battery;
  }

  promote() {
    return `Fast cars and electric cars from Germany.Get there fast with us!`;
  }
}

const bmw = new Cars("bmw", "2018", "black", "6.6");

console.log(bmw.showInfo());

const electrocars = new Electrocars("Opel", 2022, "black", "3.3");

console.log(electrocars.showInfo());
console.log(electrocars.promote());
