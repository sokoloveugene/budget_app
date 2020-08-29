import * as React from "react";
import { checkValue } from "../../helpers/functionHelpers";
import styles from "./ShowData.module.css";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface ShowDataProps extends RouteComponentProps {
  title: string;
  value: number;
  redirectLink?: string;
}

const ShowData: React.FC<ShowDataProps> = ({
  title,
  value,
  history,
  redirectLink,
}) => {
  const openChangeBalancePage = (event: React.MouseEvent<SVGElement>): void => {
    history.push(`${redirectLink}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.title}>{title}</p>
        {redirectLink && (
          <svg
            onClick={openChangeBalancePage}
            className={styles.icon}
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 32 32"
            version="1.1"
            viewBox="0 0 32 32"
            xmlSpace="preserve"
          >
            <path
              fill="white"
              d="M16 10c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM16 13c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zM16 22c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
            ></path>
          </svg>
        )}
      </div>
      <p className={styles.value}>{checkValue(value)}</p>
    </div>
  );
};

export default withRouter(ShowData);
