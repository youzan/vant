import { raf, cancelRaf } from '../utils';

test('raf', async () => {
  const spy = jest.fn();
  raf(spy);

  expect(spy).toHaveBeenCalledTimes(1);
  cancelRaf(1);
});
