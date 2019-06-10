## NoticeBar

### Install
``` javascript
import { NoticeBar } from 'miss-ui';

Vue.use(NoticeBar);
```

### Usage

#### Basic Usage

```html
<ms-notice-bar
  text="Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily."
  left-icon="volume-o"
/>
```

#### Disable scroll

```html
<ms-notice-bar :scrollable="false">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</ms-notice-bar>
```

#### Mode

```html
<ms-notice-bar mode="closeable">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</ms-notice-bar>

<ms-notice-bar mode="link">
  Only those who have the patience to do simple things perfectly ever acquire the skill to do difficult things easily.
</ms-notice-bar>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| mode | Mode, can be set to `closeable` `link` | `String` | `''` |
| delay | Animation delay (s) | `Number` | `1` |
| speed | Scroll speed (px/s) | `Number` | `50` |
| scrollable | Whether to scroll content | `Boolean` | `true` |
| left-icon | Left Icon | `String` | - |
| color | Text color | `String` | `#f60` |
| background | Background color | `String` | `#fff7cc` |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click notice bar | - |
