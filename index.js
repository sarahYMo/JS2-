
var Name=["― Oscar Wilde","― Marilyn Monroe","― Frank Zappa","― Albert Einstein","― Mahatma Gandhi"]
var Text=[
    '“Be yourself; everyone else is already taken.”',
    '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”',
    '“So many books, so little time.”',
    '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
    '“Be the change that you wish to see in the world.”'
]


function randomText(){

    var num = Math.floor(Math.random()*Name.length);


    
    document.getElementById("QuoteName").innerHTML = Name[num];
    document.getElementById("NewQuote").innerHTML = Text[num];
}

randomText();













// window.alert("hello");

// var myElements= document.querySelectorAll('button');
// for(var i=0; i<myElements.lenght; i++){
//     myElements[i].addEventListener('click', function()
// {
//     console.log("Hello")
// })
// }

// window.alert("bebo");
// document.getElementById("demo").innerHTML = "lolo";
// var username="tyyt";

// var num1 =window.prompt("enter number");
// console.log(num1);

//Q2
// var num1 =window.prompt("enter number");
// if(num1%3==0 && num1%4==0)
// {
// console.log("yes");
// }
// else{
// console.log("no");
// }

//Q3

//  var num1 =window.prompt("enter number1");
//  var num2 =window.prompt("enter number2");



// if(num1>num2 )
// {
// console.log(num1);
// }
// else if(num1==num2){
//     console.log(num1+" = "+ num2);

// }
// else{
// console.log(num2);
// }

//q4
//  var num1 =window.prompt("enter number1");


// if(num1>= 0 )
// {
//     console.log("positive number");
// }

// else{
// console.log("negative number");

// }

// var num1 =window.prompt("enter number1");
// var num2 =window.prompt("enter number2");
// var num3 =window.prompt("enter number3");

// if(num1>num2 && num1>num3 ) 
// {
    
//     console.log("Max element is  " + num1);
// }

// else if(num2>num1 && num2>num3 ) 
// {
//     console.log("Max element is  "  + num2);

// }
// else{
//      console.log("Max element is  "  + num3);
// }

// if(num1<num2 && num1<num3 ) 
// {
    
//     console.log("Min element is  " + num1);
// }

// else if(num2<num1 && num2<num3 ) 
// {
//     console.log("Min element is  "  + num2);

// }
// else{
//      console.log("Min element is  "  + num3);
// }

// Q6
// var num1 =window.prompt("enter number1");
// if(num1%2==0){
//      console.log( num1 + " Is Even");
// }
// else{
//     console.log( num1 + " Is Odd");
// }

// Q7

// var char1 =window.prompt("enter character");

// if(char1=="a" || char1=="b" || char1=="i" ||char1=="o" || char1=="u" || char1=="A" || char1=="B" || char1=="I" ||char1=="O" || char1=="U")
//     {
//     console.log( char1+ " Is Vowels");
// }
// else{
//     console.log(char1+ " Is Consonant");
// }
// q9

// var num1=window.prompt("enter +ve number");

// for (var i = 1; i <= num1; i++){
// console.log(i );
// }

// Q10
// var num1=window.prompt("enter +ve number");
// for (var i = 1; i <= 12; i++){
// console.log(i*num1 );
// }


// var num1=window.prompt("enter +ve number");
// for (var i = 1; i <= num1; i++){
//     if(i%2==0)
// console.log(i);
// }

// Q12
// var num1=window.prompt("first integer");
// var num2=window.prompt("second integer");
// var result=1;
// for(var i=1; i<=num2;i++){
//     result=result*num1;
// }
// console.log(result);

// var num1=+window.prompt("first mark");
// var num2=+window.prompt("second mark");
// var num3=+window.prompt("third mark");
// var num4=+window.prompt("fourth mark");
// var num5=+window.prompt("fifth mark");
// var sum=num1+num2+num3+num4+num5;
// var avr=sum /5;
// var per=(avr*100)/100;
// console.log( sum);
// console.log(avr );
// console.log(per);

// Q13
// var num1= +window.prompt("Enter Month Number ");
// if(num1==1|| num1==3|| num1==5||num1==7||num1==8||num1==10||num1==12){
//     console.log("Days in Month: 31") ;
// }
// else if(num1==4||num1==6||num1==9||num1==11){
//     console.log("Days in Month: 30") ;
// }
// else if (num1==2){
//     console.log("Days in Month: 28") ;
// }

