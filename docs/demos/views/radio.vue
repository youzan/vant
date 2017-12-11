<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <div class="van-radios">
        <van-radio name="1" v-model="radio1">{{ $t('radio') }} 1</van-radio>
        <van-radio name="2" v-model="radio1">{{ $t('radio') }} 2</van-radio>
      </div>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <div class="van-radios">
        <van-radio name="1" v-model="radio2" disabled>{{ $t('text1') }}</van-radio>
        <van-radio name="2" v-model="radio2" disabled>{{ $t('text2') }}</van-radio>
      </div>
    </demo-block>

    <demo-block :title="$t('title3')">
      <div class="van-radios">
        <van-radio-group v-model="radio3">
          <van-radio name="1">{{ $t('radio') }} 1</van-radio>
          <van-radio name="2">{{ $t('radio') }} 2</van-radio>
        </van-radio-group>
      </div>
    </demo-block>

    <demo-block :title="$t('title4')">
      <van-radio-group v-model="radio4">
        <van-cell-group>
          <van-cell><van-radio name="1">{{ $t('radio') }}1</van-radio></van-cell>
          <van-cell><van-radio name="2">{{ $t('radio') }}2</van-radio></van-cell>
        </van-cell-group>
      </van-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      radio: '单选框',
      text1: '未选中禁用',
      text2: '选中且禁用',
      title3: 'Radio 组',
      title4: '与 Cell 组件一起使用'
    },
    'en-US': {
      radio: 'Radio',
      text1: 'Disabled',
      text2: 'Disabled and checked',
      title3: 'Radio Group',
      title4: 'Inside a Cell'
    }
  },

  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1',
      radio4: '1'
    };
  }
};
</script>

<style lang="postcss">
.demo-radio {
  background: #fff;

  .van-radios {
    padding: 0 20px;

    .van-radio {
      margin: 10px 0;
    }
  }

  .van-cell {
    .van-radio__input {
      float: right;
      position: static;
    }
    
    .van-radio__label {
      margin: 0;
    }
  }
}
</style>
