import{a as Q}from"./@algolia-6bb98d1b.js";var m="(".charCodeAt(0),b=")".charCodeAt(0),I="'".charCodeAt(0),k='"'.charCodeAt(0),P="\\".charCodeAt(0),C="/".charCodeAt(0),O=",".charCodeAt(0),U=":".charCodeAt(0),g="*".charCodeAt(0),j="u".charCodeAt(0),D="U".charCodeAt(0),F="+".charCodeAt(0),L=/^[a-f0-9?-]+$/i,N=function(d){for(var n=[],t=d,e,s,u,r,i,f,h,y,o=0,a=t.charCodeAt(o),q=t.length,l=[{nodes:n}],p=0,c,A="",v="",x="";o<q;)if(a<=32){e=o;do e+=1,a=t.charCodeAt(e);while(a<=32);r=t.slice(o,e),u=n[n.length-1],a===b&&p?x=r:u&&u.type==="div"?(u.after=r,u.sourceEndIndex+=r.length):a===O||a===U||a===C&&t.charCodeAt(e+1)!==g&&(!c||c&&c.type==="function"&&c.value!=="calc")?v=r:n.push({type:"space",sourceIndex:o,sourceEndIndex:e,value:r}),o=e}else if(a===I||a===k){e=o,s=a===I?"'":'"',r={type:"string",sourceIndex:o,quote:s};do if(i=!1,e=t.indexOf(s,e+1),~e)for(f=e;t.charCodeAt(f-1)===P;)f-=1,i=!i;else t+=s,e=t.length-1,r.unclosed=!0;while(i);r.value=t.slice(o+1,e),r.sourceEndIndex=r.unclosed?e:e+1,n.push(r),o=e+1,a=t.charCodeAt(o)}else if(a===C&&t.charCodeAt(o+1)===g)e=t.indexOf("*/",o),r={type:"comment",sourceIndex:o,sourceEndIndex:e+2},e===-1&&(r.unclosed=!0,e=t.length,r.sourceEndIndex=e),r.value=t.slice(o+2,e),n.push(r),o=e+2,a=t.charCodeAt(o);else if((a===C||a===g)&&c&&c.type==="function"&&c.value==="calc")r=t[o],n.push({type:"word",sourceIndex:o-v.length,sourceEndIndex:o+r.length,value:r}),o+=1,a=t.charCodeAt(o);else if(a===C||a===O||a===U)r=t[o],n.push({type:"div",sourceIndex:o-v.length,sourceEndIndex:o+r.length,value:r,before:v,after:""}),v="",o+=1,a=t.charCodeAt(o);else if(m===a){e=o;do e+=1,a=t.charCodeAt(e);while(a<=32);if(y=o,r={type:"function",sourceIndex:o-A.length,value:A,before:t.slice(y+1,e)},o=e,A==="url"&&a!==I&&a!==k){e-=1;do if(i=!1,e=t.indexOf(")",e+1),~e)for(f=e;t.charCodeAt(f-1)===P;)f-=1,i=!i;else t+=")",e=t.length-1,r.unclosed=!0;while(i);h=e;do h-=1,a=t.charCodeAt(h);while(a<=32);y<h?(o!==h+1?r.nodes=[{type:"word",sourceIndex:o,sourceEndIndex:h+1,value:t.slice(o,h+1)}]:r.nodes=[],r.unclosed&&h+1!==e?(r.after="",r.nodes.push({type:"space",sourceIndex:h+1,sourceEndIndex:e,value:t.slice(h+1,e)})):(r.after=t.slice(h+1,e),r.sourceEndIndex=e)):(r.after="",r.nodes=[]),o=e+1,r.sourceEndIndex=r.unclosed?e:o,a=t.charCodeAt(o),n.push(r)}else p+=1,r.after="",r.sourceEndIndex=o+1,n.push(r),l.push(r),n=r.nodes=[],c=r;A=""}else if(b===a&&p)o+=1,a=t.charCodeAt(o),c.after=x,c.sourceEndIndex+=x.length,x="",p-=1,l[l.length-1].sourceEndIndex=o,l.pop(),c=l[p],n=c.nodes;else{e=o;do a===P&&(e+=1),e+=1,a=t.charCodeAt(e);while(e<q&&!(a<=32||a===I||a===k||a===O||a===U||a===C||a===m||a===g&&c&&c.type==="function"&&c.value==="calc"||a===C&&c.type==="function"&&c.value==="calc"||a===b&&p));r=t.slice(o,e),m===a?A=r:(j===r.charCodeAt(0)||D===r.charCodeAt(0))&&F===r.charCodeAt(1)&&L.test(r.slice(2))?n.push({type:"unicode-range",sourceIndex:o,sourceEndIndex:e,value:r}):n.push({type:"word",sourceIndex:o,sourceEndIndex:e,value:r}),o=e}for(o=l.length-1;o;o-=1)l[o].unclosed=!0,l[o].sourceEndIndex=t.length;return l[0].nodes};const H=Q(N);var E="-".charCodeAt(0),w="+".charCodeAt(0),$=".".charCodeAt(0),R="e".charCodeAt(0),X="E".charCodeAt(0);function z(d){var n=d.charCodeAt(0),t;if(n===w||n===E){if(t=d.charCodeAt(1),t>=48&&t<=57)return!0;var e=d.charCodeAt(2);return t===$&&e>=48&&e<=57}return n===$?(t=d.charCodeAt(1),t>=48&&t<=57):n>=48&&n<=57}var B=function(d){var n=0,t=d.length,e,s,u;if(t===0||!z(d))return!1;for(e=d.charCodeAt(n),(e===w||e===E)&&n++;n<t&&(e=d.charCodeAt(n),!(e<48||e>57));)n+=1;if(e=d.charCodeAt(n),s=d.charCodeAt(n+1),e===$&&s>=48&&s<=57)for(n+=2;n<t&&(e=d.charCodeAt(n),!(e<48||e>57));)n+=1;if(e=d.charCodeAt(n),s=d.charCodeAt(n+1),u=d.charCodeAt(n+2),(e===R||e===X)&&(s>=48&&s<=57||(s===w||s===E)&&u>=48&&u<=57))for(n+=s===w||s===E?3:2;n<t&&(e=d.charCodeAt(n),!(e<48||e>57));)n+=1;return{number:d.slice(0,n),unit:d.slice(n)}};const J=Q(B);export{J as a,H as p};
