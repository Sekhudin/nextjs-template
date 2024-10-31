"use client";
import React from "react";

/**
 * Custom hook to run when mounted
 * @param callback - The callback to run when the component is mounted
 * @returns { void } - void
 */
function useMounted(callback: React.EffectCallback): void {
  React.useEffect(callback, []);
}

export default useMounted;
