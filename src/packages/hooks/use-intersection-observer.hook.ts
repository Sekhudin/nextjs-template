"use client";
import React from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const defaultArgs: Args = {
  threshold: 0,
  root: null,
  rootMargin: "0%",
  freezeOnceVisible: false,
};

/**
 * useIntersectionObserver, hooks to handle Intersection Observer
 * @param ref - ref element to listen
 * @param args - intersection observer args
 */
function useIntersectionObserver(ref: React.RefObject<Element>, args: Args = defaultArgs) {
  const { threshold, root, rootMargin, freezeOnceVisible } = args;
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>();
  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]) => {
    setEntry(entry);
  };

  React.useEffect(() => {
    const node = ref?.current;
    const hasIOSupport = !!window.IntersectionObserver;
    if (!hasIOSupport || frozen || !node) return;
    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
}

export default useIntersectionObserver;
