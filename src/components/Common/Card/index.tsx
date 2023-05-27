import Button from '../Button';

import styled from 'styled-components';

const MBTI_LIST = ['I', 'E', 'S', 'N', 'T', 'F', 'P', 'J'];
const MBTI_LABEL = ['내향형', '외향형', '감각형', '직관형', '사고형', '감정형', '인식형', '판단형']
const ROTATE = [-4, 15, 6, -1, 20, -10, -5, 6];

const Card = ({ mbti, handleMbti }: { mbti: Array<string>, handleMbti: (str: string) => void }) => {
  const handleClick = (str: string) => { handleMbti(str) }

  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center items-center">
      {
        MBTI_LIST.map((value, idx) => {
          const key = Math.floor(idx / 2);
          const isClicked = mbti[key] === value;
          return (
            <StyledButton key={idx} $clicked={isClicked} $deg={ROTATE[idx]} $zIndex={1} onClick={() => handleClick(value)}>
              <StyledWord>{value}</StyledWord>
              <StyledLabel>{MBTI_LABEL[idx]}</StyledLabel>
            </StyledButton>
          )
        })
      }
    </div>
  );
};

const StyledButton = styled(Button) < { $clicked: boolean, $deg: number, $zIndex: number }> `
  padding: 1.8rem 3rem;
  border-radius: 8px;
  box-shadow: 1px 1px gray;

  background-color: ${({ $clicked }) => $clicked ? "#FFCD29" : "white"};
  transform: ${({ $deg }) => $deg ? `rotate(${$deg}deg)` : 'rotate(0)'};
  /* z-index: ${({ $zIndex }) => $zIndex ? `${$zIndex}` : ''}; */

  :hover {
    background-color: #FFCD29;
  }
`;

const StyledWord = styled.div`
  color: black;
  font-size: 4rem;
  font-weight: bold;

`;

const StyledLabel = styled.div`
  color: black;
  font-size: 1rem;
`;

export default Card;