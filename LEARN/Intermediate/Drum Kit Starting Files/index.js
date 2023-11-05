// document.querySelector("button").addEventListener("click", handleClick)
// selecting the location ,, type ,, listner ,, 
// this creates a listner to the buttona and calls to do something when the button is clicked
// it calls the function

//adding the parenthese at the end will make it get called as soon as the eventlistner is added it does not wait for things to be clicked 


// it will loop througn all buttons

// function handleClick(){
//     alert("I got CicckdCLicked")



//  MA

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (var i = 0; i < numberOfDrumButtons ; i++)
// {

// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  
//     alert("i got clicked");

// })

// };


// var numberOfBtns = document.querySelectorAll(".drum").length;

// for( i = 0 ; i < numberOfBtns ; i++){


// document.querySelectorAll(".drum")[i].addEventListener("click" , click  );

// function click(){

//     alert("i got clicked");
// };
// }




//why this shit didnt work is  because when we get the ELEMENTS - element"s" -- which are put in an arry by default 
//you cant add properties direclty to the array you need to specify the shit
//get elements by class can get the element by a single class



//PLAYING THE SOUND

// var sound = document.getElementById("audio1")



// function playSound(){
//     sound.currentTime = 0;
//     sound.play();
// }

// document.getElementById("btn1").addEventListener("click" , playSound);


//simply adding the play to the sound file 


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


//it is necessary to create a variable as it is going to be the name of onject
//this new here makes a new input , object using the factory






// var numberOfBtns = document.getElementsByClassName("drum").length ;


// for( i = 0 ; i< numberOfBtns ; i++){

// document.getElementsByClassName("drum")[i].addEventListener("click" , showAlert);

// function showAlert(){
    

//     var buttonInnerHTML = this.innerHTML;
    
    
//     makeSound(event.key);
// }
// }











//DETECTING BUTTON PRESS


var numberOfBtns = document.getElementsByClassName("drum").length ;


for( i = 0 ; i< numberOfBtns ; i++){

document.getElementsByClassName("drum")[i].addEventListener("click" , showAlert);

function showAlert(){
    

    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    }
}

//DETECTING KEYBOARD PRESS




document.addEventListener('keydown', function(event){
    
    makeSound(event.key);
    buttonAnimation(event.key);
}) ;



function makeSound(key){
    switch (key) {
        case "w":
            
        var audio1 = new Audio('sounds/crash.mp3')
        audio1.play();

        break;
        
        case "a":
        var audio2 = new Audio('sounds/kick-bass.mp3')
        audio2.play();

        break;

        case"s":
        var audio3 = new Audio("sounds/snare.mp3")
        audio3.play();
        
        break;

        case"d":
        var audio4 = new Audio("sounds/tom-1.mp3")
        audio4.play();

        break;

        case"j":
        var audio5 = new Audio("sounds/tom-2.mp3")
        audio5.play();

        break;

        case"k":
        var audio6 = new Audio("sounds/tom-3.mp3")
        audio6.play();

        break;

        case"l":
        var audio7 = new Audio("sounds/tom-4.mp3")
        audio7.play();
        break;

        default:
            // console.log(buttonInnerHTML);
            break;

    }
}




//ANIMATION


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    } , 100)

    
    }
    