## SubmitBar

### Install
``` javascript
import { SubmitBar } from 'miss-ui';

Vue.use(SubmitBar);
```

### Usage

#### Basic Usage

```html
<ms-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

#### Disabled
`submit` event will not triggerd when disabled.

```html
<ms-submit-bar
  disabled
  :price="3050"
  button-text="Submit"
  tip="Some tips"
  @submit="onSubmit"
/>
```

#### Loading
`submit` event will not triggerd when loading.

```html
<ms-submit-bar
  loading
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
/>
```

#### Advanced Usage
Use slot to add custom contents.

```html
<ms-submit-bar
  :price="3050"
  button-text="Submit"
  @submit="onSubmit"
>
  <ms-checkbox v-model="checked">Check</ms-checkbox>
  <span slot="tip">
    Some tips, <span @click="onClickEditAddress">Link</span>
  </span>
</ms-submit-bar>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| price | Price |  `Number` | - |
| label | Price label |  `String` | `合计：` |
| button-text | Button text | `String` | - |
| button-type | Button type |  `String` | `danger` |
| tip | Tip |  `String` | - |
| disabled | Whether to disable button |  `Boolean` | `false` |
| loading | Whether to show loading icon |  `Boolean` | `false` |
| currency | Currency symbol |  `String` | `¥` |

### Event

| Event | Description | Arguments |
|------|------|------|
| submit | Triggerd when click submit button | - |

### Slot

| Name | Description |
|------|------|
| - | Custom left content |
| top | Custom top content |
| tip | Custom tips |
