// O objetivo do desafio era fazer a mesma coisa que onclick através do addEventListener;

//declarando variáveis
var currentNumberWrapper = document.getElementById('currentNumber');
var btnadicionar = document.getElementById('adicionar');
var btnsubtrair = document.getElementById('subtrair');
var currentNumber = 0;
    
// ouvindo elemento, caso click, aumente
btnadicionar.addEventListener("click",function(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
});

// Não subtrai caso chega em 0;
btnsubtrair.addEventListener("click",function(){
    if(currentNumber > 0){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
});


