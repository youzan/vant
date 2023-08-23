import { inBrowser } from '..';

export function useRaf(fn: FrameRequestCallback, interval = 0): () => void {
  if (inBrowser) {
    let start: number;
    const disposesId: number[] = [];

    const myFrame = (timestamp: number) => {
      if (start === undefined) {
        start = timestamp;
      } else if (timestamp - start > interval) {
        fn(timestamp);
        start = timestamp;
      }
      disposesId.push(requestAnimationFrame(myFrame));
    };
    disposesId.push(requestAnimationFrame(myFrame));

    return () => {
      disposesId.forEach((id) => cancelAnimationFrame(id));
      disposesId.length = 0;
    };
  }
  return () => {};
}
