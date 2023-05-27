import styled from "styled-components";

type MessageProps = {
  user: string;
};

interface MessageItemProps {
  userName: string;
  text: string;
  order?: number;
  handleClick?: () => void;
}
const MessageItem = ({
  userName,
  text,
  order,
  handleClick,
}: MessageItemProps) => {
  return (
    <Message user={userName}>
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        <span>{text}</span>
      </div>
    </Message>
  );
};

const Message = styled.li<MessageProps>`
  display: flex;
  flex-direction: ${(props) => (props.user === "1" ? "row-reverse" : "row")};
  width: 100%;
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
export default MessageItem;
