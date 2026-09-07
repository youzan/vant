import {
  ref,
  computed,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
} from 'vue';
import { raf, cancelRaf, inBrowser } from '../utils';
import type { CurrentTime } from '../useCountDown';

export type UseTimerOptions = {
  time: number;
  maxTime?: number;
  millisecond?: boolean;
  onChange?: (current: CurrentTime) => void;
  onFinish?: () => void;
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function parseTime(time: number): CurrentTime {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);
  const milliseconds = Math.floor(time % SECOND);

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

function isSameSecond(time1: number, time2: number): boolean {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

export function useTimer(options: UseTimerOptions) {
  let rafId: number;
  let originTime: number;
  let counting: boolean;
  let deactivated: boolean;
  const maxTime = options.maxTime || 0;

  const elapsed = ref(options.time);
  const current = computed(() => parseTime(elapsed.value));

  const pause = () => {
    counting = false;
    cancelRaf(rafId);
  };

  const getCurrentElapsed = () => Date.now() - originTime;

  const setElapsed = (value: number) => {
    const clamped = maxTime > 0 ? Math.min(value, maxTime) : value;
    elapsed.value = clamped;
    options.onChange?.(current.value);

    if (maxTime > 0 && clamped >= maxTime) {
      pause();
      options.onFinish?.();
    }
  };

  const microTick = () => {
    rafId = raf(() => {
      // in case of call reset immediately after finish
      if (counting) {
        setElapsed(getCurrentElapsed());

        if (maxTime <= 0 || elapsed.value < maxTime) {
          microTick();
        }
      }
    });
  };

  const macroTick = () => {
    rafId = raf(() => {
      // in case of call reset immediately after finish
      if (counting) {
        const currentElapsed = getCurrentElapsed();
        const reachedMax = maxTime > 0 && currentElapsed >= maxTime;

        if (!isSameSecond(currentElapsed, elapsed.value) || reachedMax) {
          setElapsed(currentElapsed);
        }

        if (maxTime <= 0 || elapsed.value < maxTime) {
          macroTick();
        }
      }
    });
  };

  const tick = () => {
    // should not start counting in server
    // see: https://github.com/vant-ui/vant/issues/7807
    if (!inBrowser) {
      return;
    }

    if (options.millisecond) {
      microTick();
    } else {
      macroTick();
    }
  };

  const start = () => {
    if (!counting) {
      originTime = Date.now() - elapsed.value;
      counting = true;
      tick();
    }
  };

  const reset = (totalTime: number = options.time) => {
    pause();
    elapsed.value = totalTime;
  };

  onBeforeUnmount(pause);

  onActivated(() => {
    if (deactivated) {
      originTime = Date.now() - elapsed.value;
      counting = true;
      deactivated = false;
      tick();
    }
  });

  onDeactivated(() => {
    if (counting) {
      pause();
      deactivated = true;
    }
  });

  return {
    start,
    pause,
    reset,
    current,
  };
}
