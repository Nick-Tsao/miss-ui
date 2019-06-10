(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{255:function(s,t,e){"use strict";e.r(t);var C={created:function(){this.content=unescape("%3Ch2%3ETreeSelect%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20TreeSelect%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27miss-ui%27%3C/span%3E%3B%0A%0AVue.use%28TreeSelect%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ems-tree-select%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22items%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Amain-active-index%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22mainActiveIndex%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aactive-id%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22activeId%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Enavclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onNavClick%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eitemclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onItemClick%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20items%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20the%20index%20of%20parent%20item%3C/span%3E%0A%20%20%20%20%20%20mainActiveIndex%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20the%20id%20of%20selected%20item%3C/span%3E%0A%20%20%20%20%20%20activeId%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1001%3C/span%3E%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onNavClick%28index%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.mainActiveIndex%20%3D%20index%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onItemClick%28data%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.activeId%20%3D%20data.id%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ch4%3EAPI%3C/h4%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eitems%3C/td%3E%0A%3Ctd%3ERequired%20datasets%20for%20the%20component%2C%20see%20Data%20Structure%20for%20detail.%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eheight%3C/td%3E%0A%3Ctd%3EHeight%20%28px%29%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emain-Active-index%3C/td%3E%0A%3Ctd%3EThe%20index%20of%20selected%20parent%20node%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eactive-id%3C/td%3E%0A%3Ctd%3EId%20of%20selected%20item%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E0%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch4%3EEvent%3C/h4%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Enavclick%3C/td%3E%0A%3Ctd%3Etriggered%20when%20parent%20node%20is%20selected%3C/td%3E%0A%3Ctd%3Eindex%3A%20index%20of%20selected%20parent%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitemclick%3C/td%3E%0A%3Ctd%3Etriggered%20when%20item%20is%20selected%3C/td%3E%0A%3Ctd%3Edata%3A%20selected%20item%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EData%20Structure%3C/h3%3E%0A%3Cp%3E%3Ccode%3Eitems%3C/code%3E%20should%20be%20an%20array%20contains%20specified%20tree%20objects.%3C/p%3E%0A%3Cp%3EIn%20every%20tree%20object%2C%20%3Ccode%3Etext%3C/code%3E%20property%20defines%20%3Ccode%3Eid%3C/code%3E%20stands%20for%20the%20unique%20key%20while%20the%20%3Ccode%3Echildren%3C/code%3E%20contains%20sub-tree%20objects.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%5B%0A%20%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20name%20of%20the%20parent%20node%3C/span%3E%0A%20%20%20%20text%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27All%20Cities%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20leaves%20of%20this%20parent%20node%3C/span%3E%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20name%20of%20the%20leaf%20node%3C/span%3E%0A%20%20%20%20%20%20%20%20text%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Washington%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20id%20of%20the%20leaf%20node%2C%20component%20highlights%20leaf%20node%20by%20comparing%20the%20activeId%20with%20this.%3C/span%3E%0A%20%20%20%20%20%20%20%20id%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20disable%20options%3C/span%3E%0A%20%20%20%20%20%20%20%20disabled%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Etrue%3C/span%3E%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Etext%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Baltimore%27%3C/span%3E%2C%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eid%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E2%3C/span%3E%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D%0A%3C/code%3E%3C/pre%3E%0A")}},E=e(0),a=Object(E.a)(C,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);a.options.__file="en-US.md";t.default=a.exports}}]);