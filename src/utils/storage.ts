const KEY = 'potential';

interface STORAGE {
  id: number;
  name: string;
  mbti: string | null;
  belief: number | null;
  msg: string | null;
  to: string | null;
}

const initial = {
  id: 1,
  name: '',
  mbti: null,
  belief: null,
  msg: null,
  to: null,
};

export const getLocalStorage = () => {
  const storage = window.localStorage.getItem(KEY);

  if (!storage) return { user: initial, token: '' };

  const { user, token }: { user: STORAGE; token: string } = JSON.parse(storage);
  return { user, token: token };
};

export const setLocalStorage = (value: {
  mbti: string | null;
  belief: number | null;
  msg?: string | null;
  to?: string | null;
}) => {
  const { user, token } = getLocalStorage();

  // console.log(value, user, { ...user, ...value });
  window.localStorage.setItem(
    KEY,
    JSON.stringify({
      token: token,
      user: { ...user, ...value },
    })
  );
};

export const setTokenStorage = ({
  token,
  user: { id, name },
}: {
  token: string;
  user: { id: number; name: string | null };
}) => {
  window.localStorage.setItem(
    KEY,
    JSON.stringify({ token: token, user: { id, name } })
  );
};

export const getTokenStorage = () => {
  const storage = window.localStorage.getItem(KEY);
  if (!storage) return { token: '', user: initial };

  const { token } = JSON.parse(storage);
  return token;
};
