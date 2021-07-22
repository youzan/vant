<template>
  <basic-usage />
  <validate-rules />
  <field-type />
</template>

<script lang="ts">
import BasicUsage from './BasicUsage.vue';
import ValidateRules from './ValidateRules.vue';
import FieldType from './FieldType.vue';

export default {
  components: {
    BasicUsage,
    FieldType,
    ValidateRules,
  },
};
</script>
