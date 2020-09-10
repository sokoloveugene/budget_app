import * as React from "react";
import { checkValue } from "../../helpers/functionHelpers";
import styles from "./CreditCardData.module.css";
import sprite from "../../svgSprite.svg";

interface CreditCardDataProps {
  title: string;
  value: number;
}

const CreditCardData: React.FC<CreditCardDataProps> = ({ title, value }) => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.value}>{checkValue(value)} &#8372;</p>
          </div>
          <svg className={styles.svg}>
            <use href={sprite + "#mastercard"}></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CreditCardData;
