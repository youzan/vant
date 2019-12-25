<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell
        is-link
        :title="$t('selectSingleDate')"
        :value="formatFullDate(date.selectSingleDate)"
        @click="toggle('selectSingleDate', true)"
      />

      <van-popup
        v-model="show.selectSingleDate"
        round
        closeable
        position="bottom"
        style="height: 80vh;"
      >
        <van-calendar
          v-model="date.selectSingleDate"
          @select="show.selectSingleDate = false"
        />
      </van-popup>

      <van-cell
        is-link
        :title="$t('selectDateRange')"
        :value="formatDateRange(date.selectDateRange)"
        @click="toggle('selectDateRange', true)"
      />

      <van-popup
        v-model="show.selectDateRange"
        round
        closeable
        position="bottom"
        style="height: 80vh;"
      >
        <van-calendar
          v-model="date.selectDateRange"
          type="range"
          @select="show.selectDateRange = false"
        />
      </van-popup>
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
    }
  }
};
</script>
