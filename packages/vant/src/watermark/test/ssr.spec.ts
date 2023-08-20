/**
 * @vitest-environment node
 */
import { Watermark } from '..';
import { renderComponentToString } from '../../../test';

test('should render correctly when SSR', async () => {
  const html = await renderComponentToString(Watermark);
  expect(html).toMatchSnapshot();
});
