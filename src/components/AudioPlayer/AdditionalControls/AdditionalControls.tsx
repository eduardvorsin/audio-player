import React from "react";
import { StyledAdditionalControls } from "./StyledAdditionalControls";
import { Button } from "../../UI/Button/Button";
import { PlaybackRateButton } from "../PlaybackRateButton/PlaybackRateButton";
import { ReactComponent as RepeatIcon } from '../../../assets/images/icons/repeat.svg';
import { ReactComponent as NoRepeatIcon } from '../../../assets/images/icons/no-repeat.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/images/icons/download.svg';

interface AdditionalControlsProps {
  downloadLink?: string,
  className?: string,
  playbackRate?: number,
  showDownloadControl?: boolean,
  showPlaybackRateControl?: boolean,
  showLoopControl?: boolean,
  isLooped?: boolean,
  changePlaybackRate?: React.MouseEventHandler<HTMLButtonElement>,
  changeLooping?: React.MouseEventHandler<HTMLButtonElement>,
}

export const AdditionalControls = React.memo<AdditionalControlsProps>(({
  className = '',
  playbackRate = 1,
  downloadLink = '',
  showDownloadControl = false,
  showPlaybackRateControl = false,
  showLoopControl = false,
  isLooped = false,
  changePlaybackRate = () => { },
  changeLooping = () => { },
}) => {

  const repeatButtonIcon = isLooped ? <RepeatIcon /> : <NoRepeatIcon />;

  return (
    <StyledAdditionalControls
      className={className}
      data-testid='additional-controls'
    >
      {showDownloadControl &&
        <Button
          as='a'
          withoutVisibleText
          href={downloadLink}
          startIcon={<DownloadIcon />}
          download
        >
          download track
        </Button>
      }

      {showPlaybackRateControl &&
        <PlaybackRateButton
          aria-label='current playback rate'
          onClick={changePlaybackRate}
        >
          {`${playbackRate}x`}
        </PlaybackRateButton>
      }

      {showLoopControl &&
        <Button
          withoutVisibleText
          startIcon={repeatButtonIcon}
          onClick={changeLooping}
        >
          {isLooped ? 'don\'t repeat the song' : 'repeat song infinite'}
        </Button>
      }
    </StyledAdditionalControls>
  );
});