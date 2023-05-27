import Button from ".";

import { ArrowRightIcon } from "@heroicons/react/outline";
import styled from "styled-components";

interface NextButton {
  text: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
const NextButton = ({
  text,
  className,
  onClick,
  disabled = false,
}: NextButton) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} className={className}>
      {text}
      <StyledIcon stroke="white" strokeWidth="2" />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  background-color: transparent;
  color: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const StyledIcon = styled(ArrowRightIcon)`
  width: 1.6rem;
`;

export default NextButton;
