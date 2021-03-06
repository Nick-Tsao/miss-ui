## 快速上手

### 安装

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
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/miss-ui@1.0/lib/index.css">

<!-- 引入组件 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/miss-ui@1.0/lib/miss-ui.min.js"></script>
```

### 引入组件

#### 方式一. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (推荐)

`babel-plugin-import` 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D
```

```js
// .babelrc 中配置
// 注意：webpack 1 无需设置 libraryDirectory
{
  "plugins": [
    ["import", {
      "libraryName": "miss-ui",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
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

接着你可以在代码中直接引入 Miss 组件，插件会自动将代码转化为方式二中的按需引入形式

```js
import { Button, Cell } from 'miss-ui';
```

> 如果你在使用 TypeScript，可以使用 [ts-import-plugin](https://github.com/Brooooooklyn/ts-import-plugin) 实现按需引入

#### 方式二. 按需引入组件

在不使用插件的情况下，可以手动引入需要的组件

```js
import Button from 'miss-ui/lib/button';
import 'miss-ui/lib/button/style';
```
 
#### 方式三. 导入所有组件

```js
import Vue from 'vue';
import missUI from 'miss-ui';
import 'miss-ui/lib/index.css';

Vue.use(missUI);
```

> 注意：配置 babel-plugin-import 插件后将不允许导入所有组件


### Rem 适配

Miss 中的样式默认使用`px`作为单位，如果需要使用`rem`单位，推荐使用以下两个工具

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

下面提供了一份基本的 postcss 配置，可以在此配置的基础上根据项目需求进行修改

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

> 注意：在配置 postcss-loader 时，应避免 ignore node_modules 目录，这会导致 Miss 的样式无法被编译
