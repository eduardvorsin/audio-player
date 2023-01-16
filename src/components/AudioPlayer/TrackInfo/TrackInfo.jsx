import PropTypes from 'prop-types';
import { memo } from 'react';
import { StyledTrackArtist, StyledTrackInfo, StyledTrackName } from "./StyledTrackInfo";

export const TrackInfo = memo(({
  trackName,
  trackArtist,
  className,
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

TrackInfo.propTypes = {
  trackName: PropTypes.string,
  trackArtist: PropTypes.string,
  className: PropTypes.string,
}

TrackInfo.defaultProps = {
  trackName: 'trackName',
  trackArtist: 'trackArtist',
  className: '',
}
