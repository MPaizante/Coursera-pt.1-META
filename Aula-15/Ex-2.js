const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] 
console.log(fruitsAndBerries); 

const flying = { 
    wings: 2 
}
const car = {
    wheels: 4
}
const flyingCar = {...flying, ...car}
console.log(flyingCar) 

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies)

const greeting = "Hello my sister";
const arrayOfChars = [...greeting];
console.log(arrayOfChars)


const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, '-----------',car2.speed)

const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
    console.log(starter);






);
