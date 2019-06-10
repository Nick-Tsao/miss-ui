## ResultPage 结果页

### 使用指南
``` javascript
import { ResultPage } from 'miss-ui';

Vue.use(ResultPage);
```

### 代码演示

#### 404页面

```html
<ms-result-page type="lost"/>
```


#### 网络错误页面

```html
<ms-result-page
  type="network"
  subtext="点击屏幕，重新加载"
/>
```

#### 高级用法

```html
 <ms-result-page
  img-url="//manhattan.didistatic.com/static/manhattan/do1_JX7bcfXqLpStKRv31xlp"
  text="不太确定自己错在了哪里..."
  subtext="要不然刷新试试？">
</ms-result-page>
```

### API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| type | 页面类型:type可取`lost`, `network`和`empty`三个值，分别代表页面丢失、网络出错和空信息。根据类别不同，组件会拥有不同的默认图片和文案 | `String` | empty | - |
| img-url | 图片链接 | `String` | `空信息图片` | - |
| text | 主文案,根据类别不同，组件会拥有不同的默认主文案 | `String` | `暂无信息` | - |
| subtext | 副文案,以更小的字体和更淡的颜色显示在主文案下方 | `String` | - | - |

