import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Accuracy from './Accuracy';
import NextButton from '../Common/Button/NextButton';
import PreviousButton from '../Common/Button/PreviousButton';

import styled from 'styled-components';
import { getLocalStorage, getTokenStorage, setLocalStorage } from '../../utils/storage';
import { patchUser } from '../../api/request';

const Belief = () => {
  const navigate = useNavigate();
  const { mbti, belief } = getLocalStorage();
  const { token, user: { id } } = getTokenStorage();

  const handleClick = (value: number) => {
    patchUser({ token, id, data: { mbti, belief: value } });
    setLocalStorage({ mbti, belief: value });
    navigate('/main');
  }
  const handlePreviousClick = () => {
    navigate('/card/mbti');
  }

  const [accuracy, setAccuracy] = useState(belief || 1);
  const handleAccuracy = (num: number) => {
    setAccuracy(num);
  }

  return (
    <>
      <PreviousButton className='ml-6 mt-5' onClick={handlePreviousClick} />
      <div className="grid text-center justify-center gap-2 mt-6">
        <div className="text-2xl text-white">나의 MBTI</div>
        <div className='text-5xl text-white'>얼마나 비슷한가요?</div>
        <div className='flex justify-center my-4 relative'>
          <StyledLine $rotate={-80} $top={'2rem'} $right={'17rem'}>|</StyledLine>
          <StyledLine $rotate={-30} $top={'0.5rem'} $right={'15rem'}>|</StyledLine>
          <StyledText>{mbti}</StyledText>
          <StyledLine $rotate={-30} $top={'8rem'} $left={'14rem'}>|</StyledLine>
          <StyledLine $rotate={-80} $top={'7rem'} $left={'16rem'}>|</StyledLine>
        </div>
        <Accuracy accuracy={accuracy} handleAccuracy={handleAccuracy} />
        <NextButton text='다음으로' className='my-8' onClick={() => handleClick(accuracy)} />
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

const StyledLine = styled.div<{ $rotate: number, $left?: string, $right?: string, $top?: string }>`
  color: transparent;
  width: 4rem;
  height: 6px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;

  transform: ${({ $rotate }) => $rotate ? `rotate(${$rotate}deg)` : 'rotate(0)'};
  left: ${({ $left }) => $left ? $left : 0};
  right: ${({ $right }) => $right ? $right : 0};
  top: ${({ $top }) => $top ? $top : 'unset'};

  text-stroke: 1px #FFCD29;
  -webkit-text-stroke: 1px #FFCD29;
`;

export default Belief;