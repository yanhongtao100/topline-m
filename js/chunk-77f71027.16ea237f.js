(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77f71027"],{"0d3b":function(t,e,i){var n=i("d039"),r=i("b622"),a=i("c430"),s=r("iterator");t.exports=!n((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,i="";return t.pathname="c%20d",e.forEach((function(t,n){e["delete"]("b"),i+=n+t})),a&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[s]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==i||"x"!==new URL("http://x",void 0).host}))},"2b3d":function(t,e,i){"use strict";i("3ca3");var n,r=i("23e7"),a=i("83ab"),s=i("0d3b"),o=i("da84"),c=i("37e8"),u=i("6eeb"),h=i("19aa"),l=i("5135"),f=i("60da"),p=i("4df4"),d=i("6547").codeAt,v=i("c98e"),m=i("d44e"),g=i("9861"),w=i("69f3"),b=o.URL,y=g.URLSearchParams,k=g.getState,S=w.set,x=w.getterFor("URL"),R=Math.floor,O=Math.pow,U="Invalid authority",j="Invalid scheme",C="Invalid host",E="Invalid port",L=/[A-Za-z]/,A=/[\d+\-.A-Za-z]/,T=/\d/,$=/^(0x|0X)/,B=/^[0-7]+$/,P=/^\d+$/,I=/^[\dA-Fa-f]+$/,M=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,z=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,D=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,q=/[\u0009\u000A\u000D]/g,Y=function(t,e){var i,n,r;if("["==e.charAt(0)){if("]"!=e.charAt(e.length-1))return C;if(i=X(e.slice(1,-1)),!i)return C;t.host=i}else if(Q(t)){if(e=v(e),M.test(e))return C;if(i=N(e),null===i)return C;t.host=i}else{if(z.test(e))return C;for(i="",n=p(e),r=0;r<n.length;r++)i+=J(n[r],W);t.host=i}},N=function(t){var e,i,n,r,a,s,o,c=t.split(".");if(c.length&&""==c[c.length-1]&&c.pop(),e=c.length,e>4)return t;for(i=[],n=0;n<e;n++){if(r=c[n],""==r)return t;if(a=10,r.length>1&&"0"==r.charAt(0)&&(a=$.test(r)?16:8,r=r.slice(8==a?1:2)),""===r)s=0;else{if(!(10==a?P:8==a?B:I).test(r))return t;s=parseInt(r,a)}i.push(s)}for(n=0;n<e;n++)if(s=i[n],n==e-1){if(s>=O(256,5-e))return null}else if(s>255)return null;for(o=i.pop(),n=0;n<i.length;n++)o+=i[n]*O(256,3-n);return o},X=function(t){var e,i,n,r,a,s,o,c=[0,0,0,0,0,0,0,0],u=0,h=null,l=0,f=function(){return t.charAt(l)};if(":"==f()){if(":"!=t.charAt(1))return;l+=2,u++,h=u}while(f()){if(8==u)return;if(":"!=f()){e=i=0;while(i<4&&I.test(f()))e=16*e+parseInt(f(),16),l++,i++;if("."==f()){if(0==i)return;if(l-=i,u>6)return;n=0;while(f()){if(r=null,n>0){if(!("."==f()&&n<4))return;l++}if(!T.test(f()))return;while(T.test(f())){if(a=parseInt(f(),10),null===r)r=a;else{if(0==r)return;r=10*r+a}if(r>255)return;l++}c[u]=256*c[u]+r,n++,2!=n&&4!=n||u++}if(4!=n)return;break}if(":"==f()){if(l++,!f())return}else if(f())return;c[u++]=e}else{if(null!==h)return;l++,u++,h=u}}if(null!==h){s=u-h,u=7;while(0!=u&&s>0)o=c[u],c[u--]=c[h+s-1],c[h+--s]=o}else if(8!=u)return;return c},F=function(t){for(var e=null,i=1,n=null,r=0,a=0;a<8;a++)0!==t[a]?(r>i&&(e=n,i=r),n=null,r=0):(null===n&&(n=a),++r);return r>i&&(e=n,i=r),e},_=function(t){var e,i,n,r;if("number"==typeof t){for(e=[],i=0;i<4;i++)e.unshift(t%256),t=R(t/256);return e.join(".")}if("object"==typeof t){for(e="",n=F(t),i=0;i<8;i++)r&&0===t[i]||(r&&(r=!1),n===i?(e+=i?":":"::",r=!0):(e+=t[i].toString(16),i<7&&(e+=":")));return"["+e+"]"}return t},W={},Z=f({},W,{" ":1,'"':1,"<":1,">":1,"`":1}),G=f({},Z,{"#":1,"?":1,"{":1,"}":1}),H=f({},G,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),J=function(t,e){var i=d(t,0);return i>32&&i<127&&!l(e,t)?t:encodeURIComponent(t)},K={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Q=function(t){return l(K,t.scheme)},V=function(t){return""!=t.username||""!=t.password},tt=function(t){return!t.host||t.cannotBeABaseURL||"file"==t.scheme},et=function(t,e){var i;return 2==t.length&&L.test(t.charAt(0))&&(":"==(i=t.charAt(1))||!e&&"|"==i)},it=function(t){var e;return t.length>1&&et(t.slice(0,2))&&(2==t.length||"/"===(e=t.charAt(2))||"\\"===e||"?"===e||"#"===e)},nt=function(t){var e=t.path,i=e.length;!i||"file"==t.scheme&&1==i&&et(e[0],!0)||e.pop()},rt=function(t){return"."===t||"%2e"===t.toLowerCase()},at=function(t){return t=t.toLowerCase(),".."===t||"%2e."===t||".%2e"===t||"%2e%2e"===t},st={},ot={},ct={},ut={},ht={},lt={},ft={},pt={},dt={},vt={},mt={},gt={},wt={},bt={},yt={},kt={},St={},xt={},Rt={},Ot={},Ut={},jt=function(t,e,i,r){var a,s,o,c,u=i||st,h=0,f="",d=!1,v=!1,m=!1;i||(t.scheme="",t.username="",t.password="",t.host=null,t.port=null,t.path=[],t.query=null,t.fragment=null,t.cannotBeABaseURL=!1,e=e.replace(D,"")),e=e.replace(q,""),a=p(e);while(h<=a.length){switch(s=a[h],u){case st:if(!s||!L.test(s)){if(i)return j;u=ct;continue}f+=s.toLowerCase(),u=ot;break;case ot:if(s&&(A.test(s)||"+"==s||"-"==s||"."==s))f+=s.toLowerCase();else{if(":"!=s){if(i)return j;f="",u=ct,h=0;continue}if(i&&(Q(t)!=l(K,f)||"file"==f&&(V(t)||null!==t.port)||"file"==t.scheme&&!t.host))return;if(t.scheme=f,i)return void(Q(t)&&K[t.scheme]==t.port&&(t.port=null));f="","file"==t.scheme?u=bt:Q(t)&&r&&r.scheme==t.scheme?u=ut:Q(t)?u=pt:"/"==a[h+1]?(u=ht,h++):(t.cannotBeABaseURL=!0,t.path.push(""),u=Rt)}break;case ct:if(!r||r.cannotBeABaseURL&&"#"!=s)return j;if(r.cannotBeABaseURL&&"#"==s){t.scheme=r.scheme,t.path=r.path.slice(),t.query=r.query,t.fragment="",t.cannotBeABaseURL=!0,u=Ut;break}u="file"==r.scheme?bt:lt;continue;case ut:if("/"!=s||"/"!=a[h+1]){u=lt;continue}u=dt,h++;break;case ht:if("/"==s){u=vt;break}u=xt;continue;case lt:if(t.scheme=r.scheme,s==n)t.username=r.username,t.password=r.password,t.host=r.host,t.port=r.port,t.path=r.path.slice(),t.query=r.query;else if("/"==s||"\\"==s&&Q(t))u=ft;else if("?"==s)t.username=r.username,t.password=r.password,t.host=r.host,t.port=r.port,t.path=r.path.slice(),t.query="",u=Ot;else{if("#"!=s){t.username=r.username,t.password=r.password,t.host=r.host,t.port=r.port,t.path=r.path.slice(),t.path.pop(),u=xt;continue}t.username=r.username,t.password=r.password,t.host=r.host,t.port=r.port,t.path=r.path.slice(),t.query=r.query,t.fragment="",u=Ut}break;case ft:if(!Q(t)||"/"!=s&&"\\"!=s){if("/"!=s){t.username=r.username,t.password=r.password,t.host=r.host,t.port=r.port,u=xt;continue}u=vt}else u=dt;break;case pt:if(u=dt,"/"!=s||"/"!=f.charAt(h+1))continue;h++;break;case dt:if("/"!=s&&"\\"!=s){u=vt;continue}break;case vt:if("@"==s){d&&(f="%40"+f),d=!0,o=p(f);for(var g=0;g<o.length;g++){var w=o[g];if(":"!=w||m){var b=J(w,H);m?t.password+=b:t.username+=b}else m=!0}f=""}else if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&Q(t)){if(d&&""==f)return U;h-=p(f).length+1,f="",u=mt}else f+=s;break;case mt:case gt:if(i&&"file"==t.scheme){u=kt;continue}if(":"!=s||v){if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&Q(t)){if(Q(t)&&""==f)return C;if(i&&""==f&&(V(t)||null!==t.port))return;if(c=Y(t,f),c)return c;if(f="",u=St,i)return;continue}"["==s?v=!0:"]"==s&&(v=!1),f+=s}else{if(""==f)return C;if(c=Y(t,f),c)return c;if(f="",u=wt,i==gt)return}break;case wt:if(!T.test(s)){if(s==n||"/"==s||"?"==s||"#"==s||"\\"==s&&Q(t)||i){if(""!=f){var y=parseInt(f,10);if(y>65535)return E;t.port=Q(t)&&y===K[t.scheme]?null:y,f=""}if(i)return;u=St;continue}return E}f+=s;break;case bt:if(t.scheme="file","/"==s||"\\"==s)u=yt;else{if(!r||"file"!=r.scheme){u=xt;continue}if(s==n)t.host=r.host,t.path=r.path.slice(),t.query=r.query;else if("?"==s)t.host=r.host,t.path=r.path.slice(),t.query="",u=Ot;else{if("#"!=s){it(a.slice(h).join(""))||(t.host=r.host,t.path=r.path.slice(),nt(t)),u=xt;continue}t.host=r.host,t.path=r.path.slice(),t.query=r.query,t.fragment="",u=Ut}}break;case yt:if("/"==s||"\\"==s){u=kt;break}r&&"file"==r.scheme&&!it(a.slice(h).join(""))&&(et(r.path[0],!0)?t.path.push(r.path[0]):t.host=r.host),u=xt;continue;case kt:if(s==n||"/"==s||"\\"==s||"?"==s||"#"==s){if(!i&&et(f))u=xt;else if(""==f){if(t.host="",i)return;u=St}else{if(c=Y(t,f),c)return c;if("localhost"==t.host&&(t.host=""),i)return;f="",u=St}continue}f+=s;break;case St:if(Q(t)){if(u=xt,"/"!=s&&"\\"!=s)continue}else if(i||"?"!=s)if(i||"#"!=s){if(s!=n&&(u=xt,"/"!=s))continue}else t.fragment="",u=Ut;else t.query="",u=Ot;break;case xt:if(s==n||"/"==s||"\\"==s&&Q(t)||!i&&("?"==s||"#"==s)){if(at(f)?(nt(t),"/"==s||"\\"==s&&Q(t)||t.path.push("")):rt(f)?"/"==s||"\\"==s&&Q(t)||t.path.push(""):("file"==t.scheme&&!t.path.length&&et(f)&&(t.host&&(t.host=""),f=f.charAt(0)+":"),t.path.push(f)),f="","file"==t.scheme&&(s==n||"?"==s||"#"==s))while(t.path.length>1&&""===t.path[0])t.path.shift();"?"==s?(t.query="",u=Ot):"#"==s&&(t.fragment="",u=Ut)}else f+=J(s,G);break;case Rt:"?"==s?(t.query="",u=Ot):"#"==s?(t.fragment="",u=Ut):s!=n&&(t.path[0]+=J(s,W));break;case Ot:i||"#"!=s?s!=n&&("'"==s&&Q(t)?t.query+="%27":t.query+="#"==s?"%23":J(s,W)):(t.fragment="",u=Ut);break;case Ut:s!=n&&(t.fragment+=J(s,Z));break}h++}},Ct=function(t){var e,i,n=h(this,Ct,"URL"),r=arguments.length>1?arguments[1]:void 0,s=String(t),o=S(n,{type:"URL"});if(void 0!==r)if(r instanceof Ct)e=x(r);else if(i=jt(e={},String(r)),i)throw TypeError(i);if(i=jt(o,s,null,e),i)throw TypeError(i);var c=o.searchParams=new y,u=k(c);u.updateSearchParams(o.query),u.updateURL=function(){o.query=String(c)||null},a||(n.href=Lt.call(n),n.origin=At.call(n),n.protocol=Tt.call(n),n.username=$t.call(n),n.password=Bt.call(n),n.host=Pt.call(n),n.hostname=It.call(n),n.port=Mt.call(n),n.pathname=zt.call(n),n.search=Dt.call(n),n.searchParams=qt.call(n),n.hash=Yt.call(n))},Et=Ct.prototype,Lt=function(){var t=x(this),e=t.scheme,i=t.username,n=t.password,r=t.host,a=t.port,s=t.path,o=t.query,c=t.fragment,u=e+":";return null!==r?(u+="//",V(t)&&(u+=i+(n?":"+n:"")+"@"),u+=_(r),null!==a&&(u+=":"+a)):"file"==e&&(u+="//"),u+=t.cannotBeABaseURL?s[0]:s.length?"/"+s.join("/"):"",null!==o&&(u+="?"+o),null!==c&&(u+="#"+c),u},At=function(){var t=x(this),e=t.scheme,i=t.port;if("blob"==e)try{return new URL(e.path[0]).origin}catch(n){return"null"}return"file"!=e&&Q(t)?e+"://"+_(t.host)+(null!==i?":"+i:""):"null"},Tt=function(){return x(this).scheme+":"},$t=function(){return x(this).username},Bt=function(){return x(this).password},Pt=function(){var t=x(this),e=t.host,i=t.port;return null===e?"":null===i?_(e):_(e)+":"+i},It=function(){var t=x(this).host;return null===t?"":_(t)},Mt=function(){var t=x(this).port;return null===t?"":String(t)},zt=function(){var t=x(this),e=t.path;return t.cannotBeABaseURL?e[0]:e.length?"/"+e.join("/"):""},Dt=function(){var t=x(this).query;return t?"?"+t:""},qt=function(){return x(this).searchParams},Yt=function(){var t=x(this).fragment;return t?"#"+t:""},Nt=function(t,e){return{get:t,set:e,configurable:!0,enumerable:!0}};if(a&&c(Et,{href:Nt(Lt,(function(t){var e=x(this),i=String(t),n=jt(e,i);if(n)throw TypeError(n);k(e.searchParams).updateSearchParams(e.query)})),origin:Nt(At),protocol:Nt(Tt,(function(t){var e=x(this);jt(e,String(t)+":",st)})),username:Nt($t,(function(t){var e=x(this),i=p(String(t));if(!tt(e)){e.username="";for(var n=0;n<i.length;n++)e.username+=J(i[n],H)}})),password:Nt(Bt,(function(t){var e=x(this),i=p(String(t));if(!tt(e)){e.password="";for(var n=0;n<i.length;n++)e.password+=J(i[n],H)}})),host:Nt(Pt,(function(t){var e=x(this);e.cannotBeABaseURL||jt(e,String(t),mt)})),hostname:Nt(It,(function(t){var e=x(this);e.cannotBeABaseURL||jt(e,String(t),gt)})),port:Nt(Mt,(function(t){var e=x(this);tt(e)||(t=String(t),""==t?e.port=null:jt(e,t,wt))})),pathname:Nt(zt,(function(t){var e=x(this);e.cannotBeABaseURL||(e.path=[],jt(e,t+"",St))})),search:Nt(Dt,(function(t){var e=x(this);t=String(t),""==t?e.query=null:("?"==t.charAt(0)&&(t=t.slice(1)),e.query="",jt(e,t,Ot)),k(e.searchParams).updateSearchParams(e.query)})),searchParams:Nt(qt),hash:Nt(Yt,(function(t){var e=x(this);t=String(t),""!=t?("#"==t.charAt(0)&&(t=t.slice(1)),e.fragment="",jt(e,t,Ut)):e.fragment=null}))}),u(Et,"toJSON",(function(){return Lt.call(this)}),{enumerable:!0}),u(Et,"toString",(function(){return Lt.call(this)}),{enumerable:!0}),b){var Xt=b.createObjectURL,Ft=b.revokeObjectURL;Xt&&u(Ct,"createObjectURL",(function(t){return Xt.apply(b,arguments)})),Ft&&u(Ct,"revokeObjectURL",(function(t){return Ft.apply(b,arguments)}))}m(Ct,"URL"),r({global:!0,forced:!s,sham:!a},{URL:Ct})},"4df4":function(t,e,i){"use strict";var n=i("f8c2"),r=i("7b0b"),a=i("9bdd"),s=i("e95a"),o=i("50c4"),c=i("8418"),u=i("35a1");t.exports=function(t){var e,i,h,l,f,p=r(t),d="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,g=void 0!==m,w=0,b=u(p);if(g&&(m=n(m,v>2?arguments[2]:void 0,2)),void 0==b||d==Array&&s(b))for(e=o(p.length),i=new d(e);e>w;w++)c(i,w,g?m(p[w],w):p[w]);else for(l=b.call(p),f=l.next,i=new d;!(h=f.call(l)).done;w++)c(i,w,g?a(l,m,[h.value,w],!0):h.value);return i.length=w,i}},"504b":function(t,e,i){},"524b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user-profile"},[i("van-nav-bar",{attrs:{title:"编辑资料","left-arrow":""},on:{"click-left":function(e){return t.$router.back()}}}),i("van-cell",{attrs:{"is-link":"",title:"头像"},on:{click:t.onSelectFile}},[i("van-image",{staticClass:"avatar",attrs:{src:t.user.photo,round:""}})],1),i("input",{ref:"file",attrs:{type:"file",hidden:"",name:"",id:""},on:{change:t.onFileChange}}),i("van-cell",{attrs:{"is-link":"",title:"昵称",value:t.user.name},on:{click:function(e){t.isEditNameShow=!0}}}),i("van-cell",{attrs:{"is-link":"",title:"介绍",value:""}}),i("van-cell",{attrs:{"is-link":"",title:"性别",value:0==t.user.gender?"男":"女"},on:{click:function(e){t.isEditGenderShow=!0}}}),i("van-cell",{attrs:{"is-link":"",title:"生日",value:t.user.birthday},on:{click:function(e){t.isEditBirthdayShow=!0}}}),i("van-popup",{attrs:{position:"bottom"},model:{value:t.isEditNameShow,callback:function(e){t.isEditNameShow=e},expression:"isEditNameShow"}},[i("van-nav-bar",{attrs:{title:"编辑昵称","left-text":"取消","right-text":"确定"},on:{"click-left":function(e){t.isEditNameShow=!1},"click-right":t.onUpDateName}}),i("div",[i("van-field",{attrs:{rows:"2",autosize:"",label:"昵称",type:"textarea",maxlength:"20",placeholder:"请输入昵称","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),i("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{cancel:function(e){t.isEditNameShow=!1},select:t.onGenderSelect},model:{value:t.isEditGenderShow,callback:function(e){t.isEditGenderShow=e},expression:"isEditGenderShow"}}),i("van-popup",{attrs:{position:"bottom"},model:{value:t.isEditBirthdayShow,callback:function(e){t.isEditBirthdayShow=e},expression:"isEditBirthdayShow"}},[i("van-datetime-picker",{attrs:{value:t.currentDate,type:"datetime","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:function(e){t.isEditBirthdayShow=!1},confirm:t.onUpdateBirthday}})],1)],1)},r=[],a=(i("b0c0"),i("d3b7"),i("3ca3"),i("ddb0"),i("2b3d"),i("ade3")),s=(i("68ef"),i("a71a"),i("9d70"),i("3743"),i("09fe"),i("4d75"),i("e3b3"),i("8270"),i("786d"),i("504b"),i("c31d")),o=i("2b0e"),c=i("d282"),u=i("482d"),h=i("1325"),l=i("6605"),f=i("3875"),p=i("44bf"),d=i("543e"),v=i("5fbe"),m=i("4598"),g=Object(c["a"])("swipe"),w=g[0],b=g[1],y=w({mixins:[f["a"],Object(v["a"])((function(t,e){t(window,"resize",this.resize,!0),e?this.initialize():this.clear()}))],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,e=this.vertical?"height":"width",i=this.vertical?"width":"height";return t={},t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var e=this.$el.getBoundingClientRect();this.computedWidth=this.width||e.width,this.computedHeight=this.height||e.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach((function(t){t.offset=0})),this.autoPlay()},resize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(h["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count;return t?this.loop?Object(u["a"])(e+t,-1,i):Object(u["a"])(e+t,0,i-1):e},getTargetOffset:function(t,e){var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var n=Math.round(e-i);return this.loop||(n=Object(u["a"])(n,this.minOffset,0)),n},move:function(t){var e=t.pace,i=void 0===e?0:e,n=t.offset,r=void 0===n?0:n,a=t.emitChange,s=this.loop,o=this.count,c=this.active,u=this.swipes,h=this.trackSize,l=this.minOffset;if(!(o<=1)){var f=this.getTargetActive(i),p=this.getTargetOffset(f,r);if(s){if(u[0]){var d=p<l;u[0].offset=d?h:0}if(u[o-1]){var v=p>0;u[o-1].offset=v?-h:0}}this.active=f,this.offset=p,a&&f!==c&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(m["b"])((function(){var n;n=i.loop&&t===i.count?0===i.active?0:t:t%i.count,i.move({pace:n-i.active,emitChange:!0}),e.immediate?Object(m["b"])((function(){i.swiping=!1})):i.swiping=!1}))},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(m["b"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()}))}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,n=this.activeIndicator,r=this.slots("indicator");return r||(this.showIndicators&&i>1?e("div",{class:b("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,r){return e("i",{class:b("indicator",{active:r===n}),style:r===n?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:b()},[t("div",{ref:"track",style:this.trackStyle,class:b("track")},[this.slots()]),this.genIndicator()])}}),k=Object(c["a"])("swipe-item"),S=k[0],x=k[1],R=S({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],e=this.$parent,i=e.vertical,n=e.computedWidth,r=e.computedHeight,a={width:n+"px",height:i?r+"px":"100%",transform:"translate"+(i?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:x(),style:a,on:Object(s["a"])({},this.$listeners)},[this.slots()])}}),O=Object(c["a"])("image-preview"),U=O[0],j=O[1];function C(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var E,L=U({mixins:[Object(l["a"])({skipToggleEvent:!0}),f["a"]],props:{className:null,lazyLoad:Boolean,asyncClose:Boolean,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},swipeDuration:{type:Number,default:500},overlay:{type:Boolean,default:!0},showIndex:{type:Boolean,default:!0},startPosition:{type:Number,default:0},minZoom:{type:Number,default:1/3},maxZoom:{type:Number,default:3},overlayClass:{type:String,default:j("overlay")}},data:function(){return{scale:1,moveX:0,moveY:0,active:0,moving:!1,zooming:!1,doubleClickTimer:null}},computed:{imageStyle:function(){var t=this.scale,e={transitionDuration:this.zooming||this.moving?"0s":".3s"};return 1!==t&&(e.transform="scale3d("+t+", "+t+", 1) translate("+this.moveX/t+"px, "+this.moveY/t+"px)"),e}},watch:{value:function(t){var e=this;t?(this.setActive(this.startPosition),this.$nextTick((function(){e.$refs.swipe.swipeTo(e.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})},startPosition:function(t){this.setActive(t)},shouldRender:{handler:function(t){var e=this;t&&this.$nextTick((function(){var t=e.$refs.swipe.$el;Object(h["b"])(t,"touchstart",e.onWrapperTouchStart),Object(h["b"])(t,"touchmove",h["c"]),Object(h["b"])(t,"touchend",e.onWrapperTouchEnd),Object(h["b"])(t,"touchcancel",e.onWrapperTouchEnd)}))},immediate:!0}},methods:{onWrapperTouchStart:function(){this.touchStartTime=new Date},onWrapperTouchEnd:function(t){var e=this;Object(h["c"])(t);var i=new Date-this.touchStartTime,n=this.$refs.swipe||{},r=n.offsetX,a=void 0===r?0:r,s=n.offsetY,o=void 0===s?0:s;i<300&&a<10&&o<10&&(this.doubleClickTimer?(clearTimeout(this.doubleClickTimer),this.doubleClickTimer=null,this.toggleScale()):this.doubleClickTimer=setTimeout((function(){e.asyncClose||e.$emit("input",!1),e.doubleClickTimer=null}),300))},startMove:function(t){var e=t.currentTarget,i=e.getBoundingClientRect(),n=window.innerWidth,r=window.innerHeight;this.touchStart(t),this.moving=!0,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.maxMoveX=Math.max(0,(i.width-n)/2),this.maxMoveY=Math.max(0,(i.height-r)/2)},startZoom:function(t){this.moving=!1,this.zooming=!0,this.startScale=this.scale,this.startDistance=C(t.touches)},onImageTouchStart:function(t){var e=t.touches,i=this.$refs.swipe||{},n=i.offsetX,r=void 0===n?0:n;1===e.length&&1!==this.scale?this.startMove(t):2!==e.length||r||this.startZoom(t)},onImageTouchMove:function(t){var e=t.touches;if((this.moving||this.zooming)&&Object(h["c"])(t,!0),this.moving){this.touchMove(t);var i=this.deltaX+this.startMoveX,n=this.deltaY+this.startMoveY;this.moveX=Object(u["a"])(i,-this.maxMoveX,this.maxMoveX),this.moveY=Object(u["a"])(n,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===e.length){var r=C(e),a=this.startScale*r/this.startDistance;this.scale=Object(u["a"])(a,this.minZoom,this.maxZoom)}},onImageTouchEnd:function(t){if(this.moving||this.zooming){var e=!0;this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(e=!1),t.touches.length||(this.moving=!1,this.zooming=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale()),e&&Object(h["c"])(t,!0)}},setActive:function(t){this.resetScale(),t!==this.active&&(this.active=t,this.$emit("change",t))},resetScale:function(){this.scale=1,this.moveX=0,this.moveY=0},toggleScale:function(){var t=this.scale>1?1:2;this.scale=t,this.moveX=0,this.moveY=0},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:j("index")},[this.slots("index")||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,e=this.slots("cover");if(e)return t("div",{class:j("cover")},[e])},genImages:function(){var t=this,e=this.$createElement,i={loading:function(){return e(d["a"],{attrs:{type:"spinner"}})}};return e(y,{ref:"swipe",attrs:{loop:this.loop,indicatorColor:"white",duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators},class:j("swipe"),on:{change:this.setActive}},[this.images.map((function(n,r){return e(R,[e(p["a"],{attrs:{src:n,fit:"contain",lazyLoad:t.lazyLoad},class:j("image"),scopedSlots:i,style:r===t.active?t.imageStyle:null,nativeOn:{touchstart:t.onImageTouchStart,touchmove:t.onImageTouchMove,touchend:t.onImageTouchEnd,touchcancel:t.onImageTouchEnd}})])}))])}},render:function(){var t=arguments[0];if(this.shouldRender)return t("transition",{attrs:{name:"van-fade"}},[t("div",{directives:[{name:"show",value:this.value}],class:[j(),this.className]},[this.genImages(),this.genIndex(),this.genCover()])])}}),A=i("a142"),T={loop:!0,images:[],value:!0,minZoom:1/3,maxZoom:3,className:"",onClose:null,onChange:null,lazyLoad:!1,showIndex:!0,asyncClose:!1,startPosition:0,swipeDuration:500,showIndicators:!1,closeOnPopstate:!1},$=function(){E=new(o["a"].extend(L))({el:document.createElement("div")}),document.body.appendChild(E.$el),E.$on("change",(function(t){E.onChange&&E.onChange(t)}))},B=function(t,e){if(void 0===e&&(e=0),!A["d"]){E||$();var i=Array.isArray(t)?{images:t,startPosition:e}:t;return Object(s["a"])(E,T,i),E.$once("input",(function(t){E.value=t})),i.onClose&&(E.$off("close"),E.$once("close",i.onClose)),E}};B.install=function(){o["a"].use(L)};var P=B,I=(i("96cf"),i("1da1")),M=i("c1df"),z=i.n(M),D=i("c24f"),q={name:"UserProfile",components:{},props:{},data:function(){return{user:{},isEditNameShow:!1,message:"",isEditGenderShow:!1,isEditBirthdayShow:!1,minDate:new Date(1950,0,1),maxDate:new Date,actions:[{name:"男",value:0},{name:"女",value:1}]}},created:function(){this.loadUserProfile()},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{loadUserProfile:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(D["f"])();case 3:e=t.sent,i=e.data,this.user=i.data,this.message=this.user.name,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.$toast.fail("获取用户失败");case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),onSelectFile:function(){this.file.click()},onFileChange:function(){var t=this,e=this.file.files[0],i=URL.createObjectURL(e);P({images:[i],onClose:function(){var n=Object(I["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.prev=1,n.next=4,this.$dialog.confirm({title:"头像选择",message:"确定使用该头像吗吗？"});case 4:return this.$toast.loading({duration:0,message:"保存中...",forbidClick:!0}),r=new FormData,r.append("photo",e),n.next=9,Object(D["h"])(r);case 9:this.$toast.success("保存成功"),t.user.photo=i,t.$refs.file.value="",n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](1),t.$refs.file.value="";case 17:n.next=23;break;case 19:n.prev=19,n.t1=n["catch"](0),t.$refs.file.value="",this.$toast.fail("保存失败");case 23:case"end":return n.stop()}}),n,this,[[0,19],[1,14]])})));function r(){return n.apply(this,arguments)}return r}()})},updateUserProfile:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({duration:0,message:"保存中...",forbidClick:!0}),t.prev=1,t.next=4,Object(D["i"])(Object(a["a"])({},e,i));case 4:this.isEditNameShow=!1,this.user.name=this.message,this.$toast.success("更改成功"),t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),this.isEditNameShow=!1,this.$toast.fail("更改失败"),this.message=this.user.name;case 14:case"end":return t.stop()}}),t,this,[[1,9]])})));function e(e,i){return t.apply(this,arguments)}return e}(),onUpDateName:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateUserProfile("name",this.message);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onGenderSelect:function(){var t=Object(I["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateUserProfile("gender",e.value);case 2:this.user.gender=e.value,this.isEditGenderShow=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onUpdateBirthday:function(t){var e=z()(t).format("YYYY-MM-DD");this.updateUserProfile("birthday",e),this.user.birthday=e,this.isEditBirthdayShow=!1}},filter:{},computed:{file:function(){return this.$refs["file"]},currentDate:function(){return new Date(this.user.birthday)}},watch:{}},Y=q,N=(i("5a6b"),i("2877")),X=Object(N["a"])(Y,n,r,!1,null,"220acb40",null);e["default"]=X.exports},"5a6b":function(t,e,i){"use strict";var n=i("a0e6"),r=i.n(n);r.a},"786d":function(t,e,i){},8270:function(t,e,i){},9861:function(t,e,i){"use strict";i("e260");var n=i("23e7"),r=i("d066"),a=i("0d3b"),s=i("6eeb"),o=i("e2cc"),c=i("d44e"),u=i("9ed3"),h=i("69f3"),l=i("19aa"),f=i("5135"),p=i("f8c2"),d=i("f5df"),v=i("825a"),m=i("861d"),g=i("7c73"),w=i("5c6c"),b=i("9a1f"),y=i("35a1"),k=i("b622"),S=r("fetch"),x=r("Headers"),R=k("iterator"),O="URLSearchParams",U=O+"Iterator",j=h.set,C=h.getterFor(O),E=h.getterFor(U),L=/\+/g,A=Array(4),T=function(t){return A[t-1]||(A[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},$=function(t){try{return decodeURIComponent(t)}catch(e){return t}},B=function(t){var e=t.replace(L," "),i=4;try{return decodeURIComponent(e)}catch(n){while(i)e=e.replace(T(i--),$);return e}},P=/[!'()~]|%20/g,I={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},M=function(t){return I[t]},z=function(t){return encodeURIComponent(t).replace(P,M)},D=function(t,e){if(e){var i,n,r=e.split("&"),a=0;while(a<r.length)i=r[a++],i.length&&(n=i.split("="),t.push({key:B(n.shift()),value:B(n.join("="))}))}},q=function(t){this.entries.length=0,D(this.entries,t)},Y=function(t,e){if(t<e)throw TypeError("Not enough arguments")},N=u((function(t,e){j(this,{type:U,iterator:b(C(t).entries),kind:e})}),"Iterator",(function(){var t=E(this),e=t.kind,i=t.iterator.next(),n=i.value;return i.done||(i.value="keys"===e?n.key:"values"===e?n.value:[n.key,n.value]),i})),X=function(){l(this,X,O);var t,e,i,n,r,a,s,o,c,u=arguments.length>0?arguments[0]:void 0,h=this,p=[];if(j(h,{type:O,entries:p,updateURL:function(){},updateSearchParams:q}),void 0!==u)if(m(u))if(t=y(u),"function"===typeof t){e=t.call(u),i=e.next;while(!(n=i.call(e)).done){if(r=b(v(n.value)),a=r.next,(s=a.call(r)).done||(o=a.call(r)).done||!a.call(r).done)throw TypeError("Expected sequence with length 2");p.push({key:s.value+"",value:o.value+""})}}else for(c in u)f(u,c)&&p.push({key:c,value:u[c]+""});else D(p,"string"===typeof u?"?"===u.charAt(0)?u.slice(1):u:u+"")},F=X.prototype;o(F,{append:function(t,e){Y(arguments.length,2);var i=C(this);i.entries.push({key:t+"",value:e+""}),i.updateURL()},delete:function(t){Y(arguments.length,1);var e=C(this),i=e.entries,n=t+"",r=0;while(r<i.length)i[r].key===n?i.splice(r,1):r++;e.updateURL()},get:function(t){Y(arguments.length,1);for(var e=C(this).entries,i=t+"",n=0;n<e.length;n++)if(e[n].key===i)return e[n].value;return null},getAll:function(t){Y(arguments.length,1);for(var e=C(this).entries,i=t+"",n=[],r=0;r<e.length;r++)e[r].key===i&&n.push(e[r].value);return n},has:function(t){Y(arguments.length,1);var e=C(this).entries,i=t+"",n=0;while(n<e.length)if(e[n++].key===i)return!0;return!1},set:function(t,e){Y(arguments.length,1);for(var i,n=C(this),r=n.entries,a=!1,s=t+"",o=e+"",c=0;c<r.length;c++)i=r[c],i.key===s&&(a?r.splice(c--,1):(a=!0,i.value=o));a||r.push({key:s,value:o}),n.updateURL()},sort:function(){var t,e,i,n=C(this),r=n.entries,a=r.slice();for(r.length=0,i=0;i<a.length;i++){for(t=a[i],e=0;e<i;e++)if(r[e].key>t.key){r.splice(e,0,t);break}e===i&&r.push(t)}n.updateURL()},forEach:function(t){var e,i=C(this).entries,n=p(t,arguments.length>1?arguments[1]:void 0,3),r=0;while(r<i.length)e=i[r++],n(e.value,e.key,this)},keys:function(){return new N(this,"keys")},values:function(){return new N(this,"values")},entries:function(){return new N(this,"entries")}},{enumerable:!0}),s(F,R,F.entries),s(F,"toString",(function(){var t,e=C(this).entries,i=[],n=0;while(n<e.length)t=e[n++],i.push(z(t.key)+"="+z(t.value));return i.join("&")}),{enumerable:!0}),c(X,O),n({global:!0,forced:!a},{URLSearchParams:X}),a||"function"!=typeof S||"function"!=typeof x||n({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,i,n,r=[t];return arguments.length>1&&(e=arguments[1],m(e)&&(i=e.body,d(i)===O&&(n=e.headers?new x(e.headers):new x,n.has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=g(e,{body:w(0,String(i)),headers:w(0,n)}))),r.push(e)),S.apply(this,r)}}),t.exports={URLSearchParams:X,getState:C}},"9a1f":function(t,e,i){var n=i("825a"),r=i("35a1");t.exports=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return n(e.call(t))}},a0e6:function(t,e,i){},b0c0:function(t,e,i){var n=i("83ab"),r=i("9bf2").f,a=Function.prototype,s=a.toString,o=/^\s*function ([^ (]*)/,c="name";!n||c in a||r(a,c,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},c24f:function(t,e,i){"use strict";i.d(e,"g",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"e",(function(){return s})),i.d(e,"d",(function(){return o})),i.d(e,"a",(function(){return c})),i.d(e,"b",(function(){return u})),i.d(e,"f",(function(){return h})),i.d(e,"h",(function(){return l})),i.d(e,"i",(function(){return f}));var n=i("b775"),r=function(t){return Object(n["a"])({method:"post",url:"/app/v1_0/authorizations",data:t})},a=function(t){return Object(n["a"])({method:"get",url:"/app/v1_0/sms/codes/".concat(t)})},s=function(){return Object(n["a"])({method:"get",url:"/app/v1_0/user"})},o=function(t){return Object(n["a"])({method:"get",url:"/app/v1_0/users/".concat(t)})},c=function(t){return Object(n["a"])({method:"post",url:"/app/v1_0/user/followings",data:{target:t}})},u=function(t){return Object(n["a"])({method:"delete",url:"/app/v1_0/user/followings/".concat(t)})},h=function(){return Object(n["a"])({method:"get",url:"/app/v1_0/user/profile"})},l=function(t){return Object(n["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})},f=function(t){return Object(n["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})}},c98e:function(t,e,i){"use strict";var n=2147483647,r=36,a=1,s=26,o=38,c=700,u=72,h=128,l="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",v=r-a,m=Math.floor,g=String.fromCharCode,w=function(t){var e=[],i=0,n=t.length;while(i<n){var r=t.charCodeAt(i++);if(r>=55296&&r<=56319&&i<n){var a=t.charCodeAt(i++);56320==(64512&a)?e.push(((1023&r)<<10)+(1023&a)+65536):(e.push(r),i--)}else e.push(r)}return e},b=function(t){return t+22+75*(t<26)},y=function(t,e,i){var n=0;for(t=i?m(t/c):t>>1,t+=m(t/e);t>v*s>>1;n+=r)t=m(t/v);return m(n+(v+1)*t/(t+o))},k=function(t){var e=[];t=w(t);var i,o,c=t.length,f=h,p=0,v=u;for(i=0;i<t.length;i++)o=t[i],o<128&&e.push(g(o));var k=e.length,S=k;k&&e.push(l);while(S<c){var x=n;for(i=0;i<t.length;i++)o=t[i],o>=f&&o<x&&(x=o);var R=S+1;if(x-f>m((n-p)/R))throw RangeError(d);for(p+=(x-f)*R,f=x,i=0;i<t.length;i++){if(o=t[i],o<f&&++p>n)throw RangeError(d);if(o==f){for(var O=p,U=r;;U+=r){var j=U<=v?a:U>=v+s?s:U-v;if(O<j)break;var C=O-j,E=r-j;e.push(g(b(j+C%E))),O=m(C/E)}e.push(g(b(O))),v=y(p,R,S==k),p=0,++S}}++p,++f}return e.join("")};t.exports=function(t){var e,i,n=[],r=t.toLowerCase().replace(p,".").split(".");for(e=0;e<r.length;e++)i=r[e],n.push(f.test(i)?"xn--"+k(i):i);return n.join(".")}}}]);
//# sourceMappingURL=chunk-77f71027.16ea237f.js.map