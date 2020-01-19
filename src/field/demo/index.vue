<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-field v-model="value" :placeholder="$t('textPlaceholder')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('customType')">
      <van-cell-group>
        <van-field
          v-model="text"
          :label="$t('text')"
          :placeholder="$t('textPlaceholder')"
        />

        <van-field
          v-model="phone"
          type="tel"
          :label="$t('phone')"
          :placeholder="$t('phonePlaceholder')"
        />

        <van-field
          v-model="digit"
          type="digit"
          :label="$t('digit')"
          :placeholder="$t('digitPlaceholder')"
        />

        <van-field
          v-model="number"
          type="number"
          :label="$t('number')"
          :placeholder="$t('numberPlaceholder')"
        />

        <van-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-cell-group>
        <van-field :value="$t('inputReadonly')" :label="$t('text')" readonly />
        <van-field :value="$t('inputDisabled')" :label="$t('text')" disabled />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('showIcon')">
      <van-cell-group>
        <van-field
          v-model="icon1"
          :label="$t('text')"
          left-icon="smile-o"
          right-icon="warning-o"
          :placeholder="$t('showIcon')"
        />
        <van-field
          v-model="icon2"
          clearable
          :label="$t('text')"
          left-icon="music-o"
          :placeholder="$t('showClearIcon')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('errorInfo')">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          :label="$t('username')"
          :placeholder="$t('usernamePlaceholder')"
          error
        />
        <van-field
          v-model="phone2"
          required
          :label="$t('phone')"
          :placeholder="$t('phonePlaceholder')"
          :error-message="$t('phoneError')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('insertButton')">
      <van-cell-group>
        <van-field
          center
          clearable
          v-model="sms"
          :label="$t('sms')"
          :placeholder="$t('smsPlaceholder')"
        >
          <template #button>
            <van-button size="small" type="primary">
              {{ $t('sendSMS') }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="$t('formatValue')">
      <van-cell-group>
        <van-field
          v-model="formatValue"
          :label="$t('text')"
          :formatter="formatter"
          :placeholder="$t('formatValue')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('textareaAutosize')">
      <van-cell-group>
        <van-field
          v-model="message"
          :label="$t('message')"
          type="textarea"
          :placeholder="$t('messagePlaceholder')"
          rows="1"
          autosize
        />
      </van-cell-group>
    </demo-block>

    <demo-block v-if="!isWeapp" :title="$t('showWordLimit')">
      <van-cell-group>
        <van-field
          v-model="message2"
          :label="$t('message')"
          :placeholder="$t('messagePlaceholder')"
          rows="2"
          autosize
          maxlength="50"
          type="textarea"
          show-word-limit
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('inputAlign')">
      <van-cell-group>
        <van-field
          v-model="value"
          :label="$t('text')"
          :placeholder="$t('alignPlaceHolder')"
          input-align="right"
        />
      </van-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      tel: '手机号',
      sms: '短信验证码',
      text: '文本',
      digit: '整数',
      phone: '手机号',
      number: '数字',
      message: '留言',
      sendSMS: '发送验证码',
      disabled: '禁用输入框',
      showIcon: '显示图标',
      errorInfo: '错误提示',
      customType: '自定义类型',
      phoneError: '手机号格式错误',
      formatValue: '格式化输入内容',
      insertButton: '插入按钮',
      showClearIcon: '显示清除图标',
      showWordLimit: '显示字数统计',
      inputReadonly: '输入框只读',
      inputDisabled: '输入框已禁用',
      inputAlign: '输入框内容对齐',
      smsPlaceholder: '请输入短信验证码',
      textPlaceholder: '请输入文本',
      digitPlaceholder: '请输入整数',
      phonePlaceholder: '请输入手机号',
      textareaAutosize: '高度自适应',
      numberPlaceholder: '请输入数字（支持小数）',
      messagePlaceholder: '请输入留言',
      alignPlaceHolder: '输入框内容右对齐',
    },
    'en-US': {
      tel: 'Tel',
      sms: 'SMS',
      text: 'Text',
      digit: 'Digit',
      phone: 'Phone',
      number: 'Number',
      message: 'Message',
      sendSMS: 'Send SMS',
      disabled: 'Disabled',
      showIcon: 'Show Icon',
      errorInfo: 'Error Info',
      customType: 'Custom Type',
      phoneError: 'Invalid phone',
      formatValue: 'Format Value',
      insertButton: 'Insert Button',
      showClearIcon: 'Show Clear Icon',
      showWordLimit: 'Show Word Limit',
      inputReadonly: 'Input Readonly',
      inputDisabled: 'Input Disabled',
      inputAlign: 'Input Align',
      smsPlaceholder: 'SMS',
      textPlaceholder: 'Text',
      digitPlaceholder: 'Digit',
      phonePlaceholder: 'Phone',
      textareaAutosize: 'Auto Resize',
      numberPlaceholder: 'Number',
      messagePlaceholder: 'Message',
      alignPlaceHolder: 'Input Align Right',
    },
  },

  data() {
    return {
      sms: '',
      text: '',
      value: '',
      digit: '',
      number: '',
      icon1: '',
      icon2: '123',
      password: '',
      username: '',
      username2: '',
      message: '',
      message2: '',
      phone: '',
      phone2: '12345',
      formatValue: '',
    };
  },

  methods: {
    formatter(value) {
      return value.replace(/\d/g, '');
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-field {
  padding-bottom: 30px;
}
</style>
