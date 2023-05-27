import styled from "styled-components";
import Header from "../header/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
const CONSTANT = [
  {
    user: "1",
    text: "가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽 가나다",
  },
  {
    user: "2",
    text: "가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽 가나다",
  },
  {
    user: "1",
    text: "가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽 가나다",
  },
];

type MessageProps = {
  user: string;
};
export default function DirectMessage() {
  return (
    <>
      <Header title="정진범" />
      <Container>
        <Content className="scrollbar">
          <PerfectScrollbar>
            {CONSTANT.map((item, i) => (
              <Message key={i} user={item.user}>
                <div>
                  <span>{item.text}</span>
                </div>
              </Message>
            ))}
          </PerfectScrollbar>
        </Content>
      </Container>
      <InputContainer>
        <Input type="text" placeholder="input" />
      </InputContainer>
    </>
  );
}

const Container = styled.div`
  padding-inline: 2rem;
  height: 100%;
`;

const Content = styled.ul`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  width: 100%;
  height: 67rem;
  max-height: 67rem;
  padding-block: 4rem;
  margin-top: 1rem;
`;

const Message = styled.li<MessageProps>`
  display: flex;
  flex-direction: ${(props) => (props.user === "1" ? "row-reverse" : "row")};
  width: 100%;
  //height: 100%;
  div {
    width: 70%;
    line-height: 25px;
    padding-inline: 1.5rem;
    padding-block-start: 0.3rem;
    border: 1px solid ${(props) => (props.user === "1" ? "#ffcd29" : "#F3F3F3")};
    border-radius: 0.5rem;
    background-color: ${(props) =>
      props.user === "1" ? "#ffcd29" : "#F3F3F3"};
    color: black;
    margin-bottom: 1rem;
  }
`;
const InputContainer = styled.div`
  padding-inline: 2rem;
  padding-block: 1rem;
`;
const Input = styled.input`
  width: 100%;
  background-color: rgb(32, 33, 36);
  outline: none;
`;
