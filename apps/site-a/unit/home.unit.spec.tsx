import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../app/page';

vi.mock('@platform/analytics', () => ({
  track: vi.fn(),
  identify: vi.fn(),
}));

describe('site-a (unit)', () => {
  it('renders the header and CTA', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /site a/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /welcome/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /get started/i })
    ).toBeInTheDocument();
  });
});

