//primeira solução
    //ignora espaços
    // há sensibilidade com acentos.
function ehPalindromo(frase) {
    if(!frase){console.log("Não foi passado nenhuma frase!")}
    else{
        let palavraJ = frase.replace(/\s+/g,"")
        let palavraInv = frase.replace(/\s+/g,"").split("").reverse().join("")
        palavraInv == palavraJ ?console.log( `A frase ${frase} é um palindromo`):console.log(`A frase ${frase} NÃO é um palindromo`);
    }
}

//ehPalindromo("")



//Segunda solução
function ehPalindromo2(frase){
    if(!frase){console.log("Não foi passado nenhuma frase!")}
    else{
        let resultado;
        let j = frase.length -1
        for(let i =0; i<frase.length;i++){
            if(frase[i]==frase[j]){
                resultado = true;
                j-=1
            }else{
                resultado = false; 
                break; 
            }
        }
        resultado == true ? console.log(`A frase ${frase} é um palindromo`):console.log(`A frase ${frase} NÃO é um palindromo`)
    }
}

ehPalindromo2("aja okvlko aja")
