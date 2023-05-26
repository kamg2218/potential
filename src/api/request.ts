import request from '.';

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
  request({ headers: { Authorization: token }, url: `/users/${id}`, ...data });

// 사용자 등록
export const postUser = ({
  token,
  id,
  data,
}: {
  token: string;
  id: number;
  data: any;
}) =>
  request({
    headers: { Authorization: token },
    method: 'post',
    url: `/users/${id}`,
    data: { ...data },
  });

// 받은 질문들
export const getQuestions = ({ token, data }: { token: string; data: any }) => {
  request({ headers: { Authorization: token }, url: '/questions', ...data });
};

// 질문하기
export const postQuestions = ({ token, data }: { token: string; data: any }) =>
  request({
    headers: { Authorization: token },
    method: 'post',
    url: '/questions',
    data: { ...data },
  });
