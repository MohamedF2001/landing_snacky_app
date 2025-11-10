import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>🍔 Snacky</h3>
            <p>Gérez votre fastfood simplement</p>
          </div>
          <div className="footer-links">
            <h4>Liens</h4>
            <a href="#">Contact</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Mentions légales</a>
          </div>
          {/* <div className="footer-social">
            <h4>Suivez-nous</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div> */}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Snacky. Tous droits réservés.</p>
          {/* <p>Design moderne avec palette orange-jaune</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;