import React, { useState } from "react";

function Example() {
  let count = 10;
  const [stateCount, setStateCount] = useState(10);
  console.log("count:", count);
  console.log("stateCount:", stateCount);

  const handleClick = () => {
    count++;
    setStateCount(stateCount + 1);
  };

  const handleClick2 = (name) => {
    alert(`${name} 님 안녕하세요.`);
  };

  return (
    <div>
      <button
        className="bg-blue-300"
        onClick={() => {
          alert("클릭되었습니다.");
        }}
      >
        Click me
      </button>
      <button className="bg-green-300" onClick={handleClick}>
        Click me
      </button>
      <span>{stateCount}</span>
      <button
        className="bg-red-300"
        onClick={() => {
          handleClick2("홍길동");
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default Example;
