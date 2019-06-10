## Switch

### Install
``` javascript
import { Switch } from 'miss-ui';

Vue.use(Switch);
```

### Usage

#### Basic Usage

```html
<ms-switch v-model="checked" />
```

```javascript
export default {
  data() {
    return {
      checked: true
    };
  }
};  
```

#### Disabled

```html
<ms-switch
  v-model="checked"
  disabled
/>
```

#### Loading

```html
<ms-switch
  v-model="checked"
  loading
/>
```

#### Custom Size

```html
<ms-switch
  v-model="checked"
  size="24px"
/>
```

#### Custom Color

```html
<ms-switch
  v-model="checked"
  active-color="#4b0"
  inactive-color="#f44"
/>
```

#### Async Control

```html
<ms-switch
  :value="checked"
  @input="onInput"
/>
```

```js
export default {
  data() {
    return {
      checked: true
    };
  },

  methods: {
    onInput(checked) {
      Dialog.confirm({
        title: 'Confirm',
        message: 'Are you sure to toggle switch?'
      }).then(() => {
        this.checked = checked;
      });
    }
  }
};  
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Check status of Switch | `Boolean` | `false` |
| loading | Whether to show loading icon | `Boolean` | `false` |
| disabled | Whether to disable switch | `Boolean` | `false` |
| size | Size of switch | `String` | `30px` |
| active-color | Background color when active | `String` | `#1989fa` |
| inactive-color | Background color when inactive | `String` | `#fff` |

### Event

| Event | Description | Parameters |
|------|------|------|
| change | Triggered when check status changed | checked: is switch checked |
