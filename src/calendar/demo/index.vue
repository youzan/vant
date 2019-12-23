<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-cell
        :title="$t('selectDate')"
        is-link
        @click="toggle('selectDate', true)"
      />
    </demo-block>

    <van-popup
      v-model="show.selectDate"
      round
      closeable
      position="bottom"
    >
      <van-calendar v-model="date.selectDate" :title="$t('title')" />
    </van-popup>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      title: '日期选择',
      selectDate: '选择日期'
    },
    'en-US': {
      title: 'Select Date',
      selectDate: 'Select Date'
    }
  },

  data() {
    return {
      date: {
        selectDate: null
      },
      show: {
        selectDate: false
      }
    };
  },

  methods: {
    toggle(type, show) {
      this.show[type] = show;
    }
  }
};
</script>
