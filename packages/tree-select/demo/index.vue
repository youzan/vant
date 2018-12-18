<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="onNavClick"
        @itemclick="onItemClick"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      group1: '所有城市',
      group2: '浙江',
      group3: '江苏',
      group4: '福建',
      city1: [{
        text: '杭州',
        id: 1
      }, {
        text: '温州',
        id: 2
      }, {
        text: '宁波',
        id: 3,
        disabled: true
      }, {
        text: '义乌',
        id: 4
      }],
      city2: [{
        text: '南京',
        id: 5
      }, {
        text: '无锡',
        id: 6
      }, {
        text: '徐州',
        id: 7
      }, {
        text: '苏州',
        id: 8
      }],
      city3: [{
        text: '泉州',
        id: 9
      }, {
        text: '厦门',
        id: 10
      }]
    },
    'en-US': {
      group1: 'All',
      group2: 'Group1',
      group3: 'Group2',
      group4: 'Group3',
      city1: [{
        text: 'Delaware',
        id: 1
      }, {
        text: 'Florida',
        id: 2
      }, {
        text: 'Georqia',
        id: 3,
        disabled: true
      }, {
        text: 'Indiana',
        id: 4
      }],
      city2: [{
        text: 'Alabama',
        id: 5
      }, {
        text: 'Kansas',
        id: 6
      }, {
        text: 'Louisiana',
        id: 7
      }, {
        text: 'Texas',
        id: 8
      }],
      city3: [{
        text: 'Alabama',
        id: 9
      }, {
        text: 'Kansas',
        id: 10
      }],
    }
  },

  data() {
    return {
      mainActiveIndex: 0,
      activeId: 1
    };
  },

  computed: {
    items() {
      return [{
        text: this.$t('group1'),
        children: [...this.$t('city1'), ...this.$t('city2')]
      }, {
        text: this.$t('group2'),
        children: this.$t('city1')
      }, {
        text: this.$t('group3'),
        children: this.$t('city2')
      }, {
        text: this.$t('group4'),
        disabled: true,
        children: this.$t('city3')
      }];
    }
  },

  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  }
};
</script>
