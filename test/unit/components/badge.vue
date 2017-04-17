<template>
  <zan-badge-group>
    <zan-badge title="热销榜" info="8" @click="onItemClick"></zan-badge>
    <zan-badge title="手握寿司" info="199" @click="onItemClick"></zan-badge>
  </zan-badge-group>
</template>

<script>
import Badge from 'packages/badge';
import BadgeGroup from 'packages/badge-group';

export default {
  components: {
    'zan-badge': Badge,
    'zan-badge-group': BadgeGroup
  },

  methods: {
    onItemClick() {}
  }
};
</script>
