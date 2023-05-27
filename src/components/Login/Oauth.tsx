import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../api/request";
import { setTokenStorage } from "../../utils/storage";
import axios, { AxiosResponse } from "axios";

// const REST_API_KEY = "cddf66394b31736dadc6c286c6eb6e5d"; //REST API KEY
// const CLIENT_SECRET = "PuisJ5MfexduI7mhyoukwIROhTI7gxbD";
// const REDIRECT_URI = "http://localhost:5173/auth"; //Redirect URI

const REST_API_KEY = "84e3b52ab109360d6443565c365472dc"; //REST API KEY
const CLIENT_SECRET = "NuDkF7r2uuLdxkQkpNE3jPJ7uR2sSb5W";
const REDIRECT_URI = "https://potential.vercel.app/auth"; //Redirect URI

const url = "https://kauth.kakao.com/oauth/token";

// interface Response {
//   user: {
//     id: number,
//     name: string,
//     mbti: string | null,
//     belief: number | null,
//   },
//   token: string,
// };

export default function Oauth() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          url,
          {
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            code,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          }
        );

        const token = res.data.access_token;
        window.localStorage.setItem("token", token);

        const login = await postLogin({ token });

        console.log(login);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const { token: loginToken, user } = login;
        setTokenStorage({ token: loginToken, user: { id: user.id, name: user.name } });

        if (!user.mbti) {
          navigate("/card");
        } else {
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
