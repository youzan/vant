<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell-group>
        <van-field v-model="value" :placeholder="$t('textPlaceholder')" />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-cell-group>
        <van-field
          v-model="text"
          :label="$t('text')"
          :placeholder="$t('textPlaceholder')"
        />

        <van-field
          v-model="password"
          type="password"
          :label="$t('password')"
          :placeholder="$t('passwordPlaceholder')"
        />

        <van-field
          v-model="number"
          type="number"
          :label="$t('number')"
          :placeholder="$t('numberPlaceholder')"
        />

        <van-field
          v-model="phone"
          type="tel"
          :label="$t('phone')"
          :placeholder="$t('phonePlaceholder')"
        />
      </van-cell-group>
    </demo-block>

    <demo-block :title="$t('title3')">
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

    <demo-block :title="$t('title4')">
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

    <demo-block :title="$t('title6')">
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
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '自定义类型',
      title3: '禁用输入框',
      title4: '错误提示',
      title6: '插入按钮',
      sms: '短信验证码',
      tel: '手机号',
      text: '文本',
      phone: '手机号',
      number: '数字',
      message: '留言',
      sendSMS: '发送验证码',
      showIcon: '显示图标',
      showClearIcon: '显示清除图标',
      showWordLimit: '显示字数统计',
      textareaAutosize: '高度自适应',
      smsPlaceholder: '请输入短信验证码',
      textPlaceholder: '请输入文本',
      numberPlaceholder: '请输入数字',
      phonePlaceholder: '请输入手机号',
      messagePlaceholder: '请输入留言',
      inputReadonly: '输入框只读',
      inputDisabled: '输入框已禁用',
      phoneError: '手机号格式错误'
    },
    'en-US': {
      title2: 'Custom Type',
      title3: 'Disabled',
      title4: 'Error Info',
      title6: 'Insert Button',
      sms: 'SMS',
      tel: 'Tel',
      text: 'Text',
      phone: 'Phone',
      number: 'Number',
      message: 'Message',
      sendSMS: 'Send SMS',
      showIcon: 'Show Icon',
      showClearIcon: 'Show Clear Icon',
      showWordLimit: 'Show Word Limit',
      textareaAutosize: 'Auto Resize',
      smsPlaceholder: 'SMS',
      textPlaceholder: 'Text',
      phonePlaceholder: 'Phone',
      numberPlaceholder: 'Number',
      messagePlaceholder: 'Message',
      inputReadonly: 'Input Readonly',
      inputDisabled: 'Input Disabled',
      phoneError: 'Invalid phone'
    }
  },

  data() {
    return {
      sms: '',
      text: '',
      value: '',
      number: '',
      icon1: '',
      icon2: '123',
      password: '',
      username: '',
      username2: '',
      message: '',
      message2: '',
      phone: '',
      phone2: '12345'
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-field {
  padding-bottom: 30px;
}
</style>
