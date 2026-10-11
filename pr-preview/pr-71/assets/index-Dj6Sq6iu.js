var Bx=Object.defineProperty;var Hx=(i,e,t)=>e in i?Bx(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var jp=(i,e,t)=>Hx(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function i0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var nd={exports:{}},Za={},id={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function Vx(){if(Xp)return At;Xp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function y(O,$,Pe){this.props=O,this.context=$,this.refs=w,this.updater=Pe||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(O,$,Pe){this.props=O,this.context=$,this.refs=w,this.updater=Pe||S}var T=D.prototype=new x;T.constructor=D,M(T,y.prototype),T.isPureReactComponent=!0;var L=Array.isArray,z=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function I(O,$,Pe){var Z,re={},ce=null,_e=null;if($!=null)for(Z in $.ref!==void 0&&(_e=$.ref),$.key!==void 0&&(ce=""+$.key),$)z.call($,Z)&&!U.hasOwnProperty(Z)&&(re[Z]=$[Z]);var Ne=arguments.length-2;if(Ne===1)re.children=Pe;else if(1<Ne){for(var ke=Array(Ne),Be=0;Be<Ne;Be++)ke[Be]=arguments[Be+2];re.children=ke}if(O&&O.defaultProps)for(Z in Ne=O.defaultProps,Ne)re[Z]===void 0&&(re[Z]=Ne[Z]);return{$$typeof:i,type:O,key:ce,ref:_e,props:re,_owner:N.current}}function A(O,$){return{$$typeof:i,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function B(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Pe){return $[Pe]})}var Q=/\/+/g;function q(O,$){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):$.toString(36)}function ie(O,$,Pe,Z,re){var ce=typeof O;(ce==="undefined"||ce==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(ce){case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case i:case e:_e=!0}}if(_e)return _e=O,re=re(_e),O=Z===""?"."+q(_e,0):Z,L(re)?(Pe="",O!=null&&(Pe=O.replace(Q,"$&/")+"/"),ie(re,$,Pe,"",function(Be){return Be})):re!=null&&(b(re)&&(re=A(re,Pe+(!re.key||_e&&_e.key===re.key?"":(""+re.key).replace(Q,"$&/")+"/")+O)),$.push(re)),1;if(_e=0,Z=Z===""?".":Z+":",L(O))for(var Ne=0;Ne<O.length;Ne++){ce=O[Ne];var ke=Z+q(ce,Ne);_e+=ie(ce,$,Pe,ke,re)}else if(ke=v(O),typeof ke=="function")for(O=ke.call(O),Ne=0;!(ce=O.next()).done;)ce=ce.value,ke=Z+q(ce,Ne++),_e+=ie(ce,$,Pe,ke,re);else if(ce==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return _e}function fe(O,$,Pe){if(O==null)return O;var Z=[],re=0;return ie(O,Z,"","",function(ce){return $.call(Pe,ce,re++)}),Z}function Y(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(Pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Pe)},function(Pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Pe)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var me={current:null},W={transition:null},ee={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:W,ReactCurrentOwner:N};function ne(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:fe,forEach:function(O,$,Pe){fe(O,function(){$.apply(this,arguments)},Pe)},count:function(O){var $=0;return fe(O,function(){$++}),$},toArray:function(O){return fe(O,function($){return $})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},At.Component=y,At.Fragment=t,At.Profiler=a,At.PureComponent=D,At.StrictMode=s,At.Suspense=f,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,At.act=ne,At.cloneElement=function(O,$,Pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Z=M({},O.props),re=O.key,ce=O.ref,_e=O._owner;if($!=null){if($.ref!==void 0&&(ce=$.ref,_e=N.current),$.key!==void 0&&(re=""+$.key),O.type&&O.type.defaultProps)var Ne=O.type.defaultProps;for(ke in $)z.call($,ke)&&!U.hasOwnProperty(ke)&&(Z[ke]=$[ke]===void 0&&Ne!==void 0?Ne[ke]:$[ke])}var ke=arguments.length-2;if(ke===1)Z.children=Pe;else if(1<ke){Ne=Array(ke);for(var Be=0;Be<ke;Be++)Ne[Be]=arguments[Be+2];Z.children=Ne}return{$$typeof:i,type:O.type,key:re,ref:ce,props:Z,_owner:_e}},At.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},At.createElement=I,At.createFactory=function(O){var $=I.bind(null,O);return $.type=O,$},At.createRef=function(){return{current:null}},At.forwardRef=function(O){return{$$typeof:u,render:O}},At.isValidElement=b,At.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:Y}},At.memo=function(O,$){return{$$typeof:h,type:O,compare:$===void 0?null:$}},At.startTransition=function(O){var $=W.transition;W.transition={};try{O()}finally{W.transition=$}},At.unstable_act=ne,At.useCallback=function(O,$){return me.current.useCallback(O,$)},At.useContext=function(O){return me.current.useContext(O)},At.useDebugValue=function(){},At.useDeferredValue=function(O){return me.current.useDeferredValue(O)},At.useEffect=function(O,$){return me.current.useEffect(O,$)},At.useId=function(){return me.current.useId()},At.useImperativeHandle=function(O,$,Pe){return me.current.useImperativeHandle(O,$,Pe)},At.useInsertionEffect=function(O,$){return me.current.useInsertionEffect(O,$)},At.useLayoutEffect=function(O,$){return me.current.useLayoutEffect(O,$)},At.useMemo=function(O,$){return me.current.useMemo(O,$)},At.useReducer=function(O,$,Pe){return me.current.useReducer(O,$,Pe)},At.useRef=function(O){return me.current.useRef(O)},At.useState=function(O){return me.current.useState(O)},At.useSyncExternalStore=function(O,$,Pe){return me.current.useSyncExternalStore(O,$,Pe)},At.useTransition=function(){return me.current.useTransition()},At.version="18.3.1",At}var qp;function df(){return qp||(qp=1,id.exports=Vx()),id.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function Gx(){if(Yp)return Za;Yp=1;var i=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var m,g={},v=null,S=null;h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(S=f.ref);for(m in f)s.call(f,m)&&!l.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:v,ref:S,props:g,_owner:a.current}}return Za.Fragment=t,Za.jsx=c,Za.jsxs=c,Za}var $p;function Wx(){return $p||($p=1,nd.exports=Gx()),nd.exports}var k=Wx(),de=df();const r0=i0(de);var Tl={},rd={exports:{}},qn={},sd={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function jx(){return Kp||(Kp=1,function(i){function e(W,ee){var ne=W.length;W.push(ee);e:for(;0<ne;){var O=ne-1>>>1,$=W[O];if(0<a($,ee))W[O]=ee,W[ne]=$,ne=O;else break e}}function t(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var ee=W[0],ne=W.pop();if(ne!==ee){W[0]=ne;e:for(var O=0,$=W.length,Pe=$>>>1;O<Pe;){var Z=2*(O+1)-1,re=W[Z],ce=Z+1,_e=W[ce];if(0>a(re,ne))ce<$&&0>a(_e,re)?(W[O]=_e,W[ce]=ne,O=ce):(W[O]=re,W[Z]=ne,O=Z);else if(ce<$&&0>a(_e,ne))W[O]=_e,W[ce]=ne,O=ce;else break e}}return ee}function a(W,ee){var ne=W.sortIndex-ee.sortIndex;return ne!==0?ne:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,u=c.now();i.unstable_now=function(){return c.now()-u}}var f=[],h=[],m=1,g=null,v=3,S=!1,M=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var ee=t(h);ee!==null;){if(ee.callback===null)s(h);else if(ee.startTime<=W)s(h),ee.sortIndex=ee.expirationTime,e(f,ee);else break;ee=t(h)}}function L(W){if(w=!1,T(W),!M)if(t(f)!==null)M=!0,Y(z);else{var ee=t(h);ee!==null&&me(L,ee.startTime-W)}}function z(W,ee){M=!1,w&&(w=!1,x(I),I=-1),S=!0;var ne=v;try{for(T(ee),g=t(f);g!==null&&(!(g.expirationTime>ee)||W&&!B());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var $=O(g.expirationTime<=ee);ee=i.unstable_now(),typeof $=="function"?g.callback=$:g===t(f)&&s(f),T(ee)}else s(f);g=t(f)}if(g!==null)var Pe=!0;else{var Z=t(h);Z!==null&&me(L,Z.startTime-ee),Pe=!1}return Pe}finally{g=null,v=ne,S=!1}}var N=!1,U=null,I=-1,A=5,b=-1;function B(){return!(i.unstable_now()-b<A)}function Q(){if(U!==null){var W=i.unstable_now();b=W;var ee=!0;try{ee=U(!0,W)}finally{ee?q():(N=!1,U=null)}}else N=!1}var q;if(typeof D=="function")q=function(){D(Q)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,fe=ie.port2;ie.port1.onmessage=Q,q=function(){fe.postMessage(null)}}else q=function(){y(Q,0)};function Y(W){U=W,N||(N=!0,q())}function me(W,ee){I=y(function(){W(i.unstable_now())},ee)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(W){W.callback=null},i.unstable_continueExecution=function(){M||S||(M=!0,Y(z))},i.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(W){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var ne=v;v=ee;try{return W()}finally{v=ne}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=v;v=W;try{return ee()}finally{v=ne}},i.unstable_scheduleCallback=function(W,ee,ne){var O=i.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,W){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ne+$,W={id:m++,callback:ee,priorityLevel:W,startTime:ne,expirationTime:$,sortIndex:-1},ne>O?(W.sortIndex=ne,e(h,W),t(f)===null&&W===t(h)&&(w?(x(I),I=-1):w=!0,me(L,ne-O))):(W.sortIndex=$,e(f,W),M||S||(M=!0,Y(z))),W},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(W){var ee=v;return function(){var ne=v;v=ee;try{return W.apply(this,arguments)}finally{v=ne}}}}(ad)),ad}var Jp;function Xx(){return Jp||(Jp=1,sd.exports=jx()),sd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function qx(){if(Zp)return qn;Zp=1;var i=df(),e=Xx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,o,d){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,o,d){if(r===null||typeof r>"u"||S(n,r,o,d))return!0;if(d)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,o,d,p,_,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);y[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);y[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);y[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,r,o,d){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,p,d)&&(o=null),d||p===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,d=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,d?n.setAttributeNS(d,r,o):n.setAttribute(r,o))))}var L=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),W=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Pe=!1;function Z(n,r){if(!n||Pe)return"";Pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var d=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){d=he}n.call(r.prototype)}else{try{throw Error()}catch(he){d=he}n()}}catch(he){if(he&&d&&typeof he.stack=="string"){for(var p=he.stack.split(`
`),_=d.stack.split(`
`),R=p.length-1,H=_.length-1;1<=R&&0<=H&&p[R]!==_[H];)H--;for(;1<=R&&0<=H;R--,H--)if(p[R]!==_[H]){if(R!==1||H!==1)do if(R--,H--,0>H||p[R]!==_[H]){var X=`
`+p[R].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=R&&0<=H);break}}}finally{Pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?$(n):""}function re(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case N:return"Portal";case A:return"Profiler";case I:return"StrictMode";case q:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case Q:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return r=n.displayName||null,r!==null?r:ce(n.type)||"Memo";case Y:r=n._payload,n=n._init;try{return ce(n(r))}catch{}}return null}function _e(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ne(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Be(n){var r=ke(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,_=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(R){d=""+R,_.call(this,R)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return d},setValue:function(R){d=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function V(n){n._valueTracker||(n._valueTracker=Be(n))}function pe(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),d="";return n&&(d=ke(n)?n.checked?"true":"false":n.value),n=d,n!==o?(r.setValue(n),!0):!1}function Se(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function we(n,r){var o=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ee(n,r){var o=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;o=Ne(r.value!=null?r.value:o),n._wrapperState={initialChecked:d,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Te(n,r){r=r.checked,r!=null&&T(n,"checked",r,!1)}function Le(n,r){Te(n,r);var o=Ne(r.value),d=r.type;if(o!=null)d==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Xe(n,r.type,o):r.hasOwnProperty("defaultValue")&&Xe(n,r.type,Ne(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function be(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Xe(n,r,o){(r!=="number"||Se(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var F=Array.isArray;function P(n,r,o,d){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&d&&(n[o].defaultSelected=!0)}else{for(o=""+Ne(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function se(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ye(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(F(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Ne(o)}}function ge(n,r){var o=Ne(r.value),d=Ne(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),d!=null&&(n.defaultValue=""+d)}function Me(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function je(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ce(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?je(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ue,nt=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,d,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,d,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ue=Ue||document.createElement("div"),Ue.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(n){C.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),We[r]=We[n]})});function Je(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||We.hasOwnProperty(n)&&We[n]?(""+r).trim():r+"px"}function Fe(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var d=o.indexOf("--")===0,p=Je(o,r[o],d);o==="float"&&(o="cssFloat"),d?n.setProperty(o,p):n[o]=p}}var ut=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ot(n,r){if(r){if(ut[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function dt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function Ge(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ve=null,xe=null,De=null;function Ye(n){if(n=Fa(n)){if(typeof ve!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Bo(r),ve(n.stateNode,n.type,r))}}function gt(n){xe?De?De.push(n):De=[n]:xe=n}function Et(){if(xe){var n=xe,r=De;if(De=xe=null,Ye(n),r)for(n=0;n<r.length;n++)Ye(r[n])}}function bt(n,r){return n(r)}function mt(){}var Tt=!1;function zt(n,r,o){if(Tt)return n(r,o);Tt=!0;try{return bt(n,r,o)}finally{Tt=!1,(xe!==null||De!==null)&&(mt(),Et())}}function It(n,r){var o=n.stateNode;if(o===null)return null;var d=Bo(o);if(d===null)return null;o=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var He=!1;if(u)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){He=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{He=!1}function rn(n,r,o,d,p,_,R,H,X){var he=Array.prototype.slice.call(arguments,3);try{r.apply(o,he)}catch(Oe){this.onError(Oe)}}var Qt=!1,yt=null,hn=!1,Nn=null,Bn={onError:function(n){Qt=!0,yt=n}};function Dn(n,r,o,d,p,_,R,H,X){Qt=!1,yt=null,rn.apply(Bn,arguments)}function yn(n,r,o,d,p,_,R,H,X){if(Dn.apply(this,arguments),Qt){if(Qt){var he=yt;Qt=!1,yt=null}else throw Error(t(198));hn||(hn=!0,Nn=he)}}function Rt(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function E(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function j(n){if(Rt(n)!==n)throw Error(t(188))}function oe(n){var r=n.alternate;if(!r){if(r=Rt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,d=r;;){var p=o.return;if(p===null)break;var _=p.alternate;if(_===null){if(d=p.return,d!==null){o=d;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===o)return j(p),n;if(_===d)return j(p),r;_=_.sibling}throw Error(t(188))}if(o.return!==d.return)o=p,d=_;else{for(var R=!1,H=p.child;H;){if(H===o){R=!0,o=p,d=_;break}if(H===d){R=!0,d=p,o=_;break}H=H.sibling}if(!R){for(H=_.child;H;){if(H===o){R=!0,o=_,d=p;break}if(H===d){R=!0,d=_,o=p;break}H=H.sibling}if(!R)throw Error(t(189))}}if(o.alternate!==d)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function ae(n){return n=oe(n),n!==null?te(n):null}function te(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=te(n);if(r!==null)return r;n=n.sibling}return null}var Re=e.unstable_scheduleCallback,qe=e.unstable_cancelCallback,et=e.unstable_shouldYield,rt=e.unstable_requestPaint,Ze=e.unstable_now,ft=e.unstable_getCurrentPriorityLevel,lt=e.unstable_ImmediatePriority,wt=e.unstable_UserBlockingPriority,Nt=e.unstable_NormalPriority,kt=e.unstable_LowPriority,Xt=e.unstable_IdlePriority,_t=null,tt=null;function tn(n){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(_t,n,void 0,(n.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Jn,In=Math.log,Kn=Math.LN2;function Jn(n){return n>>>=0,n===0?32:31-(In(n)/Kn|0)|0}var si=64,Ut=4194304;function on(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hn(n,r){var o=n.pendingLanes;if(o===0)return 0;var d=0,p=n.suspendedLanes,_=n.pingedLanes,R=o&268435455;if(R!==0){var H=R&~p;H!==0?d=on(H):(_&=R,_!==0&&(d=on(_)))}else R=o&~p,R!==0?d=on(R):_!==0&&(d=on(_));if(d===0)return 0;if(r!==0&&r!==d&&(r&p)===0&&(p=d&-d,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((d&4)!==0&&(d|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)o=31-xt(r),p=1<<o,d|=n[o],r&=~p;return d}function pn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bi(n,r){for(var o=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var R=31-xt(_),H=1<<R,X=p[R];X===-1?((H&o)===0||(H&d)!==0)&&(p[R]=pn(H,r)):X<=r&&(n.expiredLanes|=H),_&=~H}}function Hr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vr(){var n=si;return si<<=1,(si&4194240)===0&&(si=64),n}function _a(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Gr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-xt(r),n[r]=o}function Tc(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-xt(o),_=1<<p;r[p]=0,d[p]=-1,n[p]=-1,o&=~_}}function ya(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var d=31-xt(o),p=1<<d;p&r|n[d]&r&&(n[d]|=r),o&=~p}}var Dt=0;function Eo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wo,Ac,Tf,Af,bf,bc=!1,To=[],ar=null,or=null,lr=null,Sa=new Map,Ma=new Map,cr=[],lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cf(n,r){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(r.pointerId)}}function Ea(n,r,o,d,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:o,eventSystemFlags:d,nativeEvent:_,targetContainers:[p]},r!==null&&(r=Fa(r),r!==null&&Ac(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function cv(n,r,o,d,p){switch(r){case"focusin":return ar=Ea(ar,n,r,o,d,p),!0;case"dragenter":return or=Ea(or,n,r,o,d,p),!0;case"mouseover":return lr=Ea(lr,n,r,o,d,p),!0;case"pointerover":var _=p.pointerId;return Sa.set(_,Ea(Sa.get(_)||null,n,r,o,d,p)),!0;case"gotpointercapture":return _=p.pointerId,Ma.set(_,Ea(Ma.get(_)||null,n,r,o,d,p)),!0}return!1}function Rf(n){var r=Wr(n.target);if(r!==null){var o=Rt(r);if(o!==null){if(r=o.tag,r===13){if(r=E(o),r!==null){n.blockedOn=r,bf(n.priority,function(){Tf(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ao(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Rc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var d=new o.constructor(o.type,o);G=d,o.target.dispatchEvent(d),G=null}else return r=Fa(o),r!==null&&Ac(r),n.blockedOn=o,!1;r.shift()}return!0}function Pf(n,r,o){Ao(n)&&o.delete(r)}function uv(){bc=!1,ar!==null&&Ao(ar)&&(ar=null),or!==null&&Ao(or)&&(or=null),lr!==null&&Ao(lr)&&(lr=null),Sa.forEach(Pf),Ma.forEach(Pf)}function wa(n,r){n.blockedOn===r&&(n.blockedOn=null,bc||(bc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,uv)))}function Ta(n){function r(p){return wa(p,n)}if(0<To.length){wa(To[0],n);for(var o=1;o<To.length;o++){var d=To[o];d.blockedOn===n&&(d.blockedOn=null)}}for(ar!==null&&wa(ar,n),or!==null&&wa(or,n),lr!==null&&wa(lr,n),Sa.forEach(r),Ma.forEach(r),o=0;o<cr.length;o++)d=cr[o],d.blockedOn===n&&(d.blockedOn=null);for(;0<cr.length&&(o=cr[0],o.blockedOn===null);)Rf(o),o.blockedOn===null&&cr.shift()}var xs=L.ReactCurrentBatchConfig,bo=!0;function dv(n,r,o,d){var p=Dt,_=xs.transition;xs.transition=null;try{Dt=1,Cc(n,r,o,d)}finally{Dt=p,xs.transition=_}}function fv(n,r,o,d){var p=Dt,_=xs.transition;xs.transition=null;try{Dt=4,Cc(n,r,o,d)}finally{Dt=p,xs.transition=_}}function Cc(n,r,o,d){if(bo){var p=Rc(n,r,o,d);if(p===null)Xc(n,r,d,Co,o),Cf(n,d);else if(cv(p,n,r,o,d))d.stopPropagation();else if(Cf(n,d),r&4&&-1<lv.indexOf(n)){for(;p!==null;){var _=Fa(p);if(_!==null&&wo(_),_=Rc(n,r,o,d),_===null&&Xc(n,r,d,Co,o),_===p)break;p=_}p!==null&&d.stopPropagation()}else Xc(n,r,d,null,o)}}var Co=null;function Rc(n,r,o,d){if(Co=null,n=Ge(d),n=Wr(n),n!==null)if(r=Rt(n),r===null)n=null;else if(o=r.tag,o===13){if(n=E(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Co=n,null}function Lf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ft()){case lt:return 1;case wt:return 4;case Nt:case kt:return 16;case Xt:return 536870912;default:return 16}default:return 16}}var ur=null,Pc=null,Ro=null;function Nf(){if(Ro)return Ro;var n,r=Pc,o=r.length,d,p="value"in ur?ur.value:ur.textContent,_=p.length;for(n=0;n<o&&r[n]===p[n];n++);var R=o-n;for(d=1;d<=R&&r[o-d]===p[_-d];d++);return Ro=p.slice(n,1<d?1-d:void 0)}function Po(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function Df(){return!1}function Zn(n){function r(o,d,p,_,R){this._reactName=o,this._targetInst=p,this.type=d,this.nativeEvent=_,this.target=R,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(o=n[H],this[H]=o?o(_):_[H]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Lo:Df,this.isPropagationStopped=Df,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),r}var _s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Zn(_s),Aa=ne({},_s,{view:0,detail:0}),hv=Zn(Aa),Nc,Dc,ba,No=ne({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ba&&(ba&&n.type==="mousemove"?(Nc=n.screenX-ba.screenX,Dc=n.screenY-ba.screenY):Dc=Nc=0,ba=n),Nc)},movementY:function(n){return"movementY"in n?n.movementY:Dc}}),If=Zn(No),pv=ne({},No,{dataTransfer:0}),mv=Zn(pv),gv=ne({},Aa,{relatedTarget:0}),Ic=Zn(gv),vv=ne({},_s,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=Zn(vv),_v=ne({},_s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yv=Zn(_v),Sv=ne({},_s,{data:0}),Uf=Zn(Sv),Mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=wv[n])?!!r[n]:!1}function Uc(){return Tv}var Av=ne({},Aa,{key:function(n){if(n.key){var r=Mv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ev[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),bv=Zn(Av),Cv=ne({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=Zn(Cv),Rv=ne({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),Pv=Zn(Rv),Lv=ne({},_s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=Zn(Lv),Dv=ne({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=Zn(Dv),Uv=[9,13,27,32],Oc=u&&"CompositionEvent"in window,Ca=null;u&&"documentMode"in document&&(Ca=document.documentMode);var Ov=u&&"TextEvent"in window&&!Ca,Ff=u&&(!Oc||Ca&&8<Ca&&11>=Ca),zf=" ",kf=!1;function Bf(n,r){switch(n){case"keyup":return Uv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function Fv(n,r){switch(n){case"compositionend":return Hf(r);case"keypress":return r.which!==32?null:(kf=!0,zf);case"textInput":return n=r.data,n===zf&&kf?null:n;default:return null}}function zv(n,r){if(ys)return n==="compositionend"||!Oc&&Bf(n,r)?(n=Nf(),Ro=Pc=ur=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ff&&r.locale!=="ko"?null:r.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!kv[n.type]:r==="textarea"}function Gf(n,r,o,d){gt(d),r=Fo(r,"onChange"),0<r.length&&(o=new Lc("onChange","change",null,o,d),n.push({event:o,listeners:r}))}var Ra=null,Pa=null;function Bv(n){oh(n,0)}function Do(n){var r=Ts(n);if(pe(r))return n}function Hv(n,r){if(n==="change")return r}var Wf=!1;if(u){var Fc;if(u){var zc="oninput"in document;if(!zc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),zc=typeof jf.oninput=="function"}Fc=zc}else Fc=!1;Wf=Fc&&(!document.documentMode||9<document.documentMode)}function Xf(){Ra&&(Ra.detachEvent("onpropertychange",qf),Pa=Ra=null)}function qf(n){if(n.propertyName==="value"&&Do(Pa)){var r=[];Gf(r,Pa,n,Ge(n)),zt(Bv,r)}}function Vv(n,r,o){n==="focusin"?(Xf(),Ra=r,Pa=o,Ra.attachEvent("onpropertychange",qf)):n==="focusout"&&Xf()}function Gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Do(Pa)}function Wv(n,r){if(n==="click")return Do(r)}function jv(n,r){if(n==="input"||n==="change")return Do(r)}function Xv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mi=typeof Object.is=="function"?Object.is:Xv;function La(n,r){if(mi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),d=Object.keys(r);if(o.length!==d.length)return!1;for(d=0;d<o.length;d++){var p=o[d];if(!f.call(r,p)||!mi(n[p],r[p]))return!1}return!0}function Yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $f(n,r){var o=Yf(n);n=0;for(var d;o;){if(o.nodeType===3){if(d=n+o.textContent.length,n<=r&&d>=r)return{node:o,offset:r-n};n=d}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Yf(o)}}function Kf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jf(){for(var n=window,r=Se();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Se(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function qv(n){var r=Jf(),o=n.focusedElem,d=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Kf(o.ownerDocument.documentElement,o)){if(d!==null&&kc(o)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,_=Math.min(d.start,p);d=d.end===void 0?_:Math.min(d.end,p),!n.extend&&_>d&&(p=d,d=_,_=p),p=$f(o,_);var R=$f(o,d);p&&R&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>d?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yv=u&&"documentMode"in document&&11>=document.documentMode,Ss=null,Bc=null,Na=null,Hc=!1;function Zf(n,r,o){var d=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Hc||Ss==null||Ss!==Se(d)||(d=Ss,"selectionStart"in d&&kc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Na&&La(Na,d)||(Na=d,d=Fo(Bc,"onSelect"),0<d.length&&(r=new Lc("onSelect","select",null,r,o),n.push({event:r,listeners:d}),r.target=Ss)))}function Io(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ms={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Vc={},Qf={};u&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Uo(n){if(Vc[n])return Vc[n];if(!Ms[n])return n;var r=Ms[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Qf)return Vc[n]=r[o];return n}var eh=Uo("animationend"),th=Uo("animationiteration"),nh=Uo("animationstart"),ih=Uo("transitionend"),rh=new Map,sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(n,r){rh.set(n,r),l(r,[n])}for(var Gc=0;Gc<sh.length;Gc++){var Wc=sh[Gc],$v=Wc.toLowerCase(),Kv=Wc[0].toUpperCase()+Wc.slice(1);dr($v,"on"+Kv)}dr(eh,"onAnimationEnd"),dr(th,"onAnimationIteration"),dr(nh,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(ih,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function ah(n,r,o){var d=n.type||"unknown-event";n.currentTarget=o,yn(d,r,void 0,n),n.currentTarget=null}function oh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var d=n[o],p=d.event;d=d.listeners;e:{var _=void 0;if(r)for(var R=d.length-1;0<=R;R--){var H=d[R],X=H.instance,he=H.currentTarget;if(H=H.listener,X!==_&&p.isPropagationStopped())break e;ah(p,H,he),_=X}else for(R=0;R<d.length;R++){if(H=d[R],X=H.instance,he=H.currentTarget,H=H.listener,X!==_&&p.isPropagationStopped())break e;ah(p,H,he),_=X}}}if(hn)throw n=Nn,hn=!1,Nn=null,n}function Gt(n,r){var o=r[Zc];o===void 0&&(o=r[Zc]=new Set);var d=n+"__bubble";o.has(d)||(lh(r,n,2,!1),o.add(d))}function jc(n,r,o){var d=0;r&&(d|=4),lh(o,n,d,r)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[Oo]){n[Oo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Jv.has(o)||jc(o,!1,n),jc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Oo]||(r[Oo]=!0,jc("selectionchange",!1,r))}}function lh(n,r,o,d){switch(Lf(r)){case 1:var p=dv;break;case 4:p=fv;break;default:p=Cc}o=p.bind(null,r,o,n),p=void 0,!He||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Xc(n,r,o,d,p){var _=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var R=d.tag;if(R===3||R===4){var H=d.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(R===4)for(R=d.return;R!==null;){var X=R.tag;if((X===3||X===4)&&(X=R.stateNode.containerInfo,X===p||X.nodeType===8&&X.parentNode===p))return;R=R.return}for(;H!==null;){if(R=Wr(H),R===null)return;if(X=R.tag,X===5||X===6){d=_=R;continue e}H=H.parentNode}}d=d.return}zt(function(){var he=_,Oe=Ge(o),ze=[];e:{var Ie=rh.get(n);if(Ie!==void 0){var Qe=Lc,st=n;switch(n){case"keypress":if(Po(o)===0)break e;case"keydown":case"keyup":Qe=bv;break;case"focusin":st="focus",Qe=Ic;break;case"focusout":st="blur",Qe=Ic;break;case"beforeblur":case"afterblur":Qe=Ic;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Pv;break;case eh:case th:case nh:Qe=xv;break;case ih:Qe=Nv;break;case"scroll":Qe=hv;break;case"wheel":Qe=Iv;break;case"copy":case"cut":case"paste":Qe=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Of}var at=(r&4)!==0,nn=!at&&n==="scroll",le=at?Ie!==null?Ie+"Capture":null:Ie;at=[];for(var K=he,ue;K!==null;){ue=K;var Ve=ue.stateNode;if(ue.tag===5&&Ve!==null&&(ue=Ve,le!==null&&(Ve=It(K,le),Ve!=null&&at.push(Ua(K,Ve,ue)))),nn)break;K=K.return}0<at.length&&(Ie=new Qe(Ie,st,null,o,Oe),ze.push({event:Ie,listeners:at}))}}if((r&7)===0){e:{if(Ie=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Ie&&o!==G&&(st=o.relatedTarget||o.fromElement)&&(Wr(st)||st[Hi]))break e;if((Qe||Ie)&&(Ie=Oe.window===Oe?Oe:(Ie=Oe.ownerDocument)?Ie.defaultView||Ie.parentWindow:window,Qe?(st=o.relatedTarget||o.toElement,Qe=he,st=st?Wr(st):null,st!==null&&(nn=Rt(st),st!==nn||st.tag!==5&&st.tag!==6)&&(st=null)):(Qe=null,st=he),Qe!==st)){if(at=If,Ve="onMouseLeave",le="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(at=Of,Ve="onPointerLeave",le="onPointerEnter",K="pointer"),nn=Qe==null?Ie:Ts(Qe),ue=st==null?Ie:Ts(st),Ie=new at(Ve,K+"leave",Qe,o,Oe),Ie.target=nn,Ie.relatedTarget=ue,Ve=null,Wr(Oe)===he&&(at=new at(le,K+"enter",st,o,Oe),at.target=ue,at.relatedTarget=nn,Ve=at),nn=Ve,Qe&&st)t:{for(at=Qe,le=st,K=0,ue=at;ue;ue=Es(ue))K++;for(ue=0,Ve=le;Ve;Ve=Es(Ve))ue++;for(;0<K-ue;)at=Es(at),K--;for(;0<ue-K;)le=Es(le),ue--;for(;K--;){if(at===le||le!==null&&at===le.alternate)break t;at=Es(at),le=Es(le)}at=null}else at=null;Qe!==null&&ch(ze,Ie,Qe,at,!1),st!==null&&nn!==null&&ch(ze,nn,st,at,!0)}}e:{if(Ie=he?Ts(he):window,Qe=Ie.nodeName&&Ie.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Ie.type==="file")var ct=Hv;else if(Vf(Ie))if(Wf)ct=jv;else{ct=Gv;var ht=Vv}else(Qe=Ie.nodeName)&&Qe.toLowerCase()==="input"&&(Ie.type==="checkbox"||Ie.type==="radio")&&(ct=Wv);if(ct&&(ct=ct(n,he))){Gf(ze,ct,o,Oe);break e}ht&&ht(n,Ie,he),n==="focusout"&&(ht=Ie._wrapperState)&&ht.controlled&&Ie.type==="number"&&Xe(Ie,"number",Ie.value)}switch(ht=he?Ts(he):window,n){case"focusin":(Vf(ht)||ht.contentEditable==="true")&&(Ss=ht,Bc=he,Na=null);break;case"focusout":Na=Bc=Ss=null;break;case"mousedown":Hc=!0;break;case"contextmenu":case"mouseup":case"dragend":Hc=!1,Zf(ze,o,Oe);break;case"selectionchange":if(Yv)break;case"keydown":case"keyup":Zf(ze,o,Oe)}var pt;if(Oc)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else ys?Bf(n,o)&&(vt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(vt="onCompositionStart");vt&&(Ff&&o.locale!=="ko"&&(ys||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&ys&&(pt=Nf()):(ur=Oe,Pc="value"in ur?ur.value:ur.textContent,ys=!0)),ht=Fo(he,vt),0<ht.length&&(vt=new Uf(vt,n,null,o,Oe),ze.push({event:vt,listeners:ht}),pt?vt.data=pt:(pt=Hf(o),pt!==null&&(vt.data=pt)))),(pt=Ov?Fv(n,o):zv(n,o))&&(he=Fo(he,"onBeforeInput"),0<he.length&&(Oe=new Uf("onBeforeInput","beforeinput",null,o,Oe),ze.push({event:Oe,listeners:he}),Oe.data=pt))}oh(ze,r)})}function Ua(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Fo(n,r){for(var o=r+"Capture",d=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=It(n,o),_!=null&&d.unshift(Ua(n,_,p)),_=It(n,r),_!=null&&d.push(Ua(n,_,p))),n=n.return}return d}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ch(n,r,o,d,p){for(var _=r._reactName,R=[];o!==null&&o!==d;){var H=o,X=H.alternate,he=H.stateNode;if(X!==null&&X===d)break;H.tag===5&&he!==null&&(H=he,p?(X=It(o,_),X!=null&&R.unshift(Ua(o,X,H))):p||(X=It(o,_),X!=null&&R.push(Ua(o,X,H)))),o=o.return}R.length!==0&&n.push({event:r,listeners:R})}var Zv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function uh(n){return(typeof n=="string"?n:""+n).replace(Zv,`
`).replace(Qv,"")}function zo(n,r,o){if(r=uh(r),uh(n)!==r&&o)throw Error(t(425))}function ko(){}var qc=null,Yc=null;function $c(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,ex=typeof clearTimeout=="function"?clearTimeout:void 0,dh=typeof Promise=="function"?Promise:void 0,tx=typeof queueMicrotask=="function"?queueMicrotask:typeof dh<"u"?function(n){return dh.resolve(null).then(n).catch(nx)}:Kc;function nx(n){setTimeout(function(){throw n})}function Jc(n,r){var o=r,d=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(d===0){n.removeChild(p),Ta(r);return}d--}else o!=="$"&&o!=="$?"&&o!=="$!"||d++;o=p}while(o);Ta(r)}function fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function fh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Pi="__reactFiber$"+ws,Oa="__reactProps$"+ws,Hi="__reactContainer$"+ws,Zc="__reactEvents$"+ws,ix="__reactListeners$"+ws,rx="__reactHandles$"+ws;function Wr(n){var r=n[Pi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Hi]||o[Pi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=fh(n);n!==null;){if(o=n[Pi])return o;n=fh(n)}return r}n=o,o=n.parentNode}return null}function Fa(n){return n=n[Pi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bo(n){return n[Oa]||null}var Qc=[],As=-1;function hr(n){return{current:n}}function Wt(n){0>As||(n.current=Qc[As],Qc[As]=null,As--)}function Ht(n,r){As++,Qc[As]=n.current,n.current=r}var pr={},wn=hr(pr),Vn=hr(!1),jr=pr;function bs(n,r){var o=n.type.contextTypes;if(!o)return pr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in o)p[_]=r[_];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(n){return n=n.childContextTypes,n!=null}function Ho(){Wt(Vn),Wt(wn)}function hh(n,r,o){if(wn.current!==pr)throw Error(t(168));Ht(wn,r),Ht(Vn,o)}function ph(n,r,o){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return o;d=d.getChildContext();for(var p in d)if(!(p in r))throw Error(t(108,_e(n)||"Unknown",p));return ne({},o,d)}function Vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,jr=wn.current,Ht(wn,n),Ht(Vn,Vn.current),!0}function mh(n,r,o){var d=n.stateNode;if(!d)throw Error(t(169));o?(n=ph(n,r,jr),d.__reactInternalMemoizedMergedChildContext=n,Wt(Vn),Wt(wn),Ht(wn,n)):Wt(Vn),Ht(Vn,o)}var Vi=null,Go=!1,eu=!1;function gh(n){Vi===null?Vi=[n]:Vi.push(n)}function sx(n){Go=!0,gh(n)}function mr(){if(!eu&&Vi!==null){eu=!0;var n=0,r=Dt;try{var o=Vi;for(Dt=1;n<o.length;n++){var d=o[n];do d=d(!0);while(d!==null)}Vi=null,Go=!1}catch(p){throw Vi!==null&&(Vi=Vi.slice(n+1)),Re(lt,mr),p}finally{Dt=r,eu=!1}}return null}var Cs=[],Rs=0,Wo=null,jo=0,ai=[],oi=0,Xr=null,Gi=1,Wi="";function qr(n,r){Cs[Rs++]=jo,Cs[Rs++]=Wo,Wo=n,jo=r}function vh(n,r,o){ai[oi++]=Gi,ai[oi++]=Wi,ai[oi++]=Xr,Xr=n;var d=Gi;n=Wi;var p=32-xt(d)-1;d&=~(1<<p),o+=1;var _=32-xt(r)+p;if(30<_){var R=p-p%5;_=(d&(1<<R)-1).toString(32),d>>=R,p-=R,Gi=1<<32-xt(r)+p|o<<p|d,Wi=_+n}else Gi=1<<_|o<<p|d,Wi=n}function tu(n){n.return!==null&&(qr(n,1),vh(n,1,0))}function nu(n){for(;n===Wo;)Wo=Cs[--Rs],Cs[Rs]=null,jo=Cs[--Rs],Cs[Rs]=null;for(;n===Xr;)Xr=ai[--oi],ai[oi]=null,Wi=ai[--oi],ai[oi]=null,Gi=ai[--oi],ai[oi]=null}var Qn=null,ei=null,qt=!1,gi=null;function xh(n,r){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function _h(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Qn=n,ei=fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Qn=n,ei=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Xr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Qn=n,ei=null,!0):!1;default:return!1}}function iu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ru(n){if(qt){var r=ei;if(r){var o=r;if(!_h(n,r)){if(iu(n))throw Error(t(418));r=fr(o.nextSibling);var d=Qn;r&&_h(n,r)?xh(d,o):(n.flags=n.flags&-4097|2,qt=!1,Qn=n)}}else{if(iu(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,Qn=n}}}function yh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function Xo(n){if(n!==Qn)return!1;if(!qt)return yh(n),qt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!$c(n.type,n.memoizedProps)),r&&(r=ei)){if(iu(n))throw Sh(),Error(t(418));for(;r;)xh(n,r),r=fr(r.nextSibling)}if(yh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ei=fr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ei=null}}else ei=Qn?fr(n.stateNode.nextSibling):null;return!0}function Sh(){for(var n=ei;n;)n=fr(n.nextSibling)}function Ps(){ei=Qn=null,qt=!1}function su(n){gi===null?gi=[n]:gi.push(n)}var ax=L.ReactCurrentBatchConfig;function za(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var d=o.stateNode}if(!d)throw Error(t(147,n));var p=d,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(R){var H=p.refs;R===null?delete H[_]:H[_]=R},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function qo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Mh(n){var r=n._init;return r(n._payload)}function Eh(n){function r(le,K){if(n){var ue=le.deletions;ue===null?(le.deletions=[K],le.flags|=16):ue.push(K)}}function o(le,K){if(!n)return null;for(;K!==null;)r(le,K),K=K.sibling;return null}function d(le,K){for(le=new Map;K!==null;)K.key!==null?le.set(K.key,K):le.set(K.index,K),K=K.sibling;return le}function p(le,K){return le=Er(le,K),le.index=0,le.sibling=null,le}function _(le,K,ue){return le.index=ue,n?(ue=le.alternate,ue!==null?(ue=ue.index,ue<K?(le.flags|=2,K):ue):(le.flags|=2,K)):(le.flags|=1048576,K)}function R(le){return n&&le.alternate===null&&(le.flags|=2),le}function H(le,K,ue,Ve){return K===null||K.tag!==6?(K=Ku(ue,le.mode,Ve),K.return=le,K):(K=p(K,ue),K.return=le,K)}function X(le,K,ue,Ve){var ct=ue.type;return ct===U?Oe(le,K,ue.props.children,Ve,ue.key):K!==null&&(K.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===Y&&Mh(ct)===K.type)?(Ve=p(K,ue.props),Ve.ref=za(le,K,ue),Ve.return=le,Ve):(Ve=vl(ue.type,ue.key,ue.props,null,le.mode,Ve),Ve.ref=za(le,K,ue),Ve.return=le,Ve)}function he(le,K,ue,Ve){return K===null||K.tag!==4||K.stateNode.containerInfo!==ue.containerInfo||K.stateNode.implementation!==ue.implementation?(K=Ju(ue,le.mode,Ve),K.return=le,K):(K=p(K,ue.children||[]),K.return=le,K)}function Oe(le,K,ue,Ve,ct){return K===null||K.tag!==7?(K=ts(ue,le.mode,Ve,ct),K.return=le,K):(K=p(K,ue),K.return=le,K)}function ze(le,K,ue){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Ku(""+K,le.mode,ue),K.return=le,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case z:return ue=vl(K.type,K.key,K.props,null,le.mode,ue),ue.ref=za(le,null,K),ue.return=le,ue;case N:return K=Ju(K,le.mode,ue),K.return=le,K;case Y:var Ve=K._init;return ze(le,Ve(K._payload),ue)}if(F(K)||ee(K))return K=ts(K,le.mode,ue,null),K.return=le,K;qo(le,K)}return null}function Ie(le,K,ue,Ve){var ct=K!==null?K.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ct!==null?null:H(le,K,""+ue,Ve);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case z:return ue.key===ct?X(le,K,ue,Ve):null;case N:return ue.key===ct?he(le,K,ue,Ve):null;case Y:return ct=ue._init,Ie(le,K,ct(ue._payload),Ve)}if(F(ue)||ee(ue))return ct!==null?null:Oe(le,K,ue,Ve,null);qo(le,ue)}return null}function Qe(le,K,ue,Ve,ct){if(typeof Ve=="string"&&Ve!==""||typeof Ve=="number")return le=le.get(ue)||null,H(K,le,""+Ve,ct);if(typeof Ve=="object"&&Ve!==null){switch(Ve.$$typeof){case z:return le=le.get(Ve.key===null?ue:Ve.key)||null,X(K,le,Ve,ct);case N:return le=le.get(Ve.key===null?ue:Ve.key)||null,he(K,le,Ve,ct);case Y:var ht=Ve._init;return Qe(le,K,ue,ht(Ve._payload),ct)}if(F(Ve)||ee(Ve))return le=le.get(ue)||null,Oe(K,le,Ve,ct,null);qo(K,Ve)}return null}function st(le,K,ue,Ve){for(var ct=null,ht=null,pt=K,vt=K=0,vn=null;pt!==null&&vt<ue.length;vt++){pt.index>vt?(vn=pt,pt=null):vn=pt.sibling;var Lt=Ie(le,pt,ue[vt],Ve);if(Lt===null){pt===null&&(pt=vn);break}n&&pt&&Lt.alternate===null&&r(le,pt),K=_(Lt,K,vt),ht===null?ct=Lt:ht.sibling=Lt,ht=Lt,pt=vn}if(vt===ue.length)return o(le,pt),qt&&qr(le,vt),ct;if(pt===null){for(;vt<ue.length;vt++)pt=ze(le,ue[vt],Ve),pt!==null&&(K=_(pt,K,vt),ht===null?ct=pt:ht.sibling=pt,ht=pt);return qt&&qr(le,vt),ct}for(pt=d(le,pt);vt<ue.length;vt++)vn=Qe(pt,le,vt,ue[vt],Ve),vn!==null&&(n&&vn.alternate!==null&&pt.delete(vn.key===null?vt:vn.key),K=_(vn,K,vt),ht===null?ct=vn:ht.sibling=vn,ht=vn);return n&&pt.forEach(function(wr){return r(le,wr)}),qt&&qr(le,vt),ct}function at(le,K,ue,Ve){var ct=ee(ue);if(typeof ct!="function")throw Error(t(150));if(ue=ct.call(ue),ue==null)throw Error(t(151));for(var ht=ct=null,pt=K,vt=K=0,vn=null,Lt=ue.next();pt!==null&&!Lt.done;vt++,Lt=ue.next()){pt.index>vt?(vn=pt,pt=null):vn=pt.sibling;var wr=Ie(le,pt,Lt.value,Ve);if(wr===null){pt===null&&(pt=vn);break}n&&pt&&wr.alternate===null&&r(le,pt),K=_(wr,K,vt),ht===null?ct=wr:ht.sibling=wr,ht=wr,pt=vn}if(Lt.done)return o(le,pt),qt&&qr(le,vt),ct;if(pt===null){for(;!Lt.done;vt++,Lt=ue.next())Lt=ze(le,Lt.value,Ve),Lt!==null&&(K=_(Lt,K,vt),ht===null?ct=Lt:ht.sibling=Lt,ht=Lt);return qt&&qr(le,vt),ct}for(pt=d(le,pt);!Lt.done;vt++,Lt=ue.next())Lt=Qe(pt,le,vt,Lt.value,Ve),Lt!==null&&(n&&Lt.alternate!==null&&pt.delete(Lt.key===null?vt:Lt.key),K=_(Lt,K,vt),ht===null?ct=Lt:ht.sibling=Lt,ht=Lt);return n&&pt.forEach(function(kx){return r(le,kx)}),qt&&qr(le,vt),ct}function nn(le,K,ue,Ve){if(typeof ue=="object"&&ue!==null&&ue.type===U&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case z:e:{for(var ct=ue.key,ht=K;ht!==null;){if(ht.key===ct){if(ct=ue.type,ct===U){if(ht.tag===7){o(le,ht.sibling),K=p(ht,ue.props.children),K.return=le,le=K;break e}}else if(ht.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===Y&&Mh(ct)===ht.type){o(le,ht.sibling),K=p(ht,ue.props),K.ref=za(le,ht,ue),K.return=le,le=K;break e}o(le,ht);break}else r(le,ht);ht=ht.sibling}ue.type===U?(K=ts(ue.props.children,le.mode,Ve,ue.key),K.return=le,le=K):(Ve=vl(ue.type,ue.key,ue.props,null,le.mode,Ve),Ve.ref=za(le,K,ue),Ve.return=le,le=Ve)}return R(le);case N:e:{for(ht=ue.key;K!==null;){if(K.key===ht)if(K.tag===4&&K.stateNode.containerInfo===ue.containerInfo&&K.stateNode.implementation===ue.implementation){o(le,K.sibling),K=p(K,ue.children||[]),K.return=le,le=K;break e}else{o(le,K);break}else r(le,K);K=K.sibling}K=Ju(ue,le.mode,Ve),K.return=le,le=K}return R(le);case Y:return ht=ue._init,nn(le,K,ht(ue._payload),Ve)}if(F(ue))return st(le,K,ue,Ve);if(ee(ue))return at(le,K,ue,Ve);qo(le,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,K!==null&&K.tag===6?(o(le,K.sibling),K=p(K,ue),K.return=le,le=K):(o(le,K),K=Ku(ue,le.mode,Ve),K.return=le,le=K),R(le)):o(le,K)}return nn}var Ls=Eh(!0),wh=Eh(!1),Yo=hr(null),$o=null,Ns=null,au=null;function ou(){au=Ns=$o=null}function lu(n){var r=Yo.current;Wt(Yo),n._currentValue=r}function cu(n,r,o){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===o)break;n=n.return}}function Ds(n,r){$o=n,au=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Wn=!0),n.firstContext=null)}function li(n){var r=n._currentValue;if(au!==n)if(n={context:n,memoizedValue:r,next:null},Ns===null){if($o===null)throw Error(t(308));Ns=n,$o.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return r}var Yr=null;function uu(n){Yr===null?Yr=[n]:Yr.push(n)}function Th(n,r,o,d){var p=r.interleaved;return p===null?(o.next=o,uu(r)):(o.next=p.next,p.next=o),r.interleaved=o,ji(n,d)}function ji(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var gr=!1;function du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function vr(n,r,o){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Pt&2)!==0){var p=d.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),d.pending=r,ji(n,o)}return p=d.interleaved,p===null?(r.next=r,uu(d)):(r.next=p.next,p.next=r),d.interleaved=r,ji(n,o)}function Ko(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,o|=d,r.lanes=o,ya(n,o)}}function bh(n,r){var o=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,o===d)){var p=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var R={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};_===null?p=_=R:_=_.next=R,o=o.next}while(o!==null);_===null?p=_=r:_=_.next=r}else p=_=r;o={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:d.shared,effects:d.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Jo(n,r,o,d){var p=n.updateQueue;gr=!1;var _=p.firstBaseUpdate,R=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var X=H,he=X.next;X.next=null,R===null?_=he:R.next=he,R=X;var Oe=n.alternate;Oe!==null&&(Oe=Oe.updateQueue,H=Oe.lastBaseUpdate,H!==R&&(H===null?Oe.firstBaseUpdate=he:H.next=he,Oe.lastBaseUpdate=X))}if(_!==null){var ze=p.baseState;R=0,Oe=he=X=null,H=_;do{var Ie=H.lane,Qe=H.eventTime;if((d&Ie)===Ie){Oe!==null&&(Oe=Oe.next={eventTime:Qe,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var st=n,at=H;switch(Ie=r,Qe=o,at.tag){case 1:if(st=at.payload,typeof st=="function"){ze=st.call(Qe,ze,Ie);break e}ze=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=at.payload,Ie=typeof st=="function"?st.call(Qe,ze,Ie):st,Ie==null)break e;ze=ne({},ze,Ie);break e;case 2:gr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Ie=p.effects,Ie===null?p.effects=[H]:Ie.push(H))}else Qe={eventTime:Qe,lane:Ie,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Oe===null?(he=Oe=Qe,X=ze):Oe=Oe.next=Qe,R|=Ie;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Ie=H,H=Ie.next,Ie.next=null,p.lastBaseUpdate=Ie,p.shared.pending=null}}while(!0);if(Oe===null&&(X=ze),p.baseState=X,p.firstBaseUpdate=he,p.lastBaseUpdate=Oe,r=p.shared.interleaved,r!==null){p=r;do R|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);Jr|=R,n.lanes=R,n.memoizedState=ze}}function Ch(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],p=d.callback;if(p!==null){if(d.callback=null,d=o,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var ka={},Li=hr(ka),Ba=hr(ka),Ha=hr(ka);function $r(n){if(n===ka)throw Error(t(174));return n}function fu(n,r){switch(Ht(Ha,r),Ht(Ba,n),Ht(Li,ka),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ce(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ce(r,n)}Wt(Li),Ht(Li,r)}function Is(){Wt(Li),Wt(Ba),Wt(Ha)}function Rh(n){$r(Ha.current);var r=$r(Li.current),o=Ce(r,n.type);r!==o&&(Ht(Ba,n),Ht(Li,o))}function hu(n){Ba.current===n&&(Wt(Li),Wt(Ba))}var Kt=hr(0);function Zo(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var pu=[];function mu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var Qo=L.ReactCurrentDispatcher,gu=L.ReactCurrentBatchConfig,Kr=0,Jt=null,ln=null,mn=null,el=!1,Va=!1,Ga=0,ox=0;function Tn(){throw Error(t(321))}function vu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!mi(n[o],r[o]))return!1;return!0}function xu(n,r,o,d,p,_){if(Kr=_,Jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qo.current=n===null||n.memoizedState===null?dx:fx,n=o(d,p),Va){_=0;do{if(Va=!1,Ga=0,25<=_)throw Error(t(301));_+=1,mn=ln=null,r.updateQueue=null,Qo.current=hx,n=o(d,p)}while(Va)}if(Qo.current=il,r=ln!==null&&ln.next!==null,Kr=0,mn=ln=Jt=null,el=!1,r)throw Error(t(300));return n}function _u(){var n=Ga!==0;return Ga=0,n}function Ni(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Jt.memoizedState=mn=n:mn=mn.next=n,mn}function ci(){if(ln===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var r=mn===null?Jt.memoizedState:mn.next;if(r!==null)mn=r,ln=n;else{if(n===null)throw Error(t(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},mn===null?Jt.memoizedState=mn=n:mn=mn.next=n}return mn}function Wa(n,r){return typeof r=="function"?r(n):r}function yu(n){var r=ci(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var d=ln,p=d.baseQueue,_=o.pending;if(_!==null){if(p!==null){var R=p.next;p.next=_.next,_.next=R}d.baseQueue=p=_,o.pending=null}if(p!==null){_=p.next,d=d.baseState;var H=R=null,X=null,he=_;do{var Oe=he.lane;if((Kr&Oe)===Oe)X!==null&&(X=X.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),d=he.hasEagerState?he.eagerState:n(d,he.action);else{var ze={lane:Oe,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};X===null?(H=X=ze,R=d):X=X.next=ze,Jt.lanes|=Oe,Jr|=Oe}he=he.next}while(he!==null&&he!==_);X===null?R=d:X.next=H,mi(d,r.memoizedState)||(Wn=!0),r.memoizedState=d,r.baseState=R,r.baseQueue=X,o.lastRenderedState=d}if(n=o.interleaved,n!==null){p=n;do _=p.lane,Jt.lanes|=_,Jr|=_,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Su(n){var r=ci(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var d=o.dispatch,p=o.pending,_=r.memoizedState;if(p!==null){o.pending=null;var R=p=p.next;do _=n(_,R.action),R=R.next;while(R!==p);mi(_,r.memoizedState)||(Wn=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),o.lastRenderedState=_}return[_,d]}function Ph(){}function Lh(n,r){var o=Jt,d=ci(),p=r(),_=!mi(d.memoizedState,p);if(_&&(d.memoizedState=p,Wn=!0),d=d.queue,Mu(Ih.bind(null,o,d,n),[n]),d.getSnapshot!==r||_||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,ja(9,Dh.bind(null,o,d,p,r),void 0,null),gn===null)throw Error(t(349));(Kr&30)!==0||Nh(o,r,p)}return p}function Nh(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Dh(n,r,o,d){r.value=o,r.getSnapshot=d,Uh(r)&&Oh(n)}function Ih(n,r,o){return o(function(){Uh(r)&&Oh(n)})}function Uh(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!mi(n,o)}catch{return!0}}function Oh(n){var r=ji(n,1);r!==null&&yi(r,n,1,-1)}function Fh(n){var r=Ni();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},r.queue=n,n=n.dispatch=ux.bind(null,Jt,n),[r.memoizedState,n]}function ja(n,r,o,d){return n={tag:n,create:r,destroy:o,deps:d,next:null},r=Jt.updateQueue,r===null?(r={lastEffect:null,stores:null},Jt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(d=o.next,o.next=n,n.next=d,r.lastEffect=n)),n}function zh(){return ci().memoizedState}function tl(n,r,o,d){var p=Ni();Jt.flags|=n,p.memoizedState=ja(1|r,o,void 0,d===void 0?null:d)}function nl(n,r,o,d){var p=ci();d=d===void 0?null:d;var _=void 0;if(ln!==null){var R=ln.memoizedState;if(_=R.destroy,d!==null&&vu(d,R.deps)){p.memoizedState=ja(r,o,_,d);return}}Jt.flags|=n,p.memoizedState=ja(1|r,o,_,d)}function kh(n,r){return tl(8390656,8,n,r)}function Mu(n,r){return nl(2048,8,n,r)}function Bh(n,r){return nl(4,2,n,r)}function Hh(n,r){return nl(4,4,n,r)}function Vh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Gh(n,r,o){return o=o!=null?o.concat([n]):null,nl(4,4,Vh.bind(null,r,n),o)}function Eu(){}function Wh(n,r){var o=ci();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&vu(r,d[1])?d[0]:(o.memoizedState=[n,r],n)}function jh(n,r){var o=ci();r=r===void 0?null:r;var d=o.memoizedState;return d!==null&&r!==null&&vu(r,d[1])?d[0]:(n=n(),o.memoizedState=[n,r],n)}function Xh(n,r,o){return(Kr&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=o):(mi(o,r)||(o=Vr(),Jt.lanes|=o,Jr|=o,n.baseState=!0),r)}function lx(n,r){var o=Dt;Dt=o!==0&&4>o?o:4,n(!0);var d=gu.transition;gu.transition={};try{n(!1),r()}finally{Dt=o,gu.transition=d}}function qh(){return ci().memoizedState}function cx(n,r,o){var d=Sr(n);if(o={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null},Yh(n))$h(r,o);else if(o=Th(n,r,o,d),o!==null){var p=On();yi(o,n,d,p),Kh(o,r,d)}}function ux(n,r,o){var d=Sr(n),p={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null};if(Yh(n))$h(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var R=r.lastRenderedState,H=_(R,o);if(p.hasEagerState=!0,p.eagerState=H,mi(H,R)){var X=r.interleaved;X===null?(p.next=p,uu(r)):(p.next=X.next,X.next=p),r.interleaved=p;return}}catch{}finally{}o=Th(n,r,p,d),o!==null&&(p=On(),yi(o,n,d,p),Kh(o,r,d))}}function Yh(n){var r=n.alternate;return n===Jt||r!==null&&r===Jt}function $h(n,r){Va=el=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Kh(n,r,o){if((o&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,o|=d,r.lanes=o,ya(n,o)}}var il={readContext:li,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},dx={readContext:li,useCallback:function(n,r){return Ni().memoizedState=[n,r===void 0?null:r],n},useContext:li,useEffect:kh,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,tl(4194308,4,Vh.bind(null,r,n),o)},useLayoutEffect:function(n,r){return tl(4194308,4,n,r)},useInsertionEffect:function(n,r){return tl(4,2,n,r)},useMemo:function(n,r){var o=Ni();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var d=Ni();return r=o!==void 0?o(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=cx.bind(null,Jt,n),[d.memoizedState,n]},useRef:function(n){var r=Ni();return n={current:n},r.memoizedState=n},useState:Fh,useDebugValue:Eu,useDeferredValue:function(n){return Ni().memoizedState=n},useTransition:function(){var n=Fh(!1),r=n[0];return n=lx.bind(null,n[1]),Ni().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var d=Jt,p=Ni();if(qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),gn===null)throw Error(t(349));(Kr&30)!==0||Nh(d,r,o)}p.memoizedState=o;var _={value:o,getSnapshot:r};return p.queue=_,kh(Ih.bind(null,d,_,n),[n]),d.flags|=2048,ja(9,Dh.bind(null,d,_,o,r),void 0,null),o},useId:function(){var n=Ni(),r=gn.identifierPrefix;if(qt){var o=Wi,d=Gi;o=(d&~(1<<32-xt(d)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ga++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=ox++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},fx={readContext:li,useCallback:Wh,useContext:li,useEffect:Mu,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:Hh,useMemo:jh,useReducer:yu,useRef:zh,useState:function(){return yu(Wa)},useDebugValue:Eu,useDeferredValue:function(n){var r=ci();return Xh(r,ln.memoizedState,n)},useTransition:function(){var n=yu(Wa)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Ph,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1},hx={readContext:li,useCallback:Wh,useContext:li,useEffect:Mu,useImperativeHandle:Gh,useInsertionEffect:Bh,useLayoutEffect:Hh,useMemo:jh,useReducer:Su,useRef:zh,useState:function(){return Su(Wa)},useDebugValue:Eu,useDeferredValue:function(n){var r=ci();return ln===null?r.memoizedState=n:Xh(r,ln.memoizedState,n)},useTransition:function(){var n=Su(Wa)[0],r=ci().memoizedState;return[n,r]},useMutableSource:Ph,useSyncExternalStore:Lh,useId:qh,unstable_isNewReconciler:!1};function vi(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function wu(n,r,o,d){r=n.memoizedState,o=o(d,r),o=o==null?r:ne({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var rl={isMounted:function(n){return(n=n._reactInternals)?Rt(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var d=On(),p=Sr(n),_=Xi(d,p);_.payload=r,o!=null&&(_.callback=o),r=vr(n,_,p),r!==null&&(yi(r,n,p,d),Ko(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var d=On(),p=Sr(n),_=Xi(d,p);_.tag=1,_.payload=r,o!=null&&(_.callback=o),r=vr(n,_,p),r!==null&&(yi(r,n,p,d),Ko(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=On(),d=Sr(n),p=Xi(o,d);p.tag=2,r!=null&&(p.callback=r),r=vr(n,p,d),r!==null&&(yi(r,n,d,o),Ko(r,n,d))}};function Jh(n,r,o,d,p,_,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,_,R):r.prototype&&r.prototype.isPureReactComponent?!La(o,d)||!La(p,_):!0}function Zh(n,r,o){var d=!1,p=pr,_=r.contextType;return typeof _=="object"&&_!==null?_=li(_):(p=Gn(r)?jr:wn.current,d=r.contextTypes,_=(d=d!=null)?bs(n,p):pr),r=new r(o,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=rl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function Qh(n,r,o,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,d),r.state!==n&&rl.enqueueReplaceState(r,r.state,null)}function Tu(n,r,o,d){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},du(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=li(_):(_=Gn(r)?jr:wn.current,p.context=bs(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(wu(n,r,_,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&rl.enqueueReplaceState(p,p.state,null),Jo(n,o,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,r){try{var o="",d=r;do o+=re(d),d=d.return;while(d);var p=o}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function Au(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function bu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var px=typeof WeakMap=="function"?WeakMap:Map;function ep(n,r,o){o=Xi(-1,o),o.tag=3,o.payload={element:null};var d=r.value;return o.callback=function(){dl||(dl=!0,Vu=d),bu(n,r)},o}function tp(n,r,o){o=Xi(-1,o),o.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=r.value;o.payload=function(){return d(p)},o.callback=function(){bu(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(o.callback=function(){bu(n,r),typeof d!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),o}function np(n,r,o){var d=n.pingCache;if(d===null){d=n.pingCache=new px;var p=new Set;d.set(r,p)}else p=d.get(r),p===void 0&&(p=new Set,d.set(r,p));p.has(o)||(p.add(o),n=Cx.bind(null,n,r,o),r.then(n,n))}function ip(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function rp(n,r,o,d,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=Xi(-1,1),r.tag=2,vr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var mx=L.ReactCurrentOwner,Wn=!1;function Un(n,r,o,d){r.child=n===null?wh(r,null,o,d):Ls(r,n.child,o,d)}function sp(n,r,o,d,p){o=o.render;var _=r.ref;return Ds(r,p),d=xu(n,r,o,d,_,p),o=_u(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):(qt&&o&&tu(r),r.flags|=1,Un(n,r,d,p),r.child)}function ap(n,r,o,d,p){if(n===null){var _=o.type;return typeof _=="function"&&!$u(_)&&_.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=_,op(n,r,_,d,p)):(n=vl(o.type,null,d,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var R=_.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(R,d)&&n.ref===r.ref)return qi(n,r,p)}return r.flags|=1,n=Er(_,d),n.ref=r.ref,n.return=r,r.child=n}function op(n,r,o,d,p){if(n!==null){var _=n.memoizedProps;if(La(_,d)&&n.ref===r.ref)if(Wn=!1,r.pendingProps=d=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Wn=!0);else return r.lanes=n.lanes,qi(n,r,p)}return Cu(n,r,o,d,p)}function lp(n,r,o){var d=r.pendingProps,p=d.children,_=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(Fs,ti),ti|=o;else{if((o&1073741824)===0)return n=_!==null?_.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ht(Fs,ti),ti|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=_!==null?_.baseLanes:o,Ht(Fs,ti),ti|=d}else _!==null?(d=_.baseLanes|o,r.memoizedState=null):d=o,Ht(Fs,ti),ti|=d;return Un(n,r,p,o),r.child}function cp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Cu(n,r,o,d,p){var _=Gn(o)?jr:wn.current;return _=bs(r,_),Ds(r,p),o=xu(n,r,o,d,_,p),d=_u(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,qi(n,r,p)):(qt&&d&&tu(r),r.flags|=1,Un(n,r,o,p),r.child)}function up(n,r,o,d,p){if(Gn(o)){var _=!0;Vo(r)}else _=!1;if(Ds(r,p),r.stateNode===null)al(n,r),Zh(r,o,d),Tu(r,o,d,p),d=!0;else if(n===null){var R=r.stateNode,H=r.memoizedProps;R.props=H;var X=R.context,he=o.contextType;typeof he=="object"&&he!==null?he=li(he):(he=Gn(o)?jr:wn.current,he=bs(r,he));var Oe=o.getDerivedStateFromProps,ze=typeof Oe=="function"||typeof R.getSnapshotBeforeUpdate=="function";ze||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(H!==d||X!==he)&&Qh(r,R,d,he),gr=!1;var Ie=r.memoizedState;R.state=Ie,Jo(r,d,R,p),X=r.memoizedState,H!==d||Ie!==X||Vn.current||gr?(typeof Oe=="function"&&(wu(r,o,Oe,d),X=r.memoizedState),(H=gr||Jh(r,o,H,d,Ie,X,he))?(ze||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=X),R.props=d,R.state=X,R.context=he,d=H):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{R=r.stateNode,Ah(n,r),H=r.memoizedProps,he=r.type===r.elementType?H:vi(r.type,H),R.props=he,ze=r.pendingProps,Ie=R.context,X=o.contextType,typeof X=="object"&&X!==null?X=li(X):(X=Gn(o)?jr:wn.current,X=bs(r,X));var Qe=o.getDerivedStateFromProps;(Oe=typeof Qe=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(H!==ze||Ie!==X)&&Qh(r,R,d,X),gr=!1,Ie=r.memoizedState,R.state=Ie,Jo(r,d,R,p);var st=r.memoizedState;H!==ze||Ie!==st||Vn.current||gr?(typeof Qe=="function"&&(wu(r,o,Qe,d),st=r.memoizedState),(he=gr||Jh(r,o,he,d,Ie,st,X)||!1)?(Oe||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(d,st,X),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(d,st,X)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||H===n.memoizedProps&&Ie===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ie===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=st),R.props=d,R.state=st,R.context=X,d=he):(typeof R.componentDidUpdate!="function"||H===n.memoizedProps&&Ie===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ie===n.memoizedState||(r.flags|=1024),d=!1)}return Ru(n,r,o,d,_,p)}function Ru(n,r,o,d,p,_){cp(n,r);var R=(r.flags&128)!==0;if(!d&&!R)return p&&mh(r,o,!1),qi(n,r,_);d=r.stateNode,mx.current=r;var H=R&&typeof o.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&R?(r.child=Ls(r,n.child,null,_),r.child=Ls(r,null,H,_)):Un(n,r,H,_),r.memoizedState=d.state,p&&mh(r,o,!0),r.child}function dp(n){var r=n.stateNode;r.pendingContext?hh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&hh(n,r.context,!1),fu(n,r.containerInfo)}function fp(n,r,o,d,p){return Ps(),su(p),r.flags|=256,Un(n,r,o,d),r.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Lu(n){return{baseLanes:n,cachePool:null,transitions:null}}function hp(n,r,o){var d=r.pendingProps,p=Kt.current,_=!1,R=(r.flags&128)!==0,H;if((H=R)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ht(Kt,p&1),n===null)return ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=d.children,n=d.fallback,_?(d=r.mode,_=r.child,R={mode:"hidden",children:R},(d&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=R):_=xl(R,d,0,null),n=ts(n,d,o,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Lu(o),r.memoizedState=Pu,n):Nu(r,R));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return gx(n,r,R,d,H,p,o);if(_){_=d.fallback,R=r.mode,p=n.child,H=p.sibling;var X={mode:"hidden",children:d.children};return(R&1)===0&&r.child!==p?(d=r.child,d.childLanes=0,d.pendingProps=X,r.deletions=null):(d=Er(p,X),d.subtreeFlags=p.subtreeFlags&14680064),H!==null?_=Er(H,_):(_=ts(_,R,o,null),_.flags|=2),_.return=r,d.return=r,d.sibling=_,r.child=d,d=_,_=r.child,R=n.child.memoizedState,R=R===null?Lu(o):{baseLanes:R.baseLanes|o,cachePool:null,transitions:R.transitions},_.memoizedState=R,_.childLanes=n.childLanes&~o,r.memoizedState=Pu,d}return _=n.child,n=_.sibling,d=Er(_,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=o),d.return=r,d.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=d,r.memoizedState=null,d}function Nu(n,r){return r=xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function sl(n,r,o,d){return d!==null&&su(d),Ls(r,n.child,null,o),n=Nu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function gx(n,r,o,d,p,_,R){if(o)return r.flags&256?(r.flags&=-257,d=Au(Error(t(422))),sl(n,r,R,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=d.fallback,p=r.mode,d=xl({mode:"visible",children:d.children},p,0,null),_=ts(_,p,R,null),_.flags|=2,d.return=r,_.return=r,d.sibling=_,r.child=d,(r.mode&1)!==0&&Ls(r,n.child,null,R),r.child.memoizedState=Lu(R),r.memoizedState=Pu,_);if((r.mode&1)===0)return sl(n,r,R,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var H=d.dgst;return d=H,_=Error(t(419)),d=Au(_,d,void 0),sl(n,r,R,d)}if(H=(R&n.childLanes)!==0,Wn||H){if(d=gn,d!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|R))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ji(n,p),yi(d,n,p,-1))}return Yu(),d=Au(Error(t(421))),sl(n,r,R,d)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Rx.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,ei=fr(p.nextSibling),Qn=r,qt=!0,gi=null,n!==null&&(ai[oi++]=Gi,ai[oi++]=Wi,ai[oi++]=Xr,Gi=n.id,Wi=n.overflow,Xr=r),r=Nu(r,d.children),r.flags|=4096,r)}function pp(n,r,o){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),cu(n.return,r,o)}function Du(n,r,o,d,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:o,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=d,_.tail=o,_.tailMode=p)}function mp(n,r,o){var d=r.pendingProps,p=d.revealOrder,_=d.tail;if(Un(n,r,d.children,o),d=Kt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pp(n,o,r);else if(n.tag===19)pp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Ht(Kt,d),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Zo(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Du(r,!1,p,o,_);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Zo(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Du(r,!0,o,null,_);break;case"together":Du(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function al(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function qi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Er(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Er(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function vx(n,r,o){switch(r.tag){case 3:dp(r),Ps();break;case 5:Rh(r);break;case 1:Gn(r.type)&&Vo(r);break;case 4:fu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,p=r.memoizedProps.value;Ht(Yo,d._currentValue),d._currentValue=p;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Ht(Kt,Kt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?hp(n,r,o):(Ht(Kt,Kt.current&1),n=qi(n,r,o),n!==null?n.sibling:null);Ht(Kt,Kt.current&1);break;case 19:if(d=(o&r.childLanes)!==0,(n.flags&128)!==0){if(d)return mp(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ht(Kt,Kt.current),d)break;return null;case 22:case 23:return r.lanes=0,lp(n,r,o)}return qi(n,r,o)}var gp,Iu,vp,xp;gp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Iu=function(){},vp=function(n,r,o,d){var p=n.memoizedProps;if(p!==d){n=r.stateNode,$r(Li.current);var _=null;switch(o){case"input":p=we(n,p),d=we(n,d),_=[];break;case"select":p=ne({},p,{value:void 0}),d=ne({},d,{value:void 0}),_=[];break;case"textarea":p=se(n,p),d=se(n,d),_=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=ko)}ot(o,d);var R;o=null;for(he in p)if(!d.hasOwnProperty(he)&&p.hasOwnProperty(he)&&p[he]!=null)if(he==="style"){var H=p[he];for(R in H)H.hasOwnProperty(R)&&(o||(o={}),o[R]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?_||(_=[]):(_=_||[]).push(he,null));for(he in d){var X=d[he];if(H=p!=null?p[he]:void 0,d.hasOwnProperty(he)&&X!==H&&(X!=null||H!=null))if(he==="style")if(H){for(R in H)!H.hasOwnProperty(R)||X&&X.hasOwnProperty(R)||(o||(o={}),o[R]="");for(R in X)X.hasOwnProperty(R)&&H[R]!==X[R]&&(o||(o={}),o[R]=X[R])}else o||(_||(_=[]),_.push(he,o)),o=X;else he==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,H=H?H.__html:void 0,X!=null&&H!==X&&(_=_||[]).push(he,X)):he==="children"?typeof X!="string"&&typeof X!="number"||(_=_||[]).push(he,""+X):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(X!=null&&he==="onScroll"&&Gt("scroll",n),_||H===X||(_=[])):(_=_||[]).push(he,X))}o&&(_=_||[]).push("style",o);var he=_;(r.updateQueue=he)&&(r.flags|=4)}},xp=function(n,r,o,d){o!==d&&(r.flags|=4)};function Xa(n,r){if(!qt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var d=null;o!==null;)o.alternate!==null&&(d=o),o=o.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,d=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=o,r}function xx(n,r,o){var d=r.pendingProps;switch(nu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return Gn(r.type)&&Ho(),An(r),null;case 3:return d=r.stateNode,Is(),Wt(Vn),Wt(wn),mu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(Xo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gi!==null&&(ju(gi),gi=null))),Iu(n,r),An(r),null;case 5:hu(r);var p=$r(Ha.current);if(o=r.type,n!==null&&r.stateNode!=null)vp(n,r,o,d,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return An(r),null}if(n=$r(Li.current),Xo(r)){d=r.stateNode,o=r.type;var _=r.memoizedProps;switch(d[Pi]=r,d[Oa]=_,n=(r.mode&1)!==0,o){case"dialog":Gt("cancel",d),Gt("close",d);break;case"iframe":case"object":case"embed":Gt("load",d);break;case"video":case"audio":for(p=0;p<Da.length;p++)Gt(Da[p],d);break;case"source":Gt("error",d);break;case"img":case"image":case"link":Gt("error",d),Gt("load",d);break;case"details":Gt("toggle",d);break;case"input":Ee(d,_),Gt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!_.multiple},Gt("invalid",d);break;case"textarea":ye(d,_),Gt("invalid",d)}ot(o,_),p=null;for(var R in _)if(_.hasOwnProperty(R)){var H=_[R];R==="children"?typeof H=="string"?d.textContent!==H&&(_.suppressHydrationWarning!==!0&&zo(d.textContent,H,n),p=["children",H]):typeof H=="number"&&d.textContent!==""+H&&(_.suppressHydrationWarning!==!0&&zo(d.textContent,H,n),p=["children",""+H]):a.hasOwnProperty(R)&&H!=null&&R==="onScroll"&&Gt("scroll",d)}switch(o){case"input":V(d),be(d,_,!0);break;case"textarea":V(d),Me(d);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(d.onclick=ko)}d=p,r.updateQueue=d,d!==null&&(r.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=je(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=R.createElement(o,{is:d.is}):(n=R.createElement(o),o==="select"&&(R=n,d.multiple?R.multiple=!0:d.size&&(R.size=d.size))):n=R.createElementNS(n,o),n[Pi]=r,n[Oa]=d,gp(n,r,!1,!1),r.stateNode=n;e:{switch(R=dt(o,d),o){case"dialog":Gt("cancel",n),Gt("close",n),p=d;break;case"iframe":case"object":case"embed":Gt("load",n),p=d;break;case"video":case"audio":for(p=0;p<Da.length;p++)Gt(Da[p],n);p=d;break;case"source":Gt("error",n),p=d;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),p=d;break;case"details":Gt("toggle",n),p=d;break;case"input":Ee(n,d),p=we(n,d),Gt("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=ne({},d,{value:void 0}),Gt("invalid",n);break;case"textarea":ye(n,d),p=se(n,d),Gt("invalid",n);break;default:p=d}ot(o,p),H=p;for(_ in H)if(H.hasOwnProperty(_)){var X=H[_];_==="style"?Fe(n,X):_==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&nt(n,X)):_==="children"?typeof X=="string"?(o!=="textarea"||X!=="")&&Ae(n,X):typeof X=="number"&&Ae(n,""+X):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?X!=null&&_==="onScroll"&&Gt("scroll",n):X!=null&&T(n,_,X,R))}switch(o){case"input":V(n),be(n,d,!1);break;case"textarea":V(n),Me(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ne(d.value));break;case"select":n.multiple=!!d.multiple,_=d.value,_!=null?P(n,!!d.multiple,_,!1):d.defaultValue!=null&&P(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ko)}switch(o){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return An(r),null;case 6:if(n&&r.stateNode!=null)xp(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(o=$r(Ha.current),$r(Li.current),Xo(r)){if(d=r.stateNode,o=r.memoizedProps,d[Pi]=r,(_=d.nodeValue!==o)&&(n=Qn,n!==null))switch(n.tag){case 3:zo(d.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(d.nodeValue,o,(n.mode&1)!==0)}_&&(r.flags|=4)}else d=(o.nodeType===9?o:o.ownerDocument).createTextNode(d),d[Pi]=r,r.stateNode=d}return An(r),null;case 13:if(Wt(Kt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&ei!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sh(),Ps(),r.flags|=98560,_=!1;else if(_=Xo(r),d!==null&&d.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Pi]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),_=!1}else gi!==null&&(ju(gi),gi=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Kt.current&1)!==0?cn===0&&(cn=3):Yu())),r.updateQueue!==null&&(r.flags|=4),An(r),null);case 4:return Is(),Iu(n,r),n===null&&Ia(r.stateNode.containerInfo),An(r),null;case 10:return lu(r.type._context),An(r),null;case 17:return Gn(r.type)&&Ho(),An(r),null;case 19:if(Wt(Kt),_=r.memoizedState,_===null)return An(r),null;if(d=(r.flags&128)!==0,R=_.rendering,R===null)if(d)Xa(_,!1);else{if(cn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=Zo(n),R!==null){for(r.flags|=128,Xa(_,!1),d=R.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=o,o=r.child;o!==null;)_=o,n=d,_.flags&=14680066,R=_.alternate,R===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=R.childLanes,_.lanes=R.lanes,_.child=R.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=R.memoizedProps,_.memoizedState=R.memoizedState,_.updateQueue=R.updateQueue,_.type=R.type,n=R.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht(Kt,Kt.current&1|2),r.child}n=n.sibling}_.tail!==null&&Ze()>zs&&(r.flags|=128,d=!0,Xa(_,!1),r.lanes=4194304)}else{if(!d)if(n=Zo(R),n!==null){if(r.flags|=128,d=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!R.alternate&&!qt)return An(r),null}else 2*Ze()-_.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,d=!0,Xa(_,!1),r.lanes=4194304);_.isBackwards?(R.sibling=r.child,r.child=R):(o=_.last,o!==null?o.sibling=R:r.child=R,_.last=R)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=Ze(),r.sibling=null,o=Kt.current,Ht(Kt,d?o&1|2:o&1),r):(An(r),null);case 22:case 23:return qu(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(ti&1073741824)!==0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function _x(n,r){switch(nu(r),r.tag){case 1:return Gn(r.type)&&Ho(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Is(),Wt(Vn),Wt(wn),mu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return hu(r),null;case 13:if(Wt(Kt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Wt(Kt),null;case 4:return Is(),null;case 10:return lu(r.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var ol=!1,bn=!1,yx=typeof WeakSet=="function"?WeakSet:Set,it=null;function Os(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(d){en(n,r,d)}else o.current=null}function Uu(n,r,o){try{o()}catch(d){en(n,r,d)}}var _p=!1;function Sx(n,r){if(qc=bo,n=Jf(),kc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var d=o.getSelection&&o.getSelection();if(d&&d.rangeCount!==0){o=d.anchorNode;var p=d.anchorOffset,_=d.focusNode;d=d.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var R=0,H=-1,X=-1,he=0,Oe=0,ze=n,Ie=null;t:for(;;){for(var Qe;ze!==o||p!==0&&ze.nodeType!==3||(H=R+p),ze!==_||d!==0&&ze.nodeType!==3||(X=R+d),ze.nodeType===3&&(R+=ze.nodeValue.length),(Qe=ze.firstChild)!==null;)Ie=ze,ze=Qe;for(;;){if(ze===n)break t;if(Ie===o&&++he===p&&(H=R),Ie===_&&++Oe===d&&(X=R),(Qe=ze.nextSibling)!==null)break;ze=Ie,Ie=ze.parentNode}ze=Qe}o=H===-1||X===-1?null:{start:H,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(Yc={focusedElem:n,selectionRange:o},bo=!1,it=r;it!==null;)if(r=it,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,it=n;else for(;it!==null;){r=it;try{var st=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var at=st.memoizedProps,nn=st.memoizedState,le=r.stateNode,K=le.getSnapshotBeforeUpdate(r.elementType===r.type?at:vi(r.type,at),nn);le.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ve){en(r,r.return,Ve)}if(n=r.sibling,n!==null){n.return=r.return,it=n;break}it=r.return}return st=_p,_p=!1,st}function qa(n,r,o){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Uu(r,o,_)}p=p.next}while(p!==d)}}function ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var d=o.create;o.destroy=d()}o=o.next}while(o!==r)}}function Ou(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function yp(n){var r=n.alternate;r!==null&&(n.alternate=null,yp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Pi],delete r[Oa],delete r[Zc],delete r[ix],delete r[rx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sp(n){return n.tag===5||n.tag===3||n.tag===4}function Mp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fu(n,r,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ko));else if(d!==4&&(n=n.child,n!==null))for(Fu(n,r,o),n=n.sibling;n!==null;)Fu(n,r,o),n=n.sibling}function zu(n,r,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(zu(n,r,o),n=n.sibling;n!==null;)zu(n,r,o),n=n.sibling}var Sn=null,xi=!1;function xr(n,r,o){for(o=o.child;o!==null;)Ep(n,r,o),o=o.sibling}function Ep(n,r,o){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(_t,o)}catch{}switch(o.tag){case 5:bn||Os(o,r);case 6:var d=Sn,p=xi;Sn=null,xr(n,r,o),Sn=d,xi=p,Sn!==null&&(xi?(n=Sn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Sn.removeChild(o.stateNode));break;case 18:Sn!==null&&(xi?(n=Sn,o=o.stateNode,n.nodeType===8?Jc(n.parentNode,o):n.nodeType===1&&Jc(n,o),Ta(n)):Jc(Sn,o.stateNode));break;case 4:d=Sn,p=xi,Sn=o.stateNode.containerInfo,xi=!0,xr(n,r,o),Sn=d,xi=p;break;case 0:case 11:case 14:case 15:if(!bn&&(d=o.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var _=p,R=_.destroy;_=_.tag,R!==void 0&&((_&2)!==0||(_&4)!==0)&&Uu(o,r,R),p=p.next}while(p!==d)}xr(n,r,o);break;case 1:if(!bn&&(Os(o,r),d=o.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=o.memoizedProps,d.state=o.memoizedState,d.componentWillUnmount()}catch(H){en(o,r,H)}xr(n,r,o);break;case 21:xr(n,r,o);break;case 22:o.mode&1?(bn=(d=bn)||o.memoizedState!==null,xr(n,r,o),bn=d):xr(n,r,o);break;default:xr(n,r,o)}}function wp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new yx),r.forEach(function(d){var p=Px.bind(null,n,d);o.has(d)||(o.add(d),d.then(p,p))})}}function _i(n,r){var o=r.deletions;if(o!==null)for(var d=0;d<o.length;d++){var p=o[d];try{var _=n,R=r,H=R;e:for(;H!==null;){switch(H.tag){case 5:Sn=H.stateNode,xi=!1;break e;case 3:Sn=H.stateNode.containerInfo,xi=!0;break e;case 4:Sn=H.stateNode.containerInfo,xi=!0;break e}H=H.return}if(Sn===null)throw Error(t(160));Ep(_,R,p),Sn=null,xi=!1;var X=p.alternate;X!==null&&(X.return=null),p.return=null}catch(he){en(p,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Tp(r,n),r=r.sibling}function Tp(n,r){var o=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(r,n),Di(n),d&4){try{qa(3,n,n.return),ll(3,n)}catch(at){en(n,n.return,at)}try{qa(5,n,n.return)}catch(at){en(n,n.return,at)}}break;case 1:_i(r,n),Di(n),d&512&&o!==null&&Os(o,o.return);break;case 5:if(_i(r,n),Di(n),d&512&&o!==null&&Os(o,o.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(at){en(n,n.return,at)}}if(d&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,R=o!==null?o.memoizedProps:_,H=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{H==="input"&&_.type==="radio"&&_.name!=null&&Te(p,_),dt(H,R);var he=dt(H,_);for(R=0;R<X.length;R+=2){var Oe=X[R],ze=X[R+1];Oe==="style"?Fe(p,ze):Oe==="dangerouslySetInnerHTML"?nt(p,ze):Oe==="children"?Ae(p,ze):T(p,Oe,ze,he)}switch(H){case"input":Le(p,_);break;case"textarea":ge(p,_);break;case"select":var Ie=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Qe=_.value;Qe!=null?P(p,!!_.multiple,Qe,!1):Ie!==!!_.multiple&&(_.defaultValue!=null?P(p,!!_.multiple,_.defaultValue,!0):P(p,!!_.multiple,_.multiple?[]:"",!1))}p[Oa]=_}catch(at){en(n,n.return,at)}}break;case 6:if(_i(r,n),Di(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(at){en(n,n.return,at)}}break;case 3:if(_i(r,n),Di(n),d&4&&o!==null&&o.memoizedState.isDehydrated)try{Ta(r.containerInfo)}catch(at){en(n,n.return,at)}break;case 4:_i(r,n),Di(n);break;case 13:_i(r,n),Di(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Hu=Ze())),d&4&&wp(n);break;case 22:if(Oe=o!==null&&o.memoizedState!==null,n.mode&1?(bn=(he=bn)||Oe,_i(r,n),bn=he):_i(r,n),Di(n),d&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Oe&&(n.mode&1)!==0)for(it=n,Oe=n.child;Oe!==null;){for(ze=it=Oe;it!==null;){switch(Ie=it,Qe=Ie.child,Ie.tag){case 0:case 11:case 14:case 15:qa(4,Ie,Ie.return);break;case 1:Os(Ie,Ie.return);var st=Ie.stateNode;if(typeof st.componentWillUnmount=="function"){d=Ie,o=Ie.return;try{r=d,st.props=r.memoizedProps,st.state=r.memoizedState,st.componentWillUnmount()}catch(at){en(d,o,at)}}break;case 5:Os(Ie,Ie.return);break;case 22:if(Ie.memoizedState!==null){Cp(ze);continue}}Qe!==null?(Qe.return=Ie,it=Qe):Cp(ze)}Oe=Oe.sibling}e:for(Oe=null,ze=n;;){if(ze.tag===5){if(Oe===null){Oe=ze;try{p=ze.stateNode,he?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(H=ze.stateNode,X=ze.memoizedProps.style,R=X!=null&&X.hasOwnProperty("display")?X.display:null,H.style.display=Je("display",R))}catch(at){en(n,n.return,at)}}}else if(ze.tag===6){if(Oe===null)try{ze.stateNode.nodeValue=he?"":ze.memoizedProps}catch(at){en(n,n.return,at)}}else if((ze.tag!==22&&ze.tag!==23||ze.memoizedState===null||ze===n)&&ze.child!==null){ze.child.return=ze,ze=ze.child;continue}if(ze===n)break e;for(;ze.sibling===null;){if(ze.return===null||ze.return===n)break e;Oe===ze&&(Oe=null),ze=ze.return}Oe===ze&&(Oe=null),ze.sibling.return=ze.return,ze=ze.sibling}}break;case 19:_i(r,n),Di(n),d&4&&wp(n);break;case 21:break;default:_i(r,n),Di(n)}}function Di(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Sp(o)){var d=o;break e}o=o.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(Ae(p,""),d.flags&=-33);var _=Mp(n);zu(n,_,p);break;case 3:case 4:var R=d.stateNode.containerInfo,H=Mp(n);Fu(n,H,R);break;default:throw Error(t(161))}}catch(X){en(n,n.return,X)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Mx(n,r,o){it=n,Ap(n)}function Ap(n,r,o){for(var d=(n.mode&1)!==0;it!==null;){var p=it,_=p.child;if(p.tag===22&&d){var R=p.memoizedState!==null||ol;if(!R){var H=p.alternate,X=H!==null&&H.memoizedState!==null||bn;H=ol;var he=bn;if(ol=R,(bn=X)&&!he)for(it=p;it!==null;)R=it,X=R.child,R.tag===22&&R.memoizedState!==null?Rp(p):X!==null?(X.return=R,it=X):Rp(p);for(;_!==null;)it=_,Ap(_),_=_.sibling;it=p,ol=H,bn=he}bp(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,it=_):bp(n)}}function bp(n){for(;it!==null;){var r=it;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bn||ll(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!bn)if(o===null)d.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:vi(r.type,o.memoizedProps);d.componentDidUpdate(p,o.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Ch(r,_,d);break;case 3:var R=r.updateQueue;if(R!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ch(r,R,o)}break;case 5:var H=r.stateNode;if(o===null&&r.flags&4){o=H;var X=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&o.focus();break;case"img":X.src&&(o.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Oe=he.memoizedState;if(Oe!==null){var ze=Oe.dehydrated;ze!==null&&Ta(ze)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||r.flags&512&&Ou(r)}catch(Ie){en(r,r.return,Ie)}}if(r===n){it=null;break}if(o=r.sibling,o!==null){o.return=r.return,it=o;break}it=r.return}}function Cp(n){for(;it!==null;){var r=it;if(r===n){it=null;break}var o=r.sibling;if(o!==null){o.return=r.return,it=o;break}it=r.return}}function Rp(n){for(;it!==null;){var r=it;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ll(4,r)}catch(X){en(r,o,X)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var p=r.return;try{d.componentDidMount()}catch(X){en(r,p,X)}}var _=r.return;try{Ou(r)}catch(X){en(r,_,X)}break;case 5:var R=r.return;try{Ou(r)}catch(X){en(r,R,X)}}}catch(X){en(r,r.return,X)}if(r===n){it=null;break}var H=r.sibling;if(H!==null){H.return=r.return,it=H;break}it=r.return}}var Ex=Math.ceil,cl=L.ReactCurrentDispatcher,ku=L.ReactCurrentOwner,ui=L.ReactCurrentBatchConfig,Pt=0,gn=null,sn=null,Mn=0,ti=0,Fs=hr(0),cn=0,Ya=null,Jr=0,ul=0,Bu=0,$a=null,jn=null,Hu=0,zs=1/0,Yi=null,dl=!1,Vu=null,_r=null,fl=!1,yr=null,hl=0,Ka=0,Gu=null,pl=-1,ml=0;function On(){return(Pt&6)!==0?Ze():pl!==-1?pl:pl=Ze()}function Sr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&Mn!==0?Mn&-Mn:ax.transition!==null?(ml===0&&(ml=Vr()),ml):(n=Dt,n!==0||(n=window.event,n=n===void 0?16:Lf(n.type)),n)}function yi(n,r,o,d){if(50<Ka)throw Ka=0,Gu=null,Error(t(185));Gr(n,o,d),((Pt&2)===0||n!==gn)&&(n===gn&&((Pt&2)===0&&(ul|=o),cn===4&&Mr(n,Mn)),Xn(n,d),o===1&&Pt===0&&(r.mode&1)===0&&(zs=Ze()+500,Go&&mr()))}function Xn(n,r){var o=n.callbackNode;Bi(n,r);var d=Hn(n,n===gn?Mn:0);if(d===0)o!==null&&qe(o),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(o!=null&&qe(o),r===1)n.tag===0?sx(Lp.bind(null,n)):gh(Lp.bind(null,n)),tx(function(){(Pt&6)===0&&mr()}),o=null;else{switch(Eo(d)){case 1:o=lt;break;case 4:o=wt;break;case 16:o=Nt;break;case 536870912:o=Xt;break;default:o=Nt}o=kp(o,Pp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Pp(n,r){if(pl=-1,ml=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ks()&&n.callbackNode!==o)return null;var d=Hn(n,n===gn?Mn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=gl(n,d);else{r=d;var p=Pt;Pt|=2;var _=Dp();(gn!==n||Mn!==r)&&(Yi=null,zs=Ze()+500,Qr(n,r));do try{Ax();break}catch(H){Np(n,H)}while(!0);ou(),cl.current=_,Pt=p,sn!==null?r=0:(gn=null,Mn=0,r=cn)}if(r!==0){if(r===2&&(p=Hr(n),p!==0&&(d=p,r=Wu(n,p))),r===1)throw o=Ya,Qr(n,0),Mr(n,d),Xn(n,Ze()),o;if(r===6)Mr(n,d);else{if(p=n.current.alternate,(d&30)===0&&!wx(p)&&(r=gl(n,d),r===2&&(_=Hr(n),_!==0&&(d=_,r=Wu(n,_))),r===1))throw o=Ya,Qr(n,0),Mr(n,d),Xn(n,Ze()),o;switch(n.finishedWork=p,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:es(n,jn,Yi);break;case 3:if(Mr(n,d),(d&130023424)===d&&(r=Hu+500-Ze(),10<r)){if(Hn(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){On(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Kc(es.bind(null,n,jn,Yi),r);break}es(n,jn,Yi);break;case 4:if(Mr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,p=-1;0<d;){var R=31-xt(d);_=1<<R,R=r[R],R>p&&(p=R),d&=~_}if(d=p,d=Ze()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Ex(d/1960))-d,10<d){n.timeoutHandle=Kc(es.bind(null,n,jn,Yi),d);break}es(n,jn,Yi);break;case 5:es(n,jn,Yi);break;default:throw Error(t(329))}}}return Xn(n,Ze()),n.callbackNode===o?Pp.bind(null,n):null}function Wu(n,r){var o=$a;return n.current.memoizedState.isDehydrated&&(Qr(n,r).flags|=256),n=gl(n,r),n!==2&&(r=jn,jn=o,r!==null&&ju(r)),n}function ju(n){jn===null?jn=n:jn.push.apply(jn,n)}function wx(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var d=0;d<o.length;d++){var p=o[d],_=p.getSnapshot;p=p.value;try{if(!mi(_(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Mr(n,r){for(r&=~Bu,r&=~ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-xt(r),d=1<<o;n[o]=-1,r&=~d}}function Lp(n){if((Pt&6)!==0)throw Error(t(327));ks();var r=Hn(n,0);if((r&1)===0)return Xn(n,Ze()),null;var o=gl(n,r);if(n.tag!==0&&o===2){var d=Hr(n);d!==0&&(r=d,o=Wu(n,d))}if(o===1)throw o=Ya,Qr(n,0),Mr(n,r),Xn(n,Ze()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,es(n,jn,Yi),Xn(n,Ze()),null}function Xu(n,r){var o=Pt;Pt|=1;try{return n(r)}finally{Pt=o,Pt===0&&(zs=Ze()+500,Go&&mr())}}function Zr(n){yr!==null&&yr.tag===0&&(Pt&6)===0&&ks();var r=Pt;Pt|=1;var o=ui.transition,d=Dt;try{if(ui.transition=null,Dt=1,n)return n()}finally{Dt=d,ui.transition=o,Pt=r,(Pt&6)===0&&mr()}}function qu(){ti=Fs.current,Wt(Fs)}function Qr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,ex(o)),sn!==null)for(o=sn.return;o!==null;){var d=o;switch(nu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Ho();break;case 3:Is(),Wt(Vn),Wt(wn),mu();break;case 5:hu(d);break;case 4:Is();break;case 13:Wt(Kt);break;case 19:Wt(Kt);break;case 10:lu(d.type._context);break;case 22:case 23:qu()}o=o.return}if(gn=n,sn=n=Er(n.current,null),Mn=ti=r,cn=0,Ya=null,Bu=ul=Jr=0,jn=$a=null,Yr!==null){for(r=0;r<Yr.length;r++)if(o=Yr[r],d=o.interleaved,d!==null){o.interleaved=null;var p=d.next,_=o.pending;if(_!==null){var R=_.next;_.next=p,d.next=R}o.pending=d}Yr=null}return n}function Np(n,r){do{var o=sn;try{if(ou(),Qo.current=il,el){for(var d=Jt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}el=!1}if(Kr=0,mn=ln=Jt=null,Va=!1,Ga=0,ku.current=null,o===null||o.return===null){cn=1,Ya=r,sn=null;break}e:{var _=n,R=o.return,H=o,X=r;if(r=Mn,H.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var he=X,Oe=H,ze=Oe.tag;if((Oe.mode&1)===0&&(ze===0||ze===11||ze===15)){var Ie=Oe.alternate;Ie?(Oe.updateQueue=Ie.updateQueue,Oe.memoizedState=Ie.memoizedState,Oe.lanes=Ie.lanes):(Oe.updateQueue=null,Oe.memoizedState=null)}var Qe=ip(R);if(Qe!==null){Qe.flags&=-257,rp(Qe,R,H,_,r),Qe.mode&1&&np(_,he,r),r=Qe,X=he;var st=r.updateQueue;if(st===null){var at=new Set;at.add(X),r.updateQueue=at}else st.add(X);break e}else{if((r&1)===0){np(_,he,r),Yu();break e}X=Error(t(426))}}else if(qt&&H.mode&1){var nn=ip(R);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),rp(nn,R,H,_,r),su(Us(X,H));break e}}_=X=Us(X,H),cn!==4&&(cn=2),$a===null?$a=[_]:$a.push(_),_=R;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var le=ep(_,X,r);bh(_,le);break e;case 1:H=X;var K=_.type,ue=_.stateNode;if((_.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(_r===null||!_r.has(ue)))){_.flags|=65536,r&=-r,_.lanes|=r;var Ve=tp(_,H,r);bh(_,Ve);break e}}_=_.return}while(_!==null)}Up(o)}catch(ct){r=ct,sn===o&&o!==null&&(sn=o=o.return);continue}break}while(!0)}function Dp(){var n=cl.current;return cl.current=il,n===null?il:n}function Yu(){(cn===0||cn===3||cn===2)&&(cn=4),gn===null||(Jr&268435455)===0&&(ul&268435455)===0||Mr(gn,Mn)}function gl(n,r){var o=Pt;Pt|=2;var d=Dp();(gn!==n||Mn!==r)&&(Yi=null,Qr(n,r));do try{Tx();break}catch(p){Np(n,p)}while(!0);if(ou(),Pt=o,cl.current=d,sn!==null)throw Error(t(261));return gn=null,Mn=0,cn}function Tx(){for(;sn!==null;)Ip(sn)}function Ax(){for(;sn!==null&&!et();)Ip(sn)}function Ip(n){var r=zp(n.alternate,n,ti);n.memoizedProps=n.pendingProps,r===null?Up(n):sn=r,ku.current=null}function Up(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=xx(o,r,ti),o!==null){sn=o;return}}else{if(o=_x(o,r),o!==null){o.flags&=32767,sn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{cn=6,sn=null;return}}if(r=r.sibling,r!==null){sn=r;return}sn=r=n}while(r!==null);cn===0&&(cn=5)}function es(n,r,o){var d=Dt,p=ui.transition;try{ui.transition=null,Dt=1,bx(n,r,o,d)}finally{ui.transition=p,Dt=d}return null}function bx(n,r,o,d){do ks();while(yr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=o.lanes|o.childLanes;if(Tc(n,_),n===gn&&(sn=gn=null,Mn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||fl||(fl=!0,kp(Nt,function(){return ks(),null})),_=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||_){_=ui.transition,ui.transition=null;var R=Dt;Dt=1;var H=Pt;Pt|=4,ku.current=null,Sx(n,o),Tp(o,n),qv(Yc),bo=!!qc,Yc=qc=null,n.current=o,Mx(o),rt(),Pt=H,Dt=R,ui.transition=_}else n.current=o;if(fl&&(fl=!1,yr=n,hl=p),_=n.pendingLanes,_===0&&(_r=null),tn(o.stateNode),Xn(n,Ze()),r!==null)for(d=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],d(p.value,{componentStack:p.stack,digest:p.digest});if(dl)throw dl=!1,n=Vu,Vu=null,n;return(hl&1)!==0&&n.tag!==0&&ks(),_=n.pendingLanes,(_&1)!==0?n===Gu?Ka++:(Ka=0,Gu=n):Ka=0,mr(),null}function ks(){if(yr!==null){var n=Eo(hl),r=ui.transition,o=Dt;try{if(ui.transition=null,Dt=16>n?16:n,yr===null)var d=!1;else{if(n=yr,yr=null,hl=0,(Pt&6)!==0)throw Error(t(331));var p=Pt;for(Pt|=4,it=n.current;it!==null;){var _=it,R=_.child;if((it.flags&16)!==0){var H=_.deletions;if(H!==null){for(var X=0;X<H.length;X++){var he=H[X];for(it=he;it!==null;){var Oe=it;switch(Oe.tag){case 0:case 11:case 15:qa(8,Oe,_)}var ze=Oe.child;if(ze!==null)ze.return=Oe,it=ze;else for(;it!==null;){Oe=it;var Ie=Oe.sibling,Qe=Oe.return;if(yp(Oe),Oe===he){it=null;break}if(Ie!==null){Ie.return=Qe,it=Ie;break}it=Qe}}}var st=_.alternate;if(st!==null){var at=st.child;if(at!==null){st.child=null;do{var nn=at.sibling;at.sibling=null,at=nn}while(at!==null)}}it=_}}if((_.subtreeFlags&2064)!==0&&R!==null)R.return=_,it=R;else e:for(;it!==null;){if(_=it,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:qa(9,_,_.return)}var le=_.sibling;if(le!==null){le.return=_.return,it=le;break e}it=_.return}}var K=n.current;for(it=K;it!==null;){R=it;var ue=R.child;if((R.subtreeFlags&2064)!==0&&ue!==null)ue.return=R,it=ue;else e:for(R=K;it!==null;){if(H=it,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:ll(9,H)}}catch(ct){en(H,H.return,ct)}if(H===R){it=null;break e}var Ve=H.sibling;if(Ve!==null){Ve.return=H.return,it=Ve;break e}it=H.return}}if(Pt=p,mr(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(_t,n)}catch{}d=!0}return d}finally{Dt=o,ui.transition=r}}return!1}function Op(n,r,o){r=Us(o,r),r=ep(n,r,1),n=vr(n,r,1),r=On(),n!==null&&(Gr(n,1,r),Xn(n,r))}function en(n,r,o){if(n.tag===3)Op(n,n,o);else for(;r!==null;){if(r.tag===3){Op(r,n,o);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(_r===null||!_r.has(d))){n=Us(o,n),n=tp(r,n,1),r=vr(r,n,1),n=On(),r!==null&&(Gr(r,1,n),Xn(r,n));break}}r=r.return}}function Cx(n,r,o){var d=n.pingCache;d!==null&&d.delete(r),r=On(),n.pingedLanes|=n.suspendedLanes&o,gn===n&&(Mn&o)===o&&(cn===4||cn===3&&(Mn&130023424)===Mn&&500>Ze()-Hu?Qr(n,0):Bu|=o),Xn(n,r)}function Fp(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ut,Ut<<=1,(Ut&130023424)===0&&(Ut=4194304)));var o=On();n=ji(n,r),n!==null&&(Gr(n,r,o),Xn(n,o))}function Rx(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Fp(n,o)}function Px(n,r){var o=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),Fp(n,o)}var zp;zp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Wn=!1,vx(n,r,o);Wn=(n.flags&131072)!==0}else Wn=!1,qt&&(r.flags&1048576)!==0&&vh(r,jo,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;al(n,r),n=r.pendingProps;var p=bs(r,wn.current);Ds(r,o),p=xu(null,r,d,n,p,o);var _=_u();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(d)?(_=!0,Vo(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,du(r),p.updater=rl,r.stateNode=p,p._reactInternals=r,Tu(r,d,n,o),r=Ru(null,r,d,!0,_,o)):(r.tag=0,qt&&_&&tu(r),Un(null,r,p,o),r=r.child),r;case 16:d=r.elementType;e:{switch(al(n,r),n=r.pendingProps,p=d._init,d=p(d._payload),r.type=d,p=r.tag=Nx(d),n=vi(d,n),p){case 0:r=Cu(null,r,d,n,o);break e;case 1:r=up(null,r,d,n,o);break e;case 11:r=sp(null,r,d,n,o);break e;case 14:r=ap(null,r,d,vi(d.type,n),o);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),Cu(n,r,d,p,o);case 1:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),up(n,r,d,p,o);case 3:e:{if(dp(r),n===null)throw Error(t(387));d=r.pendingProps,_=r.memoizedState,p=_.element,Ah(n,r),Jo(r,d,null,o);var R=r.memoizedState;if(d=R.element,_.isDehydrated)if(_={element:d,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=Us(Error(t(423)),r),r=fp(n,r,d,o,p);break e}else if(d!==p){p=Us(Error(t(424)),r),r=fp(n,r,d,o,p);break e}else for(ei=fr(r.stateNode.containerInfo.firstChild),Qn=r,qt=!0,gi=null,o=wh(r,null,d,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ps(),d===p){r=qi(n,r,o);break e}Un(n,r,d,o)}r=r.child}return r;case 5:return Rh(r),n===null&&ru(r),d=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,R=p.children,$c(d,p)?R=null:_!==null&&$c(d,_)&&(r.flags|=32),cp(n,r),Un(n,r,R,o),r.child;case 6:return n===null&&ru(r),null;case 13:return hp(n,r,o);case 4:return fu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Ls(r,null,d,o):Un(n,r,d,o),r.child;case 11:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),sp(n,r,d,p,o);case 7:return Un(n,r,r.pendingProps,o),r.child;case 8:return Un(n,r,r.pendingProps.children,o),r.child;case 12:return Un(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(d=r.type._context,p=r.pendingProps,_=r.memoizedProps,R=p.value,Ht(Yo,d._currentValue),d._currentValue=R,_!==null)if(mi(_.value,R)){if(_.children===p.children&&!Vn.current){r=qi(n,r,o);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var H=_.dependencies;if(H!==null){R=_.child;for(var X=H.firstContext;X!==null;){if(X.context===d){if(_.tag===1){X=Xi(-1,o&-o),X.tag=2;var he=_.updateQueue;if(he!==null){he=he.shared;var Oe=he.pending;Oe===null?X.next=X:(X.next=Oe.next,Oe.next=X),he.pending=X}}_.lanes|=o,X=_.alternate,X!==null&&(X.lanes|=o),cu(_.return,o,r),H.lanes|=o;break}X=X.next}}else if(_.tag===10)R=_.type===r.type?null:_.child;else if(_.tag===18){if(R=_.return,R===null)throw Error(t(341));R.lanes|=o,H=R.alternate,H!==null&&(H.lanes|=o),cu(R,o,r),R=_.sibling}else R=_.child;if(R!==null)R.return=_;else for(R=_;R!==null;){if(R===r){R=null;break}if(_=R.sibling,_!==null){_.return=R.return,R=_;break}R=R.return}_=R}Un(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,d=r.pendingProps.children,Ds(r,o),p=li(p),d=d(p),r.flags|=1,Un(n,r,d,o),r.child;case 14:return d=r.type,p=vi(d,r.pendingProps),p=vi(d.type,p),ap(n,r,d,p,o);case 15:return op(n,r,r.type,r.pendingProps,o);case 17:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:vi(d,p),al(n,r),r.tag=1,Gn(d)?(n=!0,Vo(r)):n=!1,Ds(r,o),Zh(r,d,p),Tu(r,d,p,o),Ru(null,r,d,!0,n,o);case 19:return mp(n,r,o);case 22:return lp(n,r,o)}throw Error(t(156,r.tag))};function kp(n,r){return Re(n,r)}function Lx(n,r,o,d){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,r,o,d){return new Lx(n,r,o,d)}function $u(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Nx(n){if(typeof n=="function")return $u(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Q)return 11;if(n===fe)return 14}return 2}function Er(n,r){var o=n.alternate;return o===null?(o=di(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function vl(n,r,o,d,p,_){var R=2;if(d=n,typeof n=="function")$u(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case U:return ts(o.children,p,_,r);case I:R=8,p|=8;break;case A:return n=di(12,o,r,p|2),n.elementType=A,n.lanes=_,n;case q:return n=di(13,o,r,p),n.elementType=q,n.lanes=_,n;case ie:return n=di(19,o,r,p),n.elementType=ie,n.lanes=_,n;case me:return xl(o,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:R=10;break e;case B:R=9;break e;case Q:R=11;break e;case fe:R=14;break e;case Y:R=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=di(R,o,r,p),r.elementType=n,r.type=d,r.lanes=_,r}function ts(n,r,o,d){return n=di(7,n,d,r),n.lanes=o,n}function xl(n,r,o,d){return n=di(22,n,d,r),n.elementType=me,n.lanes=o,n.stateNode={isHidden:!1},n}function Ku(n,r,o){return n=di(6,n,null,r),n.lanes=o,n}function Ju(n,r,o){return r=di(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Dx(n,r,o,d,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zu(n,r,o,d,p,_,R,H,X){return n=new Dx(n,r,o,H,X),r===1?(r=1,_===!0&&(r|=8)):r=0,_=di(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:d,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(_),n}function Ix(n,r,o){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:d==null?null:""+d,children:n,containerInfo:r,implementation:o}}function Bp(n){if(!n)return pr;n=n._reactInternals;e:{if(Rt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return ph(n,o,r)}return r}function Hp(n,r,o,d,p,_,R,H,X){return n=Zu(o,d,!0,n,p,_,R,H,X),n.context=Bp(null),o=n.current,d=On(),p=Sr(o),_=Xi(d,p),_.callback=r??null,vr(o,_,p),n.current.lanes=p,Gr(n,p,d),Xn(n,d),n}function _l(n,r,o,d){var p=r.current,_=On(),R=Sr(p);return o=Bp(o),r.context===null?r.context=o:r.pendingContext=o,r=Xi(_,R),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=vr(p,r,R),n!==null&&(yi(n,p,R,_),Ko(n,p,R)),R}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Qu(n,r){Vp(n,r),(n=n.alternate)&&Vp(n,r)}function Ux(){return null}var Gp=typeof reportError=="function"?reportError:function(n){console.error(n)};function ed(n){this._internalRoot=n}Sl.prototype.render=ed.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));_l(n,r,null,null)},Sl.prototype.unmount=ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Zr(function(){_l(null,n,null,null)}),r[Hi]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Af();n={blockedOn:null,target:n,priority:r};for(var o=0;o<cr.length&&r!==0&&r<cr[o].priority;o++);cr.splice(o,0,n),o===0&&Rf(n)}};function td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function Ox(n,r,o,d,p){if(p){if(typeof d=="function"){var _=d;d=function(){var he=yl(R);_.call(he)}}var R=Hp(r,d,n,0,null,!1,!1,"",Wp);return n._reactRootContainer=R,n[Hi]=R.current,Ia(n.nodeType===8?n.parentNode:n),Zr(),R}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var H=d;d=function(){var he=yl(X);H.call(he)}}var X=Zu(n,0,!1,null,null,!1,!1,"",Wp);return n._reactRootContainer=X,n[Hi]=X.current,Ia(n.nodeType===8?n.parentNode:n),Zr(function(){_l(r,X,o,d)}),X}function El(n,r,o,d,p){var _=o._reactRootContainer;if(_){var R=_;if(typeof p=="function"){var H=p;p=function(){var X=yl(R);H.call(X)}}_l(r,R,n,p)}else R=Ox(o,r,n,p,d);return yl(R)}wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=on(r.pendingLanes);o!==0&&(ya(r,o|1),Xn(r,Ze()),(Pt&6)===0&&(zs=Ze()+500,mr()))}break;case 13:Zr(function(){var d=ji(n,1);if(d!==null){var p=On();yi(d,n,1,p)}}),Qu(n,1)}},Ac=function(n){if(n.tag===13){var r=ji(n,134217728);if(r!==null){var o=On();yi(r,n,134217728,o)}Qu(n,134217728)}},Tf=function(n){if(n.tag===13){var r=Sr(n),o=ji(n,r);if(o!==null){var d=On();yi(o,n,r,d)}Qu(n,r)}},Af=function(){return Dt},bf=function(n,r){var o=Dt;try{return Dt=n,r()}finally{Dt=o}},ve=function(n,r,o){switch(r){case"input":if(Le(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var d=o[r];if(d!==n&&d.form===n.form){var p=Bo(d);if(!p)throw Error(t(90));pe(d),Le(d,p)}}}break;case"textarea":ge(n,o);break;case"select":r=o.value,r!=null&&P(n,!!o.multiple,r,!1)}},bt=Xu,mt=Zr;var Fx={usingClientEntryPoint:!1,Events:[Fa,Ts,Bo,gt,Et,Xu]},Ja={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ae(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||Ux,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{_t=wl.inject(zx),tt=wl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx,qn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!td(r))throw Error(t(200));return Ix(n,r,null,o)},qn.createRoot=function(n,r){if(!td(n))throw Error(t(299));var o=!1,d="",p=Gp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Zu(n,1,!1,null,null,o,!1,d,p),n[Hi]=r.current,Ia(n.nodeType===8?n.parentNode:n),new ed(r)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ae(r),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return Zr(n)},qn.hydrate=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!0,o)},qn.hydrateRoot=function(n,r,o){if(!td(n))throw Error(t(405));var d=o!=null&&o.hydratedSources||null,p=!1,_="",R=Gp;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(_=o.identifierPrefix),o.onRecoverableError!==void 0&&(R=o.onRecoverableError)),r=Hp(r,null,n,1,o??null,p,!1,_,R),n[Hi]=r.current,Ia(n),d)for(n=0;n<d.length;n++)o=d[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new Sl(r)},qn.render=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!1,o)},qn.unmountComponentAtNode=function(n){if(!Ml(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},qn.unstable_batchedUpdates=Xu,qn.unstable_renderSubtreeIntoContainer=function(n,r,o,d){if(!Ml(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,r,o,!1,d)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Qp;function Yx(){if(Qp)return rd.exports;Qp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rd.exports=qx(),rd.exports}var em;function $x(){if(em)return Tl;em=1;var i=Yx();return Tl.createRoot=i.createRoot,Tl.hydrateRoot=i.hydrateRoot,Tl}var Kx=$x();const Jx=i0(Kx),Zx="modulepreload",Qx=function(i){return"/pr-preview/pr-71/"+i},tm={},s0=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),f=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));a=c(t.map(h=>{if(h=Qx(h),h in tm)return;tm[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":Zx,m||(v.as="script"),v.crossOrigin="",v.href=h,f&&v.setAttribute("nonce",f),document.head.appendChild(v),m)return new Promise((S,M)=>{v.addEventListener("load",S),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return a.then(c=>{for(const u of c||[])u.status==="rejected"&&l(u.reason);return e().catch(l)})};var Ln=Math.PI,Yt=Ln*2,nr=Ln/180,e_=180/Ln,t_=1440,n_=398600.8,ri=6378.135,ir=60/Math.sqrt(ri*ri*ri/n_),od=ri*ir/60,i_=1/ir,fs=.001082616,r_=-253881e-11,s_=-165597e-11,hs=r_/fs,po=2/3,a0=1440/(2*Ln);function o0(i,e){for(var t=[31,i%4===0?29:28,31,30,31,30,31,31,30,31,30,31],s=Math.floor(e),a=1,l=0;s>l+t[a-1]&&a<12;)l+=t[a-1],a+=1;var c=a,u=s-l,f=(e-s)*24,h=Math.floor(f);f=(f-h)*60;var m=Math.floor(f),g=(f-m)*60;return{mon:c,day:u,hr:h,minute:m,sec:g}}function nm(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*i-Math.floor(7*(i+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((c/6e4+l/60+a)/60+s)/24}function vc(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(i instanceof Date){var u=i;return nm(u.getUTCFullYear(),u.getUTCMonth()+1,u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds())}return nm(i,e,t,s,a,l,c)}function l0(i,e){var t=i.e3,s=i.ee2,a=i.peo,l=i.pgho,c=i.pho,u=i.pinco,f=i.plo,h=i.se2,m=i.se3,g=i.sgh2,v=i.sgh3,S=i.sgh4,M=i.sh2,w=i.sh3,y=i.si2,x=i.si3,D=i.sl2,T=i.sl3,L=i.sl4,z=i.t,N=i.xgh2,U=i.xgh3,I=i.xgh4,A=i.xh2,b=i.xh3,B=i.xi2,Q=i.xi3,q=i.xl2,ie=i.xl3,fe=i.xl4,Y=i.zmol,me=i.zmos,W=e.init,ee=e.opsmode,ne=e.ep,O=e.inclp,$=e.nodep,Pe=e.argpp,Z=e.mp,re,ce,_e,Ne,ke,Be,V,pe,Se,we,Ee,Te,Le,be,Xe,F,P,se,ye,ge,Me,je=119459e-10,Ce=.01675,Ue=.00015835218,nt=.0549;Me=me+je*z,W==="y"&&(Me=me),ge=Me+2*Ce*Math.sin(Me),P=Math.sin(ge),we=.5*P*P-.25,Ee=-.5*P*Math.cos(ge);var Ae=h*we+m*Ee,We=y*we+x*Ee,C=D*we+T*Ee+L*P,Je=g*we+v*Ee+S*P,Fe=M*we+w*Ee;Me=Y+Ue*z,W==="y"&&(Me=Y),ge=Me+2*nt*Math.sin(Me),P=Math.sin(ge),we=.5*P*P-.25,Ee=-.5*P*Math.cos(ge);var ut=s*we+t*Ee,ot=B*we+Q*Ee,dt=q*we+ie*Ee+fe*P,G=N*we+U*Ee+I*P,Ge=A*we+b*Ee;return Te=Ae+ut,Xe=We+ot,F=C+dt,Le=Je+G,be=Fe+Ge,W==="n"&&(Te-=a,Xe-=u,F-=f,Le-=l,be-=c,O+=Xe,ne+=Te,Ne=Math.sin(O),_e=Math.cos(O),O>=.2?(be/=Ne,Le-=_e*be,Pe+=Le,$+=be,Z+=F):(Be=Math.sin($),ke=Math.cos($),re=Ne*Be,ce=Ne*ke,V=be*ke+Xe*_e*Be,pe=-be*Be+Xe*_e*ke,re+=V,ce+=pe,$%=Yt,$<0&&ee==="a"&&($+=Yt),se=Z+Pe+_e*$,Se=F+Le-Xe*$*Ne,se+=Se,ye=$,$=Math.atan2(re,ce),$<0&&ee==="a"&&($+=Yt),Math.abs(ye-$)>Ln&&($<ye?$+=Yt:$-=Yt),Z+=F,Pe=se-Z-_e*$)),{ep:ne,inclp:O,nodep:$,argpp:Pe,mp:Z}}function a_(i){var e=i.epoch,t=i.ep,s=i.argpp,a=i.tc,l=i.inclp,c=i.nodep,u=i.np,f,h,m,g,v,S,M,w,y,x,D,T,L,z,N,U,I,A,b,B,Q,q,ie,fe,Y,me,W,ee,ne,O,$,Pe,Z,re,ce,_e,Ne,ke,Be,V,pe,Se,we,Ee,Te,Le,be,Xe,F,P,se,ye,ge,Me,je,Ce,Ue,nt,Ae,We,C,Je,Fe,ut=.01675,ot=.0549,dt=29864797e-13,G=47968065e-14,Ge=.39785416,ve=.91744867,xe=.1945905,De=-.98088458,Ye=u,gt=t,Et=Math.sin(c),bt=Math.cos(c),mt=Math.sin(s),Tt=Math.cos(s),zt=Math.sin(l),It=Math.cos(l),He=gt*gt,Vt=1-He,rn=Math.sqrt(Vt),Qt=0,yt=0,hn=0,Nn=0,Bn=0,Dn=e+18261.5+a/1440,yn=(4.523602-.00092422029*Dn)%Yt,Rt=Math.sin(yn),E=Math.cos(yn),j=.91375164-.03568096*E,oe=Math.sqrt(1-j*j),ae=.089683511*Rt/oe,te=Math.sqrt(1-ae*ae),Re=5.8351514+.001944368*Dn,qe=.39785416*Rt/oe,et=te*E+.91744867*ae*Rt;qe=Math.atan2(qe,et),qe+=Re-yn;var rt=Math.cos(qe),Ze=Math.sin(qe);B=xe,Q=De,fe=ve,Y=Ge,q=bt,ie=Et,D=dt;for(var ft=1/Ye,lt=0;lt<2;)lt+=1,f=B*q+Q*fe*ie,m=-Q*q+B*fe*ie,M=-B*ie+Q*fe*q,w=Q*Y,y=Q*ie+B*fe*q,x=B*Y,h=It*M+zt*w,g=It*y+zt*x,v=-zt*M+It*w,S=-zt*y+It*x,T=f*Tt+h*mt,L=m*Tt+g*mt,z=-f*mt+h*Tt,N=-m*mt+g*Tt,U=v*mt,I=S*mt,A=v*Tt,b=S*Tt,C=12*T*T-3*z*z,Je=24*T*L-6*z*N,Fe=12*L*L-3*N*N,ye=3*(f*f+h*h)+C*He,ge=6*(f*m+h*g)+Je*He,Me=3*(m*m+g*g)+Fe*He,je=-6*f*v+He*(-24*T*A-6*z*U),Ce=-6*(f*S+m*v)+He*(-24*(L*A+T*b)+-6*(z*I+N*U)),Ue=-6*m*S+He*(-24*L*b-6*N*I),nt=6*h*v+He*(24*T*U-6*z*A),Ae=6*(g*v+h*S)+He*(24*(L*U+T*I)-6*(N*A+z*b)),We=6*g*S+He*(24*L*I-6*N*b),ye=ye+ye+Vt*C,ge=ge+ge+Vt*Je,Me=Me+Me+Vt*Fe,be=D*ft,Le=-.5*be/rn,Xe=be*rn,Te=-15*gt*Xe,F=T*z+L*N,P=L*z+T*N,se=L*N-T*z,lt===1&&(me=Te,W=Le,ee=be,ne=Xe,O=F,$=P,Pe=se,Z=ye,re=ge,ce=Me,_e=je,Ne=Ce,ke=Ue,Be=nt,V=Ae,pe=We,Se=C,we=Je,Ee=Fe,B=rt,Q=Ze,fe=j,Y=oe,q=te*bt+ae*Et,ie=Et*te-bt*ae,D=G);var wt=(4.7199672+(.2299715*Dn-Re))%Yt,Nt=(6.2565837+.017201977*Dn)%Yt,kt=2*me*$,Xt=2*me*Pe,_t=2*W*Ne,tt=2*W*(ke-_e),tn=-2*ee*re,xt=-2*ee*(ce-Z),In=-2*ee*(-21-9*He)*ut,Kn=2*ne*we,Jn=2*ne*(Ee-Se),si=-18*ne*ut,Ut=-2*W*V,on=-2*W*(pe-Be),Hn=2*Te*P,pn=2*Te*se,Bi=2*Le*Ce,Hr=2*Le*(Ue-je),Vr=-2*be*ge,_a=-2*be*(Me-ye),Gr=-2*be*(-21-9*He)*ot,Tc=2*Xe*Je,ya=2*Xe*(Fe-C),Dt=-18*Xe*ot,Eo=-2*Le*Ae,wo=-2*Le*(We-nt);return{snodm:Et,cnodm:bt,sinim:zt,cosim:It,sinomm:mt,cosomm:Tt,day:Dn,e3:pn,ee2:Hn,em:gt,emsq:He,gam:Re,peo:Qt,pgho:Nn,pho:Bn,pinco:yt,plo:hn,rtemsq:rn,se2:kt,se3:Xt,sgh2:Kn,sgh3:Jn,sgh4:si,sh2:Ut,sh3:on,si2:_t,si3:tt,sl2:tn,sl3:xt,sl4:In,s1:Te,s2:Le,s3:be,s4:Xe,s5:F,s6:P,s7:se,ss1:me,ss2:W,ss3:ee,ss4:ne,ss5:O,ss6:$,ss7:Pe,sz1:Z,sz2:re,sz3:ce,sz11:_e,sz12:Ne,sz13:ke,sz21:Be,sz22:V,sz23:pe,sz31:Se,sz32:we,sz33:Ee,xgh2:Tc,xgh3:ya,xgh4:Dt,xh2:Eo,xh3:wo,xi2:Bi,xi3:Hr,xl2:Vr,xl3:_a,xl4:Gr,nm:Ye,z1:ye,z2:ge,z3:Me,z11:je,z12:Ce,z13:Ue,z21:nt,z22:Ae,z23:We,z31:C,z32:Je,z33:Fe,zmol:wt,zmos:Nt}}function o_(i){var e=i.cosim,t=i.argpo,s=i.s1,a=i.s2,l=i.s3,c=i.s4,u=i.s5,f=i.sinim,h=i.ss1,m=i.ss2,g=i.ss3,v=i.ss4,S=i.ss5,M=i.sz1,w=i.sz3,y=i.sz11,x=i.sz13,D=i.sz21,T=i.sz23,L=i.sz31,z=i.sz33,N=i.t,U=i.tc,I=i.gsto,A=i.mo,b=i.mdot,B=i.no,Q=i.nodeo,q=i.nodedot,ie=i.xpidot,fe=i.z1,Y=i.z3,me=i.z11,W=i.z13,ee=i.z21,ne=i.z23,O=i.z31,$=i.z33,Pe=i.ecco,Z=i.eccsq,re=i.emsq,ce=i.em,_e=i.argpm,Ne=i.inclm,ke=i.mm,Be=i.nm,V=i.nodem,pe=i.irez,Se=i.atime,we=i.d2201,Ee=i.d2211,Te=i.d3210,Le=i.d3222,be=i.d4410,Xe=i.d4422,F=i.d5220,P=i.d5232,se=i.d5421,ye=i.d5433,ge=i.dedt,Me=i.didt,je=i.dmdt,Ce=i.dnodt,Ue=i.domdt,nt=i.del1,Ae=i.del2,We=i.del3,C=i.xfact,Je=i.xlamo,Fe=i.xli,ut=i.xni,ot,dt,G,Ge,ve,xe,De,Ye,gt,Et,bt,mt,Tt,zt,It,He,Vt,rn,Qt,yt,hn,Nn,Bn,Dn,yn,Rt,E,j,oe,ae,te,Re,qe=17891679e-13,et=21460748e-13,rt=22123015e-14,Ze=17891679e-13,ft=73636953e-16,lt=21765803e-16,wt=.0043752690880113,Nt=37393792e-14,kt=11428639e-14,Xt=.00015835218,_t=119459e-10;pe=0,Be<.0052359877&&Be>.0034906585&&(pe=1),Be>=.00826&&Be<=.00924&&ce>=.5&&(pe=2);var tt=h*_t*S,tn=m*_t*(y+x),xt=-_t*g*(M+w-14-6*re),In=v*_t*(L+z-6),Kn=-_t*m*(D+T);(Ne<.052359877||Ne>Ln-.052359877)&&(Kn=0),f!==0&&(Kn/=f);var Jn=In-e*Kn;ge=tt+s*Xt*u,Me=tn+a*Xt*(me+W),je=xt-Xt*l*(fe+Y-14-6*re);var si=c*Xt*(O+$-6),Ut=-Xt*a*(ee+ne);(Ne<.052359877||Ne>Ln-.052359877)&&(Ut=0),Ue=Jn+si,Ce=Kn,f!==0&&(Ue-=e/f*Ut,Ce+=Ut/f);var on=0,Hn=(I+U*wt)%Yt;if(ce+=ge*N,Ne+=Me*N,_e+=Ue*N,V+=Ce*N,ke+=je*N,pe!==0){if(ae=Math.pow(Be/ir,po),pe===2){te=e*e;var pn=ce;ce=Pe;var Bi=re;re=Z,Re=ce*re,zt=-.306-(ce-.64)*.44,ce<=.65?(It=3.616-13.247*ce+16.29*re,Vt=-19.302+117.39*ce-228.419*re+156.591*Re,rn=-18.9068+109.7927*ce-214.6334*re+146.5816*Re,Qt=-41.122+242.694*ce-471.094*re+313.953*Re,yt=-146.407+841.88*ce-1629.014*re+1083.435*Re,hn=-532.114+3017.977*ce-5740.032*re+3708.276*Re):(It=-72.099+331.819*ce-508.738*re+266.724*Re,Vt=-346.844+1582.851*ce-2415.925*re+1246.113*Re,rn=-342.585+1554.908*ce-2366.899*re+1215.972*Re,Qt=-1052.797+4758.686*ce-7193.992*re+3651.957*Re,yt=-3581.69+16178.11*ce-24462.77*re+12422.52*Re,ce>.715?hn=-5149.66+29936.92*ce-54087.36*re+31324.56*Re:hn=1464.74-4664.75*ce+3763.64*re),ce<.7?(Dn=-919.2277+4988.61*ce-9064.77*re+5542.21*Re,Nn=-822.71072+4568.6173*ce-8491.4146*re+5337.524*Re,Bn=-853.666+4690.25*ce-8624.77*re+5341.4*Re):(Dn=-37995.78+161616.52*ce-229838.2*re+109377.94*Re,Nn=-51752.104+218913.95*ce-309468.16*re+146349.42*Re,Bn=-40023.88+170470.89*ce-242699.48*re+115605.82*Re),yn=f*f,ot=.75*(1+2*e+te),dt=1.5*yn,Ge=1.875*f*(1-2*e-3*te),ve=-1.875*f*(1+2*e-3*te),De=35*yn*ot,Ye=39.375*yn*yn,gt=9.84375*f*(yn*(1-2*e-5*te)+.33333333*(-2+4*e+6*te)),Et=f*(4.92187512*yn*(-2-4*e+10*te)+6.56250012*(1+2*e-3*te)),bt=29.53125*f*(2-8*e+te*(-12+8*e+10*te)),mt=29.53125*f*(-2-8*e+te*(12+8*e-10*te)),j=Be*Be,oe=ae*ae,E=3*j*oe,Rt=E*Ze,we=Rt*ot*zt,Ee=Rt*dt*It,E*=ae,Rt=E*Nt,Te=Rt*Ge*Vt,Le=Rt*ve*rn,E*=ae,Rt=2*E*ft,be=Rt*De*Qt,Xe=Rt*Ye*yt,E*=ae,Rt=E*kt,F=Rt*gt*hn,P=Rt*Et*Bn,Rt=2*E*lt,se=Rt*bt*Nn,ye=Rt*mt*Dn,Je=(A+Q+Q-(Hn+Hn))%Yt,C=b+je+2*(q+Ce-wt)-B,ce=pn,re=Bi}pe===1&&(Tt=1+re*(-2.5+.8125*re),Vt=1+2*re,He=1+re*(-6+6.60937*re),ot=.75*(1+e)*(1+e),G=.9375*f*f*(1+3*e)-.75*(1+e),xe=1+e,xe*=1.875*xe*xe,nt=3*Be*Be*ae*ae,Ae=2*nt*ot*Tt*qe,We=3*nt*xe*He*rt*ae,nt=nt*G*Vt*et*ae,Je=(A+Q+t-Hn)%Yt,C=b+ie+je+Ue+Ce-(B+wt)),Fe=Je,ut=B,Se=0,Be=B+on}return{em:ce,argpm:_e,inclm:Ne,mm:ke,nm:Be,nodem:V,irez:pe,atime:Se,d2201:we,d2211:Ee,d3210:Te,d3222:Le,d4410:be,d4422:Xe,d5220:F,d5232:P,d5421:se,d5433:ye,dedt:ge,didt:Me,dmdt:je,dndt:on,dnodt:Ce,domdt:Ue,del1:nt,del2:Ae,del3:We,xfact:C,xlamo:Je,xli:Fe,xni:ut}}function im(i){var e=(i-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*nr/240%Yt,t<0&&(t+=Yt),t}function c0(i,e,t,s,a,l,c){return i instanceof Date?im(vc(i)):im(i)}function l_(i){var e=i.ecco,t=i.epoch,s=i.inclo,a=i.opsmode,l=i.no,c=e*e,u=1-c,f=Math.sqrt(u),h=Math.cos(s),m=h*h,g=Math.pow(ir/l,po),v=.75*fs*(3*m-1)/(f*u),S=v/(g*g),M=g*(1-S*S-S*(1/3+134*S*S/81));S=v/(M*M),l/=1+S;var w=Math.pow(ir/l,po),y=Math.sin(s),x=w*u,D=1-5*m,T=-D-m-m,L=1/w,z=x*x,N=w*(1-e),U="n",I;if(a==="a"){var A=t-7305,b=Math.floor(A+1e-8),B=A-b,Q=.017202791694070362,q=1.7321343856509375,ie=5075514194322695e-30,fe=Q+Yt;I=(q+Q*b+fe*B+A*A*ie)%Yt,I<0&&(I+=Yt)}else I=c0(t+24332815e-1);return{no:l,method:U,ainv:L,ao:w,con41:T,con42:D,cosio:h,cosio2:m,eccsq:c,omeosq:u,posq:z,rp:N,rteosq:f,sinio:y,gsto:I}}function c_(i){var e=i.irez,t=i.d2201,s=i.d2211,a=i.d3210,l=i.d3222,c=i.d4410,u=i.d4422,f=i.d5220,h=i.d5232,m=i.d5421,g=i.d5433,v=i.dedt,S=i.del1,M=i.del2,w=i.del3,y=i.didt,x=i.dmdt,D=i.dnodt,T=i.domdt,L=i.argpo,z=i.argpdot,N=i.t,U=i.tc,I=i.gsto,A=i.xfact,b=i.xlamo,B=i.no,Q=i.atime,q=i.em,ie=i.argpm,fe=i.inclm,Y=i.xli,me=i.mm,W=i.xni,ee=i.nodem,ne=i.nm,O=.13130908,$=2.8843198,Pe=.37448087,Z=5.7686396,re=.95240898,ce=1.8014998,_e=1.050833,Ne=4.4108898,ke=.0043752690880113,Be=720,V=-720,pe=259200,Se,we,Ee,Te,Le,be,Xe,F,P=0,se=0,ye=(I+U*ke)%Yt;if(q+=v*N,fe+=y*N,ie+=T*N,ee+=D*N,me+=x*N,e!==0){(Q===0||N*Q<=0||Math.abs(N)<Math.abs(Q))&&(Q=0,W=B,Y=b),N>0?Se=Be:Se=V;for(var ge=381;ge===381;)e!==2?(Xe=S*Math.sin(Y-O)+M*Math.sin(2*(Y-$))+w*Math.sin(3*(Y-Pe)),Le=W+A,be=S*Math.cos(Y-O)+2*M*Math.cos(2*(Y-$))+3*w*Math.cos(3*(Y-Pe)),be*=Le):(F=L+z*Q,Ee=F+F,we=Y+Y,Xe=t*Math.sin(Ee+Y-Z)+s*Math.sin(Y-Z)+a*Math.sin(F+Y-re)+l*Math.sin(-F+Y-re)+c*Math.sin(Ee+we-ce)+u*Math.sin(we-ce)+f*Math.sin(F+Y-_e)+h*Math.sin(-F+Y-_e)+m*Math.sin(F+we-Ne)+g*Math.sin(-F+we-Ne),Le=W+A,be=t*Math.cos(Ee+Y-Z)+s*Math.cos(Y-Z)+a*Math.cos(F+Y-re)+l*Math.cos(-F+Y-re)+f*Math.cos(F+Y-_e)+h*Math.cos(-F+Y-_e)+2*(c*Math.cos(Ee+we-ce)+u*Math.cos(we-ce)+m*Math.cos(F+we-Ne)+g*Math.cos(-F+we-Ne)),be*=Le),Math.abs(N-Q)>=Be?ge=381:(se=N-Q,ge=0),ge===381&&(Y+=Le*Se+Xe*pe,W+=Xe*Se+be*pe,Q+=Se);ne=W+Xe*se+be*se*se*.5,Te=Y+Le*se+Xe*se*se*.5,e!==1?(me=Te-2*ee+2*ye,P=ne-B):(me=Te-ee-ie+ye,P=ne-B),ne=B+P}return{atime:Q,em:q,argpm:ie,inclm:fe,xli:Y,mm:me,xni:W,nodem:ee,dndt:P,nm:ne}}var Lr;(function(i){i[i.None=0]="None",i[i.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",i[i.MeanMotionBelowZero=2]="MeanMotionBelowZero",i[i.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",i[i.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",i[i.Decayed=6]="Decayed"})(Lr||(Lr={}));function u0(i,e){var t,s,a,l,c,u,f,h,m,g,v,S,M,w,y,x,D,T,L,z,N,U,I,A,b,B,Q,q=15e-13;i.t=e,i.error=Lr.None;var ie=i.mo+i.mdot*i.t,fe=i.argpo+i.argpdot*i.t,Y=i.nodeo+i.nodedot*i.t;m=fe,N=ie;var me=i.t*i.t;if(I=Y+i.nodecf*me,D=1-i.cc1*i.t,T=i.bstar*i.cc4*i.t,L=i.t2cof*me,i.isimp!==1){f=i.omgcof*i.t;var W=1+i.eta*Math.cos(ie);u=i.xmcof*(W*W*W-i.delmo),x=f+u,N=ie+x,m=fe-x,S=me*i.t,M=S*i.t,D=D-i.d2*me-i.d3*S-i.d4*M,T+=i.bstar*i.cc5*(Math.sin(N)-i.sinmao),L=L+i.t3cof*S+M*(i.t4cof+i.t*i.t5cof)}U=i.no;var ee=i.ecco;if(z=i.inclo,i.method==="d"){w=i.t;var ne={irez:i.irez,d2201:i.d2201,d2211:i.d2211,d3210:i.d3210,d3222:i.d3222,d4410:i.d4410,d4422:i.d4422,d5220:i.d5220,d5232:i.d5232,d5421:i.d5421,d5433:i.d5433,dedt:i.dedt,del1:i.del1,del2:i.del2,del3:i.del3,didt:i.didt,dmdt:i.dmdt,dnodt:i.dnodt,domdt:i.domdt,argpo:i.argpo,argpdot:i.argpdot,t:i.t,tc:w,gsto:i.gsto,xfact:i.xfact,xlamo:i.xlamo,no:i.no,atime:i.atime,em:ee,argpm:m,inclm:z,xli:i.xli,mm:N,xni:i.xni,nodem:I,nm:U},O=c_(ne);ee=O.em,m=O.argpm,z=O.inclm,N=O.mm,I=O.nodem,U=O.nm}if(U<=0)return i.error=Lr.MeanMotionBelowZero,null;var $=Math.pow(ir/U,po)*D*D;if(U=ir/Math.pow($,1.5),ee-=T,ee>=1||ee<-.001)return i.error=Lr.MeanEccentricityOutOfRange,null;ee<1e-6&&(ee=1e-6),N+=i.no*L,b=N+m+I,I%=Yt,m%=Yt,b%=Yt,N=(b-m-I)%Yt;var Pe={am:$,em:ee,im:z,Om:I,om:m,mm:N,nm:U},Z=Math.sin(z),re=Math.cos(z),ce=ee;if(A=z,g=m,Q=I,B=N,l=Z,a=re,i.method==="d"){var _e={inclo:i.inclo,init:"n",ep:ce,inclp:A,nodep:Q,argpp:g,mp:B,opsmode:i.operationmode},Ne=l0(i,_e);if(ce=Ne.ep,Q=Ne.nodep,g=Ne.argpp,B=Ne.mp,A=Ne.inclp,A<0&&(A=-A,Q+=Ln,g-=Ln),ce<0||ce>1)return i.error=Lr.PerturbedEccentricityOutOfRange,null}i.method==="d"&&(l=Math.sin(A),a=Math.cos(A),i.aycof=-.5*hs*l,Math.abs(a+1)>15e-13?i.xlcof=-.25*hs*l*(3+5*a)/(1+a):i.xlcof=-.25*hs*l*(3+5*a)/q);var ke=ce*Math.cos(g);x=1/($*(1-ce*ce));var Be=ce*Math.sin(g)+x*i.aycof,V=B+g+Q+x*i.xlcof*ke,pe=(V-Q)%Yt;h=pe,y=9999.9;for(var Se=1;Math.abs(y)>=1e-12&&Se<=10;)s=Math.sin(h),t=Math.cos(h),y=1-t*ke-s*Be,y=(pe-Be*t+ke*s-h)/y,Math.abs(y)>=.95&&(y>0?y=.95:y=-.95),h+=y,Se+=1;var we=ke*t+Be*s,Ee=ke*s-Be*t,Te=ke*ke+Be*Be,Le=$*(1-Te);if(Le<0)return i.error=Lr.SemiLatusRectumBelowZero,null;var be=$*(1-we),Xe=Math.sqrt($)*Ee/be,F=Math.sqrt(Le)/be,P=Math.sqrt(1-Te);x=Ee/(1+P);var se=$/be*(s-Be-ke*x),ye=$/be*(t-ke+Be*x);v=Math.atan2(se,ye);var ge=(ye+ye)*se,Me=1-2*se*se;x=1/Le;var je=.5*fs*x,Ce=je*x;i.method==="d"&&(c=a*a,i.con41=3*c-1,i.x1mth2=1-c,i.x7thm1=7*c-1);var Ue=be*(1-1.5*Ce*P*i.con41)+.5*je*i.x1mth2*Me;if(Ue<1)return i.error=Lr.Decayed,null;v-=.25*Ce*i.x7thm1*ge;var nt=Q+1.5*Ce*a*ge,Ae=A+1.5*Ce*a*l*Me,We=Xe-U*je*i.x1mth2*ge/ir,C=F+U*je*(i.x1mth2*Me+1.5*i.con41)/ir,Je=Math.sin(v),Fe=Math.cos(v),ut=Math.sin(nt),ot=Math.cos(nt),dt=Math.sin(Ae),G=Math.cos(Ae),Ge=-ut*G,ve=ot*G,xe=Ge*Je+ot*Fe,De=ve*Je+ut*Fe,Ye=dt*Je,gt=Ge*Fe-ot*Je,Et=ve*Fe-ut*Je,bt=dt*Fe,mt={x:Ue*xe*ri,y:Ue*De*ri,z:Ue*Ye*ri},Tt={x:(We*xe+C*gt)*od,y:(We*De+C*Et)*od,z:(We*Ye+C*bt)*od};return{position:mt,velocity:Tt,meanElements:Pe}}function d0(i,e){var t=e.opsmode;e.satn;var s=e.epoch,a=e.xbstar,l=e.xecco,c=e.xargpo,u=e.xinclo,f=e.xmo,h=e.xno,m=e.xnodeo,g,v,S,M,w,y,x,D,T,L,z,N,U,I,A,b,B,Q,q,ie,fe,Y,me,W,ee,ne,O,$,Pe,Z,re,ce,_e,Ne,ke,Be,V,pe,Se,we,Ee,Te,Le,be,Xe,F,P,se,ye,ge,Me,je,Ce,Ue,nt,Ae,We=15e-13,C=i;C.isimp=0,C.method="n",C.aycof=0,C.con41=0,C.cc1=0,C.cc4=0,C.cc5=0,C.d2=0,C.d3=0,C.d4=0,C.delmo=0,C.eta=0,C.argpdot=0,C.omgcof=0,C.sinmao=0,C.t=0,C.t2cof=0,C.t3cof=0,C.t4cof=0,C.t5cof=0,C.x1mth2=0,C.x7thm1=0,C.mdot=0,C.nodedot=0,C.xlcof=0,C.xmcof=0,C.nodecf=0,C.irez=0,C.d2201=0,C.d2211=0,C.d3210=0,C.d3222=0,C.d4410=0,C.d4422=0,C.d5220=0,C.d5232=0,C.d5421=0,C.d5433=0,C.dedt=0,C.del1=0,C.del2=0,C.del3=0,C.didt=0,C.dmdt=0,C.dnodt=0,C.domdt=0,C.e3=0,C.ee2=0,C.peo=0,C.pgho=0,C.pho=0,C.pinco=0,C.plo=0,C.se2=0,C.se3=0,C.sgh2=0,C.sgh3=0,C.sgh4=0,C.sh2=0,C.sh3=0,C.si2=0,C.si3=0,C.sl2=0,C.sl3=0,C.sl4=0,C.gsto=0,C.xfact=0,C.xgh2=0,C.xgh3=0,C.xgh4=0,C.xh2=0,C.xh3=0,C.xi2=0,C.xi3=0,C.xl2=0,C.xl3=0,C.xl4=0,C.xlamo=0,C.zmol=0,C.zmos=0,C.atime=0,C.xli=0,C.xni=0,C.bstar=a,C.ecco=l,C.argpo=c,C.inclo=u,C.mo=f,C.no=h,C.nodeo=m,C.operationmode=t;var Je=78/ri+1,Fe=42/ri,ut=Fe*Fe*Fe*Fe;C.init="y",C.t=0;var ot={ecco:C.ecco,epoch:s,inclo:C.inclo,no:C.no,method:C.method,opsmode:C.operationmode},dt=l_(ot),G=dt.ao,Ge=dt.con42,ve=dt.cosio,xe=dt.cosio2,De=dt.eccsq,Ye=dt.omeosq,gt=dt.posq,Et=dt.rp,bt=dt.rteosq,mt=dt.sinio;if(C.no=dt.no,C.con41=dt.con41,C.gsto=dt.gsto,C.a=Math.pow(C.no*i_,-2/3),C.alta=C.a*(1+C.ecco)-1,C.altp=C.a*(1-C.ecco)-1,C.error=0,Ye>=0||C.no>=0){if(C.isimp=0,Et<220/ri+1&&(C.isimp=1),O=Je,fe=ut,Q=(Et-1)*ri,Q<156){O=Q-78,Q<98&&(O=20);var Tt=(120-O)/ri;fe=Tt*Tt*Tt*Tt,O=O/ri+1}q=1/gt,F=1/(G-O),C.eta=G*C.ecco*F,N=C.eta*C.eta,z=C.ecco*C.eta,ie=Math.abs(1-N),y=fe*Math.pow(F,4),x=y/Math.pow(ie,3.5),M=x*C.no*(G*(1+1.5*N+z*(4+N))+.375*fs*F/ie*C.con41*(8+3*N*(8+N))),C.cc1=C.bstar*M,w=0,C.ecco>1e-4&&(w=-2*y*F*hs*C.no*mt/C.ecco),C.x1mth2=1-xe,C.cc4=2*C.no*x*G*Ye*(C.eta*(2+.5*N)+C.ecco*(.5+2*N)-fs*F/(G*ie)*(-3*C.con41*(1-2*z+N*(1.5-.5*z))+.75*C.x1mth2*(2*N-z*(1+N))*Math.cos(2*C.argpo))),C.cc5=2*x*G*Ye*(1+2.75*(N+z)+z*N),D=xe*xe,Le=1.5*fs*q*C.no,be=.5*Le*fs*q,Xe=-.46875*s_*q*q*C.no,C.mdot=C.no+.5*Le*bt*C.con41+.0625*be*bt*(13-78*xe+137*D),C.argpdot=-.5*Le*Ge+.0625*be*(7-114*xe+395*D)+Xe*(3-36*xe+49*D),se=-Le*ve,C.nodedot=se+(.5*be*(4-19*xe)+2*Xe*(3-7*xe))*ve,P=C.argpdot+C.nodedot,C.omgcof=C.bstar*w*Math.cos(C.argpo),C.xmcof=0,C.ecco>1e-4&&(C.xmcof=-po*y*C.bstar/z),C.nodecf=3.5*Ye*se*C.cc1,C.t2cof=1.5*C.cc1,Math.abs(ve+1)>15e-13?C.xlcof=-.25*hs*mt*(3+5*ve)/(1+ve):C.xlcof=-.25*hs*mt*(3+5*ve)/We,C.aycof=-.5*hs*mt;var zt=1+C.eta*Math.cos(C.mo);if(C.delmo=zt*zt*zt,C.sinmao=Math.sin(C.mo),C.x7thm1=7*xe-1,2*Ln/C.no>=225){C.method="d",C.isimp=1,Ee=0,A=C.inclo;var It={epoch:s,ep:C.ecco,argpp:C.argpo,tc:Ee,inclp:C.inclo,nodep:C.nodeo,np:C.no,e3:C.e3,ee2:C.ee2,peo:C.peo,pgho:C.pgho,pho:C.pho,pinco:C.pinco,plo:C.plo,se2:C.se2,se3:C.se3,sgh2:C.sgh2,sgh3:C.sgh3,sgh4:C.sgh4,sh2:C.sh2,sh3:C.sh3,si2:C.si2,si3:C.si3,sl2:C.sl2,sl3:C.sl3,sl4:C.sl4,xgh2:C.xgh2,xgh3:C.xgh3,xgh4:C.xgh4,xh2:C.xh2,xh3:C.xh3,xi2:C.xi2,xi3:C.xi3,xl2:C.xl2,xl3:C.xl3,xl4:C.xl4,zmol:C.zmol,zmos:C.zmos},He=a_(It);C.e3=He.e3,C.ee2=He.ee2,C.peo=He.peo,C.pgho=He.pgho,C.pho=He.pho,C.pinco=He.pinco,C.plo=He.plo,C.se2=He.se2,C.se3=He.se3,C.sgh2=He.sgh2,C.sgh3=He.sgh3,C.sgh4=He.sgh4,C.sh2=He.sh2,C.sh3=He.sh3,C.si2=He.si2,C.si3=He.si3,C.sl2=He.sl2,C.sl3=He.sl3,C.sl4=He.sl4,v=He.sinim,g=He.cosim,T=He.em,L=He.emsq,Y=He.s1,me=He.s2,W=He.s3,ee=He.s4,ne=He.s5,$=He.ss1,Pe=He.ss2,Z=He.ss3,re=He.ss4,ce=He.ss5,_e=He.sz1,Ne=He.sz3,ke=He.sz11,Be=He.sz13,V=He.sz21,pe=He.sz23,Se=He.sz31,we=He.sz33,C.xgh2=He.xgh2,C.xgh3=He.xgh3,C.xgh4=He.xgh4,C.xh2=He.xh2,C.xh3=He.xh3,C.xi2=He.xi2,C.xi3=He.xi3,C.xl2=He.xl2,C.xl3=He.xl3,C.xl4=He.xl4,C.zmol=He.zmol,C.zmos=He.zmos,B=He.nm,ye=He.z1,ge=He.z3,Me=He.z11,je=He.z13,Ce=He.z21,Ue=He.z23,nt=He.z31,Ae=He.z33;var Vt={inclo:A,init:C.init,ep:C.ecco,inclp:C.inclo,nodep:C.nodeo,argpp:C.argpo,mp:C.mo,opsmode:C.operationmode},rn=l0(C,Vt);C.ecco=rn.ep,C.inclo=rn.inclp,C.nodeo=rn.nodep,C.argpo=rn.argpp,C.mo=rn.mp,U=0,I=0,b=0;var Qt={cosim:g,emsq:L,argpo:C.argpo,s1:Y,s2:me,s3:W,s4:ee,s5:ne,sinim:v,ss1:$,ss2:Pe,ss3:Z,ss4:re,ss5:ce,sz1:_e,sz3:Ne,sz11:ke,sz13:Be,sz21:V,sz23:pe,sz31:Se,sz33:we,t:C.t,tc:Ee,gsto:C.gsto,mo:C.mo,mdot:C.mdot,no:C.no,nodeo:C.nodeo,nodedot:C.nodedot,xpidot:P,z1:ye,z3:ge,z11:Me,z13:je,z21:Ce,z23:Ue,z31:nt,z33:Ae,ecco:C.ecco,eccsq:De,em:T,argpm:U,inclm:A,mm:b,nm:B,nodem:I,irez:C.irez,atime:C.atime,d2201:C.d2201,d2211:C.d2211,d3210:C.d3210,d3222:C.d3222,d4410:C.d4410,d4422:C.d4422,d5220:C.d5220,d5232:C.d5232,d5421:C.d5421,d5433:C.d5433,dedt:C.dedt,didt:C.didt,dmdt:C.dmdt,dnodt:C.dnodt,domdt:C.domdt,del1:C.del1,del2:C.del2,del3:C.del3,xfact:C.xfact,xlamo:C.xlamo,xli:C.xli,xni:C.xni},yt=o_(Qt);C.irez=yt.irez,C.atime=yt.atime,C.d2201=yt.d2201,C.d2211=yt.d2211,C.d3210=yt.d3210,C.d3222=yt.d3222,C.d4410=yt.d4410,C.d4422=yt.d4422,C.d5220=yt.d5220,C.d5232=yt.d5232,C.d5421=yt.d5421,C.d5433=yt.d5433,C.dedt=yt.dedt,C.didt=yt.didt,C.dmdt=yt.dmdt,C.dnodt=yt.dnodt,C.domdt=yt.domdt,C.del1=yt.del1,C.del2=yt.del2,C.del3=yt.del3,C.xfact=yt.xfact,C.xlamo=yt.xlamo,C.xli=yt.xli,C.xni=yt.xni}C.isimp!==1&&(S=C.cc1*C.cc1,C.d2=4*G*F*S,Te=C.d2*F*C.cc1/3,C.d3=(17*G+O)*Te,C.d4=.5*Te*G*F*(221*G+31*O)*C.cc1,C.t3cof=C.d2+2*S,C.t4cof=.25*(3*C.d3+C.cc1*(12*C.d2+10*S)),C.t5cof=.2*(3*C.d4+12*C.cc1*C.d3+6*C.d2*C.d2+15*S*(2*C.d2+S)))}u0(C,0),C.init="n"}function u_(i,e){var t="i",s=0,a=i.substring(2,7),l=parseInt(i.substring(18,20),10),c=parseFloat(i.substring(20,32)),u=parseFloat(i.substring(33,43)),f=parseFloat("".concat(i.substring(44,45),".").concat(i.substring(45,50),"E").concat(i.substring(50,52))),h=parseFloat("".concat(i.substring(53,54),".").concat(i.substring(54,59),"E").concat(i.substring(59,61))),m=parseFloat(e.substring(8,16))*nr,g=parseFloat(e.substring(17,25))*nr,v=parseFloat(".".concat(e.substring(26,33).replace(/\s/g,"0"))),S=parseFloat(e.substring(34,42))*nr,M=parseFloat(e.substring(43,51))*nr,w=parseFloat(e.substring(52,63))/a0,y=l<57?l+2e3:l+1900,x=o0(y,c),D=x.mon,T=x.day,L=x.hr,z=x.minute,N=x.sec,U=vc(y,D,T,L,z,N),I={error:s,satnum:a,epochyr:l,epochdays:c,ndot:u,nddot:f,bstar:h,inclo:m,nodeo:g,ecco:v,argpo:S,mo:M,no:w,jdsatepoch:U};return d0(I,{opsmode:t,satn:I.satnum,epoch:I.jdsatepoch-24332815e-1,xbstar:I.bstar,xecco:I.ecco,xargpo:I.argpo,xinclo:I.inclo,xmo:I.mo,xno:I.no,xnodeo:I.nodeo}),I}function d_(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"i",t=0,s=i.NORAD_CAT_ID.toString(),a=new Date(i.EPOCH.endsWith("Z")?i.EPOCH:i.EPOCH+"Z"),l=a.getUTCFullYear(),c=Number(l.toString().slice(-2)),u=(a.valueOf()-new Date(Date.UTC(l,0,1,0,0,0)).valueOf())/(86400*1e3)+1,f=Number(i.MEAN_MOTION_DOT),h=Number(i.MEAN_MOTION_DDOT),m=Number(i.BSTAR),g=Number(i.INCLINATION)*nr,v=Number(i.RA_OF_ASC_NODE)*nr,S=Number(i.ECCENTRICITY),M=Number(i.ARG_OF_PERICENTER)*nr,w=Number(i.MEAN_ANOMALY)*nr,y=Number(i.MEAN_MOTION)/a0,x=o0(l,u),D=x.mon,T=x.day,L=x.hr,z=x.minute,N=x.sec,U=vc(l,D,T,L,z,N),I={error:t,satnum:s,epochyr:c,epochdays:u,ndot:f,nddot:h,bstar:m,inclo:g,nodeo:v,ecco:S,argpo:M,mo:w,no:y,jdsatepoch:U};return d0(I,{opsmode:e,satn:I.satnum,epoch:I.jdsatepoch-24332815e-1,xbstar:I.bstar,xecco:I.ecco,xargpo:I.argpo,xinclo:I.inclo,xmo:I.mo,xno:I.no,xnodeo:I.nodeo}),I}function f_(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];var a=vc.apply(void 0,t),l=(a-i.jdsatepoch)*t_;return u0(i,l)}function f0(i){return i*e_}function h_(i){if(i<-Ln/2||i>Ln/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return f0(i)}function p_(i){if(i<-Ln||i>Ln)throw new RangeError("Longitude radians must be in range [-pi; pi].");return f0(i)}function m_(i,e){for(var t=6378.137,s=6356.7523142,a=Math.sqrt(i.x*i.x+i.y*i.y),l=(t-s)/t,c=2*l-l*l,u=Math.atan2(i.y,i.x)-e;u<-Ln;)u+=Yt;for(;u>Ln;)u-=Yt;for(var f=20,h=0,m=Math.atan2(i.z,Math.sqrt(i.x*i.x+i.y*i.y)),g;h++<f;)g=1/Math.sqrt(1-c*(Math.sin(m)*Math.sin(m))),m=Math.atan2(i.z+t*g*c*Math.sin(m),a);var v=a/Math.cos(m)-t*g;return{longitude:u,latitude:m,height:v}}const h0=6371,p0=i=>{const e=Number(i.NORAD_CAT_ID),t=Number(i.MEAN_MOTION),s=typeof i.EPOCH=="string"?i.EPOCH:"",a=[i.ECCENTRICITY,i.INCLINATION,i.RA_OF_ASC_NODE,i.ARG_OF_PERICENTER,i.MEAN_ANOMALY].map(Number);if(!Number.isSafeInteger(e)||e<1||!Number.isFinite(t)||t<=0||Number.isNaN(Date.parse(s))||a.some(f=>!Number.isFinite(f))||a[0]<0||a[0]>=1||a[1]<0||a[1]>180)return null;const l=typeof i.OBJECT_NAME=="string"&&i.OBJECT_NAME.trim()?i.OBJECT_NAME.trim():`NORAD ${e}`,c=f=>{const h=Number(f);return Number.isFinite(h)?h:0},u={...i,OBJECT_NAME:l,OBJECT_ID:typeof i.OBJECT_ID=="string"&&i.OBJECT_ID?i.OBJECT_ID:`NORAD ${e}`,EPOCH:s,MEAN_MOTION:t,ECCENTRICITY:a[0],INCLINATION:a[1],RA_OF_ASC_NODE:a[2],ARG_OF_PERICENTER:a[3],MEAN_ANOMALY:a[4],BSTAR:c(i.BSTAR),MEAN_MOTION_DOT:c(i.MEAN_MOTION_DOT),MEAN_MOTION_DDOT:c(i.MEAN_MOTION_DDOT),ELEMENT_SET_NO:c(i.ELEMENT_SET_NO),NORAD_CAT_ID:e};return{noradId:e,name:l,omm:u}},g_=i=>{if(!i||typeof i!="object"||!("schemaVersion"in i)||i.schemaVersion!==1||!("fetchedAt"in i)||typeof i.fetchedAt!="string"||Number.isNaN(Date.parse(i.fetchedAt))||!("satellites"in i)||!Array.isArray(i.satellites))throw new Error("The shared satellite catalog has an invalid format.");const e=i.satellites.map(t=>t&&typeof t=="object"?p0(t):null).filter(t=>!!t);if(!e.length)throw new Error("The shared satellite catalog contains no valid records.");return{satellites:e,fetchedAt:i.fetchedAt}},v_=i=>{if(!i||typeof i!="object")return!1;const e=i;if(!Number.isSafeInteger(e.noradId)||typeof e.name!="string")return!1;if(e.omm&&typeof e.omm=="object"){const t=p0(e.omm);return(t==null?void 0:t.noradId)===e.noradId}return typeof e.line1=="string"&&typeof e.line2=="string"},x_=new Map([[25544,"#ff9500"],[20580,"#00f0ff"],[25994,"#7cff4f"],[33591,"#ffd400"]]),ld={leo:"#c084fc",meo:"#ffc857",geo:"#ff70c8"},__=(i,e)=>{const t=x_.get(i);return t||(e<2e3?ld.leo:e<2e4?ld.meo:ld.geo)},rm=(i,e,t)=>`${Math.abs(i).toFixed(2)}° ${i>=0?e:t}`,Qa=i=>{const e=i.omm?d_(i.omm):u_(i.line1,i.line2);return e.error?null:{...i,satrec:e,periodSeconds:2*Math.PI/e.no*60}},y_=i=>{const e=i.omm?Number(i.omm.MEAN_MOTION):Number.parseFloat(i.line2.slice(52,63));return!Number.isFinite(e)||e<=0?null:{...i,periodSeconds:86400/e}},m0=i=>{const t=i;return(Math.pow(t*t*3986e11/(4*Math.PI*Math.PI),1/3)-h0*1e3)/1e3},g0=i=>i<2e3?"leo":i<2e4?"meo":"geo",S_=i=>Math.max(i/h0,5e-4),M_={all:{label:"All",value:"all"},leo:{label:"LEO (< 2000 km)",value:"leo"},meo:{label:"MEO (2-20k km)",value:"meo"},geo:{label:"High (20k+ km)",value:"geo"},none:{label:"None",value:"none"}},E_=8*60*60*1e3,Kd="orbitradar_active_satellite_tles_v2",mo="orbitradar_active_satellite_timestamp_v2",ff="orbitradar_active_satellite_source_timestamp_v2",v0=i=>{if(!i)return!1;const e=Date.parse(i),t=Date.now()-e;return!Number.isNaN(e)&&t>=0&&t<E_},sm=(i=!1)=>{try{const e=localStorage.getItem(Kd),t=localStorage.getItem(mo);if(!e||!i&&!v0(t))return null;const s=JSON.parse(e);if(!Array.isArray(s.satellites))return null;const a=s.satellites.filter(v_);return a.length?a:null}catch{try{localStorage.removeItem(Kd),localStorage.removeItem(mo),localStorage.removeItem(ff)}catch{}return null}},w_=(i,e)=>{try{localStorage.setItem(Kd,JSON.stringify({satellites:i})),localStorage.setItem(mo,new Date().toISOString()),e&&localStorage.setItem(ff,e)}catch(t){console.warn("Satellite catalog could not be cached:",t)}},am=()=>{try{const i=localStorage.getItem(ff);return i&&!Number.isNaN(Date.parse(i))?i:null}catch{return null}},T_="/pr-preview/pr-71/data/catalog.json",Jd="/pr-preview/pr-71/data/catalog-status.json",A_=60*60*1e3,b_=25544,C_=i=>i==="ready"||i==="paused"||i==="error"||i==="stale"?i:void 0,om=async()=>{if(!Jd)return null;try{const i=await fetch(Jd,{cache:"no-cache"});if(!i.ok)return null;const e=await i.json();return!e||typeof e!="object"?null:{state:C_(e.state),message:typeof e.message=="string"?e.message:void 0,retryAt:typeof e.retryAt=="string"?e.retryAt:null,manualProbeRequired:typeof e.manualProbeRequired=="boolean"?e.manualProbeRequired:void 0,fetchedAt:typeof e.fetchedAt=="string"&&!Number.isNaN(Date.parse(e.fetchedAt))?e.fetchedAt:null}}catch{return null}},R_=i=>{const[e,t]=de.useState([]),[s,a]=de.useState(b_),[l,c]=de.useState(!0),[u,f]=de.useState("Loading the shared satellite catalog..."),[h,m]=de.useState(null),[g,v]=de.useState(null),[S,M]=de.useState(null),w=de.useRef(!1),y=de.useCallback((z,N,U)=>{const I=z.map(y_).filter(B=>!!B);t(I),f(N.replace("{count}",I.length.toLocaleString())),a(B=>{var Q;return B===null?null:I.some(q=>q.noradId===B)?B:((Q=I[0])==null?void 0:Q.noradId)??null});let A=null;const b=U??am();try{A=localStorage.getItem(mo)}catch{}v(b),m(b??A??new Date().toISOString())},[]),x=de.useCallback(async()=>{if(w.current)return;w.current=!0,c(!0),f("Checking for the latest shared satellite catalog...");let z=null;try{const[N,U]=await Promise.all([fetch(T_,{cache:"no-cache"}),om()]);if(z=U,U&&M(U),!N.ok)throw new Error(`Shared catalog request failed (${N.status}).`);const I=g_(await N.json());w_(I.satellites,I.fetchedAt);let A="Tracking {count} satellites from the shared catalog.";(z==null?void 0:z.state)==="paused"?A=z.message?`${z.message} Using the last valid snapshot ({count} satellites).`:"Catalog publishing is paused for review; using the last valid snapshot ({count} satellites).":(z==null?void 0:z.state)==="error"&&(A="Catalog refresh failed; using the last valid published snapshot ({count} satellites)."),y(I.satellites,A,I.fetchedAt)}catch(N){console.warn("Unable to read shared satellite catalog:",N);const U=sm(!0);U?y(U,z!=null&&z.message?`${z.message} Showing the last saved snapshot ({count} satellites).`:"Shared catalog is unavailable; showing the last saved snapshot ({count} satellites)."):f((z==null?void 0:z.message)??"The shared satellite catalog is not available yet. Try again after it has been published.")}finally{w.current=!1,c(!1)}},[y]);de.useEffect(()=>{const z=sm(!0);let N=null;try{N=localStorage.getItem(mo)}catch{}if(z&&v0(N)){y(z,"Tracking {count} satellites from local cache."),c(!1);return}z&&(y(z,"Checking for an update; showing the last saved snapshot ({count} satellites)."),m(am()??N)),x()},[y,x]),de.useEffect(()=>{if((i==null?void 0:i.autoRefresh)===!1)return;const z=((i==null?void 0:i.refreshIntervalHours)??8)*60*60*1e3,N=window.setInterval(()=>{x()},z);return()=>window.clearInterval(N)},[x,i==null?void 0:i.autoRefresh,i==null?void 0:i.refreshIntervalHours]),de.useEffect(()=>{if(!Jd)return;const z=()=>{om().then(I=>{I&&M(I)})};z();const N=window.setInterval(z,A_),U=()=>{document.hidden||z()};return document.addEventListener("visibilitychange",U),()=>{window.clearInterval(N),document.removeEventListener("visibilitychange",U)}},[]);const D=de.useCallback(()=>e.find(z=>z.noradId===s)??null,[e,s]),T=de.useCallback(z=>{a(z)},[]),L=de.useCallback(()=>{a(null)},[]);return{trackedSatellites:e,selectedNoradId:s,isLoading:l,statusMessage:u,lastUpdated:h,sourceUpdatedAt:g,publisherStatus:S,getSelectedSatellite:D,selectSatellite:T,clearSelection:L,refreshCatalog:x}},ic=(i,e)=>{const t=f_(i.satrec,e);if(!t||!t.position||typeof t.position!="object")return null;const s=m_(t.position,c0(e)),a=t.velocity,l=s.height,c={noradId:i.noradId,name:i.name,lat:h_(s.latitude),lng:p_(s.longitude),alt:S_(l),altitudeKm:l,velocityKph:a&&typeof a=="object"?Math.hypot(a.x,a.y,a.z)*3600:null,color:__(i.noradId,l),altitudeClass:g0(m0(i.periodSeconds))};return Object.values(c).every(u=>typeof u!="number"||Number.isFinite(u))?c:null},lm=(i,e,t=120)=>{const s=[],a=i.periodSeconds*1e3;for(let l=0;l<=t;l+=1){const c=new Date(e.getTime()+(l/t-.5)*a),u=ic(i,c);u&&s.push({lat:u.lat,lng:u.lng,alt:u.alt})}return s},P_=1e3,L_=[],N_=(i,e,t,s)=>{const[a,l]=de.useState(()=>new Date),[c,u]=de.useState([]),[f,h]=de.useState(0),[m,g]=de.useState([]),[v,S]=de.useState(!0),[M,w]=de.useState(!1),y=de.useRef(null),x=de.useRef(null),D=de.useRef(0),T=de.useRef(0),L=de.useRef(e),z=de.useRef(0),N=de.useRef(null),U=t!==void 0,I=t??a,A=de.useMemo(()=>{if(e===null)return null;const ee=i.find(ne=>ne.noradId===e);return ee?Qa(ee):null},[i,e]),[b,B]=de.useState(void 0),Q=de.useRef({satellite:A,getTime:s??(()=>I)});Q.current={satellite:A,getTime:s??(()=>I)};const q=de.useMemo(()=>i,[i]),ie=de.useRef({trackedSatellites:i,selectedNoradId:e,time:I,showOrbit:v});ie.current={trackedSatellites:i,selectedNoradId:e,time:I,showOrbit:v};const fe=de.useCallback((ee,ne)=>{u(ee),N.current!==ne&&(N.current=ne,h(O=>O+1))},[]);de.useEffect(()=>{if(U)return;const ee=()=>{document.visibilityState!=="hidden"&&l(new Date)},ne=window.setInterval(ee,P_);return document.addEventListener("visibilitychange",ee),()=>{window.clearInterval(ne),document.removeEventListener("visibilitychange",ee)}},[U]),de.useEffect(()=>{let ee,ne;try{ee=new Worker(new URL("/pr-preview/pr-71/assets/positions.worker-DG5JkNmD.js",import.meta.url),{type:"module"}),ne=new Worker(new URL("/pr-preview/pr-71/assets/positions.worker-DG5JkNmD.js",import.meta.url),{type:"module"})}catch{return}return y.current=ee,x.current=ne,ee.onmessage=O=>{O.data.requestId===D.current&&O.data.type==="positions"&&O.data.positions&&fe(O.data.positions,O.data.snapshotKey??`request:${O.data.requestId}`)},ne.onmessage=O=>{O.data.requestId===T.current&&O.data.orbitPoints&&g(O.data.orbitPoints)},ee.onerror=()=>{ee.terminate(),y.current=null;const{trackedSatellites:O,time:$}=ie.current,Pe=O.map(Z=>{const re=Qa(Z);return re?ic(re,$):null}).filter(Z=>Z!==null);fe(Pe,`${z.current}:${$.toISOString()}`)},ne.onerror=()=>{ne.terminate(),x.current=null;const{trackedSatellites:O,selectedNoradId:$,time:Pe}=ie.current,Z=O.find(ce=>ce.noradId===$),re=Z?Qa(Z):null;g(re?lm(re,Pe):[])},()=>{ee.terminate(),ne.terminate(),y.current=null,x.current=null}},[fe]),de.useEffect(()=>{var ee,ne;z.current+=1,(ee=y.current)==null||ee.postMessage({type:"catalog",satellites:q}),(ne=x.current)==null||ne.postMessage({type:"catalog",satellites:q})},[q]),de.useEffect(()=>{let ee=null;const ne=()=>{const{satellite:$,getTime:Pe}=Q.current;if(!$){ee=null,B(null);return}const Z=Pe(),re=Z.getTime();re!==ee&&(ee=re,B(ic($,Z)))};B(void 0),ne();const O=window.setInterval(ne,100);return()=>window.clearInterval(O)},[A]),de.useEffect(()=>{const ee=++D.current,ne=y.current,O=`${z.current}:${I.toISOString()}`;if(ne){ne.postMessage({requestId:ee,time:I.toISOString(),selectedNoradId:null,showOrbit:!1,snapshotKey:O});return}const $=i.map(Pe=>{const Z=Qa(Pe);return Z?ic(Z,I):null}).filter(Pe=>Pe!==null);fe($,O)},[i,I,q,fe]);const Y=Math.floor(I.getTime()/6e4);de.useEffect(()=>{const ee=++T.current;if(L.current!==e&&(g([]),L.current=e),!e||!v){g([]);return}const ne=new Date(Y*6e4),O=x.current;if(O){O.postMessage({requestId:ee,time:ne.toISOString(),selectedNoradId:e,showOrbit:!0});return}const $=i.find(Z=>Z.noradId===e),Pe=$?Qa($):null;g(Pe?lm(Pe,ne):[])},[i,e,v,Y]);const me=de.useMemo(()=>c.find(ee=>ee.noradId===e)??null,[c,e]);return{time:a,satellitePositions:c,selectedPosition:b===void 0?me:b,snapshotVersion:f,orbitPoints:v?m:L_,showOrbit:v,setShowOrbit:S,followSelected:M,setFollowSelected:w}},D_=()=>new Promise((i,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:s,longitude:a}=t.coords;i({lat:s,lng:a})},t=>{e("Error getting geolocation: "+t.message)}):e("Geolocation not supported by this browser.")}),cd="orbitradar_user_location",I_=()=>{const[i,e]=de.useState(()=>{try{const a=localStorage.getItem(cd);if(!a)return null;const l=JSON.parse(a);if(!l||typeof l!="object")return null;const{lat:c,lng:u}=l;return typeof c=="number"&&Number.isFinite(c)&&Math.abs(c)<=90&&typeof u=="number"&&Number.isFinite(u)&&Math.abs(u)<=180?{lat:c,lng:u,name:"You"}:null}catch{return null}}),t=de.useCallback(()=>D_().then(a=>{const l={...a,name:"You"};e(l);try{localStorage.setItem(cd,JSON.stringify(a))}catch{}return l}).catch(a=>{throw console.error("Error getting user location:",a),a}),[]),s=de.useCallback(()=>{e(null);try{localStorage.removeItem(cd)}catch{}},[]);return{userLocation:i,locateUser:t,clearUserLocation:s}},cm="orbitradar_favorites",U_=()=>{const[i,e]=de.useState(()=>{try{const u=localStorage.getItem(cm),f=u?JSON.parse(u):[];return Array.isArray(f)?[...new Set(f.filter(h=>Number.isSafeInteger(h)&&h>0))]:[]}catch{return[]}});de.useEffect(()=>{try{localStorage.setItem(cm,JSON.stringify(i))}catch(u){console.warn("Could not save favorites:",u)}},[i]);const t=de.useCallback(u=>i.includes(u),[i]),s=de.useCallback(u=>{e(f=>f.includes(u)?f.filter(h=>h!==u):[...f,u])},[]),a=de.useCallback(u=>{e(f=>f.includes(u)?f:[...f,u])},[]),l=de.useCallback(u=>{e(f=>f.filter(h=>h!==u))},[]),c=de.useCallback(()=>{e([])},[]);return{favorites:i,isFavorite:t,toggleFavorite:s,addFavorite:a,removeFavorite:l,clearFavorites:c}},O_=[1,5,10,30,60,120,300,600],F_=i=>{if(Math.abs(i)<1e3)return"Live";const e=Math.abs(i),t=i<0?"-":"+";return e<6e4?`${t}${Math.floor(e/1e3)}s`:e<36e5?`${t}${Math.floor(e/6e4)}m`:`${t}${Math.floor(e/36e5)}h`},z_=()=>{const[i,e]=de.useState(!1),[t,s]=de.useState(!1),[a,l]=de.useState(1),[c,u]=de.useState(()=>Date.now()),[f,h]=de.useState(()=>Date.now()),[m,g]=de.useState(()=>Date.now()),v=de.useRef(Date.now()),S=t||i?c:f,M=de.useMemo(()=>new Date(S),[S]),w=S-f,y=de.useCallback(()=>t?new Date(S):i?new Date(c+(Date.now()-m)*a):new Date,[S,t,i,c,a,m]),x=de.useCallback(()=>F_(w),[w]),D=de.useCallback(()=>{if(i)return;const I=Date.now();v.current=I,t||u(I),g(I),s(!1),e(!0)},[i,t]),T=de.useCallback(()=>{const I=Date.now();u(y().getTime()),v.current=I,g(I),e(!1),s(!0)},[y]),L=de.useCallback(()=>{i?T():D()},[i,D,T]),z=de.useCallback(I=>{if(i){const A=Date.now();u(y().getTime()),v.current=A,g(A)}l(I)},[i,y]),N=de.useCallback(()=>{const I=Date.now();u(I),h(I),g(I),v.current=I,e(!1),s(!1)},[]);de.useEffect(()=>{const I=()=>{if(document.hidden)return;const b=Date.now();if(h(b),i){const B=b-v.current;v.current=b,u(Q=>Q+B*a),g(b)}},A=window.setInterval(I,1e3);return document.addEventListener("visibilitychange",I),()=>{window.clearInterval(A),document.removeEventListener("visibilitychange",I)}},[i,a]);const U=de.useCallback(I=>I===1?"1x (Real-time)":I<60?`${I}x`:`${I/60} min`,[]);return{isTimeLapseActive:i,isPaused:t,speed:a,speeds:O_,currentTime:M,timeOffsetMs:w,startTimeLapse:D,stopTimeLapse:T,toggleTimeLapse:L,setTimeLapseSpeed:z,resetTime:N,getSpeedLabel:U,getEffectiveTime:y,getTimeOffsetDisplay:x}},ud=10,k_=i=>{const[e,t]=de.useState([]),s=de.useCallback(g=>{t(v=>v.includes(g)?v:v.length>=ud?[...v.slice(1),g]:[...v,g])},[]),a=de.useCallback(g=>{t(v=>v.filter(S=>S!==g))},[]),l=de.useCallback(g=>{t(v=>v.includes(g)?v.filter(S=>S!==g):v.length>=ud?[...v.slice(1),g]:[...v,g])},[]),c=de.useCallback(()=>{t([])},[]),u=de.useCallback(g=>e.includes(g),[e]),f=de.useMemo(()=>i.filter(g=>e.includes(g.noradId)),[i,e]),h=de.useMemo(()=>e.map(g=>{const v=i.find(S=>S.noradId===g);return v?{noradId:g,position:v}:null}).filter(g=>g!==null),[i,e]),m=de.useCallback(g=>{const v=e.indexOf(g);if(v===-1)return"";const S=["#ff9500","#00f0ff","#7cff4f","#ffd400","#c084fc","#ff70c8","#67e8f9","#2cffb7","#ff9f1c","#ffc857"];return S[v%S.length]},[e]);return{trackedNoradIds:e,trackedPositions:f,trackedWithPositions:h,isTracked:u,addTracked:s,removeTracked:a,toggleTracked:l,clearTracked:c,getTrackedColor:m,maxTracked:ud}},B_=(i,e,t=new Date)=>{const[s,a]=de.useState([]),[l,c]=de.useState(!1),[u,f]=de.useState(null),h=de.useRef(null),m=de.useRef(0);de.useEffect(()=>{let w;try{w=new Worker(new URL("/pr-preview/pr-71/assets/passes.worker-BnGfHIZ3.js",import.meta.url),{type:"module"})}catch{f("Background workers are unavailable in this browser.");return}return h.current=w,w.onmessage=y=>{y.data.requestId===m.current&&(c(!1),y.data.error?f(y.data.error):a(y.data.passes.map(x=>({...x,riseTime:new Date(x.riseTime),maxElevationTime:new Date(x.maxElevationTime),setTime:new Date(x.setTime)}))))},w.onerror=()=>{c(!1),f("Pass prediction failed. Please try again.")},()=>{w.terminate(),h.current=null}},[]);const g=de.useCallback(w=>{var D;if(!e){f("Set your location before predicting passes.");return}const y=i.filter(T=>w.includes(T.noradId));if(!y.length){f("No satellites are available to predict.");return}if(!h.current){f("Background workers are unavailable in this browser.");return}a([]),f(null),c(!0);const x=++m.current;(D=h.current)==null||D.postMessage({requestId:x,location:{lat:e.lat,lng:e.lng},startTime:t.getTime(),satellites:y})},[i,e,t]),v=de.useCallback(w=>g([w]),[g]),S=de.useCallback(w=>g(w),[g]),M=de.useCallback(()=>{var y;const w=++m.current;(y=h.current)==null||y.postMessage({type:"cancel",requestId:w}),c(!1),a([]),f(null)},[]);return{passes:s,isCalculating:l,error:u,calculateForSelected:v,calculateForTracked:S,clearPasses:M}},um="orbitradar_settings",Ii={theme:"dark",showOrbitsByDefault:!0,defaultAltitudeFilter:"all",autoRefresh:!0,refreshIntervalHours:8,nightShading:!0,cloudCover:!0},H_=()=>{const[i,e]=de.useState(()=>{try{const a=localStorage.getItem(um);if(a){const l=JSON.parse(a);return{...Ii,...l,theme:["dark","light","system"].includes(l.theme??"")?l.theme:Ii.theme,defaultAltitudeFilter:["all","leo","meo","geo","none"].includes(l.defaultAltitudeFilter??"")?l.defaultAltitudeFilter:Ii.defaultAltitudeFilter,refreshIntervalHours:[1,4,8,12,24].includes(l.refreshIntervalHours??0)?l.refreshIntervalHours:Ii.refreshIntervalHours,autoRefresh:typeof l.autoRefresh=="boolean"?l.autoRefresh:Ii.autoRefresh,showOrbitsByDefault:typeof l.showOrbitsByDefault=="boolean"?l.showOrbitsByDefault:Ii.showOrbitsByDefault,nightShading:typeof l.nightShading=="boolean"?l.nightShading:Ii.nightShading,cloudCover:typeof l.cloudCover=="boolean"?l.cloudCover:Ii.cloudCover}}}catch{}return Ii});de.useEffect(()=>{try{localStorage.setItem(um,JSON.stringify(i))}catch(a){console.warn("Could not save settings:",a)}},[i]);const t=de.useCallback((a,l)=>{e(c=>({...c,[a]:l}))},[]),s=de.useCallback(()=>{e(Ii)},[]);return de.useEffect(()=>{var c;const a=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-color-scheme: light)"),l=()=>{document.documentElement.dataset.theme=i.theme==="system"?a.matches?"light":"dark":i.theme};return l(),a==null||a.addEventListener("change",l),()=>a==null?void 0:a.removeEventListener("change",l)},[i.theme]),{settings:i,updateSetting:t,resetSettings:s}},dm='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',lo=(i,e)=>{const t=de.useRef(null),s=de.useRef(e);return s.current=e,de.useEffect(()=>{var f;if(!i)return;const a=document.activeElement instanceof HTMLElement?document.activeElement:null,l=t.current;(f=(l==null?void 0:l.querySelector(dm))??l)==null||f.focus();const u=h=>{if(h.key==="Escape"){h.preventDefault(),s.current();return}if(h.key!=="Tab"||!l)return;const m=[...l.querySelectorAll(dm)];if(!m.length){h.preventDefault(),l.focus();return}const g=m[0],v=m[m.length-1];h.shiftKey&&document.activeElement===g?(h.preventDefault(),v.focus()):!h.shiftKey&&document.activeElement===v&&(h.preventDefault(),g.focus())};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u),a==null||a.focus()}},[i]),t};class V_ extends r0.Component{constructor(){super(...arguments);jp(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("The globe could not be rendered:",t)}render(){return this.state.hasError?k.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[k.jsx("p",{className:"text-lg font-bold",children:"The 3D globe is unavailable."}),k.jsx("p",{className:"max-w-sm text-sm text-slate-300",children:"Satellite data and controls are still available. Check graphics acceleration, then try the globe again."}),k.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:this.props.onRetry,type:"button",children:"Retry globe"})]}):this.props.children}}const G_=({passes:i,isCalculating:e,error:t,onClose:s,onCalculateTracked:a,selectedSatelliteName:l})=>{const c=lo(!0,s),u=m=>m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),f=m=>m.toLocaleDateString([],{month:"short",day:"numeric",year:m.getFullYear()!==new Date().getFullYear()?"numeric":void 0}),h=m=>{if(m<60)return`${Math.round(m)} min`;const g=Math.floor(m/60),v=Math.round(m%60);return`${g}h ${v}m`};return k.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:k.jsxs("section",{ref:c,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"passes-title",className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Pass Prediction"}),k.jsx("h2",{id:"passes-title",className:"mt-1 text-2xl font-bold",children:"Upcoming satellite passes"}),k.jsxs("p",{className:"mt-1 text-sm text-slate-400",children:[l," and tracked objects · next 24 hours · over your location"]})]}),k.jsx("button",{"aria-label":"Close pass prediction",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),k.jsxs("div",{className:"max-h-[calc(90vh-140px)] overflow-y-auto",children:[t&&k.jsx("div",{className:"p-4 text-red-400",children:k.jsxs("p",{children:["Error: ",t]})}),e&&i.length===0&&!t&&k.jsx("div",{className:"p-4 text-center text-slate-400",children:k.jsx("p",{children:"Calculating passes... This may take a moment."})}),!e&&i.length===0&&!t&&k.jsxs("div",{className:"p-4 text-center text-slate-400",children:[k.jsx("p",{children:"No passes found for this satellite in the next 24 hours."}),k.jsx("p",{className:"mt-2 text-sm",children:"The satellite may not pass over your location, or its orbit may not be visible."})]}),i.length>0&&k.jsx("div",{className:"p-4",children:k.jsx("div",{className:"space-y-3",children:i.map((m,g)=>k.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 p-4",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsxs("p",{className:"font-semibold",children:[m.name," · Pass #",g+1]}),k.jsx("p",{className:"text-sm text-slate-400",children:f(m.riseTime)})]}),k.jsxs("span",{className:`rounded-full px-2 py-1 text-xs ${m.maxElevationDeg>=60?"bg-green-500/20 text-green-400":m.maxElevationDeg>=30?"bg-yellow-500/20 text-yellow-400":"bg-blue-500/20 text-blue-400"}`,children:["Max: ",m.maxElevationDeg.toFixed(1),"°"]})]}),k.jsxs("div",{className:"mt-3 grid grid-cols-3 gap-2 text-sm",children:[k.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[k.jsx("p",{className:"text-slate-400",children:"Rise"}),k.jsx("p",{className:"font-semibold",children:m.riseClipped?"Already up":u(m.riseTime)})]}),k.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[k.jsx("p",{className:"text-slate-400",children:"Peak"}),k.jsx("p",{className:"font-semibold",children:u(m.maxElevationTime)})]}),k.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[k.jsx("p",{className:"text-slate-400",children:"Set"}),k.jsx("p",{className:"font-semibold",children:m.setClipped?"After window":u(m.setTime)})]})]}),k.jsxs("div",{className:"mt-2 text-center text-xs text-slate-400",children:[m.riseClipped||m.setClipped?"Visible during at least ":"Duration: ",h(m.durationMinutes)]})]},g))})})]}),k.jsx("footer",{className:"border-t border-white/10 p-4",children:k.jsx("button",{className:"w-full rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:a,type:"button",children:"Predict Selected / Tracked"})})]})})},W_=({settings:i,onUpdate:e,onReset:t,onClose:s})=>{const a=lo(!0,s);return k.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:k.jsxs("section",{ref:a,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",className:"max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Settings"}),k.jsx("h2",{id:"settings-title",className:"mt-1 text-2xl font-bold",children:"Configuration"}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Customize your OrbitRadar experience"})]}),k.jsx("button",{"aria-label":"Close settings",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),k.jsx("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:k.jsxs("div",{className:"space-y-6",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Theme"}),k.jsx("div",{className:"flex gap-2",children:["dark","light","system"].map(l=>k.jsx("button",{className:`flex-1 rounded-lg border px-3 py-2 text-sm transition ${i.theme===l?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,"aria-pressed":i.theme===l,onClick:()=>e("theme",l),type:"button",children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Show orbits by default"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.showOrbitsByDefault?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.showOrbitsByDefault,onClick:()=>e("showOrbitsByDefault",!i.showOrbitsByDefault),type:"button",children:i.showOrbitsByDefault?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically show orbit path when selecting a satellite"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Default altitude filter"}),k.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("defaultAltitudeFilter",l.target.value),value:i.defaultAltitudeFilter,children:[k.jsx("option",{value:"all",children:"All Satellites"}),k.jsx("option",{value:"leo",children:"LEO (<2000km)"}),k.jsx("option",{value:"meo",children:"MEO (2-20k km)"}),k.jsx("option",{value:"geo",children:"High altitude (20k+ km)"}),k.jsx("option",{value:"none",children:"None (Earth only)"})]})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Night shading"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.nightShading?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.nightShading,onClick:()=>e("nightShading",!i.nightShading),type:"button",children:i.nightShading?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Follow the simulated UTC sun position."})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Cloud cover"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.cloudCover?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.cloudCover,onClick:()=>e("cloudCover",!i.cloudCover),type:"button",children:i.cloudCover?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"NOAA GFS total cloud cover, latest global analysis."})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Auto refresh catalog"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.autoRefresh?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.autoRefresh,onClick:()=>e("autoRefresh",!i.autoRefresh),type:"button",children:i.autoRefresh?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically refresh satellite catalog periodically"})]}),i.autoRefresh&&k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Refresh interval (hours)"}),k.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("refreshIntervalHours",Number(l.target.value)),value:i.refreshIntervalHours,children:[k.jsx("option",{value:1,children:"1 hour"}),k.jsx("option",{value:4,children:"4 hours"}),k.jsx("option",{value:8,children:"8 hours"}),k.jsx("option",{value:12,children:"12 hours"}),k.jsx("option",{value:24,children:"24 hours"})]})]})]})}),k.jsx("footer",{className:"border-t border-white/10 p-4",children:k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-400 transition hover:bg-white/20",onClick:t,type:"button",children:"Reset to defaults"}),k.jsx("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:s,type:"button",children:"Save & Close"})]})})]})})},P2=(i,e,t)=>i*(e?.016:t?.012:.008),L2="#ffffff",j_=i=>Math.min(Math.max(i,1),1.5);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="165",N2={ROTATE:0,DOLLY:1,PAN:2},D2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},X_=0,fm=1,q_=2,x0=1,Y_=2,er=3,Fr=0,$n=1,tr=2,Ur=0,aa=1,hm=2,pm=3,mm=4,$_=5,us=100,K_=101,J_=102,Z_=103,Q_=104,ey=200,ty=201,ny=202,iy=203,Zd=204,Qd=205,ry=206,sy=207,ay=208,oy=209,ly=210,cy=211,uy=212,dy=213,fy=214,hy=0,py=1,my=2,ac=3,gy=4,vy=5,xy=6,_y=7,xc=0,yy=1,Sy=2,Or=0,My=1,Ey=2,wy=3,Ty=4,Ay=5,by=6,Cy=7,_0=300,ua=301,da=302,ef=303,tf=304,_c=306,oc=1e3,Dr=1001,nf=1002,Yn=1003,Ry=1004,Al=1005,hi=1006,dd=1007,Ir=1008,zr=1009,Py=1010,Ly=1011,lc=1012,y0=1013,fa=1014,rr=1015,yc=1016,S0=1017,M0=1018,ha=1020,Ny=35902,Dy=1021,Iy=1022,bi=1023,Uy=1024,Oy=1025,oa=1026,pa=1027,E0=1028,w0=1029,Fy=1030,T0=1031,A0=1033,fd=33776,hd=33777,pd=33778,md=33779,gm=35840,vm=35841,xm=35842,_m=35843,ym=36196,Sm=37492,Mm=37496,Em=37808,wm=37809,Tm=37810,Am=37811,bm=37812,Cm=37813,Rm=37814,Pm=37815,Lm=37816,Nm=37817,Dm=37818,Im=37819,Um=37820,Om=37821,gd=36492,Fm=36494,zm=36495,zy=36283,km=36284,Bm=36285,Hm=36286,I2=0,U2=1,O2=2,ky=3200,By=3201,pf=0,Hy=1,Nr="",wi="srgb",Br="srgb-linear",mf="display-p3",Sc="display-p3-linear",cc="linear",jt="srgb",uc="rec709",dc="p3",Bs=7680,Vm=519,Vy=512,Gy=513,Wy=514,b0=515,jy=516,Xy=517,qy=518,Yy=519,rf=35044,F2=35048,z2=35040,Gm="300 es",sr=2e3,fc=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wm=1234567;const co=Math.PI/180,go=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function un(i,e,t){return Math.max(e,Math.min(t,i))}function gf(i,e){return(i%e+e)%e}function $y(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function Ky(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function Jy(i,e,t,s){return uo(i,e,1-Math.exp(-t*s))}function Zy(i,e=1){return e-Math.abs(gf(i,e*2)-e)}function Qy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function eS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nS(i,e){return i+Math.random()*(e-i)}function iS(i){return i*(.5-Math.random())}function rS(i){i!==void 0&&(Wm=i);let e=Wm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sS(i){return i*co}function aS(i){return i*go}function oS(i){return(i&i-1)===0&&i!==0}function lS(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uS(i,e,t,s,a){const l=Math.cos,c=Math.sin,u=l(t/2),f=c(t/2),h=l((e+s)/2),m=c((e+s)/2),g=l((e-s)/2),v=c((e-s)/2),S=l((s-e)/2),M=c((s-e)/2);switch(a){case"XYX":i.set(u*m,f*g,f*v,u*h);break;case"YZY":i.set(f*v,u*m,f*g,u*h);break;case"ZXZ":i.set(f*g,f*v,u*m,u*h);break;case"XZX":i.set(u*m,f*M,f*S,u*h);break;case"YXY":i.set(f*S,u*m,f*M,u*h);break;case"ZYZ":i.set(f*M,f*S,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const k2={DEG2RAD:co,RAD2DEG:go,generateUUID:zi,clamp:un,euclideanModulo:gf,mapLinear:$y,inverseLerp:Ky,lerp:uo,damp:Jy,pingpong:Zy,smoothstep:Qy,smootherstep:eS,randInt:tS,randFloat:nS,randFloatSpread:iS,seededRandom:rS,degToRad:sS,radToDeg:aS,isPowerOfTwo:oS,ceilPowerOfTwo:lS,floorPowerOfTwo:cS,setQuaternionFromProperEuler:uS,normalize:Ot,denormalize:Ai};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(un(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Mt{constructor(e,t,s,a,l,c,u,f,h){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,u,f,h)}set(e,t,s,a,l,c,u,f,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=t,m[4]=l,m[5]=f,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],u=s[3],f=s[6],h=s[1],m=s[4],g=s[7],v=s[2],S=s[5],M=s[8],w=a[0],y=a[3],x=a[6],D=a[1],T=a[4],L=a[7],z=a[2],N=a[5],U=a[8];return l[0]=c*w+u*D+f*z,l[3]=c*y+u*T+f*N,l[6]=c*x+u*L+f*U,l[1]=h*w+m*D+g*z,l[4]=h*y+m*T+g*N,l[7]=h*x+m*L+g*U,l[2]=v*w+S*D+M*z,l[5]=v*y+S*T+M*N,l[8]=v*x+S*L+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-s*l*m+s*u*f+a*l*h-a*c*f}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=m*c-u*h,v=u*f-m*l,S=h*l-c*f,M=t*g+s*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=g*w,e[1]=(a*h-m*s)*w,e[2]=(u*s-a*c)*w,e[3]=v*w,e[4]=(m*t-a*f)*w,e[5]=(a*l-u*t)*w,e[6]=S*w,e[7]=(s*f-h*t)*w,e[8]=(c*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,u){const f=Math.cos(l),h=Math.sin(l);return this.set(s*f,s*h,-s*(f*c+h*u)+c+e,-a*h,a*f,-a*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(vd.makeScale(e,t)),this}rotate(e){return this.premultiply(vd.makeRotation(-e)),this}translate(e,t){return this.premultiply(vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new Mt;function C0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dS(){const i=vo("canvas");return i.style.display="block",i}const jm={};function vf(i){i in jm||(jm[i]=!0,console.warn(i))}function fS(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const Xm=new Mt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qm=new Mt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bl={[Br]:{transfer:cc,primaries:uc,toReference:i=>i,fromReference:i=>i},[wi]:{transfer:jt,primaries:uc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Sc]:{transfer:cc,primaries:dc,toReference:i=>i.applyMatrix3(qm),fromReference:i=>i.applyMatrix3(Xm)},[mf]:{transfer:jt,primaries:dc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(qm),fromReference:i=>i.applyMatrix3(Xm).convertLinearToSRGB()}},hS=new Set([Br,Sc]),Ft={enabled:!0,_workingColorSpace:Br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hS.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const s=bl[e].toReference,a=bl[t].fromReference;return a(s(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return bl[i].primaries},getTransfer:function(i){return i===Nr?cc:bl[i].transfer}};function la(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xd(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hs;class pS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=vo("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=la(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(la(t[s]/255)*255):t[s]=la(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mS=0;class R0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?l.push(_d(a[c].image)):l.push(_d(a[c]))}else l=_d(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function _d(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gS=0;class Pn extends ga{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,s=Dr,a=Dr,l=hi,c=Ir,u=bi,f=zr,h=Pn.DEFAULT_ANISOTROPY,m=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=zi(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=_0;Pn.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,t=0,s=0,a=1){_n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const f=e.elements,h=f[0],m=f[4],g=f[8],v=f[1],S=f[5],M=f[9],w=f[2],y=f[6],x=f[10];if(Math.abs(m-v)<.01&&Math.abs(g-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+w)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,L=(S+1)/2,z=(x+1)/2,N=(m+v)/4,U=(g+w)/4,I=(M+y)/4;return T>L&&T>z?T<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(T),a=N/s,l=U/s):L>z?L<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(L),s=N/a,l=I/a):z<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),s=U/l,a=I/l),this.set(s,a,l,t),this}let D=Math.sqrt((y-M)*(y-M)+(g-w)*(g-w)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(y-M)/D,this.y=(g-w)/D,this.z=(v-m)/D,this.w=Math.acos((h+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vS extends ga{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _n(0,0,e,t),this.scissorTest=!1,this.viewport=new _n(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new Pn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let u=0;u<c;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new R0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends vS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class P0 extends Pn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xS extends Pn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,u){let f=s[a+0],h=s[a+1],m=s[a+2],g=s[a+3];const v=l[c+0],S=l[c+1],M=l[c+2],w=l[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(g!==w||f!==v||h!==S||m!==M){let y=1-u;const x=f*v+h*S+m*M+g*w,D=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const z=Math.sqrt(T),N=Math.atan2(z,x*D);y=Math.sin(y*N)/z,u=Math.sin(u*N)/z}const L=u*D;if(f=f*y+v*L,h=h*y+S*L,m=m*y+M*L,g=g*y+w*L,y===1-u){const z=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=z,h*=z,m*=z,g*=z}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,c){const u=s[a],f=s[a+1],h=s[a+2],m=s[a+3],g=l[c],v=l[c+1],S=l[c+2],M=l[c+3];return e[t]=u*M+m*g+f*S-h*v,e[t+1]=f*M+m*v+h*g-u*S,e[t+2]=h*M+m*S+u*v-f*g,e[t+3]=m*M-u*g-f*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(s/2),m=u(a/2),g=u(l/2),v=f(s/2),S=f(a/2),M=f(l/2);switch(c){case"XYZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"YXZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"ZXY":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"ZYX":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"YZX":this._x=v*m*g+h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g-v*S*M;break;case"XZY":this._x=v*m*g-h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],u=t[5],f=t[9],h=t[2],m=t[6],g=t[10],v=s+u+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-f)*S,this._y=(l-h)*S,this._z=(c-a)*S}else if(s>u&&s>g){const S=2*Math.sqrt(1+s-u-g);this._w=(m-f)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+h)/S}else if(u>g){const S=2*Math.sqrt(1+u-s-g);this._w=(l-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(f+m)/S}else{const S=2*Math.sqrt(1+g-s-u);this._w=(c-a)/S,this._x=(l+h)/S,this._y=(f+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,u=t._x,f=t._y,h=t._z,m=t._w;return this._x=s*m+c*u+a*h-l*f,this._y=a*m+c*f+l*u-s*h,this._z=l*m+c*h+s*f-a*u,this._w=c*m-s*u-a*f-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let u=c*e._w+s*e._x+a*e._y+l*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const f=1-u*u;if(f<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*g+this._w*v,this._x=s*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*a-u*s),m=2*(u*t-l*a),g=2*(l*s-c*t);return this.x=t+f*h+c*g-u*m,this.y=s+f*m+u*h-l*g,this.z=a+f*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,u=t.y,f=t.z;return this.x=a*f-l*u,this.y=l*c-s*f,this.z=s*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(un(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yd=new J,Ym=new So;class gs{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=l.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Si):Si.fromBufferAttribute(l,c),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cl.copy(s.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Rl.subVectors(this.max,eo),Vs.subVectors(e.a,eo),Gs.subVectors(e.b,eo),Ws.subVectors(e.c,eo),Tr.subVectors(Gs,Vs),Ar.subVectors(Ws,Gs),ns.subVectors(Vs,Ws);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-ns.z,ns.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,ns.z,0,-ns.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-ns.y,ns.x,0];return!Sd(t,Vs,Gs,Ws,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,Vs,Gs,Ws,Rl))?!1:(Pl.crossVectors(Tr,Ar),t=[Pl.x,Pl.y,Pl.z],Sd(t,Vs,Gs,Ws,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new J,new J,new J,new J,new J,new J,new J,new J],Si=new J,Cl=new gs,Vs=new J,Gs=new J,Ws=new J,Tr=new J,Ar=new J,ns=new J,eo=new J,Rl=new J,Pl=new J,is=new J;function Sd(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){is.fromArray(i,l);const u=a.x*Math.abs(is.x)+a.y*Math.abs(is.y)+a.z*Math.abs(is.z),f=e.dot(is),h=t.dot(is),m=s.dot(is);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>u)return!1}return!0}const _S=new gs,to=new J,Md=new J;class va{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):_S.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(to,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Md)),this.expandByPoint(to.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new J,Ed=new J,Ll=new J,br=new J,wd=new J,Nl=new J,Td=new J;class xf{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Ed.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),br.copy(this.origin).sub(Ed);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ll),u=br.dot(this.direction),f=-br.dot(Ll),h=br.lengthSq(),m=Math.abs(1-c*c);let g,v,S,M;if(m>0)if(g=c*f-u,v=c*u-f,M=l*m,g>=0)if(v>=-M)if(v<=M){const w=1/m;g*=w,v*=w,S=g*(g+c*v+2*u)+v*(c*g+v+2*f)+h}else v=l,g=Math.max(0,-(c*v+u)),S=-g*g+v*(v+2*f)+h;else v=-l,g=Math.max(0,-(c*v+u)),S=-g*g+v*(v+2*f)+h;else v<=-M?(g=Math.max(0,-(-c*l+u)),v=g>0?-l:Math.min(Math.max(-l,-f),l),S=-g*g+v*(v+2*f)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+h):(g=Math.max(0,-(c*l+u)),v=g>0?l:Math.min(Math.max(-l,-f),l),S=-g*g+v*(v+2*f)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+u)),S=-g*g+v*(v+2*f)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ed).addScaledVector(Ll,v),S}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const s=Ki.dot(this.direction),a=Ki.dot(Ki)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),u=s-c,f=s+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,u,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),g>=0?(u=(e.min.z-v.z)*g,f=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,f=(e.min.z-v.z)*g),s>f||u>a)||((u>s||s!==s)&&(s=u),(f<a||a!==a)&&(a=f),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,s,a,l){wd.subVectors(t,e),Nl.subVectors(s,e),Td.crossVectors(wd,Nl);let c=this.direction.dot(Td),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;br.subVectors(this.origin,e);const f=u*this.direction.dot(Nl.crossVectors(br,Nl));if(f<0)return null;const h=u*this.direction.dot(wd.cross(br));if(h<0||f+h>c)return null;const m=-u*br.dot(Td);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,s,a,l,c,u,f,h,m,g,v,S,M,w,y){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,u,f,h,m,g,v,S,M,w,y)}set(e,t,s,a,l,c,u,f,h,m,g,v,S,M,w,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=c,x[9]=u,x[13]=f,x[2]=h,x[6]=m,x[10]=g,x[14]=v,x[3]=S,x[7]=M,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),u=Math.sin(s),f=Math.cos(a),h=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*g,M=u*m,w=u*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=S+M*h,t[5]=v-w*h,t[9]=-u*f,t[2]=w-v*h,t[6]=M+S*h,t[10]=c*f}else if(e.order==="YXZ"){const v=f*m,S=f*g,M=h*m,w=h*g;t[0]=v+w*u,t[4]=M*u-S,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=S*u-M,t[6]=w+v*u,t[10]=c*f}else if(e.order==="ZXY"){const v=f*m,S=f*g,M=h*m,w=h*g;t[0]=v-w*u,t[4]=-c*g,t[8]=M+S*u,t[1]=S+M*u,t[5]=c*m,t[9]=w-v*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const v=c*m,S=c*g,M=u*m,w=u*g;t[0]=f*m,t[4]=M*h-S,t[8]=v*h+w,t[1]=f*g,t[5]=w*h+v,t[9]=S*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const v=c*f,S=c*h,M=u*f,w=u*h;t[0]=f*m,t[4]=w-v*g,t[8]=M*g+S,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=S*g+M,t[10]=v-w*g}else if(e.order==="XZY"){const v=c*f,S=c*h,M=u*f,w=u*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=v*g+w,t[5]=c*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=u*m,t[10]=w*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yS,e,SS)}lookAt(e,t,s){const a=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Cr.crossVectors(s,ni),Cr.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Cr.crossVectors(s,ni)),Cr.normalize(),Dl.crossVectors(ni,Cr),a[0]=Cr.x,a[4]=Dl.x,a[8]=ni.x,a[1]=Cr.y,a[5]=Dl.y,a[9]=ni.y,a[2]=Cr.z,a[6]=Dl.z,a[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],u=s[4],f=s[8],h=s[12],m=s[1],g=s[5],v=s[9],S=s[13],M=s[2],w=s[6],y=s[10],x=s[14],D=s[3],T=s[7],L=s[11],z=s[15],N=a[0],U=a[4],I=a[8],A=a[12],b=a[1],B=a[5],Q=a[9],q=a[13],ie=a[2],fe=a[6],Y=a[10],me=a[14],W=a[3],ee=a[7],ne=a[11],O=a[15];return l[0]=c*N+u*b+f*ie+h*W,l[4]=c*U+u*B+f*fe+h*ee,l[8]=c*I+u*Q+f*Y+h*ne,l[12]=c*A+u*q+f*me+h*O,l[1]=m*N+g*b+v*ie+S*W,l[5]=m*U+g*B+v*fe+S*ee,l[9]=m*I+g*Q+v*Y+S*ne,l[13]=m*A+g*q+v*me+S*O,l[2]=M*N+w*b+y*ie+x*W,l[6]=M*U+w*B+y*fe+x*ee,l[10]=M*I+w*Q+y*Y+x*ne,l[14]=M*A+w*q+y*me+x*O,l[3]=D*N+T*b+L*ie+z*W,l[7]=D*U+T*B+L*fe+z*ee,l[11]=D*I+T*Q+L*Y+z*ne,l[15]=D*A+T*q+L*me+z*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],u=e[5],f=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],M=e[3],w=e[7],y=e[11],x=e[15];return M*(+l*f*g-a*h*g-l*u*v+s*h*v+a*u*S-s*f*S)+w*(+t*f*S-t*h*v+l*c*v-a*c*S+a*h*m-l*f*m)+y*(+t*h*g-t*u*S-l*c*g+s*c*S+l*u*m-s*h*m)+x*(-a*u*m-t*f*g+t*u*v+a*c*g-s*c*v+s*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],M=e[12],w=e[13],y=e[14],x=e[15],D=g*y*h-w*v*h+w*f*S-u*y*S-g*f*x+u*v*x,T=M*v*h-m*y*h-M*f*S+c*y*S+m*f*x-c*v*x,L=m*w*h-M*g*h+M*u*S-c*w*S-m*u*x+c*g*x,z=M*g*f-m*w*f-M*u*v+c*w*v+m*u*y-c*g*y,N=t*D+s*T+a*L+l*z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=D*U,e[1]=(w*v*l-g*y*l-w*a*S+s*y*S+g*a*x-s*v*x)*U,e[2]=(u*y*l-w*f*l+w*a*h-s*y*h-u*a*x+s*f*x)*U,e[3]=(g*f*l-u*v*l-g*a*h+s*v*h+u*a*S-s*f*S)*U,e[4]=T*U,e[5]=(m*y*l-M*v*l+M*a*S-t*y*S-m*a*x+t*v*x)*U,e[6]=(M*f*l-c*y*l-M*a*h+t*y*h+c*a*x-t*f*x)*U,e[7]=(c*v*l-m*f*l+m*a*h-t*v*h-c*a*S+t*f*S)*U,e[8]=L*U,e[9]=(M*g*l-m*w*l-M*s*S+t*w*S+m*s*x-t*g*x)*U,e[10]=(c*w*l-M*u*l+M*s*h-t*w*h-c*s*x+t*u*x)*U,e[11]=(m*u*l-c*g*l-m*s*h+t*g*h+c*s*S-t*u*S)*U,e[12]=z*U,e[13]=(m*w*a-M*g*a+M*s*v-t*w*v-m*s*y+t*g*y)*U,e[14]=(M*u*a-c*w*a-M*s*f+t*w*f+c*s*y-t*u*y)*U,e[15]=(c*g*a-m*u*a+m*s*f-t*g*f-c*s*v+t*u*v)*U,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,u=e.y,f=e.z,h=l*c,m=l*u;return this.set(h*c+s,h*u-a*f,h*f+a*u,0,h*u+a*f,m*u+s,m*f-a*c,0,h*f-a*u,m*f+a*c,l*f*f+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,u=t._z,f=t._w,h=l+l,m=c+c,g=u+u,v=l*h,S=l*m,M=l*g,w=c*m,y=c*g,x=u*g,D=f*h,T=f*m,L=f*g,z=s.x,N=s.y,U=s.z;return a[0]=(1-(w+x))*z,a[1]=(S+L)*z,a[2]=(M-T)*z,a[3]=0,a[4]=(S-L)*N,a[5]=(1-(v+x))*N,a[6]=(y+D)*N,a[7]=0,a[8]=(M+T)*U,a[9]=(y-D)*U,a[10]=(1-(v+w))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=js.set(a[0],a[1],a[2]).length();const c=js.set(a[4],a[5],a[6]).length(),u=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Mi.copy(this);const h=1/l,m=1/c,g=1/u;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=m,Mi.elements[5]*=m,Mi.elements[6]*=m,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,t.setFromRotationMatrix(Mi),s.x=l,s.y=c,s.z=u,this}makePerspective(e,t,s,a,l,c,u=sr){const f=this.elements,h=2*l/(t-e),m=2*l/(s-a),g=(t+e)/(t-e),v=(s+a)/(s-a);let S,M;if(u===sr)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(u===fc)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=v,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,s,a,l,c,u=sr){const f=this.elements,h=1/(t-e),m=1/(s-a),g=1/(c-l),v=(t+e)*h,S=(s+a)*m;let M,w;if(u===sr)M=(c+l)*g,w=-2*g;else if(u===fc)M=l*g,w=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-v,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new J,Mi=new Bt,yS=new J(0,0,0),SS=new J(1,1,1),Cr=new J,Dl=new J,ni=new J,$m=new Bt,Km=new So;class Ri{constructor(e=0,t=0,s=0,a=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],u=a[8],f=a[1],h=a[5],m=a[9],g=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(un(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-un(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(un(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-un(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return $m.makeRotationFromQuaternion(e),this.setFromRotationMatrix($m,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Km.setFromEuler(this),this.setFromQuaternion(Km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class _f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let MS=0;const Jm=new J,Xs=new So,Ji=new Bt,Il=new J,no=new J,ES=new J,wS=new So,Zm=new J(1,0,0),Qm=new J(0,1,0),eg=new J(0,0,1),tg={type:"added"},TS={type:"removed"},qs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class En extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new J,t=new Ri,s=new So,a=new J(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Mt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Zm,e)}rotateY(e){return this.rotateOnAxis(Qm,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Jm.copy(e).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zm,e)}translateY(e){return this.translateOnAxis(Qm,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Il.copy(e):Il.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(no,Il,this.up):Ji.lookAt(Il,no,this.up),this.quaternion.setFromRotationMatrix(Ji),a&&(Ji.extractRotation(a.matrixWorld),Xs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(TS),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,ES),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,wS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];l(e.shapes,g)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(l(e.materials,this.material[f]));a.material=u}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];a.animations.push(l(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),M=c(e.nodes);u.length>0&&(s.geometries=u),f.length>0&&(s.materials=f),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function c(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}En.DEFAULT_UP=new J(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new J,Zi=new J,bd=new J,Qi=new J,Ys=new J,$s=new J,ng=new J,Cd=new J,Rd=new J,Pd=new J;class Fi{constructor(e=new J,t=new J,s=new J){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Ei.subVectors(e,t),a.cross(Ei);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){Ei.subVectors(a,t),Zi.subVectors(s,t),bd.subVectors(e,t);const c=Ei.dot(Ei),u=Ei.dot(Zi),f=Ei.dot(bd),h=Zi.dot(Zi),m=Zi.dot(bd),g=c*h-u*u;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*f-u*m)*v,M=(c*m-u*f)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,s,a,l,c,u,f){return this.getBarycoord(e,t,s,a,Qi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Qi.x),f.addScaledVector(c,Qi.y),f.addScaledVector(u,Qi.z),f)}static isFrontFacing(e,t,s,a){return Ei.subVectors(s,t),Zi.subVectors(e,t),Ei.cross(Zi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Ei.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Fi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,u;Ys.subVectors(a,s),$s.subVectors(l,s),Cd.subVectors(e,s);const f=Ys.dot(Cd),h=$s.dot(Cd);if(f<=0&&h<=0)return t.copy(s);Rd.subVectors(e,a);const m=Ys.dot(Rd),g=$s.dot(Rd);if(m>=0&&g<=m)return t.copy(a);const v=f*g-m*h;if(v<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(s).addScaledVector(Ys,c);Pd.subVectors(e,l);const S=Ys.dot(Pd),M=$s.dot(Pd);if(M>=0&&S<=M)return t.copy(l);const w=S*h-f*M;if(w<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(s).addScaledVector($s,u);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return ng.subVectors(l,a),u=(g-m)/(g-m+(S-M)),t.copy(a).addScaledVector(ng,u);const x=1/(y+w+v);return c=w*x,u=v*x,t.copy(s).addScaledVector(Ys,c).addScaledVector($s,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Ld(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ct{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=s,Ft.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Ft.workingColorSpace){if(e=gf(e,1),t=un(t,0,1),s=un(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Ld(c,l,e+1/3),this.g=Ld(c,l,e),this.b=Ld(c,l,e-1/3)}return Ft.toWorkingColorSpace(this,a),this}setStyle(e,t=wi){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wi){const s=L0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=xd(e.r),this.g=xd(e.g),this.b=xd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return Ft.fromWorkingColorSpace(Rn.copy(this),e),Math.round(un(Rn.r*255,0,255))*65536+Math.round(un(Rn.g*255,0,255))*256+Math.round(un(Rn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(Rn.copy(this),t);const s=Rn.r,a=Rn.g,l=Rn.b,c=Math.max(s,a,l),u=Math.min(s,a,l);let f,h;const m=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case s:f=(a-l)/g+(a<l?6:0);break;case a:f=(l-s)/g+2;break;case l:f=(s-a)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=wi){Ft.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,s=Rn.g,a=Rn.b;return e!==wi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Ul);const s=uo(Rr.h,Ul.h,t),a=uo(Rr.s,Ul.s,t),l=uo(Rr.l,Ul.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ct;Ct.NAMES=L0;let AS=0;class vs extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=aa,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Qd,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(s.blending=this.blending),this.side!==Fr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==us&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ac&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class N0 extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new J,Ol=new $e;class pi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=rf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vf("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ai(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ot(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),s=Ot(s,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),s=Ot(s,this.array),a=Ot(a,this.array),l=Ot(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rf&&(e.usage=this.usage),e}}class D0 extends pi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class I0 extends pi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class $t extends pi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let bS=0;const fi=new Bt,Nd=new En,Ks=new J,ii=new gs,io=new gs,xn=new J;class kn extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C0(e)?I0:D0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Mt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,s){return fi.makeTranslation(e,t,s),this.applyMatrix4(fi),this}scale(e,t,s){return fi.makeScale(e,t,s),this.applyMatrix4(fi),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const u=t[l];io.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(ii.min,io.min),ii.expandByPoint(xn),xn.addVectors(ii.max,io.max),ii.expandByPoint(xn)):(ii.expandByPoint(io.min),ii.expandByPoint(io.max))}ii.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)xn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(xn));if(t)for(let l=0,c=t.length;l<c;l++){const u=t[l],f=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)xn.fromBufferAttribute(u,h),f&&(Ks.fromBufferAttribute(e,h),xn.add(Ks)),a=Math.max(a,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let I=0;I<s.count;I++)u[I]=new J,f[I]=new J;const h=new J,m=new J,g=new J,v=new $e,S=new $e,M=new $e,w=new J,y=new J;function x(I,A,b){h.fromBufferAttribute(s,I),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,b),v.fromBufferAttribute(l,I),S.fromBufferAttribute(l,A),M.fromBufferAttribute(l,b),m.sub(h),g.sub(h),S.sub(v),M.sub(v);const B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(w.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(B),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(B),u[I].add(w),u[A].add(w),u[b].add(w),f[I].add(y),f[A].add(y),f[b].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let I=0,A=D.length;I<A;++I){const b=D[I],B=b.start,Q=b.count;for(let q=B,ie=B+Q;q<ie;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new J,L=new J,z=new J,N=new J;function U(I){z.fromBufferAttribute(a,I),N.copy(z);const A=u[I];T.copy(A),T.sub(z.multiplyScalar(z.dot(A))).normalize(),L.crossVectors(N,A);const B=L.dot(f[I])<0?-1:1;c.setXYZW(I,T.x,T.y,T.z,B)}for(let I=0,A=D.length;I<A;++I){const b=D[I],B=b.start,Q=b.count;for(let q=B,ie=B+Q;q<ie;q+=3)U(e.getX(q+0)),U(e.getX(q+1)),U(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new J,l=new J,c=new J,u=new J,f=new J,h=new J,m=new J,g=new J;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),w=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),u.fromBufferAttribute(s,M),f.fromBufferAttribute(s,w),h.fromBufferAttribute(s,y),u.add(m),f.add(m),h.add(m),s.setXYZ(M,u.x,u.y,u.z),s.setXYZ(w,f.x,f.y,f.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,f){const h=u.array,m=u.itemSize,g=u.normalized,v=new h.constructor(f.length*m);let S=0,M=0;for(let w=0,y=f.length;w<y;w++){u.isInterleavedBufferAttribute?S=f[w]*u.data.stride+u.offset:S=f[w]*m;for(let x=0;x<m;x++)v[M++]=h[S++]}return new pi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,s=this.index.array,a=this.attributes;for(const u in a){const f=a[u],h=e(f,s);t.setAttribute(u,h)}const l=this.morphAttributes;for(const u in l){const f=[],h=l[u];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,s);f.push(S)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const f in s){const h=s[f];e.data.attributes[f]=h.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(a[f]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ig=new Bt,rs=new xf,Fl=new va,rg=new J,Js=new J,Zs=new J,Qs=new J,Dd=new J,zl=new J,kl=new $e,Bl=new $e,Hl=new $e,sg=new J,ag=new J,og=new J,Vl=new J,Gl=new J;class Ci extends En{constructor(e=new kn,t=new N0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(l&&u){zl.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const m=u[f],g=l[f];m!==0&&(Dd.fromBufferAttribute(g,e),c?zl.addScaledVector(Dd,m):zl.addScaledVector(Dd.sub(t),m))}t.add(zl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(l),rs.copy(e.ray).recast(e.near),!(Fl.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Fl,rg)===null||rs.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(l).invert(),rs.copy(e.ray).applyMatrix4(ig),!(s.boundingBox!==null&&rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,u=l.index,f=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const y=v[M],x=c[y.materialIndex],D=Math.max(y.start,S.start),T=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let L=D,z=T;L<z;L+=3){const N=u.getX(L),U=u.getX(L+1),I=u.getX(L+2);a=Wl(this,x,e,s,h,m,g,N,U,I),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let y=M,x=w;y<x;y+=3){const D=u.getX(y),T=u.getX(y+1),L=u.getX(y+2);a=Wl(this,c,e,s,h,m,g,D,T,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,w=v.length;M<w;M++){const y=v[M],x=c[y.materialIndex],D=Math.max(y.start,S.start),T=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let L=D,z=T;L<z;L+=3){const N=L,U=L+1,I=L+2;a=Wl(this,x,e,s,h,m,g,N,U,I),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=M,x=w;y<x;y+=3){const D=y,T=y+1,L=y+2;a=Wl(this,c,e,s,h,m,g,D,T,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function CS(i,e,t,s,a,l,c,u){let f;if(e.side===$n?f=s.intersectTriangle(c,l,a,!0,u):f=s.intersectTriangle(a,l,c,e.side===Fr,u),f===null)return null;Gl.copy(u),Gl.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Gl);return h<t.near||h>t.far?null:{distance:h,point:Gl.clone(),object:i}}function Wl(i,e,t,s,a,l,c,u,f,h){i.getVertexPosition(u,Js),i.getVertexPosition(f,Zs),i.getVertexPosition(h,Qs);const m=CS(i,e,t,s,Js,Zs,Qs,Vl);if(m){a&&(kl.fromBufferAttribute(a,u),Bl.fromBufferAttribute(a,f),Hl.fromBufferAttribute(a,h),m.uv=Fi.getInterpolation(Vl,Js,Zs,Qs,kl,Bl,Hl,new $e)),l&&(kl.fromBufferAttribute(l,u),Bl.fromBufferAttribute(l,f),Hl.fromBufferAttribute(l,h),m.uv1=Fi.getInterpolation(Vl,Js,Zs,Qs,kl,Bl,Hl,new $e)),c&&(sg.fromBufferAttribute(c,u),ag.fromBufferAttribute(c,f),og.fromBufferAttribute(c,h),m.normal=Fi.getInterpolation(Vl,Js,Zs,Qs,sg,ag,og,new J),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const g={a:u,b:f,c:h,normal:new J,materialIndex:0};Fi.getNormal(Js,Zs,Qs,g.normal),m.face=g}return m}class Mo extends kn{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const u=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],m=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,a,c,2),M("x","z","y",1,-1,e,s,-t,a,c,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(f),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(g,2));function M(w,y,x,D,T,L,z,N,U,I,A){const b=L/U,B=z/I,Q=L/2,q=z/2,ie=N/2,fe=U+1,Y=I+1;let me=0,W=0;const ee=new J;for(let ne=0;ne<Y;ne++){const O=ne*B-q;for(let $=0;$<fe;$++){const Pe=$*b-Q;ee[w]=Pe*D,ee[y]=O*T,ee[x]=ie,h.push(ee.x,ee.y,ee.z),ee[w]=0,ee[y]=0,ee[x]=N>0?1:-1,m.push(ee.x,ee.y,ee.z),g.push($/U),g.push(1-ne/I),me+=1}}for(let ne=0;ne<I;ne++)for(let O=0;O<U;O++){const $=v+O+fe*ne,Pe=v+O+fe*(ne+1),Z=v+(O+1)+fe*(ne+1),re=v+(O+1)+fe*ne;f.push($,Pe,re),f.push(Pe,Z,re),W+=6}u.addGroup(S,W,A),S+=W,v+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const s=ma(i[t]);for(const a in s)e[a]=s[a]}return e}function RS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function U0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const PS={clone:ma,merge:zn};var LS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=LS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class O0 extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new J,lg=new $e,cg=new $e;class Ti extends O0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,lg,cg),t.subVectors(cg,lg)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*s/h,a*=c.width/f,s*=c.height/h}const u=this.filmOffset;u!==0&&(l+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class DS extends En{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ti(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Ti(ea,ta,e,t);l.layers=this.layers,this.add(l);const c=new Ti(ea,ta,e,t);c.layers=this.layers,this.add(c);const u=new Ti(ea,ta,e,t);u.layers=this.layers,this.add(u);const f=new Ti(ea,ta,e,t);f.layers=this.layers,this.add(f);const h=new Ti(ea,ta,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,u,f]=t;for(const h of t)this.remove(h);if(e===sr)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,u,f,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,u),e.setRenderTarget(s,3,a),e.render(t,f),e.setRenderTarget(s,4,a),e.render(t,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class F0 extends Pn{constructor(e,t,s,a,l,c,u,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,s,a,l,c,u,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class IS extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new F0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Mo(5,5,5),l=new kr({name:"CubemapFromEquirect",uniforms:ma(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Ur});l.uniforms.tEquirect.value=t;const c=new Ci(a,l),u=t.minFilter;return t.minFilter===Ir&&(t.minFilter=hi),new DS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}const Id=new J,US=new J,OS=new Mt;class ls{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Id.subVectors(s,t).cross(US.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Id),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||OS.getNormalMatrix(e),a=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new va,jl=new J;class yf{constructor(e=new ls,t=new ls,s=new ls,a=new ls,l=new ls,c=new ls){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(s),u[3].copy(a),u[4].copy(l),u[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=sr){const s=this.planes,a=e.elements,l=a[0],c=a[1],u=a[2],f=a[3],h=a[4],m=a[5],g=a[6],v=a[7],S=a[8],M=a[9],w=a[10],y=a[11],x=a[12],D=a[13],T=a[14],L=a[15];if(s[0].setComponents(f-l,v-h,y-S,L-x).normalize(),s[1].setComponents(f+l,v+h,y+S,L+x).normalize(),s[2].setComponents(f+c,v+m,y+M,L+D).normalize(),s[3].setComponents(f-c,v-m,y-M,L-D).normalize(),s[4].setComponents(f-u,v-g,y-w,L-T).normalize(),t===sr)s[5].setComponents(f+u,v+g,y+w,L+T).normalize();else if(t===fc)s[5].setComponents(u,g,w,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(jl.x=a.normal.x>0?e.max.x:e.min.x,jl.y=a.normal.y>0?e.max.y:e.min.y,jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z0(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function FS(i){const e=new WeakMap;function t(u,f){const h=u.array,m=u.usage,g=h.byteLength,v=i.createBuffer();i.bindBuffer(f,v),i.bufferData(f,h,m),u.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,h){const m=f.array,g=f._updateRange,v=f.updateRanges;if(i.bindBuffer(h,u),g.count===-1&&v.length===0&&i.bufferSubData(h,0,m),v.length!==0){for(let S=0,M=v.length;S<M;S++){const w=v[S];i.bufferSubData(h,w.start*m.BYTES_PER_ELEMENT,m,w.start,w.count)}f.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(h,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(i.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:l,update:c}}class Mc extends kn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,u=Math.floor(s),f=Math.floor(a),h=u+1,m=f+1,g=e/u,v=t/f,S=[],M=[],w=[],y=[];for(let x=0;x<m;x++){const D=x*v-c;for(let T=0;T<h;T++){const L=T*g-l;M.push(L,-D,0),w.push(0,0,1),y.push(T/u),y.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<u;D++){const T=D+h*x,L=D+h*(x+1),z=D+1+h*(x+1),N=D+1+h*x;S.push(T,L,N),S.push(L,z,N)}this.setIndex(S),this.setAttribute("position",new $t(M,3)),this.setAttribute("normal",new $t(w,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.width,e.height,e.widthSegments,e.heightSegments)}}var zS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kS=`#ifdef USE_ALPHAHASH
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
#endif`,BS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
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
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XS=`#ifdef USE_BATCHING
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
#endif`,qS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JS=`#ifdef USE_IRIDESCENCE
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
#endif`,ZS=`#ifdef USE_BUMPMAP
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oM=`#define PI 3.141592653589793
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
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`
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
}`,gM=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
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
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
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
#endif`,OM=`struct PhysicalMaterial {
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
}`,FM=`
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qM=`#if defined( USE_POINTS_UV )
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
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
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
#endif`,e1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
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
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M1=`float getShadowMask() {
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
}`,E1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,T1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,b1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L1=`#ifdef USE_TRANSMISSION
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
#endif`,N1=`#ifdef USE_TRANSMISSION
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`#include <common>
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
}`,W1=`#if DEPTH_PACKING == 3200
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
}`,j1=`#define DISTANCE
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
}`,X1=`#define DISTANCE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
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
}`,K1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,Z1=`uniform vec3 diffuse;
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
}`,Q1=`#define LAMBERT
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
}`,eE=`#define LAMBERT
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
}`,tE=`#define MATCAP
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
}`,nE=`#define MATCAP
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
}`,iE=`#define NORMAL
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
}`,rE=`#define NORMAL
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
}`,sE=`#define PHONG
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
}`,aE=`#define PHONG
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
}`,oE=`#define STANDARD
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
}`,lE=`#define STANDARD
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
}`,cE=`#define TOON
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
}`,uE=`#define TOON
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
}`,dE=`uniform float size;
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
}`,fE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,pE=`uniform vec3 color;
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
}`,mE=`uniform float rotation;
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
}`,gE=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:zS,alphahash_pars_fragment:kS,alphamap_fragment:BS,alphamap_pars_fragment:HS,alphatest_fragment:VS,alphatest_pars_fragment:GS,aomap_fragment:WS,aomap_pars_fragment:jS,batching_pars_vertex:XS,batching_vertex:qS,begin_vertex:YS,beginnormal_vertex:$S,bsdfs:KS,iridescence_fragment:JS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:aM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:dM,emissivemap_fragment:fM,emissivemap_pars_fragment:hM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:vM,envmap_pars_fragment:xM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:PM,envmap_vertex:yM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:wM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:AM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:CM,lights_pars_begin:RM,lights_toon_fragment:LM,lights_toon_pars_fragment:NM,lights_phong_fragment:DM,lights_phong_pars_fragment:IM,lights_physical_fragment:UM,lights_physical_pars_fragment:OM,lights_fragment_begin:FM,lights_fragment_maps:zM,lights_fragment_end:kM,logdepthbuf_fragment:BM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:GM,map_fragment:WM,map_pars_fragment:jM,map_particle_fragment:XM,map_particle_pars_fragment:qM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:$M,morphinstance_vertex:KM,morphcolor_vertex:JM,morphnormal_vertex:ZM,morphtarget_pars_vertex:QM,morphtarget_vertex:e1,normal_fragment_begin:t1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:r1,normal_vertex:s1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:c1,iridescence_pars_fragment:u1,opaque_fragment:d1,packing:f1,premultiplied_alpha_fragment:h1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:y1,shadowmap_vertex:S1,shadowmask_pars_fragment:M1,skinbase_vertex:E1,skinning_pars_vertex:w1,skinning_vertex:T1,skinnormal_vertex:A1,specularmap_fragment:b1,specularmap_pars_fragment:C1,tonemapping_fragment:R1,tonemapping_pars_fragment:P1,transmission_fragment:L1,transmission_pars_fragment:N1,uv_pars_fragment:D1,uv_pars_vertex:I1,uv_vertex:U1,worldpos_vertex:O1,background_vert:F1,background_frag:z1,backgroundCube_vert:k1,backgroundCube_frag:B1,cube_vert:H1,cube_frag:V1,depth_vert:G1,depth_frag:W1,distanceRGBA_vert:j1,distanceRGBA_frag:X1,equirect_vert:q1,equirect_frag:Y1,linedashed_vert:$1,linedashed_frag:K1,meshbasic_vert:J1,meshbasic_frag:Z1,meshlambert_vert:Q1,meshlambert_frag:eE,meshmatcap_vert:tE,meshmatcap_frag:nE,meshnormal_vert:iE,meshnormal_frag:rE,meshphong_vert:sE,meshphong_frag:aE,meshphysical_vert:oE,meshphysical_frag:lE,meshtoon_vert:cE,meshtoon_frag:uE,points_vert:dE,points_frag:fE,shadow_vert:hE,shadow_frag:pE,sprite_vert:mE,sprite_frag:gE},Ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:zn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:zn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:zn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:zn([Ke.points,Ke.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:zn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:zn([Ke.common,Ke.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:zn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:zn([Ke.sprite,Ke.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:zn([Ke.common,Ke.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:zn([Ke.lights,Ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Xl={r:0,b:0,g:0},as=new Ri,vE=new Bt;function xE(i,e,t,s,a,l,c){const u=new Ct(0);let f=l===!0?0:1,h,m,g=null,v=0,S=null;function M(D){let T=D.isScene===!0?D.background:null;return T&&T.isTexture&&(T=(D.backgroundBlurriness>0?t:e).get(T)),T}function w(D){let T=!1;const L=M(D);L===null?x(u,f):L&&L.isColor&&(x(L,1),T=!0);const z=i.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||T)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(D,T){const L=M(T);L&&(L.isCubeTexture||L.mapping===_c)?(m===void 0&&(m=new Ci(new Mo(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:ma(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,N,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),as.copy(T.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(vE.makeRotationFromEuler(as)),m.material.toneMapped=Ft.getTransfer(L.colorSpace)!==jt,(g!==L||v!==L.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=L,v=L.version,S=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new Ci(new Mc(2,2),new kr({name:"BackgroundMaterial",uniforms:ma(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(L.colorSpace)!==jt,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,g=L,v=L.version,S=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function x(D,T){D.getRGB(Xl,U0(i)),s.buffers.color.setClear(Xl.r,Xl.g,Xl.b,T,c)}return{getClearColor:function(){return u},setClearColor:function(D,T=1){u.set(D),f=T,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,x(u,f)},render:w,addToRenderList:y}}function _E(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function u(b,B,Q,q,ie){let fe=!1;const Y=g(q,Q,B);l!==Y&&(l=Y,h(l.object)),fe=S(b,q,Q,ie),fe&&M(b,q,Q,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,L(b,B,Q,q),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function f(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function m(b){return i.deleteVertexArray(b)}function g(b,B,Q){const q=Q.wireframe===!0;let ie=s[b.id];ie===void 0&&(ie={},s[b.id]=ie);let fe=ie[B.id];fe===void 0&&(fe={},ie[B.id]=fe);let Y=fe[q];return Y===void 0&&(Y=v(f()),fe[q]=Y),Y}function v(b){const B=[],Q=[],q=[];for(let ie=0;ie<t;ie++)B[ie]=0,Q[ie]=0,q[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:q,object:b,attributes:{},index:null}}function S(b,B,Q,q){const ie=l.attributes,fe=B.attributes;let Y=0;const me=Q.getAttributes();for(const W in me)if(me[W].location>=0){const ne=ie[W];let O=fe[W];if(O===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),ne===void 0||ne.attribute!==O||O&&ne.data!==O.data)return!0;Y++}return l.attributesNum!==Y||l.index!==q}function M(b,B,Q,q){const ie={},fe=B.attributes;let Y=0;const me=Q.getAttributes();for(const W in me)if(me[W].location>=0){let ne=fe[W];ne===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ne=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ne=b.instanceColor));const O={};O.attribute=ne,ne&&ne.data&&(O.data=ne.data),ie[W]=O,Y++}l.attributes=ie,l.attributesNum=Y,l.index=q}function w(){const b=l.newAttributes;for(let B=0,Q=b.length;B<Q;B++)b[B]=0}function y(b){x(b,0)}function x(b,B){const Q=l.newAttributes,q=l.enabledAttributes,ie=l.attributeDivisors;Q[b]=1,q[b]===0&&(i.enableVertexAttribArray(b),q[b]=1),ie[b]!==B&&(i.vertexAttribDivisor(b,B),ie[b]=B)}function D(){const b=l.newAttributes,B=l.enabledAttributes;for(let Q=0,q=B.length;Q<q;Q++)B[Q]!==b[Q]&&(i.disableVertexAttribArray(Q),B[Q]=0)}function T(b,B,Q,q,ie,fe,Y){Y===!0?i.vertexAttribIPointer(b,B,Q,ie,fe):i.vertexAttribPointer(b,B,Q,q,ie,fe)}function L(b,B,Q,q){w();const ie=q.attributes,fe=Q.getAttributes(),Y=B.defaultAttributeValues;for(const me in fe){const W=fe[me];if(W.location>=0){let ee=ie[me];if(ee===void 0&&(me==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),me==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),ee!==void 0){const ne=ee.normalized,O=ee.itemSize,$=e.get(ee);if($===void 0)continue;const Pe=$.buffer,Z=$.type,re=$.bytesPerElement,ce=Z===i.INT||Z===i.UNSIGNED_INT||ee.gpuType===y0;if(ee.isInterleavedBufferAttribute){const _e=ee.data,Ne=_e.stride,ke=ee.offset;if(_e.isInstancedInterleavedBuffer){for(let Be=0;Be<W.locationSize;Be++)x(W.location+Be,_e.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<W.locationSize;Be++)y(W.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let Be=0;Be<W.locationSize;Be++)T(W.location+Be,O/W.locationSize,Z,ne,Ne*re,(ke+O/W.locationSize*Be)*re,ce)}else{if(ee.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)x(W.location+_e,ee.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<W.locationSize;_e++)y(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let _e=0;_e<W.locationSize;_e++)T(W.location+_e,O/W.locationSize,Z,ne,O*re,O/W.locationSize*_e*re,ce)}}else if(Y!==void 0){const ne=Y[me];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(W.location,ne);break;case 3:i.vertexAttrib3fv(W.location,ne);break;case 4:i.vertexAttrib4fv(W.location,ne);break;default:i.vertexAttrib1fv(W.location,ne)}}}}D()}function z(){I();for(const b in s){const B=s[b];for(const Q in B){const q=B[Q];for(const ie in q)m(q[ie].object),delete q[ie];delete B[Q]}delete s[b]}}function N(b){if(s[b.id]===void 0)return;const B=s[b.id];for(const Q in B){const q=B[Q];for(const ie in q)m(q[ie].object),delete q[ie];delete B[Q]}delete s[b.id]}function U(b){for(const B in s){const Q=s[B];if(Q[b.id]===void 0)continue;const q=Q[b.id];for(const ie in q)m(q[ie].object),delete q[ie];delete Q[b.id]}}function I(){A(),c=!0,l!==a&&(l=a,h(l.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:I,resetDefaultState:A,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:D}}function yE(i,e,t){let s;function a(h){s=h}function l(h,m){i.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,g){g!==0&&(i.drawArraysInstanced(s,h,m,g),t.update(m,s,g))}function u(h,m,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<g;S++)this.render(h[S],m[S]);else{v.multiDrawArraysWEBGL(s,h,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=m[M];t.update(S,s,1)}}function f(h,m,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)c(h[M],m[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,m,0,v,0,g);let M=0;for(let w=0;w<g;w++)M+=m[w];for(let w=0;w<v.length;w++)t.update(M,s,v[w])}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function SE(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(N){return!(N!==bi&&s.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const U=N===yc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==zr&&s.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==rr&&!U)}function f(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,z=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:w,maxAttributes:y,maxVertexUniforms:x,maxVaryings:D,maxFragmentUniforms:T,vertexTextures:L,maxSamples:z}}function ME(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new ls,u=new Mt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||a;return a=v,s=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,w=g.clipIntersection,y=g.clipShadows,x=i.get(g);if(!a||M===null||M.length===0||l&&!y)l?m(null):h();else{const D=l?0:s,T=D*4;let L=x.clippingState||null;f.value=L,L=m(M,v,T,S);for(let z=0;z!==T;++z)L[z]=t[z];x.clippingState=L,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,v,S,M){const w=g!==null?g.length:0;let y=null;if(w!==0){if(y=f.value,M!==!0||y===null){const x=S+w*4,D=v.matrixWorldInverse;u.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let T=0,L=S;T!==w;++T,L+=4)c.copy(g[T]).applyMatrix4(D,u),c.normal.toArray(y,L),y[L+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function EE(i){let e=new WeakMap;function t(c,u){return u===ef?c.mapping=ua:u===tf&&(c.mapping=da),c}function s(c){if(c&&c.isTexture){const u=c.mapping;if(u===ef||u===tf)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new IS(f.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class k0 extends O0{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,u=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=4,ug=[.125,.215,.35,.446,.526,.582],ds=20,Ud=new k0,dg=new Ct;let Od=null,Fd=0,zd=0,kd=!1;const cs=(1+Math.sqrt(5))/2,na=1/cs,fg=[new J(-cs,na,0),new J(cs,na,0),new J(-na,0,cs),new J(na,0,cs),new J(0,cs,-na),new J(0,cs,na),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class hg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,Fd,zd),this._renderer.xr.enabled=kd,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:yc,format:bi,colorSpace:Br,depthBuffer:!1},a=pg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wE(l)),this._blurMaterial=TE(l,e,t)}return a}_compileMaterial(e){const t=new Ci(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,s,a){const u=new Ti(90,1,t,s),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(dg),m.toneMapping=Or,m.autoClear=!1;const S=new N0({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),M=new Ci(new Mo,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(dg),w=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):D===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const T=this._cubeSize;ql(a,D*T,x>2?T:0,T,T),m.setRenderTarget(a),w&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ua||e.mapping===da;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Ci(this._lodPlanes[0],l),u=l.uniforms;u.envMap.value=e;const f=this._cubeSize;ql(t,0,0,3*f,2*f),s.setRenderTarget(t),s.render(c,Ud)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),u=fg[(a-l-1)%fg.length];this._blur(e,l-1,l,c,u)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ci(this._lodPlanes[a],h),v=h.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ds-1),w=l/M,y=isFinite(l)?1+Math.floor(m*w):ds;y>ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ds}`);const x=[];let D=0;for(let U=0;U<ds;++U){const I=U/w,A=Math.exp(-I*I/2);x.push(A),U===0?D+=A:U<y&&(D+=2*A)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:T}=this;v.dTheta.value=M,v.mipInt.value=T-s;const L=this._sizeLods[a],z=3*L*(a>T-ra?a-T+ra:0),N=4*(this._cubeSize-L);ql(t,z,N,3*L,2*L),f.setRenderTarget(t),f.render(g,Ud)}}function wE(i){const e=[],t=[],s=[];let a=i;const l=i-ra+1+ug.length;for(let c=0;c<l;c++){const u=Math.pow(2,a);t.push(u);let f=1/u;c>i-ra?f=ug[c-i+ra-1]:c===0&&(f=0),s.push(f);const h=1/(u-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,w=3,y=2,x=1,D=new Float32Array(w*M*S),T=new Float32Array(y*M*S),L=new Float32Array(x*M*S);for(let N=0;N<S;N++){const U=N%3*2/3-1,I=N>2?0:-1,A=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];D.set(A,w*M*N),T.set(v,y*M*N);const b=[N,N,N,N,N,N];L.set(b,x*M*N)}const z=new kn;z.setAttribute("position",new pi(D,w)),z.setAttribute("uv",new pi(T,y)),z.setAttribute("faceIndex",new pi(L,x)),e.push(z),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function pg(i,e,t){const s=new ps(i,e,t);return s.texture.mapping=_c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ql(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function TE(i,e,t){const s=new Float32Array(ds),a=new J(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function mg(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sf(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function gg(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sf(),fragmentShader:`

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
	`}function AE(i){let e=new WeakMap,t=null;function s(u){if(u&&u.isTexture){const f=u.mapping,h=f===ef||f===tf,m=f===ua||f===da;if(h||m){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new hg(i)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const S=u.image;return h&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new hg(i)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",l),g.texture):null}}}return u}function a(u){let f=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&f++;return f===h}function l(u){const f=u.target;f.removeEventListener("dispose",l);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function bE(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&vf("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function CE(i,e,t,s){const a={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const w=v.morphAttributes[M];for(let y=0,x=w.length;y<x;y++)e.remove(w[y])}v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function f(g){const v=g.attributes;for(const M in v)e.update(v[M],i.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const w=S[M];for(let y=0,x=w.length;y<x;y++)e.update(w[y],i.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,M=g.attributes.position;let w=0;if(S!==null){const D=S.array;w=S.version;for(let T=0,L=D.length;T<L;T+=3){const z=D[T+0],N=D[T+1],U=D[T+2];v.push(z,N,N,U,U,z)}}else if(M!==void 0){const D=M.array;w=M.version;for(let T=0,L=D.length/3-1;T<L;T+=3){const z=T+0,N=T+1,U=T+2;v.push(z,N,N,U,U,z)}}else return;const y=new(C0(v)?I0:D0)(v,1);y.version=w;const x=l.get(g);x&&e.remove(x),l.set(g,y)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function RE(i,e,t){let s;function a(v){s=v}let l,c;function u(v){l=v.type,c=v.bytesPerElement}function f(v,S){i.drawElements(s,S,l,v*c),t.update(S,s,1)}function h(v,S,M){M!==0&&(i.drawElementsInstanced(s,S,l,v*c,M),t.update(S,s,M))}function m(v,S,M){if(M===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let y=0;y<M;y++)this.render(v[y]/c,S[y]);else{w.multiDrawElementsWEBGL(s,S,0,l,v,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,s,1)}}function g(v,S,M,w){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/c,S[x],w[x]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,w,0,M);let x=0;for(let D=0;D<M;D++)x+=S[D];for(let D=0;D<w.length;D++)t.update(x,s,w[D])}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function PE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(l/3);break;case i.LINES:t.lines+=u*(l/2);break;case i.LINE_STRIP:t.lines+=u*(l-1);break;case i.LINE_LOOP:t.lines+=u*l;break;case i.POINTS:t.points+=u*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function LE(i,e,t){const s=new WeakMap,a=new _n;function l(c,u,f){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let A=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",A)};v!==void 0&&v.texture.dispose();const S=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let T=0;S===!0&&(T=1),M===!0&&(T=2),w===!0&&(T=3);let L=u.attributes.position.count*T,z=1;L>e.maxTextureSize&&(z=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*z*4*g),U=new P0(N,L,z,g);U.type=rr,U.needsUpdate=!0;const I=T*4;for(let b=0;b<g;b++){const B=y[b],Q=x[b],q=D[b],ie=L*z*4*b;for(let fe=0;fe<B.count;fe++){const Y=fe*I;S===!0&&(a.fromBufferAttribute(B,fe),N[ie+Y+0]=a.x,N[ie+Y+1]=a.y,N[ie+Y+2]=a.z,N[ie+Y+3]=0),M===!0&&(a.fromBufferAttribute(Q,fe),N[ie+Y+4]=a.x,N[ie+Y+5]=a.y,N[ie+Y+6]=a.z,N[ie+Y+7]=0),w===!0&&(a.fromBufferAttribute(q,fe),N[ie+Y+8]=a.x,N[ie+Y+9]=a.y,N[ie+Y+10]=a.z,N[ie+Y+11]=q.itemSize===4?a.w:1)}}v={count:g,texture:U,size:new $e(L,z)},s.set(u,v),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let w=0;w<h.length;w++)S+=h[w];const M=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",h)}f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function NE(i,e,t,s){let a=new WeakMap;function l(f){const h=s.render.frame,m=f.geometry,g=e.get(f,m);if(a.get(g)!==h&&(e.update(g),a.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),a.get(f)!==h&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,h))),f.isSkinnedMesh){const v=f.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return g}function c(){a=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}class B0 extends Pn{constructor(e,t,s,a,l,c,u,f,h,m=oa){if(m!==oa&&m!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===oa&&(s=fa),s===void 0&&m===pa&&(s=ha),super(null,a,l,c,u,f,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Yn,this.minFilter=f!==void 0?f:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const H0=new Pn,V0=new B0(1,1);V0.compareFunction=b0;const G0=new P0,W0=new xS,j0=new F0,vg=[],xg=[],_g=new Float32Array(16),yg=new Float32Array(9),Sg=new Float32Array(4);function xa(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=vg[a];if(l===void 0&&(l=new Float32Array(a),vg[a]=l),e!==0){s.toArray(l,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(l,u)}return l}function dn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Ec(i,e){let t=xg[e];t===void 0&&(t=new Int32Array(e),xg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function DE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function IE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function UE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function OE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function FE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,s))return;Sg.set(s),i.uniformMatrix2fv(this.addr,!1,Sg),fn(t,s)}}function zE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,s))return;yg.set(s),i.uniformMatrix3fv(this.addr,!1,yg),fn(t,s)}}function kE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(dn(t,s))return;_g.set(s),i.uniformMatrix4fv(this.addr,!1,_g),fn(t,s)}}function BE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function HE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function VE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function GE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function WE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function XE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function qE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function YE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);const l=this.type===i.SAMPLER_2D_SHADOW?V0:H0;t.setTexture2D(e||l,a)}function $E(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||W0,a)}function KE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||j0,a)}function JE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||G0,a)}function ZE(i){switch(i){case 5126:return DE;case 35664:return IE;case 35665:return UE;case 35666:return OE;case 35674:return FE;case 35675:return zE;case 35676:return kE;case 5124:case 35670:return BE;case 35667:case 35671:return HE;case 35668:case 35672:return VE;case 35669:case 35673:return GE;case 5125:return WE;case 36294:return jE;case 36295:return XE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return $E;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return JE}}function QE(i,e){i.uniform1fv(this.addr,e)}function ew(i,e){const t=xa(e,this.size,2);i.uniform2fv(this.addr,t)}function tw(i,e){const t=xa(e,this.size,3);i.uniform3fv(this.addr,t)}function nw(i,e){const t=xa(e,this.size,4);i.uniform4fv(this.addr,t)}function iw(i,e){const t=xa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rw(i,e){const t=xa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sw(i,e){const t=xa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function aw(i,e){i.uniform1iv(this.addr,e)}function ow(i,e){i.uniform2iv(this.addr,e)}function lw(i,e){i.uniform3iv(this.addr,e)}function cw(i,e){i.uniform4iv(this.addr,e)}function uw(i,e){i.uniform1uiv(this.addr,e)}function dw(i,e){i.uniform2uiv(this.addr,e)}function fw(i,e){i.uniform3uiv(this.addr,e)}function hw(i,e){i.uniform4uiv(this.addr,e)}function pw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);dn(s,l)||(i.uniform1iv(this.addr,l),fn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||H0,l[c])}function mw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);dn(s,l)||(i.uniform1iv(this.addr,l),fn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||W0,l[c])}function gw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);dn(s,l)||(i.uniform1iv(this.addr,l),fn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||j0,l[c])}function vw(i,e,t){const s=this.cache,a=e.length,l=Ec(t,a);dn(s,l)||(i.uniform1iv(this.addr,l),fn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||G0,l[c])}function xw(i){switch(i){case 5126:return QE;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return aw;case 35667:case 35671:return ow;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return dw;case 36295:return fw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return vw}}class _w{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=ZE(t.type)}}class yw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xw(t.type)}}class Sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const u=a[l];u.setValue(e,t[u.id],s)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Mg(i,e){i.seq.push(e),i.map[e.id]=e}function Mw(i,e,t){const s=i.name,a=s.length;for(Bd.lastIndex=0;;){const l=Bd.exec(s),c=Bd.lastIndex;let u=l[1];const f=l[2]==="]",h=l[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===a){Mg(t,h===void 0?new _w(u,i,e):new yw(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new Sw(u),Mg(t,g)),t=g}}}class rc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);Mw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const u=t[l],f=s[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Eg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const Ew=37297;let ww=0;function Tw(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const u=c+1;s.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return s.join(`
`)}function Aw(i){const e=Ft.getPrimaries(Ft.workingColorSpace),t=Ft.getPrimaries(i);let s;switch(e===t?s="":e===dc&&t===uc?s="LinearDisplayP3ToLinearSRGB":e===uc&&t===dc&&(s="LinearSRGBToLinearDisplayP3"),i){case Br:case Sc:return[s,"LinearTransferOETF"];case wi:case mf:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}function wg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+Tw(i.getShaderSource(e),c)}else return a}function bw(i,e){const t=Aw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cw(i,e){let t;switch(e){case My:t="Linear";break;case Ey:t="Reinhard";break;case wy:t="OptimizedCineon";break;case Ty:t="ACESFilmic";break;case by:t="AgX";break;case Cy:t="Neutral";break;case Ay:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Pw(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Lw(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let u=1;l.type===i.FLOAT_MAT2&&(u=2),l.type===i.FLOAT_MAT3&&(u=3),l.type===i.FLOAT_MAT4&&(u=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function oo(i){return i!==""}function Tg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ag(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(i){return i.replace(Nw,Iw)}const Dw=new Map;function Iw(i,e){let t=St[e];if(t===void 0){const s=Dw.get(e);if(s!==void 0)t=St[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return sf(t)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bg(i){return i.replace(Uw,Ow)}function Ow(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Cg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Fw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===x0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function zw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ua:case da:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function Bw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case yy:e="ENVMAP_BLENDING_MIX";break;case Sy:e="ENVMAP_BLENDING_ADD";break}return e}function Hw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function Vw(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=Fw(t),h=zw(t),m=kw(t),g=Bw(t),v=Hw(t),S=Rw(t),M=Pw(l),w=a.createProgram();let y,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),x.length>0&&(x+=`
`)):(y=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),x=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?St.tonemapping_pars_fragment:"",t.toneMapping!==Or?Cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,bw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),c=sf(c),c=Tg(c,t),c=Ag(c,t),u=sf(u),u=Tg(u,t),u=Ag(u,t),c=bg(c),u=bg(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=D+y+c,L=D+x+u,z=Eg(a,a.VERTEX_SHADER,T),N=Eg(a,a.FRAGMENT_SHADER,L);a.attachShader(w,z),a.attachShader(w,N),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function U(B){if(i.debug.checkShaderErrors){const Q=a.getProgramInfoLog(w).trim(),q=a.getShaderInfoLog(z).trim(),ie=a.getShaderInfoLog(N).trim();let fe=!0,Y=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(fe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,w,z,N);else{const me=wg(a,z,"vertex"),W=wg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+Q+`
`+me+`
`+W)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(q===""||ie==="")&&(Y=!1);Y&&(B.diagnostics={runnable:fe,programLog:Q,vertexShader:{log:q,prefix:y},fragmentShader:{log:ie,prefix:x}})}a.deleteShader(z),a.deleteShader(N),I=new rc(a,w),A=Lw(a,w)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(w,Ew)),b},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ww++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=N,this}let Gw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new jw(e),t.set(e,s)),s}}class jw{constructor(e){this.id=Gw++,this.code=e,this.usedTimes=0}}function Xw(i,e,t,s,a,l,c){const u=new _f,f=new Ww,h=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,b,B,Q,q){const ie=Q.fog,fe=q.geometry,Y=A.isMeshStandardMaterial?Q.environment:null,me=(A.isMeshStandardMaterial?t:e).get(A.envMap||Y),W=me&&me.mapping===_c?me.image.height:null,ee=M[A.type];A.precision!==null&&(S=a.getMaxPrecision(A.precision),S!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const ne=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,O=ne!==void 0?ne.length:0;let $=0;fe.morphAttributes.position!==void 0&&($=1),fe.morphAttributes.normal!==void 0&&($=2),fe.morphAttributes.color!==void 0&&($=3);let Pe,Z,re,ce;if(ee){const mt=Oi[ee];Pe=mt.vertexShader,Z=mt.fragmentShader}else Pe=A.vertexShader,Z=A.fragmentShader,f.update(A),re=f.getVertexShaderID(A),ce=f.getFragmentShaderID(A);const _e=i.getRenderTarget(),Ne=q.isInstancedMesh===!0,ke=q.isBatchedMesh===!0,Be=!!A.map,V=!!A.matcap,pe=!!me,Se=!!A.aoMap,we=!!A.lightMap,Ee=!!A.bumpMap,Te=!!A.normalMap,Le=!!A.displacementMap,be=!!A.emissiveMap,Xe=!!A.metalnessMap,F=!!A.roughnessMap,P=A.anisotropy>0,se=A.clearcoat>0,ye=A.dispersion>0,ge=A.iridescence>0,Me=A.sheen>0,je=A.transmission>0,Ce=P&&!!A.anisotropyMap,Ue=se&&!!A.clearcoatMap,nt=se&&!!A.clearcoatNormalMap,Ae=se&&!!A.clearcoatRoughnessMap,We=ge&&!!A.iridescenceMap,C=ge&&!!A.iridescenceThicknessMap,Je=Me&&!!A.sheenColorMap,Fe=Me&&!!A.sheenRoughnessMap,ut=!!A.specularMap,ot=!!A.specularColorMap,dt=!!A.specularIntensityMap,G=je&&!!A.transmissionMap,Ge=je&&!!A.thicknessMap,ve=!!A.gradientMap,xe=!!A.alphaMap,De=A.alphaTest>0,Ye=!!A.alphaHash,gt=!!A.extensions;let Et=Or;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Et=i.toneMapping);const bt={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:Pe,fragmentShader:Z,defines:A.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:ke,batchingColor:ke&&q._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&q.instanceColor!==null,instancingMorph:Ne&&q.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Br,alphaToCoverage:!!A.alphaToCoverage,map:Be,matcap:V,envMap:pe,envMapMode:pe&&me.mapping,envMapCubeUVHeight:W,aoMap:Se,lightMap:we,bumpMap:Ee,normalMap:Te,displacementMap:v&&Le,emissiveMap:be,normalMapObjectSpace:Te&&A.normalMapType===Hy,normalMapTangentSpace:Te&&A.normalMapType===pf,metalnessMap:Xe,roughnessMap:F,anisotropy:P,anisotropyMap:Ce,clearcoat:se,clearcoatMap:Ue,clearcoatNormalMap:nt,clearcoatRoughnessMap:Ae,dispersion:ye,iridescence:ge,iridescenceMap:We,iridescenceThicknessMap:C,sheen:Me,sheenColorMap:Je,sheenRoughnessMap:Fe,specularMap:ut,specularColorMap:ot,specularIntensityMap:dt,transmission:je,transmissionMap:G,thicknessMap:Ge,gradientMap:ve,opaque:A.transparent===!1&&A.blending===aa&&A.alphaToCoverage===!1,alphaMap:xe,alphaTest:De,alphaHash:Ye,combine:A.combine,mapUv:Be&&w(A.map.channel),aoMapUv:Se&&w(A.aoMap.channel),lightMapUv:we&&w(A.lightMap.channel),bumpMapUv:Ee&&w(A.bumpMap.channel),normalMapUv:Te&&w(A.normalMap.channel),displacementMapUv:Le&&w(A.displacementMap.channel),emissiveMapUv:be&&w(A.emissiveMap.channel),metalnessMapUv:Xe&&w(A.metalnessMap.channel),roughnessMapUv:F&&w(A.roughnessMap.channel),anisotropyMapUv:Ce&&w(A.anisotropyMap.channel),clearcoatMapUv:Ue&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:nt&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:C&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&w(A.sheenRoughnessMap.channel),specularMapUv:ut&&w(A.specularMap.channel),specularColorMapUv:ot&&w(A.specularColorMap.channel),specularIntensityMapUv:dt&&w(A.specularIntensityMap.channel),transmissionMapUv:G&&w(A.transmissionMap.channel),thicknessMapUv:Ge&&w(A.thicknessMap.channel),alphaMapUv:xe&&w(A.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Te||P),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!fe.attributes.uv&&(Be||xe),fog:!!ie,useFog:A.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:q.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Be&&A.map.isVideoTexture===!0&&Ft.getTransfer(A.map.colorSpace)===jt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===tr,flipSided:A.side===$n,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:gt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:gt&&A.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return bt.vertexUv1s=h.has(1),bt.vertexUv2s=h.has(2),bt.vertexUv3s=h.has(3),h.clear(),bt}function x(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const B in A.defines)b.push(B),b.push(A.defines[B]);return A.isRawShaderMaterial===!1&&(D(b,A),T(b,A),b.push(i.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function D(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function T(A,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),A.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.skinning&&u.enable(4),b.morphTargets&&u.enable(5),b.morphNormals&&u.enable(6),b.morphColors&&u.enable(7),b.premultipliedAlpha&&u.enable(8),b.shadowMapEnabled&&u.enable(9),b.doubleSided&&u.enable(10),b.flipSided&&u.enable(11),b.useDepthPacking&&u.enable(12),b.dithering&&u.enable(13),b.transmission&&u.enable(14),b.sheen&&u.enable(15),b.opaque&&u.enable(16),b.pointsUvs&&u.enable(17),b.decodeVideoTexture&&u.enable(18),b.alphaToCoverage&&u.enable(19),A.push(u.mask)}function L(A){const b=M[A.type];let B;if(b){const Q=Oi[b];B=PS.clone(Q.uniforms)}else B=A.uniforms;return B}function z(A,b){let B;for(let Q=0,q=m.length;Q<q;Q++){const ie=m[Q];if(ie.cacheKey===b){B=ie,++B.usedTimes;break}}return B===void 0&&(B=new Vw(i,b,A,l),m.push(B)),B}function N(A){if(--A.usedTimes===0){const b=m.indexOf(A);m[b]=m[m.length-1],m.pop(),A.destroy()}}function U(A){f.remove(A)}function I(){f.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:z,releaseProgram:N,releaseShaderCache:U,programs:m,dispose:I}}function qw(){let i=new WeakMap;function e(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function t(l){i.delete(l)}function s(l,c,u){i.get(l)[c]=u}function a(){i=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function Yw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(g,v,S,M,w,y){let x=i[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:w,group:y},i[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=w,x.group=y),e++,x}function u(g,v,S,M,w,y){const x=c(g,v,S,M,w,y);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function f(g,v,S,M,w,y){const x=c(g,v,S,M,w,y);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function h(g,v){t.length>1&&t.sort(g||Yw),s.length>1&&s.sort(v||Rg),a.length>1&&a.sort(v||Rg)}function m(){for(let g=e,v=i.length;g<v;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:u,unshift:f,finish:m,sort:h}}function $w(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new Pg,i.set(s,[c])):a>=l.length?(c=new Pg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Ct};break;case"SpotLight":t={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function Jw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zw=0;function Qw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eT(i){const e=new Kw,t=Jw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new J);const a=new J,l=new Bt,c=new Bt;function u(h){let m=0,g=0,v=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let S=0,M=0,w=0,y=0,x=0,D=0,T=0,L=0,z=0,N=0,U=0;h.sort(Qw);for(let A=0,b=h.length;A<b;A++){const B=h[A],Q=B.color,q=B.intensity,ie=B.distance,fe=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)m+=Q.r*q,g+=Q.g*q,v+=Q.b*q;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(B.sh.coefficients[Y],q);U++}else if(B.isDirectionalLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const me=B.shadow,W=t.get(B);W.shadowBias=me.bias,W.shadowNormalBias=me.normalBias,W.shadowRadius=me.radius,W.shadowMapSize=me.mapSize,s.directionalShadow[S]=W,s.directionalShadowMap[S]=fe,s.directionalShadowMatrix[S]=B.shadow.matrix,D++}s.directional[S]=Y,S++}else if(B.isSpotLight){const Y=e.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(Q).multiplyScalar(q),Y.distance=ie,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,s.spot[w]=Y;const me=B.shadow;if(B.map&&(s.spotLightMap[z]=B.map,z++,me.updateMatrices(B),B.castShadow&&N++),s.spotLightMatrix[w]=me.matrix,B.castShadow){const W=t.get(B);W.shadowBias=me.bias,W.shadowNormalBias=me.normalBias,W.shadowRadius=me.radius,W.shadowMapSize=me.mapSize,s.spotShadow[w]=W,s.spotShadowMap[w]=fe,L++}w++}else if(B.isRectAreaLight){const Y=e.get(B);Y.color.copy(Q).multiplyScalar(q),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=Y,y++}else if(B.isPointLight){const Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){const me=B.shadow,W=t.get(B);W.shadowBias=me.bias,W.shadowNormalBias=me.normalBias,W.shadowRadius=me.radius,W.shadowMapSize=me.mapSize,W.shadowCameraNear=me.camera.near,W.shadowCameraFar=me.camera.far,s.pointShadow[M]=W,s.pointShadowMap[M]=fe,s.pointShadowMatrix[M]=B.shadow.matrix,T++}s.point[M]=Y,M++}else if(B.isHemisphereLight){const Y=e.get(B);Y.skyColor.copy(B.color).multiplyScalar(q),Y.groundColor.copy(B.groundColor).multiplyScalar(q),s.hemi[x]=Y,x++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ke.LTC_FLOAT_1,s.rectAreaLTC2=Ke.LTC_FLOAT_2):(s.rectAreaLTC1=Ke.LTC_HALF_1,s.rectAreaLTC2=Ke.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=v;const I=s.hash;(I.directionalLength!==S||I.pointLength!==M||I.spotLength!==w||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==D||I.numPointShadows!==T||I.numSpotShadows!==L||I.numSpotMaps!==z||I.numLightProbes!==U)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=y,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=L+z-N,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=U,I.directionalLength=S,I.pointLength=M,I.spotLength=w,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=D,I.numPointShadows=T,I.numSpotShadows=L,I.numSpotMaps=z,I.numLightProbes=U,s.version=Zw++)}function f(h,m){let g=0,v=0,S=0,M=0,w=0;const y=m.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const T=h[x];if(T.isDirectionalLight){const L=s.directional[g];L.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),g++}else if(T.isSpotLight){const L=s.spot[S];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),S++}else if(T.isRectAreaLight){const L=s.rectArea[M];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),c.identity(),l.copy(T.matrixWorld),l.premultiply(y),c.extractRotation(l),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),M++}else if(T.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),v++}else if(T.isHemisphereLight){const L=s.hemi[w];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(y),w++}}}return{setup:u,setupView:f,state:s}}function Lg(i){const e=new eT(i),t=[],s=[];function a(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:u,setupLightsView:f,pushLight:l,pushShadow:c}}function tT(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let u;return c===void 0?(u=new Lg(i),e.set(a,[u])):l>=c.length?(u=new Lg(i),c.push(u)):u=c[l],u}function s(){e=new WeakMap}return{get:t,dispose:s}}class nT extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iT extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
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
}`;function aT(i,e,t){let s=new yf;const a=new $e,l=new $e,c=new _n,u=new nT({depthPacking:By}),f=new iT,h={},m=t.maxTextureSize,g={[Fr]:$n,[$n]:Fr,[tr]:tr},v=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ci(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x0;let x=this.type;this.render=function(N,U,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const A=i.getRenderTarget(),b=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Ur),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const q=x!==er&&this.type===er,ie=x===er&&this.type!==er;for(let fe=0,Y=N.length;fe<Y;fe++){const me=N[fe],W=me.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ee=W.getFrameExtents();if(a.multiply(ee),l.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ee.x),a.x=l.x*ee.x,W.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ee.y),a.y=l.y*ee.y,W.mapSize.y=l.y)),W.map===null||q===!0||ie===!0){const O=this.type!==er?{minFilter:Yn,magFilter:Yn}:{};W.map!==null&&W.map.dispose(),W.map=new ps(a.x,a.y,O),W.map.texture.name=me.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ne=W.getViewportCount();for(let O=0;O<ne;O++){const $=W.getViewport(O);c.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),Q.viewport(c),W.updateMatrices(me,O),s=W.getFrustum(),L(U,I,W.camera,me,this.type)}W.isPointLightShadow!==!0&&this.type===er&&D(W,I),W.needsUpdate=!1}x=this.type,y.needsUpdate=!1,i.setRenderTarget(A,b,B)};function D(N,U){const I=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ps(a.x,a.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,i.setRenderTarget(N.mapPass),i.clear(),i.renderBufferDirect(U,null,I,v,w,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,i.setRenderTarget(N.map),i.clear(),i.renderBufferDirect(U,null,I,S,w,null)}function T(N,U,I,A){let b=null;const B=I.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)b=B;else if(b=I.isPointLight===!0?f:u,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const Q=b.uuid,q=U.uuid;let ie=h[Q];ie===void 0&&(ie={},h[Q]=ie);let fe=ie[q];fe===void 0&&(fe=b.clone(),ie[q]=fe,U.addEventListener("dispose",z)),b=fe}if(b.visible=U.visible,b.wireframe=U.wireframe,A===er?b.side=U.shadowSide!==null?U.shadowSide:U.side:b.side=U.shadowSide!==null?U.shadowSide:g[U.side],b.alphaMap=U.alphaMap,b.alphaTest=U.alphaTest,b.map=U.map,b.clipShadows=U.clipShadows,b.clippingPlanes=U.clippingPlanes,b.clipIntersection=U.clipIntersection,b.displacementMap=U.displacementMap,b.displacementScale=U.displacementScale,b.displacementBias=U.displacementBias,b.wireframeLinewidth=U.wireframeLinewidth,b.linewidth=U.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Q=i.properties.get(b);Q.light=I}return b}function L(N,U,I,A,b){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===er)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,N.matrixWorld);const q=e.update(N),ie=N.material;if(Array.isArray(ie)){const fe=q.groups;for(let Y=0,me=fe.length;Y<me;Y++){const W=fe[Y],ee=ie[W.materialIndex];if(ee&&ee.visible){const ne=T(N,ee,A,b);N.onBeforeShadow(i,N,U,I,q,ne,W),i.renderBufferDirect(I,null,q,ne,N,W),N.onAfterShadow(i,N,U,I,q,ne,W)}}}else if(ie.visible){const fe=T(N,ie,A,b);N.onBeforeShadow(i,N,U,I,q,fe,null),i.renderBufferDirect(I,null,q,fe,N,null),N.onAfterShadow(i,N,U,I,q,fe,null)}}const Q=N.children;for(let q=0,ie=Q.length;q<ie;q++)L(Q[q],U,I,A,b)}function z(N){N.target.removeEventListener("dispose",z);for(const I in h){const A=h[I],b=N.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function oT(i){function e(){let G=!1;const Ge=new _n;let ve=null;const xe=new _n(0,0,0,0);return{setMask:function(De){ve!==De&&!G&&(i.colorMask(De,De,De,De),ve=De)},setLocked:function(De){G=De},setClear:function(De,Ye,gt,Et,bt){bt===!0&&(De*=Et,Ye*=Et,gt*=Et),Ge.set(De,Ye,gt,Et),xe.equals(Ge)===!1&&(i.clearColor(De,Ye,gt,Et),xe.copy(Ge))},reset:function(){G=!1,ve=null,xe.set(-1,0,0,0)}}}function t(){let G=!1,Ge=null,ve=null,xe=null;return{setTest:function(De){De?ce(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(De){Ge!==De&&!G&&(i.depthMask(De),Ge=De)},setFunc:function(De){if(ve!==De){switch(De){case hy:i.depthFunc(i.NEVER);break;case py:i.depthFunc(i.ALWAYS);break;case my:i.depthFunc(i.LESS);break;case ac:i.depthFunc(i.LEQUAL);break;case gy:i.depthFunc(i.EQUAL);break;case vy:i.depthFunc(i.GEQUAL);break;case xy:i.depthFunc(i.GREATER);break;case _y:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=De}},setLocked:function(De){G=De},setClear:function(De){xe!==De&&(i.clearDepth(De),xe=De)},reset:function(){G=!1,Ge=null,ve=null,xe=null}}}function s(){let G=!1,Ge=null,ve=null,xe=null,De=null,Ye=null,gt=null,Et=null,bt=null;return{setTest:function(mt){G||(mt?ce(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(mt){Ge!==mt&&!G&&(i.stencilMask(mt),Ge=mt)},setFunc:function(mt,Tt,zt){(ve!==mt||xe!==Tt||De!==zt)&&(i.stencilFunc(mt,Tt,zt),ve=mt,xe=Tt,De=zt)},setOp:function(mt,Tt,zt){(Ye!==mt||gt!==Tt||Et!==zt)&&(i.stencilOp(mt,Tt,zt),Ye=mt,gt=Tt,Et=zt)},setLocked:function(mt){G=mt},setClear:function(mt){bt!==mt&&(i.clearStencil(mt),bt=mt)},reset:function(){G=!1,Ge=null,ve=null,xe=null,De=null,Ye=null,gt=null,Et=null,bt=null}}}const a=new e,l=new t,c=new s,u=new WeakMap,f=new WeakMap;let h={},m={},g=new WeakMap,v=[],S=null,M=!1,w=null,y=null,x=null,D=null,T=null,L=null,z=null,N=new Ct(0,0,0),U=0,I=!1,A=null,b=null,B=null,Q=null,q=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let fe=!1,Y=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(me)[1]),fe=Y>=1):me.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),fe=Y>=2);let W=null,ee={};const ne=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),$=new _n().fromArray(ne),Pe=new _n().fromArray(O);function Z(G,Ge,ve,xe){const De=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(G,Ye),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<ve;gt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Ge,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Ge+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Ye}const re={};re[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(i.DEPTH_TEST),l.setFunc(ac),Ee(!1),Te(fm),ce(i.CULL_FACE),Se(Ur);function ce(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function _e(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function Ne(G,Ge){return m[G]!==Ge?(i.bindFramebuffer(G,Ge),m[G]=Ge,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ge),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ge),!0):!1}function ke(G,Ge){let ve=v,xe=!1;if(G){ve=g.get(Ge),ve===void 0&&(ve=[],g.set(Ge,ve));const De=G.textures;if(ve.length!==De.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,gt=De.length;Ye<gt;Ye++)ve[Ye]=i.COLOR_ATTACHMENT0+Ye;ve.length=De.length,xe=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ve)}function Be(G){return S!==G?(i.useProgram(G),S=G,!0):!1}const V={[us]:i.FUNC_ADD,[K_]:i.FUNC_SUBTRACT,[J_]:i.FUNC_REVERSE_SUBTRACT};V[Z_]=i.MIN,V[Q_]=i.MAX;const pe={[ey]:i.ZERO,[ty]:i.ONE,[ny]:i.SRC_COLOR,[Zd]:i.SRC_ALPHA,[ly]:i.SRC_ALPHA_SATURATE,[ay]:i.DST_COLOR,[ry]:i.DST_ALPHA,[iy]:i.ONE_MINUS_SRC_COLOR,[Qd]:i.ONE_MINUS_SRC_ALPHA,[oy]:i.ONE_MINUS_DST_COLOR,[sy]:i.ONE_MINUS_DST_ALPHA,[cy]:i.CONSTANT_COLOR,[uy]:i.ONE_MINUS_CONSTANT_COLOR,[dy]:i.CONSTANT_ALPHA,[fy]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(G,Ge,ve,xe,De,Ye,gt,Et,bt,mt){if(G===Ur){M===!0&&(_e(i.BLEND),M=!1);return}if(M===!1&&(ce(i.BLEND),M=!0),G!==$_){if(G!==w||mt!==I){if((y!==us||T!==us)&&(i.blendEquation(i.FUNC_ADD),y=us,T=us),mt)switch(G){case aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hm:i.blendFunc(i.ONE,i.ONE);break;case pm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,D=null,L=null,z=null,N.set(0,0,0),U=0,w=G,I=mt}return}De=De||Ge,Ye=Ye||ve,gt=gt||xe,(Ge!==y||De!==T)&&(i.blendEquationSeparate(V[Ge],V[De]),y=Ge,T=De),(ve!==x||xe!==D||Ye!==L||gt!==z)&&(i.blendFuncSeparate(pe[ve],pe[xe],pe[Ye],pe[gt]),x=ve,D=xe,L=Ye,z=gt),(Et.equals(N)===!1||bt!==U)&&(i.blendColor(Et.r,Et.g,Et.b,bt),N.copy(Et),U=bt),w=G,I=!1}function we(G,Ge){G.side===tr?_e(i.CULL_FACE):ce(i.CULL_FACE);let ve=G.side===$n;Ge&&(ve=!ve),Ee(ve),G.blending===aa&&G.transparent===!1?Se(Ur):Se(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),l.setFunc(G.depthFunc),l.setTest(G.depthTest),l.setMask(G.depthWrite),a.setMask(G.colorWrite);const xe=G.stencilWrite;c.setTest(xe),xe&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),be(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(G){A!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),A=G)}function Te(G){G!==X_?(ce(i.CULL_FACE),G!==b&&(G===fm?i.cullFace(i.BACK):G===q_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),b=G}function Le(G){G!==B&&(fe&&i.lineWidth(G),B=G)}function be(G,Ge,ve){G?(ce(i.POLYGON_OFFSET_FILL),(Q!==Ge||q!==ve)&&(i.polygonOffset(Ge,ve),Q=Ge,q=ve)):_e(i.POLYGON_OFFSET_FILL)}function Xe(G){G?ce(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function F(G){G===void 0&&(G=i.TEXTURE0+ie-1),W!==G&&(i.activeTexture(G),W=G)}function P(G,Ge,ve){ve===void 0&&(W===null?ve=i.TEXTURE0+ie-1:ve=W);let xe=ee[ve];xe===void 0&&(xe={type:void 0,texture:void 0},ee[ve]=xe),(xe.type!==G||xe.texture!==Ge)&&(W!==ve&&(i.activeTexture(ve),W=ve),i.bindTexture(G,Ge||re[G]),xe.type=G,xe.texture=Ge)}function se(){const G=ee[W];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function je(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function C(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(G){$.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),$.copy(G))}function Fe(G){Pe.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Pe.copy(G))}function ut(G,Ge){let ve=f.get(Ge);ve===void 0&&(ve=new WeakMap,f.set(Ge,ve));let xe=ve.get(G);xe===void 0&&(xe=i.getUniformBlockIndex(Ge,G.name),ve.set(G,xe))}function ot(G,Ge){const xe=f.get(Ge).get(G);u.get(Ge)!==xe&&(i.uniformBlockBinding(Ge,xe,G.__bindingPointIndex),u.set(Ge,xe))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},W=null,ee={},m={},g=new WeakMap,v=[],S=null,M=!1,w=null,y=null,x=null,D=null,T=null,L=null,z=null,N=new Ct(0,0,0),U=0,I=!1,A=null,b=null,B=null,Q=null,q=null,$.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:_e,bindFramebuffer:Ne,drawBuffers:ke,useProgram:Be,setBlending:Se,setMaterial:we,setFlipSided:Ee,setCullFace:Te,setLineWidth:Le,setPolygonOffset:be,setScissorTest:Xe,activeTexture:F,bindTexture:P,unbindTexture:se,compressedTexImage2D:ye,compressedTexImage3D:ge,texImage2D:We,texImage3D:C,updateUBOMapping:ut,uniformBlockBinding:ot,texStorage2D:nt,texStorage3D:Ae,texSubImage2D:Me,texSubImage3D:je,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ue,scissor:Je,viewport:Fe,reset:dt}}function lT(i,e,t,s,a,l,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $e,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,P){return S?new OffscreenCanvas(F,P):vo("canvas")}function w(F,P,se){let ye=1;const ge=Xe(F);if((ge.width>se||ge.height>se)&&(ye=se/Math.max(ge.width,ge.height)),ye<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Me=Math.floor(ye*ge.width),je=Math.floor(ye*ge.height);g===void 0&&(g=M(Me,je));const Ce=P?M(Me,je):g;return Ce.width=Me,Ce.height=je,Ce.getContext("2d").drawImage(F,0,0,Me,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+je+")."),Ce}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),F;return F}function y(F){return F.generateMipmaps&&F.minFilter!==Yn&&F.minFilter!==hi}function x(F){i.generateMipmap(F)}function D(F,P,se,ye,ge=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Me=P;if(P===i.RED&&(se===i.FLOAT&&(Me=i.R32F),se===i.HALF_FLOAT&&(Me=i.R16F),se===i.UNSIGNED_BYTE&&(Me=i.R8)),P===i.RED_INTEGER&&(se===i.UNSIGNED_BYTE&&(Me=i.R8UI),se===i.UNSIGNED_SHORT&&(Me=i.R16UI),se===i.UNSIGNED_INT&&(Me=i.R32UI),se===i.BYTE&&(Me=i.R8I),se===i.SHORT&&(Me=i.R16I),se===i.INT&&(Me=i.R32I)),P===i.RG&&(se===i.FLOAT&&(Me=i.RG32F),se===i.HALF_FLOAT&&(Me=i.RG16F),se===i.UNSIGNED_BYTE&&(Me=i.RG8)),P===i.RG_INTEGER&&(se===i.UNSIGNED_BYTE&&(Me=i.RG8UI),se===i.UNSIGNED_SHORT&&(Me=i.RG16UI),se===i.UNSIGNED_INT&&(Me=i.RG32UI),se===i.BYTE&&(Me=i.RG8I),se===i.SHORT&&(Me=i.RG16I),se===i.INT&&(Me=i.RG32I)),P===i.RGB&&se===i.UNSIGNED_INT_5_9_9_9_REV&&(Me=i.RGB9_E5),P===i.RGBA){const je=ge?cc:Ft.getTransfer(ye);se===i.FLOAT&&(Me=i.RGBA32F),se===i.HALF_FLOAT&&(Me=i.RGBA16F),se===i.UNSIGNED_BYTE&&(Me=je===jt?i.SRGB8_ALPHA8:i.RGBA8),se===i.UNSIGNED_SHORT_4_4_4_4&&(Me=i.RGBA4),se===i.UNSIGNED_SHORT_5_5_5_1&&(Me=i.RGB5_A1)}return(Me===i.R16F||Me===i.R32F||Me===i.RG16F||Me===i.RG32F||Me===i.RGBA16F||Me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function T(F,P){let se;return F?P===null||P===fa||P===ha?se=i.DEPTH24_STENCIL8:P===rr?se=i.DEPTH32F_STENCIL8:P===lc&&(se=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===fa||P===ha?se=i.DEPTH_COMPONENT24:P===rr?se=i.DEPTH_COMPONENT32F:P===lc&&(se=i.DEPTH_COMPONENT16),se}function L(F,P){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==Yn&&F.minFilter!==hi?Math.log2(Math.max(P.width,P.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?P.mipmaps.length:1}function z(F){const P=F.target;P.removeEventListener("dispose",z),U(P),P.isVideoTexture&&m.delete(P)}function N(F){const P=F.target;P.removeEventListener("dispose",N),A(P)}function U(F){const P=s.get(F);if(P.__webglInit===void 0)return;const se=F.source,ye=v.get(se);if(ye){const ge=ye[P.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&I(F),Object.keys(ye).length===0&&v.delete(se)}s.remove(F)}function I(F){const P=s.get(F);i.deleteTexture(P.__webglTexture);const se=F.source,ye=v.get(se);delete ye[P.__cacheKey],c.memory.textures--}function A(F){const P=s.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(P.__webglFramebuffer[ye]))for(let ge=0;ge<P.__webglFramebuffer[ye].length;ge++)i.deleteFramebuffer(P.__webglFramebuffer[ye][ge]);else i.deleteFramebuffer(P.__webglFramebuffer[ye]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[ye])}else{if(Array.isArray(P.__webglFramebuffer))for(let ye=0;ye<P.__webglFramebuffer.length;ye++)i.deleteFramebuffer(P.__webglFramebuffer[ye]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ye=0;ye<P.__webglColorRenderbuffer.length;ye++)P.__webglColorRenderbuffer[ye]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[ye]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const se=F.textures;for(let ye=0,ge=se.length;ye<ge;ye++){const Me=s.get(se[ye]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),c.memory.textures--),s.remove(se[ye])}s.remove(F)}let b=0;function B(){b=0}function Q(){const F=b;return F>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),b+=1,F}function q(F){const P=[];return P.push(F.wrapS),P.push(F.wrapT),P.push(F.wrapR||0),P.push(F.magFilter),P.push(F.minFilter),P.push(F.anisotropy),P.push(F.internalFormat),P.push(F.format),P.push(F.type),P.push(F.generateMipmaps),P.push(F.premultiplyAlpha),P.push(F.flipY),P.push(F.unpackAlignment),P.push(F.colorSpace),P.join()}function ie(F,P){const se=s.get(F);if(F.isVideoTexture&&Le(F),F.isRenderTargetTexture===!1&&F.version>0&&se.__version!==F.version){const ye=F.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(se,F,P);return}}t.bindTexture(i.TEXTURE_2D,se.__webglTexture,i.TEXTURE0+P)}function fe(F,P){const se=s.get(F);if(F.version>0&&se.__version!==F.version){Pe(se,F,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,se.__webglTexture,i.TEXTURE0+P)}function Y(F,P){const se=s.get(F);if(F.version>0&&se.__version!==F.version){Pe(se,F,P);return}t.bindTexture(i.TEXTURE_3D,se.__webglTexture,i.TEXTURE0+P)}function me(F,P){const se=s.get(F);if(F.version>0&&se.__version!==F.version){Z(se,F,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture,i.TEXTURE0+P)}const W={[oc]:i.REPEAT,[Dr]:i.CLAMP_TO_EDGE,[nf]:i.MIRRORED_REPEAT},ee={[Yn]:i.NEAREST,[Ry]:i.NEAREST_MIPMAP_NEAREST,[Al]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[dd]:i.LINEAR_MIPMAP_NEAREST,[Ir]:i.LINEAR_MIPMAP_LINEAR},ne={[Vy]:i.NEVER,[Yy]:i.ALWAYS,[Gy]:i.LESS,[b0]:i.LEQUAL,[Wy]:i.EQUAL,[qy]:i.GEQUAL,[jy]:i.GREATER,[Xy]:i.NOTEQUAL};function O(F,P){if(P.type===rr&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===hi||P.magFilter===dd||P.magFilter===Al||P.magFilter===Ir||P.minFilter===hi||P.minFilter===dd||P.minFilter===Al||P.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,W[P.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,W[P.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,W[P.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ee[P.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ee[P.minFilter]),P.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ne[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Yn||P.minFilter!==Al&&P.minFilter!==Ir||P.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||s.get(P).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,a.getMaxAnisotropy())),s.get(P).__currentAnisotropy=P.anisotropy}}}function $(F,P){let se=!1;F.__webglInit===void 0&&(F.__webglInit=!0,P.addEventListener("dispose",z));const ye=P.source;let ge=v.get(ye);ge===void 0&&(ge={},v.set(ye,ge));const Me=q(P);if(Me!==F.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,se=!0),ge[Me].usedTimes++;const je=ge[F.__cacheKey];je!==void 0&&(ge[F.__cacheKey].usedTimes--,je.usedTimes===0&&I(P)),F.__cacheKey=Me,F.__webglTexture=ge[Me].texture}return se}function Pe(F,P,se){let ye=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ye=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ye=i.TEXTURE_3D);const ge=$(F,P),Me=P.source;t.bindTexture(ye,F.__webglTexture,i.TEXTURE0+se);const je=s.get(Me);if(Me.version!==je.__version||ge===!0){t.activeTexture(i.TEXTURE0+se);const Ce=Ft.getPrimaries(Ft.workingColorSpace),Ue=P.colorSpace===Nr?null:Ft.getPrimaries(P.colorSpace),nt=P.colorSpace===Nr||Ce===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ae=w(P.image,!1,a.maxTextureSize);Ae=be(P,Ae);const We=l.convert(P.format,P.colorSpace),C=l.convert(P.type);let Je=D(P.internalFormat,We,C,P.colorSpace,P.isVideoTexture);O(ye,P);let Fe;const ut=P.mipmaps,ot=P.isVideoTexture!==!0,dt=je.__version===void 0||ge===!0,G=Me.dataReady,Ge=L(P,Ae);if(P.isDepthTexture)Je=T(P.format===pa,P.type),dt&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Je,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,We,C,null));else if(P.isDataTexture)if(ut.length>0){ot&&dt&&t.texStorage2D(i.TEXTURE_2D,Ge,Je,ut[0].width,ut[0].height);for(let ve=0,xe=ut.length;ve<xe;ve++)Fe=ut[ve],ot?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,We,C,Fe.data):t.texImage2D(i.TEXTURE_2D,ve,Je,Fe.width,Fe.height,0,We,C,Fe.data);P.generateMipmaps=!1}else ot?(dt&&t.texStorage2D(i.TEXTURE_2D,Ge,Je,Ae.width,Ae.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,We,C,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,Je,Ae.width,Ae.height,0,We,C,Ae.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ot&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,Je,ut[0].width,ut[0].height,Ae.depth);for(let ve=0,xe=ut.length;ve<xe;ve++)if(Fe=ut[ve],P.format!==bi)if(We!==null)if(ot){if(G)if(P.layerUpdates.size>0){for(const De of P.layerUpdates){const Ye=Fe.width*Fe.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,De,Fe.width,Fe.height,1,We,Fe.data.slice(Ye*De,Ye*(De+1)),0,0)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,Ae.depth,We,Fe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Je,Fe.width,Fe.height,Ae.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,Ae.depth,We,C,Fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Je,Fe.width,Fe.height,Ae.depth,0,We,C,Fe.data)}else{ot&&dt&&t.texStorage2D(i.TEXTURE_2D,Ge,Je,ut[0].width,ut[0].height);for(let ve=0,xe=ut.length;ve<xe;ve++)Fe=ut[ve],P.format!==bi?We!==null?ot?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,We,Fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Je,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,We,C,Fe.data):t.texImage2D(i.TEXTURE_2D,ve,Je,Fe.width,Fe.height,0,We,C,Fe.data)}else if(P.isDataArrayTexture)if(ot){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ge,Je,Ae.width,Ae.height,Ae.depth),G)if(P.layerUpdates.size>0){let ve;switch(C){case i.UNSIGNED_BYTE:switch(We){case i.ALPHA:ve=1;break;case i.LUMINANCE:ve=1;break;case i.LUMINANCE_ALPHA:ve=2;break;case i.RGB:ve=3;break;case i.RGBA:ve=4;break;default:throw new Error(`Unknown texel size for format ${We}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:ve=1;break;default:throw new Error(`Unknown texel size for type ${C}.`)}const xe=Ae.width*Ae.height*ve;for(const De of P.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,Ae.width,Ae.height,1,We,C,Ae.data.slice(xe*De,xe*(De+1)));P.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,C,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,Ae.width,Ae.height,Ae.depth,0,We,C,Ae.data);else if(P.isData3DTexture)ot?(dt&&t.texStorage3D(i.TEXTURE_3D,Ge,Je,Ae.width,Ae.height,Ae.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,We,C,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,Je,Ae.width,Ae.height,Ae.depth,0,We,C,Ae.data);else if(P.isFramebufferTexture){if(dt)if(ot)t.texStorage2D(i.TEXTURE_2D,Ge,Je,Ae.width,Ae.height);else{let ve=Ae.width,xe=Ae.height;for(let De=0;De<Ge;De++)t.texImage2D(i.TEXTURE_2D,De,Je,ve,xe,0,We,C,null),ve>>=1,xe>>=1}}else if(ut.length>0){if(ot&&dt){const ve=Xe(ut[0]);t.texStorage2D(i.TEXTURE_2D,Ge,Je,ve.width,ve.height)}for(let ve=0,xe=ut.length;ve<xe;ve++)Fe=ut[ve],ot?G&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,We,C,Fe):t.texImage2D(i.TEXTURE_2D,ve,Je,We,C,Fe);P.generateMipmaps=!1}else if(ot){if(dt){const ve=Xe(Ae);t.texStorage2D(i.TEXTURE_2D,Ge,Je,ve.width,ve.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,C,Ae)}else t.texImage2D(i.TEXTURE_2D,0,Je,We,C,Ae);y(P)&&x(ye),je.__version=Me.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function Z(F,P,se){if(P.image.length!==6)return;const ye=$(F,P),ge=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+se);const Me=s.get(ge);if(ge.version!==Me.__version||ye===!0){t.activeTexture(i.TEXTURE0+se);const je=Ft.getPrimaries(Ft.workingColorSpace),Ce=P.colorSpace===Nr?null:Ft.getPrimaries(P.colorSpace),Ue=P.colorSpace===Nr||je===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const nt=P.isCompressedTexture||P.image[0].isCompressedTexture,Ae=P.image[0]&&P.image[0].isDataTexture,We=[];for(let xe=0;xe<6;xe++)!nt&&!Ae?We[xe]=w(P.image[xe],!0,a.maxCubemapSize):We[xe]=Ae?P.image[xe].image:P.image[xe],We[xe]=be(P,We[xe]);const C=We[0],Je=l.convert(P.format,P.colorSpace),Fe=l.convert(P.type),ut=D(P.internalFormat,Je,Fe,P.colorSpace),ot=P.isVideoTexture!==!0,dt=Me.__version===void 0||ye===!0,G=ge.dataReady;let Ge=L(P,C);O(i.TEXTURE_CUBE_MAP,P);let ve;if(nt){ot&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ut,C.width,C.height);for(let xe=0;xe<6;xe++){ve=We[xe].mipmaps;for(let De=0;De<ve.length;De++){const Ye=ve[De];P.format!==bi?Je!==null?ot?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,0,0,Ye.width,Ye.height,Je,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,ut,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,0,0,Ye.width,Ye.height,Je,Fe,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De,ut,Ye.width,Ye.height,0,Je,Fe,Ye.data)}}}else{if(ve=P.mipmaps,ot&&dt){ve.length>0&&Ge++;const xe=Xe(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,ut,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ae){ot?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,We[xe].width,We[xe].height,Je,Fe,We[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,We[xe].width,We[xe].height,0,Je,Fe,We[xe].data);for(let De=0;De<ve.length;De++){const gt=ve[De].image[xe].image;ot?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,0,0,gt.width,gt.height,Je,Fe,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,ut,gt.width,gt.height,0,Je,Fe,gt.data)}}else{ot?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Je,Fe,We[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ut,Je,Fe,We[xe]);for(let De=0;De<ve.length;De++){const Ye=ve[De];ot?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,0,0,Je,Fe,Ye.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,De+1,ut,Je,Fe,Ye.image[xe])}}}y(P)&&x(i.TEXTURE_CUBE_MAP),Me.__version=ge.version,P.onUpdate&&P.onUpdate(P)}F.__version=P.version}function re(F,P,se,ye,ge,Me){const je=l.convert(se.format,se.colorSpace),Ce=l.convert(se.type),Ue=D(se.internalFormat,je,Ce,se.colorSpace);if(!s.get(P).__hasExternalTextures){const Ae=Math.max(1,P.width>>Me),We=Math.max(1,P.height>>Me);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,Ue,Ae,We,P.depth,0,je,Ce,null):t.texImage2D(ge,Me,Ue,Ae,We,0,je,Ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Te(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ge,s.get(se).__webglTexture,0,Ee(P)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ye,ge,s.get(se).__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(F,P,se){if(i.bindRenderbuffer(i.RENDERBUFFER,F),P.depthBuffer){const ye=P.depthTexture,ge=ye&&ye.isDepthTexture?ye.type:null,Me=T(P.stencilBuffer,ge),je=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=Ee(P);Te(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,Me,P.width,P.height):se?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Me,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,je,i.RENDERBUFFER,F)}else{const ye=P.textures;for(let ge=0;ge<ye.length;ge++){const Me=ye[ge],je=l.convert(Me.format,Me.colorSpace),Ce=l.convert(Me.type),Ue=D(Me.internalFormat,je,Ce,Me.colorSpace),nt=Ee(P);se&&Te(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Ue,P.width,P.height):Te(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Ue,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(F,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),ie(P.depthTexture,0);const ye=s.get(P.depthTexture).__webglTexture,ge=Ee(P);if(P.depthTexture.format===oa)Te(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ye,0);else if(P.depthTexture.format===pa)Te(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Ne(F){const P=s.get(F),se=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!P.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");_e(P.__webglFramebuffer,F)}else if(se){P.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ye]),P.__webglDepthbuffer[ye]=i.createRenderbuffer(),ce(P.__webglDepthbuffer[ye],F,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),ce(P.__webglDepthbuffer,F,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(F,P,se){const ye=s.get(F);P!==void 0&&re(ye.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),se!==void 0&&Ne(F)}function Be(F){const P=F.texture,se=s.get(F),ye=s.get(P);F.addEventListener("dispose",N);const ge=F.textures,Me=F.isWebGLCubeRenderTarget===!0,je=ge.length>1;if(je||(ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture()),ye.__version=P.version,c.memory.textures++),Me){se.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0){se.__webglFramebuffer[Ce]=[];for(let Ue=0;Ue<P.mipmaps.length;Ue++)se.__webglFramebuffer[Ce][Ue]=i.createFramebuffer()}else se.__webglFramebuffer[Ce]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ce=0;Ce<P.mipmaps.length;Ce++)se.__webglFramebuffer[Ce]=i.createFramebuffer()}else se.__webglFramebuffer=i.createFramebuffer();if(je)for(let Ce=0,Ue=ge.length;Ce<Ue;Ce++){const nt=s.get(ge[Ce]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),c.memory.textures++)}if(F.samples>0&&Te(F)===!1){se.__webglMultisampledFramebuffer=i.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const Ue=ge[Ce];se.__webglColorRenderbuffer[Ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,se.__webglColorRenderbuffer[Ce]);const nt=l.convert(Ue.format,Ue.colorSpace),Ae=l.convert(Ue.type),We=D(Ue.internalFormat,nt,Ae,Ue.colorSpace,F.isXRRenderTarget===!0),C=Ee(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,C,We,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,se.__webglColorRenderbuffer[Ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(se.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(se.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,ye.__webglTexture),O(i.TEXTURE_CUBE_MAP,P);for(let Ce=0;Ce<6;Ce++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ue=0;Ue<P.mipmaps.length;Ue++)re(se.__webglFramebuffer[Ce][Ue],F,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ue);else re(se.__webglFramebuffer[Ce],F,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(P)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ce=0,Ue=ge.length;Ce<Ue;Ce++){const nt=ge[Ce],Ae=s.get(nt);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),O(i.TEXTURE_2D,nt),re(se.__webglFramebuffer,F,nt,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,0),y(nt)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Ce=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ye.__webglTexture),O(Ce,P),P.mipmaps&&P.mipmaps.length>0)for(let Ue=0;Ue<P.mipmaps.length;Ue++)re(se.__webglFramebuffer[Ue],F,P,i.COLOR_ATTACHMENT0,Ce,Ue);else re(se.__webglFramebuffer,F,P,i.COLOR_ATTACHMENT0,Ce,0);y(P)&&x(Ce),t.unbindTexture()}F.depthBuffer&&Ne(F)}function V(F){const P=F.textures;for(let se=0,ye=P.length;se<ye;se++){const ge=P[se];if(y(ge)){const Me=F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,je=s.get(ge).__webglTexture;t.bindTexture(Me,je),x(Me),t.unbindTexture()}}}const pe=[],Se=[];function we(F){if(F.samples>0){if(Te(F)===!1){const P=F.textures,se=F.width,ye=F.height;let ge=i.COLOR_BUFFER_BIT;const Me=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,je=s.get(F),Ce=P.length>1;if(Ce)for(let Ue=0;Ue<P.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ue=0;Ue<P.length;Ue++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,je.__webglColorRenderbuffer[Ue]);const nt=s.get(P[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,se,ye,0,0,se,ye,ge,i.NEAREST),f===!0&&(pe.length=0,Se.length=0,pe.push(i.COLOR_ATTACHMENT0+Ue),F.depthBuffer&&F.resolveDepthBuffer===!1&&(pe.push(Me),Se.push(Me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ce)for(let Ue=0;Ue<P.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,je.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,je.__webglColorRenderbuffer[Ue]);const nt=s.get(P[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,je.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&f){const P=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function Ee(F){return Math.min(a.maxSamples,F.samples)}function Te(F){const P=s.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Le(F){const P=c.render.frame;m.get(F)!==P&&(m.set(F,P),F.update())}function be(F,P){const se=F.colorSpace,ye=F.format,ge=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||se!==Br&&se!==Nr&&(Ft.getTransfer(se)===jt?(ye!==bi||ge!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),P}function Xe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=B,this.setTexture2D=ie,this.setTexture2DArray=fe,this.setTexture3D=Y,this.setTextureCube=me,this.rebindTextures=ke,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Te}function cT(i,e){function t(s,a=Nr){let l;const c=Ft.getTransfer(a);if(s===zr)return i.UNSIGNED_BYTE;if(s===S0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===M0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ny)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===Py)return i.BYTE;if(s===Ly)return i.SHORT;if(s===lc)return i.UNSIGNED_SHORT;if(s===y0)return i.INT;if(s===fa)return i.UNSIGNED_INT;if(s===rr)return i.FLOAT;if(s===yc)return i.HALF_FLOAT;if(s===Dy)return i.ALPHA;if(s===Iy)return i.RGB;if(s===bi)return i.RGBA;if(s===Uy)return i.LUMINANCE;if(s===Oy)return i.LUMINANCE_ALPHA;if(s===oa)return i.DEPTH_COMPONENT;if(s===pa)return i.DEPTH_STENCIL;if(s===E0)return i.RED;if(s===w0)return i.RED_INTEGER;if(s===Fy)return i.RG;if(s===T0)return i.RG_INTEGER;if(s===A0)return i.RGBA_INTEGER;if(s===fd||s===hd||s===pd||s===md)if(c===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===fd)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===md)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===fd)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hd)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===md)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gm||s===vm||s===xm||s===_m)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===gm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===_m)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ym||s===Sm||s===Mm)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ym||s===Sm)return c===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Mm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Em||s===wm||s===Tm||s===Am||s===bm||s===Cm||s===Rm||s===Pm||s===Lm||s===Nm||s===Dm||s===Im||s===Um||s===Om)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Em)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Am)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dm)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Im)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Um)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Om)return c===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gd||s===Fm||s===zm)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===gd)return c===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===zy||s===km||s===Bm||s===Hm)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===gd)return l.COMPRESSED_RED_RGTC1_EXT;if(s===km)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ha?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class uT extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yl extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dT={type:"move"};class Hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,s),x=this._getHandJoint(h,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&v>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(dT)))}return u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Yl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const fT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
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

}`;class pT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Pn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new kr({vertexShader:fT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ci(new Mc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class mT extends ga{constructor(e,t){super();const s=this;let a=null,l=1,c=null,u="local-floor",f=1,h=null,m=null,g=null,v=null,S=null,M=null;const w=new pT,y=t.getContextAttributes();let x=null,D=null;const T=[],L=[],z=new $e;let N=null;const U=new Ti;U.layers.enable(1),U.viewport=new _n;const I=new Ti;I.layers.enable(2),I.viewport=new _n;const A=[U,I],b=new uT;b.layers.enable(1),b.layers.enable(2);let B=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=T[Z];return re===void 0&&(re=new Hd,T[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=T[Z];return re===void 0&&(re=new Hd,T[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=T[Z];return re===void 0&&(re=new Hd,T[Z]=re),re.getHandSpace()};function q(Z){const re=L.indexOf(Z.inputSource);if(re===-1)return;const ce=T[re];ce!==void 0&&(ce.update(Z.inputSource,Z.frame,h||c),ce.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ie(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",fe);for(let Z=0;Z<T.length;Z++){const re=L[Z];re!==null&&(L[Z]=null,T[Z].disconnect(re))}B=null,Q=null,w.reset(),e.setRenderTarget(x),S=null,v=null,g=null,a=null,D=null,Pe.stop(),s.isPresenting=!1,e.setPixelRatio(N),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",fe),y.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(z),a.renderState.layers===void 0){const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,re),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ps(S.framebufferWidth,S.framebufferHeight,{format:bi,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let re=null,ce=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?pa:oa,ce=y.stencil?ha:fa);const Ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(Ne),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),D=new ps(v.textureWidth,v.textureHeight,{format:bi,type:zr,depthTexture:new B0(v.textureWidth,v.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await a.requestReferenceSpace(u),Pe.setContext(a),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function fe(Z){for(let re=0;re<Z.removed.length;re++){const ce=Z.removed[re],_e=L.indexOf(ce);_e>=0&&(L[_e]=null,T[_e].disconnect(ce))}for(let re=0;re<Z.added.length;re++){const ce=Z.added[re];let _e=L.indexOf(ce);if(_e===-1){for(let ke=0;ke<T.length;ke++)if(ke>=L.length){L.push(ce),_e=ke;break}else if(L[ke]===null){L[ke]=ce,_e=ke;break}if(_e===-1)break}const Ne=T[_e];Ne&&Ne.connect(ce)}}const Y=new J,me=new J;function W(Z,re,ce){Y.setFromMatrixPosition(re.matrixWorld),me.setFromMatrixPosition(ce.matrixWorld);const _e=Y.distanceTo(me),Ne=re.projectionMatrix.elements,ke=ce.projectionMatrix.elements,Be=Ne[14]/(Ne[10]-1),V=Ne[14]/(Ne[10]+1),pe=(Ne[9]+1)/Ne[5],Se=(Ne[9]-1)/Ne[5],we=(Ne[8]-1)/Ne[0],Ee=(ke[8]+1)/ke[0],Te=Be*we,Le=Be*Ee,be=_e/(-we+Ee),Xe=be*-we;re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xe),Z.translateZ(be),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const F=Be+be,P=V+be,se=Te-Xe,ye=Le+(_e-Xe),ge=pe*V/P*F,Me=Se*V/P*F;Z.projectionMatrix.makePerspective(se,ye,ge,Me,F,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function ee(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;w.texture!==null&&(Z.near=w.depthNear,Z.far=w.depthFar),b.near=I.near=U.near=Z.near,b.far=I.far=U.far=Z.far,(B!==b.near||Q!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),B=b.near,Q=b.far,U.near=B,U.far=Q,I.near=B,I.far=Q,U.updateProjectionMatrix(),I.updateProjectionMatrix(),Z.updateProjectionMatrix());const re=Z.parent,ce=b.cameras;ee(b,re);for(let _e=0;_e<ce.length;_e++)ee(ce[_e],re);ce.length===2?W(b,U,I):b.projectionMatrix.copy(U.projectionMatrix),ne(Z,b,re)};function ne(Z,re,ce){ce===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(ce.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=go*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(Z){f=Z,v!==null&&(v.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let O=null;function $(Z,re){if(m=re.getViewerPose(h||c),M=re,m!==null){const ce=m.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let _e=!1;ce.length!==b.cameras.length&&(b.cameras.length=0,_e=!0);for(let ke=0;ke<ce.length;ke++){const Be=ce[ke];let V=null;if(S!==null)V=S.getViewport(Be);else{const Se=g.getViewSubImage(v,Be);V=Se.viewport,ke===0&&(e.setRenderTargetTextures(D,Se.colorTexture,v.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(D))}let pe=A[ke];pe===void 0&&(pe=new Ti,pe.layers.enable(ke),pe.viewport=new _n,A[ke]=pe),pe.matrix.fromArray(Be.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Be.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(V.x,V.y,V.width,V.height),ke===0&&(b.matrix.copy(pe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),_e===!0&&b.cameras.push(pe)}const Ne=a.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const ke=g.getDepthInformation(ce[0]);ke&&ke.isValid&&ke.texture&&w.init(e,ke,a.renderState)}}for(let ce=0;ce<T.length;ce++){const _e=L[ce],Ne=T[ce];_e!==null&&Ne!==void 0&&Ne.update(_e,re,h||c)}O&&O(Z,re),re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:re}),M=null}const Pe=new z0;Pe.setAnimationLoop($),this.setAnimationLoop=function(Z){O=Z},this.dispose=function(){}}}const os=new Ri,gT=new Bt;function vT(i,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,U0(i)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,D,T,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),m(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,L)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),w(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&u(y,x)):x.isPointsMaterial?f(y,x,D,T):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===$n&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===$n&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),T=D.envMap,L=D.envMapRotation;T&&(y.envMap.value=T,os.copy(L),os.x*=-1,os.y*=-1,os.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),y.envMapRotation.value.setFromMatrix4(gT.makeRotationFromEuler(os)),y.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function u(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function f(y,x,D,T){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=T*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$n&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function xT(i,e,t,s){let a={},l={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,T){const L=T.program;s.uniformBlockBinding(D,L)}function h(D,T){let L=a[D.id];L===void 0&&(M(D),L=m(D),a[D.id]=L,D.addEventListener("dispose",y));const z=T.program;s.updateUBOMapping(D,z);const N=e.render.frame;l[D.id]!==N&&(v(D),l[D.id]=N)}function m(D){const T=g();D.__bindingPointIndex=T;const L=i.createBuffer(),z=D.__size,N=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,z,N),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,L),L}function g(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const T=a[D.id],L=D.uniforms,z=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let N=0,U=L.length;N<U;N++){const I=Array.isArray(L[N])?L[N]:[L[N]];for(let A=0,b=I.length;A<b;A++){const B=I[A];if(S(B,N,A,z)===!0){const Q=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let ie=0;for(let fe=0;fe<q.length;fe++){const Y=q[fe],me=w(Y);typeof Y=="number"||typeof Y=="boolean"?(B.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,Q+ie,B.__data)):Y.isMatrix3?(B.__data[0]=Y.elements[0],B.__data[1]=Y.elements[1],B.__data[2]=Y.elements[2],B.__data[3]=0,B.__data[4]=Y.elements[3],B.__data[5]=Y.elements[4],B.__data[6]=Y.elements[5],B.__data[7]=0,B.__data[8]=Y.elements[6],B.__data[9]=Y.elements[7],B.__data[10]=Y.elements[8],B.__data[11]=0):(Y.toArray(B.__data,ie),ie+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Q,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(D,T,L,z){const N=D.value,U=T+"_"+L;if(z[U]===void 0)return typeof N=="number"||typeof N=="boolean"?z[U]=N:z[U]=N.clone(),!0;{const I=z[U];if(typeof N=="number"||typeof N=="boolean"){if(I!==N)return z[U]=N,!0}else if(I.equals(N)===!1)return I.copy(N),!0}return!1}function M(D){const T=D.uniforms;let L=0;const z=16;for(let U=0,I=T.length;U<I;U++){const A=Array.isArray(T[U])?T[U]:[T[U]];for(let b=0,B=A.length;b<B;b++){const Q=A[b],q=Array.isArray(Q.value)?Q.value:[Q.value];for(let ie=0,fe=q.length;ie<fe;ie++){const Y=q[ie],me=w(Y),W=L%z;W!==0&&z-W<me.boundary&&(L+=z-W),Q.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=L,L+=me.storage}}}const N=L%z;return N>0&&(L+=z-N),D.__size=L,D.__cache={},this}function w(D){const T={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(T.boundary=4,T.storage=4):D.isVector2?(T.boundary=8,T.storage=8):D.isVector3||D.isColor?(T.boundary=16,T.storage=12):D.isVector4?(T.boundary=16,T.storage=16):D.isMatrix3?(T.boundary=48,T.storage=48):D.isMatrix4?(T.boundary=64,T.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),T}function y(D){const T=D.target;T.removeEventListener("dispose",y);const L=c.indexOf(T.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(a[T.id]),delete a[T.id],delete l[T.id]}function x(){for(const D in a)i.deleteBuffer(a[D]);c=[],a={},l={}}return{bind:f,update:h,dispose:x}}class B2{constructor(e={}){const{canvas:t=dS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=c;const S=new Uint32Array(4),M=new Int32Array(4);let w=null,y=null;const x=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wi,this.toneMapping=Or,this.toneMappingExposure=1;const T=this;let L=!1,z=0,N=0,U=null,I=-1,A=null;const b=new _n,B=new _n;let Q=null;const q=new Ct(0);let ie=0,fe=t.width,Y=t.height,me=1,W=null,ee=null;const ne=new _n(0,0,fe,Y),O=new _n(0,0,fe,Y);let $=!1;const Pe=new yf;let Z=!1,re=!1;const ce=new Bt,_e=new J,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Be(){return U===null?me:1}let V=s;function pe(E,j){return t.getContext(E,j)}try{const E={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",xe,!1),V===null){const j="webgl2";if(V=pe(j,E),V===null)throw pe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,we,Ee,Te,Le,be,Xe,F,P,se,ye,ge,Me,je,Ce,Ue,nt,Ae,We,C,Je,Fe,ut,ot;function dt(){Se=new bE(V),Se.init(),Fe=new cT(V,Se),we=new SE(V,Se,e,Fe),Ee=new oT(V),Te=new PE(V),Le=new qw,be=new lT(V,Se,Ee,Le,we,Fe,Te),Xe=new EE(T),F=new AE(T),P=new FS(V),ut=new _E(V,P),se=new CE(V,P,Te,ut),ye=new NE(V,se,P,Te),We=new LE(V,we,be),Ue=new ME(Le),ge=new Xw(T,Xe,F,Se,we,ut,Ue),Me=new vT(T,Le),je=new $w,Ce=new tT(Se),Ae=new xE(T,Xe,F,Ee,ye,v,f),nt=new aT(T,ye,we),ot=new xT(V,Te,we,Ee),C=new yE(V,Se,Te),Je=new RE(V,Se,Te),Te.programs=ge.programs,T.capabilities=we,T.extensions=Se,T.properties=Le,T.renderLists=je,T.shadowMap=nt,T.state=Ee,T.info=Te}dt();const G=new mT(T,V);this.xr=G,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(E){E!==void 0&&(me=E,this.setSize(fe,Y,!1))},this.getSize=function(E){return E.set(fe,Y)},this.setSize=function(E,j,oe=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}fe=E,Y=j,t.width=Math.floor(E*me),t.height=Math.floor(j*me),oe===!0&&(t.style.width=E+"px",t.style.height=j+"px"),this.setViewport(0,0,E,j)},this.getDrawingBufferSize=function(E){return E.set(fe*me,Y*me).floor()},this.setDrawingBufferSize=function(E,j,oe){fe=E,Y=j,me=oe,t.width=Math.floor(E*oe),t.height=Math.floor(j*oe),this.setViewport(0,0,E,j)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(ne)},this.setViewport=function(E,j,oe,ae){E.isVector4?ne.set(E.x,E.y,E.z,E.w):ne.set(E,j,oe,ae),Ee.viewport(b.copy(ne).multiplyScalar(me).round())},this.getScissor=function(E){return E.copy(O)},this.setScissor=function(E,j,oe,ae){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,j,oe,ae),Ee.scissor(B.copy(O).multiplyScalar(me).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(E){Ee.setScissorTest($=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,j=!0,oe=!0){let ae=0;if(E){let te=!1;if(U!==null){const Re=U.texture.format;te=Re===A0||Re===T0||Re===w0}if(te){const Re=U.texture.type,qe=Re===zr||Re===fa||Re===lc||Re===ha||Re===S0||Re===M0,et=Ae.getClearColor(),rt=Ae.getClearAlpha(),Ze=et.r,ft=et.g,lt=et.b;qe?(S[0]=Ze,S[1]=ft,S[2]=lt,S[3]=rt,V.clearBufferuiv(V.COLOR,0,S)):(M[0]=Ze,M[1]=ft,M[2]=lt,M[3]=rt,V.clearBufferiv(V.COLOR,0,M))}else ae|=V.COLOR_BUFFER_BIT}j&&(ae|=V.DEPTH_BUFFER_BIT),oe&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),je.dispose(),Ce.dispose(),Le.dispose(),Xe.dispose(),F.dispose(),ye.dispose(),ut.dispose(),ot.dispose(),ge.dispose(),G.dispose(),G.removeEventListener("sessionstart",Tt),G.removeEventListener("sessionend",zt),It.stop()};function Ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=Te.autoReset,j=nt.enabled,oe=nt.autoUpdate,ae=nt.needsUpdate,te=nt.type;dt(),Te.autoReset=E,nt.enabled=j,nt.autoUpdate=oe,nt.needsUpdate=ae,nt.type=te}function xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function De(E){const j=E.target;j.removeEventListener("dispose",De),Ye(j)}function Ye(E){gt(E),Le.remove(E)}function gt(E){const j=Le.get(E).programs;j!==void 0&&(j.forEach(function(oe){ge.releaseProgram(oe)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,j,oe,ae,te,Re){j===null&&(j=Ne);const qe=te.isMesh&&te.matrixWorld.determinant()<0,et=Dn(E,j,oe,ae,te);Ee.setMaterial(ae,qe);let rt=oe.index,Ze=1;if(ae.wireframe===!0){if(rt=se.getWireframeAttribute(oe),rt===void 0)return;Ze=2}const ft=oe.drawRange,lt=oe.attributes.position;let wt=ft.start*Ze,Nt=(ft.start+ft.count)*Ze;Re!==null&&(wt=Math.max(wt,Re.start*Ze),Nt=Math.min(Nt,(Re.start+Re.count)*Ze)),rt!==null?(wt=Math.max(wt,0),Nt=Math.min(Nt,rt.count)):lt!=null&&(wt=Math.max(wt,0),Nt=Math.min(Nt,lt.count));const kt=Nt-wt;if(kt<0||kt===1/0)return;ut.setup(te,ae,et,oe,rt);let Xt,_t=C;if(rt!==null&&(Xt=P.get(rt),_t=Je,_t.setIndex(Xt)),te.isMesh)ae.wireframe===!0?(Ee.setLineWidth(ae.wireframeLinewidth*Be()),_t.setMode(V.LINES)):_t.setMode(V.TRIANGLES);else if(te.isLine){let tt=ae.linewidth;tt===void 0&&(tt=1),Ee.setLineWidth(tt*Be()),te.isLineSegments?_t.setMode(V.LINES):te.isLineLoop?_t.setMode(V.LINE_LOOP):_t.setMode(V.LINE_STRIP)}else te.isPoints?_t.setMode(V.POINTS):te.isSprite&&_t.setMode(V.TRIANGLES);if(te.isBatchedMesh)te._multiDrawInstances!==null?_t.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances):_t.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)_t.renderInstances(wt,kt,te.count);else if(oe.isInstancedBufferGeometry){const tt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,tn=Math.min(oe.instanceCount,tt);_t.renderInstances(wt,kt,tn)}else _t.render(wt,kt)};function Et(E,j,oe){E.transparent===!0&&E.side===tr&&E.forceSinglePass===!1?(E.side=$n,E.needsUpdate=!0,hn(E,j,oe),E.side=Fr,E.needsUpdate=!0,hn(E,j,oe),E.side=tr):hn(E,j,oe)}this.compile=function(E,j,oe=null){oe===null&&(oe=E),y=Ce.get(oe),y.init(j),D.push(y),oe.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),E!==oe&&E.traverseVisible(function(te){te.isLight&&te.layers.test(j.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),y.setupLights();const ae=new Set;return E.traverse(function(te){const Re=te.material;if(Re)if(Array.isArray(Re))for(let qe=0;qe<Re.length;qe++){const et=Re[qe];Et(et,oe,te),ae.add(et)}else Et(Re,oe,te),ae.add(Re)}),D.pop(),y=null,ae},this.compileAsync=function(E,j,oe=null){const ae=this.compile(E,j,oe);return new Promise(te=>{function Re(){if(ae.forEach(function(qe){Le.get(qe).currentProgram.isReady()&&ae.delete(qe)}),ae.size===0){te(E);return}setTimeout(Re,10)}Se.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let bt=null;function mt(E){bt&&bt(E)}function Tt(){It.stop()}function zt(){It.start()}const It=new z0;It.setAnimationLoop(mt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(E){bt=E,G.setAnimationLoop(E),E===null?It.stop():It.start()},G.addEventListener("sessionstart",Tt),G.addEventListener("sessionend",zt),this.render=function(E,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(j),j=G.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,j,U),y=Ce.get(E,D.length),y.init(j),D.push(y),ce.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Pe.setFromProjectionMatrix(ce),re=this.localClippingEnabled,Z=Ue.init(this.clippingPlanes,re),w=je.get(E,x.length),w.init(),x.push(w),G.enabled===!0&&G.isPresenting===!0){const Re=T.xr.getDepthSensingMesh();Re!==null&&He(Re,j,-1/0,T.sortObjects)}He(E,j,0,T.sortObjects),w.finish(),T.sortObjects===!0&&w.sort(W,ee),ke=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ke&&Ae.addToRenderList(w,E),this.info.render.frame++,Z===!0&&Ue.beginShadows();const oe=y.state.shadowsArray;nt.render(oe,E,j),Z===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=w.opaque,te=w.transmissive;if(y.setupLights(),j.isArrayCamera){const Re=j.cameras;if(te.length>0)for(let qe=0,et=Re.length;qe<et;qe++){const rt=Re[qe];rn(ae,te,E,rt)}ke&&Ae.render(E);for(let qe=0,et=Re.length;qe<et;qe++){const rt=Re[qe];Vt(w,E,rt,rt.viewport)}}else te.length>0&&rn(ae,te,E,j),ke&&Ae.render(E),Vt(w,E,j);U!==null&&(be.updateMultisampleRenderTarget(U),be.updateRenderTargetMipmap(U)),E.isScene===!0&&E.onAfterRender(T,E,j),ut.resetDefaultState(),I=-1,A=null,D.pop(),D.length>0?(y=D[D.length-1],Z===!0&&Ue.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function He(E,j,oe,ae){if(E.visible===!1)return;if(E.layers.test(j.layers)){if(E.isGroup)oe=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(j);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Pe.intersectsSprite(E)){ae&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const qe=ye.update(E),et=E.material;et.visible&&w.push(E,qe,et,oe,_e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Pe.intersectsObject(E))){const qe=ye.update(E),et=E.material;if(ae&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_e.copy(E.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),_e.copy(qe.boundingSphere.center)),_e.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(et)){const rt=qe.groups;for(let Ze=0,ft=rt.length;Ze<ft;Ze++){const lt=rt[Ze],wt=et[lt.materialIndex];wt&&wt.visible&&w.push(E,qe,wt,oe,_e.z,lt)}}else et.visible&&w.push(E,qe,et,oe,_e.z,null)}}const Re=E.children;for(let qe=0,et=Re.length;qe<et;qe++)He(Re[qe],j,oe,ae)}function Vt(E,j,oe,ae){const te=E.opaque,Re=E.transmissive,qe=E.transparent;y.setupLightsView(oe),Z===!0&&Ue.setGlobalState(T.clippingPlanes,oe),ae&&Ee.viewport(b.copy(ae)),te.length>0&&Qt(te,j,oe),Re.length>0&&Qt(Re,j,oe),qe.length>0&&Qt(qe,j,oe),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function rn(E,j,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new ps(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?yc:zr,minFilter:Ir,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace}));const Re=y.state.transmissionRenderTarget[ae.id],qe=ae.viewport||b;Re.setSize(qe.z,qe.w);const et=T.getRenderTarget();T.setRenderTarget(Re),T.getClearColor(q),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),ke?Ae.render(oe):T.clear();const rt=T.toneMapping;T.toneMapping=Or;const Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),Z===!0&&Ue.setGlobalState(T.clippingPlanes,ae),Qt(E,oe,ae),be.updateMultisampleRenderTarget(Re),be.updateRenderTargetMipmap(Re),Se.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let lt=0,wt=j.length;lt<wt;lt++){const Nt=j[lt],kt=Nt.object,Xt=Nt.geometry,_t=Nt.material,tt=Nt.group;if(_t.side===tr&&kt.layers.test(ae.layers)){const tn=_t.side;_t.side=$n,_t.needsUpdate=!0,yt(kt,oe,ae,Xt,_t,tt),_t.side=tn,_t.needsUpdate=!0,ft=!0}}ft===!0&&(be.updateMultisampleRenderTarget(Re),be.updateRenderTargetMipmap(Re))}T.setRenderTarget(et),T.setClearColor(q,ie),Ze!==void 0&&(ae.viewport=Ze),T.toneMapping=rt}function Qt(E,j,oe){const ae=j.isScene===!0?j.overrideMaterial:null;for(let te=0,Re=E.length;te<Re;te++){const qe=E[te],et=qe.object,rt=qe.geometry,Ze=ae===null?qe.material:ae,ft=qe.group;et.layers.test(oe.layers)&&yt(et,j,oe,rt,Ze,ft)}}function yt(E,j,oe,ae,te,Re){E.onBeforeRender(T,j,oe,ae,te,Re),E.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),te.onBeforeRender(T,j,oe,ae,E,Re),te.transparent===!0&&te.side===tr&&te.forceSinglePass===!1?(te.side=$n,te.needsUpdate=!0,T.renderBufferDirect(oe,j,ae,te,E,Re),te.side=Fr,te.needsUpdate=!0,T.renderBufferDirect(oe,j,ae,te,E,Re),te.side=tr):T.renderBufferDirect(oe,j,ae,te,E,Re),E.onAfterRender(T,j,oe,ae,te,Re)}function hn(E,j,oe){j.isScene!==!0&&(j=Ne);const ae=Le.get(E),te=y.state.lights,Re=y.state.shadowsArray,qe=te.state.version,et=ge.getParameters(E,te.state,Re,j,oe),rt=ge.getProgramCacheKey(et);let Ze=ae.programs;ae.environment=E.isMeshStandardMaterial?j.environment:null,ae.fog=j.fog,ae.envMap=(E.isMeshStandardMaterial?F:Xe).get(E.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&E.envMap===null?j.environmentRotation:E.envMapRotation,Ze===void 0&&(E.addEventListener("dispose",De),Ze=new Map,ae.programs=Ze);let ft=Ze.get(rt);if(ft!==void 0){if(ae.currentProgram===ft&&ae.lightsStateVersion===qe)return Bn(E,et),ft}else et.uniforms=ge.getUniforms(E),E.onBuild(oe,et,T),E.onBeforeCompile(et,T),ft=ge.acquireProgram(et,rt),Ze.set(rt,ft),ae.uniforms=et.uniforms;const lt=ae.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(lt.clippingPlanes=Ue.uniform),Bn(E,et),ae.needsLights=Rt(E),ae.lightsStateVersion=qe,ae.needsLights&&(lt.ambientLightColor.value=te.state.ambient,lt.lightProbe.value=te.state.probe,lt.directionalLights.value=te.state.directional,lt.directionalLightShadows.value=te.state.directionalShadow,lt.spotLights.value=te.state.spot,lt.spotLightShadows.value=te.state.spotShadow,lt.rectAreaLights.value=te.state.rectArea,lt.ltc_1.value=te.state.rectAreaLTC1,lt.ltc_2.value=te.state.rectAreaLTC2,lt.pointLights.value=te.state.point,lt.pointLightShadows.value=te.state.pointShadow,lt.hemisphereLights.value=te.state.hemi,lt.directionalShadowMap.value=te.state.directionalShadowMap,lt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,lt.spotShadowMap.value=te.state.spotShadowMap,lt.spotLightMatrix.value=te.state.spotLightMatrix,lt.spotLightMap.value=te.state.spotLightMap,lt.pointShadowMap.value=te.state.pointShadowMap,lt.pointShadowMatrix.value=te.state.pointShadowMatrix),ae.currentProgram=ft,ae.uniformsList=null,ft}function Nn(E){if(E.uniformsList===null){const j=E.currentProgram.getUniforms();E.uniformsList=rc.seqWithValue(j.seq,E.uniforms)}return E.uniformsList}function Bn(E,j){const oe=Le.get(E);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function Dn(E,j,oe,ae,te){j.isScene!==!0&&(j=Ne),be.resetTextureUnits();const Re=j.fog,qe=ae.isMeshStandardMaterial?j.environment:null,et=U===null?T.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Br,rt=(ae.isMeshStandardMaterial?F:Xe).get(ae.envMap||qe),Ze=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ft=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),lt=!!oe.morphAttributes.position,wt=!!oe.morphAttributes.normal,Nt=!!oe.morphAttributes.color;let kt=Or;ae.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(kt=T.toneMapping);const Xt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,_t=Xt!==void 0?Xt.length:0,tt=Le.get(ae),tn=y.state.lights;if(Z===!0&&(re===!0||E!==A)){const pn=E===A&&ae.id===I;Ue.setState(ae,E,pn)}let xt=!1;ae.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==tn.state.version||tt.outputColorSpace!==et||te.isBatchedMesh&&tt.batching===!1||!te.isBatchedMesh&&tt.batching===!0||te.isBatchedMesh&&tt.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&tt.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&tt.instancing===!1||!te.isInstancedMesh&&tt.instancing===!0||te.isSkinnedMesh&&tt.skinning===!1||!te.isSkinnedMesh&&tt.skinning===!0||te.isInstancedMesh&&tt.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&tt.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&tt.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&tt.instancingMorph===!1&&te.morphTexture!==null||tt.envMap!==rt||ae.fog===!0&&tt.fog!==Re||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Ue.numPlanes||tt.numIntersection!==Ue.numIntersection)||tt.vertexAlphas!==Ze||tt.vertexTangents!==ft||tt.morphTargets!==lt||tt.morphNormals!==wt||tt.morphColors!==Nt||tt.toneMapping!==kt||tt.morphTargetsCount!==_t)&&(xt=!0):(xt=!0,tt.__version=ae.version);let In=tt.currentProgram;xt===!0&&(In=hn(ae,j,te));let Kn=!1,Jn=!1,si=!1;const Ut=In.getUniforms(),on=tt.uniforms;if(Ee.useProgram(In.program)&&(Kn=!0,Jn=!0,si=!0),ae.id!==I&&(I=ae.id,Jn=!0),Kn||A!==E){Ut.setValue(V,"projectionMatrix",E.projectionMatrix),Ut.setValue(V,"viewMatrix",E.matrixWorldInverse);const pn=Ut.map.cameraPosition;pn!==void 0&&pn.setValue(V,_e.setFromMatrixPosition(E.matrixWorld)),we.logarithmicDepthBuffer&&Ut.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ut.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,Jn=!0,si=!0)}if(te.isSkinnedMesh){Ut.setOptional(V,te,"bindMatrix"),Ut.setOptional(V,te,"bindMatrixInverse");const pn=te.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ut.setValue(V,"boneTexture",pn.boneTexture,be))}te.isBatchedMesh&&(Ut.setOptional(V,te,"batchingTexture"),Ut.setValue(V,"batchingTexture",te._matricesTexture,be),Ut.setOptional(V,te,"batchingColorTexture"),te._colorsTexture!==null&&Ut.setValue(V,"batchingColorTexture",te._colorsTexture,be));const Hn=oe.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&We.update(te,oe,In),(Jn||tt.receiveShadow!==te.receiveShadow)&&(tt.receiveShadow=te.receiveShadow,Ut.setValue(V,"receiveShadow",te.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(on.envMap.value=rt,on.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&j.environment!==null&&(on.envMapIntensity.value=j.environmentIntensity),Jn&&(Ut.setValue(V,"toneMappingExposure",T.toneMappingExposure),tt.needsLights&&yn(on,si),Re&&ae.fog===!0&&Me.refreshFogUniforms(on,Re),Me.refreshMaterialUniforms(on,ae,me,Y,y.state.transmissionRenderTarget[E.id]),rc.upload(V,Nn(tt),on,be)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(rc.upload(V,Nn(tt),on,be),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ut.setValue(V,"center",te.center),Ut.setValue(V,"modelViewMatrix",te.modelViewMatrix),Ut.setValue(V,"normalMatrix",te.normalMatrix),Ut.setValue(V,"modelMatrix",te.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const pn=ae.uniformsGroups;for(let Bi=0,Hr=pn.length;Bi<Hr;Bi++){const Vr=pn[Bi];ot.update(Vr,In),ot.bind(Vr,In)}}return In}function yn(E,j){E.ambientLightColor.needsUpdate=j,E.lightProbe.needsUpdate=j,E.directionalLights.needsUpdate=j,E.directionalLightShadows.needsUpdate=j,E.pointLights.needsUpdate=j,E.pointLightShadows.needsUpdate=j,E.spotLights.needsUpdate=j,E.spotLightShadows.needsUpdate=j,E.rectAreaLights.needsUpdate=j,E.hemisphereLights.needsUpdate=j}function Rt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,j,oe){Le.get(E.texture).__webglTexture=j,Le.get(E.depthTexture).__webglTexture=oe;const ae=Le.get(E);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,j){const oe=Le.get(E);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(E,j=0,oe=0){U=E,z=j,N=oe;let ae=!0,te=null,Re=!1,qe=!1;if(E){const rt=Le.get(E);rt.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(V.FRAMEBUFFER,null),ae=!1):rt.__webglFramebuffer===void 0?be.setupRenderTarget(E):rt.__hasExternalTextures&&be.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);const Ze=E.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(qe=!0);const ft=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ft[j])?te=ft[j][oe]:te=ft[j],Re=!0):E.samples>0&&be.useMultisampledRTT(E)===!1?te=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(ft)?te=ft[oe]:te=ft,b.copy(E.viewport),B.copy(E.scissor),Q=E.scissorTest}else b.copy(ne).multiplyScalar(me).floor(),B.copy(O).multiplyScalar(me).floor(),Q=$;if(Ee.bindFramebuffer(V.FRAMEBUFFER,te)&&ae&&Ee.drawBuffers(E,te),Ee.viewport(b),Ee.scissor(B),Ee.setScissorTest(Q),Re){const rt=Le.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,rt.__webglTexture,oe)}else if(qe){const rt=Le.get(E.texture),Ze=j||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,rt.__webglTexture,oe||0,Ze)}I=-1},this.readRenderTargetPixels=function(E,j,oe,ae,te,Re,qe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&qe!==void 0&&(et=et[qe]),et){Ee.bindFramebuffer(V.FRAMEBUFFER,et);try{const rt=E.texture,Ze=rt.format,ft=rt.type;if(!we.textureFormatReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=E.width-ae&&oe>=0&&oe<=E.height-te&&V.readPixels(j,oe,ae,te,Fe.convert(Ze),Fe.convert(ft),Re)}finally{const rt=U!==null?Le.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(V.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(E,j,oe,ae,te,Re,qe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&qe!==void 0&&(et=et[qe]),et){Ee.bindFramebuffer(V.FRAMEBUFFER,et);try{const rt=E.texture,Ze=rt.format,ft=rt.type;if(!we.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=E.width-ae&&oe>=0&&oe<=E.height-te){const lt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.bufferData(V.PIXEL_PACK_BUFFER,Re.byteLength,V.STREAM_READ),V.readPixels(j,oe,ae,te,Fe.convert(Ze),Fe.convert(ft),0),V.flush();const wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);await fS(V,wt,4);try{V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Re)}finally{V.deleteBuffer(lt),V.deleteSync(wt)}return Re}}finally{const rt=U!==null?Le.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(V.FRAMEBUFFER,rt)}}},this.copyFramebufferToTexture=function(E,j=null,oe=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1]);const ae=Math.pow(2,-oe),te=Math.floor(E.image.width*ae),Re=Math.floor(E.image.height*ae),qe=j!==null?j.x:0,et=j!==null?j.y:0;be.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,oe,0,0,qe,et,te,Re),Ee.unbindTexture()},this.copyTextureToTexture=function(E,j,oe=null,ae=null,te=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,E=arguments[1],j=arguments[2],te=arguments[3]||0,oe=null);let Re,qe,et,rt,Ze,ft;oe!==null?(Re=oe.max.x-oe.min.x,qe=oe.max.y-oe.min.y,et=oe.min.x,rt=oe.min.y):(Re=E.image.width,qe=E.image.height,et=0,rt=0),ae!==null?(Ze=ae.x,ft=ae.y):(Ze=0,ft=0);const lt=Fe.convert(j.format),wt=Fe.convert(j.type);be.setTexture2D(j,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Nt=V.getParameter(V.UNPACK_ROW_LENGTH),kt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Xt=V.getParameter(V.UNPACK_SKIP_PIXELS),_t=V.getParameter(V.UNPACK_SKIP_ROWS),tt=V.getParameter(V.UNPACK_SKIP_IMAGES),tn=E.isCompressedTexture?E.mipmaps[te]:E.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,tn.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,tn.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,et),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,te,Ze,ft,Re,qe,lt,wt,tn.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,te,Ze,ft,tn.width,tn.height,lt,tn.data):V.texSubImage2D(V.TEXTURE_2D,te,Ze,ft,lt,wt,tn),V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xt),V.pixelStorei(V.UNPACK_SKIP_ROWS,_t),V.pixelStorei(V.UNPACK_SKIP_IMAGES,tt),te===0&&j.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(E,j,oe=null,ae=null,te=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ae=arguments[1]||null,E=arguments[2],j=arguments[3],te=arguments[4]||0);let Re,qe,et,rt,Ze,ft,lt,wt,Nt;const kt=E.isCompressedTexture?E.mipmaps[te]:E.image;oe!==null?(Re=oe.max.x-oe.min.x,qe=oe.max.y-oe.min.y,et=oe.max.z-oe.min.z,rt=oe.min.x,Ze=oe.min.y,ft=oe.min.z):(Re=kt.width,qe=kt.height,et=kt.depth,rt=0,Ze=0,ft=0),ae!==null?(lt=ae.x,wt=ae.y,Nt=ae.z):(lt=0,wt=0,Nt=0);const Xt=Fe.convert(j.format),_t=Fe.convert(j.type);let tt;if(j.isData3DTexture)be.setTexture3D(j,0),tt=V.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)be.setTexture2DArray(j,0),tt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const tn=V.getParameter(V.UNPACK_ROW_LENGTH),xt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),In=V.getParameter(V.UNPACK_SKIP_PIXELS),Kn=V.getParameter(V.UNPACK_SKIP_ROWS),Jn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,rt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ze),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ft),E.isDataTexture||E.isData3DTexture?V.texSubImage3D(tt,te,lt,wt,Nt,Re,qe,et,Xt,_t,kt.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(tt,te,lt,wt,Nt,Re,qe,et,Xt,kt.data):V.texSubImage3D(tt,te,lt,wt,Nt,Re,qe,et,Xt,_t,kt),V.pixelStorei(V.UNPACK_ROW_LENGTH,tn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,In),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Jn),te===0&&j.generateMipmaps&&V.generateMipmap(tt),Ee.unbindTexture()},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){z=0,N=0,U=null,Ee.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mf?"display-p3":"srgb",t.unpackColorSpace=Ft.workingColorSpace===Sc?"display-p3":"srgb"}}class H2 extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _T{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return vf("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new J;class X0{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Ai(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Ot(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),s=Ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),s=Ot(s,this.array),a=Ot(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),s=Ot(s,this.array),a=Ot(a,this.array),l=Ot(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new pi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new X0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class q0 extends Pn{constructor(e=null,t=1,s=1,a,l,c,u,f,h=Yn,m=Yn,g,v){super(null,c,u,f,h,m,a,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ng extends pi{constructor(e,t,s,a=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ia=new Bt,Dg=new Bt,$l=[],Ig=new gs,yT=new Bt,ro=new Ci,so=new va;class V2 extends Ci{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ng(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<s;a++)this.setMatrixAt(a,yT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),Ig.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(Ig)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),so.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const s=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let u=0;u<s.length;u++)s[u]=a[c+u]}raycast(e,t){const s=this.matrixWorld,a=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(s),e.ray.intersectsSphere(so)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ia),Dg.multiplyMatrices(s,ia),ro.matrixWorld=Dg,ro.raycast(e,$l);for(let c=0,u=$l.length;c<u;c++){const f=$l[c];f.instanceId=l,f.object=this,t.push(f)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ng(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const s=t.morphTargetInfluences,a=s.length+1;this.morphTexture===null&&(this.morphTexture=new q0(new Float32Array(a*this.count),a,this.count,E0,rr));const l=this.morphTexture.source.data.data;let c=0;for(let h=0;h<s.length;h++)c+=s[h];const u=this.geometry.morphTargetsRelative?1:1-c,f=a*e;l[f]=u,l.set(s,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ST extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new J,pc=new J,Ug=new Bt,ao=new xf,Kl=new va,Vd=new J,Og=new J;class MT extends En{constructor(e=new kn,t=new ST){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)hc.fromBufferAttribute(t,a-1),pc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=hc.distanceTo(pc);e.setAttribute("lineDistance",new $t(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kl.copy(s.boundingSphere),Kl.applyMatrix4(a),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;Ug.copy(a).invert(),ao.copy(e.ray).applyMatrix4(Ug);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,m=s.index,v=s.attributes.position;if(m!==null){const S=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let w=S,y=M-1;w<y;w+=h){const x=m.getX(w),D=m.getX(w+1),T=Jl(this,e,ao,f,x,D);T&&t.push(T)}if(this.isLineLoop){const w=m.getX(M-1),y=m.getX(S),x=Jl(this,e,ao,f,w,y);x&&t.push(x)}}else{const S=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let w=S,y=M-1;w<y;w+=h){const x=Jl(this,e,ao,f,w,w+1);x&&t.push(x)}if(this.isLineLoop){const w=Jl(this,e,ao,f,M-1,S);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function Jl(i,e,t,s,a,l){const c=i.geometry.attributes.position;if(hc.fromBufferAttribute(c,a),pc.fromBufferAttribute(c,l),t.distanceSqToSegment(hc,pc,Vd,Og)>s)return;Vd.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Vd);if(!(f<e.near||f>e.far))return{distance:f,point:Og.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Fg=new J,zg=new J;class G2 extends MT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Fg.fromBufferAttribute(t,a),zg.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Fg.distanceTo(zg);e.setAttribute("lineDistance",new $t(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ki{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let a=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let u=0,f=l-1,h;for(;u<=f;)if(a=Math.floor(u+(f-u)/2),h=s[a]-c,h<0)u=a+1;else if(h>0)f=a-1;else{f=a;break}if(a=f,s[a]===c)return a/(l-1);const m=s[a],v=s[a+1]-m,S=(c-m)/v;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),u=this.getPoint(l),f=t||(c.isVector2?new $e:new J);return f.copy(u).sub(c).normalize(),f}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new J,a=[],l=[],c=[],u=new J,f=new Bt;for(let S=0;S<=e;S++){const M=S/e;a[S]=this.getTangentAt(M,new J)}l[0]=new J,c[0]=new J;let h=Number.MAX_VALUE;const m=Math.abs(a[0].x),g=Math.abs(a[0].y),v=Math.abs(a[0].z);m<=h&&(h=m,s.set(1,0,0)),g<=h&&(h=g,s.set(0,1,0)),v<=h&&s.set(0,0,1),u.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],u),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),u.crossVectors(a[S-1],a[S]),u.length()>Number.EPSILON){u.normalize();const M=Math.acos(un(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(f.makeRotationAxis(u,M))}c[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(un(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(u.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(a[M],S*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mf extends ki{constructor(e=0,t=0,s=1,a=1,l=0,c=Math.PI*2,u=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=u,this.aRotation=f}getPoint(e,t=new $e){const s=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const u=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(u),h=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=f-this.aX,S=h-this.aY;f=v*m-S*g+this.aX,h=v*g+S*m+this.aY}return s.set(f,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ET extends Mf{constructor(e,t,s,a,l,c){super(e,t,s,s,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Ef(){let i=0,e=0,t=0,s=0;function a(l,c,u,f){i=l,e=u,t=-3*l+3*c-2*u-f,s=2*l-2*c+u+f}return{initCatmullRom:function(l,c,u,f,h){a(c,u,h*(u-l),h*(f-c))},initNonuniformCatmullRom:function(l,c,u,f,h,m,g){let v=(c-l)/h-(u-l)/(h+m)+(u-c)/m,S=(u-c)/m-(f-c)/(m+g)+(f-u)/g;v*=m,S*=m,a(c,u,v,S)},calc:function(l){const c=l*l,u=c*l;return i+e*l+t*c+s*u}}}const Zl=new J,Gd=new Ef,Wd=new Ef,jd=new Ef;class wT extends ki{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new J){const s=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let u=Math.floor(c),f=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/l)+1)*l:f===0&&u===l-1&&(u=l-2,f=1);let h,m;this.closed||u>0?h=a[(u-1)%l]:(Zl.subVectors(a[0],a[1]).add(a[0]),h=Zl);const g=a[u%l],v=a[(u+1)%l];if(this.closed||u+2<l?m=a[(u+2)%l]:(Zl.subVectors(a[l-1],a[l-2]).add(a[l-1]),m=Zl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),S),w=Math.pow(g.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(m),S);w<1e-4&&(w=1),M<1e-4&&(M=w),y<1e-4&&(y=w),Gd.initNonuniformCatmullRom(h.x,g.x,v.x,m.x,M,w,y),Wd.initNonuniformCatmullRom(h.y,g.y,v.y,m.y,M,w,y),jd.initNonuniformCatmullRom(h.z,g.z,v.z,m.z,M,w,y)}else this.curveType==="catmullrom"&&(Gd.initCatmullRom(h.x,g.x,v.x,m.x,this.tension),Wd.initCatmullRom(h.y,g.y,v.y,m.y,this.tension),jd.initCatmullRom(h.z,g.z,v.z,m.z,this.tension));return s.set(Gd.calc(f),Wd.calc(f),jd.calc(f)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new J().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kg(i,e,t,s,a){const l=(s-e)*.5,c=(a-t)*.5,u=i*i,f=i*u;return(2*t-2*s+l+c)*f+(-3*t+3*s-2*l-c)*u+l*i+t}function TT(i,e){const t=1-i;return t*t*e}function AT(i,e){return 2*(1-i)*i*e}function bT(i,e){return i*i*e}function fo(i,e,t,s){return TT(i,e)+AT(i,t)+bT(i,s)}function CT(i,e){const t=1-i;return t*t*t*e}function RT(i,e){const t=1-i;return 3*t*t*i*e}function PT(i,e){return 3*(1-i)*i*i*e}function LT(i,e){return i*i*i*e}function ho(i,e,t,s,a){return CT(i,e)+RT(i,t)+PT(i,s)+LT(i,a)}class Y0 extends ki{constructor(e=new $e,t=new $e,s=new $e,a=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2,u=this.v3;return s.set(ho(e,a.x,l.x,c.x,u.x),ho(e,a.y,l.y,c.y,u.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NT extends ki{constructor(e=new J,t=new J,s=new J,a=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new J){const s=t,a=this.v0,l=this.v1,c=this.v2,u=this.v3;return s.set(ho(e,a.x,l.x,c.x,u.x),ho(e,a.y,l.y,c.y,u.y),ho(e,a.z,l.z,c.z,u.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $0 extends ki{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class DT extends ki{constructor(e=new J,t=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new J){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K0 extends ki{constructor(e=new $e,t=new $e,s=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J0 extends ki{constructor(e=new J,t=new J,s=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new J){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y),fo(e,a.z,l.z,c.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z0 extends ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const s=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),u=l-c,f=a[c===0?c:c-1],h=a[c],m=a[c>a.length-2?a.length-1:c+1],g=a[c>a.length-3?a.length-1:c+2];return s.set(kg(u,f.x,h.x,m.x,g.x),kg(u,f.y,h.y,m.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new $e().fromArray(a))}return this}}var mc=Object.freeze({__proto__:null,ArcCurve:ET,CatmullRomCurve3:wT,CubicBezierCurve:Y0,CubicBezierCurve3:NT,EllipseCurve:Mf,LineCurve:$0,LineCurve3:DT,QuadraticBezierCurve:K0,QuadraticBezierCurve3:J0,SplineCurve:Z0});class IT extends ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mc[s](t,e))}return this}getPoint(e,t){const s=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=s){const c=a[l]-s,u=this.curves[l],f=u.getLength(),h=f===0?0:1-c/f;return u.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let s=0,a=this.curves.length;s<a;s++)t+=this.curves[s].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let s;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,f=c.getPoints(u);for(let h=0;h<f.length;h++){const m=f[h];s&&s.equals(m)||(t.push(m),s=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,s=this.curves.length;t<s;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(new mc[a.type]().fromJSON(a))}return this}}class af extends IT{constructor(e){super(),this.type="Path",this.currentPoint=new $e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,s=e.length;t<s;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new $0(this.currentPoint.clone(),new $e(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,a){const l=new K0(this.currentPoint.clone(),new $e(e,t),new $e(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}bezierCurveTo(e,t,s,a,l,c){const u=new Y0(this.currentPoint.clone(),new $e(e,t),new $e(s,a),new $e(l,c));return this.curves.push(u),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),s=new Z0(t);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,s,a,l,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+u,t+f,s,a,l,c),this}absarc(e,t,s,a,l,c){return this.absellipse(e,t,s,s,a,l,c),this}ellipse(e,t,s,a,l,c,u,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,s,a,l,c,u,f),this}absellipse(e,t,s,a,l,c,u,f){const h=new Mf(e,t,s,a,l,c,u,f);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Q0 extends kn{constructor(e=1,t=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:s,thetaLength:a},t=Math.max(3,t);const l=[],c=[],u=[],f=[],h=new J,m=new $e;c.push(0,0,0),u.push(0,0,1),f.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const S=s+g/t*a;h.x=e*Math.cos(S),h.y=e*Math.sin(S),c.push(h.x,h.y,h.z),u.push(0,0,1),m.x=(c[v]/e+1)/2,m.y=(c[v+1]/e+1)/2,f.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Q0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ev extends kn{constructor(e=1,t=1,s=1,a=32,l=1,c=!1,u=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:u,thetaLength:f};const h=this;a=Math.floor(a),l=Math.floor(l);const m=[],g=[],v=[],S=[];let M=0;const w=[],y=s/2;let x=0;D(),c===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(m),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(S,2));function D(){const L=new J,z=new J;let N=0;const U=(t-e)/s;for(let I=0;I<=l;I++){const A=[],b=I/l,B=b*(t-e)+e;for(let Q=0;Q<=a;Q++){const q=Q/a,ie=q*f+u,fe=Math.sin(ie),Y=Math.cos(ie);z.x=B*fe,z.y=-b*s+y,z.z=B*Y,g.push(z.x,z.y,z.z),L.set(fe,U,Y).normalize(),v.push(L.x,L.y,L.z),S.push(q,1-b),A.push(M++)}w.push(A)}for(let I=0;I<a;I++)for(let A=0;A<l;A++){const b=w[A][I],B=w[A+1][I],Q=w[A+1][I+1],q=w[A][I+1];m.push(b,B,q),m.push(B,Q,q),N+=6}h.addGroup(x,N,0),x+=N}function T(L){const z=M,N=new $e,U=new J;let I=0;const A=L===!0?e:t,b=L===!0?1:-1;for(let Q=1;Q<=a;Q++)g.push(0,y*b,0),v.push(0,b,0),S.push(.5,.5),M++;const B=M;for(let Q=0;Q<=a;Q++){const ie=Q/a*f+u,fe=Math.cos(ie),Y=Math.sin(ie);U.x=A*Y,U.y=y*b,U.z=A*fe,g.push(U.x,U.y,U.z),v.push(0,b,0),N.x=fe*.5+.5,N.y=Y*.5*b+.5,S.push(N.x,N.y),M++}for(let Q=0;Q<a;Q++){const q=z+Q,ie=B+Q;L===!0?m.push(ie,ie+1,q):m.push(ie+1,ie,q),I+=3}h.addGroup(x,I,L===!0?1:2),x+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ev(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends af{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let s=0,a=this.holes.length;s<a;s++)t[s]=this.holes[s].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,s=this.holes.length;t<s;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(new af().fromJSON(a))}return this}}const UT={triangulate:function(i,e,t=2){const s=e&&e.length,a=s?e[0]*t:i.length;let l=tv(i,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let u,f,h,m,g,v,S;if(s&&(l=BT(i,e,l,t)),i.length>80*t){u=h=i[0],f=m=i[1];for(let M=t;M<a;M+=t)g=i[M],v=i[M+1],g<u&&(u=g),v<f&&(f=v),g>h&&(h=g),v>m&&(m=v);S=Math.max(h-u,m-f),S=S!==0?32767/S:0}return xo(l,c,t,u,f,S,0),c}};function tv(i,e,t,s,a){let l,c;if(a===JT(i,e,t,s)>0)for(l=e;l<t;l+=s)c=Bg(l,i[l],i[l+1],c);else for(l=t-s;l>=e;l-=s)c=Bg(l,i[l],i[l+1],c);return c&&wc(c,c.next)&&(yo(c),c=c.next),c}function ms(i,e){if(!i)return i;e||(e=i);let t=i,s;do if(s=!1,!t.steiner&&(wc(t,t.next)||Zt(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function xo(i,e,t,s,a,l,c){if(!i)return;!c&&l&&jT(i,s,a,l);let u=i,f,h;for(;i.prev!==i.next;){if(f=i.prev,h=i.next,l?FT(i,s,a,l):OT(i)){e.push(f.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),yo(i),i=h.next,u=h.next;continue}if(i=h,i===u){c?c===1?(i=zT(ms(i),e,t),xo(i,e,t,s,a,l,2)):c===2&&kT(i,e,t,s,a,l):xo(ms(i),e,t,s,a,l,1);break}}}function OT(i){const e=i.prev,t=i,s=i.next;if(Zt(e,t,s)>=0)return!1;const a=e.x,l=t.x,c=s.x,u=e.y,f=t.y,h=s.y,m=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,v=a>l?a>c?a:c:l>c?l:c,S=u>f?u>h?u:h:f>h?f:h;let M=s.next;for(;M!==e;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=S&&sa(a,u,l,f,c,h,M.x,M.y)&&Zt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function FT(i,e,t,s){const a=i.prev,l=i,c=i.next;if(Zt(a,l,c)>=0)return!1;const u=a.x,f=l.x,h=c.x,m=a.y,g=l.y,v=c.y,S=u<f?u<h?u:h:f<h?f:h,M=m<g?m<v?m:v:g<v?g:v,w=u>f?u>h?u:h:f>h?f:h,y=m>g?m>v?m:v:g>v?g:v,x=of(S,M,e,t,s),D=of(w,y,e,t,s);let T=i.prevZ,L=i.nextZ;for(;T&&T.z>=x&&L&&L.z<=D;){if(T.x>=S&&T.x<=w&&T.y>=M&&T.y<=y&&T!==a&&T!==c&&sa(u,m,f,g,h,v,T.x,T.y)&&Zt(T.prev,T,T.next)>=0||(T=T.prevZ,L.x>=S&&L.x<=w&&L.y>=M&&L.y<=y&&L!==a&&L!==c&&sa(u,m,f,g,h,v,L.x,L.y)&&Zt(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;T&&T.z>=x;){if(T.x>=S&&T.x<=w&&T.y>=M&&T.y<=y&&T!==a&&T!==c&&sa(u,m,f,g,h,v,T.x,T.y)&&Zt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;L&&L.z<=D;){if(L.x>=S&&L.x<=w&&L.y>=M&&L.y<=y&&L!==a&&L!==c&&sa(u,m,f,g,h,v,L.x,L.y)&&Zt(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function zT(i,e,t){let s=i;do{const a=s.prev,l=s.next.next;!wc(a,l)&&nv(a,s,s.next,l)&&_o(a,l)&&_o(l,a)&&(e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),yo(s),yo(s.next),s=i=l),s=s.next}while(s!==i);return ms(s)}function kT(i,e,t,s,a,l){let c=i;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&YT(c,u)){let f=iv(c,u);c=ms(c,c.next),f=ms(f,f.next),xo(c,e,t,s,a,l,0),xo(f,e,t,s,a,l,0);return}u=u.next}c=c.next}while(c!==i)}function BT(i,e,t,s){const a=[];let l,c,u,f,h;for(l=0,c=e.length;l<c;l++)u=e[l]*s,f=l<c-1?e[l+1]*s:i.length,h=tv(i,u,f,s,!1),h===h.next&&(h.steiner=!0),a.push(qT(h));for(a.sort(HT),l=0;l<a.length;l++)t=VT(a[l],t);return t}function HT(i,e){return i.x-e.x}function VT(i,e){const t=GT(i,e);if(!t)return e;const s=iv(t,i);return ms(s,s.next),ms(t,t.next)}function GT(i,e){let t=e,s=-1/0,a;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=l&&v>s&&(s=v,a=t.x<t.next.x?t:t.next,v===l))return a}t=t.next}while(t!==e);if(!a)return null;const u=a,f=a.x,h=a.y;let m=1/0,g;t=a;do l>=t.x&&t.x>=f&&l!==t.x&&sa(c<h?l:s,c,f,h,c<h?s:l,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(l-t.x),_o(t,i)&&(g<m||g===m&&(t.x>a.x||t.x===a.x&&WT(a,t)))&&(a=t,m=g)),t=t.next;while(t!==u);return a}function WT(i,e){return Zt(i.prev,i,e.prev)<0&&Zt(e.next,i,i.next)<0}function jT(i,e,t,s){let a=i;do a.z===0&&(a.z=of(a.x,a.y,e,t,s)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,XT(a)}function XT(i){let e,t,s,a,l,c,u,f,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,s=t,u=0,e=0;e<h&&(u++,s=s.nextZ,!!s);e++);for(f=h;u>0||f>0&&s;)u!==0&&(f===0||!s||t.z<=s.z)?(a=t,t=t.nextZ,u--):(a=s,s=s.nextZ,f--),l?l.nextZ=a:i=a,a.prevZ=l,l=a;t=s}l.nextZ=null,h*=2}while(c>1);return i}function of(i,e,t,s,a){return i=(i-t)*a|0,e=(e-s)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function qT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sa(i,e,t,s,a,l,c,u){return(a-c)*(e-u)>=(i-c)*(l-u)&&(i-c)*(s-u)>=(t-c)*(e-u)&&(t-c)*(l-u)>=(a-c)*(s-u)}function YT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$T(i,e)&&(_o(i,e)&&_o(e,i)&&KT(i,e)&&(Zt(i.prev,i,e.prev)||Zt(i,e.prev,e))||wc(i,e)&&Zt(i.prev,i,i.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wc(i,e){return i.x===e.x&&i.y===e.y}function nv(i,e,t,s){const a=ec(Zt(i,e,t)),l=ec(Zt(i,e,s)),c=ec(Zt(t,s,i)),u=ec(Zt(t,s,e));return!!(a!==l&&c!==u||a===0&&Ql(i,t,e)||l===0&&Ql(i,s,e)||c===0&&Ql(t,i,s)||u===0&&Ql(t,e,s))}function Ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function $T(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&nv(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function _o(i,e){return Zt(i.prev,i,i.next)<0?Zt(i,e,i.next)>=0&&Zt(i,i.prev,e)>=0:Zt(i,e,i.prev)<0||Zt(i,i.next,e)<0}function KT(i,e){let t=i,s=!1;const a=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==i);return s}function iv(i,e){const t=new lf(i.i,i.x,i.y),s=new lf(e.i,e.x,e.y),a=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function Bg(i,e,t,s){const a=new lf(i,e,t);return s?(a.next=s.next,a.prev=s,s.next.prev=a,s.next=a):(a.prev=a,a.next=a),a}function yo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lf(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function JT(i,e,t,s){let a=0;for(let l=e,c=t-s;l<t;l+=s)a+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return a}class ca{static area(e){const t=e.length;let s=0;for(let a=t-1,l=0;l<t;a=l++)s+=e[a].x*e[l].y-e[l].x*e[a].y;return s*.5}static isClockWise(e){return ca.area(e)<0}static triangulateShape(e,t){const s=[],a=[],l=[];Hg(e),Vg(s,e);let c=e.length;t.forEach(Hg);for(let f=0;f<t.length;f++)a.push(c),c+=t[f].length,Vg(s,t[f]);const u=UT.triangulate(s,a);for(let f=0;f<u.length;f+=3)l.push(u.slice(f,f+3));return l}}function Hg(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class rv extends kn{constructor(e=new sc([new $e(.5,.5),new $e(-.5,.5),new $e(-.5,-.5),new $e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,a=[],l=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];c(h)}this.setAttribute("position",new $t(a,3)),this.setAttribute("uv",new $t(l,2)),this.computeVertexNormals();function c(u){const f=[],h=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,w=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,D=t.UVGenerator!==void 0?t.UVGenerator:ZT;let T,L=!1,z,N,U,I;x&&(T=x.getSpacedPoints(m),L=!0,v=!1,z=x.computeFrenetFrames(m,!1),N=new J,U=new J,I=new J),v||(y=0,S=0,M=0,w=0);const A=u.extractPoints(h);let b=A.shape;const B=A.holes;if(!ca.isClockWise(b)){b=b.reverse();for(let pe=0,Se=B.length;pe<Se;pe++){const we=B[pe];ca.isClockWise(we)&&(B[pe]=we.reverse())}}const q=ca.triangulateShape(b,B),ie=b;for(let pe=0,Se=B.length;pe<Se;pe++){const we=B[pe];b=b.concat(we)}function fe(pe,Se,we){return Se||console.error("THREE.ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(Se,we)}const Y=b.length,me=q.length;function W(pe,Se,we){let Ee,Te,Le;const be=pe.x-Se.x,Xe=pe.y-Se.y,F=we.x-pe.x,P=we.y-pe.y,se=be*be+Xe*Xe,ye=be*P-Xe*F;if(Math.abs(ye)>Number.EPSILON){const ge=Math.sqrt(se),Me=Math.sqrt(F*F+P*P),je=Se.x-Xe/ge,Ce=Se.y+be/ge,Ue=we.x-P/Me,nt=we.y+F/Me,Ae=((Ue-je)*P-(nt-Ce)*F)/(be*P-Xe*F);Ee=je+be*Ae-pe.x,Te=Ce+Xe*Ae-pe.y;const We=Ee*Ee+Te*Te;if(We<=2)return new $e(Ee,Te);Le=Math.sqrt(We/2)}else{let ge=!1;be>Number.EPSILON?F>Number.EPSILON&&(ge=!0):be<-Number.EPSILON?F<-Number.EPSILON&&(ge=!0):Math.sign(Xe)===Math.sign(P)&&(ge=!0),ge?(Ee=-Xe,Te=be,Le=Math.sqrt(se)):(Ee=be,Te=Xe,Le=Math.sqrt(se/2))}return new $e(Ee/Le,Te/Le)}const ee=[];for(let pe=0,Se=ie.length,we=Se-1,Ee=pe+1;pe<Se;pe++,we++,Ee++)we===Se&&(we=0),Ee===Se&&(Ee=0),ee[pe]=W(ie[pe],ie[we],ie[Ee]);const ne=[];let O,$=ee.concat();for(let pe=0,Se=B.length;pe<Se;pe++){const we=B[pe];O=[];for(let Ee=0,Te=we.length,Le=Te-1,be=Ee+1;Ee<Te;Ee++,Le++,be++)Le===Te&&(Le=0),be===Te&&(be=0),O[Ee]=W(we[Ee],we[Le],we[be]);ne.push(O),$=$.concat(O)}for(let pe=0;pe<y;pe++){const Se=pe/y,we=S*Math.cos(Se*Math.PI/2),Ee=M*Math.sin(Se*Math.PI/2)+w;for(let Te=0,Le=ie.length;Te<Le;Te++){const be=fe(ie[Te],ee[Te],Ee);_e(be.x,be.y,-we)}for(let Te=0,Le=B.length;Te<Le;Te++){const be=B[Te];O=ne[Te];for(let Xe=0,F=be.length;Xe<F;Xe++){const P=fe(be[Xe],O[Xe],Ee);_e(P.x,P.y,-we)}}}const Pe=M+w;for(let pe=0;pe<Y;pe++){const Se=v?fe(b[pe],$[pe],Pe):b[pe];L?(U.copy(z.normals[0]).multiplyScalar(Se.x),N.copy(z.binormals[0]).multiplyScalar(Se.y),I.copy(T[0]).add(U).add(N),_e(I.x,I.y,I.z)):_e(Se.x,Se.y,0)}for(let pe=1;pe<=m;pe++)for(let Se=0;Se<Y;Se++){const we=v?fe(b[Se],$[Se],Pe):b[Se];L?(U.copy(z.normals[pe]).multiplyScalar(we.x),N.copy(z.binormals[pe]).multiplyScalar(we.y),I.copy(T[pe]).add(U).add(N),_e(I.x,I.y,I.z)):_e(we.x,we.y,g/m*pe)}for(let pe=y-1;pe>=0;pe--){const Se=pe/y,we=S*Math.cos(Se*Math.PI/2),Ee=M*Math.sin(Se*Math.PI/2)+w;for(let Te=0,Le=ie.length;Te<Le;Te++){const be=fe(ie[Te],ee[Te],Ee);_e(be.x,be.y,g+we)}for(let Te=0,Le=B.length;Te<Le;Te++){const be=B[Te];O=ne[Te];for(let Xe=0,F=be.length;Xe<F;Xe++){const P=fe(be[Xe],O[Xe],Ee);L?_e(P.x,P.y+T[m-1].y,T[m-1].x+we):_e(P.x,P.y,g+we)}}}Z(),re();function Z(){const pe=a.length/3;if(v){let Se=0,we=Y*Se;for(let Ee=0;Ee<me;Ee++){const Te=q[Ee];Ne(Te[2]+we,Te[1]+we,Te[0]+we)}Se=m+y*2,we=Y*Se;for(let Ee=0;Ee<me;Ee++){const Te=q[Ee];Ne(Te[0]+we,Te[1]+we,Te[2]+we)}}else{for(let Se=0;Se<me;Se++){const we=q[Se];Ne(we[2],we[1],we[0])}for(let Se=0;Se<me;Se++){const we=q[Se];Ne(we[0]+Y*m,we[1]+Y*m,we[2]+Y*m)}}s.addGroup(pe,a.length/3-pe,0)}function re(){const pe=a.length/3;let Se=0;ce(ie,Se),Se+=ie.length;for(let we=0,Ee=B.length;we<Ee;we++){const Te=B[we];ce(Te,Se),Se+=Te.length}s.addGroup(pe,a.length/3-pe,1)}function ce(pe,Se){let we=pe.length;for(;--we>=0;){const Ee=we;let Te=we-1;Te<0&&(Te=pe.length-1);for(let Le=0,be=m+y*2;Le<be;Le++){const Xe=Y*Le,F=Y*(Le+1),P=Se+Ee+Xe,se=Se+Te+Xe,ye=Se+Te+F,ge=Se+Ee+F;ke(P,se,ye,ge)}}}function _e(pe,Se,we){f.push(pe),f.push(Se),f.push(we)}function Ne(pe,Se,we){Be(pe),Be(Se),Be(we);const Ee=a.length/3,Te=D.generateTopUV(s,a,Ee-3,Ee-2,Ee-1);V(Te[0]),V(Te[1]),V(Te[2])}function ke(pe,Se,we,Ee){Be(pe),Be(Se),Be(Ee),Be(Se),Be(we),Be(Ee);const Te=a.length/3,Le=D.generateSideWallUV(s,a,Te-6,Te-3,Te-2,Te-1);V(Le[0]),V(Le[1]),V(Le[3]),V(Le[1]),V(Le[2]),V(Le[3])}function Be(pe){a.push(f[pe*3+0]),a.push(f[pe*3+1]),a.push(f[pe*3+2])}function V(pe){l.push(pe.x),l.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,s=this.parameters.options;return QT(t,s,e)}static fromJSON(e,t){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const u=t[e.shapes[l]];s.push(u)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new mc[a.type]().fromJSON(a)),new rv(s,e.options)}}const ZT={generateTopUV:function(i,e,t,s,a){const l=e[t*3],c=e[t*3+1],u=e[s*3],f=e[s*3+1],h=e[a*3],m=e[a*3+1];return[new $e(l,c),new $e(u,f),new $e(h,m)]},generateSideWallUV:function(i,e,t,s,a,l){const c=e[t*3],u=e[t*3+1],f=e[t*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[a*3],S=e[a*3+1],M=e[a*3+2],w=e[l*3],y=e[l*3+1],x=e[l*3+2];return Math.abs(u-m)<Math.abs(c-h)?[new $e(c,1-f),new $e(h,1-g),new $e(v,1-M),new $e(w,1-x)]:[new $e(u,1-f),new $e(m,1-g),new $e(S,1-M),new $e(y,1-x)]}};function QT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let s=0,a=i.length;s<a;s++){const l=i[s];t.shapes.push(l.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sv extends kn{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const f=Math.min(c+u,Math.PI);let h=0;const m=[],g=new J,v=new J,S=[],M=[],w=[],y=[];for(let x=0;x<=s;x++){const D=[],T=x/s;let L=0;x===0&&c===0?L=.5/t:x===s&&f===Math.PI&&(L=-.5/t);for(let z=0;z<=t;z++){const N=z/t;g.x=-e*Math.cos(a+N*l)*Math.sin(c+T*u),g.y=e*Math.cos(c+T*u),g.z=e*Math.sin(a+N*l)*Math.sin(c+T*u),M.push(g.x,g.y,g.z),v.copy(g).normalize(),w.push(v.x,v.y,v.z),y.push(N+L,1-T),D.push(h++)}m.push(D)}for(let x=0;x<s;x++)for(let D=0;D<t;D++){const T=m[x][D+1],L=m[x][D],z=m[x+1][D],N=m[x+1][D+1];(x!==0||c>0)&&S.push(T,L,N),(x!==s-1||f<Math.PI)&&S.push(L,z,N)}this.setIndex(S),this.setAttribute("position",new $t(M,3)),this.setAttribute("normal",new $t(w,3)),this.setAttribute("uv",new $t(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sv(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class av extends kn{constructor(e=new J0(new J(-1,-1,0),new J(-1,1,0),new J(1,1,0)),t=64,s=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const u=new J,f=new J,h=new $e;let m=new J;const g=[],v=[],S=[],M=[];w(),this.setIndex(M),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(S,2));function w(){for(let T=0;T<t;T++)y(T);y(l===!1?t:0),D(),x()}function y(T){m=e.getPointAt(T/t,m);const L=c.normals[T],z=c.binormals[T];for(let N=0;N<=a;N++){const U=N/a*Math.PI*2,I=Math.sin(U),A=-Math.cos(U);f.x=A*L.x+I*z.x,f.y=A*L.y+I*z.y,f.z=A*L.z+I*z.z,f.normalize(),v.push(f.x,f.y,f.z),u.x=m.x+s*f.x,u.y=m.y+s*f.y,u.z=m.z+s*f.z,g.push(u.x,u.y,u.z)}}function x(){for(let T=1;T<=t;T++)for(let L=1;L<=a;L++){const z=(a+1)*(T-1)+(L-1),N=(a+1)*T+(L-1),U=(a+1)*T+L,I=(a+1)*(T-1)+L;M.push(z,N,I),M.push(N,U,I)}}function D(){for(let T=0;T<=t;T++)for(let L=0;L<=a;L++)h.x=T/t,h.y=L/a,S.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new av(new mc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class W2 extends kn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],s=new Set,a=new J,l=new J;if(e.index!==null){const c=e.attributes.position,u=e.index;let f=e.groups;f.length===0&&(f=[{start:0,count:u.count,materialIndex:0}]);for(let h=0,m=f.length;h<m;++h){const g=f[h],v=g.start,S=g.count;for(let M=v,w=v+S;M<w;M+=3)for(let y=0;y<3;y++){const x=u.getX(M+y),D=u.getX(M+(y+1)%3);a.fromBufferAttribute(c,x),l.fromBufferAttribute(c,D),Gg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}}else{const c=e.attributes.position;for(let u=0,f=c.count/3;u<f;u++)for(let h=0;h<3;h++){const m=3*u+h,g=3*u+(h+1)%3;a.fromBufferAttribute(c,m),l.fromBufferAttribute(c,g),Gg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new $t(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Gg(i,e,t){const s=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(s)===!0||t.has(a)===!0?!1:(t.add(s),t.add(a),!0)}class j2 extends vs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ct(16777215),this.specular=new Ct(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class X2 extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Wg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class e2{constructor(e,t,s){const a=this;let l=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){u++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,u),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,u),c===u&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const S=h[g],M=h[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const t2=new e2;class wf{constructor(e){this.manager=e!==void 0?e:t2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wf.DEFAULT_MATERIAL_NAME="__DEFAULT";class n2 extends wf{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Wg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const u=vo("img");function f(){m(),Wg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){m(),a&&a(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),l.manager.itemStart(e),u.src=e,u}}class i2 extends wf{constructor(e){super(e)}load(e,t,s,a){const l=new Pn,c=new n2(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){l.image=u,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class ov extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xd=new Bt,jg=new J,Xg=new J;class r2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yf,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;jg.setFromMatrixPosition(e.matrixWorld),t.position.copy(jg),Xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xg),t.updateMatrixWorld(),Xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s2 extends r2{constructor(){super(new k0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class q2 extends ov{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new s2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Y2 extends ov{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $2 extends kn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class K2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qg(){return(typeof performance>"u"?Date:performance).now()}class J2 extends _T{constructor(e,t,s=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Yg=new Bt;class Z2{constructor(e,t,s=0,a=1/0){this.ray=new xf(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new _f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yg),this}intersectObject(e,t=!0,s=[]){return cf(e,this,s,t),s.sort($g),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)cf(e[a],this,s,t);return s.sort($g),s}}function $g(i,e){return i.distance-e.distance}function cf(i,e,t,s){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=i.children;for(let c=0,u=l.length;c<u;c++)cf(l[c],e,t,!0)}}class Q2{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(un(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Kg=new J,tc=new J;class eA{constructor(e=new J,t=new J){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Kg.subVectors(e,this.start),tc.subVectors(this.end,this.start);const s=tc.dot(tc);let l=tc.dot(Kg)/s;return t&&(l=un(l,0,1)),l}closestPointToPoint(e,t,s){const a=this.closestPointToPointParameter(e,t);return this.delta(s).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class tA{constructor(){this.type="ShapePath",this.color=new Ct,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new af,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,s,a){return this.currentPath.quadraticCurveTo(e,t,s,a),this}bezierCurveTo(e,t,s,a,l,c){return this.currentPath.bezierCurveTo(e,t,s,a,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const D=[];for(let T=0,L=x.length;T<L;T++){const z=x[T],N=new sc;N.curves=z.curves,D.push(N)}return D}function s(x,D){const T=D.length;let L=!1;for(let z=T-1,N=0;N<T;z=N++){let U=D[z],I=D[N],A=I.x-U.x,b=I.y-U.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(U=D[N],A=-A,I=D[z],b=-b),x.y<U.y||x.y>I.y)continue;if(x.y===U.y){if(x.x===U.x)return!0}else{const B=b*(x.x-U.x)-A*(x.y-U.y);if(B===0)return!0;if(B<0)continue;L=!L}}else{if(x.y!==U.y)continue;if(I.x<=x.x&&x.x<=U.x||U.x<=x.x&&x.x<=I.x)return!0}}return L}const a=ca.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,u,f;const h=[];if(l.length===1)return u=l[0],f=new sc,f.curves=u.curves,h.push(f),h;let m=!a(l[0].getPoints());m=e?!m:m;const g=[],v=[];let S=[],M=0,w;v[M]=void 0,S[M]=[];for(let x=0,D=l.length;x<D;x++)u=l[x],w=u.getPoints(),c=a(w),c=e?!c:c,c?(!m&&v[M]&&M++,v[M]={s:new sc,p:w},v[M].s.curves=u.curves,m&&M++,S[M]=[]):S[M].push({h:u,p:w[0]});if(!v[0])return t(l);if(v.length>1){let x=!1,D=0;for(let T=0,L=v.length;T<L;T++)g[T]=[];for(let T=0,L=v.length;T<L;T++){const z=S[T];for(let N=0;N<z.length;N++){const U=z[N];let I=!0;for(let A=0;A<v.length;A++)s(U.p,v[A].p)&&(T!==A&&D++,I?(I=!1,g[A].push(U)):x=!0);I&&g[T].push(U)}}D>0&&x===!1&&(S=g)}let y;for(let x=0,D=v.length;x<D;x++){f=v[x].s,h.push(f),y=S[x];for(let T=0,L=y.length;T<L;T++)f.holes.push(y[T].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);const Jg=i=>{const e=i.getUTCFullYear(),t=Date.UTC(e+1,0,1)-Date.UTC(e,0,1)===366*864e5?366:365,s=Math.floor((Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate())-Date.UTC(i.getUTCFullYear(),0,0))/864e5),a=i.getUTCHours()*60+i.getUTCMinutes()+i.getUTCSeconds()/60,l=2*Math.PI*(s-1+(a/60-12)/24)/t,c=.006918-.399912*Math.cos(l)+.070257*Math.sin(l)-.006758*Math.cos(2*l)+907e-6*Math.sin(2*l)-.002697*Math.cos(3*l)+.00148*Math.sin(3*l),u=229.18*(75e-6+.001868*Math.cos(l)-.032077*Math.sin(l)-.014615*Math.cos(2*l)-.040849*Math.sin(2*l)),f=(720-(a+u))/4*(Math.PI/180);return new J(Math.cos(c)*Math.sin(f),Math.sin(c),Math.cos(c)*Math.cos(f)).normalize()},a2=()=>"/pr-preview/pr-71/data/clouds/latest.png",o2=-Math.PI/2,l2=.18,qd=i=>i.clone().applyAxisAngle(new J(0,1,0),-o2),c2=({globe:i,time:e,getTime:t,nightEnabled:s,cloudsEnabled:a,cloudVersion:l=""})=>{const c=de.useMemo(()=>{const D=new q0(new Uint8Array([255,255,255,0]),1,1,bi);return D.needsUpdate=!0,D},[]),u=de.useRef({sunDirection:{value:new J},enabled:{value:1}}),f=de.useRef({map:{value:c},enabled:{value:0},opacity:{value:l2}}),h=de.useRef(null),m=e.getTime(),g=de.useMemo(()=>Jg(new Date(m)),[m]),v=de.useMemo(()=>{const D=a2();return l?`${D}${D.includes("?")?"&":"?"}v=${encodeURIComponent(l)}`:D},[l]),S=de.useRef(g),M=de.useRef(e),w=de.useRef(t),y=!!t,x=de.useRef(s);return S.current=g,M.current=e,w.current=t,x.current=s,de.useEffect(()=>{if(!i)return;const D=[];i.scene().traverse(b=>{const B=b;D.length===0&&B.type==="Mesh"&&B.__globeObjType==="globe"&&D.push(B)});const T=D[0];if(!T)return;const L=T.material;if(Array.isArray(L)||L.type!=="MeshPhongMaterial")return;const z=L,N=z.onBeforeCompile,U=z.customProgramCacheKey,I=u.current,A=f.current;return I.sunDirection.value.copy(qd(S.current)),I.enabled.value=x.current?1:0,z.onBeforeCompile=(b,B)=>{N.call(z,b,B),b.uniforms.orbitradarSunDirection=I.sunDirection,b.uniforms.orbitradarNightEnabled=I.enabled,b.uniforms.orbitradarCloudMap=A.map,b.uniforms.orbitradarCloudEnabled=A.enabled,b.uniforms.orbitradarCloudOpacity=A.opacity,b.vertexShader=b.vertexShader.replace("#include <common>",`#include <common>
varying vec3 orbitradarSurfaceNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
orbitradarSurfaceNormal = normalize(objectNormal);`),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
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
// The NOAA field is total coverage, not cloud albedo. Decode its deliberately
// softened alpha back into a coverage estimate, then let solar illumination
// determine the visible cloud brightness.
float orbitradarCloudCoverage = clamp(pow(orbitradarCloudSample.a / 0.824, 0.82), 0.0, 1.0);
float orbitradarCloudDensity = smoothstep(0.08, 0.92, orbitradarCloudCoverage);
vec3 orbitradarCloudNightColor = vec3(0.025, 0.04, 0.075);
vec3 orbitradarCloudDayColor = vec3(1.0, 1.0, 0.98);
float orbitradarCloudSunlight = smoothstep(-0.16, 0.24, orbitradarDaylight);
vec3 orbitradarCloudColor = mix(orbitradarCloudNightColor, orbitradarCloudDayColor, mix(1.0, orbitradarCloudSunlight, orbitradarNightEnabled));
float orbitradarCloudAlpha = orbitradarCloudDensity * orbitradarCloudOpacity * orbitradarCloudEnabled;
outgoingLight = mix(outgoingLight, orbitradarCloudColor, orbitradarCloudAlpha);
#include <opaque_fragment>`)},z.customProgramCacheKey=()=>`${U.call(z)}-orbitradar-cloud-surface-v3`,z.needsUpdate=!0,()=>{z.onBeforeCompile=N,z.customProgramCacheKey=U,z.needsUpdate=!0}},[i]),de.useEffect(()=>{const D=u.current;D.enabled.value=s?1:0,D.sunDirection.value.copy(qd(g))},[s,g]),de.useEffect(()=>{if(!y||typeof window.requestAnimationFrame!="function")return;let D=0;const T=()=>{var N;const L=((N=w.current)==null?void 0:N.call(w))??M.current,z=Jg(L);u.current.enabled.value=x.current?1:0,u.current.sunDirection.value.copy(qd(z)),D=window.requestAnimationFrame(T)};return D=window.requestAnimationFrame(T),()=>window.cancelAnimationFrame(D)},[y]),de.useEffect(()=>{const D=()=>{h.current&&(h.current.dispose(),h.current=null),f.current.map.value=c,f.current.enabled.value=0};if(!i||!a){D();return}const T=new i2;T.setCrossOrigin("anonymous");let L=!1;return T.load(v,z=>{if(L||!i){z.dispose();return}z.colorSpace=wi,z.wrapS=oc,z.wrapT=Dr,z.minFilter=Ir,z.magFilter=hi,z.generateMipmaps=!0,z.anisotropy=Math.min(4,i.renderer().capabilities.getMaxAnisotropy()),z.needsUpdate=!0;const N=h.current;h.current=z,f.current.map.value=z,f.current.enabled.value=1,N&&(typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(()=>N.dispose()):N.dispose())},void 0,()=>{}),()=>{L=!0}},[i,a,v,c]),de.useEffect(()=>()=>{var D;(D=h.current)==null||D.dispose(),h.current=null,c.dispose()},[c]),null},u2=(i,e)=>{const t=s=>{s.preventDefault(),e()};return i.addEventListener("webglcontextlost",t),()=>i.removeEventListener("webglcontextlost",t)},d2=({isPaused:i,isTimeLapseActive:e,getTime:t})=>{const[s,a]=de.useState(()=>t()),l=de.useRef(t);l.current=t,de.useEffect(()=>{const f=()=>{const m=l.current();a(g=>g.getTime()===m.getTime()?g:m)};f();const h=window.setInterval(f,100);return()=>window.clearInterval(h)},[]);const c=e?`.${Math.floor(s.getUTCMilliseconds()/100)}`:"",u=i?"Paused local":e?"Simulation local":"Live local";return k.jsx("div",{className:"pointer-events-none absolute right-3 top-[max(0.75rem,env(safe-area-inset-top))] z-20 rounded-lg border border-white/15 bg-slate-950/75 px-2.5 py-1.5 text-right text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5",children:k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("p",{className:"hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:block",children:u}),k.jsxs("time",{className:"text-[11px] font-semibold tabular-nums sm:text-xs",dateTime:s.toISOString(),children:[k.jsxs("span",{className:"sm:hidden",children:[s.toLocaleTimeString(void 0,{timeStyle:"medium"}),c]}),k.jsxs("span",{className:"hidden sm:inline",children:[s.toLocaleString(void 0,{dateStyle:"short",timeStyle:"medium"}),c]})]})]})})},gc={fresh:"text-emerald-300",delayed:"text-amber-300",stale:"text-rose-300",unavailable:"text-slate-400"},uf=({status:i})=>k.jsx("span",{"aria-hidden":"true",className:`inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-current ${gc[i.level]}`}),Zg=({name:i,status:e})=>k.jsxs("span",{className:"inline-flex min-w-0 items-center gap-1.5",children:[k.jsx(uf,{status:e}),k.jsx("span",{className:"truncate",children:i}),k.jsx("span",{className:gc[e.level],children:e.label}),k.jsxs("span",{className:"text-slate-500",children:["· ",e.relativeAge]})]}),Qg=({satellite:i,cloud:e,compact:t=!1})=>t?k.jsxs("div",{"aria-label":"Data freshness",className:"flex flex-wrap gap-x-3 gap-y-1 text-[0.68rem] font-semibold text-slate-300",children:[k.jsx(Zg,{name:"Satellites",status:i}),k.jsx(Zg,{name:"Clouds",status:e})]}):k.jsxs("section",{"aria-label":"Data freshness",className:"mt-4 rounded-xl border border-white/10 bg-white/5 p-3",children:[k.jsx("h3",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300",children:"Data freshness"}),k.jsxs("dl",{className:"mt-3 space-y-3 text-xs",children:[k.jsxs("div",{children:[k.jsxs("dt",{className:"flex items-center gap-2 font-semibold text-slate-200",children:[k.jsx(uf,{status:i})," Satellite catalog",k.jsx("span",{className:gc[i.level],children:i.label})]}),k.jsx("dd",{className:"mt-1 pl-3.5 text-slate-400",children:i.sourceTimestamp?`${i.relativeAge} · updated ${i.localTime}`:"No published snapshot timestamp available"})]}),k.jsxs("div",{children:[k.jsxs("dt",{className:"flex items-center gap-2 font-semibold text-slate-200",children:[k.jsx(uf,{status:e})," Cloud analysis",k.jsx("span",{className:gc[e.level],children:e.label})]}),k.jsxs("dd",{className:"mt-1 pl-3.5 text-slate-400",children:[e.sourceTimestamp?`${e.relativeAge} · valid ${e.localTime}`:"No published cloud analysis timestamp available",e.modelCycle&&k.jsxs("span",{className:"block text-slate-500",children:["NOAA cycle ",e.modelCycle]}),e.publishedAt&&k.jsxs("span",{className:"block text-slate-500",children:["Published ",new Date(e.publishedAt).toLocaleString()]})]})]})]})]}),f2=i=>new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"}).format(new Date(i)),h2=(i,e=Date.now())=>{if(!i)return"unavailable";const t=Date.parse(i);if(Number.isNaN(t))return"unavailable";const s=Math.max(0,e-t),a=Math.floor(s/6e4);if(a<1)return"just now";if(a<60)return`${a} min ago`;const l=Math.floor(a/60);return l<24?`${l}h ago`:`${Math.floor(l/24)}d ago`},e0=({timestamp:i,publisherState:e,maxAgeMs:t,now:s=Date.now(),publishedAt:a=null,modelCycle:l=null})=>{const c=i?Date.parse(i):Number.NaN,u=i&&!Number.isNaN(c)?i:null,f=e!==void 0&&e!=="ready",h=u?Math.max(0,s-Date.parse(u)):Number.POSITIVE_INFINITY,m=u?f?"stale":h<=t?"fresh":"delayed":"unavailable";return{level:m,label:m==="fresh"?"Fresh":m==="delayed"?"Delayed":m==="stale"?"Stale":"Unavailable",relativeAge:h2(u,s),localTime:u?f2(u):null,sourceTimestamp:u,publishedAt:a,modelCycle:l,publisherState:e}},p2=60*60*1e3,m2=60*1e3,g2=void 0,t0="/pr-preview/pr-71/data/cloud-status.json",v2=i=>i==="ready"||i==="paused"||i==="error"||i==="stale"?i:void 0,n0=i=>typeof i=="string"&&!Number.isNaN(Date.parse(i))?i:null,x2=(i,e)=>{if(!i||typeof i!="object")return null;const t=i;return!e&&t.sourceId!=="noaa-gfs-tcc"?null:{state:v2(t.state),sourceId:typeof t.sourceId=="string"?t.sourceId:void 0,fetchedAt:n0(t.fetchedAt),validAt:n0(t.validAt),modelCycle:typeof t.modelCycle=="string"?t.modelCycle:null}},_2=async i=>{if(!i)return null;try{const e=await fetch(i,{cache:"no-cache"});return e.ok?await e.json():null}catch{return null}},y2=(i,e=null)=>{const[t,s]=de.useState(null),[a,l]=de.useState(()=>Date.now()),c=de.useCallback(async()=>{const u=await _2(t0),f=x2(u,!!g2);f&&s(f)},[]);return de.useEffect(()=>{if(!t0)return;c();const u=window.setInterval(c,p2),f=()=>{document.hidden||c()};return document.addEventListener("visibilitychange",f),()=>{window.clearInterval(u),document.removeEventListener("visibilitychange",f)}},[c]),de.useEffect(()=>{const u=window.setInterval(()=>l(Date.now()),m2);return()=>window.clearInterval(u)},[]),de.useMemo(()=>({satellite:e0({timestamp:i??(e==null?void 0:e.fetchedAt)??null,publisherState:e==null?void 0:e.state,maxAgeMs:4*60*60*1e3,now:a}),cloud:e0({timestamp:(t==null?void 0:t.validAt)??null,publisherState:t==null?void 0:t.state,maxAgeMs:12*60*60*1e3,now:a,publishedAt:(t==null?void 0:t.fetchedAt)??null,modelCycle:(t==null?void 0:t.modelCycle)??null}),cloudVersion:(t==null?void 0:t.fetchedAt)??""}),[e,t,a,i])},Yd=12,$d=50,S2="#ffd166",M2=1.8,E2=()=>"rgba(255, 165, 0, 0.9)",w2=()=>S2,T2=de.lazy(()=>s0(()=>import("./react-globe.gl-BhGe8ydJ.js"),[])),A2=de.lazy(()=>s0(()=>import("./SatelliteMarkers-1JAWhqqy.js"),[])),b2=()=>{const i=de.useRef(),e=de.useRef(null),[t,s]=de.useState(!1),[a,l]=de.useState({width:0,height:0}),[c,u]=de.useState(!1),[f,h]=de.useState(0),{settings:m,updateSetting:g,resetSettings:v}=H_();de.useLayoutEffect(()=>{const E=e.current;if(!E)return;const j=()=>{const ae=E.getBoundingClientRect();l({width:Math.max(0,Math.floor(ae.width)),height:Math.max(0,Math.floor(ae.height))})};if(j(),typeof ResizeObserver>"u")return window.addEventListener("resize",j),()=>window.removeEventListener("resize",j);const oe=new ResizeObserver(j);return oe.observe(E),()=>oe.disconnect()},[]),de.useEffect(()=>{var j;const E=(j=e.current)==null?void 0:j.querySelector("canvas");if(E)return u2(E,()=>{u(!0),s(!1)})},[t,f]),de.useEffect(()=>{const E=i.current;if(!t||!E)return;const j=()=>{document.hidden?E.pauseAnimation():E.resumeAnimation()};return j(),document.addEventListener("visibilitychange",j),()=>document.removeEventListener("visibilitychange",j)},[t,f]);const{trackedSatellites:S,selectedNoradId:M,isLoading:w,statusMessage:y,sourceUpdatedAt:x,publisherStatus:D,selectSatellite:T,clearSelection:L,refreshCatalog:z}=R_(m),N=y2(x,D),U=z_(),{satellitePositions:I,selectedPosition:A,orbitPoints:b,snapshotVersion:B,showOrbit:Q,setShowOrbit:q,followSelected:ie,setFollowSelected:fe}=N_(S,M,U.currentTime,U.getEffectiveTime),{userLocation:Y,locateUser:me,clearUserLocation:W}=I_(),{favorites:ee,isFavorite:ne,toggleFavorite:O,clearFavorites:$}=U_(),{isTimeLapseActive:Pe,isPaused:Z,speed:re,speeds:ce,toggleTimeLapse:_e,setTimeLapseSpeed:Ne,resetTime:ke,getSpeedLabel:Be,getTimeOffsetDisplay:V}=U,{trackedNoradIds:pe,isTracked:Se,toggleTracked:we,clearTracked:Ee,getTrackedColor:Te}=k_(I),{passes:Le,isCalculating:be,error:Xe,calculateForSelected:F,calculateForTracked:P,clearPasses:se}=B_(S,Y,U.currentTime),[ye,ge]=de.useState(""),[Me,je]=de.useState(()=>typeof window.matchMedia=="function"?window.matchMedia("(min-width: 640px)").matches:!0),[Ce,Ue]=de.useState("catalog"),[nt,Ae]=de.useState(!1),[We,C]=de.useState(!1),[Je,Fe]=de.useState(!1),[ut,ot]=de.useState(!1),[dt,G]=de.useState(!1),[Ge,ve]=de.useState(null),[xe,De]=de.useState(0),[Ye,gt]=de.useState(m.defaultAltitudeFilter),Et=lo(We,()=>C(!1)),bt=lo(Je,()=>Fe(!1)),mt=lo(nt,()=>Ae(!1));de.useEffect(()=>{var E,j;!ie||!A||(j=i.current)==null||j.pointOfView({lat:A.lat,lng:A.lng,altitude:Math.max(2.1,A.alt*.75+1.5)},(E=window.matchMedia)!=null&&E.call(window,"(prefers-reduced-motion: reduce)").matches?0:120)},[ie,A]),de.useEffect(()=>{gt(m.defaultAltitudeFilter)},[m.defaultAltitudeFilter]),de.useEffect(()=>{q(m.showOrbitsByDefault)},[m.showOrbitsByDefault,q]);const Tt=de.useMemo(()=>Ye==="none"?[]:Ye==="all"?S:S.filter(E=>{const j=m0(E.periodSeconds);return g0(j)===Ye}),[S,Ye]);de.useEffect(()=>{Ye==="none"&&(T(null),fe(!1),q(!1),se(),ot(!1))},[Ye,se,T,fe,q]);const zt=de.useMemo(()=>{const E=ye.trim().toLowerCase(),j=Tt;if(!E){const oe=[25544,20580,25994,33591];return j.filter(ae=>oe.includes(ae.noradId)).slice(0,Yd)}return j.filter(oe=>oe.name.toLowerCase().includes(E)||oe.noradId.toString().includes(E)).slice(0,Yd)},[Tt,ye]),It=de.useMemo(()=>S.filter(E=>ee.includes(E.noradId)),[S,ee]),He=de.useMemo(()=>[...Tt].sort((E,j)=>E.name.localeCompare(j.name)),[Tt]),Vt=Math.max(1,Math.ceil(He.length/$d)),rn=He.slice(xe*$d,(xe+1)*$d),Qt=E=>{T(E),q(m.showOrbitsByDefault)},yt=()=>{L(),fe(!1),q(!1),se(),ot(!1)},hn=()=>{const E=S.find(j=>j.noradId===M);return E?E.name:(A==null?void 0:A.name)??"Unknown"},Nn=()=>{A&&(F(A.noradId),ot(!0))},Bn=de.useMemo(()=>I.filter(E=>Ye==="all"||E.altitudeClass===Ye),[I,Ye]),Dn=de.useMemo(()=>Y?[Y]:[],[Y]),yn=de.useMemo(()=>Ye!=="none"&&b.length>0?[{points:b}]:[],[Ye,b]),Rt=Ce==="favorites"?It:Ce==="tracked"?S.filter(E=>pe.includes(E.noradId)):zt;return k.jsxs("div",{className:"relative h-full w-full overflow-hidden bg-black sm:flex",children:[k.jsx("div",{ref:e,className:`absolute inset-0 z-0 ${Me?"sm:left-[22.5rem]":"sm:left-0"}`,children:c?k.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[k.jsx("p",{className:"text-lg font-bold",children:"The globe lost its graphics context."}),k.jsx("p",{className:"text-sm text-slate-300",children:"The satellite explorer remains available."}),k.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:()=>{u(!1),s(!1),h(E=>E+1)},type:"button",children:"Retry globe"})]}):k.jsx(V_,{onRetry:()=>{s(!1),h(E=>E+1)},children:k.jsxs(de.Suspense,{fallback:k.jsx("div",{role:"status",className:"flex h-full items-center justify-center text-cyan-200",children:"Loading globe…"}),children:[a.width>0&&a.height>0&&k.jsx(T2,{ref:i,width:a.width,height:a.height,onGlobeReady:()=>{const E=i.current;if(!E)return;E.renderer().setPixelRatio(j_(window.devicePixelRatio));const j=E.controls();j.enableDamping=!0,j.dampingFactor=.08,s(!0),E.pointOfView({altitude:3.2})},enablePointerInteraction:!1,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",backgroundColor:"black",showAtmosphere:!0,labelsData:Dn,labelLat:"lat",labelLng:"lng",labelText:"name",labelColor:E2,labelSize:1,labelDotRadius:.5,pathsData:yn,pathPoints:"points",pathPointLat:"lat",pathPointLng:"lng",pathPointAlt:"alt",pathColor:w2,pathStroke:M2,pathTransitionDuration:0}),t&&k.jsx(c2,{globe:i.current??null,time:U.currentTime,getTime:U.getEffectiveTime,nightEnabled:m.nightShading??!0,cloudsEnabled:m.cloudCover??!0,cloudVersion:N.cloudVersion}),t&&k.jsx(de.Suspense,{fallback:null,children:k.jsx(A2,{globe:i.current??null,positions:Bn,snapshotVersion:B,selectedNoradId:M,trackedNoradIds:pe,getTrackedColor:Te,onSelect:T})})]})},f)}),k.jsx(d2,{isPaused:Z,isTimeLapseActive:Pe,getTime:U.getEffectiveTime}),!Me&&!We&&!Je&&!ut&&!dt&&k.jsxs("section",{className:"absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 right-3 z-20 rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-auto sm:w-96",children:[k.jsxs("div",{className:"flex items-center justify-between gap-4",children:[k.jsxs("div",{className:"min-w-0",children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),k.jsxs("p",{className:"mt-1 text-xl font-bold",children:[Tt.length.toLocaleString()," satellites"]})]}),k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20","aria-expanded":Me,onClick:()=>je(!0),type:"button",children:"Open panel"})]}),k.jsx(Qg,{satellite:N.satellite,cloud:N.cloud,compact:!0}),k.jsx("p",{className:"mt-2 hidden line-clamp-2 text-sm text-slate-400 sm:block",children:y}),k.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Orbital data:"," ",k.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),k.jsxs("div",{className:"mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0",children:[k.jsxs("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>C(!0),type:"button",children:["Favorites (",ee.length,")"]}),k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>Fe(!0),type:"button",children:"Time Lapse"}),Y&&A&&k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Nn,type:"button",children:"Predict Pass"}),k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>G(!0),type:"button",children:"Settings"})]})]}),Me&&k.jsxs("aside",{className:"absolute bottom-0 left-0 right-0 z-30 h-[42dvh] max-h-[28rem] overflow-y-auto rounded-t-2xl border border-white/15 bg-slate-950/95 p-4 pb-[max(2rem,env(safe-area-inset-bottom))] text-left text-white shadow-2xl backdrop-blur-xl sm:relative sm:h-full sm:max-h-full sm:w-[22.5rem] sm:shrink-0 sm:rounded-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r sm:pb-4",children:[k.jsx("div",{"aria-hidden":"true",className:"mx-auto mb-3 h-1 w-12 rounded-full bg-white/25 sm:hidden"}),k.jsxs("div",{className:"flex items-start justify-between gap-4",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),k.jsx("h2",{className:"mt-1 text-2xl font-bold",children:"Satellite Tracker"})]}),k.jsx("button",{"aria-label":"Close control panel",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold transition hover:bg-white/20",onClick:()=>je(!1),type:"button",children:"Close"})]}),k.jsx("p",{className:"mt-2 text-sm text-slate-300",children:y}),k.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2",children:[k.jsxs("span",{className:"text-sm font-semibold",children:[S.length.toLocaleString()," satellites"]}),k.jsxs("span",{className:"text-xs text-slate-400",children:[Bn.length.toLocaleString()," visible ·"," ",V()]})]}),k.jsx("nav",{"aria-label":"Satellite explorer",className:"mt-3 grid grid-cols-3 gap-1 rounded-xl bg-black/30 p-1",children:["catalog","favorites","tracked"].map(E=>k.jsxs("button",{"aria-pressed":Ce===E,className:`rounded-lg px-2 py-2 text-xs font-bold capitalize ${Ce===E?"bg-cyan-500 text-white":"text-slate-300 hover:bg-white/10"}`,onClick:()=>Ue(E),type:"button",children:[E," ",E==="favorites"?ee.length:E==="tracked"?pe.length:""]},E))}),k.jsx("div",{className:"mt-3 flex gap-1",children:Object.entries(M_).map(([E,j])=>k.jsx("button",{className:`px-2 py-1 rounded-full text-xs transition ${Ye===E?"bg-cyan-500 text-white":"bg-white/10 hover:bg-white/20"}`,"aria-pressed":Ye===E,onClick:()=>{gt(E),g("defaultAltitudeFilter",E)},type:"button",children:j.label},E))}),k.jsxs("label",{className:"mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-400",children:["Find by name or NORAD ID",k.jsx("input",{className:"mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-slate-500 focus:border-cyan-300",onChange:E=>ge(E.target.value),placeholder:"e.g. Starlink, Hubble, 25544",type:"search",value:ye})]}),Rt.length>0&&k.jsx("div",{className:"mt-2 space-y-1",children:Rt.slice(0,Ce==="catalog"?Yd:void 0).map(E=>k.jsxs("button",{className:`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${E.noradId===M?"bg-cyan-300/20 text-cyan-100":"bg-white/5 hover:bg-white/10"}`,onClick:()=>Qt(E.noradId),type:"button",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"truncate font-medium",children:E.name}),ne(E.noradId)&&k.jsx("span",{className:"text-yellow-400",children:"★"}),Se(E.noradId)&&k.jsx("span",{className:"text-blue-400",children:"📍"})]}),k.jsx("span",{className:"ml-2 shrink-0 text-xs text-slate-400",children:E.noradId})]},E.noradId))}),Rt.length===0&&Ce!=="catalog"&&k.jsxs("p",{className:"mt-3 text-sm text-slate-400",children:["No ",Ce," satellites yet."]}),k.jsx("h3",{className:"mt-4 truncate text-lg font-bold",children:(A==null?void 0:A.name)??"Select a satellite"}),A&&k.jsxs("p",{className:"text-xs text-slate-400",children:["NORAD ",A.noradId,Ye!=="all"&&A.altitudeClass!==Ye?" · Outside current filter":""]}),A&&k.jsx("button",{className:"mt-2 text-xs font-semibold text-cyan-300 underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-100",onClick:yt,type:"button",children:"Clear selection"}),k.jsxs("dl",{className:"mt-3 grid grid-cols-2 gap-3 text-sm",children:[k.jsx(nc,{label:"Latitude",children:A?rm(A.lat,"N","S"):"—"}),k.jsx(nc,{label:"Longitude",children:A?rm(A.lng,"E","W"):"—"}),k.jsx(nc,{label:"Altitude",children:A?`${A.altitudeKm.toFixed(0)} km`:"—"}),k.jsx(nc,{label:"Speed",children:A!=null&&A.velocityKph?`${A.velocityKph.toLocaleString(void 0,{maximumFractionDigits:0})} km/h`:"—"})]}),k.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[k.jsx(Ui,{onClick:()=>{De(0),je(!1),Ae(!0)},children:"Browse all"}),k.jsx(Ui,{onClick:()=>fe(E=>!E),children:ie?"Stop following":"Follow selected"}),k.jsx(Ui,{onClick:()=>q(E=>!E),children:Q?"Hide orbit":"Show orbit"}),k.jsx(Ui,{onClick:()=>{var E;return(E=i.current)==null?void 0:E.pointOfView({altitude:Math.max(3.2,...Bn.map(j=>j.alt*.75+1.5))},900)},children:"Fit visible"}),k.jsx(Ui,{onClick:()=>{ve(null),me().then(E=>{var j;ve(null),(j=i.current)==null||j.pointOfView({lat:E.lat,lng:E.lng,altitude:1.5},1e3)}).catch(()=>ve("Location access failed. Check browser permission and try again."))},children:"Locate me"}),k.jsx(Ui,{onClick:z,children:"Refresh"}),A&&k.jsx(Ui,{onClick:()=>O(A.noradId),children:ne(A.noradId)?"★ Favorited":"☆ Favorite"}),A&&k.jsx(Ui,{onClick:()=>{if(!Se(A.noradId)&&pe.length>=10){ve("Tracking is limited to 10 satellites. Remove one before adding another.");return}we(A.noradId)},children:Se(A.noradId)?"📍 Tracked":"📍 Track"}),Y&&A&&k.jsx(Ui,{onClick:Nn,children:"Predict Pass"}),Y&&k.jsx(Ui,{onClick:W,children:"Clear location"})]}),w&&k.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"Loading the shared satellite snapshot\\u2026"}),Ge&&k.jsx("p",{role:"status",className:"mt-3 text-sm text-amber-300",children:Ge}),k.jsx(Qg,{satellite:N.satellite,cloud:N.cloud}),k.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Orbital data:"," ",k.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),pe.length>0&&k.jsxs("div",{className:"mt-3",children:[k.jsxs("p",{className:"text-xs text-slate-400 mb-2",children:["Tracking ",pe.length," satellites"]}),k.jsx("button",{className:"rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Ee,type:"button",children:"Clear all tracked"})]})]}),We&&k.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:k.jsxs("section",{ref:Et,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"favorites-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Favorites"}),k.jsxs("h2",{id:"favorites-title",className:"mt-1 text-2xl font-bold",children:[ee.length," Favorite Satellites"]}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Quick access to your favorite satellites."})]}),k.jsx("button",{"aria-label":"Close favorites",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>C(!1),type:"button",children:"Close"})]}),k.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:It.length>0?It.map(E=>k.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${E.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Qt(E.noradId),C(!1)},type:"button",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"truncate font-medium",children:E.name}),Se(E.noradId)&&k.jsx("span",{className:"text-blue-400",children:"📍"})]}),k.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:E.noradId})]},E.noradId)):k.jsx("p",{className:"p-4 text-center text-slate-400",children:"No favorites yet. Add satellites to favorites from the control panel."})}),ee.length>0&&k.jsx("footer",{className:"flex justify-end gap-3 border-t border-white/10 p-4",children:k.jsx("button",{className:"rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/30",onClick:$,type:"button",children:"Clear all favorites"})})]})}),Je&&k.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:k.jsxs("section",{ref:bt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"timelapse-title",className:"flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Time Lapse"}),k.jsx("h2",{id:"timelapse-title",className:"mt-1 text-2xl font-bold",children:"Time Lapse Controls"}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Watch satellite movement at accelerated speeds."})]}),k.jsx("button",{"aria-label":"Close time lapse controls",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Fe(!1),type:"button",children:"Close"})]}),k.jsx("div",{className:"flex-1 p-4",children:k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("span",{className:"text-sm text-slate-300",children:"Status"}),k.jsx("span",{className:`rounded-full px-3 py-1 text-sm ${Pe?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:Pe?"Active":"Stopped"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm text-slate-300 mb-2",children:"Speed"}),k.jsx("div",{className:"grid grid-cols-4 gap-2",children:ce.map(E=>k.jsx("button",{className:`rounded-lg border px-3 py-2 text-sm transition ${re===E?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>Ne(E),type:"button",children:Be(E)},E))})]}),k.jsxs("div",{className:"flex gap-2",children:[k.jsxs("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:_e,type:"button",children:[Pe?"Stop":"Start"," Time Lapse"]}),k.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20",onClick:ke,type:"button",children:"Reset to Now"})]})]})})]})}),ut&&A&&k.jsx(G_,{passes:Le,isCalculating:be,error:Xe,onClose:()=>{se(),ot(!1)},onCalculateTracked:()=>{P([...new Set([...pe,A.noradId])])},selectedSatelliteName:hn()}),dt&&k.jsx(W_,{settings:m,onUpdate:g,onReset:v,onClose:()=>G(!1)}),nt&&k.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:k.jsxs("section",{ref:mt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"catalog-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),k.jsxs("h2",{id:"catalog-title",className:"mt-1 text-2xl font-bold",children:["All ",He.length.toLocaleString()," satellites"]}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Select any satellite to view its telemetry and orbit."})]}),k.jsx("button",{"aria-label":"Close satellite catalog",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Ae(!1),type:"button",children:"Close"})]}),k.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:rn.map(E=>k.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${E.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Qt(E.noradId),Ae(!1)},type:"button",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"truncate font-medium",children:E.name}),ne(E.noradId)&&k.jsx("span",{className:"text-yellow-400",children:"★"}),Se(E.noradId)&&k.jsx("span",{className:"text-blue-400",children:"📍"})]}),k.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:E.noradId})]},E.noradId))}),k.jsxs("footer",{className:"flex items-center justify-between gap-3 border-t border-white/10 p-4",children:[k.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:xe===0,onClick:()=>De(E=>Math.max(0,E-1)),type:"button",children:"Previous"}),k.jsxs("p",{className:"text-sm text-slate-400",children:["Page ",xe+1," of ",Vt]}),k.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:xe>=Vt-1,onClick:()=>De(E=>Math.min(Vt-1,E+1)),type:"button",children:"Next"})]})]})})]})},nc=({label:i,children:e})=>k.jsxs("div",{className:"rounded-xl bg-white/10 p-3",children:[k.jsx("dt",{className:"text-slate-400",children:i}),k.jsx("dd",{className:"font-semibold",children:e})]}),Ui=({children:i,onClick:e})=>k.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20",onClick:e,type:"button",children:i}),C2=()=>k.jsxs("main",{className:"relative h-[100dvh] w-full overflow-hidden bg-black",children:[k.jsxs("header",{className:"pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-4 pb-10 pt-[max(1rem,env(safe-area-inset-top))] text-center text-white",children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90",children:"Orbit Radar"}),k.jsx("h1",{className:"mt-1 text-2xl font-black drop-shadow-lg sm:text-4xl",children:"Satellite Tracker"})]}),k.jsx(b2,{})]});Jx.createRoot(document.getElementById("root")).render(k.jsx(r0.StrictMode,{children:k.jsx(C2,{})}));export{So as $,G2 as A,kn as B,Ct as C,tr as D,rv as E,$t as F,Yl as G,Ri as H,Ng as I,Q0 as J,N0 as K,eA as L,Bt as M,aa as N,En as O,$n as P,av as Q,r0 as R,kr as S,I2 as T,PS as U,$e as V,W2 as W,NT as X,ki as Y,ga as Z,N2 as _,J as a,D2 as a0,Q2 as a1,xf as a2,ls as a3,k0 as a4,ps as a5,yc as a6,Ur as a7,K2 as a8,B2 as a9,Ti as aa,H2 as ab,Z2 as ac,hf as ad,q2 as ae,Y2 as af,Mo as ag,V2 as ah,F2 as ai,P2 as aj,L2 as ak,z2 as al,pi as b,_T as c,X0 as d,O2 as e,U2 as f,i0 as g,Oi as h,Ci as i,J2 as j,va as k,_n as l,gs as m,k2 as n,$2 as o,Ke as p,tA as q,de as r,sv as s,X2 as t,MT as u,ST as v,ev as w,i2 as x,wi as y,j2 as z};
