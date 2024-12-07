import SwitchTheme from "../SwitchTheme/switch";
import style from "./style.module.css";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <a>Home</a>
      <a>Portfolio</a>
      <a>Services</a>
      <a>Aboute me</a>
      <SwitchTheme />
    </nav>
  );
};
export default Nav;
