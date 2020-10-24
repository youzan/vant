<template>
  <demo-block ref="basicUsage" :title="t('basicUsage')">
    <van-password-input
      :value="value.basicUsage"
      :focused="current === 'basicUsage'"
      @focus="current = 'basicUsage'"
    />
  </demo-block>

  <demo-block ref="customLength" :title="t('customLength')">
    <van-password-input
      :value="value.customLength"
      :length="4"
      :focused="current === 'customLength'"
      @focus="current = 'customLength'"
    />
  </demo-block>

  <demo-block ref="addGutter" :title="t('addGutter')">
    <van-password-input
      :value="value.addGutter"
      :gutter="10"
      :focused="current === 'addGutter'"
      @focus="current = 'addGutter'"
    />
  </demo-block>

  <demo-block ref="removeMask" :title="t('removeMask')">
    <van-password-input
      :mask="false"
      :value="value.removeMask"
      :focused="current === 'removeMask'"
      @focus="current = 'removeMask'"
    />
  </demo-block>

  <demo-block ref="showInfo" :title="t('showInfo')">
    <van-password-input
      :info="t('info')"
      :value="value.showInfo"
      :error-info="errorInfo"
      :focused="current === 'showInfo'"
      @focus="current = 'showInfo'"
    />
  </demo-block>

  <van-number-keyboard
    :show="!!current"
    @blur="current = ''"
    @input="onInput"
    @delete="onDelete"
  />
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      info: '密码为 6 位数字',
      showInfo: '提示信息',
      addGutter: '格子间距',
      errorInfo: '密码错误',
      removeMask: '明文展示',
      customLength: '自定义长度',
    },
    'en-US': {
      info: 'Some tips',
      showInfo: 'Show Info',
      addGutter: 'Add Gutter',
      errorInfo: 'Password Mistake',
      removeMask: 'Remove Mask',
      customLength: 'Custom Length',
    },
  },

  data() {
    return {
      value: {
        showInfo: '123',
        addGutter: '123',
        basicUsage: '123',
        removeMask: '123',
        customLength: '123',
      },
      current: 'basicUsage',
      errorInfo: '',
    };
  },

  watch: {
    current(value) {
      if (value) {
        const el = this.$refs[value].$el;
        const { top } = el.getBoundingClientRect();
        window.scrollTo(0, window.pageYOffset + top);
      }
    },
  },

  methods: {
    onInput(key) {
      const { value, current } = this;
      const maxlegnth = current === 'customLength' ? 4 : 6;
      const newValue = (value[current] + key).slice(0, maxlegnth);

      value[current] = newValue;

      if (
        current === 'showInfo' &&
        newValue.length === 6 &&
        newValue !== '123456'
      ) {
        this.errorInfo = this.t('errorInfo');
      }
    },
    onDelete() {
      const { value, current } = this;
      value[current] = value[current].slice(0, value[current].length - 1);

      if (current === 'showInfo') {
        this.errorInfo = '';
      }
    },
  },
};
</script>

<style lang="less">
.demo-password-input {
  min-height: 140vh;
}
</style>
