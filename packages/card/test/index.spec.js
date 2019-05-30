import Card from '..';
import { mount } from '../../../test/utils';

test('render origin-price slot', () => {
  const wrapper = mount({
    template: `
      <card>
        <template v-slot:origin-price>Custom Origin Price</template>
      </card>
    `,
    components: {
      Card
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('render bottom slot', () => {
  const wrapper = mount({
    template: `
      <card :price="100">
        <template v-slot:bottom>Custom Bottom</template>
      </card>
    `,
    components: {
      Card
    }
  });

  expect(wrapper).toMatchSnapshot();
});
