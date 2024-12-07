import Foto_one from "../../../image/foto1.jpg";
import style from './style.module.css'

const Card = () => {
  return (
    <div className={style.card}>
      <img src={Foto_one} alt="" />
      <h2>Просто информация</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ducimus accusamus dolor ea voluptates ad voluptate tempore nemo magni, adipisci iste placeat error amet odit quo totam provident delectus porro?</p>
    </div>
  );
};
export default Card;
