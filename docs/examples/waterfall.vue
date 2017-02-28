<template>
  <div class="page-card">
    <h1 class="page-title">Waterfall</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <div>
      <div
        v-waterfall-lower="loadMore"
        v-waterfall-upper="loadMoreUpper"
        waterfall-disabled="isWaterfallDisabled"
        waterfall-offset="400"
      >
        <div v-for="item in list" class="zan-cell" style="text-align: center;">{{ item }}</div>
        <!-- <zan-loading v-if="loading" style="text-align: center;"></zan-loading> -->
        <div style="text-align: center;">loading</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      loading: false,
      finished: false
    };
  },
  methods: {
    loadMore() {
      if (this.list.length >= 200) {
        this.finished = true;
        return;
      }

      this.loading = true;
      setTimeout(() => {
        let lastNumber = this.list[this.list.length - 1];
        for (let i = 0; i < 5; i++) {
          lastNumber += 1;
          this.list.push(lastNumber);
        }
        this.loading = false;
      }, 2500);
    },
    loadMoreUpper() {
      if (this.list[0] < 0) return;
      this.list.unshift(-1);
    }
  },
  computed: {
    isWaterfallDisabled: function() {
      return this.loading || this.finished;
    }
  }
};
</script>

<style>
.page-sub-title {
  padding: 15px;
}
</style>
