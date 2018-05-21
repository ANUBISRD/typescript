function getSum(num1, num2) {
    return num1 + num2;
}
//var mySum = getSum(1,6);
//console.log(getSum(1,4));
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1); // ако е стринг го променя на число
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2); // ако е стринг го променя на число
    }
    return num1 + num2;
};
//console.log(mySum(3,'8'));  // смята ги независимо че 8 е текст
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName; // връща пурвото име
    }
    return firstName + '  ' + lastName;
}
console.log(getName('Rado'));
function myVoid() {
    return;
}
function tillThen() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finaly: " + i);
}
tillThen();
