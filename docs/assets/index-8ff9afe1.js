(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerPolicy&&(i.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?i.credentials="include":u.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}})();const $r=n=>{const r=n.substring(0,n.length-1);return isNaN(r)?r==="A"?11:10:r*1},Fn=(n,r,t,e)=>(t[n]=t[n]+$r(r),e[n].innerText=t[n],t[n]),$n=(n,r,t)=>{if(!n)throw new Error("El turno del jugador es obligatorio");if(!r)throw new Error("La carta es obligatoria");if(!t)throw new Error("El contenedor HTML de las cartas es obligatorio");const e=document.createElement("img");e.src=`assets/cards/${r}.png`,e.classList.add("card"),t[n].append(e)};var zn="1.13.6",Mn=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Y=Array.prototype,fn=Object.prototype,Nn=typeof Symbol<"u"?Symbol.prototype:null,zr=Y.push,F=Y.slice,L=fn.toString,Cr=fn.hasOwnProperty,Cn=typeof ArrayBuffer<"u",Gr=typeof DataView<"u",Wr=Array.isArray,In=Object.keys,Bn=Object.create,Pn=Cn&&ArrayBuffer.isView,Ur=isNaN,Jr=isFinite,Gn=!{toString:null}.propertyIsEnumerable("toString"),Tn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Hr=Math.pow(2,53)-1;function m(n,r){return r=r==null?n.length-1:+r,function(){for(var t=Math.max(arguments.length-r,0),e=Array(t),u=0;u<t;u++)e[u]=arguments[u+r];switch(r){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var i=Array(r+1);for(u=0;u<r;u++)i[u]=arguments[u];return i[r]=e,n.apply(this,i)}}function M(n){var r=typeof n;return r==="function"||r==="object"&&!!n}function Xr(n){return n===null}function Wn(n){return n===void 0}function Un(n){return n===!0||n===!1||L.call(n)==="[object Boolean]"}function Qr(n){return!!(n&&n.nodeType===1)}function h(n){var r="[object "+n+"]";return function(t){return L.call(t)===r}}const ln=h("String"),Jn=h("Number"),Yr=h("Date"),Zr=h("RegExp"),Kr=h("Error"),Hn=h("Symbol"),Xn=h("ArrayBuffer");var Qn=h("Function"),xr=Mn.document&&Mn.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof xr!="function"&&(Qn=function(n){return typeof n=="function"||!1});const g=Qn,Yn=h("Object");var Zn=Gr&&Yn(new DataView(new ArrayBuffer(8))),an=typeof Map<"u"&&Yn(new Map),kr=h("DataView");function br(n){return n!=null&&g(n.getInt8)&&Xn(n.buffer)}const W=Zn?br:kr,N=Wr||h("Array");function E(n,r){return n!=null&&Cr.call(n,r)}var b=h("Arguments");(function(){b(arguments)||(b=function(n){return E(n,"callee")})})();const on=b;function jr(n){return!Hn(n)&&Jr(n)&&!isNaN(parseFloat(n))}function Kn(n){return Jn(n)&&Ur(n)}function xn(n){return function(){return n}}function kn(n){return function(r){var t=n(r);return typeof t=="number"&&t>=0&&t<=Hr}}function bn(n){return function(r){return r==null?void 0:r[n]}}const U=bn("byteLength"),nt=kn(U);var rt=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function tt(n){return Pn?Pn(n)&&!W(n):nt(n)&&rt.test(L.call(n))}const jn=Cn?tt:xn(!1),d=bn("length");function et(n){for(var r={},t=n.length,e=0;e<t;++e)r[n[e]]=!0;return{contains:function(u){return r[u]===!0},push:function(u){return r[u]=!0,n.push(u)}}}function nr(n,r){r=et(r);var t=Tn.length,e=n.constructor,u=g(e)&&e.prototype||fn,i="constructor";for(E(n,i)&&!r.contains(i)&&r.push(i);t--;)i=Tn[t],i in n&&n[i]!==u[i]&&!r.contains(i)&&r.push(i)}function v(n){if(!M(n))return[];if(In)return In(n);var r=[];for(var t in n)E(n,t)&&r.push(t);return Gn&&nr(n,r),r}function ut(n){if(n==null)return!0;var r=d(n);return typeof r=="number"&&(N(n)||ln(n)||on(n))?r===0:d(v(n))===0}function rr(n,r){var t=v(r),e=t.length;if(n==null)return!e;for(var u=Object(n),i=0;i<e;i++){var f=t[i];if(r[f]!==u[f]||!(f in u))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=zn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Sn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,U(n))}var Ln="[object DataView]";function j(n,r,t,e){if(n===r)return n!==0||1/n===1/r;if(n==null||r==null)return!1;if(n!==n)return r!==r;var u=typeof n;return u!=="function"&&u!=="object"&&typeof r!="object"?!1:tr(n,r,t,e)}function tr(n,r,t,e){n instanceof c&&(n=n._wrapped),r instanceof c&&(r=r._wrapped);var u=L.call(n);if(u!==L.call(r))return!1;if(Zn&&u=="[object Object]"&&W(n)){if(!W(r))return!1;u=Ln}switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:+n==0?1/+n===1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return Nn.valueOf.call(n)===Nn.valueOf.call(r);case"[object ArrayBuffer]":case Ln:return tr(Sn(n),Sn(r),t,e)}var i=u==="[object Array]";if(!i&&jn(n)){var f=U(n);if(f!==U(r))return!1;if(n.buffer===r.buffer&&n.byteOffset===r.byteOffset)return!0;i=!0}if(!i){if(typeof n!="object"||typeof r!="object")return!1;var l=n.constructor,o=r.constructor;if(l!==o&&!(g(l)&&l instanceof l&&g(o)&&o instanceof o)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var a=t.length;a--;)if(t[a]===n)return e[a]===r;if(t.push(n),e.push(r),i){if(a=n.length,a!==r.length)return!1;for(;a--;)if(!j(n[a],r[a],t,e))return!1}else{var s=v(n),p;if(a=s.length,v(r).length!==a)return!1;for(;a--;)if(p=s[a],!(E(r,p)&&j(n[p],r[p],t,e)))return!1}return t.pop(),e.pop(),!0}function it(n,r){return j(n,r)}function $(n){if(!M(n))return[];var r=[];for(var t in n)r.push(t);return Gn&&nr(n,r),r}function cn(n){var r=d(n);return function(t){if(t==null)return!1;var e=$(t);if(d(e))return!1;for(var u=0;u<r;u++)if(!g(t[n[u]]))return!1;return n!==ir||!g(t[sn])}}var sn="forEach",er="has",vn=["clear","delete"],ur=["get",er,"set"],ft=vn.concat(sn,ur),ir=vn.concat(ur),lt=["add"].concat(vn,sn,er);const at=an?cn(ft):h("Map"),ot=an?cn(ir):h("WeakMap"),ct=an?cn(lt):h("Set"),st=h("WeakSet");function P(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function vt(n){for(var r=v(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e}function fr(n){for(var r={},t=v(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function nn(n){var r=[];for(var t in n)g(n[t])&&r.push(t);return r.sort()}function hn(n,r){return function(t){var e=arguments.length;if(r&&(t=Object(t)),e<2||t==null)return t;for(var u=1;u<e;u++)for(var i=arguments[u],f=n(i),l=f.length,o=0;o<l;o++){var a=f[o];(!r||t[a]===void 0)&&(t[a]=i[a])}return t}}const lr=hn($),J=hn(v),ar=hn($,!0);function ht(){return function(){}}function or(n){if(!M(n))return{};if(Bn)return Bn(n);var r=ht();r.prototype=n;var t=new r;return r.prototype=null,t}function pt(n,r){var t=or(n);return r&&J(t,r),t}function gt(n){return M(n)?N(n)?n.slice():lr({},n):n}function mt(n,r){return r(n),n}function cr(n){return N(n)?n:[n]}c.toPath=cr;function z(n){return c.toPath(n)}function pn(n,r){for(var t=r.length,e=0;e<t;e++){if(n==null)return;n=n[r[e]]}return t?n:void 0}function sr(n,r,t){var e=pn(n,z(r));return Wn(e)?t:e}function dt(n,r){r=z(r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(!E(n,u))return!1;n=n[u]}return!!t}function gn(n){return n}function q(n){return n=J({},n),function(r){return rr(r,n)}}function mn(n){return n=z(n),function(r){return pn(r,n)}}function C(n,r,t){if(r===void 0)return n;switch(t??3){case 1:return function(e){return n.call(r,e)};case 3:return function(e,u,i){return n.call(r,e,u,i)};case 4:return function(e,u,i,f){return n.call(r,e,u,i,f)}}return function(){return n.apply(r,arguments)}}function vr(n,r,t){return n==null?gn:g(n)?C(n,r,t):M(n)&&!N(n)?q(n):mn(n)}function dn(n,r){return vr(n,r,1/0)}c.iteratee=dn;function y(n,r,t){return c.iteratee!==dn?c.iteratee(n,r):vr(n,r,t)}function yt(n,r,t){r=y(r,t);for(var e=v(n),u=e.length,i={},f=0;f<u;f++){var l=e[f];i[l]=r(n[l],l,n)}return i}function hr(){}function wt(n){return n==null?hr:function(r){return sr(n,r)}}function _t(n,r,t){var e=Array(Math.max(0,n));r=C(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e}function rn(n,r){return r==null&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}const D=Date.now||function(){return new Date().getTime()};function pr(n){var r=function(i){return n[i]},t="(?:"+v(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(i){return i=i==null?"":""+i,e.test(i)?i.replace(u,r):i}}const gr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},At=pr(gr),Et=fr(gr),Ot=pr(Et),Mt=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,Nt={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},It=/\\|'|\r|\n|\u2028|\u2029/g;function Bt(n){return"\\"+Nt[n]}var Pt=/^\s*(\w|\$)+\s*$/;function Tt(n,r,t){!r&&t&&(r=t),r=ar({},r,c.templateSettings);var e=RegExp([(r.escape||K).source,(r.interpolate||K).source,(r.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(a,s,p,En,On){return i+=n.slice(u,On).replace(It,Bt),u=On+a.length,s?i+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:p?i+=`'+
((__t=(`+p+`))==null?'':__t)+
'`:En&&(i+=`';
`+En+`
__p+='`),a}),i+=`';
`;var f=r.variable;if(f){if(!Pt.test(f))throw new Error("variable is not a bare identifier: "+f)}else i=`with(obj||{}){
`+i+`}
`,f="obj";i=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+i+`return __p;
`;var l;try{l=new Function(f,"_",i)}catch(a){throw a.source=i,a}var o=function(a){return l.call(this,a,c)};return o.source="function("+f+`){
`+i+"}",o}function St(n,r,t){r=z(r);var e=r.length;if(!e)return g(t)?t.call(n):t;for(var u=0;u<e;u++){var i=n==null?void 0:n[r[u]];i===void 0&&(i=t,u=e),n=g(i)?i.call(n):i}return n}var Lt=0;function qt(n){var r=++Lt+"";return n?n+r:r}function Dt(n){var r=c(n);return r._chain=!0,r}function mr(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=or(n.prototype),f=n.apply(i,u);return M(f)?f:i}var T=m(function(n,r){var t=T.placeholder,e=function(){for(var u=0,i=r.length,f=Array(i),l=0;l<i;l++)f[l]=r[l]===t?arguments[u++]:r[l];for(;u<arguments.length;)f.push(arguments[u++]);return mr(n,e,this,this,f)};return e});T.placeholder=c;const dr=m(function(n,r,t){if(!g(n))throw new TypeError("Bind must be called on a function");var e=m(function(u){return mr(n,e,r,this,t.concat(u))});return e}),w=kn(d);function I(n,r,t,e){if(e=e||[],!r&&r!==0)r=1/0;else if(r<=0)return e.concat(n);for(var u=e.length,i=0,f=d(n);i<f;i++){var l=n[i];if(w(l)&&(N(l)||on(l)))if(r>1)I(l,r-1,t,e),u=e.length;else for(var o=0,a=l.length;o<a;)e[u++]=l[o++];else t||(e[u++]=l)}return e}const Rt=m(function(n,r){r=I(r,!1,!1);var t=r.length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=dr(n[e],n)}return n});function Vt(n,r){var t=function(e){var u=t.cache,i=""+(r?r.apply(this,arguments):e);return E(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return t.cache={},t}const yr=m(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Ft=T(yr,c,1);function $t(n,r,t){var e,u,i,f,l=0;t||(t={});var o=function(){l=t.leading===!1?0:D(),e=null,f=n.apply(u,i),e||(u=i=null)},a=function(){var s=D();!l&&t.leading===!1&&(l=s);var p=r-(s-l);return u=this,i=arguments,p<=0||p>r?(e&&(clearTimeout(e),e=null),l=s,f=n.apply(u,i),e||(u=i=null)):!e&&t.trailing!==!1&&(e=setTimeout(o,p)),f};return a.cancel=function(){clearTimeout(e),l=0,e=u=i=null},a}function zt(n,r,t){var e,u,i,f,l,o=function(){var s=D()-u;r>s?e=setTimeout(o,r-s):(e=null,t||(f=n.apply(l,i)),e||(i=l=null))},a=m(function(s){return l=this,i=s,u=D(),e||(e=setTimeout(o,r),t&&(f=n.apply(l,i))),f});return a.cancel=function(){clearTimeout(e),e=i=l=null},a}function Ct(n,r){return T(r,n)}function yn(n){return function(){return!n.apply(this,arguments)}}function Gt(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}}function Wt(n,r){return function(){if(--n<1)return r.apply(this,arguments)}}function wr(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}const Ut=T(wr,2);function _r(n,r,t){r=y(r,t);for(var e=v(n),u,i=0,f=e.length;i<f;i++)if(u=e[i],r(n[u],u,n))return u}function Ar(n){return function(r,t,e){t=y(t,e);for(var u=d(r),i=n>0?0:u-1;i>=0&&i<u;i+=n)if(t(r[i],i,r))return i;return-1}}const wn=Ar(1),Er=Ar(-1);function Or(n,r,t,e){t=y(t,e,1);for(var u=t(r),i=0,f=d(n);i<f;){var l=Math.floor((i+f)/2);t(n[l])<u?i=l+1:f=l}return i}function Mr(n,r,t){return function(e,u,i){var f=0,l=d(e);if(typeof i=="number")n>0?f=i>=0?i:Math.max(i+l,f):l=i>=0?Math.min(i+1,l):i+l+1;else if(t&&i&&l)return i=t(e,u),e[i]===u?i:-1;if(u!==u)return i=r(F.call(e,f,l),Kn),i>=0?i+f:-1;for(i=n>0?f:l-1;i>=0&&i<l;i+=n)if(e[i]===u)return i;return-1}}const Nr=Mr(1,wn,Or),Jt=Mr(-1,Er);function tn(n,r,t){var e=w(n)?wn:_r,u=e(n,r,t);if(u!==void 0&&u!==-1)return n[u]}function Ht(n,r){return tn(n,q(r))}function A(n,r,t){r=C(r,t);var e,u;if(w(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=v(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n}function O(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=Array(u),f=0;f<u;f++){var l=e?e[f]:f;i[f]=r(n[l],l,n)}return i}function Ir(n){var r=function(t,e,u,i){var f=!w(t)&&v(t),l=(f||t).length,o=n>0?0:l-1;for(i||(u=t[f?f[o]:o],o+=n);o>=0&&o<l;o+=n){var a=f?f[o]:o;u=e(u,t[a],a,t)}return u};return function(t,e,u,i){var f=arguments.length>=3;return r(t,C(e,i,4),u,f)}}const x=Ir(1),qn=Ir(-1);function B(n,r,t){var e=[];return r=y(r,t),A(n,function(u,i,f){r(u,i,f)&&e.push(u)}),e}function Xt(n,r,t){return B(n,yn(y(r)),t)}function Dn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(!r(n[f],f,n))return!1}return!0}function Rn(n,r,t){r=y(r,t);for(var e=!w(n)&&v(n),u=(e||n).length,i=0;i<u;i++){var f=e?e[i]:i;if(r(n[f],f,n))return!0}return!1}function _(n,r,t,e){return w(n)||(n=P(n)),(typeof t!="number"||e)&&(t=0),Nr(n,r,t)>=0}const Qt=m(function(n,r,t){var e,u;return g(r)?u=r:(r=z(r),e=r.slice(0,-1),r=r[r.length-1]),O(n,function(i){var f=u;if(!f){if(e&&e.length&&(i=pn(i,e)),i==null)return;f=i[r]}return f==null?f:f.apply(i,t)})});function _n(n,r){return O(n,mn(r))}function Yt(n,r){return B(n,q(r))}function Br(n,r,t){var e=-1/0,u=-1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:P(n);for(var l=0,o=n.length;l<o;l++)i=n[l],i!=null&&i>e&&(e=i)}else r=y(r,t),A(n,function(a,s,p){f=r(a,s,p),(f>u||f===-1/0&&e===-1/0)&&(e=a,u=f)});return e}function Zt(n,r,t){var e=1/0,u=1/0,i,f;if(r==null||typeof r=="number"&&typeof n[0]!="object"&&n!=null){n=w(n)?n:P(n);for(var l=0,o=n.length;l<o;l++)i=n[l],i!=null&&i<e&&(e=i)}else r=y(r,t),A(n,function(a,s,p){f=r(a,s,p),(f<u||f===1/0&&e===1/0)&&(e=a,u=f)});return e}var Kt=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Pr(n){return n?N(n)?F.call(n):ln(n)?n.match(Kt):w(n)?O(n,gn):P(n):[]}function Tr(n,r,t){if(r==null||t)return w(n)||(n=P(n)),n[rn(n.length-1)];var e=Pr(n),u=d(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,f=0;f<r;f++){var l=rn(f,i),o=e[f];e[f]=e[l],e[l]=o}return e.slice(0,r)}function Sr(n){return Tr(n,1/0)}function xt(n,r,t){var e=0;return r=y(r,t),_n(O(n,function(u,i,f){return{value:u,index:e++,criteria:r(u,i,f)}}).sort(function(u,i){var f=u.criteria,l=i.criteria;if(f!==l){if(f>l||f===void 0)return 1;if(f<l||l===void 0)return-1}return u.index-i.index}),"value")}function Z(n,r){return function(t,e,u){var i=r?[[],[]]:{};return e=y(e,u),A(t,function(f,l){var o=e(f,l,t);n(i,f,o)}),i}}const kt=Z(function(n,r,t){E(n,t)?n[t].push(r):n[t]=[r]}),bt=Z(function(n,r,t){n[t]=r}),jt=Z(function(n,r,t){E(n,t)?n[t]++:n[t]=1}),ne=Z(function(n,r,t){n[t?0:1].push(r)},!0);function re(n){return n==null?0:w(n)?n.length:v(n).length}function te(n,r,t){return r in t}const Lr=m(function(n,r){var t={},e=r[0];if(n==null)return t;g(e)?(r.length>1&&(e=C(e,r[1])),r=$(n)):(e=te,r=I(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var f=r[u],l=n[f];e(l,f,n)&&(t[f]=l)}return t}),ee=m(function(n,r){var t=r[0],e;return g(t)?(t=yn(t),r.length>1&&(e=r[1])):(r=O(I(r,!1,!1),String),t=function(u,i){return!_(r,i)}),Lr(n,t,e)});function qr(n,r,t){return F.call(n,0,Math.max(0,n.length-(r==null||t?1:r)))}function k(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[0]:qr(n,n.length-r)}function G(n,r,t){return F.call(n,r==null||t?1:r)}function ue(n,r,t){return n==null||n.length<1?r==null||t?void 0:[]:r==null||t?n[n.length-1]:G(n,Math.max(0,n.length-r))}function ie(n){return B(n,Boolean)}function fe(n,r){return I(n,r,!1)}const Dr=m(function(n,r){return r=I(r,!0,!0),B(n,function(t){return!_(r,t)})}),le=m(function(n,r){return Dr(n,r)});function en(n,r,t,e){Un(r)||(e=t,t=r,r=!1),t!=null&&(t=y(t,e));for(var u=[],i=[],f=0,l=d(n);f<l;f++){var o=n[f],a=t?t(o,f,n):o;r&&!t?((!f||i!==a)&&u.push(o),i=a):t?_(i,a)||(i.push(a),u.push(o)):_(u,o)||u.push(o)}return u}const ae=m(function(n){return en(I(n,!0,!0))});function oe(n){for(var r=[],t=arguments.length,e=0,u=d(n);e<u;e++){var i=n[e];if(!_(r,i)){var f;for(f=1;f<t&&_(arguments[f],i);f++);f===t&&r.push(i)}}return r}function un(n){for(var r=n&&Br(n,d).length||0,t=Array(r),e=0;e<r;e++)t[e]=_n(n,e);return t}const ce=m(un);function se(n,r){for(var t={},e=0,u=d(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t}function ve(n,r,t){r==null&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u}function he(n,r){if(r==null||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(F.call(n,e,e+=r));return t}function An(n,r){return n._chain?c(r).chain():r}function Rr(n){return A(nn(n),function(r){var t=c[r]=n[r];c.prototype[r]=function(){var e=[this._wrapped];return zr.apply(e,arguments),An(this,t.apply(c,e))}}),c}A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=Y[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(r.apply(t,arguments),(n==="shift"||n==="splice")&&t.length===0&&delete t[0]),An(this,t)}});A(["concat","join","slice"],function(n){var r=Y[n];c.prototype[n]=function(){var t=this._wrapped;return t!=null&&(t=r.apply(t,arguments)),An(this,t)}});const pe=Object.freeze(Object.defineProperty({__proto__:null,VERSION:zn,after:Wt,all:Dn,allKeys:$,any:Rn,assign:J,before:wr,bind:dr,bindAll:Rt,chain:Dt,chunk:he,clone:gt,collect:O,compact:ie,compose:Gt,constant:xn,contains:_,countBy:jt,create:pt,debounce:zt,default:c,defaults:ar,defer:Ft,delay:yr,detect:tn,difference:Dr,drop:G,each:A,escape:At,every:Dn,extend:lr,extendOwn:J,filter:B,find:tn,findIndex:wn,findKey:_r,findLastIndex:Er,findWhere:Ht,first:k,flatten:fe,foldl:x,foldr:qn,forEach:A,functions:nn,get:sr,groupBy:kt,has:dt,head:k,identity:gn,include:_,includes:_,indexBy:bt,indexOf:Nr,initial:qr,inject:x,intersection:oe,invert:fr,invoke:Qt,isArguments:on,isArray:N,isArrayBuffer:Xn,isBoolean:Un,isDataView:W,isDate:Yr,isElement:Qr,isEmpty:ut,isEqual:it,isError:Kr,isFinite:jr,isFunction:g,isMap:at,isMatch:rr,isNaN:Kn,isNull:Xr,isNumber:Jn,isObject:M,isRegExp:Zr,isSet:ct,isString:ln,isSymbol:Hn,isTypedArray:jn,isUndefined:Wn,isWeakMap:ot,isWeakSet:st,iteratee:dn,keys:v,last:ue,lastIndexOf:Jt,map:O,mapObject:yt,matcher:q,matches:q,max:Br,memoize:Vt,methods:nn,min:Zt,mixin:Rr,negate:yn,noop:hr,now:D,object:se,omit:ee,once:Ut,pairs:vt,partial:T,partition:ne,pick:Lr,pluck:_n,property:mn,propertyOf:wt,random:rn,range:ve,reduce:x,reduceRight:qn,reject:Xt,rest:G,restArguments:m,result:St,sample:Tr,select:B,shuffle:Sr,size:re,some:Rn,sortBy:xt,sortedIndex:Or,tail:G,take:k,tap:mt,template:Tt,templateSettings:Mt,throttle:$t,times:_t,toArray:Pr,toPath:cr,transpose:un,unescape:Ot,union:ae,uniq:en,unique:en,uniqueId:qt,unzip:un,values:P,where:Yt,without:le,wrap:Ct,zip:ce},Symbol.toStringTag,{value:"Module"}));var Vn=Rr(pe);Vn._=Vn;const ge=(n,r)=>{if(!n||n.length===0)throw new Error("types is required as a string array");if(!r||r.length===0)throw new Error("specials is required as a string array");let t=[];for(let e=2;e<=10;e++)for(const u of n)t.push(e+u);for(const e of n)for(const u of r)t.push(u+e);return Sr(t)},Vr=n=>{if(!n||n.length===0)throw new Error("there are no cards in the deck");if(n.length===0)throw"No hay cartas en la baraja";return n.pop()},me=n=>{const[r,t]=n;setTimeout(()=>{t===r?alert("Empate"):r>21?alert("La Computadora Gana"):(t>21,alert("El Jugador Gana"))},100)},Fr=(n=[],r,t,e)=>{let[u,i]=r;do{const f=Vr(n);i=Fn(r.length-1,f,r,e),$n(r.length-1,f,t)}while(i<u&&u<=21);me(r)};let H=[];const de=["C","D","H","S"],ye=["A","J","Q","K"];let R=[];const S=document.querySelector("#req-card-btn"),V=document.querySelector("#stop-game-btn"),we=document.querySelector("#new-game-btn"),X=document.querySelectorAll("small"),Q=document.querySelectorAll(".divCards"),_e=(n=2)=>{H=ge(de,ye),R=[];for(let r=0;r<n;r++)R.push(0);X.forEach(r=>r.innerText=0),Q.forEach(r=>r.innerText=""),S.disabled=!1,V.disabled=!1};S.addEventListener("click",()=>{const n=Vr(H),r=Fn(0,n,R,X);$n(0,n,Q),r>21?(S.disabled=!0,V.disabled=!0,Fr(H,R,Q,X)):r===21&&(S.disabled=!0,V.disabled=!0)});V.addEventListener("click",()=>{S.disabled=!0,V.disabled=!0,Fr(H,R,Q,X)});we.addEventListener("click",()=>{_e()});
