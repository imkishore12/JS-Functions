// question 1
function consolestatement(){
    console.log("Hello World");
}
consolestatement();
// question 2
function sum(n1, n2){
    
    console.log(`the sum of the ${n1} and ${n2} is ${n1+n2}`);
}
sum(3,4);

// question 3
hello = () => console.log("Hello World!");
hello();

// question 4
//Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
//! Output in detail: 
/* output is undefined after invoking above girl function because first scope will see scope level variables whether it is  local level or global level after that if same variable is defined two times in global scope and local scope in function then function will take precedence local scope variable and in the above function hoisting is occured i.e using variable before declaration then function will execute console statement prints the undefined as hoisted is occured*/


//question 5

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
//! Output in detail: 
/* output : undefined and 21 
for above girl function because first scope will see scope level variables whether it is  local level or global level after that if same variable is defined two times in global scope and local scope in function then function will take precedence local scope variable and in the above function hoisting is occured i.e using variable before declaration then function will execute console statement prints the undefined as hoisted is occured
after involking the girl function will execute console statement prints the global scope variable of X value*/

// question 6


var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};
/* output is 20 and 40
reason:after calling function "a" and function "b" as in this function x is global because x is not declared with (let,var)
       when function "a" excutes it prints x value as "20" 
       when function "b" excutes it prints x value as "40"*/
// question 7

function factorial(n){
    let f=1;
    for(var i=1; i<=n; i++){
        f=f*i;
    }
    console.log(`factorial of ${n} is ${f}`);
}
factorial(5);

// Day 2
// question 1

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    console.log(`i am from ${data} and My batch is EA${batch}`)
}

DisplayData("PrepBytes", FindSum(10, 9));

/*output is "i am from PrepBytes and My batch is 19"
Reason:After calling "DisplayData("PrepBytes", FindSum(10, 9))" function the data variable takes value of "PrepBytes" and second is calling FindSum Function as it returns 19 as output and DisplayData second parameter will take 19 as value 
finally it prints "i am from PrepBytes and My batch is 19"*/

// question 2


// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
// }

// output is error message i.e Cannot access "Abc" before initialization
//Reason:After using the accessing "Abc" variable" before intialization it cause hoisting

// question 3

var a = 10;
(function (){
    console.log(a);
    var a = 20;
})();

//output: undefined
//Reason: after calling function itsself as varaible "a" is declarng before intailization i.e hoisting and print undefined

const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")

// output :Hi!! EA19, Welcome To PrepBytes

//Reason:after calling greet function by passing varaible value as "EA19" varaiable name will store "EA19" this function will return "function(m)" and assigned this to greet_message as code 
// after calling greet_message by passing "Welcome To PrepBytes" will return Hi!! EA19, Welcome To PrepBytes as output









// button actions

isclicked=true;
function code1(){
    if(isclicked){
        document.getElementById("code1").innerHTML="Hide";
        document.getElementById("show1").style.display="block";
        isclicked=false;
        
    }
    else{
        document.getElementById("code1").innerHTML="show output";
        document.getElementById("show1").style.display="none";
        isclicked=true;
    }
    
}

isclicked=true;
function code2(){
    if(isclicked){
    document.getElementById("code2").innerHTML="Hide";
    document.getElementById("show2").style.display="block";
    isclicked=false;

    }
    else{
        document.getElementById("code2").innerHTML="show output";
        document.getElementById("show2").style.display="none";
        isclicked=true;
    }

}

function code3(){
    if(isclicked){
    document.getElementById("code3").innerHTML="Hide";
    document.getElementById("show3").style.display="block";
    isclicked=false;

    }
    else{
        document.getElementById("code3").innerHTML="show output";
        document.getElementById("show3").style.display="none";
        isclicked=true;
    }

}

function code4(){
    if(isclicked){
    document.getElementById("code4").innerHTML="Hide";
    document.getElementById("show4").style.display="block";
    isclicked=false;

    }
    else{
        document.getElementById("code4").innerHTML="show output";
        document.getElementById("show4").style.display="none";
        isclicked=true;
    }

}
function code5(){
    if(isclicked){
    document.getElementById("code5").innerHTML="Hide";
    document.getElementById("show5").style.display="block";
    isclicked=false;

    }
    else{
        document.getElementById("code5").innerHTML="show output";
        document.getElementById("show5").style.display="none";
        isclicked=true;
    }

}

function code6(){
    if(isclicked){
    document.getElementById("code6").innerHTML="Hide";
    document.getElementById("show6").style.display="block";
    isclicked=false;6

    }
    else{
        document.getElementById("code6").innerHTML="show output";
        document.getElementById("show6").style.display="none";
        isclicked=true;
    }

}

function code7(){
    if(isclicked){
    document.getElementById("code7").innerHTML="Hide";
    document.getElementById("show7").style.display="block";
    isclicked=false;

    }
    else{
        document.getElementById("code7").innerHTML="show output";
        document.getElementById("show7").style.display="none";
        isclicked=true;
    }

}

function code8(){
    if(isclicked){
    document.getElementById("code8").innerHTML="Hide";
    document.getElementById("show8").style.display="block";
    isclicked=false;

    }
    else{
        document.getElementById("code8").innerHTML="show output";
        document.getElementById("show8").style.display="none";
        isclicked=true;
    }

}
function code9(){
    if(isclicked){
    document.getElementById("code9").innerHTML="Hide";
    document.getElementById("show9").style.display="block";
    isclicked=false;
    }
    else{
        document.getElementById("code9").innerHTML="show output";
        document.getElementById("show9").style.display="none";
        isclicked=true;
    }
}

function code10(){ 
    if(isclicked){
    document.getElementById("code10").innerHTML="Hide";
    document.getElementById("show10").style.display="block";
    isclicked=false;
    }
    else{
        document.getElementById("code10").innerHTML="show output";
        document.getElementById("show10").style.display="none";
        isclicked=true;
    }
}
function code11(){
    if(isclicked){
    document.getElementById("code11").innerHTML="Hide";
    document.getElementById("show11").style.display="block";
    isclicked=false;
    }
    else{
        document.getElementById("code11").innerHTML="show output";
        document.getElementById("show11").style.display="none";
        isclicked=true;
    }
}
















