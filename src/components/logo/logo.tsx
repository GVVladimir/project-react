import Logo_img from '../../../image/logo.png'
import style from './style.module.css'

const Logo = () => {
    return (
        <div className={style.logo}>
            <img src={Logo_img}/>
            <span>Чье то фото</span>
        </div>
    )
 };
export default Logo;
