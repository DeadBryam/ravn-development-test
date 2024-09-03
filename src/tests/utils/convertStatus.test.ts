import { describe, expect, it } from 'vitest';

import { Status } from '@/__generated__/types';
import { convertStatus } from '@/utils';

describe('Test: ConvertStatus', () => {
  it('should convert status to string', () => {
    const res = convertStatus(Status.DONE);
    expect(res).toBe('Done');
  });
});
