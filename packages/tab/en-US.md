## Tab

### Install
``` javascript
import { Tab, Tabs } from 'miss-ui';

Vue.use(Tab).use(Tabs);
```

### Usage

#### Basic Usage

The first tab is actived by default, you can set `v-model` to active specified tab.

```html
<ms-tabs v-model="active">
  <ms-tab v-for="index in 4" :title="'tab' + index">
    content of tab {{ index }}
  </ms-tab>
</ms-tabs>
```

```js
export default {
  data() {
    return {
      active: 2
    };
  }
}
```

#### Swipe Tabs

By default more than 4 tabs, you can scroll through the tabs. You can set `swipe-threshold` attribute to customize threshold number.

```html
<ms-tabs>
  <ms-tab v-for="index in 8" :title="'tab' + index">
    content of tab {{ index }}
  </ms-tab>
</ms-tabs>
```

#### Disabled Tab

You can set `disabled` attribute on the corresponding `ms-tab`. 

```html
<ms-tabs @disabled="onClickDisabled">
  <ms-tab v-for="index in 3" :title="'tab' + index" :disabled="index === 2">
    content of tab {{ index }}
  </ms-tab>
</ms-tabs>
```

```javascript
export default {
  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + ' is disabled');
    }
  }
};
```

#### Card Style

Tabs styled as cards.

```html
<ms-tabs type="card">
  <ms-tab v-for="index in 3" :title="'tab' + index">
    content of tab {{ index }}
  </ms-tab>
</ms-tabs>
```

#### Click Event

```html
<ms-tabs @click="onClick">
  <ms-tab v-for="index in 2" :title="'tab' + index">
    content of tab {{ index }}
  </ms-tab>
</ms-tabs>
```

```javascript
export default {
  methods: {
    onClick(index, title) {
      this.$toast(title);
    }
  }
};
```

#### Sticky
In sticky mode, the tab will be fixed to top when scroll to top

```html
<ms-tabs v-model="active" sticky>
  <ms-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </ms-tab>
</ms-tabs>
```

#### Custom title
Use title slot to custom tab title

```html
<ms-tabs v-model="active">
  <ms-tab v-for="index in 2">
    <div slot="title">
      <ms-icon name="more-o" />tab
    </div>
    content {{ index }}
  </ms-tab>
</ms-tabs>
```

#### Switch Animation

Use `animated` props to change tabs with animation

```html
<ms-tabs v-model="active" animated>
  <ms-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </ms-tab>
</ms-tabs>
```

#### Swipeable

In swipeable mode, you can switch tabs with swipe gestrue in the content

```html
<ms-tabs v-model="active" swipeable>
  <ms-tab v-for="index in 4" :title="'tab ' + index">
    content {{ index }}
  </ms-tab>
</ms-tabs>
```

### Tabs API

| Attribute | Description | Type | Default |
|------|------|------|------|
| v-model | Index of active tab | `String` `Number` | `0` |
| color | Tab color | `String` | `#f44` |
| type | Can be set to `line` `card` | `String` | `line` |
| duration | Toggle tab's animation time | `Number` | `0.3` | - |
| line-width | Width of tab line (px) | `Number` | Width of active tab |
| swipe-threshold | Set swipe tabs threshold | `Number` | `4` | - |
| sticky | Whether to use sticky mode | `Boolean` | `false` |
| offset-top | Offset top when use sticky mode | `Number` | `0` |
| swipeable | Whether to switch tabs with swipe gestrue in the content | `Boolean` | `false` |
| animated | Whether to change tabs with animation | `Boolean` | `false` |
| ellipsis | Whether to ellipsis too long title | `Boolean` | `true` |

### Tab API

| Attribute | Description | Type | Default |
|------|------|------|------|
| title | Title | `String` | - |
| disabled | Whether to disable tab | `Boolean` | `false` |

### Tab Slot

| name | Description |
|------|------|
| - | Content |
| title | Custom tab |

### Tabs Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click tab | index：index of current tab，title: tab title |
| change | Triggered when active tab changed | index：index of current tab，title: tab title |
| disabled | Triggered when click disabled tab | index：index of current tab, title: tab title |
| scroll | Triggered when tab scroll | Object: { scrollTop, isFixed } |
