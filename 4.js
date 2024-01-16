function ElectricalDevices(){ 
    this.type = 'devices',
    this.isClass = 'A++'
}

ElectricalDevices.prototype.turnOn = function() {
    console.log('It"s not working')
}

function Device(name, power){
    this.name = name,
    this.power = power
}

Device.prototype = new ElectricalDevices();

Device.prototype.turnOn = function() {
    console.log('It"s working')
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