var clothes = [];
clothes.push("camisa")
clothes.push("bermuda")
clothes.push("tenis")
clothes.push("camiseta")
clothes.push("calça")
console.log(clothes)
clothes.pop();
clothes.push('casaco');
console.log(clothes)
var favCar = {
    color:'red'
}
favCar.covertible = true
console.log(favCar)

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()

var result = "Hello".indexOf('l');
console.log(result)


var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";
console.log(dog)

var latters = 'Matheus';

console.log(latters.match(/a/))