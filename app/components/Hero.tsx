"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`hero ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">🚀 Nouvelle version disponible</div>
          <h1 className="hero-title">
            Snacky — Gérer votre fastfood n'a jamais été aussi simple
          </h1>
          <p className="hero-subtitle">
            Commandes, produits, promotions et statistiques — tout en un seul tableau de bord.
          </p>
          <div className="hero-cta">
            {/* <a 
              href="/downloads/Snacky-v1.apk" 
              download 
              rel="noopener"
              className="btn btn-primary"
            >
              📱 Télécharger l'APK
            </a> */}
            <a 
              href="https://phenomenal-mooncake-1d902b.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              🌐 Tester la version web
            </a>
          </div>
          <div className="hero-info">
            <span>✓ Version 1.0.0</span>
           {/*  <span>✓ Taille: 12.5 MB</span>
            <span>✓ Android 8.0+</span> */}
          </div>
        </div>
        <div className="hero-mockup">
          <div className="mockup-device">
            <div className="mockup-screen" aria-hidden={false}>
              <Image
                src="/screen1.png"
                alt="Aperçu de l'application - écran 1"
                width={360}
                height={620}
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;