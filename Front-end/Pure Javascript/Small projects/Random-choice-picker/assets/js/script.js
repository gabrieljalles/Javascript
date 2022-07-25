const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },20)
        randomSelect()
    }
})

function createTags(input){ 
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const tags = document.querySelectorAll('.tag')
    const times = (10 * tags.length) //Número de mudanças

    const interval = setInterval(() =>{
        const randomTag = pickRandomTag()

        if(randomTag !== undefined){
            highlightTag(randomTag)

            setTimeout(() =>{
                unHighlightTag(randomTag)
            }, 100)
        }
    },100);

    setTimeout(()=> {
        clearInterval(interval)

        setTimeout(()=>{
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}


//escolhe uma tag aleatoriamente
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}


//adiciona hilight
function highlightTag(tag) {
    tag.classList.add('highlight')
}

//remove hilight
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}