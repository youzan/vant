<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell
        is-link
        :title="$t('selectSingleDate')"
        :value="formatFullDate(date.selectSingleDate)"
        @click="toggle('selectSingleDate', true)"
      />

      <van-calendar
        v-model="show.selectSingleDate"
        :poppable="false"
        @select="onSelect($event, 'selectSingleDate')"
      />

      <van-cell
        is-link
        :title="$t('selectDateRange')"
        :value="formatDateRange(date.selectDateRange)"
        @click="toggle('selectDateRange', true)"
      />

      <van-calendar
        v-model="show.selectDateRange"
        type="range"
        @select="onSelect($event, 'selectDateRange')"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      selectSingleDate: '选择单个日期',
      selectDateRange: '选择日期区间'
    },
    'en-US': {
      selectSingleDate: 'Select Single Date',
      selectDateRange: 'Select Date Range'
    }
  },

  data() {
    return {
      date: {
        selectSingleDate: null,
        selectDateRange: []
      },
      show: {
        selectSingleDate: false,
        selectDateRange: false
      }
    };
  },

  methods: {
    toggle(type, show) {
      this.show[type] = show;
    },

    formatDate(date) {
      if (date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      }
    },

    formatFullDate(date) {
      if (date) {
        return `${date.getFullYear()}/${this.formatDate(date)}`;
      }
    },

    formatDateRange(dateRange) {
      if (dateRange.length) {
        const [start, end] = dateRange;
        return `${this.formatDate(start)} - ${this.formatDate(end)}`;
      }
    },

    onSelect(date, type) {
      this.date[type] = date;
      this.show[type] = false;
    }
  }
};
</script>
