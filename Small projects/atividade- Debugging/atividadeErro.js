function retornaArray(arr, num) {
    try{
        if (!arr || !num) throw new ReferenceError('Envie os parâmetros');

        if (typeof(arr) != "Object") throw new TypeError('Array precisa do tipo Object');

        if (typeof(num) != "number") throw new TypeError('Número precisa ser do tipo number');

        if (arr.length != num) throw new RangeError('Tamanho inválido');

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError){
            //AGORA VOCÊ PODE TRATAR OS ERRO"
            console.log("Esse erro é um ReferenceError")
            console.log(e.message)
        } else if(e instanceof TypeError){
            console.log("Esse erro é um TypeError")
            console.log(e.message)
        } else if(e instanceof RangeError){
            console.log("Esse erro é um RangeError")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
    }
}

console.log(retornaArray())