var x = 100;
var y = 0;
var z = 1.2;

function c( a, r){
    return a * r; 
}

y = console.log(c(x,z))






function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);