var crossing = document.getElementById('crossing');
var player = document.getElementById('player');

var pipe = document.getElementById('pipe');
var pipeUp = document.getElementById('pipeDownside');

const playerIdle = '<img src="/assets/birdIdle.png" alt="bird">'
const playerUP = '<img src="/assets/birdUp.png" alt="birdUp">'

let jumping = false

var points = 0;

crossing.addEventListener('animationiteration', () => {
    let randomGenerator = getRandomInt(-350, -100)
    pipeUp.style.top = randomGenerator + "px"
    pipe.style.top = randomGenerator + 600 + "px"

    ++points
    document.getElementById("points").innerHTML = "Points:" + points;
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(() => {
    //console.log("pl " + parseInt(window.getComputedStyle(pipe).getPropertyValue('left')))
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
    var pt = parseInt(window.getComputedStyle(pipe).getPropertyValue('top'))
    var pl = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'))

    var pt2 = parseInt(window.getComputedStyle(pipeUp).getPropertyValue('top')) + 400
    var pl2 = parseInt(window.getComputedStyle(pipeUp).getPropertyValue('left'))

    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'))

    if ((30 >= pl) &&
        (30 <= pl + 100)) {
        if ((playerTop > pt)) {
            alert("GAME OVER! \n Total points: " + points)
            function_to_call_when_oked_or_closed();
            console.log("HIT!")
        }
    }

    if ((30 >= pl2) &&
        (30 <= pl2 + 100)) {
        if ((playerTop < pt2)) {
            alert("GAME OVER! \n Total points: " + points)
            function_to_call_when_oked_or_closed();
            console.log("HIT!")
        }
    }
}

function function_to_call_when_oked_or_closed() {
    points = 0;
}