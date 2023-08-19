import { later, mount } from '../../../test';
import { submitForm, mountSimpleRulesForm } from './shared';
import { Form } from '..';
import { Field } from '../../field';

test('should emit submit event when submitting form', async () => {
  const onSubmit = vi.fn();
  const wrapper = mount({
    render() {
      return (
        <Form onSubmit={onSubmit}>
          <Field name="A" modelValue="bar" />
        </Form>
      );
    },
  });

  await submitForm(wrapper);

  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('should emit failed event when validating failed', async () => {
  const onFailed = vi.fn();
  const { form } = mountSimpleRulesForm({
    methods: {
      onFailed,
    },
  });

  await submitForm(form);

  expect(form.html()).toMatchSnapshot();
  expect(onFailed).toHaveBeenCalledWith({
    errors: [
      { name: 'A', message: 'A failed' },
      { name: 'B', message: 'B failed' },
    ],
    values: { A: '', B: '' },
  });
});

test('should emit failed event correctly when rule message is empty', async () => {
  const onFailed = vi.fn();
  const wrapper = mount({
    render() {
      return (
        <Form ref="form" onFailed={onFailed}>
          <Field name="A" rules={this.rulesA} modelValue="" />
        </Form>
      );
    },
    data() {
      return {
        rulesA: [{ required: true }],
      };
    },
  });

  await submitForm(wrapper);

  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ name: 'A', message: '' }],
    values: { A: '' },
  });
});

test('Field should emit startValidate event when validation start', async () => {
  const onStart = vi.fn();
  const wrapper = mount({
    render() {
      return (
        <Form>
          <Field
            name="A"
            rules={[{ required: true }]}
            modelValue="bar"
            onStartValidate={onStart}
          />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(onStart).toHaveBeenCalledTimes(1);
});

test('Field should emit endValidate event when validation end', async () => {
  const onEnd = vi.fn();
  const rules = [
    {
      validator: () =>
        new Promise<boolean>((resolve) => {
          setTimeout(() => resolve(true), 10);
        }),
    },
  ];
  const wrapper = mount({
    render() {
      return (
        <Form>
          <Field
            name="A"
            rules={rules}
            modelValue="bar"
            onEndValidate={onEnd}
          />
        </Form>
      );
    },
  });

  await submitForm(wrapper);
  expect(onEnd).toHaveBeenCalledTimes(0);
  await later(50);
  expect(onEnd).toHaveBeenCalledTimes(1);
});
