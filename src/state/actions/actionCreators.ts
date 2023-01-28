export const AudioPlayerActions = {
	CHANGE_DURATION: 'change-duration',
	CHANGE_CURRENT_TIME: 'change-current-time',
	CHANGE_VOLUME: 'change-volume',
	CHANGE_PLAYBACKRATE: 'change-playback-rate',
	MUTE: 'mute',
	UNMUTE: 'unmute',
	PLAY: 'play',
	PAUSE: 'pause',
	LOOP: 'loop',
	UNLOOP: 'unloop',
} as const;

type AudioActionTypes = keyof typeof AudioPlayerActions;
type AudioActionValues = typeof AudioPlayerActions[AudioActionTypes];

type ActionTypesWithPayload =
	| 'change-duration'
	| 'change-current-time'
	| 'change-volume'
	| 'change-playback-rate';

type ActionTypesWithoutPayload = Exclude<AudioActionValues, ActionTypesWithPayload>

export type Action<P = number> =
	| { type: ActionTypesWithPayload, payload: P }
	| { type: ActionTypesWithoutPayload };


export const changeDurationAC = <V extends number>(value: V): Action<V> => {
	return {
		type: AudioPlayerActions.CHANGE_DURATION,
		payload: value,
	};
};

export const changeCurrentTimeAC = <V extends number>(value: V): Action<V> => {
	return {
		type: AudioPlayerActions.CHANGE_CURRENT_TIME,
		payload: value,
	}
};

export const changeVolumeAC = <V extends number>(value: V): Action<V> => {
	return {
		type: AudioPlayerActions.CHANGE_VOLUME,
		payload: value,
	}
};

export const changePlaybackRateAC = <V extends number>(value: V): Action<V> => {
	return {
		type: AudioPlayerActions.CHANGE_PLAYBACKRATE,
		payload: value,
	}
};

export const playAudioAC = (): Action => ({
	type: AudioPlayerActions.PLAY,
});

export const pauseAudioAC = (): Action => ({
	type: AudioPlayerActions.PAUSE,
});

export const muteAudioAC = (): Action => ({
	type: AudioPlayerActions.MUTE,
});

export const unmuteAudioAC = (): Action => ({
	type: AudioPlayerActions.UNMUTE,
});

export const loopAudioAC = (): Action => ({
	type: AudioPlayerActions.LOOP,
});

export const unloopAudioAC = (): Action => ({
	type: AudioPlayerActions.UNLOOP,
});