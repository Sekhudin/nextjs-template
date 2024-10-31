import React from "react";

/**
 * useMutationObserver, hook to observe when any mutation in component
 * @param ref
 * @param callback
 * @param options
 */
function useMutationObserver(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: MutationCallback,
  options: MutationObserverInit = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  }
) {
  React.useEffect(() => {
    if (ref.current) {
      const observer = new MutationObserver(callback);
      observer.observe(ref.current, options);
    }
  }, [ref, callback, options]);
}

export default useMutationObserver;
