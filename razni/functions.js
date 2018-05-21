function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    return num1 + num2;
};
//console.log(mySum(2,5));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + " " + lastName;
}
console.log(getName("Rado", "Golemia"));
