import{a as u}from"./@algolia-6bb98d1b.js";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var f=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function b(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function p(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var s={},r=0;r<10;r++)s["_"+String.fromCharCode(r)]=r;var o=Object.getOwnPropertyNames(s).map(function(e){return s[e]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var j=p()?Object.assign:function(t,s){for(var r,o=b(t),n,e=1;e<arguments.length;e++){r=Object(arguments[e]);for(var c in r)i.call(r,c)&&(o[c]=r[c]);if(f){n=f(r);for(var a=0;a<n.length;a++)l.call(r,n[a])&&(o[n[a]]=r[n[a]])}}return o};const g=u(j);export{g as r};
