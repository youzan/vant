import { mount } from '@vue/test-utils';
import Loading from '..';

test('should change loading size when using size prop', () => {
  const wrapper = mount(Loading, {
    props: {
      size: 20,
    },
  });

  const spinner = wrapper.find('.van-loading__spinner').element;
  expect(spinner.style.width).toEqual('20px');
  expect(spinner.style.height).toEqual('20px');
});

test('should change text font-size when using text-size prop', () => {
  const wrapper = mount(Loading, {
    props: {
      textSize: 20,
    },
    slots: {
      default: () => 'Text',
    },
  });

  expect(wrapper.find('.van-loading__text').element.style.fontSize).toEqual(
    '20px'
  );
});
