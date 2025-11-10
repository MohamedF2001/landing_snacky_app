'use client';
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    // { icon: '📥', title: 'Installer', description: 'Téléchargez l\'APK et installez sur votre appareil' },
    { icon: '🌐', title: 'Ouvrir le lien', description: 'Accédez à Snacky sur votre navigateur' },
    { icon: '🔐', title: 'Se connecter', description: 'Créez votre compte ou connectez-vous' },
    { icon: '🎯', title: 'Gérer', description: 'Configurez votre menu et commencez à vendre' },
    { icon: '📊', title: 'Analyser', description: 'Suivez vos performances en temps réel' }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">Comment ça marche ?</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{index + 1}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;