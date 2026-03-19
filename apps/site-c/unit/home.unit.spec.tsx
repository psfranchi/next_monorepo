import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../app/page';

vi.mock('@platform/analytics', () => ({
  track: vi.fn(),
  identify: vi.fn(),
}));

describe('site-c (unit)', () => {
  it('renders content sections', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /site c/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/published:/i)).toBeInTheDocument();
    expect(screen.getByText(/updated:/i)).toBeInTheDocument();
  });
});

