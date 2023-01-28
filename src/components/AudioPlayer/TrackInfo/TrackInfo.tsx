import { memo } from 'react';
import { StyledTrackArtist, StyledTrackInfo, StyledTrackName } from "./StyledTrackInfo";

interface TrackInfoProps {
  trackName: string,
  trackArtist: string,
  className?: string,
}

export const TrackInfo = memo<TrackInfoProps>(({
  trackName,
  trackArtist,
  className = '',
}) => {


  return (
    <StyledTrackInfo
      className={className}
      data-testid='track-info'
    >
      <StyledTrackName
        data-testid='track-name'
      >
        {trackName}
      </StyledTrackName>

      <StyledTrackArtist
        data-testid='track-artist'
      >
        {trackArtist}
      </StyledTrackArtist>
    </StyledTrackInfo>
  );
});