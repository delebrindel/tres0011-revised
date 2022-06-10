import { FC } from "react";
import styles from './Hero.module.scss';

export const Hero: FC = ()=>{
  return <article id='mainHero' className={styles.hero}>
    <p>Tres <strong>0011</strong></p>

  </article>
}