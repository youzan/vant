<template>
  <div class="demo-block" :class="blockClass">
    <slot name="examples"></slot>
    <slot name="highlight"></slot>
  </div>
</template>

<script>
export default {
  computed: {
    blockClass() {
      return `demo-${this.$route.path.split('/').pop()}`;
    }
  }
};
</script>

<style>
  .demo-block {
    transition: .2s;
    overflow: hidden;
    margin-bottom: 20px;

    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
      overflow: auto;
      white-space: pre-wrap;
    }

    .examples {
      width: 320px;
      box-sizing: border-box;
      padding: 10px 0;
      min-height: 60px;
      max-height: 500px;
      overflow: auto;
      background-color: #F8F8F8;
      border: 1px solid #E5E5E5;
      float: right;
    }

    .highlight {
      box-sizing: border-box;
      border: 1px solid #E5E5E5;
      border-radius: 4px;
      margin-right: 345px;

      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        padding: 20px;
        background-color: #F8F8F8;

        &::before {
          content: none;
        }
      }
    }
  }
</style>
