import { raf, cancelRaf } from '../src/utils';

test('raf', async () => {
  const spy = vi.fn();
  raf(spy);

  expect(spy).toHaveBeenCalledTimes(1);
  cancelRaf(1);
});
