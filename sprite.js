class Sprite{
    constructor(animation,speed){
        this.animation = animation;
        this.speed = speed;
        this.index = 0;
    }
    show(){
        image(this.animation[this.index % this.animation.length],0,0)
    }
    animate(){
        this.index += this.speed
    }
}
