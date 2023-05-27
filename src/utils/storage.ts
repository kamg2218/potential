const KEY = 'potential';

interface SOTRAGE {
  id: number;
  name: string;
  mbti: string | null;
  belief: number | null;
  msg?: string;
  to?: string;
}

const initial = {
  id: 0,
  name: '',
  mbti: 'ENFP',
  belief: 1,
  msg: '',
  to: '',
};

export const getLocalStorage = () => {
  const storage = window.localStorage.getItem(KEY);

  if (!storage) return { user: initial, token: '' };

  const { user, token }: { user: SOTRAGE; token: string } = JSON.parse(storage);
  if (!user || !user.mbti || !user.belief) return { user: initial, token: '' };
  return { user, token };
};

export const setLocalStorage = (value: {
  mbti: string | null;
  belief: number | null;
  msg?: string;
  to?: string;
}) => {
  const { user, token } = getLocalStorage();
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
  if (!storage) return { token: '', user: initial };

  const { token } = JSON.parse(storage);
  return token;
};
