import SocialKakao from "./SocialKakao";
import styled from "styled-components";

const Login = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center">
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
  margin: 10rem 0;
  h1 {
    margin-bottom: 4rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

export default Login;
