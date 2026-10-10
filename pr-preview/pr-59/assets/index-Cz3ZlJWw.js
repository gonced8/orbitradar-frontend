var L_=Object.defineProperty;var N_=(i,e,t)=>e in i?L_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Wp=(i,e,t)=>N_(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Zg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var tf={exports:{}},Ja={},nf={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function I_(){if(jp)return bt;jp=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(O,q,ke){this.props=O,this.context=q,this.refs=E,this.updater=ke||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=y.prototype;function I(O,q,ke){this.props=O,this.context=q,this.refs=E,this.updater=ke||S}var w=I.prototype=new _;w.constructor=I,M(w,y.prototype),w.isPureReactComponent=!0;var R=Array.isArray,H=Object.prototype.hasOwnProperty,L={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function F(O,q,ke){var Q,ie={},fe=null,xe=null;if(q!=null)for(Q in q.ref!==void 0&&(xe=q.ref),q.key!==void 0&&(fe=""+q.key),q)H.call(q,Q)&&!D.hasOwnProperty(Q)&&(ie[Q]=q[Q]);var Le=arguments.length-2;if(Le===1)ie.children=ke;else if(1<Le){for(var He=Array(Le),Oe=0;Oe<Le;Oe++)He[Oe]=arguments[Oe+2];ie.children=He}if(O&&O.defaultProps)for(Q in Le=O.defaultProps,Le)ie[Q]===void 0&&(ie[Q]=Le[Q]);return{$$typeof:i,type:O,key:fe,ref:xe,props:ie,_owner:L.current}}function P(O,q){return{$$typeof:i,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function z(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ke){return q[ke]})}var Z=/\/+/g;function $(O,q){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):q.toString(36)}function te(O,q,ke,Q,ie){var fe=typeof O;(fe==="undefined"||fe==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(fe){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case i:case e:xe=!0}}if(xe)return xe=O,ie=ie(xe),O=Q===""?"."+$(xe,0):Q,R(ie)?(ke="",O!=null&&(ke=O.replace(Z,"$&/")+"/"),te(ie,q,ke,"",function(Oe){return Oe})):ie!=null&&(b(ie)&&(ie=P(ie,ke+(!ie.key||xe&&xe.key===ie.key?"":(""+ie.key).replace(Z,"$&/")+"/")+O)),q.push(ie)),1;if(xe=0,Q=Q===""?".":Q+":",R(O))for(var Le=0;Le<O.length;Le++){fe=O[Le];var He=Q+$(fe,Le);xe+=te(fe,q,ke,He,ie)}else if(He=v(O),typeof He=="function")for(O=He.call(O),Le=0;!(fe=O.next()).done;)fe=fe.value,He=Q+$(fe,Le++),xe+=te(fe,q,ke,He,ie);else if(fe==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(O,q,ke){if(O==null)return O;var Q=[],ie=0;return te(O,Q,"","",function(fe){return q.call(ke,fe,ie++)}),Q}function j(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(ke){(O._status===0||O._status===-1)&&(O._status=1,O._result=ke)},function(ke){(O._status===0||O._status===-1)&&(O._status=2,O._result=ke)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var re={current:null},V={transition:null},le={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:V,ReactCurrentOwner:L};function oe(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:de,forEach:function(O,q,ke){de(O,function(){q.apply(this,arguments)},ke)},count:function(O){var q=0;return de(O,function(){q++}),q},toArray:function(O){return de(O,function(q){return q})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},bt.Component=y,bt.Fragment=t,bt.Profiler=a,bt.PureComponent=I,bt.StrictMode=s,bt.Suspense=d,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,bt.act=oe,bt.cloneElement=function(O,q,ke){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Q=M({},O.props),ie=O.key,fe=O.ref,xe=O._owner;if(q!=null){if(q.ref!==void 0&&(fe=q.ref,xe=L.current),q.key!==void 0&&(ie=""+q.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for(He in q)H.call(q,He)&&!D.hasOwnProperty(He)&&(Q[He]=q[He]===void 0&&Le!==void 0?Le[He]:q[He])}var He=arguments.length-2;if(He===1)Q.children=ke;else if(1<He){Le=Array(He);for(var Oe=0;Oe<He;Oe++)Le[Oe]=arguments[Oe+2];Q.children=Le}return{$$typeof:i,type:O.type,key:ie,ref:fe,props:Q,_owner:xe}},bt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},bt.createElement=F,bt.createFactory=function(O){var q=F.bind(null,O);return q.type=O,q},bt.createRef=function(){return{current:null}},bt.forwardRef=function(O){return{$$typeof:f,render:O}},bt.isValidElement=b,bt.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:j}},bt.memo=function(O,q){return{$$typeof:h,type:O,compare:q===void 0?null:q}},bt.startTransition=function(O){var q=V.transition;V.transition={};try{O()}finally{V.transition=q}},bt.unstable_act=oe,bt.useCallback=function(O,q){return re.current.useCallback(O,q)},bt.useContext=function(O){return re.current.useContext(O)},bt.useDebugValue=function(){},bt.useDeferredValue=function(O){return re.current.useDeferredValue(O)},bt.useEffect=function(O,q){return re.current.useEffect(O,q)},bt.useId=function(){return re.current.useId()},bt.useImperativeHandle=function(O,q,ke){return re.current.useImperativeHandle(O,q,ke)},bt.useInsertionEffect=function(O,q){return re.current.useInsertionEffect(O,q)},bt.useLayoutEffect=function(O,q){return re.current.useLayoutEffect(O,q)},bt.useMemo=function(O,q){return re.current.useMemo(O,q)},bt.useReducer=function(O,q,ke){return re.current.useReducer(O,q,ke)},bt.useRef=function(O){return re.current.useRef(O)},bt.useState=function(O){return re.current.useState(O)},bt.useSyncExternalStore=function(O,q,ke){return re.current.useSyncExternalStore(O,q,ke)},bt.useTransition=function(){return re.current.useTransition()},bt.version="18.3.1",bt}var Xp;function cd(){return Xp||(Xp=1,nf.exports=I_()),nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function D_(){if(qp)return Ja;qp=1;var i=cd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,g={},v=null,S=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(S=d.ref);for(m in d)s.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:v,ref:S,props:g,_owner:a.current}}return Ja.Fragment=t,Ja.jsx=c,Ja.jsxs=c,Ja}var Yp;function U_(){return Yp||(Yp=1,tf.exports=D_()),tf.exports}var k=U_(),_e=cd();const Jg=Zg(_e);var Tl={},rf={exports:{}},qn={},sf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function O_(){return $p||($p=1,function(i){function e(V,le){var oe=V.length;V.push(le);e:for(;0<oe;){var O=oe-1>>>1,q=V[O];if(0<a(q,le))V[O]=le,V[oe]=q,oe=O;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var le=V[0],oe=V.pop();if(oe!==le){V[0]=oe;e:for(var O=0,q=V.length,ke=q>>>1;O<ke;){var Q=2*(O+1)-1,ie=V[Q],fe=Q+1,xe=V[fe];if(0>a(ie,oe))fe<q&&0>a(xe,ie)?(V[O]=xe,V[fe]=oe,O=fe):(V[O]=ie,V[Q]=oe,O=Q);else if(fe<q&&0>a(xe,oe))V[O]=xe,V[fe]=oe,O=fe;else break e}}return le}function a(V,le){var oe=V.sortIndex-le.sortIndex;return oe!==0?oe:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,g=null,v=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(V){for(var le=t(h);le!==null;){if(le.callback===null)s(h);else if(le.startTime<=V)s(h),le.sortIndex=le.expirationTime,e(d,le);else break;le=t(h)}}function R(V){if(E=!1,w(V),!M)if(t(d)!==null)M=!0,j(H);else{var le=t(h);le!==null&&re(R,le.startTime-V)}}function H(V,le){M=!1,E&&(E=!1,_(F),F=-1),S=!0;var oe=v;try{for(w(le),g=t(d);g!==null&&(!(g.expirationTime>le)||V&&!z());){var O=g.callback;if(typeof O=="function"){g.callback=null,v=g.priorityLevel;var q=O(g.expirationTime<=le);le=i.unstable_now(),typeof q=="function"?g.callback=q:g===t(d)&&s(d),w(le)}else s(d);g=t(d)}if(g!==null)var ke=!0;else{var Q=t(h);Q!==null&&re(R,Q.startTime-le),ke=!1}return ke}finally{g=null,v=oe,S=!1}}var L=!1,D=null,F=-1,P=5,b=-1;function z(){return!(i.unstable_now()-b<P)}function Z(){if(D!==null){var V=i.unstable_now();b=V;var le=!0;try{le=D(!0,V)}finally{le?$():(L=!1,D=null)}}else L=!1}var $;if(typeof I=="function")$=function(){I(Z)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,de=te.port2;te.port1.onmessage=Z,$=function(){de.postMessage(null)}}else $=function(){y(Z,0)};function j(V){D=V,L||(L=!0,$())}function re(V,le){F=y(function(){V(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){M||S||(M=!0,j(H))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return v},i.unstable_getFirstCallbackNode=function(){return t(d)},i.unstable_next=function(V){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var oe=v;v=le;try{return V()}finally{v=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var oe=v;v=V;try{return le()}finally{v=oe}},i.unstable_scheduleCallback=function(V,le,oe){var O=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,V){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=oe+q,V={id:m++,callback:le,priorityLevel:V,startTime:oe,expirationTime:q,sortIndex:-1},oe>O?(V.sortIndex=oe,e(h,V),t(d)===null&&V===t(h)&&(E?(_(F),F=-1):E=!0,re(R,oe-O))):(V.sortIndex=q,e(d,V),M||S||(M=!0,j(H))),V},i.unstable_shouldYield=z,i.unstable_wrapCallback=function(V){var le=v;return function(){var oe=v;v=le;try{return V.apply(this,arguments)}finally{v=oe}}}}(af)),af}var Kp;function F_(){return Kp||(Kp=1,sf.exports=O_()),sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function z_(){if(Zp)return qn;Zp=1;var i=cd(),e=F_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)s.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return d.call(g,n)?!0:d.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function S(n,r,o,u){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,o,u){if(r===null||typeof r>"u"||S(n,r,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,o,u,p,x,C){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,I);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,I);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,I);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function w(n,r,o,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,o,p,u)&&(o=null),u||p===null?v(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(r=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(r):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,r,o):n.setAttribute(r,o))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),L=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),z=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,O;function q(n){if(O===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ke=!1;function Q(n,r){if(!n||ke)return"";ke=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var u=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){u=he}n.call(r.prototype)}else{try{throw Error()}catch(he){u=he}n()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var p=he.stack.split(`
`),x=u.stack.split(`
`),C=p.length-1,B=x.length-1;1<=C&&0<=B&&p[C]!==x[B];)B--;for(;1<=C&&0<=B;C--,B--)if(p[C]!==x[B]){if(C!==1||B!==1)do if(C--,B--,0>B||p[C]!==x[B]){var X=`
`+p[C].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=C&&0<=B);break}}}finally{ke=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?q(n):""}function ie(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case L:return"Portal";case P:return"Profiler";case F:return"StrictMode";case $:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case Z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return r=n.displayName||null,r!==null?r:fe(n.type)||"Memo";case j:r=n._payload,n=n._init;try{return fe(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(r);case 8:return r===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(n){var r=He(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,x=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(C){u=""+C,x.call(this,C)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function G(n){n._valueTracker||(n._valueTracker=Oe(n))}function ye(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=He(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Ee(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function we(n,r){var o=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Me(n,r){var o=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;o=Le(r.value!=null?r.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Te(n,r){r=r.checked,r!=null&&w(n,"checked",r,!1)}function Pe(n,r){Te(n,r);var o=Le(r.value),u=r.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Xe(n,r.type,o):r.hasOwnProperty("defaultValue")&&Xe(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ce(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Xe(n,r,o){(r!=="number"||Ee(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var U=Array.isArray;function A(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Le(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function ne(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Se(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(U(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Le(o)}}function me(n,r){var o=Le(r.value),u=Le(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function ve(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function qe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?qe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,et=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,o,u,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){T.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),je[r]=je[n]})});function Ze(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||je.hasOwnProperty(n)&&je[n]?(""+r).trim():r+"px"}function ze(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=Ze(o,r[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var ft=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(n,r){if(r){if(ft[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function dt(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var W=null;function Ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ge=null,pe=null,Ue=null;function rt(n){if(n=Fa(n)){if(typeof ge!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Bo(r),ge(n.stateNode,n.type,r))}}function vt(n){pe?Ue?Ue.push(n):Ue=[n]:pe=n}function At(){if(pe){var n=pe,r=Ue;if(Ue=pe=null,rt(n),r)for(n=0;n<r.length;n++)rt(r[n])}}function Et(n,r){return n(r)}function gt(){}var Rt=!1;function Ot(n,r,o){if(Rt)return n(r,o);Rt=!0;try{return Et(n,r,o)}finally{Rt=!1,(pe!==null||Ue!==null)&&(gt(),At())}}function Ft(n,r){var o=n.stateNode;if(o===null)return null;var u=Bo(o);if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Ge=!1;if(f)try{var Wt={};Object.defineProperty(Wt,"passive",{get:function(){Ge=!0}}),window.addEventListener("test",Wt,Wt),window.removeEventListener("test",Wt,Wt)}catch{Ge=!1}function an(n,r,o,u,p,x,C,B,X){var he=Array.prototype.slice.call(arguments,3);try{r.apply(o,he)}catch(Fe){this.onError(Fe)}}var on=!1,Mt=null,ln=!1,An=null,be={onError:function(n){on=!0,Mt=n}};function xt(n,r,o,u,p,x,C,B,X){on=!1,Mt=null,an.apply(be,arguments)}function Yt(n,r,o,u,p,x,C,B,X){if(xt.apply(this,arguments),on){if(on){var he=Mt;on=!1,Mt=null}else throw Error(t(198));ln||(ln=!0,An=he)}}function Lt(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function N(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function J(n){if(Lt(n)!==n)throw Error(t(188))}function ce(n){var r=n.alternate;if(!r){if(r=Lt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===o)return J(p),n;if(x===u)return J(p),r;x=x.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=x;else{for(var C=!1,B=p.child;B;){if(B===o){C=!0,o=p,u=x;break}if(B===u){C=!0,u=p,o=x;break}B=B.sibling}if(!C){for(B=x.child;B;){if(B===o){C=!0,o=x,u=p;break}if(B===u){C=!0,u=x,o=p;break}B=B.sibling}if(!C)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function ae(n){return n=ce(n),n!==null?ee(n):null}function ee(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ee(n);if(r!==null)return r;n=n.sibling}return null}var Re=e.unstable_scheduleCallback,Ye=e.unstable_cancelCallback,tt=e.unstable_shouldYield,st=e.unstable_requestPaint,Je=e.unstable_now,ht=e.unstable_getCurrentPriorityLevel,lt=e.unstable_ImmediatePriority,Ct=e.unstable_UserBlockingPriority,Dt=e.unstable_NormalPriority,Ht=e.unstable_LowPriority,$t=e.unstable_IdlePriority,St=null,nt=null;function rn(n){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Zn,Un=Math.log,Kn=Math.LN2;function Zn(n){return n>>>=0,n===0?32:31-(Un(n)/Kn|0)|0}var oi=64,zt=4194304;function fn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Hn(n,r){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,C=o&268435455;if(C!==0){var B=C&~p;B!==0?u=fn(B):(x&=C,x!==0&&(u=fn(x)))}else C=o&~p,C!==0?u=fn(C):x!==0&&(u=fn(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)o=31-yt(r),p=1<<o,u|=n[o],r&=~p;return u}function vn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hi(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-yt(x),B=1<<C,X=p[C];X===-1?((B&o)===0||(B&u)!==0)&&(p[C]=vn(B,r)):X<=r&&(n.expiredLanes|=B),x&=~B}}function Br(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Hr(){var n=oi;return oi<<=1,(oi&4194240)===0&&(oi=64),n}function xa(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Vr(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-yt(r),n[r]=o}function wc(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-yt(o),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,o&=~x}}function ya(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-yt(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}var Ut=0;function Eo(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var wo,Tc,wd,Td,Ad,Ac=!1,To=[],cr=null,ur=null,fr=null,Sa=new Map,Ma=new Map,dr=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cd(n,r){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(r.pointerId)}}function Ea(n,r,o,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=Fa(r),r!==null&&Tc(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function ev(n,r,o,u,p){switch(r){case"focusin":return cr=Ea(cr,n,r,o,u,p),!0;case"dragenter":return ur=Ea(ur,n,r,o,u,p),!0;case"mouseover":return fr=Ea(fr,n,r,o,u,p),!0;case"pointerover":var x=p.pointerId;return Sa.set(x,Ea(Sa.get(x)||null,n,r,o,u,p)),!0;case"gotpointercapture":return x=p.pointerId,Ma.set(x,Ea(Ma.get(x)||null,n,r,o,u,p)),!0}return!1}function bd(n){var r=Gr(n.target);if(r!==null){var o=Lt(r);if(o!==null){if(r=o.tag,r===13){if(r=N(o),r!==null){n.blockedOn=r,Ad(n.priority,function(){wd(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ao(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=bc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);W=u,o.target.dispatchEvent(u),W=null}else return r=Fa(o),r!==null&&Tc(r),n.blockedOn=o,!1;r.shift()}return!0}function Rd(n,r,o){Ao(n)&&o.delete(r)}function tv(){Ac=!1,cr!==null&&Ao(cr)&&(cr=null),ur!==null&&Ao(ur)&&(ur=null),fr!==null&&Ao(fr)&&(fr=null),Sa.forEach(Rd),Ma.forEach(Rd)}function wa(n,r){n.blockedOn===r&&(n.blockedOn=null,Ac||(Ac=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function Ta(n){function r(p){return wa(p,n)}if(0<To.length){wa(To[0],n);for(var o=1;o<To.length;o++){var u=To[o];u.blockedOn===n&&(u.blockedOn=null)}}for(cr!==null&&wa(cr,n),ur!==null&&wa(ur,n),fr!==null&&wa(fr,n),Sa.forEach(r),Ma.forEach(r),o=0;o<dr.length;o++)u=dr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<dr.length&&(o=dr[0],o.blockedOn===null);)bd(o),o.blockedOn===null&&dr.shift()}var _s=R.ReactCurrentBatchConfig,Co=!0;function nv(n,r,o,u){var p=Ut,x=_s.transition;_s.transition=null;try{Ut=1,Cc(n,r,o,u)}finally{Ut=p,_s.transition=x}}function iv(n,r,o,u){var p=Ut,x=_s.transition;_s.transition=null;try{Ut=4,Cc(n,r,o,u)}finally{Ut=p,_s.transition=x}}function Cc(n,r,o,u){if(Co){var p=bc(n,r,o,u);if(p===null)jc(n,r,u,bo,o),Cd(n,u);else if(ev(p,n,r,o,u))u.stopPropagation();else if(Cd(n,u),r&4&&-1<Q0.indexOf(n)){for(;p!==null;){var x=Fa(p);if(x!==null&&wo(x),x=bc(n,r,o,u),x===null&&jc(n,r,u,bo,o),x===p)break;p=x}p!==null&&u.stopPropagation()}else jc(n,r,u,null,o)}}var bo=null;function bc(n,r,o,u){if(bo=null,n=Ve(u),n=Gr(n),n!==null)if(r=Lt(n),r===null)n=null;else if(o=r.tag,o===13){if(n=N(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return bo=n,null}function Pd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ht()){case lt:return 1;case Ct:return 4;case Dt:case Ht:return 16;case $t:return 536870912;default:return 16}default:return 16}}var hr=null,Rc=null,Ro=null;function Ld(){if(Ro)return Ro;var n,r=Rc,o=r.length,u,p="value"in hr?hr.value:hr.textContent,x=p.length;for(n=0;n<o&&r[n]===p[n];n++);var C=o-n;for(u=1;u<=C&&r[o-u]===p[x-u];u++);return Ro=p.slice(n,1<u?1-u:void 0)}function Po(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Lo(){return!0}function Nd(){return!1}function Jn(n){function r(o,u,p,x,C){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(x):x[B]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Lo:Nd,this.isPropagationStopped=Nd,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),r}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pc=Jn(xs),Aa=oe({},xs,{view:0,detail:0}),rv=Jn(Aa),Lc,Nc,Ca,No=oe({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(Lc=n.screenX-Ca.screenX,Nc=n.screenY-Ca.screenY):Nc=Lc=0,Ca=n),Lc)},movementY:function(n){return"movementY"in n?n.movementY:Nc}}),Id=Jn(No),sv=oe({},No,{dataTransfer:0}),av=Jn(sv),ov=oe({},Aa,{relatedTarget:0}),Ic=Jn(ov),lv=oe({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=Jn(lv),uv=oe({},xs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fv=Jn(uv),dv=oe({},xs,{data:0}),Dd=Jn(dv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=mv[n])?!!r[n]:!1}function Dc(){return gv}var vv=oe({},Aa,{key:function(n){if(n.key){var r=hv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(n){return n.type==="keypress"?Po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_v=Jn(vv),xv=oe({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ud=Jn(xv),yv=oe({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Sv=Jn(yv),Mv=oe({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=Jn(Mv),wv=oe({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=Jn(wv),Av=[9,13,27,32],Uc=f&&"CompositionEvent"in window,ba=null;f&&"documentMode"in document&&(ba=document.documentMode);var Cv=f&&"TextEvent"in window&&!ba,Od=f&&(!Uc||ba&&8<ba&&11>=ba),Fd=" ",zd=!1;function kd(n,r){switch(n){case"keyup":return Av.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ys=!1;function bv(n,r){switch(n){case"compositionend":return Bd(r);case"keypress":return r.which!==32?null:(zd=!0,Fd);case"textInput":return n=r.data,n===Fd&&zd?null:n;default:return null}}function Rv(n,r){if(ys)return n==="compositionend"||!Uc&&kd(n,r)?(n=Ld(),Ro=Rc=hr=null,ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Od&&r.locale!=="ko"?null:r.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Pv[n.type]:r==="textarea"}function Vd(n,r,o,u){vt(u),r=Fo(r,"onChange"),0<r.length&&(o=new Pc("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Ra=null,Pa=null;function Lv(n){ah(n,0)}function Io(n){var r=Ts(n);if(ye(r))return n}function Nv(n,r){if(n==="change")return r}var Gd=!1;if(f){var Oc;if(f){var Fc="oninput"in document;if(!Fc){var Wd=document.createElement("div");Wd.setAttribute("oninput","return;"),Fc=typeof Wd.oninput=="function"}Oc=Fc}else Oc=!1;Gd=Oc&&(!document.documentMode||9<document.documentMode)}function jd(){Ra&&(Ra.detachEvent("onpropertychange",Xd),Pa=Ra=null)}function Xd(n){if(n.propertyName==="value"&&Io(Pa)){var r=[];Vd(r,Pa,n,Ve(n)),Ot(Lv,r)}}function Iv(n,r,o){n==="focusin"?(jd(),Ra=r,Pa=o,Ra.attachEvent("onpropertychange",Xd)):n==="focusout"&&jd()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Io(Pa)}function Uv(n,r){if(n==="click")return Io(r)}function Ov(n,r){if(n==="input"||n==="change")return Io(r)}function Fv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var gi=typeof Object.is=="function"?Object.is:Fv;function La(n,r){if(gi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!d.call(r,p)||!gi(n[p],r[p]))return!1}return!0}function qd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yd(n,r){var o=qd(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qd(o)}}function $d(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?$d(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Kd(){for(var n=window,r=Ee();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Ee(n.document)}return r}function zc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function zv(n){var r=Kd(),o=n.focusedElem,u=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&$d(o.ownerDocument.documentElement,o)){if(u!==null&&zc(o)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=Yd(o,x);var C=Yd(o,u);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(C.node,C.offset)):(r.setEnd(C.node,C.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kv=f&&"documentMode"in document&&11>=document.documentMode,Ss=null,kc=null,Na=null,Bc=!1;function Zd(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Bc||Ss==null||Ss!==Ee(u)||(u=Ss,"selectionStart"in u&&zc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Na&&La(Na,u)||(Na=u,u=Fo(kc,"onSelect"),0<u.length&&(r=new Pc("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ss)))}function Do(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Ms={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Hc={},Jd={};f&&(Jd=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Uo(n){if(Hc[n])return Hc[n];if(!Ms[n])return n;var r=Ms[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Jd)return Hc[n]=r[o];return n}var Qd=Uo("animationend"),eh=Uo("animationiteration"),th=Uo("animationstart"),nh=Uo("transitionend"),ih=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,r){ih.set(n,r),l(r,[n])}for(var Vc=0;Vc<rh.length;Vc++){var Gc=rh[Vc],Bv=Gc.toLowerCase(),Hv=Gc[0].toUpperCase()+Gc.slice(1);pr(Bv,"on"+Hv)}pr(Qd,"onAnimationEnd"),pr(eh,"onAnimationIteration"),pr(th,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(nh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function sh(n,r,o){var u=n.type||"unknown-event";n.currentTarget=o,Yt(u,r,void 0,n),n.currentTarget=null}function ah(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var C=u.length-1;0<=C;C--){var B=u[C],X=B.instance,he=B.currentTarget;if(B=B.listener,X!==x&&p.isPropagationStopped())break e;sh(p,B,he),x=X}else for(C=0;C<u.length;C++){if(B=u[C],X=B.instance,he=B.currentTarget,B=B.listener,X!==x&&p.isPropagationStopped())break e;sh(p,B,he),x=X}}}if(ln)throw n=An,ln=!1,An=null,n}function jt(n,r){var o=r[Zc];o===void 0&&(o=r[Zc]=new Set);var u=n+"__bubble";o.has(u)||(oh(r,n,2,!1),o.add(u))}function Wc(n,r,o){var u=0;r&&(u|=4),oh(o,n,u,r)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Oo]){n[Oo]=!0,s.forEach(function(o){o!=="selectionchange"&&(Vv.has(o)||Wc(o,!1,n),Wc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Oo]||(r[Oo]=!0,Wc("selectionchange",!1,r))}}function oh(n,r,o,u){switch(Pd(r)){case 1:var p=nv;break;case 4:p=iv;break;default:p=Cc}o=p.bind(null,r,o,n),p=void 0,!Ge||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function jc(n,r,o,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var B=u.stateNode.containerInfo;if(B===p||B.nodeType===8&&B.parentNode===p)break;if(C===4)for(C=u.return;C!==null;){var X=C.tag;if((X===3||X===4)&&(X=C.stateNode.containerInfo,X===p||X.nodeType===8&&X.parentNode===p))return;C=C.return}for(;B!==null;){if(C=Gr(B),C===null)return;if(X=C.tag,X===5||X===6){u=x=C;continue e}B=B.parentNode}}u=u.return}Ot(function(){var he=x,Fe=Ve(o),Be=[];e:{var De=ih.get(n);if(De!==void 0){var Qe=Pc,at=n;switch(n){case"keypress":if(Po(o)===0)break e;case"keydown":case"keyup":Qe=_v;break;case"focusin":at="focus",Qe=Ic;break;case"focusout":at="blur",Qe=Ic;break;case"beforeblur":case"afterblur":Qe=Ic;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Sv;break;case Qd:case eh:case th:Qe=cv;break;case nh:Qe=Ev;break;case"scroll":Qe=rv;break;case"wheel":Qe=Tv;break;case"copy":case"cut":case"paste":Qe=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Ud}var ot=(r&4)!==0,sn=!ot&&n==="scroll",se=ot?De!==null?De+"Capture":null:De;ot=[];for(var Y=he,ue;Y!==null;){ue=Y;var We=ue.stateNode;if(ue.tag===5&&We!==null&&(ue=We,se!==null&&(We=Ft(Y,se),We!=null&&ot.push(Ua(Y,We,ue)))),sn)break;Y=Y.return}0<ot.length&&(De=new Qe(De,at,null,o,Fe),Be.push({event:De,listeners:ot}))}}if((r&7)===0){e:{if(De=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",De&&o!==W&&(at=o.relatedTarget||o.fromElement)&&(Gr(at)||at[Vi]))break e;if((Qe||De)&&(De=Fe.window===Fe?Fe:(De=Fe.ownerDocument)?De.defaultView||De.parentWindow:window,Qe?(at=o.relatedTarget||o.toElement,Qe=he,at=at?Gr(at):null,at!==null&&(sn=Lt(at),at!==sn||at.tag!==5&&at.tag!==6)&&(at=null)):(Qe=null,at=he),Qe!==at)){if(ot=Id,We="onMouseLeave",se="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Ud,We="onPointerLeave",se="onPointerEnter",Y="pointer"),sn=Qe==null?De:Ts(Qe),ue=at==null?De:Ts(at),De=new ot(We,Y+"leave",Qe,o,Fe),De.target=sn,De.relatedTarget=ue,We=null,Gr(Fe)===he&&(ot=new ot(se,Y+"enter",at,o,Fe),ot.target=ue,ot.relatedTarget=sn,We=ot),sn=We,Qe&&at)t:{for(ot=Qe,se=at,Y=0,ue=ot;ue;ue=Es(ue))Y++;for(ue=0,We=se;We;We=Es(We))ue++;for(;0<Y-ue;)ot=Es(ot),Y--;for(;0<ue-Y;)se=Es(se),ue--;for(;Y--;){if(ot===se||se!==null&&ot===se.alternate)break t;ot=Es(ot),se=Es(se)}ot=null}else ot=null;Qe!==null&&lh(Be,De,Qe,ot,!1),at!==null&&sn!==null&&lh(Be,sn,at,ot,!0)}}e:{if(De=he?Ts(he):window,Qe=De.nodeName&&De.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&De.type==="file")var ct=Nv;else if(Hd(De))if(Gd)ct=Ov;else{ct=Dv;var pt=Iv}else(Qe=De.nodeName)&&Qe.toLowerCase()==="input"&&(De.type==="checkbox"||De.type==="radio")&&(ct=Uv);if(ct&&(ct=ct(n,he))){Vd(Be,ct,o,Fe);break e}pt&&pt(n,De,he),n==="focusout"&&(pt=De._wrapperState)&&pt.controlled&&De.type==="number"&&Xe(De,"number",De.value)}switch(pt=he?Ts(he):window,n){case"focusin":(Hd(pt)||pt.contentEditable==="true")&&(Ss=pt,kc=he,Na=null);break;case"focusout":Na=kc=Ss=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Zd(Be,o,Fe);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":Zd(Be,o,Fe)}var mt;if(Uc)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else ys?kd(n,o)&&(_t="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(_t="onCompositionStart");_t&&(Od&&o.locale!=="ko"&&(ys||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&ys&&(mt=Ld()):(hr=Fe,Rc="value"in hr?hr.value:hr.textContent,ys=!0)),pt=Fo(he,_t),0<pt.length&&(_t=new Dd(_t,n,null,o,Fe),Be.push({event:_t,listeners:pt}),mt?_t.data=mt:(mt=Bd(o),mt!==null&&(_t.data=mt)))),(mt=Cv?bv(n,o):Rv(n,o))&&(he=Fo(he,"onBeforeInput"),0<he.length&&(Fe=new Dd("onBeforeInput","beforeinput",null,o,Fe),Be.push({event:Fe,listeners:he}),Fe.data=mt))}ah(Be,r)})}function Ua(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Fo(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Ft(n,o),x!=null&&u.unshift(Ua(n,x,p)),x=Ft(n,r),x!=null&&u.push(Ua(n,x,p))),n=n.return}return u}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lh(n,r,o,u,p){for(var x=r._reactName,C=[];o!==null&&o!==u;){var B=o,X=B.alternate,he=B.stateNode;if(X!==null&&X===u)break;B.tag===5&&he!==null&&(B=he,p?(X=Ft(o,x),X!=null&&C.unshift(Ua(o,X,B))):p||(X=Ft(o,x),X!=null&&C.push(Ua(o,X,B)))),o=o.return}C.length!==0&&n.push({event:r,listeners:C})}var Gv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function ch(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Wv,"")}function zo(n,r,o){if(r=ch(r),ch(n)!==r&&o)throw Error(t(425))}function ko(){}var Xc=null,qc=null;function Yc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,uh=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof uh<"u"?function(n){return uh.resolve(null).then(n).catch(qv)}:$c;function qv(n){setTimeout(function(){throw n})}function Kc(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),Ta(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);Ta(r)}function mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function fh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Ri="__reactFiber$"+ws,Oa="__reactProps$"+ws,Vi="__reactContainer$"+ws,Zc="__reactEvents$"+ws,Yv="__reactListeners$"+ws,$v="__reactHandles$"+ws;function Gr(n){var r=n[Ri];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Vi]||o[Ri]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=fh(n);n!==null;){if(o=n[Ri])return o;n=fh(n)}return r}n=o,o=n.parentNode}return null}function Fa(n){return n=n[Ri]||n[Vi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bo(n){return n[Oa]||null}var Jc=[],As=-1;function gr(n){return{current:n}}function Xt(n){0>As||(n.current=Jc[As],Jc[As]=null,As--)}function Gt(n,r){As++,Jc[As]=n.current,n.current=r}var vr={},Cn=gr(vr),Vn=gr(!1),Wr=vr;function Cs(n,r){var o=n.type.contextTypes;if(!o)return vr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in o)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Gn(n){return n=n.childContextTypes,n!=null}function Ho(){Xt(Vn),Xt(Cn)}function dh(n,r,o){if(Cn.current!==vr)throw Error(t(168));Gt(Cn,r),Gt(Vn,o)}function hh(n,r,o){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,xe(n)||"Unknown",p));return oe({},o,u)}function Vo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Wr=Cn.current,Gt(Cn,n),Gt(Vn,Vn.current),!0}function ph(n,r,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=hh(n,r,Wr),u.__reactInternalMemoizedMergedChildContext=n,Xt(Vn),Xt(Cn),Gt(Cn,n)):Xt(Vn),Gt(Vn,o)}var Gi=null,Go=!1,Qc=!1;function mh(n){Gi===null?Gi=[n]:Gi.push(n)}function Kv(n){Go=!0,mh(n)}function _r(){if(!Qc&&Gi!==null){Qc=!0;var n=0,r=Ut;try{var o=Gi;for(Ut=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Gi=null,Go=!1}catch(p){throw Gi!==null&&(Gi=Gi.slice(n+1)),Re(lt,_r),p}finally{Ut=r,Qc=!1}}return null}var bs=[],Rs=0,Wo=null,jo=0,li=[],ci=0,jr=null,Wi=1,ji="";function Xr(n,r){bs[Rs++]=jo,bs[Rs++]=Wo,Wo=n,jo=r}function gh(n,r,o){li[ci++]=Wi,li[ci++]=ji,li[ci++]=jr,jr=n;var u=Wi;n=ji;var p=32-yt(u)-1;u&=~(1<<p),o+=1;var x=32-yt(r)+p;if(30<x){var C=p-p%5;x=(u&(1<<C)-1).toString(32),u>>=C,p-=C,Wi=1<<32-yt(r)+p|o<<p|u,ji=x+n}else Wi=1<<x|o<<p|u,ji=n}function eu(n){n.return!==null&&(Xr(n,1),gh(n,1,0))}function tu(n){for(;n===Wo;)Wo=bs[--Rs],bs[Rs]=null,jo=bs[--Rs],bs[Rs]=null;for(;n===jr;)jr=li[--ci],li[ci]=null,ji=li[--ci],li[ci]=null,Wi=li[--ci],li[ci]=null}var Qn=null,ei=null,Kt=!1,vi=null;function vh(n,r){var o=hi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function _h(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Qn=n,ei=mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Qn=n,ei=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=jr!==null?{id:Wi,overflow:ji}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=hi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Qn=n,ei=null,!0):!1;default:return!1}}function nu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function iu(n){if(Kt){var r=ei;if(r){var o=r;if(!_h(n,r)){if(nu(n))throw Error(t(418));r=mr(o.nextSibling);var u=Qn;r&&_h(n,r)?vh(u,o):(n.flags=n.flags&-4097|2,Kt=!1,Qn=n)}}else{if(nu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,Qn=n}}}function xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Qn=n}function Xo(n){if(n!==Qn)return!1;if(!Kt)return xh(n),Kt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Yc(n.type,n.memoizedProps)),r&&(r=ei)){if(nu(n))throw yh(),Error(t(418));for(;r;)vh(n,r),r=mr(r.nextSibling)}if(xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ei=mr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ei=null}}else ei=Qn?mr(n.stateNode.nextSibling):null;return!0}function yh(){for(var n=ei;n;)n=mr(n.nextSibling)}function Ps(){ei=Qn=null,Kt=!1}function ru(n){vi===null?vi=[n]:vi.push(n)}var Zv=R.ReactCurrentBatchConfig;function za(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(C){var B=p.refs;C===null?delete B[x]:B[x]=C},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function qo(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Sh(n){var r=n._init;return r(n._payload)}function Mh(n){function r(se,Y){if(n){var ue=se.deletions;ue===null?(se.deletions=[Y],se.flags|=16):ue.push(Y)}}function o(se,Y){if(!n)return null;for(;Y!==null;)r(se,Y),Y=Y.sibling;return null}function u(se,Y){for(se=new Map;Y!==null;)Y.key!==null?se.set(Y.key,Y):se.set(Y.index,Y),Y=Y.sibling;return se}function p(se,Y){return se=Ar(se,Y),se.index=0,se.sibling=null,se}function x(se,Y,ue){return se.index=ue,n?(ue=se.alternate,ue!==null?(ue=ue.index,ue<Y?(se.flags|=2,Y):ue):(se.flags|=2,Y)):(se.flags|=1048576,Y)}function C(se){return n&&se.alternate===null&&(se.flags|=2),se}function B(se,Y,ue,We){return Y===null||Y.tag!==6?(Y=$u(ue,se.mode,We),Y.return=se,Y):(Y=p(Y,ue),Y.return=se,Y)}function X(se,Y,ue,We){var ct=ue.type;return ct===D?Fe(se,Y,ue.props.children,We,ue.key):Y!==null&&(Y.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===j&&Sh(ct)===Y.type)?(We=p(Y,ue.props),We.ref=za(se,Y,ue),We.return=se,We):(We=vl(ue.type,ue.key,ue.props,null,se.mode,We),We.ref=za(se,Y,ue),We.return=se,We)}function he(se,Y,ue,We){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ue.containerInfo||Y.stateNode.implementation!==ue.implementation?(Y=Ku(ue,se.mode,We),Y.return=se,Y):(Y=p(Y,ue.children||[]),Y.return=se,Y)}function Fe(se,Y,ue,We,ct){return Y===null||Y.tag!==7?(Y=es(ue,se.mode,We,ct),Y.return=se,Y):(Y=p(Y,ue),Y.return=se,Y)}function Be(se,Y,ue){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=$u(""+Y,se.mode,ue),Y.return=se,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case H:return ue=vl(Y.type,Y.key,Y.props,null,se.mode,ue),ue.ref=za(se,null,Y),ue.return=se,ue;case L:return Y=Ku(Y,se.mode,ue),Y.return=se,Y;case j:var We=Y._init;return Be(se,We(Y._payload),ue)}if(U(Y)||le(Y))return Y=es(Y,se.mode,ue,null),Y.return=se,Y;qo(se,Y)}return null}function De(se,Y,ue,We){var ct=Y!==null?Y.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ct!==null?null:B(se,Y,""+ue,We);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case H:return ue.key===ct?X(se,Y,ue,We):null;case L:return ue.key===ct?he(se,Y,ue,We):null;case j:return ct=ue._init,De(se,Y,ct(ue._payload),We)}if(U(ue)||le(ue))return ct!==null?null:Fe(se,Y,ue,We,null);qo(se,ue)}return null}function Qe(se,Y,ue,We,ct){if(typeof We=="string"&&We!==""||typeof We=="number")return se=se.get(ue)||null,B(Y,se,""+We,ct);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case H:return se=se.get(We.key===null?ue:We.key)||null,X(Y,se,We,ct);case L:return se=se.get(We.key===null?ue:We.key)||null,he(Y,se,We,ct);case j:var pt=We._init;return Qe(se,Y,ue,pt(We._payload),ct)}if(U(We)||le(We))return se=se.get(ue)||null,Fe(Y,se,We,ct,null);qo(Y,We)}return null}function at(se,Y,ue,We){for(var ct=null,pt=null,mt=Y,_t=Y=0,yn=null;mt!==null&&_t<ue.length;_t++){mt.index>_t?(yn=mt,mt=null):yn=mt.sibling;var It=De(se,mt,ue[_t],We);if(It===null){mt===null&&(mt=yn);break}n&&mt&&It.alternate===null&&r(se,mt),Y=x(It,Y,_t),pt===null?ct=It:pt.sibling=It,pt=It,mt=yn}if(_t===ue.length)return o(se,mt),Kt&&Xr(se,_t),ct;if(mt===null){for(;_t<ue.length;_t++)mt=Be(se,ue[_t],We),mt!==null&&(Y=x(mt,Y,_t),pt===null?ct=mt:pt.sibling=mt,pt=mt);return Kt&&Xr(se,_t),ct}for(mt=u(se,mt);_t<ue.length;_t++)yn=Qe(mt,se,_t,ue[_t],We),yn!==null&&(n&&yn.alternate!==null&&mt.delete(yn.key===null?_t:yn.key),Y=x(yn,Y,_t),pt===null?ct=yn:pt.sibling=yn,pt=yn);return n&&mt.forEach(function(Cr){return r(se,Cr)}),Kt&&Xr(se,_t),ct}function ot(se,Y,ue,We){var ct=le(ue);if(typeof ct!="function")throw Error(t(150));if(ue=ct.call(ue),ue==null)throw Error(t(151));for(var pt=ct=null,mt=Y,_t=Y=0,yn=null,It=ue.next();mt!==null&&!It.done;_t++,It=ue.next()){mt.index>_t?(yn=mt,mt=null):yn=mt.sibling;var Cr=De(se,mt,It.value,We);if(Cr===null){mt===null&&(mt=yn);break}n&&mt&&Cr.alternate===null&&r(se,mt),Y=x(Cr,Y,_t),pt===null?ct=Cr:pt.sibling=Cr,pt=Cr,mt=yn}if(It.done)return o(se,mt),Kt&&Xr(se,_t),ct;if(mt===null){for(;!It.done;_t++,It=ue.next())It=Be(se,It.value,We),It!==null&&(Y=x(It,Y,_t),pt===null?ct=It:pt.sibling=It,pt=It);return Kt&&Xr(se,_t),ct}for(mt=u(se,mt);!It.done;_t++,It=ue.next())It=Qe(mt,se,_t,It.value,We),It!==null&&(n&&It.alternate!==null&&mt.delete(It.key===null?_t:It.key),Y=x(It,Y,_t),pt===null?ct=It:pt.sibling=It,pt=It);return n&&mt.forEach(function(P_){return r(se,P_)}),Kt&&Xr(se,_t),ct}function sn(se,Y,ue,We){if(typeof ue=="object"&&ue!==null&&ue.type===D&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case H:e:{for(var ct=ue.key,pt=Y;pt!==null;){if(pt.key===ct){if(ct=ue.type,ct===D){if(pt.tag===7){o(se,pt.sibling),Y=p(pt,ue.props.children),Y.return=se,se=Y;break e}}else if(pt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===j&&Sh(ct)===pt.type){o(se,pt.sibling),Y=p(pt,ue.props),Y.ref=za(se,pt,ue),Y.return=se,se=Y;break e}o(se,pt);break}else r(se,pt);pt=pt.sibling}ue.type===D?(Y=es(ue.props.children,se.mode,We,ue.key),Y.return=se,se=Y):(We=vl(ue.type,ue.key,ue.props,null,se.mode,We),We.ref=za(se,Y,ue),We.return=se,se=We)}return C(se);case L:e:{for(pt=ue.key;Y!==null;){if(Y.key===pt)if(Y.tag===4&&Y.stateNode.containerInfo===ue.containerInfo&&Y.stateNode.implementation===ue.implementation){o(se,Y.sibling),Y=p(Y,ue.children||[]),Y.return=se,se=Y;break e}else{o(se,Y);break}else r(se,Y);Y=Y.sibling}Y=Ku(ue,se.mode,We),Y.return=se,se=Y}return C(se);case j:return pt=ue._init,sn(se,Y,pt(ue._payload),We)}if(U(ue))return at(se,Y,ue,We);if(le(ue))return ot(se,Y,ue,We);qo(se,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,Y!==null&&Y.tag===6?(o(se,Y.sibling),Y=p(Y,ue),Y.return=se,se=Y):(o(se,Y),Y=$u(ue,se.mode,We),Y.return=se,se=Y),C(se)):o(se,Y)}return sn}var Ls=Mh(!0),Eh=Mh(!1),Yo=gr(null),$o=null,Ns=null,su=null;function au(){su=Ns=$o=null}function ou(n){var r=Yo.current;Xt(Yo),n._currentValue=r}function lu(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Is(n,r){$o=n,su=Ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Wn=!0),n.firstContext=null)}function ui(n){var r=n._currentValue;if(su!==n)if(n={context:n,memoizedValue:r,next:null},Ns===null){if($o===null)throw Error(t(308));Ns=n,$o.dependencies={lanes:0,firstContext:n}}else Ns=Ns.next=n;return r}var qr=null;function cu(n){qr===null?qr=[n]:qr.push(n)}function wh(n,r,o,u){var p=r.interleaved;return p===null?(o.next=o,cu(r)):(o.next=p.next,p.next=o),r.interleaved=o,Xi(n,u)}function Xi(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var xr=!1;function uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function yr(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Nt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,Xi(n,o)}return p=u.interleaved,p===null?(r.next=r,cu(u)):(r.next=p.next,p.next=r),u.interleaved=r,Xi(n,o)}function Ko(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ya(n,o)}}function Ah(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,x=null;if(o=o.firstBaseUpdate,o!==null){do{var C={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};x===null?p=x=C:x=x.next=C,o=o.next}while(o!==null);x===null?p=x=r:x=x.next=r}else p=x=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Zo(n,r,o,u){var p=n.updateQueue;xr=!1;var x=p.firstBaseUpdate,C=p.lastBaseUpdate,B=p.shared.pending;if(B!==null){p.shared.pending=null;var X=B,he=X.next;X.next=null,C===null?x=he:C.next=he,C=X;var Fe=n.alternate;Fe!==null&&(Fe=Fe.updateQueue,B=Fe.lastBaseUpdate,B!==C&&(B===null?Fe.firstBaseUpdate=he:B.next=he,Fe.lastBaseUpdate=X))}if(x!==null){var Be=p.baseState;C=0,Fe=he=X=null,B=x;do{var De=B.lane,Qe=B.eventTime;if((u&De)===De){Fe!==null&&(Fe=Fe.next={eventTime:Qe,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var at=n,ot=B;switch(De=r,Qe=o,ot.tag){case 1:if(at=ot.payload,typeof at=="function"){Be=at.call(Qe,Be,De);break e}Be=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ot.payload,De=typeof at=="function"?at.call(Qe,Be,De):at,De==null)break e;Be=oe({},Be,De);break e;case 2:xr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,De=p.effects,De===null?p.effects=[B]:De.push(B))}else Qe={eventTime:Qe,lane:De,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Fe===null?(he=Fe=Qe,X=Be):Fe=Fe.next=Qe,C|=De;if(B=B.next,B===null){if(B=p.shared.pending,B===null)break;De=B,B=De.next,De.next=null,p.lastBaseUpdate=De,p.shared.pending=null}}while(!0);if(Fe===null&&(X=Be),p.baseState=X,p.firstBaseUpdate=he,p.lastBaseUpdate=Fe,r=p.shared.interleaved,r!==null){p=r;do C|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);Kr|=C,n.lanes=C,n.memoizedState=Be}}function Ch(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ka={},Pi=gr(ka),Ba=gr(ka),Ha=gr(ka);function Yr(n){if(n===ka)throw Error(t(174));return n}function fu(n,r){switch(Gt(Ha,r),Gt(Ba,n),Gt(Pi,ka),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ie(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ie(r,n)}Xt(Pi),Gt(Pi,r)}function Ds(){Xt(Pi),Xt(Ba),Xt(Ha)}function bh(n){Yr(Ha.current);var r=Yr(Pi.current),o=Ie(r,n.type);r!==o&&(Gt(Ba,n),Gt(Pi,o))}function du(n){Ba.current===n&&(Xt(Pi),Xt(Ba))}var Qt=gr(0);function Jo(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hu=[];function pu(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var Qo=R.ReactCurrentDispatcher,mu=R.ReactCurrentBatchConfig,$r=0,en=null,dn=null,_n=null,el=!1,Va=!1,Ga=0,Jv=0;function bn(){throw Error(t(321))}function gu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!gi(n[o],r[o]))return!1;return!0}function vu(n,r,o,u,p,x){if($r=x,en=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qo.current=n===null||n.memoizedState===null?n_:i_,n=o(u,p),Va){x=0;do{if(Va=!1,Ga=0,25<=x)throw Error(t(301));x+=1,_n=dn=null,r.updateQueue=null,Qo.current=r_,n=o(u,p)}while(Va)}if(Qo.current=il,r=dn!==null&&dn.next!==null,$r=0,_n=dn=en=null,el=!1,r)throw Error(t(300));return n}function _u(){var n=Ga!==0;return Ga=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?en.memoizedState=_n=n:_n=_n.next=n,_n}function fi(){if(dn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var r=_n===null?en.memoizedState:_n.next;if(r!==null)_n=r,dn=n;else{if(n===null)throw Error(t(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},_n===null?en.memoizedState=_n=n:_n=_n.next=n}return _n}function Wa(n,r){return typeof r=="function"?r(n):r}function xu(n){var r=fi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=dn,p=u.baseQueue,x=o.pending;if(x!==null){if(p!==null){var C=p.next;p.next=x.next,x.next=C}u.baseQueue=p=x,o.pending=null}if(p!==null){x=p.next,u=u.baseState;var B=C=null,X=null,he=x;do{var Fe=he.lane;if(($r&Fe)===Fe)X!==null&&(X=X.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:n(u,he.action);else{var Be={lane:Fe,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};X===null?(B=X=Be,C=u):X=X.next=Be,en.lanes|=Fe,Kr|=Fe}he=he.next}while(he!==null&&he!==x);X===null?C=u:X.next=B,gi(u,r.memoizedState)||(Wn=!0),r.memoizedState=u,r.baseState=C,r.baseQueue=X,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do x=p.lane,en.lanes|=x,Kr|=x,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function yu(n){var r=fi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,x=r.memoizedState;if(p!==null){o.pending=null;var C=p=p.next;do x=n(x,C.action),C=C.next;while(C!==p);gi(x,r.memoizedState)||(Wn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),o.lastRenderedState=x}return[x,u]}function Rh(){}function Ph(n,r){var o=en,u=fi(),p=r(),x=!gi(u.memoizedState,p);if(x&&(u.memoizedState=p,Wn=!0),u=u.queue,Su(Ih.bind(null,o,u,n),[n]),u.getSnapshot!==r||x||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,ja(9,Nh.bind(null,o,u,p,r),void 0,null),xn===null)throw Error(t(349));($r&30)!==0||Lh(o,r,p)}return p}function Lh(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=en.updateQueue,r===null?(r={lastEffect:null,stores:null},en.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Nh(n,r,o,u){r.value=o,r.getSnapshot=u,Dh(r)&&Uh(n)}function Ih(n,r,o){return o(function(){Dh(r)&&Uh(n)})}function Dh(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!gi(n,o)}catch{return!0}}function Uh(n){var r=Xi(n,1);r!==null&&Si(r,n,1,-1)}function Oh(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},r.queue=n,n=n.dispatch=t_.bind(null,en,n),[r.memoizedState,n]}function ja(n,r,o,u){return n={tag:n,create:r,destroy:o,deps:u,next:null},r=en.updateQueue,r===null?(r={lastEffect:null,stores:null},en.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n)),n}function Fh(){return fi().memoizedState}function tl(n,r,o,u){var p=Li();en.flags|=n,p.memoizedState=ja(1|r,o,void 0,u===void 0?null:u)}function nl(n,r,o,u){var p=fi();u=u===void 0?null:u;var x=void 0;if(dn!==null){var C=dn.memoizedState;if(x=C.destroy,u!==null&&gu(u,C.deps)){p.memoizedState=ja(r,o,x,u);return}}en.flags|=n,p.memoizedState=ja(1|r,o,x,u)}function zh(n,r){return tl(8390656,8,n,r)}function Su(n,r){return nl(2048,8,n,r)}function kh(n,r){return nl(4,2,n,r)}function Bh(n,r){return nl(4,4,n,r)}function Hh(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Vh(n,r,o){return o=o!=null?o.concat([n]):null,nl(4,4,Hh.bind(null,r,n),o)}function Mu(){}function Gh(n,r){var o=fi();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&gu(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Wh(n,r){var o=fi();r=r===void 0?null:r;var u=o.memoizedState;return u!==null&&r!==null&&gu(r,u[1])?u[0]:(n=n(),o.memoizedState=[n,r],n)}function jh(n,r,o){return($r&21)===0?(n.baseState&&(n.baseState=!1,Wn=!0),n.memoizedState=o):(gi(o,r)||(o=Hr(),en.lanes|=o,Kr|=o,n.baseState=!0),r)}function Qv(n,r){var o=Ut;Ut=o!==0&&4>o?o:4,n(!0);var u=mu.transition;mu.transition={};try{n(!1),r()}finally{Ut=o,mu.transition=u}}function Xh(){return fi().memoizedState}function e_(n,r,o){var u=wr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},qh(n))Yh(r,o);else if(o=wh(n,r,o,u),o!==null){var p=Fn();Si(o,n,u,p),$h(o,r,u)}}function t_(n,r,o){var u=wr(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(qh(n))Yh(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var C=r.lastRenderedState,B=x(C,o);if(p.hasEagerState=!0,p.eagerState=B,gi(B,C)){var X=r.interleaved;X===null?(p.next=p,cu(r)):(p.next=X.next,X.next=p),r.interleaved=p;return}}catch{}finally{}o=wh(n,r,p,u),o!==null&&(p=Fn(),Si(o,n,u,p),$h(o,r,u))}}function qh(n){var r=n.alternate;return n===en||r!==null&&r===en}function Yh(n,r){Va=el=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function $h(n,r,o){if((o&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ya(n,o)}}var il={readContext:ui,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},n_={readContext:ui,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:ui,useEffect:zh,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,tl(4194308,4,Hh.bind(null,r,n),o)},useLayoutEffect:function(n,r){return tl(4194308,4,n,r)},useInsertionEffect:function(n,r){return tl(4,2,n,r)},useMemo:function(n,r){var o=Li();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var u=Li();return r=o!==void 0?o(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=e_.bind(null,en,n),[u.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Oh,useDebugValue:Mu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Oh(!1),r=n[0];return n=Qv.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var u=en,p=Li();if(Kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),xn===null)throw Error(t(349));($r&30)!==0||Lh(u,r,o)}p.memoizedState=o;var x={value:o,getSnapshot:r};return p.queue=x,zh(Ih.bind(null,u,x,n),[n]),u.flags|=2048,ja(9,Nh.bind(null,u,x,o,r),void 0,null),o},useId:function(){var n=Li(),r=xn.identifierPrefix;if(Kt){var o=ji,u=Wi;o=(u&~(1<<32-yt(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ga++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Jv++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},i_={readContext:ui,useCallback:Gh,useContext:ui,useEffect:Su,useImperativeHandle:Vh,useInsertionEffect:kh,useLayoutEffect:Bh,useMemo:Wh,useReducer:xu,useRef:Fh,useState:function(){return xu(Wa)},useDebugValue:Mu,useDeferredValue:function(n){var r=fi();return jh(r,dn.memoizedState,n)},useTransition:function(){var n=xu(Wa)[0],r=fi().memoizedState;return[n,r]},useMutableSource:Rh,useSyncExternalStore:Ph,useId:Xh,unstable_isNewReconciler:!1},r_={readContext:ui,useCallback:Gh,useContext:ui,useEffect:Su,useImperativeHandle:Vh,useInsertionEffect:kh,useLayoutEffect:Bh,useMemo:Wh,useReducer:yu,useRef:Fh,useState:function(){return yu(Wa)},useDebugValue:Mu,useDeferredValue:function(n){var r=fi();return dn===null?r.memoizedState=n:jh(r,dn.memoizedState,n)},useTransition:function(){var n=yu(Wa)[0],r=fi().memoizedState;return[n,r]},useMutableSource:Rh,useSyncExternalStore:Ph,useId:Xh,unstable_isNewReconciler:!1};function _i(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Eu(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:oe({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var rl={isMounted:function(n){return(n=n._reactInternals)?Lt(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Fn(),p=wr(n),x=qi(u,p);x.payload=r,o!=null&&(x.callback=o),r=yr(n,x,p),r!==null&&(Si(r,n,p,u),Ko(r,n,p))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Fn(),p=wr(n),x=qi(u,p);x.tag=1,x.payload=r,o!=null&&(x.callback=o),r=yr(n,x,p),r!==null&&(Si(r,n,p,u),Ko(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Fn(),u=wr(n),p=qi(o,u);p.tag=2,r!=null&&(p.callback=r),r=yr(n,p,u),r!==null&&(Si(r,n,u,o),Ko(r,n,u))}};function Kh(n,r,o,u,p,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,C):r.prototype&&r.prototype.isPureReactComponent?!La(o,u)||!La(p,x):!0}function Zh(n,r,o){var u=!1,p=vr,x=r.contextType;return typeof x=="object"&&x!==null?x=ui(x):(p=Gn(r)?Wr:Cn.current,u=r.contextTypes,x=(u=u!=null)?Cs(n,p):vr),r=new r(o,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=rl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Jh(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&rl.enqueueReplaceState(r,r.state,null)}function wu(n,r,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},uu(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=ui(x):(x=Gn(r)?Wr:Cn.current,p.context=Cs(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Eu(n,r,x,o),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&rl.enqueueReplaceState(p,p.state,null),Zo(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,r){try{var o="",u=r;do o+=ie(u),u=u.return;while(u);var p=o}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function Tu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Au(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var s_=typeof WeakMap=="function"?WeakMap:Map;function Qh(n,r,o){o=qi(-1,o),o.tag=3,o.payload={element:null};var u=r.value;return o.callback=function(){fl||(fl=!0,Hu=u),Au(n,r)},o}function ep(n,r,o){o=qi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;o.payload=function(){return u(p)},o.callback=function(){Au(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(o.callback=function(){Au(n,r),typeof u!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})}),o}function tp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new s_;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(p.add(o),n=x_.bind(null,n,r,o),r.then(n,n))}function np(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function ip(n,r,o,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=qi(-1,1),r.tag=2,yr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var a_=R.ReactCurrentOwner,Wn=!1;function On(n,r,o,u){r.child=n===null?Eh(r,null,o,u):Ls(r,n.child,o,u)}function rp(n,r,o,u,p){o=o.render;var x=r.ref;return Is(r,p),u=vu(n,r,o,u,x,p),o=_u(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(Kt&&o&&eu(r),r.flags|=1,On(n,r,u,p),r.child)}function sp(n,r,o,u,p){if(n===null){var x=o.type;return typeof x=="function"&&!Yu(x)&&x.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=x,ap(n,r,x,u,p)):(n=vl(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var C=x.memoizedProps;if(o=o.compare,o=o!==null?o:La,o(C,u)&&n.ref===r.ref)return Yi(n,r,p)}return r.flags|=1,n=Ar(x,u),n.ref=r.ref,n.return=r,r.child=n}function ap(n,r,o,u,p){if(n!==null){var x=n.memoizedProps;if(La(x,u)&&n.ref===r.ref)if(Wn=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Wn=!0);else return r.lanes=n.lanes,Yi(n,r,p)}return Cu(n,r,o,u,p)}function op(n,r,o){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Fs,ti),ti|=o;else{if((o&1073741824)===0)return n=x!==null?x.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Gt(Fs,ti),ti|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:o,Gt(Fs,ti),ti|=u}else x!==null?(u=x.baseLanes|o,r.memoizedState=null):u=o,Gt(Fs,ti),ti|=u;return On(n,r,p,o),r.child}function lp(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Cu(n,r,o,u,p){var x=Gn(o)?Wr:Cn.current;return x=Cs(r,x),Is(r,p),o=vu(n,r,o,u,x,p),u=_u(),n!==null&&!Wn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Yi(n,r,p)):(Kt&&u&&eu(r),r.flags|=1,On(n,r,o,p),r.child)}function cp(n,r,o,u,p){if(Gn(o)){var x=!0;Vo(r)}else x=!1;if(Is(r,p),r.stateNode===null)al(n,r),Zh(r,o,u),wu(r,o,u,p),u=!0;else if(n===null){var C=r.stateNode,B=r.memoizedProps;C.props=B;var X=C.context,he=o.contextType;typeof he=="object"&&he!==null?he=ui(he):(he=Gn(o)?Wr:Cn.current,he=Cs(r,he));var Fe=o.getDerivedStateFromProps,Be=typeof Fe=="function"||typeof C.getSnapshotBeforeUpdate=="function";Be||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==u||X!==he)&&Jh(r,C,u,he),xr=!1;var De=r.memoizedState;C.state=De,Zo(r,u,C,p),X=r.memoizedState,B!==u||De!==X||Vn.current||xr?(typeof Fe=="function"&&(Eu(r,o,Fe,u),X=r.memoizedState),(B=xr||Kh(r,o,B,u,De,X,he))?(Be||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(r.flags|=4194308)):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=X),C.props=u,C.state=X,C.context=he,u=B):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{C=r.stateNode,Th(n,r),B=r.memoizedProps,he=r.type===r.elementType?B:_i(r.type,B),C.props=he,Be=r.pendingProps,De=C.context,X=o.contextType,typeof X=="object"&&X!==null?X=ui(X):(X=Gn(o)?Wr:Cn.current,X=Cs(r,X));var Qe=o.getDerivedStateFromProps;(Fe=typeof Qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==Be||De!==X)&&Jh(r,C,u,X),xr=!1,De=r.memoizedState,C.state=De,Zo(r,u,C,p);var at=r.memoizedState;B!==Be||De!==at||Vn.current||xr?(typeof Qe=="function"&&(Eu(r,o,Qe,u),at=r.memoizedState),(he=xr||Kh(r,o,he,u,De,at,X)||!1)?(Fe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,at,X),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,at,X)),typeof C.componentDidUpdate=="function"&&(r.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&De===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&De===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=at),C.props=u,C.state=at,C.context=X,u=he):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&De===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&De===n.memoizedState||(r.flags|=1024),u=!1)}return bu(n,r,o,u,x,p)}function bu(n,r,o,u,p,x){lp(n,r);var C=(r.flags&128)!==0;if(!u&&!C)return p&&ph(r,o,!1),Yi(n,r,x);u=r.stateNode,a_.current=r;var B=C&&typeof o.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&C?(r.child=Ls(r,n.child,null,x),r.child=Ls(r,null,B,x)):On(n,r,B,x),r.memoizedState=u.state,p&&ph(r,o,!0),r.child}function up(n){var r=n.stateNode;r.pendingContext?dh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&dh(n,r.context,!1),fu(n,r.containerInfo)}function fp(n,r,o,u,p){return Ps(),ru(p),r.flags|=256,On(n,r,o,u),r.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Pu(n){return{baseLanes:n,cachePool:null,transitions:null}}function dp(n,r,o){var u=r.pendingProps,p=Qt.current,x=!1,C=(r.flags&128)!==0,B;if((B=C)||(B=n!==null&&n.memoizedState===null?!1:(p&2)!==0),B?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Gt(Qt,p&1),n===null)return iu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(C=u.children,n=u.fallback,x?(u=r.mode,x=r.child,C={mode:"hidden",children:C},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=_l(C,u,0,null),n=es(n,u,o,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Pu(o),r.memoizedState=Ru,n):Lu(r,C));if(p=n.memoizedState,p!==null&&(B=p.dehydrated,B!==null))return o_(n,r,C,u,B,p,o);if(x){x=u.fallback,C=r.mode,p=n.child,B=p.sibling;var X={mode:"hidden",children:u.children};return(C&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=X,r.deletions=null):(u=Ar(p,X),u.subtreeFlags=p.subtreeFlags&14680064),B!==null?x=Ar(B,x):(x=es(x,C,o,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,C=n.child.memoizedState,C=C===null?Pu(o):{baseLanes:C.baseLanes|o,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~o,r.memoizedState=Ru,u}return x=n.child,n=x.sibling,u=Ar(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=o),u.return=r,u.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=u,r.memoizedState=null,u}function Lu(n,r){return r=_l({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function sl(n,r,o,u){return u!==null&&ru(u),Ls(r,n.child,null,o),n=Lu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function o_(n,r,o,u,p,x,C){if(o)return r.flags&256?(r.flags&=-257,u=Tu(Error(t(422))),sl(n,r,C,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=_l({mode:"visible",children:u.children},p,0,null),x=es(x,p,C,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&Ls(r,n.child,null,C),r.child.memoizedState=Pu(C),r.memoizedState=Ru,x);if((r.mode&1)===0)return sl(n,r,C,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var B=u.dgst;return u=B,x=Error(t(419)),u=Tu(x,u,void 0),sl(n,r,C,u)}if(B=(C&n.childLanes)!==0,Wn||B){if(u=xn,u!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|C))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,Xi(n,p),Si(u,n,p,-1))}return qu(),u=Tu(Error(t(421))),sl(n,r,C,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=y_.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,ei=mr(p.nextSibling),Qn=r,Kt=!0,vi=null,n!==null&&(li[ci++]=Wi,li[ci++]=ji,li[ci++]=jr,Wi=n.id,ji=n.overflow,jr=r),r=Lu(r,u.children),r.flags|=4096,r)}function hp(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),lu(n.return,r,o)}function Nu(n,r,o,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=o,x.tailMode=p)}function pp(n,r,o){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(On(n,r,u.children,o),u=Qt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hp(n,o,r);else if(n.tag===19)hp(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Gt(Qt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Jo(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Nu(r,!1,p,o,x);break;case"backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Jo(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Nu(r,!0,o,null,x);break;case"together":Nu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function al(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Yi(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Kr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Ar(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Ar(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function l_(n,r,o){switch(r.tag){case 3:up(r),Ps();break;case 5:bh(r);break;case 1:Gn(r.type)&&Vo(r);break;case 4:fu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Gt(Yo,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Gt(Qt,Qt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?dp(n,r,o):(Gt(Qt,Qt.current&1),n=Yi(n,r,o),n!==null?n.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(u=(o&r.childLanes)!==0,(n.flags&128)!==0){if(u)return pp(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Gt(Qt,Qt.current),u)break;return null;case 22:case 23:return r.lanes=0,op(n,r,o)}return Yi(n,r,o)}var mp,Iu,gp,vp;mp=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Iu=function(){},gp=function(n,r,o,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Yr(Pi.current);var x=null;switch(o){case"input":p=we(n,p),u=we(n,u),x=[];break;case"select":p=oe({},p,{value:void 0}),u=oe({},u,{value:void 0}),x=[];break;case"textarea":p=ne(n,p),u=ne(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ko)}ut(o,u);var C;o=null;for(he in p)if(!u.hasOwnProperty(he)&&p.hasOwnProperty(he)&&p[he]!=null)if(he==="style"){var B=p[he];for(C in B)B.hasOwnProperty(C)&&(o||(o={}),o[C]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?x||(x=[]):(x=x||[]).push(he,null));for(he in u){var X=u[he];if(B=p!=null?p[he]:void 0,u.hasOwnProperty(he)&&X!==B&&(X!=null||B!=null))if(he==="style")if(B){for(C in B)!B.hasOwnProperty(C)||X&&X.hasOwnProperty(C)||(o||(o={}),o[C]="");for(C in X)X.hasOwnProperty(C)&&B[C]!==X[C]&&(o||(o={}),o[C]=X[C])}else o||(x||(x=[]),x.push(he,o)),o=X;else he==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(x=x||[]).push(he,X)):he==="children"?typeof X!="string"&&typeof X!="number"||(x=x||[]).push(he,""+X):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(X!=null&&he==="onScroll"&&jt("scroll",n),x||B===X||(x=[])):(x=x||[]).push(he,X))}o&&(x=x||[]).push("style",o);var he=x;(r.updateQueue=he)&&(r.flags|=4)}},vp=function(n,r,o,u){o!==u&&(r.flags|=4)};function Xa(n,r){if(!Kt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Rn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function c_(n,r,o){var u=r.pendingProps;switch(tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(r),null;case 1:return Gn(r.type)&&Ho(),Rn(r),null;case 3:return u=r.stateNode,Ds(),Xt(Vn),Xt(Cn),pu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Xo(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,vi!==null&&(Wu(vi),vi=null))),Iu(n,r),Rn(r),null;case 5:du(r);var p=Yr(Ha.current);if(o=r.type,n!==null&&r.stateNode!=null)gp(n,r,o,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Rn(r),null}if(n=Yr(Pi.current),Xo(r)){u=r.stateNode,o=r.type;var x=r.memoizedProps;switch(u[Ri]=r,u[Oa]=x,n=(r.mode&1)!==0,o){case"dialog":jt("cancel",u),jt("close",u);break;case"iframe":case"object":case"embed":jt("load",u);break;case"video":case"audio":for(p=0;p<Ia.length;p++)jt(Ia[p],u);break;case"source":jt("error",u);break;case"img":case"image":case"link":jt("error",u),jt("load",u);break;case"details":jt("toggle",u);break;case"input":Me(u,x),jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},jt("invalid",u);break;case"textarea":Se(u,x),jt("invalid",u)}ut(o,x),p=null;for(var C in x)if(x.hasOwnProperty(C)){var B=x[C];C==="children"?typeof B=="string"?u.textContent!==B&&(x.suppressHydrationWarning!==!0&&zo(u.textContent,B,n),p=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(x.suppressHydrationWarning!==!0&&zo(u.textContent,B,n),p=["children",""+B]):a.hasOwnProperty(C)&&B!=null&&C==="onScroll"&&jt("scroll",u)}switch(o){case"input":G(u),Ce(u,x,!0);break;case"textarea":G(u),ve(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=ko)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=qe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(o,{is:u.is}):(n=C.createElement(o),o==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,o),n[Ri]=r,n[Oa]=u,mp(n,r,!1,!1),r.stateNode=n;e:{switch(C=dt(o,u),o){case"dialog":jt("cancel",n),jt("close",n),p=u;break;case"iframe":case"object":case"embed":jt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Ia.length;p++)jt(Ia[p],n);p=u;break;case"source":jt("error",n),p=u;break;case"img":case"image":case"link":jt("error",n),jt("load",n),p=u;break;case"details":jt("toggle",n),p=u;break;case"input":Me(n,u),p=we(n,u),jt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=oe({},u,{value:void 0}),jt("invalid",n);break;case"textarea":Se(n,u),p=ne(n,u),jt("invalid",n);break;default:p=u}ut(o,p),B=p;for(x in B)if(B.hasOwnProperty(x)){var X=B[x];x==="style"?ze(n,X):x==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&et(n,X)):x==="children"?typeof X=="string"?(o!=="textarea"||X!=="")&&Ae(n,X):typeof X=="number"&&Ae(n,""+X):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?X!=null&&x==="onScroll"&&jt("scroll",n):X!=null&&w(n,x,X,C))}switch(o){case"input":G(n),Ce(n,u,!1);break;case"textarea":G(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Le(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?A(n,!!u.multiple,x,!1):u.defaultValue!=null&&A(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ko)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Rn(r),null;case 6:if(n&&r.stateNode!=null)vp(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(o=Yr(Ha.current),Yr(Pi.current),Xo(r)){if(u=r.stateNode,o=r.memoizedProps,u[Ri]=r,(x=u.nodeValue!==o)&&(n=Qn,n!==null))switch(n.tag){case 3:zo(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zo(u.nodeValue,o,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ri]=r,r.stateNode=u}return Rn(r),null;case 13:if(Xt(Qt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&ei!==null&&(r.mode&1)!==0&&(r.flags&128)===0)yh(),Ps(),r.flags|=98560,x=!1;else if(x=Xo(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ri]=r}else Ps(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Rn(r),x=!1}else vi!==null&&(Wu(vi),vi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Qt.current&1)!==0?hn===0&&(hn=3):qu())),r.updateQueue!==null&&(r.flags|=4),Rn(r),null);case 4:return Ds(),Iu(n,r),n===null&&Da(r.stateNode.containerInfo),Rn(r),null;case 10:return ou(r.type._context),Rn(r),null;case 17:return Gn(r.type)&&Ho(),Rn(r),null;case 19:if(Xt(Qt),x=r.memoizedState,x===null)return Rn(r),null;if(u=(r.flags&128)!==0,C=x.rendering,C===null)if(u)Xa(x,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(C=Jo(n),C!==null){for(r.flags|=128,Xa(x,!1),u=C.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=o,o=r.child;o!==null;)x=o,n=u,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(Qt,Qt.current&1|2),r.child}n=n.sibling}x.tail!==null&&Je()>zs&&(r.flags|=128,u=!0,Xa(x,!1),r.lanes=4194304)}else{if(!u)if(n=Jo(C),n!==null){if(r.flags|=128,u=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Xa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!Kt)return Rn(r),null}else 2*Je()-x.renderingStartTime>zs&&o!==1073741824&&(r.flags|=128,u=!0,Xa(x,!1),r.lanes=4194304);x.isBackwards?(C.sibling=r.child,r.child=C):(o=x.last,o!==null?o.sibling=C:r.child=C,x.last=C)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=Je(),r.sibling=null,o=Qt.current,Gt(Qt,u?o&1|2:o&1),r):(Rn(r),null);case 22:case 23:return Xu(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(ti&1073741824)!==0&&(Rn(r),r.subtreeFlags&6&&(r.flags|=8192)):Rn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function u_(n,r){switch(tu(r),r.tag){case 1:return Gn(r.type)&&Ho(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ds(),Xt(Vn),Xt(Cn),pu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return du(r),null;case 13:if(Xt(Qt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ps()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Xt(Qt),null;case 4:return Ds(),null;case 10:return ou(r.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var ol=!1,Pn=!1,f_=typeof WeakSet=="function"?WeakSet:Set,it=null;function Os(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){nn(n,r,u)}else o.current=null}function Du(n,r,o){try{o()}catch(u){nn(n,r,u)}}var _p=!1;function d_(n,r){if(Xc=Co,n=Kd(),zc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var C=0,B=-1,X=-1,he=0,Fe=0,Be=n,De=null;t:for(;;){for(var Qe;Be!==o||p!==0&&Be.nodeType!==3||(B=C+p),Be!==x||u!==0&&Be.nodeType!==3||(X=C+u),Be.nodeType===3&&(C+=Be.nodeValue.length),(Qe=Be.firstChild)!==null;)De=Be,Be=Qe;for(;;){if(Be===n)break t;if(De===o&&++he===p&&(B=C),De===x&&++Fe===u&&(X=C),(Qe=Be.nextSibling)!==null)break;Be=De,De=Be.parentNode}Be=Qe}o=B===-1||X===-1?null:{start:B,end:X}}else o=null}o=o||{start:0,end:0}}else o=null;for(qc={focusedElem:n,selectionRange:o},Co=!1,it=r;it!==null;)if(r=it,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,it=n;else for(;it!==null;){r=it;try{var at=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var ot=at.memoizedProps,sn=at.memoizedState,se=r.stateNode,Y=se.getSnapshotBeforeUpdate(r.elementType===r.type?ot:_i(r.type,ot),sn);se.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){nn(r,r.return,We)}if(n=r.sibling,n!==null){n.return=r.return,it=n;break}it=r.return}return at=_p,_p=!1,at}function qa(n,r,o){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Du(r,o,x)}p=p.next}while(p!==u)}}function ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==r)}}function Uu(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function xp(n){var r=n.alternate;r!==null&&(n.alternate=null,xp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ri],delete r[Oa],delete r[Zc],delete r[Yv],delete r[$v])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function yp(n){return n.tag===5||n.tag===3||n.tag===4}function Sp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ou(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ko));else if(u!==4&&(n=n.child,n!==null))for(Ou(n,r,o),n=n.sibling;n!==null;)Ou(n,r,o),n=n.sibling}function Fu(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Fu(n,r,o),n=n.sibling;n!==null;)Fu(n,r,o),n=n.sibling}var En=null,xi=!1;function Sr(n,r,o){for(o=o.child;o!==null;)Mp(n,r,o),o=o.sibling}function Mp(n,r,o){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(St,o)}catch{}switch(o.tag){case 5:Pn||Os(o,r);case 6:var u=En,p=xi;En=null,Sr(n,r,o),En=u,xi=p,En!==null&&(xi?(n=En,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):En.removeChild(o.stateNode));break;case 18:En!==null&&(xi?(n=En,o=o.stateNode,n.nodeType===8?Kc(n.parentNode,o):n.nodeType===1&&Kc(n,o),Ta(n)):Kc(En,o.stateNode));break;case 4:u=En,p=xi,En=o.stateNode.containerInfo,xi=!0,Sr(n,r,o),En=u,xi=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Du(o,r,C),p=p.next}while(p!==u)}Sr(n,r,o);break;case 1:if(!Pn&&(Os(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){nn(o,r,B)}Sr(n,r,o);break;case 21:Sr(n,r,o);break;case 22:o.mode&1?(Pn=(u=Pn)||o.memoizedState!==null,Sr(n,r,o),Pn=u):Sr(n,r,o);break;default:Sr(n,r,o)}}function Ep(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new f_),r.forEach(function(u){var p=S_.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function yi(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var x=n,C=r,B=C;e:for(;B!==null;){switch(B.tag){case 5:En=B.stateNode,xi=!1;break e;case 3:En=B.stateNode.containerInfo,xi=!0;break e;case 4:En=B.stateNode.containerInfo,xi=!0;break e}B=B.return}if(En===null)throw Error(t(160));Mp(x,C,p),En=null,xi=!1;var X=p.alternate;X!==null&&(X.return=null),p.return=null}catch(he){nn(p,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wp(r,n),r=r.sibling}function wp(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(r,n),Ni(n),u&4){try{qa(3,n,n.return),ll(3,n)}catch(ot){nn(n,n.return,ot)}try{qa(5,n,n.return)}catch(ot){nn(n,n.return,ot)}}break;case 1:yi(r,n),Ni(n),u&512&&o!==null&&Os(o,o.return);break;case 5:if(yi(r,n),Ni(n),u&512&&o!==null&&Os(o,o.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(ot){nn(n,n.return,ot)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,C=o!==null?o.memoizedProps:x,B=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{B==="input"&&x.type==="radio"&&x.name!=null&&Te(p,x),dt(B,C);var he=dt(B,x);for(C=0;C<X.length;C+=2){var Fe=X[C],Be=X[C+1];Fe==="style"?ze(p,Be):Fe==="dangerouslySetInnerHTML"?et(p,Be):Fe==="children"?Ae(p,Be):w(p,Fe,Be,he)}switch(B){case"input":Pe(p,x);break;case"textarea":me(p,x);break;case"select":var De=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Qe=x.value;Qe!=null?A(p,!!x.multiple,Qe,!1):De!==!!x.multiple&&(x.defaultValue!=null?A(p,!!x.multiple,x.defaultValue,!0):A(p,!!x.multiple,x.multiple?[]:"",!1))}p[Oa]=x}catch(ot){nn(n,n.return,ot)}}break;case 6:if(yi(r,n),Ni(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ot){nn(n,n.return,ot)}}break;case 3:if(yi(r,n),Ni(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ta(r.containerInfo)}catch(ot){nn(n,n.return,ot)}break;case 4:yi(r,n),Ni(n);break;case 13:yi(r,n),Ni(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Bu=Je())),u&4&&Ep(n);break;case 22:if(Fe=o!==null&&o.memoizedState!==null,n.mode&1?(Pn=(he=Pn)||Fe,yi(r,n),Pn=he):yi(r,n),Ni(n),u&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Fe&&(n.mode&1)!==0)for(it=n,Fe=n.child;Fe!==null;){for(Be=it=Fe;it!==null;){switch(De=it,Qe=De.child,De.tag){case 0:case 11:case 14:case 15:qa(4,De,De.return);break;case 1:Os(De,De.return);var at=De.stateNode;if(typeof at.componentWillUnmount=="function"){u=De,o=De.return;try{r=u,at.props=r.memoizedProps,at.state=r.memoizedState,at.componentWillUnmount()}catch(ot){nn(u,o,ot)}}break;case 5:Os(De,De.return);break;case 22:if(De.memoizedState!==null){Cp(Be);continue}}Qe!==null?(Qe.return=De,it=Qe):Cp(Be)}Fe=Fe.sibling}e:for(Fe=null,Be=n;;){if(Be.tag===5){if(Fe===null){Fe=Be;try{p=Be.stateNode,he?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(B=Be.stateNode,X=Be.memoizedProps.style,C=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=Ze("display",C))}catch(ot){nn(n,n.return,ot)}}}else if(Be.tag===6){if(Fe===null)try{Be.stateNode.nodeValue=he?"":Be.memoizedProps}catch(ot){nn(n,n.return,ot)}}else if((Be.tag!==22&&Be.tag!==23||Be.memoizedState===null||Be===n)&&Be.child!==null){Be.child.return=Be,Be=Be.child;continue}if(Be===n)break e;for(;Be.sibling===null;){if(Be.return===null||Be.return===n)break e;Fe===Be&&(Fe=null),Be=Be.return}Fe===Be&&(Fe=null),Be.sibling.return=Be.return,Be=Be.sibling}}break;case 19:yi(r,n),Ni(n),u&4&&Ep(n);break;case 21:break;default:yi(r,n),Ni(n)}}function Ni(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(yp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ae(p,""),u.flags&=-33);var x=Sp(n);Fu(n,x,p);break;case 3:case 4:var C=u.stateNode.containerInfo,B=Sp(n);Ou(n,B,C);break;default:throw Error(t(161))}}catch(X){nn(n,n.return,X)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function h_(n,r,o){it=n,Tp(n)}function Tp(n,r,o){for(var u=(n.mode&1)!==0;it!==null;){var p=it,x=p.child;if(p.tag===22&&u){var C=p.memoizedState!==null||ol;if(!C){var B=p.alternate,X=B!==null&&B.memoizedState!==null||Pn;B=ol;var he=Pn;if(ol=C,(Pn=X)&&!he)for(it=p;it!==null;)C=it,X=C.child,C.tag===22&&C.memoizedState!==null?bp(p):X!==null?(X.return=C,it=X):bp(p);for(;x!==null;)it=x,Tp(x),x=x.sibling;it=p,ol=B,Pn=he}Ap(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,it=x):Ap(n)}}function Ap(n){for(;it!==null;){var r=it;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Pn||ll(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Pn)if(o===null)u.componentDidMount();else{var p=r.elementType===r.type?o.memoizedProps:_i(r.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Ch(r,x,u);break;case 3:var C=r.updateQueue;if(C!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ch(r,C,o)}break;case 5:var B=r.stateNode;if(o===null&&r.flags&4){o=B;var X=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&o.focus();break;case"img":X.src&&(o.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Fe=he.memoizedState;if(Fe!==null){var Be=Fe.dehydrated;Be!==null&&Ta(Be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||r.flags&512&&Uu(r)}catch(De){nn(r,r.return,De)}}if(r===n){it=null;break}if(o=r.sibling,o!==null){o.return=r.return,it=o;break}it=r.return}}function Cp(n){for(;it!==null;){var r=it;if(r===n){it=null;break}var o=r.sibling;if(o!==null){o.return=r.return,it=o;break}it=r.return}}function bp(n){for(;it!==null;){var r=it;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ll(4,r)}catch(X){nn(r,o,X)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(X){nn(r,p,X)}}var x=r.return;try{Uu(r)}catch(X){nn(r,x,X)}break;case 5:var C=r.return;try{Uu(r)}catch(X){nn(r,C,X)}}}catch(X){nn(r,r.return,X)}if(r===n){it=null;break}var B=r.sibling;if(B!==null){B.return=r.return,it=B;break}it=r.return}}var p_=Math.ceil,cl=R.ReactCurrentDispatcher,zu=R.ReactCurrentOwner,di=R.ReactCurrentBatchConfig,Nt=0,xn=null,cn=null,wn=0,ti=0,Fs=gr(0),hn=0,Ya=null,Kr=0,ul=0,ku=0,$a=null,jn=null,Bu=0,zs=1/0,$i=null,fl=!1,Hu=null,Mr=null,dl=!1,Er=null,hl=0,Ka=0,Vu=null,pl=-1,ml=0;function Fn(){return(Nt&6)!==0?Je():pl!==-1?pl:pl=Je()}function wr(n){return(n.mode&1)===0?1:(Nt&2)!==0&&wn!==0?wn&-wn:Zv.transition!==null?(ml===0&&(ml=Hr()),ml):(n=Ut,n!==0||(n=window.event,n=n===void 0?16:Pd(n.type)),n)}function Si(n,r,o,u){if(50<Ka)throw Ka=0,Vu=null,Error(t(185));Vr(n,o,u),((Nt&2)===0||n!==xn)&&(n===xn&&((Nt&2)===0&&(ul|=o),hn===4&&Tr(n,wn)),Xn(n,u),o===1&&Nt===0&&(r.mode&1)===0&&(zs=Je()+500,Go&&_r()))}function Xn(n,r){var o=n.callbackNode;Hi(n,r);var u=Hn(n,n===xn?wn:0);if(u===0)o!==null&&Ye(o),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(o!=null&&Ye(o),r===1)n.tag===0?Kv(Pp.bind(null,n)):mh(Pp.bind(null,n)),Xv(function(){(Nt&6)===0&&_r()}),o=null;else{switch(Eo(u)){case 1:o=lt;break;case 4:o=Ct;break;case 16:o=Dt;break;case 536870912:o=$t;break;default:o=Dt}o=zp(o,Rp.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Rp(n,r){if(pl=-1,ml=0,(Nt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ks()&&n.callbackNode!==o)return null;var u=Hn(n,n===xn?wn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=gl(n,u);else{r=u;var p=Nt;Nt|=2;var x=Np();(xn!==n||wn!==r)&&($i=null,zs=Je()+500,Jr(n,r));do try{v_();break}catch(B){Lp(n,B)}while(!0);au(),cl.current=x,Nt=p,cn!==null?r=0:(xn=null,wn=0,r=hn)}if(r!==0){if(r===2&&(p=Br(n),p!==0&&(u=p,r=Gu(n,p))),r===1)throw o=Ya,Jr(n,0),Tr(n,u),Xn(n,Je()),o;if(r===6)Tr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!m_(p)&&(r=gl(n,u),r===2&&(x=Br(n),x!==0&&(u=x,r=Gu(n,x))),r===1))throw o=Ya,Jr(n,0),Tr(n,u),Xn(n,Je()),o;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Qr(n,jn,$i);break;case 3:if(Tr(n,u),(u&130023424)===u&&(r=Bu+500-Je(),10<r)){if(Hn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Fn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=$c(Qr.bind(null,n,jn,$i),r);break}Qr(n,jn,$i);break;case 4:if(Tr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var C=31-yt(u);x=1<<C,C=r[C],C>p&&(p=C),u&=~x}if(u=p,u=Je()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*p_(u/1960))-u,10<u){n.timeoutHandle=$c(Qr.bind(null,n,jn,$i),u);break}Qr(n,jn,$i);break;case 5:Qr(n,jn,$i);break;default:throw Error(t(329))}}}return Xn(n,Je()),n.callbackNode===o?Rp.bind(null,n):null}function Gu(n,r){var o=$a;return n.current.memoizedState.isDehydrated&&(Jr(n,r).flags|=256),n=gl(n,r),n!==2&&(r=jn,jn=o,r!==null&&Wu(r)),n}function Wu(n){jn===null?jn=n:jn.push.apply(jn,n)}function m_(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],x=p.getSnapshot;p=p.value;try{if(!gi(x(),p))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Tr(n,r){for(r&=~ku,r&=~ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-yt(r),u=1<<o;n[o]=-1,r&=~u}}function Pp(n){if((Nt&6)!==0)throw Error(t(327));ks();var r=Hn(n,0);if((r&1)===0)return Xn(n,Je()),null;var o=gl(n,r);if(n.tag!==0&&o===2){var u=Br(n);u!==0&&(r=u,o=Gu(n,u))}if(o===1)throw o=Ya,Jr(n,0),Tr(n,r),Xn(n,Je()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Qr(n,jn,$i),Xn(n,Je()),null}function ju(n,r){var o=Nt;Nt|=1;try{return n(r)}finally{Nt=o,Nt===0&&(zs=Je()+500,Go&&_r())}}function Zr(n){Er!==null&&Er.tag===0&&(Nt&6)===0&&ks();var r=Nt;Nt|=1;var o=di.transition,u=Ut;try{if(di.transition=null,Ut=1,n)return n()}finally{Ut=u,di.transition=o,Nt=r,(Nt&6)===0&&_r()}}function Xu(){ti=Fs.current,Xt(Fs)}function Jr(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,jv(o)),cn!==null)for(o=cn.return;o!==null;){var u=o;switch(tu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ho();break;case 3:Ds(),Xt(Vn),Xt(Cn),pu();break;case 5:du(u);break;case 4:Ds();break;case 13:Xt(Qt);break;case 19:Xt(Qt);break;case 10:ou(u.type._context);break;case 22:case 23:Xu()}o=o.return}if(xn=n,cn=n=Ar(n.current,null),wn=ti=r,hn=0,Ya=null,ku=ul=Kr=0,jn=$a=null,qr!==null){for(r=0;r<qr.length;r++)if(o=qr[r],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,x=o.pending;if(x!==null){var C=x.next;x.next=p,u.next=C}o.pending=u}qr=null}return n}function Lp(n,r){do{var o=cn;try{if(au(),Qo.current=il,el){for(var u=en.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}el=!1}if($r=0,_n=dn=en=null,Va=!1,Ga=0,zu.current=null,o===null||o.return===null){hn=1,Ya=r,cn=null;break}e:{var x=n,C=o.return,B=o,X=r;if(r=wn,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var he=X,Fe=B,Be=Fe.tag;if((Fe.mode&1)===0&&(Be===0||Be===11||Be===15)){var De=Fe.alternate;De?(Fe.updateQueue=De.updateQueue,Fe.memoizedState=De.memoizedState,Fe.lanes=De.lanes):(Fe.updateQueue=null,Fe.memoizedState=null)}var Qe=np(C);if(Qe!==null){Qe.flags&=-257,ip(Qe,C,B,x,r),Qe.mode&1&&tp(x,he,r),r=Qe,X=he;var at=r.updateQueue;if(at===null){var ot=new Set;ot.add(X),r.updateQueue=ot}else at.add(X);break e}else{if((r&1)===0){tp(x,he,r),qu();break e}X=Error(t(426))}}else if(Kt&&B.mode&1){var sn=np(C);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),ip(sn,C,B,x,r),ru(Us(X,B));break e}}x=X=Us(X,B),hn!==4&&(hn=2),$a===null?$a=[x]:$a.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var se=Qh(x,X,r);Ah(x,se);break e;case 1:B=X;var Y=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Mr===null||!Mr.has(ue)))){x.flags|=65536,r&=-r,x.lanes|=r;var We=ep(x,B,r);Ah(x,We);break e}}x=x.return}while(x!==null)}Dp(o)}catch(ct){r=ct,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function Np(){var n=cl.current;return cl.current=il,n===null?il:n}function qu(){(hn===0||hn===3||hn===2)&&(hn=4),xn===null||(Kr&268435455)===0&&(ul&268435455)===0||Tr(xn,wn)}function gl(n,r){var o=Nt;Nt|=2;var u=Np();(xn!==n||wn!==r)&&($i=null,Jr(n,r));do try{g_();break}catch(p){Lp(n,p)}while(!0);if(au(),Nt=o,cl.current=u,cn!==null)throw Error(t(261));return xn=null,wn=0,hn}function g_(){for(;cn!==null;)Ip(cn)}function v_(){for(;cn!==null&&!tt();)Ip(cn)}function Ip(n){var r=Fp(n.alternate,n,ti);n.memoizedProps=n.pendingProps,r===null?Dp(n):cn=r,zu.current=null}function Dp(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=c_(o,r,ti),o!==null){cn=o;return}}else{if(o=u_(o,r),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,cn=null;return}}if(r=r.sibling,r!==null){cn=r;return}cn=r=n}while(r!==null);hn===0&&(hn=5)}function Qr(n,r,o){var u=Ut,p=di.transition;try{di.transition=null,Ut=1,__(n,r,o,u)}finally{di.transition=p,Ut=u}return null}function __(n,r,o,u){do ks();while(Er!==null);if((Nt&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=o.lanes|o.childLanes;if(wc(n,x),n===xn&&(cn=xn=null,wn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||dl||(dl=!0,zp(Dt,function(){return ks(),null})),x=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||x){x=di.transition,di.transition=null;var C=Ut;Ut=1;var B=Nt;Nt|=4,zu.current=null,d_(n,o),wp(o,n),zv(qc),Co=!!Xc,qc=Xc=null,n.current=o,h_(o),st(),Nt=B,Ut=C,di.transition=x}else n.current=o;if(dl&&(dl=!1,Er=n,hl=p),x=n.pendingLanes,x===0&&(Mr=null),rn(o.stateNode),Xn(n,Je()),r!==null)for(u=n.onRecoverableError,o=0;o<r.length;o++)p=r[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(fl)throw fl=!1,n=Hu,Hu=null,n;return(hl&1)!==0&&n.tag!==0&&ks(),x=n.pendingLanes,(x&1)!==0?n===Vu?Ka++:(Ka=0,Vu=n):Ka=0,_r(),null}function ks(){if(Er!==null){var n=Eo(hl),r=di.transition,o=Ut;try{if(di.transition=null,Ut=16>n?16:n,Er===null)var u=!1;else{if(n=Er,Er=null,hl=0,(Nt&6)!==0)throw Error(t(331));var p=Nt;for(Nt|=4,it=n.current;it!==null;){var x=it,C=x.child;if((it.flags&16)!==0){var B=x.deletions;if(B!==null){for(var X=0;X<B.length;X++){var he=B[X];for(it=he;it!==null;){var Fe=it;switch(Fe.tag){case 0:case 11:case 15:qa(8,Fe,x)}var Be=Fe.child;if(Be!==null)Be.return=Fe,it=Be;else for(;it!==null;){Fe=it;var De=Fe.sibling,Qe=Fe.return;if(xp(Fe),Fe===he){it=null;break}if(De!==null){De.return=Qe,it=De;break}it=Qe}}}var at=x.alternate;if(at!==null){var ot=at.child;if(ot!==null){at.child=null;do{var sn=ot.sibling;ot.sibling=null,ot=sn}while(ot!==null)}}it=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,it=C;else e:for(;it!==null;){if(x=it,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:qa(9,x,x.return)}var se=x.sibling;if(se!==null){se.return=x.return,it=se;break e}it=x.return}}var Y=n.current;for(it=Y;it!==null;){C=it;var ue=C.child;if((C.subtreeFlags&2064)!==0&&ue!==null)ue.return=C,it=ue;else e:for(C=Y;it!==null;){if(B=it,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:ll(9,B)}}catch(ct){nn(B,B.return,ct)}if(B===C){it=null;break e}var We=B.sibling;if(We!==null){We.return=B.return,it=We;break e}it=B.return}}if(Nt=p,_r(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(St,n)}catch{}u=!0}return u}finally{Ut=o,di.transition=r}}return!1}function Up(n,r,o){r=Us(o,r),r=Qh(n,r,1),n=yr(n,r,1),r=Fn(),n!==null&&(Vr(n,1,r),Xn(n,r))}function nn(n,r,o){if(n.tag===3)Up(n,n,o);else for(;r!==null;){if(r.tag===3){Up(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mr===null||!Mr.has(u))){n=Us(o,n),n=ep(r,n,1),r=yr(r,n,1),n=Fn(),r!==null&&(Vr(r,1,n),Xn(r,n));break}}r=r.return}}function x_(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),r=Fn(),n.pingedLanes|=n.suspendedLanes&o,xn===n&&(wn&o)===o&&(hn===4||hn===3&&(wn&130023424)===wn&&500>Je()-Bu?Jr(n,0):ku|=o),Xn(n,r)}function Op(n,r){r===0&&((n.mode&1)===0?r=1:(r=zt,zt<<=1,(zt&130023424)===0&&(zt=4194304)));var o=Fn();n=Xi(n,r),n!==null&&(Vr(n,r,o),Xn(n,o))}function y_(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Op(n,o)}function S_(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Op(n,o)}var Fp;Fp=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Wn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Wn=!1,l_(n,r,o);Wn=(n.flags&131072)!==0}else Wn=!1,Kt&&(r.flags&1048576)!==0&&gh(r,jo,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;al(n,r),n=r.pendingProps;var p=Cs(r,Cn.current);Is(r,o),p=vu(null,r,u,n,p,o);var x=_u();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(u)?(x=!0,Vo(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,uu(r),p.updater=rl,r.stateNode=p,p._reactInternals=r,wu(r,u,n,o),r=bu(null,r,u,!0,x,o)):(r.tag=0,Kt&&x&&eu(r),On(null,r,p,o),r=r.child),r;case 16:u=r.elementType;e:{switch(al(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=E_(u),n=_i(u,n),p){case 0:r=Cu(null,r,u,n,o);break e;case 1:r=cp(null,r,u,n,o);break e;case 11:r=rp(null,r,u,n,o);break e;case 14:r=sp(null,r,u,_i(u.type,n),o);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),Cu(n,r,u,p,o);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),cp(n,r,u,p,o);case 3:e:{if(up(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,Th(n,r),Zo(r,u,null,o);var C=r.memoizedState;if(u=C.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=Us(Error(t(423)),r),r=fp(n,r,u,o,p);break e}else if(u!==p){p=Us(Error(t(424)),r),r=fp(n,r,u,o,p);break e}else for(ei=mr(r.stateNode.containerInfo.firstChild),Qn=r,Kt=!0,vi=null,o=Eh(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ps(),u===p){r=Yi(n,r,o);break e}On(n,r,u,o)}r=r.child}return r;case 5:return bh(r),n===null&&iu(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,C=p.children,Yc(u,p)?C=null:x!==null&&Yc(u,x)&&(r.flags|=32),lp(n,r),On(n,r,C,o),r.child;case 6:return n===null&&iu(r),null;case 13:return dp(n,r,o);case 4:return fu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Ls(r,null,u,o):On(n,r,u,o),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),rp(n,r,u,p,o);case 7:return On(n,r,r.pendingProps,o),r.child;case 8:return On(n,r,r.pendingProps.children,o),r.child;case 12:return On(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,C=p.value,Gt(Yo,u._currentValue),u._currentValue=C,x!==null)if(gi(x.value,C)){if(x.children===p.children&&!Vn.current){r=Yi(n,r,o);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var B=x.dependencies;if(B!==null){C=x.child;for(var X=B.firstContext;X!==null;){if(X.context===u){if(x.tag===1){X=qi(-1,o&-o),X.tag=2;var he=x.updateQueue;if(he!==null){he=he.shared;var Fe=he.pending;Fe===null?X.next=X:(X.next=Fe.next,Fe.next=X),he.pending=X}}x.lanes|=o,X=x.alternate,X!==null&&(X.lanes|=o),lu(x.return,o,r),B.lanes|=o;break}X=X.next}}else if(x.tag===10)C=x.type===r.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=o,B=C.alternate,B!==null&&(B.lanes|=o),lu(C,o,r),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===r){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}On(n,r,p.children,o),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Is(r,o),p=ui(p),u=u(p),r.flags|=1,On(n,r,u,o),r.child;case 14:return u=r.type,p=_i(u,r.pendingProps),p=_i(u.type,p),sp(n,r,u,p,o);case 15:return ap(n,r,r.type,r.pendingProps,o);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),al(n,r),r.tag=1,Gn(u)?(n=!0,Vo(r)):n=!1,Is(r,o),Zh(r,u,p),wu(r,u,p,o),bu(null,r,u,!0,n,o);case 19:return pp(n,r,o);case 22:return op(n,r,o)}throw Error(t(156,r.tag))};function zp(n,r){return Re(n,r)}function M_(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,r,o,u){return new M_(n,r,o,u)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E_(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===de)return 14}return 2}function Ar(n,r){var o=n.alternate;return o===null?(o=hi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function vl(n,r,o,u,p,x){var C=2;if(u=n,typeof n=="function")Yu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case D:return es(o.children,p,x,r);case F:C=8,p|=8;break;case P:return n=hi(12,o,r,p|2),n.elementType=P,n.lanes=x,n;case $:return n=hi(13,o,r,p),n.elementType=$,n.lanes=x,n;case te:return n=hi(19,o,r,p),n.elementType=te,n.lanes=x,n;case re:return _l(o,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:C=10;break e;case z:C=9;break e;case Z:C=11;break e;case de:C=14;break e;case j:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=hi(C,o,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function es(n,r,o,u){return n=hi(7,n,u,r),n.lanes=o,n}function _l(n,r,o,u){return n=hi(22,n,u,r),n.elementType=re,n.lanes=o,n.stateNode={isHidden:!1},n}function $u(n,r,o){return n=hi(6,n,null,r),n.lanes=o,n}function Ku(n,r,o){return r=hi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function w_(n,r,o,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Zu(n,r,o,u,p,x,C,B,X){return n=new w_(n,r,o,B,X),r===1?(r=1,x===!0&&(r|=8)):r=0,x=hi(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(x),n}function T_(n,r,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:n,containerInfo:r,implementation:o}}function kp(n){if(!n)return vr;n=n._reactInternals;e:{if(Lt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return hh(n,o,r)}return r}function Bp(n,r,o,u,p,x,C,B,X){return n=Zu(o,u,!0,n,p,x,C,B,X),n.context=kp(null),o=n.current,u=Fn(),p=wr(o),x=qi(u,p),x.callback=r??null,yr(o,x,p),n.current.lanes=p,Vr(n,p,u),Xn(n,u),n}function xl(n,r,o,u){var p=r.current,x=Fn(),C=wr(p);return o=kp(o),r.context===null?r.context=o:r.pendingContext=o,r=qi(x,C),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=yr(p,r,C),n!==null&&(Si(n,p,C,x),Ko(n,p,C)),C}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Ju(n,r){Hp(n,r),(n=n.alternate)&&Hp(n,r)}function A_(){return null}var Vp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qu(n){this._internalRoot=n}Sl.prototype.render=Qu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));xl(n,r,null,null)},Sl.prototype.unmount=Qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Zr(function(){xl(null,n,null,null)}),r[Vi]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Td();n={blockedOn:null,target:n,priority:r};for(var o=0;o<dr.length&&r!==0&&r<dr[o].priority;o++);dr.splice(o,0,n),o===0&&bd(n)}};function ef(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function C_(n,r,o,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var he=yl(C);x.call(he)}}var C=Bp(r,u,n,0,null,!1,!1,"",Gp);return n._reactRootContainer=C,n[Vi]=C.current,Da(n.nodeType===8?n.parentNode:n),Zr(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var B=u;u=function(){var he=yl(X);B.call(he)}}var X=Zu(n,0,!1,null,null,!1,!1,"",Gp);return n._reactRootContainer=X,n[Vi]=X.current,Da(n.nodeType===8?n.parentNode:n),Zr(function(){xl(r,X,o,u)}),X}function El(n,r,o,u,p){var x=o._reactRootContainer;if(x){var C=x;if(typeof p=="function"){var B=p;p=function(){var X=yl(C);B.call(X)}}xl(r,C,n,p)}else C=C_(o,r,n,p,u);return yl(C)}wo=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=fn(r.pendingLanes);o!==0&&(ya(r,o|1),Xn(r,Je()),(Nt&6)===0&&(zs=Je()+500,_r()))}break;case 13:Zr(function(){var u=Xi(n,1);if(u!==null){var p=Fn();Si(u,n,1,p)}}),Ju(n,1)}},Tc=function(n){if(n.tag===13){var r=Xi(n,134217728);if(r!==null){var o=Fn();Si(r,n,134217728,o)}Ju(n,134217728)}},wd=function(n){if(n.tag===13){var r=wr(n),o=Xi(n,r);if(o!==null){var u=Fn();Si(o,n,r,u)}Ju(n,r)}},Td=function(){return Ut},Ad=function(n,r){var o=Ut;try{return Ut=n,r()}finally{Ut=o}},ge=function(n,r,o){switch(r){case"input":if(Pe(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=Bo(u);if(!p)throw Error(t(90));ye(u),Pe(u,p)}}}break;case"textarea":me(n,o);break;case"select":r=o.value,r!=null&&A(n,!!o.multiple,r,!1)}},Et=ju,gt=Zr;var b_={usingClientEntryPoint:!1,Events:[Fa,Ts,Bo,vt,At,ju]},Za={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R_={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ae(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{St=wl.inject(R_),nt=wl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b_,qn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(r))throw Error(t(200));return T_(n,r,null,o)},qn.createRoot=function(n,r){if(!ef(n))throw Error(t(299));var o=!1,u="",p=Vp;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Zu(n,1,!1,null,null,o,!1,u,p),n[Vi]=r.current,Da(n.nodeType===8?n.parentNode:n),new Qu(r)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ae(r),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return Zr(n)},qn.hydrate=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!0,o)},qn.hydrateRoot=function(n,r,o){if(!ef(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,x="",C=Vp;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(x=o.identifierPrefix),o.onRecoverableError!==void 0&&(C=o.onRecoverableError)),r=Bp(r,null,n,1,o??null,p,!1,x,C),n[Vi]=r.current,Da(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,p]:r.mutableSourceEagerHydrationData.push(o,p);return new Sl(r)},qn.render=function(n,r,o){if(!Ml(r))throw Error(t(200));return El(null,n,r,!1,o)},qn.unmountComponentAtNode=function(n){if(!Ml(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[Vi]=null})}),!0):!1},qn.unstable_batchedUpdates=ju,qn.unstable_renderSubtreeIntoContainer=function(n,r,o,u){if(!Ml(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,r,o,!1,u)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Jp;function k_(){if(Jp)return rf.exports;Jp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),rf.exports=z_(),rf.exports}var Qp;function B_(){if(Qp)return Tl;Qp=1;var i=k_();return Tl.createRoot=i.createRoot,Tl.hydrateRoot=i.hydrateRoot,Tl}var H_=B_();const V_=Zg(H_),G_="modulepreload",W_=function(i){return"/pr-preview/pr-59/"+i},em={},Qg=function(e,t,s){let a=Promise.resolve();if(t&&t.length>0){let c=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=c(t.map(h=>{if(h=W_(h),h in em)return;em[h]=!0;const m=h.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":G_,m||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((S,M)=>{v.addEventListener("load",S),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return a.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};var Dn=Math.PI,Zt=Dn*2,ir=Dn/180,j_=180/Dn,X_=1440,q_=398600.8,ri=6378.135,rr=60/Math.sqrt(ri*ri*ri/q_),of=ri*rr/60,Y_=1/rr,fs=.001082616,$_=-253881e-11,K_=-165597e-11,ds=$_/fs,po=2/3,e0=1440/(2*Dn);function t0(i,e){for(var t=[31,i%4===0?29:28,31,30,31,30,31,31,30,31,30,31],s=Math.floor(e),a=1,l=0;s>l+t[a-1]&&a<12;)l+=t[a-1],a+=1;var c=a,f=s-l,d=(e-s)*24,h=Math.floor(d);d=(d-h)*60;var m=Math.floor(d),g=(d-m)*60;return{mon:c,day:f,hr:h,minute:m,sec:g}}function tm(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*i-Math.floor(7*(i+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((c/6e4+l/60+a)/60+s)/24}function gc(i,e,t,s,a,l){var c=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(i instanceof Date){var f=i;return tm(f.getUTCFullYear(),f.getUTCMonth()+1,f.getUTCDate(),f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds())}return tm(i,e,t,s,a,l,c)}function n0(i,e){var t=i.e3,s=i.ee2,a=i.peo,l=i.pgho,c=i.pho,f=i.pinco,d=i.plo,h=i.se2,m=i.se3,g=i.sgh2,v=i.sgh3,S=i.sgh4,M=i.sh2,E=i.sh3,y=i.si2,_=i.si3,I=i.sl2,w=i.sl3,R=i.sl4,H=i.t,L=i.xgh2,D=i.xgh3,F=i.xgh4,P=i.xh2,b=i.xh3,z=i.xi2,Z=i.xi3,$=i.xl2,te=i.xl3,de=i.xl4,j=i.zmol,re=i.zmos,V=e.init,le=e.opsmode,oe=e.ep,O=e.inclp,q=e.nodep,ke=e.argpp,Q=e.mp,ie,fe,xe,Le,He,Oe,G,ye,Ee,we,Me,Te,Pe,Ce,Xe,U,A,ne,Se,me,ve,qe=119459e-10,Ie=.01675,Ne=.00015835218,et=.0549;ve=re+qe*H,V==="y"&&(ve=re),me=ve+2*Ie*Math.sin(ve),A=Math.sin(me),we=.5*A*A-.25,Me=-.5*A*Math.cos(me);var Ae=h*we+m*Me,je=y*we+_*Me,T=I*we+w*Me+R*A,Ze=g*we+v*Me+S*A,ze=M*we+E*Me;ve=j+Ne*H,V==="y"&&(ve=j),me=ve+2*et*Math.sin(ve),A=Math.sin(me),we=.5*A*A-.25,Me=-.5*A*Math.cos(me);var ft=s*we+t*Me,ut=z*we+Z*Me,dt=$*we+te*Me+de*A,W=L*we+D*Me+F*A,Ve=P*we+b*Me;return Te=Ae+ft,Xe=je+ut,U=T+dt,Pe=Ze+W,Ce=ze+Ve,V==="n"&&(Te-=a,Xe-=f,U-=d,Pe-=l,Ce-=c,O+=Xe,oe+=Te,Le=Math.sin(O),xe=Math.cos(O),O>=.2?(Ce/=Le,Pe-=xe*Ce,ke+=Pe,q+=Ce,Q+=U):(Oe=Math.sin(q),He=Math.cos(q),ie=Le*Oe,fe=Le*He,G=Ce*He+Xe*xe*Oe,ye=-Ce*Oe+Xe*xe*He,ie+=G,fe+=ye,q%=Zt,q<0&&le==="a"&&(q+=Zt),ne=Q+ke+xe*q,Ee=U+Pe-Xe*q*Le,ne+=Ee,Se=q,q=Math.atan2(ie,fe),q<0&&le==="a"&&(q+=Zt),Math.abs(Se-q)>Dn&&(q<Se?q+=Zt:q-=Zt),Q+=U,ke=ne-Q-xe*q)),{ep:oe,inclp:O,nodep:q,argpp:ke,mp:Q}}function Z_(i){var e=i.epoch,t=i.ep,s=i.argpp,a=i.tc,l=i.inclp,c=i.nodep,f=i.np,d,h,m,g,v,S,M,E,y,_,I,w,R,H,L,D,F,P,b,z,Z,$,te,de,j,re,V,le,oe,O,q,ke,Q,ie,fe,xe,Le,He,Oe,G,ye,Ee,we,Me,Te,Pe,Ce,Xe,U,A,ne,Se,me,ve,qe,Ie,Ne,et,Ae,je,T,Ze,ze,ft=.01675,ut=.0549,dt=29864797e-13,W=47968065e-14,Ve=.39785416,ge=.91744867,pe=.1945905,Ue=-.98088458,rt=f,vt=t,At=Math.sin(c),Et=Math.cos(c),gt=Math.sin(s),Rt=Math.cos(s),Ot=Math.sin(l),Ft=Math.cos(l),Ge=vt*vt,Wt=1-Ge,an=Math.sqrt(Wt),on=0,Mt=0,ln=0,An=0,be=0,xt=e+18261.5+a/1440,Yt=(4.523602-.00092422029*xt)%Zt,Lt=Math.sin(Yt),N=Math.cos(Yt),J=.91375164-.03568096*N,ce=Math.sqrt(1-J*J),ae=.089683511*Lt/ce,ee=Math.sqrt(1-ae*ae),Re=5.8351514+.001944368*xt,Ye=.39785416*Lt/ce,tt=ee*N+.91744867*ae*Lt;Ye=Math.atan2(Ye,tt),Ye+=Re-Yt;var st=Math.cos(Ye),Je=Math.sin(Ye);z=pe,Z=Ue,de=ge,j=Ve,$=Et,te=At,I=dt;for(var ht=1/rt,lt=0;lt<2;)lt+=1,d=z*$+Z*de*te,m=-Z*$+z*de*te,M=-z*te+Z*de*$,E=Z*j,y=Z*te+z*de*$,_=z*j,h=Ft*M+Ot*E,g=Ft*y+Ot*_,v=-Ot*M+Ft*E,S=-Ot*y+Ft*_,w=d*Rt+h*gt,R=m*Rt+g*gt,H=-d*gt+h*Rt,L=-m*gt+g*Rt,D=v*gt,F=S*gt,P=v*Rt,b=S*Rt,T=12*w*w-3*H*H,Ze=24*w*R-6*H*L,ze=12*R*R-3*L*L,Se=3*(d*d+h*h)+T*Ge,me=6*(d*m+h*g)+Ze*Ge,ve=3*(m*m+g*g)+ze*Ge,qe=-6*d*v+Ge*(-24*w*P-6*H*D),Ie=-6*(d*S+m*v)+Ge*(-24*(R*P+w*b)+-6*(H*F+L*D)),Ne=-6*m*S+Ge*(-24*R*b-6*L*F),et=6*h*v+Ge*(24*w*D-6*H*P),Ae=6*(g*v+h*S)+Ge*(24*(R*D+w*F)-6*(L*P+H*b)),je=6*g*S+Ge*(24*R*F-6*L*b),Se=Se+Se+Wt*T,me=me+me+Wt*Ze,ve=ve+ve+Wt*ze,Ce=I*ht,Pe=-.5*Ce/an,Xe=Ce*an,Te=-15*vt*Xe,U=w*H+R*L,A=R*H+w*L,ne=R*L-w*H,lt===1&&(re=Te,V=Pe,le=Ce,oe=Xe,O=U,q=A,ke=ne,Q=Se,ie=me,fe=ve,xe=qe,Le=Ie,He=Ne,Oe=et,G=Ae,ye=je,Ee=T,we=Ze,Me=ze,z=st,Z=Je,de=J,j=ce,$=ee*Et+ae*At,te=At*ee-Et*ae,I=W);var Ct=(4.7199672+(.2299715*xt-Re))%Zt,Dt=(6.2565837+.017201977*xt)%Zt,Ht=2*re*q,$t=2*re*ke,St=2*V*Le,nt=2*V*(He-xe),rn=-2*le*ie,yt=-2*le*(fe-Q),Un=-2*le*(-21-9*Ge)*ft,Kn=2*oe*we,Zn=2*oe*(Me-Ee),oi=-18*oe*ft,zt=-2*V*G,fn=-2*V*(ye-Oe),Hn=2*Te*A,vn=2*Te*ne,Hi=2*Pe*Ie,Br=2*Pe*(Ne-qe),Hr=-2*Ce*me,xa=-2*Ce*(ve-Se),Vr=-2*Ce*(-21-9*Ge)*ut,wc=2*Xe*Ze,ya=2*Xe*(ze-T),Ut=-18*Xe*ut,Eo=-2*Pe*Ae,wo=-2*Pe*(je-et);return{snodm:At,cnodm:Et,sinim:Ot,cosim:Ft,sinomm:gt,cosomm:Rt,day:xt,e3:vn,ee2:Hn,em:vt,emsq:Ge,gam:Re,peo:on,pgho:An,pho:be,pinco:Mt,plo:ln,rtemsq:an,se2:Ht,se3:$t,sgh2:Kn,sgh3:Zn,sgh4:oi,sh2:zt,sh3:fn,si2:St,si3:nt,sl2:rn,sl3:yt,sl4:Un,s1:Te,s2:Pe,s3:Ce,s4:Xe,s5:U,s6:A,s7:ne,ss1:re,ss2:V,ss3:le,ss4:oe,ss5:O,ss6:q,ss7:ke,sz1:Q,sz2:ie,sz3:fe,sz11:xe,sz12:Le,sz13:He,sz21:Oe,sz22:G,sz23:ye,sz31:Ee,sz32:we,sz33:Me,xgh2:wc,xgh3:ya,xgh4:Ut,xh2:Eo,xh3:wo,xi2:Hi,xi3:Br,xl2:Hr,xl3:xa,xl4:Vr,nm:rt,z1:Se,z2:me,z3:ve,z11:qe,z12:Ie,z13:Ne,z21:et,z22:Ae,z23:je,z31:T,z32:Ze,z33:ze,zmol:Ct,zmos:Dt}}function J_(i){var e=i.cosim,t=i.argpo,s=i.s1,a=i.s2,l=i.s3,c=i.s4,f=i.s5,d=i.sinim,h=i.ss1,m=i.ss2,g=i.ss3,v=i.ss4,S=i.ss5,M=i.sz1,E=i.sz3,y=i.sz11,_=i.sz13,I=i.sz21,w=i.sz23,R=i.sz31,H=i.sz33,L=i.t,D=i.tc,F=i.gsto,P=i.mo,b=i.mdot,z=i.no,Z=i.nodeo,$=i.nodedot,te=i.xpidot,de=i.z1,j=i.z3,re=i.z11,V=i.z13,le=i.z21,oe=i.z23,O=i.z31,q=i.z33,ke=i.ecco,Q=i.eccsq,ie=i.emsq,fe=i.em,xe=i.argpm,Le=i.inclm,He=i.mm,Oe=i.nm,G=i.nodem,ye=i.irez,Ee=i.atime,we=i.d2201,Me=i.d2211,Te=i.d3210,Pe=i.d3222,Ce=i.d4410,Xe=i.d4422,U=i.d5220,A=i.d5232,ne=i.d5421,Se=i.d5433,me=i.dedt,ve=i.didt,qe=i.dmdt,Ie=i.dnodt,Ne=i.domdt,et=i.del1,Ae=i.del2,je=i.del3,T=i.xfact,Ze=i.xlamo,ze=i.xli,ft=i.xni,ut,dt,W,Ve,ge,pe,Ue,rt,vt,At,Et,gt,Rt,Ot,Ft,Ge,Wt,an,on,Mt,ln,An,be,xt,Yt,Lt,N,J,ce,ae,ee,Re,Ye=17891679e-13,tt=21460748e-13,st=22123015e-14,Je=17891679e-13,ht=73636953e-16,lt=21765803e-16,Ct=.0043752690880113,Dt=37393792e-14,Ht=11428639e-14,$t=.00015835218,St=119459e-10;ye=0,Oe<.0052359877&&Oe>.0034906585&&(ye=1),Oe>=.00826&&Oe<=.00924&&fe>=.5&&(ye=2);var nt=h*St*S,rn=m*St*(y+_),yt=-St*g*(M+E-14-6*ie),Un=v*St*(R+H-6),Kn=-St*m*(I+w);(Le<.052359877||Le>Dn-.052359877)&&(Kn=0),d!==0&&(Kn/=d);var Zn=Un-e*Kn;me=nt+s*$t*f,ve=rn+a*$t*(re+V),qe=yt-$t*l*(de+j-14-6*ie);var oi=c*$t*(O+q-6),zt=-$t*a*(le+oe);(Le<.052359877||Le>Dn-.052359877)&&(zt=0),Ne=Zn+oi,Ie=Kn,d!==0&&(Ne-=e/d*zt,Ie+=zt/d);var fn=0,Hn=(F+D*Ct)%Zt;if(fe+=me*L,Le+=ve*L,xe+=Ne*L,G+=Ie*L,He+=qe*L,ye!==0){if(ae=Math.pow(Oe/rr,po),ye===2){ee=e*e;var vn=fe;fe=ke;var Hi=ie;ie=Q,Re=fe*ie,Ot=-.306-(fe-.64)*.44,fe<=.65?(Ft=3.616-13.247*fe+16.29*ie,Wt=-19.302+117.39*fe-228.419*ie+156.591*Re,an=-18.9068+109.7927*fe-214.6334*ie+146.5816*Re,on=-41.122+242.694*fe-471.094*ie+313.953*Re,Mt=-146.407+841.88*fe-1629.014*ie+1083.435*Re,ln=-532.114+3017.977*fe-5740.032*ie+3708.276*Re):(Ft=-72.099+331.819*fe-508.738*ie+266.724*Re,Wt=-346.844+1582.851*fe-2415.925*ie+1246.113*Re,an=-342.585+1554.908*fe-2366.899*ie+1215.972*Re,on=-1052.797+4758.686*fe-7193.992*ie+3651.957*Re,Mt=-3581.69+16178.11*fe-24462.77*ie+12422.52*Re,fe>.715?ln=-5149.66+29936.92*fe-54087.36*ie+31324.56*Re:ln=1464.74-4664.75*fe+3763.64*ie),fe<.7?(xt=-919.2277+4988.61*fe-9064.77*ie+5542.21*Re,An=-822.71072+4568.6173*fe-8491.4146*ie+5337.524*Re,be=-853.666+4690.25*fe-8624.77*ie+5341.4*Re):(xt=-37995.78+161616.52*fe-229838.2*ie+109377.94*Re,An=-51752.104+218913.95*fe-309468.16*ie+146349.42*Re,be=-40023.88+170470.89*fe-242699.48*ie+115605.82*Re),Yt=d*d,ut=.75*(1+2*e+ee),dt=1.5*Yt,Ve=1.875*d*(1-2*e-3*ee),ge=-1.875*d*(1+2*e-3*ee),Ue=35*Yt*ut,rt=39.375*Yt*Yt,vt=9.84375*d*(Yt*(1-2*e-5*ee)+.33333333*(-2+4*e+6*ee)),At=d*(4.92187512*Yt*(-2-4*e+10*ee)+6.56250012*(1+2*e-3*ee)),Et=29.53125*d*(2-8*e+ee*(-12+8*e+10*ee)),gt=29.53125*d*(-2-8*e+ee*(12+8*e-10*ee)),J=Oe*Oe,ce=ae*ae,N=3*J*ce,Lt=N*Je,we=Lt*ut*Ot,Me=Lt*dt*Ft,N*=ae,Lt=N*Dt,Te=Lt*Ve*Wt,Pe=Lt*ge*an,N*=ae,Lt=2*N*ht,Ce=Lt*Ue*on,Xe=Lt*rt*Mt,N*=ae,Lt=N*Ht,U=Lt*vt*ln,A=Lt*At*be,Lt=2*N*lt,ne=Lt*Et*An,Se=Lt*gt*xt,Ze=(P+Z+Z-(Hn+Hn))%Zt,T=b+qe+2*($+Ie-Ct)-z,fe=vn,ie=Hi}ye===1&&(Rt=1+ie*(-2.5+.8125*ie),Wt=1+2*ie,Ge=1+ie*(-6+6.60937*ie),ut=.75*(1+e)*(1+e),W=.9375*d*d*(1+3*e)-.75*(1+e),pe=1+e,pe*=1.875*pe*pe,et=3*Oe*Oe*ae*ae,Ae=2*et*ut*Rt*Ye,je=3*et*pe*Ge*st*ae,et=et*W*Wt*tt*ae,Ze=(P+Z+t-Hn)%Zt,T=b+te+qe+Ne+Ie-(z+Ct)),ze=Ze,ft=z,Ee=0,Oe=z+fn}return{em:fe,argpm:xe,inclm:Le,mm:He,nm:Oe,nodem:G,irez:ye,atime:Ee,d2201:we,d2211:Me,d3210:Te,d3222:Pe,d4410:Ce,d4422:Xe,d5220:U,d5232:A,d5421:ne,d5433:Se,dedt:me,didt:ve,dmdt:qe,dndt:fn,dnodt:Ie,domdt:Ne,del1:et,del2:Ae,del3:je,xfact:T,xlamo:Ze,xli:ze,xni:ft}}function nm(i){var e=(i-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*ir/240%Zt,t<0&&(t+=Zt),t}function i0(i,e,t,s,a,l,c){return i instanceof Date?nm(gc(i)):nm(i)}function Q_(i){var e=i.ecco,t=i.epoch,s=i.inclo,a=i.opsmode,l=i.no,c=e*e,f=1-c,d=Math.sqrt(f),h=Math.cos(s),m=h*h,g=Math.pow(rr/l,po),v=.75*fs*(3*m-1)/(d*f),S=v/(g*g),M=g*(1-S*S-S*(1/3+134*S*S/81));S=v/(M*M),l/=1+S;var E=Math.pow(rr/l,po),y=Math.sin(s),_=E*f,I=1-5*m,w=-I-m-m,R=1/E,H=_*_,L=E*(1-e),D="n",F;if(a==="a"){var P=t-7305,b=Math.floor(P+1e-8),z=P-b,Z=.017202791694070362,$=1.7321343856509375,te=5075514194322695e-30,de=Z+Zt;F=($+Z*b+de*z+P*P*te)%Zt,F<0&&(F+=Zt)}else F=i0(t+24332815e-1);return{no:l,method:D,ainv:R,ao:E,con41:w,con42:I,cosio:h,cosio2:m,eccsq:c,omeosq:f,posq:H,rp:L,rteosq:d,sinio:y,gsto:F}}function ex(i){var e=i.irez,t=i.d2201,s=i.d2211,a=i.d3210,l=i.d3222,c=i.d4410,f=i.d4422,d=i.d5220,h=i.d5232,m=i.d5421,g=i.d5433,v=i.dedt,S=i.del1,M=i.del2,E=i.del3,y=i.didt,_=i.dmdt,I=i.dnodt,w=i.domdt,R=i.argpo,H=i.argpdot,L=i.t,D=i.tc,F=i.gsto,P=i.xfact,b=i.xlamo,z=i.no,Z=i.atime,$=i.em,te=i.argpm,de=i.inclm,j=i.xli,re=i.mm,V=i.xni,le=i.nodem,oe=i.nm,O=.13130908,q=2.8843198,ke=.37448087,Q=5.7686396,ie=.95240898,fe=1.8014998,xe=1.050833,Le=4.4108898,He=.0043752690880113,Oe=720,G=-720,ye=259200,Ee,we,Me,Te,Pe,Ce,Xe,U,A=0,ne=0,Se=(F+D*He)%Zt;if($+=v*L,de+=y*L,te+=w*L,le+=I*L,re+=_*L,e!==0){(Z===0||L*Z<=0||Math.abs(L)<Math.abs(Z))&&(Z=0,V=z,j=b),L>0?Ee=Oe:Ee=G;for(var me=381;me===381;)e!==2?(Xe=S*Math.sin(j-O)+M*Math.sin(2*(j-q))+E*Math.sin(3*(j-ke)),Pe=V+P,Ce=S*Math.cos(j-O)+2*M*Math.cos(2*(j-q))+3*E*Math.cos(3*(j-ke)),Ce*=Pe):(U=R+H*Z,Me=U+U,we=j+j,Xe=t*Math.sin(Me+j-Q)+s*Math.sin(j-Q)+a*Math.sin(U+j-ie)+l*Math.sin(-U+j-ie)+c*Math.sin(Me+we-fe)+f*Math.sin(we-fe)+d*Math.sin(U+j-xe)+h*Math.sin(-U+j-xe)+m*Math.sin(U+we-Le)+g*Math.sin(-U+we-Le),Pe=V+P,Ce=t*Math.cos(Me+j-Q)+s*Math.cos(j-Q)+a*Math.cos(U+j-ie)+l*Math.cos(-U+j-ie)+d*Math.cos(U+j-xe)+h*Math.cos(-U+j-xe)+2*(c*Math.cos(Me+we-fe)+f*Math.cos(we-fe)+m*Math.cos(U+we-Le)+g*Math.cos(-U+we-Le)),Ce*=Pe),Math.abs(L-Z)>=Oe?me=381:(ne=L-Z,me=0),me===381&&(j+=Pe*Ee+Xe*ye,V+=Xe*Ee+Ce*ye,Z+=Ee);oe=V+Xe*ne+Ce*ne*ne*.5,Te=j+Pe*ne+Xe*ne*ne*.5,e!==1?(re=Te-2*le+2*Se,A=oe-z):(re=Te-le-te+Se,A=oe-z),oe=z+A}return{atime:Z,em:$,argpm:te,inclm:de,xli:j,mm:re,xni:V,nodem:le,dndt:A,nm:oe}}var Dr;(function(i){i[i.None=0]="None",i[i.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",i[i.MeanMotionBelowZero=2]="MeanMotionBelowZero",i[i.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",i[i.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",i[i.Decayed=6]="Decayed"})(Dr||(Dr={}));function r0(i,e){var t,s,a,l,c,f,d,h,m,g,v,S,M,E,y,_,I,w,R,H,L,D,F,P,b,z,Z,$=15e-13;i.t=e,i.error=Dr.None;var te=i.mo+i.mdot*i.t,de=i.argpo+i.argpdot*i.t,j=i.nodeo+i.nodedot*i.t;m=de,L=te;var re=i.t*i.t;if(F=j+i.nodecf*re,I=1-i.cc1*i.t,w=i.bstar*i.cc4*i.t,R=i.t2cof*re,i.isimp!==1){d=i.omgcof*i.t;var V=1+i.eta*Math.cos(te);f=i.xmcof*(V*V*V-i.delmo),_=d+f,L=te+_,m=de-_,S=re*i.t,M=S*i.t,I=I-i.d2*re-i.d3*S-i.d4*M,w+=i.bstar*i.cc5*(Math.sin(L)-i.sinmao),R=R+i.t3cof*S+M*(i.t4cof+i.t*i.t5cof)}D=i.no;var le=i.ecco;if(H=i.inclo,i.method==="d"){E=i.t;var oe={irez:i.irez,d2201:i.d2201,d2211:i.d2211,d3210:i.d3210,d3222:i.d3222,d4410:i.d4410,d4422:i.d4422,d5220:i.d5220,d5232:i.d5232,d5421:i.d5421,d5433:i.d5433,dedt:i.dedt,del1:i.del1,del2:i.del2,del3:i.del3,didt:i.didt,dmdt:i.dmdt,dnodt:i.dnodt,domdt:i.domdt,argpo:i.argpo,argpdot:i.argpdot,t:i.t,tc:E,gsto:i.gsto,xfact:i.xfact,xlamo:i.xlamo,no:i.no,atime:i.atime,em:le,argpm:m,inclm:H,xli:i.xli,mm:L,xni:i.xni,nodem:F,nm:D},O=ex(oe);le=O.em,m=O.argpm,H=O.inclm,L=O.mm,F=O.nodem,D=O.nm}if(D<=0)return i.error=Dr.MeanMotionBelowZero,null;var q=Math.pow(rr/D,po)*I*I;if(D=rr/Math.pow(q,1.5),le-=w,le>=1||le<-.001)return i.error=Dr.MeanEccentricityOutOfRange,null;le<1e-6&&(le=1e-6),L+=i.no*R,b=L+m+F,F%=Zt,m%=Zt,b%=Zt,L=(b-m-F)%Zt;var ke={am:q,em:le,im:H,Om:F,om:m,mm:L,nm:D},Q=Math.sin(H),ie=Math.cos(H),fe=le;if(P=H,g=m,Z=F,z=L,l=Q,a=ie,i.method==="d"){var xe={inclo:i.inclo,init:"n",ep:fe,inclp:P,nodep:Z,argpp:g,mp:z,opsmode:i.operationmode},Le=n0(i,xe);if(fe=Le.ep,Z=Le.nodep,g=Le.argpp,z=Le.mp,P=Le.inclp,P<0&&(P=-P,Z+=Dn,g-=Dn),fe<0||fe>1)return i.error=Dr.PerturbedEccentricityOutOfRange,null}i.method==="d"&&(l=Math.sin(P),a=Math.cos(P),i.aycof=-.5*ds*l,Math.abs(a+1)>15e-13?i.xlcof=-.25*ds*l*(3+5*a)/(1+a):i.xlcof=-.25*ds*l*(3+5*a)/$);var He=fe*Math.cos(g);_=1/(q*(1-fe*fe));var Oe=fe*Math.sin(g)+_*i.aycof,G=z+g+Z+_*i.xlcof*He,ye=(G-Z)%Zt;h=ye,y=9999.9;for(var Ee=1;Math.abs(y)>=1e-12&&Ee<=10;)s=Math.sin(h),t=Math.cos(h),y=1-t*He-s*Oe,y=(ye-Oe*t+He*s-h)/y,Math.abs(y)>=.95&&(y>0?y=.95:y=-.95),h+=y,Ee+=1;var we=He*t+Oe*s,Me=He*s-Oe*t,Te=He*He+Oe*Oe,Pe=q*(1-Te);if(Pe<0)return i.error=Dr.SemiLatusRectumBelowZero,null;var Ce=q*(1-we),Xe=Math.sqrt(q)*Me/Ce,U=Math.sqrt(Pe)/Ce,A=Math.sqrt(1-Te);_=Me/(1+A);var ne=q/Ce*(s-Oe-He*_),Se=q/Ce*(t-He+Oe*_);v=Math.atan2(ne,Se);var me=(Se+Se)*ne,ve=1-2*ne*ne;_=1/Pe;var qe=.5*fs*_,Ie=qe*_;i.method==="d"&&(c=a*a,i.con41=3*c-1,i.x1mth2=1-c,i.x7thm1=7*c-1);var Ne=Ce*(1-1.5*Ie*A*i.con41)+.5*qe*i.x1mth2*ve;if(Ne<1)return i.error=Dr.Decayed,null;v-=.25*Ie*i.x7thm1*me;var et=Z+1.5*Ie*a*me,Ae=P+1.5*Ie*a*l*ve,je=Xe-D*qe*i.x1mth2*me/rr,T=U+D*qe*(i.x1mth2*ve+1.5*i.con41)/rr,Ze=Math.sin(v),ze=Math.cos(v),ft=Math.sin(et),ut=Math.cos(et),dt=Math.sin(Ae),W=Math.cos(Ae),Ve=-ft*W,ge=ut*W,pe=Ve*Ze+ut*ze,Ue=ge*Ze+ft*ze,rt=dt*Ze,vt=Ve*ze-ut*Ze,At=ge*ze-ft*Ze,Et=dt*ze,gt={x:Ne*pe*ri,y:Ne*Ue*ri,z:Ne*rt*ri},Rt={x:(je*pe+T*vt)*of,y:(je*Ue+T*At)*of,z:(je*rt+T*Et)*of};return{position:gt,velocity:Rt,meanElements:ke}}function s0(i,e){var t=e.opsmode;e.satn;var s=e.epoch,a=e.xbstar,l=e.xecco,c=e.xargpo,f=e.xinclo,d=e.xmo,h=e.xno,m=e.xnodeo,g,v,S,M,E,y,_,I,w,R,H,L,D,F,P,b,z,Z,$,te,de,j,re,V,le,oe,O,q,ke,Q,ie,fe,xe,Le,He,Oe,G,ye,Ee,we,Me,Te,Pe,Ce,Xe,U,A,ne,Se,me,ve,qe,Ie,Ne,et,Ae,je=15e-13,T=i;T.isimp=0,T.method="n",T.aycof=0,T.con41=0,T.cc1=0,T.cc4=0,T.cc5=0,T.d2=0,T.d3=0,T.d4=0,T.delmo=0,T.eta=0,T.argpdot=0,T.omgcof=0,T.sinmao=0,T.t=0,T.t2cof=0,T.t3cof=0,T.t4cof=0,T.t5cof=0,T.x1mth2=0,T.x7thm1=0,T.mdot=0,T.nodedot=0,T.xlcof=0,T.xmcof=0,T.nodecf=0,T.irez=0,T.d2201=0,T.d2211=0,T.d3210=0,T.d3222=0,T.d4410=0,T.d4422=0,T.d5220=0,T.d5232=0,T.d5421=0,T.d5433=0,T.dedt=0,T.del1=0,T.del2=0,T.del3=0,T.didt=0,T.dmdt=0,T.dnodt=0,T.domdt=0,T.e3=0,T.ee2=0,T.peo=0,T.pgho=0,T.pho=0,T.pinco=0,T.plo=0,T.se2=0,T.se3=0,T.sgh2=0,T.sgh3=0,T.sgh4=0,T.sh2=0,T.sh3=0,T.si2=0,T.si3=0,T.sl2=0,T.sl3=0,T.sl4=0,T.gsto=0,T.xfact=0,T.xgh2=0,T.xgh3=0,T.xgh4=0,T.xh2=0,T.xh3=0,T.xi2=0,T.xi3=0,T.xl2=0,T.xl3=0,T.xl4=0,T.xlamo=0,T.zmol=0,T.zmos=0,T.atime=0,T.xli=0,T.xni=0,T.bstar=a,T.ecco=l,T.argpo=c,T.inclo=f,T.mo=d,T.no=h,T.nodeo=m,T.operationmode=t;var Ze=78/ri+1,ze=42/ri,ft=ze*ze*ze*ze;T.init="y",T.t=0;var ut={ecco:T.ecco,epoch:s,inclo:T.inclo,no:T.no,method:T.method,opsmode:T.operationmode},dt=Q_(ut),W=dt.ao,Ve=dt.con42,ge=dt.cosio,pe=dt.cosio2,Ue=dt.eccsq,rt=dt.omeosq,vt=dt.posq,At=dt.rp,Et=dt.rteosq,gt=dt.sinio;if(T.no=dt.no,T.con41=dt.con41,T.gsto=dt.gsto,T.a=Math.pow(T.no*Y_,-2/3),T.alta=T.a*(1+T.ecco)-1,T.altp=T.a*(1-T.ecco)-1,T.error=0,rt>=0||T.no>=0){if(T.isimp=0,At<220/ri+1&&(T.isimp=1),O=Ze,de=ft,Z=(At-1)*ri,Z<156){O=Z-78,Z<98&&(O=20);var Rt=(120-O)/ri;de=Rt*Rt*Rt*Rt,O=O/ri+1}$=1/vt,U=1/(W-O),T.eta=W*T.ecco*U,L=T.eta*T.eta,H=T.ecco*T.eta,te=Math.abs(1-L),y=de*Math.pow(U,4),_=y/Math.pow(te,3.5),M=_*T.no*(W*(1+1.5*L+H*(4+L))+.375*fs*U/te*T.con41*(8+3*L*(8+L))),T.cc1=T.bstar*M,E=0,T.ecco>1e-4&&(E=-2*y*U*ds*T.no*gt/T.ecco),T.x1mth2=1-pe,T.cc4=2*T.no*_*W*rt*(T.eta*(2+.5*L)+T.ecco*(.5+2*L)-fs*U/(W*te)*(-3*T.con41*(1-2*H+L*(1.5-.5*H))+.75*T.x1mth2*(2*L-H*(1+L))*Math.cos(2*T.argpo))),T.cc5=2*_*W*rt*(1+2.75*(L+H)+H*L),I=pe*pe,Pe=1.5*fs*$*T.no,Ce=.5*Pe*fs*$,Xe=-.46875*K_*$*$*T.no,T.mdot=T.no+.5*Pe*Et*T.con41+.0625*Ce*Et*(13-78*pe+137*I),T.argpdot=-.5*Pe*Ve+.0625*Ce*(7-114*pe+395*I)+Xe*(3-36*pe+49*I),ne=-Pe*ge,T.nodedot=ne+(.5*Ce*(4-19*pe)+2*Xe*(3-7*pe))*ge,A=T.argpdot+T.nodedot,T.omgcof=T.bstar*E*Math.cos(T.argpo),T.xmcof=0,T.ecco>1e-4&&(T.xmcof=-po*y*T.bstar/H),T.nodecf=3.5*rt*ne*T.cc1,T.t2cof=1.5*T.cc1,Math.abs(ge+1)>15e-13?T.xlcof=-.25*ds*gt*(3+5*ge)/(1+ge):T.xlcof=-.25*ds*gt*(3+5*ge)/je,T.aycof=-.5*ds*gt;var Ot=1+T.eta*Math.cos(T.mo);if(T.delmo=Ot*Ot*Ot,T.sinmao=Math.sin(T.mo),T.x7thm1=7*pe-1,2*Dn/T.no>=225){T.method="d",T.isimp=1,Me=0,P=T.inclo;var Ft={epoch:s,ep:T.ecco,argpp:T.argpo,tc:Me,inclp:T.inclo,nodep:T.nodeo,np:T.no,e3:T.e3,ee2:T.ee2,peo:T.peo,pgho:T.pgho,pho:T.pho,pinco:T.pinco,plo:T.plo,se2:T.se2,se3:T.se3,sgh2:T.sgh2,sgh3:T.sgh3,sgh4:T.sgh4,sh2:T.sh2,sh3:T.sh3,si2:T.si2,si3:T.si3,sl2:T.sl2,sl3:T.sl3,sl4:T.sl4,xgh2:T.xgh2,xgh3:T.xgh3,xgh4:T.xgh4,xh2:T.xh2,xh3:T.xh3,xi2:T.xi2,xi3:T.xi3,xl2:T.xl2,xl3:T.xl3,xl4:T.xl4,zmol:T.zmol,zmos:T.zmos},Ge=Z_(Ft);T.e3=Ge.e3,T.ee2=Ge.ee2,T.peo=Ge.peo,T.pgho=Ge.pgho,T.pho=Ge.pho,T.pinco=Ge.pinco,T.plo=Ge.plo,T.se2=Ge.se2,T.se3=Ge.se3,T.sgh2=Ge.sgh2,T.sgh3=Ge.sgh3,T.sgh4=Ge.sgh4,T.sh2=Ge.sh2,T.sh3=Ge.sh3,T.si2=Ge.si2,T.si3=Ge.si3,T.sl2=Ge.sl2,T.sl3=Ge.sl3,T.sl4=Ge.sl4,v=Ge.sinim,g=Ge.cosim,w=Ge.em,R=Ge.emsq,j=Ge.s1,re=Ge.s2,V=Ge.s3,le=Ge.s4,oe=Ge.s5,q=Ge.ss1,ke=Ge.ss2,Q=Ge.ss3,ie=Ge.ss4,fe=Ge.ss5,xe=Ge.sz1,Le=Ge.sz3,He=Ge.sz11,Oe=Ge.sz13,G=Ge.sz21,ye=Ge.sz23,Ee=Ge.sz31,we=Ge.sz33,T.xgh2=Ge.xgh2,T.xgh3=Ge.xgh3,T.xgh4=Ge.xgh4,T.xh2=Ge.xh2,T.xh3=Ge.xh3,T.xi2=Ge.xi2,T.xi3=Ge.xi3,T.xl2=Ge.xl2,T.xl3=Ge.xl3,T.xl4=Ge.xl4,T.zmol=Ge.zmol,T.zmos=Ge.zmos,z=Ge.nm,Se=Ge.z1,me=Ge.z3,ve=Ge.z11,qe=Ge.z13,Ie=Ge.z21,Ne=Ge.z23,et=Ge.z31,Ae=Ge.z33;var Wt={inclo:P,init:T.init,ep:T.ecco,inclp:T.inclo,nodep:T.nodeo,argpp:T.argpo,mp:T.mo,opsmode:T.operationmode},an=n0(T,Wt);T.ecco=an.ep,T.inclo=an.inclp,T.nodeo=an.nodep,T.argpo=an.argpp,T.mo=an.mp,D=0,F=0,b=0;var on={cosim:g,emsq:R,argpo:T.argpo,s1:j,s2:re,s3:V,s4:le,s5:oe,sinim:v,ss1:q,ss2:ke,ss3:Q,ss4:ie,ss5:fe,sz1:xe,sz3:Le,sz11:He,sz13:Oe,sz21:G,sz23:ye,sz31:Ee,sz33:we,t:T.t,tc:Me,gsto:T.gsto,mo:T.mo,mdot:T.mdot,no:T.no,nodeo:T.nodeo,nodedot:T.nodedot,xpidot:A,z1:Se,z3:me,z11:ve,z13:qe,z21:Ie,z23:Ne,z31:et,z33:Ae,ecco:T.ecco,eccsq:Ue,em:w,argpm:D,inclm:P,mm:b,nm:z,nodem:F,irez:T.irez,atime:T.atime,d2201:T.d2201,d2211:T.d2211,d3210:T.d3210,d3222:T.d3222,d4410:T.d4410,d4422:T.d4422,d5220:T.d5220,d5232:T.d5232,d5421:T.d5421,d5433:T.d5433,dedt:T.dedt,didt:T.didt,dmdt:T.dmdt,dnodt:T.dnodt,domdt:T.domdt,del1:T.del1,del2:T.del2,del3:T.del3,xfact:T.xfact,xlamo:T.xlamo,xli:T.xli,xni:T.xni},Mt=J_(on);T.irez=Mt.irez,T.atime=Mt.atime,T.d2201=Mt.d2201,T.d2211=Mt.d2211,T.d3210=Mt.d3210,T.d3222=Mt.d3222,T.d4410=Mt.d4410,T.d4422=Mt.d4422,T.d5220=Mt.d5220,T.d5232=Mt.d5232,T.d5421=Mt.d5421,T.d5433=Mt.d5433,T.dedt=Mt.dedt,T.didt=Mt.didt,T.dmdt=Mt.dmdt,T.dnodt=Mt.dnodt,T.domdt=Mt.domdt,T.del1=Mt.del1,T.del2=Mt.del2,T.del3=Mt.del3,T.xfact=Mt.xfact,T.xlamo=Mt.xlamo,T.xli=Mt.xli,T.xni=Mt.xni}T.isimp!==1&&(S=T.cc1*T.cc1,T.d2=4*W*U*S,Te=T.d2*U*T.cc1/3,T.d3=(17*W+O)*Te,T.d4=.5*Te*W*U*(221*W+31*O)*T.cc1,T.t3cof=T.d2+2*S,T.t4cof=.25*(3*T.d3+T.cc1*(12*T.d2+10*S)),T.t5cof=.2*(3*T.d4+12*T.cc1*T.d3+6*T.d2*T.d2+15*S*(2*T.d2+S)))}r0(T,0),T.init="n"}function tx(i,e){var t="i",s=0,a=i.substring(2,7),l=parseInt(i.substring(18,20),10),c=parseFloat(i.substring(20,32)),f=parseFloat(i.substring(33,43)),d=parseFloat("".concat(i.substring(44,45),".").concat(i.substring(45,50),"E").concat(i.substring(50,52))),h=parseFloat("".concat(i.substring(53,54),".").concat(i.substring(54,59),"E").concat(i.substring(59,61))),m=parseFloat(e.substring(8,16))*ir,g=parseFloat(e.substring(17,25))*ir,v=parseFloat(".".concat(e.substring(26,33).replace(/\s/g,"0"))),S=parseFloat(e.substring(34,42))*ir,M=parseFloat(e.substring(43,51))*ir,E=parseFloat(e.substring(52,63))/e0,y=l<57?l+2e3:l+1900,_=t0(y,c),I=_.mon,w=_.day,R=_.hr,H=_.minute,L=_.sec,D=gc(y,I,w,R,H,L),F={error:s,satnum:a,epochyr:l,epochdays:c,ndot:f,nddot:d,bstar:h,inclo:m,nodeo:g,ecco:v,argpo:S,mo:M,no:E,jdsatepoch:D};return s0(F,{opsmode:t,satn:F.satnum,epoch:F.jdsatepoch-24332815e-1,xbstar:F.bstar,xecco:F.ecco,xargpo:F.argpo,xinclo:F.inclo,xmo:F.mo,xno:F.no,xnodeo:F.nodeo}),F}function nx(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"i",t=0,s=i.NORAD_CAT_ID.toString(),a=new Date(i.EPOCH.endsWith("Z")?i.EPOCH:i.EPOCH+"Z"),l=a.getUTCFullYear(),c=Number(l.toString().slice(-2)),f=(a.valueOf()-new Date(Date.UTC(l,0,1,0,0,0)).valueOf())/(86400*1e3)+1,d=Number(i.MEAN_MOTION_DOT),h=Number(i.MEAN_MOTION_DDOT),m=Number(i.BSTAR),g=Number(i.INCLINATION)*ir,v=Number(i.RA_OF_ASC_NODE)*ir,S=Number(i.ECCENTRICITY),M=Number(i.ARG_OF_PERICENTER)*ir,E=Number(i.MEAN_ANOMALY)*ir,y=Number(i.MEAN_MOTION)/e0,_=t0(l,f),I=_.mon,w=_.day,R=_.hr,H=_.minute,L=_.sec,D=gc(l,I,w,R,H,L),F={error:t,satnum:s,epochyr:c,epochdays:f,ndot:d,nddot:h,bstar:m,inclo:g,nodeo:v,ecco:S,argpo:M,mo:E,no:y,jdsatepoch:D};return s0(F,{opsmode:e,satn:F.satnum,epoch:F.jdsatepoch-24332815e-1,xbstar:F.bstar,xecco:F.ecco,xargpo:F.argpo,xinclo:F.inclo,xmo:F.mo,xno:F.no,xnodeo:F.nodeo}),F}function ix(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];var a=gc.apply(void 0,t),l=(a-i.jdsatepoch)*X_;return r0(i,l)}function a0(i){return i*j_}function rx(i){if(i<-Dn/2||i>Dn/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return a0(i)}function sx(i){if(i<-Dn||i>Dn)throw new RangeError("Longitude radians must be in range [-pi; pi].");return a0(i)}function ax(i,e){for(var t=6378.137,s=6356.7523142,a=Math.sqrt(i.x*i.x+i.y*i.y),l=(t-s)/t,c=2*l-l*l,f=Math.atan2(i.y,i.x)-e;f<-Dn;)f+=Zt;for(;f>Dn;)f-=Zt;for(var d=20,h=0,m=Math.atan2(i.z,Math.sqrt(i.x*i.x+i.y*i.y)),g;h++<d;)g=1/Math.sqrt(1-c*(Math.sin(m)*Math.sin(m))),m=Math.atan2(i.z+t*g*c*Math.sin(m),a);var v=a/Math.cos(m)-t*g;return{longitude:f,latitude:m,height:v}}const o0=6371,l0=i=>{const e=Number(i.NORAD_CAT_ID),t=Number(i.MEAN_MOTION),s=typeof i.EPOCH=="string"?i.EPOCH:"",a=[i.ECCENTRICITY,i.INCLINATION,i.RA_OF_ASC_NODE,i.ARG_OF_PERICENTER,i.MEAN_ANOMALY].map(Number);if(!Number.isSafeInteger(e)||e<1||!Number.isFinite(t)||t<=0||Number.isNaN(Date.parse(s))||a.some(d=>!Number.isFinite(d))||a[0]<0||a[0]>=1||a[1]<0||a[1]>180)return null;const l=typeof i.OBJECT_NAME=="string"&&i.OBJECT_NAME.trim()?i.OBJECT_NAME.trim():`NORAD ${e}`,c=d=>{const h=Number(d);return Number.isFinite(h)?h:0},f={...i,OBJECT_NAME:l,OBJECT_ID:typeof i.OBJECT_ID=="string"&&i.OBJECT_ID?i.OBJECT_ID:`NORAD ${e}`,EPOCH:s,MEAN_MOTION:t,ECCENTRICITY:a[0],INCLINATION:a[1],RA_OF_ASC_NODE:a[2],ARG_OF_PERICENTER:a[3],MEAN_ANOMALY:a[4],BSTAR:c(i.BSTAR),MEAN_MOTION_DOT:c(i.MEAN_MOTION_DOT),MEAN_MOTION_DDOT:c(i.MEAN_MOTION_DDOT),ELEMENT_SET_NO:c(i.ELEMENT_SET_NO),NORAD_CAT_ID:e};return{noradId:e,name:l,omm:f}},ox=i=>{if(!i||typeof i!="object"||!("schemaVersion"in i)||i.schemaVersion!==1||!("fetchedAt"in i)||typeof i.fetchedAt!="string"||Number.isNaN(Date.parse(i.fetchedAt))||!("satellites"in i)||!Array.isArray(i.satellites))throw new Error("The shared satellite catalog has an invalid format.");const e=i.satellites.map(t=>t&&typeof t=="object"?l0(t):null).filter(t=>!!t);if(!e.length)throw new Error("The shared satellite catalog contains no valid records.");return{satellites:e,fetchedAt:i.fetchedAt}},lx=i=>{if(!i||typeof i!="object")return!1;const e=i;if(!Number.isSafeInteger(e.noradId)||typeof e.name!="string")return!1;if(e.omm&&typeof e.omm=="object"){const t=l0(e.omm);return(t==null?void 0:t.noradId)===e.noradId}return typeof e.line1=="string"&&typeof e.line2=="string"},cx=new Map([[25544,"#ff9500"],[20580,"#00f0ff"],[25994,"#7cff4f"],[33591,"#ffd400"]]),lf={leo:"#d7ff3f",meo:"#ffc857",geo:"#ff70c8"},ux=(i,e)=>{const t=cx.get(i);return t||(e<2e3?lf.leo:e<2e4?lf.meo:lf.geo)},im=(i,e,t)=>`${Math.abs(i).toFixed(2)}° ${i>=0?e:t}`,Qa=i=>{const e=i.omm?nx(i.omm):tx(i.line1,i.line2);return e.error?null:{...i,satrec:e,periodSeconds:2*Math.PI/e.no*60}},fx=i=>{const e=i.omm?Number(i.omm.MEAN_MOTION):Number.parseFloat(i.line2.slice(52,63));return!Number.isFinite(e)||e<=0?null:{...i,periodSeconds:86400/e}},c0=i=>{const t=i;return(Math.pow(t*t*3986e11/(4*Math.PI*Math.PI),1/3)-o0*1e3)/1e3},u0=i=>i<2e3?"leo":i<2e4?"meo":"geo",dx=i=>Math.max(i/o0,5e-4),hx={all:{label:"All",value:"all"},leo:{label:"LEO (< 2000 km)",value:"leo"},meo:{label:"MEO (2-20k km)",value:"meo"},geo:{label:"GEO (20k+ km)",value:"geo"}},px=8*60*60*1e3,$f="orbitradar_active_satellite_tles_v2",mo="orbitradar_active_satellite_timestamp_v2",ud="orbitradar_active_satellite_source_timestamp_v2",f0=i=>{if(!i)return!1;const e=Date.parse(i),t=Date.now()-e;return!Number.isNaN(e)&&t>=0&&t<px},rm=(i=!1)=>{try{const e=localStorage.getItem($f),t=localStorage.getItem(mo);if(!e||!i&&!f0(t))return null;const s=JSON.parse(e);if(!Array.isArray(s.satellites))return null;const a=s.satellites.filter(lx);return a.length?a:null}catch{try{localStorage.removeItem($f),localStorage.removeItem(mo),localStorage.removeItem(ud)}catch{}return null}},mx=(i,e)=>{try{localStorage.setItem($f,JSON.stringify({satellites:i})),localStorage.setItem(mo,new Date().toISOString()),e&&localStorage.setItem(ud,e)}catch(t){console.warn("Satellite catalog could not be cached:",t)}},sm=()=>{try{const i=localStorage.getItem(ud);return i&&!Number.isNaN(Date.parse(i))?i:null}catch{return null}},gx="/data/catalog.json",vx="/data/catalog-status.json",_x=25544,xx=async()=>{try{const i=await fetch(vx,{cache:"no-cache"});return i.ok?await i.json():null}catch{return null}},yx=i=>{const[e,t]=_e.useState([]),[s,a]=_e.useState(_x),[l,c]=_e.useState(!0),[f,d]=_e.useState("Loading the shared satellite catalog..."),[h,m]=_e.useState(null),g=_e.useRef(!1),v=_e.useCallback((_,I,w)=>{const R=_.map(fx).filter(L=>!!L);t(R),d(I.replace("{count}",R.length.toLocaleString())),a(L=>{var D;return L===null?null:R.some(F=>F.noradId===L)?L:((D=R[0])==null?void 0:D.noradId)??null});let H=null;try{H=localStorage.getItem(mo)}catch{}m(w??sm()??H??new Date().toISOString())},[]),S=_e.useCallback(async()=>{if(g.current)return;g.current=!0,c(!0),d("Checking for the latest shared satellite catalog...");let _=null;try{const[I,w]=await Promise.all([fetch(gx,{cache:"no-cache"}),xx()]);if(_=w,!I.ok)throw new Error(`Shared catalog request failed (${I.status}).`);const R=ox(await I.json());mx(R.satellites,R.fetchedAt);let H="Tracking {count} satellites from the shared catalog.";(_==null?void 0:_.state)==="paused"?H=_.message?`${_.message} Using the last valid snapshot ({count} satellites).`:"Catalog publishing is paused for review; using the last valid snapshot ({count} satellites).":(_==null?void 0:_.state)==="error"&&(H="Catalog refresh failed; using the last valid published snapshot ({count} satellites)."),v(R.satellites,H,R.fetchedAt)}catch(I){console.warn("Unable to read shared satellite catalog:",I);const w=rm(!0);w?v(w,_!=null&&_.message?`${_.message} Showing the last saved snapshot ({count} satellites).`:"Shared catalog is unavailable; showing the last saved snapshot ({count} satellites)."):d((_==null?void 0:_.message)??"The shared satellite catalog is not available yet. Try again after it has been published.")}finally{g.current=!1,c(!1)}},[v]);_e.useEffect(()=>{const _=rm(!0);let I=null;try{I=localStorage.getItem(mo)}catch{}if(_&&f0(I)){v(_,"Tracking {count} satellites from local cache."),c(!1);return}_&&(v(_,"Checking for an update; showing the last saved snapshot ({count} satellites)."),m(sm()??I)),S()},[v,S]),_e.useEffect(()=>{if((i==null?void 0:i.autoRefresh)===!1)return;const _=((i==null?void 0:i.refreshIntervalHours)??8)*60*60*1e3,I=window.setInterval(()=>{S()},_);return()=>window.clearInterval(I)},[S,i==null?void 0:i.autoRefresh,i==null?void 0:i.refreshIntervalHours]);const M=_e.useCallback(()=>e.find(_=>_.noradId===s)??null,[e,s]),E=_e.useCallback(_=>{a(_)},[]),y=_e.useCallback(()=>{a(null)},[]);return{trackedSatellites:e,selectedNoradId:s,isLoading:l,statusMessage:f,lastUpdated:h,getSelectedSatellite:M,selectSatellite:E,clearSelection:y,refreshCatalog:S}},ic=(i,e)=>{const t=ix(i.satrec,e);if(!t||!t.position||typeof t.position!="object")return null;const s=ax(t.position,i0(e)),a=t.velocity,l=s.height,c={noradId:i.noradId,name:i.name,lat:rx(s.latitude),lng:sx(s.longitude),alt:dx(l),altitudeKm:l,velocityKph:a&&typeof a=="object"?Math.hypot(a.x,a.y,a.z)*3600:null,color:ux(i.noradId,l),altitudeClass:u0(c0(i.periodSeconds))};return Object.values(c).every(f=>typeof f!="number"||Number.isFinite(f))?c:null},am=(i,e,t=120)=>{const s=[],a=i.periodSeconds*1e3;for(let l=0;l<=t;l+=1){const c=new Date(e.getTime()+(l/t-.5)*a),f=ic(i,c);f&&s.push({lat:f.lat,lng:f.lng,alt:f.alt})}return s},Sx=1e3,Mx=(i,e,t,s)=>{const[a,l]=_e.useState(()=>new Date),[c,f]=_e.useState([]),[d,h]=_e.useState(0),[m,g]=_e.useState([]),[v,S]=_e.useState(!0),[M,E]=_e.useState(!1),y=_e.useRef(null),_=_e.useRef(0),I=_e.useRef(e),w=_e.useRef(0),R=_e.useRef(null),H=t!==void 0,L=t??a,D=_e.useMemo(()=>{if(e===null)return null;const j=i.find(re=>re.noradId===e);return j?Qa(j):null},[i,e]),[F,P]=_e.useState(void 0),b=_e.useRef({satellite:D,getTime:s??(()=>L)});b.current={satellite:D,getTime:s??(()=>L)};const z=_e.useMemo(()=>i,[i]),Z=_e.useRef({trackedSatellites:i,selectedNoradId:e,time:L,showOrbit:v});Z.current={trackedSatellites:i,selectedNoradId:e,time:L,showOrbit:v};const $=_e.useCallback((j,re)=>{f(j),R.current!==re&&(R.current=re,h(V=>V+1))},[]);_e.useEffect(()=>{if(H)return;const j=()=>{document.visibilityState!=="hidden"&&l(new Date)},re=window.setInterval(j,Sx);return document.addEventListener("visibilitychange",j),()=>{window.clearInterval(re),document.removeEventListener("visibilitychange",j)}},[H]),_e.useEffect(()=>{let j;try{j=new Worker(new URL("/pr-preview/pr-59/assets/positions.worker-myI-aH_2.js",import.meta.url),{type:"module"})}catch{return}return y.current=j,j.onmessage=re=>{re.data.requestId===_.current&&(re.data.type==="positions"&&re.data.positions?$(re.data.positions,re.data.snapshotKey??`request:${re.data.requestId}`):re.data.type==="orbit"&&re.data.orbitPoints&&g(re.data.orbitPoints))},j.onerror=()=>{const{trackedSatellites:re,selectedNoradId:V,time:le,showOrbit:oe}=Z.current,O=re.map(Q=>{const ie=Qa(Q);return ie?ic(ie,le):null}).filter(Q=>Q!==null);$(O,`${w.current}:${le.toISOString()}`);const q=re.find(Q=>Q.noradId===V),ke=q?Qa(q):null;g(ke&&oe?am(ke,le):[])},()=>{j.terminate(),y.current=null}},[$]),_e.useEffect(()=>{var j;w.current+=1,(j=y.current)==null||j.postMessage({type:"catalog",satellites:z})},[z]),_e.useEffect(()=>{let j=null;const re=()=>{const{satellite:le,getTime:oe}=b.current;if(!le){j=null,P(null);return}const O=oe(),q=O.getTime();q!==j&&(j=q,P(ic(le,O)))};P(void 0),re();const V=window.setInterval(re,100);return()=>window.clearInterval(V)},[D]),_e.useEffect(()=>{const j=++_.current;I.current!==e&&(g([]),I.current=e);const re=y.current,V=`${w.current}:${L.toISOString()}`;if(re){re.postMessage({requestId:j,time:L.toISOString(),selectedNoradId:e,showOrbit:v,snapshotKey:V});return}const le=i.map(q=>{const ke=Qa(q);return ke?ic(ke,L):null}).filter(q=>q!==null),oe=i.find(q=>q.noradId===e),O=oe?Qa(oe):null;$(le,V),g(O&&v?am(O,L):[])},[i,L,e,v,z,$]);const te=_e.useMemo(()=>c.find(j=>j.noradId===e)??null,[c,e]);return{time:a,satellitePositions:c,selectedPosition:F===void 0?te:F,snapshotVersion:d,orbitPoints:v?m:[],showOrbit:v,setShowOrbit:S,followSelected:M,setFollowSelected:E}},Ex=()=>new Promise((i,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t=>{const{latitude:s,longitude:a}=t.coords;i({lat:s,lng:a})},t=>{e("Error getting geolocation: "+t.message)}):e("Geolocation not supported by this browser.")}),cf="orbitradar_user_location",wx=()=>{const[i,e]=_e.useState(()=>{try{const a=localStorage.getItem(cf);if(!a)return null;const l=JSON.parse(a);if(!l||typeof l!="object")return null;const{lat:c,lng:f}=l;return typeof c=="number"&&Number.isFinite(c)&&Math.abs(c)<=90&&typeof f=="number"&&Number.isFinite(f)&&Math.abs(f)<=180?{lat:c,lng:f,name:"You"}:null}catch{return null}}),t=_e.useCallback(()=>Ex().then(a=>{const l={...a,name:"You"};e(l);try{localStorage.setItem(cf,JSON.stringify(a))}catch{}return l}).catch(a=>{throw console.error("Error getting user location:",a),a}),[]),s=_e.useCallback(()=>{e(null);try{localStorage.removeItem(cf)}catch{}},[]);return{userLocation:i,locateUser:t,clearUserLocation:s}},om="orbitradar_favorites",Tx=()=>{const[i,e]=_e.useState(()=>{try{const f=localStorage.getItem(om),d=f?JSON.parse(f):[];return Array.isArray(d)?[...new Set(d.filter(h=>Number.isSafeInteger(h)&&h>0))]:[]}catch{return[]}});_e.useEffect(()=>{try{localStorage.setItem(om,JSON.stringify(i))}catch(f){console.warn("Could not save favorites:",f)}},[i]);const t=_e.useCallback(f=>i.includes(f),[i]),s=_e.useCallback(f=>{e(d=>d.includes(f)?d.filter(h=>h!==f):[...d,f])},[]),a=_e.useCallback(f=>{e(d=>d.includes(f)?d:[...d,f])},[]),l=_e.useCallback(f=>{e(d=>d.filter(h=>h!==f))},[]),c=_e.useCallback(()=>{e([])},[]);return{favorites:i,isFavorite:t,toggleFavorite:s,addFavorite:a,removeFavorite:l,clearFavorites:c}},Ax=[1,5,10,30,60,120,300,600],Cx=i=>{if(Math.abs(i)<1e3)return"Live";const e=Math.abs(i),t=i<0?"-":"+";return e<6e4?`${t}${Math.floor(e/1e3)}s`:e<36e5?`${t}${Math.floor(e/6e4)}m`:`${t}${Math.floor(e/36e5)}h`},bx=()=>{const[i,e]=_e.useState(!1),[t,s]=_e.useState(!1),[a,l]=_e.useState(1),[c,f]=_e.useState(()=>Date.now()),[d,h]=_e.useState(()=>Date.now()),[m,g]=_e.useState(()=>Date.now()),v=_e.useRef(Date.now()),S=t||i?c:d,M=_e.useMemo(()=>new Date(S),[S]),E=S-d,y=_e.useCallback(()=>t?new Date(S):i?new Date(c+(Date.now()-m)*a):new Date,[S,t,i,c,a,m]),_=_e.useCallback(()=>Cx(E),[E]),I=_e.useCallback(()=>{if(i)return;const F=Date.now();v.current=F,t||f(F),g(F),s(!1),e(!0)},[i,t]),w=_e.useCallback(()=>{const F=Date.now();f(y().getTime()),v.current=F,g(F),e(!1),s(!0)},[y]),R=_e.useCallback(()=>{i?w():I()},[i,I,w]),H=_e.useCallback(F=>{if(i){const P=Date.now();f(y().getTime()),v.current=P,g(P)}l(F)},[i,y]),L=_e.useCallback(()=>{const F=Date.now();f(F),h(F),g(F),v.current=F,e(!1),s(!1)},[]);_e.useEffect(()=>{const F=()=>{if(document.hidden)return;const b=Date.now();if(h(b),i){const z=b-v.current;v.current=b,f(Z=>Z+z*a),g(b)}},P=window.setInterval(F,1e3);return document.addEventListener("visibilitychange",F),()=>{window.clearInterval(P),document.removeEventListener("visibilitychange",F)}},[i,a]);const D=_e.useCallback(F=>F===1?"1x (Real-time)":F<60?`${F}x`:`${F/60} min`,[]);return{isTimeLapseActive:i,isPaused:t,speed:a,speeds:Ax,currentTime:M,timeOffsetMs:E,startTimeLapse:I,stopTimeLapse:w,toggleTimeLapse:R,setTimeLapseSpeed:H,resetTime:L,getSpeedLabel:D,getEffectiveTime:y,getTimeOffsetDisplay:_}},uf=10,Rx=i=>{const[e,t]=_e.useState([]),s=_e.useCallback(g=>{t(v=>v.includes(g)?v:v.length>=uf?[...v.slice(1),g]:[...v,g])},[]),a=_e.useCallback(g=>{t(v=>v.filter(S=>S!==g))},[]),l=_e.useCallback(g=>{t(v=>v.includes(g)?v.filter(S=>S!==g):v.length>=uf?[...v.slice(1),g]:[...v,g])},[]),c=_e.useCallback(()=>{t([])},[]),f=_e.useCallback(g=>e.includes(g),[e]),d=_e.useMemo(()=>i.filter(g=>e.includes(g.noradId)),[i,e]),h=_e.useMemo(()=>e.map(g=>{const v=i.find(S=>S.noradId===g);return v?{noradId:g,position:v}:null}).filter(g=>g!==null),[i,e]),m=_e.useCallback(g=>{const v=e.indexOf(g);if(v===-1)return"";const S=["#ff9500","#00f0ff","#7cff4f","#ffd400","#d7ff3f","#ff70c8","#67e8f9","#2cffb7","#ff9f1c","#ffc857"];return S[v%S.length]},[e]);return{trackedNoradIds:e,trackedPositions:d,trackedWithPositions:h,isTracked:f,addTracked:s,removeTracked:a,toggleTracked:l,clearTracked:c,getTrackedColor:m,maxTracked:uf}},Px=(i,e,t=new Date)=>{const[s,a]=_e.useState([]),[l,c]=_e.useState(!1),[f,d]=_e.useState(null),h=_e.useRef(null),m=_e.useRef(0);_e.useEffect(()=>{let E;try{E=new Worker(new URL("/pr-preview/pr-59/assets/passes.worker-UJycLH1I.js",import.meta.url),{type:"module"})}catch{d("Background workers are unavailable in this browser.");return}return h.current=E,E.onmessage=y=>{y.data.requestId===m.current&&(c(!1),y.data.error?d(y.data.error):a(y.data.passes.map(_=>({..._,riseTime:new Date(_.riseTime),maxElevationTime:new Date(_.maxElevationTime),setTime:new Date(_.setTime)}))))},E.onerror=()=>{c(!1),d("Pass prediction failed. Please try again.")},()=>{E.terminate(),h.current=null}},[]);const g=_e.useCallback(E=>{var I;if(!e){d("Set your location before predicting passes.");return}const y=i.filter(w=>E.includes(w.noradId));if(!y.length){d("No satellites are available to predict.");return}if(!h.current){d("Background workers are unavailable in this browser.");return}a([]),d(null),c(!0);const _=++m.current;(I=h.current)==null||I.postMessage({requestId:_,location:{lat:e.lat,lng:e.lng},startTime:t.getTime(),satellites:y})},[i,e,t]),v=_e.useCallback(E=>g([E]),[g]),S=_e.useCallback(E=>g(E),[g]),M=_e.useCallback(()=>{var y;const E=++m.current;(y=h.current)==null||y.postMessage({type:"cancel",requestId:E}),c(!1),a([]),d(null)},[]);return{passes:s,isCalculating:l,error:f,calculateForSelected:v,calculateForTracked:S,clearPasses:M}},lm="orbitradar_settings",Ii={theme:"dark",showOrbitsByDefault:!0,defaultAltitudeFilter:"all",autoRefresh:!0,refreshIntervalHours:8,nightShading:!0,cloudCover:!0},Lx=()=>{const[i,e]=_e.useState(()=>{try{const a=localStorage.getItem(lm);if(a){const l=JSON.parse(a);return{...Ii,...l,theme:["dark","light","system"].includes(l.theme??"")?l.theme:Ii.theme,defaultAltitudeFilter:["all","leo","meo","geo"].includes(l.defaultAltitudeFilter??"")?l.defaultAltitudeFilter:Ii.defaultAltitudeFilter,refreshIntervalHours:[1,4,8,12,24].includes(l.refreshIntervalHours??0)?l.refreshIntervalHours:Ii.refreshIntervalHours,autoRefresh:typeof l.autoRefresh=="boolean"?l.autoRefresh:Ii.autoRefresh,showOrbitsByDefault:typeof l.showOrbitsByDefault=="boolean"?l.showOrbitsByDefault:Ii.showOrbitsByDefault,nightShading:typeof l.nightShading=="boolean"?l.nightShading:Ii.nightShading,cloudCover:typeof l.cloudCover=="boolean"?l.cloudCover:Ii.cloudCover}}}catch{}return Ii});_e.useEffect(()=>{try{localStorage.setItem(lm,JSON.stringify(i))}catch(a){console.warn("Could not save settings:",a)}},[i]);const t=_e.useCallback((a,l)=>{e(c=>({...c,[a]:l}))},[]),s=_e.useCallback(()=>{e(Ii)},[]);return _e.useEffect(()=>{var c;const a=(c=window.matchMedia)==null?void 0:c.call(window,"(prefers-color-scheme: light)"),l=()=>{document.documentElement.dataset.theme=i.theme==="system"?a.matches?"light":"dark":i.theme};return l(),a==null||a.addEventListener("change",l),()=>a==null?void 0:a.removeEventListener("change",l)},[i.theme]),{settings:i,updateSetting:t,resetSettings:s}},cm='button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',lo=(i,e)=>{const t=_e.useRef(null),s=_e.useRef(e);return s.current=e,_e.useEffect(()=>{var d;if(!i)return;const a=document.activeElement instanceof HTMLElement?document.activeElement:null,l=t.current;(d=(l==null?void 0:l.querySelector(cm))??l)==null||d.focus();const f=h=>{if(h.key==="Escape"){h.preventDefault(),s.current();return}if(h.key!=="Tab"||!l)return;const m=[...l.querySelectorAll(cm)];if(!m.length){h.preventDefault(),l.focus();return}const g=m[0],v=m[m.length-1];h.shiftKey&&document.activeElement===g?(h.preventDefault(),v.focus()):!h.shiftKey&&document.activeElement===v&&(h.preventDefault(),g.focus())};return document.addEventListener("keydown",f),()=>{document.removeEventListener("keydown",f),a==null||a.focus()}},[i]),t};class Nx extends Jg.Component{constructor(){super(...arguments);Wp(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){console.error("The globe could not be rendered:",t)}render(){return this.state.hasError?k.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[k.jsx("p",{className:"text-lg font-bold",children:"The 3D globe is unavailable."}),k.jsx("p",{className:"max-w-sm text-sm text-slate-300",children:"Satellite data and controls are still available. Check graphics acceleration, then try the globe again."}),k.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:this.props.onRetry,type:"button",children:"Retry globe"})]}):this.props.children}}const Ix=({passes:i,isCalculating:e,error:t,onClose:s,onCalculateTracked:a,selectedSatelliteName:l})=>{const c=lo(!0,s),f=m=>m.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),d=m=>m.toLocaleDateString([],{month:"short",day:"numeric",year:m.getFullYear()!==new Date().getFullYear()?"numeric":void 0}),h=m=>{if(m<60)return`${Math.round(m)} min`;const g=Math.floor(m/60),v=Math.round(m%60);return`${g}h ${v}m`};return k.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:k.jsxs("section",{ref:c,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"passes-title",className:"max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Pass Prediction"}),k.jsx("h2",{id:"passes-title",className:"mt-1 text-2xl font-bold",children:"Upcoming satellite passes"}),k.jsxs("p",{className:"mt-1 text-sm text-slate-400",children:[l," and tracked objects · next 24 hours · over your location"]})]}),k.jsx("button",{"aria-label":"Close pass prediction",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),k.jsxs("div",{className:"max-h-[calc(90vh-140px)] overflow-y-auto",children:[t&&k.jsx("div",{className:"p-4 text-red-400",children:k.jsxs("p",{children:["Error: ",t]})}),e&&i.length===0&&!t&&k.jsx("div",{className:"p-4 text-center text-slate-400",children:k.jsx("p",{children:"Calculating passes... This may take a moment."})}),!e&&i.length===0&&!t&&k.jsxs("div",{className:"p-4 text-center text-slate-400",children:[k.jsx("p",{children:"No passes found for this satellite in the next 24 hours."}),k.jsx("p",{className:"mt-2 text-sm",children:"The satellite may not pass over your location, or its orbit may not be visible."})]}),i.length>0&&k.jsx("div",{className:"p-4",children:k.jsx("div",{className:"space-y-3",children:i.map((m,g)=>k.jsxs("div",{className:"rounded-xl border border-white/10 bg-white/5 p-4",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsxs("p",{className:"font-semibold",children:[m.name," · Pass #",g+1]}),k.jsx("p",{className:"text-sm text-slate-400",children:d(m.riseTime)})]}),k.jsxs("span",{className:`rounded-full px-2 py-1 text-xs ${m.maxElevationDeg>=60?"bg-green-500/20 text-green-400":m.maxElevationDeg>=30?"bg-yellow-500/20 text-yellow-400":"bg-blue-500/20 text-blue-400"}`,children:["Max: ",m.maxElevationDeg.toFixed(1),"°"]})]}),k.jsxs("div",{className:"mt-3 grid grid-cols-3 gap-2 text-sm",children:[k.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[k.jsx("p",{className:"text-slate-400",children:"Rise"}),k.jsx("p",{className:"font-semibold",children:f(m.riseTime)})]}),k.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[k.jsx("p",{className:"text-slate-400",children:"Peak"}),k.jsx("p",{className:"font-semibold",children:f(m.maxElevationTime)})]}),k.jsxs("div",{className:"rounded-lg bg-white/10 p-2 text-center",children:[k.jsx("p",{className:"text-slate-400",children:"Set"}),k.jsx("p",{className:"font-semibold",children:f(m.setTime)})]})]}),k.jsxs("div",{className:"mt-2 text-center text-xs text-slate-400",children:["Duration: ",h(m.durationMinutes)]})]},g))})})]}),k.jsx("footer",{className:"border-t border-white/10 p-4",children:k.jsx("button",{className:"w-full rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:a,type:"button",children:"Predict Selected / Tracked"})})]})})},Dx=({settings:i,onUpdate:e,onReset:t,onClose:s})=>{const a=lo(!0,s);return k.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm",children:k.jsxs("section",{ref:a,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"settings-title",className:"max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Settings"}),k.jsx("h2",{id:"settings-title",className:"mt-1 text-2xl font-bold",children:"Configuration"}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Customize your OrbitRadar experience"})]}),k.jsx("button",{"aria-label":"Close settings",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:s,type:"button",children:"Close"})]}),k.jsx("div",{className:"max-h-[calc(90vh-180px)] overflow-y-auto p-5",children:k.jsxs("div",{className:"space-y-6",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Theme"}),k.jsx("div",{className:"flex gap-2",children:["dark","light","system"].map(l=>k.jsx("button",{className:`flex-1 rounded-lg border px-3 py-2 text-sm transition ${i.theme===l?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,"aria-pressed":i.theme===l,onClick:()=>e("theme",l),type:"button",children:l.charAt(0).toUpperCase()+l.slice(1)},l))})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Show orbits by default"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.showOrbitsByDefault?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.showOrbitsByDefault,onClick:()=>e("showOrbitsByDefault",!i.showOrbitsByDefault),type:"button",children:i.showOrbitsByDefault?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically show orbit path when selecting a satellite"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Default altitude filter"}),k.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("defaultAltitudeFilter",l.target.value),value:i.defaultAltitudeFilter,children:[k.jsx("option",{value:"all",children:"All Satellites"}),k.jsx("option",{value:"leo",children:"LEO (<2000km)"}),k.jsx("option",{value:"meo",children:"MEO (2-20k km)"}),k.jsx("option",{value:"geo",children:"GEO (20k+ km)"})]})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Night shading"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.nightShading?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.nightShading,onClick:()=>e("nightShading",!i.nightShading),type:"button",children:i.nightShading?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Follow the simulated UTC sun position."})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Cloud cover"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm ${i.cloudCover?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.cloudCover,onClick:()=>e("cloudCover",!i.cloudCover),type:"button",children:i.cloudCover?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Shared NASA daily cloud fraction, latest cached observation."})]}),k.jsxs("div",{children:[k.jsxs("label",{className:"flex items-center justify-between cursor-pointer",children:[k.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Auto refresh catalog"}),k.jsx("button",{className:`rounded-full px-4 py-2 text-sm transition ${i.autoRefresh?"bg-cyan-500/20 text-cyan-300":"bg-white/10 text-slate-400"}`,"aria-pressed":i.autoRefresh,onClick:()=>e("autoRefresh",!i.autoRefresh),type:"button",children:i.autoRefresh?"ON":"OFF"})]}),k.jsx("p",{className:"mt-1 text-xs text-slate-500",children:"Automatically refresh satellite catalog periodically"})]}),i.autoRefresh&&k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold text-slate-300 mb-2",children:"Refresh interval (hours)"}),k.jsxs("select",{className:"w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300",onChange:l=>e("refreshIntervalHours",Number(l.target.value)),value:i.refreshIntervalHours,children:[k.jsx("option",{value:1,children:"1 hour"}),k.jsx("option",{value:4,children:"4 hours"}),k.jsx("option",{value:8,children:"8 hours"}),k.jsx("option",{value:12,children:"12 hours"}),k.jsx("option",{value:24,children:"24 hours"})]})]})]})}),k.jsx("footer",{className:"border-t border-white/10 p-4",children:k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-400 transition hover:bg-white/20",onClick:t,type:"button",children:"Reset to defaults"}),k.jsx("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:s,type:"button",children:"Save & Close"})]})})]})})},o2=(i,e,t)=>i*(e?.016:t?.012:.008),l2="#ffffff",Ux=i=>Math.min(Math.max(i,1),1.5);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="165",c2={ROTATE:0,DOLLY:1,PAN:2},u2={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ox=0,um=1,Fx=2,d0=1,zx=2,tr=3,ki=0,$n=1,nr=2,Or=0,aa=1,fm=2,dm=3,hm=4,kx=5,cs=100,Bx=101,Hx=102,Vx=103,Gx=104,Wx=200,jx=201,Xx=202,qx=203,Kf=204,Zf=205,Yx=206,$x=207,Kx=208,Zx=209,Jx=210,Qx=211,ey=212,ty=213,ny=214,iy=0,ry=1,sy=2,ac=3,ay=4,oy=5,ly=6,cy=7,vc=0,uy=1,fy=2,Fr=0,dy=1,hy=2,py=3,my=4,gy=5,vy=6,_y=7,h0=300,ua=301,fa=302,Jf=303,Qf=304,_c=306,ed=1e3,sr=1001,td=1002,Yn=1003,xy=1004,Al=1005,si=1006,ff=1007,hs=1008,zr=1009,yy=1010,Sy=1011,oc=1012,p0=1013,da=1014,ar=1015,xc=1016,m0=1017,g0=1018,ha=1020,My=35902,Ey=1021,wy=1022,Fi=1023,Ty=1024,Ay=1025,oa=1026,pa=1027,v0=1028,_0=1029,Cy=1030,x0=1031,y0=1033,df=33776,hf=33777,pf=33778,mf=33779,pm=35840,mm=35841,gm=35842,vm=35843,_m=36196,xm=37492,ym=37496,Sm=37808,Mm=37809,Em=37810,wm=37811,Tm=37812,Am=37813,Cm=37814,bm=37815,Rm=37816,Pm=37817,Lm=37818,Nm=37819,Im=37820,Dm=37821,gf=36492,Um=36494,Om=36495,by=36283,Fm=36284,zm=36285,km=36286,f2=0,d2=1,h2=2,Ry=3200,Py=3201,dd=0,Ly=1,Ur="",Ti="srgb",kr="srgb-linear",hd="display-p3",yc="display-p3-linear",lc="linear",qt="srgb",cc="rec709",uc="p3",Bs=7680,Bm=519,Ny=512,Iy=513,Dy=514,S0=515,Uy=516,Oy=517,Fy=518,zy=519,nd=35044,p2=35048,Hm="300 es",or=2e3,fc=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vm=1234567;const co=Math.PI/180,go=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function pn(i,e,t){return Math.max(e,Math.min(t,i))}function pd(i,e){return(i%e+e)%e}function ky(i,e,t,s,a){return s+(i-e)*(a-s)/(t-e)}function By(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function Hy(i,e,t,s){return uo(i,e,1-Math.exp(-t*s))}function Vy(i,e=1){return e-Math.abs(pd(i,e*2)-e)}function Gy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Wy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xy(i,e){return i+Math.random()*(e-i)}function qy(i){return i*(.5-Math.random())}function Yy(i){i!==void 0&&(Vm=i);let e=Vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $y(i){return i*co}function Ky(i){return i*go}function Zy(i){return(i&i-1)===0&&i!==0}function Jy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function eS(i,e,t,s,a){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+s)/2),m=c((e+s)/2),g=l((e-s)/2),v=c((e-s)/2),S=l((s-e)/2),M=c((s-e)/2);switch(a){case"XYX":i.set(f*m,d*g,d*v,f*h);break;case"YZY":i.set(d*v,f*m,d*g,f*h);break;case"ZXZ":i.set(d*g,d*v,f*m,f*h);break;case"XZX":i.set(f*m,d*M,d*S,f*h);break;case"YXY":i.set(d*S,f*m,d*M,f*h);break;case"ZYZ":i.set(d*M,d*S,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const m2={DEG2RAD:co,RAD2DEG:go,generateUUID:zi,clamp:pn,euclideanModulo:pd,mapLinear:ky,inverseLerp:By,lerp:uo,damp:Hy,pingpong:Vy,smoothstep:Gy,smootherstep:Wy,randInt:jy,randFloat:Xy,randFloatSpread:qy,seededRandom:Yy,degToRad:$y,radToDeg:Ky,isPowerOfTwo:Zy,ceilPowerOfTwo:Jy,floorPowerOfTwo:Qy,setQuaternionFromProperEuler:eS,normalize:kt,denormalize:Ci};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*a+e.x,this.y=l*a+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,t,s,a,l,c,f,d,h){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,h)}set(e,t,s,a,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=s,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[3],d=s[6],h=s[1],m=s[4],g=s[7],v=s[2],S=s[5],M=s[8],E=a[0],y=a[3],_=a[6],I=a[1],w=a[4],R=a[7],H=a[2],L=a[5],D=a[8];return l[0]=c*E+f*I+d*H,l[3]=c*y+f*w+d*L,l[6]=c*_+f*R+d*D,l[1]=h*E+m*I+g*H,l[4]=h*y+m*w+g*L,l[7]=h*_+m*R+g*D,l[2]=v*E+S*I+M*H,l[5]=v*y+S*w+M*L,l[8]=v*_+S*R+M*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-s*l*m+s*f*d+a*l*h-a*c*d}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*c-f*h,v=f*d-m*l,S=h*l-c*d,M=t*g+s*v+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(a*h-m*s)*E,e[2]=(f*s-a*c)*E,e[3]=v*E,e[4]=(m*t-a*d)*E,e[5]=(a*l-f*t)*E,e[6]=S*E,e[7]=(s*d-h*t)*E,e[8]=(c*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(s*d,s*h,-s*(d*c+h*f)+c+e,-a*h,a*d,-a*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(vf.makeScale(e,t)),this}rotate(e){return this.premultiply(vf.makeRotation(-e)),this}translate(e,t){return this.premultiply(vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vf=new Tt;function M0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tS(){const i=vo("canvas");return i.style.display="block",i}const Gm={};function md(i){i in Gm||(Gm[i]=!0,console.warn(i))}function nS(i,e,t){return new Promise(function(s,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const Wm=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jm=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cl={[kr]:{transfer:lc,primaries:cc,toReference:i=>i,fromReference:i=>i},[Ti]:{transfer:qt,primaries:cc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[yc]:{transfer:lc,primaries:uc,toReference:i=>i.applyMatrix3(jm),fromReference:i=>i.applyMatrix3(Wm)},[hd]:{transfer:qt,primaries:uc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(jm),fromReference:i=>i.applyMatrix3(Wm).convertLinearToSRGB()}},iS=new Set([kr,yc]),Bt={enabled:!0,_workingColorSpace:kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!iS.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const s=Cl[e].toReference,a=Cl[t].fromReference;return a(s(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cl[i].primaries},getTransfer:function(i){return i===Ur?lc:Cl[i].transfer}};function la(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _f(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hs;class rS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=vo("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=la(l[c]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(la(t[s]/255)*255):t[s]=la(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sS=0;class E0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(xf(a[c].image)):l.push(xf(a[c]))}else l=xf(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function xf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aS=0;class In extends ga{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=sr,a=sr,l=si,c=hs,f=Fi,d=zr,h=In.DEFAULT_ANISOTROPY,m=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=zi(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==h0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=h0;In.DEFAULT_ANISOTROPY=1;class Mn{constructor(e=0,t=0,s=0,a=1){Mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*a+c[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],S=d[5],M=d[9],E=d[2],y=d[6],_=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,R=(S+1)/2,H=(_+1)/2,L=(m+v)/4,D=(g+E)/4,F=(M+y)/4;return w>R&&w>H?w<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(w),a=L/s,l=D/s):R>H?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=L/a,l=F/a):H<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),s=D/l,a=F/l),this.set(s,a,l,t),this}let I=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(I)<.001&&(I=1),this.x=(y-M)/I,this.y=(g-E)/I,this.z=(v-m)/I,this.w=Math.acos((h+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oS extends ga{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mn(0,0,e,t),this.scissorTest=!1,this.viewport=new Mn(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new In(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const c=s.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends oS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class w0 extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lS extends In{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class So{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,c,f){let d=s[a+0],h=s[a+1],m=s[a+2],g=s[a+3];const v=l[c+0],S=l[c+1],M=l[c+2],E=l[c+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(f===1){e[t+0]=v,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==v||h!==S||m!==M){let y=1-f;const _=d*v+h*S+m*M+g*E,I=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const H=Math.sqrt(w),L=Math.atan2(H,_*I);y=Math.sin(y*L)/H,f=Math.sin(f*L)/H}const R=f*I;if(d=d*y+v*R,h=h*y+S*R,m=m*y+M*R,g=g*y+E*R,y===1-f){const H=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=H,h*=H,m*=H,g*=H}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,a,l,c){const f=s[a],d=s[a+1],h=s[a+2],m=s[a+3],g=l[c],v=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+m*g+d*S-h*v,e[t+1]=d*M+m*v+h*g-f*S,e[t+2]=h*M+m*S+f*v-d*g,e[t+3]=m*M-f*g-d*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(s/2),m=f(a/2),g=f(l/2),v=d(s/2),S=d(a/2),M=d(l/2);switch(c){case"XYZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"YXZ":this._x=v*m*g+h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"ZXY":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g-v*S*M;break;case"ZYX":this._x=v*m*g-h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g+v*S*M;break;case"YZX":this._x=v*m*g+h*S*M,this._y=h*S*g+v*m*M,this._z=h*m*M-v*S*g,this._w=h*m*g-v*S*M;break;case"XZY":this._x=v*m*g-h*S*M,this._y=h*S*g-v*m*M,this._z=h*m*M+v*S*g,this._w=h*m*g+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=s+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-d)*S,this._y=(l-h)*S,this._z=(c-a)*S}else if(s>f&&s>g){const S=2*Math.sqrt(1+s-f-g);this._w=(m-d)/S,this._x=.25*S,this._y=(a+c)/S,this._z=(l+h)/S}else if(f>g){const S=2*Math.sqrt(1+f-s-g);this._w=(l-h)/S,this._x=(a+c)/S,this._y=.25*S,this._z=(d+m)/S}else{const S=2*Math.sqrt(1+g-s-f);this._w=(c-a)/S,this._x=(l+h)/S,this._y=(d+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=s*m+c*f+a*h-l*d,this._y=a*m+c*d+l*f-s*h,this._z=l*m+c*h+s*d-a*f,this._w=c*m-s*f-a*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=s,this._y=a,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=c*g+this._w*v,this._x=s*g+this._x*v,this._y=a*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,s=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*a-f*s),m=2*(f*t-l*a),g=2*(l*s-c*t);return this.x=t+d*h+c*g-f*m,this.y=s+d*m+f*h-l*g,this.z=a+d*g+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=a*d-l*f,this.y=l*c-s*d,this.z=s*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yf.copy(this).projectOnVector(e),this.sub(yf)}reflect(e){return this.sub(yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(pn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yf=new K,Xm=new So;class gs{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(l,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bl.copy(s.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Rl.subVectors(this.max,eo),Vs.subVectors(e.a,eo),Gs.subVectors(e.b,eo),Ws.subVectors(e.c,eo),br.subVectors(Gs,Vs),Rr.subVectors(Ws,Gs),ts.subVectors(Vs,Ws);let t=[0,-br.z,br.y,0,-Rr.z,Rr.y,0,-ts.z,ts.y,br.z,0,-br.x,Rr.z,0,-Rr.x,ts.z,0,-ts.x,-br.y,br.x,0,-Rr.y,Rr.x,0,-ts.y,ts.x,0];return!Sf(t,Vs,Gs,Ws,Rl)||(t=[1,0,0,0,1,0,0,0,1],!Sf(t,Vs,Gs,Ws,Rl))?!1:(Pl.crossVectors(br,Rr),t=[Pl.x,Pl.y,Pl.z],Sf(t,Vs,Gs,Ws,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new K,new K,new K,new K,new K,new K,new K,new K],Mi=new K,bl=new gs,Vs=new K,Gs=new K,Ws=new K,br=new K,Rr=new K,ts=new K,eo=new K,Rl=new K,Pl=new K,ns=new K;function Sf(i,e,t,s,a){for(let l=0,c=i.length-3;l<=c;l+=3){ns.fromArray(i,l);const f=a.x*Math.abs(ns.x)+a.y*Math.abs(ns.y)+a.z*Math.abs(ns.z),d=e.dot(ns),h=t.dot(ns),m=s.dot(ns);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const cS=new gs,to=new K,Mf=new K;class va{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):cS.setFromPoints(e).getCenter(s);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(to,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Mf)),this.expandByPoint(to.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new K,Ef=new K,Ll=new K,Pr=new K,wf=new K,Nl=new K,Tf=new K;class gd{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Ef.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Ef);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ll),f=Pr.dot(this.direction),d=-Pr.dot(Ll),h=Pr.lengthSq(),m=Math.abs(1-c*c);let g,v,S,M;if(m>0)if(g=c*d-f,v=c*f-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,S=g*(g+c*v+2*f)+v*(c*g+v+2*d)+h}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+h):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),S=-g*g+v*(v+2*d)+h);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*d)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ef).addScaledVector(Ll,v),S}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const s=Zi.dot(this.direction),a=Zi.dot(Zi)-s*s,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=s-c,d=s+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,a=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,a=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),s>c||l>a||((l>s||isNaN(s))&&(s=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),s>d||f>a)||((f>s||s!==s)&&(s=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,s,a,l){wf.subVectors(t,e),Nl.subVectors(s,e),Tf.crossVectors(wf,Nl);let c=this.direction.dot(Tf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Pr.subVectors(this.origin,e);const d=f*this.direction.dot(Nl.crossVectors(Pr,Nl));if(d<0)return null;const h=f*this.direction.dot(wf.cross(Pr));if(h<0||d+h>c)return null;const m=-f*Pr.dot(Tf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,s,a,l,c,f,d,h,m,g,v,S,M,E,y){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,c,f,d,h,m,g,v,S,M,E,y)}set(e,t,s,a,l,c,f,d,h,m,g,v,S,M,E,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=d,_[2]=h,_[6]=m,_[10]=g,_[14]=v,_[3]=S,_[7]=M,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),c=1/js.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,c=Math.cos(s),f=Math.sin(s),d=Math.cos(a),h=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=c*m,S=c*g,M=f*m,E=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=S+M*h,t[5]=v-E*h,t[9]=-f*d,t[2]=E-v*h,t[6]=M+S*h,t[10]=c*d}else if(e.order==="YXZ"){const v=d*m,S=d*g,M=h*m,E=h*g;t[0]=v+E*f,t[4]=M*f-S,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-f,t[2]=S*f-M,t[6]=E+v*f,t[10]=c*d}else if(e.order==="ZXY"){const v=d*m,S=d*g,M=h*m,E=h*g;t[0]=v-E*f,t[4]=-c*g,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*m,t[9]=E-v*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const v=c*m,S=c*g,M=f*m,E=f*g;t[0]=d*m,t[4]=M*h-S,t[8]=v*h+E,t[1]=d*g,t[5]=E*h+v,t[9]=S*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,S=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=E-v*g,t[8]=M*g+S,t[1]=g,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=S*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=c*d,S=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+E,t[5]=c*m,t[9]=S*g-M,t[2]=M*g-S,t[6]=f*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,fS)}lookAt(e,t,s){const a=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Lr.crossVectors(s,ni),Lr.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Lr.crossVectors(s,ni)),Lr.normalize(),Il.crossVectors(ni,Lr),a[0]=Lr.x,a[4]=Il.x,a[8]=ni.x,a[1]=Lr.y,a[5]=Il.y,a[9]=ni.y,a[2]=Lr.z,a[6]=Il.z,a[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,c=s[0],f=s[4],d=s[8],h=s[12],m=s[1],g=s[5],v=s[9],S=s[13],M=s[2],E=s[6],y=s[10],_=s[14],I=s[3],w=s[7],R=s[11],H=s[15],L=a[0],D=a[4],F=a[8],P=a[12],b=a[1],z=a[5],Z=a[9],$=a[13],te=a[2],de=a[6],j=a[10],re=a[14],V=a[3],le=a[7],oe=a[11],O=a[15];return l[0]=c*L+f*b+d*te+h*V,l[4]=c*D+f*z+d*de+h*le,l[8]=c*F+f*Z+d*j+h*oe,l[12]=c*P+f*$+d*re+h*O,l[1]=m*L+g*b+v*te+S*V,l[5]=m*D+g*z+v*de+S*le,l[9]=m*F+g*Z+v*j+S*oe,l[13]=m*P+g*$+v*re+S*O,l[2]=M*L+E*b+y*te+_*V,l[6]=M*D+E*z+y*de+_*le,l[10]=M*F+E*Z+y*j+_*oe,l[14]=M*P+E*$+y*re+_*O,l[3]=I*L+w*b+R*te+H*V,l[7]=I*D+w*z+R*de+H*le,l[11]=I*F+w*Z+R*j+H*oe,l[15]=I*P+w*$+R*re+H*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],S=e[14],M=e[3],E=e[7],y=e[11],_=e[15];return M*(+l*d*g-a*h*g-l*f*v+s*h*v+a*f*S-s*d*S)+E*(+t*d*S-t*h*v+l*c*v-a*c*S+a*h*m-l*d*m)+y*(+t*h*g-t*f*S-l*c*g+s*c*S+l*f*m-s*h*m)+_*(-a*f*m-t*d*g+t*f*v+a*c*g-s*c*v+s*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],S=e[11],M=e[12],E=e[13],y=e[14],_=e[15],I=g*y*h-E*v*h+E*d*S-f*y*S-g*d*_+f*v*_,w=M*v*h-m*y*h-M*d*S+c*y*S+m*d*_-c*v*_,R=m*E*h-M*g*h+M*f*S-c*E*S-m*f*_+c*g*_,H=M*g*d-m*E*d-M*f*v+c*E*v+m*f*y-c*g*y,L=t*I+s*w+a*R+l*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=I*D,e[1]=(E*v*l-g*y*l-E*a*S+s*y*S+g*a*_-s*v*_)*D,e[2]=(f*y*l-E*d*l+E*a*h-s*y*h-f*a*_+s*d*_)*D,e[3]=(g*d*l-f*v*l-g*a*h+s*v*h+f*a*S-s*d*S)*D,e[4]=w*D,e[5]=(m*y*l-M*v*l+M*a*S-t*y*S-m*a*_+t*v*_)*D,e[6]=(M*d*l-c*y*l-M*a*h+t*y*h+c*a*_-t*d*_)*D,e[7]=(c*v*l-m*d*l+m*a*h-t*v*h-c*a*S+t*d*S)*D,e[8]=R*D,e[9]=(M*g*l-m*E*l-M*s*S+t*E*S+m*s*_-t*g*_)*D,e[10]=(c*E*l-M*f*l+M*s*h-t*E*h-c*s*_+t*f*_)*D,e[11]=(m*f*l-c*g*l-m*s*h+t*g*h+c*s*S-t*f*S)*D,e[12]=H*D,e[13]=(m*E*a-M*g*a+M*s*v-t*E*v-m*s*y+t*g*y)*D,e[14]=(M*f*a-c*E*a-M*s*d+t*E*d+c*s*y-t*f*y)*D,e[15]=(c*g*a-m*f*a+m*s*d-t*g*d-c*s*v+t*f*v)*D,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+s,h*f-a*d,h*d+a*f,0,h*f+a*d,m*f+s,m*d-a*c,0,h*d-a*f,m*d+a*c,l*d*d+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,c){return this.set(1,s,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,m=c+c,g=f+f,v=l*h,S=l*m,M=l*g,E=c*m,y=c*g,_=f*g,I=d*h,w=d*m,R=d*g,H=s.x,L=s.y,D=s.z;return a[0]=(1-(E+_))*H,a[1]=(S+R)*H,a[2]=(M-w)*H,a[3]=0,a[4]=(S-R)*L,a[5]=(1-(v+_))*L,a[6]=(y+I)*L,a[7]=0,a[8]=(M+w)*D,a[9]=(y-I)*D,a[10]=(1-(v+E))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=js.set(a[0],a[1],a[2]).length();const c=js.set(a[4],a[5],a[6]).length(),f=js.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Ei.copy(this);const h=1/l,m=1/c,g=1/f;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=m,Ei.elements[5]*=m,Ei.elements[6]*=m,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,t.setFromRotationMatrix(Ei),s.x=l,s.y=c,s.z=f,this}makePerspective(e,t,s,a,l,c,f=or){const d=this.elements,h=2*l/(t-e),m=2*l/(s-a),g=(t+e)/(t-e),v=(s+a)/(s-a);let S,M;if(f===or)S=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===fc)S=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,s,a,l,c,f=or){const d=this.elements,h=1/(t-e),m=1/(s-a),g=1/(c-l),v=(t+e)*h,S=(s+a)*m;let M,E;if(f===or)M=(c+l)*g,E=-2*g;else if(f===fc)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const js=new K,Ei=new Vt,uS=new K(0,0,0),fS=new K(1,1,1),Lr=new K,Il=new K,ni=new K,qm=new Vt,Ym=new So;class bi{constructor(e=0,t=0,s=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],d=a[1],h=a[5],m=a[9],g=a[2],v=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-pn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-pn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ym.setFromEuler(this),this.setFromQuaternion(Ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const $m=new K,Xs=new So,Ji=new Vt,Dl=new K,no=new K,hS=new K,pS=new So,Km=new K(1,0,0),Zm=new K(0,1,0),Jm=new K(0,0,1),Qm={type:"added"},mS={type:"removed"},qs={type:"childadded",child:null},Af={type:"childremoved",child:null};class Tn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new K,t=new bi,s=new So,a=new K(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Tt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,t){return $m.copy(e).applyQuaternion(this.quaternion),this.position.add($m.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Dl.copy(e):Dl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(no,Dl,this.up):Ji.lookAt(Dl,no,this.up),this.quaternion.setFromRotationMatrix(Ji),a&&(Ji.extractRotation(a.matrixWorld),Xs.setFromRotationMatrix(Ji),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mS),Af.child=e,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,pS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++){const l=t[s];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++){const f=a[l];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(s.geometries=f),d.length>0&&(s.materials=d),h.length>0&&(s.textures=h),m.length>0&&(s.images=m),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Tn.DEFAULT_UP=new K(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new K,Qi=new K,Cf=new K,er=new K,Ys=new K,$s=new K,eg=new K,bf=new K,Rf=new K,Pf=new K;class Oi{constructor(e=new K,t=new K,s=new K){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),wi.subVectors(e,t),a.cross(wi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){wi.subVectors(a,t),Qi.subVectors(s,t),Cf.subVectors(e,t);const c=wi.dot(wi),f=wi.dot(Qi),d=wi.dot(Cf),h=Qi.dot(Qi),m=Qi.dot(Cf),g=c*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(h*d-f*m)*v,M=(c*m-f*d)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,s,a,l,c,f,d){return this.getBarycoord(e,t,s,a,er)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,er.x),d.addScaledVector(c,er.y),d.addScaledVector(f,er.z),d)}static isFrontFacing(e,t,s,a){return wi.subVectors(s,t),Qi.subVectors(e,t),wi.cross(Qi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),wi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let c,f;Ys.subVectors(a,s),$s.subVectors(l,s),bf.subVectors(e,s);const d=Ys.dot(bf),h=$s.dot(bf);if(d<=0&&h<=0)return t.copy(s);Rf.subVectors(e,a);const m=Ys.dot(Rf),g=$s.dot(Rf);if(m>=0&&g<=m)return t.copy(a);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(s).addScaledVector(Ys,c);Pf.subVectors(e,l);const S=Ys.dot(Pf),M=$s.dot(Pf);if(M>=0&&S<=M)return t.copy(l);const E=S*h-d*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(s).addScaledVector($s,f);const y=m*M-S*g;if(y<=0&&g-m>=0&&S-M>=0)return eg.subVectors(l,a),f=(g-m)/(g-m+(S-M)),t.copy(a).addScaledVector(eg,f);const _=1/(y+E+v);return c=E*_,f=v*_,t.copy(s).addScaledVector(Ys,c).addScaledVector($s,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Lf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Bt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Bt.workingColorSpace){if(e=pd(e,1),t=pn(t,0,1),s=pn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=Lf(c,l,e+1/3),this.g=Lf(c,l,e),this.b=Lf(c,l,e-1/3)}return Bt.toWorkingColorSpace(this,a),this}setStyle(e,t=Ti){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ti){const s=T0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=_f(e.r),this.g=_f(e.g),this.b=_f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Bt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(pn(Nn.r*255,0,255))*65536+Math.round(pn(Nn.g*255,0,255))*256+Math.round(pn(Nn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Nn.copy(this),t);const s=Nn.r,a=Nn.g,l=Nn.b,c=Math.max(s,a,l),f=Math.min(s,a,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const g=c-f;switch(h=m<=.5?g/(c+f):g/(2-c-f),c){case s:d=(a-l)/g+(a<l?6:0);break;case a:d=(l-s)/g+2;break;case l:d=(s-a)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Ti){Bt.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,s=Nn.g,a=Nn.b;return e!==Ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Ul);const s=uo(Nr.h,Ul.h,t),a=uo(Nr.s,Ul.s,t),l=uo(Nr.l,Ul.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Pt;Pt.NAMES=T0;let gS=0;class vs extends ga{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=aa,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Zf,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ac,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(s.blending=this.blending),this.side!==ki&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Kf&&(s.blendSrc=this.blendSrc),this.blendDst!==Zf&&(s.blendDst=this.blendDst),this.blendEquation!==cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ac&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _d extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new K,Ol=new $e;class mi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return md("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ci(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=kt(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nd&&(e.usage=this.usage),e}}class A0 extends mi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class C0 extends mi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Jt extends mi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let vS=0;const pi=new Vt,Nf=new Tn,Ks=new K,ii=new gs,io=new gs,Sn=new K;class Bn extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M0(e)?C0:A0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new Tt().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,s){return pi.makeTranslation(e,t,s),this.applyMatrix4(pi),this}scale(e,t,s){return pi.makeScale(e,t,s),this.applyMatrix4(pi),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=[];for(let s=0,a=e.length;s<a;s++){const l=e[s];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Jt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];ii.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];io.setFromBufferAttribute(f),this.morphTargetsRelative?(Sn.addVectors(ii.min,io.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,io.max),ii.expandByPoint(Sn)):(ii.expandByPoint(io.min),ii.expandByPoint(io.max))}ii.getCenter(s);let a=0;for(let l=0,c=e.count;l<c;l++)Sn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Sn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Sn.fromBufferAttribute(f,h),d&&(Ks.fromBufferAttribute(e,h),Sn.add(Ks)),a=Math.max(a,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let F=0;F<s.count;F++)f[F]=new K,d[F]=new K;const h=new K,m=new K,g=new K,v=new $e,S=new $e,M=new $e,E=new K,y=new K;function _(F,P,b){h.fromBufferAttribute(s,F),m.fromBufferAttribute(s,P),g.fromBufferAttribute(s,b),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,b),m.sub(h),g.sub(h),S.sub(v),M.sub(v);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(z),y.copy(g).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(z),f[F].add(E),f[P].add(E),f[b].add(E),d[F].add(y),d[P].add(y),d[b].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let F=0,P=I.length;F<P;++F){const b=I[F],z=b.start,Z=b.count;for(let $=z,te=z+Z;$<te;$+=3)_(e.getX($+0),e.getX($+1),e.getX($+2))}const w=new K,R=new K,H=new K,L=new K;function D(F){H.fromBufferAttribute(a,F),L.copy(H);const P=f[F];w.copy(P),w.sub(H.multiplyScalar(H.dot(P))).normalize(),R.crossVectors(L,P);const z=R.dot(d[F])<0?-1:1;c.setXYZW(F,w.x,w.y,w.z,z)}for(let F=0,P=I.length;F<P;++F){const b=I[F],z=b.start,Z=b.count;for(let $=z,te=z+Z;$<te;$+=3)D(e.getX($+0)),D(e.getX($+1)),D(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const a=new K,l=new K,c=new K,f=new K,d=new K,h=new K,m=new K,g=new K;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),E=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),f.fromBufferAttribute(s,M),d.fromBufferAttribute(s,E),h.fromBufferAttribute(s,y),f.add(m),d.add(m),h.add(m),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)a.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),s.setXYZ(v+0,m.x,m.y,m.z),s.setXYZ(v+1,m.x,m.y,m.z),s.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(d.length*m);let S=0,M=0;for(let E=0,y=d.length;E<y;E++){f.isInterleavedBufferAttribute?S=d[E]*f.data.stride+f.offset:S=d[E]*m;for(let _=0;_<m;_++)v[M++]=h[S++]}return new mi(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,s=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,s);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],S=e(v,s);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const d in s){const h=s[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const S=h[g];m.push(S.toJSON(e.data))}m.length>0&&(a[d]=m,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,S=g.length;v<S;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tg=new Vt,is=new gd,Fl=new va,ng=new K,Zs=new K,Js=new K,Qs=new K,If=new K,zl=new K,kl=new $e,Bl=new $e,Hl=new $e,ig=new K,rg=new K,sg=new K,Vl=new K,Gl=new K;class ai extends Tn{constructor(e=new Bn,t=new _d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){zl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(If.fromBufferAttribute(g,e),c?zl.addScaledVector(If,m):zl.addScaledVector(If.sub(t),m))}t.add(zl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Fl.containsPoint(is.origin)===!1&&(is.intersectSphere(Fl,ng)===null||is.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(l).invert(),is.copy(e.ray).applyMatrix4(tg),!(s.boundingBox!==null&&is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,s){let a;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],_=c[y.materialIndex],I=Math.max(y.start,S.start),w=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,H=w;R<H;R+=3){const L=f.getX(R),D=f.getX(R+1),F=f.getX(R+2);a=Wl(this,_,e,s,h,m,g,L,D,F),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=M,_=E;y<_;y+=3){const I=f.getX(y),w=f.getX(y+1),R=f.getX(y+2);a=Wl(this,c,e,s,h,m,g,I,w,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],_=c[y.materialIndex],I=Math.max(y.start,S.start),w=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=I,H=w;R<H;R+=3){const L=R,D=R+1,F=R+2;a=Wl(this,_,e,s,h,m,g,L,D,F),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=M,_=E;y<_;y+=3){const I=y,w=y+1,R=y+2;a=Wl(this,c,e,s,h,m,g,I,w,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function _S(i,e,t,s,a,l,c,f){let d;if(e.side===$n?d=s.intersectTriangle(c,l,a,!0,f):d=s.intersectTriangle(a,l,c,e.side===ki,f),d===null)return null;Gl.copy(f),Gl.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Gl);return h<t.near||h>t.far?null:{distance:h,point:Gl.clone(),object:i}}function Wl(i,e,t,s,a,l,c,f,d,h){i.getVertexPosition(f,Zs),i.getVertexPosition(d,Js),i.getVertexPosition(h,Qs);const m=_S(i,e,t,s,Zs,Js,Qs,Vl);if(m){a&&(kl.fromBufferAttribute(a,f),Bl.fromBufferAttribute(a,d),Hl.fromBufferAttribute(a,h),m.uv=Oi.getInterpolation(Vl,Zs,Js,Qs,kl,Bl,Hl,new $e)),l&&(kl.fromBufferAttribute(l,f),Bl.fromBufferAttribute(l,d),Hl.fromBufferAttribute(l,h),m.uv1=Oi.getInterpolation(Vl,Zs,Js,Qs,kl,Bl,Hl,new $e)),c&&(ig.fromBufferAttribute(c,f),rg.fromBufferAttribute(c,d),sg.fromBufferAttribute(c,h),m.normal=Oi.getInterpolation(Vl,Zs,Js,Qs,ig,rg,sg,new K),m.normal.dot(s.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new K,materialIndex:0};Oi.getNormal(Zs,Js,Qs,g.normal),m.face=g}return m}class Mo extends Bn{constructor(e=1,t=1,s=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],g=[];let v=0,S=0;M("z","y","x",-1,-1,s,t,e,c,l,0),M("z","y","x",1,-1,s,t,-e,c,l,1),M("x","z","y",1,1,e,s,t,a,c,2),M("x","z","y",1,-1,e,s,-t,a,c,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(d),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(m,3)),this.setAttribute("uv",new Jt(g,2));function M(E,y,_,I,w,R,H,L,D,F,P){const b=R/D,z=H/F,Z=R/2,$=H/2,te=L/2,de=D+1,j=F+1;let re=0,V=0;const le=new K;for(let oe=0;oe<j;oe++){const O=oe*z-$;for(let q=0;q<de;q++){const ke=q*b-Z;le[E]=ke*I,le[y]=O*w,le[_]=te,h.push(le.x,le.y,le.z),le[E]=0,le[y]=0,le[_]=L>0?1:-1,m.push(le.x,le.y,le.z),g.push(q/D),g.push(1-oe/F),re+=1}}for(let oe=0;oe<F;oe++)for(let O=0;O<D;O++){const q=v+O+de*oe,ke=v+O+de*(oe+1),Q=v+(O+1)+de*(oe+1),ie=v+(O+1)+de*oe;d.push(q,ke,ie),d.push(ke,Q,ie),V+=6}f.addGroup(S,V,P),S+=V,v+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(i){const e={};for(const t in i){e[t]={};for(const s in i[t]){const a=i[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function kn(i){const e={};for(let t=0;t<i.length;t++){const s=ma(i[t]);for(const a in s)e[a]=s[a]}return e}function xS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function b0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const yS={clone:ma,merge:kn};var SS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SS,this.fragmentShader=MS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=xS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class R0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new K,ag=new $e,og=new $e;class Ai extends R0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,ag,og),t.subVectors(og,ag)}setViewOffset(e,t,s,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*a/d,t-=c.offsetY*s/h,a*=c.width/d,s*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class ES extends Tn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ai(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Ai(ea,ta,e,t);l.layers=this.layers,this.add(l);const c=new Ai(ea,ta,e,t);c.layers=this.layers,this.add(c);const f=new Ai(ea,ta,e,t);f.layers=this.layers,this.add(f);const d=new Ai(ea,ta,e,t);d.layers=this.layers,this.add(d);const h=new Ai(ea,ta,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===or)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,c),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,d),e.setRenderTarget(s,4,a),e.render(t,h),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,a),e.render(t,m),e.setRenderTarget(g,v,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class P0 extends In{constructor(e,t,s,a,l,c,f,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:ua,super(e,t,s,a,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wS extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new P0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:si}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Mo(5,5,5),l=new lr({name:"CubemapFromEquirect",uniforms:ma(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Or});l.uniforms.tEquirect.value=t;const c=new ai(a,l),f=t.minFilter;return t.minFilter===hs&&(t.minFilter=si),new ES(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,a);e.setRenderTarget(l)}}const Df=new K,TS=new K,AS=new Tt;class os{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Df.subVectors(s,t).cross(TS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Df),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||AS.getNormalMatrix(e),a=this.coplanarPoint(Df).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new va,jl=new K;class xd{constructor(e=new os,t=new os,s=new os,a=new os,l=new os,c=new os){this.planes=[e,t,s,a,l,c]}set(e,t,s,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=or){const s=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],d=a[3],h=a[4],m=a[5],g=a[6],v=a[7],S=a[8],M=a[9],E=a[10],y=a[11],_=a[12],I=a[13],w=a[14],R=a[15];if(s[0].setComponents(d-l,v-h,y-S,R-_).normalize(),s[1].setComponents(d+l,v+h,y+S,R+_).normalize(),s[2].setComponents(d+c,v+m,y+M,R+I).normalize(),s[3].setComponents(d-c,v-m,y-M,R-I).normalize(),s[4].setComponents(d-f,v-g,y-E,R-w).normalize(),t===or)s[5].setComponents(d+f,v+g,y+E,R+w).normalize();else if(t===fc)s[5].setComponents(f,g,E,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(jl.x=a.normal.x>0?e.max.x:e.min.x,jl.y=a.normal.y>0?e.max.y:e.min.y,jl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function L0(){let i=null,e=!1,t=null,s=null;function a(l,c){t(l,c),s=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function CS(i){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,h,m),f.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,d,h){const m=d.array,g=d._updateRange,v=d.updateRanges;if(i.bindBuffer(h,f),g.count===-1&&v.length===0&&i.bufferSubData(h,0,m),v.length!==0){for(let S=0,M=v.length;S<M;S++){const E=v[S];i.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}g.count!==-1&&(i.bufferSubData(h,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count),g.count=-1),d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(i.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,f,d),h.version=f.version}}return{get:a,remove:l,update:c}}class Sc extends Bn{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(s),d=Math.floor(a),h=f+1,m=d+1,g=e/f,v=t/d,S=[],M=[],E=[],y=[];for(let _=0;_<m;_++){const I=_*v-c;for(let w=0;w<h;w++){const R=w*g-l;M.push(R,-I,0),E.push(0,0,1),y.push(w/f),y.push(1-_/d)}}for(let _=0;_<d;_++)for(let I=0;I<f;I++){const w=I+h*_,R=I+h*(_+1),H=I+1+h*(_+1),L=I+1+h*_;S.push(w,R,L),S.push(R,H,L)}this.setIndex(S),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var bS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RS=`#ifdef USE_ALPHAHASH
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
#endif`,PS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
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
#endif`,US=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OS=`#ifdef USE_BATCHING
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
#endif`,FS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HS=`#ifdef USE_IRIDESCENCE
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
#endif`,VS=`#ifdef USE_BUMPMAP
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZS=`#define PI 3.141592653589793
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
} // validated`,JS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,QS=`vec3 transformedNormal = objectNormal;
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
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`
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
}`,aM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lM=`#ifdef USE_ENVMAP
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
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
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
}`,gM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xM=`uniform bool receiveShadow;
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
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TM=`PhysicalMaterial material;
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
#endif`,AM=`struct PhysicalMaterial {
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
}`,CM=`
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
#endif`,bM=`#if defined( RE_IndirectDiffuse )
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
#endif`,RM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FM=`#if defined( USE_POINTS_UV )
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
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
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
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
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
#endif`,ZM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b1=`uniform sampler2D t2D;
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
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`#include <common>
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
}`,U1=`#define DISTANCE
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
}`,O1=`#define DISTANCE
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`uniform float scale;
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
}`,B1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,V1=`uniform vec3 diffuse;
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
}`,G1=`#define LAMBERT
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
}`,W1=`#define LAMBERT
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
}`,j1=`#define MATCAP
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
}`,X1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,Y1=`#define NORMAL
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
}`,$1=`#define PHONG
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
}`,K1=`#define PHONG
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
}`,Z1=`#define STANDARD
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
}`,J1=`#define STANDARD
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
}`,Q1=`#define TOON
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
}`,eE=`#define TOON
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
}`,tE=`uniform float size;
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
}`,nE=`uniform vec3 diffuse;
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
}`,iE=`#include <common>
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
}`,rE=`uniform vec3 color;
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
}`,sE=`uniform float rotation;
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
}`,aE=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:bS,alphahash_pars_fragment:RS,alphamap_fragment:PS,alphamap_pars_fragment:LS,alphatest_fragment:NS,alphatest_pars_fragment:IS,aomap_fragment:DS,aomap_pars_fragment:US,batching_pars_vertex:OS,batching_vertex:FS,begin_vertex:zS,beginnormal_vertex:kS,bsdfs:BS,iridescence_fragment:HS,bumpmap_pars_fragment:VS,clipping_planes_fragment:GS,clipping_planes_pars_fragment:WS,clipping_planes_pars_vertex:jS,clipping_planes_vertex:XS,color_fragment:qS,color_pars_fragment:YS,color_pars_vertex:$S,color_vertex:KS,common:ZS,cube_uv_reflection_fragment:JS,defaultnormal_vertex:QS,displacementmap_pars_vertex:eM,displacementmap_vertex:tM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:rM,colorspace_pars_fragment:sM,envmap_fragment:aM,envmap_common_pars_fragment:oM,envmap_pars_fragment:lM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:yM,envmap_vertex:uM,fog_vertex:fM,fog_pars_vertex:dM,fog_fragment:hM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_pars_fragment:gM,lights_lambert_fragment:vM,lights_lambert_pars_fragment:_M,lights_pars_begin:xM,lights_toon_fragment:SM,lights_toon_pars_fragment:MM,lights_phong_fragment:EM,lights_phong_pars_fragment:wM,lights_physical_fragment:TM,lights_physical_pars_fragment:AM,lights_fragment_begin:CM,lights_fragment_maps:bM,lights_fragment_end:RM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:LM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:IM,map_fragment:DM,map_pars_fragment:UM,map_particle_fragment:OM,map_particle_pars_fragment:FM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:kM,morphinstance_vertex:BM,morphcolor_vertex:HM,morphnormal_vertex:VM,morphtarget_pars_vertex:GM,morphtarget_vertex:WM,normal_fragment_begin:jM,normal_fragment_maps:XM,normal_pars_fragment:qM,normal_pars_vertex:YM,normal_vertex:$M,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:ZM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:r1,dithering_fragment:s1,dithering_pars_fragment:a1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:u1,shadowmap_vertex:f1,shadowmask_pars_fragment:d1,skinbase_vertex:h1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:v1,specularmap_pars_fragment:_1,tonemapping_fragment:x1,tonemapping_pars_fragment:y1,transmission_fragment:S1,transmission_pars_fragment:M1,uv_pars_fragment:E1,uv_pars_vertex:w1,uv_vertex:T1,worldpos_vertex:A1,background_vert:C1,background_frag:b1,backgroundCube_vert:R1,backgroundCube_frag:P1,cube_vert:L1,cube_frag:N1,depth_vert:I1,depth_frag:D1,distanceRGBA_vert:U1,distanceRGBA_frag:O1,equirect_vert:F1,equirect_frag:z1,linedashed_vert:k1,linedashed_frag:B1,meshbasic_vert:H1,meshbasic_frag:V1,meshlambert_vert:G1,meshlambert_frag:W1,meshmatcap_vert:j1,meshmatcap_frag:X1,meshnormal_vert:q1,meshnormal_frag:Y1,meshphong_vert:$1,meshphong_frag:K1,meshphysical_vert:Z1,meshphysical_frag:J1,meshtoon_vert:Q1,meshtoon_frag:eE,points_vert:tE,points_frag:nE,shadow_vert:iE,shadow_frag:rE,sprite_vert:sE,sprite_frag:aE},Ke={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ui={basic:{uniforms:kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:kn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:kn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Pt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:kn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:kn([Ke.points,Ke.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:kn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:kn([Ke.common,Ke.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:kn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:kn([Ke.sprite,Ke.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:kn([Ke.common,Ke.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:kn([Ke.lights,Ke.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ui.physical={uniforms:kn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Xl={r:0,b:0,g:0},ss=new bi,oE=new Vt;function lE(i,e,t,s,a,l,c){const f=new Pt(0);let d=l===!0?0:1,h,m,g=null,v=0,S=null;function M(I){let w=I.isScene===!0?I.background:null;return w&&w.isTexture&&(w=(I.backgroundBlurriness>0?t:e).get(w)),w}function E(I){let w=!1;const R=M(I);R===null?_(f,d):R&&R.isColor&&(_(R,1),w=!0);const H=i.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,c),(i.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(I,w){const R=M(w);R&&(R.isCubeTexture||R.mapping===_c)?(m===void 0&&(m=new ai(new Mo(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:ma(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(H,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ss.copy(w.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.material.uniforms.envMap.value=R,m.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(ss)),m.material.toneMapped=Bt.getTransfer(R.colorSpace)!==qt,(g!==R||v!==R.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,g=R,v=R.version,S=i.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new ai(new Sc(2,2),new lr({name:"BackgroundMaterial",uniforms:ma(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Bt.getTransfer(R.colorSpace)!==qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||v!==R.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,g=R,v=R.version,S=i.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function _(I,w){I.getRGB(Xl,b0(i)),s.buffers.color.setClear(Xl.r,Xl.g,Xl.b,w,c)}return{getClearColor:function(){return f},setClearColor:function(I,w=1){f.set(I),d=w,_(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,_(f,d)},render:E,addToRenderList:y}}function cE(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},a=v(null);let l=a,c=!1;function f(b,z,Z,$,te){let de=!1;const j=g($,Z,z);l!==j&&(l=j,h(l.object)),de=S(b,$,Z,te),de&&M(b,$,Z,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,R(b,z,Z,$),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function d(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function m(b){return i.deleteVertexArray(b)}function g(b,z,Z){const $=Z.wireframe===!0;let te=s[b.id];te===void 0&&(te={},s[b.id]=te);let de=te[z.id];de===void 0&&(de={},te[z.id]=de);let j=de[$];return j===void 0&&(j=v(d()),de[$]=j),j}function v(b){const z=[],Z=[],$=[];for(let te=0;te<t;te++)z[te]=0,Z[te]=0,$[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:$,object:b,attributes:{},index:null}}function S(b,z,Z,$){const te=l.attributes,de=z.attributes;let j=0;const re=Z.getAttributes();for(const V in re)if(re[V].location>=0){const oe=te[V];let O=de[V];if(O===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(O=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(O=b.instanceColor)),oe===void 0||oe.attribute!==O||O&&oe.data!==O.data)return!0;j++}return l.attributesNum!==j||l.index!==$}function M(b,z,Z,$){const te={},de=z.attributes;let j=0;const re=Z.getAttributes();for(const V in re)if(re[V].location>=0){let oe=de[V];oe===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));const O={};O.attribute=oe,oe&&oe.data&&(O.data=oe.data),te[V]=O,j++}l.attributes=te,l.attributesNum=j,l.index=$}function E(){const b=l.newAttributes;for(let z=0,Z=b.length;z<Z;z++)b[z]=0}function y(b){_(b,0)}function _(b,z){const Z=l.newAttributes,$=l.enabledAttributes,te=l.attributeDivisors;Z[b]=1,$[b]===0&&(i.enableVertexAttribArray(b),$[b]=1),te[b]!==z&&(i.vertexAttribDivisor(b,z),te[b]=z)}function I(){const b=l.newAttributes,z=l.enabledAttributes;for(let Z=0,$=z.length;Z<$;Z++)z[Z]!==b[Z]&&(i.disableVertexAttribArray(Z),z[Z]=0)}function w(b,z,Z,$,te,de,j){j===!0?i.vertexAttribIPointer(b,z,Z,te,de):i.vertexAttribPointer(b,z,Z,$,te,de)}function R(b,z,Z,$){E();const te=$.attributes,de=Z.getAttributes(),j=z.defaultAttributeValues;for(const re in de){const V=de[re];if(V.location>=0){let le=te[re];if(le===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const oe=le.normalized,O=le.itemSize,q=e.get(le);if(q===void 0)continue;const ke=q.buffer,Q=q.type,ie=q.bytesPerElement,fe=Q===i.INT||Q===i.UNSIGNED_INT||le.gpuType===p0;if(le.isInterleavedBufferAttribute){const xe=le.data,Le=xe.stride,He=le.offset;if(xe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<V.locationSize;Oe++)_(V.location+Oe,xe.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Oe=0;Oe<V.locationSize;Oe++)y(V.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let Oe=0;Oe<V.locationSize;Oe++)w(V.location+Oe,O/V.locationSize,Q,oe,Le*ie,(He+O/V.locationSize*Oe)*ie,fe)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)_(V.location+xe,le.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<V.locationSize;xe++)y(V.location+xe);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let xe=0;xe<V.locationSize;xe++)w(V.location+xe,O/V.locationSize,Q,oe,O*ie,O/V.locationSize*xe*ie,fe)}}else if(j!==void 0){const oe=j[re];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(V.location,oe);break;case 3:i.vertexAttrib3fv(V.location,oe);break;case 4:i.vertexAttrib4fv(V.location,oe);break;default:i.vertexAttrib1fv(V.location,oe)}}}}I()}function H(){F();for(const b in s){const z=s[b];for(const Z in z){const $=z[Z];for(const te in $)m($[te].object),delete $[te];delete z[Z]}delete s[b]}}function L(b){if(s[b.id]===void 0)return;const z=s[b.id];for(const Z in z){const $=z[Z];for(const te in $)m($[te].object),delete $[te];delete z[Z]}delete s[b.id]}function D(b){for(const z in s){const Z=s[z];if(Z[b.id]===void 0)continue;const $=Z[b.id];for(const te in $)m($[te].object),delete $[te];delete Z[b.id]}}function F(){P(),c=!0,l!==a&&(l=a,h(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:F,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:y,disableUnusedAttributes:I}}function uE(i,e,t){let s;function a(h){s=h}function l(h,m){i.drawArrays(s,h,m),t.update(m,s,1)}function c(h,m,g){g!==0&&(i.drawArraysInstanced(s,h,m,g),t.update(m,s,g))}function f(h,m,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<g;S++)this.render(h[S],m[S]);else{v.multiDrawArraysWEBGL(s,h,0,m,0,g);let S=0;for(let M=0;M<g;M++)S+=m[M];t.update(S,s,1)}}function d(h,m,g,v){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)c(h[M],m[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(s,h,0,m,0,v,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E];for(let E=0;E<v.length;E++)t.update(M,s,v[E])}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function fE(i,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(L){return!(L!==Fi&&s.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const D=L===xc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==zr&&s.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ar&&!D)}function d(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=S>0,H=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:_,maxVaryings:I,maxFragmentUniforms:w,vertexTextures:R,maxSamples:H}}function dE(i){const e=this;let t=null,s=0,a=!1,l=!1;const c=new os,f=new Tt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||a;return a=v,s=g.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,S){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,_=i.get(g);if(!a||M===null||M.length===0||l&&!y)l?m(null):h();else{const I=l?0:s,w=I*4;let R=_.clippingState||null;d.value=R,R=m(M,v,w,S);for(let H=0;H!==w;++H)R[H]=t[H];_.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=I}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function m(g,v,S,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=d.value,M!==!0||y===null){const _=S+E*4,I=v.matrixWorldInverse;f.getNormalMatrix(I),(y===null||y.length<_)&&(y=new Float32Array(_));for(let w=0,R=S;w!==E;++w,R+=4)c.copy(g[w]).applyMatrix4(I,f),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function hE(i){let e=new WeakMap;function t(c,f){return f===Jf?c.mapping=ua:f===Qf&&(c.mapping=fa),c}function s(c){if(c&&c.isTexture){const f=c.mapping;if(f===Jf||f===Qf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const h=new wS(d.height);return h.fromEquirectangularTexture(i,c),e.set(c,h),c.addEventListener("dispose",a),t(h.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class N0 extends R0{constructor(e=-1,t=1,s=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,c=s+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=4,lg=[.125,.215,.35,.446,.526,.582],us=20,Uf=new N0,cg=new Pt;let Of=null,Ff=0,zf=0,kf=!1;const ls=(1+Math.sqrt(5))/2,na=1/ls,ug=[new K(-ls,na,0),new K(ls,na,0),new K(-na,0,ls),new K(na,0,ls),new K(0,ls,-na),new K(0,ls,na),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class fg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){Of=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Of,Ff,zf),this._renderer.xr.enabled=kf,e.scissorTest=!1,ql(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Of=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:si,minFilter:si,generateMipmaps:!1,type:xc,format:Fi,colorSpace:kr,depthBuffer:!1},a=dg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pE(l)),this._blurMaterial=mE(l,e,t)}return a}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Uf)}_sceneToCubeUV(e,t,s,a){const f=new Ai(90,1,t,s),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(cg),m.toneMapping=Fr,m.autoClear=!1;const S=new _d({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),M=new ai(new Mo,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(cg),E=!0);for(let _=0;_<6;_++){const I=_%3;I===0?(f.up.set(0,d[_],0),f.lookAt(h[_],0,0)):I===1?(f.up.set(0,0,d[_]),f.lookAt(0,h[_],0)):(f.up.set(0,d[_],0),f.lookAt(0,0,h[_]));const w=this._cubeSize;ql(a,I*w,_>2?w:0,w,w),m.setRenderTarget(a),E&&m.render(M,f),m.render(e,f)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=y}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ua||e.mapping===fa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new ai(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;ql(t,0,0,3*d,2*d),s.setRenderTarget(t),s.render(c,Uf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ug[(a-l-1)%ug.length];this._blur(e,l-1,l,c,f)}t.autoClear=s}_blur(e,t,s,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,a,"latitudinal",l),this._halfBlur(c,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new ai(this._lodPlanes[a],h),v=h.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*us-1),E=l/M,y=isFinite(l)?1+Math.floor(m*E):us;y>us&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${us}`);const _=[];let I=0;for(let D=0;D<us;++D){const F=D/E,P=Math.exp(-F*F/2);_.push(P),D===0?I+=P:D<y&&(I+=2*P)}for(let D=0;D<_.length;D++)_[D]=_[D]/I;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-s;const R=this._sizeLods[a],H=3*R*(a>w-ra?a-w+ra:0),L=4*(this._cubeSize-R);ql(t,H,L,3*R,2*R),d.setRenderTarget(t),d.render(g,Uf)}}function pE(i){const e=[],t=[],s=[];let a=i;const l=i-ra+1+lg.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);t.push(f);let d=1/f;c>i-ra?d=lg[c-i+ra-1]:c===0&&(d=0),s.push(d);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],S=6,M=6,E=3,y=2,_=1,I=new Float32Array(E*M*S),w=new Float32Array(y*M*S),R=new Float32Array(_*M*S);for(let L=0;L<S;L++){const D=L%3*2/3-1,F=L>2?0:-1,P=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];I.set(P,E*M*L),w.set(v,y*M*L);const b=[L,L,L,L,L,L];R.set(b,_*M*L)}const H=new Bn;H.setAttribute("position",new mi(I,E)),H.setAttribute("uv",new mi(w,y)),H.setAttribute("faceIndex",new mi(R,_)),e.push(H),a>ra&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function dg(i,e,t){const s=new ps(i,e,t);return s.texture.mapping=_c,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ql(i,e,t,s,a){i.viewport.set(e,t,s,a),i.scissor.set(e,t,s,a)}function mE(i,e,t){const s=new Float32Array(us),a=new K(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yd(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function hg(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yd(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function pg(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function yd(){return`

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
	`}function gE(i){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const d=f.mapping,h=d===Jf||d===Qf,m=d===ua||d===fa;if(h||m){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new fg(i)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return h&&S&&S.height>0||m&&S&&a(S)?(t===null&&(t=new fg(i)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:c}}function vE(i){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&md("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function _E(i,e,t,s){const a={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);for(const M in v.morphAttributes){const E=v.morphAttributes[M];for(let y=0,_=E.length;y<_;y++)e.remove(E[y])}v.removeEventListener("dispose",c),delete a[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(g,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const M in v)e.update(v[M],i.ARRAY_BUFFER);const S=g.morphAttributes;for(const M in S){const E=S[M];for(let y=0,_=E.length;y<_;y++)e.update(E[y],i.ARRAY_BUFFER)}}function h(g){const v=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const I=S.array;E=S.version;for(let w=0,R=I.length;w<R;w+=3){const H=I[w+0],L=I[w+1],D=I[w+2];v.push(H,L,L,D,D,H)}}else if(M!==void 0){const I=M.array;E=M.version;for(let w=0,R=I.length/3-1;w<R;w+=3){const H=w+0,L=w+1,D=w+2;v.push(H,L,L,D,D,H)}}else return;const y=new(M0(v)?C0:A0)(v,1);y.version=E;const _=l.get(g);_&&e.remove(_),l.set(g,y)}function m(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function xE(i,e,t){let s;function a(v){s=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function d(v,S){i.drawElements(s,S,l,v*c),t.update(S,s,1)}function h(v,S,M){M!==0&&(i.drawElementsInstanced(s,S,l,v*c,M),t.update(S,s,M))}function m(v,S,M){if(M===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<M;y++)this.render(v[y]/c,S[y]);else{E.multiDrawElementsWEBGL(s,S,0,l,v,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];t.update(y,s,1)}}function g(v,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)h(v[_]/c,S[_],E[_]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,l,v,0,E,0,M);let _=0;for(let I=0;I<M;I++)_+=S[I];for(let I=0;I<E.length;I++)t.update(_,s,E[I])}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function yE(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(l/3);break;case i.LINES:t.lines+=f*(l/2);break;case i.LINE_STRIP:t.lines+=f*(l-1);break;case i.LINE_LOOP:t.lines+=f*l;break;case i.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function SE(i,e,t){const s=new WeakMap,a=new Mn;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=s.get(f);if(v===void 0||v.count!==g){let P=function(){D.dispose(),s.delete(f),f.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();const S=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],_=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let w=0;S===!0&&(w=1),M===!0&&(w=2),E===!0&&(w=3);let R=f.attributes.position.count*w,H=1;R>e.maxTextureSize&&(H=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*H*4*g),D=new w0(L,R,H,g);D.type=ar,D.needsUpdate=!0;const F=w*4;for(let b=0;b<g;b++){const z=y[b],Z=_[b],$=I[b],te=R*H*4*b;for(let de=0;de<z.count;de++){const j=de*F;S===!0&&(a.fromBufferAttribute(z,de),L[te+j+0]=a.x,L[te+j+1]=a.y,L[te+j+2]=a.z,L[te+j+3]=0),M===!0&&(a.fromBufferAttribute(Z,de),L[te+j+4]=a.x,L[te+j+5]=a.y,L[te+j+6]=a.z,L[te+j+7]=0),E===!0&&(a.fromBufferAttribute($,de),L[te+j+8]=a.x,L[te+j+9]=a.y,L[te+j+10]=a.z,L[te+j+11]=$.itemSize===4?a.w:1)}}v={count:g,texture:D,size:new $e(R,H)},s.set(f,v),f.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let S=0;for(let E=0;E<h.length;E++)S+=h[E];const M=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function ME(i,e,t,s){let a=new WeakMap;function l(d){const h=s.render.frame,m=d.geometry,g=e.get(d,m);if(a.get(g)!==h&&(e.update(g),a.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),a.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),a.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==h&&(v.update(),a.set(v,h))}return g}function c(){a=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:c}}class I0 extends In{constructor(e,t,s,a,l,c,f,d,h,m=oa){if(m!==oa&&m!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&m===oa&&(s=da),s===void 0&&m===pa&&(s=ha),super(null,a,l,c,f,d,m,s,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:Yn,this.minFilter=d!==void 0?d:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const D0=new In,U0=new I0(1,1);U0.compareFunction=S0;const O0=new w0,F0=new lS,z0=new P0,mg=[],gg=[],vg=new Float32Array(16),_g=new Float32Array(9),xg=new Float32Array(4);function _a(i,e,t){const s=i[0];if(s<=0||s>0)return i;const a=e*t;let l=mg[a];if(l===void 0&&(l=new Float32Array(a),mg[a]=l),e!==0){s.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(l,f)}return l}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,s=i.length;t<s;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,s=e.length;t<s;t++)i[t]=e[t]}function Mc(i,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let s=0;s!==e;++s)t[s]=i.allocateTextureUnit();return t}function EE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function TE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function AE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function CE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,s))return;xg.set(s),i.uniformMatrix2fv(this.addr,!1,xg),gn(t,s)}}function bE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,s))return;_g.set(s),i.uniformMatrix3fv(this.addr,!1,_g),gn(t,s)}}function RE(i,e){const t=this.cache,s=e.elements;if(s===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,s))return;vg.set(s),i.uniformMatrix4fv(this.addr,!1,vg),gn(t,s)}}function PE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function LE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function NE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function IE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function DE(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function UE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function OE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function FE(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function zE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a);const l=this.type===i.SAMPLER_2D_SHADOW?U0:D0;t.setTexture2D(e||l,a)}function kE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||F0,a)}function BE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||z0,a)}function HE(i,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(i.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||O0,a)}function VE(i){switch(i){case 5126:return EE;case 35664:return wE;case 35665:return TE;case 35666:return AE;case 35674:return CE;case 35675:return bE;case 35676:return RE;case 5124:case 35670:return PE;case 35667:case 35671:return LE;case 35668:case 35672:return NE;case 35669:case 35673:return IE;case 5125:return DE;case 36294:return UE;case 36295:return OE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return HE}}function GE(i,e){i.uniform1fv(this.addr,e)}function WE(i,e){const t=_a(e,this.size,2);i.uniform2fv(this.addr,t)}function jE(i,e){const t=_a(e,this.size,3);i.uniform3fv(this.addr,t)}function XE(i,e){const t=_a(e,this.size,4);i.uniform4fv(this.addr,t)}function qE(i,e){const t=_a(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function YE(i,e){const t=_a(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $E(i,e){const t=_a(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function KE(i,e){i.uniform1iv(this.addr,e)}function ZE(i,e){i.uniform2iv(this.addr,e)}function JE(i,e){i.uniform3iv(this.addr,e)}function QE(i,e){i.uniform4iv(this.addr,e)}function ew(i,e){i.uniform1uiv(this.addr,e)}function tw(i,e){i.uniform2uiv(this.addr,e)}function nw(i,e){i.uniform3uiv(this.addr,e)}function iw(i,e){i.uniform4uiv(this.addr,e)}function rw(i,e,t){const s=this.cache,a=e.length,l=Mc(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTexture2D(e[c]||D0,l[c])}function sw(i,e,t){const s=this.cache,a=e.length,l=Mc(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||F0,l[c])}function aw(i,e,t){const s=this.cache,a=e.length,l=Mc(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||z0,l[c])}function ow(i,e,t){const s=this.cache,a=e.length,l=Mc(t,a);mn(s,l)||(i.uniform1iv(this.addr,l),gn(s,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||O0,l[c])}function lw(i){switch(i){case 5126:return GE;case 35664:return WE;case 35665:return jE;case 35666:return XE;case 35674:return qE;case 35675:return YE;case 35676:return $E;case 5124:case 35670:return KE;case 35667:case 35671:return ZE;case 35668:case 35672:return JE;case 35669:case 35673:return QE;case 5125:return ew;case 36294:return tw;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return ow}}class cw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=VE(t.type)}}class uw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lw(t.type)}}class fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function yg(i,e){i.seq.push(e),i.map[e.id]=e}function dw(i,e,t){const s=i.name,a=s.length;for(Bf.lastIndex=0;;){const l=Bf.exec(s),c=Bf.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===a){yg(t,h===void 0?new cw(f,i,e):new uw(f,i,e));break}else{let g=t.map[f];g===void 0&&(g=new fw(f),yg(t,g)),t=g}}}class rc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);dw(l,c,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=s[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&s.push(c)}return s}}function Sg(i,e,t){const s=i.createShader(e);return i.shaderSource(s,t),i.compileShader(s),s}const hw=37297;let pw=0;function mw(i,e){const t=i.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;s.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return s.join(`
`)}function gw(i){const e=Bt.getPrimaries(Bt.workingColorSpace),t=Bt.getPrimaries(i);let s;switch(e===t?s="":e===uc&&t===cc?s="LinearDisplayP3ToLinearSRGB":e===cc&&t===uc&&(s="LinearSRGBToLinearDisplayP3"),i){case kr:case yc:return[s,"LinearTransferOETF"];case Ti:case hd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[s,"LinearTransferOETF"]}}function Mg(i,e,t){const s=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+mw(i.getShaderSource(e),c)}else return a}function vw(i,e){const t=gw(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _w(i,e){let t;switch(e){case dy:t="Linear";break;case hy:t="Reinhard";break;case py:t="OptimizedCineon";break;case my:t="ACESFilmic";break;case vy:t="AgX";break;case _y:t="Neutral";break;case gy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function yw(i){const e=[];for(const t in i){const s=i[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Sw(i,e){const t={},s=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=i.getActiveAttrib(e,a),c=l.name;let f=1;l.type===i.FLOAT_MAT2&&(f=2),l.type===i.FLOAT_MAT3&&(f=3),l.type===i.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function oo(i){return i!==""}function Eg(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(i){return i.replace(Mw,ww)}const Ew=new Map;function ww(i,e){let t=wt[e];if(t===void 0){const s=Ew.get(e);if(s!==void 0)t=wt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return id(t)}const Tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(i){return i.replace(Tw,Aw)}function Aw(i,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Ag(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Cw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===zx?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function bw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ua:case fa:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function Pw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case uy:e="ENVMAP_BLENDING_MIX";break;case fy:e="ENVMAP_BLENDING_ADD";break}return e}function Lw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function Nw(i,e,t,s){const a=i.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=Cw(t),h=bw(t),m=Rw(t),g=Pw(t),v=Lw(t),S=xw(t),M=yw(l),E=a.createProgram();let y,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(oo).join(`
`),_.length>0&&(_+=`
`)):(y=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),_=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?wt.tonemapping_pars_fragment:"",t.toneMapping!==Fr?_w("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,vw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),c=id(c),c=Eg(c,t),c=wg(c,t),f=id(f),f=Eg(f,t),f=wg(f,t),c=Tg(c),f=Tg(f),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=I+y+c,R=I+_+f,H=Sg(a,a.VERTEX_SHADER,w),L=Sg(a,a.FRAGMENT_SHADER,R);a.attachShader(E,H),a.attachShader(E,L),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function D(z){if(i.debug.checkShaderErrors){const Z=a.getProgramInfoLog(E).trim(),$=a.getShaderInfoLog(H).trim(),te=a.getShaderInfoLog(L).trim();let de=!0,j=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(de=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,E,H,L);else{const re=Mg(a,H,"vertex"),V=Mg(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Z+`
`+re+`
`+V)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||te==="")&&(j=!1);j&&(z.diagnostics={runnable:de,programLog:Z,vertexShader:{log:$,prefix:y},fragmentShader:{log:te,prefix:_}})}a.deleteShader(H),a.deleteShader(L),F=new rc(a,E),P=Sw(a,E)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(E,hw)),b},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=L,this}let Iw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new Uw(e),t.set(e,s)),s}}class Uw{constructor(e){this.id=Iw++,this.code=e,this.usedTimes=0}}function Ow(i,e,t,s,a,l,c){const f=new vd,d=new Dw,h=new Set,m=[],g=a.logarithmicDepthBuffer,v=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function y(P,b,z,Z,$){const te=Z.fog,de=$.geometry,j=P.isMeshStandardMaterial?Z.environment:null,re=(P.isMeshStandardMaterial?t:e).get(P.envMap||j),V=re&&re.mapping===_c?re.image.height:null,le=M[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,O=oe!==void 0?oe.length:0;let q=0;de.morphAttributes.position!==void 0&&(q=1),de.morphAttributes.normal!==void 0&&(q=2),de.morphAttributes.color!==void 0&&(q=3);let ke,Q,ie,fe;if(le){const gt=Ui[le];ke=gt.vertexShader,Q=gt.fragmentShader}else ke=P.vertexShader,Q=P.fragmentShader,d.update(P),ie=d.getVertexShaderID(P),fe=d.getFragmentShaderID(P);const xe=i.getRenderTarget(),Le=$.isInstancedMesh===!0,He=$.isBatchedMesh===!0,Oe=!!P.map,G=!!P.matcap,ye=!!re,Ee=!!P.aoMap,we=!!P.lightMap,Me=!!P.bumpMap,Te=!!P.normalMap,Pe=!!P.displacementMap,Ce=!!P.emissiveMap,Xe=!!P.metalnessMap,U=!!P.roughnessMap,A=P.anisotropy>0,ne=P.clearcoat>0,Se=P.dispersion>0,me=P.iridescence>0,ve=P.sheen>0,qe=P.transmission>0,Ie=A&&!!P.anisotropyMap,Ne=ne&&!!P.clearcoatMap,et=ne&&!!P.clearcoatNormalMap,Ae=ne&&!!P.clearcoatRoughnessMap,je=me&&!!P.iridescenceMap,T=me&&!!P.iridescenceThicknessMap,Ze=ve&&!!P.sheenColorMap,ze=ve&&!!P.sheenRoughnessMap,ft=!!P.specularMap,ut=!!P.specularColorMap,dt=!!P.specularIntensityMap,W=qe&&!!P.transmissionMap,Ve=qe&&!!P.thicknessMap,ge=!!P.gradientMap,pe=!!P.alphaMap,Ue=P.alphaTest>0,rt=!!P.alphaHash,vt=!!P.extensions;let At=Fr;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(At=i.toneMapping);const Et={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:ke,fragmentShader:Q,defines:P.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:He,batchingColor:He&&$._colorsTexture!==null,instancing:Le,instancingColor:Le&&$.instanceColor!==null,instancingMorph:Le&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:kr,alphaToCoverage:!!P.alphaToCoverage,map:Oe,matcap:G,envMap:ye,envMapMode:ye&&re.mapping,envMapCubeUVHeight:V,aoMap:Ee,lightMap:we,bumpMap:Me,normalMap:Te,displacementMap:v&&Pe,emissiveMap:Ce,normalMapObjectSpace:Te&&P.normalMapType===Ly,normalMapTangentSpace:Te&&P.normalMapType===dd,metalnessMap:Xe,roughnessMap:U,anisotropy:A,anisotropyMap:Ie,clearcoat:ne,clearcoatMap:Ne,clearcoatNormalMap:et,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:me,iridescenceMap:je,iridescenceThicknessMap:T,sheen:ve,sheenColorMap:Ze,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:ut,specularIntensityMap:dt,transmission:qe,transmissionMap:W,thicknessMap:Ve,gradientMap:ge,opaque:P.transparent===!1&&P.blending===aa&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ue,alphaHash:rt,combine:P.combine,mapUv:Oe&&E(P.map.channel),aoMapUv:Ee&&E(P.aoMap.channel),lightMapUv:we&&E(P.lightMap.channel),bumpMapUv:Me&&E(P.bumpMap.channel),normalMapUv:Te&&E(P.normalMap.channel),displacementMapUv:Pe&&E(P.displacementMap.channel),emissiveMapUv:Ce&&E(P.emissiveMap.channel),metalnessMapUv:Xe&&E(P.metalnessMap.channel),roughnessMapUv:U&&E(P.roughnessMap.channel),anisotropyMapUv:Ie&&E(P.anisotropyMap.channel),clearcoatMapUv:Ne&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:et&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:T&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ze&&E(P.sheenRoughnessMap.channel),specularMapUv:ft&&E(P.specularMap.channel),specularColorMapUv:ut&&E(P.specularColorMap.channel),specularIntensityMapUv:dt&&E(P.specularIntensityMap.channel),transmissionMapUv:W&&E(P.transmissionMap.channel),thicknessMapUv:Ve&&E(P.thicknessMap.channel),alphaMapUv:pe&&E(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Te||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!de.attributes.uv&&(Oe||pe),fog:!!te,useFog:P.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,skinning:$.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Oe&&P.map.isVideoTexture===!0&&Bt.getTransfer(P.map.colorSpace)===qt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===nr,flipSided:P.side===$n,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:vt&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:vt&&P.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function _(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)b.push(z),b.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(I(b,P),w(b,P),b.push(i.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function I(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function w(P,b){f.disableAll(),b.supportsVertexTextures&&f.enable(0),b.instancing&&f.enable(1),b.instancingColor&&f.enable(2),b.instancingMorph&&f.enable(3),b.matcap&&f.enable(4),b.envMap&&f.enable(5),b.normalMapObjectSpace&&f.enable(6),b.normalMapTangentSpace&&f.enable(7),b.clearcoat&&f.enable(8),b.iridescence&&f.enable(9),b.alphaTest&&f.enable(10),b.vertexColors&&f.enable(11),b.vertexAlphas&&f.enable(12),b.vertexUv1s&&f.enable(13),b.vertexUv2s&&f.enable(14),b.vertexUv3s&&f.enable(15),b.vertexTangents&&f.enable(16),b.anisotropy&&f.enable(17),b.alphaHash&&f.enable(18),b.batching&&f.enable(19),b.dispersion&&f.enable(20),b.batchingColor&&f.enable(21),P.push(f.mask),f.disableAll(),b.fog&&f.enable(0),b.useFog&&f.enable(1),b.flatShading&&f.enable(2),b.logarithmicDepthBuffer&&f.enable(3),b.skinning&&f.enable(4),b.morphTargets&&f.enable(5),b.morphNormals&&f.enable(6),b.morphColors&&f.enable(7),b.premultipliedAlpha&&f.enable(8),b.shadowMapEnabled&&f.enable(9),b.doubleSided&&f.enable(10),b.flipSided&&f.enable(11),b.useDepthPacking&&f.enable(12),b.dithering&&f.enable(13),b.transmission&&f.enable(14),b.sheen&&f.enable(15),b.opaque&&f.enable(16),b.pointsUvs&&f.enable(17),b.decodeVideoTexture&&f.enable(18),b.alphaToCoverage&&f.enable(19),P.push(f.mask)}function R(P){const b=M[P.type];let z;if(b){const Z=Ui[b];z=yS.clone(Z.uniforms)}else z=P.uniforms;return z}function H(P,b){let z;for(let Z=0,$=m.length;Z<$;Z++){const te=m[Z];if(te.cacheKey===b){z=te,++z.usedTimes;break}}return z===void 0&&(z=new Nw(i,b,P,l),m.push(z)),z}function L(P){if(--P.usedTimes===0){const b=m.indexOf(P);m[b]=m[m.length-1],m.pop(),P.destroy()}}function D(P){d.remove(P)}function F(){d.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:R,acquireProgram:H,releaseProgram:L,releaseShaderCache:D,programs:m,dispose:F}}function Fw(){let i=new WeakMap;function e(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function t(l){i.delete(l)}function s(l,c,f){i.get(l)[c]=f}function a(){i=new WeakMap}return{get:e,remove:t,update:s,dispose:a}}function zw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bg(){const i=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function c(g,v,S,M,E,y){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},i[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=S,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=E,_.group=y),e++,_}function f(g,v,S,M,E,y){const _=c(g,v,S,M,E,y);S.transmission>0?s.push(_):S.transparent===!0?a.push(_):t.push(_)}function d(g,v,S,M,E,y){const _=c(g,v,S,M,E,y);S.transmission>0?s.unshift(_):S.transparent===!0?a.unshift(_):t.unshift(_)}function h(g,v){t.length>1&&t.sort(g||zw),s.length>1&&s.sort(v||Cg),a.length>1&&a.sort(v||Cg)}function m(){for(let g=e,v=i.length;g<v;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:d,finish:m,sort:h}}function kw(){let i=new WeakMap;function e(s,a){const l=i.get(s);let c;return l===void 0?(c=new bg,i.set(s,[c])):a>=l.length?(c=new bg,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Pt};break;case"SpotLight":t={position:new K,direction:new K,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function Hw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vw=0;function Gw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ww(i){const e=new Bw,t=Hw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new K);const a=new K,l=new Vt,c=new Vt;function f(h){let m=0,g=0,v=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let S=0,M=0,E=0,y=0,_=0,I=0,w=0,R=0,H=0,L=0,D=0;h.sort(Gw);for(let P=0,b=h.length;P<b;P++){const z=h[P],Z=z.color,$=z.intensity,te=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=Z.r*$,g+=Z.g*$,v+=Z.b*$;else if(z.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(z.sh.coefficients[j],$);D++}else if(z.isDirectionalLight){const j=e.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const re=z.shadow,V=t.get(z);V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,s.directionalShadow[S]=V,s.directionalShadowMap[S]=de,s.directionalShadowMatrix[S]=z.shadow.matrix,I++}s.directional[S]=j,S++}else if(z.isSpotLight){const j=e.get(z);j.position.setFromMatrixPosition(z.matrixWorld),j.color.copy(Z).multiplyScalar($),j.distance=te,j.coneCos=Math.cos(z.angle),j.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),j.decay=z.decay,s.spot[E]=j;const re=z.shadow;if(z.map&&(s.spotLightMap[H]=z.map,H++,re.updateMatrices(z),z.castShadow&&L++),s.spotLightMatrix[E]=re.matrix,z.castShadow){const V=t.get(z);V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,s.spotShadow[E]=V,s.spotShadowMap[E]=de,R++}E++}else if(z.isRectAreaLight){const j=e.get(z);j.color.copy(Z).multiplyScalar($),j.halfWidth.set(z.width*.5,0,0),j.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=j,y++}else if(z.isPointLight){const j=e.get(z);if(j.color.copy(z.color).multiplyScalar(z.intensity),j.distance=z.distance,j.decay=z.decay,z.castShadow){const re=z.shadow,V=t.get(z);V.shadowBias=re.bias,V.shadowNormalBias=re.normalBias,V.shadowRadius=re.radius,V.shadowMapSize=re.mapSize,V.shadowCameraNear=re.camera.near,V.shadowCameraFar=re.camera.far,s.pointShadow[M]=V,s.pointShadowMap[M]=de,s.pointShadowMatrix[M]=z.shadow.matrix,w++}s.point[M]=j,M++}else if(z.isHemisphereLight){const j=e.get(z);j.skyColor.copy(z.color).multiplyScalar($),j.groundColor.copy(z.groundColor).multiplyScalar($),s.hemi[_]=j,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ke.LTC_FLOAT_1,s.rectAreaLTC2=Ke.LTC_FLOAT_2):(s.rectAreaLTC1=Ke.LTC_HALF_1,s.rectAreaLTC2=Ke.LTC_HALF_2)),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=v;const F=s.hash;(F.directionalLength!==S||F.pointLength!==M||F.spotLength!==E||F.rectAreaLength!==y||F.hemiLength!==_||F.numDirectionalShadows!==I||F.numPointShadows!==w||F.numSpotShadows!==R||F.numSpotMaps!==H||F.numLightProbes!==D)&&(s.directional.length=S,s.spot.length=E,s.rectArea.length=y,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=R+H-L,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=D,F.directionalLength=S,F.pointLength=M,F.spotLength=E,F.rectAreaLength=y,F.hemiLength=_,F.numDirectionalShadows=I,F.numPointShadows=w,F.numSpotShadows=R,F.numSpotMaps=H,F.numLightProbes=D,s.version=Vw++)}function d(h,m){let g=0,v=0,S=0,M=0,E=0;const y=m.matrixWorldInverse;for(let _=0,I=h.length;_<I;_++){const w=h[_];if(w.isDirectionalLight){const R=s.directional[g];R.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),g++}else if(w.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(w.isRectAreaLight){const R=s.rectArea[M];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(y),c.identity(),l.copy(w.matrixWorld),l.premultiply(y),c.extractRotation(l),R.halfWidth.set(w.width*.5,0,0),R.halfHeight.set(0,w.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(w.isPointLight){const R=s.point[v];R.position.setFromMatrixPosition(w.matrixWorld),R.position.applyMatrix4(y),v++}else if(w.isHemisphereLight){const R=s.hemi[E];R.direction.setFromMatrixPosition(w.matrixWorld),R.direction.transformDirection(y),E++}}}return{setup:f,setupView:d,state:s}}function Rg(i){const e=new Ww(i),t=[],s=[];function a(m){h.camera=m,t.length=0,s.length=0}function l(m){t.push(m)}function c(m){s.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function jw(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new Rg(i),e.set(a,[f])):l>=c.length?(f=new Rg(i),c.push(f)):f=c[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}class Xw extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qw extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`;function Kw(i,e,t){let s=new xd;const a=new $e,l=new $e,c=new Mn,f=new Xw({depthPacking:Py}),d=new qw,h={},m=t.maxTextureSize,g={[ki]:$n,[$n]:ki,[nr]:nr},v=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Yw,fragmentShader:$w}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new Bn;M.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ai(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d0;let _=this.type;this.render=function(L,D,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const P=i.getRenderTarget(),b=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Or),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const $=_!==tr&&this.type===tr,te=_===tr&&this.type!==tr;for(let de=0,j=L.length;de<j;de++){const re=L[de],V=re.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const le=V.getFrameExtents();if(a.multiply(le),l.copy(V.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/le.x),a.x=l.x*le.x,V.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/le.y),a.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||$===!0||te===!0){const O=this.type!==tr?{minFilter:Yn,magFilter:Yn}:{};V.map!==null&&V.map.dispose(),V.map=new ps(a.x,a.y,O),V.map.texture.name=re.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const oe=V.getViewportCount();for(let O=0;O<oe;O++){const q=V.getViewport(O);c.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),Z.viewport(c),V.updateMatrices(re,O),s=V.getFrustum(),R(D,F,V.camera,re,this.type)}V.isPointLightShadow!==!0&&this.type===tr&&I(V,F),V.needsUpdate=!1}_=this.type,y.needsUpdate=!1,i.setRenderTarget(P,b,z)};function I(L,D){const F=e.update(E);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ps(a.x,a.y)),v.uniforms.shadow_pass.value=L.map.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(D,null,F,v,E,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(D,null,F,S,E,null)}function w(L,D,F,P){let b=null;const z=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)b=z;else if(b=F.isPointLight===!0?d:f,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const Z=b.uuid,$=D.uuid;let te=h[Z];te===void 0&&(te={},h[Z]=te);let de=te[$];de===void 0&&(de=b.clone(),te[$]=de,D.addEventListener("dispose",H)),b=de}if(b.visible=D.visible,b.wireframe=D.wireframe,P===tr?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:g[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Z=i.properties.get(b);Z.light=F}return b}function R(L,D,F,P,b){if(L.visible===!1)return;if(L.layers.test(D.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===tr)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const $=e.update(L),te=L.material;if(Array.isArray(te)){const de=$.groups;for(let j=0,re=de.length;j<re;j++){const V=de[j],le=te[V.materialIndex];if(le&&le.visible){const oe=w(L,le,P,b);L.onBeforeShadow(i,L,D,F,$,oe,V),i.renderBufferDirect(F,null,$,oe,L,V),L.onAfterShadow(i,L,D,F,$,oe,V)}}}else if(te.visible){const de=w(L,te,P,b);L.onBeforeShadow(i,L,D,F,$,de,null),i.renderBufferDirect(F,null,$,de,L,null),L.onAfterShadow(i,L,D,F,$,de,null)}}const Z=L.children;for(let $=0,te=Z.length;$<te;$++)R(Z[$],D,F,P,b)}function H(L){L.target.removeEventListener("dispose",H);for(const F in h){const P=h[F],b=L.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}function Zw(i){function e(){let W=!1;const Ve=new Mn;let ge=null;const pe=new Mn(0,0,0,0);return{setMask:function(Ue){ge!==Ue&&!W&&(i.colorMask(Ue,Ue,Ue,Ue),ge=Ue)},setLocked:function(Ue){W=Ue},setClear:function(Ue,rt,vt,At,Et){Et===!0&&(Ue*=At,rt*=At,vt*=At),Ve.set(Ue,rt,vt,At),pe.equals(Ve)===!1&&(i.clearColor(Ue,rt,vt,At),pe.copy(Ve))},reset:function(){W=!1,ge=null,pe.set(-1,0,0,0)}}}function t(){let W=!1,Ve=null,ge=null,pe=null;return{setTest:function(Ue){Ue?fe(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Ue){Ve!==Ue&&!W&&(i.depthMask(Ue),Ve=Ue)},setFunc:function(Ue){if(ge!==Ue){switch(Ue){case iy:i.depthFunc(i.NEVER);break;case ry:i.depthFunc(i.ALWAYS);break;case sy:i.depthFunc(i.LESS);break;case ac:i.depthFunc(i.LEQUAL);break;case ay:i.depthFunc(i.EQUAL);break;case oy:i.depthFunc(i.GEQUAL);break;case ly:i.depthFunc(i.GREATER);break;case cy:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Ue}},setLocked:function(Ue){W=Ue},setClear:function(Ue){pe!==Ue&&(i.clearDepth(Ue),pe=Ue)},reset:function(){W=!1,Ve=null,ge=null,pe=null}}}function s(){let W=!1,Ve=null,ge=null,pe=null,Ue=null,rt=null,vt=null,At=null,Et=null;return{setTest:function(gt){W||(gt?fe(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(gt){Ve!==gt&&!W&&(i.stencilMask(gt),Ve=gt)},setFunc:function(gt,Rt,Ot){(ge!==gt||pe!==Rt||Ue!==Ot)&&(i.stencilFunc(gt,Rt,Ot),ge=gt,pe=Rt,Ue=Ot)},setOp:function(gt,Rt,Ot){(rt!==gt||vt!==Rt||At!==Ot)&&(i.stencilOp(gt,Rt,Ot),rt=gt,vt=Rt,At=Ot)},setLocked:function(gt){W=gt},setClear:function(gt){Et!==gt&&(i.clearStencil(gt),Et=gt)},reset:function(){W=!1,Ve=null,ge=null,pe=null,Ue=null,rt=null,vt=null,At=null,Et=null}}}const a=new e,l=new t,c=new s,f=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,v=[],S=null,M=!1,E=null,y=null,_=null,I=null,w=null,R=null,H=null,L=new Pt(0,0,0),D=0,F=!1,P=null,b=null,z=null,Z=null,$=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,j=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(re)[1]),de=j>=1):re.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),de=j>=2);let V=null,le={};const oe=i.getParameter(i.SCISSOR_BOX),O=i.getParameter(i.VIEWPORT),q=new Mn().fromArray(oe),ke=new Mn().fromArray(O);function Q(W,Ve,ge,pe){const Ue=new Uint8Array(4),rt=i.createTexture();i.bindTexture(W,rt),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<ge;vt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Ve,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Ve+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return rt}const ie={};ie[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(i.DEPTH_TEST),l.setFunc(ac),Me(!1),Te(um),fe(i.CULL_FACE),Ee(Or);function fe(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function xe(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Le(W,Ve){return m[W]!==Ve?(i.bindFramebuffer(W,Ve),m[W]=Ve,W===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ve),W===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ve),!0):!1}function He(W,Ve){let ge=v,pe=!1;if(W){ge=g.get(Ve),ge===void 0&&(ge=[],g.set(Ve,ge));const Ue=W.textures;if(ge.length!==Ue.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,vt=Ue.length;rt<vt;rt++)ge[rt]=i.COLOR_ATTACHMENT0+rt;ge.length=Ue.length,pe=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ge)}function Oe(W){return S!==W?(i.useProgram(W),S=W,!0):!1}const G={[cs]:i.FUNC_ADD,[Bx]:i.FUNC_SUBTRACT,[Hx]:i.FUNC_REVERSE_SUBTRACT};G[Vx]=i.MIN,G[Gx]=i.MAX;const ye={[Wx]:i.ZERO,[jx]:i.ONE,[Xx]:i.SRC_COLOR,[Kf]:i.SRC_ALPHA,[Jx]:i.SRC_ALPHA_SATURATE,[Kx]:i.DST_COLOR,[Yx]:i.DST_ALPHA,[qx]:i.ONE_MINUS_SRC_COLOR,[Zf]:i.ONE_MINUS_SRC_ALPHA,[Zx]:i.ONE_MINUS_DST_COLOR,[$x]:i.ONE_MINUS_DST_ALPHA,[Qx]:i.CONSTANT_COLOR,[ey]:i.ONE_MINUS_CONSTANT_COLOR,[ty]:i.CONSTANT_ALPHA,[ny]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(W,Ve,ge,pe,Ue,rt,vt,At,Et,gt){if(W===Or){M===!0&&(xe(i.BLEND),M=!1);return}if(M===!1&&(fe(i.BLEND),M=!0),W!==kx){if(W!==E||gt!==F){if((y!==cs||w!==cs)&&(i.blendEquation(i.FUNC_ADD),y=cs,w=cs),gt)switch(W){case aa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fm:i.blendFunc(i.ONE,i.ONE);break;case dm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}_=null,I=null,R=null,H=null,L.set(0,0,0),D=0,E=W,F=gt}return}Ue=Ue||Ve,rt=rt||ge,vt=vt||pe,(Ve!==y||Ue!==w)&&(i.blendEquationSeparate(G[Ve],G[Ue]),y=Ve,w=Ue),(ge!==_||pe!==I||rt!==R||vt!==H)&&(i.blendFuncSeparate(ye[ge],ye[pe],ye[rt],ye[vt]),_=ge,I=pe,R=rt,H=vt),(At.equals(L)===!1||Et!==D)&&(i.blendColor(At.r,At.g,At.b,Et),L.copy(At),D=Et),E=W,F=!1}function we(W,Ve){W.side===nr?xe(i.CULL_FACE):fe(i.CULL_FACE);let ge=W.side===$n;Ve&&(ge=!ge),Me(ge),W.blending===aa&&W.transparent===!1?Ee(Or):Ee(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);const pe=W.stencilWrite;c.setTest(pe),pe&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ce(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(W){P!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),P=W)}function Te(W){W!==Ox?(fe(i.CULL_FACE),W!==b&&(W===um?i.cullFace(i.BACK):W===Fx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),b=W}function Pe(W){W!==z&&(de&&i.lineWidth(W),z=W)}function Ce(W,Ve,ge){W?(fe(i.POLYGON_OFFSET_FILL),(Z!==Ve||$!==ge)&&(i.polygonOffset(Ve,ge),Z=Ve,$=ge)):xe(i.POLYGON_OFFSET_FILL)}function Xe(W){W?fe(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function U(W){W===void 0&&(W=i.TEXTURE0+te-1),V!==W&&(i.activeTexture(W),V=W)}function A(W,Ve,ge){ge===void 0&&(V===null?ge=i.TEXTURE0+te-1:ge=V);let pe=le[ge];pe===void 0&&(pe={type:void 0,texture:void 0},le[ge]=pe),(pe.type!==W||pe.texture!==Ve)&&(V!==ge&&(i.activeTexture(ge),V=ge),i.bindTexture(W,Ve||ie[W]),pe.type=W,pe.texture=Ve)}function ne(){const W=le[V];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function T(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ze(W){q.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),q.copy(W))}function ze(W){ke.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ke.copy(W))}function ft(W,Ve){let ge=d.get(Ve);ge===void 0&&(ge=new WeakMap,d.set(Ve,ge));let pe=ge.get(W);pe===void 0&&(pe=i.getUniformBlockIndex(Ve,W.name),ge.set(W,pe))}function ut(W,Ve){const pe=d.get(Ve).get(W);f.get(Ve)!==pe&&(i.uniformBlockBinding(Ve,pe,W.__bindingPointIndex),f.set(Ve,pe))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,le={},m={},g=new WeakMap,v=[],S=null,M=!1,E=null,y=null,_=null,I=null,w=null,R=null,H=null,L=new Pt(0,0,0),D=0,F=!1,P=null,b=null,z=null,Z=null,$=null,q.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:xe,bindFramebuffer:Le,drawBuffers:He,useProgram:Oe,setBlending:Ee,setMaterial:we,setFlipSided:Me,setCullFace:Te,setLineWidth:Pe,setPolygonOffset:Ce,setScissorTest:Xe,activeTexture:U,bindTexture:A,unbindTexture:ne,compressedTexImage2D:Se,compressedTexImage3D:me,texImage2D:je,texImage3D:T,updateUBOMapping:ft,uniformBlockBinding:ut,texStorage2D:et,texStorage3D:Ae,texSubImage2D:ve,texSubImage3D:qe,compressedTexSubImage2D:Ie,compressedTexSubImage3D:Ne,scissor:Ze,viewport:ze,reset:dt}}function Jw(i,e,t,s,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new $e,m=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,A){return S?new OffscreenCanvas(U,A):vo("canvas")}function E(U,A,ne){let Se=1;const me=Xe(U);if((me.width>ne||me.height>ne)&&(Se=ne/Math.max(me.width,me.height)),Se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ve=Math.floor(Se*me.width),qe=Math.floor(Se*me.height);g===void 0&&(g=M(ve,qe));const Ie=A?M(ve,qe):g;return Ie.width=ve,Ie.height=qe,Ie.getContext("2d").drawImage(U,0,0,ve,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ve+"x"+qe+")."),Ie}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function y(U){return U.generateMipmaps&&U.minFilter!==Yn&&U.minFilter!==si}function _(U){i.generateMipmap(U)}function I(U,A,ne,Se,me=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ve=A;if(A===i.RED&&(ne===i.FLOAT&&(ve=i.R32F),ne===i.HALF_FLOAT&&(ve=i.R16F),ne===i.UNSIGNED_BYTE&&(ve=i.R8)),A===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(ve=i.R8UI),ne===i.UNSIGNED_SHORT&&(ve=i.R16UI),ne===i.UNSIGNED_INT&&(ve=i.R32UI),ne===i.BYTE&&(ve=i.R8I),ne===i.SHORT&&(ve=i.R16I),ne===i.INT&&(ve=i.R32I)),A===i.RG&&(ne===i.FLOAT&&(ve=i.RG32F),ne===i.HALF_FLOAT&&(ve=i.RG16F),ne===i.UNSIGNED_BYTE&&(ve=i.RG8)),A===i.RG_INTEGER&&(ne===i.UNSIGNED_BYTE&&(ve=i.RG8UI),ne===i.UNSIGNED_SHORT&&(ve=i.RG16UI),ne===i.UNSIGNED_INT&&(ve=i.RG32UI),ne===i.BYTE&&(ve=i.RG8I),ne===i.SHORT&&(ve=i.RG16I),ne===i.INT&&(ve=i.RG32I)),A===i.RGB&&ne===i.UNSIGNED_INT_5_9_9_9_REV&&(ve=i.RGB9_E5),A===i.RGBA){const qe=me?lc:Bt.getTransfer(Se);ne===i.FLOAT&&(ve=i.RGBA32F),ne===i.HALF_FLOAT&&(ve=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(ve=qe===qt?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function w(U,A){let ne;return U?A===null||A===da||A===ha?ne=i.DEPTH24_STENCIL8:A===ar?ne=i.DEPTH32F_STENCIL8:A===oc&&(ne=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===da||A===ha?ne=i.DEPTH_COMPONENT24:A===ar?ne=i.DEPTH_COMPONENT32F:A===oc&&(ne=i.DEPTH_COMPONENT16),ne}function R(U,A){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Yn&&U.minFilter!==si?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function H(U){const A=U.target;A.removeEventListener("dispose",H),D(A),A.isVideoTexture&&m.delete(A)}function L(U){const A=U.target;A.removeEventListener("dispose",L),P(A)}function D(U){const A=s.get(U);if(A.__webglInit===void 0)return;const ne=U.source,Se=v.get(ne);if(Se){const me=Se[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&F(U),Object.keys(Se).length===0&&v.delete(ne)}s.remove(U)}function F(U){const A=s.get(U);i.deleteTexture(A.__webglTexture);const ne=U.source,Se=v.get(ne);delete Se[A.__cacheKey],c.memory.textures--}function P(U){const A=s.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let me=0;me<A.__webglFramebuffer[Se].length;me++)i.deleteFramebuffer(A.__webglFramebuffer[Se][me]);else i.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)i.deleteFramebuffer(A.__webglFramebuffer[Se]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=U.textures;for(let Se=0,me=ne.length;Se<me;Se++){const ve=s.get(ne[Se]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),c.memory.textures--),s.remove(ne[Se])}s.remove(U)}let b=0;function z(){b=0}function Z(){const U=b;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),b+=1,U}function $(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function te(U,A){const ne=s.get(U);if(U.isVideoTexture&&Pe(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const Se=U.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(ne,U,A);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+A)}function de(U,A){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){ke(ne,U,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+A)}function j(U,A){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){ke(ne,U,A);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+A)}function re(U,A){const ne=s.get(U);if(U.version>0&&ne.__version!==U.version){Q(ne,U,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+A)}const V={[ed]:i.REPEAT,[sr]:i.CLAMP_TO_EDGE,[td]:i.MIRRORED_REPEAT},le={[Yn]:i.NEAREST,[xy]:i.NEAREST_MIPMAP_NEAREST,[Al]:i.NEAREST_MIPMAP_LINEAR,[si]:i.LINEAR,[ff]:i.LINEAR_MIPMAP_NEAREST,[hs]:i.LINEAR_MIPMAP_LINEAR},oe={[Ny]:i.NEVER,[zy]:i.ALWAYS,[Iy]:i.LESS,[S0]:i.LEQUAL,[Dy]:i.EQUAL,[Fy]:i.GEQUAL,[Uy]:i.GREATER,[Oy]:i.NOTEQUAL};function O(U,A){if(A.type===ar&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===si||A.magFilter===ff||A.magFilter===Al||A.magFilter===hs||A.minFilter===si||A.minFilter===ff||A.minFilter===Al||A.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,V[A.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,V[A.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,V[A.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,le[A.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Yn||A.minFilter!==Al&&A.minFilter!==hs||A.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function q(U,A){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",H));const Se=A.source;let me=v.get(Se);me===void 0&&(me={},v.set(Se,me));const ve=$(A);if(ve!==U.__cacheKey){me[ve]===void 0&&(me[ve]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),me[ve].usedTimes++;const qe=me[U.__cacheKey];qe!==void 0&&(me[U.__cacheKey].usedTimes--,qe.usedTimes===0&&F(A)),U.__cacheKey=ve,U.__webglTexture=me[ve].texture}return ne}function ke(U,A,ne){let Se=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=i.TEXTURE_3D);const me=q(U,A),ve=A.source;t.bindTexture(Se,U.__webglTexture,i.TEXTURE0+ne);const qe=s.get(ve);if(ve.version!==qe.__version||me===!0){t.activeTexture(i.TEXTURE0+ne);const Ie=Bt.getPrimaries(Bt.workingColorSpace),Ne=A.colorSpace===Ur?null:Bt.getPrimaries(A.colorSpace),et=A.colorSpace===Ur||Ie===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ae=E(A.image,!1,a.maxTextureSize);Ae=Ce(A,Ae);const je=l.convert(A.format,A.colorSpace),T=l.convert(A.type);let Ze=I(A.internalFormat,je,T,A.colorSpace,A.isVideoTexture);O(Se,A);let ze;const ft=A.mipmaps,ut=A.isVideoTexture!==!0,dt=qe.__version===void 0||me===!0,W=ve.dataReady,Ve=R(A,Ae);if(A.isDepthTexture)Ze=w(A.format===pa,A.type),dt&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Ze,Ae.width,Ae.height):t.texImage2D(i.TEXTURE_2D,0,Ze,Ae.width,Ae.height,0,je,T,null));else if(A.isDataTexture)if(ft.length>0){ut&&dt&&t.texStorage2D(i.TEXTURE_2D,Ve,Ze,ft[0].width,ft[0].height);for(let ge=0,pe=ft.length;ge<pe;ge++)ze=ft[ge],ut?W&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ze.width,ze.height,je,T,ze.data):t.texImage2D(i.TEXTURE_2D,ge,Ze,ze.width,ze.height,0,je,T,ze.data);A.generateMipmaps=!1}else ut?(dt&&t.texStorage2D(i.TEXTURE_2D,Ve,Ze,Ae.width,Ae.height),W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae.width,Ae.height,je,T,Ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,Ae.width,Ae.height,0,je,T,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ze,ft[0].width,ft[0].height,Ae.depth);for(let ge=0,pe=ft.length;ge<pe;ge++)if(ze=ft[ge],A.format!==Fi)if(je!==null)if(ut){if(W)if(A.layerUpdates.size>0){for(const Ue of A.layerUpdates){const rt=ze.width*ze.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Ue,ze.width,ze.height,1,je,ze.data.slice(rt*Ue,rt*(Ue+1)),0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ze.width,ze.height,Ae.depth,je,ze.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ze,ze.width,ze.height,Ae.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,ze.width,ze.height,Ae.depth,je,T,ze.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ze,ze.width,ze.height,Ae.depth,0,je,T,ze.data)}else{ut&&dt&&t.texStorage2D(i.TEXTURE_2D,Ve,Ze,ft[0].width,ft[0].height);for(let ge=0,pe=ft.length;ge<pe;ge++)ze=ft[ge],A.format!==Fi?je!==null?ut?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,ze.width,ze.height,je,ze.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ze,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?W&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,ze.width,ze.height,je,T,ze.data):t.texImage2D(i.TEXTURE_2D,ge,Ze,ze.width,ze.height,0,je,T,ze.data)}else if(A.isDataArrayTexture)if(ut){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,Ze,Ae.width,Ae.height,Ae.depth),W)if(A.layerUpdates.size>0){let ge;switch(T){case i.UNSIGNED_BYTE:switch(je){case i.ALPHA:ge=1;break;case i.LUMINANCE:ge=1;break;case i.LUMINANCE_ALPHA:ge=2;break;case i.RGB:ge=3;break;case i.RGBA:ge=4;break;default:throw new Error(`Unknown texel size for format ${je}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:ge=1;break;default:throw new Error(`Unknown texel size for type ${T}.`)}const pe=Ae.width*Ae.height*ge;for(const Ue of A.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,Ae.width,Ae.height,1,je,T,Ae.data.slice(pe*Ue,pe*(Ue+1)));A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,T,Ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,Ae.width,Ae.height,Ae.depth,0,je,T,Ae.data);else if(A.isData3DTexture)ut?(dt&&t.texStorage3D(i.TEXTURE_3D,Ve,Ze,Ae.width,Ae.height,Ae.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,T,Ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,Ae.width,Ae.height,Ae.depth,0,je,T,Ae.data);else if(A.isFramebufferTexture){if(dt)if(ut)t.texStorage2D(i.TEXTURE_2D,Ve,Ze,Ae.width,Ae.height);else{let ge=Ae.width,pe=Ae.height;for(let Ue=0;Ue<Ve;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ze,ge,pe,0,je,T,null),ge>>=1,pe>>=1}}else if(ft.length>0){if(ut&&dt){const ge=Xe(ft[0]);t.texStorage2D(i.TEXTURE_2D,Ve,Ze,ge.width,ge.height)}for(let ge=0,pe=ft.length;ge<pe;ge++)ze=ft[ge],ut?W&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,je,T,ze):t.texImage2D(i.TEXTURE_2D,ge,Ze,je,T,ze);A.generateMipmaps=!1}else if(ut){if(dt){const ge=Xe(Ae);t.texStorage2D(i.TEXTURE_2D,Ve,Ze,ge.width,ge.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,je,T,Ae)}else t.texImage2D(i.TEXTURE_2D,0,Ze,je,T,Ae);y(A)&&_(Se),qe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Q(U,A,ne){if(A.image.length!==6)return;const Se=q(U,A),me=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ne);const ve=s.get(me);if(me.version!==ve.__version||Se===!0){t.activeTexture(i.TEXTURE0+ne);const qe=Bt.getPrimaries(Bt.workingColorSpace),Ie=A.colorSpace===Ur?null:Bt.getPrimaries(A.colorSpace),Ne=A.colorSpace===Ur||qe===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const et=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,je=[];for(let pe=0;pe<6;pe++)!et&&!Ae?je[pe]=E(A.image[pe],!0,a.maxCubemapSize):je[pe]=Ae?A.image[pe].image:A.image[pe],je[pe]=Ce(A,je[pe]);const T=je[0],Ze=l.convert(A.format,A.colorSpace),ze=l.convert(A.type),ft=I(A.internalFormat,Ze,ze,A.colorSpace),ut=A.isVideoTexture!==!0,dt=ve.__version===void 0||Se===!0,W=me.dataReady;let Ve=R(A,T);O(i.TEXTURE_CUBE_MAP,A);let ge;if(et){ut&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ft,T.width,T.height);for(let pe=0;pe<6;pe++){ge=je[pe].mipmaps;for(let Ue=0;Ue<ge.length;Ue++){const rt=ge[Ue];A.format!==Fi?Ze!==null?ut?W&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,rt.width,rt.height,Ze,rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,ft,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,0,0,rt.width,rt.height,Ze,ze,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue,ft,rt.width,rt.height,0,Ze,ze,rt.data)}}}else{if(ge=A.mipmaps,ut&&dt){ge.length>0&&Ve++;const pe=Xe(je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ft,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ae){ut?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,je[pe].width,je[pe].height,Ze,ze,je[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,je[pe].width,je[pe].height,0,Ze,ze,je[pe].data);for(let Ue=0;Ue<ge.length;Ue++){const vt=ge[Ue].image[pe].image;ut?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,vt.width,vt.height,Ze,ze,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,ft,vt.width,vt.height,0,Ze,ze,vt.data)}}else{ut?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ze,ze,je[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ft,Ze,ze,je[pe]);for(let Ue=0;Ue<ge.length;Ue++){const rt=ge[Ue];ut?W&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,0,0,Ze,ze,rt.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue+1,ft,Ze,ze,rt.image[pe])}}}y(A)&&_(i.TEXTURE_CUBE_MAP),ve.__version=me.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ie(U,A,ne,Se,me,ve){const qe=l.convert(ne.format,ne.colorSpace),Ie=l.convert(ne.type),Ne=I(ne.internalFormat,qe,Ie,ne.colorSpace);if(!s.get(A).__hasExternalTextures){const Ae=Math.max(1,A.width>>ve),je=Math.max(1,A.height>>ve);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ve,Ne,Ae,je,A.depth,0,qe,Ie,null):t.texImage2D(me,ve,Ne,Ae,je,0,qe,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Te(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Se,me,s.get(ne).__webglTexture,0,Me(A)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Se,me,s.get(ne).__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(U,A,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,U),A.depthBuffer){const Se=A.depthTexture,me=Se&&Se.isDepthTexture?Se.type:null,ve=w(A.stencilBuffer,me),qe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=Me(A);Te(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ve,A.width,A.height):ne?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ve,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qe,i.RENDERBUFFER,U)}else{const Se=A.textures;for(let me=0;me<Se.length;me++){const ve=Se[me],qe=l.convert(ve.format,ve.colorSpace),Ie=l.convert(ve.type),Ne=I(ve.internalFormat,qe,Ie,ve.colorSpace),et=Me(A);ne&&Te(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Ne,A.width,A.height):Te(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,Ne,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),te(A.depthTexture,0);const Se=s.get(A.depthTexture).__webglTexture,me=Me(A);if(A.depthTexture.format===oa)Te(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Se,0);else if(A.depthTexture.format===pa)Te(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function Le(U){const A=s.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");xe(A.__webglFramebuffer,U)}else if(ne){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]=i.createRenderbuffer(),fe(A.__webglDepthbuffer[Se],U,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),fe(A.__webglDepthbuffer,U,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(U,A,ne){const Se=s.get(U);A!==void 0&&ie(Se.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&Le(U)}function Oe(U){const A=U.texture,ne=s.get(U),Se=s.get(A);U.addEventListener("dispose",L);const me=U.textures,ve=U.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture()),Se.__version=A.version,c.memory.textures++),ve){ne.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[Ie]=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)ne.__webglFramebuffer[Ie][Ne]=i.createFramebuffer()}else ne.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ne.__webglFramebuffer[Ie]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(qe)for(let Ie=0,Ne=me.length;Ie<Ne;Ie++){const et=s.get(me[Ie]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&Te(U)===!1){ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ie=0;Ie<me.length;Ie++){const Ne=me[Ie];ne.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie]);const et=l.convert(Ne.format,Ne.colorSpace),Ae=l.convert(Ne.type),je=I(Ne.internalFormat,et,Ae,Ne.colorSpace,U.isXRRenderTarget===!0),T=Me(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,T,je,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),fe(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,Se.__webglTexture),O(i.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ie(ne.__webglFramebuffer[Ie][Ne],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ne);else ie(ne.__webglFramebuffer[Ie],U,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);y(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Ie=0,Ne=me.length;Ie<Ne;Ie++){const et=me[Ie],Ae=s.get(et);t.bindTexture(i.TEXTURE_2D,Ae.__webglTexture),O(i.TEXTURE_2D,et),ie(ne.__webglFramebuffer,U,et,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),y(et)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Se.__webglTexture),O(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let Ne=0;Ne<A.mipmaps.length;Ne++)ie(ne.__webglFramebuffer[Ne],U,A,i.COLOR_ATTACHMENT0,Ie,Ne);else ie(ne.__webglFramebuffer,U,A,i.COLOR_ATTACHMENT0,Ie,0);y(A)&&_(Ie),t.unbindTexture()}U.depthBuffer&&Le(U)}function G(U){const A=U.textures;for(let ne=0,Se=A.length;ne<Se;ne++){const me=A[ne];if(y(me)){const ve=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,qe=s.get(me).__webglTexture;t.bindTexture(ve,qe),_(ve),t.unbindTexture()}}}const ye=[],Ee=[];function we(U){if(U.samples>0){if(Te(U)===!1){const A=U.textures,ne=U.width,Se=U.height;let me=i.COLOR_BUFFER_BIT;const ve=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qe=s.get(U),Ie=A.length>1;if(Ie)for(let Ne=0;Ne<A.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ne=0;Ne<A.length;Ne++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qe.__webglColorRenderbuffer[Ne]);const et=s.get(A[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,ne,Se,0,0,ne,Se,me,i.NEAREST),d===!0&&(ye.length=0,Ee.length=0,ye.push(i.COLOR_ATTACHMENT0+Ne),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ye.push(ve),Ee.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ne=0;Ne<A.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,qe.__webglColorRenderbuffer[Ne]);const et=s.get(A[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const A=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Me(U){return Math.min(a.maxSamples,U.samples)}function Te(U){const A=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(U){const A=c.render.frame;m.get(U)!==A&&(m.set(U,A),U.update())}function Ce(U,A){const ne=U.colorSpace,Se=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==kr&&ne!==Ur&&(Bt.getTransfer(ne)===qt?(Se!==Fi||me!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),A}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=Z,this.resetTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=de,this.setTexture3D=j,this.setTextureCube=re,this.rebindTextures=He,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Te}function Qw(i,e){function t(s,a=Ur){let l;const c=Bt.getTransfer(a);if(s===zr)return i.UNSIGNED_BYTE;if(s===m0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===g0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===My)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===yy)return i.BYTE;if(s===Sy)return i.SHORT;if(s===oc)return i.UNSIGNED_SHORT;if(s===p0)return i.INT;if(s===da)return i.UNSIGNED_INT;if(s===ar)return i.FLOAT;if(s===xc)return i.HALF_FLOAT;if(s===Ey)return i.ALPHA;if(s===wy)return i.RGB;if(s===Fi)return i.RGBA;if(s===Ty)return i.LUMINANCE;if(s===Ay)return i.LUMINANCE_ALPHA;if(s===oa)return i.DEPTH_COMPONENT;if(s===pa)return i.DEPTH_STENCIL;if(s===v0)return i.RED;if(s===_0)return i.RED_INTEGER;if(s===Cy)return i.RG;if(s===x0)return i.RG_INTEGER;if(s===y0)return i.RGBA_INTEGER;if(s===df||s===hf||s===pf||s===mf)if(c===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===df)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===df)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pm||s===mm||s===gm||s===vm)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===pm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_m||s===xm||s===ym)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===_m||s===xm)return c===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ym)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sm||s===Mm||s===Em||s===wm||s===Tm||s===Am||s===Cm||s===bm||s===Rm||s===Pm||s===Lm||s===Nm||s===Im||s===Dm)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Sm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Em)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Am)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Im)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dm)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gf||s===Um||s===Om)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===gf)return c===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Um)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Om)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===by||s===Fm||s===zm||s===km)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===gf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Fm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===km)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ha?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:t}}class eT extends Ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tT={type:"move"};class Hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,s),_=this._getHandJoint(h,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),S=.02,M=.005;h.inputState.pinching&&v>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(tT)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Yl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const nT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iT=`
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

}`;class rT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new In,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new lr({vertexShader:nT,fragmentShader:iT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new Sc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class sT extends ga{constructor(e,t){super();const s=this;let a=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,g=null,v=null,S=null,M=null;const E=new rT,y=t.getContextAttributes();let _=null,I=null;const w=[],R=[],H=new $e;let L=null;const D=new Ai;D.layers.enable(1),D.viewport=new Mn;const F=new Ai;F.layers.enable(2),F.viewport=new Mn;const P=[D,F],b=new eT;b.layers.enable(1),b.layers.enable(2);let z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=w[Q];return ie===void 0&&(ie=new Hf,w[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=w[Q];return ie===void 0&&(ie=new Hf,w[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=w[Q];return ie===void 0&&(ie=new Hf,w[Q]=ie),ie.getHandSpace()};function $(Q){const ie=R.indexOf(Q.inputSource);if(ie===-1)return;const fe=w[ie];fe!==void 0&&(fe.update(Q.inputSource,Q.frame,h||c),fe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",de);for(let Q=0;Q<w.length;Q++){const ie=R[Q];ie!==null&&(R[Q]=null,w[Q].disconnect(ie))}z=null,Z=null,E.reset(),e.setRenderTarget(_),S=null,v=null,g=null,a=null,I=null,ke.stop(),s.isPresenting=!1,e.setPixelRatio(L),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",te),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(H),a.renderState.layers===void 0){const ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,ie),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new ps(S.framebufferWidth,S.framebufferHeight,{format:Fi,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ie=null,fe=null,xe=null;y.depth&&(xe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=y.stencil?pa:oa,fe=y.stencil?ha:da);const Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};g=new XRWebGLBinding(a,t),v=g.createProjectionLayer(Le),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new ps(v.textureWidth,v.textureHeight,{format:Fi,type:zr,depthTexture:new I0(v.textureWidth,v.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(f),ke.setContext(a),ke.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function de(Q){for(let ie=0;ie<Q.removed.length;ie++){const fe=Q.removed[ie],xe=R.indexOf(fe);xe>=0&&(R[xe]=null,w[xe].disconnect(fe))}for(let ie=0;ie<Q.added.length;ie++){const fe=Q.added[ie];let xe=R.indexOf(fe);if(xe===-1){for(let He=0;He<w.length;He++)if(He>=R.length){R.push(fe),xe=He;break}else if(R[He]===null){R[He]=fe,xe=He;break}if(xe===-1)break}const Le=w[xe];Le&&Le.connect(fe)}}const j=new K,re=new K;function V(Q,ie,fe){j.setFromMatrixPosition(ie.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const xe=j.distanceTo(re),Le=ie.projectionMatrix.elements,He=fe.projectionMatrix.elements,Oe=Le[14]/(Le[10]-1),G=Le[14]/(Le[10]+1),ye=(Le[9]+1)/Le[5],Ee=(Le[9]-1)/Le[5],we=(Le[8]-1)/Le[0],Me=(He[8]+1)/He[0],Te=Oe*we,Pe=Oe*Me,Ce=xe/(-we+Me),Xe=Ce*-we;ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Xe),Q.translateZ(Ce),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const U=Oe+Ce,A=G+Ce,ne=Te-Xe,Se=Pe+(xe-Xe),me=ye*G/A*U,ve=Ee*G/A*U;Q.projectionMatrix.makePerspective(ne,Se,me,ve,U,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function le(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;E.texture!==null&&(Q.near=E.depthNear,Q.far=E.depthFar),b.near=F.near=D.near=Q.near,b.far=F.far=D.far=Q.far,(z!==b.near||Z!==b.far)&&(a.updateRenderState({depthNear:b.near,depthFar:b.far}),z=b.near,Z=b.far,D.near=z,D.far=Z,F.near=z,F.far=Z,D.updateProjectionMatrix(),F.updateProjectionMatrix(),Q.updateProjectionMatrix());const ie=Q.parent,fe=b.cameras;le(b,ie);for(let xe=0;xe<fe.length;xe++)le(fe[xe],ie);fe.length===2?V(b,D,F):b.projectionMatrix.copy(D.projectionMatrix),oe(Q,b,ie)};function oe(Q,ie,fe){fe===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(fe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=go*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(Q){d=Q,v!==null&&(v.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(b)};let O=null;function q(Q,ie){if(m=ie.getViewerPose(h||c),M=ie,m!==null){const fe=m.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;fe.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let He=0;He<fe.length;He++){const Oe=fe[He];let G=null;if(S!==null)G=S.getViewport(Oe);else{const Ee=g.getViewSubImage(v,Oe);G=Ee.viewport,He===0&&(e.setRenderTargetTextures(I,Ee.colorTexture,v.ignoreDepthValues?void 0:Ee.depthStencilTexture),e.setRenderTarget(I))}let ye=P[He];ye===void 0&&(ye=new Ai,ye.layers.enable(He),ye.viewport=new Mn,P[He]=ye),ye.matrix.fromArray(Oe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Oe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(G.x,G.y,G.width,G.height),He===0&&(b.matrix.copy(ye.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(ye)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const He=g.getDepthInformation(fe[0]);He&&He.isValid&&He.texture&&E.init(e,He,a.renderState)}}for(let fe=0;fe<w.length;fe++){const xe=R[fe],Le=w[fe];xe!==null&&Le!==void 0&&Le.update(xe,ie,h||c)}O&&O(Q,ie),ie.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ie}),M=null}const ke=new L0;ke.setAnimationLoop(q),this.setAnimationLoop=function(Q){O=Q},this.dispose=function(){}}}const as=new bi,aT=new Vt;function oT(i,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,b0(i)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,I,w,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),g(y,_)):_.isMeshPhongMaterial?(l(y,_),m(y,_)):_.isMeshStandardMaterial?(l(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,R)):_.isMeshMatcapMaterial?(l(y,_),M(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),E(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?d(y,_,I,w):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===$n&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===$n&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const I=e.get(_),w=I.envMap,R=I.envMapRotation;w&&(y.envMap.value=w,as.copy(R),as.x*=-1,as.y*=-1,as.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),y.envMapRotation.value.setFromMatrix4(aT.makeRotationFromEuler(as)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function d(y,_,I,w){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*I,y.scale.value=w*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,I){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const I=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function lT(i,e,t,s){let a={},l={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(I,w){const R=w.program;s.uniformBlockBinding(I,R)}function h(I,w){let R=a[I.id];R===void 0&&(M(I),R=m(I),a[I.id]=R,I.addEventListener("dispose",y));const H=w.program;s.updateUBOMapping(I,H);const L=e.render.frame;l[I.id]!==L&&(v(I),l[I.id]=L)}function m(I){const w=g();I.__bindingPointIndex=w;const R=i.createBuffer(),H=I.__size,L=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,H,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,R),R}function g(){for(let I=0;I<f;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const w=a[I.id],R=I.uniforms,H=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let L=0,D=R.length;L<D;L++){const F=Array.isArray(R[L])?R[L]:[R[L]];for(let P=0,b=F.length;P<b;P++){const z=F[P];if(S(z,L,P,H)===!0){const Z=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let te=0;for(let de=0;de<$.length;de++){const j=$[de],re=E(j);typeof j=="number"||typeof j=="boolean"?(z.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,Z+te,z.__data)):j.isMatrix3?(z.__data[0]=j.elements[0],z.__data[1]=j.elements[1],z.__data[2]=j.elements[2],z.__data[3]=0,z.__data[4]=j.elements[3],z.__data[5]=j.elements[4],z.__data[6]=j.elements[5],z.__data[7]=0,z.__data[8]=j.elements[6],z.__data[9]=j.elements[7],z.__data[10]=j.elements[8],z.__data[11]=0):(j.toArray(z.__data,te),te+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(I,w,R,H){const L=I.value,D=w+"_"+R;if(H[D]===void 0)return typeof L=="number"||typeof L=="boolean"?H[D]=L:H[D]=L.clone(),!0;{const F=H[D];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return H[D]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function M(I){const w=I.uniforms;let R=0;const H=16;for(let D=0,F=w.length;D<F;D++){const P=Array.isArray(w[D])?w[D]:[w[D]];for(let b=0,z=P.length;b<z;b++){const Z=P[b],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let te=0,de=$.length;te<de;te++){const j=$[te],re=E(j),V=R%H;V!==0&&H-V<re.boundary&&(R+=H-V),Z.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=re.storage}}}const L=R%H;return L>0&&(R+=H-L),I.__size=R,I.__cache={},this}function E(I){const w={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(w.boundary=4,w.storage=4):I.isVector2?(w.boundary=8,w.storage=8):I.isVector3||I.isColor?(w.boundary=16,w.storage=12):I.isVector4?(w.boundary=16,w.storage=16):I.isMatrix3?(w.boundary=48,w.storage=48):I.isMatrix4?(w.boundary=64,w.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),w}function y(I){const w=I.target;w.removeEventListener("dispose",y);const R=c.indexOf(w.__bindingPointIndex);c.splice(R,1),i.deleteBuffer(a[w.id]),delete a[w.id],delete l[w.id]}function _(){for(const I in a)i.deleteBuffer(a[I]);c=[],a={},l={}}return{bind:d,update:h,dispose:_}}class g2{constructor(e={}){const{canvas:t=tS(),context:s=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=c;const S=new Uint32Array(4),M=new Int32Array(4);let E=null,y=null;const _=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=Fr,this.toneMappingExposure=1;const w=this;let R=!1,H=0,L=0,D=null,F=-1,P=null;const b=new Mn,z=new Mn;let Z=null;const $=new Pt(0);let te=0,de=t.width,j=t.height,re=1,V=null,le=null;const oe=new Mn(0,0,de,j),O=new Mn(0,0,de,j);let q=!1;const ke=new xd;let Q=!1,ie=!1;const fe=new Vt,xe=new K,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Oe(){return D===null?re:1}let G=s;function ye(N,J){return t.getContext(N,J)}try{const N={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fd}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){const J="webgl2";if(G=ye(J,N),G===null)throw ye(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ee,we,Me,Te,Pe,Ce,Xe,U,A,ne,Se,me,ve,qe,Ie,Ne,et,Ae,je,T,Ze,ze,ft,ut;function dt(){Ee=new vE(G),Ee.init(),ze=new Qw(G,Ee),we=new fE(G,Ee,e,ze),Me=new Zw(G),Te=new yE(G),Pe=new Fw,Ce=new Jw(G,Ee,Me,Pe,we,ze,Te),Xe=new hE(w),U=new gE(w),A=new CS(G),ft=new cE(G,A),ne=new _E(G,A,Te,ft),Se=new ME(G,ne,A,Te),je=new SE(G,we,Ce),Ne=new dE(Pe),me=new Ow(w,Xe,U,Ee,we,ft,Ne),ve=new oT(w,Pe),qe=new kw,Ie=new jw(Ee),Ae=new lE(w,Xe,U,Me,Se,v,d),et=new Kw(w,Se,we),ut=new lT(G,Te,we,Me),T=new uE(G,Ee,Te),Ze=new xE(G,Ee,Te),Te.programs=me.programs,w.capabilities=we,w.extensions=Ee,w.properties=Pe,w.renderLists=qe,w.shadowMap=et,w.state=Me,w.info=Te}dt();const W=new sT(w,G);this.xr=W,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const N=Ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(N){N!==void 0&&(re=N,this.setSize(de,j,!1))},this.getSize=function(N){return N.set(de,j)},this.setSize=function(N,J,ce=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=N,j=J,t.width=Math.floor(N*re),t.height=Math.floor(J*re),ce===!0&&(t.style.width=N+"px",t.style.height=J+"px"),this.setViewport(0,0,N,J)},this.getDrawingBufferSize=function(N){return N.set(de*re,j*re).floor()},this.setDrawingBufferSize=function(N,J,ce){de=N,j=J,re=ce,t.width=Math.floor(N*ce),t.height=Math.floor(J*ce),this.setViewport(0,0,N,J)},this.getCurrentViewport=function(N){return N.copy(b)},this.getViewport=function(N){return N.copy(oe)},this.setViewport=function(N,J,ce,ae){N.isVector4?oe.set(N.x,N.y,N.z,N.w):oe.set(N,J,ce,ae),Me.viewport(b.copy(oe).multiplyScalar(re).round())},this.getScissor=function(N){return N.copy(O)},this.setScissor=function(N,J,ce,ae){N.isVector4?O.set(N.x,N.y,N.z,N.w):O.set(N,J,ce,ae),Me.scissor(z.copy(O).multiplyScalar(re).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(N){Me.setScissorTest(q=N)},this.setOpaqueSort=function(N){V=N},this.setTransparentSort=function(N){le=N},this.getClearColor=function(N){return N.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(N=!0,J=!0,ce=!0){let ae=0;if(N){let ee=!1;if(D!==null){const Re=D.texture.format;ee=Re===y0||Re===x0||Re===_0}if(ee){const Re=D.texture.type,Ye=Re===zr||Re===da||Re===oc||Re===ha||Re===m0||Re===g0,tt=Ae.getClearColor(),st=Ae.getClearAlpha(),Je=tt.r,ht=tt.g,lt=tt.b;Ye?(S[0]=Je,S[1]=ht,S[2]=lt,S[3]=st,G.clearBufferuiv(G.COLOR,0,S)):(M[0]=Je,M[1]=ht,M[2]=lt,M[3]=st,G.clearBufferiv(G.COLOR,0,M))}else ae|=G.COLOR_BUFFER_BIT}J&&(ae|=G.DEPTH_BUFFER_BIT),ce&&(ae|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),qe.dispose(),Ie.dispose(),Pe.dispose(),Xe.dispose(),U.dispose(),Se.dispose(),ft.dispose(),ut.dispose(),me.dispose(),W.dispose(),W.removeEventListener("sessionstart",Rt),W.removeEventListener("sessionend",Ot),Ft.stop()};function Ve(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const N=Te.autoReset,J=et.enabled,ce=et.autoUpdate,ae=et.needsUpdate,ee=et.type;dt(),Te.autoReset=N,et.enabled=J,et.autoUpdate=ce,et.needsUpdate=ae,et.type=ee}function pe(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ue(N){const J=N.target;J.removeEventListener("dispose",Ue),rt(J)}function rt(N){vt(N),Pe.remove(N)}function vt(N){const J=Pe.get(N).programs;J!==void 0&&(J.forEach(function(ce){me.releaseProgram(ce)}),N.isShaderMaterial&&me.releaseShaderCache(N))}this.renderBufferDirect=function(N,J,ce,ae,ee,Re){J===null&&(J=Le);const Ye=ee.isMesh&&ee.matrixWorld.determinant()<0,tt=xt(N,J,ce,ae,ee);Me.setMaterial(ae,Ye);let st=ce.index,Je=1;if(ae.wireframe===!0){if(st=ne.getWireframeAttribute(ce),st===void 0)return;Je=2}const ht=ce.drawRange,lt=ce.attributes.position;let Ct=ht.start*Je,Dt=(ht.start+ht.count)*Je;Re!==null&&(Ct=Math.max(Ct,Re.start*Je),Dt=Math.min(Dt,(Re.start+Re.count)*Je)),st!==null?(Ct=Math.max(Ct,0),Dt=Math.min(Dt,st.count)):lt!=null&&(Ct=Math.max(Ct,0),Dt=Math.min(Dt,lt.count));const Ht=Dt-Ct;if(Ht<0||Ht===1/0)return;ft.setup(ee,ae,tt,ce,st);let $t,St=T;if(st!==null&&($t=A.get(st),St=Ze,St.setIndex($t)),ee.isMesh)ae.wireframe===!0?(Me.setLineWidth(ae.wireframeLinewidth*Oe()),St.setMode(G.LINES)):St.setMode(G.TRIANGLES);else if(ee.isLine){let nt=ae.linewidth;nt===void 0&&(nt=1),Me.setLineWidth(nt*Oe()),ee.isLineSegments?St.setMode(G.LINES):ee.isLineLoop?St.setMode(G.LINE_LOOP):St.setMode(G.LINE_STRIP)}else ee.isPoints?St.setMode(G.POINTS):ee.isSprite&&St.setMode(G.TRIANGLES);if(ee.isBatchedMesh)ee._multiDrawInstances!==null?St.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances):St.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)St.renderInstances(Ct,Ht,ee.count);else if(ce.isInstancedBufferGeometry){const nt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,rn=Math.min(ce.instanceCount,nt);St.renderInstances(Ct,Ht,rn)}else St.render(Ct,Ht)};function At(N,J,ce){N.transparent===!0&&N.side===nr&&N.forceSinglePass===!1?(N.side=$n,N.needsUpdate=!0,ln(N,J,ce),N.side=ki,N.needsUpdate=!0,ln(N,J,ce),N.side=nr):ln(N,J,ce)}this.compile=function(N,J,ce=null){ce===null&&(ce=N),y=Ie.get(ce),y.init(J),I.push(y),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),N!==ce&&N.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),y.setupLights();const ae=new Set;return N.traverse(function(ee){const Re=ee.material;if(Re)if(Array.isArray(Re))for(let Ye=0;Ye<Re.length;Ye++){const tt=Re[Ye];At(tt,ce,ee),ae.add(tt)}else At(Re,ce,ee),ae.add(Re)}),I.pop(),y=null,ae},this.compileAsync=function(N,J,ce=null){const ae=this.compile(N,J,ce);return new Promise(ee=>{function Re(){if(ae.forEach(function(Ye){Pe.get(Ye).currentProgram.isReady()&&ae.delete(Ye)}),ae.size===0){ee(N);return}setTimeout(Re,10)}Ee.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Et=null;function gt(N){Et&&Et(N)}function Rt(){Ft.stop()}function Ot(){Ft.start()}const Ft=new L0;Ft.setAnimationLoop(gt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(N){Et=N,W.setAnimationLoop(N),N===null?Ft.stop():Ft.start()},W.addEventListener("sessionstart",Rt),W.addEventListener("sessionend",Ot),this.render=function(N,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(J),J=W.getCamera()),N.isScene===!0&&N.onBeforeRender(w,N,J,D),y=Ie.get(N,I.length),y.init(J),I.push(y),fe.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ke.setFromProjectionMatrix(fe),ie=this.localClippingEnabled,Q=Ne.init(this.clippingPlanes,ie),E=qe.get(N,_.length),E.init(),_.push(E),W.enabled===!0&&W.isPresenting===!0){const Re=w.xr.getDepthSensingMesh();Re!==null&&Ge(Re,J,-1/0,w.sortObjects)}Ge(N,J,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(V,le),He=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,He&&Ae.addToRenderList(E,N),this.info.render.frame++,Q===!0&&Ne.beginShadows();const ce=y.state.shadowsArray;et.render(ce,N,J),Q===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=E.opaque,ee=E.transmissive;if(y.setupLights(),J.isArrayCamera){const Re=J.cameras;if(ee.length>0)for(let Ye=0,tt=Re.length;Ye<tt;Ye++){const st=Re[Ye];an(ae,ee,N,st)}He&&Ae.render(N);for(let Ye=0,tt=Re.length;Ye<tt;Ye++){const st=Re[Ye];Wt(E,N,st,st.viewport)}}else ee.length>0&&an(ae,ee,N,J),He&&Ae.render(N),Wt(E,N,J);D!==null&&(Ce.updateMultisampleRenderTarget(D),Ce.updateRenderTargetMipmap(D)),N.isScene===!0&&N.onAfterRender(w,N,J),ft.resetDefaultState(),F=-1,P=null,I.pop(),I.length>0?(y=I[I.length-1],Q===!0&&Ne.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function Ge(N,J,ce,ae){if(N.visible===!1)return;if(N.layers.test(J.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(J);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ke.intersectsSprite(N)){ae&&xe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(fe);const Ye=Se.update(N),tt=N.material;tt.visible&&E.push(N,Ye,tt,ce,xe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ke.intersectsObject(N))){const Ye=Se.update(N),tt=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),xe.copy(N.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),xe.copy(Ye.boundingSphere.center)),xe.applyMatrix4(N.matrixWorld).applyMatrix4(fe)),Array.isArray(tt)){const st=Ye.groups;for(let Je=0,ht=st.length;Je<ht;Je++){const lt=st[Je],Ct=tt[lt.materialIndex];Ct&&Ct.visible&&E.push(N,Ye,Ct,ce,xe.z,lt)}}else tt.visible&&E.push(N,Ye,tt,ce,xe.z,null)}}const Re=N.children;for(let Ye=0,tt=Re.length;Ye<tt;Ye++)Ge(Re[Ye],J,ce,ae)}function Wt(N,J,ce,ae){const ee=N.opaque,Re=N.transmissive,Ye=N.transparent;y.setupLightsView(ce),Q===!0&&Ne.setGlobalState(w.clippingPlanes,ce),ae&&Me.viewport(b.copy(ae)),ee.length>0&&on(ee,J,ce),Re.length>0&&on(Re,J,ce),Ye.length>0&&on(Ye,J,ce),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function an(N,J,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new ps(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?xc:zr,minFilter:hs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Re=y.state.transmissionRenderTarget[ae.id],Ye=ae.viewport||b;Re.setSize(Ye.z,Ye.w);const tt=w.getRenderTarget();w.setRenderTarget(Re),w.getClearColor($),te=w.getClearAlpha(),te<1&&w.setClearColor(16777215,.5),He?Ae.render(ce):w.clear();const st=w.toneMapping;w.toneMapping=Fr;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),Q===!0&&Ne.setGlobalState(w.clippingPlanes,ae),on(N,ce,ae),Ce.updateMultisampleRenderTarget(Re),Ce.updateRenderTargetMipmap(Re),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let lt=0,Ct=J.length;lt<Ct;lt++){const Dt=J[lt],Ht=Dt.object,$t=Dt.geometry,St=Dt.material,nt=Dt.group;if(St.side===nr&&Ht.layers.test(ae.layers)){const rn=St.side;St.side=$n,St.needsUpdate=!0,Mt(Ht,ce,ae,$t,St,nt),St.side=rn,St.needsUpdate=!0,ht=!0}}ht===!0&&(Ce.updateMultisampleRenderTarget(Re),Ce.updateRenderTargetMipmap(Re))}w.setRenderTarget(tt),w.setClearColor($,te),Je!==void 0&&(ae.viewport=Je),w.toneMapping=st}function on(N,J,ce){const ae=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,Re=N.length;ee<Re;ee++){const Ye=N[ee],tt=Ye.object,st=Ye.geometry,Je=ae===null?Ye.material:ae,ht=Ye.group;tt.layers.test(ce.layers)&&Mt(tt,J,ce,st,Je,ht)}}function Mt(N,J,ce,ae,ee,Re){N.onBeforeRender(w,J,ce,ae,ee,Re),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ee.onBeforeRender(w,J,ce,ae,N,Re),ee.transparent===!0&&ee.side===nr&&ee.forceSinglePass===!1?(ee.side=$n,ee.needsUpdate=!0,w.renderBufferDirect(ce,J,ae,ee,N,Re),ee.side=ki,ee.needsUpdate=!0,w.renderBufferDirect(ce,J,ae,ee,N,Re),ee.side=nr):w.renderBufferDirect(ce,J,ae,ee,N,Re),N.onAfterRender(w,J,ce,ae,ee,Re)}function ln(N,J,ce){J.isScene!==!0&&(J=Le);const ae=Pe.get(N),ee=y.state.lights,Re=y.state.shadowsArray,Ye=ee.state.version,tt=me.getParameters(N,ee.state,Re,J,ce),st=me.getProgramCacheKey(tt);let Je=ae.programs;ae.environment=N.isMeshStandardMaterial?J.environment:null,ae.fog=J.fog,ae.envMap=(N.isMeshStandardMaterial?U:Xe).get(N.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&N.envMap===null?J.environmentRotation:N.envMapRotation,Je===void 0&&(N.addEventListener("dispose",Ue),Je=new Map,ae.programs=Je);let ht=Je.get(st);if(ht!==void 0){if(ae.currentProgram===ht&&ae.lightsStateVersion===Ye)return be(N,tt),ht}else tt.uniforms=me.getUniforms(N),N.onBuild(ce,tt,w),N.onBeforeCompile(tt,w),ht=me.acquireProgram(tt,st),Je.set(st,ht),ae.uniforms=tt.uniforms;const lt=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(lt.clippingPlanes=Ne.uniform),be(N,tt),ae.needsLights=Lt(N),ae.lightsStateVersion=Ye,ae.needsLights&&(lt.ambientLightColor.value=ee.state.ambient,lt.lightProbe.value=ee.state.probe,lt.directionalLights.value=ee.state.directional,lt.directionalLightShadows.value=ee.state.directionalShadow,lt.spotLights.value=ee.state.spot,lt.spotLightShadows.value=ee.state.spotShadow,lt.rectAreaLights.value=ee.state.rectArea,lt.ltc_1.value=ee.state.rectAreaLTC1,lt.ltc_2.value=ee.state.rectAreaLTC2,lt.pointLights.value=ee.state.point,lt.pointLightShadows.value=ee.state.pointShadow,lt.hemisphereLights.value=ee.state.hemi,lt.directionalShadowMap.value=ee.state.directionalShadowMap,lt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,lt.spotShadowMap.value=ee.state.spotShadowMap,lt.spotLightMatrix.value=ee.state.spotLightMatrix,lt.spotLightMap.value=ee.state.spotLightMap,lt.pointShadowMap.value=ee.state.pointShadowMap,lt.pointShadowMatrix.value=ee.state.pointShadowMatrix),ae.currentProgram=ht,ae.uniformsList=null,ht}function An(N){if(N.uniformsList===null){const J=N.currentProgram.getUniforms();N.uniformsList=rc.seqWithValue(J.seq,N.uniforms)}return N.uniformsList}function be(N,J){const ce=Pe.get(N);ce.outputColorSpace=J.outputColorSpace,ce.batching=J.batching,ce.batchingColor=J.batchingColor,ce.instancing=J.instancing,ce.instancingColor=J.instancingColor,ce.instancingMorph=J.instancingMorph,ce.skinning=J.skinning,ce.morphTargets=J.morphTargets,ce.morphNormals=J.morphNormals,ce.morphColors=J.morphColors,ce.morphTargetsCount=J.morphTargetsCount,ce.numClippingPlanes=J.numClippingPlanes,ce.numIntersection=J.numClipIntersection,ce.vertexAlphas=J.vertexAlphas,ce.vertexTangents=J.vertexTangents,ce.toneMapping=J.toneMapping}function xt(N,J,ce,ae,ee){J.isScene!==!0&&(J=Le),Ce.resetTextureUnits();const Re=J.fog,Ye=ae.isMeshStandardMaterial?J.environment:null,tt=D===null?w.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:kr,st=(ae.isMeshStandardMaterial?U:Xe).get(ae.envMap||Ye),Je=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),lt=!!ce.morphAttributes.position,Ct=!!ce.morphAttributes.normal,Dt=!!ce.morphAttributes.color;let Ht=Fr;ae.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ht=w.toneMapping);const $t=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,St=$t!==void 0?$t.length:0,nt=Pe.get(ae),rn=y.state.lights;if(Q===!0&&(ie===!0||N!==P)){const vn=N===P&&ae.id===F;Ne.setState(ae,N,vn)}let yt=!1;ae.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==rn.state.version||nt.outputColorSpace!==tt||ee.isBatchedMesh&&nt.batching===!1||!ee.isBatchedMesh&&nt.batching===!0||ee.isBatchedMesh&&nt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&nt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&nt.instancing===!1||!ee.isInstancedMesh&&nt.instancing===!0||ee.isSkinnedMesh&&nt.skinning===!1||!ee.isSkinnedMesh&&nt.skinning===!0||ee.isInstancedMesh&&nt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&nt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&nt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&nt.instancingMorph===!1&&ee.morphTexture!==null||nt.envMap!==st||ae.fog===!0&&nt.fog!==Re||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Ne.numPlanes||nt.numIntersection!==Ne.numIntersection)||nt.vertexAlphas!==Je||nt.vertexTangents!==ht||nt.morphTargets!==lt||nt.morphNormals!==Ct||nt.morphColors!==Dt||nt.toneMapping!==Ht||nt.morphTargetsCount!==St)&&(yt=!0):(yt=!0,nt.__version=ae.version);let Un=nt.currentProgram;yt===!0&&(Un=ln(ae,J,ee));let Kn=!1,Zn=!1,oi=!1;const zt=Un.getUniforms(),fn=nt.uniforms;if(Me.useProgram(Un.program)&&(Kn=!0,Zn=!0,oi=!0),ae.id!==F&&(F=ae.id,Zn=!0),Kn||P!==N){zt.setValue(G,"projectionMatrix",N.projectionMatrix),zt.setValue(G,"viewMatrix",N.matrixWorldInverse);const vn=zt.map.cameraPosition;vn!==void 0&&vn.setValue(G,xe.setFromMatrixPosition(N.matrixWorld)),we.logarithmicDepthBuffer&&zt.setValue(G,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(G,"isOrthographic",N.isOrthographicCamera===!0),P!==N&&(P=N,Zn=!0,oi=!0)}if(ee.isSkinnedMesh){zt.setOptional(G,ee,"bindMatrix"),zt.setOptional(G,ee,"bindMatrixInverse");const vn=ee.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),zt.setValue(G,"boneTexture",vn.boneTexture,Ce))}ee.isBatchedMesh&&(zt.setOptional(G,ee,"batchingTexture"),zt.setValue(G,"batchingTexture",ee._matricesTexture,Ce),zt.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&zt.setValue(G,"batchingColorTexture",ee._colorsTexture,Ce));const Hn=ce.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&je.update(ee,ce,Un),(Zn||nt.receiveShadow!==ee.receiveShadow)&&(nt.receiveShadow=ee.receiveShadow,zt.setValue(G,"receiveShadow",ee.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(fn.envMap.value=st,fn.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&J.environment!==null&&(fn.envMapIntensity.value=J.environmentIntensity),Zn&&(zt.setValue(G,"toneMappingExposure",w.toneMappingExposure),nt.needsLights&&Yt(fn,oi),Re&&ae.fog===!0&&ve.refreshFogUniforms(fn,Re),ve.refreshMaterialUniforms(fn,ae,re,j,y.state.transmissionRenderTarget[N.id]),rc.upload(G,An(nt),fn,Ce)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(rc.upload(G,An(nt),fn,Ce),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(G,"center",ee.center),zt.setValue(G,"modelViewMatrix",ee.modelViewMatrix),zt.setValue(G,"normalMatrix",ee.normalMatrix),zt.setValue(G,"modelMatrix",ee.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const vn=ae.uniformsGroups;for(let Hi=0,Br=vn.length;Hi<Br;Hi++){const Hr=vn[Hi];ut.update(Hr,Un),ut.bind(Hr,Un)}}return Un}function Yt(N,J){N.ambientLightColor.needsUpdate=J,N.lightProbe.needsUpdate=J,N.directionalLights.needsUpdate=J,N.directionalLightShadows.needsUpdate=J,N.pointLights.needsUpdate=J,N.pointLightShadows.needsUpdate=J,N.spotLights.needsUpdate=J,N.spotLightShadows.needsUpdate=J,N.rectAreaLights.needsUpdate=J,N.hemisphereLights.needsUpdate=J}function Lt(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(N,J,ce){Pe.get(N.texture).__webglTexture=J,Pe.get(N.depthTexture).__webglTexture=ce;const ae=Pe.get(N);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=ce===void 0,ae.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,J){const ce=Pe.get(N);ce.__webglFramebuffer=J,ce.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(N,J=0,ce=0){D=N,H=J,L=ce;let ae=!0,ee=null,Re=!1,Ye=!1;if(N){const st=Pe.get(N);st.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(G.FRAMEBUFFER,null),ae=!1):st.__webglFramebuffer===void 0?Ce.setupRenderTarget(N):st.__hasExternalTextures&&Ce.rebindTextures(N,Pe.get(N.texture).__webglTexture,Pe.get(N.depthTexture).__webglTexture);const Je=N.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Ye=!0);const ht=Pe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ht[J])?ee=ht[J][ce]:ee=ht[J],Re=!0):N.samples>0&&Ce.useMultisampledRTT(N)===!1?ee=Pe.get(N).__webglMultisampledFramebuffer:Array.isArray(ht)?ee=ht[ce]:ee=ht,b.copy(N.viewport),z.copy(N.scissor),Z=N.scissorTest}else b.copy(oe).multiplyScalar(re).floor(),z.copy(O).multiplyScalar(re).floor(),Z=q;if(Me.bindFramebuffer(G.FRAMEBUFFER,ee)&&ae&&Me.drawBuffers(N,ee),Me.viewport(b),Me.scissor(z),Me.setScissorTest(Z),Re){const st=Pe.get(N.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+J,st.__webglTexture,ce)}else if(Ye){const st=Pe.get(N.texture),Je=J||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,st.__webglTexture,ce||0,Je)}F=-1},this.readRenderTargetPixels=function(N,J,ce,ae,ee,Re,Ye){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Pe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Me.bindFramebuffer(G.FRAMEBUFFER,tt);try{const st=N.texture,Je=st.format,ht=st.type;if(!we.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=N.width-ae&&ce>=0&&ce<=N.height-ee&&G.readPixels(J,ce,ae,ee,ze.convert(Je),ze.convert(ht),Re)}finally{const st=D!==null?Pe.get(D).__webglFramebuffer:null;Me.bindFramebuffer(G.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(N,J,ce,ae,ee,Re,Ye){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Pe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(tt=tt[Ye]),tt){Me.bindFramebuffer(G.FRAMEBUFFER,tt);try{const st=N.texture,Je=st.format,ht=st.type;if(!we.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=N.width-ae&&ce>=0&&ce<=N.height-ee){const lt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,lt),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(J,ce,ae,ee,ze.convert(Je),ze.convert(ht),0),G.flush();const Ct=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);await nS(G,Ct,4);try{G.bindBuffer(G.PIXEL_PACK_BUFFER,lt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re)}finally{G.deleteBuffer(lt),G.deleteSync(Ct)}return Re}}finally{const st=D!==null?Pe.get(D).__webglFramebuffer:null;Me.bindFramebuffer(G.FRAMEBUFFER,st)}}},this.copyFramebufferToTexture=function(N,J=null,ce=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,N=arguments[1]);const ae=Math.pow(2,-ce),ee=Math.floor(N.image.width*ae),Re=Math.floor(N.image.height*ae),Ye=J!==null?J.x:0,tt=J!==null?J.y:0;Ce.setTexture2D(N,0),G.copyTexSubImage2D(G.TEXTURE_2D,ce,0,0,Ye,tt,ee,Re),Me.unbindTexture()},this.copyTextureToTexture=function(N,J,ce=null,ae=null,ee=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,N=arguments[1],J=arguments[2],ee=arguments[3]||0,ce=null);let Re,Ye,tt,st,Je,ht;ce!==null?(Re=ce.max.x-ce.min.x,Ye=ce.max.y-ce.min.y,tt=ce.min.x,st=ce.min.y):(Re=N.image.width,Ye=N.image.height,tt=0,st=0),ae!==null?(Je=ae.x,ht=ae.y):(Je=0,ht=0);const lt=ze.convert(J.format),Ct=ze.convert(J.type);Ce.setTexture2D(J,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);const Dt=G.getParameter(G.UNPACK_ROW_LENGTH),Ht=G.getParameter(G.UNPACK_IMAGE_HEIGHT),$t=G.getParameter(G.UNPACK_SKIP_PIXELS),St=G.getParameter(G.UNPACK_SKIP_ROWS),nt=G.getParameter(G.UNPACK_SKIP_IMAGES),rn=N.isCompressedTexture?N.mipmaps[ee]:N.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,rn.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,rn.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,tt),G.pixelStorei(G.UNPACK_SKIP_ROWS,st),N.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ee,Je,ht,Re,Ye,lt,Ct,rn.data):N.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ee,Je,ht,rn.width,rn.height,lt,rn.data):G.texSubImage2D(G.TEXTURE_2D,ee,Je,ht,lt,Ct,rn),G.pixelStorei(G.UNPACK_ROW_LENGTH,Dt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht),G.pixelStorei(G.UNPACK_SKIP_PIXELS,$t),G.pixelStorei(G.UNPACK_SKIP_ROWS,St),G.pixelStorei(G.UNPACK_SKIP_IMAGES,nt),ee===0&&J.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(N,J,ce=null,ae=null,ee=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ce=arguments[0]||null,ae=arguments[1]||null,N=arguments[2],J=arguments[3],ee=arguments[4]||0);let Re,Ye,tt,st,Je,ht,lt,Ct,Dt;const Ht=N.isCompressedTexture?N.mipmaps[ee]:N.image;ce!==null?(Re=ce.max.x-ce.min.x,Ye=ce.max.y-ce.min.y,tt=ce.max.z-ce.min.z,st=ce.min.x,Je=ce.min.y,ht=ce.min.z):(Re=Ht.width,Ye=Ht.height,tt=Ht.depth,st=0,Je=0,ht=0),ae!==null?(lt=ae.x,Ct=ae.y,Dt=ae.z):(lt=0,Ct=0,Dt=0);const $t=ze.convert(J.format),St=ze.convert(J.type);let nt;if(J.isData3DTexture)Ce.setTexture3D(J,0),nt=G.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)Ce.setTexture2DArray(J,0),nt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);const rn=G.getParameter(G.UNPACK_ROW_LENGTH),yt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Un=G.getParameter(G.UNPACK_SKIP_PIXELS),Kn=G.getParameter(G.UNPACK_SKIP_ROWS),Zn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ht.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,st),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ht),N.isDataTexture||N.isData3DTexture?G.texSubImage3D(nt,ee,lt,Ct,Dt,Re,Ye,tt,$t,St,Ht.data):J.isCompressedArrayTexture?G.compressedTexSubImage3D(nt,ee,lt,Ct,Dt,Re,Ye,tt,$t,Ht.data):G.texSubImage3D(nt,ee,lt,Ct,Dt,Re,Ye,tt,$t,St,Ht),G.pixelStorei(G.UNPACK_ROW_LENGTH,rn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Un),G.pixelStorei(G.UNPACK_SKIP_ROWS,Kn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Zn),ee===0&&J.generateMipmaps&&G.generateMipmap(nt),Me.unbindTexture()},this.initRenderTarget=function(N){Pe.get(N).__webglFramebuffer===void 0&&Ce.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Ce.setTextureCube(N,0):N.isData3DTexture?Ce.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Ce.setTexture2DArray(N,0):Ce.setTexture2D(N,0),Me.unbindTexture()},this.resetState=function(){H=0,L=0,D=null,Me.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hd?"display-p3":"srgb",t.unpackColorSpace=Bt.workingColorSpace===yc?"display-p3":"srgb"}}class v2 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return md("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,s){e*=this.stride,s*=t.stride;for(let a=0,l=this.stride;a<l;a++)this.array[e+a]=t.array[s+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(t,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new K;class k0{constructor(e,t,s,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=s,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,s=this.data.count;t<s;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let s=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(s=Ci(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=kt(s,this.array)),this.data.array[e*this.data.stride+this.offset+t]=s,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this}setXYZ(e,t,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),s=kt(s,this.array),a=kt(a,this.array),l=kt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=s,this.data.array[e+2]=a,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return new mi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new k0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let s=0;s<this.count;s++){const a=s*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[a+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class uT extends In{constructor(e=null,t=1,s=1,a,l,c,f,d,h=Yn,m=Yn,g,v){super(null,c,f,d,h,m,a,l,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pg extends mi{constructor(e,t,s,a=1){super(e,t,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ia=new Vt,Lg=new Vt,$l=[],Ng=new gs,fT=new Vt,ro=new ai,so=new va;class _2 extends ai{constructor(e,t,s){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pg(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<s;a++)this.setMatrixAt(a,fT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),Ng.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(Ng)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<t;s++)this.getMatrixAt(s,ia),so.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const s=t.morphTargetInfluences,a=this.morphTexture.source.data.data,l=s.length+1,c=e*l+1;for(let f=0;f<s.length;f++)s[f]=a[c+f]}raycast(e,t){const s=this.matrixWorld,a=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(s),e.ray.intersectsSphere(so)!==!1))for(let l=0;l<a;l++){this.getMatrixAt(l,ia),Lg.multiplyMatrices(s,ia),ro.matrixWorld=Lg,ro.raycast(e,$l);for(let c=0,f=$l.length;c<f;c++){const d=$l[c];d.instanceId=l,d.object=this,t.push(d)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const s=t.morphTargetInfluences,a=s.length+1;this.morphTexture===null&&(this.morphTexture=new uT(new Float32Array(a*this.count),a,this.count,v0,ar));const l=this.morphTexture.source.data.data;let c=0;for(let h=0;h<s.length;h++)c+=s[h];const f=this.geometry.morphTargetsRelative?1:1-c,d=a*e;l[d]=f,l.set(s,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dT extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new K,hc=new K,Ig=new Vt,ao=new gd,Kl=new va,Vf=new K,Dg=new K;class hT extends Tn{constructor(e=new Bn,t=new dT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)dc.fromBufferAttribute(t,a-1),hc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=dc.distanceTo(hc);e.setAttribute("lineDistance",new Jt(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Kl.copy(s.boundingSphere),Kl.applyMatrix4(a),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;Ig.copy(a).invert(),ao.copy(e.ray).applyMatrix4(Ig);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=s.index,v=s.attributes.position;if(m!==null){const S=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=h){const _=m.getX(E),I=m.getX(E+1),w=Zl(this,e,ao,d,_,I);w&&t.push(w)}if(this.isLineLoop){const E=m.getX(M-1),y=m.getX(S),_=Zl(this,e,ao,d,E,y);_&&t.push(_)}}else{const S=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=S,y=M-1;E<y;E+=h){const _=Zl(this,e,ao,d,E,E+1);_&&t.push(_)}if(this.isLineLoop){const E=Zl(this,e,ao,d,M-1,S);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Zl(i,e,t,s,a,l){const c=i.geometry.attributes.position;if(dc.fromBufferAttribute(c,a),hc.fromBufferAttribute(c,l),t.distanceSqToSegment(dc,hc,Vf,Dg)>s)return;Vf.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Vf);if(!(d<e.near||d>e.far))return{distance:d,point:Dg.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,object:i}}const Ug=new K,Og=new K;class x2 extends hT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Ug.fromBufferAttribute(t,a),Og.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Ug.distanceTo(Og);e.setAttribute("lineDistance",new Jt(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const s=this.getUtoTmapping(e);return this.getPoint(s,t)}getPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return t}getSpacedPoints(e=5){const t=[];for(let s=0;s<=e;s++)t.push(this.getPointAt(s/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let s,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)s=this.getPoint(c/e),l+=s.distanceTo(a),t.push(l),a=s;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const s=this.getLengths();let a=0;const l=s.length;let c;t?c=t:c=e*s[l-1];let f=0,d=l-1,h;for(;f<=d;)if(a=Math.floor(f+(d-f)/2),h=s[a]-c,h<0)f=a+1;else if(h>0)d=a-1;else{d=a;break}if(a=d,s[a]===c)return a/(l-1);const m=s[a],v=s[a+1]-m,S=(c-m)/v;return(a+S)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),d=t||(c.isVector2?new $e:new K);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const s=this.getUtoTmapping(e);return this.getTangent(s,t)}computeFrenetFrames(e,t){const s=new K,a=[],l=[],c=[],f=new K,d=new Vt;for(let S=0;S<=e;S++){const M=S/e;a[S]=this.getTangentAt(M,new K)}l[0]=new K,c[0]=new K;let h=Number.MAX_VALUE;const m=Math.abs(a[0].x),g=Math.abs(a[0].y),v=Math.abs(a[0].z);m<=h&&(h=m,s.set(1,0,0)),g<=h&&(h=g,s.set(0,1,0)),v<=h&&s.set(0,0,1),f.crossVectors(a[0],s).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(a[S-1],a[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(pn(a[S-1].dot(a[S]),-1,1));l[S].applyMatrix4(d.makeRotationAxis(f,M))}c[S].crossVectors(a[S],l[S])}if(t===!0){let S=Math.acos(pn(l[0].dot(l[e]),-1,1));S/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(d.makeRotationAxis(a[M],S*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Sd extends Bi{constructor(e=0,t=0,s=1,a=1,l=0,c=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=s,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=d}getPoint(e,t=new $e){const s=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=d-this.aX,S=h-this.aY;d=v*m-S*g+this.aX,h=v*g+S*m+this.aY}return s.set(d,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class pT extends Sd{constructor(e,t,s,a,l,c){super(e,t,s,s,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Md(){let i=0,e=0,t=0,s=0;function a(l,c,f,d){i=l,e=f,t=-3*l+3*c-2*f-d,s=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){a(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,m,g){let v=(c-l)/h-(f-l)/(h+m)+(f-c)/m,S=(f-c)/m-(d-c)/(m+g)+(d-f)/g;v*=m,S*=m,a(c,f,v,S)},calc:function(l){const c=l*l,f=c*l;return i+e*l+t*c+s*f}}}const Jl=new K,Gf=new Md,Wf=new Md,jf=new Md;class mT extends Bi{constructor(e=[],t=!1,s="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=s,this.tension=a}getPoint(e,t=new K){const s=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,m;this.closed||f>0?h=a[(f-1)%l]:(Jl.subVectors(a[0],a[1]).add(a[0]),h=Jl);const g=a[f%l],v=a[(f+1)%l];if(this.closed||f+2<l?m=a[(f+2)%l]:(Jl.subVectors(a[l-1],a[l-2]).add(a[l-1]),m=Jl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(g),S),E=Math.pow(g.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(m),S);E<1e-4&&(E=1),M<1e-4&&(M=E),y<1e-4&&(y=E),Gf.initNonuniformCatmullRom(h.x,g.x,v.x,m.x,M,E,y),Wf.initNonuniformCatmullRom(h.y,g.y,v.y,m.y,M,E,y),jf.initNonuniformCatmullRom(h.z,g.z,v.z,m.z,M,E,y)}else this.curveType==="catmullrom"&&(Gf.initCatmullRom(h.x,g.x,v.x,m.x,this.tension),Wf.initCatmullRom(h.y,g.y,v.y,m.y,this.tension),jf.initCatmullRom(h.z,g.z,v.z,m.z,this.tension));return s.set(Gf.calc(d),Wf.calc(d),jf.calc(d)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new K().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fg(i,e,t,s,a){const l=(s-e)*.5,c=(a-t)*.5,f=i*i,d=i*f;return(2*t-2*s+l+c)*d+(-3*t+3*s-2*l-c)*f+l*i+t}function gT(i,e){const t=1-i;return t*t*e}function vT(i,e){return 2*(1-i)*i*e}function _T(i,e){return i*i*e}function fo(i,e,t,s){return gT(i,e)+vT(i,t)+_T(i,s)}function xT(i,e){const t=1-i;return t*t*t*e}function yT(i,e){const t=1-i;return 3*t*t*i*e}function ST(i,e){return 3*(1-i)*i*i*e}function MT(i,e){return i*i*i*e}function ho(i,e,t,s,a){return xT(i,e)+yT(i,t)+ST(i,s)+MT(i,a)}class B0 extends Bi{constructor(e=new $e,t=new $e,s=new $e,a=new $e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return s.set(ho(e,a.x,l.x,c.x,f.x),ho(e,a.y,l.y,c.y,f.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ET extends Bi{constructor(e=new K,t=new K,s=new K,a=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=s,this.v3=a}getPoint(e,t=new K){const s=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return s.set(ho(e,a.x,l.x,c.x,f.x),ho(e,a.y,l.y,c.y,f.y),ho(e,a.z,l.z,c.z,f.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class H0 extends Bi{constructor(e=new $e,t=new $e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $e){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wT extends Bi{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const s=t;return e===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(e).add(this.v1)),s}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V0 extends Bi{constructor(e=new $e,t=new $e,s=new $e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new $e){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class G0 extends Bi{constructor(e=new K,t=new K,s=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=s}getPoint(e,t=new K){const s=t,a=this.v0,l=this.v1,c=this.v2;return s.set(fo(e,a.x,l.x,c.x),fo(e,a.y,l.y,c.y),fo(e,a.z,l.z,c.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class W0 extends Bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $e){const s=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,d=a[c===0?c:c-1],h=a[c],m=a[c>a.length-2?a.length-1:c+1],g=a[c>a.length-3?a.length-1:c+2];return s.set(Fg(f,d.x,h.x,m.x,g.x),Fg(f,d.y,h.y,m.y,g.y)),s}copy(e){super.copy(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,s=this.points.length;t<s;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,s=e.points.length;t<s;t++){const a=e.points[t];this.points.push(new $e().fromArray(a))}return this}}var pc=Object.freeze({__proto__:null,ArcCurve:pT,CatmullRomCurve3:mT,CubicBezierCurve:B0,CubicBezierCurve3:ET,EllipseCurve:Sd,LineCurve:H0,LineCurve3:wT,QuadraticBezierCurve:V0,QuadraticBezierCurve3:G0,SplineCurve:W0});class TT extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const s=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[s](t,e))}return this}getPoint(e,t){const s=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=s){const c=a[l]-s,f=this.curves[l],d=f.getLength(),h=d===0?0:1-c/d;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let s=0,a=this.curves.length;s<a;s++)t+=this.curves[s].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let s=0;s<=e;s++)t.push(this.getPoint(s/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let s;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,d=c.getPoints(f);for(let h=0;h<d.length;h++){const m=d[h];s&&s.equals(m)||(t.push(m),s=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,s=this.curves.length;t<s;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,s=e.curves.length;t<s;t++){const a=e.curves[t];this.curves.push(new pc[a.type]().fromJSON(a))}return this}}class rd extends TT{constructor(e){super(),this.type="Path",this.currentPoint=new $e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,s=e.length;t<s;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const s=new H0(this.currentPoint.clone(),new $e(e,t));return this.curves.push(s),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,s,a){const l=new V0(this.currentPoint.clone(),new $e(e,t),new $e(s,a));return this.curves.push(l),this.currentPoint.set(s,a),this}bezierCurveTo(e,t,s,a,l,c){const f=new B0(this.currentPoint.clone(),new $e(e,t),new $e(s,a),new $e(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),s=new W0(t);return this.curves.push(s),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,s,a,l,c){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+f,t+d,s,a,l,c),this}absarc(e,t,s,a,l,c){return this.absellipse(e,t,s,s,a,l,c),this}ellipse(e,t,s,a,l,c,f,d){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+h,t+m,s,a,l,c,f,d),this}absellipse(e,t,s,a,l,c,f,d){const h=new Sd(e,t,s,a,l,c,f,d);if(this.curves.length>0){const g=h.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(h);const m=h.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class j0 extends Bn{constructor(e=1,t=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:s,thetaLength:a},t=Math.max(3,t);const l=[],c=[],f=[],d=[],h=new K,m=new $e;c.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const S=s+g/t*a;h.x=e*Math.cos(S),h.y=e*Math.sin(S),c.push(h.x,h.y,h.z),f.push(0,0,1),m.x=(c[v]/e+1)/2,m.y=(c[v+1]/e+1)/2,d.push(m.x,m.y)}for(let g=1;g<=t;g++)l.push(g,g+1,0);this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new j0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class X0 extends Bn{constructor(e=1,t=1,s=1,a=32,l=1,c=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d};const h=this;a=Math.floor(a),l=Math.floor(l);const m=[],g=[],v=[],S=[];let M=0;const E=[],y=s/2;let _=0;I(),c===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(S,2));function I(){const R=new K,H=new K;let L=0;const D=(t-e)/s;for(let F=0;F<=l;F++){const P=[],b=F/l,z=b*(t-e)+e;for(let Z=0;Z<=a;Z++){const $=Z/a,te=$*d+f,de=Math.sin(te),j=Math.cos(te);H.x=z*de,H.y=-b*s+y,H.z=z*j,g.push(H.x,H.y,H.z),R.set(de,D,j).normalize(),v.push(R.x,R.y,R.z),S.push($,1-b),P.push(M++)}E.push(P)}for(let F=0;F<a;F++)for(let P=0;P<l;P++){const b=E[P][F],z=E[P+1][F],Z=E[P+1][F+1],$=E[P][F+1];m.push(b,z,$),m.push(z,Z,$),L+=6}h.addGroup(_,L,0),_+=L}function w(R){const H=M,L=new $e,D=new K;let F=0;const P=R===!0?e:t,b=R===!0?1:-1;for(let Z=1;Z<=a;Z++)g.push(0,y*b,0),v.push(0,b,0),S.push(.5,.5),M++;const z=M;for(let Z=0;Z<=a;Z++){const te=Z/a*d+f,de=Math.cos(te),j=Math.sin(te);D.x=P*j,D.y=y*b,D.z=P*de,g.push(D.x,D.y,D.z),v.push(0,b,0),L.x=de*.5+.5,L.y=j*.5*b+.5,S.push(L.x,L.y),M++}for(let Z=0;Z<a;Z++){const $=H+Z,te=z+Z;R===!0?m.push(te,te+1,$):m.push(te+1,te,$),F+=3}h.addGroup(_,F,R===!0?1:2),_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new X0(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sc extends rd{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let s=0,a=this.holes.length;s<a;s++)t[s]=this.holes[s].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,s=this.holes.length;t<s;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,s=e.holes.length;t<s;t++){const a=e.holes[t];this.holes.push(new rd().fromJSON(a))}return this}}const AT={triangulate:function(i,e,t=2){const s=e&&e.length,a=s?e[0]*t:i.length;let l=q0(i,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,d,h,m,g,v,S;if(s&&(l=LT(i,e,l,t)),i.length>80*t){f=h=i[0],d=m=i[1];for(let M=t;M<a;M+=t)g=i[M],v=i[M+1],g<f&&(f=g),v<d&&(d=v),g>h&&(h=g),v>m&&(m=v);S=Math.max(h-f,m-d),S=S!==0?32767/S:0}return _o(l,c,t,f,d,S,0),c}};function q0(i,e,t,s,a){let l,c;if(a===VT(i,e,t,s)>0)for(l=e;l<t;l+=s)c=zg(l,i[l],i[l+1],c);else for(l=t-s;l>=e;l-=s)c=zg(l,i[l],i[l+1],c);return c&&Ec(c,c.next)&&(yo(c),c=c.next),c}function ms(i,e){if(!i)return i;e||(e=i);let t=i,s;do if(s=!1,!t.steiner&&(Ec(t,t.next)||tn(t.prev,t,t.next)===0)){if(yo(t),t=e=t.prev,t===t.next)break;s=!0}else t=t.next;while(s||t!==e);return e}function _o(i,e,t,s,a,l,c){if(!i)return;!c&&l&&OT(i,s,a,l);let f=i,d,h;for(;i.prev!==i.next;){if(d=i.prev,h=i.next,l?bT(i,s,a,l):CT(i)){e.push(d.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),yo(i),i=h.next,f=h.next;continue}if(i=h,i===f){c?c===1?(i=RT(ms(i),e,t),_o(i,e,t,s,a,l,2)):c===2&&PT(i,e,t,s,a,l):_o(ms(i),e,t,s,a,l,1);break}}}function CT(i){const e=i.prev,t=i,s=i.next;if(tn(e,t,s)>=0)return!1;const a=e.x,l=t.x,c=s.x,f=e.y,d=t.y,h=s.y,m=a<l?a<c?a:c:l<c?l:c,g=f<d?f<h?f:h:d<h?d:h,v=a>l?a>c?a:c:l>c?l:c,S=f>d?f>h?f:h:d>h?d:h;let M=s.next;for(;M!==e;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=S&&sa(a,f,l,d,c,h,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function bT(i,e,t,s){const a=i.prev,l=i,c=i.next;if(tn(a,l,c)>=0)return!1;const f=a.x,d=l.x,h=c.x,m=a.y,g=l.y,v=c.y,S=f<d?f<h?f:h:d<h?d:h,M=m<g?m<v?m:v:g<v?g:v,E=f>d?f>h?f:h:d>h?d:h,y=m>g?m>v?m:v:g>v?g:v,_=sd(S,M,e,t,s),I=sd(E,y,e,t,s);let w=i.prevZ,R=i.nextZ;for(;w&&w.z>=_&&R&&R.z<=I;){if(w.x>=S&&w.x<=E&&w.y>=M&&w.y<=y&&w!==a&&w!==c&&sa(f,m,d,g,h,v,w.x,w.y)&&tn(w.prev,w,w.next)>=0||(w=w.prevZ,R.x>=S&&R.x<=E&&R.y>=M&&R.y<=y&&R!==a&&R!==c&&sa(f,m,d,g,h,v,R.x,R.y)&&tn(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;w&&w.z>=_;){if(w.x>=S&&w.x<=E&&w.y>=M&&w.y<=y&&w!==a&&w!==c&&sa(f,m,d,g,h,v,w.x,w.y)&&tn(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;R&&R.z<=I;){if(R.x>=S&&R.x<=E&&R.y>=M&&R.y<=y&&R!==a&&R!==c&&sa(f,m,d,g,h,v,R.x,R.y)&&tn(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function RT(i,e,t){let s=i;do{const a=s.prev,l=s.next.next;!Ec(a,l)&&Y0(a,s,s.next,l)&&xo(a,l)&&xo(l,a)&&(e.push(a.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),yo(s),yo(s.next),s=i=l),s=s.next}while(s!==i);return ms(s)}function PT(i,e,t,s,a,l){let c=i;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&kT(c,f)){let d=$0(c,f);c=ms(c,c.next),d=ms(d,d.next),_o(c,e,t,s,a,l,0),_o(d,e,t,s,a,l,0);return}f=f.next}c=c.next}while(c!==i)}function LT(i,e,t,s){const a=[];let l,c,f,d,h;for(l=0,c=e.length;l<c;l++)f=e[l]*s,d=l<c-1?e[l+1]*s:i.length,h=q0(i,f,d,s,!1),h===h.next&&(h.steiner=!0),a.push(zT(h));for(a.sort(NT),l=0;l<a.length;l++)t=IT(a[l],t);return t}function NT(i,e){return i.x-e.x}function IT(i,e){const t=DT(i,e);if(!t)return e;const s=$0(t,i);return ms(s,s.next),ms(t,t.next)}function DT(i,e){let t=e,s=-1/0,a;const l=i.x,c=i.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=l&&v>s&&(s=v,a=t.x<t.next.x?t:t.next,v===l))return a}t=t.next}while(t!==e);if(!a)return null;const f=a,d=a.x,h=a.y;let m=1/0,g;t=a;do l>=t.x&&t.x>=d&&l!==t.x&&sa(c<h?l:s,c,d,h,c<h?s:l,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(l-t.x),xo(t,i)&&(g<m||g===m&&(t.x>a.x||t.x===a.x&&UT(a,t)))&&(a=t,m=g)),t=t.next;while(t!==f);return a}function UT(i,e){return tn(i.prev,i,e.prev)<0&&tn(e.next,i,i.next)<0}function OT(i,e,t,s){let a=i;do a.z===0&&(a.z=sd(a.x,a.y,e,t,s)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,FT(a)}function FT(i){let e,t,s,a,l,c,f,d,h=1;do{for(t=i,i=null,l=null,c=0;t;){for(c++,s=t,f=0,e=0;e<h&&(f++,s=s.nextZ,!!s);e++);for(d=h;f>0||d>0&&s;)f!==0&&(d===0||!s||t.z<=s.z)?(a=t,t=t.nextZ,f--):(a=s,s=s.nextZ,d--),l?l.nextZ=a:i=a,a.prevZ=l,l=a;t=s}l.nextZ=null,h*=2}while(c>1);return i}function sd(i,e,t,s,a){return i=(i-t)*a|0,e=(e-s)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function zT(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sa(i,e,t,s,a,l,c,f){return(a-c)*(e-f)>=(i-c)*(l-f)&&(i-c)*(s-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(a-c)*(s-f)}function kT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!BT(i,e)&&(xo(i,e)&&xo(e,i)&&HT(i,e)&&(tn(i.prev,i,e.prev)||tn(i,e.prev,e))||Ec(i,e)&&tn(i.prev,i,i.next)>0&&tn(e.prev,e,e.next)>0)}function tn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ec(i,e){return i.x===e.x&&i.y===e.y}function Y0(i,e,t,s){const a=ec(tn(i,e,t)),l=ec(tn(i,e,s)),c=ec(tn(t,s,i)),f=ec(tn(t,s,e));return!!(a!==l&&c!==f||a===0&&Ql(i,t,e)||l===0&&Ql(i,s,e)||c===0&&Ql(t,i,s)||f===0&&Ql(t,e,s))}function Ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ec(i){return i>0?1:i<0?-1:0}function BT(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Y0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xo(i,e){return tn(i.prev,i,i.next)<0?tn(i,e,i.next)>=0&&tn(i,i.prev,e)>=0:tn(i,e,i.prev)<0||tn(i,i.next,e)<0}function HT(i,e){let t=i,s=!1;const a=(i.x+e.x)/2,l=(i.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(s=!s),t=t.next;while(t!==i);return s}function $0(i,e){const t=new ad(i.i,i.x,i.y),s=new ad(e.i,e.x,e.y),a=i.next,l=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,s.next=t,t.prev=s,l.next=s,s.prev=l,s}function zg(i,e,t,s){const a=new ad(i,e,t);return s?(a.next=s.next,a.prev=s,s.next.prev=a,s.next=a):(a.prev=a,a.next=a),a}function yo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ad(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function VT(i,e,t,s){let a=0;for(let l=e,c=t-s;l<t;l+=s)a+=(i[c]-i[l])*(i[l+1]+i[c+1]),c=l;return a}class ca{static area(e){const t=e.length;let s=0;for(let a=t-1,l=0;l<t;a=l++)s+=e[a].x*e[l].y-e[l].x*e[a].y;return s*.5}static isClockWise(e){return ca.area(e)<0}static triangulateShape(e,t){const s=[],a=[],l=[];kg(e),Bg(s,e);let c=e.length;t.forEach(kg);for(let d=0;d<t.length;d++)a.push(c),c+=t[d].length,Bg(s,t[d]);const f=AT.triangulate(s,a);for(let d=0;d<f.length;d+=3)l.push(f.slice(d,d+3));return l}}function kg(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bg(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class K0 extends Bn{constructor(e=new sc([new $e(.5,.5),new $e(-.5,.5),new $e(-.5,-.5),new $e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const s=this,a=[],l=[];for(let f=0,d=e.length;f<d;f++){const h=e[f];c(h)}this.setAttribute("position",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2)),this.computeVertexNormals();function c(f){const d=[],h=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const _=t.extrudePath,I=t.UVGenerator!==void 0?t.UVGenerator:GT;let w,R=!1,H,L,D,F;_&&(w=_.getSpacedPoints(m),R=!0,v=!1,H=_.computeFrenetFrames(m,!1),L=new K,D=new K,F=new K),v||(y=0,S=0,M=0,E=0);const P=f.extractPoints(h);let b=P.shape;const z=P.holes;if(!ca.isClockWise(b)){b=b.reverse();for(let ye=0,Ee=z.length;ye<Ee;ye++){const we=z[ye];ca.isClockWise(we)&&(z[ye]=we.reverse())}}const $=ca.triangulateShape(b,z),te=b;for(let ye=0,Ee=z.length;ye<Ee;ye++){const we=z[ye];b=b.concat(we)}function de(ye,Ee,we){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ye.clone().addScaledVector(Ee,we)}const j=b.length,re=$.length;function V(ye,Ee,we){let Me,Te,Pe;const Ce=ye.x-Ee.x,Xe=ye.y-Ee.y,U=we.x-ye.x,A=we.y-ye.y,ne=Ce*Ce+Xe*Xe,Se=Ce*A-Xe*U;if(Math.abs(Se)>Number.EPSILON){const me=Math.sqrt(ne),ve=Math.sqrt(U*U+A*A),qe=Ee.x-Xe/me,Ie=Ee.y+Ce/me,Ne=we.x-A/ve,et=we.y+U/ve,Ae=((Ne-qe)*A-(et-Ie)*U)/(Ce*A-Xe*U);Me=qe+Ce*Ae-ye.x,Te=Ie+Xe*Ae-ye.y;const je=Me*Me+Te*Te;if(je<=2)return new $e(Me,Te);Pe=Math.sqrt(je/2)}else{let me=!1;Ce>Number.EPSILON?U>Number.EPSILON&&(me=!0):Ce<-Number.EPSILON?U<-Number.EPSILON&&(me=!0):Math.sign(Xe)===Math.sign(A)&&(me=!0),me?(Me=-Xe,Te=Ce,Pe=Math.sqrt(ne)):(Me=Ce,Te=Xe,Pe=Math.sqrt(ne/2))}return new $e(Me/Pe,Te/Pe)}const le=[];for(let ye=0,Ee=te.length,we=Ee-1,Me=ye+1;ye<Ee;ye++,we++,Me++)we===Ee&&(we=0),Me===Ee&&(Me=0),le[ye]=V(te[ye],te[we],te[Me]);const oe=[];let O,q=le.concat();for(let ye=0,Ee=z.length;ye<Ee;ye++){const we=z[ye];O=[];for(let Me=0,Te=we.length,Pe=Te-1,Ce=Me+1;Me<Te;Me++,Pe++,Ce++)Pe===Te&&(Pe=0),Ce===Te&&(Ce=0),O[Me]=V(we[Me],we[Pe],we[Ce]);oe.push(O),q=q.concat(O)}for(let ye=0;ye<y;ye++){const Ee=ye/y,we=S*Math.cos(Ee*Math.PI/2),Me=M*Math.sin(Ee*Math.PI/2)+E;for(let Te=0,Pe=te.length;Te<Pe;Te++){const Ce=de(te[Te],le[Te],Me);xe(Ce.x,Ce.y,-we)}for(let Te=0,Pe=z.length;Te<Pe;Te++){const Ce=z[Te];O=oe[Te];for(let Xe=0,U=Ce.length;Xe<U;Xe++){const A=de(Ce[Xe],O[Xe],Me);xe(A.x,A.y,-we)}}}const ke=M+E;for(let ye=0;ye<j;ye++){const Ee=v?de(b[ye],q[ye],ke):b[ye];R?(D.copy(H.normals[0]).multiplyScalar(Ee.x),L.copy(H.binormals[0]).multiplyScalar(Ee.y),F.copy(w[0]).add(D).add(L),xe(F.x,F.y,F.z)):xe(Ee.x,Ee.y,0)}for(let ye=1;ye<=m;ye++)for(let Ee=0;Ee<j;Ee++){const we=v?de(b[Ee],q[Ee],ke):b[Ee];R?(D.copy(H.normals[ye]).multiplyScalar(we.x),L.copy(H.binormals[ye]).multiplyScalar(we.y),F.copy(w[ye]).add(D).add(L),xe(F.x,F.y,F.z)):xe(we.x,we.y,g/m*ye)}for(let ye=y-1;ye>=0;ye--){const Ee=ye/y,we=S*Math.cos(Ee*Math.PI/2),Me=M*Math.sin(Ee*Math.PI/2)+E;for(let Te=0,Pe=te.length;Te<Pe;Te++){const Ce=de(te[Te],le[Te],Me);xe(Ce.x,Ce.y,g+we)}for(let Te=0,Pe=z.length;Te<Pe;Te++){const Ce=z[Te];O=oe[Te];for(let Xe=0,U=Ce.length;Xe<U;Xe++){const A=de(Ce[Xe],O[Xe],Me);R?xe(A.x,A.y+w[m-1].y,w[m-1].x+we):xe(A.x,A.y,g+we)}}}Q(),ie();function Q(){const ye=a.length/3;if(v){let Ee=0,we=j*Ee;for(let Me=0;Me<re;Me++){const Te=$[Me];Le(Te[2]+we,Te[1]+we,Te[0]+we)}Ee=m+y*2,we=j*Ee;for(let Me=0;Me<re;Me++){const Te=$[Me];Le(Te[0]+we,Te[1]+we,Te[2]+we)}}else{for(let Ee=0;Ee<re;Ee++){const we=$[Ee];Le(we[2],we[1],we[0])}for(let Ee=0;Ee<re;Ee++){const we=$[Ee];Le(we[0]+j*m,we[1]+j*m,we[2]+j*m)}}s.addGroup(ye,a.length/3-ye,0)}function ie(){const ye=a.length/3;let Ee=0;fe(te,Ee),Ee+=te.length;for(let we=0,Me=z.length;we<Me;we++){const Te=z[we];fe(Te,Ee),Ee+=Te.length}s.addGroup(ye,a.length/3-ye,1)}function fe(ye,Ee){let we=ye.length;for(;--we>=0;){const Me=we;let Te=we-1;Te<0&&(Te=ye.length-1);for(let Pe=0,Ce=m+y*2;Pe<Ce;Pe++){const Xe=j*Pe,U=j*(Pe+1),A=Ee+Me+Xe,ne=Ee+Te+Xe,Se=Ee+Te+U,me=Ee+Me+U;He(A,ne,Se,me)}}}function xe(ye,Ee,we){d.push(ye),d.push(Ee),d.push(we)}function Le(ye,Ee,we){Oe(ye),Oe(Ee),Oe(we);const Me=a.length/3,Te=I.generateTopUV(s,a,Me-3,Me-2,Me-1);G(Te[0]),G(Te[1]),G(Te[2])}function He(ye,Ee,we,Me){Oe(ye),Oe(Ee),Oe(Me),Oe(Ee),Oe(we),Oe(Me);const Te=a.length/3,Pe=I.generateSideWallUV(s,a,Te-6,Te-3,Te-2,Te-1);G(Pe[0]),G(Pe[1]),G(Pe[3]),G(Pe[1]),G(Pe[2]),G(Pe[3])}function Oe(ye){a.push(d[ye*3+0]),a.push(d[ye*3+1]),a.push(d[ye*3+2])}function G(ye){l.push(ye.x),l.push(ye.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,s=this.parameters.options;return WT(t,s,e)}static fromJSON(e,t){const s=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];s.push(f)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new pc[a.type]().fromJSON(a)),new K0(s,e.options)}}const GT={generateTopUV:function(i,e,t,s,a){const l=e[t*3],c=e[t*3+1],f=e[s*3],d=e[s*3+1],h=e[a*3],m=e[a*3+1];return[new $e(l,c),new $e(f,d),new $e(h,m)]},generateSideWallUV:function(i,e,t,s,a,l){const c=e[t*3],f=e[t*3+1],d=e[t*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],v=e[a*3],S=e[a*3+1],M=e[a*3+2],E=e[l*3],y=e[l*3+1],_=e[l*3+2];return Math.abs(f-m)<Math.abs(c-h)?[new $e(c,1-d),new $e(h,1-g),new $e(v,1-M),new $e(E,1-_)]:[new $e(f,1-d),new $e(m,1-g),new $e(S,1-M),new $e(y,1-_)]}};function WT(i,e,t){if(t.shapes=[],Array.isArray(i))for(let s=0,a=i.length;s<a;s++){const l=i[s];t.shapes.push(l.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class mc extends Bn{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const d=Math.min(c+f,Math.PI);let h=0;const m=[],g=new K,v=new K,S=[],M=[],E=[],y=[];for(let _=0;_<=s;_++){const I=[],w=_/s;let R=0;_===0&&c===0?R=.5/t:_===s&&d===Math.PI&&(R=-.5/t);for(let H=0;H<=t;H++){const L=H/t;g.x=-e*Math.cos(a+L*l)*Math.sin(c+w*f),g.y=e*Math.cos(c+w*f),g.z=e*Math.sin(a+L*l)*Math.sin(c+w*f),M.push(g.x,g.y,g.z),v.copy(g).normalize(),E.push(v.x,v.y,v.z),y.push(L+R,1-w),I.push(h++)}m.push(I)}for(let _=0;_<s;_++)for(let I=0;I<t;I++){const w=m[_][I+1],R=m[_][I],H=m[_+1][I],L=m[_+1][I+1];(_!==0||c>0)&&S.push(w,R,L),(_!==s-1||d<Math.PI)&&S.push(R,H,L)}this.setIndex(S),this.setAttribute("position",new Jt(M,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Z0 extends Bn{constructor(e=new G0(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,s=1,a=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:s,radialSegments:a,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const f=new K,d=new K,h=new $e;let m=new K;const g=[],v=[],S=[],M=[];E(),this.setIndex(M),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(S,2));function E(){for(let w=0;w<t;w++)y(w);y(l===!1?t:0),I(),_()}function y(w){m=e.getPointAt(w/t,m);const R=c.normals[w],H=c.binormals[w];for(let L=0;L<=a;L++){const D=L/a*Math.PI*2,F=Math.sin(D),P=-Math.cos(D);d.x=P*R.x+F*H.x,d.y=P*R.y+F*H.y,d.z=P*R.z+F*H.z,d.normalize(),v.push(d.x,d.y,d.z),f.x=m.x+s*d.x,f.y=m.y+s*d.y,f.z=m.z+s*d.z,g.push(f.x,f.y,f.z)}}function _(){for(let w=1;w<=t;w++)for(let R=1;R<=a;R++){const H=(a+1)*(w-1)+(R-1),L=(a+1)*w+(R-1),D=(a+1)*w+R,F=(a+1)*(w-1)+R;M.push(H,L,F),M.push(L,D,F)}}function I(){for(let w=0;w<=t;w++)for(let R=0;R<=a;R++)h.x=w/t,h.y=R/a,S.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Z0(new pc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class y2 extends Bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],s=new Set,a=new K,l=new K;if(e.index!==null){const c=e.attributes.position,f=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:f.count,materialIndex:0}]);for(let h=0,m=d.length;h<m;++h){const g=d[h],v=g.start,S=g.count;for(let M=v,E=v+S;M<E;M+=3)for(let y=0;y<3;y++){const _=f.getX(M+y),I=f.getX(M+(y+1)%3);a.fromBufferAttribute(c,_),l.fromBufferAttribute(c,I),Hg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}}else{const c=e.attributes.position;for(let f=0,d=c.count/3;f<d;f++)for(let h=0;h<3;h++){const m=3*f+h,g=3*f+(h+1)%3;a.fromBufferAttribute(c,m),l.fromBufferAttribute(c,g),Hg(a,l,s)===!0&&(t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new Jt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Hg(i,e,t){const s=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,a=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(s)===!0||t.has(a)===!0?!1:(t.add(s),t.add(a),!0)}class S2 extends vs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pt(16777215),this.specular=new Pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class M2 extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Vg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jT{constructor(e,t,s){const a=this;let l=!1,c=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,c,f),l=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,f),c===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=h.length;g<v;g+=2){const S=h[g],M=h[g+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const XT=new jT;class Ed{constructor(e){this.manager=e!==void 0?e:XT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const s=this;return new Promise(function(a,l){s.load(e,a,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ed.DEFAULT_MATERIAL_NAME="__DEFAULT";class qT extends Ed{constructor(e){super(e)}load(e,t,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Vg.get(e);if(c!==void 0)return l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0),c;const f=vo("img");function d(){m(),Vg.add(e,this),t&&t(this),l.manager.itemEnd(e)}function h(g){m(),a&&a(g),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),l.manager.itemStart(e),f.src=e,f}}class YT extends Ed{constructor(e){super(e)}load(e,t,s,a){const l=new In,c=new qT(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},s,a),l}}class J0 extends Tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Xf=new Vt,Gg=new K,Wg=new K;class $T{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xd,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gg),Wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wg),t.updateMatrixWorld(),Xf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xf),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class KT extends $T{constructor(){super(new N0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E2 extends J0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new KT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class w2 extends J0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class T2 extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class A2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=jg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=jg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function jg(){return(typeof performance>"u"?Date:performance).now()}class C2 extends cT{constructor(e,t,s=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const Xg=new Vt;class b2{constructor(e,t,s=0,a=1/0){this.ray=new gd(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xg),this}intersectObject(e,t=!0,s=[]){return od(e,this,s,t),s.sort(qg),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)od(e[a],this,s,t);return s.sort(qg),s}}function qg(i,e){return i.distance-e.distance}function od(i,e,t,s){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=i.children;for(let c=0,f=l.length;c<f;c++)od(l[c],e,t,!0)}}class R2{constructor(e=1,t=0,s=0){return this.radius=e,this.phi=t,this.theta=s,this}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(pn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yg=new K,tc=new K;class P2{constructor(e=new K,t=new K){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Yg.subVectors(e,this.start),tc.subVectors(this.end,this.start);const s=tc.dot(tc);let l=tc.dot(Yg)/s;return t&&(l=pn(l,0,1)),l}closestPointToPoint(e,t,s){const a=this.closestPointToPointParameter(e,t);return this.delta(s).multiplyScalar(a).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class L2{constructor(){this.type="ShapePath",this.color=new Pt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,s,a){return this.currentPath.quadraticCurveTo(e,t,s,a),this}bezierCurveTo(e,t,s,a,l,c){return this.currentPath.bezierCurveTo(e,t,s,a,l,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(_){const I=[];for(let w=0,R=_.length;w<R;w++){const H=_[w],L=new sc;L.curves=H.curves,I.push(L)}return I}function s(_,I){const w=I.length;let R=!1;for(let H=w-1,L=0;L<w;H=L++){let D=I[H],F=I[L],P=F.x-D.x,b=F.y-D.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(D=I[L],P=-P,F=I[H],b=-b),_.y<D.y||_.y>F.y)continue;if(_.y===D.y){if(_.x===D.x)return!0}else{const z=b*(_.x-D.x)-P*(_.y-D.y);if(z===0)return!0;if(z<0)continue;R=!R}}else{if(_.y!==D.y)continue;if(F.x<=_.x&&_.x<=D.x||D.x<=_.x&&_.x<=F.x)return!0}}return R}const a=ca.isClockWise,l=this.subPaths;if(l.length===0)return[];let c,f,d;const h=[];if(l.length===1)return f=l[0],d=new sc,d.curves=f.curves,h.push(d),h;let m=!a(l[0].getPoints());m=e?!m:m;const g=[],v=[];let S=[],M=0,E;v[M]=void 0,S[M]=[];for(let _=0,I=l.length;_<I;_++)f=l[_],E=f.getPoints(),c=a(E),c=e?!c:c,c?(!m&&v[M]&&M++,v[M]={s:new sc,p:E},v[M].s.curves=f.curves,m&&M++,S[M]=[]):S[M].push({h:f,p:E[0]});if(!v[0])return t(l);if(v.length>1){let _=!1,I=0;for(let w=0,R=v.length;w<R;w++)g[w]=[];for(let w=0,R=v.length;w<R;w++){const H=S[w];for(let L=0;L<H.length;L++){const D=H[L];let F=!0;for(let P=0;P<v.length;P++)s(D.p,v[P].p)&&(w!==P&&I++,F?(F=!1,g[P].push(D)):_=!0);F&&g[w].push(D)}}I>0&&_===!1&&(S=g)}let y;for(let _=0,I=v.length;_<I;_++){d=v[_].s,h.push(d),y=S[_];for(let w=0,R=y.length;w<R;w++)d.holes.push(y[w].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);const ZT=i=>{const e=Math.floor((Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate())-Date.UTC(i.getUTCFullYear(),0,0))/864e5),t=i.getUTCHours()*60+i.getUTCMinutes()+i.getUTCSeconds()/60,s=2*Math.PI*(e-1+(t/60-12)/24)/365,a=.006918-.399912*Math.cos(s)+.070257*Math.sin(s)-.006758*Math.cos(2*s)+907e-6*Math.sin(2*s)-.002697*Math.cos(3*s)+.00148*Math.sin(3*s),l=229.18*(75e-6+.001868*Math.cos(s)-.032077*Math.sin(s)-.014615*Math.cos(2*s)-.040849*Math.sin(2*s)),c=(720-(t+l))/4*(Math.PI/180);return new K(Math.cos(a)*Math.sin(c),Math.sin(a),Math.cos(a)*Math.cos(c)).normalize()},JT=i=>(i.toISOString().slice(0,10),"/data/clouds/latest.png"),ld=-Math.PI/2,$g=1.00025,Kg=i=>i.clone().applyAxisAngle(new K(0,1,0),-ld),QT=({globe:i,time:e,nightEnabled:t,cloudsEnabled:s})=>{const a=_e.useRef(null),l=_e.useRef(null),c=e.getTime(),f=_e.useMemo(()=>ZT(new Date(c)),[c]),d=_e.useMemo(()=>JT(new Date),[]),h=_e.useRef(f),m=_e.useRef(t);return h.current=f,m.current=t,_e.useEffect(()=>{if(!i)return;const g=i.getGlobeRadius(),v=new mc(g*$g,64,32),S=new lr({transparent:!0,depthWrite:!1,uniforms:{sunDirection:{value:Kg(h.current)},opacity:{value:.72}},side:ki,depthTest:!0,vertexShader:"varying vec3 vNormal; void main() { vNormal = normalize(normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDirection; uniform float opacity; varying vec3 vNormal; void main() { float daylight = dot(normalize(vNormal), normalize(sunDirection)); float day = smoothstep(-0.22, 0.12, daylight); float night = 1.0 - day; gl_FragColor = vec4(0.005, 0.012, 0.04, night * opacity); }"}),M=new ai(v,S);return M.rotation.y=ld,M.name="orbitradar-night-side",M.visible=m.current,i.scene().add(M),a.current=M,()=>{i.scene().remove(M),v.dispose(),S.dispose(),a.current===M&&(a.current=null)}},[i]),_e.useEffect(()=>{const g=a.current;if(!g)return;g.visible=t,g.material.uniforms.sunDirection.value.copy(Kg(f))},[t,f]),_e.useEffect(()=>{var S,M,E;if(!i||!s){l.current&&i&&i.scene().remove(l.current);const y=(S=l.current)==null?void 0:S.material;(M=y==null?void 0:y.map)==null||M.dispose(),(E=l.current)==null||E.geometry.dispose(),y==null||y.dispose(),l.current=null;return}const g=new YT;g.setCrossOrigin("anonymous");let v=!1;return g.load(d,y=>{if(v||!i){y.dispose();return}y.colorSpace=Ti,y.wrapS=sr,y.wrapT=sr,y.minFilter=si,y.magFilter=si,y.generateMipmaps=!1,y.needsUpdate=!0;const _=new ai(new mc(i.getGlobeRadius()*$g,64,32),new _d({map:y,transparent:!0,opacity:.58,alphaTest:.05,depthTest:!0,depthWrite:!1,side:ki}));_.name="orbitradar-cloud-cover",_.rotation.y=ld,i.scene().add(_),l.current=_},void 0,()=>{}),()=>{var _,I,w;v=!0,l.current&&i&&i.scene().remove(l.current);const y=(_=l.current)==null?void 0:_.material;(I=y==null?void 0:y.map)==null||I.dispose(),(w=l.current)==null||w.geometry.dispose(),y==null||y.dispose(),l.current=null}},[i,s,d]),null},e2=(i,e)=>{const t=s=>{s.preventDefault(),e()};return i.addEventListener("webglcontextlost",t),()=>i.removeEventListener("webglcontextlost",t)},t2=({isPaused:i,isTimeLapseActive:e,getTime:t})=>{const[s,a]=_e.useState(()=>t()),l=_e.useRef(t);l.current=t,_e.useEffect(()=>{const d=()=>{const m=l.current();a(g=>g.getTime()===m.getTime()?g:m)};d();const h=window.setInterval(d,100);return()=>window.clearInterval(h)},[]);const c=e?`.${Math.floor(s.getUTCMilliseconds()/100)}`:"",f=i?"Paused UTC":e?"Simulation UTC":"Live UTC";return k.jsx("div",{className:"pointer-events-none absolute right-3 top-3 z-20 rounded-lg border border-white/15 bg-slate-950/75 px-2.5 py-1.5 text-right text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5",children:k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("p",{className:"hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:block",children:f}),k.jsxs("time",{className:"text-[11px] font-semibold tabular-nums sm:text-xs",dateTime:s.toISOString(),children:[k.jsxs("span",{className:"sm:hidden",children:[s.toLocaleTimeString(void 0,{timeZone:"UTC",timeStyle:"medium"}),c]}),k.jsxs("span",{className:"hidden sm:inline",children:[s.toLocaleString(void 0,{timeZone:"UTC",dateStyle:"short",timeStyle:"medium"}),c]})]})]})})},qf=12,Yf=50,n2=_e.lazy(()=>Qg(()=>import("./react-globe.gl-CM4cfzUO.js"),[])),i2=_e.lazy(()=>Qg(()=>import("./SatelliteMarkers-CEO1hyxD.js"),[])),r2=()=>{const i=_e.useRef(),e=_e.useRef(null),[t,s]=_e.useState(!1),[a,l]=_e.useState({width:0,height:0}),[c,f]=_e.useState(!1),[d,h]=_e.useState(0),{settings:m,updateSetting:g,resetSettings:v}=Lx();_e.useLayoutEffect(()=>{const be=e.current;if(!be)return;const xt=()=>{const Lt=be.getBoundingClientRect();l({width:Math.max(0,Math.floor(Lt.width)),height:Math.max(0,Math.floor(Lt.height))})};if(xt(),typeof ResizeObserver>"u")return window.addEventListener("resize",xt),()=>window.removeEventListener("resize",xt);const Yt=new ResizeObserver(xt);return Yt.observe(be),()=>Yt.disconnect()},[]),_e.useEffect(()=>{var xt;const be=(xt=e.current)==null?void 0:xt.querySelector("canvas");if(be)return e2(be,()=>{f(!0),s(!1)})},[t,d]),_e.useEffect(()=>{const be=i.current;if(!t||!be)return;const xt=()=>{document.hidden?be.pauseAnimation():be.resumeAnimation()};return xt(),document.addEventListener("visibilitychange",xt),()=>document.removeEventListener("visibilitychange",xt)},[t,d]);const{trackedSatellites:S,selectedNoradId:M,isLoading:E,statusMessage:y,lastUpdated:_,selectSatellite:I,clearSelection:w,refreshCatalog:R}=yx(m),H=bx(),{satellitePositions:L,selectedPosition:D,orbitPoints:F,snapshotVersion:P,showOrbit:b,setShowOrbit:z,followSelected:Z,setFollowSelected:$}=Mx(S,M,H.currentTime,H.getEffectiveTime),{userLocation:te,locateUser:de,clearUserLocation:j}=wx(),{favorites:re,isFavorite:V,toggleFavorite:le,clearFavorites:oe}=Tx(),{isTimeLapseActive:O,isPaused:q,speed:ke,speeds:Q,toggleTimeLapse:ie,setTimeLapseSpeed:fe,resetTime:xe,getSpeedLabel:Le,getTimeOffsetDisplay:He}=H,{trackedNoradIds:Oe,isTracked:G,toggleTracked:ye,clearTracked:Ee,getTrackedColor:we}=Rx(L),{passes:Me,isCalculating:Te,error:Pe,calculateForSelected:Ce,calculateForTracked:Xe,clearPasses:U}=Px(S,te,H.currentTime),[A,ne]=_e.useState(""),[Se,me]=_e.useState(()=>typeof window.matchMedia=="function"?window.matchMedia("(min-width: 640px)").matches:!0),[ve,qe]=_e.useState("catalog"),[Ie,Ne]=_e.useState(!1),[et,Ae]=_e.useState(!1),[je,T]=_e.useState(!1),[Ze,ze]=_e.useState(!1),[ft,ut]=_e.useState(!1),[dt,W]=_e.useState(null),[Ve,ge]=_e.useState(0),[pe,Ue]=_e.useState(m.defaultAltitudeFilter),rt=lo(et,()=>Ae(!1)),vt=lo(je,()=>T(!1)),At=lo(Ie,()=>Ne(!1));_e.useEffect(()=>{var be;!Z||!D||(be=i.current)==null||be.pointOfView({lat:D.lat,lng:D.lng,altitude:Math.max(2.1,D.alt*.75+1.5)},1e3)},[Z,D]),_e.useEffect(()=>{Ue(m.defaultAltitudeFilter)},[m.defaultAltitudeFilter]),_e.useEffect(()=>{z(m.showOrbitsByDefault)},[m.showOrbitsByDefault,z]);const Et=_e.useMemo(()=>pe==="all"?S:S.filter(be=>{const xt=c0(be.periodSeconds);return u0(xt)===pe}),[S,pe]),gt=_e.useMemo(()=>{const be=A.trim().toLowerCase(),xt=Et;if(!be){const Yt=[25544,20580,25994,33591];return xt.filter(Lt=>Yt.includes(Lt.noradId)).slice(0,qf)}return xt.filter(Yt=>Yt.name.toLowerCase().includes(be)||Yt.noradId.toString().includes(be)).slice(0,qf)},[Et,A]),Rt=_e.useMemo(()=>S.filter(be=>re.includes(be.noradId)),[S,re]),Ot=_e.useMemo(()=>[...Et].sort((be,xt)=>be.name.localeCompare(xt.name)),[Et]),Ft=Math.max(1,Math.ceil(Ot.length/Yf)),Ge=Ot.slice(Ve*Yf,(Ve+1)*Yf),Wt=be=>{I(be),z(m.showOrbitsByDefault)},an=()=>{w(),$(!1),z(!1),U(),ze(!1)},on=()=>{const be=S.find(xt=>xt.noradId===M);return be?be.name:(D==null?void 0:D.name)??"Unknown"},Mt=()=>{D&&(Ce(D.noradId),ze(!0))},ln=_e.useMemo(()=>L.filter(be=>pe==="all"||be.altitudeClass===pe),[L,pe]),An=ve==="favorites"?Rt:ve==="tracked"?S.filter(be=>Oe.includes(be.noradId)):gt;return k.jsxs("div",{className:"relative h-full w-full overflow-hidden bg-black sm:flex",children:[k.jsx("div",{ref:e,className:"absolute inset-0 z-0 sm:left-[22.5rem]",children:c?k.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white",role:"alert",children:[k.jsx("p",{className:"text-lg font-bold",children:"The globe lost its graphics context."}),k.jsx("p",{className:"text-sm text-slate-300",children:"The satellite explorer remains available."}),k.jsx("button",{className:"rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950",onClick:()=>{f(!1),s(!1),h(be=>be+1)},type:"button",children:"Retry globe"})]}):k.jsx(Nx,{onRetry:()=>{s(!1),h(be=>be+1)},children:k.jsxs(_e.Suspense,{fallback:k.jsx("div",{role:"status",className:"flex h-full items-center justify-center text-cyan-200",children:"Loading globe…"}),children:[a.width>0&&a.height>0&&k.jsx(n2,{ref:i,width:a.width,height:a.height,onGlobeReady:()=>{const be=i.current;if(!be)return;be.renderer().setPixelRatio(Ux(window.devicePixelRatio));const xt=be.controls();xt.enableDamping=!0,xt.dampingFactor=.08,s(!0),be.pointOfView({altitude:3.2})},enablePointerInteraction:!1,globeImageUrl:"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",backgroundColor:"black",showAtmosphere:!0,labelsData:te?[te]:[],labelLat:"lat",labelLng:"lng",labelText:"name",labelColor:()=>"rgba(255, 165, 0, 0.9)",labelSize:1,labelDotRadius:.5,pathsData:F.length>0?[{points:F,color:D==null?void 0:D.color}]:[],pathPoints:"points",pathPointLat:"lat",pathPointLng:"lng",pathPointAlt:"alt",pathColor:be=>`${be.color??"#67e8f9"}e6`,pathStroke:.9,pathTransitionDuration:0}),t&&k.jsx(QT,{globe:i.current??null,time:H.currentTime,nightEnabled:m.nightShading??!0,cloudsEnabled:m.cloudCover??!1}),t&&k.jsx(_e.Suspense,{fallback:null,children:k.jsx(i2,{globe:i.current??null,positions:ln,snapshotVersion:P,selectedNoradId:M,trackedNoradIds:Oe,getTrackedColor:we,onSelect:I})})]})},d)}),k.jsx(t2,{isPaused:q,isTimeLapseActive:O,getTime:H.getEffectiveTime}),!Se&&!et&&!je&&!Ze&&!ft&&k.jsxs("section",{className:"absolute bottom-3 left-3 right-3 z-20 rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-[23rem] sm:right-auto sm:w-96",children:[k.jsxs("div",{className:"flex items-center justify-between gap-4",children:[k.jsxs("div",{className:"min-w-0",children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),k.jsxs("p",{className:"mt-1 text-xl font-bold",children:[Et.length.toLocaleString()," satellites"]})]}),k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20","aria-expanded":Se,onClick:()=>me(!0),type:"button",children:"Open panel"})]}),k.jsx("p",{className:"mt-2 hidden line-clamp-2 text-sm text-slate-400 sm:block",children:y}),_&&k.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Last updated: ",new Date(_).toLocaleString()]}),k.jsxs("p",{className:"mt-1 hidden text-xs text-slate-500 sm:block",children:["Orbital data:"," ",k.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),k.jsxs("div",{className:"mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0",children:[k.jsxs("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>Ae(!0),type:"button",children:["Favorites (",re.length,")"]}),k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>T(!0),type:"button",children:"Time Lapse"}),te&&D&&k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Mt,type:"button",children:"Predict Pass"}),k.jsx("button",{className:"shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:()=>ut(!0),type:"button",children:"Settings"})]})]}),Se&&k.jsxs("aside",{className:"absolute bottom-0 left-0 right-0 z-30 h-[42dvh] max-h-[28rem] overflow-y-auto rounded-t-2xl border border-white/15 bg-slate-950/95 p-4 pb-8 text-left text-white shadow-2xl backdrop-blur-xl sm:relative sm:h-full sm:max-h-full sm:w-[22.5rem] sm:shrink-0 sm:rounded-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r sm:pb-4",children:[k.jsx("div",{"aria-hidden":"true",className:"mx-auto mb-3 h-1 w-12 rounded-full bg-white/25 sm:hidden"}),k.jsxs("div",{className:"flex items-start justify-between gap-4",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),k.jsx("h2",{className:"mt-1 text-2xl font-bold",children:"Satellite Tracker"})]}),k.jsx("button",{"aria-label":"Close control panel",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold transition hover:bg-white/20",onClick:()=>me(!1),type:"button",children:"Close"})]}),k.jsx("p",{className:"mt-2 text-sm text-slate-300",children:y}),k.jsxs("div",{className:"mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2",children:[k.jsxs("span",{className:"text-sm font-semibold",children:[S.length.toLocaleString()," satellites"]}),k.jsxs("span",{className:"text-xs text-slate-400",children:[ln.length.toLocaleString()," visible ·"," ",He()]})]}),k.jsx("nav",{"aria-label":"Satellite explorer",className:"mt-3 grid grid-cols-3 gap-1 rounded-xl bg-black/30 p-1",children:["catalog","favorites","tracked"].map(be=>k.jsxs("button",{"aria-pressed":ve===be,className:`rounded-lg px-2 py-2 text-xs font-bold capitalize ${ve===be?"bg-cyan-500 text-white":"text-slate-300 hover:bg-white/10"}`,onClick:()=>qe(be),type:"button",children:[be," ",be==="favorites"?re.length:be==="tracked"?Oe.length:""]},be))}),k.jsx("div",{className:"mt-3 flex gap-1",children:Object.entries(hx).map(([be,xt])=>k.jsx("button",{className:`px-2 py-1 rounded-full text-xs transition ${pe===be?"bg-cyan-500 text-white":"bg-white/10 hover:bg-white/20"}`,"aria-pressed":pe===be,onClick:()=>{Ue(be),g("defaultAltitudeFilter",be)},type:"button",children:xt.label},be))}),k.jsxs("label",{className:"mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-400",children:["Find by name or NORAD ID",k.jsx("input",{className:"mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-slate-500 focus:border-cyan-300",onChange:be=>ne(be.target.value),placeholder:"e.g. Starlink, Hubble, 25544",type:"search",value:A})]}),An.length>0&&k.jsx("div",{className:"mt-2 space-y-1",children:An.slice(0,ve==="catalog"?qf:void 0).map(be=>k.jsxs("button",{className:`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${be.noradId===M?"bg-cyan-300/20 text-cyan-100":"bg-white/5 hover:bg-white/10"}`,onClick:()=>Wt(be.noradId),type:"button",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"truncate font-medium",children:be.name}),V(be.noradId)&&k.jsx("span",{className:"text-yellow-400",children:"★"}),G(be.noradId)&&k.jsx("span",{className:"text-blue-400",children:"📍"})]}),k.jsx("span",{className:"ml-2 shrink-0 text-xs text-slate-400",children:be.noradId})]},be.noradId))}),An.length===0&&ve!=="catalog"&&k.jsxs("p",{className:"mt-3 text-sm text-slate-400",children:["No ",ve," satellites yet."]}),k.jsx("h3",{className:"mt-4 truncate text-lg font-bold",children:(D==null?void 0:D.name)??"Select a satellite"}),D&&k.jsxs("p",{className:"text-xs text-slate-400",children:["NORAD ",D.noradId,pe!=="all"&&D.altitudeClass!==pe?" · Outside current filter":""]}),D&&k.jsx("button",{className:"mt-2 text-xs font-semibold text-cyan-300 underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-100",onClick:an,type:"button",children:"Clear selection"}),k.jsxs("dl",{className:"mt-3 grid grid-cols-2 gap-3 text-sm",children:[k.jsx(nc,{label:"Latitude",children:D?im(D.lat,"N","S"):"—"}),k.jsx(nc,{label:"Longitude",children:D?im(D.lng,"E","W"):"—"}),k.jsx(nc,{label:"Altitude",children:D?`${D.altitudeKm.toFixed(0)} km`:"—"}),k.jsx(nc,{label:"Speed",children:D!=null&&D.velocityKph?`${D.velocityKph.toLocaleString(void 0,{maximumFractionDigits:0})} km/h`:"—"})]}),k.jsxs("div",{className:"mt-4 flex flex-wrap gap-2",children:[k.jsx(Di,{onClick:()=>{ge(0),me(!1),Ne(!0)},children:"Browse all"}),k.jsx(Di,{onClick:()=>$(be=>!be),children:Z?"Stop following":"Follow selected"}),k.jsx(Di,{onClick:()=>z(be=>!be),children:b?"Hide orbit":"Show orbit"}),k.jsx(Di,{onClick:()=>{var be;return(be=i.current)==null?void 0:be.pointOfView({altitude:Math.max(3.2,...ln.map(xt=>xt.alt*.75+1.5))},900)},children:"Fit visible"}),k.jsx(Di,{onClick:()=>{W(null),de().then(be=>{var xt;W(null),(xt=i.current)==null||xt.pointOfView({lat:be.lat,lng:be.lng,altitude:1.5},1e3)}).catch(()=>W("Location access failed. Check browser permission and try again."))},children:"Locate me"}),k.jsx(Di,{onClick:R,children:"Refresh"}),D&&k.jsx(Di,{onClick:()=>le(D.noradId),children:V(D.noradId)?"★ Favorited":"☆ Favorite"}),D&&k.jsx(Di,{onClick:()=>{if(!G(D.noradId)&&Oe.length>=10){W("Tracking is limited to 10 satellites. Remove one before adding another.");return}ye(D.noradId)},children:G(D.noradId)?"📍 Tracked":"📍 Track"}),te&&D&&k.jsx(Di,{onClick:Mt,children:"Predict Pass"}),te&&k.jsx(Di,{onClick:j,children:"Clear location"})]}),E&&k.jsx("p",{className:"mt-3 text-xs text-slate-400",children:"Loading the shared satellite snapshot\\u2026"}),dt&&k.jsx("p",{role:"status",className:"mt-3 text-sm text-amber-300",children:dt}),_&&k.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Last updated: ",new Date(_).toLocaleString()]}),k.jsxs("p",{className:"mt-1 text-xs text-slate-500",children:["Orbital data:"," ",k.jsx("a",{className:"underline",href:"https://celestrak.org/",rel:"noreferrer",target:"_blank",children:"CelesTrak"})]}),Oe.length>0&&k.jsxs("div",{className:"mt-3",children:[k.jsxs("p",{className:"text-xs text-slate-400 mb-2",children:["Tracking ",Oe.length," satellites"]}),k.jsx("button",{className:"rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20",onClick:Ee,type:"button",children:"Clear all tracked"})]})]}),et&&k.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:k.jsxs("section",{ref:rt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"favorites-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Favorites"}),k.jsxs("h2",{id:"favorites-title",className:"mt-1 text-2xl font-bold",children:[re.length," Favorite Satellites"]}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Quick access to your favorite satellites."})]}),k.jsx("button",{"aria-label":"Close favorites",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Ae(!1),type:"button",children:"Close"})]}),k.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:Rt.length>0?Rt.map(be=>k.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${be.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Wt(be.noradId),Ae(!1)},type:"button",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"truncate font-medium",children:be.name}),G(be.noradId)&&k.jsx("span",{className:"text-blue-400",children:"📍"})]}),k.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:be.noradId})]},be.noradId)):k.jsx("p",{className:"p-4 text-center text-slate-400",children:"No favorites yet. Add satellites to favorites from the control panel."})}),re.length>0&&k.jsx("footer",{className:"flex justify-end gap-3 border-t border-white/10 p-4",children:k.jsx("button",{className:"rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/30",onClick:oe,type:"button",children:"Clear all favorites"})})]})}),je&&k.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:k.jsxs("section",{ref:vt,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"timelapse-title",className:"flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Time Lapse"}),k.jsx("h2",{id:"timelapse-title",className:"mt-1 text-2xl font-bold",children:"Time Lapse Controls"}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Watch satellite movement at accelerated speeds."})]}),k.jsx("button",{"aria-label":"Close time lapse controls",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>T(!1),type:"button",children:"Close"})]}),k.jsx("div",{className:"flex-1 p-4",children:k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsx("span",{className:"text-sm text-slate-300",children:"Status"}),k.jsx("span",{className:`rounded-full px-3 py-1 text-sm ${O?"bg-green-500/20 text-green-400":"bg-red-500/20 text-red-400"}`,children:O?"Active":"Stopped"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm text-slate-300 mb-2",children:"Speed"}),k.jsx("div",{className:"grid grid-cols-4 gap-2",children:Q.map(be=>k.jsx("button",{className:`rounded-lg border px-3 py-2 text-sm transition ${ke===be?"border-cyan-400 bg-cyan-400/20 text-cyan-300":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>fe(be),type:"button",children:Le(be)},be))})]}),k.jsxs("div",{className:"flex gap-2",children:[k.jsxs("button",{className:"flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30",onClick:ie,type:"button",children:[O?"Stop":"Start"," Time Lapse"]}),k.jsx("button",{className:"flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20",onClick:xe,type:"button",children:"Reset to Now"})]})]})})]})}),Ze&&D&&k.jsx(Ix,{passes:Me,isCalculating:Te,error:Pe,onClose:()=>{U(),ze(!1)},onCalculateTracked:()=>{Xe([...new Set([...Oe,D.noradId])])},selectedSatelliteName:on()}),ft&&k.jsx(Dx,{settings:m,onUpdate:g,onReset:v,onClose:()=>ut(!1)}),Ie&&k.jsx("div",{className:"absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6",children:k.jsxs("section",{ref:At,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":"catalog-title",className:"flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl",children:[k.jsxs("header",{className:"flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5",children:[k.jsxs("div",{children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300",children:"Active catalog"}),k.jsxs("h2",{id:"catalog-title",className:"mt-1 text-2xl font-bold",children:["All ",Ot.length.toLocaleString()," satellites"]}),k.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Select any satellite to view its telemetry and orbit."})]}),k.jsx("button",{"aria-label":"Close satellite catalog",className:"rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20",onClick:()=>Ne(!1),type:"button",children:"Close"})]}),k.jsx("div",{className:"grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4",children:Ge.map(be=>k.jsxs("button",{className:`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${be.noradId===M?"border-cyan-300 bg-cyan-300/15 text-cyan-100":"border-white/10 bg-white/5 hover:bg-white/10"}`,onClick:()=>{Wt(be.noradId),Ne(!1)},type:"button",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("span",{className:"truncate font-medium",children:be.name}),V(be.noradId)&&k.jsx("span",{className:"text-yellow-400",children:"★"}),G(be.noradId)&&k.jsx("span",{className:"text-blue-400",children:"📍"})]}),k.jsx("span",{className:"ml-3 shrink-0 text-xs text-slate-400",children:be.noradId})]},be.noradId))}),k.jsxs("footer",{className:"flex items-center justify-between gap-3 border-t border-white/10 p-4",children:[k.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:Ve===0,onClick:()=>ge(be=>Math.max(0,be-1)),type:"button",children:"Previous"}),k.jsxs("p",{className:"text-sm text-slate-400",children:["Page ",Ve+1," of ",Ft]}),k.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40",disabled:Ve>=Ft-1,onClick:()=>ge(be=>Math.min(Ft-1,be+1)),type:"button",children:"Next"})]})]})})]})},nc=({label:i,children:e})=>k.jsxs("div",{className:"rounded-xl bg-white/10 p-3",children:[k.jsx("dt",{className:"text-slate-400",children:i}),k.jsx("dd",{className:"font-semibold",children:e})]}),Di=({children:i,onClick:e})=>k.jsx("button",{className:"rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20",onClick:e,type:"button",children:i}),s2=()=>k.jsxs("main",{className:"relative h-[100dvh] w-full overflow-hidden bg-black",children:[k.jsxs("header",{className:"pointer-events-none absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/80 to-transparent px-4 pb-10 pt-4 text-center text-white sm:left-[22.5rem]",children:[k.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/90",children:"Orbit Radar"}),k.jsx("h1",{className:"mt-1 text-2xl font-black drop-shadow-lg sm:text-4xl",children:"Satellite Tracker"})]}),k.jsx(r2,{})]});V_.createRoot(document.getElementById("root")).render(k.jsx(Jg.StrictMode,{children:k.jsx(s2,{})}));export{So as $,x2 as A,Bn as B,Pt as C,nr as D,K0 as E,Jt as F,Yl as G,bi as H,Pg as I,j0 as J,_d as K,P2 as L,Vt as M,aa as N,Tn as O,$n as P,Z0 as Q,Jg as R,lr as S,f2 as T,yS as U,$e as V,y2 as W,ET as X,Bi as Y,ga as Z,c2 as _,K as a,u2 as a0,R2 as a1,gd as a2,os as a3,N0 as a4,ps as a5,xc as a6,Or as a7,A2 as a8,g2 as a9,Ai as aa,v2 as ab,b2 as ac,fd as ad,E2 as ae,w2 as af,Mo as ag,p2 as ah,_2 as ai,o2 as aj,l2 as ak,mi as b,cT as c,k0 as d,h2 as e,d2 as f,Zg as g,Ui as h,ai as i,C2 as j,va as k,Mn as l,gs as m,m2 as n,T2 as o,Ke as p,L2 as q,_e as r,mc as s,M2 as t,hT as u,dT as v,X0 as w,YT as x,Ti as y,S2 as z};
