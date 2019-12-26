<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell
        is-link
        :title="$t('selectSingleDate')"
        :value="formatFullDate(date.selectSingleDate)"
        @click="toggle('selectSingleDate', true)"
      />

      <van-cell
        is-link
        :title="$t('selectDateRange')"
        :value="formatDateRange(date.selectDateRange)"
        @click="toggle('selectDateRange', true)"
      />
    </demo-block>

    <demo-block :title="$t('showConfirm')">
      <van-cell
        is-link
        :title="$t('selectSingleDate')"
        :value="formatFullDate(date.selectSingleDate)"
        @click="toggle('selectSingleDate', true, 'showConfirm')"
      />

      <van-cell
        is-link
        :title="$t('selectDateRange')"
        :value="formatDateRange(date.selectDateRange)"
        @click="toggle('selectDateRange', true, 'showConfirm')"
      />
    </demo-block>

    <van-calendar
      v-model="show.selectSingleDate"
      :show-confirm="showConfirm"
      @confirm="onConfirm($event, 'selectSingleDate')"
    />

    <van-calendar
      v-model="show.selectDateRange"
      type="range"
      :show-confirm="showConfirm"
      @confirm="onConfirm($event, 'selectDateRange')"
    />
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      selectSingleDate: '选择单个日期',
      selectDateRange: '选择日期区间',
      showConfirm: '展示确认按钮'
    },
    'en-US': {
      selectSingleDate: 'Select Single Date',
      selectDateRange: 'Select Date Range',
      showConfirm: 'Show Confirm Button'
    }
  },

  data() {
    return {
      showConfirm: false,
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
    toggle(type, show, setting) {
      this.show[type] = show;

      if (setting === 'showConfirm') {
        this.showConfirm = true;
      } else {
        this.showConfirm = false;
      }
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

    onConfirm(date, type) {
      this.date[type] = date;
      this.show[type] = false;
    }
  }
};
</script>
