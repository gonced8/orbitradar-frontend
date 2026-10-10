var R_=Object.defineProperty;var P_=(i,e,t)=>e in i?R_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Gp=(i,e,t)=>P_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function $g(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ef={exports:{}},Ja={},tf={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function L_(){if(Wp)return Ct;Wp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(F,J,Ve){this.props=F,this.context=J,this.refs=E,this.updater=Ve||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,J){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,J,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(F,J,Ve){this.props=F,this.context=J,this.refs=E,this.updater=Ve||S}var w=I.prototype=new _;w.constructor=I,M(w,y.prototype),w.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,R={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function O(F,J,Ve){var te,ie={},le=null,xe=null;if(J!=null)for(te in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(le=""+J.key),J)B.call(J,te)&&!U.hasOwnProperty(te)&&(ie[te]=J[te]);var Re=arguments.length-2;if(Re===1)ie.children=Ve;else if(1<Re){for(var Fe=Array(Re),Be=0;Be<Re;Be++)Fe[Be]=arguments[Be+2];ie.children=Fe}if(F&&F.defaultProps)for(te in Re=F.defaultProps,Re)ie[te]===void 0&&(ie[te]=Re[te]);return{$$typeof:i,type:F,key:le,ref:xe,props:ie,_owner:R.current}}function L(F,J){return{$$typeof:i,type:F.type,key:J,ref:F.ref,props:F.props,_owner:F._owner}}function b(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function z(F){var J={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ve){return J[Ve]})}var X=/\/+/g;function K(F,J){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):J.toString(36)}function ne(F,J,Ve,te,ie){var le=typeof F;(le==="undefined"||le==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(le){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case i:case e:xe=!0}}if(xe)return xe=F,ie=ie(xe),F=te===""?"."+K(xe,0):te,P(ie)?(Ve="",F!=null&&(Ve=F.replace(X,"$&/")+"/"),ne(ie,J,Ve,"",function(Be){return Be})):ie!=null&&(b(ie)&&(ie=L(ie,Ve+(!ie.key||xe&&xe.key===ie.key?"":(""+ie.key).replace(X,"$&/")+"/")+F)),J.push(ie)),1;if(xe=0,te=te===""?".":te+":",P(F))for(var Re=0;Re<F.length;Re++){le=F[Re];var Fe=te+K(le,Re);xe+=ne(le,J,Ve,Fe,ie)}else if(Fe=v(F),typeof Fe=="function")for(F=Fe.call(F),Re=0;!(le=F.next()).done;)le=le.value,Fe=te+K(le,Re++),xe+=ne(le,J,Ve,Fe,ie);else if(le==="object")throw J=String(F),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function fe(F,J,Ve){if(F==null)return F;var te=[],ie=0;return ne(F,te,"","",function(le){return J.call(Ve,le,ie++)}),te}function Y(F){if(F._status===-1){var J=F._result;J=J(),J.then(function(Ve){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ve)},function(Ve){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ve)}),F._status===-1&&(F._status=0,F._result=J)}if(F._status===1)return F._result.default;throw F._result}var ge={current:null},W={transition:null},ue={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:W,ReactCurrentOwner:R};function ce(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:fe,forEach:function(F,J,Ve){fe(F,function(){J.apply(this,arguments)},Ve)},count:function(F){var J=0;return fe(F,function(){J++}),J},toArray:function(F){return fe(F,function(J){return J})||[]},only:function(F){if(!b(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Ct.Component=y,Ct.Fragment=t,Ct.Profiler=a,Ct.PureComponent=I,Ct.StrictMode=s,Ct.Suspense=d,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Ct.act=ce,Ct.cloneElement=function(F,J,Ve){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var te=M({},F.props),ie=F.key,le=F.ref,xe=F._owner;if(J!=null){if(J.ref!==void 0&&(le=J.ref,xe=R.current),J.key!==void 0&&(ie=""+J.key),F.type&&F.type.defaultProps)var Re=F.type.defaultProps;for(Fe in J)B.call(J,Fe)&&!U.hasOwnProperty(Fe)&&(te[Fe]=J[Fe]===void 0&&Re!==void 0?Re[Fe]:J[Fe])}var Fe=arguments.length-2;if(Fe===1)te.children=Ve;else if(1<Fe){Re=Array(Fe);for(var Be=0;Be<Fe;Be++)Re[Be]=arguments[Be+2];te.children=Re}return{$$typeof:i,type:F.type,key:ie,ref:le,props:te,_owner:xe}},Ct.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Ct.createElement=O,Ct.createFactory=function(F){var J=O.bind(null,F);return J.type=F,J},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(F){return{$$typeof:f,render:F}},Ct.isValidElement=b,Ct.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:Y}},Ct.memo=function(F,J){return{$$typeof:h,type:F,compare:J===void 0?null:J}},Ct.startTransition=function(F){var J=W.transition;W.transition={};try{F()}finally{W.transition=J}},Ct.unstable_act=ce,Ct.useCallback=function(F,J){return ge.current.useCallback(F,J)},Ct.useContext=function(F){return ge.current.useContext(F)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(F){return ge.current.useDeferredValue(F)},Ct.useEffect=function(F,J){return ge.current.useEffect(F,J)},Ct.useId=function(){return ge.current.useId()},Ct.useImperativeHandle=function(F,J,Ve){return ge.current.useImperativeHandle(F,J,Ve)},Ct.useInsertionEffect=function(F,J){return ge.current.useInsertionEffect(F,J)},Ct.useLayoutEffect=function(F,J){return ge.current.useLayoutEffect(F,J)},Ct.useMemo=function(F,J){return ge.current.useMemo(F,J)},Ct.useReducer=function(F,J,Ve){return ge.current.useReducer(F,J,Ve)},Ct.useRef=function(F){return ge.current.useRef(F)},Ct.useState=function(F){return ge.current.useState(F)},Ct.useSyncExternalStore=function(F,J,Ve){return ge.current.useSyncExternalStore(F,J,Ve)},Ct.useTransition=function(){return ge.current.useTransition()},Ct.version="18.3.1",Ct}var jp;function ld(){return jp||(jp=1,tf.exports=L_()),tf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function N_(){if(Xp)return Ja;Xp=1;var i=ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:v,ref:S,props:g,_owner:a.current}}return Ja.Fragment=t,Ja.jsx=c,Ja.jsxs=c,Ja}var qp;function I_(){return qp||(qp=1,ef.exports=N_()),ef.exports}var H=I_(),Te=ld();const Kg=$g(Te);var wl={},nf={exports:{}},Xn={},rf={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function D_(){return Yp||(Yp=1,function(i){function e(W,ue){var ce=W.length;W.push(ue);e:for(;0<ce;){var F=ce-1>>>1,J=W[F];if(0<a(J,ue))W[F]=ue,W[ce]=J,ce=F;else break e}}function t(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var ue=W[0],ce=W.pop();if(ce!==ue){W[0]=ce;e:for(var F=0,J=W.length,Ve=J>>>1;F<Ve;){var te=2*(F+1)-1,ie=W[te],le=te+1,xe=W[le];if(0>a(ie,ce))le<J&&0>a(xe,ie)?(W[F]=xe,W[le]=ce,F=le):(W[F]=ie,W[te]=ce,F=te);else if(le<J&&0>a(xe,ce))W[F]=xe,W[le]=ce,F=le;else break e}}return ue}function a(W,ue){var ce=W.sortIndex-ue.sortIndex;return ce!==0?ce:W.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,g=null,v=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(W){for(var ue=t(h);ue!==null;){if(ue.callback===null)s(h);else if(ue.startTime<=W)s(h),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(h)}}function P(W){if(E=!1,w(W),!M)if(t(d)!==null)M=!0,Y(B);else{var ue=t(h);ue!==null&&ge(P,ue.startTime-W)}}function B(W,ue){M=!1,E&&(E=!1,_(O),O=-1),S=!0;var ce=v;try{for(w(ue),g=t(d);g!==null&&(!(g.expirationTime>ue)||W&&!z());){var F=g.callback;if(typeof F=="function"){g.callback=null,v=g.priorityLevel;var J=F(g.expirationTime<=ue);ue=i.unstable_now(),typeof J=="function"?g.callback=J:g===t(d)&&s(d),w(ue)}else s(d);g=t(d)}if(g!==null)var Ve=!0;else{var te=t(h);te!==null&&ge(P,te.startTime-ue),Ve=!1}return Ve}finally{g=null,v=ce,S=!1}}var R=!1,U=null,O=-1,L=5,b=-1;function z(){return!(i.unstable_now()-b<L)}function X(){if(U!==null){var W=i.unstable_now();b=W;var ue=!0;try{ue=U(!0,W)}finally{ue?K():(R=!1,U=null)}}else R=!1}var K;if(typeof I=="function")K=function(){I(X)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,fe=ne.port2;ne.port1.onmessage=X,K=function(){fe.postMessage(null)}}else K=function(){y(X,0)};function Y(W){U=W,R||(R=!0,K())}function ge(W,ue){O=y(function(){W(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(W){W.callback=null},i.unstable_continueExecution=function(){M||S||(M=!0,Y(B))},i.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<W?Math.floor(1e3/W):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(W){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var ce=v;v=ue;try{return W()}finally{v=ce}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(W,ue){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ce=v;v=W;try{return ue()}finally{v=ce}},i.unstable_scheduleCallback=function(W,ue,ce){var F=i.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?F+ce:F):ce=F,W){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ce+J,W={id:m++,callback:ue,priorityLevel:W,startTime:ce,expirationTime:J,sortIndex:-1},ce>F?(W.sortIndex=ce,e(h,W),t(d)===null&&W===t(h)&&(E?(_(O),O=-1):E=!0,ge(P,ce-F))):(W.sortIndex=J,e(d,W),M||S||(M=!0,Y(B))),W},i.unstable_shouldYield=z,i.unstable_wrapCallback=function(W){var ue=v;return function(){var ce=v;v=ue;try{return W.apply(this,arguments)}finally{v=ce}}}}(sf)),sf}var $p;function U_(){return $p||($p=1,rf.exports=D_()),rf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function O_(){if(Kp)return Xn;Kp=1;var i=ld(),e=U_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,o,u,p,x,C){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,I);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,I);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,I);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,r,o,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,p,u)&&(o=null),u||p===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var P=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),R=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),z=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),W=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,F;function J(n){if(F===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var Ve=!1;function te(n,r){if(!n||Ve)return"";Ve=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var u=de}Reflect.construct(n,[],r)}else{try{r.call()}catch(de){u=de}n.call(r.prototype)}else{try{throw Error()}catch(de){u=de}n()}}catch(de){if(de&&u&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),x=u.stack.split(`
`),C=p.length-1,k=x.length-1;1<=C&&0<=k&&p[C]!==x[k];)k--;for(;1<=C&&0<=k;C--,k--)if(p[C]!==x[k]){if(C!==1||k!==1)do if(C--,k--,0>k||p[C]!==x[k]){var j=`
`+p[C].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=C&&0<=k);break}}}finally{Ve=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?J(n):""}function ie(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=te(n.type,!1),n;case 11:return n=te(n.type.render,!1),n;case 1:return n=te(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case R:return"Portal";case L:return"Profiler";case O:return"StrictMode";case K:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case X:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return r=n.displayName||null,r!==null?r:le(n.type)||"Memo";case Y:r=n._payload,n=n._init;try{return le(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Be(n){var r=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,x=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(C){u=""+C,x.call(this,C)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function V(n){n._valueTracker||(n._valueTracker=Be(n))}function ye(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ee(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function we(n,r){var o=r.checked;return ce({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Se(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Re(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ae(n,r){r=r.checked,r!=null&&w(n,"checked",r,!1)}function Le(n,r){Ae(n,r);var o=Re(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?qe(n,r.type,o):r.hasOwnProperty("defaultValue")&&qe(n,r.type,Re(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ce(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function qe(n,r,o){(r!=="number"||Ee(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var D=Array.isArray;function A(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Re(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function ee(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function me(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(D(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Re(o)}}function pe(n,r){var o=Re(r.value),u=Re(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Me(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Xe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Xe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function be(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){T.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),je[r]=je[n]})});function Ze(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||je.hasOwnProperty(n)&&je[n]?(""+r).trim():r+"px"}function ze(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=Ze(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var ft=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lt(n,r){if(r){if(ft[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function dt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function He(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ve=null,_e=null,Ue=null;function rt(n){if(n=Fa(n)){if(typeof ve!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ko(r),ve(n.stateNode,n.type,r))}}function pt(n){_e?Ue?Ue.push(n):Ue=[n]:_e=n}function wt(){if(_e){var n=_e,r=Ue;if(Ue=_e=null,rt(n),r)for(n=0;n<r.length;n++)rt(r[n])}}function At(n,r){return n(r)}function ht(){}var bt=!1;function kt(n,r,o){if(bt)return n(r,o);bt=!0;try{return At(n,r,o)}finally{bt=!1,(_e!==null||Ue!==null)&&(ht(),wt())}}function Dt(n,r){var o=n.stateNode;if(o===null)return null;var u=ko(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Ge=!1;if(f)try{var Xt={};Object.defineProperty(Xt,"passive",{get:function(){Ge=!0}}),window.addEventListener("test",Xt,Xt),window.removeEventListener("test",Xt,Xt)}catch{Ge=!1}function tn(n,r,o,u,p,x,C,k,j){var de=Array.prototype.slice.call(arguments,3);try{r.apply(o,de)}catch(Oe){this.onError(Oe)}}var nn=!1,he=null,_t=!1,qt=null,Sn={onError:function(n){nn=!0,he=n}};function $n(n,r,o,u,p,x,C,k,j){nn=!1,he=null,tn.apply(Sn,arguments)}function In(n,r,o,u,p,x,C,k,j){if($n.apply(this,arguments),nn){if(nn){var de=he;nn=!1,he=null}else throw Error(t(198));_t||(_t=!0,qt=de)}}function Ut(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function N(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Z(n){if(Ut(n)!==n)throw Error(t(188))}function ae(n){var r=n.alternate;if(!r){if(r=Ut(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===o)return Z(p),n;if(x===u)return Z(p),r;x=x.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=x;else{for(var C=!1,k=p.child;k;){if(k===o){C=!0,o=p,u=x;break}if(k===u){C=!0,u=p,o=x;break}k=k.sibling}if(!C){for(k=x.child;k;){if(k===o){C=!0,o=x,u=p;break}if(k===u){C=!0,u=x,o=p;break}k=k.sibling}if(!C)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function se(n){return n=ae(n),n!==null?Q(n):null}function Q(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Q(n);if(r!==null)return r;n=n.sibling}return null}var Pe=e.unstable_scheduleCallback,Ye=e.unstable_cancelCallback,tt=e.unstable_shouldYield,st=e.unstable_requestPaint,Je=e.unstable_now,mt=e.unstable_getCurrentPriorityLevel,ct=e.unstable_ImmediatePriority,Tt=e.unstable_UserBlockingPriority,Nt=e.unstable_NormalPriority,Bt=e.unstable_LowPriority,Yt=e.unstable_IdlePriority,St=null,nt=null;function sn(n){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Zn,Dn=Math.log,Kn=Math.LN2;function Zn(n){return n>>>=0,n===0?32:31-(Dn(n)/Kn|0)|0}var ai=64,Ot=4194304;function cn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,C=o&268435455;if(C!==0){var k=C&~p;k!==0?u=cn(k):(x&=C,x!==0&&(u=cn(x)))}else C=o&~p,C!==0?u=cn(C):x!==0&&(u=cn(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-yt(r),p=1<<o,u|=n[o],r&=~p;return u}function mn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-yt(x),k=1<<C,j=p[C];j===-1?((k&o)===0||(k&u)!==0)&&(p[C]=mn(k,r)):j<=r&&(n.expiredLanes|=k),x&=~k}}function kr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Br(){var n=ai;return ai<<=1,(ai&4194240)===0&&(ai=64),n}function xa(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Hr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-yt(r),n[r]=o}function Ec(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-yt(o),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,o&=~x}}function ya(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-yt(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}var It=0;function Mo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Eo,wc,Ed,wd,Td,Tc=!1,wo=[],lr=null,cr=null,ur=null,Sa=new Map,Ma=new Map,fr=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(n,r){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(r.pointerId)}}function Ea(n,r,o,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=Fa(r),r!==null&&wc(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function J0(n,r,o,u,p){switch(r){case"focusin":return lr=Ea(lr,n,r,o,u,p),!0;case"dragenter":return cr=Ea(cr,n,r,o,u,p),!0;case"mouseover":return ur=Ea(ur,n,r,o,u,p),!0;case"pointerover":var x=p.pointerId;return Sa.set(x,Ea(Sa.get(x)||null,n,r,o,u,p)),!0;case"gotpointercapture":return x=p.pointerId,Ma.set(x,Ea(Ma.get(x)||null,n,r,o,u,p)),!0}return!1}function Cd(n){var r=Vr(n.target);if(r!==null){var o=Ut(r);if(o!==null){if(r=o.tag,r===13){if(r=N(o),r!==null){n.blockedOn=r,Td(n.priority,function(){Ed(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function To(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Cc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);G=u,o.target.dispatchEvent(u),G=null}else return r=Fa(o),r!==null&&wc(r),n.blockedOn=o,!1;r.shift()}return!0}function bd(n,r,o){To(n)&&o.delete(r)}function Q0(){Tc=!1,lr!==null&&To(lr)&&(lr=null),cr!==null&&To(cr)&&(cr=null),ur!==null&&To(ur)&&(ur=null),Sa.forEach(bd),Ma.forEach(bd)}function wa(n,r){n.blockedOn===r&&(n.blockedOn=null,Tc||(Tc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q0)))}function Ta(n){function r(p){return wa(p,n)}if(0<wo.length){wa(wo[0],n);for(var o=1;o<wo.length;o++){var u=wo[o];u.blockedOn===n&&(u.blockedOn=null)}}for(lr!==null&&wa(lr,n),cr!==null&&wa(cr,n),ur!==null&&wa(ur,n),Sa.forEach(r),Ma.forEach(r),o=0;o<fr.length;o++)u=fr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<fr.length&&(o=fr[0],o.blockedOn===null);)Cd(o),o.blockedOn===null&&fr.shift()}var _s=P.ReactCurrentBatchConfig,Ao=!0;function ev(n,r,o,u){var p=It,x=_s.transition;_s.transition=null;try{It=1,Ac(n,r,o,u)}finally{It=p,_s.transition=x}}function tv(n,r,o,u){var p=It,x=_s.transition;_s.transition=null;try{It=4,Ac(n,r,o,u)}finally{It=p,_s.transition=x}}function Ac(n,r,o,u){if(Ao){var p=Cc(n,r,o,u);if(p===null)Wc(n,r,u,Co,o),Ad(n,u);else if(J0(p,n,r,o,u))u.stopPropagation();else if(Ad(n,u),r&4&&-1<Z0.indexOf(n)){for(;p!==null;){var x=Fa(p);if(x!==null&&Eo(x),x=Cc(n,r,o,u),x===null&&Wc(n,r,u,Co,o),x===p)break;p=x}p!==null&&u.stopPropagation()}else Wc(n,r,u,null,o)}}var Co=null;function Cc(n,r,o,u){if(Co=null,n=He(u),n=Vr(n),n!==null)if(r=Ut(n),r===null)n=null;else if(o=r.tag,o===13){if(n=N(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Co=n,null}function Rd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mt()){case ct:return 1;case Tt:return 4;case Nt:case Bt:return 16;case Yt:return 536870912;default:return 16}default:return 16}}var dr=null,bc=null,bo=null;function Pd(){if(bo)return bo;var n,r=bc,o=r.length,u,p="value"in dr?dr.value:dr.textContent,x=p.length;for(n=0;n<o&&r[n]===p[n];n++);var C=o-n;for(u=1;u<=C&&r[o-u]===p[x-u];u++);return bo=p.slice(n,1<u?1-u:void 0)}function Ro(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function Ld(){return!1}function Jn(n){function r(o,u,p,x,C){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Po:Ld,this.isPropagationStopped=Ld,this}return ce(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),r}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=Jn(xs),Aa=ce({},xs,{view:0,detail:0}),nv=Jn(Aa),Pc,Lc,Ca,Lo=ce({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(Pc=n.screenX-Ca.screenX,Lc=n.screenY-Ca.screenY):Lc=Pc=0,Ca=n),Pc)},movementY:function(n){return"movementY"in n?n.movementY:Lc}}),Nd=Jn(Lo),iv=ce({},Lo,{dataTransfer:0}),rv=Jn(iv),sv=ce({},Aa,{relatedTarget:0}),Nc=Jn(sv),av=ce({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),ov=Jn(av),lv=ce({},xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cv=Jn(lv),uv=ce({},xs,{data:0}),Id=Jn(uv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=hv[n])?!!r[n]:!1}function Ic(){return pv}var mv=ce({},Aa,{key:function(n){if(n.key){var r=fv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ro(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(n){return n.type==="keypress"?Ro(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ro(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gv=Jn(mv),vv=ce({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=Jn(vv),_v=ce({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),xv=Jn(_v),yv=ce({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=Jn(yv),Mv=ce({},Lo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=Jn(Mv),wv=[9,13,27,32],Dc=f&&"CompositionEvent"in window,ba=null;f&&"documentMode"in document&&(ba=document.documentMode);var Tv=f&&"TextEvent"in window&&!ba,Ud=f&&(!Dc||ba&&8<ba&&11>=ba),Od=" ",Fd=!1;function zd(n,r){switch(n){case"keyup":return wv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function Av(n,r){switch(n){case"compositionend":return kd(r);case"keypress":return r.which!==32?null:(Fd=!0,Od);case"textInput":return n=r.data,n===Od&&Fd?null:n;default:return null}}function Cv(n,r){if(ys)return n==="compositionend"||!Dc&&zd(n,r)?(n=Pd(),bo=bc=dr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ud&&r.locale!=="ko"?null:r.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!bv[n.type]:r==="textarea"}function Hd(n,r,o,u){pt(u),r=Oo(r,"onChange"),0<r.length&&(o=new Rc("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Ra=null,Pa=null;function Rv(n){sh(n,0)}function No(n){var r=Ts(n);if(ye(r))return n}function Pv(n,r){if(n==="change")return r}var Vd=!1;if(f){var Uc;if(f){var Oc="oninput"in document;if(!Oc){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Oc=typeof Gd.oninput=="function"}Uc=Oc}else Uc=!1;Vd=Uc&&(!document.documentMode||9<document.documentMode)}function Wd(){Ra&&(Ra.detachEvent("onpropertychange",jd),Pa=Ra=null)}function jd(n){if(n.propertyName==="value"&&No(Pa)){var r=[];Hd(r,Pa,n,He(n)),kt(Rv,r)}}function Lv(n,r,o){n==="focusin"?(Wd(),Ra=r,Pa=o,Ra.attachEvent("onpropertychange",jd)):n==="focusout"&&Wd()}function Nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(Pa)}function Iv(n,r){if(n==="click")return No(r)}function Dv(n,r){if(n==="input"||n==="change")return No(r)}function Uv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mi=typeof Object.is=="function"?Object.is:Uv;function La(n,r){if(mi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!d.call(r,p)||!mi(n[p],r[p]))return!1}return!0}function Xd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qd(n,r){var o=Xd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xd(o)}}function Yd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Yd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function $d(){for(var n=window,r=Ee();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ee(n.document)}return r}function Fc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Ov(n){var r=$d(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Yd(o.ownerDocument.documentElement,o)){if(u!==null&&Fc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=qd(o,x);var C=qd(o,u);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(C.node,C.offset)):(r.setEnd(C.node,C.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Fv=f&&"documentMode"in document&&11>=document.documentMode,Ss=null,zc=null,Na=null,kc=!1;function Kd(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;kc||Ss==null||Ss!==Ee(u)||(u=Ss,"selectionStart"in u&&Fc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Na&&La(Na,u)||(Na=u,u=Oo(zc,"onSelect"),0<u.length&&(r=new Rc("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ss)))}function Io(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ms={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Bc={},Zd={};f&&(Zd=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Do(n){if(Bc[n])return Bc[n];if(!Ms[n])return n;var r=Ms[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Zd)return Bc[n]=r[o];return n}var Jd=Do("animationend"),Qd=Do("animationiteration"),eh=Do("animationstart"),th=Do("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,r){nh.set(n,r),l(r,[n])}for(var Hc=0;Hc<ih.length;Hc++){var Vc=ih[Hc],zv=Vc.toLowerCase(),kv=Vc[0].toUpperCase()+Vc.slice(1);hr(zv,"on"+kv)}hr(Jd,"onAnimationEnd"),hr(Qd,"onAnimationIteration"),hr(eh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function rh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,In(u,r,void 0,n),n.currentTarget=null}function sh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var C=u.length-1;0<=C;C--){var k=u[C],j=k.instance,de=k.currentTarget;if(k=k.listener,j!==x&&p.isPropagationStopped())break e;rh(p,k,de),x=j}else for(C=0;C<u.length;C++){if(k=u[C],j=k.instance,de=k.currentTarget,k=k.listener,j!==x&&p.isPropagationStopped())break e;rh(p,k,de),x=j}}}if(_t)throw n=qt,_t=!1,qt=null,n}function Gt(n,r){var o=r[Kc];o===void 0&&(o=r[Kc]=new Set);var u=n+"__bubble";o.has(u)||(ah(r,n,2,!1),o.add(u))}function Gc(n,r,o){var u=0;r&&(u|=4),ah(o,n,u,r)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Uo]){n[Uo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Bv.has(o)||Gc(o,!1,n),Gc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Uo]||(r[Uo]=!0,Gc("selectionchange",!1,r))}}function ah(n,r,o,u){switch(Rd(r)){case 1:var p=ev;break;case 4:p=tv;break;default:p=Ac}o=p.bind(null,r,o,n),p=void 0,!Ge||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Wc(n,r,o,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var k=u.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(C===4)for(C=u.return;C!==null;){var j=C.tag;if((j===3||j===4)&&(j=C.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;C=C.return}for(;k!==null;){if(C=Vr(k),C===null)return;if(j=C.tag,j===5||j===6){u=x=C;continue e}k=k.parentNode}}u=u.return}kt(function(){var de=x,Oe=He(o),ke=[];e:{var De=nh.get(n);if(De!==void 0){var Qe=Rc,at=n;switch(n){case"keypress":if(Ro(o)===0)break e;case"keydown":case"keyup":Qe=gv;break;case"focusin":at="focus",Qe=Nc;break;case"focusout":at="blur",Qe=Nc;break;case"beforeblur":case"afterblur":Qe=Nc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=xv;break;case Jd:case Qd:case eh:Qe=ov;break;case th:Qe=Sv;break;case"scroll":Qe=nv;break;case"wheel":Qe=Ev;break;case"copy":case"cut":case"paste":Qe=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Dd}var ot=(r&4)!==0,an=!ot&&n==="scroll",re=ot?De!==null?De+"Capture":null:De;ot=[];for(var q=de,oe;q!==null;){oe=q;var We=oe.stateNode;if(oe.tag===5&&We!==null&&(oe=We,re!==null&&(We=Dt(q,re),We!=null&&ot.push(Ua(q,We,oe)))),an)break;q=q.return}0<ot.length&&(De=new Qe(De,at,null,o,Oe),ke.push({event:De,listeners:ot}))}}if((r&7)===0){e:{if(De=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",De&&o!==G&&(at=o.relatedTarget||o.fromElement)&&(Vr(at)||at[Hi]))break e;if((Qe||De)&&(De=Oe.window===Oe?Oe:(De=Oe.ownerDocument)?De.defaultView||De.parentWindow:window,Qe?(at=o.relatedTarget||o.toElement,Qe=de,at=at?Vr(at):null,at!==null&&(an=Ut(at),at!==an||at.tag!==5&&at.tag!==6)&&(at=null)):(Qe=null,at=de),Qe!==at)){if(ot=Nd,We="onMouseLeave",re="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Dd,We="onPointerLeave",re="onPointerEnter",q="pointer"),an=Qe==null?De:Ts(Qe),oe=at==null?De:Ts(at),De=new ot(We,q+"leave",Qe,o,Oe),De.target=an,De.relatedTarget=oe,We=null,Vr(Oe)===de&&(ot=new ot(re,q+"enter",at,o,Oe),ot.target=oe,ot.relatedTarget=an,We=ot),an=We,Qe&&at)t:{for(ot=Qe,re=at,q=0,oe=ot;oe;oe=Es(oe))q++;for(oe=0,We=re;We;We=Es(We))oe++;for(;0<q-oe;)ot=Es(ot),q--;for(;0<oe-q;)re=Es(re),oe--;for(;q--;){if(ot===re||re!==null&&ot===re.alternate)break t;ot=Es(ot),re=Es(re)}ot=null}else ot=null;Qe!==null&&oh(ke,De,Qe,ot,!1),at!==null&&an!==null&&oh(ke,an,at,ot,!0)}}e:{if(De=de?Ts(de):window,Qe=De.nodeName&&De.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&De.type==="file")var ut=Pv;else if(Bd(De))if(Vd)ut=Dv;else{ut=Nv;var gt=Lv}else(Qe=De.nodeName)&&Qe.toLowerCase()==="input"&&(De.type==="checkbox"||De.type==="radio")&&(ut=Iv);if(ut&&(ut=ut(n,de))){Hd(ke,ut,o,Oe);break e}gt&&gt(n,De,de),n==="focusout"&&(gt=De._wrapperState)&&gt.controlled&&De.type==="number"&&qe(De,"number",De.value)}switch(gt=de?Ts(de):window,n){case"focusin":(Bd(gt)||gt.contentEditable==="true")&&(Ss=gt,zc=de,Na=null);break;case"focusout":Na=zc=Ss=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Kd(ke,o,Oe);break;case"selectionchange":if(Fv)break;case"keydown":case"keyup":Kd(ke,o,Oe)}var vt;if(Dc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ys?zd(n,o)&&(xt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(Ud&&o.locale!=="ko"&&(ys||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ys&&(vt=Pd()):(dr=Oe,bc="value"in dr?dr.value:dr.textContent,ys=!0)),gt=Oo(de,xt),0<gt.length&&(xt=new Id(xt,n,null,o,Oe),ke.push({event:xt,listeners:gt}),vt?xt.data=vt:(vt=kd(o),vt!==null&&(xt.data=vt)))),(vt=Tv?Av(n,o):Cv(n,o))&&(de=Oo(de,"onBeforeInput"),0<de.length&&(Oe=new Id("onBeforeInput","beforeinput",null,o,Oe),ke.push({event:Oe,listeners:de}),Oe.data=vt))}sh(ke,r)})}function Ua(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Oo(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Dt(n,o),x!=null&&u.unshift(Ua(n,x,p)),x=Dt(n,r),x!=null&&u.push(Ua(n,x,p))),n=n.return}return u}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function oh(n,r,o,u,p){for(var x=r._reactName,C=[];o!==null&&o!==u;){var k=o,j=k.alternate,de=k.stateNode;if(j!==null&&j===u)break;k.tag===5&&de!==null&&(k=de,p?(j=Dt(o,x),j!=null&&C.unshift(Ua(o,j,k))):p||(j=Dt(o,x),j!=null&&C.push(Ua(o,j,k)))),o=o.return}C.length!==0&&n.push({event:r,listeners:C})}var Hv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function lh(n){return(typeof n=="string"?n:""+n).replace(Hv,`
`).replace(Vv,"")}function Fo(n,r,o){if(r=lh(r),lh(n)!==r&&o)throw Error(t(425))}function zo(){}var jc=null,Xc=null;function qc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(n){return ch.resolve(null).then(n).catch(jv)}:Yc;function jv(n){setTimeout(function(){throw n})}function $c(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),Ta(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);Ta(r)}function pr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function uh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),bi="__reactFiber$"+ws,Oa="__reactProps$"+ws,Hi="__reactContainer$"+ws,Kc="__reactEvents$"+ws,Xv="__reactListeners$"+ws,qv="__reactHandles$"+ws;function Vr(n){var r=n[bi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Hi]||o[bi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=uh(n);n!==null;){if(o=n[bi])return o;n=uh(n)}return r}n=o,o=n.parentNode}return null}function Fa(n){return n=n[bi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[Oa]||null}var Zc=[],As=-1;function mr(n){return{current:n}}function Wt(n){0>As||(n.current=Zc[As],Zc[As]=null,As--)}function Vt(n,r){As++,Zc[As]=n.current,n.current=r}var gr={},Tn=mr(gr),Hn=mr(!1),Gr=gr;function Cs(n,r){var o=n.type.contextTypes;if(!o)return gr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in o)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Vn(n){return n=n.childContextTypes,n!=null}function Bo(){Wt(Hn),Wt(Tn)}function fh(n,r,o){if(Tn.current!==gr)throw Error(t(168));Vt(Tn,r),Vt(Hn,o)}function dh(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,xe(n)||"Unknown",p));return ce({},o,u)}function Ho(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Gr=Tn.current,Vt(Tn,n),Vt(Hn,Hn.current),!0}function hh(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=dh(n,r,Gr),u.__reactInternalMemoizedMergedChildContext=n,Wt(Hn),Wt(Tn),Vt(Tn,n)):Wt(Hn),Vt(Hn,o)}var Vi=null,Vo=!1,Jc=!1;function ph(n){Vi===null?Vi=[n]:Vi.push(n)}function Yv(n){Vo=!0,ph(n)}function vr(){if(!Jc&&Vi!==null){Jc=!0;var n=0,r=It;try{var o=Vi;for(It=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Vi=null,Vo=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(n+1)),Pe(ct,vr),p}finally{It=r,Jc=!1}}return null}var bs=[],Rs=0,Go=null,Wo=0,oi=[],li=0,Wr=null,Gi=1,Wi="";function jr(n,r){bs[Rs++]=Wo,bs[Rs++]=Go,Go=n,Wo=r}function mh(n,r,o){oi[li++]=Gi,oi[li++]=Wi,oi[li++]=Wr,Wr=n;var u=Gi;n=Wi;var p=32-yt(u)-1;u&=~(1<<p),o+=1;var x=32-yt(r)+p;if(30<x){var C=p-p%5;x=(u&(1<<C)-1).toString(32),u>>=C,p-=C,Gi=1<<32-yt(r)+p|o<<p|u,Wi=x+n}else Gi=1<<x|o<<p|u,Wi=n}function Qc(n){n.return!==null&&(jr(n,1),mh(n,1,0))}function eu(n){for(;n===Go;)Go=bs[--Rs],bs[Rs]=null,Wo=bs[--Rs],bs[Rs]=null;for(;n===Wr;)Wr=oi[--li],oi[li]=null,Wi=oi[--li],oi[li]=null,Gi=oi[--li],oi[li]=null}var Qn=null,ei=null,$t=!1,gi=null;function gh(n,r){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function vh(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Qn=n,ei=pr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Qn=n,ei=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Wr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Qn=n,ei=null,!0):!1;default:return!1}}function tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nu(n){if($t){var r=ei;if(r){var o=r;if(!vh(n,r)){if(tu(n))throw Error(t(418));r=pr(o.nextSibling);var u=Qn;r&&vh(n,r)?gh(u,o):(n.flags=n.flags&-4097|2,$t=!1,Qn=n)}}else{if(tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Qn=n}}}function _h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function jo(n){if(n!==Qn)return!1;if(!$t)return _h(n),$t=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!qc(n.type,n.memoizedProps)),r&&(r=ei)){if(tu(n))throw xh(),Error(t(418));for(;r;)gh(n,r),r=pr(r.nextSibling)}if(_h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ei=pr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ei=null}}else ei=Qn?pr(n.stateNode.nextSibling):null;return!0}function xh(){for(var n=ei;n;)n=pr(n.nextSibling)}function Ps(){ei=Qn=null,$t=!1}function iu(n){gi===null?gi=[n]:gi.push(n)}var $v=P.ReactCurrentBatchConfig;function za(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(C){var k=p.refs;C===null?delete k[x]:k[x]=C},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Xo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function yh(n){var r=n._init;return r(n._payload)}function Sh(n){function r(re,q){if(n){var oe=re.deletions;oe===null?(re.deletions=[q],re.flags|=16):oe.push(q)}}function o(re,q){if(!n)return null;for(;q!==null;)r(re,q),q=q.sibling;return null}function u(re,q){for(re=new Map;q!==null;)q.key!==null?re.set(q.key,q):re.set(q.index,q),q=q.sibling;return re}function p(re,q){return re=Tr(re,q),re.index=0,re.sibling=null,re}function x(re,q,oe){return re.index=oe,n?(oe=re.alternate,oe!==null?(oe=oe.index,oe<q?(re.flags|=2,q):oe):(re.flags|=2,q)):(re.flags|=1048576,q)}function C(re){return n&&re.alternate===null&&(re.flags|=2),re}function k(re,q,oe,We){return q===null||q.tag!==6?(q=Yu(oe,re.mode,We),q.return=re,q):(q=p(q,oe),q.return=re,q)}function j(re,q,oe,We){var ut=oe.type;return ut===U?Oe(re,q,oe.props.children,We,oe.key):q!==null&&(q.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Y&&yh(ut)===q.type)?(We=p(q,oe.props),We.ref=za(re,q,oe),We.return=re,We):(We=gl(oe.type,oe.key,oe.props,null,re.mode,We),We.ref=za(re,q,oe),We.return=re,We)}function de(re,q,oe,We){return q===null||q.tag!==4||q.stateNode.containerInfo!==oe.containerInfo||q.stateNode.implementation!==oe.implementation?(q=$u(oe,re.mode,We),q.return=re,q):(q=p(q,oe.children||[]),q.return=re,q)}function Oe(re,q,oe,We,ut){return q===null||q.tag!==7?(q=Qr(oe,re.mode,We,ut),q.return=re,q):(q=p(q,oe),q.return=re,q)}function ke(re,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Yu(""+q,re.mode,oe),q.return=re,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case B:return oe=gl(q.type,q.key,q.props,null,re.mode,oe),oe.ref=za(re,null,q),oe.return=re,oe;case R:return q=$u(q,re.mode,oe),q.return=re,q;case Y:var We=q._init;return ke(re,We(q._payload),oe)}if(D(q)||ue(q))return q=Qr(q,re.mode,oe,null),q.return=re,q;Xo(re,q)}return null}function De(re,q,oe,We){var ut=q!==null?q.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return ut!==null?null:k(re,q,""+oe,We);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case B:return oe.key===ut?j(re,q,oe,We):null;case R:return oe.key===ut?de(re,q,oe,We):null;case Y:return ut=oe._init,De(re,q,ut(oe._payload),We)}if(D(oe)||ue(oe))return ut!==null?null:Oe(re,q,oe,We,null);Xo(re,oe)}return null}function Qe(re,q,oe,We,ut){if(typeof We=="string"&&We!==""||typeof We=="number")return re=re.get(oe)||null,k(q,re,""+We,ut);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case B:return re=re.get(We.key===null?oe:We.key)||null,j(q,re,We,ut);case R:return re=re.get(We.key===null?oe:We.key)||null,de(q,re,We,ut);case Y:var gt=We._init;return Qe(re,q,oe,gt(We._payload),ut)}if(D(We)||ue(We))return re=re.get(oe)||null,Oe(q,re,We,ut,null);Xo(q,We)}return null}function at(re,q,oe,We){for(var ut=null,gt=null,vt=q,xt=q=0,_n=null;vt!==null&&xt<oe.length;xt++){vt.index>xt?(_n=vt,vt=null):_n=vt.sibling;var Lt=De(re,vt,oe[xt],We);if(Lt===null){vt===null&&(vt=_n);break}n&&vt&&Lt.alternate===null&&r(re,vt),q=x(Lt,q,xt),gt===null?ut=Lt:gt.sibling=Lt,gt=Lt,vt=_n}if(xt===oe.length)return o(re,vt),$t&&jr(re,xt),ut;if(vt===null){for(;xt<oe.length;xt++)vt=ke(re,oe[xt],We),vt!==null&&(q=x(vt,q,xt),gt===null?ut=vt:gt.sibling=vt,gt=vt);return $t&&jr(re,xt),ut}for(vt=u(re,vt);xt<oe.length;xt++)_n=Qe(vt,re,xt,oe[xt],We),_n!==null&&(n&&_n.alternate!==null&&vt.delete(_n.key===null?xt:_n.key),q=x(_n,q,xt),gt===null?ut=_n:gt.sibling=_n,gt=_n);return n&&vt.forEach(function(Ar){return r(re,Ar)}),$t&&jr(re,xt),ut}function ot(re,q,oe,We){var ut=ue(oe);if(typeof ut!="function")throw Error(t(150));if(oe=ut.call(oe),oe==null)throw Error(t(151));for(var gt=ut=null,vt=q,xt=q=0,_n=null,Lt=oe.next();vt!==null&&!Lt.done;xt++,Lt=oe.next()){vt.index>xt?(_n=vt,vt=null):_n=vt.sibling;var Ar=De(re,vt,Lt.value,We);if(Ar===null){vt===null&&(vt=_n);break}n&&vt&&Ar.alternate===null&&r(re,vt),q=x(Ar,q,xt),gt===null?ut=Ar:gt.sibling=Ar,gt=Ar,vt=_n}if(Lt.done)return o(re,vt),$t&&jr(re,xt),ut;if(vt===null){for(;!Lt.done;xt++,Lt=oe.next())Lt=ke(re,Lt.value,We),Lt!==null&&(q=x(Lt,q,xt),gt===null?ut=Lt:gt.sibling=Lt,gt=Lt);return $t&&jr(re,xt),ut}for(vt=u(re,vt);!Lt.done;xt++,Lt=oe.next())Lt=Qe(vt,re,xt,Lt.value,We),Lt!==null&&(n&&Lt.alternate!==null&&vt.delete(Lt.key===null?xt:Lt.key),q=x(Lt,q,xt),gt===null?ut=Lt:gt.sibling=Lt,gt=Lt);return n&&vt.forEach(function(b_){return r(re,b_)}),$t&&jr(re,xt),ut}function an(re,q,oe,We){if(typeof oe=="object"&&oe!==null&&oe.type===U&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case B:e:{for(var ut=oe.key,gt=q;gt!==null;){if(gt.key===ut){if(ut=oe.type,ut===U){if(gt.tag===7){o(re,gt.sibling),q=p(gt,oe.props.children),q.return=re,re=q;break e}}else if(gt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Y&&yh(ut)===gt.type){o(re,gt.sibling),q=p(gt,oe.props),q.ref=za(re,gt,oe),q.return=re,re=q;break e}o(re,gt);break}else r(re,gt);gt=gt.sibling}oe.type===U?(q=Qr(oe.props.children,re.mode,We,oe.key),q.return=re,re=q):(We=gl(oe.type,oe.key,oe.props,null,re.mode,We),We.ref=za(re,q,oe),We.return=re,re=We)}return C(re);case R:e:{for(gt=oe.key;q!==null;){if(q.key===gt)if(q.tag===4&&q.stateNode.containerInfo===oe.containerInfo&&q.stateNode.implementation===oe.implementation){o(re,q.sibling),q=p(q,oe.children||[]),q.return=re,re=q;break e}else{o(re,q);break}else r(re,q);q=q.sibling}q=$u(oe,re.mode,We),q.return=re,re=q}return C(re);case Y:return gt=oe._init,an(re,q,gt(oe._payload),We)}if(D(oe))return at(re,q,oe,We);if(ue(oe))return ot(re,q,oe,We);Xo(re,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,q!==null&&q.tag===6?(o(re,q.sibling),q=p(q,oe),q.return=re,re=q):(o(re,q),q=Yu(oe,re.mode,We),q.return=re,re=q),C(re)):o(re,q)}return an}var Ls=Sh(!0),Mh=Sh(!1),qo=mr(null),Yo=null,Ns=null,ru=null;function su(){ru=Ns=Yo=null}function au(n){var r=qo.current;Wt(qo),n._currentValue=r}function ou(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Is(n,r){Yo=n,ru=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gn=!0),n.firstContext=null)}function ci(n){var r=n._currentValue;if(ru!==n)if(n={context:n,memoizedValue:r,next:null},Ns===null){if(Yo===null)throw Error(t(308));Ns=n,Yo.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return r}var Xr=null;function lu(n){Xr===null?Xr=[n]:Xr.push(n)}function Eh(n,r,o,u){var p=r.interleaved;return p===null?(o.next=o,lu(r)):(o.next=p.next,p.next=o),r.interleaved=o,ji(n,u)}function ji(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var _r=!1;function cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function xr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Pt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,ji(n,o)}return p=u.interleaved,p===null?(r.next=r,lu(u)):(r.next=p.next,p.next=r),u.interleaved=r,ji(n,o)}function $o(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ya(n,o)}}function Th(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,x=null;if(o=o.firstBaseUpdate,o!==null){do{var C={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};x===null?p=x=C:x=x.next=C,o=o.next}while(o!==null);x===null?p=x=r:x=x.next=r}else p=x=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Ko(n,r,o,u){var p=n.updateQueue;_r=!1;var x=p.firstBaseUpdate,C=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var j=k,de=j.next;j.next=null,C===null?x=de:C.next=de,C=j;var Oe=n.alternate;Oe!==null&&(Oe=Oe.updateQueue,k=Oe.lastBaseUpdate,k!==C&&(k===null?Oe.firstBaseUpdate=de:k.next=de,Oe.lastBaseUpdate=j))}if(x!==null){var ke=p.baseState;C=0,Oe=de=j=null,k=x;do{var De=k.lane,Qe=k.eventTime;if((u&De)===De){Oe!==null&&(Oe=Oe.next={eventTime:Qe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var at=n,ot=k;switch(De=r,Qe=o,ot.tag){case 1:if(at=ot.payload,typeof at=="function"){ke=at.call(Qe,ke,De);break e}ke=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ot.payload,De=typeof at=="function"?at.call(Qe,ke,De):at,De==null)break e;ke=ce({},ke,De);break e;case 2:_r=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,De=p.effects,De===null?p.effects=[k]:De.push(k))}else Qe={eventTime:Qe,lane:De,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Oe===null?(de=Oe=Qe,j=ke):Oe=Oe.next=Qe,C|=De;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;De=k,k=De.next,De.next=null,p.lastBaseUpdate=De,p.shared.pending=null}}while(!0);if(Oe===null&&(j=ke),p.baseState=j,p.firstBaseUpdate=de,p.lastBaseUpdate=Oe,r=p.shared.interleaved,r!==null){p=r;do C|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);$r|=C,n.lanes=C,n.memoizedState=ke}}function Ah(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ka={},Ri=mr(ka),Ba=mr(ka),Ha=mr(ka);function qr(n){if(n===ka)throw Error(t(174));return n}function uu(n,r){switch(Vt(Ha,r),Vt(Ba,n),Vt(Ri,ka),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ne(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ne(r,n)}Wt(Ri),Vt(Ri,r)}function Ds(){Wt(Ri),Wt(Ba),Wt(Ha)}function Ch(n){qr(Ha.current);var r=qr(Ri.current),o=Ne(r,n.type);r!==o&&(Vt(Ba,n),Vt(Ri,o))}function fu(n){Ba.current===n&&(Wt(Ri),Wt(Ba))}var Jt=mr(0);function Zo(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var du=[];function hu(){for(var n=0;n<du.length;n++)du[n]._workInProgressVersionPrimary=null;du.length=0}var Jo=P.ReactCurrentDispatcher,pu=P.ReactCurrentBatchConfig,Yr=0,Qt=null,un=null,gn=null,Qo=!1,Va=!1,Ga=0,Kv=0;function An(){throw Error(t(321))}function mu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!mi(n[o],r[o]))return!1;return!0}function gu(n,r,o,u,p,x){if(Yr=x,Qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Jo.current=n===null||n.memoizedState===null?e_:t_,n=o(u,p),Va){x=0;do{if(Va=!1,Ga=0,25<=x)throw Error(t(301));x+=1,gn=un=null,r.updateQueue=null,Jo.current=n_,n=o(u,p)}while(Va)}if(Jo.current=nl,r=un!==null&&un.next!==null,Yr=0,gn=un=Qt=null,Qo=!1,r)throw Error(t(300));return n}function vu(){var n=Ga!==0;return Ga=0,n}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Qt.memoizedState=gn=n:gn=gn.next=n,gn}function ui(){if(un===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var r=gn===null?Qt.memoizedState:gn.next;if(r!==null)gn=r,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},gn===null?Qt.memoizedState=gn=n:gn=gn.next=n}return gn}function Wa(n,r){return typeof r=="function"?r(n):r}function _u(n){var r=ui(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=un,p=u.baseQueue,x=o.pending;if(x!==null){if(p!==null){var C=p.next;p.next=x.next,x.next=C}u.baseQueue=p=x,o.pending=null}if(p!==null){x=p.next,u=u.baseState;var k=C=null,j=null,de=x;do{var Oe=de.lane;if((Yr&Oe)===Oe)j!==null&&(j=j.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),u=de.hasEagerState?de.eagerState:n(u,de.action);else{var ke={lane:Oe,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};j===null?(k=j=ke,C=u):j=j.next=ke,Qt.lanes|=Oe,$r|=Oe}de=de.next}while(de!==null&&de!==x);j===null?C=u:j.next=k,mi(u,r.memoizedState)||(Gn=!0),r.memoizedState=u,r.baseState=C,r.baseQueue=j,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do x=p.lane,Qt.lanes|=x,$r|=x,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function xu(n){var r=ui(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,x=r.memoizedState;if(p!==null){o.pending=null;var C=p=p.next;do x=n(x,C.action),C=C.next;while(C!==p);mi(x,r.memoizedState)||(Gn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),o.lastRenderedState=x}return[x,u]}function bh(){}function Rh(n,r){var o=Qt,u=ui(),p=r(),x=!mi(u.memoizedState,p);if(x&&(u.memoizedState=p,Gn=!0),u=u.queue,yu(Nh.bind(null,o,u,n),[n]),u.getSnapshot!==r||x||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,ja(9,Lh.bind(null,o,u,p,r),void 0,null),vn===null)throw Error(t(349));(Yr&30)!==0||Ph(o,r,p)}return p}function Ph(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Lh(n,r,o,u){r.value=o,r.getSnapshot=u,Ih(r)&&Dh(n)}function Nh(n,r,o){return o(function(){Ih(r)&&Dh(n)})}function Ih(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!mi(n,o)}catch{return!0}}function Dh(n){var r=ji(n,1);r!==null&&yi(r,n,1,-1)}function Uh(n){var r=Pi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},r.queue=n,n=n.dispatch=Qv.bind(null,Qt,n),[r.memoizedState,n]}function ja(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Oh(){return ui().memoizedState}function el(n,r,o,u){var p=Pi();Qt.flags|=n,p.memoizedState=ja(1|r,o,void 0,u===void 0?null:u)}function tl(n,r,o,u){var p=ui();u=u===void 0?null:u;var x=void 0;if(un!==null){var C=un.memoizedState;if(x=C.destroy,u!==null&&mu(u,C.deps)){p.memoizedState=ja(r,o,x,u);return}}Qt.flags|=n,p.memoizedState=ja(1|r,o,x,u)}function Fh(n,r){return el(8390656,8,n,r)}function yu(n,r){return tl(2048,8,n,r)}function zh(n,r){return tl(4,2,n,r)}function kh(n,r){return tl(4,4,n,r)}function Bh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Hh(n,r,o){return o=o!=null?o.concat([n]):null,tl(4,4,Bh.bind(null,r,n),o)}function Su(){}function Vh(n,r){var o=ui();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&mu(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Gh(n,r){var o=ui();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&mu(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Wh(n,r,o){return(Yr&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=o):(mi(o,r)||(o=Br(),Qt.lanes|=o,$r|=o,n.baseState=!0),r)}function Zv(n,r){var o=It;It=o!==0&&4>o?o:4,n(!0);var u=pu.transition;pu.transition={};try{n(!1),r()}finally{It=o,pu.transition=u}}function jh(){return ui().memoizedState}function Jv(n,r,o){var u=Er(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Xh(n))qh(r,o);else if(o=Eh(n,r,o,u),o!==null){var p=On();yi(o,n,u,p),Yh(o,r,u)}}function Qv(n,r,o){var u=Er(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xh(n))qh(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var C=r.lastRenderedState,k=x(C,o);if(p.hasEagerState=!0,p.eagerState=k,mi(k,C)){var j=r.interleaved;j===null?(p.next=p,lu(r)):(p.next=j.next,j.next=p),r.interleaved=p;return}}catch{}finally{}o=Eh(n,r,p,u),o!==null&&(p=On(),yi(o,n,u,p),Yh(o,r,u))}}function Xh(n){var r=n.alternate;return n===Qt||r!==null&&r===Qt}function qh(n,r){Va=Qo=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Yh(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ya(n,o)}}var nl={readContext:ci,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},e_={readContext:ci,useCallback:function(n,r){return Pi().memoizedState=[n,r===void 0?null:r],n},useContext:ci,useEffect:Fh,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,el(4194308,4,Bh.bind(null,r,n),o)},useLayoutEffect:function(n,r){return el(4194308,4,n,r)},useInsertionEffect:function(n,r){return el(4,2,n,r)},useMemo:function(n,r){var o=Pi();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Pi();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Jv.bind(null,Qt,n),[u.memoizedState,n]},useRef:function(n){var r=Pi();return n={current:n},r.memoizedState=n},useState:Uh,useDebugValue:Su,useDeferredValue:function(n){return Pi().memoizedState=n},useTransition:function(){var n=Uh(!1),r=n[0];return n=Zv.bind(null,n[1]),Pi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=Qt,p=Pi();if($t){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),vn===null)throw Error(t(349));(Yr&30)!==0||Ph(u,r,o)}p.memoizedState=o;var x={value:o,getSnapshot:r};return p.queue=x,Fh(Nh.bind(null,u,x,n),[n]),u.flags|=2048,ja(9,Lh.bind(null,u,x,o,r),void 0,null),o},useId:function(){var n=Pi(),r=vn.identifierPrefix;if($t){var o=Wi,u=Gi;o=(u&~(1<<32-yt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ga++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Kv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},t_={readContext:ci,useCallback:Vh,useContext:ci,useEffect:yu,useImperativeHandle:Hh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Gh,useReducer:_u,useRef:Oh,useState:function(){return _u(Wa)},useDebugValue:Su,useDeferredValue:function(n){var r=ui();return Wh(r,un.memoizedState,n)},useTransition:function(){var n=_u(Wa)[0],r=ui().memoizedState;return[n,r]},useMutableSource:bh,useSyncExternalStore:Rh,useId:jh,unstable_isNewReconciler:!1},n_={readContext:ci,useCallback:Vh,useContext:ci,useEffect:yu,useImperativeHandle:Hh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Gh,useReducer:xu,useRef:Oh,useState:function(){return xu(Wa)},useDebugValue:Su,useDeferredValue:function(n){var r=ui();return un===null?r.memoizedState=n:Wh(r,un.memoizedState,n)},useTransition:function(){var n=xu(Wa)[0],r=ui().memoizedState;return[n,r]},useMutableSource:bh,useSyncExternalStore:Rh,useId:jh,unstable_isNewReconciler:!1};function vi(n,r){if(n&&n.defaultProps){r=ce({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Mu(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:ce({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var il={isMounted:function(n){return(n=n._reactInternals)?Ut(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=On(),p=Er(n),x=Xi(u,p);x.payload=r,o!=null&&(x.callback=o),r=xr(n,x,p),r!==null&&(yi(r,n,p,u),$o(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=On(),p=Er(n),x=Xi(u,p);x.tag=1,x.payload=r,o!=null&&(x.callback=o),r=xr(n,x,p),r!==null&&(yi(r,n,p,u),$o(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=On(),u=Er(n),p=Xi(o,u);p.tag=2,r!=null&&(p.callback=r),r=xr(n,p,u),r!==null&&(yi(r,n,u,o),$o(r,n,u))}};function $h(n,r,o,u,p,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,C):r.prototype&&r.prototype.isPureReactComponent?!La(o,u)||!La(p,x):!0}function Kh(n,r,o){var u=!1,p=gr,x=r.contextType;return typeof x=="object"&&x!==null?x=ci(x):(p=Vn(r)?Gr:Tn.current,u=r.contextTypes,x=(u=u!=null)?Cs(n,p):gr),r=new r(o,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=il,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Zh(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&il.enqueueReplaceState(r,r.state,null)}function Eu(n,r,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},cu(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=ci(x):(x=Vn(r)?Gr:Tn.current,p.context=Cs(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Mu(n,r,x,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&il.enqueueReplaceState(p,p.state,null),Ko(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,r){try{var o="",u=r;do o+=ie(u),u=u.return;while(u);var p=o}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function wu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Tu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var i_=typeof WeakMap=="function"?WeakMap:Map;function Jh(n,r,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){ul||(ul=!0,Bu=u),Tu(n,r)},o}function Qh(n,r,o){o=Xi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;o.payload=function(){return u(p)},o.callback=function(){Tu(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(o.callback=function(){Tu(n,r),typeof u!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})}),o}function ep(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new i_;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(p.add(o),n=v_.bind(null,n,r,o),r.then(n,n))}function tp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function np(n,r,o,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Xi(-1,1),r.tag=2,xr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var r_=P.ReactCurrentOwner,Gn=!1;function Un(n,r,o,u){r.child=n===null?Mh(r,null,o,u):Ls(r,n.child,o,u)}function ip(n,r,o,u,p){o=o.render;var x=r.ref;return Is(r,p),u=gu(n,r,o,u,x,p),o=vu(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):($t&&o&&Qc(r),r.flags|=1,Un(n,r,u,p),r.child)}function rp(n,r,o,u,p){if(n===null){var x=o.type;return typeof x=="function"&&!qu(x)&&x.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=x,sp(n,r,x,u,p)):(n=gl(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var C=x.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(C,u)&&n.ref===r.ref)return qi(n,r,p)}return r.flags|=1,n=Tr(x,u),n.ref=r.ref,n.return=r,r.child=n}function sp(n,r,o,u,p){if(n!==null){var x=n.memoizedProps;if(La(x,u)&&n.ref===r.ref)if(Gn=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Gn=!0);else return r.lanes=n.lanes,qi(n,r,p)}return Au(n,r,o,u,p)}function ap(n,r,o){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Fs,ti),ti|=o;else{if((o&1073741824)===0)return n=x!==null?x.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Vt(Fs,ti),ti|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:o,Vt(Fs,ti),ti|=u}else x!==null?(u=x.baseLanes|o,r.memoizedState=null):u=o,Vt(Fs,ti),ti|=u;return Un(n,r,p,o),r.child}function op(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Au(n,r,o,u,p){var x=Vn(o)?Gr:Tn.current;return x=Cs(r,x),Is(r,p),o=gu(n,r,o,u,x,p),u=vu(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):($t&&u&&Qc(r),r.flags|=1,Un(n,r,o,p),r.child)}function lp(n,r,o,u,p){if(Vn(o)){var x=!0;Ho(r)}else x=!1;if(Is(r,p),r.stateNode===null)sl(n,r),Kh(r,o,u),Eu(r,o,u,p),u=!0;else if(n===null){var C=r.stateNode,k=r.memoizedProps;C.props=k;var j=C.context,de=o.contextType;typeof de=="object"&&de!==null?de=ci(de):(de=Vn(o)?Gr:Tn.current,de=Cs(r,de));var Oe=o.getDerivedStateFromProps,ke=typeof Oe=="function"||typeof C.getSnapshotBeforeUpdate=="function";ke||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==u||j!==de)&&Zh(r,C,u,de),_r=!1;var De=r.memoizedState;C.state=De,Ko(r,u,C,p),j=r.memoizedState,k!==u||De!==j||Hn.current||_r?(typeof Oe=="function"&&(Mu(r,o,Oe,u),j=r.memoizedState),(k=_r||$h(r,o,k,u,De,j,de))?(ke||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(r.flags|=4194308)):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=j),C.props=u,C.state=j,C.context=de,u=k):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{C=r.stateNode,wh(n,r),k=r.memoizedProps,de=r.type===r.elementType?k:vi(r.type,k),C.props=de,ke=r.pendingProps,De=C.context,j=o.contextType,typeof j=="object"&&j!==null?j=ci(j):(j=Vn(o)?Gr:Tn.current,j=Cs(r,j));var Qe=o.getDerivedStateFromProps;(Oe=typeof Qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(k!==ke||De!==j)&&Zh(r,C,u,j),_r=!1,De=r.memoizedState,C.state=De,Ko(r,u,C,p);var at=r.memoizedState;k!==ke||De!==at||Hn.current||_r?(typeof Qe=="function"&&(Mu(r,o,Qe,u),at=r.memoizedState),(de=_r||$h(r,o,de,u,De,at,j)||!1)?(Oe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,at,j),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,at,j)),typeof C.componentDidUpdate=="function"&&(r.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&De===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&De===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=at),C.props=u,C.state=at,C.context=j,u=de):(typeof C.componentDidUpdate!="function"||k===n.memoizedProps&&De===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&De===n.memoizedState||(r.flags|=1024),u=!1)}return Cu(n,r,o,u,x,p)}function Cu(n,r,o,u,p,x){op(n,r);var C=(r.flags&128)!==0;if(!u&&!C)return p&&hh(r,o,!1),qi(n,r,x);u=r.stateNode,r_.current=r;var k=C&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&C?(r.child=Ls(r,n.child,null,x),r.child=Ls(r,null,k,x)):Un(n,r,k,x),r.memoizedState=u.state,p&&hh(r,o,!0),r.child}function cp(n){var r=n.stateNode;r.pendingContext?fh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&fh(n,r.context,!1),uu(n,r.containerInfo)}function up(n,r,o,u,p){return Ps(),iu(p),r.flags|=256,Un(n,r,o,u),r.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Ru(n){return{baseLanes:n,cachePool:null,transitions:null}}function fp(n,r,o){var u=r.pendingProps,p=Jt.current,x=!1,C=(r.flags&128)!==0,k;if((k=C)||(k=n!==null&&n.memoizedState===null?!1:(p&2)!==0),k?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Vt(Jt,p&1),n===null)return nu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(C=u.children,n=u.fallback,x?(u=r.mode,x=r.child,C={mode:"hidden",children:C},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=vl(C,u,0,null),n=Qr(n,u,o,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Ru(o),r.memoizedState=bu,n):Pu(r,C));if(p=n.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return s_(n,r,C,u,k,p,o);if(x){x=u.fallback,C=r.mode,p=n.child,k=p.sibling;var j={mode:"hidden",children:u.children};return(C&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=j,r.deletions=null):(u=Tr(p,j),u.subtreeFlags=p.subtreeFlags&14680064),k!==null?x=Tr(k,x):(x=Qr(x,C,o,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,C=n.child.memoizedState,C=C===null?Ru(o):{baseLanes:C.baseLanes|o,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~o,r.memoizedState=bu,u}return x=n.child,n=x.sibling,u=Tr(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Pu(n,r){return r=vl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function rl(n,r,o,u){return u!==null&&iu(u),Ls(r,n.child,null,o),n=Pu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function s_(n,r,o,u,p,x,C){if(o)return r.flags&256?(r.flags&=-257,u=wu(Error(t(422))),rl(n,r,C,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=vl({mode:"visible",children:u.children},p,0,null),x=Qr(x,p,C,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&Ls(r,n.child,null,C),r.child.memoizedState=Ru(C),r.memoizedState=bu,x);if((r.mode&1)===0)return rl(n,r,C,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var k=u.dgst;return u=k,x=Error(t(419)),u=wu(x,u,void 0),rl(n,r,C,u)}if(k=(C&n.childLanes)!==0,Gn||k){if(u=vn,u!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|C))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,ji(n,p),yi(u,n,p,-1))}return Xu(),u=wu(Error(t(421))),rl(n,r,C,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=__.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,ei=pr(p.nextSibling),Qn=r,$t=!0,gi=null,n!==null&&(oi[li++]=Gi,oi[li++]=Wi,oi[li++]=Wr,Gi=n.id,Wi=n.overflow,Wr=r),r=Pu(r,u.children),r.flags|=4096,r)}function dp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),ou(n.return,r,o)}function Lu(n,r,o,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=o,x.tailMode=p)}function hp(n,r,o){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(Un(n,r,u.children,o),u=Jt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dp(n,o,r);else if(n.tag===19)dp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Vt(Jt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Zo(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Lu(r,!1,p,o,x);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Zo(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Lu(r,!0,o,null,x);break;case"together":Lu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function sl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function qi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),$r|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Tr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Tr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function a_(n,r,o){switch(r.tag){case 3:cp(r),Ps();break;case 5:Ch(r);break;case 1:Vn(r.type)&&Ho(r);break;case 4:uu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Vt(qo,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Vt(Jt,Jt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?fp(n,r,o):(Vt(Jt,Jt.current&1),n=qi(n,r,o),n!==null?n.sibling:null);Vt(Jt,Jt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return hp(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Vt(Jt,Jt.current),u)break;return null;case 22:case 23:return r.lanes=0,ap(n,r,o)}return qi(n,r,o)}var pp,Nu,mp,gp;pp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Nu=function(){},mp=function(n,r,o,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,qr(Ri.current);var x=null;switch(o){case"input":p=we(n,p),u=we(n,u),x=[];break;case"select":p=ce({},p,{value:void 0}),u=ce({},u,{value:void 0}),x=[];break;case"textarea":p=ee(n,p),u=ee(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=zo)}lt(o,u);var C;o=null;for(de in p)if(!u.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var k=p[de];for(C in k)k.hasOwnProperty(C)&&(o||(o={}),o[C]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?x||(x=[]):(x=x||[]).push(de,null));for(de in u){var j=u[de];if(k=p!=null?p[de]:void 0,u.hasOwnProperty(de)&&j!==k&&(j!=null||k!=null))if(de==="style")if(k){for(C in k)!k.hasOwnProperty(C)||j&&j.hasOwnProperty(C)||(o||(o={}),o[C]="");for(C in j)j.hasOwnProperty(C)&&k[C]!==j[C]&&(o||(o={}),o[C]=j[C])}else o||(x||(x=[]),x.push(de,o)),o=j;else de==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,k=k?k.__html:void 0,j!=null&&k!==j&&(x=x||[]).push(de,j)):de==="children"?typeof j!="string"&&typeof j!="number"||(x=x||[]).push(de,""+j):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(j!=null&&de==="onScroll"&&Gt("scroll",n),x||k===j||(x=[])):(x=x||[]).push(de,j))}o&&(x=x||[]).push("style",o);var de=x;(r.updateQueue=de)&&(r.flags|=4)}},gp=function(n,r,o,u){o!==u&&(r.flags|=4)};function Xa(n,r){if(!$t)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Cn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function o_(n,r,o){var u=r.pendingProps;switch(eu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(r),null;case 1:return Vn(r.type)&&Bo(),Cn(r),null;case 3:return u=r.stateNode,Ds(),Wt(Hn),Wt(Tn),hu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(jo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gi!==null&&(Gu(gi),gi=null))),Nu(n,r),Cn(r),null;case 5:fu(r);var p=qr(Ha.current);if(o=r.type,n!==null&&r.stateNode!=null)mp(n,r,o,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Cn(r),null}if(n=qr(Ri.current),jo(r)){u=r.stateNode,o=r.type;var x=r.memoizedProps;switch(u[bi]=r,u[Oa]=x,n=(r.mode&1)!==0,o){case"dialog":Gt("cancel",u),Gt("close",u);break;case"iframe":case"object":case"embed":Gt("load",u);break;case"video":case"audio":for(p=0;p<Ia.length;p++)Gt(Ia[p],u);break;case"source":Gt("error",u);break;case"img":case"image":case"link":Gt("error",u),Gt("load",u);break;case"details":Gt("toggle",u);break;case"input":Se(u,x),Gt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},Gt("invalid",u);break;case"textarea":me(u,x),Gt("invalid",u)}lt(o,x),p=null;for(var C in x)if(x.hasOwnProperty(C)){var k=x[C];C==="children"?typeof k=="string"?u.textContent!==k&&(x.suppressHydrationWarning!==!0&&Fo(u.textContent,k,n),p=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(x.suppressHydrationWarning!==!0&&Fo(u.textContent,k,n),p=["children",""+k]):a.hasOwnProperty(C)&&k!=null&&C==="onScroll"&&Gt("scroll",u)}switch(o){case"input":V(u),Ce(u,x,!0);break;case"textarea":V(u),Me(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=zo)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Xe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(o,{is:u.is}):(n=C.createElement(o),o==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,o),n[bi]=r,n[Oa]=u,pp(n,r,!1,!1),r.stateNode=n;e:{switch(C=dt(o,u),o){case"dialog":Gt("cancel",n),Gt("close",n),p=u;break;case"iframe":case"object":case"embed":Gt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Ia.length;p++)Gt(Ia[p],n);p=u;break;case"source":Gt("error",n),p=u;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),p=u;break;case"details":Gt("toggle",n),p=u;break;case"input":Se(n,u),p=we(n,u),Gt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ce({},u,{value:void 0}),Gt("invalid",n);break;case"textarea":me(n,u),p=ee(n,u),Gt("invalid",n);break;default:p=u}lt(o,p),k=p;for(x in k)if(k.hasOwnProperty(x)){var j=k[x];x==="style"?ze(n,j):x==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&et(n,j)):x==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&be(n,j):typeof j=="number"&&be(n,""+j):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?j!=null&&x==="onScroll"&&Gt("scroll",n):j!=null&&w(n,x,j,C))}switch(o){case"input":V(n),Ce(n,u,!1);break;case"textarea":V(n),Me(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Re(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?A(n,!!u.multiple,x,!1):u.defaultValue!=null&&A(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=zo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Cn(r),null;case 6:if(n&&r.stateNode!=null)gp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=qr(Ha.current),qr(Ri.current),jo(r)){if(u=r.stateNode,o=r.memoizedProps,u[bi]=r,(x=u.nodeValue!==o)&&(n=Qn,n!==null))switch(n.tag){case 3:Fo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fo(u.nodeValue,o,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[bi]=r,r.stateNode=u}return Cn(r),null;case 13:if(Wt(Jt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&ei!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xh(),Ps(),r.flags|=98560,x=!1;else if(x=jo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[bi]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Cn(r),x=!1}else gi!==null&&(Gu(gi),gi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Jt.current&1)!==0?fn===0&&(fn=3):Xu())),r.updateQueue!==null&&(r.flags|=4),Cn(r),null);case 4:return Ds(),Nu(n,r),n===null&&Da(r.stateNode.containerInfo),Cn(r),null;case 10:return au(r.type._context),Cn(r),null;case 17:return Vn(r.type)&&Bo(),Cn(r),null;case 19:if(Wt(Jt),x=r.memoizedState,x===null)return Cn(r),null;if(u=(r.flags&128)!==0,C=x.rendering,C===null)if(u)Xa(x,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(C=Zo(n),C!==null){for(r.flags|=128,Xa(x,!1),u=C.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)x=o,n=u,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Vt(Jt,Jt.current&1|2),r.child}n=n.sibling}x.tail!==null&&Je()>zs&&(r.flags|=128,u=!0,Xa(x,!1),r.lanes=4194304)}else{if(!u)if(n=Zo(C),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!$t)return Cn(r),null}else 2*Je()-x.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,u=!0,Xa(x,!1),r.lanes=4194304);x.isBackwards?(C.sibling=r.child,r.child=C):(o=x.last,o!==null?o.sibling=C:r.child=C,x.last=C)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Je(),r.sibling=null,o=Jt.current,Vt(Jt,u?o&1|2:o&1),r):(Cn(r),null);case 22:case 23:return ju(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(ti&1073741824)!==0&&(Cn(r),r.subtreeFlags&6&&(r.flags|=8192)):Cn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function l_(n,r){switch(eu(r),r.tag){case 1:return Vn(r.type)&&Bo(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ds(),Wt(Hn),Wt(Tn),hu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return fu(r),null;case 13:if(Wt(Jt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Wt(Jt),null;case 4:return Ds(),null;case 10:return au(r.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var al=!1,bn=!1,c_=typeof WeakSet=="function"?WeakSet:Set,it=null;function Os(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){rn(n,r,u)}else o.current=null}function Iu(n,r,o){try{o()}catch(u){rn(n,r,u)}}var vp=!1;function u_(n,r){if(jc=Ao,n=$d(),Fc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var C=0,k=-1,j=-1,de=0,Oe=0,ke=n,De=null;t:for(;;){for(var Qe;ke!==o||p!==0&&ke.nodeType!==3||(k=C+p),ke!==x||u!==0&&ke.nodeType!==3||(j=C+u),ke.nodeType===3&&(C+=ke.nodeValue.length),(Qe=ke.firstChild)!==null;)De=ke,ke=Qe;for(;;){if(ke===n)break t;if(De===o&&++de===p&&(k=C),De===x&&++Oe===u&&(j=C),(Qe=ke.nextSibling)!==null)break;ke=De,De=ke.parentNode}ke=Qe}o=k===-1||j===-1?null:{start:k,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Xc={focusedElem:n,selectionRange:o},Ao=!1,it=r;it!==null;)if(r=it,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,it=n;else for(;it!==null;){r=it;try{var at=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var ot=at.memoizedProps,an=at.memoizedState,re=r.stateNode,q=re.getSnapshotBeforeUpdate(r.elementType===r.type?ot:vi(r.type,ot),an);re.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var oe=r.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){rn(r,r.return,We)}if(n=r.sibling,n!==null){n.return=r.return,it=n;break}it=r.return}return at=vp,vp=!1,at}function qa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Iu(r,o,x)}p=p.next}while(p!==u)}}function ol(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Du(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function _p(n){var r=n.alternate;r!==null&&(n.alternate=null,_p(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[Oa],delete r[Kc],delete r[Xv],delete r[qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xp(n){return n.tag===5||n.tag===3||n.tag===4}function yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=zo));else if(u!==4&&(n=n.child,n!==null))for(Uu(n,r,o),n=n.sibling;n!==null;)Uu(n,r,o),n=n.sibling}function Ou(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ou(n,r,o),n=n.sibling;n!==null;)Ou(n,r,o),n=n.sibling}var Mn=null,_i=!1;function yr(n,r,o){for(o=o.child;o!==null;)Sp(n,r,o),o=o.sibling}function Sp(n,r,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(St,o)}catch{}switch(o.tag){case 5:bn||Os(o,r);case 6:var u=Mn,p=_i;Mn=null,yr(n,r,o),Mn=u,_i=p,Mn!==null&&(_i?(n=Mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Mn.removeChild(o.stateNode));break;case 18:Mn!==null&&(_i?(n=Mn,o=o.stateNode,n.nodeType===8?$c(n.parentNode,o):n.nodeType===1&&$c(n,o),Ta(n)):$c(Mn,o.stateNode));break;case 4:u=Mn,p=_i,Mn=o.stateNode.containerInfo,_i=!0,yr(n,r,o),Mn=u,_i=p;break;case 0:case 11:case 14:case 15:if(!bn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Iu(o,r,C),p=p.next}while(p!==u)}yr(n,r,o);break;case 1:if(!bn&&(Os(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(k){rn(o,r,k)}yr(n,r,o);break;case 21:yr(n,r,o);break;case 22:o.mode&1?(bn=(u=bn)||o.memoizedState!==null,yr(n,r,o),bn=u):yr(n,r,o);break;default:yr(n,r,o)}}function Mp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new c_),r.forEach(function(u){var p=x_.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function xi(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var x=n,C=r,k=C;e:for(;k!==null;){switch(k.tag){case 5:Mn=k.stateNode,_i=!1;break e;case 3:Mn=k.stateNode.containerInfo,_i=!0;break e;case 4:Mn=k.stateNode.containerInfo,_i=!0;break e}k=k.return}if(Mn===null)throw Error(t(160));Sp(x,C,p),Mn=null,_i=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(de){rn(p,r,de)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ep(r,n),r=r.sibling}function Ep(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(r,n),Li(n),u&4){try{qa(3,n,n.return),ol(3,n)}catch(ot){rn(n,n.return,ot)}try{qa(5,n,n.return)}catch(ot){rn(n,n.return,ot)}}break;case 1:xi(r,n),Li(n),u&512&&o!==null&&Os(o,o.return);break;case 5:if(xi(r,n),Li(n),u&512&&o!==null&&Os(o,o.return),n.flags&32){var p=n.stateNode;try{be(p,"")}catch(ot){rn(n,n.return,ot)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,C=o!==null?o.memoizedProps:x,k=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{k==="input"&&x.type==="radio"&&x.name!=null&&Ae(p,x),dt(k,C);var de=dt(k,x);for(C=0;C<j.length;C+=2){var Oe=j[C],ke=j[C+1];Oe==="style"?ze(p,ke):Oe==="dangerouslySetInnerHTML"?et(p,ke):Oe==="children"?be(p,ke):w(p,Oe,ke,de)}switch(k){case"input":Le(p,x);break;case"textarea":pe(p,x);break;case"select":var De=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Qe=x.value;Qe!=null?A(p,!!x.multiple,Qe,!1):De!==!!x.multiple&&(x.defaultValue!=null?A(p,!!x.multiple,x.defaultValue,!0):A(p,!!x.multiple,x.multiple?[]:"",!1))}p[Oa]=x}catch(ot){rn(n,n.return,ot)}}break;case 6:if(xi(r,n),Li(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ot){rn(n,n.return,ot)}}break;case 3:if(xi(r,n),Li(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ta(r.containerInfo)}catch(ot){rn(n,n.return,ot)}break;case 4:xi(r,n),Li(n);break;case 13:xi(r,n),Li(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(ku=Je())),u&4&&Mp(n);break;case 22:if(Oe=o!==null&&o.memoizedState!==null,n.mode&1?(bn=(de=bn)||Oe,xi(r,n),bn=de):xi(r,n),Li(n),u&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Oe&&(n.mode&1)!==0)for(it=n,Oe=n.child;Oe!==null;){for(ke=it=Oe;it!==null;){switch(De=it,Qe=De.child,De.tag){case 0:case 11:case 14:case 15:qa(4,De,De.return);break;case 1:Os(De,De.return);var at=De.stateNode;if(typeof at.componentWillUnmount=="function"){u=De,o=De.return;try{r=u,at.props=r.memoizedProps,at.state=r.memoizedState,at.componentWillUnmount()}catch(ot){rn(u,o,ot)}}break;case 5:Os(De,De.return);break;case 22:if(De.memoizedState!==null){Ap(ke);continue}}Qe!==null?(Qe.return=De,it=Qe):Ap(ke)}Oe=Oe.sibling}e:for(Oe=null,ke=n;;){if(ke.tag===5){if(Oe===null){Oe=ke;try{p=ke.stateNode,de?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(k=ke.stateNode,j=ke.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null,k.style.display=Ze("display",C))}catch(ot){rn(n,n.return,ot)}}}else if(ke.tag===6){if(Oe===null)try{ke.stateNode.nodeValue=de?"":ke.memoizedProps}catch(ot){rn(n,n.return,ot)}}else if((ke.tag!==22&&ke.tag!==23||ke.memoizedState===null||ke===n)&&ke.child!==null){ke.child.return=ke,ke=ke.child;continue}if(ke===n)break e;for(;ke.sibling===null;){if(ke.return===null||ke.return===n)break e;Oe===ke&&(Oe=null),ke=ke.return}Oe===ke&&(Oe=null),ke.sibling.return=ke.return,ke=ke.sibling}}break;case 19:xi(r,n),Li(n),u&4&&Mp(n);break;case 21:break;default:xi(r,n),Li(n)}}function Li(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(xp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(be(p,""),u.flags&=-33);var x=yp(n);Ou(n,x,p);break;case 3:case 4:var C=u.stateNode.containerInfo,k=yp(n);Uu(n,k,C);break;default:throw Error(t(161))}}catch(j){rn(n,n.return,j)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function f_(n,r,o){it=n,wp(n)}function wp(n,r,o){for(var u=(n.mode&1)!==0;it!==null;){var p=it,x=p.child;if(p.tag===22&&u){var C=p.memoizedState!==null||al;if(!C){var k=p.alternate,j=k!==null&&k.memoizedState!==null||bn;k=al;var de=bn;if(al=C,(bn=j)&&!de)for(it=p;it!==null;)C=it,j=C.child,C.tag===22&&C.memoizedState!==null?Cp(p):j!==null?(j.return=C,it=j):Cp(p);for(;x!==null;)it=x,wp(x),x=x.sibling;it=p,al=k,bn=de}Tp(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,it=x):Tp(n)}}function Tp(n){for(;it!==null;){var r=it;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bn||ol(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!bn)if(o===null)u.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:vi(r.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Ah(r,x,u);break;case 3:var C=r.updateQueue;if(C!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ah(r,C,o)}break;case 5:var k=r.stateNode;if(o===null&&r.flags&4){o=k;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var de=r.alternate;if(de!==null){var Oe=de.memoizedState;if(Oe!==null){var ke=Oe.dehydrated;ke!==null&&Ta(ke)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||r.flags&512&&Du(r)}catch(De){rn(r,r.return,De)}}if(r===n){it=null;break}if(o=r.sibling,o!==null){o.return=r.return,it=o;break}it=r.return}}function Ap(n){for(;it!==null;){var r=it;if(r===n){it=null;break}var o=r.sibling;if(o!==null){o.return=r.return,it=o;break}it=r.return}}function Cp(n){for(;it!==null;){var r=it;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ol(4,r)}catch(j){rn(r,o,j)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(j){rn(r,p,j)}}var x=r.return;try{Du(r)}catch(j){rn(r,x,j)}break;case 5:var C=r.return;try{Du(r)}catch(j){rn(r,C,j)}}}catch(j){rn(r,r.return,j)}if(r===n){it=null;break}var k=r.sibling;if(k!==null){k.return=r.return,it=k;break}it=r.return}}var d_=Math.ceil,ll=P.ReactCurrentDispatcher,Fu=P.ReactCurrentOwner,fi=P.ReactCurrentBatchConfig,Pt=0,vn=null,on=null,En=0,ti=0,Fs=mr(0),fn=0,Ya=null,$r=0,cl=0,zu=0,$a=null,Wn=null,ku=0,zs=1/0,Yi=null,ul=!1,Bu=null,Sr=null,fl=!1,Mr=null,dl=0,Ka=0,Hu=null,hl=-1,pl=0;function On(){return(Pt&6)!==0?Je():hl!==-1?hl:hl=Je()}function Er(n){return(n.mode&1)===0?1:(Pt&2)!==0&&En!==0?En&-En:$v.transition!==null?(pl===0&&(pl=Br()),pl):(n=It,n!==0||(n=window.event,n=n===void 0?16:Rd(n.type)),n)}function yi(n,r,o,u){if(50<Ka)throw Ka=0,Hu=null,Error(t(185));Hr(n,o,u),((Pt&2)===0||n!==vn)&&(n===vn&&((Pt&2)===0&&(cl|=o),fn===4&&wr(n,En)),jn(n,u),o===1&&Pt===0&&(r.mode&1)===0&&(zs=Je()+500,Vo&&vr()))}function jn(n,r){var o=n.callbackNode;Bi(n,r);var u=Bn(n,n===vn?En:0);if(u===0)o!==null&&Ye(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&Ye(o),r===1)n.tag===0?Yv(Rp.bind(null,n)):ph(Rp.bind(null,n)),Wv(function(){(Pt&6)===0&&vr()}),o=null;else{switch(Mo(u)){case 1:o=ct;break;case 4:o=Tt;break;case 16:o=Nt;break;case 536870912:o=Yt;break;default:o=Nt}o=Fp(o,bp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function bp(n,r){if(hl=-1,pl=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ks()&&n.callbackNode!==o)return null;var u=Bn(n,n===vn?En:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=ml(n,u);else{r=u;var p=Pt;Pt|=2;var x=Lp();(vn!==n||En!==r)&&(Yi=null,zs=Je()+500,Zr(n,r));do try{m_();break}catch(k){Pp(n,k)}while(!0);su(),ll.current=x,Pt=p,on!==null?r=0:(vn=null,En=0,r=fn)}if(r!==0){if(r===2&&(p=kr(n),p!==0&&(u=p,r=Vu(n,p))),r===1)throw o=Ya,Zr(n,0),wr(n,u),jn(n,Je()),o;if(r===6)wr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!h_(p)&&(r=ml(n,u),r===2&&(x=kr(n),x!==0&&(u=x,r=Vu(n,x))),r===1))throw o=Ya,Zr(n,0),wr(n,u),jn(n,Je()),o;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Jr(n,Wn,Yi);break;case 3:if(wr(n,u),(u&130023424)===u&&(r=ku+500-Je(),10<r)){if(Bn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){On(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Yc(Jr.bind(null,n,Wn,Yi),r);break}Jr(n,Wn,Yi);break;case 4:if(wr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var C=31-yt(u);x=1<<C,C=r[C],C>p&&(p=C),u&=~x}if(u=p,u=Je()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*d_(u/1960))-u,10<u){n.timeoutHandle=Yc(Jr.bind(null,n,Wn,Yi),u);break}Jr(n,Wn,Yi);break;case 5:Jr(n,Wn,Yi);break;default:throw Error(t(329))}}}return jn(n,Je()),n.callbackNode===o?bp.bind(null,n):null}function Vu(n,r){var o=$a;return n.current.memoizedState.isDehydrated&&(Zr(n,r).flags|=256),n=ml(n,r),n!==2&&(r=Wn,Wn=o,r!==null&&Gu(r)),n}function Gu(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function h_(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],x=p.getSnapshot;p=p.value;try{if(!mi(x(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function wr(n,r){for(r&=~zu,r&=~cl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-yt(r),u=1<<o;n[o]=-1,r&=~u}}function Rp(n){if((Pt&6)!==0)throw Error(t(327));ks();var r=Bn(n,0);if((r&1)===0)return jn(n,Je()),null;var o=ml(n,r);if(n.tag!==0&&o===2){var u=kr(n);u!==0&&(r=u,o=Vu(n,u))}if(o===1)throw o=Ya,Zr(n,0),wr(n,r),jn(n,Je()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Jr(n,Wn,Yi),jn(n,Je()),null}function Wu(n,r){var o=Pt;Pt|=1;try{return n(r)}finally{Pt=o,Pt===0&&(zs=Je()+500,Vo&&vr())}}function Kr(n){Mr!==null&&Mr.tag===0&&(Pt&6)===0&&ks();var r=Pt;Pt|=1;var o=fi.transition,u=It;try{if(fi.transition=null,It=1,n)return n()}finally{It=u,fi.transition=o,Pt=r,(Pt&6)===0&&vr()}}function ju(){ti=Fs.current,Wt(Fs)}function Zr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Gv(o)),on!==null)for(o=on.return;o!==null;){var u=o;switch(eu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Bo();break;case 3:Ds(),Wt(Hn),Wt(Tn),hu();break;case 5:fu(u);break;case 4:Ds();break;case 13:Wt(Jt);break;case 19:Wt(Jt);break;case 10:au(u.type._context);break;case 22:case 23:ju()}o=o.return}if(vn=n,on=n=Tr(n.current,null),En=ti=r,fn=0,Ya=null,zu=cl=$r=0,Wn=$a=null,Xr!==null){for(r=0;r<Xr.length;r++)if(o=Xr[r],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,x=o.pending;if(x!==null){var C=x.next;x.next=p,u.next=C}o.pending=u}Xr=null}return n}function Pp(n,r){do{var o=on;try{if(su(),Jo.current=nl,Qo){for(var u=Qt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Qo=!1}if(Yr=0,gn=un=Qt=null,Va=!1,Ga=0,Fu.current=null,o===null||o.return===null){fn=1,Ya=r,on=null;break}e:{var x=n,C=o.return,k=o,j=r;if(r=En,k.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var de=j,Oe=k,ke=Oe.tag;if((Oe.mode&1)===0&&(ke===0||ke===11||ke===15)){var De=Oe.alternate;De?(Oe.updateQueue=De.updateQueue,Oe.memoizedState=De.memoizedState,Oe.lanes=De.lanes):(Oe.updateQueue=null,Oe.memoizedState=null)}var Qe=tp(C);if(Qe!==null){Qe.flags&=-257,np(Qe,C,k,x,r),Qe.mode&1&&ep(x,de,r),r=Qe,j=de;var at=r.updateQueue;if(at===null){var ot=new Set;ot.add(j),r.updateQueue=ot}else at.add(j);break e}else{if((r&1)===0){ep(x,de,r),Xu();break e}j=Error(t(426))}}else if($t&&k.mode&1){var an=tp(C);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),np(an,C,k,x,r),iu(Us(j,k));break e}}x=j=Us(j,k),fn!==4&&(fn=2),$a===null?$a=[x]:$a.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var re=Jh(x,j,r);Th(x,re);break e;case 1:k=j;var q=x.type,oe=x.stateNode;if((x.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Sr===null||!Sr.has(oe)))){x.flags|=65536,r&=-r,x.lanes|=r;var We=Qh(x,k,r);Th(x,We);break e}}x=x.return}while(x!==null)}Ip(o)}catch(ut){r=ut,on===o&&o!==null&&(on=o=o.return);continue}break}while(!0)}function Lp(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Xu(){(fn===0||fn===3||fn===2)&&(fn=4),vn===null||($r&268435455)===0&&(cl&268435455)===0||wr(vn,En)}function ml(n,r){var o=Pt;Pt|=2;var u=Lp();(vn!==n||En!==r)&&(Yi=null,Zr(n,r));do try{p_();break}catch(p){Pp(n,p)}while(!0);if(su(),Pt=o,ll.current=u,on!==null)throw Error(t(261));return vn=null,En=0,fn}function p_(){for(;on!==null;)Np(on)}function m_(){for(;on!==null&&!tt();)Np(on)}function Np(n){var r=Op(n.alternate,n,ti);n.memoizedProps=n.pendingProps,r===null?Ip(n):on=r,Fu.current=null}function Ip(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=o_(o,r,ti),o!==null){on=o;return}}else{if(o=l_(o,r),o!==null){o.flags&=32767,on=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}if(r=r.sibling,r!==null){on=r;return}on=r=n}while(r!==null);fn===0&&(fn=5)}function Jr(n,r,o){var u=It,p=fi.transition;try{fi.transition=null,It=1,g_(n,r,o,u)}finally{fi.transition=p,It=u}return null}function g_(n,r,o,u){do ks();while(Mr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=o.lanes|o.childLanes;if(Ec(n,x),n===vn&&(on=vn=null,En=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fl||(fl=!0,Fp(Nt,function(){return ks(),null})),x=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||x){x=fi.transition,fi.transition=null;var C=It;It=1;var k=Pt;Pt|=4,Fu.current=null,u_(n,o),Ep(o,n),Ov(Xc),Ao=!!jc,Xc=jc=null,n.current=o,f_(o),st(),Pt=k,It=C,fi.transition=x}else n.current=o;if(fl&&(fl=!1,Mr=n,dl=p),x=n.pendingLanes,x===0&&(Sr=null),sn(o.stateNode),jn(n,Je()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(ul)throw ul=!1,n=Bu,Bu=null,n;return(dl&1)!==0&&n.tag!==0&&ks(),x=n.pendingLanes,(x&1)!==0?n===Hu?Ka++:(Ka=0,Hu=n):Ka=0,vr(),null}function ks(){if(Mr!==null){var n=Mo(dl),r=fi.transition,o=It;try{if(fi.transition=null,It=16>n?16:n,Mr===null)var u=!1;else{if(n=Mr,Mr=null,dl=0,(Pt&6)!==0)throw Error(t(331));var p=Pt;for(Pt|=4,it=n.current;it!==null;){var x=it,C=x.child;if((it.flags&16)!==0){var k=x.deletions;if(k!==null){for(var j=0;j<k.length;j++){var de=k[j];for(it=de;it!==null;){var Oe=it;switch(Oe.tag){case 0:case 11:case 15:qa(8,Oe,x)}var ke=Oe.child;if(ke!==null)ke.return=Oe,it=ke;else for(;it!==null;){Oe=it;var De=Oe.sibling,Qe=Oe.return;if(_p(Oe),Oe===de){it=null;break}if(De!==null){De.return=Qe,it=De;break}it=Qe}}}var at=x.alternate;if(at!==null){var ot=at.child;if(ot!==null){at.child=null;do{var an=ot.sibling;ot.sibling=null,ot=an}while(ot!==null)}}it=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,it=C;else e:for(;it!==null;){if(x=it,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:qa(9,x,x.return)}var re=x.sibling;if(re!==null){re.return=x.return,it=re;break e}it=x.return}}var q=n.current;for(it=q;it!==null;){C=it;var oe=C.child;if((C.subtreeFlags&2064)!==0&&oe!==null)oe.return=C,it=oe;else e:for(C=q;it!==null;){if(k=it,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:ol(9,k)}}catch(ut){rn(k,k.return,ut)}if(k===C){it=null;break e}var We=k.sibling;if(We!==null){We.return=k.return,it=We;break e}it=k.return}}if(Pt=p,vr(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(St,n)}catch{}u=!0}return u}finally{It=o,fi.transition=r}}return!1}function Dp(n,r,o){r=Us(o,r),r=Jh(n,r,1),n=xr(n,r,1),r=On(),n!==null&&(Hr(n,1,r),jn(n,r))}function rn(n,r,o){if(n.tag===3)Dp(n,n,o);else for(;r!==null;){if(r.tag===3){Dp(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Sr===null||!Sr.has(u))){n=Us(o,n),n=Qh(r,n,1),r=xr(r,n,1),n=On(),r!==null&&(Hr(r,1,n),jn(r,n));break}}r=r.return}}function v_(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=On(),n.pingedLanes|=n.suspendedLanes&o,vn===n&&(En&o)===o&&(fn===4||fn===3&&(En&130023424)===En&&500>Je()-ku?Zr(n,0):zu|=o),jn(n,r)}function Up(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var o=On();n=ji(n,r),n!==null&&(Hr(n,r,o),jn(n,o))}function __(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Up(n,o)}function x_(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Up(n,o)}var Op;Op=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Hn.current)Gn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Gn=!1,a_(n,r,o);Gn=(n.flags&131072)!==0}else Gn=!1,$t&&(r.flags&1048576)!==0&&mh(r,Wo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;sl(n,r),n=r.pendingProps;var p=Cs(r,Tn.current);Is(r,o),p=gu(null,r,u,n,p,o);var x=vu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Vn(u)?(x=!0,Ho(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,cu(r),p.updater=il,r.stateNode=p,p._reactInternals=r,Eu(r,u,n,o),r=Cu(null,r,u,!0,x,o)):(r.tag=0,$t&&x&&Qc(r),Un(null,r,p,o),r=r.child),r;case 16:u=r.elementType;e:{switch(sl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=S_(u),n=vi(u,n),p){case 0:r=Au(null,r,u,n,o);break e;case 1:r=lp(null,r,u,n,o);break e;case 11:r=ip(null,r,u,n,o);break e;case 14:r=rp(null,r,u,vi(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),Au(n,r,u,p,o);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),lp(n,r,u,p,o);case 3:e:{if(cp(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,wh(n,r),Ko(r,u,null,o);var C=r.memoizedState;if(u=C.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=Us(Error(t(423)),r),r=up(n,r,u,o,p);break e}else if(u!==p){p=Us(Error(t(424)),r),r=up(n,r,u,o,p);break e}else for(ei=pr(r.stateNode.containerInfo.firstChild),Qn=r,$t=!0,gi=null,o=Mh(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ps(),u===p){r=qi(n,r,o);break e}Un(n,r,u,o)}r=r.child}return r;case 5:return Ch(r),n===null&&nu(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,C=p.children,qc(u,p)?C=null:x!==null&&qc(u,x)&&(r.flags|=32),op(n,r),Un(n,r,C,o),r.child;case 6:return n===null&&nu(r),null;case 13:return fp(n,r,o);case 4:return uu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ls(r,null,u,o):Un(n,r,u,o),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),ip(n,r,u,p,o);case 7:return Un(n,r,r.pendingProps,o),r.child;case 8:return Un(n,r,r.pendingProps.children,o),r.child;case 12:return Un(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,C=p.value,Vt(qo,u._currentValue),u._currentValue=C,x!==null)if(mi(x.value,C)){if(x.children===p.children&&!Hn.current){r=qi(n,r,o);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var k=x.dependencies;if(k!==null){C=x.child;for(var j=k.firstContext;j!==null;){if(j.context===u){if(x.tag===1){j=Xi(-1,o&-o),j.tag=2;var de=x.updateQueue;if(de!==null){de=de.shared;var Oe=de.pending;Oe===null?j.next=j:(j.next=Oe.next,Oe.next=j),de.pending=j}}x.lanes|=o,j=x.alternate,j!==null&&(j.lanes|=o),ou(x.return,o,r),k.lanes|=o;break}j=j.next}}else if(x.tag===10)C=x.type===r.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=o,k=C.alternate,k!==null&&(k.lanes|=o),ou(C,o,r),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===r){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Un(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Is(r,o),p=ci(p),u=u(p),r.flags|=1,Un(n,r,u,o),r.child;case 14:return u=r.type,p=vi(u,r.pendingProps),p=vi(u.type,p),rp(n,r,u,p,o);case 15:return sp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:vi(u,p),sl(n,r),r.tag=1,Vn(u)?(n=!0,Ho(r)):n=!1,Is(r,o),Kh(r,u,p),Eu(r,u,p,o),Cu(null,r,u,!0,n,o);case 19:return hp(n,r,o);case 22:return ap(n,r,o)}throw Error(t(156,r.tag))};function Fp(n,r){return Pe(n,r)}function y_(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,r,o,u){return new y_(n,r,o,u)}function qu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function S_(n){if(typeof n=="function")return qu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===X)return 11;if(n===fe)return 14}return 2}function Tr(n,r){var o=n.alternate;return o===null?(o=di(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function gl(n,r,o,u,p,x){var C=2;if(u=n,typeof n=="function")qu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case U:return Qr(o.children,p,x,r);case O:C=8,p|=8;break;case L:return n=di(12,o,r,p|2),n.elementType=L,n.lanes=x,n;case K:return n=di(13,o,r,p),n.elementType=K,n.lanes=x,n;case ne:return n=di(19,o,r,p),n.elementType=ne,n.lanes=x,n;case ge:return vl(o,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:C=10;break e;case z:C=9;break e;case X:C=11;break e;case fe:C=14;break e;case Y:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=di(C,o,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function Qr(n,r,o,u){return n=di(7,n,u,r),n.lanes=o,n}function vl(n,r,o,u){return n=di(22,n,u,r),n.elementType=ge,n.lanes=o,n.stateNode={isHidden:!1},n}function Yu(n,r,o){return n=di(6,n,null,r),n.lanes=o,n}function $u(n,r,o){return r=di(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function M_(n,r,o,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ku(n,r,o,u,p,x,C,k,j){return n=new M_(n,r,o,k,j),r===1?(r=1,x===!0&&(r|=8)):r=0,x=di(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(x),n}function E_(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function zp(n){if(!n)return gr;n=n._reactInternals;e:{if(Ut(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Vn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Vn(o))return dh(n,o,r)}return r}function kp(n,r,o,u,p,x,C,k,j){return n=Ku(o,u,!0,n,p,x,C,k,j),n.context=zp(null),o=n.current,u=On(),p=Er(o),x=Xi(u,p),x.callback=r??null,xr(o,x,p),n.current.lanes=p,Hr(n,p,u),jn(n,u),n}function _l(n,r,o,u){var p=r.current,x=On(),C=Er(p);return o=zp(o),r.context===null?r.context=o:r.pendingContext=o,r=Xi(x,C),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=xr(p,r,C),n!==null&&(yi(n,p,C,x),$o(n,p,C)),C}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Zu(n,r){Bp(n,r),(n=n.alternate)&&Bp(n,r)}function w_(){return null}var Hp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}yl.prototype.render=Ju.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));_l(n,r,null,null)},yl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Kr(function(){_l(null,n,null,null)}),r[Hi]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var r=wd();n={blockedOn:null,target:n,priority:r};for(var o=0;o<fr.length&&r!==0&&r<fr[o].priority;o++);fr.splice(o,0,n),o===0&&Cd(n)}};function Qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function T_(n,r,o,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var de=xl(C);x.call(de)}}var C=kp(r,u,n,0,null,!1,!1,"",Vp);return n._reactRootContainer=C,n[Hi]=C.current,Da(n.nodeType===8?n.parentNode:n),Kr(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var k=u;u=function(){var de=xl(j);k.call(de)}}var j=Ku(n,0,!1,null,null,!1,!1,"",Vp);return n._reactRootContainer=j,n[Hi]=j.current,Da(n.nodeType===8?n.parentNode:n),Kr(function(){_l(r,j,o,u)}),j}function Ml(n,r,o,u,p){var x=o._reactRootContainer;if(x){var C=x;if(typeof p=="function"){var k=p;p=function(){var j=xl(C);k.call(j)}}_l(r,C,n,p)}else C=T_(o,r,n,p,u);return xl(C)}Eo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=cn(r.pendingLanes);o!==0&&(ya(r,o|1),jn(r,Je()),(Pt&6)===0&&(zs=Je()+500,vr()))}break;case 13:Kr(function(){var u=ji(n,1);if(u!==null){var p=On();yi(u,n,1,p)}}),Zu(n,1)}},wc=function(n){if(n.tag===13){var r=ji(n,134217728);if(r!==null){var o=On();yi(r,n,134217728,o)}Zu(n,134217728)}},Ed=function(n){if(n.tag===13){var r=Er(n),o=ji(n,r);if(o!==null){var u=On();yi(o,n,r,u)}Zu(n,r)}},wd=function(){return It},Td=function(n,r){var o=It;try{return It=n,r()}finally{It=o}},ve=function(n,r,o){switch(r){case"input":if(Le(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=ko(u);if(!p)throw Error(t(90));ye(u),Le(u,p)}}}break;case"textarea":pe(n,o);break;case"select":r=o.value,r!=null&&A(n,!!o.multiple,r,!1)}},At=Wu,ht=Kr;var A_={usingClientEntryPoint:!1,Events:[Fa,Ts,ko,pt,wt,Wu]},Za={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C_={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=se(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||w_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{St=El.inject(C_),nt=El}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A_,Xn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(r))throw Error(t(200));return E_(n,r,null,o)},Xn.createRoot=function(n,r){if(!Qu(n))throw Error(t(299));var o=!1,u="",p=Hp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ku(n,1,!1,null,null,o,!1,u,p),n[Hi]=r.current,Da(n.nodeType===8?n.parentNode:n),new Ju(r)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=se(r),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return Kr(n)},Xn.hydrate=function(n,r,o){if(!Sl(r))throw Error(t(200));return Ml(null,n,r,!0,o)},Xn.hydrateRoot=function(n,r,o){if(!Qu(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,x="",C=Hp;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(x=o.identifierPrefix),o.onRecoverableError!==void 0&&(C=o.onRecoverableError)),r=kp(r,null,n,1,o??null,p,!1,x,C),n[Hi]=r.current,Da(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new yl(r)},Xn.render=function(n,r,o){if(!Sl(r))throw Error(t(200));return Ml(null,n,r,!1,o)},Xn.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Wu,Xn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Sl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,r,o,!1,u)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Zp;function F_(){if(Zp)return nf.exports;Zp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),nf.exports=O_(),nf.exports}var Jp;function z_(){if(Jp)return wl;Jp=1;var i=F_();return wl.createRoot=i.createRoot,wl.hydrateRoot=i.hydrateRoot,wl}var k_=z_();const B_=$g(k_),H_="modulepreload",V_=function(i){return"/pr-preview/pr-59/"+i},Qp={},Zg=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=c(t.map(h=>{if(h=V_(h),h in Qp)return;Qp[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":H_,m||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((S,M)=>{v.addEventListener("load",S),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var Nn=Math.PI,Kt=Nn*2,nr=Nn/180,G_=180/Nn,W_=1440,j_=398600.8,ri=6378.135,ir=60/Math.sqrt(ri*ri*ri/j_),af=ri*ir/60,X_=1/ir,us=.001082616,q_=-253881e-11,Y_=-165597e-11,fs=q_/us,ho=2/3,Jg=1440/(2*Nn);function Qg(i,e){for(var t=[31,i%4===0?29:28,31,30,31,30,31,31,30,31,30,31],s=Math.floor(e),a=1,l=0;s>l+t[a-1]&&a<12;)l+=t[a-1],a+=1;var c=a,f=s-l,d=(e-s)*24,h=Math.floor(d);d=(d-h)*60;var m=Math.floor(d),g=(d-m)*60;return{mon:c,day:f,hr:h,minute:m,sec:g}}function em(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*i-Math.floor(7*(i+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((c/6e4+l/60+a)/60+s)/24}function mc(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(i instanceof Date){var f=i;return em(f.getUTCFullYear(),f.getUTCMonth()+1,f.getUTCDate(),f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds())}return em(i,e,t,s,a,l,c)}function e0(i,e){var t=i.e3,s=i.ee2,a=i.peo,l=i.pgho,c=i.pho,f=i.pinco,d=i.plo,h=i.se2,m=i.se3,g=i.sgh2,v=i.sgh3,S=i.sgh4,M=i.sh2,E=i.sh3,y=i.si2,_=i.si3,I=i.sl2,w=i.sl3,P=i.sl4,B=i.t,R=i.xgh2,U=i.xgh3,O=i.xgh4,L=i.xh2,b=i.xh3,z=i.xi2,X=i.xi3,K=i.xl2,ne=i.xl3,fe=i.xl4,Y=i.zmol,ge=i.zmos,W=e.init,ue=e.opsmode,ce=e.ep,F=e.inclp,J=e.nodep,Ve=e.argpp,te=e.mp,ie,le,xe,Re,Fe,Be,V,ye,Ee,we,Se,Ae,Le,Ce,qe,D,A,ee,me,pe,Me,Xe=119459e-10,Ne=.01675,Ie=.00015835218,et=.0549;Me=ge+Xe*B,W==="y"&&(Me=ge),pe=Me+2*Ne*Math.sin(Me),A=Math.sin(pe),we=.5*A*A-.25,Se=-.5*A*Math.cos(pe);var be=h*we+m*Se,je=y*we+_*Se,T=I*we+w*Se+P*A,Ze=g*we+v*Se+S*A,ze=M*we+E*Se;Me=Y+Ie*B,W==="y"&&(Me=Y),pe=Me+2*et*Math.sin(Me),A=Math.sin(pe),we=.5*A*A-.25,Se=-.5*A*Math.cos(pe);var ft=s*we+t*Se,lt=z*we+X*Se,dt=K*we+ne*Se+fe*A,G=R*we+U*Se+O*A,He=L*we+b*Se;return Ae=be+ft,qe=je+lt,D=T+dt,Le=Ze+G,Ce=ze+He,W==="n"&&(Ae-=a,qe-=f,D-=d,Le-=l,Ce-=c,F+=qe,ce+=Ae,Re=Math.sin(F),xe=Math.cos(F),F>=.2?(Ce/=Re,Le-=xe*Ce,Ve+=Le,J+=Ce,te+=D):(Be=Math.sin(J),Fe=Math.cos(J),ie=Re*Be,le=Re*Fe,V=Ce*Fe+qe*xe*Be,ye=-Ce*Be+qe*xe*Fe,ie+=V,le+=ye,J%=Kt,J<0&&ue==="a"&&(J+=Kt),ee=te+Ve+xe*J,Ee=D+Le-qe*J*Re,ee+=Ee,me=J,J=Math.atan2(ie,le),J<0&&ue==="a"&&(J+=Kt),Math.abs(me-J)>Nn&&(J<me?J+=Kt:J-=Kt),te+=D,Ve=ee-te-xe*J)),{ep:ce,inclp:F,nodep:J,argpp:Ve,mp:te}}function $_(i){var e=i.epoch,t=i.ep,s=i.argpp,a=i.tc,l=i.inclp,c=i.nodep,f=i.np,d,h,m,g,v,S,M,E,y,_,I,w,P,B,R,U,O,L,b,z,X,K,ne,fe,Y,ge,W,ue,ce,F,J,Ve,te,ie,le,xe,Re,Fe,Be,V,ye,Ee,we,Se,Ae,Le,Ce,qe,D,A,ee,me,pe,Me,Xe,Ne,Ie,et,be,je,T,Ze,ze,ft=.01675,lt=.0549,dt=29864797e-13,G=47968065e-14,He=.39785416,ve=.91744867,_e=.1945905,Ue=-.98088458,rt=f,pt=t,wt=Math.sin(c),At=Math.cos(c),ht=Math.sin(s),bt=Math.cos(s),kt=Math.sin(l),Dt=Math.cos(l),Ge=pt*pt,Xt=1-Ge,tn=Math.sqrt(Xt),nn=0,he=0,_t=0,qt=0,Sn=0,$n=e+18261.5+a/1440,In=(4.523602-.00092422029*$n)%Kt,Ut=Math.sin(In),N=Math.cos(In),Z=.91375164-.03568096*N,ae=Math.sqrt(1-Z*Z),se=.089683511*Ut/ae,Q=Math.sqrt(1-se*se),Pe=5.8351514+.001944368*$n,Ye=.39785416*Ut/ae,tt=Q*N+.91744867*se*Ut;Ye=Math.atan2(Ye,tt),Ye+=Pe-In;var st=Math.cos(Ye),Je=Math.sin(Ye);z=_e,X=Ue,fe=ve,Y=He,K=At,ne=wt,I=dt;for(var mt=1/rt,ct=0;ct<2;)ct+=1,d=z*K+X*fe*ne,m=-X*K+z*fe*ne,M=-z*ne+X*fe*K,E=X*Y,y=X*ne+z*fe*K,_=z*Y,h=Dt*M+kt*E,g=Dt*y+kt*_,v=-kt*M+Dt*E,S=-kt*y+Dt*_,w=d*bt+h*ht,P=m*bt+g*ht,B=-d*ht+h*bt,R=-m*ht+g*bt,U=v*ht,O=S*ht,L=v*bt,b=S*bt,T=12*w*w-3*B*B,Ze=24*w*P-6*B*R,ze=12*P*P-3*R*R,me=3*(d*d+h*h)+T*Ge,pe=6*(d*m+h*g)+Ze*Ge,Me=3*(m*m+g*g)+ze*Ge,Xe=-6*d*v+Ge*(-24*w*L-6*B*U),Ne=-6*(d*S+m*v)+Ge*(-24*(P*L+w*b)+-6*(B*O+R*U)),Ie=-6*m*S+Ge*(-24*P*b-6*R*O),et=6*h*v+Ge*(24*w*U-6*B*L),be=6*(g*v+h*S)+Ge*(24*(P*U+w*O)-6*(R*L+B*b)),je=6*g*S+Ge*(24*P*O-6*R*b),me=me+me+Xt*T,pe=pe+pe+Xt*Ze,Me=Me+Me+Xt*ze,Ce=I*mt,Le=-.5*Ce/tn,qe=Ce*tn,Ae=-15*pt*qe,D=w*B+P*R,A=P*B+w*R,ee=P*R-w*B,ct===1&&(ge=Ae,W=Le,ue=Ce,ce=qe,F=D,J=A,Ve=ee,te=me,ie=pe,le=Me,xe=Xe,Re=Ne,Fe=Ie,Be=et,V=be,ye=je,Ee=T,we=Ze,Se=ze,z=st,X=Je,fe=Z,Y=ae,K=Q*At+se*wt,ne=wt*Q-At*se,I=G);var Tt=(4.7199672+(.2299715*$n-Pe))%Kt,Nt=(6.2565837+.017201977*$n)%Kt,Bt=2*ge*J,Yt=2*ge*Ve,St=2*W*Re,nt=2*W*(Fe-xe),sn=-2*ue*ie,yt=-2*ue*(le-te),Dn=-2*ue*(-21-9*Ge)*ft,Kn=2*ce*we,Zn=2*ce*(Se-Ee),ai=-18*ce*ft,Ot=-2*W*V,cn=-2*W*(ye-Be),Bn=2*Ae*A,mn=2*Ae*ee,Bi=2*Le*Ne,kr=2*Le*(Ie-Xe),Br=-2*Ce*pe,xa=-2*Ce*(Me-me),Hr=-2*Ce*(-21-9*Ge)*lt,Ec=2*qe*Ze,ya=2*qe*(ze-T),It=-18*qe*lt,Mo=-2*Le*be,Eo=-2*Le*(je-et);return{snodm:wt,cnodm:At,sinim:kt,cosim:Dt,sinomm:ht,cosomm:bt,day:$n,e3:mn,ee2:Bn,em:pt,emsq:Ge,gam:Pe,peo:nn,pgho:qt,pho:Sn,pinco:he,plo:_t,rtemsq:tn,se2:Bt,se3:Yt,sgh2:Kn,sgh3:Zn,sgh4:ai,sh2:Ot,sh3:cn,si2:St,si3:nt,sl2:sn,sl3:yt,sl4:Dn,s1:Ae,s2:Le,s3:Ce,s4:qe,s5:D,s6:A,s7:ee,ss1:ge,ss2:W,ss3:ue,ss4:ce,ss5:F,ss6:J,ss7:Ve,sz1:te,sz2:ie,sz3:le,sz11:xe,sz12:Re,sz13:Fe,sz21:Be,sz22:V,sz23:ye,sz31:Ee,sz32:we,sz33:Se,xgh2:Ec,xgh3:ya,xgh4:It,xh2:Mo,xh3:Eo,xi2:Bi,xi3:kr,xl2:Br,xl3:xa,xl4:Hr,nm:rt,z1:me,z2:pe,z3:Me,z11:Xe,z12:Ne,z13:Ie,z21:et,z22:be,z23:je,z31:T,z32:Ze,z33:ze,zmol:Tt,zmos:Nt}}function K_(i){var e=i.cosim,t=i.argpo,s=i.s1,a=i.s2,l=i.s3,c=i.s4,f=i.s5,d=i.sinim,h=i.ss1,m=i.ss2,g=i.ss3,v=i.ss4,S=i.ss5,M=i.sz1,E=i.sz3,y=i.sz11,_=i.sz13,I=i.sz21,w=i.sz23,P=i.sz31,B=i.sz33,R=i.t,U=i.tc,O=i.gsto,L=i.mo,b=i.mdot,z=i.no,X=i.nodeo,K=i.nodedot,ne=i.xpidot,fe=i.z1,Y=i.z3,ge=i.z11,W=i.z13,ue=i.z21,ce=i.z23,F=i.z31,J=i.z33,Ve=i.ecco,te=i.eccsq,ie=i.emsq,le=i.em,xe=i.argpm,Re=i.inclm,Fe=i.mm,Be=i.nm,V=i.nodem,ye=i.irez,Ee=i.atime,we=i.d2201,Se=i.d2211,Ae=i.d3210,Le=i.d3222,Ce=i.d4410,qe=i.d4422,D=i.d5220,A=i.d5232,ee=i.d5421,me=i.d5433,pe=i.dedt,Me=i.didt,Xe=i.dmdt,Ne=i.dnodt,Ie=i.domdt,et=i.del1,be=i.del2,je=i.del3,T=i.xfact,Ze=i.xlamo,ze=i.xli,ft=i.xni,lt,dt,G,He,ve,_e,Ue,rt,pt,wt,At,ht,bt,kt,Dt,Ge,Xt,tn,nn,he,_t,qt,Sn,$n,In,Ut,N,Z,ae,se,Q,Pe,Ye=17891679e-13,tt=21460748e-13,st=22123015e-14,Je=17891679e-13,mt=73636953e-16,ct=21765803e-16,Tt=.0043752690880113,Nt=37393792e-14,Bt=11428639e-14,Yt=.00015835218,St=119459e-10;ye=0,Be<.0052359877&&Be>.0034906585&&(ye=1),Be>=.00826&&Be<=.00924&&le>=.5&&(ye=2);var nt=h*St*S,sn=m*St*(y+_),yt=-St*g*(M+E-14-6*ie),Dn=v*St*(P+B-6),Kn=-St*m*(I+w);(Re<.052359877||Re>Nn-.052359877)&&(Kn=0),d!==0&&(Kn/=d);var Zn=Dn-e*Kn;pe=nt+s*Yt*f,Me=sn+a*Yt*(ge+W),Xe=yt-Yt*l*(fe+Y-14-6*ie);var ai=c*Yt*(F+J-6),Ot=-Yt*a*(ue+ce);(Re<.052359877||Re>Nn-.052359877)&&(Ot=0),Ie=Zn+ai,Ne=Kn,d!==0&&(Ie-=e/d*Ot,Ne+=Ot/d);var cn=0,Bn=(O+U*Tt)%Kt;if(le+=pe*R,Re+=Me*R,xe+=Ie*R,V+=Ne*R,Fe+=Xe*R,ye!==0){if(se=Math.pow(Be/ir,ho),ye===2){Q=e*e;var mn=le;le=Ve;var Bi=ie;ie=te,Pe=le*ie,kt=-.306-(le-.64)*.44,le<=.65?(Dt=3.616-13.247*le+16.29*ie,Xt=-19.302+117.39*le-228.419*ie+156.591*Pe,tn=-18.9068+109.7927*le-214.6334*ie+146.5816*Pe,nn=-41.122+242.694*le-471.094*ie+313.953*Pe,he=-146.407+841.88*le-1629.014*ie+1083.435*Pe,_t=-532.114+3017.977*le-5740.032*ie+3708.276*Pe):(Dt=-72.099+331.819*le-508.738*ie+266.724*Pe,Xt=-346.844+1582.851*le-2415.925*ie+1246.113*Pe,tn=-342.585+1554.908*le-2366.899*ie+1215.972*Pe,nn=-1052.797+4758.686*le-7193.992*ie+3651.957*Pe,he=-3581.69+16178.11*le-24462.77*ie+12422.52*Pe,le>.715?_t=-5149.66+29936.92*le-54087.36*ie+31324.56*Pe:_t=1464.74-4664.75*le+3763.64*ie),le<.7?($n=-919.2277+4988.61*le-9064.77*ie+5542.21*Pe,qt=-822.71072+4568.6173*le-8491.4146*ie+5337.524*Pe,Sn=-853.666+4690.25*le-8624.77*ie+5341.4*Pe):($n=-37995.78+161616.52*le-229838.2*ie+109377.94*Pe,qt=-51752.104+218913.95*le-309468.16*ie+146349.42*Pe,Sn=-40023.88+170470.89*le-242699.48*ie+115605.82*Pe),In=d*d,lt=.75*(1+2*e+Q),dt=1.5*In,He=1.875*d*(1-2*e-3*Q),ve=-1.875*d*(1+2*e-3*Q),Ue=35*In*lt,rt=39.375*In*In,pt=9.84375*d*(In*(1-2*e-5*Q)+.33333333*(-2+4*e+6*Q)),wt=d*(4.92187512*In*(-2-4*e+10*Q)+6.56250012*(1+2*e-3*Q)),At=29.53125*d*(2-8*e+Q*(-12+8*e+10*Q)),ht=29.53125*d*(-2-8*e+Q*(12+8*e-10*Q)),Z=Be*Be,ae=se*se,N=3*Z*ae,Ut=N*Je,we=Ut*lt*kt,Se=Ut*dt*Dt,N*=se,Ut=N*Nt,Ae=Ut*He*Xt,Le=Ut*ve*tn,N*=se,Ut=2*N*mt,Ce=Ut*Ue*nn,qe=Ut*rt*he,N*=se,Ut=N*Bt,D=Ut*pt*_t,A=Ut*wt*Sn,Ut=2*N*ct,ee=Ut*At*qt,me=Ut*ht*$n,Ze=(L+X+X-(Bn+Bn))%Kt,T=b+Xe+2*(K+Ne-Tt)-z,le=mn,ie=Bi}ye===1&&(bt=1+ie*(-2.5+.8125*ie),Xt=1+2*ie,Ge=1+ie*(-6+6.60937*ie),lt=.75*(1+e)*(1+e),G=.9375*d*d*(1+3*e)-.75*(1+e),_e=1+e,_e*=1.875*_e*_e,et=3*Be*Be*se*se,be=2*et*lt*bt*Ye,je=3*et*_e*Ge*st*se,et=et*G*Xt*tt*se,Ze=(L+X+t-Bn)%Kt,T=b+ne+Xe+Ie+Ne-(z+Tt)),ze=Ze,ft=z,Ee=0,Be=z+cn}return{em:le,argpm:xe,inclm:Re,mm:Fe,nm:Be,nodem:V,irez:ye,atime:Ee,d2201:we,d2211:Se,d3210:Ae,d3222:Le,d4410:Ce,d4422:qe,d5220:D,d5232:A,d5421:ee,d5433:me,dedt:pe,didt:Me,dmdt:Xe,dndt:cn,dnodt:Ne,domdt:Ie,del1:et,del2:be,del3:je,xfact:T,xlamo:Ze,xli:ze,xni:ft}}function tm(i){var e=(i-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*nr/240%Kt,t<0&&(t+=Kt),t}function t0(i,e,t,s,a,l,c){return i instanceof Date?tm(mc(i)):tm(i)}function Z_(i){var e=i.ecco,t=i.epoch,s=i.inclo,a=i.opsmode,l=i.no,c=e*e,f=1-c,d=Math.sqrt(f),h=Math.cos(s),m=h*h,g=Math.pow(ir/l,ho),v=.75*us*(3*m-1)/(d*f),S=v/(g*g),M=g*(1-S*S-S*(1/3+134*S*S/81));S=v/(M*M),l/=1+S;var E=Math.pow(ir/l,ho),y=Math.sin(s),_=E*f,I=1-5*m,w=-I-m-m,P=1/E,B=_*_,R=E*(1-e),U="n",O;if(a==="a"){var L=t-7305,b=Math.floor(L+1e-8),z=L-b,X=.017202791694070362,K=1.7321343856509375,ne=5075514194322695e-30,fe=X+Kt;O=(K+X*b+fe*z+L*L*ne)%Kt,O<0&&(O+=Kt)}else O=t0(t+24332815e-1);return{no:l,method:U,ainv:P,ao:E,con41:w,con42:I,cosio:h,cosio2:m,eccsq:c,omeosq:f,posq:B,rp:R,rteosq:d,sinio:y,gsto:O}}function J_(i){var e=i.irez,t=i.d2201,s=i.d2211,a=i.d3210,l=i.d3222,c=i.d4410,f=i.d4422,d=i.d5220,h=i.d5232,m=i.d5421,g=i.d5433,v=i.dedt,S=i.del1,M=i.del2,E=i.del3,y=i.didt,_=i.dmdt,I=i.dnodt,w=i.domdt,P=i.argpo,B=i.argpdot,R=i.t,U=i.tc,O=i.gsto,L=i.xfact,b=i.xlamo,z=i.no,X=i.atime,K=i.em,ne=i.argpm,fe=i.inclm,Y=i.xli,ge=i.mm,W=i.xni,ue=i.nodem,ce=i.nm,F=.13130908,J=2.8843198,Ve=.37448087,te=5.7686396,ie=.95240898,le=1.8014998,xe=1.050833,Re=4.4108898,Fe=.0043752690880113,Be=720,V=-720,ye=259200,Ee,we,Se,Ae,Le,Ce,qe,D,A=0,ee=0,me=(O+U*Fe)%Kt;if(K+=v*R,fe+=y*R,ne+=w*R,ue+=I*R,ge+=_*R,e!==0){(X===0||R*X<=0||Math.abs(R)<Math.abs(X))&&(X=0,W=z,Y=b),R>0?Ee=Be:Ee=V;for(var pe=381;pe===381;)e!==2?(qe=S*Math.sin(Y-F)+M*Math.sin(2*(Y-J))+E*Math.sin(3*(Y-Ve)),Le=W+L,Ce=S*Math.cos(Y-F)+2*M*Math.cos(2*(Y-J))+3*E*Math.cos(3*(Y-Ve)),Ce*=Le):(D=P+B*X,Se=D+D,we=Y+Y,qe=t*Math.sin(Se+Y-te)+s*Math.sin(Y-te)+a*Math.sin(D+Y-ie)+l*Math.sin(-D+Y-ie)+c*Math.sin(Se+we-le)+f*Math.sin(we-le)+d*Math.sin(D+Y-xe)+h*Math.sin(-D+Y-xe)+m*Math.sin(D+we-Re)+g*Math.sin(-D+we-Re),Le=W+L,Ce=t*Math.cos(Se+Y-te)+s*Math.cos(Y-te)+a*Math.cos(D+Y-ie)+l*Math.cos(-D+Y-ie)+d*Math.cos(D+Y-xe)+h*Math.cos(-D+Y-xe)+2*(c*Math.cos(Se+we-le)+f*Math.cos(we-le)+m*Math.cos(D+we-Re)+g*Math.cos(-D+we-Re)),Ce*=Le),Math.abs(R-X)>=Be?pe=381:(ee=R-X,pe=0),pe===381&&(Y+=Le*Ee+qe*ye,W+=qe*Ee+Ce*ye,X+=Ee);ce=W+qe*ee+Ce*ee*ee*.5,Ae=Y+Le*ee+qe*ee*ee*.5,e!==1?(ge=Ae-2*ue+2*me,A=ce-z):(ge=Ae-ue-ne+me,A=ce-z),ce=z+A}return{atime:X,em:K,argpm:ne,inclm:fe,xli:Y,mm:ge,xni:W,nodem:ue,dndt:A,nm:ce}}var Ir;(function(i){i[i.None=0]="None",i[i.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",i[i.MeanMotionBelowZero=2]="MeanMotionBelowZero",i[i.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",i[i.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",i[i.Decayed=6]="Decayed"})(Ir||(Ir={}));function n0(i,e){var t,s,a,l,c,f,d,h,m,g,v,S,M,E,y,_,I,w,P,B,R,U,O,L,b,z,X,K=15e-13;i.t=e,i.error=Ir.None;var ne=i.mo+i.mdot*i.t,fe=i.argpo+i.argpdot*i.t,Y=i.nodeo+i.nodedot*i.t;m=fe,R=ne;var ge=i.t*i.t;if(O=Y+i.nodecf*ge,I=1-i.cc1*i.t,w=i.bstar*i.cc4*i.t,P=i.t2cof*ge,i.isimp!==1){d=i.omgcof*i.t;var W=1+i.eta*Math.cos(ne);f=i.xmcof*(W*W*W-i.delmo),_=d+f,R=ne+_,m=fe-_,S=ge*i.t,M=S*i.t,I=I-i.d2*ge-i.d3*S-i.d4*M,w+=i.bstar*i.cc5*(Math.sin(R)-i.sinmao),P=P+i.t3cof*S+M*(i.t4cof+i.t*i.t5cof)}U=i.no;var ue=i.ecco;if(B=i.inclo,i.method==="d"){E=i.t;var ce={irez:i.irez,d2201:i.d2201,d2211:i.d2211,d3210:i.d3210,d3222:i.d3222,d4410:i.d4410,d4422:i.d4422,d5220:i.d5220,d5232:i.d5232,d5421:i.d5421,d5433:i.d5433,dedt:i.dedt,del1:i.del1,del2:i.del2,del3:i.del3,didt:i.didt,dmdt:i.dmdt,dnodt:i.dnodt,domdt:i.domdt,argpo:i.argpo,argpdot:i.argpdot,t:i.t,tc:E,gsto:i.gsto,xfact:i.xfact,xlamo:i.xlamo,no:i.no,atime:i.atime,em:ue,argpm:m,inclm:B,xli:i.xli,mm:R,xni:i.xni,nodem:O,nm:U},F=J_(ce);ue=F.em,m=F.argpm,B=F.inclm,R=F.mm,O=F.nodem,U=F.nm}if(U<=0)return i.error=Ir.MeanMotionBelowZero,null;var J=Math.pow(ir/U,ho)*I*I;if(U=ir/Math.pow(J,1.5),ue-=w,ue>=1||ue<-.001)return i.error=Ir.MeanEccentricityOutOfRange,null;ue<1e-6&&(ue=1e-6),R+=i.no*P,b=R+m+O,O%=Kt,m%=Kt,b%=Kt,R=(b-m-O)%Kt;var Ve={am:J,em:ue,im:B,Om:O,om:m,mm:R,nm:U},te=Math.sin(B),ie=Math.cos(B),le=ue;if(L=B,g=m,X=O,z=R,l=te,a=ie,i.method==="d"){var xe={inclo:i.inclo,init:"n",ep:le,inclp:L,nodep:X,argpp:g,mp:z,opsmode:i.operationmode},Re=e0(i,xe);if(le=Re.ep,X=Re.nodep,g=Re.argpp,z=Re.mp,L=Re.inclp,L<0&&(L=-L,X+=Nn,g-=Nn),le<0||le>1)return i.error=Ir.PerturbedEccentricityOutOfRange,null}i.method==="d"&&(l=Math.sin(L),a=Math.cos(L),i.aycof=-.5*fs*l,Math.abs(a+1)>15e-13?i.xlcof=-.25*fs*l*(3+5*a)/(1+a):i.xlcof=-.25*fs*l*(3+5*a)/K);var Fe=le*Math.cos(g);_=1/(J*(1-le*le));var Be=le*Math.sin(g)+_*i.aycof,V=z+g+X+_*i.xlcof*Fe,ye=(V-X)%Kt;h=ye,y=9999.9;for(var Ee=1;Math.abs(y)>=1e-12&&Ee<=10;)s=Math.sin(h),t=Math.cos(h),y=1-t*Fe-s*Be,y=(ye-Be*t+Fe*s-h)/y,Math.abs(y)>=.95&&(y>0?y=.95:y=-.95),h+=y,Ee+=1;var we=Fe*t+Be*s,Se=Fe*s-Be*t,Ae=Fe*Fe+Be*Be,Le=J*(1-Ae);if(Le<0)return i.error=Ir.SemiLatusRectumBelowZero,null;var Ce=J*(1-we),qe=Math.sqrt(J)*Se/Ce,D=Math.sqrt(Le)/Ce,A=Math.sqrt(1-Ae);_=Se/(1+A);var ee=J/Ce*(s-Be-Fe*_),me=J/Ce*(t-Fe+Be*_);v=Math.atan2(ee,me);var pe=(me+me)*ee,Me=1-2*ee*ee;_=1/Le;var Xe=.5*us*_,Ne=Xe*_;i.method==="d"&&(c=a*a,i.con41=3*c-1,i.x1mth2=1-c,i.x7thm1=7*c-1);var Ie=Ce*(1-1.5*Ne*A*i.con41)+.5*Xe*i.x1mth2*Me;if(Ie<1)return i.error=Ir.Decayed,null;v-=.25*Ne*i.x7thm1*pe;var et=X+1.5*Ne*a*pe,be=L+1.5*Ne*a*l*Me,je=qe-U*Xe*i.x1mth2*pe/ir,T=D+U*Xe*(i.x1mth2*Me+1.5*i.con41)/ir,Ze=Math.sin(v),ze=Math.cos(v),ft=Math.sin(et),lt=Math.cos(et),dt=Math.sin(be),G=Math.cos(be),He=-ft*G,ve=lt*G,_e=He*Ze+lt*ze,Ue=ve*Ze+ft*ze,rt=dt*Ze,pt=He*ze-lt*Ze,wt=ve*ze-ft*Ze,At=dt*ze,ht={x:Ie*_e*ri,y:Ie*Ue*ri,z:Ie*rt*ri},bt={x:(je*_e+T*pt)*af,y:(je*Ue+T*wt)*af,z:(je*rt+T*At)*af};return{position:ht,velocity:bt,meanElements:Ve}}function i0(i,e){var t=e.opsmode;e.satn;var s=e.epoch,a=e.xbstar,l=e.xecco,c=e.xargpo,f=e.xinclo,d=e.xmo,h=e.xno,m=e.xnodeo,g,v,S,M,E,y,_,I,w,P,B,R,U,O,L,b,z,X,K,ne,fe,Y,ge,W,ue,ce,F,J,Ve,te,ie,le,xe,Re,Fe,Be,V,ye,Ee,we,Se,Ae,Le,Ce,qe,D,A,ee,me,pe,Me,Xe,Ne,Ie,et,be,je=15e-13,T=i;T.isimp=0,T.method="n",T.aycof=0,T.con41=0,T.cc1=0,T.cc4=0,T.cc5=0,T.d2=0,T.d3=0,T.d4=0,T.delmo=0,T.eta=0,T.argpdot=0,T.omgcof=0,T.sinmao=0,T.t=0,T.t2cof=0,T.t3cof=0,T.t4cof=0,T.t5cof=0,T.x1mth2=0,T.x7thm1=0,T.mdot=0,T.nodedot=0,T.xlcof=0,T.xmcof=0,T.nodecf=0,T.irez=0,T.d2201=0,T.d2211=0,T.d3210=0,T.d3222=0,T.d4410=0,T.d4422=0,T.d5220=0,T.d5232=0,T.d5421=0,T.d5433=0,T.dedt=0,T.del1=0,T.del2=0,T.del3=0,T.didt=0,T.dmdt=0,T.dnodt=0,T.domdt=0,T.e3=0,T.ee2=0,T.peo=0,T.pgho=0,T.pho=0,T.pinco=0,T.plo=0,T.se2=0,T.se3=0,T.sgh2=0,T.sgh3=0,T.sgh4=0,T.sh2=0,T.sh3=0,T.si2=0,T.si3=0,T.sl2=0,T.sl3=0,T.sl4=0,T.gsto=0,T.xfact=0,T.xgh2=0,T.xgh3=0,T.xgh4=0,T.xh2=0,T.xh3=0,T.xi2=0,T.xi3=0,T.xl2=0,T.xl3=0,T.xl4=0,T.xlamo=0,T.zmol=0,T.zmos=0,T.atime=0,T.xli=0,T.xni=0,T.bstar=a,T.ecco=l,T.argpo=c,T.inclo=f,T.mo=d,T.no=h,T.nodeo=m,T.operationmode=t;var Ze=78/ri+1,ze=42/ri,ft=ze*ze*ze*ze;T.init="y",T.t=0;var lt={ecco:T.ecco,epoch:s,inclo:T.inclo,no:T.no,method:T.method,opsmode:T.operationmode},dt=Z_(lt),G=dt.ao,He=dt.con42,ve=dt.cosio,_e=dt.cosio2,Ue=dt.eccsq,rt=dt.omeosq,pt=dt.posq,wt=dt.rp,At=dt.rteosq,ht=dt.sinio;if(T.no=dt.no,T.con41=dt.con41,T.gsto=dt.gsto,T.a=Math.pow(T.no*X_,-2/3),T.alta=T.a*(1+T.ecco)-1,T.altp=T.a*(1-T.ecco)-1,T.error=0,rt>=0||T.no>=0){if(T.isimp=0,wt<220/ri+1&&(T.isimp=1),F=Ze,fe=ft,X=(wt-1)*ri,X<156){F=X-78,X<98&&(F=20);var bt=(120-F)/ri;fe=bt*bt*bt*bt,F=F/ri+1}K=1/pt,D=1/(G-F),T.eta=G*T.ecco*D,R=T.eta*T.eta,B=T.ecco*T.eta,ne=Math.abs(1-R),y=fe*Math.pow(D,4),_=y/Math.pow(ne,3.5),M=_*T.no*(G*(1+1.5*R+B*(4+R))+.375*us*D/ne*T.con41*(8+3*R*(8+R))),T.cc1=T.bstar*M,E=0,T.ecco>1e-4&&(E=-2*y*D*fs*T.no*ht/T.ecco),T.x1mth2=1-_e,T.cc4=2*T.no*_*G*rt*(T.eta*(2+.5*R)+T.ecco*(.5+2*R)-us*D/(G*ne)*(-3*T.con41*(1-2*B+R*(1.5-.5*B))+.75*T.x1mth2*(2*R-B*(1+R))*Math.cos(2*T.argpo))),T.cc5=2*_*G*rt*(1+2.75*(R+B)+B*R),I=_e*_e,Le=1.5*us*K*T.no,Ce=.5*Le*us*K,qe=-.46875*Y_*K*K*T.no,T.mdot=T.no+.5*Le*At*T.con41+.0625*Ce*At*(13-78*_e+137*I),T.argpdot=-.5*Le*He+.0625*Ce*(7-114*_e+395*I)+qe*(3-36*_e+49*I),ee=-Le*ve,T.nodedot=ee+(.5*Ce*(4-19*_e)+2*qe*(3-7*_e))*ve,A=T.argpdot+T.nodedot,T.omgcof=T.bstar*E*Math.cos(T.argpo),T.xmcof=0,T.ecco>1e-4&&(T.xmcof=-ho*y*T.bstar/B),T.nodecf=3.5*rt*ee*T.cc1,T.t2cof=1.5*T.cc1,Math.abs(ve+1)>15e-13?T.xlcof=-.25*fs*ht*(3+5*ve)/(1+ve):T.xlcof=-.25*fs*ht*(3+5*ve)/je,T.aycof=-.5*fs*ht;var kt=1+T.eta*Math.cos(T.mo);if(T.delmo=kt*kt*kt,T.sinmao=Math.sin(T.mo),T.x7thm1=7*_e-1,2*Nn/T.no>=225){T.method="d",T.isimp=1,Se=0,L=T.inclo;var Dt={epoch:s,ep:T.ecco,argpp:T.argpo,tc:Se,inclp:T.inclo,nodep:T.nodeo,np:T.no,e3:T.e3,ee2:T.ee2,peo:T.peo,pgho:T.pgho,pho:T.pho,pinco:T.pinco,plo:T.plo,se2:T.se2,se3:T.se3,sgh2:T.sgh2,sgh3:T.sgh3,sgh4:T.sgh4,sh2:T.sh2,sh3:T.sh3,si2:T.si2,si3:T.si3,sl2:T.sl2,sl3:T.sl3,sl4:T.sl4,xgh2:T.xgh2,xgh3:T.xgh3,xgh4:T.xgh4,xh2:T.xh2,xh3:T.xh3,xi2:T.xi2,xi3:T.xi3,xl2:T.xl2,xl3:T.xl3,xl4:T.xl4,zmol:T.zmol,zmos:T.zmos},Ge=$_(Dt);T.e3=Ge.e3,T.ee2=Ge.ee2,T.peo=Ge.peo,T.pgho=Ge.pgho,T.pho=Ge.pho,T.pinco=Ge.pinco,T.plo=Ge.plo,T.se2=Ge.se2,T.se3=Ge.se3,T.sgh2=Ge.sgh2,T.sgh3=Ge.sgh3,T.sgh4=Ge.sgh4,T.sh2=Ge.sh2,T.sh3=Ge.sh3,T.si2=Ge.si2,T.si3=Ge.si3,T.sl2=Ge.sl2,T.sl3=Ge.sl3,T.sl4=Ge.sl4,v=Ge.sinim,g=Ge.cosim,w=Ge.em,P=Ge.emsq,Y=Ge.s1,ge=Ge.s2,W=Ge.s3,ue=Ge.s4,ce=Ge.s5,J=Ge.ss1,Ve=Ge.ss2,te=Ge.ss3,ie=Ge.ss4,le=Ge.ss5,xe=Ge.sz1,Re=Ge.sz3,Fe=Ge.sz11,Be=Ge.sz13,V=Ge.sz21,ye=Ge.sz23,Ee=Ge.sz31,we=Ge.sz33,T.xgh2=Ge.xgh2,T.xgh3=Ge.xgh3,T.xgh4=Ge.xgh4,T.xh2=Ge.xh2,T.xh3=Ge.xh3,T.xi2=Ge.xi2,T.xi3=Ge.xi3,T.xl2=Ge.xl2,T.xl3=Ge.xl3,T.xl4=Ge.xl4,T.zmol=Ge.zmol,T.zmos=Ge.zmos,z=Ge.nm,me=Ge.z1,pe=Ge.z3,Me=Ge.z11,Xe=Ge.z13,Ne=Ge.z21,Ie=Ge.z23,et=Ge.z31,be=Ge.z33;var Xt={inclo:L,init:T.init,ep:T.ecco,inclp:T.inclo,nodep:T.nodeo,argpp:T.argpo,mp:T.mo,opsmode:T.operationmode},tn=e0(T,Xt);T.ecco=tn.ep,T.inclo=tn.inclp,T.nodeo=tn.nodep,T.argpo=tn.argpp,T.mo=tn.mp,U=0,O=0,b=0;var nn={cosim:g,emsq:P,argpo:T.argpo,s1:Y,s2:ge,s3:W,s4:ue,s5:ce,sinim:v,ss1:J,ss2:Ve,ss3:te,ss4:ie,ss5:le,sz1:xe,sz3:Re,sz11:Fe,sz13:Be,sz21:V,sz23:ye,sz31:Ee,sz33:we,t:T.t,tc:Se,gsto:T.gsto,mo:T.mo,mdot:T.mdot,no:T.no,nodeo:T.nodeo,nodedot:T.nodedot,xpidot:A,z1:me,z3:pe,z11:Me,z13:Xe,z21:Ne,z23:Ie,z31:et,z33:be,ecco:T.ecco,eccsq:Ue,em:w,argpm:U,inclm:L,mm:b,nm:z,nodem:O,irez:T.irez,atime:T.atime,d2201:T.d2201,d2211:T.d2211,d3210:T.d3210,d3222:T.d3222,d4410:T.d4410,d4422:T.d4422,d5220:T.d5220,d5232:T.d5232,d5421:T.d5421,d5433:T.d5433,dedt:T.dedt,didt:T.didt,dmdt:T.dmdt,dnodt:T.dnodt,domdt:T.domdt,del1:T.del1,del2:T.del2,del3:T.del3,xfact:T.xfact,xlamo:T.xlamo,xli:T.xli,xni:T.xni},he=K_(nn);T.irez=he.irez,T.atime=he.atime,T.d2201=he.d2201,T.d2211=he.d2211,T.d3210=he.d3210,T.d3222=he.d3222,T.d4410=he.d4410,T.d4422=he.d4422,T.d5220=he.d5220,T.d5232=he.d5232,T.d5421=he.d5421,T.d5433=he.d5433,T.dedt=he.dedt,T.didt=he.didt,T.dmdt=he.dmdt,T.dnodt=he.dnodt,T.domdt=he.domdt,T.del1=he.del1,T.del2=he.del2,T.del3=he.del3,T.xfact=he.xfact,T.xlamo=he.xlamo,T.xli=he.xli,T.xni=he.xni}T.isimp!==1&&(S=T.cc1*T.cc1,T.d2=4*G*D*S,Ae=T.d2*D*T.cc1/3,T.d3=(17*G+F)*Ae,T.d4=.5*Ae*G*D*(221*G+31*F)*T.cc1,T.t3cof=T.d2+2*S,T.t4cof=.25*(3*T.d3+T.cc1*(12*T.d2+10*S)),T.t5cof=.2*(3*T.d4+12*T.cc1*T.d3+6*T.d2*T.d2+15*S*(2*T.d2+S)))}n0(T,0),T.init="n"}function Q_(i,e){var t="i",s=0,a=i.substring(2,7),l=parseInt(i.substring(18,20),10),c=parseFloat(i.substring(20,32)),f=parseFloat(i.substring(33,43)),d=parseFloat("".concat(i.substring(44,45),".").concat(i.substring(45,50),"E").concat(i.substring(50,52))),h=parseFloat("".concat(i.substring(53,54),".").concat(i.substring(54,59),"E").concat(i.substring(59,61))),m=parseFloat(e.substring(8,16))*nr,g=parseFloat(e.substring(17,25))*nr,v=parseFloat(".".concat(e.substring(26,33).replace(/\s/g,"0"))),S=parseFloat(e.substring(34,42))*nr,M=parseFloat(e.substring(43,51))*nr,E=parseFloat(e.substring(52,63))/Jg,y=l<57?l+2e3:l+1900,_=Qg(y,c),I=_.mon,w=_.day,P=_.hr,B=_.minute,R=_.sec,U=mc(y,I,w,P,B,R),O={error:s,satnum:a,epochyr:l,epochdays:c,ndot:f,nddot:d,bstar:h,inclo:m,nodeo:g,ecco:v,argpo:S,mo:M,no:E,jdsatepoch:U};return i0(O,{opsmode:t,satn:O.satnum,epoch:O.jdsatepoch-24332815e-1,xbstar:O.bstar,xecco:O.ecco,xargpo:O.argpo,xinclo:O.inclo,xmo:O.mo,xno:O.no,xnodeo:O.nodeo}),O}function ex(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"i",t=0,s=i.NORAD_CAT_ID.toString(),a=new Date(i.EPOCH.endsWith("Z")?i.EPOCH:i.EPOCH+"Z"),l=a.getUTCFullYear(),c=Number(l.toString().slice(-2)),f=(a.valueOf()-new Date(Date.UTC(l,0,1,0,0,0)).valueOf())/(86400*1e3)+1,d=Number(i.MEAN_MOTION_DOT),h=Number(i.MEAN_MOTION_DDOT),m=Number(i.BSTAR),g=Number(i.INCLINATION)*nr,v=Number(i.RA_OF_ASC_NODE)*nr,S=Number(i.ECCENTRICITY),M=Number(i.ARG_OF_PERICENTER)*nr,E=Number(i.MEAN_ANOMALY)*nr,y=Number(i.MEAN_MOTION)/Jg,_=Qg(l,f),I=_.mon,w=_.day,P=_.hr,B=_.minute,R=_.sec,U=mc(l,I,w,P,B,R),O={error:t,satnum:s,epochyr:c,epochdays:f,ndot:d,nddot:h,bstar:m,inclo:g,nodeo:v,ecco:S,argpo:M,mo:E,no:y,jdsatepoch:U};return i0(O,{opsmode:e,satn:O.satnum,epoch:O.jdsatepoch-24332815e-1,xbstar:O.bstar,xecco:O.ecco,xargpo:O.argpo,xinclo:O.inclo,xmo:O.mo,xno:O.no,xnodeo:O.nodeo}),O}function tx(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];var a=mc.apply(void 0,t),l=(a-i.jdsatepoch)*W_;return n0(i,l)}function r0(i){return i*G_}function nx(i){if(i<-Nn/2||i>Nn/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return r0(i)}function ix(i){if(i<-Nn||i>Nn)throw new RangeError("Longitude radians must be in range [-pi; pi].");return r0(i)}function rx(i,e){for(var t=6378.137,s=6356.7523142,a=Math.sqrt(i.x*i.x+i.y*i.y),l=(t-s)/t,c=2*l-l*l,f=Math.atan2(i.y,i.x)-e;f<-Nn;)f+=Kt;for(;f>Nn;)f-=Kt;for(var d=20,h=0,m=Math.atan2(i.z,Math.sqrt(i.x*i.x+i.y*i.y)),g;h++<d;)g=1/Math.sqrt(1-c*(Math.sin(m)*Math.sin(m))),m=Math.atan2(i.z+t*g*c*Math.sin(m),a);var v=a/Math.cos(m)-t*g;return{longitude:f,latitude:m,height:v}}const s0=6371,a0=i=>{const e=Number(i.NORAD_CAT_ID),t=Number(i.MEAN_MOTION),s=typeof i.EPOCH=="string"?i.EPOCH:"",a=[i.ECCENTRICITY,i.INCLINATION,i.RA_OF_ASC_NODE,i.ARG_OF_PERICENTER,i.MEAN_ANOMALY].map(Number);if(!Number.isSafeInteger(e)||e<1||!Number.isFinite(t)||t<=0||Number.isNaN(Date.parse(s))||a.some(d=>!Number.isFinite(d))||a[0]<0||a[0]>=1||a[1]<0||a[1]>180)return null;const l=typeof i.OBJECT_NAME=="string"&&i.OBJECT_NAME.trim()?i.OBJECT_NAME.trim():`NORAD ${e}`,c=d=>{const h=Number(d);return Number.isFinite(h)?h:0},f={...i,OBJECT_NAME:l,OBJECT_ID:typeof i.OBJECT_ID=="string"&&i.OBJECT_ID?i.OBJECT_ID:`NORAD ${e}`,EPOCH:s,MEAN_MOTION:t,ECCENTRICITY:a[0],INCLINATION:a[1],RA_OF_ASC_NODE:a[2],ARG_OF_PERICENTER:a[3],MEAN_ANOMALY:a[4],BSTAR:c(i.BSTAR),MEAN_MOTION_DOT:c(i.MEAN_MOTION_DOT),MEAN_MOTION_DDOT:c(i.MEAN_MOTION_DDOT),ELEMENT_SET_NO:c(i.ELEMENT_SET_NO),NORAD_CAT_ID:e};return{noradId:e,name:l,omm:f}},sx=i=>{if(!i||typeof i!="object"||!("schemaVersion"in i)||i.schemaVersion!==1||!("fetchedAt"in i)||typeof i.fetchedAt!="string"||Number.isNaN(Date.parse(i.fetchedAt))||!("satellites"in i)||!Array.isArray(i.satellites))throw new Error("The shared satellite catalog has an invalid format.");const e=i.satellites.map(t=>t&&typeof t=="object"?a0(t):null).filter(t=>!!t);if(!e.length)throw new Error("The shared satellite catalog contains no valid records.");return{satellites:e,fetchedAt:i.fetchedAt}},ax=i=>{if(!i||typeof i!="object")return!1;const e=i;if(!Number.isSafeInteger(e.noradId)||typeof e.name!="string")return!1;if(e.omm&&typeof e.omm=="object"){const t=a0(e.omm);return(t==null?void 0:t.noradId)===e.noradId}return typeof e.line1=="string"&&typeof e.line2=="string"},ox=new Map([[25544,"#ff9500"],[20580,"#00f0ff"],[25994,"#7cff4f"],[33591,"#ffd400"]]),of={leo:"#ff3b30",meo:"#ffd400",geo:"#ff4fdb"},lx=(i,e)=>{const t=ox.get(i);return t||(e<2e3?of.leo:e<2e4?of.meo:of.geo)},nm=(i,e,t)=>`${Math.abs(i).toFixed(2)}° ${i>=0?e:t}`,Tl=i=>{const e=i.omm?ex(i.omm):Q_(i.line1,i.line2);return e.error?null:{...i,satrec:e,periodSeconds:2*Math.PI/e.no*60}},cx=i=>{const e=i.omm?Number(i.omm.MEAN_MOTION):Number.parseFloat(i.line2.slice(52,63));return!Number.isFinite(e)||e<=0?null:{...i,periodSeconds:86400/e}},o0=i=>{const t=i;return(Math.pow(t*t*3986e11/(4*Math.PI*Math.PI),1/3)-s0*1e3)/1e3},l0=i=>i<2e3?"leo":i<2e4?"meo":"geo",ux=i=>Math.max(i/s0,5e-4),fx={all:{label:"All",value:"all"},leo:{label:"LEO (< 2000 km)",value:"leo"},meo:{label:"MEO (2-20k km)",value:"meo"},geo:{label:"GEO (20k+ km)",value:"geo"}},dx=8*60*60*1e3,Yf="orbitradar_active_satellite_tles_v2",po="orbitradar_active_satellite_timestamp_v2",cd="orbitradar_active_satellite_source_timestamp_v2",c0=i=>{if(!i)return!1;const e=Date.parse(i),t=Date.now()-e;return!Number.isNaN(e)&&t>=0&&t<dx},im=(i=!1)=>{try{const e=localStorage.getItem(Yf),t=localStorage.getItem(po);if(!e||!i&&!c0(t))return null;const s=JSON.parse(e);if(!Array.isArray(s.satellites))return null;const a=s.satellites.filter(ax);return a.length?a:null}catch{try{localStorage.removeItem(Yf),localStorage.removeItem(po),localStorage.removeItem(cd)}catch{}return null}},hx=(i,e)=>{try{localStorage.setItem(Yf,JSON.stringify({satellites:i})),localStorage.setItem(po,new Date().toISOString()),e&&localStorage.setItem(cd,e)}catch(t){console.warn("Satellite catalog could not be cached:",t)}},rm=()=>{try{const i=localStorage.getItem(cd);return i&&!Number.isNaN(Date.parse(i))?i:null}catch{return null}},px="/data/catalog.json",mx="/data/catalog-status.json",sm=25544,gx=async()=>{try{const i=await fetch(mx,{cache:"no-cache"});return i.ok?await i.json():null}catch{return null}},vx=i=>{const[e,t]=Te.useState([]),[s,a]=Te.useState(sm),[l,c]=Te.useState(!0),[f,d]=Te.useState("Loading the shared satellite catalog..."),[h,m]=Te.useState(null),g=Te.useRef(!1),v=Te.useCallback((y,_,I)=>{const w=y.map(cx).filter(B=>!!B);t(w),d(_.replace("{count}",w.length.toLocaleString())),a(B=>{var R;return w.some(U=>U.noradId===B)?B:((R=w[0])==null?void 0:R.noradId)??sm});let P=null;try{P=localStorage.getItem(po)}catch{}m(I??rm()??P??new Date().toISOString())},[]),S=Te.useCallback(async()=>{if(g.current)return;g.current=!0,c(!0),d("Checking for the latest shared satellite catalog...");let y=null;try{const[_,I]=await Promise.all([fetch(px,{cache:"no-cache"}),gx()]);if(y=I,!_.ok)throw new Error(`Shared catalog request failed (${_.status}).`);const w=sx(await _.json());hx(w.satellites,w.fetchedAt);let P="Tracking {count} satellites from the shared catalog.";(y==null?void 0:y.state)==="paused"?P=y.message?`${y.message} Using the last valid snapshot ({count} satellites).`:"Catalog publishing is paused for review; using the last valid snapshot ({count} satellites).":(y==null?void 0:y.state)==="error"&&(P="Catalog refresh failed; using the last valid published snapshot ({count} satellites)."),v(w.satellites,P,w.fetchedAt)}catch(_){console.warn("Unable to read shared satellite catalog:",_);const I=im(!0);I?v(I,y!=null&&y.message?`${y.message} Showing the last saved snapshot ({count} satellites).`:"Shared catalog is unavailable; showing the last saved snapshot ({count} satellites)."):d((y==null?void 0:y.message)??"The shared satellite catalog is not available yet. Try again after it has been published.")}finally{g.current=!1,c(!1)}},[v]);Te.useEffect(()=>{const y=im(!0);let _=null;try{_=localStorage.getItem(po)}catch{}if(y&&c0(_)){v(y,"Tracking {count} satellites from local cache."),c(!1);return}y&&(v(y,"Checking for an update; showing the last saved snapshot ({count} satellites)."),m(rm()??_)),S()},[v,S]),Te.useEffect(()=>{if((i==null?void 0:i.autoRefresh)===!1)return;const y=((i==null?void 0:i.refreshIntervalHours)??8)*60*60*1e3,_=window.setInterval(()=>{S()},y);return()=>window.clearInterval(_)},[S,i==null?void 0:i.autoRefresh,i==null?void 0:i.refreshIntervalHours]);const M=Te.useCallback(()=>e.find(y=>y.noradId===s)??null,[e,s]),E=Te.useCallback(y=>{a(y)},[]);return{trackedSatellites:e,selectedNoradId:s,isLoading:l,statusMessage:f,lastUpdated:h,getSelectedSatellite:M,selectSatellite:E,refreshCatalog:S}},$f=(i,e)=>{const t=tx(i.satrec,e);if(!t||!t.position||typeof t.position!="object")return null;const s=rx(t.position,t0(e)),a=t.velocity,l=s.height,c={noradId:i.noradId,name:i.name,lat:nx(s.latitude),lng:ix(s.longitude),alt:ux(l),altitudeKm:l,velocityKph:a&&typeof a=="object"?Math.hypot(a.x,a.y,a.z)*3600:null,color:lx(i.noradId,l),altitudeClass:l0(o0(i.periodSeconds))};return Object.values(c).every(f=>typeof f!="number"||Number.isFinite(f))?c:null},am=(i,e,t=120)=>{const s=[],a=i.periodSeconds*1e3;for(let l=0;l<=t;l+=1){const c=new Date(e.getTime()+(l/t-.5)*a),f=$f(i,c);f&&s.push({lat:f.lat,lng:f.lng,alt:f.alt})}return s},_x=1e3,xx=(i,e,t)=>{const[s,a]=Te.useState(()=>new Date),[l,c]=Te.useState([]),[f,d]=Te.useState([]),[h,m]=Te.useState(!0),[g,v]=Te.useState(!1),S=Te.useRef(null),M=Te.useRef(0),E=Te.useRef(e),y=t!==void 0,_=t??s,I=Te.useMemo(()=>i,[i]),w=Te.useRef({trackedSatellites:i,selectedNoradId:e,time:_,showOrbit:h});w.current={trackedSatellites:i,selectedNoradId:e,time:_,showOrbit:h},Te.useEffect(()=>{if(y)return;const B=()=>{document.visibilityState!=="hidden"&&a(new Date)},R=window.setInterval(B,_x);return document.addEventListener("visibilitychange",B),()=>{window.clearInterval(R),document.removeEventListener("visibilitychange",B)}},[y]),Te.useEffect(()=>{let B;try{B=new Worker(new URL("/pr-preview/pr-59/assets/positions.worker-DlCj1n0I.js",import.meta.url),{type:"module"})}catch{return}return S.current=B,B.onmessage=R=>{R.data.requestId===M.current&&(R.data.type==="positions"&&R.data.positions?c(R.data.positions):R.data.type==="orbit"&&R.data.orbitPoints&&d(R.data.orbitPoints))},B.onerror=()=>{const{trackedSatellites:R,selectedNoradId:U,time:O,showOrbit:L}=w.current;c(R.map(X=>{const K=Tl(X);return K?$f(K,O):null}).filter(X=>X!==null));const b=R.find(X=>X.noradId===U),z=b?Tl(b):null;d(z&&L?am(z,O):[])},()=>{B.terminate(),S.current=null}},[]),Te.useEffect(()=>{var B;(B=S.current)==null||B.postMessage({type:"catalog",satellites:I})},[I]),Te.useEffect(()=>{const B=++M.current;E.current!==e&&(d([]),E.current=e);const R=S.current;if(R){R.postMessage({requestId:B,time:_.toISOString(),selectedNoradId:e,showOrbit:h});return}const U=i.map(b=>{const z=Tl(b);return z?$f(z,_):null}).filter(b=>b!==null),O=i.find(b=>b.noradId===e),L=O?Tl(O):null;c(U),d(L&&h?am(L,_):[])},[i,_,e,h,I]);const P=Te.useMemo(()=>l.find(B=>B.noradId===e)??null,[l,e]);return{time:s,satellitePositions:l,selectedPosition:P,orbitPoints:h?f:[],showOrbit:h,setShowOrbit:m,followSelected:g,setFollowSelected:v}},yx=()=>new Promise((i,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:s,longitude:a}=t.coords;i({lat:s,lng:a})},t=>{e("Error getting geolocation: "+t.message)}):e("Geolocation not supported by this browser.")}),lf="orbitradar_user_location",Sx=()=>{const[i,e]=Te.useState(()=>{try{const a=localStorage.getItem(lf);if(!a)return null;const l=JSON.parse(a);if(!l||typeof l!="object")return null;const{lat:c,lng:f}=l;return typeof c=="number"&&Number.isFinite(c)&&Math.abs(c)<=90&&typeof f=="number"&&Number.isFinite(f)&&Math.abs(f)<=180?{lat:c,lng:f,name:"You"}:null}catch{return null}}),t=Te.useCallback(()=>yx().then(a=>{const l={...a,name:"You"};e(l);try{localStorage.setItem(lf,JSON.stringify(a))}catch{}return l}).catch(a=>{throw console.error("Error getting user location:",a),a}),[]),s=Te.useCallback(()=>{e(null);try{localStorage.removeItem(lf)}catch{}},[]);return{userLocation:i,locateUser:t,clearUserLocation:s}},om="orbitradar_favorites",Mx=()=>{const[i,e]=Te.useState(()=>{try{const f=localStorage.getItem(om),d=f?JSON.parse(f):[];return Array.isArray(d)?[...new Set(d.filter(h=>Number.isSafeInteger(h)&&h>0))]:[]}catch{return[]}});Te.useEffect(()=>{try{localStorage.setItem(om,JSON.stringify(i))}catch(f){console.warn("Could not save favorites:",f)}},[i]);const t=Te.useCallback(f=>i.includes(f),[i]),s=Te.useCallback(f=>{e(d=>d.includes(f)?d.filter(h=>h!==f):[...d,f])},[]),a=Te.useCallback(f=>{e(d=>d.includes(f)?d:[...d,f])},[]),l=Te.useCallback(f=>{e(d=>d.filter(h=>h!==f))},[]),c=Te.useCallback(()=>{e([])},[]);return{favorites:i,isFavorite:t,toggleFavorite:s,addFavorite:a,removeFavorite:l,clearFavorites:c}},Ex=[1,5,10,30,60,120,300,600],wx=i=>{if(Math.abs(i)<1e3)return"Live";const e=Math.abs(i),t=i<0?"-":"+";return e<6e4?`${t}${Math.floor(e/1e3)}s`:e<36e5?`${t}${Math.floor(e/6e4)}m`:`${t}${Math.floor(e/36e5)}h`},Tx=()=>{const[i,e]=Te.useState(!1),[t,s]=Te.useState(!1),[a,l]=Te.useState(1),[c,f]=Te.useState(()=>Date.now()),[d,h]=Te.useState(()=>Date.now()),[m,g]=Te.useState(()=>Date.now()),v=Te.useRef(Date.now()),S=t||i?c:d,M=Te.useMemo(()=>new Date(S),[S]),E=S-d,y=Te.useCallback(()=>t||!i?new Date(S):new Date(c+(Date.now()-m)*a),[S,t,i,c,a,m]),_=Te.useCallback(()=>wx(E),[E]),I=Te.useCallback(()=>{if(i)return;const O=Date.now();v.current=O,t||f(O),g(O),s(!1),e(!0)},[i,t]),w=Te.useCallback(()=>{const O=Date.now();f(y().getTime()),v.current=O,g(O),e(!1),s(!0)},[y]),P=Te.useCallback(()=>{i?w():I()},[i,I,w]),B=Te.useCallback(O=>{if(i){const L=Date.now();f(y().getTime()),v.current=L,g(L)}l(O)},[i,y]),R=Te.useCallback(()=>{const O=Date.now();f(O),h(O),g(O),v.current=O,e(!1),s(!1)},[]);Te.useEffect(()=>{const O=()=>{if(document.hidden)return;const b=Date.now();if(h(b),i){const z=b-v.current;v.current=b,f(X=>X+z*a),g(b)}},L=window.setInterval(O,1e3);return document.addEventListener("visibilitychange",O),()=>{window.clearInterval(L),document.removeEventListener("visibilitychange",O)}},[i,a]);const U=Te.useCallback(O=>O===1?"1x (Real-time)":O<60?`${O}x`:`${O/60} min`,[]);return{isTimeLapseActive:i,isPaused:t,speed:a,speeds:Ex,currentTime:M,timeOffsetMs:E,startTimeLapse:I,stopTimeLapse:w,toggleTimeLapse:P,setTimeLapseSpeed:B,resetTime:R,getSpeedLabel:U,getTimeOffsetDisplay:_}},cf=10,Ax=i=>{const[e,t]=Te.useState([]),s=Te.useCallback(g=>{t(v=>v.includes(g)?v:v.length>=cf?[...v.slice(1),g]:[...v,g])},[]),a=Te.useCallback(g=>{t(v=>v.filter(S=>S!==g))},[]),l=Te.useCallback(g=>{t(v=>v.includes(g)?v.filter(S=>S!==g):v.length>=cf?[...v.slice(1),g]:[...v,g])},[]),c=Te.useCallback(()=>{t([])},[]),f=Te.useCallback(g=>e.includes(g),[e]),d=Te.useMemo(()=>i.filter(g=>e.includes(g.noradId)),[i,e]),h=Te.useMemo(()=>e.map(g=>{const v=i.find(S=>S.noradId===g);return v?{noradId:g,position:v}:null}).filter(g=>g!==null),[i,e]),m=Te.useCallback(g=>{const v=e.indexOf(g);if(v===-1)return"";const S=["#ff9500","#00f0ff","#7cff4f","#ffd400","#c084fc","#ff4fdb","#67e8f9","#2cffb7","#ff9f1c","#b967ff"];return S[v%S.length]},[e]);return{trackedNoradIds:e,trackedPositions:d,trackedWithPositions:h,isTracked:f,addTracked:s,removeTracked:a,toggleTracked:l,clearTracked:c,getTrackedColor:m,maxTracked:cf}},Cx=(i,e,t=new Date)=>{const[s,a]=Te.useState([]),[l,c]=Te.useState(!1),[f,d]=Te.useState(null),h=Te.useRef(null),m=Te.useRef(0);Te.useEffect(()=>{let E;try{E=new Worker(new URL("/pr-preview/pr-59/assets/passes.worker-UJycLH1I.js",import.meta.url),{type:"module"})}catch{d("Background workers are unavailable in this browser.");return}return h.current=E,E.onmessage=y=>{y.data.requestId===m.current&&(c(!1),y.data.error?d(y.data.error):a(y.data.passes.map(_=>({..._,riseTime:new Date(_.riseTime),maxElevationTime:new Date(_.maxElevationTime),setTime:new Date(_.setTime)}))))},E.onerror=()=>{c(!1),d("Pass prediction failed. Please try again.")},()=>{E.terminate(),h.current=null}},[]);const g=Te.useCallback(E=>{var I;if(!e){d("Set your location before predicting passes.");return}const y=i.filter(w=>E.includes(w.noradId));if(!y.length){d("No satellites are available to predict.");return}if(!h.current){d("Background workers are unavailable in this browser.");return}a([]),d(null),c(!0);const _=++m.current;(I=h.current)==null||I.postMessage({requestId:_,location:{lat:e.lat,lng:e.lng},startTime:t.getTime(),satellites:y})},[i,e,t]),v=Te.useCallback(E=>g([E]),[g]),S=Te.useCallback(E=>g(E),[g]),M=Te.useCallback(()=>{var y;const E=++m.current;(y=h.current)==null||y.postMessage({type:"cancel",requestId:E}),c(!1),a([]),d(null)},[]);return{passes:s,isCalculating:l,error:f,calculateForSelected:v,calculateForTracked:S,clearPasses:M}},lm="orbitradar_settings",Ni={theme:"dark",showOrbitsByDefault:!0,defaultAltitudeFilter:"all",autoRefresh:!0,refreshIntervalHours:8,nightShading:!0,cloudCover:!1},bx=()=>{const[i,e]=Te.useState(()=>{try{const a=localStorage.getItem(lm);if(a){const l=JSON.parse(a);return{...Ni,...l,theme:["dark","light","system"].includes(l.theme??"")?l.theme:Ni.theme,defaultAltitudeFilter:["all","leo","meo","geo"].includes(l.defaultAltitudeFilter??"")?l.defaultAltitudeFilter:Ni.defaultAltitudeFilter,refreshIntervalHours:[1,4,8,12,24].includes(l.refreshIntervalHours??0)?l.refreshIntervalHours:Ni.refreshIntervalHours,autoRefresh:typeof l.autoRefresh=="boolean"?l.autoRefresh:Ni.autoRefresh,showOrbitsByDefault:typeof l.showOrbitsByDefault=="boolean"?l.showOrbitsByDefault:Ni.showOrbitsByDefault,nightShading:typeof l.nightShading=="boolean"?l.nightShading:Ni.nightShading,cloudCover:typeof l.cloudCover=="boolean"?l.cloudCover:Ni.cloudCover}}}catch{}return Ni});Te.useEffect(()=>{try{localStorage.setItem(lm,JSON.stringify(i))}catch(a){console.warn("Could not save settings:",a)}},[i]);const t=Te.useCallback((a,l)=>{e(c=>({...c,[a]:l}))},[]),s=Te.useCallback(()=>{e(Ni)},[]);return Te.useEffect(()=>{var c;const a=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-color-scheme: light)"),l=()=>{document.documentElement.dataset.theme=i.theme==="system"?a.matches?"light":"dark":i.theme};return l(),a==null||a.addEventListener("change",l),()=>a==null?void 0:a.removeEventListener("change",l)},[i.theme]),{settings:i,updateSetting:t,resetSettings:s}},cm='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',oo=(i,e)=>{const t=Te.useRef(null),s=Te.useRef(e);return s.current=e,Te.useEffect(()=>{var d;if(!i)return;const a=document.activeElement instanceof HTMLElement?document.activeElement:null,l=t.current;(d=(l==null?void 0:l.querySelector(cm))??l)==null||d.focus();const f=h=>{if(h.key==="Escape"){h.preventDefault(),s.current();return}if(h.key!=="Tab"||!l)return;const m=[...l.querySelectorAll(cm)];if(!m.length){h.preventDefault(),l.focus();return}const g=m[0],v=m[m.length-1];h.shiftKey&&document.activeElement===g?(h.preventDefault(),v.focus()):!h.shiftKey&&document.activeElement===v&&(h.preventDefault(),g.focus())};return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),a==null||a.focus()}},[i]),t};class Rx extends Kg.Component{constructor(){super(...arguments);Gp(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("The globe could not be rendered:",t)}render(){return this.state.hasError?H.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[H.jsx("p",{className:"text-lg font-bold",children:"The 3D globe is unavailable."}),H.jsx("p",{className:"max-w-sm text-sm text-slate-300",children:"Satellite data and controls are still available. Check graphics acceleration, then try the globe again."}),H.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:this.props.onRetry,type:"button",children:"Retry globe"})]}):this.props.children}}const Px=({passes:i,isCalculating:e,error:t,onClose:s,onCalculateTracked:a,selectedSatelliteName:l})=>{const c=oo(!0,s),f=m=>m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),d=m=>m.toLocaleDateString([],{month:"short",day:"numeric",year:m.getFullYear()!==new Date().getFullYear()?"numeric":void 0}),h=m=>{if(m<60)return`${Math.round(m)} min`;const g=Math.floor(m/60),v=Math.round(m%60);return`${g}h ${v}m`};return H.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:H.jsxs("section",{ref:c,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"passes-title",className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[H.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Pass Prediction"}),H.jsx("h2",{id:"passes-title",className:"mt-1 text-2xl font-bold",children:"Upcoming satellite passes"}),H.jsxs("p",{className:"mt-1 text-sm text-slate-400",children:[l," and tracked objects · next 24 hours · over your location"]})]}),H.jsx("button",{"aria-label":"Close pass prediction",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),H.jsxs("div",{className:"max-h-[calc(90vh-140px)] overflow-y-auto",children:[t&&H.jsx("div",{className:"p-4 text-red-400",children:H.jsxs("p",{children:["Error: ",t]})}),e&&i.length===0&&!t&&H.jsx("div",{className:"p-4 text-center text-slate-400",children:H.jsx("p",{children:"Calculating passes... This may take a moment."})}),!e&&i.length===0&&!t&&H.jsxs("div",{className:"p-4 text-center text-slate-400",children:[H.jsx("p",{children:"No passes found for this satellite in the next 24 hours."}),H.jsx("p",{className:"mt-2 text-sm",children:"The satellite may not pass over your location, or its orbit may not be visible."})]}),i.length>0&&H.jsx("div",{className:"p-4",children:H.jsx("div",{className:"space-y-3",children:i.map((m,g)=>H.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 p-4",children:[H.jsxs("div",{className:"flex items-center justify-between",children:[H.jsxs("div",{children:[H.jsxs("p",{className:"font-semibold",children:[m.name," · Pass #",g+1]}),H.jsx("p",{className:"text-sm text-slate-400",children:d(m.riseTime)})]}),H.jsxs("span",{className:`rounded-full px-2 py-1 text-xs ${m.maxElevationDeg>=60?"bg-green-500/20 text-green-400":m.maxElevationDeg>=30?"bg-yellow-500/20 text-yellow-400":"bg-blue-500/20 text-blue-400"}`,children:["Max: ",m.maxElevationDeg.toFixed(1),"°"]})]}),H.jsxs("div",{className:"mt-3 grid grid-cols-3 gap-2 text-sm",children:[H.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[H.jsx("p",{className:"text-slate-400",children:"Rise"}),H.jsx("p",{className:"font-semibold",children:f(m.riseTime)})]}),H.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[H.jsx("p",{className:"text-slate-400",children:"Peak"}),H.jsx("p",{className:"font-semibold",children:f(m.maxElevationTime)})]}),H.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[H.jsx("p",{className:"text-slate-400",children:"Set"}),H.jsx("p",{className:"font-semibold",children:f(m.setTime)})]})]}),H.jsxs("div",{className:"mt-2 text-center text-xs text-slate-400",children:["Duration: ",h(m.durationMinutes)]})]},g))})})]}),H.jsx("footer",{className:"border-t border-white/10 p-4",children:H.jsx("button",{className:"w-full rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:a,type:"button",children:"Predict Selected / Tracked"})})]})})},Lx=({settings:i,onUpdate:e,onReset:t,onClose:s})=>{const a=oo(!0,s);return H.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:H.jsxs("section",{ref:a,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",className:"max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[H.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Settings"}),H.jsx("h2",{id:"settings-title",className:"mt-1 text-2xl font-bold",children:"Configuration"}),H.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Customize your OrbitRadar experience"})]}),H.jsx("button",{"aria-label":"Close settings",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),H.jsx("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:H.jsxs("div",{className:"space-y-6",children:[H.jsxs("div",{children:[H.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Theme"}),H.jsx("div",{className:"flex gap-2",children:["dark","light","system"].map(l=>H.jsx("button",{className:`flex-1 rounded-lg border px-3 py-2 text-sm transition ${i.theme===l?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,"aria-pressed":i.theme===l,onClick:()=>e("theme",l),type:"button",children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),H.jsxs("div",{children:[H.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[H.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Show orbits by default"}),H.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.showOrbitsByDefault?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.showOrbitsByDefault,onClick:()=>e("showOrbitsByDefault",!i.showOrbitsByDefault),type:"button",children:i.showOrbitsByDefault?"ON":"OFF"})]}),H.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically show orbit path when selecting a satellite"})]}),H.jsxs("div",{children:[H.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Default altitude filter"}),H.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("defaultAltitudeFilter",l.target.value),value:i.defaultAltitudeFilter,children:[H.jsx("option",{value:"all",children:"All Satellites"}),H.jsx("option",{value:"leo",children:"LEO (<2000km)"}),H.jsx("option",{value:"meo",children:"MEO (2-20k km)"}),H.jsx("option",{value:"geo",children:"GEO (20k+ km)"})]})]}),H.jsxs("div",{children:[H.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[H.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Night shading"}),H.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.nightShading?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.nightShading,onClick:()=>e("nightShading",!i.nightShading),type:"button",children:i.nightShading?"ON":"OFF"})]}),H.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Follow the simulated UTC sun position."})]}),H.jsxs("div",{children:[H.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[H.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Cloud cover"}),H.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.cloudCover?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.cloudCover,onClick:()=>e("cloudCover",!i.cloudCover),type:"button",children:i.cloudCover?"ON":"OFF"})]}),H.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"NASA daily cloud fraction, latest observation."})]}),H.jsxs("div",{children:[H.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[H.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Auto refresh catalog"}),H.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.autoRefresh?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.autoRefresh,onClick:()=>e("autoRefresh",!i.autoRefresh),type:"button",children:i.autoRefresh?"ON":"OFF"})]}),H.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically refresh satellite catalog periodically"})]}),i.autoRefresh&&H.jsxs("div",{children:[H.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Refresh interval (hours)"}),H.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("refreshIntervalHours",Number(l.target.value)),value:i.refreshIntervalHours,children:[H.jsx("option",{value:1,children:"1 hour"}),H.jsx("option",{value:4,children:"4 hours"}),H.jsx("option",{value:8,children:"8 hours"}),H.jsx("option",{value:12,children:"12 hours"}),H.jsx("option",{value:24,children:"24 hours"})]})]})]})}),H.jsx("footer",{className:"border-t border-white/10 p-4",children:H.jsxs("div",{className:"flex gap-2",children:[H.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-400 transition hover:bg-white/20",onClick:t,type:"button",children:"Reset to defaults"}),H.jsx("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:s,type:"button",children:"Save & Close"})]})})]})})},n2=(i,e,t)=>i*(e?.016:t?.012:.008),i2="#ffffff",Nx=i=>Math.min(Math.max(i,1),1.5);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ud="165",r2={ROTATE:0,DOLLY:1,PAN:2},s2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ix=0,um=1,Dx=2,u0=1,Ux=2,er=3,ar=0,Yn=1,tr=2,Ur=0,aa=1,fm=2,dm=3,hm=4,Ox=5,ls=100,Fx=101,zx=102,kx=103,Bx=104,Hx=200,Vx=201,Gx=202,Wx=203,Kf=204,Zf=205,jx=206,Xx=207,qx=208,Yx=209,$x=210,Kx=211,Zx=212,Jx=213,Qx=214,ey=0,ty=1,ny=2,sc=3,iy=4,ry=5,sy=6,ay=7,gc=0,oy=1,ly=2,Or=0,cy=1,uy=2,fy=3,dy=4,hy=5,py=6,my=7,f0=300,ua=301,fa=302,Jf=303,Qf=304,vc=306,ed=1e3,ds=1001,td=1002,qn=1003,gy=1004,Al=1005,Ti=1006,uf=1007,hs=1008,Fr=1009,vy=1010,_y=1011,ac=1012,d0=1013,da=1014,rr=1015,_c=1016,h0=1017,p0=1018,ha=1020,xy=35902,yy=1021,Sy=1022,Fi=1023,My=1024,Ey=1025,oa=1026,pa=1027,m0=1028,g0=1029,wy=1030,v0=1031,_0=1033,ff=33776,df=33777,hf=33778,pf=33779,pm=35840,mm=35841,gm=35842,vm=35843,_m=36196,xm=37492,ym=37496,Sm=37808,Mm=37809,Em=37810,wm=37811,Tm=37812,Am=37813,Cm=37814,bm=37815,Rm=37816,Pm=37817,Lm=37818,Nm=37819,Im=37820,Dm=37821,mf=36492,Um=36494,Om=36495,Ty=36283,Fm=36284,zm=36285,km=36286,a2=0,o2=1,l2=2,Ay=3200,Cy=3201,fd=0,by=1,Dr="",Di="srgb",zr="srgb-linear",dd="display-p3",xc="display-p3-linear",oc="linear",jt="srgb",lc="rec709",cc="p3",Bs=7680,Bm=519,Ry=512,Py=513,Ly=514,x0=515,Ny=516,Iy=517,Dy=518,Uy=519,nd=35044,c2=35048,Hm="300 es",sr=2e3,uc=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vm=1234567;const lo=Math.PI/180,mo=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function dn(i,e,t){return Math.max(e,Math.min(t,i))}function hd(i,e){return(i%e+e)%e}function Oy(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function Fy(i,e,t){return i!==e?(t-i)/(e-i):0}function co(i,e,t){return(1-t)*i+t*e}function zy(i,e,t,s){return co(i,e,1-Math.exp(-t*s))}function ky(i,e=1){return e-Math.abs(hd(i,e*2)-e)}function By(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gy(i,e){return i+Math.random()*(e-i)}function Wy(i){return i*(.5-Math.random())}function jy(i){i!==void 0&&(Vm=i);let e=Vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xy(i){return i*lo}function qy(i){return i*mo}function Yy(i){return(i&i-1)===0&&i!==0}function $y(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ky(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zy(i,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+s)/2),m=c((e+s)/2),g=l((e-s)/2),v=c((e-s)/2),S=l((s-e)/2),M=c((s-e)/2);switch(a){case"XYX":i.set(f*m,d*g,d*v,f*h);break;case"YZY":i.set(d*v,f*m,d*g,f*h);break;case"ZXZ":i.set(d*g,d*v,f*m,f*h);break;case"XZX":i.set(f*m,d*M,d*S,f*h);break;case"YXY":i.set(d*S,f*m,d*M,f*h);break;case"ZYZ":i.set(d*M,d*S,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const u2={DEG2RAD:lo,RAD2DEG:mo,generateUUID:zi,clamp:dn,euclideanModulo:hd,mapLinear:Oy,inverseLerp:Fy,lerp:co,damp:zy,pingpong:ky,smoothstep:By,smootherstep:Hy,randInt:Vy,randFloat:Gy,randFloatSpread:Wy,seededRandom:jy,degToRad:Xy,radToDeg:qy,isPowerOfTwo:Yy,ceilPowerOfTwo:$y,floorPowerOfTwo:Ky,setQuaternionFromProperEuler:Zy,normalize:Ft,denormalize:Ai};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,s,a,l,c,f,d,h){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,h)}set(e,t,s,a,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],h=s[1],m=s[4],g=s[7],v=s[2],S=s[5],M=s[8],E=a[0],y=a[3],_=a[6],I=a[1],w=a[4],P=a[7],B=a[2],R=a[5],U=a[8];return l[0]=c*E+f*I+d*B,l[3]=c*y+f*w+d*R,l[6]=c*_+f*P+d*U,l[1]=h*E+m*I+g*B,l[4]=h*y+m*w+g*R,l[7]=h*_+m*P+g*U,l[2]=v*E+S*I+M*B,l[5]=v*y+S*w+M*R,l[8]=v*_+S*P+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-s*l*m+s*f*d+a*l*h-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*c-f*h,v=f*d-m*l,S=h*l-c*d,M=t*g+s*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(a*h-m*s)*E,e[2]=(f*s-a*c)*E,e[3]=v*E,e[4]=(m*t-a*d)*E,e[5]=(a*l-f*t)*E,e[6]=S*E,e[7]=(s*d-h*t)*E,e[8]=(c*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(s*d,s*h,-s*(d*c+h*f)+c+e,-a*h,a*d,-a*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(gf.makeScale(e,t)),this}rotate(e){return this.premultiply(gf.makeRotation(-e)),this}translate(e,t){return this.premultiply(gf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gf=new Et;function y0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jy(){const i=go("canvas");return i.style.display="block",i}const Gm={};function pd(i){i in Gm||(Gm[i]=!0,console.warn(i))}function Qy(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const Wm=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jm=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cl={[zr]:{transfer:oc,primaries:lc,toReference:i=>i,fromReference:i=>i},[Di]:{transfer:jt,primaries:lc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[xc]:{transfer:oc,primaries:cc,toReference:i=>i.applyMatrix3(jm),fromReference:i=>i.applyMatrix3(Wm)},[dd]:{transfer:jt,primaries:cc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(jm),fromReference:i=>i.applyMatrix3(Wm).convertLinearToSRGB()}},eS=new Set([zr,xc]),zt={enabled:!0,_workingColorSpace:zr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!eS.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const s=Cl[e].toReference,a=Cl[t].fromReference;return a(s(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cl[i].primaries},getTransfer:function(i){return i===Dr?oc:Cl[i].transfer}};function la(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hs;class tS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=go("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=la(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(la(t[s]/255)*255):t[s]=la(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nS=0;class S0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(_f(a[c].image)):l.push(_f(a[c]))}else l=_f(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function _f(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iS=0;class Ln extends ga{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,s=ds,a=ds,l=Ti,c=hs,f=Fi,d=Fr,h=Ln.DEFAULT_ANISOTROPY,m=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=zi(),this.name="",this.source=new S0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==f0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=f0;Ln.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,t=0,s=0,a=1){yn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],S=d[5],M=d[9],E=d[2],y=d[6],_=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,P=(S+1)/2,B=(_+1)/2,R=(m+v)/4,U=(g+E)/4,O=(M+y)/4;return w>P&&w>B?w<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(w),a=R/s,l=U/s):P>B?P<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),s=R/a,l=O/a):B<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),s=U/l,a=O/l),this.set(s,a,l,t),this}let I=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(I)<.001&&(I=1),this.x=(y-M)/I,this.y=(g-E)/I,this.z=(v-m)/I,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rS extends ga{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yn(0,0,e,t),this.scissorTest=!1,this.viewport=new yn(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Ln(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new S0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends rS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class M0 extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sS extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],h=s[a+1],m=s[a+2],g=s[a+3];const v=l[c+0],S=l[c+1],M=l[c+2],E=l[c+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||h!==S||m!==M){let y=1-f;const _=d*v+h*S+m*M+g*E,I=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const B=Math.sqrt(w),R=Math.atan2(B,_*I);y=Math.sin(y*R)/B,f=Math.sin(f*R)/B}const P=f*I;if(d=d*y+v*P,h=h*y+S*P,m=m*y+M*P,g=g*y+E*P,y===1-f){const B=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=B,h*=B,m*=B,g*=B}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],h=s[a+2],m=s[a+3],g=l[c],v=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+m*g+d*S-h*v,e[t+1]=d*M+m*v+h*g-f*S,e[t+2]=h*M+m*S+f*v-d*g,e[t+3]=m*M-f*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(s/2),m=f(a/2),g=f(l/2),v=d(s/2),S=d(a/2),M=d(l/2);switch(c){case"XYZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"YXZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"ZXY":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"ZYX":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"YZX":this._x=v*m*g+h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g-v*S*M;break;case"XZY":this._x=v*m*g-h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=s+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(c-a)*S}else if(s>f&&s>g){const S=2*Math.sqrt(1+s-f-g);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+h)/S}else if(f>g){const S=2*Math.sqrt(1+f-s-g);this._w=(l-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-s-f);this._w=(c-a)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=s*m+c*f+a*h-l*d,this._y=a*m+c*d+l*f-s*h,this._z=l*m+c*h+s*d-a*f,this._w=c*m-s*f-a*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*g+this._w*v,this._x=s*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,s=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*a-f*s),m=2*(f*t-l*a),g=2*(l*s-c*t);return this.x=t+d*h+c*g-f*m,this.y=s+d*m+f*h-l*g,this.z=a+d*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return xf.copy(this).projectOnVector(e),this.sub(xf)}reflect(e){return this.sub(xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(dn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xf=new $,Xm=new yo;class gs{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(l,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bl.copy(s.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Rl.subVectors(this.max,Qa),Vs.subVectors(e.a,Qa),Gs.subVectors(e.b,Qa),Ws.subVectors(e.c,Qa),Cr.subVectors(Gs,Vs),br.subVectors(Ws,Gs),es.subVectors(Vs,Ws);let t=[0,-Cr.z,Cr.y,0,-br.z,br.y,0,-es.z,es.y,Cr.z,0,-Cr.x,br.z,0,-br.x,es.z,0,-es.x,-Cr.y,Cr.x,0,-br.y,br.x,0,-es.y,es.x,0];return!yf(t,Vs,Gs,Ws,Rl)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,Vs,Gs,Ws,Rl))?!1:(Pl.crossVectors(Cr,br),t=[Pl.x,Pl.y,Pl.z],yf(t,Vs,Gs,Ws,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new $,new $,new $,new $,new $,new $,new $,new $],Si=new $,bl=new gs,Vs=new $,Gs=new $,Ws=new $,Cr=new $,br=new $,es=new $,Qa=new $,Rl=new $,Pl=new $,ts=new $;function yf(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){ts.fromArray(i,l);const f=a.x*Math.abs(ts.x)+a.y*Math.abs(ts.y)+a.z*Math.abs(ts.z),d=e.dot(ts),h=t.dot(ts),m=s.dot(ts);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const aS=new gs,eo=new $,Sf=new $;class va{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):aS.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(eo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Sf)),this.expandByPoint(eo.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new $,Mf=new $,Ll=new $,Rr=new $,Ef=new $,Nl=new $,wf=new $;class md{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Mf.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Mf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ll),f=Rr.dot(this.direction),d=-Rr.dot(Ll),h=Rr.lengthSq(),m=Math.abs(1-c*c);let g,v,S,M;if(m>0)if(g=c*d-f,v=c*f-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,S=g*(g+c*v+2*f)+v*(c*g+v+2*d)+h}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Mf).addScaledVector(Ll,v),S}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),a=Ki.dot(Ki)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,s,a,l){Ef.subVectors(t,e),Nl.subVectors(s,e),wf.crossVectors(Ef,Nl);let c=this.direction.dot(wf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const d=f*this.direction.dot(Nl.crossVectors(Rr,Nl));if(d<0)return null;const h=f*this.direction.dot(Ef.cross(Rr));if(h<0||d+h>c)return null;const m=-f*Rr.dot(wf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,s,a,l,c,f,d,h,m,g,v,S,M,E,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,h,m,g,v,S,M,E,y)}set(e,t,s,a,l,c,f,d,h,m,g,v,S,M,E,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=d,_[2]=h,_[6]=m,_[10]=g,_[14]=v,_[3]=S,_[7]=M,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),h=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*g,M=f*m,E=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=S+M*h,t[5]=v-E*h,t[9]=-f*d,t[2]=E-v*h,t[6]=M+S*h,t[10]=c*d}else if(e.order==="YXZ"){const v=d*m,S=d*g,M=h*m,E=h*g;t[0]=v+E*f,t[4]=M*f-S,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-f,t[2]=S*f-M,t[6]=E+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*m,S=d*g,M=h*m,E=h*g;t[0]=v-E*f,t[4]=-c*g,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*m,t[9]=E-v*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*m,S=c*g,M=f*m,E=f*g;t[0]=d*m,t[4]=M*h-S,t[8]=v*h+E,t[1]=d*g,t[5]=E*h+v,t[9]=S*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,S=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=E-v*g,t[8]=M*g+S,t[1]=g,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=c*d,S=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+E,t[5]=c*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=f*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oS,e,lS)}lookAt(e,t,s){const a=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Pr.crossVectors(s,ni),Pr.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Pr.crossVectors(s,ni)),Pr.normalize(),Il.crossVectors(ni,Pr),a[0]=Pr.x,a[4]=Il.x,a[8]=ni.x,a[1]=Pr.y,a[5]=Il.y,a[9]=ni.y,a[2]=Pr.z,a[6]=Il.z,a[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],h=s[12],m=s[1],g=s[5],v=s[9],S=s[13],M=s[2],E=s[6],y=s[10],_=s[14],I=s[3],w=s[7],P=s[11],B=s[15],R=a[0],U=a[4],O=a[8],L=a[12],b=a[1],z=a[5],X=a[9],K=a[13],ne=a[2],fe=a[6],Y=a[10],ge=a[14],W=a[3],ue=a[7],ce=a[11],F=a[15];return l[0]=c*R+f*b+d*ne+h*W,l[4]=c*U+f*z+d*fe+h*ue,l[8]=c*O+f*X+d*Y+h*ce,l[12]=c*L+f*K+d*ge+h*F,l[1]=m*R+g*b+v*ne+S*W,l[5]=m*U+g*z+v*fe+S*ue,l[9]=m*O+g*X+v*Y+S*ce,l[13]=m*L+g*K+v*ge+S*F,l[2]=M*R+E*b+y*ne+_*W,l[6]=M*U+E*z+y*fe+_*ue,l[10]=M*O+E*X+y*Y+_*ce,l[14]=M*L+E*K+y*ge+_*F,l[3]=I*R+w*b+P*ne+B*W,l[7]=I*U+w*z+P*fe+B*ue,l[11]=I*O+w*X+P*Y+B*ce,l[15]=I*L+w*K+P*ge+B*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],M=e[3],E=e[7],y=e[11],_=e[15];return M*(+l*d*g-a*h*g-l*f*v+s*h*v+a*f*S-s*d*S)+E*(+t*d*S-t*h*v+l*c*v-a*c*S+a*h*m-l*d*m)+y*(+t*h*g-t*f*S-l*c*g+s*c*S+l*f*m-s*h*m)+_*(-a*f*m-t*d*g+t*f*v+a*c*g-s*c*v+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],M=e[12],E=e[13],y=e[14],_=e[15],I=g*y*h-E*v*h+E*d*S-f*y*S-g*d*_+f*v*_,w=M*v*h-m*y*h-M*d*S+c*y*S+m*d*_-c*v*_,P=m*E*h-M*g*h+M*f*S-c*E*S-m*f*_+c*g*_,B=M*g*d-m*E*d-M*f*v+c*E*v+m*f*y-c*g*y,R=t*I+s*w+a*P+l*B;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=I*U,e[1]=(E*v*l-g*y*l-E*a*S+s*y*S+g*a*_-s*v*_)*U,e[2]=(f*y*l-E*d*l+E*a*h-s*y*h-f*a*_+s*d*_)*U,e[3]=(g*d*l-f*v*l-g*a*h+s*v*h+f*a*S-s*d*S)*U,e[4]=w*U,e[5]=(m*y*l-M*v*l+M*a*S-t*y*S-m*a*_+t*v*_)*U,e[6]=(M*d*l-c*y*l-M*a*h+t*y*h+c*a*_-t*d*_)*U,e[7]=(c*v*l-m*d*l+m*a*h-t*v*h-c*a*S+t*d*S)*U,e[8]=P*U,e[9]=(M*g*l-m*E*l-M*s*S+t*E*S+m*s*_-t*g*_)*U,e[10]=(c*E*l-M*f*l+M*s*h-t*E*h-c*s*_+t*f*_)*U,e[11]=(m*f*l-c*g*l-m*s*h+t*g*h+c*s*S-t*f*S)*U,e[12]=B*U,e[13]=(m*E*a-M*g*a+M*s*v-t*E*v-m*s*y+t*g*y)*U,e[14]=(M*f*a-c*E*a-M*s*d+t*E*d+c*s*y-t*f*y)*U,e[15]=(c*g*a-m*f*a+m*s*d-t*g*d-c*s*v+t*f*v)*U,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+s,h*f-a*d,h*d+a*f,0,h*f+a*d,m*f+s,m*d-a*c,0,h*d-a*f,m*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,m=c+c,g=f+f,v=l*h,S=l*m,M=l*g,E=c*m,y=c*g,_=f*g,I=d*h,w=d*m,P=d*g,B=s.x,R=s.y,U=s.z;return a[0]=(1-(E+_))*B,a[1]=(S+P)*B,a[2]=(M-w)*B,a[3]=0,a[4]=(S-P)*R,a[5]=(1-(v+_))*R,a[6]=(y+I)*R,a[7]=0,a[8]=(M+w)*U,a[9]=(y-I)*U,a[10]=(1-(v+E))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=js.set(a[0],a[1],a[2]).length();const c=js.set(a[4],a[5],a[6]).length(),f=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Mi.copy(this);const h=1/l,m=1/c,g=1/f;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=m,Mi.elements[5]*=m,Mi.elements[6]*=m,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,t.setFromRotationMatrix(Mi),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=sr){const d=this.elements,h=2*l/(t-e),m=2*l/(s-a),g=(t+e)/(t-e),v=(s+a)/(s-a);let S,M;if(f===sr)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===uc)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=sr){const d=this.elements,h=1/(t-e),m=1/(s-a),g=1/(c-l),v=(t+e)*h,S=(s+a)*m;let M,E;if(f===sr)M=(c+l)*g,E=-2*g;else if(f===uc)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new $,Mi=new Ht,oS=new $(0,0,0),lS=new $(1,1,1),Pr=new $,Il=new $,ni=new $,qm=new Ht,Ym=new yo;class Ci{constructor(e=0,t=0,s=0,a=Ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],h=a[5],m=a[9],g=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(dn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-dn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ci.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const $m=new $,Xs=new yo,Zi=new Ht,Dl=new $,to=new $,uS=new $,fS=new yo,Km=new $(1,0,0),Zm=new $(0,1,0),Jm=new $(0,0,1),Qm={type:"added"},dS={type:"removed"},qs={type:"childadded",child:null},Tf={type:"childremoved",child:null};class wn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new $,t=new Ci,s=new yo,a=new $(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Et}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Dl.copy(e):Dl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(to,Dl,this.up):Zi.lookAt(Dl,to,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Xs.setFromRotationMatrix(Zi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dS),Tf.child=e,this.dispatchEvent(Tf),Tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++){const f=a[l];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}wn.DEFAULT_UP=new $(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new $,Ji=new $,Af=new $,Qi=new $,Ys=new $,$s=new $,eg=new $,Cf=new $,bf=new $,Rf=new $;class Oi{constructor(e=new $,t=new $,s=new $){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Ei.subVectors(e,t),a.cross(Ei);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){Ei.subVectors(a,t),Ji.subVectors(s,t),Af.subVectors(e,t);const c=Ei.dot(Ei),f=Ei.dot(Ji),d=Ei.dot(Af),h=Ji.dot(Ji),m=Ji.dot(Af),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*d-f*m)*v,M=(c*m-f*d)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,Qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Qi.x),d.addScaledVector(c,Qi.y),d.addScaledVector(f,Qi.z),d)}static isFrontFacing(e,t,s,a){return Ei.subVectors(s,t),Ji.subVectors(e,t),Ei.cross(Ji).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ei.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Ys.subVectors(a,s),$s.subVectors(l,s),Cf.subVectors(e,s);const d=Ys.dot(Cf),h=$s.dot(Cf);if(d<=0&&h<=0)return t.copy(s);bf.subVectors(e,a);const m=Ys.dot(bf),g=$s.dot(bf);if(m>=0&&g<=m)return t.copy(a);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(Ys,c);Rf.subVectors(e,l);const S=Ys.dot(Rf),M=$s.dot(Rf);if(M>=0&&S<=M)return t.copy(l);const E=S*h-d*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(s).addScaledVector($s,f);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return eg.subVectors(l,a),f=(g-m)/(g-m+(S-M)),t.copy(a).addScaledVector(eg,f);const _=1/(y+E+v);return c=E*_,f=v*_,t.copy(s).addScaledVector(Ys,c).addScaledVector($s,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Pf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Rt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=zt.workingColorSpace){return this.r=e,this.g=t,this.b=s,zt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=zt.workingColorSpace){if(e=hd(e,1),t=dn(t,0,1),s=dn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Pf(c,l,e+1/3),this.g=Pf(c,l,e),this.b=Pf(c,l,e-1/3)}return zt.toWorkingColorSpace(this,a),this}setStyle(e,t=Di){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Di){const s=E0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=vf(e.r),this.g=vf(e.g),this.b=vf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Di){return zt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(dn(Pn.r*255,0,255))*65536+Math.round(dn(Pn.g*255,0,255))*256+Math.round(dn(Pn.b*255,0,255))}getHexString(e=Di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Pn.copy(this),t);const s=Pn.r,a=Pn.g,l=Pn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const g=c-f;switch(h=m<=.5?g/(c+f):g/(2-c-f),c){case s:d=(a-l)/g+(a<l?6:0);break;case a:d=(l-s)/g+2;break;case l:d=(s-a)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Di){zt.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,s=Pn.g,a=Pn.b;return e!==Di?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Ul);const s=co(Lr.h,Ul.h,t),a=co(Lr.s,Ul.s,t),l=co(Lr.l,Ul.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Rt;Rt.NAMES=E0;let hS=0;class vs extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=aa,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Zf,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(s.blending=this.blending),this.side!==ar&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kf&&(s.blendSrc=this.blendSrc),this.blendDst!==Zf&&(s.blendDst=this.blendDst),this.blendEquation!==ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==sc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vd extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new $,Ol=new $e;class pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ai(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ft(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class w0 extends pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class T0 extends pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Zt extends pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let pS=0;const hi=new Ht,Lf=new wn,Ks=new $,ii=new gs,no=new gs,xn=new $;class kn extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y0(e)?T0:w0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Et().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,s){return hi.makeTranslation(e,t,s),this.applyMatrix4(hi),this}scale(e,t,s){return hi.makeScale(e,t,s),this.applyMatrix4(hi),this}lookAt(e){return Lf.lookAt(e),Lf.updateMatrix(),this.applyMatrix4(Lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(ii.min,no.min),ii.expandByPoint(xn),xn.addVectors(ii.max,no.max),ii.expandByPoint(xn)):(ii.expandByPoint(no.min),ii.expandByPoint(no.max))}ii.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)xn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(xn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)xn.fromBufferAttribute(f,h),d&&(Ks.fromBufferAttribute(e,h),xn.add(Ks)),a=Math.max(a,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let O=0;O<s.count;O++)f[O]=new $,d[O]=new $;const h=new $,m=new $,g=new $,v=new $e,S=new $e,M=new $e,E=new $,y=new $;function _(O,L,b){h.fromBufferAttribute(s,O),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,b),v.fromBufferAttribute(l,O),S.fromBufferAttribute(l,L),M.fromBufferAttribute(l,b),m.sub(h),g.sub(h),S.sub(v),M.sub(v);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(z),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(z),f[O].add(E),f[L].add(E),f[b].add(E),d[O].add(y),d[L].add(y),d[b].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let O=0,L=I.length;O<L;++O){const b=I[O],z=b.start,X=b.count;for(let K=z,ne=z+X;K<ne;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const w=new $,P=new $,B=new $,R=new $;function U(O){B.fromBufferAttribute(a,O),R.copy(B);const L=f[O];w.copy(L),w.sub(B.multiplyScalar(B.dot(L))).normalize(),P.crossVectors(R,L);const z=P.dot(d[O])<0?-1:1;c.setXYZW(O,w.x,w.y,w.z,z)}for(let O=0,L=I.length;O<L;++O){const b=I[O],z=b.start,X=b.count;for(let K=z,ne=z+X;K<ne;K+=3)U(e.getX(K+0)),U(e.getX(K+1)),U(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new $,l=new $,c=new $,f=new $,d=new $,h=new $,m=new $,g=new $;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),E=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),f.fromBufferAttribute(s,M),d.fromBufferAttribute(s,E),h.fromBufferAttribute(s,y),f.add(m),d.add(m),h.add(m),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(d.length*m);let S=0,M=0;for(let E=0,y=d.length;E<y;E++){f.isInterleavedBufferAttribute?S=d[E]*f.data.stride+f.offset:S=d[E]*m;for(let _=0;_<m;_++)v[M++]=h[S++]}return new pi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,s);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const h=s[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=new Ht,ns=new md,Fl=new va,ng=new $,Zs=new $,Js=new $,Qs=new $,Nf=new $,zl=new $,kl=new $e,Bl=new $e,Hl=new $e,ig=new $,rg=new $,sg=new $,Vl=new $,Gl=new $;class si extends wn{constructor(e=new kn,t=new vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){zl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(Nf.fromBufferAttribute(g,e),c?zl.addScaledVector(Nf,m):zl.addScaledVector(Nf.sub(t),m))}t.add(zl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Fl.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Fl,ng)===null||ns.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(l).invert(),ns.copy(e.ray).applyMatrix4(tg),!(s.boundingBox!==null&&ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],_=c[y.materialIndex],I=Math.max(y.start,S.start),w=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=I,B=w;P<B;P+=3){const R=f.getX(P),U=f.getX(P+1),O=f.getX(P+2);a=Wl(this,_,e,s,h,m,g,R,U,O),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=M,_=E;y<_;y+=3){const I=f.getX(y),w=f.getX(y+1),P=f.getX(y+2);a=Wl(this,c,e,s,h,m,g,I,w,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],_=c[y.materialIndex],I=Math.max(y.start,S.start),w=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=I,B=w;P<B;P+=3){const R=P,U=P+1,O=P+2;a=Wl(this,_,e,s,h,m,g,R,U,O),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=M,_=E;y<_;y+=3){const I=y,w=y+1,P=y+2;a=Wl(this,c,e,s,h,m,g,I,w,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function mS(i,e,t,s,a,l,c,f){let d;if(e.side===Yn?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===ar,f),d===null)return null;Gl.copy(f),Gl.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Gl);return h<t.near||h>t.far?null:{distance:h,point:Gl.clone(),object:i}}function Wl(i,e,t,s,a,l,c,f,d,h){i.getVertexPosition(f,Zs),i.getVertexPosition(d,Js),i.getVertexPosition(h,Qs);const m=mS(i,e,t,s,Zs,Js,Qs,Vl);if(m){a&&(kl.fromBufferAttribute(a,f),Bl.fromBufferAttribute(a,d),Hl.fromBufferAttribute(a,h),m.uv=Oi.getInterpolation(Vl,Zs,Js,Qs,kl,Bl,Hl,new $e)),l&&(kl.fromBufferAttribute(l,f),Bl.fromBufferAttribute(l,d),Hl.fromBufferAttribute(l,h),m.uv1=Oi.getInterpolation(Vl,Zs,Js,Qs,kl,Bl,Hl,new $e)),c&&(ig.fromBufferAttribute(c,f),rg.fromBufferAttribute(c,d),sg.fromBufferAttribute(c,h),m.normal=Oi.getInterpolation(Vl,Zs,Js,Qs,ig,rg,sg,new $),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new $,materialIndex:0};Oi.getNormal(Zs,Js,Qs,g.normal),m.face=g}return m}class So extends kn{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,a,c,2),M("x","z","y",1,-1,e,s,-t,a,c,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(m,3)),this.setAttribute("uv",new Zt(g,2));function M(E,y,_,I,w,P,B,R,U,O,L){const b=P/U,z=B/O,X=P/2,K=B/2,ne=R/2,fe=U+1,Y=O+1;let ge=0,W=0;const ue=new $;for(let ce=0;ce<Y;ce++){const F=ce*z-K;for(let J=0;J<fe;J++){const Ve=J*b-X;ue[E]=Ve*I,ue[y]=F*w,ue[_]=ne,h.push(ue.x,ue.y,ue.z),ue[E]=0,ue[y]=0,ue[_]=R>0?1:-1,m.push(ue.x,ue.y,ue.z),g.push(J/U),g.push(1-ce/O),ge+=1}}for(let ce=0;ce<O;ce++)for(let F=0;F<U;F++){const J=v+F+fe*ce,Ve=v+F+fe*(ce+1),te=v+(F+1)+fe*(ce+1),ie=v+(F+1)+fe*ce;d.push(J,Ve,ie),d.push(Ve,te,ie),W+=6}f.addGroup(S,W,L),S+=W,v+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const s=ma(i[t]);for(const a in s)e[a]=s[a]}return e}function gS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function A0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const vS={clone:ma,merge:zn};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class C0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new $,ag=new $e,og=new $e;class wi extends C0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,ag,og),t.subVectors(og,ag)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lo*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/h,a*=c.width/d,s*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class yS extends wn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new wi(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new wi(ea,ta,e,t);l.layers=this.layers,this.add(l);const c=new wi(ea,ta,e,t);c.layers=this.layers,this.add(c);const f=new wi(ea,ta,e,t);f.layers=this.layers,this.add(f);const d=new wi(ea,ta,e,t);d.layers=this.layers,this.add(d);const h=new wi(ea,ta,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===sr)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===uc)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,h),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class b0 extends Ln{constructor(e,t,s,a,l,c,f,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,s,a,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new b0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new So(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:ma(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:Ur});l.uniforms.tEquirect.value=t;const c=new si(a,l),f=t.minFilter;return t.minFilter===hs&&(t.minFilter=Ti),new yS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}const If=new $,MS=new $,ES=new Et;class as{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=If.subVectors(s,t).cross(MS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(If),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||ES.getNormalMatrix(e),a=this.coplanarPoint(If).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new va,jl=new $;class _d{constructor(e=new as,t=new as,s=new as,a=new as,l=new as,c=new as){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=sr){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],h=a[4],m=a[5],g=a[6],v=a[7],S=a[8],M=a[9],E=a[10],y=a[11],_=a[12],I=a[13],w=a[14],P=a[15];if(s[0].setComponents(d-l,v-h,y-S,P-_).normalize(),s[1].setComponents(d+l,v+h,y+S,P+_).normalize(),s[2].setComponents(d+c,v+m,y+M,P+I).normalize(),s[3].setComponents(d-c,v-m,y-M,P-I).normalize(),s[4].setComponents(d-f,v-g,y-E,P-w).normalize(),t===sr)s[5].setComponents(d+f,v+g,y+E,P+w).normalize();else if(t===uc)s[5].setComponents(f,g,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(jl.x=a.normal.x>0?e.max.x:e.min.x,jl.y=a.normal.y>0?e.max.y:e.min.y,jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R0(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function wS(i){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,d,h){const m=d.array,g=d._updateRange,v=d.updateRanges;if(i.bindBuffer(h,f),g.count===-1&&v.length===0&&i.bufferSubData(h,0,m),v.length!==0){for(let S=0,M=v.length;S<M;S++){const E=v[S];i.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(h,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count),g.count=-1),d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,d),h.version=f.version}}return{get:a,remove:l,update:c}}class yc extends kn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),h=f+1,m=d+1,g=e/f,v=t/d,S=[],M=[],E=[],y=[];for(let _=0;_<m;_++){const I=_*v-c;for(let w=0;w<h;w++){const P=w*g-l;M.push(P,-I,0),E.push(0,0,1),y.push(w/f),y.push(1-_/d)}}for(let _=0;_<d;_++)for(let I=0;I<f;I++){const w=I+h*_,P=I+h*(_+1),B=I+1+h*(_+1),R=I+1+h*_;S.push(w,P,R),S.push(P,B,R)}this.setIndex(S),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.width,e.height,e.widthSegments,e.heightSegments)}}var TS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,DS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,US=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,YS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$S=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,N1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:TS,alphahash_pars_fragment:AS,alphamap_fragment:CS,alphamap_pars_fragment:bS,alphatest_fragment:RS,alphatest_pars_fragment:PS,aomap_fragment:LS,aomap_pars_fragment:NS,batching_pars_vertex:IS,batching_vertex:DS,begin_vertex:US,beginnormal_vertex:OS,bsdfs:FS,iridescence_fragment:zS,bumpmap_pars_fragment:kS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:HS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:GS,color_fragment:WS,color_pars_fragment:jS,color_pars_vertex:XS,color_vertex:qS,common:YS,cube_uv_reflection_fragment:$S,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:sM,envmap_pars_vertex:aM,envmap_physical_pars_fragment:vM,envmap_vertex:oM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:hM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:xM,lights_phong_fragment:yM,lights_phong_pars_fragment:SM,lights_physical_fragment:MM,lights_physical_pars_fragment:EM,lights_fragment_begin:wM,lights_fragment_maps:TM,lights_fragment_end:AM,logdepthbuf_fragment:CM,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:PM,map_fragment:LM,map_pars_fragment:NM,map_particle_fragment:IM,map_particle_pars_fragment:DM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:OM,morphinstance_vertex:FM,morphcolor_vertex:zM,morphnormal_vertex:kM,morphtarget_pars_vertex:BM,morphtarget_vertex:HM,normal_fragment_begin:VM,normal_fragment_maps:GM,normal_pars_fragment:WM,normal_pars_vertex:jM,normal_vertex:XM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:YM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:KM,iridescence_pars_fragment:ZM,opaque_fragment:JM,packing:QM,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:a1,shadowmap_pars_vertex:o1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:h1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:v1,transmission_fragment:_1,transmission_pars_fragment:x1,uv_pars_fragment:y1,uv_pars_vertex:S1,uv_vertex:M1,worldpos_vertex:E1,background_vert:w1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:C1,cube_vert:b1,cube_frag:R1,depth_vert:P1,depth_frag:L1,distanceRGBA_vert:N1,distanceRGBA_frag:I1,equirect_vert:D1,equirect_frag:U1,linedashed_vert:O1,linedashed_frag:F1,meshbasic_vert:z1,meshbasic_frag:k1,meshlambert_vert:B1,meshlambert_frag:H1,meshmatcap_vert:V1,meshmatcap_frag:G1,meshnormal_vert:W1,meshnormal_frag:j1,meshphong_vert:X1,meshphong_frag:q1,meshphysical_vert:Y1,meshphysical_frag:$1,meshtoon_vert:K1,meshtoon_frag:Z1,points_vert:J1,points_frag:Q1,shadow_vert:eE,shadow_frag:tE,sprite_vert:nE,sprite_frag:iE},Ke={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Ui={basic:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:zn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:zn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:zn([Ke.points,Ke.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:zn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:zn([Ke.common,Ke.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:zn([Ke.sprite,Ke.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:zn([Ke.common,Ke.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:zn([Ke.lights,Ke.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ui.physical={uniforms:zn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Xl={r:0,b:0,g:0},rs=new Ci,rE=new Ht;function sE(i,e,t,s,a,l,c){const f=new Rt(0);let d=l===!0?0:1,h,m,g=null,v=0,S=null;function M(I){let w=I.isScene===!0?I.background:null;return w&&w.isTexture&&(w=(I.backgroundBlurriness>0?t:e).get(w)),w}function E(I){let w=!1;const P=M(I);P===null?_(f,d):P&&P.isColor&&(_(P,1),w=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(I,w){const P=M(w);P&&(P.isCubeTexture||P.mapping===vc)?(m===void 0&&(m=new si(new So(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:ma(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),rs.copy(w.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(rE.makeRotationFromEuler(rs)),m.material.toneMapped=zt.getTransfer(P.colorSpace)!==jt,(g!==P||v!==P.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=P,v=P.version,S=i.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new si(new yc(2,2),new or({name:"BackgroundMaterial",uniforms:ma(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=zt.getTransfer(P.colorSpace)!==jt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,g=P,v=P.version,S=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function _(I,w){I.getRGB(Xl,A0(i)),s.buffers.color.setClear(Xl.r,Xl.g,Xl.b,w,c)}return{getClearColor:function(){return f},setClearColor:function(I,w=1){f.set(I),d=w,_(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,_(f,d)},render:E,addToRenderList:y}}function aE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function f(b,z,X,K,ne){let fe=!1;const Y=g(K,X,z);l!==Y&&(l=Y,h(l.object)),fe=S(b,K,X,ne),fe&&M(b,K,X,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,P(b,z,X,K),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function d(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function m(b){return i.deleteVertexArray(b)}function g(b,z,X){const K=X.wireframe===!0;let ne=s[b.id];ne===void 0&&(ne={},s[b.id]=ne);let fe=ne[z.id];fe===void 0&&(fe={},ne[z.id]=fe);let Y=fe[K];return Y===void 0&&(Y=v(d()),fe[K]=Y),Y}function v(b){const z=[],X=[],K=[];for(let ne=0;ne<t;ne++)z[ne]=0,X[ne]=0,K[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:K,object:b,attributes:{},index:null}}function S(b,z,X,K){const ne=l.attributes,fe=z.attributes;let Y=0;const ge=X.getAttributes();for(const W in ge)if(ge[W].location>=0){const ce=ne[W];let F=fe[W];if(F===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(F=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(F=b.instanceColor)),ce===void 0||ce.attribute!==F||F&&ce.data!==F.data)return!0;Y++}return l.attributesNum!==Y||l.index!==K}function M(b,z,X,K){const ne={},fe=z.attributes;let Y=0;const ge=X.getAttributes();for(const W in ge)if(ge[W].location>=0){let ce=fe[W];ce===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const F={};F.attribute=ce,ce&&ce.data&&(F.data=ce.data),ne[W]=F,Y++}l.attributes=ne,l.attributesNum=Y,l.index=K}function E(){const b=l.newAttributes;for(let z=0,X=b.length;z<X;z++)b[z]=0}function y(b){_(b,0)}function _(b,z){const X=l.newAttributes,K=l.enabledAttributes,ne=l.attributeDivisors;X[b]=1,K[b]===0&&(i.enableVertexAttribArray(b),K[b]=1),ne[b]!==z&&(i.vertexAttribDivisor(b,z),ne[b]=z)}function I(){const b=l.newAttributes,z=l.enabledAttributes;for(let X=0,K=z.length;X<K;X++)z[X]!==b[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function w(b,z,X,K,ne,fe,Y){Y===!0?i.vertexAttribIPointer(b,z,X,ne,fe):i.vertexAttribPointer(b,z,X,K,ne,fe)}function P(b,z,X,K){E();const ne=K.attributes,fe=X.getAttributes(),Y=z.defaultAttributeValues;for(const ge in fe){const W=fe[ge];if(W.location>=0){let ue=ne[ge];if(ue===void 0&&(ge==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),ge==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const ce=ue.normalized,F=ue.itemSize,J=e.get(ue);if(J===void 0)continue;const Ve=J.buffer,te=J.type,ie=J.bytesPerElement,le=te===i.INT||te===i.UNSIGNED_INT||ue.gpuType===d0;if(ue.isInterleavedBufferAttribute){const xe=ue.data,Re=xe.stride,Fe=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Be=0;Be<W.locationSize;Be++)_(W.location+Be,xe.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Be=0;Be<W.locationSize;Be++)y(W.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Be=0;Be<W.locationSize;Be++)w(W.location+Be,F/W.locationSize,te,ce,Re*ie,(Fe+F/W.locationSize*Be)*ie,le)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<W.locationSize;xe++)_(W.location+xe,ue.meshPerAttribute);b.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<W.locationSize;xe++)y(W.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let xe=0;xe<W.locationSize;xe++)w(W.location+xe,F/W.locationSize,te,ce,F*ie,F/W.locationSize*xe*ie,le)}}else if(Y!==void 0){const ce=Y[ge];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(W.location,ce);break;case 3:i.vertexAttrib3fv(W.location,ce);break;case 4:i.vertexAttrib4fv(W.location,ce);break;default:i.vertexAttrib1fv(W.location,ce)}}}}I()}function B(){O();for(const b in s){const z=s[b];for(const X in z){const K=z[X];for(const ne in K)m(K[ne].object),delete K[ne];delete z[X]}delete s[b]}}function R(b){if(s[b.id]===void 0)return;const z=s[b.id];for(const X in z){const K=z[X];for(const ne in K)m(K[ne].object),delete K[ne];delete z[X]}delete s[b.id]}function U(b){for(const z in s){const X=s[z];if(X[b.id]===void 0)continue;const K=X[b.id];for(const ne in K)m(K[ne].object),delete K[ne];delete X[b.id]}}function O(){L(),c=!0,l!==a&&(l=a,h(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:O,resetDefaultState:L,dispose:B,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:y,disableUnusedAttributes:I}}function oE(i,e,t){let s;function a(h){s=h}function l(h,m){i.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,g){g!==0&&(i.drawArraysInstanced(s,h,m,g),t.update(m,s,g))}function f(h,m,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<g;S++)this.render(h[S],m[S]);else{v.multiDrawArraysWEBGL(s,h,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=m[M];t.update(S,s,1)}}function d(h,m,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)c(h[M],m[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E];for(let E=0;E<v.length;E++)t.update(M,s,v[E])}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function lE(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(R){return!(R!==Fi&&s.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(R){const U=R===_c&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Fr&&s.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rr&&!U)}function d(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:_,maxVaryings:I,maxFragmentUniforms:w,vertexTextures:P,maxSamples:B}}function cE(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new as,f=new Et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||a;return a=v,s=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,_=i.get(g);if(!a||M===null||M.length===0||l&&!y)l?m(null):h();else{const I=l?0:s,w=I*4;let P=_.clippingState||null;d.value=P,P=m(M,v,w,S);for(let B=0;B!==w;++B)P[B]=t[B];_.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,v,S,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=d.value,M!==!0||y===null){const _=S+E*4,I=v.matrixWorldInverse;f.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let w=0,P=S;w!==E;++w,P+=4)c.copy(g[w]).applyMatrix4(I,f),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function uE(i){let e=new WeakMap;function t(c,f){return f===Jf?c.mapping=ua:f===Qf&&(c.mapping=fa),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Jf||f===Qf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new SS(d.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class P0 extends C0{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=4,lg=[.125,.215,.35,.446,.526,.582],cs=20,Df=new P0,cg=new Rt;let Uf=null,Of=0,Ff=0,zf=!1;const os=(1+Math.sqrt(5))/2,na=1/os,ug=[new $(-os,na,0),new $(os,na,0),new $(-na,0,os),new $(na,0,os),new $(0,os,-na),new $(0,os,na),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Uf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Of,Ff),this._renderer.xr.enabled=zf,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:_c,format:Fi,colorSpace:zr,depthBuffer:!1},a=dg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fE(l)),this._blurMaterial=dE(l,e,t)}return a}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Df)}_sceneToCubeUV(e,t,s,a){const f=new wi(90,1,t,s),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(cg),m.toneMapping=Or,m.autoClear=!1;const S=new vd({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new si(new So,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(cg),E=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(f.up.set(0,d[_],0),f.lookAt(h[_],0,0)):I===1?(f.up.set(0,0,d[_]),f.lookAt(0,h[_],0)):(f.up.set(0,d[_],0),f.lookAt(0,0,h[_]));const w=this._cubeSize;ql(a,I*w,_>2?w:0,w,w),m.setRenderTarget(a),E&&m.render(M,f),m.render(e,f)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ua||e.mapping===fa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new si(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;ql(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Df)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ug[(a-l-1)%ug.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new si(this._lodPlanes[a],h),v=h.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*cs-1),E=l/M,y=isFinite(l)?1+Math.floor(m*E):cs;y>cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${cs}`);const _=[];let I=0;for(let U=0;U<cs;++U){const O=U/E,L=Math.exp(-O*O/2);_.push(L),U===0?I+=L:U<y&&(I+=2*L)}for(let U=0;U<_.length;U++)_[U]=_[U]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-s;const P=this._sizeLods[a],B=3*P*(a>w-ra?a-w+ra:0),R=4*(this._cubeSize-P);ql(t,B,R,3*P,2*P),d.setRenderTarget(t),d.render(g,Df)}}function fE(i){const e=[],t=[],s=[];let a=i;const l=i-ra+1+lg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>i-ra?d=lg[c-i+ra-1]:c===0&&(d=0),s.push(d);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,E=3,y=2,_=1,I=new Float32Array(E*M*S),w=new Float32Array(y*M*S),P=new Float32Array(_*M*S);for(let R=0;R<S;R++){const U=R%3*2/3-1,O=R>2?0:-1,L=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];I.set(L,E*M*R),w.set(v,y*M*R);const b=[R,R,R,R,R,R];P.set(b,_*M*R)}const B=new kn;B.setAttribute("position",new pi(I,E)),B.setAttribute("uv",new pi(w,y)),B.setAttribute("faceIndex",new pi(P,_)),e.push(B),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function dg(i,e,t){const s=new ps(i,e,t);return s.texture.mapping=vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ql(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function dE(i,e,t){const s=new Float32Array(cs),a=new $(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function hg(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function pg(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hE(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,h=d===Jf||d===Qf,m=d===ua||d===fa;if(h||m){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new fg(i)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return h&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new fg(i)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function pE(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&pd("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function mE(i,e,t,s){const a={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let y=0,_=E.length;y<_;y++)e.remove(E[y])}v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(g,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const M in v)e.update(v[M],i.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const E=S[M];for(let y=0,_=E.length;y<_;y++)e.update(E[y],i.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const I=S.array;E=S.version;for(let w=0,P=I.length;w<P;w+=3){const B=I[w+0],R=I[w+1],U=I[w+2];v.push(B,R,R,U,U,B)}}else if(M!==void 0){const I=M.array;E=M.version;for(let w=0,P=I.length/3-1;w<P;w+=3){const B=w+0,R=w+1,U=w+2;v.push(B,R,R,U,U,B)}}else return;const y=new(y0(v)?T0:w0)(v,1);y.version=E;const _=l.get(g);_&&e.remove(_),l.set(g,y)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function gE(i,e,t){let s;function a(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,S){i.drawElements(s,S,l,v*c),t.update(S,s,1)}function h(v,S,M){M!==0&&(i.drawElementsInstanced(s,S,l,v*c,M),t.update(S,s,M))}function m(v,S,M){if(M===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<M;y++)this.render(v[y]/c,S[y]);else{E.multiDrawElementsWEBGL(s,S,0,l,v,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];t.update(y,s,1)}}function g(v,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)h(v[_]/c,S[_],E[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,E,0,M);let _=0;for(let I=0;I<M;I++)_+=S[I];for(let I=0;I<E.length;I++)t.update(_,s,E[I])}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function vE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function _E(i,e,t){const s=new WeakMap,a=new yn;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=s.get(f);if(v===void 0||v.count!==g){let L=function(){U.dispose(),s.delete(f),f.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();const S=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let w=0;S===!0&&(w=1),M===!0&&(w=2),E===!0&&(w=3);let P=f.attributes.position.count*w,B=1;P>e.maxTextureSize&&(B=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*B*4*g),U=new M0(R,P,B,g);U.type=rr,U.needsUpdate=!0;const O=w*4;for(let b=0;b<g;b++){const z=y[b],X=_[b],K=I[b],ne=P*B*4*b;for(let fe=0;fe<z.count;fe++){const Y=fe*O;S===!0&&(a.fromBufferAttribute(z,fe),R[ne+Y+0]=a.x,R[ne+Y+1]=a.y,R[ne+Y+2]=a.z,R[ne+Y+3]=0),M===!0&&(a.fromBufferAttribute(X,fe),R[ne+Y+4]=a.x,R[ne+Y+5]=a.y,R[ne+Y+6]=a.z,R[ne+Y+7]=0),E===!0&&(a.fromBufferAttribute(K,fe),R[ne+Y+8]=a.x,R[ne+Y+9]=a.y,R[ne+Y+10]=a.z,R[ne+Y+11]=K.itemSize===4?a.w:1)}}v={count:g,texture:U,size:new $e(P,B)},s.set(f,v),f.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let E=0;E<h.length;E++)S+=h[E];const M=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function xE(i,e,t,s){let a=new WeakMap;function l(d){const h=s.render.frame,m=d.geometry,g=e.get(d,m);if(a.get(g)!==h&&(e.update(g),a.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return g}function c(){a=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}class L0 extends Ln{constructor(e,t,s,a,l,c,f,d,h,m=oa){if(m!==oa&&m!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===oa&&(s=da),s===void 0&&m===pa&&(s=ha),super(null,a,l,c,f,d,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:qn,this.minFilter=d!==void 0?d:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const N0=new Ln,I0=new L0(1,1);I0.compareFunction=x0;const D0=new M0,U0=new sS,O0=new b0,mg=[],gg=[],vg=new Float32Array(16),_g=new Float32Array(9),xg=new Float32Array(4);function _a(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=mg[a];if(l===void 0&&(l=new Float32Array(a),mg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Sc(i,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function yE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function ME(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function EE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function wE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;xg.set(s),i.uniformMatrix2fv(this.addr,!1,xg),pn(t,s)}}function TE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;_g.set(s),i.uniformMatrix3fv(this.addr,!1,_g),pn(t,s)}}function AE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;vg.set(s),i.uniformMatrix4fv(this.addr,!1,vg),pn(t,s)}}function CE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function RE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function PE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function LE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function NE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function IE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function DE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function UE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);const l=this.type===i.SAMPLER_2D_SHADOW?I0:N0;t.setTexture2D(e||l,a)}function OE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||U0,a)}function FE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||O0,a)}function zE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||D0,a)}function kE(i){switch(i){case 5126:return yE;case 35664:return SE;case 35665:return ME;case 35666:return EE;case 35674:return wE;case 35675:return TE;case 35676:return AE;case 5124:case 35670:return CE;case 35667:case 35671:return bE;case 35668:case 35672:return RE;case 35669:case 35673:return PE;case 5125:return LE;case 36294:return NE;case 36295:return IE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return FE;case 36289:case 36303:case 36311:case 36292:return zE}}function BE(i,e){i.uniform1fv(this.addr,e)}function HE(i,e){const t=_a(e,this.size,2);i.uniform2fv(this.addr,t)}function VE(i,e){const t=_a(e,this.size,3);i.uniform3fv(this.addr,t)}function GE(i,e){const t=_a(e,this.size,4);i.uniform4fv(this.addr,t)}function WE(i,e){const t=_a(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jE(i,e){const t=_a(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function XE(i,e){const t=_a(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qE(i,e){i.uniform1iv(this.addr,e)}function YE(i,e){i.uniform2iv(this.addr,e)}function $E(i,e){i.uniform3iv(this.addr,e)}function KE(i,e){i.uniform4iv(this.addr,e)}function ZE(i,e){i.uniform1uiv(this.addr,e)}function JE(i,e){i.uniform2uiv(this.addr,e)}function QE(i,e){i.uniform3uiv(this.addr,e)}function ew(i,e){i.uniform4uiv(this.addr,e)}function tw(i,e,t){const s=this.cache,a=e.length,l=Sc(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||N0,l[c])}function nw(i,e,t){const s=this.cache,a=e.length,l=Sc(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||U0,l[c])}function iw(i,e,t){const s=this.cache,a=e.length,l=Sc(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||O0,l[c])}function rw(i,e,t){const s=this.cache,a=e.length,l=Sc(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||D0,l[c])}function sw(i){switch(i){case 5126:return BE;case 35664:return HE;case 35665:return VE;case 35666:return GE;case 35674:return WE;case 35675:return jE;case 35676:return XE;case 5124:case 35670:return qE;case 35667:case 35671:return YE;case 35668:case 35672:return $E;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return JE;case 36295:return QE;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}class aw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=kE(t.type)}}class ow{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sw(t.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function yg(i,e){i.seq.push(e),i.map[e.id]=e}function cw(i,e,t){const s=i.name,a=s.length;for(kf.lastIndex=0;;){const l=kf.exec(s),c=kf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===a){yg(t,h===void 0?new aw(f,i,e):new ow(f,i,e));break}else{let g=t.map[f];g===void 0&&(g=new lw(f),yg(t,g)),t=g}}}class ic{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);cw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Sg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const uw=37297;let fw=0;function dw(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}function hw(i){const e=zt.getPrimaries(zt.workingColorSpace),t=zt.getPrimaries(i);let s;switch(e===t?s="":e===cc&&t===lc?s="LinearDisplayP3ToLinearSRGB":e===lc&&t===cc&&(s="LinearSRGBToLinearDisplayP3"),i){case zr:case xc:return[s,"LinearTransferOETF"];case Di:case dd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}function Mg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+dw(i.getShaderSource(e),c)}else return a}function pw(i,e){const t=hw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function mw(i,e){let t;switch(e){case cy:t="Linear";break;case uy:t="Reinhard";break;case fy:t="OptimizedCineon";break;case dy:t="ACESFilmic";break;case py:t="AgX";break;case my:t="Neutral";break;case hy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function vw(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function _w(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function ao(i){return i!==""}function Eg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(i){return i.replace(xw,Sw)}const yw=new Map;function Sw(i,e){let t=Mt[e];if(t===void 0){const s=yw.get(e);if(s!==void 0)t=Mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return id(t)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(i){return i.replace(Mw,Ew)}function Ew(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Ag(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ww(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===u0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ux?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function Tw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ua:case fa:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Aw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function Cw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gc:e="ENVMAP_BLENDING_MULTIPLY";break;case oy:e="ENVMAP_BLENDING_MIX";break;case ly:e="ENVMAP_BLENDING_ADD";break}return e}function bw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function Rw(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=ww(t),h=Tw(t),m=Aw(t),g=Cw(t),v=bw(t),S=gw(t),M=vw(l),E=a.createProgram();let y,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ao).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ao).join(`
`),_.length>0&&(_+=`
`)):(y=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),_=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Or?mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,pw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),c=id(c),c=Eg(c,t),c=wg(c,t),f=id(f),f=Eg(f,t),f=wg(f,t),c=Tg(c),f=Tg(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=I+y+c,P=I+_+f,B=Sg(a,a.VERTEX_SHADER,w),R=Sg(a,a.FRAGMENT_SHADER,P);a.attachShader(E,B),a.attachShader(E,R),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function U(z){if(i.debug.checkShaderErrors){const X=a.getProgramInfoLog(E).trim(),K=a.getShaderInfoLog(B).trim(),ne=a.getShaderInfoLog(R).trim();let fe=!0,Y=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(fe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,E,B,R);else{const ge=Mg(a,B,"vertex"),W=Mg(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+X+`
`+ge+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(K===""||ne==="")&&(Y=!1);Y&&(z.diagnostics={runnable:fe,programLog:X,vertexShader:{log:K,prefix:y},fragmentShader:{log:ne,prefix:_}})}a.deleteShader(B),a.deleteShader(R),O=new ic(a,E),L=_w(a,E)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(E,uw)),b},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=B,this.fragmentShader=R,this}let Pw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Nw(e),t.set(e,s)),s}}class Nw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(i,e,t,s,a,l,c){const f=new gd,d=new Lw,h=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return h.add(L),L===0?"uv":`uv${L}`}function y(L,b,z,X,K){const ne=X.fog,fe=K.geometry,Y=L.isMeshStandardMaterial?X.environment:null,ge=(L.isMeshStandardMaterial?t:e).get(L.envMap||Y),W=ge&&ge.mapping===vc?ge.image.height:null,ue=M[L.type];L.precision!==null&&(S=a.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const ce=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,F=ce!==void 0?ce.length:0;let J=0;fe.morphAttributes.position!==void 0&&(J=1),fe.morphAttributes.normal!==void 0&&(J=2),fe.morphAttributes.color!==void 0&&(J=3);let Ve,te,ie,le;if(ue){const ht=Ui[ue];Ve=ht.vertexShader,te=ht.fragmentShader}else Ve=L.vertexShader,te=L.fragmentShader,d.update(L),ie=d.getVertexShaderID(L),le=d.getFragmentShaderID(L);const xe=i.getRenderTarget(),Re=K.isInstancedMesh===!0,Fe=K.isBatchedMesh===!0,Be=!!L.map,V=!!L.matcap,ye=!!ge,Ee=!!L.aoMap,we=!!L.lightMap,Se=!!L.bumpMap,Ae=!!L.normalMap,Le=!!L.displacementMap,Ce=!!L.emissiveMap,qe=!!L.metalnessMap,D=!!L.roughnessMap,A=L.anisotropy>0,ee=L.clearcoat>0,me=L.dispersion>0,pe=L.iridescence>0,Me=L.sheen>0,Xe=L.transmission>0,Ne=A&&!!L.anisotropyMap,Ie=ee&&!!L.clearcoatMap,et=ee&&!!L.clearcoatNormalMap,be=ee&&!!L.clearcoatRoughnessMap,je=pe&&!!L.iridescenceMap,T=pe&&!!L.iridescenceThicknessMap,Ze=Me&&!!L.sheenColorMap,ze=Me&&!!L.sheenRoughnessMap,ft=!!L.specularMap,lt=!!L.specularColorMap,dt=!!L.specularIntensityMap,G=Xe&&!!L.transmissionMap,He=Xe&&!!L.thicknessMap,ve=!!L.gradientMap,_e=!!L.alphaMap,Ue=L.alphaTest>0,rt=!!L.alphaHash,pt=!!L.extensions;let wt=Or;L.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(wt=i.toneMapping);const At={shaderID:ue,shaderType:L.type,shaderName:L.name,vertexShader:Ve,fragmentShader:te,defines:L.defines,customVertexShaderID:ie,customFragmentShaderID:le,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:Fe,batchingColor:Fe&&K._colorsTexture!==null,instancing:Re,instancingColor:Re&&K.instanceColor!==null,instancingMorph:Re&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:zr,alphaToCoverage:!!L.alphaToCoverage,map:Be,matcap:V,envMap:ye,envMapMode:ye&&ge.mapping,envMapCubeUVHeight:W,aoMap:Ee,lightMap:we,bumpMap:Se,normalMap:Ae,displacementMap:v&&Le,emissiveMap:Ce,normalMapObjectSpace:Ae&&L.normalMapType===by,normalMapTangentSpace:Ae&&L.normalMapType===fd,metalnessMap:qe,roughnessMap:D,anisotropy:A,anisotropyMap:Ne,clearcoat:ee,clearcoatMap:Ie,clearcoatNormalMap:et,clearcoatRoughnessMap:be,dispersion:me,iridescence:pe,iridescenceMap:je,iridescenceThicknessMap:T,sheen:Me,sheenColorMap:Ze,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:lt,specularIntensityMap:dt,transmission:Xe,transmissionMap:G,thicknessMap:He,gradientMap:ve,opaque:L.transparent===!1&&L.blending===aa&&L.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ue,alphaHash:rt,combine:L.combine,mapUv:Be&&E(L.map.channel),aoMapUv:Ee&&E(L.aoMap.channel),lightMapUv:we&&E(L.lightMap.channel),bumpMapUv:Se&&E(L.bumpMap.channel),normalMapUv:Ae&&E(L.normalMap.channel),displacementMapUv:Le&&E(L.displacementMap.channel),emissiveMapUv:Ce&&E(L.emissiveMap.channel),metalnessMapUv:qe&&E(L.metalnessMap.channel),roughnessMapUv:D&&E(L.roughnessMap.channel),anisotropyMapUv:Ne&&E(L.anisotropyMap.channel),clearcoatMapUv:Ie&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:et&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:T&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(L.sheenRoughnessMap.channel),specularMapUv:ft&&E(L.specularMap.channel),specularColorMapUv:lt&&E(L.specularColorMap.channel),specularIntensityMapUv:dt&&E(L.specularIntensityMap.channel),transmissionMapUv:G&&E(L.transmissionMap.channel),thicknessMapUv:He&&E(L.thicknessMap.channel),alphaMapUv:_e&&E(L.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Ae||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!fe.attributes.uv&&(Be||_e),fog:!!ne,useFog:L.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:K.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:Be&&L.map.isVideoTexture===!0&&zt.getTransfer(L.map.colorSpace)===jt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===tr,flipSided:L.side===Yn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:pt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pt&&L.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return At.vertexUv1s=h.has(1),At.vertexUv2s=h.has(2),At.vertexUv3s=h.has(3),h.clear(),At}function _(L){const b=[];if(L.shaderID?b.push(L.shaderID):(b.push(L.customVertexShaderID),b.push(L.customFragmentShaderID)),L.defines!==void 0)for(const z in L.defines)b.push(z),b.push(L.defines[z]);return L.isRawShaderMaterial===!1&&(I(b,L),w(b,L),b.push(i.outputColorSpace)),b.push(L.customProgramCacheKey),b.join()}function I(L,b){L.push(b.precision),L.push(b.outputColorSpace),L.push(b.envMapMode),L.push(b.envMapCubeUVHeight),L.push(b.mapUv),L.push(b.alphaMapUv),L.push(b.lightMapUv),L.push(b.aoMapUv),L.push(b.bumpMapUv),L.push(b.normalMapUv),L.push(b.displacementMapUv),L.push(b.emissiveMapUv),L.push(b.metalnessMapUv),L.push(b.roughnessMapUv),L.push(b.anisotropyMapUv),L.push(b.clearcoatMapUv),L.push(b.clearcoatNormalMapUv),L.push(b.clearcoatRoughnessMapUv),L.push(b.iridescenceMapUv),L.push(b.iridescenceThicknessMapUv),L.push(b.sheenColorMapUv),L.push(b.sheenRoughnessMapUv),L.push(b.specularMapUv),L.push(b.specularColorMapUv),L.push(b.specularIntensityMapUv),L.push(b.transmissionMapUv),L.push(b.thicknessMapUv),L.push(b.combine),L.push(b.fogExp2),L.push(b.sizeAttenuation),L.push(b.morphTargetsCount),L.push(b.morphAttributeCount),L.push(b.numDirLights),L.push(b.numPointLights),L.push(b.numSpotLights),L.push(b.numSpotLightMaps),L.push(b.numHemiLights),L.push(b.numRectAreaLights),L.push(b.numDirLightShadows),L.push(b.numPointLightShadows),L.push(b.numSpotLightShadows),L.push(b.numSpotLightShadowsWithMaps),L.push(b.numLightProbes),L.push(b.shadowMapType),L.push(b.toneMapping),L.push(b.numClippingPlanes),L.push(b.numClipIntersection),L.push(b.depthPacking)}function w(L,b){f.disableAll(),b.supportsVertexTextures&&f.enable(0),b.instancing&&f.enable(1),b.instancingColor&&f.enable(2),b.instancingMorph&&f.enable(3),b.matcap&&f.enable(4),b.envMap&&f.enable(5),b.normalMapObjectSpace&&f.enable(6),b.normalMapTangentSpace&&f.enable(7),b.clearcoat&&f.enable(8),b.iridescence&&f.enable(9),b.alphaTest&&f.enable(10),b.vertexColors&&f.enable(11),b.vertexAlphas&&f.enable(12),b.vertexUv1s&&f.enable(13),b.vertexUv2s&&f.enable(14),b.vertexUv3s&&f.enable(15),b.vertexTangents&&f.enable(16),b.anisotropy&&f.enable(17),b.alphaHash&&f.enable(18),b.batching&&f.enable(19),b.dispersion&&f.enable(20),b.batchingColor&&f.enable(21),L.push(f.mask),f.disableAll(),b.fog&&f.enable(0),b.useFog&&f.enable(1),b.flatShading&&f.enable(2),b.logarithmicDepthBuffer&&f.enable(3),b.skinning&&f.enable(4),b.morphTargets&&f.enable(5),b.morphNormals&&f.enable(6),b.morphColors&&f.enable(7),b.premultipliedAlpha&&f.enable(8),b.shadowMapEnabled&&f.enable(9),b.doubleSided&&f.enable(10),b.flipSided&&f.enable(11),b.useDepthPacking&&f.enable(12),b.dithering&&f.enable(13),b.transmission&&f.enable(14),b.sheen&&f.enable(15),b.opaque&&f.enable(16),b.pointsUvs&&f.enable(17),b.decodeVideoTexture&&f.enable(18),b.alphaToCoverage&&f.enable(19),L.push(f.mask)}function P(L){const b=M[L.type];let z;if(b){const X=Ui[b];z=vS.clone(X.uniforms)}else z=L.uniforms;return z}function B(L,b){let z;for(let X=0,K=m.length;X<K;X++){const ne=m[X];if(ne.cacheKey===b){z=ne,++z.usedTimes;break}}return z===void 0&&(z=new Rw(i,b,L,l),m.push(z)),z}function R(L){if(--L.usedTimes===0){const b=m.indexOf(L);m[b]=m[m.length-1],m.pop(),L.destroy()}}function U(L){d.remove(L)}function O(){d.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:B,releaseProgram:R,releaseShaderCache:U,programs:m,dispose:O}}function Dw(){let i=new WeakMap;function e(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function t(l){i.delete(l)}function s(l,c,f){i.get(l)[c]=f}function a(){i=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function Uw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(g,v,S,M,E,y){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},i[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=S,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=y),e++,_}function f(g,v,S,M,E,y){const _=c(g,v,S,M,E,y);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(g,v,S,M,E,y){const _=c(g,v,S,M,E,y);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(g,v){t.length>1&&t.sort(g||Uw),s.length>1&&s.sort(v||Cg),a.length>1&&a.sort(v||Cg)}function m(){for(let g=e,v=i.length;g<v;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:m,sort:h}}function Ow(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new bg,i.set(s,[c])):a>=l.length?(c=new bg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Rt};break;case"SpotLight":t={position:new $,direction:new $,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new $,halfWidth:new $,halfHeight:new $};break}return i[e.id]=t,t}}}function zw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kw=0;function Bw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hw(i){const e=new Fw,t=zw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const a=new $,l=new Ht,c=new Ht;function f(h){let m=0,g=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let S=0,M=0,E=0,y=0,_=0,I=0,w=0,P=0,B=0,R=0,U=0;h.sort(Bw);for(let L=0,b=h.length;L<b;L++){const z=h[L],X=z.color,K=z.intensity,ne=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=X.r*K,g+=X.g*K,v+=X.b*K;else if(z.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(z.sh.coefficients[Y],K);U++}else if(z.isDirectionalLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ge=z.shadow,W=t.get(z);W.shadowBias=ge.bias,W.shadowNormalBias=ge.normalBias,W.shadowRadius=ge.radius,W.shadowMapSize=ge.mapSize,s.directionalShadow[S]=W,s.directionalShadowMap[S]=fe,s.directionalShadowMatrix[S]=z.shadow.matrix,I++}s.directional[S]=Y,S++}else if(z.isSpotLight){const Y=e.get(z);Y.position.setFromMatrixPosition(z.matrixWorld),Y.color.copy(X).multiplyScalar(K),Y.distance=ne,Y.coneCos=Math.cos(z.angle),Y.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),Y.decay=z.decay,s.spot[E]=Y;const ge=z.shadow;if(z.map&&(s.spotLightMap[B]=z.map,B++,ge.updateMatrices(z),z.castShadow&&R++),s.spotLightMatrix[E]=ge.matrix,z.castShadow){const W=t.get(z);W.shadowBias=ge.bias,W.shadowNormalBias=ge.normalBias,W.shadowRadius=ge.radius,W.shadowMapSize=ge.mapSize,s.spotShadow[E]=W,s.spotShadowMap[E]=fe,P++}E++}else if(z.isRectAreaLight){const Y=e.get(z);Y.color.copy(X).multiplyScalar(K),Y.halfWidth.set(z.width*.5,0,0),Y.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=Y,y++}else if(z.isPointLight){const Y=e.get(z);if(Y.color.copy(z.color).multiplyScalar(z.intensity),Y.distance=z.distance,Y.decay=z.decay,z.castShadow){const ge=z.shadow,W=t.get(z);W.shadowBias=ge.bias,W.shadowNormalBias=ge.normalBias,W.shadowRadius=ge.radius,W.shadowMapSize=ge.mapSize,W.shadowCameraNear=ge.camera.near,W.shadowCameraFar=ge.camera.far,s.pointShadow[M]=W,s.pointShadowMap[M]=fe,s.pointShadowMatrix[M]=z.shadow.matrix,w++}s.point[M]=Y,M++}else if(z.isHemisphereLight){const Y=e.get(z);Y.skyColor.copy(z.color).multiplyScalar(K),Y.groundColor.copy(z.groundColor).multiplyScalar(K),s.hemi[_]=Y,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ke.LTC_FLOAT_1,s.rectAreaLTC2=Ke.LTC_FLOAT_2):(s.rectAreaLTC1=Ke.LTC_HALF_1,s.rectAreaLTC2=Ke.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=v;const O=s.hash;(O.directionalLength!==S||O.pointLength!==M||O.spotLength!==E||O.rectAreaLength!==y||O.hemiLength!==_||O.numDirectionalShadows!==I||O.numPointShadows!==w||O.numSpotShadows!==P||O.numSpotMaps!==B||O.numLightProbes!==U)&&(s.directional.length=S,s.spot.length=E,s.rectArea.length=y,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=P+B-R,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=R,s.numLightProbes=U,O.directionalLength=S,O.pointLength=M,O.spotLength=E,O.rectAreaLength=y,O.hemiLength=_,O.numDirectionalShadows=I,O.numPointShadows=w,O.numSpotShadows=P,O.numSpotMaps=B,O.numLightProbes=U,s.version=kw++)}function d(h,m){let g=0,v=0,S=0,M=0,E=0;const y=m.matrixWorldInverse;for(let _=0,I=h.length;_<I;_++){const w=h[_];if(w.isDirectionalLight){const P=s.directional[g];P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),g++}else if(w.isSpotLight){const P=s.spot[S];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),S++}else if(w.isRectAreaLight){const P=s.rectArea[M];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(w.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(w.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(y),v++}else if(w.isHemisphereLight){const P=s.hemi[E];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(y),E++}}}return{setup:f,setupView:d,state:s}}function Rg(i){const e=new Hw(i),t=[],s=[];function a(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function Vw(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Rg(i),e.set(a,[f])):l>=c.length?(f=new Rg(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}class Gw extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ay,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ww extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qw(i,e,t){let s=new _d;const a=new $e,l=new $e,c=new yn,f=new Gw({depthPacking:Cy}),d=new Ww,h={},m=t.maxTextureSize,g={[ar]:Yn,[Yn]:ar,[tr]:tr},v=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:jw,fragmentShader:Xw}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new si(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=u0;let _=this.type;this.render=function(R,U,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||R.length===0)return;const L=i.getRenderTarget(),b=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Ur),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=_!==er&&this.type===er,ne=_===er&&this.type!==er;for(let fe=0,Y=R.length;fe<Y;fe++){const ge=R[fe],W=ge.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ue=W.getFrameExtents();if(a.multiply(ue),l.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ue.x),a.x=l.x*ue.x,W.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ue.y),a.y=l.y*ue.y,W.mapSize.y=l.y)),W.map===null||K===!0||ne===!0){const F=this.type!==er?{minFilter:qn,magFilter:qn}:{};W.map!==null&&W.map.dispose(),W.map=new ps(a.x,a.y,F),W.map.texture.name=ge.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ce=W.getViewportCount();for(let F=0;F<ce;F++){const J=W.getViewport(F);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),X.viewport(c),W.updateMatrices(ge,F),s=W.getFrustum(),P(U,O,W.camera,ge,this.type)}W.isPointLightShadow!==!0&&this.type===er&&I(W,O),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(L,b,z)};function I(R,U){const O=e.update(E);v.defines.VSM_SAMPLES!==R.blurSamples&&(v.defines.VSM_SAMPLES=R.blurSamples,S.defines.VSM_SAMPLES=R.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ps(a.x,a.y)),v.uniforms.shadow_pass.value=R.map.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(U,null,O,v,E,null),S.uniforms.shadow_pass.value=R.mapPass.texture,S.uniforms.resolution.value=R.mapSize,S.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(U,null,O,S,E,null)}function w(R,U,O,L){let b=null;const z=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)b=z;else if(b=O.isPointLight===!0?d:f,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const X=b.uuid,K=U.uuid;let ne=h[X];ne===void 0&&(ne={},h[X]=ne);let fe=ne[K];fe===void 0&&(fe=b.clone(),ne[K]=fe,U.addEventListener("dispose",B)),b=fe}if(b.visible=U.visible,b.wireframe=U.wireframe,L===er?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:g[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const X=i.properties.get(b);X.light=O}return b}function P(R,U,O,L,b){if(R.visible===!1)return;if(R.layers.test(U.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===er)&&(!R.frustumCulled||s.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const K=e.update(R),ne=R.material;if(Array.isArray(ne)){const fe=K.groups;for(let Y=0,ge=fe.length;Y<ge;Y++){const W=fe[Y],ue=ne[W.materialIndex];if(ue&&ue.visible){const ce=w(R,ue,L,b);R.onBeforeShadow(i,R,U,O,K,ce,W),i.renderBufferDirect(O,null,K,ce,R,W),R.onAfterShadow(i,R,U,O,K,ce,W)}}}else if(ne.visible){const fe=w(R,ne,L,b);R.onBeforeShadow(i,R,U,O,K,fe,null),i.renderBufferDirect(O,null,K,fe,R,null),R.onAfterShadow(i,R,U,O,K,fe,null)}}const X=R.children;for(let K=0,ne=X.length;K<ne;K++)P(X[K],U,O,L,b)}function B(R){R.target.removeEventListener("dispose",B);for(const O in h){const L=h[O],b=R.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}function Yw(i){function e(){let G=!1;const He=new yn;let ve=null;const _e=new yn(0,0,0,0);return{setMask:function(Ue){ve!==Ue&&!G&&(i.colorMask(Ue,Ue,Ue,Ue),ve=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,rt,pt,wt,At){At===!0&&(Ue*=wt,rt*=wt,pt*=wt),He.set(Ue,rt,pt,wt),_e.equals(He)===!1&&(i.clearColor(Ue,rt,pt,wt),_e.copy(He))},reset:function(){G=!1,ve=null,_e.set(-1,0,0,0)}}}function t(){let G=!1,He=null,ve=null,_e=null;return{setTest:function(Ue){Ue?le(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Ue){He!==Ue&&!G&&(i.depthMask(Ue),He=Ue)},setFunc:function(Ue){if(ve!==Ue){switch(Ue){case ey:i.depthFunc(i.NEVER);break;case ty:i.depthFunc(i.ALWAYS);break;case ny:i.depthFunc(i.LESS);break;case sc:i.depthFunc(i.LEQUAL);break;case iy:i.depthFunc(i.EQUAL);break;case ry:i.depthFunc(i.GEQUAL);break;case sy:i.depthFunc(i.GREATER);break;case ay:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Ue}},setLocked:function(Ue){G=Ue},setClear:function(Ue){_e!==Ue&&(i.clearDepth(Ue),_e=Ue)},reset:function(){G=!1,He=null,ve=null,_e=null}}}function s(){let G=!1,He=null,ve=null,_e=null,Ue=null,rt=null,pt=null,wt=null,At=null;return{setTest:function(ht){G||(ht?le(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ht){He!==ht&&!G&&(i.stencilMask(ht),He=ht)},setFunc:function(ht,bt,kt){(ve!==ht||_e!==bt||Ue!==kt)&&(i.stencilFunc(ht,bt,kt),ve=ht,_e=bt,Ue=kt)},setOp:function(ht,bt,kt){(rt!==ht||pt!==bt||wt!==kt)&&(i.stencilOp(ht,bt,kt),rt=ht,pt=bt,wt=kt)},setLocked:function(ht){G=ht},setClear:function(ht){At!==ht&&(i.clearStencil(ht),At=ht)},reset:function(){G=!1,He=null,ve=null,_e=null,Ue=null,rt=null,pt=null,wt=null,At=null}}}const a=new e,l=new t,c=new s,f=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,v=[],S=null,M=!1,E=null,y=null,_=null,I=null,w=null,P=null,B=null,R=new Rt(0,0,0),U=0,O=!1,L=null,b=null,z=null,X=null,K=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,Y=0;const ge=i.getParameter(i.VERSION);ge.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ge)[1]),fe=Y>=1):ge.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),fe=Y>=2);let W=null,ue={};const ce=i.getParameter(i.SCISSOR_BOX),F=i.getParameter(i.VIEWPORT),J=new yn().fromArray(ce),Ve=new yn().fromArray(F);function te(G,He,ve,_e){const Ue=new Uint8Array(4),rt=i.createTexture();i.bindTexture(G,rt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<ve;pt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(He,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(He+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return rt}const ie={};ie[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(i.DEPTH_TEST),l.setFunc(sc),Se(!1),Ae(um),le(i.CULL_FACE),Ee(Ur);function le(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function xe(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Re(G,He){return m[G]!==He?(i.bindFramebuffer(G,He),m[G]=He,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=He),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=He),!0):!1}function Fe(G,He){let ve=v,_e=!1;if(G){ve=g.get(He),ve===void 0&&(ve=[],g.set(He,ve));const Ue=G.textures;if(ve.length!==Ue.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,pt=Ue.length;rt<pt;rt++)ve[rt]=i.COLOR_ATTACHMENT0+rt;ve.length=Ue.length,_e=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ve)}function Be(G){return S!==G?(i.useProgram(G),S=G,!0):!1}const V={[ls]:i.FUNC_ADD,[Fx]:i.FUNC_SUBTRACT,[zx]:i.FUNC_REVERSE_SUBTRACT};V[kx]=i.MIN,V[Bx]=i.MAX;const ye={[Hx]:i.ZERO,[Vx]:i.ONE,[Gx]:i.SRC_COLOR,[Kf]:i.SRC_ALPHA,[$x]:i.SRC_ALPHA_SATURATE,[qx]:i.DST_COLOR,[jx]:i.DST_ALPHA,[Wx]:i.ONE_MINUS_SRC_COLOR,[Zf]:i.ONE_MINUS_SRC_ALPHA,[Yx]:i.ONE_MINUS_DST_COLOR,[Xx]:i.ONE_MINUS_DST_ALPHA,[Kx]:i.CONSTANT_COLOR,[Zx]:i.ONE_MINUS_CONSTANT_COLOR,[Jx]:i.CONSTANT_ALPHA,[Qx]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(G,He,ve,_e,Ue,rt,pt,wt,At,ht){if(G===Ur){M===!0&&(xe(i.BLEND),M=!1);return}if(M===!1&&(le(i.BLEND),M=!0),G!==Ox){if(G!==E||ht!==O){if((y!==ls||w!==ls)&&(i.blendEquation(i.FUNC_ADD),y=ls,w=ls),ht)switch(G){case aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fm:i.blendFunc(i.ONE,i.ONE);break;case dm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,I=null,P=null,B=null,R.set(0,0,0),U=0,E=G,O=ht}return}Ue=Ue||He,rt=rt||ve,pt=pt||_e,(He!==y||Ue!==w)&&(i.blendEquationSeparate(V[He],V[Ue]),y=He,w=Ue),(ve!==_||_e!==I||rt!==P||pt!==B)&&(i.blendFuncSeparate(ye[ve],ye[_e],ye[rt],ye[pt]),_=ve,I=_e,P=rt,B=pt),(wt.equals(R)===!1||At!==U)&&(i.blendColor(wt.r,wt.g,wt.b,At),R.copy(wt),U=At),E=G,O=!1}function we(G,He){G.side===tr?xe(i.CULL_FACE):le(i.CULL_FACE);let ve=G.side===Yn;He&&(ve=!ve),Se(ve),G.blending===aa&&G.transparent===!1?Ee(Ur):Ee(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const _e=G.stencilWrite;c.setTest(_e),_e&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(G){L!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),L=G)}function Ae(G){G!==Ix?(le(i.CULL_FACE),G!==b&&(G===um?i.cullFace(i.BACK):G===Dx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),b=G}function Le(G){G!==z&&(fe&&i.lineWidth(G),z=G)}function Ce(G,He,ve){G?(le(i.POLYGON_OFFSET_FILL),(X!==He||K!==ve)&&(i.polygonOffset(He,ve),X=He,K=ve)):xe(i.POLYGON_OFFSET_FILL)}function qe(G){G?le(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function D(G){G===void 0&&(G=i.TEXTURE0+ne-1),W!==G&&(i.activeTexture(G),W=G)}function A(G,He,ve){ve===void 0&&(W===null?ve=i.TEXTURE0+ne-1:ve=W);let _e=ue[ve];_e===void 0&&(_e={type:void 0,texture:void 0},ue[ve]=_e),(_e.type!==G||_e.texture!==He)&&(W!==ve&&(i.activeTexture(ve),W=ve),i.bindTexture(G,He||ie[G]),_e.type=G,_e.texture=He)}function ee(){const G=ue[W];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function T(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(G){J.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),J.copy(G))}function ze(G){Ve.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ve.copy(G))}function ft(G,He){let ve=d.get(He);ve===void 0&&(ve=new WeakMap,d.set(He,ve));let _e=ve.get(G);_e===void 0&&(_e=i.getUniformBlockIndex(He,G.name),ve.set(G,_e))}function lt(G,He){const _e=d.get(He).get(G);f.get(He)!==_e&&(i.uniformBlockBinding(He,_e,G.__bindingPointIndex),f.set(He,_e))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,ue={},m={},g=new WeakMap,v=[],S=null,M=!1,E=null,y=null,_=null,I=null,w=null,P=null,B=null,R=new Rt(0,0,0),U=0,O=!1,L=null,b=null,z=null,X=null,K=null,J.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:le,disable:xe,bindFramebuffer:Re,drawBuffers:Fe,useProgram:Be,setBlending:Ee,setMaterial:we,setFlipSided:Se,setCullFace:Ae,setLineWidth:Le,setPolygonOffset:Ce,setScissorTest:qe,activeTexture:D,bindTexture:A,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:pe,texImage2D:je,texImage3D:T,updateUBOMapping:ft,uniformBlockBinding:lt,texStorage2D:et,texStorage3D:be,texSubImage2D:Me,texSubImage3D:Xe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Ie,scissor:Ze,viewport:ze,reset:dt}}function $w(i,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $e,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,A){return S?new OffscreenCanvas(D,A):go("canvas")}function E(D,A,ee){let me=1;const pe=qe(D);if((pe.width>ee||pe.height>ee)&&(me=ee/Math.max(pe.width,pe.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Me=Math.floor(me*pe.width),Xe=Math.floor(me*pe.height);g===void 0&&(g=M(Me,Xe));const Ne=A?M(Me,Xe):g;return Ne.width=Me,Ne.height=Xe,Ne.getContext("2d").drawImage(D,0,0,Me,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Me+"x"+Xe+")."),Ne}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function y(D){return D.generateMipmaps&&D.minFilter!==qn&&D.minFilter!==Ti}function _(D){i.generateMipmap(D)}function I(D,A,ee,me,pe=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Me=A;if(A===i.RED&&(ee===i.FLOAT&&(Me=i.R32F),ee===i.HALF_FLOAT&&(Me=i.R16F),ee===i.UNSIGNED_BYTE&&(Me=i.R8)),A===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(Me=i.R8UI),ee===i.UNSIGNED_SHORT&&(Me=i.R16UI),ee===i.UNSIGNED_INT&&(Me=i.R32UI),ee===i.BYTE&&(Me=i.R8I),ee===i.SHORT&&(Me=i.R16I),ee===i.INT&&(Me=i.R32I)),A===i.RG&&(ee===i.FLOAT&&(Me=i.RG32F),ee===i.HALF_FLOAT&&(Me=i.RG16F),ee===i.UNSIGNED_BYTE&&(Me=i.RG8)),A===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(Me=i.RG8UI),ee===i.UNSIGNED_SHORT&&(Me=i.RG16UI),ee===i.UNSIGNED_INT&&(Me=i.RG32UI),ee===i.BYTE&&(Me=i.RG8I),ee===i.SHORT&&(Me=i.RG16I),ee===i.INT&&(Me=i.RG32I)),A===i.RGB&&ee===i.UNSIGNED_INT_5_9_9_9_REV&&(Me=i.RGB9_E5),A===i.RGBA){const Xe=pe?oc:zt.getTransfer(me);ee===i.FLOAT&&(Me=i.RGBA32F),ee===i.HALF_FLOAT&&(Me=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(Me=Xe===jt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT_4_4_4_4&&(Me=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(Me=i.RGB5_A1)}return(Me===i.R16F||Me===i.R32F||Me===i.RG16F||Me===i.RG32F||Me===i.RGBA16F||Me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function w(D,A){let ee;return D?A===null||A===da||A===ha?ee=i.DEPTH24_STENCIL8:A===rr?ee=i.DEPTH32F_STENCIL8:A===ac&&(ee=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===da||A===ha?ee=i.DEPTH_COMPONENT24:A===rr?ee=i.DEPTH_COMPONENT32F:A===ac&&(ee=i.DEPTH_COMPONENT16),ee}function P(D,A){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==qn&&D.minFilter!==Ti?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function B(D){const A=D.target;A.removeEventListener("dispose",B),U(A),A.isVideoTexture&&m.delete(A)}function R(D){const A=D.target;A.removeEventListener("dispose",R),L(A)}function U(D){const A=s.get(D);if(A.__webglInit===void 0)return;const ee=D.source,me=v.get(ee);if(me){const pe=me[A.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&O(D),Object.keys(me).length===0&&v.delete(ee)}s.remove(D)}function O(D){const A=s.get(D);i.deleteTexture(A.__webglTexture);const ee=D.source,me=v.get(ee);delete me[A.__cacheKey],c.memory.textures--}function L(D){const A=s.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let pe=0;pe<A.__webglFramebuffer[me].length;pe++)i.deleteFramebuffer(A.__webglFramebuffer[me][pe]);else i.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)i.deleteFramebuffer(A.__webglFramebuffer[me]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ee=D.textures;for(let me=0,pe=ee.length;me<pe;me++){const Me=s.get(ee[me]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),c.memory.textures--),s.remove(ee[me])}s.remove(D)}let b=0;function z(){b=0}function X(){const D=b;return D>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),b+=1,D}function K(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function ne(D,A){const ee=s.get(D);if(D.isVideoTexture&&Le(D),D.isRenderTargetTexture===!1&&D.version>0&&ee.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(ee,D,A);return}}t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+A)}function fe(D,A){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){Ve(ee,D,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+A)}function Y(D,A){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){Ve(ee,D,A);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+A)}function ge(D,A){const ee=s.get(D);if(D.version>0&&ee.__version!==D.version){te(ee,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+A)}const W={[ed]:i.REPEAT,[ds]:i.CLAMP_TO_EDGE,[td]:i.MIRRORED_REPEAT},ue={[qn]:i.NEAREST,[gy]:i.NEAREST_MIPMAP_NEAREST,[Al]:i.NEAREST_MIPMAP_LINEAR,[Ti]:i.LINEAR,[uf]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},ce={[Ry]:i.NEVER,[Uy]:i.ALWAYS,[Py]:i.LESS,[x0]:i.LEQUAL,[Ly]:i.EQUAL,[Dy]:i.GEQUAL,[Ny]:i.GREATER,[Iy]:i.NOTEQUAL};function F(D,A){if(A.type===rr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ti||A.magFilter===uf||A.magFilter===Al||A.magFilter===hs||A.minFilter===Ti||A.minFilter===uf||A.minFilter===Al||A.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,W[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,W[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,W[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ue[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ue[A.minFilter]),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===qn||A.minFilter!==Al&&A.minFilter!==hs||A.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function J(D,A){let ee=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",B));const me=A.source;let pe=v.get(me);pe===void 0&&(pe={},v.set(me,pe));const Me=K(A);if(Me!==D.__cacheKey){pe[Me]===void 0&&(pe[Me]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ee=!0),pe[Me].usedTimes++;const Xe=pe[D.__cacheKey];Xe!==void 0&&(pe[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&O(A)),D.__cacheKey=Me,D.__webglTexture=pe[Me].texture}return ee}function Ve(D,A,ee){let me=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=i.TEXTURE_3D);const pe=J(D,A),Me=A.source;t.bindTexture(me,D.__webglTexture,i.TEXTURE0+ee);const Xe=s.get(Me);if(Me.version!==Xe.__version||pe===!0){t.activeTexture(i.TEXTURE0+ee);const Ne=zt.getPrimaries(zt.workingColorSpace),Ie=A.colorSpace===Dr?null:zt.getPrimaries(A.colorSpace),et=A.colorSpace===Dr||Ne===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let be=E(A.image,!1,a.maxTextureSize);be=Ce(A,be);const je=l.convert(A.format,A.colorSpace),T=l.convert(A.type);let Ze=I(A.internalFormat,je,T,A.colorSpace,A.isVideoTexture);F(me,A);let ze;const ft=A.mipmaps,lt=A.isVideoTexture!==!0,dt=Xe.__version===void 0||pe===!0,G=Me.dataReady,He=P(A,be);if(A.isDepthTexture)Ze=w(A.format===pa,A.type),dt&&(lt?t.texStorage2D(i.TEXTURE_2D,1,Ze,be.width,be.height):t.texImage2D(i.TEXTURE_2D,0,Ze,be.width,be.height,0,je,T,null));else if(A.isDataTexture)if(ft.length>0){lt&&dt&&t.texStorage2D(i.TEXTURE_2D,He,Ze,ft[0].width,ft[0].height);for(let ve=0,_e=ft.length;ve<_e;ve++)ze=ft[ve],lt?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ze.width,ze.height,je,T,ze.data):t.texImage2D(i.TEXTURE_2D,ve,Ze,ze.width,ze.height,0,je,T,ze.data);A.generateMipmaps=!1}else lt?(dt&&t.texStorage2D(i.TEXTURE_2D,He,Ze,be.width,be.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be.width,be.height,je,T,be.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,be.width,be.height,0,je,T,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){lt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Ze,ft[0].width,ft[0].height,be.depth);for(let ve=0,_e=ft.length;ve<_e;ve++)if(ze=ft[ve],A.format!==Fi)if(je!==null)if(lt){if(G)if(A.layerUpdates.size>0){for(const Ue of A.layerUpdates){const rt=ze.width*ze.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Ue,ze.width,ze.height,1,je,ze.data.slice(rt*Ue,rt*(Ue+1)),0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,be.depth,je,ze.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Ze,ze.width,ze.height,be.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,be.depth,je,T,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Ze,ze.width,ze.height,be.depth,0,je,T,ze.data)}else{lt&&dt&&t.texStorage2D(i.TEXTURE_2D,He,Ze,ft[0].width,ft[0].height);for(let ve=0,_e=ft.length;ve<_e;ve++)ze=ft[ve],A.format!==Fi?je!==null?lt?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,ze.width,ze.height,je,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Ze,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ze.width,ze.height,je,T,ze.data):t.texImage2D(i.TEXTURE_2D,ve,Ze,ze.width,ze.height,0,je,T,ze.data)}else if(A.isDataArrayTexture)if(lt){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,Ze,be.width,be.height,be.depth),G)if(A.layerUpdates.size>0){let ve;switch(T){case i.UNSIGNED_BYTE:switch(je){case i.ALPHA:ve=1;break;case i.LUMINANCE:ve=1;break;case i.LUMINANCE_ALPHA:ve=2;break;case i.RGB:ve=3;break;case i.RGBA:ve=4;break;default:throw new Error(`Unknown texel size for format ${je}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:ve=1;break;default:throw new Error(`Unknown texel size for type ${T}.`)}const _e=be.width*be.height*ve;for(const Ue of A.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,be.width,be.height,1,je,T,be.data.slice(_e*Ue,_e*(Ue+1)));A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,je,T,be.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,be.width,be.height,be.depth,0,je,T,be.data);else if(A.isData3DTexture)lt?(dt&&t.texStorage3D(i.TEXTURE_3D,He,Ze,be.width,be.height,be.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,je,T,be.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,be.width,be.height,be.depth,0,je,T,be.data);else if(A.isFramebufferTexture){if(dt)if(lt)t.texStorage2D(i.TEXTURE_2D,He,Ze,be.width,be.height);else{let ve=be.width,_e=be.height;for(let Ue=0;Ue<He;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ze,ve,_e,0,je,T,null),ve>>=1,_e>>=1}}else if(ft.length>0){if(lt&&dt){const ve=qe(ft[0]);t.texStorage2D(i.TEXTURE_2D,He,Ze,ve.width,ve.height)}for(let ve=0,_e=ft.length;ve<_e;ve++)ze=ft[ve],lt?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,je,T,ze):t.texImage2D(i.TEXTURE_2D,ve,Ze,je,T,ze);A.generateMipmaps=!1}else if(lt){if(dt){const ve=qe(be);t.texStorage2D(i.TEXTURE_2D,He,Ze,ve.width,ve.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,T,be)}else t.texImage2D(i.TEXTURE_2D,0,Ze,je,T,be);y(A)&&_(me),Xe.__version=Me.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function te(D,A,ee){if(A.image.length!==6)return;const me=J(D,A),pe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+ee);const Me=s.get(pe);if(pe.version!==Me.__version||me===!0){t.activeTexture(i.TEXTURE0+ee);const Xe=zt.getPrimaries(zt.workingColorSpace),Ne=A.colorSpace===Dr?null:zt.getPrimaries(A.colorSpace),Ie=A.colorSpace===Dr||Xe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const et=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,je=[];for(let _e=0;_e<6;_e++)!et&&!be?je[_e]=E(A.image[_e],!0,a.maxCubemapSize):je[_e]=be?A.image[_e].image:A.image[_e],je[_e]=Ce(A,je[_e]);const T=je[0],Ze=l.convert(A.format,A.colorSpace),ze=l.convert(A.type),ft=I(A.internalFormat,Ze,ze,A.colorSpace),lt=A.isVideoTexture!==!0,dt=Me.__version===void 0||me===!0,G=pe.dataReady;let He=P(A,T);F(i.TEXTURE_CUBE_MAP,A);let ve;if(et){lt&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ft,T.width,T.height);for(let _e=0;_e<6;_e++){ve=je[_e].mipmaps;for(let Ue=0;Ue<ve.length;Ue++){const rt=ve[Ue];A.format!==Fi?Ze!==null?lt?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,0,0,rt.width,rt.height,Ze,rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,ft,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):lt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,0,0,rt.width,rt.height,Ze,ze,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue,ft,rt.width,rt.height,0,Ze,ze,rt.data)}}}else{if(ve=A.mipmaps,lt&&dt){ve.length>0&&He++;const _e=qe(je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,He,ft,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){lt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je[_e].width,je[_e].height,Ze,ze,je[_e].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,je[_e].width,je[_e].height,0,Ze,ze,je[_e].data);for(let Ue=0;Ue<ve.length;Ue++){const pt=ve[Ue].image[_e].image;lt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,0,0,pt.width,pt.height,Ze,ze,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,ft,pt.width,pt.height,0,Ze,ze,pt.data)}}else{lt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ze,ze,je[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,Ze,ze,je[_e]);for(let Ue=0;Ue<ve.length;Ue++){const rt=ve[Ue];lt?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,0,0,Ze,ze,rt.image[_e]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ue+1,ft,Ze,ze,rt.image[_e])}}}y(A)&&_(i.TEXTURE_CUBE_MAP),Me.__version=pe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ie(D,A,ee,me,pe,Me){const Xe=l.convert(ee.format,ee.colorSpace),Ne=l.convert(ee.type),Ie=I(ee.internalFormat,Xe,Ne,ee.colorSpace);if(!s.get(A).__hasExternalTextures){const be=Math.max(1,A.width>>Me),je=Math.max(1,A.height>>Me);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,Me,Ie,be,je,A.depth,0,Xe,Ne,null):t.texImage2D(pe,Me,Ie,be,je,0,Xe,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Ae(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,pe,s.get(ee).__webglTexture,0,Se(A)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,pe,s.get(ee).__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(D,A,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer){const me=A.depthTexture,pe=me&&me.isDepthTexture?me.type:null,Me=w(A.stencilBuffer,pe),Xe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=Se(A);Ae(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Me,A.width,A.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Me,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,D)}else{const me=A.textures;for(let pe=0;pe<me.length;pe++){const Me=me[pe],Xe=l.convert(Me.format,Me.colorSpace),Ne=l.convert(Me.type),Ie=I(Me.internalFormat,Xe,Ne,Me.colorSpace),et=Se(A);ee&&Ae(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ie,A.width,A.height):Ae(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ie,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ne(A.depthTexture,0);const me=s.get(A.depthTexture).__webglTexture,pe=Se(A);if(A.depthTexture.format===oa)Ae(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(A.depthTexture.format===pa)Ae(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function Re(D){const A=s.get(D),ee=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");xe(A.__webglFramebuffer,D)}else if(ee){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=i.createRenderbuffer(),le(A.__webglDepthbuffer[me],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),le(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(D,A,ee){const me=s.get(D);A!==void 0&&ie(me.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Re(D)}function Be(D){const A=D.texture,ee=s.get(D),me=s.get(A);D.addEventListener("dispose",R);const pe=D.textures,Me=D.isWebGLCubeRenderTarget===!0,Xe=pe.length>1;if(Xe||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=A.version,c.memory.textures++),Me){ee.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ne]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ee.__webglFramebuffer[Ne][Ie]=i.createFramebuffer()}else ee.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)ee.__webglFramebuffer[Ne]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let Ne=0,Ie=pe.length;Ne<Ie;Ne++){const et=s.get(pe[Ne]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&Ae(D)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ne=0;Ne<pe.length;Ne++){const Ie=pe[Ne];ee.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne]);const et=l.convert(Ie.format,Ie.colorSpace),be=l.convert(Ie.type),je=I(Ie.internalFormat,et,be,Ie.colorSpace,D.isXRRenderTarget===!0),T=Se(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,je,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),le(ee.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),F(i.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ie(ee.__webglFramebuffer[Ne][Ie],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ie);else ie(ee.__webglFramebuffer[Ne],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);y(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ne=0,Ie=pe.length;Ne<Ie;Ne++){const et=pe[Ne],be=s.get(et);t.bindTexture(i.TEXTURE_2D,be.__webglTexture),F(i.TEXTURE_2D,et),ie(ee.__webglFramebuffer,D,et,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),y(et)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ne=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,me.__webglTexture),F(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ie(ee.__webglFramebuffer[Ie],D,A,i.COLOR_ATTACHMENT0,Ne,Ie);else ie(ee.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,Ne,0);y(A)&&_(Ne),t.unbindTexture()}D.depthBuffer&&Re(D)}function V(D){const A=D.textures;for(let ee=0,me=A.length;ee<me;ee++){const pe=A[ee];if(y(pe)){const Me=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Xe=s.get(pe).__webglTexture;t.bindTexture(Me,Xe),_(Me),t.unbindTexture()}}}const ye=[],Ee=[];function we(D){if(D.samples>0){if(Ae(D)===!1){const A=D.textures,ee=D.width,me=D.height;let pe=i.COLOR_BUFFER_BIT;const Me=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=s.get(D),Ne=A.length>1;if(Ne)for(let Ie=0;Ie<A.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ie=0;Ie<A.length;Ie++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ie]);const et=s.get(A[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,ee,me,0,0,ee,me,pe,i.NEAREST),d===!0&&(ye.length=0,Ee.length=0,ye.push(i.COLOR_ATTACHMENT0+Ie),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ye.push(Me),Ee.push(Me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let Ie=0;Ie<A.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ie]);const et=s.get(A[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const A=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Se(D){return Math.min(a.maxSamples,D.samples)}function Ae(D){const A=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Le(D){const A=c.render.frame;m.get(D)!==A&&(m.set(D,A),D.update())}function Ce(D,A){const ee=D.colorSpace,me=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||ee!==zr&&ee!==Dr&&(zt.getTransfer(ee)===jt?(me!==Fi||pe!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=ne,this.setTexture2DArray=fe,this.setTexture3D=Y,this.setTextureCube=ge,this.rebindTextures=Fe,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ae}function Kw(i,e){function t(s,a=Dr){let l;const c=zt.getTransfer(a);if(s===Fr)return i.UNSIGNED_BYTE;if(s===h0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===p0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===xy)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===vy)return i.BYTE;if(s===_y)return i.SHORT;if(s===ac)return i.UNSIGNED_SHORT;if(s===d0)return i.INT;if(s===da)return i.UNSIGNED_INT;if(s===rr)return i.FLOAT;if(s===_c)return i.HALF_FLOAT;if(s===yy)return i.ALPHA;if(s===Sy)return i.RGB;if(s===Fi)return i.RGBA;if(s===My)return i.LUMINANCE;if(s===Ey)return i.LUMINANCE_ALPHA;if(s===oa)return i.DEPTH_COMPONENT;if(s===pa)return i.DEPTH_STENCIL;if(s===m0)return i.RED;if(s===g0)return i.RED_INTEGER;if(s===wy)return i.RG;if(s===v0)return i.RG_INTEGER;if(s===_0)return i.RGBA_INTEGER;if(s===ff||s===df||s===hf||s===pf)if(c===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ff)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===df)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ff)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===df)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===hf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pm||s===mm||s===gm||s===vm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===pm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_m||s===xm||s===ym)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===_m||s===xm)return c===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ym)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sm||s===Mm||s===Em||s===wm||s===Tm||s===Am||s===Cm||s===bm||s===Rm||s===Pm||s===Lm||s===Nm||s===Im||s===Dm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Sm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Em)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Am)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Im)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mf||s===Um||s===Om)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===mf)return c===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Um)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Om)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ty||s===Fm||s===zm||s===km)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===mf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Fm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===km)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ha?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class Zw extends wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yl extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class Bf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,s),_=this._getHandJoint(h,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&v>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Yl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Ln,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new or({vertexShader:Qw,fragmentShader:eT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new yc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class nT extends ga{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,g=null,v=null,S=null,M=null;const E=new tT,y=t.getContextAttributes();let _=null,I=null;const w=[],P=[],B=new $e;let R=null;const U=new wi;U.layers.enable(1),U.viewport=new yn;const O=new wi;O.layers.enable(2),O.viewport=new yn;const L=[U,O],b=new Zw;b.layers.enable(1),b.layers.enable(2);let z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ie=w[te];return ie===void 0&&(ie=new Bf,w[te]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(te){let ie=w[te];return ie===void 0&&(ie=new Bf,w[te]=ie),ie.getGripSpace()},this.getHand=function(te){let ie=w[te];return ie===void 0&&(ie=new Bf,w[te]=ie),ie.getHandSpace()};function K(te){const ie=P.indexOf(te.inputSource);if(ie===-1)return;const le=w[ie];le!==void 0&&(le.update(te.inputSource,te.frame,h||c),le.dispatchEvent({type:te.type,data:te.inputSource}))}function ne(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",fe);for(let te=0;te<w.length;te++){const ie=P[te];ie!==null&&(P[te]=null,w[te].disconnect(ie))}z=null,X=null,E.reset(),e.setRenderTarget(_),S=null,v=null,g=null,a=null,I=null,Ve.stop(),s.isPresenting=!1,e.setPixelRatio(R),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(B),a.renderState.layers===void 0){const ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new ps(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:Fr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ie=null,le=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?pa:oa,le=y.stencil?ha:da);const Re={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(Re),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new ps(v.textureWidth,v.textureHeight,{format:Fi,type:Fr,depthTexture:new L0(v.textureWidth,v.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(f),Ve.setContext(a),Ve.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function fe(te){for(let ie=0;ie<te.removed.length;ie++){const le=te.removed[ie],xe=P.indexOf(le);xe>=0&&(P[xe]=null,w[xe].disconnect(le))}for(let ie=0;ie<te.added.length;ie++){const le=te.added[ie];let xe=P.indexOf(le);if(xe===-1){for(let Fe=0;Fe<w.length;Fe++)if(Fe>=P.length){P.push(le),xe=Fe;break}else if(P[Fe]===null){P[Fe]=le,xe=Fe;break}if(xe===-1)break}const Re=w[xe];Re&&Re.connect(le)}}const Y=new $,ge=new $;function W(te,ie,le){Y.setFromMatrixPosition(ie.matrixWorld),ge.setFromMatrixPosition(le.matrixWorld);const xe=Y.distanceTo(ge),Re=ie.projectionMatrix.elements,Fe=le.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),V=Re[14]/(Re[10]+1),ye=(Re[9]+1)/Re[5],Ee=(Re[9]-1)/Re[5],we=(Re[8]-1)/Re[0],Se=(Fe[8]+1)/Fe[0],Ae=Be*we,Le=Be*Se,Ce=xe/(-we+Se),qe=Ce*-we;ie.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(qe),te.translateZ(Ce),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const D=Be+Ce,A=V+Ce,ee=Ae-qe,me=Le+(xe-qe),pe=ye*V/A*D,Me=Ee*V/A*D;te.projectionMatrix.makePerspective(ee,me,pe,Me,D,A),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ue(te,ie){ie===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ie.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;E.texture!==null&&(te.near=E.depthNear,te.far=E.depthFar),b.near=O.near=U.near=te.near,b.far=O.far=U.far=te.far,(z!==b.near||X!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,X=b.far,U.near=z,U.far=X,O.near=z,O.far=X,U.updateProjectionMatrix(),O.updateProjectionMatrix(),te.updateProjectionMatrix());const ie=te.parent,le=b.cameras;ue(b,ie);for(let xe=0;xe<le.length;xe++)ue(le[xe],ie);le.length===2?W(b,U,O):b.projectionMatrix.copy(U.projectionMatrix),ce(te,b,ie)};function ce(te,ie,le){le===null?te.matrix.copy(ie.matrixWorld):(te.matrix.copy(le.matrixWorld),te.matrix.invert(),te.matrix.multiply(ie.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ie.projectionMatrix),te.projectionMatrixInverse.copy(ie.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=mo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(te){d=te,v!==null&&(v.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let F=null;function J(te,ie){if(m=ie.getViewerPose(h||c),M=ie,m!==null){const le=m.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;le.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let Fe=0;Fe<le.length;Fe++){const Be=le[Fe];let V=null;if(S!==null)V=S.getViewport(Be);else{const Ee=g.getViewSubImage(v,Be);V=Ee.viewport,Fe===0&&(e.setRenderTargetTextures(I,Ee.colorTexture,v.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(I))}let ye=L[Fe];ye===void 0&&(ye=new wi,ye.layers.enable(Fe),ye.viewport=new yn,L[Fe]=ye),ye.matrix.fromArray(Be.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Be.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(V.x,V.y,V.width,V.height),Fe===0&&(b.matrix.copy(ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(ye)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=g.getDepthInformation(le[0]);Fe&&Fe.isValid&&Fe.texture&&E.init(e,Fe,a.renderState)}}for(let le=0;le<w.length;le++){const xe=P[le],Re=w[le];xe!==null&&Re!==void 0&&Re.update(xe,ie,h||c)}F&&F(te,ie),ie.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ie}),M=null}const Ve=new R0;Ve.setAnimationLoop(J),this.setAnimationLoop=function(te){F=te},this.dispose=function(){}}}const ss=new Ci,iT=new Ht;function rT(i,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,A0(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,I,w,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),g(y,_)):_.isMeshPhongMaterial?(l(y,_),m(y,_)):_.isMeshStandardMaterial?(l(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),M(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),E(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?d(y,_,I,w):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Yn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Yn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),w=I.envMap,P=I.envMapRotation;w&&(y.envMap.value=w,ss.copy(P),ss.x*=-1,ss.y*=-1,ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),y.envMapRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ss)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function d(y,_,I,w){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=w*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function sT(i,e,t,s){let a={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(I,w){const P=w.program;s.uniformBlockBinding(I,P)}function h(I,w){let P=a[I.id];P===void 0&&(M(I),P=m(I),a[I.id]=P,I.addEventListener("dispose",y));const B=w.program;s.updateUBOMapping(I,B);const R=e.render.frame;l[I.id]!==R&&(v(I),l[I.id]=R)}function m(I){const w=g();I.__bindingPointIndex=w;const P=i.createBuffer(),B=I.__size,R=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,B,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,P),P}function g(){for(let I=0;I<f;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const w=a[I.id],P=I.uniforms,B=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,U=P.length;R<U;R++){const O=Array.isArray(P[R])?P[R]:[P[R]];for(let L=0,b=O.length;L<b;L++){const z=O[L];if(S(z,R,L,B)===!0){const X=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let ne=0;for(let fe=0;fe<K.length;fe++){const Y=K[fe],ge=E(Y);typeof Y=="number"||typeof Y=="boolean"?(z.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,X+ne,z.__data)):Y.isMatrix3?(z.__data[0]=Y.elements[0],z.__data[1]=Y.elements[1],z.__data[2]=Y.elements[2],z.__data[3]=0,z.__data[4]=Y.elements[3],z.__data[5]=Y.elements[4],z.__data[6]=Y.elements[5],z.__data[7]=0,z.__data[8]=Y.elements[6],z.__data[9]=Y.elements[7],z.__data[10]=Y.elements[8],z.__data[11]=0):(Y.toArray(z.__data,ne),ne+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(I,w,P,B){const R=I.value,U=w+"_"+P;if(B[U]===void 0)return typeof R=="number"||typeof R=="boolean"?B[U]=R:B[U]=R.clone(),!0;{const O=B[U];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return B[U]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function M(I){const w=I.uniforms;let P=0;const B=16;for(let U=0,O=w.length;U<O;U++){const L=Array.isArray(w[U])?w[U]:[w[U]];for(let b=0,z=L.length;b<z;b++){const X=L[b],K=Array.isArray(X.value)?X.value:[X.value];for(let ne=0,fe=K.length;ne<fe;ne++){const Y=K[ne],ge=E(Y),W=P%B;W!==0&&B-W<ge.boundary&&(P+=B-W),X.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=P,P+=ge.storage}}}const R=P%B;return R>0&&(P+=B-R),I.__size=P,I.__cache={},this}function E(I){const w={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function y(I){const w=I.target;w.removeEventListener("dispose",y);const P=c.indexOf(w.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(a[w.id]),delete a[w.id],delete l[w.id]}function _(){for(const I in a)i.deleteBuffer(a[I]);c=[],a={},l={}}return{bind:d,update:h,dispose:_}}class f2{constructor(e={}){const{canvas:t=Jy(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=c;const S=new Uint32Array(4),M=new Int32Array(4);let E=null,y=null;const _=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Di,this.toneMapping=Or,this.toneMappingExposure=1;const w=this;let P=!1,B=0,R=0,U=null,O=-1,L=null;const b=new yn,z=new yn;let X=null;const K=new Rt(0);let ne=0,fe=t.width,Y=t.height,ge=1,W=null,ue=null;const ce=new yn(0,0,fe,Y),F=new yn(0,0,fe,Y);let J=!1;const Ve=new _d;let te=!1,ie=!1;const le=new Ht,xe=new $,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Be(){return U===null?ge:1}let V=s;function ye(N,Z){return t.getContext(N,Z)}try{const N={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ud}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),V===null){const Z="webgl2";if(V=ye(Z,N),V===null)throw ye(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ee,we,Se,Ae,Le,Ce,qe,D,A,ee,me,pe,Me,Xe,Ne,Ie,et,be,je,T,Ze,ze,ft,lt;function dt(){Ee=new pE(V),Ee.init(),ze=new Kw(V,Ee),we=new lE(V,Ee,e,ze),Se=new Yw(V),Ae=new vE(V),Le=new Dw,Ce=new $w(V,Ee,Se,Le,we,ze,Ae),qe=new uE(w),D=new hE(w),A=new wS(V),ft=new aE(V,A),ee=new mE(V,A,Ae,ft),me=new xE(V,ee,A,Ae),je=new _E(V,we,Ce),Ie=new cE(Le),pe=new Iw(w,qe,D,Ee,we,ft,Ie),Me=new rT(w,Le),Xe=new Ow,Ne=new Vw(Ee),be=new sE(w,qe,D,Se,me,v,d),et=new qw(w,me,we),lt=new sT(V,Ae,we,Se),T=new oE(V,Ee,Ae),Ze=new gE(V,Ee,Ae),Ae.programs=pe.programs,w.capabilities=we,w.extensions=Ee,w.properties=Le,w.renderLists=Xe,w.shadowMap=et,w.state=Se,w.info=Ae}dt();const G=new nT(w,V);this.xr=G,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=Ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(N){N!==void 0&&(ge=N,this.setSize(fe,Y,!1))},this.getSize=function(N){return N.set(fe,Y)},this.setSize=function(N,Z,ae=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=N,Y=Z,t.width=Math.floor(N*ge),t.height=Math.floor(Z*ge),ae===!0&&(t.style.width=N+"px",t.style.height=Z+"px"),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(fe*ge,Y*ge).floor()},this.setDrawingBufferSize=function(N,Z,ae){fe=N,Y=Z,ge=ae,t.width=Math.floor(N*ae),t.height=Math.floor(Z*ae),this.setViewport(0,0,N,Z)},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(ce)},this.setViewport=function(N,Z,ae,se){N.isVector4?ce.set(N.x,N.y,N.z,N.w):ce.set(N,Z,ae,se),Se.viewport(b.copy(ce).multiplyScalar(ge).round())},this.getScissor=function(N){return N.copy(F)},this.setScissor=function(N,Z,ae,se){N.isVector4?F.set(N.x,N.y,N.z,N.w):F.set(N,Z,ae,se),Se.scissor(z.copy(F).multiplyScalar(ge).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(N){Se.setScissorTest(J=N)},this.setOpaqueSort=function(N){W=N},this.setTransparentSort=function(N){ue=N},this.getClearColor=function(N){return N.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(N=!0,Z=!0,ae=!0){let se=0;if(N){let Q=!1;if(U!==null){const Pe=U.texture.format;Q=Pe===_0||Pe===v0||Pe===g0}if(Q){const Pe=U.texture.type,Ye=Pe===Fr||Pe===da||Pe===ac||Pe===ha||Pe===h0||Pe===p0,tt=be.getClearColor(),st=be.getClearAlpha(),Je=tt.r,mt=tt.g,ct=tt.b;Ye?(S[0]=Je,S[1]=mt,S[2]=ct,S[3]=st,V.clearBufferuiv(V.COLOR,0,S)):(M[0]=Je,M[1]=mt,M[2]=ct,M[3]=st,V.clearBufferiv(V.COLOR,0,M))}else se|=V.COLOR_BUFFER_BIT}Z&&(se|=V.DEPTH_BUFFER_BIT),ae&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Xe.dispose(),Ne.dispose(),Le.dispose(),qe.dispose(),D.dispose(),me.dispose(),ft.dispose(),lt.dispose(),pe.dispose(),G.dispose(),G.removeEventListener("sessionstart",bt),G.removeEventListener("sessionend",kt),Dt.stop()};function He(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const N=Ae.autoReset,Z=et.enabled,ae=et.autoUpdate,se=et.needsUpdate,Q=et.type;dt(),Ae.autoReset=N,et.enabled=Z,et.autoUpdate=ae,et.needsUpdate=se,et.type=Q}function _e(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ue(N){const Z=N.target;Z.removeEventListener("dispose",Ue),rt(Z)}function rt(N){pt(N),Le.remove(N)}function pt(N){const Z=Le.get(N).programs;Z!==void 0&&(Z.forEach(function(ae){pe.releaseProgram(ae)}),N.isShaderMaterial&&pe.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,ae,se,Q,Pe){Z===null&&(Z=Re);const Ye=Q.isMesh&&Q.matrixWorld.determinant()<0,tt=$n(N,Z,ae,se,Q);Se.setMaterial(se,Ye);let st=ae.index,Je=1;if(se.wireframe===!0){if(st=ee.getWireframeAttribute(ae),st===void 0)return;Je=2}const mt=ae.drawRange,ct=ae.attributes.position;let Tt=mt.start*Je,Nt=(mt.start+mt.count)*Je;Pe!==null&&(Tt=Math.max(Tt,Pe.start*Je),Nt=Math.min(Nt,(Pe.start+Pe.count)*Je)),st!==null?(Tt=Math.max(Tt,0),Nt=Math.min(Nt,st.count)):ct!=null&&(Tt=Math.max(Tt,0),Nt=Math.min(Nt,ct.count));const Bt=Nt-Tt;if(Bt<0||Bt===1/0)return;ft.setup(Q,se,tt,ae,st);let Yt,St=T;if(st!==null&&(Yt=A.get(st),St=Ze,St.setIndex(Yt)),Q.isMesh)se.wireframe===!0?(Se.setLineWidth(se.wireframeLinewidth*Be()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(Q.isLine){let nt=se.linewidth;nt===void 0&&(nt=1),Se.setLineWidth(nt*Be()),Q.isLineSegments?St.setMode(V.LINES):Q.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else Q.isPoints?St.setMode(V.POINTS):Q.isSprite&&St.setMode(V.TRIANGLES);if(Q.isBatchedMesh)Q._multiDrawInstances!==null?St.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances):St.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)St.renderInstances(Tt,Bt,Q.count);else if(ae.isInstancedBufferGeometry){const nt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,sn=Math.min(ae.instanceCount,nt);St.renderInstances(Tt,Bt,sn)}else St.render(Tt,Bt)};function wt(N,Z,ae){N.transparent===!0&&N.side===tr&&N.forceSinglePass===!1?(N.side=Yn,N.needsUpdate=!0,_t(N,Z,ae),N.side=ar,N.needsUpdate=!0,_t(N,Z,ae),N.side=tr):_t(N,Z,ae)}this.compile=function(N,Z,ae=null){ae===null&&(ae=N),y=Ne.get(ae),y.init(Z),I.push(y),ae.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),N!==ae&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const se=new Set;return N.traverse(function(Q){const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let Ye=0;Ye<Pe.length;Ye++){const tt=Pe[Ye];wt(tt,ae,Q),se.add(tt)}else wt(Pe,ae,Q),se.add(Pe)}),I.pop(),y=null,se},this.compileAsync=function(N,Z,ae=null){const se=this.compile(N,Z,ae);return new Promise(Q=>{function Pe(){if(se.forEach(function(Ye){Le.get(Ye).currentProgram.isReady()&&se.delete(Ye)}),se.size===0){Q(N);return}setTimeout(Pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let At=null;function ht(N){At&&At(N)}function bt(){Dt.stop()}function kt(){Dt.start()}const Dt=new R0;Dt.setAnimationLoop(ht),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(N){At=N,G.setAnimationLoop(N),N===null?Dt.stop():Dt.start()},G.addEventListener("sessionstart",bt),G.addEventListener("sessionend",kt),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(Z),Z=G.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,Z,U),y=Ne.get(N,I.length),y.init(Z),I.push(y),le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ve.setFromProjectionMatrix(le),ie=this.localClippingEnabled,te=Ie.init(this.clippingPlanes,ie),E=Xe.get(N,_.length),E.init(),_.push(E),G.enabled===!0&&G.isPresenting===!0){const Pe=w.xr.getDepthSensingMesh();Pe!==null&&Ge(Pe,Z,-1/0,w.sortObjects)}Ge(N,Z,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(W,ue),Fe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Fe&&be.addToRenderList(E,N),this.info.render.frame++,te===!0&&Ie.beginShadows();const ae=y.state.shadowsArray;et.render(ae,N,Z),te===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=E.opaque,Q=E.transmissive;if(y.setupLights(),Z.isArrayCamera){const Pe=Z.cameras;if(Q.length>0)for(let Ye=0,tt=Pe.length;Ye<tt;Ye++){const st=Pe[Ye];tn(se,Q,N,st)}Fe&&be.render(N);for(let Ye=0,tt=Pe.length;Ye<tt;Ye++){const st=Pe[Ye];Xt(E,N,st,st.viewport)}}else Q.length>0&&tn(se,Q,N,Z),Fe&&be.render(N),Xt(E,N,Z);U!==null&&(Ce.updateMultisampleRenderTarget(U),Ce.updateRenderTargetMipmap(U)),N.isScene===!0&&N.onAfterRender(w,N,Z),ft.resetDefaultState(),O=-1,L=null,I.pop(),I.length>0?(y=I[I.length-1],te===!0&&Ie.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function Ge(N,Z,ae,se){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)ae=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ve.intersectsSprite(N)){se&&xe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(le);const Ye=me.update(N),tt=N.material;tt.visible&&E.push(N,Ye,tt,ae,xe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ve.intersectsObject(N))){const Ye=me.update(N),tt=N.material;if(se&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),xe.copy(N.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),xe.copy(Ye.boundingSphere.center)),xe.applyMatrix4(N.matrixWorld).applyMatrix4(le)),Array.isArray(tt)){const st=Ye.groups;for(let Je=0,mt=st.length;Je<mt;Je++){const ct=st[Je],Tt=tt[ct.materialIndex];Tt&&Tt.visible&&E.push(N,Ye,Tt,ae,xe.z,ct)}}else tt.visible&&E.push(N,Ye,tt,ae,xe.z,null)}}const Pe=N.children;for(let Ye=0,tt=Pe.length;Ye<tt;Ye++)Ge(Pe[Ye],Z,ae,se)}function Xt(N,Z,ae,se){const Q=N.opaque,Pe=N.transmissive,Ye=N.transparent;y.setupLightsView(ae),te===!0&&Ie.setGlobalState(w.clippingPlanes,ae),se&&Se.viewport(b.copy(se)),Q.length>0&&nn(Q,Z,ae),Pe.length>0&&nn(Pe,Z,ae),Ye.length>0&&nn(Ye,Z,ae),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function tn(N,Z,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[se.id]===void 0&&(y.state.transmissionRenderTarget[se.id]=new ps(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?_c:Fr,minFilter:hs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Pe=y.state.transmissionRenderTarget[se.id],Ye=se.viewport||b;Pe.setSize(Ye.z,Ye.w);const tt=w.getRenderTarget();w.setRenderTarget(Pe),w.getClearColor(K),ne=w.getClearAlpha(),ne<1&&w.setClearColor(16777215,.5),Fe?be.render(ae):w.clear();const st=w.toneMapping;w.toneMapping=Or;const Je=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),y.setupLightsView(se),te===!0&&Ie.setGlobalState(w.clippingPlanes,se),nn(N,ae,se),Ce.updateMultisampleRenderTarget(Pe),Ce.updateRenderTargetMipmap(Pe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let ct=0,Tt=Z.length;ct<Tt;ct++){const Nt=Z[ct],Bt=Nt.object,Yt=Nt.geometry,St=Nt.material,nt=Nt.group;if(St.side===tr&&Bt.layers.test(se.layers)){const sn=St.side;St.side=Yn,St.needsUpdate=!0,he(Bt,ae,se,Yt,St,nt),St.side=sn,St.needsUpdate=!0,mt=!0}}mt===!0&&(Ce.updateMultisampleRenderTarget(Pe),Ce.updateRenderTargetMipmap(Pe))}w.setRenderTarget(tt),w.setClearColor(K,ne),Je!==void 0&&(se.viewport=Je),w.toneMapping=st}function nn(N,Z,ae){const se=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Pe=N.length;Q<Pe;Q++){const Ye=N[Q],tt=Ye.object,st=Ye.geometry,Je=se===null?Ye.material:se,mt=Ye.group;tt.layers.test(ae.layers)&&he(tt,Z,ae,st,Je,mt)}}function he(N,Z,ae,se,Q,Pe){N.onBeforeRender(w,Z,ae,se,Q,Pe),N.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(w,Z,ae,se,N,Pe),Q.transparent===!0&&Q.side===tr&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,w.renderBufferDirect(ae,Z,se,Q,N,Pe),Q.side=ar,Q.needsUpdate=!0,w.renderBufferDirect(ae,Z,se,Q,N,Pe),Q.side=tr):w.renderBufferDirect(ae,Z,se,Q,N,Pe),N.onAfterRender(w,Z,ae,se,Q,Pe)}function _t(N,Z,ae){Z.isScene!==!0&&(Z=Re);const se=Le.get(N),Q=y.state.lights,Pe=y.state.shadowsArray,Ye=Q.state.version,tt=pe.getParameters(N,Q.state,Pe,Z,ae),st=pe.getProgramCacheKey(tt);let Je=se.programs;se.environment=N.isMeshStandardMaterial?Z.environment:null,se.fog=Z.fog,se.envMap=(N.isMeshStandardMaterial?D:qe).get(N.envMap||se.environment),se.envMapRotation=se.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,Je===void 0&&(N.addEventListener("dispose",Ue),Je=new Map,se.programs=Je);let mt=Je.get(st);if(mt!==void 0){if(se.currentProgram===mt&&se.lightsStateVersion===Ye)return Sn(N,tt),mt}else tt.uniforms=pe.getUniforms(N),N.onBuild(ae,tt,w),N.onBeforeCompile(tt,w),mt=pe.acquireProgram(tt,st),Je.set(st,mt),se.uniforms=tt.uniforms;const ct=se.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ct.clippingPlanes=Ie.uniform),Sn(N,tt),se.needsLights=Ut(N),se.lightsStateVersion=Ye,se.needsLights&&(ct.ambientLightColor.value=Q.state.ambient,ct.lightProbe.value=Q.state.probe,ct.directionalLights.value=Q.state.directional,ct.directionalLightShadows.value=Q.state.directionalShadow,ct.spotLights.value=Q.state.spot,ct.spotLightShadows.value=Q.state.spotShadow,ct.rectAreaLights.value=Q.state.rectArea,ct.ltc_1.value=Q.state.rectAreaLTC1,ct.ltc_2.value=Q.state.rectAreaLTC2,ct.pointLights.value=Q.state.point,ct.pointLightShadows.value=Q.state.pointShadow,ct.hemisphereLights.value=Q.state.hemi,ct.directionalShadowMap.value=Q.state.directionalShadowMap,ct.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ct.spotShadowMap.value=Q.state.spotShadowMap,ct.spotLightMatrix.value=Q.state.spotLightMatrix,ct.spotLightMap.value=Q.state.spotLightMap,ct.pointShadowMap.value=Q.state.pointShadowMap,ct.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=mt,se.uniformsList=null,mt}function qt(N){if(N.uniformsList===null){const Z=N.currentProgram.getUniforms();N.uniformsList=ic.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function Sn(N,Z){const ae=Le.get(N);ae.outputColorSpace=Z.outputColorSpace,ae.batching=Z.batching,ae.batchingColor=Z.batchingColor,ae.instancing=Z.instancing,ae.instancingColor=Z.instancingColor,ae.instancingMorph=Z.instancingMorph,ae.skinning=Z.skinning,ae.morphTargets=Z.morphTargets,ae.morphNormals=Z.morphNormals,ae.morphColors=Z.morphColors,ae.morphTargetsCount=Z.morphTargetsCount,ae.numClippingPlanes=Z.numClippingPlanes,ae.numIntersection=Z.numClipIntersection,ae.vertexAlphas=Z.vertexAlphas,ae.vertexTangents=Z.vertexTangents,ae.toneMapping=Z.toneMapping}function $n(N,Z,ae,se,Q){Z.isScene!==!0&&(Z=Re),Ce.resetTextureUnits();const Pe=Z.fog,Ye=se.isMeshStandardMaterial?Z.environment:null,tt=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:zr,st=(se.isMeshStandardMaterial?D:qe).get(se.envMap||Ye),Je=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,mt=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ct=!!ae.morphAttributes.position,Tt=!!ae.morphAttributes.normal,Nt=!!ae.morphAttributes.color;let Bt=Or;se.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Bt=w.toneMapping);const Yt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,St=Yt!==void 0?Yt.length:0,nt=Le.get(se),sn=y.state.lights;if(te===!0&&(ie===!0||N!==L)){const mn=N===L&&se.id===O;Ie.setState(se,N,mn)}let yt=!1;se.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==sn.state.version||nt.outputColorSpace!==tt||Q.isBatchedMesh&&nt.batching===!1||!Q.isBatchedMesh&&nt.batching===!0||Q.isBatchedMesh&&nt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&nt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&nt.instancing===!1||!Q.isInstancedMesh&&nt.instancing===!0||Q.isSkinnedMesh&&nt.skinning===!1||!Q.isSkinnedMesh&&nt.skinning===!0||Q.isInstancedMesh&&nt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&nt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&nt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&nt.instancingMorph===!1&&Q.morphTexture!==null||nt.envMap!==st||se.fog===!0&&nt.fog!==Pe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ie.numPlanes||nt.numIntersection!==Ie.numIntersection)||nt.vertexAlphas!==Je||nt.vertexTangents!==mt||nt.morphTargets!==ct||nt.morphNormals!==Tt||nt.morphColors!==Nt||nt.toneMapping!==Bt||nt.morphTargetsCount!==St)&&(yt=!0):(yt=!0,nt.__version=se.version);let Dn=nt.currentProgram;yt===!0&&(Dn=_t(se,Z,Q));let Kn=!1,Zn=!1,ai=!1;const Ot=Dn.getUniforms(),cn=nt.uniforms;if(Se.useProgram(Dn.program)&&(Kn=!0,Zn=!0,ai=!0),se.id!==O&&(O=se.id,Zn=!0),Kn||L!==N){Ot.setValue(V,"projectionMatrix",N.projectionMatrix),Ot.setValue(V,"viewMatrix",N.matrixWorldInverse);const mn=Ot.map.cameraPosition;mn!==void 0&&mn.setValue(V,xe.setFromMatrixPosition(N.matrixWorld)),we.logarithmicDepthBuffer&&Ot.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Ot.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),L!==N&&(L=N,Zn=!0,ai=!0)}if(Q.isSkinnedMesh){Ot.setOptional(V,Q,"bindMatrix"),Ot.setOptional(V,Q,"bindMatrixInverse");const mn=Q.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ot.setValue(V,"boneTexture",mn.boneTexture,Ce))}Q.isBatchedMesh&&(Ot.setOptional(V,Q,"batchingTexture"),Ot.setValue(V,"batchingTexture",Q._matricesTexture,Ce),Ot.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ot.setValue(V,"batchingColorTexture",Q._colorsTexture,Ce));const Bn=ae.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&je.update(Q,ae,Dn),(Zn||nt.receiveShadow!==Q.receiveShadow)&&(nt.receiveShadow=Q.receiveShadow,Ot.setValue(V,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(cn.envMap.value=st,cn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Z.environment!==null&&(cn.envMapIntensity.value=Z.environmentIntensity),Zn&&(Ot.setValue(V,"toneMappingExposure",w.toneMappingExposure),nt.needsLights&&In(cn,ai),Pe&&se.fog===!0&&Me.refreshFogUniforms(cn,Pe),Me.refreshMaterialUniforms(cn,se,ge,Y,y.state.transmissionRenderTarget[N.id]),ic.upload(V,qt(nt),cn,Ce)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(ic.upload(V,qt(nt),cn,Ce),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Ot.setValue(V,"center",Q.center),Ot.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Ot.setValue(V,"normalMatrix",Q.normalMatrix),Ot.setValue(V,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const mn=se.uniformsGroups;for(let Bi=0,kr=mn.length;Bi<kr;Bi++){const Br=mn[Bi];lt.update(Br,Dn),lt.bind(Br,Dn)}}return Dn}function In(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function Ut(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(N,Z,ae){Le.get(N.texture).__webglTexture=Z,Le.get(N.depthTexture).__webglTexture=ae;const se=Le.get(N);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ae===void 0,se.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Z){const ae=Le.get(N);ae.__webglFramebuffer=Z,ae.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,ae=0){U=N,B=Z,R=ae;let se=!0,Q=null,Pe=!1,Ye=!1;if(N){const st=Le.get(N);st.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(V.FRAMEBUFFER,null),se=!1):st.__webglFramebuffer===void 0?Ce.setupRenderTarget(N):st.__hasExternalTextures&&Ce.rebindTextures(N,Le.get(N.texture).__webglTexture,Le.get(N.depthTexture).__webglTexture);const Je=N.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ye=!0);const mt=Le.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(mt[Z])?Q=mt[Z][ae]:Q=mt[Z],Pe=!0):N.samples>0&&Ce.useMultisampledRTT(N)===!1?Q=Le.get(N).__webglMultisampledFramebuffer:Array.isArray(mt)?Q=mt[ae]:Q=mt,b.copy(N.viewport),z.copy(N.scissor),X=N.scissorTest}else b.copy(ce).multiplyScalar(ge).floor(),z.copy(F).multiplyScalar(ge).floor(),X=J;if(Se.bindFramebuffer(V.FRAMEBUFFER,Q)&&se&&Se.drawBuffers(N,Q),Se.viewport(b),Se.scissor(z),Se.setScissorTest(X),Pe){const st=Le.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,st.__webglTexture,ae)}else if(Ye){const st=Le.get(N.texture),Je=Z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.__webglTexture,ae||0,Je)}O=-1},this.readRenderTargetPixels=function(N,Z,ae,se,Q,Pe,Ye){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Le.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Se.bindFramebuffer(V.FRAMEBUFFER,tt);try{const st=N.texture,Je=st.format,mt=st.type;if(!we.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-se&&ae>=0&&ae<=N.height-Q&&V.readPixels(Z,ae,se,Q,ze.convert(Je),ze.convert(mt),Pe)}finally{const st=U!==null?Le.get(U).__webglFramebuffer:null;Se.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(N,Z,ae,se,Q,Pe,Ye){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Le.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Se.bindFramebuffer(V.FRAMEBUFFER,tt);try{const st=N.texture,Je=st.format,mt=st.type;if(!we.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=N.width-se&&ae>=0&&ae<=N.height-Q){const ct=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),V.readPixels(Z,ae,se,Q,ze.convert(Je),ze.convert(mt),0),V.flush();const Tt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await Qy(V,Tt,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe)}finally{V.deleteBuffer(ct),V.deleteSync(Tt)}return Pe}}finally{const st=U!==null?Le.get(U).__webglFramebuffer:null;Se.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(N,Z=null,ae=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,N=arguments[1]);const se=Math.pow(2,-ae),Q=Math.floor(N.image.width*se),Pe=Math.floor(N.image.height*se),Ye=Z!==null?Z.x:0,tt=Z!==null?Z.y:0;Ce.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,ae,0,0,Ye,tt,Q,Pe),Se.unbindTexture()},this.copyTextureToTexture=function(N,Z,ae=null,se=null,Q=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,N=arguments[1],Z=arguments[2],Q=arguments[3]||0,ae=null);let Pe,Ye,tt,st,Je,mt;ae!==null?(Pe=ae.max.x-ae.min.x,Ye=ae.max.y-ae.min.y,tt=ae.min.x,st=ae.min.y):(Pe=N.image.width,Ye=N.image.height,tt=0,st=0),se!==null?(Je=se.x,mt=se.y):(Je=0,mt=0);const ct=ze.convert(Z.format),Tt=ze.convert(Z.type);Ce.setTexture2D(Z,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Nt=V.getParameter(V.UNPACK_ROW_LENGTH),Bt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Yt=V.getParameter(V.UNPACK_SKIP_PIXELS),St=V.getParameter(V.UNPACK_SKIP_ROWS),nt=V.getParameter(V.UNPACK_SKIP_IMAGES),sn=N.isCompressedTexture?N.mipmaps[Q]:N.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,sn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,sn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,st),N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Q,Je,mt,Pe,Ye,ct,Tt,sn.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Q,Je,mt,sn.width,sn.height,ct,sn.data):V.texSubImage2D(V.TEXTURE_2D,Q,Je,mt,ct,Tt,sn),V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Yt),V.pixelStorei(V.UNPACK_SKIP_ROWS,St),V.pixelStorei(V.UNPACK_SKIP_IMAGES,nt),Q===0&&Z.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(N,Z,ae=null,se=null,Q=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,se=arguments[1]||null,N=arguments[2],Z=arguments[3],Q=arguments[4]||0);let Pe,Ye,tt,st,Je,mt,ct,Tt,Nt;const Bt=N.isCompressedTexture?N.mipmaps[Q]:N.image;ae!==null?(Pe=ae.max.x-ae.min.x,Ye=ae.max.y-ae.min.y,tt=ae.max.z-ae.min.z,st=ae.min.x,Je=ae.min.y,mt=ae.min.z):(Pe=Bt.width,Ye=Bt.height,tt=Bt.depth,st=0,Je=0,mt=0),se!==null?(ct=se.x,Tt=se.y,Nt=se.z):(ct=0,Tt=0,Nt=0);const Yt=ze.convert(Z.format),St=ze.convert(Z.type);let nt;if(Z.isData3DTexture)Ce.setTexture3D(Z,0),nt=V.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)Ce.setTexture2DArray(Z,0),nt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const sn=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Dn=V.getParameter(V.UNPACK_SKIP_PIXELS),Kn=V.getParameter(V.UNPACK_SKIP_ROWS),Zn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Bt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,st),V.pixelStorei(V.UNPACK_SKIP_ROWS,Je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,mt),N.isDataTexture||N.isData3DTexture?V.texSubImage3D(nt,Q,ct,Tt,Nt,Pe,Ye,tt,Yt,St,Bt.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,Q,ct,Tt,Nt,Pe,Ye,tt,Yt,Bt.data):V.texSubImage3D(nt,Q,ct,Tt,Nt,Pe,Ye,tt,Yt,St,Bt),V.pixelStorei(V.UNPACK_ROW_LENGTH,sn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Dn),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zn),Q===0&&Z.generateMipmaps&&V.generateMipmap(nt),Se.unbindTexture()},this.initRenderTarget=function(N){Le.get(N).__webglFramebuffer===void 0&&Ce.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Ce.setTextureCube(N,0):N.isData3DTexture?Ce.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Ce.setTexture2DArray(N,0):Ce.setTexture2D(N,0),Se.unbindTexture()},this.resetState=function(){B=0,R=0,U=null,Se.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dd?"display-p3":"srgb",t.unpackColorSpace=zt.workingColorSpace===xc?"display-p3":"srgb"}}class d2 extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class aT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new $;class F0{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Ai(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ft(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array),l=Ft(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new F0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oT extends Ln{constructor(e=null,t=1,s=1,a,l,c,f,d,h=qn,m=qn,g,v){super(null,c,f,d,h,m,a,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pg extends pi{constructor(e,t,s,a=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ia=new Ht,Lg=new Ht,$l=[],Ng=new gs,lT=new Ht,io=new si,ro=new va;class h2 extends si{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pg(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<s;a++)this.setMatrixAt(a,lT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),Ng.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(Ng)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),ro.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const s=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let f=0;f<s.length;f++)s[f]=a[c+f]}raycast(e,t){const s=this.matrixWorld,a=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(s),e.ray.intersectsSphere(ro)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ia),Lg.multiplyMatrices(s,ia),io.matrixWorld=Lg,io.raycast(e,$l);for(let c=0,f=$l.length;c<f;c++){const d=$l[c];d.instanceId=l,d.object=this,t.push(d)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const s=t.morphTargetInfluences,a=s.length+1;this.morphTexture===null&&(this.morphTexture=new oT(new Float32Array(a*this.count),a,this.count,m0,rr));const l=this.morphTexture.source.data.data;let c=0;for(let h=0;h<s.length;h++)c+=s[h];const f=this.geometry.morphTargetsRelative?1:1-c,d=a*e;l[d]=f,l.set(s,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class cT extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fc=new $,dc=new $,Ig=new Ht,so=new md,Kl=new va,Hf=new $,Dg=new $;class uT extends wn{constructor(e=new kn,t=new cT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)fc.fromBufferAttribute(t,a-1),dc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=fc.distanceTo(dc);e.setAttribute("lineDistance",new Zt(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kl.copy(s.boundingSphere),Kl.applyMatrix4(a),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;Ig.copy(a).invert(),so.copy(e.ray).applyMatrix4(Ig);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=s.index,v=s.attributes.position;if(m!==null){const S=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=h){const _=m.getX(E),I=m.getX(E+1),w=Zl(this,e,so,d,_,I);w&&t.push(w)}if(this.isLineLoop){const E=m.getX(M-1),y=m.getX(S),_=Zl(this,e,so,d,E,y);_&&t.push(_)}}else{const S=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=h){const _=Zl(this,e,so,d,E,E+1);_&&t.push(_)}if(this.isLineLoop){const E=Zl(this,e,so,d,M-1,S);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Zl(i,e,t,s,a,l){const c=i.geometry.attributes.position;if(fc.fromBufferAttribute(c,a),dc.fromBufferAttribute(c,l),t.distanceSqToSegment(fc,dc,Hf,Dg)>s)return;Hf.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Hf);if(!(d<e.near||d>e.far))return{distance:d,point:Dg.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Ug=new $,Og=new $;class p2 extends uT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Ug.fromBufferAttribute(t,a),Og.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Ug.distanceTo(Og);e.setAttribute("lineDistance",new Zt(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let a=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let f=0,d=l-1,h;for(;f<=d;)if(a=Math.floor(f+(d-f)/2),h=s[a]-c,h<0)f=a+1;else if(h>0)d=a-1;else{d=a;break}if(a=d,s[a]===c)return a/(l-1);const m=s[a],v=s[a+1]-m,S=(c-m)/v;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),d=t||(c.isVector2?new $e:new $);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new $,a=[],l=[],c=[],f=new $,d=new Ht;for(let S=0;S<=e;S++){const M=S/e;a[S]=this.getTangentAt(M,new $)}l[0]=new $,c[0]=new $;let h=Number.MAX_VALUE;const m=Math.abs(a[0].x),g=Math.abs(a[0].y),v=Math.abs(a[0].z);m<=h&&(h=m,s.set(1,0,0)),g<=h&&(h=g,s.set(0,1,0)),v<=h&&s.set(0,0,1),f.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(a[S-1],a[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(dn(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(d.makeRotationAxis(f,M))}c[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(dn(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(d.makeRotationAxis(a[M],S*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yd extends ki{constructor(e=0,t=0,s=1,a=1,l=0,c=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=d}getPoint(e,t=new $e){const s=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=d-this.aX,S=h-this.aY;d=v*m-S*g+this.aX,h=v*g+S*m+this.aY}return s.set(d,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fT extends yd{constructor(e,t,s,a,l,c){super(e,t,s,s,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Sd(){let i=0,e=0,t=0,s=0;function a(l,c,f,d){i=l,e=f,t=-3*l+3*c-2*f-d,s=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){a(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,m,g){let v=(c-l)/h-(f-l)/(h+m)+(f-c)/m,S=(f-c)/m-(d-c)/(m+g)+(d-f)/g;v*=m,S*=m,a(c,f,v,S)},calc:function(l){const c=l*l,f=c*l;return i+e*l+t*c+s*f}}}const Jl=new $,Vf=new Sd,Gf=new Sd,Wf=new Sd;class dT extends ki{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new $){const s=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,m;this.closed||f>0?h=a[(f-1)%l]:(Jl.subVectors(a[0],a[1]).add(a[0]),h=Jl);const g=a[f%l],v=a[(f+1)%l];if(this.closed||f+2<l?m=a[(f+2)%l]:(Jl.subVectors(a[l-1],a[l-2]).add(a[l-1]),m=Jl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),S),E=Math.pow(g.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(m),S);E<1e-4&&(E=1),M<1e-4&&(M=E),y<1e-4&&(y=E),Vf.initNonuniformCatmullRom(h.x,g.x,v.x,m.x,M,E,y),Gf.initNonuniformCatmullRom(h.y,g.y,v.y,m.y,M,E,y),Wf.initNonuniformCatmullRom(h.z,g.z,v.z,m.z,M,E,y)}else this.curveType==="catmullrom"&&(Vf.initCatmullRom(h.x,g.x,v.x,m.x,this.tension),Gf.initCatmullRom(h.y,g.y,v.y,m.y,this.tension),Wf.initCatmullRom(h.z,g.z,v.z,m.z,this.tension));return s.set(Vf.calc(d),Gf.calc(d),Wf.calc(d)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new $().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fg(i,e,t,s,a){const l=(s-e)*.5,c=(a-t)*.5,f=i*i,d=i*f;return(2*t-2*s+l+c)*d+(-3*t+3*s-2*l-c)*f+l*i+t}function hT(i,e){const t=1-i;return t*t*e}function pT(i,e){return 2*(1-i)*i*e}function mT(i,e){return i*i*e}function uo(i,e,t,s){return hT(i,e)+pT(i,t)+mT(i,s)}function gT(i,e){const t=1-i;return t*t*t*e}function vT(i,e){const t=1-i;return 3*t*t*i*e}function _T(i,e){return 3*(1-i)*i*i*e}function xT(i,e){return i*i*i*e}function fo(i,e,t,s,a){return gT(i,e)+vT(i,t)+_T(i,s)+xT(i,a)}class z0 extends ki{constructor(e=new $e,t=new $e,s=new $e,a=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return s.set(fo(e,a.x,l.x,c.x,f.x),fo(e,a.y,l.y,c.y,f.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yT extends ki{constructor(e=new $,t=new $,s=new $,a=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new $){const s=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return s.set(fo(e,a.x,l.x,c.x,f.x),fo(e,a.y,l.y,c.y,f.y),fo(e,a.z,l.z,c.z,f.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k0 extends ki{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ST extends ki{constructor(e=new $,t=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new $){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends ki{constructor(e=new $e,t=new $e,s=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(uo(e,a.x,l.x,c.x),uo(e,a.y,l.y,c.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H0 extends ki{constructor(e=new $,t=new $,s=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new $){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(uo(e,a.x,l.x,c.x),uo(e,a.y,l.y,c.y),uo(e,a.z,l.z,c.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V0 extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const s=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,d=a[c===0?c:c-1],h=a[c],m=a[c>a.length-2?a.length-1:c+1],g=a[c>a.length-3?a.length-1:c+2];return s.set(Fg(f,d.x,h.x,m.x,g.x),Fg(f,d.y,h.y,m.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new $e().fromArray(a))}return this}}var hc=Object.freeze({__proto__:null,ArcCurve:fT,CatmullRomCurve3:dT,CubicBezierCurve:z0,CubicBezierCurve3:yT,EllipseCurve:yd,LineCurve:k0,LineCurve3:ST,QuadraticBezierCurve:B0,QuadraticBezierCurve3:H0,SplineCurve:V0});class MT extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[s](t,e))}return this}getPoint(e,t){const s=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=s){const c=a[l]-s,f=this.curves[l],d=f.getLength(),h=d===0?0:1-c/d;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let s=0,a=this.curves.length;s<a;s++)t+=this.curves[s].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let s;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,d=c.getPoints(f);for(let h=0;h<d.length;h++){const m=d[h];s&&s.equals(m)||(t.push(m),s=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,s=this.curves.length;t<s;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(new hc[a.type]().fromJSON(a))}return this}}class rd extends MT{constructor(e){super(),this.type="Path",this.currentPoint=new $e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,s=e.length;t<s;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new k0(this.currentPoint.clone(),new $e(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,a){const l=new B0(this.currentPoint.clone(),new $e(e,t),new $e(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}bezierCurveTo(e,t,s,a,l,c){const f=new z0(this.currentPoint.clone(),new $e(e,t),new $e(s,a),new $e(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),s=new V0(t);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,s,a,l,c){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+f,t+d,s,a,l,c),this}absarc(e,t,s,a,l,c){return this.absellipse(e,t,s,s,a,l,c),this}ellipse(e,t,s,a,l,c,f,d){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,s,a,l,c,f,d),this}absellipse(e,t,s,a,l,c,f,d){const h=new yd(e,t,s,a,l,c,f,d);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class G0 extends kn{constructor(e=1,t=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:s,thetaLength:a},t=Math.max(3,t);const l=[],c=[],f=[],d=[],h=new $,m=new $e;c.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const S=s+g/t*a;h.x=e*Math.cos(S),h.y=e*Math.sin(S),c.push(h.x,h.y,h.z),f.push(0,0,1),m.x=(c[v]/e+1)/2,m.y=(c[v+1]/e+1)/2,d.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new G0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class W0 extends kn{constructor(e=1,t=1,s=1,a=32,l=1,c=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d};const h=this;a=Math.floor(a),l=Math.floor(l);const m=[],g=[],v=[],S=[];let M=0;const E=[],y=s/2;let _=0;I(),c===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(S,2));function I(){const P=new $,B=new $;let R=0;const U=(t-e)/s;for(let O=0;O<=l;O++){const L=[],b=O/l,z=b*(t-e)+e;for(let X=0;X<=a;X++){const K=X/a,ne=K*d+f,fe=Math.sin(ne),Y=Math.cos(ne);B.x=z*fe,B.y=-b*s+y,B.z=z*Y,g.push(B.x,B.y,B.z),P.set(fe,U,Y).normalize(),v.push(P.x,P.y,P.z),S.push(K,1-b),L.push(M++)}E.push(L)}for(let O=0;O<a;O++)for(let L=0;L<l;L++){const b=E[L][O],z=E[L+1][O],X=E[L+1][O+1],K=E[L][O+1];m.push(b,z,K),m.push(z,X,K),R+=6}h.addGroup(_,R,0),_+=R}function w(P){const B=M,R=new $e,U=new $;let O=0;const L=P===!0?e:t,b=P===!0?1:-1;for(let X=1;X<=a;X++)g.push(0,y*b,0),v.push(0,b,0),S.push(.5,.5),M++;const z=M;for(let X=0;X<=a;X++){const ne=X/a*d+f,fe=Math.cos(ne),Y=Math.sin(ne);U.x=L*Y,U.y=y*b,U.z=L*fe,g.push(U.x,U.y,U.z),v.push(0,b,0),R.x=fe*.5+.5,R.y=Y*.5*b+.5,S.push(R.x,R.y),M++}for(let X=0;X<a;X++){const K=B+X,ne=z+X;P===!0?m.push(ne,ne+1,K):m.push(ne+1,ne,K),O+=3}h.addGroup(_,O,P===!0?1:2),_+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new W0(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class rc extends rd{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let s=0,a=this.holes.length;s<a;s++)t[s]=this.holes[s].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,s=this.holes.length;t<s;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(new rd().fromJSON(a))}return this}}const ET={triangulate:function(i,e,t=2){const s=e&&e.length,a=s?e[0]*t:i.length;let l=j0(i,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,d,h,m,g,v,S;if(s&&(l=bT(i,e,l,t)),i.length>80*t){f=h=i[0],d=m=i[1];for(let M=t;M<a;M+=t)g=i[M],v=i[M+1],g<f&&(f=g),v<d&&(d=v),g>h&&(h=g),v>m&&(m=v);S=Math.max(h-f,m-d),S=S!==0?32767/S:0}return vo(l,c,t,f,d,S,0),c}};function j0(i,e,t,s,a){let l,c;if(a===kT(i,e,t,s)>0)for(l=e;l<t;l+=s)c=zg(l,i[l],i[l+1],c);else for(l=t-s;l>=e;l-=s)c=zg(l,i[l],i[l+1],c);return c&&Mc(c,c.next)&&(xo(c),c=c.next),c}function ms(i,e){if(!i)return i;e||(e=i);let t=i,s;do if(s=!1,!t.steiner&&(Mc(t,t.next)||en(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function vo(i,e,t,s,a,l,c){if(!i)return;!c&&l&&IT(i,s,a,l);let f=i,d,h;for(;i.prev!==i.next;){if(d=i.prev,h=i.next,l?TT(i,s,a,l):wT(i)){e.push(d.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),xo(i),i=h.next,f=h.next;continue}if(i=h,i===f){c?c===1?(i=AT(ms(i),e,t),vo(i,e,t,s,a,l,2)):c===2&&CT(i,e,t,s,a,l):vo(ms(i),e,t,s,a,l,1);break}}}function wT(i){const e=i.prev,t=i,s=i.next;if(en(e,t,s)>=0)return!1;const a=e.x,l=t.x,c=s.x,f=e.y,d=t.y,h=s.y,m=a<l?a<c?a:c:l<c?l:c,g=f<d?f<h?f:h:d<h?d:h,v=a>l?a>c?a:c:l>c?l:c,S=f>d?f>h?f:h:d>h?d:h;let M=s.next;for(;M!==e;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=S&&sa(a,f,l,d,c,h,M.x,M.y)&&en(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function TT(i,e,t,s){const a=i.prev,l=i,c=i.next;if(en(a,l,c)>=0)return!1;const f=a.x,d=l.x,h=c.x,m=a.y,g=l.y,v=c.y,S=f<d?f<h?f:h:d<h?d:h,M=m<g?m<v?m:v:g<v?g:v,E=f>d?f>h?f:h:d>h?d:h,y=m>g?m>v?m:v:g>v?g:v,_=sd(S,M,e,t,s),I=sd(E,y,e,t,s);let w=i.prevZ,P=i.nextZ;for(;w&&w.z>=_&&P&&P.z<=I;){if(w.x>=S&&w.x<=E&&w.y>=M&&w.y<=y&&w!==a&&w!==c&&sa(f,m,d,g,h,v,w.x,w.y)&&en(w.prev,w,w.next)>=0||(w=w.prevZ,P.x>=S&&P.x<=E&&P.y>=M&&P.y<=y&&P!==a&&P!==c&&sa(f,m,d,g,h,v,P.x,P.y)&&en(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;w&&w.z>=_;){if(w.x>=S&&w.x<=E&&w.y>=M&&w.y<=y&&w!==a&&w!==c&&sa(f,m,d,g,h,v,w.x,w.y)&&en(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;P&&P.z<=I;){if(P.x>=S&&P.x<=E&&P.y>=M&&P.y<=y&&P!==a&&P!==c&&sa(f,m,d,g,h,v,P.x,P.y)&&en(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function AT(i,e,t){let s=i;do{const a=s.prev,l=s.next.next;!Mc(a,l)&&X0(a,s,s.next,l)&&_o(a,l)&&_o(l,a)&&(e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),xo(s),xo(s.next),s=i=l),s=s.next}while(s!==i);return ms(s)}function CT(i,e,t,s,a,l){let c=i;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&OT(c,f)){let d=q0(c,f);c=ms(c,c.next),d=ms(d,d.next),vo(c,e,t,s,a,l,0),vo(d,e,t,s,a,l,0);return}f=f.next}c=c.next}while(c!==i)}function bT(i,e,t,s){const a=[];let l,c,f,d,h;for(l=0,c=e.length;l<c;l++)f=e[l]*s,d=l<c-1?e[l+1]*s:i.length,h=j0(i,f,d,s,!1),h===h.next&&(h.steiner=!0),a.push(UT(h));for(a.sort(RT),l=0;l<a.length;l++)t=PT(a[l],t);return t}function RT(i,e){return i.x-e.x}function PT(i,e){const t=LT(i,e);if(!t)return e;const s=q0(t,i);return ms(s,s.next),ms(t,t.next)}function LT(i,e){let t=e,s=-1/0,a;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=l&&v>s&&(s=v,a=t.x<t.next.x?t:t.next,v===l))return a}t=t.next}while(t!==e);if(!a)return null;const f=a,d=a.x,h=a.y;let m=1/0,g;t=a;do l>=t.x&&t.x>=d&&l!==t.x&&sa(c<h?l:s,c,d,h,c<h?s:l,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(l-t.x),_o(t,i)&&(g<m||g===m&&(t.x>a.x||t.x===a.x&&NT(a,t)))&&(a=t,m=g)),t=t.next;while(t!==f);return a}function NT(i,e){return en(i.prev,i,e.prev)<0&&en(e.next,i,i.next)<0}function IT(i,e,t,s){let a=i;do a.z===0&&(a.z=sd(a.x,a.y,e,t,s)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,DT(a)}function DT(i){let e,t,s,a,l,c,f,d,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,s=t,f=0,e=0;e<h&&(f++,s=s.nextZ,!!s);e++);for(d=h;f>0||d>0&&s;)f!==0&&(d===0||!s||t.z<=s.z)?(a=t,t=t.nextZ,f--):(a=s,s=s.nextZ,d--),l?l.nextZ=a:i=a,a.prevZ=l,l=a;t=s}l.nextZ=null,h*=2}while(c>1);return i}function sd(i,e,t,s,a){return i=(i-t)*a|0,e=(e-s)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function UT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sa(i,e,t,s,a,l,c,f){return(a-c)*(e-f)>=(i-c)*(l-f)&&(i-c)*(s-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(a-c)*(s-f)}function OT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!FT(i,e)&&(_o(i,e)&&_o(e,i)&&zT(i,e)&&(en(i.prev,i,e.prev)||en(i,e.prev,e))||Mc(i,e)&&en(i.prev,i,i.next)>0&&en(e.prev,e,e.next)>0)}function en(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Mc(i,e){return i.x===e.x&&i.y===e.y}function X0(i,e,t,s){const a=ec(en(i,e,t)),l=ec(en(i,e,s)),c=ec(en(t,s,i)),f=ec(en(t,s,e));return!!(a!==l&&c!==f||a===0&&Ql(i,t,e)||l===0&&Ql(i,s,e)||c===0&&Ql(t,i,s)||f===0&&Ql(t,e,s))}function Ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function FT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&X0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _o(i,e){return en(i.prev,i,i.next)<0?en(i,e,i.next)>=0&&en(i,i.prev,e)>=0:en(i,e,i.prev)<0||en(i,i.next,e)<0}function zT(i,e){let t=i,s=!1;const a=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==i);return s}function q0(i,e){const t=new ad(i.i,i.x,i.y),s=new ad(e.i,e.x,e.y),a=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function zg(i,e,t,s){const a=new ad(i,e,t);return s?(a.next=s.next,a.prev=s,s.next.prev=a,s.next=a):(a.prev=a,a.next=a),a}function xo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ad(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kT(i,e,t,s){let a=0;for(let l=e,c=t-s;l<t;l+=s)a+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return a}class ca{static area(e){const t=e.length;let s=0;for(let a=t-1,l=0;l<t;a=l++)s+=e[a].x*e[l].y-e[l].x*e[a].y;return s*.5}static isClockWise(e){return ca.area(e)<0}static triangulateShape(e,t){const s=[],a=[],l=[];kg(e),Bg(s,e);let c=e.length;t.forEach(kg);for(let d=0;d<t.length;d++)a.push(c),c+=t[d].length,Bg(s,t[d]);const f=ET.triangulate(s,a);for(let d=0;d<f.length;d+=3)l.push(f.slice(d,d+3));return l}}function kg(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Y0 extends kn{constructor(e=new rc([new $e(.5,.5),new $e(-.5,.5),new $e(-.5,-.5),new $e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,a=[],l=[];for(let f=0,d=e.length;f<d;f++){const h=e[f];c(h)}this.setAttribute("position",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2)),this.computeVertexNormals();function c(f){const d=[],h=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,I=t.UVGenerator!==void 0?t.UVGenerator:BT;let w,P=!1,B,R,U,O;_&&(w=_.getSpacedPoints(m),P=!0,v=!1,B=_.computeFrenetFrames(m,!1),R=new $,U=new $,O=new $),v||(y=0,S=0,M=0,E=0);const L=f.extractPoints(h);let b=L.shape;const z=L.holes;if(!ca.isClockWise(b)){b=b.reverse();for(let ye=0,Ee=z.length;ye<Ee;ye++){const we=z[ye];ca.isClockWise(we)&&(z[ye]=we.reverse())}}const K=ca.triangulateShape(b,z),ne=b;for(let ye=0,Ee=z.length;ye<Ee;ye++){const we=z[ye];b=b.concat(we)}function fe(ye,Ee,we){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ye.clone().addScaledVector(Ee,we)}const Y=b.length,ge=K.length;function W(ye,Ee,we){let Se,Ae,Le;const Ce=ye.x-Ee.x,qe=ye.y-Ee.y,D=we.x-ye.x,A=we.y-ye.y,ee=Ce*Ce+qe*qe,me=Ce*A-qe*D;if(Math.abs(me)>Number.EPSILON){const pe=Math.sqrt(ee),Me=Math.sqrt(D*D+A*A),Xe=Ee.x-qe/pe,Ne=Ee.y+Ce/pe,Ie=we.x-A/Me,et=we.y+D/Me,be=((Ie-Xe)*A-(et-Ne)*D)/(Ce*A-qe*D);Se=Xe+Ce*be-ye.x,Ae=Ne+qe*be-ye.y;const je=Se*Se+Ae*Ae;if(je<=2)return new $e(Se,Ae);Le=Math.sqrt(je/2)}else{let pe=!1;Ce>Number.EPSILON?D>Number.EPSILON&&(pe=!0):Ce<-Number.EPSILON?D<-Number.EPSILON&&(pe=!0):Math.sign(qe)===Math.sign(A)&&(pe=!0),pe?(Se=-qe,Ae=Ce,Le=Math.sqrt(ee)):(Se=Ce,Ae=qe,Le=Math.sqrt(ee/2))}return new $e(Se/Le,Ae/Le)}const ue=[];for(let ye=0,Ee=ne.length,we=Ee-1,Se=ye+1;ye<Ee;ye++,we++,Se++)we===Ee&&(we=0),Se===Ee&&(Se=0),ue[ye]=W(ne[ye],ne[we],ne[Se]);const ce=[];let F,J=ue.concat();for(let ye=0,Ee=z.length;ye<Ee;ye++){const we=z[ye];F=[];for(let Se=0,Ae=we.length,Le=Ae-1,Ce=Se+1;Se<Ae;Se++,Le++,Ce++)Le===Ae&&(Le=0),Ce===Ae&&(Ce=0),F[Se]=W(we[Se],we[Le],we[Ce]);ce.push(F),J=J.concat(F)}for(let ye=0;ye<y;ye++){const Ee=ye/y,we=S*Math.cos(Ee*Math.PI/2),Se=M*Math.sin(Ee*Math.PI/2)+E;for(let Ae=0,Le=ne.length;Ae<Le;Ae++){const Ce=fe(ne[Ae],ue[Ae],Se);xe(Ce.x,Ce.y,-we)}for(let Ae=0,Le=z.length;Ae<Le;Ae++){const Ce=z[Ae];F=ce[Ae];for(let qe=0,D=Ce.length;qe<D;qe++){const A=fe(Ce[qe],F[qe],Se);xe(A.x,A.y,-we)}}}const Ve=M+E;for(let ye=0;ye<Y;ye++){const Ee=v?fe(b[ye],J[ye],Ve):b[ye];P?(U.copy(B.normals[0]).multiplyScalar(Ee.x),R.copy(B.binormals[0]).multiplyScalar(Ee.y),O.copy(w[0]).add(U).add(R),xe(O.x,O.y,O.z)):xe(Ee.x,Ee.y,0)}for(let ye=1;ye<=m;ye++)for(let Ee=0;Ee<Y;Ee++){const we=v?fe(b[Ee],J[Ee],Ve):b[Ee];P?(U.copy(B.normals[ye]).multiplyScalar(we.x),R.copy(B.binormals[ye]).multiplyScalar(we.y),O.copy(w[ye]).add(U).add(R),xe(O.x,O.y,O.z)):xe(we.x,we.y,g/m*ye)}for(let ye=y-1;ye>=0;ye--){const Ee=ye/y,we=S*Math.cos(Ee*Math.PI/2),Se=M*Math.sin(Ee*Math.PI/2)+E;for(let Ae=0,Le=ne.length;Ae<Le;Ae++){const Ce=fe(ne[Ae],ue[Ae],Se);xe(Ce.x,Ce.y,g+we)}for(let Ae=0,Le=z.length;Ae<Le;Ae++){const Ce=z[Ae];F=ce[Ae];for(let qe=0,D=Ce.length;qe<D;qe++){const A=fe(Ce[qe],F[qe],Se);P?xe(A.x,A.y+w[m-1].y,w[m-1].x+we):xe(A.x,A.y,g+we)}}}te(),ie();function te(){const ye=a.length/3;if(v){let Ee=0,we=Y*Ee;for(let Se=0;Se<ge;Se++){const Ae=K[Se];Re(Ae[2]+we,Ae[1]+we,Ae[0]+we)}Ee=m+y*2,we=Y*Ee;for(let Se=0;Se<ge;Se++){const Ae=K[Se];Re(Ae[0]+we,Ae[1]+we,Ae[2]+we)}}else{for(let Ee=0;Ee<ge;Ee++){const we=K[Ee];Re(we[2],we[1],we[0])}for(let Ee=0;Ee<ge;Ee++){const we=K[Ee];Re(we[0]+Y*m,we[1]+Y*m,we[2]+Y*m)}}s.addGroup(ye,a.length/3-ye,0)}function ie(){const ye=a.length/3;let Ee=0;le(ne,Ee),Ee+=ne.length;for(let we=0,Se=z.length;we<Se;we++){const Ae=z[we];le(Ae,Ee),Ee+=Ae.length}s.addGroup(ye,a.length/3-ye,1)}function le(ye,Ee){let we=ye.length;for(;--we>=0;){const Se=we;let Ae=we-1;Ae<0&&(Ae=ye.length-1);for(let Le=0,Ce=m+y*2;Le<Ce;Le++){const qe=Y*Le,D=Y*(Le+1),A=Ee+Se+qe,ee=Ee+Ae+qe,me=Ee+Ae+D,pe=Ee+Se+D;Fe(A,ee,me,pe)}}}function xe(ye,Ee,we){d.push(ye),d.push(Ee),d.push(we)}function Re(ye,Ee,we){Be(ye),Be(Ee),Be(we);const Se=a.length/3,Ae=I.generateTopUV(s,a,Se-3,Se-2,Se-1);V(Ae[0]),V(Ae[1]),V(Ae[2])}function Fe(ye,Ee,we,Se){Be(ye),Be(Ee),Be(Se),Be(Ee),Be(we),Be(Se);const Ae=a.length/3,Le=I.generateSideWallUV(s,a,Ae-6,Ae-3,Ae-2,Ae-1);V(Le[0]),V(Le[1]),V(Le[3]),V(Le[1]),V(Le[2]),V(Le[3])}function Be(ye){a.push(d[ye*3+0]),a.push(d[ye*3+1]),a.push(d[ye*3+2])}function V(ye){l.push(ye.x),l.push(ye.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,s=this.parameters.options;return HT(t,s,e)}static fromJSON(e,t){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];s.push(f)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new hc[a.type]().fromJSON(a)),new Y0(s,e.options)}}const BT={generateTopUV:function(i,e,t,s,a){const l=e[t*3],c=e[t*3+1],f=e[s*3],d=e[s*3+1],h=e[a*3],m=e[a*3+1];return[new $e(l,c),new $e(f,d),new $e(h,m)]},generateSideWallUV:function(i,e,t,s,a,l){const c=e[t*3],f=e[t*3+1],d=e[t*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[a*3],S=e[a*3+1],M=e[a*3+2],E=e[l*3],y=e[l*3+1],_=e[l*3+2];return Math.abs(f-m)<Math.abs(c-h)?[new $e(c,1-d),new $e(h,1-g),new $e(v,1-M),new $e(E,1-_)]:[new $e(f,1-d),new $e(m,1-g),new $e(S,1-M),new $e(y,1-_)]}};function HT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let s=0,a=i.length;s<a;s++){const l=i[s];t.shapes.push(l.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pc extends kn{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const d=Math.min(c+f,Math.PI);let h=0;const m=[],g=new $,v=new $,S=[],M=[],E=[],y=[];for(let _=0;_<=s;_++){const I=[],w=_/s;let P=0;_===0&&c===0?P=.5/t:_===s&&d===Math.PI&&(P=-.5/t);for(let B=0;B<=t;B++){const R=B/t;g.x=-e*Math.cos(a+R*l)*Math.sin(c+w*f),g.y=e*Math.cos(c+w*f),g.z=e*Math.sin(a+R*l)*Math.sin(c+w*f),M.push(g.x,g.y,g.z),v.copy(g).normalize(),E.push(v.x,v.y,v.z),y.push(R+P,1-w),I.push(h++)}m.push(I)}for(let _=0;_<s;_++)for(let I=0;I<t;I++){const w=m[_][I+1],P=m[_][I],B=m[_+1][I],R=m[_+1][I+1];(_!==0||c>0)&&S.push(w,P,R),(_!==s-1||d<Math.PI)&&S.push(P,B,R)}this.setIndex(S),this.setAttribute("position",new Zt(M,3)),this.setAttribute("normal",new Zt(E,3)),this.setAttribute("uv",new Zt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $0 extends kn{constructor(e=new H0(new $(-1,-1,0),new $(-1,1,0),new $(1,1,0)),t=64,s=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const f=new $,d=new $,h=new $e;let m=new $;const g=[],v=[],S=[],M=[];E(),this.setIndex(M),this.setAttribute("position",new Zt(g,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(S,2));function E(){for(let w=0;w<t;w++)y(w);y(l===!1?t:0),I(),_()}function y(w){m=e.getPointAt(w/t,m);const P=c.normals[w],B=c.binormals[w];for(let R=0;R<=a;R++){const U=R/a*Math.PI*2,O=Math.sin(U),L=-Math.cos(U);d.x=L*P.x+O*B.x,d.y=L*P.y+O*B.y,d.z=L*P.z+O*B.z,d.normalize(),v.push(d.x,d.y,d.z),f.x=m.x+s*d.x,f.y=m.y+s*d.y,f.z=m.z+s*d.z,g.push(f.x,f.y,f.z)}}function _(){for(let w=1;w<=t;w++)for(let P=1;P<=a;P++){const B=(a+1)*(w-1)+(P-1),R=(a+1)*w+(P-1),U=(a+1)*w+P,O=(a+1)*(w-1)+P;M.push(B,R,O),M.push(R,U,O)}}function I(){for(let w=0;w<=t;w++)for(let P=0;P<=a;P++)h.x=w/t,h.y=P/a,S.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $0(new hc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class m2 extends kn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],s=new Set,a=new $,l=new $;if(e.index!==null){const c=e.attributes.position,f=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:f.count,materialIndex:0}]);for(let h=0,m=d.length;h<m;++h){const g=d[h],v=g.start,S=g.count;for(let M=v,E=v+S;M<E;M+=3)for(let y=0;y<3;y++){const _=f.getX(M+y),I=f.getX(M+(y+1)%3);a.fromBufferAttribute(c,_),l.fromBufferAttribute(c,I),Hg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}}else{const c=e.attributes.position;for(let f=0,d=c.count/3;f<d;f++)for(let h=0;h<3;h++){const m=3*f+h,g=3*f+(h+1)%3;a.fromBufferAttribute(c,m),l.fromBufferAttribute(c,g),Hg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new Zt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Hg(i,e,t){const s=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(s)===!0||t.has(a)===!0?!1:(t.add(s),t.add(a),!0)}class g2 extends vs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v2 extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Vg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class VT{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const S=h[g],M=h[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const GT=new VT;class Md{constructor(e){this.manager=e!==void 0?e:GT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Md.DEFAULT_MATERIAL_NAME="__DEFAULT";class WT extends Md{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Vg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=go("img");function d(){m(),Vg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){m(),a&&a(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class jT extends Md{constructor(e){super(e)}load(e,t,s,a){const l=new Ln,c=new WT(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class K0 extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jf=new Ht,Gg=new $,Wg=new $;class XT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _d,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gg),Wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wg),t.updateMatrixWorld(),jf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qT extends XT{constructor(){super(new P0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _2 extends K0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new qT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class x2 extends K0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class y2 extends kn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class S2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jg(){return(typeof performance>"u"?Date:performance).now()}class M2 extends aT{constructor(e,t,s=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Xg=new Ht;class E2{constructor(e,t,s=0,a=1/0){this.ray=new md(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new gd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xg),this}intersectObject(e,t=!0,s=[]){return od(e,this,s,t),s.sort(qg),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)od(e[a],this,s,t);return s.sort(qg),s}}function qg(i,e){return i.distance-e.distance}function od(i,e,t,s){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=i.children;for(let c=0,f=l.length;c<f;c++)od(l[c],e,t,!0)}}class w2{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yg=new $,tc=new $;class T2{constructor(e=new $,t=new $){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Yg.subVectors(e,this.start),tc.subVectors(this.end,this.start);const s=tc.dot(tc);let l=tc.dot(Yg)/s;return t&&(l=dn(l,0,1)),l}closestPointToPoint(e,t,s){const a=this.closestPointToPointParameter(e,t);return this.delta(s).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class A2{constructor(){this.type="ShapePath",this.color=new Rt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,s,a){return this.currentPath.quadraticCurveTo(e,t,s,a),this}bezierCurveTo(e,t,s,a,l,c){return this.currentPath.bezierCurveTo(e,t,s,a,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const I=[];for(let w=0,P=_.length;w<P;w++){const B=_[w],R=new rc;R.curves=B.curves,I.push(R)}return I}function s(_,I){const w=I.length;let P=!1;for(let B=w-1,R=0;R<w;B=R++){let U=I[B],O=I[R],L=O.x-U.x,b=O.y-U.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(U=I[R],L=-L,O=I[B],b=-b),_.y<U.y||_.y>O.y)continue;if(_.y===U.y){if(_.x===U.x)return!0}else{const z=b*(_.x-U.x)-L*(_.y-U.y);if(z===0)return!0;if(z<0)continue;P=!P}}else{if(_.y!==U.y)continue;if(O.x<=_.x&&_.x<=U.x||U.x<=_.x&&_.x<=O.x)return!0}}return P}const a=ca.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,f,d;const h=[];if(l.length===1)return f=l[0],d=new rc,d.curves=f.curves,h.push(d),h;let m=!a(l[0].getPoints());m=e?!m:m;const g=[],v=[];let S=[],M=0,E;v[M]=void 0,S[M]=[];for(let _=0,I=l.length;_<I;_++)f=l[_],E=f.getPoints(),c=a(E),c=e?!c:c,c?(!m&&v[M]&&M++,v[M]={s:new rc,p:E},v[M].s.curves=f.curves,m&&M++,S[M]=[]):S[M].push({h:f,p:E[0]});if(!v[0])return t(l);if(v.length>1){let _=!1,I=0;for(let w=0,P=v.length;w<P;w++)g[w]=[];for(let w=0,P=v.length;w<P;w++){const B=S[w];for(let R=0;R<B.length;R++){const U=B[R];let O=!0;for(let L=0;L<v.length;L++)s(U.p,v[L].p)&&(w!==L&&I++,O?(O=!1,g[L].push(U)):_=!0);O&&g[w].push(U)}}I>0&&_===!1&&(S=g)}let y;for(let _=0,I=v.length;_<I;_++){d=v[_].s,h.push(d),y=S[_];for(let w=0,P=y.length;w<P;w++)d.holes.push(y[w].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ud);const YT=i=>{const e=Math.floor((Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate())-Date.UTC(i.getUTCFullYear(),0,0))/864e5),t=i.getUTCHours()*60+i.getUTCMinutes()+i.getUTCSeconds()/60,s=2*Math.PI*(e-1+(t/60-12)/24)/365,a=.006918-.399912*Math.cos(s)+.070257*Math.sin(s)-.006758*Math.cos(2*s)+907e-6*Math.sin(2*s)-.002697*Math.cos(3*s)+.00148*Math.sin(3*s),l=229.18*(75e-6+.001868*Math.cos(s)-.032077*Math.sin(s)-.014615*Math.cos(2*s)-.040849*Math.sin(2*s)),c=(720-(t+l))/4*(Math.PI/180);return new $(Math.cos(a)*Math.sin(c),Math.sin(a),Math.cos(a)*Math.cos(c)).normalize()},$T=i=>`https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&REQUEST=GetMap&VERSION=1.1.1&LAYERS=MODIS_Terra_Cloud_Fraction_Day&STYLES=&FORMAT=image/png&TRANSPARENT=true&SRS=EPSG:4326&WIDTH=2048&HEIGHT=1024&BBOX=-180,-90,180,90&TIME=${i.toISOString().slice(0,10)}`,KT=({globe:i,time:e,nightEnabled:t,cloudsEnabled:s})=>{const a=Te.useRef(null),l=Te.useRef(null),c=e.getTime(),f=Te.useMemo(()=>YT(new Date(c)),[c]),d=Te.useMemo(()=>$T(new Date),[]),h=Te.useRef(f),m=Te.useRef(t);return h.current=f,m.current=t,Te.useEffect(()=>{if(!i)return;const g=i.getGlobeRadius(),v=new pc(g*1.002,64,32),S=new or({transparent:!0,depthWrite:!1,uniforms:{sunDirection:{value:h.current.clone()},opacity:{value:.72}},vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDirection; uniform float opacity; varying vec3 vNormal; void main() { float daylight = dot(normalize(vNormal), normalize(sunDirection)); float night = smoothstep(0.12, -0.22, daylight); gl_FragColor = vec4(0.005, 0.012, 0.04, night * opacity); }"}),M=new si(v,S);return M.name="orbitradar-night-side",M.visible=m.current,i.scene().add(M),a.current=M,()=>{i.scene().remove(M),v.dispose(),S.dispose(),a.current===M&&(a.current=null)}},[i]),Te.useEffect(()=>{const g=a.current;if(!g)return;g.visible=t,g.material.uniforms.sunDirection.value.copy(f)},[t,f]),Te.useEffect(()=>{var S,M,E;if(!i||!s){l.current&&i&&i.scene().remove(l.current),(S=l.current)==null||S.geometry.dispose(),(E=(M=l.current)==null?void 0:M.material)==null||E.dispose(),l.current=null;return}const g=new jT;g.setCrossOrigin("anonymous");let v=!1;return g.load(d,y=>{if(v||!i){y.dispose();return}const _=new si(new pc(i.getGlobeRadius()*1.008,64,32),new vd({map:y,transparent:!0,opacity:.58,depthWrite:!1,side:ar}));_.name="orbitradar-cloud-cover",i.scene().add(_),l.current=_},void 0,()=>{}),()=>{var y,_,I;v=!0,l.current&&i&&i.scene().remove(l.current),(y=l.current)==null||y.geometry.dispose(),(I=(_=l.current)==null?void 0:_.material)==null||I.dispose(),l.current=null}},[i,s,d]),null},Xf=12,qf=50,ZT=Te.lazy(()=>Zg(()=>import("./react-globe.gl-DHsu_Iz8.js"),[])),JT=Te.lazy(()=>Zg(()=>import("./SatelliteMarkers-CJiZeOX2.js"),[])),QT=()=>{const i=Te.useRef(),e=Te.useRef(null),[t,s]=Te.useState(!1),[a,l]=Te.useState({width:0,height:0}),[c,f]=Te.useState(!1),[d,h]=Te.useState(0),{settings:m,updateSetting:g,resetSettings:v}=bx();Te.useLayoutEffect(()=>{const he=e.current;if(!he)return;const _t=()=>{const Sn=he.getBoundingClientRect();l({width:Math.max(0,Math.floor(Sn.width)),height:Math.max(0,Math.floor(Sn.height))})};if(_t(),typeof ResizeObserver>"u")return window.addEventListener("resize",_t),()=>window.removeEventListener("resize",_t);const qt=new ResizeObserver(_t);return qt.observe(he),()=>qt.disconnect()},[]),Te.useEffect(()=>{var qt;const he=(qt=e.current)==null?void 0:qt.querySelector("canvas");if(!he)return;const _t=Sn=>{Sn.preventDefault(),f(!0),s(!1)};return he.addEventListener("webglcontextlost",_t),()=>he.removeEventListener("webglcontextlost",_t)},[t,d]),Te.useEffect(()=>{const he=i.current;if(!t||!he)return;const _t=()=>{document.hidden?he.pauseAnimation():he.resumeAnimation()};return _t(),document.addEventListener("visibilitychange",_t),()=>document.removeEventListener("visibilitychange",_t)},[t,d]);const{trackedSatellites:S,selectedNoradId:M,isLoading:E,statusMessage:y,lastUpdated:_,selectSatellite:I,refreshCatalog:w}=vx(m),P=Tx(),{satellitePositions:B,selectedPosition:R,orbitPoints:U,showOrbit:O,setShowOrbit:L,followSelected:b,setFollowSelected:z}=xx(S,M,P.currentTime),{userLocation:X,locateUser:K,clearUserLocation:ne}=Sx(),{favorites:fe,isFavorite:Y,toggleFavorite:ge,clearFavorites:W}=Mx(),{isTimeLapseActive:ue,isPaused:ce,speed:F,speeds:J,toggleTimeLapse:Ve,setTimeLapseSpeed:te,resetTime:ie,getSpeedLabel:le,getTimeOffsetDisplay:xe}=P,{trackedNoradIds:Re,isTracked:Fe,toggleTracked:Be,clearTracked:V,getTrackedColor:ye}=Ax(B),{passes:Ee,isCalculating:we,error:Se,calculateForSelected:Ae,calculateForTracked:Le,clearPasses:Ce}=Cx(S,X,P.currentTime),[qe,D]=Te.useState(""),[A,ee]=Te.useState(()=>typeof window.matchMedia=="function"?window.matchMedia("(min-width: 640px)").matches:!0),[me,pe]=Te.useState("catalog"),[Me,Xe]=Te.useState(!1),[Ne,Ie]=Te.useState(!1),[et,be]=Te.useState(!1),[je,T]=Te.useState(!1),[Ze,ze]=Te.useState(!1),[ft,lt]=Te.useState(null),[dt,G]=Te.useState(0),[He,ve]=Te.useState(m.defaultAltitudeFilter),_e=oo(Ne,()=>Ie(!1)),Ue=oo(et,()=>be(!1)),rt=oo(Me,()=>Xe(!1));Te.useEffect(()=>{var he;!b||!R||(he=i.current)==null||he.pointOfView({lat:R.lat,lng:R.lng,altitude:Math.max(2.1,R.alt*.75+1.5)},1e3)},[b,R]),Te.useEffect(()=>{ve(m.defaultAltitudeFilter)},[m.defaultAltitudeFilter]),Te.useEffect(()=>{L(m.showOrbitsByDefault)},[m.showOrbitsByDefault,L]);const pt=Te.useMemo(()=>He==="all"?S:S.filter(he=>{const _t=o0(he.periodSeconds);return l0(_t)===He}),[S,He]),wt=Te.useMemo(()=>{const he=qe.trim().toLowerCase(),_t=pt;if(!he){const qt=[25544,20580,25994,33591];return _t.filter(Sn=>qt.includes(Sn.noradId)).slice(0,Xf)}return _t.filter(qt=>qt.name.toLowerCase().includes(he)||qt.noradId.toString().includes(he)).slice(0,Xf)},[pt,qe]),At=Te.useMemo(()=>S.filter(he=>fe.includes(he.noradId)),[S,fe]),ht=Te.useMemo(()=>[...pt].sort((he,_t)=>he.name.localeCompare(_t.name)),[pt]),bt=Math.max(1,Math.ceil(ht.length/qf)),kt=ht.slice(dt*qf,(dt+1)*qf),Dt=he=>{I(he),L(m.showOrbitsByDefault)},Ge=()=>{const he=S.find(_t=>_t.noradId===M);return he?he.name:(R==null?void 0:R.name)??"Unknown"},Xt=()=>{R&&(Ae(R.noradId),T(!0))},tn=Te.useMemo(()=>B.filter(he=>He==="all"||he.altitudeClass===He),[B,He]),nn=me==="favorites"?At:me==="tracked"?S.filter(he=>Re.includes(he.noradId)):wt;return H.jsxs("div",{className:"relative h-full w-full overflow-hidden bg-black sm:flex",children:[H.jsx("div",{ref:e,className:"absolute inset-0 z-0 sm:left-[22.5rem]",children:c?H.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[H.jsx("p",{className:"text-lg font-bold",children:"The globe lost its graphics context."}),H.jsx("p",{className:"text-sm text-slate-300",children:"The satellite explorer remains available."}),H.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:()=>{f(!1),s(!1),h(he=>he+1)},type:"button",children:"Retry globe"})]}):H.jsx(Rx,{onRetry:()=>{s(!1),h(he=>he+1)},children:H.jsxs(Te.Suspense,{fallback:H.jsx("div",{role:"status",className:"flex h-full items-center justify-center text-cyan-200",children:"Loading globe…"}),children:[a.width>0&&a.height>0&&H.jsx(ZT,{ref:i,width:a.width,height:a.height,onGlobeReady:()=>{const he=i.current;if(!he)return;he.renderer().setPixelRatio(Nx(window.devicePixelRatio));const _t=he.controls();_t.enableDamping=!0,_t.dampingFactor=.08,s(!0),he.pointOfView({altitude:3.2})},enablePointerInteraction:!1,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",backgroundColor:"black",showAtmosphere:!0,labelsData:X?[X]:[],labelLat:"lat",labelLng:"lng",labelText:"name",labelColor:()=>"rgba(255, 165, 0, 0.9)",labelSize:1,labelDotRadius:.5,pathsData:U.length>0?[{points:U,color:R==null?void 0:R.color}]:[],pathPoints:"points",pathPointLat:"lat",pathPointLng:"lng",pathPointAlt:"alt",pathColor:he=>`${he.color??"#67e8f9"}cc`,pathStroke:.5,pathTransitionDuration:0}),t&&H.jsx(KT,{globe:i.current??null,time:P.currentTime,nightEnabled:m.nightShading??!0,cloudsEnabled:m.cloudCover??!1}),t&&H.jsx(Te.Suspense,{fallback:null,children:H.jsx(JT,{globe:i.current??null,positions:tn,selectedNoradId:M,trackedNoradIds:Re,getTrackedColor:ye,onSelect:I})})]})},d)}),H.jsxs("div",{className:"pointer-events-none absolute right-3 top-20 z-20 rounded-xl border border-white/15 bg-slate-950/75 px-3 py-2 text-right text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5",children:[H.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300",children:ce?"Paused UTC":ue?"Simulation UTC":"Live UTC"}),H.jsx("time",{className:"text-sm font-semibold tabular-nums",dateTime:P.currentTime.toISOString(),children:P.currentTime.toLocaleString(void 0,{timeZone:"UTC",dateStyle:"short",timeStyle:"medium"})}),m.cloudCover&&H.jsx("p",{className:"mt-0.5 text-[10px] text-slate-400",children:"Clouds: NASA daily fraction · latest available observation"})]}),!A&&!Ne&&!et&&!je&&!Ze&&H.jsxs("section",{className:"absolute bottom-3 left-3 right-3 z-20 rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-[23rem] sm:right-auto sm:w-96",children:[H.jsxs("div",{className:"flex items-center justify-between gap-4",children:[H.jsxs("div",{className:"min-w-0",children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),H.jsxs("p",{className:"mt-1 text-xl font-bold",children:[pt.length.toLocaleString()," satellites"]})]}),H.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20","aria-expanded":A,onClick:()=>ee(!0),type:"button",children:"Open panel"})]}),H.jsx("p",{className:"mt-2 hidden line-clamp-2 text-sm text-slate-400 sm:block",children:y}),_&&H.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Last updated: ",new Date(_).toLocaleString()]}),H.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Orbital data:"," ",H.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),H.jsxs("div",{className:"mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0",children:[H.jsxs("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>Ie(!0),type:"button",children:["Favorites (",fe.length,")"]}),H.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>be(!0),type:"button",children:"Time Lapse"}),X&&R&&H.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Xt,type:"button",children:"Predict Pass"}),H.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>ze(!0),type:"button",children:"Settings"})]})]}),A&&H.jsxs("aside",{className:"absolute bottom-0 left-0 right-0 z-30 h-[42dvh] max-h-[28rem] overflow-y-auto rounded-t-2xl border border-white/15 bg-slate-950/95 p-4 pb-8 text-left text-white shadow-2xl backdrop-blur-xl sm:relative sm:h-full sm:max-h-full sm:w-[22.5rem] sm:shrink-0 sm:rounded-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r sm:pb-4",children:[H.jsx("div",{"aria-hidden":"true",className:"mx-auto mb-3 h-1 w-12 rounded-full bg-white/25 sm:hidden"}),H.jsxs("div",{className:"flex items-start justify-between gap-4",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),H.jsx("h2",{className:"mt-1 text-2xl font-bold",children:"Satellite Tracker"})]}),H.jsx("button",{"aria-label":"Close control panel",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold transition hover:bg-white/20",onClick:()=>ee(!1),type:"button",children:"Close"})]}),H.jsx("p",{className:"mt-2 text-sm text-slate-300",children:y}),H.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2",children:[H.jsxs("span",{className:"text-sm font-semibold",children:[S.length.toLocaleString()," satellites"]}),H.jsxs("span",{className:"text-xs text-slate-400",children:[tn.length.toLocaleString()," visible ·"," ",xe()]})]}),H.jsx("nav",{"aria-label":"Satellite explorer",className:"mt-3 grid grid-cols-3 gap-1 rounded-xl bg-black/30 p-1",children:["catalog","favorites","tracked"].map(he=>H.jsxs("button",{"aria-pressed":me===he,className:`rounded-lg px-2 py-2 text-xs font-bold capitalize ${me===he?"bg-cyan-500 text-white":"text-slate-300 hover:bg-white/10"}`,onClick:()=>pe(he),type:"button",children:[he," ",he==="favorites"?fe.length:he==="tracked"?Re.length:""]},he))}),H.jsx("div",{className:"mt-3 flex gap-1",children:Object.entries(fx).map(([he,_t])=>H.jsx("button",{className:`px-2 py-1 rounded-full text-xs transition ${He===he?"bg-cyan-500 text-white":"bg-white/10 hover:bg-white/20"}`,"aria-pressed":He===he,onClick:()=>{ve(he),g("defaultAltitudeFilter",he)},type:"button",children:_t.label},he))}),H.jsxs("label",{className:"mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-400",children:["Find by name or NORAD ID",H.jsx("input",{className:"mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-slate-500 focus:border-cyan-300",onChange:he=>D(he.target.value),placeholder:"e.g. Starlink, Hubble, 25544",type:"search",value:qe})]}),nn.length>0&&H.jsx("div",{className:"mt-2 space-y-1",children:nn.slice(0,me==="catalog"?Xf:void 0).map(he=>H.jsxs("button",{className:`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${he.noradId===M?"bg-cyan-300/20 text-cyan-100":"bg-white/5 hover:bg-white/10"}`,onClick:()=>Dt(he.noradId),type:"button",children:[H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsx("span",{className:"truncate font-medium",children:he.name}),Y(he.noradId)&&H.jsx("span",{className:"text-yellow-400",children:"★"}),Fe(he.noradId)&&H.jsx("span",{className:"text-blue-400",children:"📍"})]}),H.jsx("span",{className:"ml-2 shrink-0 text-xs text-slate-400",children:he.noradId})]},he.noradId))}),nn.length===0&&me!=="catalog"&&H.jsxs("p",{className:"mt-3 text-sm text-slate-400",children:["No ",me," satellites yet."]}),H.jsx("h3",{className:"mt-4 truncate text-lg font-bold",children:(R==null?void 0:R.name)??"Select a satellite"}),R&&H.jsxs("p",{className:"text-xs text-slate-400",children:["NORAD ",R.noradId,He!=="all"&&R.altitudeClass!==He?" · Outside current filter":""]}),H.jsxs("dl",{className:"mt-3 grid grid-cols-2 gap-3 text-sm",children:[H.jsx(nc,{label:"Latitude",children:R?nm(R.lat,"N","S"):"—"}),H.jsx(nc,{label:"Longitude",children:R?nm(R.lng,"E","W"):"—"}),H.jsx(nc,{label:"Altitude",children:R?`${R.altitudeKm.toFixed(0)} km`:"—"}),H.jsx(nc,{label:"Speed",children:R!=null&&R.velocityKph?`${R.velocityKph.toLocaleString(void 0,{maximumFractionDigits:0})} km/h`:"—"})]}),H.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[H.jsx(Ii,{onClick:()=>{G(0),ee(!1),Xe(!0)},children:"Browse all"}),H.jsx(Ii,{onClick:()=>z(he=>!he),children:b?"Stop following":"Follow selected"}),H.jsx(Ii,{onClick:()=>L(he=>!he),children:O?"Hide orbit":"Show orbit"}),H.jsx(Ii,{onClick:()=>{var he;return(he=i.current)==null?void 0:he.pointOfView({altitude:Math.max(3.2,...tn.map(_t=>_t.alt*.75+1.5))},900)},children:"Fit visible"}),H.jsx(Ii,{onClick:()=>{lt(null),K().then(he=>{var _t;lt(null),(_t=i.current)==null||_t.pointOfView({lat:he.lat,lng:he.lng,altitude:1.5},1e3)}).catch(()=>lt("Location access failed. Check browser permission and try again."))},children:"Locate me"}),H.jsx(Ii,{onClick:w,children:"Refresh"}),R&&H.jsx(Ii,{onClick:()=>ge(R.noradId),children:Y(R.noradId)?"★ Favorited":"☆ Favorite"}),R&&H.jsx(Ii,{onClick:()=>{if(!Fe(R.noradId)&&Re.length>=10){lt("Tracking is limited to 10 satellites. Remove one before adding another.");return}Be(R.noradId)},children:Fe(R.noradId)?"📍 Tracked":"📍 Track"}),X&&R&&H.jsx(Ii,{onClick:Xt,children:"Predict Pass"}),X&&H.jsx(Ii,{onClick:ne,children:"Clear location"})]}),E&&H.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"Loading the shared satellite snapshot\\u2026"}),ft&&H.jsx("p",{role:"status",className:"mt-3 text-sm text-amber-300",children:ft}),_&&H.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Last updated: ",new Date(_).toLocaleString()]}),H.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Orbital data:"," ",H.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),Re.length>0&&H.jsxs("div",{className:"mt-3",children:[H.jsxs("p",{className:"text-xs text-slate-400 mb-2",children:["Tracking ",Re.length," satellites"]}),H.jsx("button",{className:"rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:V,type:"button",children:"Clear all tracked"})]})]}),Ne&&H.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:H.jsxs("section",{ref:_e,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"favorites-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[H.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Favorites"}),H.jsxs("h2",{id:"favorites-title",className:"mt-1 text-2xl font-bold",children:[fe.length," Favorite Satellites"]}),H.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Quick access to your favorite satellites."})]}),H.jsx("button",{"aria-label":"Close favorites",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Ie(!1),type:"button",children:"Close"})]}),H.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:At.length>0?At.map(he=>H.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${he.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Dt(he.noradId),Ie(!1)},type:"button",children:[H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsx("span",{className:"truncate font-medium",children:he.name}),Fe(he.noradId)&&H.jsx("span",{className:"text-blue-400",children:"📍"})]}),H.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:he.noradId})]},he.noradId)):H.jsx("p",{className:"p-4 text-center text-slate-400",children:"No favorites yet. Add satellites to favorites from the control panel."})}),fe.length>0&&H.jsx("footer",{className:"flex justify-end gap-3 border-t border-white/10 p-4",children:H.jsx("button",{className:"rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/30",onClick:W,type:"button",children:"Clear all favorites"})})]})}),et&&H.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:H.jsxs("section",{ref:Ue,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"timelapse-title",className:"flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[H.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Time Lapse"}),H.jsx("h2",{id:"timelapse-title",className:"mt-1 text-2xl font-bold",children:"Time Lapse Controls"}),H.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Watch satellite movement at accelerated speeds."})]}),H.jsx("button",{"aria-label":"Close time lapse controls",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>be(!1),type:"button",children:"Close"})]}),H.jsx("div",{className:"flex-1 p-4",children:H.jsxs("div",{className:"space-y-4",children:[H.jsxs("div",{className:"flex items-center justify-between",children:[H.jsx("span",{className:"text-sm text-slate-300",children:"Status"}),H.jsx("span",{className:`rounded-full px-3 py-1 text-sm ${ue?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:ue?"Active":"Stopped"})]}),H.jsxs("div",{children:[H.jsx("label",{className:"block text-sm text-slate-300 mb-2",children:"Speed"}),H.jsx("div",{className:"grid grid-cols-4 gap-2",children:J.map(he=>H.jsx("button",{className:`rounded-lg border px-3 py-2 text-sm transition ${F===he?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>te(he),type:"button",children:le(he)},he))})]}),H.jsxs("div",{className:"flex gap-2",children:[H.jsxs("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:Ve,type:"button",children:[ue?"Stop":"Start"," Time Lapse"]}),H.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20",onClick:ie,type:"button",children:"Reset to Now"})]})]})})]})}),je&&R&&H.jsx(Px,{passes:Ee,isCalculating:we,error:Se,onClose:()=>{Ce(),T(!1)},onCalculateTracked:()=>{Le([...new Set([...Re,R.noradId])])},selectedSatelliteName:Ge()}),Ze&&H.jsx(Lx,{settings:m,onUpdate:g,onReset:v,onClose:()=>ze(!1)}),Me&&H.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:H.jsxs("section",{ref:rt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"catalog-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[H.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[H.jsxs("div",{children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),H.jsxs("h2",{id:"catalog-title",className:"mt-1 text-2xl font-bold",children:["All ",ht.length.toLocaleString()," satellites"]}),H.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Select any satellite to view its telemetry and orbit."})]}),H.jsx("button",{"aria-label":"Close satellite catalog",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Xe(!1),type:"button",children:"Close"})]}),H.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:kt.map(he=>H.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${he.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Dt(he.noradId),Xe(!1)},type:"button",children:[H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsx("span",{className:"truncate font-medium",children:he.name}),Y(he.noradId)&&H.jsx("span",{className:"text-yellow-400",children:"★"}),Fe(he.noradId)&&H.jsx("span",{className:"text-blue-400",children:"📍"})]}),H.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:he.noradId})]},he.noradId))}),H.jsxs("footer",{className:"flex items-center justify-between gap-3 border-t border-white/10 p-4",children:[H.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:dt===0,onClick:()=>G(he=>Math.max(0,he-1)),type:"button",children:"Previous"}),H.jsxs("p",{className:"text-sm text-slate-400",children:["Page ",dt+1," of ",bt]}),H.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:dt>=bt-1,onClick:()=>G(he=>Math.min(bt-1,he+1)),type:"button",children:"Next"})]})]})})]})},nc=({label:i,children:e})=>H.jsxs("div",{className:"rounded-xl bg-white/10 p-3",children:[H.jsx("dt",{className:"text-slate-400",children:i}),H.jsx("dd",{className:"font-semibold",children:e})]}),Ii=({children:i,onClick:e})=>H.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20",onClick:e,type:"button",children:i}),e2=()=>H.jsxs("main",{className:"relative h-[100dvh] w-full overflow-hidden bg-black",children:[H.jsxs("header",{className:"pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-4 pb-10 pt-4 text-center text-white sm:left-[22.5rem]",children:[H.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90",children:"Orbit Radar"}),H.jsx("h1",{className:"mt-1 text-2xl font-black drop-shadow-lg sm:text-4xl",children:"Satellite Tracker"})]}),H.jsx(QT,{})]});B_.createRoot(document.getElementById("root")).render(H.jsx(Kg.StrictMode,{children:H.jsx(e2,{})}));export{yo as $,p2 as A,kn as B,Rt as C,tr as D,Y0 as E,Zt as F,Yl as G,Ci as H,Pg as I,G0 as J,vd as K,T2 as L,Ht as M,aa as N,wn as O,Yn as P,$0 as Q,Kg as R,or as S,a2 as T,vS as U,$e as V,m2 as W,yT as X,ki as Y,ga as Z,r2 as _,$ as a,s2 as a0,w2 as a1,md as a2,as as a3,P0 as a4,ps as a5,_c as a6,Ur as a7,S2 as a8,f2 as a9,wi as aa,d2 as ab,E2 as ac,ud as ad,_2 as ae,x2 as af,So as ag,c2 as ah,h2 as ai,n2 as aj,i2 as ak,pi as b,aT as c,F0 as d,l2 as e,o2 as f,$g as g,Ui as h,si as i,M2 as j,va as k,yn as l,gs as m,u2 as n,y2 as o,Ke as p,A2 as q,Te as r,pc as s,v2 as t,uT as u,cT as v,W0 as w,jT as x,Di as y,g2 as z};
