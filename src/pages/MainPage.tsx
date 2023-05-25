import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { kakaoLogin } from '../api/request'

const URL = 'https://5224-175-192-26-222.ngrok-free.app/login/kakao';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('code'))

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      kakaoLogin({ code: URL }).then((res: any) => console.log(res));
    }
  }, [searchParams]);

  return (
    <div>
      {searchParams.get('code')}
    </div>
  );
};

export default MainPage;