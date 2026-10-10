import{r as a,ag as Y,I as j,ah as L,K as F,ai as K,O as W,C as Z,a as N,aj as q,ak as J,V as Q,ac as $,k as ee,n as te}from"./index-taxUlOGU.js";const re=850,ne=1500,V=.25,ae=1.2,oe=1200,se=(e,n)=>{const c=Math.min(Math.max(n,re),ne);return e*(1-V)+c*V},ie=e=>e*ae,ce=(e,n)=>Math.min(Math.max(e/n,0),1),X=(e,n)=>ce(performance.now()-e,n),le=(e,n,c)=>{const f=e.length(),M=n.length();return f===0||M===0?e.clone().lerp(n,c):e.clone().divideScalar(f).lerp(n.clone().divideScalar(M),c).normalize().multiplyScalar(te.lerp(f,M,c))},me=({globe:e,positions:n,snapshotVersion:c=0,selectedNoradId:f,trackedNoradIds:M,getTrackedColor:O,onSelect:U})=>{const k=a.useRef(null),w=a.useRef(1024),[v,b]=a.useState(1024),x=a.useRef(performance.now()),E=a.useRef(oe),T=a.useRef(1e3),A=a.useRef(null),y=a.useRef({value:1}),D=a.useRef(new Map),G=a.useRef(c),B=a.useRef(!1),C=a.useRef({positions:n,onSelect:U}),_=a.useMemo(()=>new Set(M),[M]);return C.current={positions:n,onSelect:U},a.useEffect(()=>{if(!e)return;w.current=v;const i=new Y(1,1,1),S=new j(new Float32Array(v*3),3);S.setUsage(L),i.setAttribute("instanceTargetPosition",S);const m=new F({color:16777215,toneMapped:!1});m.onBeforeCompile=r=>{r.uniforms.markerInterpolation=y.current,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
gl_Position = projectionMatrix * mvPosition;`)},m.customProgramCacheKey=()=>"orbitradar-marker-interpolation-v1";const t=new K(i,m,v);t.instanceColor=new j(new Float32Array(v*3),3),t.instanceColor.setUsage(L),t.name="orbitradar-satellite-markers",t.frustumCulled=!1,t.count=0,t.instanceMatrix.setUsage(L),t.onBeforeRender=()=>{y.current.value=X(x.current,E.current)},e.scene().add(t),k.current=t;let d=null,u=!1;const s=e.renderer().domElement,P=r=>{d={x:r.clientX,y:r.clientY},u=!1},g=r=>{d&&Math.hypot(r.clientX-d.x,r.clientY-d.y)>5&&(u=!0)},o=()=>{d=null,window.setTimeout(()=>{u=!1},0)},I=r=>{if(u){u=!1;return}const p=s.getBoundingClientRect(),R=new Q((r.clientX-p.left)/p.width*2-1,-((r.clientY-p.top)/p.height)*2+1),l=new $;l.setFromCamera(R,e.camera());const h=l.intersectObject(t)[0];if((h==null?void 0:h.instanceId)===void 0)return;const H=l.ray.intersectSphere(new ee(new N,e.getGlobeRadius()),new N);if(H&&H.distanceTo(l.ray.origin)<h.distance)return;const z=C.current.positions[h.instanceId];z&&C.current.onSelect(z.noradId)};return s.addEventListener("pointerdown",P),s.addEventListener("pointermove",g),s.addEventListener("pointerup",o),s.addEventListener("click",I),()=>{s.removeEventListener("pointerdown",P),s.removeEventListener("pointermove",g),s.removeEventListener("pointerup",o),s.removeEventListener("click",I),e.scene().remove(t),t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(r=>r.dispose()):t.material.dispose(),k.current===t&&(k.current=null)}},[e,v]),a.useEffect(()=>{const i=k.current;if(!e||!i)return;const S=2**Math.ceil(Math.log2(Math.max(n.length,1)));if(S>w.current){w.current=S,b(S);return}const m=new W,t=new Z,d=i.geometry.getAttribute("instanceTargetPosition"),u=performance.now(),s=c!==G.current||!B.current,P=X(x.current,E.current),g=new Map;n.forEach((o,I)=>{const r=e.getCoords(o.lat,o.lng,o.alt),p=new N(r.x,r.y,r.z),R=D.current.get(o.noradId),l=R&&!s?R:{start:R?le(R.start,R.target,P):p.clone(),target:p};g.set(o.noradId,l),m.position.copy(l.start),m.scale.setScalar(q(e.getGlobeRadius(),o.noradId===f,_.has(o.noradId))),m.updateMatrix(),i.setMatrixAt(I,m.matrix),d.setXYZ(I,l.target.x,l.target.y,l.target.z),i.setColorAt(I,t.set(o.noradId===f?J:_.has(o.noradId)?O(o.noradId):o.color))}),D.current=g,s&&(A.current!==null&&(T.current=se(T.current,u-A.current),E.current=ie(T.current)),G.current=c,B.current=!0,A.current=u,x.current=u,y.current.value=0),i.count=n.length,i.instanceMatrix.needsUpdate=!0,d.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)},[e,n,c,f,_,O,v]),null};export{me as default};
