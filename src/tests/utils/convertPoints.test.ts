import { describe, expect, it } from 'vitest';

import { PointEstimate } from '@/__generated__/types';
import { convertPoints } from '@/utils';

describe('Test: ConvertPoints', () => {
  it('should convert enumber to string', () => {
    const res = convertPoints(PointEstimate.EIGHT);
    expect(res).toBe('8');
  });
});
