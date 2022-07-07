//ESCONDER FILLED  em todos, menos no circle

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const pencilBtn = document.getElementById('pencil');
const lineBtn = document.getElementById('line');
const circleBtn = document.getElementById('circle');
const eraseBtn = document.getElementById('erase');
const trashEl = document.getElementById('trash');
const checkboxFill = document.getElementById('filled');


let size = 5;
let filled = false;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;
let sLine = false;
let sCircle = false;
let sPencil = false;
let sErase = false;

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});


checkboxFill.addEventListener('change', function() {
    if(this.checked) {
       filled = true;
    }else{
        filled = false;
    }
});

canvas.addEventListener('mousedown', (e) =>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) =>{
    isPressed = false;
    if(sCircle){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2,y2,filled);
    }
    if(sLine){
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawLine(x,y,x2,y2);
    }
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) =>{
    if(isPressed){
        if(sPencil){
            const x2 = e.offsetX;
            const y2 = e.offsetY;
            drawLine(x,y,x2,y2);
            drawCircle(x2,y2,filled);
            x = x2;
            y = y2; 
        }
    }
});

function drawCircle(x, y,filled) {
    /* CIRCLE ctx.arc(x,y,r,s,end)
        x = x coordinate of the center of the circle;
        y = y coordinate of the center of the circle;
        r = radius of the circle
        0 = start angle;
        2*math.pi = end angle;
    */
    ctx.beginPath();
    ctx.arc(x,y,size,0,2*Math.PI);
    if(filled){
        ctx.fill();
        ctx.fillStyle = color;
    }else{
        ctx.stroke();
        ctx.strokeStyle = color;
    }
}
function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle= color;
    ctx.lineWidth = size;
    ctx.stroke();
}

/*
sCircle = false;
sLine = true;
sErase = false;
sPencil = false; */

pencilBtn.addEventListener("click",()=>{
    sPencil = true;
    sCircle = false;
    sLine = false;
    sErase = false; 
    pencilBtn.classList.add('selected');
    circleBtn.classList.remove('selected');
    lineBtn.classList.remove('selected');
    eraseBtn.classList.remove('selected');
});
lineBtn.addEventListener("click",()=>{
    sPencil = false;
    sCircle = false;
    sLine = true;
    sErase = false; 
    pencilBtn.classList.remove('selected');
    circleBtn.classList.remove('selected');
    lineBtn.classList.add('selected');
    eraseBtn.classList.remove('selected');
});
circleBtn.addEventListener("click",()=>{
    sPencil = false;
    sCircle = true;
    sLine = false;
    sErase = false; 
    pencilBtn.classList.remove('selected');
    circleBtn.classList.add('selected');
    lineBtn.classList.remove('selected');
    eraseBtn.classList.remove('selected');
});
eraseBtn.addEventListener('click',()=>{
    sCircle = false;
    sLine = false;
    sErase = true;
    sPencil = false;
    pencilBtn.classList.remove('selected');
    circleBtn.classList.remove('selected');
    lineBtn.classList.remove('selected');
    eraseBtn.classList.add('selected');
});


increaseBtn.addEventListener('click', () =>{
    size += 5;

    if(size>100){
        size=100;
    }

    updateSizeOnscreen();
});
decreaseBtn.addEventListener('click', () =>{
    size -= 5;

    if(size < 5){
        size = 5;
    }

    updateSizeOnscreen();
});
trashEl.addEventListener('click', () =>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
});
function updateSizeOnscreen(){
    sizeEl.innerText = size;
}