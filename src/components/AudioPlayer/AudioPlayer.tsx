import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { createInitialState } from "../../state/state";
import { reducer } from "../../state/reducers/reducer";
import { AudioControls } from './AudioControls/AudioControls';
import { StyledAudioPlayer } from "./StyledAudioPlayer";
import { ProgressRangeSlider } from "./ProgressRangeSlider/ProgressRangeSlider";
import { TimeBar } from "./TimeBar/TimeBar";
import { formatTime, isCorrectAudioFormat } from "../../helpers/helpers";
import { TrackInfo } from "./TrackInfo/TrackInfo";

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
} from "../../state/actions/actionCreators";


interface AudioPlayerProps extends Partial<React.AudioHTMLAttributes<HTMLAudioElement>> {
  src: string,
  sources?: string[],
  trackName?: string,
  trackArtist?: string,
  className?: string,
  showDownloadControl?: boolean,
  showPlaybackRateControl?: boolean,
  showLoopControl?: boolean,
  showNextAndPreviousControls?: boolean,
  onClickPrevious?: React.MouseEventHandler<HTMLButtonElement>,
  onClickNext?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  trackName = '',
  trackArtist = '',
  src = '',
  className = '',
  sources = [''],
  showDownloadControl = false,
  showPlaybackRateControl = false,
  showLoopControl = false,
  showNextAndPreviousControls = false,
  onClickPrevious = () => { },
  onClickNext = () => { },
  ...props
}) => {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBar = useRef<HTMLInputElement | null>(null);

  const [state, dispatch] = useReducer(reducer, {
    muted: props.muted,
    loop: props.loop
  }, createInitialState);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const loadedMetadataHandler = (): void => {
      if (!progressBar.current) return;

      const duration = Math.floor(audio.duration);
      progressBar.current.max = `${duration}`;
      dispatch(changeDurationAC(duration));
    };

    const canPlayThroughHandler = (): void => {
      if (!audioRef.current) return;

      const playPromise = audioRef.current.play();
      playPromise.then(_ => {
        dispatch(playAudioAC());
      }).catch(() => {
        dispatch(pauseAudioAC());
      });
    }

    audio.addEventListener('loadedmetadata', loadedMetadataHandler);
    audio.addEventListener('canplaythrough', canPlayThroughHandler);

    return (() => {
      audio.removeEventListener('loadedmetadata', loadedMetadataHandler);
      audio.removeEventListener('canplaythrough', canPlayThroughHandler);
    })
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const isZeroVolume = state.volume < 1;
    const nextAction = isZeroVolume ? muteAudioAC() : unmuteAudioAC();
    dispatch(nextAction);

    audioRef.current.volume = state.volume / 100;
  }, [state.volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.playbackRate = 1;
    dispatch(changePlaybackRateAC(audioRef.current.playbackRate));
  }, [src]);

  const togglePlaying = useCallback(() => {
    if (!audioRef.current) return;

    if (state.isPlayed) {
      audioRef.current.pause();
      dispatch(pauseAudioAC());
    } else {
      const playPromise = audioRef.current.play();
      playPromise.then(_ => {
        dispatch(playAudioAC());
      }).catch(() => {
        dispatch(pauseAudioAC());
      });
    }
  }, [state.isPlayed]);

  const toggleMuting = useCallback(() => {
    if (!audioRef.current) return;

    const nextAction = state.isMuted ? unmuteAudioAC() : muteAudioAC();
    dispatch(nextAction);

    audioRef.current.muted = state.isMuted;
  }, [state.isMuted]);

  const onVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const volumeAsNumber = Number(e.target.value);
    dispatch(changeVolumeAC(volumeAsNumber));
  }, []);

  const changeLooping = useCallback(() => {
    if (!audioRef.current) return;

    const nextAction = state.isLooped ? unloopAudioAC() : loopAudioAC();
    dispatch(nextAction);

    audioRef.current.loop = state.isLooped;
  }, [state.isLooped]);

  const changePlaybackRate = useCallback(() => {
    if (!audioRef.current) return;

    const { playbackRate } = audioRef.current;
    const nextPlaybackRateValue = playbackRate === 2 ? 0.25 : playbackRate + 0.25;
    audioRef.current.playbackRate = nextPlaybackRateValue;

    dispatch(changePlaybackRateAC(audioRef.current.playbackRate));
  }, []);

  const playingHandler = (): void => {
    if (!audioRef.current || !progressBar.current) return;

    const currentTime = Math.floor(audioRef.current.currentTime);
    progressBar.current.value = `${currentTime}`;

    dispatch(changeCurrentTimeAC(+progressBar.current.value));

    const { value, max } = progressBar.current;
    const calculatedPercent = Number(value) * 100 / Number(max);

    progressBar.current.setAttribute('style', `--progress-percent:${calculatedPercent || 0}%;`);
  }

  const endedHandler: React.ReactEventHandler<HTMLAudioElement> = () => {
    if (!state.isLooped) {
      onClickNext();
      dispatch(pauseAudioAC());
      dispatch(changePlaybackRateAC(1));
    }
  }

  const progressHandler: React.ChangeEventHandler<HTMLInputElement> = (): void => {
    if (!audioRef.current || !progressBar.current) return;

    const progressValueAsNumber = Number(progressBar.current.value);

    audioRef.current.currentTime = progressValueAsNumber;
    dispatch(changeCurrentTimeAC(progressValueAsNumber));
  }

  const setProgress = (value: number): void => {
    if (!audioRef.current || !progressBar.current) return;

    dispatch(changeCurrentTimeAC(value));
    progressBar.current.value = `${value}`;
    audioRef.current.currentTime = value;
  };

  const incrementVolume = (): void => {
    dispatch(changeVolumeAC(state.volume + 1));
  };

  const decrementVolume = (): void => {
    dispatch(changeVolumeAC(state.volume - 1));
  };

  const keyDownHandler: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (document.activeElement?.tagName !== 'DIV') return false;

    switch (e.key) {
      case ' ':
      case 'Enter':
        togglePlaying();
        break;
      case 'ArrowUp':
        if (state.volume < 100) incrementVolume();
        break;
      case 'ArrowDown':
        if (state.volume > 0) decrementVolume();
        break;
      case 'ArrowLeft':
        if (state.currentTime > 0) setProgress(state.currentTime - 1);
        break;
      case 'ArrowRight':
        if (state.currentTime < state.duration) setProgress(state.currentTime + 1);
        break;
      case 'm':
        toggleMuting();
        break;
      case 'l':
        changeLooping();
        break;
      default:
    }
  }

  return (
    <StyledAudioPlayer
      tabIndex={0}
      onKeyDown={keyDownHandler}
      title='audio-player'
      data-testid='audio-player'
    >
      <audio
        ref={audioRef}
        src={src}
        muted={state.isMuted}
        loop={state.isLooped}
        onEnded={endedHandler}
        onTimeUpdate={playingHandler}
        title='audio'
        {...props}
      >
        {sources.map(source => {
          if (isCorrectAudioFormat(source)) return null;
          const format = source.slice(source.lastIndexOf('.'));

          return <source
            key={source}
            src={source}
            type={`audio/${format}`}
          />
        })}
      </audio>

      {(trackName.length && trackArtist.length) &&
        <TrackInfo
          trackName={trackName}
          trackArtist={trackArtist}
        />
      }

      <TimeBar
        currentTime={formatTime(state.currentTime)}
        duration={formatTime(state.duration)}
      />

      <ProgressRangeSlider
        ref={progressBar}
        onChange={progressHandler}
      />

      <AudioControls
        playbackRate={state.playbackRate}
        volume={state.volume}
        downloadLink={src}
        isPlayed={state.isPlayed}
        isMuted={state.isMuted}
        isLooped={state.isLooped}
        showDownloadControl={showDownloadControl}
        showLoopControl={showLoopControl}
        showPlaybackRateControl={showPlaybackRateControl}
        togglePlaying={togglePlaying}
        toggleMuting={toggleMuting}
        onVolumeChange={onVolumeChange}
        changePlaybackRate={changePlaybackRate}
        changeLooping={changeLooping}
        showNextAndPreviousControls={showNextAndPreviousControls}
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
      />
    </StyledAudioPlayer>
  );
}