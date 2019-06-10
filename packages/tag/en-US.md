## Tag

### Install
``` javascript
import { Tag } from 'miss-ui';

Vue.use(Tag);
```

### Usage

#### Basic Usage

```html
<ms-tag>Tag</ms-tag>
<ms-tag type="danger">Tag</ms-tag>
<ms-tag type="primary">Tag</ms-tag>
<ms-tag type="success">Tag</ms-tag>
```

#### Plain style

```html
<ms-tag plain>Tag</ms-tag>
<ms-tag plain type="danger">Tag</ms-tag>
<ms-tag plain type="primary">Tag</ms-tag>
<ms-tag plain type="success">Tag</ms-tag>
```

#### Round style

```html
<ms-tag round>Tag</ms-tag>
<ms-tag round type="danger">Tag</ms-tag>
<ms-tag round type="primary">Tag</ms-tag>
<ms-tag round type="success">Tag</ms-tag>
```

#### Mark style

```html
<ms-tag mark>Tag</ms-tag>
<ms-tag mark type="danger">Tag</ms-tag>
<ms-tag mark type="primary">Tag</ms-tag>
<ms-tag mark type="success">Tag</ms-tag>
```

#### Custom Color

```html
<ms-tag color="#f2826a">Tag</ms-tag>
<ms-tag color="#f2826a" plain>Tag</ms-tag>
<ms-tag color="#7232dd">Tag</ms-tag>
<ms-tag color="#7232dd" plain>Tag</ms-tag>
<ms-tag color="#ffe1e1" text-color="#ad0000">Tag</ms-tag>
```

#### Custom Size

```html
<ms-tag>Tag</ms-tag>
<ms-tag size="medium">Tag</ms-tag>
<ms-tag size="large">Tag</ms-tag>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Type, can be set to `primary` `success` `danger` | `String` | - |
| size | Size, can be set to `large` `medium` | `String` | - |
| color | Custom color | `String` | - |
| plain | Whether to be plain style | `Boolean` | `false` |
| round | Whether to be round style | `Boolean` | `false` |
| mark | Whether to be mark style | `Boolean` | `false` |
| text-color | Text color | `String` | `white` |


### Slot

| name | Description |
|------|------|
| - | Default slot |
