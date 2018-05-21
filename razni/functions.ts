function getSum(num1, num2){
    return num1 + num2;
}

let mySum = function (num1,num2){
    return num1+num2;
}


//console.log(mySum(2,5));

function getName(firstName:string, lastName?:string){

    if(lastName == undefined){ // proverka ako njma informaci za lastName vrashta samo firstName
        return firstName;
    }

    return firstName + " " + " " + lastName;

}

console.log(getName("Rado","Golemia"));