const p=function(n){if(n==null)return j;if(typeof n=="string")return b(n);if(typeof n=="object")return Array.isArray(n)?g(n):x(n);if(typeof n=="function")return f(n);throw new Error("Expected function, string, or object as test")};function g(n){const r=[];let t=-1;for(;++t<n.length;)r[t]=p(n[t]);return f(e);function e(...i){let l=-1;for(;++l<r.length;)if(r[l].call(this,...i))return!0;return!1}}function x(n){return f(r);function r(t){let e;for(e in n)if(t[e]!==n[e])return!1;return!0}}function b(n){return f(r);function r(t){return t&&t.type===n}}function f(n){return r;function r(t,...e){return!!(t&&typeof t=="object"&&"type"in t&&n.call(this,t,...e))}}function j(){return!0}const F={}.hasOwnProperty,k=function(n,r,t){const e=p(t||r),i=r&&typeof r=="object"&&"cascade"in r?r.cascade:void 0,l=i??!0;return h(n);function h(c,d,w){const o=[];if(!e(c,d,w))return null;if(c.children){let a=-1;for(;++a<c.children.length;){const s=h(c.children[a],a,c);s&&o.push(s)}if(l&&c.children.length>0&&o.length===0)return null}const y={};let u;for(u in c)F.call(c,u)&&(y[u]=u==="children"?o:c[u]);return y}};export{k as f};
