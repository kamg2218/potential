import request from '.';

//사용 예제 - get
export const getInfo = (param: any) => request({ url: '/info', ...param });

//사용 예제 - post
export const saveInfo = (param: any) =>
  request({
    method: 'post',
    url: `/info/${param.target}`,
    data: {
      ...param,
    },
  });

export const kakaoLogin = (param: any) =>
  request({
    method: 'post',
    url: 'https://5224-175-192-26-222.ngrok-free.app/login/kakao',
    data: {},
    ...param,
  });
