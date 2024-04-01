import{e as g}from"./mdurl-bfa3a10b.js";import{u as p}from"./unist-builder-069018de.js";import{u as z}from"./unist-util-visit-parents-a8973bb3.js";import{u as K}from"./unist-util-generated-8c2ee601.js";import{m as M}from"./mdast-util-definitions-f967f126.js";var X=x,$=z,A=$.CONTINUE,V=$.SKIP,F=$.EXIT;x.CONTINUE=A;x.SKIP=V;x.EXIT=F;function x(t,e,r,a){typeof e=="function"&&typeof r!="function"&&(a=r,r=e,e=null),$(t,e,n,a);function n(f,l){var u=l[l.length-1],i=u?u.children.indexOf(f):null;return r(f,i,u)}}var B=H("start"),C=H("end"),U=_;_.start=B;_.end=C;function _(t){return{start:B(t),end:C(t)}}function H(t){return e.displayName=t,e;function e(r){var a=r&&r.position&&r.position[t]||{};return{line:a.line||null,column:a.column||null,offset:isNaN(a.offset)?null:a.offset}}}var y,I;function c(){if(I)return y;I=1,y=e;var t=D();function e(r,a){for(var n=a.children||[],f=n.length,l=[],u=-1,i,o;++u<f;)i=t(r,n[u],a),i&&(u&&n[u-1].type==="break"&&(i.value&&(i.value=i.value.replace(/^\s+/,"")),o=i.children&&i.children[0],o&&o.value&&(o.value=o.value.replace(/^\s+/,""))),l=l.concat(i));return l}return y}var w,O;function D(){if(O)return w;O=1,w=n;var t=p,e=c(),r={}.hasOwnProperty;function a(u,i){return f(i)?u.augment(i,t("text",i.value)):u(i,"div",e(u,i))}function n(u,i,o){var s=i&&i.type,v;if(!s)throw new Error("Expected node, got `"+i+"`");return r.call(u.handlers,s)?v=u.handlers[s]:u.passThrough&&u.passThrough.indexOf(s)>-1?v=l:v=u.unknownHandler,(typeof v=="function"?v:a)(u,i,o)}function f(u){var i=u.data||{};return r.call(i,"hName")||r.call(i,"hProperties")||r.call(i,"hChildren")?!1:"value"in u}function l(u,i){var o;return i.children?(o=Object.assign({},i),o.children=e(u,i),o):i}return w}var q=G;function G(t,e){return t(e,"hr")}var d=W,k=p;function W(t,e){var r=[],a=-1,n=t.length;for(e&&r.push(k("text",`
`));++a<n;)a&&r.push(k("text",`
`)),r.push(t[a]);return e&&t.length>0&&r.push(k("text",`
`)),r}var E=Y,J=d,Q=c();function Y(t,e){var r={},a=e.ordered?"ol":"ul",n,f=-1,l;for(typeof e.start=="number"&&e.start!==1&&(r.start=e.start),n=Q(t,e),l=n.length;++f<l;)if(n[f].properties.className&&n[f].properties.className.indexOf("task-list-item")!==-1){r.className=["contains-task-list"];break}return t(e,a,r,J(n,!0))}var Z=ae,ee=q,te=E,re=d;function ae(t){for(var e=t.footnoteById,r=t.footnoteOrder,a=r.length,n=-1,f=[],l,u,i,o;++n<a;)l=e[r[n].toUpperCase()],l&&(i=l.children.concat(),o=i[i.length-1],u={type:"link",url:"#fnref-"+l.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]},(!o||o.type!=="paragraph")&&(o={type:"paragraph",children:[]},i.push(o)),o.children.push(u),f.push({type:"listItem",data:{hProperties:{id:"fn-"+l.identifier}},children:i,position:l.position}));return f.length===0?null:t(null,"div",{className:["footnotes"]},re([ee(t),te(t,{type:"list",ordered:!0,children:f})],!0))}var ne=oe,ie=d,le=c();function oe(t,e){return t(e,"blockquote",ie(le(t,e),!0))}var ue=se,fe=p;function se(t,e){return[t(e,"br"),fe("text",`
`)]}var ve=pe,ce=p;function pe(t,e){var r=e.value?e.value+`
`:"",a=e.lang&&e.lang.match(/^[^ \t]+(?=[ \t]|$)/),n={},f;return a&&(n.className=["language-"+a]),f=t(e,"code",n,[ce("text",r)]),e.meta&&(f.data={meta:e.meta}),t(e.position,"pre",[f])}var de=me,he=c();function me(t,e){return t(e,"del",he(t,e))}var ge=xe,$e=c();function xe(t,e){return t(e,"em",$e(t,e))}var S=we,ye=p;function we(t,e){var r=t.footnoteOrder,a=String(e.identifier);return r.indexOf(a)===-1&&r.push(a),t(e.position,"sup",{id:"fnref-"+a},[t(e,"a",{href:"#fn-"+a,className:["footnote-ref"]},[ye("text",e.label||a)])])}var ke=Ne,be=S;function Ne(t,e){for(var r=t.footnoteById,a=t.footnoteOrder,n=1;n in r;)n++;return n=String(n),a.push(n),r[n]={type:"footnoteDefinition",identifier:n,children:[{type:"paragraph",children:e.children}],position:e.position},be(t,{type:"footnoteReference",identifier:n,position:e.position})}var _e=Oe,Ie=c();function Oe(t,e){return t(e,"h"+e.depth,Ie(t,e))}var Re=Pe,Te=p;function Pe(t,e){return t.dangerous?t.augment(e,Te("raw",e.value)):null}var L=Ce,b=p,Be=c();function Ce(t,e){var r=e.referenceType,a="]",n,f,l;return r==="collapsed"?a+="[]":r==="full"&&(a+="["+(e.label||e.identifier)+"]"),e.type==="imageReference"?b("text","!["+e.alt+a):(n=Be(t,e),f=n[0],f&&f.type==="text"?f.value="["+f.value:n.unshift(b("text","[")),l=n[n.length-1],l&&l.type==="text"?l.value+=a:n.push(b("text",a)),n)}var Ue=qe,He=g,De=L;function qe(t,e){var r=t.definition(e.identifier),a;return r?(a={src:He(r.url||""),alt:e.alt},r.title!==null&&r.title!==void 0&&(a.title=r.title),t(e,"img",a)):De(t,e)}var Ee=g,Se=Le;function Le(t,e){var r={src:Ee(e.url),alt:e.alt};return e.title!==null&&e.title!==void 0&&(r.title=e.title),t(e,"img",r)}var je=Ke,ze=p;function Ke(t,e){var r=e.value.replace(/\r?\n|\r/g," ");return t(e,"code",[ze("text",r)])}var Me=Fe,Xe=g,Ae=L,Ve=c();function Fe(t,e){var r=t.definition(e.identifier),a;return r?(a={href:Xe(r.url||"")},r.title!==null&&r.title!==void 0&&(a.title=r.title),t(e,"a",a,Ve(t,e))):Ae(t,e)}var Ge=g,We=c(),Je=Qe;function Qe(t,e){var r={href:Ge(e.url)};return e.title!==null&&e.title!==void 0&&(r.title=e.title),t(e,"a",r,We(t,e))}var Ye=et,N=p,Ze=c();function et(t,e,r){var a=Ze(t,e),n=a[0],f=r?tt(r):j(e),l={},u=[],i,o,s;for(typeof e.checked=="boolean"&&((!n||n.tagName!=="p")&&(n=t(null,"p",[]),a.unshift(n)),n.children.length>0&&n.children.unshift(N("text"," ")),n.children.unshift(t(null,"input",{type:"checkbox",checked:e.checked,disabled:!0})),l.className=["task-list-item"]),i=a.length,o=-1;++o<i;)s=a[o],(f||o!==0||s.tagName!=="p")&&u.push(N("text",`
`)),s.tagName==="p"&&!f?u=u.concat(s.children):u.push(s);return i&&(f||s.tagName!=="p")&&u.push(N("text",`
`)),t(e,"li",l,u)}function tt(t){for(var e=t.spread,r=t.children,a=r.length,n=-1;!e&&++n<a;)e=j(r[n]);return e}function j(t){var e=t.spread;return e??t.children.length>1}var rt=nt,at=c();function nt(t,e){return t(e,"p",at(t,e))}var it=ft,lt=p,ot=d,ut=c();function ft(t,e){return t.augment(e,lt("root",ot(ut(t,e))))}var st=ct,vt=c();function ct(t,e){return t(e,"strong",vt(t,e))}var pt=ht,R=U,h=d,dt=c();function ht(t,e){for(var r=e.children,a=r.length,n=e.align||[],f=n.length,l=[],u,i,o,s,v;a--;){for(i=r[a].children,s=a===0?"th":"td",u=f||i.length,o=[];u--;)v=i[u],o[u]=t(v,s,{align:n[u]},v?dt(t,v):[]);l[a]=t(r[a],"tr",h(o,!0))}return t(e,"table",h([t(l[0].position,"thead",h([l[0]],!0))].concat(l[1]?t({start:R.start(l[1]),end:R.end(l[l.length-1])},"tbody",h(l.slice(1),!0)):[]),!0))}var mt=$t,gt=p;function $t(t,e){return t.augment(e,gt("text",String(e.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g,"$1")))}var xt={blockquote:ne,break:ue,code:ve,delete:de,emphasis:ge,footnoteReference:S,footnote:ke,heading:_e,html:Re,imageReference:Ue,image:Se,inlineCode:je,linkReference:Me,link:Je,listItem:Ye,list:E,paragraph:rt,root:it,strong:st,table:pt,text:mt,thematicBreak:q,toml:m,yaml:m,definition:m,footnoteDefinition:m};function m(){return null}var yt=Pt,wt=p,kt=X,T=U,bt=K,Nt=M,_t=D(),It=Z,Ot=xt,Rt={}.hasOwnProperty,P=!1;function Tt(t,e){var r=e||{};r.allowDangerousHTML!==void 0&&!P&&(P=!0,console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));var a=r.allowDangerousHtml||r.allowDangerousHTML,n={};return l.dangerous=a,l.definition=Nt(t),l.footnoteById=n,l.footnoteOrder=[],l.augment=f,l.handlers=Object.assign({},Ot,r.handlers),l.unknownHandler=r.unknownHandler,l.passThrough=r.passThrough,kt(t,"footnoteDefinition",u),l;function f(i,o){var s,v;return i&&i.data&&(s=i.data,s.hName&&(o.type!=="element"&&(o={type:"element",tagName:"",properties:{},children:[]}),o.tagName=s.hName),o.type==="element"&&s.hProperties&&(o.properties=Object.assign({},o.properties,s.hProperties)),o.children&&s.hChildren&&(o.children=s.hChildren)),v=i&&i.position?i:{position:i},bt(v)||(o.position={start:T.start(v),end:T.end(v)}),o}function l(i,o,s,v){return v==null&&typeof s=="object"&&"length"in s&&(v=s,s={}),f(i,{type:"element",tagName:o,properties:s||{},children:v||[]})}function u(i){var o=String(i.identifier).toUpperCase();Rt.call(n,o)||(n[o]=i)}}function Pt(t,e){var r=Tt(t,e),a=_t(r,t),n=It(r);return n&&(a.children=a.children.concat(wt("text",`
`),n)),a}var qt=yt;export{qt as m};
