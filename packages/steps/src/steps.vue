<template>
  <div>
    <h2>author: {{ author }}</h2>
    <div>Hello {{ name }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Sample',
    props: ['author'],
    data() {
      return {
        name: 'World'
      };
    }
  };
</script>
