(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{333:function(E,C,t){"use strict";t.r(C);var u={created:function(){this.content=unescape("%3Ch2%3ECoupon%20%u4F18%u60E0%u5238%u9009%u62E9%u5668%3C/h2%3E%0A%3Ch3%3E%u4F7F%u7528%u6307%u5357%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20CouponCell%2C%20CouponList%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27miss-ui%27%3C/span%3E%3B%0A%0AVue.use%28CouponCell%29.use%28CouponList%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3E%u4EE3%u7801%u6F14%u793A%3C/h3%3E%0A%3Ch4%3E%u57FA%u7840%u7528%u6CD5%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u4F18%u60E0%u5238%u5355%u5143%u683C%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ems-coupon-cell%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acoupons%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22coupons%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Achosen-coupon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22chosenCoupon%22%3C/span%3E%0A%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eclick%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showList%20%3D%20true%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%0A%3Cspan%20class%3D%22hljs-comment%22%3E%26lt%3B%21--%20%u4F18%u60E0%u5238%u5217%u8868%20--%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ems-popup%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22showList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Eposition%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22bottom%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ems-coupon-list%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acoupons%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22coupons%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Achosen-coupon%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22chosenCoupon%22%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Adisabled-coupons%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22disabledCoupons%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Echange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onChange%22%3C/span%3E%0A%20%20%20%20@%3Cspan%20class%3D%22hljs-attr%22%3Eexchange%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onExchange%22%3C/span%3E%0A%20%20/%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ems-popup%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Econst%3C/span%3E%20coupon%20%3D%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eavailable%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ediscount%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Edenominations%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E150%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EoriginCondition%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ereason%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E150%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27%u4F18%u60E0%u5238%u540D%u79F0%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EstartAt%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1489104000%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3EendAt%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1514592000%3C/span%3E%0A%7D%3B%0A%0A%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EchosenCoupon%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E-1%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecoupons%3C/span%3E%3A%20%5Bcoupon%5D%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EdisabledCoupons%3C/span%3E%3A%20%5Bcoupon%5D%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onChange%28index%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.showList%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.chosenCoupon%20%3D%20index%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20onExchange%28code%29%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.coupons.push%28coupon%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3ECouponCell%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3E%u5355%u5143%u683C%u6807%u9898%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u4F18%u60E0%u5238%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echosen-coupon%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u9009%u4E2D%u4F18%u60E0%u5238%u7684%u7D22%u5F15%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E-1%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecoupons%3C/td%3E%0A%3Ctd%3E%u53EF%u7528%u4F18%u60E0%u5238%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eeditable%3C/td%3E%0A%3Ctd%3E%u80FD%u5426%u5207%u6362%u4F18%u60E0%u5238%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eborder%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5185%u8FB9%u6846%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E1.3.10%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecurrency%3C/td%3E%0A%3Ctd%3E%u8D27%u5E01%u7B26%u53F7%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%A5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ECouponList%20API%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3Cth%3E%u9ED8%u8BA4%u503C%3C/th%3E%0A%3Cth%3E%u7248%u672C%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u8F93%u5165%u7684%u5151%u6362%u7801%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echosen-coupon%3C/td%3E%0A%3Ctd%3E%u5F53%u524D%u9009%u4E2D%u4F18%u60E0%u5238%u7684%u7D22%u5F15%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E-1%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecoupons%3C/td%3E%0A%3Ctd%3E%u53EF%u7528%u4F18%u60E0%u5238%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisabled-coupons%3C/td%3E%0A%3Ctd%3E%u4E0D%u53EF%u7528%u4F18%u60E0%u5238%u5217%u8868%3C/td%3E%0A%3Ctd%3E%3Ccode%3EArray%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%5B%5D%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eexchange-button-text%3C/td%3E%0A%3Ctd%3E%u5151%u6362%u6309%u94AE%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u5151%u6362%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eexchange-button-loading%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5151%u6362%u6309%u94AE%u52A0%u8F7D%u52A8%u753B%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eexchange-button-disabled%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u7981%u7528%u5151%u6362%u6309%u94AE%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eexchange-min-length%3C/td%3E%0A%3Ctd%3E%u5151%u6362%u7801%u6700%u5C0F%u957F%u5EA6%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E1%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edisplayed-coupon-index%3C/td%3E%0A%3Ctd%3E%u6EDA%u52A8%u81F3%u7279%u5B9A%u4F18%u60E0%u5238%u4F4D%u7F6E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-close-button%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u663E%u793A%u5217%u8868%u5E95%u90E8%u6309%u94AE%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eclose-button-text%3C/td%3E%0A%3Ctd%3E%u5217%u8868%u5E95%u90E8%u6309%u94AE%u6587%u5B57%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u4E0D%u4F7F%u7528%u4F18%u60E0%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Einput-placeholder%3C/td%3E%0A%3Ctd%3E%u8F93%u5165%u6846%u6587%u5B57%u63D0%u793A%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%u8BF7%u8F93%u5165%u4F18%u60E0%u7801%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-exchange-bar%3C/td%3E%0A%3Ctd%3E%u662F%u5426%u5C55%u793A%u5151%u6362%u680F%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Etrue%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecurrency%3C/td%3E%0A%3Ctd%3E%u8D27%u5E01%u7B26%u53F7%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E%A5%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ECouponList%20Event%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3E%u4E8B%u4EF6%u540D%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u53C2%u6570%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3E%u4F18%u60E0%u5238%u5207%u6362%u56DE%u8C03%3C/td%3E%0A%3Ctd%3Eindex%2C%20%u9009%u4E2D%u4F18%u60E0%u5238%u7684%u7D22%u5F15%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eexchange%3C/td%3E%0A%3Ctd%3E%u5151%u6362%u4F18%u60E0%u5238%u56DE%u8C03%3C/td%3E%0A%3Ctd%3Ecode%2C%20%u5151%u6362%u7801%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3E%u6570%u636E%u683C%u5F0F%3C/h3%3E%0A%3Ch4%3E%u4F18%u60E0%u5238%u5B57%u6BB5%u8BF4%u660E%3C/h4%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ekey%3C/th%3E%0A%3Cth%3E%u8BF4%u660E%3C/th%3E%0A%3Cth%3E%u7C7B%u578B%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Eid%3C/td%3E%0A%3Ctd%3E%u4F18%u60E0%u5238%20id%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ename%3C/td%3E%0A%3Ctd%3E%u4F18%u60E0%u5238%u540D%u79F0%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ediscount%3C/td%3E%0A%3Ctd%3E%u6298%u6263%uFF080%u4E3A%u6EE1%u51CF%u5238%uFF0988%3D%26gt%3B8.8%u6298%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Edenominations%3C/td%3E%0A%3Ctd%3E%u9762%u503C%uFF080%u4E3A%u6298%u6263%u5238%uFF09%u5355%u4F4D%u5206%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EoriginCondition%3C/td%3E%0A%3Ctd%3E%u6EE1%u51CF%u6761%u4EF6%uFF080%u4E3A%u65E0%u95E8%u69DB%uFF0C%u6EE1XX%u5143%u53EF%u7528%uFF09%u5355%u4F4D%u5206%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EstartAt%3C/td%3E%0A%3Ctd%3E%u5361%u6709%u6548%u5F00%u59CB%u65F6%u95F4%20%28%u65F6%u95F4%u6233%2C%20%u5355%u4F4D%u79D2%29%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3EendAt%3C/td%3E%0A%3Ctd%3E%u5361%u5931%u6548%u65E5%u671F%20%28%u65F6%u95F4%u6233%2C%20%u5355%u4F4D%u79D2%29%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ereason%3C/td%3E%0A%3Ctd%3E%u4E0D%u53EF%u7528%u539F%u56E0%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3E%u6298%u6263%u5238%u4F18%u60E0%u91D1%u989D%uFF0C%u5355%u4F4D%u5206%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},d=t(0),s=Object(d.a)(u,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var E=this.$createElement;return(this._self._c||E)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);s.options.__file="zh-CN.md";C.default=s.exports}}]);