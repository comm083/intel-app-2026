import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TestBsite({ setClick }) {
  const navigate = useNavigate();

  const clicked = () => {
    setClick((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded hover"
          onClick={() => navigate("/")}
        >
          A사이트로 이동하기
        </button>
      </div>
      <div>
        <button
          className="absolute top-10 right-10 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded hover"
          onClick={clicked}
        >
          누르지 마시오.
        </button>
      </div>
    </div>
  );
}

export default TestBsite;
