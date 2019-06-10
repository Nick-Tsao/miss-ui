## Radio 单选框

### 使用指南
``` javascript
import { RadioGroup, Radio } from 'miss-ui';

Vue.use(RadioGroup);
Vue.use(Radio);
```

### 代码演示

#### 基础用法

通过`v-model`绑定值当前选中项的 name

```html
<ms-radio-group v-model="radio">
  <ms-radio name="1">单选框 1</ms-radio>
  <ms-radio name="2">单选框 2</ms-radio>
</ms-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### 禁用状态

通过`disabled`属性禁止选项切换，在`ms-radio`上设置`disabled`可以禁用单个选项

```html
<ms-radio-group v-model="radio" disabled>
  <ms-radio name="1">单选框 1</ms-radio>
  <ms-radio name="2">单选框 2</ms-radio>
</ms-radio-group>
```

#### 自定义颜色

```html
<ms-radio checked-color="#4b0">复选框</ms-radio>
```

#### 与 Cell 组件一起使用

此时你需要再引入`Cell`和`CellGroup`组件。

```html
<ms-radio-group v-model="radio">
  <ms-cell-group>
    <ms-cell title="单选框 1" clickable @click="radio = '1'">
      <ms-radio name="1" />
    </ms-cell>
    <ms-cell title="单选框 2" clickable @click="radio = '2'">
      <ms-radio name="2" />
    </ms-cell>
  </ms-cell-group>
</ms-radio-group>
```

### Radio API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| name | 标识符 | 任意类型 | - | - |
| disabled | 是否为禁用状态 | `Boolean` | `false` | - |
| label-disabled | 是否禁用文本内容点击 | `Boolean` | `false` | 1.1.13 |
| label-position | 文本位置，可选值为 `left` | `String` | `right` | 1.1.13 |
| checked-color | 选中状态颜色 | `String` | `#1989fa` | 1.4.5 |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 当前选中项的标识符 | 任意类型 | - | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` | - |

### RadioGroup Event

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 当绑定值变化时触发的事件 | 当前选中项的 name |
