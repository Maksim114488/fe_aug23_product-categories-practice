(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(7),r=t.n(s),n=(t(14),t(15),t(9)),i=t(5),l=t(6),d=(t(16),t(8)),o=t.n(d),j=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],b=t(0),m=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=h.find((function(a){return e.categoryId===a.id})),t=j.find((function(e){return e.id===a.ownerId}));return Object(l.a)(Object(l.a)({},e),{},{category:a,user:t})})),x=function(){var e,a=Object(c.useState)("All"),t=Object(i.a)(a,2),s=t[0],r=t[1],l=Object(c.useState)(""),d=Object(i.a)(l,2),h=d[0],x=d[1];return e=""!==s&&"All"!==s?m.filter((function(e){return e.user.id===s})):Object(n.a)(m),""!==h&&(e=e.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}))),Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Product Categories"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("nav",{className:"panel",children:[Object(b.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(b.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(b.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:o()({"is-active":"All"===s}),onClick:"All"!==s&&function(){return r("All")},children:"All"}),j.map((function(e){return Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:s!==e.id?function(){return r(e.id)}:function(){return r("")},className:s!==e.id?null:"is-active",children:e.name},e.id)}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:h,onChange:function(e){return x(e.target.value.trim())}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),""!==h&&Object(b.jsx)("span",{className:"icon is-right",children:Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return x("")}})})]})}),Object(b.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(b.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 1"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 2"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 is-info",href:"#/",children:"Category 3"}),Object(b.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1",href:"#/",children:"Category 4"})]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(b.jsxs)("div",{className:"box table-container",children:[Object(b.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(b.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(b.jsx)("tbody",{children:e.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"Product",children:[Object(b.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(b.jsx)("td",{"data-cy":"ProductName",children:e.name}),Object(b.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(b.jsx)("td",{"data-cy":"ProductUser",className:"m"===e.user.sex?"has-text-link":"has-text-danger",children:e.user.name})]},e.id)}))})]})]})]})})};r.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2b1de63a.chunk.js.map