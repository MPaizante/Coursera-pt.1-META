

function r(x){
    let v = 0;
    
    if (x == true){
        switch(2){
            case 1:
                v = 9.55 * 1.2
                console.log('Prato: Massa italiana Preço',v);
                
                break;
            case 2:
                v = 8.65 * 1.2
                console.log('Arroz com legumes Preço',v);
                
                break;
            case 3:
                v =15.55 *1.2
                console.log('Frango com batatas Preço ',v);
                
                break;
            case 4:
                v =6.45 * 1.2
                console.log(' Pizza vegetariana Preço',v);
                
                break;
            default:
                console.log('Fora do cardapio!')
        }
    }else{
        switch(2){
            case 1:
                v = 9.55
                console.log('Prato: Massa italiana Preço',v);
                
                break;
            case 2:
                v = 8.65
                console.log('Arroz com legumes Preço',v);
                
                break;
            case 3:
                v =15.55
                console.log('Frango com batatas Preço ',v);
                
                break;
            case 4:
                v =6.45
                console.log(' Pizza vegetariana Preço',v);
            default:
                console.log('Fora do cardapio!')
        }
        return v;
    }
    
}
r(false);