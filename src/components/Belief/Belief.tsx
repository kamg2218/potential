import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Accuracy from './Accuracy';
import NextButton from '../Common/Button/NextButton';
import PreviousButton from '../Common/Button/PreviousButton';

import styled from 'styled-components';

const Belief = ({ mbti = 'ENFP' }: { mbti?: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  }
  const handlePreviousClick = () => {
    navigate('/card/mbti');
  }

  const [accuracy, setAccuracy] = useState(1);
  const handleAccuracy = (num: number) => {
    setAccuracy(num);
  }

  return (
    <>
      <PreviousButton className='ml-6 mt-5' onClick={handlePreviousClick} />
      <div className="grid text-center justify-center gap-2 mt-6">
        <div className="text-2xl text-white">나의 MBTI</div>
        <div className='text-4xl text-white'>얼마나 비슷한가요?</div>
        <StyledText>{mbti}</StyledText>
        <Accuracy accuracy={accuracy} handleAccuracy={handleAccuracy} />
        <NextButton text='질문하기' className='my-8' onClick={handleClick} />
      </div>
    </>
  );
};

const StyledText = styled.div`
  color: white;
  font-size: 60px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export default Belief;