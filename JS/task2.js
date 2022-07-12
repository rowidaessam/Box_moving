startbtn.addEventListener("click", function(){
    square.style.animation = "square-bounce 0.7s ";
    square.style.webkitAnimation = "square-bounce 0.7s ";
});
stopbtn.addEventListener("click", function(){
    square.style.animation = "";
    square.style.webkitAnimation = "";
});

const jstoggle = document.getElementById('js-toggle');
jstoggle.addEventListener('click', () => {
const animations = document.querySelectorAll('[data-animation]');
animations.forEach(animation => {
const running = animation.style.animationPlayState || 'running';
animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
})
});