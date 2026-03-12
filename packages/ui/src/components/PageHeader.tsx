import type { ReactNode } from 'react';

export interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  children,
  className = '',
}: PageHeaderProps) {
  return (
    <header className={className} style={{ marginBottom: 32 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: '#111827', margin: 0 }}>
        {title}
      </h1>
      {description ? (
        <p style={{ margin: '8px 0 0 0', color: '#4b5563' }}>{description}</p>
      ) : null}
      {children}
    </header>
  );
}
