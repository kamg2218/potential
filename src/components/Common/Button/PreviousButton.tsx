import React from 'react';
import { useNavigate } from 'react-router';

import Button from '.';

import { ArrowSmLeftIcon } from '@heroicons/react/outline';
import styled from 'styled-components';

const PreviousButton = ({ className, onClick }: { className?: string, onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!onClick) {
      navigate(-1);
      return;
    }
    onClick(event);
  }

  return (
    <StyledButton className={className} onClick={handleClick}>
      <ArrowSmLeftIcon stroke='white' strokeWidth={1} />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 3rem;
  background-color: transparent;
`;

export default PreviousButton;