<template>
  <demo-section>
    <demo-block :title="$t('basicUsage')">
      <van-button
        type="primary"
        @click="showBasic = true"
      >
        {{ $t('buttonBasic') }}
      </van-button>
      <van-popup
        v-model="showBasic"
        :style="{ padding: '30px 50px' }"
      >
        {{ $t('content') }}
      </van-popup>
    </demo-block>

    <demo-block :title="$t('position')">
      <van-row>
        <van-button
          type="primary"
          @click="showTop = true"
        >
          {{ $t('buttonTop') }}
        </van-button>

        <van-popup
          v-model="showTop"
          position="top"
          :style="{ height: '20%' }"
        />

        <van-button
          type="primary"
          @click="showBottom = true"
        >
          {{ $t('buttonBottom') }}
        </van-button>

        <van-popup
          v-model="showBottom"
          position="bottom"
          :style="{ height: '20%' }"
        />
      </van-row>

      <van-button
        type="primary"
        @click="showLeft = true"
      >
        {{ $t('buttonLeft') }}
      </van-button>

      <van-popup
        v-model="showLeft"
        position="left"
        :style="{ width: '20%', height: '100%' }"
      />

      <van-button
        type="primary"
        @click="showRight = true"
      >
        {{ $t('buttonRight') }}
      </van-button>

      <van-popup
        v-model="showRight"
        position="right"
        :style="{ width: '20%', height: '100%' }"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('roundCorner')"
    >
      <van-button
        type="primary"
        @click="showRoundCorner = true"
      >
        {{ $t('roundCorner') }}
      </van-button>
      <van-popup
        v-model="showRoundCorner"
        round
        position="bottom"
        :style="{ height: '20%' }"
      />
    </demo-block>

    <demo-block
      v-if="!$attrs.weapp"
      :title="$t('getContainer')"
    >
      <van-button
        type="primary"
        @click="showGetContainer = true"
      >
        {{ $t('getContainer') }}
      </van-button>
      <van-popup
        v-model="showGetContainer"
        get-container="body"
        :style="{ padding: '30px 50px' }"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  i18n: {
    'zh-CN': {
      position: '弹出位置',
      buttonBasic: '展示弹出层',
      buttonTop: '顶部弹出',
      buttonBottom: '底部弹出',
      buttonLeft: '左侧弹出',
      buttonRight: '右侧弹出',
      getContainer: '指定挂载节点',
      roundCorner: '圆角弹窗'
    },
    'en-US': {
      position: 'Position',
      buttonBasic: 'Show Popup',
      buttonTop: 'From Top',
      buttonBottom: 'From Bottom',
      buttonLeft: 'From Left',
      buttonRight: 'From Right',
      getContainer: 'Get Container',
      roundCorner: 'Round Corner'
    }
  },

  data() {
    return {
      showBasic: false,
      showTop: false,
      showBottom: false,
      showLeft: false,
      showRight: false,
      showRoundCorner: false,
      showGetContainer: false
    };
  }
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popup {
  .van-row {
    margin-bottom: 15px;
  }

  .van-button {
    margin-left: 15px;
  }
}
</style>
