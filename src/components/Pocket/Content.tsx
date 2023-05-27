import React from 'react';
import styled from 'styled-components'

const Content = ({ id, name, mbti, belief, content }: { id: number, name: string, mbti: string, belief: number, content: string }) => {

  return (
    <div className="p-3 mx-2 my-5 grid justify-start">
      <div className="flex gap-1 items-center">
        <StyledName>{name}</StyledName>
        <div>name plate</div>
      </div>
      <div className="mt-4">{content}</div>
    </div>
  );
};

const StyledName = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export default Content;