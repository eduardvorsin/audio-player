import { render, screen } from "@testing-library/react";
import { AudioControls } from "./AudioControls";

describe('AudioControls component tests', () => {
  afterEach(() => {
    window.innerWidth = 1024;
  });

  test('renders correctly', () => {
    render(
      <AudioControls
        showDownloadControl
        showPlaybackRateControl
        showLoopControl
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(5);
  });

  test('renders without passed props', () => {
    render(
      <AudioControls />
    );

    expect(screen.queryAllByRole('button')).toHaveLength(2);
  });

  test('when the screen size is less than 769 px volume controls are not rendered', () => {
    window.innerWidth = 576;
    render(
      <AudioControls />
    );

    expect(screen.queryByRole('button', { name: 'mute' })).not.toBeInTheDocument();
  });

  test('snapshot with default prop values', () => {
    render(
      <AudioControls />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with isPlayed & isMuted props', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with a modified volume prop', () => {
    render(
      <AudioControls
        volume={33}
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showDownloadControl & downloadLink props', () => {
    render(
      <AudioControls
        showDownloadControl
        downloadLink='test.mp3'
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showPlaybackRateControl prop', () => {
    render(
      <AudioControls
        showPlaybackRateControl
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showPlaybackRateControl & playbackRate props', () => {
    render(
      <AudioControls
        showPlaybackRateControl
        playbackRate={1.25}
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showLoopControl prop', () => {
    render(
      <AudioControls
        showLoopControl
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showLoopControl & isLooped props', () => {
    render(
      <AudioControls
        showLoopControl
        isLooped
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showNextAndPreviousControls prop', () => {
    render(
      <AudioControls
        showNextAndPreviousControls
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with all the props affecting the UI', () => {
    render(
      <AudioControls
        showDownloadControl
        showPlaybackRateControl
        showLoopControl
        showNextAndPreviousControls
        className='test'
      />
    );

    expect(screen.getByTestId('audio-controls')).toMatchSnapshot();
  });
});
