let studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]
// question1
let ans = []
ans = studentRecords.map((e) => e.name.toUpperCase())
console.log(ans);
// question2
let a = studentRecords.filter(check);
function check(mark) {
    if (mark.marks > 50) {
        return mark;
    }
}
console.log(a);


// question3
var sum = 0;
let b = studentRecords.filter(checks);
function checks(mark) {
    if (mark.marks > 50 && mark.id > 120) {
        return mark;
    }
}
console.log(b);
//question 4
for (let i of b) {
    sum = sum + i.marks;
}
console.log("sum of filtered marks:" + sum);



// question 5
let names = studentRecords.filter(check1);
function check1(mark) {
    if (mark.marks > 50) {
        return mark;
    }

}
console.log("filtered students are", names.map((names) => { return names.name }))

// question6
s = 0
let student = studentRecords.filter(check2);
function check2(mark) {
    if (mark.id > 120) {
        return mark.marks;
    }

}
for (let i of student) {
    s = s + i.marks;

}
console.log("sum of marks of the students with id > 120 : ",s);




// question7
var students = studentRecords.map((x) => x.marks > 50 ? x.marks : x.marks + 15);
let filtered = students.filter((x) => x > 50);
let sums = filtered.reduce((sums, x) => sums + x);
console.log("students with marks greater than 50 after a grace of 15 marks :",sums);


//question 8
function studentDetails(Name, Class, Roll) {
    this.name = Name,
        this.class = Class,
        this.rollNo = Roll;
}
let studentobjectArray = [];
let stud1 = new studentDetails("sai", "CSE", 10);
let stud2 = new studentDetails("kishore", "CSE", 10);
let stud3 = new studentDetails("shashi", "CSE", 43);
let stud4 = new studentDetails("purna", "CE", 18);
let stud5 = new studentDetails("harsha", "CSE", 30);
let stud6 = new studentDetails("teja", "CSE", 65);

studentobjectArray.push(stud1, stud2, stud3, stud4, stud5, stud6);
console.log(studentobjectArray);

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
















