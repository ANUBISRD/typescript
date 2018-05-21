//var course = 1;
//if (course == 1) {
//    document.write("<h1>HTML Tutorial</h1>");
//} else if (course == 2) {
//    document.write("<h1>CSS Tutorial</h1>");
//} else {
//    document.write("<h1>JavaScript Tutorial</h1>");
//}
//alert("Auto");
var myDog;
myDog = "Suzi";
document.write(myDog + "<br/>");
var mYnumber;
mYnumber = 1;
while (mYnumber <= 5) {
    document.write(mYnumber + "<br/>");
    mYnumber++;
}
var myX;
myX = 0;
while (myX <= 5) {
    document.write("Less than 5. I am " + myX + "<br/>");
    myX++;
}
// You can also define generic classes that
// can work with multiple data types
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
// Define how we want add to work with numbers
aNumber.add = function (x, y) { return x + y; };
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
var aStrNum = new GenericNumber();
// Define how we want add to work with strings
aStrNum.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
// function
function log(message) {
    console.log(message);
}
var message = "Hello world";
log(message);
