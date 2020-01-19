import NoticeBar from '..';
import { mount } from '../../../test';

test('click event', () => {
  const wrapper = mount(NoticeBar);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')[0][0]).toBeTruthy();
});

test('close event', () => {
  const wrapper = mount(NoticeBar, {
    propsData: {
      mode: 'closeable',
    },
  });
  const close = wrapper.find('.van-notice-bar__right-icon');

  close.trigger('click');
  expect(wrapper.emitted('close')[0][0]).toBeTruthy();
});

test('icon slot', () => {
  const wrapper = mount({
    template: `
      <notice-bar>
        Content
        <template v-slot:left-icon>Custom Left Icon</template>
        <template v-slot:right-icon>Custom Right Icon</template>
      </notice-bar>
    `,
    components: {
      NoticeBar,
    },
  });

  expect(wrapper).toMatchSnapshot();
});
