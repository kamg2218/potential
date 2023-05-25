import Button from "../Button";

import { ArrowRightIcon } from '@heroicons/react/outline';
import styled from "styled-components";

const NextButton = ({ text, className, onClick }: { text: string, className?: string, onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {text}
      <StyledIcon stroke="white" strokeWidth='2' />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  background-color: transparent;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledIcon = styled(ArrowRightIcon)`
  width: 1.2rem;
`;

export default NextButton;