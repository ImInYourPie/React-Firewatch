(this["webpackJsonpreact-firewatch"]=this["webpackJsonpreact-firewatch"]||[]).push([[0],{34:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),s=c.n(r),a=c(12),o=c.n(a),i=(c(34),c(15)),l=c.n(i),u=c(24),j=c(5),d=c(25),b=c.n(d),m=(c(53),c(9)),f=(c(54),function(){return Object(n.jsxs)("div",{className:"brand-container",children:[Object(n.jsx)("h1",{children:"Firewatch"}),Object(n.jsxs)("span",{children:[Object(n.jsx)("a",{href:"https://iminyourpie.github.io/Portfolio/",target:"_blank",rel:"noreferrer",children:"Miguel Melo"})," ","- Powered by NASA"]}),Object(n.jsxs)("div",{className:"icon-container",children:[Object(n.jsx)("a",{className:"icon-link",href:"https://github.com/ImInYourPie",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(m.b,{id:"github",size:"24px",color:"#888"})}),Object(n.jsx)("a",{className:"icon-link",href:"https://www.linkedin.com/in/dmiguelmelo/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(m.c,{id:"linkedin",size:"24px",color:"#888"})}),Object(n.jsx)("a",{className:"icon-link",href:"https://www.facebook.com/mutts30/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)(m.a,{id:"facebook",size:"24px",color:"#888"})})]})]})}),h=(c(55),function(e){var t=e.index,c=e.title,r=e.date,s=e.source,a=e.onItemClick;return Object(n.jsxs)("div",{className:"event-card",onClick:function(e){return a(t)},children:[Object(n.jsx)("h4",{className:"card-title",children:c}),Object(n.jsx)("p",{className:"card-text",children:r}),Object(n.jsxs)("p",{className:"card-text",children:["Source:"," ",Object(n.jsx)("a",{href:s.url,target:"_blank",rel:"noreferrer",children:s.id})]})]})}),p=c(13),O=c.n(p),x=function(e){var t=e.events,c=e.onItemClick,r=t.map((function(e,t){var r=e.id,s=e.title,a=O()(e.geometries[0].date).format("LLL"),o=e.geometries[0].coordinates[1],i=e.geometries[0].coordinates[0],l={id:e.sources[0].id,url:e.sources[0].url};return Object(n.jsx)(h,{index:t,id:r,lat:o,lng:i,title:s,date:a,source:l,onItemClick:c},t)}));return Object(n.jsxs)("div",{className:"aside",children:[Object(n.jsx)(f,{}),Object(n.jsx)("hr",{className:"ruler"}),Object(n.jsx)("div",{className:"event-feed",children:r})]})},g=(c(57),function(){return Object(n.jsxs)("div",{className:"loader-container",children:[Object(n.jsx)("div",{className:"loader"}),";"]})}),v=c(26),k=c(8),N=c.n(k),w=c(65),S=c(66),I=c(3),z=c.n(I),L=(c(59),c(63)),y=c(64),P=(c(60),function(e){var t=e.index,c=e.lat,s=e.lng,a=e.customMarkerIcon,o=e.title,i=e.date,l=e.source,u=e.openPopup,j=Object(r.useRef)(null);return Object(r.useEffect)((function(){j.current.leafletElement&&u&&j.current.leafletElement.openPopup()}),[u]),Object(n.jsx)(L.a,{className:"marker",position:[c,s],icon:a,ref:j,children:Object(n.jsxs)(y.a,{className:"popup",children:[Object(n.jsx)("h3",{cl:!0,children:o}),Object(n.jsx)("p",{className:"popup-text",children:i}),Object(n.jsxs)("p",{className:"popup-text",children:["Source:"," ",Object(n.jsx)("a",{href:l.url,target:"_blank",rel:"noreferrer",children:l.id})]})]})},t)}),C=(c(61),function(e){var t=e.events,c=e.center,r=e.zoom,s=e.selectedIndex,a=z.a.latLng(-90,-200),o=z.a.latLng(90,200),i=z.a.latLngBounds(a,o),l=Object(v.renderToStaticMarkup)(Object(n.jsx)(m.d,{className:"event-icon",size:"1.5rem",color:"#ff9a00"})),u=Object(I.divIcon)({html:l,popupAnchor:[5,0]}),j=t.map((function(e,t){var c=e.id,r=e.title,a=O()(e.geometries[0].date).format("LLL"),o=e.geometries[0].coordinates[1],i=e.geometries[0].coordinates[0],l={id:e.sources[0].id,url:e.sources[0].url};return Object(n.jsx)(P,{id:c,title:r,date:a,lat:o,lng:i,source:l,customMarkerIcon:u,openPopup:s===t},t)}));return Object(n.jsxs)(w.a,{className:"map",center:c,zoom:r,maxBoundsViscosity:1,maxBounds:i,scrollWheelZoom:N.a.isScrollZoom,children:[Object(n.jsx)(S.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}",accessToken:N.a.key}),j]})});var E=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!1),o=Object(j.a)(a,2),i=o[0],d=o[1],m=Object(r.useState)(N.a.center),f=Object(j.a)(m,2),h=f[0],p=(f[1],Object(r.useState)(N.a.zoom)),O=Object(j.a)(p,2),v=O[0],k=(O[1],Object(r.useState)(null)),w=Object(j.a)(k,2),S=w[0],I=w[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,b.a.get("https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/8");case 3:t=e.sent,c=t.data.events,s(c),d(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(x,{className:"Aside",events:c,onItemClick:function(e){I(e)}}),i?Object(n.jsx)(g,{}):Object(n.jsx)(C,{className:"Map",events:c,center:h,zoom:v,selectedIndex:S})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),M()},8:function(e,t){e.exports={key:"Y7QtZEREPebwY37sqj20ntOwxB3fEd8wWk8VHWOCPrwhOHQ53m0y4zlJ5eD6tWvQ",center:{lat:42.3265,lng:-122.8756},zoom:3,isScrollZoom:!0}}},[[62,1,2]]]);
//# sourceMappingURL=main.faaff58e.chunk.js.map