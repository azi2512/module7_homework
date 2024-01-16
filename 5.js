class ElectricalDevices {
  constructor() {
    this.type = 'devices',
    this.isClass = 'A++'
  }
  turnOn() {    console.log('It"s not working')  }
}

class Device extends ElectricalDevices {
  constructor(name, power){
    super();
    this.name = name,
    this.power = power
  }
  turnOn() {    console.log('It"s working')  }
}


const fridge = new Device('fridge', 100);
const laptop = new Device('laptop', 50);

console.log(fridge)
console.log(laptop)

function sumPower(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i].power;    
  }
  console.log('All power is ' + sum + ' v')
}

sumPower([fridge, laptop])