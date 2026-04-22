import { raf, cancelRaf } from '../src/utils';

test('raf', async () => {
  const spy = rs.fn();
  raf(spy);

  expect(spy).toHaveBeenCalledTimes(1);
  cancelRaf(1);
});
