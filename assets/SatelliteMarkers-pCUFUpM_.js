import{r as s,a as N,S as j}from"./index-ChK3m5ad.js";import{ad as V,I as B,ae as C,H as X,af as Y,O as F,C as H,a as T,m as G,V as b,a9 as K,j as Z}from"./three.module-DHZrf394.js";const q=1e3,D=r=>G.clamp((performance.now()-r)/q,0,1),J=(r,i,u)=>{const p=r.length(),v=i.length();return p===0||v===0?r.clone().lerp(i,u):r.clone().divideScalar(p).lerp(i.clone().divideScalar(v),u).normalize().multiplyScalar(G.lerp(p,v,u))},$=({globe:r,positions:i,selectedNoradId:u,trackedNoradIds:p,getTrackedColor:v,onSelect:A})=>{const w=s.useRef(null),h=s.useRef(1024),[g,O]=s.useState(1024),y=s.useRef(performance.now()),I=s.useRef({value:1}),L=s.useRef(new Map),P=s.useRef({positions:i,onSelect:A}),E=s.useMemo(()=>new Set(p),[p]);return P.current={positions:i,onSelect:A},s.useEffect(()=>{if(!r)return;h.current=g;const o=new V(1,1,1),M=new B(new Float32Array(g*3),3);M.setUsage(C),o.setAttribute("instanceTargetPosition",M);const c=new X({color:16777215,toneMapped:!1,vertexColors:!0});c.onBeforeCompile=t=>{t.uniforms.markerInterpolation=I.current,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
#ifdef USE_INSTANCING
attribute vec3 instanceTargetPosition;
uniform float markerInterpolation;
#endif`).replace("#include <project_vertex>",`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mat4 interpolatedInstanceMatrix = instanceMatrix;
  vec3 markerStart = instanceMatrix[3].xyz;
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
gl_Position = projectionMatrix * mvPosition;`)},c.customProgramCacheKey=()=>"orbitradar-marker-interpolation-v1";const e=new Y(o,c,g);e.instanceColor=new B(new Float32Array(g*3),3),e.instanceColor.setUsage(C),e.name="orbitradar-satellite-markers",e.frustumCulled=!1,e.count=0,e.instanceMatrix.setUsage(C),e.onBeforeRender=()=>{I.current.value=D(y.current)},r.scene().add(e),w.current=e;let l=null,d=!1;const a=r.renderer().domElement,n=t=>{l={x:t.clientX,y:t.clientY},d=!1},k=t=>{l&&Math.hypot(t.clientX-l.x,t.clientY-l.y)>5&&(d=!0)},R=()=>{l=null,window.setTimeout(()=>{d=!1},0)},m=t=>{if(d){d=!1;return}const f=a.getBoundingClientRect(),z=new b((t.clientX-f.left)/f.width*2-1,-((t.clientY-f.top)/f.height)*2+1),x=new K;x.setFromCamera(z,r.camera());const S=x.intersectObject(e)[0];if((S==null?void 0:S.instanceId)===void 0)return;const U=x.ray.intersectSphere(new Z(new T,r.getGlobeRadius()),new T);if(U&&U.distanceTo(x.ray.origin)<S.distance)return;const _=P.current.positions[S.instanceId];_&&P.current.onSelect(_.noradId)};return a.addEventListener("pointerdown",n),a.addEventListener("pointermove",k),a.addEventListener("pointerup",R),a.addEventListener("click",m),()=>{a.removeEventListener("pointerdown",n),a.removeEventListener("pointermove",k),a.removeEventListener("pointerup",R),a.removeEventListener("click",m),r.scene().remove(e),e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose(),w.current===e&&(w.current=null)}},[r,g]),s.useEffect(()=>{const o=w.current;if(!r||!o)return;const M=2**Math.ceil(Math.log2(Math.max(i.length,1)));if(M>h.current){h.current=M,O(M);return}const c=new F,e=new H,l=o.geometry.getAttribute("instanceTargetPosition"),d=D(y.current),a=new Map;i.forEach((n,k)=>{const R=r.getCoords(n.lat,n.lng,n.alt),m=new T(R.x,R.y,R.z),t=L.current.get(n.noradId),f=t?J(t.start,t.target,d):m.clone();a.set(n.noradId,{start:f,target:m}),c.position.copy(f),c.scale.setScalar(N(r.getGlobeRadius(),n.noradId===u,E.has(n.noradId))),c.updateMatrix(),o.setMatrixAt(k,c.matrix),l.setXYZ(k,m.x,m.y,m.z),o.setColorAt(k,e.set(n.noradId===u?j:E.has(n.noradId)?v(n.noradId):n.color))}),L.current=a,y.current=performance.now(),I.current.value=0,o.count=i.length,o.instanceMatrix.needsUpdate=!0,l.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)},[r,i,u,E,v,g]),null};export{$ as default};
