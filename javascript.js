// let day="thursday"
// switch(day){
//     case "monday": console.log("M");break;
//     case "tuesday": console.log("T");break;
//     case "wednesday": console.log("W");break;
//     case "thursday": console.log("THurdayssssss");break;
//     case "friday": console.log("F");break;
//     case "saturday": console.log("SAT");break;
//     case "sunday": console.log("SUN");break;
//     default: console.log("normal day");
// }

// let marks=92;

// let grade;

// switch(true){
//     case  marks>=90: grade ="A+";
//     break;
//     case marks>=80: grade="A";
//     break;
//     case marks>=70: grade="B+";
//     break;
//     case marks>=60: grade="B";
//     break;
//     case marks>=50: grade="C";
//     break;
//     default:grade = "C++"
// }
// console.log(grade);

// for(let i=5;i>=1;i--){
//     let str=" ";
//     for(let j=1;j<=i;j++){
//         str=str+j+" ";
//     }
//     console.log(str);

// }


// let rows=4;
// for(let i=1;i<=rows;i++){
//     let str="";
    
//    for(let spaces=1;spaces<=rows-i;spaces++){
//     str=str+" ";
//    } 

//    for(let stars=1;stars<=2*i-1;stars++){
//     str=str+"*";
//    }

//    console.log(str);
// }
  

// function add(a,b){
//     console.log(a+b);
// }

// add(3,4)

// calculator using functional programming

// function add(a,b){
//     console.log( a+b);
// }
// function subtract(a,b){
//     console.log (a-b);
// }
// function multiply(a,b){
//     console.log(a*b);
// }
// function divide(a,b){
//     if(b==0){console.log("invalid");}
//      else{
//         console.log(a/b);
//      }
// }

// function calculator(a,b,operator){
//     switch(operator){
//         case "+" : return add(a,b);
//         case "-" : return subtract(a,b)
//         case "*" : return multiply(a,b);
//         case "/" : return divide(a,b);
//         default : return "error";
//     }
// }

// calculator(30,0,"/");

let cliq= document.getElementById("clickbtn");
cliq.addEventListener("click",()=>{
   let box = document.getElementById("boxx");
   box.style.backgroundColor="green";
});


