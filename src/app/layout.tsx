import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Karim Nekzad • Portfolio',
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicons/safari-pinned-tab.svg',
        color: 'oklch(0.646 0.222 41.116)',
      },
      { rel: 'shortcut icon', url: '/favicons/favicon.ico' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: 'oklch(0.646 0.222 41.116)',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
