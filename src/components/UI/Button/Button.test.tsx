import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
import { ReactComponent as MockIcon } from '../../../assets/images/icons/play.svg';

describe('Button component tests', () => {

  test('renders correctly', () => {
    render(
      <Button>
        test text
      </Button>
    );

    expect(screen.getByRole<HTMLButtonElement>('button')).toBeInTheDocument();
  });

  test('when the button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockClickHandler = jest.fn<void, [React.MouseEvent<HTMLButtonElement>]>();
    render(
      <Button onClick={mockClickHandler}>
        test text
      </Button>
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button'));

    expect(mockClickHandler).toBeCalledTimes(1);
  });

  test('when the button is pressed through the keyboard, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockKeydownHandler = jest.fn<void, [React.KeyboardEvent<HTMLButtonElement>]>();
    render(
      <Button onKeyDown={mockKeydownHandler}>
        test text
      </Button>
    );

    await user.click(screen.getByRole<HTMLButtonElement>('button'));
    await user.keyboard('b');
    await user.keyboard('c');

    expect(mockKeydownHandler).toBeCalledTimes(2);
  });

  test('if the startIcon prop is passed, it renders the icon before the text', () => {
    render(
      <Button startIcon={<MockIcon title='play icon' />}>
        test text
      </Button>
    );

    expect(screen.getByTitle<HTMLElement>(/play icon/i)).toBeInTheDocument();
  });

  test('if the startIcon prop is passed, it renders the icon after the text', () => {
    render(
      <Button endIcon={<MockIcon title='play icon' />}>
        test text
      </Button>
    );

    expect(screen.getByTitle<HTMLElement>(/stop icon/i)).toBeInTheDocument();
  });

  test('if startIcon and endIcon prop are passed', () => {
    render(
      <Button
        endIcon={<MockIcon title='play icon' />}
        startIcon={<MockIcon title='stop icon' />}
      >
        test text
      </Button>
    );

    expect(screen.getByTitle<HTMLElement>(/play icon/i)).toBeInTheDocument();
    expect(screen.getByTitle<HTMLElement>(/stop icon/i)).toBeInTheDocument();
  });

  test('className is assigned correctly', () => {
    render(
      <Button
        className={'test'}
      >
        test text
      </Button>
    );

    expect(screen.getByRole<HTMLButtonElement>('button')).toHaveClass('test');
  });

  test('snapshot with default prop values', () => {
    render(
      <Button>
        test text
      </Button>
    );

    expect(screen.getByTestId<HTMLButtonElement>('button')).toMatchSnapshot();
  });

  test('snapshot with startIcon prop', () => {
    render(
      <Button
        startIcon={<MockIcon title='start icon' />}
      >
        test text
      </Button>
    );

    expect(screen.getByTestId<HTMLButtonElement>('button')).toMatchSnapshot();
  });


  test('snapshot with endIcon prop', () => {
    render(
      <Button
        endIcon={<MockIcon title='end icon' />}
      >
        test text
      </Button>
    );

    expect(screen.getByTestId<HTMLButtonElement>('button')).toMatchSnapshot();
  });

  test('snapshot with startIcon & endIcon props', () => {
    render(
      <Button
        startIcon={<MockIcon title='start icon' />}
        endIcon={<MockIcon title='end icon' />}
      >
        test text
      </Button>
    );

    expect(screen.getByTestId<HTMLButtonElement>('button')).toMatchSnapshot();
  });
});
