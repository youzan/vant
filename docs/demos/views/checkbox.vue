<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-checkbox v-model="checkbox1">{{ $t('checkbox') }} 1</van-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-checkbox :value="false" disabled>{{ $t('checkbox') }} 2</van-checkbox>
      <van-checkbox :value="true" disabled>{{ $t('checkbox') }} 2</van-checkbox>
    </demo-block>

    <demo-block :title="$t('labelDisabled')">
      <van-checkbox v-model="checkbox3" label-disabled>{{ $t('checkbox') }} 2</van-checkbox>
      <van-checkbox v-model="checkbox4" label-disabled>{{ $t('checkbox') }} 2</van-checkbox>
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

    <demo-block :title="$t('title5')">
      <van-checkbox-group v-model="result2" :max="max">
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
      labelDisabled: '禁用 Checkbox 内容部分点击事件',
      title3: 'Checkbox 组',
      title4: '与 Cell 组件一起使用',
      title5: '设置最大可选数',
    },
    'en-US': {
      checkbox: 'Checkbox',
      labelDisabled: 'Disable Checkbox Label click event',
      title3: 'Checkbox Group',
      title4: 'Inside a Cell',
      title5: 'Maximum amount of checked options'
    }
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: false,
      checkbox4: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b'],
      result2: [],
      max: 2
    };
  }
};
</script>

<style lang="postcss">
.demo-checkbox {
  .van-checkbox {
    margin: 10px 0 0 20px;
  }

  .van-cell {
    .van-checkbox {
      margin: 0;
      display: flex;
      flex-direction: row-reverse;

      &__label {
        margin: 0;
        flex: 1;
      }
    }
  }
}
</style>
