(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(5),r=c(15),l=c(6),o=c(12),i=c(13),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h={query:"",status:"all"},O=function(){return{type:"currentTodo/ACTIVE"}},m=function(){return{type:"currentTodo/COMPLETED"}},x=function(){return{type:"currentTodo/All"}},f=function(e){return{type:"currentTodo/SET_QUERY",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/ACTIVE":return Object(b.a)(Object(b.a)({},e),{},{status:"active"});case"currentTodo/COMPLETED":return Object(b.a)(Object(b.a)({},e),{},{status:"completed"});case"currentTodo/All":return Object(b.a)(Object(b.a)({},e),{},{status:"all"});case"currentTodo/SET_QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});default:return e}},p=function(){return[]},y=Object(l.combineReducers)({currentTodo:j,filter:v,todos:p}),N=Object(l.createStore)(y,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(i.a))),T=c(0),g=(c(23),c(24),c(3)),E=c(14),w=c.n(E),C=(s.b,s.c);function S(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(25);var k=c(1),L=function(){return Object(k.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(k.jsx)("div",{className:"Loader__content"})})},_=function(){var e=Object(T.useState)([]),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(T.useState)(null),r=Object(g.a)(a,2),l=r[0],o=r[1],i=Object(s.b)();Object(T.useEffect)((function(){S("/todos").then((function(e){return n(e)}))}),[]);var u=C((function(e){return e.filter})),j=C((function(e){return e.filter.query})),b=c.filter((function(e){var t="active"===u.status&&!e.completed||"completed"===u.status&&e.completed||"all"===u.status;return t&&""!==j.trim()?e.title.toLowerCase().includes(j.toLowerCase()):t}));return Object(k.jsx)(k.Fragment,{children:b.some((function(e){return e.title.toLowerCase().includes(j.toLowerCase())}))?Object(k.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"#"}),Object(k.jsx)("th",{children:Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)("i",{className:"fas fa-check"})})}),Object(k.jsx)("th",{children:"Title"}),Object(k.jsx)("th",{children:" "})]})}),Object(k.jsx)("tbody",{children:b.length?b.map((function(e){var t=e.id===l;return Object(k.jsxs)("tr",{"data-cy":"todo",children:[Object(k.jsx)("td",{className:"is-vcentered",children:e.id}),Object(k.jsx)("td",{className:"is-vcentered",children:" "}),Object(k.jsx)("td",{className:"is-vcentered is-expanded",children:Object(k.jsx)("p",{className:w()({"has-text-danger":e.completed,"has-text-success":!e.completed}),children:e.title})}),Object(k.jsx)("td",{className:"has-text-right is-vcentered",children:Object(k.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return i(d(t=e)),void o(t.id);var t},children:Object(k.jsx)("span",{className:"icon",children:t?Object(k.jsx)("i",{className:"far fa-eye-slash"}):Object(k.jsx)("i",{className:"far fa-eye"})})})})]})})):Object(k.jsx)(L,{})})]}):Object(k.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},A=function(){var e=Object(s.b)(),t=C((function(e){return e.filter})),c=C((function(e){return e.filter.query}));return Object(k.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(k.jsx)("p",{className:"control",children:Object(k.jsx)("span",{className:"select",children:Object(k.jsxs)("select",{"data-cy":"statusSelect",value:t.status,onChange:function(t){var c=t.target.value;"all"===c?e(x()):"active"===c?(e(O()),e(f(""))):"completed"===c&&(e(m()),e(f("")))},children:[Object(k.jsx)("option",{value:"all",children:"All"}),Object(k.jsx)("option",{value:"active",children:"Active"}),Object(k.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(k.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(k.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(t){var c=t.target.value;e(f(c))}}),Object(k.jsx)("span",{className:"icon is-left",children:Object(k.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(k.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(k.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(f(""))}})})]})]})},D=function(){var e=Object(s.b)(),t=C((function(e){return e.currentTodo})),c=Object(T.useState)(null),n=Object(g.a)(c,2),a=n[0],r=n[1];return Object(T.useEffect)((function(){var e;t&&(e=t.userId,S("/users/".concat(e))).then(r)}),[]),a?Object(k.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(k.jsx)("div",{className:"modal-background"}),Object(k.jsxs)("div",{className:"modal-card",children:[Object(k.jsxs)("header",{className:"modal-card-head",children:[Object(k.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(k.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e(u())}})]}),Object(k.jsxs)("div",{className:"modal-card-body",children:[Object(k.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(k.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(k.jsx)("strong",{className:"has-text-danger",children:"Planned"}):Object(k.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(k.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})]})]})]})]}):Object(k.jsx)(L,{})},I=function(){var e=C((function(e){return e.currentTodo}));return Object(k.jsx)("div",{className:"section",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("h1",{className:"title",children:"Todos"}),Object(k.jsxs)("div",{className:"block",children:[Object(k.jsx)(A,{}),Object(k.jsx)(_,{}),e&&Object(k.jsx)(D,{})]})]})})})},M=function(){return Object(k.jsx)(s.a,{store:N,children:Object(k.jsx)(r.a,{children:Object(k.jsx)(I,{})})})};a.a.render(Object(k.jsx)(M,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d6b96336.chunk.js.map