import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { ConfirmationModal } from '@/components';

describe('Test: ConfirmationModal', () => {
  afterEach(cleanup);

  it('should render the ConfirmationModal component', () => {
    render(<ConfirmationModal open />);
    screen.getByText('Are you sure?');
  });

  it('should hide the ConfirmationModal component', () => {
    render(<ConfirmationModal open={false} />);
    const item = screen.queryByText('Are you sure?');
    expect(item).toBeNull();
  });
});
