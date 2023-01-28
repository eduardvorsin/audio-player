import { render, screen } from "@testing-library/react";
import { TrackInfo } from "./TrackInfo";

describe('Track Info component tests', () => {
  test('renders correctly', () => {
    render(<TrackInfo
      trackName='track'
      trackArtist='artist'
    />);

    expect(screen.getByText<HTMLParagraphElement>('track')).toBeInTheDocument();
    expect(screen.getByText<HTMLParagraphElement>('artist')).toBeInTheDocument();
  });

  test('className is assigned correctly', () => {
    render(
      <TrackInfo
        trackName='track'
        trackArtist='artist'
        className='test'
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('track-info')).toHaveClass('test');
  });

  test('snapshot with default className prop', () => {
    render(
      <TrackInfo
        trackName='track'
        trackArtist='artist'
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('track-info')).toMatchSnapshot();
  });

  test('snapshot with all the passed props', () => {
    render(
      <TrackInfo
        trackName='abc'
        trackArtist='ccb'
        className='test'
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('track-info')).toMatchSnapshot();
  });
});
