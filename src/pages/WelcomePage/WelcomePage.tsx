import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { composeStyles } from "../../helpers/functionHelpers";
import { RouteComponentProps } from "react-router-dom";
import styles from "./WelcomePage.module.css";
import sprite from "../../svgSprite.svg";

interface WelcomePageProps extends RouteComponentProps {}

class WelcomePage extends Component<WelcomePageProps> {
  componentDidMount() {
    try {
      if (localStorage.getItem("wasHere")) {
        this.props.history.replace("/");
      }
      localStorage.setItem("wasHere", JSON.stringify(true));
    } catch (err) {
      console.warn(err);
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <svg className={styles.svg}>
          <use href={`${sprite}#welcome_image`}></use>
        </svg>

        <div className={styles.textContent}>
          <h2 className={styles.title}>Let us save your money</h2>
          <p className={styles.text}>
            Welcome everyone who want to control money spending and incomes
          </p>
        </div>

        <div>
          <Link className={styles.link} to="change_balance">
            <button className={styles.btn}> Set balance</button>
          </Link>
          <Link className={styles.link} to="/">
            <button className={composeStyles(styles.btn, styles.black)}>
              Quik start
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default WelcomePage;
