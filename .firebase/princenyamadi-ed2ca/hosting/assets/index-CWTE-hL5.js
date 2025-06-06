var Wm=Object.defineProperty;var Ml=t=>{throw TypeError(t)};var Km=(t,e,s)=>e in t?Wm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Et=(t,e,s)=>Km(t,typeof e!="symbol"?e+"":e,s),aa=(t,e,s)=>e.has(t)||Ml("Cannot "+s);var D=(t,e,s)=>(aa(t,e,"read from private field"),s?s.call(t):e.get(t)),te=(t,e,s)=>e.has(t)?Ml("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),Q=(t,e,s,i)=>(aa(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s),Ne=(t,e,s)=>(aa(t,e,"access private method"),s);var Pr=(t,e,s,i)=>({set _(n){Q(t,e,n,s)},get _(){return D(t,e,i)}});import{r as M,b as Gm,g as Nn,a as ie}from"./vendor-CBH9K-97.js";import{u as zd,L as Zr,B as Jm,R as Qm,a as ht}from"./router-Coh8_lC7.js";import{m as C,A as Aa,R as Ll,H as qd,M as so,a as Wd,S as Kd,b as Ym,c as De,C as Gd,T as Jd,d as Qd,U as io,Z as lr,e as en,f as Tn,g as kn,h as ro,i as tn,F as Ul,j as Vl,k as Xm,l as zi,X as no,D as ao,n as Zm,G as Yd,L as Xd,o as ef,p as Zd,q as tf,r as sf,E as rf,V as $l,s as nf,K as af,t as Bl,u as of,v as lf,w as cf,P as df,x as uf,y as oo,z as eu,B as tu,I as su,J as hf,N as mf,Q as iu,O as ff,W as pf,Y as ru,_ as nu,$ as gf,a0 as yf,a1 as xf,a2 as bf,a3 as vf,a4 as oa,a5 as wf,a6 as jf,a7 as _f,a8 as Nf,a9 as Tf,aa as kf,ab as If,ac as Ef,ad as Sf}from"./ui-BqvPRxeB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();var au={exports:{}},In={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af=M,Cf=Symbol.for("react.element"),Pf=Symbol.for("react.fragment"),Rf=Object.prototype.hasOwnProperty,Of=Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Df={key:!0,ref:!0,__self:!0,__source:!0};function ou(t,e,s){var i,n={},o=null,l=null;s!==void 0&&(o=""+s),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)Rf.call(e,i)&&!Df.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:Cf,type:t,key:o,ref:l,props:n,_owner:Of.current}}In.Fragment=Pf;In.jsx=ou;In.jsxs=ou;au.exports=In;var r=au.exports,Ca={},Hl=Gm;Ca.createRoot=Hl.createRoot,Ca.hydrateRoot=Hl.hydrateRoot;var Ff=typeof Element<"u",Mf=typeof Map=="function",Lf=typeof Set=="function",Uf=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Hr(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var s,i,n;if(Array.isArray(t)){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!Hr(t[i],e[i]))return!1;return!0}var o;if(Mf&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(i=o.next()).done;)if(!e.has(i.value[0]))return!1;for(o=t.entries();!(i=o.next()).done;)if(!Hr(i.value[1],e.get(i.value[0])))return!1;return!0}if(Lf&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(i=o.next()).done;)if(!e.has(i.value[0]))return!1;return!0}if(Uf&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(n=Object.keys(t),s=n.length,s!==Object.keys(e).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[i]))return!1;if(Ff&&t instanceof Element)return!1;for(i=s;i--!==0;)if(!((n[i]==="_owner"||n[i]==="__v"||n[i]==="__o")&&t.$$typeof)&&!Hr(t[n[i]],e[n[i]]))return!1;return!0}return t!==t&&e!==e}var Vf=function(e,s){try{return Hr(e,s)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}};const $f=Nn(Vf);var Bf=function(t,e,s,i,n,o,l,d){if(!t){var h;if(e===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[s,i,n,o,l,d],m=0;h=new Error(e.replace(/%s/g,function(){return f[m++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}},Hf=Bf;const zl=Nn(Hf);var zf=function(e,s,i,n){var o=i?i.call(n,e,s):void 0;if(o!==void 0)return!!o;if(e===s)return!0;if(typeof e!="object"||!e||typeof s!="object"||!s)return!1;var l=Object.keys(e),d=Object.keys(s);if(l.length!==d.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(s),f=0;f<l.length;f++){var m=l[f];if(!h(m))return!1;var y=e[m],g=s[m];if(o=i?i.call(n,y,g,m):void 0,o===!1||o===void 0&&y!==g)return!1}return!0};const qf=Nn(zf);var lu=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(lu||{}),la={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},ql=Object.values(lu),lo={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Wf=Object.entries(lo).reduce((t,[e,s])=>(t[s]=e,t),{}),nt="data-rh",Zs={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},ei=(t,e)=>{for(let s=t.length-1;s>=0;s-=1){const i=t[s];if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}return null},Kf=t=>{let e=ei(t,"title");const s=ei(t,Zs.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),s&&e)return s.replace(/%s/g,()=>e);const i=ei(t,Zs.DEFAULT_TITLE);return e||i||void 0},Gf=t=>ei(t,Zs.ON_CHANGE_CLIENT_STATE)||(()=>{}),ca=(t,e)=>e.filter(s=>typeof s[t]<"u").map(s=>s[t]).reduce((s,i)=>({...s,...i}),{}),Jf=(t,e)=>e.filter(s=>typeof s.base<"u").map(s=>s.base).reverse().reduce((s,i)=>{if(!s.length){const n=Object.keys(i);for(let o=0;o<n.length;o+=1){const d=n[o].toLowerCase();if(t.indexOf(d)!==-1&&i[d])return s.concat(i)}}return s},[]),Qf=t=>console&&typeof console.warn=="function"&&console.warn(t),Di=(t,e,s)=>{const i={};return s.filter(n=>Array.isArray(n[t])?!0:(typeof n[t]<"u"&&Qf(`Helmet: ${t} should be of type "Array". Instead found type "${typeof n[t]}"`),!1)).map(n=>n[t]).reverse().reduce((n,o)=>{const l={};o.filter(h=>{let f;const m=Object.keys(h);for(let g=0;g<m.length;g+=1){const T=m[g],x=T.toLowerCase();e.indexOf(x)!==-1&&!(f==="rel"&&h[f].toLowerCase()==="canonical")&&!(x==="rel"&&h[x].toLowerCase()==="stylesheet")&&(f=x),e.indexOf(T)!==-1&&(T==="innerHTML"||T==="cssText"||T==="itemprop")&&(f=T)}if(!f||!h[f])return!1;const y=h[f].toLowerCase();return i[f]||(i[f]={}),l[f]||(l[f]={}),i[f][y]?!1:(l[f][y]=!0,!0)}).reverse().forEach(h=>n.push(h));const d=Object.keys(l);for(let h=0;h<d.length;h+=1){const f=d[h],m={...i[f],...l[f]};i[f]=m}return n},[]).reverse()},Yf=(t,e)=>{if(Array.isArray(t)&&t.length){for(let s=0;s<t.length;s+=1)if(t[s][e])return!0}return!1},Xf=t=>({baseTag:Jf(["href"],t),bodyAttributes:ca("bodyAttributes",t),defer:ei(t,Zs.DEFER),encode:ei(t,Zs.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:ca("htmlAttributes",t),linkTags:Di("link",["rel","href"],t),metaTags:Di("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Di("noscript",["innerHTML"],t),onChangeClientState:Gf(t),scriptTags:Di("script",["src","innerHTML"],t),styleTags:Di("style",["cssText"],t),title:Kf(t),titleAttributes:ca("titleAttributes",t),prioritizeSeoTags:Yf(t,Zs.PRIORITIZE_SEO_TAGS)}),cu=t=>Array.isArray(t)?t.join(""):t,Zf=(t,e)=>{const s=Object.keys(t);for(let i=0;i<s.length;i+=1)if(e[s[i]]&&e[s[i]].includes(t[s[i]]))return!0;return!1},da=(t,e)=>Array.isArray(t)?t.reduce((s,i)=>(Zf(i,e)?s.priority.push(i):s.default.push(i),s),{priority:[],default:[]}):{default:t,priority:[]},Wl=(t,e)=>({...t,[e]:void 0}),ep=["noscript","script","style"],Pa=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),du=t=>Object.keys(t).reduce((e,s)=>{const i=typeof t[s]<"u"?`${s}="${t[s]}"`:`${s}`;return e?`${e} ${i}`:i},""),tp=(t,e,s,i)=>{const n=du(s),o=cu(e);return n?`<${t} ${nt}="true" ${n}>${Pa(o,i)}</${t}>`:`<${t} ${nt}="true">${Pa(o,i)}</${t}>`},sp=(t,e,s=!0)=>e.reduce((i,n)=>{const o=n,l=Object.keys(o).filter(f=>!(f==="innerHTML"||f==="cssText")).reduce((f,m)=>{const y=typeof o[m]>"u"?m:`${m}="${Pa(o[m],s)}"`;return f?`${f} ${y}`:y},""),d=o.innerHTML||o.cssText||"",h=ep.indexOf(t)===-1;return`${i}<${t} ${nt}="true" ${l}${h?"/>":`>${d}</${t}>`}`},""),uu=(t,e={})=>Object.keys(t).reduce((s,i)=>{const n=lo[i];return s[n||i]=t[i],s},e),ip=(t,e,s)=>{const i={key:e,[nt]:!0},n=uu(s,i);return[ie.createElement("title",n,e)]},zr=(t,e)=>e.map((s,i)=>{const n={key:i,[nt]:!0};return Object.keys(s).forEach(o=>{const d=lo[o]||o;if(d==="innerHTML"||d==="cssText"){const h=s.innerHTML||s.cssText;n.dangerouslySetInnerHTML={__html:h}}else n[d]=s[o]}),ie.createElement(t,n)}),qe=(t,e,s=!0)=>{switch(t){case"title":return{toComponent:()=>ip(t,e.title,e.titleAttributes),toString:()=>tp(t,e.title,e.titleAttributes,s)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>uu(e),toString:()=>du(e)};default:return{toComponent:()=>zr(t,e),toString:()=>sp(t,e,s)}}},rp=({metaTags:t,linkTags:e,scriptTags:s,encode:i})=>{const n=da(t,la.meta),o=da(e,la.link),l=da(s,la.script);return{priorityMethods:{toComponent:()=>[...zr("meta",n.priority),...zr("link",o.priority),...zr("script",l.priority)],toString:()=>`${qe("meta",n.priority,i)} ${qe("link",o.priority,i)} ${qe("script",l.priority,i)}`},metaTags:n.default,linkTags:o.default,scriptTags:l.default}},np=t=>{const{baseTag:e,bodyAttributes:s,encode:i=!0,htmlAttributes:n,noscriptTags:o,styleTags:l,title:d="",titleAttributes:h,prioritizeSeoTags:f}=t;let{linkTags:m,metaTags:y,scriptTags:g}=t,T={toComponent:()=>{},toString:()=>""};return f&&({priorityMethods:T,linkTags:m,metaTags:y,scriptTags:g}=rp(t)),{priority:T,base:qe("base",e,i),bodyAttributes:qe("bodyAttributes",s,i),htmlAttributes:qe("htmlAttributes",n,i),link:qe("link",m,i),meta:qe("meta",y,i),noscript:qe("noscript",o,i),script:qe("script",g,i),style:qe("style",l,i),title:qe("title",{title:d,titleAttributes:h},i)}},Ra=np,Rr=[],hu=!!(typeof window<"u"&&window.document&&window.document.createElement),Oa=class{constructor(t,e){Et(this,"instances",[]);Et(this,"canUseDOM",hu);Et(this,"context");Et(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Rr:this.instances,add:t=>{(this.canUseDOM?Rr:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Rr:this.instances).indexOf(t);(this.canUseDOM?Rr:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Ra({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},ap={},mu=ie.createContext(ap),vs,fu=(vs=class extends M.Component{constructor(s){super(s);Et(this,"helmetData");this.helmetData=new Oa(this.props.context||{},vs.canUseDOM)}render(){return ie.createElement(mu.Provider,{value:this.helmetData.value},this.props.children)}},Et(vs,"canUseDOM",hu),vs),Ks=(t,e)=>{const s=document.head||document.querySelector("head"),i=s.querySelectorAll(`${t}[${nt}]`),n=[].slice.call(i),o=[];let l;return e&&e.length&&e.forEach(d=>{const h=document.createElement(t);for(const f in d)if(Object.prototype.hasOwnProperty.call(d,f))if(f==="innerHTML")h.innerHTML=d.innerHTML;else if(f==="cssText")h.styleSheet?h.styleSheet.cssText=d.cssText:h.appendChild(document.createTextNode(d.cssText));else{const m=f,y=typeof d[m]>"u"?"":d[m];h.setAttribute(f,y)}h.setAttribute(nt,"true"),n.some((f,m)=>(l=m,h.isEqualNode(f)))?n.splice(l,1):o.push(h)}),n.forEach(d=>{var h;return(h=d.parentNode)==null?void 0:h.removeChild(d)}),o.forEach(d=>s.appendChild(d)),{oldTags:n,newTags:o}},Da=(t,e)=>{const s=document.getElementsByTagName(t)[0];if(!s)return;const i=s.getAttribute(nt),n=i?i.split(","):[],o=[...n],l=Object.keys(e);for(const d of l){const h=e[d]||"";s.getAttribute(d)!==h&&s.setAttribute(d,h),n.indexOf(d)===-1&&n.push(d);const f=o.indexOf(d);f!==-1&&o.splice(f,1)}for(let d=o.length-1;d>=0;d-=1)s.removeAttribute(o[d]);n.length===o.length?s.removeAttribute(nt):s.getAttribute(nt)!==l.join(",")&&s.setAttribute(nt,l.join(","))},op=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=cu(t)),Da("title",e)},Kl=(t,e)=>{const{baseTag:s,bodyAttributes:i,htmlAttributes:n,linkTags:o,metaTags:l,noscriptTags:d,onChangeClientState:h,scriptTags:f,styleTags:m,title:y,titleAttributes:g}=t;Da("body",i),Da("html",n),op(y,g);const T={baseTag:Ks("base",s),linkTags:Ks("link",o),metaTags:Ks("meta",l),noscriptTags:Ks("noscript",d),scriptTags:Ks("script",f),styleTags:Ks("style",m)},x={},j={};Object.keys(T).forEach(S=>{const{newTags:z,oldTags:F}=T[S];z.length&&(x[S]=z),F.length&&(j[S]=T[S].oldTags)}),e&&e(),h(t,x,j)},Fi=null,lp=t=>{Fi&&cancelAnimationFrame(Fi),t.defer?Fi=requestAnimationFrame(()=>{Kl(t,()=>{Fi=null})}):(Kl(t),Fi=null)},cp=lp,Gl=class extends M.Component{constructor(){super(...arguments);Et(this,"rendered",!1)}shouldComponentUpdate(e){return!qf(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:s}=this.props.context;let i=null;const n=Xf(e.get().map(o=>{const l={...o.props};return delete l.context,l}));fu.canUseDOM?cp(n):Ra&&(i=Ra(n)),s(i)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Sa,Nt=(Sa=class extends M.Component{shouldComponentUpdate(t){return!$f(Wl(this.props,"helmetData"),Wl(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,s,i){return{...e,[t.type]:[...e[t.type]||[],{...s,...this.mapNestedChildrenToProps(t,i)}]}}mapObjectTypeChildren(t,e,s,i){switch(t.type){case"title":return{...e,[t.type]:i,titleAttributes:{...s}};case"body":return{...e,bodyAttributes:{...s}};case"html":return{...e,htmlAttributes:{...s}};default:return{...e,[t.type]:{...s}}}}mapArrayTypeChildrenToProps(t,e){let s={...e};return Object.keys(t).forEach(i=>{s={...s,[i]:t[i]}}),s}warnOnInvalidChildren(t,e){return zl(ql.some(s=>t.type===s),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${ql.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),zl(!e||typeof e=="string"||Array.isArray(e)&&!e.some(s=>typeof s!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let s={};return ie.Children.forEach(t,i=>{if(!i||!i.props)return;const{children:n,...o}=i.props,l=Object.keys(o).reduce((h,f)=>(h[Wf[f]||f]=o[f],h),{});let{type:d}=i;switch(typeof d=="symbol"?d=d.toString():this.warnOnInvalidChildren(i,n),d){case"Symbol(react.fragment)":e=this.mapChildrenToProps(n,e);break;case"link":case"meta":case"noscript":case"script":case"style":s=this.flattenArrayTypeChildren(i,s,l,n);break;default:e=this.mapObjectTypeChildren(i,e,l,n);break}}),this.mapArrayTypeChildrenToProps(s,e)}render(){const{children:t,...e}=this.props;let s={...e},{helmetData:i}=e;if(t&&(s=this.mapChildrenToProps(t,s)),i&&!(i instanceof Oa)){const n=i;i=new Oa(n.context,!0),delete s.helmetData}return i?ie.createElement(Gl,{...s,context:i.value}):ie.createElement(mu.Consumer,null,n=>ie.createElement(Gl,{...s,context:n}))}},Et(Sa,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Sa),En=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Sn=typeof window>"u"||"Deno"in globalThis;function et(){}function dp(t,e){return typeof t=="function"?t(e):t}function up(t){return typeof t=="number"&&t>=0&&t!==1/0}function hp(t,e){return Math.max(t+(e||0)-Date.now(),0)}function Fa(t,e){return typeof t=="function"?t(e):t}function mp(t,e){return typeof t=="function"?t(e):t}function Jl(t,e){const{type:s="all",exact:i,fetchStatus:n,predicate:o,queryKey:l,stale:d}=t;if(l){if(i){if(e.queryHash!==co(l,e.options))return!1}else if(!Zi(e.queryKey,l))return!1}if(s!=="all"){const h=e.isActive();if(s==="active"&&!h||s==="inactive"&&h)return!1}return!(typeof d=="boolean"&&e.isStale()!==d||n&&n!==e.state.fetchStatus||o&&!o(e))}function Ql(t,e){const{exact:s,status:i,predicate:n,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(s){if(Xi(e.options.mutationKey)!==Xi(o))return!1}else if(!Zi(e.options.mutationKey,o))return!1}return!(i&&e.state.status!==i||n&&!n(e))}function co(t,e){return((e==null?void 0:e.queryKeyHashFn)||Xi)(t)}function Xi(t){return JSON.stringify(t,(e,s)=>Ma(s)?Object.keys(s).sort().reduce((i,n)=>(i[n]=s[n],i),{}):s)}function Zi(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(s=>Zi(t[s],e[s])):!1}function pu(t,e){if(t===e)return t;const s=Yl(t)&&Yl(e);if(s||Ma(t)&&Ma(e)){const i=s?t:Object.keys(t),n=i.length,o=s?e:Object.keys(e),l=o.length,d=s?[]:{},h=new Set(i);let f=0;for(let m=0;m<l;m++){const y=s?m:o[m];(!s&&h.has(y)||s)&&t[y]===void 0&&e[y]===void 0?(d[y]=void 0,f++):(d[y]=pu(t[y],e[y]),d[y]===t[y]&&t[y]!==void 0&&f++)}return n===l&&f===n?t:d}return e}function Yl(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Ma(t){if(!Xl(t))return!1;const e=t.constructor;if(e===void 0)return!0;const s=e.prototype;return!(!Xl(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Xl(t){return Object.prototype.toString.call(t)==="[object Object]"}function fp(t){return new Promise(e=>{setTimeout(e,t)})}function pp(t,e,s){return typeof s.structuralSharing=="function"?s.structuralSharing(t,e):s.structuralSharing!==!1?pu(t,e):e}function gp(t,e,s=0){const i=[...t,e];return s&&i.length>s?i.slice(1):i}function yp(t,e,s=0){const i=[e,...t];return s&&i.length>s?i.slice(0,-1):i}var uo=Symbol();function gu(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===uo?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ws,es,ai,Fd,xp=(Fd=class extends En{constructor(){super();te(this,ws);te(this,es);te(this,ai);Q(this,ai,e=>{if(!Sn&&window.addEventListener){const s=()=>e();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){D(this,es)||this.setEventListener(D(this,ai))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,es))==null||e.call(this),Q(this,es,void 0))}setEventListener(e){var s;Q(this,ai,e),(s=D(this,es))==null||s.call(this),Q(this,es,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){D(this,ws)!==e&&(Q(this,ws,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(s=>{s(e)})}isFocused(){var e;return typeof D(this,ws)=="boolean"?D(this,ws):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ws=new WeakMap,es=new WeakMap,ai=new WeakMap,Fd),yu=new xp,oi,ts,li,Md,bp=(Md=class extends En{constructor(){super();te(this,oi,!0);te(this,ts);te(this,li);Q(this,li,e=>{if(!Sn&&window.addEventListener){const s=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",i)}}})}onSubscribe(){D(this,ts)||this.setEventListener(D(this,li))}onUnsubscribe(){var e;this.hasListeners()||((e=D(this,ts))==null||e.call(this),Q(this,ts,void 0))}setEventListener(e){var s;Q(this,li,e),(s=D(this,ts))==null||s.call(this),Q(this,ts,e(this.setOnline.bind(this)))}setOnline(e){D(this,oi)!==e&&(Q(this,oi,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return D(this,oi)}},oi=new WeakMap,ts=new WeakMap,li=new WeakMap,Md),sn=new bp;function vp(){let t,e;const s=new Promise((n,o)=>{t=n,e=o});s.status="pending",s.catch(()=>{});function i(n){Object.assign(s,n),delete s.resolve,delete s.reject}return s.resolve=n=>{i({status:"fulfilled",value:n}),t(n)},s.reject=n=>{i({status:"rejected",reason:n}),e(n)},s}function wp(t){return Math.min(1e3*2**t,3e4)}function xu(t){return(t??"online")==="online"?sn.isOnline():!0}var bu=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function ua(t){return t instanceof bu}function vu(t){let e=!1,s=0,i=!1,n;const o=vp(),l=j=>{var S;i||(g(new bu(j)),(S=t.abort)==null||S.call(t))},d=()=>{e=!0},h=()=>{e=!1},f=()=>yu.isFocused()&&(t.networkMode==="always"||sn.isOnline())&&t.canRun(),m=()=>xu(t.networkMode)&&t.canRun(),y=j=>{var S;i||(i=!0,(S=t.onSuccess)==null||S.call(t,j),n==null||n(),o.resolve(j))},g=j=>{var S;i||(i=!0,(S=t.onError)==null||S.call(t,j),n==null||n(),o.reject(j))},T=()=>new Promise(j=>{var S;n=z=>{(i||f())&&j(z)},(S=t.onPause)==null||S.call(t)}).then(()=>{var j;n=void 0,i||(j=t.onContinue)==null||j.call(t)}),x=()=>{if(i)return;let j;const S=s===0?t.initialPromise:void 0;try{j=S??t.fn()}catch(z){j=Promise.reject(z)}Promise.resolve(j).then(y).catch(z=>{var Y;if(i)return;const F=t.retry??(Sn?0:3),H=t.retryDelay??wp,W=typeof H=="function"?H(s,z):H,K=F===!0||typeof F=="number"&&s<F||typeof F=="function"&&F(s,z);if(e||!K){g(z);return}s++,(Y=t.onFail)==null||Y.call(t,s,z),fp(W).then(()=>f()?void 0:T()).then(()=>{e?g(z):x()})})};return{promise:o,cancel:l,continue:()=>(n==null||n(),o),cancelRetry:d,continueRetry:h,canStart:m,start:()=>(m()?x():T().then(x),o)}}var jp=t=>setTimeout(t,0);function _p(){let t=[],e=0,s=d=>{d()},i=d=>{d()},n=jp;const o=d=>{e?t.push(d):n(()=>{s(d)})},l=()=>{const d=t;t=[],d.length&&n(()=>{i(()=>{d.forEach(h=>{s(h)})})})};return{batch:d=>{let h;e++;try{h=d()}finally{e--,e||l()}return h},batchCalls:d=>(...h)=>{o(()=>{d(...h)})},schedule:o,setNotifyFunction:d=>{s=d},setBatchNotifyFunction:d=>{i=d},setScheduler:d=>{n=d}}}var Oe=_p(),js,Ld,wu=(Ld=class{constructor(){te(this,js)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),up(this.gcTime)&&Q(this,js,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(Sn?1/0:5*60*1e3))}clearGcTimeout(){D(this,js)&&(clearTimeout(D(this,js)),Q(this,js,void 0))}},js=new WeakMap,Ld),ci,di,We,_s,Ie,ar,Ns,tt,Ct,Ud,Np=(Ud=class extends wu{constructor(s){super();te(this,tt);te(this,ci);te(this,di);te(this,We);te(this,_s);te(this,Ie);te(this,ar);te(this,Ns);Q(this,Ns,!1),Q(this,ar,s.defaultOptions),this.setOptions(s.options),this.observers=[],Q(this,_s,s.client),Q(this,We,D(this,_s).getQueryCache()),this.queryKey=s.queryKey,this.queryHash=s.queryHash,Q(this,ci,kp(this.options)),this.state=s.state??D(this,ci),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var s;return(s=D(this,Ie))==null?void 0:s.promise}setOptions(s){this.options={...D(this,ar),...s},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&D(this,We).remove(this)}setData(s,i){const n=pp(this.state.data,s,this.options);return Ne(this,tt,Ct).call(this,{data:n,type:"success",dataUpdatedAt:i==null?void 0:i.updatedAt,manual:i==null?void 0:i.manual}),n}setState(s,i){Ne(this,tt,Ct).call(this,{type:"setState",state:s,setStateOptions:i})}cancel(s){var n,o;const i=(n=D(this,Ie))==null?void 0:n.promise;return(o=D(this,Ie))==null||o.cancel(s),i?i.then(et).catch(et):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(D(this,ci))}isActive(){return this.observers.some(s=>mp(s.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===uo||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(s=>Fa(s.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(s=>s.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(s=0){return this.state.data===void 0?!0:s==="static"?!1:this.state.isInvalidated?!0:!hp(this.state.dataUpdatedAt,s)}onFocus(){var i;const s=this.observers.find(n=>n.shouldFetchOnWindowFocus());s==null||s.refetch({cancelRefetch:!1}),(i=D(this,Ie))==null||i.continue()}onOnline(){var i;const s=this.observers.find(n=>n.shouldFetchOnReconnect());s==null||s.refetch({cancelRefetch:!1}),(i=D(this,Ie))==null||i.continue()}addObserver(s){this.observers.includes(s)||(this.observers.push(s),this.clearGcTimeout(),D(this,We).notify({type:"observerAdded",query:this,observer:s}))}removeObserver(s){this.observers.includes(s)&&(this.observers=this.observers.filter(i=>i!==s),this.observers.length||(D(this,Ie)&&(D(this,Ns)?D(this,Ie).cancel({revert:!0}):D(this,Ie).cancelRetry()),this.scheduleGc()),D(this,We).notify({type:"observerRemoved",query:this,observer:s}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ne(this,tt,Ct).call(this,{type:"invalidate"})}fetch(s,i){var m,y,g;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(i!=null&&i.cancelRefetch))this.cancel({silent:!0});else if(D(this,Ie))return D(this,Ie).continueRetry(),D(this,Ie).promise}if(s&&this.setOptions(s),!this.options.queryFn){const T=this.observers.find(x=>x.options.queryFn);T&&this.setOptions(T.options)}const n=new AbortController,o=T=>{Object.defineProperty(T,"signal",{enumerable:!0,get:()=>(Q(this,Ns,!0),n.signal)})},l=()=>{const T=gu(this.options,i),j=(()=>{const S={client:D(this,_s),queryKey:this.queryKey,meta:this.meta};return o(S),S})();return Q(this,Ns,!1),this.options.persister?this.options.persister(T,j,this):T(j)},h=(()=>{const T={fetchOptions:i,options:this.options,queryKey:this.queryKey,client:D(this,_s),state:this.state,fetchFn:l};return o(T),T})();(m=this.options.behavior)==null||m.onFetch(h,this),Q(this,di,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((y=h.fetchOptions)==null?void 0:y.meta))&&Ne(this,tt,Ct).call(this,{type:"fetch",meta:(g=h.fetchOptions)==null?void 0:g.meta});const f=T=>{var x,j,S,z;ua(T)&&T.silent||Ne(this,tt,Ct).call(this,{type:"error",error:T}),ua(T)||((j=(x=D(this,We).config).onError)==null||j.call(x,T,this),(z=(S=D(this,We).config).onSettled)==null||z.call(S,this.state.data,T,this)),this.scheduleGc()};return Q(this,Ie,vu({initialPromise:i==null?void 0:i.initialPromise,fn:h.fetchFn,abort:n.abort.bind(n),onSuccess:T=>{var x,j,S,z;if(T===void 0){f(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(T)}catch(F){f(F);return}(j=(x=D(this,We).config).onSuccess)==null||j.call(x,T,this),(z=(S=D(this,We).config).onSettled)==null||z.call(S,T,this.state.error,this),this.scheduleGc()},onError:f,onFail:(T,x)=>{Ne(this,tt,Ct).call(this,{type:"failed",failureCount:T,error:x})},onPause:()=>{Ne(this,tt,Ct).call(this,{type:"pause"})},onContinue:()=>{Ne(this,tt,Ct).call(this,{type:"continue"})},retry:h.options.retry,retryDelay:h.options.retryDelay,networkMode:h.options.networkMode,canRun:()=>!0})),D(this,Ie).start()}},ci=new WeakMap,di=new WeakMap,We=new WeakMap,_s=new WeakMap,Ie=new WeakMap,ar=new WeakMap,Ns=new WeakMap,tt=new WeakSet,Ct=function(s){const i=n=>{switch(s.type){case"failed":return{...n,fetchFailureCount:s.failureCount,fetchFailureReason:s.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...Tp(n.data,this.options),fetchMeta:s.meta??null};case"success":return{...n,data:s.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:s.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!s.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const o=s.error;return ua(o)&&o.revert&&D(this,di)?{...D(this,di),fetchStatus:"idle"}:{...n,error:o,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...s.state}}};this.state=i(this.state),Oe.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),D(this,We).notify({query:this,type:"updated",action:s})})},Ud);function Tp(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:xu(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function kp(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,s=e!==void 0,i=s?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var pt,Vd,Ip=(Vd=class extends En{constructor(e={}){super();te(this,pt);this.config=e,Q(this,pt,new Map)}build(e,s,i){const n=s.queryKey,o=s.queryHash??co(n,s);let l=this.get(o);return l||(l=new Np({client:e,queryKey:n,queryHash:o,options:e.defaultQueryOptions(s),state:i,defaultOptions:e.getQueryDefaults(n)}),this.add(l)),l}add(e){D(this,pt).has(e.queryHash)||(D(this,pt).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const s=D(this,pt).get(e.queryHash);s&&(e.destroy(),s===e&&D(this,pt).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Oe.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return D(this,pt).get(e)}getAll(){return[...D(this,pt).values()]}find(e){const s={exact:!0,...e};return this.getAll().find(i=>Jl(s,i))}findAll(e={}){const s=this.getAll();return Object.keys(e).length>0?s.filter(i=>Jl(e,i)):s}notify(e){Oe.batch(()=>{this.listeners.forEach(s=>{s(e)})})}onFocus(){Oe.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Oe.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},pt=new WeakMap,Vd),gt,Ce,Ts,yt,Gt,$d,Ep=($d=class extends wu{constructor(e){super();te(this,yt);te(this,gt);te(this,Ce);te(this,Ts);this.mutationId=e.mutationId,Q(this,Ce,e.mutationCache),Q(this,gt,[]),this.state=e.state||Sp(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){D(this,gt).includes(e)||(D(this,gt).push(e),this.clearGcTimeout(),D(this,Ce).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Q(this,gt,D(this,gt).filter(s=>s!==e)),this.scheduleGc(),D(this,Ce).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){D(this,gt).length||(this.state.status==="pending"?this.scheduleGc():D(this,Ce).remove(this))}continue(){var e;return((e=D(this,Ts))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var o,l,d,h,f,m,y,g,T,x,j,S,z,F,H,W,K,Y,E,w;const s=()=>{Ne(this,yt,Gt).call(this,{type:"continue"})};Q(this,Ts,vu({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(b,k)=>{Ne(this,yt,Gt).call(this,{type:"failed",failureCount:b,error:k})},onPause:()=>{Ne(this,yt,Gt).call(this,{type:"pause"})},onContinue:s,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>D(this,Ce).canRun(this)}));const i=this.state.status==="pending",n=!D(this,Ts).canStart();try{if(i)s();else{Ne(this,yt,Gt).call(this,{type:"pending",variables:e,isPaused:n}),await((l=(o=D(this,Ce).config).onMutate)==null?void 0:l.call(o,e,this));const k=await((h=(d=this.options).onMutate)==null?void 0:h.call(d,e));k!==this.state.context&&Ne(this,yt,Gt).call(this,{type:"pending",context:k,variables:e,isPaused:n})}const b=await D(this,Ts).start();return await((m=(f=D(this,Ce).config).onSuccess)==null?void 0:m.call(f,b,e,this.state.context,this)),await((g=(y=this.options).onSuccess)==null?void 0:g.call(y,b,e,this.state.context)),await((x=(T=D(this,Ce).config).onSettled)==null?void 0:x.call(T,b,null,this.state.variables,this.state.context,this)),await((S=(j=this.options).onSettled)==null?void 0:S.call(j,b,null,e,this.state.context)),Ne(this,yt,Gt).call(this,{type:"success",data:b}),b}catch(b){try{throw await((F=(z=D(this,Ce).config).onError)==null?void 0:F.call(z,b,e,this.state.context,this)),await((W=(H=this.options).onError)==null?void 0:W.call(H,b,e,this.state.context)),await((Y=(K=D(this,Ce).config).onSettled)==null?void 0:Y.call(K,void 0,b,this.state.variables,this.state.context,this)),await((w=(E=this.options).onSettled)==null?void 0:w.call(E,void 0,b,e,this.state.context)),b}finally{Ne(this,yt,Gt).call(this,{type:"error",error:b})}}finally{D(this,Ce).runNext(this)}}},gt=new WeakMap,Ce=new WeakMap,Ts=new WeakMap,yt=new WeakSet,Gt=function(e){const s=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=s(this.state),Oe.batch(()=>{D(this,gt).forEach(i=>{i.onMutationUpdate(e)}),D(this,Ce).notify({mutation:this,type:"updated",action:e})})},$d);function Sp(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Rt,st,or,Bd,Ap=(Bd=class extends En{constructor(e={}){super();te(this,Rt);te(this,st);te(this,or);this.config=e,Q(this,Rt,new Set),Q(this,st,new Map),Q(this,or,0)}build(e,s,i){const n=new Ep({mutationCache:this,mutationId:++Pr(this,or)._,options:e.defaultMutationOptions(s),state:i});return this.add(n),n}add(e){D(this,Rt).add(e);const s=Or(e);if(typeof s=="string"){const i=D(this,st).get(s);i?i.push(e):D(this,st).set(s,[e])}this.notify({type:"added",mutation:e})}remove(e){if(D(this,Rt).delete(e)){const s=Or(e);if(typeof s=="string"){const i=D(this,st).get(s);if(i)if(i.length>1){const n=i.indexOf(e);n!==-1&&i.splice(n,1)}else i[0]===e&&D(this,st).delete(s)}}this.notify({type:"removed",mutation:e})}canRun(e){const s=Or(e);if(typeof s=="string"){const i=D(this,st).get(s),n=i==null?void 0:i.find(o=>o.state.status==="pending");return!n||n===e}else return!0}runNext(e){var i;const s=Or(e);if(typeof s=="string"){const n=(i=D(this,st).get(s))==null?void 0:i.find(o=>o!==e&&o.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Oe.batch(()=>{D(this,Rt).forEach(e=>{this.notify({type:"removed",mutation:e})}),D(this,Rt).clear(),D(this,st).clear()})}getAll(){return Array.from(D(this,Rt))}find(e){const s={exact:!0,...e};return this.getAll().find(i=>Ql(s,i))}findAll(e={}){return this.getAll().filter(s=>Ql(e,s))}notify(e){Oe.batch(()=>{this.listeners.forEach(s=>{s(e)})})}resumePausedMutations(){const e=this.getAll().filter(s=>s.state.isPaused);return Oe.batch(()=>Promise.all(e.map(s=>s.continue().catch(et))))}},Rt=new WeakMap,st=new WeakMap,or=new WeakMap,Bd);function Or(t){var e;return(e=t.options.scope)==null?void 0:e.id}function Zl(t){return{onFetch:(e,s)=>{var m,y,g,T,x;const i=e.options,n=(g=(y=(m=e.fetchOptions)==null?void 0:m.meta)==null?void 0:y.fetchMore)==null?void 0:g.direction,o=((T=e.state.data)==null?void 0:T.pages)||[],l=((x=e.state.data)==null?void 0:x.pageParams)||[];let d={pages:[],pageParams:[]},h=0;const f=async()=>{let j=!1;const S=H=>{Object.defineProperty(H,"signal",{enumerable:!0,get:()=>(e.signal.aborted?j=!0:e.signal.addEventListener("abort",()=>{j=!0}),e.signal)})},z=gu(e.options,e.fetchOptions),F=async(H,W,K)=>{if(j)return Promise.reject();if(W==null&&H.pages.length)return Promise.resolve(H);const E=(()=>{const N={client:e.client,queryKey:e.queryKey,pageParam:W,direction:K?"backward":"forward",meta:e.options.meta};return S(N),N})(),w=await z(E),{maxPages:b}=e.options,k=K?yp:gp;return{pages:k(H.pages,w,b),pageParams:k(H.pageParams,W,b)}};if(n&&o.length){const H=n==="backward",W=H?Cp:ec,K={pages:o,pageParams:l},Y=W(i,K);d=await F(K,Y,H)}else{const H=t??o.length;do{const W=h===0?l[0]??i.initialPageParam:ec(i,d);if(h>0&&W==null)break;d=await F(d,W),h++}while(h<H)}return d};e.options.persister?e.fetchFn=()=>{var j,S;return(S=(j=e.options).persister)==null?void 0:S.call(j,f,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},s)}:e.fetchFn=f}}}function ec(t,{pages:e,pageParams:s}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,s[i],s):void 0}function Cp(t,{pages:e,pageParams:s}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,s[0],s):void 0}var ce,ss,is,ui,hi,rs,mi,fi,Hd,Pp=(Hd=class{constructor(t={}){te(this,ce);te(this,ss);te(this,is);te(this,ui);te(this,hi);te(this,rs);te(this,mi);te(this,fi);Q(this,ce,t.queryCache||new Ip),Q(this,ss,t.mutationCache||new Ap),Q(this,is,t.defaultOptions||{}),Q(this,ui,new Map),Q(this,hi,new Map),Q(this,rs,0)}mount(){Pr(this,rs)._++,D(this,rs)===1&&(Q(this,mi,yu.subscribe(async t=>{t&&(await this.resumePausedMutations(),D(this,ce).onFocus())})),Q(this,fi,sn.subscribe(async t=>{t&&(await this.resumePausedMutations(),D(this,ce).onOnline())})))}unmount(){var t,e;Pr(this,rs)._--,D(this,rs)===0&&((t=D(this,mi))==null||t.call(this),Q(this,mi,void 0),(e=D(this,fi))==null||e.call(this),Q(this,fi,void 0))}isFetching(t){return D(this,ce).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return D(this,ss).findAll({...t,status:"pending"}).length}getQueryData(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=D(this,ce).get(e.queryHash))==null?void 0:s.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),s=D(this,ce).build(this,e),i=s.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&s.isStaleByTime(Fa(e.staleTime,s))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return D(this,ce).findAll(t).map(({queryKey:e,state:s})=>{const i=s.data;return[e,i]})}setQueryData(t,e,s){const i=this.defaultQueryOptions({queryKey:t}),n=D(this,ce).get(i.queryHash),o=n==null?void 0:n.state.data,l=dp(e,o);if(l!==void 0)return D(this,ce).build(this,i).setData(l,{...s,manual:!0})}setQueriesData(t,e,s){return Oe.batch(()=>D(this,ce).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,s)]))}getQueryState(t){var s;const e=this.defaultQueryOptions({queryKey:t});return(s=D(this,ce).get(e.queryHash))==null?void 0:s.state}removeQueries(t){const e=D(this,ce);Oe.batch(()=>{e.findAll(t).forEach(s=>{e.remove(s)})})}resetQueries(t,e){const s=D(this,ce);return Oe.batch(()=>(s.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const s={revert:!0,...e},i=Oe.batch(()=>D(this,ce).findAll(t).map(n=>n.cancel(s)));return Promise.all(i).then(et).catch(et)}invalidateQueries(t,e={}){return Oe.batch(()=>(D(this,ce).findAll(t).forEach(s=>{s.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const s={...e,cancelRefetch:e.cancelRefetch??!0},i=Oe.batch(()=>D(this,ce).findAll(t).filter(n=>!n.isDisabled()&&!n.isStatic()).map(n=>{let o=n.fetch(void 0,s);return s.throwOnError||(o=o.catch(et)),n.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(et)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const s=D(this,ce).build(this,e);return s.isStaleByTime(Fa(e.staleTime,s))?s.fetch(e):Promise.resolve(s.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(et).catch(et)}fetchInfiniteQuery(t){return t.behavior=Zl(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(et).catch(et)}ensureInfiniteQueryData(t){return t.behavior=Zl(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return sn.isOnline()?D(this,ss).resumePausedMutations():Promise.resolve()}getQueryCache(){return D(this,ce)}getMutationCache(){return D(this,ss)}getDefaultOptions(){return D(this,is)}setDefaultOptions(t){Q(this,is,t)}setQueryDefaults(t,e){D(this,ui).set(Xi(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...D(this,ui).values()],s={};return e.forEach(i=>{Zi(t,i.queryKey)&&Object.assign(s,i.defaultOptions)}),s}setMutationDefaults(t,e){D(this,hi).set(Xi(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...D(this,hi).values()],s={};return e.forEach(i=>{Zi(t,i.mutationKey)&&Object.assign(s,i.defaultOptions)}),s}defaultQueryOptions(t){if(t._defaulted)return t;const e={...D(this,is).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=co(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===uo&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...D(this,is).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){D(this,ce).clear(),D(this,ss).clear()}},ce=new WeakMap,ss=new WeakMap,is=new WeakMap,ui=new WeakMap,hi=new WeakMap,rs=new WeakMap,mi=new WeakMap,fi=new WeakMap,Hd),Rp=M.createContext(void 0),Op=({client:t,children:e})=>(M.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),r.jsx(Rp.Provider,{value:t,children:e}));const ju=M.createContext(void 0),Dp=()=>{const t=M.useContext(ju);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t},Fp=({children:t,defaultTheme:e="system",storageKey:s="portfolio-theme"})=>{const[i,n]=M.useState(e),[o,l]=M.useState("dark"),d=()=>typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark",h=T=>T==="system"?d():T,f=T=>{try{localStorage.setItem(s,T)}catch(x){console.warn("Failed to save theme preference:",x)}n(T)},m=()=>{f(o==="dark"?"light":"dark")},y=T=>{const x=document.documentElement;x.classList.remove("light","dark"),x.classList.add(T);const j=document.querySelector('meta[name="theme-color"]');j&&j.setAttribute("content",T==="dark"?"#0f172a":"#ffffff");const S=T==="dark";x.style.setProperty("--bg-primary",S?"#0f172a":"#ffffff"),x.style.setProperty("--bg-secondary",S?"#1e293b":"#f8fafc"),x.style.setProperty("--text-primary",S?"#ffffff":"#1e293b"),x.style.setProperty("--text-secondary",S?"#cbd5e1":"#64748b"),x.style.setProperty("--border-color",S?"#334155":"#e2e8f0"),x.style.setProperty("--accent-color",S?"#3b82f6":"#2563eb")};M.useEffect(()=>{try{const T=localStorage.getItem(s);T&&["light","dark","system"].includes(T)?n(T):n(e)}catch(T){console.warn("Failed to load theme preference:",T),n(e)}},[e,s]),M.useEffect(()=>{const T=h(i);l(T),y(T);const x=window.matchMedia("(prefers-color-scheme: dark)"),j=()=>{if(i==="system"){const S=d();l(S),y(S)}};return x.addEventListener("change",j),()=>x.removeEventListener("change",j)},[i]),M.useEffect(()=>{document.documentElement.style.setProperty("--theme-transition","background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease")},[]);const g={theme:i,resolvedTheme:o,setTheme:f,toggleTheme:m};return r.jsx(ju.Provider,{value:g,children:t})},_u=M.createContext(void 0),Mp=({children:t})=>{const[e,s]=M.useState({reducedMotion:!1,highContrast:!1,focusVisible:!0,announcements:!0,keyboardNavigation:!0,screenReaderActive:!1,announcePageChanges:!0,focusOutlineVisible:!1,skipLinksEnabled:!0});M.useEffect(()=>{(()=>{const S=window.matchMedia("(prefers-reduced-motion: reduce)").matches,z=window.matchMedia("(prefers-contrast: high)").matches,F=navigator.maxTouchPoints===0&&navigator.userAgent.includes("JAWS")||navigator.userAgent.includes("NVDA")||navigator.userAgent.includes("VoiceOver");s(H=>({...H,reducedMotion:S,highContrast:z,screenReaderActive:F})),document.documentElement.style.setProperty("--motion-reduce",S?"0":"1"),document.documentElement.style.setProperty("--contrast-high",z?"1":"0")})();const g=window.matchMedia("(prefers-reduced-motion: reduce)"),T=window.matchMedia("(prefers-contrast: high)"),x=S=>{s(z=>({...z,reducedMotion:S.matches})),document.documentElement.style.setProperty("--motion-reduce",S.matches?"0":"1")},j=S=>{s(z=>({...z,highContrast:S.matches})),document.documentElement.style.setProperty("--contrast-high",S.matches?"1":"0")};return g.addEventListener("change",x),T.addEventListener("change",j),()=>{g.removeEventListener("change",x),T.removeEventListener("change",j)}},[]),M.useEffect(()=>{let y=!1;const g=x=>{x.key==="Tab"&&!y&&(y=!0,s(j=>({...j,focusOutlineVisible:!0})),document.body.classList.add("keyboard-user"),window.removeEventListener("keydown",g))},T=()=>{y=!1,s(x=>({...x,focusOutlineVisible:!1})),document.body.classList.remove("keyboard-user"),window.addEventListener("keydown",g)};return window.addEventListener("keydown",g),window.addEventListener("mousedown",T),()=>{window.removeEventListener("keydown",g),window.removeEventListener("mousedown",T)}},[]);const m={...e,toggleReducedMotion:()=>{s(y=>{const g=!y.reducedMotion;return document.documentElement.style.setProperty("--motion-reduce",g?"0":"1"),{...y,reducedMotion:g}})},toggleHighContrast:()=>{s(y=>{const g=!y.highContrast;return document.documentElement.style.setProperty("--contrast-high",g?"1":"0"),document.body.classList.toggle("high-contrast",g),{...y,highContrast:g}})},toggleFocusVisible:()=>{s(y=>({...y,focusVisible:!y.focusVisible}))},toggleAnnouncements:()=>{s(y=>({...y,announcements:!y.announcements}))},toggleKeyboardNavigation:()=>{s(y=>({...y,keyboardNavigation:!y.keyboardNavigation}))},announceMessage:(y,g="polite")=>{if(!e.announcements)return;const T=document.createElement("div");T.setAttribute("aria-live",g),T.setAttribute("aria-atomic","true"),T.className="sr-only",T.textContent=y,document.body.appendChild(T),setTimeout(()=>{document.body.removeChild(T)},1e3)},setFocusOutlineVisible:y=>{s(g=>({...g,focusOutlineVisible:y}))}};return r.jsxs(_u.Provider,{value:m,children:[t,r.jsx("div",{id:"sr-announcements",className:"sr-only","aria-live":"polite","aria-atomic":"true"})]})},ho=()=>{const t=M.useContext(_u);if(t===void 0)throw new Error("useAccessibility must be used within an AccessibilityProvider");return t};class Lp extends M.Component{constructor(e){super(e),this.resetTimeoutId=null,this.generateEventId=()=>`error-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,this.reportError=async(s,i,n)=>{try{const o={eventId:n,message:s.message,stack:s.stack,componentStack:i.componentStack,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href};console.info("Error report generated:",o)}catch(o){console.error("Failed to report error:",o)}},this.handleRetry=()=>{this.setState({hasError:!1,error:void 0,errorInfo:void 0,eventId:void 0})},this.handleAutoRetry=()=>{this.resetTimeoutId=window.setTimeout(()=>{this.handleRetry()},5e3)},this.handleReload=()=>{window.location.reload()},this.handleGoHome=()=>{window.location.href="/"},this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,s){const i=this.generateEventId();this.setState({error:e,errorInfo:s,eventId:i}),console.error("ErrorBoundary caught an error:",e,s),this.props.onError&&this.props.onError(e,s),this.reportError(e,s,i)}componentWillUnmount(){this.resetTimeoutId&&clearTimeout(this.resetTimeoutId)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:r.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4",children:r.jsxs(C.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"max-w-md w-full bg-slate-800/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 text-center",children:[r.jsx(C.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.2},className:"mb-6",children:r.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4",children:r.jsx(Aa,{className:"w-8 h-8 text-red-400"})})}),r.jsx(C.h1,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"text-2xl font-bold text-white mb-4",children:"Oops! Something went wrong"}),r.jsxs(C.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:"mb-6",children:[r.jsx("p",{className:"text-slate-300 mb-4",children:"We encountered an unexpected error. Don't worry, our team has been notified and we're working on a fix."}),this.state.eventId&&r.jsxs("div",{className:"bg-slate-700/50 rounded-lg p-3 mb-4",children:[r.jsx("p",{className:"text-xs text-slate-400 mb-1",children:"Error ID for support:"}),r.jsx("code",{className:"text-xs text-red-300 font-mono break-all",children:this.state.eventId})]}),!1]}),r.jsxs(C.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},className:"space-y-3",children:[r.jsxs("button",{onClick:this.handleRetry,className:"w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors",children:[r.jsx(Ll,{className:"w-4 h-4"}),r.jsx("span",{children:"Try Again"})]}),r.jsxs("div",{className:"flex space-x-3",children:[r.jsxs("button",{onClick:this.handleReload,className:"flex-1 flex items-center justify-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors text-sm",children:[r.jsx(Ll,{className:"w-4 h-4"}),r.jsx("span",{children:"Reload Page"})]}),r.jsxs("button",{onClick:this.handleGoHome,className:"flex-1 flex items-center justify-center space-x-2 bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition-colors text-sm",children:[r.jsx(qd,{className:"w-4 h-4"}),r.jsx("span",{children:"Go Home"})]})]}),r.jsxs("div",{className:"pt-4 border-t border-slate-700",children:[r.jsx("p",{className:"text-xs text-slate-400 mb-2",children:"Still having issues?"}),r.jsxs("a",{href:"mailto:support@portfolio.com?subject=Error Report&body=Error ID: {this.state.eventId}",className:"inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm transition-colors",children:[r.jsx(so,{className:"w-4 h-4"}),r.jsx("span",{children:"Contact Support"})]})]})]}),r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"mt-6 pt-4 border-t border-slate-700",children:r.jsx(Up,{onRetry:this.handleRetry})})]})}):this.props.children}}const Up=({onRetry:t,seconds:e=10})=>{const[s,i]=ie.useState(e),[n,o]=ie.useState(!0);ie.useEffect(()=>{if(!n||s<=0){s<=0&&t();return}const d=setTimeout(()=>{i(s-1)},1e3);return()=>clearTimeout(d)},[s,n,t]);const l=()=>{o(!1)};return!n||s<=0?null:r.jsxs("div",{className:"text-center",children:[r.jsxs("p",{className:"text-xs text-slate-400 mb-2",children:["Auto-retrying in ",s," second",s!==1?"s":"","..."]}),r.jsx("button",{onClick:l,className:"text-xs text-red-400 hover:text-red-300 transition-colors underline",children:"Cancel auto-retry"})]})},tc=[{value:"light",label:"Light",icon:Kd,description:"Light theme"},{value:"dark",label:"Dark",icon:Wd,description:"Dark theme"},{value:"system",label:"System",icon:Ym,description:"Follow system preference"}],Nu=({variant:t="icon",showLabel:e=!1,className:s=""})=>{const{theme:i,resolvedTheme:n,setTheme:o,toggleTheme:l}=Dp(),[d,h]=M.useState(!1);if(t==="icon"){const m=n==="dark"?Wd:Kd;return r.jsxs(C.button,{onClick:l,className:`p-2 rounded-lg transition-all duration-300 hover:scale-110 group ${s}`,whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":`Switch to ${n==="dark"?"light":"dark"} theme`,children:[r.jsxs(C.div,{initial:{scale:0,rotate:-180},animate:{scale:1,rotate:0},exit:{scale:0,rotate:180},transition:{duration:.3},className:"relative",children:[r.jsx(m,{className:"w-5 h-5 text-slate-300 group-hover:text-white transition-colors"}),r.jsx(C.div,{className:"absolute inset-0 rounded-full",animate:{boxShadow:n==="dark"?"0 0 20px rgba(59, 130, 246, 0.3)":"0 0 20px rgba(251, 191, 36, 0.3)"},transition:{duration:.3}})]},n),e&&r.jsx("span",{className:"ml-2 text-sm text-slate-300 group-hover:text-white transition-colors",children:n==="dark"?"Dark":"Light"})]})}return r.jsxs("div",{className:`relative ${s}`,children:[r.jsxs(C.button,{onClick:()=>h(!d),className:"flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-slate-300 hover:text-white",whileHover:{scale:1.02},whileTap:{scale:.98},children:[tc.map(f=>{if(f.value===i){const m=f.icon;return r.jsxs(ie.Fragment,{children:[r.jsx(m,{className:"w-4 h-4"}),e&&r.jsx("span",{className:"text-sm",children:f.label})]},f.value)}return null}),r.jsx(C.div,{animate:{rotate:d?180:0},transition:{duration:.2},className:"w-4 h-4 border-r-2 border-b-2 border-current transform rotate-45"})]}),r.jsx(De,{children:d&&r.jsxs(r.Fragment,{children:[r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-40",onClick:()=>h(!1)}),r.jsxs(C.div,{initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},className:"absolute top-full mt-2 right-0 z-50 min-w-[200px] bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl overflow-hidden",children:[r.jsx("div",{className:"p-2",children:tc.map(f=>{const m=f.icon,y=i===f.value;return r.jsxs(C.button,{onClick:()=>{o(f.value),h(!1)},className:`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 text-left ${y?"bg-blue-500/20 text-blue-300":"text-slate-300 hover:bg-white/10 hover:text-white"}`,whileHover:{x:4},whileTap:{scale:.98},children:[r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx(m,{className:"w-4 h-4"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-medium",children:f.label}),r.jsx("div",{className:"text-xs opacity-70",children:f.description})]})]}),r.jsx(De,{children:y&&r.jsx(C.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},transition:{duration:.2},children:r.jsx(Gd,{className:"w-4 h-4 text-blue-400"})})})]},f.value)})}),r.jsx("div",{className:"px-3 py-2 border-t border-white/10 bg-white/5",children:r.jsxs("div",{className:"text-xs text-slate-400",children:["Currently using: ",r.jsx("span",{className:"text-slate-300 capitalize",children:n})]})})]})]})})]})},Ue=[{id:"ecotracker",title:"EcoTracker",subtitle:"Sustainability Analytics Platform",description:"A comprehensive sustainability platform helping companies track and reduce their carbon footprint with real-time analytics and AI-powered insights.",longDescription:"EcoTracker is an enterprise-grade sustainability platform that revolutionizes how companies approach environmental responsibility. Built with a microservices architecture, it processes millions of data points to provide actionable insights for carbon footprint reduction.",image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",gallery:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"],techStack:[{name:"React",category:"frontend",proficiency:95},{name:"TypeScript",category:"frontend",proficiency:90},{name:"Node.js",category:"backend",proficiency:88},{name:"PostgreSQL",category:"database",proficiency:85},{name:"AWS",category:"cloud",proficiency:82},{name:"D3.js",category:"frontend",proficiency:78},{name:"Redis",category:"database",proficiency:80},{name:"Docker",category:"tools",proficiency:85}],category:"fullstack",status:"completed",timeline:"6 months",teamSize:5,myRole:"Lead Full Stack Developer & Technical Architect",github:"https://github.com/princenyamadi/ecotracker",live:"https://ecotracker-demo.com",demo:"https://ecotracker-demo.com/demo",caseStudy:{challenge:"GreenTech Solutions needed a way to help their enterprise clients track, analyze, and reduce carbon emissions across complex supply chains with real-time data processing and actionable insights.",solution:"Developed a microservices-based platform with real-time data ingestion, AI-powered analytics, and an intuitive dashboard. Implemented automated reporting, predictive modeling, and integration with existing enterprise systems.",results:["40% increase in user engagement within 3 months","60% reduction in data processing time","$2.1M ARR generated for the client","25+ enterprise customers onboarded","99.9% uptime achieved with auto-scaling infrastructure"],technicalDetails:"Built using event-driven architecture with Apache Kafka for real-time data streaming, implemented caching strategies with Redis, and used machine learning models for predictive analytics."},metrics:[{label:"Users",value:"100K+",trend:"up"},{label:"Data Points",value:"10M+",trend:"up"},{label:"Uptime",value:"99.9%",trend:"stable"},{label:"Response Time",value:"<200ms",trend:"up"}],codeSamples:[{title:"Real-time Data Processing Pipeline",language:"typescript",description:"Event-driven data processing with type safety and error handling",code:`interface EmissionData {
  source: string;
  value: number;
  timestamp: Date;
  metadata: Record<string, any>;
}

class EmissionProcessor {
  private kafka: KafkaClient;
  private redis: RedisClient;
  
  async processEmissionEvent(data: EmissionData): Promise<void> {
    try {
      // Validate and transform data
      const processed = await this.validateAndTransform(data);
      
      // Store in time-series database
      await this.storeTimeSeries(processed);
      
      // Update real-time aggregations
      await this.updateAggregations(processed);
      
      // Trigger alerts if thresholds exceeded
      await this.checkThresholds(processed);
      
    } catch (error) {
      await this.handleProcessingError(error, data);
    }
  }
}`,highlights:["Type-safe data processing","Error handling","Real-time aggregations"]}],features:["Real-time carbon footprint tracking","AI-powered emission predictions","Interactive sustainability dashboard","Automated compliance reporting","Supply chain integration","Mobile-responsive design"],challenges:["Processing millions of data points in real-time","Integrating with diverse enterprise systems","Ensuring 99.9% uptime for mission-critical operations","Building intuitive visualizations for complex data"],learnings:["Microservices architecture for scalability","Event-driven design patterns","Advanced data visualization techniques","Enterprise-grade security implementations"],featured:!0,priority:1,testimonial:{author:"Sarah Mitchell",role:"CEO",company:"GreenTech Solutions",content:"Alex transformed our sustainability platform vision into reality. The real-time analytics dashboard became our competitive advantage.",rating:5}},{id:"devflow",title:"DevFlow",subtitle:"Collaborative Development Workspace",description:"A collaborative development workspace that streamlines team workflows with integrated code review, task management, and deployment pipelines.",longDescription:"DevFlow revolutionizes how development teams collaborate by providing an integrated workspace that combines code review, project management, and CI/CD pipelines in a single, intuitive platform.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",gallery:["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop","https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"],techStack:[{name:"Vue.js",category:"frontend",proficiency:85},{name:"Python",category:"backend",proficiency:88},{name:"FastAPI",category:"backend",proficiency:82},{name:"Redis",category:"database",proficiency:80},{name:"Docker",category:"tools",proficiency:85},{name:"WebSocket",category:"backend",proficiency:78}],category:"web",status:"completed",timeline:"8 months",teamSize:4,myRole:"Full Stack Developer & DevOps Engineer",github:"https://github.com/princenyamadi/devflow",live:"https://devflow-app.com",caseStudy:{challenge:"Development teams were using multiple disconnected tools for code review, project management, and deployments, leading to inefficiencies and communication gaps.",solution:"Created an integrated platform with real-time collaboration features, automated workflows, and seamless integration with existing development tools.",results:["50% reduction in deployment time","30% improvement in code review efficiency","90% team adoption rate within first month","200+ active development teams using the platform"]},metrics:[{label:"Teams",value:"200+",trend:"up"},{label:"Code Reviews",value:"5K+/month",trend:"up"},{label:"Deployments",value:"50% faster",trend:"up"}],features:["Integrated code review system","Real-time collaboration tools","Automated CI/CD pipelines","Project management dashboard","Team analytics and insights","Third-party integrations"],challenges:["Real-time synchronization across multiple users","Complex workflow automation","Integration with various development tools","Scaling WebSocket connections"],learnings:["Real-time application architecture","WebSocket optimization techniques","DevOps automation strategies","Team collaboration patterns"],featured:!0,priority:2},{id:"financeai",title:"FinanceAI",subtitle:"AI-Powered Personal Finance App",description:"Personal finance management app with AI-powered budget recommendations and investment insights for smarter financial decisions.",longDescription:"FinanceAI combines machine learning algorithms with intuitive design to provide personalized financial guidance, helping users make informed decisions about budgeting, saving, and investing.",image:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",techStack:[{name:"Next.js",category:"frontend",proficiency:90},{name:"TensorFlow",category:"backend",proficiency:75},{name:"MongoDB",category:"database",proficiency:82},{name:"Stripe",category:"tools",proficiency:80},{name:"Chart.js",category:"frontend",proficiency:85}],category:"ai",status:"completed",timeline:"5 months",teamSize:3,myRole:"Lead Full Stack Developer",github:"https://github.com/princenyamadi/financeai",live:"https://financeai-demo.com",caseStudy:{challenge:"Users struggle with personal finance management and lack personalized insights to make informed financial decisions.",solution:"Developed an AI-powered platform that analyzes spending patterns, provides personalized recommendations, and offers investment insights.",results:["75% user engagement increase","40% improvement in user savings rates","4.8/5 app store rating","50K+ active monthly users"]},features:["AI-powered budget recommendations","Investment portfolio analysis","Expense categorization and tracking","Financial goal setting and monitoring","Secure bank account integration","Personalized financial insights"],challenges:["Implementing secure financial data handling","Training AI models for financial predictions","Creating intuitive data visualizations","Ensuring regulatory compliance"],learnings:["Machine learning in finance applications","Financial data security best practices","Regulatory compliance (PCI DSS)","Advanced data visualization techniques"],featured:!0,priority:3},{id:"healthtrack",title:"HealthTrack",subtitle:"Comprehensive Health Monitoring Platform",description:"A comprehensive health monitoring platform that integrates wearable devices and provides personalized health insights.",longDescription:"HealthTrack provides a unified platform for health monitoring, integrating data from various wearable devices and providing AI-powered health insights and recommendations.",image:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",techStack:[{name:"React Native",category:"mobile",proficiency:80},{name:"Node.js",category:"backend",proficiency:88},{name:"GraphQL",category:"backend",proficiency:75},{name:"MongoDB",category:"database",proficiency:82},{name:"AWS IoT",category:"cloud",proficiency:70}],category:"mobile",status:"in-progress",timeline:"4 months",teamSize:6,myRole:"Mobile Developer & IoT Integration Specialist",github:"https://github.com/princenyamadi/healthtrack",features:["Wearable device integration","Real-time health monitoring","AI-powered health insights","Personalized recommendations","Healthcare provider integration","Emergency alert system"],challenges:["IoT device integration complexity","Real-time data synchronization","Healthcare data privacy compliance","Cross-platform mobile development"],learnings:["IoT architecture patterns","Healthcare industry standards","React Native optimization","Real-time data processing"],featured:!1,priority:4},{id:"cryptoanalyzer",title:"CryptoAnalyzer",subtitle:"Blockchain Analytics Dashboard",description:"Advanced cryptocurrency analytics platform with real-time market data, portfolio tracking, and trading insights.",longDescription:"CryptoAnalyzer provides comprehensive cryptocurrency market analysis with advanced charting, portfolio management, and algorithmic trading insights.",image:"https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",techStack:[{name:"React",category:"frontend",proficiency:95},{name:"Web3.js",category:"blockchain",proficiency:70},{name:"Solidity",category:"blockchain",proficiency:65},{name:"Node.js",category:"backend",proficiency:88},{name:"PostgreSQL",category:"database",proficiency:85}],category:"blockchain",status:"concept",timeline:"3 months",myRole:"Blockchain Developer & Data Analyst",features:["Real-time cryptocurrency tracking","Advanced charting and analytics","Portfolio management tools","DeFi protocol integration","Automated trading strategies","Market sentiment analysis"],challenges:["Blockchain data indexing","Real-time price feeds integration","Complex financial calculations","Cryptocurrency market volatility handling"],learnings:["Blockchain development fundamentals","DeFi protocol interactions","Financial data analysis","Cryptocurrency market dynamics"],featured:!1,priority:5}],Vp=[{id:"all",name:"All Projects",count:Ue.length},{id:"web",name:"Web Applications",count:Ue.filter(t=>t.category==="web").length},{id:"fullstack",name:"Full Stack",count:Ue.filter(t=>t.category==="fullstack").length},{id:"mobile",name:"Mobile Apps",count:Ue.filter(t=>t.category==="mobile").length},{id:"ai",name:"AI/ML",count:Ue.filter(t=>t.category==="ai").length},{id:"blockchain",name:"Blockchain",count:Ue.filter(t=>t.category==="blockchain").length}],Dr={totalProjects:Ue.length,completedProjects:Ue.filter(t=>t.status==="completed").length,inProgressProjects:Ue.filter(t=>t.status==="in-progress").length,totalTeamMembers:Ue.reduce((t,e)=>t+(e.teamSize||1),0),averageTimeline:"5 months",techStackVariety:[...new Set(Ue.flatMap(t=>t.techStack.map(e=>e.name)))].length},Fr={name:"Prince Nyamadi",role:"Full Stack Developer",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",bio:"Passionate full-stack developer with 5+ years of experience building scalable web applications and mentoring development teams.",social:{twitter:"https://twitter.com/princenyamadi_dev",linkedin:"https://linkedin.com/in/princenyamadi-dev",github:"https://github.com/princenyamadi"}},Qs=[{id:"frontend",name:"Frontend Development",description:"React, Vue, Angular, and modern frontend technologies",color:"blue",icon:"💻"},{id:"backend",name:"Backend Development",description:"Node.js, Python, APIs, and server-side architecture",color:"green",icon:"🖥️"},{id:"fullstack",name:"Full Stack",description:"End-to-end application development and architecture",color:"purple",icon:"🚀"},{id:"devops",name:"DevOps & Cloud",description:"Deployment, CI/CD, containerization, and cloud platforms",color:"orange",icon:"☁️"},{id:"ai-ml",name:"AI & Machine Learning",description:"Artificial intelligence, ML models, and data science",color:"red",icon:"🤖"},{id:"career",name:"Career & Growth",description:"Professional development, leadership, and industry insights",color:"indigo",icon:"📈"}],Te=[{id:"react",name:"React",color:"blue",description:"React.js library and ecosystem"},{id:"typescript",name:"TypeScript",color:"blue",description:"TypeScript language and tooling"},{id:"nextjs",name:"Next.js",color:"gray",description:"Next.js framework"},{id:"nodejs",name:"Node.js",color:"green",description:"Node.js runtime and ecosystem"},{id:"python",name:"Python",color:"yellow",description:"Python programming language"},{id:"aws",name:"AWS",color:"orange",description:"Amazon Web Services"},{id:"docker",name:"Docker",color:"blue",description:"Containerization with Docker"},{id:"performance",name:"Performance",color:"red",description:"Application performance optimization"},{id:"architecture",name:"Architecture",color:"purple",description:"Software architecture and design patterns"},{id:"testing",name:"Testing",color:"green",description:"Software testing strategies"},{id:"security",name:"Security",color:"red",description:"Application security"},{id:"ai",name:"AI",color:"pink",description:"Artificial Intelligence"},{id:"tutorial",name:"Tutorial",color:"blue",description:"Step-by-step tutorials"},{id:"best-practices",name:"Best Practices",color:"green",description:"Industry best practices"}],xt=[{id:"react-performance-optimization",title:"React Performance Optimization: Advanced Techniques for 2024",subtitle:"Master React performance with modern optimization strategies",excerpt:"Learn advanced React performance optimization techniques including code splitting, memoization, virtual scrolling, and bundle analysis to build lightning-fast applications.",content:`# React Performance Optimization: Advanced Techniques for 2024

React applications can suffer from performance issues as they grow in complexity. In this comprehensive guide, we'll explore advanced optimization techniques that can dramatically improve your app's performance.

## 1. Code Splitting and Lazy Loading

Code splitting is one of the most effective ways to improve initial load time:

\`\`\`typescript
// Dynamic imports with React.lazy
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## 2. Memoization Strategies

Use React.memo, useMemo, and useCallback strategically:

\`\`\`typescript
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: heavyComputation(item)
    }));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} item={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});
\`\`\`

## 3. Virtual Scrolling for Large Lists

For large datasets, implement virtual scrolling:

\`\`\`typescript
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => {
  const Row = ({ index, style }) => (
    <div style={style}>
      <ListItem data={items[index]} />
    </div>
  );

  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </List>
  );
};
\`\`\`

## 4. Bundle Analysis and Optimization

Use webpack-bundle-analyzer to identify large dependencies:

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
npx webpack-bundle-analyzer build/static/js/*.js
\`\`\`

## 5. Image Optimization

Implement responsive images with proper loading strategies:

\`\`\`typescript
const OptimizedImage = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      style={{ aspectRatio: \`\${width}/\${height}\` }}
    />
  );
};
\`\`\`

## Key Takeaways

1. **Measure First**: Always profile before optimizing
2. **Code Split**: Lazy load components and routes
3. **Memoize Wisely**: Don't over-memoize simple components
4. **Optimize Images**: Use modern formats and lazy loading
5. **Bundle Analysis**: Regularly analyze and optimize your bundle

Remember, premature optimization is the root of all evil. Always measure the performance impact of your optimizations!`,coverImage:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",author:Fr,category:Qs[0],tags:[Te.find(t=>t.id==="react"),Te.find(t=>t.id==="typescript"),Te.find(t=>t.id==="performance"),Te.find(t=>t.id==="tutorial")],publishedAt:"2024-01-15",readTime:12,featured:!0,views:2547,likes:142,comments:28,difficulty:"advanced",codeExamples:[{language:"typescript",code:`const MemoizedComponent = React.memo(({ data }) => {
  const expensiveValue = useMemo(() => {
    return data.reduce((acc, item) => acc + item.value, 0);
  }, [data]);

  return <div>{expensiveValue}</div>;
});`,description:"Memoization example with useMemo and React.memo"}],seoKeywords:["react performance","optimization","code splitting","memoization","virtual scrolling"]},{id:"node-microservices-architecture",title:"Building Scalable Microservices with Node.js",subtitle:"A comprehensive guide to microservices architecture",excerpt:"Discover how to design, build, and deploy scalable microservices using Node.js, including service communication, data management, and deployment strategies.",content:`# Building Scalable Microservices with Node.js

Microservices architecture has become the gold standard for building scalable, maintainable applications. In this guide, we'll explore how to implement microservices using Node.js.

## 1. Service Design Principles

Follow these principles when designing microservices:

- **Single Responsibility**: Each service should have one business responsibility
- **Loose Coupling**: Services should be independent and communicate through APIs
- **High Cohesion**: Related functionality should be grouped together

## 2. Service Communication

### Synchronous Communication with REST APIs

\`\`\`typescript
// User service
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await UserService.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Order service calling User service
const getUserInfo = async (userId: string) => {
  const response = await fetch(\`\${USER_SERVICE_URL}/api/users/\${userId}\`);
  return response.json();
};
\`\`\`

### Asynchronous Communication with Message Queues

\`\`\`typescript
import amqp from 'amqplib';

class MessageQueue {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async connect() {
    this.connection = await amqp.connect(process.env.RABBITMQ_URL);
    this.channel = await this.connection.createChannel();
  }

  async publishEvent(exchange: string, routingKey: string, data: any) {
    await this.channel.assertExchange(exchange, 'topic');
    this.channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(data)));
  }

  async subscribeToEvent(exchange: string, routingKey: string, callback: Function) {
    await this.channel.assertExchange(exchange, 'topic');
    const queue = await this.channel.assertQueue('', { exclusive: true });
    
    await this.channel.bindQueue(queue.queue, exchange, routingKey);
    this.channel.consume(queue.queue, (message) => {
      if (message) {
        const data = JSON.parse(message.content.toString());
        callback(data);
        this.channel.ack(message);
      }
    });
  }
}
\`\`\`

## 3. Data Management Strategies

### Database per Service Pattern

Each microservice should have its own database:

\`\`\`typescript
// User service with its own database
class UserRepository {
  async create(userData: CreateUserDto): Promise<User> {
    return await this.userModel.create(userData);
  }

  async findById(id: string): Promise<User | null> {
    return await this.userModel.findById(id);
  }
}

// Order service with its own database
class OrderRepository {
  async create(orderData: CreateOrderDto): Promise<Order> {
    return await this.orderModel.create(orderData);
  }

  async findByUserId(userId: string): Promise<Order[]> {
    return await this.orderModel.find({ userId });
  }
}
\`\`\`

## 4. Service Discovery and Load Balancing

Implement service discovery for dynamic service location:

\`\`\`typescript
import consul from 'consul';

class ServiceRegistry {
  private consul: consul.Consul;

  constructor() {
    this.consul = new consul({
      host: process.env.CONSUL_HOST || 'localhost',
      port: process.env.CONSUL_PORT || '8500'
    });
  }

  async registerService(serviceName: string, port: number) {
    await this.consul.agent.service.register({
      name: serviceName,
      port: port,
      check: {
        http: \`http://localhost:\${port}/health\`,
        interval: '10s'
      }
    });
  }

  async discoverService(serviceName: string): Promise<string[]> {
    const services = await this.consul.health.service(serviceName);
    return services[0].map(service => 
      \`http://\${service.Service.Address}:\${service.Service.Port}\`
    );
  }
}
\`\`\`

## 5. Containerization with Docker

Create efficient Docker images for your services:

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

USER node

CMD ["node", "dist/index.js"]
\`\`\`

## Best Practices

1. **API Versioning**: Always version your APIs
2. **Circuit Breakers**: Implement circuit breakers for resilience
3. **Monitoring**: Use distributed tracing and centralized logging
4. **Security**: Implement authentication and authorization
5. **Testing**: Write comprehensive integration tests

Microservices aren't a silver bullet, but when implemented correctly, they provide incredible scalability and maintainability benefits.`,coverImage:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",author:Fr,category:Qs[1],tags:[Te.find(t=>t.id==="nodejs"),Te.find(t=>t.id==="architecture"),Te.find(t=>t.id==="docker"),Te.find(t=>t.id==="best-practices")],publishedAt:"2024-01-08",readTime:15,featured:!0,views:1823,likes:97,comments:15,difficulty:"advanced",series:{name:"Microservices Mastery",part:1,totalParts:3},seoKeywords:["microservices","nodejs","architecture","scalability","docker","distributed systems"]},{id:"ai-web-development",title:"Integrating AI into Web Applications: A Practical Guide",subtitle:"Enhance your web apps with AI capabilities",excerpt:"Learn how to integrate AI and machine learning features into your web applications, from simple recommendations to complex natural language processing.",content:`# Integrating AI into Web Applications: A Practical Guide

AI is transforming web development. In this guide, we'll explore practical ways to integrate AI capabilities into your web applications.

## 1. Getting Started with AI APIs

### OpenAI Integration

\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateText = async (prompt: string): Promise<string> => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return completion.choices[0].message.content || '';
  } catch (error) {
    console.error('Error generating text:', error);
    throw new Error('Failed to generate text');
  }
};
\`\`\`

## 2. Implementing Smart Search

### Semantic Search with Embeddings

\`\`\`typescript
import { createEmbedding, calculateSimilarity } from './embeddings';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  similarity: number;
}

class SmartSearch {
  private documents: Document[] = [];
  private embeddings: Map<string, number[]> = new Map();

  async indexDocument(doc: Document) {
    const embedding = await createEmbedding(doc.content);
    this.embeddings.set(doc.id, embedding);
    this.documents.push(doc);
  }

  async search(query: string, limit: number = 10): Promise<SearchResult[]> {
    const queryEmbedding = await createEmbedding(query);
    
    const results = this.documents.map(doc => {
      const docEmbedding = this.embeddings.get(doc.id)!;
      const similarity = calculateSimilarity(queryEmbedding, docEmbedding);
      
      return {
        id: doc.id,
        title: doc.title,
        content: doc.content,
        similarity
      };
    });

    return results
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit);
  }
}
\`\`\`

## 3. Real-time Sentiment Analysis

\`\`\`typescript
import { pipeline } from '@xenova/transformers';

class SentimentAnalyzer {
  private classifier: any;

  async initialize() {
    this.classifier = await pipeline(
      'sentiment-analysis',
      'Xenova/distilbert-base-uncased-finetuned-sst-2-english'
    );
  }

  async analyzeSentiment(text: string): Promise<{
    label: string;
    score: number;
  }> {
    const result = await this.classifier(text);
    return {
      label: result[0].label,
      score: result[0].score
    };
  }

  async analyzeConversation(messages: string[]): Promise<{
    overall: string;
    messages: Array<{ text: string; sentiment: string; score: number }>;
  }> {
    const analyses = await Promise.all(
      messages.map(async (message) => {
        const sentiment = await this.analyzeSentiment(message);
        return {
          text: message,
          sentiment: sentiment.label,
          score: sentiment.score
        };
      })
    );

    const averageScore = analyses.reduce((sum, analysis) => 
      sum + analysis.score, 0) / analyses.length;

    return {
      overall: averageScore > 0.5 ? 'POSITIVE' : 'NEGATIVE',
      messages: analyses
    };
  }
}
\`\`\`

## 4. Intelligent Content Moderation

\`\`\`typescript
class ContentModerator {
  async moderateContent(content: string): Promise<{
    isAppropriate: boolean;
    issues: string[];
    confidence: number;
  }> {
    const toxicityResult = await this.checkToxicity(content);
    const spamResult = await this.checkSpam(content);
    
    const issues = [];
    if (toxicityResult.isToxic) issues.push('toxic language');
    if (spamResult.isSpam) issues.push('spam content');
    
    return {
      isAppropriate: issues.length === 0,
      issues,
      confidence: Math.min(toxicityResult.confidence, spamResult.confidence)
    };
  }

  private async checkToxicity(text: string) {
    // Implementation using toxicity detection model
    const classifier = await pipeline('text-classification', 'toxicity-model');
    const result = await classifier(text);
    
    return {
      isToxic: result[0].label === 'TOXIC',
      confidence: result[0].score
    };
  }

  private async checkSpam(text: string) {
    // Implementation using spam detection model
    const classifier = await pipeline('text-classification', 'spam-model');
    const result = await classifier(text);
    
    return {
      isSpam: result[0].label === 'SPAM',
      confidence: result[0].score
    };
  }
}
\`\`\`

## 5. Recommendation Engine

\`\`\`typescript
interface UserPreference {
  userId: string;
  itemId: string;
  rating: number;
  timestamp: Date;
}

class RecommendationEngine {
  private preferences: UserPreference[] = [];

  async addPreference(preference: UserPreference) {
    this.preferences.push(preference);
  }

  async getRecommendations(userId: string, limit: number = 10): Promise<string[]> {
    // Collaborative filtering approach
    const userPrefs = this.preferences.filter(p => p.userId === userId);
    const userItems = new Set(userPrefs.map(p => p.itemId));
    
    // Find similar users
    const similarUsers = await this.findSimilarUsers(userId);
    
    // Get recommendations from similar users
    const recommendations = new Map<string, number>();
    
    similarUsers.forEach(({ userId: similarUserId, similarity }) => {
      const similarUserPrefs = this.preferences.filter(p => 
        p.userId === similarUserId && !userItems.has(p.itemId)
      );
      
      similarUserPrefs.forEach(pref => {
        const score = pref.rating * similarity;
        recommendations.set(pref.itemId, 
          (recommendations.get(pref.itemId) || 0) + score
        );
      });
    });
    
    return Array.from(recommendations.entries())
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([itemId]) => itemId);
  }

  private async findSimilarUsers(userId: string): Promise<Array<{
    userId: string;
    similarity: number;
  }>> {
    // Implementation of user similarity calculation
    // Using cosine similarity or Pearson correlation
    return [];
  }
}
\`\`\`

## Best Practices

1. **Start Small**: Begin with simple AI integrations
2. **User Privacy**: Always respect user data and privacy
3. **Fallback Strategies**: Have fallbacks when AI services fail
4. **Performance**: Consider latency and optimize API calls
5. **Cost Management**: Monitor AI service usage and costs
6. **Testing**: Thoroughly test AI integrations

AI can significantly enhance user experience when implemented thoughtfully. Start with one feature and gradually expand your AI capabilities.`,coverImage:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",author:Fr,category:Qs[4],tags:[Te.find(t=>t.id==="ai"),Te.find(t=>t.id==="nodejs"),Te.find(t=>t.id==="typescript"),Te.find(t=>t.id==="tutorial")],publishedAt:"2024-01-20",readTime:18,featured:!0,views:3421,likes:203,comments:45,difficulty:"intermediate",seoKeywords:["ai integration","web development","machine learning","openai","sentiment analysis"]},{id:"developer-career-growth",title:"From Junior to Senior: A Developer's Growth Journey",subtitle:"Navigate your career progression with confidence",excerpt:"A comprehensive guide to advancing your developer career, from technical skills to leadership abilities, based on real-world experience and industry insights.",content:`# From Junior to Senior: A Developer's Growth Journey

Career progression in software development isn't just about writing better code. It's about developing a comprehensive skill set that includes technical expertise, communication, and leadership abilities.

## The Developer Career Ladder

### Junior Developer (0-2 years)
- **Focus**: Learning fundamentals and gaining experience
- **Key Skills**: Basic programming, following instructions, debugging
- **Mindset**: Absorb knowledge, ask questions, focus on implementation

### Mid-Level Developer (2-5 years)
- **Focus**: Taking ownership and contributing to design decisions
- **Key Skills**: System design, code review, mentoring juniors
- **Mindset**: Problem-solving, taking initiative, understanding business context

### Senior Developer (5+ years)
- **Focus**: Technical leadership and strategic thinking
- **Key Skills**: Architecture, mentoring, cross-team collaboration
- **Mindset**: Teaching others, thinking long-term, driving technical decisions

## Technical Skills Development

### 1. Master Your Craft

\`\`\`typescript
// Junior level - Basic implementation
function calculateTotal(items: any[]) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

// Senior level - Robust, flexible solution
interface CartItem {
  price: number;
  quantity: number;
  discounts?: Discount[];
}

interface Discount {
  type: 'percentage' | 'fixed';
  value: number;
  conditions?: DiscountCondition[];
}

class CartCalculator {
  calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => {
      const itemTotal = this.calculateItemTotal(item);
      return total + itemTotal;
    }, 0);
  }

  private calculateItemTotal(item: CartItem): number {
    const baseTotal = item.price * item.quantity;
    const discountAmount = this.calculateDiscounts(item);
    return Math.max(0, baseTotal - discountAmount);
  }

  private calculateDiscounts(item: CartItem): number {
    if (!item.discounts?.length) return 0;
    
    return item.discounts.reduce((totalDiscount, discount) => {
      if (this.isDiscountApplicable(discount, item)) {
        return totalDiscount + this.calculateDiscountAmount(discount, item);
      }
      return totalDiscount;
    }, 0);
  }

  private isDiscountApplicable(discount: Discount, item: CartItem): boolean {
    // Implement discount condition logic
    return true;
  }

  private calculateDiscountAmount(discount: Discount, item: CartItem): number {
    const baseAmount = item.price * item.quantity;
    
    switch (discount.type) {
      case 'percentage':
        return baseAmount * (discount.value / 100);
      case 'fixed':
        return Math.min(discount.value, baseAmount);
      default:
        return 0;
    }
  }
}
\`\`\`

### 2. Learn System Design

Understanding how to design scalable systems is crucial:

\`\`\`typescript
// Example: Designing a notification system
interface NotificationService {
  sendNotification(notification: Notification): Promise<void>;
  sendBulkNotifications(notifications: Notification[]): Promise<void>;
  subscribeToTopic(userId: string, topic: string): Promise<void>;
  unsubscribeFromTopic(userId: string, topic: string): Promise<void>;
}

class ScalableNotificationService implements NotificationService {
  private messageQueue: MessageQueue;
  private notificationProviders: Map<string, NotificationProvider>;
  private userPreferences: UserPreferencesService;

  constructor(
    messageQueue: MessageQueue,
    providers: NotificationProvider[],
    userPreferences: UserPreferencesService
  ) {
    this.messageQueue = messageQueue;
    this.notificationProviders = new Map(
      providers.map(provider => [provider.type, provider])
    );
    this.userPreferences = userPreferences;
  }

  async sendNotification(notification: Notification): Promise<void> {
    // Add to queue for processing
    await this.messageQueue.publish('notifications', notification);
  }

  async sendBulkNotifications(notifications: Notification[]): Promise<void> {
    // Batch process for efficiency
    const batches = this.chunkArray(notifications, 100);
    
    for (const batch of batches) {
      await this.messageQueue.publish('bulk-notifications', batch);
    }
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }
}
\`\`\`

## Soft Skills Development

### 1. Communication Skills
- **Code Reviews**: Provide constructive feedback
- **Documentation**: Write clear, comprehensive docs
- **Presentations**: Explain technical concepts to non-technical audiences

### 2. Leadership Skills
- **Mentoring**: Guide junior developers
- **Project Leadership**: Drive technical initiatives
- **Cross-team Collaboration**: Work effectively with other departments

### 3. Business Acumen
- **Understand the Product**: Know how your code impacts users
- **Estimate Accurately**: Provide realistic timelines
- **Prioritize Effectively**: Focus on high-impact work

## Building Your Professional Brand

### 1. Technical Writing
Share your knowledge through blog posts and articles:

\`\`\`markdown
# Example Blog Post Structure

## Introduction
- Hook the reader with a compelling problem
- Outline what they'll learn

## Problem Statement
- Clearly define the issue you're solving
- Provide context and background

## Solution
- Step-by-step implementation
- Code examples with explanations
- Best practices and gotchas

## Conclusion
- Summarize key points
- Suggest next steps or advanced topics
\`\`\`

### 2. Open Source Contributions
- Contribute to existing projects
- Create your own projects
- Maintain and support your contributions

### 3. Community Involvement
- Attend meetups and conferences
- Speak at events
- Participate in online communities

## Common Career Pitfalls to Avoid

1. **Focusing Only on Technical Skills**: Soft skills are equally important
2. **Not Seeking Feedback**: Regular feedback accelerates growth
3. **Staying in Comfort Zone**: Take on challenging projects
4. **Neglecting Networking**: Build professional relationships
5. **Not Documenting Achievements**: Keep track of your accomplishments

## Key Metrics for Career Growth

### Technical Metrics
- Code quality and review feedback
- Project completion rates
- System performance improvements
- Bug reduction rates

### Leadership Metrics
- Team productivity improvements
- Mentorship success stories
- Cross-team collaboration effectiveness
- Knowledge sharing contributions

## Action Plan for Career Advancement

### Short-term (3-6 months)
- Identify skill gaps and create learning plan
- Seek feedback from peers and managers
- Take on a challenging project
- Start contributing to open source

### Medium-term (6-12 months)
- Lead a technical initiative
- Mentor a junior developer
- Speak at a local meetup
- Write technical blog posts

### Long-term (1-2 years)
- Architect a significant system
- Lead a cross-functional team
- Establish yourself as a subject matter expert
- Consider management or principal engineer tracks

Remember, career growth is a marathon, not a sprint. Focus on consistent improvement and helping others succeed along the way.`,coverImage:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",author:Fr,category:Qs[5],tags:[Te.find(t=>t.id==="best-practices"),Te.find(t=>t.id==="architecture"),Te.find(t=>t.id==="typescript")],publishedAt:"2024-01-12",readTime:20,featured:!1,views:1456,likes:89,comments:23,difficulty:"beginner",seoKeywords:["career growth","developer career","software engineering","leadership","technical skills"]}],sc=xt.filter(t=>t.featured);xt.sort((t,e)=>new Date(e.publishedAt).getTime()-new Date(t.publishedAt).getTime()).slice(0,6);const Mr={totalPosts:xt.length,totalViews:xt.reduce((t,e)=>t+e.views,0),totalLikes:xt.reduce((t,e)=>t+e.likes,0),averageReadTime:Math.round(xt.reduce((t,e)=>t+e.readTime,0)/xt.length),categoriesCount:Qs.length},ps=[{name:"Frontend Development",color:"from-blue-400 to-cyan-400",bgColor:"from-blue-500/10 to-cyan-500/10",skills:[{name:"React",level:95,years:"5+ years",category:"Frontend",description:"Advanced React patterns, hooks, context, performance optimization",projects:25,icon:"⚛️"},{name:"TypeScript",level:90,years:"4+ years",category:"Frontend",description:"Type-safe development, advanced types, utility types",projects:20,icon:"🔷"},{name:"Next.js",level:88,years:"3+ years",category:"Frontend",description:"SSR, SSG, API routes, performance optimization",projects:15,icon:"▲"},{name:"Vue.js",level:75,years:"2+ years",category:"Frontend",description:"Vue 3, Composition API, Pinia state management",projects:8,icon:"💚"},{name:"Tailwind CSS",level:92,years:"3+ years",category:"Frontend",description:"Utility-first CSS, custom configurations, responsive design",projects:30,icon:"🎨"},{name:"SASS/SCSS",level:85,years:"4+ years",category:"Frontend",description:"Advanced features, mixins, functions, architecture",projects:18,icon:"💄"}]},{name:"Backend Development",color:"from-green-400 to-emerald-400",bgColor:"from-green-500/10 to-emerald-500/10",skills:[{name:"Node.js",level:90,years:"5+ years",category:"Backend",description:"Express, Fastify, microservices, async programming",projects:22,icon:"🟢"},{name:"Python",level:85,years:"4+ years",category:"Backend",description:"FastAPI, Django, Flask, data processing",projects:16,icon:"🐍"},{name:"PostgreSQL",level:82,years:"4+ years",category:"Backend",description:"Query optimization, indexing, stored procedures",projects:20,icon:"🐘"},{name:"MongoDB",level:78,years:"3+ years",category:"Backend",description:"Aggregation pipelines, indexing, schema design",projects:12,icon:"🍃"},{name:"GraphQL",level:75,years:"2+ years",category:"Backend",description:"Apollo Server, schema design, resolvers",projects:8,icon:"◉"},{name:"Redis",level:80,years:"3+ years",category:"Backend",description:"Caching strategies, pub/sub, session management",projects:15,icon:"🔴"}]},{name:"Cloud & DevOps",color:"from-purple-400 to-pink-400",bgColor:"from-purple-500/10 to-pink-500/10",skills:[{name:"AWS",level:85,years:"4+ years",category:"Cloud",description:"EC2, S3, Lambda, RDS, CloudFormation, CDK",projects:18,icon:"☁️"},{name:"Docker",level:88,years:"4+ years",category:"DevOps",description:"Containerization, multi-stage builds, optimization",projects:25,icon:"🐳"},{name:"Kubernetes",level:70,years:"2+ years",category:"DevOps",description:"Orchestration, deployments, services, ingress",projects:6,icon:"⚙️"},{name:"GitHub Actions",level:90,years:"3+ years",category:"DevOps",description:"CI/CD pipelines, automated testing, deployments",projects:30,icon:"🚀"},{name:"Terraform",level:72,years:"2+ years",category:"DevOps",description:"Infrastructure as code, state management",projects:8,icon:"🏗️"},{name:"Nginx",level:75,years:"3+ years",category:"DevOps",description:"Reverse proxy, load balancing, SSL configuration",projects:12,icon:"🌐"}]},{name:"Tools & Others",color:"from-yellow-400 to-orange-400",bgColor:"from-yellow-500/10 to-orange-500/10",skills:[{name:"Git",level:95,years:"6+ years",category:"Tools",description:"Advanced workflows, rebasing, hooks, strategies",projects:50,icon:"📝"},{name:"Jest/Testing",level:85,years:"4+ years",category:"Tools",description:"Unit testing, integration tests, TDD practices",projects:20,icon:"🧪"},{name:"Figma",level:80,years:"3+ years",category:"Design",description:"UI/UX design, prototyping, design systems",projects:15,icon:"🎨"},{name:"Webpack/Vite",level:82,years:"3+ years",category:"Tools",description:"Build optimization, configuration, plugins",projects:18,icon:"📦"},{name:"Linux/Unix",level:88,years:"5+ years",category:"Tools",description:"System administration, shell scripting, automation",projects:25,icon:"🐧"},{name:"API Design",level:90,years:"5+ years",category:"Architecture",description:"REST, GraphQL, OpenAPI, versioning strategies",projects:30,icon:"🔌"}]}],$p=[{name:"AWS Certified Solutions Architect",issuer:"Amazon Web Services",year:"2023",level:"Associate"},{name:"Google Cloud Professional Developer",issuer:"Google Cloud",year:"2022",level:"Professional"},{name:"React Developer Certification",issuer:"Meta",year:"2021",level:"Professional"}],Bp=[{skill:"Rust",reason:"System programming and WebAssembly",timeline:"2024 Q2"},{skill:"Machine Learning",reason:"AI integration in web applications",timeline:"2024 Q3"},{skill:"Web3/Blockchain",reason:"Decentralized application development",timeline:"2024 Q4"}],qr=[{id:"projects-delivered",title:"Projects Delivered",value:50,unit:"+",description:"Successfully completed projects from concept to production",icon:Jd,color:"from-blue-400 to-cyan-400",bgColor:"from-blue-500/10 to-cyan-500/10",category:"business",trend:"up",trendValue:"15%",featured:!0},{id:"code-quality",title:"Code Quality Score",value:98,unit:"%",description:"Average code quality across all projects (SonarQube metrics)",icon:Qd,color:"from-green-400 to-emerald-400",bgColor:"from-green-500/10 to-emerald-500/10",category:"technical",trend:"up",trendValue:"12%",featured:!0},{id:"user-impact",title:"Users Impacted",value:"2.5M",unit:"+",description:"Total users across all applications built and maintained",icon:io,color:"from-purple-400 to-pink-400",bgColor:"from-purple-500/10 to-pink-500/10",category:"business",trend:"up",trendValue:"40%",featured:!0},{id:"performance-improvement",title:"Performance Boost",value:65,unit:"%",description:"Average performance improvement in applications optimized",icon:lr,color:"from-yellow-400 to-orange-400",bgColor:"from-yellow-500/10 to-orange-500/10",category:"technical",trend:"up",trendValue:"25%",featured:!0},{id:"team-members-mentored",title:"Developers Mentored",value:25,unit:"+",description:"Junior and mid-level developers guided and mentored",icon:en,color:"from-indigo-400 to-purple-400",bgColor:"from-indigo-500/10 to-purple-500/10",category:"leadership",trend:"up",trendValue:"30%",featured:!1},{id:"client-satisfaction",title:"Client Satisfaction",value:100,unit:"%",description:"Client satisfaction rate based on project reviews and feedback",icon:Tn,color:"from-pink-400 to-red-400",bgColor:"from-pink-500/10 to-red-500/10",category:"quality",trend:"stable",featured:!1},{id:"on-time-delivery",title:"On-Time Delivery",value:98,unit:"%",description:"Projects delivered on or ahead of scheduled deadlines",icon:kn,color:"from-teal-400 to-blue-400",bgColor:"from-teal-500/10 to-blue-500/10",category:"quality",trend:"up",trendValue:"8%",featured:!1},{id:"revenue-generated",title:"Revenue Generated",value:"$5.2M",unit:"+",description:"Total revenue generated for clients through applications built",icon:ro,color:"from-emerald-400 to-green-400",bgColor:"from-emerald-500/10 to-green-500/10",category:"business",trend:"up",trendValue:"85%",featured:!0}],Hp=[{id:"senior-promotion",title:"Promoted to Senior Full Stack Developer",description:"Led team of 5 developers and architected scalable solutions",date:"2022-03",type:"career",icon:"🚀",color:"from-blue-400 to-purple-400"},{id:"aws-certification",title:"AWS Solutions Architect Certification",description:"Achieved AWS certification for cloud architecture expertise",date:"2023-01",type:"skill",icon:"☁️",color:"from-orange-400 to-red-400"},{id:"open-source-milestone",title:"10K+ GitHub Stars Achieved",description:"Open source projects reached significant community adoption",date:"2023-06",type:"recognition",icon:"⭐",color:"from-yellow-400 to-orange-400"},{id:"financeai-launch",title:"FinanceAI Platform Launch",description:"Successfully launched AI-powered finance platform serving 100K+ users",date:"2023-09",type:"project",icon:"💡",color:"from-green-400 to-blue-400"},{id:"mentor-recognition",title:"Mentor of the Year Award",description:"Recognized for outstanding contribution to developer community",date:"2022-12",type:"recognition",icon:"🏆",color:"from-purple-400 to-pink-400"}],Mi={yearsOfExperience:6,totalProjects:50,clientsServed:25,linesOfCode:"500K+",preferredTechStack:["React","Node.js","TypeScript","AWS","PostgreSQL"]},er=[{id:"1",name:"Sarah Mitchell",role:"CEO",company:"GreenTech Solutions",image:"https://images.unsplash.com/photo-1494790108755-2616b612b3c4?w=150&h=150&fit=crop&crop=face",content:"Alex transformed our sustainability platform vision into reality. His technical expertise in React and Node.js, combined with his understanding of our business needs, resulted in a 40% increase in user engagement. The real-time analytics dashboard he built became our competitive advantage.",rating:5,project:"EcoTracker Platform",relationship:"client",linkedinUrl:"https://linkedin.com/in/sarahmitchell",companyUrl:"https://greentech-solutions.com",featured:!0},{id:"2",name:"Michael Chen",role:"CTO",company:"StartupFlow",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",content:"Working with Alex was a game-changer for our development team. He architected our microservices infrastructure that now handles 1M+ requests daily. His code reviews and mentorship elevated our entire team's technical standards. A true full-stack expert.",rating:5,project:"DevFlow Platform",relationship:"manager",linkedinUrl:"https://linkedin.com/in/michaelchen",companyUrl:"https://startupflow.io",featured:!0},{id:"3",name:"Emily Rodriguez",role:"Product Manager",company:"FinanceAI Corp",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",content:"Alex brings a rare combination of technical brilliance and product intuition. He delivered our AI-powered finance app 2 weeks ahead of schedule with features that exceeded our expectations. His attention to user experience is remarkable.",rating:5,project:"FinanceAI Mobile App",relationship:"colleague",linkedinUrl:"https://linkedin.com/in/emilyrodriguez",companyUrl:"https://financeai.com",featured:!0},{id:"4",name:"David Park",role:"Senior Developer",company:"TechVision Labs",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",content:"Alex is the kind of developer every team needs. His code is clean, well-documented, and scalable. He mentored me through complex React patterns and AWS architecture. Thanks to his guidance, I was promoted to senior developer.",rating:5,relationship:"mentee",linkedinUrl:"https://linkedin.com/in/davidpark",companyUrl:"https://techvision.com",featured:!1},{id:"5",name:"Lisa Thompson",role:"UX Director",company:"DigitalCraft Agency",image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",content:"Alex bridges the gap between design and development beautifully. He implemented our complex design system with pixel-perfect accuracy while suggesting performance optimizations that improved load times by 60%. A pleasure to collaborate with.",rating:5,relationship:"colleague",linkedinUrl:"https://linkedin.com/in/lisathompson",companyUrl:"https://digitalcraft.agency",featured:!1},{id:"6",name:"James Wilson",role:"Startup Founder",company:"LocalMarket",image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",content:"As a non-technical founder, I was worried about finding the right developer. Alex not only built our MVP flawlessly but also educated me on technical decisions and their business impact. His communication and delivery are top-notch.",rating:5,project:"LocalMarket MVP",relationship:"client",linkedinUrl:"https://linkedin.com/in/jameswilson",companyUrl:"https://localmarket.app",featured:!0}],Lr={averageRating:er.reduce((t,e)=>t+e.rating,0)/er.length,clientSatisfaction:100,repeatedClients:85,onTimeDelivery:98},zp=[{title:"Top Contributor",organization:"GitHub",year:"2023",description:"Recognized for significant open source contributions",icon:"🏆"},{title:"Excellence in Development",organization:"TechVision Labs",year:"2023",description:"Annual award for outstanding technical leadership",icon:"⭐"},{title:"Mentor of the Year",organization:"CodePath.org",year:"2022",description:"Recognized for mentoring junior developers",icon:"🎓"},{title:"Innovation Award",organization:"StartupFlow",year:"2022",description:"For architecting scalable microservices infrastructure",icon:"💡"}],qp=({isOpen:t,onClose:e,onNavigate:s})=>{const[i,n]=M.useState(""),[o,l]=M.useState(0),d=M.useRef(null),h=M.useRef(null),f=M.useMemo(()=>{const x=[];return Ue.forEach(j=>{x.push({id:`project-${j.id}`,title:j.title,content:`${j.description} ${j.features.join(" ")} ${j.techStack.map(S=>S.name).join(" ")}`,type:"project",category:j.category,url:"#projects",icon:tn,metadata:{status:j.status,timeline:j.timeline}})}),xt.forEach(j=>{x.push({id:`blog-${j.id}`,title:j.title,content:`${j.excerpt} ${j.tags.map(S=>S.name).join(" ")}`,type:"blog",category:j.category.name,url:"#blog",icon:Ul,metadata:{readTime:`${j.readTime} min`,difficulty:j.difficulty}})}),ps.forEach(j=>{j.skills.forEach(S=>{x.push({id:`skill-${S.name}`,title:S.name,content:`${j.name} skill`,type:"skill",category:j.name,url:"#skills",icon:Vl,metadata:{category:j.name}})})}),qr.forEach(j=>{x.push({id:`achievement-${j.id}`,title:j.title,content:j.description,type:"achievement",category:j.category,url:"#achievements",icon:en,metadata:{value:String(j.value),trend:j.trend||"stable"}})}),er.forEach(j=>{x.push({id:`testimonial-${j.id}`,title:`${j.name} - ${j.company}`,content:j.content,type:"testimonial",category:j.relationship,url:"#testimonials",icon:Xm,metadata:{rating:`${j.rating}/5`,role:j.role}})}),x},[]),m=M.useMemo(()=>{if(!i.trim())return[];const x=i.toLowerCase().trim();return f.filter(S=>{var K;const z=S.title.toLowerCase().includes(x),F=S.content.toLowerCase().includes(x),H=(K=S.category)==null?void 0:K.toLowerCase().includes(x),W=Object.values(S.metadata||{}).some(Y=>Y.toLowerCase().includes(x));return z||F||H||W}).sort((S,z)=>{const F=S.title.toLowerCase().includes(x)?1:0;return(z.title.toLowerCase().includes(x)?1:0)-F}).slice(0,10)},[i,f]);M.useEffect(()=>{const x=j=>{if(t)switch(j.key){case"ArrowDown":j.preventDefault(),l(S=>S<m.length-1?S+1:0);break;case"ArrowUp":j.preventDefault(),l(S=>S>0?S-1:m.length-1);break;case"Enter":j.preventDefault(),m[o]&&y(m[o]);break;case"Escape":j.preventDefault(),e();break}};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[t,m,o,e]),M.useEffect(()=>{l(0)},[m]),M.useEffect(()=>{t&&d.current&&d.current.focus()},[t]),M.useEffect(()=>{if(h.current){const x=h.current.children[o];x&&x.scrollIntoView({behavior:"smooth",block:"nearest"})}},[o]);const y=x=>{if(x.url)if(s)s(x.url);else{const j=document.querySelector(x.url);j&&j.scrollIntoView({behavior:"smooth"})}e()},g=x=>{switch(x){case"project":return"text-blue-400 bg-blue-500/20";case"blog":return"text-purple-400 bg-purple-500/20";case"skill":return"text-green-400 bg-green-500/20";case"achievement":return"text-yellow-400 bg-yellow-500/20";case"testimonial":return"text-pink-400 bg-pink-500/20";default:return"text-gray-400 bg-gray-500/20"}},T=(x,j)=>{if(!j.trim())return x;const S=new RegExp(`(${j.trim()})`,"gi");return x.split(S).map((F,H)=>S.test(F)?r.jsx("mark",{className:"bg-yellow-400/30 text-yellow-200 rounded px-1",children:F},H):F)};return t?r.jsx(De,{children:r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20",onClick:e,children:r.jsxs(C.div,{initial:{opacity:0,y:-50,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-50,scale:.95},className:"w-full max-w-2xl mx-4",onClick:x=>x.stopPropagation(),children:[r.jsx("div",{className:"bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-t-xl p-4",children:r.jsxs("div",{className:"relative",children:[r.jsx(zi,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"}),r.jsx("input",{ref:d,type:"text",value:i,onChange:x=>n(x.target.value),placeholder:"Search projects, blog posts, skills, achievements...",className:"w-full pl-12 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"}),r.jsx("button",{onClick:e,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors","aria-label":"Close search",children:r.jsx(no,{className:"w-5 h-5"})})]})}),r.jsxs("div",{className:"bg-slate-800/95 backdrop-blur-sm border-x border-b border-white/20 rounded-b-xl max-h-96 overflow-hidden",children:[i.trim()&&r.jsxs("div",{className:"p-2 border-b border-white/10 text-xs text-slate-400",children:[m.length," result",m.length!==1?"s":""," found"]}),r.jsx("div",{ref:h,className:"max-h-80 overflow-y-auto",children:m.length>0?m.map((x,j)=>{const S=x.icon,z=j===o;return r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:j*.05},className:`p-4 cursor-pointer transition-all duration-200 ${z?"bg-white/10 border-l-4 border-blue-400":"hover:bg-white/5"}`,onClick:()=>y(x),children:r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx("div",{className:`p-2 rounded-lg ${g(x.type)}`,children:r.jsx(S,{className:"w-4 h-4"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsxs("div",{className:"flex items-center space-x-2 mb-1",children:[r.jsx("h3",{className:"text-sm font-medium text-white truncate",children:T(x.title,i)}),r.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-medium ${g(x.type)}`,children:x.type})]}),r.jsx("p",{className:"text-xs text-slate-300 line-clamp-2 mb-2",children:T(x.content.slice(0,100)+"...",i)}),x.metadata&&r.jsx("div",{className:"flex items-center space-x-4 text-xs text-slate-400",children:Object.entries(x.metadata).map(([F,H])=>r.jsxs("span",{children:[r.jsxs("span",{className:"capitalize",children:[F,":"]})," ",H]},F))})]})]})},x.id)}):i.trim()?r.jsxs("div",{className:"p-8 text-center text-slate-400",children:[r.jsx(zi,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),r.jsxs("p",{children:['No results found for "',i,'"']}),r.jsx("p",{className:"text-xs mt-1",children:"Try searching for projects, skills, or technologies"})]}):r.jsxs("div",{className:"p-8 text-center text-slate-400",children:[r.jsx(zi,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),r.jsx("p",{children:"Start typing to search across all content"}),r.jsxs("div",{className:"flex items-center justify-center space-x-4 mt-4 text-xs",children:[r.jsxs("span",{className:"flex items-center",children:[r.jsx(tn,{className:"w-3 h-3 mr-1"})," Projects"]}),r.jsxs("span",{className:"flex items-center",children:[r.jsx(Ul,{className:"w-3 h-3 mr-1"})," Blog"]}),r.jsxs("span",{className:"flex items-center",children:[r.jsx(Vl,{className:"w-3 h-3 mr-1"})," Skills"]}),r.jsxs("span",{className:"flex items-center",children:[r.jsx(en,{className:"w-3 h-3 mr-1"})," Achievements"]})]})]})}),i.trim()&&m.length>0&&r.jsx("div",{className:"p-2 border-t border-white/10 bg-slate-900/50",children:r.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[r.jsx("span",{children:"Use ↑↓ to navigate"}),r.jsx("span",{children:"Press Enter to select"}),r.jsx("span",{children:"Esc to close"})]})})]})]})})}):null},Wp=({isOpen:t,onClose:e,navigationItems:s,onNavigation:i,onSearchOpen:n})=>r.jsx(De,{children:t&&r.jsxs(r.Fragment,{children:[r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden",onClick:e}),r.jsxs(C.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:25,stiffness:200},className:"fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-lg border-l border-white/10 z-50 md:hidden mobile-safe-area",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-white/10",children:[r.jsx("h2",{className:"text-lg font-semibold text-white",children:"Menu"}),r.jsx("button",{onClick:e,className:"mobile-touch-target mobile-interactive p-2 rounded-lg bg-white/10 text-white hover:bg-white/20","aria-label":"Close menu",children:r.jsx(no,{className:"w-5 h-5"})})]}),r.jsxs("nav",{className:"flex-1 px-6 py-4",children:[r.jsx("div",{className:"space-y-2",children:s.map((o,l)=>r.jsx(C.button,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:l*.1},onClick:()=>{i(o.href),e()},className:"mobile-touch-target mobile-interactive w-full text-left px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200",children:o.name},o.name))}),r.jsxs("div",{className:"mt-8 space-y-3",children:[r.jsxs(C.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},onClick:()=>{n(),e()},className:"mobile-btn w-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-lg",children:[r.jsx(zi,{className:"w-4 h-4 mr-2"}),"Search"]}),r.jsxs(C.a,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},href:"/PRINCE_NYAMADI-CV.pdf",download:"Prince_Nyamadi_Resume.pdf",className:"mobile-btn w-full flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 rounded-lg",onClick:e,children:[r.jsx(ao,{className:"w-4 h-4 mr-2"}),"Download Resume"]}),r.jsx(C.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},onClick:()=>{i("#contact"),e()},className:"mobile-btn w-full border border-white/30 text-white hover:bg-white/10 rounded-lg",children:"Contact Me"})]}),r.jsx(C.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},className:"mt-8 pt-6 border-t border-white/10",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-white/80 text-sm",children:"Theme"}),r.jsx(Nu,{variant:"icon"})]})})]})]})]})}),ic=[{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Blog",href:"#blog"},{name:"Code",href:"#code-showcase"},{name:"Testimonials",href:"#testimonials"}],Kp=()=>{const[t,e]=M.useState(!1),[s,i]=M.useState(!1),n=zd(),o=d=>d==="/"||d.startsWith("#")?n.pathname==="/":n.pathname.startsWith(d),l=d=>{if(d.startsWith("#")){const h=document.querySelector(d);h&&h.scrollIntoView({behavior:"smooth"})}e(!1)};return r.jsxs("header",{className:"absolute top-0 left-0 right-0 z-50 mobile-safe-area",role:"banner","aria-label":"Site header",children:[r.jsxs("div",{className:"mobile-container",children:[r.jsxs("div",{className:"flex items-center justify-between h-16 sm:h-20",children:[r.jsxs(Zr,{to:"/",className:"flex items-center space-x-2 text-white hover:opacity-80 transition-all duration-300",children:[r.jsx(tn,{className:"w-6 h-6"}),r.jsx("span",{className:"font-semibold",children:"Prince Nyamadi"})]}),r.jsx("nav",{className:"hidden md:flex items-center space-x-8",role:"navigation","aria-label":"Primary navigation",id:"primary-navigation",children:ic.map(d=>d.href.startsWith("#")?r.jsx("button",{onClick:()=>l(d.href),className:`text-sm font-medium text-white/90 hover:text-white transition-all duration-300 ${o(d.href)?"text-white font-semibold":""}`,children:d.name},d.name):r.jsx(Zr,{to:d.href,className:`text-sm font-medium text-white/90 hover:text-white transition-all duration-300 ${o(d.href)?"text-white font-semibold":""}`,children:d.name},d.name))}),r.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[r.jsx("button",{onClick:()=>i(!0),className:"p-2 text-white/90 hover:text-white transition-all duration-300","aria-label":"Search",children:r.jsx(zi,{className:"w-5 h-5"})}),r.jsx(Nu,{variant:"icon"}),r.jsxs("a",{href:"/PRINCE_NYAMADI-CV.pdf",download:"Prince_Nyamadi_Resume.pdf",className:"inline-flex items-center text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300",children:[r.jsx(ao,{className:"w-4 h-4 mr-1"}),"Resume"]}),r.jsx("button",{onClick:()=>l("#contact"),className:"text-white/90 hover:text-white border border-white/30 hover:border-white/50 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",children:"Contact"})]}),r.jsx("button",{onClick:()=>e(!t),className:"md:hidden mobile-touch-target mobile-interactive p-2 text-white/90 hover:text-white","aria-label":t?"Close navigation menu":"Open navigation menu","aria-expanded":t?"true":"false","aria-controls":"mobile-navigation","aria-haspopup":"true",children:r.jsx(Zm,{className:"w-6 h-6"})})]}),r.jsx(Wp,{isOpen:t,onClose:()=>e(!1),navigationItems:ic,onNavigation:l,onSearchOpen:()=>i(!0)})]}),r.jsx(qp,{isOpen:s,onClose:()=>i(!1),onNavigate:d=>{l(d),i(!1)}})]})},Gp=[{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Blog",href:"#blog"},{name:"Code",href:"#code-showcase"},{name:"Testimonials",href:"#testimonials"}],Jp=()=>{const t=new Date().getFullYear(),e=s=>{if(s.startsWith("#")){const i=document.querySelector(s);i&&i.scrollIntoView({behavior:"smooth"})}};return r.jsx("footer",{className:"relative bg-black/20 border-t border-white/20 backdrop-blur-sm",role:"contentinfo","aria-label":"Site footer",id:"footer",children:r.jsxs("div",{className:"mobile-container py-12",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[r.jsxs("div",{className:"md:col-span-2",children:[r.jsxs(Zr,{to:"/",className:"flex items-center space-x-2 text-white hover:opacity-80 transition-all duration-300 mb-4",children:[r.jsx(tn,{className:"w-6 h-6"}),r.jsx("span",{className:"font-semibold",children:"Prince Nyamadi"})]}),r.jsx("p",{className:"text-white/80 max-w-md leading-relaxed",children:"Fullstack Developer crafting exceptional digital experiences. Passionate about building scalable applications with modern technologies."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-white mb-4",children:"Navigation"}),r.jsx("nav",{"aria-label":"Footer navigation",children:r.jsx("ul",{className:"space-y-2",children:Gp.map(s=>r.jsx("li",{children:r.jsx("button",{onClick:()=>e(s.href),className:"text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1 text-left",children:s.name})},s.name))})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-semibold text-white mb-4",children:"Connect"}),r.jsxs("div",{className:"flex space-x-3","aria-label":"Social media links",children:[r.jsx("a",{href:"https://github.com/princenyamadi",target:"_blank",rel:"noopener noreferrer",className:"text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110","aria-label":"GitHub",children:r.jsx(Yd,{className:"w-5 h-5"})}),r.jsx("a",{href:"https://linkedin.com/in/princenyamadi",target:"_blank",rel:"noopener noreferrer",className:"text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110","aria-label":"LinkedIn",children:r.jsx(Xd,{className:"w-5 h-5"})}),r.jsx("a",{href:"https://twitter.com/princenyamadi",target:"_blank",rel:"noopener noreferrer",className:"text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110","aria-label":"Twitter",children:r.jsx(ef,{className:"w-5 h-5"})}),r.jsx("a",{href:"mailto:prince@princenyamadi.dev",className:"text-white/80 hover:text-white transition-all duration-300 hover:transform hover:scale-110","aria-label":"Email",children:r.jsx(so,{className:"w-5 h-5"})})]}),r.jsx("div",{className:"mt-6",children:r.jsx("a",{href:"/PRINCE_NYAMADI-CV.pdf",download:"Prince_Nyamadi_Resume.pdf",className:"inline-flex items-center text-white/80 hover:text-white border border-white/30 hover:border-white/50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",children:"Resume"})})]})]}),r.jsx("div",{className:"mt-12 pt-8 border-t border-white/20",children:r.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[r.jsxs("p",{className:"text-white/70 text-sm",children:["© ",t," Prince Nyamadi. All rights reserved."]}),r.jsx("div",{className:"flex items-center space-x-2 text-white/70 text-sm mt-2 md:mt-0",children:r.jsx("span",{children:"Built with React, TypeScript & lots of ☕"})})]})})]})})},Qp=({children:t})=>{const e=zd(),{announceMessage:s,announcePageChanges:i,reducedMotion:n,highContrast:o}=ho();return M.useEffect(()=>{if(i){const l=document.title;s(`Navigated to ${l}`,"polite")}},[e.pathname,s,i]),r.jsxs("div",{className:`
        min-h-screen flex flex-col bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900
        ${n?"reduce-motion":""}
        ${o?"high-contrast":""}
      `,children:[r.jsx(Kp,{}),r.jsx("main",{id:"main-content",className:"flex-1",role:"main","aria-label":"Main content",tabIndex:-1,children:t}),r.jsx(Jp,{}),r.jsx("div",{id:"live-region",className:"sr-only","aria-live":"polite","aria-atomic":"true",role:"status"}),r.jsx("div",{id:"alert-region",className:"sr-only","aria-live":"assertive","aria-atomic":"true",role:"alert"})]})},Yp=[{href:"#main-content",label:"Skip to main content"},{href:"#primary-navigation",label:"Skip to navigation"},{href:"#footer",label:"Skip to footer"}],Xp=({links:t=Yp})=>r.jsx("div",{className:"skip-links",children:t.map((e,s)=>r.jsx("a",{href:e.href,className:"skip-link",onFocus:()=>{const i=document.querySelector(e.href);i&&i.scrollIntoView({behavior:"smooth",block:"start"})},children:e.label},s))}),Zp=(t={})=>{const e=M.useRef(null),s=M.useRef(null),i=["button:not([disabled])","[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])",'[tabindex]:not([tabindex="-1"])',"[contenteditable]"].join(", "),n=M.useCallback(m=>Array.from(m.querySelectorAll(i)).filter(y=>y instanceof HTMLElement&&!y.hasAttribute("disabled")&&y.offsetWidth>0&&y.offsetHeight>0&&getComputedStyle(y).visibility!=="hidden"),[]),o=M.useCallback(()=>{if(!e.current)return!1;const m=n(e.current);return m.length>0?(m[0].focus(),!0):!1},[n]),l=M.useCallback(()=>{if(!e.current)return!1;const m=n(e.current);return m.length>0?(m[m.length-1].focus(),!0):!1},[n]),d=M.useCallback(m=>{if(!t.trapFocus||!e.current||m.key!=="Tab")return;const y=n(e.current);if(y.length===0)return;const g=y[0],T=y[y.length-1],x=document.activeElement;m.shiftKey?x===g&&(m.preventDefault(),T.focus()):x===T&&(m.preventDefault(),g.focus())},[t.trapFocus,n]),h=M.useCallback(()=>{s.current=document.activeElement},[]),f=M.useCallback(()=>{s.current&&typeof s.current.focus=="function"&&(s.current.focus(),s.current=null)},[]);return M.useEffect(()=>(t.autoFocus&&e.current&&(h(),o()),t.trapFocus&&document.addEventListener("keydown",d),()=>{t.trapFocus&&document.removeEventListener("keydown",d),t.restoreFocus&&f()}),[t.autoFocus,t.trapFocus,t.restoreFocus,o,d,h,f]),{containerRef:e,focusFirst:o,focusLast:l,storeFocus:h,restoreFocus:f,getFocusableElements:n}},eg=({isOpen:t,onClose:e})=>{const{reducedMotion:s,highContrast:i,focusVisible:n,announcements:o,keyboardNavigation:l,screenReaderActive:d,toggleReducedMotion:h,toggleHighContrast:f,toggleFocusVisible:m,toggleAnnouncements:y,toggleKeyboardNavigation:g,announceMessage:T}=ho(),{containerRef:x}=Zp({autoFocus:t,trapFocus:t,restoreFocus:!0}),j=()=>{T("Accessibility panel closed"),e()},S=(z,F,H)=>{z(),T(`${F} ${H?"enabled":"disabled"}`)};return t?r.jsx(De,{children:r.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute inset-0 bg-black/50 backdrop-blur-sm",onClick:j}),r.jsxs(C.div,{ref:x,initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},className:"relative w-full max-w-md bg-background border border-border rounded-lg shadow-xl mx-4",role:"dialog","aria-labelledby":"accessibility-panel-title","aria-describedby":"accessibility-panel-description",children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border",children:[r.jsxs("div",{children:[r.jsxs("h2",{id:"accessibility-panel-title",className:"text-lg font-semibold text-foreground",children:[r.jsx(Zd,{className:"inline-block w-5 h-5 mr-2","aria-hidden":"true"}),"Accessibility Settings"]}),r.jsx("p",{id:"accessibility-panel-description",className:"text-sm text-muted-foreground mt-1",children:"Customize your experience for better accessibility"})]}),r.jsx("button",{onClick:j,className:"p-2 rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary","aria-label":"Close accessibility panel",children:r.jsx(no,{className:"w-4 h-4"})})]}),r.jsxs("div",{className:"p-6 space-y-6",children:[r.jsx(Li,{icon:s?tf:lr,label:"Reduce Motion",description:"Minimize animations and transitions",checked:s,onChange:()=>S(h,"Reduced motion",!s),id:"reduced-motion"}),r.jsx(Li,{icon:sf,label:"High Contrast",description:"Increase contrast for better visibility",checked:i,onChange:()=>S(f,"High contrast",!i),id:"high-contrast"}),r.jsx(Li,{icon:rf,label:"Enhanced Focus Indicators",description:"Show prominent focus outlines",checked:n,onChange:()=>S(m,"Focus indicators",!n),id:"focus-visible"}),r.jsx(Li,{icon:o?$l:nf,label:"Screen Reader Announcements",description:"Announce changes and updates",checked:o,onChange:()=>S(y,"Announcements",!o),id:"announcements"}),r.jsx(Li,{icon:af,label:"Enhanced Keyboard Navigation",description:"Improved keyboard accessibility",checked:l,onChange:()=>S(g,"Keyboard navigation",!l),id:"keyboard-navigation"}),d&&r.jsx("div",{className:"p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800",children:r.jsxs("div",{className:"flex items-center",children:[r.jsx($l,{className:"w-5 h-5 text-blue-600 dark:text-blue-400 mr-2"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-blue-900 dark:text-blue-100",children:"Screen Reader Detected"}),r.jsx("p",{className:"text-xs text-blue-700 dark:text-blue-200 mt-1",children:"Optimized experience is active"})]})]})})]}),r.jsx("div",{className:"px-6 py-4 bg-muted/50 border-t border-border rounded-b-lg",children:r.jsx("p",{className:"text-xs text-muted-foreground",children:"Settings are automatically saved and will persist across sessions."})})]})]})}):null},Li=({icon:t,label:e,description:s,checked:i,onChange:n,id:o})=>r.jsxs("div",{className:"flex items-start space-x-3",children:[r.jsx("div",{className:"flex-shrink-0 mt-1",children:r.jsx(t,{className:"w-5 h-5 text-muted-foreground","aria-hidden":"true"})}),r.jsxs("div",{className:"flex-1 min-w-0",children:[r.jsx("label",{htmlFor:o,className:"block text-sm font-medium text-foreground cursor-pointer",children:e}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:s})]}),r.jsx("div",{className:"flex-shrink-0",children:r.jsxs("button",{id:o,role:"switch","aria-checked":i,"aria-describedby":`${o}-description`,onClick:n,className:`
            relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
            transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            ${i?"bg-primary":"bg-muted-foreground/20"}
          `,children:[r.jsx("span",{className:"sr-only",children:e}),r.jsx("span",{"aria-hidden":"true",className:`
              pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
              transition duration-200 ease-in-out
              ${i?"translate-x-5":"translate-x-0"}
            `,children:i&&r.jsx(Gd,{className:"w-3 h-3 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"})})]})})]}),tg=()=>{const[t,e]=M.useState(!1),{announceMessage:s}=ho(),i=()=>{const n=!t;e(n),s(n?"Accessibility panel opened":"Accessibility panel closed")};return r.jsxs(r.Fragment,{children:[r.jsx("button",{onClick:i,className:`
          fixed bottom-4 right-4 z-40 p-3 bg-primary text-primary-foreground rounded-full 
          shadow-lg hover:shadow-xl transition-all duration-200 
          focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          hover:scale-105 active:scale-95
        `,"aria-label":"Open accessibility settings",title:"Accessibility Settings",children:r.jsx(Zd,{className:"w-5 h-5"})}),r.jsx(eg,{isOpen:t,onClose:()=>e(!1)})]})},sg=()=>{};var rc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=function(t){const e=[];let s=0;for(let i=0;i<t.length;i++){let n=t.charCodeAt(i);n<128?e[s++]=n:n<2048?(e[s++]=n>>6|192,e[s++]=n&63|128):(n&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(n=65536+((n&1023)<<10)+(t.charCodeAt(++i)&1023),e[s++]=n>>18|240,e[s++]=n>>12&63|128,e[s++]=n>>6&63|128,e[s++]=n&63|128):(e[s++]=n>>12|224,e[s++]=n>>6&63|128,e[s++]=n&63|128)}return e},ig=function(t){const e=[];let s=0,i=0;for(;s<t.length;){const n=t[s++];if(n<128)e[i++]=String.fromCharCode(n);else if(n>191&&n<224){const o=t[s++];e[i++]=String.fromCharCode((n&31)<<6|o&63)}else if(n>239&&n<365){const o=t[s++],l=t[s++],d=t[s++],h=((n&7)<<18|(o&63)<<12|(l&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(h>>10)),e[i++]=String.fromCharCode(56320+(h&1023))}else{const o=t[s++],l=t[s++];e[i++]=String.fromCharCode((n&15)<<12|(o&63)<<6|l&63)}}return e.join("")},ku={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let n=0;n<t.length;n+=3){const o=t[n],l=n+1<t.length,d=l?t[n+1]:0,h=n+2<t.length,f=h?t[n+2]:0,m=o>>2,y=(o&3)<<4|d>>4;let g=(d&15)<<2|f>>6,T=f&63;h||(T=64,l||(g=64)),i.push(s[m],s[y],s[g],s[T])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ig(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let n=0;n<t.length;){const o=s[t.charAt(n++)],d=n<t.length?s[t.charAt(n)]:0;++n;const f=n<t.length?s[t.charAt(n)]:64;++n;const y=n<t.length?s[t.charAt(n)]:64;if(++n,o==null||d==null||f==null||y==null)throw new rg;const g=o<<2|d>>4;if(i.push(g),f!==64){const T=d<<4&240|f>>2;if(i.push(T),y!==64){const x=f<<6&192|y;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(t){const e=Tu(t);return ku.encodeByteArray(e,!0)},rn=function(t){return ng(t).replace(/\./g,"")},Iu=function(t){try{return ku.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=()=>ag().__FIREBASE_DEFAULTS__,lg=()=>{if(typeof process>"u"||typeof rc>"u")return;const t=rc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Iu(t[1]);return e&&JSON.parse(e)},mo=()=>{try{return sg()||og()||lg()||cg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eu=t=>{var e,s;return(s=(e=mo())===null||e===void 0?void 0:e.emulatorHosts)===null||s===void 0?void 0:s[t]},fo=t=>{const e=Eu(t);if(!e)return;const s=e.lastIndexOf(":");if(s<=0||s+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(s+1),10);return e[0]==="["?[e.substring(1,s-1),i]:[e.substring(0,s),i]},Su=()=>{var t;return(t=mo())===null||t===void 0?void 0:t.config},Au=t=>{var e;return(e=mo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,i)=>{s?this.reject(s):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){return t.endsWith(".cloudworkstations.dev")}async function An(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},i=e||"demo-project",n=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rn(JSON.stringify(s)),rn(JSON.stringify(l)),""].join(".")}const qi={};function ug(){const t={prod:[],emulator:[]};for(const e of Object.keys(qi))qi[e]?t.emulator.push(e):t.prod.push(e);return t}function hg(t){let e=document.getElementById(t),s=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),s=!0),{created:s,element:e}}let nc=!1;function Cn(t,e){if(typeof window>"u"||typeof document>"u"||!yi(window.location.host)||qi[t]===e||qi[t]||nc)return;qi[t]=e;function s(g){return`__firebase__banner__${g}`}const i="__firebase__banner",o=ug().prod.length>0;function l(){const g=document.getElementById(i);g&&g.remove()}function d(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function h(g,T){g.setAttribute("width","24"),g.setAttribute("id",T),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function f(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{nc=!0,l()},g}function m(g,T){g.setAttribute("id",T),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function y(){const g=hg(i),T=s("text"),x=document.getElementById(T)||document.createElement("span"),j=s("learnmore"),S=document.getElementById(j)||document.createElement("a"),z=s("preprendIcon"),F=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const H=g.element;d(H),m(S,j);const W=f();h(F,z),H.append(F,x,S,W),document.body.appendChild(H)}o?(x.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function fg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gg(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ru(){try{return typeof indexedDB=="object"}catch{return!1}}function Ou(){return new Promise((t,e)=>{try{let s=!0;const i="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(i);n.onsuccess=()=>{n.result.close(),s||self.indexedDB.deleteDatabase(i),t(!0)},n.onupgradeneeded=()=>{s=!1},n.onerror=()=>{var o;e(((o=n.error)===null||o===void 0?void 0:o.message)||"")}}catch(s){e(s)}})}function yg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="FirebaseError";class Qe extends Error{constructor(e,s,i){super(s),this.code=e,this.customData=i,this.name=xg,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,s,i){this.service=e,this.serviceName=s,this.errors=i}create(e,...s){const i=s[0]||{},n=`${this.service}/${e}`,o=this.errors[e],l=o?bg(o,i):"Error",d=`${this.serviceName}: ${l} (${n}).`;return new Qe(n,d,i)}}function bg(t,e){return t.replace(vg,(s,i)=>{const n=e[i];return n!=null?String(n):`<${i}?>`})}const vg=/\{\$([^}]+)}/g;function wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ls(t,e){if(t===e)return!0;const s=Object.keys(t),i=Object.keys(e);for(const n of s){if(!i.includes(n))return!1;const o=t[n],l=e[n];if(ac(o)&&ac(l)){if(!ls(o,l))return!1}else if(o!==l)return!1}for(const n of i)if(!s.includes(n))return!1;return!0}function ac(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t){const e=[];for(const[s,i]of Object.entries(t))Array.isArray(i)?i.forEach(n=>{e.push(encodeURIComponent(s)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(s)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function jg(t,e){const s=new _g(t,e);return s.subscribe.bind(s)}class _g{constructor(e,s){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=s,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(s=>{s.next(e)})}error(e){this.forEachObserver(s=>{s.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,s,i){let n;if(e===void 0&&s===void 0&&i===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?n=e:n={next:e,error:s,complete:i},n.next===void 0&&(n.next=ha),n.error===void 0&&(n.error=ha),n.complete===void 0&&(n.complete=ha);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let s=0;s<this.observers.length;s++)this.sendOne(s,e)}sendOne(e,s){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{s(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(t,e){if(typeof t!="object"||t===null)return!1;for(const s of e)if(s in t&&typeof t[s]=="function")return!0;return!1}function ha(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=1e3,kg=2,Ig=4*60*60*1e3,Eg=.5;function oc(t,e=Tg,s=kg){const i=e*Math.pow(s,t),n=Math.round(Eg*i*(Math.random()-.5)*2);return Math.min(Ig,i+n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class He{constructor(e,s,i){this.name=e,this.instanceFactory=s,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const i=new dg;if(this.instancesDeferred.set(s,i),this.isInitialized(s)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:s});n&&i.resolve(n)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(n)return null;throw o}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cg(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[s,i]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(s);try{const o=this.getOrInitializeService({instanceIdentifier:n});i.resolve(o)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:s});for(const[o,l]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(o);i===d&&l.resolve(n)}return n}onInit(e,s){var i;const n=this.normalizeInstanceIdentifier(s),o=(i=this.onInitCallbacks.get(n))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(n,o);const l=this.instances.get(n);return l&&e(l,n),()=>{o.delete(e)}}invokeOnInitCallbacks(e,s){const i=this.onInitCallbacks.get(s);if(i)for(const n of i)try{n(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ag(e),options:s}),this.instances.set(e,i),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ag(t){return t===gs?void 0:t}function Cg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Sg(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Rg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Og=re.INFO,Dg={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Fg=(t,e,...s)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),n=Dg[e];if(n)console[n](`[${i}]  ${t.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pn{constructor(e){this.name=e,this._logLevel=Og,this._logHandler=Fg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Mg=(t,e)=>e.some(s=>t instanceof s);let lc,cc;function Lg(){return lc||(lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ug(){return cc||(cc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Du=new WeakMap,La=new WeakMap,Fu=new WeakMap,ma=new WeakMap,po=new WeakMap;function Vg(t){const e=new Promise((s,i)=>{const n=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{s(ns(t.result)),n()},l=()=>{i(t.error),n()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(s=>{s instanceof IDBCursor&&Du.set(s,t)}).catch(()=>{}),po.set(e,t),e}function $g(t){if(La.has(t))return;const e=new Promise((s,i)=>{const n=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{s(),n()},l=()=>{i(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});La.set(t,e)}let Ua={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return La.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fu.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return ns(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bg(t){Ua=t(Ua)}function Hg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const i=t.call(fa(this),e,...s);return Fu.set(i,e.sort?e.sort():[e]),ns(i)}:Ug().includes(t)?function(...e){return t.apply(fa(this),e),ns(Du.get(this))}:function(...e){return ns(t.apply(fa(this),e))}}function zg(t){return typeof t=="function"?Hg(t):(t instanceof IDBTransaction&&$g(t),Mg(t,Lg())?new Proxy(t,Ua):t)}function ns(t){if(t instanceof IDBRequest)return Vg(t);if(ma.has(t))return ma.get(t);const e=zg(t);return e!==t&&(ma.set(t,e),po.set(e,t)),e}const fa=t=>po.get(t);function Mu(t,e,{blocked:s,upgrade:i,blocking:n,terminated:o}={}){const l=indexedDB.open(t,e),d=ns(l);return i&&l.addEventListener("upgradeneeded",h=>{i(ns(l.result),h.oldVersion,h.newVersion,ns(l.transaction),h)}),s&&l.addEventListener("blocked",h=>s(h.oldVersion,h.newVersion,h)),d.then(h=>{o&&h.addEventListener("close",()=>o()),n&&h.addEventListener("versionchange",f=>n(f.oldVersion,f.newVersion,f))}).catch(()=>{}),d}const qg=["get","getKey","getAll","getAllKeys","count"],Wg=["put","add","delete","clear"],pa=new Map;function dc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pa.get(e))return pa.get(e);const s=e.replace(/FromIndex$/,""),i=e!==s,n=Wg.includes(s);if(!(s in(i?IDBIndex:IDBObjectStore).prototype)||!(n||qg.includes(s)))return;const o=async function(l,...d){const h=this.transaction(l,n?"readwrite":"readonly");let f=h.store;return i&&(f=f.index(d.shift())),(await Promise.all([f[s](...d),n&&h.done]))[0]};return pa.set(e,o),o}Bg(t=>({...t,get:(e,s,i)=>dc(e,s)||t.get(e,s,i),has:(e,s)=>!!dc(e,s)||t.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(Gg(s)){const i=s.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(s=>s).join(" ")}}function Gg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Va="@firebase/app",uc="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Pn("@firebase/app"),Jg="@firebase/app-compat",Qg="@firebase/analytics-compat",Yg="@firebase/analytics",Xg="@firebase/app-check-compat",Zg="@firebase/app-check",e0="@firebase/auth",t0="@firebase/auth-compat",s0="@firebase/database",i0="@firebase/data-connect",r0="@firebase/database-compat",n0="@firebase/functions",a0="@firebase/functions-compat",o0="@firebase/installations",l0="@firebase/installations-compat",c0="@firebase/messaging",d0="@firebase/messaging-compat",u0="@firebase/performance",h0="@firebase/performance-compat",m0="@firebase/remote-config",f0="@firebase/remote-config-compat",p0="@firebase/storage",g0="@firebase/storage-compat",y0="@firebase/firestore",x0="@firebase/ai",b0="@firebase/firestore-compat",v0="firebase",w0="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="[DEFAULT]",j0={[Va]:"fire-core",[Jg]:"fire-core-compat",[Yg]:"fire-analytics",[Qg]:"fire-analytics-compat",[Zg]:"fire-app-check",[Xg]:"fire-app-check-compat",[e0]:"fire-auth",[t0]:"fire-auth-compat",[s0]:"fire-rtdb",[i0]:"fire-data-connect",[r0]:"fire-rtdb-compat",[n0]:"fire-fn",[a0]:"fire-fn-compat",[o0]:"fire-iid",[l0]:"fire-iid-compat",[c0]:"fire-fcm",[d0]:"fire-fcm-compat",[u0]:"fire-perf",[h0]:"fire-perf-compat",[m0]:"fire-rc",[f0]:"fire-rc-compat",[p0]:"fire-gcs",[g0]:"fire-gcs-compat",[y0]:"fire-fst",[b0]:"fire-fst-compat",[x0]:"fire-vertex","fire-js":"fire-js",[v0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map,_0=new Map,Ba=new Map;function hc(t,e){try{t.container.addComponent(e)}catch(s){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,s)}}function Je(t){const e=t.name;if(Ba.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Ba.set(e,t);for(const s of nn.values())hc(s,t);for(const s of _0.values())hc(s,t);return!0}function Vt(t,e){const s=t.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),t.container.getProvider(e)}function Ge(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},as=new Cs("app","Firebase",N0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,s,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=w0;function Lu(t,e={}){let s=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$a,automaticDataCollectionEnabled:!0},e),n=i.name;if(typeof n!="string"||!n)throw as.create("bad-app-name",{appName:String(n)});if(s||(s=Su()),!s)throw as.create("no-options");const o=nn.get(n);if(o){if(ls(s,o.options)&&ls(i,o.config))return o;throw as.create("duplicate-app",{appName:n})}const l=new Pg(n);for(const h of Ba.values())l.addComponent(h);const d=new T0(s,i,l);return nn.set(n,d),d}function dr(t=$a){const e=nn.get(t);if(!e&&t===$a&&Su())return Lu();if(!e)throw as.create("no-app",{appName:t});return e}function Ee(t,e,s){var i;let n=(i=j0[t])!==null&&i!==void 0?i:t;s&&(n+=`-${s}`);const o=n.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const d=[`Unable to register library "${n}" with version "${e}":`];o&&d.push(`library name "${n}" contains illegal characters (whitespace or "/")`),o&&l&&d.push("and"),l&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(d.join(" "));return}Je(new He(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="firebase-heartbeat-database",I0=1,tr="firebase-heartbeat-store";let ga=null;function Uu(){return ga||(ga=Mu(k0,I0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tr)}catch(s){console.warn(s)}}}}).catch(t=>{throw as.create("idb-open",{originalErrorMessage:t.message})})),ga}async function E0(t){try{const s=(await Uu()).transaction(tr),i=await s.objectStore(tr).get(Vu(t));return await s.done,i}catch(e){if(e instanceof Qe)Mt.warn(e.message);else{const s=as.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(s.message)}}}async function mc(t,e){try{const i=(await Uu()).transaction(tr,"readwrite");await i.objectStore(tr).put(e,Vu(t)),await i.done}catch(s){if(s instanceof Qe)Mt.warn(s.message);else{const i=as.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});Mt.warn(i.message)}}}function Vu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=1024,A0=30;class C0{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new R0(s),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,s;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fc();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:n}),this._heartbeatsCache.heartbeats.length>A0){const l=O0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Mt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=fc(),{heartbeatsToSend:i,unsentEntries:n}=P0(this._heartbeatsCache.heartbeats),o=rn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=s,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(s){return Mt.warn(s),""}}}function fc(){return new Date().toISOString().substring(0,10)}function P0(t,e=S0){const s=[];let i=t.slice();for(const n of t){const o=s.find(l=>l.agent===n.agent);if(o){if(o.dates.push(n.date),pc(s)>e){o.dates.pop();break}}else if(s.push({agent:n.agent,dates:[n.date]}),pc(s)>e){s.pop();break}i=i.slice(1)}return{heartbeatsToSend:s,unsentEntries:i}}class R0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ru()?Ou().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await E0(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const n=await this.read();return mc(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const n=await this.read();return mc(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function pc(t){return rn(JSON.stringify({version:2,heartbeats:t})).length}function O0(t){if(t.length===0)return-1;let e=0,s=t[0].date;for(let i=1;i<t.length;i++)t[i].date<s&&(s=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t){Je(new He("platform-logger",e=>new Kg(e),"PRIVATE")),Je(new He("heartbeat",e=>new C0(e),"PRIVATE")),Ee(Va,uc,t),Ee(Va,uc,"esm2017"),Ee("fire-js","")}D0("");var F0="firebase",M0="11.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(F0,M0,"app");const $u="@firebase/installations",go="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu=1e4,Hu=`w:${go}`,zu="FIS_v2",L0="https://firebaseinstallations.googleapis.com/v1",U0=60*60*1e3,V0="installations",$0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Es=new Cs(V0,$0,B0);function qu(t){return t instanceof Qe&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu({projectId:t}){return`${L0}/projects/${t}/installations`}function Ku(t){return{token:t.token,requestStatus:2,expiresIn:z0(t.expiresIn),creationTime:Date.now()}}async function Gu(t,e){const i=(await e.json()).error;return Es.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Ju({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function H0(t,{refreshToken:e}){const s=Ju(t);return s.append("Authorization",q0(e)),s}async function Qu(t){const e=await t();return e.status>=500&&e.status<600?t():e}function z0(t){return Number(t.replace("s","000"))}function q0(t){return`${zu} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W0({appConfig:t,heartbeatServiceProvider:e},{fid:s}){const i=Wu(t),n=Ju(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&n.append("x-firebase-client",f)}const l={fid:s,authVersion:zu,appId:t.appId,sdkVersion:Hu},d={method:"POST",headers:n,body:JSON.stringify(l)},h=await Qu(()=>fetch(i,d));if(h.ok){const f=await h.json();return{fid:f.fid||s,registrationStatus:2,refreshToken:f.refreshToken,authToken:Ku(f.authToken)}}else throw await Gu("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=/^[cdef][\w-]{21}$/,Ha="";function J0(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const s=Q0(t);return G0.test(s)?s:Ha}catch{return Ha}}function Q0(t){return K0(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map;function Zu(t,e){const s=Rn(t);eh(s,e),Y0(s,e)}function eh(t,e){const s=Xu.get(t);if(s)for(const i of s)i(e)}function Y0(t,e){const s=X0();s&&s.postMessage({key:t,fid:e}),Z0()}let ys=null;function X0(){return!ys&&"BroadcastChannel"in self&&(ys=new BroadcastChannel("[Firebase] FID Change"),ys.onmessage=t=>{eh(t.data.key,t.data.fid)}),ys}function Z0(){Xu.size===0&&ys&&(ys.close(),ys=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="firebase-installations-database",ty=1,Ss="firebase-installations-store";let ya=null;function yo(){return ya||(ya=Mu(ey,ty,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}})),ya}async function an(t,e){const s=Rn(t),n=(await yo()).transaction(Ss,"readwrite"),o=n.objectStore(Ss),l=await o.get(s);return await o.put(e,s),await n.done,(!l||l.fid!==e.fid)&&Zu(t,e.fid),e}async function th(t){const e=Rn(t),i=(await yo()).transaction(Ss,"readwrite");await i.objectStore(Ss).delete(e),await i.done}async function On(t,e){const s=Rn(t),n=(await yo()).transaction(Ss,"readwrite"),o=n.objectStore(Ss),l=await o.get(s),d=e(l);return d===void 0?await o.delete(s):await o.put(d,s),await n.done,d&&(!l||l.fid!==d.fid)&&Zu(t,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){let e;const s=await On(t.appConfig,i=>{const n=sy(i),o=iy(t,n);return e=o.registrationPromise,o.installationEntry});return s.fid===Ha?{installationEntry:await e}:{installationEntry:s,registrationPromise:e}}function sy(t){const e=t||{fid:J0(),registrationStatus:0};return sh(e)}function iy(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(Es.create("app-offline"));return{installationEntry:e,registrationPromise:n}}const s={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=ry(t,s);return{installationEntry:s,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ny(t)}:{installationEntry:e}}async function ry(t,e){try{const s=await W0(t,e);return an(t.appConfig,s)}catch(s){throw qu(s)&&s.customData.serverCode===409?await th(t.appConfig):await an(t.appConfig,{fid:e.fid,registrationStatus:0}),s}}async function ny(t){let e=await gc(t.appConfig);for(;e.registrationStatus===1;)await Yu(100),e=await gc(t.appConfig);if(e.registrationStatus===0){const{installationEntry:s,registrationPromise:i}=await xo(t);return i||s}return e}function gc(t){return On(t,e=>{if(!e)throw Es.create("installation-not-found");return sh(e)})}function sh(t){return ay(t)?{fid:t.fid,registrationStatus:0}:t}function ay(t){return t.registrationStatus===1&&t.registrationTime+Bu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy({appConfig:t,heartbeatServiceProvider:e},s){const i=ly(t,s),n=H0(t,s),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&n.append("x-firebase-client",f)}const l={installation:{sdkVersion:Hu,appId:t.appId}},d={method:"POST",headers:n,body:JSON.stringify(l)},h=await Qu(()=>fetch(i,d));if(h.ok){const f=await h.json();return Ku(f)}else throw await Gu("Generate Auth Token",h)}function ly(t,{fid:e}){return`${Wu(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t,e=!1){let s;const i=await On(t.appConfig,o=>{if(!ih(o))throw Es.create("not-registered");const l=o.authToken;if(!e&&uy(l))return o;if(l.requestStatus===1)return s=cy(t,e),o;{if(!navigator.onLine)throw Es.create("app-offline");const d=my(o);return s=dy(t,d),d}});return s?await s:i.authToken}async function cy(t,e){let s=await yc(t.appConfig);for(;s.authToken.requestStatus===1;)await Yu(100),s=await yc(t.appConfig);const i=s.authToken;return i.requestStatus===0?bo(t,e):i}function yc(t){return On(t,e=>{if(!ih(e))throw Es.create("not-registered");const s=e.authToken;return fy(s)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function dy(t,e){try{const s=await oy(t,e),i=Object.assign(Object.assign({},e),{authToken:s});return await an(t.appConfig,i),s}catch(s){if(qu(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await th(t.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await an(t.appConfig,i)}throw s}}function ih(t){return t!==void 0&&t.registrationStatus===2}function uy(t){return t.requestStatus===2&&!hy(t)}function hy(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+U0}function my(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fy(t){return t.requestStatus===1&&t.requestTime+Bu<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t){const e=t,{installationEntry:s,registrationPromise:i}=await xo(e);return i?i.catch(console.error):bo(e).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(t,e=!1){const s=t;return await yy(s),(await bo(s,e)).token}async function yy(t){const{registrationPromise:e}=await xo(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){if(!t||!t.options)throw xa("App Configuration");if(!t.name)throw xa("App Name");const e=["projectId","apiKey","appId"];for(const s of e)if(!t.options[s])throw xa(s);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function xa(t){return Es.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="installations",by="installations-internal",vy=t=>{const e=t.getProvider("app").getImmediate(),s=xy(e),i=Vt(e,"heartbeat");return{app:e,appConfig:s,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},wy=t=>{const e=t.getProvider("app").getImmediate(),s=Vt(e,rh).getImmediate();return{getId:()=>py(s),getToken:n=>gy(s,n)}};function jy(){Je(new He(rh,vy,"PUBLIC")),Je(new He(by,wy,"PRIVATE"))}jy();Ee($u,go);Ee($u,go,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="analytics",_y="firebase_id",Ny="origin",Ty=60*1e3,ky="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vo="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Pn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Be=new Cs("analytics","Analytics",Iy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){if(!t.startsWith(vo)){const e=Be.create("invalid-gtag-resource",{gtagURL:t});return $e.warn(e.message),""}return t}function nh(t){return Promise.all(t.map(e=>e.catch(s=>s)))}function Sy(t,e){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(t,e)),s}function Ay(t,e){const s=Sy("firebase-js-sdk-policy",{createScriptURL:Ey}),i=document.createElement("script"),n=`${vo}?l=${t}&id=${e}`;i.src=s?s==null?void 0:s.createScriptURL(n):n,i.async=!0,document.head.appendChild(i)}function Cy(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Py(t,e,s,i,n,o){const l=i[n];try{if(l)await e[l];else{const h=(await nh(s)).find(f=>f.measurementId===n);h&&await e[h.appId]}}catch(d){$e.error(d)}t("config",n,o)}async function Ry(t,e,s,i,n){try{let o=[];if(n&&n.send_to){let l=n.send_to;Array.isArray(l)||(l=[l]);const d=await nh(s);for(const h of l){const f=d.find(y=>y.measurementId===h),m=f&&e[f.appId];if(m)o.push(m);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",i,n||{})}catch(o){$e.error(o)}}function Oy(t,e,s,i){async function n(o,...l){try{if(o==="event"){const[d,h]=l;await Ry(t,e,s,d,h)}else if(o==="config"){const[d,h]=l;await Py(t,e,s,i,d,h)}else if(o==="consent"){const[d,h]=l;t("consent",d,h)}else if(o==="get"){const[d,h,f]=l;t("get",d,h,f)}else if(o==="set"){const[d]=l;t("set",d)}else t(o,...l)}catch(d){$e.error(d)}}return n}function Dy(t,e,s,i,n){let o=function(...l){window[i].push(arguments)};return window[n]&&typeof window[n]=="function"&&(o=window[n]),window[n]=Oy(o,t,e,s),{gtagCore:o,wrappedGtag:window[n]}}function Fy(t){const e=window.document.getElementsByTagName("script");for(const s of Object.values(e))if(s.src&&s.src.includes(vo)&&s.src.includes(t))return s;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=30,Ly=1e3;class Uy{constructor(e={},s=Ly){this.throttleMetadata=e,this.intervalMillis=s}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,s){this.throttleMetadata[e]=s}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ah=new Uy;function Vy(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function $y(t){var e;const{appId:s,apiKey:i}=t,n={method:"GET",headers:Vy(i)},o=ky.replace("{app-id}",s),l=await fetch(o,n);if(l.status!==200&&l.status!==304){let d="";try{const h=await l.json();!((e=h.error)===null||e===void 0)&&e.message&&(d=h.error.message)}catch{}throw Be.create("config-fetch-failed",{httpStatus:l.status,responseMessage:d})}return l.json()}async function By(t,e=ah,s){const{appId:i,apiKey:n,measurementId:o}=t.options;if(!i)throw Be.create("no-app-id");if(!n){if(o)return{measurementId:o,appId:i};throw Be.create("no-api-key")}const l=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new qy;return setTimeout(async()=>{d.abort()},Ty),oh({appId:i,apiKey:n,measurementId:o},l,d,e)}async function oh(t,{throttleEndTimeMillis:e,backoffCount:s},i,n=ah){var o;const{appId:l,measurementId:d}=t;try{await Hy(i,e)}catch(h){if(d)return $e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:l,measurementId:d};throw h}try{const h=await $y(t);return n.deleteThrottleMetadata(l),h}catch(h){const f=h;if(!zy(f)){if(n.deleteThrottleMetadata(l),d)return $e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:d};throw h}const m=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?oc(s,n.intervalMillis,My):oc(s,n.intervalMillis),y={throttleEndTimeMillis:Date.now()+m,backoffCount:s+1};return n.setThrottleMetadata(l,y),$e.debug(`Calling attemptFetch again in ${m} millis`),oh(t,y,i,n)}}function Hy(t,e){return new Promise((s,i)=>{const n=Math.max(e-Date.now(),0),o=setTimeout(s,n);t.addEventListener(()=>{clearTimeout(o),i(Be.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function zy(t){if(!(t instanceof Qe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class qy{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Wy(t,e,s,i,n){if(n&&n.global){t("event",s,i);return}else{const o=await e,l=Object.assign(Object.assign({},i),{send_to:o});t("event",s,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ky(){if(Ru())try{await Ou()}catch(t){return $e.warn(Be.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return $e.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Gy(t,e,s,i,n,o,l){var d;const h=By(t);h.then(T=>{s[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&$e.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>$e.error(T)),e.push(h);const f=Ky().then(T=>{if(T)return i.getId()}),[m,y]=await Promise.all([h,f]);Fy(o)||Ay(o,m.measurementId),n("js",new Date);const g=(d=l==null?void 0:l.config)!==null&&d!==void 0?d:{};return g[Ny]="firebase",g.update=!0,y!=null&&(g[_y]=y),n("config",m.measurementId,g),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.app=e}_delete(){return delete Wi[this.app.options.appId],Promise.resolve()}}let Wi={},xc=[];const bc={};let ba="dataLayer",Qy="gtag",vc,lh,wc=!1;function Yy(){const t=[];if(Pu()&&t.push("This is a browser extension environment."),yg()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,n)=>`(${n+1}) ${i}`).join(" "),s=Be.create("invalid-analytics-context",{errorInfo:e});$e.warn(s.message)}}function Xy(t,e,s){Yy();const i=t.options.appId;if(!i)throw Be.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Be.create("no-api-key");if(Wi[i]!=null)throw Be.create("already-exists",{id:i});if(!wc){Cy(ba);const{wrappedGtag:o,gtagCore:l}=Dy(Wi,xc,bc,ba,Qy);lh=o,vc=l,wc=!0}return Wi[i]=Gy(t,xc,bc,e,vc,ba,s),new Jy(t)}function Zy(t=dr()){t=Ye(t);const e=Vt(t,on);return e.isInitialized()?e.getImmediate():ex(t)}function ex(t,e={}){const s=Vt(t,on);if(s.isInitialized()){const n=s.getImmediate();if(ls(e,s.getOptions()))return n;throw Be.create("already-initialized")}return s.initialize({options:e})}function tx(t,e,s,i){t=Ye(t),Wy(lh,Wi[t.app.options.appId],e,s,i).catch(n=>$e.error(n))}const jc="@firebase/analytics",_c="0.10.16";function sx(){Je(new He(on,(e,{options:s})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return Xy(i,n,s)},"PUBLIC")),Je(new He("analytics-internal",t,"PRIVATE")),Ee(jc,_c),Ee(jc,_c,"esm2017");function t(e){try{const s=e.getProvider(on).getImmediate();return{logEvent:(i,n,o)=>tx(s,i,n,o)}}catch(s){throw Be.create("interop-component-reg-failed",{reason:s})}}}sx();var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wo;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,w){function b(){}b.prototype=w.prototype,E.D=w.prototype,E.prototype=new b,E.prototype.constructor=E,E.C=function(k,N,I){for(var v=Array(arguments.length-2),X=2;X<arguments.length;X++)v[X-2]=arguments[X];return w.prototype[N].apply(k,v)}}function s(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,s),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function n(E,w,b){b||(b=0);var k=Array(16);if(typeof w=="string")for(var N=0;16>N;++N)k[N]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(N=0;16>N;++N)k[N]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=E.g[0],b=E.g[1],N=E.g[2];var I=E.g[3],v=w+(I^b&(N^I))+k[0]+3614090360&4294967295;w=b+(v<<7&4294967295|v>>>25),v=I+(N^w&(b^N))+k[1]+3905402710&4294967295,I=w+(v<<12&4294967295|v>>>20),v=N+(b^I&(w^b))+k[2]+606105819&4294967295,N=I+(v<<17&4294967295|v>>>15),v=b+(w^N&(I^w))+k[3]+3250441966&4294967295,b=N+(v<<22&4294967295|v>>>10),v=w+(I^b&(N^I))+k[4]+4118548399&4294967295,w=b+(v<<7&4294967295|v>>>25),v=I+(N^w&(b^N))+k[5]+1200080426&4294967295,I=w+(v<<12&4294967295|v>>>20),v=N+(b^I&(w^b))+k[6]+2821735955&4294967295,N=I+(v<<17&4294967295|v>>>15),v=b+(w^N&(I^w))+k[7]+4249261313&4294967295,b=N+(v<<22&4294967295|v>>>10),v=w+(I^b&(N^I))+k[8]+1770035416&4294967295,w=b+(v<<7&4294967295|v>>>25),v=I+(N^w&(b^N))+k[9]+2336552879&4294967295,I=w+(v<<12&4294967295|v>>>20),v=N+(b^I&(w^b))+k[10]+4294925233&4294967295,N=I+(v<<17&4294967295|v>>>15),v=b+(w^N&(I^w))+k[11]+2304563134&4294967295,b=N+(v<<22&4294967295|v>>>10),v=w+(I^b&(N^I))+k[12]+1804603682&4294967295,w=b+(v<<7&4294967295|v>>>25),v=I+(N^w&(b^N))+k[13]+4254626195&4294967295,I=w+(v<<12&4294967295|v>>>20),v=N+(b^I&(w^b))+k[14]+2792965006&4294967295,N=I+(v<<17&4294967295|v>>>15),v=b+(w^N&(I^w))+k[15]+1236535329&4294967295,b=N+(v<<22&4294967295|v>>>10),v=w+(N^I&(b^N))+k[1]+4129170786&4294967295,w=b+(v<<5&4294967295|v>>>27),v=I+(b^N&(w^b))+k[6]+3225465664&4294967295,I=w+(v<<9&4294967295|v>>>23),v=N+(w^b&(I^w))+k[11]+643717713&4294967295,N=I+(v<<14&4294967295|v>>>18),v=b+(I^w&(N^I))+k[0]+3921069994&4294967295,b=N+(v<<20&4294967295|v>>>12),v=w+(N^I&(b^N))+k[5]+3593408605&4294967295,w=b+(v<<5&4294967295|v>>>27),v=I+(b^N&(w^b))+k[10]+38016083&4294967295,I=w+(v<<9&4294967295|v>>>23),v=N+(w^b&(I^w))+k[15]+3634488961&4294967295,N=I+(v<<14&4294967295|v>>>18),v=b+(I^w&(N^I))+k[4]+3889429448&4294967295,b=N+(v<<20&4294967295|v>>>12),v=w+(N^I&(b^N))+k[9]+568446438&4294967295,w=b+(v<<5&4294967295|v>>>27),v=I+(b^N&(w^b))+k[14]+3275163606&4294967295,I=w+(v<<9&4294967295|v>>>23),v=N+(w^b&(I^w))+k[3]+4107603335&4294967295,N=I+(v<<14&4294967295|v>>>18),v=b+(I^w&(N^I))+k[8]+1163531501&4294967295,b=N+(v<<20&4294967295|v>>>12),v=w+(N^I&(b^N))+k[13]+2850285829&4294967295,w=b+(v<<5&4294967295|v>>>27),v=I+(b^N&(w^b))+k[2]+4243563512&4294967295,I=w+(v<<9&4294967295|v>>>23),v=N+(w^b&(I^w))+k[7]+1735328473&4294967295,N=I+(v<<14&4294967295|v>>>18),v=b+(I^w&(N^I))+k[12]+2368359562&4294967295,b=N+(v<<20&4294967295|v>>>12),v=w+(b^N^I)+k[5]+4294588738&4294967295,w=b+(v<<4&4294967295|v>>>28),v=I+(w^b^N)+k[8]+2272392833&4294967295,I=w+(v<<11&4294967295|v>>>21),v=N+(I^w^b)+k[11]+1839030562&4294967295,N=I+(v<<16&4294967295|v>>>16),v=b+(N^I^w)+k[14]+4259657740&4294967295,b=N+(v<<23&4294967295|v>>>9),v=w+(b^N^I)+k[1]+2763975236&4294967295,w=b+(v<<4&4294967295|v>>>28),v=I+(w^b^N)+k[4]+1272893353&4294967295,I=w+(v<<11&4294967295|v>>>21),v=N+(I^w^b)+k[7]+4139469664&4294967295,N=I+(v<<16&4294967295|v>>>16),v=b+(N^I^w)+k[10]+3200236656&4294967295,b=N+(v<<23&4294967295|v>>>9),v=w+(b^N^I)+k[13]+681279174&4294967295,w=b+(v<<4&4294967295|v>>>28),v=I+(w^b^N)+k[0]+3936430074&4294967295,I=w+(v<<11&4294967295|v>>>21),v=N+(I^w^b)+k[3]+3572445317&4294967295,N=I+(v<<16&4294967295|v>>>16),v=b+(N^I^w)+k[6]+76029189&4294967295,b=N+(v<<23&4294967295|v>>>9),v=w+(b^N^I)+k[9]+3654602809&4294967295,w=b+(v<<4&4294967295|v>>>28),v=I+(w^b^N)+k[12]+3873151461&4294967295,I=w+(v<<11&4294967295|v>>>21),v=N+(I^w^b)+k[15]+530742520&4294967295,N=I+(v<<16&4294967295|v>>>16),v=b+(N^I^w)+k[2]+3299628645&4294967295,b=N+(v<<23&4294967295|v>>>9),v=w+(N^(b|~I))+k[0]+4096336452&4294967295,w=b+(v<<6&4294967295|v>>>26),v=I+(b^(w|~N))+k[7]+1126891415&4294967295,I=w+(v<<10&4294967295|v>>>22),v=N+(w^(I|~b))+k[14]+2878612391&4294967295,N=I+(v<<15&4294967295|v>>>17),v=b+(I^(N|~w))+k[5]+4237533241&4294967295,b=N+(v<<21&4294967295|v>>>11),v=w+(N^(b|~I))+k[12]+1700485571&4294967295,w=b+(v<<6&4294967295|v>>>26),v=I+(b^(w|~N))+k[3]+2399980690&4294967295,I=w+(v<<10&4294967295|v>>>22),v=N+(w^(I|~b))+k[10]+4293915773&4294967295,N=I+(v<<15&4294967295|v>>>17),v=b+(I^(N|~w))+k[1]+2240044497&4294967295,b=N+(v<<21&4294967295|v>>>11),v=w+(N^(b|~I))+k[8]+1873313359&4294967295,w=b+(v<<6&4294967295|v>>>26),v=I+(b^(w|~N))+k[15]+4264355552&4294967295,I=w+(v<<10&4294967295|v>>>22),v=N+(w^(I|~b))+k[6]+2734768916&4294967295,N=I+(v<<15&4294967295|v>>>17),v=b+(I^(N|~w))+k[13]+1309151649&4294967295,b=N+(v<<21&4294967295|v>>>11),v=w+(N^(b|~I))+k[4]+4149444226&4294967295,w=b+(v<<6&4294967295|v>>>26),v=I+(b^(w|~N))+k[11]+3174756917&4294967295,I=w+(v<<10&4294967295|v>>>22),v=N+(w^(I|~b))+k[2]+718787259&4294967295,N=I+(v<<15&4294967295|v>>>17),v=b+(I^(N|~w))+k[9]+3951481745&4294967295,E.g[0]=E.g[0]+w&4294967295,E.g[1]=E.g[1]+(N+(v<<21&4294967295|v>>>11))&4294967295,E.g[2]=E.g[2]+N&4294967295,E.g[3]=E.g[3]+I&4294967295}i.prototype.u=function(E,w){w===void 0&&(w=E.length);for(var b=w-this.blockSize,k=this.B,N=this.h,I=0;I<w;){if(N==0)for(;I<=b;)n(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<w;)if(k[N++]=E.charCodeAt(I++),N==this.blockSize){n(this,k),N=0;break}}else for(;I<w;)if(k[N++]=E[I++],N==this.blockSize){n(this,k),N=0;break}}this.h=N,this.o+=w},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var w=1;w<E.length-8;++w)E[w]=0;var b=8*this.o;for(w=E.length-8;w<E.length;++w)E[w]=b&255,b/=256;for(this.u(E),E=Array(16),w=b=0;4>w;++w)for(var k=0;32>k;k+=8)E[b++]=this.g[w]>>>k&255;return E};function o(E,w){var b=d;return Object.prototype.hasOwnProperty.call(b,E)?b[E]:b[E]=w(E)}function l(E,w){this.h=w;for(var b=[],k=!0,N=E.length-1;0<=N;N--){var I=E[N]|0;k&&I==w||(b[N]=I,k=!1)}this.g=b}var d={};function h(E){return-128<=E&&128>E?o(E,function(w){return new l([w|0],0>w?-1:0)}):new l([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return S(f(-E));for(var w=[],b=1,k=0;E>=b;k++)w[k]=E/b|0,b*=4294967296;return new l(w,0)}function m(E,w){if(E.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(E.charAt(0)=="-")return S(m(E.substring(1),w));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=f(Math.pow(w,8)),k=y,N=0;N<E.length;N+=8){var I=Math.min(8,E.length-N),v=parseInt(E.substring(N,N+I),w);8>I?(I=f(Math.pow(w,I)),k=k.j(I).add(f(v))):(k=k.j(b),k=k.add(f(v)))}return k}var y=h(0),g=h(1),T=h(16777216);t=l.prototype,t.m=function(){if(j(this))return-S(this).m();for(var E=0,w=1,b=0;b<this.g.length;b++){var k=this.i(b);E+=(0<=k?k:4294967296+k)*w,w*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(j(this))return"-"+S(this).toString(E);for(var w=f(Math.pow(E,6)),b=this,k="";;){var N=W(b,w).g;b=z(b,N.j(w));var I=((0<b.g.length?b.g[0]:b.h)>>>0).toString(E);if(b=N,x(b))return I+k;for(;6>I.length;)I="0"+I;k=I+k}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var w=0;w<E.g.length;w++)if(E.g[w]!=0)return!1;return!0}function j(E){return E.h==-1}t.l=function(E){return E=z(this,E),j(E)?-1:x(E)?0:1};function S(E){for(var w=E.g.length,b=[],k=0;k<w;k++)b[k]=~E.g[k];return new l(b,~E.h).add(g)}t.abs=function(){return j(this)?S(this):this},t.add=function(E){for(var w=Math.max(this.g.length,E.g.length),b=[],k=0,N=0;N<=w;N++){var I=k+(this.i(N)&65535)+(E.i(N)&65535),v=(I>>>16)+(this.i(N)>>>16)+(E.i(N)>>>16);k=v>>>16,I&=65535,v&=65535,b[N]=v<<16|I}return new l(b,b[b.length-1]&-2147483648?-1:0)};function z(E,w){return E.add(S(w))}t.j=function(E){if(x(this)||x(E))return y;if(j(this))return j(E)?S(this).j(S(E)):S(S(this).j(E));if(j(E))return S(this.j(S(E)));if(0>this.l(T)&&0>E.l(T))return f(this.m()*E.m());for(var w=this.g.length+E.g.length,b=[],k=0;k<2*w;k++)b[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<E.g.length;N++){var I=this.i(k)>>>16,v=this.i(k)&65535,X=E.i(N)>>>16,de=E.i(N)&65535;b[2*k+2*N]+=v*de,F(b,2*k+2*N),b[2*k+2*N+1]+=I*de,F(b,2*k+2*N+1),b[2*k+2*N+1]+=v*X,F(b,2*k+2*N+1),b[2*k+2*N+2]+=I*X,F(b,2*k+2*N+2)}for(k=0;k<w;k++)b[k]=b[2*k+1]<<16|b[2*k];for(k=w;k<2*w;k++)b[k]=0;return new l(b,0)};function F(E,w){for(;(E[w]&65535)!=E[w];)E[w+1]+=E[w]>>>16,E[w]&=65535,w++}function H(E,w){this.g=E,this.h=w}function W(E,w){if(x(w))throw Error("division by zero");if(x(E))return new H(y,y);if(j(E))return w=W(S(E),w),new H(S(w.g),S(w.h));if(j(w))return w=W(E,S(w)),new H(S(w.g),w.h);if(30<E.g.length){if(j(E)||j(w))throw Error("slowDivide_ only works with positive integers.");for(var b=g,k=w;0>=k.l(E);)b=K(b),k=K(k);var N=Y(b,1),I=Y(k,1);for(k=Y(k,2),b=Y(b,2);!x(k);){var v=I.add(k);0>=v.l(E)&&(N=N.add(b),I=v),k=Y(k,1),b=Y(b,1)}return w=z(E,N.j(w)),new H(N,w)}for(N=y;0<=E.l(w);){for(b=Math.max(1,Math.floor(E.m()/w.m())),k=Math.ceil(Math.log(b)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),I=f(b),v=I.j(w);j(v)||0<v.l(E);)b-=k,I=f(b),v=I.j(w);x(I)&&(I=g),N=N.add(I),E=z(E,v)}return new H(N,E)}t.A=function(E){return W(this,E).h},t.and=function(E){for(var w=Math.max(this.g.length,E.g.length),b=[],k=0;k<w;k++)b[k]=this.i(k)&E.i(k);return new l(b,this.h&E.h)},t.or=function(E){for(var w=Math.max(this.g.length,E.g.length),b=[],k=0;k<w;k++)b[k]=this.i(k)|E.i(k);return new l(b,this.h|E.h)},t.xor=function(E){for(var w=Math.max(this.g.length,E.g.length),b=[],k=0;k<w;k++)b[k]=this.i(k)^E.i(k);return new l(b,this.h^E.h)};function K(E){for(var w=E.g.length+1,b=[],k=0;k<w;k++)b[k]=E.i(k)<<1|E.i(k-1)>>>31;return new l(b,E.h)}function Y(E,w){var b=w>>5;w%=32;for(var k=E.g.length-b,N=[],I=0;I<k;I++)N[I]=0<w?E.i(I+b)>>>w|E.i(I+b+1)<<32-w:E.i(I+b);return new l(N,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=m,wo=l}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,u){return a==Array.prototype||a==Object.prototype||(a[c]=u.value),a};function s(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ur=="object"&&Ur];for(var c=0;c<a.length;++c){var u=a[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=s(this);function n(a,c){if(c)e:{var u=i;a=a.split(".");for(var p=0;p<a.length-1;p++){var A=a[p];if(!(A in u))break e;u=u[A]}a=a[a.length-1],p=u[a],c=c(p),c!=p&&c!=null&&e(u,a,{configurable:!0,writable:!0,value:c})}}function o(a,c){a instanceof String&&(a+="");var u=0,p=!1,A={next:function(){if(!p&&u<a.length){var R=u++;return{value:c(R,a[R]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}n("Array.prototype.values",function(a){return a||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},d=this||self;function h(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function f(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function m(a,c,u){return a.call.apply(a.bind,arguments)}function y(a,c,u){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),a.apply(c,A)}}return function(){return a.apply(c,arguments)}}function g(a,c,u){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,g.apply(null,arguments)}function T(a,c){var u=Array.prototype.slice.call(arguments,1);return function(){var p=u.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,c){function u(){}u.prototype=c.prototype,a.aa=c.prototype,a.prototype=new u,a.prototype.constructor=a,a.Qb=function(p,A,R){for(var U=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)U[ae-2]=arguments[ae];return c.prototype[A].apply(p,U)}}function j(a){const c=a.length;if(0<c){const u=Array(c);for(let p=0;p<c;p++)u[p]=a[p];return u}return[]}function S(a,c){for(let u=1;u<arguments.length;u++){const p=arguments[u];if(h(p)){const A=a.length||0,R=p.length||0;a.length=A+R;for(let U=0;U<R;U++)a[A+U]=p[U]}else a.push(p)}}class z{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=d.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var K=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function Y(a,c,u){for(const p in a)c.call(u,a[p],p,a)}function E(a,c){for(const u in a)c.call(void 0,a[u],u,a)}function w(a){const c={};for(const u in a)c[u]=a[u];return c}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(a,c){let u,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(u in p)a[u]=p[u];for(let R=0;R<b.length;R++)u=b[R],Object.prototype.hasOwnProperty.call(p,u)&&(a[u]=p[u])}}function N(a){var c=1;a=a.split(":");const u=[];for(;0<c&&a.length;)u.push(a.shift()),c--;return a.length&&u.push(a.join(":")),u}function I(a){d.setTimeout(()=>{throw a},0)}function v(){var a=ct;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class X{constructor(){this.h=this.g=null}add(c,u){const p=de.get();p.set(c,u),this.h?this.h.next=p:this.g=p,this.h=p}}var de=new z(()=>new ve,a=>a.reset());class ve{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let we,Xe=!1,ct=new X,cs=()=>{const a=d.Promise.resolve(void 0);we=()=>{a.then(gr)}};var gr=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(u){I(u)}var c=de;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}Xe=!1};function dt(){this.s=this.s,this.C=this.C}dt.prototype.s=!1,dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const u=()=>{};d.addEventListener("test",u,c),d.removeEventListener("test",u,c)}catch{}return a}();function $t(a,c){if(fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var u=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(K){e:{try{W(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else u=="mouseover"?c=a.fromElement:u=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$n[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&$t.aa.h.call(this)}}x($t,fe);var $n={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Bt="closure_listenable_"+(1e6*Math.random()|0),yr=0;function bi(a,c,u,p,A){this.listener=a,this.proxy=null,this.src=c,this.type=u,this.capture=!!p,this.ha=A,this.key=++yr,this.da=this.fa=!1}function Ht(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ds(a){this.src=a,this.g={},this.h=0}Ds.prototype.add=function(a,c,u,p,A){var R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);var U=vi(a,c,p,A);return-1<U?(c=a[U],u||(c.fa=!1)):(c=new bi(c,this.src,R,!!p,A),c.fa=u,a.push(c)),c};function Fs(a,c){var u=c.type;if(u in a.g){var p=a.g[u],A=Array.prototype.indexOf.call(p,c,void 0),R;(R=0<=A)&&Array.prototype.splice.call(p,A,1),R&&(Ht(c),a.g[u].length==0&&(delete a.g[u],a.h--))}}function vi(a,c,u,p){for(var A=0;A<a.length;++A){var R=a[A];if(!R.da&&R.listener==c&&R.capture==!!u&&R.ha==p)return A}return-1}var Ms="closure_lm_"+(1e6*Math.random()|0),Ls={};function xr(a,c,u,p,A){if(Array.isArray(c)){for(var R=0;R<c.length;R++)xr(a,c[R],u,p,A);return null}return u=L(u),a&&a[Bt]?a.K(c,u,f(p)?!!p.capture:!1,A):Bn(a,c,u,!1,p,A)}function Bn(a,c,u,p,A,R){if(!c)throw Error("Invalid event type");var U=f(A)?!!A.capture:!!A,ae=$(a);if(ae||(a[Ms]=ae=new Ds(a)),u=ae.add(c,u,p,U,R),u.proxy)return u;if(p=Ko(),u.proxy=p,p.src=a,p.listener=u,a.addEventListener)Vn||(A=U),A===void 0&&(A=!1),a.addEventListener(c.toString(),p,A);else if(a.attachEvent)a.attachEvent(P(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ko(){function a(u){return c.call(a.src,a.listener,u)}const c=O;return a}function wi(a,c,u,p,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)wi(a,c[R],u,p,A);else p=f(p)?!!p.capture:!!p,u=L(u),a&&a[Bt]?(a=a.i,c=String(c).toString(),c in a.g&&(R=a.g[c],u=vi(R,u,p,A),-1<u&&(Ht(R[u]),Array.prototype.splice.call(R,u,1),R.length==0&&(delete a.g[c],a.h--)))):a&&(a=$(a))&&(c=a.g[c.toString()],a=-1,c&&(a=vi(c,u,p,A)),(u=-1<a?c[a]:null)&&_(u))}function _(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Bt])Fs(c.i,a);else{var u=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(u,p,a.capture):c.detachEvent?c.detachEvent(P(u),p):c.addListener&&c.removeListener&&c.removeListener(p),(u=$(c))?(Fs(u,a),u.h==0&&(u.src=null,c[Ms]=null)):Ht(a)}}}function P(a){return a in Ls?Ls[a]:Ls[a]="on"+a}function O(a,c){if(a.da)a=!0;else{c=new $t(c,this);var u=a.listener,p=a.ha||a.src;a.fa&&_(a),a=u.call(p,c)}return a}function $(a){return a=a[Ms],a instanceof Ds?a:null}var V="__closure_events_fn_"+(1e9*Math.random()>>>0);function L(a){return typeof a=="function"?a:(a[V]||(a[V]=function(c){return a.handleEvent(c)}),a[V])}function B(){dt.call(this),this.i=new Ds(this),this.M=this,this.F=null}x(B,dt),B.prototype[Bt]=!0,B.prototype.removeEventListener=function(a,c,u,p){wi(this,a,c,u,p)};function J(a,c){var u,p=a.F;if(p)for(u=[];p;p=p.F)u.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new fe(c,a);else if(c instanceof fe)c.target=c.target||a;else{var A=c;c=new fe(p,a),k(c,A)}if(A=!0,u)for(var R=u.length-1;0<=R;R--){var U=c.g=u[R];A=se(U,p,!0,c)&&A}if(U=c.g=a,A=se(U,p,!0,c)&&A,A=se(U,p,!1,c)&&A,u)for(R=0;R<u.length;R++)U=c.g=u[R],A=se(U,p,!1,c)&&A}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var u=a.g[c],p=0;p<u.length;p++)Ht(u[p]);delete a.g[c],a.h--}}this.F=null},B.prototype.K=function(a,c,u,p){return this.i.add(String(a),c,!1,u,p)},B.prototype.L=function(a,c,u,p){return this.i.add(String(a),c,!0,u,p)};function se(a,c,u,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,R=0;R<c.length;++R){var U=c[R];if(U&&!U.da&&U.capture==u){var ae=U.listener,be=U.ha||U.src;U.fa&&Fs(a.i,U),A=ae.call(be,p)!==!1&&A}}return A&&!p.defaultPrevented}function Se(a,c,u){if(typeof a=="function")u&&(a=g(a,u));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:d.setTimeout(a,c||0)}function ds(a){a.g=Se(()=>{a.g=null,a.i&&(a.i=!1,ds(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class ut extends dt{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ds(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(a){dt.call(this),this.h=a,this.g={}}x(us,dt);var Us=[];function Vs(a){Y(a.g,function(c,u){this.g.hasOwnProperty(u)&&_(c)},a),a.g={}}us.prototype.N=function(){us.aa.N.call(this),Vs(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ji=d.JSON.stringify,br=d.JSON.parse,Hn=class{stringify(a){return d.JSON.stringify(a,void 0)}parse(a){return d.JSON.parse(a,void 0)}};function $s(){}$s.prototype.h=null;function Go(a){return a.h||(a.h=a.i())}function wm(){}var _i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zn(){fe.call(this,"d")}x(zn,fe);function qn(){fe.call(this,"c")}x(qn,fe);var Bs={},Jo=null;function Wn(){return Jo=Jo||new B}Bs.La="serverreachability";function Qo(a){fe.call(this,Bs.La,a)}x(Qo,fe);function Ni(a){const c=Wn();J(c,new Qo(c))}Bs.STAT_EVENT="statevent";function Yo(a,c){fe.call(this,Bs.STAT_EVENT,a),this.stat=c}x(Yo,fe);function Ae(a){const c=Wn();J(c,new Yo(c,a))}Bs.Ma="timingevent";function Xo(a,c){fe.call(this,Bs.Ma,a),this.size=c}x(Xo,fe);function Ti(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){a()},c)}function ki(){this.g=!0}ki.prototype.xa=function(){this.g=!1};function jm(a,c,u,p,A,R){a.info(function(){if(a.g)if(R)for(var U="",ae=R.split("&"),be=0;be<ae.length;be++){var ee=ae[be].split("=");if(1<ee.length){var je=ee[0];ee=ee[1];var _e=je.split("_");U=2<=_e.length&&_e[1]=="type"?U+(je+"="+ee+"&"):U+(je+"=redacted&")}}else U=null;else U=R;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+c+`
`+u+`
`+U})}function _m(a,c,u,p,A,R,U){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+c+`
`+u+`
`+R+" "+U})}function Hs(a,c,u,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Tm(a,u)+(p?" "+p:"")})}function Nm(a,c){a.info(function(){return"TIMEOUT: "+c})}ki.prototype.info=function(){};function Tm(a,c){if(!a.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(a=0;a<u.length;a++)if(Array.isArray(u[a])){var p=u[a];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var U=1;U<A.length;U++)A[U]=""}}}}return ji(u)}catch{return c}}var Kn={NO_ERROR:0,TIMEOUT:8},km={},Gn;function vr(){}x(vr,$s),vr.prototype.g=function(){return new XMLHttpRequest},vr.prototype.i=function(){return{}},Gn=new vr;function zt(a,c,u,p){this.j=a,this.i=c,this.l=u,this.R=p||1,this.U=new us(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zo}function Zo(){this.i=null,this.g="",this.h=!1}var el={},Jn={};function Qn(a,c,u){a.L=1,a.v=Nr(kt(c)),a.m=u,a.P=!0,tl(a,null)}function tl(a,c){a.F=Date.now(),wr(a),a.A=kt(a.v);var u=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),pl(u.i,"t",p),a.C=0,u=a.j.J,a.h=new Zo,a.g=Rl(a.j,u?c:null,!a.m),0<a.O&&(a.M=new ut(g(a.Y,a,a.g),a.O)),c=a.U,u=a.g,p=a.ca;var A="readystatechange";Array.isArray(A)||(A&&(Us[0]=A.toString()),A=Us);for(var R=0;R<A.length;R++){var U=xr(u,A[R],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Ni(),jm(a.i,a.u,a.A,a.l,a.R,a.m)}zt.prototype.ca=function(a){a=a.target;const c=this.M;c&&It(a)==3?c.j():this.Y(a)},zt.prototype.Y=function(a){try{if(a==this.g)e:{const _e=It(this.g);var c=this.g.Ba();const Ws=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||jl(this.g)))){this.J||_e!=4||c==7||(c==8||0>=Ws?Ni(3):Ni(2)),Yn(this);var u=this.g.Z();this.X=u;t:if(sl(this)){var p=jl(this.g);a="";var A=p.length,R=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hs(this),Ii(this);var U="";break t}this.h.i=new d.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(R&&c==A-1)});p.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=u==200,_m(this.i,this.u,this.A,this.l,this.R,_e,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ae,be=this.g;if((ae=be.g?be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ae)){var ee=ae;break t}}ee=null}if(u=ee)Hs(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xn(this,u);else{this.o=!1,this.s=3,Ae(12),hs(this),Ii(this);break e}}if(this.P){u=!0;let Ze;for(;!this.J&&this.C<U.length;)if(Ze=Im(this,U),Ze==Jn){_e==4&&(this.s=4,Ae(14),u=!1),Hs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==el){this.s=4,Ae(15),Hs(this.i,this.l,U,"[Invalid Chunk]"),u=!1;break}else Hs(this.i,this.l,Ze,null),Xn(this,Ze);if(sl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||U.length!=0||this.h.h||(this.s=1,Ae(16),u=!1),this.o=this.o&&u,!u)Hs(this.i,this.l,U,"[Invalid Chunked Response]"),hs(this),Ii(this);else if(0<U.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),ra(je),je.M=!0,Ae(11))}}else Hs(this.i,this.l,U,null),Xn(this,U);_e==4&&hs(this),this.o&&!this.J&&(_e==4?Sl(this.j,this):(this.o=!1,wr(this)))}else zm(this.g),u==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),hs(this),Ii(this)}}}catch{}finally{}};function sl(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Im(a,c){var u=a.C,p=c.indexOf(`
`,u);return p==-1?Jn:(u=Number(c.substring(u,p)),isNaN(u)?el:(p+=1,p+u>c.length?Jn:(c=c.slice(p,p+u),a.C=p+u,c)))}zt.prototype.cancel=function(){this.J=!0,hs(this)};function wr(a){a.S=Date.now()+a.I,il(a,a.I)}function il(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ti(g(a.ba,a),c)}function Yn(a){a.B&&(d.clearTimeout(a.B),a.B=null)}zt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Nm(this.i,this.A),this.L!=2&&(Ni(),Ae(17)),hs(this),this.s=2,Ii(this)):il(this,this.S-a)};function Ii(a){a.j.G==0||a.J||Sl(a.j,a)}function hs(a){Yn(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Vs(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Xn(a,c){try{var u=a.j;if(u.G!=0&&(u.g==a||Zn(u.h,a))){if(!a.K&&Zn(u.h,a)&&u.G==3){try{var p=u.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<a.F)Ar(u),Er(u);else break e;ia(u),Ae(18)}}else u.za=A[1],0<u.za-u.T&&37500>A[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ti(g(u.Za,u),6e3));if(1>=al(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else fs(u,11)}else if((a.K||u.g==a)&&Ar(u),!F(c))for(A=u.Da.g.parse(c),c=0;c<A.length;c++){let ee=A[c];if(u.T=ee[0],ee=ee[1],u.G==2)if(ee[0]=="c"){u.K=ee[1],u.ia=ee[2];const je=ee[3];je!=null&&(u.la=je,u.j.info("VER="+u.la));const _e=ee[4];_e!=null&&(u.Aa=_e,u.j.info("SVER="+u.Aa));const Ws=ee[5];Ws!=null&&typeof Ws=="number"&&0<Ws&&(p=1.5*Ws,u.L=p,u.j.info("backChannelRequestTimeoutMs_="+p)),p=u;const Ze=a.g;if(Ze){const Cr=Ze.g?Ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cr){var R=p.h;R.g||Cr.indexOf("spdy")==-1&&Cr.indexOf("quic")==-1&&Cr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(ea(R,R.h),R.h=null))}if(p.D){const na=Ze.g?Ze.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(p.ya=na,oe(p.I,p.D,na))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-a.F,u.j.info("Handshake RTT: "+u.R+"ms")),p=u;var U=a;if(p.qa=Pl(p,p.J?p.ia:null,p.W),U.K){ol(p.h,U);var ae=U,be=p.L;be&&(ae.I=be),ae.B&&(Yn(ae),wr(ae)),p.g=U}else Il(p);0<u.i.length&&Sr(u)}else ee[0]!="stop"&&ee[0]!="close"||fs(u,7);else u.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?fs(u,7):sa(u):ee[0]!="noop"&&u.l&&u.l.ta(ee),u.v=0)}}Ni(4)}catch{}}var Em=class{constructor(a,c){this.g=a,this.map=c}};function rl(a){this.l=a||10,d.PerformanceNavigationTiming?(a=d.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function al(a){return a.h?1:a.g?a.g.size:0}function Zn(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ea(a,c){a.g?a.g.add(c):a.h=c}function ol(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}rl.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ll(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const u of a.g.values())c=c.concat(u.D);return c}return j(a.i)}function Sm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(h(a)){for(var c=[],u=a.length,p=0;p<u;p++)c.push(a[p]);return c}c=[],u=0;for(p in a)c[u++]=a[p];return c}function Am(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(h(a)||typeof a=="string"){var c=[];a=a.length;for(var u=0;u<a;u++)c.push(u);return c}c=[],u=0;for(const p in a)c[u++]=p;return c}}}function cl(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(h(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var u=Am(a),p=Sm(a),A=p.length,R=0;R<A;R++)c.call(void 0,p[R],u&&u[R],a)}var dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cm(a,c){if(a){a=a.split("&");for(var u=0;u<a.length;u++){var p=a[u].indexOf("="),A=null;if(0<=p){var R=a[u].substring(0,p);A=a[u].substring(p+1)}else R=a[u];c(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function ms(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ms){this.h=a.h,jr(this,a.j),this.o=a.o,this.g=a.g,_r(this,a.s),this.l=a.l;var c=a.i,u=new Ai;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),ul(this,u),this.m=a.m}else a&&(c=String(a).match(dl))?(this.h=!1,jr(this,c[1]||"",!0),this.o=Ei(c[2]||""),this.g=Ei(c[3]||"",!0),_r(this,c[4]),this.l=Ei(c[5]||"",!0),ul(this,c[6]||"",!0),this.m=Ei(c[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}ms.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Si(c,hl,!0),":");var u=this.g;return(u||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Si(c,hl,!0),"@"),a.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&a.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&a.push("/"),a.push(Si(u,u.charAt(0)=="/"?Om:Rm,!0))),(u=this.i.toString())&&a.push("?",u),(u=this.m)&&a.push("#",Si(u,Fm)),a.join("")};function kt(a){return new ms(a)}function jr(a,c,u){a.j=u?Ei(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function _r(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function ul(a,c,u){c instanceof Ai?(a.i=c,Mm(a.i,a.h)):(u||(c=Si(c,Dm)),a.i=new Ai(c,a.h))}function oe(a,c,u){a.i.set(c,u)}function Nr(a){return oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ei(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Si(a,c,u){return typeof a=="string"?(a=encodeURI(a).replace(c,Pm),u&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hl=/[#\/\?@]/g,Rm=/[#\?:]/g,Om=/[#\?]/g,Dm=/[#\?@]/g,Fm=/#/g;function Ai(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function qt(a){a.g||(a.g=new Map,a.h=0,a.i&&Cm(a.i,function(c,u){a.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}t=Ai.prototype,t.add=function(a,c){qt(this),this.i=null,a=zs(this,a);var u=this.g.get(a);return u||this.g.set(a,u=[]),u.push(c),this.h+=1,this};function ml(a,c){qt(a),c=zs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function fl(a,c){return qt(a),c=zs(a,c),a.g.has(c)}t.forEach=function(a,c){qt(this),this.g.forEach(function(u,p){u.forEach(function(A){a.call(c,A,p,this)},this)},this)},t.na=function(){qt(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let p=0;p<c.length;p++){const A=a[p];for(let R=0;R<A.length;R++)u.push(c[p])}return u},t.V=function(a){qt(this);let c=[];if(typeof a=="string")fl(this,a)&&(c=c.concat(this.g.get(zs(this,a))));else{a=Array.from(this.g.values());for(let u=0;u<a.length;u++)c=c.concat(a[u])}return c},t.set=function(a,c){return qt(this),this.i=null,a=zs(this,a),fl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function pl(a,c,u){ml(a,c),0<u.length&&(a.i=null,a.g.set(zs(a,c),j(u)),a.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var p=c[u];const R=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var A=R;U[p]!==""&&(A+="="+encodeURIComponent(String(U[p]))),a.push(A)}}return this.i=a.join("&")};function zs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Mm(a,c){c&&!a.j&&(qt(a),a.i=null,a.g.forEach(function(u,p){var A=p.toLowerCase();p!=A&&(ml(this,p),pl(this,A,u))},a)),a.j=c}function Lm(a,c){const u=new ki;if(d.Image){const p=new Image;p.onload=T(Wt,u,"TestLoadImage: loaded",!0,c,p),p.onerror=T(Wt,u,"TestLoadImage: error",!1,c,p),p.onabort=T(Wt,u,"TestLoadImage: abort",!1,c,p),p.ontimeout=T(Wt,u,"TestLoadImage: timeout",!1,c,p),d.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Um(a,c){const u=new ki,p=new AbortController,A=setTimeout(()=>{p.abort(),Wt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(R=>{clearTimeout(A),R.ok?Wt(u,"TestPingServer: ok",!0,c):Wt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Wt(u,"TestPingServer: error",!1,c)})}function Wt(a,c,u,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(u)}catch{}}function Vm(){this.g=new Hn}function $m(a,c,u){const p=u||"";try{cl(a,function(A,R){let U=A;f(A)&&(U=ji(A)),c.push(p+R+"="+encodeURIComponent(U))})}catch(A){throw c.push(p+"type="+encodeURIComponent("_badmap")),A}}function Tr(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Tr,$s),Tr.prototype.g=function(){return new kr(this.l,this.j)},Tr.prototype.i=function(a){return function(){return a}}({});function kr(a,c){B.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(kr,B),t=kr.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Pi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||d).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function gl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ci(this):Pi(this),this.readyState==3&&gl(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ci(this))},t.Qa=function(a){this.g&&(this.response=a,Ci(this))},t.ga=function(){this.g&&Ci(this)};function Ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Pi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,a.push(u[0]+": "+u[1]),u=c.next();return a.join(`\r
`)};function Pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function yl(a){let c="";return Y(a,function(u,p){c+=p,c+=":",c+=u,c+=`\r
`}),c}function ta(a,c,u){e:{for(p in u){var p=!1;break e}p=!0}p||(u=yl(u),typeof a=="string"?u!=null&&encodeURIComponent(String(u)):oe(a,c,u))}function ue(a){B.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ue,B);var Bm=/^https?$/i,Hm=["POST","PUT"];t=ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,u,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gn.g(),this.v=this.o?Go(this.o):Go(Gn),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(R){xl(this,R);return}if(a=u||"",u=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)u.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const R of p.keys())u.set(R,p.get(R));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(u.keys()).find(R=>R.toLowerCase()=="content-type"),A=d.FormData&&a instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Hm,c,void 0))||p||A||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,U]of u)this.g.setRequestHeader(R,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wl(this),this.u=!0,this.g.send(a),this.u=!1}catch(R){xl(this,R)}};function xl(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,bl(a),Ir(a)}function bl(a){a.A||(a.A=!0,J(a,"complete"),J(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,J(this,"complete"),J(this,"abort"),Ir(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vl(this):this.bb())},t.bb=function(){vl(this)};function vl(a){if(a.h&&typeof l<"u"&&(!a.v[1]||It(a)!=4||a.Z()!=2)){if(a.u&&It(a)==4)Se(a.Ea,0,a);else if(J(a,"readystatechange"),It(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var u;if(!(u=c)){var p;if(p=U===0){var A=String(a.D).match(dl)[1]||null;!A&&d.self&&d.self.location&&(A=d.self.location.protocol.slice(0,-1)),p=!Bm.test(A?A.toLowerCase():"")}u=p}if(u)J(a,"complete"),J(a,"success");else{a.m=6;try{var R=2<It(a)?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.Z()+"]",bl(a)}}finally{Ir(a)}}}}function Ir(a,c){if(a.g){wl(a);const u=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||J(a,"ready");try{u.onreadystatechange=p}catch{}}}function wl(a){a.I&&(d.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function It(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),br(c)}};function jl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zm(a){const c={};a=(a.g&&2<=It(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(F(a[p]))continue;var u=N(a[p]);const A=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const R=c[A]||[];c[A]=R,R.push(u)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ri(a,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[a]||c}function _l(a){this.Aa=0,this.i=[],this.j=new ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ri("baseRetryDelayMs",5e3,a),this.cb=Ri("retryDelaySeedMs",1e4,a),this.Wa=Ri("forwardChannelMaxRetries",2,a),this.wa=Ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rl(a&&a.concurrentRequestLimit),this.Da=new Vm,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_l.prototype,t.la=8,t.G=1,t.connect=function(a,c,u,p){Ae(0),this.W=a,this.H=c||{},u&&p!==void 0&&(this.H.OSID=u,this.H.OAID=p),this.F=this.X,this.I=Pl(this,null,this.W),Sr(this)};function sa(a){if(Nl(a),a.G==3){var c=a.U++,u=kt(a.I);if(oe(u,"SID",a.K),oe(u,"RID",c),oe(u,"TYPE","terminate"),Oi(a,u),c=new zt(a,a.j,c),c.L=2,c.v=Nr(kt(u)),u=!1,d.navigator&&d.navigator.sendBeacon)try{u=d.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&d.Image&&(new Image().src=c.v,u=!0),u||(c.g=Rl(c.j,null),c.g.ea(c.v)),c.F=Date.now(),wr(c)}Cl(a)}function Er(a){a.g&&(ra(a),a.g.cancel(),a.g=null)}function Nl(a){Er(a),a.u&&(d.clearTimeout(a.u),a.u=null),Ar(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&d.clearTimeout(a.s),a.s=null)}function Sr(a){if(!nl(a.h)&&!a.s){a.s=!0;var c=a.Ga;we||cs(),Xe||(we(),Xe=!0),ct.add(c,a),a.B=0}}function qm(a,c){return al(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ti(g(a.Ga,a,c),Al(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const A=new zt(this,this.j,a);let R=this.o;if(this.S&&(R?(R=w(R),k(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var c=0,u=0;u<this.i.length;u++){t:{var p=this.i[u];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=u;break e}if(c===4096||u===this.i.length-1){c=u+1;break e}}c=1e3}else c=1e3;c=kl(this,A,c),u=kt(this.I),oe(u,"RID",a),oe(u,"CVER",22),this.D&&oe(u,"X-HTTP-Session-Id",this.D),Oi(this,u),R&&(this.O?c="headers="+encodeURIComponent(String(yl(R)))+"&"+c:this.m&&ta(u,this.m,R)),ea(this.h,A),this.Ua&&oe(u,"TYPE","init"),this.P?(oe(u,"$req",c),oe(u,"SID","null"),A.T=!0,Qn(A,u,null)):Qn(A,u,c),this.G=2}}else this.G==3&&(a?Tl(this,a):this.i.length==0||nl(this.h)||Tl(this))};function Tl(a,c){var u;c?u=c.l:u=a.U++;const p=kt(a.I);oe(p,"SID",a.K),oe(p,"RID",u),oe(p,"AID",a.T),Oi(a,p),a.m&&a.o&&ta(p,a.m,a.o),u=new zt(a,a.j,u,a.B+1),a.m===null&&(u.H=a.o),c&&(a.i=c.D.concat(a.i)),c=kl(a,u,1e3),u.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ea(a.h,u),Qn(u,p,c)}function Oi(a,c){a.H&&Y(a.H,function(u,p){oe(c,p,u)}),a.l&&cl({},function(u,p){oe(c,p,u)})}function kl(a,c,u){u=Math.min(a.i.length,u);var p=a.l?g(a.l.Na,a.l,a):null;e:{var A=a.i;let R=-1;for(;;){const U=["count="+u];R==-1?0<u?(R=A[0].g,U.push("ofs="+R)):R=0:U.push("ofs="+R);let ae=!0;for(let be=0;be<u;be++){let ee=A[be].g;const je=A[be].map;if(ee-=R,0>ee)R=Math.max(0,A[be].g-100),ae=!1;else try{$m(je,U,"req"+ee+"_")}catch{p&&p(je)}}if(ae){p=U.join("&");break e}}}return a=a.i.splice(0,u),c.D=a,p}function Il(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;we||cs(),Xe||(we(),Xe=!0),ct.add(c,a),a.v=0}}function ia(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ti(g(a.Fa,a),Al(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,El(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ti(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Er(this),El(this))};function ra(a){a.A!=null&&(d.clearTimeout(a.A),a.A=null)}function El(a){a.g=new zt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=kt(a.qa);oe(c,"RID","rpc"),oe(c,"SID",a.K),oe(c,"AID",a.T),oe(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&oe(c,"TO",a.ja),oe(c,"TYPE","xmlhttp"),Oi(a,c),a.m&&a.o&&ta(c,a.m,a.o),a.L&&(a.g.I=a.L);var u=a.g;a=a.ia,u.L=1,u.v=Nr(kt(c)),u.m=null,u.P=!0,tl(u,a)}t.Za=function(){this.C!=null&&(this.C=null,Er(this),ia(this),Ae(19))};function Ar(a){a.C!=null&&(d.clearTimeout(a.C),a.C=null)}function Sl(a,c){var u=null;if(a.g==c){Ar(a),ra(a),a.g=null;var p=2}else if(Zn(a.h,c))u=c.D,ol(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var A=a.B;p=Wn(),J(p,new Xo(p,u)),Sr(a)}else Il(a);else if(A=c.s,A==3||A==0&&0<c.X||!(p==1&&qm(a,c)||p==2&&ia(a)))switch(u&&0<u.length&&(c=a.h,c.i=c.i.concat(u)),A){case 1:fs(a,5);break;case 4:fs(a,10);break;case 3:fs(a,6);break;default:fs(a,2)}}}function Al(a,c){let u=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(u*=2),u*c}function fs(a,c){if(a.j.info("Error code "+c),c==2){var u=g(a.fb,a),p=a.Xa;const A=!p;p=new ms(p||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||jr(p,"https"),Nr(p),A?Lm(p.toString(),u):Um(p.toString(),u)}else Ae(2);a.G=0,a.l&&a.l.sa(c),Cl(a),Nl(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function Cl(a){if(a.G=0,a.ka=[],a.l){const c=ll(a.h);(c.length!=0||a.i.length!=0)&&(S(a.ka,c),S(a.ka,a.i),a.h.i.length=0,j(a.i),a.i.length=0),a.l.ra()}}function Pl(a,c,u){var p=u instanceof ms?kt(u):new ms(u);if(p.g!="")c&&(p.g=c+"."+p.g),_r(p,p.s);else{var A=d.location;p=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var R=new ms(null);p&&jr(R,p),c&&(R.g=c),A&&_r(R,A),u&&(R.l=u),p=R}return u=a.D,c=a.ya,u&&c&&oe(p,u,c),oe(p,"VER",a.la),Oi(a,p),p}function Rl(a,c,u){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ue(new Tr({eb:u})):new ue(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ol(){}t=Ol.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ze(a,c){B.call(this),this.g=new _l(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!F(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!F(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new qs(this)}x(ze,B),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){sa(this.g)},ze.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var u={};u.__data__=a,a=u}else this.u&&(u={},u.__data__=ji(a),a=u);c.i.push(new Em(c.Ya++,a)),c.G==3&&Sr(c)},ze.prototype.N=function(){this.g.l=null,delete this.j,sa(this.g),delete this.g,ze.aa.N.call(this)};function Dl(a){zn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const u in c){a=u;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(Dl,zn);function Fl(){qn.call(this),this.status=1}x(Fl,qn);function qs(a){this.g=a}x(qs,Ol),qs.prototype.ua=function(){J(this.g,"a")},qs.prototype.ta=function(a){J(this.g,new Dl(a))},qs.prototype.sa=function(a){J(this.g,new Fl)},qs.prototype.ra=function(){J(this.g,"b")},ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Kn.NO_ERROR=0,Kn.TIMEOUT=8,Kn.HTTP_ERROR=6,km.COMPLETE="complete",wm.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",B.prototype.listen=B.prototype.K,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha}).apply(typeof Ur<"u"?Ur:typeof self<"u"?self:typeof window<"u"?window:{});const Tc="@firebase/firestore",kc="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Pn("@firebase/firestore");function at(t,...e){if(pi.logLevel<=re.DEBUG){const s=e.map(jo);pi.debug(`Firestore (${ur}): ${t}`,...s)}}function ch(t,...e){if(pi.logLevel<=re.ERROR){const s=e.map(jo);pi.error(`Firestore (${ur}): ${t}`,...s)}}function ix(t,...e){if(pi.logLevel<=re.WARN){const s=e.map(jo);pi.warn(`Firestore (${ur}): ${t}`,...s)}}function jo(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(s){return JSON.stringify(s)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e,s){let i="Unexpected state";typeof e=="string"?i=e:s=e,dh(t,i,s)}function dh(t,e,s){let i=`FIRESTORE (${ur}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(s!==void 0)try{i+=" CONTEXT: "+JSON.stringify(s)}catch{i+=" CONTEXT: "+s}throw ch(i),new Error(i)}function Ki(t,e,s,i){let n="Unexpected state";typeof s=="string"?n=s:i=s,t||dh(e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class xe extends Qe{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(Pe.UNAUTHENTICATED))}shutdown(){}}class nx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,s){this.changeListener=s,e.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class ax{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){Ki(this.o===void 0,42304);let i=this.i;const n=h=>this.i!==i?(i=this.i,s(h)):Promise.resolve();let o=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gi,e.enqueueRetryable(()=>n(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await n(this.currentUser)})},d=h=>{at("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>d(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?d(h):(at("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gi)}},0),l()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(i=>this.i!==e?(at("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ki(typeof i.accessToken=="string",31837,{l:i}),new uh(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ki(e===null||typeof e=="string",2055,{h:e}),new Pe(e)}}class ox{constructor(e,s,i){this.P=e,this.T=s,this.I=i,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class lx{constructor(e,s,i){this.P=e,this.T=s,this.I=i}getToken(){return Promise.resolve(new ox(this.P,this.T,this.I))}start(e,s){e.enqueueRetryable(()=>s(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cx{constructor(e,s){this.V=s,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,s){Ki(this.o===void 0,3512);const i=o=>{o.error!=null&&at("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.m;return this.m=o.token,at("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?s(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const n=o=>{at("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>n(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?n(o):at("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ic(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(Ki(typeof s.token=="string",44558,{tokenResult:s}),this.m=s.token,new Ic(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),s=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(s);else for(let i=0;i<t;i++)s[i]=Math.floor(256*Math.random());return s}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const n=dx(40);for(let o=0;o<n.length;++o)i.length<20&&n[o]<s&&(i+=e.charAt(n[o]%62))}return i}}function ti(t,e){return t<e?-1:t>e?1:0}function mx(t,e){let s=0;for(;s<t.length&&s<e.length;){const i=t.codePointAt(s),n=e.codePointAt(s);if(i!==n){if(i<128&&n<128)return ti(i,n);{const o=ux(),l=fx(o.encode(Ec(t,s)),o.encode(Ec(e,s)));return l!==0?l:ti(i,n)}}s+=i>65535?2:1}return ti(t.length,e.length)}function Ec(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function fx(t,e){for(let s=0;s<t.length&&s<e.length;++s)if(t[s]!==e[s])return ti(t[s],e[s]);return ti(t.length,e.length)}class Pt{constructor(e,s,i){s===void 0?s=0:s>e.length&&ln(637,{offset:s,range:e.length}),i===void 0?i=e.length-s:i>e.length-s&&ln(1746,{length:i,range:e.length-s}),this.segments=e,this.offset=s,this.len=i}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const s=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach(i=>{s.push(i)}):s.push(e),this.construct(s)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}forEach(e){for(let s=this.offset,i=this.limit();s<i;s++)e(this.segments[s])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,s){const i=Math.min(e.length,s.length);for(let n=0;n<i;n++){const o=Pt.compareSegments(e.get(n),s.get(n));if(o!==0)return o}return ti(e.length,s.length)}static compareSegments(e,s){const i=Pt.isNumericId(e),n=Pt.isNumericId(s);return i&&!n?-1:!i&&n?1:i&&n?Pt.extractNumericId(e).compare(Pt.extractNumericId(s)):mx(e,s)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wo.fromString(e.substring(4,e.length-2))}}class Ke extends Pt{construct(e,s,i){return new Ke(e,s,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const s=[];for(const i of e){if(i.indexOf("//")>=0)throw new xe(ye.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);s.push(...i.split("/").filter(n=>n.length>0))}return new Ke(s)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.path=e}static fromPath(e){return new Ot(Ke.fromString(e))}static fromName(e){return new Ot(Ke.fromString(e).popFirst(5))}static empty(){return new Ot(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,s){return Ke.comparator(e.path,s.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ot(new Ke(e.slice()))}}function px(t){return t.name==="IndexedDbTransactionError"}const za="(default)";class cn{constructor(e,s){this.projectId=e,this.database=s||za}static empty(){return new cn("","")}get isDefaultDatabase(){return this.database===za}isEqual(e){return e instanceof cn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(e,s=null,i=[],n=[],o=null,l="F",d=null,h=null){this.path=e,this.collectionGroup=s,this.explicitOrderBy=i,this.filters=n,this.limit=o,this.limitType=l,this.startAt=d,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function yx(t){return new gx(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sc,Z;(Z=Sc||(Sc={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new wo([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=1048576;function va(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,s,i=1e3,n=1.5,o=6e4){this.xi=e,this.timerId=s,this.A_=i,this.R_=n,this.V_=o,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const s=Math.floor(this.m_+this.w_()),i=Math.max(0,Date.now()-this.g_),n=Math.max(0,s-i);n>0&&at("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.m_} ms, delay with jitter: ${s} ms, last attempt: ${i} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,n,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,s,i,n,o){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=i,this.op=n,this.removalCallback=o,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,s,i,n,o){const l=Date.now()+i,d=new _o(e,s,l,n,o);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new xe(ye.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ac,Cc;(Cc=Ac||(Ac={})).xa="default",Cc.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t,e,s){if(!s)throw new xe(ye.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _x(t,e,s,i){if(e===!0&&i===!0)throw new xe(ye.INVALID_ARGUMENT,`${t} and ${s} cannot be used together.`)}function Rc(t){if(!Ot.isDocumentKey(t))throw new xe(ye.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nx(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ln(12329,{type:typeof t})}function Tx(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new xe(ye.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Nx(t);throw new xe(ye.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${s}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh="firestore.googleapis.com",Oc=!0;class Dc{constructor(e){var s,i;if(e.host===void 0){if(e.ssl!==void 0)throw new xe(ye.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hh,this.ssl=Oc}else this.host=e.host,this.ssl=(s=e.ssl)!==null&&s!==void 0?s:Oc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xx;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bx)throw new xe(ye.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_x("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wx((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new xe(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new xe(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new xe(ye.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,n){return i.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class No{constructor(e,s,i,n){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=i,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new xe(ye.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new xe(ye.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new rx;switch(i.type){case"firstParty":return new lx(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new xe(ye.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const i=Pc.get(s);i&&(at("ComponentProvider","Removing Datastore"),Pc.delete(s),i.terminate())}(this),Promise.resolve()}}function kx(t,e,s,i={}){var n;t=Tx(t,No);const o=yi(e),l=t._getSettings(),d=Object.assign(Object.assign({},l),{emulatorOptions:t._getEmulatorOptions()}),h=`${e}:${s}`;o&&(An(`https://${h}`),Cn("Firestore",!0)),l.host!==hh&&l.host!==h&&ix("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},l),{host:h,ssl:o,emulatorOptions:i});if(!ls(f,d)&&(t._setSettings(f),i.mockUserToken)){let m,y;if(typeof i.mockUserToken=="string")m=i.mockUserToken,y=Pe.MOCK_USER;else{m=Cu(i.mockUserToken,(n=t._app)===null||n===void 0?void 0:n.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new xe(ye.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Pe(g)}t._authCredentials=new nx(new uh(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,s,i){this.converter=s,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new To(this.firestore,e,this._query)}}class si{constructor(e,s,i){this.converter=s,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new si(this.firestore,e,this._key)}}class sr extends To{constructor(e,s,i){super(e,s,yx(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new si(this.firestore,null,new Ot(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function Ix(t,e,...s){if(t=Ye(t),arguments.length===1&&(e=hx.newId()),jx("doc","path",e),t instanceof No){const i=Ke.fromString(e,...s);return Rc(i),new si(t,null,new Ot(i))}{if(!(t instanceof si||t instanceof sr))throw new xe(ye.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ke.fromString(e,...s));return Rc(i),new si(t.firestore,t instanceof sr?t.converter:null,new Ot(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="AsyncQueue";class Mc{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new vx(this,"async_queue_retry"),this.rc=()=>{const i=va();i&&at(Fc,"Visibility state changed to "+i.visibilityState),this.x_.b_()},this.sc=e;const s=va();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const s=va();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const s=new Gi;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!px(e))throw e;at(Fc,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const s=this.sc.then(()=>(this.ec=!0,e().catch(i=>{throw this.Xu=i,this.ec=!1,ch("INTERNAL UNHANDLED ERROR: ",Lc(i)),i}).then(i=>(this.ec=!1,i))));return this.sc=s,s}enqueueAfterDelay(e,s,i){this.oc(),this.nc.indexOf(e)>-1&&(s=0);const n=_o.createAndSchedule(this,e,s,i,o=>this.uc(o));return this.Zu.push(n),n}oc(){this.Xu&&ln(47125,{cc:Lc(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const s of this.Zu)if(s.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((s,i)=>s.targetTimeMs-i.targetTimeMs);for(const s of this.Zu)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const s=this.Zu.indexOf(e);this.Zu.splice(s,1)}}function Lc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ex extends No{constructor(e,s,i,n){super(e,s,i,n),this.type="firestore",this._queue=new Mc,this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Mc(e),this._firestoreClient=void 0,await e}}}function Sx(t,e){const s=typeof t=="object"?t:dr(),i=typeof t=="string"?t:za,n=Vt(s,"firestore").getImmediate({identifier:i});if(!n._initialized){const o=fo("firestore");o&&kx(n,...o)}return n}(function(e,s=!0){(function(n){ur=n})(Ps),Je(new He("firestore",(i,{instanceIdentifier:n,options:o})=>{const l=i.getProvider("app").getImmediate(),d=new Ex(new ax(i.getProvider("auth-internal")),new cx(l,i.getProvider("app-check-internal")),function(f,m){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new xe(ye.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cn(f.options.projectId,m)}(l,n),l);return o=Object.assign({useFetchStreams:s},o),d._setSettings(o),d},"PUBLIC").setMultipleInstances(!0)),Ee(Tc,kc,e),Ee(Tc,kc,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ax{constructor(e,s,i,n){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ge(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=s.getImmediate({optional:!0}),this.messaging=i.getImmediate({optional:!0}),this.auth||s.get().then(o=>this.auth=o,()=>{}),this.messaging||i.get().then(o=>this.messaging=o,()=>{}),this.appCheck||n==null||n.get().then(o=>this.appCheck=o,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const s=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return s.error?null:s.token}return null}async getContext(e){const s=await this.getAuthToken(),i=await this.getMessagingToken(),n=await this.getAppCheckToken(e);return{authToken:s,messagingToken:i,appCheckToken:n}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="us-central1";class Cx{constructor(e,s,i,n,o=qa,l=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new Ax(e,s,i,n),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(o);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=qa}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(e){const s=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${s}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${s}.cloudfunctions.net/${e}`}}function Px(t,e,s){const i=yi(e);t.emulatorOrigin=`http${i?"s":""}://${e}:${s}`,i&&(An(t.emulatorOrigin),Cn("Functions",!0))}const Uc="@firebase/functions",Vc="0.12.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx="auth-internal",Ox="app-check-internal",Dx="messaging-internal";function Fx(t){const e=(s,{instanceIdentifier:i})=>{const n=s.getProvider("app").getImmediate(),o=s.getProvider(Rx),l=s.getProvider(Dx),d=s.getProvider(Ox);return new Cx(n,o,l,d,i)};Je(new He(mh,e,"PUBLIC").setMultipleInstances(!0)),Ee(Uc,Vc,t),Ee(Uc,Vc,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t=dr(),e=qa){const i=Vt(Ye(t),mh).getImmediate({identifier:e}),n=fo("functions");return n&&Lx(i,...n),i}function Lx(t,e,s){Px(Ye(t),e,s)}Fx();function ko(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(t);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(t,i[n])&&(s[i[n]]=t[i[n]]);return s}function fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ux=fh,ph=new Cs("auth","Firebase",fh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new Pn("@firebase/auth");function Vx(t,...e){dn.logLevel<=re.WARN&&dn.warn(`Auth (${Ps}): ${t}`,...e)}function Wr(t,...e){dn.logLevel<=re.ERROR&&dn.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw Io(t,...e)}function vt(t,...e){return Io(t,...e)}function gh(t,e,s){const i=Object.assign(Object.assign({},Ux()),{[e]:s});return new Cs("auth","Firebase",i).create(e,{appName:t.name})}function ks(t){return gh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Io(t,...e){if(typeof t!="string"){const s=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(s,...i)}return ph.create(t,...e)}function G(t,e,...s){if(!t)throw Io(e,...s)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wr(e),new Error(e)}function Ut(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $x(){return $c()==="http:"||$c()==="https:"}function $c(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($x()||Pu()||"connection"in navigator)?navigator.onLine:!0}function Hx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,s){this.shortDelay=e,this.longDelay=s,Ut(s>e,"Short delay should be less than long delay!"),this.isMobile=mg()||pg()}get(){return Bx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:s}=t.emulator;return e?`${s}${e.startsWith("/")?e.slice(1):e}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{static initialize(e,s,i){this.fetchImpl=e,s&&(this.headersImpl=s),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wx=new hr(3e4,6e4);function So(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xi(t,e,s,i,n={}){return xh(t,n,async()=>{let o={},l={};i&&(e==="GET"?l=i:o={body:JSON.stringify(i)});const d=cr(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const f=Object.assign({method:e,headers:h},o);return fg()||(f.referrerPolicy="no-referrer"),t.emulatorConfig&&yi(t.emulatorConfig.host)&&(f.credentials="include"),yh.fetch()(await bh(t,t.config.apiHost,s,d),f)})}async function xh(t,e,s){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},zx),e);try{const n=new Gx(t),o=await Promise.race([s(),n.promise]);n.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Vr(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const d=o.ok?l.errorMessage:l.error.message,[h,f]=d.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vr(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw Vr(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw Vr(t,"user-disabled",l);const m=i[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw gh(t,m,f);Lt(t,m)}}catch(n){if(n instanceof Qe)throw n;Lt(t,"network-request-failed",{message:String(n)})}}async function Kx(t,e,s,i,n={}){const o=await xi(t,e,s,i,n);return"mfaPendingCredential"in o&&Lt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function bh(t,e,s,i){const n=`${e}${s}?${i}`,o=t,l=o.config.emulator?Eo(t.config,n):`${t.config.apiScheme}://${n}`;return qx.includes(s)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(l).toString():l}class Gx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((s,i)=>{this.timer=setTimeout(()=>i(vt(this.auth,"network-request-failed")),Wx.get())})}}function Vr(t,e,s){const i={appName:t.name};s.email&&(i.email=s.email),s.phoneNumber&&(i.phoneNumber=s.phoneNumber);const n=vt(t,e,i);return n.customData._tokenResponse=s,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e){return xi(t,"POST","/v1/accounts:delete",e)}async function un(t,e){return xi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qx(t,e=!1){const s=Ye(t),i=await s.getIdToken(e),n=Ao(i);G(n&&n.exp&&n.auth_time&&n.iat,s.auth,"internal-error");const o=typeof n.firebase=="object"?n.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:n,token:i,authTime:Ji(wa(n.auth_time)),issuedAtTime:Ji(wa(n.iat)),expirationTime:Ji(wa(n.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function wa(t){return Number(t)*1e3}function Ao(t){const[e,s,i]=t.split(".");if(e===void 0||s===void 0||i===void 0)return Wr("JWT malformed, contained fewer than 3 sections"),null;try{const n=Iu(s);return n?JSON.parse(n):(Wr("Failed to decode base64 JWT payload"),null)}catch(n){return Wr("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function Bc(t){const e=Ao(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(t,e,s=!1){if(s)return e;try{return await e}catch(i){throw i instanceof Qe&&Yx(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Yx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var s;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const n=((s=this.user.stsTokenManager.expirationTime)!==null&&s!==void 0?s:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const s=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},s)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,s){this.createdAt=e,this.lastLoginAt=s,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(t){var e;const s=t.auth,i=await t.getIdToken(),n=await ir(t,un(s,{idToken:i}));G(n==null?void 0:n.users.length,s,"internal-error");const o=n.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?vh(o.providerUserInfo):[],d=eb(t.providerData,l),h=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(d!=null&&d.length),m=h?f:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:d,metadata:new Ka(o.createdAt,o.lastLoginAt),isAnonymous:m};Object.assign(t,y)}async function Zx(t){const e=Ye(t);await hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eb(t,e){return[...t.filter(i=>!e.some(n=>n.providerId===i.providerId)),...e]}function vh(t){return t.map(e=>{var{providerId:s}=e,i=ko(e,["providerId"]);return{providerId:s,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){const s=await xh(t,{},async()=>{const i=cr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:o}=t.config,l=await bh(t,n,"/v1/token",`key=${o}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",yh.fetch()(l,{method:"POST",headers:d,body:i})});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function sb(t,e){return xi(t,"POST","/v2/accounts:revokeToken",So(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const s="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,s)}updateFromIdToken(e){G(e.length!==0,"internal-error");const s=Bc(e);this.updateTokensAndExpiration(e,null,s)}async getToken(e,s=!1){return!s&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,s){const{accessToken:i,refreshToken:n,expiresIn:o}=await tb(e,s);this.updateTokensAndExpiration(i,n,Number(o))}updateTokensAndExpiration(e,s,i){this.refreshToken=s||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,s){const{refreshToken:i,accessToken:n,expirationTime:o}=s,l=new ii;return i&&(G(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),n&&(G(typeof n=="string","internal-error",{appName:e}),l.accessToken=n),o&&(G(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:s,auth:i,stsTokenManager:n}=e,o=ko(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=s,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ka(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const s=await ir(this,this.stsTokenManager.getToken(this.auth,e));return G(s,this.auth,"internal-error"),this.accessToken!==s&&(this.accessToken=s,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),s}getIdTokenResult(e){return Qx(this,e)}reload(){return Zx(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(s=>Object.assign({},s)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const s=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return s.metadata._copy(this.metadata),s}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,s=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),s&&await hn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(ks(this.auth));const e=await this.getIdToken();return await ir(this,Jx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,s){var i,n,o,l,d,h,f,m;const y=(i=s.displayName)!==null&&i!==void 0?i:void 0,g=(n=s.email)!==null&&n!==void 0?n:void 0,T=(o=s.phoneNumber)!==null&&o!==void 0?o:void 0,x=(l=s.photoURL)!==null&&l!==void 0?l:void 0,j=(d=s.tenantId)!==null&&d!==void 0?d:void 0,S=(h=s._redirectEventId)!==null&&h!==void 0?h:void 0,z=(f=s.createdAt)!==null&&f!==void 0?f:void 0,F=(m=s.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:H,emailVerified:W,isAnonymous:K,providerData:Y,stsTokenManager:E}=s;G(H&&E,e,"internal-error");const w=ii.fromJSON(this.name,E);G(typeof H=="string",e,"internal-error"),Kt(y,e.name),Kt(g,e.name),G(typeof W=="boolean",e,"internal-error"),G(typeof K=="boolean",e,"internal-error"),Kt(T,e.name),Kt(x,e.name),Kt(j,e.name),Kt(S,e.name),Kt(z,e.name),Kt(F,e.name);const b=new ot({uid:H,auth:e,email:g,emailVerified:W,displayName:y,isAnonymous:K,photoURL:x,phoneNumber:T,tenantId:j,stsTokenManager:w,createdAt:z,lastLoginAt:F});return Y&&Array.isArray(Y)&&(b.providerData=Y.map(k=>Object.assign({},k))),S&&(b._redirectEventId=S),b}static async _fromIdTokenResponse(e,s,i=!1){const n=new ii;n.updateFromServerResponse(s);const o=new ot({uid:s.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await hn(o),o}static async _fromGetAccountInfoResponse(e,s,i){const n=s.users[0];G(n.localId!==void 0,"internal-error");const o=n.providerUserInfo!==void 0?vh(n.providerUserInfo):[],l=!(n.email&&n.passwordHash)&&!(o!=null&&o.length),d=new ii;d.updateFromIdToken(i);const h=new ot({uid:n.localId,auth:e,stsTokenManager:d,isAnonymous:l}),f={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:o,metadata:new Ka(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=new Map;function Ft(t){Ut(t instanceof Function,"Expected a class definition");let e=Hc.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,s){this.storage[e]=s}async _get(e){const s=this.storage[e];return s===void 0?null:s}async _remove(e){delete this.storage[e]}_addListener(e,s){}_removeListener(e,s){}}wh.type="NONE";const zc=wh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(t,e,s){return`firebase:${t}:${e}:${s}`}class ri{constructor(e,s,i){this.persistence=e,this.auth=s,this.userKey=i;const{config:n,name:o}=this.auth;this.fullUserKey=Kr(this.userKey,n.apiKey,o),this.fullPersistenceKey=Kr("persistence",n.apiKey,o),this.boundEventHandler=s._onStorageEvent.bind(s),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const s=await un(this.auth,{idToken:e}).catch(()=>{});return s?ot._fromGetAccountInfoResponse(this.auth,s,e):null}return ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const s=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,s)return this.setCurrentUser(s)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,s,i="authUser"){if(!s.length)return new ri(Ft(zc),e,i);const n=(await Promise.all(s.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=n[0]||Ft(zc);const l=Kr(i,e.config.apiKey,e.name);let d=null;for(const f of s)try{const m=await f._get(l);if(m){let y;if(typeof m=="string"){const g=await un(e,{idToken:m}).catch(()=>{});if(!g)break;y=await ot._fromGetAccountInfoResponse(e,g,m)}else y=ot._fromJSON(e,m);f!==o&&(d=y),o=f;break}}catch{}const h=n.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new ri(o,e,i):(o=h[0],d&&await o._set(l,d.toJSON()),await Promise.all(s.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new ri(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Th(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ih(e))return"Blackberry";if(Eh(e))return"Webos";if(_h(e))return"Safari";if((e.includes("chrome/")||Nh(e))&&!e.includes("edge/"))return"Chrome";if(kh(e))return"Android";{const s=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(s);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function jh(t=Fe()){return/firefox\//i.test(t)}function _h(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nh(t=Fe()){return/crios\//i.test(t)}function Th(t=Fe()){return/iemobile/i.test(t)}function kh(t=Fe()){return/android/i.test(t)}function Ih(t=Fe()){return/blackberry/i.test(t)}function Eh(t=Fe()){return/webos/i.test(t)}function Co(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ib(t=Fe()){var e;return Co(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rb(){return gg()&&document.documentMode===10}function Sh(t=Fe()){return Co(t)||kh(t)||Eh(t)||Ih(t)||/windows phone/i.test(t)||Th(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t,e=[]){let s;switch(t){case"Browser":s=qc(Fe());break;case"Worker":s=`${qc(Fe())}-${t}`;break;default:s=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${s}/JsCore/${Ps}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,s){const i=o=>new Promise((l,d)=>{try{const h=e(o);l(h)}catch(h){d(h)}});i.onAbort=s,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const n of s)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(t,e={}){return xi(t,"GET","/v2/passwordPolicy",So(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=6;class lb{constructor(e){var s,i,n,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(s=l.minPasswordLength)!==null&&s!==void 0?s:ob,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var s,i,n,o,l,d;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(s=h.meetsMinPasswordLength)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(i=h.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(n=h.containsLowercaseLetter)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(d=h.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),h}validatePasswordLengthOptions(e,s){const i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(s.meetsMinPasswordLength=e.length>=i),n&&(s.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,s){this.updatePasswordCharacterOptionsStatuses(s,!1,!1,!1,!1);let i;for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(s,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,s,i,n,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=s)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,s,i,n){this.app=e,this.heartbeatServiceProvider=s,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wc(this),this.idTokenSubscription=new Wc(this),this.beforeStateQueue=new nb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ph,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,s){return s&&(this._popupRedirectResolver=Ft(s)),this._initializationPromise=this.queue(async()=>{var i,n,o;if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(s),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const s=await un(this,{idToken:e}),i=await ot._fromGetAccountInfoResponse(this,s,e);await this.directlySetCurrentUser(i)}catch(s){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",s),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ge(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let n=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId,d=n==null?void 0:n._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===d)&&(h!=null&&h.user)&&(n=h.user,o=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(n)}catch(l){n=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let s=null;try{s=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return s}async reloadAndSetCurrentUserOrClear(e){try{await hn(e)}catch(s){if((s==null?void 0:s.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(ks(this));const s=e?Ye(e):null;return s&&G(s.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(s&&s._clone(this))}async _updateCurrentUser(e,s=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),s||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(ks(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(ks(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const s=this._getPasswordPolicyInternal();return s.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):s.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ab(this),s=new lb(e);this.tenantId===null?this._projectPasswordPolicy=s:this._tenantPasswordPolicies[this.tenantId]=s}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,s,i){return this.registerStateListener(this.authStateSubscription,e,s,i)}beforeAuthStateChanged(e,s){return this.beforeStateQueue.pushCallback(e,s)}onIdTokenChanged(e,s,i){return this.registerStateListener(this.idTokenSubscription,e,s,i)}authStateReady(){return new Promise((e,s)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},s)}})}async revokeAccessToken(e){if(this.currentUser){const s=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:s};this.tenantId!=null&&(i.tenantId=this.tenantId),await sb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,s){const i=await this.getOrInitRedirectPersistenceManager(s);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const s=e&&Ft(e)||this._popupRedirectResolver;G(s,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[Ft(s._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var s,i;return this._isInitialized&&await this.queue(async()=>{}),((s=this._currentUser)===null||s===void 0?void 0:s._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,s;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(s=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&s!==void 0?s:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,s,i,n){if(this._deleted)return()=>{};const o=typeof s=="function"?s:s.next.bind(s);let l=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(d,this,"internal-error"),d.then(()=>{l||o(this.currentUser)}),typeof s=="function"){const h=e.addObserver(s,i,n);return()=>{l=!0,h()}}else{const h=e.addObserver(s);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ah(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const s={"X-Client-Version":this.clientVersion};this.app.options.appId&&(s["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(s["X-Firebase-Client"]=i);const n=await this._getAppCheckToken();return n&&(s["X-Firebase-AppCheck"]=n),s}async _getAppCheckToken(){var e;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const s=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return s!=null&&s.error&&Vx(`Error while retrieving App Check token: ${s.error}`),s==null?void 0:s.token}}function Po(t){return Ye(t)}class Wc{constructor(e){this.auth=e,this.observer=null,this.addObserver=jg(s=>this.observer=s)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function db(t){Ro=t}function ub(t){return Ro.loadJS(t)}function hb(){return Ro.gapiScript}function mb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t,e){const s=Vt(t,"auth");if(s.isInitialized()){const n=s.getImmediate(),o=s.getOptions();if(ls(o,e??{}))return n;Lt(n,"already-initialized")}return s.initialize({options:e})}function pb(t,e){const s=(e==null?void 0:e.persistence)||[],i=(Array.isArray(s)?s:[s]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gb(t,e,s){const i=Po(t);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const n=!1,o=Ch(e),{host:l,port:d}=yb(e),h=d===null?"":`:${d}`,f={url:`${o}//${l}${h}/`},m=Object.freeze({host:l,port:d,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(ls(f,i.config.emulator)&&ls(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=f,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,yi(l)?(An(`${o}//${l}${h}`),Cn("Auth",!0)):xb()}function Ch(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yb(t){const e=Ch(t),s=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!s)return{host:"",port:null};const i=s[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(i);if(n){const o=n[1];return{host:o,port:Kc(i.substr(o.length+1))}}else{const[o,l]=i.split(":");return{host:o,port:Kc(l)}}}function Kc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xb(){function t(){const e=document.createElement("p"),s=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",s.position="fixed",s.width="100%",s.backgroundColor="#ffffff",s.border=".1em solid #000000",s.color="#b50000",s.bottom="0px",s.left="0px",s.margin="0px",s.zIndex="10000",s.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,s){this.providerId=e,this.signInMethod=s}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,s){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return Kx(t,"POST","/v1/accounts:signInWithIdp",So(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="http://localhost";class As extends Ph{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const s=new As(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(s.idToken=e.idToken),e.accessToken&&(s.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(s.nonce=e.nonce),e.pendingToken&&(s.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(s.accessToken=e.oauthToken,s.secret=e.oauthTokenSecret):Lt("argument-error"),s}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const s=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:n}=s,o=ko(s,["providerId","signInMethod"]);if(!i||!n)return null;const l=new As(i,n);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const s=this.buildRequest();return ni(e,s)}_linkToIdToken(e,s){const i=this.buildRequest();return i.idToken=s,ni(e,i)}_getReauthenticationResolver(e){const s=this.buildRequest();return s.autoCreate=!1,ni(e,s)}buildRequest(){const e={requestUri:bb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const s={};this.idToken&&(s.id_token=this.idToken),this.accessToken&&(s.access_token=this.accessToken),this.secret&&(s.oauth_token_secret=this.secret),s.providerId=this.providerId,this.nonce&&!this.pendingToken&&(s.nonce=this.nonce),e.postBody=cr(s)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Rh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends mr{constructor(){super("facebook.com")}static credential(e){return As._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,s){return As._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:s})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:s,oauthAccessToken:i}=e;if(!s&&!i)return null;try{return Qt.credential(s,i)}catch{return null}}}Qt.GOOGLE_SIGN_IN_METHOD="google.com";Qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends mr{constructor(){super("github.com")}static credential(e){return As._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends mr{constructor(){super("twitter.com")}static credential(e,s){return As._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:s})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:s,oauthTokenSecret:i}=e;if(!s||!i)return null;try{return Xt.credential(s,i)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,s,i,n=!1){const o=await ot._fromIdTokenResponse(e,i,n),l=Gc(i);return new gi({user:o,providerId:l,_tokenResponse:i,operationType:s})}static async _forOperation(e,s,i){await e._updateTokensIfNecessary(i,!0);const n=Gc(i);return new gi({user:e,providerId:n,_tokenResponse:i,operationType:s})}}function Gc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Qe{constructor(e,s,i,n){var o;super(s.code,s.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,mn.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:s.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,s,i,n){return new mn(e,s,i,n)}}function Oh(t,e,s,i){return(e==="reauthenticate"?s._getReauthenticationResolver(t):s._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?mn._fromErrorAndOperation(t,o,e,i):o})}async function vb(t,e,s=!1){const i=await ir(t,e._linkToIdToken(t.auth,await t.getIdToken()),s);return gi._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wb(t,e,s=!1){const{auth:i}=t;if(Ge(i.app))return Promise.reject(ks(i));const n="reauthenticate";try{const o=await ir(t,Oh(i,n,e,t),s);G(o.idToken,i,"internal-error");const l=Ao(o.idToken);G(l,i,"internal-error");const{sub:d}=l;return G(t.uid===d,i,"user-mismatch"),gi._forOperation(t,n,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Lt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e,s=!1){if(Ge(t.app))return Promise.reject(ks(t));const i="signIn",n=await Oh(t,i,e),o=await gi._fromIdTokenResponse(t,i,n);return s||await t._updateCurrentUser(o.user),o}function _b(t,e,s,i){return Ye(t).onIdTokenChanged(e,s,i)}function Nb(t,e,s){return Ye(t).beforeAuthStateChanged(e,s)}const fn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,s){this.storageRetriever=e,this.type=s}_isAvailable(){try{return this.storage?(this.storage.setItem(fn,"1"),this.storage.removeItem(fn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,s){return this.storage.setItem(e,JSON.stringify(s)),Promise.resolve()}_get(e){const s=this.storage.getItem(e);return Promise.resolve(s?JSON.parse(s):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb=1e3,kb=10;class Fh extends Dh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,s)=>this.onStorageEvent(e,s),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const s of Object.keys(this.listeners)){const i=this.storage.getItem(s),n=this.localCache[s];i!==n&&e(s,n,i)}}onStorageEvent(e,s=!1){if(!e.key){this.forAllChangedKeys((l,d,h)=>{this.notifyListeners(l,h)});return}const i=e.key;s?this.detachListener():this.stopPolling();const n=()=>{const l=this.storage.getItem(i);!s&&this.localCache[i]===l||this.notifyListeners(i,l)},o=this.storage.getItem(i);rb()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,kb):n()}notifyListeners(e,s){this.localCache[e]=s;const i=this.listeners[e];if(i)for(const n of Array.from(i))n(s&&JSON.parse(s))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,s,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:s,newValue:i}),!0)})},Tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,s){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,s){await super._set(e,s),this.localCache[e]=JSON.stringify(s)}async _get(e){const s=await super._get(e);return this.localCache[e]=JSON.stringify(s),s}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fh.type="LOCAL";const Ib=Fh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh extends Dh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,s){}_removeListener(e,s){}}Mh.type="SESSION";const Lh=Mh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(s){return{fulfilled:!1,reason:s}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const s=this.receivers.find(n=>n.isListeningto(e));if(s)return s;const i=new Dn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const s=e,{eventId:i,eventType:n,data:o}=s.data,l=this.handlersMap[n];if(!(l!=null&&l.size))return;s.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const d=Array.from(l).map(async f=>f(s.origin,o)),h=await Eb(d);s.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:h})}_subscribe(e,s){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(s)}_unsubscribe(e,s){this.handlersMap[e]&&s&&this.handlersMap[e].delete(s),(!s||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t="",e=10){let s="";for(let i=0;i<e;i++)s+=Math.floor(Math.random()*10);return t+s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,s,i=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let o,l;return new Promise((d,h)=>{const f=Oo("",20);n.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},i);l={messageChannel:n,onMessage(y){const g=y;if(g.data.eventId===f)switch(g.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(g.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),n.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:s},[n.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function Ab(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Cb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rb(){return Uh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="firebaseLocalStorageDb",Ob=1,pn="firebaseLocalStorage",$h="fbase_key";class fr{constructor(e){this.request=e}toPromise(){return new Promise((e,s)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{s(this.request.error)})})}}function Fn(t,e){return t.transaction([pn],e?"readwrite":"readonly").objectStore(pn)}function Db(){const t=indexedDB.deleteDatabase(Vh);return new fr(t).toPromise()}function Ga(){const t=indexedDB.open(Vh,Ob);return new Promise((e,s)=>{t.addEventListener("error",()=>{s(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(pn,{keyPath:$h})}catch(n){s(n)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(pn)?e(i):(i.close(),await Db(),e(await Ga()))})})}async function Jc(t,e,s){const i=Fn(t,!0).put({[$h]:e,value:s});return new fr(i).toPromise()}async function Fb(t,e){const s=Fn(t,!1).get(e),i=await new fr(s).toPromise();return i===void 0?null:i.value}function Qc(t,e){const s=Fn(t,!0).delete(e);return new fr(s).toPromise()}const Mb=800,Lb=3;class Bh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ga(),this.db)}async _withRetries(e){let s=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(s++>Lb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance(Rb()),this.receiver._subscribe("keyChanged",async(e,s)=>({keyProcessed:(await this._poll()).includes(s.key)})),this.receiver._subscribe("ping",async(e,s)=>["keyChanged"])}async initializeSender(){var e,s;if(this.activeServiceWorker=await Cb(),!this.activeServiceWorker)return;this.sender=new Sb(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((s=i[0])===null||s===void 0)&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ga();return await Jc(e,fn,"1"),await Qc(e,fn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,s){return this._withPendingWrite(async()=>(await this._withRetries(i=>Jc(i,e,s)),this.localCache[e]=s,this.notifyServiceWorker(e)))}async _get(e){const s=await this._withRetries(i=>Fb(i,e));return this.localCache[e]=s,s}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Qc(s,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(n=>{const o=Fn(n,!1).getAll();return new fr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const s=[],i=new Set;if(e.length!==0)for(const{fbase_key:n,value:o}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(o)&&(this.notifyListeners(n,o),s.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!i.has(n)&&(this.notifyListeners(n,null),s.push(n));return s}notifyListeners(e,s){this.localCache[e]=s;const i=this.listeners[e];if(i)for(const n of Array.from(i))n(s)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,s){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(s)}_removeListener(e,s){this.listeners[e]&&(this.listeners[e].delete(s),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bh.type="LOCAL";const Ub=Bh;new hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t,e){return e?Ft(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Ph{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,s){return ni(e,this._buildIdpRequest(s))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const s={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(s.idToken=e),s}}function $b(t){return jb(t.auth,new Do(t),t.bypassAuthState)}function Bb(t){const{auth:e,user:s}=t;return G(s,e,"internal-error"),wb(s,new Do(t),t.bypassAuthState)}async function Hb(t){const{auth:e,user:s}=t;return G(s,e,"internal-error"),vb(s,new Do(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,s,i,n,o=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(s)?s:[s]}execute(){return new Promise(async(e,s)=>{this.pendingPromise={resolve:e,reject:s};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:s,sessionId:i,postBody:n,tenantId:o,error:l,type:d}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:s,sessionId:i,tenantId:o||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $b;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return Bb;default:Lt(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=new hr(2e3,1e4);class Ys extends Hh{constructor(e,s,i,n,o){super(e,s,n,o),this.provider=i,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(s=>{this.reject(s)}),this.resolver._isIframeWebStorageSupported(this.auth,s=>{s||this.reject(vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var s,i;if(!((i=(s=this.authWindow)===null||s===void 0?void 0:s.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zb.get())};e()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="pendingRedirect",Gr=new Map;class Wb extends Hh{constructor(e,s,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],s,void 0,i),this.eventId=null}async execute(){let e=Gr.get(this.auth._key());if(!e){try{const i=await Kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(s){e=()=>Promise.reject(s)}Gr.set(this.auth._key(),e)}return this.bypassAuthState||Gr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const s=await this.auth._redirectUserForId(e.eventId);if(s)return this.user=s,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kb(t,e){const s=Qb(e),i=Jb(t);if(!await i._isAvailable())return!1;const n=await i._get(s)==="true";return await i._remove(s),n}function Gb(t,e){Gr.set(t._key(),e)}function Jb(t){return Ft(t._redirectPersistence)}function Qb(t){return Kr(qb,t.config.apiKey,t.name)}async function Yb(t,e,s=!1){if(Ge(t.app))return Promise.reject(ks(t));const i=Po(t),n=Vb(i,e),l=await new Wb(i,n,s).execute();return l&&!s&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=10*60*1e3;class Zb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let s=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(s=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ev(e)||(this.hasHandledPotentialRedirect=!0,s||(this.queuedRedirectEvent=e,s=!0)),s}sendToConsumer(e,s){var i;if(e.error&&!zh(e)){const n=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";s.onError(vt(this.auth,n))}else s.onAuthEvent(e)}isEventForConsumer(e,s){const i=s.eventId===null||!!e.eventId&&e.eventId===s.eventId;return s.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yc(e))}saveEventToCache(e){this.cachedEventUids.add(Yc(e)),this.lastProcessedEventTime=Date.now()}}function Yc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zh({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ev(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zh(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(t,e={}){return xi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iv=/^https?/;async function rv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tv(t);for(const s of e)try{if(nv(s))return}catch{}Lt(t,"unauthorized-domain")}function nv(t){const e=Wa(),{protocol:s,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&i===""?s==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):s==="chrome-extension:"&&l.hostname===i}if(!iv.test(s))return!1;if(sv.test(t))return i===t;const n=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new hr(3e4,6e4);function Xc(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let s=0;s<t.CP.length;s++)t.CP[s]=null}}function ov(t){return new Promise((e,s)=>{var i,n,o;function l(){Xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xc(),s(vt(t,"network-request-failed"))},timeout:av.get()})}if(!((n=(i=wt().gapi)===null||i===void 0?void 0:i.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((o=wt().gapi)===null||o===void 0)&&o.load)l();else{const d=mb("iframefcb");return wt()[d]=()=>{gapi.load?l():s(vt(t,"network-request-failed"))},ub(`${hb()}?onload=${d}`).catch(h=>s(h))}}).catch(e=>{throw Jr=null,e})}let Jr=null;function lv(t){return Jr=Jr||ov(t),Jr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new hr(5e3,15e3),dv="__/auth/iframe",uv="emulator/auth/iframe",hv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fv(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const s=e.emulator?Eo(e,uv):`https://${t.config.authDomain}/${dv}`,i={apiKey:e.apiKey,appName:t.name,v:Ps},n=mv.get(t.config.apiHost);n&&(i.eid=n);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${s}?${cr(i).slice(1)}`}async function pv(t){const e=await lv(t),s=wt().gapi;return G(s,t,"internal-error"),e.open({where:document.body,url:fv(t),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hv,dontclear:!0},i=>new Promise(async(n,o)=>{await i.restyle({setHideOnLeave:!1});const l=vt(t,"network-request-failed"),d=wt().setTimeout(()=>{o(l)},cv.get());function h(){wt().clearTimeout(d),n(i)}i.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yv=500,xv=600,bv="_blank",vv="http://localhost";class Zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wv(t,e,s,i=yv,n=xv){const o=Math.max((window.screen.availHeight-n)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const h=Object.assign(Object.assign({},gv),{width:i.toString(),height:n.toString(),top:o,left:l}),f=Fe().toLowerCase();s&&(d=Nh(f)?bv:s),jh(f)&&(e=e||vv,h.scrollbars="yes");const m=Object.entries(h).reduce((g,[T,x])=>`${g}${T}=${x},`,"");if(ib(f)&&d!=="_self")return jv(e||"",d),new Zc(null);const y=window.open(e||"",d,m);G(y,t,"popup-blocked");try{y.focus()}catch{}return new Zc(y)}function jv(t,e){const s=document.createElement("a");s.href=t,s.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="__/auth/handler",Nv="emulator/auth/handler",Tv=encodeURIComponent("fac");async function ed(t,e,s,i,n,o){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:s,redirectUrl:i,v:Ps,eventId:n};if(e instanceof Rh){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",wg(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))l[m]=y}if(e instanceof mr){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(l.scopes=m.join(","))}t.tenantId&&(l.tid=t.tenantId);const d=l;for(const m of Object.keys(d))d[m]===void 0&&delete d[m];const h=await t._getAppCheckToken(),f=h?`#${Tv}=${encodeURIComponent(h)}`:"";return`${kv(t)}?${cr(d).slice(1)}${f}`}function kv({config:t}){return t.emulator?Eo(t,Nv):`https://${t.authDomain}/${_v}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class Iv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lh,this._completeRedirectFn=Yb,this._overrideRedirectResult=Gb}async _openPopup(e,s,i,n){var o;Ut((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await ed(e,s,i,Wa(),n);return wv(e,l,Oo())}async _openRedirect(e,s,i,n){await this._originValidation(e);const o=await ed(e,s,i,Wa(),n);return Ab(o),new Promise(()=>{})}_initialize(e){const s=e._key();if(this.eventManagers[s]){const{manager:n,promise:o}=this.eventManagers[s];return n?Promise.resolve(n):(Ut(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[s]={promise:i},i.catch(()=>{delete this.eventManagers[s]}),i}async initAndGetManager(e){const s=await pv(e),i=new Zb(e);return s.register("authEvent",n=>(G(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:i.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=s,i}_isIframeWebStorageSupported(e,s){this.iframes[e._key()].send(ja,{type:ja},n=>{var o;const l=(o=n==null?void 0:n[0])===null||o===void 0?void 0:o[ja];l!==void 0&&s(!!l),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const s=e._key();return this.originValidationPromises[s]||(this.originValidationPromises[s]=rv(e)),this.originValidationPromises[s]}get _shouldInitProactively(){return Sh()||_h()||Co()}}const Ev=Iv;var td="@firebase/auth",sd="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const s=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,s),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const s=this.internalListeners.get(e);s&&(this.internalListeners.delete(e),s(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cv(t){Je(new He("auth",(e,{options:s})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:d}=i.options;G(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const h={apiKey:l,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ah(t)},f=new cb(i,n,o,h);return pb(f,s),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,s,i)=>{e.getProvider("auth-internal").initialize()})),Je(new He("auth-internal",e=>{const s=Po(e.getProvider("auth").getImmediate());return(i=>new Sv(i))(s)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ee(td,sd,Av(t)),Ee(td,sd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=5*60,Rv=Au("authIdTokenMaxAge")||Pv;let id=null;const Ov=t=>async e=>{const s=e&&await e.getIdTokenResult(),i=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(i&&i>Rv)return;const n=s==null?void 0:s.token;id!==n&&(id=n,await fetch(t,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Dv(t=dr()){const e=Vt(t,"auth");if(e.isInitialized())return e.getImmediate();const s=fb(t,{popupRedirectResolver:Ev,persistence:[Ub,Ib,Lh]}),i=Au("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const l=Ov(o.toString());Nb(s,l,()=>l(s.currentUser)),_b(s,d=>l(d))}}const n=Eu("auth");return n&&gb(s,`http://${n}`),s}function Fv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}db({loadJS(t){return new Promise((e,s)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=n=>{const o=vt("internal-error");o.customData=n,s(o)},i.type="text/javascript",i.charset="UTF-8",Fv().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cv("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="firebasestorage.googleapis.com",Mv="storageBucket",Lv=2*60*1e3,Uv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Qe{constructor(e,s,i=0){super(_a(e),`Firebase Storage: ${s} (${_a(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _a(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var jt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(jt||(jt={}));function _a(t){return"storage/"+t}function Vv(){const t="An unknown error occurred, please check the error payload for server response.";return new Tt(jt.UNKNOWN,t)}function $v(){return new Tt(jt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bv(){return new Tt(jt.CANCELED,"User canceled the upload/download.")}function Hv(t){return new Tt(jt.INVALID_URL,"Invalid URL '"+t+"'.")}function zv(t){return new Tt(jt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rd(t){return new Tt(jt.INVALID_ARGUMENT,t)}function Wh(){return new Tt(jt.APP_DELETED,"The Firebase app was deleted.")}function qv(t){return new Tt(jt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let i;try{i=lt.makeFromUrl(e,s)}catch{return new lt(e,"")}if(i.path==="")return i;throw zv(e)}static makeFromUrl(e,s){let i=null;const n="([A-Za-z0-9.\\-_]+)";function o(W){W.path.charAt(W.path.length-1)==="/"&&(W.path_=W.path_.slice(0,-1))}const l="(/(.*))?$",d=new RegExp("^gs://"+n+l,"i"),h={bucket:1,path:3};function f(W){W.path_=decodeURIComponent(W.path)}const m="v[A-Za-z0-9_]+",y=s.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${y}/${m}/b/${n}/o${g}`,"i"),x={bucket:1,path:3},j=s===qh?"(?:storage.googleapis.com|storage.cloud.google.com)":s,S="([^?#]*)",z=new RegExp(`^https?://${j}/${n}/${S}`,"i"),H=[{regex:d,indices:h,postModify:o},{regex:T,indices:x,postModify:f},{regex:z,indices:{bucket:1,path:2},postModify:f}];for(let W=0;W<H.length;W++){const K=H[W],Y=K.regex.exec(e);if(Y){const E=Y[K.indices.bucket];let w=Y[K.indices.path];w||(w=""),i=new lt(E,w),K.postModify(i);break}}if(i==null)throw Hv(e);return i}}class Wv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e,s){let i=1,n=null,o=null,l=!1,d=0;function h(){return d===2}let f=!1;function m(...S){f||(f=!0,e.apply(null,S))}function y(S){n=setTimeout(()=>{n=null,t(T,h())},S)}function g(){o&&clearTimeout(o)}function T(S,...z){if(f){g();return}if(S){g(),m.call(null,S,...z);return}if(h()||l){g(),m.call(null,S,...z);return}i<64&&(i*=2);let H;d===1?(d=2,H=0):H=(i+Math.random())*1e3,y(H)}let x=!1;function j(S){x||(x=!0,g(),!f&&(n!==null?(S||(d=2),clearTimeout(n),y(0)):S||(d=1)))}return y(0),o=setTimeout(()=>{l=!0,j(!0)},s),j}function Gv(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){return t!==void 0}function nd(t,e,s,i){if(i<e)throw rd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>s)throw rd(`Invalid value for '${t}'. Expected ${s} or less.`)}function Qv(t){const e=encodeURIComponent;let s="?";for(const i in t)if(t.hasOwnProperty(i)){const n=e(i)+"="+e(t[i]);s=s+n+"&"}return s=s.slice(0,-1),s}var gn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gn||(gn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t,e){const s=t>=500&&t<600,n=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return s||n||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,s,i,n,o,l,d,h,f,m,y,g=!0,T=!1){this.url_=e,this.method_=s,this.headers_=i,this.body_=n,this.successCodes_=o,this.additionalRetryCodes_=l,this.callback_=d,this.errorCallback_=h,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=y,this.retry=g,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,j)=>{this.resolve_=x,this.reject_=j,this.start_()})}start_(){const e=(i,n)=>{if(n){i(!1,new $r(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const l=d=>{const h=d.loaded,f=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,f)};this.progressCallback_!==null&&o.addUploadProgressListener(l),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(l),this.pendingConnection_=null;const d=o.getErrorCode()===gn.NO_ERROR,h=o.getStatus();if(!d||Yv(h,this.additionalRetryCodes_)&&this.retry){const m=o.getErrorCode()===gn.ABORT;i(!1,new $r(!1,null,m));return}const f=this.successCodes_.indexOf(h)!==-1;i(!0,new $r(f,o))})},s=(i,n)=>{const o=this.resolve_,l=this.reject_,d=n.connection;if(n.wasSuccessCode)try{const h=this.callback_(d,d.getResponse());Jv(h)?o(h):o()}catch(h){l(h)}else if(d!==null){const h=Vv();h.serverResponse=d.getErrorText(),this.errorCallback_?l(this.errorCallback_(d,h)):l(h)}else if(n.canceled){const h=this.appDelete_?Wh():Bv();l(h)}else{const h=$v();l(h)}};this.canceled_?s(!1,new $r(!1,null,!0)):this.backoffId_=Kv(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Gv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $r{constructor(e,s,i){this.wasSuccessCode=e,this.connection=s,this.canceled=!!i}}function Zv(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ew(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tw(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sw(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iw(t,e,s,i,n,o,l=!0,d=!1){const h=Qv(t.urlParams),f=t.url+h,m=Object.assign({},t.headers);return tw(m,e),Zv(m,s),ew(m,o),sw(m,i),new Xv(f,t.method,m,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,n,l,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function nw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aw=class Ja{constructor(e,s){this._service=e,s instanceof lt?this._location=s:this._location=lt.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new Ja(e,s)}get root(){const e=new lt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nw(this._location.path)}get storage(){return this._service}get parent(){const e=rw(this._location.path);if(e===null)return null;const s=new lt(this._location.bucket,e);return new Ja(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw qv(e)}};function ad(t,e){const s=e==null?void 0:e[Mv];return s==null?null:lt.makeFromBucketSpec(s,t)}function ow(t,e,s,i={}){t.host=`${e}:${s}`;const n=yi(e);n&&(An(`https://${t.host}`),Cn("Storage",!0)),t._isUsingEmulator=!0,t._protocol=n?"https":"http";const{mockUserToken:o}=i;o&&(t._overrideAuthToken=typeof o=="string"?o:Cu(o,t.app.options.projectId))}class lw{constructor(e,s,i,n,o,l=!1){this.app=e,this._authProvider=s,this._appCheckProvider=i,this._url=n,this._firebaseVersion=o,this._isUsingEmulator=l,this._bucket=null,this._host=qh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Lv,this._maxUploadRetryTime=Uv,this._requests=new Set,n!=null?this._bucket=lt.makeFromBucketSpec(n,this._host):this._bucket=ad(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=lt.makeFromBucketSpec(this._url,e):this._bucket=ad(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){nd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){nd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new aw(this,e)}_makeRequest(e,s,i,n,o=!0){if(this._deleted)return new Wv(Wh());{const l=iw(e,this._appId,i,n,s,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,s){const[i,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,i,n).getPromise()}}const od="@firebase/storage",ld="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="storage";function cw(t=dr(),e){t=Ye(t);const i=Vt(t,Kh).getImmediate({identifier:e}),n=fo("storage");return n&&dw(i,...n),i}function dw(t,e,s,i={}){ow(t,e,s,i)}function uw(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),n=t.getProvider("app-check-internal");return new lw(s,i,n,e,Ps)}function hw(){Je(new He(Kh,uw,"PUBLIC").setMultipleInstances(!0)),Ee(od,ld,""),Ee(od,ld,"esm2017")}hw();const mw={apiKey:"AIzaSyAmViZBL6bT92MlGWIbKtm0aGF42Pp-DOk",authDomain:"princenyamadi-ed2ca.firebaseapp.com",projectId:"princenyamadi-ed2ca",storageBucket:"princenyamadi-ed2ca.firebasestorage.app",messagingSenderId:"417236117554",appId:"1:417236117554:web:29a53e5a0a81230dc3742b",measurementId:"G-R7X0JGCLP6"},le=Lu(mw),fw=Zy(le),Na=Sx(le);Mx(le);const Ta=Dv(le),cd=cw(le),pw={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyAmViZBL6bT92MlGWIbKtm0aGF42Pp-DOk",VITE_FIREBASE_APP_ID:"1:417236117554:web:29a53e5a0a81230dc3742b",VITE_FIREBASE_AUTH_DOMAIN:"princenyamadi-ed2ca.firebaseapp.com",VITE_FIREBASE_MEASUREMENT_ID:"G-R7X0JGCLP6",VITE_FIREBASE_MESSAGING_SENDER_ID:"417236117554",VITE_FIREBASE_PROJECT_ID:"princenyamadi-ed2ca",VITE_FIREBASE_STORAGE_BUCKET:"princenyamadi-ed2ca.firebasestorage.app"},gw=async()=>{console.log(`🔥 Testing Firebase Configuration...
`);const t={app:!1,analytics:!1,firestore:!1,auth:!1,storage:!1,envVars:!1};try{console.log("📱 Testing Firebase App initialization..."),le&&le.name==="[DEFAULT]"?(t.app=!0,console.log("✅ Firebase App: Initialized successfully"),console.log(`   Project ID: ${le.options.projectId}`)):console.log("❌ Firebase App: Failed to initialize"),console.log(`
🔐 Testing Environment Variables...`);const e=["VITE_FIREBASE_API_KEY","VITE_FIREBASE_AUTH_DOMAIN","VITE_FIREBASE_PROJECT_ID","VITE_FIREBASE_STORAGE_BUCKET","VITE_FIREBASE_MESSAGING_SENDER_ID","VITE_FIREBASE_APP_ID"],s=[];e.forEach(o=>{const l=pw[o];(!l||l==="undefined")&&s.push(o)}),s.length===0?(t.envVars=!0,console.log("✅ Environment Variables: All required variables are set")):(console.log("❌ Environment Variables: Missing variables:"),s.forEach(o=>{console.log(`   - ${o}`)})),console.log(`
📊 Testing Firebase Analytics...`);try{fw?(t.analytics=!0,console.log("✅ Analytics: Initialized successfully")):console.log("❌ Analytics: Failed to initialize")}catch{console.log("⚠️ Analytics: May not be available in development mode"),t.analytics=!0}console.log(`
🔐 Testing Firebase Authentication...`),Ta?(t.auth=!0,console.log("✅ Authentication: Initialized successfully"),console.log(`   Current user: ${Ta.currentUser?Ta.currentUser.email:"Not signed in"}`)):console.log("❌ Authentication: Failed to initialize"),console.log(`
📊 Testing Firestore Database...`);try{Na?(Ix(Na,"test","connection"),t.firestore=!0,console.log("✅ Firestore: Initialized successfully"),console.log(`   Database ID: ${Na.app.options.projectId}`)):console.log("❌ Firestore: Failed to initialize")}catch(o){console.log("❌ Firestore: Error -",o)}console.log(`
💾 Testing Firebase Storage...`),cd?(t.storage=!0,console.log("✅ Storage: Initialized successfully"),console.log(`   Bucket: ${cd.app.options.storageBucket}`)):console.log("❌ Storage: Failed to initialize"),console.log(`
📋 FIREBASE CONFIGURATION SUMMARY:`),console.log("=====================================");const i=Object.keys(t).length,n=Object.values(t).filter(Boolean).length;return Object.entries(t).forEach(([o,l])=>{const d=l?"✅":"❌",h=o.charAt(0).toUpperCase()+o.slice(1);console.log(`${d} ${h}`)}),console.log(`
🎯 Overall: ${n}/${i} services configured correctly`),console.log(n===i?"🎉 Firebase is fully configured and ready to use!":"⚠️ Some Firebase services need attention. Check the errors above."),t}catch(e){return console.error("💥 Firebase configuration test failed:",e),t}},yw=()=>gw(),xw=()=>{const[t,e]=M.useState(null),[s,i]=M.useState(!0);if(M.useEffect(()=>{setTimeout(async()=>{try{console.log("Starting Firebase configuration test...");const h=await yw();e(h)}catch(h){console.error("Test failed:",h)}finally{i(!1)}},1e3)},[]),s)return r.jsx("div",{className:"fixed top-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50",children:r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white"}),r.jsx("span",{children:"Testing Firebase..."})]})});if(!t)return r.jsx("div",{className:"fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50",children:r.jsx("span",{children:"Firebase test failed to run"})});const n=Object.keys(t).length,o=Object.values(t).filter(Boolean).length,l=o===n;return r.jsx("div",{className:`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-xs ${l?"bg-green-600":"bg-yellow-600"} text-white`,children:r.jsxs("div",{className:"text-sm",children:[r.jsx("div",{className:"font-semibold mb-2",children:"🔥 Firebase Status"}),r.jsx("div",{className:"text-xs space-y-1",children:Object.entries(t).map(([d,h])=>r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("span",{className:"capitalize",children:[d,":"]}),r.jsx("span",{children:h?"✅":"❌"})]},d))}),r.jsx("div",{className:"mt-2 pt-2 border-t border-white/20 text-xs",children:l?"🎉 Firebase Ready!":`⚠️ ${o}/${n} services OK`}),r.jsx("div",{className:"text-xs mt-1 opacity-75",children:"Check console for details"})]})})};var pr=t=>t.type==="checkbox",xs=t=>t instanceof Date,Re=t=>t==null;const Gh=t=>typeof t=="object";var he=t=>!Re(t)&&!Array.isArray(t)&&Gh(t)&&!xs(t),bw=t=>he(t)&&t.target?pr(t.target)?t.target.checked:t.target.value:t,vw=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,ww=(t,e)=>t.has(vw(e)),jw=t=>{const e=t.constructor&&t.constructor.prototype;return he(e)&&e.hasOwnProperty("isPrototypeOf")},Fo=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ke(t){let e;const s=Array.isArray(t),i=typeof FileList<"u"?t instanceof FileList:!1;if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Fo&&(t instanceof Blob||i))&&(s||he(t)))if(e=s?[]:{},!s&&!jw(t))e=t;else for(const n in t)t.hasOwnProperty(n)&&(e[n]=ke(t[n]));else return t;return e}var Mn=t=>Array.isArray(t)?t.filter(Boolean):[],me=t=>t===void 0,q=(t,e,s)=>{if(!e||!he(t))return s;const i=Mn(e.split(/[,[\].]+?/)).reduce((n,o)=>Re(n)?n:n[o],t);return me(i)||i===t?me(t[e])?s:t[e]:i},mt=t=>typeof t=="boolean",Mo=t=>/^\w*$/.test(t),Jh=t=>Mn(t.replace(/["|']|\]/g,"").split(/\.|\[/)),ne=(t,e,s)=>{let i=-1;const n=Mo(e)?[e]:Jh(e),o=n.length,l=o-1;for(;++i<o;){const d=n[i];let h=s;if(i!==l){const f=t[d];h=he(f)||Array.isArray(f)?f:isNaN(+n[i+1])?{}:[]}if(d==="__proto__"||d==="constructor"||d==="prototype")return;t[d]=h,t=t[d]}};const dd={BLUR:"blur",FOCUS_OUT:"focusout"},it={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},St={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ie.createContext(null);var _w=(t,e,s,i=!0)=>{const n={defaultValues:e._defaultValues};for(const o in t)Object.defineProperty(n,o,{get:()=>{const l=o;return e._proxyFormState[l]!==it.all&&(e._proxyFormState[l]=!i||it.all),t[l]}});return n};const Nw=typeof window<"u"?M.useLayoutEffect:M.useEffect;var bt=t=>typeof t=="string",Tw=(t,e,s,i,n)=>bt(t)?(i&&e.watch.add(t),q(s,t,n)):Array.isArray(t)?t.map(o=>(i&&e.watch.add(o),q(s,o))):(i&&(e.watchAll=!0),s),Qh=(t,e,s,i,n)=>e?{...s[t],types:{...s[t]&&s[t].types?s[t].types:{},[i]:n||!0}}:{},Qi=t=>Array.isArray(t)?t:[t],ud=()=>{let t=[];return{get observers(){return t},next:n=>{for(const o of t)o.next&&o.next(n)},subscribe:n=>(t.push(n),{unsubscribe:()=>{t=t.filter(o=>o!==n)}}),unsubscribe:()=>{t=[]}}},Qa=t=>Re(t)||!Gh(t);function Zt(t,e){if(Qa(t)||Qa(e))return t===e;if(xs(t)&&xs(e))return t.getTime()===e.getTime();const s=Object.keys(t),i=Object.keys(e);if(s.length!==i.length)return!1;for(const n of s){const o=t[n];if(!i.includes(n))return!1;if(n!=="ref"){const l=e[n];if(xs(o)&&xs(l)||he(o)&&he(l)||Array.isArray(o)&&Array.isArray(l)?!Zt(o,l):o!==l)return!1}}return!0}var Le=t=>he(t)&&!Object.keys(t).length,Lo=t=>t.type==="file",rt=t=>typeof t=="function",yn=t=>{if(!Fo)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Yh=t=>t.type==="select-multiple",Uo=t=>t.type==="radio",kw=t=>Uo(t)||pr(t),ka=t=>yn(t)&&t.isConnected;function Iw(t,e){const s=e.slice(0,-1).length;let i=0;for(;i<s;)t=me(t)?i++:t[e[i++]];return t}function Ew(t){for(const e in t)if(t.hasOwnProperty(e)&&!me(t[e]))return!1;return!0}function pe(t,e){const s=Array.isArray(e)?e:Mo(e)?[e]:Jh(e),i=s.length===1?t:Iw(t,s),n=s.length-1,o=s[n];return i&&delete i[o],n!==0&&(he(i)&&Le(i)||Array.isArray(i)&&Ew(i))&&pe(t,s.slice(0,-1)),t}var Xh=t=>{for(const e in t)if(rt(t[e]))return!0;return!1};function xn(t,e={}){const s=Array.isArray(t);if(he(t)||s)for(const i in t)Array.isArray(t[i])||he(t[i])&&!Xh(t[i])?(e[i]=Array.isArray(t[i])?[]:{},xn(t[i],e[i])):Re(t[i])||(e[i]=!0);return e}function Zh(t,e,s){const i=Array.isArray(t);if(he(t)||i)for(const n in t)Array.isArray(t[n])||he(t[n])&&!Xh(t[n])?me(e)||Qa(s[n])?s[n]=Array.isArray(t[n])?xn(t[n],[]):{...xn(t[n])}:Zh(t[n],Re(e)?{}:e[n],s[n]):s[n]=!Zt(t[n],e[n]);return s}var Ui=(t,e)=>Zh(t,e,xn(e));const hd={value:!1,isValid:!1},md={value:!0,isValid:!0};var em=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!me(t[0].attributes.value)?me(t[0].value)||t[0].value===""?md:{value:t[0].value,isValid:!0}:md:hd}return hd},tm=(t,{valueAsNumber:e,valueAsDate:s,setValueAs:i})=>me(t)?t:e?t===""?NaN:t&&+t:s&&bt(t)?new Date(t):i?i(t):t;const fd={isValid:!1,value:null};var sm=t=>Array.isArray(t)?t.reduce((e,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:e,fd):fd;function pd(t){const e=t.ref;return Lo(e)?e.files:Uo(e)?sm(t.refs).value:Yh(e)?[...e.selectedOptions].map(({value:s})=>s):pr(e)?em(t.refs).value:tm(me(e.value)?t.ref.value:e.value,t)}var Sw=(t,e,s,i)=>{const n={};for(const o of t){const l=q(e,o);l&&ne(n,o,l._f)}return{criteriaMode:s,names:[...t],fields:n,shouldUseNativeValidation:i}},bn=t=>t instanceof RegExp,Vi=t=>me(t)?t:bn(t)?t.source:he(t)?bn(t.value)?t.value.source:t.value:t,gd=t=>({isOnSubmit:!t||t===it.onSubmit,isOnBlur:t===it.onBlur,isOnChange:t===it.onChange,isOnAll:t===it.all,isOnTouch:t===it.onTouched});const yd="AsyncFunction";var Aw=t=>!!t&&!!t.validate&&!!(rt(t.validate)&&t.validate.constructor.name===yd||he(t.validate)&&Object.values(t.validate).find(e=>e.constructor.name===yd)),Cw=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate),xd=(t,e,s)=>!s&&(e.watchAll||e.watch.has(t)||[...e.watch].some(i=>t.startsWith(i)&&/^\.\w+/.test(t.slice(i.length))));const Yi=(t,e,s,i)=>{for(const n of s||Object.keys(t)){const o=q(t,n);if(o){const{_f:l,...d}=o;if(l){if(l.refs&&l.refs[0]&&e(l.refs[0],n)&&!i)return!0;if(l.ref&&e(l.ref,l.name)&&!i)return!0;if(Yi(d,e))break}else if(he(d)&&Yi(d,e))break}}};function bd(t,e,s){const i=q(t,s);if(i||Mo(s))return{error:i,name:s};const n=s.split(".");for(;n.length;){const o=n.join("."),l=q(e,o),d=q(t,o);if(l&&!Array.isArray(l)&&s!==o)return{name:s};if(d&&d.type)return{name:o,error:d};if(d&&d.root&&d.root.type)return{name:`${o}.root`,error:d.root};n.pop()}return{name:s}}var Pw=(t,e,s,i)=>{s(t);const{name:n,...o}=t;return Le(o)||Object.keys(o).length>=Object.keys(e).length||Object.keys(o).find(l=>e[l]===(!i||it.all))},Rw=(t,e,s)=>!t||!e||t===e||Qi(t).some(i=>i&&(s?i===e:i.startsWith(e)||e.startsWith(i))),Ow=(t,e,s,i,n)=>n.isOnAll?!1:!s&&n.isOnTouch?!(e||t):(s?i.isOnBlur:n.isOnBlur)?!t:(s?i.isOnChange:n.isOnChange)?t:!0,Dw=(t,e)=>!Mn(q(t,e)).length&&pe(t,e),Fw=(t,e,s)=>{const i=Qi(q(t,s));return ne(i,"root",e[s]),ne(t,s,i),t},Qr=t=>bt(t);function vd(t,e,s="validate"){if(Qr(t)||Array.isArray(t)&&t.every(Qr)||mt(t)&&!t)return{type:s,message:Qr(t)?t:"",ref:e}}var Gs=t=>he(t)&&!bn(t)?t:{value:t,message:""},wd=async(t,e,s,i,n,o)=>{const{ref:l,refs:d,required:h,maxLength:f,minLength:m,min:y,max:g,pattern:T,validate:x,name:j,valueAsNumber:S,mount:z}=t._f,F=q(s,j);if(!z||e.has(j))return{};const H=d?d[0]:l,W=I=>{n&&H.reportValidity&&(H.setCustomValidity(mt(I)?"":I||""),H.reportValidity())},K={},Y=Uo(l),E=pr(l),w=Y||E,b=(S||Lo(l))&&me(l.value)&&me(F)||yn(l)&&l.value===""||F===""||Array.isArray(F)&&!F.length,k=Qh.bind(null,j,i,K),N=(I,v,X,de=St.maxLength,ve=St.minLength)=>{const we=I?v:X;K[j]={type:I?de:ve,message:we,ref:l,...k(I?de:ve,we)}};if(o?!Array.isArray(F)||!F.length:h&&(!w&&(b||Re(F))||mt(F)&&!F||E&&!em(d).isValid||Y&&!sm(d).isValid)){const{value:I,message:v}=Qr(h)?{value:!!h,message:h}:Gs(h);if(I&&(K[j]={type:St.required,message:v,ref:H,...k(St.required,v)},!i))return W(v),K}if(!b&&(!Re(y)||!Re(g))){let I,v;const X=Gs(g),de=Gs(y);if(!Re(F)&&!isNaN(F)){const ve=l.valueAsNumber||F&&+F;Re(X.value)||(I=ve>X.value),Re(de.value)||(v=ve<de.value)}else{const ve=l.valueAsDate||new Date(F),we=cs=>new Date(new Date().toDateString()+" "+cs),Xe=l.type=="time",ct=l.type=="week";bt(X.value)&&F&&(I=Xe?we(F)>we(X.value):ct?F>X.value:ve>new Date(X.value)),bt(de.value)&&F&&(v=Xe?we(F)<we(de.value):ct?F<de.value:ve<new Date(de.value))}if((I||v)&&(N(!!I,X.message,de.message,St.max,St.min),!i))return W(K[j].message),K}if((f||m)&&!b&&(bt(F)||o&&Array.isArray(F))){const I=Gs(f),v=Gs(m),X=!Re(I.value)&&F.length>+I.value,de=!Re(v.value)&&F.length<+v.value;if((X||de)&&(N(X,I.message,v.message),!i))return W(K[j].message),K}if(T&&!b&&bt(F)){const{value:I,message:v}=Gs(T);if(bn(I)&&!F.match(I)&&(K[j]={type:St.pattern,message:v,ref:l,...k(St.pattern,v)},!i))return W(v),K}if(x){if(rt(x)){const I=await x(F,s),v=vd(I,H);if(v&&(K[j]={...v,...k(St.validate,v.message)},!i))return W(v.message),K}else if(he(x)){let I={};for(const v in x){if(!Le(I)&&!i)break;const X=vd(await x[v](F,s),H,v);X&&(I={...X,...k(v,X.message)},W(X.message),i&&(K[j]=I))}if(!Le(I)&&(K[j]={ref:H,...I},!i))return K}}return W(!0),K};const Mw={mode:it.onSubmit,reValidateMode:it.onChange,shouldFocusError:!0};function Lw(t={}){let e={...Mw,...t},s={submitCount:0,isDirty:!1,isReady:!1,isLoading:rt(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1};const i={};let n=he(e.defaultValues)||he(e.values)?ke(e.defaultValues||e.values)||{}:{},o=e.shouldUnregister?{}:ke(n),l={action:!1,mount:!1,watch:!1},d={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},h,f=0;const m={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let y={...m};const g={array:ud(),state:ud()},T=e.criteriaMode===it.all,x=_=>P=>{clearTimeout(f),f=setTimeout(_,P)},j=async _=>{if(!e.disabled&&(m.isValid||y.isValid||_)){const P=e.resolver?Le((await E()).errors):await b(i,!0);P!==s.isValid&&g.state.next({isValid:P})}},S=(_,P)=>{!e.disabled&&(m.isValidating||m.validatingFields||y.isValidating||y.validatingFields)&&((_||Array.from(d.mount)).forEach(O=>{O&&(P?ne(s.validatingFields,O,P):pe(s.validatingFields,O))}),g.state.next({validatingFields:s.validatingFields,isValidating:!Le(s.validatingFields)}))},z=(_,P=[],O,$,V=!0,L=!0)=>{if($&&O&&!e.disabled){if(l.action=!0,L&&Array.isArray(q(i,_))){const B=O(q(i,_),$.argA,$.argB);V&&ne(i,_,B)}if(L&&Array.isArray(q(s.errors,_))){const B=O(q(s.errors,_),$.argA,$.argB);V&&ne(s.errors,_,B),Dw(s.errors,_)}if((m.touchedFields||y.touchedFields)&&L&&Array.isArray(q(s.touchedFields,_))){const B=O(q(s.touchedFields,_),$.argA,$.argB);V&&ne(s.touchedFields,_,B)}(m.dirtyFields||y.dirtyFields)&&(s.dirtyFields=Ui(n,o)),g.state.next({name:_,isDirty:N(_,P),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else ne(o,_,P)},F=(_,P)=>{ne(s.errors,_,P),g.state.next({errors:s.errors})},H=_=>{s.errors=_,g.state.next({errors:s.errors,isValid:!1})},W=(_,P,O,$)=>{const V=q(i,_);if(V){const L=q(o,_,me(O)?q(n,_):O);me(L)||$&&$.defaultChecked||P?ne(o,_,P?L:pd(V._f)):X(_,L),l.mount&&j()}},K=(_,P,O,$,V)=>{let L=!1,B=!1;const J={name:_};if(!e.disabled){if(!O||$){(m.isDirty||y.isDirty)&&(B=s.isDirty,s.isDirty=J.isDirty=N(),L=B!==J.isDirty);const se=Zt(q(n,_),P);B=!!q(s.dirtyFields,_),se?pe(s.dirtyFields,_):ne(s.dirtyFields,_,!0),J.dirtyFields=s.dirtyFields,L=L||(m.dirtyFields||y.dirtyFields)&&B!==!se}if(O){const se=q(s.touchedFields,_);se||(ne(s.touchedFields,_,O),J.touchedFields=s.touchedFields,L=L||(m.touchedFields||y.touchedFields)&&se!==O)}L&&V&&g.state.next(J)}return L?J:{}},Y=(_,P,O,$)=>{const V=q(s.errors,_),L=(m.isValid||y.isValid)&&mt(P)&&s.isValid!==P;if(e.delayError&&O?(h=x(()=>F(_,O)),h(e.delayError)):(clearTimeout(f),h=null,O?ne(s.errors,_,O):pe(s.errors,_)),(O?!Zt(V,O):V)||!Le($)||L){const B={...$,...L&&mt(P)?{isValid:P}:{},errors:s.errors,name:_};s={...s,...B},g.state.next(B)}},E=async _=>{S(_,!0);const P=await e.resolver(o,e.context,Sw(_||d.mount,i,e.criteriaMode,e.shouldUseNativeValidation));return S(_),P},w=async _=>{const{errors:P}=await E(_);if(_)for(const O of _){const $=q(P,O);$?ne(s.errors,O,$):pe(s.errors,O)}else s.errors=P;return P},b=async(_,P,O={valid:!0})=>{for(const $ in _){const V=_[$];if(V){const{_f:L,...B}=V;if(L){const J=d.array.has(L.name),se=V._f&&Aw(V._f);se&&m.validatingFields&&S([$],!0);const Se=await wd(V,d.disabled,o,T,e.shouldUseNativeValidation&&!P,J);if(se&&m.validatingFields&&S([$]),Se[L.name]&&(O.valid=!1,P))break;!P&&(q(Se,L.name)?J?Fw(s.errors,Se,L.name):ne(s.errors,L.name,Se[L.name]):pe(s.errors,L.name))}!Le(B)&&await b(B,P,O)}}return O.valid},k=()=>{for(const _ of d.unMount){const P=q(i,_);P&&(P._f.refs?P._f.refs.every(O=>!ka(O)):!ka(P._f.ref))&&Bt(_)}d.unMount=new Set},N=(_,P)=>!e.disabled&&(_&&P&&ne(o,_,P),!Zt(cs(),n)),I=(_,P,O)=>Tw(_,d,{...l.mount?o:me(P)?n:bt(_)?{[_]:P}:P},O,P),v=_=>Mn(q(l.mount?o:n,_,e.shouldUnregister?q(n,_,[]):[])),X=(_,P,O={})=>{const $=q(i,_);let V=P;if($){const L=$._f;L&&(!L.disabled&&ne(o,_,tm(P,L)),V=yn(L.ref)&&Re(P)?"":P,Yh(L.ref)?[...L.ref.options].forEach(B=>B.selected=V.includes(B.value)):L.refs?pr(L.ref)?L.refs.forEach(B=>{(!B.defaultChecked||!B.disabled)&&(Array.isArray(V)?B.checked=!!V.find(J=>J===B.value):B.checked=V===B.value||!!V)}):L.refs.forEach(B=>B.checked=B.value===V):Lo(L.ref)?L.ref.value="":(L.ref.value=V,L.ref.type||g.state.next({name:_,values:ke(o)})))}(O.shouldDirty||O.shouldTouch)&&K(_,V,O.shouldTouch,O.shouldDirty,!0),O.shouldValidate&&ct(_)},de=(_,P,O)=>{for(const $ in P){if(!P.hasOwnProperty($))return;const V=P[$],L=_+"."+$,B=q(i,L);(d.array.has(_)||he(V)||B&&!B._f)&&!xs(V)?de(L,V,O):X(L,V,O)}},ve=(_,P,O={})=>{const $=q(i,_),V=d.array.has(_),L=ke(P);ne(o,_,L),V?(g.array.next({name:_,values:ke(o)}),(m.isDirty||m.dirtyFields||y.isDirty||y.dirtyFields)&&O.shouldDirty&&g.state.next({name:_,dirtyFields:Ui(n,o),isDirty:N(_,L)})):$&&!$._f&&!Re(L)?de(_,L,O):X(_,L,O),xd(_,d)&&g.state.next({...s}),g.state.next({name:l.mount?_:void 0,values:ke(o)})},we=async _=>{l.mount=!0;const P=_.target;let O=P.name,$=!0;const V=q(i,O),L=se=>{$=Number.isNaN(se)||xs(se)&&isNaN(se.getTime())||Zt(se,q(o,O,se))},B=gd(e.mode),J=gd(e.reValidateMode);if(V){let se,Se;const ds=P.type?pd(V._f):bw(_),ut=_.type===dd.BLUR||_.type===dd.FOCUS_OUT,us=!Cw(V._f)&&!e.resolver&&!q(s.errors,O)&&!V._f.deps||Ow(ut,q(s.touchedFields,O),s.isSubmitted,J,B),Us=xd(O,d,ut);ne(o,O,ds),ut?(V._f.onBlur&&V._f.onBlur(_),h&&h(0)):V._f.onChange&&V._f.onChange(_);const Vs=K(O,ds,ut),ji=!Le(Vs)||Us;if(!ut&&g.state.next({name:O,type:_.type,values:ke(o)}),us)return(m.isValid||y.isValid)&&(e.mode==="onBlur"?ut&&j():ut||j()),ji&&g.state.next({name:O,...Us?{}:Vs});if(!ut&&Us&&g.state.next({...s}),e.resolver){const{errors:br}=await E([O]);if(L(ds),$){const Hn=bd(s.errors,i,O),$s=bd(br,i,Hn.name||O);se=$s.error,O=$s.name,Se=Le(br)}}else S([O],!0),se=(await wd(V,d.disabled,o,T,e.shouldUseNativeValidation))[O],S([O]),L(ds),$&&(se?Se=!1:(m.isValid||y.isValid)&&(Se=await b(i,!0)));$&&(V._f.deps&&ct(V._f.deps),Y(O,Se,se,Vs))}},Xe=(_,P)=>{if(q(s.errors,P)&&_.focus)return _.focus(),1},ct=async(_,P={})=>{let O,$;const V=Qi(_);if(e.resolver){const L=await w(me(_)?_:V);O=Le(L),$=_?!V.some(B=>q(L,B)):O}else _?($=(await Promise.all(V.map(async L=>{const B=q(i,L);return await b(B&&B._f?{[L]:B}:B)}))).every(Boolean),!(!$&&!s.isValid)&&j()):$=O=await b(i);return g.state.next({...!bt(_)||(m.isValid||y.isValid)&&O!==s.isValid?{}:{name:_},...e.resolver||!_?{isValid:O}:{},errors:s.errors}),P.shouldFocus&&!$&&Yi(i,Xe,_?V:d.mount),$},cs=_=>{const P={...l.mount?o:n};return me(_)?P:bt(_)?q(P,_):_.map(O=>q(P,O))},gr=(_,P)=>({invalid:!!q((P||s).errors,_),isDirty:!!q((P||s).dirtyFields,_),error:q((P||s).errors,_),isValidating:!!q(s.validatingFields,_),isTouched:!!q((P||s).touchedFields,_)}),dt=_=>{_&&Qi(_).forEach(P=>pe(s.errors,P)),g.state.next({errors:_?s.errors:{}})},fe=(_,P,O)=>{const $=(q(i,_,{_f:{}})._f||{}).ref,V=q(s.errors,_)||{},{ref:L,message:B,type:J,...se}=V;ne(s.errors,_,{...se,...P,ref:$}),g.state.next({name:_,errors:s.errors,isValid:!1}),O&&O.shouldFocus&&$&&$.focus&&$.focus()},Vn=(_,P)=>rt(_)?g.state.subscribe({next:O=>_(I(void 0,P),O)}):I(_,P,!0),$t=_=>g.state.subscribe({next:P=>{Rw(_.name,P.name,_.exact)&&Pw(P,_.formState||m,Bn,_.reRenderRoot)&&_.callback({values:{...o},...s,...P})}}).unsubscribe,$n=_=>(l.mount=!0,y={...y,..._.formState},$t({..._,formState:y})),Bt=(_,P={})=>{for(const O of _?Qi(_):d.mount)d.mount.delete(O),d.array.delete(O),P.keepValue||(pe(i,O),pe(o,O)),!P.keepError&&pe(s.errors,O),!P.keepDirty&&pe(s.dirtyFields,O),!P.keepTouched&&pe(s.touchedFields,O),!P.keepIsValidating&&pe(s.validatingFields,O),!e.shouldUnregister&&!P.keepDefaultValue&&pe(n,O);g.state.next({values:ke(o)}),g.state.next({...s,...P.keepDirty?{isDirty:N()}:{}}),!P.keepIsValid&&j()},yr=({disabled:_,name:P})=>{(mt(_)&&l.mount||_||d.disabled.has(P))&&(_?d.disabled.add(P):d.disabled.delete(P))},bi=(_,P={})=>{let O=q(i,_);const $=mt(P.disabled)||mt(e.disabled);return ne(i,_,{...O||{},_f:{...O&&O._f?O._f:{ref:{name:_}},name:_,mount:!0,...P}}),d.mount.add(_),O?yr({disabled:mt(P.disabled)?P.disabled:e.disabled,name:_}):W(_,!0,P.value),{...$?{disabled:P.disabled||e.disabled}:{},...e.progressive?{required:!!P.required,min:Vi(P.min),max:Vi(P.max),minLength:Vi(P.minLength),maxLength:Vi(P.maxLength),pattern:Vi(P.pattern)}:{},name:_,onChange:we,onBlur:we,ref:V=>{if(V){bi(_,P),O=q(i,_);const L=me(V.value)&&V.querySelectorAll&&V.querySelectorAll("input,select,textarea")[0]||V,B=kw(L),J=O._f.refs||[];if(B?J.find(se=>se===L):L===O._f.ref)return;ne(i,_,{_f:{...O._f,...B?{refs:[...J.filter(ka),L,...Array.isArray(q(n,_))?[{}]:[]],ref:{type:L.type,name:_}}:{ref:L}}}),W(_,!1,void 0,L)}else O=q(i,_,{}),O._f&&(O._f.mount=!1),(e.shouldUnregister||P.shouldUnregister)&&!(ww(d.array,_)&&l.action)&&d.unMount.add(_)}}},Ht=()=>e.shouldFocusError&&Yi(i,Xe,d.mount),Ds=_=>{mt(_)&&(g.state.next({disabled:_}),Yi(i,(P,O)=>{const $=q(i,O);$&&(P.disabled=$._f.disabled||_,Array.isArray($._f.refs)&&$._f.refs.forEach(V=>{V.disabled=$._f.disabled||_}))},0,!1))},Fs=(_,P)=>async O=>{let $;O&&(O.preventDefault&&O.preventDefault(),O.persist&&O.persist());let V=ke(o);if(g.state.next({isSubmitting:!0}),e.resolver){const{errors:L,values:B}=await E();s.errors=L,V=B}else await b(i);if(d.disabled.size)for(const L of d.disabled)ne(V,L,void 0);if(pe(s.errors,"root"),Le(s.errors)){g.state.next({errors:{}});try{await _(V,O)}catch(L){$=L}}else P&&await P({...s.errors},O),Ht(),setTimeout(Ht);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Le(s.errors)&&!$,submitCount:s.submitCount+1,errors:s.errors}),$)throw $},vi=(_,P={})=>{q(i,_)&&(me(P.defaultValue)?ve(_,ke(q(n,_))):(ve(_,P.defaultValue),ne(n,_,ke(P.defaultValue))),P.keepTouched||pe(s.touchedFields,_),P.keepDirty||(pe(s.dirtyFields,_),s.isDirty=P.defaultValue?N(_,ke(q(n,_))):N()),P.keepError||(pe(s.errors,_),m.isValid&&j()),g.state.next({...s}))},Ms=(_,P={})=>{const O=_?ke(_):n,$=ke(O),V=Le(_),L=V?n:$;if(P.keepDefaultValues||(n=O),!P.keepValues){if(P.keepDirtyValues){const B=new Set([...d.mount,...Object.keys(Ui(n,o))]);for(const J of Array.from(B))q(s.dirtyFields,J)?ne(L,J,q(o,J)):ve(J,q(L,J))}else{if(Fo&&me(_))for(const B of d.mount){const J=q(i,B);if(J&&J._f){const se=Array.isArray(J._f.refs)?J._f.refs[0]:J._f.ref;if(yn(se)){const Se=se.closest("form");if(Se){Se.reset();break}}}}for(const B of d.mount)ve(B,q(L,B))}o=ke(L),g.array.next({values:{...L}}),g.state.next({values:{...L}})}d={mount:P.keepDirtyValues?d.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},l.mount=!m.isValid||!!P.keepIsValid||!!P.keepDirtyValues,l.watch=!!e.shouldUnregister,g.state.next({submitCount:P.keepSubmitCount?s.submitCount:0,isDirty:V?!1:P.keepDirty?s.isDirty:!!(P.keepDefaultValues&&!Zt(_,n)),isSubmitted:P.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:V?{}:P.keepDirtyValues?P.keepDefaultValues&&o?Ui(n,o):s.dirtyFields:P.keepDefaultValues&&_?Ui(n,_):P.keepDirty?s.dirtyFields:{},touchedFields:P.keepTouched?s.touchedFields:{},errors:P.keepErrors?s.errors:{},isSubmitSuccessful:P.keepIsSubmitSuccessful?s.isSubmitSuccessful:!1,isSubmitting:!1})},Ls=(_,P)=>Ms(rt(_)?_(o):_,P),xr=(_,P={})=>{const O=q(i,_),$=O&&O._f;if($){const V=$.refs?$.refs[0]:$.ref;V.focus&&(V.focus(),P.shouldSelect&&rt(V.select)&&V.select())}},Bn=_=>{s={...s,..._}},wi={control:{register:bi,unregister:Bt,getFieldState:gr,handleSubmit:Fs,setError:fe,_subscribe:$t,_runSchema:E,_focusError:Ht,_getWatch:I,_getDirty:N,_setValid:j,_setFieldArray:z,_setDisabledField:yr,_setErrors:H,_getFieldArray:v,_reset:Ms,_resetDefaultValues:()=>rt(e.defaultValues)&&e.defaultValues().then(_=>{Ls(_,e.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:k,_disableForm:Ds,_subjects:g,_proxyFormState:m,get _fields(){return i},get _formValues(){return o},get _state(){return l},set _state(_){l=_},get _defaultValues(){return n},get _names(){return d},set _names(_){d=_},get _formState(){return s},get _options(){return e},set _options(_){e={...e,..._}}},subscribe:$n,trigger:ct,register:bi,handleSubmit:Fs,watch:Vn,setValue:ve,getValues:cs,reset:Ls,resetField:vi,clearErrors:dt,unregister:Bt,setError:fe,setFocus:xr,getFieldState:gr};return{...wi,formControl:wi}}function Uw(t={}){const e=ie.useRef(void 0),s=ie.useRef(void 0),[i,n]=ie.useState({isDirty:!1,isValidating:!1,isLoading:rt(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,isReady:!1,defaultValues:rt(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...t.formControl?t.formControl:Lw(t),formState:i},t.formControl&&t.defaultValues&&!rt(t.defaultValues)&&t.formControl.reset(t.defaultValues,t.resetOptions));const o=e.current.control;return o._options=t,Nw(()=>{const l=o._subscribe({formState:o._proxyFormState,callback:()=>n({...o._formState}),reRenderRoot:!0});return n(d=>({...d,isReady:!0})),o._formState.isReady=!0,l},[o]),ie.useEffect(()=>o._disableForm(t.disabled),[o,t.disabled]),ie.useEffect(()=>{t.mode&&(o._options.mode=t.mode),t.reValidateMode&&(o._options.reValidateMode=t.reValidateMode)},[o,t.mode,t.reValidateMode]),ie.useEffect(()=>{t.errors&&(o._setErrors(t.errors),o._focusError())},[o,t.errors]),ie.useEffect(()=>{t.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,t.shouldUnregister]),ie.useEffect(()=>{if(o._proxyFormState.isDirty){const l=o._getDirty();l!==i.isDirty&&o._subjects.state.next({isDirty:l})}},[o,i.isDirty]),ie.useEffect(()=>{t.values&&!Zt(t.values,s.current)?(o._reset(t.values,o._options.resetOptions),s.current=t.values,n(l=>({...l}))):o._resetDefaultValues()},[o,t.values]),ie.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),e.current.formState=_w(i,o),e.current}const jd=(t,e,s)=>{if(t&&"reportValidity"in t){const i=q(s,e);t.setCustomValidity(i&&i.message||""),t.reportValidity()}},im=(t,e)=>{for(const s in e.fields){const i=e.fields[s];i&&i.ref&&"reportValidity"in i.ref?jd(i.ref,s,t):i&&i.refs&&i.refs.forEach(n=>jd(n,s,t))}},Vw=(t,e)=>{e.shouldUseNativeValidation&&im(t,e);const s={};for(const i in t){const n=q(e.fields,i),o=Object.assign(t[i]||{},{ref:n&&n.ref});if($w(e.names||Object.keys(t),i)){const l=Object.assign({},q(s,i));ne(l,"root",o),ne(s,i,l)}else ne(s,i,o)}return s},$w=(t,e)=>{const s=_d(e);return t.some(i=>_d(i).match(`^${s}\\.\\d+`))};function _d(t){return t.replace(/\]|\[/g,"")}function Bw(t,e,s){return s===void 0&&(s={}),function(i,n,o){try{return Promise.resolve(function(l,d){try{var h=(e!=null&&e.context,Promise.resolve(t[s.mode==="sync"?"validateSync":"validate"](i,Object.assign({abortEarly:!1},e,{context:n}))).then(function(f){return o.shouldUseNativeValidation&&im({},o),{values:s.raw?Object.assign({},i):f,errors:{}}}))}catch(f){return d(f)}return h&&h.then?h.then(void 0,d):h}(0,function(l){if(!l.inner)throw l;return{values:{},errors:Vw((d=l,h=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(d.inner||[]).reduce(function(f,m){if(f[m.path]||(f[m.path]={message:m.message,type:m.type}),h){var y=f[m.path].types,g=y&&y[m.type];f[m.path]=Qh(m.path,h,f,m.type,g?[].concat(g,m.message):m.message)}return f},{})),o)};var d,h}))}catch(l){return Promise.reject(l)}}}function Rs(t){this._maxSize=t,this.clear()}Rs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Rs.prototype.get=function(t){return this._values[t]};Rs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var Hw=/[^.^\]^[]+|(?=\[\]|\.\.)/g,rm=/^\d+$/,zw=/^\d/,qw=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Ww=/^\s*(['"]?)(.*?)(\1)\s*$/,Vo=512,Nd=new Rs(Vo),Td=new Rs(Vo),kd=new Rs(Vo),Is={Cache:Rs,split:Ya,normalizePath:Ia,setter:function(t){var e=Ia(t);return Td.get(t)||Td.set(t,function(i,n){for(var o=0,l=e.length,d=i;o<l-1;){var h=e[o];if(h==="__proto__"||h==="constructor"||h==="prototype")return i;d=d[e[o++]]}d[e[o]]=n})},getter:function(t,e){var s=Ia(t);return kd.get(t)||kd.set(t,function(n){for(var o=0,l=s.length;o<l;)if(n!=null||!e)n=n[s[o++]];else return;return n})},join:function(t){return t.reduce(function(e,s){return e+($o(s)||rm.test(s)?"["+s+"]":(e?".":"")+s)},"")},forEach:function(t,e,s){Kw(Array.isArray(t)?t:Ya(t),e,s)}};function Ia(t){return Nd.get(t)||Nd.set(t,Ya(t).map(function(e){return e.replace(Ww,"$2")}))}function Ya(t){return t.match(Hw)||[""]}function Kw(t,e,s){var i=t.length,n,o,l,d;for(o=0;o<i;o++)n=t[o],n&&(Qw(n)&&(n='"'+n+'"'),d=$o(n),l=!d&&/^\d+$/.test(n),e.call(s,n,d,l,o,t))}function $o(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function Gw(t){return t.match(zw)&&!t.match(rm)}function Jw(t){return qw.test(t)}function Qw(t){return!$o(t)&&(Gw(t)||Jw(t))}const Yw=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ln=t=>t.match(Yw)||[],Un=t=>t[0].toUpperCase()+t.slice(1),Bo=(t,e)=>Ln(t).join(e).toLowerCase(),nm=t=>Ln(t).reduce((e,s)=>`${e}${e?s[0].toUpperCase()+s.slice(1).toLowerCase():s.toLowerCase()}`,""),Xw=t=>Un(nm(t)),Zw=t=>Bo(t,"_"),e1=t=>Bo(t,"-"),t1=t=>Un(Bo(t," ")),s1=t=>Ln(t).map(Un).join(" ");var Ea={words:Ln,upperFirst:Un,camelCase:nm,pascalCase:Xw,snakeCase:Zw,kebabCase:e1,sentenceCase:t1,titleCase:s1},Ho={exports:{}};Ho.exports=function(t){return am(i1(t),t)};Ho.exports.array=am;function am(t,e){var s=t.length,i=new Array(s),n={},o=s,l=r1(e),d=n1(t);for(e.forEach(function(f){if(!d.has(f[0])||!d.has(f[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)n[o]||h(t[o],o,new Set);return i;function h(f,m,y){if(y.has(f)){var g;try{g=", node was:"+JSON.stringify(f)}catch{g=""}throw new Error("Cyclic dependency"+g)}if(!d.has(f))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(f));if(!n[m]){n[m]=!0;var T=l.get(f)||new Set;if(T=Array.from(T),m=T.length){y.add(f);do{var x=T[--m];h(x,d.get(x),y)}while(m);y.delete(f)}i[--s]=f}}}function i1(t){for(var e=new Set,s=0,i=t.length;s<i;s++){var n=t[s];e.add(n[0]),e.add(n[1])}return Array.from(e)}function r1(t){for(var e=new Map,s=0,i=t.length;s<i;s++){var n=t[s];e.has(n[0])||e.set(n[0],new Set),e.has(n[1])||e.set(n[1],new Set),e.get(n[0]).add(n[1])}return e}function n1(t){for(var e=new Map,s=0,i=t.length;s<i;s++)e.set(t[s],s);return e}var a1=Ho.exports;const o1=Nn(a1),l1=Object.prototype.toString,c1=Error.prototype.toString,d1=RegExp.prototype.toString,u1=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",h1=/^Symbol\((.*)\)(.*)$/;function m1(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Id(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const s=typeof t;if(s==="number")return m1(t);if(s==="string")return e?`"${t}"`:t;if(s==="function")return"[Function "+(t.name||"anonymous")+"]";if(s==="symbol")return u1.call(t).replace(h1,"Symbol($1)");const i=l1.call(t).slice(8,-1);return i==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):i==="Error"||t instanceof Error?"["+c1.call(t)+"]":i==="RegExp"?d1.call(t):null}function os(t,e){let s=Id(t,e);return s!==null?s:JSON.stringify(t,function(i,n){let o=Id(this[i],e);return o!==null?o:n},2)}function om(t){return t==null?[]:[].concat(t)}let lm,cm,dm,f1=/\$\{\s*(\w+)\s*\}/g;lm=Symbol.toStringTag;class Ed{constructor(e,s,i,n){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[lm]="Error",this.name="ValidationError",this.value=s,this.path=i,this.type=n,this.errors=[],this.inner=[],om(e).forEach(o=>{if(Ve.isError(o)){this.errors.push(...o.errors);const l=o.inner.length?o.inner:[o];this.inner.push(...l)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}cm=Symbol.hasInstance;dm=Symbol.toStringTag;class Ve extends Error{static formatError(e,s){const i=s.label||s.path||"this";return s=Object.assign({},s,{path:i,originalPath:s.path}),typeof e=="string"?e.replace(f1,(n,o)=>os(s[o])):typeof e=="function"?e(s):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,s,i,n,o){const l=new Ed(e,s,i,n);if(o)return l;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[dm]="Error",this.name=l.name,this.message=l.message,this.type=l.type,this.value=l.value,this.path=l.path,this.errors=l.errors,this.inner=l.inner,Error.captureStackTrace&&Error.captureStackTrace(this,Ve)}static[cm](e){return Ed[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let ft={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:s,originalValue:i})=>{const n=i!=null&&i!==s?` (cast from the value \`${os(i,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${os(s,!0)}\``+n:`${t} must match the configured type. The validated value was: \`${os(s,!0)}\``+n}},Me={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},p1={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Xa={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},g1={isValue:"${path} field must be ${value}"},Yr={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},y1={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},x1={notType:t=>{const{path:e,value:s,spec:i}=t,n=i.types.length;if(Array.isArray(s)){if(s.length<n)return`${e} tuple value has too few items, expected a length of ${n} but got ${s.length} for value: \`${os(s,!0)}\``;if(s.length>n)return`${e} tuple value has too many items, expected a length of ${n} but got ${s.length} for value: \`${os(s,!0)}\``}return Ve.formatError(ft.notType,t)}};Object.assign(Object.create(null),{mixed:ft,string:Me,number:p1,date:Xa,object:Yr,array:y1,boolean:g1,tuple:x1});const zo=t=>t&&t.__isYupSchema__;class vn{static fromOptions(e,s){if(!s.then&&!s.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:i,then:n,otherwise:o}=s,l=typeof i=="function"?i:(...d)=>d.every(h=>h===i);return new vn(e,(d,h)=>{var f;let m=l(...d)?n:o;return(f=m==null?void 0:m(h))!=null?f:h})}constructor(e,s){this.fn=void 0,this.refs=e,this.refs=e,this.fn=s}resolve(e,s){let i=this.refs.map(o=>o.getValue(s==null?void 0:s.value,s==null?void 0:s.parent,s==null?void 0:s.context)),n=this.fn(i,e,s);if(n===void 0||n===e)return e;if(!zo(n))throw new TypeError("conditions must return a schema object");return n.resolve(s)}}const Br={context:"$",value:"."};class Os{constructor(e,s={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Br.context,this.isValue=this.key[0]===Br.value,this.isSibling=!this.isContext&&!this.isValue;let i=this.isContext?Br.context:this.isValue?Br.value:"";this.path=this.key.slice(i.length),this.getter=this.path&&Is.getter(this.path,!0),this.map=s.map}getValue(e,s,i){let n=this.isContext?i:this.isValue?e:s;return this.getter&&(n=this.getter(n||{})),this.map&&(n=this.map(n)),n}cast(e,s){return this.getValue(e,s==null?void 0:s.parent,s==null?void 0:s.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Os.prototype.__isYupRef=!0;const bs=t=>t==null;function Js(t){function e({value:s,path:i="",options:n,originalValue:o,schema:l},d,h){const{name:f,test:m,params:y,message:g,skipAbsent:T}=t;let{parent:x,context:j,abortEarly:S=l.spec.abortEarly,disableStackTrace:z=l.spec.disableStackTrace}=n;function F(N){return Os.isRef(N)?N.getValue(s,x,j):N}function H(N={}){const I=Object.assign({value:s,originalValue:o,label:l.spec.label,path:N.path||i,spec:l.spec,disableStackTrace:N.disableStackTrace||z},y,N.params);for(const X of Object.keys(I))I[X]=F(I[X]);const v=new Ve(Ve.formatError(N.message||g,I),s,I.path,N.type||f,I.disableStackTrace);return v.params=I,v}const W=S?d:h;let K={path:i,parent:x,type:f,from:n.from,createError:H,resolve:F,options:n,originalValue:o,schema:l};const Y=N=>{Ve.isError(N)?W(N):N?h(null):W(H())},E=N=>{Ve.isError(N)?W(N):d(N)};if(T&&bs(s))return Y(!0);let b;try{var k;if(b=m.call(K,s,K),typeof((k=b)==null?void 0:k.then)=="function"){if(n.sync)throw new Error(`Validation test of type: "${K.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(b).then(Y,E)}}catch(N){E(N);return}Y(b)}return e.OPTIONS=t,e}function b1(t,e,s,i=s){let n,o,l;return e?(Is.forEach(e,(d,h,f)=>{let m=h?d.slice(1,d.length-1):d;t=t.resolve({context:i,parent:n,value:s});let y=t.type==="tuple",g=f?parseInt(m,10):0;if(t.innerType||y){if(y&&!f)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${l}" must contain an index to the tuple element, e.g. "${l}[0]"`);if(s&&g>=s.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${d}, in the path: ${e}. because there is no value at that index. `);n=s,s=s&&s[g],t=y?t.spec.types[g]:t.innerType}if(!f){if(!t.fields||!t.fields[m])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${l} which is a type: "${t.type}")`);n=s,s=s&&s[m],t=t.fields[m]}o=m,l=h?"["+d+"]":"."+d}),{schema:t,parent:n,parentPath:o}):{parent:n,parentPath:e,schema:t}}class wn extends Set{describe(){const e=[];for(const s of this.values())e.push(Os.isRef(s)?s.describe():s);return e}resolveAll(e){let s=[];for(const i of this.values())s.push(e(i));return s}clone(){return new wn(this.values())}merge(e,s){const i=this.clone();return e.forEach(n=>i.add(n)),s.forEach(n=>i.delete(n)),i}}function Xs(t,e=new Map){if(zo(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let s;if(t instanceof Date)s=new Date(t.getTime()),e.set(t,s);else if(t instanceof RegExp)s=new RegExp(t),e.set(t,s);else if(Array.isArray(t)){s=new Array(t.length),e.set(t,s);for(let i=0;i<t.length;i++)s[i]=Xs(t[i],e)}else if(t instanceof Map){s=new Map,e.set(t,s);for(const[i,n]of t.entries())s.set(i,Xs(n,e))}else if(t instanceof Set){s=new Set,e.set(t,s);for(const i of t)s.add(Xs(i,e))}else if(t instanceof Object){s={},e.set(t,s);for(const[i,n]of Object.entries(t))s[i]=Xs(n,e)}else throw Error(`Unable to clone ${t}`);return s}class _t{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new wn,this._blacklist=new wn,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(ft.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(s=>{s.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const s=Object.create(Object.getPrototypeOf(this));return s.type=this.type,s._typeCheck=this._typeCheck,s._whitelist=this._whitelist.clone(),s._blacklist=this._blacklist.clone(),s.internalTests=Object.assign({},this.internalTests),s.exclusiveTests=Object.assign({},this.exclusiveTests),s.deps=[...this.deps],s.conditions=[...this.conditions],s.tests=[...this.tests],s.transforms=[...this.transforms],s.spec=Xs(Object.assign({},this.spec,e)),s}label(e){let s=this.clone();return s.spec.label=e,s}meta(...e){if(e.length===0)return this.spec.meta;let s=this.clone();return s.spec.meta=Object.assign(s.spec.meta||{},e[0]),s}withMutation(e){let s=this._mutate;this._mutate=!0;let i=e(this);return this._mutate=s,i}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let s=this,i=e.clone();const n=Object.assign({},s.spec,i.spec);return i.spec=n,i.internalTests=Object.assign({},s.internalTests,i.internalTests),i._whitelist=s._whitelist.merge(e._whitelist,e._blacklist),i._blacklist=s._blacklist.merge(e._blacklist,e._whitelist),i.tests=s.tests,i.exclusiveTests=s.exclusiveTests,i.withMutation(o=>{e.tests.forEach(l=>{o.test(l.OPTIONS)})}),i.transforms=[...s.transforms,...i.transforms],i}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let s=this;if(s.conditions.length){let i=s.conditions;s=s.clone(),s.conditions=[],s=i.reduce((n,o)=>o.resolve(n,e),s),s=s.resolve(e)}return s}resolveOptions(e){var s,i,n,o;return Object.assign({},e,{from:e.from||[],strict:(s=e.strict)!=null?s:this.spec.strict,abortEarly:(i=e.abortEarly)!=null?i:this.spec.abortEarly,recursive:(n=e.recursive)!=null?n:this.spec.recursive,disableStackTrace:(o=e.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(e,s={}){let i=this.resolve(Object.assign({value:e},s)),n=s.assert==="ignore-optionality",o=i._cast(e,s);if(s.assert!==!1&&!i.isType(o)){if(n&&bs(o))return o;let l=os(e),d=os(o);throw new TypeError(`The value of ${s.path||"field"} could not be cast to a value that satisfies the schema type: "${i.type}". 

attempted value: ${l} 
`+(d!==l?`result of cast: ${d}`:""))}return o}_cast(e,s){let i=e===void 0?e:this.transforms.reduce((n,o)=>o.call(this,n,e,this),e);return i===void 0&&(i=this.getDefault(s)),i}_validate(e,s={},i,n){let{path:o,originalValue:l=e,strict:d=this.spec.strict}=s,h=e;d||(h=this._cast(h,Object.assign({assert:!1},s)));let f=[];for(let m of Object.values(this.internalTests))m&&f.push(m);this.runTests({path:o,value:h,originalValue:l,options:s,tests:f},i,m=>{if(m.length)return n(m,h);this.runTests({path:o,value:h,originalValue:l,options:s,tests:this.tests},i,n)})}runTests(e,s,i){let n=!1,{tests:o,value:l,originalValue:d,path:h,options:f}=e,m=j=>{n||(n=!0,s(j,l))},y=j=>{n||(n=!0,i(j,l))},g=o.length,T=[];if(!g)return y([]);let x={value:l,originalValue:d,path:h,options:f,schema:this};for(let j=0;j<o.length;j++){const S=o[j];S(x,m,function(F){F&&(Array.isArray(F)?T.push(...F):T.push(F)),--g<=0&&y(T)})}}asNestedTest({key:e,index:s,parent:i,parentPath:n,originalParent:o,options:l}){const d=e??s;if(d==null)throw TypeError("Must include `key` or `index` for nested validations");const h=typeof d=="number";let f=i[d];const m=Object.assign({},l,{strict:!0,parent:i,value:f,originalValue:o[d],key:void 0,[h?"index":"key"]:d,path:h||d.includes(".")?`${n||""}[${h?d:`"${d}"`}]`:(n?`${n}.`:"")+e});return(y,g,T)=>this.resolve(m)._validate(f,m,g,T)}validate(e,s){var i;let n=this.resolve(Object.assign({},s,{value:e})),o=(i=s==null?void 0:s.disableStackTrace)!=null?i:n.spec.disableStackTrace;return new Promise((l,d)=>n._validate(e,s,(h,f)=>{Ve.isError(h)&&(h.value=f),d(h)},(h,f)=>{h.length?d(new Ve(h,f,void 0,void 0,o)):l(f)}))}validateSync(e,s){var i;let n=this.resolve(Object.assign({},s,{value:e})),o,l=(i=s==null?void 0:s.disableStackTrace)!=null?i:n.spec.disableStackTrace;return n._validate(e,Object.assign({},s,{sync:!0}),(d,h)=>{throw Ve.isError(d)&&(d.value=h),d},(d,h)=>{if(d.length)throw new Ve(d,e,void 0,void 0,l);o=h}),o}isValid(e,s){return this.validate(e,s).then(()=>!0,i=>{if(Ve.isError(i))return!1;throw i})}isValidSync(e,s){try{return this.validateSync(e,s),!0}catch(i){if(Ve.isError(i))return!1;throw i}}_getDefault(e){let s=this.spec.default;return s==null?s:typeof s=="function"?s.call(this,e):Xs(s)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,s){const i=this.clone({nullable:e});return i.internalTests.nullable=Js({message:s,name:"nullable",test(n){return n===null?this.schema.spec.nullable:!0}}),i}optionality(e,s){const i=this.clone({optional:e});return i.internalTests.optionality=Js({message:s,name:"optionality",test(n){return n===void 0?this.schema.spec.optional:!0}}),i}optional(){return this.optionality(!0)}defined(e=ft.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=ft.notNull){return this.nullability(!1,e)}required(e=ft.required){return this.clone().withMutation(s=>s.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let s=this.clone();return s.transforms.push(e),s}test(...e){let s;if(e.length===1?typeof e[0]=="function"?s={test:e[0]}:s=e[0]:e.length===2?s={name:e[0],test:e[1]}:s={name:e[0],message:e[1],test:e[2]},s.message===void 0&&(s.message=ft.default),typeof s.test!="function")throw new TypeError("`test` is a required parameters");let i=this.clone(),n=Js(s),o=s.exclusive||s.name&&i.exclusiveTests[s.name]===!0;if(s.exclusive&&!s.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return s.name&&(i.exclusiveTests[s.name]=!!s.exclusive),i.tests=i.tests.filter(l=>!(l.OPTIONS.name===s.name&&(o||l.OPTIONS.test===n.OPTIONS.test))),i.tests.push(n),i}when(e,s){!Array.isArray(e)&&typeof e!="string"&&(s=e,e=".");let i=this.clone(),n=om(e).map(o=>new Os(o));return n.forEach(o=>{o.isSibling&&i.deps.push(o.key)}),i.conditions.push(typeof s=="function"?new vn(n,s):vn.fromOptions(n,s)),i}typeError(e){let s=this.clone();return s.internalTests.typeError=Js({message:e,name:"typeError",skipAbsent:!0,test(i){return this.schema._typeCheck(i)?!0:this.createError({params:{type:this.schema.type}})}}),s}oneOf(e,s=ft.oneOf){let i=this.clone();return e.forEach(n=>{i._whitelist.add(n),i._blacklist.delete(n)}),i.internalTests.whiteList=Js({message:s,name:"oneOf",skipAbsent:!0,test(n){let o=this.schema._whitelist,l=o.resolveAll(this.resolve);return l.includes(n)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:l}})}}),i}notOneOf(e,s=ft.notOneOf){let i=this.clone();return e.forEach(n=>{i._blacklist.add(n),i._whitelist.delete(n)}),i.internalTests.blacklist=Js({message:s,name:"notOneOf",test(n){let o=this.schema._blacklist,l=o.resolveAll(this.resolve);return l.includes(n)?this.createError({params:{values:Array.from(o).join(", "),resolved:l}}):!0}}),i}strip(e=!0){let s=this.clone();return s.spec.strip=e,s}describe(e){const s=(e?this.resolve(e):this).clone(),{label:i,meta:n,optional:o,nullable:l}=s.spec;return{meta:n,label:i,optional:o,nullable:l,default:s.getDefault(e),type:s.type,oneOf:s._whitelist.describe(),notOneOf:s._blacklist.describe(),tests:s.tests.map(h=>({name:h.OPTIONS.name,params:h.OPTIONS.params})).filter((h,f,m)=>m.findIndex(y=>y.name===h.name)===f)}}}_t.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])_t.prototype[`${t}At`]=function(e,s,i={}){const{parent:n,parentPath:o,schema:l}=b1(this,e,s,i.context);return l[t](n&&n[o],Object.assign({},i,{parent:n,path:e}))};for(const t of["equals","is"])_t.prototype[t]=_t.prototype.oneOf;for(const t of["not","nope"])_t.prototype[t]=_t.prototype.notOneOf;const v1=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function w1(t){const e=Za(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let s=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(s=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(s=0-s)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+s,e.second,e.millisecond)}function Za(t){var e,s;const i=v1.exec(t);return i?{year:At(i[1]),month:At(i[2],1)-1,day:At(i[3],1),hour:At(i[4]),minute:At(i[5]),second:At(i[6]),millisecond:i[7]?At(i[7].substring(0,3)):0,precision:(e=(s=i[7])==null?void 0:s.length)!=null?e:void 0,z:i[8]||void 0,plusMinus:i[9]||void 0,hourOffset:At(i[10]),minuteOffset:At(i[11])}:null}function At(t,e=0){return Number(t)||e}let j1=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_1=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,N1=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,T1="^\\d{4}-\\d{2}-\\d{2}",k1="\\d{2}:\\d{2}:\\d{2}",I1="(([+-]\\d{2}(:?\\d{2})?)|Z)",E1=new RegExp(`${T1}T${k1}(\\.\\d+)?${I1}$`),S1=t=>bs(t)||t===t.trim(),A1={}.toString();function Bi(){return new um}class um extends _t{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,s,i)=>{if(!i.spec.coerce||i.isType(e)||Array.isArray(e))return e;const n=e!=null&&e.toString?e.toString():e;return n===A1?e:n})})}required(e){return super.required(e).withMutation(s=>s.test({message:e||ft.required,name:"required",skipAbsent:!0,test:i=>!!i.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(s=>s.OPTIONS.name!=="required"),e))}length(e,s=Me.length){return this.test({message:s,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(i){return i.length===this.resolve(e)}})}min(e,s=Me.min){return this.test({message:s,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i.length>=this.resolve(e)}})}max(e,s=Me.max){return this.test({name:"max",exclusive:!0,message:s,params:{max:e},skipAbsent:!0,test(i){return i.length<=this.resolve(e)}})}matches(e,s){let i=!1,n,o;return s&&(typeof s=="object"?{excludeEmptyString:i=!1,message:n,name:o}=s:n=s),this.test({name:o||"matches",message:n||Me.matches,params:{regex:e},skipAbsent:!0,test:l=>l===""&&i||l.search(e)!==-1})}email(e=Me.email){return this.matches(j1,{name:"email",message:e,excludeEmptyString:!0})}url(e=Me.url){return this.matches(_1,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Me.uuid){return this.matches(N1,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let s="",i,n;return e&&(typeof e=="object"?{message:s="",allowOffset:i=!1,precision:n=void 0}=e:s=e),this.matches(E1,{name:"datetime",message:s||Me.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:s||Me.datetime_offset,params:{allowOffset:i},skipAbsent:!0,test:o=>{if(!o||i)return!0;const l=Za(o);return l?!!l.z:!1}}).test({name:"datetime_precision",message:s||Me.datetime_precision,params:{precision:n},skipAbsent:!0,test:o=>{if(!o||n==null)return!0;const l=Za(o);return l?l.precision===n:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Me.trim){return this.transform(s=>s!=null?s.trim():s).test({message:e,name:"trim",test:S1})}lowercase(e=Me.lowercase){return this.transform(s=>bs(s)?s:s.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:s=>bs(s)||s===s.toLowerCase()})}uppercase(e=Me.uppercase){return this.transform(s=>bs(s)?s:s.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:s=>bs(s)||s===s.toUpperCase()})}}Bi.prototype=um.prototype;let C1=new Date(""),P1=t=>Object.prototype.toString.call(t)==="[object Date]";class qo extends _t{constructor(){super({type:"date",check(e){return P1(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,s,i)=>!i.spec.coerce||i.isType(e)||e===null?e:(e=w1(e),isNaN(e)?qo.INVALID_DATE:new Date(e)))})}prepareParam(e,s){let i;if(Os.isRef(e))i=e;else{let n=this.cast(e);if(!this._typeCheck(n))throw new TypeError(`\`${s}\` must be a Date or a value that can be \`cast()\` to a Date`);i=n}return i}min(e,s=Xa.min){let i=this.prepareParam(e,"min");return this.test({message:s,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(n){return n>=this.resolve(i)}})}max(e,s=Xa.max){let i=this.prepareParam(e,"max");return this.test({message:s,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(n){return n<=this.resolve(i)}})}}qo.INVALID_DATE=C1;function R1(t,e=[]){let s=[],i=new Set,n=new Set(e.map(([l,d])=>`${l}-${d}`));function o(l,d){let h=Is.split(l)[0];i.add(h),n.has(`${d}-${h}`)||s.push([d,h])}for(const l of Object.keys(t)){let d=t[l];i.add(l),Os.isRef(d)&&d.isSibling?o(d.path,l):zo(d)&&"deps"in d&&d.deps.forEach(h=>o(h,l))}return o1.array(Array.from(i),s).reverse()}function Sd(t,e){let s=1/0;return t.some((i,n)=>{var o;if((o=e.path)!=null&&o.includes(i))return s=n,!0}),s}function hm(t){return(e,s)=>Sd(t,e)-Sd(t,s)}const O1=(t,e,s)=>{if(typeof t!="string")return t;let i=t;try{i=JSON.parse(t)}catch{}return s.isType(i)?i:t};function Xr(t){if("fields"in t){const e={};for(const[s,i]of Object.entries(t.fields))e[s]=Xr(i);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Xr(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Xr)}):"optional"in t?t.optional():t}const D1=(t,e)=>{const s=[...Is.normalizePath(e)];if(s.length===1)return s[0]in t;let i=s.pop(),n=Is.getter(Is.join(s),!0)(t);return!!(n&&i in n)};let Ad=t=>Object.prototype.toString.call(t)==="[object Object]";function Cd(t,e){let s=Object.keys(t.fields);return Object.keys(e).filter(i=>s.indexOf(i)===-1)}const F1=hm([]);function mm(t){return new fm(t)}class fm extends _t{constructor(e){super({type:"object",check(s){return Ad(s)||typeof s=="function"}}),this.fields=Object.create(null),this._sortErrors=F1,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,s={}){var i;let n=super._cast(e,s);if(n===void 0)return this.getDefault(s);if(!this._typeCheck(n))return n;let o=this.fields,l=(i=s.stripUnknown)!=null?i:this.spec.noUnknown,d=[].concat(this._nodes,Object.keys(n).filter(y=>!this._nodes.includes(y))),h={},f=Object.assign({},s,{parent:h,__validating:s.__validating||!1}),m=!1;for(const y of d){let g=o[y],T=y in n;if(g){let x,j=n[y];f.path=(s.path?`${s.path}.`:"")+y,g=g.resolve({value:j,context:s.context,parent:h});let S=g instanceof _t?g.spec:void 0,z=S==null?void 0:S.strict;if(S!=null&&S.strip){m=m||y in n;continue}x=!s.__validating||!z?g.cast(n[y],f):n[y],x!==void 0&&(h[y]=x)}else T&&!l&&(h[y]=n[y]);(T!==y in h||h[y]!==n[y])&&(m=!0)}return m?h:n}_validate(e,s={},i,n){let{from:o=[],originalValue:l=e,recursive:d=this.spec.recursive}=s;s.from=[{schema:this,value:l},...o],s.__validating=!0,s.originalValue=l,super._validate(e,s,i,(h,f)=>{if(!d||!Ad(f)){n(h,f);return}l=l||f;let m=[];for(let y of this._nodes){let g=this.fields[y];!g||Os.isRef(g)||m.push(g.asNestedTest({options:s,key:y,parent:f,parentPath:s.path,originalParent:l}))}this.runTests({tests:m,value:f,originalValue:l,options:s},i,y=>{n(y.sort(this._sortErrors).concat(h),f)})})}clone(e){const s=super.clone(e);return s.fields=Object.assign({},this.fields),s._nodes=this._nodes,s._excludedEdges=this._excludedEdges,s._sortErrors=this._sortErrors,s}concat(e){let s=super.concat(e),i=s.fields;for(let[n,o]of Object.entries(this.fields)){const l=i[n];i[n]=l===void 0?o:l}return s.withMutation(n=>n.setFields(i,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let s={};return this._nodes.forEach(i=>{var n;const o=this.fields[i];let l=e;(n=l)!=null&&n.value&&(l=Object.assign({},l,{parent:l.value,value:l.value[i]})),s[i]=o&&"getDefault"in o?o.getDefault(l):void 0}),s}setFields(e,s){let i=this.clone();return i.fields=e,i._nodes=R1(e,s),i._sortErrors=hm(Object.keys(e)),s&&(i._excludedEdges=s),i}shape(e,s=[]){return this.clone().withMutation(i=>{let n=i._excludedEdges;return s.length&&(Array.isArray(s[0])||(s=[s]),n=[...i._excludedEdges,...s]),i.setFields(Object.assign(i.fields,e),n)})}partial(){const e={};for(const[s,i]of Object.entries(this.fields))e[s]="optional"in i&&i.optional instanceof Function?i.optional():i;return this.setFields(e)}deepPartial(){return Xr(this)}pick(e){const s={};for(const i of e)this.fields[i]&&(s[i]=this.fields[i]);return this.setFields(s,this._excludedEdges.filter(([i,n])=>e.includes(i)&&e.includes(n)))}omit(e){const s=[];for(const i of Object.keys(this.fields))e.includes(i)||s.push(i);return this.pick(s)}from(e,s,i){let n=Is.getter(e,!0);return this.transform(o=>{if(!o)return o;let l=o;return D1(o,e)&&(l=Object.assign({},o),i||delete l[e],l[s]=n(o)),l})}json(){return this.transform(O1)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||Yr.exact,test(s){if(s==null)return!0;const i=Cd(this.schema,s);return i.length===0||this.createError({params:{properties:i.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,s=Yr.noUnknown){typeof e!="boolean"&&(s=e,e=!0);let i=this.test({name:"noUnknown",exclusive:!0,message:s,test(n){if(n==null)return!0;const o=Cd(this.schema,n);return!e||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return i.spec.noUnknown=e,i}unknown(e=!0,s=Yr.noUnknown){return this.noUnknown(!e,s)}transformKeys(e){return this.transform(s=>{if(!s)return s;const i={};for(const n of Object.keys(s))i[e(n)]=s[n];return i})}camelCase(){return this.transformKeys(Ea.camelCase)}snakeCase(){return this.transformKeys(Ea.snakeCase)}constantCase(){return this.transformKeys(e=>Ea.snakeCase(e).toUpperCase())}describe(e){const s=(e?this.resolve(e):this).clone(),i=super.describe(e);i.fields={};for(const[o,l]of Object.entries(s.fields)){var n;let d=e;(n=d)!=null&&n.value&&(d=Object.assign({},d,{parent:d.value,value:d.value[o]})),i.fields[o]=l.describe(d)}return i}}mm.prototype=fm.prototype;const rr={_origin:"https://api.emailjs.com"},M1=(t,e="https://api.emailjs.com")=>{rr._userID=t,rr._origin=e},pm=(t,e,s)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Pd{constructor(e){this.status=e.status,this.text=e.responseText}}const gm=(t,e,s={})=>new Promise((i,n)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const d=new Pd(l);d.status===200||d.text==="OK"?i(d):n(d)}),o.addEventListener("error",({target:l})=>{n(new Pd(l))}),o.open("POST",rr._origin+t,!0),Object.keys(s).forEach(l=>{o.setRequestHeader(l,s[l])}),o.send(e)}),L1=(t,e,s,i)=>{const n=i||rr._userID;return pm(n,t,e),gm("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:n,service_id:t,template_id:e,template_params:s}),{"Content-type":"application/json"})},U1=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},V1=(t,e,s,i)=>{const n=i||rr._userID,o=U1(s);pm(n,t,e);const l=new FormData(o);return l.append("lib_version","3.2.0"),l.append("service_id",t),l.append("template_id",e),l.append("user_id",n),gm("/api/v1.0/email/send-form",l)},$1={init:M1,send:L1,sendForm:V1},B1=mm({name:Bi().required("Name is required").min(2,"Name must be at least 2 characters"),email:Bi().required("Email is required").email("Please enter a valid email address"),subject:Bi().required("Subject is required").min(5,"Subject must be at least 5 characters"),message:Bi().required("Message is required").min(10,"Message must be at least 10 characters").max(1e3,"Message must be less than 1000 characters")}),H1=()=>{const[t,e]=M.useState(!1),[s,i]=M.useState("idle"),n=Uw({resolver:Bw(B1),mode:"onChange"}),o=async d=>{e(!0),i("idle");try{const h={from_name:d.name,from_email:d.email,subject:d.subject,message:d.message,to_name:"Prince Nyamadi"};await $1.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",h,"YOUR_PUBLIC_KEY"),i("success"),n.reset()}catch(h){console.error("Failed to send email:",h),i("error")}finally{e(!1)}},l=()=>{n.reset(),i("idle")};return{...n,onSubmit:n.handleSubmit(o),isSubmitting:t,submitStatus:s,resetForm:l}},z1=()=>{const{register:t,onSubmit:e,formState:{errors:s},isSubmitting:i,submitStatus:n,resetForm:o}=H1(),l=()=>i?r.jsxs(r.Fragment,{children:[r.jsx(lf,{className:"w-4 h-4 animate-spin"}),"Sending..."]}):n==="success"?r.jsxs(r.Fragment,{children:[r.jsx(Bl,{className:"w-4 h-4"}),"Sent!"]}):r.jsxs(r.Fragment,{children:[r.jsx(cf,{className:"w-4 h-4"}),"Send Message"]}),d=()=>n==="success"?"bg-green-600 hover:bg-green-700 border-green-500":n==="error"?"bg-red-600 hover:bg-red-700 border-red-500":"bg-blue-600 hover:bg-blue-700 border-blue-500";return r.jsxs(C.form,{onSubmit:e,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"space-y-6",children:[n==="success"&&r.jsxs(C.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"bg-green-600/20 border border-green-400/30 rounded-lg p-4 text-center",children:[r.jsx(Bl,{className:"w-6 h-6 text-green-400 mx-auto mb-2"}),r.jsx("p",{className:"text-green-300 font-medium",children:"Message sent successfully!"}),r.jsx("p",{className:"text-green-200/70 text-sm mt-1",children:"I'll get back to you within 24 hours."}),r.jsx("button",{type:"button",onClick:o,className:"mt-3 text-green-300 hover:text-green-200 text-sm underline",children:"Send another message"})]}),n==="error"&&r.jsxs(C.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"bg-red-600/20 border border-red-400/30 rounded-lg p-4 text-center",children:[r.jsx(of,{className:"w-6 h-6 text-red-400 mx-auto mb-2"}),r.jsx("p",{className:"text-red-300 font-medium",children:"Failed to send message"}),r.jsx("p",{className:"text-red-200/70 text-sm mt-1",children:"Please try again or email me directly."})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-white/90 mb-2",children:"Name *"}),r.jsx("input",{...t("name"),type:"text",id:"name",className:"w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300",placeholder:"Your full name"}),s.name&&r.jsx(C.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-red-400 text-sm mt-1",children:s.name.message})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-white/90 mb-2",children:"Email *"}),r.jsx("input",{...t("email"),type:"email",id:"email",className:"w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300",placeholder:"your.email@example.com"}),s.email&&r.jsx(C.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-red-400 text-sm mt-1",children:s.email.message})]})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-white/90 mb-2",children:"Subject *"}),r.jsx("input",{...t("subject"),type:"text",id:"subject",className:"w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300",placeholder:"What's this about?"}),s.subject&&r.jsx(C.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-red-400 text-sm mt-1",children:s.subject.message})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-white/90 mb-2",children:"Message *"}),r.jsx("textarea",{...t("message"),id:"message",rows:6,className:"w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none",placeholder:"Tell me about your project, ideas, or just say hello..."}),s.message&&r.jsx(C.p,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-red-400 text-sm mt-1",children:s.message.message})]}),r.jsx(C.button,{type:"submit",disabled:i||n==="success",whileHover:{scale:i?1:1.02},whileTap:{scale:i?1:.98},className:`w-full px-8 py-4 rounded-lg font-medium text-white border transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${d()}`,children:l()}),r.jsxs("p",{className:"text-white/60 text-sm text-center",children:["I typically respond within 24 hours. For urgent matters, feel free to email me directly at"," ",r.jsx("a",{href:"mailto:prince@princenyamadi.dev",className:"text-blue-400 hover:text-blue-300 underline",children:"prince@princenyamadi.dev"})]})]})},q1=[{icon:so,title:"Email",value:"prince@princenyamadi.dev",href:"mailto:prince@princenyamadi.dev",description:"Send me an email anytime"},{icon:df,title:"Phone",value:"+1 (555) 123-4567",href:"tel:+15551234567",description:"Available 9 AM - 6 PM PST"},{icon:uf,title:"Location",value:"San Francisco, CA",href:"https://maps.google.com/?q=San+Francisco,CA",description:"Available for local meetings"},{icon:oo,title:"Schedule",value:"Book a Meeting",href:"https://calendly.com/princenyamadi",description:"30-min consultation call"}],W1=[{icon:kn,title:"Response Time",value:"Within 24 hours"},{icon:eu,title:"Meeting Style",value:"Coffee & Code"}],K1=()=>r.jsxs("section",{id:"contact",className:"relative responsive-padding-section",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),r.jsx("div",{className:"absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"})]}),r.jsxs("div",{className:"relative mobile-container",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-16",children:[r.jsxs(C.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"responsive-heading-lg font-bold text-white mb-6",children:["Let's Build Something"," ",r.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Amazing"})]}),r.jsx(C.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"responsive-text-lg text-white/80 max-w-3xl mx-auto leading-relaxed",children:"Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences. Whether you need a full-stack application, consultation, or just want to chat about tech, let's connect!"})]}),r.jsxs("div",{className:"mobile-grid-1 lg:grid-cols-3 responsive-gap",children:[r.jsxs(C.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"lg:col-span-1 space-y-6",children:[r.jsx("h3",{className:"text-2xl font-bold text-white mb-8",children:"Get In Touch"}),r.jsx("div",{className:"space-y-4",children:q1.map((t,e)=>{const s=t.icon;return r.jsx(C.a,{href:t.href,target:t.href.startsWith("http")?"_blank":void 0,rel:t.href.startsWith("http")?"noopener noreferrer":void 0,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:e*.1},whileHover:{scale:1.02,y:-2},className:"group block p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300",children:r.jsxs("div",{className:"flex items-start space-x-4",children:[r.jsx("div",{className:"p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300",children:r.jsx(s,{className:"w-5 h-5 text-blue-400"})}),r.jsxs("div",{className:"flex-1",children:[r.jsx("h4",{className:"font-semibold text-white group-hover:text-blue-300 transition-colors duration-300",children:t.title}),r.jsx("p",{className:"text-white/90 font-medium",children:t.value}),r.jsx("p",{className:"text-white/60 text-sm mt-1",children:t.description})]})]})},t.title)})}),r.jsx("div",{className:"mt-8 space-y-4",children:W1.map((t,e)=>{const s=t.icon;return r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4+e*.1},className:"flex items-center space-x-3 text-white/80",children:[r.jsx(s,{className:"w-5 h-5 text-purple-400"}),r.jsxs("span",{className:"font-medium",children:[t.title,":"]}),r.jsx("span",{children:t.value})]},t.title)})}),r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.6},className:"mt-8 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-400/20",children:[r.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[r.jsx("div",{className:"w-2 h-2 bg-green-400 rounded-full animate-pulse"}),r.jsx("span",{className:"text-green-300 font-medium text-sm",children:"Available for new projects"})]}),r.jsx("p",{className:"text-white/70 text-sm",children:"Currently booking consultations for Q2 2024. Let's discuss your project!"})]})]}),r.jsx(C.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"lg:col-span-2",children:r.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm",children:[r.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Send Me a Message"}),r.jsx(z1,{})]})})]}),r.jsx(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.4},className:"mt-16 text-center",children:r.jsx("p",{className:"text-white/60 max-w-2xl mx-auto",children:"Prefer a more direct approach? Feel free to reach out via email or schedule a call. I'm always excited to discuss new opportunities and interesting projects."})})]})]}),$i={title:"Full Stack Developer & Digital Architect",location:"San Francisco, CA",intro:`Hey there! I'm Prince, a passionate full-stack developer who believes that great code 
          is like poetry—elegant, purposeful, and impactful. My journey in tech started with 
          curiosity and has evolved into a mission to create digital experiences that make a 
          real difference in people's lives.`,story:`What started as late-night coding sessions in college has blossomed into a career 
          I'm genuinely excited about every single day. I've had the privilege of working 
          with startups that became success stories, enterprise companies solving complex 
          challenges, and everything in between. Each project taught me something new, 
          and I bring that collective wisdom to every line of code I write.`,philosophy:`I believe technology should be human-centered, accessible, and beautiful. 
               Whether I'm architecting a complex microservices system or crafting a pixel-perfect 
               UI component, I'm always thinking about the person on the other side of the screen. 
               Great software isn't just about clean code—it's about solving real problems elegantly.`},G1=[{icon:su,title:"Human-Centered Design",description:"Every line of code I write serves a human need. Technology should enhance lives, not complicate them.",color:"from-red-400 to-pink-400"},{icon:hf,title:"Innovation & Learning",description:"I stay curious and embrace new technologies. The tech landscape evolves fast, and so do I.",color:"from-yellow-400 to-orange-400"},{icon:io,title:"Collaboration First",description:"The best solutions emerge from diverse perspectives. I thrive in teams that challenge and inspire.",color:"from-blue-400 to-cyan-400"},{icon:lr,title:"Performance Obsessed",description:"Fast, efficient, and scalable. Every millisecond matters when you're building for millions of users.",color:"from-purple-400 to-indigo-400"}],J1=[{icon:mf,title:"Led Development",metric:"15+ Projects",description:"Successfully delivered from concept to production"},{icon:io,title:"Impact Reach",metric:"500K+ Users",description:"Applications serving thousands of daily active users"},{icon:Qd,title:"Code Contributions",metric:"10K+ Commits",description:"Consistent contributor to codebases and open source"},{icon:tu,title:"Knowledge Sharing",metric:"25+ Articles",description:"Technical blog posts and community contributions"}],Q1=[{icon:eu,title:"Fueled by Coffee",description:"Specialty coffee enthusiast—currently exploring Ethiopian single origins"},{icon:tu,title:"Continuous Learner",description:"Always reading 2-3 tech books simultaneously and taking online courses"},{icon:su,title:"Open Source Advocate",description:"Contributing to projects that make development more accessible and fun"}],Y1=["Started coding at 12 with Python to automate homework assignments","Built my first web app in high school—a grade calculator that went viral at school","Contributed to 50+ open source repositories","Mentored 20+ junior developers through bootcamps and internships","Can debug code as effectively with coffee as without (but prefer with)","Once optimized a database query from 45 seconds to 0.3 seconds—still proud of that one"],X1=()=>{const[t,e]=M.useState(!1);return r.jsxs("section",{id:"about",className:"relative responsive-padding-section",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute top-20 sm:top-40 left-4 sm:left-20 w-16 sm:w-24 h-16 sm:h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse"}),r.jsx("div",{className:"absolute bottom-20 sm:bottom-40 right-4 sm:right-20 w-20 sm:w-32 h-20 sm:h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-700"}),r.jsx("div",{className:"absolute top-40 sm:top-60 right-8 sm:right-40 w-12 sm:w-20 h-12 sm:h-20 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"})]}),r.jsxs("div",{className:"relative mobile-container",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-20",children:[r.jsxs(C.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"responsive-heading-lg font-bold text-white mb-6",children:["About"," ",r.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Prince Nyamadi"})]}),r.jsxs(C.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"responsive-text-lg text-white/80 max-w-3xl mx-auto leading-relaxed",children:[$i.title," based in ",$i.location]})]}),r.jsxs("div",{className:"mobile-grid-2 lg:grid-cols-2 responsive-gap responsive-margin-section",children:[r.jsxs(C.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"space-y-6",children:[r.jsxs("div",{className:"relative",children:[r.jsx(iu,{className:"absolute -top-2 -left-2 w-8 h-8 text-blue-400/40 transform -rotate-12"}),r.jsx("p",{className:"text-lg text-white/90 leading-relaxed pl-6",children:$i.intro})]}),r.jsx("p",{className:"text-white/80 leading-relaxed",children:$i.story}),r.jsx("div",{className:"bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-400/20",children:r.jsx("p",{className:"text-white/90 leading-relaxed italic",children:$i.philosophy})})]}),r.jsxs(C.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"space-y-6",children:[r.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Beyond the Code"}),r.jsx("div",{className:"space-y-4",children:Q1.map((s,i)=>{const n=s.icon;return r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:i*.1},className:"flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300",children:[r.jsx("div",{className:"p-2 bg-purple-500/20 rounded-lg",children:r.jsx(n,{className:"w-5 h-5 text-purple-400"})}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-white",children:s.title}),r.jsx("p",{className:"text-white/70 text-sm mt-1",children:s.description})]})]},s.title)})}),r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"mt-8",children:[r.jsxs(C.button,{onClick:()=>e(!t),whileHover:{scale:1.02},whileTap:{scale:.98},className:"flex items-center justify-between w-full p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-400/30 text-white hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300",children:[r.jsx("span",{className:"font-medium",children:"Fun Facts & Random Trivia"}),t?r.jsx(ff,{className:"w-5 h-5"}):r.jsx(pf,{className:"w-5 h-5"})]}),r.jsx(De,{children:t&&r.jsx(C.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"mt-4 space-y-2 overflow-hidden",children:Y1.map((s,i)=>r.jsxs(C.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3,delay:i*.1},className:"flex items-start space-x-3 p-3 bg-white/5 rounded-lg",children:[r.jsx(Tn,{className:"w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0"}),r.jsx("p",{className:"text-white/80 text-sm",children:s})]},i))})})]})]})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"mb-20",children:[r.jsx("h3",{className:"text-3xl font-bold text-white text-center mb-12",children:"Core Values"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:G1.map((s,i)=>{const n=s.icon;return r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:i*.1},whileHover:{y:-5,scale:1.02},className:"group text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300",children:[r.jsx("div",{className:`inline-flex p-4 rounded-full bg-gradient-to-r ${s.color} mb-4 group-hover:scale-110 transition-transform duration-300`,children:r.jsx(n,{className:"w-8 h-8 text-white"})}),r.jsx("h4",{className:"text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300",children:s.title}),r.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:s.description})]},s.title)})})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[r.jsx("h3",{className:"text-3xl font-bold text-white text-center mb-12",children:"By the Numbers"}),r.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-8",children:J1.map((s,i)=>{const n=s.icon;return r.jsxs(C.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:i*.1},whileHover:{scale:1.05},className:"text-center p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/20 backdrop-blur-sm hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300",children:[r.jsx(n,{className:"w-8 h-8 text-blue-400 mx-auto mb-3"}),r.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:s.metric}),r.jsx("div",{className:"text-sm font-medium text-blue-300 mb-2",children:s.title}),r.jsx("div",{className:"text-xs text-white/60",children:s.description})]},s.title)})})]}),r.jsx(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.4},className:"mt-20 text-center",children:r.jsxs("div",{className:"bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-blue-400/20",children:[r.jsx("p",{className:"text-xl text-white mb-6 max-w-3xl mx-auto",children:"Ready to work with someone who's as excited about your project as you are? Let's turn your vision into reality."}),r.jsx(C.a,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border border-blue-500",children:"Let's Connect"})]})})]})]})},Z1=()=>{const[t,e]=M.useState("all"),[s,i]=M.useState({});M.useEffect(()=>{const m=setTimeout(()=>{const y={};ps.forEach(g=>{g.skills.forEach(T=>{y[T.name]=T.level})}),i(y)},500);return()=>clearTimeout(m)},[]);const n=t==="all"?ps:ps.filter(m=>m.name.toLowerCase().includes(t.toLowerCase())),o=ps.flatMap(m=>m.skills),l=Math.round(o.reduce((m,y)=>m+y.level,0)/o.length),d=o.reduce((m,y)=>m+(y.projects||0),0),h=m=>m>=90?"Expert":m>=75?"Advanced":m>=60?"Intermediate":"Beginner",f=m=>m>=90?"from-green-400 to-emerald-400":m>=75?"from-blue-400 to-cyan-400":m>=60?"from-yellow-400 to-orange-400":"from-gray-400 to-gray-500";return r.jsxs("section",{id:"skills",className:"relative responsive-padding-section",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute top-16 sm:top-32 left-4 sm:left-16 w-16 sm:w-28 h-16 sm:h-28 bg-blue-500/10 rounded-full blur-2xl animate-pulse"}),r.jsx("div",{className:"absolute bottom-16 sm:bottom-32 right-4 sm:right-16 w-20 sm:w-36 h-20 sm:h-36 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"}),r.jsx("div",{className:"absolute top-40 sm:top-80 right-8 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"})]}),r.jsxs("div",{className:"relative mobile-container",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-16",children:[r.jsxs(C.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"responsive-heading-lg font-bold text-white mb-6",children:["Technical"," ",r.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Expertise"})]}),r.jsx(C.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"responsive-text-lg text-white/80 max-w-3xl mx-auto leading-relaxed",children:"A comprehensive overview of my technical skills, tools, and ongoing learning journey"})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"mobile-grid-4 gap-4 sm:gap-6 responsive-margin-section",children:[r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20",children:[r.jsx("div",{className:"text-3xl font-bold text-blue-400 mb-2",children:ps.length}),r.jsx("div",{className:"text-white/80 text-sm",children:"Categories"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20",children:[r.jsx("div",{className:"text-3xl font-bold text-green-400 mb-2",children:o.length}),r.jsx("div",{className:"text-white/80 text-sm",children:"Technologies"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-purple-400 mb-2",children:[l,"%"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"Avg. Proficiency"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-yellow-400 mb-2",children:[d,"+"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"Projects"})]})]}),r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"flex flex-wrap justify-center gap-3 mb-12",children:[r.jsxs(C.button,{onClick:()=>e("all"),whileHover:{scale:1.05},whileTap:{scale:.95},className:`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${t==="all"?"bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500":"bg-white/5 text-white/80 border-white/20 hover:bg-white/10"}`,children:[r.jsx(ru,{className:"w-4 h-4 inline mr-2"}),"All Skills"]}),ps.map(m=>r.jsx(C.button,{onClick:()=>e(m.name),whileHover:{scale:1.05},whileTap:{scale:.95},className:`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${t===m.name?"bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500":"bg-white/5 text-white/80 border-white/20 hover:bg-white/10"}`,children:m.name.split(" ")[0]},m.name))]}),r.jsx(De,{mode:"wait",children:r.jsx(C.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.4},className:"space-y-12 mb-16",children:n.map((m,y)=>r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:y*.1},className:`p-8 bg-gradient-to-r ${m.bgColor} rounded-2xl border border-white/10 backdrop-blur-sm`,children:[r.jsxs("div",{className:"flex items-center mb-8",children:[r.jsx("div",{className:`h-1 w-12 bg-gradient-to-r ${m.color} rounded-full mr-4`}),r.jsx("h3",{className:"text-2xl font-bold text-white",children:m.name})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:m.skills.map((g,T)=>r.jsxs(C.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,delay:T*.1},className:"group p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("span",{className:"text-2xl",children:g.icon}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-white group-hover:text-blue-300 transition-colors",children:g.name}),r.jsx("p",{className:"text-white/60 text-sm",children:g.years})]})]}),r.jsx("div",{className:"text-right",children:r.jsx("div",{className:`text-sm font-medium px-2 py-1 rounded bg-gradient-to-r ${f(g.level)} text-white`,children:h(g.level)})})]}),r.jsxs("div",{className:"mb-4",children:[r.jsxs("div",{className:"flex justify-between text-sm text-white/70 mb-2",children:[r.jsx("span",{children:"Proficiency"}),r.jsxs("span",{children:[g.level,"%"]})]}),r.jsx("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:r.jsx(C.div,{initial:{width:0},animate:{width:`${s[g.name]||0}%`},transition:{duration:1.5,delay:.5+T*.1,ease:"easeOut"},className:`h-full bg-gradient-to-r ${f(g.level)} rounded-full`})})]}),r.jsx("p",{className:"text-white/70 text-sm mb-3",children:g.description}),g.projects&&r.jsxs("div",{className:"flex items-center text-white/60 text-sm",children:[r.jsx(Jd,{className:"w-4 h-4 mr-1"}),r.jsxs("span",{children:[g.projects," projects"]})]})]},g.name))})]},m.name))},t)}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[r.jsxs(C.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-400/20",children:[r.jsxs("div",{className:"flex items-center mb-6",children:[r.jsx(en,{className:"w-8 h-8 text-green-400 mr-3"}),r.jsx("h3",{className:"text-2xl font-bold text-white",children:"Certifications"})]}),r.jsx("div",{className:"space-y-4",children:$p.map((m,y)=>r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:y*.1},className:"p-4 bg-white/5 rounded-lg border border-white/10",children:[r.jsxs("div",{className:"flex justify-between items-start mb-2",children:[r.jsx("h4",{className:"font-semibold text-white",children:m.name}),r.jsx("span",{className:"text-green-400 text-sm font-medium",children:m.year})]}),r.jsx("p",{className:"text-white/70 text-sm",children:m.issuer}),r.jsx("div",{className:"mt-2",children:r.jsx("span",{className:"text-xs px-2 py-1 bg-green-400/20 text-green-300 rounded",children:m.level})})]},m.name))})]}),r.jsxs(C.div,{initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-400/20",children:[r.jsxs("div",{className:"flex items-center mb-6",children:[r.jsx(ro,{className:"w-8 h-8 text-purple-400 mr-3"}),r.jsx("h3",{className:"text-2xl font-bold text-white",children:"Learning Goals"})]}),r.jsx("div",{className:"space-y-4",children:Bp.map((m,y)=>r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:y*.1},className:"p-4 bg-white/5 rounded-lg border border-white/10",children:[r.jsxs("div",{className:"flex justify-between items-start mb-2",children:[r.jsx("h4",{className:"font-semibold text-white",children:m.skill}),r.jsxs("div",{className:"flex items-center text-purple-400 text-sm",children:[r.jsx(kn,{className:"w-4 h-4 mr-1"}),m.timeline]})]}),r.jsx("p",{className:"text-white/70 text-sm",children:m.reason})]},m.skill))})]})]})]})]})},e2=()=>{const[t,e]=M.useState(0),[s,i]=M.useState(!0),n=er.filter(m=>m.featured);M.useEffect(()=>{if(!s)return;const m=setInterval(()=>{e(y=>(y+1)%n.length)},5e3);return()=>clearInterval(m)},[s,n.length]);const o=()=>{e(m=>(m+1)%n.length),i(!1)},l=()=>{e(m=>(m-1+n.length)%n.length),i(!1)},d=m=>{e(m),i(!1)},h=m=>Array.from({length:5},(y,g)=>r.jsx(Tn,{className:`w-4 h-4 ${g<m?"text-yellow-400 fill-current":"text-gray-400"}`},g)),f=m=>{const g={client:{label:"Client",color:"from-blue-400 to-blue-600"},colleague:{label:"Colleague",color:"from-green-400 to-green-600"},manager:{label:"Manager",color:"from-purple-400 to-purple-600"},mentee:{label:"Mentee",color:"from-orange-400 to-orange-600"}}[m];return r.jsx("span",{className:`inline-block px-3 py-1 bg-gradient-to-r ${g.color} text-white text-xs font-medium rounded-full`,children:g.label})};return r.jsxs("section",{id:"testimonials",className:"relative py-20 px-4 sm:px-6 lg:px-8",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute top-24 left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),r.jsx("div",{className:"absolute bottom-24 right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"}),r.jsx("div",{className:"absolute top-64 right-24 w-28 h-28 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"})]}),r.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-16",children:[r.jsxs(C.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["What"," ",r.jsx("span",{className:"bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Clients Say"})]}),r.jsx(C.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"text-xl text-white/80 max-w-3xl mx-auto leading-relaxed",children:"Real feedback from clients, colleagues, and team members who've experienced the impact of collaborative work"})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-16",children:[r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-blue-400 mb-2",children:[Lr.clientSatisfaction,"%"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"Client Satisfaction"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20",children:[r.jsx("div",{className:"text-3xl font-bold text-yellow-400 mb-2",children:Lr.averageRating.toFixed(1)}),r.jsx("div",{className:"text-white/80 text-sm",children:"Average Rating"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-green-400 mb-2",children:[Lr.onTimeDelivery,"%"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"On-Time Delivery"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-purple-400 mb-2",children:[Lr.repeatedClients,"%"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"Repeat Clients"})]})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"relative mb-16",children:[r.jsxs("div",{className:"bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12",children:[r.jsx(De,{mode:"wait",children:r.jsxs(C.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.5},className:"relative",children:[r.jsx(iu,{className:"absolute -top-4 -left-4 w-12 h-12 text-blue-400/20 transform -rotate-12"}),r.jsx("div",{className:"flex items-center justify-center mb-6",children:r.jsx("div",{className:"flex space-x-1",children:h(n[t].rating)})}),r.jsxs("blockquote",{className:"text-xl md:text-2xl text-white/90 text-center leading-relaxed mb-8 max-w-4xl mx-auto",children:['"',n[t].content,'"']}),r.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6",children:[r.jsxs("div",{className:"relative",children:[r.jsx("img",{src:n[t].image,alt:n[t].name,className:"w-16 h-16 rounded-full border-2 border-blue-400/30"}),r.jsx("div",{className:"absolute -bottom-2 -right-2",children:f(n[t].relationship)})]}),r.jsxs("div",{className:"text-center md:text-left",children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-1",children:n[t].name}),r.jsx("p",{className:"text-blue-300 font-medium",children:n[t].role}),r.jsx("p",{className:"text-white/60 text-sm",children:n[t].company}),n[t].project&&r.jsxs("p",{className:"text-white/50 text-xs mt-1",children:["Project: ",n[t].project]})]}),r.jsxs("div",{className:"flex space-x-3",children:[n[t].linkedinUrl&&r.jsx(C.a,{href:n[t].linkedinUrl,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},className:"p-2 bg-blue-600/20 rounded-full hover:bg-blue-600/30 transition-colors",children:r.jsx(Xd,{className:"w-4 h-4 text-blue-400"})}),n[t].companyUrl&&r.jsx(C.a,{href:n[t].companyUrl,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},className:"p-2 bg-purple-600/20 rounded-full hover:bg-purple-600/30 transition-colors",children:r.jsx(nu,{className:"w-4 h-4 text-purple-400"})})]})]})]},t)}),r.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2 left-4",children:r.jsx(C.button,{onClick:l,whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm",children:r.jsx(gf,{className:"w-6 h-6 text-white"})})}),r.jsx("div",{className:"absolute top-1/2 transform -translate-y-1/2 right-4",children:r.jsx(C.button,{onClick:o,whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm",children:r.jsx(yf,{className:"w-6 h-6 text-white"})})})]}),r.jsx("div",{className:"flex justify-center space-x-3 mt-6",children:n.map((m,y)=>r.jsx(C.button,{onClick:()=>d(y),whileHover:{scale:1.2},className:`w-3 h-3 rounded-full transition-all duration-300 ${y===t?"bg-blue-400 ring-2 ring-blue-400/50":"bg-white/30 hover:bg-white/50"}`},y))})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.4},className:"mb-16",children:[r.jsx("h3",{className:"text-3xl font-bold text-white text-center mb-12",children:"Recognition & Awards"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:zp.map((m,y)=>r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:y*.1},whileHover:{y:-5,scale:1.02},className:"group text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm",children:[r.jsx("div",{className:"text-4xl mb-4",children:m.icon}),r.jsx("h4",{className:"text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors",children:m.title}),r.jsx("p",{className:"text-blue-300 font-medium text-sm mb-2",children:m.organization}),r.jsx("p",{className:"text-white/60 text-sm",children:m.description}),r.jsx("div",{className:"mt-3 text-white/50 text-xs",children:m.year})]},m.title))})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.6},children:[r.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-8",children:"More Testimonials"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:er.filter(m=>!m.featured).map((m,y)=>r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:y*.1},whileHover:{y:-3},className:"p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center mb-4",children:[r.jsx("img",{src:m.image,alt:m.name,className:"w-12 h-12 rounded-full border border-white/20 mr-4"}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold text-white text-sm",children:m.name}),r.jsx("p",{className:"text-white/60 text-xs",children:m.role}),r.jsx("div",{className:"flex space-x-1 mt-1",children:h(m.rating)})]})]}),r.jsxs("p",{className:"text-white/80 text-sm leading-relaxed",children:['"',m.content.substring(0,120),'..."']}),r.jsx("div",{className:"mt-3",children:f(m.relationship)})]},m.id))})]}),r.jsx(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.8},className:"mt-16 text-center",children:r.jsxs("div",{className:"bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-blue-400/20",children:[r.jsx("p",{className:"text-xl text-white mb-6 max-w-3xl mx-auto",children:"Ready to join these satisfied clients? Let's discuss how we can achieve similar results for your project."}),r.jsx(C.a,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 border border-blue-500",children:"Start Your Project"})]})})]})]})},t2=(t,e=2e3,s=!1)=>{const[i,n]=M.useState(0);return M.useEffect(()=>{if(!s)return;let o,l;const d=h=>{o||(o=h);const f=Math.min((h-o)/e,1);n(Math.floor(f*t)),f<1&&(l=requestAnimationFrame(d))};return l=requestAnimationFrame(d),()=>cancelAnimationFrame(l)},[t,e,s]),i},s2=()=>{const[t,e]=M.useState("all"),s=M.useRef(null),i=xf(s,{once:!0}),n=["all","technical","business","leadership","quality"],o=t==="all"?qr:qr.filter(m=>m.category===t),l=qr.filter(m=>m.featured),d=m=>{switch(m){case"up":return r.jsx(ro,{className:"w-4 h-4 text-green-400"});case"down":return r.jsx(vf,{className:"w-4 h-4 text-red-400"});default:return r.jsx(bf,{className:"w-4 h-4 text-gray-400"})}},h=m=>{switch(m){case"up":return"text-green-400";case"down":return"text-red-400";default:return"text-gray-400"}},f=(m,y)=>typeof m=="string"?m:`${m}${y||""}`;return r.jsxs("section",{id:"achievements",className:"relative py-20 px-4 sm:px-6 lg:px-8",ref:s,children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:"absolute top-32 left-16 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"}),r.jsx("div",{className:"absolute bottom-32 right-16 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"}),r.jsx("div",{className:"absolute top-80 right-32 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"})]}),r.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-16",children:[r.jsxs(C.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.2},className:"text-4xl md:text-5xl font-bold text-white mb-6",children:["Achievements &"," ",r.jsx("span",{className:"bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent",children:"Impact"})]}),r.jsx(C.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.4},className:"text-xl text-white/80 max-w-3xl mx-auto leading-relaxed",children:"Measurable results and key performance indicators that demonstrate the impact of our collaborations"})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-16",children:[r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-blue-400 mb-2",children:[Mi.yearsOfExperience,"+"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"Years Experience"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-green-400 mb-2",children:[Mi.totalProjects,"+"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"Projects Completed"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20",children:[r.jsxs("div",{className:"text-3xl font-bold text-purple-400 mb-2",children:[Mi.clientsServed,"+"]}),r.jsx("div",{className:"text-white/80 text-sm",children:"Clients Served"})]}),r.jsxs("div",{className:"text-center p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/20",children:[r.jsx("div",{className:"text-3xl font-bold text-yellow-400 mb-2",children:Mi.linesOfCode}),r.jsx("div",{className:"text-white/80 text-sm",children:"Lines of Code"})]})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"mb-16",children:[r.jsx("h3",{className:"text-3xl font-bold text-white text-center mb-12",children:"Key Achievements"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:l.map((m,y)=>{const g=m.icon,T=t2(typeof m.value=="number"?m.value:0,2e3,i);return r.jsxs(C.div,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,delay:y*.1},whileHover:{y:-5,scale:1.02},className:`group p-6 bg-gradient-to-br ${m.bgColor} rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm`,children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("div",{className:`p-3 bg-gradient-to-r ${m.color} rounded-lg group-hover:scale-110 transition-transform duration-300`,children:r.jsx(g,{className:"w-6 h-6 text-white"})}),m.trend&&r.jsxs("div",{className:"flex items-center space-x-1",children:[d(m.trend),r.jsx("span",{className:`text-sm font-medium ${h(m.trend)}`,children:m.trendValue})]})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-3xl font-bold text-white mb-2",children:typeof m.value=="number"?f(T,m.unit):m.value}),r.jsx("h4",{className:"text-lg font-semibold text-white/90 mb-2 group-hover:text-blue-300 transition-colors",children:m.title}),r.jsx("p",{className:"text-white/60 text-sm leading-relaxed",children:m.description})]})]},m.id)})})]}),r.jsx(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"flex flex-wrap justify-center gap-3 mb-12",children:n.map(m=>r.jsxs(C.button,{onClick:()=>e(m),whileHover:{scale:1.05},whileTap:{scale:.95},className:`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${t===m?"bg-gradient-to-r from-green-600 to-yellow-600 text-white border-green-500":"bg-white/5 text-white/80 border-white/20 hover:bg-white/10"}`,children:[r.jsx(ru,{className:"w-4 h-4 inline mr-2"}),m.charAt(0).toUpperCase()+m.slice(1)]},m))}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.4},className:"mb-16",children:[r.jsx("h3",{className:"text-2xl font-bold text-white text-center mb-8",children:"Detailed Metrics"}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map((m,y)=>{const g=m.icon;return r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:y*.1},whileHover:{y:-3},className:"p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("div",{className:`p-2 bg-gradient-to-r ${m.color} rounded-lg`,children:r.jsx(g,{className:"w-5 h-5 text-white"})}),r.jsxs("div",{className:"text-right",children:[r.jsx("div",{className:"text-xl font-bold text-white",children:f(m.value,m.unit)}),m.trend&&r.jsxs("div",{className:"flex items-center justify-end space-x-1 mt-1",children:[d(m.trend),r.jsx("span",{className:`text-xs ${h(m.trend)}`,children:m.trendValue})]})]})]}),r.jsx("h4",{className:"font-semibold text-white mb-2",children:m.title}),r.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:m.description}),r.jsx("div",{className:"mt-3",children:r.jsx("span",{className:`inline-block px-2 py-1 bg-gradient-to-r ${m.color} text-white text-xs font-medium rounded`,children:m.category})})]},m.id)})})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.6},className:"mb-16",children:[r.jsxs("div",{className:"flex items-center justify-center mb-12",children:[r.jsx(oo,{className:"w-8 h-8 text-yellow-400 mr-3"}),r.jsx("h3",{className:"text-3xl font-bold text-white",children:"Milestone Timeline"})]}),r.jsx("div",{className:"max-w-4xl mx-auto",children:r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-yellow-400 via-green-400 to-blue-400"}),Hp.map((m,y)=>r.jsxs(C.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:y*.2},className:`relative flex items-center mb-12 ${y%2===0?"md:flex-row":"md:flex-row-reverse"} flex-col md:flex-row`,children:[r.jsx("div",{className:"absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-4 border-gray-900 z-10",children:r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-30"})}),r.jsx("div",{className:`w-full md:w-5/12 ml-12 md:ml-0 ${y%2===0?"md:mr-auto md:pr-8":"md:ml-auto md:pl-8"}`,children:r.jsxs(C.div,{whileHover:{scale:1.02,y:-5},className:`bg-gradient-to-br ${m.color} p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm`,children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx("span",{className:"text-2xl mr-3",children:m.icon}),r.jsx("span",{className:"text-white/80 text-sm font-medium",children:new Date(m.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})})]}),r.jsx("h4",{className:"text-lg font-semibold text-white mb-2",children:m.title}),r.jsx("p",{className:"text-white/80 text-sm leading-relaxed",children:m.description}),r.jsx("div",{className:"mt-3",children:r.jsx("span",{className:"inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full",children:m.type})})]})})]},m.id))]})})]}),r.jsx(C.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.8},className:"text-center",children:r.jsxs("div",{className:"bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-2xl p-8 border border-blue-400/20",children:[r.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Preferred Tech Stack"}),r.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-6",children:Mi.preferredTechStack.map((m,y)=>r.jsx(C.span,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.5,delay:y*.1},whileHover:{scale:1.1},className:"px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 font-medium rounded-full border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300",children:m},m))}),r.jsx("p",{className:"text-white/70 max-w-2xl mx-auto",children:"Constantly evolving with the latest technologies while maintaining expertise in proven solutions"})]})})]})]})};var ym={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Rd=ie.createContext&&ie.createContext(ym),i2=["attr","size","title"];function r2(t,e){if(t==null)return{};var s=n2(t,e),i,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(s[i]=t[i])}return s}function n2(t,e){if(t==null)return{};var s={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;s[i]=t[i]}return s}function jn(){return jn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},jn.apply(this,arguments)}function Od(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),s.push.apply(s,i)}return s}function _n(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Od(Object(s),!0).forEach(function(i){a2(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Od(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function a2(t,e,s){return e=o2(e),e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function o2(t){var e=l2(t,"string");return typeof e=="symbol"?e:e+""}function l2(t,e){if(typeof t!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xm(t){return t&&t.map((e,s)=>ie.createElement(e.tag,_n({key:s},e.attr),xm(e.child)))}function ge(t){return e=>ie.createElement(c2,jn({attr:_n({},t.attr)},e),xm(t.child))}function c2(t){var e=s=>{var{attr:i,size:n,title:o}=t,l=r2(t,i2),d=n||s.size||"1em",h;return s.className&&(h=s.className),t.className&&(h=(h?h+" ":"")+t.className),ie.createElement("svg",jn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,i,l,{className:h,style:_n(_n({color:t.color||s.color},s.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&ie.createElement("title",null,o),t.children)};return Rd!==void 0?ie.createElement(Rd.Consumer,null,s=>e(s)):e(ym)}function d2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(t)}function bm(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(t)}function nr(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(t)}function u2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(t)}function vm(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(t)}function h2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(t)}function m2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"},child:[]},{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"},child:[]}]})(t)}function Hi(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function f2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(t)}function eo(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(t)}function p2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 3 21 3 21 9"},child:[]},{tag:"polyline",attr:{points:"9 21 3 21 3 15"},child:[]},{tag:"line",attr:{x1:"21",y1:"3",x2:"14",y2:"10"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(t)}function g2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(t)}function y2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 14 10 14 10 20"},child:[]},{tag:"polyline",attr:{points:"20 10 14 10 14 4"},child:[]},{tag:"line",attr:{x1:"14",y1:"10",x2:"21",y2:"3"},child:[]},{tag:"line",attr:{x1:"3",y1:"21",x2:"10",y2:"14"},child:[]}]})(t)}function x2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(t)}function b2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(t)}function to(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(t)}function v2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(t)}function Wo(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(t)}function w2(t){return ge({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}const j2=()=>{var d,h;const[t,e]=M.useState("all"),[s,i]=M.useState(null),[n,o]=M.useState("overview"),l=M.useMemo(()=>t==="all"?Ue:Ue.filter(f=>f.category===t),[t]);return r.jsxs("section",{id:"projects",className:"responsive-padding-section bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900",children:[r.jsxs("div",{className:"mobile-container",children:[r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[r.jsx("h2",{className:"responsive-heading-lg font-bold text-white mb-4",children:"Featured Projects"}),r.jsx("p",{className:"responsive-text-lg text-slate-300 max-w-3xl mx-auto",children:"Explore my portfolio of innovative solutions, from enterprise platforms to AI-powered applications"}),r.jsx("div",{className:"mobile-grid-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto",children:[{label:"Projects Completed",value:Dr.completedProjects,icon:to},{label:"Technologies Used",value:`${Dr.techStackVariety}+`,icon:u2},{label:"Team Members",value:`${Dr.totalTeamMembers}+`,icon:w2},{label:"Avg Timeline",value:Dr.averageTimeline,icon:nr}].map((f,m)=>r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:m*.1},className:"bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10",children:[r.jsx(f.icon,{className:"w-8 h-8 text-blue-400 mx-auto mb-2"}),r.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:f.value}),r.jsx("div",{className:"text-sm text-slate-300",children:f.label})]},f.label))})]}),r.jsx(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"flex flex-wrap justify-center gap-4 mb-12",children:Vp.map(f=>r.jsxs("button",{onClick:()=>e(f.id),className:`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${t===f.id?"bg-blue-500 text-white shadow-lg shadow-blue-500/25":"bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"}`,children:[f.name," (",f.count,")"]},f.id))}),r.jsx("div",{className:"mobile-grid-3 xl:grid-cols-3 responsive-gap responsive-margin-section",children:r.jsx(De,{children:l.slice(0,6).map((f,m)=>r.jsxs(C.div,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:m*.1},className:"group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10",children:[r.jsxs("div",{className:"relative overflow-hidden",children:[r.jsx("img",{src:f.image,alt:f.title,className:"w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),r.jsx("div",{className:`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${f.status==="completed"?"bg-green-500/20 text-green-300 border border-green-500/30":f.status==="in-progress"?"bg-yellow-500/20 text-yellow-300 border border-yellow-500/30":"bg-purple-500/20 text-purple-300 border border-purple-500/30"}`,children:f.status.replace("-"," ").toUpperCase()}),f.featured&&r.jsx("div",{className:"absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30",children:"FEATURED"})]}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${f.category==="fullstack"?"bg-purple-500/20 text-purple-300":f.category==="web"?"bg-blue-500/20 text-blue-300":f.category==="mobile"?"bg-green-500/20 text-green-300":f.category==="ai"?"bg-pink-500/20 text-pink-300":"bg-orange-500/20 text-orange-300"}`,children:f.category.toUpperCase()}),f.testimonial&&r.jsx("div",{className:"flex items-center text-yellow-400",children:[...Array(f.testimonial.rating)].map((y,g)=>r.jsx(to,{className:"w-4 h-4 fill-current"},g))})]}),r.jsx("h3",{className:"text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors",children:f.title}),r.jsx("p",{className:"text-sm text-blue-300 mb-3",children:f.subtitle}),r.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4",children:f.description}),r.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[f.techStack.slice(0,4).map(y=>r.jsx("span",{className:"px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300",children:y.name},y.name)),f.techStack.length>4&&r.jsxs("span",{className:"px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300",children:["+",f.techStack.length-4," more"]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center space-x-3",children:[f.github&&r.jsx("a",{href:f.github,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",children:r.jsx(f2,{className:"w-4 h-4"})}),f.live&&r.jsx("a",{href:f.live,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",children:r.jsx(m2,{className:"w-4 h-4"})}),f.demo&&r.jsx("a",{href:f.demo,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",children:r.jsx(x2,{className:"w-4 h-4"})})]}),r.jsx("button",{onClick:()=>i(f),className:"px-4 py-2 text-sm font-medium text-blue-300 hover:text-white bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-all duration-200",children:"View Details"})]})]})]},f.id))})}),l.length>6&&r.jsx(C.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-center",children:r.jsxs("button",{className:"px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200",children:["View All Projects (",l.length,")"]})})]}),r.jsx(De,{children:s&&r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:()=>i(null),children:r.jsxs(C.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"bg-slate-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden",onClick:f=>f.stopPropagation(),children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-700",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-2xl font-bold text-white",children:s.title}),r.jsx("p",{className:"text-blue-300",children:s.subtitle})]}),r.jsx("button",{onClick:()=>i(null),className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",children:"✕"})]}),r.jsx("div",{className:"flex border-b border-slate-700",children:[{id:"overview",label:"Overview"},{id:"case-study",label:"Case Study",show:!!s.caseStudy},{id:"code",label:"Code Samples",show:!!((d=s.codeSamples)!=null&&d.length)},{id:"metrics",label:"Metrics",show:!!((h=s.metrics)!=null&&h.length)}].filter(f=>f.show!==!1).map(f=>r.jsx("button",{onClick:()=>o(f.id),className:`px-6 py-3 text-sm font-medium transition-colors ${n===f.id?"text-blue-300 border-b-2 border-blue-300":"text-slate-400 hover:text-white"}`,children:f.label},f.id))}),r.jsxs("div",{className:"p-6 max-h-[60vh] overflow-y-auto",children:[n==="overview"&&r.jsx(_2,{project:s}),n==="case-study"&&s.caseStudy&&r.jsx(N2,{project:s}),n==="code"&&s.codeSamples&&r.jsx(T2,{project:s}),n==="metrics"&&s.metrics&&r.jsx(k2,{project:s})]})]})})})]})},_2=({project:t})=>r.jsxs("div",{className:"space-y-6",children:[t.gallery&&r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.gallery.map((e,s)=>r.jsx("img",{src:e,alt:`${t.title} screenshot ${s+1}`,className:"w-full h-48 object-cover rounded-lg"},s))}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"About This Project"}),r.jsx("p",{className:"text-slate-300 leading-relaxed",children:t.longDescription})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Key Features"}),r.jsx("ul",{className:"space-y-2",children:t.features.map((e,s)=>r.jsxs("li",{className:"flex items-start text-slate-300",children:[r.jsx("span",{className:"text-blue-400 mr-2",children:"•"}),e]},s))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Tech Stack"}),r.jsx("div",{className:"space-y-2",children:t.techStack.map(e=>r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-slate-300",children:e.name}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("div",{className:"w-20 h-2 bg-slate-700 rounded-full overflow-hidden",children:r.jsx("div",{className:"h-full bg-blue-400 transition-all duration-300",style:{width:`${e.proficiency}%`}})}),r.jsxs("span",{className:"text-xs text-slate-400",children:[e.proficiency,"%"]})]})]},e.name))})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Challenges"}),r.jsx("ul",{className:"space-y-2",children:t.challenges.map((e,s)=>r.jsxs("li",{className:"flex items-start text-slate-300",children:[r.jsx("span",{className:"text-red-400 mr-2",children:"⚡"}),e]},s))})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Key Learnings"}),r.jsx("ul",{className:"space-y-2",children:t.learnings.map((e,s)=>r.jsxs("li",{className:"flex items-start text-slate-300",children:[r.jsx("span",{className:"text-green-400 mr-2",children:"✓"}),e]},s))})]})]}),t.testimonial&&r.jsxs("div",{className:"bg-slate-700/50 rounded-xl p-6",children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Client Testimonial"}),r.jsxs("blockquote",{className:"text-slate-300 italic mb-4",children:['"',t.testimonial.content,'"']}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsxs("div",{children:[r.jsx("div",{className:"font-medium text-white",children:t.testimonial.author}),r.jsxs("div",{className:"text-sm text-slate-400",children:[t.testimonial.role," at ",t.testimonial.company]})]}),r.jsx("div",{className:"flex items-center text-yellow-400",children:[...Array(t.testimonial.rating)].map((e,s)=>r.jsx(to,{className:"w-4 h-4 fill-current"},s))})]})]})]}),N2=({project:t})=>r.jsx("div",{className:"space-y-6",children:t.caseStudy&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Challenge"}),r.jsx("p",{className:"text-slate-300 leading-relaxed",children:t.caseStudy.challenge})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Solution"}),r.jsx("p",{className:"text-slate-300 leading-relaxed",children:t.caseStudy.solution})]}),t.caseStudy.technicalDetails&&r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Technical Implementation"}),r.jsx("p",{className:"text-slate-300 leading-relaxed",children:t.caseStudy.technicalDetails})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Results"}),r.jsx("ul",{className:"space-y-2",children:t.caseStudy.results.map((e,s)=>r.jsxs("li",{className:"flex items-start text-slate-300",children:[r.jsx(Wo,{className:"text-green-400 mr-2 mt-1 flex-shrink-0"}),e]},s))})]})]})}),T2=({project:t})=>{var e;return r.jsx("div",{className:"space-y-6",children:(e=t.codeSamples)==null?void 0:e.map((s,i)=>r.jsxs("div",{className:"bg-slate-900 rounded-xl overflow-hidden",children:[r.jsxs("div",{className:"p-4 border-b border-slate-700",children:[r.jsx("h4",{className:"text-lg font-semibold text-white mb-2",children:s.title}),r.jsx("p",{className:"text-slate-300 text-sm",children:s.description}),s.highlights&&r.jsx("div",{className:"flex flex-wrap gap-2 mt-3",children:s.highlights.map((n,o)=>r.jsx("span",{className:"px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-300",children:n},o))})]}),r.jsx("pre",{className:"p-4 overflow-x-auto text-sm",children:r.jsx("code",{className:"text-slate-300 language-typescript",children:s.code})})]},i))})},k2=({project:t})=>{var e;return r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:(e=t.metrics)==null?void 0:e.map((s,i)=>r.jsxs("div",{className:"bg-slate-700/50 rounded-xl p-6 text-center",children:[r.jsx("div",{className:`text-3xl font-bold mb-2 ${s.trend==="up"?"text-green-400":s.trend==="down"?"text-red-400":"text-blue-400"}`,children:s.value}),r.jsx("div",{className:"text-slate-300 text-sm mb-2",children:s.label}),s.trend&&r.jsxs("div",{className:`flex items-center justify-center text-xs ${s.trend==="up"?"text-green-400":s.trend==="down"?"text-red-400":"text-slate-400"}`,children:[r.jsx(Wo,{className:`w-3 h-3 mr-1 ${s.trend==="down"?"rotate-180":""}`}),s.trend==="up"?"Increasing":s.trend==="down"?"Decreasing":"Stable"]})]},i))})},I2=()=>{const[t,e]=M.useState("all"),[s,i]=M.useState(null),[n,o]=M.useState(""),[l,d]=M.useState([]),[h,f]=M.useState("latest"),m=M.useMemo(()=>{let x=[...xt];switch(t!=="all"&&(x=x.filter(j=>j.category.id===t)),n&&(x=x.filter(j=>j.title.toLowerCase().includes(n.toLowerCase())||j.excerpt.toLowerCase().includes(n.toLowerCase())||j.tags.some(S=>S.name.toLowerCase().includes(n.toLowerCase())))),l.length>0&&(x=x.filter(j=>l.every(S=>j.tags.some(z=>z.id===S)))),h){case"popular":x.sort((j,S)=>S.views-j.views);break;case"trending":x.sort((j,S)=>S.likes-j.likes);break;case"latest":default:x.sort((j,S)=>new Date(S.publishedAt).getTime()-new Date(j.publishedAt).getTime());break}return x},[t,n,l,h]),y=x=>{d(j=>j.includes(x)?j.filter(S=>S!==x):[...j,x])},g=x=>new Date(x).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),T=x=>{switch(x){case"beginner":return"text-green-400 bg-green-500/20";case"intermediate":return"text-yellow-400 bg-yellow-500/20";case"advanced":return"text-red-400 bg-red-500/20";default:return"text-blue-400 bg-blue-500/20"}};return r.jsxs("section",{id:"blog",className:"py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900",children:[r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[r.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Technical Blog"}),r.jsx("p",{className:"text-xl text-slate-300 max-w-3xl mx-auto",children:"Insights, tutorials, and deep dives into modern web development, AI, and software engineering"}),r.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto",children:[{label:"Articles Published",value:Mr.totalPosts,icon:d2},{label:"Total Views",value:`${Math.floor(Mr.totalViews/1e3)}K+`,icon:Hi},{label:"Average Read Time",value:`${Mr.averageReadTime} min`,icon:nr},{label:"Categories",value:Mr.categoriesCount,icon:v2}].map((x,j)=>r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:j*.1},className:"bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10",children:[r.jsx(x.icon,{className:"w-8 h-8 text-purple-400 mx-auto mb-2"}),r.jsx("div",{className:"text-2xl font-bold text-white mb-1",children:x.value}),r.jsx("div",{className:"text-sm text-slate-300",children:x.label})]},x.label))})]}),r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-12",children:[r.jsxs("div",{className:"relative max-w-2xl mx-auto mb-8",children:[r.jsx(b2,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"}),r.jsx("input",{type:"text",placeholder:"Search articles, tags, or topics...",value:n,onChange:x=>o(x.target.value),className:"w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 transition-colors"})]}),r.jsxs("div",{className:"flex flex-wrap justify-center gap-4 mb-6",children:[r.jsxs("button",{onClick:()=>e("all"),className:`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${t==="all"?"bg-purple-500 text-white shadow-lg shadow-purple-500/25":"bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"}`,children:["All Articles (",xt.length,")"]}),Qs.map(x=>r.jsxs("button",{onClick:()=>e(x.id),className:`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${t===x.id?"bg-purple-500 text-white shadow-lg shadow-purple-500/25":"bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"}`,children:[x.icon," ",x.name]},x.id))]}),r.jsxs("div",{className:"flex items-center justify-center space-x-4",children:[r.jsx("span",{className:"text-slate-300 text-sm",children:"Sort by:"}),[{id:"latest",label:"Latest",icon:bm},{id:"popular",label:"Most Viewed",icon:Hi},{id:"trending",label:"Most Liked",icon:Wo}].map(x=>r.jsxs("button",{onClick:()=>f(x.id),className:`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${h===x.id?"bg-purple-500/20 text-purple-300":"text-slate-400 hover:text-white"}`,children:[r.jsx(x.icon,{className:"w-4 h-4"}),r.jsx("span",{children:x.label})]},x.id))]})]}),sc.length>0&&t==="all"&&!n&&r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mb-16",children:[r.jsx("h3",{className:"text-2xl font-bold text-white mb-8 text-center",children:"Featured Articles"}),r.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:sc.slice(0,2).map((x,j)=>r.jsxs(C.article,{initial:{opacity:0,x:j===0?-20:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:j*.2},className:"group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10",children:[r.jsxs("div",{className:"relative overflow-hidden",children:[r.jsx("img",{src:x.coverImage,alt:x.title,className:"w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),r.jsx("div",{className:"absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30",children:"FEATURED"}),r.jsx("div",{className:`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${T(x.difficulty)}`,children:x.difficulty.toUpperCase()})]}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium bg-${x.category.color}-500/20 text-${x.category.color}-300`,children:x.category.name}),r.jsxs("div",{className:"flex items-center space-x-4 text-slate-400 text-sm",children:[r.jsxs("span",{className:"flex items-center",children:[r.jsx(Hi,{className:"w-4 h-4 mr-1"}),x.views.toLocaleString()]}),r.jsxs("span",{className:"flex items-center",children:[r.jsx(eo,{className:"w-4 h-4 mr-1"}),x.likes]})]})]}),r.jsx("h3",{className:"text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors",children:x.title}),r.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4",children:x.excerpt}),r.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:x.tags.slice(0,3).map(S=>r.jsx("span",{className:"px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300",children:S.name},S.id))}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center space-x-3",children:[r.jsx("img",{src:x.author.avatar,alt:x.author.name,className:"w-8 h-8 rounded-full"}),r.jsxs("div",{children:[r.jsx("div",{className:"text-sm font-medium text-white",children:x.author.name}),r.jsx("div",{className:"text-xs text-slate-400",children:g(x.publishedAt)})]})]}),r.jsx("button",{onClick:()=>i(x),className:"px-4 py-2 text-sm font-medium text-purple-300 hover:text-white bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-all duration-200",children:"Read More"})]})]})]},x.id))})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.jsx(De,{children:m.slice(0,9).map((x,j)=>r.jsxs(C.article,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:j*.1},className:"group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10",children:[r.jsxs("div",{className:"relative overflow-hidden",children:[r.jsx("img",{src:x.coverImage,alt:x.title,className:"w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),r.jsx("div",{className:`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${T(x.difficulty)}`,children:x.difficulty.toUpperCase()})]}),r.jsxs("div",{className:"p-6",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium bg-${x.category.color}-500/20 text-${x.category.color}-300`,children:x.category.name}),r.jsxs("span",{className:"text-xs text-slate-400 flex items-center",children:[r.jsx(nr,{className:"w-3 h-3 mr-1"}),x.readTime," min read"]})]}),r.jsx("h3",{className:"text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2",children:x.title}),r.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3",children:x.excerpt}),r.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:x.tags.slice(0,2).map(S=>r.jsx("span",{className:"px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300",children:S.name},S.id))}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center space-x-3 text-slate-400 text-xs",children:[r.jsxs("span",{className:"flex items-center",children:[r.jsx(Hi,{className:"w-3 h-3 mr-1"}),x.views.toLocaleString()]}),r.jsxs("span",{className:"flex items-center",children:[r.jsx(eo,{className:"w-3 h-3 mr-1"}),x.likes]})]}),r.jsx("button",{onClick:()=>i(x),className:"px-3 py-1 text-xs font-medium text-purple-300 hover:text-white bg-purple-500/20 hover:bg-purple-500/30 rounded-md transition-all duration-200",children:"Read"})]})]})]},x.id))})}),m.length>9&&r.jsx(C.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-center mt-12",children:r.jsxs("button",{className:"px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors duration-200",children:["Load More Articles (",m.length-9," remaining)"]})}),r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"mt-16 text-center",children:[r.jsx("h3",{className:"text-xl font-semibold text-white mb-6",children:"Popular Tags"}),r.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:Te.slice(0,12).map(x=>r.jsxs("button",{onClick:()=>y(x.id),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${l.includes(x.id)?"bg-purple-500 text-white shadow-lg shadow-purple-500/25":"bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"}`,children:["#",x.name]},x.id))})]})]}),r.jsx(De,{children:s&&r.jsx(E2,{post:s,onClose:()=>i(null)})})]})},E2=({post:t,onClose:e})=>{const s=i=>new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",onClick:e,children:r.jsxs(C.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:"bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden",onClick:i=>i.stopPropagation(),children:[r.jsxs("div",{className:"relative",children:[r.jsx("img",{src:t.coverImage,alt:t.title,className:"w-full h-64 object-cover"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"}),r.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-lg bg-black/50 text-white hover:bg-black/70 transition-all duration-200",children:"✕"}),r.jsxs("div",{className:"absolute bottom-4 left-4 right-4",children:[r.jsxs("div",{className:"flex items-center space-x-4 mb-4",children:[r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium bg-${t.category.color}-500/20 text-${t.category.color}-300`,children:t.category.name}),r.jsxs("span",{className:"text-xs text-slate-300 flex items-center",children:[r.jsx(nr,{className:"w-3 h-3 mr-1"}),t.readTime," min read"]}),r.jsxs("span",{className:"text-xs text-slate-300 flex items-center",children:[r.jsx(bm,{className:"w-3 h-3 mr-1"}),s(t.publishedAt)]})]}),r.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:t.title}),r.jsx("p",{className:"text-slate-300",children:t.subtitle})]})]}),r.jsxs("div",{className:"p-6 max-h-[50vh] overflow-y-auto",children:[r.jsxs("div",{className:"flex items-center space-x-4 mb-6 pb-6 border-b border-slate-700",children:[r.jsx("img",{src:t.author.avatar,alt:t.author.name,className:"w-12 h-12 rounded-full"}),r.jsxs("div",{className:"flex-1",children:[r.jsx("div",{className:"font-semibold text-white",children:t.author.name}),r.jsx("div",{className:"text-sm text-slate-400",children:t.author.role}),r.jsx("div",{className:"text-sm text-slate-300",children:t.author.bio})]}),r.jsxs("div",{className:"flex items-center space-x-4 text-slate-400",children:[r.jsxs("span",{className:"flex items-center",children:[r.jsx(Hi,{className:"w-4 h-4 mr-1"}),t.views.toLocaleString()]}),r.jsxs("span",{className:"flex items-center",children:[r.jsx(eo,{className:"w-4 h-4 mr-1"}),t.likes]}),r.jsxs("span",{className:"flex items-center",children:[r.jsx(g2,{className:"w-4 h-4 mr-1"}),t.comments]})]})]}),r.jsx("div",{className:"prose prose-invert max-w-none",children:r.jsxs("div",{className:"text-slate-300 leading-relaxed whitespace-pre-line",children:[t.content.substring(0,1e3),"..."]})}),r.jsxs("div",{className:"mt-6 pt-6 border-t border-slate-700",children:[r.jsx("h4",{className:"text-sm font-semibold text-white mb-3",children:"Tags"}),r.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(i=>r.jsxs("span",{className:"px-3 py-1 text-xs rounded-full bg-white/10 text-slate-300",children:["#",i.name]},i.id))})]}),r.jsxs("div",{className:"mt-6 text-center",children:[r.jsx("button",{className:"px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors duration-200",children:"Read Full Article"}),r.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"This is a preview. Click to read the complete article."})]})]})]})})},Dd=[{id:"react-hook-form",title:"Advanced Form Validation with React Hook Form",description:"A comprehensive form validation system with custom hooks, schema validation, and dynamic field generation.",category:"react",difficulty:"intermediate",tags:["React","TypeScript","Validation","Hooks"],code:`import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const schema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/, 'Password must contain uppercase, lowercase, and number')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms')
});

const AdvancedForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur'
  });

  const password = watch('password');

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', data);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, label: 'No password' };
    
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\\d/.test(password)) score += 1;
    if (/[^\\w\\s]/.test(password)) score += 1;

    const labels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return { score, label: labels[score - 1] || 'Very Weak' };
  };

  const strength = getPasswordStrength(password);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="email"
              className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 \${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }\`}
              placeholder="john@example.com"
            />
          )}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div>
              <input
                {...field}
                type="password"
                className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 \${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }\`}
                placeholder="Enter your password"
              />
              {password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Password Strength:</span>
                    <span className={\`font-medium \${
                      strength.score <= 2 ? 'text-red-600' :
                      strength.score <= 3 ? 'text-yellow-600' : 'text-green-600'
                    }\`}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className={\`h-2 rounded-full transition-all duration-300 \${
                        strength.score <= 2 ? 'bg-red-500' :
                        strength.score <= 3 ? 'bg-yellow-500' : 'bg-green-500'
                      }\`}
                      style={{ width: \`\${(strength.score / 5) * 100}%\` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="password"
              className={\`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 \${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }\`}
              placeholder="Confirm your password"
            />
          )}
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div>
        <Controller
          name="terms"
          control={control}
          render={({ field: { value, onChange } }) => (
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={value}
                onChange={onChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">
                I agree to the Terms and Conditions
              </span>
            </label>
          )}
        />
        {errors.terms && (
          <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className={\`w-full py-2 px-4 rounded-lg font-medium transition-colors \${
          isSubmitting || !isValid
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }\`}
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
      </button>
    </form>
  );
};

export default AdvancedForm;`,dependencies:["react-hook-form","@hookform/resolvers","yup"],features:["Real-time validation","Password strength indicator","Custom validation schemas","Accessible form controls","Loading states"],estimatedTime:"30 min"},{id:"typescript-generics",title:"Advanced TypeScript Generics and Utility Types",description:"Explore powerful TypeScript patterns with generics, conditional types, and mapped types for type-safe development.",category:"typescript",difficulty:"advanced",tags:["TypeScript","Generics","Utility Types","Advanced"],code:`// Advanced TypeScript Patterns and Utility Types

// 1. Generic Repository Pattern
interface Repository<T, K = string> {
  findById(id: K): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: K, data: Partial<T>): Promise<T>;
  delete(id: K): Promise<void>;
}

// 2. Conditional Types for API Responses
type ApiResponse<T> = T extends string 
  ? { message: T; success: false }
  : { data: T; success: true };

type UserResponse = ApiResponse<User>;        // { data: User; success: true }
type ErrorResponse = ApiResponse<string>;     // { message: string; success: false }

// 3. Mapped Types for Form Validation
type ValidationRule<T> = {
  required?: boolean;
  min?: T extends number ? number : never;
  max?: T extends number ? number : never;
  pattern?: T extends string ? RegExp : never;
  custom?: (value: T) => boolean | string;
};

type FormValidation<T> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

const userValidation: FormValidation<User> = {
  name: { required: true, pattern: /^[a-zA-Z\\s]+$/ },
  email: { required: true, pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ },
  age: { required: true, min: 18, max: 120 },
  isActive: { required: false }
};

// 4. Advanced Utility Types
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object | undefined ? DeepRequired<NonNullable<T[P]>> : T[P];
};

type PickByType<T, U> = {
  [K in keyof T as T[K] extends U ? K : never]: T[K];
};

type OmitByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};

// Examples
type UserStrings = PickByType<User, string>;  // { id: string; name: string; email: string }
type UserNonStrings = OmitByType<User, string>; // { age: number; isActive: boolean }

// 5. Function Overloading with Generics
function createEntity<T extends { id: string }>(data: Omit<T, 'id'>): T;
function createEntity<T extends { id: number }>(data: Omit<T, 'id'>): T;
function createEntity<T extends { id: string | number }>(data: Omit<T, 'id'>): T {
  const id = typeof data === 'object' && 'id' in data 
    ? (data as any).id 
    : Math.random().toString(36);
  
  return { ...data, id } as T;
}

// 6. Event System with Type Safety
type EventMap = {
  'user:created': { user: User };
  'user:updated': { user: User; changes: Partial<User> };
  'user:deleted': { userId: string };
  'system:error': { error: Error; context: string };
};

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: Array<(data: T[K]) => void>;
  } = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    const listeners = this.listeners[event];
    if (listeners) {
      listeners.forEach(listener => listener(data));
    }
  }

  off<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    const listeners = this.listeners[event];
    if (listeners) {
      this.listeners[event] = listeners.filter(l => l !== listener);
    }
  }
}

// Usage
const eventEmitter = new TypedEventEmitter<EventMap>();

eventEmitter.on('user:created', ({ user }) => {
  console.log(\`User \${user.name} was created\`);
});

eventEmitter.emit('user:created', {
  user: { id: '1', name: 'John', email: 'john@example.com', age: 25, isActive: true }
});

// 7. Builder Pattern with Fluent Interface
class QueryBuilder<T> {
  private query: {
    select?: (keyof T)[];
    where?: Partial<T>;
    orderBy?: { field: keyof T; direction: 'asc' | 'desc' };
    limit?: number;
  } = {};

  select<K extends keyof T>(...fields: K[]): QueryBuilder<Pick<T, K>> {
    this.query.select = fields as (keyof T)[];
    return this as any;
  }

  where(conditions: Partial<T>): QueryBuilder<T> {
    this.query.where = { ...this.query.where, ...conditions };
    return this;
  }

  orderBy(field: keyof T, direction: 'asc' | 'desc' = 'asc'): QueryBuilder<T> {
    this.query.orderBy = { field, direction };
    return this;
  }

  limit(count: number): QueryBuilder<T> {
    this.query.limit = count;
    return this;
  }

  build() {
    return this.query;
  }
}

// Usage
const userQuery = new QueryBuilder<User>()
  .select('name', 'email')
  .where({ isActive: true })
  .orderBy('name', 'asc')
  .limit(10)
  .build();

// 8. Branded Types for Type Safety
type Brand<T, TBrand> = T & { readonly __brand: TBrand };

type UserId = Brand<string, 'UserId'>;
type Email = Brand<string, 'Email'>;
type Password = Brand<string, 'Password'>;

function createUserId(id: string): UserId {
  if (!id || id.length < 3) {
    throw new Error('Invalid user ID');
  }
  return id as UserId;
}

function createEmail(email: string): Email {
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    throw new Error('Invalid email format');
  }
  return email as Email;
}

function createPassword(password: string): Password {
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  return password as Password;
}

// This prevents accidentally mixing up different string types
function findUser(id: UserId): Promise<User | null> {
  // Implementation would go here
  return Promise.resolve(null);
}

// Usage
const userId = createUserId('user123');
const email = createEmail('john@example.com');

// findUser(email); // ❌ TypeScript error - can't pass Email where UserId expected
findUser(userId);   // ✅ Correct usage

export {
  Repository,
  ApiResponse,
  FormValidation,
  TypedEventEmitter,
  QueryBuilder,
  createUserId,
  createEmail,
  createPassword
};`,dependencies:[],features:["Generic repository pattern","Conditional types","Mapped types for validation","Type-safe event system","Fluent query builder","Branded types for safety"],estimatedTime:"45 min"},{id:"api-design",title:"RESTful API Design with Express and TypeScript",description:"Build a robust, scalable API with proper error handling, validation, authentication, and documentation.",category:"api",difficulty:"intermediate",tags:["Node.js","Express","TypeScript","API","Validation"],code:`import express, { Request, Response, NextFunction } from 'express';
import { body, param, query, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';

// Types
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthenticatedRequest extends Request {
  user?: Omit<User, 'password'>;
}

interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Custom Error Classes
class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

class NotFoundError extends AppError {
  constructor(resource: string) {
    super(\`\${resource} not found\`, 404);
  }
}

class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
  }
}

// Middleware
const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    throw new ValidationError(errorMessages.join(', '));
  }
  next();
};

const authenticate = asyncHandler(async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    throw new UnauthorizedError('Access token required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    // In real app, fetch user from database
    req.user = { id: decoded.id, email: decoded.email, name: decoded.name, createdAt: new Date(), updatedAt: new Date() };
    next();
  } catch (error) {
    throw new UnauthorizedError('Invalid access token');
  }
});

const authorize = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    // Implementation would check user roles
    next();
  };
};

// Rate Limiting
const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    message: 'Too many accounts created from this IP, please try again after an hour.'
  }
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Validation Rules
const userValidation = {
  create: [
    body('email')
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/)
      .withMessage('Password must contain uppercase, lowercase, and number'),
    body('name')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Name must be between 2 and 50 characters')
  ],
  update: [
    body('email')
      .optional()
      .isEmail()
      .normalizeEmail()
      .withMessage('Valid email is required'),
    body('name')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Name must be between 2 and 50 characters')
  ],
  query: [
    query('page')
      .optional()
      .isInt({ min: 1 })
      .withMessage('Page must be a positive integer'),
    query('limit')
      .optional()
      .isInt({ min: 1, max: 100 })
      .withMessage('Limit must be between 1 and 100'),
    query('search')
      .optional()
      .trim()
      .isLength({ min: 1 })
      .withMessage('Search term cannot be empty')
  ]
};

// Controllers
class UserController {
  static async getUsers(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = req.query.search as string;

    // Mock data - in real app, this would query the database
    const users: User[] = [];
    const total = 0;

    const response: ApiResponse<User[]> = {
      success: true,
      data: users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };

    res.json(response);
  }

  static async getUserById(req: AuthenticatedRequest, res: Response) {
    const { id } = req.params;

    // Mock user - in real app, fetch from database
    const user = {
      id,
      email: 'john@example.com',
      name: 'John Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    if (!user) {
      throw new NotFoundError('User');
    }

    const response: ApiResponse<Omit<User, 'password'>> = {
      success: true,
      data: user
    };

    res.json(response);
  }

  static async createUser(req: Request, res: Response) {
    const { email, password, name } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user (mock)
    const newUser: User = {
      id: Math.random().toString(36),
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    );

    const response: ApiResponse<{
      user: Omit<User, 'password'>;
      token: string;
    }> = {
      success: true,
      data: {
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          createdAt: newUser.createdAt,
          updatedAt: newUser.updatedAt
        },
        token
      },
      message: 'User created successfully'
    };

    res.status(201).json(response);
  }

  static async updateUser(req: AuthenticatedRequest, res: Response) {
    const { id } = req.params;
    const updates = req.body;

    // Check if user exists and user owns the resource
    if (req.user?.id !== id) {
      throw new UnauthorizedError('Cannot update other users');
    }

    // Update user (mock)
    const updatedUser = {
      id,
      email: updates.email || req.user.email,
      name: updates.name || req.user.name,
      createdAt: req.user.createdAt,
      updatedAt: new Date()
    };

    const response: ApiResponse<Omit<User, 'password'>> = {
      success: true,
      data: updatedUser,
      message: 'User updated successfully'
    };

    res.json(response);
  }

  static async deleteUser(req: AuthenticatedRequest, res: Response) {
    const { id } = req.params;

    // Check if user exists and user owns the resource
    if (req.user?.id !== id) {
      throw new UnauthorizedError('Cannot delete other users');
    }

    // Delete user (mock)
    
    const response: ApiResponse = {
      success: true,
      message: 'User deleted successfully'
    };

    res.json(response);
  }
}

// Error Handler
const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  let err = error;

  // Log error
  console.error(error);

  // Mongoose bad ObjectId
  if (error.name === 'CastError') {
    const message = 'Resource not found';
    err = new NotFoundError(message);
  }

  // Mongoose duplicate key
  if ((error as any).code === 11000) {
    const message = 'Duplicate field value entered';
    err = new ValidationError(message);
  }

  // Mongoose validation error
  if (error.name === 'ValidationError') {
    const message = Object.values((error as any).errors).map((val: any) => val.message).join(', ');
    err = new ValidationError(message);
  }

  const response: ApiResponse = {
    success: false,
    message: (err as AppError).message || 'Server Error'
  };

  res.status((err as AppError).statusCode || 500).json(response);
};

// Routes
const app = express();

app.use(express.json());
app.use(generalLimiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// User routes
app.get('/api/users', 
  userValidation.query, 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.getUsers)
);

app.get('/api/users/:id', 
  param('id').isMongoId().withMessage('Invalid user ID'), 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.getUserById)
);

app.post('/api/users', 
  createAccountLimiter, 
  userValidation.create, 
  validateRequest, 
  asyncHandler(UserController.createUser)
);

app.put('/api/users/:id', 
  param('id').isMongoId().withMessage('Invalid user ID'), 
  userValidation.update, 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.updateUser)
);

app.delete('/api/users/:id', 
  param('id').isMongoId().withMessage('Invalid user ID'), 
  validateRequest, 
  authenticate, 
  asyncHandler(UserController.deleteUser)
);

app.use(errorHandler);

export default app;`,dependencies:["express","express-validator","jsonwebtoken","bcrypt","express-rate-limit"],features:["RESTful API design","Request validation","JWT authentication","Error handling","Rate limiting","Proper HTTP status codes"],estimatedTime:"60 min"}],S2=()=>{const[t,e]=M.useState("all"),[s,i]=M.useState(null),[n,o]=M.useState(!1),[l,d]=M.useState(null),h=[{id:"all",name:"All Examples",icon:"💻"},{id:"react",name:"React",icon:"⚛️"},{id:"typescript",name:"TypeScript",icon:"🔷"},{id:"api",name:"API Design",icon:"🔧"},{id:"animation",name:"Animations",icon:"✨"},{id:"ai",name:"AI Integration",icon:"🤖"}],f=t==="all"?Dd:Dd.filter(g=>g.category===t),m=async(g,T)=>{try{await navigator.clipboard.writeText(g),d(T),setTimeout(()=>d(null),2e3)}catch(x){console.error("Failed to copy code:",x)}},y=g=>{switch(g){case"beginner":return"text-green-400 bg-green-500/20";case"intermediate":return"text-yellow-400 bg-yellow-500/20";case"advanced":return"text-red-400 bg-red-500/20";default:return"text-blue-400 bg-blue-500/20"}};return r.jsxs("section",{id:"code-showcase",className:"py-20 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900",children:[r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[r.jsxs(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[r.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"Interactive Code Showcase"}),r.jsx("p",{className:"text-xl text-slate-300 max-w-3xl mx-auto",children:"Explore real-world code examples with detailed explanations and interactive features"})]}),r.jsx(C.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"flex flex-wrap justify-center gap-4 mb-12",children:h.map(g=>r.jsxs("button",{onClick:()=>e(g.id),className:`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${t===g.id?"bg-indigo-500 text-white shadow-lg shadow-indigo-500/25":"bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white"}`,children:[r.jsx("span",{children:g.icon}),r.jsx("span",{children:g.name})]},g.id))}),r.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8",children:r.jsx(De,{children:f.map((g,T)=>r.jsxs(C.div,{layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{delay:T*.1},className:"group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 overflow-hidden",children:[r.jsxs("div",{className:"p-6 border-b border-white/10",children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${y(g.difficulty)}`,children:g.difficulty.toUpperCase()}),r.jsxs("span",{className:"text-xs text-slate-400 flex items-center",children:[r.jsx(nr,{className:"w-3 h-3 mr-1"}),g.estimatedTime]})]}),r.jsx("h3",{className:"text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors",children:g.title}),r.jsx("p",{className:"text-slate-300 text-sm leading-relaxed mb-4",children:g.description}),r.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:g.tags.map(x=>r.jsx("span",{className:"px-2 py-1 text-xs rounded-md bg-white/10 text-slate-300",children:x},x))}),r.jsxs("div",{children:[r.jsx("h4",{className:"text-sm font-semibold text-white mb-2",children:"Key Features:"}),r.jsx("ul",{className:"space-y-1",children:g.features.slice(0,3).map((x,j)=>r.jsxs("li",{className:"text-xs text-slate-300 flex items-start",children:[r.jsx("span",{className:"text-indigo-400 mr-2",children:"•"}),x]},j))})]})]}),r.jsxs("div",{className:"relative",children:[r.jsx("pre",{className:"p-4 text-xs text-slate-300 bg-slate-900/50 overflow-hidden",children:r.jsxs("code",{children:[g.code.substring(0,200),"..."]})}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"}),r.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("button",{onClick:()=>m(g.code,g.id),className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",title:"Copy code",children:l===g.id?r.jsx(C.span,{initial:{scale:0},animate:{scale:1},className:"text-green-400",children:"✓"}):r.jsx(vm,{className:"w-4 h-4"})}),g.dependencies&&g.dependencies.length>0&&r.jsx("button",{className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",title:"View dependencies",children:r.jsx(h2,{className:"w-4 h-4"})})]}),r.jsx("button",{onClick:()=>i(g),className:"px-4 py-2 text-sm font-medium text-indigo-300 hover:text-white bg-indigo-500/20 hover:bg-indigo-500/30 rounded-lg transition-all duration-200",children:"View Code"})]})]})]},g.id))})})]}),r.jsx(De,{children:s&&r.jsx(A2,{example:s,isFullscreen:n,onClose:()=>i(null),onToggleFullscreen:()=>o(!n),onCopyCode:m,copiedCode:l})})]})},A2=({example:t,isFullscreen:e,onClose:s,onToggleFullscreen:i,onCopyCode:n,copiedCode:o})=>r.jsx(C.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`fixed inset-0 bg-black/90 backdrop-blur-sm z-50 ${e?"p-0":"p-4 flex items-center justify-center"}`,onClick:e?void 0:s,children:r.jsxs(C.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9,y:20},className:`bg-slate-800 ${e?"w-full h-full":"rounded-2xl max-w-6xl w-full max-h-[90vh]"} overflow-hidden flex flex-col`,onClick:l=>l.stopPropagation(),children:[r.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-slate-700 flex-shrink-0",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("h3",{className:"text-xl font-bold text-white mb-1",children:t.title}),r.jsx("p",{className:"text-slate-300 text-sm",children:t.description}),r.jsxs("div",{className:"flex items-center space-x-4 mt-3",children:[r.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${t.difficulty==="beginner"?"bg-green-500/20 text-green-300":t.difficulty==="intermediate"?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:t.difficulty.toUpperCase()}),r.jsxs("span",{className:"text-xs text-slate-400",children:["Estimated time: ",t.estimatedTime]})]})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("button",{onClick:()=>n(t.code,t.id),className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",title:"Copy all code",children:o===t.id?r.jsx(C.span,{initial:{scale:0},animate:{scale:1},className:"text-green-400",children:"✓"}):r.jsx(vm,{className:"w-5 h-5"})}),r.jsx("button",{onClick:i,className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",title:e?"Exit fullscreen":"Fullscreen",children:e?r.jsx(y2,{className:"w-5 h-5"}):r.jsx(p2,{className:"w-5 h-5"})}),r.jsx("button",{onClick:s,className:"p-2 rounded-lg bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white transition-all duration-200",children:"✕"})]})]}),r.jsx("div",{className:"flex-1 overflow-hidden",children:r.jsx("pre",{className:"h-full p-6 overflow-auto text-sm bg-slate-900",children:r.jsx("code",{className:"text-slate-300 language-typescript whitespace-pre-wrap",children:t.code})})}),t.dependencies&&t.dependencies.length>0&&r.jsxs("div",{className:"p-6 border-t border-slate-700 flex-shrink-0",children:[r.jsx("h4",{className:"text-sm font-semibold text-white mb-2",children:"Dependencies:"}),r.jsx("div",{className:"flex flex-wrap gap-2",children:t.dependencies.map(l=>r.jsx("span",{className:"px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300",children:l},l))})]})]})}),C2=()=>{const[t,e]=M.useState({customMarkers:{}}),[s,i]=M.useState(!0),n=M.useCallback(y=>{"performance"in window&&performance.mark&&(performance.mark(y),e(g=>({...g,customMarkers:{...g.customMarkers,[y]:performance.now()}})))},[]),o=M.useCallback((y,g,T)=>{if("performance"in window&&performance.measure)try{const x=`measure-${y}`;T?performance.measure(x,g,T):performance.measure(x,g);const j=performance.getEntriesByName(x)[0];return j?j.duration:null}catch(x){return console.warn("Failed to measure performance:",x),null}return null},[]),l=M.useCallback(()=>{if(!("performance"in window))return;const g=performance.getEntriesByType("paint").find(T=>T.name==="first-contentful-paint");if("PerformanceObserver"in window){try{new PerformanceObserver(T=>{const x=T.getEntries(),j=x[x.length-1];e(S=>({...S,lcp:j.startTime}))}).observe({entryTypes:["largest-contentful-paint"]})}catch(T){console.warn("LCP observer not supported:",T)}try{new PerformanceObserver(T=>{T.getEntries().forEach(x=>{e(j=>({...j,fid:x.processingStart-x.startTime}))})}).observe({entryTypes:["first-input"]})}catch(T){console.warn("FID observer not supported:",T)}try{let T=0;new PerformanceObserver(x=>{x.getEntries().forEach(j=>{j.hadRecentInput||(T+=j.value)}),e(j=>({...j,cls:T}))}).observe({entryTypes:["layout-shift"]})}catch(T){console.warn("CLS observer not supported:",T)}}g&&e(T=>({...T,fcp:g.startTime}))},[]),d=M.useCallback(()=>{if(!("performance"in window)||!performance.timing)return;const y=performance.timing;e(g=>({...g,domContentLoaded:y.domContentLoadedEventEnd-y.navigationStart,loadComplete:y.loadEventEnd-y.navigationStart}))},[]),h=M.useCallback(()=>{const y=navigator.connection||navigator.mozConnection||navigator.webkitConnection;y&&e(g=>({...g,connection:{effectiveType:y.effectiveType||"unknown",downlink:y.downlink||0,rtt:y.rtt||0}}))},[]),f=M.useCallback(()=>{const y=performance.memory;y&&e(g=>({...g,memory:{usedJSHeapSize:y.usedJSHeapSize,totalJSHeapSize:y.totalJSHeapSize,jsHeapSizeLimit:y.jsHeapSizeLimit}}))},[]),m=M.useCallback(()=>{var x,j;let y=100;const g=[];if(t.fcp&&(t.fcp>3e3?(y-=20,g.push("Optimize First Contentful Paint (>3s)")):t.fcp>1800&&(y-=10,g.push("Improve First Contentful Paint (1.8-3s)"))),t.lcp&&(t.lcp>4e3?(y-=25,g.push("Optimize Largest Contentful Paint (>4s)")):t.lcp>2500&&(y-=15,g.push("Improve Largest Contentful Paint (2.5-4s)"))),t.fid&&(t.fid>300?(y-=20,g.push("Reduce First Input Delay (>300ms)")):t.fid>100&&(y-=10,g.push("Improve First Input Delay (100-300ms)"))),t.cls&&(t.cls>.25?(y-=15,g.push("Reduce Cumulative Layout Shift (>0.25)")):t.cls>.1&&(y-=8,g.push("Improve Cumulative Layout Shift (0.1-0.25)"))),t.memory){const S=t.memory.usedJSHeapSize/t.memory.jsHeapSizeLimit*100;S>80?(y-=10,g.push("High memory usage detected (>80%)")):S>60&&(y-=5,g.push("Monitor memory usage (60-80%)"))}(((x=t.connection)==null?void 0:x.effectiveType)==="slow-2g"||((j=t.connection)==null?void 0:j.effectiveType)==="2g")&&g.push("Optimize for slower connections detected");const T=y>=90?"A":y>=80?"B":y>=70?"C":y>=60?"D":"F";return{score:Math.max(0,y),grade:T,recommendations:g}},[t]);return M.useEffect(()=>{n("app-start"),l(),d(),h(),f();const y=()=>{n("app-loaded"),i(!1),setTimeout(()=>{d(),f()},100)};document.readyState==="complete"?y():window.addEventListener("load",y);const g=setInterval(()=>{f()},1e4);return()=>{window.removeEventListener("load",y),clearInterval(g)}},[n,l,d,h,f]),{metrics:t,isLoading:s,markTime:n,measureTime:o,getMetricsSummary:m}},P2=({isMinimized:t=!1,onToggleMinimize:e,className:s=""})=>{const{metrics:i,getMetricsSummary:n,markTime:o}=C2(),[l,d]=M.useState(!1),h=n();M.useEffect(()=>{const T=x=>{x.ctrlKey&&x.shiftKey&&x.key==="P"&&(x.preventDefault(),d(!l))};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[l]),M.useEffect(()=>{},[]);const f=(T,x)=>T<=x.good?"good":T<=x.poor?"fair":"poor",m=T=>{switch(T){case"A":return"text-green-400 bg-green-500/20";case"B":return"text-blue-400 bg-blue-500/20";case"C":return"text-yellow-400 bg-yellow-500/20";case"D":return"text-orange-400 bg-orange-500/20";case"F":return"text-red-400 bg-red-500/20";default:return"text-gray-400 bg-gray-500/20"}},y=T=>T>1e3?`${(T/1e3).toFixed(2)}s`:`${Math.round(T)}ms`,g=T=>{const x=["B","KB","MB","GB"];if(T===0)return"0 B";const j=Math.floor(Math.log(T)/Math.log(1024));return`${(T/Math.pow(1024,j)).toFixed(1)} ${x[j]}`};return l?r.jsx(De,{children:r.jsxs(C.div,{initial:{opacity:0,y:100,scale:.8},animate:{opacity:1,y:0,scale:1,width:t?"auto":"400px"},exit:{opacity:0,y:100,scale:.8},className:`fixed bottom-4 right-4 z-50 bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl ${s}`,children:[r.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-white/10",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(oa,{className:"w-5 h-5 text-blue-400"}),r.jsx("h3",{className:"text-sm font-medium text-white",children:"Performance"}),r.jsx("div",{className:`px-2 py-1 rounded-full text-xs font-bold ${m(h.grade)}`,children:h.grade})]}),r.jsxs("div",{className:"flex items-center space-x-1",children:[e&&r.jsx("button",{onClick:e,className:"p-1 text-slate-400 hover:text-white transition-colors",children:t?r.jsx(wf,{className:"w-4 h-4"}):r.jsx(jf,{className:"w-4 h-4"})}),r.jsx("button",{onClick:()=>d(!1),className:"p-1 text-slate-400 hover:text-white transition-colors",children:r.jsx(_f,{className:"w-4 h-4"})})]})]}),!t&&r.jsxs("div",{className:"p-4 space-y-4 max-h-96 overflow-y-auto",children:[r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"relative inline-flex items-center justify-center w-20 h-20 mb-2",children:[r.jsxs("svg",{className:"w-20 h-20 transform -rotate-90",children:[r.jsx("circle",{cx:"40",cy:"40",r:"30",stroke:"currentColor",strokeWidth:"4",fill:"none",className:"text-slate-700"}),r.jsx(C.circle,{cx:"40",cy:"40",r:"30",stroke:"currentColor",strokeWidth:"4",fill:"none",strokeLinecap:"round",className:"text-blue-400",initial:{strokeDasharray:"0 188.5"},animate:{strokeDasharray:`${h.score/100*188.5} 188.5`},transition:{duration:1,ease:"easeOut"}})]}),r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:r.jsx("span",{className:"text-lg font-bold text-white",children:h.score})})]}),r.jsx("p",{className:"text-xs text-slate-400",children:"Performance Score"})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("h4",{className:"text-sm font-medium text-slate-300 flex items-center",children:[r.jsx(lr,{className:"w-4 h-4 mr-2 text-yellow-400"}),"Core Web Vitals"]}),r.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[i.fcp&&r.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1",children:[r.jsx("span",{className:"text-xs text-slate-400",children:"FCP"}),r.jsx("div",{className:`w-2 h-2 rounded-full ${f(i.fcp,{good:1800,poor:3e3})==="good"?"bg-green-400":f(i.fcp,{good:1800,poor:3e3})==="fair"?"bg-yellow-400":"bg-red-400"}`})]}),r.jsx("div",{className:"text-sm font-medium text-white",children:y(i.fcp)})]}),i.lcp&&r.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1",children:[r.jsx("span",{className:"text-xs text-slate-400",children:"LCP"}),r.jsx("div",{className:`w-2 h-2 rounded-full ${f(i.lcp,{good:2500,poor:4e3})==="good"?"bg-green-400":f(i.lcp,{good:2500,poor:4e3})==="fair"?"bg-yellow-400":"bg-red-400"}`})]}),r.jsx("div",{className:"text-sm font-medium text-white",children:y(i.lcp)})]}),i.fid&&r.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1",children:[r.jsx("span",{className:"text-xs text-slate-400",children:"FID"}),r.jsx("div",{className:`w-2 h-2 rounded-full ${f(i.fid,{good:100,poor:300})==="good"?"bg-green-400":f(i.fid,{good:100,poor:300})==="fair"?"bg-yellow-400":"bg-red-400"}`})]}),r.jsx("div",{className:"text-sm font-medium text-white",children:y(i.fid)})]}),i.cls&&r.jsxs("div",{className:"bg-slate-700/30 rounded-lg p-3",children:[r.jsxs("div",{className:"flex items-center justify-between mb-1",children:[r.jsx("span",{className:"text-xs text-slate-400",children:"CLS"}),r.jsx("div",{className:`w-2 h-2 rounded-full ${f(i.cls,{good:.1,poor:.25})==="good"?"bg-green-400":f(i.cls,{good:.1,poor:.25})==="fair"?"bg-yellow-400":"bg-red-400"}`})]}),r.jsx("div",{className:"text-sm font-medium text-white",children:i.cls.toFixed(3)})]})]})]}),(i.domContentLoaded||i.loadComplete)&&r.jsxs("div",{className:"space-y-3",children:[r.jsxs("h4",{className:"text-sm font-medium text-slate-300 flex items-center",children:[r.jsx(kn,{className:"w-4 h-4 mr-2 text-blue-400"}),"Loading Times"]}),r.jsxs("div",{className:"space-y-2",children:[i.domContentLoaded&&r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsx("span",{className:"text-slate-400",children:"DOM Ready"}),r.jsx("span",{className:"text-white font-medium",children:y(i.domContentLoaded)})]}),i.loadComplete&&r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsx("span",{className:"text-slate-400",children:"Load Complete"}),r.jsx("span",{className:"text-white font-medium",children:y(i.loadComplete)})]})]})]}),i.memory&&r.jsxs("div",{className:"space-y-3",children:[r.jsxs("h4",{className:"text-sm font-medium text-slate-300 flex items-center",children:[r.jsx(Nf,{className:"w-4 h-4 mr-2 text-purple-400"}),"Memory Usage"]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsx("span",{className:"text-slate-400",children:"Used"}),r.jsx("span",{className:"text-white font-medium",children:g(i.memory.usedJSHeapSize)})]}),r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsx("span",{className:"text-slate-400",children:"Total"}),r.jsx("span",{className:"text-white font-medium",children:g(i.memory.totalJSHeapSize)})]}),r.jsx("div",{className:"w-full bg-slate-700 rounded-full h-2",children:r.jsx(C.div,{className:`h-full rounded-full ${i.memory.usedJSHeapSize/i.memory.jsHeapSizeLimit>.8?"bg-red-500":i.memory.usedJSHeapSize/i.memory.jsHeapSizeLimit>.6?"bg-yellow-500":"bg-green-500"}`,initial:{width:0},animate:{width:`${i.memory.usedJSHeapSize/i.memory.jsHeapSizeLimit*100}%`},transition:{duration:.5}})})]})]}),i.connection&&r.jsxs("div",{className:"space-y-3",children:[r.jsxs("h4",{className:"text-sm font-medium text-slate-300 flex items-center",children:[r.jsx(oa,{className:"w-4 h-4 mr-2 text-green-400"}),"Network"]}),r.jsxs("div",{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsx("span",{className:"text-slate-400",children:"Type"}),r.jsx("span",{className:"text-white font-medium capitalize",children:i.connection.effectiveType})]}),r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsx("span",{className:"text-slate-400",children:"Downlink"}),r.jsxs("span",{className:"text-white font-medium",children:[i.connection.downlink," Mbps"]})]}),r.jsxs("div",{className:"flex items-center justify-between text-sm",children:[r.jsx("span",{className:"text-slate-400",children:"RTT"}),r.jsxs("span",{className:"text-white font-medium",children:[i.connection.rtt,"ms"]})]})]})]}),h.recommendations.length>0&&r.jsxs("div",{className:"space-y-3",children:[r.jsxs("h4",{className:"text-sm font-medium text-slate-300 flex items-center",children:[r.jsx(Aa,{className:"w-4 h-4 mr-2 text-orange-400"}),"Recommendations"]}),r.jsx("div",{className:"space-y-2",children:h.recommendations.slice(0,3).map((T,x)=>r.jsx("div",{className:"text-xs text-slate-400 bg-slate-700/30 rounded-lg p-2",children:T},x))})]}),r.jsx("div",{className:"pt-3 border-t border-white/10",children:r.jsxs("div",{className:"flex items-center justify-between text-xs",children:[r.jsx("button",{onClick:()=>o("manual-mark"),className:"text-blue-400 hover:text-blue-300 transition-colors",children:"Mark Time"}),r.jsx("span",{className:"text-slate-500",children:"Ctrl+Shift+P to toggle"})]})})]}),t&&r.jsxs("div",{className:"p-3 flex items-center space-x-3",children:[r.jsx("div",{className:`px-2 py-1 rounded-full text-xs font-bold ${m(h.grade)}`,children:h.grade}),r.jsx("span",{className:"text-sm font-medium text-white",children:h.score}),h.recommendations.length>0&&r.jsx(Aa,{className:"w-4 h-4 text-orange-400"})]})]})}):r.jsx(C.button,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},onClick:()=>d(!0),className:"fixed bottom-4 right-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-white/20 rounded-full p-3 text-slate-300 hover:text-white transition-colors",whileHover:{scale:1.1},whileTap:{scale:.95},"aria-label":"Open performance dashboard",title:"Open performance dashboard",children:r.jsx(oa,{className:"w-5 h-5"})})},R2=()=>{const t=[{title:"EcoTracker",description:"A comprehensive sustainability platform helping companies track and reduce their carbon footprint with real-time analytics and AI-powered insights.",image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",technologies:["React","Node.js","PostgreSQL","AWS","D3.js"],github:"https://github.com/princenyamadi/ecotracker",live:"https://ecotracker-demo.com",featured:!0},{title:"DevFlow",description:"A collaborative development workspace that streamlines team workflows with integrated code review, task management, and deployment pipelines.",image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",technologies:["Vue.js","Python","Redis","Docker","WebSocket"],github:"https://github.com/princenyamadi/devflow",live:"https://devflow-app.com",featured:!0},{title:"FinanceAI",description:"Personal finance management app with AI-powered budget recommendations and investment insights for smarter financial decisions.",image:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",technologies:["Next.js","TensorFlow","MongoDB","Stripe","Chart.js"],github:"https://github.com/princenyamadi/financeai",live:"https://financeai-demo.com",featured:!0}],e=[{title:"Senior Full Stack Developer",company:"TechVision Labs",period:"2022 - Present",description:"Lead development of microservices architecture serving 1M+ users. Built real-time analytics dashboard using React, Node.js, and AWS.",technologies:["React","Node.js","AWS","PostgreSQL","Redis"]},{title:"Full Stack Developer",company:"StartupFlow",period:"2020 - 2022",description:"Developed and maintained e-commerce platform with payment integration. Improved page load times by 40% through optimization.",technologies:["Vue.js","Python","Django","MongoDB","Docker"]},{title:"Frontend Developer",company:"DigitalCraft Agency",period:"2019 - 2020",description:"Created responsive web applications for diverse clients. Collaborated with design team to implement pixel-perfect UI components.",technologies:["React","TypeScript","Sass","Jest","Figma"]},{title:"Junior Developer",company:"CodeStart Solutions",period:"2018 - 2019",description:"Built interactive web features and learned industry best practices. Contributed to open-source projects and team code reviews.",technologies:["JavaScript","HTML/CSS","Git","Agile","Testing"]}];return r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx("title",{children:"Prince Nyamadi - Fullstack Developer | Building Digital Experiences"}),r.jsx("meta",{name:"description",content:"Explore the digital possibilities. I craft exceptional mobile and web applications with modern technologies, seamless user experiences, and scalable architectures."})]}),r.jsx(xw,{}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute inset-0",children:[...Array(50)].map((s,i)=>r.jsx(C.div,{className:"absolute w-1 h-1 bg-white rounded-full opacity-60",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{opacity:[.3,1,.3],scale:[.5,1,.5]},transition:{duration:2+Math.random()*3,repeat:1/0,delay:Math.random()*2}},i))}),r.jsx(C.div,{className:"absolute w-1 h-20 bg-gradient-to-b from-white to-transparent opacity-80",style:{left:"60%",top:"15%",transform:"rotate(45deg)"},animate:{x:[0,200],opacity:[0,1,0]},transition:{duration:2,repeat:1/0,repeatDelay:8}}),r.jsx("div",{className:"absolute right-20 top-16",children:r.jsx(C.div,{className:"w-16 h-16 bg-yellow-200 rounded-full relative",animate:{rotate:[0,10,0]},transition:{duration:8,repeat:1/0},children:r.jsx("div",{className:"absolute top-1 right-1 w-12 h-12 bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 rounded-full"})})}),r.jsxs("div",{className:"relative z-10 min-h-screen flex flex-col",children:[r.jsx("section",{className:"flex-1 flex items-center",children:r.jsx("div",{className:"mobile-container",children:r.jsxs("div",{className:"mobile-grid-2 lg:grid-cols-2 responsive-gap items-center",children:[r.jsxs(C.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8},children:[r.jsx("h1",{className:"responsive-heading-xl font-light text-white mb-6 leading-tight mt-40 md:mt-20",children:"Explore the digital universe."}),r.jsx("p",{className:"responsive-text-lg text-white/90 mb-8 font-light",children:"Let's build something extraordinary together"}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[r.jsx(C.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"mobile-btn-lg mobile-interactive bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium",children:"View My Work"}),r.jsxs(C.a,{href:"/PRINCE_NYAMADI-CV.pdf",download:"Prince_Nyamadi_Resume.pdf",whileHover:{scale:1.05},whileTap:{scale:.95},className:"mobile-btn-lg mobile-interactive inline-flex items-center justify-center border border-white/30 hover:border-white/50 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm",children:[r.jsx(ao,{className:"w-4 h-4 mr-2"}),"Download Resume"]})]})]}),r.jsx(C.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,delay:.3},className:"relative",children:r.jsxs("svg",{viewBox:"0 0 400 300",className:"w-full h-auto",children:[r.jsx("path",{d:"M0 250 Q100 230 200 240 T400 250 L400 300 L0 300 Z",fill:"rgba(30, 41, 59, 0.8)"}),r.jsxs("g",{fill:"rgba(15, 23, 42, 0.6)",children:[r.jsx("path",{d:"M20 250 L25 240 L30 250 Z"}),r.jsx("path",{d:"M40 245 L45 235 L50 245 Z"}),r.jsx("path",{d:"M320 248 L325 238 L330 248 Z"}),r.jsx("path",{d:"M350 252 L355 242 L360 252 Z"}),r.jsx("path",{d:"M380 250 L385 240 L390 250 Z"})]}),r.jsxs("g",{fill:"rgba(59, 130, 246, 0.8)",children:[r.jsx("ellipse",{cx:"180",cy:"240",rx:"12",ry:"20"}),r.jsx("circle",{cx:"180",cy:"215",r:"8"}),r.jsx("path",{d:"M175 225 L160 235",stroke:"rgba(59, 130, 246, 0.8)",strokeWidth:"3",fill:"none"}),r.jsx("path",{d:"M185 225 L200 235",stroke:"rgba(59, 130, 246, 0.8)",strokeWidth:"3",fill:"none"}),r.jsx("path",{d:"M175 255 L170 270",stroke:"rgba(59, 130, 246, 0.8)",strokeWidth:"3",fill:"none"}),r.jsx("path",{d:"M185 255 L190 270",stroke:"rgba(59, 130, 246, 0.8)",strokeWidth:"3",fill:"none"})]}),r.jsxs("g",{fill:"rgba(59, 130, 246, 0.8)",children:[r.jsx("rect",{x:"155",y:"235",width:"30",height:"3",rx:"1"}),r.jsx("rect",{x:"160",y:"220",width:"20",height:"15",rx:"1"}),r.jsx("rect",{x:"162",y:"222",width:"16",height:"11",fill:"rgba(147, 197, 253, 0.6)",rx:"1"})]}),r.jsxs("g",{fill:"rgba(147, 197, 253, 0.4)",fontSize:"8",children:[r.jsx("text",{x:"140",y:"180",children:"</>"}),r.jsx("text",{x:"220",y:"190"}),r.jsx("text",{x:"250",y:"170",children:"λ"})]}),r.jsxs("g",{fill:"rgba(15, 23, 42, 0.4)",children:[r.jsx("rect",{x:"80",y:"220",width:"3",height:"30"}),r.jsx("ellipse",{cx:"81",cy:"215",rx:"8",ry:"12"}),r.jsx("rect",{x:"300",y:"225",width:"3",height:"25"}),r.jsx("ellipse",{cx:"301",cy:"220",rx:"6",ry:"10"})]})]})})]})})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"container mx-auto px-6",children:[r.jsx(C.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center mb-16",children:r.jsx("h2",{className:"text-3xl font-light text-blue-300 mb-12",children:"Full Stack Expertise"})}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.1},className:"text-center",children:[r.jsx("div",{className:"w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(Tf,{className:"w-8 h-8 text-blue-400"})}),r.jsx("h3",{className:"text-xl font-medium text-white mb-4",children:"Frontend Mastery"}),r.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"React, TypeScript, Next.js, Vue, Angular. Creating responsive, accessible, and performant user interfaces with modern frameworks and best practices."})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-center",children:[r.jsx("div",{className:"w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(kf,{className:"w-8 h-8 text-blue-400"})}),r.jsx("h3",{className:"text-xl font-medium text-white mb-4",children:"Backend Architecture"}),r.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"Node.js, Python, PostgreSQL, MongoDB, Redis. Building scalable APIs, microservices, and robust backend systems that power exceptional applications."})]}),r.jsxs(C.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},className:"text-center",children:[r.jsx("div",{className:"w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6",children:r.jsx(lr,{className:"w-8 h-8 text-blue-400"})}),r.jsx("h3",{className:"text-xl font-medium text-white mb-4",children:"DevOps & Deployment"}),r.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"AWS, Docker, Kubernetes, CI/CD. Automating deployments, optimizing performance, and ensuring reliable, scalable infrastructure for modern applications."})]})]})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"container mx-auto px-6",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center mb-16",children:[r.jsxs("div",{className:"flex items-center justify-center mb-4",children:[r.jsx(Tn,{className:"w-8 h-8 text-blue-400 mr-3"}),r.jsx("h2",{className:"text-3xl font-light text-blue-300",children:"Featured Projects"})]}),r.jsx("p",{className:"text-white/70 max-w-2xl mx-auto",children:"Showcasing innovative solutions that solve real-world problems with cutting-edge technology"})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",children:t.map((s,i)=>r.jsx(C.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:i*.2},className:"group",children:r.jsxs(C.div,{whileHover:{y:-10,scale:1.02},className:"bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300",children:[r.jsxs("div",{className:"relative h-48 overflow-hidden",children:[r.jsx("img",{src:s.image,alt:s.title,className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),r.jsxs("div",{className:"p-6",children:[r.jsx("h3",{className:"text-xl font-semibold text-white mb-3",children:s.title}),r.jsx("p",{className:"text-white/70 text-sm mb-4 leading-relaxed",children:s.description}),r.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.technologies.map((n,o)=>r.jsx("span",{className:"px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-400/20",children:n},o))}),r.jsxs("div",{className:"flex space-x-4",children:[r.jsxs(C.a,{href:s.github,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},className:"flex items-center text-white/70 hover:text-white transition-colors duration-300",children:[r.jsx(Yd,{className:"w-4 h-4 mr-1"}),r.jsx("span",{className:"text-sm",children:"Code"})]}),r.jsxs(C.a,{href:s.live,target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},className:"flex items-center text-white/70 hover:text-white transition-colors duration-300",children:[r.jsx(nu,{className:"w-4 h-4 mr-1"}),r.jsx("span",{className:"text-sm",children:"Live Demo"})]})]})]})]})},i))}),r.jsx(C.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},className:"text-center",children:r.jsxs(C.a,{href:"/projects",whileHover:{scale:1.05},whileTap:{scale:.95},className:"inline-flex items-center text-blue-300 hover:text-white border border-blue-400/30 hover:border-white/50 bg-blue-600/10 hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm",children:["View All Projects",r.jsx(If,{className:"w-4 h-4 ml-2"})]})})]})}),r.jsx("section",{className:"py-20",children:r.jsxs("div",{className:"container mx-auto px-6",children:[r.jsxs(C.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center mb-16",children:[r.jsxs("div",{className:"flex items-center justify-center mb-4",children:[r.jsx(Ef,{className:"w-8 h-8 text-blue-400 mr-3"}),r.jsx("h2",{className:"text-3xl font-light text-blue-300",children:"Professional Journey"})]}),r.jsx("p",{className:"text-white/70 max-w-2xl mx-auto",children:"A timeline of my career growth, building expertise across the full stack"})]}),r.jsx("div",{className:"max-w-4xl mx-auto",children:r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:"absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-transparent"}),e.map((s,i)=>r.jsxs(C.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:i*.2},className:`relative flex items-center mb-12 ${i%2===0?"md:flex-row":"md:flex-row-reverse"} flex-col md:flex-row`,children:[r.jsx("div",{className:"absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10",children:r.jsx("div",{className:"absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-30"})}),r.jsx("div",{className:`w-full md:w-5/12 ml-16 md:ml-0 ${i%2===0?"md:mr-auto md:pr-8":"md:ml-auto md:pl-8"}`,children:r.jsxs(C.div,{whileHover:{scale:1.02,y:-5},className:"bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300",children:[r.jsxs("div",{className:"flex items-center mb-3",children:[r.jsx(oo,{className:"w-4 h-4 text-blue-400 mr-2"}),r.jsx("span",{className:"text-blue-300 text-sm font-medium",children:s.period})]}),r.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:s.title}),r.jsx("h4",{className:"text-lg text-blue-300 mb-3",children:s.company}),r.jsx("p",{className:"text-white/70 text-sm mb-4 leading-relaxed",children:s.description}),r.jsx("div",{className:"flex flex-wrap gap-2",children:s.technologies.map((n,o)=>r.jsx("span",{className:"px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-400/20",children:n},o))})]})})]},i))]})})]})}),r.jsx("section",{className:"py-20",children:r.jsx("div",{className:"container mx-auto px-6",children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[r.jsxs(C.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.8},children:[r.jsx("p",{className:"text-blue-300 text-sm font-medium mb-4 tracking-wider uppercase",children:"Portfolio & Experience"}),r.jsx("h2",{className:"text-4xl lg:text-5xl font-light text-white mb-6 leading-tight",children:"Connecting ideas with code."}),r.jsx("p",{className:"text-xl text-white/90 mb-6 font-light",children:"Transforming concepts into scalable digital solutions."}),r.jsx("p",{className:"text-white/70 text-sm leading-relaxed",children:"With 5+ years of experience building full-stack applications, I specialize in creating seamless user experiences backed by robust, scalable architectures. From startups to enterprise, I help teams ship quality software that users love."})]}),r.jsx(C.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:1,delay:.3},className:"relative",children:r.jsxs("svg",{viewBox:"0 0 400 300",className:"w-full h-auto",children:[r.jsx("path",{d:"M0 250 Q100 230 200 240 T400 250 L400 300 L0 300 Z",fill:"rgba(30, 41, 59, 0.8)"}),r.jsxs("g",{fill:"rgba(59, 130, 246, 0.8)",children:[r.jsx("ellipse",{cx:"200",cy:"240",rx:"12",ry:"20"}),r.jsx("circle",{cx:"200",cy:"215",r:"8"}),r.jsx("path",{d:"M205 225 L230 200 L235 195",stroke:"rgba(59, 130, 246, 0.8)",strokeWidth:"3",fill:"none"}),r.jsx("path",{d:"M195 255 L190 270",stroke:"rgba(59, 130, 246, 0.8)",strokeWidth:"3",fill:"none"}),r.jsx("path",{d:"M205 255 L210 270",stroke:"rgba(59, 130, 246, 0.8)",strokeWidth:"3",fill:"none"})]}),r.jsxs("g",{children:[r.jsx("circle",{cx:"240",cy:"120",r:"4",fill:"rgba(255, 255, 255, 0.9)"}),r.jsx("circle",{cx:"240",cy:"120",r:"8",fill:"rgba(255, 255, 255, 0.3)"}),r.jsx("circle",{cx:"200",cy:"80",r:"2",fill:"rgba(255, 255, 255, 0.8)"}),r.jsx("circle",{cx:"280",cy:"100",r:"2",fill:"rgba(255, 255, 255, 0.8)"}),r.jsx("circle",{cx:"320",cy:"140",r:"2",fill:"rgba(255, 255, 255, 0.8)"}),r.jsx("circle",{cx:"180",cy:"160",r:"2",fill:"rgba(255, 255, 255, 0.8)"}),r.jsx("circle",{cx:"260",cy:"180",r:"2",fill:"rgba(255, 255, 255, 0.8)"}),r.jsx("line",{x1:"200",y1:"80",x2:"240",y2:"120",stroke:"rgba(147, 197, 253, 0.6)",strokeWidth:"1"}),r.jsx("line",{x1:"240",y1:"120",x2:"280",y2:"100",stroke:"rgba(147, 197, 253, 0.6)",strokeWidth:"1"}),r.jsx("line",{x1:"280",y1:"100",x2:"320",y2:"140",stroke:"rgba(147, 197, 253, 0.6)",strokeWidth:"1"}),r.jsx("line",{x1:"240",y1:"120",x2:"180",y2:"160",stroke:"rgba(147, 197, 253, 0.6)",strokeWidth:"1"}),r.jsx("line",{x1:"240",y1:"120",x2:"260",y2:"180",stroke:"rgba(147, 197, 253, 0.6)",strokeWidth:"1"})]}),r.jsxs("g",{fill:"rgba(15, 23, 42, 0.4)",children:[r.jsx("rect",{x:"60",y:"220",width:"3",height:"30"}),r.jsx("ellipse",{cx:"61",cy:"215",rx:"8",ry:"12"}),r.jsx("rect",{x:"340",y:"225",width:"3",height:"25"}),r.jsx("ellipse",{cx:"341",cy:"220",rx:"6",ry:"10"})]}),r.jsxs("g",{fill:"rgba(147, 197, 253, 0.4)",fontSize:"10",children:[r.jsx("text",{x:"190",y:"85",children:"React"}),r.jsx("text",{x:"275",y:"105",children:"Node"}),r.jsx("text",{x:"310",y:"145",children:"AWS"}),r.jsx("text",{x:"170",y:"165",children:"DB"}),r.jsx("text",{x:"250",y:"185",children:"API"})]})]})})]})})}),r.jsx(X1,{}),r.jsx(Z1,{}),r.jsx(j2,{}),r.jsx(I2,{}),r.jsx(S2,{}),r.jsx(e2,{}),r.jsx(s2,{}),r.jsx(K1,{})]}),r.jsx(P2,{})]})]})},O2=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx("title",{children:"About | Portfolio"}),r.jsx("meta",{name:"description",content:"Learn more about me and my journey as a developer."})]}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"About Me"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),D2=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx("title",{children:"Projects | Portfolio"}),r.jsx("meta",{name:"description",content:"Explore my portfolio of projects and applications."})]}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"My Projects"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),F2=()=>r.jsxs(r.Fragment,{children:[r.jsx(Nt,{children:r.jsx("title",{children:"Project Details | Portfolio"})}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"Project Details"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),M2=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx("title",{children:"Blog | Portfolio"}),r.jsx("meta",{name:"description",content:"Read my latest blog posts and articles."})]}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"Blog"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),L2=()=>r.jsxs(r.Fragment,{children:[r.jsx(Nt,{children:r.jsx("title",{children:"Blog Post | Portfolio"})}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"Blog Post"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),U2=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx("title",{children:"Templates | Portfolio"}),r.jsx("meta",{name:"description",content:"Browse and purchase premium application templates."})]}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"Premium Templates"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),V2=()=>r.jsxs(r.Fragment,{children:[r.jsx(Nt,{children:r.jsx("title",{children:"Template Details | Portfolio"})}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"Template Details"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),$2=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx("title",{children:"Contact | Portfolio"}),r.jsx("meta",{name:"description",content:"Get in touch with me for projects and collaborations."})]}),r.jsxs("div",{className:"container section",children:[r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-8",children:"Contact Me"}),r.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:"Coming soon..."})]})]}),B2=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Nt,{children:[r.jsx("title",{children:"Page Not Found | Portfolio"}),r.jsx("meta",{name:"description",content:"The page you're looking for doesn't exist."})]}),r.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-9xl font-bold text-primary-600 mb-4",children:"404"}),r.jsx("h1",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Page Not Found"}),r.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-8 max-w-md",children:"Sorry, the page you're looking for doesn't exist or has been moved."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[r.jsxs(Zr,{to:"/",className:"btn btn-primary",children:[r.jsx(qd,{className:"w-5 h-5 mr-2"}),"Go Home"]}),r.jsxs("button",{onClick:()=>window.history.back(),className:"btn btn-outline",children:[r.jsx(Sf,{className:"w-5 h-5 mr-2"}),"Go Back"]})]})]})})]}),H2=new Pp({defaultOptions:{queries:{retry:1,refetchOnWindowFocus:!1,staleTime:5*60*1e3}}});function z2(){return r.jsx(Lp,{children:r.jsx(Mp,{children:r.jsx(Fp,{defaultTheme:"dark",children:r.jsx(fu,{children:r.jsx(Op,{client:H2,children:r.jsxs(Jm,{children:[r.jsx(Xp,{}),r.jsx(Qp,{children:r.jsxs(Qm,{children:[r.jsx(ht,{path:"/",element:r.jsx(R2,{})}),r.jsx(ht,{path:"/about",element:r.jsx(O2,{})}),r.jsx(ht,{path:"/projects",element:r.jsx(D2,{})}),r.jsx(ht,{path:"/projects/:id",element:r.jsx(F2,{})}),r.jsx(ht,{path:"/blog",element:r.jsx(M2,{})}),r.jsx(ht,{path:"/blog/:slug",element:r.jsx(L2,{})}),r.jsx(ht,{path:"/templates",element:r.jsx(U2,{})}),r.jsx(ht,{path:"/templates/:id",element:r.jsx(V2,{})}),r.jsx(ht,{path:"/contact",element:r.jsx($2,{})}),r.jsx(ht,{path:"*",element:r.jsx(B2,{})})]})}),r.jsx(tg,{})]})})})})})})}const q2=()=>{window.checkFirebase=()=>{var t,e,s,i;console.log("🔥 FIREBASE QUICK CHECK"),console.log("======================");try{console.log("📱 App:",(le==null?void 0:le.name)||"Not initialized"),console.log("📊 Project ID:",((t=le==null?void 0:le.options)==null?void 0:t.projectId)||"Not set"),console.log("🌐 Auth Domain:",((e=le==null?void 0:le.options)==null?void 0:e.authDomain)||"Not set"),console.log("💾 Storage Bucket:",((s=le==null?void 0:le.options)==null?void 0:s.storageBucket)||"Not set"),console.log(`
🔐 Environment Variables:`),console.log("API Key:","✅ Set"),console.log("Auth Domain:","✅ Set"),console.log("Project ID:","✅ Set"),console.log("Storage Bucket:","✅ Set"),console.log("Messaging Sender ID:","✅ Set"),console.log("App ID:","✅ Set"),(i=le==null?void 0:le.options)!=null&&i.projectId?(console.log(`
🎉 Firebase appears to be configured correctly!`),console.log("🌐 Console URL:",`https://console.firebase.google.com/project/${le.options.projectId}`)):console.log(`
❌ Firebase configuration has issues. Check your environment variables.`)}catch(n){console.error("💥 Error checking Firebase:",n)}}};q2();Ca.createRoot(document.getElementById("root")).render(r.jsx(ie.StrictMode,{children:r.jsx(z2,{})}));
//# sourceMappingURL=index-CWTE-hL5.js.map
