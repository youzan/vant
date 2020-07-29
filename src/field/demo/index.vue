<!--
 * @Author: last order
 * @Date: 2020-07-29 13:50:19
 * @LastEditTime: 2020-07-29 16:13:11
-->
<template>
  <demo-section>
    <basic-usage />
    <custom-type />
    <disabled />
    <show-icon />
    <show-password />
    <error-info />
    <insert-button />
    <format-value />
    <autosize />
    <show-word-limit />
    <input-align />
  </demo-section>
</template>

<script>
import BasicUsage from './BasicUsage';
import CustomType from './CustomType';
import Disabled from './Disabled';
import ShowIcon from './ShowIcon';
import ShowPassword from './ShowPassword';
import ErrorInfo from './ErrorInfo';
import InsertButton from './InsertButton';
import FormatValue from './FormatValue';
import Autosize from './Autosize';
import ShowWordLimit from './ShowWordLimit';
import InputAlign from './InputAlign';

export default {
  components: {
    BasicUsage,
    CustomType,
    Disabled,
    ShowIcon,
    ShowPassword,
    ErrorInfo,
    InsertButton,
    FormatValue,
    Autosize,
    ShowWordLimit,
    InputAlign,
  },
};
</script>
