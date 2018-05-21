class Point {  //obekt
    constructor(public x?:number, private y?:number){  //metod

    }
    
    draw(){
        console.log("X: " + this.x+ " Y: " + this.y);
    }

}