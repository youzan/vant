import { inBrowser } from '..';
export function useRaf(fn: FrameRequestCallback, interval = 0): () => void {
  if (inBrowser) {
    let start: number;
    const id = requestAnimationFrame(function wrappedFn(
      timestamp = Date.now(),
    ) {
      if (start === undefined) {
        start = timestamp;
      } else if (timestamp - start === interval) {
        fn(timestamp);
        start = timestamp;
      }
      requestAnimationFrame(wrappedFn);
    });
    return () => cancelAnimationFrame(id);
  }
  return () => {};
}
