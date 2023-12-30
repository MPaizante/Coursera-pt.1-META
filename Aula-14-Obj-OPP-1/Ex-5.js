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

}