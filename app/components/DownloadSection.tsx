'use client';
import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <section className="download-section">
      <div className="container">
        <div className="download-content">
          <h2>Prêt à transformer votre gestion ?</h2>
          <p>Téléchargez Snacky maintenant et profitez d'une gestion simplifiée</p>
          <div className="download-buttons">
            {/* <a 
              href="/downloads/Snacky-v1.apk" 
              download 
              rel="noopener"
              className="btn btn-primary btn-large"
            >
              📱 Télécharger l'APK (12.5 MB)
            </a> */}
            <a 
              href="https://snackydash.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
            >
              🌐 Accéder au test web
            </a>
          </div>
          <div className="download-info">
            <div className="info-item">
              <strong>✓ Sécurisé</strong>
              <span>Application vérifiée</span>
            </div>
           {/*  <div className="info-item">
              <strong>✓ Compatible</strong>
              <span>Android 8.0 et supérieur</span>
            </div> */}
            <div className="info-item">
              <strong>✓ Mises à jour</strong>
              <span>Automatiques et gratuites</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;