var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
//access the object values 
console.log(person.firstname) 
console.log(person.lastname)

// Obekt + funkcia
var person2 = {
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function() {  }  //Type template 
 } 
 person2.sayHello = function() {  
    console.log("Hello "+person2.firstName)
 }  
 person2.sayHello() // execute



 //////////////

 var person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 
 var invokeperson = function(obj: { firstname:string, lastname :string }) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person)


 /////////////

 var someone = {
     firstname:"Rado",
     lastname:"Gervazov"
 };

 