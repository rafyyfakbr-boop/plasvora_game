(()=>{var Tl="170";var Eu=0,sc=1,Tu=2;var lh=1,wu=2,Un=3,si=0,Yt=1,dn=2,ti=0,ji=1,ri=2,rc=3,oc=4,Au=5,yi=100,Ru=101,Cu=102,Iu=103,Pu=104,Lu=200,Du=201,Nu=202,Uu=203,la=204,ca=205,Ou=206,Bu=207,Fu=208,ku=209,zu=210,Hu=211,Vu=212,Gu=213,Wu=214,ha=0,ua=1,da=2,is=3,fa=4,pa=5,ma=6,ga=7,wl=0,Xu=1,qu=2,ni=0,Yu=1,Zu=2,Ku=3,Ju=4,$u=5,Qu=6,ju=7;var ch=300,ss=301,rs=302,_a=303,xa=304,jr=306,Ls=1e3,Si=1001,va=1002,pn=1003,ed=1004;var Ys=1005;var bn=1006,Io=1007;var bi=1008;var zn=1009,hh=1010,uh=1011,Ds=1012,Al=1013,Ei=1014,Bn=1015,Os=1016,Rl=1017,Cl=1018,os=1020,dh=35902,fh=1021,ph=1022,fn=1023,mh=1024,gh=1025,es=1026,as=1027,_h=1028,Il=1029,xh=1030,Pl=1031;var Ll=1033,yr=33776,Mr=33777,Sr=33778,br=33779,ya=35840,Ma=35841,Sa=35842,ba=35843,Ea=36196,Ta=37492,wa=37496,Aa=37808,Ra=37809,Ca=37810,Ia=37811,Pa=37812,La=37813,Da=37814,Na=37815,Ua=37816,Oa=37817,Ba=37818,Fa=37819,ka=37820,za=37821,Er=36492,Ha=36494,Va=36495,vh=36283,Ga=36284,Wa=36285,Xa=36286;var Tr=2300,qa=2301,Po=2302,ac=2400,lc=2401,cc=2402;var td=3200,nd=3201;var Dl=0,id=1,jn="",Xt="srgb",fs="srgb-linear",eo="linear",ht="srgb";var Ni=7680;var hc=519,sd=512,rd=513,od=514,yh=515,ad=516,ld=517,cd=518,hd=519,Ya=35044;var uc="300 es",Fn=2e3,wr=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lo=Math.PI/180,Za=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function ud(i,e){return(i%e+e)%e}function Do(i,e,t){return(1-t)*i+t*e}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],b=s[4],x=s[7],P=s[2],w=s[5],A=s[8];return r[0]=o*_+a*E+l*P,r[3]=o*m+a*b+l*w,r[6]=o*d+a*x+l*A,r[1]=c*_+u*E+h*P,r[4]=c*m+u*b+h*w,r[7]=c*d+u*x+h*A,r[2]=f*_+p*E+g*P,r[5]=f*m+p*b+g*w,r[8]=f*d+p*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},No=new Ge;function Mh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=Ar("canvas");return i.style.display="block",i}var dc={};function Cs(i){i in dc||(dc[i]=!0,console.warn(i))}function fd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function pd(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function md(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var tt={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?eo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fc=[.64,.33,.3,.6,.15,.06],pc=[.2126,.7152,.0722],mc=[.3127,.329],gc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);tt.define({[fs]:{primaries:fc,whitePoint:mc,transfer:eo,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:pc,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:fc,whitePoint:mc,transfer:ht,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:pc,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});var Ui,Ka=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Ar("canvas")),Ui.width=e.width,Ui.height=e.height;let n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(kn(t[n]/255)*255):t[n]=kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gd=0,Rr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _d=0,Qt=class i extends oi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Si,s=Si,r=bn,o=bi,a=fn,l=zn,c=i.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ii(),this.name="",this.source=new Rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ch;Qt.DEFAULT_ANISOTROPY=1;var bt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(p+1)/2,P=(d+1)/2,w=(u+f)/4,A=(h+_)/4,R=(g+m)/4;return b>x&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=R/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ja=class extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Rr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cr=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*_,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let P=Math.sqrt(b),w=Math.atan2(P,d*E);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}let x=a*E;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Oo=new U,xc=new ai,Ti=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Ks.subVectors(this.max,Ss),Oi.subVectors(e.a,Ss),Bi.subVectors(e.b,Ss),Fi.subVectors(e.c,Ss),Yn.subVectors(Bi,Oi),Zn.subVectors(Fi,Bi),fi.subVectors(Oi,Fi);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-fi.y,fi.x,0];return!Bo(t,Oi,Bi,Fi,Ks)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,Oi,Bi,Fi,Ks))?!1:(Js.crossVectors(Yn,Zn),t=[Js.x,Js.y,Js.z],Bo(t,Oi,Bi,Fi,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},In=[new U,new U,new U,new U,new U,new U,new U,new U],cn=new U,Zs=new Ti,Oi=new U,Bi=new U,Fi=new U,Yn=new U,Zn=new U,fi=new U,Ss=new U,Ks=new U,Js=new U,pi=new U;function Bo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);let a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var xd=new Ti,bs=new U,Fo=new U,ls=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(Fo)),this.expandByPoint(bs.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new U,ko=new U,$s=new U,Kn=new U,zo=new U,Qs=new U,Ho=new U,Ir=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ko.copy(e).add(t).multiplyScalar(.5),$s.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ko);let r=e.distanceTo(t)*.5,o=-this.direction.dot($s),a=Kn.dot(this.direction),l=-Kn.dot($s),c=Kn.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ko).addScaledVector($s,f),p}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){zo.subVectors(t,e),Qs.subVectors(n,e),Ho.crossVectors(zo,Qs);let o=this.direction.dot(Ho),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);let l=a*this.direction.dot(Qs.crossVectors(Kn,Qs));if(l<0)return null;let c=a*this.direction.dot(zo.cross(Kn));if(c<0||l+c>o)return null;let u=-a*Kn.dot(Ho);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vd,e,yd)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Jn.crossVectors(n,Jt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Jn.crossVectors(n,Jt)),Jn.normalize(),js.crossVectors(Jt,Jn),s[0]=Jn.x,s[4]=js.x,s[8]=Jt.x,s[1]=Jn.y,s[5]=js.y,s[9]=Jt.y,s[2]=Jn.z,s[6]=js.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],b=n[7],x=n[11],P=n[15],w=s[0],A=s[4],R=s[8],S=s[12],y=s[1],I=s[5],G=s[9],k=s[13],B=s[2],X=s[6],z=s[10],Q=s[14],H=s[3],ie=s[7],le=s[11],ye=s[15];return r[0]=o*w+a*y+l*B+c*H,r[4]=o*A+a*I+l*X+c*ie,r[8]=o*R+a*G+l*z+c*le,r[12]=o*S+a*k+l*Q+c*ye,r[1]=u*w+h*y+f*B+p*H,r[5]=u*A+h*I+f*X+p*ie,r[9]=u*R+h*G+f*z+p*le,r[13]=u*S+h*k+f*Q+p*ye,r[2]=g*w+_*y+m*B+d*H,r[6]=g*A+_*I+m*X+d*ie,r[10]=g*R+_*G+m*z+d*le,r[14]=g*S+_*k+m*Q+d*ye,r[3]=E*w+b*y+x*B+P*H,r[7]=E*A+b*I+x*X+P*ie,r[11]=E*R+b*G+x*z+P*le,r[15]=E*S+b*k+x*Q+P*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],E=h*m*c-_*f*c+_*l*p-a*m*p-h*l*d+a*f*d,b=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*d+o*h*d,P=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,w=t*E+n*b+s*x+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=E*A,e[1]=(_*f*r-h*m*r-_*s*p+n*m*p+h*s*d-n*f*d)*A,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*A,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*A,e[4]=b*A,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*A,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*p+t*l*p)*A,e[8]=x*A,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*d-t*h*d)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=P*A,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*m+t*h*m)*A,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,E=l*c,b=l*u,x=l*h,P=n.x,w=n.y,A=n.z;return s[0]=(1-(_+d))*P,s[1]=(p+x)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-x)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(m-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ki.set(s[0],s[1],s[2]).length(),o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);let c=1/r,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Fn){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(a===Fn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Fn){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,p=(n+s)*u,g,_;if(a===Fn)g=(o+r)*h,_=-2*h;else if(a===wr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ki=new U,hn=new yt,vd=new U(0,0,0),yd=new U(1,1,1),Jn=new U,js=new U,Jt=new U,vc=new yt,yc=new ai,mn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Md=0,Mc=new U,zi=new ai,Ln=new yt,er=new U,Es=new U,Sd=new U,bd=new ai,Sc=new U(1,0,0),bc=new U(0,1,0),Ec=new U(0,0,1),Tc={type:"added"},Ed={type:"removed"},Hi={type:"childadded",child:null},Vo={type:"childremoved",child:null},Dt=class i extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new mn,n=new ai,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ge}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(bc,e)}rotateZ(e){return this.rotateOnAxis(Ec,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(bc,e)}translateZ(e){return this.translateOnAxis(Ec,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?er.copy(e):er.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Es,er,this.up):Ln.lookAt(er,Es,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Ln),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tc),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new U(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new U,Dn=new U,Go=new U,Nn=new U,Vi=new U,Gi=new U,wc=new U,Wo=new U,Xo=new U,qo=new U,Yo=new bt,Zo=new bt,Ko=new bt,ei=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Dn.subVectors(n,t),Go.subVectors(e,t);let o=un.dot(un),a=un.dot(Dn),l=un.dot(Go),c=Dn.dot(Dn),u=Dn.dot(Go),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Yo.setScalar(0),Zo.setScalar(0),Ko.setScalar(0),Yo.fromBufferAttribute(e,t),Zo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Yo,r.x),o.addScaledVector(Zo,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Dn.subVectors(e,t),un.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),un.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Vi.subVectors(s,n),Gi.subVectors(r,n),Wo.subVectors(e,n);let l=Vi.dot(Wo),c=Gi.dot(Wo);if(l<=0&&c<=0)return t.copy(n);Xo.subVectors(e,s);let u=Vi.dot(Xo),h=Gi.dot(Xo);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Vi,o);qo.subVectors(e,r);let p=Vi.dot(qo),g=Gi.dot(qo);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Gi,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return wc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(wc,a);let d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Jo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=ud(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Jo(o,r,e+1/3),this.g=Jo(o,r,e),this.b=Jo(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kn(e.r),this.g=kn(e.g),this.b=kn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(qt(Bt.r*255,0,255))*65536+Math.round(qt(Bt.g*255,0,255))*256+Math.round(qt(Bt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),t);let n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Xt){tt.fromWorkingColorSpace(Bt.copy(this),e);let t=Bt.r,n=Bt.g,s=Bt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(tr);let n=Do($n.h,tr.h,t),s=Do($n.s,tr.s,t),r=Do($n.l,tr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Le;Le.NAMES=Sh;var Td=0,En=class extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ii(),this.name="",this.blending=ji,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=la,this.blendDst=ca,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==la&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ke=class extends En{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new U,nr=new Ne,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}};var Lr=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wd=0,nn=new yt,$o=new Dt,Wi=new U,$t=new Ti,Ts=new Ti,It=new U,At=class i extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Dr:Lr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors($t.min,Ts.min),$t.expandByPoint(It),It.addVectors($t.max,Ts.max),$t.expandByPoint(It)):($t.expandByPoint(Ts.min),$t.expandByPoint(Ts.max))}$t.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)It.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(It));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(e,c),It.add(Wi)),s=Math.max(s,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;let c=new U,u=new U,h=new U,f=new Ne,p=new Ne,g=new Ne,_=new U,m=new U;function d(R,S,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[R].add(_),a[S].add(_),a[y].add(_),l[R].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let R=0,S=E.length;R<S;++R){let y=E[R],I=y.start,G=y.count;for(let k=I,B=I+G;k<B;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new U,x=new U,P=new U,w=new U;function A(R){P.fromBufferAttribute(s,R),w.copy(P);let S=a[R];b.copy(S),b.sub(P.multiplyScalar(P.dot(S))).normalize(),x.crossVectors(w,S);let I=x.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,I)}for(let R=0,S=E.length;R<S;++R){let y=E[R],I=y.start,G=y.count;for(let k=I,B=I+G;k<B;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ac=new yt,mi=new Ir,ir=new ls,Rc=new U,sr=new U,rr=new U,or=new U,Qo=new U,ar=new U,Cc=new U,lr=new U,je=class extends Dt{constructor(e=new At,t=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Qo.fromBufferAttribute(h,e),o?ar.addScaledVector(Qo,u):ar.addScaledVector(Qo.sub(t),u))}t.add(ar)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(ir.containsPoint(mi.origin)===!1&&(mi.intersectSphere(ir,Rc)===null||mi.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Ac.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,P=b;x<P;x+=3){let w=a.getX(x),A=a.getX(x+1),R=a.getX(x+2);s=cr(this,d,e,n,c,u,h,w,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=cr(this,o,e,n,c,u,h,E,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,P=b;x<P;x+=3){let w=x,A=x+1,R=x+2;s=cr(this,d,e,n,c,u,h,w,A,R),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let E=m,b=m+1,x=m+2;s=cr(this,o,e,n,c,u,h,E,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ad(i,e,t,n,s,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===si,a),l===null)return null;lr.copy(a),lr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lr);return c<t.near||c>t.far?null:{distance:c,point:lr.clone(),object:i}}function cr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,sr),i.getVertexPosition(l,rr),i.getVertexPosition(c,or);let u=Ad(i,e,t,n,sr,rr,or,Cc);if(u){let h=new U;ei.getBarycoord(Cc,sr,rr,or,h),s&&(u.uv=ei.getInterpolatedAttribute(s,a,l,c,h,new Ne)),r&&(u.uv1=ei.getInterpolatedAttribute(r,a,l,c,h,new Ne)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};ei.getNormal(sr,rr,or,f.normal),u.face=f,u.barycoord=h}return u}var ke=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2));function g(_,m,d,E,b,x,P,w,A,R,S){let y=x/A,I=P/R,G=x/2,k=P/2,B=w/2,X=A+1,z=R+1,Q=0,H=0,ie=new U;for(let le=0;le<z;le++){let ye=le*I-k;for(let ze=0;ze<X;ze++){let $e=ze*y-G;ie[_]=$e*E,ie[m]=ye*b,ie[d]=B,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[d]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(ze/A),h.push(1-le/R),Q+=1}}for(let le=0;le<R;le++)for(let ye=0;ye<A;ye++){let ze=f+ye+X*le,$e=f+ye+X*(le+1),Y=f+(ye+1)+X*(le+1),ee=f+(ye+1)+X*le;l.push(ze,$e,ee),l.push($e,Y,ee),H+=6}a.addGroup(p,H,S),p+=H,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=cs(i[t]);for(let s in n)e[s]=n[s]}return e}function Rd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Cd={clone:cs,merge:kt},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends En{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Nr=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Qn=new U,Ic=new Ne,Pc=new Ne,zt=class extends Nr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Za*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Ic,Pc),t.subVectors(Pc,Ic)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xi=-90,qi=1,Qa=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new zt(Xi,qi,e,t);s.layers=this.layers,this.add(s);let r=new zt(Xi,qi,e,t);r.layers=this.layers,this.add(r);let o=new zt(Xi,qi,e,t);o.layers=this.layers,this.add(o);let a=new zt(Xi,qi,e,t);a.layers=this.layers,this.add(a);let l=new zt(Xi,qi,e,t);l.layers=this.layers,this.add(l);let c=new zt(Xi,qi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ur=class extends Qt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ja=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ke(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ti});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=bn),new Qa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},jo=new U,Ld=new U,Dd=new Ge,On=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=jo.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dd.getNormalMatrix(e),s=this.coplanarPoint(jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new ls,hr=new U,Ns=class{constructor(e=new On,t=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],E=s[13],b=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,m-p,x-d).normalize(),n[1].setComponents(l+r,f+c,m+p,x+d).normalize(),n[2].setComponents(l+o,f+u,m+g,x+E).normalize(),n[3].setComponents(l-o,f-u,m-g,x-E).normalize(),n[4].setComponents(l-a,f-h,m-_,x-b).normalize(),t===Fn)n[5].setComponents(l+a,f+h,m+_,x+b).normalize();else if(t===wr)n[5].setComponents(a,h,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(hr.x=s.normal.x>0?e.max.x:e.min.x,hr.y=s.normal.y>0?e.max.y:e.min.y,hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nd(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ht=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let E=d*f-o;for(let b=0;b<c;b++){let x=b*h-r;g.push(x,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let b=E+c*d,x=E+c*(d+1),P=E+1+c*(d+1),w=E+1+c*d;p.push(b,x,w),p.push(x,P,w)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,of=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ep=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,om=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Ud,alphahash_pars_fragment:Od,alphamap_fragment:Bd,alphamap_pars_fragment:Fd,alphatest_fragment:kd,alphatest_pars_fragment:zd,aomap_fragment:Hd,aomap_pars_fragment:Vd,batching_pars_vertex:Gd,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:Zd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:jd,color_fragment:ef,color_pars_fragment:tf,color_pars_vertex:nf,color_vertex:sf,common:rf,cube_uv_reflection_fragment:of,defaultnormal_vertex:af,displacementmap_pars_vertex:lf,displacementmap_vertex:cf,emissivemap_fragment:hf,emissivemap_pars_fragment:uf,colorspace_fragment:df,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Rf,envmap_vertex:xf,fog_vertex:vf,fog_pars_vertex:yf,fog_fragment:Mf,fog_pars_fragment:Sf,gradientmap_pars_fragment:bf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:wf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:If,lights_phong_fragment:Pf,lights_phong_pars_fragment:Lf,lights_physical_fragment:Df,lights_physical_pars_fragment:Nf,lights_fragment_begin:Uf,lights_fragment_maps:Of,lights_fragment_end:Bf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Hf,map_fragment:Vf,map_pars_fragment:Gf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:Zf,morphcolor_vertex:Kf,morphnormal_vertex:Jf,morphtarget_pars_vertex:$f,morphtarget_vertex:Qf,normal_fragment_begin:jf,normal_fragment_maps:ep,normal_pars_fragment:tp,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:ap,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:xp,shadowmap_vertex:vp,shadowmask_pars_fragment:yp,skinbase_vertex:Mp,skinning_pars_vertex:Sp,skinning_vertex:bp,skinnormal_vertex:Ep,specularmap_fragment:Tp,specularmap_pars_fragment:wp,tonemapping_fragment:Ap,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Ip,uv_pars_fragment:Pp,uv_pars_vertex:Lp,uv_vertex:Dp,worldpos_vertex:Np,background_vert:Up,background_frag:Op,backgroundCube_vert:Bp,backgroundCube_frag:Fp,cube_vert:kp,cube_frag:zp,depth_vert:Hp,depth_frag:Vp,distanceRGBA_vert:Gp,distanceRGBA_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:Zp,meshbasic_vert:Kp,meshbasic_frag:Jp,meshlambert_vert:$p,meshlambert_frag:Qp,meshmatcap_vert:jp,meshmatcap_frag:em,meshnormal_vert:tm,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:om,meshtoon_vert:am,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},ce={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Mn={basic:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:kt([ce.points,ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:kt([ce.common,ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:kt([ce.sprite,ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:kt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:kt([ce.lights,ce.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Mn.physical={uniforms:kt([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var ur={r:0,b:0,g:0},_i=new mn,mm=new yt;function gm(i,e,t,n,s,r,o){let a=new Le(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function _(E){let b=!1,x=g(E);x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){let x=g(b);x&&(x.isCubeTexture||x.mapping===jr)?(u===void 0&&(u=new je(new ke(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:cs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),_i.copy(b.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(_i)),u.material.toneMapped=tt.getTransfer(x.colorSpace)!==ht,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new je(new Ht(2,2),new Tn({name:"BackgroundMaterial",uniforms:cs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,b){E.getRGB(ur,bh(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:_,addToRenderList:m}}function _m(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,I,G,k,B){let X=!1,z=h(k,G,I);r!==z&&(r=z,c(r.object)),X=p(y,k,G,B),X&&g(y,k,G,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(y,I,G,k),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,I,G){let k=G.wireframe===!0,B=n[y.id];B===void 0&&(B={},n[y.id]=B);let X=B[I.id];X===void 0&&(X={},B[I.id]=X);let z=X[k];return z===void 0&&(z=f(l()),X[k]=z),z}function f(y){let I=[],G=[],k=[];for(let B=0;B<t;B++)I[B]=0,G[B]=0,k[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,I,G,k){let B=r.attributes,X=I.attributes,z=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let le=B[H],ye=X[H];if(ye===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),le===void 0||le.attribute!==ye||ye&&le.data!==ye.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(y,I,G,k){let B={},X=I.attributes,z=0,Q=G.getAttributes();for(let H in Q)if(Q[H].location>=0){let le=X[H];le===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(le=y.instanceColor));let ye={};ye.attribute=le,le&&le.data&&(ye.data=le.data),B[H]=ye,z++}r.attributes=B,r.attributesNum=z,r.index=k}function _(){let y=r.newAttributes;for(let I=0,G=y.length;I<G;I++)y[I]=0}function m(y){d(y,0)}function d(y,I){let G=r.newAttributes,k=r.enabledAttributes,B=r.attributeDivisors;G[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),B[y]!==I&&(i.vertexAttribDivisor(y,I),B[y]=I)}function E(){let y=r.newAttributes,I=r.enabledAttributes;for(let G=0,k=I.length;G<k;G++)I[G]!==y[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function b(y,I,G,k,B,X,z){z===!0?i.vertexAttribIPointer(y,I,G,B,X):i.vertexAttribPointer(y,I,G,k,B,X)}function x(y,I,G,k){_();let B=k.attributes,X=G.getAttributes(),z=I.defaultAttributeValues;for(let Q in X){let H=X[Q];if(H.location>=0){let ie=B[Q];if(ie===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){let le=ie.normalized,ye=ie.itemSize,ze=e.get(ie);if(ze===void 0)continue;let $e=ze.buffer,Y=ze.type,ee=ze.bytesPerElement,xe=Y===i.INT||Y===i.UNSIGNED_INT||ie.gpuType===Al;if(ie.isInterleavedBufferAttribute){let ae=ie.data,be=ae.stride,Be=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let O=0;O<H.locationSize;O++)d(H.location+O,ae.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let O=0;O<H.locationSize;O++)m(H.location+O);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let O=0;O<H.locationSize;O++)b(H.location+O,ye/H.locationSize,Y,le,be*ee,(Be+ye/H.locationSize*O)*ee,xe)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<H.locationSize;ae++)d(H.location+ae,ie.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<H.locationSize;ae++)m(H.location+ae);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ae=0;ae<H.locationSize;ae++)b(H.location+ae,ye/H.locationSize,Y,le,ye*ee,ye/H.locationSize*ae*ee,xe)}}else if(z!==void 0){let le=z[Q];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(H.location,le);break;case 3:i.vertexAttrib3fv(H.location,le);break;case 4:i.vertexAttrib4fv(H.location,le);break;default:i.vertexAttrib1fv(H.location,le)}}}}E()}function P(){R();for(let y in n){let I=n[y];for(let G in I){let k=I[G];for(let B in k)u(k[B].object),delete k[B];delete I[G]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let G in I){let k=I[G];for(let B in k)u(k[B].object),delete k[B];delete I[G]}delete n[y.id]}function A(y){for(let I in n){let G=n[I];if(G[y.id]===void 0)continue;let k=G[y.id];for(let B in k)u(k[B].object),delete k[B];delete G[y.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function xm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===Os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:w}}function ym(i){let e=this,t=null,n=0,s=!1,r=!1,o=new On,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let E=r?0:n,b=E*4,x=d.clippingState||null;l.value=x,x=u(g,f,b,p);for(let P=0;P!==b;++P)x[P]=t[P];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(h[b]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mm(i){let e=new WeakMap;function t(o,a){return a===_a?o.mapping=ss:a===xa&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===_a||a===xa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ja(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Or=class extends Nr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qi=4,Lc=[.125,.215,.35,.446,.526,.582],Mi=20,ea=new Or,Dc=new Le,ta=null,na=0,ia=0,sa=!1,vi=(1+Math.sqrt(5))/2,Yi=1/vi,Nc=[new U(-vi,Yi,0),new U(vi,Yi,0),new U(-Yi,0,vi),new U(Yi,0,vi),new U(0,vi,-Yi),new U(0,vi,Yi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=sa,e.scissorTest=!1,dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Os,format:fn,colorSpace:fs,depthBuffer:!1},s=Uc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(r)),this._blurMaterial=bm(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,s){let a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Dc),u.toneMapping=ni,u.autoClear=!1;let p=new Ke({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),g=new je(new ke,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Dc),_=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let b=this._cubeSize;dr(s,E*b,d>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ss||e.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;dr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(s-r-1)%Nc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new je(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Mi-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);let d=[],E=0;for(let A=0;A<Mi;++A){let R=A/_,S=Math.exp(-R*R/2);d.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let x=this._sizeLods[s],P=3*x*(s>b-Qi?s-b+Qi:0),w=4*(this._cubeSize-x);dr(t,P,w,3*x,2*x),l.setRenderTarget(t),l.render(h,ea)}};function Sm(i){let e=[],t=[],n=[],s=i,r=i-Qi+1+Lc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Qi?l=Lc[o-i+Qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,R=w>2?0:-1,S=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];E.set(S,_*g*w),b.set(f,m*g*w);let y=[w,w,w,w,w,w];x.set(y,d*g*w)}let P=new At;P.setAttribute("position",new Pt(E,_)),P.setAttribute("uv",new Pt(b,m)),P.setAttribute("faceIndex",new Pt(x,d)),e.push(P),s>Qi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uc(i,e,t){let n=new Hn(i,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function bm(i,e,t){let n=new Float32Array(Mi),s=new U(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Bc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Em(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===_a||l===xa,u=l===ss||l===rs;if(c||u){let h=e.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Br(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Br(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,_=0;if(p!==null){let E=p.array;_=p.version;for(let b=0,x=E.length;b<x;b+=3){let P=E[b+0],w=E[b+1],A=E[b+2];f.push(P,w,w,A,A,P)}}else if(g!==void 0){let E=g.array;_=g.version;for(let b=0,x=E.length/3-1;b<x;b+=3){let P=b+0,w=b+1,A=b+2;f.push(P,w,w,A,A,P)}}else return;let m=new(Mh(f)?Dr:Lr)(f,1);m.version=_;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Am(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Rm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cm(i,e,t){let n=new WeakMap,s=new bt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*P*4*h),A=new Cr(w,x,P,h);A.type=Bn,A.needsUpdate=!0;let R=b*4;for(let y=0;y<h;y++){let I=m[y],G=d[y],k=E[y],B=x*P*4*y;for(let X=0;X<I.count;X++){let z=X*R;p===!0&&(s.fromBufferAttribute(I,X),w[B+z+0]=s.x,w[B+z+1]=s.y,w[B+z+2]=s.z,w[B+z+3]=0),g===!0&&(s.fromBufferAttribute(G,X),w[B+z+4]=s.x,w[B+z+5]=s.y,w[B+z+6]=s.z,w[B+z+7]=0),_===!0&&(s.fromBufferAttribute(k,X),w[B+z+8]=s.x,w[B+z+9]=s.y,w[B+z+10]=s.z,w[B+z+11]=k.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Ne(x,P)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Im(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Fr=class extends Qt{constructor(e,t,n,s,r,o,a,l,c,u=es){if(u!==es&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===es&&(n=Ei),n===void 0&&u===as&&(n=os),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Th=new Qt,Fc=new Fr(1,1),wh=new Cr,Ah=new $a,Rh=new Ur,kc=[],zc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=zc[e];t===void 0&&(t=new Int32Array(e),zc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Nm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Um(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),Ct(t,n)}}function Om(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),Ct(t,n)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),Ct(t,n)}}function Fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fc.compareFunction=yh,r=Fc):r=Th,t.setTexture2D(e||r,s)}function Ym(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ah,s)}function Zm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rh,s)}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wh,s)}function Jm(i){switch(i){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Nm;case 35674:return Um;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return Fm;case 35667:case 35671:return km;case 35668:case 35672:return zm;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return Gm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Km}}function $m(i,e){i.uniform1fv(this.addr,e)}function Qm(i,e){let t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function jm(i,e){let t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function eg(i,e){let t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function tg(i,e){let t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ng(i,e){let t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ig(i,e){let t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function sg(i,e){i.uniform1iv(this.addr,e)}function rg(i,e){i.uniform2iv(this.addr,e)}function og(i,e){i.uniform3iv(this.addr,e)}function ag(i,e){i.uniform4iv(this.addr,e)}function lg(i,e){i.uniform1uiv(this.addr,e)}function cg(i,e){i.uniform2uiv(this.addr,e)}function hg(i,e){i.uniform3uiv(this.addr,e)}function ug(i,e){i.uniform4uiv(this.addr,e)}function dg(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Th,r[o])}function fg(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ah,r[o])}function pg(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rh,r[o])}function mg(i,e,t){let n=this.cache,s=e.length,r=to(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||wh,r[o])}function gg(i){switch(i){case 5126:return $m;case 35664:return Qm;case 35665:return jm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}var el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jm(t.type)}},tl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gg(t.type)}},nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ra=/(\w+)(\])?(\[|\.)?/g;function Wc(i,e){i.seq.push(e),i.map[e.id]=e}function _g(i,e,t){let n=i.name,s=n.length;for(ra.lastIndex=0;;){let r=ra.exec(n),o=ra.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wc(t,c===void 0?new el(a,i,e):new tl(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new nl(a),Wc(t,h)),t=h}}}var ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_g(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Xc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var xg=37297,vg=0;function yg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var qc=new Ge;function Mg(i){tt._getMatrix(qc,tt.workingColorSpace,i);let e=`mat3( ${qc.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case eo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yg(i.getShaderSource(e),o)}else return s}function Sg(i,e){let t=Mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bg(i,e){let t;switch(e){case Yu:t="Linear";break;case Zu:t="Reinhard";break;case Ku:t="Cineon";break;case Ju:t="ACESFilmic";break;case Qu:t="AgX";break;case ju:t="Neutral";break;case $u:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fr=new U;function Eg(){tt.getLuminanceCoefficients(fr);let i=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function wg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ag(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Is(i){return i!==""}function Zc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(Rg,Ig)}var Cg=new Map;function Ig(i,e){let t=Ye[e];if(t===void 0){let n=Cg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}var Pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(Pg,Lg)}function Lg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function Ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ug(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Og(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Xu:e="ENVMAP_BLENDING_MIX";break;case qu:e="ENVMAP_BLENDING_ADD";break}return e}function Bg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fg(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Dg(t),c=Ng(t),u=Ug(t),h=Og(t),f=Bg(t),p=Tg(t),g=wg(r),_=s.createProgram(),m,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Is).join(`
`),d.length>0&&(d+=`
`)):(m=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),d=[$c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Ye.tonemapping_pars_fragment:"",t.toneMapping!==ni?bg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),Eg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),o=il(o),o=Zc(o,t),o=Kc(o,t),a=il(a),a=Zc(a,t),a=Kc(a,t),o=Jc(o),a=Jc(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=E+m+o,x=E+d+a,P=Xc(s,s.VERTEX_SHADER,b),w=Xc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,P),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(P).trim(),B=s.getShaderInfoLog(w).trim(),X=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,w);else{let Q=Yc(s,P,"vertex"),H=Yc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+Q+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||B==="")&&(z=!1);z&&(I.diagnostics={runnable:X,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(P),s.deleteShader(w),R=new ns(s,_),S=Ag(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,xg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}var kg=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rl(e),t.set(e,n)),n}},rl=class{constructor(e){this.id=kg++,this.code=e,this.usedTimes=0}};function zg(i,e,t,n,s,r,o){let a=new Pr,l=new sl,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,G,k){let B=G.fog,X=k.geometry,z=S.isMeshStandardMaterial?G.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),H=Q&&Q.mapping===jr?Q.image.height:null,ie=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=le!==void 0?le.length:0,ze=0;X.morphAttributes.position!==void 0&&(ze=1),X.morphAttributes.normal!==void 0&&(ze=2),X.morphAttributes.color!==void 0&&(ze=3);let $e,Y,ee,xe;if(ie){let at=Mn[ie];$e=at.vertexShader,Y=at.fragmentShader}else $e=S.vertexShader,Y=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);let ae=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Be=k.isInstancedMesh===!0,O=k.isBatchedMesh===!0,re=!!S.map,he=!!S.matcap,ge=!!Q,C=!!S.aoMap,Lt=!!S.lightMap,Je=!!S.bumpMap,Ze=!!S.normalMap,Ce=!!S.displacementMap,ot=!!S.emissiveMap,Ie=!!S.metalnessMap,T=!!S.roughnessMap,v=S.anisotropy>0,F=S.clearcoat>0,J=S.dispersion>0,j=S.iridescence>0,Z=S.sheen>0,Ae=S.transmission>0,de=v&&!!S.anisotropyMap,ve=F&&!!S.clearcoatMap,et=F&&!!S.clearcoatNormalMap,te=F&&!!S.clearcoatRoughnessMap,Me=j&&!!S.iridescenceMap,Pe=j&&!!S.iridescenceThicknessMap,Ue=Z&&!!S.sheenColorMap,Se=Z&&!!S.sheenRoughnessMap,Qe=!!S.specularMap,qe=!!S.specularColorMap,ft=!!S.specularIntensityMap,L=Ae&&!!S.transmissionMap,ue=Ae&&!!S.thicknessMap,q=!!S.gradientMap,$=!!S.alphaMap,me=S.alphaTest>0,fe=!!S.alphaHash,He=!!S.extensions,St=ni;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(St=i.toneMapping);let Ut={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:Y,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:O,batchingColor:O&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:fs,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:he,envMap:ge,envMapMode:ge&&Q.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Lt,bumpMap:Je,normalMap:Ze,displacementMap:f&&Ce,emissiveMap:ot,normalMapObjectSpace:Ze&&S.normalMapType===id,normalMapTangentSpace:Ze&&S.normalMapType===Dl,metalnessMap:Ie,roughnessMap:T,anisotropy:v,anisotropyMap:de,clearcoat:F,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:te,dispersion:J,iridescence:j,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:Z,sheenColorMap:Ue,sheenRoughnessMap:Se,specularMap:Qe,specularColorMap:qe,specularIntensityMap:ft,transmission:Ae,transmissionMap:L,thicknessMap:ue,gradientMap:q,opaque:S.transparent===!1&&S.blending===ji&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:me,alphaHash:fe,combine:S.combine,mapUv:re&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:Lt&&_(S.lightMap.channel),bumpMapUv:Je&&_(S.bumpMap.channel),normalMapUv:Ze&&_(S.normalMap.channel),displacementMapUv:Ce&&_(S.displacementMap.channel),emissiveMapUv:ot&&_(S.emissiveMap.channel),metalnessMapUv:Ie&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:de&&_(S.anisotropyMap.channel),clearcoatMapUv:ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:et&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(S.sheenRoughnessMap.channel),specularMapUv:Qe&&_(S.specularMap.channel),specularColorMapUv:qe&&_(S.specularColorMap.channel),specularIntensityMapUv:ft&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:ue&&_(S.thicknessMap.channel),alphaMapUv:$&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ze||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(re||$),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ze,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===Yt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function d(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(E(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let y=g[S.type],I;if(y){let G=Mn[y];I=Cd.clone(G.uniforms)}else I=S.uniforms;return I}function P(S,y){let I;for(let G=0,k=u.length;G<k;G++){let B=u[G];if(B.cacheKey===y){I=B,++I.usedTimes;break}}return I===void 0&&(I=new Fg(i,y,S,r),u.push(I)),I}function w(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:R}}function Hg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,p,g,_,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){let d=o(h,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,_,m){let d=o(h,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Vg),n.length>1&&n.sort(f||Qc),s.length>1&&s.sort(f||Qc)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Gg(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new jc,i.set(n,[o])):s>=r.length?(o=new jc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Le};break;case"SpotLight":t={position:new U,direction:new U,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Xg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qg=0;function Yg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zg(i){let e=new Wg,t=Xg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new yt,o=new yt;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,b=0,x=0,P=0,w=0,A=0;c.sort(Yg);for(let S=0,y=c.length;S<y;S++){let I=c[S],G=I.color,k=I.intensity,B=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=G.r*k,h+=G.g*k,f+=G.b*k;else if(I.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(I.sh.coefficients[z],k);A++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=z,p++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(G).multiplyScalar(k),z.distance=B,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,n.spot[_]=z;let Q=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,Q.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=Q.matrix,I.castShadow){let H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=X,x++}_++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(G).multiplyScalar(k),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=z,m++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let Q=I.shadow,H=t.get(I);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=z,g++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(k),z.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[d]=z,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==E||R.numPointShadows!==b||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=x+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=E,R.numPointShadows=b,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=A,n.version=qg++)}function l(c,u){let h=0,f=0,p=0,g=0,_=0,m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let b=c[d];if(b.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),h++}else if(b.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function eh(i){let e=new Zg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kg(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new eh(i),e.set(s,[a])):r>=o.length?(a=new eh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ol=class extends En{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},al=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qg(i,e,t){let n=new Ns,s=new Ne,r=new Ne,o=new bt,a=new ol({depthPacking:nd}),l=new al,c={},u=t.maxTextureSize,h={[si]:Yt,[Yt]:si,[dn]:dn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Jg,fragmentShader:$g}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new je(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let d=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ti),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let k=d!==Un&&this.type===Un,B=d===Un&&this.type!==Un;for(let X=0,z=w.length;X<z;X++){let Q=w[X],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ie=H.getFrameExtents();if(s.multiply(ie),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y)),H.map===null||k===!0||B===!0){let ye=this.type!==Un?{minFilter:pn,magFilter:pn}:{};H.map!==null&&H.map.dispose(),H.map=new Hn(s.x,s.y,ye),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let le=H.getViewportCount();for(let ye=0;ye<le;ye++){let ze=H.getViewport(ye);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),G.viewport(o),H.updateMatrices(Q,ye),n=H.getFrustum(),x(A,R,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&E(H,R),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,I)};function E(w,A){let R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,R,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,R,p,_,null)}function b(w,A,R,S){let y=null,I=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)y=I;else if(y=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=y.uuid,k=A.uuid,B=c[G];B===void 0&&(B={},c[G]=B);let X=B[k];X===void 0&&(X=y.clone(),B[k]=X,A.addEventListener("dispose",P)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,S===Un?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let G=i.properties.get(y);G.light=R}return y}function x(w,A,R,S,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let k=e.update(w),B=w.material;if(Array.isArray(B)){let X=k.groups;for(let z=0,Q=X.length;z<Q;z++){let H=X[z],ie=B[H.materialIndex];if(ie&&ie.visible){let le=b(w,ie,S,y);w.onBeforeShadow(i,w,A,R,k,le,H),i.renderBufferDirect(R,null,k,le,w,H),w.onAfterShadow(i,w,A,R,k,le,H)}}}else if(B.visible){let X=b(w,B,S,y);w.onBeforeShadow(i,w,A,R,k,X,null),i.renderBufferDirect(R,null,k,X,w,null),w.onAfterShadow(i,w,A,R,k,X,null)}}let G=w.children;for(let k=0,B=G.length;k<B;k++)x(G[k],A,R,S,y)}function P(w){w.target.removeEventListener("dispose",P);for(let R in c){let S=c[R],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var jg={[ha]:ua,[da]:ma,[fa]:ga,[is]:pa,[ua]:ha,[ma]:da,[ga]:fa,[pa]:is};function e0(i,e){function t(){let L=!1,ue=new bt,q=null,$=new bt(0,0,0,0);return{setMask:function(me){q!==me&&!L&&(i.colorMask(me,me,me,me),q=me)},setLocked:function(me){L=me},setClear:function(me,fe,He,St,Ut){Ut===!0&&(me*=St,fe*=St,He*=St),ue.set(me,fe,He,St),$.equals(ue)===!1&&(i.clearColor(me,fe,He,St),$.copy(ue))},reset:function(){L=!1,q=null,$.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,q=null,$=null,me=null;return{setReversed:function(fe){if(ue!==fe){let He=e.get("EXT_clip_control");ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);let St=me;me=null,this.setClear(St)}ue=fe},getReversed:function(){return ue},setTest:function(fe){fe?ae(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(fe){q!==fe&&!L&&(i.depthMask(fe),q=fe)},setFunc:function(fe){if(ue&&(fe=jg[fe]),$!==fe){switch(fe){case ha:i.depthFunc(i.NEVER);break;case ua:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case fa:i.depthFunc(i.EQUAL);break;case pa:i.depthFunc(i.GEQUAL);break;case ma:i.depthFunc(i.GREATER);break;case ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=fe}},setLocked:function(fe){L=fe},setClear:function(fe){me!==fe&&(ue&&(fe=1-fe),i.clearDepth(fe),me=fe)},reset:function(){L=!1,q=null,$=null,me=null,ue=!1}}}function s(){let L=!1,ue=null,q=null,$=null,me=null,fe=null,He=null,St=null,Ut=null;return{setTest:function(at){L||(at?ae(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(at){ue!==at&&!L&&(i.stencilMask(at),ue=at)},setFunc:function(at,an,Rn){(q!==at||$!==an||me!==Rn)&&(i.stencilFunc(at,an,Rn),q=at,$=an,me=Rn)},setOp:function(at,an,Rn){(fe!==at||He!==an||St!==Rn)&&(i.stencilOp(at,an,Rn),fe=at,He=an,St=Rn)},setLocked:function(at){L=at},setClear:function(at){Ut!==at&&(i.clearStencil(at),Ut=at)},reset:function(){L=!1,ue=null,q=null,$=null,me=null,fe=null,He=null,St=null,Ut=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,b=null,x=null,P=null,w=null,A=new Le(0,0,0),R=0,S=!1,y=null,I=null,G=null,k=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Q=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=Q>=2);let ie=null,le={},ye=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),$e=new bt().fromArray(ye),Y=new bt().fromArray(ze);function ee(L,ue,q,$){let me=new Uint8Array(4),fe=i.createTexture();i.bindTexture(L,fe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<q;He++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ue+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return fe}let xe={};xe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ae(i.DEPTH_TEST),o.setFunc(is),Je(!1),Ze(sc),ae(i.CULL_FACE),C(ti);function ae(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function be(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Be(L,ue){return h[L]!==ue?(i.bindFramebuffer(L,ue),h[L]=ue,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function O(L,ue){let q=p,$=!1;if(L){q=f.get(ue),q===void 0&&(q=[],f.set(ue,q));let me=L.textures;if(q.length!==me.length||q[0]!==i.COLOR_ATTACHMENT0){for(let fe=0,He=me.length;fe<He;fe++)q[fe]=i.COLOR_ATTACHMENT0+fe;q.length=me.length,$=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,$=!0);$&&i.drawBuffers(q)}function re(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let he={[yi]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};he[Iu]=i.MIN,he[Pu]=i.MAX;let ge={[Lu]:i.ZERO,[Du]:i.ONE,[Nu]:i.SRC_COLOR,[la]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Uu]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[ku]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,ue,q,$,me,fe,He,St,Ut,at){if(L===ti){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(ae(i.BLEND),_=!0),L!==Au){if(L!==m||at!==S){if((d!==yi||x!==yi)&&(i.blendEquation(i.FUNC_ADD),d=yi,x=yi),at)switch(L){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,P=null,w=null,A.set(0,0,0),R=0,m=L,S=at}return}me=me||ue,fe=fe||q,He=He||$,(ue!==d||me!==x)&&(i.blendEquationSeparate(he[ue],he[me]),d=ue,x=me),(q!==E||$!==b||fe!==P||He!==w)&&(i.blendFuncSeparate(ge[q],ge[$],ge[fe],ge[He]),E=q,b=$,P=fe,w=He),(St.equals(A)===!1||Ut!==R)&&(i.blendColor(St.r,St.g,St.b,Ut),A.copy(St),R=Ut),m=L,S=!1}function Lt(L,ue){L.side===dn?be(i.CULL_FACE):ae(i.CULL_FACE);let q=L.side===Yt;ue&&(q=!q),Je(q),L.blending===ji&&L.transparent===!1?C(ti):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let $=L.stencilWrite;a.setTest($),$&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Ze(L){L!==Eu?(ae(i.CULL_FACE),L!==I&&(L===sc?i.cullFace(i.BACK):L===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),I=L}function Ce(L){L!==G&&(z&&i.lineWidth(L),G=L)}function ot(L,ue,q){L?(ae(i.POLYGON_OFFSET_FILL),(k!==ue||B!==q)&&(i.polygonOffset(ue,q),k=ue,B=q)):be(i.POLYGON_OFFSET_FILL)}function Ie(L){L?ae(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+X-1),ie!==L&&(i.activeTexture(L),ie=L)}function v(L,ue,q){q===void 0&&(ie===null?q=i.TEXTURE0+X-1:q=ie);let $=le[q];$===void 0&&($={type:void 0,texture:void 0},le[q]=$),($.type!==L||$.texture!==ue)&&(ie!==q&&(i.activeTexture(q),ie=q),i.bindTexture(L,ue||xe[L]),$.type=L,$.texture=ue)}function F(){let L=le[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){$e.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),$e.copy(L))}function Se(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Qe(L,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let $=q.get(L);$===void 0&&($=i.getUniformBlockIndex(ue,L.name),q.set(L,$))}function qe(L,ue){let $=c.get(ue).get(L);l.get(ue)!==$&&(i.uniformBlockBinding(ue,$,L.__bindingPointIndex),l.set(ue,$))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,le={},h={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,b=null,x=null,P=null,w=null,A=new Le(0,0,0),R=0,S=!1,y=null,I=null,G=null,k=null,B=null,$e.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ae,disable:be,bindFramebuffer:Be,drawBuffers:O,useProgram:re,setBlending:C,setMaterial:Lt,setFlipSided:Je,setCullFace:Ze,setLineWidth:Ce,setPolygonOffset:ot,setScissorTest:Ie,activeTexture:T,bindTexture:v,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:j,texImage2D:Me,texImage3D:Pe,updateUBOMapping:Qe,uniformBlockBinding:qe,texStorage2D:et,texStorage3D:te,texSubImage2D:Z,texSubImage3D:Ae,compressedTexSubImage2D:de,compressedTexSubImage3D:ve,scissor:Ue,viewport:Se,reset:ft}}function th(i,e,t,n){let s=t0(n);switch(t){case fh:return i*e;case mh:return i*e;case gh:return i*e*2;case _h:return i*e/s.components*s.byteLength;case Il:return i*e/s.components*s.byteLength;case xh:return i*e*2/s.components*s.byteLength;case Pl:return i*e*2/s.components*s.byteLength;case ph:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case Ll:return i*e*4/s.components*s.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:case ba:return Math.max(i,16)*Math.max(e,8)/4;case ya:case Sa:return Math.max(i,8)*Math.max(e,8)/2;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Er:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16;case vh:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function t0(i){switch(i){case zn:case hh:return{byteLength:1,components:1};case Ds:case uh:case Os:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Ei:case Al:case Bn:return{byteLength:4,components:1};case dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function n0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):Ar("canvas")}function _(T,v,F){let J=1,j=Ie(T);if((j.width>F||j.height>F)&&(J=F/Math.max(j.width,j.height)),J<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let Z=Math.floor(J*j.width),Ae=Math.floor(J*j.height);h===void 0&&(h=g(Z,Ae));let de=v?g(Z,Ae):h;return de.width=Z,de.height=Ae,de.getContext("2d").drawImage(T,0,0,Z,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+Ae+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,v,F,J,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=v;if(v===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),v===i.RGBA){let Ae=j?eo:tt.getTransfer(J);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=Ae===ht?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(T,v){let F;return T?v===null||v===Ei||v===os?F=i.DEPTH24_STENCIL8:v===Bn?F=i.DEPTH32F_STENCIL8:v===Ds&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ei||v===os?F=i.DEPTH_COMPONENT24:v===Bn?F=i.DEPTH_COMPONENT32F:v===Ds&&(F=i.DEPTH_COMPONENT16),F}function P(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==pn&&T.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){let v=T.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&u.delete(v)}function A(T){let v=T.target;v.removeEventListener("dispose",A),y(v)}function R(T){let v=n.get(T);if(v.__webglInit===void 0)return;let F=T.source,J=f.get(F);if(J){let j=J[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(T),Object.keys(J).length===0&&f.delete(F)}n.remove(T)}function S(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let F=T.source,J=f.get(F);delete J[v.__cacheKey],o.memory.textures--}function y(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let j=0;j<v.__webglFramebuffer[J].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[J][j]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=T.textures;for(let J=0,j=F.length;J<j;J++){let Z=n.get(F[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(F[J])}n.remove(T)}let I=0;function G(){I=0}function k(){let T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function B(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function X(T,v){let F=n.get(T);if(T.isVideoTexture&&Ce(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,T,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function z(T,v){let F=n.get(T);if(T.version>0&&F.__version!==T.version){Y(F,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function Q(T,v){let F=n.get(T);if(T.version>0&&F.__version!==T.version){Y(F,T,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function H(T,v){let F=n.get(T);if(T.version>0&&F.__version!==T.version){ee(F,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let ie={[Ls]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},le={[pn]:i.NEAREST,[ed]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},ye={[sd]:i.NEVER,[hd]:i.ALWAYS,[rd]:i.LESS,[yh]:i.LEQUAL,[od]:i.EQUAL,[cd]:i.GEQUAL,[ad]:i.GREATER,[ld]:i.NOTEQUAL};function ze(T,v){if(v.type===Bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===Io||v.magFilter===Ys||v.magFilter===bi||v.minFilter===bn||v.minFilter===Io||v.minFilter===Ys||v.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ie[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ie[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ie[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ye[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==Ys&&v.minFilter!==bi||v.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $e(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));let J=v.source,j=f.get(J);j===void 0&&(j={},f.set(J,j));let Z=B(v);if(Z!==T.__cacheKey){j[Z]===void 0&&(j[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[Z].usedTimes++;let Ae=j[T.__cacheKey];Ae!==void 0&&(j[T.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(v)),T.__cacheKey=Z,T.__webglTexture=j[Z].texture}return F}function Y(T,v,F){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let j=$e(T,v),Z=v.source;t.bindTexture(J,T.__webglTexture,i.TEXTURE0+F);let Ae=n.get(Z);if(Z.version!==Ae.__version||j===!0){t.activeTexture(i.TEXTURE0+F);let de=tt.getPrimaries(tt.workingColorSpace),ve=v.colorSpace===jn?null:tt.getPrimaries(v.colorSpace),et=v.colorSpace===jn||de===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let te=_(v.image,!1,s.maxTextureSize);te=ot(v,te);let Me=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type),Ue=b(v.internalFormat,Me,Pe,v.colorSpace,v.isVideoTexture);ze(J,v);let Se,Qe=v.mipmaps,qe=v.isVideoTexture!==!0,ft=Ae.__version===void 0||j===!0,L=Z.dataReady,ue=P(v,te);if(v.isDepthTexture)Ue=x(v.format===as,v.type),ft&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ue,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ue,te.width,te.height,0,Me,Pe,null));else if(v.isDataTexture)if(Qe.length>0){qe&&ft&&t.texStorage2D(i.TEXTURE_2D,ue,Ue,Qe[0].width,Qe[0].height);for(let q=0,$=Qe.length;q<$;q++)Se=Qe[q],qe?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,q,Ue,Se.width,Se.height,0,Me,Pe,Se.data);v.generateMipmaps=!1}else qe?(ft&&t.texStorage2D(i.TEXTURE_2D,ue,Ue,te.width,te.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,Me,Pe,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,te.width,te.height,0,Me,Pe,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ue,Qe[0].width,Qe[0].height,te.depth);for(let q=0,$=Qe.length;q<$;q++)if(Se=Qe[q],v.format!==fn)if(Me!==null)if(qe){if(L)if(v.layerUpdates.size>0){let me=th(Se.width,Se.height,v.format,v.type);for(let fe of v.layerUpdates){let He=Se.data.subarray(fe*me/Se.data.BYTES_PER_ELEMENT,(fe+1)*me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,fe,Se.width,Se.height,1,Me,He)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,te.depth,Me,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ue,Se.width,Se.height,te.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Se.width,Se.height,te.depth,Me,Pe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Ue,Se.width,Se.height,te.depth,0,Me,Pe,Se.data)}else{qe&&ft&&t.texStorage2D(i.TEXTURE_2D,ue,Ue,Qe[0].width,Qe[0].height);for(let q=0,$=Qe.length;q<$;q++)Se=Qe[q],v.format!==fn?Me!==null?qe?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Ue,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Se.width,Se.height,Me,Pe,Se.data):t.texImage2D(i.TEXTURE_2D,q,Ue,Se.width,Se.height,0,Me,Pe,Se.data)}else if(v.isDataArrayTexture)if(qe){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Ue,te.width,te.height,te.depth),L)if(v.layerUpdates.size>0){let q=th(te.width,te.height,v.format,v.type);for(let $ of v.layerUpdates){let me=te.data.subarray($*q/te.data.BYTES_PER_ELEMENT,($+1)*q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,te.width,te.height,1,Me,Pe,me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Me,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,te.width,te.height,te.depth,0,Me,Pe,te.data);else if(v.isData3DTexture)qe?(ft&&t.texStorage3D(i.TEXTURE_3D,ue,Ue,te.width,te.height,te.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Me,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,te.width,te.height,te.depth,0,Me,Pe,te.data);else if(v.isFramebufferTexture){if(ft)if(qe)t.texStorage2D(i.TEXTURE_2D,ue,Ue,te.width,te.height);else{let q=te.width,$=te.height;for(let me=0;me<ue;me++)t.texImage2D(i.TEXTURE_2D,me,Ue,q,$,0,Me,Pe,null),q>>=1,$>>=1}}else if(Qe.length>0){if(qe&&ft){let q=Ie(Qe[0]);t.texStorage2D(i.TEXTURE_2D,ue,Ue,q.width,q.height)}for(let q=0,$=Qe.length;q<$;q++)Se=Qe[q],qe?L&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,Me,Pe,Se):t.texImage2D(i.TEXTURE_2D,q,Ue,Me,Pe,Se);v.generateMipmaps=!1}else if(qe){if(ft){let q=Ie(te);t.texStorage2D(i.TEXTURE_2D,ue,Ue,q.width,q.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Me,Pe,te);m(v)&&d(J),Ae.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ee(T,v,F){if(v.image.length!==6)return;let J=$e(T,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let Z=n.get(j);if(j.version!==Z.__version||J===!0){t.activeTexture(i.TEXTURE0+F);let Ae=tt.getPrimaries(tt.workingColorSpace),de=v.colorSpace===jn?null:tt.getPrimaries(v.colorSpace),ve=v.colorSpace===jn||Ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let et=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,Me=[];for(let $=0;$<6;$++)!et&&!te?Me[$]=_(v.image[$],!0,s.maxCubemapSize):Me[$]=te?v.image[$].image:v.image[$],Me[$]=ot(v,Me[$]);let Pe=Me[0],Ue=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),Qe=b(v.internalFormat,Ue,Se,v.colorSpace),qe=v.isVideoTexture!==!0,ft=Z.__version===void 0||J===!0,L=j.dataReady,ue=P(v,Pe);ze(i.TEXTURE_CUBE_MAP,v);let q;if(et){qe&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Qe,Pe.width,Pe.height);for(let $=0;$<6;$++){q=Me[$].mipmaps;for(let me=0;me<q.length;me++){let fe=q[me];v.format!==fn?Ue!==null?qe?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,fe.width,fe.height,Ue,fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,fe.width,fe.height,Ue,Se,fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Qe,fe.width,fe.height,0,Ue,Se,fe.data)}}}else{if(q=v.mipmaps,qe&&ft){q.length>0&&ue++;let $=Ie(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Qe,$.width,$.height)}for(let $=0;$<6;$++)if(te){qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me[$].width,Me[$].height,Ue,Se,Me[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qe,Me[$].width,Me[$].height,0,Ue,Se,Me[$].data);for(let me=0;me<q.length;me++){let He=q[me].image[$].image;qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,He.width,He.height,Ue,Se,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Qe,He.width,He.height,0,Ue,Se,He.data)}}else{qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ue,Se,Me[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qe,Ue,Se,Me[$]);for(let me=0;me<q.length;me++){let fe=q[me];qe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Ue,Se,fe.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Qe,Ue,Se,fe.image[$])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),Z.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function xe(T,v,F,J,j,Z){let Ae=r.convert(F.format,F.colorSpace),de=r.convert(F.type),ve=b(F.internalFormat,Ae,de,F.colorSpace),et=n.get(v),te=n.get(F);if(te.__renderTarget=v,!et.__hasExternalTextures){let Me=Math.max(1,v.width>>Z),Pe=Math.max(1,v.height>>Z);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Z,ve,Me,Pe,v.depth,0,Ae,de,null):t.texImage2D(j,Z,ve,Me,Pe,0,Ae,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ze(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,te.__webglTexture,0,Je(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,j,te.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(T,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let J=v.depthTexture,j=J&&J.isDepthTexture?J.type:null,Z=x(v.stencilBuffer,j),Ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=Je(v);Ze(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Z,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,T)}else{let J=v.textures;for(let j=0;j<J.length;j++){let Z=J[j],Ae=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),ve=b(Z.internalFormat,Ae,de,Z.colorSpace),et=Je(v);F&&Ze(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,ve,v.width,v.height):Ze(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let j=J.__webglTexture,Z=Je(v);if(v.depthTexture.format===es)Ze(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(v.depthTexture.format===as)Ze(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Be(T){let v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",j)};J.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),ae(v.__webglDepthbuffer[J],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ae(v.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function O(T,v,F){let J=n.get(T);v!==void 0&&xe(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Be(T)}function re(T){let v=T.texture,F=n.get(T),J=n.get(v);T.addEventListener("dispose",A);let j=T.textures,Z=T.isWebGLCubeRenderTarget===!0,Ae=j.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let ve=0;ve<v.mipmaps.length;ve++)F.__webglFramebuffer[de][ve]=i.createFramebuffer()}else F.__webglFramebuffer[de]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)F.__webglFramebuffer[de]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let de=0,ve=j.length;de<ve;de++){let et=n.get(j[de]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Ze(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<j.length;de++){let ve=j[de];F.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[de]);let et=r.convert(ve.format,ve.colorSpace),te=r.convert(ve.type),Me=b(ve.internalFormat,et,te,ve.colorSpace,T.isXRRenderTarget===!0),Pe=Je(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,F.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ze(i.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)xe(F.__webglFramebuffer[de][ve],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else xe(F.__webglFramebuffer[de],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let de=0,ve=j.length;de<ve;de++){let et=j[de],te=n.get(et);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),ze(i.TEXTURE_2D,et),xe(F.__webglFramebuffer,T,et,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(et)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,J.__webglTexture),ze(de,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)xe(F.__webglFramebuffer[ve],T,v,i.COLOR_ATTACHMENT0,de,ve);else xe(F.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,de,0);m(v)&&d(de),t.unbindTexture()}T.depthBuffer&&Be(T)}function he(T){let v=T.textures;for(let F=0,J=v.length;F<J;F++){let j=v[F];if(m(j)){let Z=E(T),Ae=n.get(j).__webglTexture;t.bindTexture(Z,Ae),d(Z),t.unbindTexture()}}}let ge=[],C=[];function Lt(T){if(T.samples>0){if(Ze(T)===!1){let v=T.textures,F=T.width,J=T.height,j=i.COLOR_BUFFER_BIT,Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(T),de=v.length>1;if(de)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);let et=n.get(v[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,F,J,0,0,F,J,j,i.NEAREST),l===!0&&(ge.length=0,C.length=0,ge.push(i.COLOR_ATTACHMENT0+ve),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ge.push(Z),C.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ve]);let et=n.get(v[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Je(T){return Math.min(s.maxSamples,T.samples)}function Ze(T){let v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ce(T){let v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function ot(T,v){let F=T.colorSpace,J=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==fs&&F!==jn&&(tt.getTransfer(F)===ht?(J!==fn||j!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Ie(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=O,this.setupRenderTarget=re,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ze}function i0(i,e){function t(n,s=jn){let r,o=tt.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.BYTE;if(n===uh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===fn)return i.RGBA;if(n===mh)return i.LUMINANCE;if(n===gh)return i.LUMINANCE_ALPHA;if(n===es)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===_h)return i.RED;if(n===Il)return i.RED_INTEGER;if(n===xh)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===Sr||n===br)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ma||n===Sa||n===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ea||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ea||n===Ta)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua||n===Oa||n===Ba||n===Fa||n===ka||n===za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Aa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fa)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Er||n===Ha||n===Va)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Er)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===Ga||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ll=class extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},s0={type:"move"},Ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},r0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tn({vertexShader:r0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hl=class extends oi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,_=new cl,m=t.getContextAttributes(),d=null,E=null,b=[],x=[],P=new Ne,w=null,A=new zt;A.viewport=new bt;let R=new zt;R.viewport=new bt;let S=[A,R],y=new ll,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Ps,b[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Ps,b[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=b[Y];return ee===void 0&&(ee=new Ps,b[Y]=ee),ee.getHandSpace()};function k(Y){let ee=x.indexOf(Y.inputSource);if(ee===-1)return;let xe=b[ee];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,c||o),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<b.length;Y++){let ee=x[Y];ee!==null&&(x[Y]=null,b[Y].disconnect(ee))}I=null,G=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,E=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Hn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,xe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?as:es,xe=m.stencil?os:Ei);let be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(be),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Hn(f.textureWidth,f.textureHeight,{format:fn,type:zn,depthTexture:new Fr(f.textureWidth,f.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let ee=0;ee<Y.removed.length;ee++){let xe=Y.removed[ee],ae=x.indexOf(xe);ae>=0&&(x[ae]=null,b[ae].disconnect(xe))}for(let ee=0;ee<Y.added.length;ee++){let xe=Y.added[ee],ae=x.indexOf(xe);if(ae===-1){for(let Be=0;Be<b.length;Be++)if(Be>=x.length){x.push(xe),ae=Be;break}else if(x[Be]===null){x[Be]=xe,ae=Be;break}if(ae===-1)break}let be=b[ae];be&&be.connect(xe)}}let z=new U,Q=new U;function H(Y,ee,xe){z.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);let ae=z.distanceTo(Q),be=ee.projectionMatrix.elements,Be=xe.projectionMatrix.elements,O=be[14]/(be[10]-1),re=be[14]/(be[10]+1),he=(be[9]+1)/be[5],ge=(be[9]-1)/be[5],C=(be[8]-1)/be[0],Lt=(Be[8]+1)/Be[0],Je=O*C,Ze=O*Lt,Ce=ae/(-C+Lt),ot=Ce*-C;if(ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ot),Y.translateZ(Ce),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Ie=O+Ce,T=re+Ce,v=Je-ot,F=Ze+(ae-ot),J=he*re/T*Ie,j=ge*re/T*Ie;Y.projectionMatrix.makePerspective(v,F,J,j,Ie,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ee=Y.near,xe=Y.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),y.near=R.near=A.near=ee,y.far=R.far=A.far=xe,(I!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,G=y.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,y.layers.mask=A.layers.mask|R.layers.mask;let ae=Y.parent,be=y.cameras;ie(y,ae);for(let Be=0;Be<be.length;Be++)ie(be[Be],ae);be.length===2?H(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),le(Y,y,ae)};function le(Y,ee,xe){xe===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(xe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Za*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ye=null;function ze(Y,ee){if(u=ee.getViewerPose(c||o),g=ee,u!==null){let xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ae=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Be=0;Be<xe.length;Be++){let O=xe[Be],re=null;if(p!==null)re=p.getViewport(O);else{let ge=h.getViewSubImage(f,O);re=ge.viewport,Be===0&&(e.setRenderTargetTextures(E,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(E))}let he=S[Be];he===void 0&&(he=new zt,he.layers.enable(Be),he.viewport=new bt,S[Be]=he),he.matrix.fromArray(O.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(O.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(re.x,re.y,re.width,re.height),Be===0&&(y.matrix.copy(he.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(he)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){let Be=h.getDepthInformation(xe[0]);Be&&Be.isValid&&Be.texture&&_.init(e,Be,s.renderState)}}for(let xe=0;xe<b.length;xe++){let ae=x[xe],be=b[xe];ae!==null&&be!==void 0&&be.update(ae,ee,c||o)}ye&&ye(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let $e=new Eh;$e.setAnimationLoop(ze),this.setAnimationLoop=function(Y){ye=Y},this.dispose=function(){}}},xi=new mn,a0=new yt;function l0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=e.get(d),b=E.envMap,x=E.envMapRotation;b&&(m.envMap.value=b,xi.copy(x),xi.x*=-1,xi.y*=-1,xi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(a0.makeRotationFromEuler(xi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c0(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let x=b.program;n.uniformBlockBinding(E,x)}function c(E,b){let x=s[E.id];x===void 0&&(g(E),x=u(E),s[E.id]=x,E.addEventListener("dispose",m));let P=b.program;n.updateUBOMapping(E,P);let w=e.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function u(E){let b=h();E.__bindingPointIndex=b;let x=i.createBuffer(),P=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,x),x}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let b=s[E.id],x=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=x.length;w<A;w++){let R=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,y=R.length;S<y;S++){let I=R[S];if(p(I,w,S,P)===!0){let G=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],B=0;for(let X=0;X<k.length;X++){let z=k[X],Q=_(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,G+B,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,B),B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,x,P){let w=E.value,A=b+"_"+x;if(P[A]===void 0)return typeof w=="number"||typeof w=="boolean"?P[A]=w:P[A]=w.clone(),!0;{let R=P[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return P[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(E){let b=E.uniforms,x=0,P=16;for(let A=0,R=b.length;A<R;A++){let S=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,I=S.length;y<I;y++){let G=S[y],k=Array.isArray(G.value)?G.value:[G.value];for(let B=0,X=k.length;B<X;B++){let z=k[B],Q=_(z),H=x%P,ie=H%Q.boundary,le=H+ie;x+=ie,le!==0&&P-le<Q.storage&&(x+=P-le),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=Q.storage}}}let w=x%P;return w>0&&(x+=P-w),E.__size=x,E.__cache={},this}function _(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var kr=class{constructor(e={}){let{canvas:t=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=ni,this.toneMappingExposure=1;let x=this,P=!1,w=0,A=0,R=null,S=-1,y=null,I=new bt,G=new bt,k=null,B=new Le(0),X=0,z=t.width,Q=t.height,H=1,ie=null,le=null,ye=new bt(0,0,z,Q),ze=new bt(0,0,z,Q),$e=!1,Y=new Ns,ee=!1,xe=!1,ae=new yt,be=new yt,Be=new U,O=new bt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ge(){return R===null?H:1}let C=n;function Lt(M,D){return t.getContext(M,D)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),C===null){let D="webgl2";if(C=Lt(D,M),C===null)throw Lt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Je,Ze,Ce,ot,Ie,T,v,F,J,j,Z,Ae,de,ve,et,te,Me,Pe,Ue,Se,Qe,qe,ft,L;function ue(){Je=new Tm(C),Je.init(),qe=new i0(C,Je),Ze=new vm(C,Je,e,qe),Ce=new e0(C,Je),Ze.reverseDepthBuffer&&f&&Ce.buffers.depth.setReversed(!0),ot=new Rm(C),Ie=new Hg,T=new n0(C,Je,Ce,Ie,Ze,qe,ot),v=new Mm(x),F=new Em(x),J=new Nd(C),ft=new _m(C,J),j=new wm(C,J,ot,ft),Z=new Im(C,j,J,ot),Ue=new Cm(C,Ze,T),te=new ym(Ie),Ae=new zg(x,v,F,Je,Ze,ft,te),de=new l0(x,Ie),ve=new Gg,et=new Kg(Je),Pe=new gm(x,v,F,Ce,Z,p,l),Me=new Qg(x,Z,Ze),L=new c0(C,ot,Ze,Ce),Se=new xm(C,Je,ot),Qe=new Am(C,Je,ot),ot.programs=Ae.programs,x.capabilities=Ze,x.extensions=Je,x.properties=Ie,x.renderLists=ve,x.shadowMap=Me,x.state=Ce,x.info=ot}ue();let q=new hl(x,C);this.xr=q,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(z,Q,!1))},this.getSize=function(M){return M.set(z,Q)},this.setSize=function(M,D,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,Q=D,t.width=Math.floor(M*H),t.height=Math.floor(D*H),V===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(z*H,Q*H).floor()},this.setDrawingBufferSize=function(M,D,V){z=M,Q=D,H=V,t.width=Math.floor(M*V),t.height=Math.floor(D*V),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(ye)},this.setViewport=function(M,D,V,W){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,D,V,W),Ce.viewport(I.copy(ye).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(ze)},this.setScissor=function(M,D,V,W){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,D,V,W),Ce.scissor(G.copy(ze).multiplyScalar(H).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){Ce.setScissorTest($e=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(M=!0,D=!0,V=!0){let W=0;if(M){let N=!1;if(R!==null){let ne=R.texture.format;N=ne===Ll||ne===Pl||ne===Il}if(N){let ne=R.texture.type,pe=ne===zn||ne===Ei||ne===Ds||ne===os||ne===Rl||ne===Cl,Ee=Pe.getClearColor(),Te=Pe.getClearAlpha(),Fe=Ee.r,Ve=Ee.g,we=Ee.b;pe?(g[0]=Fe,g[1]=Ve,g[2]=we,g[3]=Te,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Fe,_[1]=Ve,_[2]=we,_[3]=Te,C.clearBufferiv(C.COLOR,0,_))}else W|=C.COLOR_BUFFER_BIT}D&&(W|=C.DEPTH_BUFFER_BIT),V&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ve.dispose(),et.dispose(),Ie.dispose(),v.dispose(),F.dispose(),Z.dispose(),ft.dispose(),L.dispose(),Ae.dispose(),q.dispose(),q.removeEventListener("sessionstart",Jl),q.removeEventListener("sessionend",$l),di.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let M=ot.autoReset,D=Me.enabled,V=Me.autoUpdate,W=Me.needsUpdate,N=Me.type;ue(),ot.autoReset=M,Me.enabled=D,Me.autoUpdate=V,Me.needsUpdate=W,Me.type=N}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function He(M){let D=M.target;D.removeEventListener("dispose",He),St(D)}function St(M){Ut(M),Ie.remove(M)}function Ut(M){let D=Ie.get(M).programs;D!==void 0&&(D.forEach(function(V){Ae.releaseProgram(V)}),M.isShaderMaterial&&Ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,V,W,N,ne){D===null&&(D=re);let pe=N.isMesh&&N.matrixWorld.determinant()<0,Ee=Mu(M,D,V,W,N);Ce.setMaterial(W,pe);let Te=V.index,Fe=1;if(W.wireframe===!0){if(Te=j.getWireframeAttribute(V),Te===void 0)return;Fe=2}let Ve=V.drawRange,we=V.attributes.position,nt=Ve.start*Fe,pt=(Ve.start+Ve.count)*Fe;ne!==null&&(nt=Math.max(nt,ne.start*Fe),pt=Math.min(pt,(ne.start+ne.count)*Fe)),Te!==null?(nt=Math.max(nt,0),pt=Math.min(pt,Te.count)):we!=null&&(nt=Math.max(nt,0),pt=Math.min(pt,we.count));let mt=pt-nt;if(mt<0||mt===1/0)return;ft.setup(N,W,Ee,V,Te);let Wt,st=Se;if(Te!==null&&(Wt=J.get(Te),st=Qe,st.setIndex(Wt)),N.isMesh)W.wireframe===!0?(Ce.setLineWidth(W.wireframeLinewidth*ge()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(N.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),Ce.setLineWidth(Re*ge()),N.isLineSegments?st.setMode(C.LINES):N.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else N.isPoints?st.setMode(C.POINTS):N.isSprite&&st.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Re=N._multiDrawStarts,Cn=N._multiDrawCounts,rt=N._multiDrawCount,ln=Te?J.get(Te).bytesPerElement:1,Di=Ie.get(W).currentProgram.getUniforms();for(let Kt=0;Kt<rt;Kt++)Di.setValue(C,"_gl_DrawID",Kt),st.render(Re[Kt]/ln,Cn[Kt])}else if(N.isInstancedMesh)st.renderInstances(nt,mt,N.count);else if(V.isInstancedBufferGeometry){let Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Cn=Math.min(V.instanceCount,Re);st.renderInstances(nt,mt,Cn)}else st.render(nt,mt)};function at(M,D,V){M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=Yt,M.needsUpdate=!0,qs(M,D,V),M.side=si,M.needsUpdate=!0,qs(M,D,V),M.side=dn):qs(M,D,V)}this.compile=function(M,D,V=null){V===null&&(V=M),d=et.get(V),d.init(D),b.push(d),V.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),M!==V&&M.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let W=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ne=N.material;if(ne)if(Array.isArray(ne))for(let pe=0;pe<ne.length;pe++){let Ee=ne[pe];at(Ee,V,N),W.add(Ee)}else at(ne,V,N),W.add(ne)}),b.pop(),d=null,W},this.compileAsync=function(M,D,V=null){let W=this.compile(M,D,V);return new Promise(N=>{function ne(){if(W.forEach(function(pe){Ie.get(pe).currentProgram.isReady()&&W.delete(pe)}),W.size===0){N(M);return}setTimeout(ne,10)}Je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let an=null;function Rn(M){an&&an(M)}function Jl(){di.stop()}function $l(){di.start()}let di=new Eh;di.setAnimationLoop(Rn),typeof self!="undefined"&&di.setContext(self),this.setAnimationLoop=function(M){an=M,q.setAnimationLoop(M),M===null?di.stop():di.start()},q.addEventListener("sessionstart",Jl),q.addEventListener("sessionend",$l),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,D,R),d=et.get(M,b.length),d.init(D),b.push(d),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(be),xe=this.localClippingEnabled,ee=te.init(this.clippingPlanes,xe),m=ve.get(M,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){let ne=x.xr.getDepthSensingMesh();ne!==null&&Co(ne,D,-1/0,x.sortObjects)}Co(M,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ie,le),he=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,he&&Pe.addToRenderList(m,M),this.info.render.frame++,ee===!0&&te.beginShadows();let V=d.state.shadowsArray;Me.render(V,M,D),ee===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,N=m.transmissive;if(d.setupLights(),D.isArrayCamera){let ne=D.cameras;if(N.length>0)for(let pe=0,Ee=ne.length;pe<Ee;pe++){let Te=ne[pe];jl(W,N,M,Te)}he&&Pe.render(M);for(let pe=0,Ee=ne.length;pe<Ee;pe++){let Te=ne[pe];Ql(m,M,Te,Te.viewport)}}else N.length>0&&jl(W,N,M,D),he&&Pe.render(M),Ql(m,M,D);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(x,M,D),ft.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],ee===!0&&te.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Co(M,D,V,W){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){W&&O.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);let pe=Z.update(M),Ee=M.material;Ee.visible&&m.push(M,pe,Ee,V,O.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){let pe=Z.update(M),Ee=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),O.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),O.copy(pe.boundingSphere.center)),O.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(Ee)){let Te=pe.groups;for(let Fe=0,Ve=Te.length;Fe<Ve;Fe++){let we=Te[Fe],nt=Ee[we.materialIndex];nt&&nt.visible&&m.push(M,pe,nt,V,O.z,we)}}else Ee.visible&&m.push(M,pe,Ee,V,O.z,null)}}let ne=M.children;for(let pe=0,Ee=ne.length;pe<Ee;pe++)Co(ne[pe],D,V,W)}function Ql(M,D,V,W){let N=M.opaque,ne=M.transmissive,pe=M.transparent;d.setupLightsView(V),ee===!0&&te.setGlobalState(x.clippingPlanes,V),W&&Ce.viewport(I.copy(W)),N.length>0&&Xs(N,D,V),ne.length>0&&Xs(ne,D,V),pe.length>0&&Xs(pe,D,V),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function jl(M,D,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new Hn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Os:zn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let ne=d.state.transmissionRenderTarget[W.id],pe=W.viewport||I;ne.setSize(pe.z,pe.w);let Ee=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(B),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),he&&Pe.render(V);let Te=x.toneMapping;x.toneMapping=ni;let Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),ee===!0&&te.setGlobalState(x.clippingPlanes,W),Xs(M,V,W),T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let we=0,nt=D.length;we<nt;we++){let pt=D[we],mt=pt.object,Wt=pt.geometry,st=pt.material,Re=pt.group;if(st.side===dn&&mt.layers.test(W.layers)){let Cn=st.side;st.side=Yt,st.needsUpdate=!0,ec(mt,V,W,Wt,st,Re),st.side=Cn,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(T.updateMultisampleRenderTarget(ne),T.updateRenderTargetMipmap(ne))}x.setRenderTarget(Ee),x.setClearColor(B,X),Fe!==void 0&&(W.viewport=Fe),x.toneMapping=Te}function Xs(M,D,V){let W=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ne=M.length;N<ne;N++){let pe=M[N],Ee=pe.object,Te=pe.geometry,Fe=W===null?pe.material:W,Ve=pe.group;Ee.layers.test(V.layers)&&ec(Ee,D,V,Te,Fe,Ve)}}function ec(M,D,V,W,N,ne){M.onBeforeRender(x,D,V,W,N,ne),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,D,V,W,M,ne),N.transparent===!0&&N.side===dn&&N.forceSinglePass===!1?(N.side=Yt,N.needsUpdate=!0,x.renderBufferDirect(V,D,W,N,M,ne),N.side=si,N.needsUpdate=!0,x.renderBufferDirect(V,D,W,N,M,ne),N.side=dn):x.renderBufferDirect(V,D,W,N,M,ne),M.onAfterRender(x,D,V,W,N,ne)}function qs(M,D,V){D.isScene!==!0&&(D=re);let W=Ie.get(M),N=d.state.lights,ne=d.state.shadowsArray,pe=N.state.version,Ee=Ae.getParameters(M,N.state,ne,D,V),Te=Ae.getProgramCacheKey(Ee),Fe=W.programs;W.environment=M.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",He),Fe=new Map,W.programs=Fe);let Ve=Fe.get(Te);if(Ve!==void 0){if(W.currentProgram===Ve&&W.lightsStateVersion===pe)return nc(M,Ee),Ve}else Ee.uniforms=Ae.getUniforms(M),M.onBeforeCompile(Ee,x),Ve=Ae.acquireProgram(Ee,Te),Fe.set(Te,Ve),W.uniforms=Ee.uniforms;let we=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=te.uniform),nc(M,Ee),W.needsLights=bu(M),W.lightsStateVersion=pe,W.needsLights&&(we.ambientLightColor.value=N.state.ambient,we.lightProbe.value=N.state.probe,we.directionalLights.value=N.state.directional,we.directionalLightShadows.value=N.state.directionalShadow,we.spotLights.value=N.state.spot,we.spotLightShadows.value=N.state.spotShadow,we.rectAreaLights.value=N.state.rectArea,we.ltc_1.value=N.state.rectAreaLTC1,we.ltc_2.value=N.state.rectAreaLTC2,we.pointLights.value=N.state.point,we.pointLightShadows.value=N.state.pointShadow,we.hemisphereLights.value=N.state.hemi,we.directionalShadowMap.value=N.state.directionalShadowMap,we.directionalShadowMatrix.value=N.state.directionalShadowMatrix,we.spotShadowMap.value=N.state.spotShadowMap,we.spotLightMatrix.value=N.state.spotLightMatrix,we.spotLightMap.value=N.state.spotLightMap,we.pointShadowMap.value=N.state.pointShadowMap,we.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Ve,W.uniformsList=null,Ve}function tc(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=ns.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function nc(M,D){let V=Ie.get(M);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function Mu(M,D,V,W,N){D.isScene!==!0&&(D=re),T.resetTextureUnits();let ne=D.fog,pe=W.isMeshStandardMaterial?D.environment:null,Ee=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fs,Te=(W.isMeshStandardMaterial?F:v).get(W.envMap||pe),Fe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ve=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,pt=!!V.morphAttributes.color,mt=ni;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(mt=x.toneMapping);let Wt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=Wt!==void 0?Wt.length:0,Re=Ie.get(W),Cn=d.state.lights;if(ee===!0&&(xe===!0||M!==y)){let tn=M===y&&W.id===S;te.setState(W,M,tn)}let rt=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Cn.state.version||Re.outputColorSpace!==Ee||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==Te||W.fog===!0&&Re.fog!==ne||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==te.numPlanes||Re.numIntersection!==te.numIntersection)||Re.vertexAlphas!==Fe||Re.vertexTangents!==Ve||Re.morphTargets!==we||Re.morphNormals!==nt||Re.morphColors!==pt||Re.toneMapping!==mt||Re.morphTargetsCount!==st)&&(rt=!0):(rt=!0,Re.__version=W.version);let ln=Re.currentProgram;rt===!0&&(ln=qs(W,D,N));let Di=!1,Kt=!1,ys=!1,gt=ln.getUniforms(),yn=Re.uniforms;if(Ce.useProgram(ln.program)&&(Di=!0,Kt=!0,ys=!0),W.id!==S&&(S=W.id,Kt=!0),Di||y!==M){Ce.buffers.depth.getReversed()?(ae.copy(M.projectionMatrix),pd(ae),md(ae),gt.setValue(C,"projectionMatrix",ae)):gt.setValue(C,"projectionMatrix",M.projectionMatrix),gt.setValue(C,"viewMatrix",M.matrixWorldInverse);let Xn=gt.map.cameraPosition;Xn!==void 0&&Xn.setValue(C,Be.setFromMatrixPosition(M.matrixWorld)),Ze.logarithmicDepthBuffer&&gt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Kt=!0,ys=!0)}if(N.isSkinnedMesh){gt.setOptional(C,N,"bindMatrix"),gt.setOptional(C,N,"bindMatrixInverse");let tn=N.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),gt.setValue(C,"boneTexture",tn.boneTexture,T))}N.isBatchedMesh&&(gt.setOptional(C,N,"batchingTexture"),gt.setValue(C,"batchingTexture",N._matricesTexture,T),gt.setOptional(C,N,"batchingIdTexture"),gt.setValue(C,"batchingIdTexture",N._indirectTexture,T),gt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&gt.setValue(C,"batchingColorTexture",N._colorsTexture,T));let Ms=V.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&Ue.update(N,V,ln),(Kt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,gt.setValue(C,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yn.envMap.value=Te,yn.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Kt&&(gt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Su(yn,ys),ne&&W.fog===!0&&de.refreshFogUniforms(yn,ne),de.refreshMaterialUniforms(yn,W,H,Q,d.state.transmissionRenderTarget[M.id]),ns.upload(C,tc(Re),yn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ns.upload(C,tc(Re),yn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(C,"center",N.center),gt.setValue(C,"modelViewMatrix",N.modelViewMatrix),gt.setValue(C,"normalMatrix",N.normalMatrix),gt.setValue(C,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let tn=W.uniformsGroups;for(let Xn=0,qn=tn.length;Xn<qn;Xn++){let ic=tn[Xn];L.update(ic,ln),L.bind(ic,ln)}}return ln}function Su(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function bu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,D,V){Ie.get(M.texture).__webglTexture=D,Ie.get(M.depthTexture).__webglTexture=V;let W=Ie.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){let V=Ie.get(M);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,V=0){R=M,w=D,A=V;let W=!0,N=null,ne=!1,pe=!1;if(M){let Te=Ie.get(M);if(Te.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Te.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Te.__hasExternalTextures)T.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let we=M.depthTexture;if(Te.__boundDepthTexture!==we){if(we!==null&&Ie.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}let Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(pe=!0);let Ve=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ve[D])?N=Ve[D][V]:N=Ve[D],ne=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?N=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[V]:N=Ve,I.copy(M.viewport),G.copy(M.scissor),k=M.scissorTest}else I.copy(ye).multiplyScalar(H).floor(),G.copy(ze).multiplyScalar(H).floor(),k=$e;if(Ce.bindFramebuffer(C.FRAMEBUFFER,N)&&W&&Ce.drawBuffers(M,N),Ce.viewport(I),Ce.scissor(G),Ce.setScissorTest(k),ne){let Te=Ie.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,Te.__webglTexture,V)}else if(pe){let Te=Ie.get(M.texture),Fe=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,Fe)}S=-1},this.readRenderTargetPixels=function(M,D,V,W,N,ne,pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){Ce.bindFramebuffer(C.FRAMEBUFFER,Ee);try{let Te=M.texture,Fe=Te.format,Ve=Te.type;if(!Ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-W&&V>=0&&V<=M.height-N&&C.readPixels(D,V,W,N,qe.convert(Fe),qe.convert(Ve),ne)}finally{let Te=R!==null?Ie.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(C.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,D,V,W,N,ne,pe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Ee=Ee[pe]),Ee){let Te=M.texture,Fe=Te.format,Ve=Te.type;if(!Ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-W&&V>=0&&V<=M.height-N){Ce.bindFramebuffer(C.FRAMEBUFFER,Ee);let we=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(D,V,W,N,qe.convert(Fe),qe.convert(Ve),0);let nt=R!==null?Ie.get(R).__webglFramebuffer:null;Ce.bindFramebuffer(C.FRAMEBUFFER,nt);let pt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await fd(C,pt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne),C.deleteBuffer(we),C.deleteSync(pt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,V=0){M.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);let W=Math.pow(2,-V),N=Math.floor(M.image.width*W),ne=Math.floor(M.image.height*W),pe=D!==null?D.x:0,Ee=D!==null?D.y:0;T.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,pe,Ee,N,ne),Ce.unbindTexture()},this.copyTextureToTexture=function(M,D,V=null,W=null,N=0){M.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],D=arguments[2],N=arguments[3]||0,V=null);let ne,pe,Ee,Te,Fe,Ve,we,nt,pt,mt=M.isCompressedTexture?M.mipmaps[N]:M.image;V!==null?(ne=V.max.x-V.min.x,pe=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,Te=V.min.x,Fe=V.min.y,Ve=V.isBox3?V.min.z:0):(ne=mt.width,pe=mt.height,Ee=mt.depth||1,Te=0,Fe=0,Ve=0),W!==null?(we=W.x,nt=W.y,pt=W.z):(we=0,nt=0,pt=0);let Wt=qe.convert(D.format),st=qe.convert(D.type),Re;D.isData3DTexture?(T.setTexture3D(D,0),Re=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Re=C.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Re=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Cn=C.getParameter(C.UNPACK_ROW_LENGTH),rt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ln=C.getParameter(C.UNPACK_SKIP_PIXELS),Di=C.getParameter(C.UNPACK_SKIP_ROWS),Kt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Te),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ve);let ys=M.isDataArrayTexture||M.isData3DTexture,gt=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let yn=Ie.get(M),Ms=Ie.get(D),tn=Ie.get(yn.__renderTarget),Xn=Ie.get(Ms.__renderTarget);Ce.bindFramebuffer(C.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xn.__webglFramebuffer);for(let qn=0;qn<Ee;qn++)ys&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ie.get(M).__webglTexture,N,Ve+qn),M.isDepthTexture?(gt&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ie.get(D).__webglTexture,N,pt+qn),C.blitFramebuffer(Te,Fe,ne,pe,we,nt,ne,pe,C.DEPTH_BUFFER_BIT,C.NEAREST)):gt?C.copyTexSubImage3D(Re,N,we,nt,pt+qn,Te,Fe,ne,pe):C.copyTexSubImage2D(Re,N,we,nt,pt+qn,Te,Fe,ne,pe);Ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else gt?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(Re,N,we,nt,pt,ne,pe,Ee,Wt,st,mt.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(Re,N,we,nt,pt,ne,pe,Ee,Wt,mt.data):C.texSubImage3D(Re,N,we,nt,pt,ne,pe,Ee,Wt,st,mt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,we,nt,ne,pe,Wt,st,mt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,we,nt,mt.width,mt.height,Wt,mt.data):C.texSubImage2D(C.TEXTURE_2D,N,we,nt,ne,pe,Wt,st,mt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Cn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,rt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,Di),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Kt),N===0&&D.generateMipmaps&&C.generateMipmap(Re),Ce.unbindTexture()},this.copyTextureToTexture3D=function(M,D,V=null,W=null,N=0){return M.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,M=arguments[2],D=arguments[3],N=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,V,W,N)},this.initRenderTarget=function(M){Ie.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,Ce.reset(),ft.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var zr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hr=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ul=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ft=new U,Vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},li=class extends En{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zi,ws=new U,Ki=new U,Ji=new U,$i=new Ne,As=new Ne,Ch=new yt,pr=new U,Rs=new U,mr=new U,nh=new Ne,oa=new Ne,ih=new Ne,wi=class extends Dt{constructor(e=new li){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ul(t,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new Vr(n,3,0,!1)),Zi.setAttribute("uv",new Vr(n,2,3,!1))}this.geometry=Zi,this.material=e,this.center=new Ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),Ch.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-Ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;gr(pr.set(-.5,-.5,0),Ji,o,Ki,s,r),gr(Rs.set(.5,-.5,0),Ji,o,Ki,s,r),gr(mr.set(.5,.5,0),Ji,o,Ki,s,r),nh.set(0,0),oa.set(1,0),ih.set(1,1);let a=e.ray.intersectTriangle(pr,Rs,mr,!1,ws);if(a===null&&(gr(Rs.set(-.5,.5,0),Ji,o,Ki,s,r),oa.set(0,1),a=e.ray.intersectTriangle(pr,mr,Rs,!1,ws),a===null))return;let l=e.ray.origin.distanceTo(ws);l<e.near||l>e.far||t.push({distance:l,point:ws.clone(),uv:ei.getInterpolation(ws,pr,Rs,mr,nh,oa,ih,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function gr(i,e,t,n,s,r){$i.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(As.x=r*$i.x-s*$i.y,As.y=s*$i.x+r*$i.y):As.copy($i),i.copy(e),i.x+=As.x,i.y+=As.y,i.applyMatrix4(Ch)}var Ai=class extends En{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sh=new yt,dl=new Ir,_r=new ls,xr=new U,hs=class extends Dt{constructor(e=new At,t=new Ai){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,e.ray.intersectsSphere(_r)===!1)return;sh.copy(s).invert(),dl.copy(e.ray).applyMatrix4(sh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);xr.fromBufferAttribute(h,m),rh(xr,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)xr.fromBufferAttribute(h,g),rh(xr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rh(i,e,t,n,s,r,o){let a=dl.distanceSqToPoint(i);if(a<t){let l=new U;dl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gr=class extends Qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new U,u=new Ne;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ct=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,_=[],m=n/2,d=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function E(){let x=new U,P=new U,w=0,A=(t-e)/n;for(let R=0;R<=r;R++){let S=[],y=R/r,I=y*(t-e)+e;for(let G=0;G<=s;G++){let k=G/s,B=k*l+a,X=Math.sin(B),z=Math.cos(B);P.x=I*X,P.y=-y*n+m,P.z=I*z,h.push(P.x,P.y,P.z),x.set(X,A,z).normalize(),f.push(x.x,x.y,x.z),p.push(k,1-y),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let y=_[S][R],I=_[S+1][R],G=_[S+1][R+1],k=_[S][R+1];(e>0||S!==0)&&(u.push(y,I,k),w+=3),(t>0||S!==r-1)&&(u.push(I,G,k),w+=3)}c.addGroup(d,w,0),d+=w}function b(x){let P=g,w=new Ne,A=new U,R=0,S=x===!0?e:t,y=x===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let I=g;for(let G=0;G<=s;G++){let B=G/s*l+a,X=Math.cos(B),z=Math.sin(B);A.x=S*z,A.y=m*y,A.z=S*X,h.push(A.x,A.y,A.z),f.push(0,y,0),w.x=X*.5+.5,w.y=z*.5*y+.5,p.push(w.x,w.y),g++}for(let G=0;G<s;G++){let k=P+G,B=I+G;x===!0?u.push(B,B+1,k):u.push(B+1,B,k),R+=3}c.addGroup(d,R,x===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wr=class i extends ct{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Us=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let b=new U,x=new U,P=new U;for(let w=0;w<t.length;w+=3)p(t[w+0],b),p(t[w+1],x),p(t[w+2],P),l(b,x,P,E)}function l(E,b,x,P){let w=P+1,A=[];for(let R=0;R<=w;R++){A[R]=[];let S=E.clone().lerp(x,R/w),y=b.clone().lerp(x,R/w),I=w-R;for(let G=0;G<=I;G++)G===0&&R===w?A[R][G]=S:A[R][G]=S.clone().lerp(y,G/I)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){let y=Math.floor(S/2);S%2===0?(f(A[R][y+1]),f(A[R+1][y]),f(A[R][y])):(f(A[R][y+1]),f(A[R+1][y+1]),f(A[R+1][y]))}}function c(E){let b=new U;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(E),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function u(){let E=new U;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];let x=m(E)/2/Math.PI+.5,P=d(E)/Math.PI+.5;o.push(x,1-P)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){let b=o[E+0],x=o[E+2],P=o[E+4],w=Math.max(b,x,P),A=Math.min(b,x,P);w>.9&&A<.1&&(b<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),P<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,b){let x=E*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){let E=new U,b=new U,x=new U,P=new U,w=new Ne,A=new Ne,R=new Ne;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),P.copy(E).add(b).add(x).divideScalar(3);let I=m(P);_(w,y+0,E,I),_(A,y+2,b,I),_(R,y+4,x,I)}}function _(E,b,x,P){P<0&&E.x===1&&(o[b]=E.x-1),x.x===0&&x.z===0&&(o[b]=P/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},ci=class i extends Us{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Xr=class i extends Us{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},qr=class i extends Us{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Yr=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new U,g=new Ne;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let d=0;d<n;d++){let E=d+m,b=E,x=E+n+1,P=E+n+2,w=E+1;a.push(b,x,w),a.push(x,P,w)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new U,f=new U,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){let E=[],b=d/n,x=0;d===0&&o===0?x=.5/t:d===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){let w=P/t;h.x=-e*Math.cos(s+w*r)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(s+w*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-b),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let b=u[d][E+1],x=u[d][E],P=u[d+1][E],w=u[d+1][E+1];(d!==0||o>0)&&p.push(b,x,w),(d!==n-1||l<Math.PI)&&p.push(x,P,w)}this.setIndex(p),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sn=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new U,h=new U,f=new U;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let _=g/s*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Zr=class extends En{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Mt=class extends En{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dl,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function vr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ds=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends ds{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ac,endingEnd:ac}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case lc:r=e,a=2*t-n;break;case cc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lc:o=e,l=2*n-t;break;case cc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let P=0;P!==a;++P)r[P]=d*o[u+P]+E*o[c+P]+b*o[l+P]+x*o[h+P];return r}},pl=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},ml=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vr(t,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vr(e.times,Array),values:vr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Tr:t=this.InterpolantFactoryMethodDiscrete;break;case qa:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&h0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Po,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=qa;var Ri=class extends gn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Tr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends gn{};gl.prototype.ValueTypeName="color";var _l=class extends gn{};_l.prototype.ValueTypeName="number";var xl=class extends ds{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},Kr=class extends gn{InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends gn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Tr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends gn{};vl.prototype.ValueTypeName="vector";var yl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},u0=new yl,Ml=class{constructor(e){this.manager=e!==void 0?e:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$r=class extends Jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},aa=new yt,oh=new U,ah=new U,Sl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ah),t.updateMatrixWorld(),aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bl=class extends Sl{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qr=class extends Jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new bl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ul="\\[\\]\\.:\\/",d0=new RegExp("["+Ul+"]","g"),Ol="[^"+Ul+"]",f0="[^"+Ul.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",Ol),m0=/(WCOD+)?/.source.replace("WCOD",f0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),x0=new RegExp("^"+p0+m0+g0+_0+"$"),v0=["material","materials","bones","map"],El=class{constructor(e,t,n){let s=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(e){let t=x0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);v0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=El;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);var no={revisions:{stock:3,claims:2,leaderboard:2},ranks:{hero:{minScore:1e3,rank:"ECO HERO"},guardian:{minScore:2500,rank:"ECO GUARDIAN"}},rewards:{legend:{minScore:7e3,stock:5,rank:"ECO LEGEND",prize:"STICKER LIMITED",fullPrize:"STICKER LIMITED",badge:"LIMITED"},champion:{minScore:11e3,stock:1,rank:"ECO CHAMPION",prize:"STIKER JUARA",fullPrize:"STIKER JUARA",badge:"STIKER JUARA"}}};var oe={PLASVORA_URL:"",ADMIN_PIN:"1234",BRAND:"PLASVORA",TAGLINE:"Recycle \u2022 Reuse \u2022 Reimagine",LIVES:3,WORLD:{GRAVITY:50,JUMP_V:19,FALL_MULT:1.85,BASE_SPEED:9,DISTANCE_PER_UNIT:2.8,SPAWN_X:28,DESPAWN_X:-12,JUMP_BUFFER:.12},PHASES:[{id:1,name:"ECO START",minDist:0,maxDist:500,speedMin:1,speedMax:1.1,gapMin:1.52,gapMax:1.76,comboChance:0,maxChain:1,obsTierWeights:{easy:92,medium:8,hard:0},slotWeights:{loot:44,obstacle:56,power:0},lootWeights:{normal:82,recycled:14,rare:3.5,gold:.5},bg:267538,hemi:10479871,edge:3800992},{id:2,name:"ECO RUN",minDist:500,maxDist:1500,speedMin:1.1,speedMax:1.25,gapMin:1.32,gapMax:1.54,comboChance:.28,maxChain:2,obsTierWeights:{easy:54,medium:40,hard:6},slotWeights:{loot:34,obstacle:58,power:8},lootWeights:{normal:74,recycled:18,rare:6.5,gold:1.5},bg:268824,hemi:10023160,edge:2945192},{id:3,name:"ECO CHALLENGE",minDist:1500,maxDist:3e3,speedMin:1.25,speedMax:1.45,gapMin:1.12,gapMax:1.32,comboChance:.48,maxChain:2,obsTierWeights:{easy:26,medium:52,hard:22},slotWeights:{loot:29,obstacle:63,power:8},lootWeights:{normal:68,recycled:20,rare:9.5,gold:2.5},bg:398882,hemi:9230591,edge:1692927},{id:4,name:"ECO DANGER",minDist:3e3,maxDist:5e3,speedMin:1.45,speedMax:1.65,gapMin:.98,gapMax:1.16,comboChance:.62,maxChain:3,obsTierWeights:{easy:12,medium:42,hard:46},slotWeights:{loot:26,obstacle:66,power:8},lootWeights:{normal:62,recycled:22,rare:12.5,gold:3.5},bg:1183778,hemi:12368127,edge:16757575},{id:5,name:"ECO EXTREME",minDist:5e3,maxDist:7500,speedMin:1.65,speedMax:1.8,gapMin:.88,gapMax:1.04,comboChance:.72,maxChain:3,obsTierWeights:{easy:6,medium:32,hard:62},slotWeights:{loot:24,obstacle:68,power:8},lootWeights:{normal:56,recycled:24,rare:15,gold:5},bg:1706774,hemi:16757960,edge:16732120}],SPEED:{MIN:1,MAX:1.8},SCORE:{normal:50,recycled:100,rare:150,gold:250,perMeter:.06,power:20,speedBoostBonus:50,smash:20,boostMult:1.25},COMBO:{thresholds:[0,5,10,15,20,25,30,40],mult:[1,1.08,1.16,1.26,1.38,1.52,1.68,1.9]},LOOT:{INTRO_SLOTS:3,POWER_MIN_DIST:460,POWER_CD_MIN:13.5,POWER_CD_MAX:21.5,POWER_WEIGHTS:{boost:36,magnet:34,shield:19,speed:11},POWER_SAFE_BEFORE:.7,POWER_SAFE_AFTER:.78,MIN_RECOVERY_AFTER_COMBO:1.18},BOSS:{FIRST_MIN_DIST:2500,FIRST_MAX_DIST:4e3,SECOND_MIN_DIST:5e3,SECOND_MAX_DIST:7e3,NEXT_GAP_MIN:2300,NEXT_GAP_MAX:3500,SKIP_CHANCE:.14,WARN:2.3,MAX_TOTAL_SPEED_MULT:2.02,VARIANTS:{trash_giant:{id:"trash_giant",name:"ECO TRASH GIANT",style:"heavy",bg:2361613,hemi:16749722,edge:16731501,color:16734815},plastic_monster:{id:"plastic_monster",name:"PLASTIC MONSTER",style:"swarm",bg:1771302,hemi:15113983,edge:16732120,color:16732120},waste_machine:{id:"waste_machine",name:"WASTE MACHINE",style:"industrial",bg:2232838,hemi:16760962,edge:16751918,color:16751918}},DIFFICULTIES:{easy:{id:"easy",label:"EASY",timeMin:9,timeMax:11,speedMult:1.07,gapMult:.9,comboChance:.35,bonus:200,comboGuard:4.5,rareDrops:1,goldChance:.15,grantShield:!1},normal:{id:"normal",label:"NORMAL",timeMin:11,timeMax:14,speedMult:1.13,gapMult:.83,comboChance:.55,bonus:275,comboGuard:5.5,rareDrops:1,goldChance:.35,grantShield:!1},hard:{id:"hard",label:"HARD",timeMin:14,timeMax:17,speedMult:1.19,gapMult:.77,comboChance:.72,bonus:375,comboGuard:6.5,rareDrops:2,goldChance:.65,grantShield:!1},ultimate:{id:"ultimate",label:"ULTIMATE",timeMin:16,timeMax:19,speedMult:1.23,gapMult:.73,comboChance:.84,bonus:500,comboGuard:8,rareDrops:2,goldChance:1,grantShield:!0}}},POWER:{boost:7.5,magnet:8,speed:4.2},OBSTACLES:{cone:{need:"jump",tier:"easy",size:"small",hitW:1.05,hitH:.9,hitY:.45,hitDx:0,warning:!1,name:"Kerucut kecil"},bin:{need:"jump",tier:"easy",size:"small",hitW:1.3,hitH:1.2,hitY:.6,hitDx:0,warning:!1,name:"Tong sampah"},box:{need:"jump",tier:"easy",size:"medium",hitW:1.75,hitH:1.55,hitY:.78,hitDx:0,warning:!1,name:"Kardus"},hole:{need:"jump",tier:"medium",size:"wide",hitW:2.5,hitH:.5,hitY:0,hitDx:0,warning:!1,name:"Lubang jalan"},barrier:{need:"jump",tier:"medium",size:"medium",hitW:2.05,hitH:1.15,hitY:.58,hitDx:0,warning:!1,name:"Road barrier"},pipe:{need:"slide",tier:"medium",size:"wide",hitW:3,hitH:.72,hitY:1.54,hitDx:0,warning:!1,name:"Pipa rendah"},trashPile:{need:"jump",tier:"medium",size:"large",hitW:2.35,hitH:1.52,hitY:.76,hitDx:0,warning:!1,name:"Tumpukan sampah"},lowBeam:{need:"slide",tier:"hard",size:"wide",hitW:2.8,hitH:1.55,hitY:1.98,hitDx:0,warning:!0,name:"Palang rendah"},dumpster:{need:"jump",tier:"hard",size:"tall",hitW:2.2,hitH:2,hitY:1,hitDx:0,warning:!0,name:"Kontainer tinggi"},car:{need:"jump",tier:"hard",size:"long",hitW:2.75,hitH:1.38,hitY:.69,hitDx:0,warning:!0,name:"Mobil bekas"}},REVISIONS:no.revisions,PROGRESS_RANKS:no.ranks,REWARDS:no.rewards,RANK_BASE:{id:"rookie",rank:"ECO ROOKIE",minScore:0},REWARD_CODE_PREFIX:"PLV"},_n=oe.OBSTACLES,wn=[{id:oe.RANK_BASE.id,name:oe.RANK_BASE.rank,minScore:0,prize:null,fullPrize:null,badge:""},...Object.entries(oe.PROGRESS_RANKS||{}).map(([i,e])=>({id:i,name:e.rank,minScore:e.minScore,prize:null,fullPrize:null,badge:""})),...Object.entries(oe.REWARDS).map(([i,e])=>({id:i,name:e.rank,minScore:e.minScore,prize:e.prize,fullPrize:e.fullPrize||e.prize,badge:e.badge||""}))].sort((i,e)=>i.minScore-e.minScore);function Bs(i){let e=wn[0];for(let t of wn)i>=t.minScore&&(e=t);return e}function Ih(i){let e=0;for(let r=0;r<wn.length;r++)i>=wn[r].minScore&&(e=r);let t=wn[e],n=wn[e+1]||null;if(!n)return{cur:t,next:null,pct:1};let s=Math.max(1,n.minScore-t.minScore);return{cur:t,next:n,pct:Math.max(0,Math.min(1,(i-t.minScore)/s))}}function Vn(i){let e=oe.PHASES;for(let t=e.length-1;t>=0;t--)if(i>=e[t].minDist)return e[t];return e[0]}function Ph(i){let e=Vn(i),t=Math.max(1,e.maxDist-e.minDist),n=Math.max(0,Math.min(1,(i-e.minDist)/t)),s=e.id===1?n*n*(3-2*n):n;return Math.min(oe.SPEED.MAX,e.speedMin+(e.speedMax-e.speedMin)*s)}var Oe={MENU:"MENU",HOW_TO_PLAY:"HOW_TO_PLAY",COUNTDOWN:"COUNTDOWN",PLAYING:"PLAYING",PAUSED:"PAUSED",BOSS:"BOSS",GAME_OVER:"GAME_OVER",REWARD:"REWARD",LEADERBOARD:"LEADERBOARD",SETTINGS:"SETTINGS"};var Ii=(i,e,t)=>i<e?e:i>t?t:i,Lh=(i,e,t)=>i+(e-i)*t;function y0(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var jt=class{constructor(e){this.seed=e>>>0,this.f=y0(this.seed)}next(){return this.f()}range(e,t){return e+(t-e)*this.f()}int(e,t){return Math.floor(e+(t-e+1)*this.f())}chance(e){return this.f()<e}pick(e){return e[Math.floor(this.f()*e.length)]}weighted(e){let t=0;for(let s in e)t+=e[s];let n=this.f()*t;for(let s in e)if(n-=e[s],n<0)return s;return Object.keys(e)[0]}},Dh=()=>(Date.now()*2654435761^Math.floor(Math.random()*4294967296))>>>0,Nh=i=>(i>>>0).toString(36).toUpperCase().slice(-4).padStart(4,"0"),xn=i=>Math.floor(i).toLocaleString("id-ID");var io=i=>(i/1e3).toFixed(2);function vn(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Gr(s);return r.colorSpace=Xt,n.repeat&&(r.wrapS=r.wrapT=Ls),r.anisotropy=4,r}function gs(i,e,t,n,s,r){r=Math.min(r,n/2,s/2),i.beginPath(),i.moveTo(e+r,t),i.lineTo(e+n-r,t),i.quadraticCurveTo(e+n,t,e+n,t+r),i.lineTo(e+n,t+s-r),i.quadraticCurveTo(e+n,t+s,e+n-r,t+s),i.lineTo(e+r,t+s),i.quadraticCurveTo(e,t+s,e,t+s-r),i.lineTo(e,t+r),i.quadraticCurveTo(e,t,e+r,t),i.closePath()}var wt={emerald:2080634,emeraldDark:1010504,neon:3800992,cyan:1692927,gold:16765503,danger:16731501,navy:402204,amber:16751918,magenta:16732120},Uh={},hi={},_e=(i,e)=>Uh[i]||(Uh[i]=e());function We(i,e={}){let t=i+JSON.stringify(e);return hi[t]||(hi[t]=new Mt({color:i,flatShading:!0,...e}))}var se=(i,e)=>new je(i,e),so=null;function ro(){if(so)return so;let i=s=>vn(256,96,(r,o,a)=>{r.fillStyle="#021a12",gs(r,0,0,o,a,22),r.fill(),r.fillStyle="#19d4ff",r.strokeStyle="#19d4ff",r.lineCap="round",r.lineWidth=9,s==="hit"?(r.strokeStyle="#ff4d6d",[[.56,.5],[.82,.5]].forEach(([l,c])=>{let u=o*l,h=a*c;r.beginPath(),r.moveTo(u-14,h-14),r.lineTo(u+14,h+14),r.moveTo(u+14,h-14),r.lineTo(u-14,h+14),r.stroke()})):s==="happy"?(r.strokeStyle="#ffd23f",[[.56,.58],[.82,.58]].forEach(([l,c])=>{r.beginPath(),r.arc(o*l,a*c,15,Math.PI*1.1,Math.PI*1.9),r.stroke()})):[[.54,.5],[.8,.5]].forEach(([l,c])=>{gs(r,o*l-12,a*c-22,24,44,9),r.fill()})}),e=vn(128,128,(s,r,o)=>{s.fillStyle="#eafff6",s.font='900 104px "Segoe UI Symbol","Noto Sans Symbols2","DejaVu Sans",Arial,sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("\u267B",r/2,o/2+6)}),t=(s,r)=>vn(128,128,(o,a,l)=>{o.fillStyle=s,o.fillRect(0,0,a,l),o.fillStyle=r;for(let c=-2;c<6;c++)o.beginPath(),o.moveTo(c*32,0),o.lineTo(c*32+16,0),o.lineTo(c*32+48,l),o.lineTo(c*32+32,l),o.fill()},{repeat:!0}),n=s=>vn(64,64,(r,o,a)=>{let l=r.createRadialGradient(32,32,2,32,32,30);l.addColorStop(0,s),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,o,a)});return so={visor:i("normal"),visorHit:i("hit"),visorHappy:i("happy"),recycle:e,redStripes:t("#e8e8e8","#e0334f"),orangeStripes:t("#1c1c1c","#ffb02e"),glowGreen:n("rgba(57,255,160,.7)"),glowEmerald:n("rgba(44,240,143,.88)"),glowCyan:n("rgba(25,212,255,.85)"),glowGold:n("rgba(255,210,63,.95)")},so}function Fh(){let i=ro(),e=new lt,t=new Mt({color:wt.emerald,flatShading:!0}),n=new Mt({color:wt.emeraldDark,flatShading:!0}),s=We(1519658),r=new lt;r.position.y=.45,e.add(r);let o=se(_e("rb-body",()=>new ct(.52,.42,.9,10)),t);o.position.y=.45,r.add(o);let a=se(_e("rb-trim",()=>new sn(.47,.035,6,16)),new Ke({color:wt.neon}));a.rotation.x=Math.PI/2,a.position.y=.16,r.add(a);let l=se(_e("rb-decal",()=>new Ht(.5,.5)),new Ke({map:i.recycle,transparent:!0}));l.position.set(0,.52,.5),r.add(l);let c=new lt;c.position.y=.92,r.add(c);let u=se(_e("rb-head",()=>new ke(1.04,.5,.88)),n);u.position.y=.26,c.add(u);let h=se(_e("rb-handle",()=>new ke(.36,.09,.22)),s);h.position.y=.55,c.add(h);let f=new Ke({map:i.visor,transparent:!0}),p=se(_e("rb-visor",()=>new Ht(.8,.3)),f);p.position.set(0,.26,.445),c.add(p);let g=se(_e("rb-visor",()=>new Ht(.8,.3)),f);g.position.set(.525,.26,0),g.rotation.y=Math.PI/2,c.add(g);let _=se(_e("rb-ant",()=>new ct(.02,.02,.3,5)),s);_.position.set(-.28,.66,0),c.add(_);let m=se(_e("rb-led",()=>new Zt(.07,8,6)),new Ke({color:16732120}));m.position.set(-.28,.84,0),c.add(m);let d=B=>{let X=new lt;X.position.set(0,.72,B);let z=se(_e("rb-arm",()=>new ct(.075,.065,.46,6)),s);z.position.y=-.23,X.add(z);let Q=se(_e("rb-hand",()=>new Zt(.1,8,6)),We(wt.neon));return Q.position.y=-.5,X.add(Q),r.add(X),X},E=d(.6),b=d(-.6),x=B=>{let X=new lt;X.position.set(0,.45,B);let z=se(_e("rb-leg",()=>new ct(.09,.08,.28,6)),s);z.position.y=-.14,X.add(z);let Q=se(_e("rb-boot",()=>new ke(.5,.17,.3)),We(wt.neon,{emissive:678456}));return Q.position.set(.08,-.36,0),X.add(Q),e.add(X),X},P=x(.24),w=x(-.24),A=se(_e("rb-shield",()=>new Zt(1.3,16,12)),new Ke({color:wt.cyan,transparent:!0,opacity:.22,depthWrite:!1}));A.position.y=.95,A.visible=!1,e.add(A);let R=se(_e("rb-magnet",()=>new sn(1.15,.04,6,28)),new Ke({color:16732120,transparent:!0,opacity:.8}));R.position.y=.95,R.visible=!1,e.add(R);let S=se(_e("rb-shadow",()=>new us(.8,16)),new Ke({color:0,transparent:!0,opacity:.4,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.y=.03;let y=[t,n],I="normal";function G(B){B!==I&&(I=B,f.map=B==="hit"?i.visorHit:B==="happy"?i.visorHappy:i.visor,f.needsUpdate=!0)}function k(B,X,z){let Q=B*13,H=0,ie=0,le=0,ye=0,ze=0,$e=0,Y=0,ee=.45,xe=1;switch(X){case"run":H=Math.sin(Q)*.85,ie=-H,le=-H*.9,ye=H*.9,ze=Math.abs(Math.sin(Q))*.07,$e=-.1;break;case"jump":H=-.6,ie=.45,le=2.5,ye=2,$e=-.14,xe=1.05;break;case"fall":H=.5,ie=-.3,le=1.3,ye=.9,$e=.05;break;case"slide":Y=1.2,ee=.38,H=1.15,ie=1.3,le=-1.3,ye=-1.1;break;case"hit":Y=.4,$e=0,le=2.6+Math.sin(B*40)*.3,ye=2.3,H=.3,ie=-.3;break;default:xe=1+Math.sin(B*3)*.015,le=Math.sin(B*2)*.1,ye=-le}P.rotation.z=H,w.rotation.z=ie,E.rotation.z=le,b.rotation.z=ye,r.position.y=ee+ze,r.rotation.z=X==="slide"||X==="hit"?Y:$e,r.scale.set(1,xe,1),_.rotation.z=Math.sin(B*9)*(X==="run"?.25:.05),G(X==="hit"?"hit":z.happy?"happy":"normal");let ae=z.boost?7033344:z.speed?8008192:z.flash?10027008:0;for(let be of y)be.emissive.setHex(ae);if(A.visible=!!z.shield,z.shield){let be=1+Math.sin(B*6)*.04;A.scale.set(be,be,be)}if(R.visible=!!z.magnet,z.magnet){R.rotation.y=B*3,R.rotation.x=Math.PI/2+Math.sin(B*2)*.3;let be=1+Math.sin(B*8)*.06;R.scale.set(be,be,be)}}return{root:e,shadow:S,update:k}}var Oh={normal:{color:13628927,emissive:810558,ei:.65,ring:null,scale:.96,glow:"glowGreen",glowOp:.42,glowScale:1.65},recycled:{color:7208888,emissive:884039,ei:.92,ring:wt.neon,scale:1.05,glow:"glowEmerald",glowOp:.65,glowScale:1.9},rare:{color:7531007,emissive:686745,ei:1.05,ring:wt.cyan,scale:1.14,glow:"glowCyan",glowOp:.85,glowScale:2.15},gold:{color:16765503,emissive:10119680,ei:1.15,ring:wt.gold,scale:1.28,glow:"glowGold",glowOp:.95,glowScale:2.6}};function M0(i,e){let t=new lt;if(i===0){let n=se(_e("l-bot",()=>new ct(.27,.27,.78,10)),e);n.position.y=-.05,t.add(n);let s=se(_e("l-botn",()=>new ct(.11,.24,.26,10)),e);s.position.y=.47,t.add(s);let r=se(_e("l-botc",()=>new ct(.12,.12,.12,8)),We(16742959));r.position.y=.66,t.add(r)}else if(i===1){let n=se(_e("l-cup",()=>new ct(.34,.24,.66,10)),e);t.add(n);let s=se(_e("l-cupl",()=>new ct(.37,.37,.06,10)),We(16777215));s.position.y=.35,t.add(s);let r=se(_e("l-cups",()=>new ct(.025,.025,.4,5)),We(16742959));r.position.set(.06,.55,0),r.rotation.z=-.3,t.add(r)}else{let n=se(_e("l-bag",()=>new ke(.62,.7,.3)),e);t.add(n);let s=se(_e("l-bagh",()=>new sn(.13,.03,5,10,Math.PI)),We(16777215));s.position.set(-.17,.35,0),t.add(s);let r=s.clone();r.position.x=.17,t.add(r)}return t}function kh(i,e){let t=ro(),n=Oh[i]||Oh.normal,s=new lt,r=i==="gold"?new Zr({color:n.color,emissive:n.emissive,emissiveIntensity:n.ei,metalness:.72,roughness:.32,flatShading:!0}):new Mt({color:n.color,emissive:n.emissive,emissiveIntensity:n.ei,flatShading:!0,transparent:!0,opacity:.93}),o=M0(e,r);o.scale.setScalar(n.scale),s.add(o);let a=new wi(new li({map:t[n.glow],transparent:!0,depthWrite:!1,blending:ri,opacity:n.glowOp}));if(a.scale.setScalar(n.glowScale),a.position.z=-.3,s.add(a),n.ring){let l=i==="gold"?.84:i==="rare"?.7:.62,c=se(_e("l-ring"+i,()=>new sn(l,.04,6,24)),new Ke({color:n.ring}));c.userData.ring=!0,s.add(c)}return s.userData={shape:o,tier:i},s}var S0={boost:"#ffd23f",magnet:"#ff4fd8",shield:"#19d4ff",speed:"#ff7a2f"};function b0(i){return vn(128,128,e=>{e.fillStyle="#06231c",e.beginPath(),e.arc(64,64,58,0,6.2832),e.fill();let t=e.createRadialGradient(64,64,6,64,64,56);if(t.addColorStop(0,S0[i]),t.addColorStop(1,"rgba(0,0,0,0)"),e.globalAlpha=.45,e.fillStyle=t,e.beginPath(),e.arc(64,64,56,0,6.2832),e.fill(),e.globalAlpha=1,e.strokeStyle="#19d4ff",e.lineWidth=6,e.beginPath(),e.arc(64,64,55,0,6.2832),e.stroke(),e.fillStyle="#ffffff",e.strokeStyle="#ffffff",e.lineJoin="round",e.lineCap="round",i==="boost")e.beginPath(),e.moveTo(72,24),e.lineTo(42,70),e.lineTo(62,70),e.lineTo(54,104),e.lineTo(88,56),e.lineTo(68,56),e.closePath(),e.fill();else if(i==="magnet")e.lineWidth=16,e.beginPath(),e.arc(64,62,24,Math.PI,0),e.lineTo(88,92),e.moveTo(40,62),e.lineTo(40,92),e.stroke(),e.fillStyle="#ff4d6d",e.fillRect(32,86,16,12),e.fillRect(80,86,16,12);else if(i==="shield")e.beginPath(),e.moveTo(64,24),e.lineTo(94,36),e.lineTo(90,70),e.quadraticCurveTo(82,92,64,102),e.quadraticCurveTo(46,92,38,70),e.lineTo(34,36),e.closePath(),e.fill(),e.strokeStyle="#0a5d78",e.lineWidth=8,e.beginPath(),e.moveTo(50,62),e.lineTo(60,74),e.lineTo(80,50),e.stroke();else for(let n=0;n<2;n++)e.beginPath(),e.moveTo(34+n*24,34),e.lineTo(58+n*24,64),e.lineTo(34+n*24,94),e.lineTo(46+n*24,94),e.lineTo(70+n*24,64),e.lineTo(46+n*24,34),e.closePath(),e.fill()})}var Bh={};function zh(i){let e=new lt,t=Bh[i]||(Bh[i]=b0(i)),n=new wi(new li({map:t,transparent:!0}));n.scale.setScalar(1.7),e.add(n);let s=se(_e("p-ring",()=>new sn(1,.04,6,28)),new Ke({color:wt.cyan}));return s.userData.ring=!0,e.add(s),e}function Hh(i){let e=ro(),t=new lt,n=null;if(i==="cone")[-.28,.32].forEach((s,r)=>{let o=se(_e("o-coneb",()=>new ke(.54,.08,.54)),We(2304813));o.position.set(s,.04,r?-.25:.25),t.add(o);let a=se(_e("o-cone",()=>new Wr(.24,.88,8)),We(16739115,{emissive:3871232}));a.position.set(s,.48,r?-.25:.25),t.add(a);let l=se(_e("o-cones",()=>new ct(.11,.16,.18,8)),We(16056313));l.position.set(s,.56,r?-.25:.25),t.add(l)});else if(i==="bin"){let s=se(_e("o-bin",()=>new ct(.62,.5,1.1,10)),We(3964060));s.position.y=.62,s.rotation.z=.12,t.add(s);let r=se(_e("o-binl",()=>new ct(.7,.7,.12,10)),We(2909314));r.position.set(-.55,.15,0),r.rotation.z=-.5,t.add(r);let o=se(_e("o-binb",()=>new ct(.585,.55,.22,10)),We(14693199,{emissive:4852244}));o.position.set(.07,.6,0),o.rotation.z=.12,t.add(o)}else if(i==="box"){let s=se(_e("o-box",()=>new ke(1.9,1.65,1.6)),We(12158546));s.position.y=.825,t.add(s);let r=se(_e("o-boxt",()=>new ke(.32,1.67,1.62)),We(14693199,{emissive:4852244}));r.position.y=.825,t.add(r);let o=se(_e("o-boxtop",()=>new ke(1.94,.1,1.64)),We(13870444));o.position.y=1.65,t.add(o)}else if(i==="barrier"){let s=hi.redBar||(hi.redBar=new Mt({map:e.redStripes,flatShading:!0})),r=se(_e("o-bar",()=>new ke(2.25,.7,.5)),s);r.position.y=.85,t.add(r),[-.85,.85].forEach(o=>{let a=se(_e("o-barl",()=>new ke(.18,.7,.4)),We(5594467));a.position.set(o,.35,0),t.add(a)}),n=se(_e("o-barlamp",()=>new Zt(.14,8,6)),new Ke({color:16726843})),n.position.set(-.95,1.3,0),t.add(n)}else if(i==="trashPile"){let s=We(2635828),r=We(3886406),o=We(10383942),a=se(_e("o-tp1",()=>new ci(.75,0)),s);a.position.set(-.62,.62,.15),a.scale.set(1.1,.9,1),t.add(a);let l=se(_e("o-tp2",()=>new ci(.78,0)),r);l.position.set(.42,.7,-.1),l.scale.set(1.15,1.05,1),t.add(l);let c=se(_e("o-tp3",()=>new ci(.62,0)),We(2054470));c.position.set(-.08,1.24,.05),t.add(c);let u=se(_e("o-tpc",()=>new ke(.95,.75,.95)),o);u.position.set(.82,.42,.25),u.rotation.z=-.18,t.add(u);let h=se(_e("o-tpw",()=>new sn(.22,.05,6,12)),new Ke({color:16751918}));h.position.set(-.1,1.65,.35),t.add(h)}else if(i==="dumpster"){let s=se(_e("o-dmp",()=>new ke(2.3,1.9,1.65)),We(1920318));s.position.y=1.02,t.add(s);let r=hi.orgBar||(hi.orgBar=new Mt({map:e.orangeStripes,flatShading:!0})),o=se(_e("o-dmps",()=>new ke(2.34,.36,1.68)),r);o.position.y=1.62,t.add(o);let a=se(_e("o-dmpl",()=>new ke(2.42,.18,1.76)),We(1058850));a.position.set(0,2.04,0),a.rotation.z=.05,t.add(a),[-.85,.85].forEach(l=>{let c=se(_e("o-dmpw",()=>new ct(.18,.18,1.6,8)),We(1119512));c.rotation.x=Math.PI/2,c.position.set(l,.18,0),t.add(c)}),n=se(_e("o-beacon",()=>new Zt(.18,8,6)),new Ke({color:16726876})),n.position.set(-.95,2.28,.4),t.add(n)}else if(i==="car"){let s=se(_e("o-car",()=>new ke(3.05,.75,1.5)),We(6967234));s.position.y=.6,t.add(s);let r=se(_e("o-carc",()=>new ke(1.6,.6,1.4)),We(8018648));r.position.set(-.1,1.2,0),t.add(r);let o=se(_e("o-carw",()=>new ke(1.45,.4,1.44)),We(10476799,{emissive:1722982}));o.position.set(-.1,1.22,0),t.add(o),n=se(_e("o-cart",()=>new ke(.1,.22,1.25)),new Ke({color:16726843})),n.position.set(-1.56,.76,0),t.add(n),[-.95,.95].forEach(a=>{[.76,-.76].forEach(l=>{let c=se(_e("o-carwh",()=>new ct(.32,.32,.22,10)),We(1382684));c.rotation.x=Math.PI/2,c.position.set(a,.32,l),t.add(c)})})}else if(i==="hole"){let s=se(_e("o-hole",()=>new ke(2.7,.06,5.4)),new Ke({color:133127}));s.position.set(0,.04,1.2),t.add(s);let r=se(_e("o-holer",()=>new ke(2.8,.05,.12)),new Ke({color:wt.danger}));r.position.set(0,.08,-1.45),t.add(r);let o=r.clone();o.position.z=3.85,t.add(o),[-1.45,1.45].forEach(a=>{let l=se(_e("o-holep",()=>new ct(.06,.06,.9,5)),We(16756782));l.position.set(a,.45,-1.2),t.add(l);let c=se(_e("o-holel",()=>new Zt(.13,8,6)),new Ke({color:16726843}));c.position.set(a,.95,-1.2),t.add(c)})}else if(i==="pipe"){let s=se(_e("o-pipe",()=>new ct(.4,.4,3.2,12)),We(10465984));s.rotation.z=Math.PI/2,s.position.y=1.54,t.add(s),[-1.05,1.05].forEach(r=>{let o=se(_e("o-pipeb",()=>new ct(.43,.43,.3,12)),We(14693199,{emissive:4852244}));o.rotation.z=Math.PI/2,o.position.set(r,1.54,0),t.add(o)}),[-1.45,1.45].forEach(r=>{let o=se(_e("o-pipes",()=>new ke(.22,9,.22)),We(6056822));o.position.set(r,6.4,0),t.add(o)})}else if(i==="lowBeam"){let s=hi.orgBar||(hi.orgBar=new Mt({map:e.orangeStripes,flatShading:!0})),r=se(_e("o-lbeam",()=>new ke(3,1.45,.65)),We(2629162));r.position.y=2.02,t.add(r);let o=se(_e("o-lbeams",()=>new ke(3.04,.36,.7)),s);o.position.y=1.48,t.add(o);let a=se(_e("o-lbeaml",()=>new ke(2.9,.08,.72)),new Ke({color:wt.danger}));a.position.y=1.24,t.add(a),[-1.35,1.35].forEach(l=>{let c=se(_e("o-lbeamp",()=>new ke(.24,8,.24)),We(4871520));c.position.set(l,6.5,0),t.add(c)}),n=se(_e("o-lbeamb",()=>new Zt(.2,8,6)),new Ke({color:16726876})),n.position.set(-1.35,1.45,.45),t.add(n)}return t.userData.beacon=n,t}function Vh(i){let e=ro(),t=new lt;t.visible=!1,t.position.set(32,3.8,-.6),i.add(t);let n=new lt,s=se(new ci(2.2,0),We(3095349));n.add(s),[[-1.3,-.8,.4,1.15],[1.2,-.9,-.3,1.1],[.4,1.5,.2,1.25],[-.9,1.2,-.2,1]].forEach(([B,X,z,Q])=>{let H=se(new ci(Q,0),We(4280135));H.position.set(B,X,z),n.add(H)});let r=new Ke({color:16726876}),o=se(new ke(.55,.28,.3),r);o.position.set(-1.85,.45,.6),n.add(o);let a=se(new ke(.55,.28,.3),r);a.position.set(-1.85,.45,-.3),n.add(a);let l=se(new ke(.4,.35,1.3),new Ke({color:16751918}));l.position.set(-1.95,-.45,.15),n.add(l),t.add(n);let c=new lt,u=se(new qr(1.75,0),We(7021196,{emissive:3869778}));c.add(u);let h=se(new sn(2.45,.16,8,24),new Ke({color:wt.magenta}));c.add(h);let f=se(new sn(2.05,.12,8,24),new Ke({color:wt.cyan}));f.rotation.x=Math.PI/2,c.add(f);let p=se(new Zt(.55,10,8),new Ke({color:1692927}));p.position.set(-1.55,.1,0),c.add(p),t.add(c);let g=new lt,_=se(new ke(3.4,2.8,2.2),We(3818058));g.add(_);let m=se(new ke(3.48,.55,2.26),new Mt({map:e.orangeStripes,flatShading:!0}));m.position.y=-.8,g.add(m);let d=se(new ct(.35,.45,1.6,8),We(2304045));d.position.set(.6,2,0),g.add(d);let E=se(new ct(.48,.58,1.4,10),We(2106923));E.rotation.z=Math.PI/2,E.position.set(-2.1,-.35,0),g.add(E);let b=se(new Zt(.5,10,8),new Ke({color:16751918}));b.position.set(-1.72,.55,.4),g.add(b);let x=se(new sn(1.1,.15,6,12),We(8161942));x.position.set(.2,.2,1.2),g.add(x),t.add(g);let P={trash_giant:n,plastic_monster:c,waste_machine:g},w="trash_giant",A=32,R=0,S=1;function y(B,X){w=P[B]?B:"trash_giant";for(let z in P)P[z].visible=z===w;S=X==="ultimate"?1.18:X==="hard"?1.08:X==="easy"?.92:1,t.visible=!0,A=16.8,R=0}function I(){A=33}function G(){R=1}function k(B,X,z){if(!t.visible)return;let Q=z?A:33;t.position.x+=(Q-t.position.x)*Math.min(1,B*3.2),R>0&&(R=Math.max(0,R-B*4.5));let H=Math.sin(R*Math.PI)*1.1;t.position.y=3.8+Math.sin(X*2.6)*.45,t.scale.setScalar(S*(1+H*.08)),w==="trash_giant"?n.rotation.z=Math.sin(X*2.2)*.1+H*.15:w==="plastic_monster"?(u.rotation.y=X*1.8,h.rotation.z=X*2.6,f.rotation.y=-X*3.1,c.position.x=-H*.7):(x.rotation.z=-X*3.4,g.position.x=-H*.6),!z&&t.position.x>31.5&&(t.visible=!1)}return{root:t,show:y,hide:I,pulseAttack:G,update:k}}var Gh=new Le(267538),Wh=new Le(10479871),E0=new Le(wt.neon),T0=new Le(14286832),w0=new Le(16756920);function Xh(i,e){let t=new jt(i);return vn(256,512,(n,s,r)=>{n.fillStyle="#000",n.fillRect(0,0,s,r);let o=["#ffe59a","#9fffe0","#7fd8ff","#ffd27a"];for(let a=0;a<16;a++)for(let l=0;l<8;l++)t.next()<e&&(n.fillStyle=t.pick(o),n.globalAlpha=.6+t.next()*.4,n.fillRect(l*32+8,a*32+9,16,14));n.globalAlpha=1},{repeat:!0})}function qh(i,e,t,n,s,r){let o=new ke(e,t,n),a=o.attributes.uv;for(let u=0;u<a.count;u++)a.setXY(u,a.getX(u)*(e/6),a.getY(u)*(t/8));let l=new je(o,s);l.position.y=t/2;let c=new lt;if(c.add(l),r){let u=new je(new ke(e+.1,.12,n+.1),new Ke({color:r}));u.position.y=t,c.add(u)}if(i.chance(.4)){let u=new je(new ke(.12,i.range(1.5,3.5),.12),new Mt({color:666154}));u.position.set(i.range(-e/3,e/3),t+1,0),c.add(u)}return c}function Yh(i,e){return vn(256,128,(n,s,r)=>{n.fillStyle="#02130f",gs(n,4,4,s-8,r-8,16),n.fill(),n.strokeStyle=e,n.lineWidth=6,gs(n,4,4,s-8,r-8,16),n.stroke(),n.fillStyle=e,n.textAlign="center",n.textBaseline="middle",i==="text"?(n.font='900 52px "Arial Black",Impact,sans-serif',n.fillText("PLASVORA",s/2,r/2-8),n.font="700 20px Arial",n.fillStyle="#d9fff0",n.fillText("Recycle \u2022 Reuse \u2022 Reimagine",s/2,r/2+34)):(n.font='900 86px "Segoe UI Symbol","DejaVu Sans",Arial,sans-serif',n.fillText("\u267B",s/2,r/2+4))})}var Fs=class{constructor(e,t,n,s,r,o=4){this.tileW=t,this.factor=n,this.n=o,this.scroll=0,this.tiles=[];for(let a=0;a<o;a++){let l=s(a);l.position.z=r,e.add(l),this.tiles.push(l)}this.place()}update(e){this.scroll+=e*this.factor,this.place()}place(){let e=Math.floor(this.scroll/this.tileW),t=this.scroll-e*this.tileW;for(let n=0;n<this.n;n++){let s=((e+n)%this.n+this.n)%this.n;this.tiles[s].position.x=-this.tileW+n*this.tileW-t}}},oo=class{constructor(e){this.scene=e,this.dist=0,this.bossF=0,this.t=0,this._tgtBg=Gh.clone(),this._tgtHemi=Wh.clone(),this._tgtEdge=E0.clone();let t=Math.floor(Math.random()*1e9);e.background=Gh.clone(),e.fog=new zr(399124,55,170),this.hemi=new $r(Wh.getHex(),731684,1.55),e.add(this.hemi);let n=new Qr(13626111,1.7);n.position.set(-6,14,12),e.add(n),this.buildSky(t),this.buildLayers(t),this.buildRoad()}buildSky(e){let t=new jt(e),n=260,s=new Float32Array(n*3);for(let l=0;l<n;l++)s[l*3]=t.range(-90,90),s[l*3+1]=t.range(6,55),s[l*3+2]=-110;let r=new At;r.setAttribute("position",new Pt(s,3)),this.stars=new hs(r,new Ai({color:16777215,size:.55,sizeAttenuation:!0,transparent:!0,opacity:.8,fog:!1})),this.stars.position.x=5,this.scene.add(this.stars),this.moon=new lt;let o=new je(new us(4.2,32),new Ke({color:14286832,fog:!1}));this.moon.add(o);let a=new wi(new li({map:vn(128,128,l=>{let c=l.createRadialGradient(64,64,8,64,64,62);c.addColorStop(0,"rgba(150,255,210,.55)"),c.addColorStop(1,"rgba(60,255,170,0)"),l.fillStyle=c,l.fillRect(0,0,128,128)}),transparent:!0,depthWrite:!1,blending:ri,fog:!1}));a.scale.setScalar(22),a.position.z=-.1,this.moon.add(a),this.moonDisc=o,this.moon.position.set(25,11,-100),this.scene.add(this.moon)}buildLayers(e){let t=this.scene,n=new Mt({color:535085,emissive:16777215,emissiveMap:Xh(e+1,.28),emissiveIntensity:.5,flatShading:!0}),s=new Mt({color:735797,emissive:16777215,emissiveMap:Xh(e+2,.38),emissiveIntensity:.8,flatShading:!0});this.far=new Fs(t,40,.1,h=>{let f=new jt(e+100+h),p=new lt,g=0;for(;g<40;){let _=f.range(5,9),m=f.range(12,32),d=qh(f,_,m,6,n,f.chance(.4)?wt.neon:0);d.position.x=g+_/2,p.add(d),g+=_+f.range(.5,2)}if(h===1){let _=new je(new Ht(14,7),new Ke({map:Yh("text","#39ffa0"),transparent:!0,opacity:.9}));_.position.set(20,8,3.2),p.add(_)}return p},-52),this.mid=new lt,this.midLayer=new Fs(t,30,.34,h=>{let f=new jt(e+200+h),p=new lt,g=0;for(;g<30;){let _=f.range(4,7),m=f.range(7,17),d=qh(f,_,m,5,s,f.chance(.5)?wt.cyan:wt.neon);if(d.position.x=g+_/2,p.add(d),g+=_+f.range(.4,1.5),f.chance(.3)){let E=new je(new Ht(2.4,1.2),new Ke({map:Yh("icon",f.chance(.5)?"#39ffa0":"#19d4ff"),transparent:!0,opacity:.85}));E.position.set(d.position.x,f.range(3.5,5),2.6),p.add(E)}}return p},-24);let r=new Mt({color:3877404}),o=[1740629,2274154,1341770].map(h=>new Mt({color:h,flatShading:!0})),a=new Mt({color:1196090}),l=new Ke({color:14090224}),c=[3116512,14726447,3126122],u=[13626098,16777215,16757611,9364385];this.near=new Fs(t,22,1,h=>{let f=new jt(e+300+h),p=new lt,g=E=>{let b=new je(new ct(.07,.09,5,6),a);b.position.set(E,2.8,0),p.add(b);let x=new je(new ke(1,.08,.08),a);x.position.set(E+.45,5.3,0),p.add(x);let P=new je(new Zt(.22,8,6),l);P.position.set(E+.9,5.2,0),p.add(P)},_=E=>{let b=new je(new ct(.15,.2,2,6),r);b.position.set(E,1.3,0),p.add(b);for(let x=0;x<3;x++){let P=new je(new Xr(f.range(.9,1.3),0),o[x]);P.position.set(E+f.range(-.6,.6),2.8+f.range(0,1.1),f.range(-.3,.3)),p.add(P)}},m=E=>c.forEach((b,x)=>{let P=new je(new ct(.4,.33,1,8),new Mt({color:b,flatShading:!0}));P.position.set(E+x*.95,.7,0),p.add(P)}),d=E=>{for(let b=0;b<5;b++){let x=new je(new ke(f.range(.2,.4),.15,.2),new Mt({color:f.pick(u)}));x.position.set(E+f.range(-.8,.8),.38,f.range(-.6,1.2)),x.rotation.y=f.range(0,3),p.add(x)}};return g(2),g(13),_(6+f.range(-1,1)),_(17+f.range(-1,1)),h%2===0?m(8.5+f.range(0,1)):d(9+f.range(0,2)),d(15+f.range(0,2)),h%3===0&&d(20),p},-6.5)}buildRoad(){let e=this.scene,t=vn(512,256,(o,a,l)=>{o.fillStyle="#0d1f1d",o.fillRect(0,0,a,l);let c=new jt(5);for(let u=0;u<700;u++)o.fillStyle="rgba(255,255,255,"+(.02+c.next()*.05)+")",o.fillRect(c.next()*a,c.next()*l,2,2);o.fillStyle="rgba(220,255,240,.5)",o.fillRect(0,118,230,8)},{repeat:!0});t.repeat.set(260/8,1),this.roadTex=t;let n=new je(new Ht(260,16),new Mt({map:t}));n.rotation.x=-Math.PI/2,n.position.set(5,0,4),e.add(n);let s=new je(new ke(260,.3,5.5),new Mt({color:2059099}));s.position.set(5,.15,-6.55),e.add(s),this.edge=new je(new ke(260,.06,.1),new Ke({color:wt.neon})),this.edge.position.set(5,.33,-3.85),e.add(this.edge);let r=new je(new Ht(260,60),new Mt({color:266767}));r.rotation.x=-Math.PI/2,r.position.set(5,-.03,-40),e.add(r)}update(e,t,n,s){this.t+=e,this.dist+=t,this.far.update(t),this.midLayer.update(t),this.near.update(t),this.roadTex.offset.x=this.dist/8%1;let r=n||s||oe.PHASES[0];this._tgtBg.setHex(r.bg),this._tgtHemi.setHex(r.hemi),this._tgtEdge.setHex(r.edge);let o=Math.min(1,e*2.2);this.scene.background.lerp(this._tgtBg,o),this.scene.fog.color.copy(this.scene.background),this.hemi.color.lerp(this._tgtHemi,o),this.edge.material.color.lerp(this._tgtEdge,o),this.bossF+=((n?1:0)-this.bossF)*Math.min(1,e*2.5),this.moonDisc.material.color.copy(T0).lerp(w0,this.bossF),this.moon.position.y=11+Math.sin(this.t*.3)*.3}};var ao=oe.WORLD,lo=class{constructor(e){this.robot=Fh(),e.add(this.robot.root),e.add(this.robot.shadow),this.reset()}reset(){this.x=0,this.y=0,this.vy=0,this.onGround=!0,this.sliding=!1,this.hitT=0,this.collectT=0,this.inv=0,this.knock=0,this.lock=0,this.buf=0,this.shield=!1,this.boost=0,this.magnet=0,this.speed=0,this.comboGuard=0,this.t=0,this.idle=!1,this.apply()}get state(){return this.idle?"idle":this.hitT>0?"hit":this.onGround?this.sliding?"slide":"run":this.vy>0?"jump":"fall"}hurt(){this.hitT=.5,this.inv=1.6,this.knock=1,this.lock=.14,this.sliding=!1}pickup(){this.collectT=.18}update(e,t,n){let s={jumped:!1,landed:!1,slideStart:!1};this.t+=e;for(let o of["hitT","collectT","inv","lock","boost","magnet","speed","comboGuard"])this[o]>0&&(this[o]=Math.max(0,this[o]-e));this.knock>0&&(this.knock=Math.max(0,this.knock-e/.5)),t?this.buf=ao.JUMP_BUFFER:this.buf>0&&(this.buf-=e);let r=this.lock>0;if(this.buf>0&&this.onGround&&!r&&(this.vy=ao.JUMP_V,this.onGround=!1,this.sliding=!1,this.buf=0,s.jumped=!0),this.onGround){let o=this.sliding;this.sliding=n&&!r,this.sliding&&!o&&(s.slideStart=!0)}else this.sliding=!1,this.vy-=ao.GRAVITY*(n?ao.FALL_MULT:1)*e,this.y+=this.vy*e,this.y<=0&&(this.y=0,this.vy=0,this.onGround=!0,s.landed=!0);return this.apply(),s}apply(){let e=-Math.sin(this.knock*Math.PI*.5)*.9*(this.knock>0?1:0),t=this.robot;t.root.position.set(this.x+e,this.y,0),t.root.visible=!(this.inv>0&&this.hitT<=0&&Math.floor(this.t*16)%2===0);let n=Math.max(.35,1-this.y/7);t.shadow.position.set(this.x+e,.04,.2),t.shadow.scale.set(n*(this.sliding?1.5:1),n,n),t.shadow.material.opacity=.42*n,t.update(this.t,this.state,{shield:this.shield,boost:this.boost>0||this.comboGuard>0,magnet:this.magnet>0,speed:this.speed>0,flash:this.hitT>0&&Math.floor(this.t*30)%2===0,happy:this.collectT>0})}center(e){return e.set(this.x,this.sliding?.5:this.y+.95,0),e}};var A0={easy:{cone:34,bin:34,box:32},medium:{hole:26,barrier:22,pipe:26,trashPile:26},hard:{dumpster:28,lowBeam:28,car:24,trashPile:20}},R0=[{id:"plastic_rush",label:"PLASTIC RUSH",lootBias:{normal:1.25,recycled:1.1,rare:.9,gold:.95},powerBias:{boost:1.35,magnet:1.15,shield:.9,speed:.95},obsBias:{jump:1,slide:.95},bossPref:"trash_giant"},{id:"rare_hunt",label:"RARE HUNT",lootBias:{normal:.85,recycled:1.15,rare:1.35,gold:1.25},powerBias:{boost:.95,magnet:1,shield:1.35,speed:.95},obsBias:{jump:1.05,slide:1.05},bossPref:"plastic_monster"},{id:"jump_gauntlet",label:"SKY HURDLE",lootBias:{normal:.95,recycled:1.05,rare:1.1,gold:1.1},powerBias:{boost:.95,magnet:1.35,shield:1.15,speed:.9},obsBias:{jump:1.35,slide:.78},bossPref:"waste_machine"},{id:"slide_sprint",label:"LOW DRIFT",lootBias:{normal:1,recycled:1.2,rare:1.05,gold:1.05},powerBias:{boost:1.1,magnet:.95,shield:.95,speed:1.35},obsBias:{jump:.85,slide:1.38},bossPref:"plastic_monster"},{id:"combo_master",label:"COMBO FLOW",lootBias:{normal:1.15,recycled:1.15,rare:1.1,gold:.9},powerBias:{boost:1.15,magnet:1.2,shield:1.15,speed:.85},obsBias:{jump:1,slide:1},bossPref:"trash_giant"}],Zh={easy:[["box","hole"],["bin","box"],["cone","bin"],["cone","box"],["bin","hole"],["cone","barrier"]],medium:[["hole","pipe"],["pipe","trashPile"],["cone","trashPile"],["barrier","pipe"],["box","pipe"],["bin","barrier"],["pipe","hole"],["cone","car"]],hard:[["cone","dumpster"],["pipe","dumpster"],["hole","lowBeam"],["trashPile","lowBeam"],["lowBeam","trashPile"],["lowBeam","bin"],["box","hole","pipe"],["cone","pipe","dumpster"],["bin","lowBeam","car"],["hole","pipe","trashPile"],["cone","lowBeam","dumpster"]]},co={trash_giant:{singles:{trashPile:32,dumpster:28,box:20,hole:20},combos:[["box","trashPile"],["trashPile","hole"],["cone","dumpster"],["hole","trashPile"],["box","hole","dumpster"],["cone","trashPile","hole"]]},plastic_monster:{singles:{pipe:28,lowBeam:26,bin:24,cone:22},combos:[["pipe","bin"],["hole","pipe"],["lowBeam","bin"],["cone","lowBeam"],["pipe","hole","lowBeam"],["bin","pipe","trashPile"]]},waste_machine:{singles:{barrier:26,lowBeam:26,car:24,pipe:24},combos:[["barrier","pipe"],["lowBeam","car"],["hole","lowBeam"],["pipe","dumpster"],["barrier","lowBeam","car"],["cone","pipe","car"]]}};function Kh(i,e,t,n,s){let r=_n[i],o=_n[e],a=r?r.hitW:1.5,l=r?r.need:"jump",c=o?o.need:"jump",h=[.46,.38,.31,.25,.2][Ii((n||1)-1,0,4)];return s==="hard"?h=Math.max(.18,h-.03):s==="ultimate"&&(h=Math.max(.17,h-.04)),l==="jump"&&c==="jump"?Math.max(.18*t,.64*t-a)+(h+.14)*t+.9:l==="jump"&&c==="slide"?Math.max(.16*t,.58*t-a)+(h*.8+.12)*t+.85:l==="slide"&&c==="jump"?(h+.24)*t+1.1:(h+.3)*t+1.1}var ho=class{constructor(e){this.reset(e)}reset(e){this.seed=e>>>0,this.rng=new jt(this.seed),this.profile=this.rng.pick(R0),this.slot=0,this.consecObs=0,this.lastObsKind="",this.lastComboKey="",this.lastLootTier="",this.lootStreak=0,this.sincePower=8,this.nextPowerCd=this.rng.range(oe.LOOT.POWER_CD_MIN,oe.LOOT.POWER_CD_MAX),this.prevWasObstacle=!1,this.prevWasPower=!1,this.bossCount=0,this.lastBossVariant="",this.nextBossDist=Math.round(this.rng.range(oe.BOSS.FIRST_MIN_DIST,oe.BOSS.FIRST_MAX_DIST)),this.bossPendingRollDist=this.nextBossDist}checkBossTrigger(e,t,n){if(e<this.nextBossDist)return null;let s=.86,r=n>=4?.08:0;if(this.rng.next()>Math.min(.96,s+r))return this.nextBossDist=Math.round(e+this.rng.range(900,1600)),null;let o=Object.keys(oe.BOSS.VARIANTS),a={};for(let _ of o){let m=_===this.lastBossVariant?0:50;this.bossCount===0&&_===this.profile.bossPref&&(m+=20),a[_]=m}let l=this.rng.weighted(a);this.lastBossVariant=l;let c=Vn(e).id,u=c<=3?{easy:30,normal:44,hard:21,ultimate:5}:c===4?{easy:14,normal:36,hard:38,ultimate:12}:{easy:6,normal:24,hard:48,ultimate:22};n>=5&&(u.hard+=8);let h=this.rng.weighted(u),f=oe.BOSS.VARIANTS[l],p=oe.BOSS.DIFFICULTIES[h],g=Math.round(this.rng.range(p.timeMin,p.timeMax));return this.bossCount++,this.bossCount===1?this.nextBossDist=Math.round(Math.max(e+1700,this.rng.range(oe.BOSS.SECOND_MIN_DIST,oe.BOSS.SECOND_MAX_DIST))):this.nextBossDist=Math.round(e+this.rng.range(oe.BOSS.NEXT_GAP_MIN,oe.BOSS.NEXT_GAP_MAX)),{variant:f,diff:p,duration:g}}pickObstacleKind(e,t){let n=this.rng,s;if(t&&co[t])s={...co[t].singles};else{let o=n.weighted(e.obsTierWeights);s={...A0[o]}}for(let o in s){let a=_n[o];a&&(s[o]*=this.profile.obsBias[a.need]||1),o===this.lastObsKind&&(s[o]*=.18)}let r=n.weighted(s);return this.lastObsKind=r,r}pickCombo(e,t,n){let s=this.rng,r;if(t&&co[t])r=co[t].combos,n==="easy"&&(r=r.filter(l=>l.length===2));else{let l=e.id<=2?{easy:68,medium:32,hard:0}:e.id===3?{easy:24,medium:56,hard:20}:e.id===4?{easy:10,medium:38,hard:52}:{easy:5,medium:25,hard:70},c=s.weighted(l);r=Zh[c],e.maxChain<3&&(r=r.filter(u=>u.length<=e.maxChain))}r.length||(r=Zh.easy);let o=s.pick(r),a=o.join(">");return a===this.lastComboKey&&r.length>1&&(o=s.pick(r.filter(l=>l.join(">")!==this.lastComboKey)),a=o.join(">")),this.lastComboKey=a,this.lastObsKind=o[o.length-1],o}pickLootTier(e,t){let n=this.rng,s={...e.lootWeights};for(let o in s)s[o]*=this.profile.lootBias[o]||1;t&&(s.normal*=.65,s.recycled*=1.25,s.rare*=1.6,s.gold*=1.85),this.lootStreak>=2&&s[this.lastLootTier]&&(s[this.lastLootTier]*=.45);let r=n.weighted(s);return r===this.lastLootTier?this.lootStreak++:(this.lastLootTier=r,this.lootStreak=1),r}pickPowerKind(){let e={...oe.LOOT.POWER_WEIGHTS};for(let t in e)e[t]*=this.profile.powerBias[t]||1;return this.rng.weighted(e)}next(e,t){let n=oe.LOOT,s=this.rng,r=e.dist||0,o=e.speed||oe.WORLD.BASE_SPEED,a=Vn(r),l=!!e.boss,c=l?oe.BOSS.DIFFICULTIES[e.bossDiff]:null;this.sincePower+=t;let u={...a.slotWeights};l&&(u.obstacle=68,u.loot=27,u.power=5);let h=!1;this.slot<n.INTRO_SLOTS&&(u.obstacle=0,u.power=0,h=!0);let f=l?3:a.id>=2?2:1;this.consecObs>=f&&(u.obstacle=0,h=!0),(r<n.POWER_MIN_DIST||this.sincePower<this.nextPowerCd||this.prevWasPower)&&(u.power=0);let p=s.weighted(u);this.slot++;let g=Ii((r-a.minDist)/Math.max(1,a.maxDist-a.minDist),0,1),_=Lh(a.gapMax,a.gapMin,g)*s.range(.88,1.14);l&&c&&(_*=c.gapMult);let m;if(p==="obstacle"){let d=l&&c?c.comboChance:a.comboChance;if(d>0&&s.chance(d)){let b=this.pickCombo(a,l?e.bossVariant:null,e.bossDiff),x=[];for(let P=0;P<b.length;P++){let w=b[P],A=P===0?0:Kh(b[P-1],w,o,a.id,e.bossDiff)*s.range(1,1.15),R=_n[w].need==="jump"&&s.chance(.16)?this.pickLootTier(a,!0):null;x.push({kind:w,edgeGap:A,arc:R})}m={type:"combo",items:x},this.consecObs+=2,m.gapAfter=Math.max(_*1.08,n.MIN_RECOVERY_AFTER_COMBO*(a.id>=4?.92:1))}else{let b=this.pickObstacleKind(a,l?e.bossVariant:null),x=_n[b].need,P=x==="jump"&&s.chance(.18)?this.pickLootTier(a,!0):null,w=x==="slide"&&s.chance(.42)?this.pickLootTier(a,!0):null;m={type:"obstacle",kind:b,arc:P,slideBonus:w},this.consecObs++;let A=Kh(b,b,o,a.id,e.bossDiff)/o;m.gapAfter=Math.max(_,A)}this.prevWasObstacle=!0,this.prevWasPower=!1}else if(p==="power")m={type:"power",kind:this.pickPowerKind()},this.sincePower=0,this.nextPowerCd=s.range(n.POWER_CD_MIN,n.POWER_CD_MAX),this.consecObs=0,m.leadPad=this.prevWasObstacle?n.POWER_SAFE_BEFORE*o:0,m.gapAfter=Math.max(_,n.POWER_SAFE_AFTER),this.prevWasObstacle=!1,this.prevWasPower=!0;else{let d=this.pickLootTier(a,!1),E=1;d==="normal"?E=s.weighted({1:78,2:20,3:2})|0:d==="recycled"&&(E=1);let b=s.chance(.24+.06*a.id),x=E>=2&&s.chance(.4)?"arc":"flat";m={type:"plastic",tier:d,count:E,high:b,pattern:x,variants:Array.from({length:E},()=>s.int(0,2))},this.consecObs=0,m.gapAfter=_*(E>=3?.92:.86),this.prevWasObstacle=!1,this.prevWasPower=!1}return m.forcedSafe=h,m}};var ks=class{constructor(e,t,n){this.free=[];for(let s=0;s<t;s++){let r=e(s);r.visible=!1,n.add(r),this.free.push(r)}}get(){let e=this.free.pop();return e&&(e.visible=!0),e||null}put(e){e.visible=!1,this.free.push(e)}},uo=oe.WORLD,C0=.92,I0=2.72,fo=class{constructor(e){this.group=new lt,e.add(this.group),this.director=new ho(1),this.obstacles=[],this.loot=[],this.powers=[],this.obsPools={},this.lootPools={},this.powerPools={};for(let t in _n)this.obsPools[t]=new ks(()=>Hh(t),6,this.group);for(let[t,n]of[["normal",10],["recycled",6],["rare",5],["gold",4]])for(let s=0;s<3;s++)this.lootPools[t+s]=new ks(()=>kh(t,s),n,this.group);for(let t of["boost","magnet","shield","speed"])this.powerPools[t]=new ks(()=>zh(t),2,this.group);this.distToNext=0,this.timeSince=0}reset(e){for(let t of this.obstacles)t.pool.put(t.mesh);for(let t of this.loot)t.pool.put(t.mesh);for(let t of this.powers)t.pool.put(t.mesh);this.obstacles.length=0,this.loot.length=0,this.powers.length=0,this.director.reset(e),this.distToNext=0,this.timeSince=0}clearAhead(e){this.obstacles=this.obstacles.filter(t=>t.x>e?(t.pool.put(t.mesh),!1):!0)}addLoot(e,t,n,s){let r=this.lootPools[e+t%3],o=r&&r.get();o&&(o.position.set(n,s,0),this.loot.push({mesh:o,pool:r,tier:e,x:n,y:s,ph:Math.random()*6.28,taken:!1}))}placeObstacle(e,t,n,s){let r=_n[e],o=this.obsPools[e],a=o&&o.get();if(!a)return r?r.hitW:1.8;if(a.position.set(t,0,0),this.obstacles.push({mesh:a,pool:o,kind:e,def:r,x:t,passed:!1,hit:!1}),r.need==="slide"&&s)this.addLoot(s,0,t,.58);else if(n){let l=r.hitY+r.hitH/2,c=Math.min(3.45,Math.max(2.65,l+1.35));this.addLoot(n,n==="normal"?0:1,t,c)}return r.hitW}spawnBossReward(e,t){this.clearAhead(12);let n=16.5;for(let s=0;s<e.rareDrops;s++)this.addLoot("rare",s%3,n,1.05),n+=2.2;t.chance(e.goldChance)&&(this.addLoot("gold",0,n+.3,1.35),n+=2.6),this.distToNext=Math.max(this.distToNext,14)}spawnSlot(e,t){let n=t+(e.leadPad||0),s=1.5;if(e.type==="obstacle")s=this.placeObstacle(e.kind,n,e.arc,e.slideBonus)+(e.leadPad||0);else if(e.type==="combo"){let r=n,o=0;for(let a=0;a<e.items.length;a++){let l=e.items[a],u=_n[l.kind].hitW/2;a>0&&(r+=o+l.edgeGap+u),this.placeObstacle(l.kind,r,l.arc,null),o=u}s=r+o-t}else if(e.type==="power"){let r=this.powerPools[e.kind],o=r&&r.get();if(!o)return 2;o.position.set(n,1.55,0),this.powers.push({mesh:o,pool:r,kind:e.kind,x:n,y:1.55,ph:Math.random()*6.28,taken:!1}),s=1.6+(e.leadPad||0)}else{let r=e.high?I0:C0;for(let o=0;o<e.count;o++){let a=e.pattern==="arc"&&e.count===3&&o===1?.65:e.pattern==="arc"&&e.count===2&&o===1?.45:0,l=e.variants?e.variants[o]:o%3;this.addLoot(e.tier,l,n+o*1.75,r+a)}s=e.count*1.75}return s}upcomingWarning(e){let t=null;for(let n of this.obstacles){if(n.hit||!n.def.warning)continue;let s=n.x-e;s>8&&s<25&&(!t||s<t.distX)&&(t={distX:s,need:n.def.need,name:n.def.name})}return t}update(e,t,n,s,r){this.timeSince+=e,this.distToNext-=t;let o=0;for(;this.distToNext<=0&&o++<3;){let l=this.director.next(n,this.timeSince);this.timeSince=0;let c=uo.SPAWN_X-this.distToNext,u=this.spawnSlot(l,c);n.boss&&(l.type==="obstacle"||l.type==="combo")&&r&&r(),this.distToNext+=n.speed*l.gapAfter+u}let a=.85+Math.sin(s*14)*.35;for(let l of this.obstacles)l.x-=t,l.mesh.position.x=l.x,l.mesh.userData.beacon&&l.mesh.userData.beacon.scale.setScalar(a);for(let l of this.loot)l.x-=t,l.mesh.position.set(l.x,l.y+Math.sin(s*4+l.ph)*.12,0),l.mesh.userData.shape.rotation.y=s*2.2+l.ph,l.tier==="gold"&&(l.mesh.userData.shape.rotation.z=Math.sin(s*3+l.ph)*.15);for(let l of this.powers)l.x-=t,l.mesh.position.set(l.x,l.y+Math.sin(s*3+l.ph)*.18,0),l.mesh.children[1].rotation.x=s*2.5;this.obstacles=this.obstacles.filter(l=>l.x<uo.DESPAWN_X?(l.pool.put(l.mesh),!1):!0),this.loot=this.loot.filter(l=>l.taken||l.x<uo.DESPAWN_X?(l.pool.put(l.mesh),!1):!0),this.powers=this.powers.filter(l=>l.taken||l.x<uo.DESPAWN_X?(l.pool.put(l.mesh),!1):!0)}};function Jh(i){let e=oe.COMBO.thresholds,t=0;for(let n=0;n<e.length;n++)i>=e[n]&&(t=n);return t}var po=class{constructor(){this.reset()}reset(){this.score=0,this.combo=0,this.comboMax=0,this.plastic=0,this.meters=0,this.cleared=0,this._acc=0}get level(){return Jh(this.combo)}get multiplier(){return oe.COMBO.mult[this.level]}get maxLevel(){return Jh(this.comboMax)}collect(e,t){let n=this.level;this.combo++,this.plastic++,this.combo>this.comboMax&&(this.comboMax=this.combo);let s=oe.SCORE[e]||oe.SCORE.normal,r=Math.round(s*this.multiplier*(t?oe.SCORE.boostMult:1));return this.score+=r,{pts:r,levelUp:this.level>n,level:this.level,combo:this.combo}}breakCombo(){this.combo=0}addBonus(e,t){let n=Math.round(e*(t?oe.SCORE.boostMult:1));return this.score+=n,n}addDistance(e,t,n){let s=e*oe.WORLD.DISTANCE_PER_UNIT;this.meters+=s,this._acc+=s*oe.SCORE.perMeter*(t?oe.SCORE.boostMult:1)*(n?1.35:1);let r=Math.floor(this._acc);return r>0&&(this.score+=r,this._acc-=r),s}};var An=320,mo=class{constructor(e,t){this.scene=e,this.flashEl=t,this.rng=new jt(Math.floor(Math.random()*1e9)),this.pos=new Float32Array(An*3),this.col=new Float32Array(An*3),this.vel=new Float32Array(An*3),this.life=new Float32Array(An),this.max=new Float32Array(An),this.base=new Float32Array(An*3),this.next=0;let n=new At;n.setAttribute("position",new Pt(this.pos,3)),n.setAttribute("color",new Pt(this.col,3)),this.points=new hs(n,new Ai({size:.3,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:ri,fog:!1})),this.points.frustumCulled=!1,e.add(this.points);for(let o=0;o<An;o++)this.pos[o*3+1]=-999;this.rings=[];let s=new Yr(.9,1,28);for(let o=0;o<6;o++){let a=new je(s,new Ke({color:16777215,transparent:!0,depthWrite:!1,side:dn,fog:!1}));a.visible=!1,a.userData={t:0,max:.4,size:2},e.add(a),this.rings.push(a)}this.lines=[];let r=new Ht(1,.035);for(let o=0;o<16;o++){let a=new je(r,new Ke({color:12582888,transparent:!0,opacity:.25,depthWrite:!1,fog:!1}));a.visible=!1,a.userData={len:4,v:2},e.add(a),this.lines.push(a)}this.shakeT=0,this.shakeDur=.01,this.shakeMag=0,this.slowT=0,this.slowS=1,this.flashA=0}reset(){for(let e=0;e<An;e++)this.life[e]=0,this.pos[e*3+1]=-999;this.points.geometry.attributes.position.needsUpdate=!0,this.rings.forEach(e=>{e.visible=!1}),this.lines.forEach(e=>{e.visible=!1}),this.shakeT=0,this.slowT=0,this.flashA=0,this.applyFlash()}burst(e,t,n,s,r,o=5,a={}){let l=new Le(s),c=this.rng;for(let u=0;u<r;u++){let h=this.next;this.next=(this.next+1)%An;let f=c.range(0,6.283),p=o*c.range(.3,1),g=a.up||0;this.pos[h*3]=e,this.pos[h*3+1]=t,this.pos[h*3+2]=n+c.range(-.2,.2),this.vel[h*3]=Math.cos(f)*p+(a.vx||0),this.vel[h*3+1]=Math.sin(f)*p+g,this.vel[h*3+2]=c.range(-1,1),this.base[h*3]=l.r,this.base[h*3+1]=l.g,this.base[h*3+2]=l.b,this.max[h]=this.life[h]=(a.life||.55)*c.range(.6,1.3)}}ring(e,t,n,s=2.5){let r=this.rings.find(o=>!o.visible)||this.rings[0];r.visible=!0,r.position.set(e,t,.5),r.material.color.setHex(n),r.userData.t=0,r.userData.size=s}shake(e,t){this.shakeMag=Math.max(this.shakeT>0?this.shakeMag:0,e),this.shakeT=t,this.shakeDur=t}flash(e,t){this.flashColor=e,this.flashA=t,this.applyFlash()}slowmo(e,t){this.slowS=e,this.slowT=t}timeScale(){return this.slowT<=0?1:this.slowS+(1-this.slowS)*(1-Math.min(1,this.slowT/.2))}shakeOffset(e){if(this.shakeT<=0)return e.set(0,0),e;let t=this.shakeMag*(this.shakeT/this.shakeDur);return e.set((Math.random()*2-1)*t,(Math.random()*2-1)*t),e}applyFlash(){this.flashEl&&(this.flashEl.style.background=this.flashColor||"#ff2a4d",this.flashEl.style.opacity=String(Ii(this.flashA,0,.55)))}update(e,t,n,s){this.shakeT>0&&(this.shakeT-=t),this.slowT>0&&(this.slowT-=t),this.flashA>0&&(this.flashA=Math.max(0,this.flashA-t*2.4),this.applyFlash());for(let r=0;r<An;r++){if(this.life[r]<=0)continue;this.life[r]-=e;let o=Math.max(0,this.life[r]/this.max[r]);if(this.life[r]<=0){this.pos[r*3+1]=-999,this.col[r*3]=this.col[r*3+1]=this.col[r*3+2]=0;continue}this.vel[r*3+1]-=9*e,this.pos[r*3]+=this.vel[r*3]*e,this.pos[r*3+1]+=this.vel[r*3+1]*e,this.pos[r*3+2]+=this.vel[r*3+2]*e,this.col[r*3]=this.base[r*3]*o,this.col[r*3+1]=this.base[r*3+1]*o,this.col[r*3+2]=this.base[r*3+2]*o}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0;for(let r of this.rings){if(!r.visible)continue;let o=r.userData;o.t+=e;let a=o.t/o.max;if(a>=1){r.visible=!1;continue}r.scale.setScalar(.3+o.size*a),r.material.opacity=1-a}for(let r of this.lines){let o=r.userData;if(!r.visible){s>.05&&Math.random()<s*30*e&&(r.visible=!0,o.len=this.rng.range(3,8),o.v=this.rng.range(1.6,2.6),r.scale.x=o.len,r.position.set(24,this.rng.range(.5,9),this.rng.range(-3,5)),r.material.opacity=.12+.2*s);continue}r.position.x-=n*o.v*e,r.position.x+o.len<-12&&(r.visible=!1)}}};function Bl(i){let e=i.getContext("2d");i.width=i.clientWidth,i.height=i.clientHeight;let t=["#39ffa0","#ffd23f","#19d4ff","#ff4fd8","#ff7a2f","#ffffff"],n=[];for(let o=0;o<170;o++)n.push({x:Math.random()*i.width,y:-20-Math.random()*i.height*.6,vx:(Math.random()-.5)*120,vy:120+Math.random()*260,s:6+Math.random()*8,r:Math.random()*6,vr:(Math.random()-.5)*14,c:t[o%t.length]});let s=performance.now(),r=s;(function o(a){let l=Math.min(.05,(a-r)/1e3);r=a,e.clearRect(0,0,i.width,i.height);for(let c of n)c.x+=c.vx*l,c.y+=c.vy*l,c.r+=c.vr*l,c.vx+=Math.sin(c.r)*20*l,e.save(),e.translate(c.x,c.y),e.rotate(c.r),e.fillStyle=c.c,e.fillRect(-c.s/2,-c.s/4,c.s,c.s/2),e.restore();a-s<4800?requestAnimationFrame(o):e.clearRect(0,0,i.width,i.height)})(s)}var zs={},go=!1,_o=!1,Fl=!1,$h={Space:1,ArrowUp:1,KeyW:1},jh={ArrowDown:1,KeyS:1},Qh={KeyP:1,Escape:1},P0=i=>i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA");window.addEventListener("keydown",i=>{P0(i)||(zs[i.code]=!0,Fl&&($h[i.code]||jh[i.code]||Qh[i.code])&&i.preventDefault(),!(i.repeat||!Fl)&&($h[i.code]&&(go=!0),Qh[i.code]&&(_o=!0)))});window.addEventListener("keyup",i=>{zs[i.code]=!1});window.addEventListener("blur",()=>{for(let i in zs)zs[i]=!1});var en={setActive(i){Fl=i,i||this.clear()},clear(){go=!1,_o=!1},slideHeld(){for(let i in jh)if(zs[i])return!0;return!1},takeJump(){let i=go;return go=!1,i},takePause(){let i=_o;return _o=!1,i}};var it=null,xo,Gn,Hs,zl,So={music:.5,sfx:.8},vo=!1,xs="menu",eu=null,yo=0,Mo=0,L0=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],D0={0:1,3:1,6:1,8:1,11:1,14:1},kl=i=>440*Math.pow(2,(i-69)/12);function N0(){if(it)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;it=new i,xo=it.createGain(),xo.connect(it.destination),Gn=it.createGain(),Gn.connect(xo),Hs=it.createGain(),Hs.connect(xo),zl=it.createBuffer(1,it.sampleRate,it.sampleRate);let e=zl.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;tu()}function tu(){it&&(Gn.gain.value=So.music*.3,Hs.gain.value=So.sfx*.7)}function Vt(i,e,t,n,s,r,o){if(!it)return;s=s||it.currentTime;let a=it.createOscillator(),l=it.createGain();a.type=t||"sine",a.frequency.setValueAtTime(i,s),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,r),s+e),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(n||.2,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+e),a.connect(l),l.connect(o||Hs),a.start(s),a.stop(s+e+.02)}function _s(i,e,t,n,s){if(!it)return;t=t||it.currentTime;let r=it.createBufferSource(),o=it.createBiquadFilter(),a=it.createGain();r.buffer=zl,o.type="highpass",o.frequency.value=n||2e3,a.gain.setValueAtTime(e||.2,t),a.gain.exponentialRampToValueAtTime(1e-4,t+i),r.connect(o),o.connect(a),a.connect(s||Hs),r.start(t),r.stop(t+i+.02)}var ui=(i,e,t,n,s)=>{if(!it)return;let r=it.currentTime;i.forEach((o,a)=>Vt(o,e,t,n,r+a*s))};function U0(i,e,t){let n=Math.floor(i/16)%4,s=i%16,r=L0[n],o=xs==="menu",a=xs==="boss";!o&&s%4===0&&Vt(150,.16,"sine",.9,e,45,Gn),!o&&(s===4||s===12)&&_s(.1,.3,e,1500,Gn),(s%2===1||a&&s%2===0)&&_s(.04,o?.06:.13,e,7e3,Gn),D0[s]&&Vt(kl(r[0]-24),t*2.2,"sawtooth",o?.2:.3,e,null,Gn),s%2===0&&Vt(kl(r[s/2%3]+12),t*1.6,"square",o?.06:.09,e,null,Gn),a&&Vt(kl(r[(s+1)%3]+24),t*.9,"triangle",.09,e+t*.5,null,Gn)}function O0(){if(!it||!vo)return;let e=60/(xs==="boss"?150:xs==="menu"?100:128)/4;for(;yo<it.currentTime+.16;)U0(Mo,yo,e),yo+=e,Mo=(Mo+1)%64}var Xe={unlock(){N0(),it&&it.state==="suspended"&&it.resume()},setVolumes(i,e){So.music=i,So.sfx=e,tu()},startMusic(i){this.unlock(),it&&(xs=i||"run",!vo&&(vo=!0,Mo=0,yo=it.currentTime+.06,eu=setInterval(O0,40)))},setMode(i){xs=i},stopMusic(){vo=!1,clearInterval(eu)},click(){Vt(660,.07,"square",.12)},jump(){Vt(280,.16,"square",.14,0,620)},slide(){_s(.22,.16,0,1200)},land(){Vt(120,.08,"sine",.25,0,70)},collect(i){let e=700+i*80;Vt(e,.08,"square",.12),Vt(e*1.5,.1,"square",.1,it?it.currentTime+.05:0)},rare(){ui([880,1175,1480],.11,"triangle",.18,.06)},gold(){ui([784,1047,1319,1568],.14,"square",.17,.07)},combo(i){let e=520+i*60;ui([e,e*1.25,e*1.5],.12,"triangle",.2,.07)},power(){ui([440,660,880,1320],.12,"sawtooth",.15,.08)},shield(){Vt(900,.2,"triangle",.2,0,200),_s(.15,.14,0,3e3)},smash(){_s(.2,.28,0,600),Vt(200,.15,"square",.14,0,80)},hit(){_s(.3,.42,0,300),Vt(160,.3,"sawtooth",.28,0,40)},boss(){if(!it)return;let i=it.currentTime;for(let e=0;e<6;e++)Vt(e%2?520:780,.22,"sawtooth",.18,i+e*.38)},bossWin(){ui([523,659,784,1047,1319],.2,"square",.17,.09)},gameOver(){ui([392,330,262,196],.35,"sawtooth",.19,.22)},reward(){ui([523,659,784,1047,784,1047,1319],.16,"square",.17,.1)},highScore(){ui([523,659,784,659,784,1047,1319],.2,"square",.19,.11)},tick(i){Vt(i?880:520,i?.3:.1,"square",.16)}};var Hl={},_t={LB:"plasvora3d_leaderboard_v1",SETTINGS:"plasvora3d_settings_v1",STOCK:"plasvora3d_stock_v1",CLAIMS:"plasvora3d_claims_v1",REVS:"plasvora3d_revs_v1"},xt={get(i,e){try{let t=window.localStorage.getItem(i);if(t!==null)return JSON.parse(t)}catch{}return i in Hl?Hl[i]:e},set(i,e){Hl[i]=e;try{window.localStorage.setItem(i,JSON.stringify(e))}catch{}}},Pi={data:null,load(){let i=xt.get(_t.SETTINGS,{});return this.data={music:typeof i.music=="number"?i.music:.5,sfx:typeof i.sfx=="number"?i.sfx:.8},this.data},get(){return this.data||this.load()},save(){xt.set(_t.SETTINGS,this.get())}};var B0=10,nu={explorer:"rookie",master:"guardian"};function F0(){let i=oe.REVISIONS&&oe.REVISIONS.leaderboard||1,e=xt.get(_t.REVS,null);if(!e){xt.set(_t.REVS,{...oe.REVISIONS||{stock:1,claims:1,leaderboard:1}});return}e.leaderboard!==void 0&&e.leaderboard!==i?(xt.set(_t.LB,[]),e.leaderboard=i,xt.set(_t.REVS,e)):e.leaderboard===void 0&&(e.leaderboard=i,xt.set(_t.REVS,e))}var vs={list(){F0();let i=xt.get(_t.LB,[]);return Array.isArray(i)?i.map(e=>e&&nu[e.rank]?{...e,rank:nu[e.rank]}:e):[]},best(){let i=this.list();return i.length?i[0].score:0},add(i){let e=this.best(),t={id:Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36),name:i.name,score:Math.floor(i.score),distance:Math.round(i.distance),plastic:i.plastic,rank:i.rank,comboMax:i.comboMax,date:new Date().toISOString()},n=this.list().slice();n.push(t),n.sort((o,a)=>a.score-o.score);let s=n.slice(0,B0);xt.set(_t.LB,s);let r=s.findIndex(o=>o.id===t.id);return{entry:t,position:r+1,isTop1:r===0&&t.score>0&&t.score>e}},clear(){xt.set(_t.LB,[])}};var iu="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function su(){let i=oe.REVISIONS||{stock:2,claims:1,leaderboard:1},e=xt.get(_t.REVS,null);if(!e){xt.set(_t.REVS,{...i});return}let t=!1;e.stock!==void 0&&e.stock!==i.stock&&(xt.set(_t.STOCK,null),e.stock=i.stock,t=!0),e.claims!==void 0&&e.claims!==i.claims&&(xt.set(_t.CLAIMS,[]),e.claims=i.claims,t=!0),e.stock===void 0&&(e.stock=i.stock,t=!0),e.claims===void 0&&(e.claims=i.claims,t=!0),t&&xt.set(_t.REVS,e)}function bo(){su();let i=xt.get(_t.STOCK,null),e={};for(let o in oe.REWARDS)e[o]=oe.REWARDS[o].stock;if(!i||!i.base||!i.rem){let o={base:e,rem:{...e}};return xt.set(_t.STOCK,o),o}let t=!1,n={},s={};for(let o in e){let a=i.base[o];a===void 0?(n[o]=e[o],s[o]=e[o],t=!0):a!==e[o]?(n[o]=e[o],s[o]=Math.max(0,(i.rem[o]||0)+e[o]-a),t=!0):(n[o]=a,s[o]=Math.max(0,Math.min(e[o],i.rem[o]||0)))}for(let o in i.base)o in e||(t=!0);let r={base:n,rem:s};return t&&xt.set(_t.STOCK,r),r}function Eo(){su();let i=xt.get(_t.CLAIMS,[]);return Array.isArray(i)?i:[]}function k0(i){for(let e=0;e<50;e++){let t="";for(let s=0;s<4;s++)t+=iu[Math.floor(Math.random()*iu.length)];let n=oe.REWARD_CODE_PREFIX+"-"+t;if(!i.some(s=>s.code===n))return n}return oe.REWARD_CODE_PREFIX+"-"+Date.now().toString(36).toUpperCase().slice(-4)}var Wn={status(i,e){let t=Bs(i);if(!t.prize||!(t.id in oe.REWARDS))return{rank:t,state:"none"};let n=e&&Eo().find(r=>r.runId===e);if(n)return{rank:t,state:"claimed",code:n.code,prize:n.prize||t.prize,fullPrize:t.fullPrize||t.prize,badge:t.badge};let s=bo().rem[t.id]||0;return s>0?{rank:t,state:"available",left:s,prize:t.prize,fullPrize:t.fullPrize||t.prize,badge:t.badge}:{rank:t,state:"soldout",left:0,prize:t.prize,fullPrize:t.fullPrize||t.prize,badge:t.badge}},claim(i,e,t){if(!i)return{ok:!1,reason:"invalid_run"};let n=this.status(e,i);if(n.state==="claimed")return{ok:!1,reason:"claimed",code:n.code,rank:n.rank,prize:n.prize,fullPrize:n.fullPrize,badge:n.badge};if(n.state!=="available")return{ok:!1,reason:n.state,rank:n.rank};let s=bo(),r=s.rem[n.rank.id]||0;if(r<=0)return{ok:!1,reason:"soldout",rank:n.rank};s.rem[n.rank.id]=r-1,xt.set(_t.STOCK,s);let o=Eo(),a=k0(o),l={runId:i,code:a,tier:n.rank.id,rank:n.rank.name,badge:n.rank.badge||"",prize:n.prize,score:Math.floor(e),name:String(t||"PLAYER"),date:new Date().toISOString()};return o.push(l),xt.set(_t.CLAIMS,o),{ok:!0,code:a,rank:n.rank,prize:n.prize,fullPrize:n.fullPrize,badge:n.badge,record:l}},stockTable(){let i=bo();return wn.filter(e=>e.prize&&e.id in oe.REWARDS).map(e=>{let t=i.rem[e.id]||0,n=i.base[e.id]||0;return{id:e.id,name:e.name,badge:e.badge||"",minScore:e.minScore,prize:e.prize,fullPrize:e.fullPrize||e.prize,left:t,total:n,soldOut:t<=0}})},claimCount(){return Eo().length},recentClaims(i=4){return Eo().slice(-i).reverse()},resetStock(){xt.set(_t.STOCK,null),bo()},resetClaims(){xt.set(_t.CLAIMS,[])}};var K=i=>document.getElementById(i),z0=["menu","name","how","set","admin","pause","over","claim","explore","lb","champ"],H0={explorer:"ECO ROOKIE",master:"ECO GUARDIAN"},V0=[{cmd:"npm run admin:status",desc:"Lihat konfigurasi 2 hadiah booth (ECO LEGEND & ECO CHAMPION) [read-only]",warn:!1},{cmd:"npm run admin:set-stock legend 5",desc:"Atur stok ECO LEGEND (STICKER LIMITED)",warn:!1},{cmd:"npm run admin:set-stock champion 1",desc:"Atur stok ECO CHAMPION (STIKER JUARA)",warn:!1},{cmd:"npm run admin:set-score legend 7000",desc:"Ubah skor minimum ECO LEGEND",warn:!1},{cmd:"npm run admin:set-score champion 11000",desc:"Ubah skor minimum ECO CHAMPION",warn:!1},{cmd:'npm run admin:set-reward legend "STICKER LIMITED"',desc:"Ubah nama hadiah ECO LEGEND / ECO CHAMPION",warn:!1},{cmd:"npm run admin:reset-stock",desc:"Reset stok hadiah booth ke angka default (destruktif)",warn:!0},{cmd:"npm run admin:reset-claims",desc:"Reset seluruh riwayat klaim booth (destruktif)",warn:!0},{cmd:"npm run admin:reset-leaderboard",desc:"Reset seluruh data leaderboard (destruktif)",warn:!0}],ru=["\u{1F3C6} Jadi <b>#1 LEADERBOARD</b> &amp; buktikan kamu adalah <b>ECO CHAMPION!</b>","\u{1F525} <b>CAN YOU BE #1?</b> Kejar skor tertinggi &amp; raih <b>STIKER JUARA!</b>","\u{1F381} Capai <b>7.000+</b> untuk <b>STICKER LIMITED</b> &amp; <b>11.000+</b> untuk <b>STIKER JUARA!</b>"],ou=["KEJAR ECO LEGEND &rarr; <em>STICKER LIMITED</em>","\u{1F525} KEJAR ECO LEGEND &mdash; <em>STICKER LIMITED</em> MENUNGGU!","NAIKKAN SKORMU DAN JADI <b>#1!</b>","\u{1F525} <b>CAN YOU BE #1?</b> KEJAR ECO LEGEND!"],wo=0,Et=null,on="menu",Zl="over",Vl=null,Gl=0,Gs=!1;function Nt(i){on=i;for(let t of z0)K("scr-"+t).hidden=t!==i;if(i==="none")return;if(i==="menu"){let t=K("menu-cta");t&&(t.innerHTML=ru[wo%ru.length]),wo++}let e=K("scr-"+i);if(e){if(i==="name"){let t=K("nick");t.value="",setTimeout(()=>t.focus(),30)}else if(i==="admin")setTimeout(()=>K("adm-pin-in").focus(),30);else if(i!=="champ"){let t=[...e.querySelectorAll(".btn")].find(n=>!n.hidden&&!n.disabled&&n.classList.contains("primary"))||[...e.querySelectorAll(".btn")].find(n=>!n.hidden&&!n.disabled);t&&setTimeout(()=>t.focus(),30)}}}var Gt={};function rn(i,e){Gt[i]!==e&&(Gt[i]=e,K(i).textContent=e)}var lu=[["boost","\u26A1","ECO BOOST"],["magnet","M","MAGNET"],["shield","S","SHIELD"],["speed","\xBB","SPEED"],["guard","G","COMBO GUARD"]],cu={};function G0(){let i=K("h-powers");for(let[t,n]of lu){let s=document.createElement("div");s.className="pw"+(t==="guard"?" guard":""),s.hidden=!0,s.innerHTML='<span class="ic">'+n+"</span><i><u></u></i>",i.appendChild(s),cu[t]={el:s,bar:s.querySelector("u")}}let e=K("h-hearts");for(let t=0;t<oe.LIVES;t++){let n=document.createElement("i");n.textContent="\u2665",e.appendChild(n)}}function W0(i){if(rn("h-score",xn(i.score)),rn("h-high",xn(Math.max(i.high,i.score))),rn("h-dist",io(i.meters)),rn("h-plastic",String(i.plastic)),rn("h-speed",i.speed.toFixed(2)),i.phase){let o="P"+i.phase.id+" \u2022 "+i.phase.name;rn("h-phase",o);let a=K("h-phase"),l="phase-pill p"+i.phase.id;Gt.phCls!==l&&(Gt.phCls=l,a.className=l)}if(i.tier){let{cur:o,next:a,pct:l}=i.tier;rn("h-tier-name",o.name);let c=a?"NEXT: "+a.name+" \u2014 "+xn(a.minScore):"\u2605 STIKER JUARA TERBUKA \u2605";rn("h-tier-next",c);let u=Math.round(l*100);Gt.tierPct!==u&&(Gt.tierPct=u,K("h-tier-fill").style.width=u+"%");let h=K("h-tier-box"),f=!a;Gt.isChamp!==f&&(Gt.isChamp=f,h.classList.toggle("champ",f))}let e=K("h-hearts").children;for(let o=0;o<e.length;o++)e[o].className=o<i.lives?"":"off";let t=K("h-combo");if(i.level>=1){t.hidden&&(t.hidden=!1);let o="x"+(i.level+1);Gt.combo!==o&&(Gt.combo=o,K("h-combo-n").textContent=o,t.classList.remove("pulse"),t.offsetWidth,t.classList.add("pulse"))}else t.hidden||(t.hidden=!0,Gt.combo="");let n=K("h-boss");if(i.boss&&i.boss.active){n.hidden&&(n.hidden=!1);let o=i.boss.variant?i.boss.variant.name:"ECO BOSS",a=i.boss.diff?" ["+i.boss.diff.label+"]":"";rn("h-boss-name",o+a),rn("h-boss-t",String(Math.ceil(i.boss.left))),K("h-boss-fill").style.width=100*(1-i.boss.left/Math.max(1,i.boss.total))+"%"}else n.hidden||(n.hidden=!0);let s=K("h-warn");if(i.warn){s.hidden&&(s.hidden=!1);let o=i.warn.need==="slide";rn("h-warn-ic",o?"\u25BC":"\u25B2"),rn("h-warn-txt",o?"SLIDE":"JUMP"),Gt.warnSlide!==o&&(Gt.warnSlide=o,s.classList.toggle("slide",o))}else s.hidden||(s.hidden=!0);for(let[o]of lu){let a=cu[o],l=i.powers[o],c=o==="shield"?!!l:l>0;if(a.el.hidden===c&&(a.el.hidden=!c),c){let u=o==="guard"?8:oe.POWER[o]||1;a.bar.style.width=(o==="shield"?100:Math.min(100,100*l/u))+"%"}}let r=K("h-hint");r.classList.contains("off")!==!i.hint&&r.classList.toggle("off",!i.hint)}function X0(){let i=K("h-score");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}var hu={active:null,t:0,queue:[],push(i){if(i.dur=i.dur||1.4,i.prio=i.prio||1,i.at=performance.now(),this.active&&this.active.text===i.text){this.t=0;return}if(!this.active||i.prio>this.active.prio){this.show(i);return}this.queue.length<3&&this.queue.push(i)},show(i){this.active=i,this.t=0;let e=K("fb-center");e.className="fb-center "+(i.cls||""),K("fb-text").textContent=i.text,K("fb-sub").textContent=i.sub||"",K("fb-sub").hidden=!i.sub,e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation=""},update(i){if(!this.active)return;this.t+=i;let e=K("fb-center");if(this.t>this.active.dur-.25&&!e.classList.contains("out")&&e.classList.add("out"),this.t>=this.active.dur){e.hidden=!0,this.active=null;let t=performance.now();this.queue=this.queue.filter(s=>t-s.at<1500).sort((s,r)=>r.prio-s.prio);let n=this.queue.shift();n&&this.show(n)}},clear(){this.active=null,this.queue.length=0,K("fb-center").hidden=!0}},Vs=[];function q0(i,e,t,n,s){let r=Vs.find(o=>!o.busy);if(!r)if(Vs.length>=3){if(e==="normal")return;r=Vs.sort((o,a)=>o.at-a.at)[0]}else{let o=document.createElement("div");K("floats").appendChild(o),r={el:o,busy:!1,at:0},Vs.push(r)}r.busy=!0,r.at=performance.now(),r.el.className="fl "+e,r.el.innerHTML=i+(s?"<small>"+s+"</small>":""),r.el.style.left=t+"%",r.el.style.top=n-Vs.filter(o=>o.busy&&o!==r).length*5+"%",r.el.style.animation="none",r.el.offsetWidth,r.el.style.animation="",clearTimeout(r.to),r.to=setTimeout(()=>{r.busy=!1,r.el.className="fl",r.el.textContent=""},820)}function Y0(i){let e=K("countdown");e.hidden=!1,e.textContent=i,e.classList.toggle("go",i==="GO!"),e.style.animation="none",e.offsetWidth,e.style.animation=""}var Z0=()=>{K("countdown").hidden=!0};function K0(i){let e=K("runtag");if(!i){e.hidden=!0;return}e.textContent=i,e.hidden=!1}function J0(i){K("hud").hidden=!i,i||(hu.clear(),K("countdown").hidden=!0,K("runtag").hidden=!0,K("h-warn").hidden=!0)}function $0(){for(let i in Gt)delete Gt[i];K("h-combo").hidden=!0,K("h-boss").hidden=!0,K("h-warn").hidden=!0,K("h-hint").classList.remove("off"),K("h-tier-box").classList.remove("champ")}function uu(i){let e=wn.find(t=>t.id===i);return e?e.name:H0[i]||""}function Q0(i){Vl=i===void 0?Vl:i;let e=K("lb-list"),t=vs.list();if(e.innerHTML="",!t.length){let n=document.createElement("li");n.className="empty",n.textContent="Belum ada skor. Jadilah #1 TOP ECO RUNNER & raih STIKER JUARA!",e.appendChild(n);return}t.forEach((n,s)=>{let r=document.createElement("li"),o=s===0,a=n.rank==="champion",l=n.rank==="legend";o&&r.classList.add("top1"),n.id===Vl&&r.classList.add("me");let c=new Date(n.date),u=isNaN(c)?"":("0"+c.getDate()).slice(-2)+"/"+("0"+(c.getMonth()+1)).slice(-2),h=o?"\u{1F3C6} #1":"#"+(s+1),f=a&&o?"\u{1F3C6} ECO CHAMPION \u2022 STIKER JUARA":a?"\u{1F3C6} ECO CHAMPION":l?"\u{1F7E2} ECO LEGEND":uu(n.rank);[["n",h],["nm",n.name],["sc",xn(n.score)],["ds",io(n.distance||0)+" KM "+u],["rk"+(a?" chp":l?" leg":""),f]].forEach(([p,g])=>{let _=document.createElement("span");_.className=p,_.textContent=g,r.appendChild(_)}),e.appendChild(r)})}function j0(i,e,t,n){if(clearInterval(Gl),t<=0){i.textContent=xn(e),n&&n();return}let s=performance.now();i.textContent="0",Gl=setInterval(()=>{let r=Math.min(1,(performance.now()-s)/t);i.textContent=xn(e*(1-Math.pow(1-r,3))),r>=1&&(clearInterval(Gl),n&&n())},30)}function e_(i){let e=Wn.status(i.score,i.entry.id),t=K("o-reward");t.className="o-reward";let n=K("o-cta"),s=K("o-claim");s.hidden=!0,s.disabled=!1,s.textContent="CLAIM REWARD";let r=e.rank.id==="champion",o=oe.REWARDS.legend.minScore,a=oe.REWARDS.champion.minScore;if(e.state==="available"){if(r)t.innerHTML='<div class="rw-unlock champion"><b>\u{1F3C6} ECO CHAMPION!</b><span>STIKER JUARA UNLOCKED</span></div>',n.innerHTML="\u{1F451} <b>ECO CHAMPION!</b> KAMU BERHASIL MERAIH <b>STIKER JUARA!</b>";else{let l=Math.max(0,a-i.score);t.innerHTML='<div class="rw-unlock legend"><b>\u{1F381} ECO LEGEND!</b><span>STICKER LIMITED UNLOCKED</span></div>',n.innerHTML=l>0?"\u{1F3C6} "+xn(l)+" POIN MENUJU ECO CHAMPION &rarr; <b>STIKER JUARA</b>":"\u{1F3C6} TINGGAL SEDIKIT LAGI &mdash; KEJAR <b>ECO CHAMPION!</b>"}s.hidden=!1}else if(e.state==="soldout")t.classList.add("out"),t.innerHTML="<b>STOK HABIS</b> &bull; "+e.prize,n.innerHTML=i.position===1?"\u{1F451} PERTAHANKAN POSISI <b>#1 LEADERBOARD!</b>":"\u{1F525} <b>CAN YOU BE #1?</b> NAIKKAN SKORMU!",s.hidden=!1,s.disabled=!0,s.textContent="STOK HABIS";else if(e.state==="claimed")t.innerHTML="<b>REWARD CLAIMED!</b> &bull; KODE <b>"+e.code+"</b>",n.innerHTML=r?"\u{1F451} <b>ECO CHAMPION!</b> KAMU BERHASIL MERAIH <b>STIKER JUARA!</b>":"\u{1F3C6} TINGGAL SEDIKIT LAGI &mdash; KEJAR <b>ECO CHAMPION &rarr; STIKER JUARA</b>",s.hidden=!1,s.disabled=!0,s.textContent="REWARD CLAIMED!";else{let l=Math.max(0,o-i.score);t.innerHTML='<div class="o-prog"><b>'+xn(l)+" POIN</b> MENUJU ECO LEGEND</div>";let c=i.position===1?ou.slice(0,2):ou;n.innerHTML=c[wo%c.length],wo++}return e}function t_(i,e=!0){K("o-name").textContent=i.name,K("o-dist").textContent=io(i.meters)+" KM",K("o-plastic").textContent=String(i.plastic),K("o-combo").textContent="x"+(i.maxLevel+1),K("o-rank-name").textContent=i.rank.id==="champion"?"\u{1F3C6} ECO CHAMPION":i.rank.id==="legend"?"\u{1F381} ECO LEGEND":i.rank.name,K("o-rank-pos").textContent=i.position?"#"+i.position+" LEADERBOARD":"TOP 10 MENUNGGU";let t=K("o-rank");t.classList.remove("show"),t.offsetWidth,e_(i),K("o-reward").style.visibility="hidden",K("o-cta").style.visibility="hidden",Nt("over"),j0(K("o-score"),i.score,e?1e3:0,()=>{t.classList.add("show"),K("o-reward").style.visibility="visible",K("o-cta").style.visibility="visible",e&&i.isTop1&&setTimeout(n_,700)})}function n_(){Nt("champ"),Xe.highScore(),Bl(K("confetti"))}function i_(i,e){let t=i.rank.id==="champion",n=K("c-card");n.className="card narrow ticket tier-"+i.rank.id;let s=K("c-badge");s.className="c-badge "+(t?"utama":"limited"),s.textContent=i.badge||(t?"STIKER JUARA":"LIMITED"),K("c-title").textContent="REWARD CLAIMED!",K("c-rank").textContent=t?"\u{1F3C6} ECO CHAMPION":"\u{1F381} ECO LEGEND",K("c-score").textContent=xn(e.score),K("c-prize").textContent=i.fullPrize||i.prize,K("c-code").textContent=i.code,Nt("claim"),Xe.reward(),Bl(K("confetti"))}function ql(i){if(oe.PLASVORA_URL)try{window.open(oe.PLASVORA_URL,"_blank","noopener")}catch{}else Zl=i,Nt("explore")}function du(){let i=Pi.get();K("vol-music").value=Math.round(i.music*100),K("vol-sfx").value=Math.round(i.sfx*100),K("o-music").textContent=Math.round(i.music*100)+"%",K("o-sfx").textContent=Math.round(i.sfx*100)+"%"}function au(){let i=Pi.get();i.music=+K("vol-music").value/100,i.sfx=+K("vol-sfx").value/100,K("o-music").textContent=Math.round(i.music*100)+"%",K("o-sfx").textContent=Math.round(i.sfx*100)+"%",Gs||Xe.setVolumes(i.music,i.sfx),Pi.save()}function fu(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch{}}function s_(){Gs=!Gs;let i=Pi.get();Xe.setVolumes(Gs?0:i.music,Gs?0:i.sfx)}var Kl=null;function r_(i){return i==="champion"?"utama":i==="legend"?"limited":"spesial"}function o_(i){let e=new Date(i);return isNaN(e)?"":("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)}function Yl(i){let e=i==="manual";K("adm-view-stock").hidden=e,K("adm-view-manual").hidden=!e,K("adm-tab-stock").classList.toggle("active",!e),K("adm-tab-manual").classList.toggle("active",e),K("adm-reset").hidden=e,K("adm-reset-claims").hidden=e,K("adm-clear").hidden=e,e&&Ws()}function a_(){let i=K("adm-cmds");if(!(i.childElementCount>0))for(let e of V0){let t=document.createElement("div");t.className="cmd-row"+(e.warn?" warn":"");let n=document.createElement("div"),s=document.createElement("code");s.textContent=e.cmd;let r=document.createElement("small");r.textContent=e.desc,n.appendChild(s),n.appendChild(r);let o=document.createElement("button");o.type="button",o.className="cmd-copy",o.textContent="SALIN",o.onclick=()=>{try{navigator.clipboard.writeText(e.cmd)}catch{}o.textContent="TERSALIN",setTimeout(()=>{o.textContent="SALIN"},1400)},t.appendChild(n),t.appendChild(o),i.appendChild(t)}}function To(){let i=K("adm-stock");i.innerHTML='<tr><th>RANK</th><th>HADIAH</th><th style="text-align:right">SISA</th></tr>'+Wn.stockTable().map(t=>{let n=t.badge?'<span class="t-badge '+r_(t.id)+'">'+t.badge+"</span>":"",s=t.soldOut?"STOK HABIS":t.left+" / "+t.total,r=t.id==="champion"?"\u{1F3C6} ":"\u{1F7E2} ";return'<tr class="tier-'+t.id+'"><td>'+r+t.name+'<span class="t-score">'+xn(t.minScore)+'+ POIN</span></td><td class="prize-col">'+t.prize+n+'</td><td class="n'+(t.soldOut?" z":"")+'">'+s+"</td></tr>"}).join(""),K("adm-claims").textContent="Total claim tercatat: "+Wn.claimCount();let e=Wn.recentClaims(3);K("adm-recent").innerHTML=e.length?e.map(t=>"<span>"+t.name+" &bull; "+(t.rank||uu(t.tier))+" &bull; "+t.code+" ("+o_(t.date)+")</span>").join(""):"<span>Belum ada klaim hadiah.</span>",a_()}function Wl(i,e,t){Kl=t,K("adm-confirm-msg").textContent=i+" Pastikan Anda ingin melanjutkan sebelum menjalankannya.",K("adm-confirm-cmd").textContent="Terminal manual: "+e,K("adm-confirm").hidden=!1,K("adm-confirm-no").focus()}function Ws(){Kl=null,K("adm-confirm").hidden=!0}function l_(){Ws(),K("adm-pin").hidden=!1,K("adm-panel").hidden=!0,K("adm-tabs").hidden=!0,K("adm-err").hidden=!0,K("adm-pin-in").value="",K("adm-ok").hidden=!1,K("adm-reset").hidden=!0,K("adm-reset-claims").hidden=!0,K("adm-clear").hidden=!0,Nt("admin")}function pu(){K("adm-pin-in").value===oe.ADMIN_PIN?(K("adm-pin").hidden=!0,K("adm-panel").hidden=!1,K("adm-tabs").hidden=!1,K("adm-ok").hidden=!0,Yl("stock"),To(),K("adm-back").focus()):(K("adm-err").hidden=!1,K("adm-pin-in").select())}function Xl(){let i=K("scr-"+on);return i?[...i.querySelectorAll(".btn, .link")].filter(e=>!e.hidden&&!e.disabled&&e.offsetParent!==null):[]}function c_(){on==="name"?Nt("menu"):on==="admin"?Nt("set"):on==="explore"?Nt(Zl):on==="pause"?Et.resume():(on==="how"||on==="set"||on==="lb")&&Et.back()}function h_(i){Xe.unlock();let e=i.key;if((i.target&&i.target.tagName)==="INPUT"){i.target.id==="nick"?e==="Enter"?(i.preventDefault(),Et.play(K("nick").value)):e==="Escape"&&(i.preventDefault(),Nt("menu")):i.target.id==="adm-pin-in"&&(e==="Enter"?(i.preventDefault(),pu()):e==="Escape"&&(i.preventDefault(),Nt("set")));return}if(e==="f"||e==="F"){fu();return}if(e==="m"||e==="M"){s_();return}let n=Et.getState();if(!(n===Oe.PLAYING||n===Oe.BOSS||n===Oe.COUNTDOWN)){if(on==="champ"){i.preventDefault(),Nt("over");return}if(n===Oe.PAUSED&&(e==="p"||e==="P"||e==="Escape")){i.preventDefault(),Et.resume();return}if(e==="Escape"||e==="Backspace"){i.preventDefault(),c_();return}if(e==="ArrowDown"||e==="ArrowUp"){let s=Xl();if(!s.length)return;i.preventDefault();let r=s.indexOf(document.activeElement);r=r<0?0:(r+(e==="ArrowDown"?1:-1)+s.length)%s.length,s[r].focus(),Xe.click();return}if(e==="ArrowRight"||e==="ArrowLeft"){let s=Xl(),r=s.indexOf(document.activeElement);s.length>1&&r>=0&&on!=="menu"&&on!=="pause"&&(i.preventDefault(),s[(r+(e==="ArrowRight"?1:-1)+s.length)%s.length].focus());return}if(e==="Enter"&&!(document.activeElement&&/BUTTON/.test(document.activeElement.tagName))){let s=Xl()[0];s&&(i.preventDefault(),s.click())}}}function u_(i){Et=i,G0(),du();let e=(t,n)=>{K(t).onclick=()=>{Xe.click(),n()}};e("b-play",()=>Nt("name")),e("b-lb",()=>Et.go(Oe.LEADERBOARD)),e("b-how",()=>Et.go(Oe.HOW_TO_PLAY)),e("b-set",()=>Et.go(Oe.SETTINGS)),e("b-start",()=>Et.play(K("nick").value)),e("b-name-back",()=>Nt("menu")),e("how-back",()=>Et.back()),e("lb-back",()=>Et.back()),e("set-back",()=>Et.back()),e("b-full",fu),e("b-admin",l_),e("adm-ok",pu),e("adm-back",()=>{Ws(),Nt("set")}),e("adm-tab-stock",()=>Yl("stock")),e("adm-tab-manual",()=>Yl("manual")),e("adm-reset",()=>Wl("Aksi ini akan mereset seluruh sisa stok hadiah booth ke angka default.","npm run admin:reset-stock",()=>{Wn.resetStock(),To()})),e("adm-reset-claims",()=>Wl("Aksi ini akan menghapus seluruh catatan riwayat klaim booth.","npm run admin:reset-claims",()=>{Wn.resetClaims(),To()})),e("adm-clear",()=>Wl("Aksi ini akan menghapus seluruh skor di leaderboard booth.","npm run admin:reset-leaderboard",()=>{vs.clear(),To()})),e("adm-confirm-yes",()=>{let t=Kl;Ws(),t&&t()}),e("adm-confirm-no",Ws),K("vol-music").oninput=au,K("vol-sfx").oninput=au,e("p-resume",()=>Et.resume()),e("p-restart",()=>Et.restart()),e("p-set",()=>Et.go(Oe.SETTINGS)),e("p-menu",()=>Et.toMenu()),e("o-claim",()=>Et.claim()),e("o-again",()=>Et.playAgain()),e("o-lb",()=>Et.go(Oe.LEADERBOARD)),e("o-menu",()=>Et.toMenu()),e("o-explore",()=>ql("over")),e("c-finish",()=>Et.toMenu()),e("c-explore",()=>ql("claim")),e("x-back",()=>Nt(Zl)),K("scr-champ").onclick=()=>Nt("over"),document.addEventListener("keydown",h_),document.addEventListener("pointerdown",()=>Xe.unlock())}var De={init:u_,show:Nt,hudShow:J0,setHud:W0,bumpScore:X0,resetHudCache:$0,feedback:hu,floatAt:q0,countdown:Y0,hideCountdown:Z0,runTag:K0,showOver:t_,showClaim:i_,renderLB:Q0,syncSettings:du,explore:ql};function Ao(i,e){return Math.abs(i.x-e.x)<i.hw+e.hw&&Math.abs(i.y-e.y)<i.hh+e.hh}function mu(i,e){let t=i.def;return e.x=i.x+t.hitDx,e.y=t.hitY,e.hw=t.hitW/2,e.hh=t.hitH/2,e}function gu(i,e){return i.sliding?(e.x=i.x,e.y=.5,e.hw=.9,e.hh=.65):(e.x=i.x,e.y=i.y+.95,e.hw=.75,e.hh=1.05),e}function _u(i,e){return i.sliding?(e.x=i.x,e.y=.4,e.hw=.62,e.hh=.4):(e.x=i.x,e.y=i.y+.82,e.hw=.34,e.hh=.82),e}var Li=oe.WORLD,Ro=new U(5,3.6,20),xu={normal:8257438,recycled:2945167,rare:1692927,gold:16765503};function vu(){let i=document.getElementById("stage"),e=document.getElementById("gl"),t=new kr({canvas:e,antialias:!0,powerPreference:"high-performance"});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=new Hr,s=new zt(40,16/9,.5,300);s.position.copy(Ro);let r=new oo(n),o=new lo(n),a=new fo(n),l=Vh(n),c=new po,u=new mo(n,document.getElementById("flash")),h={state:Oe.MENU,prev:Oe.MENU,returnTo:"menu",t:0,lives:oe.LIVES,seed:0,name:"PLAYER",high:0,speedMult:1,curSpeed:0,phaseId:1,rankId:oe.RANK_BASE.id,boss:{active:!1,left:0,total:0,variant:null,diff:null},cdT:0,cdN:4,overT:0,tagT:0,pauseCd:0,last:null,res:null,tNow:0,hint:0},f=new U,p=new Ne,g={x:0,y:0,hw:0,hh:0},_={x:0,y:0,hw:0,hh:0},m={x:0,y:0,hw:0,hh:0},d={x:0,y:0,hw:.5,hh:.5};function E(){let O=i.clientWidth||1280,re=i.clientHeight||720;t.setSize(O,re,!1),s.aspect=O/re,s.updateProjectionMatrix()}new ResizeObserver(E).observe(i),window.addEventListener("resize",E),E();let b=()=>h.state===Oe.PLAYING||h.state===Oe.BOSS,x=O=>{h.prev=h.state,h.state=O};function P(O,re,he){return f.set(O,re,0).project(s),he.x=(f.x*.5+.5)*100,he.y=(-f.y*.5+.5)*100,he}function w(O){h.name=String(O||"").trim().toUpperCase().slice(0,10)||"PLAYER",h.seed=Dh(),a.reset(h.seed),c.reset(),o.reset(),u.reset(),l.hide(),h.t=0,h.lives=oe.LIVES,h.phaseId=1,h.rankId=oe.RANK_BASE.id,h.boss={active:!1,left:0,total:0,variant:null,diff:null},h.speedMult=1,h.curSpeed=Li.BASE_SPEED,h.high=vs.best(),h.res=null,h.hint=7,r.bossF=0,De.resetHudCache(),De.feedback.clear(),De.hudShow(!0),De.show("none"),De.runTag("NEW RUN \u2022 "+a.director.profile.label+" \u2022 #"+Nh(h.seed)),h.tagT=4,h.cdT=0,h.cdN=4,x(Oe.COUNTDOWN),en.setActive(!1),Xe.startMusic("run"),Xe.setMode("run")}function A(O){h.cdT-=O,h.cdT<=0&&(h.cdN--,h.cdN>0?(De.countdown(String(h.cdN)),Xe.tick(!1),h.cdT=.8):h.cdN===0?(De.countdown("GO!"),Xe.tick(!0),h.cdT=.6,en.setActive(!0),en.clear()):(De.hideCountdown(),x(Oe.PLAYING)))}function R(){b()&&(x(Oe.PAUSED),en.setActive(!1),De.show("pause"))}function S(){h.state!==Oe.PAUSED&&!(h.state===Oe.SETTINGS&&h.returnTo==="pause")||(h.state=h.boss.active?Oe.BOSS:Oe.PLAYING,De.show("none"),h.pauseCd=.3,en.setActive(!0),en.clear())}function y(O){h.boss={active:!0,left:O.duration,total:O.duration,variant:O.variant,diff:O.diff},a.clearAhead(14),a.distToNext=Math.max(a.distToNext,14),l.show(O.variant.id,O.diff.id),x(Oe.BOSS),De.feedback.push({text:O.variant.name+"!",sub:O.diff.label+" \u2022 BERTAHAN "+O.duration+" DETIK",cls:"boss",dur:oe.BOSS.WARN,prio:7}),Xe.boss(),Xe.setMode("boss"),u.shake(.25,.5),u.flash("#ff2a4d",.3)}function I(){let O=h.boss.diff||oe.BOSS.DIFFICULTIES.normal;h.boss.active=!1,l.hide(),x(Oe.PLAYING);let re=c.addBonus(O.bonus,!1);o.comboGuard=Math.max(o.comboGuard,O.comboGuard),O.grantShield&&!o.shield&&(o.shield=!0),a.spawnBossReward(O,a.director.rng),De.bumpScore();let he=["+"+re+" BONUS","COMBO GUARD"];O.grantShield&&he.push("+SHIELD"),De.feedback.push({text:"BOSS CLEARED!",sub:he.join(" \u2022 "),cls:"gold",dur:2,prio:6}),Xe.bossWin(),Xe.setMode("run"),u.burst(1,2.5,1,16765503,40,8),u.ring(0,1.5,16765503,4)}function G(){let O=Vn(c.meters);if(O.id>h.phaseId){h.phaseId=O.id;let he=O.id>=5?"boss":O.id>=4?"gold":"cyan";De.feedback.push({text:"PHASE "+O.id+" \u2022 "+O.name,sub:"SPEED "+O.speedMin.toFixed(2)+"x+",cls:he,dur:1.7,prio:5}),Xe.combo(Math.min(7,O.id))}let re=Bs(c.score);if(re.id!==h.rankId&&(h.rankId=re.id,re.id!==oe.RANK_BASE.id)){let he=re.id==="champion",ge=re.id==="legend",C=he?"\u{1F451} STIKER JUARA TERBUKA!":ge?"\u{1F381} STICKER LIMITED TERBUKA!":"KEJAR ECO LEGEND ("+oe.REWARDS.legend.minScore.toLocaleString("id-ID")+")";De.feedback.push({text:he?"\u{1F3C6} ECO CHAMPION! \u2605":ge?"ECO LEGEND UNLOCKED!":re.name+"!",sub:C,cls:he?"gold":ge?"green":"cyan",dur:he?2.5:ge?2.1:1.5,prio:he?8:ge?7:5}),he?(Xe.highScore(),u.burst(o.x,2,.5,16765503,45,9),u.ring(o.x,1.4,16765503,4.5)):ge?(Xe.reward(),u.burst(o.x,1.8,.5,3800992,32,7),u.ring(o.x,1.4,3800992,3.6)):(Xe.combo(4),u.ring(o.x,1.4,1692927,2.8))}}function k(){x(Oe.GAME_OVER),h.overT=1.1,en.setActive(!1),h.boss.active=!1,l.hide(),Xe.stopMusic(),Xe.gameOver(),De.feedback.clear()}function B(){let O=Math.floor(c.score),re=Bs(O),he=vs.add({name:h.name,score:O,distance:c.meters,plastic:c.plastic,rank:re.id,comboMax:c.comboMax});h.res={name:h.name,score:O,meters:c.meters,plastic:c.plastic,maxLevel:c.maxLevel,rank:re,position:he.position,isTop1:he.isTop1,entry:he.entry},De.hudShow(!1),De.show("none"),x(Oe.GAME_OVER),o.reset(),o.idle=!0,a.reset(1),l.hide(),u.reset(),Xe.startMusic("menu"),Xe.setMode("menu"),De.showOver(h.res)}function X(){let O=h.res;if(!O)return;let re=Wn.claim(O.entry.id,O.score,O.name);re.ok||re.reason==="claimed"?(x(Oe.REWARD),De.showClaim({rank:re.rank,prize:re.prize,fullPrize:re.fullPrize,badge:re.badge,code:re.code},O)):De.showOver(O,!1)}function z(){De.hudShow(!1),De.show("menu"),x(Oe.MENU),o.reset(),o.idle=!0,a.reset(1),l.hide(),u.reset(),en.setActive(!1),Xe.startMusic("menu"),Xe.setMode("menu")}function Q(O){let re=h.state;re===Oe.PAUSED?h.returnTo="pause":h.returnTo="menu",(re===Oe.GAME_OVER||re===Oe.REWARD)&&(h.returnTo="over"),x(O),O===Oe.LEADERBOARD?(De.renderLB(h.res?h.res.entry.id:null),De.show("lb")):O===Oe.HOW_TO_PLAY?De.show("how"):O===Oe.SETTINGS&&(De.syncSettings(),De.show("set"))}function H(){let O=h.returnTo;O==="pause"?(h.state=Oe.PAUSED,De.show("pause")):O==="over"&&h.res?(h.state=Oe.GAME_OVER,De.showOver(h.res,!1)):z()}function ie(O){O.hit=!0;let re=O.x+O.def.hitDx,he=O.def.hitY;if(o.speed>0){O.x=Li.DESPAWN_X-1,c.addBonus(oe.SCORE.smash,o.boost>0),u.burst(re,he,.5,16757575,22,9),u.shake(.12,.15),Xe.smash();return}if(o.shield){o.shield=!1,o.inv=1.05,O.x=Li.DESPAWN_X-1,u.ring(o.x,1,1692927,4),u.burst(o.x,1,.5,1692927,26,8),u.shake(.12,.2),Xe.shield();let C=P(o.x,o.y+2.4,p);De.floatAt(c.combo>0?"SHIELD \u2022 COMBO SAVED!":"SHIELD BLOCK!","rare",C.x,C.y);return}h.lives--;let ge=o.comboGuard>0&&c.combo>0;if(ge?o.comboGuard=0:c.breakCombo(),o.hurt(),u.shake(.4,.4),u.flash("#ff2a4d",.4),u.burst(o.x,1,.5,16731486,24,7),Xe.hit(),h.lives<=0){k();return}De.feedback.push({text:ge?"COMBO PROTECTED!":"OUCH!",sub:ge?"Combo tetap terjaga":"",cls:ge?"gold":"boss",dur:.95,prio:7})}function le(O){O.taken=!0,o.pickup();let re=c.collect(O.tier,o.boost>0);De.bumpScore();let he=xu[O.tier]||xu.normal,ge=O.tier==="gold"?28:O.tier==="rare"?18:O.tier==="recycled"?14:10;u.burst(O.x,O.y,.5,he,ge,O.tier==="normal"?4:6);let C=P(o.x,o.y+2.4,p);O.tier==="normal"?(Xe.collect(re.level),De.floatAt("+"+re.pts+" PLASTIC","normal",C.x,C.y)):O.tier==="recycled"?(Xe.collect(re.level+1),u.ring(O.x,O.y,he,1.9),De.floatAt("+"+re.pts+" RECYCLED","normal",C.x,C.y)):O.tier==="rare"?(Xe.rare(),u.ring(O.x,O.y,he,2.5),De.floatAt("+"+re.pts+" RARE","rare",C.x,C.y)):(Xe.gold(),u.ring(O.x,O.y,he,3.5),u.slowmo(.48,.2),u.shake(.08,.15),De.feedback.push({text:"GOLDEN +"+re.pts,cls:"gold",dur:.9,prio:3})),re.levelUp&&(Xe.combo(re.level),De.feedback.push({text:"COMBO x"+(re.level+1),sub:re.level>=7?"MAX MULTIPLIER!":"",cls:re.level>=5?"gold":"green",dur:1,prio:4}))}let ye={boost:"ECO BOOST",magnet:"ECO MAGNET",shield:"ECO SHIELD",speed:"SPEED BOOST"};function ze(O){O.taken=!0,o.pickup(),O.kind==="boost"?o.boost=oe.POWER.boost:O.kind==="magnet"?o.magnet=oe.POWER.magnet:O.kind==="shield"?o.shield=!0:(o.speed=oe.POWER.speed,c.addBonus(oe.SCORE.speedBoostBonus,o.boost>0)),c.addBonus(oe.SCORE.power,!1),Xe.power(),u.ring(o.x,1,16765503,3.4),u.burst(o.x,1.2,.5,16777215,16,6);let re=P(o.x,o.y+2.4,p);De.floatAt(ye[O.kind],"info",re.x,re.y)}function $e(O){if(_u(o,g),o.inv<=0&&o.hitT<=0){for(let ge of a.obstacles)if(!(ge.hit||ge.x>3||ge.x<-3)&&Ao(g,mu(ge,_))&&(ie(ge),!b()))return}for(let ge of a.obstacles)!ge.passed&&ge.x+ge.def.hitDx+ge.def.hitW/2<o.x-.5&&(ge.passed=!0,c.cleared++);gu(o,m);let re=o.magnet>0,he=o.y+1;for(let ge of a.loot)if(!ge.taken){if(re&&ge.x<12.5&&ge.x>-1){let C=o.x-ge.x,Lt=he-ge.y;if(Math.hypot(C,Lt)<8.5){let Ze=Math.min(1,O*9.5);ge.x+=C*Ze,ge.y+=Lt*Ze}}d.x=ge.x,d.y=ge.y,Ao(m,d)&&le(ge)}for(let ge of a.powers){if(ge.taken)continue;d.x=ge.x,d.y=ge.y,d.hw=.75,d.hh=.75;let C=Ao(m,d);d.hw=.5,d.hh=.5,C&&ze(ge)}}function Y(O,re){let he=h.tNow;s.position.x=Ro.x+Math.sin(he*.5)*.18,s.position.y=Ro.y+o.y*.1+Math.sin(he*.7)*.05,s.position.z=Ro.z-(re-1)*1.25,u.shakeOffset(p),s.position.x+=p.x,s.position.y+=p.y,s.lookAt(5.4,2.2+o.y*.12,0)}function ee(){let O=Vn(c.meters),re=Ih(c.score),he=b()?a.upcomingWarning(o.x):null;De.setHud({score:c.score,high:h.high,meters:c.meters,plastic:c.plastic,speed:h.speedMult,lives:h.lives,level:c.level,combo:c.combo,phase:O,tier:re,boss:h.boss,warn:he,hint:h.hint>0&&b(),powers:{boost:o.boost,magnet:o.magnet,shield:o.shield,speed:o.speed,guard:o.comboGuard}})}function xe(O){requestAnimationFrame(xe);let re=h.last===null?.016:Math.min(.05,(O-h.last)/1e3);h.last=O,ae(re,!0)}function ae(O,re){h.tNow+=O,h.pauseCd>0&&(h.pauseCd-=O);let he=h.state,ge=1;if(he===Oe.PLAYING||he===Oe.BOSS)if(h.pauseCd<=0&&en.takePause())R();else{h.pauseCd>0&&en.takePause();let C=O*u.timeScale();h.t+=C,h.hint>0&&(h.hint-=C),h.speedMult=Ph(c.meters);let Lt=h.boss.active&&h.boss.diff?h.boss.diff.speedMult:1,Je=Math.min(oe.BOSS.MAX_TOTAL_SPEED_MULT,h.speedMult*Lt)*(o.speed>0?1.32:1),Ze=Li.BASE_SPEED*Je;h.curSpeed+=(Ze-h.curSpeed)*Math.min(1,C*3.8);let Ce=h.curSpeed*C;ge=h.curSpeed/Li.BASE_SPEED;let ot=o.update(C,en.takeJump(),en.slideHeld());if(ot.jumped&&(Xe.jump(),u.burst(o.x-.2,.1,.4,12582888,6,3)),ot.landed&&(Xe.land(),u.burst(o.x,.1,.4,12582888,6,3)),ot.slideStart&&Xe.slide(),c.addDistance(Ce,o.boost>0,o.speed>0),a.update(C,Ce,{dist:c.meters,t:h.t,speed:h.curSpeed,boss:h.boss.active,bossVariant:h.boss.variant?h.boss.variant.id:null,bossDiff:h.boss.diff?h.boss.diff.id:null},h.tNow,()=>l.pulseAttack()),$e(C),h.state!==Oe.GAME_OVER){if(G(),h.boss.active)h.boss.left-=C,h.boss.left<=0&&I();else{let v=a.director.checkBossTrigger(c.meters,c.score,c.level);v&&y(v)}l.update(C,h.tNow,h.boss.active);let Ie=Vn(c.meters);r.update(C,Ce,h.boss.active?h.boss.variant:null,Ie);let T=Ii((ge-1.08)*1.15+(Ie.id-1)*.12+(h.boss.active?.25:0)+(o.speed>0?.55:0),0,1.3);u.update(C,O,h.curSpeed,T),ee()}h.tagT>0&&(h.tagT-=O,h.tagT<=0&&De.runTag(""))}else if(he===Oe.COUNTDOWN){A(O);let C=Li.BASE_SPEED*.6*O;o.update(O,!1,!1),r.update(O,C,null,oe.PHASES[0]),u.update(O,O,Li.BASE_SPEED,0),ee(),h.tagT>0&&(h.tagT-=O,h.tagT<=0&&De.runTag(""))}else if(he===Oe.GAME_OVER&&h.overT>0){h.overT-=O,h.curSpeed*=.94;let C=h.curSpeed*O;o.update(O,!1,!1),l.update(O,h.tNow,!1),r.update(O,C,null,Vn(c.meters)),a.update(0,C,{dist:c.meters,t:h.t,boss:!1,speed:1},h.tNow),u.update(O,O,0,0),h.overT<=0&&B()}else he===Oe.PAUSED||he===Oe.SETTINGS&&h.returnTo==="pause"?u.update(0,O,0,0):(o.idle=!0,o.update(O,!1,!1),l.update(O,h.tNow,!1),r.update(O,3.2*O,null,oe.PHASES[0]),u.update(O,O,0,0));De.feedback.update(O),Y(O,ge),re&&t.render(n,s)}document.addEventListener("visibilitychange",()=>{document.hidden&&R()}),window.addEventListener("blur",()=>R());let be={getState:()=>h.state,play:O=>w(O),playAgain:()=>{De.show("name"),x(Oe.MENU)},restart:()=>w(h.name),resume:S,back:H,go:Q,toMenu:z,claim:X};function Be(){let O=Pi.get();Xe.setVolumes(O.music,O.sfx),De.init(be),o.idle=!0,De.show("menu"),requestAnimationFrame(xe)}return window.__plv={step:ae,g:h,score:c,player:o,spawner:a,world:r,fx:u,startRun:w,STATE:Oe},{start:Be}}function yu(){try{vu().start()}catch(i){console.error(i);let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;display:grid;place-items:center;background:#06100e;color:#fff;font:20px sans-serif;text-align:center;padding:24px",e.textContent="Game tidak bisa dimulai. Pastikan browser mendukung WebGL (Chrome/Edge terbaru).",document.body.appendChild(e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",yu):yu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
