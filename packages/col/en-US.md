## Layout

Quickly and easily create layouts with `ms-row` and `ms-col`

### Install
``` javascript
import { Row, Col } from 'miss-ui';

Vue.use(Row).use(Col);
```

### Usage

#### Basic Usage

Layout are based on 24-column. The attribute `span` in `Col` means the number of column the grid spans. Of course, You can use `offset` attribute to set number of spacing on the left side of the grid.


```html
<ms-row>
  <ms-col span="8">span: 8</ms-col>
  <ms-col span="8">span: 8</ms-col>
  <ms-col span="8">span: 8</ms-col>
</ms-row>

<ms-row>
  <ms-col span="4">span: 4</ms-col>
  <ms-col span="10" offset="4">offset: 4, span: 10</ms-col>
  <ms-col span="6">span: 6</ms-col>
</ms-row>

<ms-row>
  <ms-col offset="12" span="12">offset: 12, span: 12</ms-col>
</ms-row>
```


#### Column Spacing

Set grid spacing using `gutter` attribute. The default value is 0


```html
<ms-row gutter="20">
  <ms-col span="8">span: 8</ms-col>
  <ms-col span="8">span: 8</ms-col>
  <ms-col span="8">span: 8</ms-col>
</ms-row>
```

#### Flex Layout

Setting `type` to `flex` to enable flex layout

```html
<ms-row type="flex">
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
</ms-row>

<ms-row type="flex" justify="center">
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
</ms-row>

<ms-row type="flex" justify="end">
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
</ms-row>

<ms-row type="flex" justify="space-between">
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
</ms-row>

<ms-row type="flex" justify="space-around">
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
  <ms-col span="6">span: 6</ms-col>
</ms-row>
```


### API

#### Row

| Attribute | Description | Type | Default |
|------|------|------|------|
| type | Layout type, can be set to `flex` | `String` | - |
| gutter | Grid spacing（px） | `String | Number` | - |
| tag | Custom element tag | `String` | `div` |
| justify | Flex main axis，can be set to  end/center/space-around/space-between | `String` | `start` |
| align | Flex cross axis, be set to  center/bottom | `String` | `top` |

#### Col

| Attribute | Description | Type | Default |
|------|------|------|------|
| span | Number of column the grid spans | `String | Number` | - |
| offset | Number of spacing on the left side of the grid | `String | Number` | - |
| tag | Custom element tag | `String` | `div` |
