import{a as x}from"./@algolia-6bb98d1b.js";var o={exports:{}};(function(l,m){function n(c){let e=[],i;for(let s of c.split(",").map(u=>u.trim()))if(/^-?\d+$/.test(s))e.push(parseInt(s,10));else if(i=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[u,r,p,t]=i;if(r&&t){r=parseInt(r),t=parseInt(t);const f=r<t?1:-1;(p==="-"||p===".."||p==="‥")&&(t+=f);for(let a=r;a!==t;a+=f)e.push(a)}}return e}m.default=n,l.exports=n})(o,o.exports);var h=o.exports;const g=x(h);export{g as n};
