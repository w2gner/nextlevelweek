import React from 'react';
import { FiArrowRight, FiPrinter } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/global.css'
import '../pages/landing.css'
import logoImg from '../images/logo.svg';

function Landing() {
  return (
    <div>
      <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"></img>

          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>

          <div className="location">
            <strong>Criciúma</strong>
            <span>Santa Catarina</span>
          </div>

          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;