## Loading

### Install
``` javascript
import { Loading } from 'miss-ui';

Vue.use(Loading);
```

### Usage

#### Circular

```html
<ms-loading />
<ms-loading color="white" />
```

#### Spinner

```html
<ms-loading type="spinner" />
<ms-loading type="spinner" color="white" />
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| color | Loading color | `String` | `#c9c9c9` |  |
| type | Can be set to `spinner` | `String` | `circular` |
| size | Size | `String` | `30px` |
