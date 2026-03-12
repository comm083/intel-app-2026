import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function ExampleInput() {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");

  const validatePassword = (password) => {
    return (
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
    );
  };
  console.log(userid);
  console.log(password);
  return (
    <>
      <div>
        <label htmlFor="userid">ID(8자까지만 입력 가능)</label>
        <input
          type="text"
          name="userid"
          id="userid"
          value={userid}
          onChange={(e) => {
            const LIMIT = 8;
            const value = e.target.value;
            if (value.length <= LIMIT) {
              setUserId(value.toUpperCase());
            }

            //내가 한 방법
            // userid.length <= 8
            //   ? setUserId(e.target.value.toUpperCase())
            //   : setUserId(e.target.value.toUpperCase().slice(0, 8));
          }}
        />
        <button
          className="bg-gray-300"
          onClick={() => {
            setUserId("");
          }}
        >
          초기화
        </button>
      </div>
      <div>
        {userid}({userid.length})
      </div>
      <div className="flex items-center">
        <label htmlFor="password">비밀번호:</label>
        <input
          type={type}
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        {type === "password" ? (
          <Eye size={30} className="m-3" onClick={() => setType("text")} />
        ) : (
          <EyeOff
            size={30}
            className="m-3"
            onClick={() => setType("password")}
          />
        )}
      </div>
      <div>
        {password.length > 0 &&
          (validatePassword(password)
            ? "올바른 비밀번호입니다."
            : "비밀번호가 유효하지 않습니다.")}
      </div>
    </>
  );
}

export default ExampleInput;
