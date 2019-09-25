const title = document.querySelector("#title");
console.log(title);
title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = "i own you now";
console.dir(document);
//1.create variable.
//2.Initialize variable.
/*#1.10 */
/*
 const dayOfWeek = ["Nicolas", "55", true,"Seoul"];
 
 const nicoInfo ={
     name : "Nico",
     age :  33,
     gender : "Male",
     isHandsome : true,
     favMovies : ["Along the gods","LOTR","Oldboy"],
     favFood : [
         {
             name:"Kimchi",
             fatty:false
         },
         {
             name:"Cheese burger",
             fatty:true
         }
     ]
 };
 
 console.log(nicoInfo);
 console.log(nicoInfo.gender);
 console.log(nicoInfo.gender = "Female");
 console.log(nicoInfo.gender);
 console.log(console);
 */

//const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//console.log(dayOfWeek);

/*#2.1.1 More Function Fun */
/*
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  div: function(a, b) {
    return a / b;
  },
  multi: function(a, b) {
    return a * b;
  }
};

const plus = calculator.plus(5, 5);
const div = calculator.div(5, 5);
const multi = calculator.multi(4, 4);

console.log(plus, div, multi);
*/

/*#2.2 JS DOM Functions */
/* 
const title = document.getElementById("title");
title.innerHTML = "Hi From JS";
console.log(title);

console.log(document);
*/

/*#2.3 Modifying the DOM with JS */
/*
const title = document.querySelector("#title");
console.log(title);
title.innerHTML = "Hi From JS";
title.style.color = "red";
document.title = "i own you now";
console.dir(document);
*/
