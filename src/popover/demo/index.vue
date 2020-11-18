<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-popover
        v-model="show.lightTheme"
        :actions="t('actions')"
        placement="bottom"
        style="margin-left: 16px;"
      >
        <van-button type="primary" @click="show.lightTheme = true">
          {{ t('lightTheme') }}
        </van-button>
      </van-popover>
      <van-popover
        v-model="show.darkTheme"
        theme="dark"
        :actions="t('actions')"
        placement="bottom"
        style="margin-left: 16px;"
      >
        <van-button type="primary" @click="show.darkTheme = true">
          {{ t('darkTheme') }}
        </van-button>
      </van-popover>
    </demo-block>

    <demo-block :title="t('placement')">
      <van-field
        is-link
        readonly
        name="picker"
        :value="currentPlacement"
        :label="t('choosePlacement')"
        :placeholder="t('placeholder')"
        @click="showPicker = true"
      />

      <van-popup
        v-model="showPicker"
        round
        position="bottom"
        get-container="body"
      >
        <van-picker
          show-toolbar
          :columns="placements"
          @confirm="onConfirm"
          @cancel="showPicker = false"
        />
      </van-popup>

      <div class="demo-popover-box">
        <van-popover
          :value="true"
          :actions="t('shortActions')"
          :placement="currentPlacement"
        >
          <div class="demo-popover-refer" />
        </van-popover>
      </div>
    </demo-block>

    <demo-block :title="t('actionOptions')">
      <van-popover
        v-model="show.showIcon"
        :actions="t('actionsWithIcon')"
        placement="top"
        style="margin-left: 16px;"
      >
        <van-button type="primary" @click="show.showIcon = true">
          {{ t('showIcon') }}
        </van-button>
      </van-popover>

      <van-popover
        v-model="show.disabled"
        :actions="t('actionsDisabled')"
        placement="top"
        style="margin-left: 16px;"
      >
        <van-button type="primary" @click="show.disabled = true">
          {{ t('disabled') }}
        </van-button>
      </van-popover>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
      shortActions: [{ text: '选项一' }, { text: '选项二' }],
      actionsWithIcon: [
        { text: '选项一', icon: 'add-o' },
        { text: '选项二', icon: 'music-o' },
        { text: '选项三', icon: 'more-o' },
      ],
      actionsDisabled: [
        { text: '选项一', disabled: true },
        { text: '选项二', disabled: true },
        { text: '选项三' },
      ],
      showIcon: '展示图标',
      placement: '弹出位置',
      darkTheme: '深色风格',
      lightTheme: '浅色风格',
      showPopover: '点击弹出气泡',
      actionOptions: '选项配置',
      choosePlacement: '选择弹出位置',
    },
    'en-US': {
      actions: [
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' },
      ],
      shortActions: [{ text: 'Option 1' }, { text: 'Option 2' }],
      actionsWithIcon: [
        { text: 'Option 1', icon: 'add-o' },
        { text: 'Option 2', icon: 'music-o' },
        { text: 'Option 3', icon: 'more-o' },
      ],
      actionsDisabled: [
        { text: 'Option 1', disabled: true },
        { text: 'Option 2', disabled: true },
        { text: 'Option 3' },
      ],
      showIcon: 'Show Icon',
      placement: 'Placement',
      darkTheme: 'Dark Theme',
      lightTheme: 'Light Theme',
      showPopover: 'Show Popover',
      actionOptions: 'Action Options',
      choosePlacement: 'Choose Placement',
    },
  },

  data() {
    return {
      show: {
        disabled: false,
        showIcon: false,
        placement: false,
        darkTheme: false,
        lightTheme: false,
      },
      showPicker: false,
      currentPlacement: 'top',
      placements: [
        'top',
        'top-start',
        'top-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
    };
  },

  methods: {
    onConfirm(value) {
      this.showPicker = false;
      this.currentPlacement = value;
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popover {
  min-height: 200vh;

  &-refer {
    width: 60px;
    height: 60px;
    background-color: @blue;
    border-radius: 8px;
  }

  .van-field {
    width: auto;
    margin: 0 12px;
    overflow: hidden;
    border-radius: 8px;
  }

  &-box {
    display: flex;
    justify-content: center;
    margin: 110px 0 80px;
  }
}
</style>
