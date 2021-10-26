# useCustomFieldValue

### Intro

Used to custom Field value.

## Usage

### Basic Usage

If you want to custom Form items, you can insert your component into the `input` slot of the Field component, and call the `useCustomFieldValue` method inside your custom component.

#### MyComponent

```js
// MyComponent.vue
import { ref } from 'vue';
import { useCustomFieldValue } from '@vant/use';

export default {
  setup() {
    const myValue = ref(0);

    useCustomFieldValue(() => myValue.value);

    return { myValue };
  },
};
```

#### Form

```html
<van-form>
  <van-field name="my-field" label="Custom Field">
    <template #input>
      <my-component />
    </template>
  </van-field>
</van-form>
```

## API

### Type Declarations

```ts
function useCustomFieldValue(customValue: () => unknown): void;
```

### Params

| Name        | Description                 | Type            | Default Value |
| ----------- | --------------------------- | --------------- | ------------- |
| customValue | Function to get field value | _() => unknown_ | -             |
