import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { MainControls } from "./MainControls";

describe('Volume Controls component tests', () => {
  test('renders correctly', () => {
    const mockFn = jest.fn<void, [React.MouseEvent<HTMLButtonElement>]>();
    render(
      <MainControls
        togglePlaying={mockFn}
        onClickPrevious={mockFn}
        onClickNext={mockFn}
        showNextAndPreviousControls
        isPlayed
      />
    );

    expect(screen.getAllByRole<HTMLButtonElement>('button')).toHaveLength(3);
  });

  test('renders with isPlayed prop', () => {
    render(
      <MainControls
        isPlayed
      />
    );

    expect(screen.getAllByRole<HTMLButtonElement>('button')).toHaveLength(1);
  });

  test('when the play button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn<void, [React.MouseEvent<HTMLButtonElement>]>();
    render(
      <MainControls
        isPlayed
        togglePlaying={mockFn}
      />
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button'));

    expect(mockFn).toBeCalledTimes(1);
  });

  test('when the prev button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn<void, [React.MouseEvent<HTMLButtonElement>]>();
    render(
      <MainControls
        isPlayed
        onClickPrevious={mockFn}
        showNextAndPreviousControls
      />
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'prev track' }));

    expect(mockFn).toBeCalledTimes(1);
  });

  test('when the next button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn<void, [React.MouseEvent<HTMLButtonElement>]>();
    render(
      <MainControls
        isPlayed
        onClickNext={mockFn}
        showNextAndPreviousControls
      />
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button', { name: 'next track' }));

    expect(mockFn).toBeCalledTimes(1);
  });

  test('when the isPlayed prop is passed, the text in the button changes to pause', () => {
    render(
      <MainControls isPlayed />
    );

    expect(screen.getByRole<HTMLButtonElement>('button')).toHaveTextContent(/pause/i);
  });

  test('snapshot with default prop values', () => {
    render(
      <MainControls
        isPlayed
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('main-controls')).toMatchSnapshot();
  });

  test('snapshot with showNextAndPreviousControls prop', () => {
    render(
      <MainControls
        isPlayed
        showNextAndPreviousControls
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('main-controls')).toMatchSnapshot();
  });

  test('snapshot with isPlayed prop', () => {
    render(
      <MainControls
        isPlayed
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('main-controls')).toMatchSnapshot();
  });
});
