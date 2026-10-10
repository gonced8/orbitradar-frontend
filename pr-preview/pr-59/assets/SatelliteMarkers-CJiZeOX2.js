import{r as o,ag as X,I as B,ah as N,K as b,ai as Y,O as F,C as K,a as O,aj as W,ak as Z,V as q,ac as J,k as Q,n as $}from"./index-CWQAYJ8d.js";const ee=850,te=1500,H=.25,re=1.2,ne=1200,ae=(e,t)=>{const l=Math.min(Math.max(t,ee),te);return e*(1-H)+l*H},oe=e=>e*re,se=(e,t)=>Math.min(Math.max(e/t,0),1),V=(e,t)=>se(performance.now()-e,t),ie=(e,t,l)=>{const R=e.length(),M=t.length();return R===0||M===0?e.clone().lerp(t,l):e.clone().divideScalar(R).lerp(t.clone().divideScalar(M),l).normalize().multiplyScalar($.lerp(R,M,l))},le=({globe:e,positions:t,selectedNoradId:l,trackedNoradIds:R,getTrackedColor:M,onSelect:U})=>{const k=o.useRef(null),w=o.useRef(1024),[v,j]=o.useState(1024),x=o.useRef(performance.now()),E=o.useRef(ne),T=o.useRef(1e3),A=o.useRef(null),y=o.useRef({value:1}),C=o.useRef(new Map),D=o.useRef(t),_=o.useRef({positions:t,onSelect:U}),L=o.useMemo(()=>new Set(R),[R]);return _.current={positions:t,onSelect:U},o.useEffect(()=>{if(!e)return;w.current=v;const i=new X(1,1,1),I=new B(new Float32Array(v*3),3);I.setUsage(N),i.setAttribute("instanceTargetPosition",I);const m=new b({color:16777215,toneMapped:!1});m.onBeforeCompile=n=>{n.uniforms.markerInterpolation=y.current,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
gl_Position = projectionMatrix * mvPosition;`)},m.customProgramCacheKey=()=>"orbitradar-marker-interpolation-v1";const r=new Y(i,m,v);r.instanceColor=new B(new Float32Array(v*3),3),r.instanceColor.setUsage(N),r.name="orbitradar-satellite-markers",r.frustumCulled=!1,r.count=0,r.instanceMatrix.setUsage(N),r.onBeforeRender=()=>{y.current.value=V(x.current,E.current)},e.scene().add(r),k.current=r;let d=null,u=!1;const s=e.renderer().domElement,P=n=>{d={x:n.clientX,y:n.clientY},u=!1},g=n=>{d&&Math.hypot(n.clientX-d.x,n.clientY-d.y)>5&&(u=!0)},a=()=>{d=null,window.setTimeout(()=>{u=!1},0)},S=n=>{if(u){u=!1;return}const f=s.getBoundingClientRect(),p=new q((n.clientX-f.left)/f.width*2-1,-((n.clientY-f.top)/f.height)*2+1),c=new J;c.setFromCamera(p,e.camera());const h=c.intersectObject(r)[0];if((h==null?void 0:h.instanceId)===void 0)return;const G=c.ray.intersectSphere(new Q(new O,e.getGlobeRadius()),new O);if(G&&G.distanceTo(c.ray.origin)<h.distance)return;const z=_.current.positions[h.instanceId];z&&_.current.onSelect(z.noradId)};return s.addEventListener("pointerdown",P),s.addEventListener("pointermove",g),s.addEventListener("pointerup",a),s.addEventListener("click",S),()=>{s.removeEventListener("pointerdown",P),s.removeEventListener("pointermove",g),s.removeEventListener("pointerup",a),s.removeEventListener("click",S),e.scene().remove(r),r.geometry.dispose(),Array.isArray(r.material)?r.material.forEach(n=>n.dispose()):r.material.dispose(),k.current===r&&(k.current=null)}},[e,v]),o.useEffect(()=>{const i=k.current;if(!e||!i)return;const I=2**Math.ceil(Math.log2(Math.max(t.length,1)));if(I>w.current){w.current=I,j(I);return}const m=new F,r=new K,d=i.geometry.getAttribute("instanceTargetPosition"),u=performance.now(),s=t!==D.current||C.current.size===0,P=V(x.current,E.current),g=new Map;t.forEach((a,S)=>{const n=e.getCoords(a.lat,a.lng,a.alt),f=new O(n.x,n.y,n.z),p=C.current.get(a.noradId),c=p&&!s?p:{start:p?ie(p.start,p.target,P):f.clone(),target:f};g.set(a.noradId,c),m.position.copy(c.start),m.scale.setScalar(W(e.getGlobeRadius(),a.noradId===l,L.has(a.noradId))),m.updateMatrix(),i.setMatrixAt(S,m.matrix),d.setXYZ(S,c.target.x,c.target.y,c.target.z),i.setColorAt(S,r.set(a.noradId===l?Z:L.has(a.noradId)?M(a.noradId):a.color))}),C.current=g,s&&(A.current!==null&&(T.current=ae(T.current,u-A.current),E.current=oe(T.current)),D.current=t,A.current=u,x.current=u,y.current.value=0),i.count=t.length,i.instanceMatrix.needsUpdate=!0,d.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)},[e,t,l,L,M,v]),null};export{le as default};
