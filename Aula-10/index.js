for(var i = 1; i <=10; i++){
    if(i == 1){
        console.log("Medalha de ouro.")

    }
    else if(i == 2){
        console.log("Medalha de prata")
    } 
    else if(i == 3){
        console.log("Medalha de bronze")

    }else{
        console.log(i,"lugar.")
    }
}

for(var i = 1; i <=10; i++){
    switch(i){
        case 1:
            console.log("Medalha de ouro.");
            break;
        case 2:
            console.log("Medalha de prata");
            break;
        case 3:
            console.log("Medalha de bronze");
            break;
        default:
            console.log(i,"lugar.");
            break;


    }
}
