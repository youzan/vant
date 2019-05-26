<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button
        type="primary"
        @click="show1 = true"
      >
        {{ $t('buttonText') }}
      </van-button>
      <van-action-sheet
        v-model="show1"
        :actions="simpleActions"
        safe-area-inset-bottom
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="$t('status')">
      <van-button
        type="primary"
        @click="show2 = true"
      >
        {{ $t('buttonText') }}
      </van-button>
      <van-action-sheet
        v-model="show2"
        :actions="statusActions"
        safe-area-inset-bottom
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="$t('title2')">
      <van-button
        type="primary"
        @click="show3 = true"
      >
        {{ $t('buttonText') }}
      </van-button>
      <van-action-sheet
        v-model="show3"
        :actions="simpleActions"
        :cancel-text="$t('cancel')"
        safe-area-inset-bottom
        @cancel="onCancel"
        @select="onSelect"
      />
    </demo-block>

    <demo-block :title="$t('title3')">
      <van-button
        type="primary"
        @click="show4 = true"
      >
        {{ $t('buttonText') }}
      </van-button>
      <van-action-sheet
        v-model="show4"
        :title="$t('title')"
        safe-area-inset-bottom
      >
        <p>{{ $t('content') }}</p>
      </van-action-sheet>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      buttonText: '弹出菜单',
      title2: '展示取消按钮',
      title3: '展示标题栏',
      status: '选项状态',
      description: '描述信息',
      disabledOption: '禁用选项'
    },
    'en-US': {
      buttonText: 'Show ActionSheet',
      title2: 'ActionSheet with cancel button',
      title3: 'ActionSheet with title',
      status: 'Status',
      description: 'Description',
      disabledOption: 'Disabled Option'
    }
  },

  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false
    };
  },

  computed: {
    simpleActions() {
      return [
        { name: this.$t('option') },
        { name: this.$t('option') },
        { name: this.$t('option'), subname: this.$t('description') }
      ];
    },

    statusActions() {
      return [
        { name: this.$t('option') },
        { loading: true },
        { name: this.$t('disabledOption'), disabled: true }
      ];
    }
  },

  methods: {
    onSelect(item) {
      this.show1 = false;
      this.show2 = false;
      this.$toast(item.name);
    },

    onCancel() {
      this.$toast('cancel');
    }
  }
};
</script>

<style lang="less">
@import "../../style/var";

.demo-action-sheet {
  background-color: @white;

  .van-button {
    margin-left: 15px;
  }

  p {
    padding: 20px;
  }
}
</style>
