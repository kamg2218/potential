import { useNavigate } from "react-router-dom";
import LastChatButton from "../Common/Button/LastChatButton";
import Note from "../Common/Note";
import PreviousButton from "../Common/Button/PreviousButton";

import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
// import { getLocalStorage, getTokenStorage } from "../../utils/storage";
import { getQuestions } from "../../api/request";
import Modal from "../Common/Modal";
import TextArea from "../Common/TextArea/TextArea";

const DUMMY_DATA = [
  {
    id: 1,
    title: "dummy Data",
  },
  {
    id: 2,
    title: "dummy Data",
  },
  {
    id: 3,
    title: "dummy Data",
  },
  {
    id: 4,
    title: "dummy Data",
  },
  {
    id: 5,
    title: "친구랑 싸웠어요 이유는 어쩌구 젂저쩌구 모시껭이랍니다.",
  },
  {
    id: 6,
    title: "dummy Data",
  },
  {
    id: 7,
    title: "dummy Datsdlfkjsdflkdsj sdlkfjsdlkflkjlsdjflkjfskla",
  },
  {
    id: 8,
    title: "dummy Datsdlfkjsdflkdsj sdlkfjsdlkflkjlsdjflkjfskla",
  },
  {
    id: 9,
    title: "dummy Datsdlfkjsdflkdsj sdlkfjsdlkflkjlsdjflkjfskla",
  },
];

// const { token } = getTokenStorage();
// const { mbti } = getLocalStorage();

const Pocket = () => {
  const navigate = useNavigate();
  const handlePage = (path: string) => navigate(path);

  const [text, setText] = useState("");
  const handleTextChange = (value: string) => {
    setText(value);
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => setIsOpen(!isOpen);

  const [notes, setNotes] = useState([]);
  useEffect(() => {
    // getQuestions({ token, data: { mbti } })
    //   .then(({ data }) => { setNotes(data) });
  }, []);

  return (
    <>
      <PreviousButton className="mt-5 ml-5" />
      <div className="px-5 flex flex-col items-center">
        <div className="text-white text-3xl text-center">나의 질문</div>
        <NoteWrapper>
          {notes.length
            ? notes.map(({ title, id }, idx) => {
                return (
                  <Note
                    key={id}
                    id={id}
                    text={title}
                    order={idx % 9}
                    handleClick={handleModal}
                  />
                );
              })
            : DUMMY_DATA.map(({ title, id }, idx) => {
                return (
                  <Note
                    key={id}
                    text={title}
                    id={id}
                    order={idx % 9}
                    handleClick={handleModal}
                  />
                );
              })}
        </NoteWrapper>
        <LastChatButton
          left="나의 질문"
          right="받은 질문"
          clicked="left"
          handleLeftClick={() => handlePage("/pocket")}
          handleRightClick={() => handlePage("/paper")}
        />
      </div>
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
        body={
          <TextArea
            text={text}
            handleChange={handleTextChange}
            backgrounColor="#FFFFFF"
            placeholder="이곳을 눌러 답변을 작성해 주세요!"
          />
        }
      />
    </>
  );
};

const NoteWrapper = styled.div`
  position: relative;
  margin: 2rem 3rem;
  padding: 1rem 0 1rem;

  display: grid;
  gap: 0.3rem;
  grid-template-columns: repeat(3, 1fr);
`;

export default Pocket;
