// function
function log(message){
    console.log(message);  //Pishe v CMD (node+imet.js za execute)
}
var message = "Hello world";

log(message);


var number = 1;
let count =2;

function doSomething(){

    for(var i =0; i<5; i++){ // po dobre e da se polzva let - taka ako ima greshka se hvashta po-lesno for(let i =0; i<5; i++){
        console.log(i);
    }

    console.log("Finaly " +i);
}

doSomething();  // taka se vika funkcia

//let a;   //taka deklarirana promenliva ni pozvoliava da ja promenjme 
let a:number;
let b:boolean;
let c:any;
let d:string;
let e:number[] = [1,2,3,4,5]; //array
let f:any[] = [1, true, "a", false];

let mes;
mes = "abc"
let ifEndsOnC=(<string>mes).endsWith("c");  // taka se promenj vida na promenlivata ot any na string
let alternativeWay=(mes as string).endsWith("c"); // taka se promenj vida na promenlivata ot any na string


//let drawPoint = (x, y) => {

interface Point{
    x:number,
    y:number
}

    let drawPoint = (point:Point) => {
    //...
}

drawPoint({
    x: 1,
    y:2
})