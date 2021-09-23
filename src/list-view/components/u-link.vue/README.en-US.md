# Link

## Examples
### Basic

``` html
<u-link href="#">Link</u-link>&nbsp;
<u-link href="#">Details</u-link>
```

### Disabled

``` html
<u-link href="#" disabled>Link</u-link>
```

### `href` vs `to`

``` html
<u-link href="https://github.com/vusion/vusion" target="_blank">href</u-link>&nbsp;
<u-link to="/some/router/path">to</u-link>
```

## API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| href | String |  | `href` property of link |
| target | String |  | (native property) |
| to | String, Object |  | `to` property of `vue-router` |
| replace | Boolean | `false` | |
| append | Boolean | `false` | |
| disabled | Boolean | `false` | Prevent action of this link |

### Slots

| Slot | Description |
| ---- | ----------- |
| (default) | Hold the text and can contain HTML |

### Events

#### $listeners

Inherit all events from `<a>` element.

#### @click

#### @navigate
