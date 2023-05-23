export const getLocalStorage = () => {
  return window.localStorage.getItem('potential');
};

export const setLocalStorage = (value: string) => {
  window.localStorage.setItem('potential', value);
};
