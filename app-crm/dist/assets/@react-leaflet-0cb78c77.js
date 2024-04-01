import{g as D}from"./@algolia-6bb98d1b.js";import{r as c,a as S}from"./react-f83171f6.js";import{r as k}from"./react-dom-e9b5ed0c.js";import{l as C}from"./leaflet-f9c7aa0e.js";function y(n,e){const t=c.useRef(e);c.useEffect(function(){e!==t.current&&n.attributionControl!=null&&(t.current!=null&&n.attributionControl.removeAttribution(t.current),e!=null&&n.attributionControl.addAttribution(e)),t.current=e},[n,e])}function A(n,e,t){e.center!==t.center&&n.setLatLng(e.center),e.radius!=null&&e.radius!==t.radius&&n.setRadius(e.radius)}const b=1;function T(n){return Object.freeze({__version:b,map:n})}function M(n,e){return Object.freeze({...n,...e})}const E=c.createContext(null),x=E.Provider;function s(){const n=c.useContext(E);if(n==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return n}function L(n){function e(t,r){const{instance:u,context:o}=n(t).current;return c.useImperativeHandle(r,()=>u),t.children==null?null:S.createElement(x,{value:o},t.children)}return c.forwardRef(e)}function h(n){function e(t,r){const[u,o]=c.useState(!1),{instance:i}=n(t,o).current;c.useImperativeHandle(r,()=>i),c.useEffect(function(){u&&i.update()},[i,u,t.children]);const a=i._contentNode;return a?k.createPortal(t.children,a):null}return c.forwardRef(e)}function v(n){function e(t,r){const{instance:u}=n(t).current;return c.useImperativeHandle(r,()=>u),null}return c.forwardRef(e)}function I(n){return function(t){const r=s(),u=n(t,r),{instance:o}=u.current,i=c.useRef(t.position),{position:a}=t;return c.useEffect(function(){return o.addTo(r.map),function(){o.remove()}},[r.map,o]),c.useEffect(function(){a!=null&&a!==i.current&&(o.setPosition(a),i.current=a)},[o,a]),u}}function l(n,e){const t=c.useRef();c.useEffect(function(){return e!=null&&n.instance.on(e),t.current=e,function(){t.current!=null&&n.instance.off(t.current),t.current=null}},[n,e])}function d(n,e){const t=n.pane??e.pane;return t?{...n,pane:t}:n}function H(n,e){return function(r,u){const o=s(),i=n(d(r,o),o);return y(o.map,r.attribution),l(i.current,r.eventHandlers),e(i.current,o,r,u),i}}function z(n){return n.split(" ").filter(Boolean)}function g(n,e){z(e).forEach(t=>{C.DomUtil.addClass(n,t)})}function P(n,e){z(e).forEach(t=>{C.DomUtil.removeClass(n,t)})}function N(n,e,t){n!=null&&t!==e&&(e!=null&&e.length>0&&P(n,e),t!=null&&t.length>0&&g(n,t))}function _(n,e,t){return Object.freeze({instance:n,context:e,container:t})}function f(n,e){return e==null?function(r,u){const o=c.useRef();return o.current||(o.current=n(r,u)),o}:function(r,u){const o=c.useRef();o.current||(o.current=n(r,u));const i=c.useRef(r),{instance:a}=o.current;return c.useEffect(function(){i.current!==r&&(e(a,r,i.current),i.current=r)},[a,r,u]),o}}function O(n,e){c.useEffect(function(){return(e.layerContainer??e.map).addLayer(n.instance),function(){var o;(o=e.layerContainer)==null||o.removeLayer(n.instance),e.map.removeLayer(n.instance)}},[e,n])}function R(n){return function(t){const r=s(),u=n(d(t,r),r);return y(r.map,t.attribution),l(u.current,t.eventHandlers),O(u.current,r),u}}function w(n,e){const t=c.useRef();c.useEffect(function(){if(e.pathOptions!==t.current){const u=e.pathOptions??{};n.instance.setStyle(u),t.current=u}},[n,e])}function j(n){return function(t){const r=s(),u=n(d(t,r),r);return l(u.current,t.eventHandlers),O(u.current,r),w(u.current,t),u}}function $(n){function e(u,o){return _(n(u),o)}const t=f(e),r=I(t);return v(r)}function B(n,e){const t=f(n,e),r=R(t);return L(r)}function q(n,e){const t=f(n),r=H(t,e);return h(r)}function U(n,e){const t=f(n,e),r=j(t);return L(r)}function Z(n,e){const t=f(n,e),r=R(t);return v(r)}function G(n,e,t){const{opacity:r,zIndex:u}=e;r!=null&&r!==t.opacity&&n.setOpacity(r),u!=null&&u!==t.zIndex&&n.setZIndex(u)}function V(n,e,t){e.bounds instanceof C.LatLngBounds&&e.bounds!==t.bounds&&n.setBounds(e.bounds),e.opacity!=null&&e.opacity!==t.opacity&&n.setOpacity(e.opacity),e.zIndex!=null&&e.zIndex!==t.zIndex&&n.setZIndex(e.zIndex)}const X=Object.freeze(Object.defineProperty({__proto__:null,CONTEXT_VERSION:b,LeafletContext:E,LeafletProvider:x,addClassName:g,createContainerComponent:L,createControlComponent:$,createControlHook:I,createDivOverlayComponent:h,createDivOverlayHook:H,createElementHook:f,createElementObject:_,createLayerComponent:B,createLayerHook:R,createLeafComponent:v,createLeafletContext:T,createOverlayComponent:q,createPathComponent:U,createPathHook:j,createTileLayerComponent:Z,extendContext:M,removeClassName:P,updateCircle:A,updateClassName:N,updateGridLayer:G,updateMediaOverlay:V,useAttribution:y,useEventHandlers:l,useLayerLifecycle:O,useLeafletContext:s,usePathOptions:w,withPane:d},Symbol.toStringTag,{value:"Module"})),Y=D(X);export{x as L,B as a,_ as b,T as c,Z as d,M as e,Y as r,G as u,d as w};
