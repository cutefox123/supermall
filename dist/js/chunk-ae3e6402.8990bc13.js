(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae3e6402"],{"00b4":function(t,e,r){"use strict";r("ac1f");var n=r("23e7"),o=r("da84"),i=r("c65b"),s=r("e330"),a=r("1626"),c=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),f=o.Error,l=s(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!a(e))return l(this,t);var r=i(e,this,t);if(null!==r&&!c(r))throw new f("RegExp exec method returned something other than an Object or null");return!!r}})},"057f":function(t,e,r){var n=r("c6b6"),o=r("fc6a"),i=r("241c").f,s=r("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return s(a)}};t.exports.f=function(t){return a&&"Window"==n(t)?c(t):i(o(t))}},"069b":function(t,e,r){"use strict";var n=r("41fa"),o=r("3df9"),i=r("dd14"),s=r("9fc2")||0;function a(e){return n.seed(e),t.exports}function c(e){return s=e,t.exports}function u(t){return void 0!==t&&n.characters(t),n.shuffled()}function f(){return o(s)}t.exports=f,t.exports.generate=f,t.exports.seed=a,t.exports.worker=c,t.exports.characters=u,t.exports.isValid=i},"079a":function(t,e,r){},"091d":function(t,e,r){"use strict";var n,o="object"===typeof window&&(window.crypto||window.msCrypto);n=o&&o.getRandomValues?function(t){return o.getRandomValues(new Uint8Array(t))}:function(t){for(var e=[],r=0;r<t;r++)e.push(Math.floor(256*Math.random()));return e},t.exports=n},"2bac":function(t,e,r){"use strict";r("9e83")},"3df9":function(t,e,r){"use strict";var n,o,i=r("bd92"),s=(r("41fa"),1567752802062),a=7;function c(t){var e="",r=Math.floor(.001*(Date.now()-s));return r===o?n++:(n=0,o=r),e+=i(a),e+=i(t),n>0&&(e+=i(n)),e+=i(r),e}t.exports=c},4010:function(t,e,r){"use strict";r("079a")},"41fa":function(t,e,r){"use strict";var n,o,i,s=r("7eac"),a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){i=!1}function u(t){if(t){if(t!==n){if(t.length!==a.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. You submitted "+t.length+" characters: "+t);var e=t.split("").filter((function(t,e,r){return e!==r.lastIndexOf(t)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+a.length+" unique characters. These characters were not unique: "+e.join(", "));n=t,c()}}else n!==a&&(n=a,c())}function f(t){return u(t),n}function l(t){s.seed(t),o!==t&&(c(),o=t)}function d(){n||u(a);var t,e=n.split(""),r=[],o=s.nextValue();while(e.length>0)o=s.nextValue(),t=Math.floor(o*e.length),r.push(e.splice(t,1)[0]);return r.join("")}function p(){return i||(i=d(),i)}function v(t){var e=p();return e[t]}function h(){return n||a}t.exports={get:h,characters:f,seed:l,lookup:v,shuffled:p}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"44db":function(t,e,r){},"4dae":function(t,e,r){var n=r("da84"),o=r("23cb"),i=r("07fa"),s=r("8418"),a=n.Array,c=Math.max;t.exports=function(t,e,r){for(var n=i(t),u=o(e,n),f=o(void 0===r?n:r,n),l=a(c(f-u,0)),d=0;u<f;u++,d++)s(l,d,t[u]);return l.length=d,l}},"4df4":function(t,e,r){"use strict";var n=r("da84"),o=r("0366"),i=r("c65b"),s=r("7b0b"),a=r("9bdd"),c=r("e95a"),u=r("68ee"),f=r("07fa"),l=r("8418"),d=r("9a1f"),p=r("35a1"),v=n.Array;t.exports=function(t){var e=s(t),r=u(this),n=arguments.length,h=n>1?arguments[1]:void 0,m=void 0!==h;m&&(h=o(h,n>2?arguments[2]:void 0));var b,A,g,w,y,x,T=p(e),k=0;if(!T||this==v&&c(T))for(b=f(e),A=r?new this(b):v(b);b>k;k++)x=m?h(e[k],k):e[k],l(A,k,x);else for(w=d(e,T),y=w.next,A=r?new this:[];!(g=i(y,w)).done;k++)x=m?a(w,h,[g.value,k],!0):g.value,l(A,k,x);return A.length=k,A}},"4eac":function(t,e,r){},5435:function(t,e,r){},"5cbe":function(t,e,r){t.exports=r.p+"img/recommend_bg.794b6628.jpg"},"684a":function(t,e){t.exports="data:image/png;base64,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"},7177:function(t,e,r){},"746f":function(t,e,r){var n=r("428f"),o=r("1a2d"),i=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},"75be":function(t,e,r){"use strict";r("5435")},"7dd6":function(t,e,r){"use strict";r("44db")},"7eac":function(t,e,r){"use strict";var n=1;function o(){return n=(9301*n+49297)%233280,n/233280}function i(t){n=t}t.exports={nextValue:o,seed:i}},8418:function(t,e,r){"use strict";var n=r("a04b"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var s=n(e);s in t?o.f(t,s,i(0,r)):t[s]=r}},8796:function(t,e,r){"use strict";r("edd8")},"8dee":function(t,e,r){"use strict";t.exports=r("069b")},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(s){o(t,"throw",s)}}},"9cfd":function(t,e,r){"use strict";r("7177")},"9e83":function(t,e,r){},"9fc2":function(t,e,r){"use strict";t.exports=0},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),s=r("2ba4"),a=r("c65b"),c=r("e330"),u=r("c430"),f=r("83ab"),l=r("4930"),d=r("d039"),p=r("1a2d"),v=r("e8b5"),h=r("1626"),m=r("861d"),b=r("3a9b"),A=r("d9b5"),g=r("825a"),w=r("7b0b"),y=r("fc6a"),x=r("a04b"),T=r("577e"),k=r("5c6c"),C=r("7c73"),S=r("df75"),P=r("241c"),D=r("057f"),j=r("7418"),O=r("06cf"),H=r("9bf2"),z=r("37e8"),E=r("d1e7"),q=r("f36a"),I=r("6eeb"),L=r("5692"),M=r("f772"),V=r("d012"),W=r("90e3"),G=r("b622"),F=r("e538"),N=r("746f"),U=r("d44e"),B=r("69f3"),R=r("b727").forEach,X=M("hidden"),J="Symbol",Z="prototype",K=G("toPrimitive"),Y=B.set,Q=B.getterFor(J),_=Object[Z],$=o.Symbol,tt=$&&$[Z],et=o.TypeError,rt=o.QObject,nt=i("JSON","stringify"),ot=O.f,it=H.f,st=D.f,at=E.f,ct=c([].push),ut=L("symbols"),ft=L("op-symbols"),lt=L("string-to-symbol-registry"),dt=L("symbol-to-string-registry"),pt=L("wks"),vt=!rt||!rt[Z]||!rt[Z].findChild,ht=f&&d((function(){return 7!=C(it({},"a",{get:function(){return it(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=ot(_,e);n&&delete _[e],it(t,e,r),n&&t!==_&&it(_,e,n)}:it,mt=function(t,e){var r=ut[t]=C(tt);return Y(r,{type:J,tag:t,description:e}),f||(r.description=e),r},bt=function(t,e,r){t===_&&bt(ft,e,r),g(t);var n=x(e);return g(r),p(ut,n)?(r.enumerable?(p(t,X)&&t[X][n]&&(t[X][n]=!1),r=C(r,{enumerable:k(0,!1)})):(p(t,X)||it(t,X,k(1,{})),t[X][n]=!0),ht(t,n,r)):it(t,n,r)},At=function(t,e){g(t);var r=y(e),n=S(r).concat(Tt(r));return R(n,(function(e){f&&!a(wt,r,e)||bt(t,e,r[e])})),t},gt=function(t,e){return void 0===e?C(t):At(C(t),e)},wt=function(t){var e=x(t),r=a(at,this,e);return!(this===_&&p(ut,e)&&!p(ft,e))&&(!(r||!p(this,e)||!p(ut,e)||p(this,X)&&this[X][e])||r)},yt=function(t,e){var r=y(t),n=x(e);if(r!==_||!p(ut,n)||p(ft,n)){var o=ot(r,n);return!o||!p(ut,n)||p(r,X)&&r[X][n]||(o.enumerable=!0),o}},xt=function(t){var e=st(y(t)),r=[];return R(e,(function(t){p(ut,t)||p(V,t)||ct(r,t)})),r},Tt=function(t){var e=t===_,r=st(e?ft:y(t)),n=[];return R(r,(function(t){!p(ut,t)||e&&!p(_,t)||ct(n,ut[t])})),n};if(l||($=function(){if(b(tt,this))throw et("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?T(arguments[0]):void 0,e=W(t),r=function(t){this===_&&a(r,ft,t),p(this,X)&&p(this[X],e)&&(this[X][e]=!1),ht(this,e,k(1,t))};return f&&vt&&ht(_,e,{configurable:!0,set:r}),mt(e,t)},tt=$[Z],I(tt,"toString",(function(){return Q(this).tag})),I($,"withoutSetter",(function(t){return mt(W(t),t)})),E.f=wt,H.f=bt,z.f=At,O.f=yt,P.f=D.f=xt,j.f=Tt,F.f=function(t){return mt(G(t),t)},f&&(it(tt,"description",{configurable:!0,get:function(){return Q(this).description}}),u||I(_,"propertyIsEnumerable",wt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:$}),R(S(pt),(function(t){N(t)})),n({target:J,stat:!0,forced:!l},{for:function(t){var e=T(t);if(p(lt,e))return lt[e];var r=$(e);return lt[e]=r,dt[r]=e,r},keyFor:function(t){if(!A(t))throw et(t+" is not a symbol");if(p(dt,t))return dt[t]},useSetter:function(){vt=!0},useSimple:function(){vt=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!f},{create:gt,defineProperty:bt,defineProperties:At,getOwnPropertyDescriptor:yt}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:xt,getOwnPropertySymbols:Tt}),n({target:"Object",stat:!0,forced:d((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(w(t))}}),nt){var kt=!l||d((function(){var t=$();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));n({target:"JSON",stat:!0,forced:kt},{stringify:function(t,e,r){var n=q(arguments),o=e;if((m(e)||void 0!==t)&&!A(t))return v(e)||(e=function(t,e){if(h(o)&&(e=a(o,this,t,e)),!A(e))return e}),n[1]=e,s(nt,null,n)}})}if(!tt[K]){var Ct=tt.valueOf;I(tt,K,(function(t){return a(Ct,this)}))}U($,J),V[X]=!0},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:o})},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("nav-bar",{staticClass:"home-nav"},[r("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物街")])]),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"fakeTab",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{TabClick:t.TabClick}}),r("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,"pull-up-load":!0},on:{scroll:t.contentScroll,pullingUp:t.loadMore}},[r("home-swiper",{attrs:{banners:t.banners},on:{SwiperImgLoad:t.SwiperImgLoad}}),r("recommend-view",{attrs:{recommends:t.recommends}}),r("FeatureView"),r("tab-control",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],ref:"realTab",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{TabClick:t.TabClick}}),r("goods-list",{attrs:{goods:t.goods[t.currentType].list}})],1),r("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(e){return t.backTopClick.apply(null,arguments)}}})],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){if(Array.isArray(t))return i(t)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}r("d9e2");function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return s(t)||a(t)||c(t)||u()}var l=r("125c"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("swiper",t._l(t.banners,(function(e){return r("SwiperItem",{key:e.title},[r("a",{attrs:{href:e.link}},[r("img",{attrs:{src:e.image,alt:e.title},on:{load:t.imgLoad}})])])})),1)},p=[],v=r("73a5"),h={name:"HomeSwiper",props:["banners"],components:{Swiper:v["a"],SwiperItem:v["b"]},data:function(){return{flag:!1}},methods:{imgLoad:function(){this.flag||(this.$emit("SwiperImgLoad"),this.flag=!0)}}},m=h,b=r("0c7c"),A=Object(b["a"])(m,d,p,!1,null,"49332b2a",null),g=A.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"recommend"},t._l(t.recommends,(function(e){return r("div",{staticClass:"recommend-item"},[r("a",{attrs:{href:t.recommends.link}},[r("img",{attrs:{src:e.image}}),r("div",[t._v(t._s(e.title))])])])})),0)},y=[],x={name:"RecommendView",props:["recommends"]},T=x,k=(r("8796"),Object(b["a"])(T,w,y,!1,null,"09210c5a",null)),C=k.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"feature"},[n("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[n("img",{attrs:{src:r("5cbe"),alt:""}})])])}],D={name:"FeatureView"},j=D,O=(r("9cfd"),Object(b["a"])(j,S,P,!1,null,"1a8ab416",null)),H=O.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-control"},t._l(t.titles,(function(e,n){return r("div",{staticClass:"tab-control-item",class:{active:n===t.currentIndex},on:{click:function(e){return t.itemClick(n)}}},[r("span",[t._v(t._s(e))])])})),0)},E=[],q={name:"TabControl",props:["titles"],data:function(){return{currentIndex:0}},methods:{itemClick:function(t){this.currentIndex=t,this.$emit("TabClick",t)}}},I=q,L=(r("4010"),Object(b["a"])(I,z,E,!1,null,"383a921c",null)),M=L.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods"},t._l(t.goods,(function(e,n){return r("GoodsListitem",{key:t.arrayKeys[n],attrs:{"goods-item":e}})})),1)},W=[],G=(r("d81d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-item",on:{click:t.itemClick}},[r("img",{attrs:{src:t.goodsItem.show.img,alt:""}}),r("div",{staticClass:"goods-info"},[r("p",[t._v(t._s(t.goodsItem.title))]),r("span",{staticClass:"price"},[t._v(t._s(t.goodsItem.price))]),r("span",{staticClass:"collect"},[t._v(t._s(t.goodsItem.cfav))])])])}),F=[],N={name:"GoodsListIiem",props:["goodsItem"],methods:{itemClick:function(){this.$router.push("/detail/"+this.goodsItem.iid)}}},U=N,B=(r("75be"),Object(b["a"])(U,G,F,!1,null,"dc905c82",null)),R=B.exports,X=r("8dee"),J=r.n(X),Z={name:"GoodsList",props:["goods"],components:{GoodsListitem:R},data:function(){return{arrayKeys:[]}},beforeUpdate:function(){this.arrayKeys=this.goods.map((function(t){return J.a.generate()}))}},K=Z,Y=(r("7dd6"),Object(b["a"])(K,V,W,!1,null,"4ff7cfe2",null)),Q=Y.exports,_=r("1bab");function $(){return Object(_["a"])({url:"/home/multidata"})}function tt(t,e){return Object(_["a"])({url:"/home/data",params:{type:t,page:e}})}var et=r("b3df"),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"back-top"},[n("img",{attrs:{src:r("684a")},on:{click:function(t){}}})])},nt=[],ot={name:"BackTop"},it=ot,st=(r("2bac"),Object(b["a"])(it,rt,nt,!1,null,"e178604a",null)),at=st.exports,ct={name:"Home",components:{Scroll:et["a"],FeatureView:H,HomeSwiper:g,NavBar:l["a"],RecommendView:C,TabControl:M,GoodsList:Q,BackTop:at},data:function(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",isShowBackTop:!1,isShow:!1,mTop:0}},methods:{SwiperImgLoad:function(){this.mTop=this.$refs.realTab.$el.offsetTop-42},debounce:function(t,e){var r=null;return function(){for(var n=this,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];r&&clearTimeout(r),r=setTimeout((function(){t.apply(n,i)}),e)}},getHomeMultidata:function(){var t=this;$().then((function(e){t.banners=e.data.banner.list,t.recommends=e.data.recommend.list}))},getHomeGoods:function(t){var e=this,r=this.goods[t].page+1;tt(t,r).then((function(r){var n;(n=e.goods[t].list).push.apply(n,f(r.data.list)),e.goods[t].page+=1}))},TabClick:function(t){switch(t){case 0:this.currentType="pop",this.$refs.scroll.scrollWhere(0,-this.mTop,0);break;case 1:this.currentType="new",this.$refs.scroll.scrollWhere(0,-this.mTop,0);break;case 2:this.currentType="sell",this.$refs.scroll.scrollWhere(0,-this.mTop,0);break}this.$refs.fakeTab.currentIndex=t,this.$refs.realTab.currentIndex=t},backTopClick:function(){this.$refs.scroll.scrollWhere(0,0)},contentScroll:function(t){this.isShowBackTop=-t.y>1e3,this.isShow=-t.y>this.mTop},loadMore:function(){this.getHomeGoods(this.currentType),this.$refs.scroll.finishPullUp(),this.$refs.scroll.scroll.refresh()}},created:function(){this.getHomeMultidata(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},updated:function(){this.$refs.scroll.scroll.refresh()},activated:function(){this.$refs.scroll.scroll.refresh()}},ut=ct,ft=(r("e100"),Object(b["a"])(ut,n,o,!1,null,"2a7c2573",null));e["default"]=ft.exports},bd92:function(t,e,r){"use strict";var n=r("41fa"),o=r("091d"),i=r("e51f");function s(t){var e,r=0,s="";while(!e)s+=i(o,n.get(),1),e=t<Math.pow(16,r+1),r++;return s}t.exports=s},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),s=i("map");n({target:"Array",proto:!0,forced:!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dd14:function(t,e,r){"use strict";var n=r("41fa");function o(t){if(!t||"string"!==typeof t||t.length<6)return!1;var e=new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!e.test(t)}t.exports=o},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),s=r("e330"),a=r("1a2d"),c=r("1626"),u=r("3a9b"),f=r("577e"),l=r("9bf2").f,d=r("e893"),p=i.Symbol,v=p&&p.prototype;if(o&&c(p)&&(!("description"in v)||void 0!==p().description)){var h={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:f(arguments[0]),e=u(v,this)?new p(t):void 0===t?p():p(t);return""===t&&(h[e]=!0),e};d(m,p),m.prototype=v,v.constructor=m;var b="Symbol(test)"==String(p("test")),A=s(v.toString),g=s(v.valueOf),w=/^Symbol\((.*)\)[^)]+$/,y=s("".replace),x=s("".slice);l(v,"description",{configurable:!0,get:function(){var t=g(this),e=A(t);if(a(h,t))return"";var r=b?x(e,7,-1):y(e,w,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:m})}},e100:function(t,e,r){"use strict";r("4eac")},e51f:function(t,e){t.exports=function(t,e,r){var n=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*n*r/e.length),i="";while(1){var s=t(o),a=o;while(a--)if(i+=e[s[a]&n]||"",i.length===+r)return i}}},e538:function(t,e,r){var n=r("b622");e.f=n},edd8:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("e8b5"),s=r("68ee"),a=r("861d"),c=r("23cb"),u=r("07fa"),f=r("fc6a"),l=r("8418"),d=r("b622"),p=r("1dde"),v=r("f36a"),h=p("slice"),m=d("species"),b=o.Array,A=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(t,e){var r,n,o,d=f(this),p=u(d),h=c(t,p),g=c(void 0===e?p:e,p);if(i(d)&&(r=d.constructor,s(r)&&(r===b||i(r.prototype))?r=void 0:a(r)&&(r=r[m],null===r&&(r=void 0)),r===b||void 0===r))return v(d,h,g);for(n=new(void 0===r?b:r)(A(g-h,0)),o=0;h<g;h++,o++)h in d&&l(n,o,d[h]);return n.length=o,n}})}}]);
//# sourceMappingURL=chunk-ae3e6402.8990bc13.js.map