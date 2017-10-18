<script>
import { Toast } from 'packages';

export default {
  methods: {
    showToast() {
      Toast('我是提示文案，建议不超过十五字~');
    },
    showLoadingToast() {
      Toast.loading();
    },
    showSuccessToast() {
      Toast.success('成功文案');
    },
    showFailToast() {
      Toast.fail('失败文案');
    },
    showCustomizedToast(duration) {
      const toast = Toast.loading({
        duration: 0,  
        forbidClick: true,
        message: '倒计时 3 秒'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
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

#### 文字提示

:::demo 文字提示
```html
<van-button @click="showToast">文字提示</van-button>
```

```javascript
export default {
  methods: {
    showToast() {
      Toast('我是提示文案，建议不超过十五字~');
    }
  }
}
```
:::

#### 加载提示

:::demo 加载提示
```html
<van-button @click="showLoadingToast">加载提示</van-button>
```

```javascript
export default {
  methods: {
    showLoadingToast() {
      Toast.loading();
    }
  }
}
```
:::

#### 成功/失败提示

:::demo 成功/失败提示
```html
<van-button @click="showSuccessToast">成功提示</van-button>
<van-button @click="showFailToast">失败提示</van-button>
```

```javascript
export default {
  methods: {
    showSuccessToast() {
      Toast.success('成功文案');
    },
    showFailToast() {
      Toast.fail('失败文案');
    }
  }
}
```
:::

#### Advanced Usage

:::demo Advanced Usage
```html
<van-button @click="showCustomizedToast">#### Advanced Usage</van-button>
```

```javascript
export default {
  methods: {
    showCustomizedToast() {
      const toast = Toast.loading({
        duration: 0,       // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        message: '倒计时 3 秒'
      });

      let second = 3;
      const timer = setInterval(() => {
        second--;
        if (second) {
          toast.message = `倒计时 ${second} 秒`;
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

### 方法

| 方法名 | Attribute | 返回值 | 介绍 |
|-----------|-----------|-----------|-------------|
| Toast | `options | message` | toast 实例 | 展示提示 |
| Toast.loading | `options | message` | toast 实例 | 展示加载提示 |
| Toast.success | `options | message` | toast 实例 | 展示成功提示 |
| Toast.fail | `options | message` | toast 实例 | 展示失败提示 |
| Toast.clear | - | `void` | 关闭提示 |

### Options

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| type | 提示类型 | `String` | `text` | `loading` `success` `fail` `html` |
| message | 内容 | `String` | `''` | - |
| forbidClick | 禁止背景点击 | `Boolean` | `false` | - |
| duration | 时长(ms) | `Number` | `3000` | 值为 0 时，toast 不会消失 |
