
//first dice
//random numheber generator

function random(){
    var random = Math.floor(Math.random() * 6) + 1 ;
    return random;
}

var random = random();
console.log(random);

//change dice image based on the random number

function change(){
    if(random == 1){
    document.getElementById("img1").setAttribute("src", "images/dice1.png")
    } else if(random == 2){
        document.getElementById("img1").setAttribute("src", "images/dice2.png")
    } else if(random == 3){
        document.getElementById("img1").setAttribute("src", "images/dice3.png")
    } else if(random == 4){
        document.getElementById("img1").setAttribute("src", "images/dice4.png")
    } else if(random == 5){
        document.getElementById("img1").setAttribute("src", "images/dice5.png")
    } else if(random == 6){
        document.getElementById("img1").setAttribute("src", "images/dice6.png")
    } 
}

change();


//second dice
//random number generator

function random2(){
    var random2 = Math.floor(Math.random() * 6) + 1 ;
    return random2;
}

var random2 = random2();
console.log(random2);

//change dice 2 image based on radom number 2

function change2(){
    if(random2 == 1){
    document.getElementById("img2").setAttribute("src", "images/dice1.png")
    } else if(random2 == 2){
        document.getElementById("img2").setAttribute("src", "images/dice2.png")
    } else if(random2 == 3){
        document.getElementById("img2").setAttribute("src", "images/dice3.png")
    } else if(random2 == 4){
        document.getElementById("img2").setAttribute("src", "images/dice4.png")
    } else if(random2 == 5){
        document.getElementById("img2").setAttribute("src", "images/dice5.png")
    } else if(random2 == 6){
        document.getElementById("img2").setAttribute("src", "images/dice6.png")
    } 
}

change2();

//Determinig the winner

// function winner(){
//     if( random > random2){
//         alert("Player One won!!");
//     } else{
//         alert("player Two won")
//     };
// }

function winner(){
    if(random > random2){
        document.getElementById("heading").textContent = "Player one Won";
    }else if(random == random2){
        document.getElementById("heading").textContent = "It is a Draw";
    }else{
        document.getElementById("heading").textContent = "Player two Won";
    }
}

winner();