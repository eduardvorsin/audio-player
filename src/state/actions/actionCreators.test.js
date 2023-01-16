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
	CHANGE_CURRENT_TIME,
	CHANGE_DURATION,
	CHANGE_PLAYBACKRATE,
	CHANGE_VOLUME,
	LOOP,
	MUTE,
	PAUSE,
	PLAY,
	UNLOOP,
	UNMUTE
} from "./actionCreators";

describe('action creator tests', () => {
	test('changeDurationAC returns the correct action object', () => {
		const expectedAction = {
			type: CHANGE_DURATION,
			payload: 5,
		};

		expect(changeDurationAC(5)).toEqual(expectedAction);
	});

	test('changeCurrentTimeAC returns the correct action object', () => {
		const expectedAction = {
			type: CHANGE_CURRENT_TIME,
			payload: 10,
		};

		expect(changeCurrentTimeAC(10)).toEqual(expectedAction);
	});

	test('changeVolumeAC returns the correct action object', () => {
		const expectedAction = {
			type: CHANGE_VOLUME,
			payload: 33,
		};

		expect(changeVolumeAC(33)).toEqual(expectedAction);
	});

	test('changePlaybackRateAC returns the correct action object', () => {
		const expectedAction = {
			type: CHANGE_PLAYBACKRATE,
			payload: 1.25,
		};

		expect(changePlaybackRateAC(1.25)).toEqual(expectedAction);
	});

	test('playAudioAC returns the correct action object', () => {
		const expectedAction = {
			type: PLAY,
		};

		expect(playAudioAC()).toEqual(expectedAction);
	});

	test('pauseAudioAC returns the correct action object', () => {
		const expectedAction = {
			type: PAUSE,
		}

		expect(pauseAudioAC()).toEqual(expectedAction);
	});

	test('muteAudioAC returns the correct action object', () => {
		const expectedAction = {
			type: MUTE,
		};

		expect(muteAudioAC()).toEqual(expectedAction);
	});

	test('unmuteAudioAC returns the correct action object', () => {
		const expectedAction = {
			type: UNMUTE,
		};

		expect(unmuteAudioAC()).toEqual(expectedAction);
	});

	test('loopAudioAC returns the correct action object', () => {
		const expectedAction = {
			type: LOOP,
		};

		expect(loopAudioAC()).toEqual(expectedAction);
	});

	test('unloopAudioAC returns the correct action object', () => {
		const expectedAction = {
			type: UNLOOP,
		};

		expect(unloopAudioAC()).toEqual(expectedAction);
	});
})