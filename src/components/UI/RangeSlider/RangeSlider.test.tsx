import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RangeSlider } from "./RangeSlider";

describe('Range slider component tests', () => {

  test('renders correctly', () => {
    render(<RangeSlider />);
    expect(screen.getByRole<HTMLInputElement>('slider')).toBeInTheDocument();
  });

  test('at the onChange event, the mock function is triggered', () => {
    const mockFn = jest.fn<void, [React.ChangeEvent<HTMLInputElement>]>();

    render(
      <RangeSlider
        onChange={mockFn}
      />
    );

    fireEvent.change(screen.getByRole<HTMLInputElement>('slider'), { target: { value: 50 } });
    expect(screen.getByRole<HTMLInputElement>('slider')).toHaveValue('50');
  });

  test('if the isVertical prop is passed', () => {
    render(
      <RangeSlider isVertical />
    );
    expect(screen.getByRole<HTMLInputElement>('slider')).toHaveStyle('writing-mode: bt-lr');
  });

  test('className is assigned correctly', () => {
    render(
      <RangeSlider
        className='test'
      />
    );
    expect(screen.getByTestId<HTMLDivElement>('range-slider')).toHaveClass('test');
  });

  test('snapshot with default prop values', () => {
    render(
      <RangeSlider />
    );

    expect(screen.getByTestId<HTMLDivElement>('range-slider')).toMatchSnapshot();
  });

  test('snapshot with vertical slider', () => {
    render(
      <RangeSlider isVertical />
    );

    expect(screen.getByTestId<HTMLDivElement>('range-slider')).toMatchSnapshot();
  });
});
