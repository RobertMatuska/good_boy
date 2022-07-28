import React from "react";
import Logo from "../assets/img/logo-new.png";
import { Link, Router } from "react-router-dom";

const Footer: React.FC = () => {

    return <>
    <hr></hr>
<div className="rowFooter">
  <div className="columnFooter">
  <img className='FooterLogo' src={Logo} alt="Logo" />
    <p></p>
  </div>
  <div className="columnFooter">
    <h2 className="titleText">Nadácia Good Boy</h2>
      <p className="footerLink">O projekte</p>
      <p className="footerLink">Ako na to</p>
      <p className="footerLink">Kontakt</p>
  </div>
  <div className="columnFooter">
    <h2 className="titleText">Nadácia Good boy</h2>
    <p className="footerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
  </div>
  <div className="columnFooter">
    <h2 className="titleText">Nadácia Good boy</h2>
    <p className="footerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. </p>
  </div>
</div>
    </>
}

export default Footer;