<template>
  <demo-section>
    <demo-block :title="t('dateType')">
      <van-datetime-picker
        v-model="value.date"
        type="date"
        :title="t('dateType')"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block :title="t('yearMonthType')">
      <van-datetime-picker
        v-model="value.yearMonth"
        type="year-month"
        :title="t('yearMonthType')"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block :title="t('monthDayType')">
      <van-datetime-picker
        v-model="value.monthDayType"
        type="month-day"
        :title="t('monthDayType')"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
      />
    </demo-block>

    <demo-block :title="t('timeType')">
      <van-datetime-picker
        v-model="value.time"
        type="time"
        :title="t('timeType')"
        :min-hour="10"
        :max-hour="20"
      />
    </demo-block>

    <demo-block :title="t('datetimeType')">
      <van-datetime-picker
        v-model="value.datetime"
        type="datetime"
        :title="t('datetimeType')"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </demo-block>

    <demo-block :title="t('optionFilter')">
      <van-datetime-picker
        v-model="value.optionFilter"
        type="time"
        :title="t('optionFilter')"
        :filter="filter"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      day: '日',
      year: '年',
      month: '月',
      timeType: '选择时间',
      dateType: '选择年月日',
      datetimeType: '选择完整时间',
      monthDayType: '选择月日',
      yearMonthType: '选择年月',
      optionFilter: '选项过滤器',
    },
    'en-US': {
      day: 'Day',
      year: ' Year',
      month: ' Month',
      timeType: 'Choose Time',
      dateType: 'Choose Date',
      datetimeType: 'Choose DateTime',
      monthDayType: 'Choose Month-Day',
      yearMonthType: 'Choose Year-Month',
      optionFilter: 'Option Filter',
    },
  },

  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      value: {
        date: null,
        time: '12:00',
        datetime: new Date(2020, 0, 1),
        monthDay: new Date(2020, 0, 1),
        yearMonth: new Date(2020, 0, 1),
        optionFilter: '12:00',
      },
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
      if (type === 'day') {
        return value + this.t('day');
      }
      return value;
    },

    filter(type, values) {
      if (type === 'minute') {
        return values.filter((value) => value % 5 === 0);
      }

      return values;
    },
  },
};
</script>
