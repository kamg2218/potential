import styled from 'styled-components'

const Note = ({ clicked, handleClick }: { clicked: boolean, handleClick?: () => void }) => {
  return (
    <StyledNote $clicked={clicked} onClick={handleClick}>
      note note note
    </StyledNote>
  );
};

const StyledNote = styled.div<{ $clicked: boolean, $rotate?: number }>`
  background-color: ${({ $clicked }) => $clicked ? "#ABABAB" : "white"};
  color: ${({ $clicked }) => $clicked ? "white" : "#ABABAB"};
  /* transform: ${({ $rotate }) => $rotate ? `rotate(${$rotate}deg)` : 'rotate(0)'} */

  width: 10rem;
  padding: 3rem;

  :hover {
    background-color: #ABABAB;
    color: white;
  }
`;

export default Note;