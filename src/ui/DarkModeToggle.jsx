import React from "react";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineSun } from "react-icons/hi";
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
