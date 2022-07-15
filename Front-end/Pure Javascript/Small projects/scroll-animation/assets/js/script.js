const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);



function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4 ;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top //Retorna o tamanho do elemento e a posição relativa ao viewport; Nesse caso, quero a posição top do elemento;

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    });
    
}