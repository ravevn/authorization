import React, { useState } from "react";
import UIButton from "./UIButton.js";
import "./AuthWindow.css";

const AuthWindow = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // login logic
    console.log("Авторизация:", email, password);
  };

  const handleRegister = () => {
    // registration logic
    console.log("Регистрация:", email, password);
  };

  return (
    <div className="auth-window">
      <h2>Вход</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={handlePasswordChange}
      />
      <UIButton type="string">Войти</UIButton>
      <UIButton type="outline">Регистрация</UIButton>
    </div>
  );
};

export default AuthWindow;