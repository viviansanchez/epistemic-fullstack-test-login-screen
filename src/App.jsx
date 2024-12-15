import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Logo } from "./components/Logo/Logo";
import { Footer } from "./components/Footer/Footer";

import styles from "./App.module.css";
import "./global.css";
import { useEffect, useState } from "react";

const loginSchema = zod.object({
  email: zod.literal("correctemail@email.com", {
    errorMap: () => ({ message: "O e-mail ou senha estão incorretos" }),
  }),
  password: zod.literal("correctpassword", {
    errorMap: () => ({ message: "O e-mail ou senha estão incorretos" }),
  }),
});

export function App() {
  const [passwordErrorCounter, setPasswordErrorCounter] = useState(0);

  const { register, handleSubmit, watch, reset, formState } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (formState.errors.email) {
      alert(formState.errors.email.message);
    }

    if (formState.errors.password) {
      alert(formState.errors.password.message);
      setPasswordErrorCounter((prev) => prev + 1);
    }
  }, [formState.errors, setPasswordErrorCounter]);

  function handleLogin() {
    alert("Login realizado com sucesso");
    reset();
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
  const isUserBlocked = passwordErrorCounter >= 3 ? true : false;

  useEffect(() => {
    if (isUserBlocked) {
      alert("Usuário bloqueado - muitas tentativas de acesso com senha incorreta");
      reset();
    }
  }, [isUserBlocked, reset]);

  return (
    <div className={styles.container}>
      <div className={styles.mainAndVersionWrapper}>
        <main className={styles.main}>
          <Logo />

          <form className={styles.form} action="" onSubmit={handleSubmit(handleLogin)}>
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail"
              required
              {...register("email")}
              disabled={isUserBlocked}
            />

            <input
              className={styles.input}
              type="password"
              placeholder="Senha"
              required
              {...register("password")}
              disabled={isUserBlocked}
            />

            <button type="submit" disabled={isUserBlocked}>
              ENTRAR
            </button>
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
