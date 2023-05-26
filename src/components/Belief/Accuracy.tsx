import Button from "../Common/Button";

import styled from "styled-components";

const CONTENTS = [
  { value: 1, label: '거의 맞아요' },
  { value: 2, label: '보통이에요' },
  { value: 3, label: '많이 달라요' },
]

const Accuracy = ({ accuracy, handleAccuracy }: { accuracy: number, handleAccuracy: (num: number) => void }) => {
  return (
    <StyledAccuracy>
      {
        CONTENTS.map(({ value, label }) => {
          return (
            <StyledButton key={value} $clicked={accuracy === value} key={value} onClick={() => handleAccuracy(value)}>
              {label}
            </StyledButton>
          )
        })
      }
    </StyledAccuracy>
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

export default Accuracy;