(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{130:function(t,e,n){"use strict";var o=n(61);n.n(o).a},131:function(t,e,n){(t.exports=n(18)(!1)).push([t.i,".demo-image-preview .ms-button {\n  margin-left: 15px;\n}\n.ms-image-preview img {\n  -webkit-user-drag: none;\n}\n",""])},226:function(t,e,n){"use strict";n.r(e);var o=n(9),i=["https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg","https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg","https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg","https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"],s={i18n:{"zh-CN":{button1:"预览图片",button2:"指定初始位置",button3:"异步关闭"},"en-US":{button1:"Show Images",button2:"Custom Start Position",button3:"Async Close"}},methods:{showImagePreview:function(t,e){var n=Object(o.a)({images:i,asyncClose:!!e,startPosition:"number"==typeof t?t:0});e&&setTimeout(function(){n.close()},e)}}},c=(n(130),n(0)),u=Object(c.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("demo-section",[n("demo-block",{attrs:{title:t.$t("basicUsage")}},[n("ms-button",{on:{click:t.showImagePreview}},[t._v(t._s(t.$t("button1")))])],1),n("demo-block",{attrs:{title:t.$t("button2")}},[n("ms-button",{on:{click:function(e){t.showImagePreview(1)}}},[t._v(t._s(t.$t("button2")))])],1),n("demo-block",{attrs:{title:t.$t("button3")}},[n("ms-button",{on:{click:function(e){t.showImagePreview(0,1e3)}}},[t._v(t._s(t.$t("button3")))])],1)],1)},[],!1,null,null,null);u.options.__file="index.vue";e.default=u.exports},61:function(t,e,n){var o=n(131);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(19)(o,i);o.locals&&(t.exports=o.locals)}}]);