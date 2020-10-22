<template>
  <basic-usage />
  <validate-rules />
  <field-type />
</template>

<script>
import BasicUsage from './BasicUsage';
import ValidateRules from './ValidateRules';
import FieldType from './FieldType';

export default {
  components: {
    BasicUsage,
    FieldType,
    ValidateRules,
  },
};
</script>
