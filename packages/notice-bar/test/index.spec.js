import NoticeBar from '..';
import { mount } from '../../../test/utils';

test('close event', () => {
  const wrapper = mount(NoticeBar, {
    propsData: {
      mode: 'closeable'
    }
  });
  const close = wrapper.find('.van-notice-bar__right-icon');

  close.trigger('click');
  expect(wrapper.emitted('close')).toBeTruthy();
});
