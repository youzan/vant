<template>
  <div>
    <span v-for="a in arr">{{ a }}</span>
  </div>
</template>

<script>
const a = 1;
a = 1;
export default {
  name: 'Todo',
  data() {
    return {
      arr: [1, 2, 3],
    };
  },
};
</script>

<style></style>
