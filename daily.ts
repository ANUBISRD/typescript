var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break     //exit the loop if the first multiple is found 
   } 
   
 //  console.log(" -  - " + i)
   i++ 
   
}  //outputs 5 and exits the loop

var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
//   console.log(count);
   count++
}
//console.log (" The count of odd values between 0 and 20 is: "+count)    //outputs 10 нечетните стойности


function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 //disp_details(123,"John");
 //disp_details(111,"mary","rage@xyz.com");

 function addNumbers(...nums:number[]) {    // https://www.tutorialspoint.com/typescript/typescript_functions.htm
    var i;   
    var sum:number = 0; 
    
    for(i = 0; i<nums.length; i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,1,1)
 addNumbers(10,10,10,10,10)



 function calculate_discount(price:number,rate:number = 0.10) {  // Функцията дава 10% от сумата
    var discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000)
 calculate_discount(1000,0.30)  // 30% от сумата  https://www.tutorialspoint.com/typescript/typescript_functions.htm

//Example ─ A Simple Anonymous function
 var msg = function() {   
  return "hello world";  
} 
//console.log(msg())


// Example ─ Anonymous function with parameters

var res = function(a:number,b:number) {  
  return a+b;  
}; 
console.log(res(12,2)) 