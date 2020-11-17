var crossing = document.getElementById('crossing');
var player = document.getElementById('player');

crossing.addEventListener('animationiteration', () => {
    let randomGenerator = (Math.random() * 400 + 200)
    crossing.style.top = -randomGenerator + "px"
})

setInterval(() => {

    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    if (playerTop <= 550) {
        player.style.top = (playerTop + 3)
    }
}, 16.6)