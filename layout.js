import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';
import './styles/layout.css';

export const metadata = {
  title: 'FarmTech - Rent Agricultural Equipment',
  description: 'Your trusted platform for renting agricultural equipment online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
