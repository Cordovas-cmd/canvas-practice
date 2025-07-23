const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


var player = new Image();

player.src="./sprites/Illidian-Idle(3).png"


var x = 0;

var y = 10;

var key, keyState = 0;
player.onload = function() {
    ctx.drawImage(player, x, y);

    ctx.fillRect(0, 0, 1000, 1000);
};

document.onkeydown = function(e) {
    keyState = "keydown"
    key = e.key }

    document.onkeyup = function(e) {
    keyState = "keyup";
}

var obstacle = {
    x: 300,
    y: 0,
    width: 30,
    height: 100,
}



setInterval(function () {
    
    if(keyState === "keyup"){
        return;
    }
if(key === "w") {
    y -= 1;
}
if(key === "s") {
    y += 1;
}
if(key === "a") {
    x -= 1;
}
if(key === "d") {
    x += 1;
}


ctx.clearRect(0, 0, 2000, 2000);
ctx.drawImage(player, x, y);


ctx.fillStyle = "blue";
obstacle.x -= 1;
ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

}, 5);

