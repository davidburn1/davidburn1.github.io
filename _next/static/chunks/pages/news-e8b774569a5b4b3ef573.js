_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(a.AmpStateContext))};var i,r=(i=n("q1tI"))&&i.__esModule?i:{default:i},a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,a=e.hasQuery,o=void 0!==a&&a;return n||r&&o}},"7W2i":function(e,t,n){var i=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(i=n("Xuae"))&&i.__esModule?i:{default:i},o=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var a=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,u=h.length;c<u;c++){var l=h[c];if(r.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var p=r.props[l],d=i[l]||new Set;"name"===l&&o||!d.has(p)?(d.add(p),i[l]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),i=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:d,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},Kr8L:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));for(var i=n("nKUr"),r=(n("g4pe"),n("YFqc")),a=n.n(r),o=n("OMhl"),s=n("SGT+"),c=n("fT4x"),u={},l=0;l<c.length;l++)u[c[l].key]=c[l];function p(){return Object(i.jsxs)("section",{className:"container",children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),s.map((function(e,t){var n=Object(o.a)(u[e.publication].title);return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-sm-3",children:Object(i.jsx)("img",{class:"rounded img-fluid img-thumbnail",src:"/images/news/{d.key}.png",alt:"{d.title}"})}),Object(i.jsx)("div",{className:"col-sm-9 d-flex flex-column justify-content-between",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:Object(i.jsx)(a.a,{href:e.link,children:e.title})}),e.publisher,Object(i.jsx)("br",{}),Object(i.jsx)(a.a,{href:"publications/"+e.publication,children:Object(i.jsx)("a",{dangerouslySetInnerHTML:{__html:n}})})]}),Object(i.jsx)("br",{})]})}),Object(i.jsx)("div",{className:"col-sm-12",children:Object(i.jsx)("hr",{})})]},e.key)}))]})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},OMhl:function(e,t,n){"use strict";function i(e){return e=void 0===e?"":e.replace(/\$(.*?)\$/g,(function(e,t,n,i){return(t=(t=(t=t.replace(/_{(.*?)}/g,"<sub>$1</sub>")).replace(/\^{(.*?)}/g,"<sup>$1</sup>")).replace(/_(.)/g,"<sub>$1</sub>")).replace(/\^(.)/g,"<sup>$1</sup>")}))}n.d(t,"a",(function(){return i}))},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var i=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return i(e)||r(e)||a(e)||o()}},"SGT+":function(e){e.exports=JSON.parse('[{"key":"aps_2020_b","publisher":"APS Viewpoints","title":"Shining a Light on Hidden Spin Dynamics","link":"https://physics.aps.org/articles/v13/151","publication":"Burn_PRL_2020"},{"key":"dls_2020_d","publisher":"Diamond Science Highlights","title":"High-speed devices \u2013 What happens beneath the surface?","link":"https://www.diamond.ac.uk/Science/Research/Highlights/2020/High-speed-devices-what-happens-beneath-the-surface-.html","publication":"Burn_PRL_2020"},{"key":"aps_2020","publisher":"APS Viewpoints","title":"Spin Current in an Antiferromagnet is Coherent","link":"https://physics.aps.org/articles/v13/83","publication":"Dabrowski_PRL_2020"},{"key":"dls_2020_c","publisher":"Diamond scientific highlights","title":"Coherent Transfer of Spin Angular Momentum by Evanescent Spin Waves within Antiferromagnetic NiO","link":"https://www.diamond.ac.uk/Science/Research/Highlights/2020/Coherent-Transfer-of-Spin-Angular-Momentum-by-Evanescent-Spin-Waves-within-Antiferromagnetic-NiO.html","publication":"Dabrowski_PRL_2020"},{"key":"als_2020","publisher":"ALS scientific highlights","title":"Antiferromagnet Transmits Coherent Spin Waves","link":"https://als.lbl.gov/antiferromagnet-transmits-coherent-spin-waves/","publication":"Dabrowski_PRL_2020"},{"key":"exeter_2020","publisher":"Exeter science highlights","title":"New breakthrough in \u2018spintronics\u2019 could boost high speed data technology","link":"https://www.exeter.ac.uk/research/news/articles/newbreakthroughinspintron.html","publication":"Dabrowski_PRL_2020"},{"key":"soleil_2020","publisher":"Soleil news","title":"Skyrmions on the surface - A new topological magnetic state discovered by resonant elastic scattering of X-rays on SEXTANTS","link":"https://www.synchrotron-soleil.fr/fr/actualites/des-skyrmions-la-surface-un-nouvel-etat-magnetique-topologique-decouvert-par-diffusion","publication":"Zhang_NanoLett_2020"},{"key":"dls_2020_b","publisher":"Diamond Science Highlights","title":"Discovery of a novel magnetic skyrmion surface state","link":"https://www.diamond.ac.uk/Science/Research/Highlights/2020/discovery-novel-magnetic-skyrmion-surface-state.html","publication":"Zhang_NanoLett_2020"},{"key":"dls_2020","publisher":"Diamond Science Highlights","title":"Picosecond magnetization dynamics of spin modes revealed by diffractive ferromagnetic resonance","link":"https://www.diamond.ac.uk/Science/Research/Highlights/2020/Picosecond-magnetization-dynamics-spin-modes-revealed-diffractive-ferromagnetic-resonance.html","publication":"Burn_NanoLett_2020"},{"key":"dls_2018","publisher":"Diamond Science Highlights","title":"Controlling magnetic skyrmion motion without an electric current","link":"https://www.diamond.ac.uk/Science/Research/Highlights/2018/Controlling-magnetic-skyrmion-motion-without-an-electric-current.html","publication":"Zhang_NComms_2018"},{"key":"imperial_2017","publisher":"Imperial News","title":"New way to write magnetic info could pave the way for hardware neural networks","link":"https://www.imperial.ac.uk/news/183213/new-write-magnetic-info-could-pave/","publication":"Gartside_NNano_2017"},{"key":"nnews_2017","publisher":"news and views from nature Nano","title":"Write it as you like it","link":"https://www.nature.com/articles/s41565-017-0021-y","publication":"Gartside_NNano_2017"},{"key":"dls_2017","publisher":"Diamond science highlights","title":"Magnetic skyrmion lattice domain manipulation enables new memory technology","link":"https://www.diamond.ac.uk/Science/Research/Highlights/2017/Magnetic-skyrmion-lattice-domain-manipulation-enables-new-memory-technology.html","publication":"Zhang_NanoLett_2016"},{"key":"dls_2016","publisher":"Diamond science highlights","title":"Getting a grip on skyrmions","link":"https://www.diamond.ac.uk/Science/Research/Highlights/2016/I10-skyrmions.html","publication":"Zhang_NanoLett_2016"}]')},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),p=function(e){o(n,e);var t=u(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(i(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=p},a1gu:function(e,t,n){var i=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?r(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},jFvI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n("Kr8L")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=r}},[["jFvI",0,2,1,3]]]);