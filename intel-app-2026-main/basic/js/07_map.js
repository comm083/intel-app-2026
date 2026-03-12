const numbers = [1, 2, 3, 4, 5]; //각 요소값이 2배인 새로운 배열을 만들고 싶다.

const doubled = numbers.map((n) => n * 2);

console.log(doubled);

// 객체 배열 다루기["<p>철수(25)</p>", "<p>영희(30)</p>", "<p>민수(28)</p>"]
const users = [
  { id: 1, name: "철수", age: 25 },
  { id: 2, name: "영희", age: 30 },
  { id: 3, name: "민수", age: 28 },
];

const users_tag = users.map((user) => `<p>${user.name}</p>`);
console.log(users_tag);

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//짝수만 필터링
const evens = numbers2.filter((n) => {
  return n % 2 == 0;
});

console.log(evens);

//연습문제
const scores = [95, 72, 88, 63, 91, 55, 87];
const over80 = scores.filter((n) => n >= 80);
console.log(over80);

// 문제 2: 다음 학생 배열에서 각 학생의 이름만 추출하세요
const students = [
  { id: 1, name: "김철수", grade: 3 },
  { id: 2, name: "이영희", grade: 2 },
  { id: 3, name: "박민수", grade: 1 },
];
const studentsName = students.map((students) => students.name);
console.log(studentsName);

// 문제 3: 다음 학생 배열에서 2학년 이상 학생들의 이름만 추출하세요
const students2 = [
  { id: 1, name: "김철수", grade: 3 },
  { id: 2, name: "이영희", grade: 2 },
  { id: 3, name: "박민수", grade: 1 },
];

const over_2_StudentsName = students2
  .filter((g) => g.grade >= 2)
  .map((n) => n.name);
console.log(over_2_StudentsName);
