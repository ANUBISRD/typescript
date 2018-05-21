// var someText: string = "Hy brother, my name is Rado";

// document.getElementById("someSample").innerHTML = "someText";

// // document.getElementById('someSample').style.fontSize = '20px',style.color = 'white';
// document.getElementById('someSample').style.color = 'white';


// document.write("Some Text here" + someText + "Type of is ... \n" 
// + typeof(someText));

// function printText(){
//     document.getElementById('someSample').style.color = 'white';
//     document.write("<br>"+"\n New text"+"\n");
//     document.write("\n"+"\n New text2"+"\n");
//     document.write("\n"+"\n New text3"+"\n");
// };
// printText();

// function myFunction() {
//         var person = prompt("Please enter your name", "Harry Potter");
//         if (person != null) {
//             document.getElementById("demo").innerHTML =
//             "Hello " + person + "! How are you today?";
//         }
//     }




// function colorFunction(){
//     // document.getElementById('backGround').style.backgroundColor = 'red';
//     document.body.style.backgroundColor = "blue";
//     document.body.style.backgroundColor = "white";
// }

function man(name, age, gander){
    this.name = name;
    this.age = age;
    this.gander = gander;
}

var stranger = new man("John", "22", "Male");

console.log("Our player is  " + stranger.name + stranger.age + stranger.gander);

