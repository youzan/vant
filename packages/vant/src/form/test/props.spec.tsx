import { mount, later, mockScrollIntoView } from '../../../test';
import { submitForm, getSimpleRules } from './shared';
import { Form } from '..';
import { Field, FieldRule } from '../../field';

test('should ensure execute order of rules prop', async () => {
  const onFailed = vi.fn();
  const rules: FieldRule[] = [
    { required: true, message: 'A' },
    { validator: (val) => val.length > 6, message: 'B' },
    { validator: (val) => val !== 'foo', message: 'C' },
  ];
  const wrapper = mount({
    render() {
      return (
        <Form onFailed={onFailed}>
          <Field name="A" rules={rules} modelValue="123" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'B', name: 'A' }],
    values: { A: '123' },
  });
});

test('should support pattern in rules prop', async () => {
  const onFailed = vi.fn();
  const rules: FieldRule[] = [{ pattern: /\d{6}/, message: 'foo' }];
  const wrapper = mount({
    render() {
      return (
        <Form onFailed={onFailed}>
          <Field name="A" rules={rules} modelValue="123" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: '123' },
  });
});

test('should support message function in rules prop', async () => {
  const onFailed = vi.fn();
  const rules: FieldRule[] = [{ pattern: /\d{6}/, message: (val) => val }];
  const wrapper = mount({
    render() {
      return (
        <Form onFailed={onFailed}>
          <Field name="A" rules={rules} modelValue="123" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: '123', name: 'A' }],
    values: { A: '123' },
  });
});

test('should skip pattern if validateEmpty is false in rules prop', async () => {
  const onFailed = vi.fn();
  const rules: FieldRule[] = [{ pattern: /\d{6}/, validateEmpty: false }];
  const wrapper = mount({
    render() {
      return (
        <Form onFailed={onFailed}>
          <Field name="A" rules={rules} modelValue="" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledTimes(0);
});

test('should skip validator if validateEmpty is false in rules prop', async () => {
  const onFailed = vi.fn();
  const rules: FieldRule[] = [{ validator: () => false, validateEmpty: false }];
  const wrapper = mount({
    render() {
      return (
        <Form onFailed={onFailed}>
          <Field name="A" rules={rules} modelValue="" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(onFailed).toHaveBeenCalledTimes(0);
});

test('should support formatter in rules prop', async () => {
  const onFailed = vi.fn();
  const rules: FieldRule[] = [
    {
      message: 'foo',
      required: true,
      formatter: (val, rule) => {
        expect(rule.message).toEqual('foo');
        return val.trim();
      },
    },
  ];
  const wrapper = mount({
    render() {
      return (
        <Form onFailed={onFailed}>
          <Field name="A" rules={rules} modelValue=" " />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: ' ' },
  });
});

test('should support async validator in rules prop', async () => {
  const onFailed = vi.fn();
  const rules: FieldRule[] = [
    {
      validator: (value, rule) => {
        expect(value).toEqual('123');
        expect(typeof rule).toEqual('object');
        return new Promise((resolve) => {
          resolve(true);
        });
      },
      message: 'should pass',
    },
    {
      validator: () =>
        new Promise((resolve) => {
          resolve(false);
        }),
      message: 'should fail',
    },
  ];
  const wrapper = mount({
    render() {
      return (
        <Form onFailed={onFailed}>
          <Field name="A" rules={rules} modelValue="123" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'should fail', name: 'A' }],
    values: { A: '123' },
  });
});

test('should validate first field when using validate-first prop', async () => {
  const onSubmit = vi.fn();
  const onFailed = vi.fn();

  const wrapper = mount({
    data() {
      return {
        ...getSimpleRules(),
        value: '',
      };
    },
    render() {
      return (
        <Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
          <Field name="A" rules={this.rulesA} modelValue={this.value} />
          <Field name="B" rules={this.rulesB} modelValue={this.value} />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(wrapper.html()).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'A failed', name: 'A' }],
    values: { A: '', B: '' },
  });

  await wrapper.setData({ value: 'foo' });
  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo', B: 'foo' });
});

test('should render colon when using colon prop', () => {
  const wrapper = mount({
    render() {
      return (
        <Form colon>
          <Field label="Label" />
          <Field v-slots={{ label: () => 'Custom Label' }} />
        </Form>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render label-align prop correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Form labelAlign="right">
          <Field label="Label" />
          <Field label="Label" labelAlign="center" />
        </Form>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render label-width prop correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Form labelWidth="5rem">
          <Field label="Label" />
          <Field label="Label" labelWidth="10vw" />
          <Field label="Label" labelWidth="10vw" labelAlign="top" />
        </Form>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render input-align prop correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Form inputAlign="right">
          <Field />
          <Field v-slots={{ input: () => <div /> }} />
        </Form>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should render error-message-align prop correctly', () => {
  const wrapper = mount({
    render() {
      return (
        <Form errorMessageAlign="right">
          <Field errorMessage="Error" />
        </Form>
      );
    },
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should trigger validate after blurring when validate-trigger prop is onBlur', async () => {
  const wrapper = mount({
    data: getSimpleRules,
    render() {
      return (
        <Form ref="form" validateTrigger="onBlur">
          <Field name="A" rules={this.rulesA} modelValue="" />
        </Form>
      );
    },
  });

  const input = wrapper.find('input');

  await input.trigger('input');
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();

  await input.trigger('blur');
  expect(wrapper.find('.van-field__error-message').exists()).toBeTruthy();
});

test('should trigger validate after inputting when validate-trigger prop is onChange', async () => {
  const wrapper = mount({
    data() {
      return {
        ...getSimpleRules(),
        value: '',
      };
    },
    render() {
      return (
        <Form validateTrigger="onChange" ref="form">
          <Field v-model={this.value} name="A" rules={this.rulesA} />
        </Form>
      );
    },
  });

  const input = wrapper.find('input');

  await input.trigger('blur');
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();

  await wrapper.setData({ value: '1' });
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();

  await wrapper.setData({ value: '' });
  expect(wrapper.find('.van-field__error-message').exists).toBeTruthy();
});

test('should trigger validate correctly when validate-trigger prop is array', async () => {
  const wrapper = mount({
    data() {
      return {
        ...getSimpleRules(),
        value: '',
      };
    },
    render() {
      return (
        <Form ref="form" validateTrigger={['onBlur', 'onChange']}>
          <Field
            v-model={this.value}
            name="A"
            rules={this.rulesA}
            modelValue=""
          />
        </Form>
      );
    },
  });

  const input = wrapper.find('input');

  await input.trigger('input');
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();

  await input.trigger('blur');
  expect(wrapper.find('.van-field__error-message').exists()).toBeTruthy();

  await wrapper.setData({ value: '1' });
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();

  await wrapper.setData({ value: '' });
  expect(wrapper.find('.van-field__error-message').exists).toBeTruthy();
});

test('should allow to custom trigger in rules', async () => {
  const rulesA = [
    {
      message: 'A',
      required: true,
      trigger: 'onChange' as const,
    },
  ];
  const rulesB = [
    {
      message: 'B',
      required: true,
      trigger: 'onBlur' as const,
    },
  ];
  const wrapper = mount({
    data() {
      return {
        valueA: '',
        valueB: '',
      };
    },
    render() {
      return (
        <Form validate-trigger="none" ref="form">
          <Field name="A" rules={rulesA} modelValue={this.valueA} />
          <Field name="B" rules={rulesB} modelValue={this.valueB} />
        </Form>
      );
    },
  });

  const inputs = wrapper.findAll('input');

  await inputs[0].trigger('blur');
  await wrapper.setData({ valueB: '1' });
  await wrapper.setData({ valueB: '' });
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();

  await inputs[1].trigger('blur');
  await wrapper.setData({ valueA: '1' });
  await wrapper.setData({ valueA: '' });
  await later();
  expect(
    wrapper.element.querySelectorAll('.van-field__error-message').length,
  ).toEqual(2);
});

test('should trigger scroll when using scroll-to-error prop', async () => {
  const fn = mockScrollIntoView();
  const wrapper = mount({
    data: getSimpleRules,
    render() {
      return (
        <Form scrollToError>
          <Field name="A" rules={this.rulesA} modelValue="" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(fn).toHaveBeenCalledTimes(1);
});

test('should allow to control the display of error message by show-error-message prop', async () => {
  const wrapper = mount({
    data() {
      return {
        ...getSimpleRules(),
        showErrorMessage: false,
      };
    },
    render() {
      return (
        <Form showErrorMessage={this.showErrorMessage}>
          <Field name="A" rules={this.rulesA} modelValue="" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(wrapper.find('.van-field__error-message').exists()).toBeFalsy();

  await wrapper.setData({ showErrorMessage: true });
  await submitForm(wrapper);
  expect(wrapper.find('.van-field__error-message').exists()).toBeTruthy();
});

test('should allow to control the display of error status by show-error prop', async () => {
  const wrapper = mount({
    data() {
      return {
        ...getSimpleRules(),
        showError: false,
      };
    },
    render() {
      return (
        <Form showError={this.showError}>
          <Field name="A" rules={this.rulesA} modelValue="" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(wrapper.find('.van-field--error').exists()).toBeFalsy();

  await wrapper.setData({ showError: true });
  await submitForm(wrapper);
  expect(wrapper.find('.van-field--error').exists()).toBeTruthy();
});
