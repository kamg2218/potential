import Button from '../../Button';

import styled from 'styled-components';

const MBTI = () => {
  return (
    <div className="grid justify-items-center">
      <div className="text-zinc-400 mb-4">자신의 MBTI를 선택해주세요</div>
      <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
        <StyledButton $clicked={true}>E</StyledButton>
        <StyledButton $clicked={false}>I</StyledButton>
        <StyledButton $clicked={true}>N</StyledButton>
        <StyledButton $clicked={false}>S</StyledButton>
        <StyledButton $clicked={true}>F</StyledButton>
        <StyledButton $clicked={false}>T</StyledButton>
        <StyledButton $clicked={true}>P</StyledButton>
        <StyledButton $clicked={false}>J</StyledButton>
      </div>
    </div>
  );
};

const StyledButton = styled(Button) < { $clicked: boolean }> `
  padding: 0.4rem 1.2rem;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 1px 1px gray;
  width: 4rem;

  border: ${({ $clicked }) => $clicked ? "1px solid black" : "1px solid grey"};
  color: ${({ $clicked }) => $clicked ? "whitesmoke" : "grey"};
  background-color: ${({ $clicked }) => $clicked ? "black" : "whitesmoke"};

  :hover {
  border: 1px solid black;
  color: whitesmoke;
  background-color: black;
}
`;

export default MBTI;