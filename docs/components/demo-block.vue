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
  computed: {
    blockClass() {
      return `demo-${this.$route.path.split('/').pop()}`;
    },

    codeAreaHeight() {
      return Math.max(this.$el.getElementsByClassName('examples')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight);
    }
  },

  mounted() {
    this.$el.getElementsByClassName('highlight')[0].style.height = `${this.codeAreaHeight + 1}px`;
  }
};
</script>

<style>
  .demo-block {
    border: solid 1px #eaeefb;
    border-radius: 4px;
    transition: .2s;
    overflow: hidden;

    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }

    .examples {
      width: 375px;
      float: right;
      box-sizing: border-box;
      padding: 20px 0;
      min-height: 200px;
      max-height: 600px;
    }

    .highlight {
      margin-right: 375px;
      box-sizing: border-box;
      border-right: solid 1px #eaeefb;

      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;

        &::before {
          content: none;
        }
      }
    }
  }
</style>
