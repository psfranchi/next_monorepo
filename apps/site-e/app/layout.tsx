import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site E – API & Data',
  description: 'API and data utility flavored site.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
