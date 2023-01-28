import { render, screen } from "@testing-library/react";
import React from "react";
import { AudioControls } from "./AudioControls";

describe('AudioControls component tests', () => {
  afterEach(() => {
    window.innerWidth = 1024;
  });

  test('renders correctly', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showDownloadControl
        showPlaybackRateControl
        showLoopControl
      />
    );

    expect(screen.getAllByRole<HTMLButtonElement>('button')).toHaveLength(4);
    expect(screen.getAllByRole<HTMLButtonElement>('link')).toHaveLength(1);
  });

  test('renders with isPlayed & isMuted props', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
      />
    );

    expect(screen.queryAllByRole<HTMLButtonElement>('button')).toHaveLength(2);
  });

  test('when the screen size is less than 769 px volume controls are not rendered', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 576,
    });

    render(
      <AudioControls
        isPlayed
        isMuted
      />
    );

    expect(screen.queryByRole<HTMLButtonElement>('button', { name: 'mute' })).not.toBeInTheDocument();
  });

  test('snapshot with default prop values', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with modified screen width', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 576,
    });

    render(
      <AudioControls
        isPlayed
        isMuted
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with isPlayed & isMuted props', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with a modified volume prop', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        volume={33}
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showDownloadControl & downloadLink props', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showDownloadControl
        downloadLink='test.mp3'
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showPlaybackRateControl prop', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showPlaybackRateControl
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showPlaybackRateControl & playbackRate props', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showPlaybackRateControl
        playbackRate={1.25}
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showLoopControl prop', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showLoopControl
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showLoopControl & isLooped props', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showLoopControl
        isLooped
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with showNextAndPreviousControls prop', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showNextAndPreviousControls
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });

  test('snapshot with all the props affecting the UI', () => {
    render(
      <AudioControls
        isPlayed
        isMuted
        showDownloadControl
        showPlaybackRateControl
        showLoopControl
        showNextAndPreviousControls
        className='test'
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('audio-controls')).toMatchSnapshot();
  });
});
