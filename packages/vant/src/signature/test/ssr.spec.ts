/**
 * @vitest-environment node
 */
import { Signature } from '..';
import { renderComponentToString } from '../../../test';

test('should render correctly when SSR', async () => {
  const html = await renderComponentToString(Signature);
  expect(html).toMatchSnapshot();
});
