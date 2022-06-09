cleiton = {
     nota1: 5,
     nota2: 8,
     nota3: 4,
     nota4: 3,
     nota5: 9,
    }

ricardo = {
     nota1: 3,
     nota2: 4,
     nota3: 7,
     nota4: 4,
     nota5: 2,
}

function media(alunos){
    resultados = [];
    for(let i=0; i<alunos.length; i++){
        let totalNotas= 0;
        let notas = 0;
        let mediaFinal = 0;

        for(prop in alunos[i]){
            notas += 1
            totalNotas +=alunos[i][prop]
        }
        mediaFinal = 5 < totalNotas/notas
        resultados.push(mediaFinal ? "Aprovado": "Reprovado");
           
    }
    console.log(resultados)
}

alunos = [cleiton,ricardo] // 5.8 ,  4
// r : [ 'Aprovado', 'Reprovado' ]

media(alunos)







