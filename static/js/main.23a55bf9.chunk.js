(this["webpackJsonpnever-todo"]=this["webpackJsonpnever-todo"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),l=(n(15),n(9)),u=n(5),i=n(1),m=function(e){var t=e.todo,n=e.toggleTodo;return c.a.createElement("li",{draggable:"true"},c.a.createElement("label",{htmlFor:t.text,style:{textDecoration:t.completed?"line-through":void 0}},c.a.createElement("input",{id:t.text,type:"checkbox",checked:t.completed,onChange:function(){n(t)}}),t.text,c.a.createElement("i",{className:"fas fa-arrows-alt-v"})))},s=function(e){var t=e.todos,n=e.toggleTodo,a=t.filter((function(e){return e.completed})),o=t.filter((function(e){return!e.completed}));return c.a.createElement("div",{className:"todo-list"},c.a.createElement("ul",{className:"no-bullets"},o.map((function(e){return c.a.createElement(m,{key:e.text,todo:e,toggleTodo:n})}))),c.a.createElement("div",{className:"todo-completed"},c.a.createElement("span",null,"Completed: (",a.length,")"),c.a.createElement("ul",{className:"no-bullets"},a.map((function(e){return c.a.createElement(m,{key:e.text,todo:e,toggleTodo:n})})))))},d=function(e){var t=e.addTodo,n=Object(a.useState)(""),o=Object(i.a)(n,2),r=o[0],l=o[1];return c.a.createElement("form",null,c.a.createElement("input",{type:"text",value:r,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{type:"submit",disabled:!r,onClick:function(e){e.preventDefault(),t(r),l("")}},"Add Todo"))},p=n(4),f=n.n(p),v=n(8),g="nr8NcCB1vX8gPJXh7e3T91KS1KnJrLjM",E=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(!1),l=Object(i.a)(r,2),u=l[0],m=l[1],s=Object(a.useState)(),d=Object(i.a)(s,2),p=d[0],E=d[1];function b(){return(b=Object(v.a)(f.a.mark((function e(t){var n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),n="https://api.giphy.com/v1/gifs/search?api_key=".concat(g,"&q=").concat(t,"&limit=10&offset=0&rating=g&lang=en"),e.next=4,fetch(n).catch((function(e){m(!1),E(e)}));case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,o(c.data),m(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){e&&function(e){b.apply(this,arguments)}(e)}),[e]),[c,u,p]},b=function(e){var t=e.keyword,n=Object(a.useState)(t),o=Object(i.a)(n,2),r=o[0],l=o[1],u=E(r),m=Object(i.a)(u,3),s=m[0],d=m[1],p=m[2];return c.a.createElement("div",{className:"container"},c.a.createElement("input",{value:r,onChange:function(e){var t=e.currentTarget.value;l(t)}}),p&&c.a.createElement("div",null,p.message),d&&c.a.createElement("div",null,"Loading..."),!d&&s.length&&s.map((function(e,t){var n,a;return c.a.createElement("div",{key:t},c.a.createElement("h1",null,e.title),c.a.createElement("img",{src:null===(n=e.images)||void 0===n||null===(a=n.original)||void 0===a?void 0:a.url,alt:e.title}))})))},h=(n(17),[{text:"Go space travel \ud83d\ude80",completed:!1},{text:"Go shopping \ud83d\udecd\ufe0f",completed:!1},{text:"Read Eloquent JavaScript \ud83d\udcda",completed:!1},{text:"Go to gym \ud83c\udfc3\u200d\u2640\ufe0f",completed:!0}]),j=function(){var e=Object(a.useState)(h),t=Object(i.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",{className:"container"},c.a.createElement(d,{addTodo:function(e){if(n.some((function(t){return t.text===e})))return alert("".concat(e," is already in the list \ud83d\ude06")),!1;var t=[].concat(Object(l.a)(n),[{text:e,completed:!1}]);o(t)}}),c.a.createElement(s,{todos:n,toggleTodo:function(e){var t=n.map((function(t){return t.text===e.text?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t}));o(t)}}),c.a.createElement(b,{keyword:"happy monday"}))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.23a55bf9.chunk.js.map