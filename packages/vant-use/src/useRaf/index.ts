import { inBrowser } from '..';

export function useRaf(fn: FrameRequestCallback, interval = 0): () => void {
  if (inBrowser) {
    let start: number;
    const disposesId: number[] = [];
    let isStopped = false;

    const frameWrapper = (timestamp: number) => {
      if (isStopped) return;
      if (start === undefined) {
        start = timestamp;
      } else if (timestamp - start > interval) {
        fn(timestamp);
        start = timestamp;
      }
      disposesId.push(requestAnimationFrame(frameWrapper));
    };
    disposesId.push(requestAnimationFrame(frameWrapper));

    return () => {
      isStopped = true;
      disposesId.forEach((id) => cancelAnimationFrame(id));
      disposesId.length = 0;
    };
  }
  return () => {};
}
