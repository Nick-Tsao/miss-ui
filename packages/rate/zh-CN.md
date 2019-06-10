## Rate 评分

### 使用指南
``` javascript
import { Rate } from 'miss-ui';

Vue.use(Rate);
```

### 代码演示

#### 基础用法

```html
<ms-rate v-model="value" />
```

```javascript
export default {
  data() {
    return {
      value: 3
    };
  }
}
```

#### 自定义图标

```html
<ms-rate
  v-model="value"
  icon="like"
  void-icon="like-o"
/>
```

#### 自定义样式

```html
<ms-rate
  v-model="value"
  :size="25"
  :count="6"
  color="#2ba"
  void-color="#ceefe8"
/>
```

#### 禁用状态

```html
 <ms-rate v-model="value" disabled />
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前分值 | `Number` | - | - |
| count | 图标总数 | `Number` | `5` | - |
| size | 图标大小 (px) | `Number` | `20` | - |
| color | 选中时的颜色 | `String` | `#ffd21e` | - |
| void-color | 未选中时的颜色 | `String` | `#c7c7c7` | - |
| icon | 选中时的图标名称或图片链接，可选值见 Icon 组件 | `String` | `star` | 1.4.7 |
| void-icon | 未选中时的图标名称或图片链接，可选值见 Icon 组件 | `String` | `star-o`  | 1.4.7 |
| readonly | 是否为只读状态 | `Boolean` | `false` | 1.3.0 |
| disabled | 是否禁用评分 | `Boolean` | `false` | - |
| disabled-color | 禁用时的颜色 | `String` | `#bdbdbd` | - |

### Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当前分值变化时触发的事件 | 当前分值 |
