/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from "styled-components";
import Header from "../header/Header";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { PencilIcon } from "@heroicons/react/outline";
import Modal from "../Common/Modal";
import { useEffect, useState } from "react";
import MessageItem from "./MessageItem";
import { useNavigate, useParams } from "react-router-dom";
import { getHistory, getMessage, postSendChat } from "../../api/request";
import { getLocalStorage } from "../../utils/storage";

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
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    token,
    user: { id: userId },
  } = getLocalStorage();

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const [msg, setMsg] = useState<{
    data: { id: number; message: string; created_at: string }[];
    path: string;
    per_page: 15;
    next_cursor: boolean | null;
    next_page_url: boolean | null;
    prev_cursor: boolean | null;
    prev_page_url: boolean | null;
  } | null>(null);

  const [user, setUser] = useState<{
    id: number;
    name: string;
    mbti: string | null;
    belief: number | null;
  }>({
    id: 1,
    name: "정진범",
    mbti: "ENFP",
    belief: null,
  });

  const [chat, setChat] = useState("");
  const handleChat = (e: any) => {
    setChat(e.target.value);
  };

  const handleSendMessge = (value: string) => {
    if (!id) return;
    postSendChat({ token, chat: parseInt(id), data: { message: value } });
    setChat("");
  };

  // const handleMessage = (value: number) => {
  //   setFilterableMsg(msg[value]);
  // };

  useEffect(() => {
    if (id && userId) {
      getMessage({ token, id: parseInt(id), data: {} }).then((res) => {
        //@ts-ignore
        setMsg(res);
        getHistory({ token, user: userId, data: {} }).then((res) => {
          // @ts-ignore
          const { logs } = res.find(({ id: idx }) => idx === id);
          setUser(logs[0]["receiver"]);
        });
      });
    }
  }, [id]);

  return (
    <>
      <Container>
        <Header title={user["name"] || "정진범"} user={user} namePlate={true} useMessage={true} handleClick={() => navigate('/history')} handleMessageClick={handleModal} />
        <Wrapper>
          <Content className="scrollbar">
            <PerfectScrollbar>
              {msg && msg.data && msg.data.length
                ? msg.data.map((item) => (
                  <MessageItem
                    key={item.id}
                    userName={user["name"] || "정진범"}
                    text={item.message}
                  // handleClick={handleModal}
                  />
                ))
                : CONSTANT.map((item, i) => (
                  <MessageItem
                    key={i}
                    userName={item.user}
                    text={item.text}
                  // handleClick={handleModal}
                  />
                ))}
            </PerfectScrollbar>
          </Content>
        </Wrapper>
        <InputContainer>
          <Input type="text" value={chat} onChange={handleChat} />
          <StyledIcon onClick={() => handleSendMessge(chat)} />
        </InputContainer>
      </Container>
      <Modal
        isOpen={isOpen}
        userName="정진범"
        mbti="ENFJ"
        desc=" 대답은 어쩌구 저쩌구 줄글로 위치가 정해져 있는 것이 나중에 구현하기가 편하겠지. 그러니까 대충 왕 길게 이렇게 적으려고 하는데 글자수 최대가 어느정도일까나? 일단 이건 100자 정도"
        question="  애인이 어쩌구 저쩌구의 행동을 했을 때 어쩌구 저쩌구 모시깽? 이것은 50자다 50자"
        handleModal={handleModal}
      />
    </>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding-inline: 1.8rem;
`;

const Content = styled.ul`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  width: 100%;
  height: 84vh;
  max-height: 85vh;
  padding-block: 2rem;
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
