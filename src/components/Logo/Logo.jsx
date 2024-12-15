import styles from "./Logo.module.css";
import logo from "../../assets/mock-logo.svg";

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Logo da Epistemic" />
      <h1>epistemic</h1>
    </div>
  );
}
