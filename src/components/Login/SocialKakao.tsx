import styled from "styled-components";
import { getTokenStorage } from "../../utils/storage";
import { getUser } from "../../api/request";
import { useNavigate } from "react-router-dom";

// const Rest_api_key = "cddf66394b31736dadc6c286c6eb6e5d"; //REST API KEY
const Rest_api_key = "84e3b52ab109360d6443565c365472dc"; //REST API KEY

// const redirect_uri = "http://localhost:5173/auth"; //Redirect URI
const redirect_uri = "https://potential.vercel.app/auth"; //Redirect URI

const SocialKakao = () => {
  const navigate = useNavigate()
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    const { token, user: { id } } = getTokenStorage();
    if (token) {
      getUser({ token, id, data: {} }).then(({ data }) => {
        if (data.mbti) {
          navigate("/main");
        } else {
          navigate("/card");
        }
      });
      return;
    }
    window.location.href = kakaoURL;
  };
  return <KakaoButton onClick={handleLogin}>카카오톡 로그인</KakaoButton>;
};

const KakaoButton = styled.button`
  color: #000000;
  border-radius: 1rem;
  background-color: #ffcd29;
  cursor: pointer;
  width: 243px;
  height: 44px;
  font-size: 2rem;
`;
export default SocialKakao;
