function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let x = new Icecream("Choco");
console.log(x.meltIt())


let apple = new String("Apple");
console.log(apple)

console.log(new String('plum') === new String('plum'))