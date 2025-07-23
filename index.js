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
        x: 800,
        y: 0,
        width: 30,
        height: 200,
    },
    {
        x: 400,
        y: 0,
        width: 30,
        height: 100,
    },
    {
        x: 500,
        y: 180,
        width: 30,
        height: 300,
    },
    {
        x: 600,
        y: 90,
        width: 30,
        height: 290,
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



    for (var i = 0; i < obstacles.length; i++) {
        const obstacle = obstacles[i];

        ctx.fillStyle = "blue";
        obstacle.x -= 1;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

    }

}, 5);

