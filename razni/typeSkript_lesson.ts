
// ---------- TypeScript ----------
 
// TypeScript brings a type system and future
// capabilities of JS today
 
// To compile TypeScript to JavaScript you
// must install a compiler
// Install Node at https://nodejs.org/en/
 
// Check that npm is installed OSX :
// sudo npm install npm -g
 
// Check that npm is installed Windows :
// npm install npm -g (As Admin)
 
// Type in your terminal : npm install -g typescript
 
// I'll use Ecmascript 5 in this tutorial
 
// Compile to JS with tsc tstut.ts --target ES5
 
// On Linux / OSX machines autocompile by typing
// tsc *.ts --watch --target ES5 in the terminal
 
// ---------- VARIABLES ----------
 
// Variables must start with a letter, _, or $
// and then can contain numbers
 
// Declaring variables as statically typed is optional
// If you only provide a value the type is inferred
 
var myName: string = "Derek";
 
var myAge: number = 41;
 
// booleans can only be true or false
var canVote: boolean = true;
 
// A variable marked as any is a dynamic type
var anything: any = "dog";
anything = 2;
 
// You can print in the defined element
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
 
// A variable that didn't get a value assigned
// gets undefined
 
// null is a user assigned value saying that
// no value is assigned
 
// typeof returns the data type
document.write("myName is a " + typeof(myName) + "<br />");
document.write("canVote is a " + typeof(canVote) + "<br />");
document.write("anything is a " + typeof(anything) + "<br />");
 
// We can convert strings to numbers
var strToNum: number = parseInt("5");
document.write("strToNum is a " + typeof(strToNum) + "<br />");
 
// toString() converts anything into a string
var numToStr: number = 5;
document.write("numToStr is a " + typeof(numToStr.toString()) + "<br />");
 
// You define constants with const
const PI = 3.14159;
 
// ---------- INTERFACES ----------
// An interface can be used to describe complex
// types
 
interface SuperHero {
  realName: String;
  superName: String;
}
 
var superman: SuperHero = {
  realName: "Clark Kent",
  superName: "Superman"
}
 
// It is best to always separate with +
document.write(superman.realName + " is " + superman.superName + "<br />");
 
// More on interfaces below
 
// ---------- ARRAYS ----------
 
// Creates an array of strings that only excepts
// string values
var employees: string[] = ["Bob", "Sally", "Sam"];
 
// This would cause an error
// employees.push(5);
 
// Print all values in array
document.write(employees.toString() + "<br />");
 
// You can create arrays of interfaces
var superheroes: SuperHero[] = [];
 
superheroes.push({
  realName: 'Bruce Wayne',
  superName: 'Batman'
});
 
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br />");
 
// ---------- MATH ----------
 
document.write("5 + 4 = " + (5+4) + "<br />");
document.write("5 - 4 = " + (5-4) + "<br />");
document.write("5 * 4 = " + 5*4 + "<br />");
document.write("5 / 4 = " + 5/4 + "<br />");
document.write("5 % 4 = " + 5%4 + "<br />");
 
// If you try to add anything to a string both
// become strings
document.write("5 + String 2 = ", (5+'2') + "<br />");
 
var randNum: number = 1;
 
// If you increment after the current value is used
// and then it is incremented after
// The same is true with placing the -- after the
// variable
document.write("randNum++ = " + randNum++ + "<br />");
document.write("++randNum = " + ++randNum + "<br />");
document.write("randNum-- = " + randNum-- + "<br />");
document.write("--randNum = " + --randNum + "<br />");
 
// ---------- CONDITIONALS ----------
// If, Switch and the Ternary operator work
// the same in TypeScript as in JS
 
// Variables defined with let in blocks don't
// change the value of variables outside the block
 
let sampLet = 123;
if (true) {
    let sampLet = 456;
}
document.write("sampLet : " + sampLet + "<br />");
 
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampVar : " + sampVar + "<br />");
 
// ---------- LOOPING ----------
// Looping works the same in TypeScript as in JS
// but for..of is added to get values in either
// an array or string
 
var randArray = [5,6,7,8];
 
// for..in provides the indexes
for(var val in randArray){
  document.write(val + "<br />");
}
 
// Convert a number array into a string array
var strArray = randArray.map(String)
 
// for..of provides the values
for(var val of strArray){
  document.write(val + "<br />");
}
 
// ---------- FUNCTIONS ----------
 
// You can assign the variable types for the attributes
// You assign the return type after the attributes
// or if nothing is returned use void
var getSum = function(num1: number, num2: number): number{
  return num1 + num2;
}
 
var theSum1: number = getSum(5,2);
 
document.write("5 + 2 = " + theSum1 + "<br />");
 
