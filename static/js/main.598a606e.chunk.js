(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{62:function(e,a,t){e.exports=t(94)},67:function(e,a,t){},88:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(27),c=t.n(r),o=(t(67),t(24)),s=t(5),m=t(57),u=(t(68),t(21)),i=t.n(u),d=t(60),E=t(22),h=t(25),v=t(23),p=(t(88),t(89),t(50));var g=function(){return l.a.createElement(p.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Donate With Crypto"),l.a.createElement("th",null,"Address"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"BTC"),l.a.createElement("td",null,"Coming Soon")),l.a.createElement("tr",null,l.a.createElement("td",null,"ETH"),l.a.createElement("td",null,"Coming Soon")),l.a.createElement("tr",null,l.a.createElement("td",null,"LTC"),l.a.createElement("td",null,"Coming Soon"))))},x=t(15),y=t(56),f=t(61),T=t(55);var b=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),u=Object(o.a)(c,2),p=u[0],b=u[1],C=Object(n.useState)([]),w=Object(o.a)(C,2),S=w[0],k=w[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),B=O[0],L=O[1];Object(n.useEffect)((function(){i.a.all([i.a.get("https://corona.lmao.ninja/v2/all"),i.a.get("https://corona.lmao.ninja/v2/countries"),i.a.get("https://corona.lmao.ninja/v2/countries/USA")]).then((function(e){r(e[0].data),b(e[1].data),k(e[2].data)})).catch((function(e){console.log(e)}))}),[]);var N=new Date(parseInt(t.updated)).toString(),D=p.filter((function(e){return""!==B?e.country.includes(B):e})).map((function(e,a){return l.a.createElement(s.a,{key:a,bg:"light",text:"dark",className:"text-center",style:{margin:"10px"}},l.a.createElement(s.a.Img,{variant:"top",src:e.countryInfo.flag}),l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,e.country),l.a.createElement(s.a.Text,null,"Cases ",e.cases),l.a.createElement(s.a.Text,null,"Deaths ",e.deaths),l.a.createElement(s.a.Text,null,"Recovered ",e.recovered),l.a.createElement(s.a.Text,null,"Today's Cases ",e.todayCases),l.a.createElement(s.a.Text,null,"Today's Deaths ",e.todayDeaths),l.a.createElement(s.a.Text,null,"Active ",e.active),l.a.createElement(s.a.Text,null,"Critical ",e.critical)))}));return l.a.createElement("div",null,l.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},l.a.createElement(h.a.Brand,{href:"./"},"Covid 19 Tracker"),l.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav"},l.a.createElement(v.a,{className:"mr-auto"},l.a.createElement(v.a.Link,{href:"#features"},"Home"),l.a.createElement(v.a.Link,{href:"#donate"},"Donate"),l.a.createElement(v.a.Link,{href:"https://github.com/sell/covid-Tracker"},"Github ",l.a.createElement(T.a,{variant:"success"},"Source Code")," ")))),l.a.createElement("div",{className:"body"},l.a.createElement(f.a,{className:"container",variant:"danger"},"United States Currently has the most cases with ",S.cases),l.a.createElement(y.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,{className:"text-center",bg:"secondary",text:"white",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Total Cases"),l.a.createElement(s.a.Text,null,t.cases)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",N))),l.a.createElement(s.a,{className:"text-center",bg:"danger",text:"white",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Total Deaths"),l.a.createElement(s.a.Text,null,t.deaths)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",N))),l.a.createElement(s.a,{className:"text-center",bg:"success",text:"white",style:{margin:"10px"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Total Recovered"),l.a.createElement(s.a.Text,null,t.recovered)),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",N)))),l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"formGroupSearch"},l.a.createElement(E.a.Label,null,"Seach a Country (capitalize first letter, working on a fix)"),l.a.createElement(E.a.Control,{type:"text",className:"search",placeholder:"Search a Country",onChange:function(e){return L(e.target.value)}}))),l.a.createElement(d.a,{queries:[{columns:2,query:"min-width: 500px"},{columns:3,query:"min-width: 1000px"}]},D),l.a.createElement("div",{id:"#donate"},l.a.createElement(x.a,{exact:!0,path:"/donate",component:g})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(35);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C.a,null,l.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.598a606e.chunk.js.map