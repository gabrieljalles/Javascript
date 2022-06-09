//PRIMEIRA FORMA DE USAR O IF

let resultado;
if( num > 0 ){
    resultado = true;
}else{
    resultado = false;
}

//SEGUNDA FORMA DE USAR O IF
function ehPositivo(num){
    //é uma boa prática já declarar dizendo o condicional
    const ehNegativo = num < 0;

    if(ehNegativo){ 
        return false;
    }
    return true;
}
//Observe que dessa forma, não precisei usar  o ELSE