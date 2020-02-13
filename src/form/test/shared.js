import { mount } from '../../../test';

export function mountForm(options) {
  return mount(options, { attachToDocument: true });
}

export function getSimpleRules() {
  return {
    rulesA: [{ required: true, message: 'A failed' }],
    rulesB: [{ required: true, message: 'B failed' }],
  };
}

export function mountSimpleRulesForm(options) {
  return mountForm({
    template: `
      <van-form ref="form" @failed="onFailed">
        <van-field name="A" :rules="rulesA" value="" />
        <van-field name="B" :rules="rulesB" value="" />
        <van-button native-type="submit" />
      </van-form>
    `,
    data() {
      return getSimpleRules();
    },
    ...options,
  });
}
