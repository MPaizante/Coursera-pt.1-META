class Person{
    constructor(name = "Tom",age = 20,energy = 100){
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep(){
        this.energy += 10;
    }
    doSomethingFun(){
        this.energy -=10;
    }
}
class Worker extends Person{
    constructor(name = "Tom",age = 20,energy = 100, xp = 0,hourlyWage = 10){
        super(name,age,energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork(){
        this.xp += 10;
    }
}

function createIntern(){
    var internObject = new Worker("Bob", 21, 110, 0, 10);
    internObject.goToWork();
    return internObject;
}

function createManager() {
    var managerObject = new Worker("Alice", 30, 120, 100, 30);
    managerObject.doSomethingFun();
    return managerObject;
}

const internInstance = createIntern();
console.log("Intern object:", internInstance);

const managerInstance = createManager();
console.log("Manager object:", managerInstance);