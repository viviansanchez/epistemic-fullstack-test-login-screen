import styles from "./Footer.module.css";

export function Footer() {
  function handleTermsAndConditions() {
    alert("Termos de Uso");
  }

  return (
    <footer className={styles.footer}>
      <a href="#" onClick={handleTermsAndConditions}>
        Termos de uso
      </a>
    </footer>
  );
}
