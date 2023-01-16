import {
  changeCurrentTimeAC,
  changeDurationAC,
  changePlaybackRateAC,
  changeVolumeAC,
  loopAudioAC,
  muteAudioAC,
  pauseAudioAC,
  playAudioAC,
  unloopAudioAC,
  unmuteAudioAC
} from "../actions/actionCreators";

import { createInitialState } from "../state";
import { reducer } from "./reducer";

describe('reducer tests', () => {
  test('the reducer is launched with a CHANGE_DURATION action', () => {
    const action = changeDurationAC(137);

    const intialState = createInitialState();
    const expectedState = { ...intialState, duration: 137 };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a CHANGE_CURRENT_TIME action', () => {
    const action = changeCurrentTimeAC(42);
    const intialState = createInitialState();
    const expectedState = { ...intialState, currentTime: 42 };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a CHANGE_VOLUME action', () => {
    const action = changeVolumeAC(1);
    const intialState = createInitialState();
    const expectedState = { ...intialState, volume: 1 };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a CHANGE_PLAYBACKRATE action', () => {
    const action = changePlaybackRateAC(1.5);
    const intialState = createInitialState();
    const expectedState = { ...intialState, playbackRate: 1.5 };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a PLAY action', () => {
    const action = playAudioAC();
    const intialState = createInitialState();
    const expectedState = { ...intialState, isPlayed: true };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a PAUSE action', () => {
    const action = pauseAudioAC();
    const intialState = createInitialState();
    const expectedState = { ...intialState, isPlayed: false };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a MUTE action', () => {
    const action = muteAudioAC();
    const intialState = createInitialState();
    const expectedState = { ...intialState, isMuted: true };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a UNMUTE action', () => {
    const action = unmuteAudioAC();
    const intialState = createInitialState();
    const expectedState = { ...intialState, isMuted: false };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a LOOP action', () => {
    const action = loopAudioAC();
    const intialState = createInitialState();
    const expectedState = { ...intialState, isLooped: true };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a UNLOOP action', () => {
    const action = unloopAudioAC();
    const intialState = createInitialState();
    const expectedState = { ...intialState, isLooped: false };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with unknown action', () => {
    const action = {
      type: 'abc',
      value: true,
    };
    const intialState = createInitialState();

    expect(reducer(intialState, action)).toEqual(intialState);
  });
});
