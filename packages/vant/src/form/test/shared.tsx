import { mount, later } from '../../../test';
import { Form } from '..';
import { Field } from '../../field';
import type { VueWrapper } from '@vue/test-utils';

export async function submitForm(wrapper: VueWrapper<any>) {
  await wrapper.find('form').trigger('submit');
  return later();
}

export function getSimpleRules() {
  return {
    rulesA: [{ required: true, message: 'A failed' }],
    rulesB: [{ required: true, message: 'B failed' }],
  };
}

export function mountSimpleRulesForm(options: any) {
  return mount({
    render() {
      return (
        <Form ref="form" onFailed={this.onFailed}>
          <Field name="A" rules={this.rulesA} modelValue="" />
          <Field name="B" rules={this.rulesB} modelValue="" />
        </Form>
      );
    },
    data: getSimpleRules,
    ...options,
  });
}
