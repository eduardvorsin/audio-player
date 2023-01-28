import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { VolumeControls } from "./VolumeControls";

describe('Volume Controls component tests', () => {
  test('renders correctly', () => {
    const mockClickHandler = jest.fn<
      void, [React.MouseEvent<HTMLButtonElement>]
    >();
    const mockChangeHandler = jest.fn<
      void, [React.ChangeEvent<HTMLInputElement>]
    >();
    render(
      <VolumeControls
        isMuted
        volume={30}
        onVolumeChange={mockChangeHandler}
        toggleMuting={mockClickHandler}
      />
    );

    expect(screen.getByRole<HTMLButtonElement>('button')).toBeInTheDocument();
    expect(screen.getByRole<HTMLInputElement>('slider')).toBeInTheDocument();
  });

  test('renders with isMuted prop', () => {
    render(
      <VolumeControls
        isMuted
      />
    );

    expect(screen.getByRole<HTMLButtonElement>('button')).toHaveTextContent('mute');
    expect(screen.getByRole<HTMLInputElement>('slider')).toHaveValue('50');
  });

  test('when the button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockClickHandler = jest.fn<
      void, [React.MouseEvent<HTMLButtonElement>]
    >();
    render(
      <VolumeControls
        isMuted
        toggleMuting={mockClickHandler}
      />
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button'));

    expect(mockClickHandler).toBeCalledTimes(1);
  });

  test('when the value of the range slider changed the mock function is triggered', () => {
    const mockChangeHandler = jest.fn<
      void, [React.ChangeEvent<HTMLInputElement>]
    >();
    render(
      <VolumeControls
        isMuted
        onVolumeChange={mockChangeHandler} />
    );

    fireEvent.change(screen.getByRole<HTMLInputElement>('slider'), { target: { value: 51 } });

    expect(mockChangeHandler).toBeCalledTimes(1);
  });

  test('when the isMuted prop is passed, the text in the button changes to unmute', () => {
    render(
      <VolumeControls isMuted />
    );

    expect(screen.getByRole<HTMLButtonElement>('button')).toHaveTextContent(/unmute/i);
  });

  test('snapshot with default prop values', () => {
    render(
      <VolumeControls
        isMuted
      />
    );

    expect(screen.getByTestId<HTMLDivElement>('volume-controls')).toMatchSnapshot();
  });

  test('snapshot with all the passed props', () => {
    render(
      <VolumeControls isMuted />
    );

    expect(screen.getByTestId<HTMLDivElement>('volume-controls')).toMatchSnapshot();
  });
});
