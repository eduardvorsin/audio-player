import { useScreenWidth } from "./useScreenWidth";
import { renderHook } from "@testing-library/react";

interface UseScreenWidthProps {
  screenWidth: number,
};

type UseScreenWidthReturnType = ReturnType<typeof useScreenWidth>;

describe('useScreenWidth tests', () => {
  beforeEach(() => {
    window.innerWidth = 1024;
  });

  test('returns default screen width', () => {
    const { result } = renderHook<UseScreenWidthReturnType, UseScreenWidthProps>(() => useScreenWidth());
    expect(result.current).toBe(1024);
  });

  test('returns a modified value for screen width', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: false,
      configurable: true,
      value: 543,
    });

    const { result } = renderHook<UseScreenWidthReturnType, UseScreenWidthProps>(() => useScreenWidth());
    expect(result.current).toBe(543);
  });
});
