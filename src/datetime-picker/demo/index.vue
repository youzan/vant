<template>
  <demo-section>
    <demo-block :title="t('title1')">
      <van-datetime-picker
        v-model="currentDate1"
        type="datetime"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block :title="t('title2')">
      <van-datetime-picker
        v-model="currentDate2"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block :title="t('title3')">
      <van-datetime-picker
        v-model="currentDate3"
        type="year-month"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block :title="t('title4')">
      <van-datetime-picker
        v-model="currentTime1"
        type="time"
        :min-hour="10"
        :max-hour="20"
      />
    </demo-block>

    <demo-block :title="t('optionFilter')">
      <van-datetime-picker
        v-model="currentTime2"
        type="time"
        :filter="filter"
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
      month: '月',
      optionFilter: '选项过滤器',
    },
    'en-US': {
      title1: 'Choose DateTime',
      title2: 'Choose Date',
      title3: 'Choose Year-Month',
      title4: 'Choose Time',
      year: ' Year',
      month: ' Month',
      optionFilter: 'Option Filter',
    },
  },

  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate1: new Date(2020, 0, 1),
      currentDate2: null,
      currentDate3: new Date(2020, 0, 1),
      currentTime1: '12:00',
      currentTime2: '12:00',
    };
  },

  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return value + this.t('year');
      }
      if (type === 'month') {
        return value + this.t('month');
      }
      return value;
    },

    filter(type, values) {
      if (type === 'minute') {
        return values.filter(value => value % 5 === 0);
      }

      return values;
    },
  },
};
</script>
