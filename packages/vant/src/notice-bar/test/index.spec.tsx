import { NoticeBar } from '..';
import { mount, later } from '../../../test';
import type { ComponentInstance } from '../../utils';

test('should emit close event when close icon is clicked', () => {
  const wrapper = mount(NoticeBar, {
    props: {
      mode: 'closeable',
    },
  });
  const close = wrapper.find('.van-notice-bar__right-icon');

  close.trigger('click');
  expect(wrapper.emitted<[Event]>('close')![0][0]).toBeTruthy();
});

test('should render icon slot correct', () => {
  const wrapper = mount({
    render: () => (
      <NoticeBar
        v-slots={{
          'left-icon': () => 'Custom Left Icon',
          'right-icon': () => 'Custom Right Icon',
        }}
      >
        Content
      </NoticeBar>
    ),
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit replay event after replay', async () => {
  const wrapper = mount(NoticeBar, {
    props: {
      text: 'foo',
    },
  });

  wrapper.find('.van-notice-bar__content').trigger('transitionend');
  await later(80);
  expect(wrapper.emitted('replay')).toBeTruthy();
});

test('should start scrolling when content width > wrap width ', async () => {
  const wrapper = mount(NoticeBar, {
    props: {
      text: 'foo',
      delay: 0,
    },
  });

  const wrap = wrapper.find('.van-notice-bar__wrap');
  const content = wrapper.find('.van-notice-bar__content');

  wrap.element.getBoundingClientRect = () =>
    ({
      width: 50,
    }) as DOMRect;
  content.element.getBoundingClientRect = () =>
    ({
      width: 100,
    }) as DOMRect;

  await later(50);

  expect(wrapper.html()).toMatchSnapshot();
});

test('should not start scrolling when content width > wrap width ', async () => {
  const wrapper = mount(NoticeBar, {
    props: {
      text: 'foo',
      delay: 0,
    },
  });

  const wrap = wrapper.find('.van-notice-bar__wrap');
  const content = wrapper.find('.van-notice-bar__content');

  wrap.element.getBoundingClientRect = () =>
    ({
      width: 200,
    }) as DOMRect;
  content.element.getBoundingClientRect = () =>
    ({
      width: 100,
    }) as DOMRect;

  await later(50);

  expect(wrapper.html()).toMatchSnapshot();
});

test('should expose reset methods', async () => {
  const wrapper = mount(NoticeBar, {
    props: {
      text: 'foo',
    },
  });

  expect((wrapper.vm as ComponentInstance).reset).toBeTruthy();
});
