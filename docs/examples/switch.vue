<template>
  <div class="page-switch">
    <h1 class="page-title">Switch</h1>

    <h2 class="page-sub-title">基础用法</h2>
    <div class="page-switch">
      <div class="page-switch__wrapper">
        <o2-switch class="some-customized-class" :checked="switchState" :on-change="updateState"></o2-switch>
        <div class="page-switch__text">{{switchStateText}}</div>
      </div>
      <div class="page-switch__wrapper">
        <o2-switch class="some-customized-class" :checked="true" :disabled="true"></o2-switch>
        <div class="page-switch__text">ON, DISABLED</div>
      </div>
      <div class="page-switch__wrapper">
        <o2-switch class="some-customized-class" :checked="false" :disabled="true"></o2-switch>
        <div class="page-switch__text">OFF, DISABLED</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchState: true
    };
  },
  computed: {
    switchStateText() {
      return this.switchState ? 'ON' : 'OFF';
    }
  },
  methods: {
    updateState(newState) {
      this.switchState = newState;
    }
  }
};
</script>

<style>
  @component-namespace page {
    @component switch {
      padding: 0 15px 15px;

      @descendent wrapper {
        width: 33.33%;
        float: left;
        text-align: center;
      }

      @descendent text {
        margin: 20px 0;
      }
    }
  }
</style>
