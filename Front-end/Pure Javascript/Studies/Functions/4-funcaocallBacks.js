// funções callbacks são funções que são passadas como argumentos para outras funções;

//FUNCAO PRINCIPAL
function calc(operacao,a,b){
    return operacao(a,b);
}

//FUNCAO CALLBACKS
const SOMA = function(a,b){
    return a+b;
}

//CHAMANDO FUNCAO
calc(SOMA,5,3) //8
