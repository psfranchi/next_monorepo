import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site B – Forms & Validation',
  description: 'Marketing site with forms and validation.',
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
