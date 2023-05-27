import Button from "../Common/Button";

import belief1 from '../../assets/belief/belief1.png';
import belief2 from '../../assets/belief/belief2.png';
import belief3 from '../../assets/belief/belief3.png';

import styled from "styled-components";

const CONTENTS = [
  { value: 1, label: <>거의 <strong>맞아요</strong></>, url: belief1 },
  { value: 2, label: <><strong>보통</strong>이에요</>, url: belief2 },
  { value: 3, label: <>많이 <strong>달라요</strong></>, url: belief3 },
];

const Accuracy = ({ accuracy, handleAccuracy }: { accuracy: number, handleAccuracy: (num: number) => void }) => {
  return (
    <StyledAccuracy>
      {
        CONTENTS.map(({ value, label, url }) => {
          return (
            <StyledButton key={value} $clicked={accuracy === value} onClick={() => handleAccuracy(value)}>
              <StyledBelief src={url} alt={`belief${value}`} />
              <div className="pt-1">{label}</div>
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
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const StyledButton = styled(Button) < { $clicked: boolean }> `
  padding: 2rem 8rem;
  font-size: 1.6rem;
  display: flex;
  gap: 1rem;

  border-bottom: 1px solid black;
  &:first-child {
    border-radius: 10px 10px 0 0;
  }
  &:last-child {
    border-bottom: none;
    border-radius: 0 0 10px 10px;
  }

  color: ${({ $clicked }) => $clicked ? "#202124" : "grey"};
  background-color: ${({ $clicked }) => $clicked ? "lightgrey" : "#F3F3F3"};

  :hover {
    color: #202124;
    background-color: lightgrey;
  }
`;

const StyledBelief = styled.img`
  height: 2rem;
`;

export default Accuracy;