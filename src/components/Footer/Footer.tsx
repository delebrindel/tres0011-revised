import { FC } from "react";
import styles from './Footer.module.scss';

export const Footer: FC = ()=>{
  return <footer className={styles.footer}>
    <strong className="mr-1">2022</strong> Mexico City
  </footer>;
}