//um array com todos os parametros passados quando a função foi invocada.


//função de exemplo - encontra o maior
function encontreMaior() {
    let max = -infinity;
    
    for(let i=0; i < arguments.length; i++) {
        if (arguments[i]> max){
            max = arguments[i];
        }
    }

    return max;
}

//independente do tanto de argumento passado, o """""arguments"""""" referencia a todos.