import{b as E,o as Q,g as $,a as m,i as p,c as f,S as Se,d as W,s as oe,e as we,t as x,f as A,h as M,j as Ce,k as Ee,l as De,C as ie,U as ke,R as Re,m as Ie,n as de,p as Ue,r as ee,q as Te,u as Be,v as Z,w as he}from"./entry-client-7ceed444.js";const Le="#FF10F0",je="#39FF14",[N,Oe]=E(Le),[Y,Pe]=E(je),[fe,te]=E([]),ge=e=>{const t=T();t&&(t.strokeStyle=e)},Ae=(e=Y())=>ge(e),Me=(e=N())=>ge(e),pe={width:500,height:300,imgData:null,file:null},[C,_e]=E(pe),Fe=()=>{document.querySelector("#upload-input").value="",_e(pe)},qe=()=>!!C().imgData,Ne=x('<div class="absolute image-prompt z-10">Upload an image to begin'),Ye=x('<div class="relative flex justify-center"><!#><!/><canvas id="main-canvas">Image canvas not loaded'),F="main-canvas",K=e=>({mouseX:e.offsetX,mouseY:e.offsetY}),[V,q]=E(null),le=()=>V()!==null,[T,Xe]=E(null),[He,We]=E(null),ze=()=>{const e=document.querySelector(`#${F}`),t=e.getBoundingClientRect(),n=e?.getContext("2d");Xe(n),We(t);const s=l=>{if(l.target.id!==F||!C().imgData)return;const{mouseX:u,mouseY:d}=K(l);q([u,d]),e.style.cursor="crosshair"},o=l=>{if(l.target.id!==F||!le())return;const{mouseX:u,mouseY:d}=K(l),[b,_]=V(),v=Math.abs(u-b),y=Math.abs(d-_);return v<=10||y<=10?(e.style.cursor="default",q(null)):(e.style.cursor="default",te(S=>[...S,{startX:b,startY:_,width:u-b,height:d-_}]),X(),q(null))},i=l=>{if(l.target.id!=F||!le())return;X();const{mouseX:u,mouseY:d}=K(l),[b,_]=V();n.save(),n.beginPath(),Me(),n.setLineDash([6]),n.strokeRect(b,_,u-b,d-_),n.restore()},c=l=>{l.code==="Escape"&&(q(null),X(),e.style.cursor="default"),l.ctrlKey&&l.key==="z"&&me()};e.addEventListener("mousemove",i,!1),e.addEventListener("mousedown",s,!1),e.addEventListener("mouseup",o,!1),window.addEventListener("keydown",c,!1)},Je=()=>{const e=document.querySelector("#upload-input"),t=n=>{if(n.target.files.length===0)return;const s=T();if(!s)return;const o=n.target.files[0],i=new Image;i.onload=()=>{_e({width:i.width,height:i.height,imgData:i,file:o}),s.drawImage(i,0,0)},i.src=URL.createObjectURL(o)};e?.addEventListener("change",t)},X=()=>{const e=T(),t=He();if(!e||!t)return;const{imgData:n}=C();if(!n)return console.error("no image data in redrawAllBoxes");e.clearRect(0,0,t.width,t.height),e.drawImage(n,0,0),fe().forEach(s=>{e.beginPath(),e.rect(s.startX,s.startY,s.width,s.height),Ae(),e.stroke()})},Ge=()=>{const e=T();e&&(e.reset(),te([]),Fe())},me=()=>{T()&&(te(e=>e.slice(0,e.length-1)),X())},Ke=()=>{T()},Qe=()=>(Q(()=>ze()),Q(()=>Je()),(()=>{const e=$(Ye),t=e.firstChild,[n,s]=m(t.nextSibling),o=n.nextSibling;return p(e,f(Se,{get when(){return!C().file},get children(){return $(Ne)}}),n,s),W(i=>{const c=C().width,l=C().height,u="canvas "+C().imgData?"canvas-shadow-active":"canvas-shadow-inactive";return c!==i._v$&&oe(o,"width",i._v$=c),l!==i._v$2&&oe(o,"height",i._v$2=l),u!==i._v$3&&we(o,i._v$3=u),i},{_v$:void 0,_v$2:void 0,_v$3:void 0}),e})()),Ze="application/json",be="Content-Type",I=Symbol(),ve=Symbol();function ae(e={}){var t;return(t=Object.entries(e).find(([n])=>n.toLowerCase()===be.toLowerCase()))===null||t===void 0?void 0:t[1]}function ce(e){return/^application\/.*json.*/.test(e)}const D=function(e,t,n=!1){return Object.entries(t).reduce((s,[o,i])=>{const c=e[o];return Array.isArray(c)&&Array.isArray(i)?s[o]=n?[...c,...i]:i:typeof c=="object"&&typeof i=="object"?s[o]=D(c,i,n):s[o]=i,s},{...e})},U={options:{},errorType:"text",polyfills:{},polyfill(e,t=!0,n=!1,...s){const o=this.polyfills[e]||(typeof self<"u"?self[e]:null)||(typeof global<"u"?global[e]:null);if(t&&!o)throw new Error(e+" is not defined");return n&&o?new o(...s):o}};function Ve(e,t=!1){U.options=t?e:D(U.options,e)}function et(e,t=!1){U.polyfills=t?e:D(U.polyfills,e)}function tt(e){U.errorType=e}const nt=e=>t=>e.reduceRight((n,s)=>s(n),t)||t;class $e extends Error{}const st=e=>{const t=Object.create(null);e=e._addons.reduce((r,a)=>a.beforeRequest&&a.beforeRequest(r,e._options,t)||r,e);const{_url:n,_options:s,_config:o,_catchers:i,_resolvers:c,_middlewares:l,_addons:u}=e,d=new Map(i),b=D(o.options,s);let _=n;const v=nt(l)((r,a)=>(_=r,o.polyfill("fetch")(r,a)))(n,b),y=new Error,S=v.catch(r=>{throw{[I]:r}}).then(r=>{if(!r.ok){const a=new $e;if(a.cause=y,a.stack=a.stack+`
CAUSE: `+y.stack,a.response=r,a.url=_,r.type==="opaque")throw a;return r.text().then(h=>{var g;if(a.message=h,o.errorType==="json"||((g=r.headers.get("Content-Type"))===null||g===void 0?void 0:g.split(";")[0])==="application/json")try{a.json=JSON.parse(h)}catch{}throw a.text=h,a.status=r.status,a})}return r}),R=r=>r.catch(a=>{const h=a.hasOwnProperty(I),g=h?a[I]:a,B=g?.status&&d.get(g.status)||d.get(g?.name)||h&&d.has(I)&&d.get(I);if(B)return B(g,e);const P=d.get(ve);if(P)return P(g,e);throw g}),w=r=>a=>R(r?S.then(h=>h&&h[r]()).then(h=>a?a(h):h):S.then(h=>a?a(h):h)),O={_wretchReq:e,_fetchReq:v,_sharedState:t,res:w(null),json:w("json"),blob:w("blob"),formData:w("formData"),arrayBuffer:w("arrayBuffer"),text:w("text"),error(r,a){return d.set(r,a),this},badRequest(r){return this.error(400,r)},unauthorized(r){return this.error(401,r)},forbidden(r){return this.error(403,r)},notFound(r){return this.error(404,r)},timeout(r){return this.error(408,r)},internalError(r){return this.error(500,r)},fetchError(r){return this.error(I,r)}},J=u.reduce((r,a)=>({...r,...a.resolver}),O);return c.reduce((r,a)=>a(r,e),J)},rt={_url:"",_options:{},_config:U,_catchers:new Map,_resolvers:[],_deferred:[],_middlewares:[],_addons:[],addon(e){return{...this,_addons:[...this._addons,e],...e.wretch}},errorType(e){return{...this,_config:{...this._config,errorType:e}}},polyfills(e,t=!1){return{...this,_config:{...this._config,polyfills:t?e:D(this._config.polyfills,e)}}},url(e,t=!1){if(t)return{...this,_url:e};const n=this._url.split("?");return{...this,_url:n.length>1?n[0]+e+"?"+n[1]:this._url+e}},options(e,t=!1){return{...this,_options:t?e:D(this._options,e)}},headers(e){return{...this,_options:D(this._options,{headers:e||{}})}},accept(e){return this.headers({Accept:e})},content(e){return this.headers({[be]:e})},auth(e){return this.headers({Authorization:e})},catcher(e,t){const n=new Map(this._catchers);return n.set(e,t),{...this,_catchers:n}},catcherFallback(e){return this.catcher(ve,e)},resolve(e,t=!1){return{...this,_resolvers:t?[e]:[...this._resolvers,e]}},defer(e,t=!1){return{...this,_deferred:t?[e]:[...this._deferred,e]}},middlewares(e,t=!1){return{...this,_middlewares:t?e:[...this._middlewares,...e]}},fetch(e=this._options.method,t="",n=null){let s=this.url(t).options({method:e});const o=ae(s._options.headers),i=typeof n=="object"&&(!s._options.headers||!o||ce(o));return s=n?i?s.json(n,o):s.body(n):s,st(s._deferred.reduce((c,l)=>l(c,c._url,c._options),s))},get(e=""){return this.fetch("GET",e)},delete(e=""){return this.fetch("DELETE",e)},put(e,t=""){return this.fetch("PUT",t,e)},post(e,t=""){return this.fetch("POST",t,e)},patch(e,t=""){return this.fetch("PATCH",t,e)},head(e=""){return this.fetch("HEAD",e)},opts(e=""){return this.fetch("OPTIONS",e)},body(e){return{...this,_options:{...this._options,body:e}}},json(e,t){const n=ae(this._options.headers);return this.content(t||ce(n)&&n||Ze).body(JSON.stringify(e))}};function k(e="",t={}){return{...rt,_url:e,_options:t}}k.default=k;k.options=Ve;k.errorType=tt;k.polyfills=et;k.WretchError=$e;var z=(e=>(e.ServerDown="Server seems to be down currently. You can still play around with the application, but the server won't be able to process your submission. Please try again later and if it persists please submit an issue on GitHub.",e.BadInput="Server received invalid input, but this is unexpected. You can try to refresh the page and try again. ",e.UncaughtError="An unexpected unknown error occurred. ",e))(z||{});const[H,ne]=E(null),xe={serverBaseUrl:{development:"http://localhost:8080/",production:"https://capserver.ncn.dev/"},wsBaseUrl:{development:"ws://localhost:8080/ws",production:"wss://capserver.ncn.dev/ws"}},ye="production",L=xe.serverBaseUrl[ye],ot=xe.wsBaseUrl[ye],it=e=>ne({msg:z.BadInput,additionalDataStr:e.response.body?JSON.stringify(e.message):void 0}),lt=k(L).resolve(e=>e.error(422,it));let ue;const at=async e=>{try{A(M.Initializing);const t=`${L}process`,n=new FormData;n.append("file",e.file),n.append("box_data",JSON.stringify({boxes:e.boxes})),n.append("intro","hello testing");const s=await fetch(t,{method:"POST",body:n}),{id:o,outline_img_path:i,seg_img_path:c,og_img_path:l}=await s.json();if(!o)return console.error("Missing id property on data response object.");A(M.InQueue),ue=new WebSocket(`${ot}?queue_id=${o}`),ue.onmessage=u=>{u.data==="processing"&&A(M.Processing),u.data==="complete"&&(A(M.Complete),Ce({seg:`${L}${c}`,outline:`${L}${i}`,og:`${L}${l}`})),Ee(Number(u.data))}}catch(t){De(!1),ne({msg:z.UncaughtError}),console.error(t)}},ct=()=>{lt.url("ping").get().json(e=>e).catch(e=>ne({msg:z.ServerDown}))},ut=x('<button class="tool-button cursor-pointer"><!#><!/><label class="text-neutral-400 hover:text-sky-600 cursor-pointer mt-0.5">'),dt=x('<button class="flex items-center gap-2 bg-green-600 disabled:bg-neutral-700 rounded-sm p-2 duration-300"><span>Submit</span><!#><!/>'),ht=x('<input type="file" accept="image/*" id="upload-input" class="w-32 hidden">'),ft=x('<div class="text-white text-md flex justify-center gap-4 items-center"><!#><!/><div class="flex"><input type="color" id="drawing-color" name="drawing-color-input" class="w-0 h-0 -z-50"><!#><!/></div><div class="flex"><input type="color" id="box-color" name="box-color-input" class="w-0 h-0 -z-50"><!#><!/></div><!#><!/><!#><!/><!#><!/>'),j=e=>(()=>{const t=$(ut),n=t.firstChild,[s,o]=m(n.nextSibling),i=s.nextSibling;return de(t,"click",e.onClick,!0),p(t,()=>e.icon,s,o),p(i,()=>e.label),W(c=>{const l=!!e.flexibleWidth,u=e.style;return l!==c._v$&&t.classList.toggle("flexible",c._v$=l),c._v$2=Ue(t,u,c._v$2),c},{_v$:void 0,_v$2:void 0}),ee(),t})(),gt=()=>(()=>{const e=$(dt),t=e.firstChild,n=t.nextSibling,[s,o]=m(n.nextSibling);return e.$$click=i=>at({intro:"placeholder intro msg",boxes:fe(),file:C().file}),p(e,f(Te,{}),s,o),ee(),e})(),pt=()=>{let e;const t=()=>{e?.click()};return[(()=>{const n=$(ht);de(n,"click",Ke,!0);const s=e;return typeof s=="function"?Z(s,n):e=n,ee(),n})(),f(j,{get icon(){return f(Be,{})},get label(){return qe()?"Change Image":"Upload Image"},onClick:()=>t(),flexibleWidth:!0})]},_t=()=>{let e,t;return(()=>{const n=$(ft),s=n.firstChild,[o,i]=m(s.nextSibling),c=o.nextSibling,l=c.firstChild,u=l.nextSibling,[d,b]=m(u.nextSibling),_=c.nextSibling,v=_.firstChild,y=v.nextSibling,[S,R]=m(y.nextSibling),w=_.nextSibling,[O,J]=m(w.nextSibling),r=O.nextSibling,[a,h]=m(r.nextSibling),g=a.nextSibling,[B,P]=m(g.nextSibling);p(n,f(pt,{}),o,i);const se=e;typeof se=="function"?Z(se,l):e=l,l.addEventListener("change",G=>Oe(G.target.value)),p(c,f(j,{get icon(){return f(ie,{get style(){return{color:N()}}})},label:"Drawing",onClick:()=>e?.click(),get style(){return{"border-color":N()}}}),d,b);const re=t;return typeof re=="function"?Z(re,v):t=v,v.addEventListener("change",G=>Pe(G.target.value)),p(_,f(j,{get icon(){return f(ie,{get style(){return{color:Y()}}})},label:"Box",onClick:()=>t?.click(),get style(){return{"border-color":Y()}}}),S,R),p(n,f(j,{get icon(){return f(ke,{})},label:"Undo",onClick:me}),O,J),p(n,f(j,{get icon(){return f(Re,{cls:"text-lg"})},label:"Reset",onClick:Ge}),a,h),p(n,f(gt,{}),B,P),W(()=>l.value=N()),W(()=>v.value=Y()),n})()};Ie(["click"]);const mt=x('<aside class="error-menu"><p>Error!</p><p></p><!#><!/>'),bt=x("<p>"),vt=()=>(()=>{const e=$(mt),t=e.firstChild,n=t.nextSibling,s=n.nextSibling,[o,i]=m(s.nextSibling);return p(n,()=>H()?.msg),p(e,(()=>{const c=he(()=>!!H()?.additionalDataStr);return()=>c()&&(()=>{const l=$(bt);return p(l,()=>H()?.additionalDataStr),l})()})(),o,i),e})(),$t=x('<div class="text-center flex flex-col items-center flex-auto"><main class="flex flex-col"><div class="flex flex-col mb-24"><h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-4">Nurios</h1><p class="text-md text-neutral-500">Tips</p><ul class="mb-8"><li class="basic-text">- Press ctrl + Z to undo last box</li><li class="basic-text">- Press Esc to stop drawing</li></ul><!#><!/><!#><!/></div><!#><!/>');function yt(){return Q(()=>ct()),(()=>{const e=$($t),t=e.firstChild,n=t.firstChild,s=n.firstChild,o=s.nextSibling,i=o.nextSibling,c=i.nextSibling,[l,u]=m(c.nextSibling),d=l.nextSibling,[b,_]=m(d.nextSibling),v=n.nextSibling,[y,S]=m(v.nextSibling);return p(n,(()=>{const R=he(()=>!!H());return()=>R()&&f(vt,{})})(),l,u),p(n,f(_t,{}),b,_),p(t,f(Qe,{}),y,S),e})()}export{yt as default};
