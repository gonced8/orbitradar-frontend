var kx=Object.defineProperty;var Bx=(i,e,t)=>e in i?kx(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var jp=(i,e,t)=>Bx(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function t0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var nd={exports:{}},Za={},id={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Hx(){if(Xp)return At;Xp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(U,X,Ne){this.props=U,this.context=X,this.refs=w,this.updater=Ne||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,X){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,X,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(U,X,Ne){this.props=U,this.context=X,this.refs=w,this.updater=Ne||y}var E=D.prototype=new x;E.constructor=D,M(E,S.prototype),E.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function I(U,X,Ne){var Q,ie={},ue=null,_e=null;if(X!=null)for(Q in X.ref!==void 0&&(_e=X.ref),X.key!==void 0&&(ue=""+X.key),X)k.call(X,Q)&&!F.hasOwnProperty(Q)&&(ie[Q]=X[Q]);var De=arguments.length-2;if(De===1)ie.children=Ne;else if(1<De){for(var Be=Array(De),He=0;He<De;He++)Be[He]=arguments[He+2];ie.children=Be}if(U&&U.defaultProps)for(Q in De=U.defaultProps,De)ie[Q]===void 0&&(ie[Q]=De[Q]);return{$$typeof:i,type:U,key:ue,ref:_e,props:ie,_owner:N.current}}function L(U,X){return{$$typeof:i,type:U.type,key:X,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===i}function B(U){var X={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return X[Ne]})}var Y=/\/+/g;function J(U,X){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):X.toString(36)}function te(U,X,Ne,Q,ie){var ue=typeof U;(ue==="undefined"||ue==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(ue){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case i:case e:_e=!0}}if(_e)return _e=U,ie=ie(_e),U=Q===""?"."+J(_e,0):Q,R(ie)?(Ne="",U!=null&&(Ne=U.replace(Y,"$&/")+"/"),te(ie,X,Ne,"",function(He){return He})):ie!=null&&(A(ie)&&(ie=L(ie,Ne+(!ie.key||_e&&_e.key===ie.key?"":(""+ie.key).replace(Y,"$&/")+"/")+U)),X.push(ie)),1;if(_e=0,Q=Q===""?".":Q+":",R(U))for(var De=0;De<U.length;De++){ue=U[De];var Be=Q+J(ue,De);_e+=te(ue,X,Ne,Be,ie)}else if(Be=v(U),typeof Be=="function")for(U=Be.call(U),De=0;!(ue=U.next()).done;)ue=ue.value,Be=Q+J(ue,De++),_e+=te(ue,X,Ne,Be,ie);else if(ue==="object")throw X=String(U),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return _e}function ce(U,X,Ne){if(U==null)return U;var Q=[],ie=0;return te(U,Q,"","",function(ue){return X.call(Ne,ue,ie++)}),Q}function Z(U){if(U._status===-1){var X=U._result;X=X(),X.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=X)}if(U._status===1)return U._result.default;throw U._result}var ge={current:null},G={transition:null},ne={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:G,ReactCurrentOwner:N};function re(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:ce,forEach:function(U,X,Ne){ce(U,function(){X.apply(this,arguments)},Ne)},count:function(U){var X=0;return ce(U,function(){X++}),X},toArray:function(U){return ce(U,function(X){return X})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},At.Component=S,At.Fragment=t,At.Profiler=a,At.PureComponent=D,At.StrictMode=s,At.Suspense=f,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,At.act=re,At.cloneElement=function(U,X,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=M({},U.props),ie=U.key,ue=U.ref,_e=U._owner;if(X!=null){if(X.ref!==void 0&&(ue=X.ref,_e=N.current),X.key!==void 0&&(ie=""+X.key),U.type&&U.type.defaultProps)var De=U.type.defaultProps;for(Be in X)k.call(X,Be)&&!F.hasOwnProperty(Be)&&(Q[Be]=X[Be]===void 0&&De!==void 0?De[Be]:X[Be])}var Be=arguments.length-2;if(Be===1)Q.children=Ne;else if(1<Be){De=Array(Be);for(var He=0;He<Be;He++)De[He]=arguments[He+2];Q.children=De}return{$$typeof:i,type:U.type,key:ie,ref:ue,props:Q,_owner:_e}},At.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},At.createElement=I,At.createFactory=function(U){var X=I.bind(null,U);return X.type=U,X},At.createRef=function(){return{current:null}},At.forwardRef=function(U){return{$$typeof:u,render:U}},At.isValidElement=A,At.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:Z}},At.memo=function(U,X){return{$$typeof:h,type:U,compare:X===void 0?null:X}},At.startTransition=function(U){var X=G.transition;G.transition={};try{U()}finally{G.transition=X}},At.unstable_act=re,At.useCallback=function(U,X){return ge.current.useCallback(U,X)},At.useContext=function(U){return ge.current.useContext(U)},At.useDebugValue=function(){},At.useDeferredValue=function(U){return ge.current.useDeferredValue(U)},At.useEffect=function(U,X){return ge.current.useEffect(U,X)},At.useId=function(){return ge.current.useId()},At.useImperativeHandle=function(U,X,Ne){return ge.current.useImperativeHandle(U,X,Ne)},At.useInsertionEffect=function(U,X){return ge.current.useInsertionEffect(U,X)},At.useLayoutEffect=function(U,X){return ge.current.useLayoutEffect(U,X)},At.useMemo=function(U,X){return ge.current.useMemo(U,X)},At.useReducer=function(U,X,Ne){return ge.current.useReducer(U,X,Ne)},At.useRef=function(U){return ge.current.useRef(U)},At.useState=function(U){return ge.current.useState(U)},At.useSyncExternalStore=function(U,X,Ne){return ge.current.useSyncExternalStore(U,X,Ne)},At.useTransition=function(){return ge.current.useTransition()},At.version="18.3.1",At}var qp;function df(){return qp||(qp=1,id.exports=Hx()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Vx(){if(Yp)return Za;Yp=1;var i=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var m,g={},v=null,y=null;h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)s.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:v,ref:y,props:g,_owner:a.current}}return Za.Fragment=t,Za.jsx=c,Za.jsxs=c,Za}var $p;function Gx(){return $p||($p=1,nd.exports=Vx()),nd.exports}var z=Gx(),fe=df();const n0=t0(fe);var Tl={},rd={exports:{}},Xn={},sd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Wx(){return Kp||(Kp=1,function(i){function e(G,ne){var re=G.length;G.push(ne);e:for(;0<re;){var U=re-1>>>1,X=G[U];if(0<a(X,ne))G[U]=ne,G[re]=X,re=U;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ne=G[0],re=G.pop();if(re!==ne){G[0]=re;e:for(var U=0,X=G.length,Ne=X>>>1;U<Ne;){var Q=2*(U+1)-1,ie=G[Q],ue=Q+1,_e=G[ue];if(0>a(ie,re))ue<X&&0>a(_e,ie)?(G[U]=_e,G[ue]=re,U=ue):(G[U]=ie,G[Q]=re,U=Q);else if(ue<X&&0>a(_e,re))G[U]=_e,G[ue]=re,U=ue;else break e}}return ne}function a(G,ne){var re=G.sortIndex-ne.sortIndex;return re!==0?re:G.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();i.unstable_now=function(){return c.now()-u}}var f=[],h=[],m=1,g=null,v=3,y=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(G){for(var ne=t(h);ne!==null;){if(ne.callback===null)s(h);else if(ne.startTime<=G)s(h),ne.sortIndex=ne.expirationTime,e(f,ne);else break;ne=t(h)}}function R(G){if(w=!1,E(G),!M)if(t(f)!==null)M=!0,Z(k);else{var ne=t(h);ne!==null&&ge(R,ne.startTime-G)}}function k(G,ne){M=!1,w&&(w=!1,x(I),I=-1),y=!0;var re=v;try{for(E(ne),g=t(f);g!==null&&(!(g.expirationTime>ne)||G&&!B());){var U=g.callback;if(typeof U=="function"){g.callback=null,v=g.priorityLevel;var X=U(g.expirationTime<=ne);ne=i.unstable_now(),typeof X=="function"?g.callback=X:g===t(f)&&s(f),E(ne)}else s(f);g=t(f)}if(g!==null)var Ne=!0;else{var Q=t(h);Q!==null&&ge(R,Q.startTime-ne),Ne=!1}return Ne}finally{g=null,v=re,y=!1}}var N=!1,F=null,I=-1,L=5,A=-1;function B(){return!(i.unstable_now()-A<L)}function Y(){if(F!==null){var G=i.unstable_now();A=G;var ne=!0;try{ne=F(!0,G)}finally{ne?J():(N=!1,F=null)}}else N=!1}var J;if(typeof D=="function")J=function(){D(Y)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ce=te.port2;te.port1.onmessage=Y,J=function(){ce.postMessage(null)}}else J=function(){S(Y,0)};function Z(G){F=G,N||(N=!0,J())}function ge(G,ne){I=S(function(){G(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(G){G.callback=null},i.unstable_continueExecution=function(){M||y||(M=!0,Z(k))},i.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<G?Math.floor(1e3/G):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(G){switch(v){case 1:case 2:case 3:var ne=3;break;default:ne=v}var re=v;v=ne;try{return G()}finally{v=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(G,ne){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var re=v;v=G;try{return ne()}finally{v=re}},i.unstable_scheduleCallback=function(G,ne,re){var U=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,G){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=re+X,G={id:m++,callback:ne,priorityLevel:G,startTime:re,expirationTime:X,sortIndex:-1},re>U?(G.sortIndex=re,e(h,G),t(f)===null&&G===t(h)&&(w?(x(I),I=-1):w=!0,ge(R,re-U))):(G.sortIndex=X,e(f,G),M||y||(M=!0,Z(k))),G},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(G){var ne=v;return function(){var re=v;v=ne;try{return G.apply(this,arguments)}finally{v=re}}}}(ad)),ad}var Jp;function jx(){return Jp||(Jp=1,sd.exports=Wx()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Xx(){if(Zp)return Xn;Zp=1;var i=df(),e=jx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,o,d){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,o,d){if(r===null||typeof r>"u"||y(n,r,o,d))return!0;if(d)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,o,d,p,_,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);S[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function E(n,r,o,d){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,p,d)&&(o=null),d||p===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,d=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,d?n.setAttributeNS(d,r,o):n.setAttribute(r,o))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),G=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function X(n){if(U===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Ne=!1;function Q(n,r){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var d=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){d=he}n.call(r.prototype)}else{try{throw Error()}catch(he){d=he}n()}}catch(he){if(he&&d&&typeof he.stack=="string"){for(var p=he.stack.split(`
`),_=d.stack.split(`
`),b=p.length-1,H=_.length-1;1<=b&&0<=H&&p[b]!==_[H];)H--;for(;1<=b&&0<=H;b--,H--)if(p[b]!==_[H]){if(b!==1||H!==1)do if(b--,H--,0>H||p[b]!==_[H]){var j=`
`+p[b].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=b&&0<=H);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?X(n):""}function ie(n){switch(n.tag){case 5:return X(n.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function ue(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case L:return"Profiler";case I:return"StrictMode";case J:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case Y:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ce:return r=n.displayName||null,r!==null?r:ue(n.type)||"Memo";case Z:r=n._payload,n=n._init;try{return ue(n(r))}catch{}}return null}function _e(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function He(n){var r=Be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,_=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(b){d=""+b,_.call(this,b)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return d},setValue:function(b){d=""+b},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function V(n){n._valueTracker||(n._valueTracker=He(n))}function ve(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),d="";return n&&(d=Be(n)?n.checked?"true":"false":n.value),n=d,n!==o?(r.setValue(n),!0):!1}function Ee(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Te(n,r){var o=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Se(n,r){var o=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;o=De(r.value!=null?r.value:o),n._wrapperState={initialChecked:d,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ae(n,r){r=r.checked,r!=null&&E(n,"checked",r,!1)}function Le(n,r){Ae(n,r);var o=De(r.value),d=r.type;if(o!=null)d==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?qe(n,r.type,o):r.hasOwnProperty("defaultValue")&&qe(n,r.type,De(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function be(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function qe(n,r,o){(r!=="number"||Ee(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var O=Array.isArray;function C(n,r,o,d){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&d&&(n[o].defaultSelected=!0)}else{for(o=""+De(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function se(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ye(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(O(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:De(o)}}function pe(n,r){var o=De(r.value),d=De(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),d!=null&&(n.defaultValue=""+d)}function Me(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function je(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?je(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ue,et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,d,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,d,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ue=Ue||document.createElement("div"),Ue.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Re(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T=["Webkit","ms","Moz","O"];Object.keys(Xe).forEach(function(n){T.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Xe[r]=Xe[n]})});function Je(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Xe.hasOwnProperty(n)&&Xe[n]?(""+r).trim():r+"px"}function ze(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var d=o.indexOf("--")===0,p=Je(o,r[o],d);o==="float"&&(o="cssFloat"),d?n.setProperty(o,p):n[o]=p}}var lt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,r){if(r){if(lt[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ht(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W=null;function Ge(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var me=null,xe=null,Ce=null;function rt(n){if(n=Fa(n)){if(typeof me!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Bo(r),me(n.stateNode,n.type,r))}}function vt(n){xe?Ce?Ce.push(n):Ce=[n]:xe=n}function wt(){if(xe){var n=xe,r=Ce;if(Ce=xe=null,rt(n),r)for(n=0;n<r.length;n++)rt(r[n])}}function Ct(n,r){return n(r)}function ft(){}var Rt=!1;function It(n,r,o){if(Rt)return n(r,o);Rt=!0;try{return Ct(n,r,o)}finally{Rt=!1,(xe!==null||Ce!==null)&&(ft(),wt())}}function Ut(n,r){var o=n.stateNode;if(o===null)return null;var d=Bo(o);if(d===null)return null;o=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Ve=!1;if(u)try{var $t={};Object.defineProperty($t,"passive",{get:function(){Ve=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch{Ve=!1}function Qt(n,r,o,d,p,_,b,H,j){var he=Array.prototype.slice.call(arguments,3);try{r.apply(o,he)}catch(Fe){this.onError(Fe)}}var rn=!1,St=null,on=!1,wn=null,ri={onError:function(n){rn=!0,St=n}};function Dn(n,r,o,d,p,_,b,H,j){rn=!1,St=null,Qt.apply(ri,arguments)}function ln(n,r,o,d,p,_,b,H,j){if(Dn.apply(this,arguments),rn){if(rn){var he=St;rn=!1,St=null}else throw Error(t(198));on||(on=!0,wn=he)}}function we(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function P(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function q(n){if(we(n)!==n)throw Error(t(188))}function le(n){var r=n.alternate;if(!r){if(r=we(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,d=r;;){var p=o.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){o=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===o)return q(p),n;if(_===d)return q(p),r;_=_.sibling}throw Error(t(188))}if(o.return!==d.return)o=p,d=_;else{for(var b=!1,H=p.child;H;){if(H===o){b=!0,o=p,d=_;break}if(H===d){b=!0,d=p,o=_;break}H=H.sibling}if(!b){for(H=_.child;H;){if(H===o){b=!0,o=_,d=p;break}if(H===d){b=!0,d=_,o=p;break}H=H.sibling}if(!b)throw Error(t(189))}}if(o.alternate!==d)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function oe(n){return n=le(n),n!==null?ee(n):null}function ee(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ee(n);if(r!==null)return r;n=n.sibling}return null}var Pe=e.unstable_scheduleCallback,Ye=e.unstable_cancelCallback,tt=e.unstable_shouldYield,st=e.unstable_requestPaint,Ze=e.unstable_now,pt=e.unstable_getCurrentPriorityLevel,ct=e.unstable_ImmediatePriority,Tt=e.unstable_UserBlockingPriority,Nt=e.unstable_NormalPriority,kt=e.unstable_LowPriority,jt=e.unstable_IdlePriority,yt=null,nt=null;function tn(n){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:Kn,In=Math.log,$n=Math.LN2;function Kn(n){return n>>>=0,n===0?32:31-(In(n)/$n|0)|0}var si=64,Ot=4194304;function cn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bn(n,r){var o=n.pendingLanes;if(o===0)return 0;var d=0,p=n.suspendedLanes,_=n.pingedLanes,b=o&268435455;if(b!==0){var H=b&~p;H!==0?d=cn(H):(_&=b,_!==0&&(d=cn(_)))}else b=o&~p,b!==0?d=cn(b):_!==0&&(d=cn(_));if(d===0)return 0;if(r!==0&&r!==d&&(r&p)===0&&(p=d&-d,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((d&4)!==0&&(d|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)o=31-_t(r),p=1<<o,d|=n[o],r&=~p;return d}function mn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,r){for(var o=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var b=31-_t(_),H=1<<b,j=p[b];j===-1?((H&o)===0||(H&d)!==0)&&(p[b]=mn(H,r)):j<=r&&(n.expiredLanes|=H),_&=~H}}function Hr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vr(){var n=si;return si<<=1,(si&4194240)===0&&(si=64),n}function _a(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Gr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-_t(r),n[r]=o}function Tc(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-_t(o),_=1<<p;r[p]=0,d[p]=-1,n[p]=-1,o&=~_}}function ya(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var d=31-_t(o),p=1<<d;p&r|n[d]&r&&(n[d]|=r),o&=~p}}var Dt=0;function Eo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wo,Ac,Tf,Af,Cf,Cc=!1,To=[],ar=null,or=null,lr=null,Sa=new Map,Ma=new Map,cr=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(n,r){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(r.pointerId)}}function Ea(n,r,o,d,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:o,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},r!==null&&(r=Fa(r),r!==null&&Ac(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function lv(n,r,o,d,p){switch(r){case"focusin":return ar=Ea(ar,n,r,o,d,p),!0;case"dragenter":return or=Ea(or,n,r,o,d,p),!0;case"mouseover":return lr=Ea(lr,n,r,o,d,p),!0;case"pointerover":var _=p.pointerId;return Sa.set(_,Ea(Sa.get(_)||null,n,r,o,d,p)),!0;case"gotpointercapture":return _=p.pointerId,Ma.set(_,Ea(Ma.get(_)||null,n,r,o,d,p)),!0}return!1}function Rf(n){var r=Wr(n.target);if(r!==null){var o=we(r);if(o!==null){if(r=o.tag,r===13){if(r=P(o),r!==null){n.blockedOn=r,Cf(n.priority,function(){Tf(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ao(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Rc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var d=new o.constructor(o.type,o);W=d,o.target.dispatchEvent(d),W=null}else return r=Fa(o),r!==null&&Ac(r),n.blockedOn=o,!1;r.shift()}return!0}function Pf(n,r,o){Ao(n)&&o.delete(r)}function cv(){Cc=!1,ar!==null&&Ao(ar)&&(ar=null),or!==null&&Ao(or)&&(or=null),lr!==null&&Ao(lr)&&(lr=null),Sa.forEach(Pf),Ma.forEach(Pf)}function wa(n,r){n.blockedOn===r&&(n.blockedOn=null,Cc||(Cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cv)))}function Ta(n){function r(p){return wa(p,n)}if(0<To.length){wa(To[0],n);for(var o=1;o<To.length;o++){var d=To[o];d.blockedOn===n&&(d.blockedOn=null)}}for(ar!==null&&wa(ar,n),or!==null&&wa(or,n),lr!==null&&wa(lr,n),Sa.forEach(r),Ma.forEach(r),o=0;o<cr.length;o++)d=cr[o],d.blockedOn===n&&(d.blockedOn=null);for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)Rf(o),o.blockedOn===null&&cr.shift()}var xs=R.ReactCurrentBatchConfig,Co=!0;function uv(n,r,o,d){var p=Dt,_=xs.transition;xs.transition=null;try{Dt=1,bc(n,r,o,d)}finally{Dt=p,xs.transition=_}}function dv(n,r,o,d){var p=Dt,_=xs.transition;xs.transition=null;try{Dt=4,bc(n,r,o,d)}finally{Dt=p,xs.transition=_}}function bc(n,r,o,d){if(Co){var p=Rc(n,r,o,d);if(p===null)Xc(n,r,d,bo,o),bf(n,d);else if(lv(p,n,r,o,d))d.stopPropagation();else if(bf(n,d),r&4&&-1<ov.indexOf(n)){for(;p!==null;){var _=Fa(p);if(_!==null&&wo(_),_=Rc(n,r,o,d),_===null&&Xc(n,r,d,bo,o),_===p)break;p=_}p!==null&&d.stopPropagation()}else Xc(n,r,d,null,o)}}var bo=null;function Rc(n,r,o,d){if(bo=null,n=Ge(d),n=Wr(n),n!==null)if(r=we(n),r===null)n=null;else if(o=r.tag,o===13){if(n=P(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return bo=n,null}function Lf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pt()){case ct:return 1;case Tt:return 4;case Nt:case kt:return 16;case jt:return 536870912;default:return 16}default:return 16}}var ur=null,Pc=null,Ro=null;function Nf(){if(Ro)return Ro;var n,r=Pc,o=r.length,d,p="value"in ur?ur.value:ur.textContent,_=p.length;for(n=0;n<o&&r[n]===p[n];n++);var b=o-n;for(d=1;d<=b&&r[o-d]===p[_-d];d++);return Ro=p.slice(n,1<d?1-d:void 0)}function Po(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function Df(){return!1}function Jn(n){function r(o,d,p,_,b){this._reactName=o,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=b,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(o=n[H],this[H]=o?o(_):_[H]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Lo:Df,this.isPropagationStopped=Df,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),r}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Jn(_s),Aa=re({},_s,{view:0,detail:0}),fv=Jn(Aa),Nc,Dc,Ca,No=re({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(Nc=n.screenX-Ca.screenX,Dc=n.screenY-Ca.screenY):Dc=Nc=0,Ca=n),Nc)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),If=Jn(No),hv=re({},No,{dataTransfer:0}),pv=Jn(hv),mv=re({},Aa,{relatedTarget:0}),Ic=Jn(mv),gv=re({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),vv=Jn(gv),xv=re({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_v=Jn(xv),yv=re({},_s,{data:0}),Uf=Jn(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ev[n])?!!r[n]:!1}function Uc(){return wv}var Tv=re({},Aa,{key:function(n){if(n.key){var r=Sv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Av=Jn(Tv),Cv=re({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Jn(Cv),bv=re({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),Rv=Jn(bv),Pv=re({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=Jn(Pv),Nv=re({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=Jn(Nv),Iv=[9,13,27,32],Oc=u&&"CompositionEvent"in window,ba=null;u&&"documentMode"in document&&(ba=document.documentMode);var Uv=u&&"TextEvent"in window&&!ba,Ff=u&&(!Oc||ba&&8<ba&&11>=ba),zf=" ",kf=!1;function Bf(n,r){switch(n){case"keyup":return Iv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function Ov(n,r){switch(n){case"compositionend":return Hf(r);case"keypress":return r.which!==32?null:(kf=!0,zf);case"textInput":return n=r.data,n===zf&&kf?null:n;default:return null}}function Fv(n,r){if(ys)return n==="compositionend"||!Oc&&Bf(n,r)?(n=Nf(),Ro=Pc=ur=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ff&&r.locale!=="ko"?null:r.data;default:return null}}var zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!zv[n.type]:r==="textarea"}function Gf(n,r,o,d){vt(d),r=Fo(r,"onChange"),0<r.length&&(o=new Lc("onChange","change",null,o,d),n.push({event:o,listeners:r}))}var Ra=null,Pa=null;function kv(n){oh(n,0)}function Do(n){var r=Ts(n);if(ve(r))return n}function Bv(n,r){if(n==="change")return r}var Wf=!1;if(u){var Fc;if(u){var zc="oninput"in document;if(!zc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),zc=typeof jf.oninput=="function"}Fc=zc}else Fc=!1;Wf=Fc&&(!document.documentMode||9<document.documentMode)}function Xf(){Ra&&(Ra.detachEvent("onpropertychange",qf),Pa=Ra=null)}function qf(n){if(n.propertyName==="value"&&Do(Pa)){var r=[];Gf(r,Pa,n,Ge(n)),It(kv,r)}}function Hv(n,r,o){n==="focusin"?(Xf(),Ra=r,Pa=o,Ra.attachEvent("onpropertychange",qf)):n==="focusout"&&Xf()}function Vv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Do(Pa)}function Gv(n,r){if(n==="click")return Do(r)}function Wv(n,r){if(n==="input"||n==="change")return Do(r)}function jv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mi=typeof Object.is=="function"?Object.is:jv;function La(n,r){if(mi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),d=Object.keys(r);if(o.length!==d.length)return!1;for(d=0;d<o.length;d++){var p=o[d];if(!f.call(r,p)||!mi(n[p],r[p]))return!1}return!0}function Yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $f(n,r){var o=Yf(n);n=0;for(var d;o;){if(o.nodeType===3){if(d=n+o.textContent.length,n<=r&&d>=r)return{node:o,offset:r-n};n=d}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Yf(o)}}function Kf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jf(){for(var n=window,r=Ee();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ee(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Xv(n){var r=Jf(),o=n.focusedElem,d=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Kf(o.ownerDocument.documentElement,o)){if(d!==null&&kc(o)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!n.extend&&_>d&&(p=d,d=_,_=p),p=$f(o,_);var b=$f(o,d);p&&b&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>d?(n.addRange(r),n.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qv=u&&"documentMode"in document&&11>=document.documentMode,Ss=null,Bc=null,Na=null,Hc=!1;function Zf(n,r,o){var d=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Hc||Ss==null||Ss!==Ee(d)||(d=Ss,"selectionStart"in d&&kc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Na&&La(Na,d)||(Na=d,d=Fo(Bc,"onSelect"),0<d.length&&(r=new Lc("onSelect","select",null,r,o),n.push({event:r,listeners:d}),r.target=Ss)))}function Io(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ms={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Vc={},Qf={};u&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Uo(n){if(Vc[n])return Vc[n];if(!Ms[n])return n;var r=Ms[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Qf)return Vc[n]=r[o];return n}var eh=Uo("animationend"),th=Uo("animationiteration"),nh=Uo("animationstart"),ih=Uo("transitionend"),rh=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,r){rh.set(n,r),l(r,[n])}for(var Gc=0;Gc<sh.length;Gc++){var Wc=sh[Gc],Yv=Wc.toLowerCase(),$v=Wc[0].toUpperCase()+Wc.slice(1);dr(Yv,"on"+$v)}dr(eh,"onAnimationEnd"),dr(th,"onAnimationIteration"),dr(nh,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(ih,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function ah(n,r,o){var d=n.type||"unknown-event";n.currentTarget=o,ln(d,r,void 0,n),n.currentTarget=null}function oh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var d=n[o],p=d.event;d=d.listeners;e:{var _=void 0;if(r)for(var b=d.length-1;0<=b;b--){var H=d[b],j=H.instance,he=H.currentTarget;if(H=H.listener,j!==_&&p.isPropagationStopped())break e;ah(p,H,he),_=j}else for(b=0;b<d.length;b++){if(H=d[b],j=H.instance,he=H.currentTarget,H=H.listener,j!==_&&p.isPropagationStopped())break e;ah(p,H,he),_=j}}}if(on)throw n=wn,on=!1,wn=null,n}function Vt(n,r){var o=r[Zc];o===void 0&&(o=r[Zc]=new Set);var d=n+"__bubble";o.has(d)||(lh(r,n,2,!1),o.add(d))}function jc(n,r,o){var d=0;r&&(d|=4),lh(o,n,d,r)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[Oo]){n[Oo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Kv.has(o)||jc(o,!1,n),jc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Oo]||(r[Oo]=!0,jc("selectionchange",!1,r))}}function lh(n,r,o,d){switch(Lf(r)){case 1:var p=uv;break;case 4:p=dv;break;default:p=bc}o=p.bind(null,r,o,n),p=void 0,!Ve||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Xc(n,r,o,d,p){var _=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var b=d.tag;if(b===3||b===4){var H=d.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(b===4)for(b=d.return;b!==null;){var j=b.tag;if((j===3||j===4)&&(j=b.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;b=b.return}for(;H!==null;){if(b=Wr(H),b===null)return;if(j=b.tag,j===5||j===6){d=_=b;continue e}H=H.parentNode}}d=d.return}It(function(){var he=_,Fe=Ge(o),ke=[];e:{var Oe=rh.get(n);if(Oe!==void 0){var Qe=Lc,at=n;switch(n){case"keypress":if(Po(o)===0)break e;case"keydown":case"keyup":Qe=Av;break;case"focusin":at="focus",Qe=Ic;break;case"focusout":at="blur",Qe=Ic;break;case"beforeblur":case"afterblur":Qe=Ic;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Rv;break;case eh:case th:case nh:Qe=vv;break;case ih:Qe=Lv;break;case"scroll":Qe=fv;break;case"wheel":Qe=Dv;break;case"copy":case"cut":case"paste":Qe=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Of}var ot=(r&4)!==0,nn=!ot&&n==="scroll",ae=ot?Oe!==null?Oe+"Capture":null:Oe;ot=[];for(var $=he,de;$!==null;){de=$;var We=de.stateNode;if(de.tag===5&&We!==null&&(de=We,ae!==null&&(We=Ut($,ae),We!=null&&ot.push(Ua($,We,de)))),nn)break;$=$.return}0<ot.length&&(Oe=new Qe(Oe,at,null,o,Fe),ke.push({event:Oe,listeners:ot}))}}if((r&7)===0){e:{if(Oe=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Oe&&o!==W&&(at=o.relatedTarget||o.fromElement)&&(Wr(at)||at[Hi]))break e;if((Qe||Oe)&&(Oe=Fe.window===Fe?Fe:(Oe=Fe.ownerDocument)?Oe.defaultView||Oe.parentWindow:window,Qe?(at=o.relatedTarget||o.toElement,Qe=he,at=at?Wr(at):null,at!==null&&(nn=we(at),at!==nn||at.tag!==5&&at.tag!==6)&&(at=null)):(Qe=null,at=he),Qe!==at)){if(ot=If,We="onMouseLeave",ae="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Of,We="onPointerLeave",ae="onPointerEnter",$="pointer"),nn=Qe==null?Oe:Ts(Qe),de=at==null?Oe:Ts(at),Oe=new ot(We,$+"leave",Qe,o,Fe),Oe.target=nn,Oe.relatedTarget=de,We=null,Wr(Fe)===he&&(ot=new ot(ae,$+"enter",at,o,Fe),ot.target=de,ot.relatedTarget=nn,We=ot),nn=We,Qe&&at)t:{for(ot=Qe,ae=at,$=0,de=ot;de;de=Es(de))$++;for(de=0,We=ae;We;We=Es(We))de++;for(;0<$-de;)ot=Es(ot),$--;for(;0<de-$;)ae=Es(ae),de--;for(;$--;){if(ot===ae||ae!==null&&ot===ae.alternate)break t;ot=Es(ot),ae=Es(ae)}ot=null}else ot=null;Qe!==null&&ch(ke,Oe,Qe,ot,!1),at!==null&&nn!==null&&ch(ke,nn,at,ot,!0)}}e:{if(Oe=he?Ts(he):window,Qe=Oe.nodeName&&Oe.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Oe.type==="file")var ut=Bv;else if(Vf(Oe))if(Wf)ut=Wv;else{ut=Vv;var mt=Hv}else(Qe=Oe.nodeName)&&Qe.toLowerCase()==="input"&&(Oe.type==="checkbox"||Oe.type==="radio")&&(ut=Gv);if(ut&&(ut=ut(n,he))){Gf(ke,ut,o,Fe);break e}mt&&mt(n,Oe,he),n==="focusout"&&(mt=Oe._wrapperState)&&mt.controlled&&Oe.type==="number"&&qe(Oe,"number",Oe.value)}switch(mt=he?Ts(he):window,n){case"focusin":(Vf(mt)||mt.contentEditable==="true")&&(Ss=mt,Bc=he,Na=null);break;case"focusout":Na=Bc=Ss=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Zf(ke,o,Fe);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Zf(ke,o,Fe)}var gt;if(Oc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ys?Bf(n,o)&&(xt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(Ff&&o.locale!=="ko"&&(ys||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ys&&(gt=Nf()):(ur=Fe,Pc="value"in ur?ur.value:ur.textContent,ys=!0)),mt=Fo(he,xt),0<mt.length&&(xt=new Uf(xt,n,null,o,Fe),ke.push({event:xt,listeners:mt}),gt?xt.data=gt:(gt=Hf(o),gt!==null&&(xt.data=gt)))),(gt=Uv?Ov(n,o):Fv(n,o))&&(he=Fo(he,"onBeforeInput"),0<he.length&&(Fe=new Uf("onBeforeInput","beforeinput",null,o,Fe),ke.push({event:Fe,listeners:he}),Fe.data=gt))}oh(ke,r)})}function Ua(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Fo(n,r){for(var o=r+"Capture",d=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ut(n,o),_!=null&&d.unshift(Ua(n,_,p)),_=Ut(n,r),_!=null&&d.push(Ua(n,_,p))),n=n.return}return d}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ch(n,r,o,d,p){for(var _=r._reactName,b=[];o!==null&&o!==d;){var H=o,j=H.alternate,he=H.stateNode;if(j!==null&&j===d)break;H.tag===5&&he!==null&&(H=he,p?(j=Ut(o,_),j!=null&&b.unshift(Ua(o,j,H))):p||(j=Ut(o,_),j!=null&&b.push(Ua(o,j,H)))),o=o.return}b.length!==0&&n.push({event:r,listeners:b})}var Jv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function uh(n){return(typeof n=="string"?n:""+n).replace(Jv,`
`).replace(Zv,"")}function zo(n,r,o){if(r=uh(r),uh(n)!==r&&o)throw Error(t(425))}function ko(){}var qc=null,Yc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(n){return dh.resolve(null).then(n).catch(tx)}:Kc;function tx(n){setTimeout(function(){throw n})}function Jc(n,r){var o=r,d=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(d===0){n.removeChild(p),Ta(r);return}d--}else o!=="$"&&o!=="$?"&&o!=="$!"||d++;o=p}while(o);Ta(r)}function fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function fh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Pi="__reactFiber$"+ws,Oa="__reactProps$"+ws,Hi="__reactContainer$"+ws,Zc="__reactEvents$"+ws,nx="__reactListeners$"+ws,ix="__reactHandles$"+ws;function Wr(n){var r=n[Pi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Hi]||o[Pi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=fh(n);n!==null;){if(o=n[Pi])return o;n=fh(n)}return r}n=o,o=n.parentNode}return null}function Fa(n){return n=n[Pi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bo(n){return n[Oa]||null}var Qc=[],As=-1;function hr(n){return{current:n}}function Gt(n){0>As||(n.current=Qc[As],Qc[As]=null,As--)}function Ht(n,r){As++,Qc[As]=n.current,n.current=r}var pr={},Tn=hr(pr),Hn=hr(!1),jr=pr;function Cs(n,r){var o=n.type.contextTypes;if(!o)return pr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in o)p[_]=r[_];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Vn(n){return n=n.childContextTypes,n!=null}function Ho(){Gt(Hn),Gt(Tn)}function hh(n,r,o){if(Tn.current!==pr)throw Error(t(168));Ht(Tn,r),Ht(Hn,o)}function ph(n,r,o){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return o;d=d.getChildContext();for(var p in d)if(!(p in r))throw Error(t(108,_e(n)||"Unknown",p));return re({},o,d)}function Vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,jr=Tn.current,Ht(Tn,n),Ht(Hn,Hn.current),!0}function mh(n,r,o){var d=n.stateNode;if(!d)throw Error(t(169));o?(n=ph(n,r,jr),d.__reactInternalMemoizedMergedChildContext=n,Gt(Hn),Gt(Tn),Ht(Tn,n)):Gt(Hn),Ht(Hn,o)}var Vi=null,Go=!1,eu=!1;function gh(n){Vi===null?Vi=[n]:Vi.push(n)}function rx(n){Go=!0,gh(n)}function mr(){if(!eu&&Vi!==null){eu=!0;var n=0,r=Dt;try{var o=Vi;for(Dt=1;n<o.length;n++){var d=o[n];do d=d(!0);while(d!==null)}Vi=null,Go=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(n+1)),Pe(ct,mr),p}finally{Dt=r,eu=!1}}return null}var bs=[],Rs=0,Wo=null,jo=0,ai=[],oi=0,Xr=null,Gi=1,Wi="";function qr(n,r){bs[Rs++]=jo,bs[Rs++]=Wo,Wo=n,jo=r}function vh(n,r,o){ai[oi++]=Gi,ai[oi++]=Wi,ai[oi++]=Xr,Xr=n;var d=Gi;n=Wi;var p=32-_t(d)-1;d&=~(1<<p),o+=1;var _=32-_t(r)+p;if(30<_){var b=p-p%5;_=(d&(1<<b)-1).toString(32),d>>=b,p-=b,Gi=1<<32-_t(r)+p|o<<p|d,Wi=_+n}else Gi=1<<_|o<<p|d,Wi=n}function tu(n){n.return!==null&&(qr(n,1),vh(n,1,0))}function nu(n){for(;n===Wo;)Wo=bs[--Rs],bs[Rs]=null,jo=bs[--Rs],bs[Rs]=null;for(;n===Xr;)Xr=ai[--oi],ai[oi]=null,Wi=ai[--oi],ai[oi]=null,Gi=ai[--oi],ai[oi]=null}var Zn=null,Qn=null,Xt=!1,gi=null;function xh(n,r){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function _h(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Zn=n,Qn=fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Zn=n,Qn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Xr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Zn=n,Qn=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(Xt){var r=Qn;if(r){var o=r;if(!_h(n,r)){if(iu(n))throw Error(t(418));r=fr(o.nextSibling);var d=Zn;r&&_h(n,r)?xh(d,o):(n.flags=n.flags&-4097|2,Xt=!1,Zn=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xt=!1,Zn=n}}}function yh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function Xo(n){if(n!==Zn)return!1;if(!Xt)return yh(n),Xt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=Qn)){if(iu(n))throw Sh(),Error(t(418));for(;r;)xh(n,r),r=fr(r.nextSibling)}if(yh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){Qn=fr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}Qn=null}}else Qn=Zn?fr(n.stateNode.nextSibling):null;return!0}function Sh(){for(var n=Qn;n;)n=fr(n.nextSibling)}function Ps(){Qn=Zn=null,Xt=!1}function su(n){gi===null?gi=[n]:gi.push(n)}var sx=R.ReactCurrentBatchConfig;function za(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var d=o.stateNode}if(!d)throw Error(t(147,n));var p=d,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(b){var H=p.refs;b===null?delete H[_]:H[_]=b},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function qo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Mh(n){var r=n._init;return r(n._payload)}function Eh(n){function r(ae,$){if(n){var de=ae.deletions;de===null?(ae.deletions=[$],ae.flags|=16):de.push($)}}function o(ae,$){if(!n)return null;for(;$!==null;)r(ae,$),$=$.sibling;return null}function d(ae,$){for(ae=new Map;$!==null;)$.key!==null?ae.set($.key,$):ae.set($.index,$),$=$.sibling;return ae}function p(ae,$){return ae=Er(ae,$),ae.index=0,ae.sibling=null,ae}function _(ae,$,de){return ae.index=de,n?(de=ae.alternate,de!==null?(de=de.index,de<$?(ae.flags|=2,$):de):(ae.flags|=2,$)):(ae.flags|=1048576,$)}function b(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function H(ae,$,de,We){return $===null||$.tag!==6?($=Ku(de,ae.mode,We),$.return=ae,$):($=p($,de),$.return=ae,$)}function j(ae,$,de,We){var ut=de.type;return ut===F?Fe(ae,$,de.props.children,We,de.key):$!==null&&($.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Z&&Mh(ut)===$.type)?(We=p($,de.props),We.ref=za(ae,$,de),We.return=ae,We):(We=vl(de.type,de.key,de.props,null,ae.mode,We),We.ref=za(ae,$,de),We.return=ae,We)}function he(ae,$,de,We){return $===null||$.tag!==4||$.stateNode.containerInfo!==de.containerInfo||$.stateNode.implementation!==de.implementation?($=Ju(de,ae.mode,We),$.return=ae,$):($=p($,de.children||[]),$.return=ae,$)}function Fe(ae,$,de,We,ut){return $===null||$.tag!==7?($=ts(de,ae.mode,We,ut),$.return=ae,$):($=p($,de),$.return=ae,$)}function ke(ae,$,de){if(typeof $=="string"&&$!==""||typeof $=="number")return $=Ku(""+$,ae.mode,de),$.return=ae,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case k:return de=vl($.type,$.key,$.props,null,ae.mode,de),de.ref=za(ae,null,$),de.return=ae,de;case N:return $=Ju($,ae.mode,de),$.return=ae,$;case Z:var We=$._init;return ke(ae,We($._payload),de)}if(O($)||ne($))return $=ts($,ae.mode,de,null),$.return=ae,$;qo(ae,$)}return null}function Oe(ae,$,de,We){var ut=$!==null?$.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return ut!==null?null:H(ae,$,""+de,We);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case k:return de.key===ut?j(ae,$,de,We):null;case N:return de.key===ut?he(ae,$,de,We):null;case Z:return ut=de._init,Oe(ae,$,ut(de._payload),We)}if(O(de)||ne(de))return ut!==null?null:Fe(ae,$,de,We,null);qo(ae,de)}return null}function Qe(ae,$,de,We,ut){if(typeof We=="string"&&We!==""||typeof We=="number")return ae=ae.get(de)||null,H($,ae,""+We,ut);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case k:return ae=ae.get(We.key===null?de:We.key)||null,j($,ae,We,ut);case N:return ae=ae.get(We.key===null?de:We.key)||null,he($,ae,We,ut);case Z:var mt=We._init;return Qe(ae,$,de,mt(We._payload),ut)}if(O(We)||ne(We))return ae=ae.get(de)||null,Fe($,ae,We,ut,null);qo($,We)}return null}function at(ae,$,de,We){for(var ut=null,mt=null,gt=$,xt=$=0,xn=null;gt!==null&&xt<de.length;xt++){gt.index>xt?(xn=gt,gt=null):xn=gt.sibling;var Lt=Oe(ae,gt,de[xt],We);if(Lt===null){gt===null&&(gt=xn);break}n&&gt&&Lt.alternate===null&&r(ae,gt),$=_(Lt,$,xt),mt===null?ut=Lt:mt.sibling=Lt,mt=Lt,gt=xn}if(xt===de.length)return o(ae,gt),Xt&&qr(ae,xt),ut;if(gt===null){for(;xt<de.length;xt++)gt=ke(ae,de[xt],We),gt!==null&&($=_(gt,$,xt),mt===null?ut=gt:mt.sibling=gt,mt=gt);return Xt&&qr(ae,xt),ut}for(gt=d(ae,gt);xt<de.length;xt++)xn=Qe(gt,ae,xt,de[xt],We),xn!==null&&(n&&xn.alternate!==null&&gt.delete(xn.key===null?xt:xn.key),$=_(xn,$,xt),mt===null?ut=xn:mt.sibling=xn,mt=xn);return n&&gt.forEach(function(wr){return r(ae,wr)}),Xt&&qr(ae,xt),ut}function ot(ae,$,de,We){var ut=ne(de);if(typeof ut!="function")throw Error(t(150));if(de=ut.call(de),de==null)throw Error(t(151));for(var mt=ut=null,gt=$,xt=$=0,xn=null,Lt=de.next();gt!==null&&!Lt.done;xt++,Lt=de.next()){gt.index>xt?(xn=gt,gt=null):xn=gt.sibling;var wr=Oe(ae,gt,Lt.value,We);if(wr===null){gt===null&&(gt=xn);break}n&&gt&&wr.alternate===null&&r(ae,gt),$=_(wr,$,xt),mt===null?ut=wr:mt.sibling=wr,mt=wr,gt=xn}if(Lt.done)return o(ae,gt),Xt&&qr(ae,xt),ut;if(gt===null){for(;!Lt.done;xt++,Lt=de.next())Lt=ke(ae,Lt.value,We),Lt!==null&&($=_(Lt,$,xt),mt===null?ut=Lt:mt.sibling=Lt,mt=Lt);return Xt&&qr(ae,xt),ut}for(gt=d(ae,gt);!Lt.done;xt++,Lt=de.next())Lt=Qe(gt,ae,xt,Lt.value,We),Lt!==null&&(n&&Lt.alternate!==null&&gt.delete(Lt.key===null?xt:Lt.key),$=_(Lt,$,xt),mt===null?ut=Lt:mt.sibling=Lt,mt=Lt);return n&&gt.forEach(function(zx){return r(ae,zx)}),Xt&&qr(ae,xt),ut}function nn(ae,$,de,We){if(typeof de=="object"&&de!==null&&de.type===F&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case k:e:{for(var ut=de.key,mt=$;mt!==null;){if(mt.key===ut){if(ut=de.type,ut===F){if(mt.tag===7){o(ae,mt.sibling),$=p(mt,de.props.children),$.return=ae,ae=$;break e}}else if(mt.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Z&&Mh(ut)===mt.type){o(ae,mt.sibling),$=p(mt,de.props),$.ref=za(ae,mt,de),$.return=ae,ae=$;break e}o(ae,mt);break}else r(ae,mt);mt=mt.sibling}de.type===F?($=ts(de.props.children,ae.mode,We,de.key),$.return=ae,ae=$):(We=vl(de.type,de.key,de.props,null,ae.mode,We),We.ref=za(ae,$,de),We.return=ae,ae=We)}return b(ae);case N:e:{for(mt=de.key;$!==null;){if($.key===mt)if($.tag===4&&$.stateNode.containerInfo===de.containerInfo&&$.stateNode.implementation===de.implementation){o(ae,$.sibling),$=p($,de.children||[]),$.return=ae,ae=$;break e}else{o(ae,$);break}else r(ae,$);$=$.sibling}$=Ju(de,ae.mode,We),$.return=ae,ae=$}return b(ae);case Z:return mt=de._init,nn(ae,$,mt(de._payload),We)}if(O(de))return at(ae,$,de,We);if(ne(de))return ot(ae,$,de,We);qo(ae,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,$!==null&&$.tag===6?(o(ae,$.sibling),$=p($,de),$.return=ae,ae=$):(o(ae,$),$=Ku(de,ae.mode,We),$.return=ae,ae=$),b(ae)):o(ae,$)}return nn}var Ls=Eh(!0),wh=Eh(!1),Yo=hr(null),$o=null,Ns=null,au=null;function ou(){au=Ns=$o=null}function lu(n){var r=Yo.current;Gt(Yo),n._currentValue=r}function cu(n,r,o){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===o)break;n=n.return}}function Ds(n,r){$o=n,au=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Gn=!0),n.firstContext=null)}function li(n){var r=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:r,next:null},Ns===null){if($o===null)throw Error(t(308));Ns=n,$o.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return r}var Yr=null;function uu(n){Yr===null?Yr=[n]:Yr.push(n)}function Th(n,r,o,d){var p=r.interleaved;return p===null?(o.next=o,uu(r)):(o.next=p.next,p.next=o),r.interleaved=o,ji(n,d)}function ji(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var gr=!1;function du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function vr(n,r,o){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Pt&2)!==0){var p=d.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),d.pending=r,ji(n,o)}return p=d.interleaved,p===null?(r.next=r,uu(d)):(r.next=p.next,p.next=r),d.interleaved=r,ji(n,o)}function Ko(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,o|=d,r.lanes=o,ya(n,o)}}function Ch(n,r){var o=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,o===d)){var p=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};_===null?p=_=b:_=_.next=b,o=o.next}while(o!==null);_===null?p=_=r:_=_.next=r}else p=_=r;o={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Jo(n,r,o,d){var p=n.updateQueue;gr=!1;var _=p.firstBaseUpdate,b=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var j=H,he=j.next;j.next=null,b===null?_=he:b.next=he,b=j;var Fe=n.alternate;Fe!==null&&(Fe=Fe.updateQueue,H=Fe.lastBaseUpdate,H!==b&&(H===null?Fe.firstBaseUpdate=he:H.next=he,Fe.lastBaseUpdate=j))}if(_!==null){var ke=p.baseState;b=0,Fe=he=j=null,H=_;do{var Oe=H.lane,Qe=H.eventTime;if((d&Oe)===Oe){Fe!==null&&(Fe=Fe.next={eventTime:Qe,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var at=n,ot=H;switch(Oe=r,Qe=o,ot.tag){case 1:if(at=ot.payload,typeof at=="function"){ke=at.call(Qe,ke,Oe);break e}ke=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ot.payload,Oe=typeof at=="function"?at.call(Qe,ke,Oe):at,Oe==null)break e;ke=re({},ke,Oe);break e;case 2:gr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Oe=p.effects,Oe===null?p.effects=[H]:Oe.push(H))}else Qe={eventTime:Qe,lane:Oe,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Fe===null?(he=Fe=Qe,j=ke):Fe=Fe.next=Qe,b|=Oe;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Oe=H,H=Oe.next,Oe.next=null,p.lastBaseUpdate=Oe,p.shared.pending=null}}while(!0);if(Fe===null&&(j=ke),p.baseState=j,p.firstBaseUpdate=he,p.lastBaseUpdate=Fe,r=p.shared.interleaved,r!==null){p=r;do b|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);Jr|=b,n.lanes=b,n.memoizedState=ke}}function bh(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],p=d.callback;if(p!==null){if(d.callback=null,d=o,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ka={},Li=hr(ka),Ba=hr(ka),Ha=hr(ka);function $r(n){if(n===ka)throw Error(t(174));return n}function fu(n,r){switch(Ht(Ha,r),Ht(Ba,n),Ht(Li,ka),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ie(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ie(r,n)}Gt(Li),Ht(Li,r)}function Is(){Gt(Li),Gt(Ba),Gt(Ha)}function Rh(n){$r(Ha.current);var r=$r(Li.current),o=Ie(r,n.type);r!==o&&(Ht(Ba,n),Ht(Li,o))}function hu(n){Ba.current===n&&(Gt(Li),Gt(Ba))}var Kt=hr(0);function Zo(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var Qo=R.ReactCurrentDispatcher,gu=R.ReactCurrentBatchConfig,Kr=0,Jt=null,un=null,gn=null,el=!1,Va=!1,Ga=0,ax=0;function An(){throw Error(t(321))}function vu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!mi(n[o],r[o]))return!1;return!0}function xu(n,r,o,d,p,_){if(Kr=_,Jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qo.current=n===null||n.memoizedState===null?ux:dx,n=o(d,p),Va){_=0;do{if(Va=!1,Ga=0,25<=_)throw Error(t(301));_+=1,gn=un=null,r.updateQueue=null,Qo.current=fx,n=o(d,p)}while(Va)}if(Qo.current=il,r=un!==null&&un.next!==null,Kr=0,gn=un=Jt=null,el=!1,r)throw Error(t(300));return n}function _u(){var n=Ga!==0;return Ga=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Jt.memoizedState=gn=n:gn=gn.next=n,gn}function ci(){if(un===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var r=gn===null?Jt.memoizedState:gn.next;if(r!==null)gn=r,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},gn===null?Jt.memoizedState=gn=n:gn=gn.next=n}return gn}function Wa(n,r){return typeof r=="function"?r(n):r}function yu(n){var r=ci(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var d=un,p=d.baseQueue,_=o.pending;if(_!==null){if(p!==null){var b=p.next;p.next=_.next,_.next=b}d.baseQueue=p=_,o.pending=null}if(p!==null){_=p.next,d=d.baseState;var H=b=null,j=null,he=_;do{var Fe=he.lane;if((Kr&Fe)===Fe)j!==null&&(j=j.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),d=he.hasEagerState?he.eagerState:n(d,he.action);else{var ke={lane:Fe,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};j===null?(H=j=ke,b=d):j=j.next=ke,Jt.lanes|=Fe,Jr|=Fe}he=he.next}while(he!==null&&he!==_);j===null?b=d:j.next=H,mi(d,r.memoizedState)||(Gn=!0),r.memoizedState=d,r.baseState=b,r.baseQueue=j,o.lastRenderedState=d}if(n=o.interleaved,n!==null){p=n;do _=p.lane,Jt.lanes|=_,Jr|=_,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Su(n){var r=ci(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var d=o.dispatch,p=o.pending,_=r.memoizedState;if(p!==null){o.pending=null;var b=p=p.next;do _=n(_,b.action),b=b.next;while(b!==p);mi(_,r.memoizedState)||(Gn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),o.lastRenderedState=_}return[_,d]}function Ph(){}function Lh(n,r){var o=Jt,d=ci(),p=r(),_=!mi(d.memoizedState,p);if(_&&(d.memoizedState=p,Gn=!0),d=d.queue,Mu(Ih.bind(null,o,d,n),[n]),d.getSnapshot!==r||_||gn!==null&&gn.memoizedState.tag&1){if(o.flags|=2048,ja(9,Dh.bind(null,o,d,p,r),void 0,null),vn===null)throw Error(t(349));(Kr&30)!==0||Nh(o,r,p)}return p}function Nh(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Dh(n,r,o,d){r.value=o,r.getSnapshot=d,Uh(r)&&Oh(n)}function Ih(n,r,o){return o(function(){Uh(r)&&Oh(n)})}function Uh(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!mi(n,o)}catch{return!0}}function Oh(n){var r=ji(n,1);r!==null&&yi(r,n,1,-1)}function Fh(n){var r=Ni();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},r.queue=n,n=n.dispatch=cx.bind(null,Jt,n),[r.memoizedState,n]}function ja(n,r,o,d){return n={tag:n,create:r,destroy:o,deps:d,next:null},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(d=o.next,o.next=n,n.next=d,r.lastEffect=n)),n}function zh(){return ci().memoizedState}function tl(n,r,o,d){var p=Ni();Jt.flags|=n,p.memoizedState=ja(1|r,o,void 0,d===void 0?null:d)}function nl(n,r,o,d){var p=ci();d=d===void 0?null:d;var _=void 0;if(un!==null){var b=un.memoizedState;if(_=b.destroy,d!==null&&vu(d,b.deps)){p.memoizedState=ja(r,o,_,d);return}}Jt.flags|=n,p.memoizedState=ja(1|r,o,_,d)}function kh(n,r){return tl(8390656,8,n,r)}function Mu(n,r){return nl(2048,8,n,r)}function Bh(n,r){return nl(4,2,n,r)}function Hh(n,r){return nl(4,4,n,r)}function Vh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Gh(n,r,o){return o=o!=null?o.concat([n]):null,nl(4,4,Vh.bind(null,r,n),o)}function Eu(){}function Wh(n,r){var o=ci();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&vu(r,d[1])?d[0]:(o.memoizedState=[n,r],n)}function jh(n,r){var o=ci();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&vu(r,d[1])?d[0]:(n=n(),o.memoizedState=[n,r],n)}function Xh(n,r,o){return(Kr&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=o):(mi(o,r)||(o=Vr(),Jt.lanes|=o,Jr|=o,n.baseState=!0),r)}function ox(n,r){var o=Dt;Dt=o!==0&&4>o?o:4,n(!0);var d=gu.transition;gu.transition={};try{n(!1),r()}finally{Dt=o,gu.transition=d}}function qh(){return ci().memoizedState}function lx(n,r,o){var d=Sr(n);if(o={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null},Yh(n))$h(r,o);else if(o=Th(n,r,o,d),o!==null){var p=On();yi(o,n,d,p),Kh(o,r,d)}}function cx(n,r,o){var d=Sr(n),p={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null};if(Yh(n))$h(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var b=r.lastRenderedState,H=_(b,o);if(p.hasEagerState=!0,p.eagerState=H,mi(H,b)){var j=r.interleaved;j===null?(p.next=p,uu(r)):(p.next=j.next,j.next=p),r.interleaved=p;return}}catch{}finally{}o=Th(n,r,p,d),o!==null&&(p=On(),yi(o,n,d,p),Kh(o,r,d))}}function Yh(n){var r=n.alternate;return n===Jt||r!==null&&r===Jt}function $h(n,r){Va=el=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Kh(n,r,o){if((o&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,o|=d,r.lanes=o,ya(n,o)}}var il={readContext:li,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},ux={readContext:li,useCallback:function(n,r){return Ni().memoizedState=[n,r===void 0?null:r],n},useContext:li,useEffect:kh,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,tl(4194308,4,Vh.bind(null,r,n),o)},useLayoutEffect:function(n,r){return tl(4194308,4,n,r)},useInsertionEffect:function(n,r){return tl(4,2,n,r)},useMemo:function(n,r){var o=Ni();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var d=Ni();return r=o!==void 0?o(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=lx.bind(null,Jt,n),[d.memoizedState,n]},useRef:function(n){var r=Ni();return n={current:n},r.memoizedState=n},useState:Fh,useDebugValue:Eu,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=Fh(!1),r=n[0];return n=ox.bind(null,n[1]),Ni().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var d=Jt,p=Ni();if(Xt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),vn===null)throw Error(t(349));(Kr&30)!==0||Nh(d,r,o)}p.memoizedState=o;var _={value:o,getSnapshot:r};return p.queue=_,kh(Ih.bind(null,d,_,n),[n]),d.flags|=2048,ja(9,Dh.bind(null,d,_,o,r),void 0,null),o},useId:function(){var n=Ni(),r=vn.identifierPrefix;if(Xt){var o=Wi,d=Gi;o=(d&~(1<<32-_t(d)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ga++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=ax++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},dx={readContext:li,useCallback:Wh,useContext:li,useEffect:Mu,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:Hh,useMemo:jh,useReducer:yu,useRef:zh,useState:function(){return yu(Wa)},useDebugValue:Eu,useDeferredValue:function(n){var r=ci();return Xh(r,un.memoizedState,n)},useTransition:function(){var n=yu(Wa)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Ph,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1},fx={readContext:li,useCallback:Wh,useContext:li,useEffect:Mu,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:Hh,useMemo:jh,useReducer:Su,useRef:zh,useState:function(){return Su(Wa)},useDebugValue:Eu,useDeferredValue:function(n){var r=ci();return un===null?r.memoizedState=n:Xh(r,un.memoizedState,n)},useTransition:function(){var n=Su(Wa)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Ph,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1};function vi(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function wu(n,r,o,d){r=n.memoizedState,o=o(d,r),o=o==null?r:re({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var rl={isMounted:function(n){return(n=n._reactInternals)?we(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var d=On(),p=Sr(n),_=Xi(d,p);_.payload=r,o!=null&&(_.callback=o),r=vr(n,_,p),r!==null&&(yi(r,n,p,d),Ko(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var d=On(),p=Sr(n),_=Xi(d,p);_.tag=1,_.payload=r,o!=null&&(_.callback=o),r=vr(n,_,p),r!==null&&(yi(r,n,p,d),Ko(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=On(),d=Sr(n),p=Xi(o,d);p.tag=2,r!=null&&(p.callback=r),r=vr(n,p,d),r!==null&&(yi(r,n,d,o),Ko(r,n,d))}};function Jh(n,r,o,d,p,_,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,_,b):r.prototype&&r.prototype.isPureReactComponent?!La(o,d)||!La(p,_):!0}function Zh(n,r,o){var d=!1,p=pr,_=r.contextType;return typeof _=="object"&&_!==null?_=li(_):(p=Vn(r)?jr:Tn.current,d=r.contextTypes,_=(d=d!=null)?Cs(n,p):pr),r=new r(o,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=rl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function Qh(n,r,o,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,d),r.state!==n&&rl.enqueueReplaceState(r,r.state,null)}function Tu(n,r,o,d){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},du(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=li(_):(_=Vn(r)?jr:Tn.current,p.context=Cs(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(wu(n,r,_,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&rl.enqueueReplaceState(p,p.state,null),Jo(n,o,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,r){try{var o="",d=r;do o+=ie(d),d=d.return;while(d);var p=o}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function Au(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Cu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var hx=typeof WeakMap=="function"?WeakMap:Map;function ep(n,r,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var d=r.value;return o.callback=function(){dl||(dl=!0,Vu=d),Cu(n,r)},o}function tp(n,r,o){o=Xi(-1,o),o.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=r.value;o.payload=function(){return d(p)},o.callback=function(){Cu(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(o.callback=function(){Cu(n,r),typeof d!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),o}function np(n,r,o){var d=n.pingCache;if(d===null){d=n.pingCache=new hx;var p=new Set;d.set(r,p)}else p=d.get(r),p===void 0&&(p=new Set,d.set(r,p));p.has(o)||(p.add(o),n=Cx.bind(null,n,r,o),r.then(n,n))}function ip(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function rp(n,r,o,d,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Xi(-1,1),r.tag=2,vr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var px=R.ReactCurrentOwner,Gn=!1;function Un(n,r,o,d){r.child=n===null?wh(r,null,o,d):Ls(r,n.child,o,d)}function sp(n,r,o,d,p){o=o.render;var _=r.ref;return Ds(r,p),d=xu(n,r,o,d,_,p),o=_u(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):(Xt&&o&&tu(r),r.flags|=1,Un(n,r,d,p),r.child)}function ap(n,r,o,d,p){if(n===null){var _=o.type;return typeof _=="function"&&!$u(_)&&_.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=_,op(n,r,_,d,p)):(n=vl(o.type,null,d,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var b=_.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(b,d)&&n.ref===r.ref)return qi(n,r,p)}return r.flags|=1,n=Er(_,d),n.ref=r.ref,n.return=r,r.child=n}function op(n,r,o,d,p){if(n!==null){var _=n.memoizedProps;if(La(_,d)&&n.ref===r.ref)if(Gn=!1,r.pendingProps=d=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Gn=!0);else return r.lanes=n.lanes,qi(n,r,p)}return bu(n,r,o,d,p)}function lp(n,r,o){var d=r.pendingProps,p=d.children,_=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Fs,ei),ei|=o;else{if((o&1073741824)===0)return n=_!==null?_.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ht(Fs,ei),ei|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:o,Ht(Fs,ei),ei|=d}else _!==null?(d=_.baseLanes|o,r.memoizedState=null):d=o,Ht(Fs,ei),ei|=d;return Un(n,r,p,o),r.child}function cp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function bu(n,r,o,d,p){var _=Vn(o)?jr:Tn.current;return _=Cs(r,_),Ds(r,p),o=xu(n,r,o,d,_,p),d=_u(),n!==null&&!Gn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):(Xt&&d&&tu(r),r.flags|=1,Un(n,r,o,p),r.child)}function up(n,r,o,d,p){if(Vn(o)){var _=!0;Vo(r)}else _=!1;if(Ds(r,p),r.stateNode===null)al(n,r),Zh(r,o,d),Tu(r,o,d,p),d=!0;else if(n===null){var b=r.stateNode,H=r.memoizedProps;b.props=H;var j=b.context,he=o.contextType;typeof he=="object"&&he!==null?he=li(he):(he=Vn(o)?jr:Tn.current,he=Cs(r,he));var Fe=o.getDerivedStateFromProps,ke=typeof Fe=="function"||typeof b.getSnapshotBeforeUpdate=="function";ke||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(H!==d||j!==he)&&Qh(r,b,d,he),gr=!1;var Oe=r.memoizedState;b.state=Oe,Jo(r,d,b,p),j=r.memoizedState,H!==d||Oe!==j||Hn.current||gr?(typeof Fe=="function"&&(wu(r,o,Fe,d),j=r.memoizedState),(H=gr||Jh(r,o,H,d,Oe,j,he))?(ke||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=j),b.props=d,b.state=j,b.context=he,d=H):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{b=r.stateNode,Ah(n,r),H=r.memoizedProps,he=r.type===r.elementType?H:vi(r.type,H),b.props=he,ke=r.pendingProps,Oe=b.context,j=o.contextType,typeof j=="object"&&j!==null?j=li(j):(j=Vn(o)?jr:Tn.current,j=Cs(r,j));var Qe=o.getDerivedStateFromProps;(Fe=typeof Qe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(H!==ke||Oe!==j)&&Qh(r,b,d,j),gr=!1,Oe=r.memoizedState,b.state=Oe,Jo(r,d,b,p);var at=r.memoizedState;H!==ke||Oe!==at||Hn.current||gr?(typeof Qe=="function"&&(wu(r,o,Qe,d),at=r.memoizedState),(he=gr||Jh(r,o,he,d,Oe,at,j)||!1)?(Fe||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(d,at,j),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(d,at,j)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||H===n.memoizedProps&&Oe===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Oe===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=at),b.props=d,b.state=at,b.context=j,d=he):(typeof b.componentDidUpdate!="function"||H===n.memoizedProps&&Oe===n.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Oe===n.memoizedState||(r.flags|=1024),d=!1)}return Ru(n,r,o,d,_,p)}function Ru(n,r,o,d,p,_){cp(n,r);var b=(r.flags&128)!==0;if(!d&&!b)return p&&mh(r,o,!1),qi(n,r,_);d=r.stateNode,px.current=r;var H=b&&typeof o.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&b?(r.child=Ls(r,n.child,null,_),r.child=Ls(r,null,H,_)):Un(n,r,H,_),r.memoizedState=d.state,p&&mh(r,o,!0),r.child}function dp(n){var r=n.stateNode;r.pendingContext?hh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&hh(n,r.context,!1),fu(n,r.containerInfo)}function fp(n,r,o,d,p){return Ps(),su(p),r.flags|=256,Un(n,r,o,d),r.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function hp(n,r,o){var d=r.pendingProps,p=Kt.current,_=!1,b=(r.flags&128)!==0,H;if((H=b)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ht(Kt,p&1),n===null)return ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=d.children,n=d.fallback,_?(d=r.mode,_=r.child,b={mode:"hidden",children:b},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=b):_=xl(b,d,0,null),n=ts(n,d,o,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Lu(o),r.memoizedState=Pu,n):Nu(r,b));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return mx(n,r,b,d,H,p,o);if(_){_=d.fallback,b=r.mode,p=n.child,H=p.sibling;var j={mode:"hidden",children:d.children};return(b&1)===0&&r.child!==p?(d=r.child,d.childLanes=0,d.pendingProps=j,r.deletions=null):(d=Er(p,j),d.subtreeFlags=p.subtreeFlags&14680064),H!==null?_=Er(H,_):(_=ts(_,b,o,null),_.flags|=2),_.return=r,d.return=r,d.sibling=_,r.child=d,d=_,_=r.child,b=n.child.memoizedState,b=b===null?Lu(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},_.memoizedState=b,_.childLanes=n.childLanes&~o,r.memoizedState=Pu,d}return _=n.child,n=_.sibling,d=Er(_,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=o),d.return=r,d.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=d,r.memoizedState=null,d}function Nu(n,r){return r=xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function sl(n,r,o,d){return d!==null&&su(d),Ls(r,n.child,null,o),n=Nu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function mx(n,r,o,d,p,_,b){if(o)return r.flags&256?(r.flags&=-257,d=Au(Error(t(422))),sl(n,r,b,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=d.fallback,p=r.mode,d=xl({mode:"visible",children:d.children},p,0,null),_=ts(_,p,b,null),_.flags|=2,d.return=r,_.return=r,d.sibling=_,r.child=d,(r.mode&1)!==0&&Ls(r,n.child,null,b),r.child.memoizedState=Lu(b),r.memoizedState=Pu,_);if((r.mode&1)===0)return sl(n,r,b,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var H=d.dgst;return d=H,_=Error(t(419)),d=Au(_,d,void 0),sl(n,r,b,d)}if(H=(b&n.childLanes)!==0,Gn||H){if(d=vn,d!==null){switch(b&-b){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|b))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ji(n,p),yi(d,n,p,-1))}return Yu(),d=Au(Error(t(421))),sl(n,r,b,d)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=bx.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,Qn=fr(p.nextSibling),Zn=r,Xt=!0,gi=null,n!==null&&(ai[oi++]=Gi,ai[oi++]=Wi,ai[oi++]=Xr,Gi=n.id,Wi=n.overflow,Xr=r),r=Nu(r,d.children),r.flags|=4096,r)}function pp(n,r,o){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),cu(n.return,r,o)}function Du(n,r,o,d,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:o,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=o,_.tailMode=p)}function mp(n,r,o){var d=r.pendingProps,p=d.revealOrder,_=d.tail;if(Un(n,r,d.children,o),d=Kt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pp(n,o,r);else if(n.tag===19)pp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Ht(Kt,d),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Zo(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Du(r,!1,p,o,_);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Zo(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Du(r,!0,o,null,_);break;case"together":Du(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function al(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function qi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Er(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Er(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function gx(n,r,o){switch(r.tag){case 3:dp(r),Ps();break;case 5:Rh(r);break;case 1:Vn(r.type)&&Vo(r);break;case 4:fu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,p=r.memoizedProps.value;Ht(Yo,d._currentValue),d._currentValue=p;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Ht(Kt,Kt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?hp(n,r,o):(Ht(Kt,Kt.current&1),n=qi(n,r,o),n!==null?n.sibling:null);Ht(Kt,Kt.current&1);break;case 19:if(d=(o&r.childLanes)!==0,(n.flags&128)!==0){if(d)return mp(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ht(Kt,Kt.current),d)break;return null;case 22:case 23:return r.lanes=0,lp(n,r,o)}return qi(n,r,o)}var gp,Iu,vp,xp;gp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Iu=function(){},vp=function(n,r,o,d){var p=n.memoizedProps;if(p!==d){n=r.stateNode,$r(Li.current);var _=null;switch(o){case"input":p=Te(n,p),d=Te(n,d),_=[];break;case"select":p=re({},p,{value:void 0}),d=re({},d,{value:void 0}),_=[];break;case"textarea":p=se(n,p),d=se(n,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=ko)}dt(o,d);var b;o=null;for(he in p)if(!d.hasOwnProperty(he)&&p.hasOwnProperty(he)&&p[he]!=null)if(he==="style"){var H=p[he];for(b in H)H.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?_||(_=[]):(_=_||[]).push(he,null));for(he in d){var j=d[he];if(H=p!=null?p[he]:void 0,d.hasOwnProperty(he)&&j!==H&&(j!=null||H!=null))if(he==="style")if(H){for(b in H)!H.hasOwnProperty(b)||j&&j.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in j)j.hasOwnProperty(b)&&H[b]!==j[b]&&(o||(o={}),o[b]=j[b])}else o||(_||(_=[]),_.push(he,o)),o=j;else he==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,H=H?H.__html:void 0,j!=null&&H!==j&&(_=_||[]).push(he,j)):he==="children"?typeof j!="string"&&typeof j!="number"||(_=_||[]).push(he,""+j):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(j!=null&&he==="onScroll"&&Vt("scroll",n),_||H===j||(_=[])):(_=_||[]).push(he,j))}o&&(_=_||[]).push("style",o);var he=_;(r.updateQueue=he)&&(r.flags|=4)}},xp=function(n,r,o,d){o!==d&&(r.flags|=4)};function Xa(n,r){if(!Xt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var d=null;o!==null;)o.alternate!==null&&(d=o),o=o.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Cn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,d=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=o,r}function vx(n,r,o){var d=r.pendingProps;switch(nu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(r),null;case 1:return Vn(r.type)&&Ho(),Cn(r),null;case 3:return d=r.stateNode,Is(),Gt(Hn),Gt(Tn),mu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Xo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gi!==null&&(ju(gi),gi=null))),Iu(n,r),Cn(r),null;case 5:hu(r);var p=$r(Ha.current);if(o=r.type,n!==null&&r.stateNode!=null)vp(n,r,o,d,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return Cn(r),null}if(n=$r(Li.current),Xo(r)){d=r.stateNode,o=r.type;var _=r.memoizedProps;switch(d[Pi]=r,d[Oa]=_,n=(r.mode&1)!==0,o){case"dialog":Vt("cancel",d),Vt("close",d);break;case"iframe":case"object":case"embed":Vt("load",d);break;case"video":case"audio":for(p=0;p<Da.length;p++)Vt(Da[p],d);break;case"source":Vt("error",d);break;case"img":case"image":case"link":Vt("error",d),Vt("load",d);break;case"details":Vt("toggle",d);break;case"input":Se(d,_),Vt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",d);break;case"textarea":ye(d,_),Vt("invalid",d)}dt(o,_),p=null;for(var b in _)if(_.hasOwnProperty(b)){var H=_[b];b==="children"?typeof H=="string"?d.textContent!==H&&(_.suppressHydrationWarning!==!0&&zo(d.textContent,H,n),p=["children",H]):typeof H=="number"&&d.textContent!==""+H&&(_.suppressHydrationWarning!==!0&&zo(d.textContent,H,n),p=["children",""+H]):a.hasOwnProperty(b)&&H!=null&&b==="onScroll"&&Vt("scroll",d)}switch(o){case"input":V(d),be(d,_,!0);break;case"textarea":V(d),Me(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=ko)}d=p,r.updateQueue=d,d!==null&&(r.flags|=4)}else{b=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=je(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=b.createElement(o,{is:d.is}):(n=b.createElement(o),o==="select"&&(b=n,d.multiple?b.multiple=!0:d.size&&(b.size=d.size))):n=b.createElementNS(n,o),n[Pi]=r,n[Oa]=d,gp(n,r,!1,!1),r.stateNode=n;e:{switch(b=ht(o,d),o){case"dialog":Vt("cancel",n),Vt("close",n),p=d;break;case"iframe":case"object":case"embed":Vt("load",n),p=d;break;case"video":case"audio":for(p=0;p<Da.length;p++)Vt(Da[p],n);p=d;break;case"source":Vt("error",n),p=d;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),p=d;break;case"details":Vt("toggle",n),p=d;break;case"input":Se(n,d),p=Te(n,d),Vt("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=re({},d,{value:void 0}),Vt("invalid",n);break;case"textarea":ye(n,d),p=se(n,d),Vt("invalid",n);break;default:p=d}dt(o,p),H=p;for(_ in H)if(H.hasOwnProperty(_)){var j=H[_];_==="style"?ze(n,j):_==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&et(n,j)):_==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&Re(n,j):typeof j=="number"&&Re(n,""+j):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?j!=null&&_==="onScroll"&&Vt("scroll",n):j!=null&&E(n,_,j,b))}switch(o){case"input":V(n),be(n,d,!1);break;case"textarea":V(n),Me(n);break;case"option":d.value!=null&&n.setAttribute("value",""+De(d.value));break;case"select":n.multiple=!!d.multiple,_=d.value,_!=null?C(n,!!d.multiple,_,!1):d.defaultValue!=null&&C(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ko)}switch(o){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Cn(r),null;case 6:if(n&&r.stateNode!=null)xp(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(o=$r(Ha.current),$r(Li.current),Xo(r)){if(d=r.stateNode,o=r.memoizedProps,d[Pi]=r,(_=d.nodeValue!==o)&&(n=Zn,n!==null))switch(n.tag){case 3:zo(d.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(d.nodeValue,o,(n.mode&1)!==0)}_&&(r.flags|=4)}else d=(o.nodeType===9?o:o.ownerDocument).createTextNode(d),d[Pi]=r,r.stateNode=d}return Cn(r),null;case 13:if(Gt(Kt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xt&&Qn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sh(),Ps(),r.flags|=98560,_=!1;else if(_=Xo(r),d!==null&&d.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Pi]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Cn(r),_=!1}else gi!==null&&(ju(gi),gi=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Kt.current&1)!==0?dn===0&&(dn=3):Yu())),r.updateQueue!==null&&(r.flags|=4),Cn(r),null);case 4:return Is(),Iu(n,r),n===null&&Ia(r.stateNode.containerInfo),Cn(r),null;case 10:return lu(r.type._context),Cn(r),null;case 17:return Vn(r.type)&&Ho(),Cn(r),null;case 19:if(Gt(Kt),_=r.memoizedState,_===null)return Cn(r),null;if(d=(r.flags&128)!==0,b=_.rendering,b===null)if(d)Xa(_,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(b=Zo(n),b!==null){for(r.flags|=128,Xa(_,!1),d=b.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=o,o=r.child;o!==null;)_=o,n=d,_.flags&=14680066,b=_.alternate,b===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=b.childLanes,_.lanes=b.lanes,_.child=b.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=b.memoizedProps,_.memoizedState=b.memoizedState,_.updateQueue=b.updateQueue,_.type=b.type,n=b.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht(Kt,Kt.current&1|2),r.child}n=n.sibling}_.tail!==null&&Ze()>zs&&(r.flags|=128,d=!0,Xa(_,!1),r.lanes=4194304)}else{if(!d)if(n=Zo(b),n!==null){if(r.flags|=128,d=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!b.alternate&&!Xt)return Cn(r),null}else 2*Ze()-_.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,d=!0,Xa(_,!1),r.lanes=4194304);_.isBackwards?(b.sibling=r.child,r.child=b):(o=_.last,o!==null?o.sibling=b:r.child=b,_.last=b)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Ze(),r.sibling=null,o=Kt.current,Ht(Kt,d?o&1|2:o&1),r):(Cn(r),null);case 22:case 23:return qu(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(ei&1073741824)!==0&&(Cn(r),r.subtreeFlags&6&&(r.flags|=8192)):Cn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function xx(n,r){switch(nu(r),r.tag){case 1:return Vn(r.type)&&Ho(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Is(),Gt(Hn),Gt(Tn),mu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return hu(r),null;case 13:if(Gt(Kt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt(Kt),null;case 4:return Is(),null;case 10:return lu(r.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var ol=!1,bn=!1,_x=typeof WeakSet=="function"?WeakSet:Set,it=null;function Os(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(d){en(n,r,d)}else o.current=null}function Uu(n,r,o){try{o()}catch(d){en(n,r,d)}}var _p=!1;function yx(n,r){if(qc=Co,n=Jf(),kc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var d=o.getSelection&&o.getSelection();if(d&&d.rangeCount!==0){o=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var b=0,H=-1,j=-1,he=0,Fe=0,ke=n,Oe=null;t:for(;;){for(var Qe;ke!==o||p!==0&&ke.nodeType!==3||(H=b+p),ke!==_||d!==0&&ke.nodeType!==3||(j=b+d),ke.nodeType===3&&(b+=ke.nodeValue.length),(Qe=ke.firstChild)!==null;)Oe=ke,ke=Qe;for(;;){if(ke===n)break t;if(Oe===o&&++he===p&&(H=b),Oe===_&&++Fe===d&&(j=b),(Qe=ke.nextSibling)!==null)break;ke=Oe,Oe=ke.parentNode}ke=Qe}o=H===-1||j===-1?null:{start:H,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yc={focusedElem:n,selectionRange:o},Co=!1,it=r;it!==null;)if(r=it,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,it=n;else for(;it!==null;){r=it;try{var at=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var ot=at.memoizedProps,nn=at.memoizedState,ae=r.stateNode,$=ae.getSnapshotBeforeUpdate(r.elementType===r.type?ot:vi(r.type,ot),nn);ae.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){en(r,r.return,We)}if(n=r.sibling,n!==null){n.return=r.return,it=n;break}it=r.return}return at=_p,_p=!1,at}function qa(n,r,o){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Uu(r,o,_)}p=p.next}while(p!==d)}}function ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var d=o.create;o.destroy=d()}o=o.next}while(o!==r)}}function Ou(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function yp(n){var r=n.alternate;r!==null&&(n.alternate=null,yp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Pi],delete r[Oa],delete r[Zc],delete r[nx],delete r[ix])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sp(n){return n.tag===5||n.tag===3||n.tag===4}function Mp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,r,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ko));else if(d!==4&&(n=n.child,n!==null))for(Fu(n,r,o),n=n.sibling;n!==null;)Fu(n,r,o),n=n.sibling}function zu(n,r,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(zu(n,r,o),n=n.sibling;n!==null;)zu(n,r,o),n=n.sibling}var Sn=null,xi=!1;function xr(n,r,o){for(o=o.child;o!==null;)Ep(n,r,o),o=o.sibling}function Ep(n,r,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 5:bn||Os(o,r);case 6:var d=Sn,p=xi;Sn=null,xr(n,r,o),Sn=d,xi=p,Sn!==null&&(xi?(n=Sn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Sn.removeChild(o.stateNode));break;case 18:Sn!==null&&(xi?(n=Sn,o=o.stateNode,n.nodeType===8?Jc(n.parentNode,o):n.nodeType===1&&Jc(n,o),Ta(n)):Jc(Sn,o.stateNode));break;case 4:d=Sn,p=xi,Sn=o.stateNode.containerInfo,xi=!0,xr(n,r,o),Sn=d,xi=p;break;case 0:case 11:case 14:case 15:if(!bn&&(d=o.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,b=_.destroy;_=_.tag,b!==void 0&&((_&2)!==0||(_&4)!==0)&&Uu(o,r,b),p=p.next}while(p!==d)}xr(n,r,o);break;case 1:if(!bn&&(Os(o,r),d=o.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=o.memoizedProps,d.state=o.memoizedState,d.componentWillUnmount()}catch(H){en(o,r,H)}xr(n,r,o);break;case 21:xr(n,r,o);break;case 22:o.mode&1?(bn=(d=bn)||o.memoizedState!==null,xr(n,r,o),bn=d):xr(n,r,o);break;default:xr(n,r,o)}}function wp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new _x),r.forEach(function(d){var p=Rx.bind(null,n,d);o.has(d)||(o.add(d),d.then(p,p))})}}function _i(n,r){var o=r.deletions;if(o!==null)for(var d=0;d<o.length;d++){var p=o[d];try{var _=n,b=r,H=b;e:for(;H!==null;){switch(H.tag){case 5:Sn=H.stateNode,xi=!1;break e;case 3:Sn=H.stateNode.containerInfo,xi=!0;break e;case 4:Sn=H.stateNode.containerInfo,xi=!0;break e}H=H.return}if(Sn===null)throw Error(t(160));Ep(_,b,p),Sn=null,xi=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(he){en(p,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Tp(r,n),r=r.sibling}function Tp(n,r){var o=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(r,n),Di(n),d&4){try{qa(3,n,n.return),ll(3,n)}catch(ot){en(n,n.return,ot)}try{qa(5,n,n.return)}catch(ot){en(n,n.return,ot)}}break;case 1:_i(r,n),Di(n),d&512&&o!==null&&Os(o,o.return);break;case 5:if(_i(r,n),Di(n),d&512&&o!==null&&Os(o,o.return),n.flags&32){var p=n.stateNode;try{Re(p,"")}catch(ot){en(n,n.return,ot)}}if(d&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,b=o!==null?o.memoizedProps:_,H=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{H==="input"&&_.type==="radio"&&_.name!=null&&Ae(p,_),ht(H,b);var he=ht(H,_);for(b=0;b<j.length;b+=2){var Fe=j[b],ke=j[b+1];Fe==="style"?ze(p,ke):Fe==="dangerouslySetInnerHTML"?et(p,ke):Fe==="children"?Re(p,ke):E(p,Fe,ke,he)}switch(H){case"input":Le(p,_);break;case"textarea":pe(p,_);break;case"select":var Oe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Qe=_.value;Qe!=null?C(p,!!_.multiple,Qe,!1):Oe!==!!_.multiple&&(_.defaultValue!=null?C(p,!!_.multiple,_.defaultValue,!0):C(p,!!_.multiple,_.multiple?[]:"",!1))}p[Oa]=_}catch(ot){en(n,n.return,ot)}}break;case 6:if(_i(r,n),Di(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(ot){en(n,n.return,ot)}}break;case 3:if(_i(r,n),Di(n),d&4&&o!==null&&o.memoizedState.isDehydrated)try{Ta(r.containerInfo)}catch(ot){en(n,n.return,ot)}break;case 4:_i(r,n),Di(n);break;case 13:_i(r,n),Di(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Hu=Ze())),d&4&&wp(n);break;case 22:if(Fe=o!==null&&o.memoizedState!==null,n.mode&1?(bn=(he=bn)||Fe,_i(r,n),bn=he):_i(r,n),Di(n),d&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Fe&&(n.mode&1)!==0)for(it=n,Fe=n.child;Fe!==null;){for(ke=it=Fe;it!==null;){switch(Oe=it,Qe=Oe.child,Oe.tag){case 0:case 11:case 14:case 15:qa(4,Oe,Oe.return);break;case 1:Os(Oe,Oe.return);var at=Oe.stateNode;if(typeof at.componentWillUnmount=="function"){d=Oe,o=Oe.return;try{r=d,at.props=r.memoizedProps,at.state=r.memoizedState,at.componentWillUnmount()}catch(ot){en(d,o,ot)}}break;case 5:Os(Oe,Oe.return);break;case 22:if(Oe.memoizedState!==null){bp(ke);continue}}Qe!==null?(Qe.return=Oe,it=Qe):bp(ke)}Fe=Fe.sibling}e:for(Fe=null,ke=n;;){if(ke.tag===5){if(Fe===null){Fe=ke;try{p=ke.stateNode,he?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(H=ke.stateNode,j=ke.memoizedProps.style,b=j!=null&&j.hasOwnProperty("display")?j.display:null,H.style.display=Je("display",b))}catch(ot){en(n,n.return,ot)}}}else if(ke.tag===6){if(Fe===null)try{ke.stateNode.nodeValue=he?"":ke.memoizedProps}catch(ot){en(n,n.return,ot)}}else if((ke.tag!==22&&ke.tag!==23||ke.memoizedState===null||ke===n)&&ke.child!==null){ke.child.return=ke,ke=ke.child;continue}if(ke===n)break e;for(;ke.sibling===null;){if(ke.return===null||ke.return===n)break e;Fe===ke&&(Fe=null),ke=ke.return}Fe===ke&&(Fe=null),ke.sibling.return=ke.return,ke=ke.sibling}}break;case 19:_i(r,n),Di(n),d&4&&wp(n);break;case 21:break;default:_i(r,n),Di(n)}}function Di(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Sp(o)){var d=o;break e}o=o.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Re(p,""),d.flags&=-33);var _=Mp(n);zu(n,_,p);break;case 3:case 4:var b=d.stateNode.containerInfo,H=Mp(n);Fu(n,H,b);break;default:throw Error(t(161))}}catch(j){en(n,n.return,j)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Sx(n,r,o){it=n,Ap(n)}function Ap(n,r,o){for(var d=(n.mode&1)!==0;it!==null;){var p=it,_=p.child;if(p.tag===22&&d){var b=p.memoizedState!==null||ol;if(!b){var H=p.alternate,j=H!==null&&H.memoizedState!==null||bn;H=ol;var he=bn;if(ol=b,(bn=j)&&!he)for(it=p;it!==null;)b=it,j=b.child,b.tag===22&&b.memoizedState!==null?Rp(p):j!==null?(j.return=b,it=j):Rp(p);for(;_!==null;)it=_,Ap(_),_=_.sibling;it=p,ol=H,bn=he}Cp(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,it=_):Cp(n)}}function Cp(n){for(;it!==null;){var r=it;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bn||ll(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!bn)if(o===null)d.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:vi(r.type,o.memoizedProps);d.componentDidUpdate(p,o.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&bh(r,_,d);break;case 3:var b=r.updateQueue;if(b!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}bh(r,b,o)}break;case 5:var H=r.stateNode;if(o===null&&r.flags&4){o=H;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Fe=he.memoizedState;if(Fe!==null){var ke=Fe.dehydrated;ke!==null&&Ta(ke)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||r.flags&512&&Ou(r)}catch(Oe){en(r,r.return,Oe)}}if(r===n){it=null;break}if(o=r.sibling,o!==null){o.return=r.return,it=o;break}it=r.return}}function bp(n){for(;it!==null;){var r=it;if(r===n){it=null;break}var o=r.sibling;if(o!==null){o.return=r.return,it=o;break}it=r.return}}function Rp(n){for(;it!==null;){var r=it;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ll(4,r)}catch(j){en(r,o,j)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var p=r.return;try{d.componentDidMount()}catch(j){en(r,p,j)}}var _=r.return;try{Ou(r)}catch(j){en(r,_,j)}break;case 5:var b=r.return;try{Ou(r)}catch(j){en(r,b,j)}}}catch(j){en(r,r.return,j)}if(r===n){it=null;break}var H=r.sibling;if(H!==null){H.return=r.return,it=H;break}it=r.return}}var Mx=Math.ceil,cl=R.ReactCurrentDispatcher,ku=R.ReactCurrentOwner,ui=R.ReactCurrentBatchConfig,Pt=0,vn=null,sn=null,Mn=0,ei=0,Fs=hr(0),dn=0,Ya=null,Jr=0,ul=0,Bu=0,$a=null,Wn=null,Hu=0,zs=1/0,Yi=null,dl=!1,Vu=null,_r=null,fl=!1,yr=null,hl=0,Ka=0,Gu=null,pl=-1,ml=0;function On(){return(Pt&6)!==0?Ze():pl!==-1?pl:pl=Ze()}function Sr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&Mn!==0?Mn&-Mn:sx.transition!==null?(ml===0&&(ml=Vr()),ml):(n=Dt,n!==0||(n=window.event,n=n===void 0?16:Lf(n.type)),n)}function yi(n,r,o,d){if(50<Ka)throw Ka=0,Gu=null,Error(t(185));Gr(n,o,d),((Pt&2)===0||n!==vn)&&(n===vn&&((Pt&2)===0&&(ul|=o),dn===4&&Mr(n,Mn)),jn(n,d),o===1&&Pt===0&&(r.mode&1)===0&&(zs=Ze()+500,Go&&mr()))}function jn(n,r){var o=n.callbackNode;Bi(n,r);var d=Bn(n,n===vn?Mn:0);if(d===0)o!==null&&Ye(o),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(o!=null&&Ye(o),r===1)n.tag===0?rx(Lp.bind(null,n)):gh(Lp.bind(null,n)),ex(function(){(Pt&6)===0&&mr()}),o=null;else{switch(Eo(d)){case 1:o=ct;break;case 4:o=Tt;break;case 16:o=Nt;break;case 536870912:o=jt;break;default:o=Nt}o=kp(o,Pp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Pp(n,r){if(pl=-1,ml=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ks()&&n.callbackNode!==o)return null;var d=Bn(n,n===vn?Mn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=gl(n,d);else{r=d;var p=Pt;Pt|=2;var _=Dp();(vn!==n||Mn!==r)&&(Yi=null,zs=Ze()+500,Qr(n,r));do try{Tx();break}catch(H){Np(n,H)}while(!0);ou(),cl.current=_,Pt=p,sn!==null?r=0:(vn=null,Mn=0,r=dn)}if(r!==0){if(r===2&&(p=Hr(n),p!==0&&(d=p,r=Wu(n,p))),r===1)throw o=Ya,Qr(n,0),Mr(n,d),jn(n,Ze()),o;if(r===6)Mr(n,d);else{if(p=n.current.alternate,(d&30)===0&&!Ex(p)&&(r=gl(n,d),r===2&&(_=Hr(n),_!==0&&(d=_,r=Wu(n,_))),r===1))throw o=Ya,Qr(n,0),Mr(n,d),jn(n,Ze()),o;switch(n.finishedWork=p,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:es(n,Wn,Yi);break;case 3:if(Mr(n,d),(d&130023424)===d&&(r=Hu+500-Ze(),10<r)){if(Bn(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){On(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Kc(es.bind(null,n,Wn,Yi),r);break}es(n,Wn,Yi);break;case 4:if(Mr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,p=-1;0<d;){var b=31-_t(d);_=1<<b,b=r[b],b>p&&(p=b),d&=~_}if(d=p,d=Ze()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Mx(d/1960))-d,10<d){n.timeoutHandle=Kc(es.bind(null,n,Wn,Yi),d);break}es(n,Wn,Yi);break;case 5:es(n,Wn,Yi);break;default:throw Error(t(329))}}}return jn(n,Ze()),n.callbackNode===o?Pp.bind(null,n):null}function Wu(n,r){var o=$a;return n.current.memoizedState.isDehydrated&&(Qr(n,r).flags|=256),n=gl(n,r),n!==2&&(r=Wn,Wn=o,r!==null&&ju(r)),n}function ju(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function Ex(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var d=0;d<o.length;d++){var p=o[d],_=p.getSnapshot;p=p.value;try{if(!mi(_(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Mr(n,r){for(r&=~Bu,r&=~ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-_t(r),d=1<<o;n[o]=-1,r&=~d}}function Lp(n){if((Pt&6)!==0)throw Error(t(327));ks();var r=Bn(n,0);if((r&1)===0)return jn(n,Ze()),null;var o=gl(n,r);if(n.tag!==0&&o===2){var d=Hr(n);d!==0&&(r=d,o=Wu(n,d))}if(o===1)throw o=Ya,Qr(n,0),Mr(n,r),jn(n,Ze()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,Wn,Yi),jn(n,Ze()),null}function Xu(n,r){var o=Pt;Pt|=1;try{return n(r)}finally{Pt=o,Pt===0&&(zs=Ze()+500,Go&&mr())}}function Zr(n){yr!==null&&yr.tag===0&&(Pt&6)===0&&ks();var r=Pt;Pt|=1;var o=ui.transition,d=Dt;try{if(ui.transition=null,Dt=1,n)return n()}finally{Dt=d,ui.transition=o,Pt=r,(Pt&6)===0&&mr()}}function qu(){ei=Fs.current,Gt(Fs)}function Qr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Qv(o)),sn!==null)for(o=sn.return;o!==null;){var d=o;switch(nu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ho();break;case 3:Is(),Gt(Hn),Gt(Tn),mu();break;case 5:hu(d);break;case 4:Is();break;case 13:Gt(Kt);break;case 19:Gt(Kt);break;case 10:lu(d.type._context);break;case 22:case 23:qu()}o=o.return}if(vn=n,sn=n=Er(n.current,null),Mn=ei=r,dn=0,Ya=null,Bu=ul=Jr=0,Wn=$a=null,Yr!==null){for(r=0;r<Yr.length;r++)if(o=Yr[r],d=o.interleaved,d!==null){o.interleaved=null;var p=d.next,_=o.pending;if(_!==null){var b=_.next;_.next=p,d.next=b}o.pending=d}Yr=null}return n}function Np(n,r){do{var o=sn;try{if(ou(),Qo.current=il,el){for(var d=Jt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}el=!1}if(Kr=0,gn=un=Jt=null,Va=!1,Ga=0,ku.current=null,o===null||o.return===null){dn=1,Ya=r,sn=null;break}e:{var _=n,b=o.return,H=o,j=r;if(r=Mn,H.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var he=j,Fe=H,ke=Fe.tag;if((Fe.mode&1)===0&&(ke===0||ke===11||ke===15)){var Oe=Fe.alternate;Oe?(Fe.updateQueue=Oe.updateQueue,Fe.memoizedState=Oe.memoizedState,Fe.lanes=Oe.lanes):(Fe.updateQueue=null,Fe.memoizedState=null)}var Qe=ip(b);if(Qe!==null){Qe.flags&=-257,rp(Qe,b,H,_,r),Qe.mode&1&&np(_,he,r),r=Qe,j=he;var at=r.updateQueue;if(at===null){var ot=new Set;ot.add(j),r.updateQueue=ot}else at.add(j);break e}else{if((r&1)===0){np(_,he,r),Yu();break e}j=Error(t(426))}}else if(Xt&&H.mode&1){var nn=ip(b);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),rp(nn,b,H,_,r),su(Us(j,H));break e}}_=j=Us(j,H),dn!==4&&(dn=2),$a===null?$a=[_]:$a.push(_),_=b;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var ae=ep(_,j,r);Ch(_,ae);break e;case 1:H=j;var $=_.type,de=_.stateNode;if((_.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(_r===null||!_r.has(de)))){_.flags|=65536,r&=-r,_.lanes|=r;var We=tp(_,H,r);Ch(_,We);break e}}_=_.return}while(_!==null)}Up(o)}catch(ut){r=ut,sn===o&&o!==null&&(sn=o=o.return);continue}break}while(!0)}function Dp(){var n=cl.current;return cl.current=il,n===null?il:n}function Yu(){(dn===0||dn===3||dn===2)&&(dn=4),vn===null||(Jr&268435455)===0&&(ul&268435455)===0||Mr(vn,Mn)}function gl(n,r){var o=Pt;Pt|=2;var d=Dp();(vn!==n||Mn!==r)&&(Yi=null,Qr(n,r));do try{wx();break}catch(p){Np(n,p)}while(!0);if(ou(),Pt=o,cl.current=d,sn!==null)throw Error(t(261));return vn=null,Mn=0,dn}function wx(){for(;sn!==null;)Ip(sn)}function Tx(){for(;sn!==null&&!tt();)Ip(sn)}function Ip(n){var r=zp(n.alternate,n,ei);n.memoizedProps=n.pendingProps,r===null?Up(n):sn=r,ku.current=null}function Up(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=vx(o,r,ei),o!==null){sn=o;return}}else{if(o=xx(o,r),o!==null){o.flags&=32767,sn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,sn=null;return}}if(r=r.sibling,r!==null){sn=r;return}sn=r=n}while(r!==null);dn===0&&(dn=5)}function es(n,r,o){var d=Dt,p=ui.transition;try{ui.transition=null,Dt=1,Ax(n,r,o,d)}finally{ui.transition=p,Dt=d}return null}function Ax(n,r,o,d){do ks();while(yr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=o.lanes|o.childLanes;if(Tc(n,_),n===vn&&(sn=vn=null,Mn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fl||(fl=!0,kp(Nt,function(){return ks(),null})),_=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||_){_=ui.transition,ui.transition=null;var b=Dt;Dt=1;var H=Pt;Pt|=4,ku.current=null,yx(n,o),Tp(o,n),Xv(Yc),Co=!!qc,Yc=qc=null,n.current=o,Sx(o),st(),Pt=H,Dt=b,ui.transition=_}else n.current=o;if(fl&&(fl=!1,yr=n,hl=p),_=n.pendingLanes,_===0&&(_r=null),tn(o.stateNode),jn(n,Ze()),r!==null)for(d=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],d(p.value,{componentStack:p.stack,digest:p.digest});if(dl)throw dl=!1,n=Vu,Vu=null,n;return(hl&1)!==0&&n.tag!==0&&ks(),_=n.pendingLanes,(_&1)!==0?n===Gu?Ka++:(Ka=0,Gu=n):Ka=0,mr(),null}function ks(){if(yr!==null){var n=Eo(hl),r=ui.transition,o=Dt;try{if(ui.transition=null,Dt=16>n?16:n,yr===null)var d=!1;else{if(n=yr,yr=null,hl=0,(Pt&6)!==0)throw Error(t(331));var p=Pt;for(Pt|=4,it=n.current;it!==null;){var _=it,b=_.child;if((it.flags&16)!==0){var H=_.deletions;if(H!==null){for(var j=0;j<H.length;j++){var he=H[j];for(it=he;it!==null;){var Fe=it;switch(Fe.tag){case 0:case 11:case 15:qa(8,Fe,_)}var ke=Fe.child;if(ke!==null)ke.return=Fe,it=ke;else for(;it!==null;){Fe=it;var Oe=Fe.sibling,Qe=Fe.return;if(yp(Fe),Fe===he){it=null;break}if(Oe!==null){Oe.return=Qe,it=Oe;break}it=Qe}}}var at=_.alternate;if(at!==null){var ot=at.child;if(ot!==null){at.child=null;do{var nn=ot.sibling;ot.sibling=null,ot=nn}while(ot!==null)}}it=_}}if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,it=b;else e:for(;it!==null;){if(_=it,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:qa(9,_,_.return)}var ae=_.sibling;if(ae!==null){ae.return=_.return,it=ae;break e}it=_.return}}var $=n.current;for(it=$;it!==null;){b=it;var de=b.child;if((b.subtreeFlags&2064)!==0&&de!==null)de.return=b,it=de;else e:for(b=$;it!==null;){if(H=it,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:ll(9,H)}}catch(ut){en(H,H.return,ut)}if(H===b){it=null;break e}var We=H.sibling;if(We!==null){We.return=H.return,it=We;break e}it=H.return}}if(Pt=p,mr(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(yt,n)}catch{}d=!0}return d}finally{Dt=o,ui.transition=r}}return!1}function Op(n,r,o){r=Us(o,r),r=ep(n,r,1),n=vr(n,r,1),r=On(),n!==null&&(Gr(n,1,r),jn(n,r))}function en(n,r,o){if(n.tag===3)Op(n,n,o);else for(;r!==null;){if(r.tag===3){Op(r,n,o);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(_r===null||!_r.has(d))){n=Us(o,n),n=tp(r,n,1),r=vr(r,n,1),n=On(),r!==null&&(Gr(r,1,n),jn(r,n));break}}r=r.return}}function Cx(n,r,o){var d=n.pingCache;d!==null&&d.delete(r),r=On(),n.pingedLanes|=n.suspendedLanes&o,vn===n&&(Mn&o)===o&&(dn===4||dn===3&&(Mn&130023424)===Mn&&500>Ze()-Hu?Qr(n,0):Bu|=o),jn(n,r)}function Fp(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var o=On();n=ji(n,r),n!==null&&(Gr(n,r,o),jn(n,o))}function bx(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Fp(n,o)}function Rx(n,r){var o=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Fp(n,o)}var zp;zp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Hn.current)Gn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Gn=!1,gx(n,r,o);Gn=(n.flags&131072)!==0}else Gn=!1,Xt&&(r.flags&1048576)!==0&&vh(r,jo,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;al(n,r),n=r.pendingProps;var p=Cs(r,Tn.current);Ds(r,o),p=xu(null,r,d,n,p,o);var _=_u();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Vn(d)?(_=!0,Vo(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,du(r),p.updater=rl,r.stateNode=p,p._reactInternals=r,Tu(r,d,n,o),r=Ru(null,r,d,!0,_,o)):(r.tag=0,Xt&&_&&tu(r),Un(null,r,p,o),r=r.child),r;case 16:d=r.elementType;e:{switch(al(n,r),n=r.pendingProps,p=d._init,d=p(d._payload),r.type=d,p=r.tag=Lx(d),n=vi(d,n),p){case 0:r=bu(null,r,d,n,o);break e;case 1:r=up(null,r,d,n,o);break e;case 11:r=sp(null,r,d,n,o);break e;case 14:r=ap(null,r,d,vi(d.type,n),o);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),bu(n,r,d,p,o);case 1:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),up(n,r,d,p,o);case 3:e:{if(dp(r),n===null)throw Error(t(387));d=r.pendingProps,_=r.memoizedState,p=_.element,Ah(n,r),Jo(r,d,null,o);var b=r.memoizedState;if(d=b.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=Us(Error(t(423)),r),r=fp(n,r,d,o,p);break e}else if(d!==p){p=Us(Error(t(424)),r),r=fp(n,r,d,o,p);break e}else for(Qn=fr(r.stateNode.containerInfo.firstChild),Zn=r,Xt=!0,gi=null,o=wh(r,null,d,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ps(),d===p){r=qi(n,r,o);break e}Un(n,r,d,o)}r=r.child}return r;case 5:return Rh(r),n===null&&ru(r),d=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,b=p.children,$c(d,p)?b=null:_!==null&&$c(d,_)&&(r.flags|=32),cp(n,r),Un(n,r,b,o),r.child;case 6:return n===null&&ru(r),null;case 13:return hp(n,r,o);case 4:return fu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Ls(r,null,d,o):Un(n,r,d,o),r.child;case 11:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),sp(n,r,d,p,o);case 7:return Un(n,r,r.pendingProps,o),r.child;case 8:return Un(n,r,r.pendingProps.children,o),r.child;case 12:return Un(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(d=r.type._context,p=r.pendingProps,_=r.memoizedProps,b=p.value,Ht(Yo,d._currentValue),d._currentValue=b,_!==null)if(mi(_.value,b)){if(_.children===p.children&&!Hn.current){r=qi(n,r,o);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var H=_.dependencies;if(H!==null){b=_.child;for(var j=H.firstContext;j!==null;){if(j.context===d){if(_.tag===1){j=Xi(-1,o&-o),j.tag=2;var he=_.updateQueue;if(he!==null){he=he.shared;var Fe=he.pending;Fe===null?j.next=j:(j.next=Fe.next,Fe.next=j),he.pending=j}}_.lanes|=o,j=_.alternate,j!==null&&(j.lanes|=o),cu(_.return,o,r),H.lanes|=o;break}j=j.next}}else if(_.tag===10)b=_.type===r.type?null:_.child;else if(_.tag===18){if(b=_.return,b===null)throw Error(t(341));b.lanes|=o,H=b.alternate,H!==null&&(H.lanes|=o),cu(b,o,r),b=_.sibling}else b=_.child;if(b!==null)b.return=_;else for(b=_;b!==null;){if(b===r){b=null;break}if(_=b.sibling,_!==null){_.return=b.return,b=_;break}b=b.return}_=b}Un(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,d=r.pendingProps.children,Ds(r,o),p=li(p),d=d(p),r.flags|=1,Un(n,r,d,o),r.child;case 14:return d=r.type,p=vi(d,r.pendingProps),p=vi(d.type,p),ap(n,r,d,p,o);case 15:return op(n,r,r.type,r.pendingProps,o);case 17:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),al(n,r),r.tag=1,Vn(d)?(n=!0,Vo(r)):n=!1,Ds(r,o),Zh(r,d,p),Tu(r,d,p,o),Ru(null,r,d,!0,n,o);case 19:return mp(n,r,o);case 22:return lp(n,r,o)}throw Error(t(156,r.tag))};function kp(n,r){return Pe(n,r)}function Px(n,r,o,d){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,r,o,d){return new Px(n,r,o,d)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Lx(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===ce)return 14}return 2}function Er(n,r){var o=n.alternate;return o===null?(o=di(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function vl(n,r,o,d,p,_){var b=2;if(d=n,typeof n=="function")$u(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case F:return ts(o.children,p,_,r);case I:b=8,p|=8;break;case L:return n=di(12,o,r,p|2),n.elementType=L,n.lanes=_,n;case J:return n=di(13,o,r,p),n.elementType=J,n.lanes=_,n;case te:return n=di(19,o,r,p),n.elementType=te,n.lanes=_,n;case ge:return xl(o,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:b=10;break e;case B:b=9;break e;case Y:b=11;break e;case ce:b=14;break e;case Z:b=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=di(b,o,r,p),r.elementType=n,r.type=d,r.lanes=_,r}function ts(n,r,o,d){return n=di(7,n,d,r),n.lanes=o,n}function xl(n,r,o,d){return n=di(22,n,d,r),n.elementType=ge,n.lanes=o,n.stateNode={isHidden:!1},n}function Ku(n,r,o){return n=di(6,n,null,r),n.lanes=o,n}function Ju(n,r,o){return r=di(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Nx(n,r,o,d,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zu(n,r,o,d,p,_,b,H,j){return n=new Nx(n,r,o,H,j),r===1?(r=1,_===!0&&(r|=8)):r=0,_=di(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:d,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(_),n}function Dx(n,r,o){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:d==null?null:""+d,children:n,containerInfo:r,implementation:o}}function Bp(n){if(!n)return pr;n=n._reactInternals;e:{if(we(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Vn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Vn(o))return ph(n,o,r)}return r}function Hp(n,r,o,d,p,_,b,H,j){return n=Zu(o,d,!0,n,p,_,b,H,j),n.context=Bp(null),o=n.current,d=On(),p=Sr(o),_=Xi(d,p),_.callback=r??null,vr(o,_,p),n.current.lanes=p,Gr(n,p,d),jn(n,d),n}function _l(n,r,o,d){var p=r.current,_=On(),b=Sr(p);return o=Bp(o),r.context===null?r.context=o:r.pendingContext=o,r=Xi(_,b),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=vr(p,r,b),n!==null&&(yi(n,p,b,_),Ko(n,p,b)),b}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Qu(n,r){Vp(n,r),(n=n.alternate)&&Vp(n,r)}function Ix(){return null}var Gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function ed(n){this._internalRoot=n}Sl.prototype.render=ed.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));_l(n,r,null,null)},Sl.prototype.unmount=ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Zr(function(){_l(null,n,null,null)}),r[Hi]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Af();n={blockedOn:null,target:n,priority:r};for(var o=0;o<cr.length&&r!==0&&r<cr[o].priority;o++);cr.splice(o,0,n),o===0&&Rf(n)}};function td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function Ux(n,r,o,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var he=yl(b);_.call(he)}}var b=Hp(r,d,n,0,null,!1,!1,"",Wp);return n._reactRootContainer=b,n[Hi]=b.current,Ia(n.nodeType===8?n.parentNode:n),Zr(),b}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var H=d;d=function(){var he=yl(j);H.call(he)}}var j=Zu(n,0,!1,null,null,!1,!1,"",Wp);return n._reactRootContainer=j,n[Hi]=j.current,Ia(n.nodeType===8?n.parentNode:n),Zr(function(){_l(r,j,o,d)}),j}function El(n,r,o,d,p){var _=o._reactRootContainer;if(_){var b=_;if(typeof p=="function"){var H=p;p=function(){var j=yl(b);H.call(j)}}_l(r,b,n,p)}else b=Ux(o,r,n,p,d);return yl(b)}wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=cn(r.pendingLanes);o!==0&&(ya(r,o|1),jn(r,Ze()),(Pt&6)===0&&(zs=Ze()+500,mr()))}break;case 13:Zr(function(){var d=ji(n,1);if(d!==null){var p=On();yi(d,n,1,p)}}),Qu(n,1)}},Ac=function(n){if(n.tag===13){var r=ji(n,134217728);if(r!==null){var o=On();yi(r,n,134217728,o)}Qu(n,134217728)}},Tf=function(n){if(n.tag===13){var r=Sr(n),o=ji(n,r);if(o!==null){var d=On();yi(o,n,r,d)}Qu(n,r)}},Af=function(){return Dt},Cf=function(n,r){var o=Dt;try{return Dt=n,r()}finally{Dt=o}},me=function(n,r,o){switch(r){case"input":if(Le(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var d=o[r];if(d!==n&&d.form===n.form){var p=Bo(d);if(!p)throw Error(t(90));ve(d),Le(d,p)}}}break;case"textarea":pe(n,o);break;case"select":r=o.value,r!=null&&C(n,!!o.multiple,r,!1)}},Ct=Xu,ft=Zr;var Ox={usingClientEntryPoint:!1,Events:[Fa,Ts,Bo,vt,wt,Xu]},Ja={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fx={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=oe(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{yt=wl.inject(Fx),nt=wl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox,Xn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(r))throw Error(t(200));return Dx(n,r,null,o)},Xn.createRoot=function(n,r){if(!td(n))throw Error(t(299));var o=!1,d="",p=Gp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Zu(n,1,!1,null,null,o,!1,d,p),n[Hi]=r.current,Ia(n.nodeType===8?n.parentNode:n),new ed(r)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=oe(r),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return Zr(n)},Xn.hydrate=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!0,o)},Xn.hydrateRoot=function(n,r,o){if(!td(n))throw Error(t(405));var d=o!=null&&o.hydratedSources||null,p=!1,_="",b=Gp;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(_=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),r=Hp(r,null,n,1,o??null,p,!1,_,b),n[Hi]=r.current,Ia(n),d)for(n=0;n<d.length;n++)o=d[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new Sl(r)},Xn.render=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!1,o)},Xn.unmountComponentAtNode=function(n){if(!Ml(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Xu,Xn.unstable_renderSubtreeIntoContainer=function(n,r,o,d){if(!Ml(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,r,o,!1,d)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Qp;function qx(){if(Qp)return rd.exports;Qp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rd.exports=Xx(),rd.exports}var em;function Yx(){if(em)return Tl;em=1;var i=qx();return Tl.createRoot=i.createRoot,Tl.hydrateRoot=i.hydrateRoot,Tl}var $x=Yx();const Kx=t0($x),Jx="modulepreload",Zx=function(i){return"/pr-preview/pr-70/"+i},tm={},i0=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));a=c(t.map(h=>{if(h=Zx(h),h in tm)return;tm[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Jx,m||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),m)return new Promise((y,M)=>{v.addEventListener("load",y),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return a.then(c=>{for(const u of c||[])u.status==="rejected"&&l(u.reason);return e().catch(l)})};var Nn=Math.PI,qt=Nn*2,nr=Nn/180,Qx=180/Nn,e_=1440,t_=398600.8,ii=6378.135,ir=60/Math.sqrt(ii*ii*ii/t_),od=ii*ir/60,n_=1/ir,fs=.001082616,i_=-253881e-11,r_=-165597e-11,hs=i_/fs,po=2/3,r0=1440/(2*Nn);function s0(i,e){for(var t=[31,i%4===0?29:28,31,30,31,30,31,31,30,31,30,31],s=Math.floor(e),a=1,l=0;s>l+t[a-1]&&a<12;)l+=t[a-1],a+=1;var c=a,u=s-l,f=(e-s)*24,h=Math.floor(f);f=(f-h)*60;var m=Math.floor(f),g=(f-m)*60;return{mon:c,day:u,hr:h,minute:m,sec:g}}function nm(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*i-Math.floor(7*(i+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((c/6e4+l/60+a)/60+s)/24}function vc(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(i instanceof Date){var u=i;return nm(u.getUTCFullYear(),u.getUTCMonth()+1,u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds())}return nm(i,e,t,s,a,l,c)}function a0(i,e){var t=i.e3,s=i.ee2,a=i.peo,l=i.pgho,c=i.pho,u=i.pinco,f=i.plo,h=i.se2,m=i.se3,g=i.sgh2,v=i.sgh3,y=i.sgh4,M=i.sh2,w=i.sh3,S=i.si2,x=i.si3,D=i.sl2,E=i.sl3,R=i.sl4,k=i.t,N=i.xgh2,F=i.xgh3,I=i.xgh4,L=i.xh2,A=i.xh3,B=i.xi2,Y=i.xi3,J=i.xl2,te=i.xl3,ce=i.xl4,Z=i.zmol,ge=i.zmos,G=e.init,ne=e.opsmode,re=e.ep,U=e.inclp,X=e.nodep,Ne=e.argpp,Q=e.mp,ie,ue,_e,De,Be,He,V,ve,Ee,Te,Se,Ae,Le,be,qe,O,C,se,ye,pe,Me,je=119459e-10,Ie=.01675,Ue=.00015835218,et=.0549;Me=ge+je*k,G==="y"&&(Me=ge),pe=Me+2*Ie*Math.sin(Me),C=Math.sin(pe),Te=.5*C*C-.25,Se=-.5*C*Math.cos(pe);var Re=h*Te+m*Se,Xe=S*Te+x*Se,T=D*Te+E*Se+R*C,Je=g*Te+v*Se+y*C,ze=M*Te+w*Se;Me=Z+Ue*k,G==="y"&&(Me=Z),pe=Me+2*et*Math.sin(Me),C=Math.sin(pe),Te=.5*C*C-.25,Se=-.5*C*Math.cos(pe);var lt=s*Te+t*Se,dt=B*Te+Y*Se,ht=J*Te+te*Se+ce*C,W=N*Te+F*Se+I*C,Ge=L*Te+A*Se;return Ae=Re+lt,qe=Xe+dt,O=T+ht,Le=Je+W,be=ze+Ge,G==="n"&&(Ae-=a,qe-=u,O-=f,Le-=l,be-=c,U+=qe,re+=Ae,De=Math.sin(U),_e=Math.cos(U),U>=.2?(be/=De,Le-=_e*be,Ne+=Le,X+=be,Q+=O):(He=Math.sin(X),Be=Math.cos(X),ie=De*He,ue=De*Be,V=be*Be+qe*_e*He,ve=-be*He+qe*_e*Be,ie+=V,ue+=ve,X%=qt,X<0&&ne==="a"&&(X+=qt),se=Q+Ne+_e*X,Ee=O+Le-qe*X*De,se+=Ee,ye=X,X=Math.atan2(ie,ue),X<0&&ne==="a"&&(X+=qt),Math.abs(ye-X)>Nn&&(X<ye?X+=qt:X-=qt),Q+=O,Ne=se-Q-_e*X)),{ep:re,inclp:U,nodep:X,argpp:Ne,mp:Q}}function s_(i){var e=i.epoch,t=i.ep,s=i.argpp,a=i.tc,l=i.inclp,c=i.nodep,u=i.np,f,h,m,g,v,y,M,w,S,x,D,E,R,k,N,F,I,L,A,B,Y,J,te,ce,Z,ge,G,ne,re,U,X,Ne,Q,ie,ue,_e,De,Be,He,V,ve,Ee,Te,Se,Ae,Le,be,qe,O,C,se,ye,pe,Me,je,Ie,Ue,et,Re,Xe,T,Je,ze,lt=.01675,dt=.0549,ht=29864797e-13,W=47968065e-14,Ge=.39785416,me=.91744867,xe=.1945905,Ce=-.98088458,rt=u,vt=t,wt=Math.sin(c),Ct=Math.cos(c),ft=Math.sin(s),Rt=Math.cos(s),It=Math.sin(l),Ut=Math.cos(l),Ve=vt*vt,$t=1-Ve,Qt=Math.sqrt($t),rn=0,St=0,on=0,wn=0,ri=0,Dn=e+18261.5+a/1440,ln=(4.523602-.00092422029*Dn)%qt,we=Math.sin(ln),P=Math.cos(ln),q=.91375164-.03568096*P,le=Math.sqrt(1-q*q),oe=.089683511*we/le,ee=Math.sqrt(1-oe*oe),Pe=5.8351514+.001944368*Dn,Ye=.39785416*we/le,tt=ee*P+.91744867*oe*we;Ye=Math.atan2(Ye,tt),Ye+=Pe-ln;var st=Math.cos(Ye),Ze=Math.sin(Ye);B=xe,Y=Ce,ce=me,Z=Ge,J=Ct,te=wt,D=ht;for(var pt=1/rt,ct=0;ct<2;)ct+=1,f=B*J+Y*ce*te,m=-Y*J+B*ce*te,M=-B*te+Y*ce*J,w=Y*Z,S=Y*te+B*ce*J,x=B*Z,h=Ut*M+It*w,g=Ut*S+It*x,v=-It*M+Ut*w,y=-It*S+Ut*x,E=f*Rt+h*ft,R=m*Rt+g*ft,k=-f*ft+h*Rt,N=-m*ft+g*Rt,F=v*ft,I=y*ft,L=v*Rt,A=y*Rt,T=12*E*E-3*k*k,Je=24*E*R-6*k*N,ze=12*R*R-3*N*N,ye=3*(f*f+h*h)+T*Ve,pe=6*(f*m+h*g)+Je*Ve,Me=3*(m*m+g*g)+ze*Ve,je=-6*f*v+Ve*(-24*E*L-6*k*F),Ie=-6*(f*y+m*v)+Ve*(-24*(R*L+E*A)+-6*(k*I+N*F)),Ue=-6*m*y+Ve*(-24*R*A-6*N*I),et=6*h*v+Ve*(24*E*F-6*k*L),Re=6*(g*v+h*y)+Ve*(24*(R*F+E*I)-6*(N*L+k*A)),Xe=6*g*y+Ve*(24*R*I-6*N*A),ye=ye+ye+$t*T,pe=pe+pe+$t*Je,Me=Me+Me+$t*ze,be=D*pt,Le=-.5*be/Qt,qe=be*Qt,Ae=-15*vt*qe,O=E*k+R*N,C=R*k+E*N,se=R*N-E*k,ct===1&&(ge=Ae,G=Le,ne=be,re=qe,U=O,X=C,Ne=se,Q=ye,ie=pe,ue=Me,_e=je,De=Ie,Be=Ue,He=et,V=Re,ve=Xe,Ee=T,Te=Je,Se=ze,B=st,Y=Ze,ce=q,Z=le,J=ee*Ct+oe*wt,te=wt*ee-Ct*oe,D=W);var Tt=(4.7199672+(.2299715*Dn-Pe))%qt,Nt=(6.2565837+.017201977*Dn)%qt,kt=2*ge*X,jt=2*ge*Ne,yt=2*G*De,nt=2*G*(Be-_e),tn=-2*ne*ie,_t=-2*ne*(ue-Q),In=-2*ne*(-21-9*Ve)*lt,$n=2*re*Te,Kn=2*re*(Se-Ee),si=-18*re*lt,Ot=-2*G*V,cn=-2*G*(ve-He),Bn=2*Ae*C,mn=2*Ae*se,Bi=2*Le*Ie,Hr=2*Le*(Ue-je),Vr=-2*be*pe,_a=-2*be*(Me-ye),Gr=-2*be*(-21-9*Ve)*dt,Tc=2*qe*Je,ya=2*qe*(ze-T),Dt=-18*qe*dt,Eo=-2*Le*Re,wo=-2*Le*(Xe-et);return{snodm:wt,cnodm:Ct,sinim:It,cosim:Ut,sinomm:ft,cosomm:Rt,day:Dn,e3:mn,ee2:Bn,em:vt,emsq:Ve,gam:Pe,peo:rn,pgho:wn,pho:ri,pinco:St,plo:on,rtemsq:Qt,se2:kt,se3:jt,sgh2:$n,sgh3:Kn,sgh4:si,sh2:Ot,sh3:cn,si2:yt,si3:nt,sl2:tn,sl3:_t,sl4:In,s1:Ae,s2:Le,s3:be,s4:qe,s5:O,s6:C,s7:se,ss1:ge,ss2:G,ss3:ne,ss4:re,ss5:U,ss6:X,ss7:Ne,sz1:Q,sz2:ie,sz3:ue,sz11:_e,sz12:De,sz13:Be,sz21:He,sz22:V,sz23:ve,sz31:Ee,sz32:Te,sz33:Se,xgh2:Tc,xgh3:ya,xgh4:Dt,xh2:Eo,xh3:wo,xi2:Bi,xi3:Hr,xl2:Vr,xl3:_a,xl4:Gr,nm:rt,z1:ye,z2:pe,z3:Me,z11:je,z12:Ie,z13:Ue,z21:et,z22:Re,z23:Xe,z31:T,z32:Je,z33:ze,zmol:Tt,zmos:Nt}}function a_(i){var e=i.cosim,t=i.argpo,s=i.s1,a=i.s2,l=i.s3,c=i.s4,u=i.s5,f=i.sinim,h=i.ss1,m=i.ss2,g=i.ss3,v=i.ss4,y=i.ss5,M=i.sz1,w=i.sz3,S=i.sz11,x=i.sz13,D=i.sz21,E=i.sz23,R=i.sz31,k=i.sz33,N=i.t,F=i.tc,I=i.gsto,L=i.mo,A=i.mdot,B=i.no,Y=i.nodeo,J=i.nodedot,te=i.xpidot,ce=i.z1,Z=i.z3,ge=i.z11,G=i.z13,ne=i.z21,re=i.z23,U=i.z31,X=i.z33,Ne=i.ecco,Q=i.eccsq,ie=i.emsq,ue=i.em,_e=i.argpm,De=i.inclm,Be=i.mm,He=i.nm,V=i.nodem,ve=i.irez,Ee=i.atime,Te=i.d2201,Se=i.d2211,Ae=i.d3210,Le=i.d3222,be=i.d4410,qe=i.d4422,O=i.d5220,C=i.d5232,se=i.d5421,ye=i.d5433,pe=i.dedt,Me=i.didt,je=i.dmdt,Ie=i.dnodt,Ue=i.domdt,et=i.del1,Re=i.del2,Xe=i.del3,T=i.xfact,Je=i.xlamo,ze=i.xli,lt=i.xni,dt,ht,W,Ge,me,xe,Ce,rt,vt,wt,Ct,ft,Rt,It,Ut,Ve,$t,Qt,rn,St,on,wn,ri,Dn,ln,we,P,q,le,oe,ee,Pe,Ye=17891679e-13,tt=21460748e-13,st=22123015e-14,Ze=17891679e-13,pt=73636953e-16,ct=21765803e-16,Tt=.0043752690880113,Nt=37393792e-14,kt=11428639e-14,jt=.00015835218,yt=119459e-10;ve=0,He<.0052359877&&He>.0034906585&&(ve=1),He>=.00826&&He<=.00924&&ue>=.5&&(ve=2);var nt=h*yt*y,tn=m*yt*(S+x),_t=-yt*g*(M+w-14-6*ie),In=v*yt*(R+k-6),$n=-yt*m*(D+E);(De<.052359877||De>Nn-.052359877)&&($n=0),f!==0&&($n/=f);var Kn=In-e*$n;pe=nt+s*jt*u,Me=tn+a*jt*(ge+G),je=_t-jt*l*(ce+Z-14-6*ie);var si=c*jt*(U+X-6),Ot=-jt*a*(ne+re);(De<.052359877||De>Nn-.052359877)&&(Ot=0),Ue=Kn+si,Ie=$n,f!==0&&(Ue-=e/f*Ot,Ie+=Ot/f);var cn=0,Bn=(I+F*Tt)%qt;if(ue+=pe*N,De+=Me*N,_e+=Ue*N,V+=Ie*N,Be+=je*N,ve!==0){if(oe=Math.pow(He/ir,po),ve===2){ee=e*e;var mn=ue;ue=Ne;var Bi=ie;ie=Q,Pe=ue*ie,It=-.306-(ue-.64)*.44,ue<=.65?(Ut=3.616-13.247*ue+16.29*ie,$t=-19.302+117.39*ue-228.419*ie+156.591*Pe,Qt=-18.9068+109.7927*ue-214.6334*ie+146.5816*Pe,rn=-41.122+242.694*ue-471.094*ie+313.953*Pe,St=-146.407+841.88*ue-1629.014*ie+1083.435*Pe,on=-532.114+3017.977*ue-5740.032*ie+3708.276*Pe):(Ut=-72.099+331.819*ue-508.738*ie+266.724*Pe,$t=-346.844+1582.851*ue-2415.925*ie+1246.113*Pe,Qt=-342.585+1554.908*ue-2366.899*ie+1215.972*Pe,rn=-1052.797+4758.686*ue-7193.992*ie+3651.957*Pe,St=-3581.69+16178.11*ue-24462.77*ie+12422.52*Pe,ue>.715?on=-5149.66+29936.92*ue-54087.36*ie+31324.56*Pe:on=1464.74-4664.75*ue+3763.64*ie),ue<.7?(Dn=-919.2277+4988.61*ue-9064.77*ie+5542.21*Pe,wn=-822.71072+4568.6173*ue-8491.4146*ie+5337.524*Pe,ri=-853.666+4690.25*ue-8624.77*ie+5341.4*Pe):(Dn=-37995.78+161616.52*ue-229838.2*ie+109377.94*Pe,wn=-51752.104+218913.95*ue-309468.16*ie+146349.42*Pe,ri=-40023.88+170470.89*ue-242699.48*ie+115605.82*Pe),ln=f*f,dt=.75*(1+2*e+ee),ht=1.5*ln,Ge=1.875*f*(1-2*e-3*ee),me=-1.875*f*(1+2*e-3*ee),Ce=35*ln*dt,rt=39.375*ln*ln,vt=9.84375*f*(ln*(1-2*e-5*ee)+.33333333*(-2+4*e+6*ee)),wt=f*(4.92187512*ln*(-2-4*e+10*ee)+6.56250012*(1+2*e-3*ee)),Ct=29.53125*f*(2-8*e+ee*(-12+8*e+10*ee)),ft=29.53125*f*(-2-8*e+ee*(12+8*e-10*ee)),q=He*He,le=oe*oe,P=3*q*le,we=P*Ze,Te=we*dt*It,Se=we*ht*Ut,P*=oe,we=P*Nt,Ae=we*Ge*$t,Le=we*me*Qt,P*=oe,we=2*P*pt,be=we*Ce*rn,qe=we*rt*St,P*=oe,we=P*kt,O=we*vt*on,C=we*wt*ri,we=2*P*ct,se=we*Ct*wn,ye=we*ft*Dn,Je=(L+Y+Y-(Bn+Bn))%qt,T=A+je+2*(J+Ie-Tt)-B,ue=mn,ie=Bi}ve===1&&(Rt=1+ie*(-2.5+.8125*ie),$t=1+2*ie,Ve=1+ie*(-6+6.60937*ie),dt=.75*(1+e)*(1+e),W=.9375*f*f*(1+3*e)-.75*(1+e),xe=1+e,xe*=1.875*xe*xe,et=3*He*He*oe*oe,Re=2*et*dt*Rt*Ye,Xe=3*et*xe*Ve*st*oe,et=et*W*$t*tt*oe,Je=(L+Y+t-Bn)%qt,T=A+te+je+Ue+Ie-(B+Tt)),ze=Je,lt=B,Ee=0,He=B+cn}return{em:ue,argpm:_e,inclm:De,mm:Be,nm:He,nodem:V,irez:ve,atime:Ee,d2201:Te,d2211:Se,d3210:Ae,d3222:Le,d4410:be,d4422:qe,d5220:O,d5232:C,d5421:se,d5433:ye,dedt:pe,didt:Me,dmdt:je,dndt:cn,dnodt:Ie,domdt:Ue,del1:et,del2:Re,del3:Xe,xfact:T,xlamo:Je,xli:ze,xni:lt}}function im(i){var e=(i-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*nr/240%qt,t<0&&(t+=qt),t}function o0(i,e,t,s,a,l,c){return i instanceof Date?im(vc(i)):im(i)}function o_(i){var e=i.ecco,t=i.epoch,s=i.inclo,a=i.opsmode,l=i.no,c=e*e,u=1-c,f=Math.sqrt(u),h=Math.cos(s),m=h*h,g=Math.pow(ir/l,po),v=.75*fs*(3*m-1)/(f*u),y=v/(g*g),M=g*(1-y*y-y*(1/3+134*y*y/81));y=v/(M*M),l/=1+y;var w=Math.pow(ir/l,po),S=Math.sin(s),x=w*u,D=1-5*m,E=-D-m-m,R=1/w,k=x*x,N=w*(1-e),F="n",I;if(a==="a"){var L=t-7305,A=Math.floor(L+1e-8),B=L-A,Y=.017202791694070362,J=1.7321343856509375,te=5075514194322695e-30,ce=Y+qt;I=(J+Y*A+ce*B+L*L*te)%qt,I<0&&(I+=qt)}else I=o0(t+24332815e-1);return{no:l,method:F,ainv:R,ao:w,con41:E,con42:D,cosio:h,cosio2:m,eccsq:c,omeosq:u,posq:k,rp:N,rteosq:f,sinio:S,gsto:I}}function l_(i){var e=i.irez,t=i.d2201,s=i.d2211,a=i.d3210,l=i.d3222,c=i.d4410,u=i.d4422,f=i.d5220,h=i.d5232,m=i.d5421,g=i.d5433,v=i.dedt,y=i.del1,M=i.del2,w=i.del3,S=i.didt,x=i.dmdt,D=i.dnodt,E=i.domdt,R=i.argpo,k=i.argpdot,N=i.t,F=i.tc,I=i.gsto,L=i.xfact,A=i.xlamo,B=i.no,Y=i.atime,J=i.em,te=i.argpm,ce=i.inclm,Z=i.xli,ge=i.mm,G=i.xni,ne=i.nodem,re=i.nm,U=.13130908,X=2.8843198,Ne=.37448087,Q=5.7686396,ie=.95240898,ue=1.8014998,_e=1.050833,De=4.4108898,Be=.0043752690880113,He=720,V=-720,ve=259200,Ee,Te,Se,Ae,Le,be,qe,O,C=0,se=0,ye=(I+F*Be)%qt;if(J+=v*N,ce+=S*N,te+=E*N,ne+=D*N,ge+=x*N,e!==0){(Y===0||N*Y<=0||Math.abs(N)<Math.abs(Y))&&(Y=0,G=B,Z=A),N>0?Ee=He:Ee=V;for(var pe=381;pe===381;)e!==2?(qe=y*Math.sin(Z-U)+M*Math.sin(2*(Z-X))+w*Math.sin(3*(Z-Ne)),Le=G+L,be=y*Math.cos(Z-U)+2*M*Math.cos(2*(Z-X))+3*w*Math.cos(3*(Z-Ne)),be*=Le):(O=R+k*Y,Se=O+O,Te=Z+Z,qe=t*Math.sin(Se+Z-Q)+s*Math.sin(Z-Q)+a*Math.sin(O+Z-ie)+l*Math.sin(-O+Z-ie)+c*Math.sin(Se+Te-ue)+u*Math.sin(Te-ue)+f*Math.sin(O+Z-_e)+h*Math.sin(-O+Z-_e)+m*Math.sin(O+Te-De)+g*Math.sin(-O+Te-De),Le=G+L,be=t*Math.cos(Se+Z-Q)+s*Math.cos(Z-Q)+a*Math.cos(O+Z-ie)+l*Math.cos(-O+Z-ie)+f*Math.cos(O+Z-_e)+h*Math.cos(-O+Z-_e)+2*(c*Math.cos(Se+Te-ue)+u*Math.cos(Te-ue)+m*Math.cos(O+Te-De)+g*Math.cos(-O+Te-De)),be*=Le),Math.abs(N-Y)>=He?pe=381:(se=N-Y,pe=0),pe===381&&(Z+=Le*Ee+qe*ve,G+=qe*Ee+be*ve,Y+=Ee);re=G+qe*se+be*se*se*.5,Ae=Z+Le*se+qe*se*se*.5,e!==1?(ge=Ae-2*ne+2*ye,C=re-B):(ge=Ae-ne-te+ye,C=re-B),re=B+C}return{atime:Y,em:J,argpm:te,inclm:ce,xli:Z,mm:ge,xni:G,nodem:ne,dndt:C,nm:re}}var Lr;(function(i){i[i.None=0]="None",i[i.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",i[i.MeanMotionBelowZero=2]="MeanMotionBelowZero",i[i.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",i[i.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",i[i.Decayed=6]="Decayed"})(Lr||(Lr={}));function l0(i,e){var t,s,a,l,c,u,f,h,m,g,v,y,M,w,S,x,D,E,R,k,N,F,I,L,A,B,Y,J=15e-13;i.t=e,i.error=Lr.None;var te=i.mo+i.mdot*i.t,ce=i.argpo+i.argpdot*i.t,Z=i.nodeo+i.nodedot*i.t;m=ce,N=te;var ge=i.t*i.t;if(I=Z+i.nodecf*ge,D=1-i.cc1*i.t,E=i.bstar*i.cc4*i.t,R=i.t2cof*ge,i.isimp!==1){f=i.omgcof*i.t;var G=1+i.eta*Math.cos(te);u=i.xmcof*(G*G*G-i.delmo),x=f+u,N=te+x,m=ce-x,y=ge*i.t,M=y*i.t,D=D-i.d2*ge-i.d3*y-i.d4*M,E+=i.bstar*i.cc5*(Math.sin(N)-i.sinmao),R=R+i.t3cof*y+M*(i.t4cof+i.t*i.t5cof)}F=i.no;var ne=i.ecco;if(k=i.inclo,i.method==="d"){w=i.t;var re={irez:i.irez,d2201:i.d2201,d2211:i.d2211,d3210:i.d3210,d3222:i.d3222,d4410:i.d4410,d4422:i.d4422,d5220:i.d5220,d5232:i.d5232,d5421:i.d5421,d5433:i.d5433,dedt:i.dedt,del1:i.del1,del2:i.del2,del3:i.del3,didt:i.didt,dmdt:i.dmdt,dnodt:i.dnodt,domdt:i.domdt,argpo:i.argpo,argpdot:i.argpdot,t:i.t,tc:w,gsto:i.gsto,xfact:i.xfact,xlamo:i.xlamo,no:i.no,atime:i.atime,em:ne,argpm:m,inclm:k,xli:i.xli,mm:N,xni:i.xni,nodem:I,nm:F},U=l_(re);ne=U.em,m=U.argpm,k=U.inclm,N=U.mm,I=U.nodem,F=U.nm}if(F<=0)return i.error=Lr.MeanMotionBelowZero,null;var X=Math.pow(ir/F,po)*D*D;if(F=ir/Math.pow(X,1.5),ne-=E,ne>=1||ne<-.001)return i.error=Lr.MeanEccentricityOutOfRange,null;ne<1e-6&&(ne=1e-6),N+=i.no*R,A=N+m+I,I%=qt,m%=qt,A%=qt,N=(A-m-I)%qt;var Ne={am:X,em:ne,im:k,Om:I,om:m,mm:N,nm:F},Q=Math.sin(k),ie=Math.cos(k),ue=ne;if(L=k,g=m,Y=I,B=N,l=Q,a=ie,i.method==="d"){var _e={inclo:i.inclo,init:"n",ep:ue,inclp:L,nodep:Y,argpp:g,mp:B,opsmode:i.operationmode},De=a0(i,_e);if(ue=De.ep,Y=De.nodep,g=De.argpp,B=De.mp,L=De.inclp,L<0&&(L=-L,Y+=Nn,g-=Nn),ue<0||ue>1)return i.error=Lr.PerturbedEccentricityOutOfRange,null}i.method==="d"&&(l=Math.sin(L),a=Math.cos(L),i.aycof=-.5*hs*l,Math.abs(a+1)>15e-13?i.xlcof=-.25*hs*l*(3+5*a)/(1+a):i.xlcof=-.25*hs*l*(3+5*a)/J);var Be=ue*Math.cos(g);x=1/(X*(1-ue*ue));var He=ue*Math.sin(g)+x*i.aycof,V=B+g+Y+x*i.xlcof*Be,ve=(V-Y)%qt;h=ve,S=9999.9;for(var Ee=1;Math.abs(S)>=1e-12&&Ee<=10;)s=Math.sin(h),t=Math.cos(h),S=1-t*Be-s*He,S=(ve-He*t+Be*s-h)/S,Math.abs(S)>=.95&&(S>0?S=.95:S=-.95),h+=S,Ee+=1;var Te=Be*t+He*s,Se=Be*s-He*t,Ae=Be*Be+He*He,Le=X*(1-Ae);if(Le<0)return i.error=Lr.SemiLatusRectumBelowZero,null;var be=X*(1-Te),qe=Math.sqrt(X)*Se/be,O=Math.sqrt(Le)/be,C=Math.sqrt(1-Ae);x=Se/(1+C);var se=X/be*(s-He-Be*x),ye=X/be*(t-Be+He*x);v=Math.atan2(se,ye);var pe=(ye+ye)*se,Me=1-2*se*se;x=1/Le;var je=.5*fs*x,Ie=je*x;i.method==="d"&&(c=a*a,i.con41=3*c-1,i.x1mth2=1-c,i.x7thm1=7*c-1);var Ue=be*(1-1.5*Ie*C*i.con41)+.5*je*i.x1mth2*Me;if(Ue<1)return i.error=Lr.Decayed,null;v-=.25*Ie*i.x7thm1*pe;var et=Y+1.5*Ie*a*pe,Re=L+1.5*Ie*a*l*Me,Xe=qe-F*je*i.x1mth2*pe/ir,T=O+F*je*(i.x1mth2*Me+1.5*i.con41)/ir,Je=Math.sin(v),ze=Math.cos(v),lt=Math.sin(et),dt=Math.cos(et),ht=Math.sin(Re),W=Math.cos(Re),Ge=-lt*W,me=dt*W,xe=Ge*Je+dt*ze,Ce=me*Je+lt*ze,rt=ht*Je,vt=Ge*ze-dt*Je,wt=me*ze-lt*Je,Ct=ht*ze,ft={x:Ue*xe*ii,y:Ue*Ce*ii,z:Ue*rt*ii},Rt={x:(Xe*xe+T*vt)*od,y:(Xe*Ce+T*wt)*od,z:(Xe*rt+T*Ct)*od};return{position:ft,velocity:Rt,meanElements:Ne}}function c0(i,e){var t=e.opsmode;e.satn;var s=e.epoch,a=e.xbstar,l=e.xecco,c=e.xargpo,u=e.xinclo,f=e.xmo,h=e.xno,m=e.xnodeo,g,v,y,M,w,S,x,D,E,R,k,N,F,I,L,A,B,Y,J,te,ce,Z,ge,G,ne,re,U,X,Ne,Q,ie,ue,_e,De,Be,He,V,ve,Ee,Te,Se,Ae,Le,be,qe,O,C,se,ye,pe,Me,je,Ie,Ue,et,Re,Xe=15e-13,T=i;T.isimp=0,T.method="n",T.aycof=0,T.con41=0,T.cc1=0,T.cc4=0,T.cc5=0,T.d2=0,T.d3=0,T.d4=0,T.delmo=0,T.eta=0,T.argpdot=0,T.omgcof=0,T.sinmao=0,T.t=0,T.t2cof=0,T.t3cof=0,T.t4cof=0,T.t5cof=0,T.x1mth2=0,T.x7thm1=0,T.mdot=0,T.nodedot=0,T.xlcof=0,T.xmcof=0,T.nodecf=0,T.irez=0,T.d2201=0,T.d2211=0,T.d3210=0,T.d3222=0,T.d4410=0,T.d4422=0,T.d5220=0,T.d5232=0,T.d5421=0,T.d5433=0,T.dedt=0,T.del1=0,T.del2=0,T.del3=0,T.didt=0,T.dmdt=0,T.dnodt=0,T.domdt=0,T.e3=0,T.ee2=0,T.peo=0,T.pgho=0,T.pho=0,T.pinco=0,T.plo=0,T.se2=0,T.se3=0,T.sgh2=0,T.sgh3=0,T.sgh4=0,T.sh2=0,T.sh3=0,T.si2=0,T.si3=0,T.sl2=0,T.sl3=0,T.sl4=0,T.gsto=0,T.xfact=0,T.xgh2=0,T.xgh3=0,T.xgh4=0,T.xh2=0,T.xh3=0,T.xi2=0,T.xi3=0,T.xl2=0,T.xl3=0,T.xl4=0,T.xlamo=0,T.zmol=0,T.zmos=0,T.atime=0,T.xli=0,T.xni=0,T.bstar=a,T.ecco=l,T.argpo=c,T.inclo=u,T.mo=f,T.no=h,T.nodeo=m,T.operationmode=t;var Je=78/ii+1,ze=42/ii,lt=ze*ze*ze*ze;T.init="y",T.t=0;var dt={ecco:T.ecco,epoch:s,inclo:T.inclo,no:T.no,method:T.method,opsmode:T.operationmode},ht=o_(dt),W=ht.ao,Ge=ht.con42,me=ht.cosio,xe=ht.cosio2,Ce=ht.eccsq,rt=ht.omeosq,vt=ht.posq,wt=ht.rp,Ct=ht.rteosq,ft=ht.sinio;if(T.no=ht.no,T.con41=ht.con41,T.gsto=ht.gsto,T.a=Math.pow(T.no*n_,-2/3),T.alta=T.a*(1+T.ecco)-1,T.altp=T.a*(1-T.ecco)-1,T.error=0,rt>=0||T.no>=0){if(T.isimp=0,wt<220/ii+1&&(T.isimp=1),U=Je,ce=lt,Y=(wt-1)*ii,Y<156){U=Y-78,Y<98&&(U=20);var Rt=(120-U)/ii;ce=Rt*Rt*Rt*Rt,U=U/ii+1}J=1/vt,O=1/(W-U),T.eta=W*T.ecco*O,N=T.eta*T.eta,k=T.ecco*T.eta,te=Math.abs(1-N),S=ce*Math.pow(O,4),x=S/Math.pow(te,3.5),M=x*T.no*(W*(1+1.5*N+k*(4+N))+.375*fs*O/te*T.con41*(8+3*N*(8+N))),T.cc1=T.bstar*M,w=0,T.ecco>1e-4&&(w=-2*S*O*hs*T.no*ft/T.ecco),T.x1mth2=1-xe,T.cc4=2*T.no*x*W*rt*(T.eta*(2+.5*N)+T.ecco*(.5+2*N)-fs*O/(W*te)*(-3*T.con41*(1-2*k+N*(1.5-.5*k))+.75*T.x1mth2*(2*N-k*(1+N))*Math.cos(2*T.argpo))),T.cc5=2*x*W*rt*(1+2.75*(N+k)+k*N),D=xe*xe,Le=1.5*fs*J*T.no,be=.5*Le*fs*J,qe=-.46875*r_*J*J*T.no,T.mdot=T.no+.5*Le*Ct*T.con41+.0625*be*Ct*(13-78*xe+137*D),T.argpdot=-.5*Le*Ge+.0625*be*(7-114*xe+395*D)+qe*(3-36*xe+49*D),se=-Le*me,T.nodedot=se+(.5*be*(4-19*xe)+2*qe*(3-7*xe))*me,C=T.argpdot+T.nodedot,T.omgcof=T.bstar*w*Math.cos(T.argpo),T.xmcof=0,T.ecco>1e-4&&(T.xmcof=-po*S*T.bstar/k),T.nodecf=3.5*rt*se*T.cc1,T.t2cof=1.5*T.cc1,Math.abs(me+1)>15e-13?T.xlcof=-.25*hs*ft*(3+5*me)/(1+me):T.xlcof=-.25*hs*ft*(3+5*me)/Xe,T.aycof=-.5*hs*ft;var It=1+T.eta*Math.cos(T.mo);if(T.delmo=It*It*It,T.sinmao=Math.sin(T.mo),T.x7thm1=7*xe-1,2*Nn/T.no>=225){T.method="d",T.isimp=1,Se=0,L=T.inclo;var Ut={epoch:s,ep:T.ecco,argpp:T.argpo,tc:Se,inclp:T.inclo,nodep:T.nodeo,np:T.no,e3:T.e3,ee2:T.ee2,peo:T.peo,pgho:T.pgho,pho:T.pho,pinco:T.pinco,plo:T.plo,se2:T.se2,se3:T.se3,sgh2:T.sgh2,sgh3:T.sgh3,sgh4:T.sgh4,sh2:T.sh2,sh3:T.sh3,si2:T.si2,si3:T.si3,sl2:T.sl2,sl3:T.sl3,sl4:T.sl4,xgh2:T.xgh2,xgh3:T.xgh3,xgh4:T.xgh4,xh2:T.xh2,xh3:T.xh3,xi2:T.xi2,xi3:T.xi3,xl2:T.xl2,xl3:T.xl3,xl4:T.xl4,zmol:T.zmol,zmos:T.zmos},Ve=s_(Ut);T.e3=Ve.e3,T.ee2=Ve.ee2,T.peo=Ve.peo,T.pgho=Ve.pgho,T.pho=Ve.pho,T.pinco=Ve.pinco,T.plo=Ve.plo,T.se2=Ve.se2,T.se3=Ve.se3,T.sgh2=Ve.sgh2,T.sgh3=Ve.sgh3,T.sgh4=Ve.sgh4,T.sh2=Ve.sh2,T.sh3=Ve.sh3,T.si2=Ve.si2,T.si3=Ve.si3,T.sl2=Ve.sl2,T.sl3=Ve.sl3,T.sl4=Ve.sl4,v=Ve.sinim,g=Ve.cosim,E=Ve.em,R=Ve.emsq,Z=Ve.s1,ge=Ve.s2,G=Ve.s3,ne=Ve.s4,re=Ve.s5,X=Ve.ss1,Ne=Ve.ss2,Q=Ve.ss3,ie=Ve.ss4,ue=Ve.ss5,_e=Ve.sz1,De=Ve.sz3,Be=Ve.sz11,He=Ve.sz13,V=Ve.sz21,ve=Ve.sz23,Ee=Ve.sz31,Te=Ve.sz33,T.xgh2=Ve.xgh2,T.xgh3=Ve.xgh3,T.xgh4=Ve.xgh4,T.xh2=Ve.xh2,T.xh3=Ve.xh3,T.xi2=Ve.xi2,T.xi3=Ve.xi3,T.xl2=Ve.xl2,T.xl3=Ve.xl3,T.xl4=Ve.xl4,T.zmol=Ve.zmol,T.zmos=Ve.zmos,B=Ve.nm,ye=Ve.z1,pe=Ve.z3,Me=Ve.z11,je=Ve.z13,Ie=Ve.z21,Ue=Ve.z23,et=Ve.z31,Re=Ve.z33;var $t={inclo:L,init:T.init,ep:T.ecco,inclp:T.inclo,nodep:T.nodeo,argpp:T.argpo,mp:T.mo,opsmode:T.operationmode},Qt=a0(T,$t);T.ecco=Qt.ep,T.inclo=Qt.inclp,T.nodeo=Qt.nodep,T.argpo=Qt.argpp,T.mo=Qt.mp,F=0,I=0,A=0;var rn={cosim:g,emsq:R,argpo:T.argpo,s1:Z,s2:ge,s3:G,s4:ne,s5:re,sinim:v,ss1:X,ss2:Ne,ss3:Q,ss4:ie,ss5:ue,sz1:_e,sz3:De,sz11:Be,sz13:He,sz21:V,sz23:ve,sz31:Ee,sz33:Te,t:T.t,tc:Se,gsto:T.gsto,mo:T.mo,mdot:T.mdot,no:T.no,nodeo:T.nodeo,nodedot:T.nodedot,xpidot:C,z1:ye,z3:pe,z11:Me,z13:je,z21:Ie,z23:Ue,z31:et,z33:Re,ecco:T.ecco,eccsq:Ce,em:E,argpm:F,inclm:L,mm:A,nm:B,nodem:I,irez:T.irez,atime:T.atime,d2201:T.d2201,d2211:T.d2211,d3210:T.d3210,d3222:T.d3222,d4410:T.d4410,d4422:T.d4422,d5220:T.d5220,d5232:T.d5232,d5421:T.d5421,d5433:T.d5433,dedt:T.dedt,didt:T.didt,dmdt:T.dmdt,dnodt:T.dnodt,domdt:T.domdt,del1:T.del1,del2:T.del2,del3:T.del3,xfact:T.xfact,xlamo:T.xlamo,xli:T.xli,xni:T.xni},St=a_(rn);T.irez=St.irez,T.atime=St.atime,T.d2201=St.d2201,T.d2211=St.d2211,T.d3210=St.d3210,T.d3222=St.d3222,T.d4410=St.d4410,T.d4422=St.d4422,T.d5220=St.d5220,T.d5232=St.d5232,T.d5421=St.d5421,T.d5433=St.d5433,T.dedt=St.dedt,T.didt=St.didt,T.dmdt=St.dmdt,T.dnodt=St.dnodt,T.domdt=St.domdt,T.del1=St.del1,T.del2=St.del2,T.del3=St.del3,T.xfact=St.xfact,T.xlamo=St.xlamo,T.xli=St.xli,T.xni=St.xni}T.isimp!==1&&(y=T.cc1*T.cc1,T.d2=4*W*O*y,Ae=T.d2*O*T.cc1/3,T.d3=(17*W+U)*Ae,T.d4=.5*Ae*W*O*(221*W+31*U)*T.cc1,T.t3cof=T.d2+2*y,T.t4cof=.25*(3*T.d3+T.cc1*(12*T.d2+10*y)),T.t5cof=.2*(3*T.d4+12*T.cc1*T.d3+6*T.d2*T.d2+15*y*(2*T.d2+y)))}l0(T,0),T.init="n"}function c_(i,e){var t="i",s=0,a=i.substring(2,7),l=parseInt(i.substring(18,20),10),c=parseFloat(i.substring(20,32)),u=parseFloat(i.substring(33,43)),f=parseFloat("".concat(i.substring(44,45),".").concat(i.substring(45,50),"E").concat(i.substring(50,52))),h=parseFloat("".concat(i.substring(53,54),".").concat(i.substring(54,59),"E").concat(i.substring(59,61))),m=parseFloat(e.substring(8,16))*nr,g=parseFloat(e.substring(17,25))*nr,v=parseFloat(".".concat(e.substring(26,33).replace(/\s/g,"0"))),y=parseFloat(e.substring(34,42))*nr,M=parseFloat(e.substring(43,51))*nr,w=parseFloat(e.substring(52,63))/r0,S=l<57?l+2e3:l+1900,x=s0(S,c),D=x.mon,E=x.day,R=x.hr,k=x.minute,N=x.sec,F=vc(S,D,E,R,k,N),I={error:s,satnum:a,epochyr:l,epochdays:c,ndot:u,nddot:f,bstar:h,inclo:m,nodeo:g,ecco:v,argpo:y,mo:M,no:w,jdsatepoch:F};return c0(I,{opsmode:t,satn:I.satnum,epoch:I.jdsatepoch-24332815e-1,xbstar:I.bstar,xecco:I.ecco,xargpo:I.argpo,xinclo:I.inclo,xmo:I.mo,xno:I.no,xnodeo:I.nodeo}),I}function u_(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"i",t=0,s=i.NORAD_CAT_ID.toString(),a=new Date(i.EPOCH.endsWith("Z")?i.EPOCH:i.EPOCH+"Z"),l=a.getUTCFullYear(),c=Number(l.toString().slice(-2)),u=(a.valueOf()-new Date(Date.UTC(l,0,1,0,0,0)).valueOf())/(86400*1e3)+1,f=Number(i.MEAN_MOTION_DOT),h=Number(i.MEAN_MOTION_DDOT),m=Number(i.BSTAR),g=Number(i.INCLINATION)*nr,v=Number(i.RA_OF_ASC_NODE)*nr,y=Number(i.ECCENTRICITY),M=Number(i.ARG_OF_PERICENTER)*nr,w=Number(i.MEAN_ANOMALY)*nr,S=Number(i.MEAN_MOTION)/r0,x=s0(l,u),D=x.mon,E=x.day,R=x.hr,k=x.minute,N=x.sec,F=vc(l,D,E,R,k,N),I={error:t,satnum:s,epochyr:c,epochdays:u,ndot:f,nddot:h,bstar:m,inclo:g,nodeo:v,ecco:y,argpo:M,mo:w,no:S,jdsatepoch:F};return c0(I,{opsmode:e,satn:I.satnum,epoch:I.jdsatepoch-24332815e-1,xbstar:I.bstar,xecco:I.ecco,xargpo:I.argpo,xinclo:I.inclo,xmo:I.mo,xno:I.no,xnodeo:I.nodeo}),I}function d_(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];var a=vc.apply(void 0,t),l=(a-i.jdsatepoch)*e_;return l0(i,l)}function u0(i){return i*Qx}function f_(i){if(i<-Nn/2||i>Nn/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return u0(i)}function h_(i){if(i<-Nn||i>Nn)throw new RangeError("Longitude radians must be in range [-pi; pi].");return u0(i)}function p_(i,e){for(var t=6378.137,s=6356.7523142,a=Math.sqrt(i.x*i.x+i.y*i.y),l=(t-s)/t,c=2*l-l*l,u=Math.atan2(i.y,i.x)-e;u<-Nn;)u+=qt;for(;u>Nn;)u-=qt;for(var f=20,h=0,m=Math.atan2(i.z,Math.sqrt(i.x*i.x+i.y*i.y)),g;h++<f;)g=1/Math.sqrt(1-c*(Math.sin(m)*Math.sin(m))),m=Math.atan2(i.z+t*g*c*Math.sin(m),a);var v=a/Math.cos(m)-t*g;return{longitude:u,latitude:m,height:v}}const d0=6371,f0=i=>{const e=Number(i.NORAD_CAT_ID),t=Number(i.MEAN_MOTION),s=typeof i.EPOCH=="string"?i.EPOCH:"",a=[i.ECCENTRICITY,i.INCLINATION,i.RA_OF_ASC_NODE,i.ARG_OF_PERICENTER,i.MEAN_ANOMALY].map(Number);if(!Number.isSafeInteger(e)||e<1||!Number.isFinite(t)||t<=0||Number.isNaN(Date.parse(s))||a.some(f=>!Number.isFinite(f))||a[0]<0||a[0]>=1||a[1]<0||a[1]>180)return null;const l=typeof i.OBJECT_NAME=="string"&&i.OBJECT_NAME.trim()?i.OBJECT_NAME.trim():`NORAD ${e}`,c=f=>{const h=Number(f);return Number.isFinite(h)?h:0},u={...i,OBJECT_NAME:l,OBJECT_ID:typeof i.OBJECT_ID=="string"&&i.OBJECT_ID?i.OBJECT_ID:`NORAD ${e}`,EPOCH:s,MEAN_MOTION:t,ECCENTRICITY:a[0],INCLINATION:a[1],RA_OF_ASC_NODE:a[2],ARG_OF_PERICENTER:a[3],MEAN_ANOMALY:a[4],BSTAR:c(i.BSTAR),MEAN_MOTION_DOT:c(i.MEAN_MOTION_DOT),MEAN_MOTION_DDOT:c(i.MEAN_MOTION_DDOT),ELEMENT_SET_NO:c(i.ELEMENT_SET_NO),NORAD_CAT_ID:e};return{noradId:e,name:l,omm:u}},m_=i=>{if(!i||typeof i!="object"||!("schemaVersion"in i)||i.schemaVersion!==1||!("fetchedAt"in i)||typeof i.fetchedAt!="string"||Number.isNaN(Date.parse(i.fetchedAt))||!("satellites"in i)||!Array.isArray(i.satellites))throw new Error("The shared satellite catalog has an invalid format.");const e=i.satellites.map(t=>t&&typeof t=="object"?f0(t):null).filter(t=>!!t);if(!e.length)throw new Error("The shared satellite catalog contains no valid records.");return{satellites:e,fetchedAt:i.fetchedAt}},g_=i=>{if(!i||typeof i!="object")return!1;const e=i;if(!Number.isSafeInteger(e.noradId)||typeof e.name!="string")return!1;if(e.omm&&typeof e.omm=="object"){const t=f0(e.omm);return(t==null?void 0:t.noradId)===e.noradId}return typeof e.line1=="string"&&typeof e.line2=="string"},v_=new Map([[25544,"#ff9500"],[20580,"#00f0ff"],[25994,"#7cff4f"],[33591,"#ffd400"]]),ld={leo:"#c084fc",meo:"#ffc857",geo:"#ff70c8"},x_=(i,e)=>{const t=v_.get(i);return t||(e<2e3?ld.leo:e<2e4?ld.meo:ld.geo)},rm=(i,e,t)=>`${Math.abs(i).toFixed(2)}° ${i>=0?e:t}`,Qa=i=>{const e=i.omm?u_(i.omm):c_(i.line1,i.line2);return e.error?null:{...i,satrec:e,periodSeconds:2*Math.PI/e.no*60}},__=i=>{const e=i.omm?Number(i.omm.MEAN_MOTION):Number.parseFloat(i.line2.slice(52,63));return!Number.isFinite(e)||e<=0?null:{...i,periodSeconds:86400/e}},h0=i=>{const t=i;return(Math.pow(t*t*3986e11/(4*Math.PI*Math.PI),1/3)-d0*1e3)/1e3},p0=i=>i<2e3?"leo":i<2e4?"meo":"geo",y_=i=>Math.max(i/d0,5e-4),S_={all:{label:"All",value:"all"},leo:{label:"LEO (< 2000 km)",value:"leo"},meo:{label:"MEO (2-20k km)",value:"meo"},geo:{label:"High (20k+ km)",value:"geo"},none:{label:"None",value:"none"}},M_=8*60*60*1e3,Kd="orbitradar_active_satellite_tles_v2",mo="orbitradar_active_satellite_timestamp_v2",ff="orbitradar_active_satellite_source_timestamp_v2",m0=i=>{if(!i)return!1;const e=Date.parse(i),t=Date.now()-e;return!Number.isNaN(e)&&t>=0&&t<M_},sm=(i=!1)=>{try{const e=localStorage.getItem(Kd),t=localStorage.getItem(mo);if(!e||!i&&!m0(t))return null;const s=JSON.parse(e);if(!Array.isArray(s.satellites))return null;const a=s.satellites.filter(g_);return a.length?a:null}catch{try{localStorage.removeItem(Kd),localStorage.removeItem(mo),localStorage.removeItem(ff)}catch{}return null}},E_=(i,e)=>{try{localStorage.setItem(Kd,JSON.stringify({satellites:i})),localStorage.setItem(mo,new Date().toISOString()),e&&localStorage.setItem(ff,e)}catch(t){console.warn("Satellite catalog could not be cached:",t)}},am=()=>{try{const i=localStorage.getItem(ff);return i&&!Number.isNaN(Date.parse(i))?i:null}catch{return null}},w_="/data/catalog.json",T_="/data/catalog-status.json",A_=25544,C_=async()=>{try{const i=await fetch(T_,{cache:"no-cache"});return i.ok?await i.json():null}catch{return null}},b_=i=>{const[e,t]=fe.useState([]),[s,a]=fe.useState(A_),[l,c]=fe.useState(!0),[u,f]=fe.useState("Loading the shared satellite catalog..."),[h,m]=fe.useState(null),[g,v]=fe.useState(null),y=fe.useRef(!1),M=fe.useCallback((E,R,k)=>{const N=E.map(__).filter(L=>!!L);t(N),f(R.replace("{count}",N.length.toLocaleString())),a(L=>{var A;return L===null?null:N.some(B=>B.noradId===L)?L:((A=N[0])==null?void 0:A.noradId)??null});let F=null;const I=k??am();try{F=localStorage.getItem(mo)}catch{}v(I),m(I??F??new Date().toISOString())},[]),w=fe.useCallback(async()=>{if(y.current)return;y.current=!0,c(!0),f("Checking for the latest shared satellite catalog...");let E=null;try{const[R,k]=await Promise.all([fetch(w_,{cache:"no-cache"}),C_()]);if(E=k,!R.ok)throw new Error(`Shared catalog request failed (${R.status}).`);const N=m_(await R.json());E_(N.satellites,N.fetchedAt);let F="Tracking {count} satellites from the shared catalog.";(E==null?void 0:E.state)==="paused"?F=E.message?`${E.message} Using the last valid snapshot ({count} satellites).`:"Catalog publishing is paused for review; using the last valid snapshot ({count} satellites).":(E==null?void 0:E.state)==="error"&&(F="Catalog refresh failed; using the last valid published snapshot ({count} satellites)."),M(N.satellites,F,N.fetchedAt)}catch(R){console.warn("Unable to read shared satellite catalog:",R);const k=sm(!0);k?M(k,E!=null&&E.message?`${E.message} Showing the last saved snapshot ({count} satellites).`:"Shared catalog is unavailable; showing the last saved snapshot ({count} satellites)."):f((E==null?void 0:E.message)??"The shared satellite catalog is not available yet. Try again after it has been published.")}finally{y.current=!1,c(!1)}},[M]);fe.useEffect(()=>{const E=sm(!0);let R=null;try{R=localStorage.getItem(mo)}catch{}if(E&&m0(R)){M(E,"Tracking {count} satellites from local cache."),c(!1);return}E&&(M(E,"Checking for an update; showing the last saved snapshot ({count} satellites)."),m(am()??R)),w()},[M,w]),fe.useEffect(()=>{if((i==null?void 0:i.autoRefresh)===!1)return;const E=((i==null?void 0:i.refreshIntervalHours)??8)*60*60*1e3,R=window.setInterval(()=>{w()},E);return()=>window.clearInterval(R)},[w,i==null?void 0:i.autoRefresh,i==null?void 0:i.refreshIntervalHours]);const S=fe.useCallback(()=>e.find(E=>E.noradId===s)??null,[e,s]),x=fe.useCallback(E=>{a(E)},[]),D=fe.useCallback(()=>{a(null)},[]);return{trackedSatellites:e,selectedNoradId:s,isLoading:l,statusMessage:u,lastUpdated:h,sourceUpdatedAt:g,getSelectedSatellite:S,selectSatellite:x,clearSelection:D,refreshCatalog:w}},ic=(i,e)=>{const t=d_(i.satrec,e);if(!t||!t.position||typeof t.position!="object")return null;const s=p_(t.position,o0(e)),a=t.velocity,l=s.height,c={noradId:i.noradId,name:i.name,lat:f_(s.latitude),lng:h_(s.longitude),alt:y_(l),altitudeKm:l,velocityKph:a&&typeof a=="object"?Math.hypot(a.x,a.y,a.z)*3600:null,color:x_(i.noradId,l),altitudeClass:p0(h0(i.periodSeconds))};return Object.values(c).every(u=>typeof u!="number"||Number.isFinite(u))?c:null},om=(i,e,t=120)=>{const s=[],a=i.periodSeconds*1e3;for(let l=0;l<=t;l+=1){const c=new Date(e.getTime()+(l/t-.5)*a),u=ic(i,c);u&&s.push({lat:u.lat,lng:u.lng,alt:u.alt})}return s},R_=1e3,P_=[],L_=(i,e,t,s)=>{const[a,l]=fe.useState(()=>new Date),[c,u]=fe.useState([]),[f,h]=fe.useState(0),[m,g]=fe.useState([]),[v,y]=fe.useState(!0),[M,w]=fe.useState(!1),S=fe.useRef(null),x=fe.useRef(null),D=fe.useRef(0),E=fe.useRef(0),R=fe.useRef(e),k=fe.useRef(0),N=fe.useRef(null),F=t!==void 0,I=t??a,L=fe.useMemo(()=>{if(e===null)return null;const ne=i.find(re=>re.noradId===e);return ne?Qa(ne):null},[i,e]),[A,B]=fe.useState(void 0),Y=fe.useRef({satellite:L,getTime:s??(()=>I)});Y.current={satellite:L,getTime:s??(()=>I)};const J=fe.useMemo(()=>i,[i]),te=fe.useRef({trackedSatellites:i,selectedNoradId:e,time:I,showOrbit:v});te.current={trackedSatellites:i,selectedNoradId:e,time:I,showOrbit:v};const ce=fe.useCallback((ne,re)=>{u(ne),N.current!==re&&(N.current=re,h(U=>U+1))},[]);fe.useEffect(()=>{if(F)return;const ne=()=>{document.visibilityState!=="hidden"&&l(new Date)},re=window.setInterval(ne,R_);return document.addEventListener("visibilitychange",ne),()=>{window.clearInterval(re),document.removeEventListener("visibilitychange",ne)}},[F]),fe.useEffect(()=>{let ne,re;try{ne=new Worker(new URL("/pr-preview/pr-70/assets/positions.worker-DG5JkNmD.js",import.meta.url),{type:"module"}),re=new Worker(new URL("/pr-preview/pr-70/assets/positions.worker-DG5JkNmD.js",import.meta.url),{type:"module"})}catch{return}return S.current=ne,x.current=re,ne.onmessage=U=>{U.data.requestId===D.current&&U.data.type==="positions"&&U.data.positions&&ce(U.data.positions,U.data.snapshotKey??`request:${U.data.requestId}`)},re.onmessage=U=>{U.data.requestId===E.current&&U.data.orbitPoints&&g(U.data.orbitPoints)},ne.onerror=()=>{ne.terminate(),S.current=null;const{trackedSatellites:U,time:X}=te.current,Ne=U.map(Q=>{const ie=Qa(Q);return ie?ic(ie,X):null}).filter(Q=>Q!==null);ce(Ne,`${k.current}:${X.toISOString()}`)},re.onerror=()=>{re.terminate(),x.current=null;const{trackedSatellites:U,selectedNoradId:X,time:Ne}=te.current,Q=U.find(ue=>ue.noradId===X),ie=Q?Qa(Q):null;g(ie?om(ie,Ne):[])},()=>{ne.terminate(),re.terminate(),S.current=null,x.current=null}},[ce]),fe.useEffect(()=>{var ne,re;k.current+=1,(ne=S.current)==null||ne.postMessage({type:"catalog",satellites:J}),(re=x.current)==null||re.postMessage({type:"catalog",satellites:J})},[J]),fe.useEffect(()=>{let ne=null;const re=()=>{const{satellite:X,getTime:Ne}=Y.current;if(!X){ne=null,B(null);return}const Q=Ne(),ie=Q.getTime();ie!==ne&&(ne=ie,B(ic(X,Q)))};B(void 0),re();const U=window.setInterval(re,100);return()=>window.clearInterval(U)},[L]),fe.useEffect(()=>{const ne=++D.current,re=S.current,U=`${k.current}:${I.toISOString()}`;if(re){re.postMessage({requestId:ne,time:I.toISOString(),selectedNoradId:null,showOrbit:!1,snapshotKey:U});return}const X=i.map(Ne=>{const Q=Qa(Ne);return Q?ic(Q,I):null}).filter(Ne=>Ne!==null);ce(X,U)},[i,I,J,ce]);const Z=Math.floor(I.getTime()/6e4);fe.useEffect(()=>{const ne=++E.current;if(R.current!==e&&(g([]),R.current=e),!e||!v){g([]);return}const re=new Date(Z*6e4),U=x.current;if(U){U.postMessage({requestId:ne,time:re.toISOString(),selectedNoradId:e,showOrbit:!0});return}const X=i.find(Q=>Q.noradId===e),Ne=X?Qa(X):null;g(Ne?om(Ne,re):[])},[i,e,v,Z]);const ge=fe.useMemo(()=>c.find(ne=>ne.noradId===e)??null,[c,e]);return{time:a,satellitePositions:c,selectedPosition:A===void 0?ge:A,snapshotVersion:f,orbitPoints:v?m:P_,showOrbit:v,setShowOrbit:y,followSelected:M,setFollowSelected:w}},N_=()=>new Promise((i,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:s,longitude:a}=t.coords;i({lat:s,lng:a})},t=>{e("Error getting geolocation: "+t.message)}):e("Geolocation not supported by this browser.")}),cd="orbitradar_user_location",D_=()=>{const[i,e]=fe.useState(()=>{try{const a=localStorage.getItem(cd);if(!a)return null;const l=JSON.parse(a);if(!l||typeof l!="object")return null;const{lat:c,lng:u}=l;return typeof c=="number"&&Number.isFinite(c)&&Math.abs(c)<=90&&typeof u=="number"&&Number.isFinite(u)&&Math.abs(u)<=180?{lat:c,lng:u,name:"You"}:null}catch{return null}}),t=fe.useCallback(()=>N_().then(a=>{const l={...a,name:"You"};e(l);try{localStorage.setItem(cd,JSON.stringify(a))}catch{}return l}).catch(a=>{throw console.error("Error getting user location:",a),a}),[]),s=fe.useCallback(()=>{e(null);try{localStorage.removeItem(cd)}catch{}},[]);return{userLocation:i,locateUser:t,clearUserLocation:s}},lm="orbitradar_favorites",I_=()=>{const[i,e]=fe.useState(()=>{try{const u=localStorage.getItem(lm),f=u?JSON.parse(u):[];return Array.isArray(f)?[...new Set(f.filter(h=>Number.isSafeInteger(h)&&h>0))]:[]}catch{return[]}});fe.useEffect(()=>{try{localStorage.setItem(lm,JSON.stringify(i))}catch(u){console.warn("Could not save favorites:",u)}},[i]);const t=fe.useCallback(u=>i.includes(u),[i]),s=fe.useCallback(u=>{e(f=>f.includes(u)?f.filter(h=>h!==u):[...f,u])},[]),a=fe.useCallback(u=>{e(f=>f.includes(u)?f:[...f,u])},[]),l=fe.useCallback(u=>{e(f=>f.filter(h=>h!==u))},[]),c=fe.useCallback(()=>{e([])},[]);return{favorites:i,isFavorite:t,toggleFavorite:s,addFavorite:a,removeFavorite:l,clearFavorites:c}},U_=[1,5,10,30,60,120,300,600],O_=i=>{if(Math.abs(i)<1e3)return"Live";const e=Math.abs(i),t=i<0?"-":"+";return e<6e4?`${t}${Math.floor(e/1e3)}s`:e<36e5?`${t}${Math.floor(e/6e4)}m`:`${t}${Math.floor(e/36e5)}h`},F_=()=>{const[i,e]=fe.useState(!1),[t,s]=fe.useState(!1),[a,l]=fe.useState(1),[c,u]=fe.useState(()=>Date.now()),[f,h]=fe.useState(()=>Date.now()),[m,g]=fe.useState(()=>Date.now()),v=fe.useRef(Date.now()),y=t||i?c:f,M=fe.useMemo(()=>new Date(y),[y]),w=y-f,S=fe.useCallback(()=>t?new Date(y):i?new Date(c+(Date.now()-m)*a):new Date,[y,t,i,c,a,m]),x=fe.useCallback(()=>O_(w),[w]),D=fe.useCallback(()=>{if(i)return;const I=Date.now();v.current=I,t||u(I),g(I),s(!1),e(!0)},[i,t]),E=fe.useCallback(()=>{const I=Date.now();u(S().getTime()),v.current=I,g(I),e(!1),s(!0)},[S]),R=fe.useCallback(()=>{i?E():D()},[i,D,E]),k=fe.useCallback(I=>{if(i){const L=Date.now();u(S().getTime()),v.current=L,g(L)}l(I)},[i,S]),N=fe.useCallback(()=>{const I=Date.now();u(I),h(I),g(I),v.current=I,e(!1),s(!1)},[]);fe.useEffect(()=>{const I=()=>{if(document.hidden)return;const A=Date.now();if(h(A),i){const B=A-v.current;v.current=A,u(Y=>Y+B*a),g(A)}},L=window.setInterval(I,1e3);return document.addEventListener("visibilitychange",I),()=>{window.clearInterval(L),document.removeEventListener("visibilitychange",I)}},[i,a]);const F=fe.useCallback(I=>I===1?"1x (Real-time)":I<60?`${I}x`:`${I/60} min`,[]);return{isTimeLapseActive:i,isPaused:t,speed:a,speeds:U_,currentTime:M,timeOffsetMs:w,startTimeLapse:D,stopTimeLapse:E,toggleTimeLapse:R,setTimeLapseSpeed:k,resetTime:N,getSpeedLabel:F,getEffectiveTime:S,getTimeOffsetDisplay:x}},ud=10,z_=i=>{const[e,t]=fe.useState([]),s=fe.useCallback(g=>{t(v=>v.includes(g)?v:v.length>=ud?[...v.slice(1),g]:[...v,g])},[]),a=fe.useCallback(g=>{t(v=>v.filter(y=>y!==g))},[]),l=fe.useCallback(g=>{t(v=>v.includes(g)?v.filter(y=>y!==g):v.length>=ud?[...v.slice(1),g]:[...v,g])},[]),c=fe.useCallback(()=>{t([])},[]),u=fe.useCallback(g=>e.includes(g),[e]),f=fe.useMemo(()=>i.filter(g=>e.includes(g.noradId)),[i,e]),h=fe.useMemo(()=>e.map(g=>{const v=i.find(y=>y.noradId===g);return v?{noradId:g,position:v}:null}).filter(g=>g!==null),[i,e]),m=fe.useCallback(g=>{const v=e.indexOf(g);if(v===-1)return"";const y=["#ff9500","#00f0ff","#7cff4f","#ffd400","#c084fc","#ff70c8","#67e8f9","#2cffb7","#ff9f1c","#ffc857"];return y[v%y.length]},[e]);return{trackedNoradIds:e,trackedPositions:f,trackedWithPositions:h,isTracked:u,addTracked:s,removeTracked:a,toggleTracked:l,clearTracked:c,getTrackedColor:m,maxTracked:ud}},k_=(i,e,t=new Date)=>{const[s,a]=fe.useState([]),[l,c]=fe.useState(!1),[u,f]=fe.useState(null),h=fe.useRef(null),m=fe.useRef(0);fe.useEffect(()=>{let w;try{w=new Worker(new URL("/pr-preview/pr-70/assets/passes.worker-BnGfHIZ3.js",import.meta.url),{type:"module"})}catch{f("Background workers are unavailable in this browser.");return}return h.current=w,w.onmessage=S=>{S.data.requestId===m.current&&(c(!1),S.data.error?f(S.data.error):a(S.data.passes.map(x=>({...x,riseTime:new Date(x.riseTime),maxElevationTime:new Date(x.maxElevationTime),setTime:new Date(x.setTime)}))))},w.onerror=()=>{c(!1),f("Pass prediction failed. Please try again.")},()=>{w.terminate(),h.current=null}},[]);const g=fe.useCallback(w=>{var D;if(!e){f("Set your location before predicting passes.");return}const S=i.filter(E=>w.includes(E.noradId));if(!S.length){f("No satellites are available to predict.");return}if(!h.current){f("Background workers are unavailable in this browser.");return}a([]),f(null),c(!0);const x=++m.current;(D=h.current)==null||D.postMessage({requestId:x,location:{lat:e.lat,lng:e.lng},startTime:t.getTime(),satellites:S})},[i,e,t]),v=fe.useCallback(w=>g([w]),[g]),y=fe.useCallback(w=>g(w),[g]),M=fe.useCallback(()=>{var S;const w=++m.current;(S=h.current)==null||S.postMessage({type:"cancel",requestId:w}),c(!1),a([]),f(null)},[]);return{passes:s,isCalculating:l,error:u,calculateForSelected:v,calculateForTracked:y,clearPasses:M}},cm="orbitradar_settings",Ii={theme:"dark",showOrbitsByDefault:!0,defaultAltitudeFilter:"all",autoRefresh:!0,refreshIntervalHours:8,nightShading:!0,cloudCover:!0},B_=()=>{const[i,e]=fe.useState(()=>{try{const a=localStorage.getItem(cm);if(a){const l=JSON.parse(a);return{...Ii,...l,theme:["dark","light","system"].includes(l.theme??"")?l.theme:Ii.theme,defaultAltitudeFilter:["all","leo","meo","geo","none"].includes(l.defaultAltitudeFilter??"")?l.defaultAltitudeFilter:Ii.defaultAltitudeFilter,refreshIntervalHours:[1,4,8,12,24].includes(l.refreshIntervalHours??0)?l.refreshIntervalHours:Ii.refreshIntervalHours,autoRefresh:typeof l.autoRefresh=="boolean"?l.autoRefresh:Ii.autoRefresh,showOrbitsByDefault:typeof l.showOrbitsByDefault=="boolean"?l.showOrbitsByDefault:Ii.showOrbitsByDefault,nightShading:typeof l.nightShading=="boolean"?l.nightShading:Ii.nightShading,cloudCover:typeof l.cloudCover=="boolean"?l.cloudCover:Ii.cloudCover}}}catch{}return Ii});fe.useEffect(()=>{try{localStorage.setItem(cm,JSON.stringify(i))}catch(a){console.warn("Could not save settings:",a)}},[i]);const t=fe.useCallback((a,l)=>{e(c=>({...c,[a]:l}))},[]),s=fe.useCallback(()=>{e(Ii)},[]);return fe.useEffect(()=>{var c;const a=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-color-scheme: light)"),l=()=>{document.documentElement.dataset.theme=i.theme==="system"?a.matches?"light":"dark":i.theme};return l(),a==null||a.addEventListener("change",l),()=>a==null?void 0:a.removeEventListener("change",l)},[i.theme]),{settings:i,updateSetting:t,resetSettings:s}},um='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',lo=(i,e)=>{const t=fe.useRef(null),s=fe.useRef(e);return s.current=e,fe.useEffect(()=>{var f;if(!i)return;const a=document.activeElement instanceof HTMLElement?document.activeElement:null,l=t.current;(f=(l==null?void 0:l.querySelector(um))??l)==null||f.focus();const u=h=>{if(h.key==="Escape"){h.preventDefault(),s.current();return}if(h.key!=="Tab"||!l)return;const m=[...l.querySelectorAll(um)];if(!m.length){h.preventDefault(),l.focus();return}const g=m[0],v=m[m.length-1];h.shiftKey&&document.activeElement===g?(h.preventDefault(),v.focus()):!h.shiftKey&&document.activeElement===v&&(h.preventDefault(),g.focus())};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u),a==null||a.focus()}},[i]),t};class H_ extends n0.Component{constructor(){super(...arguments);jp(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("The globe could not be rendered:",t)}render(){return this.state.hasError?z.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[z.jsx("p",{className:"text-lg font-bold",children:"The 3D globe is unavailable."}),z.jsx("p",{className:"max-w-sm text-sm text-slate-300",children:"Satellite data and controls are still available. Check graphics acceleration, then try the globe again."}),z.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:this.props.onRetry,type:"button",children:"Retry globe"})]}):this.props.children}}const V_=({passes:i,isCalculating:e,error:t,onClose:s,onCalculateTracked:a,selectedSatelliteName:l})=>{const c=lo(!0,s),u=m=>m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),f=m=>m.toLocaleDateString([],{month:"short",day:"numeric",year:m.getFullYear()!==new Date().getFullYear()?"numeric":void 0}),h=m=>{if(m<60)return`${Math.round(m)} min`;const g=Math.floor(m/60),v=Math.round(m%60);return`${g}h ${v}m`};return z.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:z.jsxs("section",{ref:c,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"passes-title",className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[z.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Pass Prediction"}),z.jsx("h2",{id:"passes-title",className:"mt-1 text-2xl font-bold",children:"Upcoming satellite passes"}),z.jsxs("p",{className:"mt-1 text-sm text-slate-400",children:[l," and tracked objects · next 24 hours · over your location"]})]}),z.jsx("button",{"aria-label":"Close pass prediction",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),z.jsxs("div",{className:"max-h-[calc(90vh-140px)] overflow-y-auto",children:[t&&z.jsx("div",{className:"p-4 text-red-400",children:z.jsxs("p",{children:["Error: ",t]})}),e&&i.length===0&&!t&&z.jsx("div",{className:"p-4 text-center text-slate-400",children:z.jsx("p",{children:"Calculating passes... This may take a moment."})}),!e&&i.length===0&&!t&&z.jsxs("div",{className:"p-4 text-center text-slate-400",children:[z.jsx("p",{children:"No passes found for this satellite in the next 24 hours."}),z.jsx("p",{className:"mt-2 text-sm",children:"The satellite may not pass over your location, or its orbit may not be visible."})]}),i.length>0&&z.jsx("div",{className:"p-4",children:z.jsx("div",{className:"space-y-3",children:i.map((m,g)=>z.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 p-4",children:[z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsxs("div",{children:[z.jsxs("p",{className:"font-semibold",children:[m.name," · Pass #",g+1]}),z.jsx("p",{className:"text-sm text-slate-400",children:f(m.riseTime)})]}),z.jsxs("span",{className:`rounded-full px-2 py-1 text-xs ${m.maxElevationDeg>=60?"bg-green-500/20 text-green-400":m.maxElevationDeg>=30?"bg-yellow-500/20 text-yellow-400":"bg-blue-500/20 text-blue-400"}`,children:["Max: ",m.maxElevationDeg.toFixed(1),"°"]})]}),z.jsxs("div",{className:"mt-3 grid grid-cols-3 gap-2 text-sm",children:[z.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[z.jsx("p",{className:"text-slate-400",children:"Rise"}),z.jsx("p",{className:"font-semibold",children:m.riseClipped?"Already up":u(m.riseTime)})]}),z.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[z.jsx("p",{className:"text-slate-400",children:"Peak"}),z.jsx("p",{className:"font-semibold",children:u(m.maxElevationTime)})]}),z.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[z.jsx("p",{className:"text-slate-400",children:"Set"}),z.jsx("p",{className:"font-semibold",children:m.setClipped?"After window":u(m.setTime)})]})]}),z.jsxs("div",{className:"mt-2 text-center text-xs text-slate-400",children:[m.riseClipped||m.setClipped?"Visible during at least ":"Duration: ",h(m.durationMinutes)]})]},g))})})]}),z.jsx("footer",{className:"border-t border-white/10 p-4",children:z.jsx("button",{className:"w-full rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:a,type:"button",children:"Predict Selected / Tracked"})})]})})},G_=({settings:i,onUpdate:e,onReset:t,onClose:s})=>{const a=lo(!0,s);return z.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:z.jsxs("section",{ref:a,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",className:"max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[z.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Settings"}),z.jsx("h2",{id:"settings-title",className:"mt-1 text-2xl font-bold",children:"Configuration"}),z.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Customize your OrbitRadar experience"})]}),z.jsx("button",{"aria-label":"Close settings",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),z.jsx("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:z.jsxs("div",{className:"space-y-6",children:[z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Theme"}),z.jsx("div",{className:"flex gap-2",children:["dark","light","system"].map(l=>z.jsx("button",{className:`flex-1 rounded-lg border px-3 py-2 text-sm transition ${i.theme===l?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,"aria-pressed":i.theme===l,onClick:()=>e("theme",l),type:"button",children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),z.jsxs("div",{children:[z.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[z.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Show orbits by default"}),z.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.showOrbitsByDefault?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.showOrbitsByDefault,onClick:()=>e("showOrbitsByDefault",!i.showOrbitsByDefault),type:"button",children:i.showOrbitsByDefault?"ON":"OFF"})]}),z.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically show orbit path when selecting a satellite"})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Default altitude filter"}),z.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("defaultAltitudeFilter",l.target.value),value:i.defaultAltitudeFilter,children:[z.jsx("option",{value:"all",children:"All Satellites"}),z.jsx("option",{value:"leo",children:"LEO (<2000km)"}),z.jsx("option",{value:"meo",children:"MEO (2-20k km)"}),z.jsx("option",{value:"geo",children:"High altitude (20k+ km)"}),z.jsx("option",{value:"none",children:"None (Earth only)"})]})]}),z.jsxs("div",{children:[z.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[z.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Night shading"}),z.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.nightShading?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.nightShading,onClick:()=>e("nightShading",!i.nightShading),type:"button",children:i.nightShading?"ON":"OFF"})]}),z.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Follow the simulated UTC sun position."})]}),z.jsxs("div",{children:[z.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[z.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Cloud cover"}),z.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.cloudCover?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.cloudCover,onClick:()=>e("cloudCover",!i.cloudCover),type:"button",children:i.cloudCover?"ON":"OFF"})]}),z.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"NOAA GFS total cloud cover, latest global analysis."})]}),z.jsxs("div",{children:[z.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[z.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Auto refresh catalog"}),z.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.autoRefresh?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.autoRefresh,onClick:()=>e("autoRefresh",!i.autoRefresh),type:"button",children:i.autoRefresh?"ON":"OFF"})]}),z.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically refresh satellite catalog periodically"})]}),i.autoRefresh&&z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Refresh interval (hours)"}),z.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("refreshIntervalHours",Number(l.target.value)),value:i.refreshIntervalHours,children:[z.jsx("option",{value:1,children:"1 hour"}),z.jsx("option",{value:4,children:"4 hours"}),z.jsx("option",{value:8,children:"8 hours"}),z.jsx("option",{value:12,children:"12 hours"}),z.jsx("option",{value:24,children:"24 hours"})]})]})]})}),z.jsx("footer",{className:"border-t border-white/10 p-4",children:z.jsxs("div",{className:"flex gap-2",children:[z.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-400 transition hover:bg-white/20",onClick:t,type:"button",children:"Reset to defaults"}),z.jsx("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:s,type:"button",children:"Save & Close"})]})})]})})},R2=(i,e,t)=>i*(e?.016:t?.012:.008),P2="#ffffff",W_=i=>Math.min(Math.max(i,1),1.5);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="165",L2={ROTATE:0,DOLLY:1,PAN:2},N2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},j_=0,dm=1,X_=2,g0=1,q_=2,er=3,Fr=0,Yn=1,tr=2,Ur=0,aa=1,fm=2,hm=3,pm=4,Y_=5,us=100,$_=101,K_=102,J_=103,Z_=104,Q_=200,ey=201,ty=202,ny=203,Jd=204,Zd=205,iy=206,ry=207,sy=208,ay=209,oy=210,ly=211,cy=212,uy=213,dy=214,fy=0,hy=1,py=2,ac=3,my=4,gy=5,vy=6,xy=7,xc=0,_y=1,yy=2,Or=0,Sy=1,My=2,Ey=3,wy=4,Ty=5,Ay=6,Cy=7,v0=300,ua=301,da=302,Qd=303,ef=304,_c=306,oc=1e3,Dr=1001,tf=1002,qn=1003,by=1004,Al=1005,hi=1006,dd=1007,Ir=1008,zr=1009,Ry=1010,Py=1011,lc=1012,x0=1013,fa=1014,rr=1015,yc=1016,_0=1017,y0=1018,ha=1020,Ly=35902,Ny=1021,Dy=1022,Ci=1023,Iy=1024,Uy=1025,oa=1026,pa=1027,S0=1028,M0=1029,Oy=1030,E0=1031,w0=1033,fd=33776,hd=33777,pd=33778,md=33779,mm=35840,gm=35841,vm=35842,xm=35843,_m=36196,ym=37492,Sm=37496,Mm=37808,Em=37809,wm=37810,Tm=37811,Am=37812,Cm=37813,bm=37814,Rm=37815,Pm=37816,Lm=37817,Nm=37818,Dm=37819,Im=37820,Um=37821,gd=36492,Om=36494,Fm=36495,Fy=36283,zm=36284,km=36285,Bm=36286,D2=0,I2=1,U2=2,zy=3200,ky=3201,pf=0,By=1,Nr="",wi="srgb",Br="srgb-linear",mf="display-p3",Sc="display-p3-linear",cc="linear",Wt="srgb",uc="rec709",dc="p3",Bs=7680,Hm=519,Hy=512,Vy=513,Gy=514,T0=515,Wy=516,jy=517,Xy=518,qy=519,nf=35044,O2=35048,F2=35040,Vm="300 es",sr=2e3,fc=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gm=1234567;const co=Math.PI/180,go=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function fn(i,e,t){return Math.max(e,Math.min(t,i))}function gf(i,e){return(i%e+e)%e}function Yy(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function $y(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function Ky(i,e,t,s){return uo(i,e,1-Math.exp(-t*s))}function Jy(i,e=1){return e-Math.abs(gf(i,e*2)-e)}function Zy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function eS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tS(i,e){return i+Math.random()*(e-i)}function nS(i){return i*(.5-Math.random())}function iS(i){i!==void 0&&(Gm=i);let e=Gm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rS(i){return i*co}function sS(i){return i*go}function aS(i){return(i&i-1)===0&&i!==0}function oS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cS(i,e,t,s,a){const l=Math.cos,c=Math.sin,u=l(t/2),f=c(t/2),h=l((e+s)/2),m=c((e+s)/2),g=l((e-s)/2),v=c((e-s)/2),y=l((s-e)/2),M=c((s-e)/2);switch(a){case"XYX":i.set(u*m,f*g,f*v,u*h);break;case"YZY":i.set(f*v,u*m,f*g,u*h);break;case"ZXZ":i.set(f*g,f*v,u*m,u*h);break;case"XZX":i.set(u*m,f*M,f*y,u*h);break;case"YXY":i.set(f*y,u*m,f*M,u*h);break;case"ZYZ":i.set(f*M,f*y,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const z2={DEG2RAD:co,RAD2DEG:go,generateUUID:zi,clamp:fn,euclideanModulo:gf,mapLinear:Yy,inverseLerp:$y,lerp:uo,damp:Ky,pingpong:Jy,smoothstep:Zy,smootherstep:Qy,randInt:eS,randFloat:tS,randFloatSpread:nS,seededRandom:iS,degToRad:rS,radToDeg:sS,isPowerOfTwo:aS,ceilPowerOfTwo:oS,floorPowerOfTwo:lS,setQuaternionFromProperEuler:cS,normalize:Ft,denormalize:Ai};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(fn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Et{constructor(e,t,s,a,l,c,u,f,h){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,u,f,h)}set(e,t,s,a,l,c,u,f,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=t,m[4]=l,m[5]=f,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],u=s[3],f=s[6],h=s[1],m=s[4],g=s[7],v=s[2],y=s[5],M=s[8],w=a[0],S=a[3],x=a[6],D=a[1],E=a[4],R=a[7],k=a[2],N=a[5],F=a[8];return l[0]=c*w+u*D+f*k,l[3]=c*S+u*E+f*N,l[6]=c*x+u*R+f*F,l[1]=h*w+m*D+g*k,l[4]=h*S+m*E+g*N,l[7]=h*x+m*R+g*F,l[2]=v*w+y*D+M*k,l[5]=v*S+y*E+M*N,l[8]=v*x+y*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-s*l*m+s*u*f+a*l*h-a*c*f}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=m*c-u*h,v=u*f-m*l,y=h*l-c*f,M=t*g+s*v+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(a*h-m*s)*w,e[2]=(u*s-a*c)*w,e[3]=v*w,e[4]=(m*t-a*f)*w,e[5]=(a*l-u*t)*w,e[6]=y*w,e[7]=(s*f-h*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,u){const f=Math.cos(l),h=Math.sin(l);return this.set(s*f,s*h,-s*(f*c+h*u)+c+e,-a*h,a*f,-a*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(vd.makeScale(e,t)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,t){return this.premultiply(vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new Et;function A0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uS(){const i=vo("canvas");return i.style.display="block",i}const Wm={};function vf(i){i in Wm||(Wm[i]=!0,console.warn(i))}function dS(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const jm=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xm=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cl={[Br]:{transfer:cc,primaries:uc,toReference:i=>i,fromReference:i=>i},[wi]:{transfer:Wt,primaries:uc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sc]:{transfer:cc,primaries:dc,toReference:i=>i.applyMatrix3(Xm),fromReference:i=>i.applyMatrix3(jm)},[mf]:{transfer:Wt,primaries:dc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xm),fromReference:i=>i.applyMatrix3(jm).convertLinearToSRGB()}},fS=new Set([Br,Sc]),zt={enabled:!0,_workingColorSpace:Br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fS.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const s=Cl[e].toReference,a=Cl[t].fromReference;return a(s(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cl[i].primaries},getTransfer:function(i){return i===Nr?cc:Cl[i].transfer}};function la(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xd(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hs;class hS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=vo("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=la(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(la(t[s]/255)*255):t[s]=la(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pS=0;class C0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?l.push(_d(a[c].image)):l.push(_d(a[c]))}else l=_d(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function _d(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mS=0;class Ln extends ga{constructor(e=Ln.DEFAULT_IMAGE,t=Ln.DEFAULT_MAPPING,s=Dr,a=Dr,l=hi,c=Ir,u=Ci,f=zr,h=Ln.DEFAULT_ANISOTROPY,m=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=zi(),this.name="",this.source=new C0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=v0;Ln.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,t=0,s=0,a=1){yn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const f=e.elements,h=f[0],m=f[4],g=f[8],v=f[1],y=f[5],M=f[9],w=f[2],S=f[6],x=f[10];if(Math.abs(m-v)<.01&&Math.abs(g-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+w)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(h+1)/2,R=(y+1)/2,k=(x+1)/2,N=(m+v)/4,F=(g+w)/4,I=(M+S)/4;return E>R&&E>k?E<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(E),a=N/s,l=F/s):R>k?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=N/a,l=I/a):k<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(k),s=F/l,a=I/l),this.set(s,a,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-w)*(g-w)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-w)/D,this.z=(v-m)/D,this.w=Math.acos((h+y+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gS extends ga{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yn(0,0,e,t),this.scissorTest=!1,this.viewport=new yn(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Ln(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let u=0;u<c;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new C0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends gS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class b0 extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vS extends Ln{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,u){let f=s[a+0],h=s[a+1],m=s[a+2],g=s[a+3];const v=l[c+0],y=l[c+1],M=l[c+2],w=l[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=M,e[t+3]=w;return}if(g!==w||f!==v||h!==y||m!==M){let S=1-u;const x=f*v+h*y+m*M+g*w,D=x>=0?1:-1,E=1-x*x;if(E>Number.EPSILON){const k=Math.sqrt(E),N=Math.atan2(k,x*D);S=Math.sin(S*N)/k,u=Math.sin(u*N)/k}const R=u*D;if(f=f*S+v*R,h=h*S+y*R,m=m*S+M*R,g=g*S+w*R,S===1-u){const k=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=k,h*=k,m*=k,g*=k}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,c){const u=s[a],f=s[a+1],h=s[a+2],m=s[a+3],g=l[c],v=l[c+1],y=l[c+2],M=l[c+3];return e[t]=u*M+m*g+f*y-h*v,e[t+1]=f*M+m*v+h*g-u*y,e[t+2]=h*M+m*y+u*v-f*g,e[t+3]=m*M-u*g-f*v-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(s/2),m=u(a/2),g=u(l/2),v=f(s/2),y=f(a/2),M=f(l/2);switch(c){case"XYZ":this._x=v*m*g+h*y*M,this._y=h*y*g-v*m*M,this._z=h*m*M+v*y*g,this._w=h*m*g-v*y*M;break;case"YXZ":this._x=v*m*g+h*y*M,this._y=h*y*g-v*m*M,this._z=h*m*M-v*y*g,this._w=h*m*g+v*y*M;break;case"ZXY":this._x=v*m*g-h*y*M,this._y=h*y*g+v*m*M,this._z=h*m*M+v*y*g,this._w=h*m*g-v*y*M;break;case"ZYX":this._x=v*m*g-h*y*M,this._y=h*y*g+v*m*M,this._z=h*m*M-v*y*g,this._w=h*m*g+v*y*M;break;case"YZX":this._x=v*m*g+h*y*M,this._y=h*y*g+v*m*M,this._z=h*m*M-v*y*g,this._w=h*m*g-v*y*M;break;case"XZY":this._x=v*m*g-h*y*M,this._y=h*y*g-v*m*M,this._z=h*m*M+v*y*g,this._w=h*m*g+v*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],u=t[5],f=t[9],h=t[2],m=t[6],g=t[10],v=s+u+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-f)*y,this._y=(l-h)*y,this._z=(c-a)*y}else if(s>u&&s>g){const y=2*Math.sqrt(1+s-u-g);this._w=(m-f)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-s-g);this._w=(l-h)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+g-s-u);this._w=(c-a)/y,this._x=(l+h)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,u=t._x,f=t._y,h=t._z,m=t._w;return this._x=s*m+c*u+a*h-l*f,this._y=a*m+c*f+l*u-s*h,this._z=l*m+c*h+s*f-a*u,this._w=c*m-s*u-a*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let u=c*e._w+s*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*s+t*this._x,this._y=y*a+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*g+this._w*v,this._x=s*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*a-u*s),m=2*(u*t-l*a),g=2*(l*s-c*t);return this.x=t+f*h+c*g-u*m,this.y=s+f*m+u*h-l*g,this.z=a+f*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,u=t.y,f=t.z;return this.x=a*f-l*u,this.y=l*c-s*f,this.z=s*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(fn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new K,qm=new So;class gs{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=l.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(l,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bl.copy(s.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Rl.subVectors(this.max,eo),Vs.subVectors(e.a,eo),Gs.subVectors(e.b,eo),Ws.subVectors(e.c,eo),Tr.subVectors(Gs,Vs),Ar.subVectors(Ws,Gs),ns.subVectors(Vs,Ws);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-ns.z,ns.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,ns.z,0,-ns.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-ns.y,ns.x,0];return!Sd(t,Vs,Gs,Ws,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,Vs,Gs,Ws,Rl))?!1:(Pl.crossVectors(Tr,Ar),t=[Pl.x,Pl.y,Pl.z],Sd(t,Vs,Gs,Ws,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,bl=new gs,Vs=new K,Gs=new K,Ws=new K,Tr=new K,Ar=new K,ns=new K,eo=new K,Rl=new K,Pl=new K,is=new K;function Sd(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){is.fromArray(i,l);const u=a.x*Math.abs(is.x)+a.y*Math.abs(is.y)+a.z*Math.abs(is.z),f=e.dot(is),h=t.dot(is),m=s.dot(is);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>u)return!1}return!0}const xS=new gs,to=new K,Md=new K;class va{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):xS.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(to,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Md)),this.expandByPoint(to.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new K,Ed=new K,Ll=new K,Cr=new K,wd=new K,Nl=new K,Td=new K;class xf{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Ed.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Ed);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ll),u=Cr.dot(this.direction),f=-Cr.dot(Ll),h=Cr.lengthSq(),m=Math.abs(1-c*c);let g,v,y,M;if(m>0)if(g=c*f-u,v=c*u-f,M=l*m,g>=0)if(v>=-M)if(v<=M){const w=1/m;g*=w,v*=w,y=g*(g+c*v+2*u)+v*(c*g+v+2*f)+h}else v=l,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*f)+h;else v=-l,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*f)+h;else v<=-M?(g=Math.max(0,-(-c*l+u)),v=g>0?-l:Math.min(Math.max(-l,-f),l),y=-g*g+v*(v+2*f)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-f),l),y=v*(v+2*f)+h):(g=Math.max(0,-(c*l+u)),v=g>0?l:Math.min(Math.max(-l,-f),l),y=-g*g+v*(v+2*f)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*f)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ed).addScaledVector(Ll,v),y}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),a=Ki.dot(Ki)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),u=s-c,f=s+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,u,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),g>=0?(u=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),s>f||u>a)||((u>s||s!==s)&&(s=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,s,a,l){wd.subVectors(t,e),Nl.subVectors(s,e),Td.crossVectors(wd,Nl);let c=this.direction.dot(Td),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Cr.subVectors(this.origin,e);const f=u*this.direction.dot(Nl.crossVectors(Cr,Nl));if(f<0)return null;const h=u*this.direction.dot(wd.cross(Cr));if(h<0||f+h>c)return null;const m=-u*Cr.dot(Td);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,s,a,l,c,u,f,h,m,g,v,y,M,w,S){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,u,f,h,m,g,v,y,M,w,S)}set(e,t,s,a,l,c,u,f,h,m,g,v,y,M,w,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=u,x[13]=f,x[2]=h,x[6]=m,x[10]=g,x[14]=v,x[3]=y,x[7]=M,x[11]=w,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),u=Math.sin(s),f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,y=c*g,M=u*m,w=u*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=y+M*h,t[5]=v-w*h,t[9]=-u*f,t[2]=w-v*h,t[6]=M+y*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*m,y=f*g,M=h*m,w=h*g;t[0]=v+w*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=y*u-M,t[6]=w+v*u,t[10]=c*f}else if(e.order==="ZXY"){const v=f*m,y=f*g,M=h*m,w=h*g;t[0]=v-w*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*m,t[9]=w-v*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const v=c*m,y=c*g,M=u*m,w=u*g;t[0]=f*m,t[4]=M*h-y,t[8]=v*h+w,t[1]=f*g,t[5]=w*h+v,t[9]=y*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,y=c*h,M=u*f,w=u*h;t[0]=f*m,t[4]=w-v*g,t[8]=M*g+y,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=y*g+M,t[10]=v-w*g}else if(e.order==="XZY"){const v=c*f,y=c*h,M=u*f,w=u*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=v*g+w,t[5]=c*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*m,t[10]=w*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,yS)}lookAt(e,t,s){const a=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),br.crossVectors(s,ti),br.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),br.crossVectors(s,ti)),br.normalize(),Dl.crossVectors(ti,br),a[0]=br.x,a[4]=Dl.x,a[8]=ti.x,a[1]=br.y,a[5]=Dl.y,a[9]=ti.y,a[2]=br.z,a[6]=Dl.z,a[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],u=s[4],f=s[8],h=s[12],m=s[1],g=s[5],v=s[9],y=s[13],M=s[2],w=s[6],S=s[10],x=s[14],D=s[3],E=s[7],R=s[11],k=s[15],N=a[0],F=a[4],I=a[8],L=a[12],A=a[1],B=a[5],Y=a[9],J=a[13],te=a[2],ce=a[6],Z=a[10],ge=a[14],G=a[3],ne=a[7],re=a[11],U=a[15];return l[0]=c*N+u*A+f*te+h*G,l[4]=c*F+u*B+f*ce+h*ne,l[8]=c*I+u*Y+f*Z+h*re,l[12]=c*L+u*J+f*ge+h*U,l[1]=m*N+g*A+v*te+y*G,l[5]=m*F+g*B+v*ce+y*ne,l[9]=m*I+g*Y+v*Z+y*re,l[13]=m*L+g*J+v*ge+y*U,l[2]=M*N+w*A+S*te+x*G,l[6]=M*F+w*B+S*ce+x*ne,l[10]=M*I+w*Y+S*Z+x*re,l[14]=M*L+w*J+S*ge+x*U,l[3]=D*N+E*A+R*te+k*G,l[7]=D*F+E*B+R*ce+k*ne,l[11]=D*I+E*Y+R*Z+k*re,l[15]=D*L+E*J+R*ge+k*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],u=e[5],f=e[9],h=e[13],m=e[2],g=e[6],v=e[10],y=e[14],M=e[3],w=e[7],S=e[11],x=e[15];return M*(+l*f*g-a*h*g-l*u*v+s*h*v+a*u*y-s*f*y)+w*(+t*f*y-t*h*v+l*c*v-a*c*y+a*h*m-l*f*m)+S*(+t*h*g-t*u*y-l*c*g+s*c*y+l*u*m-s*h*m)+x*(-a*u*m-t*f*g+t*u*v+a*c*g-s*c*v+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=e[9],v=e[10],y=e[11],M=e[12],w=e[13],S=e[14],x=e[15],D=g*S*h-w*v*h+w*f*y-u*S*y-g*f*x+u*v*x,E=M*v*h-m*S*h-M*f*y+c*S*y+m*f*x-c*v*x,R=m*w*h-M*g*h+M*u*y-c*w*y-m*u*x+c*g*x,k=M*g*f-m*w*f-M*u*v+c*w*v+m*u*S-c*g*S,N=t*D+s*E+a*R+l*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=D*F,e[1]=(w*v*l-g*S*l-w*a*y+s*S*y+g*a*x-s*v*x)*F,e[2]=(u*S*l-w*f*l+w*a*h-s*S*h-u*a*x+s*f*x)*F,e[3]=(g*f*l-u*v*l-g*a*h+s*v*h+u*a*y-s*f*y)*F,e[4]=E*F,e[5]=(m*S*l-M*v*l+M*a*y-t*S*y-m*a*x+t*v*x)*F,e[6]=(M*f*l-c*S*l-M*a*h+t*S*h+c*a*x-t*f*x)*F,e[7]=(c*v*l-m*f*l+m*a*h-t*v*h-c*a*y+t*f*y)*F,e[8]=R*F,e[9]=(M*g*l-m*w*l-M*s*y+t*w*y+m*s*x-t*g*x)*F,e[10]=(c*w*l-M*u*l+M*s*h-t*w*h-c*s*x+t*u*x)*F,e[11]=(m*u*l-c*g*l-m*s*h+t*g*h+c*s*y-t*u*y)*F,e[12]=k*F,e[13]=(m*w*a-M*g*a+M*s*v-t*w*v-m*s*S+t*g*S)*F,e[14]=(M*u*a-c*w*a-M*s*f+t*w*f+c*s*S-t*u*S)*F,e[15]=(c*g*a-m*u*a+m*s*f-t*g*f-c*s*v+t*u*v)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,u=e.y,f=e.z,h=l*c,m=l*u;return this.set(h*c+s,h*u-a*f,h*f+a*u,0,h*u+a*f,m*u+s,m*f-a*c,0,h*f-a*u,m*f+a*c,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,u=t._z,f=t._w,h=l+l,m=c+c,g=u+u,v=l*h,y=l*m,M=l*g,w=c*m,S=c*g,x=u*g,D=f*h,E=f*m,R=f*g,k=s.x,N=s.y,F=s.z;return a[0]=(1-(w+x))*k,a[1]=(y+R)*k,a[2]=(M-E)*k,a[3]=0,a[4]=(y-R)*N,a[5]=(1-(v+x))*N,a[6]=(S+D)*N,a[7]=0,a[8]=(M+E)*F,a[9]=(S-D)*F,a[10]=(1-(v+w))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=js.set(a[0],a[1],a[2]).length();const c=js.set(a[4],a[5],a[6]).length(),u=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Mi.copy(this);const h=1/l,m=1/c,g=1/u;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=m,Mi.elements[5]*=m,Mi.elements[6]*=m,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,t.setFromRotationMatrix(Mi),s.x=l,s.y=c,s.z=u,this}makePerspective(e,t,s,a,l,c,u=sr){const f=this.elements,h=2*l/(t-e),m=2*l/(s-a),g=(t+e)/(t-e),v=(s+a)/(s-a);let y,M;if(u===sr)y=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(u===fc)y=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,a,l,c,u=sr){const f=this.elements,h=1/(t-e),m=1/(s-a),g=1/(c-l),v=(t+e)*h,y=(s+a)*m;let M,w;if(u===sr)M=(c+l)*g,w=-2*g;else if(u===fc)M=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new K,Mi=new Bt,_S=new K(0,0,0),yS=new K(1,1,1),br=new K,Dl=new K,ti=new K,Ym=new Bt,$m=new So;class Ri{constructor(e=0,t=0,s=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],u=a[8],f=a[1],h=a[5],m=a[9],g=a[2],v=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(fn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-fn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ym,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class _f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SS=0;const Km=new K,Xs=new So,Ji=new Bt,Il=new K,no=new K,MS=new K,ES=new So,Jm=new K(1,0,0),Zm=new K(0,1,0),Qm=new K(0,0,1),eg={type:"added"},wS={type:"removed"},qs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class En extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new K,t=new Ri,s=new So,a=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Et}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Jm,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return Km.copy(e).applyQuaternion(this.quaternion),this.position.add(Km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jm,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Il.copy(e):Il.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(no,Il,this.up):Ji.lookAt(Il,no,this.up),this.quaternion.setFromRotationMatrix(Ji),a&&(Ji.extractRotation(a.matrixWorld),Xs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wS),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,MS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,ES,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(l(e.materials,this.material[f]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(l(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(s.geometries=u),f.length>0&&(s.materials=f),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=a,s;function c(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}En.DEFAULT_UP=new K(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new K,Zi=new K,Cd=new K,Qi=new K,Ys=new K,$s=new K,tg=new K,bd=new K,Rd=new K,Pd=new K;class Fi{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Ei.subVectors(e,t),a.cross(Ei);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){Ei.subVectors(a,t),Zi.subVectors(s,t),Cd.subVectors(e,t);const c=Ei.dot(Ei),u=Ei.dot(Zi),f=Ei.dot(Cd),h=Zi.dot(Zi),m=Zi.dot(Cd),g=c*h-u*u;if(g===0)return l.set(0,0,0),null;const v=1/g,y=(h*f-u*m)*v,M=(c*m-u*f)*v;return l.set(1-y-M,M,y)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,s,a,l,c,u,f){return this.getBarycoord(e,t,s,a,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(c,Qi.y),f.addScaledVector(u,Qi.z),f)}static isFrontFacing(e,t,s,a){return Ei.subVectors(s,t),Zi.subVectors(e,t),Ei.cross(Zi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ei.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Fi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,u;Ys.subVectors(a,s),$s.subVectors(l,s),bd.subVectors(e,s);const f=Ys.dot(bd),h=$s.dot(bd);if(f<=0&&h<=0)return t.copy(s);Rd.subVectors(e,a);const m=Ys.dot(Rd),g=$s.dot(Rd);if(m>=0&&g<=m)return t.copy(a);const v=f*g-m*h;if(v<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(s).addScaledVector(Ys,c);Pd.subVectors(e,l);const y=Ys.dot(Pd),M=$s.dot(Pd);if(M>=0&&y<=M)return t.copy(l);const w=y*h-f*M;if(w<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(s).addScaledVector($s,u);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return tg.subVectors(l,a),u=(g-m)/(g-m+(y-M)),t.copy(a).addScaledVector(tg,u);const x=1/(S+w+v);return c=w*x,u=v*x,t.copy(s).addScaledVector(Ys,c).addScaledVector($s,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=zt.workingColorSpace){return this.r=e,this.g=t,this.b=s,zt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=zt.workingColorSpace){if(e=gf(e,1),t=fn(t,0,1),s=fn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ld(c,l,e+1/3),this.g=Ld(c,l,e),this.b=Ld(c,l,e-1/3)}return zt.toWorkingColorSpace(this,a),this}setStyle(e,t=wi){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wi){const s=R0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=xd(e.r),this.g=xd(e.g),this.b=xd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return zt.fromWorkingColorSpace(Pn.copy(this),e),Math.round(fn(Pn.r*255,0,255))*65536+Math.round(fn(Pn.g*255,0,255))*256+Math.round(fn(Pn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(Pn.copy(this),t);const s=Pn.r,a=Pn.g,l=Pn.b,c=Math.max(s,a,l),u=Math.min(s,a,l);let f,h;const m=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case s:f=(a-l)/g+(a<l?6:0);break;case a:f=(l-s)/g+2;break;case l:f=(s-a)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=wi){zt.fromWorkingColorSpace(Pn.copy(this),e);const t=Pn.r,s=Pn.g,a=Pn.b;return e!==wi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Ul);const s=uo(Rr.h,Ul.h,t),a=uo(Rr.s,Ul.s,t),l=uo(Rr.l,Ul.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new bt;bt.NAMES=R0;let TS=0;class vs extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=aa,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=Zd,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(s.blending=this.blending),this.side!==Fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Jd&&(s.blendSrc=this.blendSrc),this.blendDst!==Zd&&(s.blendDst=this.blendDst),this.blendEquation!==us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ac&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P0 extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new K,Ol=new $e;class pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=nf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ai(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ft(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array),l=Ft(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nf&&(e.usage=this.usage),e}}class L0 extends pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class N0 extends pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Yt extends pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let AS=0;const fi=new Bt,Nd=new En,Ks=new K,ni=new gs,io=new gs,_n=new K;class kn extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?N0:L0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Et().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,s){return fi.makeTranslation(e,t,s),this.applyMatrix4(fi),this}scale(e,t,s){return fi.makeScale(e,t,s),this.applyMatrix4(fi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const u=t[l];io.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(ni.min,io.min),ni.expandByPoint(_n),_n.addVectors(ni.max,io.max),ni.expandByPoint(_n)):(ni.expandByPoint(io.min),ni.expandByPoint(io.max))}ni.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)_n.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(_n));if(t)for(let l=0,c=t.length;l<c;l++){const u=t[l],f=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)_n.fromBufferAttribute(u,h),f&&(Ks.fromBufferAttribute(e,h),_n.add(Ks)),a=Math.max(a,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let I=0;I<s.count;I++)u[I]=new K,f[I]=new K;const h=new K,m=new K,g=new K,v=new $e,y=new $e,M=new $e,w=new K,S=new K;function x(I,L,A){h.fromBufferAttribute(s,I),m.fromBufferAttribute(s,L),g.fromBufferAttribute(s,A),v.fromBufferAttribute(l,I),y.fromBufferAttribute(l,L),M.fromBufferAttribute(l,A),m.sub(h),g.sub(h),y.sub(v),M.sub(v);const B=1/(y.x*M.y-M.x*y.y);isFinite(B)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(B),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(B),u[I].add(w),u[L].add(w),u[A].add(w),f[I].add(S),f[L].add(S),f[A].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let I=0,L=D.length;I<L;++I){const A=D[I],B=A.start,Y=A.count;for(let J=B,te=B+Y;J<te;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const E=new K,R=new K,k=new K,N=new K;function F(I){k.fromBufferAttribute(a,I),N.copy(k);const L=u[I];E.copy(L),E.sub(k.multiplyScalar(k.dot(L))).normalize(),R.crossVectors(N,L);const B=R.dot(f[I])<0?-1:1;c.setXYZW(I,E.x,E.y,E.z,B)}for(let I=0,L=D.length;I<L;++I){const A=D[I],B=A.start,Y=A.count;for(let J=B,te=B+Y;J<te;J+=3)F(e.getX(J+0)),F(e.getX(J+1)),F(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const a=new K,l=new K,c=new K,u=new K,f=new K,h=new K,m=new K,g=new K;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),w=e.getX(v+1),S=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,S),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),u.fromBufferAttribute(s,M),f.fromBufferAttribute(s,w),h.fromBufferAttribute(s,S),u.add(m),f.add(m),h.add(m),s.setXYZ(M,u.x,u.y,u.z),s.setXYZ(w,f.x,f.y,f.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,y=t.count;v<y;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,f){const h=u.array,m=u.itemSize,g=u.normalized,v=new h.constructor(f.length*m);let y=0,M=0;for(let w=0,S=f.length;w<S;w++){u.isInterleavedBufferAttribute?y=f[w]*u.data.stride+u.offset:y=f[w]*m;for(let x=0;x<m;x++)v[M++]=h[y++]}return new pi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,s=this.index.array,a=this.attributes;for(const u in a){const f=a[u],h=e(f,s);t.setAttribute(u,h)}const l=this.morphAttributes;for(const u in l){const f=[],h=l[u];for(let m=0,g=h.length;m<g;m++){const v=h[m],y=e(v,s);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const h=s[f];e.data.attributes[f]=h.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,v=h.length;g<v;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(a[f]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,y=g.length;v<y;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ng=new Bt,rs=new xf,Fl=new va,ig=new K,Js=new K,Zs=new K,Qs=new K,Dd=new K,zl=new K,kl=new $e,Bl=new $e,Hl=new $e,rg=new K,sg=new K,ag=new K,Vl=new K,Gl=new K;class bi extends En{constructor(e=new kn,t=new P0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){zl.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const m=u[f],g=l[f];m!==0&&(Dd.fromBufferAttribute(g,e),c?zl.addScaledVector(Dd,m):zl.addScaledVector(Dd.sub(t),m))}t.add(zl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(Fl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Fl,ig)===null||rs.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(l).invert(),rs.copy(e.ray).applyMatrix4(ng),!(s.boundingBox!==null&&rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,u=l.index,f=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,y=l.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const S=v[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),E=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,k=E;R<k;R+=3){const N=u.getX(R),F=u.getX(R+1),I=u.getX(R+2);a=Wl(this,x,e,s,h,m,g,N,F,I),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let S=M,x=w;S<x;S+=3){const D=u.getX(S),E=u.getX(S+1),R=u.getX(S+2);a=Wl(this,c,e,s,h,m,g,D,E,R),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const S=v[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),E=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let R=D,k=E;R<k;R+=3){const N=R,F=R+1,I=R+2;a=Wl(this,x,e,s,h,m,g,N,F,I),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),w=Math.min(f.count,y.start+y.count);for(let S=M,x=w;S<x;S+=3){const D=S,E=S+1,R=S+2;a=Wl(this,c,e,s,h,m,g,D,E,R),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function CS(i,e,t,s,a,l,c,u){let f;if(e.side===Yn?f=s.intersectTriangle(c,l,a,!0,u):f=s.intersectTriangle(a,l,c,e.side===Fr,u),f===null)return null;Gl.copy(u),Gl.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Gl);return h<t.near||h>t.far?null:{distance:h,point:Gl.clone(),object:i}}function Wl(i,e,t,s,a,l,c,u,f,h){i.getVertexPosition(u,Js),i.getVertexPosition(f,Zs),i.getVertexPosition(h,Qs);const m=CS(i,e,t,s,Js,Zs,Qs,Vl);if(m){a&&(kl.fromBufferAttribute(a,u),Bl.fromBufferAttribute(a,f),Hl.fromBufferAttribute(a,h),m.uv=Fi.getInterpolation(Vl,Js,Zs,Qs,kl,Bl,Hl,new $e)),l&&(kl.fromBufferAttribute(l,u),Bl.fromBufferAttribute(l,f),Hl.fromBufferAttribute(l,h),m.uv1=Fi.getInterpolation(Vl,Js,Zs,Qs,kl,Bl,Hl,new $e)),c&&(rg.fromBufferAttribute(c,u),sg.fromBufferAttribute(c,f),ag.fromBufferAttribute(c,h),m.normal=Fi.getInterpolation(Vl,Js,Zs,Qs,rg,sg,ag,new K),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new K,materialIndex:0};Fi.getNormal(Js,Zs,Qs,g.normal),m.face=g}return m}class Mo extends kn{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const u=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],m=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,a,c,2),M("x","z","y",1,-1,e,s,-t,a,c,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(f),this.setAttribute("position",new Yt(h,3)),this.setAttribute("normal",new Yt(m,3)),this.setAttribute("uv",new Yt(g,2));function M(w,S,x,D,E,R,k,N,F,I,L){const A=R/F,B=k/I,Y=R/2,J=k/2,te=N/2,ce=F+1,Z=I+1;let ge=0,G=0;const ne=new K;for(let re=0;re<Z;re++){const U=re*B-J;for(let X=0;X<ce;X++){const Ne=X*A-Y;ne[w]=Ne*D,ne[S]=U*E,ne[x]=te,h.push(ne.x,ne.y,ne.z),ne[w]=0,ne[S]=0,ne[x]=N>0?1:-1,m.push(ne.x,ne.y,ne.z),g.push(X/F),g.push(1-re/I),ge+=1}}for(let re=0;re<I;re++)for(let U=0;U<F;U++){const X=v+U+ce*re,Ne=v+U+ce*(re+1),Q=v+(U+1)+ce*(re+1),ie=v+(U+1)+ce*re;f.push(X,Ne,ie),f.push(Ne,Q,ie),G+=6}u.addGroup(y,G,L),y+=G,v+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const s=ma(i[t]);for(const a in s)e[a]=s[a]}return e}function bS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function D0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const RS={clone:ma,merge:zn};var PS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=bS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class I0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new K,og=new $e,lg=new $e;class Ti extends I0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,og,lg),t.subVectors(lg,og)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*s/h,a*=c.width/f,s*=c.height/h}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class NS extends En{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ti(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Ti(ea,ta,e,t);l.layers=this.layers,this.add(l);const c=new Ti(ea,ta,e,t);c.layers=this.layers,this.add(c);const u=new Ti(ea,ta,e,t);u.layers=this.layers,this.add(u);const f=new Ti(ea,ta,e,t);f.layers=this.layers,this.add(f);const h=new Ti(ea,ta,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,u,f]=t;for(const h of t)this.remove(h);if(e===sr)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,u,f,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,u),e.setRenderTarget(s,3,a),e.render(t,f),e.setRenderTarget(s,4,a),e.render(t,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(g,v,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class U0 extends Ln{constructor(e,t,s,a,l,c,u,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,s,a,l,c,u,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DS extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new U0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Mo(5,5,5),l=new kr({name:"CubemapFromEquirect",uniforms:ma(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:Ur});l.uniforms.tEquirect.value=t;const c=new bi(a,l),u=t.minFilter;return t.minFilter===Ir&&(t.minFilter=hi),new NS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}const Id=new K,IS=new K,US=new Et;class ls{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Id.subVectors(s,t).cross(IS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Id),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||US.getNormalMatrix(e),a=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new va,jl=new K;class yf{constructor(e=new ls,t=new ls,s=new ls,a=new ls,l=new ls,c=new ls){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(s),u[3].copy(a),u[4].copy(l),u[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=sr){const s=this.planes,a=e.elements,l=a[0],c=a[1],u=a[2],f=a[3],h=a[4],m=a[5],g=a[6],v=a[7],y=a[8],M=a[9],w=a[10],S=a[11],x=a[12],D=a[13],E=a[14],R=a[15];if(s[0].setComponents(f-l,v-h,S-y,R-x).normalize(),s[1].setComponents(f+l,v+h,S+y,R+x).normalize(),s[2].setComponents(f+c,v+m,S+M,R+D).normalize(),s[3].setComponents(f-c,v-m,S-M,R-D).normalize(),s[4].setComponents(f-u,v-g,S-w,R-E).normalize(),t===sr)s[5].setComponents(f+u,v+g,S+w,R+E).normalize();else if(t===fc)s[5].setComponents(u,g,w,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(jl.x=a.normal.x>0?e.max.x:e.min.x,jl.y=a.normal.y>0?e.max.y:e.min.y,jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function OS(i){const e=new WeakMap;function t(u,f){const h=u.array,m=u.usage,g=h.byteLength,v=i.createBuffer();i.bindBuffer(f,v),i.bufferData(f,h,m),u.onUploadCallback();let y;if(h instanceof Float32Array)y=i.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=i.SHORT;else if(h instanceof Uint32Array)y=i.UNSIGNED_INT;else if(h instanceof Int32Array)y=i.INT;else if(h instanceof Int8Array)y=i.BYTE;else if(h instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,h){const m=f.array,g=f._updateRange,v=f.updateRanges;if(i.bindBuffer(h,u),g.count===-1&&v.length===0&&i.bufferSubData(h,0,m),v.length!==0){for(let y=0,M=v.length;y<M;y++){const w=v[y];i.bufferSubData(h,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}f.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(h,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(i.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:l,update:c}}class Mc extends kn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,u=Math.floor(s),f=Math.floor(a),h=u+1,m=f+1,g=e/u,v=t/f,y=[],M=[],w=[],S=[];for(let x=0;x<m;x++){const D=x*v-c;for(let E=0;E<h;E++){const R=E*g-l;M.push(R,-D,0),w.push(0,0,1),S.push(E/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<u;D++){const E=D+h*x,R=D+h*(x+1),k=D+1+h*(x+1),N=D+1+h*x;y.push(E,R,N),y.push(R,k,N)}this.setIndex(y),this.setAttribute("position",new Yt(M,3)),this.setAttribute("normal",new Yt(w,3)),this.setAttribute("uv",new Yt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var FS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
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
#endif`,kS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GS=`#ifdef USE_AOMAP
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
#endif`,WS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jS=`#ifdef USE_BATCHING
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
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KS=`#ifdef USE_IRIDESCENCE
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
#endif`,JS=`#ifdef USE_BUMPMAP
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
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,aM=`#define PI 3.141592653589793
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
} // validated`,oM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lM=`vec3 transformedNormal = objectNormal;
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
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`
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
}`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
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
}`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bM=`uniform bool receiveShadow;
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
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,PM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IM=`PhysicalMaterial material;
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
#endif`,UM=`struct PhysicalMaterial {
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
}`,OM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XM=`#if defined( USE_POINTS_UV )
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
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
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
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
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
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S1=`float getShadowMask() {
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
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
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
}`,G1=`#if DEPTH_PACKING == 3200
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
}`,W1=`#define DISTANCE
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
}`,j1=`#define DISTANCE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`uniform float scale;
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
}`,$1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,J1=`uniform vec3 diffuse;
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
}`,Z1=`#define LAMBERT
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
}`,Q1=`#define LAMBERT
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
}`,eE=`#define MATCAP
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
}`,tE=`#define MATCAP
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
}`,nE=`#define NORMAL
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
}`,iE=`#define NORMAL
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
}`,rE=`#define PHONG
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
}`,sE=`#define PHONG
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
}`,aE=`#define STANDARD
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
}`,oE=`#define STANDARD
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
}`,lE=`#define TOON
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
}`,cE=`#define TOON
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
}`,uE=`uniform float size;
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
}`,dE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,hE=`uniform vec3 color;
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
}`,pE=`uniform float rotation;
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
}`,mE=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:FS,alphahash_pars_fragment:zS,alphamap_fragment:kS,alphamap_pars_fragment:BS,alphatest_fragment:HS,alphatest_pars_fragment:VS,aomap_fragment:GS,aomap_pars_fragment:WS,batching_pars_vertex:jS,batching_vertex:XS,begin_vertex:qS,beginnormal_vertex:YS,bsdfs:$S,iridescence_fragment:KS,bumpmap_pars_fragment:JS,clipping_planes_fragment:ZS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:eM,clipping_planes_vertex:tM,color_fragment:nM,color_pars_fragment:iM,color_pars_vertex:rM,color_vertex:sM,common:aM,cube_uv_reflection_fragment:oM,defaultnormal_vertex:lM,displacementmap_pars_vertex:cM,displacementmap_vertex:uM,emissivemap_fragment:dM,emissivemap_pars_fragment:fM,colorspace_fragment:hM,colorspace_pars_fragment:pM,envmap_fragment:mM,envmap_common_pars_fragment:gM,envmap_pars_fragment:vM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:RM,envmap_vertex:_M,fog_vertex:yM,fog_pars_vertex:SM,fog_fragment:MM,fog_pars_fragment:EM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:TM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:CM,lights_pars_begin:bM,lights_toon_fragment:PM,lights_toon_pars_fragment:LM,lights_phong_fragment:NM,lights_phong_pars_fragment:DM,lights_physical_fragment:IM,lights_physical_pars_fragment:UM,lights_fragment_begin:OM,lights_fragment_maps:FM,lights_fragment_end:zM,logdepthbuf_fragment:kM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:VM,map_fragment:GM,map_pars_fragment:WM,map_particle_fragment:jM,map_particle_pars_fragment:XM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:YM,morphinstance_vertex:$M,morphcolor_vertex:KM,morphnormal_vertex:JM,morphtarget_pars_vertex:ZM,morphtarget_vertex:QM,normal_fragment_begin:e1,normal_fragment_maps:t1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:r1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:u1,packing:d1,premultiplied_alpha_fragment:f1,project_vertex:h1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:_1,shadowmap_vertex:y1,shadowmask_pars_fragment:S1,skinbase_vertex:M1,skinning_pars_vertex:E1,skinning_vertex:w1,skinnormal_vertex:T1,specularmap_fragment:A1,specularmap_pars_fragment:C1,tonemapping_fragment:b1,tonemapping_pars_fragment:R1,transmission_fragment:P1,transmission_pars_fragment:L1,uv_pars_fragment:N1,uv_pars_vertex:D1,uv_vertex:I1,worldpos_vertex:U1,background_vert:O1,background_frag:F1,backgroundCube_vert:z1,backgroundCube_frag:k1,cube_vert:B1,cube_frag:H1,depth_vert:V1,depth_frag:G1,distanceRGBA_vert:W1,distanceRGBA_frag:j1,equirect_vert:X1,equirect_frag:q1,linedashed_vert:Y1,linedashed_frag:$1,meshbasic_vert:K1,meshbasic_frag:J1,meshlambert_vert:Z1,meshlambert_frag:Q1,meshmatcap_vert:eE,meshmatcap_frag:tE,meshnormal_vert:nE,meshnormal_frag:iE,meshphong_vert:rE,meshphong_frag:sE,meshphysical_vert:aE,meshphysical_frag:oE,meshtoon_vert:lE,meshtoon_frag:cE,points_vert:uE,points_frag:dE,shadow_vert:fE,shadow_frag:hE,sprite_vert:pE,sprite_frag:mE},Ke={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:zn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:zn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new bt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:zn([Ke.points,Ke.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:zn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:zn([Ke.common,Ke.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:zn([Ke.sprite,Ke.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:zn([Ke.common,Ke.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:zn([Ke.lights,Ke.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Xl={r:0,b:0,g:0},as=new Ri,gE=new Bt;function vE(i,e,t,s,a,l,c){const u=new bt(0);let f=l===!0?0:1,h,m,g=null,v=0,y=null;function M(D){let E=D.isScene===!0?D.background:null;return E&&E.isTexture&&(E=(D.backgroundBlurriness>0?t:e).get(E)),E}function w(D){let E=!1;const R=M(D);R===null?x(u,f):R&&R.isColor&&(x(R,1),E=!0);const k=i.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||E)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(D,E){const R=M(E);R&&(R.isCubeTexture||R.mapping===_c)?(m===void 0&&(m=new bi(new Mo(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:ma(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(k,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),as.copy(E.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(gE.makeRotationFromEuler(as)),m.material.toneMapped=zt.getTransfer(R.colorSpace)!==Wt,(g!==R||v!==R.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,g=R,v=R.version,y=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new bi(new Mc(2,2),new kr({name:"BackgroundMaterial",uniforms:ma(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=zt.getTransfer(R.colorSpace)!==Wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||v!==R.version||y!==i.toneMapping)&&(h.material.needsUpdate=!0,g=R,v=R.version,y=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function x(D,E){D.getRGB(Xl,D0(i)),s.buffers.color.setClear(Xl.r,Xl.g,Xl.b,E,c)}return{getClearColor:function(){return u},setClearColor:function(D,E=1){u.set(D),f=E,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,x(u,f)},render:w,addToRenderList:S}}function xE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function u(A,B,Y,J,te){let ce=!1;const Z=g(J,Y,B);l!==Z&&(l=Z,h(l.object)),ce=y(A,J,Y,te),ce&&M(A,J,Y,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,R(A,B,Y,J),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function f(){return i.createVertexArray()}function h(A){return i.bindVertexArray(A)}function m(A){return i.deleteVertexArray(A)}function g(A,B,Y){const J=Y.wireframe===!0;let te=s[A.id];te===void 0&&(te={},s[A.id]=te);let ce=te[B.id];ce===void 0&&(ce={},te[B.id]=ce);let Z=ce[J];return Z===void 0&&(Z=v(f()),ce[J]=Z),Z}function v(A){const B=[],Y=[],J=[];for(let te=0;te<t;te++)B[te]=0,Y[te]=0,J[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:J,object:A,attributes:{},index:null}}function y(A,B,Y,J){const te=l.attributes,ce=B.attributes;let Z=0;const ge=Y.getAttributes();for(const G in ge)if(ge[G].location>=0){const re=te[G];let U=ce[G];if(U===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;Z++}return l.attributesNum!==Z||l.index!==J}function M(A,B,Y,J){const te={},ce=B.attributes;let Z=0;const ge=Y.getAttributes();for(const G in ge)if(ge[G].location>=0){let re=ce[G];re===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(re=A.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),te[G]=U,Z++}l.attributes=te,l.attributesNum=Z,l.index=J}function w(){const A=l.newAttributes;for(let B=0,Y=A.length;B<Y;B++)A[B]=0}function S(A){x(A,0)}function x(A,B){const Y=l.newAttributes,J=l.enabledAttributes,te=l.attributeDivisors;Y[A]=1,J[A]===0&&(i.enableVertexAttribArray(A),J[A]=1),te[A]!==B&&(i.vertexAttribDivisor(A,B),te[A]=B)}function D(){const A=l.newAttributes,B=l.enabledAttributes;for(let Y=0,J=B.length;Y<J;Y++)B[Y]!==A[Y]&&(i.disableVertexAttribArray(Y),B[Y]=0)}function E(A,B,Y,J,te,ce,Z){Z===!0?i.vertexAttribIPointer(A,B,Y,te,ce):i.vertexAttribPointer(A,B,Y,J,te,ce)}function R(A,B,Y,J){w();const te=J.attributes,ce=Y.getAttributes(),Z=B.defaultAttributeValues;for(const ge in ce){const G=ce[ge];if(G.location>=0){let ne=te[ge];if(ne===void 0&&(ge==="instanceMatrix"&&A.instanceMatrix&&(ne=A.instanceMatrix),ge==="instanceColor"&&A.instanceColor&&(ne=A.instanceColor)),ne!==void 0){const re=ne.normalized,U=ne.itemSize,X=e.get(ne);if(X===void 0)continue;const Ne=X.buffer,Q=X.type,ie=X.bytesPerElement,ue=Q===i.INT||Q===i.UNSIGNED_INT||ne.gpuType===x0;if(ne.isInterleavedBufferAttribute){const _e=ne.data,De=_e.stride,Be=ne.offset;if(_e.isInstancedInterleavedBuffer){for(let He=0;He<G.locationSize;He++)x(G.location+He,_e.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let He=0;He<G.locationSize;He++)S(G.location+He);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let He=0;He<G.locationSize;He++)E(G.location+He,U/G.locationSize,Q,re,De*ie,(Be+U/G.locationSize*He)*ie,ue)}else{if(ne.isInstancedBufferAttribute){for(let _e=0;_e<G.locationSize;_e++)x(G.location+_e,ne.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<G.locationSize;_e++)S(G.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let _e=0;_e<G.locationSize;_e++)E(G.location+_e,U/G.locationSize,Q,re,U*ie,U/G.locationSize*_e*ie,ue)}}else if(Z!==void 0){const re=Z[ge];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(G.location,re);break;case 3:i.vertexAttrib3fv(G.location,re);break;case 4:i.vertexAttrib4fv(G.location,re);break;default:i.vertexAttrib1fv(G.location,re)}}}}D()}function k(){I();for(const A in s){const B=s[A];for(const Y in B){const J=B[Y];for(const te in J)m(J[te].object),delete J[te];delete B[Y]}delete s[A]}}function N(A){if(s[A.id]===void 0)return;const B=s[A.id];for(const Y in B){const J=B[Y];for(const te in J)m(J[te].object),delete J[te];delete B[Y]}delete s[A.id]}function F(A){for(const B in s){const Y=s[B];if(Y[A.id]===void 0)continue;const J=Y[A.id];for(const te in J)m(J[te].object),delete J[te];delete Y[A.id]}}function I(){L(),c=!0,l!==a&&(l=a,h(l.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:I,resetDefaultState:L,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function _E(i,e,t){let s;function a(h){s=h}function l(h,m){i.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,g){g!==0&&(i.drawArraysInstanced(s,h,m,g),t.update(m,s,g))}function u(h,m,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<g;y++)this.render(h[y],m[y]);else{v.multiDrawArraysWEBGL(s,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,s,1)}}function f(h,m,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)c(h[M],m[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,m,0,v,0,g);let M=0;for(let w=0;w<g;w++)M+=m[w];for(let w=0;w<v.length;w++)t.update(M,s,v[w])}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function yE(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==Ci&&s.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const F=N===yc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==zr&&s.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==rr&&!F)}function f(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,k=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:w,maxAttributes:S,maxVertexUniforms:x,maxVaryings:D,maxFragmentUniforms:E,vertexTextures:R,maxSamples:k}}function SE(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new ls,u=new Et,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||a;return a=v,s=g.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,w=g.clipIntersection,S=g.clipShadows,x=i.get(g);if(!a||M===null||M.length===0||l&&!S)l?m(null):h();else{const D=l?0:s,E=D*4;let R=x.clippingState||null;f.value=R,R=m(M,v,E,y);for(let k=0;k!==E;++k)R[k]=t[k];x.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,v,y,M){const w=g!==null?g.length:0;let S=null;if(w!==0){if(S=f.value,M!==!0||S===null){const x=y+w*4,D=v.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let E=0,R=y;E!==w;++E,R+=4)c.copy(g[E]).applyMatrix4(D,u),c.normal.toArray(S,R),S[R+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function ME(i){let e=new WeakMap;function t(c,u){return u===Qd?c.mapping=ua:u===ef&&(c.mapping=da),c}function s(c){if(c&&c.isTexture){const u=c.mapping;if(u===Qd||u===ef)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new DS(f.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class F0 extends I0{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,u=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=4,cg=[.125,.215,.35,.446,.526,.582],ds=20,Ud=new F0,ug=new bt;let Od=null,Fd=0,zd=0,kd=!1;const cs=(1+Math.sqrt(5))/2,na=1/cs,dg=[new K(-cs,na,0),new K(cs,na,0),new K(-na,0,cs),new K(na,0,cs),new K(0,cs,-na),new K(0,cs,na),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Fd,zd),this._renderer.xr.enabled=kd,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:yc,format:Ci,colorSpace:Br,depthBuffer:!1},a=hg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EE(l)),this._blurMaterial=wE(l,e,t)}return a}_compileMaterial(e){const t=new bi(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,s,a){const u=new Ti(90,1,t,s),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(ug),m.toneMapping=Or,m.autoClear=!1;const y=new P0({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),M=new bi(new Mo,y);let w=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,w=!0):(y.color.copy(ug),w=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):D===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const E=this._cubeSize;ql(a,D*E,x>2?E:0,E,E),m.setRenderTarget(a),w&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ua||e.mapping===da;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new bi(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const f=this._cubeSize;ql(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(c,Ud)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=dg[(a-l-1)%dg.length];this._blur(e,l-1,l,c,u)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new bi(this._lodPlanes[a],h),v=h.uniforms,y=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*ds-1),w=l/M,S=isFinite(l)?1+Math.floor(m*w):ds;S>ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ds}`);const x=[];let D=0;for(let F=0;F<ds;++F){const I=F/w,L=Math.exp(-I*I/2);x.push(L),F===0?D+=L:F<S&&(D+=2*L)}for(let F=0;F<x.length;F++)x[F]=x[F]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:E}=this;v.dTheta.value=M,v.mipInt.value=E-s;const R=this._sizeLods[a],k=3*R*(a>E-ra?a-E+ra:0),N=4*(this._cubeSize-R);ql(t,k,N,3*R,2*R),f.setRenderTarget(t),f.render(g,Ud)}}function EE(i){const e=[],t=[],s=[];let a=i;const l=i-ra+1+cg.length;for(let c=0;c<l;c++){const u=Math.pow(2,a);t.push(u);let f=1/u;c>i-ra?f=cg[c-i+ra-1]:c===0&&(f=0),s.push(f);const h=1/(u-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,w=3,S=2,x=1,D=new Float32Array(w*M*y),E=new Float32Array(S*M*y),R=new Float32Array(x*M*y);for(let N=0;N<y;N++){const F=N%3*2/3-1,I=N>2?0:-1,L=[F,I,0,F+2/3,I,0,F+2/3,I+1,0,F,I,0,F+2/3,I+1,0,F,I+1,0];D.set(L,w*M*N),E.set(v,S*M*N);const A=[N,N,N,N,N,N];R.set(A,x*M*N)}const k=new kn;k.setAttribute("position",new pi(D,w)),k.setAttribute("uv",new pi(E,S)),k.setAttribute("faceIndex",new pi(R,x)),e.push(k),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function hg(i,e,t){const s=new ps(i,e,t);return s.texture.mapping=_c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ql(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function wE(i,e,t){const s=new Float32Array(ds),a=new K(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function pg(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function mg(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Sf(){return`

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
	`}function TE(i){let e=new WeakMap,t=null;function s(u){if(u&&u.isTexture){const f=u.mapping,h=f===Qd||f===ef,m=f===ua||f===da;if(h||m){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new fg(i)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return h&&y&&y.height>0||m&&y&&a(y)?(t===null&&(t=new fg(i)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",l),g.texture):null}}}return u}function a(u){let f=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&f++;return f===h}function l(u){const f=u.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function AE(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&vf("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function CE(i,e,t,s){const a={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const w=v.morphAttributes[M];for(let S=0,x=w.length;S<x;S++)e.remove(w[S])}v.removeEventListener("dispose",c),delete a[v.id];const y=l.get(v);y&&(e.remove(y),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const M in v)e.update(v[M],i.ARRAY_BUFFER);const y=g.morphAttributes;for(const M in y){const w=y[M];for(let S=0,x=w.length;S<x;S++)e.update(w[S],i.ARRAY_BUFFER)}}function h(g){const v=[],y=g.index,M=g.attributes.position;let w=0;if(y!==null){const D=y.array;w=y.version;for(let E=0,R=D.length;E<R;E+=3){const k=D[E+0],N=D[E+1],F=D[E+2];v.push(k,N,N,F,F,k)}}else if(M!==void 0){const D=M.array;w=M.version;for(let E=0,R=D.length/3-1;E<R;E+=3){const k=E+0,N=E+1,F=E+2;v.push(k,N,N,F,F,k)}}else return;const S=new(A0(v)?N0:L0)(v,1);S.version=w;const x=l.get(g);x&&e.remove(x),l.set(g,S)}function m(g){const v=l.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&h(g)}else h(g);return l.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function bE(i,e,t){let s;function a(v){s=v}let l,c;function u(v){l=v.type,c=v.bytesPerElement}function f(v,y){i.drawElements(s,y,l,v*c),t.update(y,s,1)}function h(v,y,M){M!==0&&(i.drawElementsInstanced(s,y,l,v*c,M),t.update(y,s,M))}function m(v,y,M){if(M===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let S=0;S<M;S++)this.render(v[S]/c,y[S]);else{w.multiDrawElementsWEBGL(s,y,0,l,v,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,s,1)}}function g(v,y,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)h(v[x]/c,y[x],w[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,v,0,w,0,M);let x=0;for(let D=0;D<M;D++)x+=y[D];for(let D=0;D<w.length;D++)t.update(x,s,w[D])}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function RE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(l/3);break;case i.LINES:t.lines+=u*(l/2);break;case i.LINE_STRIP:t.lines+=u*(l-1);break;case i.LINE_LOOP:t.lines+=u*l;break;case i.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function PE(i,e,t){const s=new WeakMap,a=new yn;function l(c,u,f){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let L=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),M===!0&&(E=2),w===!0&&(E=3);let R=u.attributes.position.count*E,k=1;R>e.maxTextureSize&&(k=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const N=new Float32Array(R*k*4*g),F=new b0(N,R,k,g);F.type=rr,F.needsUpdate=!0;const I=E*4;for(let A=0;A<g;A++){const B=S[A],Y=x[A],J=D[A],te=R*k*4*A;for(let ce=0;ce<B.count;ce++){const Z=ce*I;y===!0&&(a.fromBufferAttribute(B,ce),N[te+Z+0]=a.x,N[te+Z+1]=a.y,N[te+Z+2]=a.z,N[te+Z+3]=0),M===!0&&(a.fromBufferAttribute(Y,ce),N[te+Z+4]=a.x,N[te+Z+5]=a.y,N[te+Z+6]=a.z,N[te+Z+7]=0),w===!0&&(a.fromBufferAttribute(J,ce),N[te+Z+8]=a.x,N[te+Z+9]=a.y,N[te+Z+10]=a.z,N[te+Z+11]=J.itemSize===4?a.w:1)}}v={count:g,texture:F,size:new $e(R,k)},s.set(u,v),u.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let y=0;for(let w=0;w<h.length;w++)y+=h[w];const M=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",h)}f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function LE(i,e,t,s){let a=new WeakMap;function l(f){const h=s.render.frame,m=f.geometry,g=e.get(f,m);if(a.get(g)!==h&&(e.update(g),a.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),a.get(f)!==h&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,h))),f.isSkinnedMesh){const v=f.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return g}function c(){a=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}class z0 extends Ln{constructor(e,t,s,a,l,c,u,f,h,m=oa){if(m!==oa&&m!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===oa&&(s=fa),s===void 0&&m===pa&&(s=ha),super(null,a,l,c,u,f,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:qn,this.minFilter=f!==void 0?f:qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const k0=new Ln,B0=new z0(1,1);B0.compareFunction=T0;const H0=new b0,V0=new vS,G0=new U0,gg=[],vg=[],xg=new Float32Array(16),_g=new Float32Array(9),yg=new Float32Array(4);function xa(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=gg[a];if(l===void 0&&(l=new Float32Array(a),gg[a]=l),e!==0){s.toArray(l,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(l,u)}return l}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Ec(i,e){let t=vg[e];t===void 0&&(t=new Int32Array(e),vg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function NE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function DE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function IE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function UE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function OE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;yg.set(s),i.uniformMatrix2fv(this.addr,!1,yg),pn(t,s)}}function FE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;_g.set(s),i.uniformMatrix3fv(this.addr,!1,_g),pn(t,s)}}function zE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,s))return;xg.set(s),i.uniformMatrix4fv(this.addr,!1,xg),pn(t,s)}}function kE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function BE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function HE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function VE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function GE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function WE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function jE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function XE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function qE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);const l=this.type===i.SAMPLER_2D_SHADOW?B0:k0;t.setTexture2D(e||l,a)}function YE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||V0,a)}function $E(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||G0,a)}function KE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||H0,a)}function JE(i){switch(i){case 5126:return NE;case 35664:return DE;case 35665:return IE;case 35666:return UE;case 35674:return OE;case 35675:return FE;case 35676:return zE;case 5124:case 35670:return kE;case 35667:case 35671:return BE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return WE;case 36295:return jE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}function ZE(i,e){i.uniform1fv(this.addr,e)}function QE(i,e){const t=xa(e,this.size,2);i.uniform2fv(this.addr,t)}function ew(i,e){const t=xa(e,this.size,3);i.uniform3fv(this.addr,t)}function tw(i,e){const t=xa(e,this.size,4);i.uniform4fv(this.addr,t)}function nw(i,e){const t=xa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iw(i,e){const t=xa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function rw(i,e){const t=xa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sw(i,e){i.uniform1iv(this.addr,e)}function aw(i,e){i.uniform2iv(this.addr,e)}function ow(i,e){i.uniform3iv(this.addr,e)}function lw(i,e){i.uniform4iv(this.addr,e)}function cw(i,e){i.uniform1uiv(this.addr,e)}function uw(i,e){i.uniform2uiv(this.addr,e)}function dw(i,e){i.uniform3uiv(this.addr,e)}function fw(i,e){i.uniform4uiv(this.addr,e)}function hw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||k0,l[c])}function pw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||V0,l[c])}function mw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||G0,l[c])}function gw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);hn(s,l)||(i.uniform1iv(this.addr,l),pn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||H0,l[c])}function vw(i){switch(i){case 5126:return ZE;case 35664:return QE;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return aw;case 35668:case 35672:return ow;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return dw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}class xw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=JE(t.type)}}class _w{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vw(t.type)}}class yw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const u=a[l];u.setValue(e,t[u.id],s)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Sg(i,e){i.seq.push(e),i.map[e.id]=e}function Sw(i,e,t){const s=i.name,a=s.length;for(Bd.lastIndex=0;;){const l=Bd.exec(s),c=Bd.lastIndex;let u=l[1];const f=l[2]==="]",h=l[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===a){Sg(t,h===void 0?new xw(u,i,e):new _w(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new yw(u),Sg(t,g)),t=g}}}class rc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Sw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const u=t[l],f=s[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Mg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const Mw=37297;let Ew=0;function ww(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const u=c+1;s.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return s.join(`
`)}function Tw(i){const e=zt.getPrimaries(zt.workingColorSpace),t=zt.getPrimaries(i);let s;switch(e===t?s="":e===dc&&t===uc?s="LinearDisplayP3ToLinearSRGB":e===uc&&t===dc&&(s="LinearSRGBToLinearDisplayP3"),i){case Br:case Sc:return[s,"LinearTransferOETF"];case wi:case mf:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}function Eg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+ww(i.getShaderSource(e),c)}else return a}function Aw(i,e){const t=Tw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cw(i,e){let t;switch(e){case Sy:t="Linear";break;case My:t="Reinhard";break;case Ey:t="OptimizedCineon";break;case wy:t="ACESFilmic";break;case Ay:t="AgX";break;case Cy:t="Neutral";break;case Ty:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Rw(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Pw(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let u=1;l.type===i.FLOAT_MAT2&&(u=2),l.type===i.FLOAT_MAT3&&(u=3),l.type===i.FLOAT_MAT4&&(u=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function oo(i){return i!==""}function wg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(i){return i.replace(Lw,Dw)}const Nw=new Map;function Dw(i,e){let t=Mt[e];if(t===void 0){const s=Nw.get(e);if(s!==void 0)t=Mt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return rf(t)}const Iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(i){return i.replace(Iw,Uw)}function Uw(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Cg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Ow(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function Fw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ua:case da:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function kw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case _y:e="ENVMAP_BLENDING_MIX";break;case yy:e="ENVMAP_BLENDING_ADD";break}return e}function Bw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function Hw(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=Ow(t),h=Fw(t),m=zw(t),g=kw(t),v=Bw(t),y=bw(t),M=Rw(l),w=a.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),x.length>0&&(x+=`
`)):(S=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),x=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Or?Cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Aw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),c=rf(c),c=wg(c,t),c=Tg(c,t),u=rf(u),u=wg(u,t),u=Tg(u,t),c=Ag(c),u=Ag(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=D+S+c,R=D+x+u,k=Mg(a,a.VERTEX_SHADER,E),N=Mg(a,a.FRAGMENT_SHADER,R);a.attachShader(w,k),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function F(B){if(i.debug.checkShaderErrors){const Y=a.getProgramInfoLog(w).trim(),J=a.getShaderInfoLog(k).trim(),te=a.getShaderInfoLog(N).trim();let ce=!0,Z=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(ce=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,k,N);else{const ge=Eg(a,k,"vertex"),G=Eg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Y+`
`+ge+`
`+G)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(J===""||te==="")&&(Z=!1);Z&&(B.diagnostics={runnable:ce,programLog:Y,vertexShader:{log:J,prefix:S},fragmentShader:{log:te,prefix:x}})}a.deleteShader(k),a.deleteShader(N),I=new rc(a,w),L=Pw(a,w)}let I;this.getUniforms=function(){return I===void 0&&F(this),I};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(w,Mw)),A},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=N,this}let Vw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Ww(e),t.set(e,s)),s}}class Ww{constructor(e){this.id=Vw++,this.code=e,this.usedTimes=0}}function jw(i,e,t,s,a,l,c){const u=new _f,f=new Gw,h=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let y=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(L){return h.add(L),L===0?"uv":`uv${L}`}function S(L,A,B,Y,J){const te=Y.fog,ce=J.geometry,Z=L.isMeshStandardMaterial?Y.environment:null,ge=(L.isMeshStandardMaterial?t:e).get(L.envMap||Z),G=ge&&ge.mapping===_c?ge.image.height:null,ne=M[L.type];L.precision!==null&&(y=a.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const re=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,U=re!==void 0?re.length:0;let X=0;ce.morphAttributes.position!==void 0&&(X=1),ce.morphAttributes.normal!==void 0&&(X=2),ce.morphAttributes.color!==void 0&&(X=3);let Ne,Q,ie,ue;if(ne){const ft=Oi[ne];Ne=ft.vertexShader,Q=ft.fragmentShader}else Ne=L.vertexShader,Q=L.fragmentShader,f.update(L),ie=f.getVertexShaderID(L),ue=f.getFragmentShaderID(L);const _e=i.getRenderTarget(),De=J.isInstancedMesh===!0,Be=J.isBatchedMesh===!0,He=!!L.map,V=!!L.matcap,ve=!!ge,Ee=!!L.aoMap,Te=!!L.lightMap,Se=!!L.bumpMap,Ae=!!L.normalMap,Le=!!L.displacementMap,be=!!L.emissiveMap,qe=!!L.metalnessMap,O=!!L.roughnessMap,C=L.anisotropy>0,se=L.clearcoat>0,ye=L.dispersion>0,pe=L.iridescence>0,Me=L.sheen>0,je=L.transmission>0,Ie=C&&!!L.anisotropyMap,Ue=se&&!!L.clearcoatMap,et=se&&!!L.clearcoatNormalMap,Re=se&&!!L.clearcoatRoughnessMap,Xe=pe&&!!L.iridescenceMap,T=pe&&!!L.iridescenceThicknessMap,Je=Me&&!!L.sheenColorMap,ze=Me&&!!L.sheenRoughnessMap,lt=!!L.specularMap,dt=!!L.specularColorMap,ht=!!L.specularIntensityMap,W=je&&!!L.transmissionMap,Ge=je&&!!L.thicknessMap,me=!!L.gradientMap,xe=!!L.alphaMap,Ce=L.alphaTest>0,rt=!!L.alphaHash,vt=!!L.extensions;let wt=Or;L.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(wt=i.toneMapping);const Ct={shaderID:ne,shaderType:L.type,shaderName:L.name,vertexShader:Ne,fragmentShader:Q,defines:L.defines,customVertexShaderID:ie,customFragmentShaderID:ue,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Be,batchingColor:Be&&J._colorsTexture!==null,instancing:De,instancingColor:De&&J.instanceColor!==null,instancingMorph:De&&J.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Br,alphaToCoverage:!!L.alphaToCoverage,map:He,matcap:V,envMap:ve,envMapMode:ve&&ge.mapping,envMapCubeUVHeight:G,aoMap:Ee,lightMap:Te,bumpMap:Se,normalMap:Ae,displacementMap:v&&Le,emissiveMap:be,normalMapObjectSpace:Ae&&L.normalMapType===By,normalMapTangentSpace:Ae&&L.normalMapType===pf,metalnessMap:qe,roughnessMap:O,anisotropy:C,anisotropyMap:Ie,clearcoat:se,clearcoatMap:Ue,clearcoatNormalMap:et,clearcoatRoughnessMap:Re,dispersion:ye,iridescence:pe,iridescenceMap:Xe,iridescenceThicknessMap:T,sheen:Me,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:lt,specularColorMap:dt,specularIntensityMap:ht,transmission:je,transmissionMap:W,thicknessMap:Ge,gradientMap:me,opaque:L.transparent===!1&&L.blending===aa&&L.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ce,alphaHash:rt,combine:L.combine,mapUv:He&&w(L.map.channel),aoMapUv:Ee&&w(L.aoMap.channel),lightMapUv:Te&&w(L.lightMap.channel),bumpMapUv:Se&&w(L.bumpMap.channel),normalMapUv:Ae&&w(L.normalMap.channel),displacementMapUv:Le&&w(L.displacementMap.channel),emissiveMapUv:be&&w(L.emissiveMap.channel),metalnessMapUv:qe&&w(L.metalnessMap.channel),roughnessMapUv:O&&w(L.roughnessMap.channel),anisotropyMapUv:Ie&&w(L.anisotropyMap.channel),clearcoatMapUv:Ue&&w(L.clearcoatMap.channel),clearcoatNormalMapUv:et&&w(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&w(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&w(L.iridescenceMap.channel),iridescenceThicknessMapUv:T&&w(L.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(L.sheenColorMap.channel),sheenRoughnessMapUv:ze&&w(L.sheenRoughnessMap.channel),specularMapUv:lt&&w(L.specularMap.channel),specularColorMapUv:dt&&w(L.specularColorMap.channel),specularIntensityMapUv:ht&&w(L.specularIntensityMap.channel),transmissionMapUv:W&&w(L.transmissionMap.channel),thicknessMapUv:Ge&&w(L.thicknessMap.channel),alphaMapUv:xe&&w(L.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Ae||C),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ce.attributes.uv&&(He||xe),fog:!!te,useFog:L.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:J.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:He&&L.map.isVideoTexture===!0&&zt.getTransfer(L.map.colorSpace)===Wt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===tr,flipSided:L.side===Yn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:vt&&L.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:vt&&L.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ct.vertexUv1s=h.has(1),Ct.vertexUv2s=h.has(2),Ct.vertexUv3s=h.has(3),h.clear(),Ct}function x(L){const A=[];if(L.shaderID?A.push(L.shaderID):(A.push(L.customVertexShaderID),A.push(L.customFragmentShaderID)),L.defines!==void 0)for(const B in L.defines)A.push(B),A.push(L.defines[B]);return L.isRawShaderMaterial===!1&&(D(A,L),E(A,L),A.push(i.outputColorSpace)),A.push(L.customProgramCacheKey),A.join()}function D(L,A){L.push(A.precision),L.push(A.outputColorSpace),L.push(A.envMapMode),L.push(A.envMapCubeUVHeight),L.push(A.mapUv),L.push(A.alphaMapUv),L.push(A.lightMapUv),L.push(A.aoMapUv),L.push(A.bumpMapUv),L.push(A.normalMapUv),L.push(A.displacementMapUv),L.push(A.emissiveMapUv),L.push(A.metalnessMapUv),L.push(A.roughnessMapUv),L.push(A.anisotropyMapUv),L.push(A.clearcoatMapUv),L.push(A.clearcoatNormalMapUv),L.push(A.clearcoatRoughnessMapUv),L.push(A.iridescenceMapUv),L.push(A.iridescenceThicknessMapUv),L.push(A.sheenColorMapUv),L.push(A.sheenRoughnessMapUv),L.push(A.specularMapUv),L.push(A.specularColorMapUv),L.push(A.specularIntensityMapUv),L.push(A.transmissionMapUv),L.push(A.thicknessMapUv),L.push(A.combine),L.push(A.fogExp2),L.push(A.sizeAttenuation),L.push(A.morphTargetsCount),L.push(A.morphAttributeCount),L.push(A.numDirLights),L.push(A.numPointLights),L.push(A.numSpotLights),L.push(A.numSpotLightMaps),L.push(A.numHemiLights),L.push(A.numRectAreaLights),L.push(A.numDirLightShadows),L.push(A.numPointLightShadows),L.push(A.numSpotLightShadows),L.push(A.numSpotLightShadowsWithMaps),L.push(A.numLightProbes),L.push(A.shadowMapType),L.push(A.toneMapping),L.push(A.numClippingPlanes),L.push(A.numClipIntersection),L.push(A.depthPacking)}function E(L,A){u.disableAll(),A.supportsVertexTextures&&u.enable(0),A.instancing&&u.enable(1),A.instancingColor&&u.enable(2),A.instancingMorph&&u.enable(3),A.matcap&&u.enable(4),A.envMap&&u.enable(5),A.normalMapObjectSpace&&u.enable(6),A.normalMapTangentSpace&&u.enable(7),A.clearcoat&&u.enable(8),A.iridescence&&u.enable(9),A.alphaTest&&u.enable(10),A.vertexColors&&u.enable(11),A.vertexAlphas&&u.enable(12),A.vertexUv1s&&u.enable(13),A.vertexUv2s&&u.enable(14),A.vertexUv3s&&u.enable(15),A.vertexTangents&&u.enable(16),A.anisotropy&&u.enable(17),A.alphaHash&&u.enable(18),A.batching&&u.enable(19),A.dispersion&&u.enable(20),A.batchingColor&&u.enable(21),L.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.skinning&&u.enable(4),A.morphTargets&&u.enable(5),A.morphNormals&&u.enable(6),A.morphColors&&u.enable(7),A.premultipliedAlpha&&u.enable(8),A.shadowMapEnabled&&u.enable(9),A.doubleSided&&u.enable(10),A.flipSided&&u.enable(11),A.useDepthPacking&&u.enable(12),A.dithering&&u.enable(13),A.transmission&&u.enable(14),A.sheen&&u.enable(15),A.opaque&&u.enable(16),A.pointsUvs&&u.enable(17),A.decodeVideoTexture&&u.enable(18),A.alphaToCoverage&&u.enable(19),L.push(u.mask)}function R(L){const A=M[L.type];let B;if(A){const Y=Oi[A];B=RS.clone(Y.uniforms)}else B=L.uniforms;return B}function k(L,A){let B;for(let Y=0,J=m.length;Y<J;Y++){const te=m[Y];if(te.cacheKey===A){B=te,++B.usedTimes;break}}return B===void 0&&(B=new Hw(i,A,L,l),m.push(B)),B}function N(L){if(--L.usedTimes===0){const A=m.indexOf(L);m[A]=m[m.length-1],m.pop(),L.destroy()}}function F(L){f.remove(L)}function I(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:I}}function Xw(){let i=new WeakMap;function e(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function t(l){i.delete(l)}function s(l,c,u){i.get(l)[c]=u}function a(){i=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function qw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(g,v,y,M,w,S){let x=i[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:M,renderOrder:g.renderOrder,z:w,group:S},i[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=w,x.group=S),e++,x}function u(g,v,y,M,w,S){const x=c(g,v,y,M,w,S);y.transmission>0?s.push(x):y.transparent===!0?a.push(x):t.push(x)}function f(g,v,y,M,w,S){const x=c(g,v,y,M,w,S);y.transmission>0?s.unshift(x):y.transparent===!0?a.unshift(x):t.unshift(x)}function h(g,v){t.length>1&&t.sort(g||qw),s.length>1&&s.sort(v||bg),a.length>1&&a.sort(v||bg)}function m(){for(let g=e,v=i.length;g<v;g++){const y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:u,unshift:f,finish:m,sort:h}}function Yw(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new Rg,i.set(s,[c])):a>=l.length?(c=new Rg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function $w(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new bt};break;case"SpotLight":t={position:new K,direction:new K,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Kw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jw=0;function Zw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qw(i){const e=new $w,t=Kw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new K);const a=new K,l=new Bt,c=new Bt;function u(h){let m=0,g=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let y=0,M=0,w=0,S=0,x=0,D=0,E=0,R=0,k=0,N=0,F=0;h.sort(Zw);for(let L=0,A=h.length;L<A;L++){const B=h[L],Y=B.color,J=B.intensity,te=B.distance,ce=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=Y.r*J,g+=Y.g*J,v+=Y.b*J;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(B.sh.coefficients[Z],J);F++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ge=B.shadow,G=t.get(B);G.shadowBias=ge.bias,G.shadowNormalBias=ge.normalBias,G.shadowRadius=ge.radius,G.shadowMapSize=ge.mapSize,s.directionalShadow[y]=G,s.directionalShadowMap[y]=ce,s.directionalShadowMatrix[y]=B.shadow.matrix,D++}s.directional[y]=Z,y++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy(Y).multiplyScalar(J),Z.distance=te,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,s.spot[w]=Z;const ge=B.shadow;if(B.map&&(s.spotLightMap[k]=B.map,k++,ge.updateMatrices(B),B.castShadow&&N++),s.spotLightMatrix[w]=ge.matrix,B.castShadow){const G=t.get(B);G.shadowBias=ge.bias,G.shadowNormalBias=ge.normalBias,G.shadowRadius=ge.radius,G.shadowMapSize=ge.mapSize,s.spotShadow[w]=G,s.spotShadowMap[w]=ce,R++}w++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy(Y).multiplyScalar(J),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),s.rectArea[S]=Z,S++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const ge=B.shadow,G=t.get(B);G.shadowBias=ge.bias,G.shadowNormalBias=ge.normalBias,G.shadowRadius=ge.radius,G.shadowMapSize=ge.mapSize,G.shadowCameraNear=ge.camera.near,G.shadowCameraFar=ge.camera.far,s.pointShadow[M]=G,s.pointShadowMap[M]=ce,s.pointShadowMatrix[M]=B.shadow.matrix,E++}s.point[M]=Z,M++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar(J),Z.groundColor.copy(B.groundColor).multiplyScalar(J),s.hemi[x]=Z,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ke.LTC_FLOAT_1,s.rectAreaLTC2=Ke.LTC_FLOAT_2):(s.rectAreaLTC1=Ke.LTC_HALF_1,s.rectAreaLTC2=Ke.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=v;const I=s.hash;(I.directionalLength!==y||I.pointLength!==M||I.spotLength!==w||I.rectAreaLength!==S||I.hemiLength!==x||I.numDirectionalShadows!==D||I.numPointShadows!==E||I.numSpotShadows!==R||I.numSpotMaps!==k||I.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=S,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=R+k-N,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=F,I.directionalLength=y,I.pointLength=M,I.spotLength=w,I.rectAreaLength=S,I.hemiLength=x,I.numDirectionalShadows=D,I.numPointShadows=E,I.numSpotShadows=R,I.numSpotMaps=k,I.numLightProbes=F,s.version=Jw++)}function f(h,m){let g=0,v=0,y=0,M=0,w=0;const S=m.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const E=h[x];if(E.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),g++}else if(E.isSpotLight){const R=s.spot[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),y++}else if(E.isRectAreaLight){const R=s.rectArea[M];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(S),c.identity(),l.copy(E.matrixWorld),l.premultiply(S),c.extractRotation(l),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(E.isPointLight){const R=s.point[v];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(S),v++}else if(E.isHemisphereLight){const R=s.hemi[w];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(S),w++}}}return{setup:u,setupView:f,state:s}}function Pg(i){const e=new Qw(i),t=[],s=[];function a(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:f,pushLight:l,pushShadow:c}}function eT(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let u;return c===void 0?(u=new Pg(i),e.set(a,[u])):l>=c.length?(u=new Pg(i),c.push(u)):u=c[l],u}function s(){e=new WeakMap}return{get:t,dispose:s}}class tT extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nT extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rT=`uniform sampler2D shadow_pass;
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
}`;function sT(i,e,t){let s=new yf;const a=new $e,l=new $e,c=new yn,u=new tT({depthPacking:ky}),f=new nT,h={},m=t.maxTextureSize,g={[Fr]:Yn,[Yn]:Fr,[tr]:tr},v=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:iT,fragmentShader:rT}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bi(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let x=this.type;this.render=function(N,F,I){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const L=i.getRenderTarget(),A=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Ur),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=x!==er&&this.type===er,te=x===er&&this.type!==er;for(let ce=0,Z=N.length;ce<Z;ce++){const ge=N[ce],G=ge.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const ne=G.getFrameExtents();if(a.multiply(ne),l.copy(G.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ne.x),a.x=l.x*ne.x,G.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ne.y),a.y=l.y*ne.y,G.mapSize.y=l.y)),G.map===null||J===!0||te===!0){const U=this.type!==er?{minFilter:qn,magFilter:qn}:{};G.map!==null&&G.map.dispose(),G.map=new ps(a.x,a.y,U),G.map.texture.name=ge.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const re=G.getViewportCount();for(let U=0;U<re;U++){const X=G.getViewport(U);c.set(l.x*X.x,l.y*X.y,l.x*X.z,l.y*X.w),Y.viewport(c),G.updateMatrices(ge,U),s=G.getFrustum(),R(F,I,G.camera,ge,this.type)}G.isPointLightShadow!==!0&&this.type===er&&D(G,I),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,i.setRenderTarget(L,A,B)};function D(N,F){const I=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ps(a.x,a.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(F,null,I,v,w,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(F,null,I,y,w,null)}function E(N,F,I,L){let A=null;const B=I.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)A=B;else if(A=I.isPointLight===!0?f:u,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Y=A.uuid,J=F.uuid;let te=h[Y];te===void 0&&(te={},h[Y]=te);let ce=te[J];ce===void 0&&(ce=A.clone(),te[J]=ce,F.addEventListener("dispose",k)),A=ce}if(A.visible=F.visible,A.wireframe=F.wireframe,L===er?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:g[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=i.properties.get(A);Y.light=I}return A}function R(N,F,I,L,A){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===er)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,N.matrixWorld);const J=e.update(N),te=N.material;if(Array.isArray(te)){const ce=J.groups;for(let Z=0,ge=ce.length;Z<ge;Z++){const G=ce[Z],ne=te[G.materialIndex];if(ne&&ne.visible){const re=E(N,ne,L,A);N.onBeforeShadow(i,N,F,I,J,re,G),i.renderBufferDirect(I,null,J,re,N,G),N.onAfterShadow(i,N,F,I,J,re,G)}}}else if(te.visible){const ce=E(N,te,L,A);N.onBeforeShadow(i,N,F,I,J,ce,null),i.renderBufferDirect(I,null,J,ce,N,null),N.onAfterShadow(i,N,F,I,J,ce,null)}}const Y=N.children;for(let J=0,te=Y.length;J<te;J++)R(Y[J],F,I,L,A)}function k(N){N.target.removeEventListener("dispose",k);for(const I in h){const L=h[I],A=N.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function aT(i){function e(){let W=!1;const Ge=new yn;let me=null;const xe=new yn(0,0,0,0);return{setMask:function(Ce){me!==Ce&&!W&&(i.colorMask(Ce,Ce,Ce,Ce),me=Ce)},setLocked:function(Ce){W=Ce},setClear:function(Ce,rt,vt,wt,Ct){Ct===!0&&(Ce*=wt,rt*=wt,vt*=wt),Ge.set(Ce,rt,vt,wt),xe.equals(Ge)===!1&&(i.clearColor(Ce,rt,vt,wt),xe.copy(Ge))},reset:function(){W=!1,me=null,xe.set(-1,0,0,0)}}}function t(){let W=!1,Ge=null,me=null,xe=null;return{setTest:function(Ce){Ce?ue(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Ce){Ge!==Ce&&!W&&(i.depthMask(Ce),Ge=Ce)},setFunc:function(Ce){if(me!==Ce){switch(Ce){case fy:i.depthFunc(i.NEVER);break;case hy:i.depthFunc(i.ALWAYS);break;case py:i.depthFunc(i.LESS);break;case ac:i.depthFunc(i.LEQUAL);break;case my:i.depthFunc(i.EQUAL);break;case gy:i.depthFunc(i.GEQUAL);break;case vy:i.depthFunc(i.GREATER);break;case xy:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Ce}},setLocked:function(Ce){W=Ce},setClear:function(Ce){xe!==Ce&&(i.clearDepth(Ce),xe=Ce)},reset:function(){W=!1,Ge=null,me=null,xe=null}}}function s(){let W=!1,Ge=null,me=null,xe=null,Ce=null,rt=null,vt=null,wt=null,Ct=null;return{setTest:function(ft){W||(ft?ue(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(ft){Ge!==ft&&!W&&(i.stencilMask(ft),Ge=ft)},setFunc:function(ft,Rt,It){(me!==ft||xe!==Rt||Ce!==It)&&(i.stencilFunc(ft,Rt,It),me=ft,xe=Rt,Ce=It)},setOp:function(ft,Rt,It){(rt!==ft||vt!==Rt||wt!==It)&&(i.stencilOp(ft,Rt,It),rt=ft,vt=Rt,wt=It)},setLocked:function(ft){W=ft},setClear:function(ft){Ct!==ft&&(i.clearStencil(ft),Ct=ft)},reset:function(){W=!1,Ge=null,me=null,xe=null,Ce=null,rt=null,vt=null,wt=null,Ct=null}}}const a=new e,l=new t,c=new s,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,v=[],y=null,M=!1,w=null,S=null,x=null,D=null,E=null,R=null,k=null,N=new bt(0,0,0),F=0,I=!1,L=null,A=null,B=null,Y=null,J=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Z=0;const ge=i.getParameter(i.VERSION);ge.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ge)[1]),ce=Z>=1):ge.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),ce=Z>=2);let G=null,ne={};const re=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),X=new yn().fromArray(re),Ne=new yn().fromArray(U);function Q(W,Ge,me,xe){const Ce=new Uint8Array(4),rt=i.createTexture();i.bindTexture(W,rt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<me;vt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ge,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(Ge+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return rt}const ie={};ie[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(i.DEPTH_TEST),l.setFunc(ac),Se(!1),Ae(dm),ue(i.CULL_FACE),Ee(Ur);function ue(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function _e(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function De(W,Ge){return m[W]!==Ge?(i.bindFramebuffer(W,Ge),m[W]=Ge,W===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ge),W===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ge),!0):!1}function Be(W,Ge){let me=v,xe=!1;if(W){me=g.get(Ge),me===void 0&&(me=[],g.set(Ge,me));const Ce=W.textures;if(me.length!==Ce.length||me[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,vt=Ce.length;rt<vt;rt++)me[rt]=i.COLOR_ATTACHMENT0+rt;me.length=Ce.length,xe=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,xe=!0);xe&&i.drawBuffers(me)}function He(W){return y!==W?(i.useProgram(W),y=W,!0):!1}const V={[us]:i.FUNC_ADD,[$_]:i.FUNC_SUBTRACT,[K_]:i.FUNC_REVERSE_SUBTRACT};V[J_]=i.MIN,V[Z_]=i.MAX;const ve={[Q_]:i.ZERO,[ey]:i.ONE,[ty]:i.SRC_COLOR,[Jd]:i.SRC_ALPHA,[oy]:i.SRC_ALPHA_SATURATE,[sy]:i.DST_COLOR,[iy]:i.DST_ALPHA,[ny]:i.ONE_MINUS_SRC_COLOR,[Zd]:i.ONE_MINUS_SRC_ALPHA,[ay]:i.ONE_MINUS_DST_COLOR,[ry]:i.ONE_MINUS_DST_ALPHA,[ly]:i.CONSTANT_COLOR,[cy]:i.ONE_MINUS_CONSTANT_COLOR,[uy]:i.CONSTANT_ALPHA,[dy]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(W,Ge,me,xe,Ce,rt,vt,wt,Ct,ft){if(W===Ur){M===!0&&(_e(i.BLEND),M=!1);return}if(M===!1&&(ue(i.BLEND),M=!0),W!==Y_){if(W!==w||ft!==I){if((S!==us||E!==us)&&(i.blendEquation(i.FUNC_ADD),S=us,E=us),ft)switch(W){case aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fm:i.blendFunc(i.ONE,i.ONE);break;case hm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}x=null,D=null,R=null,k=null,N.set(0,0,0),F=0,w=W,I=ft}return}Ce=Ce||Ge,rt=rt||me,vt=vt||xe,(Ge!==S||Ce!==E)&&(i.blendEquationSeparate(V[Ge],V[Ce]),S=Ge,E=Ce),(me!==x||xe!==D||rt!==R||vt!==k)&&(i.blendFuncSeparate(ve[me],ve[xe],ve[rt],ve[vt]),x=me,D=xe,R=rt,k=vt),(wt.equals(N)===!1||Ct!==F)&&(i.blendColor(wt.r,wt.g,wt.b,Ct),N.copy(wt),F=Ct),w=W,I=!1}function Te(W,Ge){W.side===tr?_e(i.CULL_FACE):ue(i.CULL_FACE);let me=W.side===Yn;Ge&&(me=!me),Se(me),W.blending===aa&&W.transparent===!1?Ee(Ur):Ee(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const xe=W.stencilWrite;c.setTest(xe),xe&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),be(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(W){L!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),L=W)}function Ae(W){W!==j_?(ue(i.CULL_FACE),W!==A&&(W===dm?i.cullFace(i.BACK):W===X_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),A=W}function Le(W){W!==B&&(ce&&i.lineWidth(W),B=W)}function be(W,Ge,me){W?(ue(i.POLYGON_OFFSET_FILL),(Y!==Ge||J!==me)&&(i.polygonOffset(Ge,me),Y=Ge,J=me)):_e(i.POLYGON_OFFSET_FILL)}function qe(W){W?ue(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function O(W){W===void 0&&(W=i.TEXTURE0+te-1),G!==W&&(i.activeTexture(W),G=W)}function C(W,Ge,me){me===void 0&&(G===null?me=i.TEXTURE0+te-1:me=G);let xe=ne[me];xe===void 0&&(xe={type:void 0,texture:void 0},ne[me]=xe),(xe.type!==W||xe.texture!==Ge)&&(G!==me&&(i.activeTexture(me),G=me),i.bindTexture(W,Ge||ie[W]),xe.type=W,xe.texture=Ge)}function se(){const W=ne[G];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Re(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function T(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(W){X.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),X.copy(W))}function ze(W){Ne.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ne.copy(W))}function lt(W,Ge){let me=f.get(Ge);me===void 0&&(me=new WeakMap,f.set(Ge,me));let xe=me.get(W);xe===void 0&&(xe=i.getUniformBlockIndex(Ge,W.name),me.set(W,xe))}function dt(W,Ge){const xe=f.get(Ge).get(W);u.get(Ge)!==xe&&(i.uniformBlockBinding(Ge,xe,W.__bindingPointIndex),u.set(Ge,xe))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,ne={},m={},g=new WeakMap,v=[],y=null,M=!1,w=null,S=null,x=null,D=null,E=null,R=null,k=null,N=new bt(0,0,0),F=0,I=!1,L=null,A=null,B=null,Y=null,J=null,X.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:_e,bindFramebuffer:De,drawBuffers:Be,useProgram:He,setBlending:Ee,setMaterial:Te,setFlipSided:Se,setCullFace:Ae,setLineWidth:Le,setPolygonOffset:be,setScissorTest:qe,activeTexture:O,bindTexture:C,unbindTexture:se,compressedTexImage2D:ye,compressedTexImage3D:pe,texImage2D:Xe,texImage3D:T,updateUBOMapping:lt,uniformBlockBinding:dt,texStorage2D:et,texStorage3D:Re,texSubImage2D:Me,texSubImage3D:je,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ue,scissor:Je,viewport:ze,reset:ht}}function oT(i,e,t,s,a,l,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $e,m=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,C){return y?new OffscreenCanvas(O,C):vo("canvas")}function w(O,C,se){let ye=1;const pe=qe(O);if((pe.width>se||pe.height>se)&&(ye=se/Math.max(pe.width,pe.height)),ye<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Me=Math.floor(ye*pe.width),je=Math.floor(ye*pe.height);g===void 0&&(g=M(Me,je));const Ie=C?M(Me,je):g;return Ie.width=Me,Ie.height=je,Ie.getContext("2d").drawImage(O,0,0,Me,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Me+"x"+je+")."),Ie}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),O;return O}function S(O){return O.generateMipmaps&&O.minFilter!==qn&&O.minFilter!==hi}function x(O){i.generateMipmap(O)}function D(O,C,se,ye,pe=!1){if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Me=C;if(C===i.RED&&(se===i.FLOAT&&(Me=i.R32F),se===i.HALF_FLOAT&&(Me=i.R16F),se===i.UNSIGNED_BYTE&&(Me=i.R8)),C===i.RED_INTEGER&&(se===i.UNSIGNED_BYTE&&(Me=i.R8UI),se===i.UNSIGNED_SHORT&&(Me=i.R16UI),se===i.UNSIGNED_INT&&(Me=i.R32UI),se===i.BYTE&&(Me=i.R8I),se===i.SHORT&&(Me=i.R16I),se===i.INT&&(Me=i.R32I)),C===i.RG&&(se===i.FLOAT&&(Me=i.RG32F),se===i.HALF_FLOAT&&(Me=i.RG16F),se===i.UNSIGNED_BYTE&&(Me=i.RG8)),C===i.RG_INTEGER&&(se===i.UNSIGNED_BYTE&&(Me=i.RG8UI),se===i.UNSIGNED_SHORT&&(Me=i.RG16UI),se===i.UNSIGNED_INT&&(Me=i.RG32UI),se===i.BYTE&&(Me=i.RG8I),se===i.SHORT&&(Me=i.RG16I),se===i.INT&&(Me=i.RG32I)),C===i.RGB&&se===i.UNSIGNED_INT_5_9_9_9_REV&&(Me=i.RGB9_E5),C===i.RGBA){const je=pe?cc:zt.getTransfer(ye);se===i.FLOAT&&(Me=i.RGBA32F),se===i.HALF_FLOAT&&(Me=i.RGBA16F),se===i.UNSIGNED_BYTE&&(Me=je===Wt?i.SRGB8_ALPHA8:i.RGBA8),se===i.UNSIGNED_SHORT_4_4_4_4&&(Me=i.RGBA4),se===i.UNSIGNED_SHORT_5_5_5_1&&(Me=i.RGB5_A1)}return(Me===i.R16F||Me===i.R32F||Me===i.RG16F||Me===i.RG32F||Me===i.RGBA16F||Me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function E(O,C){let se;return O?C===null||C===fa||C===ha?se=i.DEPTH24_STENCIL8:C===rr?se=i.DEPTH32F_STENCIL8:C===lc&&(se=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===fa||C===ha?se=i.DEPTH_COMPONENT24:C===rr?se=i.DEPTH_COMPONENT32F:C===lc&&(se=i.DEPTH_COMPONENT16),se}function R(O,C){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==qn&&O.minFilter!==hi?Math.log2(Math.max(C.width,C.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?C.mipmaps.length:1}function k(O){const C=O.target;C.removeEventListener("dispose",k),F(C),C.isVideoTexture&&m.delete(C)}function N(O){const C=O.target;C.removeEventListener("dispose",N),L(C)}function F(O){const C=s.get(O);if(C.__webglInit===void 0)return;const se=O.source,ye=v.get(se);if(ye){const pe=ye[C.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(O),Object.keys(ye).length===0&&v.delete(se)}s.remove(O)}function I(O){const C=s.get(O);i.deleteTexture(C.__webglTexture);const se=O.source,ye=v.get(se);delete ye[C.__cacheKey],c.memory.textures--}function L(O){const C=s.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(C.__webglFramebuffer[ye]))for(let pe=0;pe<C.__webglFramebuffer[ye].length;pe++)i.deleteFramebuffer(C.__webglFramebuffer[ye][pe]);else i.deleteFramebuffer(C.__webglFramebuffer[ye]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[ye])}else{if(Array.isArray(C.__webglFramebuffer))for(let ye=0;ye<C.__webglFramebuffer.length;ye++)i.deleteFramebuffer(C.__webglFramebuffer[ye]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ye=0;ye<C.__webglColorRenderbuffer.length;ye++)C.__webglColorRenderbuffer[ye]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[ye]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const se=O.textures;for(let ye=0,pe=se.length;ye<pe;ye++){const Me=s.get(se[ye]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),c.memory.textures--),s.remove(se[ye])}s.remove(O)}let A=0;function B(){A=0}function Y(){const O=A;return O>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+a.maxTextures),A+=1,O}function J(O){const C=[];return C.push(O.wrapS),C.push(O.wrapT),C.push(O.wrapR||0),C.push(O.magFilter),C.push(O.minFilter),C.push(O.anisotropy),C.push(O.internalFormat),C.push(O.format),C.push(O.type),C.push(O.generateMipmaps),C.push(O.premultiplyAlpha),C.push(O.flipY),C.push(O.unpackAlignment),C.push(O.colorSpace),C.join()}function te(O,C){const se=s.get(O);if(O.isVideoTexture&&Le(O),O.isRenderTargetTexture===!1&&O.version>0&&se.__version!==O.version){const ye=O.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(se,O,C);return}}t.bindTexture(i.TEXTURE_2D,se.__webglTexture,i.TEXTURE0+C)}function ce(O,C){const se=s.get(O);if(O.version>0&&se.__version!==O.version){Ne(se,O,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,se.__webglTexture,i.TEXTURE0+C)}function Z(O,C){const se=s.get(O);if(O.version>0&&se.__version!==O.version){Ne(se,O,C);return}t.bindTexture(i.TEXTURE_3D,se.__webglTexture,i.TEXTURE0+C)}function ge(O,C){const se=s.get(O);if(O.version>0&&se.__version!==O.version){Q(se,O,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture,i.TEXTURE0+C)}const G={[oc]:i.REPEAT,[Dr]:i.CLAMP_TO_EDGE,[tf]:i.MIRRORED_REPEAT},ne={[qn]:i.NEAREST,[by]:i.NEAREST_MIPMAP_NEAREST,[Al]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[dd]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},re={[Hy]:i.NEVER,[qy]:i.ALWAYS,[Vy]:i.LESS,[T0]:i.LEQUAL,[Gy]:i.EQUAL,[Xy]:i.GEQUAL,[Wy]:i.GREATER,[jy]:i.NOTEQUAL};function U(O,C){if(C.type===rr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===hi||C.magFilter===dd||C.magFilter===Al||C.magFilter===Ir||C.minFilter===hi||C.minFilter===dd||C.minFilter===Al||C.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,G[C.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,G[C.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,G[C.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ne[C.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ne[C.minFilter]),C.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,re[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===qn||C.minFilter!==Al&&C.minFilter!==Ir||C.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function X(O,C){let se=!1;O.__webglInit===void 0&&(O.__webglInit=!0,C.addEventListener("dispose",k));const ye=C.source;let pe=v.get(ye);pe===void 0&&(pe={},v.set(ye,pe));const Me=J(C);if(Me!==O.__cacheKey){pe[Me]===void 0&&(pe[Me]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,se=!0),pe[Me].usedTimes++;const je=pe[O.__cacheKey];je!==void 0&&(pe[O.__cacheKey].usedTimes--,je.usedTimes===0&&I(C)),O.__cacheKey=Me,O.__webglTexture=pe[Me].texture}return se}function Ne(O,C,se){let ye=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ye=i.TEXTURE_3D);const pe=X(O,C),Me=C.source;t.bindTexture(ye,O.__webglTexture,i.TEXTURE0+se);const je=s.get(Me);if(Me.version!==je.__version||pe===!0){t.activeTexture(i.TEXTURE0+se);const Ie=zt.getPrimaries(zt.workingColorSpace),Ue=C.colorSpace===Nr?null:zt.getPrimaries(C.colorSpace),et=C.colorSpace===Nr||Ie===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Re=w(C.image,!1,a.maxTextureSize);Re=be(C,Re);const Xe=l.convert(C.format,C.colorSpace),T=l.convert(C.type);let Je=D(C.internalFormat,Xe,T,C.colorSpace,C.isVideoTexture);U(ye,C);let ze;const lt=C.mipmaps,dt=C.isVideoTexture!==!0,ht=je.__version===void 0||pe===!0,W=Me.dataReady,Ge=R(C,Re);if(C.isDepthTexture)Je=E(C.format===pa,C.type),ht&&(dt?t.texStorage2D(i.TEXTURE_2D,1,Je,Re.width,Re.height):t.texImage2D(i.TEXTURE_2D,0,Je,Re.width,Re.height,0,Xe,T,null));else if(C.isDataTexture)if(lt.length>0){dt&&ht&&t.texStorage2D(i.TEXTURE_2D,Ge,Je,lt[0].width,lt[0].height);for(let me=0,xe=lt.length;me<xe;me++)ze=lt[me],dt?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ze.width,ze.height,Xe,T,ze.data):t.texImage2D(i.TEXTURE_2D,me,Je,ze.width,ze.height,0,Xe,T,ze.data);C.generateMipmaps=!1}else dt?(ht&&t.texStorage2D(i.TEXTURE_2D,Ge,Je,Re.width,Re.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re.width,Re.height,Xe,T,Re.data)):t.texImage2D(i.TEXTURE_2D,0,Je,Re.width,Re.height,0,Xe,T,Re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){dt&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,Je,lt[0].width,lt[0].height,Re.depth);for(let me=0,xe=lt.length;me<xe;me++)if(ze=lt[me],C.format!==Ci)if(Xe!==null)if(dt){if(W)if(C.layerUpdates.size>0){for(const Ce of C.layerUpdates){const rt=ze.width*ze.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Ce,ze.width,ze.height,1,Xe,ze.data.slice(rt*Ce,rt*(Ce+1)),0,0)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ze.width,ze.height,Re.depth,Xe,ze.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Je,ze.width,ze.height,Re.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ze.width,ze.height,Re.depth,Xe,T,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Je,ze.width,ze.height,Re.depth,0,Xe,T,ze.data)}else{dt&&ht&&t.texStorage2D(i.TEXTURE_2D,Ge,Je,lt[0].width,lt[0].height);for(let me=0,xe=lt.length;me<xe;me++)ze=lt[me],C.format!==Ci?Xe!==null?dt?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,ze.width,ze.height,Xe,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ze.width,ze.height,Xe,T,ze.data):t.texImage2D(i.TEXTURE_2D,me,Je,ze.width,ze.height,0,Xe,T,ze.data)}else if(C.isDataArrayTexture)if(dt){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,Je,Re.width,Re.height,Re.depth),W)if(C.layerUpdates.size>0){let me;switch(T){case i.UNSIGNED_BYTE:switch(Xe){case i.ALPHA:me=1;break;case i.LUMINANCE:me=1;break;case i.LUMINANCE_ALPHA:me=2;break;case i.RGB:me=3;break;case i.RGBA:me=4;break;default:throw new Error(`Unknown texel size for format ${Xe}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:me=1;break;default:throw new Error(`Unknown texel size for type ${T}.`)}const xe=Re.width*Re.height*me;for(const Ce of C.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,Re.width,Re.height,1,Xe,T,Re.data.slice(xe*Ce,xe*(Ce+1)));C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Xe,T,Re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,Re.width,Re.height,Re.depth,0,Xe,T,Re.data);else if(C.isData3DTexture)dt?(ht&&t.texStorage3D(i.TEXTURE_3D,Ge,Je,Re.width,Re.height,Re.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Xe,T,Re.data)):t.texImage3D(i.TEXTURE_3D,0,Je,Re.width,Re.height,Re.depth,0,Xe,T,Re.data);else if(C.isFramebufferTexture){if(ht)if(dt)t.texStorage2D(i.TEXTURE_2D,Ge,Je,Re.width,Re.height);else{let me=Re.width,xe=Re.height;for(let Ce=0;Ce<Ge;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Je,me,xe,0,Xe,T,null),me>>=1,xe>>=1}}else if(lt.length>0){if(dt&&ht){const me=qe(lt[0]);t.texStorage2D(i.TEXTURE_2D,Ge,Je,me.width,me.height)}for(let me=0,xe=lt.length;me<xe;me++)ze=lt[me],dt?W&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Xe,T,ze):t.texImage2D(i.TEXTURE_2D,me,Je,Xe,T,ze);C.generateMipmaps=!1}else if(dt){if(ht){const me=qe(Re);t.texStorage2D(i.TEXTURE_2D,Ge,Je,me.width,me.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,T,Re)}else t.texImage2D(i.TEXTURE_2D,0,Je,Xe,T,Re);S(C)&&x(ye),je.__version=Me.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function Q(O,C,se){if(C.image.length!==6)return;const ye=X(O,C),pe=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+se);const Me=s.get(pe);if(pe.version!==Me.__version||ye===!0){t.activeTexture(i.TEXTURE0+se);const je=zt.getPrimaries(zt.workingColorSpace),Ie=C.colorSpace===Nr?null:zt.getPrimaries(C.colorSpace),Ue=C.colorSpace===Nr||je===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const et=C.isCompressedTexture||C.image[0].isCompressedTexture,Re=C.image[0]&&C.image[0].isDataTexture,Xe=[];for(let xe=0;xe<6;xe++)!et&&!Re?Xe[xe]=w(C.image[xe],!0,a.maxCubemapSize):Xe[xe]=Re?C.image[xe].image:C.image[xe],Xe[xe]=be(C,Xe[xe]);const T=Xe[0],Je=l.convert(C.format,C.colorSpace),ze=l.convert(C.type),lt=D(C.internalFormat,Je,ze,C.colorSpace),dt=C.isVideoTexture!==!0,ht=Me.__version===void 0||ye===!0,W=pe.dataReady;let Ge=R(C,T);U(i.TEXTURE_CUBE_MAP,C);let me;if(et){dt&&ht&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,lt,T.width,T.height);for(let xe=0;xe<6;xe++){me=Xe[xe].mipmaps;for(let Ce=0;Ce<me.length;Ce++){const rt=me[Ce];C.format!==Ci?Je!==null?dt?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,rt.width,rt.height,Je,rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,lt,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,0,0,rt.width,rt.height,Je,ze,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce,lt,rt.width,rt.height,0,Je,ze,rt.data)}}}else{if(me=C.mipmaps,dt&&ht){me.length>0&&Ge++;const xe=qe(Xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,lt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Re){dt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Xe[xe].width,Xe[xe].height,Je,ze,Xe[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Xe[xe].width,Xe[xe].height,0,Je,ze,Xe[xe].data);for(let Ce=0;Ce<me.length;Ce++){const vt=me[Ce].image[xe].image;dt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,vt.width,vt.height,Je,ze,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,lt,vt.width,vt.height,0,Je,ze,vt.data)}}else{dt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Je,ze,Xe[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Je,ze,Xe[xe]);for(let Ce=0;Ce<me.length;Ce++){const rt=me[Ce];dt?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,0,0,Je,ze,rt.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ce+1,lt,Je,ze,rt.image[xe])}}}S(C)&&x(i.TEXTURE_CUBE_MAP),Me.__version=pe.version,C.onUpdate&&C.onUpdate(C)}O.__version=C.version}function ie(O,C,se,ye,pe,Me){const je=l.convert(se.format,se.colorSpace),Ie=l.convert(se.type),Ue=D(se.internalFormat,je,Ie,se.colorSpace);if(!s.get(C).__hasExternalTextures){const Re=Math.max(1,C.width>>Me),Xe=Math.max(1,C.height>>Me);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,Me,Ue,Re,Xe,C.depth,0,je,Ie,null):t.texImage2D(pe,Me,Ue,Re,Xe,0,je,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ae(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,pe,s.get(se).__webglTexture,0,Se(C)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,pe,s.get(se).__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(O,C,se){if(i.bindRenderbuffer(i.RENDERBUFFER,O),C.depthBuffer){const ye=C.depthTexture,pe=ye&&ye.isDepthTexture?ye.type:null,Me=E(C.stencilBuffer,pe),je=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=Se(C);Ae(C)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Me,C.width,C.height):se?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Me,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,O)}else{const ye=C.textures;for(let pe=0;pe<ye.length;pe++){const Me=ye[pe],je=l.convert(Me.format,Me.colorSpace),Ie=l.convert(Me.type),Ue=D(Me.internalFormat,je,Ie,Me.colorSpace),et=Se(C);se&&Ae(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ue,C.width,C.height):Ae(C)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ue,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(O,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),te(C.depthTexture,0);const ye=s.get(C.depthTexture).__webglTexture,pe=Se(C);if(C.depthTexture.format===oa)Ae(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(C.depthTexture.format===pa)Ae(C)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function De(O){const C=s.get(O),se=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!C.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");_e(C.__webglFramebuffer,O)}else if(se){C.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[ye]),C.__webglDepthbuffer[ye]=i.createRenderbuffer(),ue(C.__webglDepthbuffer[ye],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),ue(C.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(O,C,se){const ye=s.get(O);C!==void 0&&ie(ye.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),se!==void 0&&De(O)}function He(O){const C=O.texture,se=s.get(O),ye=s.get(C);O.addEventListener("dispose",N);const pe=O.textures,Me=O.isWebGLCubeRenderTarget===!0,je=pe.length>1;if(je||(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=C.version,c.memory.textures++),Me){se.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer[Ie]=[];for(let Ue=0;Ue<C.mipmaps.length;Ue++)se.__webglFramebuffer[Ie][Ue]=i.createFramebuffer()}else se.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ie=0;Ie<C.mipmaps.length;Ie++)se.__webglFramebuffer[Ie]=i.createFramebuffer()}else se.__webglFramebuffer=i.createFramebuffer();if(je)for(let Ie=0,Ue=pe.length;Ie<Ue;Ie++){const et=s.get(pe[Ie]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&Ae(O)===!1){se.__webglMultisampledFramebuffer=i.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ie=0;Ie<pe.length;Ie++){const Ue=pe[Ie];se.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,se.__webglColorRenderbuffer[Ie]);const et=l.convert(Ue.format,Ue.colorSpace),Re=l.convert(Ue.type),Xe=D(Ue.internalFormat,et,Re,Ue.colorSpace,O.isXRRenderTarget===!0),T=Se(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,Xe,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(se.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(se.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),U(i.TEXTURE_CUBE_MAP,C);for(let Ie=0;Ie<6;Ie++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)ie(se.__webglFramebuffer[Ie][Ue],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ue);else ie(se.__webglFramebuffer[Ie],O,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);S(C)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ie=0,Ue=pe.length;Ie<Ue;Ie++){const et=pe[Ie],Re=s.get(et);t.bindTexture(i.TEXTURE_2D,Re.__webglTexture),U(i.TEXTURE_2D,et),ie(se.__webglFramebuffer,O,et,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),S(et)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,ye.__webglTexture),U(Ie,C),C.mipmaps&&C.mipmaps.length>0)for(let Ue=0;Ue<C.mipmaps.length;Ue++)ie(se.__webglFramebuffer[Ue],O,C,i.COLOR_ATTACHMENT0,Ie,Ue);else ie(se.__webglFramebuffer,O,C,i.COLOR_ATTACHMENT0,Ie,0);S(C)&&x(Ie),t.unbindTexture()}O.depthBuffer&&De(O)}function V(O){const C=O.textures;for(let se=0,ye=C.length;se<ye;se++){const pe=C[se];if(S(pe)){const Me=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,je=s.get(pe).__webglTexture;t.bindTexture(Me,je),x(Me),t.unbindTexture()}}}const ve=[],Ee=[];function Te(O){if(O.samples>0){if(Ae(O)===!1){const C=O.textures,se=O.width,ye=O.height;let pe=i.COLOR_BUFFER_BIT;const Me=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=s.get(O),Ie=C.length>1;if(Ie)for(let Ue=0;Ue<C.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ue=0;Ue<C.length;Ue++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[Ue]);const et=s.get(C[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,se,ye,0,0,se,ye,pe,i.NEAREST),f===!0&&(ve.length=0,Ee.length=0,ve.push(i.COLOR_ATTACHMENT0+Ue),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ve.push(Me),Ee.push(Me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ue=0;Ue<C.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,je.__webglColorRenderbuffer[Ue]);const et=s.get(C[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&f){const C=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Se(O){return Math.min(a.maxSamples,O.samples)}function Ae(O){const C=s.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Le(O){const C=c.render.frame;m.get(O)!==C&&(m.set(O,C),O.update())}function be(O,C){const se=O.colorSpace,ye=O.format,pe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||se!==Br&&se!==Nr&&(zt.getTransfer(se)===Wt?(ye!==Ci||pe!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),C}function qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=ce,this.setTexture3D=Z,this.setTextureCube=ge,this.rebindTextures=Be,this.setupRenderTarget=He,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ae}function lT(i,e){function t(s,a=Nr){let l;const c=zt.getTransfer(a);if(s===zr)return i.UNSIGNED_BYTE;if(s===_0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===y0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ly)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===Ry)return i.BYTE;if(s===Py)return i.SHORT;if(s===lc)return i.UNSIGNED_SHORT;if(s===x0)return i.INT;if(s===fa)return i.UNSIGNED_INT;if(s===rr)return i.FLOAT;if(s===yc)return i.HALF_FLOAT;if(s===Ny)return i.ALPHA;if(s===Dy)return i.RGB;if(s===Ci)return i.RGBA;if(s===Iy)return i.LUMINANCE;if(s===Uy)return i.LUMINANCE_ALPHA;if(s===oa)return i.DEPTH_COMPONENT;if(s===pa)return i.DEPTH_STENCIL;if(s===S0)return i.RED;if(s===M0)return i.RED_INTEGER;if(s===Oy)return i.RG;if(s===E0)return i.RG_INTEGER;if(s===w0)return i.RGBA_INTEGER;if(s===fd||s===hd||s===pd||s===md)if(c===Wt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===fd)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===md)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===fd)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hd)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===md)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mm||s===gm||s===vm||s===xm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===mm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===vm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===xm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_m||s===ym||s===Sm)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===_m||s===ym)return c===Wt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Sm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mm||s===Em||s===wm||s===Tm||s===Am||s===Cm||s===bm||s===Rm||s===Pm||s===Lm||s===Nm||s===Dm||s===Im||s===Um)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Mm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Em)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Am)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Pm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Lm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dm)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Im)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Um)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gd||s===Om||s===Fm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===gd)return c===Wt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Om)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Fm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fy||s===zm||s===km||s===Bm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===gd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===zm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===km)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ha?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class cT extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,s),x=this._getHandJoint(h,w);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&v>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Yl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fT=`
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

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Ln,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new kr({vertexShader:dT,fragmentShader:fT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bi(new Mc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class pT extends ga{constructor(e,t){super();const s=this;let a=null,l=1,c=null,u="local-floor",f=1,h=null,m=null,g=null,v=null,y=null,M=null;const w=new hT,S=t.getContextAttributes();let x=null,D=null;const E=[],R=[],k=new $e;let N=null;const F=new Ti;F.layers.enable(1),F.viewport=new yn;const I=new Ti;I.layers.enable(2),I.viewport=new yn;const L=[F,I],A=new cT;A.layers.enable(1),A.layers.enable(2);let B=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=E[Q];return ie===void 0&&(ie=new Hd,E[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=E[Q];return ie===void 0&&(ie=new Hd,E[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=E[Q];return ie===void 0&&(ie=new Hd,E[Q]=ie),ie.getHandSpace()};function J(Q){const ie=R.indexOf(Q.inputSource);if(ie===-1)return;const ue=E[ie];ue!==void 0&&(ue.update(Q.inputSource,Q.frame,h||c),ue.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){a.removeEventListener("select",J),a.removeEventListener("selectstart",J),a.removeEventListener("selectend",J),a.removeEventListener("squeeze",J),a.removeEventListener("squeezestart",J),a.removeEventListener("squeezeend",J),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",ce);for(let Q=0;Q<E.length;Q++){const ie=R[Q];ie!==null&&(R[Q]=null,E[Q].disconnect(ie))}B=null,Y=null,w.reset(),e.setRenderTarget(x),y=null,v=null,g=null,a=null,D=null,Ne.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",J),a.addEventListener("selectstart",J),a.addEventListener("selectend",J),a.addEventListener("squeeze",J),a.addEventListener("squeezestart",J),a.addEventListener("squeezeend",J),a.addEventListener("end",te),a.addEventListener("inputsourceschange",ce),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(k),a.renderState.layers===void 0){const ie={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ps(y.framebufferWidth,y.framebufferHeight,{format:Ci,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ie=null,ue=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=S.stencil?pa:oa,ue=S.stencil?ha:fa);const De={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(De),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new ps(v.textureWidth,v.textureHeight,{format:Ci,type:zr,depthTexture:new z0(v.textureWidth,v.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await a.requestReferenceSpace(u),Ne.setContext(a),Ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ce(Q){for(let ie=0;ie<Q.removed.length;ie++){const ue=Q.removed[ie],_e=R.indexOf(ue);_e>=0&&(R[_e]=null,E[_e].disconnect(ue))}for(let ie=0;ie<Q.added.length;ie++){const ue=Q.added[ie];let _e=R.indexOf(ue);if(_e===-1){for(let Be=0;Be<E.length;Be++)if(Be>=R.length){R.push(ue),_e=Be;break}else if(R[Be]===null){R[Be]=ue,_e=Be;break}if(_e===-1)break}const De=E[_e];De&&De.connect(ue)}}const Z=new K,ge=new K;function G(Q,ie,ue){Z.setFromMatrixPosition(ie.matrixWorld),ge.setFromMatrixPosition(ue.matrixWorld);const _e=Z.distanceTo(ge),De=ie.projectionMatrix.elements,Be=ue.projectionMatrix.elements,He=De[14]/(De[10]-1),V=De[14]/(De[10]+1),ve=(De[9]+1)/De[5],Ee=(De[9]-1)/De[5],Te=(De[8]-1)/De[0],Se=(Be[8]+1)/Be[0],Ae=He*Te,Le=He*Se,be=_e/(-Te+Se),qe=be*-Te;ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(qe),Q.translateZ(be),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const O=He+be,C=V+be,se=Ae-qe,ye=Le+(_e-qe),pe=ve*V/C*O,Me=Ee*V/C*O;Q.projectionMatrix.makePerspective(se,ye,pe,Me,O,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ne(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;w.texture!==null&&(Q.near=w.depthNear,Q.far=w.depthFar),A.near=I.near=F.near=Q.near,A.far=I.far=F.far=Q.far,(B!==A.near||Y!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,Y=A.far,F.near=B,F.far=Y,I.near=B,I.far=Y,F.updateProjectionMatrix(),I.updateProjectionMatrix(),Q.updateProjectionMatrix());const ie=Q.parent,ue=A.cameras;ne(A,ie);for(let _e=0;_e<ue.length;_e++)ne(ue[_e],ie);ue.length===2?G(A,F,I):A.projectionMatrix.copy(F.projectionMatrix),re(Q,A,ie)};function re(Q,ie,ue){ue===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ue.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=go*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&y===null))return f},this.setFoveation=function(Q){f=Q,v!==null&&(v.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let U=null;function X(Q,ie){if(m=ie.getViewerPose(h||c),M=ie,m!==null){const ue=m.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let _e=!1;ue.length!==A.cameras.length&&(A.cameras.length=0,_e=!0);for(let Be=0;Be<ue.length;Be++){const He=ue[Be];let V=null;if(y!==null)V=y.getViewport(He);else{const Ee=g.getViewSubImage(v,He);V=Ee.viewport,Be===0&&(e.setRenderTargetTextures(D,Ee.colorTexture,v.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(D))}let ve=L[Be];ve===void 0&&(ve=new Ti,ve.layers.enable(Be),ve.viewport=new yn,L[Be]=ve),ve.matrix.fromArray(He.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(He.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(V.x,V.y,V.width,V.height),Be===0&&(A.matrix.copy(ve.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),_e===!0&&A.cameras.push(ve)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")){const Be=g.getDepthInformation(ue[0]);Be&&Be.isValid&&Be.texture&&w.init(e,Be,a.renderState)}}for(let ue=0;ue<E.length;ue++){const _e=R[ue],De=E[ue];_e!==null&&De!==void 0&&De.update(_e,ie,h||c)}U&&U(Q,ie),ie.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ie}),M=null}const Ne=new O0;Ne.setAnimationLoop(X),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const os=new Ri,mT=new Bt;function gT(i,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,D0(i)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function a(S,x,D,E,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),g(S,x)):x.isMeshPhongMaterial?(l(S,x),m(S,x)):x.isMeshStandardMaterial?(l(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,R)):x.isMeshMatcapMaterial?(l(S,x),M(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),w(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,D,E):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Yn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Yn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),E=D.envMap,R=D.envMapRotation;E&&(S.envMap.value=E,os.copy(R),os.x*=-1,os.y*=-1,os.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),S.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(os)),S.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,D,E){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=E*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function w(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function vT(i,e,t,s){let a={},l={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,E){const R=E.program;s.uniformBlockBinding(D,R)}function h(D,E){let R=a[D.id];R===void 0&&(M(D),R=m(D),a[D.id]=R,D.addEventListener("dispose",S));const k=E.program;s.updateUBOMapping(D,k);const N=e.render.frame;l[D.id]!==N&&(v(D),l[D.id]=N)}function m(D){const E=g();D.__bindingPointIndex=E;const R=i.createBuffer(),k=D.__size,N=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,k,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,R),R}function g(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const E=a[D.id],R=D.uniforms,k=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let N=0,F=R.length;N<F;N++){const I=Array.isArray(R[N])?R[N]:[R[N]];for(let L=0,A=I.length;L<A;L++){const B=I[L];if(y(B,N,L,k)===!0){const Y=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let te=0;for(let ce=0;ce<J.length;ce++){const Z=J[ce],ge=w(Z);typeof Z=="number"||typeof Z=="boolean"?(B.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+te,B.__data)):Z.isMatrix3?(B.__data[0]=Z.elements[0],B.__data[1]=Z.elements[1],B.__data[2]=Z.elements[2],B.__data[3]=0,B.__data[4]=Z.elements[3],B.__data[5]=Z.elements[4],B.__data[6]=Z.elements[5],B.__data[7]=0,B.__data[8]=Z.elements[6],B.__data[9]=Z.elements[7],B.__data[10]=Z.elements[8],B.__data[11]=0):(Z.toArray(B.__data,te),te+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(D,E,R,k){const N=D.value,F=E+"_"+R;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const I=k[F];if(typeof N=="number"||typeof N=="boolean"){if(I!==N)return k[F]=N,!0}else if(I.equals(N)===!1)return I.copy(N),!0}return!1}function M(D){const E=D.uniforms;let R=0;const k=16;for(let F=0,I=E.length;F<I;F++){const L=Array.isArray(E[F])?E[F]:[E[F]];for(let A=0,B=L.length;A<B;A++){const Y=L[A],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let te=0,ce=J.length;te<ce;te++){const Z=J[te],ge=w(Z),G=R%k;G!==0&&k-G<ge.boundary&&(R+=k-G),Y.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=R,R+=ge.storage}}}const N=R%k;return N>0&&(R+=k-N),D.__size=R,D.__cache={},this}function w(D){const E={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(E.boundary=4,E.storage=4):D.isVector2?(E.boundary=8,E.storage=8):D.isVector3||D.isColor?(E.boundary=16,E.storage=12):D.isVector4?(E.boundary=16,E.storage=16):D.isMatrix3?(E.boundary=48,E.storage=48):D.isMatrix4?(E.boundary=64,E.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),E}function S(D){const E=D.target;E.removeEventListener("dispose",S);const R=c.indexOf(E.__bindingPointIndex);c.splice(R,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete l[E.id]}function x(){for(const D in a)i.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:f,update:h,dispose:x}}class k2{constructor(e={}){const{canvas:t=uS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=c;const y=new Uint32Array(4),M=new Int32Array(4);let w=null,S=null;const x=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wi,this.toneMapping=Or,this.toneMappingExposure=1;const E=this;let R=!1,k=0,N=0,F=null,I=-1,L=null;const A=new yn,B=new yn;let Y=null;const J=new bt(0);let te=0,ce=t.width,Z=t.height,ge=1,G=null,ne=null;const re=new yn(0,0,ce,Z),U=new yn(0,0,ce,Z);let X=!1;const Ne=new yf;let Q=!1,ie=!1;const ue=new Bt,_e=new K,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function He(){return F===null?ge:1}let V=s;function ve(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",xe,!1),V===null){const q="webgl2";if(V=ve(q,P),V===null)throw ve(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ee,Te,Se,Ae,Le,be,qe,O,C,se,ye,pe,Me,je,Ie,Ue,et,Re,Xe,T,Je,ze,lt,dt;function ht(){Ee=new AE(V),Ee.init(),ze=new lT(V,Ee),Te=new yE(V,Ee,e,ze),Se=new aT(V),Ae=new RE(V),Le=new Xw,be=new oT(V,Ee,Se,Le,Te,ze,Ae),qe=new ME(E),O=new TE(E),C=new OS(V),lt=new xE(V,C),se=new CE(V,C,Ae,lt),ye=new LE(V,se,C,Ae),Xe=new PE(V,Te,be),Ue=new SE(Le),pe=new jw(E,qe,O,Ee,Te,lt,Ue),Me=new gT(E,Le),je=new Yw,Ie=new eT(Ee),Re=new vE(E,qe,O,Se,ye,v,f),et=new sT(E,ye,Te),dt=new vT(V,Ae,Te,Se),T=new _E(V,Ee,Ae),Je=new bE(V,Ee,Ae),Ae.programs=pe.programs,E.capabilities=Te,E.extensions=Ee,E.properties=Le,E.renderLists=je,E.shadowMap=et,E.state=Se,E.info=Ae}ht();const W=new pT(E,V);this.xr=W,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=Ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(P){P!==void 0&&(ge=P,this.setSize(ce,Z,!1))},this.getSize=function(P){return P.set(ce,Z)},this.setSize=function(P,q,le=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=P,Z=q,t.width=Math.floor(P*ge),t.height=Math.floor(q*ge),le===!0&&(t.style.width=P+"px",t.style.height=q+"px"),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(ce*ge,Z*ge).floor()},this.setDrawingBufferSize=function(P,q,le){ce=P,Z=q,ge=le,t.width=Math.floor(P*le),t.height=Math.floor(q*le),this.setViewport(0,0,P,q)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(re)},this.setViewport=function(P,q,le,oe){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,q,le,oe),Se.viewport(A.copy(re).multiplyScalar(ge).round())},this.getScissor=function(P){return P.copy(U)},this.setScissor=function(P,q,le,oe){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,q,le,oe),Se.scissor(B.copy(U).multiplyScalar(ge).round())},this.getScissorTest=function(){return X},this.setScissorTest=function(P){Se.setScissorTest(X=P)},this.setOpaqueSort=function(P){G=P},this.setTransparentSort=function(P){ne=P},this.getClearColor=function(P){return P.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(P=!0,q=!0,le=!0){let oe=0;if(P){let ee=!1;if(F!==null){const Pe=F.texture.format;ee=Pe===w0||Pe===E0||Pe===M0}if(ee){const Pe=F.texture.type,Ye=Pe===zr||Pe===fa||Pe===lc||Pe===ha||Pe===_0||Pe===y0,tt=Re.getClearColor(),st=Re.getClearAlpha(),Ze=tt.r,pt=tt.g,ct=tt.b;Ye?(y[0]=Ze,y[1]=pt,y[2]=ct,y[3]=st,V.clearBufferuiv(V.COLOR,0,y)):(M[0]=Ze,M[1]=pt,M[2]=ct,M[3]=st,V.clearBufferiv(V.COLOR,0,M))}else oe|=V.COLOR_BUFFER_BIT}q&&(oe|=V.DEPTH_BUFFER_BIT),le&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),je.dispose(),Ie.dispose(),Le.dispose(),qe.dispose(),O.dispose(),ye.dispose(),lt.dispose(),dt.dispose(),pe.dispose(),W.dispose(),W.removeEventListener("sessionstart",Rt),W.removeEventListener("sessionend",It),Ut.stop()};function Ge(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=Ae.autoReset,q=et.enabled,le=et.autoUpdate,oe=et.needsUpdate,ee=et.type;ht(),Ae.autoReset=P,et.enabled=q,et.autoUpdate=le,et.needsUpdate=oe,et.type=ee}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ce(P){const q=P.target;q.removeEventListener("dispose",Ce),rt(q)}function rt(P){vt(P),Le.remove(P)}function vt(P){const q=Le.get(P).programs;q!==void 0&&(q.forEach(function(le){pe.releaseProgram(le)}),P.isShaderMaterial&&pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,le,oe,ee,Pe){q===null&&(q=De);const Ye=ee.isMesh&&ee.matrixWorld.determinant()<0,tt=Dn(P,q,le,oe,ee);Se.setMaterial(oe,Ye);let st=le.index,Ze=1;if(oe.wireframe===!0){if(st=se.getWireframeAttribute(le),st===void 0)return;Ze=2}const pt=le.drawRange,ct=le.attributes.position;let Tt=pt.start*Ze,Nt=(pt.start+pt.count)*Ze;Pe!==null&&(Tt=Math.max(Tt,Pe.start*Ze),Nt=Math.min(Nt,(Pe.start+Pe.count)*Ze)),st!==null?(Tt=Math.max(Tt,0),Nt=Math.min(Nt,st.count)):ct!=null&&(Tt=Math.max(Tt,0),Nt=Math.min(Nt,ct.count));const kt=Nt-Tt;if(kt<0||kt===1/0)return;lt.setup(ee,oe,tt,le,st);let jt,yt=T;if(st!==null&&(jt=C.get(st),yt=Je,yt.setIndex(jt)),ee.isMesh)oe.wireframe===!0?(Se.setLineWidth(oe.wireframeLinewidth*He()),yt.setMode(V.LINES)):yt.setMode(V.TRIANGLES);else if(ee.isLine){let nt=oe.linewidth;nt===void 0&&(nt=1),Se.setLineWidth(nt*He()),ee.isLineSegments?yt.setMode(V.LINES):ee.isLineLoop?yt.setMode(V.LINE_LOOP):yt.setMode(V.LINE_STRIP)}else ee.isPoints?yt.setMode(V.POINTS):ee.isSprite&&yt.setMode(V.TRIANGLES);if(ee.isBatchedMesh)ee._multiDrawInstances!==null?yt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances):yt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)yt.renderInstances(Tt,kt,ee.count);else if(le.isInstancedBufferGeometry){const nt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,tn=Math.min(le.instanceCount,nt);yt.renderInstances(Tt,kt,tn)}else yt.render(Tt,kt)};function wt(P,q,le){P.transparent===!0&&P.side===tr&&P.forceSinglePass===!1?(P.side=Yn,P.needsUpdate=!0,on(P,q,le),P.side=Fr,P.needsUpdate=!0,on(P,q,le),P.side=tr):on(P,q,le)}this.compile=function(P,q,le=null){le===null&&(le=P),S=Ie.get(le),S.init(q),D.push(S),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),P!==le&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(S.pushLight(ee),ee.castShadow&&S.pushShadow(ee))}),S.setupLights();const oe=new Set;return P.traverse(function(ee){const Pe=ee.material;if(Pe)if(Array.isArray(Pe))for(let Ye=0;Ye<Pe.length;Ye++){const tt=Pe[Ye];wt(tt,le,ee),oe.add(tt)}else wt(Pe,le,ee),oe.add(Pe)}),D.pop(),S=null,oe},this.compileAsync=function(P,q,le=null){const oe=this.compile(P,q,le);return new Promise(ee=>{function Pe(){if(oe.forEach(function(Ye){Le.get(Ye).currentProgram.isReady()&&oe.delete(Ye)}),oe.size===0){ee(P);return}setTimeout(Pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ct=null;function ft(P){Ct&&Ct(P)}function Rt(){Ut.stop()}function It(){Ut.start()}const Ut=new O0;Ut.setAnimationLoop(ft),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(P){Ct=P,W.setAnimationLoop(P),P===null?Ut.stop():Ut.start()},W.addEventListener("sessionstart",Rt),W.addEventListener("sessionend",It),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(q),q=W.getCamera()),P.isScene===!0&&P.onBeforeRender(E,P,q,F),S=Ie.get(P,D.length),S.init(q),D.push(S),ue.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ne.setFromProjectionMatrix(ue),ie=this.localClippingEnabled,Q=Ue.init(this.clippingPlanes,ie),w=je.get(P,x.length),w.init(),x.push(w),W.enabled===!0&&W.isPresenting===!0){const Pe=E.xr.getDepthSensingMesh();Pe!==null&&Ve(Pe,q,-1/0,E.sortObjects)}Ve(P,q,0,E.sortObjects),w.finish(),E.sortObjects===!0&&w.sort(G,ne),Be=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Be&&Re.addToRenderList(w,P),this.info.render.frame++,Q===!0&&Ue.beginShadows();const le=S.state.shadowsArray;et.render(le,P,q),Q===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=w.opaque,ee=w.transmissive;if(S.setupLights(),q.isArrayCamera){const Pe=q.cameras;if(ee.length>0)for(let Ye=0,tt=Pe.length;Ye<tt;Ye++){const st=Pe[Ye];Qt(oe,ee,P,st)}Be&&Re.render(P);for(let Ye=0,tt=Pe.length;Ye<tt;Ye++){const st=Pe[Ye];$t(w,P,st,st.viewport)}}else ee.length>0&&Qt(oe,ee,P,q),Be&&Re.render(P),$t(w,P,q);F!==null&&(be.updateMultisampleRenderTarget(F),be.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(E,P,q),lt.resetDefaultState(),I=-1,L=null,D.pop(),D.length>0?(S=D[D.length-1],Q===!0&&Ue.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function Ve(P,q,le,oe){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ne.intersectsSprite(P)){oe&&_e.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ue);const Ye=ye.update(P),tt=P.material;tt.visible&&w.push(P,Ye,tt,le,_e.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ne.intersectsObject(P))){const Ye=ye.update(P),tt=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),_e.copy(P.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),_e.copy(Ye.boundingSphere.center)),_e.applyMatrix4(P.matrixWorld).applyMatrix4(ue)),Array.isArray(tt)){const st=Ye.groups;for(let Ze=0,pt=st.length;Ze<pt;Ze++){const ct=st[Ze],Tt=tt[ct.materialIndex];Tt&&Tt.visible&&w.push(P,Ye,Tt,le,_e.z,ct)}}else tt.visible&&w.push(P,Ye,tt,le,_e.z,null)}}const Pe=P.children;for(let Ye=0,tt=Pe.length;Ye<tt;Ye++)Ve(Pe[Ye],q,le,oe)}function $t(P,q,le,oe){const ee=P.opaque,Pe=P.transmissive,Ye=P.transparent;S.setupLightsView(le),Q===!0&&Ue.setGlobalState(E.clippingPlanes,le),oe&&Se.viewport(A.copy(oe)),ee.length>0&&rn(ee,q,le),Pe.length>0&&rn(Pe,q,le),Ye.length>0&&rn(Ye,q,le),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Qt(P,q,le,oe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[oe.id]===void 0&&(S.state.transmissionRenderTarget[oe.id]=new ps(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?yc:zr,minFilter:Ir,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace}));const Pe=S.state.transmissionRenderTarget[oe.id],Ye=oe.viewport||A;Pe.setSize(Ye.z,Ye.w);const tt=E.getRenderTarget();E.setRenderTarget(Pe),E.getClearColor(J),te=E.getClearAlpha(),te<1&&E.setClearColor(16777215,.5),Be?Re.render(le):E.clear();const st=E.toneMapping;E.toneMapping=Or;const Ze=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),S.setupLightsView(oe),Q===!0&&Ue.setGlobalState(E.clippingPlanes,oe),rn(P,le,oe),be.updateMultisampleRenderTarget(Pe),be.updateRenderTargetMipmap(Pe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let ct=0,Tt=q.length;ct<Tt;ct++){const Nt=q[ct],kt=Nt.object,jt=Nt.geometry,yt=Nt.material,nt=Nt.group;if(yt.side===tr&&kt.layers.test(oe.layers)){const tn=yt.side;yt.side=Yn,yt.needsUpdate=!0,St(kt,le,oe,jt,yt,nt),yt.side=tn,yt.needsUpdate=!0,pt=!0}}pt===!0&&(be.updateMultisampleRenderTarget(Pe),be.updateRenderTargetMipmap(Pe))}E.setRenderTarget(tt),E.setClearColor(J,te),Ze!==void 0&&(oe.viewport=Ze),E.toneMapping=st}function rn(P,q,le){const oe=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Pe=P.length;ee<Pe;ee++){const Ye=P[ee],tt=Ye.object,st=Ye.geometry,Ze=oe===null?Ye.material:oe,pt=Ye.group;tt.layers.test(le.layers)&&St(tt,q,le,st,Ze,pt)}}function St(P,q,le,oe,ee,Pe){P.onBeforeRender(E,q,le,oe,ee,Pe),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(E,q,le,oe,P,Pe),ee.transparent===!0&&ee.side===tr&&ee.forceSinglePass===!1?(ee.side=Yn,ee.needsUpdate=!0,E.renderBufferDirect(le,q,oe,ee,P,Pe),ee.side=Fr,ee.needsUpdate=!0,E.renderBufferDirect(le,q,oe,ee,P,Pe),ee.side=tr):E.renderBufferDirect(le,q,oe,ee,P,Pe),P.onAfterRender(E,q,le,oe,ee,Pe)}function on(P,q,le){q.isScene!==!0&&(q=De);const oe=Le.get(P),ee=S.state.lights,Pe=S.state.shadowsArray,Ye=ee.state.version,tt=pe.getParameters(P,ee.state,Pe,q,le),st=pe.getProgramCacheKey(tt);let Ze=oe.programs;oe.environment=P.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(P.isMeshStandardMaterial?O:qe).get(P.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,Ze===void 0&&(P.addEventListener("dispose",Ce),Ze=new Map,oe.programs=Ze);let pt=Ze.get(st);if(pt!==void 0){if(oe.currentProgram===pt&&oe.lightsStateVersion===Ye)return ri(P,tt),pt}else tt.uniforms=pe.getUniforms(P),P.onBuild(le,tt,E),P.onBeforeCompile(tt,E),pt=pe.acquireProgram(tt,st),Ze.set(st,pt),oe.uniforms=tt.uniforms;const ct=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ct.clippingPlanes=Ue.uniform),ri(P,tt),oe.needsLights=we(P),oe.lightsStateVersion=Ye,oe.needsLights&&(ct.ambientLightColor.value=ee.state.ambient,ct.lightProbe.value=ee.state.probe,ct.directionalLights.value=ee.state.directional,ct.directionalLightShadows.value=ee.state.directionalShadow,ct.spotLights.value=ee.state.spot,ct.spotLightShadows.value=ee.state.spotShadow,ct.rectAreaLights.value=ee.state.rectArea,ct.ltc_1.value=ee.state.rectAreaLTC1,ct.ltc_2.value=ee.state.rectAreaLTC2,ct.pointLights.value=ee.state.point,ct.pointLightShadows.value=ee.state.pointShadow,ct.hemisphereLights.value=ee.state.hemi,ct.directionalShadowMap.value=ee.state.directionalShadowMap,ct.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ct.spotShadowMap.value=ee.state.spotShadowMap,ct.spotLightMatrix.value=ee.state.spotLightMatrix,ct.spotLightMap.value=ee.state.spotLightMap,ct.pointShadowMap.value=ee.state.pointShadowMap,ct.pointShadowMatrix.value=ee.state.pointShadowMatrix),oe.currentProgram=pt,oe.uniformsList=null,pt}function wn(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=rc.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function ri(P,q){const le=Le.get(P);le.outputColorSpace=q.outputColorSpace,le.batching=q.batching,le.batchingColor=q.batchingColor,le.instancing=q.instancing,le.instancingColor=q.instancingColor,le.instancingMorph=q.instancingMorph,le.skinning=q.skinning,le.morphTargets=q.morphTargets,le.morphNormals=q.morphNormals,le.morphColors=q.morphColors,le.morphTargetsCount=q.morphTargetsCount,le.numClippingPlanes=q.numClippingPlanes,le.numIntersection=q.numClipIntersection,le.vertexAlphas=q.vertexAlphas,le.vertexTangents=q.vertexTangents,le.toneMapping=q.toneMapping}function Dn(P,q,le,oe,ee){q.isScene!==!0&&(q=De),be.resetTextureUnits();const Pe=q.fog,Ye=oe.isMeshStandardMaterial?q.environment:null,tt=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Br,st=(oe.isMeshStandardMaterial?O:qe).get(oe.envMap||Ye),Ze=oe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pt=!!le.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),ct=!!le.morphAttributes.position,Tt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let kt=Or;oe.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(kt=E.toneMapping);const jt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,yt=jt!==void 0?jt.length:0,nt=Le.get(oe),tn=S.state.lights;if(Q===!0&&(ie===!0||P!==L)){const mn=P===L&&oe.id===I;Ue.setState(oe,P,mn)}let _t=!1;oe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==tn.state.version||nt.outputColorSpace!==tt||ee.isBatchedMesh&&nt.batching===!1||!ee.isBatchedMesh&&nt.batching===!0||ee.isBatchedMesh&&nt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&nt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&nt.instancing===!1||!ee.isInstancedMesh&&nt.instancing===!0||ee.isSkinnedMesh&&nt.skinning===!1||!ee.isSkinnedMesh&&nt.skinning===!0||ee.isInstancedMesh&&nt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&nt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&nt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&nt.instancingMorph===!1&&ee.morphTexture!==null||nt.envMap!==st||oe.fog===!0&&nt.fog!==Pe||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ue.numPlanes||nt.numIntersection!==Ue.numIntersection)||nt.vertexAlphas!==Ze||nt.vertexTangents!==pt||nt.morphTargets!==ct||nt.morphNormals!==Tt||nt.morphColors!==Nt||nt.toneMapping!==kt||nt.morphTargetsCount!==yt)&&(_t=!0):(_t=!0,nt.__version=oe.version);let In=nt.currentProgram;_t===!0&&(In=on(oe,q,ee));let $n=!1,Kn=!1,si=!1;const Ot=In.getUniforms(),cn=nt.uniforms;if(Se.useProgram(In.program)&&($n=!0,Kn=!0,si=!0),oe.id!==I&&(I=oe.id,Kn=!0),$n||L!==P){Ot.setValue(V,"projectionMatrix",P.projectionMatrix),Ot.setValue(V,"viewMatrix",P.matrixWorldInverse);const mn=Ot.map.cameraPosition;mn!==void 0&&mn.setValue(V,_e.setFromMatrixPosition(P.matrixWorld)),Te.logarithmicDepthBuffer&&Ot.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ot.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),L!==P&&(L=P,Kn=!0,si=!0)}if(ee.isSkinnedMesh){Ot.setOptional(V,ee,"bindMatrix"),Ot.setOptional(V,ee,"bindMatrixInverse");const mn=ee.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ot.setValue(V,"boneTexture",mn.boneTexture,be))}ee.isBatchedMesh&&(Ot.setOptional(V,ee,"batchingTexture"),Ot.setValue(V,"batchingTexture",ee._matricesTexture,be),Ot.setOptional(V,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ot.setValue(V,"batchingColorTexture",ee._colorsTexture,be));const Bn=le.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Xe.update(ee,le,In),(Kn||nt.receiveShadow!==ee.receiveShadow)&&(nt.receiveShadow=ee.receiveShadow,Ot.setValue(V,"receiveShadow",ee.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(cn.envMap.value=st,cn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&q.environment!==null&&(cn.envMapIntensity.value=q.environmentIntensity),Kn&&(Ot.setValue(V,"toneMappingExposure",E.toneMappingExposure),nt.needsLights&&ln(cn,si),Pe&&oe.fog===!0&&Me.refreshFogUniforms(cn,Pe),Me.refreshMaterialUniforms(cn,oe,ge,Z,S.state.transmissionRenderTarget[P.id]),rc.upload(V,wn(nt),cn,be)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(rc.upload(V,wn(nt),cn,be),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ot.setValue(V,"center",ee.center),Ot.setValue(V,"modelViewMatrix",ee.modelViewMatrix),Ot.setValue(V,"normalMatrix",ee.normalMatrix),Ot.setValue(V,"modelMatrix",ee.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const mn=oe.uniformsGroups;for(let Bi=0,Hr=mn.length;Bi<Hr;Bi++){const Vr=mn[Bi];dt.update(Vr,In),dt.bind(Vr,In)}}return In}function ln(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function we(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,q,le){Le.get(P.texture).__webglTexture=q,Le.get(P.depthTexture).__webglTexture=le;const oe=Le.get(P);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=le===void 0,oe.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,q){const le=Le.get(P);le.__webglFramebuffer=q,le.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(P,q=0,le=0){F=P,k=q,N=le;let oe=!0,ee=null,Pe=!1,Ye=!1;if(P){const st=Le.get(P);st.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(V.FRAMEBUFFER,null),oe=!1):st.__webglFramebuffer===void 0?be.setupRenderTarget(P):st.__hasExternalTextures&&be.rebindTextures(P,Le.get(P.texture).__webglTexture,Le.get(P.depthTexture).__webglTexture);const Ze=P.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ye=!0);const pt=Le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(pt[q])?ee=pt[q][le]:ee=pt[q],Pe=!0):P.samples>0&&be.useMultisampledRTT(P)===!1?ee=Le.get(P).__webglMultisampledFramebuffer:Array.isArray(pt)?ee=pt[le]:ee=pt,A.copy(P.viewport),B.copy(P.scissor),Y=P.scissorTest}else A.copy(re).multiplyScalar(ge).floor(),B.copy(U).multiplyScalar(ge).floor(),Y=X;if(Se.bindFramebuffer(V.FRAMEBUFFER,ee)&&oe&&Se.drawBuffers(P,ee),Se.viewport(A),Se.scissor(B),Se.setScissorTest(Y),Pe){const st=Le.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,st.__webglTexture,le)}else if(Ye){const st=Le.get(P.texture),Ze=q||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.__webglTexture,le||0,Ze)}I=-1},this.readRenderTargetPixels=function(P,q,le,oe,ee,Pe,Ye){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Se.bindFramebuffer(V.FRAMEBUFFER,tt);try{const st=P.texture,Ze=st.format,pt=st.type;if(!Te.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-oe&&le>=0&&le<=P.height-ee&&V.readPixels(q,le,oe,ee,ze.convert(Ze),ze.convert(pt),Pe)}finally{const st=F!==null?Le.get(F).__webglFramebuffer:null;Se.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(P,q,le,oe,ee,Pe,Ye){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Se.bindFramebuffer(V.FRAMEBUFFER,tt);try{const st=P.texture,Ze=st.format,pt=st.type;if(!Te.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=P.width-oe&&le>=0&&le<=P.height-ee){const ct=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),V.readPixels(q,le,oe,ee,ze.convert(Ze),ze.convert(pt),0),V.flush();const Tt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await dS(V,Tt,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,ct),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe)}finally{V.deleteBuffer(ct),V.deleteSync(Tt)}return Pe}}finally{const st=F!==null?Le.get(F).__webglFramebuffer:null;Se.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(P,q=null,le=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,P=arguments[1]);const oe=Math.pow(2,-le),ee=Math.floor(P.image.width*oe),Pe=Math.floor(P.image.height*oe),Ye=q!==null?q.x:0,tt=q!==null?q.y:0;be.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,Ye,tt,ee,Pe),Se.unbindTexture()},this.copyTextureToTexture=function(P,q,le=null,oe=null,ee=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,P=arguments[1],q=arguments[2],ee=arguments[3]||0,le=null);let Pe,Ye,tt,st,Ze,pt;le!==null?(Pe=le.max.x-le.min.x,Ye=le.max.y-le.min.y,tt=le.min.x,st=le.min.y):(Pe=P.image.width,Ye=P.image.height,tt=0,st=0),oe!==null?(Ze=oe.x,pt=oe.y):(Ze=0,pt=0);const ct=ze.convert(q.format),Tt=ze.convert(q.type);be.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const Nt=V.getParameter(V.UNPACK_ROW_LENGTH),kt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),jt=V.getParameter(V.UNPACK_SKIP_PIXELS),yt=V.getParameter(V.UNPACK_SKIP_ROWS),nt=V.getParameter(V.UNPACK_SKIP_IMAGES),tn=P.isCompressedTexture?P.mipmaps[ee]:P.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,tn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,tn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,st),P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ee,Ze,pt,Pe,Ye,ct,Tt,tn.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ee,Ze,pt,tn.width,tn.height,ct,tn.data):V.texSubImage2D(V.TEXTURE_2D,ee,Ze,pt,ct,Tt,tn),V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,jt),V.pixelStorei(V.UNPACK_SKIP_ROWS,yt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,nt),ee===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(P,q,le=null,oe=null,ee=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,oe=arguments[1]||null,P=arguments[2],q=arguments[3],ee=arguments[4]||0);let Pe,Ye,tt,st,Ze,pt,ct,Tt,Nt;const kt=P.isCompressedTexture?P.mipmaps[ee]:P.image;le!==null?(Pe=le.max.x-le.min.x,Ye=le.max.y-le.min.y,tt=le.max.z-le.min.z,st=le.min.x,Ze=le.min.y,pt=le.min.z):(Pe=kt.width,Ye=kt.height,tt=kt.depth,st=0,Ze=0,pt=0),oe!==null?(ct=oe.x,Tt=oe.y,Nt=oe.z):(ct=0,Tt=0,Nt=0);const jt=ze.convert(q.format),yt=ze.convert(q.type);let nt;if(q.isData3DTexture)be.setTexture3D(q,0),nt=V.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)be.setTexture2DArray(q,0),nt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const tn=V.getParameter(V.UNPACK_ROW_LENGTH),_t=V.getParameter(V.UNPACK_IMAGE_HEIGHT),In=V.getParameter(V.UNPACK_SKIP_PIXELS),$n=V.getParameter(V.UNPACK_SKIP_ROWS),Kn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,st),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ze),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pt),P.isDataTexture||P.isData3DTexture?V.texSubImage3D(nt,ee,ct,Tt,Nt,Pe,Ye,tt,jt,yt,kt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(nt,ee,ct,Tt,Nt,Pe,Ye,tt,jt,kt.data):V.texSubImage3D(nt,ee,ct,Tt,Nt,Pe,Ye,tt,jt,yt,kt),V.pixelStorei(V.UNPACK_ROW_LENGTH,tn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),V.pixelStorei(V.UNPACK_SKIP_PIXELS,In),V.pixelStorei(V.UNPACK_SKIP_ROWS,$n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Kn),ee===0&&q.generateMipmaps&&V.generateMipmap(nt),Se.unbindTexture()},this.initRenderTarget=function(P){Le.get(P).__webglFramebuffer===void 0&&be.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?be.setTextureCube(P,0):P.isData3DTexture?be.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?be.setTexture2DArray(P,0):be.setTexture2D(P,0),Se.unbindTexture()},this.resetState=function(){k=0,N=0,F=null,Se.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mf?"display-p3":"srgb",t.unpackColorSpace=zt.workingColorSpace===Sc?"display-p3":"srgb"}}class B2 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class xT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new K;class W0{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Ai(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ft(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),s=Ft(s,this.array),a=Ft(a,this.array),l=Ft(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new W0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class j0 extends Ln{constructor(e=null,t=1,s=1,a,l,c,u,f,h=qn,m=qn,g,v){super(null,c,u,f,h,m,a,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lg extends pi{constructor(e,t,s,a=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ia=new Bt,Ng=new Bt,$l=[],Dg=new gs,_T=new Bt,ro=new bi,so=new va;class H2 extends bi{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Lg(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<s;a++)this.setMatrixAt(a,_T)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),Dg.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(Dg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),so.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const s=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let u=0;u<s.length;u++)s[u]=a[c+u]}raycast(e,t){const s=this.matrixWorld,a=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(s),e.ray.intersectsSphere(so)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ia),Ng.multiplyMatrices(s,ia),ro.matrixWorld=Ng,ro.raycast(e,$l);for(let c=0,u=$l.length;c<u;c++){const f=$l[c];f.instanceId=l,f.object=this,t.push(f)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Lg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const s=t.morphTargetInfluences,a=s.length+1;this.morphTexture===null&&(this.morphTexture=new j0(new Float32Array(a*this.count),a,this.count,S0,rr));const l=this.morphTexture.source.data.data;let c=0;for(let h=0;h<s.length;h++)c+=s[h];const u=this.geometry.morphTargetsRelative?1:1-c,f=a*e;l[f]=u,l.set(s,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yT extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new K,pc=new K,Ig=new Bt,ao=new xf,Kl=new va,Vd=new K,Ug=new K;class ST extends En{constructor(e=new kn,t=new yT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)hc.fromBufferAttribute(t,a-1),pc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=hc.distanceTo(pc);e.setAttribute("lineDistance",new Yt(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kl.copy(s.boundingSphere),Kl.applyMatrix4(a),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;Ig.copy(a).invert(),ao.copy(e.ray).applyMatrix4(Ig);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,m=s.index,v=s.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let w=y,S=M-1;w<S;w+=h){const x=m.getX(w),D=m.getX(w+1),E=Jl(this,e,ao,f,x,D);E&&t.push(E)}if(this.isLineLoop){const w=m.getX(M-1),S=m.getX(y),x=Jl(this,e,ao,f,w,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let w=y,S=M-1;w<S;w+=h){const x=Jl(this,e,ao,f,w,w+1);x&&t.push(x)}if(this.isLineLoop){const w=Jl(this,e,ao,f,M-1,y);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Jl(i,e,t,s,a,l){const c=i.geometry.attributes.position;if(hc.fromBufferAttribute(c,a),pc.fromBufferAttribute(c,l),t.distanceSqToSegment(hc,pc,Vd,Ug)>s)return;Vd.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Vd);if(!(f<e.near||f>e.far))return{distance:f,point:Ug.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Og=new K,Fg=new K;class V2 extends ST{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Og.fromBufferAttribute(t,a),Fg.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Og.distanceTo(Fg);e.setAttribute("lineDistance",new Yt(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let a=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let u=0,f=l-1,h;for(;u<=f;)if(a=Math.floor(u+(f-u)/2),h=s[a]-c,h<0)u=a+1;else if(h>0)f=a-1;else{f=a;break}if(a=f,s[a]===c)return a/(l-1);const m=s[a],v=s[a+1]-m,y=(c-m)/v;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),u=this.getPoint(l),f=t||(c.isVector2?new $e:new K);return f.copy(u).sub(c).normalize(),f}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new K,a=[],l=[],c=[],u=new K,f=new Bt;for(let y=0;y<=e;y++){const M=y/e;a[y]=this.getTangentAt(M,new K)}l[0]=new K,c[0]=new K;let h=Number.MAX_VALUE;const m=Math.abs(a[0].x),g=Math.abs(a[0].y),v=Math.abs(a[0].z);m<=h&&(h=m,s.set(1,0,0)),g<=h&&(h=g,s.set(0,1,0)),v<=h&&s.set(0,0,1),u.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],u),c[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),u.crossVectors(a[y-1],a[y]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(fn(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(f.makeRotationAxis(u,M))}c[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(fn(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(u.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(a[M],y*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mf extends ki{constructor(e=0,t=0,s=1,a=1,l=0,c=Math.PI*2,u=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=u,this.aRotation=f}getPoint(e,t=new $e){const s=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const u=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(u),h=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=f-this.aX,y=h-this.aY;f=v*m-y*g+this.aX,h=v*g+y*m+this.aY}return s.set(f,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class MT extends Mf{constructor(e,t,s,a,l,c){super(e,t,s,s,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Ef(){let i=0,e=0,t=0,s=0;function a(l,c,u,f){i=l,e=u,t=-3*l+3*c-2*u-f,s=2*l-2*c+u+f}return{initCatmullRom:function(l,c,u,f,h){a(c,u,h*(u-l),h*(f-c))},initNonuniformCatmullRom:function(l,c,u,f,h,m,g){let v=(c-l)/h-(u-l)/(h+m)+(u-c)/m,y=(u-c)/m-(f-c)/(m+g)+(f-u)/g;v*=m,y*=m,a(c,u,v,y)},calc:function(l){const c=l*l,u=c*l;return i+e*l+t*c+s*u}}}const Zl=new K,Gd=new Ef,Wd=new Ef,jd=new Ef;class ET extends ki{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new K){const s=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let u=Math.floor(c),f=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:f===0&&u===l-1&&(u=l-2,f=1);let h,m;this.closed||u>0?h=a[(u-1)%l]:(Zl.subVectors(a[0],a[1]).add(a[0]),h=Zl);const g=a[u%l],v=a[(u+1)%l];if(this.closed||u+2<l?m=a[(u+2)%l]:(Zl.subVectors(a[l-1],a[l-2]).add(a[l-1]),m=Zl),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),y),w=Math.pow(g.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(m),y);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),Gd.initNonuniformCatmullRom(h.x,g.x,v.x,m.x,M,w,S),Wd.initNonuniformCatmullRom(h.y,g.y,v.y,m.y,M,w,S),jd.initNonuniformCatmullRom(h.z,g.z,v.z,m.z,M,w,S)}else this.curveType==="catmullrom"&&(Gd.initCatmullRom(h.x,g.x,v.x,m.x,this.tension),Wd.initCatmullRom(h.y,g.y,v.y,m.y,this.tension),jd.initCatmullRom(h.z,g.z,v.z,m.z,this.tension));return s.set(Gd.calc(f),Wd.calc(f),jd.calc(f)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new K().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zg(i,e,t,s,a){const l=(s-e)*.5,c=(a-t)*.5,u=i*i,f=i*u;return(2*t-2*s+l+c)*f+(-3*t+3*s-2*l-c)*u+l*i+t}function wT(i,e){const t=1-i;return t*t*e}function TT(i,e){return 2*(1-i)*i*e}function AT(i,e){return i*i*e}function fo(i,e,t,s){return wT(i,e)+TT(i,t)+AT(i,s)}function CT(i,e){const t=1-i;return t*t*t*e}function bT(i,e){const t=1-i;return 3*t*t*i*e}function RT(i,e){return 3*(1-i)*i*i*e}function PT(i,e){return i*i*i*e}function ho(i,e,t,s,a){return CT(i,e)+bT(i,t)+RT(i,s)+PT(i,a)}class X0 extends ki{constructor(e=new $e,t=new $e,s=new $e,a=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2,u=this.v3;return s.set(ho(e,a.x,l.x,c.x,u.x),ho(e,a.y,l.y,c.y,u.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class LT extends ki{constructor(e=new K,t=new K,s=new K,a=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new K){const s=t,a=this.v0,l=this.v1,c=this.v2,u=this.v3;return s.set(ho(e,a.x,l.x,c.x,u.x),ho(e,a.y,l.y,c.y,u.y),ho(e,a.z,l.z,c.z,u.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q0 extends ki{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class NT extends ki{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y0 extends ki{constructor(e=new $e,t=new $e,s=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $0 extends ki{constructor(e=new K,t=new K,s=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new K){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y),fo(e,a.z,l.z,c.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K0 extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const s=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),u=l-c,f=a[c===0?c:c-1],h=a[c],m=a[c>a.length-2?a.length-1:c+1],g=a[c>a.length-3?a.length-1:c+2];return s.set(zg(u,f.x,h.x,m.x,g.x),zg(u,f.y,h.y,m.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new $e().fromArray(a))}return this}}var mc=Object.freeze({__proto__:null,ArcCurve:MT,CatmullRomCurve3:ET,CubicBezierCurve:X0,CubicBezierCurve3:LT,EllipseCurve:Mf,LineCurve:q0,LineCurve3:NT,QuadraticBezierCurve:Y0,QuadraticBezierCurve3:$0,SplineCurve:K0});class DT extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[s](t,e))}return this}getPoint(e,t){const s=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=s){const c=a[l]-s,u=this.curves[l],f=u.getLength(),h=f===0?0:1-c/f;return u.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let s=0,a=this.curves.length;s<a;s++)t+=this.curves[s].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let s;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(u);for(let h=0;h<f.length;h++){const m=f[h];s&&s.equals(m)||(t.push(m),s=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,s=this.curves.length;t<s;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(new mc[a.type]().fromJSON(a))}return this}}class sf extends DT{constructor(e){super(),this.type="Path",this.currentPoint=new $e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,s=e.length;t<s;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new q0(this.currentPoint.clone(),new $e(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,a){const l=new Y0(this.currentPoint.clone(),new $e(e,t),new $e(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}bezierCurveTo(e,t,s,a,l,c){const u=new X0(this.currentPoint.clone(),new $e(e,t),new $e(s,a),new $e(l,c));return this.curves.push(u),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),s=new K0(t);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,s,a,l,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+u,t+f,s,a,l,c),this}absarc(e,t,s,a,l,c){return this.absellipse(e,t,s,s,a,l,c),this}ellipse(e,t,s,a,l,c,u,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,s,a,l,c,u,f),this}absellipse(e,t,s,a,l,c,u,f){const h=new Mf(e,t,s,a,l,c,u,f);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class J0 extends kn{constructor(e=1,t=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:s,thetaLength:a},t=Math.max(3,t);const l=[],c=[],u=[],f=[],h=new K,m=new $e;c.push(0,0,0),u.push(0,0,1),f.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const y=s+g/t*a;h.x=e*Math.cos(y),h.y=e*Math.sin(y),c.push(h.x,h.y,h.z),u.push(0,0,1),m.x=(c[v]/e+1)/2,m.y=(c[v+1]/e+1)/2,f.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new J0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Z0 extends kn{constructor(e=1,t=1,s=1,a=32,l=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:u,thetaLength:f};const h=this;a=Math.floor(a),l=Math.floor(l);const m=[],g=[],v=[],y=[];let M=0;const w=[],S=s/2;let x=0;D(),c===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(m),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(y,2));function D(){const R=new K,k=new K;let N=0;const F=(t-e)/s;for(let I=0;I<=l;I++){const L=[],A=I/l,B=A*(t-e)+e;for(let Y=0;Y<=a;Y++){const J=Y/a,te=J*f+u,ce=Math.sin(te),Z=Math.cos(te);k.x=B*ce,k.y=-A*s+S,k.z=B*Z,g.push(k.x,k.y,k.z),R.set(ce,F,Z).normalize(),v.push(R.x,R.y,R.z),y.push(J,1-A),L.push(M++)}w.push(L)}for(let I=0;I<a;I++)for(let L=0;L<l;L++){const A=w[L][I],B=w[L+1][I],Y=w[L+1][I+1],J=w[L][I+1];m.push(A,B,J),m.push(B,Y,J),N+=6}h.addGroup(x,N,0),x+=N}function E(R){const k=M,N=new $e,F=new K;let I=0;const L=R===!0?e:t,A=R===!0?1:-1;for(let Y=1;Y<=a;Y++)g.push(0,S*A,0),v.push(0,A,0),y.push(.5,.5),M++;const B=M;for(let Y=0;Y<=a;Y++){const te=Y/a*f+u,ce=Math.cos(te),Z=Math.sin(te);F.x=L*Z,F.y=S*A,F.z=L*ce,g.push(F.x,F.y,F.z),v.push(0,A,0),N.x=ce*.5+.5,N.y=Z*.5*A+.5,y.push(N.x,N.y),M++}for(let Y=0;Y<a;Y++){const J=k+Y,te=B+Y;R===!0?m.push(te,te+1,J):m.push(te+1,te,J),I+=3}h.addGroup(x,I,R===!0?1:2),x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Z0(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends sf{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let s=0,a=this.holes.length;s<a;s++)t[s]=this.holes[s].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,s=this.holes.length;t<s;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(new sf().fromJSON(a))}return this}}const IT={triangulate:function(i,e,t=2){const s=e&&e.length,a=s?e[0]*t:i.length;let l=Q0(i,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let u,f,h,m,g,v,y;if(s&&(l=kT(i,e,l,t)),i.length>80*t){u=h=i[0],f=m=i[1];for(let M=t;M<a;M+=t)g=i[M],v=i[M+1],g<u&&(u=g),v<f&&(f=v),g>h&&(h=g),v>m&&(m=v);y=Math.max(h-u,m-f),y=y!==0?32767/y:0}return xo(l,c,t,u,f,y,0),c}};function Q0(i,e,t,s,a){let l,c;if(a===KT(i,e,t,s)>0)for(l=e;l<t;l+=s)c=kg(l,i[l],i[l+1],c);else for(l=t-s;l>=e;l-=s)c=kg(l,i[l],i[l+1],c);return c&&wc(c,c.next)&&(yo(c),c=c.next),c}function ms(i,e){if(!i)return i;e||(e=i);let t=i,s;do if(s=!1,!t.steiner&&(wc(t,t.next)||Zt(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function xo(i,e,t,s,a,l,c){if(!i)return;!c&&l&&WT(i,s,a,l);let u=i,f,h;for(;i.prev!==i.next;){if(f=i.prev,h=i.next,l?OT(i,s,a,l):UT(i)){e.push(f.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),yo(i),i=h.next,u=h.next;continue}if(i=h,i===u){c?c===1?(i=FT(ms(i),e,t),xo(i,e,t,s,a,l,2)):c===2&&zT(i,e,t,s,a,l):xo(ms(i),e,t,s,a,l,1);break}}}function UT(i){const e=i.prev,t=i,s=i.next;if(Zt(e,t,s)>=0)return!1;const a=e.x,l=t.x,c=s.x,u=e.y,f=t.y,h=s.y,m=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=a>l?a>c?a:c:l>c?l:c,y=u>f?u>h?u:h:f>h?f:h;let M=s.next;for(;M!==e;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=y&&sa(a,u,l,f,c,h,M.x,M.y)&&Zt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function OT(i,e,t,s){const a=i.prev,l=i,c=i.next;if(Zt(a,l,c)>=0)return!1;const u=a.x,f=l.x,h=c.x,m=a.y,g=l.y,v=c.y,y=u<f?u<h?u:h:f<h?f:h,M=m<g?m<v?m:v:g<v?g:v,w=u>f?u>h?u:h:f>h?f:h,S=m>g?m>v?m:v:g>v?g:v,x=af(y,M,e,t,s),D=af(w,S,e,t,s);let E=i.prevZ,R=i.nextZ;for(;E&&E.z>=x&&R&&R.z<=D;){if(E.x>=y&&E.x<=w&&E.y>=M&&E.y<=S&&E!==a&&E!==c&&sa(u,m,f,g,h,v,E.x,E.y)&&Zt(E.prev,E,E.next)>=0||(E=E.prevZ,R.x>=y&&R.x<=w&&R.y>=M&&R.y<=S&&R!==a&&R!==c&&sa(u,m,f,g,h,v,R.x,R.y)&&Zt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;E&&E.z>=x;){if(E.x>=y&&E.x<=w&&E.y>=M&&E.y<=S&&E!==a&&E!==c&&sa(u,m,f,g,h,v,E.x,E.y)&&Zt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;R&&R.z<=D;){if(R.x>=y&&R.x<=w&&R.y>=M&&R.y<=S&&R!==a&&R!==c&&sa(u,m,f,g,h,v,R.x,R.y)&&Zt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function FT(i,e,t){let s=i;do{const a=s.prev,l=s.next.next;!wc(a,l)&&ev(a,s,s.next,l)&&_o(a,l)&&_o(l,a)&&(e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),yo(s),yo(s.next),s=i=l),s=s.next}while(s!==i);return ms(s)}function zT(i,e,t,s,a,l){let c=i;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&qT(c,u)){let f=tv(c,u);c=ms(c,c.next),f=ms(f,f.next),xo(c,e,t,s,a,l,0),xo(f,e,t,s,a,l,0);return}u=u.next}c=c.next}while(c!==i)}function kT(i,e,t,s){const a=[];let l,c,u,f,h;for(l=0,c=e.length;l<c;l++)u=e[l]*s,f=l<c-1?e[l+1]*s:i.length,h=Q0(i,u,f,s,!1),h===h.next&&(h.steiner=!0),a.push(XT(h));for(a.sort(BT),l=0;l<a.length;l++)t=HT(a[l],t);return t}function BT(i,e){return i.x-e.x}function HT(i,e){const t=VT(i,e);if(!t)return e;const s=tv(t,i);return ms(s,s.next),ms(t,t.next)}function VT(i,e){let t=e,s=-1/0,a;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=l&&v>s&&(s=v,a=t.x<t.next.x?t:t.next,v===l))return a}t=t.next}while(t!==e);if(!a)return null;const u=a,f=a.x,h=a.y;let m=1/0,g;t=a;do l>=t.x&&t.x>=f&&l!==t.x&&sa(c<h?l:s,c,f,h,c<h?s:l,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(l-t.x),_o(t,i)&&(g<m||g===m&&(t.x>a.x||t.x===a.x&&GT(a,t)))&&(a=t,m=g)),t=t.next;while(t!==u);return a}function GT(i,e){return Zt(i.prev,i,e.prev)<0&&Zt(e.next,i,i.next)<0}function WT(i,e,t,s){let a=i;do a.z===0&&(a.z=af(a.x,a.y,e,t,s)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,jT(a)}function jT(i){let e,t,s,a,l,c,u,f,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,s=t,u=0,e=0;e<h&&(u++,s=s.nextZ,!!s);e++);for(f=h;u>0||f>0&&s;)u!==0&&(f===0||!s||t.z<=s.z)?(a=t,t=t.nextZ,u--):(a=s,s=s.nextZ,f--),l?l.nextZ=a:i=a,a.prevZ=l,l=a;t=s}l.nextZ=null,h*=2}while(c>1);return i}function af(i,e,t,s,a){return i=(i-t)*a|0,e=(e-s)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function XT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sa(i,e,t,s,a,l,c,u){return(a-c)*(e-u)>=(i-c)*(l-u)&&(i-c)*(s-u)>=(t-c)*(e-u)&&(t-c)*(l-u)>=(a-c)*(s-u)}function qT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!YT(i,e)&&(_o(i,e)&&_o(e,i)&&$T(i,e)&&(Zt(i.prev,i,e.prev)||Zt(i,e.prev,e))||wc(i,e)&&Zt(i.prev,i,i.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wc(i,e){return i.x===e.x&&i.y===e.y}function ev(i,e,t,s){const a=ec(Zt(i,e,t)),l=ec(Zt(i,e,s)),c=ec(Zt(t,s,i)),u=ec(Zt(t,s,e));return!!(a!==l&&c!==u||a===0&&Ql(i,t,e)||l===0&&Ql(i,s,e)||c===0&&Ql(t,i,s)||u===0&&Ql(t,e,s))}function Ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function YT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ev(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _o(i,e){return Zt(i.prev,i,i.next)<0?Zt(i,e,i.next)>=0&&Zt(i,i.prev,e)>=0:Zt(i,e,i.prev)<0||Zt(i,i.next,e)<0}function $T(i,e){let t=i,s=!1;const a=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==i);return s}function tv(i,e){const t=new of(i.i,i.x,i.y),s=new of(e.i,e.x,e.y),a=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function kg(i,e,t,s){const a=new of(i,e,t);return s?(a.next=s.next,a.prev=s,s.next.prev=a,s.next=a):(a.prev=a,a.next=a),a}function yo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function of(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function KT(i,e,t,s){let a=0;for(let l=e,c=t-s;l<t;l+=s)a+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return a}class ca{static area(e){const t=e.length;let s=0;for(let a=t-1,l=0;l<t;a=l++)s+=e[a].x*e[l].y-e[l].x*e[a].y;return s*.5}static isClockWise(e){return ca.area(e)<0}static triangulateShape(e,t){const s=[],a=[],l=[];Bg(e),Hg(s,e);let c=e.length;t.forEach(Bg);for(let f=0;f<t.length;f++)a.push(c),c+=t[f].length,Hg(s,t[f]);const u=IT.triangulate(s,a);for(let f=0;f<u.length;f+=3)l.push(u.slice(f,f+3));return l}}function Bg(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Hg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class nv extends kn{constructor(e=new sc([new $e(.5,.5),new $e(-.5,.5),new $e(-.5,-.5),new $e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,a=[],l=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];c(h)}this.setAttribute("position",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2)),this.computeVertexNormals();function c(u){const f=[],h=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,w=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,D=t.UVGenerator!==void 0?t.UVGenerator:JT;let E,R=!1,k,N,F,I;x&&(E=x.getSpacedPoints(m),R=!0,v=!1,k=x.computeFrenetFrames(m,!1),N=new K,F=new K,I=new K),v||(S=0,y=0,M=0,w=0);const L=u.extractPoints(h);let A=L.shape;const B=L.holes;if(!ca.isClockWise(A)){A=A.reverse();for(let ve=0,Ee=B.length;ve<Ee;ve++){const Te=B[ve];ca.isClockWise(Te)&&(B[ve]=Te.reverse())}}const J=ca.triangulateShape(A,B),te=A;for(let ve=0,Ee=B.length;ve<Ee;ve++){const Te=B[ve];A=A.concat(Te)}function ce(ve,Ee,Te){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Ee,Te)}const Z=A.length,ge=J.length;function G(ve,Ee,Te){let Se,Ae,Le;const be=ve.x-Ee.x,qe=ve.y-Ee.y,O=Te.x-ve.x,C=Te.y-ve.y,se=be*be+qe*qe,ye=be*C-qe*O;if(Math.abs(ye)>Number.EPSILON){const pe=Math.sqrt(se),Me=Math.sqrt(O*O+C*C),je=Ee.x-qe/pe,Ie=Ee.y+be/pe,Ue=Te.x-C/Me,et=Te.y+O/Me,Re=((Ue-je)*C-(et-Ie)*O)/(be*C-qe*O);Se=je+be*Re-ve.x,Ae=Ie+qe*Re-ve.y;const Xe=Se*Se+Ae*Ae;if(Xe<=2)return new $e(Se,Ae);Le=Math.sqrt(Xe/2)}else{let pe=!1;be>Number.EPSILON?O>Number.EPSILON&&(pe=!0):be<-Number.EPSILON?O<-Number.EPSILON&&(pe=!0):Math.sign(qe)===Math.sign(C)&&(pe=!0),pe?(Se=-qe,Ae=be,Le=Math.sqrt(se)):(Se=be,Ae=qe,Le=Math.sqrt(se/2))}return new $e(Se/Le,Ae/Le)}const ne=[];for(let ve=0,Ee=te.length,Te=Ee-1,Se=ve+1;ve<Ee;ve++,Te++,Se++)Te===Ee&&(Te=0),Se===Ee&&(Se=0),ne[ve]=G(te[ve],te[Te],te[Se]);const re=[];let U,X=ne.concat();for(let ve=0,Ee=B.length;ve<Ee;ve++){const Te=B[ve];U=[];for(let Se=0,Ae=Te.length,Le=Ae-1,be=Se+1;Se<Ae;Se++,Le++,be++)Le===Ae&&(Le=0),be===Ae&&(be=0),U[Se]=G(Te[Se],Te[Le],Te[be]);re.push(U),X=X.concat(U)}for(let ve=0;ve<S;ve++){const Ee=ve/S,Te=y*Math.cos(Ee*Math.PI/2),Se=M*Math.sin(Ee*Math.PI/2)+w;for(let Ae=0,Le=te.length;Ae<Le;Ae++){const be=ce(te[Ae],ne[Ae],Se);_e(be.x,be.y,-Te)}for(let Ae=0,Le=B.length;Ae<Le;Ae++){const be=B[Ae];U=re[Ae];for(let qe=0,O=be.length;qe<O;qe++){const C=ce(be[qe],U[qe],Se);_e(C.x,C.y,-Te)}}}const Ne=M+w;for(let ve=0;ve<Z;ve++){const Ee=v?ce(A[ve],X[ve],Ne):A[ve];R?(F.copy(k.normals[0]).multiplyScalar(Ee.x),N.copy(k.binormals[0]).multiplyScalar(Ee.y),I.copy(E[0]).add(F).add(N),_e(I.x,I.y,I.z)):_e(Ee.x,Ee.y,0)}for(let ve=1;ve<=m;ve++)for(let Ee=0;Ee<Z;Ee++){const Te=v?ce(A[Ee],X[Ee],Ne):A[Ee];R?(F.copy(k.normals[ve]).multiplyScalar(Te.x),N.copy(k.binormals[ve]).multiplyScalar(Te.y),I.copy(E[ve]).add(F).add(N),_e(I.x,I.y,I.z)):_e(Te.x,Te.y,g/m*ve)}for(let ve=S-1;ve>=0;ve--){const Ee=ve/S,Te=y*Math.cos(Ee*Math.PI/2),Se=M*Math.sin(Ee*Math.PI/2)+w;for(let Ae=0,Le=te.length;Ae<Le;Ae++){const be=ce(te[Ae],ne[Ae],Se);_e(be.x,be.y,g+Te)}for(let Ae=0,Le=B.length;Ae<Le;Ae++){const be=B[Ae];U=re[Ae];for(let qe=0,O=be.length;qe<O;qe++){const C=ce(be[qe],U[qe],Se);R?_e(C.x,C.y+E[m-1].y,E[m-1].x+Te):_e(C.x,C.y,g+Te)}}}Q(),ie();function Q(){const ve=a.length/3;if(v){let Ee=0,Te=Z*Ee;for(let Se=0;Se<ge;Se++){const Ae=J[Se];De(Ae[2]+Te,Ae[1]+Te,Ae[0]+Te)}Ee=m+S*2,Te=Z*Ee;for(let Se=0;Se<ge;Se++){const Ae=J[Se];De(Ae[0]+Te,Ae[1]+Te,Ae[2]+Te)}}else{for(let Ee=0;Ee<ge;Ee++){const Te=J[Ee];De(Te[2],Te[1],Te[0])}for(let Ee=0;Ee<ge;Ee++){const Te=J[Ee];De(Te[0]+Z*m,Te[1]+Z*m,Te[2]+Z*m)}}s.addGroup(ve,a.length/3-ve,0)}function ie(){const ve=a.length/3;let Ee=0;ue(te,Ee),Ee+=te.length;for(let Te=0,Se=B.length;Te<Se;Te++){const Ae=B[Te];ue(Ae,Ee),Ee+=Ae.length}s.addGroup(ve,a.length/3-ve,1)}function ue(ve,Ee){let Te=ve.length;for(;--Te>=0;){const Se=Te;let Ae=Te-1;Ae<0&&(Ae=ve.length-1);for(let Le=0,be=m+S*2;Le<be;Le++){const qe=Z*Le,O=Z*(Le+1),C=Ee+Se+qe,se=Ee+Ae+qe,ye=Ee+Ae+O,pe=Ee+Se+O;Be(C,se,ye,pe)}}}function _e(ve,Ee,Te){f.push(ve),f.push(Ee),f.push(Te)}function De(ve,Ee,Te){He(ve),He(Ee),He(Te);const Se=a.length/3,Ae=D.generateTopUV(s,a,Se-3,Se-2,Se-1);V(Ae[0]),V(Ae[1]),V(Ae[2])}function Be(ve,Ee,Te,Se){He(ve),He(Ee),He(Se),He(Ee),He(Te),He(Se);const Ae=a.length/3,Le=D.generateSideWallUV(s,a,Ae-6,Ae-3,Ae-2,Ae-1);V(Le[0]),V(Le[1]),V(Le[3]),V(Le[1]),V(Le[2]),V(Le[3])}function He(ve){a.push(f[ve*3+0]),a.push(f[ve*3+1]),a.push(f[ve*3+2])}function V(ve){l.push(ve.x),l.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,s=this.parameters.options;return ZT(t,s,e)}static fromJSON(e,t){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const u=t[e.shapes[l]];s.push(u)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new mc[a.type]().fromJSON(a)),new nv(s,e.options)}}const JT={generateTopUV:function(i,e,t,s,a){const l=e[t*3],c=e[t*3+1],u=e[s*3],f=e[s*3+1],h=e[a*3],m=e[a*3+1];return[new $e(l,c),new $e(u,f),new $e(h,m)]},generateSideWallUV:function(i,e,t,s,a,l){const c=e[t*3],u=e[t*3+1],f=e[t*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[a*3],y=e[a*3+1],M=e[a*3+2],w=e[l*3],S=e[l*3+1],x=e[l*3+2];return Math.abs(u-m)<Math.abs(c-h)?[new $e(c,1-f),new $e(h,1-g),new $e(v,1-M),new $e(w,1-x)]:[new $e(u,1-f),new $e(m,1-g),new $e(y,1-M),new $e(S,1-x)]}};function ZT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let s=0,a=i.length;s<a;s++){const l=i[s];t.shapes.push(l.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class iv extends kn{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(c+u,Math.PI);let h=0;const m=[],g=new K,v=new K,y=[],M=[],w=[],S=[];for(let x=0;x<=s;x++){const D=[],E=x/s;let R=0;x===0&&c===0?R=.5/t:x===s&&f===Math.PI&&(R=-.5/t);for(let k=0;k<=t;k++){const N=k/t;g.x=-e*Math.cos(a+N*l)*Math.sin(c+E*u),g.y=e*Math.cos(c+E*u),g.z=e*Math.sin(a+N*l)*Math.sin(c+E*u),M.push(g.x,g.y,g.z),v.copy(g).normalize(),w.push(v.x,v.y,v.z),S.push(N+R,1-E),D.push(h++)}m.push(D)}for(let x=0;x<s;x++)for(let D=0;D<t;D++){const E=m[x][D+1],R=m[x][D],k=m[x+1][D],N=m[x+1][D+1];(x!==0||c>0)&&y.push(E,R,N),(x!==s-1||f<Math.PI)&&y.push(R,k,N)}this.setIndex(y),this.setAttribute("position",new Yt(M,3)),this.setAttribute("normal",new Yt(w,3)),this.setAttribute("uv",new Yt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iv(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rv extends kn{constructor(e=new $0(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,s=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const u=new K,f=new K,h=new $e;let m=new K;const g=[],v=[],y=[],M=[];w(),this.setIndex(M),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(y,2));function w(){for(let E=0;E<t;E++)S(E);S(l===!1?t:0),D(),x()}function S(E){m=e.getPointAt(E/t,m);const R=c.normals[E],k=c.binormals[E];for(let N=0;N<=a;N++){const F=N/a*Math.PI*2,I=Math.sin(F),L=-Math.cos(F);f.x=L*R.x+I*k.x,f.y=L*R.y+I*k.y,f.z=L*R.z+I*k.z,f.normalize(),v.push(f.x,f.y,f.z),u.x=m.x+s*f.x,u.y=m.y+s*f.y,u.z=m.z+s*f.z,g.push(u.x,u.y,u.z)}}function x(){for(let E=1;E<=t;E++)for(let R=1;R<=a;R++){const k=(a+1)*(E-1)+(R-1),N=(a+1)*E+(R-1),F=(a+1)*E+R,I=(a+1)*(E-1)+R;M.push(k,N,I),M.push(N,F,I)}}function D(){for(let E=0;E<=t;E++)for(let R=0;R<=a;R++)h.x=E/t,h.y=R/a,y.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new rv(new mc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class G2 extends kn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],s=new Set,a=new K,l=new K;if(e.index!==null){const c=e.attributes.position,u=e.index;let f=e.groups;f.length===0&&(f=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,m=f.length;h<m;++h){const g=f[h],v=g.start,y=g.count;for(let M=v,w=v+y;M<w;M+=3)for(let S=0;S<3;S++){const x=u.getX(M+S),D=u.getX(M+(S+1)%3);a.fromBufferAttribute(c,x),l.fromBufferAttribute(c,D),Vg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}}else{const c=e.attributes.position;for(let u=0,f=c.count/3;u<f;u++)for(let h=0;h<3;h++){const m=3*u+h,g=3*u+(h+1)%3;a.fromBufferAttribute(c,m),l.fromBufferAttribute(c,g),Vg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new Yt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Vg(i,e,t){const s=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(s)===!0||t.has(a)===!0?!1:(t.add(s),t.add(a),!0)}class W2 extends vs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new bt(16777215),this.specular=new bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class j2 extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Gg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class QT{constructor(e,t,s){const a=this;let l=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){u++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,u),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,u),c===u&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const e2=new QT;class wf{constructor(e){this.manager=e!==void 0?e:e2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wf.DEFAULT_MATERIAL_NAME="__DEFAULT";class t2 extends wf{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Gg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const u=vo("img");function f(){m(),Gg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){m(),a&&a(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),l.manager.itemStart(e),u.src=e,u}}class n2 extends wf{constructor(e){super(e)}load(e,t,s,a){const l=new Ln,c=new t2(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){l.image=u,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class sv extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xd=new Bt,Wg=new K,jg=new K;class i2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wg),jg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jg),t.updateMatrixWorld(),Xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r2 extends i2{constructor(){super(new F0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class X2 extends sv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new r2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class q2 extends sv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Y2 extends kn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xg(){return(typeof performance>"u"?Date:performance).now()}class K2 extends xT{constructor(e,t,s=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const qg=new Bt;class J2{constructor(e,t,s=0,a=1/0){this.ray=new xf(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new _f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qg),this}intersectObject(e,t=!0,s=[]){return lf(e,this,s,t),s.sort(Yg),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)lf(e[a],this,s,t);return s.sort(Yg),s}}function Yg(i,e){return i.distance-e.distance}function lf(i,e,t,s){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=i.children;for(let c=0,u=l.length;c<u;c++)lf(l[c],e,t,!0)}}class Z2{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(fn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const $g=new K,tc=new K;class Q2{constructor(e=new K,t=new K){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){$g.subVectors(e,this.start),tc.subVectors(this.end,this.start);const s=tc.dot(tc);let l=tc.dot($g)/s;return t&&(l=fn(l,0,1)),l}closestPointToPoint(e,t,s){const a=this.closestPointToPointParameter(e,t);return this.delta(s).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class eA{constructor(){this.type="ShapePath",this.color=new bt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new sf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,s,a){return this.currentPath.quadraticCurveTo(e,t,s,a),this}bezierCurveTo(e,t,s,a,l,c){return this.currentPath.bezierCurveTo(e,t,s,a,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const D=[];for(let E=0,R=x.length;E<R;E++){const k=x[E],N=new sc;N.curves=k.curves,D.push(N)}return D}function s(x,D){const E=D.length;let R=!1;for(let k=E-1,N=0;N<E;k=N++){let F=D[k],I=D[N],L=I.x-F.x,A=I.y-F.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(F=D[N],L=-L,I=D[k],A=-A),x.y<F.y||x.y>I.y)continue;if(x.y===F.y){if(x.x===F.x)return!0}else{const B=A*(x.x-F.x)-L*(x.y-F.y);if(B===0)return!0;if(B<0)continue;R=!R}}else{if(x.y!==F.y)continue;if(I.x<=x.x&&x.x<=F.x||F.x<=x.x&&x.x<=I.x)return!0}}return R}const a=ca.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,u,f;const h=[];if(l.length===1)return u=l[0],f=new sc,f.curves=u.curves,h.push(f),h;let m=!a(l[0].getPoints());m=e?!m:m;const g=[],v=[];let y=[],M=0,w;v[M]=void 0,y[M]=[];for(let x=0,D=l.length;x<D;x++)u=l[x],w=u.getPoints(),c=a(w),c=e?!c:c,c?(!m&&v[M]&&M++,v[M]={s:new sc,p:w},v[M].s.curves=u.curves,m&&M++,y[M]=[]):y[M].push({h:u,p:w[0]});if(!v[0])return t(l);if(v.length>1){let x=!1,D=0;for(let E=0,R=v.length;E<R;E++)g[E]=[];for(let E=0,R=v.length;E<R;E++){const k=y[E];for(let N=0;N<k.length;N++){const F=k[N];let I=!0;for(let L=0;L<v.length;L++)s(F.p,v[L].p)&&(E!==L&&D++,I?(I=!1,g[L].push(F)):x=!0);I&&g[E].push(F)}}D>0&&x===!1&&(y=g)}let S;for(let x=0,D=v.length;x<D;x++){f=v[x].s,h.push(f),S=y[x];for(let E=0,R=S.length;E<R;E++)f.holes.push(S[E].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);const Kg=i=>{const e=i.getUTCFullYear(),t=Date.UTC(e+1,0,1)-Date.UTC(e,0,1)===366*864e5?366:365,s=Math.floor((Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate())-Date.UTC(i.getUTCFullYear(),0,0))/864e5),a=i.getUTCHours()*60+i.getUTCMinutes()+i.getUTCSeconds()/60,l=2*Math.PI*(s-1+(a/60-12)/24)/t,c=.006918-.399912*Math.cos(l)+.070257*Math.sin(l)-.006758*Math.cos(2*l)+907e-6*Math.sin(2*l)-.002697*Math.cos(3*l)+.00148*Math.sin(3*l),u=229.18*(75e-6+.001868*Math.cos(l)-.032077*Math.sin(l)-.014615*Math.cos(2*l)-.040849*Math.sin(2*l)),f=(720-(a+u))/4*(Math.PI/180);return new K(Math.cos(c)*Math.sin(f),Math.sin(c),Math.cos(c)*Math.cos(f)).normalize()},s2=()=>"/pr-preview/pr-70/data/clouds/latest.png",a2=-Math.PI/2,o2=.35,qd=i=>i.clone().applyAxisAngle(new K(0,1,0),-a2),l2=({globe:i,time:e,getTime:t,nightEnabled:s,cloudsEnabled:a,cloudVersion:l=""})=>{const c=fe.useMemo(()=>{const D=new j0(new Uint8Array([255,255,255,0]),1,1,Ci);return D.needsUpdate=!0,D},[]),u=fe.useRef({sunDirection:{value:new K},enabled:{value:1}}),f=fe.useRef({map:{value:c},enabled:{value:0},opacity:{value:o2}}),h=fe.useRef(null),m=e.getTime(),g=fe.useMemo(()=>Kg(new Date(m)),[m]),v=fe.useMemo(()=>{const D=s2();return l?`${D}${D.includes("?")?"&":"?"}v=${encodeURIComponent(l)}`:D},[l]),y=fe.useRef(g),M=fe.useRef(e),w=fe.useRef(t),S=!!t,x=fe.useRef(s);return y.current=g,M.current=e,w.current=t,x.current=s,fe.useEffect(()=>{if(!i)return;const D=[];i.scene().traverse(A=>{const B=A;D.length===0&&B.type==="Mesh"&&B.__globeObjType==="globe"&&D.push(B)});const E=D[0];if(!E)return;const R=E.material;if(Array.isArray(R)||R.type!=="MeshPhongMaterial")return;const k=R,N=k.onBeforeCompile,F=k.customProgramCacheKey,I=u.current,L=f.current;return I.sunDirection.value.copy(qd(y.current)),I.enabled.value=x.current?1:0,k.onBeforeCompile=(A,B)=>{N.call(k,A,B),A.uniforms.orbitradarSunDirection=I.sunDirection,A.uniforms.orbitradarNightEnabled=I.enabled,A.uniforms.orbitradarCloudMap=L.map,A.uniforms.orbitradarCloudEnabled=L.enabled,A.uniforms.orbitradarCloudOpacity=L.opacity,A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
varying vec3 orbitradarSurfaceNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
orbitradarSurfaceNormal = normalize(objectNormal);`),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 orbitradarSurfaceNormal;
uniform vec3 orbitradarSunDirection;
uniform float orbitradarNightEnabled;
uniform sampler2D orbitradarCloudMap;
uniform float orbitradarCloudEnabled;
uniform float orbitradarCloudOpacity;`).replace("#include <opaque_fragment>",`float orbitradarDaylight = dot(normalize(orbitradarSurfaceNormal), normalize(orbitradarSunDirection));
float orbitradarDay = smoothstep(-0.22, 0.12, orbitradarDaylight);
vec3 orbitradarNightColor = outgoingLight * vec3(0.04, 0.07, 0.16);
outgoingLight = mix(outgoingLight, mix(orbitradarNightColor, outgoingLight, orbitradarDay), orbitradarNightEnabled);
vec4 orbitradarCloudSample = texture2D(orbitradarCloudMap, vMapUv);
vec3 orbitradarCloudNightColor = vec3(0.12, 0.16, 0.26);
vec3 orbitradarCloudColor = mix(orbitradarCloudNightColor, vec3(1.0), mix(1.0, orbitradarDay, orbitradarNightEnabled));
float orbitradarCloudAlpha = orbitradarCloudSample.a * orbitradarCloudOpacity * orbitradarCloudEnabled;
outgoingLight = mix(outgoingLight, orbitradarCloudColor, orbitradarCloudAlpha);
#include <opaque_fragment>`)},k.customProgramCacheKey=()=>`${F.call(k)}-orbitradar-cloud-surface-v3`,k.needsUpdate=!0,()=>{k.onBeforeCompile=N,k.customProgramCacheKey=F,k.needsUpdate=!0}},[i]),fe.useEffect(()=>{const D=u.current;D.enabled.value=s?1:0,D.sunDirection.value.copy(qd(g))},[s,g]),fe.useEffect(()=>{if(!S||typeof window.requestAnimationFrame!="function")return;let D=0;const E=()=>{var N;const R=((N=w.current)==null?void 0:N.call(w))??M.current,k=Kg(R);u.current.enabled.value=x.current?1:0,u.current.sunDirection.value.copy(qd(k)),D=window.requestAnimationFrame(E)};return D=window.requestAnimationFrame(E),()=>window.cancelAnimationFrame(D)},[S]),fe.useEffect(()=>{const D=()=>{h.current&&(h.current.dispose(),h.current=null),f.current.map.value=c,f.current.enabled.value=0};if(!i||!a){D();return}const E=new n2;E.setCrossOrigin("anonymous");let R=!1;return E.load(v,k=>{if(R||!i){k.dispose();return}k.colorSpace=wi,k.wrapS=oc,k.wrapT=Dr,k.minFilter=Ir,k.magFilter=hi,k.generateMipmaps=!0,k.anisotropy=Math.min(4,i.renderer().capabilities.getMaxAnisotropy()),k.needsUpdate=!0,h.current&&h.current.dispose(),h.current=k,f.current.map.value=k,f.current.enabled.value=1},void 0,()=>{}),()=>{R=!0,D()}},[i,a,v,c]),fe.useEffect(()=>()=>{c.dispose()},[c]),null},c2=(i,e)=>{const t=s=>{s.preventDefault(),e()};return i.addEventListener("webglcontextlost",t),()=>i.removeEventListener("webglcontextlost",t)},u2=({isPaused:i,isTimeLapseActive:e,getTime:t})=>{const[s,a]=fe.useState(()=>t()),l=fe.useRef(t);l.current=t,fe.useEffect(()=>{const f=()=>{const m=l.current();a(g=>g.getTime()===m.getTime()?g:m)};f();const h=window.setInterval(f,100);return()=>window.clearInterval(h)},[]);const c=e?`.${Math.floor(s.getUTCMilliseconds()/100)}`:"",u=i?"Paused local":e?"Simulation local":"Live local";return z.jsx("div",{className:"pointer-events-none absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-20 rounded-lg border border-white/15 bg-slate-950/75 px-2.5 py-1.5 text-right text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5",children:z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("p",{className:"hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:block",children:u}),z.jsxs("time",{className:"text-[11px] font-semibold tabular-nums sm:text-xs",dateTime:s.toISOString(),children:[z.jsxs("span",{className:"sm:hidden",children:[s.toLocaleTimeString(void 0,{timeStyle:"medium"}),c]}),z.jsxs("span",{className:"hidden sm:inline",children:[s.toLocaleString(void 0,{dateStyle:"short",timeStyle:"medium"}),c]})]})]})})},gc={fresh:"text-emerald-300",delayed:"text-amber-300",stale:"text-rose-300",unavailable:"text-slate-400"},cf=({status:i})=>z.jsx("span",{"aria-hidden":"true",className:`inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current ${gc[i.level]}`}),Jg=({name:i,status:e})=>z.jsxs("span",{className:"inline-flex min-w-0 items-center gap-1.5",children:[z.jsx(cf,{status:e}),z.jsx("span",{className:"truncate",children:i}),z.jsx("span",{className:gc[e.level],children:e.label}),z.jsxs("span",{className:"text-slate-500",children:["· ",e.relativeAge]})]}),Zg=({satellite:i,cloud:e,compact:t=!1})=>t?z.jsxs("div",{"aria-label":"Data freshness",className:"flex flex-wrap gap-x-3 gap-y-1 text-[0.68rem] font-semibold text-slate-300",role:"status",children:[z.jsx(Jg,{name:"Satellites",status:i}),z.jsx(Jg,{name:"Clouds",status:e})]}):z.jsxs("section",{"aria-label":"Data freshness",className:"mt-4 rounded-xl border border-white/10 bg-white/5 p-3",children:[z.jsx("h3",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300",children:"Data freshness"}),z.jsxs("dl",{className:"mt-3 space-y-3 text-xs",children:[z.jsxs("div",{children:[z.jsxs("dt",{className:"flex items-center gap-2 font-semibold text-slate-200",children:[z.jsx(cf,{status:i})," Satellite catalog",z.jsx("span",{className:gc[i.level],children:i.label})]}),z.jsx("dd",{className:"mt-1 pl-3.5 text-slate-400",children:i.sourceTimestamp?`${i.relativeAge} · updated ${i.localTime}`:"No published snapshot timestamp available"})]}),z.jsxs("div",{children:[z.jsxs("dt",{className:"flex items-center gap-2 font-semibold text-slate-200",children:[z.jsx(cf,{status:e})," Cloud analysis",z.jsx("span",{className:gc[e.level],children:e.label})]}),z.jsxs("dd",{className:"mt-1 pl-3.5 text-slate-400",children:[e.sourceTimestamp?`${e.relativeAge} · valid ${e.localTime}`:"No published cloud analysis timestamp available",e.modelCycle&&z.jsxs("span",{className:"block text-slate-500",children:["NOAA cycle ",e.modelCycle]}),e.publishedAt&&z.jsxs("span",{className:"block text-slate-500",children:["Published ",new Date(e.publishedAt).toLocaleString()]})]})]})]})]}),d2=i=>new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(new Date(i)),f2=(i,e=Date.now())=>{if(!i)return"unavailable";const t=Date.parse(i);if(Number.isNaN(t))return"unavailable";const s=Math.max(0,e-t),a=Math.floor(s/6e4);if(a<1)return"just now";if(a<60)return`${a} min ago`;const l=Math.floor(a/60);return l<24?`${l}h ago`:`${Math.floor(l/24)}d ago`},Qg=({timestamp:i,publisherState:e,maxAgeMs:t,now:s=Date.now(),publishedAt:a=null,modelCycle:l=null})=>{const c=i?Date.parse(i):Number.NaN,u=i&&!Number.isNaN(c)?i:null,f=e!==void 0&&e!=="ready",h=u?Math.max(0,s-Date.parse(u)):Number.POSITIVE_INFINITY,m=u?f?"stale":h<=t?"fresh":"delayed":"unavailable";return{level:m,label:m==="fresh"?"Fresh":m==="delayed"?"Delayed":m==="stale"?"Stale":"Unavailable",relativeAge:f2(u,s),localTime:u?d2(u):null,sourceTimestamp:u,publishedAt:a,modelCycle:l,publisherState:e}},h2=60*60*1e3,p2=60*1e3,m2="/pr-preview/pr-70/data/catalog-status.json",g2="/pr-preview/pr-70/data/cloud-status.json",av=i=>i==="ready"||i==="paused"||i==="error"||i==="stale"?i:void 0,uf=i=>typeof i=="string"&&!Number.isNaN(Date.parse(i))?i:null,v2=i=>{if(!i||typeof i!="object")return null;const e=i;return{state:av(e.state),fetchedAt:uf(e.fetchedAt)}},x2=i=>{if(!i||typeof i!="object")return null;const e=i;return e.sourceId!=="noaa-gfs-tcc"?null:{state:av(e.state),sourceId:e.sourceId,fetchedAt:uf(e.fetchedAt),validAt:uf(e.validAt),modelCycle:typeof e.modelCycle=="string"?e.modelCycle:null}},e0=async i=>{try{const e=await fetch(i,{cache:"no-cache"});return e.ok?await e.json():null}catch{return null}},_2=i=>{const[e,t]=fe.useState(null),[s,a]=fe.useState(null),[l,c]=fe.useState(()=>Date.now()),u=fe.useCallback(async()=>{const[f,h]=await Promise.all([e0(m2),e0(g2)]),m=v2(f),g=x2(h);m&&t(m),g&&a(g)},[]);return fe.useEffect(()=>{u();const f=window.setInterval(u,h2),h=()=>{document.hidden||u()};return document.addEventListener("visibilitychange",h),()=>{window.clearInterval(f),document.removeEventListener("visibilitychange",h)}},[u]),fe.useEffect(()=>{const f=window.setInterval(()=>c(Date.now()),p2);return()=>window.clearInterval(f)},[]),fe.useMemo(()=>({satellite:Qg({timestamp:i??(e==null?void 0:e.fetchedAt)??null,publisherState:e==null?void 0:e.state,maxAgeMs:4*60*60*1e3,now:l}),cloud:Qg({timestamp:(s==null?void 0:s.validAt)??null,publisherState:s==null?void 0:s.state,maxAgeMs:12*60*60*1e3,now:l,publishedAt:(s==null?void 0:s.fetchedAt)??null,modelCycle:(s==null?void 0:s.modelCycle)??null}),cloudVersion:(s==null?void 0:s.fetchedAt)??""}),[e,s,l,i])},Yd=12,$d=50,y2="#ffd166",S2=1.8,M2=()=>"rgba(255, 165, 0, 0.9)",E2=()=>y2,w2=fe.lazy(()=>i0(()=>import("./react-globe.gl-CH2Kjf-N.js"),[])),T2=fe.lazy(()=>i0(()=>import("./SatelliteMarkers-CdIMppQ-.js"),[])),A2=()=>{const i=fe.useRef(),e=fe.useRef(null),[t,s]=fe.useState(!1),[a,l]=fe.useState({width:0,height:0}),[c,u]=fe.useState(!1),[f,h]=fe.useState(0),{settings:m,updateSetting:g,resetSettings:v}=B_();fe.useLayoutEffect(()=>{const we=e.current;if(!we)return;const P=()=>{const le=we.getBoundingClientRect();l({width:Math.max(0,Math.floor(le.width)),height:Math.max(0,Math.floor(le.height))})};if(P(),typeof ResizeObserver>"u")return window.addEventListener("resize",P),()=>window.removeEventListener("resize",P);const q=new ResizeObserver(P);return q.observe(we),()=>q.disconnect()},[]),fe.useEffect(()=>{var P;const we=(P=e.current)==null?void 0:P.querySelector("canvas");if(we)return c2(we,()=>{u(!0),s(!1)})},[t,f]),fe.useEffect(()=>{const we=i.current;if(!t||!we)return;const P=()=>{document.hidden?we.pauseAnimation():we.resumeAnimation()};return P(),document.addEventListener("visibilitychange",P),()=>document.removeEventListener("visibilitychange",P)},[t,f]);const{trackedSatellites:y,selectedNoradId:M,isLoading:w,statusMessage:S,sourceUpdatedAt:x,selectSatellite:D,clearSelection:E,refreshCatalog:R}=b_(m),k=_2(x),N=F_(),{satellitePositions:F,selectedPosition:I,orbitPoints:L,snapshotVersion:A,showOrbit:B,setShowOrbit:Y,followSelected:J,setFollowSelected:te}=L_(y,M,N.currentTime,N.getEffectiveTime),{userLocation:ce,locateUser:Z,clearUserLocation:ge}=D_(),{favorites:G,isFavorite:ne,toggleFavorite:re,clearFavorites:U}=I_(),{isTimeLapseActive:X,isPaused:Ne,speed:Q,speeds:ie,toggleTimeLapse:ue,setTimeLapseSpeed:_e,resetTime:De,getSpeedLabel:Be,getTimeOffsetDisplay:He}=N,{trackedNoradIds:V,isTracked:ve,toggleTracked:Ee,clearTracked:Te,getTrackedColor:Se}=z_(F),{passes:Ae,isCalculating:Le,error:be,calculateForSelected:qe,calculateForTracked:O,clearPasses:C}=k_(y,ce,N.currentTime),[se,ye]=fe.useState(""),[pe,Me]=fe.useState(()=>typeof window.matchMedia=="function"?window.matchMedia("(min-width: 640px)").matches:!0),[je,Ie]=fe.useState("catalog"),[Ue,et]=fe.useState(!1),[Re,Xe]=fe.useState(!1),[T,Je]=fe.useState(!1),[ze,lt]=fe.useState(!1),[dt,ht]=fe.useState(!1),[W,Ge]=fe.useState(null),[me,xe]=fe.useState(0),[Ce,rt]=fe.useState(m.defaultAltitudeFilter),vt=lo(Re,()=>Xe(!1)),wt=lo(T,()=>Je(!1)),Ct=lo(Ue,()=>et(!1));fe.useEffect(()=>{var we,P;!J||!I||(P=i.current)==null||P.pointOfView({lat:I.lat,lng:I.lng,altitude:Math.max(2.1,I.alt*.75+1.5)},(we=window.matchMedia)!=null&&we.call(window,"(prefers-reduced-motion: reduce)").matches?0:120)},[J,I]),fe.useEffect(()=>{rt(m.defaultAltitudeFilter)},[m.defaultAltitudeFilter]),fe.useEffect(()=>{Y(m.showOrbitsByDefault)},[m.showOrbitsByDefault,Y]);const ft=fe.useMemo(()=>Ce==="none"?[]:Ce==="all"?y:y.filter(we=>{const P=h0(we.periodSeconds);return p0(P)===Ce}),[y,Ce]);fe.useEffect(()=>{Ce==="none"&&(D(null),te(!1),Y(!1),C(),lt(!1))},[Ce,C,D,te,Y]);const Rt=fe.useMemo(()=>{const we=se.trim().toLowerCase(),P=ft;if(!we){const q=[25544,20580,25994,33591];return P.filter(le=>q.includes(le.noradId)).slice(0,Yd)}return P.filter(q=>q.name.toLowerCase().includes(we)||q.noradId.toString().includes(we)).slice(0,Yd)},[ft,se]),It=fe.useMemo(()=>y.filter(we=>G.includes(we.noradId)),[y,G]),Ut=fe.useMemo(()=>[...ft].sort((we,P)=>we.name.localeCompare(P.name)),[ft]),Ve=Math.max(1,Math.ceil(Ut.length/$d)),$t=Ut.slice(me*$d,(me+1)*$d),Qt=we=>{D(we),Y(m.showOrbitsByDefault)},rn=()=>{E(),te(!1),Y(!1),C(),lt(!1)},St=()=>{const we=y.find(P=>P.noradId===M);return we?we.name:(I==null?void 0:I.name)??"Unknown"},on=()=>{I&&(qe(I.noradId),lt(!0))},wn=fe.useMemo(()=>F.filter(we=>Ce==="all"||we.altitudeClass===Ce),[F,Ce]),ri=fe.useMemo(()=>ce?[ce]:[],[ce]),Dn=fe.useMemo(()=>Ce!=="none"&&L.length>0?[{points:L}]:[],[Ce,L]),ln=je==="favorites"?It:je==="tracked"?y.filter(we=>V.includes(we.noradId)):Rt;return z.jsxs("div",{className:"relative h-full w-full overflow-hidden bg-black sm:flex",children:[z.jsx("div",{ref:e,className:`absolute inset-0 z-0 ${pe?"sm:left-[22.5rem]":"sm:left-0"}`,children:c?z.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[z.jsx("p",{className:"text-lg font-bold",children:"The globe lost its graphics context."}),z.jsx("p",{className:"text-sm text-slate-300",children:"The satellite explorer remains available."}),z.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:()=>{u(!1),s(!1),h(we=>we+1)},type:"button",children:"Retry globe"})]}):z.jsx(H_,{onRetry:()=>{s(!1),h(we=>we+1)},children:z.jsxs(fe.Suspense,{fallback:z.jsx("div",{role:"status",className:"flex h-full items-center justify-center text-cyan-200",children:"Loading globe…"}),children:[a.width>0&&a.height>0&&z.jsx(w2,{ref:i,width:a.width,height:a.height,onGlobeReady:()=>{const we=i.current;if(!we)return;we.renderer().setPixelRatio(W_(window.devicePixelRatio));const P=we.controls();P.enableDamping=!0,P.dampingFactor=.08,s(!0),we.pointOfView({altitude:3.2})},enablePointerInteraction:!1,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",backgroundColor:"black",showAtmosphere:!0,labelsData:ri,labelLat:"lat",labelLng:"lng",labelText:"name",labelColor:M2,labelSize:1,labelDotRadius:.5,pathsData:Dn,pathPoints:"points",pathPointLat:"lat",pathPointLng:"lng",pathPointAlt:"alt",pathColor:E2,pathStroke:S2,pathTransitionDuration:0}),t&&z.jsx(l2,{globe:i.current??null,time:N.currentTime,getTime:N.getEffectiveTime,nightEnabled:m.nightShading??!0,cloudsEnabled:m.cloudCover??!0,cloudVersion:k.cloudVersion}),t&&z.jsx(fe.Suspense,{fallback:null,children:z.jsx(T2,{globe:i.current??null,positions:wn,snapshotVersion:A,selectedNoradId:M,trackedNoradIds:V,getTrackedColor:Se,onSelect:D})})]})},f)}),z.jsx(u2,{isPaused:Ne,isTimeLapseActive:X,getTime:N.getEffectiveTime}),!pe&&!Re&&!T&&!ze&&!dt&&z.jsxs("section",{className:"absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-20 rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-auto sm:w-96",children:[z.jsxs("div",{className:"flex items-center justify-between gap-4",children:[z.jsxs("div",{className:"min-w-0",children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),z.jsxs("p",{className:"mt-1 text-xl font-bold",children:[ft.length.toLocaleString()," satellites"]})]}),z.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20","aria-expanded":pe,onClick:()=>Me(!0),type:"button",children:"Open panel"})]}),z.jsx(Zg,{satellite:k.satellite,cloud:k.cloud,compact:!0}),z.jsx("p",{className:"mt-2 hidden line-clamp-2 text-sm text-slate-400 sm:block",children:S}),z.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Orbital data:"," ",z.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),z.jsxs("div",{className:"mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0",children:[z.jsxs("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>Xe(!0),type:"button",children:["Favorites (",G.length,")"]}),z.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>Je(!0),type:"button",children:"Time Lapse"}),ce&&I&&z.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:on,type:"button",children:"Predict Pass"}),z.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>ht(!0),type:"button",children:"Settings"})]})]}),pe&&z.jsxs("aside",{className:"absolute bottom-0 left-0 right-0 z-30 h-[42dvh] max-h-[28rem] overflow-y-auto rounded-t-2xl border border-white/15 bg-slate-950/95 p-4 pb-[max(2rem,env(safe-area-inset-bottom))] text-left text-white shadow-2xl backdrop-blur-xl sm:relative sm:h-full sm:max-h-full sm:w-[22.5rem] sm:shrink-0 sm:rounded-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r sm:pb-4",children:[z.jsx("div",{"aria-hidden":"true",className:"mx-auto mb-3 h-1 w-12 rounded-full bg-white/25 sm:hidden"}),z.jsxs("div",{className:"flex items-start justify-between gap-4",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),z.jsx("h2",{className:"mt-1 text-2xl font-bold",children:"Satellite Tracker"})]}),z.jsx("button",{"aria-label":"Close control panel",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold transition hover:bg-white/20",onClick:()=>Me(!1),type:"button",children:"Close"})]}),z.jsx("p",{className:"mt-2 text-sm text-slate-300",children:S}),z.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2",children:[z.jsxs("span",{className:"text-sm font-semibold",children:[y.length.toLocaleString()," satellites"]}),z.jsxs("span",{className:"text-xs text-slate-400",children:[wn.length.toLocaleString()," visible ·"," ",He()]})]}),z.jsx("nav",{"aria-label":"Satellite explorer",className:"mt-3 grid grid-cols-3 gap-1 rounded-xl bg-black/30 p-1",children:["catalog","favorites","tracked"].map(we=>z.jsxs("button",{"aria-pressed":je===we,className:`rounded-lg px-2 py-2 text-xs font-bold capitalize ${je===we?"bg-cyan-500 text-white":"text-slate-300 hover:bg-white/10"}`,onClick:()=>Ie(we),type:"button",children:[we," ",we==="favorites"?G.length:we==="tracked"?V.length:""]},we))}),z.jsx("div",{className:"mt-3 flex gap-1",children:Object.entries(S_).map(([we,P])=>z.jsx("button",{className:`px-2 py-1 rounded-full text-xs transition ${Ce===we?"bg-cyan-500 text-white":"bg-white/10 hover:bg-white/20"}`,"aria-pressed":Ce===we,onClick:()=>{rt(we),g("defaultAltitudeFilter",we)},type:"button",children:P.label},we))}),z.jsxs("label",{className:"mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-400",children:["Find by name or NORAD ID",z.jsx("input",{className:"mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-slate-500 focus:border-cyan-300",onChange:we=>ye(we.target.value),placeholder:"e.g. Starlink, Hubble, 25544",type:"search",value:se})]}),ln.length>0&&z.jsx("div",{className:"mt-2 space-y-1",children:ln.slice(0,je==="catalog"?Yd:void 0).map(we=>z.jsxs("button",{className:`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${we.noradId===M?"bg-cyan-300/20 text-cyan-100":"bg-white/5 hover:bg-white/10"}`,onClick:()=>Qt(we.noradId),type:"button",children:[z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("span",{className:"truncate font-medium",children:we.name}),ne(we.noradId)&&z.jsx("span",{className:"text-yellow-400",children:"★"}),ve(we.noradId)&&z.jsx("span",{className:"text-blue-400",children:"📍"})]}),z.jsx("span",{className:"ml-2 shrink-0 text-xs text-slate-400",children:we.noradId})]},we.noradId))}),ln.length===0&&je!=="catalog"&&z.jsxs("p",{className:"mt-3 text-sm text-slate-400",children:["No ",je," satellites yet."]}),z.jsx("h3",{className:"mt-4 truncate text-lg font-bold",children:(I==null?void 0:I.name)??"Select a satellite"}),I&&z.jsxs("p",{className:"text-xs text-slate-400",children:["NORAD ",I.noradId,Ce!=="all"&&I.altitudeClass!==Ce?" · Outside current filter":""]}),I&&z.jsx("button",{className:"mt-2 text-xs font-semibold text-cyan-300 underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-100",onClick:rn,type:"button",children:"Clear selection"}),z.jsxs("dl",{className:"mt-3 grid grid-cols-2 gap-3 text-sm",children:[z.jsx(nc,{label:"Latitude",children:I?rm(I.lat,"N","S"):"—"}),z.jsx(nc,{label:"Longitude",children:I?rm(I.lng,"E","W"):"—"}),z.jsx(nc,{label:"Altitude",children:I?`${I.altitudeKm.toFixed(0)} km`:"—"}),z.jsx(nc,{label:"Speed",children:I!=null&&I.velocityKph?`${I.velocityKph.toLocaleString(void 0,{maximumFractionDigits:0})} km/h`:"—"})]}),z.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[z.jsx(Ui,{onClick:()=>{xe(0),Me(!1),et(!0)},children:"Browse all"}),z.jsx(Ui,{onClick:()=>te(we=>!we),children:J?"Stop following":"Follow selected"}),z.jsx(Ui,{onClick:()=>Y(we=>!we),children:B?"Hide orbit":"Show orbit"}),z.jsx(Ui,{onClick:()=>{var we;return(we=i.current)==null?void 0:we.pointOfView({altitude:Math.max(3.2,...wn.map(P=>P.alt*.75+1.5))},900)},children:"Fit visible"}),z.jsx(Ui,{onClick:()=>{Ge(null),Z().then(we=>{var P;Ge(null),(P=i.current)==null||P.pointOfView({lat:we.lat,lng:we.lng,altitude:1.5},1e3)}).catch(()=>Ge("Location access failed. Check browser permission and try again."))},children:"Locate me"}),z.jsx(Ui,{onClick:R,children:"Refresh"}),I&&z.jsx(Ui,{onClick:()=>re(I.noradId),children:ne(I.noradId)?"★ Favorited":"☆ Favorite"}),I&&z.jsx(Ui,{onClick:()=>{if(!ve(I.noradId)&&V.length>=10){Ge("Tracking is limited to 10 satellites. Remove one before adding another.");return}Ee(I.noradId)},children:ve(I.noradId)?"📍 Tracked":"📍 Track"}),ce&&I&&z.jsx(Ui,{onClick:on,children:"Predict Pass"}),ce&&z.jsx(Ui,{onClick:ge,children:"Clear location"})]}),w&&z.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"Loading the shared satellite snapshot\\u2026"}),W&&z.jsx("p",{role:"status",className:"mt-3 text-sm text-amber-300",children:W}),z.jsx(Zg,{satellite:k.satellite,cloud:k.cloud}),z.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Orbital data:"," ",z.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),V.length>0&&z.jsxs("div",{className:"mt-3",children:[z.jsxs("p",{className:"text-xs text-slate-400 mb-2",children:["Tracking ",V.length," satellites"]}),z.jsx("button",{className:"rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Te,type:"button",children:"Clear all tracked"})]})]}),Re&&z.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:z.jsxs("section",{ref:vt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"favorites-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[z.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Favorites"}),z.jsxs("h2",{id:"favorites-title",className:"mt-1 text-2xl font-bold",children:[G.length," Favorite Satellites"]}),z.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Quick access to your favorite satellites."})]}),z.jsx("button",{"aria-label":"Close favorites",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Xe(!1),type:"button",children:"Close"})]}),z.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:It.length>0?It.map(we=>z.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${we.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Qt(we.noradId),Xe(!1)},type:"button",children:[z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("span",{className:"truncate font-medium",children:we.name}),ve(we.noradId)&&z.jsx("span",{className:"text-blue-400",children:"📍"})]}),z.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:we.noradId})]},we.noradId)):z.jsx("p",{className:"p-4 text-center text-slate-400",children:"No favorites yet. Add satellites to favorites from the control panel."})}),G.length>0&&z.jsx("footer",{className:"flex justify-end gap-3 border-t border-white/10 p-4",children:z.jsx("button",{className:"rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/30",onClick:U,type:"button",children:"Clear all favorites"})})]})}),T&&z.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:z.jsxs("section",{ref:wt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"timelapse-title",className:"flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[z.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Time Lapse"}),z.jsx("h2",{id:"timelapse-title",className:"mt-1 text-2xl font-bold",children:"Time Lapse Controls"}),z.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Watch satellite movement at accelerated speeds."})]}),z.jsx("button",{"aria-label":"Close time lapse controls",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Je(!1),type:"button",children:"Close"})]}),z.jsx("div",{className:"flex-1 p-4",children:z.jsxs("div",{className:"space-y-4",children:[z.jsxs("div",{className:"flex items-center justify-between",children:[z.jsx("span",{className:"text-sm text-slate-300",children:"Status"}),z.jsx("span",{className:`rounded-full px-3 py-1 text-sm ${X?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:X?"Active":"Stopped"})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block text-sm text-slate-300 mb-2",children:"Speed"}),z.jsx("div",{className:"grid grid-cols-4 gap-2",children:ie.map(we=>z.jsx("button",{className:`rounded-lg border px-3 py-2 text-sm transition ${Q===we?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>_e(we),type:"button",children:Be(we)},we))})]}),z.jsxs("div",{className:"flex gap-2",children:[z.jsxs("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:ue,type:"button",children:[X?"Stop":"Start"," Time Lapse"]}),z.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20",onClick:De,type:"button",children:"Reset to Now"})]})]})})]})}),ze&&I&&z.jsx(V_,{passes:Ae,isCalculating:Le,error:be,onClose:()=>{C(),lt(!1)},onCalculateTracked:()=>{O([...new Set([...V,I.noradId])])},selectedSatelliteName:St()}),dt&&z.jsx(G_,{settings:m,onUpdate:g,onReset:v,onClose:()=>ht(!1)}),Ue&&z.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:z.jsxs("section",{ref:Ct,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"catalog-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[z.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[z.jsxs("div",{children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),z.jsxs("h2",{id:"catalog-title",className:"mt-1 text-2xl font-bold",children:["All ",Ut.length.toLocaleString()," satellites"]}),z.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Select any satellite to view its telemetry and orbit."})]}),z.jsx("button",{"aria-label":"Close satellite catalog",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>et(!1),type:"button",children:"Close"})]}),z.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:$t.map(we=>z.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${we.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Qt(we.noradId),et(!1)},type:"button",children:[z.jsxs("div",{className:"flex items-center gap-2",children:[z.jsx("span",{className:"truncate font-medium",children:we.name}),ne(we.noradId)&&z.jsx("span",{className:"text-yellow-400",children:"★"}),ve(we.noradId)&&z.jsx("span",{className:"text-blue-400",children:"📍"})]}),z.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:we.noradId})]},we.noradId))}),z.jsxs("footer",{className:"flex items-center justify-between gap-3 border-t border-white/10 p-4",children:[z.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:me===0,onClick:()=>xe(we=>Math.max(0,we-1)),type:"button",children:"Previous"}),z.jsxs("p",{className:"text-sm text-slate-400",children:["Page ",me+1," of ",Ve]}),z.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:me>=Ve-1,onClick:()=>xe(we=>Math.min(Ve-1,we+1)),type:"button",children:"Next"})]})]})})]})},nc=({label:i,children:e})=>z.jsxs("div",{className:"rounded-xl bg-white/10 p-3",children:[z.jsx("dt",{className:"text-slate-400",children:i}),z.jsx("dd",{className:"font-semibold",children:e})]}),Ui=({children:i,onClick:e})=>z.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20",onClick:e,type:"button",children:i}),C2=()=>z.jsxs("main",{className:"relative h-[100dvh] w-full overflow-hidden bg-black",children:[z.jsxs("header",{className:"pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-4 pb-10 pt-[max(1rem,env(safe-area-inset-top))] text-center text-white",children:[z.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90",children:"Orbit Radar"}),z.jsx("h1",{className:"mt-1 text-2xl font-black drop-shadow-lg sm:text-4xl",children:"Satellite Tracker"})]}),z.jsx(A2,{})]});Kx.createRoot(document.getElementById("root")).render(z.jsx(n0.StrictMode,{children:z.jsx(C2,{})}));export{So as $,V2 as A,kn as B,bt as C,tr as D,nv as E,Yt as F,Yl as G,Ri as H,Lg as I,J0 as J,P0 as K,Q2 as L,Bt as M,aa as N,En as O,Yn as P,rv as Q,n0 as R,kr as S,D2 as T,RS as U,$e as V,G2 as W,LT as X,ki as Y,ga as Z,L2 as _,K as a,N2 as a0,Z2 as a1,xf as a2,ls as a3,F0 as a4,ps as a5,yc as a6,Ur as a7,$2 as a8,k2 as a9,Ti as aa,B2 as ab,J2 as ac,hf as ad,X2 as ae,q2 as af,Mo as ag,F2 as ah,H2 as ai,O2 as aj,R2 as ak,P2 as al,pi as b,xT as c,W0 as d,U2 as e,I2 as f,t0 as g,Oi as h,bi as i,K2 as j,va as k,yn as l,gs as m,z2 as n,Y2 as o,Ke as p,eA as q,fe as r,iv as s,j2 as t,ST as u,yT as v,Z0 as w,n2 as x,wi as y,W2 as z};
