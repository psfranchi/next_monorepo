import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../app/page';

const track = vi.fn();
const identify = vi.fn();

vi.mock('@platform/analytics', () => ({
  track: (...args: unknown[]) => track(...args),
  identify: (...args: unknown[]) => identify(...args),
}));

describe('site-d (unit)', () => {
  it('renders session UI and calls identify/track on clicks', async () => {
    const user = userEvent.setup();
    render(<Home />);

    await user.click(screen.getByRole('button', { name: /identify session/i }));
    expect(identify).toHaveBeenCalled();

    await user.click(screen.getByRole('button', { name: /track event/i }));
    expect(track).toHaveBeenCalledWith(
      'custom_event',
      expect.objectContaining({ analyticsEnabled: true })
    );
  });
});

