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
    let isStopped = false;
    let rafId: number;

    const stop = () => {
      isStopped = true;
      cancelAnimationFrame(rafId);
    };
    const frameWrapper = (timestamp: number) => {
      if (isStopped) return;
      if (start === undefined) {
        start = timestamp;
      } else if (timestamp - start > interval) {
        fn(timestamp);
        start = timestamp;
        if (!isLoop) {
          stop();
          return;
        }
      }
      rafId = requestAnimationFrame(frameWrapper);
    };
    rafId = requestAnimationFrame(frameWrapper);

    return stop;
  }
  return () => {};
}
