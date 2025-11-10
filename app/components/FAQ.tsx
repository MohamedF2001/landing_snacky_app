'use client';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'Mes données sont-elles sauvegardées ?',
      answer: 'Oui, toutes vos données sont automatiquement sauvegardées dans le cloud avec un chiffrement de bout en bout. Vous pouvez y accéder depuis n\'importe quel appareil.'
    },
    {
      question: 'Comment fonctionnent les mises à jour ?',
      answer: 'Les mises à jour sont automatiques et gratuites. Vous recevrez une notification lorsqu\'une nouvelle version est disponible.'
    },
    {
      question: 'Quels appareils sont compatibles ?',
    //   answer: 'Snacky fonctionne sur Android 8.0+, iOS 13+ et via navigateur web (Chrome, Firefox, Safari). La version APK est spécifique à Android.'
        answer: 'Snacky fonctionne via navigateur web (Chrome, Firefox, Safari). La version APK est en cours de création.'
    },
    /* {
      question: 'Puis-je utiliser Snacky hors ligne ?',
      answer: 'Oui, les fonctionnalités principales fonctionnent hors ligne. Les données seront synchronisées automatiquement dès que vous serez reconnecté.'
    } */
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Questions fréquentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;