import { Logo } from "./components/Logo/Logo";
import { Footer } from "./components/Footer/Footer";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  function handleForgotPassword(userEmail) {
    prompt("Insira seu email", userEmail);
  }

  function handleSignup() {
    alert("Cadastro de usuário");
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainAndVersionWrapper}>
        <main className={styles.main}>
          <Logo />

          <form className={styles.form}>
            <input className={styles.input} type="email" placeholder="E-mail" />

            <input className={styles.input} type="password" placeholder="Senha" />

            <button type="submit">ENTRAR</button>
          </form>

          <a href="#" onClick={() => handleForgotPassword("oi")}>
            Esqueceu sua senha? Clique Aqui
          </a>

          <hr />

          <a href="#" onClick={handleSignup}>
            Não tem uma conta? Cadastre-se
          </a>
        </main>
        <p>0.0.1</p>
      </div>

      <Footer />
    </div>
  );
}
