<template>
  <zan-checkbox-group v-model="result">
    <zan-checkbox v-for="item in list" :name="item">复选框{{item}}</zan-checkbox>
  </zan-checkbox-group>
</template>

<script>
import Checkbox from 'packages/checkbox';
import CheckboxGroup from 'packages/checkbox-group';

export default {
  components: {
    'zan-checkbox': Checkbox,
    'zan-checkbox-group': CheckboxGroup
  },

  data() {
    return {
      list: [
        'a',
        'b',
        'c',
        'd'
      ],
      result: ['a', 'b']
    };
  }
};
</script>
