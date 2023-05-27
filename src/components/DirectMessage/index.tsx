import styled from "styled-components";
import Header from "../header/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { PencilIcon } from "@heroicons/react/outline";
import Modal from "../Common/Modal";
import { useState } from "react";
import MessageItem from "./MessageItem";

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

export default function DirectMessage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
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
              <MessageItem
                key={i}
                userName={item.user}
                text={item.text}
                handleClick={handleModal}
              />
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
        question="  애인이 어쩌구 저쩌구의 행동을 했을 때 어쩌구 저쩌구 모시깽? 이것은 50자다 50자"
        desc=" 대답은 어쩌구 저쩌구 줄글로 위치가 정해져 있는 것이 나중에 구현하기가 편하겠지. 그러니까 대충 왕 길게 이렇게 적으려고 하는데 글자수 최대가 어느정도일까나? 일단 이건 100자 정도"
        handleClick={handleSendMessge}
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
  height: 85vh;
  max-height: 85vh;
  padding-block: 4rem;
  margin-top: 1rem;
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
