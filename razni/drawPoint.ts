class Point{
    private x:number;  //private ogranichava promenite za x v ramkite na classa
    y:number;

    constructor(x?: number, y?: number) {   //constructor  e metod na obekt  x? oznachava che x moja da ima stoinost, moje i da niama
        this.x = x;
        this.y = y;
    }
    
    draw () {
        console.log("X:" + this.x + ", Y:" + this.y);
    }

    getDistance(another: Point){
        //...
    }
}

    let drawPoint = (point:Point) => {
    //...
}

let getDisance = (pointA: Point, pointB: Point) => {
//...
}

let point = new Point(1,2);   // Tova e obekt na klass Point
//point.x=3;  не позволява да се променя защото е зададен като PRIVATE

point.draw();
