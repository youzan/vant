<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-datetime-picker
        v-model="currentDate1"
        type="datetime"
        :min-hour="minHour"
        :max-hour="maxHour"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-datetime-picker
        v-model="currentDate2"
        type="date"
        :min-hour="minHour"
        :max-hour="maxHour"
        :min-date="minDate"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-datetime-picker
        v-model="currentDate3"
        type="time"
        :min-hour="minHour"
        :max-hour="maxHour"
        :min-date="minDate"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title2: '选择日期',
      title3: '选择时间'
    },
    'en-US': {
      title2: 'Date Picker',
      title3: 'Time Picker'
    }
  },

  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate1: new Date(2018, 0, 1),
      currentDate2: null,
      currentDate3: null
    };
  }
};
</script>
