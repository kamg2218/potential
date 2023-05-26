import { useState } from "react";

import styled from "styled-components";

import TextField from "./TextField";
import NextButton from "../Common/Button/NextButton";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../utils/storage";

const Main = () => {
  const { mbti, belief } = getLocalStorage();

  const [text, setText] = useState("");
  const handleText = (value: string) => {
    setText(value);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    setLocalStorage({ mbti, belief, msg: text });
    navigate("/main/card");
  };

  return (
    <Container className="w-full h-screen">
      <MbtiBox>
        <StyledSpan>·</StyledSpan>
        <span>{mbti}</span>
      </MbtiBox>
      <Content>
        <h1>
          다른 <strong>MBTI는 </strong>
          <div />
          <strong>어떤 생각</strong>을 할까?
        </h1>
        <p>궁금한 점을 쪽지로 보내보세요.</p>
        <Wrapper>
          <TextField
            text={text}
            placeholder="전송할 MBTI"
            handleChange={handleText}
          />
        </Wrapper>
      </Content>
      <NextButton text="질문하기" className="my-8" onClick={handleClick} />
    </Container>
  );
};

const MbtiBox = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;

  top: 22px;
  z-index: 2;
  position: relative;
  rotate: 351deg;

  border: 1px solid black;
  border-radius: 0.5rem;
  background: #fff;

  width: 30%;
  height: 3.8rem;

  span {
    font-size: 2.5rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 3.5rem;
  margin-left: 1rem;
  margin-right: 0.5rem;
`;

const Content = styled.div`
  display: block;
  position: relative;
  padding-block-start: 7rem;
  padding-block-end: 1.5rem;
  background: #fff;
  border: 1px solid #000000;
  border-radius: 1rem;
  width: 90%;
  text-align: center;
  h1 {
    margin-bottom: 3rem;
    font-size: 3.5rem;
  }
  strong {
    font-weight: bold;
  }
  p {
    margin-bottom: 3rem;
  }
`;

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-top: 10rem;
`;

const Wrapper = styled.div`
  color: black;
  width: 100%;
  //height: 4.5rem;
  padding-inline: 3rem;
  display: flex;
  align-items: center;
  flex-direction: row;

  textarea {
    background-color: #e1e1e1;
    width: 100%;
    border-radius: 0.7rem;
    resize: none;
    padding: 10px;
    ::placeholder {
    }
  }
`;

export default Main;
