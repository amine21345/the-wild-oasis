import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { logOut, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logOut}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
};

export default Logout;
