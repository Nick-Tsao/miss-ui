## WaterMark 水印

### 使用指南
``` javascript
import { WaterMark } from 'miss-ui';

Vue.use(WaterMark);
```

### 代码演示

#### 基础用法

```html
<ms-water-mark
  class="text-container"
  content="Miss"
>
  <slot />
</ms-water-mark>
```


### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| content | 水印内容 | `String` | - | - |
| spacing | 水印间距:接受vw,vh,px  | `40px` | `image/*` | - |
| rotate | 水印旋转角度 | `[Number,String]` | `-30` | - |
| opacity | 水印透明度 | `Number` | `0.2` | - |

### Slot

| 名称 | 说明 |
|------|------|
| - | 自定义 需要覆盖水印 dom |

