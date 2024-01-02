const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}: ${fruit}`)
}
fruits.forEach(appendIndex);


const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});


const nums = [0,10,20,30,40,50];
console.log(nums.filter( function(num) {
    return num > 20;
}))
console.log(nums.map(function(num){
    return num /10;
}))


const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);



const x = ['onion', 'garlic', 'potato', 2 , 3 , 4 , 5 , 6]

console.log(...x)

const top7 = [
    'RJ',
    'SG',
    'Niteroi',
    'Petropolis',
    'Cabo Frio',
    'Rio das Ostras',
    'Duque de Caxias'
];
console.log(top7)
console.log(...top7);

const [] = top7;
console.log(top7)

function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item)
}
let shoppingCart = addTaxToPrices(1.1,46,89,35,79)
console.log(shoppingCart)