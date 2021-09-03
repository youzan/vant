import { Tag } from '..';
import { mount } from '../../../test';

test('should emit close event when clicking the close icon', () => {
  const wrapper = mount(Tag, {
    props: {
      closeable: true,
    },
  });

  wrapper.find('.van-tag__close').trigger('click');
  expect(wrapper.emitted('close')!.length).toEqual(1);
});

test('should hide tag when the show prop is false', () => {
  const wrapper = mount(Tag, {
    props: {
      show: false,
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should not trigger click event when clicking the close icon', () => {
  const onClick = jest.fn();
  const wrapper = mount(Tag, {
    props: {
      onClick,
      closeable: true,
    },
  });

  wrapper.find('.van-tag__close').trigger('click');
  expect(onClick).toHaveBeenCalledTimes(0);

  wrapper.trigger('click');
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('should render border-color correctly', () => {
  const wrapper = mount(Tag, {
    props: {
      plain: true,
      color: 'red',
      textColor: 'blue',
    },
  });

  expect(wrapper.html()).toMatchSnapshot();
});
