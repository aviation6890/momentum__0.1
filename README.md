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
