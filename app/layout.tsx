import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Demo Application',
  description: 'Application for Hyperswitch Embedded Component',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}