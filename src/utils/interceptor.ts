import { isPromise, noop } from '.';

export function callInterceptor(options: {
  interceptor?: (...args: any[]) => Promise<boolean> | boolean;
  args: any[];
  done: () => void;
  canceled?: () => void;
}) {
  const { interceptor, args, done, canceled } = options;

  if (interceptor) {
    const returnVal = interceptor(...args);

    if (isPromise(returnVal)) {
      returnVal
        .then((value) => {
          if (value) {
            done();
          } else if (canceled) {
            canceled();
          }
        })
        .catch(noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}
