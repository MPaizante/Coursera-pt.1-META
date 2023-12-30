class Car{
    constructor(color,speed){
        this.color = color;
        this.speed = speed;

    }
    turboOn(){
        console.log('Turbo is on!')
    }

}
const car1 = new Car('red', 120)
car1.turboOn()
console.log(car1)

class RJ{
    zone(){
        console.log("Oeste, Baixada, Metropolitana, Leste, Sul.")
    }
}
class Sul extends RJ{
    zone(){
        console.log("Zone Sul.")
    }
    neighborhood1(){
        console.log("Botafogo!")
    }
    neighborhood2(){
        console.log("Flamengo!")
    }
    neighborhood3(){
        console.log("Copacabana!")
    }
    neighborhood4(){
        console.log("Ipanema!")
    }
    
}
class Oeste extends RJ{
    zone(){
        console.log("Zone Oeste.")
    }
    neighborhood1(){
        console.log("Campo Grande!")
    }
    neighborhood2(){
        console.log("Barra da Tijuca!")
    }
    neighborhood3(){
        console.log("Bangu!")
    }
    neighborhood4(){
        console.log("Cosmos!")
    }
    
}

let O = new Oeste();
let S = new Sul();
O.zone();
O.neighborhood1();
S.zone();
S.neighborhood1();
