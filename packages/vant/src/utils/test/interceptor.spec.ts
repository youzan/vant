import { later } from '../../../test';
import { callInterceptor } from '../interceptor';

test('callInterceptor', async () => {
  const done = vi.fn();
  const canceled = vi.fn();
  const error = vi.fn();

  callInterceptor(undefined, { done, canceled, error });
  expect(done).toHaveBeenCalledTimes(1);
  expect(canceled).toHaveBeenCalledTimes(0);
  expect(error).toHaveBeenCalledTimes(0);

  callInterceptor(() => false, {
    done,
    canceled,
    error,
  });
  expect(done).toHaveBeenCalledTimes(1);
  expect(canceled).toHaveBeenCalledTimes(1);
  expect(error).toHaveBeenCalledTimes(0);

  callInterceptor(() => true, {
    done,
    canceled,
    error,
  });
  expect(done).toHaveBeenCalledTimes(2);
  expect(canceled).toHaveBeenCalledTimes(1);
  expect(error).toHaveBeenCalledTimes(0);

  callInterceptor(() => Promise.resolve(false), {
    done,
    canceled,
    error,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(2);
  expect(canceled).toHaveBeenCalledTimes(2);
  expect(error).toHaveBeenCalledTimes(0);

  callInterceptor(() => Promise.resolve(true), {
    done,
    canceled,
    error,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(3);
  expect(canceled).toHaveBeenCalledTimes(2);
  expect(error).toHaveBeenCalledTimes(0);

  callInterceptor(() => Promise.reject(), {
    done,
    canceled,
    error,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(3);
  expect(canceled).toHaveBeenCalledTimes(2);
  expect(error).toHaveBeenCalledTimes(1);

  callInterceptor(
    (...args) => {
      expect(args).toEqual(['foo']);
      return false;
    },
    {
      args: ['foo'],
      done,
      canceled,
      error,
    },
  );

  expect(done).toHaveBeenCalledTimes(3);
  expect(canceled).toHaveBeenCalledTimes(3);
  expect(error).toHaveBeenCalledTimes(1);
});
