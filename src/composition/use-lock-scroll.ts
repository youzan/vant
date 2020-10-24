let count = 0;

const CLASSNAME = 'van-overflow-hidden';

export function useLockScroll(shouldLock: () => boolean) {
  const lock = () => {
    if (shouldLock()) {
      if (!count) {
        document.body.classList.add(CLASSNAME);
      }
      count++;
    }
  };

  const unlock = () => {
    if (shouldLock() && count) {
      count--;
      if (!count) {
        document.body.classList.remove(CLASSNAME);
      }
    }
  };

  return [lock, unlock];
}
