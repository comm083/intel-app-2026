import { useState } from "react";
import { ThumbsUp } from "lucide-react";

function Like() {
  const [isLike, setIsLike] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);

  // const countLike = () => {
  //   setIsLike = !setIsLike(isLike);
  //   isLike = true
  //     ? (setLikeCnt = setLikeCnt + 1)
  //     : (setLikeCnt = setLikeCnt - 1);
  // };
  const countLike = () => {
    setIsLike(!isLike);
    console.log(isLike);
    setLikeCnt(isLike ? likeCnt - 1 : likeCnt + 1); //이 함수가 끝나야 바껴서 여기는 아직 isLike가 반대 상태
  };

  return (
    <div className="flex justify-center mt-20 flex flex-col items-center">
      <div>
        <ThumbsUp size={100} onClick={countLike} />
      </div>
      <div className="text-[64px]">{likeCnt}</div>
    </div>
  );
}

export default Like;
