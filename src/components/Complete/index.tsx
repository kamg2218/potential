import React from "react";
import { useNavigate } from "react-router-dom";
import NextButton from "../Common/Button/NextButton";
import styled from "styled-components";
import logo from "../../assets/logo.png";
const RANDOM_TEXT = [
  "노래를 🎧 들어볼까요?",
  "맛있는 푸딩을 먹어요!",
  "커피 ☕️ 한 모금 할까요?",
  "동네 한 바퀴",
];
const Complete = () => {
  const navigate = useNavigate();

  return (
    <Container className="w-full h-screen flex flex-col justify-center items-center">
      <h1>
        <strong>쪽지</strong>가 <br /> 전달되었습니다.
      </h1>
      <Img src={logo} alt="" />
      <Description>
        <p>정진범님의 질문을 보냈어요!</p>
        <p>쪽지가 도착하면 알려줄게요!</p>
        <p>{`도착 할 때까지 ${RANDOM_TEXT[Math.floor(Math.random() * 4)]}`}</p>
      </Description>
      <NextButton text={"메인으로"} onClick={() => navigate("/main")} />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  h1 {
    font-size: 3.8rem;
  }
  strong {
    font-weight: bold;
  }
`;
const Description = styled.div`
  color: #f3f3f3;
  margin-bottom: 10rem;
  p {
    margin-bottom: 1rem;
  }
`;
const Img = styled.img`
  padding-block: 6rem;
`;
export default Complete;
