import{a,j as e}from"./charts-VUD2E1tl.js";import{l as x,A as y,n as D,C,O as M,k as F,t as N}from"./index-OIM89d1-.js";import{o as w,m as U,d as z}from"./three-BxGoG16y.js";import{E as P,C as k,P as j,B as h,a as p,S as v,T as S}from"./ContactShadows-BCl5AC67.js";import"./tensorflow-Bdm-eNd5.js";const _={stage1:{uniforms:{tDiffuse:{value:null},blurRadius:{value:2},desaturation:{value:.1},chromaticAberration:{value:.5}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float blurRadius;
      uniform float desaturation;
      uniform float chromaticAberration;
      varying vec2 vUv;
      
      void main() {
        vec2 offset = vec2(chromaticAberration * 0.001, 0.0);
        vec4 cr = texture2D(tDiffuse, vUv + offset);
        vec4 cg = texture2D(tDiffuse, vUv);
        vec4 cb = texture2D(tDiffuse, vUv - offset);
        
        vec4 color = vec4(cr.r, cg.g, cb.b, cg.a);
        
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        color.rgb = mix(color.rgb, vec3(gray), desaturation);
        
        gl_FragColor = color;
      }
    `},stage2:{uniforms:{tDiffuse:{value:null},blurRadius:{value:6},desaturation:{value:.25},vignetteStrength:{value:.35}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float blurRadius;
      uniform float desaturation;
      uniform float vignetteStrength;
      varying vec2 vUv;
      
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        
        float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        color.rgb = mix(color.rgb, vec3(gray), desaturation);
        
        float dist = distance(vUv, vec2(0.5));
        float vignette = 1.0 - smoothstep(0.0, vignetteStrength, dist);
        color.rgb *= vignette;
        
        gl_FragColor = color;
      }
    `},stage3:{uniforms:{tDiffuse:{value:null},centerBlur:{value:15},scotomaSize:{value:.3}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float centerBlur;
      uniform float scotomaSize;
      varying vec2 vUv;
      
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        
        float dist = distance(vUv, vec2(0.5));
        float mask = 1.0 - smoothstep(0.0, scotomaSize, dist);
        
        if (mask > 0.5) {
          color.rgb = mix(color.rgb, vec3(0.0), mask * 0.8);
        }
        
        gl_FragColor = color;
      }
    `},stage4:{uniforms:{tDiffuse:{value:null},blurRadius:{value:20},contrastLoss:{value:.4},yellowTint:{value:new U(1,.86,.39)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float blurRadius;
      uniform float contrastLoss;
      uniform vec3 yellowTint;
      varying vec2 vUv;
      
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        
        color.rgb = mix(color.rgb, vec3(1.0), contrastLoss);
        color.rgb = mix(color.rgb, yellowTint, 0.2);
        
        gl_FragColor = color;
      }
    `},stage5:{uniforms:{tDiffuse:{value:null},darkness:{value:.9}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float darkness;
      varying vec2 vUv;
      
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        color.rgb = mix(color.rgb, vec3(0.0), darkness);
        gl_FragColor = color;
      }
    `}};function u({position:i,size:r,color:s}){return e.jsx(h,{position:i,args:r,children:e.jsx("meshStandardMaterial",{color:s,roughness:.8,metalness:.2})})}function m({position:i}){return e.jsxs("group",{position:i,children:[e.jsx(p,{position:[0,1,0],args:[.3,.4,2],children:e.jsx("meshStandardMaterial",{color:"#8B4513",roughness:.9})}),e.jsx(v,{position:[0,2.5,0],args:[1.2],children:e.jsx("meshStandardMaterial",{color:"#228B22",roughness:.8})})]})}function f({position:i,text:r,isCorrect:s}){const[t,o]=a.useState(!1),[d,c]=a.useState(!1),[n,l]=a.useState(!1);return a.useEffect(()=>{if(t&&!n){const g=setTimeout(()=>{c(!0),setTimeout(()=>{l(!0),s&&x.getState().completeTask("read_sign")},3e3)},100);return()=>clearTimeout(g)}},[t,n,s]),e.jsxs("group",{position:i,children:[e.jsx(p,{args:[.1,.1,3],position:[0,1.5,0],children:e.jsx("meshStandardMaterial",{color:"#696969"})}),e.jsx(h,{args:[2,1,.1],position:[0,3,0],onPointerOver:()=>o(!0),onPointerOut:()=>o(!1),children:e.jsx("meshStandardMaterial",{color:n?"#00FF00":t?"#FFFF00":"#C0C0C0"})}),e.jsx(S,{position:[0,3,.06],fontSize:.3,color:"#000000",anchorX:"center",anchorY:"middle",children:r}),d&&e.jsx(S,{position:[0,4,0],fontSize:.2,color:"#00FF00",anchorX:"center",anchorY:"middle",children:"Reading..."})]})}function b({position:i}){const[r,s]=a.useState("red");return a.useEffect(()=>{const t=setInterval(()=>{s(o=>o==="red"?"green":"red")},15e3);return()=>clearInterval(t)},[]),e.jsxs("group",{position:i,children:[e.jsx(p,{args:[.2,.2,4],position:[0,2,0],children:e.jsx("meshStandardMaterial",{color:"#333333"})}),e.jsx(h,{args:[.8,2,.3],position:[0,4,0],children:e.jsx("meshStandardMaterial",{color:"#000000"})}),e.jsx(v,{position:[0,4.5,.16],args:[.25],children:e.jsx("meshStandardMaterial",{color:r==="red"?"#FF0000":"#333333",emissive:r==="red"?"#FF0000":"#000000",emissiveIntensity:.5})}),e.jsx(v,{position:[0,3.8,.16],args:[.25],children:e.jsx("meshStandardMaterial",{color:r==="green"?"#00FF00":"#333333",emissive:r==="green"?"#00FF00":"#000000",emissiveIntensity:.5})})]})}function T({position:i,path:r}){const s=a.useRef(),[t,o]=a.useState(0);return F(d=>{if(s.current&&r){const c=r[t],n=new z(c.x-s.current.position.x,0,c.z-s.current.position.z);n.length()>.1?(n.normalize(),s.current.position.x+=n.x*.02,s.current.position.z+=n.z*.02,s.current.lookAt(c.x,1.6,c.z)):o(g=>(g+1)%r.length)}}),e.jsxs("group",{ref:s,position:i,children:[e.jsx(Capsule,{args:[.3,1.2],position:[0,1.2,0],children:e.jsx("meshStandardMaterial",{color:"#4169E1"})}),e.jsx(v,{args:[.25],position:[0,2.2,0],children:e.jsx("meshStandardMaterial",{color:"#FDBCB4"})})]})}function A({stage:i}){const{gl:r,scene:s,camera:t}=N();return a.useRef(),a.useEffect(()=>{if(i>0){const o=_[`stage${i}`];o&&new w(o)}},[i]),null}function E(){const{visionStage:i}=x(o=>o.scenarioData),[r,s]=a.useState([0,1.7,5]),t=[{x:-10,z:0},{x:10,z:0},{x:10,z:-10},{x:-10,z:-10},{x:-10,z:0}];return e.jsxs(e.Fragment,{children:[e.jsx("ambientLight",{intensity:.4}),e.jsx("directionalLight",{position:[10,20,10],intensity:1,castShadow:!0,"shadow-mapSize":[2048,2048]}),e.jsx(j,{rotation:[-Math.PI/2,0,0],args:[100,100],position:[0,0,0],receiveShadow:!0,children:e.jsx("meshStandardMaterial",{color:"#808080",roughness:.8})}),e.jsx(u,{position:[-15,5,-10],size:[8,10,8],color:"#8B4513"}),e.jsx(u,{position:[15,6,-10],size:[10,12,8],color:"#696969"}),e.jsx(u,{position:[-15,4,10],size:[6,8,8],color:"#A0522D"}),e.jsx(u,{position:[15,7,10],size:[12,14,8],color:"#708090"}),e.jsx(m,{position:[-5,0,-5]}),e.jsx(m,{position:[5,0,-5]}),e.jsx(m,{position:[-5,0,5]}),e.jsx(m,{position:[5,0,5]}),e.jsx(f,{position:[-8,0,-2],text:"City Hall",isCorrect:!0}),e.jsx(f,{position:[0,0,-2],text:"Library",isCorrect:!1}),e.jsx(f,{position:[8,0,-2],text:"Post Office",isCorrect:!1}),e.jsx(b,{position:[-10,0,0]}),e.jsx(b,{position:[10,0,0]}),e.jsx(j,{rotation:[-Math.PI/2,0,0],args:[3,8],position:[0,.01,0],children:e.jsx("meshStandardMaterial",{color:"#FFFFFF"})}),e.jsx(T,{position:[-5,0,0],path:t}),e.jsx(A,{stage:i})]})}function R(){const{scenarioData:i,sessionMetrics:r}=x(),{completedTasks:s,visionStage:t}=i;return e.jsxs("div",{className:"fixed inset-0 pointer-events-none z-50",children:[e.jsxs("div",{className:"absolute top-4 left-4 glass-morphism p-4 pointer-events-auto",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Tasks"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:`flex items-center gap-2 ${s.includes("read_sign")?"text-green-400":"text-gray-400"}`,children:[e.jsx("span",{children:s.includes("read_sign")?"✓":"○"}),e.jsx("span",{children:"Read Street Sign"})]}),e.jsxs("div",{className:`flex items-center gap-2 ${s.includes("cross_street")?"text-green-400":"text-gray-400"}`,children:[e.jsx("span",{children:s.includes("cross_street")?"✓":"○"}),e.jsx("span",{children:"Cross Street Safely"})]}),e.jsxs("div",{className:`flex items-center gap-2 ${s.includes("find_entrance")?"text-green-400":"text-gray-400"}`,children:[e.jsx("span",{children:s.includes("find_entrance")?"✓":"○"}),e.jsx("span",{children:"Find Accessible Entrance"})]})]})]}),e.jsxs("div",{className:"absolute top-4 right-4 glass-morphism p-4 pointer-events-auto",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Vision Stage"}),e.jsxs("div",{className:"text-2xl font-bold gradient-text",children:[t,"/5"]}),e.jsxs("div",{className:"text-sm text-gray-400",children:[t===1&&"Mild Myopia",t===2&&"Moderate + Tunnel Vision",t===3&&"Macular Degeneration",t===4&&"Advanced Cataracts",t===5&&"Legal Blindness"]})]}),e.jsx("div",{className:"absolute bottom-4 left-4 glass-morphism p-4 pointer-events-auto",children:e.jsxs("div",{className:"text-sm space-y-1",children:[e.jsx("div",{children:"WASD - Move"}),e.jsx("div",{children:"Mouse - Look Around"}),e.jsx("div",{children:"Approach signs to read"})]})}),e.jsx("div",{className:"absolute bottom-4 right-4 glass-morphism p-3 pointer-events-auto",children:e.jsx("div",{className:"text-xs text-cyan-accent",children:"♿ WCAG 2.1 Compliant"})})]})}function $(){const{setCurrentScene:i,updateVisionStage:r,startSession:s,endSession:t}=x(),[o,d]=a.useState(!0);a.useEffect(()=>(s(),()=>t()),[s,t]);const c=()=>{i("dashboard")},n=l=>{r(l)};return e.jsxs("div",{className:"relative w-full h-screen bg-deep-navy",children:[e.jsx(y,{children:o&&e.jsx(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 z-50 flex items-center justify-center bg-black/80",children:e.jsxs("div",{className:"glass-morphism p-8 max-w-2xl mx-4",children:[e.jsx("h2",{className:"text-3xl font-bold gradient-text mb-4",children:"Visual Impairment Simulation"}),e.jsxs("div",{className:"text-gray-300 space-y-4 mb-6",children:[e.jsx("p",{children:"Experience navigating a city with progressive vision loss. You'll complete three tasks:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 ml-4",children:[e.jsx("li",{children:"Read street signs with varying contrast levels"}),e.jsx("li",{children:"Cross streets using accessible pedestrian signals"}),e.jsx("li",{children:"Find accessible building entrances"})]}),e.jsx("p",{className:"text-sm text-cyan-accent",children:"Your vision will progressively deteriorate through 5 stages. Use audio cues and other senses to navigate."})]}),e.jsx("button",{onClick:()=>d(!1),className:"button-primary w-full",children:"Start Simulation"})]})})}),e.jsxs(C,{shadows:!0,camera:{position:[0,1.7,5],fov:75},className:"w-full h-full",children:[e.jsx(E,{}),e.jsx(M,{enablePan:!1,enableZoom:!1,maxPolarAngle:Math.PI/2,minDistance:1,maxDistance:10}),e.jsx(P,{preset:"city"}),e.jsx(k,{position:[0,-.1,0],opacity:.3})]}),e.jsx(R,{}),e.jsxs("div",{className:"absolute top-20 right-4 glass-morphism p-4 pointer-events-auto",children:[e.jsx("h4",{className:"text-sm font-semibold mb-2",children:"Test Controls"}),e.jsx("div",{className:"space-y-2",children:[1,2,3,4,5].map(l=>e.jsxs("button",{onClick:()=>n(l),className:`w-full px-3 py-1 rounded text-sm ${visionStage===l?"bg-purple-accent text-white":"glass-morphism"}`,children:["Stage ",l]},l))})]}),e.jsx("button",{onClick:c,className:"absolute top-4 left-1/2 transform -translate-x-1/2 glass-morphism px-6 py-2 pointer-events-auto hover:bg-white/20 transition-colors",children:"Exit Simulation"})]})}export{$ as default};
