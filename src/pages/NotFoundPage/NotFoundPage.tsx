import * as React from "react";
import {Link} from "react-router-dom";
import sprite from "../../svgSprite.svg";
import noDataCss from "../../components/NoData/NoData.module.css";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => (
  <>
    <div className={noDataCss.container}>
      <svg className={noDataCss.svg}>
        <use href={sprite + "#404_page"}></use>
      </svg>
    </div>
    <Link to="/">
      <button
        className={styles.btn}
      >
        Back to App
      </button>
    </Link>
  </>
);

export default NotFoundPage;
