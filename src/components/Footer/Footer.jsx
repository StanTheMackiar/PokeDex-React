import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <p>
        Data from{" "}
        <a
          href="https://pokeapi.co/"
          target="_blank"
          rel="noopener noreferrer">
          PokeApi
        </a>
      </p>
    </section>
  );
};

export default Footer;
