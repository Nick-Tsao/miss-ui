## Steps

### Install
``` javascript
import { Step, Steps } from 'miss-ui';

Vue.use(Step).use(Steps);
```

### Usage

#### Basic Usage

```html
<ms-steps :active="active">
  <ms-step>Step1</ms-step>
  <ms-step>Step2</ms-step>
  <ms-step>Step3</ms-step>
  <ms-step>Step4</ms-step>
</ms-steps>
```

```javascript
export default {
  data() {
    return {
      active: 1
    };
  }
}
```

#### Vertical Steps

```html
<ms-steps direction="vertical" :active="0" active-color="#f44">
  <ms-step>
    <h3>【City】Status1</h3>
    <p>2016-07-12 12:40</p>
  </ms-step>
  <ms-step>
    <h3>【City】Status2</h3>
    <p>2016-07-11 10:00</p>
  </ms-step>
  <ms-step>
    <h3>【City】Status3</h3>
    <p>2016-07-10 09:30</p>
  </ms-step>
</ms-steps>
```

### Steps API

| Attribute | Description | Type | Default |
|------|------|------|------|
| active | Active step | `Number` | 0 |
| icon | Action step icon | `String` | - |
| icon-class | Icon class | `String` | - |
| title | Title | `String` | - |
| description | Description | `String` | - |
| direction | Can be set to `horizontal` `vertical` | `String` | `horizontal` |
| active-color | Active step color | `String` | `#4b0` |

### Steps Slot

| Name | Description |
|------|------|
| icon | Custom icon |
| message-extra | Extra content |
