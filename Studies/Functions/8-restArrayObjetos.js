//REST
// Caso eu queria passar vários elementos para uma função


//OBSERVE OS 3 PONTOS
function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho(1,2); // VEJA QUE EU PASSO QUANTOS ELEMENTOS EU QUISER;
confereTamanho(1,2,2,3,4,5,6);
