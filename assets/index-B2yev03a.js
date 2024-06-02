function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Home-Bp6kQRuJ.js","assets/AppTile-BycuUR1q.js","assets/PostTile.vue_vue_type_script_setup_true_lang-DV2jephg.js","assets/Loading-DFgC3aiS.js","assets/Loading-flJ8eEFp.css","assets/query-y6O2yjs3.js","assets/Subview-CtnKQMkL.js","assets/Post-BvGqbk9q.js","assets/Profile-tCtJS_Bl.js","assets/PageNotFound-T2HEelGC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ff(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const ke={},ur=[],rn=()=>{},CS=()=>!1,Kc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Uf=t=>t.startsWith("onUpdate:"),pt=Object.assign,$f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},SS=Object.prototype.hasOwnProperty,me=(t,e)=>SS.call(t,e),Y=Array.isArray,hr=t=>Ca(t)==="[object Map]",zc=t=>Ca(t)==="[object Set]",Rg=t=>Ca(t)==="[object Date]",ne=t=>typeof t=="function",Xe=t=>typeof t=="string",Vs=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",SE=t=>(Pe(t)||ne(t))&&ne(t.then)&&ne(t.catch),RE=Object.prototype.toString,Ca=t=>RE.call(t),RS=t=>Ca(t).slice(8,-1),PE=t=>Ca(t)==="[object Object]",Bf=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Po=Ff(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},PS=/-(\w)/g,Wn=Gc(t=>t.replace(PS,(e,n)=>n?n.toUpperCase():"")),NS=/\B([A-Z])/g,Wr=Gc(t=>t.replace(NS,"-$1").toLowerCase()),Qc=Gc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ph=Gc(t=>t?`on${Qc(t)}`:""),Fs=(t,e)=>!Object.is(t,e),xl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Jl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Pg;const NE=()=>Pg||(Pg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jf(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Xe(s)?xS(s):jf(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Xe(t)||Pe(t))return t}const OS=/;(?![^(]*\))/g,kS=/:([^]+)/,DS=/\/\*[^]*?\*\//g;function xS(t){const e={};return t.replace(DS,"").split(OS).forEach(n=>{if(n){const s=n.split(kS);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hf(t){let e="";if(Xe(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=Hf(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const LS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",MS=Ff(LS);function OE(t){return!!t||t===""}function VS(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Yc(t[s],e[s]);return n}function Yc(t,e){if(t===e)return!0;let n=Rg(t),s=Rg(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Vs(t),s=Vs(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?VS(t,e):!1;if(n=Pe(t),s=Pe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Yc(t[o],e[o]))return!1}}return String(t)===String(e)}function FS(t,e){return t.findIndex(n=>Yc(n,e))}const gd=t=>Xe(t)?t:t==null?"":Y(t)||Pe(t)&&(t.toString===RE||!ne(t.toString))?JSON.stringify(t,kE,2):String(t),kE=(t,e)=>e&&e.__v_isRef?kE(t,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[_h(s,r)+" =>"]=i,n),{})}:zc(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>_h(n))}:Vs(e)?_h(e):Pe(e)&&!Y(e)&&!PE(e)?String(e):e,_h=(t,e="")=>{var n;return Vs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class DE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function US(t){return new DE(t)}function $S(t,e=Wt){e&&e.active&&e.effects.push(t)}function xE(){return Wt}function BS(t){Wt&&Wt.cleanups.push(t)}let mi;class Wf{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,$S(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Mi();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(jS(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Vi()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Os,n=mi;try{return Os=!0,mi=this,this._runnings++,Ng(this),this.fn()}finally{Og(this),this._runnings--,mi=n,Os=e}}stop(){var e;this.active&&(Ng(this),Og(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function jS(t){return t.value}function Ng(t){t._trackId++,t._depsLength=0}function Og(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)LE(t.deps[e],t);t.deps.length=t._depsLength}}function LE(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Os=!0,md=0;const ME=[];function Mi(){ME.push(Os),Os=!1}function Vi(){const t=ME.pop();Os=t===void 0?!0:t}function qf(){md++}function Kf(){for(md--;!md&&yd.length;)yd.shift()()}function VE(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&LE(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const yd=[];function FE(t,e,n){qf();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&yd.push(s.scheduler)))}Kf()}const UE=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},vd=new WeakMap,yi=Symbol(""),Ed=Symbol("");function Ft(t,e,n){if(Os&&mi){let s=vd.get(t);s||vd.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=UE(()=>s.delete(n))),VE(mi,i)}}function as(t,e,n,s,i,r){const o=vd.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Vs(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?Bf(n)&&a.push(o.get("length")):(a.push(o.get(yi)),hr(t)&&a.push(o.get(Ed)));break;case"delete":Y(t)||(a.push(o.get(yi)),hr(t)&&a.push(o.get(Ed)));break;case"set":hr(t)&&a.push(o.get(yi));break}qf();for(const l of a)l&&FE(l,4);Kf()}const HS=Ff("__proto__,__v_isRef,__isVue"),$E=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vs)),kg=WS();function WS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Te(this);for(let r=0,o=this.length;r<o;r++)Ft(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Te)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mi(),qf();const s=Te(this)[e].apply(this,n);return Kf(),Vi(),s}}),t}function qS(t){const e=Te(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class BE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?i0:qE:r?WE:HE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Y(e);if(!i){if(o&&me(kg,n))return Reflect.get(kg,n,s);if(n==="hasOwnProperty")return qS}const a=Reflect.get(e,n,s);return(Vs(n)?$E.has(n):HS(n))||(i||Ft(e,"get",n),r)?a:Nt(a)?o&&Bf(n)?a:a.value:Pe(a)?i?zE(a):Sa(a):a}}class jE extends BE{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=wr(r);if(!Zl(s)&&!wr(s)&&(r=Te(r),s=Te(s)),!Y(e)&&Nt(r)&&!Nt(s))return l?!1:(r.value=s,!0)}const o=Y(e)&&Bf(n)?Number(n)<e.length:me(e,n),a=Reflect.set(e,n,s,i);return e===Te(i)&&(o?Fs(s,r)&&as(e,"set",n,s):as(e,"add",n,s)),a}deleteProperty(e,n){const s=me(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&as(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Vs(n)||!$E.has(n))&&Ft(e,"has",n),s}ownKeys(e){return Ft(e,"iterate",Y(e)?"length":yi),Reflect.ownKeys(e)}}class KS extends BE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zS=new jE,GS=new KS,QS=new jE(!0),zf=t=>t,Xc=t=>Reflect.getPrototypeOf(t);function rl(t,e,n=!1,s=!1){t=t.__v_raw;const i=Te(t),r=Te(e);n||(Fs(e,r)&&Ft(i,"get",e),Ft(i,"get",r));const{has:o}=Xc(i),a=s?zf:n?Yf:Yo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ol(t,e=!1){const n=this.__v_raw,s=Te(n),i=Te(t);return e||(Fs(t,i)&&Ft(s,"has",t),Ft(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function al(t,e=!1){return t=t.__v_raw,!e&&Ft(Te(t),"iterate",yi),Reflect.get(t,"size",t)}function Dg(t){t=Te(t);const e=Te(this);return Xc(e).has.call(e,t)||(e.add(t),as(e,"add",t,t)),this}function xg(t,e){e=Te(e);const n=Te(this),{has:s,get:i}=Xc(n);let r=s.call(n,t);r||(t=Te(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Fs(e,o)&&as(n,"set",t,e):as(n,"add",t,e),this}function Lg(t){const e=Te(this),{has:n,get:s}=Xc(e);let i=n.call(e,t);i||(t=Te(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&as(e,"delete",t,void 0),r}function Mg(){const t=Te(this),e=t.size!==0,n=t.clear();return e&&as(t,"clear",void 0,void 0),n}function ll(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Te(o),l=e?zf:t?Yf:Yo;return!t&&Ft(a,"iterate",yi),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function cl(t,e,n){return function(...s){const i=this.__v_raw,r=Te(i),o=hr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?zf:e?Yf:Yo;return!e&&Ft(r,"iterate",l?Ed:yi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function vs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function YS(){const t={get(r){return rl(this,r)},get size(){return al(this)},has:ol,add:Dg,set:xg,delete:Lg,clear:Mg,forEach:ll(!1,!1)},e={get(r){return rl(this,r,!1,!0)},get size(){return al(this)},has:ol,add:Dg,set:xg,delete:Lg,clear:Mg,forEach:ll(!1,!0)},n={get(r){return rl(this,r,!0)},get size(){return al(this,!0)},has(r){return ol.call(this,r,!0)},add:vs("add"),set:vs("set"),delete:vs("delete"),clear:vs("clear"),forEach:ll(!0,!1)},s={get(r){return rl(this,r,!0,!0)},get size(){return al(this,!0)},has(r){return ol.call(this,r,!0)},add:vs("add"),set:vs("set"),delete:vs("delete"),clear:vs("clear"),forEach:ll(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=cl(r,!1,!1),n[r]=cl(r,!0,!1),e[r]=cl(r,!1,!0),s[r]=cl(r,!0,!0)}),[t,n,e,s]}const[XS,JS,ZS,e0]=YS();function Gf(t,e){const n=e?t?e0:ZS:t?JS:XS;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(me(n,i)&&i in s?n:s,i,r)}const t0={get:Gf(!1,!1)},n0={get:Gf(!1,!0)},s0={get:Gf(!0,!1)},HE=new WeakMap,WE=new WeakMap,qE=new WeakMap,i0=new WeakMap;function r0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function o0(t){return t.__v_skip||!Object.isExtensible(t)?0:r0(RS(t))}function Sa(t){return wr(t)?t:Qf(t,!1,zS,t0,HE)}function KE(t){return Qf(t,!1,QS,n0,WE)}function zE(t){return Qf(t,!0,GS,s0,qE)}function Qf(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=o0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function dr(t){return wr(t)?dr(t.__v_raw):!!(t&&t.__v_isReactive)}function wr(t){return!!(t&&t.__v_isReadonly)}function Zl(t){return!!(t&&t.__v_isShallow)}function GE(t){return dr(t)||wr(t)}function Te(t){const e=t&&t.__v_raw;return e?Te(e):t}function QE(t){return Object.isExtensible(t)&&Jl(t,"__v_skip",!0),t}const Yo=t=>Pe(t)?Sa(t):t,Yf=t=>Pe(t)?zE(t):t;class YE{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wf(()=>e(this._value),()=>Ll(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Te(this);return(!e._cacheable||e.effect.dirty)&&Fs(e._value,e._value=e.effect.run())&&Ll(e,4),XE(e),e.effect._dirtyLevel>=2&&Ll(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function a0(t,e,n=!1){let s,i;const r=ne(t);return r?(s=t,i=rn):(s=t.get,i=t.set),new YE(s,i,r||!i,n)}function XE(t){var e;Os&&mi&&(t=Te(t),VE(mi,(e=t.dep)!=null?e:t.dep=UE(()=>t.dep=void 0,t instanceof YE?t:void 0)))}function Ll(t,e=4,n){t=Te(t);const s=t.dep;s&&FE(s,e)}function Nt(t){return!!(t&&t.__v_isRef===!0)}function yn(t){return ZE(t,!1)}function JE(t){return ZE(t,!0)}function ZE(t,e){return Nt(t)?t:new l0(t,e)}class l0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Te(e),this._value=n?e:Yo(e)}get value(){return XE(this),this._value}set value(e){const n=this.__v_isShallow||Zl(e)||wr(e);e=n?e:Te(e),Fs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Yo(e),Ll(this,4))}}function Kt(t){return Nt(t)?t.value:t}function es(t){return ne(t)?t():Kt(t)}const c0={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Nt(i)&&!Nt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function eT(t){return dr(t)?t:new Proxy(t,c0)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ks(t,e,n,s){try{return s?t(...s):t()}catch(i){Jc(i,e,n)}}function vn(t,e,n,s){if(ne(t)){const r=ks(t,e,n,s);return r&&SE(r)&&r.catch(o=>{Jc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(vn(t[r],e,n,s));return i}function Jc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){ks(l,null,10,[t,o,a]);return}}u0(t,n,i,s)}function u0(t,e,n,s=!0){console.error(t)}let Xo=!1,Td=!1;const Et=[];let Nn=0;const fr=[];let Is=null,ri=0;const tT=Promise.resolve();let Xf=null;function Jf(t){const e=Xf||tT;return t?e.then(this?t.bind(this):t):e}function h0(t){let e=Nn+1,n=Et.length;for(;e<n;){const s=e+n>>>1,i=Et[s],r=Jo(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Zf(t){(!Et.length||!Et.includes(t,Xo&&t.allowRecurse?Nn+1:Nn))&&(t.id==null?Et.push(t):Et.splice(h0(t.id),0,t),nT())}function nT(){!Xo&&!Td&&(Td=!0,Xf=tT.then(iT))}function d0(t){const e=Et.indexOf(t);e>Nn&&Et.splice(e,1)}function f0(t){Y(t)?fr.push(...t):(!Is||!Is.includes(t,t.allowRecurse?ri+1:ri))&&fr.push(t),nT()}function Vg(t,e,n=Xo?Nn+1:0){for(;n<Et.length;n++){const s=Et[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Et.splice(n,1),n--,s()}}}function sT(t){if(fr.length){const e=[...new Set(fr)].sort((n,s)=>Jo(n)-Jo(s));if(fr.length=0,Is){Is.push(...e);return}for(Is=e,ri=0;ri<Is.length;ri++)Is[ri]();Is=null,ri=0}}const Jo=t=>t.id==null?1/0:t.id,p0=(t,e)=>{const n=Jo(t)-Jo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function iT(t){Td=!1,Xo=!0,Et.sort(p0);try{for(Nn=0;Nn<Et.length;Nn++){const e=Et[Nn];e&&e.active!==!1&&ks(e,null,14)}}finally{Nn=0,Et.length=0,sT(),Xo=!1,Xf=null,(Et.length||fr.length)&&iT()}}function _0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ke;d&&(i=n.map(f=>Xe(f)?f.trim():f)),h&&(i=n.map(Qo))}let a,l=s[a=ph(e)]||s[a=ph(Wn(e))];!l&&r&&(l=s[a=ph(Wr(e))]),l&&vn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,vn(c,t,6,i)}}function rT(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=rT(c,e,!0);u&&(a=!0,pt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Pe(t)&&s.set(t,null),null):(Y(r)?r.forEach(l=>o[l]=null):pt(o,r),Pe(t)&&s.set(t,o),o)}function Zc(t,e){return!t||!Kc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Wr(e))||me(t,e))}let Qe=null,eu=null;function ec(t){const e=Qe;return Qe=t,eu=t&&t.type.__scopeId||null,e}function XH(t){eu=t}function JH(){eu=null}function Ml(t,e=Qe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Gg(-1);const r=ec(e);let o;try{o=t(...i)}finally{ec(r),s._d&&Gg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function gh(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:m}=t;let y,E;const C=ec(t);try{if(n.shapeFlag&4){const b=i||s,B=b;y=Pn(u.call(B,b,h,r,f,d,g)),E=l}else{const b=e;y=Pn(b.length>1?b(r,{attrs:l,slots:a,emit:c}):b(r,null)),E=e.props?l:g0(l)}}catch(b){xo.length=0,Jc(b,t,1),y=nt(Us)}let T=y;if(E&&m!==!1){const b=Object.keys(E),{shapeFlag:B}=T;b.length&&B&7&&(o&&b.some(Uf)&&(E=m0(E,o)),T=Ir(T,E))}return n.dirs&&(T=Ir(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),y=T,ec(C),y}const g0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Kc(n))&&((e||(e={}))[n]=t[n]);return e},m0=(t,e)=>{const n={};for(const s in t)(!Uf(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function y0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Fg(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Zc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Fg(s,o,c):!0:!!o;return!1}function Fg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Zc(n,r))return!0}return!1}function v0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const oT="components";function aT(t,e){return T0(oT,t,!0,e)||t}const E0=Symbol.for("v-ndc");function T0(t,e,n=!0,s=!1){const i=Qe||ct;if(i){const r=i.type;if(t===oT){const a=pR(r,!1);if(a&&(a===e||a===Wn(e)||a===Qc(Wn(e))))return r}const o=Ug(i[t]||r[t],e)||Ug(i.appContext[t],e);return!o&&s?r:o}}function Ug(t,e){return t&&(t[e]||t[Wn(e)]||t[Qc(Wn(e))])}const w0=t=>t.__isSuspense;function I0(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):f0(t)}const A0=Symbol.for("v-scx"),b0=()=>Vt(A0),ul={};function No(t,e,n){return lT(t,e,n)}function lT(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=ke){if(e&&r){const O=e;e=(...q)=>{O(...q),B()}}const l=ct,c=O=>s===!0?O:li(O,s===!1?1:void 0);let u,h=!1,d=!1;if(Nt(t)?(u=()=>t.value,h=Zl(t)):dr(t)?(u=()=>c(t),h=!0):Y(t)?(d=!0,h=t.some(O=>dr(O)||Zl(O)),u=()=>t.map(O=>{if(Nt(O))return O.value;if(dr(O))return c(O);if(ne(O))return ks(O,l,2)})):ne(t)?e?u=()=>ks(t,l,2):u=()=>(f&&f(),vn(t,l,3,[g])):u=rn,e&&s){const O=u;u=()=>li(O())}let f,g=O=>{f=T.onStop=()=>{ks(O,l,4),f=T.onStop=void 0}},m;if(iu)if(g=rn,e?n&&vn(e,l,3,[u(),d?[]:void 0,g]):u(),i==="sync"){const O=b0();m=O.__watcherHandles||(O.__watcherHandles=[])}else return rn;let y=d?new Array(t.length).fill(ul):ul;const E=()=>{if(!(!T.active||!T.dirty))if(e){const O=T.run();(s||h||(d?O.some((q,J)=>Fs(q,y[J])):Fs(O,y)))&&(f&&f(),vn(e,l,3,[O,y===ul?void 0:d&&y[0]===ul?[]:y,g]),y=O)}else T.run()};E.allowRecurse=!!e;let C;i==="sync"?C=E:i==="post"?C=()=>Dt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),C=()=>Zf(E));const T=new Wf(u,rn,C),b=xE(),B=()=>{T.stop(),b&&$f(b.effects,T)};return e?n?E():y=T.run():i==="post"?Dt(T.run.bind(T),l&&l.suspense):T.run(),m&&m.push(B),B}function C0(t,e,n){const s=this.proxy,i=Xe(t)?t.includes(".")?cT(s,t):()=>s[t]:t.bind(s,s);let r;ne(e)?r=e:(r=e.handler,n=e);const o=Pa(this),a=lT(i,r.bind(s),n);return o(),a}function cT(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function li(t,e,n=0,s){if(!Pe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Nt(t))li(t.value,e,n,s);else if(Y(t))for(let i=0;i<t.length;i++)li(t[i],e,n,s);else if(zc(t)||hr(t))t.forEach(i=>{li(i,e,n,s)});else if(PE(t))for(const i in t)li(t[i],e,n,s);return t}function S0(t,e){if(Qe===null)return t;const n=ru(Qe)||Qe.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ke]=e[i];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&li(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ti(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Mi(),vn(l,n,8,[t.el,a,t,e]),Vi())}}/*! #__NO_SIDE_EFFECTS__ */function Ra(t,e){return ne(t)?pt({name:t.name},e,{setup:t}):t}const Oo=t=>!!t.type.__asyncLoader,uT=t=>t.type.__isKeepAlive;function R0(t,e){hT(t,"a",e)}function P0(t,e){hT(t,"da",e)}function hT(t,e,n=ct){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(tu(e,s,n),n){let i=n.parent;for(;i&&i.parent;)uT(i.parent.vnode)&&N0(s,e,n,i),i=i.parent}}function N0(t,e,n,s){const i=tu(e,t,s,!0);fT(()=>{$f(s[e],i)},n)}function tu(t,e,n=ct,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Mi();const a=Pa(n),l=vn(e,n,t,o);return a(),Vi(),l});return s?i.unshift(r):i.push(r),r}}const _s=t=>(e,n=ct)=>(!iu||t==="sp")&&tu(t,(...s)=>e(...s),n),O0=_s("bm"),dT=_s("m"),k0=_s("bu"),D0=_s("u"),x0=_s("bum"),fT=_s("um"),pT=_s("sp"),L0=_s("rtg"),M0=_s("rtc");function V0(t,e=ct){tu("ec",t,e)}function ZH(t,e,n,s){let i;const r=n&&n[s];if(Y(t)||Xe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function F0(t,e,n={},s,i){if(Qe.isCE||Qe.parent&&Oo(Qe.parent)&&Qe.parent.isCE)return e!=="default"&&(n.name=e),nt("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),ts();const o=r&&_T(r(n)),a=np(zt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function _T(t){return t.some(e=>nc(e)?!(e.type===Us||e.type===zt&&!_T(e.children)):!0)?t:null}const wd=t=>t?RT(t)?ru(t)||t.proxy:wd(t.parent):null,ko=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wd(t.parent),$root:t=>wd(t.root),$emit:t=>t.emit,$options:t=>ep(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Zf(t.update)}),$nextTick:t=>t.n||(t.n=Jf.bind(t.proxy)),$watch:t=>C0.bind(t)}),mh=(t,e)=>t!==ke&&!t.__isScriptSetup&&me(t,e),U0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(mh(s,e))return o[e]=1,s[e];if(i!==ke&&me(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,r[e];if(n!==ke&&me(n,e))return o[e]=4,n[e];Id&&(o[e]=0)}}const u=ko[e];let h,d;if(u)return e==="$attrs"&&Ft(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&me(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,me(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return mh(i,e)?(i[e]=n,!0):s!==ke&&me(s,e)?(s[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ke&&me(t,o)||mh(e,o)||(a=r[0])&&me(a,o)||me(s,o)||me(ko,o)||me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $g(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Id=!0;function $0(t){const e=ep(t),n=t.proxy,s=t.ctx;Id=!1,e.beforeCreate&&Bg(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:m,deactivated:y,beforeDestroy:E,beforeUnmount:C,destroyed:T,unmounted:b,render:B,renderTracked:O,renderTriggered:q,errorCaptured:J,serverPrefetch:de,expose:ae,inheritAttrs:Ne,components:Ge,directives:Ce,filters:Ut}=e;if(c&&B0(c,s,null),o)for(const re in o){const ue=o[re];ne(ue)&&(s[re]=ue.bind(n))}if(i){const re=i.call(n,n);Pe(re)&&(t.data=Sa(re))}if(Id=!0,r)for(const re in r){const ue=r[re],ot=ne(ue)?ue.bind(n,n):ne(ue.get)?ue.get.bind(n,n):rn,$t=!ne(ue)&&ne(ue.set)?ue.set.bind(n):rn,kt=Gt({get:ot,set:$t});Object.defineProperty(s,re,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Be=>kt.value=Be})}if(a)for(const re in a)gT(a[re],s,n,re);if(l){const re=ne(l)?l.call(n):l;Reflect.ownKeys(re).forEach(ue=>{Vl(ue,re[ue])})}u&&Bg(u,t,"c");function ye(re,ue){Y(ue)?ue.forEach(ot=>re(ot.bind(n))):ue&&re(ue.bind(n))}if(ye(O0,h),ye(dT,d),ye(k0,f),ye(D0,g),ye(R0,m),ye(P0,y),ye(V0,J),ye(M0,O),ye(L0,q),ye(x0,C),ye(fT,b),ye(pT,de),Y(ae))if(ae.length){const re=t.exposed||(t.exposed={});ae.forEach(ue=>{Object.defineProperty(re,ue,{get:()=>n[ue],set:ot=>n[ue]=ot})})}else t.exposed||(t.exposed={});B&&t.render===rn&&(t.render=B),Ne!=null&&(t.inheritAttrs=Ne),Ge&&(t.components=Ge),Ce&&(t.directives=Ce)}function B0(t,e,n=rn){Y(t)&&(t=Ad(t));for(const s in t){const i=t[s];let r;Pe(i)?"default"in i?r=Vt(i.from||s,i.default,!0):r=Vt(i.from||s):r=Vt(i),Nt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Bg(t,e,n){vn(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function gT(t,e,n,s){const i=s.includes(".")?cT(n,s):()=>n[s];if(Xe(t)){const r=e[t];ne(r)&&No(i,r)}else if(ne(t))No(i,t.bind(n));else if(Pe(t))if(Y(t))t.forEach(r=>gT(r,e,n,s));else{const r=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(r)&&No(i,r,t)}}function ep(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>tc(l,c,o,!0)),tc(l,e,o)),Pe(e)&&r.set(e,l),l}function tc(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&tc(t,r,n,!0),i&&i.forEach(o=>tc(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=j0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const j0={data:jg,props:Hg,emits:Hg,methods:wo,computed:wo,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:wo,directives:wo,watch:W0,provide:jg,inject:H0};function jg(t,e){return e?t?function(){return pt(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function H0(t,e){return wo(Ad(t),Ad(e))}function Ad(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function wo(t,e){return t?pt(Object.create(null),t,e):e}function Hg(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:pt(Object.create(null),$g(t),$g(e??{})):e}function W0(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const s in e)n[s]=Ct(t[s],e[s]);return n}function mT(){return{app:null,config:{isNativeTag:CS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let q0=0;function K0(t,e){return function(s,i=null){ne(s)||(s=pt({},s)),i!=null&&!Pe(i)&&(i=null);const r=mT(),o=new WeakSet;let a=!1;const l=r.app={_uid:q0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:gR,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=nt(s,i);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ru(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){const u=Do;Do=l;try{return c()}finally{Do=u}}};return l}}let Do=null;function Vl(t,e){if(ct){let n=ct.provides;const s=ct.parent&&ct.parent.provides;s===n&&(n=ct.provides=Object.create(s)),n[t]=e}}function Vt(t,e,n=!1){const s=ct||Qe;if(s||Do){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Do._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(s&&s.proxy):e}}function z0(t,e,n,s=!1){const i={},r={};Jl(r,su,1),t.propsDefaults=Object.create(null),yT(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:KE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function G0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Te(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Zc(t.emitsOptions,d))continue;const f=e[d];if(l)if(me(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Wn(d);i[g]=bd(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{yT(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=Wr(h))===h||!me(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=bd(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!me(e,h))&&(delete r[h],c=!0)}c&&as(t,"set","$attrs")}function yT(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Po(l))continue;const c=e[l];let u;i&&me(i,u=Wn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Zc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Te(n),c=a||ke;for(let u=0;u<r.length;u++){const h=r[u];n[h]=bd(i,l,h,c[h],t,!me(c,h))}}return o}function bd(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Pa(i);s=c[n]=l.call(null,e),u()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Wr(n))&&(s=!0))}return s}function vT(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[d,f]=vT(h,e,!0);pt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Pe(t)&&s.set(t,ur),ur;if(Y(r))for(let u=0;u<r.length;u++){const h=Wn(r[u]);Wg(h)&&(o[h]=ke)}else if(r)for(const u in r){const h=Wn(u);if(Wg(h)){const d=r[u],f=o[h]=Y(d)||ne(d)?{type:d}:pt({},d);if(f){const g=zg(Boolean,f.type),m=zg(String,f.type);f[0]=g>-1,f[1]=m<0||g<m,(g>-1||me(f,"default"))&&a.push(h)}}}const c=[o,a];return Pe(t)&&s.set(t,c),c}function Wg(t){return t[0]!=="$"&&!Po(t)}function qg(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Kg(t,e){return qg(t)===qg(e)}function zg(t,e){return Y(e)?e.findIndex(n=>Kg(n,t)):ne(e)&&Kg(e,t)?0:-1}const ET=t=>t[0]==="_"||t==="$stable",tp=t=>Y(t)?t.map(Pn):[Pn(t)],Q0=(t,e,n)=>{if(e._n)return e;const s=Ml((...i)=>tp(e(...i)),n);return s._c=!1,s},TT=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ET(i))continue;const r=t[i];if(ne(r))e[i]=Q0(i,r,s);else if(r!=null){const o=tp(r);e[i]=()=>o}}},wT=(t,e)=>{const n=tp(e);t.slots.default=()=>n},Y0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Te(e),Jl(e,"_",n)):TT(e,t.slots={})}else t.slots={},e&&wT(t,e);Jl(t.slots,su,1)},X0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(pt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,TT(e,i)),o=e}else e&&(wT(t,e),o={default:1});if(r)for(const a in i)!ET(a)&&o[a]==null&&delete i[a]};function Cd(t,e,n,s,i=!1){if(Y(t)){t.forEach((d,f)=>Cd(d,e&&(Y(e)?e[f]:e),n,s,i));return}if(Oo(s)&&!i)return;const r=s.shapeFlag&4?ru(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Xe(c)?(u[c]=null,me(h,c)&&(h[c]=null)):Nt(c)&&(c.value=null)),ne(l))ks(l,a,12,[o,u]);else{const d=Xe(l),f=Nt(l);if(d||f){const g=()=>{if(t.f){const m=d?me(h,l)?h[l]:u[l]:l.value;i?Y(m)&&$f(m,r):Y(m)?m.includes(r)||m.push(r):d?(u[l]=[r],me(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,me(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Dt(g,n)):g()}}}const Dt=I0;function J0(t){return Z0(t)}function Z0(t,e){const n=NE();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=rn,insertStaticContent:g}=t,m=(p,_,v,S=null,w=null,D=null,$=void 0,k=null,x=!!_.dynamicChildren)=>{if(p===_)return;p&&!co(p,_)&&(S=I(p),Be(p,w,D,!0),p=null),_.patchFlag===-2&&(x=!1,_.dynamicChildren=null);const{type:N,ref:H,shapeFlag:z}=_;switch(N){case nu:y(p,_,v,S);break;case Us:E(p,_,v,S);break;case vh:p==null&&C(_,v,S,$);break;case zt:Ge(p,_,v,S,w,D,$,k,x);break;default:z&1?B(p,_,v,S,w,D,$,k,x):z&6?Ce(p,_,v,S,w,D,$,k,x):(z&64||z&128)&&N.process(p,_,v,S,w,D,$,k,x,W)}H!=null&&w&&Cd(H,p&&p.ref,D,_||p,!_)},y=(p,_,v,S)=>{if(p==null)s(_.el=a(_.children),v,S);else{const w=_.el=p.el;_.children!==p.children&&c(w,_.children)}},E=(p,_,v,S)=>{p==null?s(_.el=l(_.children||""),v,S):_.el=p.el},C=(p,_,v,S)=>{[p.el,p.anchor]=g(p.children,_,v,S,p.el,p.anchor)},T=({el:p,anchor:_},v,S)=>{let w;for(;p&&p!==_;)w=d(p),s(p,v,S),p=w;s(_,v,S)},b=({el:p,anchor:_})=>{let v;for(;p&&p!==_;)v=d(p),i(p),p=v;i(_)},B=(p,_,v,S,w,D,$,k,x)=>{_.type==="svg"?$="svg":_.type==="math"&&($="mathml"),p==null?O(_,v,S,w,D,$,k,x):de(p,_,w,D,$,k,x)},O=(p,_,v,S,w,D,$,k)=>{let x,N;const{props:H,shapeFlag:z,transition:K,dirs:X}=p;if(x=p.el=o(p.type,D,H&&H.is,H),z&8?u(x,p.children):z&16&&J(p.children,x,null,S,w,yh(p,D),$,k),X&&ti(p,null,S,"created"),q(x,p,p.scopeId,$,S),H){for(const ve in H)ve!=="value"&&!Po(ve)&&r(x,ve,null,H[ve],D,p.children,S,w,Ue);"value"in H&&r(x,"value",null,H.value,D),(N=H.onVnodeBeforeMount)&&Rn(N,S,p)}X&&ti(p,null,S,"beforeMount");const oe=eR(w,K);oe&&K.beforeEnter(x),s(x,_,v),((N=H&&H.onVnodeMounted)||oe||X)&&Dt(()=>{N&&Rn(N,S,p),oe&&K.enter(x),X&&ti(p,null,S,"mounted")},w)},q=(p,_,v,S,w)=>{if(v&&f(p,v),S)for(let D=0;D<S.length;D++)f(p,S[D]);if(w){let D=w.subTree;if(_===D){const $=w.vnode;q(p,$,$.scopeId,$.slotScopeIds,w.parent)}}},J=(p,_,v,S,w,D,$,k,x=0)=>{for(let N=x;N<p.length;N++){const H=p[N]=k?As(p[N]):Pn(p[N]);m(null,H,_,v,S,w,D,$,k)}},de=(p,_,v,S,w,D,$)=>{const k=_.el=p.el;let{patchFlag:x,dynamicChildren:N,dirs:H}=_;x|=p.patchFlag&16;const z=p.props||ke,K=_.props||ke;let X;if(v&&ni(v,!1),(X=K.onVnodeBeforeUpdate)&&Rn(X,v,_,p),H&&ti(_,p,v,"beforeUpdate"),v&&ni(v,!0),N?ae(p.dynamicChildren,N,k,v,S,yh(_,w),D):$||ue(p,_,k,null,v,S,yh(_,w),D,!1),x>0){if(x&16)Ne(k,_,z,K,v,S,w);else if(x&2&&z.class!==K.class&&r(k,"class",null,K.class,w),x&4&&r(k,"style",z.style,K.style,w),x&8){const oe=_.dynamicProps;for(let ve=0;ve<oe.length;ve++){const Ve=oe[ve],Je=z[Ve],fn=K[Ve];(fn!==Je||Ve==="value")&&r(k,Ve,Je,fn,w,p.children,v,S,Ue)}}x&1&&p.children!==_.children&&u(k,_.children)}else!$&&N==null&&Ne(k,_,z,K,v,S,w);((X=K.onVnodeUpdated)||H)&&Dt(()=>{X&&Rn(X,v,_,p),H&&ti(_,p,v,"updated")},S)},ae=(p,_,v,S,w,D,$)=>{for(let k=0;k<_.length;k++){const x=p[k],N=_[k],H=x.el&&(x.type===zt||!co(x,N)||x.shapeFlag&70)?h(x.el):v;m(x,N,H,null,S,w,D,$,!0)}},Ne=(p,_,v,S,w,D,$)=>{if(v!==S){if(v!==ke)for(const k in v)!Po(k)&&!(k in S)&&r(p,k,v[k],null,$,_.children,w,D,Ue);for(const k in S){if(Po(k))continue;const x=S[k],N=v[k];x!==N&&k!=="value"&&r(p,k,N,x,$,_.children,w,D,Ue)}"value"in S&&r(p,"value",v.value,S.value,$)}},Ge=(p,_,v,S,w,D,$,k,x)=>{const N=_.el=p?p.el:a(""),H=_.anchor=p?p.anchor:a("");let{patchFlag:z,dynamicChildren:K,slotScopeIds:X}=_;X&&(k=k?k.concat(X):X),p==null?(s(N,v,S),s(H,v,S),J(_.children||[],v,H,w,D,$,k,x)):z>0&&z&64&&K&&p.dynamicChildren?(ae(p.dynamicChildren,K,v,w,D,$,k),(_.key!=null||w&&_===w.subTree)&&IT(p,_,!0)):ue(p,_,v,H,w,D,$,k,x)},Ce=(p,_,v,S,w,D,$,k,x)=>{_.slotScopeIds=k,p==null?_.shapeFlag&512?w.ctx.activate(_,v,S,$,x):Ut(_,v,S,w,D,$,x):Ot(p,_,x)},Ut=(p,_,v,S,w,D,$)=>{const k=p.component=cR(p,S,w);if(uT(p)&&(k.ctx.renderer=W),uR(k),k.asyncDep){if(w&&w.registerDep(k,ye),!p.el){const x=k.subTree=nt(Us);E(null,x,_,v)}}else ye(k,p,_,v,w,D,$)},Ot=(p,_,v)=>{const S=_.component=p.component;if(y0(p,_,v))if(S.asyncDep&&!S.asyncResolved){re(S,_,v);return}else S.next=_,d0(S.update),S.effect.dirty=!0,S.update();else _.el=p.el,S.vnode=_},ye=(p,_,v,S,w,D,$)=>{const k=()=>{if(p.isMounted){let{next:H,bu:z,u:K,parent:X,vnode:oe}=p;{const Ki=AT(p);if(Ki){H&&(H.el=oe.el,re(p,H,$)),Ki.asyncDep.then(()=>{p.isUnmounted||k()});return}}let ve=H,Ve;ni(p,!1),H?(H.el=oe.el,re(p,H,$)):H=oe,z&&xl(z),(Ve=H.props&&H.props.onVnodeBeforeUpdate)&&Rn(Ve,X,H,oe),ni(p,!0);const Je=gh(p),fn=p.subTree;p.subTree=Je,m(fn,Je,h(fn.el),I(fn),p,w,D),H.el=Je.el,ve===null&&v0(p,Je.el),K&&Dt(K,w),(Ve=H.props&&H.props.onVnodeUpdated)&&Dt(()=>Rn(Ve,X,H,oe),w)}else{let H;const{el:z,props:K}=_,{bm:X,m:oe,parent:ve}=p,Ve=Oo(_);if(ni(p,!1),X&&xl(X),!Ve&&(H=K&&K.onVnodeBeforeMount)&&Rn(H,ve,_),ni(p,!0),z&&Se){const Je=()=>{p.subTree=gh(p),Se(z,p.subTree,p,w,null)};Ve?_.type.__asyncLoader().then(()=>!p.isUnmounted&&Je()):Je()}else{const Je=p.subTree=gh(p);m(null,Je,v,S,p,w,D),_.el=Je.el}if(oe&&Dt(oe,w),!Ve&&(H=K&&K.onVnodeMounted)){const Je=_;Dt(()=>Rn(H,ve,Je),w)}(_.shapeFlag&256||ve&&Oo(ve.vnode)&&ve.vnode.shapeFlag&256)&&p.a&&Dt(p.a,w),p.isMounted=!0,_=v=S=null}},x=p.effect=new Wf(k,rn,()=>Zf(N),p.scope),N=p.update=()=>{x.dirty&&x.run()};N.id=p.uid,ni(p,!0),N()},re=(p,_,v)=>{_.component=p;const S=p.vnode.props;p.vnode=_,p.next=null,G0(p,_.props,S,v),X0(p,_.children,v),Mi(),Vg(p),Vi()},ue=(p,_,v,S,w,D,$,k,x=!1)=>{const N=p&&p.children,H=p?p.shapeFlag:0,z=_.children,{patchFlag:K,shapeFlag:X}=_;if(K>0){if(K&128){$t(N,z,v,S,w,D,$,k,x);return}else if(K&256){ot(N,z,v,S,w,D,$,k,x);return}}X&8?(H&16&&Ue(N,w,D),z!==N&&u(v,z)):H&16?X&16?$t(N,z,v,S,w,D,$,k,x):Ue(N,w,D,!0):(H&8&&u(v,""),X&16&&J(z,v,S,w,D,$,k,x))},ot=(p,_,v,S,w,D,$,k,x)=>{p=p||ur,_=_||ur;const N=p.length,H=_.length,z=Math.min(N,H);let K;for(K=0;K<z;K++){const X=_[K]=x?As(_[K]):Pn(_[K]);m(p[K],X,v,null,w,D,$,k,x)}N>H?Ue(p,w,D,!0,!1,z):J(_,v,S,w,D,$,k,x,z)},$t=(p,_,v,S,w,D,$,k,x)=>{let N=0;const H=_.length;let z=p.length-1,K=H-1;for(;N<=z&&N<=K;){const X=p[N],oe=_[N]=x?As(_[N]):Pn(_[N]);if(co(X,oe))m(X,oe,v,null,w,D,$,k,x);else break;N++}for(;N<=z&&N<=K;){const X=p[z],oe=_[K]=x?As(_[K]):Pn(_[K]);if(co(X,oe))m(X,oe,v,null,w,D,$,k,x);else break;z--,K--}if(N>z){if(N<=K){const X=K+1,oe=X<H?_[X].el:S;for(;N<=K;)m(null,_[N]=x?As(_[N]):Pn(_[N]),v,oe,w,D,$,k,x),N++}}else if(N>K)for(;N<=z;)Be(p[N],w,D,!0),N++;else{const X=N,oe=N,ve=new Map;for(N=oe;N<=K;N++){const Ht=_[N]=x?As(_[N]):Pn(_[N]);Ht.key!=null&&ve.set(Ht.key,N)}let Ve,Je=0;const fn=K-oe+1;let Ki=!1,bg=0;const lo=new Array(fn);for(N=0;N<fn;N++)lo[N]=0;for(N=X;N<=z;N++){const Ht=p[N];if(Je>=fn){Be(Ht,w,D,!0);continue}let Sn;if(Ht.key!=null)Sn=ve.get(Ht.key);else for(Ve=oe;Ve<=K;Ve++)if(lo[Ve-oe]===0&&co(Ht,_[Ve])){Sn=Ve;break}Sn===void 0?Be(Ht,w,D,!0):(lo[Sn-oe]=N+1,Sn>=bg?bg=Sn:Ki=!0,m(Ht,_[Sn],v,null,w,D,$,k,x),Je++)}const Cg=Ki?tR(lo):ur;for(Ve=Cg.length-1,N=fn-1;N>=0;N--){const Ht=oe+N,Sn=_[Ht],Sg=Ht+1<H?_[Ht+1].el:S;lo[N]===0?m(null,Sn,v,Sg,w,D,$,k,x):Ki&&(Ve<0||N!==Cg[Ve]?kt(Sn,v,Sg,2):Ve--)}}},kt=(p,_,v,S,w=null)=>{const{el:D,type:$,transition:k,children:x,shapeFlag:N}=p;if(N&6){kt(p.component.subTree,_,v,S);return}if(N&128){p.suspense.move(_,v,S);return}if(N&64){$.move(p,_,v,W);return}if($===zt){s(D,_,v);for(let z=0;z<x.length;z++)kt(x[z],_,v,S);s(p.anchor,_,v);return}if($===vh){T(p,_,v);return}if(S!==2&&N&1&&k)if(S===0)k.beforeEnter(D),s(D,_,v),Dt(()=>k.enter(D),w);else{const{leave:z,delayLeave:K,afterLeave:X}=k,oe=()=>s(D,_,v),ve=()=>{z(D,()=>{oe(),X&&X()})};K?K(D,oe,ve):ve()}else s(D,_,v)},Be=(p,_,v,S=!1,w=!1)=>{const{type:D,props:$,ref:k,children:x,dynamicChildren:N,shapeFlag:H,patchFlag:z,dirs:K}=p;if(k!=null&&Cd(k,null,v,p,!0),H&256){_.ctx.deactivate(p);return}const X=H&1&&K,oe=!Oo(p);let ve;if(oe&&(ve=$&&$.onVnodeBeforeUnmount)&&Rn(ve,_,p),H&6)jt(p.component,v,S);else{if(H&128){p.suspense.unmount(v,S);return}X&&ti(p,null,_,"beforeUnmount"),H&64?p.type.remove(p,_,v,w,W,S):N&&(D!==zt||z>0&&z&64)?Ue(N,_,v,!1,!0):(D===zt&&z&384||!w&&H&16)&&Ue(x,_,v),S&&dn(p)}(oe&&(ve=$&&$.onVnodeUnmounted)||X)&&Dt(()=>{ve&&Rn(ve,_,p),X&&ti(p,null,_,"unmounted")},v)},dn=p=>{const{type:_,el:v,anchor:S,transition:w}=p;if(_===zt){Bt(v,S);return}if(_===vh){b(p);return}const D=()=>{i(v),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:$,delayLeave:k}=w,x=()=>$(v,D);k?k(p.el,D,x):x()}else D()},Bt=(p,_)=>{let v;for(;p!==_;)v=d(p),i(p),p=v;i(_)},jt=(p,_,v)=>{const{bum:S,scope:w,update:D,subTree:$,um:k}=p;S&&xl(S),w.stop(),D&&(D.active=!1,Be($,p,_,v)),k&&Dt(k,_),Dt(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Ue=(p,_,v,S=!1,w=!1,D=0)=>{for(let $=D;$<p.length;$++)Be(p[$],_,v,S,w)},I=p=>p.shapeFlag&6?I(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let U=!1;const L=(p,_,v)=>{p==null?_._vnode&&Be(_._vnode,null,null,!0):m(_._vnode||null,p,_,null,null,null,v),U||(U=!0,Vg(),sT(),U=!1),_._vnode=p},W={p:m,um:Be,m:kt,r:dn,mt:Ut,mc:J,pc:ue,pbc:ae,n:I,o:t};let fe,Se;return e&&([fe,Se]=e(W)),{render:L,hydrate:fe,createApp:K0(L,fe)}}function yh({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ni({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function eR(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function IT(t,e,n=!1){const s=t.children,i=e.children;if(Y(s)&&Y(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=As(i[r]),a.el=o.el),n||IT(o,a)),a.type===nu&&(a.el=o.el)}}function tR(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function AT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:AT(e)}const nR=t=>t.__isTeleport,zt=Symbol.for("v-fgt"),nu=Symbol.for("v-txt"),Us=Symbol.for("v-cmt"),vh=Symbol.for("v-stc"),xo=[];let _n=null;function ts(t=!1){xo.push(_n=t?null:[])}function sR(){xo.pop(),_n=xo[xo.length-1]||null}let Zo=1;function Gg(t){Zo+=t}function bT(t){return t.dynamicChildren=Zo>0?_n||ur:null,sR(),Zo>0&&_n&&_n.push(t),t}function ir(t,e,n,s,i,r){return bT(He(t,e,n,s,i,r,!0))}function np(t,e,n,s,i){return bT(nt(t,e,n,s,i,!0))}function nc(t){return t?t.__v_isVNode===!0:!1}function co(t,e){return t.type===e.type&&t.key===e.key}const su="__vInternal",CT=({key:t})=>t??null,Fl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Xe(t)||Nt(t)||ne(t)?{i:Qe,r:t,k:e,f:!!n}:t:null);function He(t,e=null,n=null,s=0,i=null,r=t===zt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&CT(e),ref:e&&Fl(e),scopeId:eu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Qe};return a?(sp(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Xe(n)?8:16),Zo>0&&!o&&_n&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&_n.push(l),l}const nt=iR;function iR(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===E0)&&(t=Us),nc(t)){const a=Ir(t,e,!0);return n&&sp(a,n),Zo>0&&!r&&_n&&(a.shapeFlag&6?_n[_n.indexOf(t)]=a:_n.push(a)),a.patchFlag|=-2,a}if(_R(t)&&(t=t.__vccOpts),e){e=rR(e);let{class:a,style:l}=e;a&&!Xe(a)&&(e.class=Hf(a)),Pe(l)&&(GE(l)&&!Y(l)&&(l=pt({},l)),e.style=jf(l))}const o=Xe(t)?1:w0(t)?128:nR(t)?64:Pe(t)?4:ne(t)?2:0;return He(t,e,n,s,i,o,r,!0)}function rR(t){return t?GE(t)||su in t?pt({},t):t:null}function Ir(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?oR(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&CT(a),ref:e&&e.ref?n&&i?Y(i)?i.concat(Fl(e)):[i,Fl(e)]:Fl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ir(t.ssContent),ssFallback:t.ssFallback&&Ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Sd(t=" ",e=0){return nt(nu,null,t,e)}function Qg(t="",e=!1){return e?(ts(),np(Us,null,t)):nt(Us,null,t)}function Pn(t){return t==null||typeof t=="boolean"?nt(Us):Y(t)?nt(zt,null,t.slice()):typeof t=="object"?As(t):nt(nu,null,String(t))}function As(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ir(t)}function sp(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),sp(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(su in e)?e._ctx=Qe:i===3&&Qe&&(Qe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Qe},n=32):(e=String(e),s&64?(n=16,e=[Sd(e)]):n=8);t.children=e,t.shapeFlag|=n}function oR(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Hf([e.class,s.class]));else if(i==="style")e.style=jf([e.style,s.style]);else if(Kc(i)){const r=e[i],o=s[i];o&&r!==o&&!(Y(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Rn(t,e,n,s=null){vn(t,e,7,[n,s])}const aR=mT();let lR=0;function cR(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||aR,r={uid:lR++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new DE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vT(s,i),emitsOptions:rT(s,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_0.bind(null,r),t.ce&&t.ce(r),r}let ct=null;const ST=()=>ct||Qe;let sc,Rd;{const t=NE(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};sc=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),Rd=e("__VUE_SSR_SETTERS__",n=>iu=n)}const Pa=t=>{const e=ct;return sc(t),t.scope.on(),()=>{t.scope.off(),sc(e)}},Yg=()=>{ct&&ct.scope.off(),sc(null)};function RT(t){return t.vnode.shapeFlag&4}let iu=!1;function uR(t,e=!1){e&&Rd(e);const{props:n,children:s}=t.vnode,i=RT(t);z0(t,n,i,e),Y0(t,s);const r=i?hR(t,e):void 0;return e&&Rd(!1),r}function hR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=QE(new Proxy(t.ctx,U0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?fR(t):null,r=Pa(t);Mi();const o=ks(s,t,0,[t.props,i]);if(Vi(),r(),SE(o)){if(o.then(Yg,Yg),e)return o.then(a=>{Xg(t,a,e)}).catch(a=>{Jc(a,t,0)});t.asyncDep=o}else Xg(t,o,e)}else PT(t,e)}function Xg(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=eT(e)),PT(t,n)}let Jg;function PT(t,e,n){const s=t.type;if(!t.render){if(!e&&Jg&&!s.render){const i=s.template||ep(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=pt(pt({isCustomElement:r,delimiters:a},o),l);s.render=Jg(i,c)}}t.render=s.render||rn}{const i=Pa(t);Mi();try{$0(t)}finally{Vi(),i()}}}function dR(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ft(t,"get","$attrs"),e[n]}}))}function fR(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return dR(t)},slots:t.slots,emit:t.emit,expose:e}}function ru(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(eT(QE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ko)return ko[n](t)},has(e,n){return n in e||n in ko}}))}function pR(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function _R(t){return ne(t)&&"__vccOpts"in t}const Gt=(t,e)=>a0(t,e,iu);function NT(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!Y(e)?nc(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&nc(n)&&(n=[n]),nt(t,e,n))}const gR="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mR="http://www.w3.org/2000/svg",yR="http://www.w3.org/1998/Math/MathML",bs=typeof document<"u"?document:null,Zg=bs&&bs.createElement("template"),vR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?bs.createElementNS(mR,t):e==="mathml"?bs.createElementNS(yR,t):bs.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>bs.createTextNode(t),createComment:t=>bs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Zg.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=Zg.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ER=Symbol("_vtc");function TR(t,e,n){const s=t[ER];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const em=Symbol("_vod"),wR=Symbol("_vsh"),IR=Symbol(""),AR=/(^|;)\s*display\s*:/;function bR(t,e,n){const s=t.style,i=Xe(n);let r=!1;if(n&&!i){if(e)if(Xe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ul(s,a,"")}else for(const o in e)n[o]==null&&Ul(s,o,"");for(const o in n)o==="display"&&(r=!0),Ul(s,o,n[o])}else if(i){if(e!==n){const o=s[IR];o&&(n+=";"+o),s.cssText=n,r=AR.test(n)}}else e&&t.removeAttribute("style");em in t&&(t[em]=r?s.display:"",t[wR]&&(s.display="none"))}const tm=/\s*!important$/;function Ul(t,e,n){if(Y(n))n.forEach(s=>Ul(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=CR(t,e);tm.test(n)?t.setProperty(Wr(s),n.replace(tm,""),"important"):t[s]=n}}const nm=["Webkit","Moz","ms"],Eh={};function CR(t,e){const n=Eh[e];if(n)return n;let s=Wn(e);if(s!=="filter"&&s in t)return Eh[e]=s;s=Qc(s);for(let i=0;i<nm.length;i++){const r=nm[i]+s;if(r in t)return Eh[e]=r}return e}const sm="http://www.w3.org/1999/xlink";function SR(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(sm,e.slice(6,e.length)):t.setAttributeNS(sm,e,n);else{const r=MS(e);n==null||r&&!OE(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function RR(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=OE(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function oi(t,e,n,s){t.addEventListener(e,n,s)}function PR(t,e,n,s){t.removeEventListener(e,n,s)}const im=Symbol("_vei");function NR(t,e,n,s,i=null){const r=t[im]||(t[im]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=OR(e);if(s){const c=r[e]=xR(s,i);oi(t,a,c,l)}else o&&(PR(t,a,o,l),r[e]=void 0)}}const rm=/(?:Once|Passive|Capture)$/;function OR(t){let e;if(rm.test(t)){e={};let s;for(;s=t.match(rm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wr(t.slice(2)),e]}let Th=0;const kR=Promise.resolve(),DR=()=>Th||(kR.then(()=>Th=0),Th=Date.now());function xR(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;vn(LR(s,n.value),e,5,[s])};return n.value=t,n.attached=DR(),n}function LR(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const om=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,MR=(t,e,n,s,i,r,o,a,l)=>{const c=i==="svg";e==="class"?TR(t,s,c):e==="style"?bR(t,n,s):Kc(e)?Uf(e)||NR(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):VR(t,e,s,c))?RR(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),SR(t,e,s,c))};function VR(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&om(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return om(e)&&Xe(n)?!1:e in t}const ic=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>xl(e,n):e};function FR(t){t.target.composing=!0}function am(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pr=Symbol("_assign"),UR={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[pr]=ic(i);const r=s||i.props&&i.props.type==="number";oi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Qo(a)),t[pr](a)}),n&&oi(t,"change",()=>{t.value=t.value.trim()}),e||(oi(t,"compositionstart",FR),oi(t,"compositionend",am),oi(t,"change",am))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[pr]=ic(r),t.composing)return;const o=i||t.type==="number"?Qo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===a)||(t.value=a))}},eW={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=zc(e);oi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Qo(rc(o)):rc(o));t[pr](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Jf(()=>{t._assigning=!1})}),t[pr]=ic(s)},mounted(t,{value:e,modifiers:{number:n}}){lm(t,e,n)},beforeUpdate(t,e,n){t[pr]=ic(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||lm(t,e,n)}};function lm(t,e,n){const s=t.multiple,i=Y(e);if(!(s&&!i&&!zc(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=rc(a);if(s)if(i){const c=typeof l;c==="string"||c==="number"?a.selected=e.includes(n?Qo(l):l):a.selected=FS(e,l)>-1}else a.selected=e.has(l);else if(Yc(rc(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function rc(t){return"_value"in t?t._value:t.value}const $R=["ctrl","shift","alt","meta"],BR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$R.some(n=>t[`${n}Key`]&&!e.includes(n))},jR=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=BR[e[o]];if(a&&a(i,e))return}return t(i,...r)})},HR=pt({patchProp:MR},vR);let cm;function WR(){return cm||(cm=J0(HR))}const qR=(...t)=>{const e=WR().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=zR(s);if(!i)return;const r=e._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,KR(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function KR(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zR(t){return Xe(t)?document.querySelector(t):t}const GR="data:image/svg+xml,%3csvg%20width='150'%20height='150'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%3e%3ctitle%3eLayer%201%3c/title%3e%3cpath%20id='svg_1'%20d='m74.5,150c-41.43646,0%20-75,-33.56354%20-75,-75c0,-41.43646%2033.56354,-75%2075,-75c41.43646,0%2075,33.56354%2075,75c0,41.43646%20-33.56354,75%20-75,75z'%20opacity='undefined'%20stroke-width='0'%20stroke='%23000'%20fill='%23176d17'/%3e%3cg%20id='svg_3'%3e%3cline%20fill='none'%20stroke='%230a301c'%20x1='68.41866'%20y1='69.44149'%20x2='92.60399'%20y2='48.71121'%20id='svg_27'%20stroke-width='7'/%3e%3cellipse%20fill='%23ffffff'%20stroke='%23000'%20stroke-width='0'%20cx='74.68094'%20cy='93.1648'%20id='svg_4'%20rx='47.07501'%20ry='28.10239'/%3e%3cellipse%20fill='%23ffffff'%20stroke='%23000'%20stroke-width='0'%20cx='113.92039'%20cy='82.25395'%20id='svg_7'%20rx='13.38831'%20ry='13.38831'/%3e%3cellipse%20fill='%23ffffff'%20stroke='%23000'%20stroke-width='0'%20cx='34.08414'%20cy='82.82979'%20id='svg_8'%20rx='13.38831'%20ry='13.38831'/%3e%3cellipse%20fill='%23176d17'%20stroke='%23000'%20stroke-width='0'%20cx='54.59847'%20cy='88.44425'%20id='svg_21'%20rx='6.04633'%20ry='6.04633'/%3e%3cellipse%20fill='%23176d17'%20stroke='%23000'%20stroke-width='0'%20cx='96.9228'%20cy='87.58049'%20id='svg_22'%20rx='6.04633'%20ry='6.04633'/%3e%3cpath%20fill='%23ffffff'%20stroke='%23000'%20stroke-width='0'%20opacity='NaN'%20d='m82.67488,39.55705l6.97172,14.14021l18.63576,-10.91784l-8.98328,-4.80861l-7.04248,6.52385l-3.01255,-9.26577l-6.56917,4.32817l0,-0.00001z'%20id='svg_14'/%3e%3cline%20fill='%23176d17'%20stroke='%23176d17'%20x1='64.61765'%20y1='100.48077'%20x2='85.99189'%20y2='95.7944'%20id='svg_37'%20stroke-width='4'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",QR=["Funny","Mysterious","Annoying","Witful","Big","Crazy","Scary","Small","Lazy"],YR=["Bread","Town","House","Sandwich","Gamer"],um=t=>t[Math.round(Math.random()*(t.length-1))],XR=()=>um(QR)+um(YR)+Math.round(Math.random()*1e4),JR=(t,e,n)=>t.indexOf(n)>-1?!0:e.indexOf(n)>-1?!1:null,tW=(t,e,n,s,i)=>{const r=JR(e,n,i);if(r!==null){const o=r?e:n;o.splice(o.indexOf(i),1),s+=r?-1:1}return t&&t!==r?(e.push(i),s+=1):!t&&t!==r&&(n.push(i),s-=1),{score:s,ups:e,downs:n}};var hm={};/**
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
 */const OT={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const V=function(t,e){if(!t)throw qr(e)},qr=function(t){return new Error("Firebase Database ("+OT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const kT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ZR=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ou={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(kT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ZR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new eP;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DT=function(t){const e=kT(t);return ou.encodeByteArray(e,!0)},oc=function(t){return DT(t).replace(/\./g,"")},ac=function(t){try{return ou.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tP(t){return xT(void 0,t)}function xT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!nP(n)||(t[n]=xT(t[n],e[n]));return t}function nP(t){return t!=="__proto__"}/**
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
 */function LT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sP=()=>LT().__FIREBASE_DEFAULTS__,iP=()=>{if(typeof process>"u"||typeof hm>"u")return;const t=hm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ac(t[1]);return e&&JSON.parse(e)},au=()=>{try{return sP()||iP()||rP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oP=t=>{var e,n;return(n=(e=au())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aP=t=>{const e=oP(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},MT=()=>{var t;return(t=au())===null||t===void 0?void 0:t.config},lP=t=>{var e;return(e=au())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ii{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function cP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[oc(JSON.stringify(n)),oc(JSON.stringify(o)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ip(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function uP(){var t;const e=(t=au())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function VT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dP(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FT(){return OT.NODE_ADMIN===!0}function fP(){return!uP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lu(){try{return typeof indexedDB=="object"}catch{return!1}}function pP(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const _P="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_P,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?gP(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xn(i,a,s)}}function gP(t,e){return t.replace(mP,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const mP=/\{\$([^}]+)}/g;/**
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
 */function ea(t){return JSON.parse(t)}function ut(t){return JSON.stringify(t)}/**
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
 */const UT=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ea(ac(r[0])||""),n=ea(ac(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},yP=function(t){const e=UT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vP=function(t){const e=UT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function gs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ar(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lc(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function cc(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(dm(r)&&dm(o)){if(!cc(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function dm(t){return t!==null&&typeof t=="object"}/**
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
 */function zr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class EP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function TP(t,e){const n=new wP(t,e);return n.subscribe.bind(n)}class wP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");IP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=wh),i.error===void 0&&(i.error=wh),i.complete===void 0&&(i.complete=wh);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wh(){}function AP(t,e){return`${t} failed: ${e} argument `}/**
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
 */const bP=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,V(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cu=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const CP=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const SP=1e3,RP=2,PP=4*60*60*1e3,NP=.5;function OP(t,e=SP,n=RP){const s=e*Math.pow(n,t),i=Math.round(NP*s*(Math.random()-.5)*2);return Math.min(PP,s+i)}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const si="[DEFAULT]";/**
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
 */class kP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ii;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xP(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:DP(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DP(t){return t===si?void 0:t}function xP(t){return t.instantiationMode==="EAGER"}/**
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
 */class LP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const MP={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},VP=le.INFO,FP={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},UP=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=FP[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Na{constructor(e){this.name=e,this._logLevel=VP,this._logHandler=UP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const $P=(t,e)=>e.some(n=>t instanceof n);let fm,pm;function BP(){return fm||(fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jP(){return pm||(pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $T=new WeakMap,Nd=new WeakMap,BT=new WeakMap,Ih=new WeakMap,rp=new WeakMap;function HP(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ds(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$T.set(n,t)}).catch(()=>{}),rp.set(e,t),e}function WP(t){if(Nd.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Nd.set(t,e)}let Od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ds(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qP(t){Od=t(Od)}function KP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ah(this),e,...n);return BT.set(s,e.sort?e.sort():[e]),Ds(s)}:jP().includes(t)?function(...e){return t.apply(Ah(this),e),Ds($T.get(this))}:function(...e){return Ds(t.apply(Ah(this),e))}}function zP(t){return typeof t=="function"?KP(t):(t instanceof IDBTransaction&&WP(t),$P(t,BP())?new Proxy(t,Od):t)}function Ds(t){if(t instanceof IDBRequest)return HP(t);if(Ih.has(t))return Ih.get(t);const e=zP(t);return e!==t&&(Ih.set(t,e),rp.set(e,t)),e}const Ah=t=>rp.get(t);function GP(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Ds(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ds(o.result),l.oldVersion,l.newVersion,Ds(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const QP=["get","getKey","getAll","getAllKeys","count"],YP=["put","add","delete","clear"],bh=new Map;function _m(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bh.get(e))return bh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=YP.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||QP.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return bh.set(e,r),r}qP(t=>({...t,get:(e,n,s)=>_m(e,n)||t.get(e,n,s),has:(e,n)=>!!_m(e,n)||t.has(e,n)}));/**
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
 */class XP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JP(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function JP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kd="@firebase/app",gm="0.9.29";/**
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
 */const Ai=new Na("@firebase/app"),ZP="@firebase/app-compat",eN="@firebase/analytics-compat",tN="@firebase/analytics",nN="@firebase/app-check-compat",sN="@firebase/app-check",iN="@firebase/auth",rN="@firebase/auth-compat",oN="@firebase/database",aN="@firebase/database-compat",lN="@firebase/functions",cN="@firebase/functions-compat",uN="@firebase/installations",hN="@firebase/installations-compat",dN="@firebase/messaging",fN="@firebase/messaging-compat",pN="@firebase/performance",_N="@firebase/performance-compat",gN="@firebase/remote-config",mN="@firebase/remote-config-compat",yN="@firebase/storage",vN="@firebase/storage-compat",EN="@firebase/firestore",TN="@firebase/firestore-compat",wN="firebase",IN="10.9.0";/**
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
 */const Dd="[DEFAULT]",AN={[kd]:"fire-core",[ZP]:"fire-core-compat",[tN]:"fire-analytics",[eN]:"fire-analytics-compat",[sN]:"fire-app-check",[nN]:"fire-app-check-compat",[iN]:"fire-auth",[rN]:"fire-auth-compat",[oN]:"fire-rtdb",[aN]:"fire-rtdb-compat",[lN]:"fire-fn",[cN]:"fire-fn-compat",[uN]:"fire-iid",[hN]:"fire-iid-compat",[dN]:"fire-fcm",[fN]:"fire-fcm-compat",[pN]:"fire-perf",[_N]:"fire-perf-compat",[gN]:"fire-rc",[mN]:"fire-rc-compat",[yN]:"fire-gcs",[vN]:"fire-gcs-compat",[EN]:"fire-fst",[TN]:"fire-fst-compat","fire-js":"fire-js",[wN]:"fire-js-all"};/**
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
 */const uc=new Map,xd=new Map;function bN(t,e){try{t.container.addComponent(e)}catch(n){Ai.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(xd.has(e))return Ai.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,t);for(const n of uc.values())bN(n,t);return!0}function uu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const CN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xs=new Kr("app","Firebase",CN);/**
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
 */class SN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xs.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=IN;function jT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Dd,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xs.create("bad-app-name",{appName:String(i)});if(n||(n=MT()),!n)throw xs.create("no-options");const r=uc.get(i);if(r){if(cc(n,r.options)&&cc(s,r.config))return r;throw xs.create("duplicate-app",{appName:i})}const o=new LP(i);for(const l of xd.values())o.addComponent(l);const a=new SN(n,s,o);return uc.set(i,a),a}function op(t=Dd){const e=uc.get(t);if(!e&&t===Dd&&MT())return jT();if(!e)throw xs.create("no-app",{appName:t});return e}function Yt(t,e,n){var s;let i=(s=AN[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ai.warn(a.join(" "));return}qn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RN="firebase-heartbeat-database",PN=1,ta="firebase-heartbeat-store";let Ch=null;function HT(){return Ch||(Ch=GP(RN,PN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ta)}catch(n){console.warn(n)}}}}).catch(t=>{throw xs.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function NN(t){try{const n=(await HT()).transaction(ta),s=await n.objectStore(ta).get(WT(t));return await n.done,s}catch(e){if(e instanceof Xn)Ai.warn(e.message);else{const n=xs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ai.warn(n.message)}}}async function mm(t,e){try{const s=(await HT()).transaction(ta,"readwrite");await s.objectStore(ta).put(e,WT(t)),await s.done}catch(n){if(n instanceof Xn)Ai.warn(n.message);else{const s=xs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ai.warn(s.message)}}}function WT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ON=1024,kN=30*24*60*60*1e3;class DN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LN(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ym();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ym(),{heartbeatsToSend:s,unsentEntries:i}=xN(this._heartbeatsCache.heartbeats),r=oc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ym(){return new Date().toISOString().substring(0,10)}function xN(t,e=ON){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),vm(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class LN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lu()?pP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vm(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function MN(t){qn(new wn("platform-logger",e=>new XP(e),"PRIVATE")),qn(new wn("heartbeat",e=>new DN(e),"PRIVATE")),Yt(kd,gm,t),Yt(kd,gm,"esm2017"),Yt("fire-js","")}MN("");function ap(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function qT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VN=qT,KT=new Kr("auth","Firebase",qT());/**
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
 */const hc=new Na("@firebase/auth");function FN(t,...e){hc.logLevel<=le.WARN&&hc.warn(`Auth (${Gs}): ${t}`,...e)}function $l(t,...e){hc.logLevel<=le.ERROR&&hc.error(`Auth (${Gs}): ${t}`,...e)}/**
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
 */function Kn(t,...e){throw lp(t,...e)}function Vn(t,...e){return lp(t,...e)}function zT(t,e,n){const s=Object.assign(Object.assign({},VN()),{[e]:n});return new Kr("auth","Firebase",s).create(e,{appName:t.name})}function UN(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Kn(t,"argument-error"),zT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lp(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return KT.create(t,...e)}function ie(t,e,...n){if(!t)throw lp(e,...n)}function ss(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function hs(t,e){t||ss(e)}/**
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
 */function Ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $N(){return Em()==="http:"||Em()==="https:"}function Em(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($N()||hP()||"connection"in navigator)?navigator.onLine:!0}function jN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,hs(n>e,"Short delay should be less than long delay!"),this.isMobile=ip()||VT()}get(){return BN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cp(t,e){hs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class GT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ss("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ss("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ss("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const WN=new Oa(3e4,6e4);function up(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gr(t,e,n,s,i={}){return QT(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=zr(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),GT.fetch()(YT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function QT(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},HN),e);try{const i=new KN(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zT(t,u,c);Kn(t,u)}}catch(i){if(i instanceof Xn)throw i;Kn(t,"network-request-failed",{message:String(i)})}}async function qN(t,e,n,s,i={}){const r=await Gr(t,e,n,s,i);return"mfaPendingCredential"in r&&Kn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function YT(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?cp(t.config,i):`${t.config.apiScheme}://${i}`}class KN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vn(this.auth,"network-request-failed")),WN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Vn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function zN(t,e){return Gr(t,"POST","/v1/accounts:delete",e)}async function GN(t,e){return Gr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QN(t,e=!1){const n=st(t),s=await n.getIdToken(e),i=hp(s);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Lo(Sh(i.auth_time)),issuedAtTime:Lo(Sh(i.iat)),expirationTime:Lo(Sh(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Sh(t){return Number(t)*1e3}function hp(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const i=ac(n);return i?JSON.parse(i):($l("Failed to decode base64 JWT payload"),null)}catch(i){return $l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function YN(t){const e=hp(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function na(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xn&&XN(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function XN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class XT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Lo(this.lastLoginAt),this.creationTime=Lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dc(t){var e;const n=t.auth,s=await t.getIdToken(),i=await na(t,GN(n,{idToken:s}));ie(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?tO(r.providerUserInfo):[],a=eO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new XT(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ZN(t){const e=st(t);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eO(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function tO(t){return t.map(e=>{var{providerId:n}=e,s=ap(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function nO(t,e){const n=await QT(t,{},async()=>{const s=zr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=YT(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",GT.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sO(t,e){return Gr(t,"POST","/v2/accounts:revokeToken",up(t,e))}/**
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
 */class sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await nO(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new sa;return s&&(ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sa,this.toJSON())}_performRefresh(){return ss("not implemented")}}/**
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
 */function Es(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vi{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new XT(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QN(this,e)}reload(){return ZN(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await dc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await na(this,zN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:b,isAnonymous:B,providerData:O,stsTokenManager:q}=n;ie(T&&q,e,"internal-error");const J=sa.fromJSON(this.name,q);ie(typeof T=="string",e,"internal-error"),Es(h,e.name),Es(d,e.name),ie(typeof b=="boolean",e,"internal-error"),ie(typeof B=="boolean",e,"internal-error"),Es(f,e.name),Es(g,e.name),Es(m,e.name),Es(y,e.name),Es(E,e.name),Es(C,e.name);const de=new vi({uid:T,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:B,photoURL:g,phoneNumber:f,tenantId:m,stsTokenManager:J,createdAt:E,lastLoginAt:C});return O&&Array.isArray(O)&&(de.providerData=O.map(ae=>Object.assign({},ae))),y&&(de._redirectEventId=y),de}static async _fromIdTokenResponse(e,n,s=!1){const i=new sa;i.updateFromServerResponse(n);const r=new vi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await dc(r),r}}/**
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
 */const Tm=new Map;function is(t){hs(t instanceof Function,"Expected a class definition");let e=Tm.get(t);return e?(hs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tm.set(t,e),e)}/**
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
 */class JT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}JT.type="NONE";const wm=JT;/**
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
 */function Bl(t,e,n){return`firebase:${t}:${e}:${n}`}class _r{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Bl(this.userKey,i.apiKey,r),this.fullPersistenceKey=Bl("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _r(is(wm),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||is(wm);const o=Bl(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=vi._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new _r(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new _r(r,e,s))}}/**
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
 */function Im(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ZT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sw(e))return"Blackberry";if(iw(e))return"Webos";if(dp(e))return"Safari";if((e.includes("chrome/")||ew(e))&&!e.includes("edge/"))return"Chrome";if(nw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ZT(t=ze()){return/firefox\//i.test(t)}function dp(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ew(t=ze()){return/crios\//i.test(t)}function tw(t=ze()){return/iemobile/i.test(t)}function nw(t=ze()){return/android/i.test(t)}function sw(t=ze()){return/blackberry/i.test(t)}function iw(t=ze()){return/webos/i.test(t)}function hu(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iO(t=ze()){var e;return hu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rO(){return dP()&&document.documentMode===10}function rw(t=ze()){return hu(t)||nw(t)||iw(t)||sw(t)||/windows phone/i.test(t)||tw(t)}function oO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ow(t,e=[]){let n;switch(t){case"Browser":n=Im(ze());break;case"Worker":n=`${Im(ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${s}`}/**
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
 */class aO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function lO(t,e={}){return Gr(t,"GET","/v2/passwordPolicy",up(t,e))}/**
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
 */const cO=6;class uO{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class hO{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Am(this),this.idTokenSubscription=new Am(this),this.beforeStateQueue=new aO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=is(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await _r.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(is(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lO(this),n=new uO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await sO(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&is(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[is(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ow(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function fp(t){return st(t)}class Am{constructor(e){this.auth=e,this.observer=null,this.addObserver=TP(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dO(t){pp=t}function fO(t){return pp.loadJS(t)}function pO(){return pp.gapiScript}function _O(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function gO(t,e){const n=uu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(cc(r,e??{}))return i;Kn(i,"already-initialized")}return n.initialize({options:e})}function mO(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(is);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class aw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ss("not implemented")}_getIdTokenResponse(e){return ss("not implemented")}_linkToIdToken(e,n){return ss("not implemented")}_getReauthenticationResolver(e){return ss("not implemented")}}/**
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
 */async function gr(t,e){return qN(t,"POST","/v1/accounts:signInWithIdp",up(t,e))}/**
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
 */const yO="http://localhost";class bi extends aw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ap(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new bi(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gr(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gr(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gr(e,n)}buildRequest(){const e={requestUri:yO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zr(n)}return e}}/**
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
 */class _p{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ka extends _p{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ss extends ka{constructor(){super("facebook.com")}static credential(e){return bi._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";/**
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
 */class ns extends ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bi._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.GOOGLE_SIGN_IN_METHOD="google.com";ns.PROVIDER_ID="google.com";/**
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
 */class Rs extends ka{constructor(){super("github.com")}static credential(e){return bi._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rs.credential(e.oauthAccessToken)}catch{return null}}}Rs.GITHUB_SIGN_IN_METHOD="github.com";Rs.PROVIDER_ID="github.com";/**
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
 */class Ps extends ka{constructor(){super("twitter.com")}static credential(e,n){return bi._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ps.credential(n,s)}catch{return null}}}Ps.TWITTER_SIGN_IN_METHOD="twitter.com";Ps.PROVIDER_ID="twitter.com";/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await vi._fromIdTokenResponse(e,s,i),o=bm(s);return new br({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=bm(s);return new br({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function bm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class fc extends Xn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new fc(e,n,s,i)}}function lw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(t,r,e,s):r})}async function vO(t,e,n=!1){const s=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",s)}/**
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
 */async function EO(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await na(t,lw(s,i,e,t),n);ie(r.idToken,s,"internal-error");const o=hp(r.idToken);ie(o,s,"internal-error");const{sub:a}=o;return ie(t.uid===a,s,"user-mismatch"),br._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Kn(s,"user-mismatch"),r}}/**
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
 */async function TO(t,e,n=!1){const s="signIn",i=await lw(t,s,e),r=await br._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function wO(t,e,n,s){return st(t).onIdTokenChanged(e,n,s)}function IO(t){return st(t).signOut()}const pc="__sak";/**
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
 */class cw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function AO(){const t=ze();return dp(t)||hu(t)}const bO=1e3,CO=10;class uw extends cw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=AO()&&oO(),this.fallbackToPolling=rw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);rO()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CO):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},bO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uw.type="LOCAL";const SO=uw;/**
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
 */class hw extends cw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hw.type="SESSION";const dw=hw;/**
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
 */function RO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new du(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await RO(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}du.receivers=[];/**
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
 */function gp(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=gp("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Fn(){return window}function NO(t){Fn().location.href=t}/**
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
 */function fw(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function OO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DO(){return fw()?self:null}/**
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
 */const pw="firebaseLocalStorageDb",xO=1,_c="firebaseLocalStorage",_w="fbase_key";class Da{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fu(t,e){return t.transaction([_c],e?"readwrite":"readonly").objectStore(_c)}function LO(){const t=indexedDB.deleteDatabase(pw);return new Da(t).toPromise()}function Md(){const t=indexedDB.open(pw,xO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(_c,{keyPath:_w})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(_c)?e(s):(s.close(),await LO(),e(await Md()))})})}async function Cm(t,e,n){const s=fu(t,!0).put({[_w]:e,value:n});return new Da(s).toPromise()}async function MO(t,e){const n=fu(t,!1).get(e),s=await new Da(n).toPromise();return s===void 0?null:s.value}function Sm(t,e){const n=fu(t,!0).delete(e);return new Da(n).toPromise()}const VO=800,FO=3;class gw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>FO)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=du._getInstance(DO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OO(),!this.activeServiceWorker)return;this.sender=new PO(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Md();return await Cm(e,pc,"1"),await Sm(e,pc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Cm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>MO(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fu(i,!1).getAll();return new Da(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gw.type="LOCAL";const UO=gw;new Oa(3e4,6e4);/**
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
 */function mw(t,e){return e?is(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mp extends aw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $O(t){return TO(t.auth,new mp(t),t.bypassAuthState)}function BO(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),EO(n,new mp(t),t.bypassAuthState)}async function jO(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),vO(n,new mp(t),t.bypassAuthState)}/**
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
 */class yw{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $O;case"linkViaPopup":case"linkViaRedirect":return jO;case"reauthViaPopup":case"reauthViaRedirect":return BO;default:Kn(this.auth,"internal-error")}}resolve(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const HO=new Oa(2e3,1e4);async function WO(t,e,n){const s=fp(t);UN(t,e,_p);const i=mw(s,n);return new ci(s,"signInViaPopup",e,i).executeNotNull()}class ci extends yw{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){hs(this.filter.length===1,"Popup operations only handle one event");const e=gp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HO.get())};e()}}ci.currentPopupAction=null;/**
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
 */const qO="pendingRedirect",jl=new Map;class KO extends yw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=jl.get(this.auth._key());if(!e){try{const s=await zO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}jl.set(this.auth._key(),e)}return this.bypassAuthState||jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zO(t,e){const n=YO(e),s=QO(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function GO(t,e){jl.set(t._key(),e)}function QO(t){return is(t._redirectPersistence)}function YO(t){return Bl(qO,t.config.apiKey,t.name)}async function XO(t,e,n=!1){const s=fp(t),i=mw(s,e),o=await new KO(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const JO=10*60*1e3;class ZO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!vw(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rm(e))}saveEventToCache(e){this.cachedEventUids.add(Rm(e)),this.lastProcessedEventTime=Date.now()}}function Rm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vw(t);default:return!1}}/**
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
 */async function tk(t,e={}){return Gr(t,"GET","/v1/projects",e)}/**
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
 */const nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sk=/^https?/;async function ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tk(t);for(const n of e)try{if(rk(n))return}catch{}Kn(t,"unauthorized-domain")}function rk(t){const e=Ld(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sk.test(n))return!1;if(nk.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const ok=new Oa(3e4,6e4);function Pm(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ak(t){return new Promise((e,n)=>{var s,i,r;function o(){Pm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pm(),n(Vn(t,"network-request-failed"))},timeout:ok.get()})}if(!((i=(s=Fn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Fn().gapi)===null||r===void 0)&&r.load)o();else{const a=_O("iframefcb");return Fn()[a]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},fO(`${pO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function lk(t){return Hl=Hl||ak(t),Hl}/**
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
 */const ck=new Oa(5e3,15e3),uk="__/auth/iframe",hk="emulator/auth/iframe",dk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pk(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cp(e,hk):`https://${t.config.authDomain}/${uk}`,s={apiKey:e.apiKey,appName:t.name,v:Gs},i=fk.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${zr(s).slice(1)}`}async function _k(t){const e=await lk(t),n=Fn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:pk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dk,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),a=Fn().setTimeout(()=>{r(o)},ck.get());function l(){Fn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const gk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mk=500,yk=600,vk="_blank",Ek="http://localhost";class Nm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tk(t,e,n,s=mk,i=yk){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gk),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ze().toLowerCase();n&&(a=ew(c)?vk:n),ZT(c)&&(e=e||Ek,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(iO(c)&&a!=="_self")return wk(e||"",a),new Nm(null);const h=window.open(e||"",a,u);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new Nm(h)}function wk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ik="__/auth/handler",Ak="emulator/auth/handler",bk=encodeURIComponent("fac");async function Om(t,e,n,s,i,r){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gs,eventId:i};if(e instanceof _p){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof ka){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${bk}=${encodeURIComponent(l)}`:"";return`${Ck(t)}?${zr(a).slice(1)}${c}`}function Ck({config:t}){return t.emulator?cp(t,Ak):`https://${t.authDomain}/${Ik}`}/**
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
 */const Rh="webStorageSupport";class Sk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dw,this._completeRedirectFn=XO,this._overrideRedirectResult=GO}async _openPopup(e,n,s,i){var r;hs((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Om(e,n,s,Ld(),i);return Tk(e,o,gp())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Om(e,n,s,Ld(),i);return NO(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(hs(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _k(e),s=new ZO(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rh,{type:Rh},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Rh];o!==void 0&&n(!!o),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rw()||dp()||hu()}}const Rk=Sk;var km="@firebase/auth",Dm="1.6.2";/**
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
 */class Pk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ok(t){qn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ow(t)},c=new hO(s,i,r,l);return mO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qn(new wn("auth-internal",e=>{const n=fp(e.getProvider("auth").getImmediate());return(s=>new Pk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(km,Dm,Nk(t)),Yt(km,Dm,"esm2017")}/**
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
 */const kk=5*60;lP("authIdTokenMaxAge");function Dk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dO({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Vn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Dk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ok("Browser");/**
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
 */const Vd=new Map,Ew={activated:!1,tokenObservers:[]},xk={initialized:!1,enabled:!1};function Ye(t){return Vd.get(t)||Object.assign({},Ew)}function Lk(t,e){return Vd.set(t,e),Vd.get(t)}function pu(){return xk}/**
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
 */const Tw="https://content-firebaseappcheck.googleapis.com/v1",Mk="exchangeRecaptchaV3Token",Vk="exchangeDebugToken",xm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},Fk=24*60*60*1e3;/**
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
 */class Uk{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ii,this.pending.promise.catch(n=>{}),await $k(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ii,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function $k(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const Bk={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Mt=new Kr("appCheck","AppCheck",Bk);/**
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
 */function Lm(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function yp(t){if(!Ye(t).activated)throw Mt.create("use-before-activation",{appName:t.name})}function ww(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),s=Math.floor((e-n*3600*24)/3600),i=Math.floor((e-n*3600*24-s*3600)/60),r=e-n*3600*24-s*3600-i*60;let o="";return n&&(o+=dl(n)+"d:"),s&&(o+=dl(s)+"h:"),o+=dl(i)+"m:"+dl(r)+"s",o}function dl(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function vp({url:t,body:e},n){const s={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&(s["X-Firebase-Client"]=h)}const r={method:"POST",body:JSON.stringify(e),headers:s};let o;try{o=await fetch(t,r)}catch(h){throw Mt.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw Mt.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw Mt.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw Mt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function jk(t,e){const{projectId:n,appId:s,apiKey:i}=t.options;return{url:`${Tw}/projects/${n}/apps/${s}:${Mk}?key=${i}`,body:{recaptcha_v3_token:e}}}function Iw(t,e){const{projectId:n,appId:s,apiKey:i}=t.options;return{url:`${Tw}/projects/${n}/apps/${s}:${Vk}?key=${i}`,body:{debug_token:e}}}/**
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
 */const Hk="firebase-app-check-database",Wk=1,ia="firebase-app-check-store",Aw="debug-token";let fl=null;function bw(){return fl||(fl=new Promise((t,e)=>{try{const n=indexedDB.open(Hk,Wk);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Mt.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(ia,{keyPath:"compositeKey"})}}}catch(n){e(Mt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),fl)}function qk(t){return Sw(Rw(t))}function Kk(t,e){return Cw(Rw(t),e)}function zk(t){return Cw(Aw,t)}function Gk(){return Sw(Aw)}async function Cw(t,e){const s=(await bw()).transaction(ia,"readwrite"),r=s.objectStore(ia).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Mt.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function Sw(t){const n=(await bw()).transaction(ia,"readonly"),i=n.objectStore(ia).get(t);return new Promise((r,o)=>{i.onsuccess=a=>{const l=a.target.result;r(l?l.value:void 0)},n.onerror=a=>{var l;o(Mt.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function Rw(t){return`${t.options.appId}-${t.name}`}/**
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
 */const ra=new Na("@firebase/app-check");/**
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
 */async function Qk(t){if(lu()){let e;try{e=await qk(t)}catch(n){ra.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Ph(t,e){return lu()?Kk(t,e).catch(n=>{ra.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Yk(){let t;try{t=await Gk()}catch{}if(t)return t;{const e=CP();return zk(e).catch(n=>ra.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function Ep(){return pu().enabled}async function Tp(){const t=pu();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Xk(){const t=LT(),e=pu();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Ii;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Yk())}/**
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
 */const Jk={error:"UNKNOWN_ERROR"};function Zk(t){return ou.encodeString(JSON.stringify(t),!1)}async function Fd(t,e=!1){const n=t.app;yp(n);const s=Ye(n);let i=s.token,r;if(i&&!rr(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(rr(l)?i=l:await Ph(n,void 0))}if(!e&&i&&rr(i))return{token:i.token};let o=!1;if(Ep()){s.exchangeTokenPromise||(s.exchangeTokenPromise=vp(Iw(n,await Tp()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),o=!0);const l=await s.exchangeTokenPromise;return await Ph(n,l),s.token=l,{token:l.token}}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Ye(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?ra.warn(l.message):ra.error(l),r=l}let a;return i?r?rr(i)?a={token:i.token,internalError:r}:a=Vm(r):(a={token:i.token},s.token=i,await Ph(n,i)):a=Vm(r),o&&Pw(n,a),a}async function eD(t){const e=t.app;yp(e);const{provider:n}=Ye(e);if(Ep()){const s=await Tp(),{token:i}=await vp(Iw(e,s),t.heartbeatServiceProvider);return{token:i}}else{const{token:s}=await n.getToken();return{token:s}}}function wp(t,e,n,s){const{app:i}=t,r=Ye(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&rr(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Mm(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Mm(t))}function Ip(t,e){const n=Ye(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Mm(t){const{app:e}=t,n=Ye(e);let s=n.tokenRefresher;s||(s=tD(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function tD(t){const{app:e}=t;return new Uk(async()=>{const n=Ye(e);let s;if(n.token?s=await Fd(t,!0):s=await Fd(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Ye(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},xm.RETRIAL_MIN_WAIT,xm.RETRIAL_MAX_WAIT)}function Pw(t,e){const n=Ye(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function rr(t){return t.expireTimeMillis-Date.now()>0}function Vm(t){return{token:Zk(Jk),error:t}}/**
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
 */class nD{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Ye(this.app);for(const n of e)Ip(this.app,n.next);return Promise.resolve()}}function sD(t,e){return new nD(t,e)}function iD(t){return{getToken:e=>Fd(t,e),getLimitedUseToken:()=>eD(t),addTokenListener:e=>wp(t,"INTERNAL",e),removeTokenListener:e=>Ip(t.app,e)}}const rD="@firebase/app-check",oD="0.8.2";/**
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
 */const aD="https://www.google.com/recaptcha/api.js";function lD(t,e){const n=new Ii,s=Ye(t);s.reCAPTCHAState={initialized:n};const i=cD(t),r=Lm(!1);return r?Fm(t,e,r,i,n):dD(()=>{const o=Lm(!1);if(!o)throw new Error("no recaptcha");Fm(t,e,o,i,n)}),n.promise}function Fm(t,e,n,s,i){n.ready(()=>{hD(t,e,n,s),i.resolve(n)})}function cD(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function uD(t){yp(t);const n=await Ye(t).reCAPTCHAState.initialized.promise;return new Promise((s,i)=>{const r=Ye(t).reCAPTCHAState;n.ready(()=>{s(n.execute(r.widgetId,{action:"fire_app_check"}))})})}function hD(t,e,n,s){const i=n.render(s,{sitekey:e,size:"invisible",callback:()=>{Ye(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Ye(t).reCAPTCHAState.succeeded=!1}}),r=Ye(t);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:i})}function dD(t){const e=document.createElement("script");e.src=aD,e.onload=t,document.head.appendChild(e)}/**
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
 */class Ap{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,s;pD(this._throttleData);const i=await uD(this._app).catch(o=>{throw Mt.create("recaptcha-error")});if(!(!((e=Ye(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Mt.create("recaptcha-error");let r;try{r=await vp(jk(this._app,i),this._heartbeatServiceProvider)}catch(o){throw!((n=o.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=fD(Number((s=o.customData)===null||s===void 0?void 0:s.httpStatus),this._throttleData),Mt.create("throttled",{time:ww(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):o}return this._throttleData=null,r}initialize(e){this._app=e,this._heartbeatServiceProvider=uu(e,"heartbeat"),lD(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Ap?this._siteKey===e._siteKey:!1}}function fD(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+Fk,httpStatus:t};{const n=e?e.backoffCount:0,s=OP(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:t}}}function pD(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw Mt.create("throttled",{time:ww(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function _D(t=op(),e){t=st(t);const n=uu(t,"app-check");if(pu().initialized||Xk(),Ep()&&Tp().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&r.provider.isEqual(e.provider))return i;throw Mt.create("already-initialized",{appName:t.name})}const s=n.initialize({options:e});return gD(t,e.provider,e.isTokenAutoRefreshEnabled),Ye(t).isTokenAutoRefreshEnabled&&wp(s,"INTERNAL",()=>{}),s}function gD(t,e,n){const s=Lk(t,Object.assign({},Ew));s.activated=!0,s.provider=e,s.cachedTokenPromise=Qk(t).then(i=>(i&&rr(i)&&(s.token=i,Pw(t,{token:i.token})),i)),s.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,s.provider.initialize(t)}function mD(t,e,n,s){let i=()=>{},r=()=>{};return e.next!=null?i=e.next.bind(e):i=e,e.error!=null?r=e.error.bind(e):n&&(r=n),wp(t,"EXTERNAL",i,r),()=>Ip(t.app,i)}const yD="app-check",Um="app-check-internal";function vD(){qn(new wn(yD,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return sD(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Um).initialize()})),qn(new wn(Um,t=>{const e=t.getProvider("app-check").getImmediate();return iD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Yt(rD,oD)}vD();var ED="firebase",TD="10.9.0";/**
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
 */Yt(ED,TD,"app");const Nw=Symbol("firebaseApp");function _u(t){return ST()&&Vt(Nw,null)||op(t)}const kn=()=>{},Ow=typeof window<"u";function bp(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function wD(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Fi(t){return!!t&&typeof t=="object"}const ID=Object.prototype;function AD(t){return Fi(t)&&Object.getPrototypeOf(t)===ID}function Cp(t){return Fi(t)&&t.type==="document"}function bD(t){return Fi(t)&&t.type==="collection"}function CD(t){return Cp(t)||bD(t)}function SD(t){return Fi(t)&&t.type==="query"}function RD(t){return Fi(t)&&"ref"in t}function PD(t){return Fi(t)&&typeof t.bucket=="string"}function ND(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const OD=Symbol.for("v-scx");function kD(){return!!Vt(OD,0)}const pl=new WeakMap;function kw(t,e){if(!pl.has(t)){const n=US(!0);pl.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),pl.delete(t)}}return pl.get(t)}const Dw=new WeakMap;function DD(t){return Dw.get(_u(t))}const _l=new WeakMap;function xD(t){const e=_u(t);if(!_l.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{_l.set(e,r),n(r.value)}];_l.set(e,i)}return _l.get(e)}function LD(t,e){wO(e,n=>{const s=xD();t.value=n,Array.isArray(s)&&s[1](t)})}const MD=Symbol("app-check-token");function VD(t){return(e,n)=>{if(!Ow)return;const s=kw(e,n).run(()=>yn());n.provide(MD,s),t.debug&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=t.debug);const i=_D(e,t);mD(i,r=>{s.value=r.token}),FD.set(e,i)}}const FD=new WeakMap;var $m={};const Bm="@firebase/database",jm="1.0.3";/**
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
 */let xw="";function UD(t){xw=t}/**
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
 */class $D{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ut(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ea(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class BD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Lw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new $D(e)}}catch{}return new BD},ui=Lw("localStorage"),Ud=Lw("sessionStorage");/**
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
 */const mr=new Na("@firebase/database"),jD=function(){let t=1;return function(){return t++}}(),Mw=function(t){const e=bP(t),n=new EP;n.update(e);const s=n.digest();return ou.encodeByteArray(s)},xa=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xa.apply(null,s):typeof s=="object"?e+=ut(s):e+=s,e+=" "}return e};let Ei=null,Hm=!0;const HD=function(t,e){V(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(mr.logLevel=le.VERBOSE,Ei=mr.log.bind(mr),e&&Ud.set("logging_enabled",!0)):typeof t=="function"?Ei=t:(Ei=null,Ud.remove("logging_enabled"))},mt=function(...t){if(Hm===!0&&(Hm=!1,Ei===null&&Ud.get("logging_enabled")===!0&&HD(!0)),Ei){const e=xa.apply(null,t);Ei(e)}},La=function(t){return function(...e){mt(t,...e)}},$d=function(...t){const e="FIREBASE INTERNAL ERROR: "+xa(...t);mr.error(e)},Ci=function(...t){const e=`FIREBASE FATAL ERROR: ${xa(...t)}`;throw mr.error(e),new Error(e)},Xt=function(...t){const e="FIREBASE WARNING: "+xa(...t);mr.warn(e)},WD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cr="[MIN_NAME]",Si="[MAX_NAME]",Qr=function(t,e){if(t===e)return 0;if(t===Cr||e===Si)return-1;if(e===Cr||t===Si)return 1;{const n=Wm(t),s=Wm(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},KD=function(t,e){return t===e?0:t<e?-1:1},uo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ut(e))},Sp=function(t){if(typeof t!="object"||t===null)return ut(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ut(e[s]),n+=":",n+=Sp(t[e[s]]);return n+="}",n},Fw=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Uw=function(t){V(!Vw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},zD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},QD=new RegExp("^-?(0*)\\d{1,10}$"),YD=-2147483648,XD=2147483647,Wm=function(t){if(QD.test(t)){const e=Number(t);if(e>=YD&&e<=XD)return e}return null},Ma=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xt("Exception was thrown by user callback.",n),e},Math.floor(0))}},JD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ZD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Xt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ex{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xt(e)}}class Bd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bd.OWNER="owner";/**
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
 */const Rp="5",$w="v",Bw="s",jw="r",Hw="f",Ww=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qw="ls",Kw="p",jd="ac",zw="websocket",Gw="long_polling";/**
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
 */class tx{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ui.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Qw(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let s;if(e===zw)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Gw)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nx(t)&&(n.ns=t.namespace);const i=[];return ln(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class sx{constructor(){this.counters_={}}incrementCounter(e,n=1){gs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tP(this.counters_)}}/**
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
 */const Nh={},Oh={};function Pp(t){const e=t.toString();return Nh[e]||(Nh[e]=new sx),Nh[e]}function ix(t,e){const n=t.toString();return Oh[n]||(Oh[n]=e()),Oh[n]}/**
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
 */class rx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ma(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qm="start",ox="close",ax="pLPCommand",lx="pRTLPCB",Yw="id",Xw="pw",Jw="ser",cx="cb",ux="seg",hx="ts",dx="d",fx="dframe",Zw=1870,eI=30,px=Zw-eI,_x=25e3,gx=3e4;class or{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=La(e),this.stats_=Pp(n),this.urlFn=l=>(this.appCheckToken&&(l[jd]=this.appCheckToken),Qw(n,Gw,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gx)),qD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Np((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qm)this.id=a,this.password=l;else if(o===ox)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[qm]="t",s[Jw]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cx]=this.scriptTagHolder.uniqueCallbackIdentifier),s[$w]=Rp,this.transportSessionId&&(s[Bw]=this.transportSessionId),this.lastSessionId&&(s[qw]=this.lastSessionId),this.applicationId&&(s[Kw]=this.applicationId),this.appCheckToken&&(s[jd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ww.test(location.hostname)&&(s[jw]=Hw);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){or.forceAllow_=!0}static forceDisallow(){or.forceDisallow_=!0}static isAvailable(){return or.forceAllow_?!0:!or.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zD()&&!GD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=DT(n),i=Fw(s,px);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fx]="t",s[Yw]=e,s[Xw]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ut(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Np{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jD(),window[ax+this.uniqueCallbackIdentifier]=e,window[lx+this.uniqueCallbackIdentifier]=n,this.myIFrame=Np.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yw]=this.myID,e[Xw]=this.myPW,e[Jw]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eI+s.length<=Zw;){const o=this.pendingSegs.shift();s=s+"&"+ux+i+"="+o.seg+"&"+hx+i+"="+o.ts+"&"+dx+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(_x)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const mx=16384,yx=45e3;let gc=null;typeof MozWebSocket<"u"?gc=MozWebSocket:typeof WebSocket<"u"&&(gc=WebSocket);class pn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=La(this.connId),this.stats_=Pp(n),this.connURL=pn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[$w]=Rp,typeof location<"u"&&location.hostname&&Ww.test(location.hostname)&&(o[jw]=Hw),n&&(o[Bw]=n),s&&(o[qw]=s),i&&(o[jd]=i),r&&(o[Kw]=r),Qw(e,zw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ui.set("previous_websocket_failure",!0);try{let s;FT(),this.mySock=new gc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&gc!==null&&!pn.forceDisallow_}static previouslyFailed(){return ui.isInMemoryStorage||ui.get("previous_websocket_failure")===!0}markConnectionHealthy(){ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ea(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ut(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Fw(n,mx);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(yx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pn.responsesRequiredToBeHealthy=2;pn.healthyTimeout=3e4;/**
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
 */class oa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[or,pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pn&&pn.isAvailable();let s=n&&!pn.previouslyFailed();if(e.webSocketOnly&&(n||Xt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[pn];else{const i=this.transports_=[];for(const r of oa.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);oa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}oa.globalTransportInitialized_=!1;/**
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
 */const vx=6e4,Ex=5e3,Tx=10*1024,wx=100*1024,kh="t",Km="d",Ix="s",zm="r",Ax="e",Gm="o",Qm="a",Ym="n",Xm="p",bx="h";class Cx{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=La("c:"+this.id+":"),this.transportManager_=new oa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>wx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Tx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(kh in e){const n=e[kh];n===Qm?this.upgradeIfSecondaryHealthy_():n===zm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=uo("t",e),s=uo("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ym,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=uo("t",e),s=uo("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=uo(kh,e);if(Km in e){const s=e[Km];if(n===bx){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ym){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ix?this.onConnectionShutdown_(s):n===zm?this.onReset_(s):n===Ax?$d("Server Error: "+s):n===Gm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$d("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rp!==s&&Xt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(vx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ex))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class tI{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class nI{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class mc extends nI{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ip()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new mc}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Jm=32,Zm=768;class Me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function be(){return new Me("")}function _e(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function $s(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Me(t.pieces_,e)}function sI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Sx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function iI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Me(e,0)}function tt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Me)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Me(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function on(t,e){const n=_e(t),s=_e(e);if(n===null)return e;if(n===s)return on(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oI(t,e){if($s(t)!==$s(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if($s(t)>$s(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Rx{constructor(e,n){this.errorPrefix_=n,this.parts_=iI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=cu(this.parts_[s]);aI(this)}}function Px(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cu(e),aI(t)}function Nx(t){const e=t.parts_.pop();t.byteLength_-=cu(e),t.parts_.length>0&&(t.byteLength_-=1)}function aI(t){if(t.byteLength_>Zm)throw new Error(t.errorPrefix_+"has a key path longer than "+Zm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jm+") or object contains a cycle "+ii(t))}function ii(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Op extends nI{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Op}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ho=1e3,Ox=60*5*1e3,ey=30*1e3,kx=1.3,Dx=3e4,xx="server_kill",ty=3;class ls extends tI{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ls.nextPersistentConnectionId_++,this.log_=La("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ho,this.maxReconnectDelay_=Ox,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!FT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Op.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ut(r)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ii,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ls.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gs(e,"w")){const s=Ar(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Xt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ey)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yP(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ut(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$d("Unrecognized action received from server: "+ut(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Dx&&(this.reconnectDelay_=ho),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ls.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Cx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Xt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(xx)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Xt(h),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pd(this.interruptReasons_)&&(this.reconnectDelay_=ho,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Sp(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Me(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ty&&(this.reconnectDelay_=ey,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ty&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xw.replace(/\./g,"-")]=1,ip()?e["framework.cordova"]=1:VT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mc.getInstance().currentlyOnline();return Pd(this.interruptReasons_)&&e}}ls.nextPersistentConnectionId_=0;ls.nextConnectionId_=0;/**
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
 */class ge{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ge(e,n)}}/**
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
 */class gu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ge(Cr,e),i=new ge(Cr,n);return this.compare(s,i)!==0}minPost(){return ge.MIN}}/**
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
 */let gl;class lI extends gu{static get __EMPTY_NODE(){return gl}static set __EMPTY_NODE(e){gl=e}compare(e,n){return Qr(e.name,n.name)}isDefinedOn(e){throw qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ge.MIN}maxPost(){return new ge(Si,gl)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new ge(e,gl)}toString(){return".key"}}const yr=new lI;/**
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
 */let ml=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},qt=class Io{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Io.RED,this.left=i??Dn.EMPTY_NODE,this.right=r??Dn.EMPTY_NODE}copy(e,n,s,i,r){return new Io(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Dn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Io.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Io.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};qt.RED=!0;qt.BLACK=!1;class Lx{copy(e,n,s,i,r){return this}insert(e,n,s){return new qt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Dn=class Wl{constructor(e,n=Wl.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wl(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(e){return new Wl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ml(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ml(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ml(this.root_,null,this.comparator_,!0,e)}};Dn.EMPTY_NODE=new Lx;/**
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
 */function Mx(t,e){return Qr(t.name,e.name)}function kp(t,e){return Qr(t,e)}/**
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
 */let Hd;function Vx(t){Hd=t}const cI=function(t){return typeof t=="number"?"number:"+Uw(t):"string:"+t},uI=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gs(e,".sv"),"Priority must be a string or number.")}else V(t===Hd||t.isEmpty(),"priority of unexpected type.");V(t===Hd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ny;class Ze{constructor(e,n=Ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uI(this.priorityNode_)}static set __childrenNodeConstructor(e){ny=e}static get __childrenNodeConstructor(){return ny}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:_e(e)===".priority"?this.priorityNode_:Ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=_e(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(V(s!==".priority"||$s(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+cI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Uw(this.value_):e+=this.value_,this.lazyHash_=Mw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ze.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ze.VALUE_TYPE_ORDER.indexOf(n),r=Ze.VALUE_TYPE_ORDER.indexOf(s);return V(i>=0,"Unknown leaf type: "+n),V(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let hI,dI;function Fx(t){hI=t}function Ux(t){dI=t}class $x extends gu{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Qr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ge.MIN}maxPost(){return new ge(Si,new Ze("[PRIORITY-POST]",dI))}makePost(e,n){const s=hI(e);return new ge(n,new Ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const Tt=new $x;/**
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
 */const Bx=Math.log(2);class jx{constructor(e){const n=r=>parseInt(Math.log(r)/Bx,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yc=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new qt(d,h.node,qt.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=i(l,f),m=i(f+1,c);return h=t[f],d=n?n(h):h,new qt(d,h.node,qt.BLACK,g,m)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,m){const y=h-g,E=h;h-=g;const C=i(y+1,E),T=t[y],b=n?n(T):T;f(new qt(b,T.node,m,null,C))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(g+1));m?d(y,qt.BLACK):(d(y,qt.BLACK),d(y,qt.RED))}return u},o=new jx(t.length),a=r(o);return new Dn(s||e,a)};/**
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
 */let Dh;const zi={};class rs{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(zi&&Tt,"ChildrenNode.ts has not been loaded"),Dh=Dh||new rs({".priority":zi},{".priority":Tt}),Dh}get(e){const n=Ar(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dn?n:null}hasIndex(e){return gs(this.indexSet_,e.toString())}addIndex(e,n){V(e!==yr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ge.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=yc(s,e.getCompare()):a=zi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new rs(u,c)}addToIndexes(e,n){const s=lc(this.indexes_,(i,r)=>{const o=Ar(this.indexSet_,r);if(V(o,"Missing index implementation for "+r),i===zi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ge.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yc(a,o.getCompare())}else return zi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ge(e.name,a))),l.insert(e,e.node)}});return new rs(s,this.indexSet_)}removeFromIndexes(e,n){const s=lc(this.indexes_,i=>{if(i===zi)return i;{const r=n.get(e.name);return r?i.remove(new ge(e.name,r)):i}});return new rs(s,this.indexSet_)}}/**
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
 */let fo;class we{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&uI(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fo||(fo=new we(new Dn(kp),null,rs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fo}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fo:n}}getChild(e){const n=_e(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ge(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fo:this.priorityNode_;return new we(i,o,r)}}updateChild(e,n){const s=_e(e);if(s===null)return n;{V(_e(e)!==".priority"||$s(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Tt,(o,a)=>{n[o]=a.val(e),s++,r&&we.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+cI(this.getPriority().val())+":"),this.forEachChild(Tt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Mw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ge(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ge(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ge(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ge.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Va?-1:0}withIndex(e){if(e===yr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===yr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Tt),i=n.getIterator(Tt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yr?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Hx extends we{constructor(){super(new Dn(kp),we.EMPTY_NODE,rs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Va=new Hx;Object.defineProperties(ge,{MIN:{value:new ge(Cr,we.EMPTY_NODE)},MAX:{value:new ge(Si,Va)}});lI.__EMPTY_NODE=we.EMPTY_NODE;Ze.__childrenNodeConstructor=we;Vx(Va);Ux(Va);/**
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
 */const Wx=!0;function yt(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ze(n,yt(e))}if(!(t instanceof Array)&&Wx){const n=[];let s=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=yt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ge(o,l)))}}),n.length===0)return we.EMPTY_NODE;const r=yc(n,Mx,o=>o.name,kp);if(s){const o=yc(n,Tt.getCompare());return new we(r,yt(e),new rs({".priority":o},{".priority":Tt}))}else return new we(r,yt(e),rs.Default)}else{let n=we.EMPTY_NODE;return ln(t,(s,i)=>{if(gs(t,s)&&s.substring(0,1)!=="."){const r=yt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(yt(e))}}Fx(yt);/**
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
 */class qx extends gu{constructor(e){super(),this.indexPath_=e,V(!he(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Qr(e.name,n.name):r}makePost(e,n){const s=yt(e),i=we.EMPTY_NODE.updateChild(this.indexPath_,s);return new ge(n,i)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Va);return new ge(Si,e)}toString(){return iI(this.indexPath_,0).join("/")}}/**
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
 */class Kx extends gu{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Qr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ge.MIN}maxPost(){return ge.MAX}makePost(e,n){const s=yt(e);return new ge(n,s)}toString(){return".value"}}const zx=new Kx;/**
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
 */function Gx(t){return{type:"value",snapshotNode:t}}function Qx(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yx(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function sy(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Xx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Dp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cr}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tt}copy(){const e=new Dp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function iy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Tt?n="$priority":t.index_===zx?n="$value":t.index_===yr?n="$key":(V(t.index_ instanceof qx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ut(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ut(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ut(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ut(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ut(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ry(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Tt&&(e.i=t.index_.toString()),e}/**
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
 */class vc extends tI{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=La("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vc.getListenId_(e,s),a={};this.listens_[o]=a;const l=iy(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ar(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=vc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=iy(e._queryParams),s=e._path.toString(),i=new Ii;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zr(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ea(a.responseText)}catch{Xt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Xt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Jx{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ec(){return{value:null,children:new Map}}function fI(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=_e(e);t.children.has(s)||t.children.set(s,Ec());const i=t.children.get(s);e=De(e),fI(i,e,n)}}function Wd(t,e,n){t.value!==null?n(e,t.value):Zx(t,(s,i)=>{const r=new Me(e.toString()+"/"+s);Wd(i,r,n)})}function Zx(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class e1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const oy=10*1e3,t1=30*1e3,n1=5*60*1e3;class s1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new e1(e);const s=oy+(t1-oy)*Math.random();Mo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ln(e,(i,r)=>{r>0&&gs(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*n1))}}/**
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
 */var xn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xn||(xn={}));function pI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function _I(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Tc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=xn.ACK_USER_WRITE,this.source=pI()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Me(e));return new Tc(be(),n,this.revert)}}else return V(_e(this.path)===e,"operationForChild called for unrelated child."),new Tc(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ri{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=xn.OVERWRITE}operationForChild(e){return he(this.path)?new Ri(this.source,be(),this.snap.getImmediateChild(e)):new Ri(this.source,De(this.path),this.snap)}}/**
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
 */class aa{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=xn.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Me(e));return n.isEmpty()?null:n.value?new Ri(this.source,be(),n.value):new aa(this.source,be(),n)}else return V(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new aa(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xp{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=_e(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function i1(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Xx(o.childName,o.snapshotNode))}),po(t,i,"child_removed",e,s,n),po(t,i,"child_added",e,s,n),po(t,i,"child_moved",r,s,n),po(t,i,"child_changed",e,s,n),po(t,i,"value",e,s,n),i}function po(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>o1(t,a,l)),o.forEach(a=>{const l=r1(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function r1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function o1(t,e,n){if(e.childName==null||n.childName==null)throw qr("Should only compare child_ events.");const s=new ge(e.childName,e.snapshotNode),i=new ge(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function mI(t,e){return{eventCache:t,serverCache:e}}function Vo(t,e,n,s){return mI(new xp(e,n,s),t.serverCache)}function yI(t,e,n,s){return mI(t.eventCache,new xp(e,n,s))}function qd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let xh;const a1=()=>(xh||(xh=new Dn(KD)),xh);class Oe{constructor(e,n=a1()){this.value=e,this.children=n}static fromObject(e){let n=new Oe(null);return ln(e,(s,i)=>{n=n.set(new Me(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:be(),value:this.value};if(he(e))return null;{const s=_e(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(De(e),n);return r!=null?{path:tt(new Me(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=_e(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new Oe(null)}}set(e,n){if(he(e))return new Oe(n,this.children);{const s=_e(e),r=(this.children.get(s)||new Oe(null)).set(De(e),n),o=this.children.insert(s,r);return new Oe(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Oe(null):new Oe(null,this.children);{const n=_e(e),s=this.children.get(n);if(s){const i=s.remove(De(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Oe(null):new Oe(this.value,r)}else return this}}get(e){if(he(e))return this.value;{const n=_e(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(he(e))return n;{const s=_e(e),r=(this.children.get(s)||new Oe(null)).setTree(De(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Oe(this.value,o)}}fold(e){return this.fold_(be(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(tt(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,be(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(he(e))return null;{const r=_e(e),o=this.children.get(r);return o?o.findOnPath_(De(e),tt(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,be(),n)}foreachOnPath_(e,n,s){if(he(e))return this;{this.value&&s(n,this.value);const i=_e(e),r=this.children.get(i);return r?r.foreachOnPath_(De(e),tt(n,i),s):new Oe(null)}}foreach(e){this.foreach_(be(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(tt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new Oe(null))}}function Fo(t,e,n){if(he(e))return new En(new Oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=on(i,e);return r=r.updateChild(o,n),new En(t.writeTree_.set(i,r))}else{const i=new Oe(n),r=t.writeTree_.setTree(e,i);return new En(r)}}}function ay(t,e,n){let s=t;return ln(n,(i,r)=>{s=Fo(s,tt(e,i),r)}),s}function ly(t,e){if(he(e))return En.empty();{const n=t.writeTree_.setTree(e,new Oe(null));return new En(n)}}function Kd(t,e){return Ui(t,e)!=null}function Ui(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(on(n.path,e)):null}function cy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Tt,(s,i)=>{e.push(new ge(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ge(s,i.value))}),e}function Ls(t,e){if(he(e))return t;{const n=Ui(t,e);return n!=null?new En(new Oe(n)):new En(t.writeTree_.subtree(e))}}function zd(t){return t.writeTree_.isEmpty()}function Sr(t,e){return vI(be(),t.writeTree_,e)}function vI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(V(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=vI(tt(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(tt(t,".priority"),s)),n}}/**
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
 */function EI(t,e){return bI(e,t)}function l1(t,e,n,s,i){V(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Fo(t.visibleWrites,e,n)),t.lastWriteId=s}function c1(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function u1(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&h1(a,s.path)?i=!1:gn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return d1(t),!0;if(s.snap)t.visibleWrites=ly(t.visibleWrites,s.path);else{const a=s.children;ln(a,l=>{t.visibleWrites=ly(t.visibleWrites,tt(s.path,l))})}return!0}else return!1}function h1(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(tt(t.path,n),e))return!0;return!1}function d1(t){t.visibleWrites=TI(t.allWrites,f1,be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function f1(t){return t.visible}function TI(t,e,n){let s=En.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)gn(n,o)?(a=on(n,o),s=Fo(s,a,r.snap)):gn(o,n)&&(a=on(o,n),s=Fo(s,be(),r.snap.getChild(a)));else if(r.children){if(gn(n,o))a=on(n,o),s=ay(s,a,r.children);else if(gn(o,n))if(a=on(o,n),he(a))s=ay(s,be(),r.children);else{const l=Ar(r.children,_e(a));if(l){const c=l.getChild(De(a));s=Fo(s,be(),c)}}}else throw qr("WriteRecord should have .snap or .children")}}return s}function wI(t,e,n,s,i){if(!s&&!i){const r=Ui(t.visibleWrites,e);if(r!=null)return r;{const o=Ls(t.visibleWrites,e);if(zd(o))return n;if(n==null&&!Kd(o,be()))return null;{const a=n||we.EMPTY_NODE;return Sr(o,a)}}}else{const r=Ls(t.visibleWrites,e);if(!i&&zd(r))return n;if(!i&&n==null&&!Kd(r,be()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(gn(c.path,e)||gn(e,c.path))},a=TI(t.allWrites,o,e),l=n||we.EMPTY_NODE;return Sr(a,l)}}}function p1(t,e,n){let s=we.EMPTY_NODE;const i=Ui(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Tt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ls(t.visibleWrites,e);return n.forEachChild(Tt,(o,a)=>{const l=Sr(Ls(r,new Me(o)),a);s=s.updateImmediateChild(o,l)}),cy(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ls(t.visibleWrites,e);return cy(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function _1(t,e,n,s,i){V(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=tt(e,n);if(Kd(t.visibleWrites,r))return null;{const o=Ls(t.visibleWrites,r);return zd(o)?i.getChild(n):Sr(o,i.getChild(n))}}function g1(t,e,n,s){const i=tt(e,n),r=Ui(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ls(t.visibleWrites,i);return Sr(o,s.getNode().getImmediateChild(n))}else return null}function m1(t,e){return Ui(t.visibleWrites,e)}function y1(t,e,n,s,i,r,o){let a;const l=Ls(t.visibleWrites,e),c=Ui(l,be());if(c!=null)a=c;else if(n!=null)a=Sr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function v1(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function Gd(t,e,n,s){return wI(t.writeTree,t.treePath,e,n,s)}function II(t,e){return p1(t.writeTree,t.treePath,e)}function uy(t,e,n,s){return _1(t.writeTree,t.treePath,e,n,s)}function wc(t,e){return m1(t.writeTree,tt(t.treePath,e))}function E1(t,e,n,s,i,r){return y1(t.writeTree,t.treePath,e,n,s,i,r)}function Lp(t,e,n){return g1(t.writeTree,t.treePath,e,n)}function AI(t,e){return bI(tt(t.treePath,e),t.writeTree)}function bI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class T1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,sy(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Yx(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Qx(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,sy(s,e.snapshotNode,i.oldSnap));else throw qr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class w1{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const CI=new w1;class Mp{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new xp(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lp(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pi(this.viewCache_),r=E1(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function I1(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function A1(t,e,n,s,i){const r=new T1;let o,a;if(n.type===xn.OVERWRITE){const c=n;c.source.fromUser?o=Qd(t,e,c.path,c.snap,s,i,r):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!he(c.path),o=Ic(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===xn.MERGE){const c=n;c.source.fromUser?o=C1(t,e,c.path,c.children,s,i,r):(V(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Yd(t,e,c.path,c.children,s,i,a,r))}else if(n.type===xn.ACK_USER_WRITE){const c=n;c.revert?o=P1(t,e,c.path,s,i,r):o=S1(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===xn.LISTEN_COMPLETE)o=R1(t,e,n.path,s,r);else throw qr("Unknown operation type: "+n.type);const l=r.getChanges();return b1(e,o,l),{viewCache:o,changes:l}}function b1(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=qd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Gx(qd(e)))}}function SI(t,e,n,s,i,r){const o=e.eventCache;if(wc(s,n)!=null)return e;{let a,l;if(he(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Pi(e),u=c instanceof we?c:we.EMPTY_NODE,h=II(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Gd(s,Pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=_e(n);if(c===".priority"){V($s(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=uy(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=De(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=uy(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Lp(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Vo(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function Ic(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(he(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=_e(n);if(!l.isCompleteForPath(n)&&$s(n)>1)return e;const g=De(n),y=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),f,y,g,CI,null)}const h=yI(e,c,l.isFullyInitialized()||he(n),u.filtersNodes()),d=new Mp(i,h,r);return SI(t,h,n,i,d,a)}function Qd(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Mp(i,e,r);if(he(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Vo(e,c,!0,t.filter.filtersNodes());else{const h=_e(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Vo(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=De(n),f=a.getNode().getImmediateChild(h);let g;if(he(d))g=s;else{const m=u.getCompleteChild(h);m!=null?sI(d)===".priority"&&m.getChild(rI(d)).isEmpty()?g=m:g=m.updateChild(d,s):g=we.EMPTY_NODE}if(f.equals(g))l=e;else{const m=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Vo(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function hy(t,e){return t.eventCache.isCompleteForChild(e)}function C1(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=tt(n,l);hy(e,_e(u))&&(a=Qd(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=tt(n,l);hy(e,_e(u))||(a=Qd(t,a,u,c,i,r,o))}),a}function dy(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Yd(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;he(n)?c=s:c=new Oe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=dy(t,f,d);l=Ic(t,l,new Me(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),m=dy(t,g,d);l=Ic(t,l,new Me(h),m,i,r,o,a)}}),l}function S1(t,e,n,s,i,r,o){if(wc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ic(t,e,n,l.getNode().getChild(n),i,r,a,o);if(he(n)){let c=new Oe(null);return l.getNode().forEachChild(yr,(u,h)=>{c=c.set(new Me(u),h)}),Yd(t,e,n,c,i,r,a,o)}else return e}else{let c=new Oe(null);return s.foreach((u,h)=>{const d=tt(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Yd(t,e,n,c,i,r,a,o)}}function R1(t,e,n,s,i){const r=e.serverCache,o=yI(e,r.getNode(),r.isFullyInitialized()||he(n),r.isFiltered());return SI(t,o,n,s,CI,i)}function P1(t,e,n,s,i,r){let o;if(wc(s,n)!=null)return e;{const a=new Mp(s,e,i),l=e.eventCache.getNode();let c;if(he(n)||_e(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Gd(s,Pi(e));else{const h=e.serverCache.getNode();V(h instanceof we,"serverChildren would be complete if leaf node"),u=II(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=_e(n);let h=Lp(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,De(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,we.EMPTY_NODE,De(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gd(s,Pi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||wc(s,be())!=null,Vo(e,c,o,t.filter.filtersNodes())}}function N1(t,e){const n=Pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(_e(e)).isEmpty())?n.getChild(e):null}function fy(t,e,n,s){e.type===xn.MERGE&&e.source.queryId!==null&&(V(Pi(t.viewCache_),"We should always have a full cache before handling merges"),V(qd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=A1(t.processor_,i,e,n,s);return I1(t.processor_,r.viewCache),V(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,O1(t,r.changes,r.viewCache.eventCache.getNode(),null)}function O1(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return i1(t.eventGenerator_,e,n,i)}/**
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
 */let py;function k1(t){V(!py,"__referenceConstructor has already been defined"),py=t}function Vp(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return V(r!=null,"SyncTree gave us an op for an invalid query."),fy(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(fy(o,e,n,s));return r}}function Fp(t,e){let n=null;for(const s of t.views.values())n=n||N1(s,e);return n}/**
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
 */let _y;function D1(t){V(!_y,"__referenceConstructor has already been defined"),_y=t}class gy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Oe(null),this.pendingWriteTree_=v1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function x1(t,e,n,s,i){return l1(t.pendingWriteTree_,e,n,s,i),i?yu(t,new Ri(pI(),e,n)):[]}function ar(t,e,n=!1){const s=c1(t.pendingWriteTree_,e);if(u1(t.pendingWriteTree_,e)){let r=new Oe(null);return s.snap!=null?r=r.set(be(),!0):ln(s.children,o=>{r=r.set(new Me(o),!0)}),yu(t,new Tc(s.path,r,n))}else return[]}function mu(t,e,n){return yu(t,new Ri(_I(),e,n))}function L1(t,e,n){const s=Oe.fromObject(n);return yu(t,new aa(_I(),e,s))}function M1(t,e,n,s){const i=OI(t,s);if(i!=null){const r=kI(i),o=r.path,a=r.queryId,l=on(o,e),c=new Ri(gI(a),l,n);return DI(t,o,c)}else return[]}function V1(t,e,n,s){const i=OI(t,s);if(i){const r=kI(i),o=r.path,a=r.queryId,l=on(o,e),c=Oe.fromObject(n),u=new aa(gI(a),l,c);return DI(t,o,u)}else return[]}function RI(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=on(o,e),c=Fp(a,l);if(c)return c});return wI(i,e,r,n,!0)}function yu(t,e){return PI(e,t.syncPointTree_,null,EI(t.pendingWriteTree_,be()))}function PI(t,e,n,s){if(he(t.path))return NI(t,e,n,s);{const i=e.get(be());n==null&&i!=null&&(n=Fp(i,be()));let r=[];const o=_e(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=AI(s,o);r=r.concat(PI(a,l,c,u))}return i&&(r=r.concat(Vp(i,t,s,n))),r}}function NI(t,e,n,s){const i=e.get(be());n==null&&i!=null&&(n=Fp(i,be()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=AI(s,o),u=t.operationForChild(o);u&&(r=r.concat(NI(u,a,l,c)))}),i&&(r=r.concat(Vp(i,t,s,n))),r}function OI(t,e){return t.tagToQueryMap.get(e)}function kI(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Me(t.substr(0,e))}}function DI(t,e,n){const s=t.syncPointTree_.get(e);V(s,"Missing sync point for query tag that we're tracking");const i=EI(t.pendingWriteTree_,e);return Vp(s,n,i,null)}/**
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
 */class Up{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Up(n)}node(){return this.node_}}class $p{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=tt(this.path_,e);return new $p(this.syncTree_,n)}node(){return RI(this.syncTree_,this.path_)}}const F1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},my=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return U1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $1(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},U1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},$1=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&V(!1,"Unexpected increment value: "+s);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},B1=function(t,e,n,s){return Bp(e,new $p(n,t),s)},j1=function(t,e,n){return Bp(t,new Up(e),n)};function Bp(t,e,n){const s=t.getPriority().val(),i=my(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=my(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ze(a,yt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ze(i))),o.forEachChild(Tt,(a,l)=>{const c=Bp(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class jp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Hp(t,e){let n=e instanceof Me?e:new Me(e),s=t,i=_e(n);for(;i!==null;){const r=Ar(s.node.children,i)||{children:{},childCount:0};s=new jp(i,s,r),n=De(n),i=_e(n)}return s}function Yr(t){return t.node.value}function xI(t,e){t.node.value=e,Xd(t)}function LI(t){return t.node.childCount>0}function H1(t){return Yr(t)===void 0&&!LI(t)}function vu(t,e){ln(t.node.children,(n,s)=>{e(new jp(n,t,s))})}function MI(t,e,n,s){n&&!s&&e(t),vu(t,i=>{MI(i,e,!0,s)}),n&&s&&e(t)}function W1(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fa(t){return new Me(t.parent===null?t.name:Fa(t.parent)+"/"+t.name)}function Xd(t){t.parent!==null&&q1(t.parent,t.name,t)}function q1(t,e,n){const s=H1(n),i=gs(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Xd(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Xd(t))}/**
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
 */const K1=/[\[\].#$\/\u0000-\u001F\u007F]/,z1=/[\[\].#$\u0000-\u001F\u007F]/,Lh=10*1024*1024,VI=function(t){return typeof t=="string"&&t.length!==0&&!K1.test(t)},G1=function(t){return typeof t=="string"&&t.length!==0&&!z1.test(t)},Q1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),G1(t)},FI=function(t,e,n){const s=n instanceof Me?new Rx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ii(s));if(typeof e=="function")throw new Error(t+"contains a function "+ii(s)+" with contents = "+e.toString());if(Vw(e))throw new Error(t+"contains "+e.toString()+" "+ii(s));if(typeof e=="string"&&e.length>Lh/3&&cu(e)>Lh)throw new Error(t+"contains a string greater than "+Lh+" utf8 bytes "+ii(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ln(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!VI(o)))throw new Error(t+" contains an invalid key ("+o+") "+ii(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Px(s,o),FI(t,a,s),Nx(s)}),i&&r)throw new Error(t+' contains ".value" child '+ii(s)+" in addition to actual children.")}},Y1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!VI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Q1(n))throw new Error(AP(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class X1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function J1(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!oI(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function $i(t,e,n){J1(t,n),Z1(t,s=>gn(s,e)||gn(e,s))}function Z1(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(eL(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function eL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ei&&mt("event: "+n.toString()),Ma(s)}}}/**
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
 */const tL="repo_interrupt",nL=25;class sL{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new X1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ec(),this.transactionQueueTree_=new jp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iL(t,e,n){if(t.stats_=Pp(t.repoInfo_),t.forceRestClient_||JD())t.server_=new vc(t.repoInfo_,(s,i,r,o)=>{yy(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ut(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ls(t.repoInfo_,e,(s,i,r,o)=>{yy(t,s,i,r,o)},s=>{vy(t,s)},s=>{oL(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ix(t.repoInfo_,()=>new s1(t.stats_,t.server_)),t.infoData_=new Jx,t.infoSyncTree_=new gy({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=mu(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wp(t,"connected",!1),t.serverSyncTree_=new gy({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);$i(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function rL(t){const n=t.infoData_.getNode(new Me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function UI(t){return F1({timestamp:rL(t)})}function yy(t,e,n,s,i){t.dataUpdateCount++;const r=new Me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=lc(n,c=>yt(c));o=V1(t.serverSyncTree_,r,l,i)}else{const l=yt(n);o=M1(t.serverSyncTree_,r,l,i)}else if(s){const l=lc(n,c=>yt(c));o=L1(t.serverSyncTree_,r,l)}else{const l=yt(n);o=mu(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Kp(t,r)),$i(t.eventQueue_,a,o)}function vy(t,e){Wp(t,"connected",e),e===!1&&lL(t)}function oL(t,e){ln(e,(n,s)=>{Wp(t,n,s)})}function Wp(t,e,n){const s=new Me("/.info/"+e),i=yt(n);t.infoData_.updateSnapshot(s,i);const r=mu(t.infoSyncTree_,s,i);$i(t.eventQueue_,s,r)}function aL(t){return t.nextWriteId_++}function lL(t){$I(t,"onDisconnectEvents");const e=UI(t),n=Ec();Wd(t.onDisconnect_,be(),(i,r)=>{const o=B1(i,r,t.serverSyncTree_,e);fI(n,i,o)});let s=[];Wd(n,be(),(i,r)=>{s=s.concat(mu(t.serverSyncTree_,i,r));const o=dL(t,i);Kp(t,o)}),t.onDisconnect_=Ec(),$i(t.eventQueue_,be(),s)}function cL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(tL)}function $I(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function BI(t,e,n){return RI(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function qp(t,e=t.transactionQueueTree_){if(e||Eu(t,e),Yr(e)){const n=HI(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&uL(t,Fa(e),n)}else LI(e)&&vu(e,n=>{qp(t,n)})}function uL(t,e,n){const s=n.map(c=>c.currentWriteId),i=BI(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];V(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=on(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{$I(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(ar(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Eu(t,Hp(t.transactionQueueTree_,e)),qp(t,t.transactionQueueTree_),$i(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ma(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Xt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Kp(t,e)}},o)}function Kp(t,e){const n=jI(t,e),s=Fa(n),i=HI(t,n);return hL(t,i,s),s}function hL(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=on(n,l.path);let u=!1,h;if(V(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nL)u=!0,h="maxretry",i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else{const d=BI(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){FI("transaction failed: Data returned ",f,l.path);let g=yt(f);typeof f=="object"&&f!=null&&gs(f,".priority")||(g=g.updatePriority(d.getPriority()));const y=l.currentWriteId,E=UI(t),C=j1(g,d,E);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=C,l.currentWriteId=aL(t),o.splice(o.indexOf(y),1),i=i.concat(x1(t.serverSyncTree_,l.path,C,l.currentWriteId,l.applyLocally)),i=i.concat(ar(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(ar(t.serverSyncTree_,l.currentWriteId,!0))}$i(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Eu(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ma(s[a]);qp(t,t.transactionQueueTree_)}function jI(t,e){let n,s=t.transactionQueueTree_;for(n=_e(e);n!==null&&Yr(s)===void 0;)s=Hp(s,n),e=De(e),n=_e(e);return s}function HI(t,e){const n=[];return WI(t,e,n),n.sort((s,i)=>s.order-i.order),n}function WI(t,e,n){const s=Yr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);vu(e,i=>{WI(t,i,n)})}function Eu(t,e){const n=Yr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,xI(e,n.length>0?n:void 0)}vu(e,s=>{Eu(t,s)})}function dL(t,e){const n=Fa(jI(t,e)),s=Hp(t.transactionQueueTree_,e);return W1(s,i=>{Mh(t,i)}),Mh(t,s),MI(s,i=>{Mh(t,i)}),n}function Mh(t,e){const n=Yr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xI(e,void 0):n.length=r+1,$i(t.eventQueue_,Fa(e),i);for(let o=0;o<s.length;o++)Ma(s[o])}}/**
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
 */function fL(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function pL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Xt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ey=function(t,e){const n=_L(t),s=n.namespace;n.domain==="firebase.com"&&Ci(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ci("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||WD();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tx(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Me(n.pathString)}},_L=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=fL(t.substring(u,h)));const d=pL(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class zp{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return he(this._path)?null:sI(this._path)}get ref(){return new Xr(this._repo,this._path)}get _queryIdentifier(){const e=ry(this._queryParams),n=Sp(e);return n==="{}"?"default":n}get _queryObject(){return ry(this._queryParams)}isEqual(e){if(e=st(e),!(e instanceof zp))return!1;const n=this._repo===e._repo,s=oI(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Sx(this._path)}}class Xr extends zp{constructor(e,n){super(e,n,new Dp,!1)}get parent(){const e=rI(this._path);return e===null?null:new Xr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}k1(Xr);D1(Xr);/**
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
 */const gL="FIREBASE_DATABASE_EMULATOR_HOST",Jd={};let mL=!1;function yL(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ci("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ey(r,i),a=o.repoInfo,l,c;typeof process<"u"&&$m&&(c=$m[gL]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Ey(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Bd(Bd.OWNER):new ex(t.name,t.options,e);Y1("Invalid Firebase Database URL",o),he(o.path)||Ci("Database URL must point to the root of a Firebase Database (not including a child path).");const h=EL(a,t,u,new ZD(t.name,n));return new TL(h,t)}function vL(t,e){const n=Jd[e];(!n||n[t.key]!==t)&&Ci(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cL(t),delete n[t.key]}function EL(t,e,n,s){let i=Jd[e.name];i||(i={},Jd[e.name]=i);let r=i[t.toURLString()];return r&&Ci("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sL(t,mL,n,s),i[t.toURLString()]=r,r}class TL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xr(this._repo,be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(vL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ci("Cannot call "+e+" on a deleted database.")}}/**
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
 */function wL(t){UD(Gs),qn(new wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yL(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Yt(Bm,jm,t),Yt(Bm,jm,"esm2017")}ls.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ls.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wL();var IL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Gp=Gp||{},ee=IL||self;function Tu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ua(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AL(t){return Object.prototype.hasOwnProperty.call(t,Vh)&&t[Vh]||(t[Vh]=++bL)}var Vh="closure_uid_"+(1e9*Math.random()>>>0),bL=0;function CL(t,e,n){return t.call.apply(t.bind,arguments)}function SL(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=CL:wt=SL,wt.apply(null,arguments)}function yl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Qs(){this.s=this.s,this.o=this.o}var RL=0;Qs.prototype.s=!1;Qs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),RL!=0)&&AL(this)};Qs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Qp(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ty(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Tu(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function It(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}It.prototype.h=function(){this.defaultPrevented=!0};var PL=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ee.addEventListener("test",n,e),ee.removeEventListener("test",n,e)}catch{}return t}();function la(t){return/^[\s\xa0]*$/.test(t)}function wu(){var t=ee.navigator;return t&&(t=t.userAgent)?t:""}function On(t){return wu().indexOf(t)!=-1}function Yp(t){return Yp[" "](t),t}Yp[" "]=function(){};function NL(t,e){var n=wM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var OL=On("Opera"),Rr=On("Trident")||On("MSIE"),KI=On("Edge"),Zd=KI||Rr,zI=On("Gecko")&&!(wu().toLowerCase().indexOf("webkit")!=-1&&!On("Edge"))&&!(On("Trident")||On("MSIE"))&&!On("Edge"),kL=wu().toLowerCase().indexOf("webkit")!=-1&&!On("Edge");function GI(){var t=ee.document;return t?t.documentMode:void 0}var ef;e:{var Fh="",Uh=function(){var t=wu();if(zI)return/rv:([^\);]+)(\)|;)/.exec(t);if(KI)return/Edge\/([\d\.]+)/.exec(t);if(Rr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kL)return/WebKit\/(\S+)/.exec(t);if(OL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Uh&&(Fh=Uh?Uh[1]:""),Rr){var $h=GI();if($h!=null&&$h>parseFloat(Fh)){ef=String($h);break e}}ef=Fh}var tf;if(ee.document&&Rr){var wy=GI();tf=wy||parseInt(ef,10)||void 0}else tf=void 0;var DL=tf;function ca(t,e){if(It.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zI){e:{try{Yp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ca.$.h.call(this)}}rt(ca,It);var xL={2:"touch",3:"pen",4:"mouse"};ca.prototype.h=function(){ca.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $a="closure_listenable_"+(1e6*Math.random()|0),LL=0;function ML(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++LL,this.fa=this.ia=!1}function Iu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Xp(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function VL(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function QI(t){const e={};for(const n in t)e[n]=t[n];return e}const Iy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function YI(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Iy.length;r++)n=Iy[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Au(t){this.src=t,this.g={},this.h=0}Au.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=sf(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ML(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function nf(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=qI(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Iu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sf(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Jp="closure_lm_"+(1e6*Math.random()|0),Bh={};function XI(t,e,n,s,i){if(s&&s.once)return ZI(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)XI(t,e[r],n,s,i);return null}return n=t_(n),t&&t[$a]?t.O(e,n,Ua(s)?!!s.capture:!!s,i):JI(t,e,n,!1,s,i)}function JI(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Ua(i)?!!i.capture:!!i,a=e_(t);if(a||(t[Jp]=a=new Au(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=FL(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)PL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(tA(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FL(){function t(n){return e.call(t.src,t.listener,n)}const e=UL;return t}function ZI(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ZI(t,e[r],n,s,i);return null}return n=t_(n),t&&t[$a]?t.P(e,n,Ua(s)?!!s.capture:!!s,i):JI(t,e,n,!0,s,i)}function eA(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)eA(t,e[r],n,s,i);else s=Ua(s)?!!s.capture:!!s,n=t_(n),t&&t[$a]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=sf(r,n,s,i),-1<n&&(Iu(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=e_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sf(e,n,s,i)),(n=-1<t?e[t]:null)&&Zp(n))}function Zp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[$a])nf(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(tA(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=e_(e))?(nf(n,t),n.h==0&&(n.src=null,e[Jp]=null)):Iu(t)}}}function tA(t){return t in Bh?Bh[t]:Bh[t]="on"+t}function UL(t,e){if(t.fa)t=!0;else{e=new ca(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Zp(t),t=n.call(s,e)}return t}function e_(t){return t=t[Jp],t instanceof Au?t:null}var jh="__closure_events_fn_"+(1e9*Math.random()>>>0);function t_(t){return typeof t=="function"?t:(t[jh]||(t[jh]=function(e){return t.handleEvent(e)}),t[jh])}function it(){Qs.call(this),this.i=new Au(this),this.S=this,this.J=null}rt(it,Qs);it.prototype[$a]=!0;it.prototype.removeEventListener=function(t,e,n,s){eA(this,t,e,n,s)};function dt(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new It(e,t);else if(e instanceof It)e.target=e.target||t;else{var i=e;e=new It(s,t),YI(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=vl(o,s,!0,e)&&i}if(o=e.g=t,i=vl(o,s,!0,e)&&i,i=vl(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=vl(o,s,!1,e)&&i}it.prototype.N=function(){if(it.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Iu(n[s]);delete t.g[e],t.h--}}this.J=null};it.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};it.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function vl(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&nf(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var n_=ee.JSON.stringify;class $L{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function BL(){var t=s_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jL{constructor(){this.h=this.g=null}add(e,n){const s=nA.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var nA=new $L(()=>new HL,t=>t.reset());class HL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function qL(t){ee.setTimeout(()=>{throw t},0)}let ua,ha=!1,s_=new jL,sA=()=>{const t=ee.Promise.resolve(void 0);ua=()=>{t.then(KL)}};var KL=()=>{for(var t;t=BL();){try{t.h.call(t.g)}catch(n){qL(n)}var e=nA;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ha=!1};function bu(t,e){it.call(this),this.h=t||1,this.g=e||ee,this.j=wt(this.qb,this),this.l=Date.now()}rt(bu,it);F=bu.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),dt(this,"tick"),this.ga&&(i_(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function i_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){bu.$.N.call(this),i_(this),delete this.g};function r_(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(t,e||0)}function iA(t){t.g=r_(()=>{t.g=null,t.i&&(t.i=!1,iA(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zL extends Qs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iA(this)}N(){super.N(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function da(t){Qs.call(this),this.h=t,this.g={}}rt(da,Qs);var Ay=[];function rA(t,e,n,s){Array.isArray(n)||(n&&(Ay[0]=n.toString()),n=Ay);for(var i=0;i<n.length;i++){var r=XI(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function oA(t){Xp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zp(e)},t),t.g={}}da.prototype.N=function(){da.$.N.call(this),oA(this)};da.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cu(){this.g=!0}Cu.prototype.Ea=function(){this.g=!1};function GL(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QL(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function lr(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XL(t,n)+(s?" "+s:"")})}function YL(t,e){t.info(function(){return"TIMEOUT: "+e})}Cu.prototype.info=function(){};function XL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return n_(n)}catch{return e}}var Bi={},by=null;function Su(){return by=by||new it}Bi.Ta="serverreachability";function aA(t){It.call(this,Bi.Ta,t)}rt(aA,It);function fa(t){const e=Su();dt(e,new aA(e))}Bi.STAT_EVENT="statevent";function lA(t,e){It.call(this,Bi.STAT_EVENT,t),this.stat=e}rt(lA,It);function St(t){const e=Su();dt(e,new lA(e,t))}Bi.Ua="timingevent";function cA(t,e){It.call(this,Bi.Ua,t),this.size=e}rt(cA,It);function Ba(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){t()},e)}var Ru={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},uA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function o_(){}o_.prototype.h=null;function Cy(t){return t.h||(t.h=t.i())}function hA(){}var ja={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function a_(){It.call(this,"d")}rt(a_,It);function l_(){It.call(this,"c")}rt(l_,It);var rf;function Pu(){}rt(Pu,o_);Pu.prototype.g=function(){return new XMLHttpRequest};Pu.prototype.i=function(){return{}};rf=new Pu;function Ha(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new da(this),this.P=JL,t=Zd?125:void 0,this.V=new bu(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dA}function dA(){this.i=null,this.g="",this.h=!1}var JL=45e3,fA={},of={};F=Ha.prototype;F.setTimeout=function(t){this.P=t};function af(t,e,n){t.L=1,t.A=Ou(ds(e)),t.u=n,t.S=!0,pA(t,null)}function pA(t,e){t.G=Date.now(),Wa(t),t.B=ds(t.A);var n=t.B,s=t.W;Array.isArray(s)||(s=[String(s)]),wA(n.i,"t",s),t.o=0,n=t.l.J,t.h=new dA,t.g=HA(t.l,n?e:null,!t.u),0<t.O&&(t.M=new zL(wt(t.Pa,t,t.g),t.O)),rA(t.U,t.g,"readystatechange",t.nb),e=t.I?QI(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),fa(),GL(t.j,t.v,t.B,t.m,t.W,t.u)}F.nb=function(t){t=t.target;const e=this.M;e&&Ln(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const u=Ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Zd||this.g&&(this.h.h||this.g.ja()||Ny(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?fa(3):fa(2)),Nu(this);var n=this.g.da();this.ca=n;t:if(_A(this)){var s=Ny(this.g);t="";var i=s.length,r=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hi(this),Uo(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,QL(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!la(a)){var c=a;break t}}c=null}if(n=c)lr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lf(this,n);else{this.i=!1,this.s=3,St(12),hi(this),Uo(this);break e}}this.S?(gA(this,u,o),Zd&&this.i&&u==3&&(rA(this.U,this.V,"tick",this.mb),this.V.start())):(lr(this.j,this.m,o,null),lf(this,o)),u==4&&hi(this),this.i&&!this.J&&(u==4?UA(this.l,this):(this.i=!1,Wa(this)))}else vM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),hi(this),Uo(this)}}}catch{}finally{}};function _A(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function gA(t,e,n){let s=!0,i;for(;!t.J&&t.o<n.length;)if(i=ZL(t,n),i==of){e==4&&(t.s=4,St(14),s=!1),lr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fA){t.s=4,St(15),lr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else lr(t.j,t.m,i,null),lf(t,i);_A(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,St(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),p_(e),e.M=!0,St(11))):(lr(t.j,t.m,n,"[Invalid Chunked Response]"),hi(t),Uo(t))}F.mb=function(){if(this.g){var t=Ln(this.g),e=this.g.ja();this.o<e.length&&(Nu(this),gA(this,t,e),this.i&&t!=4&&Wa(this))}};function ZL(t,e){var n=t.o,s=e.indexOf(`
`,n);return s==-1?of:(n=Number(e.substring(n,s)),isNaN(n)?fA:(s+=1,s+n>e.length?of:(e=e.slice(s,s+n),t.o=s+n,e)))}F.cancel=function(){this.J=!0,hi(this)};function Wa(t){t.Y=Date.now()+t.P,mA(t,t.P)}function mA(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ba(wt(t.lb,t),e)}function Nu(t){t.C&&(ee.clearTimeout(t.C),t.C=null)}F.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(YL(this.j,this.B),this.L!=2&&(fa(),St(17)),hi(this),this.s=2,Uo(this)):mA(this,this.Y-t)};function Uo(t){t.l.H==0||t.J||UA(t.l,t)}function hi(t){Nu(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,i_(t.V),oA(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function lf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cf(n.i,t))){if(!t.K&&cf(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Cc(n),Lu(n);else break e;f_(n),St(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ba(wt(n.ib,n),6e3));if(1>=bA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else di(n,11)}else if((t.K||n.g==t)&&Cc(n),!la(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.i;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(c_(r,r.h),r.h=null))}if(s.F){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.Da=m,xe(s.I,s.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=jA(s,s.J?s.pa:null,s.Y),o.K){CA(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.C&&(Nu(a),Wa(a)),s.g=o}else VA(s);0<n.j.length&&Mu(n)}else c[0]!="stop"&&c[0]!="close"||di(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?di(n,7):d_(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}fa(4)}catch{}}function eM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Tu(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function tM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Tu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function yA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Tu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tM(t),s=eM(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var vA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ti(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ti){this.h=t.h,Ac(this,t.j),this.s=t.s,this.g=t.g,bc(this,t.m),this.l=t.l;var e=t.i,n=new pa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sy(this,n),this.o=t.o}else t&&(e=String(t).match(vA))?(this.h=!1,Ac(this,e[1]||"",!0),this.s=Ao(e[2]||""),this.g=Ao(e[3]||"",!0),bc(this,e[4]),this.l=Ao(e[5]||"",!0),Sy(this,e[6]||"",!0),this.o=Ao(e[7]||"")):(this.h=!1,this.i=new pa(null,this.h))}Ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bo(e,Ry,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bo(e,Ry,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bo(n,n.charAt(0)=="/"?rM:iM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bo(n,aM)),t.join("")};function ds(t){return new Ti(t)}function Ac(t,e,n){t.j=n?Ao(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function bc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sy(t,e,n){e instanceof pa?(t.i=e,lM(t.i,t.h)):(n||(e=bo(e,oM)),t.i=new pa(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function Ou(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,sM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function sM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ry=/[#\/\?@]/g,iM=/[#\?:]/g,rM=/[#\?]/g,oM=/[#\?@]/g,aM=/#/g;function pa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ys(t){t.g||(t.g=new Map,t.h=0,t.i&&nM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=pa.prototype;F.add=function(t,e){Ys(this),this.i=null,t=Jr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function EA(t,e){Ys(t),e=Jr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function TA(t,e){return Ys(t),e=Jr(t,e),t.g.has(e)}F.forEach=function(t,e){Ys(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};F.ta=function(){Ys(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};F.Z=function(t){Ys(this);let e=[];if(typeof t=="string")TA(this,t)&&(e=e.concat(this.g.get(Jr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Ys(this),this.i=null,t=Jr(this,t),TA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wA(t,e,n){EA(t,e),0<n.length&&(t.i=null,t.g.set(Jr(t,e),Qp(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Jr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lM(t,e){e&&!t.j&&(Ys(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(EA(this,s),wA(this,i,n))},t)),t.j=e}var cM=class{constructor(t,e){this.g=t,this.map=e}};function IA(t){this.l=t||uM,ee.PerformanceNavigationTiming?(t=ee.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ee.g&&ee.g.Ka&&ee.g.Ka()&&ee.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uM=10;function AA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bA(t){return t.h?1:t.g?t.g.size:0}function cf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function c_(t,e){t.g?t.g.add(e):t.h=e}function CA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}IA.prototype.cancel=function(){if(this.i=SA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function SA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Qp(t.i)}var hM=class{stringify(t){return ee.JSON.stringify(t,void 0)}parse(t){return ee.JSON.parse(t,void 0)}};function dM(){this.g=new hM}function fM(t,e,n){const s=n||"";try{yA(t,function(i,r){let o=i;Ua(i)&&(o=n_(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function pM(t,e){const n=new Cu;if(ee.Image){const s=new Image;s.onload=yl(El,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yl(El,n,s,"TestLoadImage: error",!1,e),s.onabort=yl(El,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yl(El,n,s,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function El(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ku(t){this.l=t.ec||null,this.j=t.ob||!1}rt(ku,o_);ku.prototype.g=function(){return new Du(this.l,this.j)};ku.prototype.i=function(t){return function(){return t}}({});function Du(t,e){it.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=u_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(Du,it);var u_=0;F=Du.prototype;F.open=function(t,e){if(this.readyState!=u_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_a(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ee).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qa(this)),this.readyState=u_};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_a(this)),this.g&&(this.readyState=3,_a(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;RA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function RA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qa(this):_a(this),this.readyState==3&&RA(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,qa(this))};F.Ya=function(t){this.g&&(this.response=t,qa(this))};F.ka=function(){this.g&&qa(this)};function qa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_a(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _a(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var _M=ee.JSON.parse;function $e(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=PA,this.L=this.M=!1}rt($e,it);var PA="",gM=/^https?$/i,mM=["POST","PUT"];F=$e.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():rf.g(),this.C=this.u?Cy(this.u):Cy(rf),this.g.onreadystatechange=wt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Py(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=ee.FormData&&t instanceof ee.FormData,!(0<=qI(mM,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kA(this),0<this.B&&((this.L=yM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.ua,this)):this.A=r_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Py(this,r)}};function yM(t){return Rr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Gp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,dt(this,"timeout"),this.abort(8))};function Py(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,NA(t),xu(t)}function NA(t){t.F||(t.F=!0,dt(t,"complete"),dt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),xu(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xu(this,!0)),$e.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?OA(this):this.kb())};F.kb=function(){OA(this)};function OA(t){if(t.h&&typeof Gp<"u"&&(!t.C[1]||Ln(t)!=4||t.da()!=2)){if(t.v&&Ln(t)==4)r_(t.La,0,t);else if(dt(t,"readystatechange"),Ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(vA)[1]||null;!i&&ee.self&&ee.self.location&&(i=ee.self.location.protocol.slice(0,-1)),s=!gM.test(i?i.toLowerCase():"")}n=s}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var r=2<Ln(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",NA(t)}}finally{xu(t)}}}}function xu(t,e){if(t.g){kA(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||dt(t,"ready");try{n.onreadystatechange=s}catch{}}}function kA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ee.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function Ln(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),_M(e)}};function Ny(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case PA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function vM(t){const e={};t=(t.g&&2<=Ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(la(t[s]))continue;var n=WL(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}VL(e,function(s){return s.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function DA(t){let e="";return Xp(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function h_(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=DA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function _o(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function xA(t){this.Ga=0,this.j=[],this.l=new Cu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=_o("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=_o("baseRetryDelayMs",5e3,t),this.hb=_o("retryDelaySeedMs",1e4,t),this.eb=_o("forwardChannelMaxRetries",2,t),this.xa=_o("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new IA(t&&t.concurrentRequestLimit),this.Ja=new dM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=xA.prototype;F.ra=8;F.H=1;function d_(t){if(LA(t),t.H==3){var e=t.W++,n=ds(t.I);if(xe(n,"SID",t.K),xe(n,"RID",e),xe(n,"TYPE","terminate"),Ka(t,n),e=new Ha(t,t.l,e),e.L=2,e.A=Ou(ds(n)),n=!1,ee.navigator&&ee.navigator.sendBeacon)try{n=ee.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ee.Image&&(new Image().src=e.A,n=!0),n||(e.g=HA(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Wa(e)}BA(t)}function Lu(t){t.g&&(p_(t),t.g.cancel(),t.g=null)}function LA(t){Lu(t),t.u&&(ee.clearTimeout(t.u),t.u=null),Cc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ee.clearTimeout(t.m),t.m=null)}function Mu(t){if(!AA(t.i)&&!t.m){t.m=!0;var e=t.Na;ua||sA(),ha||(ua(),ha=!0),s_.add(e,t),t.C=0}}function EM(t,e){return bA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ba(wt(t.Na,t,e),$A(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ha(this,this.l,t);let r=this.s;if(this.U&&(r?(r=QI(r),YI(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=MA(this,i,e),n=ds(this.I),xe(n,"RID",t),xe(n,"CVER",22),this.F&&xe(n,"X-HTTP-Session-Id",this.F),Ka(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(DA(r)))+"&"+e:this.o&&h_(n,this.o,r)),c_(this.i,i),this.bb&&xe(n,"TYPE","init"),this.P?(xe(n,"$req",e),xe(n,"SID","null"),i.aa=!0,af(i,n,null)):af(i,n,e),this.H=2}}else this.H==3&&(t?Oy(this,t):this.j.length==0||AA(this.i)||Oy(this))};function Oy(t,e){var n;e?n=e.m:n=t.W++;const s=ds(t.I);xe(s,"SID",t.K),xe(s,"RID",n),xe(s,"AID",t.V),Ka(t,s),t.o&&t.s&&h_(s,t.o,t.s),n=new Ha(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=MA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),c_(t.i,n),af(n,s,e)}function Ka(t,e){t.na&&Xp(t.na,function(n,s){xe(e,s,n)}),t.h&&yA({},function(n,s){xe(e,s,n)})}function MA(t,e,n){n=Math.min(t.j.length,n);var s=t.h?wt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{fM(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function VA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ua||sA(),ha||(ua(),ha=!0),s_.add(e,t),t.A=0}}function f_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ba(wt(t.Ma,t),$A(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,FA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ba(wt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,St(10),Lu(this),FA(this))};function p_(t){t.B!=null&&(ee.clearTimeout(t.B),t.B=null)}function FA(t){t.g=new Ha(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=ds(t.wa);xe(e,"RID","rpc"),xe(e,"SID",t.K),xe(e,"AID",t.V),xe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&xe(e,"TO",t.qa),xe(e,"TYPE","xmlhttp"),Ka(t,e),t.o&&t.s&&h_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ou(ds(e)),n.u=null,n.S=!0,pA(n,t)}F.ib=function(){this.v!=null&&(this.v=null,Lu(this),f_(this),St(19))};function Cc(t){t.v!=null&&(ee.clearTimeout(t.v),t.v=null)}function UA(t,e){var n=null;if(t.g==e){Cc(t),p_(t),t.g=null;var s=2}else if(cf(t.i,e))n=e.F,CA(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;s=Su(),dt(s,new cA(s,n)),Mu(t)}else VA(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(s==1&&EM(t,e)||s==2&&f_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:di(t,5);break;case 4:di(t,10);break;case 3:di(t,6);break;default:di(t,2)}}}function $A(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function di(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=wt(t.pb,t);n||(n=new Ti("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Ac(n,"https"),Ou(n)),pM(n.toString(),s)}else St(2);t.H=0,t.h&&t.h.za(e),BA(t),LA(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),St(2)):(this.l.info("Failed to ping google.com"),St(1))};function BA(t){if(t.H=0,t.ma=[],t.h){const e=SA(t.i);(e.length!=0||t.j.length!=0)&&(Ty(t.ma,e),Ty(t.ma,t.j),t.i.i.length=0,Qp(t.j),t.j.length=0),t.h.ya()}}function jA(t,e,n){var s=n instanceof Ti?ds(n):new Ti(n);if(s.g!="")e&&(s.g=e+"."+s.g),bc(s,s.m);else{var i=ee.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ti(null);s&&Ac(r,s),e&&(r.g=e),i&&bc(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&xe(s,n,e),xe(s,"VER",t.ra),Ka(t,s),s}function HA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new $e(new ku({ob:n})):new $e(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function WA(){}F=WA.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function Sc(){if(Rr&&!(10<=Number(DL)))throw Error("Environmental error: no available transport.")}Sc.prototype.g=function(t,e){return new Zt(t,e)};function Zt(t,e){it.call(this),this.g=new xA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!la(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!la(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zr(this)}rt(Zt,it);Zt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;St(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=jA(t,null,t.Y),Mu(t)};Zt.prototype.close=function(){d_(this.g)};Zt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=n_(t),t=n);e.j.push(new cM(e.fb++,t)),e.H==3&&Mu(e)};Zt.prototype.N=function(){this.g.h=null,delete this.j,d_(this.g),delete this.g,Zt.$.N.call(this)};function qA(t){a_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}rt(qA,a_);function KA(){l_.call(this),this.status=1}rt(KA,l_);function Zr(t){this.g=t}rt(Zr,WA);Zr.prototype.Ba=function(){dt(this.g,"a")};Zr.prototype.Aa=function(t){dt(this.g,new qA(t))};Zr.prototype.za=function(t){dt(this.g,new KA)};Zr.prototype.ya=function(){dt(this.g,"b")};function TM(){this.blockSize=-1}function In(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(In,TM);In.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hh(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}In.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Hh(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Hh(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Hh(this,s),i=0;break}}this.h=i,this.i+=e};In.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Ae(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var wM={};function __(t){return-128<=t&&128>t?NL(t,function(e){return new Ae([e|0],0>e?-1:0)}):new Ae([t|0],0>t?-1:0)}function Mn(t){if(isNaN(t)||!isFinite(t))return vr;if(0>t)return lt(Mn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=uf;return new Ae(e,0)}function zA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return lt(zA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mn(Math.pow(e,8)),s=vr,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Mn(Math.pow(e,r)),s=s.R(r).add(Mn(o))):(s=s.R(n),s=s.add(Mn(o)))}return s}var uf=4294967296,vr=__(0),hf=__(1),ky=__(16777216);F=Ae.prototype;F.ea=function(){if(sn(this))return-lt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:uf+s)*e,e*=uf}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(os(this))return"0";if(sn(this))return"-"+lt(this).toString(t);for(var e=Mn(Math.pow(t,6)),n=this,s="";;){var i=Pc(n,e).g;n=Rc(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,os(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function os(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function sn(t){return t.h==-1}F.X=function(t){return t=Rc(this,t),sn(t)?-1:os(t)?0:1};function lt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Ae(n,~t.h).add(hf)}F.abs=function(){return sn(this)?lt(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Ae(n,n[n.length-1]&-2147483648?-1:0)};function Rc(t,e){return t.add(lt(e))}F.R=function(t){if(os(this)||os(t))return vr;if(sn(this))return sn(t)?lt(this).R(lt(t)):lt(lt(this).R(t));if(sn(t))return lt(this.R(lt(t)));if(0>this.X(ky)&&0>t.X(ky))return Mn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,Tl(n,2*s+2*i),n[2*s+2*i+1]+=r*l,Tl(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Tl(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Tl(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Ae(n,0)};function Tl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function go(t,e){this.g=t,this.h=e}function Pc(t,e){if(os(e))throw Error("division by zero");if(os(t))return new go(vr,vr);if(sn(t))return e=Pc(lt(t),e),new go(lt(e.g),lt(e.h));if(sn(e))return e=Pc(t,lt(e)),new go(lt(e.g),e.h);if(30<t.g.length){if(sn(t)||sn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=hf,s=e;0>=s.X(t);)n=Dy(n),s=Dy(s);var i=Gi(n,1),r=Gi(s,1);for(s=Gi(s,2),n=Gi(n,2);!os(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Gi(s,1),n=Gi(n,1)}return e=Rc(t,i.R(e)),new go(i,e)}for(i=vr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Mn(n),o=r.R(e);sn(o)||0<o.X(t);)n-=s,r=Mn(n),o=r.R(e);os(r)&&(r=hf),i=i.add(r),t=Rc(t,o)}return new go(i,t)}F.gb=function(t){return Pc(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Ae(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Ae(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Ae(n,this.h^t.h)};function Dy(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Ae(n,t.h)}function Gi(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Ae(i,t.h)}Sc.prototype.createWebChannel=Sc.prototype.g;Zt.prototype.send=Zt.prototype.u;Zt.prototype.open=Zt.prototype.m;Zt.prototype.close=Zt.prototype.close;Ru.NO_ERROR=0;Ru.TIMEOUT=8;Ru.HTTP_ERROR=6;uA.COMPLETE="complete";hA.EventType=ja;ja.OPEN="a";ja.CLOSE="b";ja.ERROR="c";ja.MESSAGE="d";it.prototype.listen=it.prototype.O;$e.prototype.listenOnce=$e.prototype.P;$e.prototype.getLastError=$e.prototype.Sa;$e.prototype.getLastErrorCode=$e.prototype.Ia;$e.prototype.getStatus=$e.prototype.da;$e.prototype.getResponseJson=$e.prototype.Wa;$e.prototype.getResponseText=$e.prototype.ja;$e.prototype.send=$e.prototype.ha;$e.prototype.setWithCredentials=$e.prototype.Oa;In.prototype.digest=In.prototype.l;In.prototype.reset=In.prototype.reset;In.prototype.update=In.prototype.j;Ae.prototype.add=Ae.prototype.add;Ae.prototype.multiply=Ae.prototype.R;Ae.prototype.modulo=Ae.prototype.gb;Ae.prototype.compare=Ae.prototype.X;Ae.prototype.toNumber=Ae.prototype.ea;Ae.prototype.toString=Ae.prototype.toString;Ae.prototype.getBits=Ae.prototype.D;Ae.fromNumber=Mn;Ae.fromString=zA;var IM=function(){return new Sc},AM=function(){return Su()},Wh=Ru,bM=uA,CM=Bi,xy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wl=hA,SM=$e,RM=In,Er=Ae;const Ly="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let eo="10.9.0";/**
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
 */const Ni=new Na("@firebase/firestore");function mo(){return Ni.logLevel}function M(t,...e){if(Ni.logLevel<=le.DEBUG){const n=e.map(g_);Ni.debug(`Firestore (${eo}): ${t}`,...n)}}function zn(t,...e){if(Ni.logLevel<=le.ERROR){const n=e.map(g_);Ni.error(`Firestore (${eo}): ${t}`,...n)}}function Pr(t,...e){if(Ni.logLevel<=le.WARN){const n=e.map(g_);Ni.warn(`Firestore (${eo}): ${t}`,...n)}}function g_(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${eo}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function Re(t,e){t||Z()}function se(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Un{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class GA{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class NM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OM{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Un;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Un,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Un)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Re(typeof s.accessToken=="string"),new GA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new gt(e)}}class kM{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class DM{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new kM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.R=n.token,new xM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function MM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class QA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=MM(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ee(t,e){return t<e?-1:t>e?1:0}function Nr(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ke(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ke(0,0))}static max(){return new te(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ga{constructor(e,n,s){n===void 0?n=0:n>e.length&&Z(),s===void 0?s=e.length-n:s>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ga.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ga?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends ga{construct(e,n,s){return new Le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const VM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends ga{construct(e,n,s){return new ht(e,n,s)}static isValidIdentifier(e){return VM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new j(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Le.fromString(e))}static fromName(e){return new G(Le.fromString(e).popFirst(5))}static empty(){return new G(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Le(e.slice()))}}function FM(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(s===1e9?new Ke(n+1,0):new Ke(n,s));return new Bs(i,G.empty(),e)}function UM(t){return new Bs(t.readTime,t.key,-1)}class Bs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Bs(te.min(),G.empty(),-1)}static max(){return new Bs(te.max(),G.empty(),-1)}}function $M(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const BM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function za(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==BM)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(i=>i?R.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new R((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new R((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}/**
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
 */class m_{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Un,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new $o(e,n.error)):this.V.resolve()},this.transaction.onerror=s=>{const i=y_(s.target.error);this.V.reject(new $o(e,i))}}static open(e,n,s,i){try{return new m_(n,e.transaction(i,s))}catch(r){throw new $o(n,r)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new WM(n)}}class fi{constructor(e,n,s){this.name=e,this.version=n,this.p=s,fi.S(ze())===12.2&&zn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),ai(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!lu())return!1;if(fi.C())return!0;const e=ze(),n=fi.S(e),s=0<n&&n<10,i=fi.v(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||r)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static v(e){const n=e.match(/Android ([\d.]+)/i),s=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async O(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,s)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=r=>{const o=r.target.result;n(o)},i.onblocked=()=>{s(new $o(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=r=>{const o=r.target.error;o.name==="VersionError"?s(new j(A.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new j(A.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new $o(e,o))},i.onupgradeneeded=r=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',r.oldVersion);const o=r.target.result;this.p.N(o,i.transaction,r.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,s,i){const r=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=m_.open(this.db,e,r?"readonly":"readwrite",s),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),R.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class HM{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ai(this.k.delete())}}class $o extends j{constructor(e,n){super(A.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ga(t){return t.name==="IndexedDbTransactionError"}class WM{constructor(e){this.store=e}put(e,n){let s;return n!==void 0?(M("SimpleDb","PUT",this.store.name,e,n),s=this.store.put(n,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),ai(s)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),ai(this.store.add(e))}get(e){return ai(this.store.get(e)).next(n=>(n===void 0&&(n=null),M("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),ai(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),ai(this.store.count())}W(e,n){const s=this.options(e,n),i=s.index?this.store.index(s.index):this.store;if(typeof i.getAll=="function"){const r=i.getAll(s.range);return new R((o,a)=>{r.onerror=l=>{a(l.target.error)},r.onsuccess=l=>{o(l.target.result)}})}{const r=this.cursor(s),o=[];return this.G(r,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const s=this.store.getAll(e,n===null?void 0:n);return new R((i,r)=>{s.onerror=o=>{r(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}H(e,n){M("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,n);s.J=!1;const i=this.cursor(s);return this.G(i,(r,o,a)=>a.delete())}Y(e,n){let s;n?s=e:(s={},n=e);const i=this.cursor(s);return this.G(i,n)}Z(e){const n=this.cursor({});return new R((s,i)=>{n.onerror=r=>{const o=y_(r.target.error);i(o)},n.onsuccess=r=>{const o=r.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}G(e,n){const s=[];return new R((i,r)=>{e.onerror=o=>{r(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new HM(a),c=n(a.primaryKey,a.value,l);if(c instanceof R){const u=c.catch(h=>(l.done(),R.reject(h)));s.push(u)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>R.waitFor(s))}options(e,n){let s;return e!==void 0&&(typeof e=="string"?s=e:n=e),{index:s,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const s=this.store.index(e.index);return e.J?s.openKeyCursor(e.range,n):s.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ai(t){return new R((e,n)=>{t.onsuccess=s=>{const i=s.target.result;e(i)},t.onerror=s=>{const i=y_(s.target.error);n(i)}})}let My=!1;function y_(t){const e=fi.S(ze());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const s=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return My||(My=!0,setTimeout(()=>{throw s},0)),s}}return t}/**
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
 */class v_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}v_._e=-1;function Vu(t){return t==null}function Nc(t){return t===0&&1/t==-1/0}function qM(t){return typeof t=="number"&&Number.isInteger(t)&&!Nc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ji(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}}class Il{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??at.RED,this.left=i??at.EMPTY,this.right=r??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new at(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,s,i,r){return this}insert(e,n,s){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fy(this.data.getIterator())}getIteratorFrom(e){return new Fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class Fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new ft(ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Nr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class XA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new XA("Invalid base64 string: "+r):r}}(e);return new bt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const KM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function js(t){if(Re(!!t),typeof t=="string"){let e=0;const n=KM.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Oi(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
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
 */function E_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function T_(t){const e=t.mapValue.fields.__previous_value__;return E_(e)?T_(e):e}function ma(t){const e=js(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
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
 */class zM{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ya{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ya("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ya&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Al={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ki(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?E_(t)?4:GM(t)?9007199254740991:10:Z()}function Gn(t,e){if(t===e)return!0;const n=ki(t);if(n!==ki(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ma(t).isEqual(ma(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=js(i.timestampValue),a=js(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return Oi(i.bytesValue).isEqual(Oi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return We(i.geoPointValue.latitude)===We(r.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return We(i.integerValue)===We(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=We(i.doubleValue),a=We(r.doubleValue);return o===a?Nc(o)===Nc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Nr(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Vy(o)!==Vy(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Gn(o[l],a[l])))return!1;return!0}(t,e);default:return Z()}}function va(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function Or(t,e){if(t===e)return 0;const n=ki(t),s=ki(e);if(n!==s)return Ee(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=We(r.integerValue||r.doubleValue),l=We(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Uy(t.timestampValue,e.timestampValue);case 4:return Uy(ma(t),ma(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(r,o){const a=Oi(r),l=Oi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ee(a[c],l[c]);if(u!==0)return u}return Ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Ee(We(r.latitude),We(o.latitude));return a!==0?a:Ee(We(r.longitude),We(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Or(a[c],l[c]);if(u)return u}return Ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===Al.mapValue&&o===Al.mapValue)return 0;if(r===Al.mapValue)return 1;if(o===Al.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=Ee(l[h],u[h]);if(d!==0)return d;const f=Or(a[l[h]],c[u[h]]);if(f!==0)return f}return Ee(l.length,u.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Uy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=js(t),s=js(e),i=Ee(n.seconds,s.seconds);return i!==0?i:Ee(n.nanos,s.nanos)}function kr(t){return df(t)}function df(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=js(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=df(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${df(n.fields[o])}`;return i+"}"}(t.mapValue):Z()}function $y(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ff(t){return!!t&&"integerValue"in t}function w_(t){return!!t&&"arrayValue"in t}function By(t){return!!t&&"nullValue"in t}function jy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ql(t){return!!t&&"mapValue"in t}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ji(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Bo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function GM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bo(n)}setAll(e){let n=ht.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Bo(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];ql(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ji(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new xt(Bo(this.value))}}function JA(t){const e=[];return ji(t.fields,(n,s)=>{const i=new ht([n]);if(ql(s)){const r=JA(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
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
 */class vt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,te.min(),te.min(),te.min(),xt.empty(),0)}static newFoundDocument(e,n,s,i){return new vt(e,1,n,te.min(),s,i,0)}static newNoDocument(e,n){return new vt(e,2,n,te.min(),te.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,te.min(),te.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oc{constructor(e,n){this.position=e,this.inclusive=n}}function Hy(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=Or(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Wy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function QM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ZA{}class qe extends ZA{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new XM(e,n,s):n==="array-contains"?new eV(e,s):n==="in"?new tV(e,s):n==="not-in"?new nV(e,s):n==="array-contains-any"?new sV(e,s):new qe(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new JM(e,s):new ZM(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Or(n,this.value)):n!==null&&ki(this.value)===ki(n)&&this.matchesComparison(Or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends ZA{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new An(e,n)}matches(e){return eb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function eb(t){return t.op==="and"}function tb(t){return YM(t)&&eb(t)}function YM(t){for(const e of t.filters)if(e instanceof An)return!1;return!0}function pf(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+kr(t.value);if(tb(t))return t.filters.map(e=>pf(e)).join(",");{const e=t.filters.map(n=>pf(n)).join(",");return`${t.op}(${e})`}}function nb(t,e){return t instanceof qe?function(s,i){return i instanceof qe&&s.op===i.op&&s.field.isEqual(i.field)&&Gn(s.value,i.value)}(t,e):t instanceof An?function(s,i){return i instanceof An&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&nb(o,i.filters[a]),!0):!1}(t,e):void Z()}function sb(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${kr(n.value)}`}(t):t instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(sb).join(" ,")+"}"}(t):"Filter"}class XM extends qe{constructor(e,n,s){super(e,n,s),this.key=G.fromName(s.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class JM extends qe{constructor(e,n){super(e,"in",n),this.keys=ib("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ZM extends qe{constructor(e,n){super(e,"not-in",n),this.keys=ib("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ib(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class eV extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return w_(n)&&va(n.arrayValue,this.value)}}class tV extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&va(this.value.arrayValue,n)}}class nV extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(va(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!va(this.value.arrayValue,n)}}class sV extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!w_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>va(this.value.arrayValue,s))}}/**
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
 */class iV{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function qy(t,e=null,n=[],s=[],i=null,r=null,o=null){return new iV(t,e,n,s,i,r,o)}function I_(t){const e=se(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>pf(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>kr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>kr(s)).join(",")),e.ce=n}return e.ce}function A_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!QM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wy(t.startAt,e.startAt)&&Wy(t.endAt,e.endAt)}function _f(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class to{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function rV(t,e,n,s,i,r,o,a){return new to(t,e,n,s,i,r,o,a)}function Fu(t){return new to(t)}function Ky(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rb(t){return t.collectionGroup!==null}function jo(t){const e=se(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ft(ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new Ea(r,s))}),n.has(ht.keyField().canonicalString())||e.le.push(new Ea(ht.keyField(),s))}return e.le}function $n(t){const e=se(t);return e.he||(e.he=oV(e,jo(t))),e.he}function oV(t,e){if(t.limitType==="F")return qy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new Ea(i.field,r)});const n=t.endAt?new Oc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Oc(t.startAt.position,t.startAt.inclusive):null;return qy(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function gf(t,e){const n=t.filters.concat([e]);return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kc(t,e,n){return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uu(t,e){return A_($n(t),$n(e))&&t.limitType===e.limitType}function ob(t){return`${I_($n(t))}|lt:${t.limitType}`}function Xi(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>sb(i)).join(", ")}]`),Vu(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>kr(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>kr(i)).join(",")),`Target(${s})`}($n(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):G.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of jo(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Hy(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,jo(s),i)||s.endAt&&!function(o,a,l){const c=Hy(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,jo(s),i))}(t,e)}function aV(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ab(t){return(e,n)=>{let s=!1;for(const i of jo(t)){const r=lV(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function lV(t,e,n){const s=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Or(l,c):Z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Z()}}/**
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
 */class no{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ji(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return YA(this.inner)}size(){return this.innerSize}}/**
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
 */const cV=new Fe(G.comparator);function fs(){return cV}const lb=new Fe(G.comparator);function Co(...t){let e=lb;for(const n of t)e=e.insert(n.key,n);return e}function cb(t){let e=lb;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function pi(){return Ho()}function ub(){return Ho()}function Ho(){return new no(t=>t.toString(),(t,e)=>t.isEqual(e))}const uV=new Fe(G.comparator),hV=new ft(G.comparator);function ce(...t){let e=hV;for(const n of t)e=e.add(n);return e}const dV=new ft(Ee);function fV(){return dV}/**
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
 */function hb(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nc(e)?"-0":e}}function db(t){return{integerValue:""+t}}function pV(t,e){return qM(e)?db(e):hb(t,e)}/**
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
 */class Bu{constructor(){this._=void 0}}function _V(t,e,n){return t instanceof Dc?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&E_(r)&&(r=T_(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof Ta?pb(t,e):t instanceof wa?_b(t,e):function(i,r){const o=fb(i,r),a=zy(o)+zy(i.Ie);return ff(o)&&ff(i.Ie)?db(a):hb(i.serializer,a)}(t,e)}function gV(t,e,n){return t instanceof Ta?pb(t,e):t instanceof wa?_b(t,e):n}function fb(t,e){return t instanceof xc?function(s){return ff(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class Dc extends Bu{}class Ta extends Bu{constructor(e){super(),this.elements=e}}function pb(t,e){const n=gb(e);for(const s of t.elements)n.some(i=>Gn(i,s))||n.push(s);return{arrayValue:{values:n}}}class wa extends Bu{constructor(e){super(),this.elements=e}}function _b(t,e){let n=gb(e);for(const s of t.elements)n=n.filter(i=>!Gn(i,s));return{arrayValue:{values:n}}}class xc extends Bu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function zy(t){return We(t.integerValue||t.doubleValue)}function gb(t){return w_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function mV(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof Ta&&i instanceof Ta||s instanceof wa&&i instanceof wa?Nr(s.elements,i.elements,Gn):s instanceof xc&&i instanceof xc?Gn(s.Ie,i.Ie):s instanceof Dc&&i instanceof Dc}(t.transform,e.transform)}class yV{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ju{}function mb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new b_(t.key,Tn.none()):new Qa(t.key,t.data,Tn.none());{const n=t.data,s=xt.empty();let i=new ft(ht.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Xs(t.key,s,new Qt(i.toArray()),Tn.none())}}function vV(t,e,n){t instanceof Qa?function(i,r,o){const a=i.value.clone(),l=Qy(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Xs?function(i,r,o){if(!Kl(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=Qy(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(yb(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wo(t,e,n,s){return t instanceof Qa?function(r,o,a,l){if(!Kl(r.precondition,o))return a;const c=r.value.clone(),u=Yy(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xs?function(r,o,a,l){if(!Kl(r.precondition,o))return a;const c=Yy(r.fieldTransforms,l,o),u=o.data;return u.setAll(yb(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return Kl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function EV(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=fb(s.transform,i||null);r!=null&&(n===null&&(n=xt.empty()),n.set(s.field,r))}return n||null}function Gy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&Nr(s,i,(r,o)=>mV(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qa extends ju{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xs extends ju{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function yb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Qy(t,e,n){const s=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,gV(o,a,n[i]))}return s}function Yy(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,_V(r,o,e))}return s}class b_ extends ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class TV extends ju{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wV{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&vV(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Wo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Wo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=ub();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=mb(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&Nr(this.mutations,e.mutations,(n,s)=>Gy(n,s))&&Nr(this.baseMutations,e.baseMutations,(n,s)=>Gy(n,s))}}class C_{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Re(e.mutations.length===s.length);let i=function(){return uV}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new C_(e,n,s,i)}}/**
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
 */class IV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class AV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,pe;function bV(t){switch(t){default:return Z();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function vb(t){if(t===void 0)return zn("GRPC error has no .code"),A.UNKNOWN;switch(t){case je.OK:return A.OK;case je.CANCELLED:return A.CANCELLED;case je.UNKNOWN:return A.UNKNOWN;case je.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case je.INTERNAL:return A.INTERNAL;case je.UNAVAILABLE:return A.UNAVAILABLE;case je.UNAUTHENTICATED:return A.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case je.NOT_FOUND:return A.NOT_FOUND;case je.ALREADY_EXISTS:return A.ALREADY_EXISTS;case je.PERMISSION_DENIED:return A.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case je.ABORTED:return A.ABORTED;case je.OUT_OF_RANGE:return A.OUT_OF_RANGE;case je.UNIMPLEMENTED:return A.UNIMPLEMENTED;case je.DATA_LOSS:return A.DATA_LOSS;default:return Z()}}(pe=je||(je={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function CV(){return new TextEncoder}/**
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
 */const SV=new Er([4294967295,4294967295],0);function Xy(t){const e=CV().encode(t),n=new RM;return n.update(e),new Uint8Array(n.digest())}function Jy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Er([n,s],0),new Er([i,r],0)]}class S_{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(s<0)throw new So(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Er.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(Er.fromNumber(s)));return i.compare(SV)===1&&(i=new Er([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Xy(e),[s,i]=Jy(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new S_(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Xy(e),[s,i]=Jy(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hu{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Ya.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hu(te.min(),i,new Fe(Ee),fs(),ce())}}class Ya{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ya(s,n,ce(),ce(),ce())}}/**
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
 */class zl{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class Eb{constructor(e,n){this.targetId=e,this.fe=n}}class Tb{constructor(e,n,s=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Zy{constructor(){this.ge=0,this.pe=tv(),this.ye=bt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ce(),n=ce(),s=ce();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:Z()}}),new Ya(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=tv()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Re(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class RV{constructor(e){this.Be=e,this.ke=new Map,this.qe=fs(),this.Qe=ev(),this.Ke=new Fe(Ee)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(_f(r))if(s===0){const o=new G(r.path);this.We(n,o,vt.newNoDocument(o,te.min()))}else Re(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=Oi(s).toUint8Array()}catch(l){if(l instanceof XA)return Pr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new S_(o,i,r)}catch(l){return Pr(l instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Be.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&_f(a.target)){const l=new G(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,vt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=ce();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new Hu(e,n,this.Ke,this.qe,s);return this.qe=fs(),this.Qe=ev(),this.Ke=new Fe(Ee),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Zy,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ft(Ee),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Zy),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function ev(){return new Fe(G.comparator)}function tv(){return new Fe(G.comparator)}const PV={asc:"ASCENDING",desc:"DESCENDING"},NV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OV={and:"AND",or:"OR"};class kV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function mf(t,e){return t.useProto3Json||Vu(e)?e:{value:e}}function Lc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function DV(t,e){return Lc(t,e.toTimestamp())}function Bn(t){return Re(!!t),te.fromTimestamp(function(n){const s=js(n);return new Ke(s.seconds,s.nanos)}(t))}function R_(t,e){return yf(t,e).canonicalString()}function yf(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ib(t){const e=Le.fromString(t);return Re(Rb(e)),e}function vf(t,e){return R_(t.databaseId,e.path)}function qh(t,e){const n=Ib(e);if(n.get(1)!==t.databaseId.projectId)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(bb(n))}function Ab(t,e){return R_(t.databaseId,e)}function xV(t){const e=Ib(t);return e.length===4?Le.emptyPath():bb(e)}function Ef(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bb(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nv(t,e,n){return{name:vf(t,e),fields:n.value.mapValue.fields}}function LV(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(Re(u===void 0||typeof u=="string"),bt.fromBase64String(u||"")):(Re(u===void 0||u instanceof Uint8Array),bt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:vb(c.code);return new j(u,c.message||"")}(o);n=new Tb(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=qh(t,s.document.name),r=Bn(s.document.updateTime),o=s.document.createTime?Bn(s.document.createTime):te.min(),a=new xt({mapValue:{fields:s.document.fields}}),l=vt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new zl(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=qh(t,s.document),r=s.readTime?Bn(s.readTime):te.min(),o=vt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new zl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=qh(t,s.document),r=s.removedTargetIds||[];n=new zl([],r,i,null)}else{if(!("filter"in e))return Z();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new AV(i,r),a=s.targetId;n=new Eb(a,o)}}return n}function MV(t,e){let n;if(e instanceof Qa)n={update:nv(t,e.key,e.value)};else if(e instanceof b_)n={delete:vf(t,e.key)};else if(e instanceof Xs)n={update:nv(t,e.key,e.data),updateMask:qV(e.fieldMask)};else{if(!(e instanceof TV))return Z();n={verify:vf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof Dc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ta)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw Z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:DV(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:Z()}(t,e.precondition)),n}function VV(t,e){return t&&t.length>0?(Re(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Bn(i.updateTime):Bn(r);return o.isEqual(te.min())&&(o=Bn(r)),new yV(o,i.transformResults||[])}(n,e))):[]}function FV(t,e){return{documents:[Ab(t,e.path)]}}function UV(t,e){const n={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Ab(t,i);const r=function(c){if(c.length!==0)return Sb(An.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Ji(d.field),direction:jV(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=mf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:i}}function $V(t){let e=xV(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Re(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const d=Cb(h);return d instanceof An&&tb(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Ea(Zi(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Vu(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Oc(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Oc(f,d)}(n.endAt)),rV(e,i,o,r,a,"F",l,c)}function BV(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Zi(n.unaryFilter.field);return qe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Zi(n.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zi(n.unaryFilter.field);return qe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zi(n.unaryFilter.field);return qe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(Zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(s=>Cb(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function jV(t){return PV[t]}function HV(t){return NV[t]}function WV(t){return OV[t]}function Ji(t){return{fieldPath:t.canonicalString()}}function Zi(t){return ht.fromServerFormat(t.fieldPath)}function Sb(t){return t instanceof qe?function(n){if(n.op==="=="){if(jy(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NAN"}};if(By(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jy(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NOT_NAN"}};if(By(n.value))return{unaryFilter:{field:Ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ji(n.field),op:HV(n.op),value:n.value}}}(t):t instanceof An?function(n){const s=n.getFilters().map(i=>Sb(i));return s.length===1?s[0]:{compositeFilter:{op:WV(n.op),filters:s}}}(t):Z()}function qV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ns{constructor(e,n,s,i,r=te.min(),o=te.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class KV{constructor(e){this.ct=e}}function zV(t){const e=$V({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class GV{constructor(){this._n=new QV}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Bs.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Bs.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class QV{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ft(Le.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ft(Le.comparator)).toArray()}}/**
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
 */class Dr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Dr(0)}static Ln(){return new Dr(-1)}}/**
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
 */class YV{constructor(){this.changes=new no(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class XV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JV{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Wo(s.mutation,i,Qt.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ce()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ce()){const i=pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Co();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=pi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ce()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=fs();const o=Ho(),a=function(){return Ho()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Xs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Wo(u.mutation,c,u.mutation.getFieldMask(),Ke.now())):o.set(c.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new XV(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ho();let i=new Fe((o,a)=>o-a),r=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Qt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ce()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=ub();u.forEach(d=>{if(!r.has(d)){const f=mb(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):R.resolve(pi());let a=-1,l=r;return o.next(c=>R.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ce())).next(u=>({batchId:a,changes:cb(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(s=>{let i=Co();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(e,r).next(a=>R.forEach(a,l=>{const c=function(h,d){return new to(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,vt.newInvalidDocument(u)))});let a=Co();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&Wo(u.mutation,c,Qt.empty(),Ke.now()),$u(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class ZV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Bn(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:zV(i.bundledQuery),readTime:Bn(i.readTime)}}(n)),R.resolve()}}/**
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
 */class eF{constructor(){this.overlays=new Fe(G.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=pi();return R.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ht(e,n,r)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.hr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.hr.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const i=pi(),r=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Fe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=pi(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=pi(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return R.resolve(a)}ht(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(s.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new IV(n,s));let r=this.hr.get(n);r===void 0&&(r=ce(),this.hr.set(n,r)),this.hr.set(n,r.add(s.key))}}/**
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
 */class P_{constructor(){this.Pr=new ft(et.Ir),this.Tr=new ft(et.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const s=new et(e,n);this.Pr=this.Pr.add(s),this.Tr=this.Tr.add(s)}dr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Ar(new et(e,n))}Rr(e,n){e.forEach(s=>this.removeReference(s,n))}Vr(e){const n=new G(new Le([])),s=new et(n,e),i=new et(n,e+1),r=[];return this.Tr.forEachInRange([s,i],o=>{this.Ar(o),r.push(o.key)}),r}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new Le([])),s=new et(n,e),i=new et(n,e+1);let r=ce();return this.Tr.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new et(e,0),s=this.Pr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class et{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||Ee(e.pr,n.pr)}static Er(e,n){return Ee(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class tF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ft(et.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wV(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new et(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.br(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([s,i],o=>{const a=this.Sr(o.pr);r.push(a)}),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ft(Ee);return n.forEach(i=>{const r=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([r,o],a=>{s=s.add(a.pr)})}),R.resolve(this.Dr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const o=new et(new G(r),0);let a=new ft(Ee);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(s=>{const i=this.Sr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.wr;return R.forEach(n.mutations,i=>{const r=new et(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=s})}Mn(e){}containsKey(e,n){const s=new et(n,0),i=this.wr.firstAfterOrEqual(s);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nF{constructor(e){this.vr=e,this.docs=function(){return new Fe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let s=fs();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=fs();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||$M(UM(u),s)<=0||(i.has(u.key)||$u(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,i){Z()}Fr(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new sF(this)}getSize(e){return R.resolve(this.size)}}class sF extends YV{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class iF{constructor(e){this.persistence=e,this.Mr=new no(n=>I_(n),A_),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Or=0,this.Nr=new P_,this.targetCount=0,this.Lr=Dr.Nn()}forEachTarget(e,n){return this.Mr.forEach((s,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Dr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Mr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(r).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.Mr.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.Nr.dr(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.Nr.Rr(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Nr.gr(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
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
 */class rF{constructor(e,n){this.Br={},this.overlays={},this.kr=new v_(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new iF(this),this.indexManager=new GV,this.remoteDocumentCache=function(i){return new nF(i)}(s=>this.referenceDelegate.Kr(s)),this.serializer=new KV(n),this.$r=new ZV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new tF(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,s){M("MemoryPersistence","Starting transaction:",e);const i=new oF(this.kr.next());return this.referenceDelegate.Ur(),s(i).next(r=>this.referenceDelegate.Wr(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gr(e,n){return R.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class oF extends jM{constructor(e){super(),this.currentSequenceNumber=e}}class N_{constructor(e){this.persistence=e,this.zr=new P_,this.jr=null}static Hr(e){return new N_(e)}get Jr(){if(this.jr)return this.jr;throw Z()}addReference(e,n,s){return this.zr.addReference(s,n),this.Jr.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.zr.removeReference(s,n),this.Jr.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Jr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,s=>{const i=G.fromPath(s);return this.Yr(e,i).next(r=>{r||n.removeEntry(i,te.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(s=>{s?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class O_{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.qi=s,this.Qi=i}static Ki(e,n){let s=ce(),i=ce();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new O_(e,n.fromCache,s,i)}}/**
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
 */class aF{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lF{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return fP()?8:fi.v(ze())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.ji(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.Hi(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new aF;return this.Ji(e,n,o).next(a=>{if(r.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>r.result)}Yi(e,n,s,i){return s.documentReadCount<this.Wi?(mo()<=le.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(mo()<=le.DEBUG&&M("QueryEngine","Query:",Xi(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Gi*i?(mo()<=le.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$n(n))):R.resolve())}ji(e,n){if(Ky(n))return R.resolve(null);let s=$n(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kc(n,null,"F"),s=$n(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ce(...r);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,kc(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,s,i){return Ky(n)||i.isEqual(te.min())?R.resolve(null):this.zi.getDocuments(e,s).next(r=>{const o=this.Zi(n,r);return this.Xi(n,o,s,i)?R.resolve(null):(mo()<=le.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xi(n)),this.es(e,o,n,FM(i,-1)).next(a=>a))})}Zi(e,n){let s=new ft(ab(e));return n.forEach((i,r)=>{$u(e,r)&&(s=s.add(r))}),s}Xi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(e,n,s){return mo()<=le.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Xi(n)),this.zi.getDocumentsMatchingQuery(e,n,Bs.min(),s)}es(e,n,s,i){return this.zi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class cF{constructor(e,n,s,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Fe(Ee),this.rs=new no(r=>I_(r),A_),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(s)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JV(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function uF(t,e,n,s){return new cF(t,e,n,s)}async function Pb(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ce();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function hF(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=R.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(m=>{const y=c.docVersions.get(g);Re(y!==null),m.version.compareTo(y)<0&&(h.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Nb(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function dF(t,e){const n=se(t),s=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(bt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(m,y,E){return m.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(r,f))});let l=fs(),c=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(fF(r,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!s.isEqual(te.min())){const u=n.Qr.getLastRemoteSnapshotVersion(r).next(h=>n.Qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.ns=i,r))}function fF(t,e,n){let s=ce(),i=ce();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=fs();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function pF(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function _F(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Qr.getTargetData(s,e).next(r=>r?(i=r,R.resolve(i)):n.Qr.allocateTargetId(s).next(o=>(i=new Ns(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ns.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(s.targetId,s),n.rs.set(e,s.targetId)),s})}async function Tf(t,e,n){const s=se(t),i=s.ns.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ga(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ns=s.ns.remove(e),s.rs.delete(i.target)}function sv(t,e,n){const s=se(t);let i=te.min(),r=ce();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=se(l),d=h.rs.get(u);return d!==void 0?R.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(s,o,$n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.ts.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?r:ce())).next(a=>(gF(s,aV(e),a),{documents:a,hs:r})))}function gF(t,e,n){let s=t.ss.get(e)||te.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.ss.set(e,s)}class iv{constructor(){this.activeTargetIds=fV()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mF{constructor(){this.no=new iv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,s){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new iv,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yF{io(e){}shutdown(){}}/**
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
 */class rv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bl=null;function Kh(){return bl===null?bl=function(){return 268435456+Math.round(2147483648*Math.random())}():bl++,"0x"+bl.toString(16)}/**
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
 */const vF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class EF{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const _t="WebChannelConnection";class TF extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=s+"://"+n.host,this.po=`projects/${i}/databases/${r}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get wo(){return!1}So(n,s,i,r,o){const a=Kh(),l=this.bo(n,s.toUriEncodedString());M("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,r,o),this.Co(n,l,c,i).then(u=>(M("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Pr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}vo(n,s,i,r,o,a){return this.So(n,s,i,r,o)}Do(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+eo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}bo(n,s){const i=vF[n];return`${this.fo}/v1/${s}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,s,i){const r=Kh();return new Promise((o,a)=>{const l=new SM;l.setWithCredentials(!0),l.listenOnce(bM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wh.NO_ERROR:const u=l.getResponseJson();M(_t,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Wh.TIMEOUT:M(_t,`RPC '${e}' ${r} timed out`),a(new j(A.DEADLINE_EXCEEDED,"Request time out"));break;case Wh.HTTP_ERROR:const h=l.getStatus();if(M(_t,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(E)>=0?E:A.UNKNOWN}(f.status);a(new j(g,f.message))}else a(new j(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(A.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{M(_t,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);M(_t,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}Fo(e,n,s){const i=Kh(),r=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=IM(),a=AM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");M(_t,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new EF({lo:y=>{f?M(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(d||(M(_t,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),M(_t,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},ho:()=>h.close()}),m=(y,E,C)=>{y.listen(E,T=>{try{C(T)}catch(b){setTimeout(()=>{throw b},0)}})};return m(h,wl.EventType.OPEN,()=>{f||M(_t,`RPC '${e}' stream ${i} transport opened.`)}),m(h,wl.EventType.CLOSE,()=>{f||(f=!0,M(_t,`RPC '${e}' stream ${i} transport closed`),g.Vo())}),m(h,wl.EventType.ERROR,y=>{f||(f=!0,Pr(_t,`RPC '${e}' stream ${i} transport errored:`,y),g.Vo(new j(A.UNAVAILABLE,"The operation could not be completed")))}),m(h,wl.EventType.MESSAGE,y=>{var E;if(!f){const C=y.data[0];Re(!!C);const T=C,b=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(b){M(_t,`RPC '${e}' stream ${i} received error:`,b);const B=b.status;let O=function(de){const ae=je[de];if(ae!==void 0)return vb(ae)}(B),q=b.message;O===void 0&&(O=A.INTERNAL,q="Unknown error status: "+B+" with message "+b.message),f=!0,g.Vo(new j(O,q)),h.close()}else M(_t,`RPC '${e}' stream ${i} received:`,C),g.mo(C)}}),m(a,CM.STAT_EVENT,y=>{y.stat===xy.PROXY?M(_t,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===xy.NOPROXY&&M(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function zh(){return typeof document<"u"?document:null}/**
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
 */function Wu(t){return new kV(t,!0)}/**
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
 */class Ob{constructor(e,n,s=1e3,i=1.5,r=6e4){this.oi=e,this.timerId=n,this.Mo=s,this.xo=i,this.Oo=r,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class kb{constructor(e,n,s,i,r,o,a,l){this.oi=e,this.$o=s,this.Uo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Ob(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Wo===n&&this.o_(s,i)},s=>{e(()=>{const i=new j(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.__(i)})})}o_(e,n){const s=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{s(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{s(()=>this.__(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wF extends kb{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=LV(this.serializer,e),s=function(r){if(!("targetChange"in r))return te.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Bn(o.readTime):te.min()}(e);return this.listener.u_(n,s)}c_(e){const n={};n.database=Ef(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=_f(l)?{documents:FV(r,l)}:{query:UV(r,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wb(r,o.resumeToken);const c=mf(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=Lc(r,o.snapshotVersion.toTimestamp());const c=mf(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=BV(this.serializer,e);s&&(n.labels=s),this.t_(n)}l_(e){const n={};n.database=Ef(this.serializer),n.removeTarget=e,this.t_(n)}}class IF extends kb{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=VV(e.writeResults,e.commitTime),s=Bn(e.commitTime);return this.listener.T_(s,n)}return Re(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ef(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>MV(this.serializer,s))};this.t_(n)}}/**
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
 */class AF extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.So(e,yf(n,s),i,r,o)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(A.UNKNOWN,r.toString())})}vo(e,n,s,i,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,yf(n,s),i,o,a,r)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(A.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class bF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(zn(n),this.g_=!1):M("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class CF{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=r,this.M_.io(o=>{s.enqueueAndForget(async()=>{Hi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=se(l);c.v_.add(4),await Xa(c),c.x_.set("Unknown"),c.v_.delete(4),await qu(c)}(this))})}),this.x_=new bF(s,i)}}async function qu(t){if(Hi(t))for(const e of t.F_)await e(!0)}async function Xa(t){for(const e of t.F_)await e(!1)}function Db(t,e){const n=se(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),L_(n)?x_(n):so(n).Jo()&&D_(n,e))}function k_(t,e){const n=se(t),s=so(n);n.C_.delete(e),s.Jo()&&xb(n,e),n.C_.size===0&&(s.Jo()?s.Xo():Hi(n)&&n.x_.set("Unknown"))}function D_(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}so(t).c_(e)}function xb(t,e){t.O_.Oe(e),so(t).l_(e)}function x_(t){t.O_=new RV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),so(t).start(),t.x_.p_()}function L_(t){return Hi(t)&&!so(t).Ho()&&t.C_.size>0}function Hi(t){return se(t).v_.size===0}function Lb(t){t.O_=void 0}async function SF(t){t.C_.forEach((e,n)=>{D_(t,e)})}async function RF(t,e){Lb(t),L_(t)?(t.x_.S_(e),x_(t)):t.x_.set("Unknown")}async function PF(t,e,n){if(t.x_.set("Online"),e instanceof Tb&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(s){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mc(t,s)}else if(e instanceof zl?t.O_.$e(e):e instanceof Eb?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(te.min()))try{const s=await Nb(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.C_.get(c);u&&r.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.C_.get(l);if(!u)return;r.C_.set(l,u.withResumeToken(bt.EMPTY_BYTE_STRING,u.snapshotVersion)),xb(r,l);const h=new Ns(u.target,l,c,u.sequenceNumber);D_(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){M("RemoteStore","Failed to raise snapshot:",s),await Mc(t,s)}}async function Mc(t,e,n){if(!Ga(e))throw e;t.v_.add(1),await Xa(t),t.x_.set("Offline"),n||(n=()=>Nb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await qu(t)})}function Mb(t,e){return e().catch(n=>Mc(t,n,e))}async function Ku(t){const e=se(t),n=Hs(e);let s=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;NF(e);)try{const i=await pF(e.localStore,s);if(i===null){e.D_.length===0&&n.Xo();break}s=i.batchId,OF(e,i)}catch(i){await Mc(e,i)}Vb(e)&&Fb(e)}function NF(t){return Hi(t)&&t.D_.length<10}function OF(t,e){t.D_.push(e);const n=Hs(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Vb(t){return Hi(t)&&!Hs(t).Ho()&&t.D_.length>0}function Fb(t){Hs(t).start()}async function kF(t){Hs(t).d_()}async function DF(t){const e=Hs(t);for(const n of t.D_)e.I_(n.mutations)}async function xF(t,e,n){const s=t.D_.shift(),i=C_.from(s,e,n);await Mb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ku(t)}async function LF(t,e){e&&Hs(t).P_&&await async function(s,i){if(function(o){return bV(o)&&o!==A.ABORTED}(i.code)){const r=s.D_.shift();Hs(s).Zo(),await Mb(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Ku(s)}}(t,e),Vb(t)&&Fb(t)}async function ov(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const s=Hi(n);n.v_.add(3),await Xa(n),s&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await qu(n)}async function MF(t,e){const n=se(t);e?(n.v_.delete(2),await qu(n)):e||(n.v_.add(2),await Xa(n),n.x_.set("Unknown"))}function so(t){return t.N_||(t.N_=function(n,s,i){const r=se(n);return r.R_(),new wF(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Po:SF.bind(null,t),To:RF.bind(null,t),u_:PF.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),L_(t)?x_(t):t.x_.set("Unknown")):(await t.N_.stop(),Lb(t))})),t.N_}function Hs(t){return t.L_||(t.L_=function(n,s,i){const r=se(n);return r.R_(),new IF(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{Po:kF.bind(null,t),To:LF.bind(null,t),E_:DF.bind(null,t),T_:xF.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ku(t)):(await t.L_.stop(),t.D_.length>0&&(M("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class M_{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new M_(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function V_(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Ga(t))return new j(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Tr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||G.comparator(n.key,s.key):(n,s)=>G.comparator(n.key,s.key),this.keyedMap=Co(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Tr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Tr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Tr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class av{constructor(){this.B_=new Fe(G.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):Z():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class xr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xr(e,n,Tr.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class VF{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class FF{constructor(){this.queries=new no(e=>ob(e),Uu),this.onlineState="Unknown",this.W_=new Set}}async function F_(t,e){const n=se(t);let s=3;const i=e.query;let r=n.queries.get(i);r?!r.K_()&&e.U_()&&(s=2):(r=new VF,s=e.U_()?0:1);try{switch(s){case 0:r.q_=await n.onListen(i,!0);break;case 1:r.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=V_(o,`Initialization of query '${Xi(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,r),r.Q_.push(e),e.G_(n.onlineState),r.q_&&e.z_(r.q_)&&$_(n)}async function U_(t,e){const n=se(t),s=e.query;let i=3;const r=n.queries.get(s);if(r){const o=r.Q_.indexOf(e);o>=0&&(r.Q_.splice(o,1),r.Q_.length===0?i=e.U_()?0:1:!r.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function UF(t,e){const n=se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.Q_)a.z_(i)&&(s=!0);o.q_=i}}s&&$_(n)}function $F(t,e,n){const s=se(t),i=s.queries.get(e);if(i)for(const r of i.Q_)r.onError(n);s.queries.delete(e)}function $_(t){t.W_.forEach(e=>{e.next()})}var wf,lv;(lv=wf||(wf={})).j_="default",lv.Cache="cache";class B_{constructor(e,n,s){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=s||{}}z_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new xr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const s=n!=="Offline";return(!this.options.ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==wf.Cache}}/**
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
 */class Ub{constructor(e){this.key=e}}class $b{constructor(e){this.key=e}}class BF{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ce(),this.mutatedKeys=ce(),this.ha=ab(e),this.Pa=new Tr(this.ha)}get Ia(){return this.ua}Ta(e,n){const s=n?n.Ea:new av,i=n?n.Pa:this.Pa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=$u(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?g!==m&&(s.track({type:3,doc:f}),y=!0):this.da(d,f)||(s.track({type:2,doc:f}),y=!0,(l&&this.ha(f,l)>0||c&&this.ha(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),y=!0):d&&!f&&(s.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),r=m?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Pa:o,Ea:s,Xi:a,mutatedKeys:r}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,i){const r=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(f,g){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return m(f)-m(g)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(s),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new xr(this.query,e.Pa,r,o,e.mutatedKeys,l===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new av,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ce(),this.Pa.forEach(s=>{this.ma(s.key)&&(this.la=this.la.add(s.key))});const n=[];return e.forEach(s=>{this.la.has(s)||n.push(new $b(s))}),this.la.forEach(s=>{e.has(s)||n.push(new Ub(s))}),n}fa(e){this.ua=e.hs,this.la=ce();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return xr.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class jF{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class HF{constructor(e){this.key=e,this.pa=!1}}class WF{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new no(a=>ob(a),Uu),this.Sa=new Map,this.ba=new Set,this.Da=new Fe(G.comparator),this.Ca=new Map,this.va=new P_,this.Fa={},this.Ma=new Map,this.xa=Dr.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function qF(t,e,n=!0){const s=Kb(t);let i;const r=s.wa.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.ga()):i=await Bb(s,e,n,!0),i}async function KF(t,e){const n=Kb(t);await Bb(n,e,!0,!1)}async function Bb(t,e,n,s){const i=await _F(t.localStore,$n(e)),r=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(r):"not-current";let a;return s&&(a=await zF(t,e,r,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Db(t.remoteStore,i),a}async function zF(t,e,n,s,i){t.Na=(h,d,f)=>async function(m,y,E,C){let T=y.view.Ta(E);T.Xi&&(T=await sv(m.localStore,y.query,!1).then(({documents:q})=>y.view.Ta(q,T)));const b=C&&C.targetChanges.get(y.targetId),B=C&&C.targetMismatches.get(y.targetId)!=null,O=y.view.applyChanges(T,m.isPrimaryClient,b,B);return uv(m,y.targetId,O.Va),O.snapshot}(t,h,d,f);const r=await sv(t.localStore,e,!0),o=new BF(e,r.hs),a=o.Ta(r.documents),l=Ya.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);uv(t,n,c.Va);const u=new jF(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),c.snapshot}async function GF(t,e,n){const s=se(t),i=s.wa.get(e),r=s.Sa.get(i.targetId);if(r.length>1)return s.Sa.set(i.targetId,r.filter(o=>!Uu(o,e))),void s.wa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await Tf(s.localStore,i.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(i.targetId),n&&k_(s.remoteStore,i.targetId),If(s,i.targetId)}).catch(za)):(If(s,i.targetId),await Tf(s.localStore,i.targetId,!0))}async function QF(t,e){const n=se(t),s=n.wa.get(e),i=n.Sa.get(s.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),k_(n.remoteStore,s.targetId))}async function YF(t,e,n){const s=sU(t);try{const i=await function(o,a){const l=se(o),c=Ke.now(),u=a.reduce((f,g)=>f.add(g.key),ce());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=fs(),m=ce();return l.os.getEntries(f,u).next(y=>{g=y,g.forEach((E,C)=>{C.isValidDocument()||(m=m.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(y=>{h=y;const E=[];for(const C of a){const T=EV(C,h.get(C.key).overlayedDocument);T!=null&&E.push(new Xs(C.key,T,JA(T.value.mapValue),Tn.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,E,a)}).next(y=>{d=y;const E=y.applyToLocalDocumentSet(h,m);return l.documentOverlayCache.saveOverlays(f,y.batchId,E)})}).then(()=>({batchId:d.batchId,changes:cb(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new Fe(Ee)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(s,i.batchId,n),await Ja(s,i.changes),await Ku(s.remoteStore)}catch(i){const r=V_(i,"Failed to persist write");n.reject(r)}}async function jb(t,e){const n=se(t);try{const s=await dF(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.Ca.get(r);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?Re(o.pa):i.removedDocuments.size>0&&(Re(o.pa),o.pa=!1))}),await Ja(n,s,e)}catch(s){await za(s)}}function cv(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wa.forEach((r,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&$_(l)}(s.eventManager,e),i.length&&s.ya.u_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function XF(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Ca.get(e),r=i&&i.key;if(r){let o=new Fe(G.comparator);o=o.insert(r,vt.newNoDocument(r,te.min()));const a=ce().add(r),l=new Hu(te.min(),new Map,new Fe(Ee),o,a);await jb(s,l),s.Da=s.Da.remove(r),s.Ca.delete(e),j_(s)}else await Tf(s.localStore,e,!1).then(()=>If(s,e,n)).catch(za)}async function JF(t,e){const n=se(t),s=e.batch.batchId;try{const i=await hF(n.localStore,e);Wb(n,s,null),Hb(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ja(n,i)}catch(i){await za(i)}}async function ZF(t,e,n){const s=se(t);try{const i=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Re(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);Wb(s,e,n),Hb(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ja(s,i)}catch(i){await za(i)}}function Hb(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function Wb(t,e,n){const s=se(t);let i=s.Fa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Fa[s.currentUser.toKey()]=i}}function If(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Sa.get(e))t.wa.delete(s),n&&t.ya.La(s,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(s=>{t.va.containsKey(s)||qb(t,s)})}function qb(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(k_(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),j_(t))}function uv(t,e,n){for(const s of n)s instanceof Ub?(t.va.addReference(s.key,e),eU(t,s)):s instanceof $b?(M("SyncEngine","Document no longer in limbo: "+s.key),t.va.removeReference(s.key,e),t.va.containsKey(s.key)||qb(t,s.key)):Z()}function eU(t,e){const n=e.key,s=n.path.canonicalString();t.Da.get(n)||t.ba.has(s)||(M("SyncEngine","New document in limbo: "+n),t.ba.add(s),j_(t))}function j_(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new G(Le.fromString(e)),s=t.xa.next();t.Ca.set(s,new HF(n)),t.Da=t.Da.insert(n,s),Db(t.remoteStore,new Ns($n(Fu(n.path)),s,"TargetPurposeLimboResolution",v_._e))}}async function Ja(t,e,n){const s=se(t),i=[],r=[],o=[];s.wa.isEmpty()||(s.wa.forEach((a,l)=>{o.push(s.Na(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=O_.Ki(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.ya.u_(i),await async function(l,c){const u=se(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(c,d=>R.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>R.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ga(h))throw h;M("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),g=f.snapshotVersion,m=f.withLastLimboFreeSnapshotVersion(g);u.ns=u.ns.insert(d,m)}}}(s.localStore,r))}async function tU(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const s=await Pb(n.localStore,e);n.currentUser=e,function(r,o){r.Ma.forEach(a=>{a.forEach(l=>{l.reject(new j(A.CANCELLED,o))})}),r.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ja(n,s.us)}}function nU(t,e){const n=se(t),s=n.Ca.get(e);if(s&&s.pa)return ce().add(s.key);{let i=ce();const r=n.Sa.get(e);if(!r)return i;for(const o of r){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function Kb(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XF.bind(null,e),e.ya.u_=UF.bind(null,e.eventManager),e.ya.La=$F.bind(null,e.eventManager),e}function sU(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZF.bind(null,e),e}class hv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Wu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return uF(this.persistence,new lF,e.initialUser,this.serializer)}createPersistence(e){return new rF(N_.Hr,this.serializer)}createSharedClientState(e){return new mF}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iU{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>cv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tU.bind(null,this.syncEngine),await MF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FF}()}createDatastore(e){const n=Wu(e.databaseInfo.databaseId),s=function(r){return new TF(r)}(e.databaseInfo);return function(r,o,a,l){return new AF(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new CF(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>cv(this.syncEngine,n,0),function(){return rv.D()?new rv:new yF}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new WF(i,r,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(s){const i=se(s);M("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Xa(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class H_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class rU{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=QA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{M("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(M("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=V_(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gh(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Pb(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aU(t);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>ov(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>ov(e.remoteStore,i)),t._onlineComponents=e}function oU(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function aU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!oU(n))throw n;Pr("Error using user provided cache. Falling back to memory cache: "+n),await Gh(t,new hv)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Gh(t,new hv);return t._offlineComponents}async function zb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await dv(t,t._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await dv(t,new iU))),t._onlineComponents}function lU(t){return zb(t).then(e=>e.syncEngine)}async function Vc(t){const e=await zb(t),n=e.eventManager;return n.onListen=qF.bind(null,e.syncEngine),n.onUnlisten=GF.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KF.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QF.bind(null,e.syncEngine),n}function cU(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new H_({next:d=>{o.enqueueAndForget(()=>U_(r,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new j(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new j(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new B_(Fu(a.path),u,{includeMetadataChanges:!0,ta:!0});return F_(r,h)}(await Vc(t),t.asyncQueue,e,n,s)),s.promise}function uU(t,e,n={}){const s=new Un;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new H_({next:d=>{o.enqueueAndForget(()=>U_(r,h)),d.fromCache&&l.source==="server"?c.reject(new j(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new B_(a,u,{includeMetadataChanges:!0,ta:!0});return F_(r,h)}(await Vc(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Gb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fv=new Map;/**
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
 */function Qb(t,e,n){if(!n)throw new j(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hU(t,e,n,s){if(e===!0&&s===!0)throw new j(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pv(t){if(!G.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _v(t){if(G.isDocumentKey(t))throw new j(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zu(t);throw new j(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function dU(t,e){if(e<=0)throw new j(A.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class gv{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new j(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hU("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(A.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gv(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new PM;switch(s.type){case"firstParty":return new DM(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=fv.get(n);s&&(M("ComponentProvider","Removing Datastore"),fv.delete(n),s.terminate())}(this),Promise.resolve()}}function fU(t,e,n,s={}){var i;const r=(t=Jt(t,Gu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=gt.MOCK_USER;else{a=cP(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new j(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(c)}t._authCredentials=new NM(new GA(a,l))}}/**
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
 */class ms{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ms(this.firestore,e,this._query)}}class At{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class Ms extends ms{constructor(e,n,s){super(e,n,Fu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new G(e))}withConverter(e){return new Ms(this.firestore,e,this._path)}}function Qu(t,e,...n){if(t=st(t),Qb("collection","path",e),t instanceof Gu){const s=Le.fromString(e,...n);return _v(s),new Ms(t,null,s)}{if(!(t instanceof At||t instanceof Ms))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return _v(s),new Ms(t.firestore,null,s)}}function pU(t,e,...n){if(t=st(t),arguments.length===1&&(e=QA.newId()),Qb("doc","path",e),t instanceof Gu){const s=Le.fromString(e,...n);return pv(s),new At(t,null,new G(s))}{if(!(t instanceof At||t instanceof Ms))throw new j(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return pv(s),new At(t.firestore,t instanceof Ms?t.converter:null,new G(s))}}/**
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
 */class _U{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Ob(this,"async_queue_retry"),this.cu=()=>{const n=zh();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Un;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ga(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(s=>{this.ou=s,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw zn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this._u=!1,s))));return this.nu=n,n}enqueueAfterDelay(e,n,s){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=M_.createAndSchedule(this,e,n,s,r=>this.Iu(r));return this.su.push(i),i}lu(){this.ou&&Z()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function mv(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ws extends Gu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new _U}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yb(this),this._firestoreClient.terminate()}}function gU(t,e){const n=typeof t=="object"?t:op(),s=typeof t=="string"?t:e||"(default)",i=uu(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=aP("firestore");r&&fU(i,...r)}return i}function Yu(t){return t._firestoreClient||Yb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yb(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new zM(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Gb(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new rU(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lr(bt.fromBase64String(e))}catch(n){throw new j(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lr(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class W_{constructor(e){this._methodName=e}}/**
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
 */class Ju{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
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
 */const mU=/^__.*__$/;class yU{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Xs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}class Xb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Xs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Jb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class q_{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Ru(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new q_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:s,gu:!1});return i.pu(e),i}yu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:s,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Fc(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(Jb(this.Vu)&&mU.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class vU{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Wu(e)}Cu(e,n,s,i=!1){return new q_({Vu:e,methodName:n,Du:s,path:ht.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function K_(t){const e=t._freezeSettings(),n=Wu(t._databaseId);return new vU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function EU(t,e,n,s,i,r={}){const o=t.Cu(r.merge||r.mergeFields?2:0,e,n,i);z_("Data must be an object, but it was:",o,s);const a=Zb(s,o);let l,c;if(r.merge)l=new Qt(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=Af(e,h,n);if(!o.contains(d))throw new j(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tC(u,d)||u.push(d)}l=new Qt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new yU(new xt(a),l,c)}class Zu extends W_{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zu}}function TU(t,e,n,s){const i=t.Cu(1,e,n);z_("Data must be an object, but it was:",i,s);const r=[],o=xt.empty();ji(s,(l,c)=>{const u=G_(e,l,n);c=st(c);const h=i.yu(u);if(c instanceof Zu)r.push(u);else{const d=Za(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Qt(r);return new Xb(o,a,i.fieldTransforms)}function wU(t,e,n,s,i,r){const o=t.Cu(1,e,n),a=[Af(e,s,n)],l=[i];if(r.length%2!=0)throw new j(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(Af(e,r[d])),l.push(r[d+1]);const c=[],u=xt.empty();for(let d=a.length-1;d>=0;--d)if(!tC(c,a[d])){const f=a[d];let g=l[d];g=st(g);const m=o.yu(f);if(g instanceof Zu)c.push(f);else{const y=Za(g,m);y!=null&&(c.push(f),u.set(f,y))}}const h=new Qt(c);return new Xb(u,h,o.fieldTransforms)}function IU(t,e,n,s=!1){return Za(n,t.Cu(s?4:3,e))}function Za(t,e){if(eC(t=st(t)))return z_("Unsupported field value:",e,t),Zb(t,e);if(t instanceof W_)return function(s,i){if(!Jb(i.Vu))throw i.Su(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=Za(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=st(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return pV(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ke.fromDate(s);return{timestampValue:Lc(i.serializer,r)}}if(s instanceof Ke){const r=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Lc(i.serializer,r)}}if(s instanceof Ju)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Lr)return{bytesValue:wb(i.serializer,s._byteString)};if(s instanceof At){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:R_(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.Su(`Unsupported field value: ${zu(s)}`)}(t,e)}function Zb(t,e){const n={};return YA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ji(t,(s,i)=>{const r=Za(i,e.fu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function eC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof Ju||t instanceof Lr||t instanceof At||t instanceof W_)}function z_(t,e,n){if(!eC(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=zu(n);throw s==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+s)}}function Af(t,e,n){if((e=st(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return G_(t,e);throw Fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const AU=new RegExp("[~\\*/\\[\\]]");function G_(t,e,n){if(e.search(AU)>=0)throw Fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xu(...e.split("."))._internalPath}catch{throw Fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fc(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new j(A.INVALID_ARGUMENT,a+t+l)}function tC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class nC{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(eh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bU extends nC{data(){return super.data()}}function eh(t,e){return typeof e=="string"?G_(t,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}/**
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
 */function sC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Q_{}class Y_ extends Q_{}function CU(t,e,...n){let s=[];e instanceof Q_&&s.push(e),s=s.concat(n),function(r){const o=r.filter(l=>l instanceof X_).length,a=r.filter(l=>l instanceof th).length;if(o>1||o>0&&a>0)throw new j(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class th extends Y_{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new th(e,n,s)}_apply(e){const n=this._parse(e);return iC(e._query,n),new ms(e.firestore,e.converter,gf(e._query,n))}_parse(e){const n=K_(e.firestore);return function(r,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new j(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){vv(h,u);const f=[];for(const g of h)f.push(yv(l,r,g));d={arrayValue:{values:f}}}else d=yv(l,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||vv(h,u),d=IU(a,o,h,u==="in"||u==="not-in");return qe.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function SU(t,e,n){const s=e,i=eh("where",t);return th._create(i,s,n)}class X_ extends Q_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new X_(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:An.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,r){let o=i;const a=r.getFlattenedFilters();for(const l of a)iC(o,l),o=gf(o,l)}(e._query,n),new ms(e.firestore,e.converter,gf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class J_ extends Y_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new J_(e,n)}_apply(e){const n=function(i,r,o){if(i.startAt!==null)throw new j(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ea(r,o)}(e._query,this._field,this._direction);return new ms(e.firestore,e.converter,function(i,r){const o=i.explicitOrderBy.concat([r]);return new to(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function oW(t,e="asc"){const n=e,s=eh("orderBy",t);return J_._create(s,n)}class Z_ extends Y_{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Z_(e,n,s)}_apply(e){return new ms(e.firestore,e.converter,kc(e._query,this._limit,this._limitType))}}function RU(t){return dU("limit",t),Z_._create("limit",t,"F")}function yv(t,e,n){if(typeof(n=st(n))=="string"){if(n==="")throw new j(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rb(e)&&n.indexOf("/")!==-1)throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Le.fromString(n));if(!G.isDocumentKey(s))throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return $y(t,new G(s))}if(n instanceof At)return $y(t,n._key);throw new j(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zu(n)}.`)}function vv(t,e){if(!Array.isArray(t)||t.length===0)throw new j(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iC(t,e){const n=function(i,r){for(const o of i)for(const a of o.getFlattenedFilters())if(r.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PU{convertValue(e,n="none"){switch(ki(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ji(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Ju(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=T_(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ma(e));default:return null}}convertTimestamp(e){const n=js(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Le.fromString(e);Re(Rb(s));const i=new ya(s.get(1),s.get(3)),r=new G(s.popFirst(5));return i.isEqual(n)||zn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function NU(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rC extends nC{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(eh("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Gl extends rC{data(e={}){return super.data(e)}}class oC{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ro(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Gl(this._firestore,this._userDataWriter,s.key,s,new Ro(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ro(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ro(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:OU(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}/**
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
 */function aC(t){t=Jt(t,At);const e=Jt(t.firestore,Ws);return cU(Yu(e),t._key).then(n=>lC(e,t,n))}class eg extends PU{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function kU(t){t=Jt(t,ms);const e=Jt(t.firestore,Ws),n=Yu(e),s=new eg(e);return sC(t._query),uU(n,t._query).then(i=>new oC(e,s,t,i))}function DU(t,e,n){t=Jt(t,At);const s=Jt(t.firestore,Ws),i=NU(t.converter,e,n);return ng(s,[EU(K_(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Tn.none())])}function aW(t,e,n,...s){t=Jt(t,At);const i=Jt(t.firestore,Ws),r=K_(i);let o;return o=typeof(e=st(e))=="string"||e instanceof Xu?wU(r,"updateDoc",t._key,e,n,s):TU(r,"updateDoc",t._key,e),ng(i,[o.toMutation(t._key,Tn.exists(!0))])}function lW(t){return ng(Jt(t.firestore,Ws),[new b_(t._key,Tn.none())])}function tg(t,...e){var n,s,i;t=st(t);let r={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||mv(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(mv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof At)c=Jt(t.firestore,Ws),u=Fu(t._key.path),l={next:h=>{e[o]&&e[o](lC(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Jt(t,ms);c=Jt(h.firestore,Ws),u=h._query;const d=new eg(c);l={next:f=>{e[o]&&e[o](new oC(c,d,h,f))},error:e[o+1],complete:e[o+2]},sC(t._query)}return function(d,f,g,m){const y=new H_(m),E=new B_(f,y,g);return d.asyncQueue.enqueueAndForget(async()=>F_(await Vc(d),E)),()=>{y.Qa(),d.asyncQueue.enqueueAndForget(async()=>U_(await Vc(d),E))}}(Yu(c),u,a,l)}function ng(t,e){return function(s,i){const r=new Un;return s.asyncQueue.enqueueAndForget(async()=>YF(await lU(s),i,r)),r.promise}(Yu(t),e)}function lC(t,e,n){const s=n.docs.get(e._key),i=new eg(t);return new rC(t,i,e._key,s,new Ro(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){eo=i})(Gs),qn(new wn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ws(new OM(s.getProvider("auth-internal")),new LM(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ya(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Yt(Ly,"4.5.0",e),Yt(Ly,"4.5.0","esm2017")})();/**
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
 */const cC="firebasestorage.googleapis.com",xU="storageBucket",LU=2*60*1e3,MU=10*60*1e3;/**
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
 */class Jn extends Xn{constructor(e,n,s=0){super(Qh(e),`Firebase Storage: ${n} (${Qh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qn||(Qn={}));function Qh(t){return"storage/"+t}function VU(){const t="An unknown error occurred, please check the error payload for server response.";return new Jn(Qn.UNKNOWN,t)}function FU(){return new Jn(Qn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UU(){return new Jn(Qn.CANCELED,"User canceled the upload/download.")}function $U(t){return new Jn(Qn.INVALID_URL,"Invalid URL '"+t+"'.")}function BU(t){return new Jn(Qn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ev(t){return new Jn(Qn.INVALID_ARGUMENT,t)}function uC(){return new Jn(Qn.APP_DELETED,"The Firebase app was deleted.")}function jU(t){return new Jn(Qn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(s.path==="")return s;throw BU(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=n===cC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",E=new RegExp(`^https?://${m}/${i}/${y}`,"i"),T=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){const B=T[b],O=B.regex.exec(e);if(O){const q=O[B.indices.bucket];let J=O[B.indices.path];J||(J=""),s=new mn(q,J),B.postModify(s);break}}if(s==null)throw $U(e);return s}}class HU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function WU(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(f,l())},y)}function d(){r&&clearTimeout(r)}function f(y,...E){if(c){d();return}if(y){d(),u.call(null,y,...E);return}if(l()||o){d(),u.call(null,y,...E);return}s<64&&(s*=2);let T;a===1?(a=2,T=0):T=(s+Math.random())*1e3,h(T)}let g=!1;function m(y){g||(g=!0,d(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,m(!0)},n),m}function qU(t){t(!1)}/**
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
 */function KU(t){return t!==void 0}function Tv(t,e,n,s){if(s<e)throw Ev(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Ev(`Invalid value for '${t}'. Expected ${n} or less.`)}function zU(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Uc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Uc||(Uc={}));/**
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
 */function GU(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
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
 */class QU{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Cl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Uc.NO_ERROR,l=r.getStatus();if(!a||GU(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Uc.ABORT;s(!1,new Cl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Cl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());KU(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=VU();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?uC():UU();o(l)}else{const l=FU();o(l)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=WU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function YU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function e2(t,e,n,s,i,r,o=!0){const a=zU(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return JU(c,e),YU(c,n),XU(c,r),ZU(c,s),new QU(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function t2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function n2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class $c{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $c(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return n2(this._location.path)}get storage(){return this._service}get parent(){const e=t2(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new $c(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jU(e)}}function wv(t,e){const n=e==null?void 0:e[xU];return n==null?null:mn.makeFromBucketSpec(n,t)}class s2{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=cC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LU,this._maxUploadRetryTime=MU,this._requests=new Set,i!=null?this._bucket=mn.makeFromBucketSpec(i,this._host):this._bucket=wv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=wv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $c(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new HU(uC());{const o=e2(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Iv="@firebase/storage",Av="0.12.2";/**
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
 */const i2="storage";function r2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new s2(n,s,i,e,Gs)}function o2(){qn(new wn(i2,r2,"PUBLIC").setMultipleInstances(!0)),Yt(Iv,Av,""),Yt(Iv,Av,"esm2017")}o2();const Yh=new WeakMap;function hC(t,e){return Yh.has(e)||Yh.set(e,t||{f:{},r:{},s:{},u:{}}),Yh.get(e)}function a2(t,e,n,s){if(!t)return n;const[i,r]=dC(t);if(!i)return n;const o=hC(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function l2(t,e,n,s){if(!t)return;const[i,r]=dC(t);if(!i)return;const o=hC(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(kn),a}function dC(t){return CD(t)||SD(t)?["f",t.path]:RD(t)?["r",t.toString()]:PD(t)?["s",t.toString()]:[]}const Xh=new WeakMap;function c2(t,e,n){const s=_u();Xh.has(s)||Xh.set(s,new Map);const i=Xh.get(s),r=l2(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):kn}const u2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function bf(t,e,n,s){if(!AD(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof Ke||g instanceof Ju)h[f]=g;else if(Cp(g)){const m=c+f;h[f]=m in n?l[f]:g.path,d[m]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let m=0;m<g.length;m++){const y=g[m];y&&y.path in r&&(h[f][m]=r[y.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else Fi(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",i),i}const sg={reset:!1,wait:!0,maxRefDepth:2,converter:u2,snapshotOptions:{serverTimestamps:"estimate"}};function Bc(t){for(const e in t)t[e].unsub()}function Cf(t,e,n,s,i,r,o,a,l){const[c,u]=bf(s.data(t.snapshotOptions),bp(e,n),i,t);r.set(e,n,c),Sf(t,e,n,i,u,r,o,a,l)}function h2({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=kn;return a.once?aC(t).then(u=>{u.exists()?Cf(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=tg(t,u=>{u.exists()?Cf(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),Bc(l)}}function Sf(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(m=>c.indexOf(m)<0).forEach(m=>{s[m].unsub(),delete s[m]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(m){m in f&&++h>=d&&a(n)}c.forEach(m=>{const y=s[m],E=i[m],C=`${n}.${m}`;if(f[C]=!0,y)if(y.path!==E.path)y.unsub();else return;s[m]={data:()=>bp(e,C),unsub:h2({ref:E,target:e,path:C,depth:o,ops:r,resolve:g.bind(null,C),reject:l},t),path:E.path}})}function d2(t,e,n,s,i,r){const o=Object.assign({},sg,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=yn(c?[]:t.value);c||n.set(t,h,[]);const f=s;let g,m=kn;const y=[],E={added:({newIndex:T,doc:b})=>{y.splice(T,0,Object.create(null));const B=y[T],[O,q]=bf(b.data(l),void 0,B,o);n.add(es(d),T,O),Sf(o,d,`${h}.${T}`,B,q,n,0,s.bind(null,b),i)},modified:({oldIndex:T,newIndex:b,doc:B})=>{const O=es(d),q=y[T],J=O[T],[de,ae]=bf(B.data(l),J,q,o);y.splice(b,0,q),n.remove(O,T),n.add(O,b,de),Sf(o,d,`${h}.${b}`,q,ae,n,0,s,i)},removed:({oldIndex:T})=>{const b=es(d);n.remove(b,T),Bc(y.splice(T,1)[0])}};function C(T){const b=T.docChanges(a);if(!g&&b.length){g=!0;let B=0;const O=b.length,q=Object.create(null);for(let J=0;J<O;J++)q[b[J].doc.id]=!0;s=J=>{J&&J.id in q&&++B>=O&&(c&&(n.set(t,h,es(d)),d=t),f(es(d)),s=kn)}}b.forEach(B=>{E[B.type](B)}),b.length||(c&&(n.set(t,h,es(d)),d=t),s(es(d)))}return u?kU(e).then(C).catch(i):m=tg(e,C,i),T=>{if(m(),T){const b=typeof T=="function"?T():[];n.set(t,h,b)}y.forEach(Bc)}}function f2(t,e,n,s,i,r){const o=Object.assign({},sg,r),a="value",l=Object.create(null);s=ND(s,()=>bp(t,a));let c=kn;function u(h){h.exists()?Cf(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?aC(e).then(u).catch(i):c=tg(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}Bc(l)}}const bv=Symbol();function fC(t,e){let n=kn;const s=Object.assign({},sg,e),i=es(t),r=s.target||yn();kD()&&(s.once=!0);const o=a2(i,s.ssrKey,bv,_u()),a=o!==bv;a&&(r.value=o);let l=!a;const c=yn(!1),u=yn(),h=JE(),d=xE();let f=kn;function g(){let E=es(t);const C=new Promise((T,b)=>{if(n(s.reset),!E)return n=kn,T(null);c.value=l,l=!0,E.converter||(E=E.withConverter(s.converter)),n=(Cp(E)?f2:d2)(r,E,p2,T,b,s)}).catch(T=>(h.value===C&&(u.value=T),Promise.reject(T))).finally(()=>{h.value===C&&(c.value=!1)});h.value=C}let m=kn;(Nt(t)||typeof t=="function")&&(m=No(t,g)),g(),i&&(f=c2(h.value,i,s.ssrKey)),ST()&&pT(()=>h.value),d&&BS(y);function y(E=s.reset){m(),f(),n(E)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>y}})}const p2={set:(t,e,n)=>wD(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function _2(t,e){return fC(t,{target:yn([]),...e})}function cW(t,e){return fC(t,e)}function g2(t){return m2({initialUser:t,dependencies:{popupRedirectResolver:Rk,persistence:[UO,SO,dw]}})}const pC=Symbol("VueFireAuth");function m2({dependencies:t,initialUser:e}){return(n,s)=>{const[i,r]=y2(n,s,e,t);LD(i,r)}}function y2(t,e,n,s,i=gO(t,s)){const r=kw(t,e).run(()=>yn(n));return Dw.set(t,r),e.provide(pC,i),[r,i]}function v2(t){return Ow?Vt(pC):null}function E2(t,{firebaseApp:e,modules:n=[]}){t.provide(Nw,e);for(const s of n)s(e,t)}const _C=jT({apiKey:"AIzaSyCk52NaAaCtO97qkneYwsD_LTjpp9cNzBQ",authDomain:"viewit-test.firebaseapp.com",projectId:"viewit-test",storageBucket:"viewit-test.appspot.com",messagingSenderId:"1054687924375",appId:"1:1054687924375:web:7bd5f8286b6b3d8d4d19d2"}),T2=new ns,nh=gU(_C),w2=(t,e)=>{WO(t,T2).catch(n=>!e||e(n))},I2=t=>{IO(t)},sh=()=>({toFirestore:t=>t,fromFirestore:t=>({id:t.id,...t.data()})}),Cv=Qu(nh,"users").withConverter(sh()),uW=Qu(nh,"subviews").withConverter(sh()),hW=Qu(nh,"posts").withConverter(sh()),dW=Qu(nh,"comments").withConverter(sh()),A2={class:"modal",tabindex:"-1"},b2={class:"modal-dialog"},C2={class:"modal-content"},S2={class:"modal-header"},R2={class:"modal-title"},P2=He("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),N2={class:"modal-body"},O2=Ra({__name:"AppModal",props:{title:{}},setup(t){const e=t;return(n,s)=>(ts(),ir("div",A2,[He("div",b2,[He("div",C2,[He("div",S2,[He("h5",R2,gd(e.title),1),P2]),He("div",N2,[F0(n.$slots,"default")])])])]))}});var Rt="top",en="bottom",tn="right",Pt="left",ih="auto",io=[Rt,en,tn,Pt],Di="start",Mr="end",gC="clippingParents",ig="viewport",er="popper",mC="reference",Rf=io.reduce(function(t,e){return t.concat([e+"-"+Di,e+"-"+Mr])},[]),rg=[].concat(io,[ih]).reduce(function(t,e){return t.concat([e,e+"-"+Di,e+"-"+Mr])},[]),yC="beforeRead",vC="read",EC="afterRead",TC="beforeMain",wC="main",IC="afterMain",AC="beforeWrite",bC="write",CC="afterWrite",SC=[yC,vC,EC,TC,wC,IC,AC,bC,CC];function Yn(t){return t?(t.nodeName||"").toLowerCase():null}function nn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function xi(t){var e=nn(t).Element;return t instanceof e||t instanceof Element}function an(t){var e=nn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function og(t){if(typeof ShadowRoot>"u")return!1;var e=nn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function k2(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!an(r)||!Yn(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function D2(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!an(i)||!Yn(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const ag={name:"applyStyles",enabled:!0,phase:"write",fn:k2,effect:D2,requires:["computeStyles"]};function jn(t){return t.split("-")[0]}var wi=Math.max,jc=Math.min,Vr=Math.round;function Pf(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function RC(){return!/^((?!chrome|android).)*safari/i.test(Pf())}function Fr(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&an(t)&&(i=t.offsetWidth>0&&Vr(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&Vr(s.height)/t.offsetHeight||1);var o=xi(t)?nn(t):window,a=o.visualViewport,l=!RC()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,d=s.height/r;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c,x:c,y:u}}function lg(t){var e=Fr(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function PC(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&og(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function ps(t){return nn(t).getComputedStyle(t)}function x2(t){return["table","td","th"].indexOf(Yn(t))>=0}function Js(t){return((xi(t)?t.ownerDocument:t.document)||window.document).documentElement}function rh(t){return Yn(t)==="html"?t:t.assignedSlot||t.parentNode||(og(t)?t.host:null)||Js(t)}function Sv(t){return!an(t)||ps(t).position==="fixed"?null:t.offsetParent}function L2(t){var e=/firefox/i.test(Pf()),n=/Trident/i.test(Pf());if(n&&an(t)){var s=ps(t);if(s.position==="fixed")return null}var i=rh(t);for(og(i)&&(i=i.host);an(i)&&["html","body"].indexOf(Yn(i))<0;){var r=ps(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function el(t){for(var e=nn(t),n=Sv(t);n&&x2(n)&&ps(n).position==="static";)n=Sv(n);return n&&(Yn(n)==="html"||Yn(n)==="body"&&ps(n).position==="static")?e:n||L2(t)||e}function cg(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function qo(t,e,n){return wi(t,jc(e,n))}function M2(t,e,n){var s=qo(t,e,n);return s>n?n:s}function NC(){return{top:0,right:0,bottom:0,left:0}}function OC(t){return Object.assign({},NC(),t)}function kC(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var V2=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,OC(typeof e!="number"?e:kC(e,io))};function F2(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=jn(n.placement),l=cg(a),c=[Pt,tn].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=V2(i.padding,n),d=lg(r),f=l==="y"?Rt:Pt,g=l==="y"?en:tn,m=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],y=o[l]-n.rects.reference[l],E=el(r),C=E?l==="y"?E.clientHeight||0:E.clientWidth||0:0,T=m/2-y/2,b=h[f],B=C-d[u]-h[g],O=C/2-d[u]/2+T,q=qo(b,O,B),J=l;n.modifiersData[s]=(e={},e[J]=q,e.centerOffset=q-O,e)}}function U2(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||PC(e.elements.popper,i)&&(e.elements.arrow=i))}const DC={name:"arrow",enabled:!0,phase:"main",fn:F2,effect:U2,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ur(t){return t.split("-")[1]}var $2={top:"auto",right:"auto",bottom:"auto",left:"auto"};function B2(t,e){var n=t.x,s=t.y,i=e.devicePixelRatio||1;return{x:Vr(n*i)/i||0,y:Vr(s*i)/i||0}}function Rv(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,d=o.x,f=d===void 0?0:d,g=o.y,m=g===void 0?0:g,y=typeof u=="function"?u({x:f,y:m}):{x:f,y:m};f=y.x,m=y.y;var E=o.hasOwnProperty("x"),C=o.hasOwnProperty("y"),T=Pt,b=Rt,B=window;if(c){var O=el(n),q="clientHeight",J="clientWidth";if(O===nn(n)&&(O=Js(n),ps(O).position!=="static"&&a==="absolute"&&(q="scrollHeight",J="scrollWidth")),O=O,i===Rt||(i===Pt||i===tn)&&r===Mr){b=en;var de=h&&O===B&&B.visualViewport?B.visualViewport.height:O[q];m-=de-s.height,m*=l?1:-1}if(i===Pt||(i===Rt||i===en)&&r===Mr){T=tn;var ae=h&&O===B&&B.visualViewport?B.visualViewport.width:O[J];f-=ae-s.width,f*=l?1:-1}}var Ne=Object.assign({position:a},c&&$2),Ge=u===!0?B2({x:f,y:m},nn(n)):{x:f,y:m};if(f=Ge.x,m=Ge.y,l){var Ce;return Object.assign({},Ne,(Ce={},Ce[b]=C?"0":"",Ce[T]=E?"0":"",Ce.transform=(B.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",Ce))}return Object.assign({},Ne,(e={},e[b]=C?m+"px":"",e[T]=E?f+"px":"",e.transform="",e))}function j2(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:jn(e.placement),variation:Ur(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Rv(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Rv(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ug={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:j2,data:{}};var Sl={passive:!0};function H2(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=nn(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,Sl)}),a&&l.addEventListener("resize",n.update,Sl),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,Sl)}),a&&l.removeEventListener("resize",n.update,Sl)}}const hg={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:H2,data:{}};var W2={left:"right",right:"left",bottom:"top",top:"bottom"};function Ql(t){return t.replace(/left|right|bottom|top/g,function(e){return W2[e]})}var q2={start:"end",end:"start"};function Pv(t){return t.replace(/start|end/g,function(e){return q2[e]})}function dg(t){var e=nn(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function fg(t){return Fr(Js(t)).left+dg(t).scrollLeft}function K2(t,e){var n=nn(t),s=Js(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=RC();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+fg(t),y:l}}function z2(t){var e,n=Js(t),s=dg(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=wi(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=wi(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+fg(t),l=-s.scrollTop;return ps(i||n).direction==="rtl"&&(a+=wi(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function pg(t){var e=ps(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function xC(t){return["html","body","#document"].indexOf(Yn(t))>=0?t.ownerDocument.body:an(t)&&pg(t)?t:xC(rh(t))}function Ko(t,e){var n;e===void 0&&(e=[]);var s=xC(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=nn(s),o=i?[r].concat(r.visualViewport||[],pg(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Ko(rh(o)))}function Nf(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function G2(t,e){var n=Fr(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Nv(t,e,n){return e===ig?Nf(K2(t,n)):xi(e)?G2(e,n):Nf(z2(Js(t)))}function Q2(t){var e=Ko(rh(t)),n=["absolute","fixed"].indexOf(ps(t).position)>=0,s=n&&an(t)?el(t):t;return xi(s)?e.filter(function(i){return xi(i)&&PC(i,s)&&Yn(i)!=="body"}):[]}function Y2(t,e,n,s){var i=e==="clippingParents"?Q2(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=Nv(t,c,s);return l.top=wi(u.top,l.top),l.right=jc(u.right,l.right),l.bottom=jc(u.bottom,l.bottom),l.left=wi(u.left,l.left),l},Nv(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function LC(t){var e=t.reference,n=t.element,s=t.placement,i=s?jn(s):null,r=s?Ur(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Rt:l={x:o,y:e.y-n.height};break;case en:l={x:o,y:e.y+e.height};break;case tn:l={x:e.x+e.width,y:a};break;case Pt:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?cg(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case Di:l[c]=l[c]-(e[u]/2-n[u]/2);break;case Mr:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function $r(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?gC:a,c=n.rootBoundary,u=c===void 0?ig:c,h=n.elementContext,d=h===void 0?er:h,f=n.altBoundary,g=f===void 0?!1:f,m=n.padding,y=m===void 0?0:m,E=OC(typeof y!="number"?y:kC(y,io)),C=d===er?mC:er,T=t.rects.popper,b=t.elements[g?C:d],B=Y2(xi(b)?b:b.contextElement||Js(t.elements.popper),l,u,o),O=Fr(t.elements.reference),q=LC({reference:O,element:T,strategy:"absolute",placement:i}),J=Nf(Object.assign({},T,q)),de=d===er?J:O,ae={top:B.top-de.top+E.top,bottom:de.bottom-B.bottom+E.bottom,left:B.left-de.left+E.left,right:de.right-B.right+E.right},Ne=t.modifiersData.offset;if(d===er&&Ne){var Ge=Ne[i];Object.keys(ae).forEach(function(Ce){var Ut=[tn,en].indexOf(Ce)>=0?1:-1,Ot=[Rt,en].indexOf(Ce)>=0?"y":"x";ae[Ce]+=Ge[Ot]*Ut})}return ae}function X2(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?rg:l,u=Ur(s),h=u?a?Rf:Rf.filter(function(g){return Ur(g)===u}):io,d=h.filter(function(g){return c.indexOf(g)>=0});d.length===0&&(d=h);var f=d.reduce(function(g,m){return g[m]=$r(t,{placement:m,boundary:i,rootBoundary:r,padding:o})[jn(m)],g},{});return Object.keys(f).sort(function(g,m){return f[g]-f[m]})}function J2(t){if(jn(t)===ih)return[];var e=Ql(t);return[Pv(t),e,Pv(e)]}function Z2(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,d=n.altBoundary,f=n.flipVariations,g=f===void 0?!0:f,m=n.allowedAutoPlacements,y=e.options.placement,E=jn(y),C=E===y,T=l||(C||!g?[Ql(y)]:J2(y)),b=[y].concat(T).reduce(function(Bt,jt){return Bt.concat(jn(jt)===ih?X2(e,{placement:jt,boundary:u,rootBoundary:h,padding:c,flipVariations:g,allowedAutoPlacements:m}):jt)},[]),B=e.rects.reference,O=e.rects.popper,q=new Map,J=!0,de=b[0],ae=0;ae<b.length;ae++){var Ne=b[ae],Ge=jn(Ne),Ce=Ur(Ne)===Di,Ut=[Rt,en].indexOf(Ge)>=0,Ot=Ut?"width":"height",ye=$r(e,{placement:Ne,boundary:u,rootBoundary:h,altBoundary:d,padding:c}),re=Ut?Ce?tn:Pt:Ce?en:Rt;B[Ot]>O[Ot]&&(re=Ql(re));var ue=Ql(re),ot=[];if(r&&ot.push(ye[Ge]<=0),a&&ot.push(ye[re]<=0,ye[ue]<=0),ot.every(function(Bt){return Bt})){de=Ne,J=!1;break}q.set(Ne,ot)}if(J)for(var $t=g?3:1,kt=function(jt){var Ue=b.find(function(I){var U=q.get(I);if(U)return U.slice(0,jt).every(function(L){return L})});if(Ue)return de=Ue,"break"},Be=$t;Be>0;Be--){var dn=kt(Be);if(dn==="break")break}e.placement!==de&&(e.modifiersData[s]._skip=!0,e.placement=de,e.reset=!0)}}const MC={name:"flip",enabled:!0,phase:"main",fn:Z2,requiresIfExists:["offset"],data:{_skip:!1}};function Ov(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function kv(t){return[Rt,tn,en,Pt].some(function(e){return t[e]>=0})}function e$(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=$r(e,{elementContext:"reference"}),a=$r(e,{altBoundary:!0}),l=Ov(o,s),c=Ov(a,i,r),u=kv(l),h=kv(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const VC={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:e$};function t$(t,e,n){var s=jn(t),i=[Pt,Rt].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Pt,tn].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function n$(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=rg.reduce(function(u,h){return u[h]=t$(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const FC={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:n$};function s$(t){var e=t.state,n=t.name;e.modifiersData[n]=LC({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const _g={name:"popperOffsets",enabled:!0,phase:"read",fn:s$,data:{}};function i$(t){return t==="x"?"y":"x"}function r$(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,d=n.tether,f=d===void 0?!0:d,g=n.tetherOffset,m=g===void 0?0:g,y=$r(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),E=jn(e.placement),C=Ur(e.placement),T=!C,b=cg(E),B=i$(b),O=e.modifiersData.popperOffsets,q=e.rects.reference,J=e.rects.popper,de=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,ae=typeof de=="number"?{mainAxis:de,altAxis:de}:Object.assign({mainAxis:0,altAxis:0},de),Ne=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ge={x:0,y:0};if(O){if(r){var Ce,Ut=b==="y"?Rt:Pt,Ot=b==="y"?en:tn,ye=b==="y"?"height":"width",re=O[b],ue=re+y[Ut],ot=re-y[Ot],$t=f?-J[ye]/2:0,kt=C===Di?q[ye]:J[ye],Be=C===Di?-J[ye]:-q[ye],dn=e.elements.arrow,Bt=f&&dn?lg(dn):{width:0,height:0},jt=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:NC(),Ue=jt[Ut],I=jt[Ot],U=qo(0,q[ye],Bt[ye]),L=T?q[ye]/2-$t-U-Ue-ae.mainAxis:kt-U-Ue-ae.mainAxis,W=T?-q[ye]/2+$t+U+I+ae.mainAxis:Be+U+I+ae.mainAxis,fe=e.elements.arrow&&el(e.elements.arrow),Se=fe?b==="y"?fe.clientTop||0:fe.clientLeft||0:0,p=(Ce=Ne==null?void 0:Ne[b])!=null?Ce:0,_=re+L-p-Se,v=re+W-p,S=qo(f?jc(ue,_):ue,re,f?wi(ot,v):ot);O[b]=S,Ge[b]=S-re}if(a){var w,D=b==="x"?Rt:Pt,$=b==="x"?en:tn,k=O[B],x=B==="y"?"height":"width",N=k+y[D],H=k-y[$],z=[Rt,Pt].indexOf(E)!==-1,K=(w=Ne==null?void 0:Ne[B])!=null?w:0,X=z?N:k-q[x]-J[x]-K+ae.altAxis,oe=z?k+q[x]+J[x]-K-ae.altAxis:H,ve=f&&z?M2(X,k,oe):qo(f?X:N,k,f?oe:H);O[B]=ve,Ge[B]=ve-k}e.modifiersData[s]=Ge}}const UC={name:"preventOverflow",enabled:!0,phase:"main",fn:r$,requiresIfExists:["offset"]};function o$(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function a$(t){return t===nn(t)||!an(t)?dg(t):o$(t)}function l$(t){var e=t.getBoundingClientRect(),n=Vr(e.width)/t.offsetWidth||1,s=Vr(e.height)/t.offsetHeight||1;return n!==1||s!==1}function c$(t,e,n){n===void 0&&(n=!1);var s=an(e),i=an(e)&&l$(e),r=Js(e),o=Fr(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((Yn(e)!=="body"||pg(r))&&(a=a$(e)),an(e)?(l=Fr(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=fg(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function u$(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function h$(t){var e=u$(t);return SC.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function d$(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function f$(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Dv={placement:"bottom",modifiers:[],strategy:"absolute"};function xv(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function oh(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Dv:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Dv,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],d=!1,f={state:u,setOptions:function(E){var C=typeof E=="function"?E(u.options):E;m(),u.options=Object.assign({},r,u.options,C),u.scrollParents={reference:xi(a)?Ko(a):a.contextElement?Ko(a.contextElement):[],popper:Ko(l)};var T=h$(f$([].concat(s,u.options.modifiers)));return u.orderedModifiers=T.filter(function(b){return b.enabled}),g(),f.update()},forceUpdate:function(){if(!d){var E=u.elements,C=E.reference,T=E.popper;if(xv(C,T)){u.rects={reference:c$(C,el(T),u.options.strategy==="fixed"),popper:lg(T)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(ae){return u.modifiersData[ae.name]=Object.assign({},ae.data)});for(var b=0;b<u.orderedModifiers.length;b++){if(u.reset===!0){u.reset=!1,b=-1;continue}var B=u.orderedModifiers[b],O=B.fn,q=B.options,J=q===void 0?{}:q,de=B.name;typeof O=="function"&&(u=O({state:u,options:J,name:de,instance:f})||u)}}}},update:d$(function(){return new Promise(function(y){f.forceUpdate(),y(u)})}),destroy:function(){m(),d=!0}};if(!xv(a,l))return f;f.setOptions(c).then(function(y){!d&&c.onFirstUpdate&&c.onFirstUpdate(y)});function g(){u.orderedModifiers.forEach(function(y){var E=y.name,C=y.options,T=C===void 0?{}:C,b=y.effect;if(typeof b=="function"){var B=b({state:u,name:E,instance:f,options:T}),O=function(){};h.push(B||O)}})}function m(){h.forEach(function(y){return y()}),h=[]}return f}}var p$=oh(),_$=[hg,_g,ug,ag],g$=oh({defaultModifiers:_$}),m$=[hg,_g,ug,ag,FC,MC,UC,DC,VC],gg=oh({defaultModifiers:m$});const $C=Object.freeze(Object.defineProperty({__proto__:null,afterMain:IC,afterRead:EC,afterWrite:CC,applyStyles:ag,arrow:DC,auto:ih,basePlacements:io,beforeMain:TC,beforeRead:yC,beforeWrite:AC,bottom:en,clippingParents:gC,computeStyles:ug,createPopper:gg,createPopperBase:p$,createPopperLite:g$,detectOverflow:$r,end:Mr,eventListeners:hg,flip:MC,hide:VC,left:Pt,main:wC,modifierPhases:SC,offset:FC,placements:rg,popper:er,popperGenerator:oh,popperOffsets:_g,preventOverflow:UC,read:vC,reference:mC,right:tn,start:Di,top:Rt,variationPlacements:Rf,viewport:ig,write:bC},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Ts=new Map,Jh={set(t,e,n){Ts.has(t)||Ts.set(t,new Map);const s=Ts.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return Ts.has(t)&&Ts.get(t).get(e)||null},remove(t,e){if(!Ts.has(t))return;const n=Ts.get(t);n.delete(e),n.size===0&&Ts.delete(t)}},y$=1e6,v$=1e3,Of="transitionend",BC=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),E$=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),T$=t=>{do t+=Math.floor(Math.random()*y$);while(document.getElementById(t));return t},w$=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*v$)},jC=t=>{t.dispatchEvent(new Event(Of))},cs=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),qs=t=>cs(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(BC(t)):null,ro=t=>{if(!cs(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Ks=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",HC=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?HC(t.parentNode):null},Hc=()=>{},tl=t=>{t.offsetHeight},WC=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Zh=[],I$=t=>{document.readyState==="loading"?(Zh.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of Zh)e()}),Zh.push(t)):t()},cn=()=>document.documentElement.dir==="rtl",hn=t=>{I$(()=>{const e=WC();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},Lt=(t,e=[],n=t)=>typeof t=="function"?t(...e):n,qC=(t,e,n=!0)=>{if(!n){Lt(t);return}const i=w$(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Of,o),Lt(t))};e.addEventListener(Of,o),setTimeout(()=>{r||jC(e)},i)},mg=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},A$=/[^.]*(?=\..*)\.|.*/,b$=/\..*/,C$=/::\d+$/,ed={};let Lv=1;const KC={mouseenter:"mouseover",mouseleave:"mouseout"},S$=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function zC(t,e){return e&&`${e}::${Lv++}`||t.uidEvent||Lv++}function GC(t){const e=zC(t);return t.uidEvent=e,ed[e]=ed[e]||{},ed[e]}function R$(t,e){return function n(s){return yg(s,{delegateTarget:t}),n.oneOff&&P.off(t,s.type,e),e.apply(t,[s])}}function P$(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return yg(i,{delegateTarget:o}),s.oneOff&&P.off(t,i.type,e,n),n.apply(o,[i])}}function QC(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function YC(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=XC(t);return S$.has(r)||(r=t),[s,i,r]}function Mv(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=YC(e,n,s);e in KC&&(o=(g=>function(m){if(!m.relatedTarget||m.relatedTarget!==m.delegateTarget&&!m.delegateTarget.contains(m.relatedTarget))return g.call(this,m)})(o));const l=GC(t),c=l[a]||(l[a]={}),u=QC(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=zC(o,e.replace(A$,"")),d=r?P$(t,n,o):R$(t,o);d.delegationSelector=r?n:null,d.callable=o,d.oneOff=i,d.uidEvent=h,c[h]=d,t.addEventListener(a,d,r)}function kf(t,e,n,s,i){const r=QC(e[n],s,i);r&&(t.removeEventListener(n,r,!!i),delete e[n][r.uidEvent])}function N$(t,e,n,s){const i=e[n]||{};for(const[r,o]of Object.entries(i))r.includes(s)&&kf(t,e,n,o.callable,o.delegationSelector)}function XC(t){return t=t.replace(b$,""),KC[t]||t}const P={on(t,e,n,s){Mv(t,e,n,s,!1)},one(t,e,n,s){Mv(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=YC(e,n,s),a=o!==e,l=GC(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;kf(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))N$(t,l,h,e.slice(1));for(const[h,d]of Object.entries(c)){const f=h.replace(C$,"");(!a||e.includes(f))&&kf(t,l,o,d.callable,d.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=WC(),i=XC(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=yg(new Event(e,{bubbles:a,cancelable:!0}),n);return c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function yg(t,e={}){for(const[n,s]of Object.entries(e))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}function Vv(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function td(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const us={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${td(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${td(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=Vv(t.dataset[s])}return e},getDataAttribute(t,e){return Vv(t.getAttribute(`data-bs-${td(e)}`))}};class nl{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=cs(n)?us.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...cs(n)?us.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[s,i]of Object.entries(n)){const r=e[s],o=cs(r)?"element":E$(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const O$="5.3.3";class Cn extends nl{constructor(e,n){super(),e=qs(e),e&&(this._element=e,this._config=this._getConfig(n),Jh.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Jh.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){qC(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return Jh.get(qs(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return O$}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const nd=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?n.trim():null}return e?e.split(",").map(n=>BC(n)).join(","):null},Q={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Ks(n)&&ro(n))},getSelectorFromElement(t){const e=nd(t);return e&&Q.findOne(e)?e:null},getElementFromSelector(t){const e=nd(t);return e?Q.findOne(e):null},getMultipleElementsFromSelector(t){const e=nd(t);return e?Q.find(e):[]}},ah=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;P.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Ks(this))return;const r=Q.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},k$="alert",D$="bs.alert",JC=`.${D$}`,x$=`close${JC}`,L$=`closed${JC}`,M$="fade",V$="show";class lh extends Cn{static get NAME(){return k$}close(){if(P.trigger(this._element,x$).defaultPrevented)return;this._element.classList.remove(V$);const n=this._element.classList.contains(M$);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),P.trigger(this._element,L$),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=lh.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}ah(lh,"close");hn(lh);const F$="button",U$="bs.button",$$=`.${U$}`,B$=".data-api",j$="active",Fv='[data-bs-toggle="button"]',H$=`click${$$}${B$}`;class ch extends Cn{static get NAME(){return F$}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(j$))}static jQueryInterface(e){return this.each(function(){const n=ch.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}P.on(document,H$,Fv,t=>{t.preventDefault();const e=t.target.closest(Fv);ch.getOrCreateInstance(e).toggle()});hn(ch);const W$="swipe",oo=".bs.swipe",q$=`touchstart${oo}`,K$=`touchmove${oo}`,z$=`touchend${oo}`,G$=`pointerdown${oo}`,Q$=`pointerup${oo}`,Y$="touch",X$="pen",J$="pointer-event",Z$=40,eB={endCallback:null,leftCallback:null,rightCallback:null},tB={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Wc extends nl{constructor(e,n){super(),this._element=e,!(!e||!Wc.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return eB}static get DefaultType(){return tB}static get NAME(){return W$}dispose(){P.off(this._element,oo)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Lt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Z$)return;const n=e/this._deltaX;this._deltaX=0,n&&Lt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(P.on(this._element,G$,e=>this._start(e)),P.on(this._element,Q$,e=>this._end(e)),this._element.classList.add(J$)):(P.on(this._element,q$,e=>this._start(e)),P.on(this._element,K$,e=>this._move(e)),P.on(this._element,z$,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===X$||e.pointerType===Y$)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const nB="carousel",sB="bs.carousel",Zs=`.${sB}`,ZC=".data-api",iB="ArrowLeft",rB="ArrowRight",oB=500,yo="next",Qi="prev",tr="left",Yl="right",aB=`slide${Zs}`,sd=`slid${Zs}`,lB=`keydown${Zs}`,cB=`mouseenter${Zs}`,uB=`mouseleave${Zs}`,hB=`dragstart${Zs}`,dB=`load${Zs}${ZC}`,fB=`click${Zs}${ZC}`,eS="carousel",Rl="active",pB="slide",_B="carousel-item-end",gB="carousel-item-start",mB="carousel-item-next",yB="carousel-item-prev",tS=".active",nS=".carousel-item",vB=tS+nS,EB=".carousel-item img",TB=".carousel-indicators",wB="[data-bs-slide], [data-bs-slide-to]",IB='[data-bs-ride="carousel"]',AB={[iB]:Yl,[rB]:tr},bB={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},CB={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class sl extends Cn{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Q.findOne(TB,this._element),this._addEventListeners(),this._config.ride===eS&&this.cycle()}static get Default(){return bB}static get DefaultType(){return CB}static get NAME(){return nB}next(){this._slide(yo)}nextWhenVisible(){!document.hidden&&ro(this._element)&&this.next()}prev(){this._slide(Qi)}pause(){this._isSliding&&jC(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){P.one(this._element,sd,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){P.one(this._element,sd,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?yo:Qi;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&P.on(this._element,lB,e=>this._keydown(e)),this._config.pause==="hover"&&(P.on(this._element,cB,()=>this.pause()),P.on(this._element,uB,()=>this._maybeEnableCycle())),this._config.touch&&Wc.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of Q.find(EB,this._element))P.on(s,hB,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(tr)),rightCallback:()=>this._slide(this._directionToOrder(Yl)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),oB+this._config.interval))}};this._swipeHelper=new Wc(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=AB[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=Q.findOne(tS,this._indicatorsElement);n.classList.remove(Rl),n.removeAttribute("aria-current");const s=Q.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(Rl),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===yo,r=n||mg(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=f=>P.trigger(this._element,f,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(aB).defaultPrevented||!s||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?gB:_B,h=i?mB:yB;r.classList.add(h),tl(r),s.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(Rl),s.classList.remove(Rl,h,u),this._isSliding=!1,a(sd)};this._queueCallback(d,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(pB)}_getActive(){return Q.findOne(vB,this._element)}_getItems(){return Q.find(nS,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return cn()?e===tr?Qi:yo:e===tr?yo:Qi}_orderToDirection(e){return cn()?e===Qi?tr:Yl:e===Qi?Yl:tr}static jQueryInterface(e){return this.each(function(){const n=sl.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}P.on(document,fB,wB,function(t){const e=Q.getElementFromSelector(this);if(!e||!e.classList.contains(eS))return;t.preventDefault();const n=sl.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(us.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});P.on(window,dB,()=>{const t=Q.find(IB);for(const e of t)sl.getOrCreateInstance(e)});hn(sl);const SB="collapse",RB="bs.collapse",il=`.${RB}`,PB=".data-api",NB=`show${il}`,OB=`shown${il}`,kB=`hide${il}`,DB=`hidden${il}`,xB=`click${il}${PB}`,id="show",cr="collapse",Pl="collapsing",LB="collapsed",MB=`:scope .${cr} .${cr}`,VB="collapse-horizontal",FB="width",UB="height",$B=".collapse.show, .collapse.collapsing",Df='[data-bs-toggle="collapse"]',BB={parent:null,toggle:!0},jB={parent:"(null|element)",toggle:"boolean"};class Ia extends Cn{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=Q.find(Df);for(const i of s){const r=Q.getSelectorFromElement(i),o=Q.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return BB}static get DefaultType(){return jB}static get NAME(){return SB}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren($B).filter(a=>a!==this._element).map(a=>Ia.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||P.trigger(this._element,NB).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(cr),this._element.classList.add(Pl),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Pl),this._element.classList.add(cr,id),this._element.style[s]="",P.trigger(this._element,OB)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||P.trigger(this._element,kB).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,tl(this._element),this._element.classList.add(Pl),this._element.classList.remove(cr,id);for(const i of this._triggerArray){const r=Q.getElementFromSelector(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Pl),this._element.classList.add(cr),P.trigger(this._element,DB)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(id)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=qs(e.parent),e}_getDimension(){return this._element.classList.contains(VB)?FB:UB}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Df);for(const n of e){const s=Q.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=Q.find(MB,this._config.parent);return Q.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(LB,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=Ia.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}P.on(document,xB,Df,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of Q.getMultipleElementsFromSelector(this))Ia.getOrCreateInstance(e,{toggle:!1}).toggle()});hn(Ia);const Uv="dropdown",HB="bs.dropdown",Wi=`.${HB}`,vg=".data-api",WB="Escape",$v="Tab",qB="ArrowUp",Bv="ArrowDown",KB=2,zB=`hide${Wi}`,GB=`hidden${Wi}`,QB=`show${Wi}`,YB=`shown${Wi}`,sS=`click${Wi}${vg}`,iS=`keydown${Wi}${vg}`,XB=`keyup${Wi}${vg}`,nr="show",JB="dropup",ZB="dropend",e4="dropstart",t4="dropup-center",n4="dropdown-center",_i='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',s4=`${_i}.${nr}`,Xl=".dropdown-menu",i4=".navbar",r4=".navbar-nav",o4=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",a4=cn()?"top-end":"top-start",l4=cn()?"top-start":"top-end",c4=cn()?"bottom-end":"bottom-start",u4=cn()?"bottom-start":"bottom-end",h4=cn()?"left-start":"right-start",d4=cn()?"right-start":"left-start",f4="top",p4="bottom",_4={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},g4={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Hn extends Cn{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=Q.next(this._element,Xl)[0]||Q.prev(this._element,Xl)[0]||Q.findOne(Xl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return _4}static get DefaultType(){return g4}static get NAME(){return Uv}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ks(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!P.trigger(this._element,QB,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(r4))for(const s of[].concat(...document.body.children))P.on(s,"mouseover",Hc);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(nr),this._element.classList.add(nr),P.trigger(this._element,YB,e)}}hide(){if(Ks(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!P.trigger(this._element,zB,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))P.off(s,"mouseover",Hc);this._popper&&this._popper.destroy(),this._menu.classList.remove(nr),this._element.classList.remove(nr),this._element.setAttribute("aria-expanded","false"),us.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,GB,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!cs(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Uv.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof $C>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:cs(this._config.reference)?e=qs(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=gg(e,this._menu,n)}_isShown(){return this._menu.classList.contains(nr)}_getPlacement(){const e=this._parent;if(e.classList.contains(ZB))return h4;if(e.classList.contains(e4))return d4;if(e.classList.contains(t4))return f4;if(e.classList.contains(n4))return p4;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(JB)?n?l4:a4:n?u4:c4}_detectNavbar(){return this._element.closest(i4)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(us.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Lt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const s=Q.find(o4,this._menu).filter(i=>ro(i));s.length&&mg(s,n,e===Bv,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Hn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===KB||e.type==="keyup"&&e.key!==$v)return;const n=Q.find(s4);for(const s of n){const i=Hn.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===$v||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===WB,i=[qB,Bv].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(_i)?this:Q.prev(this,_i)[0]||Q.next(this,_i)[0]||Q.findOne(_i,e.delegateTarget.parentNode),o=Hn.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}P.on(document,iS,_i,Hn.dataApiKeydownHandler);P.on(document,iS,Xl,Hn.dataApiKeydownHandler);P.on(document,sS,Hn.clearMenus);P.on(document,XB,Hn.clearMenus);P.on(document,sS,_i,function(t){t.preventDefault(),Hn.getOrCreateInstance(this).toggle()});hn(Hn);const rS="backdrop",m4="fade",jv="show",Hv=`mousedown.bs.${rS}`,y4={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},v4={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class oS extends nl{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return y4}static get DefaultType(){return v4}static get NAME(){return rS}show(e){if(!this._config.isVisible){Lt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&tl(n),n.classList.add(jv),this._emulateAnimation(()=>{Lt(e)})}hide(e){if(!this._config.isVisible){Lt(e);return}this._getElement().classList.remove(jv),this._emulateAnimation(()=>{this.dispose(),Lt(e)})}dispose(){this._isAppended&&(P.off(this._element,Hv),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(m4),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=qs(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),P.on(e,Hv,()=>{Lt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){qC(e,this._getElement(),this._config.isAnimated)}}const E4="focustrap",T4="bs.focustrap",qc=`.${T4}`,w4=`focusin${qc}`,I4=`keydown.tab${qc}`,A4="Tab",b4="forward",Wv="backward",C4={autofocus:!0,trapElement:null},S4={autofocus:"boolean",trapElement:"element"};class aS extends nl{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return C4}static get DefaultType(){return S4}static get NAME(){return E4}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),P.off(document,qc),P.on(document,w4,e=>this._handleFocusin(e)),P.on(document,I4,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,P.off(document,qc))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=Q.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===Wv?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===A4&&(this._lastTabNavDirection=e.shiftKey?Wv:b4)}}const qv=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Kv=".sticky-top",Nl="padding-right",zv="margin-right";class xf{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Nl,n=>n+e),this._setElementAttributes(qv,Nl,n=>n+e),this._setElementAttributes(Kv,zv,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Nl),this._resetElementAttributes(qv,Nl),this._resetElementAttributes(Kv,zv)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&us.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=us.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}us.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(cs(e)){n(e);return}for(const s of Q.find(e,this._element))n(s)}}const R4="modal",P4="bs.modal",un=`.${P4}`,N4=".data-api",O4="Escape",k4=`hide${un}`,D4=`hidePrevented${un}`,lS=`hidden${un}`,cS=`show${un}`,x4=`shown${un}`,L4=`resize${un}`,M4=`click.dismiss${un}`,V4=`mousedown.dismiss${un}`,F4=`keydown.dismiss${un}`,U4=`click${un}${N4}`,Gv="modal-open",$4="fade",Qv="show",rd="modal-static",B4=".modal.show",j4=".modal-dialog",H4=".modal-body",W4='[data-bs-toggle="modal"]',q4={backdrop:!0,focus:!0,keyboard:!0},K4={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Li extends Cn{constructor(e,n){super(e,n),this._dialog=Q.findOne(j4,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new xf,this._addEventListeners()}static get Default(){return q4}static get DefaultType(){return K4}static get NAME(){return R4}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||P.trigger(this._element,cS,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Gv),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||P.trigger(this._element,k4).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Qv),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){P.off(window,un),P.off(this._dialog,un),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new oS({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new aS({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=Q.findOne(H4,this._dialog);n&&(n.scrollTop=0),tl(this._element),this._element.classList.add(Qv);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,P.trigger(this._element,x4,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){P.on(this._element,F4,e=>{if(e.key===O4){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),P.on(window,L4,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),P.on(this._element,V4,e=>{P.one(this._element,M4,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Gv),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,lS)})}_isAnimated(){return this._element.classList.contains($4)}_triggerBackdropTransition(){if(P.trigger(this._element,D4).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(rd)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(rd),this._queueCallback(()=>{this._element.classList.remove(rd),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=cn()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=cn()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=Li.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}P.on(document,U4,W4,function(t){const e=Q.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,cS,i=>{i.defaultPrevented||P.one(e,lS,()=>{ro(this)&&this.focus()})});const n=Q.findOne(B4);n&&Li.getInstance(n).hide(),Li.getOrCreateInstance(e).toggle(this)});ah(Li);hn(Li);const z4="offcanvas",G4="bs.offcanvas",ys=`.${G4}`,uS=".data-api",Q4=`load${ys}${uS}`,Y4="Escape",Yv="show",Xv="showing",Jv="hiding",X4="offcanvas-backdrop",hS=".offcanvas.show",J4=`show${ys}`,Z4=`shown${ys}`,ej=`hide${ys}`,Zv=`hidePrevented${ys}`,dS=`hidden${ys}`,tj=`resize${ys}`,nj=`click${ys}${uS}`,sj=`keydown.dismiss${ys}`,ij='[data-bs-toggle="offcanvas"]',rj={backdrop:!0,keyboard:!0,scroll:!1},oj={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class zs extends Cn{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return rj}static get DefaultType(){return oj}static get NAME(){return z4}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||P.trigger(this._element,J4,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new xf().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Xv);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Yv),this._element.classList.remove(Xv),P.trigger(this._element,Z4,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||P.trigger(this._element,ej).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Jv),this._backdrop.hide();const n=()=>{this._element.classList.remove(Yv,Jv),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new xf().reset(),P.trigger(this._element,dS)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){P.trigger(this._element,Zv);return}this.hide()},n=!!this._config.backdrop;return new oS({className:X4,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new aS({trapElement:this._element})}_addEventListeners(){P.on(this._element,sj,e=>{if(e.key===Y4){if(this._config.keyboard){this.hide();return}P.trigger(this._element,Zv)}})}static jQueryInterface(e){return this.each(function(){const n=zs.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}P.on(document,nj,ij,function(t){const e=Q.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Ks(this))return;P.one(e,dS,()=>{ro(this)&&this.focus()});const n=Q.findOne(hS);n&&n!==e&&zs.getInstance(n).hide(),zs.getOrCreateInstance(e).toggle(this)});P.on(window,Q4,()=>{for(const t of Q.find(hS))zs.getOrCreateInstance(t).show()});P.on(window,tj,()=>{for(const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&zs.getOrCreateInstance(t).hide()});ah(zs);hn(zs);const aj=/^aria-[\w-]*$/i,fS={"*":["class","dir","id","lang","role",aj],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},lj=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),cj=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,uj=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?lj.has(n)?!!cj.test(t.nodeValue):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))};function hj(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)uj(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const dj="TemplateFactory",fj={allowList:fS,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},pj={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},_j={entry:"(string|element|function|null)",selector:"(string|element)"};class gj extends nl{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return fj}static get DefaultType(){return pj}static get NAME(){return dj}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},_j)}_setContent(e,n,s){const i=Q.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(cs(n)){this._putElementInTemplate(qs(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?hj(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Lt(e,[this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const mj="tooltip",yj=new Set(["sanitize","allowList","sanitizeFn"]),od="fade",vj="modal",Ol="show",Ej=".tooltip-inner",eE=`.${vj}`,tE="hide.bs.modal",vo="hover",ad="focus",Tj="click",wj="manual",Ij="hide",Aj="hidden",bj="show",Cj="shown",Sj="inserted",Rj="click",Pj="focusin",Nj="focusout",Oj="mouseenter",kj="mouseleave",Dj={AUTO:"auto",TOP:"top",RIGHT:cn()?"left":"right",BOTTOM:"bottom",LEFT:cn()?"right":"left"},xj={allowList:fS,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Lj={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ao extends Cn{constructor(e,n){if(typeof $C>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return xj}static get DefaultType(){return Lj}static get NAME(){return mj}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(eE),tE,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=P.trigger(this._element,this.constructor.eventName(bj)),s=(HC(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),P.trigger(this._element,this.constructor.eventName(Sj))),this._popper=this._createPopper(i),i.classList.add(Ol),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))P.on(a,"mouseover",Hc);const o=()=>{P.trigger(this._element,this.constructor.eventName(Cj)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||P.trigger(this._element,this.constructor.eventName(Ij)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ol),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))P.off(i,"mouseover",Hc);this._activeTrigger[Tj]=!1,this._activeTrigger[ad]=!1,this._activeTrigger[vo]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.eventName(Aj)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(od,Ol),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=T$(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(od),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new gj({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Ej]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(od)}_isShown(){return this.tip&&this.tip.classList.contains(Ol)}_createPopper(e){const n=Lt(this._config.placement,[this,e,this._element]),s=Dj[n.toUpperCase()];return gg(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return Lt(e,[this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...Lt(this._config.popperConfig,[n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")P.on(this._element,this.constructor.eventName(Rj),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==wj){const s=n===vo?this.constructor.eventName(Oj):this.constructor.eventName(Pj),i=n===vo?this.constructor.eventName(kj):this.constructor.eventName(Nj);P.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?ad:vo]=!0,o._enter()}),P.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?ad:vo]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(eE),tE,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=us.getDataAttributes(this._element);for(const s of Object.keys(n))yj.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:qs(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,s]of Object.entries(this._config))this.constructor.Default[n]!==s&&(e[n]=s);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=ao.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}hn(ao);const Mj="popover",Vj=".popover-header",Fj=".popover-body",Uj={...ao.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},$j={...ao.DefaultType,content:"(null|string|element|function)"};class Eg extends ao{static get Default(){return Uj}static get DefaultType(){return $j}static get NAME(){return Mj}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Vj]:this._getTitle(),[Fj]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=Eg.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}hn(Eg);const Bj="scrollspy",jj="bs.scrollspy",Tg=`.${jj}`,Hj=".data-api",Wj=`activate${Tg}`,nE=`click${Tg}`,qj=`load${Tg}${Hj}`,Kj="dropdown-item",Yi="active",zj='[data-bs-spy="scroll"]',ld="[href]",Gj=".nav, .list-group",sE=".nav-link",Qj=".nav-item",Yj=".list-group-item",Xj=`${sE}, ${Qj} > ${sE}, ${Yj}`,Jj=".dropdown",Zj=".dropdown-toggle",e9={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},t9={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class uh extends Cn{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return e9}static get DefaultType(){return t9}static get NAME(){return Bj}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=qs(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(P.off(this._config.target,nE),P.on(this._config.target,nE,ld,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Q.find(ld,this._config.target);for(const n of e){if(!n.hash||Ks(n))continue;const s=Q.findOne(decodeURI(n.hash),this._element);ro(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Yi),this._activateParents(e),P.trigger(this._element,Wj,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(Kj)){Q.findOne(Zj,e.closest(Jj)).classList.add(Yi);return}for(const n of Q.parents(e,Gj))for(const s of Q.prev(n,Xj))s.classList.add(Yi)}_clearActiveClass(e){e.classList.remove(Yi);const n=Q.find(`${ld}.${Yi}`,e);for(const s of n)s.classList.remove(Yi)}static jQueryInterface(e){return this.each(function(){const n=uh.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}P.on(window,qj,()=>{for(const t of Q.find(zj))uh.getOrCreateInstance(t)});hn(uh);const n9="tab",s9="bs.tab",qi=`.${s9}`,i9=`hide${qi}`,r9=`hidden${qi}`,o9=`show${qi}`,a9=`shown${qi}`,l9=`click${qi}`,c9=`keydown${qi}`,u9=`load${qi}`,h9="ArrowLeft",iE="ArrowRight",d9="ArrowUp",rE="ArrowDown",cd="Home",oE="End",gi="active",aE="fade",ud="show",f9="dropdown",pS=".dropdown-toggle",p9=".dropdown-menu",hd=`:not(${pS})`,_9='.list-group, .nav, [role="tablist"]',g9=".nav-item, .list-group-item",m9=`.nav-link${hd}, .list-group-item${hd}, [role="tab"]${hd}`,_S='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',dd=`${m9}, ${_S}`,y9=`.${gi}[data-bs-toggle="tab"], .${gi}[data-bs-toggle="pill"], .${gi}[data-bs-toggle="list"]`;class Br extends Cn{constructor(e){super(e),this._parent=this._element.closest(_9),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),P.on(this._element,c9,n=>this._keydown(n)))}static get NAME(){return n9}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?P.trigger(n,i9,{relatedTarget:e}):null;P.trigger(e,o9,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(gi),this._activate(Q.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(ud);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),P.trigger(e,a9,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(aE))}_deactivate(e,n){if(!e)return;e.classList.remove(gi),e.blur(),this._deactivate(Q.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(ud);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),P.trigger(e,r9,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(aE))}_keydown(e){if(![h9,iE,d9,rE,cd,oE].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(i=>!Ks(i));let s;if([cd,oE].includes(e.key))s=n[e.key===cd?0:n.length-1];else{const i=[iE,rE].includes(e.key);s=mg(n,e.target,i,!0)}s&&(s.focus({preventScroll:!0}),Br.getOrCreateInstance(s).show())}_getChildren(){return Q.find(dd,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=Q.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(f9))return;const i=(r,o)=>{const a=Q.findOne(r,s);a&&a.classList.toggle(o,n)};i(pS,gi),i(p9,ud),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(gi)}_getInnerElement(e){return e.matches(dd)?e:Q.findOne(dd,e)}_getOuterElement(e){return e.closest(g9)||e}static jQueryInterface(e){return this.each(function(){const n=Br.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}P.on(document,l9,_S,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Ks(this)&&Br.getOrCreateInstance(this).show()});P.on(window,u9,()=>{for(const t of Q.find(y9))Br.getOrCreateInstance(t)});hn(Br);const v9="toast",E9="bs.toast",ei=`.${E9}`,T9=`mouseover${ei}`,w9=`mouseout${ei}`,I9=`focusin${ei}`,A9=`focusout${ei}`,b9=`hide${ei}`,C9=`hidden${ei}`,S9=`show${ei}`,R9=`shown${ei}`,P9="fade",lE="hide",kl="show",Dl="showing",N9={animation:"boolean",autohide:"boolean",delay:"number"},O9={animation:!0,autohide:!0,delay:5e3};class hh extends Cn{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return O9}static get DefaultType(){return N9}static get NAME(){return v9}show(){if(P.trigger(this._element,S9).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(P9);const n=()=>{this._element.classList.remove(Dl),P.trigger(this._element,R9),this._maybeScheduleHide()};this._element.classList.remove(lE),tl(this._element),this._element.classList.add(kl,Dl),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||P.trigger(this._element,b9).defaultPrevented)return;const n=()=>{this._element.classList.add(lE),this._element.classList.remove(Dl,kl),P.trigger(this._element,C9)};this._element.classList.add(Dl),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(kl),super.dispose()}isShown(){return this._element.classList.contains(kl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,T9,e=>this._onInteraction(e,!0)),P.on(this._element,w9,e=>this._onInteraction(e,!1)),P.on(this._element,I9,e=>this._onInteraction(e,!0)),P.on(this._element,A9,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=hh.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}ah(hh);hn(hh);const cE=Sa({}),k9={class:"navbar navbar-expand-sm bg-body-tertiary p-4 sticky-top shadow-lg"},D9={class:"col-sm-6 col-md-6 col-lg-6"},x9=He("img",{width:"60px",height:"60px",src:GR},null,-1),L9=He("h1",{class:"px-3 my-2 d-inline logo",style:{"font-size":"40px"}},"vuedit",-1),M9={class:"col-sm-6 col-md-6 col-lg-6"},V9={class:"float-end"},F9={for:"username"},U9={key:0,class:"form-text text-muted"},$9=He("button",{class:"btn btn-primary mx-2",type:"submit"},"Continue",-1),B9=Ra({__name:"AppTopNav",setup(t){const e=DD(),n=v2(),s=Gt(()=>e.value?new Li("#usernameModal"):null),i=yn(XR()),r=yn(),{data:o,pending:a,promise:l}=_2(()=>e.value?CU(Cv,SU("uid","==",e.value.uid),RU(1)):null),c=Gt(()=>{var m;if(o.value.length>0){const y=o.value[0];return cE.id=y.id,cE.uid=y.uid,y}return a.value||(m=s.value)==null||m.show(),null}),u=async()=>{var m,y;if((m=e.value)!=null&&m.uid){if(!i.value){r.value="Username required.";return}try{await DU(pU(Cv,i.value),{uid:e.value.uid}),(y=s.value)==null||y.hide()}catch(E){console.error(E),r.value="Username exists"}}},h=()=>{g.value=!g.value,f(g.value)},d=()=>{const m=document.cookie.match(/theme=(dark|light)/i);return m?m[1]==="dark":window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},f=m=>{document.querySelector("html").setAttribute("data-bs-theme",g.value?"dark":""),document.cookie=`theme=${m?"dark":"light"}; path=/; expires=${new Date(new Date().getTime()+1e11).toUTCString()}; SameSite=Strict`},g=yn(d());return dT(()=>document.querySelector("html").setAttribute("data-bs-theme",g.value?"dark":"")),(m,y)=>{var C;const E=aT("RouterLink");return ts(),ir(zt,null,[He("div",k9,[He("div",D9,[nt(E,{to:"/",class:"d-flex align-center"},{default:Ml(()=>[x9,L9]),_:1})]),He("div",M9,[He("div",V9,[Kt(e)&&((C=c.value)!=null&&C.id)?(ts(),np(E,{key:0,class:"m-0 mx-4",to:`/u/${c.value.id}`},{default:Ml(()=>[Sd(gd(c.value.id),1)]),_:1},8,["to"])):Qg("",!0),Kt(e)?(ts(),ir("button",{key:2,class:"btn btn-primary",onClick:y[1]||(y[1]=()=>Kt(I2)(Kt(n)))},"Sign out")):(ts(),ir("button",{key:1,class:"btn btn-primary",onClick:y[0]||(y[0]=()=>Kt(w2)(Kt(n)))},"Sign in with Google")),He("button",{class:"btn m-2",onClick:h},"Theme")])])]),nt(O2,{id:"usernameModal",title:"Choose Username"},{default:Ml(()=>[He("form",{onSubmit:jR(u,["prevent"]),novalidate:""},[He("label",F9,[Sd("Username "),S0(He("input",{"onUpdate:modelValue":y[2]||(y[2]=T=>i.value=T),class:"form-control",id:"username",name:"username",placeholder:"Username"},null,512),[[UR,i.value]])]),r.value?(ts(),ir("small",U9,gd(r.value),1)):Qg("",!0),$9],32)]),_:1})],64)}}}),j9={class:"container-lg h-100 pb-4"},H9=Ra({__name:"App",setup(t){return(e,n)=>{const s=aT("RouterView");return ts(),ir(zt,null,[nt(B9),He("div",j9,[nt(s)])],64)}}}),W9="modulepreload",q9=function(t){return"/"+t},uE={},Eo=function(e,n,s){let i=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(n.map(l=>{if(l=q9(l),l in uE)return;uE[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const g=r[f];if(g.href===l&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":W9,c||(d.as="script",d.crossOrigin=""),d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return i.then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const sr=typeof document<"u";function K9(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function fd(t,e){const n={};for(const s in e){const i=e[s];n[s]=bn(i)?i.map(t):t(i)}return n}const zo=()=>{},bn=Array.isArray,gS=/#/g,z9=/&/g,G9=/\//g,Q9=/=/g,Y9=/\?/g,mS=/\+/g,X9=/%5B/g,J9=/%5D/g,yS=/%5E/g,Z9=/%60/g,vS=/%7B/g,eH=/%7C/g,ES=/%7D/g,tH=/%20/g;function wg(t){return encodeURI(""+t).replace(eH,"|").replace(X9,"[").replace(J9,"]")}function nH(t){return wg(t).replace(vS,"{").replace(ES,"}").replace(yS,"^")}function Lf(t){return wg(t).replace(mS,"%2B").replace(tH,"+").replace(gS,"%23").replace(z9,"%26").replace(Z9,"`").replace(vS,"{").replace(ES,"}").replace(yS,"^")}function sH(t){return Lf(t).replace(Q9,"%3D")}function iH(t){return wg(t).replace(gS,"%23").replace(Y9,"%3F")}function rH(t){return t==null?"":iH(t).replace(G9,"%2F")}function Aa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const oH=/\/$/,aH=t=>t.replace(oH,"");function pd(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=hH(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Aa(o)}}function lH(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hE(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cH(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&jr(e.matched[s],n.matched[i])&&TS(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function TS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uH(t[n],e[n]))return!1;return!0}function uH(t,e){return bn(t)?dE(t,e):bn(e)?dE(e,t):t===e}function dE(t,e){return bn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function hH(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var ba;(function(t){t.pop="pop",t.push="push"})(ba||(ba={}));var Go;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Go||(Go={}));function dH(t){if(!t)if(sr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aH(t)}const fH=/^[^#]+#/;function pH(t,e){return t.replace(fH,"#")+e}function _H(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const dh=()=>({left:window.scrollX,top:window.scrollY});function gH(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=_H(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function fE(t,e){return(history.state?history.state.position-e:-1)+t}const Mf=new Map;function mH(t,e){Mf.set(t,e)}function yH(t){const e=Mf.get(t);return Mf.delete(t),e}let vH=()=>location.protocol+"//"+location.host;function wS(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),hE(l,"")}return hE(n,t)+s+i}function EH(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=wS(t,location),g=n.value,m=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}y=m?d.position-m.position:0}else s(f);i.forEach(E=>{E(n.value,g,{delta:y,type:ba.pop,direction:y?y>0?Go.forward:Go.back:Go.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ie({},d.state,{scroll:dh()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function pE(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?dh():null}}function TH(t){const{history:e,location:n}=window,s={value:wS(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:vH()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ie({},e.state,pE(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ie({},i.value,e.state,{forward:l,scroll:dh()});r(u.current,u,!0);const h=Ie({},pE(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function wH(t){t=dH(t);const e=TH(t),n=EH(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ie({location:"",base:t,go:s,createHref:pH.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function IH(t){return typeof t=="string"||t&&typeof t=="object"}function IS(t){return typeof t=="string"||typeof t=="symbol"}const ws={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},AS=Symbol("");var _E;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(_E||(_E={}));function Hr(t,e){return Ie(new Error,{type:t,[AS]:!0},e)}function Zn(t,e){return t instanceof Error&&AS in t&&(e==null||!!(t.type&e))}const gE="[^/]+?",AH={sensitive:!1,strict:!1,start:!0,end:!0},bH=/[.+*?^${}()[\]/\\]/g;function CH(t,e){const n=Ie({},AH,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(bH,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:m,optional:y,regexp:E}=d;r.push({name:g,repeatable:m,optional:y});const C=E||gE;if(C!==gE){f+=10;try{new RegExp(`(${C})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+b.message)}}let T=m?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(T=y&&c.length<2?`(?:/${T})`:"/"+T),y&&(T+="?"),i+=T,f+=20,y&&(f+=-8),m&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:m,optional:y}=f,E=g in c?c[g]:"";if(bn(E)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=bn(E)?E.join("/"):E;if(!C)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function SH(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function RH(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=SH(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(mE(s))return 1;if(mE(i))return-1}return i.length-s.length}function mE(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PH={type:0,value:""},NH=/[a-zA-Z0-9_]/;function OH(t){if(!t)return[[]];if(t==="/")return[[PH]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:NH.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function kH(t,e,n){const s=CH(OH(t.path),n),i=Ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function DH(t,e){const n=[],s=new Map;e=EE({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,g=xH(u);g.aliasOf=d&&d.record;const m=EE(e,u),y=[g];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of T)y.push(Ie({},g,{components:d?d.record.components:g.components,path:b,aliasOf:d?d.record:g}))}let E,C;for(const T of y){const{path:b}=T;if(h&&b[0]!=="/"){const B=h.record.path,O=B[B.length-1]==="/"?"":"/";T.path=h.record.path+(b&&O+b)}if(E=kH(T,h,m),d?d.alias.push(E):(C=C||E,C!==E&&C.alias.push(E),f&&u.name&&!vE(E)&&o(u.name)),g.children){const B=g.children;for(let O=0;O<B.length;O++)r(B[O],E,d&&d.children[O])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return C?()=>{o(C)}:zo}function o(u){if(IS(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&RH(u,n[h])>=0&&(u.record.path!==n[h].record.path||!bS(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!vE(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},g,m;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Hr(1,{location:u});m=d.record.name,f=Ie(yE(h.params,d.keys.filter(C=>!C.optional).concat(d.parent?d.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),u.params&&yE(u.params,d.keys.map(C=>C.name))),g=d.stringify(f)}else if(u.path!=null)g=u.path,d=n.find(C=>C.re.test(g)),d&&(f=d.parse(g),m=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw Hr(1,{location:u,currentLocation:h});m=d.record.name,f=Ie({},h.params,u.params),g=d.stringify(f)}const y=[];let E=d;for(;E;)y.unshift(E.record),E=E.parent;return{name:m,path:g,params:f,matched:y,meta:MH(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function yE(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function xH(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LH(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LH(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function vE(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MH(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function EE(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function bS(t,e){return e.children.some(n=>n===t||bS(t,n))}function VH(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(mS," "),o=r.indexOf("="),a=Aa(o<0?r:r.slice(0,o)),l=o<0?null:Aa(r.slice(o+1));if(a in e){let c=e[a];bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function TE(t){let e="";for(let n in t){const s=t[n];if(n=sH(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(s)?s.map(r=>r&&Lf(r)):[s&&Lf(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function FH(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const UH=Symbol(""),wE=Symbol(""),fh=Symbol(""),Ig=Symbol(""),Vf=Symbol("");function To(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cs(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Hr(4,{from:n,to:e})):d instanceof Error?l(d):IH(d)?l(Hr(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function _d(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($H(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Cs(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=K9(u)?u.default:u;o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&Cs(f,n,s,o,a,i)()}))}}return r}function $H(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function IE(t){const e=Vt(fh),n=Vt(Ig),s=Gt(()=>e.resolve(Kt(t.to))),i=Gt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(jr.bind(null,u));if(d>-1)return d;const f=AE(l[c-2]);return c>1&&AE(u)===f&&h[h.length-1].path!==f?h.findIndex(jr.bind(null,l[c-2])):d}),r=Gt(()=>i.value>-1&&WH(n.params,s.value.params)),o=Gt(()=>i.value>-1&&i.value===n.matched.length-1&&TS(n.params,s.value.params));function a(l={}){return HH(l)?e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(zo):Promise.resolve()}return{route:s,href:Gt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const BH=Ra({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:IE,setup(t,{slots:e}){const n=Sa(IE(t)),{options:s}=Vt(fh),i=Gt(()=>({[bE(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bE(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:NT("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),jH=BH;function HH(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WH(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!bn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function AE(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bE=(t,e,n)=>t??e??n,qH=Ra({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Vt(Vf),i=Gt(()=>t.route||s.value),r=Vt(wE,0),o=Gt(()=>{let c=Kt(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Gt(()=>i.value.matched[o.value]);Vl(wE,Gt(()=>o.value+1)),Vl(UH,a),Vl(Vf,i);const l=yn();return No(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!jr(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return CE(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=NT(d,Ie({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return CE(n.default,{Component:y,route:c})||y}}});function CE(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KH=qH;function zH(t){const e=DH(t.routes,t),n=t.parseQuery||VH,s=t.stringifyQuery||TE,i=t.history,r=To(),o=To(),a=To(),l=JE(ws);let c=ws;sr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fd.bind(null,I=>""+I),h=fd.bind(null,rH),d=fd.bind(null,Aa);function f(I,U){let L,W;return IS(I)?(L=e.getRecordMatcher(I),W=U):W=I,e.addRoute(W,L)}function g(I){const U=e.getRecordMatcher(I);U&&e.removeRoute(U)}function m(){return e.getRoutes().map(I=>I.record)}function y(I){return!!e.getRecordMatcher(I)}function E(I,U){if(U=Ie({},U||l.value),typeof I=="string"){const _=pd(n,I,U.path),v=e.resolve({path:_.path},U),S=i.createHref(_.fullPath);return Ie(_,v,{params:d(v.params),hash:Aa(_.hash),redirectedFrom:void 0,href:S})}let L;if(I.path!=null)L=Ie({},I,{path:pd(n,I.path,U.path).path});else{const _=Ie({},I.params);for(const v in _)_[v]==null&&delete _[v];L=Ie({},I,{params:h(_)}),U.params=h(U.params)}const W=e.resolve(L,U),fe=I.hash||"";W.params=u(d(W.params));const Se=lH(s,Ie({},I,{hash:nH(fe),path:W.path})),p=i.createHref(Se);return Ie({fullPath:Se,hash:fe,query:s===TE?FH(I.query):I.query||{}},W,{redirectedFrom:void 0,href:p})}function C(I){return typeof I=="string"?pd(n,I,l.value.path):Ie({},I)}function T(I,U){if(c!==I)return Hr(8,{from:U,to:I})}function b(I){return q(I)}function B(I){return b(Ie(C(I),{replace:!0}))}function O(I){const U=I.matched[I.matched.length-1];if(U&&U.redirect){const{redirect:L}=U;let W=typeof L=="function"?L(I):L;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=C(W):{path:W},W.params={}),Ie({query:I.query,hash:I.hash,params:W.path!=null?{}:I.params},W)}}function q(I,U){const L=c=E(I),W=l.value,fe=I.state,Se=I.force,p=I.replace===!0,_=O(L);if(_)return q(Ie(C(_),{state:typeof _=="object"?Ie({},fe,_.state):fe,force:Se,replace:p}),U||L);const v=L;v.redirectedFrom=U;let S;return!Se&&cH(s,W,L)&&(S=Hr(16,{to:v,from:W}),kt(W,W,!0,!1)),(S?Promise.resolve(S):ae(v,W)).catch(w=>Zn(w)?Zn(w,2)?w:$t(w):ue(w,v,W)).then(w=>{if(w){if(Zn(w,2))return q(Ie({replace:p},C(w.to),{state:typeof w.to=="object"?Ie({},fe,w.to.state):fe,force:Se}),U||v)}else w=Ge(v,W,!0,p,fe);return Ne(v,W,w),w})}function J(I,U){const L=T(I,U);return L?Promise.reject(L):Promise.resolve()}function de(I){const U=Bt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(I):I()}function ae(I,U){let L;const[W,fe,Se]=GH(I,U);L=_d(W.reverse(),"beforeRouteLeave",I,U);for(const _ of W)_.leaveGuards.forEach(v=>{L.push(Cs(v,I,U))});const p=J.bind(null,I,U);return L.push(p),Ue(L).then(()=>{L=[];for(const _ of r.list())L.push(Cs(_,I,U));return L.push(p),Ue(L)}).then(()=>{L=_d(fe,"beforeRouteUpdate",I,U);for(const _ of fe)_.updateGuards.forEach(v=>{L.push(Cs(v,I,U))});return L.push(p),Ue(L)}).then(()=>{L=[];for(const _ of Se)if(_.beforeEnter)if(bn(_.beforeEnter))for(const v of _.beforeEnter)L.push(Cs(v,I,U));else L.push(Cs(_.beforeEnter,I,U));return L.push(p),Ue(L)}).then(()=>(I.matched.forEach(_=>_.enterCallbacks={}),L=_d(Se,"beforeRouteEnter",I,U,de),L.push(p),Ue(L))).then(()=>{L=[];for(const _ of o.list())L.push(Cs(_,I,U));return L.push(p),Ue(L)}).catch(_=>Zn(_,8)?_:Promise.reject(_))}function Ne(I,U,L){a.list().forEach(W=>de(()=>W(I,U,L)))}function Ge(I,U,L,W,fe){const Se=T(I,U);if(Se)return Se;const p=U===ws,_=sr?history.state:{};L&&(W||p?i.replace(I.fullPath,Ie({scroll:p&&_&&_.scroll},fe)):i.push(I.fullPath,fe)),l.value=I,kt(I,U,L,p),$t()}let Ce;function Ut(){Ce||(Ce=i.listen((I,U,L)=>{if(!jt.listening)return;const W=E(I),fe=O(W);if(fe){q(Ie(fe,{replace:!0}),W).catch(zo);return}c=W;const Se=l.value;sr&&mH(fE(Se.fullPath,L.delta),dh()),ae(W,Se).catch(p=>Zn(p,12)?p:Zn(p,2)?(q(p.to,W).then(_=>{Zn(_,20)&&!L.delta&&L.type===ba.pop&&i.go(-1,!1)}).catch(zo),Promise.reject()):(L.delta&&i.go(-L.delta,!1),ue(p,W,Se))).then(p=>{p=p||Ge(W,Se,!1),p&&(L.delta&&!Zn(p,8)?i.go(-L.delta,!1):L.type===ba.pop&&Zn(p,20)&&i.go(-1,!1)),Ne(W,Se,p)}).catch(zo)}))}let Ot=To(),ye=To(),re;function ue(I,U,L){$t(I);const W=ye.list();return W.length?W.forEach(fe=>fe(I,U,L)):console.error(I),Promise.reject(I)}function ot(){return re&&l.value!==ws?Promise.resolve():new Promise((I,U)=>{Ot.add([I,U])})}function $t(I){return re||(re=!I,Ut(),Ot.list().forEach(([U,L])=>I?L(I):U()),Ot.reset()),I}function kt(I,U,L,W){const{scrollBehavior:fe}=t;if(!sr||!fe)return Promise.resolve();const Se=!L&&yH(fE(I.fullPath,0))||(W||!L)&&history.state&&history.state.scroll||null;return Jf().then(()=>fe(I,U,Se)).then(p=>p&&gH(p)).catch(p=>ue(p,I,U))}const Be=I=>i.go(I);let dn;const Bt=new Set,jt={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:y,getRoutes:m,resolve:E,options:t,push:b,replace:B,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:ot,install(I){const U=this;I.component("RouterLink",jH),I.component("RouterView",KH),I.config.globalProperties.$router=U,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(l)}),sr&&!dn&&l.value===ws&&(dn=!0,b(i.location).catch(fe=>{}));const L={};for(const fe in ws)Object.defineProperty(L,fe,{get:()=>l.value[fe],enumerable:!0});I.provide(fh,U),I.provide(Ig,KE(L)),I.provide(Vf,l);const W=I.unmount;Bt.add(I),I.unmount=function(){Bt.delete(I),Bt.size<1&&(c=ws,Ce&&Ce(),Ce=null,l.value=ws,dn=!1,re=!1),W()}}};function Ue(I){return I.reduce((U,L)=>U.then(()=>de(L)),Promise.resolve())}return jt}function GH(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>jr(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>jr(c,l))||i.push(l))}return[n,s,i]}function fW(){return Vt(fh)}function pW(){return Vt(Ig)}const QH=[{name:"home",path:"/",component:()=>Eo(()=>import("./Home-Bp6kQRuJ.js"),__vite__mapDeps([0,1,2,3,4,5]))},{name:"subview",path:"/v/:subview",component:()=>Eo(()=>import("./Subview-CtnKQMkL.js"),__vite__mapDeps([6,2,1,3,4,5])),children:[{name:"post",path:":post",component:()=>Eo(()=>import("./Post-BvGqbk9q.js"),__vite__mapDeps([7,1,2,3,4]))}]},{name:"user",path:"/u/:id",component:()=>Eo(()=>import("./Profile-tCtJS_Bl.js"),__vite__mapDeps([8,3,1,4]))},{name:"404",path:"/:pathMatch(.*)*",component:()=>Eo(()=>import("./PageNotFound-T2HEelGC.js"),__vite__mapDeps([9,1]))}],YH=zH({history:wH(),routes:QH}),Ag=qR(H9);Ag.use(YH);Ag.use(E2,{firebaseApp:_C,modules:[g2(),VD({provider:new Ap("e3woncd7avj211yte2cq9hp3pwz203bfqgnih5prszgjhjewsu"),debug:!1,isTokenAutoRefreshEnabled:!0})]});Ag.mount("#app");export{YH as A,cW as B,fW as C,pW as D,aT as E,zt as F,Sd as G,aW as H,dT as I,No as J,F0 as K,eW as L,Li as M,SU as N,oW as O,dW as P,tW as Q,lW as R,Hf as S,Ke as T,Cv as U,XH as V,JH as W,GR as X,O2 as _,_2 as a,ir as b,Gt as c,Ra as d,nt as e,Kt as f,np as g,Qg as h,ZH as i,He as j,S0 as k,jR as l,cE as m,JR as n,ts as o,hW as p,CU as q,yn as r,aC as s,gd as t,DD as u,UR as v,Ml as w,pU as x,uW as y,DU as z};
