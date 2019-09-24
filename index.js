//1.create variable.
//2.Initialize variable.
//3.use variable.

/*#1.6
const means constant.
상수 즉 변하지 않는수 라는 것임.
변수의 개념이랑 다름.
변수가 바뀌어도 된다고  let 변수의 값이 고정적이라면 const
*/

/*#1.8
변수 선언할때 되도록이면 const .
진짜 필요할때만 let쓸것.

//String
const what = "Nicolas";
console.log(what);

//Boolean is not TEXT!!.
const wat = true;

//Number
const wat = 66;

//Float
const wat = 55.5;

*/

/*#1.9 Organizing Data with Arrays.
const dayOfWeek = ""; //camel case.

const monday = "mon";
const the = "tue";
const wed = "wed";
const thu ="thu";
const fri ="fri";
---비효율적임 그래서 나온게 arrays

const dayOfWeek = ['mon','tue','Wed','Thu','Fri',"Sat","Sun"];
console.log(dayOfWeek);
*/

/*#1.10 */
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
