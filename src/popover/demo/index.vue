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
          :actions="t('actions')"
          :placement="currentPlacement"
        >
          <div class="demo-popover-refer" />
        </van-popover>
      </div>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      actions: [{ text: '文本' }, { text: '文本' }, { text: '文本' }],
      placement: '弹出位置',
      darkTheme: '深色风格',
      lightTheme: '浅色风格',
      showPopover: '点击弹出气泡',
      choosePlacement: '选择弹出位置',
    },
    'en-US': {
      actions: [{ text: 'Text' }, { text: 'Text' }, { text: 'Text' }],
      placement: 'Placement',
      darkTheme: 'Dark Theme',
      lightTheme: 'Light Theme',
      showPopover: 'Show Popover',
      choosePlacement: 'Choose Placement',
    },
  },

  data() {
    return {
      show: {
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
    margin-top: 160px;
  }
}
</style>
