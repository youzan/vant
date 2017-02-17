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
    <z-button size="large">default</z-button>
    <z-button size="large" type="primary">primary</z-button>
    <z-button size="large" type="danger">danger</z-button>
  </div>

  <div class="page-button-group">
    <z-button>default</z-button>
    <z-button type="primary">primary</z-button>
    <z-button type="danger">danger</z-button>
  </div>

  <div class="page-button-group">
    <z-button size="small">default</z-button>
    <z-button size="small" type="primary">primary</z-button>
    <z-button size="small" type="danger">danger</z-button>
  </div>

  <div class="page-button-group">
    <z-button disabled size="large">default</z-button>
    <z-button disabled size="large" type="primary">primary</z-button>
    <z-button disabled size="large" type="danger" class="aaa">danger</z-button>
  </div>
</div>
```
:::


### API

| 参数       | 说明      | 类型       | 默认值       | 可选值       |
|-----------|-----------|-----------|-------------|-------------|
| className | 自定义额外类名 | string  | ''          | ''          |
