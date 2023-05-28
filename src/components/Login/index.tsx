import SocialKakao from "./SocialKakao";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import { getLocalStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const {
      token,
      user: { id },
    } = getLocalStorage();

    if (token && id) {
      navigate("/main");
    }
  }, []);
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Wrapper className="flex flex-col items-center">
        <Logo src={logo} />
        <div style={{ textAlign: "center" }}>
          <p>원하는 MBTI에게 궁금한 점을</p>
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
  margin: 5rem 0;
  line-height: 30px;
`;
const Logo = styled.img`
  width: 80%;
  margin-bottom: 5rem;
`;

export default Login;
