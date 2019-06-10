## Uploader

### Install
``` javascript
import { Uploader } from 'miss-ui';

Vue.use(Uploader);
```

### Usage

#### Basic Usage

```html
<div class="uploader-container">
  <ms-uploader :after-read="onRead">
    <ms-icon name="photograph" />
  </ms-uploader>
</div>
```

```javascript
export default {
  methods: {
    onRead(file) {
      console.log(file)
    }
  }
};
```

#### Set input attr
You can set native properties such as `accpet`、`multiple` on Uploader, and the input will automatically inherits the attribute.

```html
<ms-uploader :after-read="onRead" accept="image/gif, image/jpeg" multiple>
  <ms-icon name="photograph" />
</ms-uploader>
```

### API

| Attribute | Description | Type | Default |
|------|------|------|------|
| result-type | Type of file read result, can be set to `dataUrl` `text` | `String` | `dataUrl` |
| accept | Accepted file type | `String` | `image/*` |
| disabled | Whether to disabled the upload | `Boolean` | `false` |
| before-read | Hook before reading the file, return false to stop reading the file | `Function` | - |
| after-read | Hook after reading the file | `Function` | - |
| max-size | Max size of file | `Number` | - |

### Event

| Event | Description | Arguments |
|------|------|------|
| oversize | Triggered when file size over limit | Same as after-read |

### Slot

| Name | Description |
|------|------|
| - | Custom icon |

### afterRead Parematers

| Attribute | Description | Type |
|------|------|------|
| file | file object | `Object` |
| content | file content | `String` |
