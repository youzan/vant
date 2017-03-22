<template>
  <div
    class="demo-block"
    :class="blockClass">
    <slot name="examples"></slot>
    <div class="highlight-wrapper">
      <div class="highlight-toggle">
        <span v-text="description"></span>
        <i class="zan-icon zan-icon-arrow" @click="showCode = !showCode" :class="{
          'zan-icon-arrow-close': !showCode
        }">
        </i>
      </div>
      <div class="highlight-code" v-show="showCode">
        <slot name="highlight">
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String
  },

  data() {
    return {
      showCode: true
    };
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
      height: 568px;
      background: url(https://b.yzcdn.cn/v2/image/wap/zanui-mobile-demo.png) no-repeat;
      float: right;
      box-sizing: border-box;
      padding: 74px 0 0;
      min-height: 200px;
      max-height: 600px;
      overflow: auto;
    }

    .highlight-wrapper {
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

    .highlight-toggle {
      padding: 20px;
      border-bottom: 1px solid #e5e5e5;
      color: #666;
      position: relative;

      .zan-icon {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        color: #888;
        transform: rotate(-90deg);
        border: 2px solid #888;
        border-radius: 50%;
        cursor: pointer;

        &.zan-icon-arrow-close {
          transform: rotate(90deg);
        }
      }
    }
  }
</style>
