import { useScreenWidth } from "./useScreenWidth";
import { renderHook } from "@testing-library/react";

describe('useScreenWidth tests', () => {
  afterEach(() => {
    window.innerWidth = 1024;
  });

  test('returns the correct screen width', () => {
    const { result } = renderHook(() => useScreenWidth());

    expect(result.current).toBe(1024);
  });

  test('returns a modified value for screen width', () => {
    window.innerWidth = 543;
    const { result } = renderHook(() => useScreenWidth());

    expect(result.current).toBe(543);
  });
});
