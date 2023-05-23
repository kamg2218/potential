import Button from "../../Button";

import styled from "styled-components";

const Accuracy = () => {
  return (
    <div className="grid justify-items-center">
      <div className="text-zinc-400 mb-4">얼마나 비슷한가요</div>
      <div className="flex flex-col gap-5">
        <StyledButton $clicked={false}>거의 맞아요</StyledButton>
        <StyledButton $clicked={false}>보통이에요</StyledButton>
        <StyledButton $clicked={true}>많이 달라요</StyledButton>
      </div>
    </div>
  );
};

const StyledButton = styled(Button) < { $clicked: boolean }> `
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
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