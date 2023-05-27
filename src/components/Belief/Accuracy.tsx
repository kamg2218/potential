import Button from "../Common/Button";

import belief1 from '../../assets/belief/belief1.png';
import belief2 from '../../assets/belief/belief2.png';
import belief3 from '../../assets/belief/belief3.png';

import styled from "styled-components";

const CONTENTS = [
  { value: 1, label: '거의 맞아요', url: belief1 },
  { value: 2, label: '보통이에요', url: belief2 },
  { value: 3, label: '많이 달라요', url: belief3 },
]

const Accuracy = ({ accuracy, handleAccuracy }: { accuracy: number, handleAccuracy: (num: number) => void }) => {
  return (
    <StyledAccuracy>
      {
        CONTENTS.map(({ value, label, url }) => {
          return (
            <StyledButton key={value} $clicked={accuracy === value} onClick={() => handleAccuracy(value)}>
              <StyledBelief src={url} alt={label} />
              <p className="pt-1">{label}</p>
            </StyledButton>
          )
        })
      }
    </StyledAccuracy >
  );
};

const StyledAccuracy = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button) < { $clicked: boolean }> `
  padding: 2rem 8rem;
  font-size: 1.6rem;
  display: flex;
  gap: 1rem;

  border-bottom: 1px solid black;
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  &:last-child {
    border-bottom: none;
    border-radius: 0 0 8px 8px;
  }

  color: ${({ $clicked }) => $clicked ? "#202124" : "grey"};
  background-color: ${({ $clicked }) => $clicked ? "#FFCD29" : "whitesmoke"};

  :hover {
    color: #202124;
    background-color: #FFCD29;
  }
`;

const StyledBelief = styled.img`
  height: 2rem;
`;

export default Accuracy;