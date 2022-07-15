//SERVE PARA MUITAS VERIFICAÇÕES E VOCÊ DESEJA ESCOLHER UMA
// EQUIVALE A COMPARAÇÃO DE TIPO E DE VALOR ===
// SEMPRE PRECISA DE UM VALOR DEFAULT

function animal(id){
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "coelho";
        default:
            return "animal morto";
    }
}

// CHAMANDO CASE
animal(1) // r: cão