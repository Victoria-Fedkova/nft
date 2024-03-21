import Footer from './components/Footer';
import './globals.css';
import localFont from 'next/font/local';

export const metadata = {
  title: 'YACHT APES',
  description:
    'Yacht Ape is a collection of unique digital apes that you can own in NFT format',
};

//fonts
const biroScriptUSPlus = localFont({
  src: [
    {
      path: './localFonts/Biro/BiroScriptUSPlus-Regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--biro-script-plus',
});

const rightGrotesk = localFont({
  src: [
    {
      path: './localFonts/RighrGrotesk/RightGrotesk-CompactBlack.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--right-grotesk',
});
const messinaSansMono = localFont({
  src: [
    {
      path: './localFonts/Messina/MessinaSansMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--messina-sans-mono',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${messinaSansMono.variable}  ${biroScriptUSPlus.variable} ${rightGrotesk.variable}`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
