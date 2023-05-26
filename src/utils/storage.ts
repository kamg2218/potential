const initial = {
  id: '',
  name: '',
  mbti: '',
  belief: '0',
  msg: '',
  to: '',
};

export const getLocalStorage = () => {
  const storage = window.localStorage.getItem('potential');

  if (!storage) return initial;

  const { user } = JSON.parse(storage);
  if (!user || !user.mbti || !user.belief) return initial;
  return user;
};

export const setLocalStorage = (value: {
  mbti: string;
  belief: string;
  msg?: string;
  to?: string;
}) => {
  const { token, user } = getLocalStorage();
  window.localStorage.setItem(
    'potential',
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
  user: { id: string; name: string };
}) => {
  window.localStorage.setItem('potential', JSON.stringify({ token, user }));
};
