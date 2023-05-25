import { useState } from 'react';
import { useNavigate } from 'react-router';

import Card from '../Common/Card';
import NextButton from '../Common/Button/NextButton';

const MBTI_LIST = ['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'];

const MyCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/card/belief');
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

  return (
    <div className='grid text-center justify-center gap-4 mt-6'>
      <div className='text-5xl text-white'>나의 MBTI는?</div>
      <div style={{ color: '#7B7B7B' }}>자신의 MBTI를 선택해 주세요</div>
      <Card mbti={mbti} handleMbti={handleMbti} />
      <NextButton text='질문하기' className='my-5' onClick={handleClick} />
    </div>
  );
};

export default MyCard;