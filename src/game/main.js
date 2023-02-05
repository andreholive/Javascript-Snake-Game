import Game from "./Game";

let canvas = document.getElementById("snake");
const context = canvas.getContext("2d");

const game = new Game(context);
game.start();