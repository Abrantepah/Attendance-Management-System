/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var v;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(v||(v={}));const O="popstate";function se(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:l,hash:o}=r.location;return I("",{pathname:i,search:l,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:M(a)}return k(t,n,null,e)}function y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function C(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V(){return Math.random().toString(36).substr(2,8)}function j(e,t){return{usr:e.state,key:e.key,idx:t}}function I(e,t,n,r){return n===void 0&&(n=null),x({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?$(t):t,{state:n,key:t&&t.key||r||V()})}function M(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function $(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function k(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,o=v.Pop,s=null,c=u();c==null&&(c=0,l.replaceState(x({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function p(){o=v.Pop;let h=u(),f=h==null?null:h-c;c=h,s&&s({action:o,location:m.location,delta:f})}function g(h,f){o=v.Push;let d=I(m.location,h,f);n&&n(d,h),c=u()+1;let R=j(d,c),P=m.createHref(d);try{l.pushState(R,"",P)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;a.location.assign(P)}i&&s&&s({action:o,location:m.location,delta:1})}function E(h,f){o=v.Replace;let d=I(m.location,h,f);n&&n(d,h),c=u();let R=j(d,c),P=m.createHref(d);l.replaceState(R,"",P),i&&s&&s({action:o,location:m.location,delta:0})}function w(h){let f=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof h=="string"?h:M(h);return d=d.replace(/ $/,"%20"),y(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let m={get action(){return o},get location(){return e(a,l)},listen(h){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(O,p),s=h,()=>{a.removeEventListener(O,p),s=null}},createHref(h){return t(a,h)},createURL:w,encodeLocation(h){let f=w(h);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:E,go(h){return l.go(h)}};return m}var b;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(b||(b={}));function oe(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?$(t):t,a=Z(r.pathname||"/",n);if(a==null)return null;let i=U(e);A(i);let l=null;for(let o=0;l==null&&o<i.length;++o){let s=Y(a);l=K(i[o],s)}return l}function U(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,o)=>{let s={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=S([r,s.relativePath]),u=n.concat(s);i.children&&i.children.length>0&&(y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),U(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:G(c,i.index),routesMeta:u})};return e.forEach((i,l)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,l);else for(let s of H(i.path))a(i,l,s)}),t}function H(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=H(r.join("/")),o=[];return o.push(...l.map(s=>s===""?i:[i,s].join("/"))),a&&o.push(...l),o.map(s=>e.startsWith("/")&&s===""?"/":s)}function A(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const N=/^:[\w-]+$/,z=3,_=2,q=1,D=10,F=-2,L=e=>e==="*";function G(e,t){let n=e.split("/"),r=n.length;return n.some(L)&&(r+=F),t&&(r+=_),n.filter(a=>!L(a)).reduce((a,i)=>a+(N.test(i)?z:i===""?q:D),r)}function J(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function K(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let l=0;l<n.length;++l){let o=n[l],s=l===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",u=Q({path:o.relativePath,caseSensitive:o.caseSensitive,end:s},c);if(!u)return null;Object.assign(r,u.params);let p=o.route;i.push({params:r,pathname:S([a,u.pathname]),pathnameBase:ae(S([a,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(a=S([a,u.pathnameBase]))}return i}function Q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:r.reduce((c,u,p)=>{let{paramName:g,isOptional:E}=u;if(g==="*"){let m=o[p]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const w=o[p];return E&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function X(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),C(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,s)=>(r.push({paramName:o,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Y(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return C(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ee(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?$(e):e;return{pathname:n?n.startsWith("/")?n:te(n,t):t,search:re(r),hash:ie(a)}}function te(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function B(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ne(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ce(e,t){let n=ne(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function he(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=$(e):(a=x({},e),y(!a.pathname||!a.pathname.includes("?"),B("?","pathname","search",a)),y(!a.pathname||!a.pathname.includes("#"),B("#","pathname","hash",a)),y(!a.search||!a.search.includes("#"),B("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,o;if(l==null)o=n;else{let p=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}o=p>=0?t[p]:"/"}let s=ee(a,o),c=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const S=e=>e.join("/").replace(/\/\/+/g,"/"),ae=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),re=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ue(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T=["post","put","patch","delete"];new Set(T);const le=["get",...T];new Set(le);export{v as A,oe as a,ue as b,se as c,M as d,ce as g,y as i,S as j,Q as m,$ as p,he as r,Z as s};
