/// Syntax: Infinite Loop using for loop
//for(;;) { 
   //statements 
//}
//Example: Infinite loop using for loop
//for(;;) { 
//   console.log(“This is an endless loop”) 
//}
//Syntax: Infinite loop using while loop
//while(true) { 
   //statements 
//} 
//Example: Infinite loop using while loop
//while(true) { 
//   console.log(“This is an endless loop”) 
//}


var n = 1;
while (n <= 5) {
   console.log("Entered while " + n);
   n++; 
}
 
// he do…while loop is similar to the while loop except 
//that the do...while loop doesn’t evaluate the condition for the first time the loop executes.

do {
   console.log("Entered do…while " + n + " is less or = to 5");
} while (n <= 5);

//BRAKE
//The break statement is used to take the control out of a construct. 
//Using break in a loop causes the program to exit the loop.


var i:number = 1; 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break     //exit the loop if the first multiple is found 
   } 
   i++ 
}  //outputs 5 and exits the loop

///////////////////

//The above example displays the number of even values between 0 and 20. 
//The loop exits the current iteration if the number is even. 
//This is achieved using the continue statement.

var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {  
      continue
   }
   count++
}
console.log ("The count of odd values between 0 and 20 is: "+count)    //outputs 10