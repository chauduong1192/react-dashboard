var n;
if(!window.a){var t=function(){var b=window.self===window.top;this.i=(this.D=b)?0:null;this.q=this.d=!1;this.h=this.g=-1;this.C=1;this.c={};this.o=[];var c=chrome.extension.connect({name:b?"top":"sub"});this.a=c;this.p=c.a||Math.ceil(975*Math.random());c.onMessage.addListener(this.onMessage.bind(this));c.onDisconnect.addListener(this.s.bind(this));this.b(window,"scroll",this.K,!0);this.b(window,"keydown",this.r,!0);this.b(window,"keyup",this.r,!0);this.b(window,"mousedown",this.H,!0);this.b(window,"mouseup",
this.I,!0);this.b(window,"blur",this.G,!0);this.b(document,"beforeload",this.F,!0);b&&this.b(window,"resize",this.J)};window.a=!0;var x={16:!0,17:!0,18:!0,45:!0,46:!0},C=["VIDEO","AUDIO","OBJECT","EMBED"];n=t.prototype;n.u=function(b,c,f,e){try{var d=document.activeElement,m=d&&0<=C.indexOf(d.tagName)?d:null;m||(m=(d=document.elementFromPoint(this.g,this.h))&&0<=C.indexOf(d.tagName)?d:null);for(var l=0,p,q,r,h,k=0;k<C.length;k++){for(var g=document.getElementsByTagName(C[k]),w=0;w<g.length;w++)if(d=
g[w],3!=k||"application/x-shockwave-flash"==d.type.toLowerCase()){var s=d.src||d.data;if(s&&(s==b||s==c)){p=d;break}if(!m&&!q)if(!s||s!=f&&s!=e){var u=d.clientWidth,v=d.clientHeight;if(u&&v){var y=d.getBoundingClientRect();if(!(0>=y.right+window.scrollX||0>=y.bottom+window.scrollY)){var z=window.getComputedStyle(d);if(!z||"hidden"!=z.visibility){var A=u*v;A>l&&1.35*u>v&&u<3*v&&(l=A,r=d);h||(h=d)}}}}else q=d}if(p)break}b=p||m||q||r||h;if(!b)return null;if("EMBED"==b.tagName&&!b.clientWidth&&!b.clientHeight){var B=
b.parentElement;"OBJECT"==B.tagName&&(b=B)}return this.f(b)}catch(D){}};n.t=function(b,c,f){try{for(var e=[],d,e=Array.prototype.concat.apply(e,document.getElementsByTagName("FRAME")),e=Array.prototype.concat.apply(e,document.getElementsByTagName("IFRAME")),m=0;m<e.length;m++){var l=e[m];if(parseInt(l.getAttribute("__idm_frm__"))==b){d=l;break}if(!d){var p=l.src;!p||p!=c&&p!=f||(d=l)}}return this.f(d)}catch(q){}};n.n=function(){var b=window.devicePixelRatio,c=document.width,f=document.body.scrollWidth;
c&&f&&(b=c==f?0:c/f);return b};n.l=function(b){try{var c=b.clientWidth,f=b.clientHeight;if(15>c||15>f)return null;var e=document.documentElement,d=e.scrollWidth||e.clientWidth,m=e.scrollHeight||e.clientHeight,l=b.getBoundingClientRect(),p=Math.round(l.left)+b.clientLeft,q=Math.round(l.top)+b.clientTop;return p>=d||q>=m?null:{left:p,top:q,right:p+c,bottom:q+f,zoom:this.n()}}catch(r){}};n.v=function(){this.a.postMessage([21,window.location.href])};n.B=function(b){var c=b[2]||this.t(b[3],b[4],b[5]),
f=c&&this.c[c],f=f&&this.l(f);this.a.postMessage([22,b[1],b[3],c,f])};n.A=function(b){var c=!b[2],f=b[2]||this.u(b[3],b[4],b[5],b[6]);b=[23,b[1],f,!1];var e=f&&this.c[f];if(e){var d=this.l(e);d&&(b[4]=d);c?(b[5]=e.tagName,b[6]=e.src||e.data,b[7]=this.m()):d||document.contains(e)||(b[3]=!0,delete this.c[f])}this.a.postMessage(b)};n.f=function(b){try{var c=parseInt(b.getAttribute("__idm_id__"));c||(c=this.p<<10|this.C++,b.setAttribute("__idm_id__",c));this.c[c]=b;return c}catch(f){}};n.m=function(b){var c;
try{c=window.top.document.title}catch(f){}if(c)if(c=c.replace(/[ \t\r\n\u25B6]+/g," ").trim(),b)this.a.postMessage([24,b,c]);else return c};n.e=function(b){if(!this.j){var c="\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g,function(b){return this[b]}.bind({"%H":"\\w\\-\u00a0-\ufeff","%T":"\\w\\-.+*()$!,%\u00a0-\ufeff","%Q":"^\\s\\[\\]{}()"}));this.j=new RegExp(c,"gi")}for(var f=[];c=this.j.exec(b);)f.push(c.shift());
return f};n.k=function(b,c,f){var e=[],d={},m="",l="",p=!f,q;if(f&&(q=b.getSelection(),!q||q.isCollapsed))return e;var r=b.getElementsByTagName("A");if(r)for(var h=0;h<r.length;h++){var k=r[h];if(k&&(p||q.containsNode(k,!0))){var g=k.href;g&&!d[g]&&c.test(g)&&(d[g]=e.push([g,2,k.innerText||k.title]));f&&d[g]&&(m+=k.innerText,m+="\n")}}if(r=b.getElementsByTagName("AREA"))for(h=0;h<r.length;h++)(k=r[h])&&(p||q.containsNode(k,!0))&&(g=k.href)&&!d[g]&&c.test(g)&&(d[g]=e.push([g,2,k.alt]));if(r=p&&b.getElementsByTagName("IFRAME"))for(h=
0;h<r.length;h++)(k=r[h])&&(p||q.containsNode(k,!0))&&(g=k.src)&&!d[g]&&c.test(g)&&(d[g]=e.push([g,4]));if(h=f&&q.toString())for(k=this.e(h),m=this.e(m),h=0;h<k.length;h++)(g=k[h])&&!d[g]&&c.test(g)&&0>m.indexOf(g)&&(d[g]=e.push([g,1]));if(m=(p||!e.length)&&b.getElementsByTagName("IMG"))for(h=0;h<m.length;h++)(k=m[h])&&(p||q.containsNode(k,!0))&&((g=k.src)&&!d[g]&&c.test(g)&&(d[g]=e.push([g,3,"<<<=IDMTRANSMITIMGPREFIX=>>>"+k.alt])),p&&k.onclick&&(l+=k.onclick,l+="\n"));if(b=p&&b.getElementsByTagName("SCRIPT")){for(h=
0;h<b.length;h++)l+=b[h].innerText,l+="\n";for(l=this.e(l);l.length;)(g=l.shift())&&!d[g]&&c.test(g)&&(d[g]=e.push([g,5]))}return e};n.w=function(b,c){for(var f=this.k(document,b,c),e=document.getElementsByTagName("IFRAME"),d=Array.prototype.push,m=0;m<e.length;m++)try{var l=e[m],p=l.contentDocument;p&&!l.src&&d.apply(f,this.k(p,b,c))}catch(q){}return f};n.r=function(b){x[b.keyCode]&&this.a.postMessage([31,b.keyCode,"keydown"==b.type])};n.H=function(b){this.q&&this.a.postMessage([28]);if(0==b.button){var c=
b.view.getSelection();this.d=c&&c.isCollapsed;this.a.postMessage([32,b.button,!0])}};n.I=function(b){if(0==b.button&&(this.g=b.clientX,this.h=b.clientY,this.a.postMessage([32,b.button,!1]),this.d)){this.d=!1;var c=b.view.getSelection();c&&!c.isCollapsed&&this.a.postMessage([26,b.clientX,b.clientY,this.n()])}};n.G=function(){this.d=!1;this.a.postMessage([33])};n.K=function(){this.a.postMessage([29])};n.J=function(b){b=b.target;this.a.postMessage([30,b.innerWidth,b.innerHeight])};n.F=function(b){var c=
b.target,f=c.tagName;0<=C.indexOf(f)&&b.url&&(c=this.f(c),this.a.postMessage([25,c,f,b.url]))};n.onMessage=function(b){switch(b[0]){case 11:var c=b[2];if(null!=c){this.i=c;try{window.frameElement&&window.frameElement.setAttribute("__idm_frm__",c)}catch(f){}}b[4]&&this.v();break;case 12:var c=this.w(b[4]?new RegExp(b[4],"i"):null,b[2]),e=[27,b[1],this.i,c.length];b[3]||(e[4]=c,e[5]=window.location.href,this.D&&(e[6]=window.location.href,e[7]=document.title));this.a.postMessage(e);break;case 13:this.q=
b[1];break;case 14:this.m(b[1]);break;case 15:this.A(b);break;case 16:this.B(b)}};n.b=function(b){var c=Array.prototype.slice.call(arguments);c[2]=c[2].bind(this);this.o.push(c);b.addEventListener.apply(b,c.slice(1))};n.s=function(){for(var b;b=this.o.shift();){var c=b.shift();c.removeEventListener.apply(c,b)}this.a=this.p=null;window.a=!1};new t};