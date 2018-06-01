import CellSwipe from '..';
import { mount } from '@vue/test-utils';
import { triggerDrag } from '../../../test/utils';

const defaultProps = {
  propsData: {
    leftWidth: 100,
    rightWidth: 100
  }
};

it('drag and show left part', () => {
  const wrapper = mount(CellSwipe, defaultProps);

  triggerDrag(wrapper, 10, 0);
  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper, 50, 0);
  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper, 500, 0);
  expect(wrapper).toMatchSnapshot();

  triggerDrag(wrapper, 0, 100);
  expect(wrapper).toMatchSnapshot();
});

it('drag and show left part', () => {
  const wrapper = mount(CellSwipe, defaultProps);

  triggerDrag(wrapper, -50, 0);
  expect(wrapper).toMatchSnapshot();
});

test('on close prop', () => {
  let position;
  let instance;

  const wrapper = mount(CellSwipe, {
    propsData: {
      ...defaultProps.propsData,
      onClose(pos, ins) {
        position = pos;
        instance = ins;
      }
    }
  });
  wrapper.trigger('click');
  expect(position).toEqual(undefined);

  wrapper.setData({ offset: 100 });
  wrapper.trigger('click');
  expect(position).toEqual('cell');

  wrapper.find('.van-cell-swipe__left').trigger('click');
  expect(position).toEqual('left');

  wrapper.find('.van-cell-swipe__right').trigger('click');
  expect(position).toEqual('right');

  instance.close();
  expect(wrapper.vm.offset).toEqual(0);

  wrapper.setData({ offset: 100, onClose: null });
  wrapper.trigger('click');
  expect(wrapper.vm.offset).toEqual(0);
});
