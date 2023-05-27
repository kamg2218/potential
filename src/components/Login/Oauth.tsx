import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/request";
import { setTokenStorage } from "../../utils/storage";
import axios from "axios";

// const REST_API_KEY = "cddf66394b31736dadc6c286c6eb6e5d"; //REST API KEY
// const CLIENT_SECRET = "PuisJ5MfexduI7mhyoukwIROhTI7gxbD";
// const REDIRECT_URI = "http://localhost:5173/auth"; //Redirect URI

const REST_API_KEY = "84e3b52ab109360d6443565c365472dc"; //REST API KEY
const CLIENT_SECRET = "NuDkF7r2uuLdxkQkpNE3jPJ7uR2sSb5W"
const REDIRECT_URI = "https://potential.vercel.app/auth"; //Redirect URI

const url = 'https://kauth.kakao.com/oauth/token';

export default function Oauth() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(url, {
          grant_type: 'authorization_code',
          client_id: REST_API_KEY,
          client_secret: CLIENT_SECRET,
          redirect_uri: REDIRECT_URI,
          code,
        }, {
          headers: { "Content-Type": 'application/x-www-form-urlencoded;charset=utf-8' }
        });

        const token = res.data.access_token;
        window.localStorage.setItem("token", token);

        const login = await postLogin({ token });

        if (!login) {
          navigate('/card');
        } else {
          const { token: loginToken, user } = login.data;
          setTokenStorage({ token: loginToken, user });
          navigate("/main");
        }
      } catch (e) {
        console.error(e);
        navigate("/login");
      }
    })();
  }, []);

  return <div>Oauth</div>;
}
