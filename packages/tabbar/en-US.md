## Tabbar

### Install
``` javascript
import { Tabbar, TabbarItem } from 'miss-ui';

Vue.use(Tabbar).use(TabbarItem);
```

### Usage

#### Basic Usage

```html
<ms-tabbar v-model="active">
  <ms-tabbar-item icon="home-o">Tab</ms-tabbar-item>
  <ms-tabbar-item icon="search" dot>Tab</ms-tabbar-item>
  <ms-tabbar-item icon="freinds-o" info="5">Tab</ms-tabbar-item>
  <ms-tabbar-item icon="setting-o" info="20">Tab</ms-tabbar-item>
</ms-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0
    }
  }
}
```

#### Custom icon
Use `icon` slot to custom icon

```html
<ms-tabbar v-model="active">
  <ms-tabbar-item info="3">
    <span>Custom</span>
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.normal"
    >
  </ms-tabbar-item>
  <ms-tabbar-item icon="search">Tab</ms-tabbar-item>
  <ms-tabbar-item icon="setting-o">Tab</ms-tabbar-item>
</ms-tabbar>
```

```javascript
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: '//img.yzcdn.cn/icon-normal.png',
        active: '//img.yzcdn.cn/icon-active.png'
      }
    }
  }
}
```

### Tabbar API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of current tab | `Number` | - |
| fixed | Whether to fixed bottom | `Boolean` | `true` |
| z-index | Z-index | `Number` | `1` |

### Tabbar Event

| Event | Description | Arguments |
|------|------|------|
| change | Triggered when change active tab | active: index of current tab |

### TabbarItem API

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Icon name | `String` | - |
| dot | Whether to show red dot | `Boolean` | - |
| info | Info message | `String | Number` | - |
| url | Link | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `String` | `false` |

### TabbarItem Slot

| Name | Description | slot-scope |
|------|------|------|
| icon | Custom icon | active |
