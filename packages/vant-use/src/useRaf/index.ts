import { inBrowser } from '..';

interface UseRafOptions {
  interval?: number;
  isLoop?: boolean;
}

export function useRaf(
  fn: FrameRequestCallback,
  options?: UseRafOptions,
): () => void {
  if (inBrowser) {
    const { interval = 0, isLoop = false } = options || {};
    let start: number;
    const disposesId: number[] = [];
    let isStopped = false;

    const stop = () => {
      isStopped = true;
      disposesId.forEach((id) => cancelAnimationFrame(id));
      disposesId.length = 0;
    };
    const frameWrapper = (timestamp: number) => {
      if (isStopped) return;
      if (start === undefined) {
        start = timestamp;
      } else if (timestamp - start > interval) {
        fn(timestamp);
        start = timestamp;
        if (!isLoop) stop();
      }
      disposesId.push(requestAnimationFrame(frameWrapper));
    };
    disposesId.push(requestAnimationFrame(frameWrapper));

    return stop;
  }
  return () => {};
}
