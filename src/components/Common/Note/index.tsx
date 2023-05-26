import styled from 'styled-components'

const Note = ({ clicked, handleClick }: { clicked: boolean, handleClick?: () => void }) => {
  return (
    <StyledNote $clicked={clicked} onClick={handleClick}>
      note note note
    </StyledNote>
  );
};

const StyledNote = styled.div<{ $clicked: boolean }>`
  background-color: ${({ $clicked }) => $clicked ? "#ABABAB" : "white"};
  width: 10rem;
  padding: 3rem;

  :hover {
    background-color: #ABABAB;
  }
`;

export default Note;