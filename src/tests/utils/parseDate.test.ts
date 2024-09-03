import { describe, expect, it } from 'vitest';

import { parseDate } from '@/utils';

describe('Test: ParseDate', () => {
  it('should parse string date to dd MMM, yyyy format', () => {
    const date = '2021-09-01T12:00:00.000Z';
    const parsed = parseDate(date, { format: 'dd MMM, yyyy' });

    expect(parsed).toBe('01 Sep, 2021');
  });

  it('should parse number date to dd MMM, yyyy format', () => {
    const date = 1714545040000;
    const parsed = parseDate(date, { format: 'dd MMM, yyyy' });

    expect(parsed).toBe('01 May, 2024');
  });

  it('should parse Date date to dd MMM, yyyy format', () => {
    const date = new Date('2024-05-01T12:00:00.000Z');
    const parsed = parseDate(date, { format: 'dd MMM, yyyy' });

    expect(parsed).toBe('01 May, 2024');
  });

  //test if returns today, tomorrow, yesterday, and days ago
  it('should return Today', () => {
    const date = new Date();
    const parsed = parseDate(date);

    expect(parsed).toBe('Today');
  });

  it('should return Tomorrow', () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const parsed = parseDate(date);

    expect(parsed).toBe('Tomorrow');
  });

  it('should return Yesterday', () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    const parsed = parseDate(date);

    expect(parsed).toBe('Yesterday');
  });

  it('should return days ago', () => {
    const date = new Date();
    date.setDate(date.getDate() - 3);
    const parsed = parseDate(date);

    expect(parsed).toBe('3 days ago');
  });
});
