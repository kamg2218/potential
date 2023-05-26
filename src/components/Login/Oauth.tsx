import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, postLogin } from "../../api/request";

export default function Oauth() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        if (!code) return;
        const res = await postLogin({ token: code });
        const token = res.headers.authorization;
        window.localStorage.setItem("potential", JSON.stringify({ token, user: {} }));

        const user = await getUser({ token, id: 11, data: code });
        if (!user.data || !user.data.user) {
          navigate('/card');
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
