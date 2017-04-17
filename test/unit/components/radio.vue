<template>
  <zan-radio-group v-model="radio">
    <zan-radio name="1">单选框1</zan-radio>
    <zan-radio name="2">单选框2</zan-radio>
  </zan-radio-group>
</template>
  
<script>
import Radio from 'packages/radio';
import RadioGroup from 'packages/radio-group';

export default {
  components: {
    'zan-radio': Radio,
    'zan-radio-group': RadioGroup
  },

  data() {
    return {
      radio: '1'
    };
  }
};
</script>
