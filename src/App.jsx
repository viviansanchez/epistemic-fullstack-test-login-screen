import { useForm } from "react-hook-form";
import { Logo } from "./components/Logo/Logo";
import { Footer } from "./components/Footer/Footer";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  const { register, handleSubmit, watch } = useForm();

  function handleLogin(data) {
    console.log(data);
  }

  function handleForgotPassword(userEmail) {
    const email = prompt("Insira seu email", userEmail);
    if (email) {
      alert("Recuperação de senha");
    }
  }

  function handleSignup() {
    alert("Cadastro de usuário");
  }

  const email = watch("email");

  return (
    <div className={styles.container}>
      <div className={styles.mainAndVersionWrapper}>
        <main className={styles.main}>
          <Logo />

          <form className={styles.form} action="" onSubmit={handleSubmit(handleLogin)}>
            <input className={styles.input} type="email" placeholder="E-mail" required {...register("email")} />

            <input className={styles.input} type="password" placeholder="Senha" required {...register("password")} />

            <button type="submit">ENTRAR</button>
          </form>

          <a href="#" onClick={() => handleForgotPassword(email)}>
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
