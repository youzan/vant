<template>
  <zan-row gutter="10">
    <zan-col span="8">
      <div class="gray">span: 8</div>
    </zan-col>
    <zan-col span="8">
      <div class="gray">span: 8</div>
    </zan-col>
    <zan-col span="8">
      <div class="gray">span: 8</div>
    </zan-col>
  </zan-row>
</template>

<script>
import Row from 'packages/row';
import Col from 'packages/col';

export default {
  components: {
    'zan-row': Row,
    'zan-col': Col
  }
};
</script>
