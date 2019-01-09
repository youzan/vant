<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-checkbox v-model="checkbox1">{{ $t('checkbox') }}</van-checkbox>
    </demo-block>

    <demo-block :title="$t('disabled')">
      <van-checkbox
        :value="false"
        disabled
      >
        {{ $t('checkbox') }}
      </van-checkbox>
      <van-checkbox
        :value="true"
        disabled
      >
        {{ $t('checkbox') }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="$t('customColor')">
      <van-checkbox
        v-model="checkbox2"
        checked-color="#07c160"
      >
        {{ $t('customColor') }}
      </van-checkbox>
    </demo-block>

    <demo-block :title="$t('customIcon')">
      <van-checkbox v-model="checkbox3">
        {{ $t('customIcon') }}
        <img
          slot="icon"
          slot-scope="props"
          :src="props.checked ? icon.active : icon.normal"
        >
      </van-checkbox>
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
      <van-checkbox-group
        v-model="result2"
        :max="2"
      >
        <van-checkbox
          v-for="(item, index) in list"
          :key="index"
          :name="item"
        >
          {{ $t('checkbox') }} {{ item }}
        </van-checkbox>
      </van-checkbox-group>
    </demo-block>

    <demo-block :title="$t('title5')">
      <van-checkbox-group v-model="result3">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in list"
            clickable
            :key="index"
            :title="$t('checkbox') + item"
            @click="toggle(index)"
          >
            <van-checkbox
              ref="checkboxes"
              :name="item"
            />
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
      customIcon: '自定义图标',
      customColor: '自定义颜色',
      title3: '复选框组',
      title4: '设置最大可选数',
      title5: '搭配单元格组件使用'
    },
    'en-US': {
      checkbox: 'Checkbox',
      customIcon: 'Custom Icon',
      customColor: 'Custom Color',
      title3: 'Checkbox Group',
      title4: 'Maximum amount of checked options',
      title5: 'Inside a Cell'
    }
  },

  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      list: [
        'a',
        'b',
        'c'
      ],
      result: ['a', 'b'],
      result2: [],
      result3: [],
      icon: {
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      }
    };
  },

  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>

<style lang="less">
.demo-checkbox {
  .van-checkbox {
    margin: 10px 0 0 20px;
  }

  .van-cell {
    .van-checkbox {
      margin: 0;
    }
  }

  img {
    height: 20px;
  }
}
</style>
