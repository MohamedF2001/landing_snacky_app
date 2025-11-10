'use client';
import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🏠',
      title: 'Home',
      description: 'Présentation claire avec catégories et produits populaires du moment'
    },
    {
      icon: '📊',
      title: 'Dashboard',
      description: 'CA total, commandes, produits, promotions et statistiques clients'
    },
    {
      icon: '📈',
      title: 'Analyse des ventes',
      description: 'Graphiques détaillés avec périodes personnalisables et filtres avancés'
    },
    {
      icon: '🛒',
      title: 'Commandes',
      description: 'Créer, modifier et filtrer les commandes par statut en temps réel'
    },
    {
      icon: '📁',
      title: 'Catégories',
      description: 'Organisez votre menu avec des catégories personnalisables'
    },
    {
      icon: '🍔',
      title: 'Produits',
      description: 'Gestion complète: ajouter, modifier, supprimer avec détails'
    },
    {
      icon: '🎁',
      title: 'Promotions',
      description: 'Créez des offres spéciales et boostez vos ventes'
    },
    {
      icon: '⚙️',
      title: 'Paramètres',
      description: 'Personnalisez votre dashboard selon vos besoins'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Fonctionnalités complètes</h2>
        <p className="section-subtitle">
          Tout ce dont vous avez besoin pour gérer efficacement votre fastfood
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;