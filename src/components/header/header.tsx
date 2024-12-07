import Logo from '../logo/logo'
import Nav from '../Nav/nav';
import style from "./style.module.css"

const Header = () => {
  return <header className={style.head}>
    <Logo />
    <Nav />
  </header>
};
export default Header;
