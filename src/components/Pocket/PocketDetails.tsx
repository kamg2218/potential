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
      "애인이 어쩌구 저쩌구의 행동을 했을 때  어쩌구 저쩌구 모시깽? 이것은 50자다 50자",
    user: [
      {
        id: 1,
        name: "정진범",
        mbti: "INTP",
        belief: 2,
        content:
          "대답은 어쩌구 저쩌구 줄글로 위치가 정해져 있는 것이 나중에 구현하기가 편하겠지. 그러니까 대충 왕 길게 이렇게 적으려고 하는데 글자수 최대가 어느정도일까나? 일단 이건 100자 정도 대답은 어쩌구 저쩌구 줄글로 위치가 정해져 있는 것이 나중에 구현하기가 편하겠지. 그러니까 대충 왕 길게 이렇게 적으려고 하는데 글자수 최대가 어느정도일까나? 일단 이건 100자 정도",
      },
      {
        id: 2,
        name: "정진범",
        mbti: "INTP",
        belief: 2,
        content:
          "대답은 어쩌구 저쩌구 줄글로 위치가 정해져 있는 것이 나중에 구현하기가 편하겠지. 그러니까 대충 왕 길게 이렇게 적으려고 하는데 글자수 최대가 어느정도일까나? 일단 이건 100자 정도 대답은 어쩌구 저쩌구 줄글로 위치가 정해져 있는 것이 나중에 구현하기가 편하겠지. 그러니까 대충 왕 길게 이렇게 적으려고 하는데 글자수 최대가 어느정도일까나? 일단 이건 100자 정도",
      },
      {
        id: 3,
        name: "nickname",
        mbti: "INTP",
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
  const handleMessageClick = () => {
    console.log("click");
  };
  return (
    <Container>
      <StyledHeader className="flex items-center gap-3 ">
        <PreviousButton stroke="black" onClick={() => navigate("/pocket")} />
        <Title>{`${mbti}에게 물었다.`}</Title>
      </StyledHeader>
      <StyledTitle>
        <div>
          <span>{title}</span>
        </div>
        <hr className="border border-t-1 border-zinc-500 my-6" />
      </StyledTitle>
      <div style={{ height: "61vh" }}>
        <PerfectScrollbar>
          {user.map(({ id, name, mbti, belief, content }) => (
            <Content
              key={id}
              id={id}
              name={name}
              mbti={mbti}
              belief={belief}
              content={content}
              handleClick={handleMessageClick}
            />
          ))}
        </PerfectScrollbar>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding-inline: 1.5rem;
  color: black;
  height: 100vh;

  background-color: white;
  overflow: hidden;
`;

const StyledHeader = styled.header`
  padding-block: 3rem;
`;

const Title = styled.div`
  width: 100%;
  color: #5f5f5f;
  font-size: 1.2rem;
  text-align: center;
`;

const StyledTitle = styled.div`
  width: 100%;
  color: #202124;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  div {
    padding-block-end: 2rem;
  }
`;

export default PocketDetails;
