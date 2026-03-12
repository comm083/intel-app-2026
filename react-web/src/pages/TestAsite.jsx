import React from "react";
import { useNavigate } from "react-router-dom";

function TestAsite({ click }) {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <div className="flex justify-center items-center h-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded hover"
          onClick={() => navigate("/TestBsite")}
        >
          B사이트로 이동하기
        </button>
      </div>
      <div>
        {click && (
          <p className="absolute top-20 left-178 text-lg">눌러버렸구나...</p>
        )}
      </div>
    </div>
  );
}

export default TestAsite;
