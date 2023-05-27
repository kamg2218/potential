const KEY = 'potential';

const initial = {
  id: 0,
  name: '',
  mbti: '',
  belief: 1,
  msg: '',
  to: '',
};

export const getLocalStorage = () => {
  const storage = window.localStorage.getItem(KEY);

  if (!storage) return initial;

  const { user } = JSON.parse(storage);
  if (!user || !user.mbti || !user.belief) return initial;
  return user;
};

export const setLocalStorage = (value: {
  mbti: string;
  belief: number;
  msg?: string;
  to?: string;
}) => {
  const { token, user } = getLocalStorage();
  window.localStorage.setItem(
    KEY,
    JSON.stringify({
      token,
      user: { ...user, ...value },
    })
  );
};

export const setTokenStorage = ({
  token,
  user,
}: {
  token: string;
  user: { id: number; name: string };
}) => {
  window.localStorage.setItem(KEY, JSON.stringify({ token, user }));
};

export const getTokenStorage = () => {
  const storage = window.localStorage.getItem(KEY);
  if (!storage) return { token: '', user: {} };

  const { token, user } = JSON.parse(storage);
  return { token, user };
};
