import { later } from '../../../test';
import { mountForm, mountSimpleRulesForm } from './shared';

test('submit event', async () => {
  const onSubmit = jest.fn();
  const wrapper = mountForm({
    template: `
      <van-form @submit="onSubmit">
        <van-field name="A" value="bar" />
        <van-button native-type="submit" />
      </van-form>
    `,
    methods: {
      onSubmit,
    },
  });

  wrapper.find('.van-button').trigger('click');

  await later();
  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('failed event', async () => {
  const onFailed = jest.fn();
  const wrapper = mountSimpleRulesForm({
    methods: {
      onFailed,
    },
  });

  wrapper.find('.van-button').trigger('click');
  await later();

  expect(wrapper).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [
      { name: 'A', message: 'A failed' },
      { name: 'B', message: 'B failed' },
    ],
    values: { A: '', B: '' },
  });
});
