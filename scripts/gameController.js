var crossing = document.getElementById('crossing');
var player = document.getElementById('player');

crossing.addEventListener('animationiteration', () => {
    let randomGenerator = (Math.random() * 400 + 200)
    crossing.style.top = -randomGenerator + "px"
})