//let a;   //taka deklarirana promenliva ni pozvoliava da ja promenjme 
var a;
var b;
var c;
var d;
var e = [1, 2, 3, 4, 5]; //array
var f = [1, true, "a", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; // moje da se izpishe i taka enum Color {Red, Green, Blue}; 
var bgColor = Color.Red;
