## Area

### Install

``` javascript
import { Area } from 'vant';

Vue.use(Area);
```

### Usage

#### Basic Usage

To initailize `Area` component, `areaList` property is required. Data structure of `areaList` will be introduced later. 

```html
<van-area :areaList="areaList" />
```

#### Initial Value

To have a selected value，simply pass the `code` of target area to `value` property.

```html
<van-area :areaList="areaList" value="110101" />
```

#### Columns Number

`columnsNum` property is able to config number of columns to be displayed. This component has 3 columns corresponding to a 3 level picker by default.
Set `columnsNum` with 2, you'll have a 2 level picker.

```html
<van-area :areaList="areaList" :columnsNum="2" />
```


### API

| Attribute | Description | Type | Default | Accepted Values |
|-----------|-----------|-----------|-------------|-------------|
| value | the `code` of selected area | `String` | - | - |
| areaList | an object contains these properties: `province_list`, `city_list` and `county_list`  | `Object` | - | - |
| columnsNum | level of picker | `String`,`Number` | 3 | - |

### Event

| Event | Description | Arguments |
|-----------|-----------|-----------|
| confirm | triggers when clicking the confirm button | an array |
| cancel | triggers when clicking the cancel button | - |

### Data Structure

#### areaList

An object contains three properties: `province_list`, `city_list` and `county_list`. 
Each property is a simple key-value object, key is a 6-bit code of the area of which first two bits stand for the province or state, middle two bits are used as city code and the last two are district code, value is the name of the area. If the code stands for an area that has sub-areas, lower bits of it will be filled with 0.

Example of `AreaList`

```javascript
{
  province_list: {
    110000: 'Beijing',
    330000: 'Zhejiang Province'
  },
  city_list: {
    110100: 'Beijing City',
    330100: 'Hangzhou',
  },
  county_list: {
    110101: 'Dongcheng District',
    110102: 'Xicheng District',
    110105: 'Chaoyang District',
    110106: 'Fengtai District'
    330105: 'Gongshu District',
    330106: 'Xihu District',
    // ....
  }
}
```

All code of China: [Area.json](https://github.com/youzan/vant/blob/dev/docs/demos/mock/area.json)

#### argument of callback function confirm
An array contains selected area objects.

`code` - code of selected area, `name` - name of selected area
```javascript
[{
  code: '330000',
  name: 'Zhejiang Province'
}, {
  code: '330100',
  name: 'Hangzhou'
},{
  code: '330105',
  name: 'Xihu District'
}]
```
