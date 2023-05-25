import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Accuracy from './components/Accuracy';
import MBTI from './components/MBTI';
import NextButton from './components/NextButton';

import styled from 'styled-components';

const MBTI_LIST = ['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'];

const Card = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/main');
  }

  const [mbti, setMbti] = useState(['E', 'S', 'F', 'J']);
  const handleMbti = (str: string) => {
    const idx = MBTI_LIST.findIndex(lst => lst === str);
    if (idx !== -1) {
      const lst = mbti.slice();
      lst[Math.floor(idx / 2)] = str;

      setMbti(lst);
    }
  }

  const [accuracy, setAccuracy] = useState('보통이에요');
  const handleAccuracy = (str: string) => {
    setAccuracy(str);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 py-5">
      <div className="text-5xl text-zinc-700">{mbti.join('')}</div>
      <StyledCard>
        <div className="text-3xl mb-5">나의 MBTI는</div>
        <div className="flex justify-around mt-3">
          <div className="text-zinc-400 mb-4">자신의 MBTI를 선택해주세요</div>
          <div className="text-zinc-400 mb-4 pr-3">얼마나 비슷한가요</div>
        </div>
        <div className="flex justify-around my-2">
          <MBTI mbti={mbti} handleMbti={handleMbti} />
          <Accuracy accuracy={accuracy} handleAccuracy={handleAccuracy} />
        </div>
        <NextButton text={'NEXT'} onClick={handleClick} className='mt-5 mx-5' />
      </StyledCard>
    </div>
  );
};

const StyledCard = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  border: 1px solid gray;
  width: 80%;
  border-radius: 12px;
  padding: 1rem;
`;

export default Card;