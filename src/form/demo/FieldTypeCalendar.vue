<template>
  <van-field
    readonly
    clickable
    name="calendar"
    :label="t('calendar')"
    :model-value="value"
    :placeholder="t('placeholder')"
    @click="showCalendar = true"
  />
  <van-calendar
    v-model:show="showCalendar"
    round
    teleport="body"
    @confirm="onConfirm"
  />
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      calendar: '日历',
      placeholder: '点击选择日期',
    },
    'en-US': {
      calendar: 'Calendar',
      placeholder: 'Select date',
    },
  },

  data() {
    return {
      value: '',
      showCalendar: false,
    };
  },

  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },

    onConfirm(date) {
      this.value = this.formatDate(date);
      this.showCalendar = false;
    },
  },
};
</script>
