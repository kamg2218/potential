import Button from "../../Button";

import styled from "styled-components";

const CONTENTS = [
  { value: 'almost', label: '거의 맞아요' },
  { value: 'normal', label: '보통이에요' },
  { value: 'different', label: '많이 달라요' },
]

const Accuracy = ({ accuracy, handleAccuracy }: { accuracy: string, handleAccuracy: (num: string) => void }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {
        CONTENTS.map(({ value, label }) => {
          return (
            <StyledButton $clicked={accuracy === label} key={value} onClick={() => handleAccuracy(label)}>{label}</StyledButton>
          )
        })
      }
    </div>
  );
};

const StyledButton = styled(Button) < { $clicked: boolean }> `
  padding: 0.6rem 1.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 1px 1px gray;

  border: ${({ $clicked }) => $clicked ? "1px solid black" : "1px solid grey"};
  color: ${({ $clicked }) => $clicked ? "whitesmoke" : "grey"};
  background-color: ${({ $clicked }) => $clicked ? "black" : "whitesmoke"};

  :hover {
  border: 1px solid black;
  color: whitesmoke;
  background-color: black;
}
`;

export default Accuracy;