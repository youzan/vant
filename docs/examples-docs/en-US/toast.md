<script>
import { Toast } from 'packages';

export default {
  methods: {
    showToast() {
      Toast('Some messages');
    },
    showLoadingToast() {
      Toast.loading({ mask: true });
    },
    showSuccessToast() {
      Toast.success('Success');
    },
    showFailToast() {
      Toast.fail('Fail');
    },
    showCustomizedToast(duration) {
      const toast = Toast.loading({
        duration: 0,  
        forbidClick: true,
        message: '3 seconds'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `${second} seconds`;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    }
  }
};
</script>

## Toast

### Install

```javascript
import { Toast } from 'vant';
```

### Usage

#### Text

:::demo Text
```html
<van-button @click="showToast">Show Text</van-button>
```

```javascript
export default {
  methods: {
    showToast() {
      Toast('Some messages');
    }
  }
}
```
:::

#### Loading

:::demo Loading
```html
<van-button @click="showLoadingToast">Show Loading</van-button>
```

```javascript
export default {
  methods: {
    showLoadingToast() {
      Toast.loading({ mask: true });
    }
  }
}
```
:::

#### Success/Fail

:::demo Success/Fail
```html
<van-button @click="showSuccessToast">Show Success</van-button>
<van-button @click="showFailToast">Show Fail</van-button>
```

```javascript
export default {
  methods: {
    showSuccessToast() {
      Toast.success('Success');
    },
    showFailToast() {
      Toast.fail('Fail');
    }
  }
}
```
:::

#### Advanced Usage

:::demo Advanced Usage
```html
<van-button @click="showCustomizedToast">Advanced Usage</van-button>
```

```javascript
export default {
  methods: {
    showCustomizedToast() {
      const toast = Toast.loading({
        duration: 0,       // continuous display toast
        forbidClick: true, // forbid click background
        message: '3 seconds'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `${second} seconds`;
        } else {
          clearInterval(timer);
          Toast.clear();
        }
      }, 1000);
    }
  }
};
```
:::

### Methods

| Methods | Attribute | Return value | Description |
|-----------|-----------|-----------|-------------|
| Toast | `options | message` | toast instance | Show toast |
| Toast.loading | `options | message` | toast instance | Show loading toast |
| Toast.success | `options | message` | toast instance | Show success toast |
| Toast.fail | `options | message` | toast instance | Show fail toast |
| Toast.clear | - | `void` | Close  |

### Options

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | Type | `String` | `text` | `loading` `success` `fail` `html` |
| message | Message | `String` | `''` | - |
| position | Position | `String` | `middle` | `top` `bottom` |
| mask | Whether to show mask | `Boolean` | `false` | - |
| forbidClick | Whether to forbid click background | `Boolean` | `false` | - |
| duration | Toast duration(ms) | `Number` | `3000` | Toast won't disappear if value is 0 |
