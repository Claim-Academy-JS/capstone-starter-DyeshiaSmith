import React from "react";

import { Login } from "components/Forms/Login";

import "./Home.css";

export const Home = () => (
  <main>
    <h1>Home</h1>
    <div className="hero">
      <Login />
    </div>
    <section>
      <h2> Who Are We?</h2>
      <p>
        No one wants to waste money hiring a professional to do things your also
        capable of. We are an online resource that allows you to rent unused
        equipment of others near you. also while being able to rent out your own
        unused equipment for extra money.
      </p>
    </section>
  </main>
);
