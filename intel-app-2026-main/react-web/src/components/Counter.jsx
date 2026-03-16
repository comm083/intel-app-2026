import React, { useState } from "react";

function Counter() {
  const [stateCount, setStateCount] = useState(0);

  const countMinus = () => {
    setStateCount(stateCount - 1);
  };

  const countPlus = () => {
    setStateCount(stateCount + 1);
  };

  const countReset = () => {
    setStateCount(stateCount - stateCount);
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col justify-center p-20 text-[50px] w-150 bg-white">
        <h1
          className={`text-[100px] text-center ${stateCount > 0 ? "text-red-500" : stateCount < 0 ? "text-blue-500" : "text-black"}`}
        >
          {stateCount}
        </h1>
        <div className="flex justify-between gap-10 ">
          <button
            className="bg-blue-100 dsabled:bg-gray=100 w-20 rounded-full hover:bg-blue-200 disabled:bg-gray-100 disabled:text-gray-300"
            onClick={countMinus}
            disabled={stateCount == -10}
          >
            -
          </button>
          <button
            className="bg-[#f3f3f3] w-50 pl-5 pr-5 rounded-[10px] hover:bg-[#eee]"
            onClick={countReset}
          >
            Reset
          </button>
          <button
            className="bg-blue-500 dsabled:bg-gray=100 w-20 rounded-full text-white hover:bg-blue-600 disabled:bg-gray-100 disabled:text-gray-300"
            onClick={countPlus}
            disabled={stateCount == 10}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
