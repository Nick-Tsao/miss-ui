## SwitchCell
`SwitchCell` component is an encapsulation of `Switch` and `Cell`.

### Install
``` javascript
import { SwitchCell } from 'miss-ui';

Vue.use(SwitchCell);
```

### Usage

#### Basic Usage

```html
<ms-cell-group>
  <ms-switch-cell v-model="checked" title="Title" />
</ms-cell-group>
```

```javascript
export default {
  data() {
    return {
      checked: true
    }
  }
}
```


#### Disabled
use `disabled` property to disable the component

```html
<ms-cell-group>
  <ms-switch-cell v-model="checked" disabled title="Title" />
</ms-cell-group>
```


#### Loading
use `loading` property to keep component in loading state

```html
<ms-cell-group>
  <ms-switch-cell v-model="checked" loading title="Title" />
</ms-cell-group>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | on-off state of the switch | `Boolean` | - |
| title | the leftside title |  `String` | `''` |
| loading | whether switch is loading |  `Boolean` | `false` |
| disabled | whether to disable switch |  `Boolean` | `false` |
| size | Size of switch | `String` | `24px` |
| active-color | Background of switch color when active | `String` | `#1989fa` |
| inactive-color | Background of switch color when inactive | `String` | `#fff` |

### Event

| Event | Description | Arguments |
|------|------|------|
| change | triggered when the on-off state is changed | checked: switch is on or not |
