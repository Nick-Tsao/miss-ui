## Steps 步骤条

### 使用指南
``` javascript
import { Step, Steps } from 'miss-ui';

Vue.use(Step).use(Steps);
```

### 代码演示

#### 基础用法

```html
<ms-steps :active="active">
  <ms-step>买家下单</ms-step>
  <ms-step>商家接单</ms-step>
  <ms-step>买家提货</ms-step>
  <ms-step>交易完成</ms-step>
</ms-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

#### 竖向步骤条
可以通过设置`direction`属性来改变步骤条的显示方式

```html
<ms-steps direction="vertical" :active="0" active-color="#f44">
  <ms-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </ms-step>
  <ms-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </ms-step>
  <ms-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </ms-step>
</ms-steps>
```

### Steps API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| active | 当前步骤 | `Number` | 0 | - |
| title | 描述栏标题 | `String` | - | - |
| description | 描述栏文字 | `String` | - | - |
| icon | 描述栏图标 | `String` | - | - |
| icon-class | 图标额外类名 | `String` | - | - |
| direction | 显示方向，可选值为 `vertical` | `String` | `horizontal` | - |
| active-color | 激活状态颜色 | `String` | `#4b0` | - |

### Steps Slot

| Name | 说明 |
|------|------|
| icon | 自定义icon区域 |
| message-extra | 状态栏添加额外的元素 |
