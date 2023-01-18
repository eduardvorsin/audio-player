import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AdditionalControls } from "./AdditionalControls";

describe('AdditionalControls component tests', () => {
  test('renders correctly', () => {
    const mockFn = jest.fn();
    render(<AdditionalControls
      showDownloadControl
      showPlaybackRateControl
      showLoopControl
      changePlaybackRate={mockFn}
      changeLooping={mockFn}
    />);

    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  test('renders without passed props', () => {
    render(<AdditionalControls />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('when the playback rate button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();
    render(
      <AdditionalControls
        showPlaybackRateControl
        changePlaybackRate={mockFn}
      />
    );

    await user.click(screen.getByRole('button'));

    expect(mockFn).toBeCalledTimes(1);
  });

  test('when the loop button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();
    render(<AdditionalControls
      showLoopControl
      changeLooping={mockFn}
    />);

    await user.click(screen.getByRole('button'));

    expect(mockFn).toBeCalledTimes(1);
  });


  test('when the isLooped prop is passed, the text in the loop button changes to don\'t repeat the song', () => {
    render(<AdditionalControls
      isLooped
      showLoopControl
    />);

    expect(screen.getByRole('button')).toHaveTextContent('don\'t repeat the song');
  });

  test('playbackRate prop value correctly passed', () => {
    render(<AdditionalControls
      showPlaybackRateControl
      playbackRate={1.5}
    />);

    expect(screen.getByRole('button')).toHaveTextContent('1.5x');
  });

  test('downloadLink prop value correctly passed', () => {
    render(<AdditionalControls
      showDownloadControl
      downloadLink='abc'
    />);

    expect(screen.getByRole('link').href).toMatch(/(abc)+/i);
  });

  test('snapshot with default prop values', () => {
    render(
      <AdditionalControls />
    );

    expect(screen.getByTestId('additional-controls')).toMatchSnapshot();
  });

  test('snapshot with showPlaybackRateControl prop', () => {
    render(
      <AdditionalControls
        showPlaybackRateControl
      />
    );

    expect(screen.getByTestId('additional-controls')).toMatchSnapshot();
  });

  test('snapshot with showPlaybackRateControl & playbackRate props', () => {
    render(
      <AdditionalControls
        showPlaybackRateControl
        playbackRate={1.5}
      />
    );

    expect(screen.getByTestId('additional-controls')).toMatchSnapshot();
  });

  test('snapshot with showLoopControl prop', () => {
    render(
      <AdditionalControls
        showLoopControl
      />
    );

    expect(screen.getByTestId('additional-controls')).toMatchSnapshot();
  });

  test('snapshot showLoopControl & isLooped props', () => {
    render(
      <AdditionalControls
        showLoopControl
        isLooped
      />
    );

    expect(screen.getByTestId('additional-controls')).toMatchSnapshot();
  });

  test('snapshot showDownloadControl & downloadLink props', () => {
    render(
      <AdditionalControls
        showDownloadControl
        downloadLink='test.ogg'
      />
    );

    expect(screen.getByTestId('additional-controls')).toMatchSnapshot();
  });

  test('snapshot with all the props affecting the UI', () => {
    render(
      <AdditionalControls
        downloadLink='test.wav'
        showDownloadControl
        showPlaybackRateControl
        showLoopControl
        className='test'
      />
    );

    expect(screen.getByTestId('additional-controls')).toMatchSnapshot();
  });
});
