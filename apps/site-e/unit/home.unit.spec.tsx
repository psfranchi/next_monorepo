import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../app/page';

vi.mock('swr', () => ({
  default: () => ({
    data: { title: 'Mock Title', body: 'Mock Body' },
    error: null,
    isLoading: false,
  }),
}));

vi.mock('@platform/analytics', () => ({
  track: vi.fn(),
  identify: vi.fn(),
}));

describe('site-e (unit)', () => {
  it('renders mocked SWR data and utils output', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: /site e/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Mock Title')).toBeInTheDocument();

    expect(screen.getByText(/isexternalurl/i)).toBeInTheDocument();
    expect(screen.getByText(/= true/i)).toBeInTheDocument();
  });
});

