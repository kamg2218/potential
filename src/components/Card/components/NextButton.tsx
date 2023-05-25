import Button from "../../Button";

import styled from "styled-components";

const NextButton = ({ text, onClick, className, clicked = false }: { text: string, onClick: React.MouseEventHandler<HTMLButtonElement>, className?: string, clicked?: boolean }) => {
  return (
    <StyledButton $clicked={clicked} onClick={onClick} className={className}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled(Button) < { $clicked: boolean }> `
  padding: 0.6rem 1.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 1px 1px gray;

  border: ${({ $clicked }) => $clicked ? "1px solid black" : "1px solid grey"};
  color: ${({ $clicked }) => $clicked ? "whitesmoke" : "grey"};
  background-color: ${({ $clicked }) => $clicked ? "black" : "whitesmoke"};

  :hover {
  border: 1px solid black;
  color: whitesmoke;
  background-color: black;
}
`;

export default NextButton;