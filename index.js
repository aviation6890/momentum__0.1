const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
  console.log("Bye Bye");
}

function handleOnline() {
  console.log("welcome back!!");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

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

/*#2.4 Events and event hadlers */
/*
const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "red";
}
title.addEventListener("click", handleClick);
*/

/*#2.5 If, else, and, or */
/*
if (20 > 5 || "nicolas" === "nicolas") {
  console.log("yse");
} else {
  console.log("no");
}

true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;
*/

/*#2.6 DOM - If else - Function practice */
/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}
function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
  console.log("Bye Bye");
}

function handleOnline() {
  console.log("welcome back!!");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

*/
