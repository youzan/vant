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
