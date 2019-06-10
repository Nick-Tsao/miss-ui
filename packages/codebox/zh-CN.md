## Codebox 验证码窗口

### 使用指南
``` javascript
import { Codebox } from 'miss-ui';

Vue.use(Codebox);
```

### 代码演示
#### 基本用法

```html
<ms-codebox
  v-model="code"
  :maxlength="6"
  autofocus
  extra-key="."
  theme="custom"
  close-button-text="完成"
  @submit="subimt"
/>
```



### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| maxlength | 验证码最长长度 | `String` | `4` | - |
| autofocus | 是否开启自动聚焦 | `Boolean` | `false` | - |
| v-model | code值 | `String` | `''` | - |
| closable | 点击输入框及键盘其他区域是否收起键盘 | `Boolean` | true | - |
| system | 是否使用系统键盘 | `Boolean` | `false` | - |
| theme | 键盘样式风格，可选值为 `default` `custom` | `String` | `default` | - |
| close-button-text | 键盘关闭按钮文案 | `String` | `''` | - |
| extra-key | 键盘左下角按键文案 | `String` | `''` | - |

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| submit | 点击键盘关闭按钮时触发/使用系统键盘时,验证码满足要求时触发 | - |
