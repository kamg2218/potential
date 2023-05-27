import { MouseEvent, useState } from "react";

import styled from "styled-components";

import TextField from "../Common/TextArea/TextArea";
import NextButton from "../Common/Button/NextButton";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../utils/storage";
import LastChatButton from "../Common/Button/LastChatButton";

import belief1 from "../../assets/belief/belief1.png";
import belief2 from "../../assets/belief/belief2.png";
import belief3 from "../../assets/belief/belief3.png";
import pigtail from "../../assets/pigtail.png";

export const BELIEF_IMAGE: { [key: string]: string } = {
  belief1: belief1,
  belief2: belief2,
  belief3: belief3,
};

const Main = () => {
  const {
    user: { mbti, belief },
  } = getLocalStorage();

  const url = belief ? BELIEF_IMAGE[`belief${belief}`] : belief1;

  const [text, setText] = useState("");
  const handleText = (value: string) => {
    setText(value);
  };

  const navigate = useNavigate();
  const handleClick = (value: string) => {
    setLocalStorage({ mbti, belief, msg: value });
    navigate("/main/card");
  };

  return (
    <Container>
      <MbtiBox>
        <Img src={pigtail} width={25} />
        <StyledSpan>•</StyledSpan>
        <span>{mbti}</span>
        <StyledBelief src={url} alt="belief" />
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
      <NextButton
        text="질문하기"
        className="my-14"
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        onClick={handleClick}
        // disabled={text ? false : true}
      />
      <LastChatButton
        left="지난 질문들"
        right="지난 대화들"
        handleLeftClick={() => navigate("/history")}
        handleRightClick={() => navigate("/pocket")}
      />
    </Container>
  );
};

const MbtiBox = styled.div`
  color: black;
  display: flex;
  gap: 0.1rem;
  flex-direction: row;
  align-items: center;

  top: 22px;
  z-index: 2;
  position: relative;
  rotate: 351deg;

  border: 1px solid black;
  border-radius: 0.5rem;
  background: #fff;

  width: 12rem;
  height: 3.8rem;

  span {
    font-size: 2.5rem;
  }
`;

const Img = styled.img`
  position: absolute;
  top: 1rem;
  left: -1.1rem;
`;
const StyledSpan = styled.span`
  font-size: 3rem !important;
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
  margin-top: 13rem;
`;

const Wrapper = styled.div`
  color: black;
  width: 100%;

  padding-inline: 2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const StyledBelief = styled.img`
  height: 2.2rem;
  margin-bottom: 0.2rem;
  margin-left: 0.3rem;
`;

export default Main;
