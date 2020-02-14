import { later } from '../../../test';
import { mountForm } from './shared';

test('dynamic add/remove fileds', async () => {
  const onSubmit = jest.fn();
  const wrapper = mountForm({
    template: `
      <van-form @submit="onSubmit">
        <van-field
          v-for="item in list"
          :key="item"
          :name="item"
          value=""
        />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return { list: ['A'] };
    },
    methods: {
      onSubmit,
    },
  });

  wrapper.find('.van-button').trigger('click');
  await later();
  expect(onSubmit).toHaveBeenCalledWith({ A: '' });

  wrapper.setData({ list: ['A', 'B'] });
  wrapper.find('.van-button').trigger('click');
  await later();
  expect(onSubmit).toHaveBeenCalledWith({ A: '', B: '' });

  wrapper.setData({ list: ['B'] });
  wrapper.find('.van-button').trigger('click');
  await later();
  expect(onSubmit).toHaveBeenCalledWith({ B: '' });
});
