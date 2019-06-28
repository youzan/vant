import Vue from 'vue';
import Grid from '..';
import GridItem from '../../grid-item';
import { mount } from '../../../test/utils';

Vue.use(Grid);
Vue.use(GridItem);

test('click grid item', () => {
  const onClick = jest.fn();
  const wrapper = mount({
    template: `
      <van-grid>
        <van-grid-item @click="onClick" />
      </van-grid>
    `,
    methods: {
      onClick
    }
  });

  const Item = wrapper.find('.van-grid-item');
  Item.trigger('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('sqaure and set gutter', () => {
  const wrapper = mount({
    template: `
      <van-grid square :column-num="2" gutter="10rem">
        <van-grid-item />
        <van-grid-item />
        <van-grid-item />
      </van-grid>
    `
  });

  expect(wrapper).toMatchSnapshot();
});
