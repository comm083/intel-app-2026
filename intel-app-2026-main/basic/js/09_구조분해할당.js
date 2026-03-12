const user = {
  name: "김철수",
  age: 30,
  email: "kim@example.com",
  job: "개발자",
  phone: "010-1234-5678",
};

function printUser({ name, age }) {
  console.log(name, age);
}
printUser(user);

// const { name, age, phone = "없음" } = user;
// console.log(name, age, phone);

// 배열의 구조분해
const colors = ["red", "green", "blue"];
const [c1, c2, c3] = colors;
console.log(c1, c2, c3);

//연습문제
const person = { name: "홍길동", age: 30, city: "서울" };

const { name, city } = person;
console.log(name, city);

const user2 = { name: "Tom", age: 20, city: "Seoul" };

const practice = (user2) => {
  console.log(`이름:${user2.name}, 나이:${user2.age}`);
};
