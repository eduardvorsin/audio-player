import { render, screen } from "@testing-library/react";
import { TrackInfo } from "./TrackInfo";

describe('Track Info component tests', () => {
  test('renders correctly', () => {
    render(<TrackInfo
      trackName='track'
      trackArtist='artist'
    />);

    expect(screen.getByText('track')).toBeInTheDocument();
    expect(screen.getByText('artist')).toBeInTheDocument();
  });

  test('renders without passed props', () => {
    render(<TrackInfo />);

    expect(screen.getByText('trackName')).toBeInTheDocument();
    expect(screen.getByText('trackArtist')).toBeInTheDocument();
  });

  test('className is assigned correctly', () => {
    render(
      <TrackInfo
        className='test'
      />
    );

    expect(screen.getByTestId('track-info')).toHaveClass('test');
  });

  test('snapshot with default prop values', () => {
    render(
      <TrackInfo />
    );

    expect(screen.getByTestId('track-info')).toMatchSnapshot();
  });

  test('snapshot with all the passed props', () => {
    render(
      <TrackInfo
        trackName='abc'
        trackArtist='ccb'
        className='test'
      />
    );

    expect(screen.getByTestId('track-info')).toMatchSnapshot();
  });
});