// Assign a default value in the function declaration
// If an attribute isn't required follow the variable
// with a ?
var getDiff = function(num1: number, num2 = 2, num3?: number): number{
 
  // Check if a value was assigned with typeof
  if (typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}
 
document.write("5 - 2 = " + getDiff(5) + "<br />");
document.write("5 - 2 - 3 = " + getDiff(5,2,3) + "<br />");
 
// You can receive an unknown number of values
// with a rest parameter ...nums
var sumAll = function(...nums: number[]): void{
 
  // We can use reduce with the array to add all
  // the values together one by one
  var sum = nums.reduce((a, b) => a + b, 0);
  document.write("Sum : " + sum + "<br />");
}
 
sumAll(1,2,3,4,5);
 
// Arrow functions don't include function in
// the definition
 
var addOne = (x)=>x+1;
 
document.write("1 + 1 = " + addOne(1) + "<br />");
 
// ---------- CLASSES ----------
 
// Classes describe real world objects by defining
// their attributes (fields) and capabilities
// (methods)
 
class Animal {
 
  // class fields
  public favFood: string;
 
  // static fields have values that are shared
  // by every object
  static numOfAnimals: number = 0;
 
  // If you define an attribute with private
  // the value is automatically assigned
  constructor(private name: string, private owner: string){
    Animal.numOfAnimals++;
  }
 
  // You can define methods as private but then
  // it can't be seen by subclasses, or accessed
  // by any code other then that within the class
  ownerInfo() {
    document.write(this.name + " is owned by " + this.owner + "<br />");
  }
 
  // Static methods are accessed using the class
  // name
  static howManyAnimals(): number{
    return Animal.numOfAnimals;
  }
 
  // Define getters and setters
 
  private _weight: number;
 
  get weight(): number{
    return this._weight;
  }
 
  set weight(weight: number){
    this._weight = weight;
  }
 
}
 
// Create an Animal object
var spot = new Animal("Spot", "Doug");
 
spot.ownerInfo();
 
spot.weight = 100
 
document.write("Spot's weight is " + spot.weight + "<br />");
 
// You can only access static methods by proceeding
// it with the class name
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
 
// You can inherit all methods and fields from
// another class with extends
// Additional methods and fields can be added
// or overwritten
 
class Dog extends Animal{
  constructor(name: string, owner: string){
    super(name, owner);
    Dog.numOfAnimals++;
  }
}
 
var grover = new Dog("Grover", "Jimmy");
 
// A call to howManyAnimals() is now 2
document.write("# of Animals : " + Animal.howManyAnimals() + "<br />");
 
// Use instanceof to check for inheritance
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
 
// Check if a field exists for an object
document.write("Does grover have a name : " + ('name' in grover) + "<br />");
 
// ---------- INTERFACES 2 ----------
// Interfaces define a contract in which if a
// class implements it is must create all
// functions defined in the interface
 
interface Vehicle {
  drive(): any;
}
 
class Car implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    document.write("The car drives with " + this.wheels + " wheels<br />");
  }
}
 
class Bicycle implements Vehicle{
  constructor(private wheels: number){}
 
  drive(): void{
    document.write("The bicycle drives with " + this.wheels + " wheels<br />");
  }
}
 
var car = new Car(4);
var bike = new Bicycle(2);
 
car.drive();
bike.drive();
 
// ---------- GENERIC FUNCTIONS ----------
// We use generic functions when we want
// to be able to work with multiple data
// types in similar ways
 
// To create a generic function we place
// 1 or more data type markers in angled
// brackets after the function name. We
// then use those data type markers
// instead of actual data types.
 
function GetType<T>(val: T): string{
  return typeof(val);
}
 
var aStr = "A String";
var aNum = 10;
 
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
 
// You define a generic function that
// excepts any class that implements
// an interface
 
function GetWheels<w extends Vehicle>(veh: w): number
{
  return veh.drive();
}
 
GetWheels(car);
GetWheels(bike);
 
// You can also define generic classes that
// can work with multiple data types
 
class GenericNumber<T>{
 
  // An arrow function as described above
  add: (val1: T, val2: T) => T;
}
 
var aNumber = new GenericNumber<number>();
 
// Define how we want add to work with numbers
aNumber.add = function(x, y){return x + y;};
 
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
 
var aStrNum = new GenericNumber<string>();
 
// Define how we want add to work with strings
aStrNum.add = function(x, y){return String(Number(x) + Number(y));};
 
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
 
// ---------- DESTRUCTORING ----------
// You can assign multiple values on one line
 
var randVals = {x: 1, y: 2, z: 3};
var {x, y, z} = randVals;
 
document.write(x + y + z + "<br />");
 
// Do the same with arrays
[x, y, z] = [z, y, x];
document.write("Switch : " + x + y + z + "<br />");
 
// ---------- TEMPLATE STRINGS ----------
// Create multiline strings
var multStr = `I go on for
many lines<br />`;
document.write(multStr);
 
// You can use string interpolation
document.write(`<b>${multStr}</b>`);
 
// ---------- SPREAD OPERATOR ----------
// We can separate values in an array into
// attributs in a function
 
function theSum(x, y, z): void{
  document.write("Sum : " + (x + y + z) + "<br />");
}
 
var args = [4, 5, 6];
 
//theSum(...args);
 
// ---------- ENUMS ----------
// Enums are number based in TS
 
enum Emotion {
  Happy = 1,
  Sad,
  Angry
};
 
var myFeeling = Emotion.Happy;
 
// Same as
 
myFeeling = 1;