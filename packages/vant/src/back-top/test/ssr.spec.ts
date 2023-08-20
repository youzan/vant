/**
 * @vitest-environment node
 */
import { BackTop } from '..';
import { renderComponentToString } from '../../../test';

test('should render correctly when SSR', async () => {
  const html = await renderComponentToString(BackTop, {
    teleport: '',
  });
  expect(html).toMatchSnapshot();
});
