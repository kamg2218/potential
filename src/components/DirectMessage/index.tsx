import styled from "styled-components";
import Header from "../header/Header";

const CONSTANT = [
  { user: "1", text: "1232131231231231231" },
  {
    user: "2",
    text: "가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽가나다라마바사 공백 포함 255자 적기 시작. 어쩌구 저쩌구 모시깽 저시깽 가나다",
  },
];
export default function DirectMessage() {
  return (
    <>
      <Header title="정진범" />
      <Container>
        <Content>
          {CONSTANT.map((item, i) => (
            <Message>
              <span>{item.text}</span>
            </Message>
          ))}
        </Content>
        <Input type="text" placeholder="input" />
      </Container>
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
  height: 100%;
  padding-block: 4rem;
  margin-top: 1rem;
`;

const Message = styled.li`
  width: 70%;
  line-height: 25px;
  padding-inline: 1.5rem;
  padding-block-start: 0.3rem;
  border: 1px solid #ffcd29;
  border-radius: 0.5rem;
  background-color: #ffcd29;
  color: black;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div``;

const Input = styled.input`
  width: 100%;
  background-color: rgb(32, 33, 36);
  outline: none;
`;
