import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import PreviousButton from "../Common/Button/PreviousButton";
import { useEffect, useState } from "react";
import { getQuestions } from "../../api/request";
import { getTokenStorage } from "../../utils/storage";
import Content from "./Content";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const { token } = getTokenStorage();

const PocketDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    mbti: "INTP",
    title:
      "dodldl sldkfj ldfkjsdfl sldkfjdslk sdlfkjsdflksjdflksdjflsdkfjsdf ldkfjsldkf",
    user: [
      {
        id: 1,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 2,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 3,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 4,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 5,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 6,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 7,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 8,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 9,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 10,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
      {
        id: 11,
        name: "nickname",
        mbti: "intp",
        belief: 2,
        content: "sldkfjsldkfjsdklfjsdlkfjsdlfk",
      },
    ],
  });
  const { mbti, title, user } = data;

  useEffect(() => {
    getQuestions({
      token,
      data: { question: id },
    })
      .then((res) => {
        const { data } = res;
        setData(data);
      })
      .catch((e) => {
        throw Error("Fail To Get Questions", e);
      });
  }, [id]);

  return (
    <Container>
      <StyledHeader className="flex items-center gap-3 ">
        <PreviousButton stroke="black" onClick={() => navigate("/pocket")} />
        <Title>{mbti}에게 물었다.</Title>
      </StyledHeader>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <hr className="border border-t-1 border-zinc-500 my-6" />
        <div style={{ height: "90vh" }}>
          <PerfectScrollbar>
            {user.map(({ id, name, mbti, belief, content }) => {
              return (
                <Content
                  key={id}
                  id={id}
                  name={name}
                  mbti={mbti}
                  belief={belief}
                  content={content}
                />
              );
            })}
          </PerfectScrollbar>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-inline: 1.5rem;
  padding-block: 1.5rem;
  border: 1px solid red;
  height: 100vh;
  background-color: white;
  color: black;
  overflow: hidden;
`;

const StyledHeader = styled.header`
  padding-block: 1.5rem;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  color: #5f5f5f;
  font-size: 1.2rem;
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  color: #202124;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export default PocketDetails;
