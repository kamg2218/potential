import request from '.';

// 로그인
export const postLogin = ({ token }: { token: string }) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    method: 'post',
    url: '/login/kakao',
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
    metho: 'options',
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

// 사용자 - 나의 질문 조회
export const getMyQeustions = ({
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
    url: !data.question
      ? `/user/${id}/questions`
      : `/user/${id}/questions/${data.question}`,
    ...data,
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

// 답변하기
export const postAnswers = ({
  token,
  question,
  data,
}: {
  token: string;
  question: number;
  data: any;
}) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    method: 'post',
    url: `/questions/${question}/answers`,
    data: { ...data },
  });

//채팅방 목록 조회
export const getHistory = ({
  token,
  user,
  data,
}: {
  token: string;
  user: number;
  data: any;
}) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    url: `/users/${user}/chats`,
    ...data,
  });

// 채팅방 내용 조회
export const getMessage = ({
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
    url: `/chats/${id}`,
    ...data,
  });

// 채팅 보내기
export const postSendChat = ({
  token,
  chat,
  data,
}: {
  token: string;
  chat: number;
  data: any;
}) =>
  request({
    headers: { Authorization: `Bearer ${token}` },
    url: `/chats/${chat}/send`,
    data: { ...data },
  });
