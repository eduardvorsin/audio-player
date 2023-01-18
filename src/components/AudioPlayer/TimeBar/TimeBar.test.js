import { render, screen } from "@testing-library/react";
import { TimeBar } from "./TimeBar";

describe('TimeBar component tests', () => {
  test('renders correctly', () => {
    render(
      <TimeBar
        currentTime={'2:43'}
        duration={'5:21'}
      />
    );

    expect(screen.getByText('2:43/5:21')).toBeInTheDocument();
  });

  test('renders without passed props', () => {
    render(<TimeBar />);

    expect(screen.getByText('00:00/00:00')).toBeInTheDocument();
  });

  test('snapshot with default prop values', () => {
    render(
      <TimeBar />
    );

    expect(screen.getByTestId('time-bar')).toMatchSnapshot();
  });

  test('snapshot with all the passed props', () => {
    render(
      <TimeBar
        duration='10:30'
        currentTime='5:26'
        className='test'
      />
    );

    expect(screen.getByTestId('time-bar')).toMatchSnapshot();
  });
});
