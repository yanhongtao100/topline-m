(function(e){function n(n){for(var t,c,u=n[0],o=n[1],d=n[2],b=0,f=[];b<u.length;b++)c=u[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);i&&i(n);while(f.length)f.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,n=0;n<s.length;n++){for(var a=s[n],t=!0,c=1;c<a.length;c++){var u=a[c];0!==r[u]&&(t=!1)}t&&(s.splice(n--,1),e=o(o.s=a[0]))}return e}var t={},c={app:0},r={app:0},s=[];function u(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2a17bb9e":"e50398dc","chunk-2d0a2e01":"34647013","chunk-2d0f0860":"2d9d4e68","chunk-2d217eac":"7bd1b53c","chunk-64a891c5":"a44c8797","chunk-2663bb6c":"c2da255d","chunk-30810354":"1c555f5b","chunk-3dee5d82":"e1176391","chunk-453868de":"5daa6db7","chunk-77f71027":"16ea237f","chunk-7a3b65d0":"32107213","chunk-7db90663":"37803ba4","chunk-b9a22cde":"54961a14"}[e]+".js"}function o(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var n=[],a={"chunk-2a17bb9e":1,"chunk-2663bb6c":1,"chunk-30810354":1,"chunk-3dee5d82":1,"chunk-453868de":1,"chunk-77f71027":1,"chunk-7a3b65d0":1,"chunk-7db90663":1,"chunk-b9a22cde":1};c[e]?n.push(c[e]):0!==c[e]&&a[e]&&n.push(c[e]=new Promise((function(n,a){for(var t="css/"+({}[e]||e)+"."+{"chunk-2a17bb9e":"bc9c55e3","chunk-2d0a2e01":"31d6cfe0","chunk-2d0f0860":"31d6cfe0","chunk-2d217eac":"31d6cfe0","chunk-64a891c5":"31d6cfe0","chunk-2663bb6c":"57060af3","chunk-30810354":"2f1be8d5","chunk-3dee5d82":"a34a3fbd","chunk-453868de":"4e0b24d9","chunk-77f71027":"6fcbdbf2","chunk-7a3b65d0":"53e1f4d2","chunk-7db90663":"5d736910","chunk-b9a22cde":"c2f4afa0"}[e]+".css",r=o.p+t,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var d=s[u],b=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(b===t||b===r))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],b=d.getAttribute("data-href");if(b===t||b===r)return n()}var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onload=n,i.onerror=function(n){var t=n&&n.target&&n.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=t,delete c[e],i.parentNode.removeChild(i),a(s)},i.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(i)})).then((function(){c[e]=0})));var t=r[e];if(0!==t)if(t)n.push(t[2]);else{var s=new Promise((function(n,a){t=r[e]=[n,a]}));n.push(t[2]=s);var d,b=document.createElement("script");b.charset="utf-8",b.timeout=120,o.nc&&b.setAttribute("nonce",o.nc),b.src=u(e);var f=new Error;d=function(n){b.onerror=b.onload=null,clearTimeout(i);var a=r[e];if(0!==a){if(a){var t=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+t+": "+c+")",f.name="ChunkLoadError",f.type=t,f.request=c,a[1](f)}r[e]=void 0}};var i=setTimeout((function(){d({type:"timeout",target:b})}),12e4);b.onerror=b.onload=d,document.head.appendChild(b)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,a){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(a,t,function(n){return e[n]}.bind(null,t));return a},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/",o.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],b=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var i=b;s.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},4360:function(e,n,a){"use strict";a("caad"),a("c975"),a("a434"),a("2532");var t=a("2b0e"),c=a("2f62"),r=a("5d2d"),s=a("04e1"),u=a.n(s);t["a"].use(c["a"]);var o="user";n["a"]=new c["a"].Store({state:{user:Object(r["a"])(o),cachePage:["TabBar"]},mutations:{setUser:function(e,n){e.user=n,n&&n.token&&(n.id=u()(n.token).user_id),Object(r["b"])(o,e.user)},addCachePage:function(e,n){e.cachePage.includes(n)||e.cachePage.push(n)},removeCachePage:function(e,n){var a=e.cachePage.indexOf(n);-1!==a&&e.cachePage.splice(a)}},actions:{},modules:{}})},4678:function(e,n,a){var t={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var n=r(e);return a(n)}function r(e){if(!a.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=r,e.exports=c,c.id="4678"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var t=a("2b0e"),c=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("keep-alive",{attrs:{include:e.$store.state.cachePage}},[a("router-view")],1)],1)},r=[],s={name:"App"},u=s,o=a("2877"),d=Object(o["a"])(u,c,r,!1,null,null,null),b=d.exports,f=a("a18c"),i=a("4360"),l=(a("5cfb"),a("66b9"),a("b650")),h=(a("c194"),a("7744")),j=(a("0653"),a("34e9")),p=(a("5246"),a("6b41")),m=(a("be7f"),a("565f")),k=(a("e7e5"),a("d399")),v=(a("414a"),a("7a82")),g=(a("a52c"),a("2ed4")),y=(a("537a"),a("ac28")),O=(a("4056"),a("44bf")),w=(a("3df5"),a("2830")),P=(a("0ec5"),a("21ab")),z=(a("c3a6"),a("ad06")),S=(a("e17f"),a("2241")),E=(a("2994"),a("2bdd")),_=(a("da3c"),a("0b33")),x=(a("bda7"),a("5e46")),T=(a("ab71"),a("58e6")),C=(a("8a58"),a("e41f")),N=(a("5852"),a("d961")),D=(a("ac1e"),a("543e")),A=(a("2cbd"),a("ab2c")),q=(a("d1cf"),a("ee83"));t["a"].use(l["a"]).use(h["a"]).use(j["a"]).use(p["a"]).use(m["a"]).use(k["a"]).use(v["a"]).use(g["a"]).use(y["a"]).use(O["a"]).use(w["a"]).use(P["a"]).use(z["a"]).use(S["a"]).use(E["a"]).use(_["a"]).use(x["a"]).use(T["a"]).use(C["a"]).use(N["a"]).use(D["a"]).use(A["a"]).use(q["a"]);a("a4b1"),a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b");var L=a("ade3"),I=a("7bb1"),M=a("4c93"),$=a("1cd5");function B(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function J(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?B(Object(a),!0).forEach((function(n){Object(L["a"])(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}t["a"].component("ValidationProvider",I["b"]),t["a"].component("ValidationObserver",I["a"]),Object.keys(M).forEach((function(e){Object(I["c"])(e,J({},M[e],{message:$["a"][e]}))})),Object(I["c"])("mobile",{validate:function(e){return/^1(3|6|5|7|8|9)\d{9}$/.test(e)},message:"手机号格式错误"}),Object(I["c"])("code",{validate:function(e){return/^\d{6}$/.test(e)},message:"验证码格式错误"});var U=a("c1df"),F=a.n(U);F.a.locale("zh-cn"),t["a"].filter("relativeTime",(function(e){return F()(e).startOf("hour").fromNow()})),t["a"].config.productionTip=!1,new t["a"]({router:f["a"],store:i["a"],render:function(e){return e(b)}}).$mount("#app")},"5d2d":function(e,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"b",(function(){return r}));var t=a("53ca"),c=function(e){var n=window.localStorage.getItem(e);try{return JSON.parse(n)}catch(a){return n}},r=function(e,n){var a="object"===Object(t["a"])(n)?JSON.stringify(n):n;window.localStorage.setItem(e,a)}},a18c:function(e,n,a){"use strict";a("d3b7");var t=a("2b0e"),c=a("8c4f");t["a"].use(c["a"]);var r=[{path:"/login",name:"tab-bar",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-30810354")]).then(a.bind(null,"9ed6"))}},{path:"/",name:"tab-bar",component:function(){return a.e("chunk-2d0f0860").then(a.bind(null,"9d76"))},children:[{path:"",name:"home",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-7a3b65d0")]).then(a.bind(null,"7abe"))}},{path:"qa",name:"qa",component:function(){return a.e("chunk-2d217eac").then(a.bind(null,"c988"))}},{path:"video",name:"video",component:function(){return a.e("chunk-2d0a2e01").then(a.bind(null,"007b"))}},{path:"my",name:"my",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-2663bb6c")]).then(a.bind(null,"9639"))}}]},{path:"/user/profile",name:"user-profile",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-77f71027")]).then(a.bind(null,"524b"))},props:!0},{path:"/user/chat",name:"user-chat",component:function(){return a.e("chunk-2a17bb9e").then(a.bind(null,"9d81"))},props:!0},{path:"/user/:userId",name:"user",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-453868de")]).then(a.bind(null,"e382"))}},{path:"/search",name:"serach",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-7db90663")]).then(a.bind(null,"efe3"))}},{path:"/article/:articleId",name:"article",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-3dee5d82")]).then(a.bind(null,"230c"))},props:!0},{path:"/my-article/:type?",name:"my-article",component:function(){return Promise.all([a.e("chunk-64a891c5"),a.e("chunk-b9a22cde")]).then(a.bind(null,"2fb9"))},props:!0}],s=new c["a"]({routes:r});n["a"]=s},a4b1:function(e,n,a){}});
//# sourceMappingURL=app.7020db2e.js.map