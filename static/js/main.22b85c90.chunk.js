(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{28:function(e,t,n){},58:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t),n.d(t,"addToCart",(function(){return U}));var c=n(1),r=n.n(c),a=n(21),i=n.n(a),s=(n(58),n(28),n(2));var o=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"About"}),Object(s.jsx)("main",{className:"about",children:"This project is a demonstration of API interfacing using React, as well as demonstrating features such as modals and managing a global state store with Redux. I thank you for taking the time to explore it, it was a very fun exercise in web development. I'm proud to add it to my portfolio and hope that potential employers enjoy it! \ud83d\ude03"})]})},l=n(8),d=n.n(l),j=n(18),u=n(3),b=n(19);var h,p,f,O,x,m=function(){Object(c.useEffect)((function(){a()}),[]);var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fakestoreapi.com/products");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r(n.slice(0,18)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r("failed");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"Shop"}),"string"===typeof n&&Object(s.jsx)("h2",{children:"API call failed, please refresh"}),"string"!==typeof n&&Object(s.jsx)("div",{className:"grid",children:n.map((function(e){return Object(s.jsx)("div",{className:"shopitem",children:Object(s.jsxs)(b.b,{to:"/shop/".concat(e.id),children:[Object(s.jsx)("img",{width:"200",height:"200",src:e.image,alt:"item"}),Object(s.jsx)("h4",{className:"itemprice",children:i.format(e.price)}),Object(s.jsx)("h4",{className:"itemname",children:e.title})]})},e.id)}))})]})},g=n(17),v=n.p+"static/media/cart.fcafbe43.png",y=n(26),w=n(39),k=n(27),S=n(52),N=k.a.div(h||(h=Object(y.a)(["\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),E=k.a.div(p||(p=Object(y.a)(["\n  width: 100vw;\n  height: 500px;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  color: #000;\n  display: block;\n  grid-template-columns: 1fr 1fr;\n  position: relative;\n  z-index: 10;\n  border-radius: 10px;\n  padding-bottom: 1em;\n  overflow:auto\n"]))),C=k.a.div(f||(f=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.8;\n  color: #141414;\n  p {\n    margin-bottom: 1rem;\n  }\n  button {\n    padding: 10px 24px;\n    background: #141414;\n    color: #fff;\n    border: none;\n  }\n"]))),I=Object(k.a)(S.a)(O||(O=Object(y.a)(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 10;\n"]))),A=k.a.div(x||(x=Object(y.a)(["\n  cursor: pointer;\n  position: relative;\n  top: 0px;\n  right: 0px;\n  width: 160px;\n  height: 60px;\n  align-text: center;\n  justify-content: center;\n  border-radius: 999em;\n  margin: 0 auto;\n  padding: 0;\n  z-index: 10;\n  background-color: green;\n  color: white;\n"]))),R=function(e){var t=e.showModal,n=e.setShowModal,r=Object(g.b)(),a=Object(c.useRef)(),i=Object(g.c)((function(e){return e})),o=Object(c.useState)(),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(w.useSpring)({config:{duration:250},opacity:t?1:0,transform:t?"translateY(0%)":"translateY(-100%)"}),h=function(){j(Object(s.jsx)("div",{children:"ORDER PLACED! THANK YOU!"})),r({type:"order",payload:0})},p=Object(c.useCallback)((function(e){"Escape"===e.key&&t?n(!1):"Enter"===e.key&&t&&h()}),[n,t]);return Object(c.useEffect)((function(){return document.addEventListener("keydown",p),function(){return document.removeEventListener("keydown",p)}}),[p]),Object(c.useEffect)((function(){if(i.length>0){var e={};i.forEach((function(t){e[t]=(e[t]||0)+1})),j(Object.keys(e).map((function(t,n){return Object(s.jsxs)("div",{children:[t," QTY: ",e[t]]},t)})))}}),[i]),Object(s.jsx)(s.Fragment,{children:t?Object(s.jsx)(N,{onClick:function(e){a.current===e.target&&n(!1)},ref:a,children:Object(s.jsx)(w.animated.div,{style:b,children:Object(s.jsxs)(E,{showModal:t,children:[Object(s.jsxs)(C,{children:[d,i.length>0&&Object(s.jsxs)(A,{"aria-label":"Order items",onClick:function(){return h()},children:["ORDER",Object(s.jsx)("br",{}),"ITEMS"]})]}),Object(s.jsx)(I,{"aria-label":"Close modal",onClick:function(){n((function(e){return!e}))}})]})})}):null})};var T=function(){Object(g.b)();var e=Object(g.c)((function(e){return e})),t=Object(c.useState)("Cart"),n=Object(u.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],j={color:"white"};return Object(c.useEffect)((function(){a("Cart  ("+e.length+")")}),[e]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("nav",{children:[Object(s.jsx)("h3",{className:"navlogo",children:"THRIFTY"}),Object(s.jsxs)("ul",{className:"nav-links",children:[Object(s.jsx)("li",{children:Object(s.jsx)(b.b,{style:j,to:"/shop",children:"Shop"})}),Object(s.jsx)("li",{children:Object(s.jsx)(b.b,{style:j,to:"/about",children:"About"})})]}),Object(s.jsxs)("div",{className:"cart",style:j,onClick:function(){return d(!0)},children:[Object(s.jsx)("img",{src:v,width:"40px",alt:"Cart"}),Object(s.jsx)("div",{className:"cart-text",children:r})]})]}),Object(s.jsx)(R,{showModal:l,setShowModal:d})]})};var F=function(e){var t=e.match,n=Object(g.b)();Object(c.useEffect)((function(){l()}),[]);var r=Object(c.useState)({}),a=Object(u.a)(r,2),i=a[0],o=a[1],l=function(){var e=Object(j.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fakestoreapi.com/products/\n            ".concat(t.params.id));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,o(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),o(null);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[i&&Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{width:"300",height:"300",src:i.image,alt:"item closeup"}),Object(s.jsxs)("div",{className:"fullinfo",children:[Object(s.jsx)("h1",{children:i.title}),Object(s.jsxs)("h3",{className:"desc",children:[i.description,"..."]}),Object(s.jsx)("button",{onClick:function(){t.params.id&&n({type:"added",payload:i.title})},children:"Add to cart!"})]})]}),!i&&Object(s.jsx)("h1",{children:"API call failed, please refresh"})]})},M=n(5),D=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Home"}),Object(s.jsx)("div",{children:"Welcome to Thrifty! Please visit our shop to find some fantastic deals."})]})};var P=function(){return Object(s.jsx)(b.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(T,{}),Object(s.jsxs)(M.c,{children:[Object(s.jsx)(M.a,{path:"/",exact:!0,component:D}),Object(s.jsx)(M.a,{path:"/about",component:o}),Object(s.jsx)(M.a,{path:"/shop",exact:!0,component:m}),Object(s.jsx)(M.a,{path:"/shop/:id",component:F})]})]})})},Y=n(53),J=n(16),z=JSON.parse(localStorage.getItem("cart.items")),H=z||[];var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;if("added"===t.type){var n=[].concat(Object(J.a)(e),[t.payload]);return localStorage.setItem("cart.items",JSON.stringify(n)),n}return"order"===t.type?(localStorage.clear(),[]):e},U=function(e){return{type:"ADD",payload:{id:e}}},B=Object(Y.a)(L);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(g.a,{store:B,children:Object(s.jsx)(P,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.22b85c90.chunk.js.map