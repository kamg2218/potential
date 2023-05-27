import styled from "styled-components";
import Button from ".";

const LastChatButton = ({ left, right, clicked, handleLeftClick, handleRightClick }
  : { left: string, right: string, clicked?: 'left' | 'right', handleLeftClick?: () => void, handleRightClick?: () => void }) => {
  return (
    <StyledButton>
      <StyledBlock onClick={handleLeftClick} $clicked={clicked === 'left'}>{left}</StyledBlock>
      <StyledBlock onClick={handleRightClick} $clicked={clicked === 'right'}>{right}</StyledBlock>
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
`;

const StyledBlock = styled.div < { $clicked: boolean }> `
  padding: 1rem 5rem;
  font-size: 1.4rem;

  color: ${({ $clicked }) => $clicked ? '#FFCD29' : 'white'};

  &:first-child {
    border-right: 1px solid white;
  }
  &:last-child {
  }
`;

export default LastChatButton;