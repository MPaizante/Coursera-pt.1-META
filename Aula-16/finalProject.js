// Implement getPrices()
function getPrices(taxBoolean) {
    
    for (object of dishData){
        let finalPrice;

        if(taxBoolean === true){
            finalPrice = object['price'] * tax;
        } else if (taxBoolean === false){
            finalPrice = object['price'];
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        
        console.log(`Dish: ${object['name']} Price: $${finalPrice}`);
    }

}

// Implement getDiscount()
function getDiscount( taxBoolean, guests) {
    getPrices(taxBoolean);

    if(typeof guests === "number" && guests > 0 && guests < 30){
        let discount = 0;

        if(guests < 5){
            discount = 5;
        } else if(guests >= 5){
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
            console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
getDiscount(true, 2)
getDiscount(false, 10)
