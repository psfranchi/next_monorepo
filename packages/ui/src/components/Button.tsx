import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, React.CSSProperties> = {
  primary: { background: '#2563eb', color: 'white' },
  secondary: { background: '#e5e7eb', color: '#1f2937' },
  outline: { background: 'transparent', border: '1px solid #d1d5db' },
};

export function Button({
  children,
  variant = 'primary',
  style,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      style={{
        padding: '8px 16px',
        borderRadius: 6,
        fontWeight: 500,
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
