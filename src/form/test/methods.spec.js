import { later, mockScrollIntoView } from '../../../test';
import { mountForm, mountSimpleRulesForm, getSimpleRules } from './shared';

test('submit method', async () => {
  const onSubmit = jest.fn();

  mountForm({
    template: `
        <van-form ref="form" @submit="onSubmit">
          <van-field name="A" value="bar" />
          <van-button native-type="submit" />
        </van-form>
      `,
    mounted() {
      this.$refs.form.submit();
    },
    methods: {
      onSubmit,
    },
  });

  await later();
  expect(onSubmit).toHaveBeenCalledWith({ A: 'bar' });
});

test('validate method - validate all fields', (done) => {
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate().catch((err) => {
        expect(err).toEqual([
          { message: 'A failed', name: 'A' },
          { message: 'B failed', name: 'B' },
        ]);
        done();
      });
    },
  });
});

test('validate method - validate one field and failed', (done) => {
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate('A').catch((err) => {
        expect(err).toEqual({ message: 'A failed', name: 'A' });
        done();
      });
    },
  });
});

test('validate method - validate one field and passed', (done) => {
  mountForm({
    template: `	
      <van-form ref="form" @failed="onFailed">	
        <van-field name="A" :rules="rulesA" value="123" />	
        <van-field name="B" :rules="rulesB" value="" />	
        <van-button native-type="submit" />	
      </van-form>	
    `,
    data: getSimpleRules,
    mounted() {
      this.$refs.form.validate('A').then(done);
    },
  });
});

test('validate method - validate two fields and failed', (done) => {
  mountForm({
    template: `	
      <van-form ref="form" @failed="onFailed">	
        <van-field name="A" :rules="rulesA" value="123" />	
        <van-field name="B" :rules="rulesB" value="" />	
        <van-button native-type="submit" />	
      </van-form>	
    `,
    data: getSimpleRules,
    mounted() {
      this.$refs.form.validate(['A', 'B']).catch((error) => {
        expect(error).toEqual([{ message: 'B failed', name: 'B' }]);
        done();
      });
    },
  });
});

test('validate method - unexisted name', (done) => {
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate('unexisted').catch(done);
    },
  });
});

test('resetValidation method - reset all fields', (done) => {
  const wrapper = mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate().catch(() => {
        this.$refs.form.resetValidation();
        const errors = wrapper.findAll('.van-field__error-message');
        expect(errors.length).toEqual(0);
        done();
      });
    },
  });
});

test('resetValidation method - reset two fields', (done) => {
  const wrapper = mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate().catch(() => {
        this.$refs.form.resetValidation(['A', 'B']);
        const errors = wrapper.findAll('.van-field__error-message');
        expect(errors.length).toEqual(0);
        done();
      });
    },
  });
});

test('resetValidation method - reset one field', (done) => {
  const wrapper = mountSimpleRulesForm({
    mounted() {
      this.$refs.form.validate().catch(() => {
        this.$refs.form.resetValidation('A');
        expect(wrapper.findAll('.van-field--error').length).toEqual(1);
        this.$refs.form.resetValidation('B');
        expect(wrapper.findAll('.van-field--error').length).toEqual(0);
        done();
      });
    },
  });
});

test('resetValidation method - reset when rule message is empty', (done) => {
  const wrapper = mountSimpleRulesForm({
    data() {
      return {
        rulesA: [{ required: true, message: '' }],
        rulesB: [{ required: true, message: '' }],
      };
    },
    mounted() {
      this.$refs.form.validate().catch(() => {
        this.$refs.form.resetValidation('A');
        expect(wrapper.findAll('.van-field--error').length).toEqual(1);
        done();
      });
    },
  });
});

test('scrollToField method', (done) => {
  const fn = mockScrollIntoView();
  mountSimpleRulesForm({
    mounted() {
      this.$refs.form.scrollToField('unknown');
      expect(fn).toHaveBeenCalledTimes(0);

      this.$refs.form.scrollToField('A');
      expect(fn).toHaveBeenCalledTimes(1);
      done();
    },
  });
});
