import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@tres-global/routes";
import styles from "./Navbar.module.scss";

export const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to={ROUTES.INDEX} className={styles.title}>
        Tres <strong className="ml-1">0011</strong>
      </NavLink>
      <section className={styles.pageSections}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={ROUTES.WORK_EXPERIENCE}
            >
              Work Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={ROUTES.CURRICULUM}
            >
              Curriculum
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={ROUTES.PORTFOLIO}
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};
