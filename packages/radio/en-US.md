## Radio

### Install
``` javascript
import { RadioGroup, Radio } from 'miss-ui';

Vue.use(RadioGroup);
Vue.use(Radio);
```

### Usage

#### Basic Usage

Use `v-model` to bind the name of checked radio

```html
<ms-radio-group v-model="radio">
  <ms-radio name="1">Radio 1</ms-radio>
  <ms-radio name="2">Radio 2</ms-radio>
</ms-radio-group>
```

```javascript
export default {
  data() {
    return {
      radio: '1'
    }
  }
};
```

#### Disabled

```html
<ms-radio-group v-model="radio" disabled>
  <ms-radio name="1">Radio 1</ms-radio>
  <ms-radio name="2">Radio 2</ms-radio>
</ms-radio-group>
```

#### Custom Color

```html
<ms-radio checked-color="#4b0">Radio</ms-radio>
```

#### Inside a Cell

```html
<ms-radio-group v-model="radio">
  <ms-cell-group>
    <ms-cell title="Radio 1" clickable @click="radio = '1'">
      <ms-radio name="1" />
    </ms-cell>
    <ms-cell title="Radio 2" clickable @click="radio = '2'">
      <ms-radio name="2" />
    </ms-cell>
  </ms-cell-group>
</ms-radio-group>
```

### Radio API

| Attribute | Description | Type | Default |
|------|------|------|------|
| name | Radio name | `any` | - |
| disabled | Whether to disable radio | `Boolean` | `false` |
| label-disabled | Whether to disable label click | `Boolean` | `false` |
| label-position | Can be set to `left` | `String` | `right` |
| checked-color | Checked color | `String` | `#1989fa` | - |

### RadioGroup API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Name of checked radio | `any` | - |
| disabled | Diable all radios | `Boolean` | `false` |

### RadioGroup Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when value changed | current value |
