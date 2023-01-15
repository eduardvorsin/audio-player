import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { StyledRangeSlider } from "./StyledRangeSlider";

export const RangeSlider = forwardRef(({
  className,
  onChange,
  isVertical,
  testId,
  ...props
}, ref) => {

  const changeHandler = (e) => {
    const calculatedPercent =
      e.target.max === '' ? e.target.value : e.target.value * 100 / e.target.max;

    e.target.style = `--progress-percent:${calculatedPercent}%;`;

    onChange(e);
  }

  const currentPercent = props.value || 0;

  return (
    <StyledRangeSlider
      className={className}
      isVertical={isVertical}
      data-testid={testId}
    >
      <input
        style={{ '--progress-percent': `${currentPercent}%` }}
        ref={ref}
        type='range'
        onChange={changeHandler}
        {...props}
      />
    </StyledRangeSlider>
  );
});

RangeSlider.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  isVertical: PropTypes.bool,
  testId: PropTypes.string,
};

RangeSlider.defaultProps = {
  className: '',
  onChange: () => { },
  isVertical: false,
  testId: ''
};
