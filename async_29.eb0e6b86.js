(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{146:function(e,t,n){"use strict";var a=n(69);n.n(a).a},147:function(e,t,n){(e.exports=n(18)(!1)).push([e.i,".demo-pagination .ms-pagination {\n  margin: 5px 0;\n  width: 100%;\n}\n.demo-pagination .ms-doc-demo-block {\n  padding: 0 15px;\n}\n.demo-pagination .ms-doc-demo-block__title {\n  padding-left: 0;\n}\n",""])},217:function(e,t,n){"use strict";n.r(t);var a={i18n:{"zh-CN":{title2:"简单模式",title3:"",prevText:"上一页",nextText:"下一页"},"en-US":{title2:"Simple Mode",title3:"Show ellipses",prevText:"Prev",nextText:"Next"}},data:function(){return{currentPage1:1,currentPage2:1,currentPage3:1}}},i=(n(146),n(0)),r=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:e.$t("basicUsage")}},[n("ms-pagination",{attrs:{"total-items":24,"items-per-page":5,"prev-text":e.$t("prevText"),"next-text":e.$t("nextText")},model:{value:e.currentPage1,callback:function(t){e.currentPage1=t},expression:"currentPage1"}})],1),n("demo-block",{attrs:{title:e.$t("title2")}},[n("ms-pagination",{attrs:{"page-count":12,"prev-text":e.$t("prevText"),"next-text":e.$t("nextText"),mode:"simple",size:"small"},model:{value:e.currentPage2,callback:function(t){e.currentPage2=t},expression:"currentPage2"}})],1),n("demo-block",{attrs:{title:e.$t("title3")}},[n("ms-pagination",{attrs:{"force-ellipses":"","total-items":125,"show-page-size":3,"prev-text":e.$t("prevText"),"next-text":e.$t("nextText")},model:{value:e.currentPage3,callback:function(t){e.currentPage3=t},expression:"currentPage3"}})],1)],1)},[],!1,null,null,null);r.options.__file="index.vue";t.default=r.exports},69:function(e,t,n){var a=n(147);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(19)(a,i);a.locals&&(e.exports=a.locals)}}]);