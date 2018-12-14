<template>
  <demo-section>
    <demo-block :title="$t('title1')">
      <van-datetime-picker
        v-model="currentDate1"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-datetime-picker
        v-model="currentDate2"
        type="date"
        :min-date="minDate"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-datetime-picker
        v-model="currentDate3"
        type="year-month"
        :min-date="minDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-datetime-picker
        v-model="currentDate4"
        type="time"
        :min-hour="minHour"
        :max-hour="maxHour"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title1: '选择完整时间',
      title2: '选择日期（年月日）',
      title3: '选择日期（年月）',
      title4: '选择时间',
      year: '年',
      month: '月'
    },
    'en-US': {
      title1: 'Choose DateTime',
      title2: 'Choose Date',
      title3: 'Choose Year-Month',
      title4: 'Choose Time',
      year: ' Year',
      month: ' Month'
    }
  },

  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(2018, 0, 1),
      maxDate: new Date(2019, 10, 1),
      currentDate1: new Date(2018, 0, 1),
      currentDate2: null,
      currentDate3: new Date(2018, 0, 1),
      currentDate4: '12:00'
    };
  },

  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return value + this.$t('year');
      }
      if (type === 'month') {
        return value + this.$t('month');
      }
      return value;
    }
  }
};
</script>
