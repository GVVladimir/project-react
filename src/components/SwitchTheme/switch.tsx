import { useContext } from "react";
import { ThemeContext } from "../../App";
import style from './style.module.css'

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext);

  const handelClick = () => {
    if (currentTheme?.theme === "dark") {
      currentTheme.setTheme("light");
      currentTheme.setBtnText("хочешь темную");
    } else {
      currentTheme?.setTheme("dark");
      currentTheme.setBtnText("хочешь светлую");
    }
  };
  return (
    <div>
      <button className={style.button} onClick={handelClick}>{currentTheme.btnText}</button>
    </div>
  );
};

export default SwitchTheme;
