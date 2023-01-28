import { Action } from './actionCreators';
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
	unmuteAudioAC,
	AudioPlayerActions
} from "./actionCreators";

describe('action creator tests', () => {
	test('changeDurationAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.CHANGE_DURATION,
			payload: 5,
		};

		expect(changeDurationAC(5)).toEqual(expectedAction);
	});

	test('changeCurrentTimeAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.CHANGE_CURRENT_TIME,
			payload: 10,
		};

		expect(changeCurrentTimeAC(10)).toEqual(expectedAction);
	});

	test('changeVolumeAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.CHANGE_VOLUME,
			payload: 33,
		};

		expect(changeVolumeAC(33)).toEqual(expectedAction);
	});

	test('changePlaybackRateAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.CHANGE_PLAYBACKRATE,
			payload: 1.25,
		};

		expect(changePlaybackRateAC(1.25)).toEqual(expectedAction);
	});

	test('playAudioAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.PLAY,
		};

		expect(playAudioAC()).toEqual(expectedAction);
	});

	test('pauseAudioAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.PAUSE,
		}

		expect(pauseAudioAC()).toEqual(expectedAction);
	});

	test('muteAudioAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.MUTE,
		};

		expect(muteAudioAC()).toEqual(expectedAction);
	});

	test('unmuteAudioAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.UNMUTE,
		};

		expect(unmuteAudioAC()).toEqual(expectedAction);
	});

	test('loopAudioAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.LOOP,
		};

		expect(loopAudioAC()).toEqual(expectedAction);
	});

	test('unloopAudioAC returns the correct action object', () => {
		const expectedAction: Action = {
			type: AudioPlayerActions.UNLOOP,
		};

		expect(unloopAudioAC()).toEqual(expectedAction);
	});
})