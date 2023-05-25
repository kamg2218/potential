import Button from "../Button";

import styled from "styled-components";

import SocialKakao from "./SocialKakao";


const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-">
      <Wrapper>
        <h1 className="w-full text-center text-slate-400 text-9xl">MBTI</h1>
        <div style={{ textAlign: "center" }}>
          <p>원하는 MBTI에게</p>
          <p>직접 물어볼 수 있습니다.</p>
          <p>🤫 (쉿!)</p>
          <p>쪽지는 비밀스럽게 전달해드릴게요.</p>
        </div>
      </Wrapper>
      <SocialKakao />
    </div>
  );
};

const Wrapper = styled.div`
  margin-bottom: 15rem;
  h1 {
    margin-bottom: 4rem;
  }
`;
const StyledButton = styled(Button)`
  width: 60%;
  height: fit-content;
  border: 1px solid lightgrey;
  border-radius: 8px;
  padding: 1rem 2rem;

  color: grey;

  :hover {
    color: black;
    border: 1px solid black;
  }
`;

export default Login;
