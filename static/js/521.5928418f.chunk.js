"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[521],{383:function(t,r,e){e.d(r,{Hg:function(){return s},M1:function(){return f},Pg:function(){return i},tx:function(){return p},z1:function(){return o}});var n=e(861),a=e(757),c=e.n(a),u=e(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"9403572a0ca29edc08cf527581f60a81"}}),s=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},521:function(t,r,e){e.r(r),e.d(r,{default:function(){return f}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(689),o=e(791),i=e(383),p=e(184),f=function(){var t=(0,s.UO)().movieId,r=(0,o.useState)([]),e=(0,a.Z)(r,2),c=e[0],f=e[1],v=c.map((function(t){var r=t.cast_id,e=t.character,n=t.name,a=t.profile_path;return(0,p.jsxs)("li",{className:"actor",children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(a),alt:""}),(0,p.jsx)("h2",{className:"cast",children:n}),(0,p.jsxs)("h2",{className:"cast",children:["Character: ",e]})]},r)}));return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.M1)(t);case 3:e=r.sent,f(e.data.cast),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),n=r.t0.response,console.log(n.data.message);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,p.jsx)("ul",{className:"list-actors",children:v})}}}]);
//# sourceMappingURL=521.5928418f.chunk.js.map