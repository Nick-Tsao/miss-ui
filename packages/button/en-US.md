## Button

### Install
``` javascript
import { Button } from 'miss-ui';

Vue.use(Button);
```

### Usage

#### Type

```html
<ms-button type="primary">Primary</ms-button>
<ms-button type="danger">Danger</ms-button>
<ms-button type="default">Default</ms-button>
<ms-button type="warning">Warning</ms-button>
```

#### Plain

```html
<ms-button plain type="primary">Primary</ms-button>
<ms-button plain type="danger">Danger</ms-button>
```

#### Disabled

```html
<ms-button disabled type="primary">Diabled</ms-button>
<ms-button disabled type="danger">Diabled</ms-button>
```

#### Loading

```html 
<ms-button loading type="primary" />
<ms-button loading type="primary" />
```

#### Shape

```html 
<ms-button square type="primary">Square</ms-button>
<ms-button round type="danger">Round</ms-button>
```

#### Size

```html 
<ms-button size="large">Large</ms-button>
<ms-button size="normal">Normal</ms-button>
<ms-button size="small">Small</ms-button>
<ms-button size="mini">Mini</ms-button>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Can be set to `primary` `warning` `danger` | `String` | `default` |
| size | Can be set to `large` `small` `mini` | `String` | `normal` |
| text | Text | `String` | - |
| tag | Tag | `String` | `button` |
| native-type | Native Type Attribute | `String` | `''` |
| plain | Whether to be plain button | `Boolean` | `false` |
| disabled | Whether to disable button | `Boolean` | `false` |
| loading | Whether show loading status | `Boolean` | `false` |
| block | Whether to set display block | `Boolean` | `false` |
| round | Whether to be round button | `Boolean` | `false` |
| square | Whether to be square button | `Boolean` | `false` |

### Event

| Event | Description | Arguments |
|------|------|------|
| click | Triggered when click button and not disabled or loading | - |
