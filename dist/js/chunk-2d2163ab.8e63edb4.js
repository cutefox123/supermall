(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2163ab"],{c228:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("购物车")]),n("h2",[t._v(t._s(t.$store.state.counter))]),n("h2",[t._v(t._s(t.$store.getters.powCounter))]),n("p",[t._v(t._s(t.$store.getters.more20Stu))]),n("p",[t._v(t._s(t.$store.getters.moreXStu(18)))]),n("button",{on:{click:t.decre}},[t._v("减少1")]),n("button",{on:{click:t.incre}},[t._v("增加1")]),n("button",{on:{click:function(e){return t.increCount(5)}}},[t._v("增加5")]),n("button",{on:{click:t.aUpdateInfo}},[t._v("异步操作修改")])])},c=[],r={name:"Cart",methods:{incre:function(){this.$store.commit("increment")},decre:function(){this.$store.commit("decrement")},increCount:function(t){this.$store.commit("increCount",t)},aUpdateInfo:function(){this.$store.dispatch("aUpdateInfo","我是cart传来的参数").then((function(t){console.log(t)}))}}},i=r,s=n("0c7c"),u=Object(s["a"])(i,o,c,!1,null,"759e3a32",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2163ab.8e63edb4.js.map