import type { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function Card({ children, title, className = '', style }: CardProps) {
  return (
    <div
      className={className}
      style={{
        borderRadius: 8,
        border: '1px solid #e5e7eb',
        background: 'white',
        padding: 16,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      {title ? (
        <h3 style={{ margin: '0 0 8px 0', fontSize: 18, fontWeight: 600, color: '#1f2937' }}>
          {title}
        </h3>
      ) : null}
      {children}
    </div>
  );
}
