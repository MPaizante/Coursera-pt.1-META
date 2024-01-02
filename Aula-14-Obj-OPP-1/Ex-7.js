let {PI} = Math;
console.log(PI)

console.log(PI === Math.PI)

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3));


const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}