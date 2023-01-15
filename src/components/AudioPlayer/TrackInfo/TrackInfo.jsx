import PropTypes from 'prop-types';
import { memo } from 'react';
import { StyledTrackArtist, StyledTrackInfo, StyledTrackName } from "./StyledTrackInfo";

export const TrackInfo = memo(({
  trackName,
  trackArtist,
  className,
  testId,
}) => {
  return (
    <StyledTrackInfo
      className={className}
      data-testid={testId}
    >
      <StyledTrackName>{trackName}</StyledTrackName>
      <StyledTrackArtist>{trackArtist}</StyledTrackArtist>
    </StyledTrackInfo>
  );
});

TrackInfo.propTypes = {
  trackName: PropTypes.string,
  trackArtist: PropTypes.string,
  className: PropTypes.string,
  testId: PropTypes.string,
}

TrackInfo.defaultProps = {
  trackName: 'trackName',
  trackArtist: 'trackArtist',
  className: '',
  testId: '',
}
