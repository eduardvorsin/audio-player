import { State } from './state';
import { createInitialState } from "./state";

describe('createInitialState tests', () => {

  test('createInitialState passed valid parameters', () => {
    const intialState: State = createInitialState({
      loop: true,
      muted: true,
    });

    const expectedValue: State = {
      isPlayed: false,
      isMuted: true,
      volume: 50,
      currentTime: 0,
      duration: 0,
      playbackRate: 1,
      isLooped: true,
    };

    expect(intialState).toEqual(expectedValue);
  });

  test('createInitialState no passed parameters', () => {
    const intialState: State = createInitialState({});
    const expectedValue: State = {
      isPlayed: false,
      isMuted: false,
      volume: 50,
      currentTime: 0,
      duration: 0,
      playbackRate: 1,
      isLooped: false,
    };

    expect(intialState).toEqual(expectedValue);
  });
});
