const car = {
    engine: true,
    streering: true,
    speed:'slow'
}
const sportsCar = Object.create(car);
sportsCar.speed = 'fast';

console.log('The sportsCar Object', sportsCar)

console.log('for-in is unreliable')


for(prop in sportsCar){
    console.log(sportsCar[prop])
}
for(prop in sportsCar){
    console.log(prop)
}
console.log('for-of is reliable')

for(prop of Object.keys(sportsCar)){
    console.log(prop , ':' , sportsCar[prop])
}

