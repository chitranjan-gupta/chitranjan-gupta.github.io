import { Inter, JetBrains_Mono, Oswald, Anton, Anek_Devanagari } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import { CookieConsentBanner } from '@/components/cookie-consent';
import { ThemeProvider } from '@/context/ThemeContext';
import {
  GOOGLE_ANALYTICS_ID,
  GOOGLE_SEARCH_CONSOLE_ID,
  GOOGLE_TAG_MANAGER_ID,
  GOOGLE_ADSENSE_ID,
} from '@/constants';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] });
const anton = Anton({ subsets: ['latin'], variable: '--font-cod', weight: ['400'] });
const anekDevanagari = Anek_Devanagari({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-indic',
  preload: true,
});

export const metadata = {
  title: 'Chitranjan Gupta - Portfolio',
  description: 'Chitranjan Gupta - Portfolio',
  verification: GOOGLE_SEARCH_CONSOLE_ID ? { google: GOOGLE_SEARCH_CONSOLE_ID } : undefined,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable} ${anton.variable} ${anekDevanagari.variable}`}
      suppressHydrationWarning
    >
      <body>
        {process.env.NODE_ENV === 'production' && GOOGLE_TAG_MANAGER_ID && (
          <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />
        )}
        <ThemeProvider>
          <MatrixRain />
          <Navbar />
          {children}
          <Footer />
          <CookieConsentBanner />
        </ThemeProvider>

        {process.env.NODE_ENV === 'production' && GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
        )}
        {process.env.NODE_ENV === 'production' && GOOGLE_ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${GOOGLE_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
