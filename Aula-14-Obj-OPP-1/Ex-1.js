var x = 100;
var y = 0;
var z = 1.2;

function c( a, r){
    return a * r; 
}

y = console.log(c(x,z))


var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);