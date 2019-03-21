import { mount } from '../../../test/utils';
import Badge from '..';
import BadgeGroup from '../../badge-group';

test('event', () => {
  const onClick = jest.fn();
  const onChange = jest.fn();
  const wrapper = mount({
    template: `
      <badge-group @change="onChange">
        <badge @click="onClick">Text</badge>
      </badge-group>
    `,
    components: {
      Badge,
      BadgeGroup
    },
    methods: {
      onClick,
      onChange
    }
  });

  wrapper.find('.van-badge').trigger('click');
  expect(onClick).toHaveBeenCalledWith(0);
  expect(onChange).toHaveBeenCalledWith(0);
  wrapper.vm.$destroy();
});

test('without parent', () => {
  const consoleError = console.error;
  try {
    console.error = jest.fn();
    mount(Badge);
  } catch (err) {
    console.error = consoleError;
    expect(err).toBeTruthy();
  }
});
