<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button type="primary" @click="show1 = true">{{ $t('buttonText') }}</van-button>
      <van-action-sheet v-model="show1" :actions="simpleActions" @select="onSelect" />
    </demo-block>

    <demo-block :title="$t('status')">
      <van-button type="primary" @click="show2 = true">{{ $t('buttonText') }}</van-button>
      <van-action-sheet v-model="show2" close-on-click-action :actions="statusActions" />
    </demo-block>

    <demo-block :title="$t('showCancel')">
      <van-button type="primary" @click="show3 = true">{{ $t('buttonText') }}</van-button>
      <van-action-sheet
        v-model="show3"
        :actions="simpleActions"
        close-on-click-action
        :cancel-text="$t('cancel')"
        @cancel="onCancel"
      />
    </demo-block>

    <demo-block :title="$t('showDescription')">
      <van-button type="primary" @click="show4 = true">{{ $t('buttonText') }}</van-button>
      <van-action-sheet
        v-model="show4"
        :actions="simpleActions"
        close-on-click-action
        :description="$t('description')"
      />
    </demo-block>

    <demo-block :title="$t('showTitle')">
      <van-button type="primary" @click="show5 = true">{{ $t('buttonText') }}</van-button>
      <van-action-sheet v-model="show5" :title="$t('title')">
        <p>{{ $t('content') }}</p>
      </van-action-sheet>
    </demo-block>
  </demo-section>
</template>

<script>
import { GREEN } from '../../utils/constant';

export default {
  i18n: {
    'zh-CN': {
      buttonText: '弹出菜单',
      status: '选项状态',
      subname: '副文本',
      disabledOption: '禁用选项',
      showTitle: '展示标题栏',
      showCancel: '展示取消按钮',
      showDescription: '展示描述信息',
      description: '这是一段描述信息'
    },
    'en-US': {
      buttonText: 'Show ActionSheet',
      status: 'Status',
      subname: 'Subname',
      disabledOption: 'Disabled Option',
      showTitle: 'ActionSheet with title',
      showCancel: 'ActionSheet with cancel button',
      showDescription: 'ActionSheet with description',
      description: 'Description'
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false
    };
  },

  computed: {
    simpleActions() {
      return [
        { name: this.$t('option') },
        { name: this.$t('option') },
        { name: this.$t('option'), subname: this.$t('subname') }
      ];
    },

    statusActions() {
      return [
        { name: this.$t('option'), color: GREEN },
        { loading: true },
        { name: this.$t('disabledOption'), disabled: true }
      ];
    }
  },

  methods: {
    onSelect(item) {
      this.show1 = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast('cancel');
    }
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-action-sheet {
  background-color: @white;

  .van-button {
    margin-left: @padding-md;
  }

  p {
    padding: @padding-md @padding-md @padding-md * 10;
  }
}
</style>
