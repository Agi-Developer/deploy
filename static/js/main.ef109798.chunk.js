(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(0),r=n.n(a),c=n(53),u=n(52),o=Object(u.a)(function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}}});function l(){var e=o();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,null))}},30:function(e,t,n){"use strict";n.r(t),n.d(t,"API_URL",function(){return E}),n.d(t,"DataContext",function(){return j});var a=n(18),r=n.n(a),c=n(26),u=n(17),o=n(0),l=n.n(o),i=n(21),s=n.n(i),f=n(24),d=n(28),m=n.n(d),p=(n(47),n(49),n(23)),v=l.a.lazy(function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,57))}),b=l.a.lazy(function(){return n.e(5).then(n.bind(null,56))}),E="https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=qrPJatGEbiTG4EwoiPYefSN6TQ2u7OOv",j=Object(o.createContext)({data:[],error:""}),O=function(e){var t=e.children,n=Object(o.useState)([]),a=Object(u.a)(n,2),i=a[0],s=a[1],f=Object(o.useState)(""),d=Object(u.a)(f,2),p=d[0],v=d[1],b=function(){var e=Object(c.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(E);case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).fault?v("Rate limit Exceeded"):s(n.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v(e.t0.message);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)(function(){b()},[m()(i)]),l.a.createElement(j.Provider,{value:{data:i,error:p}},t)};function h(){return l.a.createElement(o.Suspense,{fallback:l.a.createElement(p.a,null)},l.a.createElement(O,null,l.a.createElement(f.b,null,l.a.createElement(v,{path:"/*"}),l.a.createElement(b,{default:!0}))))}document.addEventListener("DOMContentLoaded",function(){s.a.render(l.a.createElement(h,null),document.getElementById("root"))})},33:function(e,t,n){e.exports=n(30)},49:function(e,t,n){}},[[33,1,2]]]);
//# sourceMappingURL=main.ef109798.chunk.js.map