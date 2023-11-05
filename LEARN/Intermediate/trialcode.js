// var random = Math.random();
// console.log(random);

// n = random * 10;
// console.log(n);
// n = Math.floor(n);
// console.log(n);


// Generates a random number between min (inclusive) and max (exclusive)
// function getRandomNumber(min, max) {
//     return Math.random() * (max - min) + min;
// }

// var randomNumber = getRandomNumber(1, 100); // Generates a random number between 1 and 10
// let y =  ((Math.round(randomNumber)));
// console.log(y)

// if (y < 10){
//     console.log("less than 10");
// } else{
//     console.log("it was awfull");
// }



// function checkNumber(number) {
//     if (number > 10) {
//         return "Greater than 10";
//     } else if (number < 10) {
//         return "Less than 10";
//     } else {
//         return "Equal to 10";
//     }
// }

// console.log(yes)
// // Example usage:
// console.log(checkNumber(firstno));  // Output: Less than 10
// console.log(checkNumber(secondno)); // Output: Equal to 10
// console.log(checkNumber(thirdno)); // Output: Greater than 10

// newFunction();


// function newFunction() {
//     var x = prompt("size");

//     if (x == 12) {
//         console.log("go ahead");
//     }
//     else if (x > 12) {
//         console.log("thats too big");
//     }
//     else if (x < 12) {
//         console.log("thats small");
//     }
//     else if (x === 13 || x === 11) {
//         console.log("there is a chance");
//     }
// }

// function newFunction() {
//     var x = prompt("size");

//     if (x == 12) {
//         console.log("go ahead");
//     }
//     else if (x > 12) {
//         console.log("that's too big");
//     }
//     else if (x < 12) {
//         console.log("that's small");
//     }
//     else if (x === 13 || x === 11) {
//         console.log("there is a chance");
//     }
//     else {
//         console.log("invalid input");
//     }
// }



// function newFunction() {
//     var x = prompt("size");
    
//     if (x == 13 || x == 11) {
//         console.log("there is a chance");
//     }
//     else if (x == 12) {
//         console.log("correct size");
//     }
//     else if (x > 12) {
//         console.log("that's too big");
//     }
//     else if (x < 12) {
//         console.log("that's small");
//     }
//     else {
//         console.log("invalid input");
//     }
// }

// newFunction(); // Call the function




// function processInput(){
//     var userInput = document.getElementById("userinput").value;
//     return userInput ;
// }
// var user = processInput();
 
// console.log(user);


//if a year is divisible by 4 it is a leap year
//if a that year is also divisible by 100 then it is not a leap year
//- it can still be   leap year if it is divisible by 400 also w

// var  year  = prompt("Year:");

// function check(){
//     if(year % 4){
//         if(year % 100){
//             if (yeat % 400){
//                 return "it is a leap year"
//             }
//             else{
//                 return "it is not a leap year"
//             }
//         }
//         else{
//             return "it is a leap year "
//         }
//     }
//     else{
//         return "it is a leap year"
//     }
// }/


// var friends = ["his", "why", "was", "stronger", "than", "his", "how"];
// console.log(friends[friends.length - 1]);

// friends.includes("why")

// var name = prompt("whats your name");

// var friends = ["his", "why", "was", "stronger", "than", "his", "how"];

// if(friends.includes(name)  ){
//     alert("Your Welcome");
// }
// else{
//     alert("your name is not on the list");
// }



// var output= [];

// output.push(1);



// var output = [];
// var gin =  1;

// function fizzbuzz(){

//     output.push(gin);
//      p = gin ++;
//     if(inn % 3 === 0){
//         output.pop(gin);
//         output.push(fizz);
//     }
//     console.log(output);
// }

// fizzbuzz();
// fizzbuzz();
// fizzbuzz();

// var output = [];
// var going = 1;

// function fizzbuzz(){
    
//     while(going <= 100){

//     if ( going % 3 === 0 && going % 5 === 0){
//         output.push("frizbuzz");
//     }
//     else if(going % 3 === 0){
//         output.push("friz");
//     }    
//     else if(going % 5 === 0){
//         output.push("buzz");
//     }
//     else{
//         output.push(going);
//     }
//     going ++;
//     console.log(output);
//     }
// }

// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();
// fizzbuzz();


// var name = ["arham" , "amin" , "wani" , "how"]

// function work() {
//     var name = ["arham" , "amin" , "wani" , "how"]
//     var n = Math.floor(Math.random() * 6 + 1 );

//     alert(  name[2] +" will pay the bill");
// }

// work();



// var one = ["one" , "two" , "three" , "four" , "five"];

// console.log(one[2]);

// var i = 1;

// while(i< 100 ){
//     console.log(i);
//     i++;
// }


// var i = 100;

// function song(){
//     while  (i >= 0 ){
//         console.log( i + " bottles of beer on the WakeLockSentinel, " + i + "bottles of beerTake one bottle down and pass it around, " + (i - 1) + "bottles of beer on the wall");
//         i--;
//         }
// }

// song();





//FABONASI SEQUENCE

// function fabo(x, y){
//     for (i = 0 ; i < 100 ; i++){
//        z = (x + y);
//        a1 = (z + x);
//        console.log(z)
//        console.log(a1)
//        x = a1;
//        y = z;

//     }
// }

// fabo(0,1);



//DOM

// document.firstElementChild.lastElementChild.firstElementChild;
    
   
    
// var heading = document.firstElementChild.lastElementChild.firstElementChild;


// heading.innerHTML = "for life";

// function get(){
   
//     var element = document.getElementById("nbackup");
//     var out = element.innerHTML;
//     element.innerHTML = ("new text");
//     return out;
// }

// out = get();
// console.log(out);


// document.getElementsById("list").innerHTML = "Straight UP";

// function work(){

//     document.getElementById("heading").innerHTML = "straight UP";
// }

// work();

//GET element and manuplation via it


// function change(){

// document.getElementById("one").innerHTML = "Five";
// };

// change();


// document.getElementById("head").classList.toggle("remove");





// function add(num1 , num2){
//     return num1 + num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function divide(num1 , num2){
//     return num1/num2;
// }

// function sub(num1 , num2){
//     return num1 - num2;
// }

// function calculator(one , two , set){
//     return set(one , two);
// }






//what basically goes on is that we have the pre-build fuctions which we then call using the calculator  function
//"""SET(ONE , TWO)""" this basically becomes a function call for prebuilt functions that are going to called via CALCULATOR function

//OBJECT



// var G = {
//     name: "arhaam",
//     age: "17 years and 3 months",
//     abilities: "will out work everyone and so on and so on",
// }

// console.log(G.name , "and his age is" ,G.age)

// //OBJECT-FACTORY

// function GcFactory(name, age, abilities) {
//     this.name =  name;
//     this.age = age;
//     this.abilities = abilities;
// }

//  new GcFactory("tazeem" , 12 , "focus");


// //it is necessary to create a variable as it is going to be the name of onject
// //this new here makes a new input , object using the factory







































































