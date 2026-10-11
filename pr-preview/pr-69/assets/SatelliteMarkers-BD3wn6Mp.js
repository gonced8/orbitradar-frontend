import{r as o,ag as at,I as G,ah as Z,K as ot,ai as st,aj as $,a as x,O as it,C as ct,ak as ut,al as lt,k as dt,a2 as mt,n as ft}from"./index-DRaVuP6i.js";const pt=850,Rt=1500,W=.25,St=1.2,gt=1200,ht=(t,r)=>{const l=Math.min(Math.max(r,pt),Rt);return t*(1-W)+l*W},Mt=t=>t*St,It=(t,r)=>Math.min(Math.max(t/r,0),1),j=(t,r)=>It(performance.now()-t,r),q=(t,r,l)=>{const p=t.length(),g=r.length();return p===0||g===0?t.clone().lerp(r,l):t.clone().divideScalar(p).lerp(r.clone().divideScalar(g),l).normalize().multiplyScalar(ft.lerp(p,g,l))},kt=({globe:t,positions:r,snapshotVersion:l=0,selectedNoradId:p,trackedNoradIds:g,getTrackedColor:B,onSelect:H})=>{const M=o.useRef(null),y=o.useRef(1024),[d,J]=o.useState(1024),E=o.useRef(performance.now()),A=o.useRef(gt),T=o.useRef(1e3),C=o.useRef(null),_=o.useRef({value:1}),L=o.useRef(new Map),X=o.useRef(l),Y=o.useRef(!1),N=o.useRef({positions:r,onSelect:H}),b=o.useRef(r),U=o.useMemo(()=>new Set(g),[g]);N.current={positions:r,onSelect:H},b.current=r,o.useEffect(()=>{if(!t)return;y.current=d;const a=new at(1,1,1),u=new G(new Float32Array(d*3),3);u.setUsage(Z),a.setAttribute("instanceTargetPosition",u);const R=new G(new Float32Array(d*3),3);R.setUsage(Z),a.setAttribute("instanceStartPosition",R);const s=new ot({color:16777215,transparent:!0,opacity:1,toneMapped:!1});s.onBeforeCompile=n=>{n.uniforms.markerInterpolation=_.current,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
#ifdef USE_INSTANCING
attribute vec3 instanceTargetPosition;
attribute vec3 instanceStartPosition;
uniform float markerInterpolation;
#endif`).replace("#include <project_vertex>",`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mat4 interpolatedInstanceMatrix = instanceMatrix;
  vec3 markerStart = instanceStartPosition;
  float markerStartRadius = length(markerStart);
  float markerTargetRadius = length(instanceTargetPosition);
  vec3 markerPosition = mix(markerStart, instanceTargetPosition, markerInterpolation);
  if (markerStartRadius > 0.0 && markerTargetRadius > 0.0) {
    vec3 markerDirection = normalize(mix(
      markerStart / markerStartRadius,
      instanceTargetPosition / markerTargetRadius,
      markerInterpolation
    ));
    markerPosition = markerDirection * mix(
      markerStartRadius,
      markerTargetRadius,
      markerInterpolation
    );
  }
  interpolatedInstanceMatrix[3].xyz = markerPosition;
  mvPosition = interpolatedInstanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`)},s.customProgramCacheKey=()=>"orbitradar-marker-interpolation-v1";const e=new st(a,s,d);e.instanceColor=new G(new Float32Array(d*3),3),e.instanceColor.setUsage($),e.name="orbitradar-satellite-markers",e.renderOrder=10,e.frustumCulled=!1,e.count=0,e.instanceMatrix.setUsage($),e.onBeforeRender=()=>{_.current.value=j(E.current,A.current)},t.scene().add(e),M.current=e;let m=null,S=!1;const i=t.renderer().domElement,f=n=>{m={x:n.clientX,y:n.clientY},S=!1},I=n=>{m&&Math.hypot(n.clientX-m.x,n.clientY-m.y)>5&&(S=!0)},h=()=>{m=null,window.setTimeout(()=>{S=!1},0)},v=n=>{if(S){S=!1;return}const c=i.getBoundingClientRect(),tt=j(E.current,A.current),P=t.camera(),et=new dt(new x,t.getGlobeRadius()),k=new x;let w=null;for(const K of N.current.positions){const O=L.current.get(K.noradId);if(!O)continue;const D=q(O.start,O.target,tt);if(k.copy(D).project(P),k.z<-1||k.z>1)continue;const rt=c.left+(k.x+1)/2*c.width,nt=c.top+(1-k.y)/2*c.height,z=Math.hypot(n.clientX-rt,n.clientY-nt);if(z>14||w&&z>=w.distance)continue;const V=new mt(P.position,D.clone().sub(P.position).normalize()).intersectSphere(et,new x);V&&V.distanceTo(P.position)<D.distanceTo(P.position)-.001||(w={noradId:K.noradId,distance:z})}w&&N.current.onSelect(w.noradId)};return i.addEventListener("pointerdown",f),i.addEventListener("pointermove",I),i.addEventListener("pointerup",h),i.addEventListener("click",v),()=>{i.removeEventListener("pointerdown",f),i.removeEventListener("pointermove",I),i.removeEventListener("pointerup",h),i.removeEventListener("click",v),t.scene().remove(e),e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose(),M.current===e&&(M.current=null)}},[t,d]),o.useEffect(()=>{const a=M.current;if(!t||!a)return;const u=2**Math.ceil(Math.log2(Math.max(r.length,1)));if(u>y.current){y.current=u,J(u);return}const R=a.geometry.getAttribute("instanceStartPosition"),s=a.geometry.getAttribute("instanceTargetPosition"),e=performance.now(),m=l!==X.current||!Y.current,S=j(E.current,A.current),i=new Map;r.forEach((f,I)=>{const h=t.getCoords(f.lat,f.lng,f.alt),v=new x(h.x,h.y,h.z),n=L.current.get(f.noradId),c=n&&!m?n:{start:n?q(n.start,n.target,S):v.clone(),target:v};i.set(f.noradId,c),R.setXYZ(I,c.start.x,c.start.y,c.start.z),s.setXYZ(I,c.target.x,c.target.y,c.target.z)}),L.current=i,m&&(C.current!==null&&(T.current=ht(T.current,e-C.current),A.current=Mt(T.current)),X.current=l,Y.current=!0,C.current=e,E.current=e,_.current.value=0),a.count=r.length,R.needsUpdate=!0,s.needsUpdate=!0},[t,r,l,d]);const Q=o.useMemo(()=>r.map(a=>`${a.noradId}:${a.color}`).join("|"),[r]),F=r.length;return o.useEffect(()=>{const a=M.current;if(!t||!a||F>y.current)return;const u=new it,R=new ct;b.current.forEach((s,e)=>{u.position.set(0,0,0),u.scale.setScalar(ut(t.getGlobeRadius(),s.noradId===p,U.has(s.noradId))),u.updateMatrix(),a.setMatrixAt(e,u.matrix),a.setColorAt(e,R.set(s.noradId===p?lt:U.has(s.noradId)?B(s.noradId):s.color))}),a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0)},[t,p,U,B,Q,F,d]),null};export{kt as default};
