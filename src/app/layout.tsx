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
  description: 'Generated by create next app', //** */
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
