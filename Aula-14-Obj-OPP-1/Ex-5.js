let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

let eagle1 = Object.create(bird);
console.log('Eagle1:',eagle1.canFly)

let penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log('Penguin:',penguin1)