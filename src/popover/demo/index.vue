<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-popover
        v-model="show.lightTheme"
        :actions="t('actions')"
        placement="bottom-start"
        style="margin-left: 16px;"
      >
        <template #reference>
          <van-button type="primary" @click="show.lightTheme = true">
            {{ t('lightTheme') }}
          </van-button>
        </template>
      </van-popover>
      <van-popover
        v-model="show.darkTheme"
        theme="dark"
        :actions="t('actions')"
        style="margin-left: 16px;"
      >
        <template #reference>
          <van-button type="primary" @click="show.darkTheme = true">
            {{ t('darkTheme') }}
          </van-button>
        </template>
      </van-popover>
    </demo-block>

    <demo-block :title="t('placement')">
      <van-field
        is-link
        readonly
        name="picker"
        :label="t('choosePlacement')"
        @click="showPicker = true"
      />

      <van-popup
        v-model="showPicker"
        round
        position="bottom"
        get-container="body"
      >
        <div class="demo-popover-box">
          <van-popover
            v-model="show.placement"
            theme="dark"
            :actions="t('shortActions')"
            :placement="currentPlacement"
          >
            <template #reference>
              <div class="demo-popover-refer" />
            </template>
          </van-popover>
        </div>
        <van-picker :columns="placements" @change="onPickerChange" />
      </van-popup>
    </demo-block>

    <demo-block :title="t('actionOptions')">
      <van-popover
        v-model="show.showIcon"
        :actions="t('actionsWithIcon')"
        placement="bottom-start"
        style="margin-left: 16px;"
      >
        <template #reference>
          <van-button type="primary" @click="show.showIcon = true">
            {{ t('showIcon') }}
          </van-button>
        </template>
      </van-popover>

      <van-popover
        v-model="show.disableAction"
        :actions="t('actionsDisabled')"
        style="margin-left: 16px;"
      >
        <template #reference>
          <van-button type="primary" @click="show.disableAction = true">
            {{ t('disableAction') }}
          </van-button>
        </template>
      </van-popover>
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-popover
        v-model="show.customContent"
        placement="top-start"
        style="margin-left: 16px;"
      >
        <van-grid
          square
          clickable
          :border="false"
          column-num="3"
          style="width: 240px;"
        >
          <van-grid-item
            v-for="i in 6"
            :key="i"
            icon="photo-o"
            :text="t('option')"
            @click="show.customContent = false"
          />
        </van-grid>
        <template #reference>
          <van-button type="primary" @click="show.customContent = true">
            {{ t('customContent') }}
          </van-button>
        </template>
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
      customContent: '自定义内容',
      disableAction: '禁用选项',
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
      customContent: 'Custom Content',
      disableAction: 'Disable Action',
      choosePlacement: 'Placement',
    },
  },

  data() {
    return {
      show: {
        showIcon: false,
        placement: false,
        darkTheme: false,
        lightTheme: false,
        customContent: false,
        disableAction: false,
      },
      showPicker: false,
      currentPlacement: '',
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
    onPickerChange(picker, value) {
      setTimeout(() => {
        this.show.placement = true;
        this.currentPlacement = value;
      });
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
    margin: 110px 0;
  }
}
</style>
