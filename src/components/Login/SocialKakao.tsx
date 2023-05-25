import styled from "styled-components";

const SocialKakao = () => {
  const Rest_api_key = "84e3b52ab109360d6443565c365472dc"; //REST API KEY cddf66394b31736dadc6c286c6eb6e5d
  const redirect_uri = "https://potential.vercel.app/auth"; //Redirect URI http://localhost:5173/auth
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return <KakaoButton onClick={handleLogin} />;
};

const KakaoButton = styled.button`
  background-image: url(https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg);
  background-repeat: no-repeat;
  cursor: pointer;
  width: 180px;
  height: 45px;
`;
export default SocialKakao;
