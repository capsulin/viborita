const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const head = new Image();

head.src = ASSETS.snake.head.right;

head.onload = function () {

    ctx.drawImage(
        head,
        0,
        0,
        40,
        40
    );

};
