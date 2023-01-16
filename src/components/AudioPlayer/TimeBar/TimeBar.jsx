import React from "react";
import PropTypes from 'prop-types';
import { StyledTimeBar } from "./StyledTimeBar";

export const TimeBar = ({
  currentTime,
  duration,
  className,
  ...props
}) => {
  return (
    <StyledTimeBar
      className={className}
      data-testid='time-bar'
      {...props}
    >
      {currentTime}/{duration}
    </StyledTimeBar>
  );
};


TimeBar.propTypes = {
  currentTime: PropTypes.string,
  duration: PropTypes.string,
}

TimeBar.defaultProps = {
  currentTime: '00:00',
  duration: '00:00',
}
