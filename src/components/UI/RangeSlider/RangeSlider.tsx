import React, { forwardRef } from "react";
import { StyledRangeSlider } from "./StyledRangeSlider";

interface RangeSliderProps extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  className?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  defaultValue?: number;
  isVertical?: boolean,
}

interface CSSPropertiesWithVars extends React.CSSProperties {
  '--progress-percent': string,
}

export type RangeSliderRef = HTMLInputElement;

export const RangeSlider = forwardRef<RangeSliderRef, RangeSliderProps>(({
  className = '',
  onChange = () => { },
  isVertical = false,
  defaultValue = 0,
  ...props
}, ref) => {

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const valueAsNumber = Number(e.target.max);
    const maxAsNumber = Number(e.target.max);

    const calculatedPercent: number =
      maxAsNumber === 0 ? valueAsNumber : valueAsNumber * 100 / maxAsNumber;

    e.target.setAttribute('style', `--progress-percent:${calculatedPercent}%;`);

    onChange(e);
  }

  const sliderStyles: CSSPropertiesWithVars =
    { '--progress-percent': `${defaultValue}%` };

  return (
    <StyledRangeSlider
      className={className}
      isVertical={isVertical}
      data-testid='range-slider'
    >
      <input
        style={sliderStyles}
        ref={ref}
        defaultValue={defaultValue}
        type='range'
        onChange={changeHandler}
        {...props}
      />
    </StyledRangeSlider>
  );
});