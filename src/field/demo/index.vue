<template>
  <basic-usage />
  <custom-type />
  <disabled />
  <show-icon />
  <error-info />
  <insert-button />
  <format-value />
  <autosize />
  <show-word-limit />
  <input-align />
  <number-size-limit />
</template>

<script>
import BasicUsage from './BasicUsage';
import CustomType from './CustomType';
import Disabled from './Disabled';
import ShowIcon from './ShowIcon';
import ErrorInfo from './ErrorInfo';
import InsertButton from './InsertButton';
import FormatValue from './FormatValue';
import Autosize from './Autosize';
import ShowWordLimit from './ShowWordLimit';
import InputAlign from './InputAlign';
import NumberSizeLimit from './NumberSizeLimit';

export default {
  components: {
    BasicUsage,
    CustomType,
    Disabled,
    ShowIcon,
    ErrorInfo,
    InsertButton,
    FormatValue,
    Autosize,
    ShowWordLimit,
    InputAlign,
    NumberSizeLimit,
  },
};
</script>
