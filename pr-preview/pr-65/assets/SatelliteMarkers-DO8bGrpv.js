import{r as a,ag as $,I as V,ah as G,K as ee,ai as te,O as re,C as ne,a as E,aj as ae,ak as oe,k as se,a2 as ie,n as ce}from"./index-I5RryGKj.js";const le=850,ue=1500,F=.25,de=1.2,me=1200,fe=(e,n)=>{const l=Math.min(Math.max(n,le),ue);return e*(1-F)+l*F},pe=e=>e*de,Re=(e,n)=>Math.min(Math.max(e/n,0),1),B=(e,n)=>Re(performance.now()-e,n),W=(e,n,l)=>{const f=e.length(),M=n.length();return f===0||M===0?e.clone().lerp(n,l):e.clone().divideScalar(f).lerp(n.clone().divideScalar(M),l).normalize().multiplyScalar(ce.lerp(f,M,l))},Se=({globe:e,positions:n,snapshotVersion:l=0,selectedNoradId:f,trackedNoradIds:M,getTrackedColor:H,onSelect:j})=>{const P=a.useRef(null),T=a.useRef(1024),[I,Z]=a.useState(1024),w=a.useRef(performance.now()),x=a.useRef(me),A=a.useRef(1e3),C=a.useRef(null),_=a.useRef({value:1}),L=a.useRef(new Map),X=a.useRef(l),Y=a.useRef(!1),N=a.useRef({positions:n,onSelect:j}),O=a.useMemo(()=>new Set(M),[M]);return N.current={positions:n,onSelect:j},a.useEffect(()=>{if(!e)return;T.current=I;const i=new $(1,1,1),S=new V(new Float32Array(I*3),3);S.setUsage(G),i.setAttribute("instanceTargetPosition",S);const d=new ee({color:16777215,transparent:!0,opacity:1,toneMapped:!1});d.onBeforeCompile=r=>{r.uniforms.markerInterpolation=_.current,r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
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
gl_Position = projectionMatrix * mvPosition;`)},d.customProgramCacheKey=()=>"orbitradar-marker-interpolation-v1";const t=new te(i,d,I);t.instanceColor=new V(new Float32Array(I*3),3),t.instanceColor.setUsage(G),t.name="orbitradar-satellite-markers",t.renderOrder=10,t.frustumCulled=!1,t.count=0,t.instanceMatrix.setUsage(G),t.onBeforeRender=()=>{_.current.value=B(w.current,x.current)},e.scene().add(t),P.current=t;let m=null,u=!1;const s=e.renderer().domElement,y=r=>{m={x:r.clientX,y:r.clientY},u=!1},h=r=>{m&&Math.hypot(r.clientX-m.x,r.clientY-m.y)>5&&(u=!0)},o=()=>{m=null,window.setTimeout(()=>{u=!1},0)},g=r=>{if(u){u=!1;return}const p=s.getBoundingClientRect(),R=B(w.current,x.current),c=e.camera(),q=new se(new E,e.getGlobeRadius()),v=new E;let k=null;for(const b of N.current.positions){const U=L.current.get(b.noradId);if(!U)continue;const D=W(U.start,U.target,R);if(v.copy(D).project(c),v.z<-1||v.z>1)continue;const J=p.left+(v.x+1)/2*p.width,Q=p.top+(1-v.y)/2*p.height,z=Math.hypot(r.clientX-J,r.clientY-Q);if(z>14||k&&z>=k.distance)continue;const K=new ie(c.position,D.clone().sub(c.position).normalize()).intersectSphere(q,new E);K&&K.distanceTo(c.position)<D.distanceTo(c.position)-.001||(k={noradId:b.noradId,distance:z})}k&&N.current.onSelect(k.noradId)};return s.addEventListener("pointerdown",y),s.addEventListener("pointermove",h),s.addEventListener("pointerup",o),s.addEventListener("click",g),()=>{s.removeEventListener("pointerdown",y),s.removeEventListener("pointermove",h),s.removeEventListener("pointerup",o),s.removeEventListener("click",g),e.scene().remove(t),t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(r=>r.dispose()):t.material.dispose(),P.current===t&&(P.current=null)}},[e,I]),a.useEffect(()=>{const i=P.current;if(!e||!i)return;const S=2**Math.ceil(Math.log2(Math.max(n.length,1)));if(S>T.current){T.current=S,Z(S);return}const d=new re,t=new ne,m=i.geometry.getAttribute("instanceTargetPosition"),u=performance.now(),s=l!==X.current||!Y.current,y=B(w.current,x.current),h=new Map;n.forEach((o,g)=>{const r=e.getCoords(o.lat,o.lng,o.alt),p=new E(r.x,r.y,r.z),R=L.current.get(o.noradId),c=R&&!s?R:{start:R?W(R.start,R.target,y):p.clone(),target:p};h.set(o.noradId,c),d.position.copy(c.start),d.scale.setScalar(ae(e.getGlobeRadius(),o.noradId===f,O.has(o.noradId))),d.updateMatrix(),i.setMatrixAt(g,d.matrix),m.setXYZ(g,c.target.x,c.target.y,c.target.z),i.setColorAt(g,t.set(o.noradId===f?oe:O.has(o.noradId)?H(o.noradId):o.color))}),L.current=h,s&&(C.current!==null&&(A.current=fe(A.current,u-C.current),x.current=pe(A.current)),X.current=l,Y.current=!0,C.current=u,w.current=u,_.current.value=0),i.count=n.length,i.instanceMatrix.needsUpdate=!0,m.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)},[e,n,l,f,O,H,I]),null};export{Se as default};
