(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{2734:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}}),n(7294);var r=n(6682),i=n(247),o=n(606);function u(){let e=(0,r.Z)(i.Z);return e[o.Z]||e}},4502:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7462),i=n(6682),o=n(247),u=n(606);function c({props:e,name:t}){return function({props:e,name:t,defaultTheme:n,themeId:o}){let u=(0,i.Z)(n);o&&(u=u[o]||u);let c=function(e){let{theme:t,name:n,props:i}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?function e(t,n){let i=(0,r.Z)({},n);return Object.keys(t).forEach(o=>{if(o.toString().match(/^(components|slots)$/))i[o]=(0,r.Z)({},t[o],i[o]);else if(o.toString().match(/^(componentsProps|slotProps)$/)){let u=t[o]||{},c=n[o];i[o]={},c&&Object.keys(c)?u&&Object.keys(u)?(i[o]=(0,r.Z)({},c),Object.keys(u).forEach(t=>{i[o][t]=e(u[t],c[t])})):i[o]=c:i[o]=u}else void 0===i[o]&&(i[o]=t[o])}),i}(t.components[n].defaultProps,i):i}({theme:u,name:t,props:e});return c}({props:e,name:t,defaultTheme:o.Z,themeId:u.Z})}},6682:function(e,t,n){"use strict";var r=n(6500),i=n(4168);let o=(0,r.Z)();t.Z=function(e=o){return(0,i.Z)(e)}},4168:function(e,t,n){"use strict";var r=n(7294),i=n(2443);t.Z=function(e=null){let t=r.useContext(i.T);return t&&0!==Object.keys(t).length?t:e}},7078:function(e,t){"use strict";let n;let r=e=>e,i=(n=r,{configure(e){n=e},generate:e=>n(e),reset(){n=r}});t.Z=i},4780:function(e,t,n){"use strict";function r(e,t,n){let r={};return Object.keys(e).forEach(i=>{r[i]=e[i].reduce((e,r)=>{if(r){let i=t(r);""!==i&&e.push(i),n&&n[r]&&e.push(n[r])}return e},[]).join(" ")}),r}n.d(t,{Z:function(){return r}})},4867:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7078);let i={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function o(e,t,n="Mui"){let o=i[t];return o?`${n}-${o}`:`${r.Z.generate(e)}-${t}`}},1588:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(4867);function i(e,t,n="Mui"){let i={};return t.forEach(t=>{i[t]=(0,r.Z)(e,t,n)}),i}},6010:function(e,t,n){"use strict";t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r);else for(n in t)t[n]&&(i&&(i+=" "),i+=n)}return i}(e))&&(r&&(r+=" "),r+=t);return r}},219:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reverseComps/ReverseAnswerContainer",function(){return n(6369)}])},6369:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893);n(9008);var i=n(7357),o=n(6886);function u(e){var t,n;return(0,r.jsx)(i.Z,{sx:{height:100,width:800},children:(0,r.jsx)(o.ZP,{m:0,p:0,container:!0,alignItems:"center",spacing:2,children:(t=e.info,n=e.answer,t?t.map((e,t)=>(0,r.jsx)(o.ZP,{container:!0,sx:{paddingLeft:"0px",paddingRight:"34px"},xs:"auto",children:(0,r.jsx)(i.Z,{m:0,p:0,sx:{backgroundColor:n[t]===e?"rgba(0, 255, 0, 0.4)":"rgba(255, 0, 0, 0.4)",height:100,width:100,textAlign:"center",outlineStyle:"solid",outlineColor:"black",borderRadius:"5px"},children:(0,r.jsx)("p",{children:e})})},t)):"Loading...")})})}}},function(e){e.O(0,[774,890,642,888,179],function(){return e(e.s=219)}),_N_E=e.O()}]);