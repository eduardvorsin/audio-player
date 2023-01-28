import { formatTime, isCorrectAudioFormat } from "./helpers";

describe('formatTime tests', () => {

  test('passed valid seconds', () => {
    const expectedValue: string = formatTime(65);
    expect(expectedValue).toMatch(/(1:05)/);
  });

  test('passed invalid seconds', () => {
    expect(() => formatTime(1 / 0)).toThrow('the passed value must be a finite number');
  });

  test('passed not a number', () => {
    expect(() => formatTime('abc' as any)).toThrow('the passed value must be a number');
  });
});

describe('isCorrectAudioFormat tests', () => {

  test.each([
    'abc.mp3',
    'bbc.ogg',
    'ccc.wav',
    'aaa.flac',
    'ddd.aac',
    'ttt.webm',
  ])('formatTime passed valid seconds', (value) => {

    expect(isCorrectAudioFormat(value)).toBeTruthy();
  });

  test.each([
    'abc.mp4',
    '.mp3',
    'abcogg',
    'mkv',
  ])('passed invalid audio file names', (value) => {
    expect(isCorrectAudioFormat(value)).toBeFalsy();
  });

  test('formatTime passed not a string', () => {
    expect(() => isCorrectAudioFormat(123 as any)).toThrow('the passed value must be a string');
  });
});

