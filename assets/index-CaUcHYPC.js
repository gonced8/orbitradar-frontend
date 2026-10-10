var P_=Object.defineProperty;var L_=(i,e,t)=>e in i?P_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Gp=(i,e,t)=>L_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Yg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var nd={exports:{}},Ja={},id={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function N_(){if(Wp)return bt;Wp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function y(U,X,Le){this.props=U,this.context=X,this.refs=w,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,X){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,X,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(U,X,Le){this.props=U,this.context=X,this.refs=w,this.updater=Le||S}var E=N.prototype=new _;E.constructor=N,M(E,y.prototype),E.isPureReactComponent=!0;var b=Array.isArray,z=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function F(U,X,Le){var Z,ne={},le=null,ye=null;if(X!=null)for(Z in X.ref!==void 0&&(ye=X.ref),X.key!==void 0&&(le=""+X.key),X)z.call(X,Z)&&!I.hasOwnProperty(Z)&&(ne[Z]=X[Z]);var Ne=arguments.length-2;if(Ne===1)ne.children=Le;else if(1<Ne){for(var He=Array(Ne),Fe=0;Fe<Ne;Fe++)He[Fe]=arguments[Fe+2];ne.children=He}if(U&&U.defaultProps)for(Z in Ne=U.defaultProps,Ne)ne[Z]===void 0&&(ne[Z]=Ne[Z]);return{$$typeof:i,type:U,key:le,ref:ye,props:ne,_owner:P.current}}function L(U,X){return{$$typeof:i,type:U.type,key:X,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===i}function k(U){var X={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Le){return X[Le]})}var J=/\/+/g;function Y(U,X){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):X.toString(36)}function ee(U,X,Le,Z,ne){var le=typeof U;(le==="undefined"||le==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(le){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case i:case e:ye=!0}}if(ye)return ye=U,ne=ne(ye),U=Z===""?"."+Y(ye,0):Z,b(ne)?(Le="",U!=null&&(Le=U.replace(J,"$&/")+"/"),ee(ne,X,Le,"",function(Fe){return Fe})):ne!=null&&(R(ne)&&(ne=L(ne,Le+(!ne.key||ye&&ye.key===ne.key?"":(""+ne.key).replace(J,"$&/")+"/")+U)),X.push(ne)),1;if(ye=0,Z=Z===""?".":Z+":",b(U))for(var Ne=0;Ne<U.length;Ne++){le=U[Ne];var He=Z+Y(le,Ne);ye+=ee(le,X,Le,He,ne)}else if(He=v(U),typeof He=="function")for(U=He.call(U),Ne=0;!(le=U.next()).done;)le=le.value,He=Z+Y(le,Ne++),ye+=ee(le,X,Le,He,ne);else if(le==="object")throw X=String(U),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return ye}function de(U,X,Le){if(U==null)return U;var Z=[],ne=0;return ee(U,Z,"","",function(le){return X.call(Le,le,ne++)}),Z}function K(U){if(U._status===-1){var X=U._result;X=X(),X.then(function(Le){(U._status===0||U._status===-1)&&(U._status=1,U._result=Le)},function(Le){(U._status===0||U._status===-1)&&(U._status=2,U._result=Le)}),U._status===-1&&(U._status=0,U._result=X)}if(U._status===1)return U._result.default;throw U._result}var pe={current:null},W={transition:null},re={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:W,ReactCurrentOwner:P};function ie(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:de,forEach:function(U,X,Le){de(U,function(){X.apply(this,arguments)},Le)},count:function(U){var X=0;return de(U,function(){X++}),X},toArray:function(U){return de(U,function(X){return X})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},bt.Component=y,bt.Fragment=t,bt.Profiler=a,bt.PureComponent=N,bt.StrictMode=s,bt.Suspense=f,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,bt.act=ie,bt.cloneElement=function(U,X,Le){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=M({},U.props),ne=U.key,le=U.ref,ye=U._owner;if(X!=null){if(X.ref!==void 0&&(le=X.ref,ye=P.current),X.key!==void 0&&(ne=""+X.key),U.type&&U.type.defaultProps)var Ne=U.type.defaultProps;for(He in X)z.call(X,He)&&!I.hasOwnProperty(He)&&(Z[He]=X[He]===void 0&&Ne!==void 0?Ne[He]:X[He])}var He=arguments.length-2;if(He===1)Z.children=Le;else if(1<He){Ne=Array(He);for(var Fe=0;Fe<He;Fe++)Ne[Fe]=arguments[Fe+2];Z.children=Ne}return{$$typeof:i,type:U.type,key:ne,ref:le,props:Z,_owner:ye}},bt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},bt.createElement=F,bt.createFactory=function(U){var X=F.bind(null,U);return X.type=U,X},bt.createRef=function(){return{current:null}},bt.forwardRef=function(U){return{$$typeof:d,render:U}},bt.isValidElement=R,bt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:K}},bt.memo=function(U,X){return{$$typeof:h,type:U,compare:X===void 0?null:X}},bt.startTransition=function(U){var X=W.transition;W.transition={};try{U()}finally{W.transition=X}},bt.unstable_act=ie,bt.useCallback=function(U,X){return pe.current.useCallback(U,X)},bt.useContext=function(U){return pe.current.useContext(U)},bt.useDebugValue=function(){},bt.useDeferredValue=function(U){return pe.current.useDeferredValue(U)},bt.useEffect=function(U,X){return pe.current.useEffect(U,X)},bt.useId=function(){return pe.current.useId()},bt.useImperativeHandle=function(U,X,Le){return pe.current.useImperativeHandle(U,X,Le)},bt.useInsertionEffect=function(U,X){return pe.current.useInsertionEffect(U,X)},bt.useLayoutEffect=function(U,X){return pe.current.useLayoutEffect(U,X)},bt.useMemo=function(U,X){return pe.current.useMemo(U,X)},bt.useReducer=function(U,X,Le){return pe.current.useReducer(U,X,Le)},bt.useRef=function(U){return pe.current.useRef(U)},bt.useState=function(U){return pe.current.useState(U)},bt.useSyncExternalStore=function(U,X,Le){return pe.current.useSyncExternalStore(U,X,Le)},bt.useTransition=function(){return pe.current.useTransition()},bt.version="18.3.1",bt}var jp;function lf(){return jp||(jp=1,id.exports=N_()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function D_(){if(Xp)return Ja;Xp=1;var i=lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,h){var m,g={},v=null,S=null;h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)s.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:d,key:v,ref:S,props:g,_owner:a.current}}return Ja.Fragment=t,Ja.jsx=c,Ja.jsxs=c,Ja}var qp;function I_(){return qp||(qp=1,nd.exports=D_()),nd.exports}var B=I_(),me=lf();const $g=Yg(me);var Tl={},rd={exports:{}},qn={},sd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function U_(){return Yp||(Yp=1,function(i){function e(W,re){var ie=W.length;W.push(re);e:for(;0<ie;){var U=ie-1>>>1,X=W[U];if(0<a(X,re))W[U]=re,W[ie]=X,ie=U;else break e}}function t(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var re=W[0],ie=W.pop();if(ie!==re){W[0]=ie;e:for(var U=0,X=W.length,Le=X>>>1;U<Le;){var Z=2*(U+1)-1,ne=W[Z],le=Z+1,ye=W[le];if(0>a(ne,ie))le<X&&0>a(ye,ne)?(W[U]=ye,W[le]=ie,U=le):(W[U]=ne,W[Z]=ie,U=Z);else if(le<X&&0>a(ye,ie))W[U]=ye,W[le]=ie,U=le;else break e}}return re}function a(W,re){var ie=W.sortIndex-re.sortIndex;return ie!==0?ie:W.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var f=[],h=[],m=1,g=null,v=3,S=!1,M=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(W){for(var re=t(h);re!==null;){if(re.callback===null)s(h);else if(re.startTime<=W)s(h),re.sortIndex=re.expirationTime,e(f,re);else break;re=t(h)}}function b(W){if(w=!1,E(W),!M)if(t(f)!==null)M=!0,K(z);else{var re=t(h);re!==null&&pe(b,re.startTime-W)}}function z(W,re){M=!1,w&&(w=!1,_(F),F=-1),S=!0;var ie=v;try{for(E(re),g=t(f);g!==null&&(!(g.expirationTime>re)||W&&!k());){var U=g.callback;if(typeof U=="function"){g.callback=null,v=g.priorityLevel;var X=U(g.expirationTime<=re);re=i.unstable_now(),typeof X=="function"?g.callback=X:g===t(f)&&s(f),E(re)}else s(f);g=t(f)}if(g!==null)var Le=!0;else{var Z=t(h);Z!==null&&pe(b,Z.startTime-re),Le=!1}return Le}finally{g=null,v=ie,S=!1}}var P=!1,I=null,F=-1,L=5,R=-1;function k(){return!(i.unstable_now()-R<L)}function J(){if(I!==null){var W=i.unstable_now();R=W;var re=!0;try{re=I(!0,W)}finally{re?Y():(P=!1,I=null)}}else P=!1}var Y;if(typeof N=="function")Y=function(){N(J)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,de=ee.port2;ee.port1.onmessage=J,Y=function(){de.postMessage(null)}}else Y=function(){y(J,0)};function K(W){I=W,P||(P=!0,Y())}function pe(W,re){F=y(function(){W(i.unstable_now())},re)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(W){W.callback=null},i.unstable_continueExecution=function(){M||S||(M=!0,K(z))},i.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<W?Math.floor(1e3/W):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(W){switch(v){case 1:case 2:case 3:var re=3;break;default:re=v}var ie=v;v=re;try{return W()}finally{v=ie}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(W,re){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ie=v;v=W;try{return re()}finally{v=ie}},i.unstable_scheduleCallback=function(W,re,ie){var U=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?U+ie:U):ie=U,W){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=ie+X,W={id:m++,callback:re,priorityLevel:W,startTime:ie,expirationTime:X,sortIndex:-1},ie>U?(W.sortIndex=ie,e(h,W),t(f)===null&&W===t(h)&&(w?(_(F),F=-1):w=!0,pe(b,ie-U))):(W.sortIndex=X,e(f,W),M||S||(M=!0,K(z))),W},i.unstable_shouldYield=k,i.unstable_wrapCallback=function(W){var re=v;return function(){var ie=v;v=re;try{return W.apply(this,arguments)}finally{v=ie}}}}(ad)),ad}var $p;function O_(){return $p||($p=1,sd.exports=U_()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function F_(){if(Kp)return qn;Kp=1;var i=lf(),e=O_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,o,u,p,x,C){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,N);y[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,N);y[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,N);y[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function E(n,r,o,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,p,u)&&(o=null),u||p===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var b=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),W=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,U;function X(n){if(U===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Le=!1;function Z(n,r){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var u=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){u=he}n.call(r.prototype)}else{try{throw Error()}catch(he){u=he}n()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var p=he.stack.split(`
`),x=u.stack.split(`
`),C=p.length-1,H=x.length-1;1<=C&&0<=H&&p[C]!==x[H];)H--;for(;1<=C&&0<=H;C--,H--)if(p[C]!==x[H]){if(C!==1||H!==1)do if(C--,H--,0>H||p[C]!==x[H]){var j=`
`+p[C].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=C&&0<=H);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?X(n):""}function ne(n){switch(n.tag){case 5:return X(n.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case P:return"Portal";case L:return"Profiler";case F:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case J:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return r=n.displayName||null,r!==null?r:le(n.type)||"Memo";case K:r=n._payload,n=n._init;try{return le(n(r))}catch{}}return null}function ye(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Fe(n){var r=He(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,x=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(C){u=""+C,x.call(this,C)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function V(n){n._valueTracker||(n._valueTracker=Fe(n))}function Se(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=He(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ee(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function we(n,r){var o=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Me(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Ne(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Te(n,r){r=r.checked,r!=null&&E(n,"checked",r,!1)}function Pe(n,r){Te(n,r);var o=Ne(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Xe(n,r.type,o):r.hasOwnProperty("defaultValue")&&Xe(n,r.type,Ne(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ce(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Xe(n,r,o){(r!=="number"||Ee(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var O=Array.isArray;function A(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Ne(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function se(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _e(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(O(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Ne(o)}}function ge(n,r){var o=Ne(r.value),u=Ne(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function xe(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function qe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?qe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var De,et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=De.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){T.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),je[r]=je[n]})});function Ze(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||je.hasOwnProperty(n)&&je[n]?(""+r).trim():r+"px"}function ze(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=Ze(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var dt=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(n,r){if(r){if(dt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ft(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function Ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ve=null,fe=null,Oe=null;function rt(n){if(n=Fa(n)){if(typeof ve!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Bo(r),ve(n.stateNode,n.type,r))}}function vt(n){fe?Oe?Oe.push(n):Oe=[n]:fe=n}function At(){if(fe){var n=fe,r=Oe;if(Oe=fe=null,rt(n),r)for(n=0;n<r.length;n++)rt(r[n])}}function Et(n,r){return n(r)}function gt(){}var Rt=!1;function Ot(n,r,o){if(Rt)return n(r,o);Rt=!0;try{return Et(n,r,o)}finally{Rt=!1,(fe!==null||Oe!==null)&&(gt(),At())}}function Ft(n,r){var o=n.stateNode;if(o===null)return null;var u=Bo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Ge=!1;if(d)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Ge=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{Ge=!1}function an(n,r,o,u,p,x,C,H,j){var he=Array.prototype.slice.call(arguments,3);try{r.apply(o,he)}catch(ke){this.onError(ke)}}var on=!1,Mt=null,ln=!1,An=null,be={onError:function(n){on=!0,Mt=n}};function _t(n,r,o,u,p,x,C,H,j){on=!1,Mt=null,an.apply(be,arguments)}function Yt(n,r,o,u,p,x,C,H,j){if(_t.apply(this,arguments),on){if(on){var he=Mt;on=!1,Mt=null}else throw Error(t(198));ln||(ln=!0,An=he)}}function Lt(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function D(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Q(n){if(Lt(n)!==n)throw Error(t(188))}function ce(n){var r=n.alternate;if(!r){if(r=Lt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===o)return Q(p),n;if(x===u)return Q(p),r;x=x.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=x;else{for(var C=!1,H=p.child;H;){if(H===o){C=!0,o=p,u=x;break}if(H===u){C=!0,u=p,o=x;break}H=H.sibling}if(!C){for(H=x.child;H;){if(H===o){C=!0,o=x,u=p;break}if(H===u){C=!0,u=x,o=p;break}H=H.sibling}if(!C)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function oe(n){return n=ce(n),n!==null?te(n):null}function te(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=te(n);if(r!==null)return r;n=n.sibling}return null}var Re=e.unstable_scheduleCallback,Ye=e.unstable_cancelCallback,tt=e.unstable_shouldYield,st=e.unstable_requestPaint,Je=e.unstable_now,ht=e.unstable_getCurrentPriorityLevel,lt=e.unstable_ImmediatePriority,Ct=e.unstable_UserBlockingPriority,It=e.unstable_NormalPriority,Ht=e.unstable_LowPriority,$t=e.unstable_IdlePriority,St=null,nt=null;function rn(n){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Zn,Un=Math.log,Kn=Math.LN2;function Zn(n){return n>>>=0,n===0?32:31-(Un(n)/Kn|0)|0}var ai=64,zt=4194304;function dn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,C=o&268435455;if(C!==0){var H=C&~p;H!==0?u=dn(H):(x&=C,x!==0&&(u=dn(x)))}else C=o&~p,C!==0?u=dn(C):x!==0&&(u=dn(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-yt(r),p=1<<o,u|=n[o],r&=~p;return u}function vn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-yt(x),H=1<<C,j=p[C];j===-1?((H&o)===0||(H&u)!==0)&&(p[C]=vn(H,r)):j<=r&&(n.expiredLanes|=H),x&=~H}}function Hr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vr(){var n=ai;return ai<<=1,(ai&4194240)===0&&(ai=64),n}function xa(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Gr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-yt(r),n[r]=o}function Tc(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-yt(o),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,o&=~x}}function ya(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-yt(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}var Ut=0;function Eo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wo,Ac,Ef,wf,Tf,Cc=!1,To=[],lr=null,cr=null,ur=null,Sa=new Map,Ma=new Map,dr=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(n,r){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(r.pointerId)}}function Ea(n,r,o,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=Fa(r),r!==null&&Ac(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Q0(n,r,o,u,p){switch(r){case"focusin":return lr=Ea(lr,n,r,o,u,p),!0;case"dragenter":return cr=Ea(cr,n,r,o,u,p),!0;case"mouseover":return ur=Ea(ur,n,r,o,u,p),!0;case"pointerover":var x=p.pointerId;return Sa.set(x,Ea(Sa.get(x)||null,n,r,o,u,p)),!0;case"gotpointercapture":return x=p.pointerId,Ma.set(x,Ea(Ma.get(x)||null,n,r,o,u,p)),!0}return!1}function Cf(n){var r=Wr(n.target);if(r!==null){var o=Lt(r);if(o!==null){if(r=o.tag,r===13){if(r=D(o),r!==null){n.blockedOn=r,Tf(n.priority,function(){Ef(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ao(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Rc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);G=u,o.target.dispatchEvent(u),G=null}else return r=Fa(o),r!==null&&Ac(r),n.blockedOn=o,!1;r.shift()}return!0}function bf(n,r,o){Ao(n)&&o.delete(r)}function ev(){Cc=!1,lr!==null&&Ao(lr)&&(lr=null),cr!==null&&Ao(cr)&&(cr=null),ur!==null&&Ao(ur)&&(ur=null),Sa.forEach(bf),Ma.forEach(bf)}function wa(n,r){n.blockedOn===r&&(n.blockedOn=null,Cc||(Cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ev)))}function Ta(n){function r(p){return wa(p,n)}if(0<To.length){wa(To[0],n);for(var o=1;o<To.length;o++){var u=To[o];u.blockedOn===n&&(u.blockedOn=null)}}for(lr!==null&&wa(lr,n),cr!==null&&wa(cr,n),ur!==null&&wa(ur,n),Sa.forEach(r),Ma.forEach(r),o=0;o<dr.length;o++)u=dr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<dr.length&&(o=dr[0],o.blockedOn===null);)Cf(o),o.blockedOn===null&&dr.shift()}var _s=b.ReactCurrentBatchConfig,Co=!0;function tv(n,r,o,u){var p=Ut,x=_s.transition;_s.transition=null;try{Ut=1,bc(n,r,o,u)}finally{Ut=p,_s.transition=x}}function nv(n,r,o,u){var p=Ut,x=_s.transition;_s.transition=null;try{Ut=4,bc(n,r,o,u)}finally{Ut=p,_s.transition=x}}function bc(n,r,o,u){if(Co){var p=Rc(n,r,o,u);if(p===null)Xc(n,r,u,bo,o),Af(n,u);else if(Q0(p,n,r,o,u))u.stopPropagation();else if(Af(n,u),r&4&&-1<J0.indexOf(n)){for(;p!==null;){var x=Fa(p);if(x!==null&&wo(x),x=Rc(n,r,o,u),x===null&&Xc(n,r,u,bo,o),x===p)break;p=x}p!==null&&u.stopPropagation()}else Xc(n,r,u,null,o)}}var bo=null;function Rc(n,r,o,u){if(bo=null,n=Ve(u),n=Wr(n),n!==null)if(r=Lt(n),r===null)n=null;else if(o=r.tag,o===13){if(n=D(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return bo=n,null}function Rf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ht()){case lt:return 1;case Ct:return 4;case It:case Ht:return 16;case $t:return 536870912;default:return 16}default:return 16}}var fr=null,Pc=null,Ro=null;function Pf(){if(Ro)return Ro;var n,r=Pc,o=r.length,u,p="value"in fr?fr.value:fr.textContent,x=p.length;for(n=0;n<o&&r[n]===p[n];n++);var C=o-n;for(u=1;u<=C&&r[o-u]===p[x-u];u++);return Ro=p.slice(n,1<u?1-u:void 0)}function Po(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function Lf(){return!1}function Jn(n){function r(o,u,p,x,C){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(o=n[H],this[H]=o?o(x):x[H]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Lo:Lf,this.isPropagationStopped=Lf,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),r}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Jn(xs),Aa=ie({},xs,{view:0,detail:0}),iv=Jn(Aa),Nc,Dc,Ca,No=ie({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(Nc=n.screenX-Ca.screenX,Dc=n.screenY-Ca.screenY):Dc=Nc=0,Ca=n),Nc)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),Nf=Jn(No),rv=ie({},No,{dataTransfer:0}),sv=Jn(rv),av=ie({},Aa,{relatedTarget:0}),Ic=Jn(av),ov=ie({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=Jn(ov),cv=ie({},xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uv=Jn(cv),dv=ie({},xs,{data:0}),Df=Jn(dv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=pv[n])?!!r[n]:!1}function Uc(){return mv}var gv=ie({},Aa,{key:function(n){if(n.key){var r=fv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=Jn(gv),_v=ie({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Jn(_v),xv=ie({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),yv=Jn(xv),Sv=ie({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Jn(Sv),Ev=ie({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Jn(Ev),Tv=[9,13,27,32],Oc=d&&"CompositionEvent"in window,ba=null;d&&"documentMode"in document&&(ba=document.documentMode);var Av=d&&"TextEvent"in window&&!ba,Uf=d&&(!Oc||ba&&8<ba&&11>=ba),Of=" ",Ff=!1;function zf(n,r){switch(n){case"keyup":return Tv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function Cv(n,r){switch(n){case"compositionend":return kf(r);case"keypress":return r.which!==32?null:(Ff=!0,Of);case"textInput":return n=r.data,n===Of&&Ff?null:n;default:return null}}function bv(n,r){if(ys)return n==="compositionend"||!Oc&&zf(n,r)?(n=Pf(),Ro=Pc=fr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Uf&&r.locale!=="ko"?null:r.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Rv[n.type]:r==="textarea"}function Hf(n,r,o,u){vt(u),r=Fo(r,"onChange"),0<r.length&&(o=new Lc("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Ra=null,Pa=null;function Pv(n){sh(n,0)}function Do(n){var r=Ts(n);if(Se(r))return n}function Lv(n,r){if(n==="change")return r}var Vf=!1;if(d){var Fc;if(d){var zc="oninput"in document;if(!zc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),zc=typeof Gf.oninput=="function"}Fc=zc}else Fc=!1;Vf=Fc&&(!document.documentMode||9<document.documentMode)}function Wf(){Ra&&(Ra.detachEvent("onpropertychange",jf),Pa=Ra=null)}function jf(n){if(n.propertyName==="value"&&Do(Pa)){var r=[];Hf(r,Pa,n,Ve(n)),Ot(Pv,r)}}function Nv(n,r,o){n==="focusin"?(Wf(),Ra=r,Pa=o,Ra.attachEvent("onpropertychange",jf)):n==="focusout"&&Wf()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Do(Pa)}function Iv(n,r){if(n==="click")return Do(r)}function Uv(n,r){if(n==="input"||n==="change")return Do(r)}function Ov(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var gi=typeof Object.is=="function"?Object.is:Ov;function La(n,r){if(gi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!f.call(r,p)||!gi(n[p],r[p]))return!1}return!0}function Xf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qf(n,r){var o=Xf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Xf(o)}}function Yf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Yf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function $f(){for(var n=window,r=Ee();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ee(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Fv(n){var r=$f(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Yf(o.ownerDocument.documentElement,o)){if(u!==null&&kc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=qf(o,x);var C=qf(o,u);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(C.node,C.offset)):(r.setEnd(C.node,C.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=d&&"documentMode"in document&&11>=document.documentMode,Ss=null,Bc=null,Na=null,Hc=!1;function Kf(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Hc||Ss==null||Ss!==Ee(u)||(u=Ss,"selectionStart"in u&&kc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Na&&La(Na,u)||(Na=u,u=Fo(Bc,"onSelect"),0<u.length&&(r=new Lc("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ss)))}function Io(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ms={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Vc={},Zf={};d&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Uo(n){if(Vc[n])return Vc[n];if(!Ms[n])return n;var r=Ms[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Zf)return Vc[n]=r[o];return n}var Jf=Uo("animationend"),Qf=Uo("animationiteration"),eh=Uo("animationstart"),th=Uo("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,r){nh.set(n,r),l(r,[n])}for(var Gc=0;Gc<ih.length;Gc++){var Wc=ih[Gc],kv=Wc.toLowerCase(),Bv=Wc[0].toUpperCase()+Wc.slice(1);hr(kv,"on"+Bv)}hr(Jf,"onAnimationEnd"),hr(Qf,"onAnimationIteration"),hr(eh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(th,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function rh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,Yt(u,r,void 0,n),n.currentTarget=null}function sh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var C=u.length-1;0<=C;C--){var H=u[C],j=H.instance,he=H.currentTarget;if(H=H.listener,j!==x&&p.isPropagationStopped())break e;rh(p,H,he),x=j}else for(C=0;C<u.length;C++){if(H=u[C],j=H.instance,he=H.currentTarget,H=H.listener,j!==x&&p.isPropagationStopped())break e;rh(p,H,he),x=j}}}if(ln)throw n=An,ln=!1,An=null,n}function jt(n,r){var o=r[Jc];o===void 0&&(o=r[Jc]=new Set);var u=n+"__bubble";o.has(u)||(ah(r,n,2,!1),o.add(u))}function jc(n,r,o){var u=0;r&&(u|=4),ah(o,n,u,r)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[Oo]){n[Oo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Hv.has(o)||jc(o,!1,n),jc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Oo]||(r[Oo]=!0,jc("selectionchange",!1,r))}}function ah(n,r,o,u){switch(Rf(r)){case 1:var p=tv;break;case 4:p=nv;break;default:p=bc}o=p.bind(null,r,o,n),p=void 0,!Ge||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Xc(n,r,o,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var H=u.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(C===4)for(C=u.return;C!==null;){var j=C.tag;if((j===3||j===4)&&(j=C.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;C=C.return}for(;H!==null;){if(C=Wr(H),C===null)return;if(j=C.tag,j===5||j===6){u=x=C;continue e}H=H.parentNode}}u=u.return}Ot(function(){var he=x,ke=Ve(o),Be=[];e:{var Ue=nh.get(n);if(Ue!==void 0){var Qe=Lc,at=n;switch(n){case"keypress":if(Po(o)===0)break e;case"keydown":case"keyup":Qe=vv;break;case"focusin":at="focus",Qe=Ic;break;case"focusout":at="blur",Qe=Ic;break;case"beforeblur":case"afterblur":Qe=Ic;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=yv;break;case Jf:case Qf:case eh:Qe=lv;break;case th:Qe=Mv;break;case"scroll":Qe=iv;break;case"wheel":Qe=wv;break;case"copy":case"cut":case"paste":Qe=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=If}var ot=(r&4)!==0,sn=!ot&&n==="scroll",ae=ot?Ue!==null?Ue+"Capture":null:Ue;ot=[];for(var $=he,ue;$!==null;){ue=$;var We=ue.stateNode;if(ue.tag===5&&We!==null&&(ue=We,ae!==null&&(We=Ft($,ae),We!=null&&ot.push(Ua($,We,ue)))),sn)break;$=$.return}0<ot.length&&(Ue=new Qe(Ue,at,null,o,ke),Be.push({event:Ue,listeners:ot}))}}if((r&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Ue&&o!==G&&(at=o.relatedTarget||o.fromElement)&&(Wr(at)||at[Hi]))break e;if((Qe||Ue)&&(Ue=ke.window===ke?ke:(Ue=ke.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,Qe?(at=o.relatedTarget||o.toElement,Qe=he,at=at?Wr(at):null,at!==null&&(sn=Lt(at),at!==sn||at.tag!==5&&at.tag!==6)&&(at=null)):(Qe=null,at=he),Qe!==at)){if(ot=Nf,We="onMouseLeave",ae="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(ot=If,We="onPointerLeave",ae="onPointerEnter",$="pointer"),sn=Qe==null?Ue:Ts(Qe),ue=at==null?Ue:Ts(at),Ue=new ot(We,$+"leave",Qe,o,ke),Ue.target=sn,Ue.relatedTarget=ue,We=null,Wr(ke)===he&&(ot=new ot(ae,$+"enter",at,o,ke),ot.target=ue,ot.relatedTarget=sn,We=ot),sn=We,Qe&&at)t:{for(ot=Qe,ae=at,$=0,ue=ot;ue;ue=Es(ue))$++;for(ue=0,We=ae;We;We=Es(We))ue++;for(;0<$-ue;)ot=Es(ot),$--;for(;0<ue-$;)ae=Es(ae),ue--;for(;$--;){if(ot===ae||ae!==null&&ot===ae.alternate)break t;ot=Es(ot),ae=Es(ae)}ot=null}else ot=null;Qe!==null&&oh(Be,Ue,Qe,ot,!1),at!==null&&sn!==null&&oh(Be,sn,at,ot,!0)}}e:{if(Ue=he?Ts(he):window,Qe=Ue.nodeName&&Ue.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Ue.type==="file")var ct=Lv;else if(Bf(Ue))if(Vf)ct=Uv;else{ct=Dv;var pt=Nv}else(Qe=Ue.nodeName)&&Qe.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(ct=Iv);if(ct&&(ct=ct(n,he))){Hf(Be,ct,o,ke);break e}pt&&pt(n,Ue,he),n==="focusout"&&(pt=Ue._wrapperState)&&pt.controlled&&Ue.type==="number"&&Xe(Ue,"number",Ue.value)}switch(pt=he?Ts(he):window,n){case"focusin":(Bf(pt)||pt.contentEditable==="true")&&(Ss=pt,Bc=he,Na=null);break;case"focusout":Na=Bc=Ss=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Kf(Be,o,ke);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Kf(Be,o,ke)}var mt;if(Oc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ys?zf(n,o)&&(xt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(Uf&&o.locale!=="ko"&&(ys||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ys&&(mt=Pf()):(fr=ke,Pc="value"in fr?fr.value:fr.textContent,ys=!0)),pt=Fo(he,xt),0<pt.length&&(xt=new Df(xt,n,null,o,ke),Be.push({event:xt,listeners:pt}),mt?xt.data=mt:(mt=kf(o),mt!==null&&(xt.data=mt)))),(mt=Av?Cv(n,o):bv(n,o))&&(he=Fo(he,"onBeforeInput"),0<he.length&&(ke=new Df("onBeforeInput","beforeinput",null,o,ke),Be.push({event:ke,listeners:he}),ke.data=mt))}sh(Be,r)})}function Ua(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Fo(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Ft(n,o),x!=null&&u.unshift(Ua(n,x,p)),x=Ft(n,r),x!=null&&u.push(Ua(n,x,p))),n=n.return}return u}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function oh(n,r,o,u,p){for(var x=r._reactName,C=[];o!==null&&o!==u;){var H=o,j=H.alternate,he=H.stateNode;if(j!==null&&j===u)break;H.tag===5&&he!==null&&(H=he,p?(j=Ft(o,x),j!=null&&C.unshift(Ua(o,j,H))):p||(j=Ft(o,x),j!=null&&C.push(Ua(o,j,H)))),o=o.return}C.length!==0&&n.push({event:r,listeners:C})}var Vv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function lh(n){return(typeof n=="string"?n:""+n).replace(Vv,`
`).replace(Gv,"")}function zo(n,r,o){if(r=lh(r),lh(n)!==r&&o)throw Error(t(425))}function ko(){}var qc=null,Yc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,jv=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(n){return ch.resolve(null).then(n).catch(Xv)}:Kc;function Xv(n){setTimeout(function(){throw n})}function Zc(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),Ta(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);Ta(r)}function pr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function uh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Ri="__reactFiber$"+ws,Oa="__reactProps$"+ws,Hi="__reactContainer$"+ws,Jc="__reactEvents$"+ws,qv="__reactListeners$"+ws,Yv="__reactHandles$"+ws;function Wr(n){var r=n[Ri];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Hi]||o[Ri]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=uh(n);n!==null;){if(o=n[Ri])return o;n=uh(n)}return r}n=o,o=n.parentNode}return null}function Fa(n){return n=n[Ri]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bo(n){return n[Oa]||null}var Qc=[],As=-1;function mr(n){return{current:n}}function Xt(n){0>As||(n.current=Qc[As],Qc[As]=null,As--)}function Gt(n,r){As++,Qc[As]=n.current,n.current=r}var gr={},Cn=mr(gr),Vn=mr(!1),jr=gr;function Cs(n,r){var o=n.type.contextTypes;if(!o)return gr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in o)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(n){return n=n.childContextTypes,n!=null}function Ho(){Xt(Vn),Xt(Cn)}function dh(n,r,o){if(Cn.current!==gr)throw Error(t(168));Gt(Cn,r),Gt(Vn,o)}function fh(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,ye(n)||"Unknown",p));return ie({},o,u)}function Vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,jr=Cn.current,Gt(Cn,n),Gt(Vn,Vn.current),!0}function hh(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=fh(n,r,jr),u.__reactInternalMemoizedMergedChildContext=n,Xt(Vn),Xt(Cn),Gt(Cn,n)):Xt(Vn),Gt(Vn,o)}var Vi=null,Go=!1,eu=!1;function ph(n){Vi===null?Vi=[n]:Vi.push(n)}function $v(n){Go=!0,ph(n)}function vr(){if(!eu&&Vi!==null){eu=!0;var n=0,r=Ut;try{var o=Vi;for(Ut=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Vi=null,Go=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(n+1)),Re(lt,vr),p}finally{Ut=r,eu=!1}}return null}var bs=[],Rs=0,Wo=null,jo=0,oi=[],li=0,Xr=null,Gi=1,Wi="";function qr(n,r){bs[Rs++]=jo,bs[Rs++]=Wo,Wo=n,jo=r}function mh(n,r,o){oi[li++]=Gi,oi[li++]=Wi,oi[li++]=Xr,Xr=n;var u=Gi;n=Wi;var p=32-yt(u)-1;u&=~(1<<p),o+=1;var x=32-yt(r)+p;if(30<x){var C=p-p%5;x=(u&(1<<C)-1).toString(32),u>>=C,p-=C,Gi=1<<32-yt(r)+p|o<<p|u,Wi=x+n}else Gi=1<<x|o<<p|u,Wi=n}function tu(n){n.return!==null&&(qr(n,1),mh(n,1,0))}function nu(n){for(;n===Wo;)Wo=bs[--Rs],bs[Rs]=null,jo=bs[--Rs],bs[Rs]=null;for(;n===Xr;)Xr=oi[--li],oi[li]=null,Wi=oi[--li],oi[li]=null,Gi=oi[--li],oi[li]=null}var Qn=null,ei=null,Kt=!1,vi=null;function gh(n,r){var o=fi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function vh(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Qn=n,ei=pr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Qn=n,ei=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Xr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=fi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Qn=n,ei=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(Kt){var r=ei;if(r){var o=r;if(!vh(n,r)){if(iu(n))throw Error(t(418));r=pr(o.nextSibling);var u=Qn;r&&vh(n,r)?gh(u,o):(n.flags=n.flags&-4097|2,Kt=!1,Qn=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,Qn=n}}}function _h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function Xo(n){if(n!==Qn)return!1;if(!Kt)return _h(n),Kt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=ei)){if(iu(n))throw xh(),Error(t(418));for(;r;)gh(n,r),r=pr(r.nextSibling)}if(_h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ei=pr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ei=null}}else ei=Qn?pr(n.stateNode.nextSibling):null;return!0}function xh(){for(var n=ei;n;)n=pr(n.nextSibling)}function Ps(){ei=Qn=null,Kt=!1}function su(n){vi===null?vi=[n]:vi.push(n)}var Kv=b.ReactCurrentBatchConfig;function za(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(C){var H=p.refs;C===null?delete H[x]:H[x]=C},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function qo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function yh(n){var r=n._init;return r(n._payload)}function Sh(n){function r(ae,$){if(n){var ue=ae.deletions;ue===null?(ae.deletions=[$],ae.flags|=16):ue.push($)}}function o(ae,$){if(!n)return null;for(;$!==null;)r(ae,$),$=$.sibling;return null}function u(ae,$){for(ae=new Map;$!==null;)$.key!==null?ae.set($.key,$):ae.set($.index,$),$=$.sibling;return ae}function p(ae,$){return ae=Tr(ae,$),ae.index=0,ae.sibling=null,ae}function x(ae,$,ue){return ae.index=ue,n?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<$?(ae.flags|=2,$):ue):(ae.flags|=2,$)):(ae.flags|=1048576,$)}function C(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function H(ae,$,ue,We){return $===null||$.tag!==6?($=Ku(ue,ae.mode,We),$.return=ae,$):($=p($,ue),$.return=ae,$)}function j(ae,$,ue,We){var ct=ue.type;return ct===I?ke(ae,$,ue.props.children,We,ue.key):$!==null&&($.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===K&&yh(ct)===$.type)?(We=p($,ue.props),We.ref=za(ae,$,ue),We.return=ae,We):(We=vl(ue.type,ue.key,ue.props,null,ae.mode,We),We.ref=za(ae,$,ue),We.return=ae,We)}function he(ae,$,ue,We){return $===null||$.tag!==4||$.stateNode.containerInfo!==ue.containerInfo||$.stateNode.implementation!==ue.implementation?($=Zu(ue,ae.mode,We),$.return=ae,$):($=p($,ue.children||[]),$.return=ae,$)}function ke(ae,$,ue,We,ct){return $===null||$.tag!==7?($=ts(ue,ae.mode,We,ct),$.return=ae,$):($=p($,ue),$.return=ae,$)}function Be(ae,$,ue){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Ku(""+$,ae.mode,ue),$.return=ae,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case z:return ue=vl($.type,$.key,$.props,null,ae.mode,ue),ue.ref=za(ae,null,$),ue.return=ae,ue;case P:return $=Zu($,ae.mode,ue),$.return=ae,$;case K:var We=$._init;return Be(ae,We($._payload),ue)}if(O($)||re($))return $=ts($,ae.mode,ue,null),$.return=ae,$;qo(ae,$)}return null}function Ue(ae,$,ue,We){var ct=$!==null?$.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ct!==null?null:H(ae,$,""+ue,We);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case z:return ue.key===ct?j(ae,$,ue,We):null;case P:return ue.key===ct?he(ae,$,ue,We):null;case K:return ct=ue._init,Ue(ae,$,ct(ue._payload),We)}if(O(ue)||re(ue))return ct!==null?null:ke(ae,$,ue,We,null);qo(ae,ue)}return null}function Qe(ae,$,ue,We,ct){if(typeof We=="string"&&We!==""||typeof We=="number")return ae=ae.get(ue)||null,H($,ae,""+We,ct);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case z:return ae=ae.get(We.key===null?ue:We.key)||null,j($,ae,We,ct);case P:return ae=ae.get(We.key===null?ue:We.key)||null,he($,ae,We,ct);case K:var pt=We._init;return Qe(ae,$,ue,pt(We._payload),ct)}if(O(We)||re(We))return ae=ae.get(ue)||null,ke($,ae,We,ct,null);qo($,We)}return null}function at(ae,$,ue,We){for(var ct=null,pt=null,mt=$,xt=$=0,yn=null;mt!==null&&xt<ue.length;xt++){mt.index>xt?(yn=mt,mt=null):yn=mt.sibling;var Dt=Ue(ae,mt,ue[xt],We);if(Dt===null){mt===null&&(mt=yn);break}n&&mt&&Dt.alternate===null&&r(ae,mt),$=x(Dt,$,xt),pt===null?ct=Dt:pt.sibling=Dt,pt=Dt,mt=yn}if(xt===ue.length)return o(ae,mt),Kt&&qr(ae,xt),ct;if(mt===null){for(;xt<ue.length;xt++)mt=Be(ae,ue[xt],We),mt!==null&&($=x(mt,$,xt),pt===null?ct=mt:pt.sibling=mt,pt=mt);return Kt&&qr(ae,xt),ct}for(mt=u(ae,mt);xt<ue.length;xt++)yn=Qe(mt,ae,xt,ue[xt],We),yn!==null&&(n&&yn.alternate!==null&&mt.delete(yn.key===null?xt:yn.key),$=x(yn,$,xt),pt===null?ct=yn:pt.sibling=yn,pt=yn);return n&&mt.forEach(function(Ar){return r(ae,Ar)}),Kt&&qr(ae,xt),ct}function ot(ae,$,ue,We){var ct=re(ue);if(typeof ct!="function")throw Error(t(150));if(ue=ct.call(ue),ue==null)throw Error(t(151));for(var pt=ct=null,mt=$,xt=$=0,yn=null,Dt=ue.next();mt!==null&&!Dt.done;xt++,Dt=ue.next()){mt.index>xt?(yn=mt,mt=null):yn=mt.sibling;var Ar=Ue(ae,mt,Dt.value,We);if(Ar===null){mt===null&&(mt=yn);break}n&&mt&&Ar.alternate===null&&r(ae,mt),$=x(Ar,$,xt),pt===null?ct=Ar:pt.sibling=Ar,pt=Ar,mt=yn}if(Dt.done)return o(ae,mt),Kt&&qr(ae,xt),ct;if(mt===null){for(;!Dt.done;xt++,Dt=ue.next())Dt=Be(ae,Dt.value,We),Dt!==null&&($=x(Dt,$,xt),pt===null?ct=Dt:pt.sibling=Dt,pt=Dt);return Kt&&qr(ae,xt),ct}for(mt=u(ae,mt);!Dt.done;xt++,Dt=ue.next())Dt=Qe(mt,ae,xt,Dt.value,We),Dt!==null&&(n&&Dt.alternate!==null&&mt.delete(Dt.key===null?xt:Dt.key),$=x(Dt,$,xt),pt===null?ct=Dt:pt.sibling=Dt,pt=Dt);return n&&mt.forEach(function(R_){return r(ae,R_)}),Kt&&qr(ae,xt),ct}function sn(ae,$,ue,We){if(typeof ue=="object"&&ue!==null&&ue.type===I&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case z:e:{for(var ct=ue.key,pt=$;pt!==null;){if(pt.key===ct){if(ct=ue.type,ct===I){if(pt.tag===7){o(ae,pt.sibling),$=p(pt,ue.props.children),$.return=ae,ae=$;break e}}else if(pt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===K&&yh(ct)===pt.type){o(ae,pt.sibling),$=p(pt,ue.props),$.ref=za(ae,pt,ue),$.return=ae,ae=$;break e}o(ae,pt);break}else r(ae,pt);pt=pt.sibling}ue.type===I?($=ts(ue.props.children,ae.mode,We,ue.key),$.return=ae,ae=$):(We=vl(ue.type,ue.key,ue.props,null,ae.mode,We),We.ref=za(ae,$,ue),We.return=ae,ae=We)}return C(ae);case P:e:{for(pt=ue.key;$!==null;){if($.key===pt)if($.tag===4&&$.stateNode.containerInfo===ue.containerInfo&&$.stateNode.implementation===ue.implementation){o(ae,$.sibling),$=p($,ue.children||[]),$.return=ae,ae=$;break e}else{o(ae,$);break}else r(ae,$);$=$.sibling}$=Zu(ue,ae.mode,We),$.return=ae,ae=$}return C(ae);case K:return pt=ue._init,sn(ae,$,pt(ue._payload),We)}if(O(ue))return at(ae,$,ue,We);if(re(ue))return ot(ae,$,ue,We);qo(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,$!==null&&$.tag===6?(o(ae,$.sibling),$=p($,ue),$.return=ae,ae=$):(o(ae,$),$=Ku(ue,ae.mode,We),$.return=ae,ae=$),C(ae)):o(ae,$)}return sn}var Ls=Sh(!0),Mh=Sh(!1),Yo=mr(null),$o=null,Ns=null,au=null;function ou(){au=Ns=$o=null}function lu(n){var r=Yo.current;Xt(Yo),n._currentValue=r}function cu(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Ds(n,r){$o=n,au=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Wn=!0),n.firstContext=null)}function ci(n){var r=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:r,next:null},Ns===null){if($o===null)throw Error(t(308));Ns=n,$o.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return r}var Yr=null;function uu(n){Yr===null?Yr=[n]:Yr.push(n)}function Eh(n,r,o,u){var p=r.interleaved;return p===null?(o.next=o,uu(r)):(o.next=p.next,p.next=o),r.interleaved=o,ji(n,u)}function ji(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var _r=!1;function du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function xr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Nt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,ji(n,o)}return p=u.interleaved,p===null?(r.next=r,uu(u)):(r.next=p.next,p.next=r),u.interleaved=r,ji(n,o)}function Ko(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ya(n,o)}}function Th(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,x=null;if(o=o.firstBaseUpdate,o!==null){do{var C={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};x===null?p=x=C:x=x.next=C,o=o.next}while(o!==null);x===null?p=x=r:x=x.next=r}else p=x=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Zo(n,r,o,u){var p=n.updateQueue;_r=!1;var x=p.firstBaseUpdate,C=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var j=H,he=j.next;j.next=null,C===null?x=he:C.next=he,C=j;var ke=n.alternate;ke!==null&&(ke=ke.updateQueue,H=ke.lastBaseUpdate,H!==C&&(H===null?ke.firstBaseUpdate=he:H.next=he,ke.lastBaseUpdate=j))}if(x!==null){var Be=p.baseState;C=0,ke=he=j=null,H=x;do{var Ue=H.lane,Qe=H.eventTime;if((u&Ue)===Ue){ke!==null&&(ke=ke.next={eventTime:Qe,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var at=n,ot=H;switch(Ue=r,Qe=o,ot.tag){case 1:if(at=ot.payload,typeof at=="function"){Be=at.call(Qe,Be,Ue);break e}Be=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ot.payload,Ue=typeof at=="function"?at.call(Qe,Be,Ue):at,Ue==null)break e;Be=ie({},Be,Ue);break e;case 2:_r=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Ue=p.effects,Ue===null?p.effects=[H]:Ue.push(H))}else Qe={eventTime:Qe,lane:Ue,tag:H.tag,payload:H.payload,callback:H.callback,next:null},ke===null?(he=ke=Qe,j=Be):ke=ke.next=Qe,C|=Ue;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Ue=H,H=Ue.next,Ue.next=null,p.lastBaseUpdate=Ue,p.shared.pending=null}}while(!0);if(ke===null&&(j=Be),p.baseState=j,p.firstBaseUpdate=he,p.lastBaseUpdate=ke,r=p.shared.interleaved,r!==null){p=r;do C|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);Zr|=C,n.lanes=C,n.memoizedState=Be}}function Ah(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ka={},Pi=mr(ka),Ba=mr(ka),Ha=mr(ka);function $r(n){if(n===ka)throw Error(t(174));return n}function fu(n,r){switch(Gt(Ha,r),Gt(Ba,n),Gt(Pi,ka),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ie(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ie(r,n)}Xt(Pi),Gt(Pi,r)}function Is(){Xt(Pi),Xt(Ba),Xt(Ha)}function Ch(n){$r(Ha.current);var r=$r(Pi.current),o=Ie(r,n.type);r!==o&&(Gt(Ba,n),Gt(Pi,o))}function hu(n){Ba.current===n&&(Xt(Pi),Xt(Ba))}var Qt=mr(0);function Jo(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var Qo=b.ReactCurrentDispatcher,gu=b.ReactCurrentBatchConfig,Kr=0,en=null,fn=null,_n=null,el=!1,Va=!1,Ga=0,Zv=0;function bn(){throw Error(t(321))}function vu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!gi(n[o],r[o]))return!1;return!0}function _u(n,r,o,u,p,x){if(Kr=x,en=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qo.current=n===null||n.memoizedState===null?t_:n_,n=o(u,p),Va){x=0;do{if(Va=!1,Ga=0,25<=x)throw Error(t(301));x+=1,_n=fn=null,r.updateQueue=null,Qo.current=i_,n=o(u,p)}while(Va)}if(Qo.current=il,r=fn!==null&&fn.next!==null,Kr=0,_n=fn=en=null,el=!1,r)throw Error(t(300));return n}function xu(){var n=Ga!==0;return Ga=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?en.memoizedState=_n=n:_n=_n.next=n,_n}function ui(){if(fn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var r=_n===null?en.memoizedState:_n.next;if(r!==null)_n=r,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},_n===null?en.memoizedState=_n=n:_n=_n.next=n}return _n}function Wa(n,r){return typeof r=="function"?r(n):r}function yu(n){var r=ui(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=fn,p=u.baseQueue,x=o.pending;if(x!==null){if(p!==null){var C=p.next;p.next=x.next,x.next=C}u.baseQueue=p=x,o.pending=null}if(p!==null){x=p.next,u=u.baseState;var H=C=null,j=null,he=x;do{var ke=he.lane;if((Kr&ke)===ke)j!==null&&(j=j.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:n(u,he.action);else{var Be={lane:ke,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};j===null?(H=j=Be,C=u):j=j.next=Be,en.lanes|=ke,Zr|=ke}he=he.next}while(he!==null&&he!==x);j===null?C=u:j.next=H,gi(u,r.memoizedState)||(Wn=!0),r.memoizedState=u,r.baseState=C,r.baseQueue=j,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do x=p.lane,en.lanes|=x,Zr|=x,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Su(n){var r=ui(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,x=r.memoizedState;if(p!==null){o.pending=null;var C=p=p.next;do x=n(x,C.action),C=C.next;while(C!==p);gi(x,r.memoizedState)||(Wn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),o.lastRenderedState=x}return[x,u]}function bh(){}function Rh(n,r){var o=en,u=ui(),p=r(),x=!gi(u.memoizedState,p);if(x&&(u.memoizedState=p,Wn=!0),u=u.queue,Mu(Nh.bind(null,o,u,n),[n]),u.getSnapshot!==r||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,ja(9,Lh.bind(null,o,u,p,r),void 0,null),xn===null)throw Error(t(349));(Kr&30)!==0||Ph(o,r,p)}return p}function Ph(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=en.updateQueue,r===null?(r={lastEffect:null,stores:null},en.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Lh(n,r,o,u){r.value=o,r.getSnapshot=u,Dh(r)&&Ih(n)}function Nh(n,r,o){return o(function(){Dh(r)&&Ih(n)})}function Dh(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!gi(n,o)}catch{return!0}}function Ih(n){var r=ji(n,1);r!==null&&Si(r,n,1,-1)}function Uh(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},r.queue=n,n=n.dispatch=e_.bind(null,en,n),[r.memoizedState,n]}function ja(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=en.updateQueue,r===null?(r={lastEffect:null,stores:null},en.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Oh(){return ui().memoizedState}function tl(n,r,o,u){var p=Li();en.flags|=n,p.memoizedState=ja(1|r,o,void 0,u===void 0?null:u)}function nl(n,r,o,u){var p=ui();u=u===void 0?null:u;var x=void 0;if(fn!==null){var C=fn.memoizedState;if(x=C.destroy,u!==null&&vu(u,C.deps)){p.memoizedState=ja(r,o,x,u);return}}en.flags|=n,p.memoizedState=ja(1|r,o,x,u)}function Fh(n,r){return tl(8390656,8,n,r)}function Mu(n,r){return nl(2048,8,n,r)}function zh(n,r){return nl(4,2,n,r)}function kh(n,r){return nl(4,4,n,r)}function Bh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Hh(n,r,o){return o=o!=null?o.concat([n]):null,nl(4,4,Bh.bind(null,r,n),o)}function Eu(){}function Vh(n,r){var o=ui();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&vu(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Gh(n,r){var o=ui();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&vu(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function Wh(n,r,o){return(Kr&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=o):(gi(o,r)||(o=Vr(),en.lanes|=o,Zr|=o,n.baseState=!0),r)}function Jv(n,r){var o=Ut;Ut=o!==0&&4>o?o:4,n(!0);var u=gu.transition;gu.transition={};try{n(!1),r()}finally{Ut=o,gu.transition=u}}function jh(){return ui().memoizedState}function Qv(n,r,o){var u=Er(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Xh(n))qh(r,o);else if(o=Eh(n,r,o,u),o!==null){var p=Fn();Si(o,n,u,p),Yh(o,r,u)}}function e_(n,r,o){var u=Er(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Xh(n))qh(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var C=r.lastRenderedState,H=x(C,o);if(p.hasEagerState=!0,p.eagerState=H,gi(H,C)){var j=r.interleaved;j===null?(p.next=p,uu(r)):(p.next=j.next,j.next=p),r.interleaved=p;return}}catch{}finally{}o=Eh(n,r,p,u),o!==null&&(p=Fn(),Si(o,n,u,p),Yh(o,r,u))}}function Xh(n){var r=n.alternate;return n===en||r!==null&&r===en}function qh(n,r){Va=el=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Yh(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ya(n,o)}}var il={readContext:ci,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},t_={readContext:ci,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:ci,useEffect:Fh,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,tl(4194308,4,Bh.bind(null,r,n),o)},useLayoutEffect:function(n,r){return tl(4194308,4,n,r)},useInsertionEffect:function(n,r){return tl(4,2,n,r)},useMemo:function(n,r){var o=Li();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Li();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Qv.bind(null,en,n),[u.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Uh,useDebugValue:Eu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Uh(!1),r=n[0];return n=Jv.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=en,p=Li();if(Kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),xn===null)throw Error(t(349));(Kr&30)!==0||Ph(u,r,o)}p.memoizedState=o;var x={value:o,getSnapshot:r};return p.queue=x,Fh(Nh.bind(null,u,x,n),[n]),u.flags|=2048,ja(9,Lh.bind(null,u,x,o,r),void 0,null),o},useId:function(){var n=Li(),r=xn.identifierPrefix;if(Kt){var o=Wi,u=Gi;o=(u&~(1<<32-yt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ga++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Zv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},n_={readContext:ci,useCallback:Vh,useContext:ci,useEffect:Mu,useImperativeHandle:Hh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Gh,useReducer:yu,useRef:Oh,useState:function(){return yu(Wa)},useDebugValue:Eu,useDeferredValue:function(n){var r=ui();return Wh(r,fn.memoizedState,n)},useTransition:function(){var n=yu(Wa)[0],r=ui().memoizedState;return[n,r]},useMutableSource:bh,useSyncExternalStore:Rh,useId:jh,unstable_isNewReconciler:!1},i_={readContext:ci,useCallback:Vh,useContext:ci,useEffect:Mu,useImperativeHandle:Hh,useInsertionEffect:zh,useLayoutEffect:kh,useMemo:Gh,useReducer:Su,useRef:Oh,useState:function(){return Su(Wa)},useDebugValue:Eu,useDeferredValue:function(n){var r=ui();return fn===null?r.memoizedState=n:Wh(r,fn.memoizedState,n)},useTransition:function(){var n=Su(Wa)[0],r=ui().memoizedState;return[n,r]},useMutableSource:bh,useSyncExternalStore:Rh,useId:jh,unstable_isNewReconciler:!1};function _i(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function wu(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:ie({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var rl={isMounted:function(n){return(n=n._reactInternals)?Lt(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Fn(),p=Er(n),x=Xi(u,p);x.payload=r,o!=null&&(x.callback=o),r=xr(n,x,p),r!==null&&(Si(r,n,p,u),Ko(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Fn(),p=Er(n),x=Xi(u,p);x.tag=1,x.payload=r,o!=null&&(x.callback=o),r=xr(n,x,p),r!==null&&(Si(r,n,p,u),Ko(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Fn(),u=Er(n),p=Xi(o,u);p.tag=2,r!=null&&(p.callback=r),r=xr(n,p,u),r!==null&&(Si(r,n,u,o),Ko(r,n,u))}};function $h(n,r,o,u,p,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,C):r.prototype&&r.prototype.isPureReactComponent?!La(o,u)||!La(p,x):!0}function Kh(n,r,o){var u=!1,p=gr,x=r.contextType;return typeof x=="object"&&x!==null?x=ci(x):(p=Gn(r)?jr:Cn.current,u=r.contextTypes,x=(u=u!=null)?Cs(n,p):gr),r=new r(o,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=rl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Zh(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&rl.enqueueReplaceState(r,r.state,null)}function Tu(n,r,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},du(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=ci(x):(x=Gn(r)?jr:Cn.current,p.context=Cs(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(wu(n,r,x,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&rl.enqueueReplaceState(p,p.state,null),Zo(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,r){try{var o="",u=r;do o+=ne(u),u=u.return;while(u);var p=o}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function Au(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Cu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var r_=typeof WeakMap=="function"?WeakMap:Map;function Jh(n,r,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){dl||(dl=!0,Vu=u),Cu(n,r)},o}function Qh(n,r,o){o=Xi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;o.payload=function(){return u(p)},o.callback=function(){Cu(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(o.callback=function(){Cu(n,r),typeof u!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})}),o}function ep(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new r_;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(p.add(o),n=__.bind(null,n,r,o),r.then(n,n))}function tp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function np(n,r,o,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Xi(-1,1),r.tag=2,xr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var s_=b.ReactCurrentOwner,Wn=!1;function On(n,r,o,u){r.child=n===null?Mh(r,null,o,u):Ls(r,n.child,o,u)}function ip(n,r,o,u,p){o=o.render;var x=r.ref;return Ds(r,p),u=_u(n,r,o,u,x,p),o=xu(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):(Kt&&o&&tu(r),r.flags|=1,On(n,r,u,p),r.child)}function rp(n,r,o,u,p){if(n===null){var x=o.type;return typeof x=="function"&&!$u(x)&&x.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=x,sp(n,r,x,u,p)):(n=vl(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var C=x.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(C,u)&&n.ref===r.ref)return qi(n,r,p)}return r.flags|=1,n=Tr(x,u),n.ref=r.ref,n.return=r,r.child=n}function sp(n,r,o,u,p){if(n!==null){var x=n.memoizedProps;if(La(x,u)&&n.ref===r.ref)if(Wn=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Wn=!0);else return r.lanes=n.lanes,qi(n,r,p)}return bu(n,r,o,u,p)}function ap(n,r,o){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Fs,ti),ti|=o;else{if((o&1073741824)===0)return n=x!==null?x.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Gt(Fs,ti),ti|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:o,Gt(Fs,ti),ti|=u}else x!==null?(u=x.baseLanes|o,r.memoizedState=null):u=o,Gt(Fs,ti),ti|=u;return On(n,r,p,o),r.child}function op(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function bu(n,r,o,u,p){var x=Gn(o)?jr:Cn.current;return x=Cs(r,x),Ds(r,p),o=_u(n,r,o,u,x,p),u=xu(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):(Kt&&u&&tu(r),r.flags|=1,On(n,r,o,p),r.child)}function lp(n,r,o,u,p){if(Gn(o)){var x=!0;Vo(r)}else x=!1;if(Ds(r,p),r.stateNode===null)al(n,r),Kh(r,o,u),Tu(r,o,u,p),u=!0;else if(n===null){var C=r.stateNode,H=r.memoizedProps;C.props=H;var j=C.context,he=o.contextType;typeof he=="object"&&he!==null?he=ci(he):(he=Gn(o)?jr:Cn.current,he=Cs(r,he));var ke=o.getDerivedStateFromProps,Be=typeof ke=="function"||typeof C.getSnapshotBeforeUpdate=="function";Be||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==u||j!==he)&&Zh(r,C,u,he),_r=!1;var Ue=r.memoizedState;C.state=Ue,Zo(r,u,C,p),j=r.memoizedState,H!==u||Ue!==j||Vn.current||_r?(typeof ke=="function"&&(wu(r,o,ke,u),j=r.memoizedState),(H=_r||$h(r,o,H,u,Ue,j,he))?(Be||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(r.flags|=4194308)):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=j),C.props=u,C.state=j,C.context=he,u=H):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{C=r.stateNode,wh(n,r),H=r.memoizedProps,he=r.type===r.elementType?H:_i(r.type,H),C.props=he,Be=r.pendingProps,Ue=C.context,j=o.contextType,typeof j=="object"&&j!==null?j=ci(j):(j=Gn(o)?jr:Cn.current,j=Cs(r,j));var Qe=o.getDerivedStateFromProps;(ke=typeof Qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==Be||Ue!==j)&&Zh(r,C,u,j),_r=!1,Ue=r.memoizedState,C.state=Ue,Zo(r,u,C,p);var at=r.memoizedState;H!==Be||Ue!==at||Vn.current||_r?(typeof Qe=="function"&&(wu(r,o,Qe,u),at=r.memoizedState),(he=_r||$h(r,o,he,u,Ue,at,j)||!1)?(ke||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,at,j),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,at,j)),typeof C.componentDidUpdate=="function"&&(r.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=at),C.props=u,C.state=at,C.context=j,u=he):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(r.flags|=1024),u=!1)}return Ru(n,r,o,u,x,p)}function Ru(n,r,o,u,p,x){op(n,r);var C=(r.flags&128)!==0;if(!u&&!C)return p&&hh(r,o,!1),qi(n,r,x);u=r.stateNode,s_.current=r;var H=C&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&C?(r.child=Ls(r,n.child,null,x),r.child=Ls(r,null,H,x)):On(n,r,H,x),r.memoizedState=u.state,p&&hh(r,o,!0),r.child}function cp(n){var r=n.stateNode;r.pendingContext?dh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&dh(n,r.context,!1),fu(n,r.containerInfo)}function up(n,r,o,u,p){return Ps(),su(p),r.flags|=256,On(n,r,o,u),r.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function dp(n,r,o){var u=r.pendingProps,p=Qt.current,x=!1,C=(r.flags&128)!==0,H;if((H=C)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Gt(Qt,p&1),n===null)return ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(C=u.children,n=u.fallback,x?(u=r.mode,x=r.child,C={mode:"hidden",children:C},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=_l(C,u,0,null),n=ts(n,u,o,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Lu(o),r.memoizedState=Pu,n):Nu(r,C));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return a_(n,r,C,u,H,p,o);if(x){x=u.fallback,C=r.mode,p=n.child,H=p.sibling;var j={mode:"hidden",children:u.children};return(C&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=j,r.deletions=null):(u=Tr(p,j),u.subtreeFlags=p.subtreeFlags&14680064),H!==null?x=Tr(H,x):(x=ts(x,C,o,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,C=n.child.memoizedState,C=C===null?Lu(o):{baseLanes:C.baseLanes|o,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~o,r.memoizedState=Pu,u}return x=n.child,n=x.sibling,u=Tr(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Nu(n,r){return r=_l({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function sl(n,r,o,u){return u!==null&&su(u),Ls(r,n.child,null,o),n=Nu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function a_(n,r,o,u,p,x,C){if(o)return r.flags&256?(r.flags&=-257,u=Au(Error(t(422))),sl(n,r,C,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=_l({mode:"visible",children:u.children},p,0,null),x=ts(x,p,C,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&Ls(r,n.child,null,C),r.child.memoizedState=Lu(C),r.memoizedState=Pu,x);if((r.mode&1)===0)return sl(n,r,C,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var H=u.dgst;return u=H,x=Error(t(419)),u=Au(x,u,void 0),sl(n,r,C,u)}if(H=(C&n.childLanes)!==0,Wn||H){if(u=xn,u!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|C))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,ji(n,p),Si(u,n,p,-1))}return Yu(),u=Au(Error(t(421))),sl(n,r,C,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=x_.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,ei=pr(p.nextSibling),Qn=r,Kt=!0,vi=null,n!==null&&(oi[li++]=Gi,oi[li++]=Wi,oi[li++]=Xr,Gi=n.id,Wi=n.overflow,Xr=r),r=Nu(r,u.children),r.flags|=4096,r)}function fp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),cu(n.return,r,o)}function Du(n,r,o,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=o,x.tailMode=p)}function hp(n,r,o){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(On(n,r,u.children,o),u=Qt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fp(n,o,r);else if(n.tag===19)fp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Gt(Qt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Jo(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Du(r,!1,p,o,x);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Jo(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Du(r,!0,o,null,x);break;case"together":Du(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function al(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function qi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Zr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Tr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Tr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function o_(n,r,o){switch(r.tag){case 3:cp(r),Ps();break;case 5:Ch(r);break;case 1:Gn(r.type)&&Vo(r);break;case 4:fu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Gt(Yo,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Gt(Qt,Qt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?dp(n,r,o):(Gt(Qt,Qt.current&1),n=qi(n,r,o),n!==null?n.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return hp(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Qt,Qt.current),u)break;return null;case 22:case 23:return r.lanes=0,ap(n,r,o)}return qi(n,r,o)}var pp,Iu,mp,gp;pp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Iu=function(){},mp=function(n,r,o,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,$r(Pi.current);var x=null;switch(o){case"input":p=we(n,p),u=we(n,u),x=[];break;case"select":p=ie({},p,{value:void 0}),u=ie({},u,{value:void 0}),x=[];break;case"textarea":p=se(n,p),u=se(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ko)}ut(o,u);var C;o=null;for(he in p)if(!u.hasOwnProperty(he)&&p.hasOwnProperty(he)&&p[he]!=null)if(he==="style"){var H=p[he];for(C in H)H.hasOwnProperty(C)&&(o||(o={}),o[C]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?x||(x=[]):(x=x||[]).push(he,null));for(he in u){var j=u[he];if(H=p!=null?p[he]:void 0,u.hasOwnProperty(he)&&j!==H&&(j!=null||H!=null))if(he==="style")if(H){for(C in H)!H.hasOwnProperty(C)||j&&j.hasOwnProperty(C)||(o||(o={}),o[C]="");for(C in j)j.hasOwnProperty(C)&&H[C]!==j[C]&&(o||(o={}),o[C]=j[C])}else o||(x||(x=[]),x.push(he,o)),o=j;else he==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,H=H?H.__html:void 0,j!=null&&H!==j&&(x=x||[]).push(he,j)):he==="children"?typeof j!="string"&&typeof j!="number"||(x=x||[]).push(he,""+j):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(j!=null&&he==="onScroll"&&jt("scroll",n),x||H===j||(x=[])):(x=x||[]).push(he,j))}o&&(x=x||[]).push("style",o);var he=x;(r.updateQueue=he)&&(r.flags|=4)}},gp=function(n,r,o,u){o!==u&&(r.flags|=4)};function Xa(n,r){if(!Kt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Rn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function l_(n,r,o){var u=r.pendingProps;switch(nu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(r),null;case 1:return Gn(r.type)&&Ho(),Rn(r),null;case 3:return u=r.stateNode,Is(),Xt(Vn),Xt(Cn),mu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Xo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,vi!==null&&(ju(vi),vi=null))),Iu(n,r),Rn(r),null;case 5:hu(r);var p=$r(Ha.current);if(o=r.type,n!==null&&r.stateNode!=null)mp(n,r,o,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Rn(r),null}if(n=$r(Pi.current),Xo(r)){u=r.stateNode,o=r.type;var x=r.memoizedProps;switch(u[Ri]=r,u[Oa]=x,n=(r.mode&1)!==0,o){case"dialog":jt("cancel",u),jt("close",u);break;case"iframe":case"object":case"embed":jt("load",u);break;case"video":case"audio":for(p=0;p<Da.length;p++)jt(Da[p],u);break;case"source":jt("error",u);break;case"img":case"image":case"link":jt("error",u),jt("load",u);break;case"details":jt("toggle",u);break;case"input":Me(u,x),jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},jt("invalid",u);break;case"textarea":_e(u,x),jt("invalid",u)}ut(o,x),p=null;for(var C in x)if(x.hasOwnProperty(C)){var H=x[C];C==="children"?typeof H=="string"?u.textContent!==H&&(x.suppressHydrationWarning!==!0&&zo(u.textContent,H,n),p=["children",H]):typeof H=="number"&&u.textContent!==""+H&&(x.suppressHydrationWarning!==!0&&zo(u.textContent,H,n),p=["children",""+H]):a.hasOwnProperty(C)&&H!=null&&C==="onScroll"&&jt("scroll",u)}switch(o){case"input":V(u),Ce(u,x,!0);break;case"textarea":V(u),xe(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=ko)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=qe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(o,{is:u.is}):(n=C.createElement(o),o==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,o),n[Ri]=r,n[Oa]=u,pp(n,r,!1,!1),r.stateNode=n;e:{switch(C=ft(o,u),o){case"dialog":jt("cancel",n),jt("close",n),p=u;break;case"iframe":case"object":case"embed":jt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Da.length;p++)jt(Da[p],n);p=u;break;case"source":jt("error",n),p=u;break;case"img":case"image":case"link":jt("error",n),jt("load",n),p=u;break;case"details":jt("toggle",n),p=u;break;case"input":Me(n,u),p=we(n,u),jt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ie({},u,{value:void 0}),jt("invalid",n);break;case"textarea":_e(n,u),p=se(n,u),jt("invalid",n);break;default:p=u}ut(o,p),H=p;for(x in H)if(H.hasOwnProperty(x)){var j=H[x];x==="style"?ze(n,j):x==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&et(n,j)):x==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&Ae(n,j):typeof j=="number"&&Ae(n,""+j):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?j!=null&&x==="onScroll"&&jt("scroll",n):j!=null&&E(n,x,j,C))}switch(o){case"input":V(n),Ce(n,u,!1);break;case"textarea":V(n),xe(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ne(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?A(n,!!u.multiple,x,!1):u.defaultValue!=null&&A(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ko)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Rn(r),null;case 6:if(n&&r.stateNode!=null)gp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=$r(Ha.current),$r(Pi.current),Xo(r)){if(u=r.stateNode,o=r.memoizedProps,u[Ri]=r,(x=u.nodeValue!==o)&&(n=Qn,n!==null))switch(n.tag){case 3:zo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(u.nodeValue,o,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ri]=r,r.stateNode=u}return Rn(r),null;case 13:if(Xt(Qt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&ei!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xh(),Ps(),r.flags|=98560,x=!1;else if(x=Xo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ri]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rn(r),x=!1}else vi!==null&&(ju(vi),vi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Qt.current&1)!==0?hn===0&&(hn=3):Yu())),r.updateQueue!==null&&(r.flags|=4),Rn(r),null);case 4:return Is(),Iu(n,r),n===null&&Ia(r.stateNode.containerInfo),Rn(r),null;case 10:return lu(r.type._context),Rn(r),null;case 17:return Gn(r.type)&&Ho(),Rn(r),null;case 19:if(Xt(Qt),x=r.memoizedState,x===null)return Rn(r),null;if(u=(r.flags&128)!==0,C=x.rendering,C===null)if(u)Xa(x,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(C=Jo(n),C!==null){for(r.flags|=128,Xa(x,!1),u=C.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)x=o,n=u,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(Qt,Qt.current&1|2),r.child}n=n.sibling}x.tail!==null&&Je()>zs&&(r.flags|=128,u=!0,Xa(x,!1),r.lanes=4194304)}else{if(!u)if(n=Jo(C),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!Kt)return Rn(r),null}else 2*Je()-x.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,u=!0,Xa(x,!1),r.lanes=4194304);x.isBackwards?(C.sibling=r.child,r.child=C):(o=x.last,o!==null?o.sibling=C:r.child=C,x.last=C)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Je(),r.sibling=null,o=Qt.current,Gt(Qt,u?o&1|2:o&1),r):(Rn(r),null);case 22:case 23:return qu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(ti&1073741824)!==0&&(Rn(r),r.subtreeFlags&6&&(r.flags|=8192)):Rn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function c_(n,r){switch(nu(r),r.tag){case 1:return Gn(r.type)&&Ho(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Is(),Xt(Vn),Xt(Cn),mu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return hu(r),null;case 13:if(Xt(Qt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Xt(Qt),null;case 4:return Is(),null;case 10:return lu(r.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var ol=!1,Pn=!1,u_=typeof WeakSet=="function"?WeakSet:Set,it=null;function Os(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){nn(n,r,u)}else o.current=null}function Uu(n,r,o){try{o()}catch(u){nn(n,r,u)}}var vp=!1;function d_(n,r){if(qc=Co,n=$f(),kc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var C=0,H=-1,j=-1,he=0,ke=0,Be=n,Ue=null;t:for(;;){for(var Qe;Be!==o||p!==0&&Be.nodeType!==3||(H=C+p),Be!==x||u!==0&&Be.nodeType!==3||(j=C+u),Be.nodeType===3&&(C+=Be.nodeValue.length),(Qe=Be.firstChild)!==null;)Ue=Be,Be=Qe;for(;;){if(Be===n)break t;if(Ue===o&&++he===p&&(H=C),Ue===x&&++ke===u&&(j=C),(Qe=Be.nextSibling)!==null)break;Be=Ue,Ue=Be.parentNode}Be=Qe}o=H===-1||j===-1?null:{start:H,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yc={focusedElem:n,selectionRange:o},Co=!1,it=r;it!==null;)if(r=it,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,it=n;else for(;it!==null;){r=it;try{var at=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var ot=at.memoizedProps,sn=at.memoizedState,ae=r.stateNode,$=ae.getSnapshotBeforeUpdate(r.elementType===r.type?ot:_i(r.type,ot),sn);ae.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){nn(r,r.return,We)}if(n=r.sibling,n!==null){n.return=r.return,it=n;break}it=r.return}return at=vp,vp=!1,at}function qa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Uu(r,o,x)}p=p.next}while(p!==u)}}function ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Ou(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function _p(n){var r=n.alternate;r!==null&&(n.alternate=null,_p(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ri],delete r[Oa],delete r[Jc],delete r[qv],delete r[Yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xp(n){return n.tag===5||n.tag===3||n.tag===4}function yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ko));else if(u!==4&&(n=n.child,n!==null))for(Fu(n,r,o),n=n.sibling;n!==null;)Fu(n,r,o),n=n.sibling}function zu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(zu(n,r,o),n=n.sibling;n!==null;)zu(n,r,o),n=n.sibling}var En=null,xi=!1;function yr(n,r,o){for(o=o.child;o!==null;)Sp(n,r,o),o=o.sibling}function Sp(n,r,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(St,o)}catch{}switch(o.tag){case 5:Pn||Os(o,r);case 6:var u=En,p=xi;En=null,yr(n,r,o),En=u,xi=p,En!==null&&(xi?(n=En,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):En.removeChild(o.stateNode));break;case 18:En!==null&&(xi?(n=En,o=o.stateNode,n.nodeType===8?Zc(n.parentNode,o):n.nodeType===1&&Zc(n,o),Ta(n)):Zc(En,o.stateNode));break;case 4:u=En,p=xi,En=o.stateNode.containerInfo,xi=!0,yr(n,r,o),En=u,xi=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Uu(o,r,C),p=p.next}while(p!==u)}yr(n,r,o);break;case 1:if(!Pn&&(Os(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(H){nn(o,r,H)}yr(n,r,o);break;case 21:yr(n,r,o);break;case 22:o.mode&1?(Pn=(u=Pn)||o.memoizedState!==null,yr(n,r,o),Pn=u):yr(n,r,o);break;default:yr(n,r,o)}}function Mp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new u_),r.forEach(function(u){var p=y_.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function yi(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var x=n,C=r,H=C;e:for(;H!==null;){switch(H.tag){case 5:En=H.stateNode,xi=!1;break e;case 3:En=H.stateNode.containerInfo,xi=!0;break e;case 4:En=H.stateNode.containerInfo,xi=!0;break e}H=H.return}if(En===null)throw Error(t(160));Sp(x,C,p),En=null,xi=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(he){nn(p,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ep(r,n),r=r.sibling}function Ep(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(r,n),Ni(n),u&4){try{qa(3,n,n.return),ll(3,n)}catch(ot){nn(n,n.return,ot)}try{qa(5,n,n.return)}catch(ot){nn(n,n.return,ot)}}break;case 1:yi(r,n),Ni(n),u&512&&o!==null&&Os(o,o.return);break;case 5:if(yi(r,n),Ni(n),u&512&&o!==null&&Os(o,o.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(ot){nn(n,n.return,ot)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,C=o!==null?o.memoizedProps:x,H=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{H==="input"&&x.type==="radio"&&x.name!=null&&Te(p,x),ft(H,C);var he=ft(H,x);for(C=0;C<j.length;C+=2){var ke=j[C],Be=j[C+1];ke==="style"?ze(p,Be):ke==="dangerouslySetInnerHTML"?et(p,Be):ke==="children"?Ae(p,Be):E(p,ke,Be,he)}switch(H){case"input":Pe(p,x);break;case"textarea":ge(p,x);break;case"select":var Ue=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Qe=x.value;Qe!=null?A(p,!!x.multiple,Qe,!1):Ue!==!!x.multiple&&(x.defaultValue!=null?A(p,!!x.multiple,x.defaultValue,!0):A(p,!!x.multiple,x.multiple?[]:"",!1))}p[Oa]=x}catch(ot){nn(n,n.return,ot)}}break;case 6:if(yi(r,n),Ni(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ot){nn(n,n.return,ot)}}break;case 3:if(yi(r,n),Ni(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ta(r.containerInfo)}catch(ot){nn(n,n.return,ot)}break;case 4:yi(r,n),Ni(n);break;case 13:yi(r,n),Ni(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Hu=Je())),u&4&&Mp(n);break;case 22:if(ke=o!==null&&o.memoizedState!==null,n.mode&1?(Pn=(he=Pn)||ke,yi(r,n),Pn=he):yi(r,n),Ni(n),u&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!ke&&(n.mode&1)!==0)for(it=n,ke=n.child;ke!==null;){for(Be=it=ke;it!==null;){switch(Ue=it,Qe=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:qa(4,Ue,Ue.return);break;case 1:Os(Ue,Ue.return);var at=Ue.stateNode;if(typeof at.componentWillUnmount=="function"){u=Ue,o=Ue.return;try{r=u,at.props=r.memoizedProps,at.state=r.memoizedState,at.componentWillUnmount()}catch(ot){nn(u,o,ot)}}break;case 5:Os(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){Ap(Be);continue}}Qe!==null?(Qe.return=Ue,it=Qe):Ap(Be)}ke=ke.sibling}e:for(ke=null,Be=n;;){if(Be.tag===5){if(ke===null){ke=Be;try{p=Be.stateNode,he?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(H=Be.stateNode,j=Be.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null,H.style.display=Ze("display",C))}catch(ot){nn(n,n.return,ot)}}}else if(Be.tag===6){if(ke===null)try{Be.stateNode.nodeValue=he?"":Be.memoizedProps}catch(ot){nn(n,n.return,ot)}}else if((Be.tag!==22&&Be.tag!==23||Be.memoizedState===null||Be===n)&&Be.child!==null){Be.child.return=Be,Be=Be.child;continue}if(Be===n)break e;for(;Be.sibling===null;){if(Be.return===null||Be.return===n)break e;ke===Be&&(ke=null),Be=Be.return}ke===Be&&(ke=null),Be.sibling.return=Be.return,Be=Be.sibling}}break;case 19:yi(r,n),Ni(n),u&4&&Mp(n);break;case 21:break;default:yi(r,n),Ni(n)}}function Ni(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(xp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ae(p,""),u.flags&=-33);var x=yp(n);zu(n,x,p);break;case 3:case 4:var C=u.stateNode.containerInfo,H=yp(n);Fu(n,H,C);break;default:throw Error(t(161))}}catch(j){nn(n,n.return,j)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function f_(n,r,o){it=n,wp(n)}function wp(n,r,o){for(var u=(n.mode&1)!==0;it!==null;){var p=it,x=p.child;if(p.tag===22&&u){var C=p.memoizedState!==null||ol;if(!C){var H=p.alternate,j=H!==null&&H.memoizedState!==null||Pn;H=ol;var he=Pn;if(ol=C,(Pn=j)&&!he)for(it=p;it!==null;)C=it,j=C.child,C.tag===22&&C.memoizedState!==null?Cp(p):j!==null?(j.return=C,it=j):Cp(p);for(;x!==null;)it=x,wp(x),x=x.sibling;it=p,ol=H,Pn=he}Tp(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,it=x):Tp(n)}}function Tp(n){for(;it!==null;){var r=it;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||ll(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Pn)if(o===null)u.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:_i(r.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Ah(r,x,u);break;case 3:var C=r.updateQueue;if(C!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ah(r,C,o)}break;case 5:var H=r.stateNode;if(o===null&&r.flags&4){o=H;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var ke=he.memoizedState;if(ke!==null){var Be=ke.dehydrated;Be!==null&&Ta(Be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&Ou(r)}catch(Ue){nn(r,r.return,Ue)}}if(r===n){it=null;break}if(o=r.sibling,o!==null){o.return=r.return,it=o;break}it=r.return}}function Ap(n){for(;it!==null;){var r=it;if(r===n){it=null;break}var o=r.sibling;if(o!==null){o.return=r.return,it=o;break}it=r.return}}function Cp(n){for(;it!==null;){var r=it;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ll(4,r)}catch(j){nn(r,o,j)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(j){nn(r,p,j)}}var x=r.return;try{Ou(r)}catch(j){nn(r,x,j)}break;case 5:var C=r.return;try{Ou(r)}catch(j){nn(r,C,j)}}}catch(j){nn(r,r.return,j)}if(r===n){it=null;break}var H=r.sibling;if(H!==null){H.return=r.return,it=H;break}it=r.return}}var h_=Math.ceil,cl=b.ReactCurrentDispatcher,ku=b.ReactCurrentOwner,di=b.ReactCurrentBatchConfig,Nt=0,xn=null,cn=null,wn=0,ti=0,Fs=mr(0),hn=0,Ya=null,Zr=0,ul=0,Bu=0,$a=null,jn=null,Hu=0,zs=1/0,Yi=null,dl=!1,Vu=null,Sr=null,fl=!1,Mr=null,hl=0,Ka=0,Gu=null,pl=-1,ml=0;function Fn(){return(Nt&6)!==0?Je():pl!==-1?pl:pl=Je()}function Er(n){return(n.mode&1)===0?1:(Nt&2)!==0&&wn!==0?wn&-wn:Kv.transition!==null?(ml===0&&(ml=Vr()),ml):(n=Ut,n!==0||(n=window.event,n=n===void 0?16:Rf(n.type)),n)}function Si(n,r,o,u){if(50<Ka)throw Ka=0,Gu=null,Error(t(185));Gr(n,o,u),((Nt&2)===0||n!==xn)&&(n===xn&&((Nt&2)===0&&(ul|=o),hn===4&&wr(n,wn)),Xn(n,u),o===1&&Nt===0&&(r.mode&1)===0&&(zs=Je()+500,Go&&vr()))}function Xn(n,r){var o=n.callbackNode;Bi(n,r);var u=Hn(n,n===xn?wn:0);if(u===0)o!==null&&Ye(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&Ye(o),r===1)n.tag===0?$v(Rp.bind(null,n)):ph(Rp.bind(null,n)),jv(function(){(Nt&6)===0&&vr()}),o=null;else{switch(Eo(u)){case 1:o=lt;break;case 4:o=Ct;break;case 16:o=It;break;case 536870912:o=$t;break;default:o=It}o=Fp(o,bp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function bp(n,r){if(pl=-1,ml=0,(Nt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ks()&&n.callbackNode!==o)return null;var u=Hn(n,n===xn?wn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=gl(n,u);else{r=u;var p=Nt;Nt|=2;var x=Lp();(xn!==n||wn!==r)&&(Yi=null,zs=Je()+500,Qr(n,r));do try{g_();break}catch(H){Pp(n,H)}while(!0);ou(),cl.current=x,Nt=p,cn!==null?r=0:(xn=null,wn=0,r=hn)}if(r!==0){if(r===2&&(p=Hr(n),p!==0&&(u=p,r=Wu(n,p))),r===1)throw o=Ya,Qr(n,0),wr(n,u),Xn(n,Je()),o;if(r===6)wr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!p_(p)&&(r=gl(n,u),r===2&&(x=Hr(n),x!==0&&(u=x,r=Wu(n,x))),r===1))throw o=Ya,Qr(n,0),wr(n,u),Xn(n,Je()),o;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:es(n,jn,Yi);break;case 3:if(wr(n,u),(u&130023424)===u&&(r=Hu+500-Je(),10<r)){if(Hn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Fn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Kc(es.bind(null,n,jn,Yi),r);break}es(n,jn,Yi);break;case 4:if(wr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var C=31-yt(u);x=1<<C,C=r[C],C>p&&(p=C),u&=~x}if(u=p,u=Je()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*h_(u/1960))-u,10<u){n.timeoutHandle=Kc(es.bind(null,n,jn,Yi),u);break}es(n,jn,Yi);break;case 5:es(n,jn,Yi);break;default:throw Error(t(329))}}}return Xn(n,Je()),n.callbackNode===o?bp.bind(null,n):null}function Wu(n,r){var o=$a;return n.current.memoizedState.isDehydrated&&(Qr(n,r).flags|=256),n=gl(n,r),n!==2&&(r=jn,jn=o,r!==null&&ju(r)),n}function ju(n){jn===null?jn=n:jn.push.apply(jn,n)}function p_(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],x=p.getSnapshot;p=p.value;try{if(!gi(x(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function wr(n,r){for(r&=~Bu,r&=~ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-yt(r),u=1<<o;n[o]=-1,r&=~u}}function Rp(n){if((Nt&6)!==0)throw Error(t(327));ks();var r=Hn(n,0);if((r&1)===0)return Xn(n,Je()),null;var o=gl(n,r);if(n.tag!==0&&o===2){var u=Hr(n);u!==0&&(r=u,o=Wu(n,u))}if(o===1)throw o=Ya,Qr(n,0),wr(n,r),Xn(n,Je()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,jn,Yi),Xn(n,Je()),null}function Xu(n,r){var o=Nt;Nt|=1;try{return n(r)}finally{Nt=o,Nt===0&&(zs=Je()+500,Go&&vr())}}function Jr(n){Mr!==null&&Mr.tag===0&&(Nt&6)===0&&ks();var r=Nt;Nt|=1;var o=di.transition,u=Ut;try{if(di.transition=null,Ut=1,n)return n()}finally{Ut=u,di.transition=o,Nt=r,(Nt&6)===0&&vr()}}function qu(){ti=Fs.current,Xt(Fs)}function Qr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Wv(o)),cn!==null)for(o=cn.return;o!==null;){var u=o;switch(nu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ho();break;case 3:Is(),Xt(Vn),Xt(Cn),mu();break;case 5:hu(u);break;case 4:Is();break;case 13:Xt(Qt);break;case 19:Xt(Qt);break;case 10:lu(u.type._context);break;case 22:case 23:qu()}o=o.return}if(xn=n,cn=n=Tr(n.current,null),wn=ti=r,hn=0,Ya=null,Bu=ul=Zr=0,jn=$a=null,Yr!==null){for(r=0;r<Yr.length;r++)if(o=Yr[r],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,x=o.pending;if(x!==null){var C=x.next;x.next=p,u.next=C}o.pending=u}Yr=null}return n}function Pp(n,r){do{var o=cn;try{if(ou(),Qo.current=il,el){for(var u=en.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}el=!1}if(Kr=0,_n=fn=en=null,Va=!1,Ga=0,ku.current=null,o===null||o.return===null){hn=1,Ya=r,cn=null;break}e:{var x=n,C=o.return,H=o,j=r;if(r=wn,H.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var he=j,ke=H,Be=ke.tag;if((ke.mode&1)===0&&(Be===0||Be===11||Be===15)){var Ue=ke.alternate;Ue?(ke.updateQueue=Ue.updateQueue,ke.memoizedState=Ue.memoizedState,ke.lanes=Ue.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var Qe=tp(C);if(Qe!==null){Qe.flags&=-257,np(Qe,C,H,x,r),Qe.mode&1&&ep(x,he,r),r=Qe,j=he;var at=r.updateQueue;if(at===null){var ot=new Set;ot.add(j),r.updateQueue=ot}else at.add(j);break e}else{if((r&1)===0){ep(x,he,r),Yu();break e}j=Error(t(426))}}else if(Kt&&H.mode&1){var sn=tp(C);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),np(sn,C,H,x,r),su(Us(j,H));break e}}x=j=Us(j,H),hn!==4&&(hn=2),$a===null?$a=[x]:$a.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var ae=Jh(x,j,r);Th(x,ae);break e;case 1:H=j;var $=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Sr===null||!Sr.has(ue)))){x.flags|=65536,r&=-r,x.lanes|=r;var We=Qh(x,H,r);Th(x,We);break e}}x=x.return}while(x!==null)}Dp(o)}catch(ct){r=ct,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function Lp(){var n=cl.current;return cl.current=il,n===null?il:n}function Yu(){(hn===0||hn===3||hn===2)&&(hn=4),xn===null||(Zr&268435455)===0&&(ul&268435455)===0||wr(xn,wn)}function gl(n,r){var o=Nt;Nt|=2;var u=Lp();(xn!==n||wn!==r)&&(Yi=null,Qr(n,r));do try{m_();break}catch(p){Pp(n,p)}while(!0);if(ou(),Nt=o,cl.current=u,cn!==null)throw Error(t(261));return xn=null,wn=0,hn}function m_(){for(;cn!==null;)Np(cn)}function g_(){for(;cn!==null&&!tt();)Np(cn)}function Np(n){var r=Op(n.alternate,n,ti);n.memoizedProps=n.pendingProps,r===null?Dp(n):cn=r,ku.current=null}function Dp(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=l_(o,r,ti),o!==null){cn=o;return}}else{if(o=c_(o,r),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,cn=null;return}}if(r=r.sibling,r!==null){cn=r;return}cn=r=n}while(r!==null);hn===0&&(hn=5)}function es(n,r,o){var u=Ut,p=di.transition;try{di.transition=null,Ut=1,v_(n,r,o,u)}finally{di.transition=p,Ut=u}return null}function v_(n,r,o,u){do ks();while(Mr!==null);if((Nt&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=o.lanes|o.childLanes;if(Tc(n,x),n===xn&&(cn=xn=null,wn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fl||(fl=!0,Fp(It,function(){return ks(),null})),x=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||x){x=di.transition,di.transition=null;var C=Ut;Ut=1;var H=Nt;Nt|=4,ku.current=null,d_(n,o),Ep(o,n),Fv(Yc),Co=!!qc,Yc=qc=null,n.current=o,f_(o),st(),Nt=H,Ut=C,di.transition=x}else n.current=o;if(fl&&(fl=!1,Mr=n,hl=p),x=n.pendingLanes,x===0&&(Sr=null),rn(o.stateNode),Xn(n,Je()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(dl)throw dl=!1,n=Vu,Vu=null,n;return(hl&1)!==0&&n.tag!==0&&ks(),x=n.pendingLanes,(x&1)!==0?n===Gu?Ka++:(Ka=0,Gu=n):Ka=0,vr(),null}function ks(){if(Mr!==null){var n=Eo(hl),r=di.transition,o=Ut;try{if(di.transition=null,Ut=16>n?16:n,Mr===null)var u=!1;else{if(n=Mr,Mr=null,hl=0,(Nt&6)!==0)throw Error(t(331));var p=Nt;for(Nt|=4,it=n.current;it!==null;){var x=it,C=x.child;if((it.flags&16)!==0){var H=x.deletions;if(H!==null){for(var j=0;j<H.length;j++){var he=H[j];for(it=he;it!==null;){var ke=it;switch(ke.tag){case 0:case 11:case 15:qa(8,ke,x)}var Be=ke.child;if(Be!==null)Be.return=ke,it=Be;else for(;it!==null;){ke=it;var Ue=ke.sibling,Qe=ke.return;if(_p(ke),ke===he){it=null;break}if(Ue!==null){Ue.return=Qe,it=Ue;break}it=Qe}}}var at=x.alternate;if(at!==null){var ot=at.child;if(ot!==null){at.child=null;do{var sn=ot.sibling;ot.sibling=null,ot=sn}while(ot!==null)}}it=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,it=C;else e:for(;it!==null;){if(x=it,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:qa(9,x,x.return)}var ae=x.sibling;if(ae!==null){ae.return=x.return,it=ae;break e}it=x.return}}var $=n.current;for(it=$;it!==null;){C=it;var ue=C.child;if((C.subtreeFlags&2064)!==0&&ue!==null)ue.return=C,it=ue;else e:for(C=$;it!==null;){if(H=it,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:ll(9,H)}}catch(ct){nn(H,H.return,ct)}if(H===C){it=null;break e}var We=H.sibling;if(We!==null){We.return=H.return,it=We;break e}it=H.return}}if(Nt=p,vr(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(St,n)}catch{}u=!0}return u}finally{Ut=o,di.transition=r}}return!1}function Ip(n,r,o){r=Us(o,r),r=Jh(n,r,1),n=xr(n,r,1),r=Fn(),n!==null&&(Gr(n,1,r),Xn(n,r))}function nn(n,r,o){if(n.tag===3)Ip(n,n,o);else for(;r!==null;){if(r.tag===3){Ip(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Sr===null||!Sr.has(u))){n=Us(o,n),n=Qh(r,n,1),r=xr(r,n,1),n=Fn(),r!==null&&(Gr(r,1,n),Xn(r,n));break}}r=r.return}}function __(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Fn(),n.pingedLanes|=n.suspendedLanes&o,xn===n&&(wn&o)===o&&(hn===4||hn===3&&(wn&130023424)===wn&&500>Je()-Hu?Qr(n,0):Bu|=o),Xn(n,r)}function Up(n,r){r===0&&((n.mode&1)===0?r=1:(r=zt,zt<<=1,(zt&130023424)===0&&(zt=4194304)));var o=Fn();n=ji(n,r),n!==null&&(Gr(n,r,o),Xn(n,o))}function x_(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Up(n,o)}function y_(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Up(n,o)}var Op;Op=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Wn=!1,o_(n,r,o);Wn=(n.flags&131072)!==0}else Wn=!1,Kt&&(r.flags&1048576)!==0&&mh(r,jo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;al(n,r),n=r.pendingProps;var p=Cs(r,Cn.current);Ds(r,o),p=_u(null,r,u,n,p,o);var x=xu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(u)?(x=!0,Vo(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,du(r),p.updater=rl,r.stateNode=p,p._reactInternals=r,Tu(r,u,n,o),r=Ru(null,r,u,!0,x,o)):(r.tag=0,Kt&&x&&tu(r),On(null,r,p,o),r=r.child),r;case 16:u=r.elementType;e:{switch(al(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=M_(u),n=_i(u,n),p){case 0:r=bu(null,r,u,n,o);break e;case 1:r=lp(null,r,u,n,o);break e;case 11:r=ip(null,r,u,n,o);break e;case 14:r=rp(null,r,u,_i(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),bu(n,r,u,p,o);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),lp(n,r,u,p,o);case 3:e:{if(cp(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,wh(n,r),Zo(r,u,null,o);var C=r.memoizedState;if(u=C.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=Us(Error(t(423)),r),r=up(n,r,u,o,p);break e}else if(u!==p){p=Us(Error(t(424)),r),r=up(n,r,u,o,p);break e}else for(ei=pr(r.stateNode.containerInfo.firstChild),Qn=r,Kt=!0,vi=null,o=Mh(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ps(),u===p){r=qi(n,r,o);break e}On(n,r,u,o)}r=r.child}return r;case 5:return Ch(r),n===null&&ru(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,C=p.children,$c(u,p)?C=null:x!==null&&$c(u,x)&&(r.flags|=32),op(n,r),On(n,r,C,o),r.child;case 6:return n===null&&ru(r),null;case 13:return dp(n,r,o);case 4:return fu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ls(r,null,u,o):On(n,r,u,o),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),ip(n,r,u,p,o);case 7:return On(n,r,r.pendingProps,o),r.child;case 8:return On(n,r,r.pendingProps.children,o),r.child;case 12:return On(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,C=p.value,Gt(Yo,u._currentValue),u._currentValue=C,x!==null)if(gi(x.value,C)){if(x.children===p.children&&!Vn.current){r=qi(n,r,o);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var H=x.dependencies;if(H!==null){C=x.child;for(var j=H.firstContext;j!==null;){if(j.context===u){if(x.tag===1){j=Xi(-1,o&-o),j.tag=2;var he=x.updateQueue;if(he!==null){he=he.shared;var ke=he.pending;ke===null?j.next=j:(j.next=ke.next,ke.next=j),he.pending=j}}x.lanes|=o,j=x.alternate,j!==null&&(j.lanes|=o),cu(x.return,o,r),H.lanes|=o;break}j=j.next}}else if(x.tag===10)C=x.type===r.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=o,H=C.alternate,H!==null&&(H.lanes|=o),cu(C,o,r),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===r){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}On(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Ds(r,o),p=ci(p),u=u(p),r.flags|=1,On(n,r,u,o),r.child;case 14:return u=r.type,p=_i(u,r.pendingProps),p=_i(u.type,p),rp(n,r,u,p,o);case 15:return sp(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),al(n,r),r.tag=1,Gn(u)?(n=!0,Vo(r)):n=!1,Ds(r,o),Kh(r,u,p),Tu(r,u,p,o),Ru(null,r,u,!0,n,o);case 19:return hp(n,r,o);case 22:return ap(n,r,o)}throw Error(t(156,r.tag))};function Fp(n,r){return Re(n,r)}function S_(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,r,o,u){return new S_(n,r,o,u)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function M_(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===de)return 14}return 2}function Tr(n,r){var o=n.alternate;return o===null?(o=fi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function vl(n,r,o,u,p,x){var C=2;if(u=n,typeof n=="function")$u(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case I:return ts(o.children,p,x,r);case F:C=8,p|=8;break;case L:return n=fi(12,o,r,p|2),n.elementType=L,n.lanes=x,n;case Y:return n=fi(13,o,r,p),n.elementType=Y,n.lanes=x,n;case ee:return n=fi(19,o,r,p),n.elementType=ee,n.lanes=x,n;case pe:return _l(o,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:C=10;break e;case k:C=9;break e;case J:C=11;break e;case de:C=14;break e;case K:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=fi(C,o,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function ts(n,r,o,u){return n=fi(7,n,u,r),n.lanes=o,n}function _l(n,r,o,u){return n=fi(22,n,u,r),n.elementType=pe,n.lanes=o,n.stateNode={isHidden:!1},n}function Ku(n,r,o){return n=fi(6,n,null,r),n.lanes=o,n}function Zu(n,r,o){return r=fi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function E_(n,r,o,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ju(n,r,o,u,p,x,C,H,j){return n=new E_(n,r,o,H,j),r===1?(r=1,x===!0&&(r|=8)):r=0,x=fi(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(x),n}function w_(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function zp(n){if(!n)return gr;n=n._reactInternals;e:{if(Lt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return fh(n,o,r)}return r}function kp(n,r,o,u,p,x,C,H,j){return n=Ju(o,u,!0,n,p,x,C,H,j),n.context=zp(null),o=n.current,u=Fn(),p=Er(o),x=Xi(u,p),x.callback=r??null,xr(o,x,p),n.current.lanes=p,Gr(n,p,u),Xn(n,u),n}function xl(n,r,o,u){var p=r.current,x=Fn(),C=Er(p);return o=zp(o),r.context===null?r.context=o:r.pendingContext=o,r=Xi(x,C),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=xr(p,r,C),n!==null&&(Si(n,p,C,x),Ko(n,p,C)),C}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Qu(n,r){Bp(n,r),(n=n.alternate)&&Bp(n,r)}function T_(){return null}var Hp=typeof reportError=="function"?reportError:function(n){console.error(n)};function ed(n){this._internalRoot=n}Sl.prototype.render=ed.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));xl(n,r,null,null)},Sl.prototype.unmount=ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Jr(function(){xl(null,n,null,null)}),r[Hi]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var r=wf();n={blockedOn:null,target:n,priority:r};for(var o=0;o<dr.length&&r!==0&&r<dr[o].priority;o++);dr.splice(o,0,n),o===0&&Cf(n)}};function td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function A_(n,r,o,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var he=yl(C);x.call(he)}}var C=kp(r,u,n,0,null,!1,!1,"",Vp);return n._reactRootContainer=C,n[Hi]=C.current,Ia(n.nodeType===8?n.parentNode:n),Jr(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var H=u;u=function(){var he=yl(j);H.call(he)}}var j=Ju(n,0,!1,null,null,!1,!1,"",Vp);return n._reactRootContainer=j,n[Hi]=j.current,Ia(n.nodeType===8?n.parentNode:n),Jr(function(){xl(r,j,o,u)}),j}function El(n,r,o,u,p){var x=o._reactRootContainer;if(x){var C=x;if(typeof p=="function"){var H=p;p=function(){var j=yl(C);H.call(j)}}xl(r,C,n,p)}else C=A_(o,r,n,p,u);return yl(C)}wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=dn(r.pendingLanes);o!==0&&(ya(r,o|1),Xn(r,Je()),(Nt&6)===0&&(zs=Je()+500,vr()))}break;case 13:Jr(function(){var u=ji(n,1);if(u!==null){var p=Fn();Si(u,n,1,p)}}),Qu(n,1)}},Ac=function(n){if(n.tag===13){var r=ji(n,134217728);if(r!==null){var o=Fn();Si(r,n,134217728,o)}Qu(n,134217728)}},Ef=function(n){if(n.tag===13){var r=Er(n),o=ji(n,r);if(o!==null){var u=Fn();Si(o,n,r,u)}Qu(n,r)}},wf=function(){return Ut},Tf=function(n,r){var o=Ut;try{return Ut=n,r()}finally{Ut=o}},ve=function(n,r,o){switch(r){case"input":if(Pe(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=Bo(u);if(!p)throw Error(t(90));Se(u),Pe(u,p)}}}break;case"textarea":ge(n,o);break;case"select":r=o.value,r!=null&&A(n,!!o.multiple,r,!1)}},Et=Xu,gt=Jr;var C_={usingClientEntryPoint:!1,Events:[Fa,Ts,Bo,vt,At,Xu]},Za={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b_={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oe(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||T_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{St=wl.inject(b_),nt=wl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_,qn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(r))throw Error(t(200));return w_(n,r,null,o)},qn.createRoot=function(n,r){if(!td(n))throw Error(t(299));var o=!1,u="",p=Hp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ju(n,1,!1,null,null,o,!1,u,p),n[Hi]=r.current,Ia(n.nodeType===8?n.parentNode:n),new ed(r)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oe(r),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return Jr(n)},qn.hydrate=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!0,o)},qn.hydrateRoot=function(n,r,o){if(!td(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,x="",C=Hp;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(x=o.identifierPrefix),o.onRecoverableError!==void 0&&(C=o.onRecoverableError)),r=kp(r,null,n,1,o??null,p,!1,x,C),n[Hi]=r.current,Ia(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new Sl(r)},qn.render=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!1,o)},qn.unmountComponentAtNode=function(n){if(!Ml(n))throw Error(t(40));return n._reactRootContainer?(Jr(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},qn.unstable_batchedUpdates=Xu,qn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Ml(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,r,o,!1,u)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Zp;function z_(){if(Zp)return rd.exports;Zp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rd.exports=F_(),rd.exports}var Jp;function k_(){if(Jp)return Tl;Jp=1;var i=z_();return Tl.createRoot=i.createRoot,Tl.hydrateRoot=i.hydrateRoot,Tl}var B_=k_();const H_=Yg(B_),V_="modulepreload",G_=function(i){return"/"+i},Qp={},Kg=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),f=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(h=>{if(h=G_(h),h in Qp)return;Qp[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":V_,m||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),m)return new Promise((S,M)=>{v.addEventListener("load",S),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var In=Math.PI,Zt=In*2,nr=In/180,W_=180/In,j_=1440,X_=398600.8,ri=6378.135,ir=60/Math.sqrt(ri*ri*ri/X_),od=ri*ir/60,q_=1/ir,fs=.001082616,Y_=-253881e-11,$_=-165597e-11,hs=Y_/fs,po=2/3,Zg=1440/(2*In);function Jg(i,e){for(var t=[31,i%4===0?29:28,31,30,31,30,31,31,30,31,30,31],s=Math.floor(e),a=1,l=0;s>l+t[a-1]&&a<12;)l+=t[a-1],a+=1;var c=a,d=s-l,f=(e-s)*24,h=Math.floor(f);f=(f-h)*60;var m=Math.floor(f),g=(f-m)*60;return{mon:c,day:d,hr:h,minute:m,sec:g}}function em(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*i-Math.floor(7*(i+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((c/6e4+l/60+a)/60+s)/24}function vc(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(i instanceof Date){var d=i;return em(d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds())}return em(i,e,t,s,a,l,c)}function Qg(i,e){var t=i.e3,s=i.ee2,a=i.peo,l=i.pgho,c=i.pho,d=i.pinco,f=i.plo,h=i.se2,m=i.se3,g=i.sgh2,v=i.sgh3,S=i.sgh4,M=i.sh2,w=i.sh3,y=i.si2,_=i.si3,N=i.sl2,E=i.sl3,b=i.sl4,z=i.t,P=i.xgh2,I=i.xgh3,F=i.xgh4,L=i.xh2,R=i.xh3,k=i.xi2,J=i.xi3,Y=i.xl2,ee=i.xl3,de=i.xl4,K=i.zmol,pe=i.zmos,W=e.init,re=e.opsmode,ie=e.ep,U=e.inclp,X=e.nodep,Le=e.argpp,Z=e.mp,ne,le,ye,Ne,He,Fe,V,Se,Ee,we,Me,Te,Pe,Ce,Xe,O,A,se,_e,ge,xe,qe=119459e-10,Ie=.01675,De=.00015835218,et=.0549;xe=pe+qe*z,W==="y"&&(xe=pe),ge=xe+2*Ie*Math.sin(xe),A=Math.sin(ge),we=.5*A*A-.25,Me=-.5*A*Math.cos(ge);var Ae=h*we+m*Me,je=y*we+_*Me,T=N*we+E*Me+b*A,Ze=g*we+v*Me+S*A,ze=M*we+w*Me;xe=K+De*z,W==="y"&&(xe=K),ge=xe+2*et*Math.sin(xe),A=Math.sin(ge),we=.5*A*A-.25,Me=-.5*A*Math.cos(ge);var dt=s*we+t*Me,ut=k*we+J*Me,ft=Y*we+ee*Me+de*A,G=P*we+I*Me+F*A,Ve=L*we+R*Me;return Te=Ae+dt,Xe=je+ut,O=T+ft,Pe=Ze+G,Ce=ze+Ve,W==="n"&&(Te-=a,Xe-=d,O-=f,Pe-=l,Ce-=c,U+=Xe,ie+=Te,Ne=Math.sin(U),ye=Math.cos(U),U>=.2?(Ce/=Ne,Pe-=ye*Ce,Le+=Pe,X+=Ce,Z+=O):(Fe=Math.sin(X),He=Math.cos(X),ne=Ne*Fe,le=Ne*He,V=Ce*He+Xe*ye*Fe,Se=-Ce*Fe+Xe*ye*He,ne+=V,le+=Se,X%=Zt,X<0&&re==="a"&&(X+=Zt),se=Z+Le+ye*X,Ee=O+Pe-Xe*X*Ne,se+=Ee,_e=X,X=Math.atan2(ne,le),X<0&&re==="a"&&(X+=Zt),Math.abs(_e-X)>In&&(X<_e?X+=Zt:X-=Zt),Z+=O,Le=se-Z-ye*X)),{ep:ie,inclp:U,nodep:X,argpp:Le,mp:Z}}function K_(i){var e=i.epoch,t=i.ep,s=i.argpp,a=i.tc,l=i.inclp,c=i.nodep,d=i.np,f,h,m,g,v,S,M,w,y,_,N,E,b,z,P,I,F,L,R,k,J,Y,ee,de,K,pe,W,re,ie,U,X,Le,Z,ne,le,ye,Ne,He,Fe,V,Se,Ee,we,Me,Te,Pe,Ce,Xe,O,A,se,_e,ge,xe,qe,Ie,De,et,Ae,je,T,Ze,ze,dt=.01675,ut=.0549,ft=29864797e-13,G=47968065e-14,Ve=.39785416,ve=.91744867,fe=.1945905,Oe=-.98088458,rt=d,vt=t,At=Math.sin(c),Et=Math.cos(c),gt=Math.sin(s),Rt=Math.cos(s),Ot=Math.sin(l),Ft=Math.cos(l),Ge=vt*vt,Wt=1-Ge,an=Math.sqrt(Wt),on=0,Mt=0,ln=0,An=0,be=0,_t=e+18261.5+a/1440,Yt=(4.523602-.00092422029*_t)%Zt,Lt=Math.sin(Yt),D=Math.cos(Yt),Q=.91375164-.03568096*D,ce=Math.sqrt(1-Q*Q),oe=.089683511*Lt/ce,te=Math.sqrt(1-oe*oe),Re=5.8351514+.001944368*_t,Ye=.39785416*Lt/ce,tt=te*D+.91744867*oe*Lt;Ye=Math.atan2(Ye,tt),Ye+=Re-Yt;var st=Math.cos(Ye),Je=Math.sin(Ye);k=fe,J=Oe,de=ve,K=Ve,Y=Et,ee=At,N=ft;for(var ht=1/rt,lt=0;lt<2;)lt+=1,f=k*Y+J*de*ee,m=-J*Y+k*de*ee,M=-k*ee+J*de*Y,w=J*K,y=J*ee+k*de*Y,_=k*K,h=Ft*M+Ot*w,g=Ft*y+Ot*_,v=-Ot*M+Ft*w,S=-Ot*y+Ft*_,E=f*Rt+h*gt,b=m*Rt+g*gt,z=-f*gt+h*Rt,P=-m*gt+g*Rt,I=v*gt,F=S*gt,L=v*Rt,R=S*Rt,T=12*E*E-3*z*z,Ze=24*E*b-6*z*P,ze=12*b*b-3*P*P,_e=3*(f*f+h*h)+T*Ge,ge=6*(f*m+h*g)+Ze*Ge,xe=3*(m*m+g*g)+ze*Ge,qe=-6*f*v+Ge*(-24*E*L-6*z*I),Ie=-6*(f*S+m*v)+Ge*(-24*(b*L+E*R)+-6*(z*F+P*I)),De=-6*m*S+Ge*(-24*b*R-6*P*F),et=6*h*v+Ge*(24*E*I-6*z*L),Ae=6*(g*v+h*S)+Ge*(24*(b*I+E*F)-6*(P*L+z*R)),je=6*g*S+Ge*(24*b*F-6*P*R),_e=_e+_e+Wt*T,ge=ge+ge+Wt*Ze,xe=xe+xe+Wt*ze,Ce=N*ht,Pe=-.5*Ce/an,Xe=Ce*an,Te=-15*vt*Xe,O=E*z+b*P,A=b*z+E*P,se=b*P-E*z,lt===1&&(pe=Te,W=Pe,re=Ce,ie=Xe,U=O,X=A,Le=se,Z=_e,ne=ge,le=xe,ye=qe,Ne=Ie,He=De,Fe=et,V=Ae,Se=je,Ee=T,we=Ze,Me=ze,k=st,J=Je,de=Q,K=ce,Y=te*Et+oe*At,ee=At*te-Et*oe,N=G);var Ct=(4.7199672+(.2299715*_t-Re))%Zt,It=(6.2565837+.017201977*_t)%Zt,Ht=2*pe*X,$t=2*pe*Le,St=2*W*Ne,nt=2*W*(He-ye),rn=-2*re*ne,yt=-2*re*(le-Z),Un=-2*re*(-21-9*Ge)*dt,Kn=2*ie*we,Zn=2*ie*(Me-Ee),ai=-18*ie*dt,zt=-2*W*V,dn=-2*W*(Se-Fe),Hn=2*Te*A,vn=2*Te*se,Bi=2*Pe*Ie,Hr=2*Pe*(De-qe),Vr=-2*Ce*ge,xa=-2*Ce*(xe-_e),Gr=-2*Ce*(-21-9*Ge)*ut,Tc=2*Xe*Ze,ya=2*Xe*(ze-T),Ut=-18*Xe*ut,Eo=-2*Pe*Ae,wo=-2*Pe*(je-et);return{snodm:At,cnodm:Et,sinim:Ot,cosim:Ft,sinomm:gt,cosomm:Rt,day:_t,e3:vn,ee2:Hn,em:vt,emsq:Ge,gam:Re,peo:on,pgho:An,pho:be,pinco:Mt,plo:ln,rtemsq:an,se2:Ht,se3:$t,sgh2:Kn,sgh3:Zn,sgh4:ai,sh2:zt,sh3:dn,si2:St,si3:nt,sl2:rn,sl3:yt,sl4:Un,s1:Te,s2:Pe,s3:Ce,s4:Xe,s5:O,s6:A,s7:se,ss1:pe,ss2:W,ss3:re,ss4:ie,ss5:U,ss6:X,ss7:Le,sz1:Z,sz2:ne,sz3:le,sz11:ye,sz12:Ne,sz13:He,sz21:Fe,sz22:V,sz23:Se,sz31:Ee,sz32:we,sz33:Me,xgh2:Tc,xgh3:ya,xgh4:Ut,xh2:Eo,xh3:wo,xi2:Bi,xi3:Hr,xl2:Vr,xl3:xa,xl4:Gr,nm:rt,z1:_e,z2:ge,z3:xe,z11:qe,z12:Ie,z13:De,z21:et,z22:Ae,z23:je,z31:T,z32:Ze,z33:ze,zmol:Ct,zmos:It}}function Z_(i){var e=i.cosim,t=i.argpo,s=i.s1,a=i.s2,l=i.s3,c=i.s4,d=i.s5,f=i.sinim,h=i.ss1,m=i.ss2,g=i.ss3,v=i.ss4,S=i.ss5,M=i.sz1,w=i.sz3,y=i.sz11,_=i.sz13,N=i.sz21,E=i.sz23,b=i.sz31,z=i.sz33,P=i.t,I=i.tc,F=i.gsto,L=i.mo,R=i.mdot,k=i.no,J=i.nodeo,Y=i.nodedot,ee=i.xpidot,de=i.z1,K=i.z3,pe=i.z11,W=i.z13,re=i.z21,ie=i.z23,U=i.z31,X=i.z33,Le=i.ecco,Z=i.eccsq,ne=i.emsq,le=i.em,ye=i.argpm,Ne=i.inclm,He=i.mm,Fe=i.nm,V=i.nodem,Se=i.irez,Ee=i.atime,we=i.d2201,Me=i.d2211,Te=i.d3210,Pe=i.d3222,Ce=i.d4410,Xe=i.d4422,O=i.d5220,A=i.d5232,se=i.d5421,_e=i.d5433,ge=i.dedt,xe=i.didt,qe=i.dmdt,Ie=i.dnodt,De=i.domdt,et=i.del1,Ae=i.del2,je=i.del3,T=i.xfact,Ze=i.xlamo,ze=i.xli,dt=i.xni,ut,ft,G,Ve,ve,fe,Oe,rt,vt,At,Et,gt,Rt,Ot,Ft,Ge,Wt,an,on,Mt,ln,An,be,_t,Yt,Lt,D,Q,ce,oe,te,Re,Ye=17891679e-13,tt=21460748e-13,st=22123015e-14,Je=17891679e-13,ht=73636953e-16,lt=21765803e-16,Ct=.0043752690880113,It=37393792e-14,Ht=11428639e-14,$t=.00015835218,St=119459e-10;Se=0,Fe<.0052359877&&Fe>.0034906585&&(Se=1),Fe>=.00826&&Fe<=.00924&&le>=.5&&(Se=2);var nt=h*St*S,rn=m*St*(y+_),yt=-St*g*(M+w-14-6*ne),Un=v*St*(b+z-6),Kn=-St*m*(N+E);(Ne<.052359877||Ne>In-.052359877)&&(Kn=0),f!==0&&(Kn/=f);var Zn=Un-e*Kn;ge=nt+s*$t*d,xe=rn+a*$t*(pe+W),qe=yt-$t*l*(de+K-14-6*ne);var ai=c*$t*(U+X-6),zt=-$t*a*(re+ie);(Ne<.052359877||Ne>In-.052359877)&&(zt=0),De=Zn+ai,Ie=Kn,f!==0&&(De-=e/f*zt,Ie+=zt/f);var dn=0,Hn=(F+I*Ct)%Zt;if(le+=ge*P,Ne+=xe*P,ye+=De*P,V+=Ie*P,He+=qe*P,Se!==0){if(oe=Math.pow(Fe/ir,po),Se===2){te=e*e;var vn=le;le=Le;var Bi=ne;ne=Z,Re=le*ne,Ot=-.306-(le-.64)*.44,le<=.65?(Ft=3.616-13.247*le+16.29*ne,Wt=-19.302+117.39*le-228.419*ne+156.591*Re,an=-18.9068+109.7927*le-214.6334*ne+146.5816*Re,on=-41.122+242.694*le-471.094*ne+313.953*Re,Mt=-146.407+841.88*le-1629.014*ne+1083.435*Re,ln=-532.114+3017.977*le-5740.032*ne+3708.276*Re):(Ft=-72.099+331.819*le-508.738*ne+266.724*Re,Wt=-346.844+1582.851*le-2415.925*ne+1246.113*Re,an=-342.585+1554.908*le-2366.899*ne+1215.972*Re,on=-1052.797+4758.686*le-7193.992*ne+3651.957*Re,Mt=-3581.69+16178.11*le-24462.77*ne+12422.52*Re,le>.715?ln=-5149.66+29936.92*le-54087.36*ne+31324.56*Re:ln=1464.74-4664.75*le+3763.64*ne),le<.7?(_t=-919.2277+4988.61*le-9064.77*ne+5542.21*Re,An=-822.71072+4568.6173*le-8491.4146*ne+5337.524*Re,be=-853.666+4690.25*le-8624.77*ne+5341.4*Re):(_t=-37995.78+161616.52*le-229838.2*ne+109377.94*Re,An=-51752.104+218913.95*le-309468.16*ne+146349.42*Re,be=-40023.88+170470.89*le-242699.48*ne+115605.82*Re),Yt=f*f,ut=.75*(1+2*e+te),ft=1.5*Yt,Ve=1.875*f*(1-2*e-3*te),ve=-1.875*f*(1+2*e-3*te),Oe=35*Yt*ut,rt=39.375*Yt*Yt,vt=9.84375*f*(Yt*(1-2*e-5*te)+.33333333*(-2+4*e+6*te)),At=f*(4.92187512*Yt*(-2-4*e+10*te)+6.56250012*(1+2*e-3*te)),Et=29.53125*f*(2-8*e+te*(-12+8*e+10*te)),gt=29.53125*f*(-2-8*e+te*(12+8*e-10*te)),Q=Fe*Fe,ce=oe*oe,D=3*Q*ce,Lt=D*Je,we=Lt*ut*Ot,Me=Lt*ft*Ft,D*=oe,Lt=D*It,Te=Lt*Ve*Wt,Pe=Lt*ve*an,D*=oe,Lt=2*D*ht,Ce=Lt*Oe*on,Xe=Lt*rt*Mt,D*=oe,Lt=D*Ht,O=Lt*vt*ln,A=Lt*At*be,Lt=2*D*lt,se=Lt*Et*An,_e=Lt*gt*_t,Ze=(L+J+J-(Hn+Hn))%Zt,T=R+qe+2*(Y+Ie-Ct)-k,le=vn,ne=Bi}Se===1&&(Rt=1+ne*(-2.5+.8125*ne),Wt=1+2*ne,Ge=1+ne*(-6+6.60937*ne),ut=.75*(1+e)*(1+e),G=.9375*f*f*(1+3*e)-.75*(1+e),fe=1+e,fe*=1.875*fe*fe,et=3*Fe*Fe*oe*oe,Ae=2*et*ut*Rt*Ye,je=3*et*fe*Ge*st*oe,et=et*G*Wt*tt*oe,Ze=(L+J+t-Hn)%Zt,T=R+ee+qe+De+Ie-(k+Ct)),ze=Ze,dt=k,Ee=0,Fe=k+dn}return{em:le,argpm:ye,inclm:Ne,mm:He,nm:Fe,nodem:V,irez:Se,atime:Ee,d2201:we,d2211:Me,d3210:Te,d3222:Pe,d4410:Ce,d4422:Xe,d5220:O,d5232:A,d5421:se,d5433:_e,dedt:ge,didt:xe,dmdt:qe,dndt:dn,dnodt:Ie,domdt:De,del1:et,del2:Ae,del3:je,xfact:T,xlamo:Ze,xli:ze,xni:dt}}function tm(i){var e=(i-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*nr/240%Zt,t<0&&(t+=Zt),t}function e0(i,e,t,s,a,l,c){return i instanceof Date?tm(vc(i)):tm(i)}function J_(i){var e=i.ecco,t=i.epoch,s=i.inclo,a=i.opsmode,l=i.no,c=e*e,d=1-c,f=Math.sqrt(d),h=Math.cos(s),m=h*h,g=Math.pow(ir/l,po),v=.75*fs*(3*m-1)/(f*d),S=v/(g*g),M=g*(1-S*S-S*(1/3+134*S*S/81));S=v/(M*M),l/=1+S;var w=Math.pow(ir/l,po),y=Math.sin(s),_=w*d,N=1-5*m,E=-N-m-m,b=1/w,z=_*_,P=w*(1-e),I="n",F;if(a==="a"){var L=t-7305,R=Math.floor(L+1e-8),k=L-R,J=.017202791694070362,Y=1.7321343856509375,ee=5075514194322695e-30,de=J+Zt;F=(Y+J*R+de*k+L*L*ee)%Zt,F<0&&(F+=Zt)}else F=e0(t+24332815e-1);return{no:l,method:I,ainv:b,ao:w,con41:E,con42:N,cosio:h,cosio2:m,eccsq:c,omeosq:d,posq:z,rp:P,rteosq:f,sinio:y,gsto:F}}function Q_(i){var e=i.irez,t=i.d2201,s=i.d2211,a=i.d3210,l=i.d3222,c=i.d4410,d=i.d4422,f=i.d5220,h=i.d5232,m=i.d5421,g=i.d5433,v=i.dedt,S=i.del1,M=i.del2,w=i.del3,y=i.didt,_=i.dmdt,N=i.dnodt,E=i.domdt,b=i.argpo,z=i.argpdot,P=i.t,I=i.tc,F=i.gsto,L=i.xfact,R=i.xlamo,k=i.no,J=i.atime,Y=i.em,ee=i.argpm,de=i.inclm,K=i.xli,pe=i.mm,W=i.xni,re=i.nodem,ie=i.nm,U=.13130908,X=2.8843198,Le=.37448087,Z=5.7686396,ne=.95240898,le=1.8014998,ye=1.050833,Ne=4.4108898,He=.0043752690880113,Fe=720,V=-720,Se=259200,Ee,we,Me,Te,Pe,Ce,Xe,O,A=0,se=0,_e=(F+I*He)%Zt;if(Y+=v*P,de+=y*P,ee+=E*P,re+=N*P,pe+=_*P,e!==0){(J===0||P*J<=0||Math.abs(P)<Math.abs(J))&&(J=0,W=k,K=R),P>0?Ee=Fe:Ee=V;for(var ge=381;ge===381;)e!==2?(Xe=S*Math.sin(K-U)+M*Math.sin(2*(K-X))+w*Math.sin(3*(K-Le)),Pe=W+L,Ce=S*Math.cos(K-U)+2*M*Math.cos(2*(K-X))+3*w*Math.cos(3*(K-Le)),Ce*=Pe):(O=b+z*J,Me=O+O,we=K+K,Xe=t*Math.sin(Me+K-Z)+s*Math.sin(K-Z)+a*Math.sin(O+K-ne)+l*Math.sin(-O+K-ne)+c*Math.sin(Me+we-le)+d*Math.sin(we-le)+f*Math.sin(O+K-ye)+h*Math.sin(-O+K-ye)+m*Math.sin(O+we-Ne)+g*Math.sin(-O+we-Ne),Pe=W+L,Ce=t*Math.cos(Me+K-Z)+s*Math.cos(K-Z)+a*Math.cos(O+K-ne)+l*Math.cos(-O+K-ne)+f*Math.cos(O+K-ye)+h*Math.cos(-O+K-ye)+2*(c*Math.cos(Me+we-le)+d*Math.cos(we-le)+m*Math.cos(O+we-Ne)+g*Math.cos(-O+we-Ne)),Ce*=Pe),Math.abs(P-J)>=Fe?ge=381:(se=P-J,ge=0),ge===381&&(K+=Pe*Ee+Xe*Se,W+=Xe*Ee+Ce*Se,J+=Ee);ie=W+Xe*se+Ce*se*se*.5,Te=K+Pe*se+Xe*se*se*.5,e!==1?(pe=Te-2*re+2*_e,A=ie-k):(pe=Te-re-ee+_e,A=ie-k),ie=k+A}return{atime:J,em:Y,argpm:ee,inclm:de,xli:K,mm:pe,xni:W,nodem:re,dndt:A,nm:ie}}var Dr;(function(i){i[i.None=0]="None",i[i.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",i[i.MeanMotionBelowZero=2]="MeanMotionBelowZero",i[i.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",i[i.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",i[i.Decayed=6]="Decayed"})(Dr||(Dr={}));function t0(i,e){var t,s,a,l,c,d,f,h,m,g,v,S,M,w,y,_,N,E,b,z,P,I,F,L,R,k,J,Y=15e-13;i.t=e,i.error=Dr.None;var ee=i.mo+i.mdot*i.t,de=i.argpo+i.argpdot*i.t,K=i.nodeo+i.nodedot*i.t;m=de,P=ee;var pe=i.t*i.t;if(F=K+i.nodecf*pe,N=1-i.cc1*i.t,E=i.bstar*i.cc4*i.t,b=i.t2cof*pe,i.isimp!==1){f=i.omgcof*i.t;var W=1+i.eta*Math.cos(ee);d=i.xmcof*(W*W*W-i.delmo),_=f+d,P=ee+_,m=de-_,S=pe*i.t,M=S*i.t,N=N-i.d2*pe-i.d3*S-i.d4*M,E+=i.bstar*i.cc5*(Math.sin(P)-i.sinmao),b=b+i.t3cof*S+M*(i.t4cof+i.t*i.t5cof)}I=i.no;var re=i.ecco;if(z=i.inclo,i.method==="d"){w=i.t;var ie={irez:i.irez,d2201:i.d2201,d2211:i.d2211,d3210:i.d3210,d3222:i.d3222,d4410:i.d4410,d4422:i.d4422,d5220:i.d5220,d5232:i.d5232,d5421:i.d5421,d5433:i.d5433,dedt:i.dedt,del1:i.del1,del2:i.del2,del3:i.del3,didt:i.didt,dmdt:i.dmdt,dnodt:i.dnodt,domdt:i.domdt,argpo:i.argpo,argpdot:i.argpdot,t:i.t,tc:w,gsto:i.gsto,xfact:i.xfact,xlamo:i.xlamo,no:i.no,atime:i.atime,em:re,argpm:m,inclm:z,xli:i.xli,mm:P,xni:i.xni,nodem:F,nm:I},U=Q_(ie);re=U.em,m=U.argpm,z=U.inclm,P=U.mm,F=U.nodem,I=U.nm}if(I<=0)return i.error=Dr.MeanMotionBelowZero,null;var X=Math.pow(ir/I,po)*N*N;if(I=ir/Math.pow(X,1.5),re-=E,re>=1||re<-.001)return i.error=Dr.MeanEccentricityOutOfRange,null;re<1e-6&&(re=1e-6),P+=i.no*b,R=P+m+F,F%=Zt,m%=Zt,R%=Zt,P=(R-m-F)%Zt;var Le={am:X,em:re,im:z,Om:F,om:m,mm:P,nm:I},Z=Math.sin(z),ne=Math.cos(z),le=re;if(L=z,g=m,J=F,k=P,l=Z,a=ne,i.method==="d"){var ye={inclo:i.inclo,init:"n",ep:le,inclp:L,nodep:J,argpp:g,mp:k,opsmode:i.operationmode},Ne=Qg(i,ye);if(le=Ne.ep,J=Ne.nodep,g=Ne.argpp,k=Ne.mp,L=Ne.inclp,L<0&&(L=-L,J+=In,g-=In),le<0||le>1)return i.error=Dr.PerturbedEccentricityOutOfRange,null}i.method==="d"&&(l=Math.sin(L),a=Math.cos(L),i.aycof=-.5*hs*l,Math.abs(a+1)>15e-13?i.xlcof=-.25*hs*l*(3+5*a)/(1+a):i.xlcof=-.25*hs*l*(3+5*a)/Y);var He=le*Math.cos(g);_=1/(X*(1-le*le));var Fe=le*Math.sin(g)+_*i.aycof,V=k+g+J+_*i.xlcof*He,Se=(V-J)%Zt;h=Se,y=9999.9;for(var Ee=1;Math.abs(y)>=1e-12&&Ee<=10;)s=Math.sin(h),t=Math.cos(h),y=1-t*He-s*Fe,y=(Se-Fe*t+He*s-h)/y,Math.abs(y)>=.95&&(y>0?y=.95:y=-.95),h+=y,Ee+=1;var we=He*t+Fe*s,Me=He*s-Fe*t,Te=He*He+Fe*Fe,Pe=X*(1-Te);if(Pe<0)return i.error=Dr.SemiLatusRectumBelowZero,null;var Ce=X*(1-we),Xe=Math.sqrt(X)*Me/Ce,O=Math.sqrt(Pe)/Ce,A=Math.sqrt(1-Te);_=Me/(1+A);var se=X/Ce*(s-Fe-He*_),_e=X/Ce*(t-He+Fe*_);v=Math.atan2(se,_e);var ge=(_e+_e)*se,xe=1-2*se*se;_=1/Pe;var qe=.5*fs*_,Ie=qe*_;i.method==="d"&&(c=a*a,i.con41=3*c-1,i.x1mth2=1-c,i.x7thm1=7*c-1);var De=Ce*(1-1.5*Ie*A*i.con41)+.5*qe*i.x1mth2*xe;if(De<1)return i.error=Dr.Decayed,null;v-=.25*Ie*i.x7thm1*ge;var et=J+1.5*Ie*a*ge,Ae=L+1.5*Ie*a*l*xe,je=Xe-I*qe*i.x1mth2*ge/ir,T=O+I*qe*(i.x1mth2*xe+1.5*i.con41)/ir,Ze=Math.sin(v),ze=Math.cos(v),dt=Math.sin(et),ut=Math.cos(et),ft=Math.sin(Ae),G=Math.cos(Ae),Ve=-dt*G,ve=ut*G,fe=Ve*Ze+ut*ze,Oe=ve*Ze+dt*ze,rt=ft*Ze,vt=Ve*ze-ut*Ze,At=ve*ze-dt*Ze,Et=ft*ze,gt={x:De*fe*ri,y:De*Oe*ri,z:De*rt*ri},Rt={x:(je*fe+T*vt)*od,y:(je*Oe+T*At)*od,z:(je*rt+T*Et)*od};return{position:gt,velocity:Rt,meanElements:Le}}function n0(i,e){var t=e.opsmode;e.satn;var s=e.epoch,a=e.xbstar,l=e.xecco,c=e.xargpo,d=e.xinclo,f=e.xmo,h=e.xno,m=e.xnodeo,g,v,S,M,w,y,_,N,E,b,z,P,I,F,L,R,k,J,Y,ee,de,K,pe,W,re,ie,U,X,Le,Z,ne,le,ye,Ne,He,Fe,V,Se,Ee,we,Me,Te,Pe,Ce,Xe,O,A,se,_e,ge,xe,qe,Ie,De,et,Ae,je=15e-13,T=i;T.isimp=0,T.method="n",T.aycof=0,T.con41=0,T.cc1=0,T.cc4=0,T.cc5=0,T.d2=0,T.d3=0,T.d4=0,T.delmo=0,T.eta=0,T.argpdot=0,T.omgcof=0,T.sinmao=0,T.t=0,T.t2cof=0,T.t3cof=0,T.t4cof=0,T.t5cof=0,T.x1mth2=0,T.x7thm1=0,T.mdot=0,T.nodedot=0,T.xlcof=0,T.xmcof=0,T.nodecf=0,T.irez=0,T.d2201=0,T.d2211=0,T.d3210=0,T.d3222=0,T.d4410=0,T.d4422=0,T.d5220=0,T.d5232=0,T.d5421=0,T.d5433=0,T.dedt=0,T.del1=0,T.del2=0,T.del3=0,T.didt=0,T.dmdt=0,T.dnodt=0,T.domdt=0,T.e3=0,T.ee2=0,T.peo=0,T.pgho=0,T.pho=0,T.pinco=0,T.plo=0,T.se2=0,T.se3=0,T.sgh2=0,T.sgh3=0,T.sgh4=0,T.sh2=0,T.sh3=0,T.si2=0,T.si3=0,T.sl2=0,T.sl3=0,T.sl4=0,T.gsto=0,T.xfact=0,T.xgh2=0,T.xgh3=0,T.xgh4=0,T.xh2=0,T.xh3=0,T.xi2=0,T.xi3=0,T.xl2=0,T.xl3=0,T.xl4=0,T.xlamo=0,T.zmol=0,T.zmos=0,T.atime=0,T.xli=0,T.xni=0,T.bstar=a,T.ecco=l,T.argpo=c,T.inclo=d,T.mo=f,T.no=h,T.nodeo=m,T.operationmode=t;var Ze=78/ri+1,ze=42/ri,dt=ze*ze*ze*ze;T.init="y",T.t=0;var ut={ecco:T.ecco,epoch:s,inclo:T.inclo,no:T.no,method:T.method,opsmode:T.operationmode},ft=J_(ut),G=ft.ao,Ve=ft.con42,ve=ft.cosio,fe=ft.cosio2,Oe=ft.eccsq,rt=ft.omeosq,vt=ft.posq,At=ft.rp,Et=ft.rteosq,gt=ft.sinio;if(T.no=ft.no,T.con41=ft.con41,T.gsto=ft.gsto,T.a=Math.pow(T.no*q_,-2/3),T.alta=T.a*(1+T.ecco)-1,T.altp=T.a*(1-T.ecco)-1,T.error=0,rt>=0||T.no>=0){if(T.isimp=0,At<220/ri+1&&(T.isimp=1),U=Ze,de=dt,J=(At-1)*ri,J<156){U=J-78,J<98&&(U=20);var Rt=(120-U)/ri;de=Rt*Rt*Rt*Rt,U=U/ri+1}Y=1/vt,O=1/(G-U),T.eta=G*T.ecco*O,P=T.eta*T.eta,z=T.ecco*T.eta,ee=Math.abs(1-P),y=de*Math.pow(O,4),_=y/Math.pow(ee,3.5),M=_*T.no*(G*(1+1.5*P+z*(4+P))+.375*fs*O/ee*T.con41*(8+3*P*(8+P))),T.cc1=T.bstar*M,w=0,T.ecco>1e-4&&(w=-2*y*O*hs*T.no*gt/T.ecco),T.x1mth2=1-fe,T.cc4=2*T.no*_*G*rt*(T.eta*(2+.5*P)+T.ecco*(.5+2*P)-fs*O/(G*ee)*(-3*T.con41*(1-2*z+P*(1.5-.5*z))+.75*T.x1mth2*(2*P-z*(1+P))*Math.cos(2*T.argpo))),T.cc5=2*_*G*rt*(1+2.75*(P+z)+z*P),N=fe*fe,Pe=1.5*fs*Y*T.no,Ce=.5*Pe*fs*Y,Xe=-.46875*$_*Y*Y*T.no,T.mdot=T.no+.5*Pe*Et*T.con41+.0625*Ce*Et*(13-78*fe+137*N),T.argpdot=-.5*Pe*Ve+.0625*Ce*(7-114*fe+395*N)+Xe*(3-36*fe+49*N),se=-Pe*ve,T.nodedot=se+(.5*Ce*(4-19*fe)+2*Xe*(3-7*fe))*ve,A=T.argpdot+T.nodedot,T.omgcof=T.bstar*w*Math.cos(T.argpo),T.xmcof=0,T.ecco>1e-4&&(T.xmcof=-po*y*T.bstar/z),T.nodecf=3.5*rt*se*T.cc1,T.t2cof=1.5*T.cc1,Math.abs(ve+1)>15e-13?T.xlcof=-.25*hs*gt*(3+5*ve)/(1+ve):T.xlcof=-.25*hs*gt*(3+5*ve)/je,T.aycof=-.5*hs*gt;var Ot=1+T.eta*Math.cos(T.mo);if(T.delmo=Ot*Ot*Ot,T.sinmao=Math.sin(T.mo),T.x7thm1=7*fe-1,2*In/T.no>=225){T.method="d",T.isimp=1,Me=0,L=T.inclo;var Ft={epoch:s,ep:T.ecco,argpp:T.argpo,tc:Me,inclp:T.inclo,nodep:T.nodeo,np:T.no,e3:T.e3,ee2:T.ee2,peo:T.peo,pgho:T.pgho,pho:T.pho,pinco:T.pinco,plo:T.plo,se2:T.se2,se3:T.se3,sgh2:T.sgh2,sgh3:T.sgh3,sgh4:T.sgh4,sh2:T.sh2,sh3:T.sh3,si2:T.si2,si3:T.si3,sl2:T.sl2,sl3:T.sl3,sl4:T.sl4,xgh2:T.xgh2,xgh3:T.xgh3,xgh4:T.xgh4,xh2:T.xh2,xh3:T.xh3,xi2:T.xi2,xi3:T.xi3,xl2:T.xl2,xl3:T.xl3,xl4:T.xl4,zmol:T.zmol,zmos:T.zmos},Ge=K_(Ft);T.e3=Ge.e3,T.ee2=Ge.ee2,T.peo=Ge.peo,T.pgho=Ge.pgho,T.pho=Ge.pho,T.pinco=Ge.pinco,T.plo=Ge.plo,T.se2=Ge.se2,T.se3=Ge.se3,T.sgh2=Ge.sgh2,T.sgh3=Ge.sgh3,T.sgh4=Ge.sgh4,T.sh2=Ge.sh2,T.sh3=Ge.sh3,T.si2=Ge.si2,T.si3=Ge.si3,T.sl2=Ge.sl2,T.sl3=Ge.sl3,T.sl4=Ge.sl4,v=Ge.sinim,g=Ge.cosim,E=Ge.em,b=Ge.emsq,K=Ge.s1,pe=Ge.s2,W=Ge.s3,re=Ge.s4,ie=Ge.s5,X=Ge.ss1,Le=Ge.ss2,Z=Ge.ss3,ne=Ge.ss4,le=Ge.ss5,ye=Ge.sz1,Ne=Ge.sz3,He=Ge.sz11,Fe=Ge.sz13,V=Ge.sz21,Se=Ge.sz23,Ee=Ge.sz31,we=Ge.sz33,T.xgh2=Ge.xgh2,T.xgh3=Ge.xgh3,T.xgh4=Ge.xgh4,T.xh2=Ge.xh2,T.xh3=Ge.xh3,T.xi2=Ge.xi2,T.xi3=Ge.xi3,T.xl2=Ge.xl2,T.xl3=Ge.xl3,T.xl4=Ge.xl4,T.zmol=Ge.zmol,T.zmos=Ge.zmos,k=Ge.nm,_e=Ge.z1,ge=Ge.z3,xe=Ge.z11,qe=Ge.z13,Ie=Ge.z21,De=Ge.z23,et=Ge.z31,Ae=Ge.z33;var Wt={inclo:L,init:T.init,ep:T.ecco,inclp:T.inclo,nodep:T.nodeo,argpp:T.argpo,mp:T.mo,opsmode:T.operationmode},an=Qg(T,Wt);T.ecco=an.ep,T.inclo=an.inclp,T.nodeo=an.nodep,T.argpo=an.argpp,T.mo=an.mp,I=0,F=0,R=0;var on={cosim:g,emsq:b,argpo:T.argpo,s1:K,s2:pe,s3:W,s4:re,s5:ie,sinim:v,ss1:X,ss2:Le,ss3:Z,ss4:ne,ss5:le,sz1:ye,sz3:Ne,sz11:He,sz13:Fe,sz21:V,sz23:Se,sz31:Ee,sz33:we,t:T.t,tc:Me,gsto:T.gsto,mo:T.mo,mdot:T.mdot,no:T.no,nodeo:T.nodeo,nodedot:T.nodedot,xpidot:A,z1:_e,z3:ge,z11:xe,z13:qe,z21:Ie,z23:De,z31:et,z33:Ae,ecco:T.ecco,eccsq:Oe,em:E,argpm:I,inclm:L,mm:R,nm:k,nodem:F,irez:T.irez,atime:T.atime,d2201:T.d2201,d2211:T.d2211,d3210:T.d3210,d3222:T.d3222,d4410:T.d4410,d4422:T.d4422,d5220:T.d5220,d5232:T.d5232,d5421:T.d5421,d5433:T.d5433,dedt:T.dedt,didt:T.didt,dmdt:T.dmdt,dnodt:T.dnodt,domdt:T.domdt,del1:T.del1,del2:T.del2,del3:T.del3,xfact:T.xfact,xlamo:T.xlamo,xli:T.xli,xni:T.xni},Mt=Z_(on);T.irez=Mt.irez,T.atime=Mt.atime,T.d2201=Mt.d2201,T.d2211=Mt.d2211,T.d3210=Mt.d3210,T.d3222=Mt.d3222,T.d4410=Mt.d4410,T.d4422=Mt.d4422,T.d5220=Mt.d5220,T.d5232=Mt.d5232,T.d5421=Mt.d5421,T.d5433=Mt.d5433,T.dedt=Mt.dedt,T.didt=Mt.didt,T.dmdt=Mt.dmdt,T.dnodt=Mt.dnodt,T.domdt=Mt.domdt,T.del1=Mt.del1,T.del2=Mt.del2,T.del3=Mt.del3,T.xfact=Mt.xfact,T.xlamo=Mt.xlamo,T.xli=Mt.xli,T.xni=Mt.xni}T.isimp!==1&&(S=T.cc1*T.cc1,T.d2=4*G*O*S,Te=T.d2*O*T.cc1/3,T.d3=(17*G+U)*Te,T.d4=.5*Te*G*O*(221*G+31*U)*T.cc1,T.t3cof=T.d2+2*S,T.t4cof=.25*(3*T.d3+T.cc1*(12*T.d2+10*S)),T.t5cof=.2*(3*T.d4+12*T.cc1*T.d3+6*T.d2*T.d2+15*S*(2*T.d2+S)))}t0(T,0),T.init="n"}function ex(i,e){var t="i",s=0,a=i.substring(2,7),l=parseInt(i.substring(18,20),10),c=parseFloat(i.substring(20,32)),d=parseFloat(i.substring(33,43)),f=parseFloat("".concat(i.substring(44,45),".").concat(i.substring(45,50),"E").concat(i.substring(50,52))),h=parseFloat("".concat(i.substring(53,54),".").concat(i.substring(54,59),"E").concat(i.substring(59,61))),m=parseFloat(e.substring(8,16))*nr,g=parseFloat(e.substring(17,25))*nr,v=parseFloat(".".concat(e.substring(26,33).replace(/\s/g,"0"))),S=parseFloat(e.substring(34,42))*nr,M=parseFloat(e.substring(43,51))*nr,w=parseFloat(e.substring(52,63))/Zg,y=l<57?l+2e3:l+1900,_=Jg(y,c),N=_.mon,E=_.day,b=_.hr,z=_.minute,P=_.sec,I=vc(y,N,E,b,z,P),F={error:s,satnum:a,epochyr:l,epochdays:c,ndot:d,nddot:f,bstar:h,inclo:m,nodeo:g,ecco:v,argpo:S,mo:M,no:w,jdsatepoch:I};return n0(F,{opsmode:t,satn:F.satnum,epoch:F.jdsatepoch-24332815e-1,xbstar:F.bstar,xecco:F.ecco,xargpo:F.argpo,xinclo:F.inclo,xmo:F.mo,xno:F.no,xnodeo:F.nodeo}),F}function tx(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"i",t=0,s=i.NORAD_CAT_ID.toString(),a=new Date(i.EPOCH.endsWith("Z")?i.EPOCH:i.EPOCH+"Z"),l=a.getUTCFullYear(),c=Number(l.toString().slice(-2)),d=(a.valueOf()-new Date(Date.UTC(l,0,1,0,0,0)).valueOf())/(86400*1e3)+1,f=Number(i.MEAN_MOTION_DOT),h=Number(i.MEAN_MOTION_DDOT),m=Number(i.BSTAR),g=Number(i.INCLINATION)*nr,v=Number(i.RA_OF_ASC_NODE)*nr,S=Number(i.ECCENTRICITY),M=Number(i.ARG_OF_PERICENTER)*nr,w=Number(i.MEAN_ANOMALY)*nr,y=Number(i.MEAN_MOTION)/Zg,_=Jg(l,d),N=_.mon,E=_.day,b=_.hr,z=_.minute,P=_.sec,I=vc(l,N,E,b,z,P),F={error:t,satnum:s,epochyr:c,epochdays:d,ndot:f,nddot:h,bstar:m,inclo:g,nodeo:v,ecco:S,argpo:M,mo:w,no:y,jdsatepoch:I};return n0(F,{opsmode:e,satn:F.satnum,epoch:F.jdsatepoch-24332815e-1,xbstar:F.bstar,xecco:F.ecco,xargpo:F.argpo,xinclo:F.inclo,xmo:F.mo,xno:F.no,xnodeo:F.nodeo}),F}function nx(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];var a=vc.apply(void 0,t),l=(a-i.jdsatepoch)*j_;return t0(i,l)}function i0(i){return i*W_}function ix(i){if(i<-In/2||i>In/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return i0(i)}function rx(i){if(i<-In||i>In)throw new RangeError("Longitude radians must be in range [-pi; pi].");return i0(i)}function sx(i,e){for(var t=6378.137,s=6356.7523142,a=Math.sqrt(i.x*i.x+i.y*i.y),l=(t-s)/t,c=2*l-l*l,d=Math.atan2(i.y,i.x)-e;d<-In;)d+=Zt;for(;d>In;)d-=Zt;for(var f=20,h=0,m=Math.atan2(i.z,Math.sqrt(i.x*i.x+i.y*i.y)),g;h++<f;)g=1/Math.sqrt(1-c*(Math.sin(m)*Math.sin(m))),m=Math.atan2(i.z+t*g*c*Math.sin(m),a);var v=a/Math.cos(m)-t*g;return{longitude:d,latitude:m,height:v}}const r0=6371,s0=i=>{const e=Number(i.NORAD_CAT_ID),t=Number(i.MEAN_MOTION),s=typeof i.EPOCH=="string"?i.EPOCH:"",a=[i.ECCENTRICITY,i.INCLINATION,i.RA_OF_ASC_NODE,i.ARG_OF_PERICENTER,i.MEAN_ANOMALY].map(Number);if(!Number.isSafeInteger(e)||e<1||!Number.isFinite(t)||t<=0||Number.isNaN(Date.parse(s))||a.some(f=>!Number.isFinite(f))||a[0]<0||a[0]>=1||a[1]<0||a[1]>180)return null;const l=typeof i.OBJECT_NAME=="string"&&i.OBJECT_NAME.trim()?i.OBJECT_NAME.trim():`NORAD ${e}`,c=f=>{const h=Number(f);return Number.isFinite(h)?h:0},d={...i,OBJECT_NAME:l,OBJECT_ID:typeof i.OBJECT_ID=="string"&&i.OBJECT_ID?i.OBJECT_ID:`NORAD ${e}`,EPOCH:s,MEAN_MOTION:t,ECCENTRICITY:a[0],INCLINATION:a[1],RA_OF_ASC_NODE:a[2],ARG_OF_PERICENTER:a[3],MEAN_ANOMALY:a[4],BSTAR:c(i.BSTAR),MEAN_MOTION_DOT:c(i.MEAN_MOTION_DOT),MEAN_MOTION_DDOT:c(i.MEAN_MOTION_DDOT),ELEMENT_SET_NO:c(i.ELEMENT_SET_NO),NORAD_CAT_ID:e};return{noradId:e,name:l,omm:d}},ax=i=>{if(!i||typeof i!="object"||!("schemaVersion"in i)||i.schemaVersion!==1||!("fetchedAt"in i)||typeof i.fetchedAt!="string"||Number.isNaN(Date.parse(i.fetchedAt))||!("satellites"in i)||!Array.isArray(i.satellites))throw new Error("The shared satellite catalog has an invalid format.");const e=i.satellites.map(t=>t&&typeof t=="object"?s0(t):null).filter(t=>!!t);if(!e.length)throw new Error("The shared satellite catalog contains no valid records.");return{satellites:e,fetchedAt:i.fetchedAt}},ox=i=>{if(!i||typeof i!="object")return!1;const e=i;if(!Number.isSafeInteger(e.noradId)||typeof e.name!="string")return!1;if(e.omm&&typeof e.omm=="object"){const t=s0(e.omm);return(t==null?void 0:t.noradId)===e.noradId}return typeof e.line1=="string"&&typeof e.line2=="string"},lx=new Map([[25544,"#ff9500"],[20580,"#00f0ff"],[25994,"#7cff4f"],[33591,"#ffd400"]]),ld={leo:"#c084fc",meo:"#ffc857",geo:"#ff70c8"},cx=(i,e)=>{const t=lx.get(i);return t||(e<2e3?ld.leo:e<2e4?ld.meo:ld.geo)},nm=(i,e,t)=>`${Math.abs(i).toFixed(2)}° ${i>=0?e:t}`,Qa=i=>{const e=i.omm?tx(i.omm):ex(i.line1,i.line2);return e.error?null:{...i,satrec:e,periodSeconds:2*Math.PI/e.no*60}},ux=i=>{const e=i.omm?Number(i.omm.MEAN_MOTION):Number.parseFloat(i.line2.slice(52,63));return!Number.isFinite(e)||e<=0?null:{...i,periodSeconds:86400/e}},a0=i=>{const t=i;return(Math.pow(t*t*3986e11/(4*Math.PI*Math.PI),1/3)-r0*1e3)/1e3},o0=i=>i<2e3?"leo":i<2e4?"meo":"geo",dx=i=>Math.max(i/r0,5e-4),fx={all:{label:"All",value:"all"},leo:{label:"LEO (< 2000 km)",value:"leo"},meo:{label:"MEO (2-20k km)",value:"meo"},geo:{label:"High (20k+ km)",value:"geo"},none:{label:"None",value:"none"}},hx=8*60*60*1e3,$d="orbitradar_active_satellite_tles_v2",mo="orbitradar_active_satellite_timestamp_v2",cf="orbitradar_active_satellite_source_timestamp_v2",l0=i=>{if(!i)return!1;const e=Date.parse(i),t=Date.now()-e;return!Number.isNaN(e)&&t>=0&&t<hx},im=(i=!1)=>{try{const e=localStorage.getItem($d),t=localStorage.getItem(mo);if(!e||!i&&!l0(t))return null;const s=JSON.parse(e);if(!Array.isArray(s.satellites))return null;const a=s.satellites.filter(ox);return a.length?a:null}catch{try{localStorage.removeItem($d),localStorage.removeItem(mo),localStorage.removeItem(cf)}catch{}return null}},px=(i,e)=>{try{localStorage.setItem($d,JSON.stringify({satellites:i})),localStorage.setItem(mo,new Date().toISOString()),e&&localStorage.setItem(cf,e)}catch(t){console.warn("Satellite catalog could not be cached:",t)}},rm=()=>{try{const i=localStorage.getItem(cf);return i&&!Number.isNaN(Date.parse(i))?i:null}catch{return null}},mx="/data/catalog.json",gx="/data/catalog-status.json",vx=25544,_x=async()=>{try{const i=await fetch(gx,{cache:"no-cache"});return i.ok?await i.json():null}catch{return null}},xx=i=>{const[e,t]=me.useState([]),[s,a]=me.useState(vx),[l,c]=me.useState(!0),[d,f]=me.useState("Loading the shared satellite catalog..."),[h,m]=me.useState(null),g=me.useRef(!1),v=me.useCallback((_,N,E)=>{const b=_.map(ux).filter(P=>!!P);t(b),f(N.replace("{count}",b.length.toLocaleString())),a(P=>{var I;return P===null?null:b.some(F=>F.noradId===P)?P:((I=b[0])==null?void 0:I.noradId)??null});let z=null;try{z=localStorage.getItem(mo)}catch{}m(E??rm()??z??new Date().toISOString())},[]),S=me.useCallback(async()=>{if(g.current)return;g.current=!0,c(!0),f("Checking for the latest shared satellite catalog...");let _=null;try{const[N,E]=await Promise.all([fetch(mx,{cache:"no-cache"}),_x()]);if(_=E,!N.ok)throw new Error(`Shared catalog request failed (${N.status}).`);const b=ax(await N.json());px(b.satellites,b.fetchedAt);let z="Tracking {count} satellites from the shared catalog.";(_==null?void 0:_.state)==="paused"?z=_.message?`${_.message} Using the last valid snapshot ({count} satellites).`:"Catalog publishing is paused for review; using the last valid snapshot ({count} satellites).":(_==null?void 0:_.state)==="error"&&(z="Catalog refresh failed; using the last valid published snapshot ({count} satellites)."),v(b.satellites,z,b.fetchedAt)}catch(N){console.warn("Unable to read shared satellite catalog:",N);const E=im(!0);E?v(E,_!=null&&_.message?`${_.message} Showing the last saved snapshot ({count} satellites).`:"Shared catalog is unavailable; showing the last saved snapshot ({count} satellites)."):f((_==null?void 0:_.message)??"The shared satellite catalog is not available yet. Try again after it has been published.")}finally{g.current=!1,c(!1)}},[v]);me.useEffect(()=>{const _=im(!0);let N=null;try{N=localStorage.getItem(mo)}catch{}if(_&&l0(N)){v(_,"Tracking {count} satellites from local cache."),c(!1);return}_&&(v(_,"Checking for an update; showing the last saved snapshot ({count} satellites)."),m(rm()??N)),S()},[v,S]),me.useEffect(()=>{if((i==null?void 0:i.autoRefresh)===!1)return;const _=((i==null?void 0:i.refreshIntervalHours)??8)*60*60*1e3,N=window.setInterval(()=>{S()},_);return()=>window.clearInterval(N)},[S,i==null?void 0:i.autoRefresh,i==null?void 0:i.refreshIntervalHours]);const M=me.useCallback(()=>e.find(_=>_.noradId===s)??null,[e,s]),w=me.useCallback(_=>{a(_)},[]),y=me.useCallback(()=>{a(null)},[]);return{trackedSatellites:e,selectedNoradId:s,isLoading:l,statusMessage:d,lastUpdated:h,getSelectedSatellite:M,selectSatellite:w,clearSelection:y,refreshCatalog:S}},rc=(i,e)=>{const t=nx(i.satrec,e);if(!t||!t.position||typeof t.position!="object")return null;const s=sx(t.position,e0(e)),a=t.velocity,l=s.height,c={noradId:i.noradId,name:i.name,lat:ix(s.latitude),lng:rx(s.longitude),alt:dx(l),altitudeKm:l,velocityKph:a&&typeof a=="object"?Math.hypot(a.x,a.y,a.z)*3600:null,color:cx(i.noradId,l),altitudeClass:o0(a0(i.periodSeconds))};return Object.values(c).every(d=>typeof d!="number"||Number.isFinite(d))?c:null},sm=(i,e,t=120)=>{const s=[],a=i.periodSeconds*1e3;for(let l=0;l<=t;l+=1){const c=new Date(e.getTime()+(l/t-.5)*a),d=rc(i,c);d&&s.push({lat:d.lat,lng:d.lng,alt:d.alt})}return s},yx=1e3,Sx=(i,e,t,s)=>{const[a,l]=me.useState(()=>new Date),[c,d]=me.useState([]),[f,h]=me.useState(0),[m,g]=me.useState([]),[v,S]=me.useState(!0),[M,w]=me.useState(!1),y=me.useRef(null),_=me.useRef(null),N=me.useRef(0),E=me.useRef(0),b=me.useRef(e),z=me.useRef(0),P=me.useRef(null),I=t!==void 0,F=t??a,L=me.useMemo(()=>{if(e===null)return null;const re=i.find(ie=>ie.noradId===e);return re?Qa(re):null},[i,e]),[R,k]=me.useState(void 0),J=me.useRef({satellite:L,getTime:s??(()=>F)});J.current={satellite:L,getTime:s??(()=>F)};const Y=me.useMemo(()=>i,[i]),ee=me.useRef({trackedSatellites:i,selectedNoradId:e,time:F,showOrbit:v});ee.current={trackedSatellites:i,selectedNoradId:e,time:F,showOrbit:v};const de=me.useCallback((re,ie)=>{d(re),P.current!==ie&&(P.current=ie,h(U=>U+1))},[]);me.useEffect(()=>{if(I)return;const re=()=>{document.visibilityState!=="hidden"&&l(new Date)},ie=window.setInterval(re,yx);return document.addEventListener("visibilitychange",re),()=>{window.clearInterval(ie),document.removeEventListener("visibilitychange",re)}},[I]),me.useEffect(()=>{let re,ie;try{re=new Worker(new URL("/assets/positions.worker-DG5JkNmD.js",import.meta.url),{type:"module"}),ie=new Worker(new URL("/assets/positions.worker-DG5JkNmD.js",import.meta.url),{type:"module"})}catch{return}return y.current=re,_.current=ie,re.onmessage=U=>{U.data.requestId===N.current&&U.data.type==="positions"&&U.data.positions&&de(U.data.positions,U.data.snapshotKey??`request:${U.data.requestId}`)},ie.onmessage=U=>{U.data.requestId===E.current&&U.data.orbitPoints&&g(U.data.orbitPoints)},re.onerror=()=>{re.terminate(),y.current=null;const{trackedSatellites:U,time:X}=ee.current,Le=U.map(Z=>{const ne=Qa(Z);return ne?rc(ne,X):null}).filter(Z=>Z!==null);de(Le,`${z.current}:${X.toISOString()}`)},ie.onerror=()=>{ie.terminate(),_.current=null;const{trackedSatellites:U,selectedNoradId:X,time:Le}=ee.current,Z=U.find(le=>le.noradId===X),ne=Z?Qa(Z):null;g(ne?sm(ne,Le):[])},()=>{re.terminate(),ie.terminate(),y.current=null,_.current=null}},[de]),me.useEffect(()=>{var re,ie;z.current+=1,(re=y.current)==null||re.postMessage({type:"catalog",satellites:Y}),(ie=_.current)==null||ie.postMessage({type:"catalog",satellites:Y})},[Y]),me.useEffect(()=>{let re=null;const ie=()=>{const{satellite:X,getTime:Le}=J.current;if(!X){re=null,k(null);return}const Z=Le(),ne=Z.getTime();ne!==re&&(re=ne,k(rc(X,Z)))};k(void 0),ie();const U=window.setInterval(ie,100);return()=>window.clearInterval(U)},[L]),me.useEffect(()=>{const re=++N.current,ie=y.current,U=`${z.current}:${F.toISOString()}`;if(ie){ie.postMessage({requestId:re,time:F.toISOString(),selectedNoradId:null,showOrbit:!1,snapshotKey:U});return}const X=i.map(Le=>{const Z=Qa(Le);return Z?rc(Z,F):null}).filter(Le=>Le!==null);de(X,U)},[i,F,Y,de]);const K=Math.floor(F.getTime()/6e4);me.useEffect(()=>{const re=++E.current;if(b.current!==e&&(g([]),b.current=e),!e||!v){g([]);return}const ie=new Date(K*6e4),U=_.current;if(U){U.postMessage({requestId:re,time:ie.toISOString(),selectedNoradId:e,showOrbit:!0});return}const X=i.find(Z=>Z.noradId===e),Le=X?Qa(X):null;g(Le?sm(Le,ie):[])},[i,e,v,K]);const pe=me.useMemo(()=>c.find(re=>re.noradId===e)??null,[c,e]);return{time:a,satellitePositions:c,selectedPosition:R===void 0?pe:R,snapshotVersion:f,orbitPoints:v?m:[],showOrbit:v,setShowOrbit:S,followSelected:M,setFollowSelected:w}},Mx=()=>new Promise((i,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:s,longitude:a}=t.coords;i({lat:s,lng:a})},t=>{e("Error getting geolocation: "+t.message)}):e("Geolocation not supported by this browser.")}),cd="orbitradar_user_location",Ex=()=>{const[i,e]=me.useState(()=>{try{const a=localStorage.getItem(cd);if(!a)return null;const l=JSON.parse(a);if(!l||typeof l!="object")return null;const{lat:c,lng:d}=l;return typeof c=="number"&&Number.isFinite(c)&&Math.abs(c)<=90&&typeof d=="number"&&Number.isFinite(d)&&Math.abs(d)<=180?{lat:c,lng:d,name:"You"}:null}catch{return null}}),t=me.useCallback(()=>Mx().then(a=>{const l={...a,name:"You"};e(l);try{localStorage.setItem(cd,JSON.stringify(a))}catch{}return l}).catch(a=>{throw console.error("Error getting user location:",a),a}),[]),s=me.useCallback(()=>{e(null);try{localStorage.removeItem(cd)}catch{}},[]);return{userLocation:i,locateUser:t,clearUserLocation:s}},am="orbitradar_favorites",wx=()=>{const[i,e]=me.useState(()=>{try{const d=localStorage.getItem(am),f=d?JSON.parse(d):[];return Array.isArray(f)?[...new Set(f.filter(h=>Number.isSafeInteger(h)&&h>0))]:[]}catch{return[]}});me.useEffect(()=>{try{localStorage.setItem(am,JSON.stringify(i))}catch(d){console.warn("Could not save favorites:",d)}},[i]);const t=me.useCallback(d=>i.includes(d),[i]),s=me.useCallback(d=>{e(f=>f.includes(d)?f.filter(h=>h!==d):[...f,d])},[]),a=me.useCallback(d=>{e(f=>f.includes(d)?f:[...f,d])},[]),l=me.useCallback(d=>{e(f=>f.filter(h=>h!==d))},[]),c=me.useCallback(()=>{e([])},[]);return{favorites:i,isFavorite:t,toggleFavorite:s,addFavorite:a,removeFavorite:l,clearFavorites:c}},Tx=[1,5,10,30,60,120,300,600],Ax=i=>{if(Math.abs(i)<1e3)return"Live";const e=Math.abs(i),t=i<0?"-":"+";return e<6e4?`${t}${Math.floor(e/1e3)}s`:e<36e5?`${t}${Math.floor(e/6e4)}m`:`${t}${Math.floor(e/36e5)}h`},Cx=()=>{const[i,e]=me.useState(!1),[t,s]=me.useState(!1),[a,l]=me.useState(1),[c,d]=me.useState(()=>Date.now()),[f,h]=me.useState(()=>Date.now()),[m,g]=me.useState(()=>Date.now()),v=me.useRef(Date.now()),S=t||i?c:f,M=me.useMemo(()=>new Date(S),[S]),w=S-f,y=me.useCallback(()=>t?new Date(S):i?new Date(c+(Date.now()-m)*a):new Date,[S,t,i,c,a,m]),_=me.useCallback(()=>Ax(w),[w]),N=me.useCallback(()=>{if(i)return;const F=Date.now();v.current=F,t||d(F),g(F),s(!1),e(!0)},[i,t]),E=me.useCallback(()=>{const F=Date.now();d(y().getTime()),v.current=F,g(F),e(!1),s(!0)},[y]),b=me.useCallback(()=>{i?E():N()},[i,N,E]),z=me.useCallback(F=>{if(i){const L=Date.now();d(y().getTime()),v.current=L,g(L)}l(F)},[i,y]),P=me.useCallback(()=>{const F=Date.now();d(F),h(F),g(F),v.current=F,e(!1),s(!1)},[]);me.useEffect(()=>{const F=()=>{if(document.hidden)return;const R=Date.now();if(h(R),i){const k=R-v.current;v.current=R,d(J=>J+k*a),g(R)}},L=window.setInterval(F,1e3);return document.addEventListener("visibilitychange",F),()=>{window.clearInterval(L),document.removeEventListener("visibilitychange",F)}},[i,a]);const I=me.useCallback(F=>F===1?"1x (Real-time)":F<60?`${F}x`:`${F/60} min`,[]);return{isTimeLapseActive:i,isPaused:t,speed:a,speeds:Tx,currentTime:M,timeOffsetMs:w,startTimeLapse:N,stopTimeLapse:E,toggleTimeLapse:b,setTimeLapseSpeed:z,resetTime:P,getSpeedLabel:I,getEffectiveTime:y,getTimeOffsetDisplay:_}},ud=10,bx=i=>{const[e,t]=me.useState([]),s=me.useCallback(g=>{t(v=>v.includes(g)?v:v.length>=ud?[...v.slice(1),g]:[...v,g])},[]),a=me.useCallback(g=>{t(v=>v.filter(S=>S!==g))},[]),l=me.useCallback(g=>{t(v=>v.includes(g)?v.filter(S=>S!==g):v.length>=ud?[...v.slice(1),g]:[...v,g])},[]),c=me.useCallback(()=>{t([])},[]),d=me.useCallback(g=>e.includes(g),[e]),f=me.useMemo(()=>i.filter(g=>e.includes(g.noradId)),[i,e]),h=me.useMemo(()=>e.map(g=>{const v=i.find(S=>S.noradId===g);return v?{noradId:g,position:v}:null}).filter(g=>g!==null),[i,e]),m=me.useCallback(g=>{const v=e.indexOf(g);if(v===-1)return"";const S=["#ff9500","#00f0ff","#7cff4f","#ffd400","#c084fc","#ff70c8","#67e8f9","#2cffb7","#ff9f1c","#ffc857"];return S[v%S.length]},[e]);return{trackedNoradIds:e,trackedPositions:f,trackedWithPositions:h,isTracked:d,addTracked:s,removeTracked:a,toggleTracked:l,clearTracked:c,getTrackedColor:m,maxTracked:ud}},Rx=(i,e,t=new Date)=>{const[s,a]=me.useState([]),[l,c]=me.useState(!1),[d,f]=me.useState(null),h=me.useRef(null),m=me.useRef(0);me.useEffect(()=>{let w;try{w=new Worker(new URL("/assets/passes.worker-BnGfHIZ3.js",import.meta.url),{type:"module"})}catch{f("Background workers are unavailable in this browser.");return}return h.current=w,w.onmessage=y=>{y.data.requestId===m.current&&(c(!1),y.data.error?f(y.data.error):a(y.data.passes.map(_=>({..._,riseTime:new Date(_.riseTime),maxElevationTime:new Date(_.maxElevationTime),setTime:new Date(_.setTime)}))))},w.onerror=()=>{c(!1),f("Pass prediction failed. Please try again.")},()=>{w.terminate(),h.current=null}},[]);const g=me.useCallback(w=>{var N;if(!e){f("Set your location before predicting passes.");return}const y=i.filter(E=>w.includes(E.noradId));if(!y.length){f("No satellites are available to predict.");return}if(!h.current){f("Background workers are unavailable in this browser.");return}a([]),f(null),c(!0);const _=++m.current;(N=h.current)==null||N.postMessage({requestId:_,location:{lat:e.lat,lng:e.lng},startTime:t.getTime(),satellites:y})},[i,e,t]),v=me.useCallback(w=>g([w]),[g]),S=me.useCallback(w=>g(w),[g]),M=me.useCallback(()=>{var y;const w=++m.current;(y=h.current)==null||y.postMessage({type:"cancel",requestId:w}),c(!1),a([]),f(null)},[]);return{passes:s,isCalculating:l,error:d,calculateForSelected:v,calculateForTracked:S,clearPasses:M}},om="orbitradar_settings",Di={theme:"dark",showOrbitsByDefault:!0,defaultAltitudeFilter:"all",autoRefresh:!0,refreshIntervalHours:8,nightShading:!0,cloudCover:!0},Px=()=>{const[i,e]=me.useState(()=>{try{const a=localStorage.getItem(om);if(a){const l=JSON.parse(a);return{...Di,...l,theme:["dark","light","system"].includes(l.theme??"")?l.theme:Di.theme,defaultAltitudeFilter:["all","leo","meo","geo","none"].includes(l.defaultAltitudeFilter??"")?l.defaultAltitudeFilter:Di.defaultAltitudeFilter,refreshIntervalHours:[1,4,8,12,24].includes(l.refreshIntervalHours??0)?l.refreshIntervalHours:Di.refreshIntervalHours,autoRefresh:typeof l.autoRefresh=="boolean"?l.autoRefresh:Di.autoRefresh,showOrbitsByDefault:typeof l.showOrbitsByDefault=="boolean"?l.showOrbitsByDefault:Di.showOrbitsByDefault,nightShading:typeof l.nightShading=="boolean"?l.nightShading:Di.nightShading,cloudCover:typeof l.cloudCover=="boolean"?l.cloudCover:Di.cloudCover}}}catch{}return Di});me.useEffect(()=>{try{localStorage.setItem(om,JSON.stringify(i))}catch(a){console.warn("Could not save settings:",a)}},[i]);const t=me.useCallback((a,l)=>{e(c=>({...c,[a]:l}))},[]),s=me.useCallback(()=>{e(Di)},[]);return me.useEffect(()=>{var c;const a=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-color-scheme: light)"),l=()=>{document.documentElement.dataset.theme=i.theme==="system"?a.matches?"light":"dark":i.theme};return l(),a==null||a.addEventListener("change",l),()=>a==null?void 0:a.removeEventListener("change",l)},[i.theme]),{settings:i,updateSetting:t,resetSettings:s}},lm='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',lo=(i,e)=>{const t=me.useRef(null),s=me.useRef(e);return s.current=e,me.useEffect(()=>{var f;if(!i)return;const a=document.activeElement instanceof HTMLElement?document.activeElement:null,l=t.current;(f=(l==null?void 0:l.querySelector(lm))??l)==null||f.focus();const d=h=>{if(h.key==="Escape"){h.preventDefault(),s.current();return}if(h.key!=="Tab"||!l)return;const m=[...l.querySelectorAll(lm)];if(!m.length){h.preventDefault(),l.focus();return}const g=m[0],v=m[m.length-1];h.shiftKey&&document.activeElement===g?(h.preventDefault(),v.focus()):!h.shiftKey&&document.activeElement===v&&(h.preventDefault(),g.focus())};return document.addEventListener("keydown",d),()=>{document.removeEventListener("keydown",d),a==null||a.focus()}},[i]),t};class Lx extends $g.Component{constructor(){super(...arguments);Gp(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("The globe could not be rendered:",t)}render(){return this.state.hasError?B.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[B.jsx("p",{className:"text-lg font-bold",children:"The 3D globe is unavailable."}),B.jsx("p",{className:"max-w-sm text-sm text-slate-300",children:"Satellite data and controls are still available. Check graphics acceleration, then try the globe again."}),B.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:this.props.onRetry,type:"button",children:"Retry globe"})]}):this.props.children}}const Nx=({passes:i,isCalculating:e,error:t,onClose:s,onCalculateTracked:a,selectedSatelliteName:l})=>{const c=lo(!0,s),d=m=>m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),f=m=>m.toLocaleDateString([],{month:"short",day:"numeric",year:m.getFullYear()!==new Date().getFullYear()?"numeric":void 0}),h=m=>{if(m<60)return`${Math.round(m)} min`;const g=Math.floor(m/60),v=Math.round(m%60);return`${g}h ${v}m`};return B.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:B.jsxs("section",{ref:c,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"passes-title",className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[B.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Pass Prediction"}),B.jsx("h2",{id:"passes-title",className:"mt-1 text-2xl font-bold",children:"Upcoming satellite passes"}),B.jsxs("p",{className:"mt-1 text-sm text-slate-400",children:[l," and tracked objects · next 24 hours · over your location"]})]}),B.jsx("button",{"aria-label":"Close pass prediction",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),B.jsxs("div",{className:"max-h-[calc(90vh-140px)] overflow-y-auto",children:[t&&B.jsx("div",{className:"p-4 text-red-400",children:B.jsxs("p",{children:["Error: ",t]})}),e&&i.length===0&&!t&&B.jsx("div",{className:"p-4 text-center text-slate-400",children:B.jsx("p",{children:"Calculating passes... This may take a moment."})}),!e&&i.length===0&&!t&&B.jsxs("div",{className:"p-4 text-center text-slate-400",children:[B.jsx("p",{children:"No passes found for this satellite in the next 24 hours."}),B.jsx("p",{className:"mt-2 text-sm",children:"The satellite may not pass over your location, or its orbit may not be visible."})]}),i.length>0&&B.jsx("div",{className:"p-4",children:B.jsx("div",{className:"space-y-3",children:i.map((m,g)=>B.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 p-4",children:[B.jsxs("div",{className:"flex items-center justify-between",children:[B.jsxs("div",{children:[B.jsxs("p",{className:"font-semibold",children:[m.name," · Pass #",g+1]}),B.jsx("p",{className:"text-sm text-slate-400",children:f(m.riseTime)})]}),B.jsxs("span",{className:`rounded-full px-2 py-1 text-xs ${m.maxElevationDeg>=60?"bg-green-500/20 text-green-400":m.maxElevationDeg>=30?"bg-yellow-500/20 text-yellow-400":"bg-blue-500/20 text-blue-400"}`,children:["Max: ",m.maxElevationDeg.toFixed(1),"°"]})]}),B.jsxs("div",{className:"mt-3 grid grid-cols-3 gap-2 text-sm",children:[B.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[B.jsx("p",{className:"text-slate-400",children:"Rise"}),B.jsx("p",{className:"font-semibold",children:m.riseClipped?"Already up":d(m.riseTime)})]}),B.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[B.jsx("p",{className:"text-slate-400",children:"Peak"}),B.jsx("p",{className:"font-semibold",children:d(m.maxElevationTime)})]}),B.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[B.jsx("p",{className:"text-slate-400",children:"Set"}),B.jsx("p",{className:"font-semibold",children:m.setClipped?"After window":d(m.setTime)})]})]}),B.jsxs("div",{className:"mt-2 text-center text-xs text-slate-400",children:[m.riseClipped||m.setClipped?"Visible during at least ":"Duration: ",h(m.durationMinutes)]})]},g))})})]}),B.jsx("footer",{className:"border-t border-white/10 p-4",children:B.jsx("button",{className:"w-full rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:a,type:"button",children:"Predict Selected / Tracked"})})]})})},Dx=({settings:i,onUpdate:e,onReset:t,onClose:s})=>{const a=lo(!0,s);return B.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:B.jsxs("section",{ref:a,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",className:"max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[B.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Settings"}),B.jsx("h2",{id:"settings-title",className:"mt-1 text-2xl font-bold",children:"Configuration"}),B.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Customize your OrbitRadar experience"})]}),B.jsx("button",{"aria-label":"Close settings",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),B.jsx("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:B.jsxs("div",{className:"space-y-6",children:[B.jsxs("div",{children:[B.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Theme"}),B.jsx("div",{className:"flex gap-2",children:["dark","light","system"].map(l=>B.jsx("button",{className:`flex-1 rounded-lg border px-3 py-2 text-sm transition ${i.theme===l?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,"aria-pressed":i.theme===l,onClick:()=>e("theme",l),type:"button",children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),B.jsxs("div",{children:[B.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[B.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Show orbits by default"}),B.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.showOrbitsByDefault?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.showOrbitsByDefault,onClick:()=>e("showOrbitsByDefault",!i.showOrbitsByDefault),type:"button",children:i.showOrbitsByDefault?"ON":"OFF"})]}),B.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically show orbit path when selecting a satellite"})]}),B.jsxs("div",{children:[B.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Default altitude filter"}),B.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("defaultAltitudeFilter",l.target.value),value:i.defaultAltitudeFilter,children:[B.jsx("option",{value:"all",children:"All Satellites"}),B.jsx("option",{value:"leo",children:"LEO (<2000km)"}),B.jsx("option",{value:"meo",children:"MEO (2-20k km)"}),B.jsx("option",{value:"geo",children:"High altitude (20k+ km)"}),B.jsx("option",{value:"none",children:"None (Earth only)"})]})]}),B.jsxs("div",{children:[B.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[B.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Night shading"}),B.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.nightShading?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.nightShading,onClick:()=>e("nightShading",!i.nightShading),type:"button",children:i.nightShading?"ON":"OFF"})]}),B.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Follow the simulated UTC sun position."})]}),B.jsxs("div",{children:[B.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[B.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Cloud cover"}),B.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.cloudCover?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.cloudCover,onClick:()=>e("cloudCover",!i.cloudCover),type:"button",children:i.cloudCover?"ON":"OFF"})]}),B.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"NOAA GFS total cloud cover, latest global analysis."})]}),B.jsxs("div",{children:[B.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[B.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Auto refresh catalog"}),B.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.autoRefresh?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.autoRefresh,onClick:()=>e("autoRefresh",!i.autoRefresh),type:"button",children:i.autoRefresh?"ON":"OFF"})]}),B.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically refresh satellite catalog periodically"})]}),i.autoRefresh&&B.jsxs("div",{children:[B.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Refresh interval (hours)"}),B.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("refreshIntervalHours",Number(l.target.value)),value:i.refreshIntervalHours,children:[B.jsx("option",{value:1,children:"1 hour"}),B.jsx("option",{value:4,children:"4 hours"}),B.jsx("option",{value:8,children:"8 hours"}),B.jsx("option",{value:12,children:"12 hours"}),B.jsx("option",{value:24,children:"24 hours"})]})]})]})}),B.jsx("footer",{className:"border-t border-white/10 p-4",children:B.jsxs("div",{className:"flex gap-2",children:[B.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-400 transition hover:bg-white/20",onClick:t,type:"button",children:"Reset to defaults"}),B.jsx("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:s,type:"button",children:"Save & Close"})]})})]})})},d2=(i,e,t)=>i*(e?.016:t?.012:.008),f2="#ffffff",Ix=i=>Math.min(Math.max(i,1),1.5);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="165",h2={ROTATE:0,DOLLY:1,PAN:2},p2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ux=0,cm=1,Ox=2,c0=1,Fx=2,er=3,ar=0,$n=1,tr=2,Fr=0,aa=1,um=2,dm=3,fm=4,zx=5,us=100,kx=101,Bx=102,Hx=103,Vx=104,Gx=200,Wx=201,jx=202,Xx=203,Kd=204,Zd=205,qx=206,Yx=207,$x=208,Kx=209,Zx=210,Jx=211,Qx=212,ey=213,ty=214,ny=0,iy=1,ry=2,oc=3,sy=4,ay=5,oy=6,ly=7,_c=0,cy=1,uy=2,zr=0,dy=1,fy=2,hy=3,py=4,my=5,gy=6,vy=7,u0=300,ua=301,da=302,Jd=303,Qd=304,xc=306,lc=1e3,Ur=1001,ef=1002,Yn=1003,_y=1004,Al=1005,pi=1006,dd=1007,Or=1008,kr=1009,xy=1010,yy=1011,cc=1012,d0=1013,fa=1014,rr=1015,yc=1016,f0=1017,h0=1018,ha=1020,Sy=35902,My=1021,Ey=1022,Fi=1023,wy=1024,Ty=1025,oa=1026,pa=1027,p0=1028,m0=1029,Ay=1030,g0=1031,v0=1033,fd=33776,hd=33777,pd=33778,md=33779,hm=35840,pm=35841,mm=35842,gm=35843,vm=36196,_m=37492,xm=37496,ym=37808,Sm=37809,Mm=37810,Em=37811,wm=37812,Tm=37813,Am=37814,Cm=37815,bm=37816,Rm=37817,Pm=37818,Lm=37819,Nm=37820,Dm=37821,gd=36492,Im=36494,Um=36495,Cy=36283,Om=36284,Fm=36285,zm=36286,m2=0,g2=1,v2=2,by=3200,Ry=3201,df=0,Py=1,Ir="",Ti="srgb",Br="srgb-linear",ff="display-p3",Sc="display-p3-linear",uc="linear",qt="srgb",dc="rec709",fc="p3",Bs=7680,km=519,Ly=512,Ny=513,Dy=514,_0=515,Iy=516,Uy=517,Oy=518,Fy=519,tf=35044,_2=35048,Bm="300 es",sr=2e3,hc=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hm=1234567;const co=Math.PI/180,go=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function pn(i,e,t){return Math.max(e,Math.min(t,i))}function hf(i,e){return(i%e+e)%e}function zy(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function ky(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function By(i,e,t,s){return uo(i,e,1-Math.exp(-t*s))}function Hy(i,e=1){return e-Math.abs(hf(i,e*2)-e)}function Vy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jy(i,e){return i+Math.random()*(e-i)}function Xy(i){return i*(.5-Math.random())}function qy(i){i!==void 0&&(Hm=i);let e=Hm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yy(i){return i*co}function $y(i){return i*go}function Ky(i){return(i&i-1)===0&&i!==0}function Zy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qy(i,e,t,s,a){const l=Math.cos,c=Math.sin,d=l(t/2),f=c(t/2),h=l((e+s)/2),m=c((e+s)/2),g=l((e-s)/2),v=c((e-s)/2),S=l((s-e)/2),M=c((s-e)/2);switch(a){case"XYX":i.set(d*m,f*g,f*v,d*h);break;case"YZY":i.set(f*v,d*m,f*g,d*h);break;case"ZXZ":i.set(f*g,f*v,d*m,d*h);break;case"XZX":i.set(d*m,f*M,f*S,d*h);break;case"YXY":i.set(f*S,d*m,f*M,d*h);break;case"ZYZ":i.set(f*M,f*S,d*m,d*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const x2={DEG2RAD:co,RAD2DEG:go,generateUUID:zi,clamp:pn,euclideanModulo:hf,mapLinear:zy,inverseLerp:ky,lerp:uo,damp:By,pingpong:Hy,smoothstep:Vy,smootherstep:Gy,randInt:Wy,randFloat:jy,randFloatSpread:Xy,seededRandom:qy,degToRad:Yy,radToDeg:$y,isPowerOfTwo:Ky,ceilPowerOfTwo:Zy,floorPowerOfTwo:Jy,setQuaternionFromProperEuler:Qy,normalize:kt,denormalize:Ci};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,t,s,a,l,c,d,f,h){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,d,f,h)}set(e,t,s,a,l,c,d,f,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],d=s[3],f=s[6],h=s[1],m=s[4],g=s[7],v=s[2],S=s[5],M=s[8],w=a[0],y=a[3],_=a[6],N=a[1],E=a[4],b=a[7],z=a[2],P=a[5],I=a[8];return l[0]=c*w+d*N+f*z,l[3]=c*y+d*E+f*P,l[6]=c*_+d*b+f*I,l[1]=h*w+m*N+g*z,l[4]=h*y+m*E+g*P,l[7]=h*_+m*b+g*I,l[2]=v*w+S*N+M*z,l[5]=v*y+S*E+M*P,l[8]=v*_+S*b+M*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*d*h-s*l*m+s*d*f+a*l*h-a*c*f}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],g=m*c-d*h,v=d*f-m*l,S=h*l-c*f,M=t*g+s*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(a*h-m*s)*w,e[2]=(d*s-a*c)*w,e[3]=v*w,e[4]=(m*t-a*f)*w,e[5]=(a*l-d*t)*w,e[6]=S*w,e[7]=(s*f-h*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,d){const f=Math.cos(l),h=Math.sin(l);return this.set(s*f,s*h,-s*(f*c+h*d)+c+e,-a*h,a*f,-a*(-h*c+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(vd.makeScale(e,t)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,t){return this.premultiply(vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new Tt;function x0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eS(){const i=vo("canvas");return i.style.display="block",i}const Vm={};function pf(i){i in Vm||(Vm[i]=!0,console.warn(i))}function tS(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const Gm=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wm=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cl={[Br]:{transfer:uc,primaries:dc,toReference:i=>i,fromReference:i=>i},[Ti]:{transfer:qt,primaries:dc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sc]:{transfer:uc,primaries:fc,toReference:i=>i.applyMatrix3(Wm),fromReference:i=>i.applyMatrix3(Gm)},[ff]:{transfer:qt,primaries:fc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wm),fromReference:i=>i.applyMatrix3(Gm).convertLinearToSRGB()}},nS=new Set([Br,Sc]),Bt={enabled:!0,_workingColorSpace:Br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nS.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const s=Cl[e].toReference,a=Cl[t].fromReference;return a(s(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cl[i].primaries},getTransfer:function(i){return i===Ir?uc:Cl[i].transfer}};function la(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _d(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hs;class iS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=vo("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=la(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(la(t[s]/255)*255):t[s]=la(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rS=0;class y0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(xd(a[c].image)):l.push(xd(a[c]))}else l=xd(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function xd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sS=0;class Dn extends ga{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,s=Ur,a=Ur,l=pi,c=Or,d=Fi,f=kr,h=Dn.DEFAULT_ANISOTROPY,m=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=zi(),this.name="",this.source=new y0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lc:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case ef:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lc:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case ef:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=u0;Dn.DEFAULT_ANISOTROPY=1;class Mn{constructor(e=0,t=0,s=0,a=1){Mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const f=e.elements,h=f[0],m=f[4],g=f[8],v=f[1],S=f[5],M=f[9],w=f[2],y=f[6],_=f[10];if(Math.abs(m-v)<.01&&Math.abs(g-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+w)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,b=(S+1)/2,z=(_+1)/2,P=(m+v)/4,I=(g+w)/4,F=(M+y)/4;return E>b&&E>z?E<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(E),a=P/s,l=I/s):b>z?b<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),s=P/a,l=F/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=I/l,a=F/l),this.set(s,a,l,t),this}let N=Math.sqrt((y-M)*(y-M)+(g-w)*(g-w)+(v-m)*(v-m));return Math.abs(N)<.001&&(N=1),this.x=(y-M)/N,this.y=(g-w)/N,this.z=(v-m)/N,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends ga{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mn(0,0,e,t),this.scissorTest=!1,this.viewport=new Mn(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Dn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new y0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends aS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class S0 extends Dn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oS extends Dn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,d){let f=s[a+0],h=s[a+1],m=s[a+2],g=s[a+3];const v=l[c+0],S=l[c+1],M=l[c+2],w=l[c+3];if(d===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(d===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(g!==w||f!==v||h!==S||m!==M){let y=1-d;const _=f*v+h*S+m*M+g*w,N=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const z=Math.sqrt(E),P=Math.atan2(z,_*N);y=Math.sin(y*P)/z,d=Math.sin(d*P)/z}const b=d*N;if(f=f*y+v*b,h=h*y+S*b,m=m*y+M*b,g=g*y+w*b,y===1-d){const z=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=z,h*=z,m*=z,g*=z}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,c){const d=s[a],f=s[a+1],h=s[a+2],m=s[a+3],g=l[c],v=l[c+1],S=l[c+2],M=l[c+3];return e[t]=d*M+m*g+f*S-h*v,e[t+1]=f*M+m*v+h*g-d*S,e[t+2]=h*M+m*S+d*v-f*g,e[t+3]=m*M-d*g-f*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,h=d(s/2),m=d(a/2),g=d(l/2),v=f(s/2),S=f(a/2),M=f(l/2);switch(c){case"XYZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"YXZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"ZXY":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"ZYX":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"YZX":this._x=v*m*g+h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g-v*S*M;break;case"XZY":this._x=v*m*g-h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],d=t[5],f=t[9],h=t[2],m=t[6],g=t[10],v=s+d+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-h)*S,this._z=(c-a)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(m-f)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+h)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(l-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(c-a)/S,this._x=(l+h)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,d=t._x,f=t._y,h=t._z,m=t._w;return this._x=s*m+c*d+a*h-l*f,this._y=a*m+c*f+l*d-s*h,this._z=l*m+c*h+s*f-a*d,this._w=c*m-s*d-a*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let d=c*e._w+s*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,d),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*g+this._w*v,this._x=s*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,s=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,d=e.z,f=e.w,h=2*(c*a-d*s),m=2*(d*t-l*a),g=2*(l*s-c*t);return this.x=t+f*h+c*g-d*m,this.y=s+f*m+d*h-l*g,this.z=a+f*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=a*f-l*d,this.y=l*c-s*f,this.z=s*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new q,jm=new So;class gs{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(l,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bl.copy(s.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Rl.subVectors(this.max,eo),Vs.subVectors(e.a,eo),Gs.subVectors(e.b,eo),Ws.subVectors(e.c,eo),Cr.subVectors(Gs,Vs),br.subVectors(Ws,Gs),ns.subVectors(Vs,Ws);let t=[0,-Cr.z,Cr.y,0,-br.z,br.y,0,-ns.z,ns.y,Cr.z,0,-Cr.x,br.z,0,-br.x,ns.z,0,-ns.x,-Cr.y,Cr.x,0,-br.y,br.x,0,-ns.y,ns.x,0];return!Sd(t,Vs,Gs,Ws,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,Vs,Gs,Ws,Rl))?!1:(Pl.crossVectors(Cr,br),t=[Pl.x,Pl.y,Pl.z],Sd(t,Vs,Gs,Ws,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new q,new q,new q,new q,new q,new q,new q,new q],Mi=new q,bl=new gs,Vs=new q,Gs=new q,Ws=new q,Cr=new q,br=new q,ns=new q,eo=new q,Rl=new q,Pl=new q,is=new q;function Sd(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){is.fromArray(i,l);const d=a.x*Math.abs(is.x)+a.y*Math.abs(is.y)+a.z*Math.abs(is.z),f=e.dot(is),h=t.dot(is),m=s.dot(is);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>d)return!1}return!0}const lS=new gs,to=new q,Md=new q;class va{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):lS.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(to,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Md)),this.expandByPoint(to.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new q,Ed=new q,Ll=new q,Rr=new q,wd=new q,Nl=new q,Td=new q;class mf{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Ed.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Ed);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ll),d=Rr.dot(this.direction),f=-Rr.dot(Ll),h=Rr.lengthSq(),m=Math.abs(1-c*c);let g,v,S,M;if(m>0)if(g=c*f-d,v=c*d-f,M=l*m,g>=0)if(v>=-M)if(v<=M){const w=1/m;g*=w,v*=w,S=g*(g+c*v+2*d)+v*(c*g+v+2*f)+h}else v=l,g=Math.max(0,-(c*v+d)),S=-g*g+v*(v+2*f)+h;else v=-l,g=Math.max(0,-(c*v+d)),S=-g*g+v*(v+2*f)+h;else v<=-M?(g=Math.max(0,-(-c*l+d)),v=g>0?-l:Math.min(Math.max(-l,-f),l),S=-g*g+v*(v+2*f)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+h):(g=Math.max(0,-(c*l+d)),v=g>0?l:Math.min(Math.max(-l,-f),l),S=-g*g+v*(v+2*f)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+d)),S=-g*g+v*(v+2*f)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ed).addScaledVector(Ll,v),S}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),a=Ki.dot(Ki)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=s-c,f=s+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,d,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),g>=0?(d=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),s>f||d>a)||((d>s||s!==s)&&(s=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,s,a,l){wd.subVectors(t,e),Nl.subVectors(s,e),Td.crossVectors(wd,Nl);let c=this.direction.dot(Td),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const f=d*this.direction.dot(Nl.crossVectors(Rr,Nl));if(f<0)return null;const h=d*this.direction.dot(wd.cross(Rr));if(h<0||f+h>c)return null;const m=-d*Rr.dot(Td);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,s,a,l,c,d,f,h,m,g,v,S,M,w,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,d,f,h,m,g,v,S,M,w,y)}set(e,t,s,a,l,c,d,f,h,m,g,v,S,M,w,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=a,_[1]=l,_[5]=c,_[9]=d,_[13]=f,_[2]=h,_[6]=m,_[10]=g,_[14]=v,_[3]=S,_[7]=M,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*g,M=d*m,w=d*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=S+M*h,t[5]=v-w*h,t[9]=-d*f,t[2]=w-v*h,t[6]=M+S*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*m,S=f*g,M=h*m,w=h*g;t[0]=v+w*d,t[4]=M*d-S,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-d,t[2]=S*d-M,t[6]=w+v*d,t[10]=c*f}else if(e.order==="ZXY"){const v=f*m,S=f*g,M=h*m,w=h*g;t[0]=v-w*d,t[4]=-c*g,t[8]=M+S*d,t[1]=S+M*d,t[5]=c*m,t[9]=w-v*d,t[2]=-c*h,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const v=c*m,S=c*g,M=d*m,w=d*g;t[0]=f*m,t[4]=M*h-S,t[8]=v*h+w,t[1]=f*g,t[5]=w*h+v,t[9]=S*h-M,t[2]=-h,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,S=c*h,M=d*f,w=d*h;t[0]=f*m,t[4]=w-v*g,t[8]=M*g+S,t[1]=g,t[5]=c*m,t[9]=-d*m,t[2]=-h*m,t[6]=S*g+M,t[10]=v-w*g}else if(e.order==="XZY"){const v=c*f,S=c*h,M=d*f,w=d*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=v*g+w,t[5]=c*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=d*m,t[10]=w*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cS,e,uS)}lookAt(e,t,s){const a=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Pr.crossVectors(s,ni),Pr.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Pr.crossVectors(s,ni)),Pr.normalize(),Dl.crossVectors(ni,Pr),a[0]=Pr.x,a[4]=Dl.x,a[8]=ni.x,a[1]=Pr.y,a[5]=Dl.y,a[9]=ni.y,a[2]=Pr.z,a[6]=Dl.z,a[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],d=s[4],f=s[8],h=s[12],m=s[1],g=s[5],v=s[9],S=s[13],M=s[2],w=s[6],y=s[10],_=s[14],N=s[3],E=s[7],b=s[11],z=s[15],P=a[0],I=a[4],F=a[8],L=a[12],R=a[1],k=a[5],J=a[9],Y=a[13],ee=a[2],de=a[6],K=a[10],pe=a[14],W=a[3],re=a[7],ie=a[11],U=a[15];return l[0]=c*P+d*R+f*ee+h*W,l[4]=c*I+d*k+f*de+h*re,l[8]=c*F+d*J+f*K+h*ie,l[12]=c*L+d*Y+f*pe+h*U,l[1]=m*P+g*R+v*ee+S*W,l[5]=m*I+g*k+v*de+S*re,l[9]=m*F+g*J+v*K+S*ie,l[13]=m*L+g*Y+v*pe+S*U,l[2]=M*P+w*R+y*ee+_*W,l[6]=M*I+w*k+y*de+_*re,l[10]=M*F+w*J+y*K+_*ie,l[14]=M*L+w*Y+y*pe+_*U,l[3]=N*P+E*R+b*ee+z*W,l[7]=N*I+E*k+b*de+z*re,l[11]=N*F+E*J+b*K+z*ie,l[15]=N*L+E*Y+b*pe+z*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],d=e[5],f=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],M=e[3],w=e[7],y=e[11],_=e[15];return M*(+l*f*g-a*h*g-l*d*v+s*h*v+a*d*S-s*f*S)+w*(+t*f*S-t*h*v+l*c*v-a*c*S+a*h*m-l*f*m)+y*(+t*h*g-t*d*S-l*c*g+s*c*S+l*d*m-s*h*m)+_*(-a*d*m-t*f*g+t*d*v+a*c*g-s*c*v+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],M=e[12],w=e[13],y=e[14],_=e[15],N=g*y*h-w*v*h+w*f*S-d*y*S-g*f*_+d*v*_,E=M*v*h-m*y*h-M*f*S+c*y*S+m*f*_-c*v*_,b=m*w*h-M*g*h+M*d*S-c*w*S-m*d*_+c*g*_,z=M*g*f-m*w*f-M*d*v+c*w*v+m*d*y-c*g*y,P=t*N+s*E+a*b+l*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=N*I,e[1]=(w*v*l-g*y*l-w*a*S+s*y*S+g*a*_-s*v*_)*I,e[2]=(d*y*l-w*f*l+w*a*h-s*y*h-d*a*_+s*f*_)*I,e[3]=(g*f*l-d*v*l-g*a*h+s*v*h+d*a*S-s*f*S)*I,e[4]=E*I,e[5]=(m*y*l-M*v*l+M*a*S-t*y*S-m*a*_+t*v*_)*I,e[6]=(M*f*l-c*y*l-M*a*h+t*y*h+c*a*_-t*f*_)*I,e[7]=(c*v*l-m*f*l+m*a*h-t*v*h-c*a*S+t*f*S)*I,e[8]=b*I,e[9]=(M*g*l-m*w*l-M*s*S+t*w*S+m*s*_-t*g*_)*I,e[10]=(c*w*l-M*d*l+M*s*h-t*w*h-c*s*_+t*d*_)*I,e[11]=(m*d*l-c*g*l-m*s*h+t*g*h+c*s*S-t*d*S)*I,e[12]=z*I,e[13]=(m*w*a-M*g*a+M*s*v-t*w*v-m*s*y+t*g*y)*I,e[14]=(M*d*a-c*w*a-M*s*f+t*w*f+c*s*y-t*d*y)*I,e[15]=(c*g*a-m*d*a+m*s*f-t*g*f-c*s*v+t*d*v)*I,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,d=e.y,f=e.z,h=l*c,m=l*d;return this.set(h*c+s,h*d-a*f,h*f+a*d,0,h*d+a*f,m*d+s,m*f-a*c,0,h*f-a*d,m*f+a*c,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,h=l+l,m=c+c,g=d+d,v=l*h,S=l*m,M=l*g,w=c*m,y=c*g,_=d*g,N=f*h,E=f*m,b=f*g,z=s.x,P=s.y,I=s.z;return a[0]=(1-(w+_))*z,a[1]=(S+b)*z,a[2]=(M-E)*z,a[3]=0,a[4]=(S-b)*P,a[5]=(1-(v+_))*P,a[6]=(y+N)*P,a[7]=0,a[8]=(M+E)*I,a[9]=(y-N)*I,a[10]=(1-(v+w))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=js.set(a[0],a[1],a[2]).length();const c=js.set(a[4],a[5],a[6]).length(),d=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Ei.copy(this);const h=1/l,m=1/c,g=1/d;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=m,Ei.elements[5]*=m,Ei.elements[6]*=m,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,t.setFromRotationMatrix(Ei),s.x=l,s.y=c,s.z=d,this}makePerspective(e,t,s,a,l,c,d=sr){const f=this.elements,h=2*l/(t-e),m=2*l/(s-a),g=(t+e)/(t-e),v=(s+a)/(s-a);let S,M;if(d===sr)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(d===hc)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,a,l,c,d=sr){const f=this.elements,h=1/(t-e),m=1/(s-a),g=1/(c-l),v=(t+e)*h,S=(s+a)*m;let M,w;if(d===sr)M=(c+l)*g,w=-2*g;else if(d===hc)M=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new q,Ei=new Vt,cS=new q(0,0,0),uS=new q(1,1,1),Pr=new q,Dl=new q,ni=new q,Xm=new Vt,qm=new So;class bi{constructor(e=0,t=0,s=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],f=a[1],h=a[5],m=a[9],g=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class gf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const Ym=new q,Xs=new So,Zi=new Vt,Il=new q,no=new q,fS=new q,hS=new So,$m=new q(1,0,0),Km=new q(0,1,0),Zm=new q(0,0,1),Jm={type:"added"},pS={type:"removed"},qs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class Tn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new q,t=new bi,s=new So,a=new q(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Tt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Km,e)}rotateZ(e){return this.rotateOnAxis(Zm,e)}translateOnAxis(e,t){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Km,e)}translateZ(e){return this.translateOnAxis(Zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Il.copy(e):Il.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(no,Il,this.up):Zi.lookAt(Il,no,this.up),this.quaternion.setFromRotationMatrix(Zi),a&&(Zi.extractRotation(a.matrixWorld),Xs.setFromRotationMatrix(Zi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jm),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pS),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jm),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,fS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,hS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++){const d=a[l];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(l(e.materials,this.material[f]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),M=c(e.nodes);d.length>0&&(s.geometries=d),f.length>0&&(s.materials=f),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function c(d){const f=[];for(const h in d){const m=d[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new q,Ji=new q,Cd=new q,Qi=new q,Ys=new q,$s=new q,Qm=new q,bd=new q,Rd=new q,Pd=new q;class Oi{constructor(e=new q,t=new q,s=new q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),wi.subVectors(e,t),a.cross(wi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){wi.subVectors(a,t),Ji.subVectors(s,t),Cd.subVectors(e,t);const c=wi.dot(wi),d=wi.dot(Ji),f=wi.dot(Cd),h=Ji.dot(Ji),m=Ji.dot(Cd),g=c*h-d*d;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*f-d*m)*v,M=(c*m-d*f)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,s,a,l,c,d,f){return this.getBarycoord(e,t,s,a,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(c,Qi.y),f.addScaledVector(d,Qi.z),f)}static isFrontFacing(e,t,s,a){return wi.subVectors(s,t),Ji.subVectors(e,t),wi.cross(Ji).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),wi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,d;Ys.subVectors(a,s),$s.subVectors(l,s),bd.subVectors(e,s);const f=Ys.dot(bd),h=$s.dot(bd);if(f<=0&&h<=0)return t.copy(s);Rd.subVectors(e,a);const m=Ys.dot(Rd),g=$s.dot(Rd);if(m>=0&&g<=m)return t.copy(a);const v=f*g-m*h;if(v<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(s).addScaledVector(Ys,c);Pd.subVectors(e,l);const S=Ys.dot(Pd),M=$s.dot(Pd);if(M>=0&&S<=M)return t.copy(l);const w=S*h-f*M;if(w<=0&&h>=0&&M<=0)return d=h/(h-M),t.copy(s).addScaledVector($s,d);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return Qm.subVectors(l,a),d=(g-m)/(g-m+(S-M)),t.copy(a).addScaledVector(Qm,d);const _=1/(y+w+v);return c=w*_,d=v*_,t.copy(s).addScaledVector(Ys,c).addScaledVector($s,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Bt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Bt.workingColorSpace){if(e=hf(e,1),t=pn(t,0,1),s=pn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ld(c,l,e+1/3),this.g=Ld(c,l,e),this.b=Ld(c,l,e-1/3)}return Bt.toWorkingColorSpace(this,a),this}setStyle(e,t=Ti){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ti){const s=M0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=_d(e.r),this.g=_d(e.g),this.b=_d(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Bt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(pn(Nn.r*255,0,255))*65536+Math.round(pn(Nn.g*255,0,255))*256+Math.round(pn(Nn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Nn.copy(this),t);const s=Nn.r,a=Nn.g,l=Nn.b,c=Math.max(s,a,l),d=Math.min(s,a,l);let f,h;const m=(d+c)/2;if(d===c)f=0,h=0;else{const g=c-d;switch(h=m<=.5?g/(c+d):g/(2-c-d),c){case s:f=(a-l)/g+(a<l?6:0);break;case a:f=(l-s)/g+2;break;case l:f=(s-a)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Ti){Bt.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,s=Nn.g,a=Nn.b;return e!==Ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Ul);const s=uo(Lr.h,Ul.h,t),a=uo(Lr.s,Ul.s,t),l=uo(Lr.l,Ul.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Pt;Pt.NAMES=M0;let mS=0;class vs extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=aa,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Zd,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(s.blending=this.blending),this.side!==ar&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Zd&&(s.blendDst=this.blendDst),this.blendEquation!==us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==oc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==km&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class E0 extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new q,Ol=new $e;class mi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=tf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ci(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=kt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tf&&(e.usage=this.usage),e}}class w0 extends mi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class T0 extends mi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Jt extends mi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let gS=0;const hi=new Vt,Nd=new Tn,Ks=new q,ii=new gs,io=new gs,Sn=new q;class Bn extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?T0:w0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Tt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,s){return hi.makeTranslation(e,t,s),this.applyMatrix4(hi),this}scale(e,t,s){return hi.makeScale(e,t,s),this.applyMatrix4(hi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];io.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ii.min,io.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,io.max),ii.expandByPoint(Sn)):(ii.expandByPoint(io.min),ii.expandByPoint(io.max))}ii.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)Sn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Sn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let h=0,m=d.count;h<m;h++)Sn.fromBufferAttribute(d,h),f&&(Ks.fromBufferAttribute(e,h),Sn.add(Ks)),a=Math.max(a,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],f=[];for(let F=0;F<s.count;F++)d[F]=new q,f[F]=new q;const h=new q,m=new q,g=new q,v=new $e,S=new $e,M=new $e,w=new q,y=new q;function _(F,L,R){h.fromBufferAttribute(s,F),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,R),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,L),M.fromBufferAttribute(l,R),m.sub(h),g.sub(h),S.sub(v),M.sub(v);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(k),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(k),d[F].add(w),d[L].add(w),d[R].add(w),f[F].add(y),f[L].add(y),f[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let F=0,L=N.length;F<L;++F){const R=N[F],k=R.start,J=R.count;for(let Y=k,ee=k+J;Y<ee;Y+=3)_(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const E=new q,b=new q,z=new q,P=new q;function I(F){z.fromBufferAttribute(a,F),P.copy(z);const L=d[F];E.copy(L),E.sub(z.multiplyScalar(z.dot(L))).normalize(),b.crossVectors(P,L);const k=b.dot(f[F])<0?-1:1;c.setXYZW(F,E.x,E.y,E.z,k)}for(let F=0,L=N.length;F<L;++F){const R=N[F],k=R.start,J=R.count;for(let Y=k,ee=k+J;Y<ee;Y+=3)I(e.getX(Y+0)),I(e.getX(Y+1)),I(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new q,l=new q,c=new q,d=new q,f=new q,h=new q,m=new q,g=new q;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),d.fromBufferAttribute(s,M),f.fromBufferAttribute(s,w),h.fromBufferAttribute(s,y),d.add(m),f.add(m),h.add(m),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(w,f.x,f.y,f.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,f){const h=d.array,m=d.itemSize,g=d.normalized,v=new h.constructor(f.length*m);let S=0,M=0;for(let w=0,y=f.length;w<y;w++){d.isInterleavedBufferAttribute?S=f[w]*d.data.stride+d.offset:S=f[w]*m;for(let _=0;_<m;_++)v[M++]=h[S++]}return new mi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,s=this.index.array,a=this.attributes;for(const d in a){const f=a[d],h=e(f,s);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const f=[],h=l[d];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,s);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const h=s[f];e.data.attributes[f]=h.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(a[f]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eg=new Vt,rs=new mf,Fl=new va,tg=new q,Zs=new q,Js=new q,Qs=new q,Dd=new q,zl=new q,kl=new $e,Bl=new $e,Hl=new $e,ng=new q,ig=new q,rg=new q,Vl=new q,Gl=new q;class si extends Tn{constructor(e=new Bn,t=new E0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){zl.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const m=d[f],g=l[f];m!==0&&(Dd.fromBufferAttribute(g,e),c?zl.addScaledVector(Dd,m):zl.addScaledVector(Dd.sub(t),m))}t.add(zl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(Fl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Fl,tg)===null||rs.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(l).invert(),rs.copy(e.ray).applyMatrix4(eg),!(s.boundingBox!==null&&rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const y=v[M],_=c[y.materialIndex],N=Math.max(y.start,S.start),E=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,z=E;b<z;b+=3){const P=d.getX(b),I=d.getX(b+1),F=d.getX(b+2);a=Wl(this,_,e,s,h,m,g,P,I,F),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=M,_=w;y<_;y+=3){const N=d.getX(y),E=d.getX(y+1),b=d.getX(y+2);a=Wl(this,c,e,s,h,m,g,N,E,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const y=v[M],_=c[y.materialIndex],N=Math.max(y.start,S.start),E=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=N,z=E;b<z;b+=3){const P=b,I=b+1,F=b+2;a=Wl(this,_,e,s,h,m,g,P,I,F),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=M,_=w;y<_;y+=3){const N=y,E=y+1,b=y+2;a=Wl(this,c,e,s,h,m,g,N,E,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function vS(i,e,t,s,a,l,c,d){let f;if(e.side===$n?f=s.intersectTriangle(c,l,a,!0,d):f=s.intersectTriangle(a,l,c,e.side===ar,d),f===null)return null;Gl.copy(d),Gl.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Gl);return h<t.near||h>t.far?null:{distance:h,point:Gl.clone(),object:i}}function Wl(i,e,t,s,a,l,c,d,f,h){i.getVertexPosition(d,Zs),i.getVertexPosition(f,Js),i.getVertexPosition(h,Qs);const m=vS(i,e,t,s,Zs,Js,Qs,Vl);if(m){a&&(kl.fromBufferAttribute(a,d),Bl.fromBufferAttribute(a,f),Hl.fromBufferAttribute(a,h),m.uv=Oi.getInterpolation(Vl,Zs,Js,Qs,kl,Bl,Hl,new $e)),l&&(kl.fromBufferAttribute(l,d),Bl.fromBufferAttribute(l,f),Hl.fromBufferAttribute(l,h),m.uv1=Oi.getInterpolation(Vl,Zs,Js,Qs,kl,Bl,Hl,new $e)),c&&(ng.fromBufferAttribute(c,d),ig.fromBufferAttribute(c,f),rg.fromBufferAttribute(c,h),m.normal=Oi.getInterpolation(Vl,Zs,Js,Qs,ng,ig,rg,new q),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const g={a:d,b:f,c:h,normal:new q,materialIndex:0};Oi.getNormal(Zs,Js,Qs,g.normal),m.face=g}return m}class Mo extends Bn{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],m=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,a,c,2),M("x","z","y",1,-1,e,s,-t,a,c,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(f),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(g,2));function M(w,y,_,N,E,b,z,P,I,F,L){const R=b/I,k=z/F,J=b/2,Y=z/2,ee=P/2,de=I+1,K=F+1;let pe=0,W=0;const re=new q;for(let ie=0;ie<K;ie++){const U=ie*k-Y;for(let X=0;X<de;X++){const Le=X*R-J;re[w]=Le*N,re[y]=U*E,re[_]=ee,h.push(re.x,re.y,re.z),re[w]=0,re[y]=0,re[_]=P>0?1:-1,m.push(re.x,re.y,re.z),g.push(X/I),g.push(1-ie/F),pe+=1}}for(let ie=0;ie<F;ie++)for(let U=0;U<I;U++){const X=v+U+de*ie,Le=v+U+de*(ie+1),Z=v+(U+1)+de*(ie+1),ne=v+(U+1)+de*ie;f.push(X,Le,ne),f.push(Le,Z,ne),W+=6}d.addGroup(S,W,L),S+=W,v+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const s=ma(i[t]);for(const a in s)e[a]=s[a]}return e}function _S(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function A0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const xS={clone:ma,merge:kn};var yS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=_S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class C0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new q,sg=new $e,ag=new $e;class Ai extends C0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,sg,ag),t.subVectors(ag,sg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*s/h,a*=c.width/f,s*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class MS extends Tn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ai(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Ai(ea,ta,e,t);l.layers=this.layers,this.add(l);const c=new Ai(ea,ta,e,t);c.layers=this.layers,this.add(c);const d=new Ai(ea,ta,e,t);d.layers=this.layers,this.add(d);const f=new Ai(ea,ta,e,t);f.layers=this.layers,this.add(f);const h=new Ai(ea,ta,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,d,f]=t;for(const h of t)this.remove(h);if(e===sr)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,f),e.setRenderTarget(s,4,a),e.render(t,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class b0 extends Dn{constructor(e,t,s,a,l,c,d,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,s,a,l,c,d,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ES extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new b0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Mo(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:ma(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Fr});l.uniforms.tEquirect.value=t;const c=new si(a,l),d=t.minFilter;return t.minFilter===Or&&(t.minFilter=pi),new MS(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}const Id=new q,wS=new q,TS=new Tt;class ls{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Id.subVectors(s,t).cross(wS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Id),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||TS.getNormalMatrix(e),a=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new va,jl=new q;class vf{constructor(e=new ls,t=new ls,s=new ls,a=new ls,l=new ls,c=new ls){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=sr){const s=this.planes,a=e.elements,l=a[0],c=a[1],d=a[2],f=a[3],h=a[4],m=a[5],g=a[6],v=a[7],S=a[8],M=a[9],w=a[10],y=a[11],_=a[12],N=a[13],E=a[14],b=a[15];if(s[0].setComponents(f-l,v-h,y-S,b-_).normalize(),s[1].setComponents(f+l,v+h,y+S,b+_).normalize(),s[2].setComponents(f+c,v+m,y+M,b+N).normalize(),s[3].setComponents(f-c,v-m,y-M,b-N).normalize(),s[4].setComponents(f-d,v-g,y-w,b-E).normalize(),t===sr)s[5].setComponents(f+d,v+g,y+w,b+E).normalize();else if(t===hc)s[5].setComponents(d,g,w,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(jl.x=a.normal.x>0?e.max.x:e.min.x,jl.y=a.normal.y>0?e.max.y:e.min.y,jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function R0(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function AS(i){const e=new WeakMap;function t(d,f){const h=d.array,m=d.usage,g=h.byteLength,v=i.createBuffer();i.bindBuffer(f,v),i.bufferData(f,h,m),d.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,f,h){const m=f.array,g=f._updateRange,v=f.updateRanges;if(i.bindBuffer(h,d),g.count===-1&&v.length===0&&i.bufferSubData(h,0,m),v.length!==0){for(let S=0,M=v.length;S<M;S++){const w=v[S];i.bufferSubData(h,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}f.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(h,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count),g.count=-1),f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,d,f),h.version=d.version}}return{get:a,remove:l,update:c}}class Mc extends Bn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(s),f=Math.floor(a),h=d+1,m=f+1,g=e/d,v=t/f,S=[],M=[],w=[],y=[];for(let _=0;_<m;_++){const N=_*v-c;for(let E=0;E<h;E++){const b=E*g-l;M.push(b,-N,0),w.push(0,0,1),y.push(E/d),y.push(1-_/f)}}for(let _=0;_<f;_++)for(let N=0;N<d;N++){const E=N+h*_,b=N+h*(_+1),z=N+1+h*(_+1),P=N+1+h*_;S.push(E,b,P),S.push(b,z,P)}this.setIndex(S),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(w,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var CS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bS=`#ifdef USE_ALPHAHASH
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
#endif`,RS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
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
#endif`,IS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,US=`#ifdef USE_BATCHING
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
#endif`,OS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,FS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BS=`#ifdef USE_IRIDESCENCE
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
#endif`,HS=`#ifdef USE_BUMPMAP
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
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
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
#endif`,KS=`#define PI 3.141592653589793
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
} // validated`,ZS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JS=`vec3 transformedNormal = objectNormal;
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
#endif`,QS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iM="gl_FragColor = linearToOutputTexel( gl_FragColor );",rM=`
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
}`,sM=`#ifdef USE_ENVMAP
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
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pM=`#ifdef USE_GRADIENTMAP
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
}`,mM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
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
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wM=`PhysicalMaterial material;
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
#endif`,TM=`struct PhysicalMaterial {
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
}`,AM=`
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
#endif`,CM=`#if defined( RE_IndirectDiffuse )
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,OM=`#if defined( USE_POINTS_UV )
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
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
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
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$M=`#ifdef USE_NORMALMAP
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
#endif`,KM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d1=`float getShadowMask() {
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
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
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
}`,b1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,D1=`#if DEPTH_PACKING == 3200
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
}`,I1=`#define DISTANCE
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
}`,U1=`#define DISTANCE
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`uniform float scale;
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
}`,k1=`uniform vec3 diffuse;
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
}`,B1=`#include <common>
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
}`,H1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,G1=`#define LAMBERT
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
}`,W1=`#define MATCAP
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
}`,j1=`#define MATCAP
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
}`,X1=`#define NORMAL
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,$1=`#define PHONG
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
}`,K1=`#define STANDARD
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
}`,Z1=`#define STANDARD
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
}`,J1=`#define TOON
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
}`,Q1=`#define TOON
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
}`,eE=`uniform float size;
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
}`,tE=`uniform vec3 diffuse;
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
}`,nE=`#include <common>
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
}`,iE=`uniform vec3 color;
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
}`,rE=`uniform float rotation;
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
}`,sE=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:CS,alphahash_pars_fragment:bS,alphamap_fragment:RS,alphamap_pars_fragment:PS,alphatest_fragment:LS,alphatest_pars_fragment:NS,aomap_fragment:DS,aomap_pars_fragment:IS,batching_pars_vertex:US,batching_vertex:OS,begin_vertex:FS,beginnormal_vertex:zS,bsdfs:kS,iridescence_fragment:BS,bumpmap_pars_fragment:HS,clipping_planes_fragment:VS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:WS,clipping_planes_vertex:jS,color_fragment:XS,color_pars_fragment:qS,color_pars_vertex:YS,color_vertex:$S,common:KS,cube_uv_reflection_fragment:ZS,defaultnormal_vertex:JS,displacementmap_pars_vertex:QS,displacementmap_vertex:eM,emissivemap_fragment:tM,emissivemap_pars_fragment:nM,colorspace_fragment:iM,colorspace_pars_fragment:rM,envmap_fragment:sM,envmap_common_pars_fragment:aM,envmap_pars_fragment:oM,envmap_pars_vertex:lM,envmap_physical_pars_fragment:xM,envmap_vertex:cM,fog_vertex:uM,fog_pars_vertex:dM,fog_fragment:fM,fog_pars_fragment:hM,gradientmap_pars_fragment:pM,lightmap_pars_fragment:mM,lights_lambert_fragment:gM,lights_lambert_pars_fragment:vM,lights_pars_begin:_M,lights_toon_fragment:yM,lights_toon_pars_fragment:SM,lights_phong_fragment:MM,lights_phong_pars_fragment:EM,lights_physical_fragment:wM,lights_physical_pars_fragment:TM,lights_fragment_begin:AM,lights_fragment_maps:CM,lights_fragment_end:bM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:PM,logdepthbuf_pars_vertex:LM,logdepthbuf_vertex:NM,map_fragment:DM,map_pars_fragment:IM,map_particle_fragment:UM,map_particle_pars_fragment:OM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:zM,morphinstance_vertex:kM,morphcolor_vertex:BM,morphnormal_vertex:HM,morphtarget_pars_vertex:VM,morphtarget_vertex:GM,normal_fragment_begin:WM,normal_fragment_maps:jM,normal_pars_fragment:XM,normal_pars_vertex:qM,normal_vertex:YM,normalmap_pars_fragment:$M,clearcoat_normal_fragment_begin:KM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:JM,iridescence_pars_fragment:QM,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:r1,dithering_pars_fragment:s1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:d1,skinbase_vertex:f1,skinning_pars_vertex:h1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:v1,tonemapping_fragment:_1,tonemapping_pars_fragment:x1,transmission_fragment:y1,transmission_pars_fragment:S1,uv_pars_fragment:M1,uv_pars_vertex:E1,uv_vertex:w1,worldpos_vertex:T1,background_vert:A1,background_frag:C1,backgroundCube_vert:b1,backgroundCube_frag:R1,cube_vert:P1,cube_frag:L1,depth_vert:N1,depth_frag:D1,distanceRGBA_vert:I1,distanceRGBA_frag:U1,equirect_vert:O1,equirect_frag:F1,linedashed_vert:z1,linedashed_frag:k1,meshbasic_vert:B1,meshbasic_frag:H1,meshlambert_vert:V1,meshlambert_frag:G1,meshmatcap_vert:W1,meshmatcap_frag:j1,meshnormal_vert:X1,meshnormal_frag:q1,meshphong_vert:Y1,meshphong_frag:$1,meshphysical_vert:K1,meshphysical_frag:Z1,meshtoon_vert:J1,meshtoon_frag:Q1,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},Ke={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ui={basic:{uniforms:kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:kn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:kn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:kn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:kn([Ke.points,Ke.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:kn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:kn([Ke.common,Ke.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:kn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:kn([Ke.sprite,Ke.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:kn([Ke.common,Ke.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:kn([Ke.lights,Ke.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ui.physical={uniforms:kn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Xl={r:0,b:0,g:0},as=new bi,aE=new Vt;function oE(i,e,t,s,a,l,c){const d=new Pt(0);let f=l===!0?0:1,h,m,g=null,v=0,S=null;function M(N){let E=N.isScene===!0?N.background:null;return E&&E.isTexture&&(E=(N.backgroundBlurriness>0?t:e).get(E)),E}function w(N){let E=!1;const b=M(N);b===null?_(d,f):b&&b.isColor&&(_(b,1),E=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||E)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(N,E){const b=M(E);b&&(b.isCubeTexture||b.mapping===xc)?(m===void 0&&(m=new si(new Mo(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:ma(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),as.copy(E.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.material.uniforms.envMap.value=b,m.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(aE.makeRotationFromEuler(as)),m.material.toneMapped=Bt.getTransfer(b.colorSpace)!==qt,(g!==b||v!==b.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=b,v=b.version,S=i.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new si(new Mc(2,2),new or({name:"BackgroundMaterial",uniforms:ma(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=Bt.getTransfer(b.colorSpace)!==qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||v!==b.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,g=b,v=b.version,S=i.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function _(N,E){N.getRGB(Xl,A0(i)),s.buffers.color.setClear(Xl.r,Xl.g,Xl.b,E,c)}return{getClearColor:function(){return d},setClearColor:function(N,E=1){d.set(N),f=E,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,_(d,f)},render:w,addToRenderList:y}}function lE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function d(R,k,J,Y,ee){let de=!1;const K=g(Y,J,k);l!==K&&(l=K,h(l.object)),de=S(R,Y,J,ee),de&&M(R,Y,J,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,b(R,k,J,Y),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function f(){return i.createVertexArray()}function h(R){return i.bindVertexArray(R)}function m(R){return i.deleteVertexArray(R)}function g(R,k,J){const Y=J.wireframe===!0;let ee=s[R.id];ee===void 0&&(ee={},s[R.id]=ee);let de=ee[k.id];de===void 0&&(de={},ee[k.id]=de);let K=de[Y];return K===void 0&&(K=v(f()),de[Y]=K),K}function v(R){const k=[],J=[],Y=[];for(let ee=0;ee<t;ee++)k[ee]=0,J[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:Y,object:R,attributes:{},index:null}}function S(R,k,J,Y){const ee=l.attributes,de=k.attributes;let K=0;const pe=J.getAttributes();for(const W in pe)if(pe[W].location>=0){const ie=ee[W];let U=de[W];if(U===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),ie===void 0||ie.attribute!==U||U&&ie.data!==U.data)return!0;K++}return l.attributesNum!==K||l.index!==Y}function M(R,k,J,Y){const ee={},de=k.attributes;let K=0;const pe=J.getAttributes();for(const W in pe)if(pe[W].location>=0){let ie=de[W];ie===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor));const U={};U.attribute=ie,ie&&ie.data&&(U.data=ie.data),ee[W]=U,K++}l.attributes=ee,l.attributesNum=K,l.index=Y}function w(){const R=l.newAttributes;for(let k=0,J=R.length;k<J;k++)R[k]=0}function y(R){_(R,0)}function _(R,k){const J=l.newAttributes,Y=l.enabledAttributes,ee=l.attributeDivisors;J[R]=1,Y[R]===0&&(i.enableVertexAttribArray(R),Y[R]=1),ee[R]!==k&&(i.vertexAttribDivisor(R,k),ee[R]=k)}function N(){const R=l.newAttributes,k=l.enabledAttributes;for(let J=0,Y=k.length;J<Y;J++)k[J]!==R[J]&&(i.disableVertexAttribArray(J),k[J]=0)}function E(R,k,J,Y,ee,de,K){K===!0?i.vertexAttribIPointer(R,k,J,ee,de):i.vertexAttribPointer(R,k,J,Y,ee,de)}function b(R,k,J,Y){w();const ee=Y.attributes,de=J.getAttributes(),K=k.defaultAttributeValues;for(const pe in de){const W=de[pe];if(W.location>=0){let re=ee[pe];if(re===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(re=R.instanceColor)),re!==void 0){const ie=re.normalized,U=re.itemSize,X=e.get(re);if(X===void 0)continue;const Le=X.buffer,Z=X.type,ne=X.bytesPerElement,le=Z===i.INT||Z===i.UNSIGNED_INT||re.gpuType===d0;if(re.isInterleavedBufferAttribute){const ye=re.data,Ne=ye.stride,He=re.offset;if(ye.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)_(W.location+Fe,ye.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)y(W.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let Fe=0;Fe<W.locationSize;Fe++)E(W.location+Fe,U/W.locationSize,Z,ie,Ne*ne,(He+U/W.locationSize*Fe)*ne,le)}else{if(re.isInstancedBufferAttribute){for(let ye=0;ye<W.locationSize;ye++)_(W.location+ye,re.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ye=0;ye<W.locationSize;ye++)y(W.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Le);for(let ye=0;ye<W.locationSize;ye++)E(W.location+ye,U/W.locationSize,Z,ie,U*ne,U/W.locationSize*ye*ne,le)}}else if(K!==void 0){const ie=K[pe];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(W.location,ie);break;case 3:i.vertexAttrib3fv(W.location,ie);break;case 4:i.vertexAttrib4fv(W.location,ie);break;default:i.vertexAttrib1fv(W.location,ie)}}}}N()}function z(){F();for(const R in s){const k=s[R];for(const J in k){const Y=k[J];for(const ee in Y)m(Y[ee].object),delete Y[ee];delete k[J]}delete s[R]}}function P(R){if(s[R.id]===void 0)return;const k=s[R.id];for(const J in k){const Y=k[J];for(const ee in Y)m(Y[ee].object),delete Y[ee];delete k[J]}delete s[R.id]}function I(R){for(const k in s){const J=s[k];if(J[R.id]===void 0)continue;const Y=J[R.id];for(const ee in Y)m(Y[ee].object),delete Y[ee];delete J[R.id]}}function F(){L(),c=!0,l!==a&&(l=a,h(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:F,resetDefaultState:L,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function cE(i,e,t){let s;function a(h){s=h}function l(h,m){i.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,g){g!==0&&(i.drawArraysInstanced(s,h,m,g),t.update(m,s,g))}function d(h,m,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<g;S++)this.render(h[S],m[S]);else{v.multiDrawArraysWEBGL(s,h,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=m[M];t.update(S,s,1)}}function f(h,m,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)c(h[M],m[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,m,0,v,0,g);let M=0;for(let w=0;w<g;w++)M+=m[w];for(let w=0;w<v.length;w++)t.update(M,s,v[w])}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function uE(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(P){return!(P!==Fi&&s.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const I=P===yc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==kr&&s.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==rr&&!I)}function f(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=S>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:w,maxAttributes:y,maxVertexUniforms:_,maxVaryings:N,maxFragmentUniforms:E,vertexTextures:b,maxSamples:z}}function dE(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new ls,d=new Tt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||a;return a=v,s=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,_=i.get(g);if(!a||M===null||M.length===0||l&&!y)l?m(null):h();else{const N=l?0:s,E=N*4;let b=_.clippingState||null;f.value=b,b=m(M,v,E,S);for(let z=0;z!==E;++z)b[z]=t[z];_.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,v,S,M){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=f.value,M!==!0||y===null){const _=S+w*4,N=v.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let E=0,b=S;E!==w;++E,b+=4)c.copy(g[E]).applyMatrix4(N,d),c.normal.toArray(y,b),y[b+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function fE(i){let e=new WeakMap;function t(c,d){return d===Jd?c.mapping=ua:d===Qd&&(c.mapping=da),c}function s(c){if(c&&c.isTexture){const d=c.mapping;if(d===Jd||d===Qd)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new ES(f.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const d=c.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class P0 extends C0{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=4,og=[.125,.215,.35,.446,.526,.582],ds=20,Ud=new P0,lg=new Pt;let Od=null,Fd=0,zd=0,kd=!1;const cs=(1+Math.sqrt(5))/2,na=1/cs,cg=[new q(-cs,na,0),new q(cs,na,0),new q(-na,0,cs),new q(na,0,cs),new q(0,cs,-na),new q(0,cs,na),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class ug{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Fd,zd),this._renderer.xr.enabled=kd,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:yc,format:Fi,colorSpace:Br,depthBuffer:!1},a=dg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hE(l)),this._blurMaterial=pE(l,e,t)}return a}_compileMaterial(e){const t=new si(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,s,a){const d=new Ai(90,1,t,s),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(lg),m.toneMapping=zr,m.autoClear=!1;const S=new E0({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),M=new si(new Mo,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(lg),w=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(d.up.set(0,f[_],0),d.lookAt(h[_],0,0)):N===1?(d.up.set(0,0,f[_]),d.lookAt(0,h[_],0)):(d.up.set(0,f[_],0),d.lookAt(0,0,h[_]));const E=this._cubeSize;ql(a,N*E,_>2?E:0,E,E),m.setRenderTarget(a),w&&m.render(M,d),m.render(e,d)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ua||e.mapping===da;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new si(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;ql(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(c,Ud)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=cg[(a-l-1)%cg.length];this._blur(e,l-1,l,c,d)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,d){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new si(this._lodPlanes[a],h),v=h.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ds-1),w=l/M,y=isFinite(l)?1+Math.floor(m*w):ds;y>ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ds}`);const _=[];let N=0;for(let I=0;I<ds;++I){const F=I/w,L=Math.exp(-F*F/2);_.push(L),I===0?N+=L:I<y&&(N+=2*L)}for(let I=0;I<_.length;I++)_[I]=_[I]/N;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=c==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:E}=this;v.dTheta.value=M,v.mipInt.value=E-s;const b=this._sizeLods[a],z=3*b*(a>E-ra?a-E+ra:0),P=4*(this._cubeSize-b);ql(t,z,P,3*b,2*b),f.setRenderTarget(t),f.render(g,Ud)}}function hE(i){const e=[],t=[],s=[];let a=i;const l=i-ra+1+og.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);t.push(d);let f=1/d;c>i-ra?f=og[c-i+ra-1]:c===0&&(f=0),s.push(f);const h=1/(d-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,w=3,y=2,_=1,N=new Float32Array(w*M*S),E=new Float32Array(y*M*S),b=new Float32Array(_*M*S);for(let P=0;P<S;P++){const I=P%3*2/3-1,F=P>2?0:-1,L=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];N.set(L,w*M*P),E.set(v,y*M*P);const R=[P,P,P,P,P,P];b.set(R,_*M*P)}const z=new Bn;z.setAttribute("position",new mi(N,w)),z.setAttribute("uv",new mi(E,y)),z.setAttribute("faceIndex",new mi(b,_)),e.push(z),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function dg(i,e,t){const s=new ps(i,e,t);return s.texture.mapping=xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ql(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function pE(i,e,t){const s=new Float32Array(ds),a=new q(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function fg(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function hg(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function mE(i){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const f=d.mapping,h=f===Jd||f===Qd,m=f===ua||f===da;if(h||m){let g=e.get(d);const v=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return t===null&&(t=new ug(i)),g=h?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return h&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new ug(i)),g=h?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let f=0;const h=6;for(let m=0;m<h;m++)d[m]!==void 0&&f++;return f===h}function l(d){const f=d.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function gE(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&pf("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function vE(i,e,t,s){const a={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const w=v.morphAttributes[M];for(let y=0,_=w.length;y<_;y++)e.remove(w[y])}v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(g,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const M in v)e.update(v[M],i.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const w=S[M];for(let y=0,_=w.length;y<_;y++)e.update(w[y],i.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,M=g.attributes.position;let w=0;if(S!==null){const N=S.array;w=S.version;for(let E=0,b=N.length;E<b;E+=3){const z=N[E+0],P=N[E+1],I=N[E+2];v.push(z,P,P,I,I,z)}}else if(M!==void 0){const N=M.array;w=M.version;for(let E=0,b=N.length/3-1;E<b;E+=3){const z=E+0,P=E+1,I=E+2;v.push(z,P,P,I,I,z)}}else return;const y=new(x0(v)?T0:w0)(v,1);y.version=w;const _=l.get(g);_&&e.remove(_),l.set(g,y)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:d,update:f,getWireframeAttribute:m}}function _E(i,e,t){let s;function a(v){s=v}let l,c;function d(v){l=v.type,c=v.bytesPerElement}function f(v,S){i.drawElements(s,S,l,v*c),t.update(S,s,1)}function h(v,S,M){M!==0&&(i.drawElementsInstanced(s,S,l,v*c,M),t.update(S,s,M))}function m(v,S,M){if(M===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let y=0;y<M;y++)this.render(v[y]/c,S[y]);else{w.multiDrawElementsWEBGL(s,S,0,l,v,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];t.update(y,s,1)}}function g(v,S,M,w){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)h(v[_]/c,S[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,w,0,M);let _=0;for(let N=0;N<M;N++)_+=S[N];for(let N=0;N<w.length;N++)t.update(_,s,w[N])}}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function xE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function yE(i,e,t){const s=new WeakMap,a=new Mn;function l(c,d,f){const h=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let v=s.get(d);if(v===void 0||v.count!==g){let L=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();const S=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let E=0;S===!0&&(E=1),M===!0&&(E=2),w===!0&&(E=3);let b=d.attributes.position.count*E,z=1;b>e.maxTextureSize&&(z=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*z*4*g),I=new S0(P,b,z,g);I.type=rr,I.needsUpdate=!0;const F=E*4;for(let R=0;R<g;R++){const k=y[R],J=_[R],Y=N[R],ee=b*z*4*R;for(let de=0;de<k.count;de++){const K=de*F;S===!0&&(a.fromBufferAttribute(k,de),P[ee+K+0]=a.x,P[ee+K+1]=a.y,P[ee+K+2]=a.z,P[ee+K+3]=0),M===!0&&(a.fromBufferAttribute(J,de),P[ee+K+4]=a.x,P[ee+K+5]=a.y,P[ee+K+6]=a.z,P[ee+K+7]=0),w===!0&&(a.fromBufferAttribute(Y,de),P[ee+K+8]=a.x,P[ee+K+9]=a.y,P[ee+K+10]=a.z,P[ee+K+11]=Y.itemSize===4?a.w:1)}}v={count:g,texture:I,size:new $e(b,z)},s.set(d,v),d.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<h.length;w++)S+=h[w];const M=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",h)}f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function SE(i,e,t,s){let a=new WeakMap;function l(f){const h=s.render.frame,m=f.geometry,g=e.get(f,m);if(a.get(g)!==h&&(e.update(g),a.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),a.get(f)!==h&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,h))),f.isSkinnedMesh){const v=f.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return g}function c(){a=new WeakMap}function d(f){const h=f.target;h.removeEventListener("dispose",d),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}class L0 extends Dn{constructor(e,t,s,a,l,c,d,f,h,m=oa){if(m!==oa&&m!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===oa&&(s=fa),s===void 0&&m===pa&&(s=ha),super(null,a,l,c,d,f,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Yn,this.minFilter=f!==void 0?f:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const N0=new Dn,D0=new L0(1,1);D0.compareFunction=_0;const I0=new S0,U0=new oS,O0=new b0,pg=[],mg=[],gg=new Float32Array(16),vg=new Float32Array(9),_g=new Float32Array(4);function _a(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=pg[a];if(l===void 0&&(l=new Float32Array(a),pg[a]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Ec(i,e){let t=mg[e];t===void 0&&(t=new Int32Array(e),mg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function ME(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function EE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function wE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function TE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function AE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,s))return;_g.set(s),i.uniformMatrix2fv(this.addr,!1,_g),gn(t,s)}}function CE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,s))return;vg.set(s),i.uniformMatrix3fv(this.addr,!1,vg),gn(t,s)}}function bE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,s))return;gg.set(s),i.uniformMatrix4fv(this.addr,!1,gg),gn(t,s)}}function RE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function PE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function LE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function NE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function DE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function IE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function UE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function OE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function FE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);const l=this.type===i.SAMPLER_2D_SHADOW?D0:N0;t.setTexture2D(e||l,a)}function zE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||U0,a)}function kE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||O0,a)}function BE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||I0,a)}function HE(i){switch(i){case 5126:return ME;case 35664:return EE;case 35665:return wE;case 35666:return TE;case 35674:return AE;case 35675:return CE;case 35676:return bE;case 5124:case 35670:return RE;case 35667:case 35671:return PE;case 35668:case 35672:return LE;case 35669:case 35673:return NE;case 5125:return DE;case 36294:return IE;case 36295:return UE;case 36296:return OE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return BE}}function VE(i,e){i.uniform1fv(this.addr,e)}function GE(i,e){const t=_a(e,this.size,2);i.uniform2fv(this.addr,t)}function WE(i,e){const t=_a(e,this.size,3);i.uniform3fv(this.addr,t)}function jE(i,e){const t=_a(e,this.size,4);i.uniform4fv(this.addr,t)}function XE(i,e){const t=_a(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qE(i,e){const t=_a(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function YE(i,e){const t=_a(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $E(i,e){i.uniform1iv(this.addr,e)}function KE(i,e){i.uniform2iv(this.addr,e)}function ZE(i,e){i.uniform3iv(this.addr,e)}function JE(i,e){i.uniform4iv(this.addr,e)}function QE(i,e){i.uniform1uiv(this.addr,e)}function ew(i,e){i.uniform2uiv(this.addr,e)}function tw(i,e){i.uniform3uiv(this.addr,e)}function nw(i,e){i.uniform4uiv(this.addr,e)}function iw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||N0,l[c])}function rw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||U0,l[c])}function sw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||O0,l[c])}function aw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||I0,l[c])}function ow(i){switch(i){case 5126:return VE;case 35664:return GE;case 35665:return WE;case 35666:return jE;case 35674:return XE;case 35675:return qE;case 35676:return YE;case 5124:case 35670:return $E;case 35667:case 35671:return KE;case 35668:case 35672:return ZE;case 35669:case 35673:return JE;case 5125:return QE;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}class lw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=HE(t.type)}}class cw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ow(t.type)}}class uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],s)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function xg(i,e){i.seq.push(e),i.map[e.id]=e}function dw(i,e,t){const s=i.name,a=s.length;for(Bd.lastIndex=0;;){const l=Bd.exec(s),c=Bd.lastIndex;let d=l[1];const f=l[2]==="]",h=l[3];if(f&&(d=d|0),h===void 0||h==="["&&c+2===a){xg(t,h===void 0?new lw(d,i,e):new cw(d,i,e));break}else{let g=t.map[d];g===void 0&&(g=new uw(d),xg(t,g)),t=g}}}class sc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);dw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=s[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function yg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const fw=37297;let hw=0;function pw(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}function mw(i){const e=Bt.getPrimaries(Bt.workingColorSpace),t=Bt.getPrimaries(i);let s;switch(e===t?s="":e===fc&&t===dc?s="LinearDisplayP3ToLinearSRGB":e===dc&&t===fc&&(s="LinearSRGBToLinearDisplayP3"),i){case Br:case Sc:return[s,"LinearTransferOETF"];case Ti:case ff:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}function Sg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+pw(i.getShaderSource(e),c)}else return a}function gw(i,e){const t=mw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function vw(i,e){let t;switch(e){case dy:t="Linear";break;case fy:t="Reinhard";break;case hy:t="OptimizedCineon";break;case py:t="ACESFilmic";break;case gy:t="AgX";break;case vy:t="Neutral";break;case my:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _w(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function xw(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function yw(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function oo(i){return i!==""}function Mg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sw=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(i){return i.replace(Sw,Ew)}const Mw=new Map;function Ew(i,e){let t=wt[e];if(t===void 0){const s=Mw.get(e);if(s!==void 0)t=wt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return nf(t)}const ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(i){return i.replace(ww,Tw)}function Tw(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Tg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Aw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===c0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function Cw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ua:case da:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function Rw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case cy:e="ENVMAP_BLENDING_MIX";break;case uy:e="ENVMAP_BLENDING_ADD";break}return e}function Pw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function Lw(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=Aw(t),h=Cw(t),m=bw(t),g=Rw(t),v=Pw(t),S=_w(t),M=xw(l),w=a.createProgram();let y,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),_.length>0&&(_+=`
`)):(y=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),_=[Tg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?wt.tonemapping_pars_fragment:"",t.toneMapping!==zr?vw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,gw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),c=nf(c),c=Mg(c,t),c=Eg(c,t),d=nf(d),d=Mg(d,t),d=Eg(d,t),c=wg(c),d=wg(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=N+y+c,b=N+_+d,z=yg(a,a.VERTEX_SHADER,E),P=yg(a,a.FRAGMENT_SHADER,b);a.attachShader(w,z),a.attachShader(w,P),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function I(k){if(i.debug.checkShaderErrors){const J=a.getProgramInfoLog(w).trim(),Y=a.getShaderInfoLog(z).trim(),ee=a.getShaderInfoLog(P).trim();let de=!0,K=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,z,P);else{const pe=Sg(a,z,"vertex"),W=Sg(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+pe+`
`+W)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||ee==="")&&(K=!1);K&&(k.diagnostics={runnable:de,programLog:J,vertexShader:{log:Y,prefix:y},fragmentShader:{log:ee,prefix:_}})}a.deleteShader(z),a.deleteShader(P),F=new sc(a,w),L=yw(a,w)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,fw)),R},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=P,this}let Nw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Iw(e),t.set(e,s)),s}}class Iw{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Uw(i,e,t,s,a,l,c){const d=new gf,f=new Dw,h=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(L){return h.add(L),L===0?"uv":`uv${L}`}function y(L,R,k,J,Y){const ee=J.fog,de=Y.geometry,K=L.isMeshStandardMaterial?J.environment:null,pe=(L.isMeshStandardMaterial?t:e).get(L.envMap||K),W=pe&&pe.mapping===xc?pe.image.height:null,re=M[L.type];L.precision!==null&&(S=a.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const ie=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,U=ie!==void 0?ie.length:0;let X=0;de.morphAttributes.position!==void 0&&(X=1),de.morphAttributes.normal!==void 0&&(X=2),de.morphAttributes.color!==void 0&&(X=3);let Le,Z,ne,le;if(re){const gt=Ui[re];Le=gt.vertexShader,Z=gt.fragmentShader}else Le=L.vertexShader,Z=L.fragmentShader,f.update(L),ne=f.getVertexShaderID(L),le=f.getFragmentShaderID(L);const ye=i.getRenderTarget(),Ne=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,Fe=!!L.map,V=!!L.matcap,Se=!!pe,Ee=!!L.aoMap,we=!!L.lightMap,Me=!!L.bumpMap,Te=!!L.normalMap,Pe=!!L.displacementMap,Ce=!!L.emissiveMap,Xe=!!L.metalnessMap,O=!!L.roughnessMap,A=L.anisotropy>0,se=L.clearcoat>0,_e=L.dispersion>0,ge=L.iridescence>0,xe=L.sheen>0,qe=L.transmission>0,Ie=A&&!!L.anisotropyMap,De=se&&!!L.clearcoatMap,et=se&&!!L.clearcoatNormalMap,Ae=se&&!!L.clearcoatRoughnessMap,je=ge&&!!L.iridescenceMap,T=ge&&!!L.iridescenceThicknessMap,Ze=xe&&!!L.sheenColorMap,ze=xe&&!!L.sheenRoughnessMap,dt=!!L.specularMap,ut=!!L.specularColorMap,ft=!!L.specularIntensityMap,G=qe&&!!L.transmissionMap,Ve=qe&&!!L.thicknessMap,ve=!!L.gradientMap,fe=!!L.alphaMap,Oe=L.alphaTest>0,rt=!!L.alphaHash,vt=!!L.extensions;let At=zr;L.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(At=i.toneMapping);const Et={shaderID:re,shaderType:L.type,shaderName:L.name,vertexShader:Le,fragmentShader:Z,defines:L.defines,customVertexShaderID:ne,customFragmentShaderID:le,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Y.instanceColor!==null,instancingMorph:Ne&&Y.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Br,alphaToCoverage:!!L.alphaToCoverage,map:Fe,matcap:V,envMap:Se,envMapMode:Se&&pe.mapping,envMapCubeUVHeight:W,aoMap:Ee,lightMap:we,bumpMap:Me,normalMap:Te,displacementMap:v&&Pe,emissiveMap:Ce,normalMapObjectSpace:Te&&L.normalMapType===Py,normalMapTangentSpace:Te&&L.normalMapType===df,metalnessMap:Xe,roughnessMap:O,anisotropy:A,anisotropyMap:Ie,clearcoat:se,clearcoatMap:De,clearcoatNormalMap:et,clearcoatRoughnessMap:Ae,dispersion:_e,iridescence:ge,iridescenceMap:je,iridescenceThicknessMap:T,sheen:xe,sheenColorMap:Ze,sheenRoughnessMap:ze,specularMap:dt,specularColorMap:ut,specularIntensityMap:ft,transmission:qe,transmissionMap:G,thicknessMap:Ve,gradientMap:ve,opaque:L.transparent===!1&&L.blending===aa&&L.alphaToCoverage===!1,alphaMap:fe,alphaTest:Oe,alphaHash:rt,combine:L.combine,mapUv:Fe&&w(L.map.channel),aoMapUv:Ee&&w(L.aoMap.channel),lightMapUv:we&&w(L.lightMap.channel),bumpMapUv:Me&&w(L.bumpMap.channel),normalMapUv:Te&&w(L.normalMap.channel),displacementMapUv:Pe&&w(L.displacementMap.channel),emissiveMapUv:Ce&&w(L.emissiveMap.channel),metalnessMapUv:Xe&&w(L.metalnessMap.channel),roughnessMapUv:O&&w(L.roughnessMap.channel),anisotropyMapUv:Ie&&w(L.anisotropyMap.channel),clearcoatMapUv:De&&w(L.clearcoatMap.channel),clearcoatNormalMapUv:et&&w(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&w(L.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&w(L.iridescenceMap.channel),iridescenceThicknessMapUv:T&&w(L.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&w(L.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(L.sheenRoughnessMap.channel),specularMapUv:dt&&w(L.specularMap.channel),specularColorMapUv:ut&&w(L.specularColorMap.channel),specularIntensityMapUv:ft&&w(L.specularIntensityMap.channel),transmissionMapUv:G&&w(L.transmissionMap.channel),thicknessMapUv:Ve&&w(L.thicknessMap.channel),alphaMapUv:fe&&w(L.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Te||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!de.attributes.uv&&(Fe||fe),fog:!!ee,useFog:L.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:Y.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Fe&&L.map.isVideoTexture===!0&&Bt.getTransfer(L.map.colorSpace)===qt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===tr,flipSided:L.side===$n,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:vt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:vt&&L.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function _(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)R.push(k),R.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(N(R,L),E(R,L),R.push(i.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function N(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function E(L,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.skinning&&d.enable(4),R.morphTargets&&d.enable(5),R.morphNormals&&d.enable(6),R.morphColors&&d.enable(7),R.premultipliedAlpha&&d.enable(8),R.shadowMapEnabled&&d.enable(9),R.doubleSided&&d.enable(10),R.flipSided&&d.enable(11),R.useDepthPacking&&d.enable(12),R.dithering&&d.enable(13),R.transmission&&d.enable(14),R.sheen&&d.enable(15),R.opaque&&d.enable(16),R.pointsUvs&&d.enable(17),R.decodeVideoTexture&&d.enable(18),R.alphaToCoverage&&d.enable(19),L.push(d.mask)}function b(L){const R=M[L.type];let k;if(R){const J=Ui[R];k=xS.clone(J.uniforms)}else k=L.uniforms;return k}function z(L,R){let k;for(let J=0,Y=m.length;J<Y;J++){const ee=m[J];if(ee.cacheKey===R){k=ee,++k.usedTimes;break}}return k===void 0&&(k=new Lw(i,R,L,l),m.push(k)),k}function P(L){if(--L.usedTimes===0){const R=m.indexOf(L);m[R]=m[m.length-1],m.pop(),L.destroy()}}function I(L){f.remove(L)}function F(){f.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:b,acquireProgram:z,releaseProgram:P,releaseShaderCache:I,programs:m,dispose:F}}function Ow(){let i=new WeakMap;function e(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function t(l){i.delete(l)}function s(l,c,d){i.get(l)[c]=d}function a(){i=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function Fw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(g,v,S,M,w,y){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:w,group:y},i[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=S,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=w,_.group=y),e++,_}function d(g,v,S,M,w,y){const _=c(g,v,S,M,w,y);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):t.push(_)}function f(g,v,S,M,w,y){const _=c(g,v,S,M,w,y);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(g,v){t.length>1&&t.sort(g||Fw),s.length>1&&s.sort(v||Ag),a.length>1&&a.sort(v||Ag)}function m(){for(let g=e,v=i.length;g<v;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:d,unshift:f,finish:m,sort:h}}function zw(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new Cg,i.set(s,[c])):a>=l.length?(c=new Cg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function kw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Pt};break;case"SpotLight":t={position:new q,direction:new q,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function Bw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hw=0;function Vw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gw(i){const e=new kw,t=Bw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new q);const a=new q,l=new Vt,c=new Vt;function d(h){let m=0,g=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let S=0,M=0,w=0,y=0,_=0,N=0,E=0,b=0,z=0,P=0,I=0;h.sort(Vw);for(let L=0,R=h.length;L<R;L++){const k=h[L],J=k.color,Y=k.intensity,ee=k.distance,de=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=J.r*Y,g+=J.g*Y,v+=J.b*Y;else if(k.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(k.sh.coefficients[K],Y);I++}else if(k.isDirectionalLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,W=t.get(k);W.shadowBias=pe.bias,W.shadowNormalBias=pe.normalBias,W.shadowRadius=pe.radius,W.shadowMapSize=pe.mapSize,s.directionalShadow[S]=W,s.directionalShadowMap[S]=de,s.directionalShadowMatrix[S]=k.shadow.matrix,N++}s.directional[S]=K,S++}else if(k.isSpotLight){const K=e.get(k);K.position.setFromMatrixPosition(k.matrixWorld),K.color.copy(J).multiplyScalar(Y),K.distance=ee,K.coneCos=Math.cos(k.angle),K.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),K.decay=k.decay,s.spot[w]=K;const pe=k.shadow;if(k.map&&(s.spotLightMap[z]=k.map,z++,pe.updateMatrices(k),k.castShadow&&P++),s.spotLightMatrix[w]=pe.matrix,k.castShadow){const W=t.get(k);W.shadowBias=pe.bias,W.shadowNormalBias=pe.normalBias,W.shadowRadius=pe.radius,W.shadowMapSize=pe.mapSize,s.spotShadow[w]=W,s.spotShadowMap[w]=de,b++}w++}else if(k.isRectAreaLight){const K=e.get(k);K.color.copy(J).multiplyScalar(Y),K.halfWidth.set(k.width*.5,0,0),K.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=K,y++}else if(k.isPointLight){const K=e.get(k);if(K.color.copy(k.color).multiplyScalar(k.intensity),K.distance=k.distance,K.decay=k.decay,k.castShadow){const pe=k.shadow,W=t.get(k);W.shadowBias=pe.bias,W.shadowNormalBias=pe.normalBias,W.shadowRadius=pe.radius,W.shadowMapSize=pe.mapSize,W.shadowCameraNear=pe.camera.near,W.shadowCameraFar=pe.camera.far,s.pointShadow[M]=W,s.pointShadowMap[M]=de,s.pointShadowMatrix[M]=k.shadow.matrix,E++}s.point[M]=K,M++}else if(k.isHemisphereLight){const K=e.get(k);K.skyColor.copy(k.color).multiplyScalar(Y),K.groundColor.copy(k.groundColor).multiplyScalar(Y),s.hemi[_]=K,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ke.LTC_FLOAT_1,s.rectAreaLTC2=Ke.LTC_FLOAT_2):(s.rectAreaLTC1=Ke.LTC_HALF_1,s.rectAreaLTC2=Ke.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=v;const F=s.hash;(F.directionalLength!==S||F.pointLength!==M||F.spotLength!==w||F.rectAreaLength!==y||F.hemiLength!==_||F.numDirectionalShadows!==N||F.numPointShadows!==E||F.numSpotShadows!==b||F.numSpotMaps!==z||F.numLightProbes!==I)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=b+z-P,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=I,F.directionalLength=S,F.pointLength=M,F.spotLength=w,F.rectAreaLength=y,F.hemiLength=_,F.numDirectionalShadows=N,F.numPointShadows=E,F.numSpotShadows=b,F.numSpotMaps=z,F.numLightProbes=I,s.version=Hw++)}function f(h,m){let g=0,v=0,S=0,M=0,w=0;const y=m.matrixWorldInverse;for(let _=0,N=h.length;_<N;_++){const E=h[_];if(E.isDirectionalLight){const b=s.directional[g];b.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),g++}else if(E.isSpotLight){const b=s.spot[S];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(E.isRectAreaLight){const b=s.rectArea[M];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(y),c.identity(),l.copy(E.matrixWorld),l.premultiply(y),c.extractRotation(l),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),M++}else if(E.isPointLight){const b=s.point[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(y),v++}else if(E.isHemisphereLight){const b=s.hemi[w];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(y),w++}}}return{setup:d,setupView:f,state:s}}function bg(i){const e=new Gw(i),t=[],s=[];function a(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:c}}function Ww(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new bg(i),e.set(a,[d])):l>=c.length?(d=new bg(i),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class jw extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=by,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xw extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yw=`uniform sampler2D shadow_pass;
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
}`;function $w(i,e,t){let s=new vf;const a=new $e,l=new $e,c=new Mn,d=new jw({depthPacking:Ry}),f=new Xw,h={},m=t.maxTextureSize,g={[ar]:$n,[$n]:ar,[tr]:tr},v=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:qw,fragmentShader:Yw}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new Bn;M.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new si(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=c0;let _=this.type;this.render=function(P,I,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;const L=i.getRenderTarget(),R=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),J=i.state;J.setBlending(Fr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=_!==er&&this.type===er,ee=_===er&&this.type!==er;for(let de=0,K=P.length;de<K;de++){const pe=P[de],W=pe.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const re=W.getFrameExtents();if(a.multiply(re),l.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/re.x),a.x=l.x*re.x,W.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/re.y),a.y=l.y*re.y,W.mapSize.y=l.y)),W.map===null||Y===!0||ee===!0){const U=this.type!==er?{minFilter:Yn,magFilter:Yn}:{};W.map!==null&&W.map.dispose(),W.map=new ps(a.x,a.y,U),W.map.texture.name=pe.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ie=W.getViewportCount();for(let U=0;U<ie;U++){const X=W.getViewport(U);c.set(l.x*X.x,l.y*X.y,l.x*X.z,l.y*X.w),J.viewport(c),W.updateMatrices(pe,U),s=W.getFrustum(),b(I,F,W.camera,pe,this.type)}W.isPointLightShadow!==!0&&this.type===er&&N(W,F),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(L,R,k)};function N(P,I){const F=e.update(w);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ps(a.x,a.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,F,v,w,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,F,S,w,null)}function E(P,I,F,L){let R=null;const k=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)R=k;else if(R=F.isPointLight===!0?f:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const J=R.uuid,Y=I.uuid;let ee=h[J];ee===void 0&&(ee={},h[J]=ee);let de=ee[Y];de===void 0&&(de=R.clone(),ee[Y]=de,I.addEventListener("dispose",z)),R=de}if(R.visible=I.visible,R.wireframe=I.wireframe,L===er?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:g[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=i.properties.get(R);J.light=F}return R}function b(P,I,F,L,R){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===er)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const Y=e.update(P),ee=P.material;if(Array.isArray(ee)){const de=Y.groups;for(let K=0,pe=de.length;K<pe;K++){const W=de[K],re=ee[W.materialIndex];if(re&&re.visible){const ie=E(P,re,L,R);P.onBeforeShadow(i,P,I,F,Y,ie,W),i.renderBufferDirect(F,null,Y,ie,P,W),P.onAfterShadow(i,P,I,F,Y,ie,W)}}}else if(ee.visible){const de=E(P,ee,L,R);P.onBeforeShadow(i,P,I,F,Y,de,null),i.renderBufferDirect(F,null,Y,de,P,null),P.onAfterShadow(i,P,I,F,Y,de,null)}}const J=P.children;for(let Y=0,ee=J.length;Y<ee;Y++)b(J[Y],I,F,L,R)}function z(P){P.target.removeEventListener("dispose",z);for(const F in h){const L=h[F],R=P.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function Kw(i){function e(){let G=!1;const Ve=new Mn;let ve=null;const fe=new Mn(0,0,0,0);return{setMask:function(Oe){ve!==Oe&&!G&&(i.colorMask(Oe,Oe,Oe,Oe),ve=Oe)},setLocked:function(Oe){G=Oe},setClear:function(Oe,rt,vt,At,Et){Et===!0&&(Oe*=At,rt*=At,vt*=At),Ve.set(Oe,rt,vt,At),fe.equals(Ve)===!1&&(i.clearColor(Oe,rt,vt,At),fe.copy(Ve))},reset:function(){G=!1,ve=null,fe.set(-1,0,0,0)}}}function t(){let G=!1,Ve=null,ve=null,fe=null;return{setTest:function(Oe){Oe?le(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Oe){Ve!==Oe&&!G&&(i.depthMask(Oe),Ve=Oe)},setFunc:function(Oe){if(ve!==Oe){switch(Oe){case ny:i.depthFunc(i.NEVER);break;case iy:i.depthFunc(i.ALWAYS);break;case ry:i.depthFunc(i.LESS);break;case oc:i.depthFunc(i.LEQUAL);break;case sy:i.depthFunc(i.EQUAL);break;case ay:i.depthFunc(i.GEQUAL);break;case oy:i.depthFunc(i.GREATER);break;case ly:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Oe}},setLocked:function(Oe){G=Oe},setClear:function(Oe){fe!==Oe&&(i.clearDepth(Oe),fe=Oe)},reset:function(){G=!1,Ve=null,ve=null,fe=null}}}function s(){let G=!1,Ve=null,ve=null,fe=null,Oe=null,rt=null,vt=null,At=null,Et=null;return{setTest:function(gt){G||(gt?le(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(gt){Ve!==gt&&!G&&(i.stencilMask(gt),Ve=gt)},setFunc:function(gt,Rt,Ot){(ve!==gt||fe!==Rt||Oe!==Ot)&&(i.stencilFunc(gt,Rt,Ot),ve=gt,fe=Rt,Oe=Ot)},setOp:function(gt,Rt,Ot){(rt!==gt||vt!==Rt||At!==Ot)&&(i.stencilOp(gt,Rt,Ot),rt=gt,vt=Rt,At=Ot)},setLocked:function(gt){G=gt},setClear:function(gt){Et!==gt&&(i.clearStencil(gt),Et=gt)},reset:function(){G=!1,Ve=null,ve=null,fe=null,Oe=null,rt=null,vt=null,At=null,Et=null}}}const a=new e,l=new t,c=new s,d=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,v=[],S=null,M=!1,w=null,y=null,_=null,N=null,E=null,b=null,z=null,P=new Pt(0,0,0),I=0,F=!1,L=null,R=null,k=null,J=null,Y=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,K=0;const pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(pe)[1]),de=K>=1):pe.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),de=K>=2);let W=null,re={};const ie=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),X=new Mn().fromArray(ie),Le=new Mn().fromArray(U);function Z(G,Ve,ve,fe){const Oe=new Uint8Array(4),rt=i.createTexture();i.bindTexture(G,rt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<ve;vt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ve,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Ve+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return rt}const ne={};ne[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(i.DEPTH_TEST),l.setFunc(oc),Me(!1),Te(cm),le(i.CULL_FACE),Ee(Fr);function le(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function ye(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Ne(G,Ve){return m[G]!==Ve?(i.bindFramebuffer(G,Ve),m[G]=Ve,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ve),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ve),!0):!1}function He(G,Ve){let ve=v,fe=!1;if(G){ve=g.get(Ve),ve===void 0&&(ve=[],g.set(Ve,ve));const Oe=G.textures;if(ve.length!==Oe.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,vt=Oe.length;rt<vt;rt++)ve[rt]=i.COLOR_ATTACHMENT0+rt;ve.length=Oe.length,fe=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ve)}function Fe(G){return S!==G?(i.useProgram(G),S=G,!0):!1}const V={[us]:i.FUNC_ADD,[kx]:i.FUNC_SUBTRACT,[Bx]:i.FUNC_REVERSE_SUBTRACT};V[Hx]=i.MIN,V[Vx]=i.MAX;const Se={[Gx]:i.ZERO,[Wx]:i.ONE,[jx]:i.SRC_COLOR,[Kd]:i.SRC_ALPHA,[Zx]:i.SRC_ALPHA_SATURATE,[$x]:i.DST_COLOR,[qx]:i.DST_ALPHA,[Xx]:i.ONE_MINUS_SRC_COLOR,[Zd]:i.ONE_MINUS_SRC_ALPHA,[Kx]:i.ONE_MINUS_DST_COLOR,[Yx]:i.ONE_MINUS_DST_ALPHA,[Jx]:i.CONSTANT_COLOR,[Qx]:i.ONE_MINUS_CONSTANT_COLOR,[ey]:i.CONSTANT_ALPHA,[ty]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(G,Ve,ve,fe,Oe,rt,vt,At,Et,gt){if(G===Fr){M===!0&&(ye(i.BLEND),M=!1);return}if(M===!1&&(le(i.BLEND),M=!0),G!==zx){if(G!==w||gt!==F){if((y!==us||E!==us)&&(i.blendEquation(i.FUNC_ADD),y=us,E=us),gt)switch(G){case aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case um:i.blendFunc(i.ONE,i.ONE);break;case dm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case um:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}_=null,N=null,b=null,z=null,P.set(0,0,0),I=0,w=G,F=gt}return}Oe=Oe||Ve,rt=rt||ve,vt=vt||fe,(Ve!==y||Oe!==E)&&(i.blendEquationSeparate(V[Ve],V[Oe]),y=Ve,E=Oe),(ve!==_||fe!==N||rt!==b||vt!==z)&&(i.blendFuncSeparate(Se[ve],Se[fe],Se[rt],Se[vt]),_=ve,N=fe,b=rt,z=vt),(At.equals(P)===!1||Et!==I)&&(i.blendColor(At.r,At.g,At.b,Et),P.copy(At),I=Et),w=G,F=!1}function we(G,Ve){G.side===tr?ye(i.CULL_FACE):le(i.CULL_FACE);let ve=G.side===$n;Ve&&(ve=!ve),Me(ve),G.blending===aa&&G.transparent===!1?Ee(Fr):Ee(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const fe=G.stencilWrite;c.setTest(fe),fe&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ce(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(G){L!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),L=G)}function Te(G){G!==Ux?(le(i.CULL_FACE),G!==R&&(G===cm?i.cullFace(i.BACK):G===Ox?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),R=G}function Pe(G){G!==k&&(de&&i.lineWidth(G),k=G)}function Ce(G,Ve,ve){G?(le(i.POLYGON_OFFSET_FILL),(J!==Ve||Y!==ve)&&(i.polygonOffset(Ve,ve),J=Ve,Y=ve)):ye(i.POLYGON_OFFSET_FILL)}function Xe(G){G?le(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function O(G){G===void 0&&(G=i.TEXTURE0+ee-1),W!==G&&(i.activeTexture(G),W=G)}function A(G,Ve,ve){ve===void 0&&(W===null?ve=i.TEXTURE0+ee-1:ve=W);let fe=re[ve];fe===void 0&&(fe={type:void 0,texture:void 0},re[ve]=fe),(fe.type!==G||fe.texture!==Ve)&&(W!==ve&&(i.activeTexture(ve),W=ve),i.bindTexture(G,Ve||ne[G]),fe.type=G,fe.texture=Ve)}function se(){const G=re[W];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xe(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function T(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ze(G){X.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),X.copy(G))}function ze(G){Le.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Le.copy(G))}function dt(G,Ve){let ve=f.get(Ve);ve===void 0&&(ve=new WeakMap,f.set(Ve,ve));let fe=ve.get(G);fe===void 0&&(fe=i.getUniformBlockIndex(Ve,G.name),ve.set(G,fe))}function ut(G,Ve){const fe=f.get(Ve).get(G);d.get(Ve)!==fe&&(i.uniformBlockBinding(Ve,fe,G.__bindingPointIndex),d.set(Ve,fe))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,re={},m={},g=new WeakMap,v=[],S=null,M=!1,w=null,y=null,_=null,N=null,E=null,b=null,z=null,P=new Pt(0,0,0),I=0,F=!1,L=null,R=null,k=null,J=null,Y=null,X.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:le,disable:ye,bindFramebuffer:Ne,drawBuffers:He,useProgram:Fe,setBlending:Ee,setMaterial:we,setFlipSided:Me,setCullFace:Te,setLineWidth:Pe,setPolygonOffset:Ce,setScissorTest:Xe,activeTexture:O,bindTexture:A,unbindTexture:se,compressedTexImage2D:_e,compressedTexImage3D:ge,texImage2D:je,texImage3D:T,updateUBOMapping:dt,uniformBlockBinding:ut,texStorage2D:et,texStorage3D:Ae,texSubImage2D:xe,texSubImage3D:qe,compressedTexSubImage2D:Ie,compressedTexSubImage3D:De,scissor:Ze,viewport:ze,reset:ft}}function Zw(i,e,t,s,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $e,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,A){return S?new OffscreenCanvas(O,A):vo("canvas")}function w(O,A,se){let _e=1;const ge=Xe(O);if((ge.width>se||ge.height>se)&&(_e=se/Math.max(ge.width,ge.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const xe=Math.floor(_e*ge.width),qe=Math.floor(_e*ge.height);g===void 0&&(g=M(xe,qe));const Ie=A?M(xe,qe):g;return Ie.width=xe,Ie.height=qe,Ie.getContext("2d").drawImage(O,0,0,xe,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+xe+"x"+qe+")."),Ie}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function y(O){return O.generateMipmaps&&O.minFilter!==Yn&&O.minFilter!==pi}function _(O){i.generateMipmap(O)}function N(O,A,se,_e,ge=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let xe=A;if(A===i.RED&&(se===i.FLOAT&&(xe=i.R32F),se===i.HALF_FLOAT&&(xe=i.R16F),se===i.UNSIGNED_BYTE&&(xe=i.R8)),A===i.RED_INTEGER&&(se===i.UNSIGNED_BYTE&&(xe=i.R8UI),se===i.UNSIGNED_SHORT&&(xe=i.R16UI),se===i.UNSIGNED_INT&&(xe=i.R32UI),se===i.BYTE&&(xe=i.R8I),se===i.SHORT&&(xe=i.R16I),se===i.INT&&(xe=i.R32I)),A===i.RG&&(se===i.FLOAT&&(xe=i.RG32F),se===i.HALF_FLOAT&&(xe=i.RG16F),se===i.UNSIGNED_BYTE&&(xe=i.RG8)),A===i.RG_INTEGER&&(se===i.UNSIGNED_BYTE&&(xe=i.RG8UI),se===i.UNSIGNED_SHORT&&(xe=i.RG16UI),se===i.UNSIGNED_INT&&(xe=i.RG32UI),se===i.BYTE&&(xe=i.RG8I),se===i.SHORT&&(xe=i.RG16I),se===i.INT&&(xe=i.RG32I)),A===i.RGB&&se===i.UNSIGNED_INT_5_9_9_9_REV&&(xe=i.RGB9_E5),A===i.RGBA){const qe=ge?uc:Bt.getTransfer(_e);se===i.FLOAT&&(xe=i.RGBA32F),se===i.HALF_FLOAT&&(xe=i.RGBA16F),se===i.UNSIGNED_BYTE&&(xe=qe===qt?i.SRGB8_ALPHA8:i.RGBA8),se===i.UNSIGNED_SHORT_4_4_4_4&&(xe=i.RGBA4),se===i.UNSIGNED_SHORT_5_5_5_1&&(xe=i.RGB5_A1)}return(xe===i.R16F||xe===i.R32F||xe===i.RG16F||xe===i.RG32F||xe===i.RGBA16F||xe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function E(O,A){let se;return O?A===null||A===fa||A===ha?se=i.DEPTH24_STENCIL8:A===rr?se=i.DEPTH32F_STENCIL8:A===cc&&(se=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===fa||A===ha?se=i.DEPTH_COMPONENT24:A===rr?se=i.DEPTH_COMPONENT32F:A===cc&&(se=i.DEPTH_COMPONENT16),se}function b(O,A){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Yn&&O.minFilter!==pi?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function z(O){const A=O.target;A.removeEventListener("dispose",z),I(A),A.isVideoTexture&&m.delete(A)}function P(O){const A=O.target;A.removeEventListener("dispose",P),L(A)}function I(O){const A=s.get(O);if(A.__webglInit===void 0)return;const se=O.source,_e=v.get(se);if(_e){const ge=_e[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&F(O),Object.keys(_e).length===0&&v.delete(se)}s.remove(O)}function F(O){const A=s.get(O);i.deleteTexture(A.__webglTexture);const se=O.source,_e=v.get(se);delete _e[A.__cacheKey],c.memory.textures--}function L(O){const A=s.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(A.__webglFramebuffer[_e]))for(let ge=0;ge<A.__webglFramebuffer[_e].length;ge++)i.deleteFramebuffer(A.__webglFramebuffer[_e][ge]);else i.deleteFramebuffer(A.__webglFramebuffer[_e]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[_e])}else{if(Array.isArray(A.__webglFramebuffer))for(let _e=0;_e<A.__webglFramebuffer.length;_e++)i.deleteFramebuffer(A.__webglFramebuffer[_e]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _e=0;_e<A.__webglColorRenderbuffer.length;_e++)A.__webglColorRenderbuffer[_e]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[_e]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=O.textures;for(let _e=0,ge=se.length;_e<ge;_e++){const xe=s.get(se[_e]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),c.memory.textures--),s.remove(se[_e])}s.remove(O)}let R=0;function k(){R=0}function J(){const O=R;return O>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+a.maxTextures),R+=1,O}function Y(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function ee(O,A){const se=s.get(O);if(O.isVideoTexture&&Pe(O),O.isRenderTargetTexture===!1&&O.version>0&&se.__version!==O.version){const _e=O.image;if(_e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(se,O,A);return}}t.bindTexture(i.TEXTURE_2D,se.__webglTexture,i.TEXTURE0+A)}function de(O,A){const se=s.get(O);if(O.version>0&&se.__version!==O.version){Le(se,O,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,se.__webglTexture,i.TEXTURE0+A)}function K(O,A){const se=s.get(O);if(O.version>0&&se.__version!==O.version){Le(se,O,A);return}t.bindTexture(i.TEXTURE_3D,se.__webglTexture,i.TEXTURE0+A)}function pe(O,A){const se=s.get(O);if(O.version>0&&se.__version!==O.version){Z(se,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture,i.TEXTURE0+A)}const W={[lc]:i.REPEAT,[Ur]:i.CLAMP_TO_EDGE,[ef]:i.MIRRORED_REPEAT},re={[Yn]:i.NEAREST,[_y]:i.NEAREST_MIPMAP_NEAREST,[Al]:i.NEAREST_MIPMAP_LINEAR,[pi]:i.LINEAR,[dd]:i.LINEAR_MIPMAP_NEAREST,[Or]:i.LINEAR_MIPMAP_LINEAR},ie={[Ly]:i.NEVER,[Fy]:i.ALWAYS,[Ny]:i.LESS,[_0]:i.LEQUAL,[Dy]:i.EQUAL,[Oy]:i.GEQUAL,[Iy]:i.GREATER,[Uy]:i.NOTEQUAL};function U(O,A){if(A.type===rr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===pi||A.magFilter===dd||A.magFilter===Al||A.magFilter===Or||A.minFilter===pi||A.minFilter===dd||A.minFilter===Al||A.minFilter===Or)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,W[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,W[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,W[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,re[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ie[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Yn||A.minFilter!==Al&&A.minFilter!==Or||A.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function X(O,A){let se=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",z));const _e=A.source;let ge=v.get(_e);ge===void 0&&(ge={},v.set(_e,ge));const xe=Y(A);if(xe!==O.__cacheKey){ge[xe]===void 0&&(ge[xe]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,se=!0),ge[xe].usedTimes++;const qe=ge[O.__cacheKey];qe!==void 0&&(ge[O.__cacheKey].usedTimes--,qe.usedTimes===0&&F(A)),O.__cacheKey=xe,O.__webglTexture=ge[xe].texture}return se}function Le(O,A,se){let _e=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_e=i.TEXTURE_3D);const ge=X(O,A),xe=A.source;t.bindTexture(_e,O.__webglTexture,i.TEXTURE0+se);const qe=s.get(xe);if(xe.version!==qe.__version||ge===!0){t.activeTexture(i.TEXTURE0+se);const Ie=Bt.getPrimaries(Bt.workingColorSpace),De=A.colorSpace===Ir?null:Bt.getPrimaries(A.colorSpace),et=A.colorSpace===Ir||Ie===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ae=w(A.image,!1,a.maxTextureSize);Ae=Ce(A,Ae);const je=l.convert(A.format,A.colorSpace),T=l.convert(A.type);let Ze=N(A.internalFormat,je,T,A.colorSpace,A.isVideoTexture);U(_e,A);let ze;const dt=A.mipmaps,ut=A.isVideoTexture!==!0,ft=qe.__version===void 0||ge===!0,G=xe.dataReady,Ve=b(A,Ae);if(A.isDepthTexture)Ze=E(A.format===pa,A.type),ft&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Ze,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,Ze,Ae.width,Ae.height,0,je,T,null));else if(A.isDataTexture)if(dt.length>0){ut&&ft&&t.texStorage2D(i.TEXTURE_2D,Ve,Ze,dt[0].width,dt[0].height);for(let ve=0,fe=dt.length;ve<fe;ve++)ze=dt[ve],ut?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ze.width,ze.height,je,T,ze.data):t.texImage2D(i.TEXTURE_2D,ve,Ze,ze.width,ze.height,0,je,T,ze.data);A.generateMipmaps=!1}else ut?(ft&&t.texStorage2D(i.TEXTURE_2D,Ve,Ze,Ae.width,Ae.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,je,T,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,Ae.width,Ae.height,0,je,T,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ze,dt[0].width,dt[0].height,Ae.depth);for(let ve=0,fe=dt.length;ve<fe;ve++)if(ze=dt[ve],A.format!==Fi)if(je!==null)if(ut){if(G)if(A.layerUpdates.size>0){for(const Oe of A.layerUpdates){const rt=ze.width*ze.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Oe,ze.width,ze.height,1,je,ze.data.slice(rt*Oe,rt*(Oe+1)),0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,Ae.depth,je,ze.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Ze,ze.width,ze.height,Ae.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,ze.width,ze.height,Ae.depth,je,T,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Ze,ze.width,ze.height,Ae.depth,0,je,T,ze.data)}else{ut&&ft&&t.texStorage2D(i.TEXTURE_2D,Ve,Ze,dt[0].width,dt[0].height);for(let ve=0,fe=dt.length;ve<fe;ve++)ze=dt[ve],A.format!==Fi?je!==null?ut?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,ze.width,ze.height,je,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Ze,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,ze.width,ze.height,je,T,ze.data):t.texImage2D(i.TEXTURE_2D,ve,Ze,ze.width,ze.height,0,je,T,ze.data)}else if(A.isDataArrayTexture)if(ut){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ze,Ae.width,Ae.height,Ae.depth),G)if(A.layerUpdates.size>0){let ve;switch(T){case i.UNSIGNED_BYTE:switch(je){case i.ALPHA:ve=1;break;case i.LUMINANCE:ve=1;break;case i.LUMINANCE_ALPHA:ve=2;break;case i.RGB:ve=3;break;case i.RGBA:ve=4;break;default:throw new Error(`Unknown texel size for format ${je}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:ve=1;break;default:throw new Error(`Unknown texel size for type ${T}.`)}const fe=Ae.width*Ae.height*ve;for(const Oe of A.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Oe,Ae.width,Ae.height,1,je,T,Ae.data.slice(fe*Oe,fe*(Oe+1)));A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,T,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,Ae.width,Ae.height,Ae.depth,0,je,T,Ae.data);else if(A.isData3DTexture)ut?(ft&&t.texStorage3D(i.TEXTURE_3D,Ve,Ze,Ae.width,Ae.height,Ae.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,T,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,Ae.width,Ae.height,Ae.depth,0,je,T,Ae.data);else if(A.isFramebufferTexture){if(ft)if(ut)t.texStorage2D(i.TEXTURE_2D,Ve,Ze,Ae.width,Ae.height);else{let ve=Ae.width,fe=Ae.height;for(let Oe=0;Oe<Ve;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Ze,ve,fe,0,je,T,null),ve>>=1,fe>>=1}}else if(dt.length>0){if(ut&&ft){const ve=Xe(dt[0]);t.texStorage2D(i.TEXTURE_2D,Ve,Ze,ve.width,ve.height)}for(let ve=0,fe=dt.length;ve<fe;ve++)ze=dt[ve],ut?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,je,T,ze):t.texImage2D(i.TEXTURE_2D,ve,Ze,je,T,ze);A.generateMipmaps=!1}else if(ut){if(ft){const ve=Xe(Ae);t.texStorage2D(i.TEXTURE_2D,Ve,Ze,ve.width,ve.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,T,Ae)}else t.texImage2D(i.TEXTURE_2D,0,Ze,je,T,Ae);y(A)&&_(_e),qe.__version=xe.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Z(O,A,se){if(A.image.length!==6)return;const _e=X(O,A),ge=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+se);const xe=s.get(ge);if(ge.version!==xe.__version||_e===!0){t.activeTexture(i.TEXTURE0+se);const qe=Bt.getPrimaries(Bt.workingColorSpace),Ie=A.colorSpace===Ir?null:Bt.getPrimaries(A.colorSpace),De=A.colorSpace===Ir||qe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const et=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,je=[];for(let fe=0;fe<6;fe++)!et&&!Ae?je[fe]=w(A.image[fe],!0,a.maxCubemapSize):je[fe]=Ae?A.image[fe].image:A.image[fe],je[fe]=Ce(A,je[fe]);const T=je[0],Ze=l.convert(A.format,A.colorSpace),ze=l.convert(A.type),dt=N(A.internalFormat,Ze,ze,A.colorSpace),ut=A.isVideoTexture!==!0,ft=xe.__version===void 0||_e===!0,G=ge.dataReady;let Ve=b(A,T);U(i.TEXTURE_CUBE_MAP,A);let ve;if(et){ut&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,dt,T.width,T.height);for(let fe=0;fe<6;fe++){ve=je[fe].mipmaps;for(let Oe=0;Oe<ve.length;Oe++){const rt=ve[Oe];A.format!==Fi?Ze!==null?ut?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,0,0,rt.width,rt.height,Ze,rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,dt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,0,0,rt.width,rt.height,Ze,ze,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,dt,rt.width,rt.height,0,Ze,ze,rt.data)}}}else{if(ve=A.mipmaps,ut&&ft){ve.length>0&&Ve++;const fe=Xe(je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,dt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Ae){ut?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,je[fe].width,je[fe].height,Ze,ze,je[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,je[fe].width,je[fe].height,0,Ze,ze,je[fe].data);for(let Oe=0;Oe<ve.length;Oe++){const vt=ve[Oe].image[fe].image;ut?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,0,0,vt.width,vt.height,Ze,ze,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,dt,vt.width,vt.height,0,Ze,ze,vt.data)}}else{ut?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ze,ze,je[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,Ze,ze,je[fe]);for(let Oe=0;Oe<ve.length;Oe++){const rt=ve[Oe];ut?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,0,0,Ze,ze,rt.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,dt,Ze,ze,rt.image[fe])}}}y(A)&&_(i.TEXTURE_CUBE_MAP),xe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ne(O,A,se,_e,ge,xe){const qe=l.convert(se.format,se.colorSpace),Ie=l.convert(se.type),De=N(se.internalFormat,qe,Ie,se.colorSpace);if(!s.get(A).__hasExternalTextures){const Ae=Math.max(1,A.width>>xe),je=Math.max(1,A.height>>xe);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,xe,De,Ae,je,A.depth,0,qe,Ie,null):t.texImage2D(ge,xe,De,Ae,je,0,qe,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Te(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ge,s.get(se).__webglTexture,0,Me(A)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,ge,s.get(se).__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(O,A,se){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){const _e=A.depthTexture,ge=_e&&_e.isDepthTexture?_e.type:null,xe=E(A.stencilBuffer,ge),qe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=Me(A);Te(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,xe,A.width,A.height):se?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,xe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,xe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qe,i.RENDERBUFFER,O)}else{const _e=A.textures;for(let ge=0;ge<_e.length;ge++){const xe=_e[ge],qe=l.convert(xe.format,xe.colorSpace),Ie=l.convert(xe.type),De=N(xe.internalFormat,qe,Ie,xe.colorSpace),et=Me(A);se&&Te(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,De,A.width,A.height):Te(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,De,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,De,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ee(A.depthTexture,0);const _e=s.get(A.depthTexture).__webglTexture,ge=Me(A);if(A.depthTexture.format===oa)Te(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_e,0);else if(A.depthTexture.format===pa)Te(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(O){const A=s.get(O),se=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");ye(A.__webglFramebuffer,O)}else if(se){A.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[_e]),A.__webglDepthbuffer[_e]=i.createRenderbuffer(),le(A.__webglDepthbuffer[_e],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),le(A.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(O,A,se){const _e=s.get(O);A!==void 0&&ne(_e.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),se!==void 0&&Ne(O)}function Fe(O){const A=O.texture,se=s.get(O),_e=s.get(A);O.addEventListener("dispose",P);const ge=O.textures,xe=O.isWebGLCubeRenderTarget===!0,qe=ge.length>1;if(qe||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=A.version,c.memory.textures++),xe){se.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer[Ie]=[];for(let De=0;De<A.mipmaps.length;De++)se.__webglFramebuffer[Ie][De]=i.createFramebuffer()}else se.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)se.__webglFramebuffer[Ie]=i.createFramebuffer()}else se.__webglFramebuffer=i.createFramebuffer();if(qe)for(let Ie=0,De=ge.length;Ie<De;Ie++){const et=s.get(ge[Ie]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&Te(O)===!1){se.__webglMultisampledFramebuffer=i.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ge.length;Ie++){const De=ge[Ie];se.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,se.__webglColorRenderbuffer[Ie]);const et=l.convert(De.format,De.colorSpace),Ae=l.convert(De.type),je=N(De.internalFormat,et,Ae,De.colorSpace,O.isXRRenderTarget===!0),T=Me(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,je,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(se.__webglDepthRenderbuffer=i.createRenderbuffer(),le(se.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),U(i.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)ne(se.__webglFramebuffer[Ie][De],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,De);else ne(se.__webglFramebuffer[Ie],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);y(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Ie=0,De=ge.length;Ie<De;Ie++){const et=ge[Ie],Ae=s.get(et);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),U(i.TEXTURE_2D,et),ne(se.__webglFramebuffer,O,et,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),y(et)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,_e.__webglTexture),U(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let De=0;De<A.mipmaps.length;De++)ne(se.__webglFramebuffer[De],O,A,i.COLOR_ATTACHMENT0,Ie,De);else ne(se.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,Ie,0);y(A)&&_(Ie),t.unbindTexture()}O.depthBuffer&&Ne(O)}function V(O){const A=O.textures;for(let se=0,_e=A.length;se<_e;se++){const ge=A[se];if(y(ge)){const xe=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,qe=s.get(ge).__webglTexture;t.bindTexture(xe,qe),_(xe),t.unbindTexture()}}}const Se=[],Ee=[];function we(O){if(O.samples>0){if(Te(O)===!1){const A=O.textures,se=O.width,_e=O.height;let ge=i.COLOR_BUFFER_BIT;const xe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qe=s.get(O),Ie=A.length>1;if(Ie)for(let De=0;De<A.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let De=0;De<A.length;De++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qe.__webglColorRenderbuffer[De]);const et=s.get(A[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,se,_e,0,0,se,_e,ge,i.NEAREST),f===!0&&(Se.length=0,Ee.length=0,Se.push(i.COLOR_ATTACHMENT0+De),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Se.push(xe),Ee.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let De=0;De<A.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,qe.__webglColorRenderbuffer[De]);const et=s.get(A[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Me(O){return Math.min(a.maxSamples,O.samples)}function Te(O){const A=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(O){const A=c.render.frame;m.get(O)!==A&&(m.set(O,A),O.update())}function Ce(O,A){const se=O.colorSpace,_e=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||se!==Br&&se!==Ir&&(Bt.getTransfer(se)===qt?(_e!==Fi||ge!==kr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),A}function Xe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.setTexture2D=ee,this.setTexture2DArray=de,this.setTexture3D=K,this.setTextureCube=pe,this.rebindTextures=He,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Te}function Jw(i,e){function t(s,a=Ir){let l;const c=Bt.getTransfer(a);if(s===kr)return i.UNSIGNED_BYTE;if(s===f0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===h0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Sy)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===xy)return i.BYTE;if(s===yy)return i.SHORT;if(s===cc)return i.UNSIGNED_SHORT;if(s===d0)return i.INT;if(s===fa)return i.UNSIGNED_INT;if(s===rr)return i.FLOAT;if(s===yc)return i.HALF_FLOAT;if(s===My)return i.ALPHA;if(s===Ey)return i.RGB;if(s===Fi)return i.RGBA;if(s===wy)return i.LUMINANCE;if(s===Ty)return i.LUMINANCE_ALPHA;if(s===oa)return i.DEPTH_COMPONENT;if(s===pa)return i.DEPTH_STENCIL;if(s===p0)return i.RED;if(s===m0)return i.RED_INTEGER;if(s===Ay)return i.RG;if(s===g0)return i.RG_INTEGER;if(s===v0)return i.RGBA_INTEGER;if(s===fd||s===hd||s===pd||s===md)if(c===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===fd)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===md)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===fd)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hd)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===md)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hm||s===pm||s===mm||s===gm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===hm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vm||s===_m||s===xm)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===vm||s===_m)return c===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===xm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ym||s===Sm||s===Mm||s===Em||s===wm||s===Tm||s===Am||s===Cm||s===bm||s===Rm||s===Pm||s===Lm||s===Nm||s===Dm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ym)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Em)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Am)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Rm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gd||s===Im||s===Um)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===gd)return c===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Im)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Um)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cy||s===Om||s===Fm||s===zm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===gd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Om)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ha?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class Qw extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eT={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),_=this._getHandJoint(h,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&v>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(eT)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Yl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const tT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nT=`
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

}`;class iT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Dn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new or({vertexShader:tT,fragmentShader:nT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new Mc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class rT extends ga{constructor(e,t){super();const s=this;let a=null,l=1,c=null,d="local-floor",f=1,h=null,m=null,g=null,v=null,S=null,M=null;const w=new iT,y=t.getContextAttributes();let _=null,N=null;const E=[],b=[],z=new $e;let P=null;const I=new Ai;I.layers.enable(1),I.viewport=new Mn;const F=new Ai;F.layers.enable(2),F.viewport=new Mn;const L=[I,F],R=new Qw;R.layers.enable(1),R.layers.enable(2);let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=E[Z];return ne===void 0&&(ne=new Hd,E[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=E[Z];return ne===void 0&&(ne=new Hd,E[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=E[Z];return ne===void 0&&(ne=new Hd,E[Z]=ne),ne.getHandSpace()};function Y(Z){const ne=b.indexOf(Z.inputSource);if(ne===-1)return;const le=E[ne];le!==void 0&&(le.update(Z.inputSource,Z.frame,h||c),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ee(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",ee),a.removeEventListener("inputsourceschange",de);for(let Z=0;Z<E.length;Z++){const ne=b[Z];ne!==null&&(b[Z]=null,E[Z].disconnect(ne))}k=null,J=null,w.reset(),e.setRenderTarget(_),S=null,v=null,g=null,a=null,N=null,Le.stop(),s.isPresenting=!1,e.setPixelRatio(P),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",ee),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(z),a.renderState.layers===void 0){const ne={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ne),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new ps(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:kr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ne=null,le=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=y.stencil?pa:oa,le=y.stencil?ha:fa);const Ne={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(Ne),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new ps(v.textureWidth,v.textureHeight,{format:Fi,type:kr,depthTexture:new L0(v.textureWidth,v.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await a.requestReferenceSpace(d),Le.setContext(a),Le.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function de(Z){for(let ne=0;ne<Z.removed.length;ne++){const le=Z.removed[ne],ye=b.indexOf(le);ye>=0&&(b[ye]=null,E[ye].disconnect(le))}for(let ne=0;ne<Z.added.length;ne++){const le=Z.added[ne];let ye=b.indexOf(le);if(ye===-1){for(let He=0;He<E.length;He++)if(He>=b.length){b.push(le),ye=He;break}else if(b[He]===null){b[He]=le,ye=He;break}if(ye===-1)break}const Ne=E[ye];Ne&&Ne.connect(le)}}const K=new q,pe=new q;function W(Z,ne,le){K.setFromMatrixPosition(ne.matrixWorld),pe.setFromMatrixPosition(le.matrixWorld);const ye=K.distanceTo(pe),Ne=ne.projectionMatrix.elements,He=le.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),V=Ne[14]/(Ne[10]+1),Se=(Ne[9]+1)/Ne[5],Ee=(Ne[9]-1)/Ne[5],we=(Ne[8]-1)/Ne[0],Me=(He[8]+1)/He[0],Te=Fe*we,Pe=Fe*Me,Ce=ye/(-we+Me),Xe=Ce*-we;ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xe),Z.translateZ(Ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const O=Fe+Ce,A=V+Ce,se=Te-Xe,_e=Pe+(ye-Xe),ge=Se*V/A*O,xe=Ee*V/A*O;Z.projectionMatrix.makePerspective(se,_e,ge,xe,O,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function re(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;w.texture!==null&&(Z.near=w.depthNear,Z.far=w.depthFar),R.near=F.near=I.near=Z.near,R.far=F.far=I.far=Z.far,(k!==R.near||J!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,J=R.far,I.near=k,I.far=J,F.near=k,F.far=J,I.updateProjectionMatrix(),F.updateProjectionMatrix(),Z.updateProjectionMatrix());const ne=Z.parent,le=R.cameras;re(R,ne);for(let ye=0;ye<le.length;ye++)re(le[ye],ne);le.length===2?W(R,I,F):R.projectionMatrix.copy(I.projectionMatrix),ie(Z,R,ne)};function ie(Z,ne,le){le===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(Z){f=Z,v!==null&&(v.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let U=null;function X(Z,ne){if(m=ne.getViewerPose(h||c),M=ne,m!==null){const le=m.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ye=!1;le.length!==R.cameras.length&&(R.cameras.length=0,ye=!0);for(let He=0;He<le.length;He++){const Fe=le[He];let V=null;if(S!==null)V=S.getViewport(Fe);else{const Ee=g.getViewSubImage(v,Fe);V=Ee.viewport,He===0&&(e.setRenderTargetTextures(N,Ee.colorTexture,v.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(N))}let Se=L[He];Se===void 0&&(Se=new Ai,Se.layers.enable(He),Se.viewport=new Mn,L[He]=Se),Se.matrix.fromArray(Fe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Fe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(V.x,V.y,V.width,V.height),He===0&&(R.matrix.copy(Se.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ye===!0&&R.cameras.push(Se)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const He=g.getDepthInformation(le[0]);He&&He.isValid&&He.texture&&w.init(e,He,a.renderState)}}for(let le=0;le<E.length;le++){const ye=b[le],Ne=E[le];ye!==null&&Ne!==void 0&&Ne.update(ye,ne,h||c)}U&&U(Z,ne),ne.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ne}),M=null}const Le=new R0;Le.setAnimationLoop(X),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const os=new bi,sT=new Vt;function aT(i,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,A0(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,N,E,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),g(y,_)):_.isMeshPhongMaterial?(l(y,_),m(y,_)):_.isMeshStandardMaterial?(l(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,b)):_.isMeshMatcapMaterial?(l(y,_),M(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),w(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?f(y,_,N,E):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===$n&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===$n&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),E=N.envMap,b=N.envMapRotation;E&&(y.envMap.value=E,os.copy(b),os.x*=-1,os.y*=-1,os.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),y.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(os)),y.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function f(y,_,N,E){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=E*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function oT(i,e,t,s){let a={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,E){const b=E.program;s.uniformBlockBinding(N,b)}function h(N,E){let b=a[N.id];b===void 0&&(M(N),b=m(N),a[N.id]=b,N.addEventListener("dispose",y));const z=E.program;s.updateUBOMapping(N,z);const P=e.render.frame;l[N.id]!==P&&(v(N),l[N.id]=P)}function m(N){const E=g();N.__bindingPointIndex=E;const b=i.createBuffer(),z=N.__size,P=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,z,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function g(){for(let N=0;N<d;N++)if(c.indexOf(N)===-1)return c.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const E=a[N.id],b=N.uniforms,z=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let P=0,I=b.length;P<I;P++){const F=Array.isArray(b[P])?b[P]:[b[P]];for(let L=0,R=F.length;L<R;L++){const k=F[L];if(S(k,P,L,z)===!0){const J=k.__offset,Y=Array.isArray(k.value)?k.value:[k.value];let ee=0;for(let de=0;de<Y.length;de++){const K=Y[de],pe=w(K);typeof K=="number"||typeof K=="boolean"?(k.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,J+ee,k.__data)):K.isMatrix3?(k.__data[0]=K.elements[0],k.__data[1]=K.elements[1],k.__data[2]=K.elements[2],k.__data[3]=0,k.__data[4]=K.elements[3],k.__data[5]=K.elements[4],k.__data[6]=K.elements[5],k.__data[7]=0,k.__data[8]=K.elements[6],k.__data[9]=K.elements[7],k.__data[10]=K.elements[8],k.__data[11]=0):(K.toArray(k.__data,ee),ee+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(N,E,b,z){const P=N.value,I=E+"_"+b;if(z[I]===void 0)return typeof P=="number"||typeof P=="boolean"?z[I]=P:z[I]=P.clone(),!0;{const F=z[I];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return z[I]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function M(N){const E=N.uniforms;let b=0;const z=16;for(let I=0,F=E.length;I<F;I++){const L=Array.isArray(E[I])?E[I]:[E[I]];for(let R=0,k=L.length;R<k;R++){const J=L[R],Y=Array.isArray(J.value)?J.value:[J.value];for(let ee=0,de=Y.length;ee<de;ee++){const K=Y[ee],pe=w(K),W=b%z;W!==0&&z-W<pe.boundary&&(b+=z-W),J.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=pe.storage}}}const P=b%z;return P>0&&(b+=z-P),N.__size=b,N.__cache={},this}function w(N){const E={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(E.boundary=4,E.storage=4):N.isVector2?(E.boundary=8,E.storage=8):N.isVector3||N.isColor?(E.boundary=16,E.storage=12):N.isVector4?(E.boundary=16,E.storage=16):N.isMatrix3?(E.boundary=48,E.storage=48):N.isMatrix4?(E.boundary=64,E.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),E}function y(N){const E=N.target;E.removeEventListener("dispose",y);const b=c.indexOf(E.__bindingPointIndex);c.splice(b,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete l[E.id]}function _(){for(const N in a)i.deleteBuffer(a[N]);c=[],a={},l={}}return{bind:f,update:h,dispose:_}}class y2{constructor(e={}){const{canvas:t=eS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=c;const S=new Uint32Array(4),M=new Int32Array(4);let w=null,y=null;const _=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=zr,this.toneMappingExposure=1;const E=this;let b=!1,z=0,P=0,I=null,F=-1,L=null;const R=new Mn,k=new Mn;let J=null;const Y=new Pt(0);let ee=0,de=t.width,K=t.height,pe=1,W=null,re=null;const ie=new Mn(0,0,de,K),U=new Mn(0,0,de,K);let X=!1;const Le=new vf;let Z=!1,ne=!1;const le=new Vt,ye=new q,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Fe(){return I===null?pe:1}let V=s;function Se(D,Q){return t.getContext(D,Q)}try{const D={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uf}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",fe,!1),V===null){const Q="webgl2";if(V=Se(Q,D),V===null)throw Se(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ee,we,Me,Te,Pe,Ce,Xe,O,A,se,_e,ge,xe,qe,Ie,De,et,Ae,je,T,Ze,ze,dt,ut;function ft(){Ee=new gE(V),Ee.init(),ze=new Jw(V,Ee),we=new uE(V,Ee,e,ze),Me=new Kw(V),Te=new xE(V),Pe=new Ow,Ce=new Zw(V,Ee,Me,Pe,we,ze,Te),Xe=new fE(E),O=new mE(E),A=new AS(V),dt=new lE(V,A),se=new vE(V,A,Te,dt),_e=new SE(V,se,A,Te),je=new yE(V,we,Ce),De=new dE(Pe),ge=new Uw(E,Xe,O,Ee,we,dt,De),xe=new aT(E,Pe),qe=new zw,Ie=new Ww(Ee),Ae=new oE(E,Xe,O,Me,_e,v,f),et=new $w(E,_e,we),ut=new oT(V,Te,we,Me),T=new cE(V,Ee,Te),Ze=new _E(V,Ee,Te),Te.programs=ge.programs,E.capabilities=we,E.extensions=Ee,E.properties=Pe,E.renderLists=qe,E.shadowMap=et,E.state=Me,E.info=Te}ft();const G=new rT(E,V);this.xr=G,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=Ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(D){D!==void 0&&(pe=D,this.setSize(de,K,!1))},this.getSize=function(D){return D.set(de,K)},this.setSize=function(D,Q,ce=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=D,K=Q,t.width=Math.floor(D*pe),t.height=Math.floor(Q*pe),ce===!0&&(t.style.width=D+"px",t.style.height=Q+"px"),this.setViewport(0,0,D,Q)},this.getDrawingBufferSize=function(D){return D.set(de*pe,K*pe).floor()},this.setDrawingBufferSize=function(D,Q,ce){de=D,K=Q,pe=ce,t.width=Math.floor(D*ce),t.height=Math.floor(Q*ce),this.setViewport(0,0,D,Q)},this.getCurrentViewport=function(D){return D.copy(R)},this.getViewport=function(D){return D.copy(ie)},this.setViewport=function(D,Q,ce,oe){D.isVector4?ie.set(D.x,D.y,D.z,D.w):ie.set(D,Q,ce,oe),Me.viewport(R.copy(ie).multiplyScalar(pe).round())},this.getScissor=function(D){return D.copy(U)},this.setScissor=function(D,Q,ce,oe){D.isVector4?U.set(D.x,D.y,D.z,D.w):U.set(D,Q,ce,oe),Me.scissor(k.copy(U).multiplyScalar(pe).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(D){Me.setScissorTest(X=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){re=D},this.getClearColor=function(D){return D.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(D=!0,Q=!0,ce=!0){let oe=0;if(D){let te=!1;if(I!==null){const Re=I.texture.format;te=Re===v0||Re===g0||Re===m0}if(te){const Re=I.texture.type,Ye=Re===kr||Re===fa||Re===cc||Re===ha||Re===f0||Re===h0,tt=Ae.getClearColor(),st=Ae.getClearAlpha(),Je=tt.r,ht=tt.g,lt=tt.b;Ye?(S[0]=Je,S[1]=ht,S[2]=lt,S[3]=st,V.clearBufferuiv(V.COLOR,0,S)):(M[0]=Je,M[1]=ht,M[2]=lt,M[3]=st,V.clearBufferiv(V.COLOR,0,M))}else oe|=V.COLOR_BUFFER_BIT}Q&&(oe|=V.DEPTH_BUFFER_BIT),ce&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),qe.dispose(),Ie.dispose(),Pe.dispose(),Xe.dispose(),O.dispose(),_e.dispose(),dt.dispose(),ut.dispose(),ge.dispose(),G.dispose(),G.removeEventListener("sessionstart",Rt),G.removeEventListener("sessionend",Ot),Ft.stop()};function Ve(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const D=Te.autoReset,Q=et.enabled,ce=et.autoUpdate,oe=et.needsUpdate,te=et.type;ft(),Te.autoReset=D,et.enabled=Q,et.autoUpdate=ce,et.needsUpdate=oe,et.type=te}function fe(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Oe(D){const Q=D.target;Q.removeEventListener("dispose",Oe),rt(Q)}function rt(D){vt(D),Pe.remove(D)}function vt(D){const Q=Pe.get(D).programs;Q!==void 0&&(Q.forEach(function(ce){ge.releaseProgram(ce)}),D.isShaderMaterial&&ge.releaseShaderCache(D))}this.renderBufferDirect=function(D,Q,ce,oe,te,Re){Q===null&&(Q=Ne);const Ye=te.isMesh&&te.matrixWorld.determinant()<0,tt=_t(D,Q,ce,oe,te);Me.setMaterial(oe,Ye);let st=ce.index,Je=1;if(oe.wireframe===!0){if(st=se.getWireframeAttribute(ce),st===void 0)return;Je=2}const ht=ce.drawRange,lt=ce.attributes.position;let Ct=ht.start*Je,It=(ht.start+ht.count)*Je;Re!==null&&(Ct=Math.max(Ct,Re.start*Je),It=Math.min(It,(Re.start+Re.count)*Je)),st!==null?(Ct=Math.max(Ct,0),It=Math.min(It,st.count)):lt!=null&&(Ct=Math.max(Ct,0),It=Math.min(It,lt.count));const Ht=It-Ct;if(Ht<0||Ht===1/0)return;dt.setup(te,oe,tt,ce,st);let $t,St=T;if(st!==null&&($t=A.get(st),St=Ze,St.setIndex($t)),te.isMesh)oe.wireframe===!0?(Me.setLineWidth(oe.wireframeLinewidth*Fe()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(te.isLine){let nt=oe.linewidth;nt===void 0&&(nt=1),Me.setLineWidth(nt*Fe()),te.isLineSegments?St.setMode(V.LINES):te.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else te.isPoints?St.setMode(V.POINTS):te.isSprite&&St.setMode(V.TRIANGLES);if(te.isBatchedMesh)te._multiDrawInstances!==null?St.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances):St.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)St.renderInstances(Ct,Ht,te.count);else if(ce.isInstancedBufferGeometry){const nt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,rn=Math.min(ce.instanceCount,nt);St.renderInstances(Ct,Ht,rn)}else St.render(Ct,Ht)};function At(D,Q,ce){D.transparent===!0&&D.side===tr&&D.forceSinglePass===!1?(D.side=$n,D.needsUpdate=!0,ln(D,Q,ce),D.side=ar,D.needsUpdate=!0,ln(D,Q,ce),D.side=tr):ln(D,Q,ce)}this.compile=function(D,Q,ce=null){ce===null&&(ce=D),y=Ie.get(ce),y.init(Q),N.push(y),ce.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),D!==ce&&D.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),y.setupLights();const oe=new Set;return D.traverse(function(te){const Re=te.material;if(Re)if(Array.isArray(Re))for(let Ye=0;Ye<Re.length;Ye++){const tt=Re[Ye];At(tt,ce,te),oe.add(tt)}else At(Re,ce,te),oe.add(Re)}),N.pop(),y=null,oe},this.compileAsync=function(D,Q,ce=null){const oe=this.compile(D,Q,ce);return new Promise(te=>{function Re(){if(oe.forEach(function(Ye){Pe.get(Ye).currentProgram.isReady()&&oe.delete(Ye)}),oe.size===0){te(D);return}setTimeout(Re,10)}Ee.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Et=null;function gt(D){Et&&Et(D)}function Rt(){Ft.stop()}function Ot(){Ft.start()}const Ft=new R0;Ft.setAnimationLoop(gt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(D){Et=D,G.setAnimationLoop(D),D===null?Ft.stop():Ft.start()},G.addEventListener("sessionstart",Rt),G.addEventListener("sessionend",Ot),this.render=function(D,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(Q),Q=G.getCamera()),D.isScene===!0&&D.onBeforeRender(E,D,Q,I),y=Ie.get(D,N.length),y.init(Q),N.push(y),le.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Le.setFromProjectionMatrix(le),ne=this.localClippingEnabled,Z=De.init(this.clippingPlanes,ne),w=qe.get(D,_.length),w.init(),_.push(w),G.enabled===!0&&G.isPresenting===!0){const Re=E.xr.getDepthSensingMesh();Re!==null&&Ge(Re,Q,-1/0,E.sortObjects)}Ge(D,Q,0,E.sortObjects),w.finish(),E.sortObjects===!0&&w.sort(W,re),He=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,He&&Ae.addToRenderList(w,D),this.info.render.frame++,Z===!0&&De.beginShadows();const ce=y.state.shadowsArray;et.render(ce,D,Q),Z===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=w.opaque,te=w.transmissive;if(y.setupLights(),Q.isArrayCamera){const Re=Q.cameras;if(te.length>0)for(let Ye=0,tt=Re.length;Ye<tt;Ye++){const st=Re[Ye];an(oe,te,D,st)}He&&Ae.render(D);for(let Ye=0,tt=Re.length;Ye<tt;Ye++){const st=Re[Ye];Wt(w,D,st,st.viewport)}}else te.length>0&&an(oe,te,D,Q),He&&Ae.render(D),Wt(w,D,Q);I!==null&&(Ce.updateMultisampleRenderTarget(I),Ce.updateRenderTargetMipmap(I)),D.isScene===!0&&D.onAfterRender(E,D,Q),dt.resetDefaultState(),F=-1,L=null,N.pop(),N.length>0?(y=N[N.length-1],Z===!0&&De.setGlobalState(E.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?w=_[_.length-1]:w=null};function Ge(D,Q,ce,oe){if(D.visible===!1)return;if(D.layers.test(Q.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Q);else if(D.isLight)y.pushLight(D),D.castShadow&&y.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Le.intersectsSprite(D)){oe&&ye.setFromMatrixPosition(D.matrixWorld).applyMatrix4(le);const Ye=_e.update(D),tt=D.material;tt.visible&&w.push(D,Ye,tt,ce,ye.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Le.intersectsObject(D))){const Ye=_e.update(D),tt=D.material;if(oe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ye.copy(D.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),ye.copy(Ye.boundingSphere.center)),ye.applyMatrix4(D.matrixWorld).applyMatrix4(le)),Array.isArray(tt)){const st=Ye.groups;for(let Je=0,ht=st.length;Je<ht;Je++){const lt=st[Je],Ct=tt[lt.materialIndex];Ct&&Ct.visible&&w.push(D,Ye,Ct,ce,ye.z,lt)}}else tt.visible&&w.push(D,Ye,tt,ce,ye.z,null)}}const Re=D.children;for(let Ye=0,tt=Re.length;Ye<tt;Ye++)Ge(Re[Ye],Q,ce,oe)}function Wt(D,Q,ce,oe){const te=D.opaque,Re=D.transmissive,Ye=D.transparent;y.setupLightsView(ce),Z===!0&&De.setGlobalState(E.clippingPlanes,ce),oe&&Me.viewport(R.copy(oe)),te.length>0&&on(te,Q,ce),Re.length>0&&on(Re,Q,ce),Ye.length>0&&on(Ye,Q,ce),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function an(D,Q,ce,oe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[oe.id]===void 0&&(y.state.transmissionRenderTarget[oe.id]=new ps(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?yc:kr,minFilter:Or,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Re=y.state.transmissionRenderTarget[oe.id],Ye=oe.viewport||R;Re.setSize(Ye.z,Ye.w);const tt=E.getRenderTarget();E.setRenderTarget(Re),E.getClearColor(Y),ee=E.getClearAlpha(),ee<1&&E.setClearColor(16777215,.5),He?Ae.render(ce):E.clear();const st=E.toneMapping;E.toneMapping=zr;const Je=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),y.setupLightsView(oe),Z===!0&&De.setGlobalState(E.clippingPlanes,oe),on(D,ce,oe),Ce.updateMultisampleRenderTarget(Re),Ce.updateRenderTargetMipmap(Re),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let lt=0,Ct=Q.length;lt<Ct;lt++){const It=Q[lt],Ht=It.object,$t=It.geometry,St=It.material,nt=It.group;if(St.side===tr&&Ht.layers.test(oe.layers)){const rn=St.side;St.side=$n,St.needsUpdate=!0,Mt(Ht,ce,oe,$t,St,nt),St.side=rn,St.needsUpdate=!0,ht=!0}}ht===!0&&(Ce.updateMultisampleRenderTarget(Re),Ce.updateRenderTargetMipmap(Re))}E.setRenderTarget(tt),E.setClearColor(Y,ee),Je!==void 0&&(oe.viewport=Je),E.toneMapping=st}function on(D,Q,ce){const oe=Q.isScene===!0?Q.overrideMaterial:null;for(let te=0,Re=D.length;te<Re;te++){const Ye=D[te],tt=Ye.object,st=Ye.geometry,Je=oe===null?Ye.material:oe,ht=Ye.group;tt.layers.test(ce.layers)&&Mt(tt,Q,ce,st,Je,ht)}}function Mt(D,Q,ce,oe,te,Re){D.onBeforeRender(E,Q,ce,oe,te,Re),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),te.onBeforeRender(E,Q,ce,oe,D,Re),te.transparent===!0&&te.side===tr&&te.forceSinglePass===!1?(te.side=$n,te.needsUpdate=!0,E.renderBufferDirect(ce,Q,oe,te,D,Re),te.side=ar,te.needsUpdate=!0,E.renderBufferDirect(ce,Q,oe,te,D,Re),te.side=tr):E.renderBufferDirect(ce,Q,oe,te,D,Re),D.onAfterRender(E,Q,ce,oe,te,Re)}function ln(D,Q,ce){Q.isScene!==!0&&(Q=Ne);const oe=Pe.get(D),te=y.state.lights,Re=y.state.shadowsArray,Ye=te.state.version,tt=ge.getParameters(D,te.state,Re,Q,ce),st=ge.getProgramCacheKey(tt);let Je=oe.programs;oe.environment=D.isMeshStandardMaterial?Q.environment:null,oe.fog=Q.fog,oe.envMap=(D.isMeshStandardMaterial?O:Xe).get(D.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&D.envMap===null?Q.environmentRotation:D.envMapRotation,Je===void 0&&(D.addEventListener("dispose",Oe),Je=new Map,oe.programs=Je);let ht=Je.get(st);if(ht!==void 0){if(oe.currentProgram===ht&&oe.lightsStateVersion===Ye)return be(D,tt),ht}else tt.uniforms=ge.getUniforms(D),D.onBuild(ce,tt,E),D.onBeforeCompile(tt,E),ht=ge.acquireProgram(tt,st),Je.set(st,ht),oe.uniforms=tt.uniforms;const lt=oe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(lt.clippingPlanes=De.uniform),be(D,tt),oe.needsLights=Lt(D),oe.lightsStateVersion=Ye,oe.needsLights&&(lt.ambientLightColor.value=te.state.ambient,lt.lightProbe.value=te.state.probe,lt.directionalLights.value=te.state.directional,lt.directionalLightShadows.value=te.state.directionalShadow,lt.spotLights.value=te.state.spot,lt.spotLightShadows.value=te.state.spotShadow,lt.rectAreaLights.value=te.state.rectArea,lt.ltc_1.value=te.state.rectAreaLTC1,lt.ltc_2.value=te.state.rectAreaLTC2,lt.pointLights.value=te.state.point,lt.pointLightShadows.value=te.state.pointShadow,lt.hemisphereLights.value=te.state.hemi,lt.directionalShadowMap.value=te.state.directionalShadowMap,lt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,lt.spotShadowMap.value=te.state.spotShadowMap,lt.spotLightMatrix.value=te.state.spotLightMatrix,lt.spotLightMap.value=te.state.spotLightMap,lt.pointShadowMap.value=te.state.pointShadowMap,lt.pointShadowMatrix.value=te.state.pointShadowMatrix),oe.currentProgram=ht,oe.uniformsList=null,ht}function An(D){if(D.uniformsList===null){const Q=D.currentProgram.getUniforms();D.uniformsList=sc.seqWithValue(Q.seq,D.uniforms)}return D.uniformsList}function be(D,Q){const ce=Pe.get(D);ce.outputColorSpace=Q.outputColorSpace,ce.batching=Q.batching,ce.batchingColor=Q.batchingColor,ce.instancing=Q.instancing,ce.instancingColor=Q.instancingColor,ce.instancingMorph=Q.instancingMorph,ce.skinning=Q.skinning,ce.morphTargets=Q.morphTargets,ce.morphNormals=Q.morphNormals,ce.morphColors=Q.morphColors,ce.morphTargetsCount=Q.morphTargetsCount,ce.numClippingPlanes=Q.numClippingPlanes,ce.numIntersection=Q.numClipIntersection,ce.vertexAlphas=Q.vertexAlphas,ce.vertexTangents=Q.vertexTangents,ce.toneMapping=Q.toneMapping}function _t(D,Q,ce,oe,te){Q.isScene!==!0&&(Q=Ne),Ce.resetTextureUnits();const Re=Q.fog,Ye=oe.isMeshStandardMaterial?Q.environment:null,tt=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Br,st=(oe.isMeshStandardMaterial?O:Xe).get(oe.envMap||Ye),Je=oe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),lt=!!ce.morphAttributes.position,Ct=!!ce.morphAttributes.normal,It=!!ce.morphAttributes.color;let Ht=zr;oe.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ht=E.toneMapping);const $t=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,St=$t!==void 0?$t.length:0,nt=Pe.get(oe),rn=y.state.lights;if(Z===!0&&(ne===!0||D!==L)){const vn=D===L&&oe.id===F;De.setState(oe,D,vn)}let yt=!1;oe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==rn.state.version||nt.outputColorSpace!==tt||te.isBatchedMesh&&nt.batching===!1||!te.isBatchedMesh&&nt.batching===!0||te.isBatchedMesh&&nt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&nt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&nt.instancing===!1||!te.isInstancedMesh&&nt.instancing===!0||te.isSkinnedMesh&&nt.skinning===!1||!te.isSkinnedMesh&&nt.skinning===!0||te.isInstancedMesh&&nt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&nt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&nt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&nt.instancingMorph===!1&&te.morphTexture!==null||nt.envMap!==st||oe.fog===!0&&nt.fog!==Re||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==De.numPlanes||nt.numIntersection!==De.numIntersection)||nt.vertexAlphas!==Je||nt.vertexTangents!==ht||nt.morphTargets!==lt||nt.morphNormals!==Ct||nt.morphColors!==It||nt.toneMapping!==Ht||nt.morphTargetsCount!==St)&&(yt=!0):(yt=!0,nt.__version=oe.version);let Un=nt.currentProgram;yt===!0&&(Un=ln(oe,Q,te));let Kn=!1,Zn=!1,ai=!1;const zt=Un.getUniforms(),dn=nt.uniforms;if(Me.useProgram(Un.program)&&(Kn=!0,Zn=!0,ai=!0),oe.id!==F&&(F=oe.id,Zn=!0),Kn||L!==D){zt.setValue(V,"projectionMatrix",D.projectionMatrix),zt.setValue(V,"viewMatrix",D.matrixWorldInverse);const vn=zt.map.cameraPosition;vn!==void 0&&vn.setValue(V,ye.setFromMatrixPosition(D.matrixWorld)),we.logarithmicDepthBuffer&&zt.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),L!==D&&(L=D,Zn=!0,ai=!0)}if(te.isSkinnedMesh){zt.setOptional(V,te,"bindMatrix"),zt.setOptional(V,te,"bindMatrixInverse");const vn=te.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),zt.setValue(V,"boneTexture",vn.boneTexture,Ce))}te.isBatchedMesh&&(zt.setOptional(V,te,"batchingTexture"),zt.setValue(V,"batchingTexture",te._matricesTexture,Ce),zt.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&zt.setValue(V,"batchingColorTexture",te._colorsTexture,Ce));const Hn=ce.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&je.update(te,ce,Un),(Zn||nt.receiveShadow!==te.receiveShadow)&&(nt.receiveShadow=te.receiveShadow,zt.setValue(V,"receiveShadow",te.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(dn.envMap.value=st,dn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Q.environment!==null&&(dn.envMapIntensity.value=Q.environmentIntensity),Zn&&(zt.setValue(V,"toneMappingExposure",E.toneMappingExposure),nt.needsLights&&Yt(dn,ai),Re&&oe.fog===!0&&xe.refreshFogUniforms(dn,Re),xe.refreshMaterialUniforms(dn,oe,pe,K,y.state.transmissionRenderTarget[D.id]),sc.upload(V,An(nt),dn,Ce)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(sc.upload(V,An(nt),dn,Ce),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(V,"center",te.center),zt.setValue(V,"modelViewMatrix",te.modelViewMatrix),zt.setValue(V,"normalMatrix",te.normalMatrix),zt.setValue(V,"modelMatrix",te.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const vn=oe.uniformsGroups;for(let Bi=0,Hr=vn.length;Bi<Hr;Bi++){const Vr=vn[Bi];ut.update(Vr,Un),ut.bind(Vr,Un)}}return Un}function Yt(D,Q){D.ambientLightColor.needsUpdate=Q,D.lightProbe.needsUpdate=Q,D.directionalLights.needsUpdate=Q,D.directionalLightShadows.needsUpdate=Q,D.pointLights.needsUpdate=Q,D.pointLightShadows.needsUpdate=Q,D.spotLights.needsUpdate=Q,D.spotLightShadows.needsUpdate=Q,D.rectAreaLights.needsUpdate=Q,D.hemisphereLights.needsUpdate=Q}function Lt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(D,Q,ce){Pe.get(D.texture).__webglTexture=Q,Pe.get(D.depthTexture).__webglTexture=ce;const oe=Pe.get(D);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ce===void 0,oe.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,Q){const ce=Pe.get(D);ce.__webglFramebuffer=Q,ce.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(D,Q=0,ce=0){I=D,z=Q,P=ce;let oe=!0,te=null,Re=!1,Ye=!1;if(D){const st=Pe.get(D);st.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(V.FRAMEBUFFER,null),oe=!1):st.__webglFramebuffer===void 0?Ce.setupRenderTarget(D):st.__hasExternalTextures&&Ce.rebindTextures(D,Pe.get(D.texture).__webglTexture,Pe.get(D.depthTexture).__webglTexture);const Je=D.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ye=!0);const ht=Pe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ht[Q])?te=ht[Q][ce]:te=ht[Q],Re=!0):D.samples>0&&Ce.useMultisampledRTT(D)===!1?te=Pe.get(D).__webglMultisampledFramebuffer:Array.isArray(ht)?te=ht[ce]:te=ht,R.copy(D.viewport),k.copy(D.scissor),J=D.scissorTest}else R.copy(ie).multiplyScalar(pe).floor(),k.copy(U).multiplyScalar(pe).floor(),J=X;if(Me.bindFramebuffer(V.FRAMEBUFFER,te)&&oe&&Me.drawBuffers(D,te),Me.viewport(R),Me.scissor(k),Me.setScissorTest(J),Re){const st=Pe.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st.__webglTexture,ce)}else if(Ye){const st=Pe.get(D.texture),Je=Q||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.__webglTexture,ce||0,Je)}F=-1},this.readRenderTargetPixels=function(D,Q,ce,oe,te,Re,Ye){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Me.bindFramebuffer(V.FRAMEBUFFER,tt);try{const st=D.texture,Je=st.format,ht=st.type;if(!we.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=D.width-oe&&ce>=0&&ce<=D.height-te&&V.readPixels(Q,ce,oe,te,ze.convert(Je),ze.convert(ht),Re)}finally{const st=I!==null?Pe.get(I).__webglFramebuffer:null;Me.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(D,Q,ce,oe,te,Re,Ye){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Me.bindFramebuffer(V.FRAMEBUFFER,tt);try{const st=D.texture,Je=st.format,ht=st.type;if(!we.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=D.width-oe&&ce>=0&&ce<=D.height-te){const lt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(Q,ce,oe,te,ze.convert(Je),ze.convert(ht),0),V.flush();const Ct=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await tS(V,Ct,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re)}finally{V.deleteBuffer(lt),V.deleteSync(Ct)}return Re}}finally{const st=I!==null?Pe.get(I).__webglFramebuffer:null;Me.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(D,Q=null,ce=0){D.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,D=arguments[1]);const oe=Math.pow(2,-ce),te=Math.floor(D.image.width*oe),Re=Math.floor(D.image.height*oe),Ye=Q!==null?Q.x:0,tt=Q!==null?Q.y:0;Ce.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,Ye,tt,te,Re),Me.unbindTexture()},this.copyTextureToTexture=function(D,Q,ce=null,oe=null,te=0){D.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,D=arguments[1],Q=arguments[2],te=arguments[3]||0,ce=null);let Re,Ye,tt,st,Je,ht;ce!==null?(Re=ce.max.x-ce.min.x,Ye=ce.max.y-ce.min.y,tt=ce.min.x,st=ce.min.y):(Re=D.image.width,Ye=D.image.height,tt=0,st=0),oe!==null?(Je=oe.x,ht=oe.y):(Je=0,ht=0);const lt=ze.convert(Q.format),Ct=ze.convert(Q.type);Ce.setTexture2D(Q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);const It=V.getParameter(V.UNPACK_ROW_LENGTH),Ht=V.getParameter(V.UNPACK_IMAGE_HEIGHT),$t=V.getParameter(V.UNPACK_SKIP_PIXELS),St=V.getParameter(V.UNPACK_SKIP_ROWS),nt=V.getParameter(V.UNPACK_SKIP_IMAGES),rn=D.isCompressedTexture?D.mipmaps[te]:D.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,rn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,rn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,st),D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,te,Je,ht,Re,Ye,lt,Ct,rn.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,te,Je,ht,rn.width,rn.height,lt,rn.data):V.texSubImage2D(V.TEXTURE_2D,te,Je,ht,lt,Ct,rn),V.pixelStorei(V.UNPACK_ROW_LENGTH,It),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht),V.pixelStorei(V.UNPACK_SKIP_PIXELS,$t),V.pixelStorei(V.UNPACK_SKIP_ROWS,St),V.pixelStorei(V.UNPACK_SKIP_IMAGES,nt),te===0&&Q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(D,Q,ce=null,oe=null,te=0){D.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,oe=arguments[1]||null,D=arguments[2],Q=arguments[3],te=arguments[4]||0);let Re,Ye,tt,st,Je,ht,lt,Ct,It;const Ht=D.isCompressedTexture?D.mipmaps[te]:D.image;ce!==null?(Re=ce.max.x-ce.min.x,Ye=ce.max.y-ce.min.y,tt=ce.max.z-ce.min.z,st=ce.min.x,Je=ce.min.y,ht=ce.min.z):(Re=Ht.width,Ye=Ht.height,tt=Ht.depth,st=0,Je=0,ht=0),oe!==null?(lt=oe.x,Ct=oe.y,It=oe.z):(lt=0,Ct=0,It=0);const $t=ze.convert(Q.format),St=ze.convert(Q.type);let nt;if(Q.isData3DTexture)Ce.setTexture3D(Q,0),nt=V.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)Ce.setTexture2DArray(Q,0),nt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);const rn=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),Kn=V.getParameter(V.UNPACK_SKIP_ROWS),Zn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ht.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ht.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,st),V.pixelStorei(V.UNPACK_SKIP_ROWS,Je),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ht),D.isDataTexture||D.isData3DTexture?V.texSubImage3D(nt,te,lt,Ct,It,Re,Ye,tt,$t,St,Ht.data):Q.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,te,lt,Ct,It,Re,Ye,tt,$t,Ht.data):V.texSubImage3D(nt,te,lt,Ct,It,Re,Ye,tt,$t,St,Ht),V.pixelStorei(V.UNPACK_ROW_LENGTH,rn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zn),te===0&&Q.generateMipmaps&&V.generateMipmap(nt),Me.unbindTexture()},this.initRenderTarget=function(D){Pe.get(D).__webglFramebuffer===void 0&&Ce.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Ce.setTextureCube(D,0):D.isData3DTexture?Ce.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ce.setTexture2DArray(D,0):Ce.setTexture2D(D,0),Me.unbindTexture()},this.resetState=function(){z=0,P=0,I=null,Me.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ff?"display-p3":"srgb",t.unpackColorSpace=Bt.workingColorSpace===Sc?"display-p3":"srgb"}}class S2 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new q;class F0{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Ci(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=kt(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new F0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cT extends Dn{constructor(e=null,t=1,s=1,a,l,c,d,f,h=Yn,m=Yn,g,v){super(null,c,d,f,h,m,a,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rg extends mi{constructor(e,t,s,a=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ia=new Vt,Pg=new Vt,$l=[],Lg=new gs,uT=new Vt,ro=new si,so=new va;class M2 extends si{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rg(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<s;a++)this.setMatrixAt(a,uT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),Lg.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(Lg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),so.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const s=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let d=0;d<s.length;d++)s[d]=a[c+d]}raycast(e,t){const s=this.matrixWorld,a=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(s),e.ray.intersectsSphere(so)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ia),Pg.multiplyMatrices(s,ia),ro.matrixWorld=Pg,ro.raycast(e,$l);for(let c=0,d=$l.length;c<d;c++){const f=$l[c];f.instanceId=l,f.object=this,t.push(f)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Rg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const s=t.morphTargetInfluences,a=s.length+1;this.morphTexture===null&&(this.morphTexture=new cT(new Float32Array(a*this.count),a,this.count,p0,rr));const l=this.morphTexture.source.data.data;let c=0;for(let h=0;h<s.length;h++)c+=s[h];const d=this.geometry.morphTargetsRelative?1:1-c,f=a*e;l[f]=d,l.set(s,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dT extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new q,mc=new q,Ng=new Vt,ao=new mf,Kl=new va,Vd=new q,Dg=new q;class fT extends Tn{constructor(e=new Bn,t=new dT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)pc.fromBufferAttribute(t,a-1),mc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Jt(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kl.copy(s.boundingSphere),Kl.applyMatrix4(a),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;Ng.copy(a).invert(),ao.copy(e.ray).applyMatrix4(Ng);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,h=this.isLineSegments?2:1,m=s.index,v=s.attributes.position;if(m!==null){const S=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let w=S,y=M-1;w<y;w+=h){const _=m.getX(w),N=m.getX(w+1),E=Zl(this,e,ao,f,_,N);E&&t.push(E)}if(this.isLineLoop){const w=m.getX(M-1),y=m.getX(S),_=Zl(this,e,ao,f,w,y);_&&t.push(_)}}else{const S=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let w=S,y=M-1;w<y;w+=h){const _=Zl(this,e,ao,f,w,w+1);_&&t.push(_)}if(this.isLineLoop){const w=Zl(this,e,ao,f,M-1,S);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Zl(i,e,t,s,a,l){const c=i.geometry.attributes.position;if(pc.fromBufferAttribute(c,a),mc.fromBufferAttribute(c,l),t.distanceSqToSegment(pc,mc,Vd,Dg)>s)return;Vd.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Vd);if(!(f<e.near||f>e.far))return{distance:f,point:Dg.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Ig=new q,Ug=new q;class E2 extends fT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Ig.fromBufferAttribute(t,a),Ug.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Ig.distanceTo(Ug);e.setAttribute("lineDistance",new Jt(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let a=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let d=0,f=l-1,h;for(;d<=f;)if(a=Math.floor(d+(f-d)/2),h=s[a]-c,h<0)d=a+1;else if(h>0)f=a-1;else{f=a;break}if(a=f,s[a]===c)return a/(l-1);const m=s[a],v=s[a+1]-m,S=(c-m)/v;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),d=this.getPoint(l),f=t||(c.isVector2?new $e:new q);return f.copy(d).sub(c).normalize(),f}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new q,a=[],l=[],c=[],d=new q,f=new Vt;for(let S=0;S<=e;S++){const M=S/e;a[S]=this.getTangentAt(M,new q)}l[0]=new q,c[0]=new q;let h=Number.MAX_VALUE;const m=Math.abs(a[0].x),g=Math.abs(a[0].y),v=Math.abs(a[0].z);m<=h&&(h=m,s.set(1,0,0)),g<=h&&(h=g,s.set(0,1,0)),v<=h&&s.set(0,0,1),d.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],d),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),d.crossVectors(a[S-1],a[S]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(pn(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(f.makeRotationAxis(d,M))}c[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(pn(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(a[M],S*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xf extends ki{constructor(e=0,t=0,s=1,a=1,l=0,c=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new $e){const s=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),h=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=f-this.aX,S=h-this.aY;f=v*m-S*g+this.aX,h=v*g+S*m+this.aY}return s.set(f,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hT extends xf{constructor(e,t,s,a,l,c){super(e,t,s,s,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function yf(){let i=0,e=0,t=0,s=0;function a(l,c,d,f){i=l,e=d,t=-3*l+3*c-2*d-f,s=2*l-2*c+d+f}return{initCatmullRom:function(l,c,d,f,h){a(c,d,h*(d-l),h*(f-c))},initNonuniformCatmullRom:function(l,c,d,f,h,m,g){let v=(c-l)/h-(d-l)/(h+m)+(d-c)/m,S=(d-c)/m-(f-c)/(m+g)+(f-d)/g;v*=m,S*=m,a(c,d,v,S)},calc:function(l){const c=l*l,d=c*l;return i+e*l+t*c+s*d}}}const Jl=new q,Gd=new yf,Wd=new yf,jd=new yf;class pT extends ki{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new q){const s=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let d=Math.floor(c),f=c-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let h,m;this.closed||d>0?h=a[(d-1)%l]:(Jl.subVectors(a[0],a[1]).add(a[0]),h=Jl);const g=a[d%l],v=a[(d+1)%l];if(this.closed||d+2<l?m=a[(d+2)%l]:(Jl.subVectors(a[l-1],a[l-2]).add(a[l-1]),m=Jl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),S),w=Math.pow(g.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(m),S);w<1e-4&&(w=1),M<1e-4&&(M=w),y<1e-4&&(y=w),Gd.initNonuniformCatmullRom(h.x,g.x,v.x,m.x,M,w,y),Wd.initNonuniformCatmullRom(h.y,g.y,v.y,m.y,M,w,y),jd.initNonuniformCatmullRom(h.z,g.z,v.z,m.z,M,w,y)}else this.curveType==="catmullrom"&&(Gd.initCatmullRom(h.x,g.x,v.x,m.x,this.tension),Wd.initCatmullRom(h.y,g.y,v.y,m.y,this.tension),jd.initCatmullRom(h.z,g.z,v.z,m.z,this.tension));return s.set(Gd.calc(f),Wd.calc(f),jd.calc(f)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new q().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Og(i,e,t,s,a){const l=(s-e)*.5,c=(a-t)*.5,d=i*i,f=i*d;return(2*t-2*s+l+c)*f+(-3*t+3*s-2*l-c)*d+l*i+t}function mT(i,e){const t=1-i;return t*t*e}function gT(i,e){return 2*(1-i)*i*e}function vT(i,e){return i*i*e}function fo(i,e,t,s){return mT(i,e)+gT(i,t)+vT(i,s)}function _T(i,e){const t=1-i;return t*t*t*e}function xT(i,e){const t=1-i;return 3*t*t*i*e}function yT(i,e){return 3*(1-i)*i*i*e}function ST(i,e){return i*i*i*e}function ho(i,e,t,s,a){return _T(i,e)+xT(i,t)+yT(i,s)+ST(i,a)}class z0 extends ki{constructor(e=new $e,t=new $e,s=new $e,a=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2,d=this.v3;return s.set(ho(e,a.x,l.x,c.x,d.x),ho(e,a.y,l.y,c.y,d.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class MT extends ki{constructor(e=new q,t=new q,s=new q,a=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new q){const s=t,a=this.v0,l=this.v1,c=this.v2,d=this.v3;return s.set(ho(e,a.x,l.x,c.x,d.x),ho(e,a.y,l.y,c.y,d.y),ho(e,a.z,l.z,c.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k0 extends ki{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ET extends ki{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends ki{constructor(e=new $e,t=new $e,s=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H0 extends ki{constructor(e=new q,t=new q,s=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new q){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y),fo(e,a.z,l.z,c.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V0 extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const s=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),d=l-c,f=a[c===0?c:c-1],h=a[c],m=a[c>a.length-2?a.length-1:c+1],g=a[c>a.length-3?a.length-1:c+2];return s.set(Og(d,f.x,h.x,m.x,g.x),Og(d,f.y,h.y,m.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new $e().fromArray(a))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:hT,CatmullRomCurve3:pT,CubicBezierCurve:z0,CubicBezierCurve3:MT,EllipseCurve:xf,LineCurve:k0,LineCurve3:ET,QuadraticBezierCurve:B0,QuadraticBezierCurve3:H0,SplineCurve:V0});class wT extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[s](t,e))}return this}getPoint(e,t){const s=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=s){const c=a[l]-s,d=this.curves[l],f=d.getLength(),h=f===0?0:1-c/f;return d.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let s=0,a=this.curves.length;s<a;s++)t+=this.curves[s].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let s;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],d=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(d);for(let h=0;h<f.length;h++){const m=f[h];s&&s.equals(m)||(t.push(m),s=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,s=this.curves.length;t<s;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(new gc[a.type]().fromJSON(a))}return this}}class rf extends wT{constructor(e){super(),this.type="Path",this.currentPoint=new $e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,s=e.length;t<s;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new k0(this.currentPoint.clone(),new $e(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,a){const l=new B0(this.currentPoint.clone(),new $e(e,t),new $e(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}bezierCurveTo(e,t,s,a,l,c){const d=new z0(this.currentPoint.clone(),new $e(e,t),new $e(s,a),new $e(l,c));return this.curves.push(d),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),s=new V0(t);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,s,a,l,c){const d=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+d,t+f,s,a,l,c),this}absarc(e,t,s,a,l,c){return this.absellipse(e,t,s,s,a,l,c),this}ellipse(e,t,s,a,l,c,d,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,s,a,l,c,d,f),this}absellipse(e,t,s,a,l,c,d,f){const h=new xf(e,t,s,a,l,c,d,f);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class G0 extends Bn{constructor(e=1,t=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:s,thetaLength:a},t=Math.max(3,t);const l=[],c=[],d=[],f=[],h=new q,m=new $e;c.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const S=s+g/t*a;h.x=e*Math.cos(S),h.y=e*Math.sin(S),c.push(h.x,h.y,h.z),d.push(0,0,1),m.x=(c[v]/e+1)/2,m.y=(c[v+1]/e+1)/2,f.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new G0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class W0 extends Bn{constructor(e=1,t=1,s=1,a=32,l=1,c=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:f};const h=this;a=Math.floor(a),l=Math.floor(l);const m=[],g=[],v=[],S=[];let M=0;const w=[],y=s/2;let _=0;N(),c===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(S,2));function N(){const b=new q,z=new q;let P=0;const I=(t-e)/s;for(let F=0;F<=l;F++){const L=[],R=F/l,k=R*(t-e)+e;for(let J=0;J<=a;J++){const Y=J/a,ee=Y*f+d,de=Math.sin(ee),K=Math.cos(ee);z.x=k*de,z.y=-R*s+y,z.z=k*K,g.push(z.x,z.y,z.z),b.set(de,I,K).normalize(),v.push(b.x,b.y,b.z),S.push(Y,1-R),L.push(M++)}w.push(L)}for(let F=0;F<a;F++)for(let L=0;L<l;L++){const R=w[L][F],k=w[L+1][F],J=w[L+1][F+1],Y=w[L][F+1];m.push(R,k,Y),m.push(k,J,Y),P+=6}h.addGroup(_,P,0),_+=P}function E(b){const z=M,P=new $e,I=new q;let F=0;const L=b===!0?e:t,R=b===!0?1:-1;for(let J=1;J<=a;J++)g.push(0,y*R,0),v.push(0,R,0),S.push(.5,.5),M++;const k=M;for(let J=0;J<=a;J++){const ee=J/a*f+d,de=Math.cos(ee),K=Math.sin(ee);I.x=L*K,I.y=y*R,I.z=L*de,g.push(I.x,I.y,I.z),v.push(0,R,0),P.x=de*.5+.5,P.y=K*.5*R+.5,S.push(P.x,P.y),M++}for(let J=0;J<a;J++){const Y=z+J,ee=k+J;b===!0?m.push(ee,ee+1,Y):m.push(ee+1,ee,Y),F+=3}h.addGroup(_,F,b===!0?1:2),_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new W0(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ac extends rf{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let s=0,a=this.holes.length;s<a;s++)t[s]=this.holes[s].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,s=this.holes.length;t<s;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(new rf().fromJSON(a))}return this}}const TT={triangulate:function(i,e,t=2){const s=e&&e.length,a=s?e[0]*t:i.length;let l=j0(i,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let d,f,h,m,g,v,S;if(s&&(l=PT(i,e,l,t)),i.length>80*t){d=h=i[0],f=m=i[1];for(let M=t;M<a;M+=t)g=i[M],v=i[M+1],g<d&&(d=g),v<f&&(f=v),g>h&&(h=g),v>m&&(m=v);S=Math.max(h-d,m-f),S=S!==0?32767/S:0}return _o(l,c,t,d,f,S,0),c}};function j0(i,e,t,s,a){let l,c;if(a===HT(i,e,t,s)>0)for(l=e;l<t;l+=s)c=Fg(l,i[l],i[l+1],c);else for(l=t-s;l>=e;l-=s)c=Fg(l,i[l],i[l+1],c);return c&&wc(c,c.next)&&(yo(c),c=c.next),c}function ms(i,e){if(!i)return i;e||(e=i);let t=i,s;do if(s=!1,!t.steiner&&(wc(t,t.next)||tn(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function _o(i,e,t,s,a,l,c){if(!i)return;!c&&l&&UT(i,s,a,l);let d=i,f,h;for(;i.prev!==i.next;){if(f=i.prev,h=i.next,l?CT(i,s,a,l):AT(i)){e.push(f.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),yo(i),i=h.next,d=h.next;continue}if(i=h,i===d){c?c===1?(i=bT(ms(i),e,t),_o(i,e,t,s,a,l,2)):c===2&&RT(i,e,t,s,a,l):_o(ms(i),e,t,s,a,l,1);break}}}function AT(i){const e=i.prev,t=i,s=i.next;if(tn(e,t,s)>=0)return!1;const a=e.x,l=t.x,c=s.x,d=e.y,f=t.y,h=s.y,m=a<l?a<c?a:c:l<c?l:c,g=d<f?d<h?d:h:f<h?f:h,v=a>l?a>c?a:c:l>c?l:c,S=d>f?d>h?d:h:f>h?f:h;let M=s.next;for(;M!==e;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=S&&sa(a,d,l,f,c,h,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function CT(i,e,t,s){const a=i.prev,l=i,c=i.next;if(tn(a,l,c)>=0)return!1;const d=a.x,f=l.x,h=c.x,m=a.y,g=l.y,v=c.y,S=d<f?d<h?d:h:f<h?f:h,M=m<g?m<v?m:v:g<v?g:v,w=d>f?d>h?d:h:f>h?f:h,y=m>g?m>v?m:v:g>v?g:v,_=sf(S,M,e,t,s),N=sf(w,y,e,t,s);let E=i.prevZ,b=i.nextZ;for(;E&&E.z>=_&&b&&b.z<=N;){if(E.x>=S&&E.x<=w&&E.y>=M&&E.y<=y&&E!==a&&E!==c&&sa(d,m,f,g,h,v,E.x,E.y)&&tn(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=S&&b.x<=w&&b.y>=M&&b.y<=y&&b!==a&&b!==c&&sa(d,m,f,g,h,v,b.x,b.y)&&tn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=_;){if(E.x>=S&&E.x<=w&&E.y>=M&&E.y<=y&&E!==a&&E!==c&&sa(d,m,f,g,h,v,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=N;){if(b.x>=S&&b.x<=w&&b.y>=M&&b.y<=y&&b!==a&&b!==c&&sa(d,m,f,g,h,v,b.x,b.y)&&tn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function bT(i,e,t){let s=i;do{const a=s.prev,l=s.next.next;!wc(a,l)&&X0(a,s,s.next,l)&&xo(a,l)&&xo(l,a)&&(e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),yo(s),yo(s.next),s=i=l),s=s.next}while(s!==i);return ms(s)}function RT(i,e,t,s,a,l){let c=i;do{let d=c.next.next;for(;d!==c.prev;){if(c.i!==d.i&&zT(c,d)){let f=q0(c,d);c=ms(c,c.next),f=ms(f,f.next),_o(c,e,t,s,a,l,0),_o(f,e,t,s,a,l,0);return}d=d.next}c=c.next}while(c!==i)}function PT(i,e,t,s){const a=[];let l,c,d,f,h;for(l=0,c=e.length;l<c;l++)d=e[l]*s,f=l<c-1?e[l+1]*s:i.length,h=j0(i,d,f,s,!1),h===h.next&&(h.steiner=!0),a.push(FT(h));for(a.sort(LT),l=0;l<a.length;l++)t=NT(a[l],t);return t}function LT(i,e){return i.x-e.x}function NT(i,e){const t=DT(i,e);if(!t)return e;const s=q0(t,i);return ms(s,s.next),ms(t,t.next)}function DT(i,e){let t=e,s=-1/0,a;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=l&&v>s&&(s=v,a=t.x<t.next.x?t:t.next,v===l))return a}t=t.next}while(t!==e);if(!a)return null;const d=a,f=a.x,h=a.y;let m=1/0,g;t=a;do l>=t.x&&t.x>=f&&l!==t.x&&sa(c<h?l:s,c,f,h,c<h?s:l,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(l-t.x),xo(t,i)&&(g<m||g===m&&(t.x>a.x||t.x===a.x&&IT(a,t)))&&(a=t,m=g)),t=t.next;while(t!==d);return a}function IT(i,e){return tn(i.prev,i,e.prev)<0&&tn(e.next,i,i.next)<0}function UT(i,e,t,s){let a=i;do a.z===0&&(a.z=sf(a.x,a.y,e,t,s)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,OT(a)}function OT(i){let e,t,s,a,l,c,d,f,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,s=t,d=0,e=0;e<h&&(d++,s=s.nextZ,!!s);e++);for(f=h;d>0||f>0&&s;)d!==0&&(f===0||!s||t.z<=s.z)?(a=t,t=t.nextZ,d--):(a=s,s=s.nextZ,f--),l?l.nextZ=a:i=a,a.prevZ=l,l=a;t=s}l.nextZ=null,h*=2}while(c>1);return i}function sf(i,e,t,s,a){return i=(i-t)*a|0,e=(e-s)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function FT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sa(i,e,t,s,a,l,c,d){return(a-c)*(e-d)>=(i-c)*(l-d)&&(i-c)*(s-d)>=(t-c)*(e-d)&&(t-c)*(l-d)>=(a-c)*(s-d)}function zT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!kT(i,e)&&(xo(i,e)&&xo(e,i)&&BT(i,e)&&(tn(i.prev,i,e.prev)||tn(i,e.prev,e))||wc(i,e)&&tn(i.prev,i,i.next)>0&&tn(e.prev,e,e.next)>0)}function tn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wc(i,e){return i.x===e.x&&i.y===e.y}function X0(i,e,t,s){const a=ec(tn(i,e,t)),l=ec(tn(i,e,s)),c=ec(tn(t,s,i)),d=ec(tn(t,s,e));return!!(a!==l&&c!==d||a===0&&Ql(i,t,e)||l===0&&Ql(i,s,e)||c===0&&Ql(t,i,s)||d===0&&Ql(t,e,s))}function Ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function kT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&X0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xo(i,e){return tn(i.prev,i,i.next)<0?tn(i,e,i.next)>=0&&tn(i,i.prev,e)>=0:tn(i,e,i.prev)<0||tn(i,i.next,e)<0}function BT(i,e){let t=i,s=!1;const a=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==i);return s}function q0(i,e){const t=new af(i.i,i.x,i.y),s=new af(e.i,e.x,e.y),a=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function Fg(i,e,t,s){const a=new af(i,e,t);return s?(a.next=s.next,a.prev=s,s.next.prev=a,s.next=a):(a.prev=a,a.next=a),a}function yo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function af(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function HT(i,e,t,s){let a=0;for(let l=e,c=t-s;l<t;l+=s)a+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return a}class ca{static area(e){const t=e.length;let s=0;for(let a=t-1,l=0;l<t;a=l++)s+=e[a].x*e[l].y-e[l].x*e[a].y;return s*.5}static isClockWise(e){return ca.area(e)<0}static triangulateShape(e,t){const s=[],a=[],l=[];zg(e),kg(s,e);let c=e.length;t.forEach(zg);for(let f=0;f<t.length;f++)a.push(c),c+=t[f].length,kg(s,t[f]);const d=TT.triangulate(s,a);for(let f=0;f<d.length;f+=3)l.push(d.slice(f,f+3));return l}}function zg(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Y0 extends Bn{constructor(e=new ac([new $e(.5,.5),new $e(-.5,.5),new $e(-.5,-.5),new $e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,a=[],l=[];for(let d=0,f=e.length;d<f;d++){const h=e[d];c(h)}this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2)),this.computeVertexNormals();function c(d){const f=[],h=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,w=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:VT;let E,b=!1,z,P,I,F;_&&(E=_.getSpacedPoints(m),b=!0,v=!1,z=_.computeFrenetFrames(m,!1),P=new q,I=new q,F=new q),v||(y=0,S=0,M=0,w=0);const L=d.extractPoints(h);let R=L.shape;const k=L.holes;if(!ca.isClockWise(R)){R=R.reverse();for(let Se=0,Ee=k.length;Se<Ee;Se++){const we=k[Se];ca.isClockWise(we)&&(k[Se]=we.reverse())}}const Y=ca.triangulateShape(R,k),ee=R;for(let Se=0,Ee=k.length;Se<Ee;Se++){const we=k[Se];R=R.concat(we)}function de(Se,Ee,we){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),Se.clone().addScaledVector(Ee,we)}const K=R.length,pe=Y.length;function W(Se,Ee,we){let Me,Te,Pe;const Ce=Se.x-Ee.x,Xe=Se.y-Ee.y,O=we.x-Se.x,A=we.y-Se.y,se=Ce*Ce+Xe*Xe,_e=Ce*A-Xe*O;if(Math.abs(_e)>Number.EPSILON){const ge=Math.sqrt(se),xe=Math.sqrt(O*O+A*A),qe=Ee.x-Xe/ge,Ie=Ee.y+Ce/ge,De=we.x-A/xe,et=we.y+O/xe,Ae=((De-qe)*A-(et-Ie)*O)/(Ce*A-Xe*O);Me=qe+Ce*Ae-Se.x,Te=Ie+Xe*Ae-Se.y;const je=Me*Me+Te*Te;if(je<=2)return new $e(Me,Te);Pe=Math.sqrt(je/2)}else{let ge=!1;Ce>Number.EPSILON?O>Number.EPSILON&&(ge=!0):Ce<-Number.EPSILON?O<-Number.EPSILON&&(ge=!0):Math.sign(Xe)===Math.sign(A)&&(ge=!0),ge?(Me=-Xe,Te=Ce,Pe=Math.sqrt(se)):(Me=Ce,Te=Xe,Pe=Math.sqrt(se/2))}return new $e(Me/Pe,Te/Pe)}const re=[];for(let Se=0,Ee=ee.length,we=Ee-1,Me=Se+1;Se<Ee;Se++,we++,Me++)we===Ee&&(we=0),Me===Ee&&(Me=0),re[Se]=W(ee[Se],ee[we],ee[Me]);const ie=[];let U,X=re.concat();for(let Se=0,Ee=k.length;Se<Ee;Se++){const we=k[Se];U=[];for(let Me=0,Te=we.length,Pe=Te-1,Ce=Me+1;Me<Te;Me++,Pe++,Ce++)Pe===Te&&(Pe=0),Ce===Te&&(Ce=0),U[Me]=W(we[Me],we[Pe],we[Ce]);ie.push(U),X=X.concat(U)}for(let Se=0;Se<y;Se++){const Ee=Se/y,we=S*Math.cos(Ee*Math.PI/2),Me=M*Math.sin(Ee*Math.PI/2)+w;for(let Te=0,Pe=ee.length;Te<Pe;Te++){const Ce=de(ee[Te],re[Te],Me);ye(Ce.x,Ce.y,-we)}for(let Te=0,Pe=k.length;Te<Pe;Te++){const Ce=k[Te];U=ie[Te];for(let Xe=0,O=Ce.length;Xe<O;Xe++){const A=de(Ce[Xe],U[Xe],Me);ye(A.x,A.y,-we)}}}const Le=M+w;for(let Se=0;Se<K;Se++){const Ee=v?de(R[Se],X[Se],Le):R[Se];b?(I.copy(z.normals[0]).multiplyScalar(Ee.x),P.copy(z.binormals[0]).multiplyScalar(Ee.y),F.copy(E[0]).add(I).add(P),ye(F.x,F.y,F.z)):ye(Ee.x,Ee.y,0)}for(let Se=1;Se<=m;Se++)for(let Ee=0;Ee<K;Ee++){const we=v?de(R[Ee],X[Ee],Le):R[Ee];b?(I.copy(z.normals[Se]).multiplyScalar(we.x),P.copy(z.binormals[Se]).multiplyScalar(we.y),F.copy(E[Se]).add(I).add(P),ye(F.x,F.y,F.z)):ye(we.x,we.y,g/m*Se)}for(let Se=y-1;Se>=0;Se--){const Ee=Se/y,we=S*Math.cos(Ee*Math.PI/2),Me=M*Math.sin(Ee*Math.PI/2)+w;for(let Te=0,Pe=ee.length;Te<Pe;Te++){const Ce=de(ee[Te],re[Te],Me);ye(Ce.x,Ce.y,g+we)}for(let Te=0,Pe=k.length;Te<Pe;Te++){const Ce=k[Te];U=ie[Te];for(let Xe=0,O=Ce.length;Xe<O;Xe++){const A=de(Ce[Xe],U[Xe],Me);b?ye(A.x,A.y+E[m-1].y,E[m-1].x+we):ye(A.x,A.y,g+we)}}}Z(),ne();function Z(){const Se=a.length/3;if(v){let Ee=0,we=K*Ee;for(let Me=0;Me<pe;Me++){const Te=Y[Me];Ne(Te[2]+we,Te[1]+we,Te[0]+we)}Ee=m+y*2,we=K*Ee;for(let Me=0;Me<pe;Me++){const Te=Y[Me];Ne(Te[0]+we,Te[1]+we,Te[2]+we)}}else{for(let Ee=0;Ee<pe;Ee++){const we=Y[Ee];Ne(we[2],we[1],we[0])}for(let Ee=0;Ee<pe;Ee++){const we=Y[Ee];Ne(we[0]+K*m,we[1]+K*m,we[2]+K*m)}}s.addGroup(Se,a.length/3-Se,0)}function ne(){const Se=a.length/3;let Ee=0;le(ee,Ee),Ee+=ee.length;for(let we=0,Me=k.length;we<Me;we++){const Te=k[we];le(Te,Ee),Ee+=Te.length}s.addGroup(Se,a.length/3-Se,1)}function le(Se,Ee){let we=Se.length;for(;--we>=0;){const Me=we;let Te=we-1;Te<0&&(Te=Se.length-1);for(let Pe=0,Ce=m+y*2;Pe<Ce;Pe++){const Xe=K*Pe,O=K*(Pe+1),A=Ee+Me+Xe,se=Ee+Te+Xe,_e=Ee+Te+O,ge=Ee+Me+O;He(A,se,_e,ge)}}}function ye(Se,Ee,we){f.push(Se),f.push(Ee),f.push(we)}function Ne(Se,Ee,we){Fe(Se),Fe(Ee),Fe(we);const Me=a.length/3,Te=N.generateTopUV(s,a,Me-3,Me-2,Me-1);V(Te[0]),V(Te[1]),V(Te[2])}function He(Se,Ee,we,Me){Fe(Se),Fe(Ee),Fe(Me),Fe(Ee),Fe(we),Fe(Me);const Te=a.length/3,Pe=N.generateSideWallUV(s,a,Te-6,Te-3,Te-2,Te-1);V(Pe[0]),V(Pe[1]),V(Pe[3]),V(Pe[1]),V(Pe[2]),V(Pe[3])}function Fe(Se){a.push(f[Se*3+0]),a.push(f[Se*3+1]),a.push(f[Se*3+2])}function V(Se){l.push(Se.x),l.push(Se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,s=this.parameters.options;return GT(t,s,e)}static fromJSON(e,t){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const d=t[e.shapes[l]];s.push(d)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new gc[a.type]().fromJSON(a)),new Y0(s,e.options)}}const VT={generateTopUV:function(i,e,t,s,a){const l=e[t*3],c=e[t*3+1],d=e[s*3],f=e[s*3+1],h=e[a*3],m=e[a*3+1];return[new $e(l,c),new $e(d,f),new $e(h,m)]},generateSideWallUV:function(i,e,t,s,a,l){const c=e[t*3],d=e[t*3+1],f=e[t*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[a*3],S=e[a*3+1],M=e[a*3+2],w=e[l*3],y=e[l*3+1],_=e[l*3+2];return Math.abs(d-m)<Math.abs(c-h)?[new $e(c,1-f),new $e(h,1-g),new $e(v,1-M),new $e(w,1-_)]:[new $e(d,1-f),new $e(m,1-g),new $e(S,1-M),new $e(y,1-_)]}};function GT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let s=0,a=i.length;s<a;s++){const l=i[s];t.shapes.push(l.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Sf extends Bn{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(c+d,Math.PI);let h=0;const m=[],g=new q,v=new q,S=[],M=[],w=[],y=[];for(let _=0;_<=s;_++){const N=[],E=_/s;let b=0;_===0&&c===0?b=.5/t:_===s&&f===Math.PI&&(b=-.5/t);for(let z=0;z<=t;z++){const P=z/t;g.x=-e*Math.cos(a+P*l)*Math.sin(c+E*d),g.y=e*Math.cos(c+E*d),g.z=e*Math.sin(a+P*l)*Math.sin(c+E*d),M.push(g.x,g.y,g.z),v.copy(g).normalize(),w.push(v.x,v.y,v.z),y.push(P+b,1-E),N.push(h++)}m.push(N)}for(let _=0;_<s;_++)for(let N=0;N<t;N++){const E=m[_][N+1],b=m[_][N],z=m[_+1][N],P=m[_+1][N+1];(_!==0||c>0)&&S.push(E,b,P),(_!==s-1||f<Math.PI)&&S.push(b,z,P)}this.setIndex(S),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(w,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $0 extends Bn{constructor(e=new H0(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),t=64,s=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const d=new q,f=new q,h=new $e;let m=new q;const g=[],v=[],S=[],M=[];w(),this.setIndex(M),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(S,2));function w(){for(let E=0;E<t;E++)y(E);y(l===!1?t:0),N(),_()}function y(E){m=e.getPointAt(E/t,m);const b=c.normals[E],z=c.binormals[E];for(let P=0;P<=a;P++){const I=P/a*Math.PI*2,F=Math.sin(I),L=-Math.cos(I);f.x=L*b.x+F*z.x,f.y=L*b.y+F*z.y,f.z=L*b.z+F*z.z,f.normalize(),v.push(f.x,f.y,f.z),d.x=m.x+s*f.x,d.y=m.y+s*f.y,d.z=m.z+s*f.z,g.push(d.x,d.y,d.z)}}function _(){for(let E=1;E<=t;E++)for(let b=1;b<=a;b++){const z=(a+1)*(E-1)+(b-1),P=(a+1)*E+(b-1),I=(a+1)*E+b,F=(a+1)*(E-1)+b;M.push(z,P,F),M.push(P,I,F)}}function N(){for(let E=0;E<=t;E++)for(let b=0;b<=a;b++)h.x=E/t,h.y=b/a,S.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $0(new gc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class w2 extends Bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],s=new Set,a=new q,l=new q;if(e.index!==null){const c=e.attributes.position,d=e.index;let f=e.groups;f.length===0&&(f=[{start:0,count:d.count,materialIndex:0}]);for(let h=0,m=f.length;h<m;++h){const g=f[h],v=g.start,S=g.count;for(let M=v,w=v+S;M<w;M+=3)for(let y=0;y<3;y++){const _=d.getX(M+y),N=d.getX(M+(y+1)%3);a.fromBufferAttribute(c,_),l.fromBufferAttribute(c,N),Bg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}}else{const c=e.attributes.position;for(let d=0,f=c.count/3;d<f;d++)for(let h=0;h<3;h++){const m=3*d+h,g=3*d+(h+1)%3;a.fromBufferAttribute(c,m),l.fromBufferAttribute(c,g),Bg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new Jt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Bg(i,e,t){const s=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(s)===!0||t.has(a)===!0?!1:(t.add(s),t.add(a),!0)}class WT extends vs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T2 extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jT{constructor(e,t,s){const a=this;let l=!1,c=0,d=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){d++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,d),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,d),c===d&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const S=h[g],M=h[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const XT=new jT;class Mf{constructor(e){this.manager=e!==void 0?e:XT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mf.DEFAULT_MATERIAL_NAME="__DEFAULT";class qT extends Mf{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Hg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const d=vo("img");function f(){m(),Hg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){m(),a&&a(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){d.removeEventListener("load",f,!1),d.removeEventListener("error",h,!1)}return d.addEventListener("load",f,!1),d.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),l.manager.itemStart(e),d.src=e,d}}class YT extends Mf{constructor(e){super(e)}load(e,t,s,a){const l=new Dn,c=new qT(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class K0 extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xd=new Vt,Vg=new q,Gg=new q;class $T{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vg),Gg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gg),t.updateMatrixWorld(),Xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KT extends $T{constructor(){super(new P0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A2 extends K0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new KT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class C2 extends K0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class b2 extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class R2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wg(){return(typeof performance>"u"?Date:performance).now()}class P2 extends lT{constructor(e,t,s=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const jg=new Vt;class L2{constructor(e,t,s=0,a=1/0){this.ray=new mf(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new gf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jg),this}intersectObject(e,t=!0,s=[]){return of(e,this,s,t),s.sort(Xg),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)of(e[a],this,s,t);return s.sort(Xg),s}}function Xg(i,e){return i.distance-e.distance}function of(i,e,t,s){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=i.children;for(let c=0,d=l.length;c<d;c++)of(l[c],e,t,!0)}}class N2{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const qg=new q,tc=new q;class D2{constructor(e=new q,t=new q){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){qg.subVectors(e,this.start),tc.subVectors(this.end,this.start);const s=tc.dot(tc);let l=tc.dot(qg)/s;return t&&(l=pn(l,0,1)),l}closestPointToPoint(e,t,s){const a=this.closestPointToPointParameter(e,t);return this.delta(s).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class I2{constructor(){this.type="ShapePath",this.color=new Pt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,s,a){return this.currentPath.quadraticCurveTo(e,t,s,a),this}bezierCurveTo(e,t,s,a,l,c){return this.currentPath.bezierCurveTo(e,t,s,a,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const N=[];for(let E=0,b=_.length;E<b;E++){const z=_[E],P=new ac;P.curves=z.curves,N.push(P)}return N}function s(_,N){const E=N.length;let b=!1;for(let z=E-1,P=0;P<E;z=P++){let I=N[z],F=N[P],L=F.x-I.x,R=F.y-I.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(I=N[P],L=-L,F=N[z],R=-R),_.y<I.y||_.y>F.y)continue;if(_.y===I.y){if(_.x===I.x)return!0}else{const k=R*(_.x-I.x)-L*(_.y-I.y);if(k===0)return!0;if(k<0)continue;b=!b}}else{if(_.y!==I.y)continue;if(F.x<=_.x&&_.x<=I.x||I.x<=_.x&&_.x<=F.x)return!0}}return b}const a=ca.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,d,f;const h=[];if(l.length===1)return d=l[0],f=new ac,f.curves=d.curves,h.push(f),h;let m=!a(l[0].getPoints());m=e?!m:m;const g=[],v=[];let S=[],M=0,w;v[M]=void 0,S[M]=[];for(let _=0,N=l.length;_<N;_++)d=l[_],w=d.getPoints(),c=a(w),c=e?!c:c,c?(!m&&v[M]&&M++,v[M]={s:new ac,p:w},v[M].s.curves=d.curves,m&&M++,S[M]=[]):S[M].push({h:d,p:w[0]});if(!v[0])return t(l);if(v.length>1){let _=!1,N=0;for(let E=0,b=v.length;E<b;E++)g[E]=[];for(let E=0,b=v.length;E<b;E++){const z=S[E];for(let P=0;P<z.length;P++){const I=z[P];let F=!0;for(let L=0;L<v.length;L++)s(I.p,v[L].p)&&(E!==L&&N++,F?(F=!1,g[L].push(I)):_=!0);F&&g[E].push(I)}}N>0&&_===!1&&(S=g)}let y;for(let _=0,N=v.length;_<N;_++){f=v[_].s,h.push(f),y=S[_];for(let E=0,b=y.length;E<b;E++)f.holes.push(y[E].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);const ZT=i=>{const e=i.getUTCFullYear(),t=Date.UTC(e+1,0,1)-Date.UTC(e,0,1)===366*864e5?366:365,s=Math.floor((Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate())-Date.UTC(i.getUTCFullYear(),0,0))/864e5),a=i.getUTCHours()*60+i.getUTCMinutes()+i.getUTCSeconds()/60,l=2*Math.PI*(s-1+(a/60-12)/24)/t,c=.006918-.399912*Math.cos(l)+.070257*Math.sin(l)-.006758*Math.cos(2*l)+907e-6*Math.sin(2*l)-.002697*Math.cos(3*l)+.00148*Math.sin(3*l),d=229.18*(75e-6+.001868*Math.cos(l)-.032077*Math.sin(l)-.014615*Math.cos(2*l)-.040849*Math.sin(2*l)),f=(720-(a+d))/4*(Math.PI/180);return new q(Math.cos(c)*Math.sin(f),Math.sin(c),Math.cos(c)*Math.cos(f)).normalize()},JT=()=>"/data/clouds/latest.png",Z0=-Math.PI/2,QT=1.008,e2=6*60*60*1e3,nc=i=>i.clone().applyAxisAngle(new q(0,1,0),-Z0),t2=({globe:i,time:e,nightEnabled:t,cloudsEnabled:s})=>{const a=me.useRef({sunDirection:{value:new q},enabled:{value:1}}),l=me.useRef({sunDirection:{value:new q},enabled:{value:1}}),c=me.useRef(null),[d,f]=me.useState(""),[h,m]=me.useState(!1),g=e.getTime(),v=me.useMemo(()=>ZT(new Date(g)),[g]),S=me.useMemo(()=>{const y=JT();return d?`${y}${y.includes("?")?"&":"?"}v=${encodeURIComponent(d)}`:y},[d]),M=me.useRef(v),w=me.useRef(t);return M.current=v,w.current=t,me.useEffect(()=>{if(!s)return;let y=!1;const _=async()=>{try{const b=await fetch("/data/cloud-status.json",{cache:"no-cache"});if(!b.ok)return;const z=await b.json();if(y)return;const P=(z.state==="ready"||z.state==="stale")&&z.sourceId==="noaa-gfs-tcc"&&!!z.fetchedAt;m(P),P&&z.fetchedAt&&f(z.fetchedAt)}catch{}},N=()=>{document.hidden||_()};_();const E=window.setInterval(_,e2);return document.addEventListener("visibilitychange",N),()=>{y=!0,window.clearInterval(E),document.removeEventListener("visibilitychange",N)}},[s]),me.useEffect(()=>{if(!i)return;const y=[];i.scene().traverse(P=>{y.length===0&&P instanceof si&&P.__globeObjType==="globe"&&y.push(P)});const _=y[0];if(!_)return;const N=_.material;if(!(N instanceof WT))return;const E=N.onBeforeCompile,b=N.customProgramCacheKey,z=a.current;return z.sunDirection.value.copy(nc(M.current)),z.enabled.value=w.current?1:0,N.onBeforeCompile=(P,I)=>{E.call(N,P,I),P.uniforms.orbitradarSunDirection=z.sunDirection,P.uniforms.orbitradarNightEnabled=z.enabled,P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
varying vec3 orbitradarSurfaceNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
orbitradarSurfaceNormal = normalize(objectNormal);`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 orbitradarSurfaceNormal;
uniform vec3 orbitradarSunDirection;
uniform float orbitradarNightEnabled;`).replace("#include <opaque_fragment>",`float orbitradarDaylight = dot(normalize(orbitradarSurfaceNormal), normalize(orbitradarSunDirection));
float orbitradarDay = smoothstep(-0.22, 0.12, orbitradarDaylight);
vec3 orbitradarNightColor = outgoingLight * vec3(0.04, 0.07, 0.16);
outgoingLight = mix(outgoingLight, mix(orbitradarNightColor, outgoingLight, orbitradarDay), orbitradarNightEnabled);
#include <opaque_fragment>`)},N.customProgramCacheKey=()=>`${b.call(N)}-orbitradar-night-surface-v1`,N.needsUpdate=!0,()=>{N.onBeforeCompile=E,N.customProgramCacheKey=b,N.needsUpdate=!0}},[i]),me.useEffect(()=>{const y=a.current;y.enabled.value=t?1:0,y.sunDirection.value.copy(nc(v)),l.current.enabled.value=t?1:0,l.current.sunDirection.value.copy(nc(v))},[t,v]),me.useEffect(()=>{const y=()=>{var z,P,I;c.current&&i&&i.scene().remove(c.current);const E=(z=c.current)==null?void 0:z.material,b=(P=E==null?void 0:E.uniforms.cloudMap)==null?void 0:P.value;b==null||b.dispose(),(I=c.current)==null||I.geometry.dispose(),E==null||E.dispose(),c.current=null};if(!i||!s||!h){y();return}const _=new YT;_.setCrossOrigin("anonymous");let N=!1;return _.load(S,E=>{if(N||!i){E.dispose();return}E.colorSpace=Ti,E.wrapS=lc,E.wrapT=Ur,E.minFilter=Or,E.magFilter=pi,E.generateMipmaps=!0,E.anisotropy=Math.min(4,i.renderer().capabilities.getMaxAnisotropy()),E.needsUpdate=!0;const b=l.current;b.sunDirection.value.copy(nc(M.current)),b.enabled.value=w.current?1:0;const z=new si(new Sf(i.getGlobeRadius()*QT,64,32),new or({uniforms:{cloudMap:{value:E},sunDirection:b.sunDirection,nightEnabled:b.enabled,opacity:{value:.72}},transparent:!0,depthTest:!0,depthWrite:!1,side:ar,vertexShader:`
              varying vec2 vUv;
              varying vec3 vNormal;
              void main() {
                vUv = uv;
                vNormal = normalize(normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform sampler2D cloudMap;
              uniform vec3 sunDirection;
              uniform float nightEnabled;
              uniform float opacity;
              varying vec2 vUv;
              varying vec3 vNormal;
              void main() {
                vec4 cloud = texture2D(cloudMap, vUv);
                float daylight = dot(normalize(vNormal), normalize(sunDirection));
                float day = mix(1.0, smoothstep(-0.22, 0.12, daylight), nightEnabled);
                vec3 cloudColor = mix(vec3(0.22, 0.28, 0.45), vec3(1.0), day);
                gl_FragColor = vec4(cloudColor, cloud.a * opacity);
              }
            `}));z.name="orbitradar-cloud-cover",z.rotation.y=Z0,z.renderOrder=2,i.scene().add(z),c.current=z},void 0,()=>{}),()=>{N=!0,y()}},[i,s,h,S]),null},n2=(i,e)=>{const t=s=>{s.preventDefault(),e()};return i.addEventListener("webglcontextlost",t),()=>i.removeEventListener("webglcontextlost",t)},i2=({isPaused:i,isTimeLapseActive:e,getTime:t})=>{const[s,a]=me.useState(()=>t()),l=me.useRef(t);l.current=t,me.useEffect(()=>{const f=()=>{const m=l.current();a(g=>g.getTime()===m.getTime()?g:m)};f();const h=window.setInterval(f,100);return()=>window.clearInterval(h)},[]);const c=e?`.${Math.floor(s.getUTCMilliseconds()/100)}`:"",d=i?"Paused local":e?"Simulation local":"Live local";return B.jsx("div",{className:"pointer-events-none absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-20 rounded-lg border border-white/15 bg-slate-950/75 px-2.5 py-1.5 text-right text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5",children:B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("p",{className:"hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:block",children:d}),B.jsxs("time",{className:"text-[11px] font-semibold tabular-nums sm:text-xs",dateTime:s.toISOString(),children:[B.jsxs("span",{className:"sm:hidden",children:[s.toLocaleTimeString(void 0,{timeStyle:"medium"}),c]}),B.jsxs("span",{className:"hidden sm:inline",children:[s.toLocaleString(void 0,{dateStyle:"short",timeStyle:"medium"}),c]})]})]})})},qd=12,Yd=50,r2="#ffd166f2",s2=1.35,a2=me.lazy(()=>Kg(()=>import("./react-globe.gl-DClkU830.js"),[])),o2=me.lazy(()=>Kg(()=>import("./SatelliteMarkers-By0qTIUp.js"),[])),l2=()=>{const i=me.useRef(),e=me.useRef(null),[t,s]=me.useState(!1),[a,l]=me.useState({width:0,height:0}),[c,d]=me.useState(!1),[f,h]=me.useState(0),{settings:m,updateSetting:g,resetSettings:v}=Px();me.useLayoutEffect(()=>{const be=e.current;if(!be)return;const _t=()=>{const Lt=be.getBoundingClientRect();l({width:Math.max(0,Math.floor(Lt.width)),height:Math.max(0,Math.floor(Lt.height))})};if(_t(),typeof ResizeObserver>"u")return window.addEventListener("resize",_t),()=>window.removeEventListener("resize",_t);const Yt=new ResizeObserver(_t);return Yt.observe(be),()=>Yt.disconnect()},[]),me.useEffect(()=>{var _t;const be=(_t=e.current)==null?void 0:_t.querySelector("canvas");if(be)return n2(be,()=>{d(!0),s(!1)})},[t,f]),me.useEffect(()=>{const be=i.current;if(!t||!be)return;const _t=()=>{document.hidden?be.pauseAnimation():be.resumeAnimation()};return _t(),document.addEventListener("visibilitychange",_t),()=>document.removeEventListener("visibilitychange",_t)},[t,f]);const{trackedSatellites:S,selectedNoradId:M,isLoading:w,statusMessage:y,lastUpdated:_,selectSatellite:N,clearSelection:E,refreshCatalog:b}=xx(m),z=Cx(),{satellitePositions:P,selectedPosition:I,orbitPoints:F,snapshotVersion:L,showOrbit:R,setShowOrbit:k,followSelected:J,setFollowSelected:Y}=Sx(S,M,z.currentTime,z.getEffectiveTime),{userLocation:ee,locateUser:de,clearUserLocation:K}=Ex(),{favorites:pe,isFavorite:W,toggleFavorite:re,clearFavorites:ie}=wx(),{isTimeLapseActive:U,isPaused:X,speed:Le,speeds:Z,toggleTimeLapse:ne,setTimeLapseSpeed:le,resetTime:ye,getSpeedLabel:Ne,getTimeOffsetDisplay:He}=z,{trackedNoradIds:Fe,isTracked:V,toggleTracked:Se,clearTracked:Ee,getTrackedColor:we}=bx(P),{passes:Me,isCalculating:Te,error:Pe,calculateForSelected:Ce,calculateForTracked:Xe,clearPasses:O}=Rx(S,ee,z.currentTime),[A,se]=me.useState(""),[_e,ge]=me.useState(()=>typeof window.matchMedia=="function"?window.matchMedia("(min-width: 640px)").matches:!0),[xe,qe]=me.useState("catalog"),[Ie,De]=me.useState(!1),[et,Ae]=me.useState(!1),[je,T]=me.useState(!1),[Ze,ze]=me.useState(!1),[dt,ut]=me.useState(!1),[ft,G]=me.useState(null),[Ve,ve]=me.useState(0),[fe,Oe]=me.useState(m.defaultAltitudeFilter),rt=lo(et,()=>Ae(!1)),vt=lo(je,()=>T(!1)),At=lo(Ie,()=>De(!1));me.useEffect(()=>{var be,_t;!J||!I||(_t=i.current)==null||_t.pointOfView({lat:I.lat,lng:I.lng,altitude:Math.max(2.1,I.alt*.75+1.5)},(be=window.matchMedia)!=null&&be.call(window,"(prefers-reduced-motion: reduce)").matches?0:120)},[J,I]),me.useEffect(()=>{Oe(m.defaultAltitudeFilter)},[m.defaultAltitudeFilter]),me.useEffect(()=>{k(m.showOrbitsByDefault)},[m.showOrbitsByDefault,k]);const Et=me.useMemo(()=>fe==="none"?[]:fe==="all"?S:S.filter(be=>{const _t=a0(be.periodSeconds);return o0(_t)===fe}),[S,fe]);me.useEffect(()=>{fe==="none"&&(N(null),Y(!1),k(!1),O(),ze(!1))},[fe,O,N,Y,k]);const gt=me.useMemo(()=>{const be=A.trim().toLowerCase(),_t=Et;if(!be){const Yt=[25544,20580,25994,33591];return _t.filter(Lt=>Yt.includes(Lt.noradId)).slice(0,qd)}return _t.filter(Yt=>Yt.name.toLowerCase().includes(be)||Yt.noradId.toString().includes(be)).slice(0,qd)},[Et,A]),Rt=me.useMemo(()=>S.filter(be=>pe.includes(be.noradId)),[S,pe]),Ot=me.useMemo(()=>[...Et].sort((be,_t)=>be.name.localeCompare(_t.name)),[Et]),Ft=Math.max(1,Math.ceil(Ot.length/Yd)),Ge=Ot.slice(Ve*Yd,(Ve+1)*Yd),Wt=be=>{N(be),k(m.showOrbitsByDefault)},an=()=>{E(),Y(!1),k(!1),O(),ze(!1)},on=()=>{const be=S.find(_t=>_t.noradId===M);return be?be.name:(I==null?void 0:I.name)??"Unknown"},Mt=()=>{I&&(Ce(I.noradId),ze(!0))},ln=me.useMemo(()=>P.filter(be=>fe==="all"||be.altitudeClass===fe),[P,fe]),An=xe==="favorites"?Rt:xe==="tracked"?S.filter(be=>Fe.includes(be.noradId)):gt;return B.jsxs("div",{className:"relative h-full w-full overflow-hidden bg-black sm:flex",children:[B.jsx("div",{ref:e,className:`absolute inset-0 z-0 ${_e?"sm:left-[22.5rem]":"sm:left-0"}`,children:c?B.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[B.jsx("p",{className:"text-lg font-bold",children:"The globe lost its graphics context."}),B.jsx("p",{className:"text-sm text-slate-300",children:"The satellite explorer remains available."}),B.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:()=>{d(!1),s(!1),h(be=>be+1)},type:"button",children:"Retry globe"})]}):B.jsx(Lx,{onRetry:()=>{s(!1),h(be=>be+1)},children:B.jsxs(me.Suspense,{fallback:B.jsx("div",{role:"status",className:"flex h-full items-center justify-center text-cyan-200",children:"Loading globe…"}),children:[a.width>0&&a.height>0&&B.jsx(a2,{ref:i,width:a.width,height:a.height,onGlobeReady:()=>{const be=i.current;if(!be)return;be.renderer().setPixelRatio(Ix(window.devicePixelRatio));const _t=be.controls();_t.enableDamping=!0,_t.dampingFactor=.08,s(!0),be.pointOfView({altitude:3.2})},enablePointerInteraction:!1,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",backgroundColor:"black",showAtmosphere:!0,labelsData:ee?[ee]:[],labelLat:"lat",labelLng:"lng",labelText:"name",labelColor:()=>"rgba(255, 165, 0, 0.9)",labelSize:1,labelDotRadius:.5,pathsData:fe!=="none"&&F.length>0?[{points:F}]:[],pathPoints:"points",pathPointLat:"lat",pathPointLng:"lng",pathPointAlt:"alt",pathColor:r2,pathStroke:s2,pathTransitionDuration:0}),t&&B.jsx(t2,{globe:i.current??null,time:z.currentTime,nightEnabled:m.nightShading??!0,cloudsEnabled:m.cloudCover??!1}),t&&B.jsx(me.Suspense,{fallback:null,children:B.jsx(o2,{globe:i.current??null,positions:ln,snapshotVersion:L,selectedNoradId:M,trackedNoradIds:Fe,getTrackedColor:we,onSelect:N})})]})},f)}),B.jsx(i2,{isPaused:X,isTimeLapseActive:U,getTime:z.getEffectiveTime}),!_e&&!et&&!je&&!Ze&&!dt&&B.jsxs("section",{className:"absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-20 rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-auto sm:w-96",children:[B.jsxs("div",{className:"flex items-center justify-between gap-4",children:[B.jsxs("div",{className:"min-w-0",children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),B.jsxs("p",{className:"mt-1 text-xl font-bold",children:[Et.length.toLocaleString()," satellites"]})]}),B.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20","aria-expanded":_e,onClick:()=>ge(!0),type:"button",children:"Open panel"})]}),B.jsx("p",{className:"mt-2 hidden line-clamp-2 text-sm text-slate-400 sm:block",children:y}),_&&B.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Last updated: ",new Date(_).toLocaleString()]}),B.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Orbital data:"," ",B.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),B.jsxs("div",{className:"mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0",children:[B.jsxs("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>Ae(!0),type:"button",children:["Favorites (",pe.length,")"]}),B.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>T(!0),type:"button",children:"Time Lapse"}),ee&&I&&B.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Mt,type:"button",children:"Predict Pass"}),B.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>ut(!0),type:"button",children:"Settings"})]})]}),_e&&B.jsxs("aside",{className:"absolute bottom-0 left-0 right-0 z-30 h-[42dvh] max-h-[28rem] overflow-y-auto rounded-t-2xl border border-white/15 bg-slate-950/95 p-4 pb-[max(2rem,env(safe-area-inset-bottom))] text-left text-white shadow-2xl backdrop-blur-xl sm:relative sm:h-full sm:max-h-full sm:w-[22.5rem] sm:shrink-0 sm:rounded-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r sm:pb-4",children:[B.jsx("div",{"aria-hidden":"true",className:"mx-auto mb-3 h-1 w-12 rounded-full bg-white/25 sm:hidden"}),B.jsxs("div",{className:"flex items-start justify-between gap-4",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),B.jsx("h2",{className:"mt-1 text-2xl font-bold",children:"Satellite Tracker"})]}),B.jsx("button",{"aria-label":"Close control panel",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold transition hover:bg-white/20",onClick:()=>ge(!1),type:"button",children:"Close"})]}),B.jsx("p",{className:"mt-2 text-sm text-slate-300",children:y}),B.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2",children:[B.jsxs("span",{className:"text-sm font-semibold",children:[S.length.toLocaleString()," satellites"]}),B.jsxs("span",{className:"text-xs text-slate-400",children:[ln.length.toLocaleString()," visible ·"," ",He()]})]}),B.jsx("nav",{"aria-label":"Satellite explorer",className:"mt-3 grid grid-cols-3 gap-1 rounded-xl bg-black/30 p-1",children:["catalog","favorites","tracked"].map(be=>B.jsxs("button",{"aria-pressed":xe===be,className:`rounded-lg px-2 py-2 text-xs font-bold capitalize ${xe===be?"bg-cyan-500 text-white":"text-slate-300 hover:bg-white/10"}`,onClick:()=>qe(be),type:"button",children:[be," ",be==="favorites"?pe.length:be==="tracked"?Fe.length:""]},be))}),B.jsx("div",{className:"mt-3 flex gap-1",children:Object.entries(fx).map(([be,_t])=>B.jsx("button",{className:`px-2 py-1 rounded-full text-xs transition ${fe===be?"bg-cyan-500 text-white":"bg-white/10 hover:bg-white/20"}`,"aria-pressed":fe===be,onClick:()=>{Oe(be),g("defaultAltitudeFilter",be)},type:"button",children:_t.label},be))}),B.jsxs("label",{className:"mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-400",children:["Find by name or NORAD ID",B.jsx("input",{className:"mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-slate-500 focus:border-cyan-300",onChange:be=>se(be.target.value),placeholder:"e.g. Starlink, Hubble, 25544",type:"search",value:A})]}),An.length>0&&B.jsx("div",{className:"mt-2 space-y-1",children:An.slice(0,xe==="catalog"?qd:void 0).map(be=>B.jsxs("button",{className:`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${be.noradId===M?"bg-cyan-300/20 text-cyan-100":"bg-white/5 hover:bg-white/10"}`,onClick:()=>Wt(be.noradId),type:"button",children:[B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("span",{className:"truncate font-medium",children:be.name}),W(be.noradId)&&B.jsx("span",{className:"text-yellow-400",children:"★"}),V(be.noradId)&&B.jsx("span",{className:"text-blue-400",children:"📍"})]}),B.jsx("span",{className:"ml-2 shrink-0 text-xs text-slate-400",children:be.noradId})]},be.noradId))}),An.length===0&&xe!=="catalog"&&B.jsxs("p",{className:"mt-3 text-sm text-slate-400",children:["No ",xe," satellites yet."]}),B.jsx("h3",{className:"mt-4 truncate text-lg font-bold",children:(I==null?void 0:I.name)??"Select a satellite"}),I&&B.jsxs("p",{className:"text-xs text-slate-400",children:["NORAD ",I.noradId,fe!=="all"&&I.altitudeClass!==fe?" · Outside current filter":""]}),I&&B.jsx("button",{className:"mt-2 text-xs font-semibold text-cyan-300 underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-100",onClick:an,type:"button",children:"Clear selection"}),B.jsxs("dl",{className:"mt-3 grid grid-cols-2 gap-3 text-sm",children:[B.jsx(ic,{label:"Latitude",children:I?nm(I.lat,"N","S"):"—"}),B.jsx(ic,{label:"Longitude",children:I?nm(I.lng,"E","W"):"—"}),B.jsx(ic,{label:"Altitude",children:I?`${I.altitudeKm.toFixed(0)} km`:"—"}),B.jsx(ic,{label:"Speed",children:I!=null&&I.velocityKph?`${I.velocityKph.toLocaleString(void 0,{maximumFractionDigits:0})} km/h`:"—"})]}),B.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[B.jsx(Ii,{onClick:()=>{ve(0),ge(!1),De(!0)},children:"Browse all"}),B.jsx(Ii,{onClick:()=>Y(be=>!be),children:J?"Stop following":"Follow selected"}),B.jsx(Ii,{onClick:()=>k(be=>!be),children:R?"Hide orbit":"Show orbit"}),B.jsx(Ii,{onClick:()=>{var be;return(be=i.current)==null?void 0:be.pointOfView({altitude:Math.max(3.2,...ln.map(_t=>_t.alt*.75+1.5))},900)},children:"Fit visible"}),B.jsx(Ii,{onClick:()=>{G(null),de().then(be=>{var _t;G(null),(_t=i.current)==null||_t.pointOfView({lat:be.lat,lng:be.lng,altitude:1.5},1e3)}).catch(()=>G("Location access failed. Check browser permission and try again."))},children:"Locate me"}),B.jsx(Ii,{onClick:b,children:"Refresh"}),I&&B.jsx(Ii,{onClick:()=>re(I.noradId),children:W(I.noradId)?"★ Favorited":"☆ Favorite"}),I&&B.jsx(Ii,{onClick:()=>{if(!V(I.noradId)&&Fe.length>=10){G("Tracking is limited to 10 satellites. Remove one before adding another.");return}Se(I.noradId)},children:V(I.noradId)?"📍 Tracked":"📍 Track"}),ee&&I&&B.jsx(Ii,{onClick:Mt,children:"Predict Pass"}),ee&&B.jsx(Ii,{onClick:K,children:"Clear location"})]}),w&&B.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"Loading the shared satellite snapshot\\u2026"}),ft&&B.jsx("p",{role:"status",className:"mt-3 text-sm text-amber-300",children:ft}),_&&B.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Last updated: ",new Date(_).toLocaleString()]}),B.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Orbital data:"," ",B.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),Fe.length>0&&B.jsxs("div",{className:"mt-3",children:[B.jsxs("p",{className:"text-xs text-slate-400 mb-2",children:["Tracking ",Fe.length," satellites"]}),B.jsx("button",{className:"rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Ee,type:"button",children:"Clear all tracked"})]})]}),et&&B.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:B.jsxs("section",{ref:rt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"favorites-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[B.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Favorites"}),B.jsxs("h2",{id:"favorites-title",className:"mt-1 text-2xl font-bold",children:[pe.length," Favorite Satellites"]}),B.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Quick access to your favorite satellites."})]}),B.jsx("button",{"aria-label":"Close favorites",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Ae(!1),type:"button",children:"Close"})]}),B.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:Rt.length>0?Rt.map(be=>B.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${be.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Wt(be.noradId),Ae(!1)},type:"button",children:[B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("span",{className:"truncate font-medium",children:be.name}),V(be.noradId)&&B.jsx("span",{className:"text-blue-400",children:"📍"})]}),B.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:be.noradId})]},be.noradId)):B.jsx("p",{className:"p-4 text-center text-slate-400",children:"No favorites yet. Add satellites to favorites from the control panel."})}),pe.length>0&&B.jsx("footer",{className:"flex justify-end gap-3 border-t border-white/10 p-4",children:B.jsx("button",{className:"rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/30",onClick:ie,type:"button",children:"Clear all favorites"})})]})}),je&&B.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:B.jsxs("section",{ref:vt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"timelapse-title",className:"flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[B.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Time Lapse"}),B.jsx("h2",{id:"timelapse-title",className:"mt-1 text-2xl font-bold",children:"Time Lapse Controls"}),B.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Watch satellite movement at accelerated speeds."})]}),B.jsx("button",{"aria-label":"Close time lapse controls",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>T(!1),type:"button",children:"Close"})]}),B.jsx("div",{className:"flex-1 p-4",children:B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{className:"flex items-center justify-between",children:[B.jsx("span",{className:"text-sm text-slate-300",children:"Status"}),B.jsx("span",{className:`rounded-full px-3 py-1 text-sm ${U?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:U?"Active":"Stopped"})]}),B.jsxs("div",{children:[B.jsx("label",{className:"block text-sm text-slate-300 mb-2",children:"Speed"}),B.jsx("div",{className:"grid grid-cols-4 gap-2",children:Z.map(be=>B.jsx("button",{className:`rounded-lg border px-3 py-2 text-sm transition ${Le===be?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>le(be),type:"button",children:Ne(be)},be))})]}),B.jsxs("div",{className:"flex gap-2",children:[B.jsxs("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:ne,type:"button",children:[U?"Stop":"Start"," Time Lapse"]}),B.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20",onClick:ye,type:"button",children:"Reset to Now"})]})]})})]})}),Ze&&I&&B.jsx(Nx,{passes:Me,isCalculating:Te,error:Pe,onClose:()=>{O(),ze(!1)},onCalculateTracked:()=>{Xe([...new Set([...Fe,I.noradId])])},selectedSatelliteName:on()}),dt&&B.jsx(Dx,{settings:m,onUpdate:g,onReset:v,onClose:()=>ut(!1)}),Ie&&B.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:B.jsxs("section",{ref:At,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"catalog-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[B.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[B.jsxs("div",{children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),B.jsxs("h2",{id:"catalog-title",className:"mt-1 text-2xl font-bold",children:["All ",Ot.length.toLocaleString()," satellites"]}),B.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Select any satellite to view its telemetry and orbit."})]}),B.jsx("button",{"aria-label":"Close satellite catalog",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>De(!1),type:"button",children:"Close"})]}),B.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:Ge.map(be=>B.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${be.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Wt(be.noradId),De(!1)},type:"button",children:[B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("span",{className:"truncate font-medium",children:be.name}),W(be.noradId)&&B.jsx("span",{className:"text-yellow-400",children:"★"}),V(be.noradId)&&B.jsx("span",{className:"text-blue-400",children:"📍"})]}),B.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:be.noradId})]},be.noradId))}),B.jsxs("footer",{className:"flex items-center justify-between gap-3 border-t border-white/10 p-4",children:[B.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:Ve===0,onClick:()=>ve(be=>Math.max(0,be-1)),type:"button",children:"Previous"}),B.jsxs("p",{className:"text-sm text-slate-400",children:["Page ",Ve+1," of ",Ft]}),B.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:Ve>=Ft-1,onClick:()=>ve(be=>Math.min(Ft-1,be+1)),type:"button",children:"Next"})]})]})})]})},ic=({label:i,children:e})=>B.jsxs("div",{className:"rounded-xl bg-white/10 p-3",children:[B.jsx("dt",{className:"text-slate-400",children:i}),B.jsx("dd",{className:"font-semibold",children:e})]}),Ii=({children:i,onClick:e})=>B.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20",onClick:e,type:"button",children:i}),c2=()=>B.jsxs("main",{className:"relative h-[100dvh] w-full overflow-hidden bg-black",children:[B.jsxs("header",{className:"pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-4 pb-10 pt-[max(1rem,env(safe-area-inset-top))] text-center text-white",children:[B.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90",children:"Orbit Radar"}),B.jsx("h1",{className:"mt-1 text-2xl font-black drop-shadow-lg sm:text-4xl",children:"Satellite Tracker"})]}),B.jsx(l2,{})]});H_.createRoot(document.getElementById("root")).render(B.jsx($g.StrictMode,{children:B.jsx(c2,{})}));export{So as $,E2 as A,Bn as B,Pt as C,tr as D,Y0 as E,Jt as F,Yl as G,bi as H,Rg as I,G0 as J,E0 as K,D2 as L,Vt as M,aa as N,Tn as O,$n as P,$0 as Q,$g as R,or as S,m2 as T,xS as U,$e as V,w2 as W,MT as X,ki as Y,ga as Z,h2 as _,q as a,p2 as a0,N2 as a1,mf as a2,ls as a3,P0 as a4,ps as a5,yc as a6,Fr as a7,R2 as a8,y2 as a9,Ai as aa,S2 as ab,L2 as ac,uf as ad,A2 as ae,C2 as af,Mo as ag,_2 as ah,M2 as ai,d2 as aj,f2 as ak,mi as b,lT as c,F0 as d,v2 as e,g2 as f,Yg as g,Ui as h,si as i,P2 as j,va as k,Mn as l,gs as m,x2 as n,b2 as o,Ke as p,I2 as q,me as r,Sf as s,T2 as t,fT as u,dT as v,W0 as w,YT as x,Ti as y,WT as z};
