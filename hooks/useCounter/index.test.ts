import { act, renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import useCounter from "./index";

describe.concurrent("useCounter", () => {
  it("Count should be zero when no argument is passed to the hook", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current[0]).toBe(0);
  });

  it("Count should be zero when zero is passed as the hook parameter", () => {
    const { result } = renderHook(() => useCounter(0));
    expect(result.current[0]).toBe(0);
  });

  it("Should increment count by 1 when no argument is passed to the increment method", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => {
      result.current[1].increment();
    });
    expect(result.current[0]).toBe(1);
  });

  it("Should increment count by specified value when a value is passed to the increment method", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => {
      result.current[1].increment(5);
    });
    expect(result.current[0]).toBe(5);
  });

  it("Should decrement count by 1 when no argument is passed to the decrement method", () => {
    const { result } = renderHook(() => useCounter(1));
    act(() => {
      result.current[1].decrement();
    });
    expect(result.current[0]).toBe(0);
  });

  it("Should decrement count by specified value when a value is passed to the decrement method", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current[1].decrement(5);
    });
    expect(result.current[0]).toBe(0);
  });

  it("Should reset count to zero when reset method is invoked without any arguments", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current[1].increment(5);
      result.current[1].decrement(2);
      result.current[1].reset();
    });
    expect(result.current[0]).toBe(0);
  });

  it("Should reset count to the initial value when reset method is invoked without any arguments", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current[1].increment(5);
      result.current[1].decrement(2);
      result.current[1].reset();
    });
    expect(result.current[0]).toBe(5);
  });

  it("Should reset count to custom value when reset method is invoked with a custom", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current[1].increment(5);
      result.current[1].decrement(2);
      result.current[1].reset(10);
    });
    expect(result.current[0]).toBe(10);
  });

  it("Should return the correct count after a series of increment and decrement method invocations", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => {
      result.current[1].increment(5);
      result.current[1].decrement(2);
      result.current[1].increment(8);
      result.current[1].decrement(3);
    });
    expect(result.current[0]).toBe(8);
  });
});
