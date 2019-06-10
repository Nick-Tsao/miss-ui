## GoodsAction

### Install
``` javascript
import {
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'miss-ui';

Vue
  .use(GoodsAction)
  .use(GoodsActionBigBtn)
  .use(GoodsActionMiniBtn);
```

### Usage
#### Basic Usage

```html
<ms-goods-action>
  <ms-goods-action-mini-btn
    icon="chat-o"
    text="Icon1"
    @click="onClickMiniBtn"
  />
  <ms-goods-action-mini-btn
    icon="cart-o"
    text="Icon2"
    @click="onClickMiniBtn"
  />
  <ms-goods-action-big-btn
    text="Button1"
    @click="onClickBigBtn"
  />
  <ms-goods-action-big-btn
    primary
    text="Button2"
    @click="onClickBigBtn"
  />
</ms-goods-action>
```

```javascript
export default {
  methods: {
    onClickMiniBtn() {
      Toast('Click Icon');
    },
    onClickBigBtn() {
      Toast('Click Button');
    }
  }
}
```

#### Icon info

Use `info` prop to show messages in upper right corner of icon

```html
<ms-goods-action>
  <ms-goods-action-mini-btn
    icon="chat-o"
    text="Icon1"
  />
  <ms-goods-action-mini-btn
    info="5"
    icon="cart-o"
    text="Icon2"
  />
  <ms-goods-action-mini-btn
    icon="shop-o"
    text="Icon3"
  />
  <ms-goods-action-big-btn text="Button1" />
  <ms-goods-action-big-btn
    primary
    text="Button2"
  />
</ms-goods-action>
```

### API

#### GoodsActionMiniBtn

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | `String` | - |
| icon | Icon | `String` | - |
| icon-class | Icon class name | `String` | `''` |
| info | Info message | `String | Number` | - |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `String` | `false` |


#### GoodsActionBigBtn

| Attribute | Description | Type | Default |
|------|------|------|------|
| text | Button text | `String` | - |
| primary | Is primary button (red color) | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `String` | `false` |
