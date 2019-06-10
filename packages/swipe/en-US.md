## Swipe

### Install
``` javascript
import { Swipe, SwipeItem } from 'miss-ui';

Vue.use(Swipe).use(SwipeItem);
```

### Usage

#### Basic Usage
Use `autoplay` prop to set autoplay interval

```html
<ms-swipe :autoplay="3000" indicator-color="white">
  <ms-swipe-item>1</ms-swipe-item>
  <ms-swipe-item>2</ms-swipe-item>
  <ms-swipe-item>3</ms-swipe-item>
  <ms-swipe-item>4</ms-swipe-item>
</ms-swipe>
```

#### Image Lazyload
Use [Lazyload](#/en-US/lazyload) component to lazyload image

```html
<ms-swipe>
  <ms-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </ms-swipe-item>
</ms-swipe>
```

```javascript
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/1.jpg',
        'https://img.yzcdn.cn/2.jpg'
      ]
    }
  }
}
```

#### change event

```html
<ms-swipe @change="onChange">
  <ms-swipe-item>1</ms-swipe-item>
  <ms-swipe-item>2</ms-swipe-item>
  <ms-swipe-item>3</ms-swipe-item>
  <ms-swipe-item>4</ms-swipe-item>
</ms-swipe>
```

```js
export default {
  methods: {
    onChange(index) {
      Toast('Current Swipe index:' + index);
    }
  }
}
```

#### Vertical Scrolling

```html
<ms-swipe :autoplay="3000" vertical>
  <ms-swipe-item>1</ms-swipe-item>
  <ms-swipe-item>2</ms-swipe-item>
  <ms-swipe-item>3</ms-swipe-item>
  <ms-swipe-item>4</ms-swipe-item>
</ms-swipe>
```

#### Set Swiper Item Size

```html
<ms-swipe :autoplay="3000" :width="300">
  <ms-swipe-item>1</ms-swipe-item>
  <ms-swipe-item>2</ms-swipe-item>
  <ms-swipe-item>3</ms-swipe-item>
  <ms-swipe-item>4</ms-swipe-item>
</ms-swipe>
```

#### Custom Indicator

```html
<ms-swipe @change="onChange">
  <ms-swipe-item>1</ms-swipe-item>
  <ms-swipe-item>2</ms-swipe-item>
  <ms-swipe-item>3</ms-swipe-item>
  <ms-swipe-item>4</ms-swipe-item>

  <div class="custom-indicator" slot="indicator">
    {{ current + 1 }}/4
  </div>
</ms-swipe>
```

```js
export default {
  methods: {
    data() {
      return {
        current: 0
      }
    },

    onChange(index) {
      this.current = index;
    }
  }
}
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| autoplay | Autoplay interval (ms) | `Number` | - |
| duration | Animation duration (ms) | `Number` | `500` |
| loop | Whether to enable loop | `Boolean` | `true` |
| vertical | Vertical Scrolling | `Boolean` | `false` |
| touchable | Whether touchable | `Boolean` | `true` |
| show-indicators | Whether to show indicators | `Boolean` | `true` |
| indicator-color | Indicator color | `String` | `#1989fa` |
| initial-swipe | Index of initial swipe, start from 0 | `Number` | `0` |
| width | Set Swiper Item Width | `Number` | `0` |
| height | Set Swiper Item Height | `Number` | `0` |

### Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when current swipe change | index: index of current swipe |

### Methods

Use ref to get swipe instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| swipeTo | index: target index | void | Swipe to target index |

### Slot

| name | Description |
|------|------|
| - | Content |
| indicator | Custom indicator |
