//Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight

class Player {
  constructor(name, age, height, weight) {
    // complete function
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge() {
    // complete function
    return `${this.name} is age ${this.age}`;
  }

  getHeight() {
    // complete function
    return `${this.name} is height ${this.height} cm`;
  }

  getWeight() {
    // complete function
    return `${this.name} weighs ${this.weight} kg`;
  }
}

let saurabh = new Player("Saurabh", 25, 175, 80);
console.log(saurabh.getAge());
