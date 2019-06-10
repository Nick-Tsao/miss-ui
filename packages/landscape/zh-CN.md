## Landscape 压屏窗

### 使用指南

用于在浮层中显示广告或说明。

```js
import { Landscape } from 'miss-ui';

Vue.use(Landscape)
```

### 代码演示

#### 基础用法

图片广告

```html
<ms-button @click="showPic=true">图片广告</ms-button>
<ms-landscape
  v-model="showPic"
  :position="position"
>
```

```javascript
data() {
  return {
    position: 'punch',
  }
}
```

#### 全屏显示,自定义内容

通过通过`full-screen`属性可以开启全屏显示, 传入 slot 自定义内部内容

```html
<ms-landscape
  v-model="showFullScreen"
  full-screen
>
  <p>
    今天晚上，很好的月光。
  </p>
</ms-landscape>
```

#### 监听显示/隐藏事件

通过监听`show` `hide`事件监测窗口的开启关闭.

```html
<ms-landscape
  v-model="showListen"
  @show="alert('已弹出')"
  @hide="alert('已隐藏')"
>
  <img src="//manhattan.didistatic.com/static/manhattan/do1_6VL7HL8TYaUMsIfygfpz">
</ms-landscape>
```

### 配置项

| 参数名 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| v-model | 控制窗口显示,隐藏 | `Boolean` | `false` | - |
| full-screen | 控制窗口全屏 | `Boolean` | `false` | - |
| overlay | 是否有蒙层	 | `Boolean` | `true` | - |
| close-on-click-overlay | 是否可以通过点击蒙层关闭 | `Boolean` | `false` | - |
| position | 窗口出现位置可选:top/left/bottom/right/punch	 | `String` | - | - |



### Event 事件

| 事件名称 | 说明 | 类型 |
|------|------|------|
| show | 窗口显示触发 | `-` |
| hide | 窗口隐藏时触发 | `-` |
