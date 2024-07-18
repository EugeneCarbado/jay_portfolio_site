import type {Metadata} from 'next';
import {Krub, Judson} from 'next/font/google';
import './globals.css';

const krub = Krub({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-krub',
});

const judson = Judson({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-judson',
});

export const metadata: Metadata = {
  title: 'Jay William Whittington Barrette',
  description:
    'Jay Whittington is a cinematographer with a background in photography and performing arts, Canadian born, he completed his studies in Quebec and is based in London since 2016. Jay has experience working across a range of projects and styles includingcommercials, music videos, and documentaries as well as havingworked on multiple award winning short films. He occasionallydirects passion projects to expand on his creative endeavours.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${krub.variable} ${judson.variable}`}>{children}</body>
    </html>
  );
}
