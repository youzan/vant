import { ref } from 'vue';
import { mount, later } from '../../../test';
import { submitForm } from './shared';
import { Form } from '..';
import { Rate } from '../../rate';
import { Field } from '../../field';
import { Radio } from '../../radio';
import { Switch } from '../../switch';
import { Slider } from '../../slider';
import { Stepper } from '../../stepper';
import { Checkbox } from '../../checkbox';
import { RadioGroup } from '../../radio-group';
import { CheckboxGroup } from '../../checkbox-group';
import { Uploader, UploaderFileListItem } from '../../uploader';

function mountFormWithChild(input: () => JSX.Element) {
  const onSubmit = vi.fn();
  const onFailed = vi.fn();
  const form = mount({
    render() {
      return (
        <Form onSubmit={onSubmit} onFailed={onFailed}>
          <Field
            v-slots={{ input }}
            name="A"
            rules={[{ required: true, message: 'foo' }]}
          />
        </Form>
      );
    },
  });

  return {
    form,
    onSubmit,
    onFailed,
  };
}

test('should allow to use Switch as a form item', async () => {
  const switched = ref(false);
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <Switch v-model={switched.value} />
  ));

  await submitForm(form);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  switched.value = true;
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('should allow to use Checkbox as a form item', async () => {
  const checked = ref(false);
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <Checkbox v-model={checked.value} />
  ));

  await submitForm(form);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: false },
  });

  checked.value = true;
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: true });
});

test('should allow to use CheckboxGroup as a form item', async () => {
  const checked = ref<string[]>([]);
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <CheckboxGroup v-model={checked.value}>
      <Checkbox name="1">1</Checkbox>
      <Checkbox name="2">2</Checkbox>
    </CheckboxGroup>
  ));

  await submitForm(form);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  checked.value = ['1'];
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: ['1'] });
});

test('should allow to use RadioGroup as a form item', async () => {
  const checked = ref('');
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <RadioGroup v-model={checked.value}>
      <Radio name="1">1</Radio>
      <Radio name="2">2</Radio>
    </RadioGroup>
  ));

  await submitForm(form);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: '' },
  });

  checked.value = '1';
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: '1' });
});

test('should allow to use Stepper as a form item', async () => {
  const value = ref(0);
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <Stepper v-model={value.value} min="0" />
  ));

  await submitForm(form);
  expect(onFailed).toBeCalledTimes(0);

  value.value = 1;
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('should allow to use Rate as a form item', async () => {
  const rate = ref(0);
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <Rate v-model={rate.value} />
  ));

  await submitForm(form);
  expect(onFailed).toBeCalledTimes(0);

  rate.value = 1;
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: 1 });
});

test('should allow to use Slider as a form item', async () => {
  const value = ref(0);
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <Slider v-model={value.value} />
  ));

  await submitForm(form);
  expect(onFailed).toBeCalledTimes(0);

  value.value = 50;
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: 50 });
});

test('should allow to use Uploader as a form item', async () => {
  const fileList = ref<UploaderFileListItem[]>([]);
  const { form, onSubmit, onFailed } = mountFormWithChild(() => (
    <Uploader v-model={fileList.value} />
  ));

  await submitForm(form);
  expect(onFailed).toHaveBeenCalledWith({
    errors: [{ message: 'foo', name: 'A' }],
    values: { A: [] },
  });

  fileList.value = [{ url: 'foo' }];
  await later();
  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: [{ url: 'foo' }] });
});

test('should not get formValue from button slot', async () => {
  const onSubmit = vi.fn();

  const form = mount({
    render() {
      return (
        <Form onSubmit={onSubmit}>
          <Field
            v-slots={{ button: () => <Checkbox modelValue={false} /> }}
            name="A"
            rules={[{ required: true, message: 'foo' }]}
            modelValue="foo"
          />
        </Form>
      );
    },
  });

  await submitForm(form);
  expect(onSubmit).toHaveBeenCalledWith({ A: 'foo' });
});
