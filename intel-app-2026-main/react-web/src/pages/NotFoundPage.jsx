import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage({ click }) {
  const navigate = useNavigate();
  return (
    <div className="relative h-screen flex-col flex justify-center items-center h-full">
      <div className="text-center">
        잘못된 페이지입니다. <br />홈 페이지로 돌아가주세요.
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded hover"
        onClick={() => navigate("/")}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}

export default NotFoundPage;
