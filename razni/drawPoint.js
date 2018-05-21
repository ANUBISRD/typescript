var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X:" + this.x + ", Y:" + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var drawPoint = function (point) {
    //...
};
var getDisance = function (pointA, pointB) {
    //...
};
var point = new Point(1, 2); // Tova e obekt na klass Point
//point.x=3;  не позволява да се променя защото е зададен като PRIVATE
point.draw();
