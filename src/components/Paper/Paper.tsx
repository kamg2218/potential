/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from "react-router-dom";
import Note from "../Common/Note";
import LastChatButton from "../Common/Button/LastChatButton";
import PreviousButton from "../Common/Button/PreviousButton";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLocalStorage, getTokenStorage } from "../../utils/storage";
import { getQuestions, postAnswers, postQuestions } from "../../api/request";
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

const { user: { mbti }, token } = getLocalStorage();

const Paper = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setText('');
    setIsOpen(!isOpen);
  };

  const [details, setDetails] = useState({
    id: 1,
    mbti: 'ENFP',
    title: "  애인이 어쩌구 저쩌구의 행동을 했을 때 어쩌구 저쩌구 모시깽 ?이것은 50자다 50자",
    content: 'sdlkfsldkfjvsldkfjsd sdflsdkfjsdlkfj sdfkl',
    user: {
      id: 11,
      name: '정진범',
      mbti: "INTP",
      belief: 1
    },
  });

  const [notes, setNotes] = useState([]);
  const handleNoteClick = (id: number) => {
    getQuestions({ token, data: { question: id } }).then((res) => {
      // @ts-ignore
      setDetails(res);
      // setIsOpen(!isOpen);
    });
    setIsOpen(!isOpen);
  };

  const [text, setText] = useState("");
  const handleTextChange = (value: string) => {
    setText(value);
  };

  const handleMessageSend = (question: number, msg: string) => {
    postAnswers({ token, question, data: { content: msg } })

    setText('');
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // if (!token) navigate('/');
    // if (!mbti) navigate('/card');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    getQuestions({ token, data: { mbti } }).then((data) => setNotes(data));
  }, []);

  return (
    <>
      <PreviousButton className="mt-5 ml-5" onClick={() => navigate('/main')} />
      <div className="px-5 flex flex-col items-center">
        <div className="text-white text-3xl text-center">지난 질문들</div>
        <NoteWrapper>
          {notes.length
            ? notes.map(({ title, id }, idx) => {
              return (
                <Note
                  key={id}
                  id={id}
                  text={title}
                  order={idx % 9}
                  handleClick={() => handleNoteClick(id)}
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
                  handleClick={() => handleNoteClick(id)}
                />
              );
            })}
        </NoteWrapper>
        <LastChatButton
          left="나의 질문"
          right="받은 질문"
          clicked="right"
          handleLeftClick={() => navigate("/pocket")}
          handleRightClick={() => navigate("/paper")}
        />
      </div>

      <Modal
        handleModal={handleModal}
        isOpen={isOpen}
        userName={details.user.name || "정진범"}
        mbti={details.user.mbti}
        question={details.title}
        desc={details.content}
        handleClick={() => handleMessageSend(details.id, text)}
        content={
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

export default Paper;
