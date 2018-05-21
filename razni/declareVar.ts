//let a;   //taka deklarirana promenliva ni pozvoliava da ja promenjme 
let a:number;
let b:boolean;
let c:any;
let d:string;
let e:number[] = [1,2,3,4,5]; //array
let f:any[] = [1, true, "a", false];

// moje da se deklarira i s var

var _a:number;
var _b:boolean;
var _c:any;
var _d:string;
var _e:number[] = [1,2,3,4,5]; //array
var _f:any[] = [1, true, "a", false];



// using enum Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2}; // moje da se izpishe i taka enum Color {Red, Green, Blue}; 
let bgColor = Color.Red;