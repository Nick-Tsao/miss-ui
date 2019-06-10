(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{358:function(s,a,l){"use strict";l.r(a);var n={created:function(){this.content=unescape("%3Ch2%3ECustom%20Theme%3C/h2%3E%0A%3Cp%3E%3Ccode%3EMiss%3C/code%3E%20provides%20a%20set%20of%20default%20themes%2C%20if%20you%20want%20to%20custom%20the%20theme%20color%20or%20other%20styles%2C%20you%20can%20use%20the%20following%20methods%3A%3C/p%3E%0A%3Ch3%3ELess%20variables%3C/h3%3E%0A%3Cp%3EMiss%20use%20%3Ca%20href%3D%22http%3A//lesscss.org/%22%3ELess%3C/a%3E%20as%20css%20preprocessor%uFF0Cyou%20can%20modify%20less%20variables%20to%20custom%20theme.%3C/p%3E%0A%3Cp%3EThere%20are%20some%20basic%20variables%20below%2C%20all%20available%20variables%20could%20be%20found%20in%20%3Ca%20href%3D%22https%3A//github.com/youzan/vant/blob/dev/packages/style/var.less%22%3Evar.less%3C/a%3E%u3002%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-less%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20color%20variables%3C/span%3E%0A%3Cspan%20class%3D%22hljs-variable%22%3E@black%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23000%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@white%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23fff%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@red%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23f44%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@blue%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%231989fa%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@orange%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23ff976a%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@orange-dark%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23ed6a0c%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@orange-light%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23fffbe8%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@green%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%234b0%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@gray%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23c9c9c9%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@gray-light%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23e5e5e5%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@gray-darker%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%237d7e80%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@gray-dark%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23969799%3C/span%3E%3B%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20default%20colors%3C/span%3E%0A%3Cspan%20class%3D%22hljs-variable%22%3E@text-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23323233%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@border-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23ebedf0%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@active-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23e8e8e8%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@background-color%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23f8f8f8%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-variable%22%3E@background-color-light%3A%3C/span%3E%20%3Cspan%20class%3D%22hljs-number%22%3E%23fafafa%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EHow%20to%20custom%20theme%3C/h3%3E%0A%3Ch4%3EStep%201%3A%20import%20less%20file%3C/h4%3E%0A%3Cp%3EFirst%20you%20should%20import%20the%20less%20source%20file%20to%20your%20project.%20you%20can%20use%20babel-plugin-import%20to%20automatically%20import%20or%20just%20manually%20import%20less%20file.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20configure%20babel%20plugin%20in%20babel.config.js%3C/span%3E%0A%3Cspan%20class%3D%22hljs-comment%22%3E//%20For%20users%20who%20use%20babel6%2C%20please%20manually%20import%20less%20file%3C/span%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eplugins%3C/span%3E%3A%20%5B%0A%20%20%20%20%5B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27import%27%3C/span%3E%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ElibraryName%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27miss-ui%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3ElibraryDirectory%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27es%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20specify%20less%20file%20path%3C/span%3E%0A%20%20%20%20%20%20%20%20style%3A%20%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3Ename%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%60%3Cspan%20class%3D%22hljs-subst%22%3E%24%7Bname%7D%3C/span%3E/style/less%60%3C/span%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27miss-ui%27%3C/span%3E%0A%20%20%20%20%5D%0A%20%20%5D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3Emanually%20import%20less%20file%uFF1A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20Button%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27miss-ui/lib/button%27%3C/span%3E%3B%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27miss-ui/lib/button/style/less%27%3C/span%3E%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EStep%202%3A%20modify%20less%20variables%3C/h4%3E%0A%3Cp%3EUse%20%3Ca%20href%3D%22http%3A//lesscss.org/usage/%23using-less-in-the-browser-modify-variables%22%3EmodifyVars%3C/a%3E%20provided%20by%20less.js%20to%20modify%20less%20variables%uFF0Cwebpack%20config%20for%20reference%3A%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-js%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E//%20webpack.config.js%3C/span%3E%0A%3Cspan%20class%3D%22hljs-built_in%22%3Emodule%3C/span%3E.exports%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Erules%3C/span%3E%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etest%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-regexp%22%3E/%5C.less%24/%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Euse%3C/span%3E%3A%20%5B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20...other%20loaders%3C/span%3E%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eloader%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27less-loader%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eoptions%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EmodifyVars%3C/span%3E%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ered%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%2303a9f4%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eblue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%233eaf7c%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eorange%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%23f08d49%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-string%22%3E%27text-color%27%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%23111%27%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%3B%0A%3C/code%3E%3C/pre%3E%0A")}},e=l(0),p=Object(e.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);p.options.__file="theme.en-US.md";a.default=p.exports}}]);