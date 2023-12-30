let purchase1 = {
    shoes: 100,
    Tax: 1.2,
    totPrice: function(){
        let calculation = purchase1.shoes * purchase1.Tax
        console.log('Total price: ' + calculation )
    }
}

purchase1.totPrice();

let purchase2 = {
    shoes: 50,
    Tax: 1.2,
    totPrice: function(){
        let calculation = purchase2.shoes * purchase2.Tax
        console.log('Total price: ' + calculation )
    }
}

purchase2.totPrice();

let purchase3 = {
    shoes: 150,
    Tax: 1.5,
    totPrice: function(){
        let calculation = this.shoes * this.Tax
        console.log('Total price: ' + calculation )
    }
}

purchase3.totPrice();

