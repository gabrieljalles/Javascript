// this é  uma referência de contexto
// Observe que dentro do OBJETO pessoa eu criei uma funcao
// Toda função criada dentro deu um objeto é um MÉTODO.
const pessoa = {
    firstName: "Gabriel",
    fullName: function() {
        return this.firstName
    }
}

// O this referencia o objeto pessoa;

// ------CONTEXTO------|------REFERENCIA------
//     objeto(método)    próprio objeto dono do método
//     Sozinha           Objeto global, em navegadores Window
//     Funcao            Objeto global
//     Evento            Elemento que recebeu o evento

//MANIPULANDO O VALOR DO THIS

//USO DO CALL-----------------------------------------------------
const PESSOA = {
    nome: 'gabriel',
}
const ANIMAL = {
    nome:'jubiralda',
}

//Crio uma função que não tem relação nenhuma com os objetos acima;
function getSomething() {
    console.log(this.nome);
}

//CHAMANDO...
getSomething.call(PESSOA); // r: Gabriel
getSomething.call(ANIMAL); // r: jubiralda;
//---------OUTRO EXEMPLO DE CALL -----------

const OBJ = {
    num1:2,
    num2:4,
};

// Mesmo que eu passe só o a,b posso passar o objeto
function soma(a,b){
    console.log(this.num1 + this.num2 +a +b);
}

soma.call(OBJ, 1,5); // r: 12;

//USO DO APPLY----- IGUAL AO CALL------------------------------------------------
// A UNICA COISA QUE MUDA É QUE OS ARGUMENTOS SÃO PASSADOS DENTRO DE UM ARRAY;
soma.apply(OBJ,[1,5])



//USO DO BIND ------ CLONA A FUNCAO PODENDO DAR UM NOVO NOME A ELA COM UM OBJ