// else {
//     console.log("you entered wrong number write from 1 to 12") ;
// }

// Q14


//  var p= +window.prompt(" enter grade for Physics") ;
//  var ch = +window.prompt(" enter grade for Chemistry") ; 
//  var b = +window.prompt(" enter grade for Biology") ; 
//  var m = +window.prompt(" enter grade for Mathematics") ; 
//   var c = +window.prompt(" enter grade for Computer") ; 
// var sum=(p+ch+b+m+c);
// console.log(sum);
// var per = (sum / (5 * 100)) * 100;
// console.log(per);

// if (per >= 90)
// {
// console.log("Grade A");
// }
// else if (per >= 80)
// {
// console.log("Grade B");
// }
// else if (per >= 70)
// {
// console.log("Grade C");
// }
// else if (per >= 60)
// {
// console.log("Grade D");
// }
// else if (per >= 40)
// {

// console.log("Grade E");
// }
// else if (per < 40)
// {
// console.log("Grade F");
// }
// else
// {
// console.log(" Entered Wrong Grade ");
// }

// var grade;
// switch (per) {
// case per >= 90:
// grade = "A";
//  break;
// case per >= 80:
// grade = "B";
// break;
// case per >= 70:
//  grade = "C";
//  break;
//  case per >= 60:
//  grade = "D";
//  break;
//  case per >= 40:
//  grade = "E";
//  break;
//  default:
// grade = "F";
//  }

//  console.log(grade);
// ll

// var num= +window.prompt("Enter Month Number ");
// switch(num){
//     case 1:
//     case 3: 
//     case 5: 
//     case 7: 
//     case 8:
//     case 10:
//     case 12:
//         console.log("Days in Month: 31");
//         break;
    
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("Days in Month: 30");
//         break;
    
//     case 2:
//         console.log("Days in Month: 28");
//         break;

//     default:
//         console.log("you entered wrong number write from 1 to 12");
// }


// var char1 =window.prompt("enter character");
// switch(char1){

// case "a": 
// case "b": 
// case "i": 
// case "o":
// case "u":
// case "A": 
// case "B": 
// case "I": 
// case "O":
// case "U":
    
//     console.log( char1+ " Is Vowels");
// break;
//  default:
//     console.log(char1+ " Is Consonant");

// }

// var num1 =+window.prompt("enter number1");
// var num2 =+window.prompt("enter number2");

// if(num1>num2 )
// {
// console.log(num1);
// }
// else if(num1==num2){
//     console.log(num1+" = "+ num2);
// }
// else{
// console.log(num2);
// }
// switch (true){

//     case (num1 > num2) :
//         console.log(num1);
//         break;
    
//     case (num2 > num1):
//         console.log(num2);
//         break;

//     default:
//         console.log(num1 + " = " +num2);
// }

// var num1 =window.prompt("enter number1");
// switch(true){
// case (num1%2==0):

//      console.log( num1 + " Is Even");
//      break;

// default:
//     console.log( num1 + " Is Odd");

// }\

// Q19
// var num1= +window.prompt("Enter number ");


// switch(true){
// case  ( num1 >= 0 ):
//     console.log("Postive number");
//     break;

//     case  ( num1 < 0 ):
//     console.log("Negative number");
//     break;

// }

// Q20

// document.getElementById("demo").innerHTML= "<h3>hello</h3>";

// var name = "";

// for(var i=1; i<=100; i++){
//  name +="ali";
// }

// console.log(name);

// //function
// function calc(){
//  var num1=10;
//  var num2=20;
//  var r=num1+num2;
//  console.log(r);

// }
// calc();

// function p(){
// function c(){
//     return"hello";
// }
// var i=c();
// console.log(i);
// console.log("hhh");
// }
// p();

// object
// var o={
//     name:"ahm",
//     age:30 ,
//     isM: false
// };

// console.log(o.name);

// var p={

// }

// p.name="TV";
// p.price="5000";
// console.log(p);
// delete p.name;
// console.log(p);

// var a=["ali",30,"mai",20];
// for(var i=0; i<4;i++){
// console.log(a[i]);}