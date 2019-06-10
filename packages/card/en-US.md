## Card

### Install
``` javascript
import { Card } from 'miss-ui';

Vue.use(Card);
```

### Usage

#### Basic Usage

```html
<ms-card
  title="Title"
  desc="Description"
  num="2"
  price="2.00"
  :thumb="imageURL"
/>
```

#### Advanced Usage
Use `slot` to custom content.

```html
<ms-card
  num="2"
  tag="Tag"
  title="Title"
  desc="Description"  
  price="2.00"
  :thumb="imageURL"
  origin-price="10.00"
>
  <div slot="footer">
    <ms-button size="mini">Button</ms-button>
    <ms-button size="mini">Button</ms-button>
  </div>
</ms-card>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| thumb | Left thumb image URL | `String` | - |
| title | Title | `String` | - |
| desc | Description | `String` | - |
| tag | Tag | `String` | - |
| num | Number | `String | Number` | - |
| price | Price | `String | Number` | - |
| origin-price | Origin price | `String | Number` | - |
| centered | Whether content vertical centered | `String` | `false` |
| currency | Currency symbol |  `String` | `¥` |
| thumb-link | Thumb link URL | `String` | - |
| lazy-load | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | `Boolean` | `false` |

### Slot

| name | Description |
|------|------|
| title | Custom title |
| desc | Custom description |
| tags | Custom tags |
| thumb | Custom thumb |
| footer | Custom footer |
