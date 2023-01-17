import React, { useCallback, useEffect, useReducer, useRef } from "react";
import PropTypes from 'prop-types';
import { createInitialState } from "../../state/state";
import { reducer } from "../../state/reducers/reducer";
import { AudioControls } from './AudioControls/AudioControls';
import { StyledAudioPlayer } from "./StyledAudioPlayer";
import { ProgressRangeSlider } from "./ProgressRangeSlider/ProgressRangeSlider";
import { TimeBar } from "./TimeBar/TimeBar";
import { formatTime } from "../../helpers/helpers";
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

const audioFormatsRegexp = /\.(ogg|mp3|wav|aac|webm|flac)$/;

export const AudioPlayer = ({
  src,
  trackName,
  trackArtist,
  sources,
  showDownloadControl,
  className,
  showPlaybackRateControl,
  showLoopControl,
  showNextAndPreviousControls,
  onClickPrevious,
  onClickNext,
  ...props
}) => {

  const audioRef = useRef(null);
  const progressBar = useRef(null);

  const [state, dispatch] = useReducer(reducer, {
    muted: props.muted,
    loop: props.loop
  }, createInitialState);

  useEffect(() => {
    const audio = audioRef.current;

    const onLoadedmetadata = () => {
      const duration = Math.floor(audio.duration);
      progressBar.current.max = duration;
      dispatch(changeDurationAC(duration));
    };

    const canPlayThrough = () => {
      const playPromise = audioRef.current.play();
      playPromise.then(_ => {
        dispatch(playAudioAC());
      }).catch(() => {
        dispatch(pauseAudioAC());
      });
    }

    audio.addEventListener('loadedmetadata', onLoadedmetadata);
    audio.addEventListener('canplaythrough', canPlayThrough);
    return (() => {
      audio.removeEventListener('loadedmetadata', onLoadedmetadata);
      audio.removeEventListener('canplaythrough', canPlayThrough);
    })
  }, []);

  useEffect(() => {
    const isZeroVolume = state.volume < 1;
    const nextAction = isZeroVolume ? muteAudioAC() : unmuteAudioAC();
    dispatch(nextAction);

    audioRef.current.volume = state.volume / 100;
  }, [state.volume]);

  useEffect(() => {
    audioRef.current.playbackRate = 1;
    dispatch(changePlaybackRateAC(audioRef.current.playbackRate));
  }, [src]);

  const togglePlaying = useCallback(() => {
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
    const nextAction = state.isMuted ? unmuteAudioAC() : muteAudioAC();
    dispatch(nextAction);

    audioRef.current.muted = state.isMuted;
  }, [state.isMuted]);

  const onVolumeChange = useCallback((e) => {
    dispatch(changeVolumeAC(+e.target.value))
  }, []);

  const changeLooping = useCallback(() => {
    const nextAction = state.isLooped ? unloopAudioAC() : loopAudioAC();
    dispatch(nextAction);

    audioRef.current.loop = state.isLooped;
  }, [state.isLooped]);

  const changePlaybackRate = useCallback(() => {
    const { playbackRate } = audioRef.current;
    const nextPlaybackRateValue = playbackRate === 2 ? 0.25 : playbackRate + 0.25;
    audioRef.current.playbackRate = nextPlaybackRateValue;

    dispatch(changePlaybackRateAC(audioRef.current.playbackRate));
  }, []);

  const onPlaying = () => {
    const currentTime = Math.floor(audioRef.current.currentTime);
    progressBar.current.value = currentTime;

    dispatch(changeCurrentTimeAC(+progressBar.current.value));

    const calculatedPercent =
      progressBar.current.value * 100 / progressBar.current.max;

    progressBar.current.style = `--progress-percent:${calculatedPercent || 0}%;`;
  }

  const onEnded = () => {
    if (!state.isLooped) {
      onClickNext();
      dispatch(pauseAudioAC());
      dispatch(changePlaybackRateAC(1));
    }
  }

  const onProgressChange = () => {
    audioRef.current.currentTime = +progressBar.current.value;
    dispatch(changeCurrentTimeAC(+progressBar.current.value));
  }

  const setProgress = (value) => {
    dispatch(changeCurrentTimeAC(value));
    progressBar.current.value = value;
    audioRef.current.currentTime = value;
  };

  const incrementVolume = () => {
    dispatch(changeVolumeAC(state.volume + 1));
  };

  const decrementVolume = () => {
    dispatch(changeVolumeAC(state.volume - 1));
  };

  const onKeyDown = (e) => {
    if (document.activeElement.tagName !== 'DIV') return false;

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
      onKeyDown={onKeyDown}
      title='audio-player'
      data-testid='audio-player'
    >
      <audio
        ref={audioRef}
        src={src}
        muted={state.isMuted}
        loop={state.isLooped}
        onEnded={onEnded}
        onTimeUpdate={onPlaying}
        title='audio'
        {...props}
      >
        {sources.map(source => {
          const format = source.match(/\.\w+$/)?.[0].slice(1);
          if (!format) return null;
          return <source
            key={source}
            src={source}
            type={`audio/${format}`}
          />
        })}
      </audio>

      <TrackInfo
        trackName={trackName}
        trackArtist={trackArtist}
      />

      <TimeBar
        currentTime={formatTime(state.currentTime)}
        duration={formatTime(state.duration)}
      />

      <ProgressRangeSlider
        ref={progressBar}
        onChange={onProgressChange}
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

AudioPlayer.propTypes = {
  trackName: PropTypes.string,
  trackArtist: PropTypes.string,
  showDownloadControl: PropTypes.bool,
  className: PropTypes.string,
  showPlaybackRateControl: PropTypes.bool,
  showLoopControl: PropTypes.bool,
  showNextAndPreviousControls: PropTypes.bool,
  onClickPrevious: PropTypes.func,
  onClickNext: PropTypes.func,
  src: function (props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      throw new Error(`Invalid type of prop ${propName}, expected to get string in ${componentName} component`);
    }

    if (!props[propName].match(audioFormatsRegexp)) {
      throw new Error(`Invalid value for prop ${propName}, expected in the trackname.extension format in the ${componentName} component`);
    }
  },
  sources: PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {
    propValue.forEach(prop => {
      if (typeof prop !== 'string') {
        throw new Error(`Invalid type of prop ${propFullName}, expected to get string in ${componentName} component`);
      }

      if (!prop.match(audioFormatsRegexp)) {
        throw new Error(`Invalid value for prop ${propFullName}, expected in the trackname.extension format in the ${componentName} component`);
      }
    });
  }),
}

AudioPlayer.defaultProps = {
  src: 'abc.mp3',
  trackName: '',
  trackArtist: '',
  sources: ['abc.ogg'],
  showDownloadControl: false,
  className: '',
  showPlaybackRateControl: false,
  showLoopControl: false,
  showNextAndPreviousControls: false,
  onClickPrevious: () => { },
  onClickNext: () => { },
}