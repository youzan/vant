<template>
  <van-checkbox-group v-model="result" :max="max">
    <van-checkbox v-for="(item, index) in list" :key="index" :name="item" :disabled="index === 2">复选框{{item}}</van-checkbox>
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
      result: ['a', 'b'],
      max: 0
    };
  }
};
</script>
