import React from "react";
import { FaGithub } from "react-icons/fa";
import { Mail } from "lucide-react";
import { FaRunning } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function UserCard() {
  const name = "김철수";
  const userInfo = {
    age: 20,
    school: "한국대학교",
    hobby: ["운동", "독서", "글쓰기"],
    isMember: true,
    github:
      "https://react-icons.github.io/react-icons/search/#q=github, https://react-icons.github.io/react-icons/search/#q=running, https://react-icons.github.io/react-icons/search/#q=book, https://react-icons.github.io/react-icons/search/#q=pen",
  };
  const icons = {
    운동: <FaRunning />,
    독서: <FaBookOpen />,
    글쓰기: <FaPencilAlt />,
  };
  return (
    <div
      className="bg-blue-100 w-100 p-10 rounded-lg m-5
    hover:bg-blue-200"
    >
      <div className="text-blue-600 font-bold">이름:{name}</div>
      <div className="bg-red-300 text-emerald-500 rounded">
        나이:{userInfo.age}
      </div>
      <div className="text-primary ">학교:{userInfo.school}</div>
      <div className="flex">
        <FaGithub className="mt-1 text-success" />
        :https://github.com/username
      </div>
      <div className="flex">
        <Mail size={17} className="mt-1 text-warning" />
        :email@gmail.com
      </div>
      <div>취미:{userInfo.hobby}</div>
      <div>회원여부:{userInfo.isMember ? "Y" : "N"}</div>
      {/*회원이 아니면 회원가입 버튼이 보이게*/}
      {!userInfo.isMember && <button>회원가입</button>}
      <h3 className="text-3xl font-bold underline">취미</h3>
      <ul className="flex gap-2">
        {userInfo.hobby.map((h, i) => (
          <li
            className="flex bg-blue-500 text-white rounded px-2  gap-2"
            key={i}
          >
            <div className="mt-1">{icons[h]}</div>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
