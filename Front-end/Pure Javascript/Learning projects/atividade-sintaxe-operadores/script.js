function atividade(a, b) {
     const igualdade = (a==b) ? "São iguais":"Não são iguais";
     const soma = parseInt(a)+parseInt(b);
     const largerten = (soma>10) ? "maior que 10": "menor que 10";
     const smallertwenty = (soma<20) ? "menor que 20": "maior que 20 ";
     console.log(`Os números ${a} e ${b} ${igualdade}. Sua soma é ${soma}, que é ${largerten} e ${smallertwenty}`)
}
atividade("20","2")