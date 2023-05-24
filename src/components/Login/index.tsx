import { useNavigate } from "react-router-dom";

import { getLocalStorage, setLocalStorage } from "../../utils/storage";
import Button from "../Button";

import styled from 'styled-components'

const Login = () => {
  const navigate = useNavigate();

  const store = getLocalStorage();

  const handleClick = () => {
    if (store) {
      // TODO : api 연결 - 저장된 토큰 검증
      navigate("/card");
      return;
    }

    // TODO : api 연결
    // 새로운 토큰이 필요한 경우
    // 검증 후, storage 저장 및 밸런스 게임으로 이동
    setLocalStorage("popopo");
    navigate("/balance");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-">
      <div className="w-full text-center text-slate-400 text-9xl">MBTI</div>
      <StyledButton onClick={handleClick}>
        시작하기
      </StyledButton>
    </div >
  );
};

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
