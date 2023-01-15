import { formatTime } from "./helpers";

describe('helpers tests', () => {

  test('formatTime passed valid seconds', () => {
    const expectedValue = formatTime(65);
    expect(expectedValue).toMatch(/(1:05)/);
  });

  test('formatTime passed invalid seconds', () => {
    expect(() => formatTime(1 / 0)).toThrow('the passed value must be a finite number');
  });

  test('formatTime passed not a number', () => {
    expect(() => formatTime('abc')).toThrow('the passed value must be a number');
  });
});
