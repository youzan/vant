<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-checkbox v-model="checkbox1">{{ $t('checkbox') }} 1</van-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-checkbox :value="false" disabled>{{ $t('checkbox') }} 2</van-checkbox>
      <van-checkbox :value="true" disabled>{{ $t('checkbox') }} 2</van-checkbox>
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-checkbox-group v-model="result">
        <van-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-checkbox-group v-model="result">
        <van-cell-group>
          <van-cell v-for="(item, index) in list" :key="index">
            <van-checkbox :name="item">{{ $t('checkbox') }} {{ item }}</van-checkbox>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      checkbox: '复选框',
      title3: 'Checkbox 组',
      title4: '与 Cell 组件一起使用'
    },
    'en-US': {
      checkbox: 'Checkbox',
      title3: 'Checkbox Group',
      title4: 'Inside a Cell'
    }
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b']
    };
  }
};
</script>

<style lang="postcss">
.demo-checkbox {
  background: #fff;

  .van-checkbox {
    margin: 10px 0 0 20px;
  }

  .van-cell {
    .van-checkbox {
      margin: 0;
    }

    .van-checkbox__input {
      float: right;
      position: static;
    }

    span {
      margin: 0;
    }
  }
}
</style>
