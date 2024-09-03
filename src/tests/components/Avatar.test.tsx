import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

import { Avatar } from '@/components';

describe('Test: Avatar', () => {
  afterEach(cleanup);

  it('should render the Avatar component', () => {
    render(<Avatar src="https://avatar.iran.liara.run/public" />);
    screen.getByAltText('avatar');
  });

  it('should render the Avatar component with custom size', () => {
    render(<Avatar src="https://avatar.iran.liara.run/public" size="lg" />);
    screen.getByAltText('avatar').classList.contains('size-12');
  });
});
