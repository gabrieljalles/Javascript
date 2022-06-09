const alunos = [
    {
        nome:"geraldo",
        nota:6,
        turma:"k",
    },
    {
        nome:"fernando",
        nota:3,
        turma:"k",
    },
    {
        nome:"juarez",
        nota:9,
        turma:"b",
    },

]

//SEM OBJECT DESTRUCTURING
function alunosAprovados(arr, media){
    let aprovados = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i].nota >= media) {
            aprovados.push(arr[i].nome)
        }
    }
    return aprovados;
}

//COM OBJECT DESTRUCTURING
function alunosAprovados(arr, media){
    let aprovados = [];
    for(let i = 0; i < arr.length; i++){
       const {nota, nome} = arr[i];
       if(nota >= media){
           aprovados.push(nome);
       }
    }
    return aprovados;
}
