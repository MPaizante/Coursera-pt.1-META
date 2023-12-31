class Animal{
    constructor(color,energy){
        this.color = color;
        this.energy = energy;
    }
    isActive(){
        if (energy > 0){
            energy -= 20 
            console.log(this.energy)
        } else if(this.energy <=0){
            this.slepp();

        }
    }
    slepp(){
        this.energy += 20;
        console.log(this.energy);
    }
    getColor(){
        console.log(this.color);
    }
}
class Cat extends Animal{
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy){
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
        super(color, energy);
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal{
    constructor(sound= ' chirp', canFly = true, color, energy){
        this.sound = sound;
        this.canFly = canFly;
        super(color,energy)
    }
    makeSound(){
        console.log(this.sound)
    }
}
class HouseCat extends Cat{
    constructor(houseCatSound = 'meow', sound, canJumpHigh , canClimbTrees, color, energy ){     
        this.houseCatSound = houseCatSound;
        super(sound,energy,canClimbTrees,canJumpHigh,color)
    }
    makeSound(){
        if(Option){
            super.makeSound()
        }
        console.log(this.houseCatSound)
    }   
    
}
class Tiger extends Cat{
    constructor(tigerSound = 'Roar', sound , canJumpHigh, canClimbTrees, color, energy){
        this.tigerSound = tigerSound;
        super(sound, canClimbTrees,canJumpHigh,color, energy)
    }
    makeSound(){
        if(Option ){
            super.makeSound()
        }
        console.log(this.tigerSound)
    } 
}
class Parrot extends Bird{
    constructor(canTalk = false, sound , color ,energy){
        this.canTalk = canTalk;
        super(sound,color,energy)
    }
    makeSound(){
        if(Option ){
            super.makeSound()
        }
        if(this.canTalk = true){
            console.log('Talking!')
        }
    }
}

let polly  = new Parrot(true);
let fiji = new Parrot(false);

polly.makeSound()
fiji.makeSound()
polly.color('yellow')
polly.energy(100)
polly.isActive()

let penguin = new Bird('Guts', false, 'Black and White', 200)

polly.makeSound()
fiji.makeSound()
polly.color('yellow')
polly.energy(100)
polly.isActive()