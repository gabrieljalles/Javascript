//EXEMPLO DE FOR MAIS COMUM
function multiplicaPorDois(arr){
    let multiplicados = [];
    
    for(let i=0;i < arr.length;i++){
        multiplicados.push(arr[i] *2);
    }

    return multiplicados;
}
//================FOR IN==================================
//FOR IN LOOP entre propriedades ENUMERÁVEIS de um OBJETO;

function forInExemplo(obj){
    for(prop in obj){                   //PARA CARA PROPRIEDADE DO MEU OBJETO, FAÇA :
        console.log(prop);              //IMPRIME CADA PROPRIEDADE DO OBJETO;
    }
}

//MESMA COISA, AGORA ELE RETORNA O VALOR;
function forInvalue(){
    for(prop in obj){
        console.log(obj[prop]);         //IMPRIME CADA VALOR;
    }
}

//EXEMPLO
const objeto= {
    nome:"fernando",
    idade:"22",
    cidade: "Salvador",
}

forInExemplo(objeto); // r: nome idade cidade
forInvalue(objeto); // r: fernando 22 Salvador

//==================FOR OF==================================
//FOR OF LOOP entre estruturas iteráveis

function logLetras(palavra) {
    for(letra of palavra) {      // para cada letra da palavra, faça :
        console.log(letra);      // IMPRIMA A LETRA;
    }
}

//==================WHILE===================================
//EXECUTA INSTRUÇÕES ATÉ QUE A CONDIÇÃO SE TORNE FALSA

function exemploWhile() {
    let num = 0; 

    while(num<= 5){
        console.log(num);
        num++;
    }
}

//==================DO WHILE================================
// RODA O CÓDIGO 1 VEZ E DEPOIS PASSA A SER O WHILE NORMAL

