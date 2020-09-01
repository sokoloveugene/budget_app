import * as React from "react";
import { Link } from "react-router-dom";
import SwitchBtn from "../../components/SwitchBtn/SwitchBtn";
import styles from "./MenuPage.module.css";

interface MenuPageProps {}
const MenuPage: React.FC<MenuPageProps> = () => (
  <div className={styles.container}>
    <ul className={styles.menuContainer}>
      <li className={styles.listItem} >
        <Link className={styles.menuItem} to="/stats">statistics</Link>
      </li>
      <li  className={styles.listItem}>
        <Link className={styles.menuItem} to="/change_balance">change balance</Link>
      </li>
      <li  className={styles.listItem}>
        <Link className={styles.menuItem} to="/all_incomes">all incomes</Link>
      </li>
      <li  className={styles.listItem}>
        <Link className={styles.menuItem} to="/all_expenses">all expences</Link>
      </li>
    </ul>
    <SwitchBtn />
  </div>
);

export default MenuPage;
