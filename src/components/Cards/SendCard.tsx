import { useState } from "react";
import { useNavigate } from "react-router";

import Card from "../Common/Card";
import NextButton from "../Common/Button/NextButton";
import PreviousButton from "../Common/Button/PreviousButton";
import { getLocalStorage } from "../../utils/storage";
import { postQuestions } from "../../api/request";

const MBTI_LIST = ["E", "I", "N", "S", "F", "T", "P", "J"];
const { token, user } = getLocalStorage();
const { msg } = user;

const SendCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    postQuestions({ token, data: { mbti: mbti.join(""), title: msg } })
      .then(() => navigate("/complete"))
      .catch((err) => {
        throw new Error("Fail To Send Message.", err);
      });
  };
  const handlePreviousClick = () => {
    navigate("/main");
  };

  const [mbti, setMbti] = useState(["I", "N", "T", "J"]);
  const handleMbti = (str: string) => {
    const idx = MBTI_LIST.findIndex((lst) => lst === str);
    if (idx !== -1) {
      const lst = mbti.slice();
      lst[Math.floor(idx / 2)] = str;

      setMbti(lst);
    }
  };

  return (
    <>
      <PreviousButton className="ml-6 mt-5" onClick={handlePreviousClick} />
      <div className="grid text-center justify-center gap-4 mt-6">
        <div className="text-5xl text-white">누구에게 보낼까요?</div>
        <div className="mb-3" style={{ color: "#7B7B7B" }}>
          어떤 MBTI에게 물어볼까요?
        </div>
        <Card mbti={mbti} handleMbti={handleMbti} />
        <NextButton text="질문하기" className="my-5" onClick={handleClick} />
      </div>
    </>
  );
};

export default SendCard;
