## Field

### Install
``` javascript
import { Field } from 'miss-ui';

Vue.use(Field);
```

### Usage

#### Basic Usage
The value of field is bound with v-model.

```html
<ms-cell-group>
  <ms-field v-model="value" placeholder="Username" />
</ms-cell-group>
```

#### Custom type
Use `type` prop to custom diffrent type fields.

```html
<ms-cell-group>
  <ms-field
    v-model="username"
    required
    clearable
    label="Username"
    icon="question-o"
    placeholder="Username"
    @click-icon="$toast('question')"
  />

  <ms-field
    v-model="password"
    type="password"
    label="Password"
    placeholder="Password"
    required
  />
</ms-cell-group>
```

#### Disabled

```html
<ms-cell-group>
  <ms-field
    value="Disabled"
    label="Username"
    left-icon="contact"
    disabled
  />
</ms-cell-group>
```

#### Error info
Use `error` or `error-message` to show error info

```html
<ms-cell-group>
  <ms-field
    v-model="username"
    label="Username"
    placeholder="Username"
    error
  />
  <ms-field
    v-model="phone"
    label="Phone"
    placeholder="Phone"
    error-message="Invalid phone"
  />
</ms-cell-group>
```

#### Auto resize
Textarea Field can be auto resize when has `autosize` prop

```html
<ms-cell-group>
  <ms-field
    v-model="message"
    label="Message"
    type="textarea"
    placeholder="Message"
    rows="1"
    autosize
  />
</ms-cell-group>
```

#### Insert button
Use button slot to insert button

```html
<ms-cell-group>
  <ms-field
    v-model="sms"
    center
    clearable
    label="SMS"
    placeholder="SMS"
  >
    <ms-button slot="button" size="small" type="primary">Send SMS</ms-button>
  </ms-field>
</ms-cell-group>
```

### API

Field support all native properties of input tag，such as `maxlength`、`placeholder`、`autofocus`

| Attribute | Description | Type | Default |
|------|------|------|------|
| value | Field value | `String | Number` | - |
| label | Field label | `String` | - |
| type | Input type | `String` | `text` |
| border | Whether to show inner border | `Boolean` | `true` |
| disabled | Whether to disable field | `Boolean` | `false` |
| readonly | Whether to be readonly | `Boolean` | `false` |
| clearable | Whether to be clearable | `Boolean` | `false` |
| required | Whether to show required mark | `Boolean` | `false` 
| is-link | Whether to show link icon | `Boolean` | `false` |
| error | Whether to show error info | `Boolean` | `false` |
| error-message | Error message | `String` | `''` |
| label-align | Label text align, can be set to `center` `right` | `String` | `left` |
| input-align | Input text align, can be set to `center` `right` | `String` | `left` |
| autosize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | `Boolean | Object` | `false` |
| icon | Right side icon name | `String` | - |
| left-icon | Left side icon name | `String` | - |

### Event

Field support all native events of input tag，such as `focus`、`blur`、`keypress`

| Event | Description | Parameters |
|------|------|------|
| click-icon | Triggered when click the icon of Field | - |
| clear | Triggered when click clear icon | - |

### Methods

Use ref to get field instance and call instance methods

| Name | Attribute | Return value | Description |
|------|------|------|------|
| focus | - | - | Trigger input focus |
| blur | - | - | Trigger input blur |

### Slot

| name | Description |
|------|------|
| label | Custom label |
| left-icon | Custom left icon |
| icon | Custom right icon |
| button | Insert button |
