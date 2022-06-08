function hePalindromo(frase) {
    let palavraJ = frase.replace(/\s+/g,"")
    let palavraInv = frase.replace(/\s+/g,"").split("").reverse().join("")
    palavraInv == palavraJ ?console.log( `A frase ${frase} é um palindromo`):console.log(`A frase ${frase} NÃO é um palindromo`);
}
hePalindromo("anotaram a data da maratona")

