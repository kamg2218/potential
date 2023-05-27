import request from '.';

// 로그인
export const postLogin = ({ token }: { token: string }) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    method: 'post',
    url: '/kakao/login',
  });

// 사용자 정보
export const getUser = ({
  token,
  id,
  data,
}: {
  token: string;
  id: number;
  data: any;
}) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    url: `/users/${id}`,
    ...data,
  });

// 사용자 등록
export const patchUser = ({
  token,
  id,
  data,
}: {
  token: string;
  id: number;
  data: any;
}) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    method: 'patch',
    url: `/users/${id}`,
    data: { ...data },
  });

// 받은 질문들
export const getQuestions = ({ token, data }: { token: string; data: any }) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    url: !data.question ? '/questions' : `/questions/${data.question}`,
    ...data,
  });

// 질문하기
export const postQuestions = ({ token, data }: { token: string; data: any }) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    method: 'post',
    url: '/questions',
    data: { ...data },
  });
