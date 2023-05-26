import styled from "styled-components";
import Header from "../header/Header";

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
  return (
    <>
      <Header title="지난 대화들" />
      {CONSTANT.map((item, i) => (
        <Message key={i}>
          <Content>
            <TitleWrapper>
              <Title>{item.name}</Title>
              <MbtiPlate>
                <Circle />
                <span>{item.mbti}</span>
              </MbtiPlate>
            </TitleWrapper>
            <TextBox>{item.text}</TextBox>
          </Content>
        </Message>
      ))}
    </>
  );
};

const Message = styled.div`
  width: 100%;
  padding-inline: 2rem;
  padding-block-start: 2rem;
`;
const Content = styled.div`
  padding-inline: 1rem;
  border-top: 1px solid lightgrey;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 1rem;
  align-content: center;
  height: 1.3rem;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.span`
  margin-right: 0.5rem;
  font-size: 1.4rem;
`;

const MbtiPlate = styled.div`
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 2px 5px 2px 3px;
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Circle = styled.div`
  height: 10px;
  border: 1px solid pink;
  background-color: pink;
  width: 10px;
  border-radius: 10px;
  margin-right: 0.3rem;
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
