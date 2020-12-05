var crossing = document.getElementById('crossing');
var player = document.getElementById('player');

var pipe = document.getElementById('pipe');
var pipeUp = document.getElementById('pipeDownside');

const playerIdle = '<img src="/assets/birdIdle.png" alt="bird">'
const playerUP = '<img src="/assets/birdUp.png" alt="birdUp">'

let jumping = false

crossing.addEventListener('animationiteration', () => {
    let randomGenerator = (Math.random() * 400 + 600)
    pipeUp.style.top = -randomGenerator + "px"
    pipe.style.top = -randomGenerator + 1150 + "px"
})

setInterval(() => {

    if (player.innerHTML != playerIdle && jumping != true) {
        player.innerHTML = playerIdle
    }

    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))
    if (playerTop <= 550) {
        if (jumping == false) {
            player.style.top = (playerTop + 3) + "px"
        } else {
            player.style.top = (playerTop - 4) + "px"
        }
    }
    CheckForCollision()
}, 16.6)


document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        MoveUp()
    }
}

function MoveUp() {
    jumping = true;
    console.log("here")


    let itr = 0
    let jump = setInterval(() => {
        if (player.innerHTML != playerUP) {
            player.innerHTML = playerUP
        }

        if (itr > 20) {
            clearInterval(jump)
            itr = 0
            jumping = false
        }

        ++itr
    }, 16.6)
}

function CheckForCollision() {
    if ((player.style.left + 30 >= crossing.style.left) &&
        (player.style.left + 30 <= crossing.style.left + 50)) {
        // if ((player.style.top) && ()) {

        // }
    }
}