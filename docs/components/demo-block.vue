<template>
  <div
    class="demo-block"
    :class="blockClass">
    <slot name="examples"></slot>
      <slot name="highlight">
      </slot>
  </div>
</template>

<script>
export default {
  props: {
    description: String
  },

  computed: {
    blockClass() {
      return `demo-${this.$route.path.split('/').pop()}`;
    },

    codeAreaHeight() {
      return Math.max(this.$el.getElementsByClassName('examples')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight);
    }
  },

  mounted() {
    // this.$el.getElementsByClassName('highlight')[0].style.height = `${this.codeAreaHeight + 1}px`;
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
    }

    .examples {
      width: 320px;
      float: right;
      box-sizing: border-box;
      padding: 74px 0 0;
      min-height: 200px;
      max-height: 600px;
      overflow: auto;
    }

    .highlight {
      margin-right: 345px;
      box-sizing: border-box;
      border: 1px solid #E5E5E5;
      border-radius: 4px;

      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        padding: 20px;
        background-color: #f8f8f8;

        &::before {
          content: none;
        }
      }
    }
  }
</style>
