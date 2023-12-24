var storeManager = {
    movement : 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40

}
console.log(storeManager)

storeManager.nextAcheivement = "open a new store";

console.log(storeManager)

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

console.log(assistantManager.specialAbility)

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log("O valor dos atributos do drone",arrOfKeys[i],":",drone[arrOfKeys[i]])
}