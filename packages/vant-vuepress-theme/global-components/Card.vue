<template>
  <div class="card">
    <h3 :id="title">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: String,
    labels: String,
  },
};
</script>
