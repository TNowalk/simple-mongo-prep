(this["webpackJsonpsimple-mongo-prep"]=this["webpackJsonpsimple-mongo-prep"]||[]).push([[0],{166:function(e,t,n){e.exports=n(295)},171:function(e,t,n){},172:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(33),c=n.n(o),l=(n(171),n(96)),s=n(97),i=(n(172),n(173),n(306)),u=n(309),f=n(308),m=n(307);function p(e,t,n,a){this.type=e,this.raw=t,this.isAltered=n,this.value=a}Number.MAX_SAFE_INTEGER||(Number.MAX_SAFE_INTEGER=9007199254740991),Number.isSafeInteger=Number.isSafeInteger||function(e){return Number.isInteger(e)&&Math.abs(e)<=Number.MAX_SAFE_INTEGER};var h=function(){var e=Object(a.createRef)(),t=Object(a.useState)(),n=Object(l.a)(t,2),o=n[0],c=n[1],h=Object(a.useState)(),v=Object(l.a)(h,2),b=v[0],g=v[1];return Object(a.useEffect)((function(){try{var e=function e(t){if(t instanceof Array)for(var n=0,a=t.length;n<a;n++)t[n]=e(t[n]);else{if("object"!==typeof t||Array.isArray(t)){var r=typeof t;return"number"===r&&Number.isSafeInteger(t)?new p(r,t,!0,"NumberInt(".concat(t,")")):new p(r,t,!1,t)}for(var o in t)t[o]=e(t[o])}return t}(JSON.parse(o));console.log(e),g(function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=[];if(t instanceof Array){a.push("[".padStart(1+4*n," "));for(var r=0,o=t.length;r<o;r++){if(t[r]instanceof p){var c=e(t[r],n+1);a.push(c.padStart(c.length+4*(n+1)))}else a=[].concat(Object(s.a)(a),Object(s.a)(e(t[r],n+1)));r<o-1&&(a[a.length-1]+=",")}a.push("]".padStart(1+4*n," "))}else{if("object"!==typeof t||Array.isArray(t)||t instanceof p)return"string"===t.type?'"'.concat(t.value,'"'):"number"===t.type?"".concat(t.value):t.value;if(a.push("{".padStart(1+4*n," ")),Object.keys(t).length){for(var l in t){var i=e(t[l],n+1),u='"'.concat(l,'": ').concat(i,", ");a.push(u.padStart(u.length+4*(n+1)))}a[a.length-1]=a[a.length-1].slice(0,-1)}a.push("}".padStart(1+4*n," "))}return a}(e).join("\n"))}catch(t){g("Please enter a valid JSON string")}}),[o]),r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(u.a,{columns:2},r.a.createElement(u.a.Row,null,r.a.createElement(u.a.Column,null,r.a.createElement(f.a,null,r.a.createElement(m.a,{rows:30,placeholder:"Enter JSON",onChange:function(e,t){return c(t.value)},ref:e}))),r.a.createElement(u.a.Column,null,r.a.createElement(f.a,null,r.a.createElement(m.a,{rows:30,placeholder:"Tell us more",value:b})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.3fb38466.chunk.js.map