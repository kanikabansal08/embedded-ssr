import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'HyperSwitch Embeddable Components — Live Demo',
  description: 'See how platforms embed HyperSwitch payment components directly into their dashboards.',
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