(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],{41:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),r=c.n(s),i=c(2),j=c(7),u=c.n(j),l=(c(41),c.p+"static/media/StarWarsLogo.768ef81d.png"),b=c(0),o=function(){return Object(b.jsx)("header",{className:"center",children:Object(b.jsx)("img",{src:l,alt:"Star wars logo"})})},O=function(e){var t=e.searchQuery,c=e.setSearchQuery;return Object(b.jsx)("section",{className:"search",children:Object(b.jsx)("form",{children:Object(b.jsx)("input",{type:"text",placeholder:"Search characters",autoFocus:!0,value:t,onChange:function(e){return t=e.target.value,void c(t);var t}})})})},h=c(4),d=c.n(h),p=c(8),f=function(e){var t=e.item,c=Object(n.useState)("Loading..."),a=Object(i.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)(!1),l=Object(i.a)(j,2),o=(l[0],l[1]),O=Object(n.useState)(!1),h=Object(i.a)(O,2),f=h[0],x=h[1];return Object(n.useEffect)(Object(p.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){var e=Object(p.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,u()(t.homeworld);case 3:c=e.sent,r(c.data.name),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,c();case 3:case"end":return e.stop()}}),e)}))),[]),Object(b.jsx)("div",{className:"item-details",children:Object(b.jsxs)("div",{className:"item-details__mini",children:[Object(b.jsx)("button",{onClick:function(){return x(!f)},children:Object(b.jsx)("h1",{children:t.name})}),f?Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Birth year :",t.birth_year]}),Object(b.jsxs)("li",{children:["Gender : ",t.gender]}),Object(b.jsxs)("li",{children:["Height : ",t.height]}),Object(b.jsxs)("li",{children:["Home world : ",s]})]}):null]})})},x=c.p+"static/media/loader.56db3263.gif",m=function(){return Object(b.jsx)("img",{src:x,style:{width:"200px",margin:"auto",display:"block"}})},v=function(e){var t=e.resultsUrl,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)(null),u=Object(i.a)(j,2),l=u[0],o=u[1],O=Object(n.useState)(null),h=Object(i.a)(O,2),d=h[0],p=h[1];function x(e){fetch(e).then((function(e){return e.json()})).then((function(e){r(e.results),o(e.next),p(e.previous)}))}return Object(n.useEffect)((function(){x(t)}),[t]),Object(b.jsxs)(b.Fragment,{children:[s.length>0?Object(b.jsx)("section",{className:"character-display",children:s.map((function(e){return Object(b.jsx)(f,{item:e},e.name)}))}):Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:"navbtn",children:[null!=d?Object(b.jsx)("button",{className:"navs",onClick:function(){x(d)},children:"Previous"}):null,null!=l?Object(b.jsx)("button",{className:"navs",onClick:function(){x(l)},children:"Next"}):null]})]})},S=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=(t[1],Object(n.useState)(!1)),s=Object(i.a)(a,2),r=(s[0],s[1],Object(n.useState)(1)),j=Object(i.a)(r,2),u=j[0],l=(j[1],Object(n.useState)(10)),h=Object(i.a)(l,2),d=h[0],p=(h[1],Object(n.useState)("")),f=Object(i.a)(p,2),x=f[0],m=f[1],S=Object(n.useState)(""),g=Object(i.a)(S,2),w=g[0],y=g[1];Object(n.useEffect)((function(){w.length>0?m("https://swapi.dev/api/people?search="+w):m("https://swapi.dev/api/people")}),[w]);var N=u*d,k=N-d;c.slice(k,N);return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(o,{}),Object(b.jsx)(O,{searchQuery:w,setSearchQuery:y}),Object(b.jsx)(v,{resultsUrl:x})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e5b45b0a.chunk.js.map