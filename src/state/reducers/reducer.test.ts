import { State } from './../state';
import { Action } from './../actions/actionCreators';
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
    const action: Action = changeDurationAC(137);

    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      duration: 137
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a CHANGE_CURRENT_TIME action', () => {
    const action: Action = changeCurrentTimeAC(42);
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      currentTime: 42
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a CHANGE_VOLUME action', () => {
    const action: Action = changeVolumeAC(1);
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      volume: 1
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a CHANGE_PLAYBACKRATE action', () => {
    const action: Action = changePlaybackRateAC(1.5);
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      playbackRate: 1.5
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a PLAY action', () => {
    const action: Action = playAudioAC();
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      isPlayed: true
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a PAUSE action', () => {
    const action: Action = pauseAudioAC();
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      isPlayed: false
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a MUTE action', () => {
    const action: Action = muteAudioAC();
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      isMuted: true
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a UNMUTE action', () => {
    const action: Action = unmuteAudioAC();
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      isMuted: false
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a LOOP action', () => {
    const action: Action = loopAudioAC();
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      isLooped: true
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with a UNLOOP action', () => {
    const action: Action = unloopAudioAC();
    const intialState: State = createInitialState();
    const expectedState: State = {
      ...intialState,
      isLooped: false
    };

    expect(reducer(intialState, action)).toEqual(expectedState);
  });

  test('the reducer is launched with unknown action', () => {
    const action: Action = {
      type: 'abc',
      value: true,
    } as any;
    const intialState: State = createInitialState();

    expect(reducer(intialState, action)).toEqual(intialState);
  });
});
