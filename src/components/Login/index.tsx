import { getLocalStorage } from "../utils";

const Login = () => {
  const store = getLocalStorage();

  // if (!store) setLocalStorage('popopo');
  return (
    <div className="w-100 h-100">
      <div className="p-3 w-32 text-center text-lg hover:text-sky-100">{store || '없어요'}</div>
    </div>
  );
};

export default Login;