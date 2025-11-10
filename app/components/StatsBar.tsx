'use client';
import React, { useState, useEffect, useRef } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const StatsBar: React.FC = () => {
  const [counts, setCounts] = useState({ orders: 0, revenue: 0, products: 0, clients: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: Stat[] = [
    { label: 'Commandes traitées', value: 1250, suffix: '+' },
    { label: 'Chiffre d\'affaires', value: 45000, suffix: '€' },
    { label: 'Produits actifs', value: 120, suffix: '' },
    { label: 'Clients satisfaits', value: 850, suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        
        setCounts(prev => ({
          ...prev,
          [index === 0 ? 'orders' : index === 1 ? 'revenue' : index === 2 ? 'products' : 'clients']: Math.floor(current)
        }));
      }, interval);
    });
  }, [isVisible]);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">
                {index === 0 && counts.orders}
                {index === 1 && counts.revenue.toLocaleString()}
                {index === 2 && counts.products}
                {index === 3 && counts.clients}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sparkline"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;