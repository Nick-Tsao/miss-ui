## Quickstart

### Install

#### NPM

```shell
npm i miss-ui -S
```

#### YARN

```shell
yarn add miss-ui
```

#### CDN

```html
<!-- import style -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/miss-ui@1.4/lib/index.css" />

<!-- import script -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/miss-ui@1.4/lib/miss-ui.min.js"></script>
```

### Usage

#### 1. Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```bash
# Install babel-plugin-import
npm i babel-plugin-import -D
```

```js
// set babel config in .babelrc or babel-loader
// Note: Don't set libraryDirectory if you are using webpack 1.
{
  "plugins": [
    ["import", {
      "libraryName": "miss-ui",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'miss-ui',
      libraryDirectory: 'es',
      style: true
    }, 'miss-ui']
  ]
};
```

Then you can import components from miss-ui, equivalent to import manually below.

```js
import { Button } from 'miss-ui';
```

> If you are using TypeScript，please use [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) instead

#### 2. Manually import

```js
import Button from 'miss-ui/lib/button';
import 'miss-ui/lib/button/style';
```
 
#### 3. Import all components

```js
import Vue from 'vue';
import missUI from 'miss-ui';
import 'miss-ui/lib/index.css';

Vue.use(miss-ui);
```

> If you configured babel-plugin-import, you won't be allowed to import all components.


### Rem units

Miss use `px` as size units by default，you can use tools such as `postcss-pxtorem` to transform units to `rem`.

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [lib-flexible](https://github.com/amfe/lib-flexible)

postcss config example:

```js
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
```