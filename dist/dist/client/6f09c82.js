(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{246:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(58),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,n.dispatch("test/getNews",{a:1});case 3:return r=e.sent,e.abrupt("return",{testData:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"1111",meta:[{hid:"description",name:"description",content:"home page"},{hid:"keywords",name:"keywords",content:"keywords"}]}},mounted:function(){console.log(this.testData)},methods:{getData:function(){this.$store.dispatch("test/getNews",{a:1}).then((function(t){console.log(t)}))}}}),c=n(50),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{attrs:{to:"/test"}},[t._v("test")]),t._v(" "),n("button",{on:{click:t.getData}},[t._v(" get data ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);