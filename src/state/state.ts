interface Parameters {
  muted?: boolean,
  loop?: boolean,
}

export interface State {
  isPlayed: boolean,
  isMuted: boolean,
  volume: number,
  currentTime: number,
  duration: number,
  playbackRate: number,
  isLooped: boolean,
}

export const createInitialState = (parameters: Parameters = {
  muted: false,
  loop: false,
}): State => {

  const state: State = {
    isPlayed: false,
    isMuted: parameters.muted ?? false,
    volume: 50,
    currentTime: 0,
    duration: 0,
    playbackRate: 1,
    isLooped: parameters.loop ?? false,
  }

  return state;
};