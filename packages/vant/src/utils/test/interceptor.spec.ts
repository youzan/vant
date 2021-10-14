import { later } from '../../../test';
import { callInterceptor } from '../interceptor';

test('callInterceptor', async () => {
  const done = jest.fn();
  callInterceptor(undefined, { done });
  expect(done).toHaveBeenCalledTimes(1);

  callInterceptor(() => false, {
    done,
  });
  expect(done).toHaveBeenCalledTimes(1);

  callInterceptor(() => true, {
    done,
  });
  expect(done).toHaveBeenCalledTimes(2);

  callInterceptor(() => Promise.resolve(false), {
    done,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(2);

  callInterceptor(() => Promise.resolve(true), {
    done,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(3);

  callInterceptor(() => Promise.reject(), {
    done,
  });
  await later();
  expect(done).toHaveBeenCalledTimes(3);

  callInterceptor(
    (...args) => {
      expect(args).toEqual(['foo']);
      return false;
    },
    {
      args: ['foo'],
      done,
    }
  );

  expect(done).toHaveBeenCalledTimes(3);
});
