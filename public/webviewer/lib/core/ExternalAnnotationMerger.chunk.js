/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{449:function(ia,ba,e){e.r(ba);var ea=e(1),x=e(476),ha=e(477),ca;(function(e){e[e.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";e[e.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";e[e.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(ca||(ca={}));ia=function(){function e(e){this.aa=e;this.state=ca.EXTERNAL_XFDF_NOT_REQUESTED}e.prototype.lca=function(){var e=this;return function(w,x,n){return Object(ea.b)(e,
void 0,void 0,function(){var e,f,r,y,aa,ba,da,ha=this,ia;return Object(ea.d)(this,function(h){switch(h.label){case 0:if(this.state!==ca.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];e=this.aa.getDocument().Bs();return[4,this.Haa(e)];case 1:f=h.ea(),r=this.G6(f),this.nI=null!==(ia=null===r||void 0===r?void 0:r.parse())&&void 0!==ia?ia:null,this.state=null===this.nI?ca.EXTERNAL_XFDF_NOT_AVAILABLE:ca.EXTERNAL_XFDF_AVAILABLE,h.label=2;case 2:if(this.state===ca.EXTERNAL_XFDF_NOT_AVAILABLE)return n(w),[2];y=
new DOMParser;aa=y.parseFromString(w,"text/xml");x.forEach(function(e){ha.merge(aa,ha.nI,e-1)});ba=new XMLSerializer;da=ba.serializeToString(aa);n(da);return[2]}})})}};e.prototype.hM=function(e){this.Haa=e};e.prototype.se=function(){this.nI=void 0;this.state=ca.EXTERNAL_XFDF_NOT_REQUESTED};e.prototype.G6=function(e){return e?Array.isArray(e)?new x.a(e):"string"!==typeof e?null:(new DOMParser).parseFromString(e,"text/xml").querySelector("xfdf > add")?new x.a(e):new ha.a(e):null};e.prototype.merge=
function(e,w,x){var n=this;0===x&&(this.Gea(e,w.wp),this.Iea(e,w.VH));var h=w.ca[x];h&&(this.Jea(e,h.wn),this.Lea(e,h.m_,w.kw),this.Kea(e,h.page,x),this.Hea(e,h.UR));h=this.aa.Wb();if(x===h-1){var f=w.kw;Object.keys(f).forEach(function(h){f[h].EJ||n.KV(e,h,f[h])})}};e.prototype.Gea=function(e,w){null!==w&&(e=this.yv(e),this.Mq(e,"calculation-order",w))};e.prototype.Iea=function(e,w){null!==w&&(e=this.yv(e),this.Mq(e,"document-actions",w))};e.prototype.Jea=function(e,w){var x=this,n=this.xv(e.querySelector("xfdf"),
"annots");Object.keys(w).forEach(function(e){x.Mq(n,'[name="'+e+'"]',w[e])})};e.prototype.Lea=function(e,w,x){var n=this;if(0!==w.length){var h=this.yv(e);w.forEach(function(f){var r=f.getAttribute("field"),w=x[r];w&&(n.KV(e,r,w),n.Mq(h,"null",f))})}};e.prototype.KV=function(e,w,x){var n=this.yv(e);null!==x.TB&&this.Mq(n,'ffield [name="'+w+'"]',x.TB);e=this.xv(e.querySelector("xfdf"),"fields");w=w.split(".");this.rL(e,w,0,x.value);x.EJ=!0};e.prototype.Kea=function(e,w,x){null!==w&&(e=this.yv(e),e=
this.xv(e,"pages"),this.Mq(e,'[number="'+(x+1)+'"]',w))};e.prototype.Hea=function(e,w){Object.keys(w).forEach(function(w){(w=e.querySelector('annots [name="'+w+'"]'))&&w.parentElement.removeChild(w)})};e.prototype.rL=function(e,w,x,n){if(x===w.length)w=document.createElementNS("","value"),w.textContent=n,this.Mq(e,"value",w);else{var h=w[x];this.xv(e,'[name="'+h+'"]',"field").setAttribute("name",h);e=e.querySelectorAll('[name="'+h+'"]');1===e.length?this.rL(e[0],w,x+1,n):(h=this.s$(e),this.rL(x===
w.length-1?h:this.tla(e,h),w,x+1,n))}};e.prototype.s$=function(e){for(var w=null,x=0;x<e.length;x++){var n=e[x];if(0===n.childElementCount||1===n.childElementCount&&"value"===n.children[0].tagName){w=n;break}}return w};e.prototype.tla=function(e,w){for(var x=0;x<e.length;x++)if(e[x]!==w)return e[x];return null};e.prototype.Mq=function(e,w,x){w=e.querySelector(w);null!==w&&e.removeChild(w);e.appendChild(x)};e.prototype.yv=function(e){var w=e.querySelector("pdf-info");if(null!==w)return w;w=this.xv(e.querySelector("xfdf"),
"pdf-info");w.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");w.setAttribute("version","2");w.setAttribute("import-version","4");return w};e.prototype.xv=function(e,w,x){var n=e.querySelector(w);if(null!==n)return n;n=document.createElementNS("",x||w);e.appendChild(n);return n};return e}();ba["default"]=ia},461:function(ia,ba){ia=function(){function e(){}e.prototype.wA=function(e){var x={wp:null,VH:null,kw:{},ca:{}};e=(new DOMParser).parseFromString(e,"text/xml");x.wp=e.querySelector("pdf-info calculation-order");
x.VH=e.querySelector("pdf-info document-actions");x.kw=this.Cfa(e);x.ca=this.Ofa(e);return x};e.prototype.Cfa=function(e){var x=e.querySelector("fields");e=e.querySelectorAll("pdf-info > ffield");if(null===x&&null===e)return{};var ba={};this.q4(ba,x);this.o4(ba,e);return ba};e.prototype.q4=function(e,x){if(null!==x&&x.children){for(var ba=[],ca=0;ca<x.children.length;ca++){var da=x.children[ca];ba.push({name:da.getAttribute("name"),element:da})}for(;0!==ba.length;)for(x=ba.shift(),ca=0;ca<x.element.children.length;ca++)da=
x.element.children[ca],"value"===da.tagName?e[x.name]={value:da.textContent,TB:null,EJ:!1}:da.children&&ba.push({name:x.name+"."+da.getAttribute("name"),element:da})}};e.prototype.o4=function(e,x){x.forEach(function(x){var ba=x.getAttribute("name");e[ba]?e[ba].TB=x:e[ba]={value:null,TB:x,EJ:!1}})};e.prototype.Ofa=function(e){var x=this,ba={};e.querySelectorAll("pdf-info widget").forEach(function(e){var ca=parseInt(e.getAttribute("page"),10)-1;x.SC(ba,ca);ba[ca].m_.push(e)});e.querySelectorAll("pdf-info page").forEach(function(e){var ca=
parseInt(e.getAttribute("number"),10)-1;x.SC(ba,ca);ba[ca].page=e});this.yT(e).forEach(function(e){var ca=parseInt(e.getAttribute("page"),10),aa=e.getAttribute("name");x.SC(ba,ca);ba[ca].wn[aa]=e});this.kT(e).forEach(function(e){var ca=parseInt(e.getAttribute("page"),10);e=e.textContent;x.SC(ba,ca);ba[ca].UR[e]=!0});return ba};e.prototype.SC=function(e,x){e[x]||(e[x]={wn:{},UR:{},m_:[],page:null})};return e}();ba.a=ia},476:function(ia,ba,e){var ea=e(1),x=e(0);e.n(x);ia=function(e){function ba(x){var aa=
e.call(this)||this;aa.f$=Array.isArray(x)?x:[x];return aa}Object(ea.c)(ba,e);ba.prototype.parse=function(){var e=this,aa={wp:null,VH:null,kw:{},ca:{}};this.f$.forEach(function(w){aa=Object(x.merge)(aa,e.wA(w))});return aa};ba.prototype.yT=function(e){var x=[];e.querySelectorAll("add > *").forEach(function(e){x.push(e)});e.querySelectorAll("modify > *").forEach(function(e){x.push(e)});return x};ba.prototype.kT=function(e){return e.querySelectorAll("delete > *")};return ba}(e(461).a);ba.a=ia},477:function(ia,
ba,e){var ea=e(1);ia=function(e){function x(x){var ba=e.call(this)||this;ba.g$=x;return ba}Object(ea.c)(x,e);x.prototype.parse=function(){return this.wA(this.g$)};x.prototype.yT=function(e){return e.querySelectorAll("annots > *")};x.prototype.kT=function(){return[]};return x}(e(461).a);ba.a=ia}}]);}).call(this || window)