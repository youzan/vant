import Cell from '..';
import { mount } from '../../../test/utils';

test('click event', () => {
  const click = jest.fn();
  const wrapper = mount(Cell, {
    context: {
      on: {
        click
      }
    }
  });

  wrapper.trigger('click');
  expect(click).toHaveBeenCalled();
});

test('arrow direction', () => {
  const wrapper = mount(Cell, {
    propsData: {
      isLink: true,
      arrowDirection: 'down'
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render slot', () => {
  const wrapper = mount({
    template: `
      <cell>
        <template v-slot:title>Custom Title</template>
        <template v-slot:label>Custom Label</template>
        <template v-slot:extra>Custom Extra</template>
      </cell>
    `,
    components: {
      Cell
    }
  });

  expect(wrapper).toMatchSnapshot();
});
