import * as React from "react";
import { checkValue } from "../../helpers/functionHelpers";
import styles from "./CreditCardData.module.css";

interface CreditCardDataProps {
  title: string;
  value: number;
}

const CreditCardData: React.FC<CreditCardDataProps> = ({
  title,
  value,
}) => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.value}>{checkValue(value)} &#8372;</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCardData;
