<style lang="css">
  @component-namespace page {
    @component button {
      padding: 0 15px 15px;

      @descendent group {
        margin-bottom: 15px;

        & > * {
          margin-bottom: 15px;
        }
      }
    }
  }
</style>

## Button组件

### 基础用法

:::demo 样例代码
```html
<div class="page-button">
  <h1 class="page-title">Button</h1>
  <div class="page-button-group">
    <o2-button size="large">default</o2-button>
    <o2-button size="large" type="primary">primary</o2-button>
    <o2-button size="large" type="danger">danger</o2-button>
  </div>

  <div class="page-button-group">
    <o2-button>default</o2-button>
    <o2-button type="primary">primary</o2-button>
    <o2-button type="danger">danger</o2-button>
  </div>

  <div class="page-button-group">
    <o2-button size="small">default</o2-button>
    <o2-button size="small" type="primary">primary</o2-button>
    <o2-button size="small" type="danger">danger</o2-button>
  </div>

  <div class="page-button-group">
    <o2-button disabled size="large">default</o2-button>
    <o2-button disabled size="large" type="primary">primary</o2-button>
    <o2-button disabled size="large" type="danger" class="aaa">danger</o2-button>
  </div>
</div>
```
:::


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| className | 自定义额外类名 | string  | ''          | ''          |
