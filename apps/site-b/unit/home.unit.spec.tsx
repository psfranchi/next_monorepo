import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../app/page';

vi.mock('@platform/analytics', () => ({
  track: vi.fn(),
  identify: vi.fn(),
}));

describe('site-b (unit)', () => {
  it('shows zod validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.type(screen.getByLabelText('Name'), 'John');
    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() =>
      expect(screen.getByText('Invalid email')).toBeInTheDocument()
    );
  });
});

