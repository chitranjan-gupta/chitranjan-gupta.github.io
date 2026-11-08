import { Inter, JetBrains_Mono, Oswald, Anton } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] });
const anton = Anton({ subsets: ['latin'], variable: '--font-cod', weight: ['400'] });

export const metadata = {
  title: 'Chitranjan Kumar Gupta | Full Stack Developer',
  description: 'Chitranjan Kumar Gupta – Full Stack Developer portfolio showcasing projects, skills, and contact information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${oswald.variable} ${anton.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
