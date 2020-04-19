<template>
  <div>
    <van-field
      readonly
      clickable
      name="calendar"
      :value="value"
      :label="t('calendar')"
      :placeholder="t('placeholder')"
      @click="showCalendar = true"
    />
    <van-calendar v-model="showCalendar" @confirm="onConfirm" />
  </div>
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
