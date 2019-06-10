## Popup

### Install
``` javascript
import { Popup } from 'miss-ui';

Vue.use(Popup);
```

### Usage

#### Basic Usage
Popup is located in the middle of the screen by default

```html
<ms-popup v-model="show">Content</ms-popup>
```

```javascript
export default {
  data() {
    return {
      show: false
    }
  }
};
```

#### Position
Use `position` prop to set popup display position

```html
<ms-popup v-model="show" position="top" :overlay="false">
  Content
</ms-popup>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Whether to show popup | `Boolean` | `false` |
| overlay | Whether to show overlay | `Boolean` | `true` |
| position | Can be set to `top` `bottom` `right` `left` | `String` | - |
| overlay-class | Custom overlay class | `String` | - |
| overlay-style | Custom overlay style | `Object` | - |
| close-on-click-overlay | Close popup when click overlay | `Boolean` | `true` |
| transition | Transition | `String` | `popup-slide` |
| lock-scroll | Whether to lock background scroll | `Boolean` | `true` |
| lazy-render | Whether to lazy render util appeared | `Boolean` | `true` |
| get-container | Return the mount node for Popup | `String | () => HTMLElement` | - |

### Event

| Event | Description | Arguments |
|------|------|------|
| click-overlay | Triggered when click overlay | - |
