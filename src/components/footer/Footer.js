import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p>Créé avec passion par Yann - Développeur Fullstack Junior</p>
        <p>Inspiré par <a href="https://github.com/saadpasta/developerFolio" target="_blank" rel="noreferrer">Devfolio</a></p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Mode actuel : {isDark ? "Sombre" : "Clair"}
        </p>
      </div>
    </Fade>
  );
}
