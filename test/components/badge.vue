<template>
  <van-badge-group>
    <van-badge title="热销榜" info="8" @click="onItemClick"></van-badge>
    <van-badge title="手握寿司" info="199" @click="onItemClick"></van-badge>
  </van-badge-group>
</template>

<script>
import Badge from 'packages/badge';
import BadgeGroup from 'packages/badge-group';

export default {
  components: {
    'van-badge': Badge,
    'van-badge-group': BadgeGroup
  },

  methods: {
    onItemClick() {}
  }
};
</script>
