import { later } from '../../../test';
import { callInterceptor } from '../interceptor';

test('#callInterceptor', async () => {
  const done = jest.fn();
  callInterceptor({ done });
  expect(done).toHaveBeenCalledTimes(1);

  callInterceptor({
    interceptor: () => false,
    done,
  });
  expect(done).toHaveBeenCalledTimes(1);

  callInterceptor({
    interceptor: () => true,
    done,
  });
  expect(done).toHaveBeenCalledTimes(2);

  callInterceptor({
    interceptor: () => Promise.resolve(false),
    done,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(2);

  callInterceptor({
    interceptor: () => Promise.resolve(true),
    done,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(3);

  callInterceptor({
    interceptor: () => Promise.reject(),
    done,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(3);

  callInterceptor({
    interceptor: (...args) => {
      expect(args).toEqual(['foo']);
    },
    args: ['foo'],
    done,
  });
  expect(done).toHaveBeenCalledTimes(3);
});
