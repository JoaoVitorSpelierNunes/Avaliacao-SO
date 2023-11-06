const button = document.querySelector('#button');

button.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"});
})

const project = document.querySelector('#sobre');

project.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"});
})

const blockchain = document.querySelector('#windows');

blockchain.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*1.8, behavior: "smooth"});
})

const invest = document.querySelector('#linux');

invest.addEventListener('click', () => {
    window.scroll({top: window.innerHeight*3.8, behavior: "smooth"});
})