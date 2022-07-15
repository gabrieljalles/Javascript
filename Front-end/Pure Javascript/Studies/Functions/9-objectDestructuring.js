//OBJECT DESTRUCTURING usado para filtrar apenas dados que nos interessam em um objeto;

//OBJETO DE EXEMPLO 
const user = {
    id:42,
    displayName: 'joao',
    fullName: {
        firstName:'Cleiton',
        lastName: 'Rasta'
    }
};

//CRIANDO UMA FUNCAO DE OBJETO DESTRUCTURING , me interessa só o ID
function userId({id}){
    return id;
}

//CHAMANDO FUNCAO
userId(user); //Veja que só passei o nome do OBJETO; como a minha função já pede o ID.
// r: 42;

//--------------------------------------------------------------------


//CRIANDO OUTRA FUNCAO DE EXEMPLO 
function getFullName({fullName:{firstName:first,lastName:last}}){
    return `${first} ${last}`;
}