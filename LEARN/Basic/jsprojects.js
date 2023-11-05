// var x = prompt("Number of bottles you want to buy");

// function cost (numberBottles){
//     var cost = Math.floor(numberBottles * 4.99 );
//     alert(Math.floor(cost) + " it will cost this much to buy " + numberBottles + " bottles")
//     return cost;
// }
// var out = cost(x);

// console.log(out);

// let a = 1;
// let b = 2;
// let c = 3;

// // console.log("sum of a and b is ", (a + b)/2);
// // console.log("sum of b and c is ", (b + c)/2);
// // console.log("sum of c and a is ", (c + a)/2);

// function avg(x, y){ //x and y are local variables here
//     var x = console.log( (x + y)/2) ;
//     return x;
// }
// var any = avg(a,b);
// console.log(any);

// let a = 3;
// let b = 4;
// let c = 5;

// function sumofnumbers(x ,y , z){
//     var sum = x + y + z;
//     console.log(sum);
//     return sum;
// }
// var out = sumofnumbers(a , b, c);

// console.log(out);


//----

var weight = prompt("Whats your Weight:");
var height = prompt("Whats your height in Meters:")


function bmiCalculator(w , h ){
    var bmi = w/(h*h);
    return bmi 
}

var out = bmiCalculator(weight , height);
console.log(out);

out = Math.round(out);


function output(){
    if(out <= 18.5){
        alert("your BMI is " + out + "\n You are Underweight" );
    }
    else if(out > 18.5 && out < 24.5){
        alert("Your BMI is " + out + "\good Enough"  ); 
    }
    else if(out > 24.5){
        alert("your BMI is" + out + "\nYou got work to do, cause you are overweight");
    }
}

output();

//----

