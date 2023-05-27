import styled from "styled-components";
import Header from "../header/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { PencilIcon } from "@heroicons/react/outline";
import Modal from "../Common/Modal";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(true);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageClick = () => {
    console.log("handleMessageClick");
  };
  const handleSendMessge = () => {
    console.log("asd");
  };
  return (
    <>
      <Header title="정진범" />
      <Container>
        <Content className="scrollbar">
          <PerfectScrollbar>
            {CONSTANT.map((item, i) => (
              <Message key={i} user={item.user} onClick={handleMessageClick}>
                <div>
                  <span>{item.text}</span>
                </div>
              </Message>
            ))}
          </PerfectScrollbar>
        </Content>
      </Container>
      <InputContainer>
        <Input type="text" />
        <StyledIcon onClick={handleSendMessge} />
      </InputContainer>
      <Modal
        handleModal={handleModal}
        isOpen={isOpen}
        userName="정진범"
        mbti="ENFJ"
        question="  애인이 어쩌구 저쩌구의 행동을 했을 때 어쩌구 저쩌구 모시깽?
      이것은 50자다 50자"
        desc=" 대답은 어쩌구 저쩌구 줄글로 위치가 정해져 있는 것이 나중에
      구현하기가 편하겠지. 그러니까 대충 왕 길게 이렇게 적으려고
      하는데 글자수 최대가 어느정도일까나? 일단 이건 100자 정도"
      />
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
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 100%;
  background-color: rgb(32, 33, 36);
  outline: none;
`;

const StyledIcon = styled(PencilIcon)`
  width: 1.6rem;
  cursor: pointer;
`;
