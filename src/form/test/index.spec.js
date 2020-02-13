import { mount, later } from '../../../test';

function mountForm(options) {
  return mount(options, { attachToDocument: true });
}

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
  const wrapper = mountForm({
    template: `
        <van-form @failed="onFailed">
          <van-field name="A" :rules="rulesA" value="" />
          <van-field name="B" :rules="rulesB" value="" />
          <van-button native-type="submit" />
        </van-form>
      `,
    data() {
      return {
        rulesA: [{ required: true, message: 'A failed' }],
        rulesB: [{ required: true, message: 'B failed' }],
      };
    },
    methods: {
      onFailed,
    },
  });

  wrapper.find('.van-button').trigger('click');

  await later();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [
      { name: 'A', message: 'A failed' },
      { name: 'B', message: 'B failed' },
    ],
    values: { A: '', B: '' },
  });
});
