import MainScreen from "./MainScreen";

class Game {
    jogo = null;
    constructor(ctx){
        this.screen = new MainScreen(ctx);
        this.snake = this.screen.snake;
        this.food = this.screen.food;
        document.addEventListener('keydown', (e) => this.update(e));
    }

    start(){
        this.jogo = setInterval(() => {
            this.checkColision();
            this.screen.repaintScreen();
        }, 100);
    }

    update(event){
        if(event.keyCode == 37 && this.snake.direction != 'right') this.snake.changeDirection('left');
        if(event.keyCode == 38 && this.snake.direction != "down") this.snake.changeDirection("up");
        if(event.keyCode == 39 && this.snake.direction != "left") this.snake.changeDirection("right");
        if(event.keyCode == 40 && this.snake.direction != "up") this.snake.changeDirection("down");
    }

    checkColision(){
        for(var i = 1; i < this.snake.getNumberOfParts(); i++){
            if(this.snake.headX == this.snake.parts[i].x && this.snake.headY == this.snake.parts[i].y){
                clearInterval(this.jogo);
                alert("Game Over :(");
            }
        }
    }
}

export default Game;