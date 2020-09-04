import { isPromise, noop } from '.';

export function callInterceptor(options: {
  interceptor?: (...args: any[]) => Promise<boolean> | boolean;
  done: () => void;
  args: any[];
}) {
  const { interceptor, args, done } = options;

  if (interceptor) {
    const returnVal = interceptor(...args);

    if (isPromise(returnVal)) {
      returnVal
        .then((value) => {
          if (value) {
            done();
          }
        })
        .catch(noop);
    } else if (returnVal) {
      done();
    }
  } else {
    done();
  }
}
