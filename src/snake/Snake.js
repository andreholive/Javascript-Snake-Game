import SnakePart from './SnakePart';
class Snake {

    direction = 'right';
    parts = [];
    headX = 0;
    headY = 0;

    constructor(x,y){
        this.headX = x;
        this.headY = y;
        this.head = new SnakePart(x, y);
        this.parts.unshift(this.head);
    }

    moveHeadX(value){
        this.headX = value;
        this.parts.unshift(new SnakePart(value, this.headY));
        
    }

    moveHeadY(value){
        this.headY = value;
        this.parts.unshift(new SnakePart(this.headX, value));
    }

    getNumberOfParts(){
        return this.parts.length;
    }

    changeDirection(dir){
        this.direction = dir;
    }

    pop(){
        this.parts.pop();
    }
}

export default Snake;