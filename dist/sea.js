/*
 SeaJS v2.0.0-beta | seajs.org/LICENSE.md
*/
'use strict';(function(t,p){function A(b){return"function"===typeof b}function J(b){for(var c={},a=[],d=0,f=b.length;d<f;d++){var j=b[d];1!==c[j]&&(c[j]=1,a.push(j))}return a}function B(b,c,a){C(b,c);return c[a]}function K(b){b=b.match(ca);return(b?b[0]:".")+"/"}function L(b,c){if(!b)return"";var a=b,d=m.alias,f;if(f=d)if(f=D.call(d,a)){f=a;var j=f.charAt(0);f=-1===f.indexOf("://")&&"."!==j&&"/"!==j}f&&(a=d[a]);var M=m.vars;M&&-1<a.indexOf("{")&&(a=a.replace(da,function(a,b){return D.call(M,b)?M[b]:
"{"+b+"}"}));d=c||E;0<a.indexOf("://")||0===a.indexOf("//")||(0===a.indexOf("./")||0===a.indexOf("../")?(0===a.indexOf("./")&&(a=a.substring(2)),a=K(d)+a):a="/"===a.charAt(0)&&"/"!==a.charAt(1)?d.match(ea)[1]+a:m.base+a);7<a.lastIndexOf("//")&&(a=a.replace(fa,"$1/"));if(-1!==a.indexOf(".")){d=a.split("/");f=[];for(var e=0;e<d.length;e++)if(j=d[e],".."===j){if(0===f.length)throw Error("The path is invalid: "+a);f.pop()}else"."!==j&&f.push(j);a=f.join("/")}"#"===a.charAt(a.length-1)?a=a.slice(0,-1):
ga.test(a)||(a+=".js");a=a.replace(":80/","/");d=m.map||[];e=a;if(f=d.length)for(j=0;j<f&&!(e=d[j],e=A(e)?e(a)||a:a.replace(e[0],e[1]),e!==a);j++);return e}function S(b,c){var a=b.sheet,d;if(T)a&&(d=!0);else if(a)try{a.cssRules&&(d=!0)}catch(f){"NS_ERROR_DOM_SECURITY_ERR"===f.name&&(d=!0)}setTimeout(function(){d?c():S(b,c)},1)}function ha(){if(F)return F;if(G&&"interactive"===G.readyState)return G;for(var b=x.getElementsByTagName("script"),c=b.length-1;0<=c;c--){var a=b[c];if("interactive"===a.readyState)return G=
a}}function y(b,c){this.uri=b;this.status=c||n.INITIALIZED;this.dependencies=[];this.waitings=[]}function z(b,c){if(u(b)){for(var a=[],d=0,f=b.length;d<f;d++)a[d]=z(b[d],c);return a}a=B("resolve",{id:b,refUri:c,id2Uri:L},"id");return L(a,c)}function U(b,c,a){function d(a){a&&a.status<n.LOADED&&(a.status=n.LOADED);0===--f&&c()}a=a||{};b=a.filtered?b:V(b);if(0===b.length)c();else{C("load",b);for(var f=a=b.length,e=0;e<a;e++)(function(a){function b(){if(c.status<n.SAVED)d();else if(W(c)){var a=v;a.push(a[0]);
N("Found circular dependencies: "+a.join(" --\x3e "));v.length=0;d()}else a=c.waitings=V(c.dependencies),0===a.length?d(c):U(a.slice(),function(){d(c)},{filtered:!0})}var c=s[a];if(c.status<n.SAVED){var f=function(){delete O[e];P[e]=!0;H&&(X(a,H),H=null);var b,c=I[e];for(delete I[e];b=c.shift();)b()},e=B("fetch",{uri:a,fetchedList:P},"uri");if(P[e])b();else if(O[e])I[e].push(b);else{O[e]=!0;I[e]=[b];var j=m.charset;if(!B("request",{uri:e,callback:f,charset:j},"requested")){var g=e,l=ia.test(g),q=
r.createElement(l?"link":"script");if(j&&(j=A(j)?j(g):j))q.charset=j;if("SCRIPT"===q.nodeName){var h=q;h.onload=h.onerror=h.onreadystatechange=function(){ja.test(h.readyState)&&(h.onload=h.onerror=h.onreadystatechange=null,m.debug||x.removeChild(h),h=p,f&&f())}}else{var k=q;T||ka?setTimeout(function(){S(k,f)},1):k.onload=k.onerror=function(){k.onload=k.onerror=null;k=p;f&&f()}}l?(q.rel="stylesheet",q.href=g):(q.async=!0,q.src=g);F=q;Y?x.insertBefore(q,Y):x.appendChild(q);F=null}}}else b()})(b[e])}}
function la(b,c,a){var d=arguments.length;1===d?(a=b,b=p):2===d&&(a=c,c=p,u(b)&&(c=b,b=p));if(!u(c)&&A(a)){var d=a.toString(),f=[],e;Z.lastIndex=0;for(d=d.replace(ma,"");e=Z.exec(d);)e[2]&&f.push(e[2]);c=f}var d={id:b,dependencies:c,factory:a},g;!b&&r.attachEvent&&((f=ha())&&f.src?(g=f.hasAttribute?f.src:f.getAttribute("src",4),g=B("derived",{uri:g},"uri")):N("Failed to derive script: "+a));(g=b?z(b):g)?X(g,d):H=d}function X(b,c){var a=s[b]||(s[b]=new y(b,void 0));a.status<n.SAVED&&(a.id=c.id||b,
a.dependencies=J(z(c.dependencies||[],b)),a.factory=c.factory,a.status=n.SAVED)}function $(b){function c(a){a=s[c.resolve(a)];if(a===p)return null;a.parent=b;return $(a)}if(!b)return null;if(b.status>=n.COMPILING)return b.exports;C("compile",b);if(b.status<n.LOADED&&b.exports===p)return null;b.status=n.COMPILING;c.async=function(a,d){b.load(a,d);return c};c.resolve=function(a){return z(a,b.uri)};c.cache=s;var a=b.factory,d=a===p?b.exports:a;A(a)&&(d=a(c,b.exports={},b));b.exports=d===p?b.exports:
d;b.status=n.COMPILED;C("compiled",b);return b.exports}function V(b){for(var c=[],a=0,d=b.length;a<d;a++){var f=b[a];f&&(s[f]||(s[f]=new y(f,void 0))).status<n.LOADED&&c.push(f)}return c}function W(b){var c=b.waitings;if(0===c.length)return!1;v.push(b.uri);b=c.concat(v);if(J(b).length<b.length){b=v[0];for(var a=c.length-1;0<=a;a--)if(c[a]===b){c.splice(a,1);break}return!0}for(b=0;b<c.length;b++)if(W(s[c[b]]))return!0;v.pop();return!1}function Q(b){for(var c in b){var a=b[c];if(D.call(b,c)&&a!==p){if("plugins"===
c){c="preload";var d=[],f=void 0;for(u(a)||(a=[a]);f=a.shift();)d.push("{seajs}/plugin-"+f);a=d}if((d=m[c])&&/alias|vars/.test(c))for(var e in a){if(D.call(a,e)){f=a[e];if(e in d){var h=d[e];h!==f&&N("The config of "+c+'["'+e+'"] is changed from "'+h+'" to "'+f+'"',"warn")}d[e]=f}}else u(d)&&(a=d.concat(a)),m[c]=a,"base"===c&&(a=m.base,0<a.indexOf("://")||0===a.indexOf("//")||(m.base=L(("/"===a.charAt(0)&&"/"!==a.charAt(1)?"":"./")+a+("/"===a.charAt(a.length-1)?"":"/"))))}}return g}if(!t.seajs){var g=
t.seajs={version:"2.0.0-beta"},D={}.hasOwnProperty,u=Array.isArray||function(b){return b instanceof Array},N=g.log=function(b,c){var a=t.console;if(a&&(c||m.debug))a[c||"log"](b)},w={};g.on=function(b,c){if(!c)return g;(w[b]||(w[b]=[])).push(c);return g};g.off=function(b,c){if(!b&&!c)return w={},g;var a=w[b];if(a)if(c)for(var d=a.length-1;0<=d;d--)a[d]===c&&a.splice(d,1);else delete w[b];return g};var C=g.emit=function(b){var c=w[b];if(!c)return g;for(var a=[],d=1,e=arguments.length;d<e;d++)a[d-1]=
arguments[d];c=c.slice();d=0;for(e=c.length;d<e;d++)c[d].apply(t,a);return g},ca=/[^?]*(?=\/.*$)/,fa=/([^:\/])\/\/+/g,ga=/\?|\.(?:css|js)$|\/$/,ea=/^(.*?:\/\/.*?)(?:\/|$)/,da=/{([^{}]+)}/g,r=document,h=t.location,E,e=h.pathname;"/"!==e.charAt(0)&&(e="/"+e);e=h.protocol+"//"+h.host+e;-1<e.indexOf("\\")&&(e=e.replace(/\\/g,"/"));E=e;if(!(e=r.getElementById("seajs-node")))e=r.getElementsByTagName("script"),e=e[e.length-1]||r.createElement("script");var k=e,e=(k.hasAttribute?k.src:k.getAttribute("src",
4))||E,x=r.head||r.getElementsByTagName("head")[0]||r.documentElement,Y=x.getElementsByTagName("base")[0],ia=/\.css(?:\?|$)/i,ja=/loaded|complete|undefined/,F,G,l=navigator.userAgent,T=536>Number(l.replace(/.*AppleWebKit\/(\d+)\..*/,"$1")),ka=0<l.indexOf("Firefox")&&!("onload"in r.createElement("link")),Z=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,ma=/\\\\/g,s=g.cache={},n=y.STATUS={INITIALIZED:1,
SAVED:2,LOADED:3,COMPILING:4,COMPILED:5};y.prototype.load=function(b,c){var a=z(u(b)?b:[b],this.uri);U(a,function(){for(var b=[],e=0,g=a.length;e<g;e++)b[e]=$(s[a[e]]);c&&c.apply(t,b)});return this};var O={},P={},I={},H=null,v=[],aa=new y(E,n.COMPILED);g.use=function(b,c){var a=m.preload;m.preload=[];aa.load(a,function(){aa.load(b,c)});return g};t.define=la;var l=K(e),ba=l.match(/^(.+\/)seajs\/\d[^/]+\/$/);ba&&(l=ba[1]);var m=Q.data={base:l,charset:"utf-8"};g.config=Q;var l=k.getAttribute("data-config"),
k=k.getAttribute("data-main"),e={seajs:K(e)},l=l?[l]:p,R=[],h=h.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2"),h=h+(" "+r.cookie);h.replace(/seajs-(\w+)=1/g,function(b,c){R.push(c)});h=R.length?J(R):p;Q({vars:e,preload:l,plugins:h});k&&g.use(k)}})(this);
//@ sourceMappingURL=sea.js.map