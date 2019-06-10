## Panel

### Install
``` javascript
import { Panel } from 'miss-ui';

Vue.use(Panel);
```

### Usage

#### Basic Usage

```html
<ms-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
</ms-panel>
```

#### Advanced Usage

```html
<ms-panel title="Title" desc="Description" status="Status">
  <div>Content</div>
  <div slot="footer">
    <ms-button size="small">Button</ms-button>
    <ms-button size="small" type="danger">Button</ms-button>
  </div>
</ms-panel>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| status | Status | `String` | - |


### Slot

| name | Description |
|------|------|
| - | Default slot |
| header | Custom header |
| footer | Custom footer |
