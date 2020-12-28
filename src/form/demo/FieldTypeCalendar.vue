<template>
  <van-field
    v-model="value"
    readonly
    clickable
    name="calendar"
    :label="t('calendar')"
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
import { reactive, toRefs } from 'vue';
import { useTranslate } from '@demo/use-translate';

const i18n = {
  'zh-CN': {
    calendar: '日历',
    placeholder: '点击选择日期',
  },
  'en-US': {
    calendar: 'Calendar',
    placeholder: 'Select date',
  },
};

export default {
  setup() {
    const t = useTranslate(i18n);
    const state = reactive({
      value: '',
      showCalendar: false,
    });

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;

    const onConfirm = (date) => {
      state.value = formatDate(date);
      state.showCalendar = false;
    };

    return {
      ...toRefs(state),
      t,
      onConfirm,
    };
  },
};
</script>
