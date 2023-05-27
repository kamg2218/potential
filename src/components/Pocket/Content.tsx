import React from "react";
import styled from "styled-components";
import NamePlate from "../Common/NamePlate";

interface ContentProps {
  id: number;
  name: string;
  mbti: string;
  belief: number;
  content: string;
  handleClick: () => void;
}
const Content = ({
  id,
  name,
  mbti,
  belief,
  content,
  handleClick,
}: ContentProps) => {
  return (
    <div className="p-3 grid">
      <Wrapper className="flex gap-2 items-center">
        <StyledName>{name}</StyledName>
        <StyledNamePlate
          mbti={mbti}
          belief={belief}
          useToTalk
          handleClick={handleClick}
        />
      </Wrapper>
      <div className=" leading-9">{content}</div>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-block: 2rem;
`;
const StyledNamePlate = styled(NamePlate)``;
const StyledName = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

export default Content;
