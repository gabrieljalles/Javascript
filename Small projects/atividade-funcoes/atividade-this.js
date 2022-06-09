const pessoa1 = {
    nome: 'Carla',
    idade: 26,
}
const pessoa2 = {
    nome: 'Roberto',
    idade: 32,
}


// Criando uma função que independe dos objetos;
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade`;
}


// chamando a função
console.log(calculaIdade.call(pessoa2,5));
console.log(calculaIdade.apply(pessoa1,[4]));