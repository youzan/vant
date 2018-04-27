import { renderToString } from '@vue/server-test-utils';
import '../docs/demos/common';

export default function(component) {
  it(`renders ${component} correctly`, () => {
    const demo = require(`../docs/demos/views/${component}.vue`).default;
    const wrapper = renderToString(demo);
    expect(wrapper).toMatchSnapshot();
  });
}
