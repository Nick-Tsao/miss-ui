## Badge

### Install
``` javascript
import { Badge, BadgeGroup } from 'miss-ui';

Vue.use(Badge);
Vue.use(BadgeGroup);
```

### Usage

#### Basic Usage
Use `active-key` prop to set index of chosen 'badge'

```html
<ms-badge-group :active-key="activeKey" @change="onChange">
  <ms-badge title="Title" />
  <ms-badge title="Title" info="8" />
  <ms-badge title="Title" info="99" />
  <ms-badge title="Title" info="99+" />
</ms-badge-group>
```

``` javascript
export default {
  data() {
    return {
      activeKey: 0
    };
  },

  methods: {
    onChange(key) {
      this.activeKey = key;
    }
  }
};
```

### BadgeGroup API

| Attribute | Description | Type | Default |
|------|------|------|------|
| active-key | Index of chosen badge | `String | Number` | `0` |

### BadgeGroup Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when badge changed | key: index of current badge |

### Badge API

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Content | `String` | `''` |
| info | Info Message | `String | Number` | `''` |
| url | Link | `String` | - |

### Badge Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click badge | key: index of current badge |
