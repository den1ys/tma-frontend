/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[8],{441:function(ia,ba,e){e.r(ba);var ea=e(1);ia=e(51);var x=e(163),ha=e(376),ca=e(229),da=window;e=function(){function e(e,x){this.ZU=function(e){e=e.split(".");return e[e.length-1].match(/(jpg|jpeg|png|gif)$/i)};x=x||{};this.url=e;this.filename=x.filename||e;this.jf=x.customHeaders;this.bma=!!x.useDownloader;this.withCredentials=!!x.withCredentials}e.prototype.vE=function(e){this.jf=e};e.prototype.getCustomHeaders=function(){return this.jf};
e.prototype.getFileData=function(w){var y=this,n=this,h=new XMLHttpRequest,f=0===this.url.indexOf("blob:")?"blob":"arraybuffer";h.open("GET",this.url,!0);h.withCredentials=this.withCredentials;h.responseType=f;this.jf&&Object.keys(this.jf).forEach(function(e){h.setRequestHeader(e,y.jf[e])});var r=/^https?:/i.test(this.url);h.addEventListener("load",function(f){return Object(ea.b)(this,void 0,void 0,function(){var h,y,z,aa,ba,da;return Object(ea.d)(this,function(ea){switch(ea.label){case 0:if(200!==
this.status&&(r||0!==this.status))return[3,10];n.trigger(e.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,f.loaded]);if("blob"!==this.responseType)return[3,4];h=this.response;return n.ZU(n.filename)?[4,Object(ca.b)(h)]:[3,2];case 1:return y=ea.ea(),n.fileSize=y.byteLength,w(new Uint8Array(y)),[3,3];case 2:z=new FileReader,z.onload=function(e){e=new Uint8Array(e.target.result);n.fileSize=e.length;w(e)},z.readAsArrayBuffer(h),ea.label=3;case 3:return[3,9];case 4:ea.Fg.push([4,8,,9]);aa=new Uint8Array(this.response);
if(!n.ZU(n.filename))return[3,6];h=new Blob([aa.buffer]);return[4,Object(ca.b)(h)];case 5:return y=ea.ea(),n.fileSize=y.byteLength,w(new Uint8Array(y)),[3,7];case 6:n.fileSize=aa.length,w(aa),ea.label=7;case 7:return[3,9];case 8:return ea.ea(),n.trigger(e.Events.ERROR,["pdfLoad","Out of memory"]),[3,9];case 9:return[3,11];case 10:ba=f.currentTarget,da=Object(x.b)(ba),n.trigger(e.Events.ERROR,["pdfLoad",this.status+" "+ba.statusText,da]),ea.label=11;case 11:return n.Yy=null,[2]}})})},!1);h.onprogress=
function(f){n.trigger(e.Events.DOCUMENT_LOADING_PROGRESS,[f.loaded,0<f.total?f.total:0])};h.addEventListener("error",function(){n.trigger(e.Events.ERROR,["pdfLoad","Network failure"]);n.Yy=null},!1);h.send();this.Yy=h};e.prototype.getFile=function(){var e=this;return new Promise(function(w){da.utils.isJSWorker&&w(e.url);if(e.bma){var n=Object(ea.a)({url:e.url},e.jf?{customHeaders:e.jf}:{});w(n)}w(null)})};e.prototype.abort=function(){this.Yy&&(this.Yy.abort(),this.Yy=null)};e.Events={DOCUMENT_LOADING_PROGRESS:"documentLoadingProgress",
ERROR:"error"};return e}();Object(ia.a)(e);Object(ha.a)(e);Object(ha.b)(e);ba["default"]=e}}]);}).call(this || window)
