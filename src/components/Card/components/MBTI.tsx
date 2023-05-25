import Button from '../../Button';

import styled from 'styled-components';

const MBTI_LIST = ['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'];
const ROTATE = [-4, 15, 6, -1, 20, -10, -5, 6];

const MBTI = ({ mbti, handleMbti }: { mbti: Array<string>, handleMbti: (str: string) => void }) => {
  const handleClick = (str: string) => { handleMbti(str) }

  return (
    <div className="grid grid-cols-2 gap-4 ml-2 justify-items-center items-center">
      {
        MBTI_LIST.map((value, idx) => {
          const key = Math.floor(idx / 2);
          const isClicked = mbti[key] === value;
          return (
            <StyledButton key={idx} $clicked={isClicked} $deg={ROTATE[idx]} onClick={() => handleClick(value)}>{value}</StyledButton>
          )
        })
      }
    </div>
  );
};

const StyledButton = styled(Button) < { $clicked: boolean, $deg: number }> `
  padding: 0.4rem 1.2rem;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: bold;
  box-shadow: 1px 1px gray;
  width: 4rem;

  border: ${({ $clicked }) => $clicked ? "1px solid black" : "1px solid grey"};
  color: ${({ $clicked }) => $clicked ? "whitesmoke" : "grey"};
  background-color: ${({ $clicked }) => $clicked ? "black" : "whitesmoke"};
  transform: ${({ $deg }) => $deg ? `rotate(${$deg}deg)` : 'rotate(0)'};

  :hover {
  border: 1px solid black;
  color: whitesmoke;
  background-color: black;
}
`;

export default MBTI;