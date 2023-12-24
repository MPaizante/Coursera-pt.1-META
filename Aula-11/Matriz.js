var train = ['car','iphone', 'Nasa', 'ball' ];
console.log(train[0])
console.log(train[1])
console.log(train[2])
console.log(train[3])
console.log(train)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
function listArrayItems(arr){
    for(var i = 0; i < arr.length;i++){
        console.log(i+1,arr[i]);

    }
}
listArrayItems(colors);