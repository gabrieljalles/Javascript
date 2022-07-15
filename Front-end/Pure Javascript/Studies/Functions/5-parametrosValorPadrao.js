//Caso queira deixar um parametro PADRÃO para uma função, um que caso não seja passado nada, ele atua por padrão.

//CASO QUEIRA, MUDE O num
function exponencial(array,num=1){
    const resultado = [];

    for(let i=0; i< array.length; i++){
        resultado.push(array[i]** num);
    }

    console.log(resultado);
}

//EXEMPLO PADRÃO
exponencial([1,2,3,4])// r: [1,2,3,4]

//EXEMPLO MODIFICADO
exponencial([1,2,3,4],4)// r: [1,16,81,256]

