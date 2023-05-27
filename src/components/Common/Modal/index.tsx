import styled from "styled-components";
import Button from "../Button";
import { ReactNode } from "react";
import NamePlate from "../NamePlate";
import { PaperAirplaneIcon } from "@heroicons/react/outline";

interface ModalProps {
  handleModal: () => void;
  isOpen: boolean;
  userName: string;
  mbti: string;
  question: string;
  desc: string;
  content?: ReactNode;
  handleClick?: () => void;
}

const Modal = ({
  handleModal,
  handleClick,
  isOpen,
  userName,
  mbti,
  question,
  desc,
  content,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalBackdrop onClick={handleModal}>
            {/* //event 버블링을 막는 메소드 */}
            <ModalView onClick={(e) => e.stopPropagation()}>
              <ExitButton onClick={handleModal}>X</ExitButton>
              <Container>
                <TitleWrapper>
                  <Title>{userName}</Title>
                  <NamePlate mbti={mbti} mbtiPercent="123" useToTalk />
                </TitleWrapper>

                <TextContainer>
                  <div className="question">{question}</div>
                  {content ? content : <div className="desc">{desc}</div>}
                </TextContainer>
              </Container>
              {content && (
                <SendButon onClick={handleClick}>
                  <PaperAirplaneIcon stroke="black" strokeWidth={1} />
                </SendButon>
              )}
            </ModalView>
          </ModalBackdrop>
        </ModalContainer>
      )}
    </>
  );
};

const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 1; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalBtn = styled(Button)`
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: #000000;
  font-weight: bold;
  border-radius: 1rem;
  background-color: transparent;
`;

const ExitButton = styled(ModalBtn)`
  padding: 1.5rem 1.5rem 0rem 0rem;
`;

const SendButon = styled(ModalBtn)`
  padding: 0rem 1.5rem 1.5rem 0rem;
  width: 3rem;
  background-color: transparent;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  height: 1.3rem;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: center;
`;

const Title = styled.span`
  margin-right: 0.5rem;
  font-size: 1.4rem;
  font-weight: bold;
`;

const TextContainer = styled.div`
  padding: 2rem;
  line-height: 23px;
  .question {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    padding-block-end: 2.5rem;
    border-bottom: 1px solid black;
  }
  .desc {
    width: 100%;
    font-size: 1.4rem;
    padding-block: 2.5rem 2rem;
    color: var(--coz-purple-600);
  }
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  border: 2px solid #000000;
  margin-top: 20rem;
  color: #000000;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 1rem;
  width: 25%;
  background-color: #ffffff;
`;

export default Modal;
