import { raf, cancelRaf } from '../utils';

test('raf', async () => {
  const spy = jest.fn();
  raf(spy);

  // await later(50);
  expect(spy).toHaveBeenCalledTimes(1);
  cancelRaf(1);
});
