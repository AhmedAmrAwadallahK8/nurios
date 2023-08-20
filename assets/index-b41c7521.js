import{b as k,o as Z,g as S,a as $,i as b,c as g,S as $t,d as A,s as rt,e as yt,t as C,f as Y,h as F,j as wt,k as St,l as Ct,C as ot,U as Et,R as kt,m as Dt,n as ut,p as Rt,r as tt,q as It,u as Bt,v as V,w as dt}from"./entry-client-7a7033bb.js";const Tt="#FF10F0",Ut="#39FF14",[q,Lt]=k(Tt),[z,jt]=k(Ut),[J,W]=k([]),Ot=(t=J())=>t.map(e=>{const{startX:n,startY:s,width:r,height:a}=e;return{minX:Math.min(n,n+r),maxX:Math.max(n,n+r),minY:Math.min(s,s+a),maxY:Math.max(s,s+a)}}),Pt=()=>J().length===0,ht=t=>{const e=U();e&&(e.strokeStyle=t)},At=(t=z())=>ht(t),Mt=(t=q())=>ht(t),ft={width:500,height:300,imgData:null,file:null},[E,gt]=k(ft),Yt=()=>{document.querySelector("#upload-input").value="",gt(ft)},Ft=()=>!!E().imgData,Xt=C('<div class="absolute image-prompt z-10">Upload an image to begin'),Nt=C('<div class="relative flex justify-center desktop-only"><!#><!/><canvas id="main-canvas">Image canvas not loaded'),X="main-canvas",[it,N]=k(null),[U,qt]=k(null),[zt,Ht]=k(null),Wt=()=>{const t=document.querySelector(`#${X}`),e=t.getBoundingClientRect(),n=t?.getContext("2d");if(!n)return console.error("No canvas found.");qt(n),Ht(e);const s=l=>{if(l.target.id!==X||!E().imgData)return;if(l.button===2)return r(l);const h=l.offsetX,d=l.offsetY;N([h,d]),t.style.cursor="crosshair"},r=l=>{console.log("happening"),l.preventDefault();const p=l.offsetX,_=l.offsetY,h=Ot().findIndex(({minX:d,maxX:x,minY:v,maxY:y})=>p>=d&&p<=x&&_>=v&&_<=y);console.log(h),h!==-1&&(W(d=>[...d.slice(0,h),...d.slice(h+1)]),j())},a=l=>{if(l.target.id!==X)return;const _=it();if(!_)return;const[h,d]=_,x=l.offsetX,v=l.offsetY,y=Math.abs(x-h),w=Math.abs(v-d);return y<=10||w<=10?(t.style.cursor="default",N(null)):(t.style.cursor="default",W(I=>[...I,{startX:h,startY:d,width:x-h,height:v-d}]),j(),N(null))},i=l=>{if(l.target.id!=X)return;const _=it();if(!_)return;j();const[h,d]=_,x=l.offsetX,v=l.offsetY;n.save(),n.beginPath(),Mt(),n.setLineDash([6]),n.strokeRect(h,d,x-h,v-d),n.restore()},u=l=>{l.code==="Escape"&&(N(null),j(),t.style.cursor="default"),l.ctrlKey&&l.key==="z"&&pt()};t.addEventListener("mousemove",i,!1),t.addEventListener("mousedown",s,!1),t.addEventListener("mouseup",a,!1),t.addEventListener("contextmenu",l=>(l.preventDefault(),!1),!1),window.addEventListener("keydown",u,!1)},Jt=()=>{const t=document.querySelector("#upload-input"),e=n=>{const s=n.target;if(!s.files||s.files?.length===0)return;const r=U();if(!r)return;const a=s.files[0],i=new Image;i.onload=()=>{gt({width:i.width,height:i.height,imgData:i,file:a}),r.drawImage(i,0,0)},i.src=URL.createObjectURL(a)};t.addEventListener("change",n=>e(n))},j=()=>{const t=U(),e=zt();if(!t||!e)return;const{imgData:n}=E();if(!n)return console.error("no image data in redrawAllBoxes");t.clearRect(0,0,e.width,e.height),t.drawImage(n,0,0),J().forEach(s=>{t.beginPath(),t.rect(s.startX,s.startY,s.width,s.height),At(),t.stroke()})},Gt=()=>{const t=U();t&&(t.reset(),W([]),Yt())},pt=()=>{U()&&(W(t=>t.slice(0,t.length-1)),j())},Kt=()=>{U()},Qt=()=>(Z(()=>Wt()),Z(()=>Jt()),(()=>{const t=S(Nt),e=t.firstChild,[n,s]=$(e.nextSibling),r=n.nextSibling;return b(t,g($t,{get when(){return!E().file},get children(){return S(Xt)}}),n,s),A(a=>{const i=E().width,u=E().height,l="canvas "+E().imgData?"canvas-shadow-active":"canvas-shadow-inactive";return i!==a._v$&&rt(r,"width",a._v$=i),u!==a._v$2&&rt(r,"height",a._v$2=u),l!==a._v$3&&yt(r,a._v$3=l),a},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})()),Zt="application/json",_t="Content-Type",B=Symbol(),mt=Symbol();function lt(t={}){var e;return(e=Object.entries(t).find(([n])=>n.toLowerCase()===_t.toLowerCase()))===null||e===void 0?void 0:e[1]}function at(t){return/^application\/.*json.*/.test(t)}const D=function(t,e,n=!1){return Object.entries(e).reduce((s,[r,a])=>{const i=t[r];return Array.isArray(i)&&Array.isArray(a)?s[r]=n?[...i,...a]:a:typeof i=="object"&&typeof a=="object"?s[r]=D(i,a,n):s[r]=a,s},{...t})},T={options:{},errorType:"text",polyfills:{},polyfill(t,e=!0,n=!1,...s){const r=this.polyfills[t]||(typeof self<"u"?self[t]:null)||(typeof global<"u"?global[t]:null);if(e&&!r)throw new Error(t+" is not defined");return n&&r?new r(...s):r}};function Vt(t,e=!1){T.options=e?t:D(T.options,t)}function te(t,e=!1){T.polyfills=e?t:D(T.polyfills,t)}function ee(t){T.errorType=t}const ne=t=>e=>t.reduceRight((n,s)=>s(n),e)||e;class bt extends Error{}const se=t=>{const e=Object.create(null);t=t._addons.reduce((o,c)=>c.beforeRequest&&c.beforeRequest(o,t._options,e)||o,t);const{_url:n,_options:s,_config:r,_catchers:a,_resolvers:i,_middlewares:u,_addons:l}=t,p=new Map(a),_=D(r.options,s);let h=n;const d=ne(u)((o,c)=>(h=o,r.polyfill("fetch")(o,c)))(n,_),x=new Error,v=d.catch(o=>{throw{[B]:o}}).then(o=>{if(!o.ok){const c=new bt;if(c.cause=x,c.stack=c.stack+`
CAUSE: `+x.stack,c.response=o,c.url=h,o.type==="opaque")throw c;return o.text().then(f=>{var m;if(c.message=f,r.errorType==="json"||((m=o.headers.get("Content-Type"))===null||m===void 0?void 0:m.split(";")[0])==="application/json")try{c.json=JSON.parse(f)}catch{}throw c.text=f,c.status=o.status,c})}return o}),y=o=>o.catch(c=>{const f=c.hasOwnProperty(B),m=f?c[B]:c,L=m?.status&&p.get(m.status)||p.get(m?.name)||f&&p.has(B)&&p.get(B);if(L)return L(m,t);const M=p.get(mt);if(M)return M(m,t);throw m}),w=o=>c=>y(o?v.then(f=>f&&f[o]()).then(f=>c?c(f):f):v.then(f=>c?c(f):f)),I={_wretchReq:t,_fetchReq:d,_sharedState:e,res:w(null),json:w("json"),blob:w("blob"),formData:w("formData"),arrayBuffer:w("arrayBuffer"),text:w("text"),error(o,c){return p.set(o,c),this},badRequest(o){return this.error(400,o)},unauthorized(o){return this.error(401,o)},forbidden(o){return this.error(403,o)},notFound(o){return this.error(404,o)},timeout(o){return this.error(408,o)},internalError(o){return this.error(500,o)},fetchError(o){return this.error(B,o)}},K=l.reduce((o,c)=>({...o,...c.resolver}),I);return i.reduce((o,c)=>c(o,t),K)},re={_url:"",_options:{},_config:T,_catchers:new Map,_resolvers:[],_deferred:[],_middlewares:[],_addons:[],addon(t){return{...this,_addons:[...this._addons,t],...t.wretch}},errorType(t){return{...this,_config:{...this._config,errorType:t}}},polyfills(t,e=!1){return{...this,_config:{...this._config,polyfills:e?t:D(this._config.polyfills,t)}}},url(t,e=!1){if(e)return{...this,_url:t};const n=this._url.split("?");return{...this,_url:n.length>1?n[0]+t+"?"+n[1]:this._url+t}},options(t,e=!1){return{...this,_options:e?t:D(this._options,t)}},headers(t){return{...this,_options:D(this._options,{headers:t||{}})}},accept(t){return this.headers({Accept:t})},content(t){return this.headers({[_t]:t})},auth(t){return this.headers({Authorization:t})},catcher(t,e){const n=new Map(this._catchers);return n.set(t,e),{...this,_catchers:n}},catcherFallback(t){return this.catcher(mt,t)},resolve(t,e=!1){return{...this,_resolvers:e?[t]:[...this._resolvers,t]}},defer(t,e=!1){return{...this,_deferred:e?[t]:[...this._deferred,t]}},middlewares(t,e=!1){return{...this,_middlewares:e?t:[...this._middlewares,...t]}},fetch(t=this._options.method,e="",n=null){let s=this.url(e).options({method:t});const r=lt(s._options.headers),a=typeof n=="object"&&(!s._options.headers||!r||at(r));return s=n?a?s.json(n,r):s.body(n):s,se(s._deferred.reduce((i,u)=>u(i,i._url,i._options),s))},get(t=""){return this.fetch("GET",t)},delete(t=""){return this.fetch("DELETE",t)},put(t,e=""){return this.fetch("PUT",e,t)},post(t,e=""){return this.fetch("POST",e,t)},patch(t,e=""){return this.fetch("PATCH",e,t)},head(t=""){return this.fetch("HEAD",t)},opts(t=""){return this.fetch("OPTIONS",t)},body(t){return{...this,_options:{...this._options,body:t}}},json(t,e){const n=lt(this._options.headers);return this.content(e||at(n)&&n||Zt).body(JSON.stringify(t))}};function R(t="",e={}){return{...re,_url:t,_options:e}}R.default=R;R.options=Vt;R.errorType=ee;R.polyfills=te;R.WretchError=bt;var G=(t=>(t.ServerDown="Server seems to be down currently. You can still play around with the application, but the server won't be able to process your submission. Please try again later and if it persists please submit an issue on GitHub.",t.BadInput="Server received invalid input, but this is unexpected. You can try to refresh the page and try again. ",t.UncaughtError="An unexpected unknown error occurred. ",t))(G||{});const[H,et]=k(null),xt={serverBaseUrl:{development:"http://localhost:8080/",production:"https://capserver.ncn.dev/"},wsBaseUrl:{development:"ws://localhost:8080/ws",production:"wss://capserver.ncn.dev/ws"}},vt="production",O=xt.serverBaseUrl[vt],oe=xt.wsBaseUrl[vt],ie=t=>et({msg:G.BadInput,additionalDataStr:t.response.body?JSON.stringify(t.message):void 0}),le=R(O).resolve(t=>t.error(422,ie));let ct;const ae=async t=>{try{if(!t.file)return console.error("Something went wrong with accessing the model file when trying to submit.");Y(F.Initializing);const e=`${O}process`,n=new FormData;n.append("file",t.file),n.append("box_data",JSON.stringify({boxes:t.boxes})),n.append("intro","hello testing");const s=await fetch(e,{method:"POST",body:n}),{id:r,outline_img_path:a,seg_img_path:i,og_img_path:u}=await s.json();if(!r)return console.error("Missing id property on data response object.");Y(F.InQueue),ct=new WebSocket(`${oe}?queue_id=${r}`),ct.onmessage=l=>{l.data==="processing"&&Y(F.Processing),l.data==="complete"&&(Y(F.Complete),wt({seg:`${O}${i}`,outline:`${O}${a}`,og:`${O}${u}`})),St(Number(l.data))}}catch(e){Ct(!1),et({msg:G.UncaughtError}),console.error(e)}},ce=()=>{le.url("ping").get().json(t=>t).catch(t=>et({msg:G.ServerDown}))},ue=C('<button class="tool-button cursor-pointer"><!#><!/><label class="text-neutral-400 hover:text-sky-600 cursor-pointer mt-0.5">'),de=C('<button class="flex items-center gap-2 bg-green-600 disabled:bg-neutral-700 rounded-sm p-2 duration-300"><span>Submit</span><!#><!/>'),he=C('<input type="file" accept="image/*" id="upload-input" class="w-32 hidden">'),fe=C('<div class="text-white text-md flex justify-center gap-4 items-center desktop-only mb-8"><!#><!/><div class="flex"><input type="color" id="drawing-color" name="drawing-color-input" class="w-0 h-0 -z-50"><!#><!/></div><div class="flex"><input type="color" id="box-color" name="box-color-input" class="w-0 h-0 -z-50"><!#><!/></div><!#><!/><!#><!/><!#><!/>'),P=t=>(()=>{const e=S(ue),n=e.firstChild,[s,r]=$(n.nextSibling),a=s.nextSibling;return ut(e,"click",t.onClick,!0),b(e,()=>t.icon,s,r),b(a,()=>t.label),A(i=>{const u=!!t.flexibleWidth,l=t.style;return u!==i._v$&&e.classList.toggle("flexible",i._v$=u),i._v$2=Rt(e,l,i._v$2),i},{_v$:void 0,_v$2:void 0}),tt(),e})(),ge=()=>(()=>{const t=S(de),e=t.firstChild,n=e.nextSibling,[s,r]=$(n.nextSibling);return t.$$click=a=>ae({intro:"placeholder intro msg",boxes:J(),file:E().file}),b(t,g(It,{}),s,r),A(()=>t.disabled=Pt()),tt(),t})(),pe=()=>{let t;const e=()=>t?.click();return[(()=>{const n=S(he);ut(n,"click",Kt,!0);const s=t;return typeof s=="function"?V(s,n):t=n,tt(),n})(),g(P,{get icon(){return g(Bt,{})},get label(){return Ft()?"Change Image":"Upload Image"},onClick:()=>e(),flexibleWidth:!0})]},_e=()=>{let t,e;return(()=>{const n=S(fe),s=n.firstChild,[r,a]=$(s.nextSibling),i=r.nextSibling,u=i.firstChild,l=u.nextSibling,[p,_]=$(l.nextSibling),h=i.nextSibling,d=h.firstChild,x=d.nextSibling,[v,y]=$(x.nextSibling),w=h.nextSibling,[I,K]=$(w.nextSibling),o=I.nextSibling,[c,f]=$(o.nextSibling),m=c.nextSibling,[L,M]=$(m.nextSibling);b(n,g(pe,{}),r,a);const nt=t;typeof nt=="function"?V(nt,u):t=u,u.addEventListener("change",Q=>Lt(Q.target.value)),b(i,g(P,{get icon(){return g(ot,{get style(){return{color:q()}}})},label:"Drawing",onClick:()=>t?.click(),get style(){return{"border-color":q()}}}),p,_);const st=e;return typeof st=="function"?V(st,d):e=d,d.addEventListener("change",Q=>jt(Q.target.value)),b(h,g(P,{get icon(){return g(ot,{get style(){return{color:z()}}})},label:"Box",onClick:()=>e?.click(),get style(){return{"border-color":z()}}}),v,y),b(n,g(P,{get icon(){return g(Et,{})},label:"Undo",onClick:pt}),I,K),b(n,g(P,{get icon(){return g(kt,{cls:"text-lg"})},label:"Reset",onClick:Gt}),c,f),b(n,g(ge,{}),L,M),A(()=>u.value=q()),A(()=>d.value=z()),n})()};Dt(["click"]);const me=C('<aside class="error-menu"><p>Error!</p><p></p><!#><!/>'),be=C("<p>"),xe=()=>(()=>{const t=S(me),e=t.firstChild,n=e.nextSibling,s=n.nextSibling,[r,a]=$(s.nextSibling);return b(n,()=>H()?.msg),b(t,(()=>{const i=dt(()=>!!H()?.additionalDataStr);return()=>i()&&(()=>{const u=S(be);return b(u,()=>H()?.additionalDataStr),u})()})(),r,a),t})(),ve=C('<div class="text-center flex flex-col items-center flex-auto"><main class="flex flex-col"><div class="flex flex-col mb-24"><h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-4">Nurios</h1><p class="text-md text-neutral-500 desktop-only">Tips</p><ul class="mb-8 desktop-only"><li class="basic-text">- Press ctrl + Z to undo last box -</li><li class="basic-text">- Press Esc to stop drawing -</li><li class="basic-text">- Right click will delete a box -</li></ul><!#><!/><!#><!/><!#><!/><div class="mobile-only flex-col mt-56 text-neutral-300"><p>Nurios is not supported on small screen sizes yet.');function ye(){return Z(()=>ce()),(()=>{const t=S(ve),e=t.firstChild,n=e.firstChild,s=n.firstChild,r=s.nextSibling,a=r.nextSibling,i=a.nextSibling,[u,l]=$(i.nextSibling),p=u.nextSibling,[_,h]=$(p.nextSibling),d=_.nextSibling,[x,v]=$(d.nextSibling);return x.nextSibling,b(n,(()=>{const y=dt(()=>!!H());return()=>y()&&g(xe,{})})(),u,l),b(n,g(_e,{}),_,h),b(n,g(Qt,{}),x,v),t})()}export{ye as default};
