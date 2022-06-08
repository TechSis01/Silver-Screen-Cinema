const loader = document.querySelector('#preloader')
window.addEventListener('load', function() {
    loader.style.display = 'none'
})

var vid = document.getElementById("myVideo");

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}
const hamburger = document.querySelector('.hamburger')

//navbar toggle
    hamburger.addEventListener('click',()=>{
        let nav = document.querySelector('.nav-link')
        nav.classList.toggle('nav-active')
    })

