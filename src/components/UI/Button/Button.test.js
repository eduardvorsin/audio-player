import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Button } from "./Button";
import { ReactComponent as MockIcon } from '../../../assets/images/icons/play.svg';

describe('Button component tests', () => {

  test('renders correctly', () => {
    render(
      <Button>
        test text
      </Button>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('if a href prop is passed renders the link', () => {
    render(<Button href='#'>test text</Button>);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  test('when the button is clicked, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();
    render(
      <Button onClick={mockFn}>
        test text
      </Button>
    );

    await user.click(screen.getByRole('button'));
    expect(mockFn).toBeCalledTimes(1);
  });

  test('when the button is pressed through the keyboard, the mock function is triggered', async () => {
    const user = userEvent.setup();
    const mockFn = jest.fn();
    render(
      <Button onKeyDown={mockFn}>
        test text
      </Button>
    );

    await user.click(screen.getByRole('button'));
    await user.keyboard('b');
    await user.keyboard('c');
    expect(mockFn).toBeCalledTimes(2);
  });

  test('if the startIcon prop is passed, it renders the icon before the text', () => {
    render(
      <Button startIcon={<MockIcon title='play icon' />}>
        test text
      </Button>
    );

    expect(screen.getByTitle(/play icon/i)).toBeInTheDocument();
  });

  test('if the startIcon prop is passed, it renders the icon after the text', () => {
    render(
      <Button endIcon={<MockIcon title='stop icon' />}>
        test text
      </Button>
    );

    expect(screen.getByTitle(/stop icon/i)).toBeInTheDocument();
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

    expect(screen.getByTitle(/play icon/i)).toBeInTheDocument();
    expect(screen.getByTitle(/stop icon/i)).toBeInTheDocument();
  });

  test('className is assigned correctly', () => {
    render(
      <Button
        className={'test'}
      >
        test text
      </Button>
    );

    expect(screen.getByRole('button')).toHaveClass('test');
  });
});
