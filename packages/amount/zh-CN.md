## Amount 金融数字

### 使用指南
``` javascript
import { Amount } from 'miss-ui';

Vue.use(Amount);
```

### 代码演示
#### 基本用法
##### 保留三位小数
```html
<ms-amount
  :value="1234.125"
  :precision="3"
/>
```
##### 四舍五入保持两位精度
```html
<ms-amount
  :value="1234.125"
/>
```
##### 默认两位精度
```html
<ms-amount
  :value="1234.123"
  :is-round-up="false"
/>
```

#### 千位分隔符
```html
<ms-amount
  class="demp-block"
  :value="123456789"
  has-separator
/>
```

#### 大写中文
```html
<ms-amount
  class="demp-block"
  :value="1234"
  is-capital
/>
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
|value|数值|Number|`0`|-|-|
|precision|数字精度|Number|`2`|小数点后保留几位|-|
|is-round-up|数字精度取舍是否四舍五入|Boolean|`true`|-|-|
|has-separator|数字是否有千位分隔符|Boolean|`false`|-|-|
|separator|数字千位分隔符|String|`,`|-|-|
|is-capital|数字是否转换为大写中文|Boolean|`false`|-|-|
|transition|数字变化是否使用动画|Boolean|`false`|-|-|
|duration|数字变化动画时长|Number|`1000`|单位`ms`|-|

### Event

| 事件名 | 说明 | 参数 |
|------|------|------|
| submit | 点击键盘关闭按钮时触发/使用系统键盘时,验证码满足要求时触发 | - |
