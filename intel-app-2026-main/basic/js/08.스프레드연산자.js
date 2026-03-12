const original = [1, 2, 3];
const copy = [...original];

console.log(original);
console.log(copy);

copy.push(4);

console.log(original);
console.log(copy);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = [...arr3, 10];
console.log(arr4);

//----------------------------------
const original2 = { name: "홍길동", age: 25 };
const copy2 = { ...original2 };
copy2.age = 26;
console.log(copy2);
console.log(original2);

const info = { name: "홍길동" };
const details = { age: 25, city: "서울" };

const merged = { ...info, ...details, phone: "010-1234-5678-" };
// { name: '홍길동', age: 25, city: '서울' }
console.log(merged);

//연습문제
const fruits = ["사과", "바나나", "오렌지"];
const moreFruits = [...fruits, "포도", "딸기"];
fruits.push("망고");

console.log(fruits); // 사과 바나나 오렌지 망고
console.log(moreFruits); // 사과 바나나 오렌지 포도 딸기

const product = { name: "노트북", price: 1000000, stock: 50 };

const updated1 = { price: 900000, ...product };
const updated2 = { ...product, price: 900000 };

console.log(updated1.price); // 1,000,000
console.log(updated2.price); // 900,000

const [user, setUser] = useState({
  name: "김철수",
  email: "old@example.com",
  phone: "010-1234-5678",
});

const handleEmailChange = (newEmail) => {
  // 여기에 코드를 작성하세요
  // name과 phone은 유지하고 email만 newEmail로 변경
  newState = { ...[user, setUser], email: newEmail };
  return newState;
};

console.log(handleEmailChange);
