(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{246:function(e,d,s){"use strict";s.r(d);var t={i18n:{"zh-CN":{list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}],add:"新增地址",edit:"编辑地址",disabledText:"以下地址超出配送范围"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere"},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range"}},data:function(){return{chosenAddressId:"1"}},methods:{onAdd:function(){this.$toast(this.$t("add"))},onEdit:function(e,d){this.$toast(this.$t("edit")+":"+d)}}},i=s(0),n=Object(i.a)(t,function(){var e=this,d=e.$createElement,s=e._self._c||d;return s("demo-section",[s("demo-block",{attrs:{title:e.$t("basicUsage")}},[s("ms-address-list",{attrs:{list:e.$t("list"),"disabled-list":e.$t("disabledList"),"disabled-text":e.$t("disabledText")},on:{add:e.onAdd,edit:e.onEdit},model:{value:e.chosenAddressId,callback:function(d){e.chosenAddressId=d},expression:"chosenAddressId"}})],1)],1)},[],!1,null,null,null);n.options.__file="index.vue";d.default=n.exports}}]);