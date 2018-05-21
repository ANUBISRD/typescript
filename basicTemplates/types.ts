let myString: string; // приема стойност само текст
//mySrting = "Hello word";
myString = "Testova programa".slice(0, 3);  // Ще изпише само първите 3 букви

let myNum: number;
myNum = 4+8;

let myBool: boolean;
myBool = true;
myBool = false;
myBool = null;

let myStrVar: any;

/*  
let myStrArr:string[];  // Регистриране на списък от думи/текст array
myStrArr = ['Hello', 'word', 'This is an Array'];

let myNumArr: number[];
myNumArr =[3, 4, 5];

let myBoolArr: boolean[];
myBoolArr = [true, false, true];
*/


// Регистриране на списък от думи/текст array -2
let myStrArr:Array<string>;
myStrArr = ['Hello', 'word', 'This is an Array'];
let myNumArr:Array<number>;
myNumArr =[3, 4, 5];
let myBoolArr:Array<boolean>;
myBoolArr = [true, false, true];

let strNumTuple: [string, number];  //
strNumTuple = ['String word', 45];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;


console.log(myString);
console.log(myNum);
console.log(myBool);
console.log(myStrArr);
console.log(myNumArr+' This is number Array');
console.log(myBoolArr+' This is boolean Array');
console.log(strNumTuple+' This is Tuple Array');
console.log(myVoid+' This is void');