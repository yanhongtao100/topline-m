(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a3b65d0"],{2423:function(t,n,e){"use strict";e.d(n,"g",(function(){return a})),e.d(n,"f",(function(){return i})),e.d(n,"e",(function(){return c})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return u})),e.d(n,"d",(function(){return l})),e.d(n,"i",(function(){return d})),e.d(n,"h",(function(){return f})),e.d(n,"j",(function(){return h}));var r=e("b775"),a=function(t,n){return Object(r["a"])({method:"get",url:"/app/v1_0/users/".concat(t,"/articles"),params:n})},i=function(t){return Object(r["a"])({method:"get",url:"/app/v1_1/articles",params:t})},c=function(t){return Object(r["a"])({method:"get",url:"/app/v1_0/articles/".concat(t)})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},o=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},u=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},l=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})},d=function(){return Object(r["a"])({method:"get",url:"/app/v1_0/user/articles"})},f=function(t){return Object(r["a"])({method:"get",url:"/app/v1_0/article/collections",params:t})},h=function(t){return Object(r["a"])({method:"get",url:"/app/v1_0/user/histories",params:t})}},"25f0":function(t,n,e){"use strict";var r=e("6eeb"),a=e("825a"),i=e("d039"),c=e("ad6d"),s="toString",o=RegExp.prototype,u=o[s],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&r(RegExp.prototype,s,(function(){var t=a(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in o)?c.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},2909:function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("25f0"),e("3ca3"),e("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return r(t)||a(t)||i()}e.d(n,"a",(function(){return c}))},"3c32":function(t,n,e){"use strict";var r=e("6852"),a=e.n(r);a.a},"4df4":function(t,n,e){"use strict";var r=e("f8c2"),a=e("7b0b"),i=e("9bdd"),c=e("e95a"),s=e("50c4"),o=e("8418"),u=e("35a1");t.exports=function(t){var n,e,l,d,f,h=a(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,b=void 0!==m,g=0,w=u(h);if(b&&(m=r(m,v>2?arguments[2]:void 0,2)),void 0==w||p==Array&&c(w))for(n=s(h.length),e=new p(n);n>g;g++)o(e,g,b?m(h[g],g):h[g]);else for(d=w.call(h),f=d.next,e=new p;!(l=f.call(d)).done;g++)o(e,g,b?i(d,m,[l.value,g],!0):l.value);return e.length=g,e}},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var r=e("1d80"),a=e("5899"),i="["+a+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(s,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},6120:function(t,n,e){},6852:function(t,n,e){},"6d0c":function(t,n,e){"use strict";var r=e("6120"),a=e.n(r);a.a},7156:function(t,n,e){var r=e("861d"),a=e("d2bb");t.exports=function(t,n,e){var i,c;return a&&"function"==typeof(i=n.constructor)&&i!==e&&r(c=i.prototype)&&c!==e.prototype&&a(t,c),t}},"7abe":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home-container"},[e("van-nav-bar",{attrs:{title:"主页",fixed:""}}),e("van-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},[e("van-icon",{staticClass:"wap-nav",attrs:{slot:"nav-right",name:"wap-nav"},on:{click:function(n){t.isChannelEditShow=!0}},slot:"nav-right"}),t._l(t.userChannels,(function(t){return e("van-tab",{key:t.id,attrs:{title:t.name}},[e("article-list",{attrs:{channel:t}})],1)}))],2),e("van-popup",{style:{height:"100%"},attrs:{round:"",position:"bottom",closeable:"","close-icon-position":"top-left"},model:{value:t.isChannelEditShow,callback:function(n){t.isChannelEditShow=n},expression:"isChannelEditShow"}},[e("channel-edit",{attrs:{"user-channels":t.userChannels,active:t.active},on:{switch:t.onChannelSwitch}})],1)],1)},a=[],i=(e("96cf"),e("1da1")),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"channel-edit"},[e("van-cell",{attrs:{title:"我的频道",border:!1}},[e("van-button",{attrs:{type:"danger",round:"",plain:"",size:"mini"},on:{click:function(n){t.isEditShow=!t.isEditShow}}},[t._v(" "+t._s(t.isEditShow?"完成":"编辑")+" ")])],1),e("van-grid",{attrs:{gutter:10}},t._l(t.userChannels,(function(n,r){return e("van-grid-item",{key:n.id,on:{click:function(n){return t.onUserChannelClick(r)}}},[e("span",{staticClass:"text",class:{active:r===t.active},attrs:{slot:"text"},slot:"text"},[t._v(t._s(n.name))]),t.isEditShow&&0!==r?e("van-icon",{attrs:{slot:"icon",name:"close"},slot:"icon"}):t._e()],1)})),1),e("van-cell",{attrs:{title:"推荐频道",border:!1}}),e("van-grid",{attrs:{gutter:10}},t._l(t.remainingChannels,(function(n){return e("van-grid-item",{key:n.id,attrs:{text:n.name},on:{click:function(e){return t.onAdd(n)}}})})),1)],1)},s=[],o=(e("7db0"),e("a434"),e("a9e3"),e("159b"),e("b775")),u=function(){return Object(o["a"])({method:"get",url:"/app/v1_0/user/channels"})},l=function(){return Object(o["a"])({method:"get",url:"/app/v1_0/channels"})},d=e("5d2d"),f={name:"ChannelEdit",components:{},props:{userChannels:{type:Array,required:!0},active:{type:Number,required:!0}},data:function(){return{allChannels:[],isEditShow:!1}},computed:{remainingChannels:function(){var t=[],n=this.allChannels,e=this.userChannels;return n.forEach((function(n){e.find((function(t){return t.id===n.id}))||t.push(n)})),t}},watch:{userChannels:function(t){Object(d["b"])("user-channels",t)}},created:function(){this.loadAllChannels()},methods:{loadAllChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:n=t.sent,e=n.data,this.allChannels=e.data.channels;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onAdd:function(t){this.userChannels.push(t)},onUserChannelClick:function(t){this.isEditShow&&0!==t?this.userChannels.splice(t,1):this.$emit("switch",t)}}},h=f,p=(e("3c32"),e("2877")),v=Object(p["a"])(h,c,s,!1,null,"e15b120e",null),m=v.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"article list"},[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(n,r){return e("van-cell",{key:r,attrs:{title:n.title},on:{click:function(e){return t.$router.push("/article/"+n.art_id)}}})})),1)],1)],1)},g=[],w=e("2909"),C=e("2423"),E={name:"ArticleList",props:{channel:{type:Object,required:!0}},data:function(){return{list:[],loading:!1,finished:!1,timestamp:null,isLoading:!1}},methods:{onLoad:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(C["f"])({channel_id:this.channel.id,timestamp:this.timestamp||Date.now(),with_top:0});case 2:e=t.sent,r=e.data,a=r.data.results,(n=this.list).push.apply(n,Object(w["a"])(a)),this.loading=!1,a.length?this.timestamp=r.data.pre_timestamp:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onRefresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(C["f"])({channel_id:this.channel.id,timestamp:Date.now(),with_top:1});case 2:e=t.sent,r=e.data,a=r.data.results,(n=this.list).unshift.apply(n,Object(w["a"])(a)),this.$toast("更新了".concat(a.length,"条数据")),this.isLoading=!1;case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},_=E,y=Object(p["a"])(_,b,g,!1,null,null,null),x=y.exports,O={name:"Home",data:function(){return{active:1,userChannels:[],isChannelEditShow:!1}},components:{ArticleList:x,ChannelEdit:m},methods:{loadUserChannels:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var n,e,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=[],e=Object(d["a"])("user-channels"),!e){t.next=6;break}n=e,t.next=11;break;case 6:return t.next=8,u();case 8:r=t.sent,a=r.data,n=a.data.channels;case 11:this.userChannels=n;case 12:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onChannelSwitch:function(t){this.isChannelEditShow=!1,this.active=t}},created:function(){this.loadUserChannels()}},j=O,A=(e("6d0c"),Object(p["a"])(j,r,a,!1,null,"2b9007a2",null));n["default"]=A.exports},"7db0":function(t,n,e){"use strict";var r=e("23e7"),a=e("b727").find,i=e("44d2"),c="find",s=!0;c in[]&&Array(1)[c]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i(c)},a630:function(t,n,e){var r=e("23e7"),a=e("4df4"),i=e("1c7e"),c=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:a})},a9e3:function(t,n,e){"use strict";var r=e("83ab"),a=e("da84"),i=e("94ca"),c=e("6eeb"),s=e("5135"),o=e("c6b6"),u=e("7156"),l=e("c04e"),d=e("d039"),f=e("7c73"),h=e("241c").f,p=e("06cf").f,v=e("9bf2").f,m=e("58a8").trim,b="Number",g=a[b],w=g.prototype,C=o(f(w))==b,E=function(t){var n,e,r,a,i,c,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=m(u),n=u.charCodeAt(0),43===n||45===n){if(e=u.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(u.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+u}for(i=u.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>a)return NaN;return parseInt(i,r)}return+u};if(i(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var _,y=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof y&&(C?d((function(){w.valueOf.call(e)})):o(e)!=b)?u(new g(E(n)),e,y):E(n)},x=r?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;x.length>O;O++)s(g,_=x[O])&&!s(y,_)&&v(y,_,p(g,_));y.prototype=w,w.constructor=y,c(a,b,y)}},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}}}]);
//# sourceMappingURL=chunk-7a3b65d0.32107213.js.map