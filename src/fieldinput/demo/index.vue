<template>
  <div>
    <!-- <van-fieldinput
    style="--van-number-keyboard-finish-button-background-color: red;"
    ref="fieldinput3"
    placeholder="请输入"
    type="point"
    keytheme="custom"
    keyboard-theme="custom">
    </van-fieldinput> -->

    <!-- <van-fieldinput
      ref="fieldinput3"
      style="border: 1px solid blue; --van-fieldinput-text-color:#a38989;height:50px;"
      placeholder="请输入"
      type="text"
      keytheme="native"
      keyboard-theme="custom"
      inputstyle="input"
      :clearable="false"
      :maxlength="10000"
      confirm-size="default"></van-fieldinput> -->

    <van-fieldinput
      ref="fieldinput3"
      style="--van-fieldinput-text-color:#a38989; --van-password-input-cell-gap: 5px"
      placeholder="请输入"
      type="point"
      inputstyle="password"
      keytheme="custom"
      :clearable="false"
      :maxlength="4"
      confirm-size="default"></van-fieldinput>
  </div>

</template>

<script>
export default {

}
</script>
