const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


var player = new Image();

player.src="./sprites/Illidian-Idle(3).png"


var x = 0;

var y = 10;
player.onload = function() {
    ctx.drawImage(player, x, y)
}
;