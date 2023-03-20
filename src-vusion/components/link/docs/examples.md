```vue
<template>
  <van-link text="普通链接" @click="onTap"></van-link>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onTap() {
      return new Promise((resove) => {
        setTimeout(resolve, 3000);
      });
    },
  },
};
</script>
```
