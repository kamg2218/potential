import { Outlet } from "react-router-dom";

import PreviousButton from "../components/Common/Button/PreviousButton";

const CardPage = () => {
  return (
    <div>
      <PreviousButton className='ml-6 mt-5' />
      <Outlet />
    </div>
  );
};

export default CardPage;