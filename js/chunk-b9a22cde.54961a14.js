(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9a22cde"],{2423:function(t,e,n){"use strict";n.d(e,"g",(function(){return a})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"i",(function(){return f})),n.d(e,"h",(function(){return d})),n.d(e,"j",(function(){return p}));var r=n("b775"),a=function(t,e){return Object(r["a"])({method:"get",url:"/app/v1_0/users/".concat(t,"/articles"),params:e})},i=function(t){return Object(r["a"])({method:"get",url:"/app/v1_1/articles",params:t})},c=function(t){return Object(r["a"])({method:"get",url:"/app/v1_0/articles/".concat(t)})},o=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})},u=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})},s=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})},l=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})},f=function(){return Object(r["a"])({method:"get",url:"/app/v1_0/user/articles"})},d=function(t){return Object(r["a"])({method:"get",url:"/app/v1_0/article/collections",params:t})},p=function(t){return Object(r["a"])({method:"get",url:"/app/v1_0/user/histories",params:t})}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("d039"),c=n("ad6d"),o="toString",u=RegExp.prototype,s=u[o],l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=o;(l||f)&&r(RegExp.prototype,o,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?c.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2722:function(t,e,n){},2909:function(t,e,n){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){return r(t)||a(t)||i()}n.d(e,"a",(function(){return c}))},"2fb9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-article"},[n("van-nav-bar",{attrs:{title:"我的收藏/","left-arrow":"",fixed:""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("van-tabs",{attrs:{color:"#3296fa"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{attrs:{title:"我的收藏"}},[n("collect-article")],1),n("van-tab",{attrs:{title:"我的历史"}},[n("history-article")],1),n("van-tab",{attrs:{title:"我的作品"}},[n("user-article")],1)],1)],1)},a=[],i=(n("c975"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,r){return n("van-cell",{key:r,attrs:{title:e.title},on:{click:function(n){t.$router.push({name:"article",params:{articleId:e.art_id.toString()}})}}})})),1)],1)}),c=[],o=n("2909"),u=(n("96cf"),n("1da1")),s=n("2423"),l={name:"UserArticle",components:{},props:{},data:function(){return{list:[],loading:!1,finished:!1,page:1,perPage:10}},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{onLoad:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["i"])({page:this.page,per_page:this.perPage});case 2:n=t.sent,r=n.data,a=r.data.results,(e=this.list).push.apply(e,Object(o["a"])(a)),this.loading=!1,a.length?this.page++:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},filter:{},computed:{},watch:{}},f=l,d=n("2877"),p=Object(d["a"])(f,i,c,!1,null,"82a7c040",null),h=p.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,r){return n("van-cell",{key:r,attrs:{title:e.title},on:{click:function(n){t.$router.push({name:"article",params:{articleId:e.art_id.toString()}})}}})})),1)],1)},m=[],v={name:"UserArticle",components:{},props:{},data:function(){return{list:[],loading:!1,finished:!1,page:1,perPage:10}},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{onLoad:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["h"])({page:this.page,per_page:this.perPage});case 2:n=t.sent,r=n.data,a=r.data.results,(e=this.list).push.apply(e,Object(o["a"])(a)),this.loading=!1,a.length?this.page++:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},filter:{},computed:{},watch:{}},b=v,y=Object(d["a"])(b,g,m,!1,null,"77acdfe0",null),j=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,r){return n("van-cell",{key:r,attrs:{title:e.title},on:{click:function(n){t.$router.push({name:"article",params:{articleId:e.art_id.toString()}})}}})})),1)],1)},_=[],w={name:"UserArticle",components:{},props:{},data:function(){return{list:[],loading:!1,finished:!1,page:1,perPage:10}},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{onLoad:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["j"])({page:this.page,per_page:this.perPage});case 2:n=t.sent,r=n.data,a=r.data.results,(e=this.list).push.apply(e,Object(o["a"])(a)),this.loading=!1,a.length?this.page++:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},filter:{},computed:{},watch:{}},x=w,k=Object(d["a"])(x,O,_,!1,null,"42f9c814",null),A=k.exports,E={beforeRouteLeave:function(t,e,n){"article"===t.name?this.$store.commit("addCachePage","UserArticles"):this.$store.commit("removeCachePage","UserArticles"),n()},name:"UserArticles",components:{UserArticle:h,CollectArticle:j,HistoryArticle:A},props:{type:{String:String}},data:function(){var t=["collect","history"].indexOf(this.type);return-1===t&&(t=2),{active:t,routes:["collect","history"]}},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{},filter:{},computed:{},watch:{}},R=E,S=(n("93eb"),Object(d["a"])(R,r,a,!1,null,"3d2c72bc",null));e["default"]=S.exports},"4df4":function(t,e,n){"use strict";var r=n("f8c2"),a=n("7b0b"),i=n("9bdd"),c=n("e95a"),o=n("50c4"),u=n("8418"),s=n("35a1");t.exports=function(t){var e,n,l,f,d,p=a(t),h="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,v=void 0!==m,b=0,y=s(p);if(v&&(m=r(m,g>2?arguments[2]:void 0,2)),void 0==y||h==Array&&c(y))for(e=o(p.length),n=new h(e);e>b;b++)u(n,b,v?m(p[b],b):p[b]);else for(f=y.call(p),d=f.next,n=new h;!(l=d.call(f)).done;b++)u(n,b,v?i(f,m,[l.value,b],!0):l.value);return n.length=b,n}},"93eb":function(t,e,n){"use strict";var r=n("2722"),a=n.n(r);a.a},a630:function(t,e,n){var r=n("23e7"),a=n("4df4"),i=n("1c7e"),c=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,i=Function.prototype,c=i.toString,o=/^\s*function ([^ (]*)/,u="name";!r||u in i||a(i,u,{configurable:!0,get:function(){try{return c.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-b9a22cde.54961a14.js.map