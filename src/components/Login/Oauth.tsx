import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Oauth() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`api/code=${code}`);
        const token = res.headers.authorization;
        window.localStorage.setItem("token", token);
        navigate("/main");
      } catch (e) {
        console.error(e);
        navigate("/main");
      }
    })();
  }, []);

  return <div>Oauth</div>;
}
