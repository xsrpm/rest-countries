(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={CountryItem:"style_CountryItem__w4W1l",width264:"style_width264__EpahO",height160:"style_height160__3bmao",height336:"style_height336__1oaJv"}},function(e,t,n){e.exports={filter:"style_filter__ebS5B",listFilter:"style_listFilter__1STUQ",buttonFilter:"style_buttonFilter__3OcaO",width200:"style_width200__7Fspi"}},,,function(e,t,n){e.exports={Home:"style_Home__DfsiY",ulList:"style_ulList__3jhwn"}},,function(e,t,n){e.exports={Country:"style_Country__2ndZv"}},function(e,t,n){e.exports={search:"style_search__HZw_w"}},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(1),i=n(10),r=n.n(i),a=n(3),l=n(11),j=n.n(l);var h=n(0);function o(e){var t=e.params,n=e.styleTheme,i=function(e){var t=Object(a.e)(),n=Object(c.a)(t,2),i=(n[0],n[1]),r=Object(s.useState)(null),l=Object(c.a)(r,2),j=l[0],h=l[1],o=Object(s.useState)(null),d=Object(c.a)(o,2),u=d[0],b=d[1];return Object(s.useEffect)((function(){fetch("https://restcountries.com/v3.1/name/".concat(e,"?fullText=true&fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders")).then((function(e){return e.json()})).then((function(e){h(e[0]),e[0].borders.length>0&&fetch("https://restcountries.com/v3.1/alpha?codes=".concat(e[0].borders.join())).then((function(e){return e.json()})).then((function(e){b(e)}))}))}),[e]),[j,i,u]}(t.country),r=Object(c.a)(i,3),l=r[0],o=r[1],d=r[2];return null===l?Object(h.jsx)("div",{children:"Loading..."}):Object(h.jsxs)("main",{className:j.a.Country,children:[Object(h.jsxs)("button",{className:"light"===n?"":"darkMode",onClick:function(){return o("/")},children:[Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"})}),"Back"]}),Object(h.jsxs)("article",{children:[Object(h.jsx)("picture",{children:Object(h.jsx)("img",{src:l.flags.svg,alt:l.name.common})}),Object(h.jsxs)("section",{children:[Object(h.jsxs)("h2",{children:[l.name.common," "]}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Native Name: "}),Object(h.jsx)("span",{children:Object.entries(l.name.nativeName).pop()[1].common})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Population: "}),Object(h.jsx)("span",{children:l.population})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Region: "}),Object(h.jsx)("span",{children:l.region})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Sub Region: "}),Object(h.jsx)("span",{children:l.subregion})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Capital: "}),Object(h.jsx)("span",{children:l.capital})]})]}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Top Level Domain: "}),Object(h.jsx)("span",{children:l.tld})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Currencies: "}),Object(h.jsx)("span",{children:Object.values(l.currencies).map((function(e){return e.name})).join(", ")})]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:"Languages: "}),Object(h.jsx)("span",{children:Object.values(l.languages).join(", ")})]})]}),l.length>0&&Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Border Countries:"}),Object(h.jsx)("div",{children:d&&d.map((function(e){return Object(h.jsx)(a.a,{href:"/country/"+e.name.common,children:Object(h.jsx)("a",{href:"",children:Object(h.jsx)("button",{className:"light"===n?"":"darkMode",children:e.name.common})})},e.name.common)}))})]})]})]})]})}n(18);function d(e){var t=e.styleTheme,n=e.setStyleTheme;return Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"Where in the world?"}),Object(h.jsxs)("p",{onClick:function(){n("light"===t?"dark":"light"),document.getElementsByTagName("body")[0].classList.toggle("darkMode")},children:["light"===t?Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"})}):Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"})})," ","light"===t?"Dark Mode":"Light Mode"]})]})}var u=n(5),b=n.n(u);function O(e){var t=e.countryName,n=e.flag,c=e.population,s=e.region,i=e.capital,r=e.styleTheme;return Object(h.jsx)("li",{className:"element "+b.a.CountryItem+" "+b.a.height336+" "+b.a.width264+" "+("light"===r?"":"darkMode"),children:Object(h.jsx)(a.a,{href:"/country/"+encodeURI(t),children:Object(h.jsxs)("a",{href:"",children:[Object(h.jsx)("picture",{children:Object(h.jsx)("img",{className:b.a.width264+" "+b.a.height160,src:n,alt:"Flag of "+t})}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Population: "}),Object(h.jsx)("span",{children:c})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Region: "}),Object(h.jsx)("span",{children:s})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{children:"Capital: "}),Object(h.jsx)("span",{children:i})]})]})]})})})}var x=n(6),m=n.n(x);function p(e){var t,n=e.styleTheme,s=Object(a.e)(),i=Object(c.a)(s,2),r=i[0];i[1];return"/"!==r&&(t=(t=r.slice(8))[0].toUpperCase()+t.slice(1)),Object(h.jsxs)("div",{className:m.a.filter,children:[Object(h.jsxs)("div",{className:"element "+m.a.width200+" "+m.a.buttonFilter+" "+("light"===n?"":"darkMode"),children:["/"===r?Object(h.jsx)("span",{children:"Filter by Region"}):Object(h.jsx)("span",{children:t}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(h.jsx)("path",{d:"M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"})})]}),Object(h.jsxs)("ul",{className:"element "+m.a.width200+" "+m.a.listFilter+" "+("light"===n?"":"darkMode"),children:[Object(h.jsx)("li",{children:Object(h.jsx)(a.a,{href:"/",children:"All "})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.a,{href:"/region/africa",children:"Africa "})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.a,{href:"/region/america",children:"America"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.a,{href:"/region/asia",children:"Asia"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.a,{href:"/region/europe",children:"Europa"})}),Object(h.jsx)("li",{children:Object(h.jsx)(a.a,{href:"/region/oceania",children:"Oceania"})})]})]})}var g=n(12),f=n.n(g);function v(e){var t=e.inputSearch,n=e.onChange,c=e.styleTheme;return Object(h.jsxs)("div",{className:"element "+("light"===c?"":"darkMode")+" "+f.a.search,children:[Object(h.jsxs)("svg",{fill:"#000000",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",width:"18px",height:"18px",children:[" ",Object(h.jsx)("path",{d:"M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"})]}),Object(h.jsx)("input",{type:"text",className:"light"===c?"":"darkMode",placeholder:"Search for a country...",value:t,onChange:n})]})}var w=n(9),y=n.n(w);function _(e){var t=e.params,n=e.styleTheme,i=function(e){var t=Object(s.useState)([]),n=Object(c.a)(t,2),i=n[0],r=n[1],a=Object(s.useState)([]),l=Object(c.a)(a,2),j=l[0],h=l[1],o=Object(s.useState)(""),d=Object(c.a)(o,2),u=d[0],b=d[1];return Object(s.useEffect)((function(){var t="";t=e?"https://restcountries.com/v3.1/region/".concat(e):"https://restcountries.com/v3.1/all",t+="?fields=name,flags,capital,population,region",fetch(t).then((function(e){return e.json()})).then((function(e){b(""),r(e),h(e)}))}),[e]),[j,function(e){b(e.target.value),h(i.filter((function(t){return t.name.common.toLowerCase().includes(e.target.value.toLowerCase())})))},u]}(t.region),r=Object(c.a)(i,3),a=r[0],l=r[1],j=r[2];return Object(h.jsxs)("main",{className:y.a.Home,children:[Object(h.jsx)(v,{inputSearch:j,onChange:l,styleTheme:n}),Object(h.jsx)(p,{styleTheme:n}),Object(h.jsx)("ul",{className:y.a.ulList,children:a.map((function(e){return Object(h.jsx)(O,{countryName:e.name.common,flag:e.flags.svg,population:e.population,region:e.region,capital:e.capital,styleTheme:n},e.name.common)}))})]})}n(19);function C(){var e=function(e,t){var n=Object(s.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return console.log(c),t}})),i=Object(c.a)(n,2),r=i[0],a=i[1];return[r,function(t){try{var n=t instanceof Function?t(r):t;a(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){console.log(c)}}]}("styleTheme","light"),t=Object(c.a)(e,2),n=t[0],i=t[1];return"light"!==n&&document.getElementsByTagName("body")[0].classList.add("darkMode"),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d,{styleTheme:n,setStyleTheme:i}),Object(h.jsxs)(a.d,{children:[Object(h.jsx)(a.b,{path:"/region/:region",children:function(e){return Object(h.jsx)(_,{styleTheme:n,params:e})}}),Object(h.jsx)(a.b,{path:"/country/:country",children:function(e){return Object(h.jsx)(o,{styleTheme:n,params:e})}}),Object(h.jsx)(a.b,{path:"/",children:function(){return Object(h.jsx)(_,{styleTheme:n,params:{}})}}),Object(h.jsx)(a.b,{children:"404, Not Found!"})]})]})}var M=function(){return window.location.hash.replace(/^#/,"")||"/"},L=function(e){return window.location.hash=e};r.a.render(Object(h.jsx)(s.StrictMode,{children:Object(h.jsx)(a.c,{hook:function(){var e=Object(s.useState)(M()),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){var e=function(){return i(M())};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[n,L]},children:Object(h.jsx)(C,{})})}),document.getElementById("app"))}],[[20,1,2]]]);
//# sourceMappingURL=main.1c323fd1.chunk.js.map