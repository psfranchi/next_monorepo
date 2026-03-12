import type { ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Section({ children, title, className = '' }: SectionProps) {
  return (
    <section className={className} style={{ padding: '24px 0' }}>
      {title ? (
        <h2 style={{ marginBottom: 16, fontSize: 20, fontWeight: 600, color: '#111827' }}>
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
