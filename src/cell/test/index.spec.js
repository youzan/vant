import Cell from '..';
import CellGroup from '../../cell-group';
import { mount } from '../../../test';

test('click event', () => {
  const click = jest.fn();
  const wrapper = mount(Cell, {
    context: {
      on: {
        click,
      },
    },
  });

  wrapper.trigger('click');
  expect(click).toHaveBeenCalled();
});

test('arrow direction', () => {
  const wrapper = mount(Cell, {
    propsData: {
      isLink: true,
      arrowDirection: 'down',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('render slot', () => {
  const wrapper = mount({
    template: `
      <cell>
        <template v-slot:icon>Custom Icon</template>
        <template v-slot:title>Custom Title</template>
        <template v-slot:label>Custom Label</template>
        <template v-slot:extra>Custom Extra</template>
      </cell>
    `,
    components: {
      Cell,
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('title-style prop', () => {
  const wrapper = mount(Cell, {
    propsData: {
      title: 'title',
      titleStyle: {
        color: 'red',
      },
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('CellGroup title slot', () => {
  const wrapper = mount(CellGroup, {
    scopedSlots: {
      title: () => 'CustomTitle',
    },
  });

  expect(wrapper).toMatchSnapshot();
});

test('icon-prefix prop', () => {
  const wrapper = mount(Cell, {
    propsData: {
      iconPrefix: 'my-icon',
      icon: 'success',
    },
  });

  expect(wrapper).toMatchSnapshot();
});
