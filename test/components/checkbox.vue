<template>
  <van-checkbox-group v-model="result" :max="max">
    <van-checkbox v-for="(item, index) in list" :key="index" :name="item" :disabled="index === 2">复选框{{ item }}</van-checkbox>
  </van-checkbox-group>
</template>

<script>
export default {
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
