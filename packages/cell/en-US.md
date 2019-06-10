## Cell

### Install
``` javascript
import { Cell, CellGroup } from 'miss-ui';

Vue.use(Cell).use(CellGroup);
```

### Usage

#### Basic Usage

```html
<ms-cell-group>
  <ms-cell title="Cell title" value="Content" />
  <ms-cell title="Cell title" value="Content" label="Description" />
</ms-cell-group>
```

#### Size

```html
<ms-cell-group>
  <ms-cell title="Cell title" value="Content" size="large" />
  <ms-cell title="Cell title" value="Content" size="large" label="Description" />
</ms-cell-group>
```

#### Left Icon

```html
<ms-cell-group>
  <ms-cell title="Cell title" icon="location-o" />
</ms-cell-group>
```

#### Value only

```html
<ms-cell-group>
  <ms-cell value="Content" />
</ms-cell-group>
```

#### Link

```html
<ms-cell-group>
  <ms-cell title="Cell title" is-link />
  <ms-cell title="Cell title" is-link value="Content" />
  <ms-cell title="Cell title" is-link arrow-direction="down" value="Content" />
</ms-cell-group>
```

#### Router

```html
<ms-cell-group>
  <ms-cell title="Cell title" is-link url="//keepmissing.com/mobile.html" />
  <ms-cell title="Cell title" is-link to="index" />
</ms-cell-group>
```

#### Advanced Usage

```html
<ms-cell-group>
  <ms-cell value="Content" icon="shop-o" is-link>
    <template slot="title">
      <span class="custom-text">Cell title</span>
      <ms-tag type="danger">Tag</ms-tag>
    </template>
  </ms-cell>
  <ms-cell title="Cell title" icon="location-o" is-link />
  <ms-cell title="Cell title">
    <ms-icon slot="right-icon" name="search" class="custom-icon" />
  </ms-cell>
</ms-cell-group>
```

### CellGroup API

| Attribute | Description | Type | Default |
|------|------|------|------|
| border | Whether to show outer border | `Boolean` | `true` |

### Cell API

| Attribute | Description | Type | Default |
|------|------|------|------|
| icon | Left Icon | `String` | - |
| title | Title | `String | Number` | - |
| value | Right text | `String | Number` | - |
| label | Description below the title | `String` | - |
| size | Size，can be set to `large` | `String` | - |
| border | Whether to show inner border | `Boolean` | `true` |
| center | Whether to center content vertically | `Boolean` | `true` |
| url | Link URL | `String` | - |
| to | Target route of the link, same as to of `vue-router` | `String | Object` | - |
| replace | If true, the navigation will not leave a history record | `String` | `false` |
| clickable | Whether to show click feedback when clicked | `Boolean` | `false` |
| is-link | Whether to show link icon | `Boolean` | `false` |
| required | Whether to show required mark | `Boolean` | `false` |
| arrow-direction | Can be set to `left` `up` `down` | `String` | - |
| title-class | Title className | `String` | - |
| value-class | Value className | `String` | - |
| label-class | Label className | `String` | - |

### Cell Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click cell | - |

### Cell Slot

| name | Description |
|------|------|
| - | Default slot |
| icon | Custom icon |
| title | Custom title |
| right-icon | Custom right icon |
