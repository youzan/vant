import { mountForm, submitForm } from './shared';

function mountFormWithChild({ template, data }) {
  const onSubmit = jest.fn();
  const onFailed = jest.fn();

  const wrapper = mountForm({
    template: `
      <van-form @submit="onSubmit" @failed="onFailed">
        <van-field name="A" :rules="[{ required: true, message: 'foo' }]">
          <template #input>${template}</template>
        </van-field>
        <van-button native-type="submit" />
      </van-form>
    `,
    data,
    methods: {
      onSubmit,
      onFailed,
    },
  });

  return {
    wrapper,
    onSubmit,
    onFailed,
  };
}

test('use switch', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<van-switch v-model="value" />',
    data() {
      return { value: false };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  wrapper.setData({ value: true });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('use checkbox', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<van-checkbox v-model="value" />',
    data() {
      return { value: false };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  wrapper.setData({ value: true });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('use checkbox-group', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: `
      <van-checkbox-group v-model="checkboxGroup">
        <van-checkbox name="1">1</van-checkbox>
        <van-checkbox name="2">2</van-checkbox>
      </van-checkbox-group>
    `,
    data() {
      return { checkboxGroup: [] };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  wrapper.setData({ checkboxGroup: ['1'] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: ['1'] });
});

test('use radio', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: `
      <van-radio-group v-model="radio">
        <van-radio name="1">1</van-radio>
        <van-radio name="2">2</van-radio>
      </van-radio-group>
    `,
    data() {
      return { radio: '' };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: '' },
  });

  wrapper.setData({ radio: '1' });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: '1' });
});

test('use stepper', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<van-stepper v-model="value" :min="0" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toBeCalledTimes(0);

  wrapper.setData({ value: 1 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('use rate', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<van-rate v-model="value" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toBeCalledTimes(0);

  wrapper.setData({ value: 1 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('use slider', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<van-slider v-model="value" />',
    data() {
      return { value: 0 };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toBeCalledTimes(0);

  wrapper.setData({ value: 50 });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 50 });
});

test('use uploader', async () => {
  const { wrapper, onSubmit, onFailed } = mountFormWithChild({
    template: '<van-uploader v-model="value" />',
    data() {
      return { value: [] };
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  wrapper.setData({ value: [{ url: 'foo' }] });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: [{ url: 'foo' }] });
});

test('should not get formValue from button slot', async () => {
  const onSubmit = jest.fn();

  const wrapper = mountForm({
    template: `
      <van-form @submit="onSubmit">
        <van-field name="A" value="foo" :rules="[{ required: true, message: 'foo' }]">
          <template #button>
            <van-checkbox :value="false" />
          </template>
        </van-field>
        <van-button native-type="submit" />
      </van-form>
    `,
    methods: {
      onSubmit,
    },
  });

  await submitForm(wrapper);
  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo' });
});
