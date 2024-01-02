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