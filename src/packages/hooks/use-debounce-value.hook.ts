"use client";
import React from "react";
import useUpdated from "./use-updated.hook";

/**
 * useDebounceValue, handle value with debounce
 * @param value - value to debounce
 * @param delay - debounce delay
 */
function useDebounceValue<T>(value: T, delay = 750) {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  useUpdated(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounceValue;
