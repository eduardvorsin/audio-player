import React from "react";
import { StyledTimeBar } from "./StyledTimeBar";

export interface TimeBarProps extends Partial<React.TimeHTMLAttributes<HTMLTimeElement>> {
  className?: string,
  currentTime?: string,
  duration?: string,
};

export const TimeBar: React.FC<TimeBarProps> = ({
  currentTime = '00:00',
  duration = '00:00',
  className = '',
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
