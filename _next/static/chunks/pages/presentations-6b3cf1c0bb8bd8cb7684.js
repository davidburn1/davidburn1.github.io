_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{G1Mz:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/presentations",function(){return t("bl5n")}])},OMhl:function(e,n,t){"use strict";function r(e){return e=void 0===e?"":e.replace(/\$(.*?)\$/g,(function(e,n,t,r){return(n=(n=(n=n.replace(/_{(.*?)}/g,"<sub>$1</sub>")).replace(/\^{(.*?)}/g,"<sup>$1</sup>")).replace(/_(.)/g,"<sub>$1</sub>")).replace(/\^(.)/g,"<sup>$1</sup>")}))}t.d(n,"a",(function(){return r}))},YFqc:function(e,n,t){e.exports=t("cTJO")},bl5n:function(e,n,t){"use strict";t.r(n),t.d(n,"__N_SSG",(function(){return a})),t.d(n,"default",(function(){return i}));var r=t("nKUr"),c=t("YFqc"),o=t.n(c),s=t("OMhl"),a=!0;function i(e){var n=e.presentationData;return Object(r.jsxs)("section",{className:"container",children:[Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),n.map((function(e,n){var t=Object(s.a)(e.title);return Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{"scroll-to":"selectedKey==p.key"}),Object(r.jsx)("div",{className:"col-sm-3",children:Object(r.jsx)("img",{className:"rounded img-fluid img-thumbnail",src:"/images/presentations/"+e.key+".jpg",alt:"{p.title}"})}),Object(r.jsx)("div",{className:"col-sm-9 d-flex flex-column justify-content-between",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:Object(r.jsx)(o.a,{href:"/presentations/"+e.key,children:Object(r.jsx)("a",{dangerouslySetInnerHTML:{__html:t}})})}),Object(r.jsx)("p",{children:Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:e.authors}})}),Object(r.jsxs)("p",{children:[" ",Object(r.jsx)("i",{children:e.conference})," ",e.location," ",Object(r.jsx)("b",{children:e.date})," "]})]})}),Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsx)("hr",{})})]},e.key)}))]})}},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),c=t("284h");n.__esModule=!0,n.default=void 0;var o=c(t("q1tI")),s=t("elyg"),a=t("nOHt"),i=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,s.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),c=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,s.resolveHref)(c,e.href,!0),t=r(n,2),o=t[0],a=t[1];return{href:o,as:e.as?(0,s.resolveHref)(c,e.as):a||o}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,j=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var g=o.Children.only(v),O=g&&"object"===typeof g&&g.ref,y=(0,i.useIntersection)({rootMargin:"200px"}),_=r(y,2),x=_[0],w=_[1],M=o.default.useCallback((function(e){x(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,x]);(0,o.useEffect)((function(){var e=w&&n&&(0,s.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(t,d,p,{locale:r})}),[p,d,w,m,n,t]);var N={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:o,locale:i,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,t,d,p,b,h,j,m)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var E="undefined"!==typeof m?m:t&&t.locale,L=t&&t.isLocaleDomain&&(0,s.getDomainLocale)(p,E,t&&t.locales,t&&t.domainLocales);N.href=L||(0,s.addBasePath)((0,s.addLocale)(p,E,t&&t.defaultLocale))}return o.default.cloneElement(g,N)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,i=(0,c.useRef)(),l=(0,c.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,o=r.observer,s=r.elements;return s.set(e,n),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),a.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){if(!s&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=t("q1tI"),o=t("0G5g"),s="undefined"!==typeof IntersectionObserver;var a=new Map}},[["G1Mz",0,2,1]]]);