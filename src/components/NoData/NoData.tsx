import * as React from "react";
import sprite from "../../svgSprite.svg";
import styles from "./NoData.module.css";

const NoData: React.FC = () => (
  <div className={styles.container}>
    <p className={styles.title}>We are waiting for data from you</p>
    <div className={styles.svgContainer}>
      <svg className={styles.svg}>
        <use href={sprite + "#no_data"}></use>
      </svg>
    </div>
  </div>
);

export default NoData;
