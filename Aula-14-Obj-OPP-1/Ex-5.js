let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

let eagle1 = Object.create(bird);
console.log('Eagle1:',eagle1.canFly)

let penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log('Penguin:',penguin1)

class Train{
    constructor(color, lightOn){
        this.color = color;
        this.lightOn = lightOn;

    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
    


}

let myFristTrain = new Train('red',false);
console.log(myFristTrain)
let mySecondTrain = new Train('green', false);
console.log(mySecondTrain)
let myThirdTrain = new Train('blue', false);
console.log(myThirdTrain)
let train4 = new Train('red', false);
console.log('======================================')

train4.toggleLights();
train4.lightsStatus(); 
train4.getSelf(); 
train4.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn,color,lightOn){
        super(color,lightOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeedOn(){
        this.highSpeedOn = !this.highSpeedOn
        console.log('High speed status: '+ this.highSpeedOn)
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.')
    }
}
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
console.log(train5.toggleLights()); 
console.log(train5.lightsStatus());
console.log(highSpeed1.toggleLights());



class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) 
console.log(boxingGym.stationaryBike) 
console.log(boxingGym.treadmill) 

function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams();