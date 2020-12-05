var crossing = document.getElementById('crossing');
var player = document.getElementById('player');

var pipe = document.getElementById('pipe');

crossing.addEventListener('animationiteration', () => {
    let randomGenerator = (Math.random() * 400 + 200)
    crossing.style.top = -randomGenerator + "px"
})

setInterval(() => {

    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    if (playerTop <= 550) {
        player.style.top = (playerTop + 3)
    }
    CheckForCollision()
}, 16.6)


var moveUp = false
document.body.onkeyup = function(e) {
    console.log("SPACEBAR!")

    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    console.log("Player Top : " + playerTop)
    if (e.keyCode == 32) {
        if (playerTop >= 0) {
            console.log("SPACEBAR2!")
            player.style.top = (playerTop - 75)
        }
    }
}


function CheckForCollision() {
    if ((player.style.left + 50 >= crossing.style.left) &&
        (player.style.left + 50 <= crossing.style.left + 50)) {
        console.log("collision")
    }
}