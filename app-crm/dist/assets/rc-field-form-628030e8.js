import{r as y}from"./react-f83171f6.js";import{e as N,q as re,s as _,f as $,b as c,d as Z,o as Ie,p as Le,a as ge,v as M,_ as he,h as me,g as Re,c as ee}from"./@babel-1b4b41ae.js";import{b as z,v as X,H as G,I as q,q as Ae,z as xe}from"./rc-util-c5d9a97a.js";import{S as Ue}from"./async-validator-dee29e8b.js";var J="RC_FORM_INTERNAL_HOOKS",T=function(){z(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},Q=y.createContext({getFieldValue:T,getFieldsValue:T,getFieldError:T,getFieldWarning:T,getFieldsError:T,isFieldsTouched:T,isFieldTouched:T,isFieldValidating:T,isFieldsValidating:T,resetFields:T,setFields:T,setFieldValue:T,setFieldsValue:T,validateFields:T,submit:T,getInternalHooks:function(){return T(),{dispatch:T,initEntityValue:T,registerField:T,useSubscribe:T,setInitialValues:T,destroyForm:T,setCallbacks:T,registerWatch:T,getFields:T,setValidateMessages:T,setPreserve:T,getInitialValue:T}}}),ae=y.createContext(null);function le(o){return o==null?[]:Array.isArray(o)?o:[o]}function We(o){return o&&!!o._init}var U="'${name}' is not a valid ${type}",Ne={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:U,method:U,array:U,object:U,number:U,date:U,boolean:U,integer:U,float:U,regexp:U,email:U,url:U,hex:U},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},Pe=Ue;function He(o,l){return o.replace(/\$\{\w+\}/g,function(r){var t=r.slice(2,-1);return l[t]})}var Ce="CODE_LOGIC_ERROR";function oe(o,l,r,t,e){return ce.apply(this,arguments)}function ce(){return ce=re(_().mark(function o(l,r,t,e,n){var a,d,u,s,i,f,v,w,P;return _().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=N({},t),delete a.ruleIndex,Pe.warning=function(){},a.validator&&(d=a.validator,a.validator=function(){try{return d.apply(void 0,arguments)}catch(p){return console.error(p),Promise.reject(Ce)}}),u=null,a&&a.type==="array"&&a.defaultField&&(u=a.defaultField,delete a.defaultField),s=new Pe(c({},l,[a])),i=X(Ne,e.validateMessages),s.messages(i),f=[],h.prev=10,h.next=13,Promise.resolve(s.validate(c({},l,r),N({},e)));case 13:h.next=18;break;case 15:h.prev=15,h.t0=h.catch(10),h.t0.errors&&(f=h.t0.errors.map(function(p,g){var F=p.message,S=F===Ce?i.default:F;return y.isValidElement(S)?y.cloneElement(S,{key:"error_".concat(g)}):S}));case 18:if(!(!f.length&&u)){h.next=23;break}return h.next=21,Promise.all(r.map(function(p,g){return oe("".concat(l,".").concat(g),p,u,e,n)}));case 21:return v=h.sent,h.abrupt("return",v.reduce(function(p,g){return[].concat($(p),$(g))},[]));case 23:return w=N(N({},t),{},{name:l,enum:(t.enum||[]).join(", ")},n),P=f.map(function(p){return typeof p=="string"?He(p,w):p}),h.abrupt("return",P);case 26:case"end":return h.stop()}},o,null,[[10,15]])})),ce.apply(this,arguments)}function je(o,l,r,t,e,n){var a=o.join("."),d=r.map(function(i,f){var v=i.validator,w=N(N({},i),{},{ruleIndex:f});return v&&(w.validator=function(P,m,h){var p=!1,g=function(){for(var R=arguments.length,E=new Array(R),b=0;b<R;b++)E[b]=arguments[b];Promise.resolve().then(function(){z(!p,"Your validator function has already return a promise. `callback` will be ignored."),p||h.apply(void 0,E)})},F=v(P,m,g);p=F&&typeof F.then=="function"&&typeof F.catch=="function",z(p,"`callback` is deprecated. Please return a promise instead."),p&&F.then(function(){h()}).catch(function(S){h(S||" ")})}),w}).sort(function(i,f){var v=i.warningOnly,w=i.ruleIndex,P=f.warningOnly,m=f.ruleIndex;return!!v==!!P?w-m:v?1:-1}),u;if(e===!0)u=new Promise(function(){var i=re(_().mark(function f(v,w){var P,m,h;return _().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:P=0;case 1:if(!(P<d.length)){g.next=12;break}return m=d[P],g.next=5,oe(a,l,m,t,n);case 5:if(h=g.sent,!h.length){g.next=9;break}return w([{errors:h,rule:m}]),g.abrupt("return");case 9:P+=1,g.next=1;break;case 12:v([]);case 13:case"end":return g.stop()}},f)}));return function(f,v){return i.apply(this,arguments)}}());else{var s=d.map(function(i){return oe(a,l,i,t,n).then(function(f){return{errors:f,rule:i}})});u=(e?_e(s):De(s)).then(function(i){return Promise.reject(i)})}return u.catch(function(i){return i}),u}function De(o){return de.apply(this,arguments)}function de(){return de=re(_().mark(function o(l){return _().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(l).then(function(e){var n,a=(n=[]).concat.apply(n,$(e));return a}));case 1:case"end":return t.stop()}},o)})),de.apply(this,arguments)}function _e(o){return fe.apply(this,arguments)}function fe(){return fe=re(_().mark(function o(l){var r;return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,e.abrupt("return",new Promise(function(n){l.forEach(function(a){a.then(function(d){d.errors.length&&n([d]),r+=1,r===l.length&&n([])})})}));case 2:case"end":return e.stop()}},o)})),fe.apply(this,arguments)}function I(o){return le(o)}function we(o,l){var r={};return l.forEach(function(t){var e=G(o,t);r=q(r,t,e)}),r}function B(o,l){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return o&&o.some(function(t){return $e(l,t,r)})}function $e(o,l){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!o||!l||!r&&o.length!==l.length?!1:l.every(function(t,e){return o[e]===t})}function qe(o,l){if(o===l)return!0;if(!o&&l||o&&!l||!o||!l||Z(o)!=="object"||Z(l)!=="object")return!1;var r=Object.keys(o),t=Object.keys(l),e=new Set([].concat(r,t));return $(e).every(function(n){var a=o[n],d=l[n];return typeof a=="function"&&typeof d=="function"?!0:a===d})}function ze(o){var l=arguments.length<=1?void 0:arguments[1];return l&&l.target&&Z(l.target)==="object"&&o in l.target?l.target[o]:l}function Ee(o,l,r){var t=o.length;if(l<0||l>=t||r<0||r>=t)return o;var e=o[l],n=l-r;return n>0?[].concat($(o.slice(0,r)),[e],$(o.slice(r,l)),$(o.slice(l+1,t))):n<0?[].concat($(o.slice(0,l)),$(o.slice(l+1,r+1)),[e],$(o.slice(r+1,t))):o}var Ke=["name"],H=[];function be(o,l,r,t,e,n){return typeof o=="function"?o(l,r,"source"in n?{source:n.source}:{}):t!==e}var pe=function(o){Ie(r,o);var l=Le(r);function r(t){var e;if(ge(this,r),e=l.call(this,t),c(M(e),"state",{resetCount:0}),c(M(e),"cancelRegisterFunc",null),c(M(e),"mounted",!1),c(M(e),"touched",!1),c(M(e),"dirty",!1),c(M(e),"validatePromise",void 0),c(M(e),"prevValidating",void 0),c(M(e),"errors",H),c(M(e),"warnings",H),c(M(e),"cancelRegister",function(){var u=e.props,s=u.preserve,i=u.isListField,f=u.name;e.cancelRegisterFunc&&e.cancelRegisterFunc(i,s,I(f)),e.cancelRegisterFunc=null}),c(M(e),"getNamePath",function(){var u=e.props,s=u.name,i=u.fieldContext,f=i.prefixName,v=f===void 0?[]:f;return s!==void 0?[].concat($(v),$(s)):[]}),c(M(e),"getRules",function(){var u=e.props,s=u.rules,i=s===void 0?[]:s,f=u.fieldContext;return i.map(function(v){return typeof v=="function"?v(f):v})}),c(M(e),"refresh",function(){e.mounted&&e.setState(function(u){var s=u.resetCount;return{resetCount:s+1}})}),c(M(e),"metaCache",null),c(M(e),"triggerMetaEvent",function(u){var s=e.props.onMetaChange;if(s){var i=N(N({},e.getMeta()),{},{destroy:u});Ae(e.metaCache,i)||s(i),e.metaCache=i}else e.metaCache=null}),c(M(e),"onStoreChange",function(u,s,i){var f=e.props,v=f.shouldUpdate,w=f.dependencies,P=w===void 0?[]:w,m=f.onReset,h=i.store,p=e.getNamePath(),g=e.getValue(u),F=e.getValue(h),S=s&&B(s,p);switch(i.type==="valueUpdate"&&i.source==="external"&&g!==F&&(e.touched=!0,e.dirty=!0,e.validatePromise=null,e.errors=H,e.warnings=H,e.triggerMetaEvent()),i.type){case"reset":if(!s||S){e.touched=!1,e.dirty=!1,e.validatePromise=void 0,e.errors=H,e.warnings=H,e.triggerMetaEvent(),m==null||m(),e.refresh();return}break;case"remove":{if(v){e.reRender();return}break}case"setField":{var R=i.data;if(S){"touched"in R&&(e.touched=R.touched),"validating"in R&&!("originRCField"in R)&&(e.validatePromise=R.validating?Promise.resolve([]):null),"errors"in R&&(e.errors=R.errors||H),"warnings"in R&&(e.warnings=R.warnings||H),e.dirty=!0,e.triggerMetaEvent(),e.reRender();return}else if("value"in R&&B(s,p,!0)){e.reRender();return}if(v&&!p.length&&be(v,u,h,g,F,i)){e.reRender();return}break}case"dependenciesUpdate":{var E=P.map(I);if(E.some(function(b){return B(i.relatedFields,b)})){e.reRender();return}break}default:if(S||(!P.length||p.length||v)&&be(v,u,h,g,F,i)){e.reRender();return}break}v===!0&&e.reRender()}),c(M(e),"validateRules",function(u){var s=e.getNamePath(),i=e.getValue(),f=u||{},v=f.triggerName,w=f.validateOnly,P=w===void 0?!1:w,m=Promise.resolve().then(re(_().mark(function h(){var p,g,F,S,R,E,b;return _().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(e.mounted){V.next=2;break}return V.abrupt("return",[]);case 2:if(p=e.props,g=p.validateFirst,F=g===void 0?!1:g,S=p.messageVariables,R=p.validateDebounce,E=e.getRules(),v&&(E=E.filter(function(C){return C}).filter(function(C){var k=C.validateTrigger;if(!k)return!0;var A=le(k);return A.includes(v)})),!(R&&v)){V.next=10;break}return V.next=8,new Promise(function(C){setTimeout(C,R)});case 8:if(e.validatePromise===m){V.next=10;break}return V.abrupt("return",[]);case 10:return b=je(s,i,E,u,F,S),b.catch(function(C){return C}).then(function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:H;if(e.validatePromise===m){var k;e.validatePromise=null;var A=[],O=[];(k=C.forEach)===null||k===void 0||k.call(C,function(W){var x=W.rule.warningOnly,D=W.errors,ne=D===void 0?H:D;x?O.push.apply(O,$(ne)):A.push.apply(A,$(ne))}),e.errors=A,e.warnings=O,e.triggerMetaEvent(),e.reRender()}}),V.abrupt("return",b);case 13:case"end":return V.stop()}},h)})));return P||(e.validatePromise=m,e.dirty=!0,e.errors=H,e.warnings=H,e.triggerMetaEvent(),e.reRender()),m}),c(M(e),"isFieldValidating",function(){return!!e.validatePromise}),c(M(e),"isFieldTouched",function(){return e.touched}),c(M(e),"isFieldDirty",function(){if(e.dirty||e.props.initialValue!==void 0)return!0;var u=e.props.fieldContext,s=u.getInternalHooks(J),i=s.getInitialValue;return i(e.getNamePath())!==void 0}),c(M(e),"getErrors",function(){return e.errors}),c(M(e),"getWarnings",function(){return e.warnings}),c(M(e),"isListField",function(){return e.props.isListField}),c(M(e),"isList",function(){return e.props.isList}),c(M(e),"isPreserve",function(){return e.props.preserve}),c(M(e),"getMeta",function(){e.prevValidating=e.isFieldValidating();var u={touched:e.isFieldTouched(),validating:e.prevValidating,errors:e.errors,warnings:e.warnings,name:e.getNamePath(),validated:e.validatePromise===null};return u}),c(M(e),"getOnlyChild",function(u){if(typeof u=="function"){var s=e.getMeta();return N(N({},e.getOnlyChild(u(e.getControlled(),s,e.props.fieldContext))),{},{isFunction:!0})}var i=xe(u);return i.length!==1||!y.isValidElement(i[0])?{child:i,isFunction:!1}:{child:i[0],isFunction:!1}}),c(M(e),"getValue",function(u){var s=e.props.fieldContext.getFieldsValue,i=e.getNamePath();return G(u||s(!0),i)}),c(M(e),"getControlled",function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=e.props,i=s.trigger,f=s.validateTrigger,v=s.getValueFromEvent,w=s.normalize,P=s.valuePropName,m=s.getValueProps,h=s.fieldContext,p=f!==void 0?f:h.validateTrigger,g=e.getNamePath(),F=h.getInternalHooks,S=h.getFieldsValue,R=F(J),E=R.dispatch,b=e.getValue(),L=m||function(O){return c({},P,O)},V=u[i],C=L(b),k=N(N({},u),C);k[i]=function(){e.touched=!0,e.dirty=!0,e.triggerMetaEvent();for(var O,W=arguments.length,x=new Array(W),D=0;D<W;D++)x[D]=arguments[D];v?O=v.apply(void 0,x):O=ze.apply(void 0,[P].concat(x)),w&&(O=w(O,b,S(!0))),E({type:"updateValue",namePath:g,value:O}),V&&V.apply(void 0,x)};var A=le(p||[]);return A.forEach(function(O){var W=k[O];k[O]=function(){W&&W.apply(void 0,arguments);var x=e.props.rules;x&&x.length&&E({type:"validateField",namePath:g,triggerName:O})}}),k}),t.fieldContext){var n=t.fieldContext.getInternalHooks,a=n(J),d=a.initEntityValue;d(M(e))}return e}return he(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.shouldUpdate,a=e.fieldContext;if(this.mounted=!0,a){var d=a.getInternalHooks,u=d(J),s=u.registerField;this.cancelRegisterFunc=s(this)}n===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var e=this.state.resetCount,n=this.props.children,a=this.getOnlyChild(n),d=a.child,u=a.isFunction,s;return u?s=d:y.isValidElement(d)?s=y.cloneElement(d,this.getControlled(d.props)):(z(!d,"`children` of Field is not validate ReactElement."),s=d),y.createElement(y.Fragment,{key:e},s)}}]),r}(y.Component);c(pe,"contextType",Q);c(pe,"defaultProps",{trigger:"onChange",valuePropName:"value"});function Me(o){var l=o.name,r=me(o,Ke),t=y.useContext(Q),e=y.useContext(ae),n=l!==void 0?I(l):void 0,a="keep";return r.isListField||(a="_".concat((n||[]).join("_"))),y.createElement(pe,Re({key:a,name:n,isListField:!!e},r,{fieldContext:t}))}function Ge(o){var l=o.name,r=o.initialValue,t=o.children,e=o.rules,n=o.validateTrigger,a=o.isListField,d=y.useContext(Q),u=y.useContext(ae),s=y.useRef({keys:[],id:0}),i=s.current,f=y.useMemo(function(){var m=I(d.prefixName)||[];return[].concat($(m),$(I(l)))},[d.prefixName,l]),v=y.useMemo(function(){return N(N({},d),{},{prefixName:f})},[d,f]),w=y.useMemo(function(){return{getKey:function(h){var p=f.length,g=h[p];return[i.keys[g],h.slice(p+1)]}}},[f]);if(typeof t!="function")return z(!1,"Form.List only accepts function as children."),null;var P=function(h,p,g){var F=g.source;return F==="internal"?!1:h!==p};return y.createElement(ae.Provider,{value:w},y.createElement(Q.Provider,{value:v},y.createElement(Me,{name:[],shouldUpdate:P,rules:e,validateTrigger:n,initialValue:r,isList:!0,isListField:a??!!u},function(m,h){var p=m.value,g=p===void 0?[]:p,F=m.onChange,S=d.getFieldValue,R=function(){var V=S(f||[]);return V||[]},E={add:function(V,C){var k=R();C>=0&&C<=k.length?(i.keys=[].concat($(i.keys.slice(0,C)),[i.id],$(i.keys.slice(C))),F([].concat($(k.slice(0,C)),[V],$(k.slice(C))))):(i.keys=[].concat($(i.keys),[i.id]),F([].concat($(k),[V]))),i.id+=1},remove:function(V){var C=R(),k=new Set(Array.isArray(V)?V:[V]);k.size<=0||(i.keys=i.keys.filter(function(A,O){return!k.has(O)}),F(C.filter(function(A,O){return!k.has(O)})))},move:function(V,C){if(V!==C){var k=R();V<0||V>=k.length||C<0||C>=k.length||(i.keys=Ee(i.keys,V,C),F(Ee(k,V,C)))}}},b=g||[];return Array.isArray(b)||(b=[]),t(b.map(function(L,V){var C=i.keys[V];return C===void 0&&(i.keys[V]=i.id,C=i.keys[V],i.id+=1),{name:V,key:C,isListField:!0}}),E,h)})))}function Je(o){var l=!1,r=o.length,t=[];return o.length?new Promise(function(e,n){o.forEach(function(a,d){a.catch(function(u){return l=!0,u}).then(function(u){r-=1,t[d]=u,!(r>0)&&(l&&n(t),e(t))})})}):Promise.resolve([])}var Se="__@field_split__";function ue(o){return o.map(function(l){return"".concat(Z(l),":").concat(l)}).join(Se)}var Y=function(){function o(){ge(this,o),c(this,"kvs",new Map)}return he(o,[{key:"set",value:function(r,t){this.kvs.set(ue(r),t)}},{key:"get",value:function(r){return this.kvs.get(ue(r))}},{key:"update",value:function(r,t){var e=this.get(r),n=t(e);n?this.set(r,n):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(ue(r))}},{key:"map",value:function(r){return $(this.kvs.entries()).map(function(t){var e=ee(t,2),n=e[0],a=e[1],d=n.split(Se);return r({key:d.map(function(u){var s=u.match(/^([^:]*):(.*)$/),i=ee(s,3),f=i[1],v=i[2];return f==="number"?Number(v):v}),value:a})})}},{key:"toJSON",value:function(){var r={};return this.map(function(t){var e=t.key,n=t.value;return r[e.join(".")]=n,null}),r}}]),o}(),Ye=["name"],Be=he(function o(l){var r=this;ge(this,o),c(this,"formHooked",!1),c(this,"forceRootUpdate",void 0),c(this,"subscribable",!0),c(this,"store",{}),c(this,"fieldEntities",[]),c(this,"initialValues",{}),c(this,"callbacks",{}),c(this,"validateMessages",null),c(this,"preserve",null),c(this,"lastValidatePromise",null),c(this,"getForm",function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}}),c(this,"getInternalHooks",function(t){return t===J?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(z(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)}),c(this,"useSubscribe",function(t){r.subscribable=t}),c(this,"prevWithoutPreserves",null),c(this,"setInitialValues",function(t,e){if(r.initialValues=t||{},e){var n,a=X(t,r.store);(n=r.prevWithoutPreserves)===null||n===void 0||n.map(function(d){var u=d.key;a=q(a,u,G(t,u))}),r.prevWithoutPreserves=null,r.updateStore(a)}}),c(this,"destroyForm",function(){var t=new Y;r.getFieldEntities(!0).forEach(function(e){r.isMergedPreserve(e.isPreserve())||t.set(e.getNamePath(),!0)}),r.prevWithoutPreserves=t}),c(this,"getInitialValue",function(t){var e=G(r.initialValues,t);return t.length?X(e):e}),c(this,"setCallbacks",function(t){r.callbacks=t}),c(this,"setValidateMessages",function(t){r.validateMessages=t}),c(this,"setPreserve",function(t){r.preserve=t}),c(this,"watchList",[]),c(this,"registerWatch",function(t){return r.watchList.push(t),function(){r.watchList=r.watchList.filter(function(e){return e!==t})}}),c(this,"notifyWatch",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var e=r.getFieldsValue(),n=r.getFieldsValue(!0);r.watchList.forEach(function(a){a(e,n,t)})}}),c(this,"timeoutId",null),c(this,"warningUnhooked",function(){}),c(this,"updateStore",function(t){r.store=t}),c(this,"getFieldEntities",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return t?r.fieldEntities.filter(function(e){return e.getNamePath().length}):r.fieldEntities}),c(this,"getFieldsMap",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=new Y;return r.getFieldEntities(t).forEach(function(n){var a=n.getNamePath();e.set(a,n)}),e}),c(this,"getFieldEntitiesForNamePathList",function(t){if(!t)return r.getFieldEntities(!0);var e=r.getFieldsMap(!0);return t.map(function(n){var a=I(n);return e.get(a)||{INVALIDATE_NAME_PATH:I(n)}})}),c(this,"getFieldsValue",function(t,e){r.warningUnhooked();var n,a,d;if(t===!0||Array.isArray(t)?(n=t,a=e):t&&Z(t)==="object"&&(d=t.strict,a=t.filter),n===!0&&!a)return r.store;var u=r.getFieldEntitiesForNamePathList(Array.isArray(n)?n:null),s=[];return u.forEach(function(i){var f,v,w="INVALIDATE_NAME_PATH"in i?i.INVALIDATE_NAME_PATH:i.getNamePath();if(d){var P,m;if((P=(m=i).isList)!==null&&P!==void 0&&P.call(m))return}else if(!n&&(f=(v=i).isListField)!==null&&f!==void 0&&f.call(v))return;if(!a)s.push(w);else{var h="getMeta"in i?i.getMeta():null;a(h)&&s.push(w)}}),we(r.store,s.map(I))}),c(this,"getFieldValue",function(t){r.warningUnhooked();var e=I(t);return G(r.store,e)}),c(this,"getFieldsError",function(t){r.warningUnhooked();var e=r.getFieldEntitiesForNamePathList(t);return e.map(function(n,a){return n&&!("INVALIDATE_NAME_PATH"in n)?{name:n.getNamePath(),errors:n.getErrors(),warnings:n.getWarnings()}:{name:I(t[a]),errors:[],warnings:[]}})}),c(this,"getFieldError",function(t){r.warningUnhooked();var e=I(t),n=r.getFieldsError([e])[0];return n.errors}),c(this,"getFieldWarning",function(t){r.warningUnhooked();var e=I(t),n=r.getFieldsError([e])[0];return n.warnings}),c(this,"isFieldsTouched",function(){r.warningUnhooked();for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var a=e[0],d=e[1],u,s=!1;e.length===0?u=null:e.length===1?Array.isArray(a)?(u=a.map(I),s=!1):(u=null,s=a):(u=a.map(I),s=d);var i=r.getFieldEntities(!0),f=function(h){return h.isFieldTouched()};if(!u)return s?i.every(function(m){return f(m)||m.isList()}):i.some(f);var v=new Y;u.forEach(function(m){v.set(m,[])}),i.forEach(function(m){var h=m.getNamePath();u.forEach(function(p){p.every(function(g,F){return h[F]===g})&&v.update(p,function(g){return[].concat($(g),[m])})})});var w=function(h){return h.some(f)},P=v.map(function(m){var h=m.value;return h});return s?P.every(w):P.some(w)}),c(this,"isFieldTouched",function(t){return r.warningUnhooked(),r.isFieldsTouched([t])}),c(this,"isFieldsValidating",function(t){r.warningUnhooked();var e=r.getFieldEntities();if(!t)return e.some(function(a){return a.isFieldValidating()});var n=t.map(I);return e.some(function(a){var d=a.getNamePath();return B(n,d)&&a.isFieldValidating()})}),c(this,"isFieldValidating",function(t){return r.warningUnhooked(),r.isFieldsValidating([t])}),c(this,"resetWithFieldInitialValue",function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new Y,n=r.getFieldEntities(!0);n.forEach(function(u){var s=u.props.initialValue,i=u.getNamePath();if(s!==void 0){var f=e.get(i)||new Set;f.add({entity:u,value:s}),e.set(i,f)}});var a=function(s){s.forEach(function(i){var f=i.props.initialValue;if(f!==void 0){var v=i.getNamePath(),w=r.getInitialValue(v);if(w!==void 0)z(!1,"Form already set 'initialValues' with path '".concat(v.join("."),"'. Field can not overwrite it."));else{var P=e.get(v);if(P&&P.size>1)z(!1,"Multiple Field with path '".concat(v.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(P){var m=r.getFieldValue(v),h=i.isListField();!h&&(!t.skipExist||m===void 0)&&r.updateStore(q(r.store,v,$(P)[0].value))}}}})},d;t.entities?d=t.entities:t.namePathList?(d=[],t.namePathList.forEach(function(u){var s=e.get(u);if(s){var i;(i=d).push.apply(i,$($(s).map(function(f){return f.entity})))}})):d=n,a(d)}),c(this,"resetFields",function(t){r.warningUnhooked();var e=r.store;if(!t){r.updateStore(X(r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(e,null,{type:"reset"}),r.notifyWatch();return}var n=t.map(I);n.forEach(function(a){var d=r.getInitialValue(a);r.updateStore(q(r.store,a,d))}),r.resetWithFieldInitialValue({namePathList:n}),r.notifyObservers(e,n,{type:"reset"}),r.notifyWatch(n)}),c(this,"setFields",function(t){r.warningUnhooked();var e=r.store,n=[];t.forEach(function(a){var d=a.name,u=me(a,Ye),s=I(d);n.push(s),"value"in u&&r.updateStore(q(r.store,s,u.value)),r.notifyObservers(e,[s],{type:"setField",data:a})}),r.notifyWatch(n)}),c(this,"getFields",function(){var t=r.getFieldEntities(!0),e=t.map(function(n){var a=n.getNamePath(),d=n.getMeta(),u=N(N({},d),{},{name:a,value:r.getFieldValue(a)});return Object.defineProperty(u,"originRCField",{value:!0}),u});return e}),c(this,"initEntityValue",function(t){var e=t.props.initialValue;if(e!==void 0){var n=t.getNamePath(),a=G(r.store,n);a===void 0&&r.updateStore(q(r.store,n,e))}}),c(this,"isMergedPreserve",function(t){var e=t!==void 0?t:r.preserve;return e??!0}),c(this,"registerField",function(t){r.fieldEntities.push(t);var e=t.getNamePath();if(r.notifyWatch([e]),t.props.initialValue!==void 0){var n=r.store;r.resetWithFieldInitialValue({entities:[t],skipExist:!0}),r.notifyObservers(n,[t.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(a,d){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(f){return f!==t}),!r.isMergedPreserve(d)&&(!a||u.length>1)){var s=a?void 0:r.getInitialValue(e);if(e.length&&r.getFieldValue(e)!==s&&r.fieldEntities.every(function(f){return!$e(f.getNamePath(),e)})){var i=r.store;r.updateStore(q(i,e,s,!0)),r.notifyObservers(i,[e],{type:"remove"}),r.triggerDependenciesUpdate(i,e)}}r.notifyWatch([e])}}),c(this,"dispatch",function(t){switch(t.type){case"updateValue":{var e=t.namePath,n=t.value;r.updateValue(e,n);break}case"validateField":{var a=t.namePath,d=t.triggerName;r.validateFields([a],{triggerName:d});break}}}),c(this,"notifyObservers",function(t,e,n){if(r.subscribable){var a=N(N({},n),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(d){var u=d.onStoreChange;u(t,e,a)})}else r.forceRootUpdate()}),c(this,"triggerDependenciesUpdate",function(t,e){var n=r.getDependencyChildrenFields(e);return n.length&&r.validateFields(n),r.notifyObservers(t,n,{type:"dependenciesUpdate",relatedFields:[e].concat($(n))}),n}),c(this,"updateValue",function(t,e){var n=I(t),a=r.store;r.updateStore(q(r.store,n,e)),r.notifyObservers(a,[n],{type:"valueUpdate",source:"internal"}),r.notifyWatch([n]);var d=r.triggerDependenciesUpdate(a,n),u=r.callbacks.onValuesChange;if(u){var s=we(r.store,[n]);u(s,r.getFieldsValue())}r.triggerOnFieldsChange([n].concat($(d)))}),c(this,"setFieldsValue",function(t){r.warningUnhooked();var e=r.store;if(t){var n=X(r.store,t);r.updateStore(n)}r.notifyObservers(e,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()}),c(this,"setFieldValue",function(t,e){r.setFields([{name:t,value:e}])}),c(this,"getDependencyChildrenFields",function(t){var e=new Set,n=[],a=new Y;r.getFieldEntities().forEach(function(u){var s=u.props.dependencies;(s||[]).forEach(function(i){var f=I(i);a.update(f,function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return v.add(u),v})})});var d=function u(s){var i=a.get(s)||new Set;i.forEach(function(f){if(!e.has(f)){e.add(f);var v=f.getNamePath();f.isFieldDirty()&&v.length&&(n.push(v),u(v))}})};return d(t),n}),c(this,"triggerOnFieldsChange",function(t,e){var n=r.callbacks.onFieldsChange;if(n){var a=r.getFields();if(e){var d=new Y;e.forEach(function(s){var i=s.name,f=s.errors;d.set(i,f)}),a.forEach(function(s){s.errors=d.get(s.name)||s.errors})}var u=a.filter(function(s){var i=s.name;return B(t,i)});u.length&&n(u,a)}}),c(this,"validateFields",function(t,e){r.warningUnhooked();var n,a;Array.isArray(t)||typeof t=="string"||typeof e=="string"?(n=t,a=e):a=t;var d=!!n,u=d?n.map(I):[],s=[],i=String(Date.now()),f=new Set,v=a||{},w=v.recursive,P=v.dirty;r.getFieldEntities(!0).forEach(function(g){if(d||u.push(g.getNamePath()),!(!g.props.rules||!g.props.rules.length)&&!(P&&!g.isFieldDirty())){var F=g.getNamePath();if(f.add(F.join(i)),!d||B(u,F,w)){var S=g.validateRules(N({validateMessages:N(N({},Ne),r.validateMessages)},a));s.push(S.then(function(){return{name:F,errors:[],warnings:[]}}).catch(function(R){var E,b=[],L=[];return(E=R.forEach)===null||E===void 0||E.call(R,function(V){var C=V.rule.warningOnly,k=V.errors;C?L.push.apply(L,$(k)):b.push.apply(b,$(k))}),b.length?Promise.reject({name:F,errors:b,warnings:L}):{name:F,errors:b,warnings:L}}))}}});var m=Je(s);r.lastValidatePromise=m,m.catch(function(g){return g}).then(function(g){var F=g.map(function(S){var R=S.name;return R});r.notifyObservers(r.store,F,{type:"validateFinish"}),r.triggerOnFieldsChange(F,g)});var h=m.then(function(){return r.lastValidatePromise===m?Promise.resolve(r.getFieldsValue(u)):Promise.reject([])}).catch(function(g){var F=g.filter(function(S){return S&&S.errors.length});return Promise.reject({values:r.getFieldsValue(u),errorFields:F,outOfDate:r.lastValidatePromise!==m})});h.catch(function(g){return g});var p=u.filter(function(g){return f.has(g.join(i))});return r.triggerOnFieldsChange(p),h}),c(this,"submit",function(){r.warningUnhooked(),r.validateFields().then(function(t){var e=r.callbacks.onFinish;if(e)try{e(t)}catch(n){console.error(n)}}).catch(function(t){var e=r.callbacks.onFinishFailed;e&&e(t)})}),this.forceRootUpdate=l});function Te(o){var l=y.useRef(),r=y.useState({}),t=ee(r,2),e=t[1];if(!l.current)if(o)l.current=o;else{var n=function(){e({})},a=new Be(n);l.current=a.getForm()}return[l.current]}var ve=y.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),Qe=function(l){var r=l.validateMessages,t=l.onFormChange,e=l.onFormFinish,n=l.children,a=y.useContext(ve),d=y.useRef({});return y.createElement(ve.Provider,{value:N(N({},a),{},{validateMessages:N(N({},a.validateMessages),r),triggerFormChange:function(s,i){t&&t(s,{changedFields:i,forms:d.current}),a.triggerFormChange(s,i)},triggerFormFinish:function(s,i){e&&e(s,{values:i,forms:d.current}),a.triggerFormFinish(s,i)},registerForm:function(s,i){s&&(d.current=N(N({},d.current),{},c({},s,i))),a.registerForm(s,i)},unregisterForm:function(s){var i=N({},d.current);delete i[s],d.current=i,a.unregisterForm(s)}})},n)},Xe=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],Ze=function(l,r){var t=l.name,e=l.initialValues,n=l.fields,a=l.form,d=l.preserve,u=l.children,s=l.component,i=s===void 0?"form":s,f=l.validateMessages,v=l.validateTrigger,w=v===void 0?"onChange":v,P=l.onValuesChange,m=l.onFieldsChange,h=l.onFinish,p=l.onFinishFailed,g=me(l,Xe),F=y.useContext(ve),S=Te(a),R=ee(S,1),E=R[0],b=E.getInternalHooks(J),L=b.useSubscribe,V=b.setInitialValues,C=b.setCallbacks,k=b.setValidateMessages,A=b.setPreserve,O=b.destroyForm;y.useImperativeHandle(r,function(){return E}),y.useEffect(function(){return F.registerForm(t,E),function(){F.unregisterForm(t)}},[F,E,t]),k(N(N({},F.validateMessages),f)),C({onValuesChange:P,onFieldsChange:function(j){if(F.triggerFormChange(t,j),m){for(var K=arguments.length,Ve=new Array(K>1?K-1:0),ie=1;ie<K;ie++)Ve[ie-1]=arguments[ie];m.apply(void 0,[j].concat(Ve))}},onFinish:function(j){F.triggerFormFinish(t,j),h&&h(j)},onFinishFailed:p}),A(d);var W=y.useRef(null);V(e,!W.current),W.current||(W.current=!0),y.useEffect(function(){return O},[]);var x,D=typeof u=="function";if(D){var ne=E.getFieldsValue(!0);x=u(ne,E)}else x=u;L(!D);var Fe=y.useRef();y.useEffect(function(){qe(Fe.current||[],n||[])||E.setFields(n||[]),Fe.current=n},[n,E]);var Oe=y.useMemo(function(){return N(N({},E),{},{validateTrigger:w})},[E,w]),ye=y.createElement(ae.Provider,{value:null},y.createElement(Q.Provider,{value:Oe},x));return i===!1?ye:y.createElement(i,Re({},g,{onSubmit:function(j){j.preventDefault(),j.stopPropagation(),E.submit()},onReset:function(j){var K;j.preventDefault(),E.resetFields(),(K=g.onReset)===null||K===void 0||K.call(g,j)}}),ye)};function ke(o){try{return JSON.stringify(o)}catch{return Math.random()}}function er(){for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];var t=l[0],e=l[1],n=e===void 0?{}:e,a=We(n)?{form:n}:n,d=a.form,u=y.useState(),s=ee(u,2),i=s[0],f=s[1],v=y.useMemo(function(){return ke(i)},[i]),w=y.useRef(v);w.current=v;var P=y.useContext(Q),m=d||P,h=m&&m._init,p=I(t),g=y.useRef(p);return g.current=p,y.useEffect(function(){if(h){var F=m.getFieldsValue,S=m.getInternalHooks,R=S(J),E=R.registerWatch,b=function(k,A){var O=a.preserve?A:k;return typeof t=="function"?t(O):G(O,g.current)},L=E(function(C,k){var A=b(C,k),O=ke(A);w.current!==O&&(w.current=O,f(A))}),V=b(F(),F(!0));return i!==V&&f(V),L}},[h]),i}var rr=y.forwardRef(Ze),te=rr;te.FormProvider=Qe;te.Field=Me;te.List=Ge;te.useForm=Te;te.useWatch=er;export{Q as C,Qe as F,ae as L,te as R,Me as W,Ge as a,er as b,Te as u};
