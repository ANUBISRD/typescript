// function
function log(message) {
    console.log(message); //Pishe v CMD (node+imet.js za execute)
}
var message = "Hello world";
log(message);
var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finaly " + i);
}
doSomething(); // taka se vika funkcia
//let a;   //taka deklarirana promenliva ni pozvoliava da ja promenjme 
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5]; //array
var f = [1, true, "a", false];
var mes;
mes = "abc";
var ifEndsOnC = mes.endsWith("c"); // taka se promenj vida na promenlivata ot any na string
var alternativeWay = mes.endsWith("c"); // taka se promenj vida na promenlivata ot any na string
//let drawPoint = (x, y) => {
var drawPoint = function (point) {
    //...
};
drawPoint({
    x: 1,
    y: 2
});
