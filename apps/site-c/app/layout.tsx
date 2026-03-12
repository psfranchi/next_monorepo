import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site C – Content',
  description: 'Content-heavy marketing site.',
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
