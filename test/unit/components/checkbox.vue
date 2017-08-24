<template>
  <van-checkbox-group v-model="result">
    <van-checkbox v-for="(item, index) in list" :key="index" :name="item">复选框{{item}}</van-checkbox>
  </van-checkbox-group>
</template>

<script>
import Checkbox from 'packages/checkbox';
import CheckboxGroup from 'packages/checkbox-group';

export default {
  components: {
    'van-checkbox': Checkbox,
    'van-checkbox-group': CheckboxGroup
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
