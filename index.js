const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


var player = new Image();

player.src = "./sprites/Illidian-Idle(3).png"


var x = 0;

var y = 10;

var key, keyState = 0;
player.onload = function () {
    ctx.drawImage(player, x, y);

    ctx.fillRect(0, 0, 1000, 1000);
};

document.onkeydown = function (e) {
    keyState = "keydown"
    key = e.key
}

document.onkeyup = function (e) {
    keyState = "keyup";
}


// RNG function for obstacle positions.

function chooseRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// single obstacle object
// var obstacle = {
//     x: 300,
//     y: 0,
//     width: 30,
//     height: 100,
// }

// array of obstacle objects to generate multiple with varying properties
var obstacles = [
    {
        // if I want a random value here I can use something like this: Math.random() * (1500 - 500) + 500 (maximum - minimum) + minimum.
        x: chooseRandom(100, 1000),
        y: chooseRandom(0, 500),
        width: 30,
        height: chooseRandom(100, 300),
    },
    {
        x: chooseRandom(100, 1000),
        y: chooseRandom(0, 500),
        width: 30,
        height: chooseRandom(100, 300),
    },
    {
        x: chooseRandom(100, 1000),
        y: chooseRandom(0, 500),
        width: 30,
        height: chooseRandom(100, 300),
    },
    {
        x: chooseRandom(100, 1000),
        y: chooseRandom(0, 500),
        width: 30,
        height: chooseRandom(100, 300),
    },
]



setInterval(function () {

    if (keyState === "keyup") {
        return;
    }
    if (key === "w") {
        y -= 1;
    }
    if (key === "s") {
        y += 1;
    }
    if (key === "a") {
        x -= 1;
    }
    if (key === "d") {
        x += 1;
    }

    // update player position every .5 seconds
    ctx.clearRect(0, 0, 2000, 2000);
    ctx.drawImage(player, x, y);



    // for loop for creating multiple rectangles using the array of objects above.
    for (var i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];

        ctx.fillStyle = "blue";
        obstacle.x -= 1;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

    }

}, 5);

