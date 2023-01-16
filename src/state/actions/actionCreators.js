export const CHANGE_DURATION = 'change-duration';
export const CHANGE_CURRENT_TIME = 'change-current-time';
export const CHANGE_VOLUME = 'change-volume';
export const CHANGE_PLAYBACKRATE = 'change-playback-rate';
export const MUTE = 'mute';
export const UNMUTE = 'unmute';
export const PLAY = 'play';
export const PAUSE = 'pause';
export const LOOP = 'loop';
export const UNLOOP = 'unloop';

export const changeDurationAC = (value) => {
	return {
		type: CHANGE_DURATION,
		payload: value,
	}
};

export const changeCurrentTimeAC = (value) => {
	return {
		type: CHANGE_CURRENT_TIME,
		payload: value,
	}
};

export const changeVolumeAC = (value) => {
	return {
		type: CHANGE_VOLUME,
		payload: value,
	}
};

export const changePlaybackRateAC = (value) => {
	return {
		type: CHANGE_PLAYBACKRATE,
		payload: value,
	}
};

export const playAudioAC = () => ({
	type: PLAY,
});

export const pauseAudioAC = () => ({
	type: PAUSE,
});

export const muteAudioAC = () => ({
	type: MUTE,
});

export const unmuteAudioAC = () => ({
	type: UNMUTE,
});

export const loopAudioAC = () => ({
	type: LOOP,
});

export const unloopAudioAC = () => ({
	type: UNLOOP,
});