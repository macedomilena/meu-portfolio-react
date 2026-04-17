import React from 'react';
import perfil from '../img/perfil.jpeg'
const Hero = () => (
  <section id="hero" className="hero section">
    <div className="hero-container">
      <div className="hero-text">
        <p className="greeting">Olá, meu nome é</p>
        <h1>Milena de Sousa Macedo</h1>
        <p className="bio-short">Professora de educação infantil e agora motivada a estudar Tecnologia! Pois a Tecnologia move o mundo!</p>
        <div className="cta-buttons">
          <a href="#projetos" className="btn primary">Ver meus projetos</a>
          <a href="#contato" className="btn secondary">Entrar em contato</a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img src={perfil} alt="Foto de Perfil" className="hero-profile-pic" />
      </div>
    </div>
  </section>
);

export default Hero;