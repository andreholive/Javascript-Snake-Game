import Food from "../food/Food";
import Snake from "../snake/Snake";

class MainScreen {
    
    box = 32;
    snake = new Snake(8*this.box, 8*this.box);
    food = new Food(Math.floor(Math.random() * 15 + 1) * this.box,
        Math.floor(Math.random() * 15 + 1) * this.box)

    constructor(ctx){
        this.context = ctx;
    }

    drawScreen(){
        this.context.fillStyle = "lightgreen";
        this.context.fillRect(0, 0, 16 * this.box, 16 * this.box);
    }

    drawSnake(){
        for(var i = 0; i < this.snake.getNumberOfParts(); i++){
            this.context.fillStyle = "green";
            this.context.fillRect(this.snake.parts[i].x, this.snake.parts[i].y, this.box, this.box);
        }
    }
    
    drawFood(){
        this.context.fillStyle = 'red';
        this.context.fillRect(this.food.x, this.food.y, this.box, this.box)
    }

    repaintScreen(){
        if(this.snake.direction == 'right'){
            this.snake.moveHeadX(this.snake.headX += this.box);
        }
        if(this.snake.direction == 'left') {
            this.snake.moveHeadX(this.snake.headX -= this.box);
        }
        if(this.snake.direction == 'up') {
            this.snake.moveHeadY(this.snake.headY -= this.box);
        }
        if(this.snake.direction == 'down') {
            this.snake.moveHeadY(this.snake.headY += this.box);
        }
        if(this.snake.headX > 15 * this.box && this.snake.direction == "right"){
            this.snake.moveHeadX(0);
            this.snake.pop();
       }
       if(this.snake.headX < 0 && this.snake.direction == "left"){ 
           this.snake.moveHeadX(15 * this.box);
           this.snake.pop();
       };
       if(this.snake.headY < 0 && this.snake.direction == "up"){
           this.snake.moveHeadY(15 * this.box);
           this.snake.pop();
       }
       if(this.snake.headY > 15 * this.box && this.snake.direction == "down"){
           this.snake.moveHeadY(0)
           this.snake.pop();
       };
       if(this.snake.headX != this.food.x || this.snake.headY != this.food.y){
        this.snake.pop();
        }
        else{
            this.food.x = Math.floor(Math.random() * 15 + 1) * this.box
            this.food.y = Math.floor(Math.random() * 15 + 1) * this.box
        }
        this.drawScreen();
        this.drawSnake();
        this.drawFood();
    }
}

export default MainScreen;