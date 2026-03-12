// let 변수는 수정 가능
let l1;
console.log(l1);

const c1 = 100;
console.log(c1);

v1 = 1000;
console.log(v1);

//변수의 스코프
function f() {
  {
    let num = 1;
    console.log(num); // 1
  }
  // console.log(num); // error
}

f();

let a = null;

console.log(a);

let s = `hello
world`;

console.log(s);

const name = "김철수";
const age = 20;
const message = `이름:${name}, 나이:${age}, 내년나이:${age + 1}`;

console.log(message);

const person = {
  name: "홍길동",
  age: 25,
  isStudent: true,
};
