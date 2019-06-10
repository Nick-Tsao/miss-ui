## Card 卡片

### 使用指南
``` javascript
import { Card } from 'miss-ui';

Vue.use(Card);
```

### 代码演示

#### 基础用法

```html
<ms-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  :thumb="imageURL"
/>
```

#### 高级用法
可以通过具名`slot`添加定制内容

```html
<ms-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  :thumb="imageURL"
  origin-price="10.00"
>
  <div slot="footer">
    <ms-button size="mini">按钮</ms-button>
    <ms-button size="mini">按钮</ms-button>
  </div>
</ms-card>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| thumb | 左侧图片 URL | `String` | - | - |
| title | 标题 | `String` | - | - |
| desc | 描述 | `String` | - | - |
| tag | 标签 | `String` | - | 1.3.4 |
| num | 商品数量 | `String | Number` | - | - |
| price | 商品价格 | `String | Number` | - | - |
| origin-price | 商品划线原价 | `String | Number` | - | 1.3.6 |
| centered | 内容是否垂直居中 | `String` | `false` | - |
| currency | 货币符号 |  `String` | `¥` | - |
| thumb-link | 点击左侧图片后的跳转链接 | `String` | - | 1.3.4 |
| lazy-load | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | `Boolean` | `false` | 1.5.0 |

### Slot

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| desc | 自定义描述 |
| tags | 自定义描述下方的内容 |
| thumb | 自定义图片 |
| footer | 自定义右下角内容 |
