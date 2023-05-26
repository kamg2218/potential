import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../api/request";

// const LOCAL_URL = 'https://911b-175-192-26-222.ngrok-free.app';

export default function Oauth() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        // local
        // const res = await axios.get(`${LOCAL_URL}/api/code=${code}`);

        // deploy
        const res = await axios.get(`api/code=${code}`);
        const token = res.headers.authorization;
        console.log(res);
        window.localStorage.setItem("token", token);

        const user = await getUser({ token, id: 1, data: code });
        console.log(user);
        if (user.data && !user.data.user) {
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
