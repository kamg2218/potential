import styled from 'styled-components';

import note1 from '../../../assets/notes/note1.png';
import note2 from '../../../assets/notes/note2.png';
import note3 from '../../../assets/notes/note3.png';
import note4 from '../../../assets/notes/note4.png';
import note5 from '../../../assets/notes/note5.png';
import note6 from '../../../assets/notes/note6.png';
import note7 from '../../../assets/notes/note7.png';

const NOTE_CONFIG = [
  {
    rotate: -10,
    left: '10px',
    top: '5px',
    url: note2,
  },
  {
    rotate: 20,
    left: '',
    top: '30px',
    url: note3,
  },
  {
    rotate: -5,
    left: '',
    top: '15px',
    url: note5,
  },
  {
    rotate: -3,
    left: '5px',
    top: '-10px',
    url: note7,
  },
  {
    rotate: -1,
    left: '-4px',
    top: '16px',
    url: note2,
  },
  {
    rotate: 10,
    left: '-10px',
    top: '3px',
    url: note4,
  },
  {
    rotate: -5,
    left: '8px',
    top: '-5px',
    zIndex: 0,
    url: note3,
  },
  {
    rotate: -6,
    top: '20px',
    url: note1,
  },
  {
    rotate: 3,
    left: '-6px',
    url: note6,
  },
]

const Note = ({ handleClick, text, id, order }: { handleClick?: (id: number) => void, text: string, id: number, order?: number }) => {
  const { rotate, zIndex, left, top, url } = NOTE_CONFIG[order || 0];

  const handleNoteClick = () => {
    if (handleClick) handleClick(id);
  }

  return (
    <StyledNote $rotate={rotate} $zIndex={zIndex} $left={left} $top={top} $url={url} onClick={handleNoteClick} >
      {text}
    </StyledNote>
  );
};

const StyledNote = styled.div<{ $rotate?: number, $zIndex?: number, $left?: string, $top?: string, $url?: string }>`
  color: black;
  text-align: center;
  text-overflow: ellipsis;
  white-space: wrap;
  overflow: hidden;

  width: 10rem;
  height: 13rem;
  padding: 3rem 0.5rem 1rem;
  font-size: 1.4rem;

  position: relative;
  transform: ${({ $rotate }) => $rotate ? `rotate(${$rotate}deg)` : 'rotate(0)'};
  z-index: ${({ $zIndex }) => $zIndex ? $zIndex : 'auto'};
  left: ${({ $left }) => $left ? $left : 'auto'};
  top: ${({ $top }) => $top ? $top : 'auto'};
  background-image: ${({ $url }) => $url ? `url(${$url})` : `url(${note1})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export default Note;