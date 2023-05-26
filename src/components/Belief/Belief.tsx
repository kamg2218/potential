import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Accuracy from './Accuracy';
import NextButton from '../Common/Button/NextButton';
import PreviousButton from '../Common/Button/PreviousButton';

import styled from 'styled-components';
import { getLocalStorage, getTokenStorage, setLocalStorage } from '../../utils/storage';
import { postUser } from '../../api/request';

const Belief = () => {
  const navigate = useNavigate();
  const { mbti, belief } = getLocalStorage();
  const { token, user: { id } } = getTokenStorage();

  const handleClick = () => {
    postUser({ token, id, data: { mbti, belief } });
    setLocalStorage({ mbti, belief: String(accuracy) });
    navigate('/main');
  }
  const handlePreviousClick = () => {
    navigate('/card/mbti');
  }

  const [accuracy, setAccuracy] = useState(Number(belief) || 1);
  const handleAccuracy = (num: number) => {
    setAccuracy(num);
  }

  return (
    <>
      <PreviousButton className='ml-6 mt-5' onClick={handlePreviousClick} />
      <div className="grid text-center justify-center gap-2 mt-6">
        <div className="text-2xl text-white">나의 MBTI</div>
        <div className='text-5xl text-white'>얼마나 비슷한가요?</div>
        <div className='flex justify-center my-4'>
          <StyledLine $rotate={-20} $left={''}>|</StyledLine>
          <StyledLine $rotate={20} >|</StyledLine>
          <StyledText>{mbti}</StyledText>
        </div>
        <Accuracy accuracy={accuracy} handleAccuracy={handleAccuracy} />
        <NextButton text='다음으로' className='my-8' onClick={handleClick} />
      </div >
    </>
  );
};

const StyledText = styled.div`
  color: transparent;
  font-size: 7rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  text-stroke: 1px #FFCD29;
  -webkit-text-stroke: 1px #FFCD29;
`;

const StyledLine = styled.div<{ $rotate: number, $left?: string, $right?: string }>`
  color: transparent;
  width: 4rem;
  height: 6px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;

  transform: ${({ $rotate }) => $rotate ? `rotate(${$rotate}deg)` : 'rotate(0)'};
  left: ${({ $left }) => $left ? $left : 0};
  right: ${({ $right }) => $right ? $right : 0};


  text-stroke: 1px #FFCD29;
  -webkit-text-stroke: 1px #FFCD29;
`;

export default Belief;