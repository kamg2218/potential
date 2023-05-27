import styled from "styled-components";
import Header from "../header/Header";
import NamePlate from "../Common/NamePlate";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useEffect, useState } from "react";
import { getHistory } from "../../api/request";
import { getTokenStorage } from "../../utils/storage";

// eslint-disable-next-line react-refresh/only-export-components
export const CONSTANT = [
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은위칠가정해져",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은",
  },
  {
    mbti: "ENFP",
    name: "정진범",
    text: "대답은 어쩌구 저쩌구 즐글로 위칠가정해져 있는것이 나중에 구 대답은",
  },
];
const MessageList = () => {
  const { token, user: { id } } = getTokenStorage();

  const [msg, setMsg] = useState<{ id: number, updated_at: string, logs: { id: number, message: string, created_at: string, receiver: any }[] }[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    getHistory({ token, data: { id } }).then(res => setMsg(res));
  }, []);

  return (
    <>
      <Header title="지난 대화들" />
      <Container>
        <PerfectScrollbar>
          {msg.length ?
            msg.map(({ id, logs }) => {
              const { message, receiver } = logs[0];
              return (
                <Message key={id}>
                  <Content>
                    <TitleWrapper>
                      <Title>{receiver.name}</Title>
                      <NamePlate mbti={receiver.mbti} mbtiPercent={"123"} />
                    </TitleWrapper>
                    <TextBox>{message}</TextBox>
                  </Content>
                </Message>
              )
            })
            : (CONSTANT.map((item, i) => (
              <Message key={i}>
                <Content>
                  <TitleWrapper>
                    <Title>{item.name}</Title>
                    <NamePlate mbti={item.mbti} mbtiPercent={"123"} />
                  </TitleWrapper>
                  <TextBox>{item.text}</TextBox>
                </Content>
              </Message>
            )))}
        </PerfectScrollbar>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 85vh;
  max-height: 85vh;
  margin-top: 1rem;
`;

const Message = styled.div`
  width: 100%;
  padding-inline: 2rem;
  padding-block-start: 2rem;
`;

const Content = styled.div`
  padding-inline: 1rem;
  border-top: 1px solid lightgrey;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 1.3rem;
  align-items: flex-end;
  justify-content: flex-start;
`;

const Title = styled.span`
  margin-right: 0.5rem;
  font-size: 1.4rem;
`;
const TextBox = styled.div`
  width: 100%;
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.2rem;
`;
export default MessageList;
