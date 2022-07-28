<script setup lang="ts">
import VanSpace from '..';
import VanButton from '../../button';
import VanRadio from '../../radio';
import VanRadioGroup from '../../radio-group';
import { ref } from 'vue';
import { useTranslate } from '../../../docs/site';
import { SpaceSize, SpaceAlign } from '../Space';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    vertical: '垂直排列',
    size: '尺寸',
    align: '对齐方式',
    wrap: '换行',
  },
  'en-US': {
    basic: 'basic',
    vertical: 'vertical',
    size: 'size',
    align: 'align',
    wrap: 'wrap',
  },
});

const size = ref<SpaceSize>('');
const align = ref<SpaceAlign>('center');
</script>

<template>
  <demo-block :title="t('basic')">
    <van-space>
      <van-button type="primary">按钮</van-button>
      <van-button type="primary">按钮</van-button>
      <van-button type="primary">按钮</van-button>
      <van-button type="primary">按钮</van-button>
      <van-button type="primary">按钮</van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('vertical')">
    <van-space direction="vertical" fill>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('size')">
    <van-radio-group v-model="size" direction="horizontal">
      <van-radio name="small">small</van-radio>
      <van-radio name="">默认</van-radio>
      <van-radio name="large">large</van-radio>
    </van-radio-group>
    <br />
    <van-space :size="size">
      <van-button type="primary">按钮</van-button>
      <van-button type="primary">按钮</van-button>
      <van-button type="primary">按钮</van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('align')">
    <van-radio-group v-model="align" direction="horizontal">
      <van-radio name="start">start</van-radio>
      <van-radio name="center">center</van-radio>
      <van-radio name="end">end</van-radio>
      <van-radio name="baseline">baseline</van-radio>
    </van-radio-group>
    <br />
    <van-space :align="align" style="padding: 10px; background: #f3f2f5">
      <div>Space</div>
      <van-button type="primary">按钮</van-button>
      <div style="padding: 20px; border: 1px solid #eee">
        <div>标题</div>
        <div>内容</div>
      </div>
    </van-space>
  </demo-block>

  <demo-block :title="t('wrap')">
    <van-space wrap>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
      <van-button type="primary" block>按钮</van-button>
    </van-space>
  </demo-block>
</template>
