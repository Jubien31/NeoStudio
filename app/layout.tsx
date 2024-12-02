import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from '@/components/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Neo Studio | Sites Web Vitrines et Création d\'Images Publicitaires',
  description: "Neo Studio vous propose la création de sites web vitrines modernes et la création d'images publicitaires personnalisées. Solutions web évolutives et abordables avec les dernières technologies.",
  keywords: "création site web, site vitrine, images publicitaires, web design, création graphique, développement web, site moderne",
  authors: [{ name: 'Julien Tartas' }],
  creator: 'Julien Tartas',
  publisher: 'Neo Studio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://neostudio.fr',
    title: 'Neo Studio | Sites Web Vitrines et Création d\'Images Publicitaires',
    description: "Neo Studio vous propose la création de sites web vitrines modernes et la création d'images publicitaires personnalisées.",
    siteName: 'Neo Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neo Studio | Sites Web Vitrines et Création d\'Images Publicitaires',
    description: "Neo Studio vous propose la création de sites web vitrines modernes et la création d'images publicitaires personnalisées.",
  },
  alternates: {
    canonical: 'https://neostudio.fr'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}