<template><section class="demo-datetime-picker"><h1 class="demo-title">datetime-picker</h1><example-block title="基础用法">
                <zan-datetime-picker v-model="currentDate" type="datetime" format="yyyy.mm.dd hh时 mm分" :min-hour="minHour" :max-hour="maxHour" :min-date="minDate" @change="handlePickerChange">  
</zan-datetime-picker>



              </example-block></section></template>

<script>
import Vue from "vue";import ExampleBlock from "../components/example-block";Vue.component("example-block", ExampleBlock);
export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      currentDate: null
    };
  },

  methods: {
    handlePickerChange(picker, values) {
      // picker.setColumnValues(1, citys[values[0]]);
      console.log(values);
    },
    handlePickerCancel() {
      alert('picker cancel');
    },
    handlePickerConfirm() {
      alert('picker confirm');
    }
  }
};
</script>