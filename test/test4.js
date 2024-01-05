
const animal ={

    canJump: true
    
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (var prop of Object.keys(bird)) {
        console.log(prop + ':' + bird[prop]);
    }
}
birdCan();


    