import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Snacky - Gérer votre fastfood simplement',
  description: 'Commandes, produits, promotions et statistiques — tout en un seul tableau de bord.',
  keywords: 'fastfood, gestion, application, dashboard, commandes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}