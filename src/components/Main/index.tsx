import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";

const Main = () => {
  const [loginState, setLoginState] = useState(false);
  return (
    <Container className="w-full h-screen flex flex-col justify-center items-center">
      {loginState && <h1>로그인을 해야 기록이 남아요</h1>}
      <h2>질문 입력</h2>
      <Wrapper>
        <input type={"text"} placeholder="전송할 mbti" />
        <StyledButton>전송</StyledButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: bold;
    margin-bottom: 1rem;
    font-size: 3rem;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  padding-inline: 2rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  input {
    height: 100%;
    width: 85%;
    border-radius: 1rem;
    margin-right: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: orange;
  height: 100%;
  width: 15%;
  border-radius: 1rem;
`;

export default Main;
