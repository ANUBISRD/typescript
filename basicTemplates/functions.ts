function getSum(num1:number, num2?:number):number{
    return num1 + num2;
}

//var mySum = getSum(1,6);

//console.log(getSum(1,4));

let mySum = function (num1:any, num2:any):number{  //функцията трябва да върне число
if(typeof num1 == 'string'){ // прави проверка дали е стринг
    num1 = parseInt(num1);  // ако е стринг го променя на число
}

if(typeof num2 == 'string'){ // прави проверка дали е стринг
    num2 = parseInt(num2);  // ако е стринг го променя на число
}
    return num1+num2;
}

//console.log(mySum(3,'8'));  // смята ги независимо че 8 е текст

function getName(firstName:string, lastName?:string):string{

    if(lastName == undefined){   // проверка, ако не е дефинирано последно име
        return firstName;  // връща пурвото име
    }
    return firstName+ '  ' +lastName;
}

console.log(getName('Rado'));

function myVoid():void{  // не връща нищо
    return ;
}

function tillThen(){
    for (var i =0; i<5; i++){
        console.log(i);
    }
    
    console.log("Finaly: "+i);

}

tillThen();