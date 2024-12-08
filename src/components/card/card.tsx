import card from "../data/project.json";
import { Project } from "../types/index.ts";
import style from "./style.module.css";

const Card = () => {
  return (
    <section>
      <h2>Про всякие мелочи</h2>
      {card.projects.map((proj: Project) => (
        <div key={proj.id} className={style.card}>
          <img src={proj.image} alt="" />
          <h2>{proj.title}</h2>
          <p>{proj.description}</p>
        </div>
      ))}
    </section>
  );
};
export default Card;
