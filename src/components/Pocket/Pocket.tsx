/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useNavigate } from "react-router-dom";
import LastChatButton from "../Common/Button/LastChatButton";
import Note from "../Common/Note";
import PreviousButton from "../Common/Button/PreviousButton";

import styled from "styled-components";
import { useEffect, useState } from "react";
// import { getLocalStorage } from "../../utils/storage";
import { getMessage, getMyQeustions, getQuestions } from "../../api/request";
import { getLocalStorage } from "../../utils/storage";

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

const Pocket = () => {
  const { user: { id, mbti }, token } = getLocalStorage();
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const handleNoteClick = (idx: number) => {
    navigate(`/pocket/details/${idx}`);
  };

  const handlePage = (path: string) => navigate(path);

  useEffect(() => {
    if (!id) return;

    //@ts-ignore
    getMyQeustions({ token, id, data: {} }).then(res => setNotes(res));
  }, []);

  return (
    <>
      <PreviousButton className="mt-5 ml-5" onClick={() => navigate('/main')} />
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
                  handleClick={handleNoteClick}
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
                  handleClick={handleNoteClick}
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
