/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[6],{164:function(ia,ba,e){function ea(e,f,h,n){return Object(na.b)(void 0,void 0,void 0,function(){var r,w,x,y,aa,ba,da,ea,fa;return Object(na.d)(this,function(ha){switch(ha.label){case 0:return r=Ia.getDocument(),w=[1],[4,Object(ra.c)(f,{extension:"pdf"})];case 1:return x=ha.ea(),y=Ia.ta(),da=(ba=Ba.a).sga,[4,x.SB()];case 2:return aa=da.apply(ba,[ha.ea().xfdfString,e]),ea=!0,[4,r.If(x,w,e,ea)];case 3:return ha.ea(),[4,r.xg([e+1],
ea)];case 4:return ha.ea(),fa=y.Ob().filter(function(f){return f.gK()&&f.PageNumber===e}),y.Wj(fa,{force:!0,source:"contentEditTool"}),[4,y.PJ(aa)];case 5:return ha.ea(),Ia.getDocument().BL(),Ia.AL(e),Ia.Ye(),ca(e),z(e,h.galleys,n),z(e,h.objects,n),[2]}})})}function x(e){e=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector("body");e.querySelectorAll("p").forEach(function(e){e.querySelectorAll("span").forEach(function(e){var f=e.getAttribute("style");f=ha(f,e.innerHTML);e.innerHTML=
f});var f=e.getAttribute("style"),h=e.innerHTML.pj("<br>","");e.innerHTML=ha(f,h)});return e.innerHTML.trim()}function ha(e,f){e.includes("bold")&&(f="<strong>"+f+"</strong>");e.includes("italic")&&(f="<em>"+f+"</em>");e.includes("text-decoration: underline")&&(f="<u>"+f+"</u>");return f}function ca(e){var f=Ia.ta(),h=f.Ob().filter(function(f){return f.Sh()&&f.PageNumber===e});f.Wj(h,{force:!0,source:"contentEditTool"})}function da(e,f){f.forEach(function(f){Ga[e]||(Ga[e]=[]);Ga[e].find(function(e){return e.id===
f.id})||Ga[e].push(f)})}function aa(e,f){f.forEach(function(f){Fa[e]||(Fa[e]=[]);Fa[e].find(function(e){return e.id===f.id})||Fa[e].push(f)})}function w(e){var f=new DOMParser,h=f.parseFromString(e,"text/xml");h.querySelector("parsererror")&&(h=f.parseFromString("<Root>"+e+"</Root>","text/xml"));h.querySelectorAll("a").forEach(function(e){var f=e.childNodes[0];Array.from(e.querySelectorAll("*")).find(function(e){return"u"===e.tagName.toLowerCase()})||(e=document.createElement("u"),f.after(e),e.appendChild(f))});
return(new XMLSerializer).serializeToString(h)}function y(e,f,h,n){this.top=e;this.left=f;this.bottom=h;this.right=n;this.topVal=function(){return Math.round(this.top)};this.bottomVal=function(){return Math.round(this.bottom)};this.leftVal=function(){return Math.round(this.left)};this.rightVal=function(){return Math.round(this.right)};this.height=function(){return Math.round(Math.abs(this.top-this.bottom))};this.width=function(){return Math.round(this.right-this.left)};this.YQ=function(e){return this.topVal()!==
e.topVal()||this.leftVal()!==e.leftVal()||this.bottomVal()!==e.bottomVal()||this.rightVal()!==e.rightVal()}}function n(e,f,h,n,r){this.id=e;this.pagenum=f;this.galleysContents=h;this.contents=n;this.galleyBox=r;Object(wa.g)(Fa)}function h(e,f,h,n){this.id=f;this.type=e;this.bbox=h;this.pagenum=n}function f(e,f,h,n,r){this.id=e;this.pagecount=f;this.pageBBox=h;this.galleys=n;this.objects=r}function r(e,f,h,n,r){var w=[];(new DOMParser).parseFromString(n,"text/html").documentElement.querySelectorAll("p").forEach(function(e,
f){w[f]=e.innerHTML});h=(new DOMParser).parseFromString(h,"text/html");var x=null;h.documentElement.querySelectorAll("p").forEach(function(e,f){f<w.length?(e.innerHTML=w[f],x=e.getAttribute("style"),x=x.replace("font:italic","font:normal"),x=x.replace(" bold "," normal "),x=x.replace("underline:1;","underline:0;"),e.setAttribute("style",x)):e.remove()});for(n=h.documentElement.querySelectorAll("p").length;n<w.length;n++){var y=document.createElement("p");y.setAttribute("id","0");y.innerHTML=w[n];
null!=x&&y.setAttribute("style",x);h.documentElement.querySelector("body").appendChild(y)}h=h.documentElement.querySelector("body").innerHTML;var z="";Fa[e].forEach(function(e){e.id===r&&(z=e)});if(""===z)return"";f="<DOC id='"+f.id+"' pagecount='"+f.pagecount+"'>";f=f+("<STORY galley_ids='"+r+"' pagenum='"+e+"'>")+("<galleys>"+z.galleysContents+"</galleys>");z.contents=h;f=f+h+"\n</STORY>";return f+="</DOC>"}function z(e,f,r){var w=[],x=Ia.getDocument(),y=null;f.forEach(function(f){if(f instanceof
h){var z=x.co(e,f.bbox.leftVal(),f.bbox.topVal());var aa=z.x;var ba=z.y;var ca=x.co(e,f.bbox.rightVal(),f.bbox.bottomVal());z=ca.x;ca=ca.y}else if(f instanceof n)z=x.co(e,f.galleyBox.leftVal(),f.galleyBox.topVal()),aa=z.x,ba=z.y,ca=x.co(e,f.galleyBox.rightVal(),f.galleyBox.bottomVal()),z=ca.x,ca=ca.y;else return;var da=new window.Core.Annotations.RectangleAnnotation,ea=xa.a.OBJECT;f instanceof n&&(ea=xa.a.TEXT);da.Yia(f,ea);da.PageNumber=f.pagenum;da.X=aa;da.Y=ba;da.Width=z-aa;da.Height=ca-ba;da.StrokeColor=
new sa.a("#3183C8");da.FillColor=new sa.a(255,255,255,.01);da.Style="dash";da.Dashes="4,3";da.DB();da.selectionModel=Ea.a;w.push(da);"undefined"!==typeof r&&r===f.id&&(y=da)});f=Ia.ta();f.Ci(w);y&&f.Bg(y);f.kf(w)}function fa(e,f,h){return Object(na.b)(this,void 0,void 0,function(){var n,r,w,x,y;return Object(na.d)(this,function(ba){switch(ba.label){case 0:n=e.data;w=n.cmd;switch(w){case "isReady":return[3,1];case "initialiseInfixServer":return[3,3];case "exportFile":return[3,4];case "importText":return[3,
5];case "transformObject":return[3,5];case "deleteObject":return[3,6]}return[3,7];case 1:return[4,Object(ua.b)()];case 2:return x=ba.ea(),Da.postMessage({cmd:"initialiseInfixServer",l:x}),[3,7];case 3:return(y=ka(n.resultsXML))?f():h("License key does not have content edit permission"),[3,7];case 4:return n.exportPerformed?ja(n.pageNumber,n.exportXML,n.objectXML,n.resultsXML):(r=Ca[n.pageNumber],aa(n.pageNumber,r.galleys),da(n.pageNumber,r.objects),ca(n.pageNumber),z(n.pageNumber,r.galleys),z(n.pageNumber,
r.objects)),[3,7];case 5:return r=Ca[n.pageNumber],la(n.pageNumber,n.resultsXML),ea(n.pageNumber,n.pdfBuffer,r,n.id),[3,7];case 6:return r=Ca[n.pageNumber],la(n.pageNumber,n.resultsXML),r.galleys=r.galleys.filter(function(e){return e.id!==n.id}),r.objects=r.objects.filter(function(e){return e.id!==n.id}),ea(n.pageNumber,n.pdfBuffer,r),[3,7];case 7:return[2]}})})}function ka(e){e=new Uint8Array(e);var f=(new TextDecoder("utf-8")).decode(e);e=!1;f=(new DOMParser).parseFromString(f,"text/xml").getElementsByTagName("LicenseCheck");
null!==f&&0<f.length&&(f=f[0].getElementsByTagName("Status")[0].innerHTML,"error"!==f&&"ok"===f&&(e=!0));return e}function ja(e,f,h,n){var r=new Uint8Array(f),w=new TextDecoder("utf-8");f=w.decode(r);r=new Uint8Array(h);h=w.decode(r);r=new Uint8Array(n);n=w.decode(r);Ca[e]=oa(e,f,h,n);n=Ca[e];aa(e,n.galleys);da(e,n.objects);ca(e);z(e,n.galleys);z(e,n.objects)}function qa(e,f){e=parseFloat(e);return isNaN(f)||f<e?e:f}function oa(e,r,w,x){var z;var aa=new DOMParser;x=aa.parseFromString(x,"text/xml");
Array.prototype.slice.call(x.getElementsByTagName("BBox")).forEach(function(e){if("CropBox"===e.getAttribute("Name")){var f=parseFloat(e.getElementsByTagName("Top").item(0).innerHTML),h=parseFloat(e.getElementsByTagName("Bottom").item(0).innerHTML),n=parseFloat(e.getElementsByTagName("Left").item(0).innerHTML);e=parseFloat(e.getElementsByTagName("Right").item(0).innerHTML);z=new y(f,n,h,e)}});aa=new DOMParser;x=aa.parseFromString(r,"text/xml");var ba=[];Array.prototype.slice.call(x.getElementsByTagName("STORY")).forEach(function(f){var h=
f.getAttribute("galley_ids"),r=Array.prototype.slice.call(f.getElementsByTagName("g"))[0],w=r.getAttribute("bbox").split(" ");w=new y(parseFloat(w[0]),parseFloat(w[1]),parseFloat(w[2]),parseFloat(w[3]));r=r.innerHTML;var x=Array.prototype.slice.call(f.getElementsByTagName("galleys"))[0];x.parentNode.removeChild(x);f=f.innerHTML;f=(new DOMParser).parseFromString(f,"text/html").documentElement.querySelector("body").innerHTML.trim();h=new n(h,e,r,f,w);ba.push(h)});aa=new DOMParser;var ca=[];r=aa.parseFromString(w,
"text/xml").getElementsByTagName("Object");Array.prototype.slice.call(r).forEach(function(f){var n=f.getAttribute("Type"),r=f.getAttribute("OID");f=Array.prototype.slice.call(f.getElementsByTagName("Point"));var w=Number.NaN,x=Number.NaN,z=Number.NaN,aa=Number.NaN;f.forEach(function(e){var f=e.getAttribute("Name");"TL"===f?(w=qa(e.getAttribute("Y"),w),z=qa(e.getAttribute("X"),z)):"TR"===f?(w=qa(e.getAttribute("Y"),w),aa=qa(e.getAttribute("X"),aa)):"BR"===f?(x=qa(e.getAttribute("Y"),x),aa=qa(e.getAttribute("X"),
aa)):"BL"===f&&(x=qa(e.getAttribute("Y"),x),z=qa(e.getAttribute("X"),z))});ca.push(new h(n,r,new y(w,z,x,aa),e))});r=Array.prototype.slice.call(x.getElementsByTagName("DOC"))[0].getAttribute("id");return new f(r,1,z,ba,ca)}function la(e,f){var h;f=(new TextDecoder("utf-8")).decode(f);var n=(new DOMParser).parseFromString(f,"text/xml");f=n.getElementsByTagName("Galley").item(0);if(null!=f){var r=f.getAttribute("id");f=n.getElementsByTagName("BBox");f=Array.prototype.slice.call(f);f.forEach(function(e){var f=
e.getElementsByTagName("Top"),n=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Left");var r=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Bottom");var w=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Right");e=parseFloat(f.item(0).innerHTML);h=new y(n,r,w,e)});Fa[e].forEach(function(e){e.id===r&&!0===h.YQ(e.galleyBox)&&(e.galleyBox=h)})}f=n.getElementsByTagName("Object").item(0);if(null!=f){var w=f.getAttribute("OID");f=n.getElementsByTagName("BBox");f=Array.prototype.slice.call(f);
f.forEach(function(e){var f=e.getElementsByTagName("Top"),n=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Left");var r=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Bottom");var w=parseFloat(f.item(0).innerHTML);f=e.getElementsByTagName("Right");e=parseFloat(f.item(0).innerHTML);h=new y(n,r,w,e)});Ga[e].forEach(function(e){e.id===w&&!0===h.YQ(e.bbox)&&(e.bbox=h)})}f=n.getElementsByTagName("NewParas").item(0);if(null!=f){var x=f.getAttribute("id");Fa[e].forEach(function(e){if(e.id===
x){var f="<Contents>"+e.contents;f+="</Contents>";var h=Array.prototype.slice.call(n.getElementsByTagName("NewPara"));f=(new DOMParser).parseFromString(f,"text/xml");var r=Array.prototype.slice.call(f.getElementsByTagName("p"));h.forEach(function(e){var f=parseFloat(e.innerHTML),h=!1;r.forEach(function(e){var n=e.getAttribute("id");!1===h&&"0"===n&&(e.setAttribute("id",f),h=!0)})});e.contents=f.getElementsByTagName("Contents").item(0).innerHTML}})}}e.r(ba);var na=e(1),ra=e(55),sa=e(8),Ea=e(475),pa=
e(37),ua=e(76),ma=e(2),xa=e(174),wa=e(118),Ba=e(6),Da=null,Aa=null,Fa={},Ga={},Ca={},Ia;ba["default"]={pga:function(e){return Object(na.b)(void 0,void 0,void 0,function(){return Object(na.d)(this,function(){Aa||(Ia=e,Aa=new Promise(function(e,f){Da=new Worker(window.Core.getWorkerPath()+"contentEdit/InfixServerModule.js");Da.onmessage=function(h){fa(h,e,f)};Da.postMessage({cmd:"isReady"})}));return[2,Aa]})})},rga:function(e,f,h){return Object(na.b)(void 0,void 0,void 0,function(){var n,r,w,x;return Object(na.d)(this,
function(y){switch(y.label){case 0:return ca(f),Fa[f]=[],Ga[f]=[],[4,e.Ie([f])];case 1:return n=y.ea(),r=new TextEncoder,w=r.encode(""),x=w.buffer,Da.postMessage({cmd:"exportFile",pageNumber:f,performExport:h,pdfFile:n,tableData:x},[n,x]),[2]}})})},j7:function(e){return Object(na.b)(void 0,void 0,void 0,function(){var f,h,n,r,w,x,y,z;return Object(na.d)(this,function(aa){switch(aa.label){case 0:return f=e.id,h=e.isText,n=e.pageNumber,r=Ia.getDocument(),[4,r.Ie([n])];case 1:return w=aa.ea(),x=new TextEncoder,
y=x.encode(""),z=y.buffer,Da.postMessage({cmd:"deleteObject",pdfFile:w,pageNumber:n,objectID:f,isText:h,tableData:z},[z]),[2]}})})},Ala:function(e){return Object(na.b)(void 0,void 0,void 0,function(){var f,h,n,r,w,x,y,z,aa,ba,ca,da,ea;return Object(na.d)(this,function(fa){switch(fa.label){case 0:return f=e.id,h=e.position,n=h.top,r=h.left,w=h.bottom,x=h.right,y=e.isText,z=e.pageNumber,aa=Ia.getDocument(),[4,aa.Ie([z])];case 1:return ba=fa.ea(),ca=new TextEncoder,da=ca.encode(""),ea=da.buffer,Da.postMessage({cmd:"transformObject",
pdfFile:ba,pageNumber:z,objectID:f,isText:y,topVal:n,leftVal:r,bottomVal:w,rightVal:x,tableData:ea},[ea]),[2]}})})},Sla:function(e,f){return Object(na.b)(void 0,void 0,void 0,function(){var h,n,y,z,aa,ba,ca,da,ea,fa,ha,ia,ja,ka,la,oa,qa,ra;return Object(na.d)(this,function(na){switch(na.label){case 0:h=f.pj("<p><br></p>","");n=w(h);n=n.replace(/<span style="color: var\(--text-color\);">(.*?)<\/span>/g,"$1");y=e.Ru.id;z=e.PageNumber;aa=Ca[z];ba=aa.galleys.find(function(e){return e.id===y});ca=x(ba.contents);
da=r(z,aa,ca,n,y);if(""===da)return[3,2];ea=new TextEncoder;fa=ea.encode(da);ha=fa.buffer;ia=Object(pa.c)()||"https://www.pdftron.com/webfonts/v2/";ja=Ia.getDocument();return[4,ja.Ie([z])];case 1:return ka=na.ea(),ea=new TextEncoder,la=ea.encode(""),oa=la.buffer,Da.postMessage({cmd:"importText",pdfFile:ka,pageNumber:z,webFontURL:ia,galleyId:y,importData:ha,tableData:oa},[ha,oa]),qa={},ba&&(ra=ba.galleyBox,qa={top:ra.top,left:ra.left,bottom:ra.bottom,right:ra.right}),Object(wa.h)(ca,n,qa),[3,3];case 2:Object(ma.g)("Unable to generate import XML"),
na.label=3;case 3:return[2]}})})},Caa:function(e){if(e)return x(e.contents);Object(ma.g)("Unable to extract document content")}}},475:function(ia,ba,e){var ea=e(1);ia=e(83);var x=e(48);e=function(e){function ba(){return null!==e&&e.apply(this,arguments)||this}Object(ea.c)(ba,e);ba.prototype.testSelection=function(e,aa,w){return x.a.ol(e,aa,w)};return ba}(ia.a);ba.a=e}}]);}).call(this || window)
