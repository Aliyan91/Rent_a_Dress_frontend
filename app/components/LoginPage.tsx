"use client";

import { FormEvent, useState } from "react";

type LoginPageProps = {
  onSignIn: () => void;
  onBrowse: () => void;
};

export default function LoginPage({ onSignIn, onBrowse }: LoginPageProps) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSignIn();
  }

  return (
    <main className="login-page">
      <section className="login-copy">
        <h1>{isCreatingAccount ? "Create an account" : "Welcome back"}</h1>
        <p className="login-intro">
          {isCreatingAccount ? "A lovely occasion is just around the corner." : "Sign in to your account."}
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete={isCreatingAccount ? "new-password" : "current-password"} minLength={8} required />
          <button className="button button-dark sign-in-button" type="submit">
            {isCreatingAccount ? "Create your account" : "Sign in"} <span aria-hidden="true">→</span>
          </button>
        </form>
        <p className="account-prompt">
          {isCreatingAccount ? "Already have an account?" : "New here?"}{" "}
          <button onClick={() => setIsCreatingAccount(!isCreatingAccount)}>
            {isCreatingAccount ? "Sign in" : "Create an account"}
          </button>
        </p>
        <button className="browse-link" onClick={onBrowse}>Browse dresses without signing in</button>
      </section>
    </main>
  );
}
