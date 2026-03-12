// function greet(name = "고객님", age = 999) {
//   console.log(name, "안녕하세요!");
//   console.log(age, "살이시군요.");
//   console.log("반갑습니다!");
//   return true;
// }

// greet("김철수", 20);
// const result = greet();
// console.log(result);

function add(a, b) {
  return a + b;
}
//위 아래 같은것
const add1 = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

function isAdult(age) {
  return age >= 18;
}

const isAdult2 = (age) => age >= 18;

// 반지름을 입력받아서 원의 넓이를 구하는 화살표 함수 작성
// 3.14*r**2

const area = (r) => 3.14 * r ** 2;
console.log(area(10));

//제곱
const square = (x) => x ** 2;
console.log(square(5));

//인사말
// function greet(name, greeting = "안녕하세요") {
//     return `${greeting}, ${name}님!`;
// }

const greet = (name, greeting = "안녕하세요") => `${greeting}, ${name}님!`;
console.log(greet("홍길동")); // 안녕하세요, 홍길동님!
console.log(greet("김철수", "반갑습니다")); // 반갑습니다, 김철수님!

// (3) 합격 여부 판별
// function isPassed(score) {
//     return score >= 60;
// }

const isPassed = (score) => score >= 60;

console.log(isPassed(75)); // true
