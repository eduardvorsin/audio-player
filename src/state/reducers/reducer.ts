import { Action } from './../actions/actionCreators';
import { State } from "../state";
import {
	AudioPlayerActions
} from "../actions/actionCreators";

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case AudioPlayerActions.CHANGE_DURATION: {
			return {
				...state,
				duration: action.payload,
			}
		}
		case AudioPlayerActions.CHANGE_CURRENT_TIME: {
			return {
				...state,
				currentTime: action.payload,
			}
		}
		case AudioPlayerActions.CHANGE_VOLUME: {
			return {
				...state,
				volume: action.payload,
			}
		}
		case AudioPlayerActions.CHANGE_PLAYBACKRATE: {
			return {
				...state,
				playbackRate: action.payload,
			}
		}
		case AudioPlayerActions.PLAY: {
			return {
				...state,
				isPlayed: true,
			}
		}
		case AudioPlayerActions.PAUSE: {
			return {
				...state,
				isPlayed: false,
			}
		}
		case AudioPlayerActions.MUTE: {
			return {
				...state,
				isMuted: true,
			}
		}
		case AudioPlayerActions.UNMUTE: {
			return {
				...state,
				isMuted: false,
			}
		}
		case AudioPlayerActions.LOOP: {
			return {
				...state,
				isLooped: true,
			}
		}
		case AudioPlayerActions.UNLOOP: {
			return {
				...state,
				isLooped: false,
			}
		}
		default: {
			return state;
		}
	}
}
