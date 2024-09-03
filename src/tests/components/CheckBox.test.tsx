import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import { CheckBox } from '@/components';

describe('Test: CheckBox', () => {
  afterEach(cleanup);

  it('should render the CheckBox component', () => {
    render(<CheckBox label="test" />);
    screen.getByText('test');
  });
});
