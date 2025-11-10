"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Screenshot {
  id: number;
  title: string;
  description: string;
}

const ScreenshotCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const screenshots: Screenshot[] = [
    { id: 1, title: 'Dashboard Principal', description: 'Vue d\'ensemble de vos statistiques' },
    { id: 2, title: 'Gestion des Commandes', description: 'Suivez toutes vos commandes en temps réel' },
    { id: 3, title: 'Catalogue Produits', description: 'Gérez votre menu facilement' },
    { id: 4, title: 'Analyses & Graphiques', description: 'Visualisez vos performances' },
    { id: 5, title: 'Promotions', description: 'Créez et gérez vos offres spéciales' },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.scrollWidth / screenshots.length;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const itemWidth = carouselRef.current.scrollWidth / screenshots.length;
        const index = Math.round(carouselRef.current.scrollLeft / itemWidth);
        setCurrentIndex(index);
      }
    };

    const carousel = carouselRef.current;
    carousel?.addEventListener('scroll', handleScroll);
    return () => carousel?.removeEventListener('scroll', handleScroll);
  }, [screenshots.length]);

  return (
    <section className="carousel-section">
      <div className="container">
        <h2 className="section-title">Découvrez l'interface</h2>
        <div 
          className="carousel-container"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.id}
              className="carousel-item"
              style={{ minWidth: 520 }}
            >
              <div
                className="screenshot-placeholder"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedImage(`/screen${screenshot.id}.png`)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedImage(`/screen${screenshot.id}.png`);
                  }
                }}
              >
                <Image
                  src={`/screen${screenshot.id}.png`}
                  alt={screenshot.title}
                  width={900}
                  height={560}
                  style={{ width: '100%', height: 'auto', borderRadius: 12, cursor: 'zoom-in' }}
                />
              </div>
              <h3>{screenshot.title}</h3>
              <p>{screenshot.description}</p>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {screenshots.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Aller à la capture ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          className="screenshot-modal"
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.8)',
            zIndex: 9999,
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: '95%', maxHeight: '95%', position: 'relative' }}
          >
            <button
              aria-label="Fermer"
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: -10,
                right: -10,
                background: '#fff',
                border: 'none',
                borderRadius: 9999,
                width: 36,
                height: 36,
                cursor: 'pointer',
                zIndex: 10000,
              }}
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Aperçu"
              width={1400}
              height={900}
              style={{ width: '100%', height: 'auto', borderRadius: 12 }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ScreenshotCarousel;