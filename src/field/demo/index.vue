<template>
  <demo-section>
    <basic-usage />
    <basic-usage2 />
    <custom-type />
    <disabled />
    <show-icon />
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
import BasicUsage2 from './BasicUsage2';
import CustomType from './CustomType';
import Disabled from './Disabled';
import ShowIcon from './ShowIcon';
import ErrorInfo from './ErrorInfo';
import InsertButton from './InsertButton';
import FormatValue from './FormatValue';
import Autosize from './Autosize';
import ShowWordLimit from './ShowWordLimit';
import InputAlign from './InputAlign';

export default {
  components: {
    BasicUsage,
    BasicUsage2,
    CustomType,
    Disabled,
    ShowIcon,
    ErrorInfo,
    InsertButton,
    FormatValue,
    Autosize,
    ShowWordLimit,
    InputAlign,
  },
};
</script>
