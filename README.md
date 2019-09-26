# momentum_0.1

js 파일은 body 아래에 둘것.

{} :컬리브라켓

배열에서는 []
객체(오브젝트)는 {}

배열은 값을 리스트로 표현하고
객체는 값을 네이밍으로 표현.

## #1.10

DB에서 가져온 리스트 데이터 => Array

---

## #2.1.1 More Function Fun

using backtick(``)

function sayHello(name, age) {
console.log(`Hello ${name} you are ${age} years old`);
}
const greetNicolas = sayHello("Nicolas", 15);

console.log(greetNicolas);

result ::
Hello Nicolas you are 15 years old
undefined

---

function sayHello(name , age){
return `Hello ${name} you are ${age} years old`;
}

const greetNicolas = sayHello("Nicolas", 15);

console.log(greetNicolas);

result ::
Hello Nicolas you are 15 years old

---

## #2.5 If, else, and, or

true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;

---

## #2.6 DOM - If else - Function practice

## #2.7 DOM

classList는 메서드를 가짐 mdn문서 참고할것..
classList.add
classList.remove

contains(String)

toggle(String[,focus])
is better than classList.contains

## #3.1 Making a JS Clock part One.

1. 시계만들기.
   const Date = new Date();
   문제 : 계속 새로 고침 해야하는 문제.
   방법 : **setInterval**함수를 이용.

---

## #3.2 Making a JS Clock part Two

1. setInterval().

   첫번째 인자는 함수.
   두번째 인자를 실행 하고 싶은 시간.
   ex)
   function sayHello(
   console.log("hi");
   }

setInterval(sayHi, 3000)

결과 ::
sayHi 함수가 3초바다 한번씩 실행됨.
페이지를 새로고침 하지 않아도 됨.

2. ternary operator(삼항 연산자)

---

## #3.3 Saving the User Name part One

1. querySelector는 찾는것의 **첫번째**것만 가져옴.
2. querySelectorAll은 **모든것**을 가져옴.
3. localStorage
   작은 정보를 유저 컴퓨터에 저장.

---

## #3.4 Saving the User Name part Two

1. input text save LocalStorage.

---

## #3.5 Making a To Do List part One

1. todo.js

## #3.6 Making a To Do List part Two

1. to do 저장. 배열로 저장. 어디에? localStorage.
2. 자바스크립의 데이터를 localStroage에 넣을수 없음.
   **문자열(String)**로 넣어야하는데...
   즉 오브젝트 형태를 String으로 변환해서 넣어야함.
   여기서 나오는게
   **JSON.stringify**
   자바스크립트 object를 String으로 변환!.
