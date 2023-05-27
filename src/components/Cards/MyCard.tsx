import { useState } from 'react';
import { useNavigate } from 'react-router';

import Card from '../Common/Card';
import NextButton from '../Common/Button/NextButton';
import PreviousButton from '../Common/Button/PreviousButton';
import { getLocalStorage, setLocalStorage } from '../../utils/storage';

const MBTI_LIST = ['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'];
const MBTI_INITIAL = ['E', 'S', 'F', 'J'];

const MyCard = () => {
  const navigate = useNavigate();

  const { user: { mbti: localMbti } } = getLocalStorage();
  const [mbti, setMbti] = useState(localMbti ? localMbti.split('') : MBTI_INITIAL);

  const handleClick = (value: string) => {
    setLocalStorage({ mbti: value, belief: null });
    navigate('/card/belief');
  }
  const handlePreviousClick = () => {
    navigate('/login');
  }

  const handleMbti = (str: string) => {
    const idx = MBTI_LIST.findIndex(lst => lst === str);
    if (idx !== -1) {
      const lst = mbti.slice();
      lst[Math.floor(idx / 2)] = str;

      setMbti(lst);
    }
  }

  return (
    <>
      <PreviousButton className='ml-6 mt-5' onClick={handlePreviousClick} />
      <div className='grid text-center justify-center gap-4 mt-6'>
        <div className='text-5xl text-white'>나의 MBTI는?</div>
        <div className='mb-4' style={{ color: '#7B7B7B' }}>자신의 MBTI를 선택해 주세요</div>
        <Card mbti={mbti} handleMbti={handleMbti} />
        <NextButton text='다음으로' className='my-5' onClick={() => handleClick(mbti.join(''))} />
      </div>
    </>
  );
};

export default MyCard;