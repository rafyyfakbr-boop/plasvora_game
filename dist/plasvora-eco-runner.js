(()=>{var yl="170";var pu=0,$l=1,mu=2;var eh=1,gu=2,Un=3,ii=0,Ye=1,dn=2,ti=0,ji=1,si=2,Ql=3,jl=4,_u=5,vi=100,xu=101,vu=102,yu=103,Mu=104,Su=200,bu=201,Eu=202,Tu=203,ia=204,sa=205,wu=206,Au=207,Ru=208,Cu=209,Pu=210,Iu=211,Lu=212,Du=213,Uu=214,ra=0,oa=1,aa=2,is=3,la=4,ca=5,ha=6,ua=7,Ml=0,Nu=1,Ou=2,ei=0,Bu=1,Fu=2,zu=3,ku=4,Hu=5,Vu=6,Gu=7;var nh=300,ss=301,rs=302,da=303,fa=304,Qr=306,Ls=1e3,Mi=1001,pa=1002,pn=1003,Wu=1004;var qs=1005;var bn=1006,To=1007;var Si=1008;var zn=1009,ih=1010,sh=1011,Ds=1012,Sl=1013,bi=1014,On=1015,Os=1016,bl=1017,El=1018,os=1020,rh=35902,oh=1021,ah=1022,fn=1023,lh=1024,ch=1025,ts=1026,as=1027,hh=1028,Tl=1029,uh=1030,wl=1031;var Al=1033,vr=33776,yr=33777,Mr=33778,Sr=33779,ma=35840,ga=35841,_a=35842,xa=35843,va=36196,ya=37492,Ma=37496,Sa=37808,ba=37809,Ea=37810,Ta=37811,wa=37812,Aa=37813,Ra=37814,Ca=37815,Pa=37816,Ia=37817,La=37818,Da=37819,Ua=37820,Na=37821,br=36492,Oa=36494,Ba=36495,dh=36283,Fa=36284,za=36285,ka=36286;var Er=2300,Ha=2301,wo=2302,tc=2400,ec=2401,nc=2402;var Xu=3200,qu=3201;var Rl=0,Yu=1,Qn="",Xe="srgb",fs="srgb-linear",jr="linear",he="srgb";var Ui=7680;var ic=519,Zu=512,Ju=513,Ku=514,fh=515,$u=516,Qu=517,ju=518,td=519,Va=35044;var sc="300 es",Bn=2e3,Tr=2001,ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ao=Math.PI/180,Ga=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function ed(i,t){return(i%t+t)%t}function Ro(i,t,e){return(1-e)*i+e*t}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Gt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],E=s[1],b=s[4],_=s[7],I=s[2],w=s[5],A=s[8];return r[0]=o*x+a*E+l*I,r[3]=o*m+a*b+l*w,r[6]=o*d+a*_+l*A,r[1]=c*x+u*E+h*I,r[4]=c*m+u*b+h*w,r[7]=c*d+u*_+h*A,r[2]=f*x+p*E+g*I,r[5]=f*m+p*b+g*w,r[8]=f*d+p*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,g=e*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Co=new Gt;function ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){let i=wr("canvas");return i.style.display="block",i}var rc={};function Cs(i){i in rc||(rc[i]=!0,console.warn(i))}function id(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rd(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ee={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qn?jr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var oc=[.64,.33,.3,.6,.15,.06],ac=[.2126,.7152,.0722],lc=[.3127,.329],cc=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[fs]:{primaries:oc,whitePoint:lc,transfer:jr,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:ac,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:oc,whitePoint:lc,transfer:he,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:ac,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});var Ni,Wa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=wr("canvas")),Ni.width=t.width,Ni.height=t.height;let n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},od=0,Ar=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Po(s[o].image)):r.push(Po(s[o]))}else r=Po(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Po(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Wa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ad=0,Qe=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=bn,o=Si,a=fn,l=zn,c=i.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=ni(),this.name="",this.source=new Ar(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=nh;Qe.DEFAULT_ANISOTROPY=1;var Me=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,_=(p+1)/2,I=(d+1)/2,w=(u+f)/4,A=(h+x)/4,R=(g+m)/4;return b>_&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=R/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-x)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends ri{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ar(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Xa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends Qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-a,d=l*f+c*p+u*g+h*x,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let I=Math.sqrt(b),w=Math.atan2(I,d*E);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}let _=a*E;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+x*_,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-a*p,t[e+2]=c*g+u*p+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Io.copy(this).projectOnVector(t),this.sub(Io)}reflect(t){return this.sub(Io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Io=new N,uc=new oi,Ei=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),Zs.subVectors(this.max,Ss),Oi.subVectors(t.a,Ss),Bi.subVectors(t.b,Ss),Fi.subVectors(t.c,Ss),qn.subVectors(Bi,Oi),Yn.subVectors(Fi,Bi),di.subVectors(Oi,Fi);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-di.z,di.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,di.z,0,-di.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-di.y,di.x,0];return!Lo(e,Oi,Bi,Fi,Zs)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,Oi,Bi,Fi,Zs))?!1:(Js.crossVectors(qn,Yn),e=[Js.x,Js.y,Js.z],Lo(e,Oi,Bi,Fi,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new N,new N,new N,new N,new N,new N,new N,new N],cn=new N,Ys=new Ei,Oi=new N,Bi=new N,Fi=new N,qn=new N,Yn=new N,di=new N,Ss=new N,Zs=new N,Js=new N,fi=new N;function Lo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);let a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ld=new Ei,bs=new N,Do=new N,ls=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Do)),this.expandByPoint(bs.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new N,Uo=new N,Ks=new N,Zn=new N,No=new N,$s=new N,Oo=new N,Cr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Uo.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Zn.copy(this.origin).sub(Uo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=Zn.dot(this.direction),l=-Zn.dot(Ks),c=Zn.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Uo).addScaledVector(Ks,f),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,r){No.subVectors(e,t),$s.subVectors(n,t),Oo.crossVectors(No,$s);let o=this.direction.dot(Oo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zn.subVectors(this.origin,t);let l=a*this.direction.dot($s.crossVectors(Zn,$s));if(l<0)return null;let c=a*this.direction.dot(No.cross(Zn));if(c<0||l+c>o)return null;let u=-a*Zn.dot(Oo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,p,g,x,m)}set(t,e,n,s,r,o,a,l,c,u,h,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,p=l*h,g=c*u,x=c*h;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,p=l*h,g=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,p=o*h,g=a*u,x=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cd,t,hd)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Jn.crossVectors(n,Ke),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Jn.crossVectors(n,Ke)),Jn.normalize(),Qs.crossVectors(Ke,Jn),s[0]=Jn.x,s[4]=Qs.x,s[8]=Ke.x,s[1]=Jn.y,s[5]=Qs.y,s[9]=Ke.y,s[2]=Jn.z,s[6]=Qs.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],E=n[3],b=n[7],_=n[11],I=n[15],w=s[0],A=s[4],R=s[8],S=s[12],y=s[1],C=s[5],G=s[9],z=s[13],B=s[2],X=s[6],k=s[10],$=s[14],H=s[3],it=s[7],at=s[11],vt=s[15];return r[0]=o*w+a*y+l*B+c*H,r[4]=o*A+a*C+l*X+c*it,r[8]=o*R+a*G+l*k+c*at,r[12]=o*S+a*z+l*$+c*vt,r[1]=u*w+h*y+f*B+p*H,r[5]=u*A+h*C+f*X+p*it,r[9]=u*R+h*G+f*k+p*at,r[13]=u*S+h*z+f*$+p*vt,r[2]=g*w+x*y+m*B+d*H,r[6]=g*A+x*C+m*X+d*it,r[10]=g*R+x*G+m*k+d*at,r[14]=g*S+x*z+m*$+d*vt,r[3]=E*w+b*y+_*B+I*H,r[7]=E*A+b*C+_*X+I*it,r[11]=E*R+b*G+_*k+I*at,r[15]=E*S+b*z+_*$+I*vt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+x*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],E=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,b=g*f*c-u*m*c-g*l*p+o*m*p+u*l*d-o*f*d,_=u*x*c-g*h*c+g*a*p-o*x*p-u*a*d+o*h*d,I=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,w=e*E+n*b+s*_+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return t[0]=E*A,t[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*A,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*A,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*A,t[4]=b*A,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*A,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*A,t[8]=_*A,t[9]=(g*h*r-u*x*r-g*n*p+e*x*p+u*n*d-e*h*d)*A,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*d+e*a*d)*A,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*p-e*a*p)*A,t[12]=I*A,t[13]=(u*x*s-g*h*s+g*n*f-e*x*f-u*n*m+e*h*m)*A,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*A,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*f+e*a*f)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,g=r*h,x=o*u,m=o*h,d=a*h,E=l*c,b=l*u,_=l*h,I=n.x,w=n.y,A=n.z;return s[0]=(1-(x+d))*I,s[1]=(p+_)*I,s[2]=(g-b)*I,s[3]=0,s[4]=(p-_)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(g+b)*A,s[9]=(m-E)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);let c=1/r,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Bn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),p,g;if(a===Bn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Tr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn){let l=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),f=(e+t)*c,p=(n+s)*u,g,x;if(a===Bn)g=(o+r)*h,x=-2*h;else if(a===Tr)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new N,hn=new xe,cd=new N(0,0,0),hd=new N(1,1,1),Jn=new N,Qs=new N,Ke=new N,dc=new xe,fc=new oi,mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ud=0,pc=new N,ki=new oi,In=new xe,js=new N,Es=new N,dd=new N,fd=new oi,mc=new N(1,0,0),gc=new N(0,1,0),_c=new N(0,0,1),xc={type:"added"},pd={type:"removed"},Hi={type:"childadded",child:null},Bo={type:"childremoved",child:null},Ie=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new mn,n=new oi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Gt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(gc,t)}rotateZ(t){return this.rotateOnAxis(_c,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(gc,t)}translateZ(t){return this.translateOnAxis(_c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Es,js,this.up):In.lookAt(js,Es,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(In),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pd),Bo.child=t,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new N(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new N,Ln=new N,Fo=new N,Dn=new N,Vi=new N,Gi=new N,vc=new N,zo=new N,ko=new N,Ho=new N,Vo=new Me,Go=new Me,Wo=new Me,jn=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Ln.subVectors(n,e),Fo.subVectors(t,e);let o=un.dot(un),a=un.dot(Ln),l=un.dot(Fo),c=Ln.dot(Ln),u=Ln.dot(Fo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vo.setScalar(0),Go.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Go,r.y),o.addScaledVector(Wo,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Ln.subVectors(t,e),un.cross(Ln).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vi.subVectors(s,n),Gi.subVectors(r,n),zo.subVectors(t,n);let l=Vi.dot(zo),c=Gi.dot(zo);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,s);let u=Vi.dot(ko),h=Gi.dot(ko);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Vi,o);Ho.subVectors(t,r);let p=Vi.dot(Ho),g=Gi.dot(Ho);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gi,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return vc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(vc,a);let d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Xo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=ed(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xo(o,r,t+1/3),this.g=Xo(o,r,t),this.b=Xo(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let n=mh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return ee.fromWorkingColorSpace(Ne.copy(this),t),Math.round(qe(Ne.r*255,0,255))*65536+Math.round(qe(Ne.g*255,0,255))*256+Math.round(qe(Ne.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ne.copy(this),e);let n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Xe){ee.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,n=Ne.g,s=Ne.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(tr);let n=Ro(Kn.h,tr.h,e),s=Ro(Kn.s,tr.s,e),r=Ro(Kn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Lt;Lt.NAMES=mh;var md=0,En=class extends ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=ni(),this.name="",this.blending=ji,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jt=class extends En{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new N,er=new Ut,Ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}};var Ir=class extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},gd=0,nn=new xe,qo=new Ie,Wi=new N,$e=new Ei,Ts=new Ei,Re=new N,Te=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?Lr:Ir)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors($e.min,Ts.min),$e.expandByPoint(Re),Re.addVectors($e.max,Ts.max),$e.expandByPoint(Re)):($e.expandByPoint(Ts.min),$e.expandByPoint(Ts.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Re.fromBufferAttribute(a,c),l&&(Wi.fromBufferAttribute(t,c),Re.add(Wi)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;let c=new N,u=new N,h=new N,f=new Ut,p=new Ut,g=new Ut,x=new N,m=new N;function d(R,S,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(x),a[S].add(x),a[y].add(x),l[R].add(m),l[S].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,S=E.length;R<S;++R){let y=E[R],C=y.start,G=y.count;for(let z=C,B=C+G;z<B;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new N,_=new N,I=new N,w=new N;function A(R){I.fromBufferAttribute(s,R),w.copy(I);let S=a[R];b.copy(S),b.sub(I.multiplyScalar(I.dot(S))).normalize(),_.crossVectors(w,S);let C=_.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,S=E.length;R<S;++R){let y=E[R],C=y.start,G=y.count;for(let z=C,B=C+G;z<B;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Ce(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yc=new xe,pi=new Cr,nr=new ls,Mc=new N,ir=new N,sr=new N,rr=new N,Yo=new N,or=new N,Sc=new N,ar=new N,jt=class extends Ie{constructor(t=new Te,e=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Yo.fromBufferAttribute(h,t),o?or.addScaledVector(Yo,u):or.addScaledVector(Yo.sub(e),u))}e.add(or)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(nr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(nr,Mc)===null||pi.origin.distanceToSquared(Mc)>(t.far-t.near)**2))&&(yc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(yc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,I=b;_<I;_+=3){let w=a.getX(_),A=a.getX(_+1),R=a.getX(_+2);s=lr(this,d,t,n,c,u,h,w,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let E=a.getX(m),b=a.getX(m+1),_=a.getX(m+2);s=lr(this,o,t,n,c,u,h,E,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=E,I=b;_<I;_+=3){let w=_,A=_+1,R=_+2;s=lr(this,d,t,n,c,u,h,w,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let E=m,b=m+1,_=m+2;s=lr(this,o,t,n,c,u,h,E,b,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function _d(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ii,a),l===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);let u=_d(i,t,e,n,ir,sr,rr,Sc);if(u){let h=new N;jn.getBarycoord(Sc,ir,sr,rr,h),s&&(u.uv=jn.getInterpolatedAttribute(s,a,l,c,h,new Ut)),r&&(u.uv1=jn.getInterpolatedAttribute(r,a,l,c,h,new Ut)),o&&(u.normal=jn.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};jn.getNormal(ir,sr,rr,f.normal),u.face=f,u.barycoord=h}return u}var zt=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(h,2));function g(x,m,d,E,b,_,I,w,A,R,S){let y=_/A,C=I/R,G=_/2,z=I/2,B=w/2,X=A+1,k=R+1,$=0,H=0,it=new N;for(let at=0;at<k;at++){let vt=at*C-z;for(let kt=0;kt<X;kt++){let $t=kt*y-G;it[x]=$t*E,it[m]=vt*b,it[d]=B,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[d]=w>0?1:-1,u.push(it.x,it.y,it.z),h.push(kt/A),h.push(1-at/R),$+=1}}for(let at=0;at<R;at++)for(let vt=0;vt<A;vt++){let kt=f+vt+X*at,$t=f+vt+X*(at+1),Y=f+(vt+1)+X*(at+1),tt=f+(vt+1)+X*at;l.push(kt,$t,tt),l.push($t,Y,tt),H+=6}a.addGroup(p,H,S),p+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function xd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var vd={clone:cs,merge:Be},yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends En{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=xd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Dr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new N,bc=new Ut,Ec=new Ut,Fe=class extends Dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,bc,Ec),e.subVectors(Ec,bc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xi=-90,qi=1,Ya=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(Xi,qi,t,e);s.layers=this.layers,this.add(s);let r=new Fe(Xi,qi,t,e);r.layers=this.layers,this.add(r);let o=new Fe(Xi,qi,t,e);o.layers=this.layers,this.add(o);let a=new Fe(Xi,qi,t,e);a.layers=this.layers,this.add(a);let l=new Fe(Xi,qi,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ur=class extends Qe{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Za=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ur(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ti});r.uniforms.tEquirect.value=e;let o=new jt(s,r),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=bn),new Ya(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Zo=new N,Sd=new N,bd=new Gt,Nn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zo.subVectors(n,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Zo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bd.getNormalMatrix(t),s=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new ls,cr=new N,Us=class{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],E=s[13],b=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+o,f+u,m+g,_+E).normalize(),n[3].setComponents(l-o,f-u,m-g,_-E).normalize(),n[4].setComponents(l-a,f-h,m-x,_-b).normalize(),e===Bn)n[5].setComponents(l+a,f+h,m+x,_+b).normalize();else if(e===Tr)n[5].setComponents(a,h,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _h(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ze=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){let E=d*f-o;for(let b=0;b<c;b++){let _=b*h-r;g.push(_,-E,0),x.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let b=E+c*d,_=E+c*(d+1),I=E+1+c*(d+1),w=E+1+c*d;p.push(b,_,w),p.push(_,I,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wd=`#ifdef USE_ALPHAHASH
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
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,zd=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ff=`#ifdef USE_GRADIENTMAP
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
}`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_f=`uniform bool receiveShadow;
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
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,Tf=`
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nf=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hp=`float getShadowMask() {
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
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wp=`uniform sampler2D t2D;
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Lp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Up=`#define DISTANCE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,zp=`#include <common>
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
}`,kp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,Zp=`#define PHONG
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
}`,Jp=`#define STANDARD
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
}`,Kp=`#define STANDARD
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
}`,$p=`#define TOON
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
}`,Qp=`#define TOON
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
}`,jp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,sm=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Td,alphahash_pars_fragment:wd,alphamap_fragment:Ad,alphamap_pars_fragment:Rd,alphatest_fragment:Cd,alphatest_pars_fragment:Pd,aomap_fragment:Id,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Od,bsdfs:Bd,iridescence_fragment:Fd,bumpmap_pars_fragment:zd,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Yd,common:Zd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:$d,displacementmap_vertex:Qd,emissivemap_fragment:jd,emissivemap_pars_fragment:tf,colorspace_fragment:ef,colorspace_pars_fragment:nf,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:of,envmap_pars_vertex:af,envmap_physical_pars_fragment:xf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:hf,fog_fragment:uf,fog_pars_fragment:df,gradientmap_pars_fragment:ff,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:_f,lights_toon_fragment:vf,lights_toon_pars_fragment:yf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:bf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:wf,lights_fragment_end:Af,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Cf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:If,map_fragment:Lf,map_pars_fragment:Df,map_particle_fragment:Uf,map_particle_pars_fragment:Nf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Bf,morphinstance_vertex:Ff,morphcolor_vertex:zf,morphnormal_vertex:kf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Vf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:qf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Qf,opaque_fragment:jf,packing:tp,premultiplied_alpha_fragment:ep,project_vertex:np,dithering_fragment:ip,dithering_pars_fragment:sp,roughnessmap_fragment:rp,roughnessmap_pars_fragment:op,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:lp,shadowmap_vertex:cp,shadowmask_pars_fragment:hp,skinbase_vertex:up,skinning_pars_vertex:dp,skinning_vertex:fp,skinnormal_vertex:pp,specularmap_fragment:mp,specularmap_pars_fragment:gp,tonemapping_fragment:_p,tonemapping_pars_fragment:xp,transmission_fragment:vp,transmission_pars_fragment:yp,uv_pars_fragment:Mp,uv_pars_vertex:Sp,uv_vertex:bp,worldpos_vertex:Ep,background_vert:Tp,background_frag:wp,backgroundCube_vert:Ap,backgroundCube_frag:Rp,cube_vert:Cp,cube_frag:Pp,depth_vert:Ip,depth_frag:Lp,distanceRGBA_vert:Dp,distanceRGBA_frag:Up,equirect_vert:Np,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:Fp,meshbasic_vert:zp,meshbasic_frag:kp,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:Xp,meshnormal_frag:qp,meshphong_vert:Yp,meshphong_frag:Zp,meshphysical_vert:Jp,meshphysical_frag:Kp,meshtoon_vert:$p,meshtoon_frag:Qp,points_vert:jp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:sm},lt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Mn={basic:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Be([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Be([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Be([lt.points,lt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Be([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Be([lt.common,lt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Be([lt.sprite,lt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Be([lt.common,lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Be([lt.lights,lt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Mn.physical={uniforms:Be([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var hr={r:0,b:0,g:0},gi=new mn,rm=new xe;function om(i,t,e,n,s,r,o){let a=new Lt(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function x(E){let b=!1,_=g(E);_===null?d(a,l):_&&_.isColor&&(d(_,1),b=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){let _=g(b);_&&(_.isCubeTexture||_.mapping===Qr)?(u===void 0&&(u=new jt(new zt(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:cs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gi.copy(b.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(gi)),u.material.toneMapped=ee.getTransfer(_.colorSpace)!==he,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new jt(new ze(2,2),new Tn({name:"BackgroundMaterial",uniforms:cs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ee.getTransfer(_.colorSpace)!==he,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,b){E.getRGB(hr,gh(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:x,addToRenderList:m}}function am(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,C,G,z,B){let X=!1,k=h(z,G,C);r!==k&&(r=k,c(r.object)),X=p(y,z,G,B),X&&g(y,z,G,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(y,C,G,z),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,C,G){let z=G.wireframe===!0,B=n[y.id];B===void 0&&(B={},n[y.id]=B);let X=B[C.id];X===void 0&&(X={},B[C.id]=X);let k=X[z];return k===void 0&&(k=f(l()),X[z]=k),k}function f(y){let C=[],G=[],z=[];for(let B=0;B<e;B++)C[B]=0,G[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,C,G,z){let B=r.attributes,X=C.attributes,k=0,$=G.getAttributes();for(let H in $)if($[H].location>=0){let at=B[H],vt=X[H];if(vt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),at===void 0||at.attribute!==vt||vt&&at.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function g(y,C,G,z){let B={},X=C.attributes,k=0,$=G.getAttributes();for(let H in $)if($[H].location>=0){let at=X[H];at===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));let vt={};vt.attribute=at,at&&at.data&&(vt.data=at.data),B[H]=vt,k++}r.attributes=B,r.attributesNum=k,r.index=z}function x(){let y=r.newAttributes;for(let C=0,G=y.length;C<G;C++)y[C]=0}function m(y){d(y,0)}function d(y,C){let G=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;G[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),B[y]!==C&&(i.vertexAttribDivisor(y,C),B[y]=C)}function E(){let y=r.newAttributes,C=r.enabledAttributes;for(let G=0,z=C.length;G<z;G++)C[G]!==y[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function b(y,C,G,z,B,X,k){k===!0?i.vertexAttribIPointer(y,C,G,B,X):i.vertexAttribPointer(y,C,G,z,B,X)}function _(y,C,G,z){x();let B=z.attributes,X=G.getAttributes(),k=C.defaultAttributeValues;for(let $ in X){let H=X[$];if(H.location>=0){let it=B[$];if(it===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){let at=it.normalized,vt=it.itemSize,kt=t.get(it);if(kt===void 0)continue;let $t=kt.buffer,Y=kt.type,tt=kt.bytesPerElement,_t=Y===i.INT||Y===i.UNSIGNED_INT||it.gpuType===Sl;if(it.isInterleavedBufferAttribute){let ot=it.data,bt=ot.stride,Bt=it.offset;if(ot.isInstancedInterleavedBuffer){for(let O=0;O<H.locationSize;O++)d(H.location+O,ot.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let O=0;O<H.locationSize;O++)m(H.location+O);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let O=0;O<H.locationSize;O++)b(H.location+O,vt/H.locationSize,Y,at,bt*tt,(Bt+vt/H.locationSize*O)*tt,_t)}else{if(it.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)d(H.location+ot,it.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ot=0;ot<H.locationSize;ot++)b(H.location+ot,vt/H.locationSize,Y,at,vt*tt,vt/H.locationSize*ot*tt,_t)}}else if(k!==void 0){let at=k[$];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(H.location,at);break;case 3:i.vertexAttrib3fv(H.location,at);break;case 4:i.vertexAttrib4fv(H.location,at);break;default:i.vertexAttrib1fv(H.location,at)}}}}E()}function I(){R();for(let y in n){let C=n[y];for(let G in C){let z=C[G];for(let B in z)u(z[B].object),delete z[B];delete C[G]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let G in C){let z=C[G];for(let B in z)u(z[B].object),delete z[B];delete C[G]}delete n[y.id]}function A(y){for(let C in n){let G=n[C];if(G[y.id]===void 0)continue;let z=G[y.id];for(let B in z)u(z[B].object),delete z[B];delete G[y.id]}}function R(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function lm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function cm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let R=A===Os&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==On&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:I,maxSamples:w}}function hm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Nn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let E=r?0:n,b=E*4,_=d.clippingState||null;l.value=_,_=u(g,f,b,p);for(let I=0;I!==b;++I)_[I]=e[I];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,_=p;b!==x;++b,_+=4)o.copy(h[b]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function um(i){let t=new WeakMap;function e(o,a){return a===da?o.mapping=ss:a===fa&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===da||a===fa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Za(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Nr=class extends Dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,Tc=[.125,.215,.35,.446,.526,.582],yi=20,Jo=new Nr,wc=new Lt,Ko=null,$o=0,Qo=0,jo=!1,xi=(1+Math.sqrt(5))/2,Yi=1/xi,Ac=[new N(-xi,Yi,0),new N(xi,Yi,0),new N(-Yi,0,xi),new N(Yi,0,xi),new N(0,xi,-Yi),new N(0,xi,Yi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Or=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ko,$o,Qo),this._renderer.xr.enabled=jo,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ko=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Os,format:fn,colorSpace:fs,depthBuffer:!1},s=Rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(r)),this._blurMaterial=fm(r,t,e)}return s}_compileMaterial(t){let e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,Jo)}_sceneToCubeUV(t,e,n,s){let a=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wc),u.toneMapping=ei,u.autoClear=!1;let p=new Jt({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),g=new jt(new zt,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(wc),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let b=this._cubeSize;ur(s,E*b,d>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Jo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ac[(s-r-1)%Ac.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new jt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*yi-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);let d=[],E=0;for(let A=0;A<yi;++A){let R=A/x,S=Math.exp(-R*R/2);d.push(S),A===0?E+=S:A<m&&(E+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let _=this._sizeLods[s],I=3*_*(s>b-Qi?s-b+Qi:0),w=4*(this._cubeSize-_);ur(e,I,w,3*_,2*_),l.setRenderTarget(e),l.render(h,Jo)}};function dm(i){let t=[],e=[],n=[],s=i,r=i-Qi+1+Tc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Qi?l=Tc[o-i+Qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,E=new Float32Array(x*g*p),b=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let w=0;w<p;w++){let A=w%3*2/3-1,R=w>2?0:-1,S=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];E.set(S,x*g*w),b.set(f,m*g*w);let y=[w,w,w,w,w,w];_.set(y,d*g*w)}let I=new Te;I.setAttribute("position",new Ce(E,x)),I.setAttribute("uv",new Ce(b,m)),I.setAttribute("faceIndex",new Ce(_,d)),t.push(I),s>Qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Rc(i,t,e){let n=new kn(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fm(i,t,e){let n=new Float32Array(yi),s=new N(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Pc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function pm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===da||l===fa,u=l===ss||l===rs;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Or(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Or(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gm(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let b=0,_=E.length;b<_;b+=3){let I=E[b+0],w=E[b+1],A=E[b+2];f.push(I,w,w,A,A,I)}}else if(g!==void 0){let E=g.array;x=g.version;for(let b=0,_=E.length/3-1;b<_;b+=3){let I=b+0,w=b+1,A=b+2;f.push(I,w,w,A,A,I)}}else return;let m=new(ph(f)?Lr:Ir)(f,1);m.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function _m(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*x[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vm(i,t,e){let n=new WeakMap,s=new Me;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;p===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let _=a.attributes.position.count*b,I=1;_>t.maxTextureSize&&(I=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*I*4*h),A=new Rr(w,_,I,h);A.type=On,A.needsUpdate=!0;let R=b*4;for(let y=0;y<h;y++){let C=m[y],G=d[y],z=E[y],B=_*I*4*y;for(let X=0;X<C.count;X++){let k=X*R;p===!0&&(s.fromBufferAttribute(C,X),w[B+k+0]=s.x,w[B+k+1]=s.y,w[B+k+2]=s.z,w[B+k+3]=0),g===!0&&(s.fromBufferAttribute(G,X),w[B+k+4]=s.x,w[B+k+5]=s.y,w[B+k+6]=s.z,w[B+k+7]=0),x===!0&&(s.fromBufferAttribute(z,X),w[B+k+8]=s.x,w[B+k+9]=s.y,w[B+k+10]=s.z,w[B+k+11]=z.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Ut(_,I)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ym(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Br=class extends Qe{constructor(t,e,n,s,r,o,a,l,c,u=ts){if(u!==ts&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=bi),n===void 0&&u===as&&(n=os),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},xh=new Qe,Ic=new Br(1,1),vh=new Rr,yh=new qa,Mh=new Ur,Lc=[],Dc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Oc=new Float32Array(4);function ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lc[s];if(r===void 0&&(r=new Float32Array(s),Lc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function to(i,t){let e=Dc[t];e===void 0&&(e=new Int32Array(t),Dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Oc.set(n),i.uniformMatrix2fv(this.addr,!1,Oc),Ae(e,n)}}function wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Nc.set(n),i.uniformMatrix3fv(this.addr,!1,Nc),Ae(e,n)}}function Am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Uc.set(n),i.uniformMatrix4fv(this.addr,!1,Uc),Ae(e,n)}}function Rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ic.compareFunction=fh,r=Ic):r=xh,e.setTexture2D(t||r,s)}function Bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yh,s)}function Fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mh,s)}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vh,s)}function km(i){switch(i){case 5126:return Mm;case 35664:return Sm;case 35665:return bm;case 35666:return Em;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Im;case 5125:return Lm;case 36294:return Dm;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(i,t){i.uniform1fv(this.addr,t)}function Vm(i,t){let e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){let e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function Wm(i,t){let e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function Xm(i,t){let e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qm(i,t){let e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ym(i,t){let e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zm(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function Km(i,t){i.uniform3iv(this.addr,t)}function $m(i,t){i.uniform4iv(this.addr,t)}function Qm(i,t){i.uniform1uiv(this.addr,t)}function jm(i,t){i.uniform2uiv(this.addr,t)}function tg(i,t){i.uniform3uiv(this.addr,t)}function eg(i,t){i.uniform4uiv(this.addr,t)}function ng(i,t,e){let n=this.cache,s=t.length,r=to(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xh,r[o])}function ig(i,t,e){let n=this.cache,s=t.length,r=to(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yh,r[o])}function sg(i,t,e){let n=this.cache,s=t.length,r=to(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mh,r[o])}function rg(i,t,e){let n=this.cache,s=t.length,r=to(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vh,r[o])}function og(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return $m;case 5125:return Qm;case 36294:return jm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}var Ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=km(e.type)}},Ka=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=og(e.type)}},$a=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ta=/(\w+)(\])?(\[|\.)?/g;function Bc(i,t){i.seq.push(t),i.map[t.id]=t}function ag(i,t,e){let n=i.name,s=n.length;for(ta.lastIndex=0;;){let r=ta.exec(n),o=ta.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bc(e,c===void 0?new Ja(a,i,t):new Ka(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new $a(a),Bc(e,h)),e=h}}}var ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ag(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Fc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lg=37297,cg=0;function hg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var zc=new Gt;function ug(i){ee._getMatrix(zc,ee.workingColorSpace,i);let t=`mat3( ${zc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case jr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+hg(i.getShaderSource(t),o)}else return s}function dg(i,t){let e=ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fg(i,t){let e;switch(t){case Bu:e="Linear";break;case Fu:e="Reinhard";break;case zu:e="Cineon";break;case ku:e="ACESFilmic";break;case Vu:e="AgX";break;case Gu:e="Neutral";break;case Hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var dr=new N;function pg(){ee.getLuminanceCoefficients(dr);let i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function gg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ps(i){return i!==""}function Hc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(xg,yg)}var vg=new Map;function yg(i,t){let e=qt[t];if(e===void 0){let n=vg.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}var Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(Mg,Sg)}function Sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Eg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ml:t="ENVMAP_BLENDING_MULTIPLY";break;case Nu:t="ENVMAP_BLENDING_MIX";break;case Ou:t="ENVMAP_BLENDING_ADD";break}return t}function Ag(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bg(e),c=Eg(e),u=Tg(e),h=wg(e),f=Ag(e),p=mg(e),g=gg(r),x=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ps).join(`
`),d.length>0&&(d+=`
`)):(m=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),d=[Wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?qt.tonemapping_pars_fragment:"",e.toneMapping!==ei?fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,dg("linearToOutputTexel",e.outputColorSpace),pg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ps).join(`
`)),o=Qa(o),o=Hc(o,e),o=Vc(o,e),a=Qa(a),a=Hc(a,e),a=Vc(a,e),o=Gc(o),a=Gc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=E+m+o,_=E+d+a,I=Fc(s,s.VERTEX_SHADER,b),w=Fc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(I).trim(),B=s.getShaderInfoLog(w).trim(),X=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,w);else{let $=kc(s,I,"vertex"),H=kc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+$+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||B==="")&&(k=!1);k&&(C.diagnostics={runnable:X,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:d}})}s.deleteShader(I),s.deleteShader(w),R=new ns(s,x),S=_g(s,x)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,lg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}var Cg=0,ja=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tl(t),e.set(t,n)),n}},tl=class{constructor(t){this.id=Cg++,this.code=t,this.usedTimes=0}};function Pg(i,t,e,n,s,r,o){let a=new Pr,l=new ja,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,G,z){let B=G.fog,X=z.geometry,k=S.isMeshStandardMaterial?G.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),H=$&&$.mapping===Qr?$.image.height:null,it=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let at=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,vt=at!==void 0?at.length:0,kt=0;X.morphAttributes.position!==void 0&&(kt=1),X.morphAttributes.normal!==void 0&&(kt=2),X.morphAttributes.color!==void 0&&(kt=3);let $t,Y,tt,_t;if(it){let ae=Mn[it];$t=ae.vertexShader,Y=ae.fragmentShader}else $t=S.vertexShader,Y=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),_t=l.getFragmentShaderID(S);let ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Bt=z.isInstancedMesh===!0,O=z.isBatchedMesh===!0,rt=!!S.map,ct=!!S.matcap,St=!!$,P=!!S.aoMap,Pe=!!S.lightMap,Kt=!!S.bumpMap,Zt=!!S.normalMap,Ct=!!S.displacementMap,oe=!!S.emissiveMap,Pt=!!S.metalnessMap,T=!!S.roughnessMap,v=S.anisotropy>0,F=S.clearcoat>0,J=S.dispersion>0,Q=S.iridescence>0,Z=S.sheen>0,At=S.transmission>0,ut=v&&!!S.anisotropyMap,xt=F&&!!S.clearcoatMap,te=F&&!!S.clearcoatNormalMap,et=F&&!!S.clearcoatRoughnessMap,yt=Q&&!!S.iridescenceMap,It=Q&&!!S.iridescenceThicknessMap,Nt=Z&&!!S.sheenColorMap,Mt=Z&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,Xt=!!S.specularColorMap,fe=!!S.specularIntensityMap,L=At&&!!S.transmissionMap,ht=At&&!!S.thicknessMap,q=!!S.gradientMap,K=!!S.alphaMap,pt=S.alphaTest>0,dt=!!S.alphaHash,Ht=!!S.extensions,ye=ei;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ye=i.toneMapping);let De={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:O,batchingColor:O&&z._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&z.instanceColor!==null,instancingMorph:Bt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:fs,alphaToCoverage:!!S.alphaToCoverage,map:rt,matcap:ct,envMap:St,envMapMode:St&&$.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:Pe,bumpMap:Kt,normalMap:Zt,displacementMap:f&&Ct,emissiveMap:oe,normalMapObjectSpace:Zt&&S.normalMapType===Yu,normalMapTangentSpace:Zt&&S.normalMapType===Rl,metalnessMap:Pt,roughnessMap:T,anisotropy:v,anisotropyMap:ut,clearcoat:F,clearcoatMap:xt,clearcoatNormalMap:te,clearcoatRoughnessMap:et,dispersion:J,iridescence:Q,iridescenceMap:yt,iridescenceThicknessMap:It,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:Mt,specularMap:Qt,specularColorMap:Xt,specularIntensityMap:fe,transmission:At,transmissionMap:L,thicknessMap:ht,gradientMap:q,opaque:S.transparent===!1&&S.blending===ji&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:pt,alphaHash:dt,combine:S.combine,mapUv:rt&&x(S.map.channel),aoMapUv:P&&x(S.aoMap.channel),lightMapUv:Pe&&x(S.lightMap.channel),bumpMapUv:Kt&&x(S.bumpMap.channel),normalMapUv:Zt&&x(S.normalMap.channel),displacementMapUv:Ct&&x(S.displacementMap.channel),emissiveMapUv:oe&&x(S.emissiveMap.channel),metalnessMapUv:Pt&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:ut&&x(S.anisotropyMap.channel),clearcoatMapUv:xt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:It&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(S.sheenRoughnessMap.channel),specularMapUv:Qt&&x(S.specularMap.channel),specularColorMapUv:Xt&&x(S.specularColorMap.channel),specularIntensityMapUv:fe&&x(S.specularIntensityMap.channel),transmissionMapUv:L&&x(S.transmissionMap.channel),thicknessMapUv:ht&&x(S.thicknessMap.channel),alphaMapUv:K&&x(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Zt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(rt||K),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:bt,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:rt&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===he,decodeVideoTextureEmissive:oe&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===he,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===Ye,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ht&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&S.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function d(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(E(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let y=g[S.type],C;if(y){let G=Mn[y];C=vd.clone(G.uniforms)}else C=S.uniforms;return C}function I(S,y){let C;for(let G=0,z=u.length;G<z;G++){let B=u[G];if(B.cacheKey===y){C=B,++C.usedTimes;break}}return C===void 0&&(C=new Rg(i,y,S,r),u.push(C)),C}function w(S){if(--S.usedTimes===0){let y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:I,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:R}}function Ig(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Lg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,p,g,x,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function a(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,g,x,m){let d=o(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Lg),n.length>1&&n.sort(f||Xc),s.length>1&&s.sort(f||Xc)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Dg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new qc,i.set(n,[o])):s>=r.length?(o=new qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Lt};break;case"SpotLight":e={position:new N,direction:new N,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Og=0;function Bg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fg(i){let t=new Ug,e=Ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new xe,o=new xe;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,E=0,b=0,_=0,I=0,w=0,A=0;c.sort(Bg);for(let S=0,y=c.length;S<y;S++){let C=c[S],G=C.color,z=C.intensity,B=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=G.r*z,h+=G.g*z,f+=G.b*z;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],z);A++}else if(C.isDirectionalLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let $=C.shadow,H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=k,p++}else if(C.isSpotLight){let k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(G).multiplyScalar(z),k.distance=B,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[x]=k;let $=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,$.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=$.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=X,_++}x++}else if(C.isRectAreaLight){let k=t.get(C);k.color.copy(G).multiplyScalar(z),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){let $=C.shadow,H=e.get(C);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=k,g++}else if(C.isHemisphereLight){let k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(z),k.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==E||R.numPointShadows!==b||R.numSpotShadows!==_||R.numSpotMaps!==I||R.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=_+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=E,R.numPointShadows=b,R.numSpotShadows=_,R.numSpotMaps=I,R.numLightProbes=A,n.version=Og++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0,m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let b=c[d];if(b.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(b.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Yc(i){let t=new Fg(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Yc(i),t.set(s,[a])):r>=o.length?(a=new Yc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var el=class extends En{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nl=class extends En{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
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
}`;function Vg(i,t,e){let n=new Us,s=new Ut,r=new Ut,o=new Me,a=new el({depthPacking:qu}),l=new nl,c={},u=e.maxTextureSize,h={[ii]:Ye,[Ye]:ii,[dn]:dn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:kg,fragmentShader:Hg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new jt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let d=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ti),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=d!==Un&&this.type===Un,B=d===Un&&this.type!==Un;for(let X=0,k=w.length;X<k;X++){let $=w[X],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||z===!0||B===!0){let vt=this.type!==Un?{minFilter:pn,magFilter:pn}:{};H.map!==null&&H.map.dispose(),H.map=new kn(s.x,s.y,vt),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let at=H.getViewportCount();for(let vt=0;vt<at;vt++){let kt=H.getViewport(vt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),G.viewport(o),H.updateMatrices($,vt),n=H.getFrustum(),_(A,R,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&E(H,R),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,C)};function E(w,A){let R=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,R,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,R,p,x,null)}function b(w,A,R,S){let y=null,C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)y=C;else if(y=R.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=y.uuid,z=A.uuid,B=c[G];B===void 0&&(B={},c[G]=B);let X=B[z];X===void 0&&(X=y.clone(),B[z]=X,A.addEventListener("dispose",I)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,S===Un?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let G=i.properties.get(y);G.light=R}return y}function _(w,A,R,S,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Un)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let z=t.update(w),B=w.material;if(Array.isArray(B)){let X=z.groups;for(let k=0,$=X.length;k<$;k++){let H=X[k],it=B[H.materialIndex];if(it&&it.visible){let at=b(w,it,S,y);w.onBeforeShadow(i,w,A,R,z,at,H),i.renderBufferDirect(R,null,z,at,w,H),w.onAfterShadow(i,w,A,R,z,at,H)}}}else if(B.visible){let X=b(w,B,S,y);w.onBeforeShadow(i,w,A,R,z,X,null),i.renderBufferDirect(R,null,z,X,w,null),w.onAfterShadow(i,w,A,R,z,X,null)}}let G=w.children;for(let z=0,B=G.length;z<B;z++)_(G[z],A,R,S,y)}function I(w){w.target.removeEventListener("dispose",I);for(let R in c){let S=c[R],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var Gg={[ra]:oa,[aa]:ha,[la]:ua,[is]:ca,[oa]:ra,[ha]:aa,[ua]:la,[ca]:is};function Wg(i,t){function e(){let L=!1,ht=new Me,q=null,K=new Me(0,0,0,0);return{setMask:function(pt){q!==pt&&!L&&(i.colorMask(pt,pt,pt,pt),q=pt)},setLocked:function(pt){L=pt},setClear:function(pt,dt,Ht,ye,De){De===!0&&(pt*=ye,dt*=ye,Ht*=ye),ht.set(pt,dt,Ht,ye),K.equals(ht)===!1&&(i.clearColor(pt,dt,Ht,ye),K.copy(ht))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ht=!1,q=null,K=null,pt=null;return{setReversed:function(dt){if(ht!==dt){let Ht=t.get("EXT_clip_control");ht?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);let ye=pt;pt=null,this.setClear(ye)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(dt){q!==dt&&!L&&(i.depthMask(dt),q=dt)},setFunc:function(dt){if(ht&&(dt=Gg[dt]),K!==dt){switch(dt){case ra:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case aa:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ca:i.depthFunc(i.GEQUAL);break;case ha:i.depthFunc(i.GREATER);break;case ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=dt}},setLocked:function(dt){L=dt},setClear:function(dt){pt!==dt&&(ht&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){L=!1,q=null,K=null,pt=null,ht=!1}}}function s(){let L=!1,ht=null,q=null,K=null,pt=null,dt=null,Ht=null,ye=null,De=null;return{setTest:function(ae){L||(ae?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ae){ht!==ae&&!L&&(i.stencilMask(ae),ht=ae)},setFunc:function(ae,an,An){(q!==ae||K!==an||pt!==An)&&(i.stencilFunc(ae,an,An),q=ae,K=an,pt=An)},setOp:function(ae,an,An){(dt!==ae||Ht!==an||ye!==An)&&(i.stencilOp(ae,an,An),dt=ae,Ht=an,ye=An)},setLocked:function(ae){L=ae},setClear:function(ae){De!==ae&&(i.clearStencil(ae),De=ae)},reset:function(){L=!1,ht=null,q=null,K=null,pt=null,dt=null,Ht=null,ye=null,De=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,b=null,_=null,I=null,w=null,A=new Lt(0,0,0),R=0,S=!1,y=null,C=null,G=null,z=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,$=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=$>=2);let it=null,at={},vt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),$t=new Me().fromArray(vt),Y=new Me().fromArray(kt);function tt(L,ht,q,K){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<q;Ht++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ht+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let _t={};_t[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(is),Kt(!1),Zt($l),ot(i.CULL_FACE),P(ti);function ot(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function bt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Bt(L,ht){return h[L]!==ht?(i.bindFramebuffer(L,ht),h[L]=ht,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function O(L,ht){let q=p,K=!1;if(L){q=f.get(ht),q===void 0&&(q=[],f.set(ht,q));let pt=L.textures;if(q.length!==pt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ht=pt.length;dt<Ht;dt++)q[dt]=i.COLOR_ATTACHMENT0+dt;q.length=pt.length,K=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,K=!0);K&&i.drawBuffers(q)}function rt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let ct={[vi]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[vu]:i.FUNC_REVERSE_SUBTRACT};ct[yu]=i.MIN,ct[Mu]=i.MAX;let St={[Su]:i.ZERO,[bu]:i.ONE,[Eu]:i.SRC_COLOR,[ia]:i.SRC_ALPHA,[Pu]:i.SRC_ALPHA_SATURATE,[Ru]:i.DST_COLOR,[wu]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[Cu]:i.ONE_MINUS_DST_COLOR,[Au]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Lu]:i.ONE_MINUS_CONSTANT_COLOR,[Du]:i.CONSTANT_ALPHA,[Uu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,ht,q,K,pt,dt,Ht,ye,De,ae){if(L===ti){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(ot(i.BLEND),x=!0),L!==_u){if(L!==m||ae!==S){if((d!==vi||_!==vi)&&(i.blendEquation(i.FUNC_ADD),d=vi,_=vi),ae)switch(L){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,I=null,w=null,A.set(0,0,0),R=0,m=L,S=ae}return}pt=pt||ht,dt=dt||q,Ht=Ht||K,(ht!==d||pt!==_)&&(i.blendEquationSeparate(ct[ht],ct[pt]),d=ht,_=pt),(q!==E||K!==b||dt!==I||Ht!==w)&&(i.blendFuncSeparate(St[q],St[K],St[dt],St[Ht]),E=q,b=K,I=dt,w=Ht),(ye.equals(A)===!1||De!==R)&&(i.blendColor(ye.r,ye.g,ye.b,De),A.copy(ye),R=De),m=L,S=!1}function Pe(L,ht){L.side===dn?bt(i.CULL_FACE):ot(i.CULL_FACE);let q=L.side===Ye;ht&&(q=!q),Kt(q),L.blending===ji&&L.transparent===!1?P(ti):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Zt(L){L!==pu?(ot(i.CULL_FACE),L!==C&&(L===$l?i.cullFace(i.BACK):L===mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),C=L}function Ct(L){L!==G&&(k&&i.lineWidth(L),G=L)}function oe(L,ht,q){L?(ot(i.POLYGON_OFFSET_FILL),(z!==ht||B!==q)&&(i.polygonOffset(ht,q),z=ht,B=q)):bt(i.POLYGON_OFFSET_FILL)}function Pt(L){L?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+X-1),it!==L&&(i.activeTexture(L),it=L)}function v(L,ht,q){q===void 0&&(it===null?q=i.TEXTURE0+X-1:q=it);let K=at[q];K===void 0&&(K={type:void 0,texture:void 0},at[q]=K),(K.type!==L||K.texture!==ht)&&(it!==q&&(i.activeTexture(q),it=q),i.bindTexture(L,ht||_t[L]),K.type=L,K.texture=ht)}function F(){let L=at[it];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){$t.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function Mt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Qt(L,ht){let q=c.get(ht);q===void 0&&(q=new WeakMap,c.set(ht,q));let K=q.get(L);K===void 0&&(K=i.getUniformBlockIndex(ht,L.name),q.set(L,K))}function Xt(L,ht){let K=c.get(ht).get(L);l.get(ht)!==K&&(i.uniformBlockBinding(ht,K,L.__bindingPointIndex),l.set(ht,K))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},it=null,at={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,E=null,b=null,_=null,I=null,w=null,A=new Lt(0,0,0),R=0,S=!1,y=null,C=null,G=null,z=null,B=null,$t.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:Bt,drawBuffers:O,useProgram:rt,setBlending:P,setMaterial:Pe,setFlipSided:Kt,setCullFace:Zt,setLineWidth:Ct,setPolygonOffset:oe,setScissorTest:Pt,activeTexture:T,bindTexture:v,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:yt,texImage3D:It,updateUBOMapping:Qt,uniformBlockBinding:Xt,texStorage2D:te,texStorage3D:et,texSubImage2D:Z,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:xt,scissor:Nt,viewport:Mt,reset:fe}}function Zc(i,t,e,n){let s=Xg(n);switch(e){case oh:return i*t;case lh:return i*t;case ch:return i*t*2;case hh:return i*t/s.components*s.byteLength;case Tl:return i*t/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case ah:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Al:return i*t*4/s.components*s.byteLength;case vr:case yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case xa:return Math.max(i,16)*Math.max(t,8)/4;case ma:case _a:return Math.max(i,8)*Math.max(t,8)/2;case va:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case br:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case dh:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xg(i){switch(i){case zn:case ih:return{byteLength:1,components:1};case Ds:case sh:case Os:return{byteLength:2,components:1};case bl:case El:return{byteLength:2,components:4};case bi:case Sl:case On:return{byteLength:4,components:1};case rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function qg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):wr("canvas")}function x(T,v,F){let J=1,Q=Pt(T);if((Q.width>F||Q.height>F)&&(J=F/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let Z=Math.floor(J*Q.width),At=Math.floor(J*Q.height);h===void 0&&(h=g(Z,At));let ut=v?g(Z,At):h;return ut.width=Z,ut.height=At,ut.getContext("2d").drawImage(T,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+At+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,v,F,J,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=v;if(v===i.RED&&(F===i.FLOAT&&(Z=i.R32F),F===i.HALF_FLOAT&&(Z=i.R16F),F===i.UNSIGNED_BYTE&&(Z=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.R8UI),F===i.UNSIGNED_SHORT&&(Z=i.R16UI),F===i.UNSIGNED_INT&&(Z=i.R32UI),F===i.BYTE&&(Z=i.R8I),F===i.SHORT&&(Z=i.R16I),F===i.INT&&(Z=i.R32I)),v===i.RG&&(F===i.FLOAT&&(Z=i.RG32F),F===i.HALF_FLOAT&&(Z=i.RG16F),F===i.UNSIGNED_BYTE&&(Z=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RG8UI),F===i.UNSIGNED_SHORT&&(Z=i.RG16UI),F===i.UNSIGNED_INT&&(Z=i.RG32UI),F===i.BYTE&&(Z=i.RG8I),F===i.SHORT&&(Z=i.RG16I),F===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),F===i.UNSIGNED_INT&&(Z=i.RGB32UI),F===i.BYTE&&(Z=i.RGB8I),F===i.SHORT&&(Z=i.RGB16I),F===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),F===i.UNSIGNED_INT&&(Z=i.RGBA32UI),F===i.BYTE&&(Z=i.RGBA8I),F===i.SHORT&&(Z=i.RGBA16I),F===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),v===i.RGBA){let At=Q?jr:ee.getTransfer(J);F===i.FLOAT&&(Z=i.RGBA32F),F===i.HALF_FLOAT&&(Z=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Z=At===he?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(T,v){let F;return T?v===null||v===bi||v===os?F=i.DEPTH24_STENCIL8:v===On?F=i.DEPTH32F_STENCIL8:v===Ds&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bi||v===os?F=i.DEPTH_COMPONENT24:v===On?F=i.DEPTH_COMPONENT32F:v===Ds&&(F=i.DEPTH_COMPONENT16),F}function I(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==pn&&T.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){let v=T.target;v.removeEventListener("dispose",w),R(v),v.isVideoTexture&&u.delete(v)}function A(T){let v=T.target;v.removeEventListener("dispose",A),y(v)}function R(T){let v=n.get(T);if(v.__webglInit===void 0)return;let F=T.source,J=f.get(F);if(J){let Q=J[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(T),Object.keys(J).length===0&&f.delete(F)}n.remove(T)}function S(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let F=T.source,J=f.get(F);delete J[v.__cacheKey],o.memory.textures--}function y(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let Q=0;Q<v.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let F=T.textures;for(let J=0,Q=F.length;J<Q;J++){let Z=n.get(F[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(F[J])}n.remove(T)}let C=0;function G(){C=0}function z(){let T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function B(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function X(T,v){let F=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,T,v);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function k(T,v){let F=n.get(T);if(T.version>0&&F.__version!==T.version){Y(F,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function $(T,v){let F=n.get(T);if(T.version>0&&F.__version!==T.version){Y(F,T,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function H(T,v){let F=n.get(T);if(T.version>0&&F.__version!==T.version){tt(F,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let it={[Ls]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},at={[pn]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},vt={[Zu]:i.NEVER,[td]:i.ALWAYS,[Ju]:i.LESS,[fh]:i.LEQUAL,[Ku]:i.EQUAL,[ju]:i.GEQUAL,[$u]:i.GREATER,[Qu]:i.NOTEQUAL};function kt(T,v){if(v.type===On&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===To||v.magFilter===qs||v.magFilter===Si||v.minFilter===bn||v.minFilter===To||v.minFilter===qs||v.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,it[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,it[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,it[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,vt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===pn||v.minFilter!==qs&&v.minFilter!==Si||v.type===On&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));let J=v.source,Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));let Z=B(v);if(Z!==T.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[Z].usedTimes++;let At=Q[T.__cacheKey];At!==void 0&&(Q[T.__cacheKey].usedTimes--,At.usedTimes===0&&S(v)),T.__cacheKey=Z,T.__webglTexture=Q[Z].texture}return F}function Y(T,v,F){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let Q=$t(T,v),Z=v.source;e.bindTexture(J,T.__webglTexture,i.TEXTURE0+F);let At=n.get(Z);if(Z.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+F);let ut=ee.getPrimaries(ee.workingColorSpace),xt=v.colorSpace===Qn?null:ee.getPrimaries(v.colorSpace),te=v.colorSpace===Qn||ut===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let et=x(v.image,!1,s.maxTextureSize);et=oe(v,et);let yt=r.convert(v.format,v.colorSpace),It=r.convert(v.type),Nt=b(v.internalFormat,yt,It,v.colorSpace,v.isVideoTexture);kt(J,v);let Mt,Qt=v.mipmaps,Xt=v.isVideoTexture!==!0,fe=At.__version===void 0||Q===!0,L=Z.dataReady,ht=I(v,et);if(v.isDepthTexture)Nt=_(v.format===as,v.type),fe&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,yt,It,null));else if(v.isDataTexture)if(Qt.length>0){Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,Qt[0].width,Qt[0].height);for(let q=0,K=Qt.length;q<K;q++)Mt=Qt[q],Xt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Mt.width,Mt.height,yt,It,Mt.data):e.texImage2D(i.TEXTURE_2D,q,Nt,Mt.width,Mt.height,0,yt,It,Mt.data);v.generateMipmaps=!1}else Xt?(fe&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,yt,It,et.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,yt,It,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xt&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Nt,Qt[0].width,Qt[0].height,et.depth);for(let q=0,K=Qt.length;q<K;q++)if(Mt=Qt[q],v.format!==fn)if(yt!==null)if(Xt){if(L)if(v.layerUpdates.size>0){let pt=Zc(Mt.width,Mt.height,v.format,v.type);for(let dt of v.layerUpdates){let Ht=Mt.data.subarray(dt*pt/Mt.data.BYTES_PER_ELEMENT,(dt+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,dt,Mt.width,Mt.height,1,yt,Ht)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Mt.width,Mt.height,et.depth,yt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Nt,Mt.width,Mt.height,et.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Mt.width,Mt.height,et.depth,yt,It,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Nt,Mt.width,Mt.height,et.depth,0,yt,It,Mt.data)}else{Xt&&fe&&e.texStorage2D(i.TEXTURE_2D,ht,Nt,Qt[0].width,Qt[0].height);for(let q=0,K=Qt.length;q<K;q++)Mt=Qt[q],v.format!==fn?yt!==null?Xt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Nt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Mt.width,Mt.height,yt,It,Mt.data):e.texImage2D(i.TEXTURE_2D,q,Nt,Mt.width,Mt.height,0,yt,It,Mt.data)}else if(v.isDataArrayTexture)if(Xt){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,Nt,et.width,et.height,et.depth),L)if(v.layerUpdates.size>0){let q=Zc(et.width,et.height,v.format,v.type);for(let K of v.layerUpdates){let pt=et.data.subarray(K*q/et.data.BYTES_PER_ELEMENT,(K+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,yt,It,pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,yt,It,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,yt,It,et.data);else if(v.isData3DTexture)Xt?(fe&&e.texStorage3D(i.TEXTURE_3D,ht,Nt,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,yt,It,et.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,yt,It,et.data);else if(v.isFramebufferTexture){if(fe)if(Xt)e.texStorage2D(i.TEXTURE_2D,ht,Nt,et.width,et.height);else{let q=et.width,K=et.height;for(let pt=0;pt<ht;pt++)e.texImage2D(i.TEXTURE_2D,pt,Nt,q,K,0,yt,It,null),q>>=1,K>>=1}}else if(Qt.length>0){if(Xt&&fe){let q=Pt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,ht,Nt,q.width,q.height)}for(let q=0,K=Qt.length;q<K;q++)Mt=Qt[q],Xt?L&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,yt,It,Mt):e.texImage2D(i.TEXTURE_2D,q,Nt,yt,It,Mt);v.generateMipmaps=!1}else if(Xt){if(fe){let q=Pt(et);e.texStorage2D(i.TEXTURE_2D,ht,Nt,q.width,q.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,It,et)}else e.texImage2D(i.TEXTURE_2D,0,Nt,yt,It,et);m(v)&&d(J),At.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function tt(T,v,F){if(v.image.length!==6)return;let J=$t(T,v),Q=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);let Z=n.get(Q);if(Q.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+F);let At=ee.getPrimaries(ee.workingColorSpace),ut=v.colorSpace===Qn?null:ee.getPrimaries(v.colorSpace),xt=v.colorSpace===Qn||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let te=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let K=0;K<6;K++)!te&&!et?yt[K]=x(v.image[K],!0,s.maxCubemapSize):yt[K]=et?v.image[K].image:v.image[K],yt[K]=oe(v,yt[K]);let It=yt[0],Nt=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),Qt=b(v.internalFormat,Nt,Mt,v.colorSpace),Xt=v.isVideoTexture!==!0,fe=Z.__version===void 0||J===!0,L=Q.dataReady,ht=I(v,It);kt(i.TEXTURE_CUBE_MAP,v);let q;if(te){Xt&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Qt,It.width,It.height);for(let K=0;K<6;K++){q=yt[K].mipmaps;for(let pt=0;pt<q.length;pt++){let dt=q[pt];v.format!==fn?Nt!==null?Xt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Qt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,dt.width,dt.height,Nt,Mt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,Qt,dt.width,dt.height,0,Nt,Mt,dt.data)}}}else{if(q=v.mipmaps,Xt&&fe){q.length>0&&ht++;let K=Pt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Qt,K.width,K.height)}for(let K=0;K<6;K++)if(et){Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt[K].width,yt[K].height,Nt,Mt,yt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qt,yt[K].width,yt[K].height,0,Nt,Mt,yt[K].data);for(let pt=0;pt<q.length;pt++){let Ht=q[pt].image[K].image;Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Ht.width,Ht.height,Nt,Mt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Qt,Ht.width,Ht.height,0,Nt,Mt,Ht.data)}}else{Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Nt,Mt,yt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Qt,Nt,Mt,yt[K]);for(let pt=0;pt<q.length;pt++){let dt=q[pt];Xt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Nt,Mt,dt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,Qt,Nt,Mt,dt.image[K])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _t(T,v,F,J,Q,Z){let At=r.convert(F.format,F.colorSpace),ut=r.convert(F.type),xt=b(F.internalFormat,At,ut,F.colorSpace),te=n.get(v),et=n.get(F);if(et.__renderTarget=v,!te.__hasExternalTextures){let yt=Math.max(1,v.width>>Z),It=Math.max(1,v.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,xt,yt,It,v.depth,0,At,ut,null):e.texImage2D(Q,Z,xt,yt,It,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Zt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,et.__webglTexture,0,Kt(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,et.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let J=v.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Z=_(v.stencilBuffer,Q),At=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=Kt(v);Zt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Z,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{let J=v.textures;for(let Q=0;Q<J.length;Q++){let Z=J[Q],At=r.convert(Z.format,Z.colorSpace),ut=r.convert(Z.type),xt=b(Z.internalFormat,At,ut,Z.colorSpace),te=Kt(v);F&&Zt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,xt,v.width,v.height):Zt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let Q=J.__webglTexture,Z=Kt(v);if(v.depthTexture.format===ts)Zt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===as)Zt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Bt(T){let v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=J}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),ot(v.__webglDepthbuffer[J],T,!1);else{let Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ot(v.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function O(T,v,F){let J=n.get(T);v!==void 0&&_t(J.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Bt(T)}function rt(T){let v=T.texture,F=n.get(T),J=n.get(v);T.addEventListener("dispose",A);let Q=T.textures,Z=T.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),Z){F.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ut]=[];for(let xt=0;xt<v.mipmaps.length;xt++)F.__webglFramebuffer[ut][xt]=i.createFramebuffer()}else F.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)F.__webglFramebuffer[ut]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,xt=Q.length;ut<xt;ut++){let te=n.get(Q[ut]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Zt(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){let xt=Q[ut];F.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);let te=r.convert(xt.format,xt.colorSpace),et=r.convert(xt.type),yt=b(xt.internalFormat,te,et,xt.colorSpace,T.isXRRenderTarget===!0),It=Kt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,yt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),kt(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)_t(F.__webglFramebuffer[ut][xt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else _t(F.__webglFramebuffer[ut],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,xt=Q.length;ut<xt;ut++){let te=Q[ut],et=n.get(te);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),kt(i.TEXTURE_2D,te),_t(F.__webglFramebuffer,T,te,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(te)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ut=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,J.__webglTexture),kt(ut,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)_t(F.__webglFramebuffer[xt],T,v,i.COLOR_ATTACHMENT0,ut,xt);else _t(F.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ut,0);m(v)&&d(ut),e.unbindTexture()}T.depthBuffer&&Bt(T)}function ct(T){let v=T.textures;for(let F=0,J=v.length;F<J;F++){let Q=v[F];if(m(Q)){let Z=E(T),At=n.get(Q).__webglTexture;e.bindTexture(Z,At),d(Z),e.unbindTexture()}}}let St=[],P=[];function Pe(T){if(T.samples>0){if(Zt(T)===!1){let v=T.textures,F=T.width,J=T.height,Q=i.COLOR_BUFFER_BIT,Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),ut=v.length>1;if(ut)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[xt]);let te=n.get(v[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,F,J,0,0,F,J,Q,i.NEAREST),l===!0&&(St.length=0,P.length=0,St.push(i.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(St.push(Z),P.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,At.__webglColorRenderbuffer[xt]);let te=n.get(v[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Kt(T){return Math.min(s.maxSamples,T.samples)}function Zt(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(T){let v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function oe(T,v){let F=T.colorSpace,J=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==fs&&F!==Qn&&(ee.getTransfer(F)===he?(J!==fn||Q!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Pt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=O,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Zt}function Yg(i,t){function e(n,s=Qn){let r,o=ee.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===bl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Sl)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Os)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===ah)return i.RGB;if(n===fn)return i.RGBA;if(n===lh)return i.LUMINANCE;if(n===ch)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===hh)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Al)return i.RGBA_INTEGER;if(n===vr||n===yr||n===Mr||n===Sr)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===ya||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===ya)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===br||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===br)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===Fa||n===za||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===br)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var il=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},le=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kg=`
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

}`,sl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Tn({vertexShader:Jg,fragmentShader:Kg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rl=class extends ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,x=new sl,m=e.getContextAttributes(),d=null,E=null,b=[],_=[],I=new Ut,w=null,A=new Fe;A.viewport=new Me;let R=new Fe;R.viewport=new Me;let S=[A,R],y=new il,C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=b[Y];return tt===void 0&&(tt=new Is,b[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=b[Y];return tt===void 0&&(tt=new Is,b[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=b[Y];return tt===void 0&&(tt=new Is,b[Y]=tt),tt.getHandSpace()};function z(Y){let tt=_.indexOf(Y.inputSource);if(tt===-1)return;let _t=b[tt];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<b.length;Y++){let tt=_[Y];tt!==null&&(_[Y]=null,b[Y].disconnect(tt))}C=null,G=null,x.reset(),t.setRenderTarget(d),p=null,f=null,h=null,s=null,E=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new kn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?as:ts,_t=m.stencil?os:bi);let bt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new kn(f.textureWidth,f.textureHeight,{format:fn,type:zn,depthTexture:new Br(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let tt=0;tt<Y.removed.length;tt++){let _t=Y.removed[tt],ot=_.indexOf(_t);ot>=0&&(_[ot]=null,b[ot].disconnect(_t))}for(let tt=0;tt<Y.added.length;tt++){let _t=Y.added[tt],ot=_.indexOf(_t);if(ot===-1){for(let Bt=0;Bt<b.length;Bt++)if(Bt>=_.length){_.push(_t),ot=Bt;break}else if(_[Bt]===null){_[Bt]=_t,ot=Bt;break}if(ot===-1)break}let bt=b[ot];bt&&bt.connect(_t)}}let k=new N,$=new N;function H(Y,tt,_t){k.setFromMatrixPosition(tt.matrixWorld),$.setFromMatrixPosition(_t.matrixWorld);let ot=k.distanceTo($),bt=tt.projectionMatrix.elements,Bt=_t.projectionMatrix.elements,O=bt[14]/(bt[10]-1),rt=bt[14]/(bt[10]+1),ct=(bt[9]+1)/bt[5],St=(bt[9]-1)/bt[5],P=(bt[8]-1)/bt[0],Pe=(Bt[8]+1)/Bt[0],Kt=O*P,Zt=O*Pe,Ct=ot/(-P+Pe),oe=Ct*-P;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(Ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let Pt=O+Ct,T=rt+Ct,v=Kt-oe,F=Zt+(ot-oe),J=ct*rt/T*Pt,Q=St*rt/T*Pt;Y.projectionMatrix.makePerspective(v,F,J,Q,Pt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,_t=Y.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(_t=x.depthFar)),y.near=R.near=A.near=tt,y.far=R.far=A.far=_t,(C!==y.near||G!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,G=y.far),A.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,y.layers.mask=A.layers.mask|R.layers.mask;let ot=Y.parent,bt=y.cameras;it(y,ot);for(let Bt=0;Bt<bt.length;Bt++)it(bt[Bt],ot);bt.length===2?H(y,A,R):y.projectionMatrix.copy(A.projectionMatrix),at(Y,y,ot)};function at(Y,tt,_t){_t===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ga*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let vt=null;function kt(Y,tt){if(u=tt.getViewerPose(c||o),g=tt,u!==null){let _t=u.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ot=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Bt=0;Bt<_t.length;Bt++){let O=_t[Bt],rt=null;if(p!==null)rt=p.getViewport(O);else{let St=h.getViewSubImage(f,O);rt=St.viewport,Bt===0&&(t.setRenderTargetTextures(E,St.colorTexture,f.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(E))}let ct=S[Bt];ct===void 0&&(ct=new Fe,ct.layers.enable(Bt),ct.viewport=new Me,S[Bt]=ct),ct.matrix.fromArray(O.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(O.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(rt.x,rt.y,rt.width,rt.height),Bt===0&&(y.matrix.copy(ct.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(ct)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let Bt=h.getDepthInformation(_t[0]);Bt&&Bt.isValid&&Bt.texture&&x.init(t,Bt,s.renderState)}}for(let _t=0;_t<b.length;_t++){let ot=_[_t],bt=b[_t];ot!==null&&bt!==void 0&&bt.update(ot,tt,c||o)}vt&&vt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let $t=new _h;$t.setAnimationLoop(kt),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}},_i=new mn,$g=new xe;function Qg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,gh(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,b,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ye&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ye&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),b=E.envMap,_=E.envMapRotation;b&&(m.envMap.value=b,_i.copy(_),_i.x*=-1,_i.y*=-1,_i.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(_i)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ye&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let _=b.program;n.uniformBlockBinding(E,_)}function c(E,b){let _=s[E.id];_===void 0&&(g(E),_=u(E),s[E.id]=_,E.addEventListener("dispose",m));let I=b.program;n.updateUBOMapping(E,I);let w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function u(E){let b=h();E.__bindingPointIndex=b;let _=i.createBuffer(),I=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,_),_}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let b=s[E.id],_=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,A=_.length;w<A;w++){let R=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,y=R.length;S<y;S++){let C=R[S];if(p(C,w,S,I)===!0){let G=C.__offset,z=Array.isArray(C.value)?C.value:[C.value],B=0;for(let X=0;X<z.length;X++){let k=z[X],$=x(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,G+B,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,_,I){let w=E.value,A=b+"_"+_;if(I[A]===void 0)return typeof w=="number"||typeof w=="boolean"?I[A]=w:I[A]=w.clone(),!0;{let R=I[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return I[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(E){let b=E.uniforms,_=0,I=16;for(let A=0,R=b.length;A<R;A++){let S=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,C=S.length;y<C;y++){let G=S[y],z=Array.isArray(G.value)?G.value:[G.value];for(let B=0,X=z.length;B<X;B++){let k=z[B],$=x(k),H=_%I,it=H%$.boundary,at=H+it;_+=it,at!==0&&I-at<$.storage&&(_+=I-at),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=$.storage}}}let w=_%I;return w>0&&(_+=I-w),E.__size=_,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Fr=class{constructor(t={}){let{canvas:e=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=ei,this.toneMappingExposure=1;let _=this,I=!1,w=0,A=0,R=null,S=-1,y=null,C=new Me,G=new Me,z=null,B=new Lt(0),X=0,k=e.width,$=e.height,H=1,it=null,at=null,vt=new Me(0,0,k,$),kt=new Me(0,0,k,$),$t=!1,Y=new Us,tt=!1,_t=!1,ot=new xe,bt=new xe,Bt=new N,O=new Me,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function St(){return R===null?H:1}let P=n;function Pe(M,D){return e.getContext(M,D)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){let D="webgl2";if(P=Pe(D,M),P===null)throw Pe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Kt,Zt,Ct,oe,Pt,T,v,F,J,Q,Z,At,ut,xt,te,et,yt,It,Nt,Mt,Qt,Xt,fe,L;function ht(){Kt=new mm(P),Kt.init(),Xt=new Yg(P,Kt),Zt=new cm(P,Kt,t,Xt),Ct=new Wg(P,Kt),Zt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),oe=new xm(P),Pt=new Ig,T=new qg(P,Kt,Ct,Pt,Zt,Xt,oe),v=new um(_),F=new pm(_),J=new Ed(P),fe=new am(P,J),Q=new gm(P,J,oe,fe),Z=new ym(P,Q,J,oe),Nt=new vm(P,Zt,T),et=new hm(Pt),At=new Pg(_,v,F,Kt,Zt,fe,et),ut=new Qg(_,Pt),xt=new Dg,te=new zg(Kt),It=new om(_,v,F,Ct,Z,p,l),yt=new Vg(_,Z,Zt),L=new jg(P,oe,Zt,Ct),Mt=new lm(P,Kt,oe),Qt=new _m(P,Kt,oe),oe.programs=At.programs,_.capabilities=Zt,_.extensions=Kt,_.properties=Pt,_.renderLists=xt,_.shadowMap=yt,_.state=Ct,_.info=oe}ht();let q=new rl(_,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Kt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Kt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(k,$,!1))},this.getSize=function(M){return M.set(k,$)},this.setSize=function(M,D,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,$=D,e.width=Math.floor(M*H),e.height=Math.floor(D*H),V===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(k*H,$*H).floor()},this.setDrawingBufferSize=function(M,D,V){k=M,$=D,H=V,e.width=Math.floor(M*V),e.height=Math.floor(D*V),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(vt)},this.setViewport=function(M,D,V,W){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,D,V,W),Ct.viewport(C.copy(vt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,D,V,W){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,D,V,W),Ct.scissor(G.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(M){Ct.setScissorTest($t=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){at=M},this.getClearColor=function(M){return M.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(M=!0,D=!0,V=!0){let W=0;if(M){let U=!1;if(R!==null){let nt=R.texture.format;U=nt===Al||nt===wl||nt===Tl}if(U){let nt=R.texture.type,ft=nt===zn||nt===bi||nt===Ds||nt===os||nt===bl||nt===El,Et=It.getClearColor(),Tt=It.getClearAlpha(),Ft=Et.r,Vt=Et.g,wt=Et.b;ft?(g[0]=Ft,g[1]=Vt,g[2]=wt,g[3]=Tt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Ft,x[1]=Vt,x[2]=wt,x[3]=Tt,P.clearBufferiv(P.COLOR,0,x))}else W|=P.COLOR_BUFFER_BIT}D&&(W|=P.DEPTH_BUFFER_BIT),V&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),xt.dispose(),te.dispose(),Pt.dispose(),v.dispose(),F.dispose(),Z.dispose(),fe.dispose(),L.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",Gl),q.removeEventListener("sessionend",Wl),ui.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let M=oe.autoReset,D=yt.enabled,V=yt.autoUpdate,W=yt.needsUpdate,U=yt.type;ht(),oe.autoReset=M,yt.enabled=D,yt.autoUpdate=V,yt.needsUpdate=W,yt.type=U}function dt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ht(M){let D=M.target;D.removeEventListener("dispose",Ht),ye(D)}function ye(M){De(M),Pt.remove(M)}function De(M){let D=Pt.get(M).programs;D!==void 0&&(D.forEach(function(V){At.releaseProgram(V)}),M.isShaderMaterial&&At.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,V,W,U,nt){D===null&&(D=rt);let ft=U.isMesh&&U.matrixWorld.determinant()<0,Et=uu(M,D,V,W,U);Ct.setMaterial(W,ft);let Tt=V.index,Ft=1;if(W.wireframe===!0){if(Tt=Q.getWireframeAttribute(V),Tt===void 0)return;Ft=2}let Vt=V.drawRange,wt=V.attributes.position,ne=Vt.start*Ft,pe=(Vt.start+Vt.count)*Ft;nt!==null&&(ne=Math.max(ne,nt.start*Ft),pe=Math.min(pe,(nt.start+nt.count)*Ft)),Tt!==null?(ne=Math.max(ne,0),pe=Math.min(pe,Tt.count)):wt!=null&&(ne=Math.max(ne,0),pe=Math.min(pe,wt.count));let me=pe-ne;if(me<0||me===1/0)return;fe.setup(U,W,Et,V,Tt);let We,se=Mt;if(Tt!==null&&(We=J.get(Tt),se=Qt,se.setIndex(We)),U.isMesh)W.wireframe===!0?(Ct.setLineWidth(W.wireframeLinewidth*St()),se.setMode(P.LINES)):se.setMode(P.TRIANGLES);else if(U.isLine){let Rt=W.linewidth;Rt===void 0&&(Rt=1),Ct.setLineWidth(Rt*St()),U.isLineSegments?se.setMode(P.LINES):U.isLineLoop?se.setMode(P.LINE_LOOP):se.setMode(P.LINE_STRIP)}else U.isPoints?se.setMode(P.POINTS):U.isSprite&&se.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)se.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Rt=U._multiDrawStarts,Rn=U._multiDrawCounts,re=U._multiDrawCount,ln=Tt?J.get(Tt).bytesPerElement:1,Di=Pt.get(W).currentProgram.getUniforms();for(let Je=0;Je<re;Je++)Di.setValue(P,"_gl_DrawID",Je),se.render(Rt[Je]/ln,Rn[Je])}else if(U.isInstancedMesh)se.renderInstances(ne,me,U.count);else if(V.isInstancedBufferGeometry){let Rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Rn=Math.min(V.instanceCount,Rt);se.renderInstances(ne,me,Rn)}else se.render(ne,me)};function ae(M,D,V){M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=Ye,M.needsUpdate=!0,Xs(M,D,V),M.side=ii,M.needsUpdate=!0,Xs(M,D,V),M.side=dn):Xs(M,D,V)}this.compile=function(M,D,V=null){V===null&&(V=M),d=te.get(V),d.init(D),b.push(d),V.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),M!==V&&M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();let W=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let nt=U.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){let Et=nt[ft];ae(Et,V,U),W.add(Et)}else ae(nt,V,U),W.add(nt)}),b.pop(),d=null,W},this.compileAsync=function(M,D,V=null){let W=this.compile(M,D,V);return new Promise(U=>{function nt(){if(W.forEach(function(ft){Pt.get(ft).currentProgram.isReady()&&W.delete(ft)}),W.size===0){U(M);return}setTimeout(nt,10)}Kt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let an=null;function An(M){an&&an(M)}function Gl(){ui.stop()}function Wl(){ui.start()}let ui=new _h;ui.setAnimationLoop(An),typeof self!="undefined"&&ui.setContext(self),this.setAnimationLoop=function(M){an=M,q.setAnimationLoop(M),M===null?ui.stop():ui.start()},q.addEventListener("sessionstart",Gl),q.addEventListener("sessionend",Wl),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,D,R),d=te.get(M,b.length),d.init(D),b.push(d),bt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(bt),_t=this.localClippingEnabled,tt=et.init(this.clippingPlanes,_t),m=xt.get(M,E.length),m.init(),E.push(m),q.enabled===!0&&q.isPresenting===!0){let nt=_.xr.getDepthSensingMesh();nt!==null&&Eo(nt,D,-1/0,_.sortObjects)}Eo(M,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(it,at),ct=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ct&&It.addToRenderList(m,M),this.info.render.frame++,tt===!0&&et.beginShadows();let V=d.state.shadowsArray;yt.render(V,M,D),tt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,U=m.transmissive;if(d.setupLights(),D.isArrayCamera){let nt=D.cameras;if(U.length>0)for(let ft=0,Et=nt.length;ft<Et;ft++){let Tt=nt[ft];ql(W,U,M,Tt)}ct&&It.render(M);for(let ft=0,Et=nt.length;ft<Et;ft++){let Tt=nt[ft];Xl(m,M,Tt,Tt.viewport)}}else U.length>0&&ql(W,U,M,D),ct&&It.render(M),Xl(m,M,D);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(_,M,D),fe.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(d=b[b.length-1],tt===!0&&et.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Eo(M,D,V,W){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){W&&O.setFromMatrixPosition(M.matrixWorld).applyMatrix4(bt);let ft=Z.update(M),Et=M.material;Et.visible&&m.push(M,ft,Et,V,O.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){let ft=Z.update(M),Et=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),O.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),O.copy(ft.boundingSphere.center)),O.applyMatrix4(M.matrixWorld).applyMatrix4(bt)),Array.isArray(Et)){let Tt=ft.groups;for(let Ft=0,Vt=Tt.length;Ft<Vt;Ft++){let wt=Tt[Ft],ne=Et[wt.materialIndex];ne&&ne.visible&&m.push(M,ft,ne,V,O.z,wt)}}else Et.visible&&m.push(M,ft,Et,V,O.z,null)}}let nt=M.children;for(let ft=0,Et=nt.length;ft<Et;ft++)Eo(nt[ft],D,V,W)}function Xl(M,D,V,W){let U=M.opaque,nt=M.transmissive,ft=M.transparent;d.setupLightsView(V),tt===!0&&et.setGlobalState(_.clippingPlanes,V),W&&Ct.viewport(C.copy(W)),U.length>0&&Ws(U,D,V),nt.length>0&&Ws(nt,D,V),ft.length>0&&Ws(ft,D,V),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function ql(M,D,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new kn(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?Os:zn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let nt=d.state.transmissionRenderTarget[W.id],ft=W.viewport||C;nt.setSize(ft.z,ft.w);let Et=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(B),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),ct&&It.render(V);let Tt=_.toneMapping;_.toneMapping=ei;let Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),tt===!0&&et.setGlobalState(_.clippingPlanes,W),Ws(M,V,W),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let wt=0,ne=D.length;wt<ne;wt++){let pe=D[wt],me=pe.object,We=pe.geometry,se=pe.material,Rt=pe.group;if(se.side===dn&&me.layers.test(W.layers)){let Rn=se.side;se.side=Ye,se.needsUpdate=!0,Yl(me,V,W,We,se,Rt),se.side=Rn,se.needsUpdate=!0,Vt=!0}}Vt===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}_.setRenderTarget(Et),_.setClearColor(B,X),Ft!==void 0&&(W.viewport=Ft),_.toneMapping=Tt}function Ws(M,D,V){let W=D.isScene===!0?D.overrideMaterial:null;for(let U=0,nt=M.length;U<nt;U++){let ft=M[U],Et=ft.object,Tt=ft.geometry,Ft=W===null?ft.material:W,Vt=ft.group;Et.layers.test(V.layers)&&Yl(Et,D,V,Tt,Ft,Vt)}}function Yl(M,D,V,W,U,nt){M.onBeforeRender(_,D,V,W,U,nt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,D,V,W,M,nt),U.transparent===!0&&U.side===dn&&U.forceSinglePass===!1?(U.side=Ye,U.needsUpdate=!0,_.renderBufferDirect(V,D,W,U,M,nt),U.side=ii,U.needsUpdate=!0,_.renderBufferDirect(V,D,W,U,M,nt),U.side=dn):_.renderBufferDirect(V,D,W,U,M,nt),M.onAfterRender(_,D,V,W,U,nt)}function Xs(M,D,V){D.isScene!==!0&&(D=rt);let W=Pt.get(M),U=d.state.lights,nt=d.state.shadowsArray,ft=U.state.version,Et=At.getParameters(M,U.state,nt,D,V),Tt=At.getProgramCacheKey(Et),Ft=W.programs;W.environment=M.isMeshStandardMaterial?D.environment:null,W.fog=D.fog,W.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",Ht),Ft=new Map,W.programs=Ft);let Vt=Ft.get(Tt);if(Vt!==void 0){if(W.currentProgram===Vt&&W.lightsStateVersion===ft)return Jl(M,Et),Vt}else Et.uniforms=At.getUniforms(M),M.onBeforeCompile(Et,_),Vt=At.acquireProgram(Et,Tt),Ft.set(Tt,Vt),W.uniforms=Et.uniforms;let wt=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=et.uniform),Jl(M,Et),W.needsLights=fu(M),W.lightsStateVersion=ft,W.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=Vt,W.uniformsList=null,Vt}function Zl(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=ns.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Jl(M,D){let V=Pt.get(M);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function uu(M,D,V,W,U){D.isScene!==!0&&(D=rt),T.resetTextureUnits();let nt=D.fog,ft=W.isMeshStandardMaterial?D.environment:null,Et=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:fs,Tt=(W.isMeshStandardMaterial?F:v).get(W.envMap||ft),Ft=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Vt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),wt=!!V.morphAttributes.position,ne=!!V.morphAttributes.normal,pe=!!V.morphAttributes.color,me=ei;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=_.toneMapping);let We=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=We!==void 0?We.length:0,Rt=Pt.get(W),Rn=d.state.lights;if(tt===!0&&(_t===!0||M!==y)){let en=M===y&&W.id===S;et.setState(W,M,en)}let re=!1;W.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Rn.state.version||Rt.outputColorSpace!==Et||U.isBatchedMesh&&Rt.batching===!1||!U.isBatchedMesh&&Rt.batching===!0||U.isBatchedMesh&&Rt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Rt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Rt.instancing===!1||!U.isInstancedMesh&&Rt.instancing===!0||U.isSkinnedMesh&&Rt.skinning===!1||!U.isSkinnedMesh&&Rt.skinning===!0||U.isInstancedMesh&&Rt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Rt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Rt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Rt.instancingMorph===!1&&U.morphTexture!==null||Rt.envMap!==Tt||W.fog===!0&&Rt.fog!==nt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==et.numPlanes||Rt.numIntersection!==et.numIntersection)||Rt.vertexAlphas!==Ft||Rt.vertexTangents!==Vt||Rt.morphTargets!==wt||Rt.morphNormals!==ne||Rt.morphColors!==pe||Rt.toneMapping!==me||Rt.morphTargetsCount!==se)&&(re=!0):(re=!0,Rt.__version=W.version);let ln=Rt.currentProgram;re===!0&&(ln=Xs(W,D,U));let Di=!1,Je=!1,ys=!1,ge=ln.getUniforms(),yn=Rt.uniforms;if(Ct.useProgram(ln.program)&&(Di=!0,Je=!0,ys=!0),W.id!==S&&(S=W.id,Je=!0),Di||y!==M){Ct.buffers.depth.getReversed()?(ot.copy(M.projectionMatrix),sd(ot),rd(ot),ge.setValue(P,"projectionMatrix",ot)):ge.setValue(P,"projectionMatrix",M.projectionMatrix),ge.setValue(P,"viewMatrix",M.matrixWorldInverse);let Wn=ge.map.cameraPosition;Wn!==void 0&&Wn.setValue(P,Bt.setFromMatrixPosition(M.matrixWorld)),Zt.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Je=!0,ys=!0)}if(U.isSkinnedMesh){ge.setOptional(P,U,"bindMatrix"),ge.setOptional(P,U,"bindMatrixInverse");let en=U.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ge.setValue(P,"boneTexture",en.boneTexture,T))}U.isBatchedMesh&&(ge.setOptional(P,U,"batchingTexture"),ge.setValue(P,"batchingTexture",U._matricesTexture,T),ge.setOptional(P,U,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",U._indirectTexture,T),ge.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",U._colorsTexture,T));let Ms=V.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&Nt.update(U,V,ln),(Je||Rt.receiveShadow!==U.receiveShadow)&&(Rt.receiveShadow=U.receiveShadow,ge.setValue(P,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(yn.envMap.value=Tt,yn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Je&&(ge.setValue(P,"toneMappingExposure",_.toneMappingExposure),Rt.needsLights&&du(yn,ys),nt&&W.fog===!0&&ut.refreshFogUniforms(yn,nt),ut.refreshMaterialUniforms(yn,W,H,$,d.state.transmissionRenderTarget[M.id]),ns.upload(P,Zl(Rt),yn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ns.upload(P,Zl(Rt),yn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(P,"center",U.center),ge.setValue(P,"modelViewMatrix",U.modelViewMatrix),ge.setValue(P,"normalMatrix",U.normalMatrix),ge.setValue(P,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let en=W.uniformsGroups;for(let Wn=0,Xn=en.length;Wn<Xn;Wn++){let Kl=en[Wn];L.update(Kl,ln),L.bind(Kl,ln)}}return ln}function du(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function fu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,D,V){Pt.get(M.texture).__webglTexture=D,Pt.get(M.depthTexture).__webglTexture=V;let W=Pt.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){let V=Pt.get(M);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,V=0){R=M,w=D,A=V;let W=!0,U=null,nt=!1,ft=!1;if(M){let Tt=Pt.get(M);if(Tt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(Tt.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Tt.__hasExternalTextures)T.rebindTextures(M,Pt.get(M.texture).__webglTexture,Pt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let wt=M.depthTexture;if(Tt.__boundDepthTexture!==wt){if(wt!==null&&Pt.has(wt)&&(M.width!==wt.image.width||M.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}let Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ft=!0);let Vt=Pt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Vt[D])?U=Vt[D][V]:U=Vt[D],nt=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?U=Pt.get(M).__webglMultisampledFramebuffer:Array.isArray(Vt)?U=Vt[V]:U=Vt,C.copy(M.viewport),G.copy(M.scissor),z=M.scissorTest}else C.copy(vt).multiplyScalar(H).floor(),G.copy(kt).multiplyScalar(H).floor(),z=$t;if(Ct.bindFramebuffer(P.FRAMEBUFFER,U)&&W&&Ct.drawBuffers(M,U),Ct.viewport(C),Ct.scissor(G),Ct.setScissorTest(z),nt){let Tt=Pt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Tt.__webglTexture,V)}else if(ft){let Tt=Pt.get(M.texture),Ft=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tt.__webglTexture,V||0,Ft)}S=-1},this.readRenderTargetPixels=function(M,D,V,W,U,nt,ft){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et){Ct.bindFramebuffer(P.FRAMEBUFFER,Et);try{let Tt=M.texture,Ft=Tt.format,Vt=Tt.type;if(!Zt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-W&&V>=0&&V<=M.height-U&&P.readPixels(D,V,W,U,Xt.convert(Ft),Xt.convert(Vt),nt)}finally{let Tt=R!==null?Pt.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(P.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,D,V,W,U,nt,ft){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(Et=Et[ft]),Et){let Tt=M.texture,Ft=Tt.format,Vt=Tt.type;if(!Zt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-W&&V>=0&&V<=M.height-U){Ct.bindFramebuffer(P.FRAMEBUFFER,Et);let wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(D,V,W,U,Xt.convert(Ft),Xt.convert(Vt),0);let ne=R!==null?Pt.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(P.FRAMEBUFFER,ne);let pe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await id(P,pe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(wt),P.deleteSync(pe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,V=0){M.isTexture!==!0&&(Cs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);let W=Math.pow(2,-V),U=Math.floor(M.image.width*W),nt=Math.floor(M.image.height*W),ft=D!==null?D.x:0,Et=D!==null?D.y:0;T.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,ft,Et,U,nt),Ct.unbindTexture()},this.copyTextureToTexture=function(M,D,V=null,W=null,U=0){M.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],D=arguments[2],U=arguments[3]||0,V=null);let nt,ft,Et,Tt,Ft,Vt,wt,ne,pe,me=M.isCompressedTexture?M.mipmaps[U]:M.image;V!==null?(nt=V.max.x-V.min.x,ft=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,Tt=V.min.x,Ft=V.min.y,Vt=V.isBox3?V.min.z:0):(nt=me.width,ft=me.height,Et=me.depth||1,Tt=0,Ft=0,Vt=0),W!==null?(wt=W.x,ne=W.y,pe=W.z):(wt=0,ne=0,pe=0);let We=Xt.convert(D.format),se=Xt.convert(D.type),Rt;D.isData3DTexture?(T.setTexture3D(D,0),Rt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),Rt=P.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),Rt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Rn=P.getParameter(P.UNPACK_ROW_LENGTH),re=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ln=P.getParameter(P.UNPACK_SKIP_PIXELS),Di=P.getParameter(P.UNPACK_SKIP_ROWS),Je=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ft),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt);let ys=M.isDataArrayTexture||M.isData3DTexture,ge=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let yn=Pt.get(M),Ms=Pt.get(D),en=Pt.get(yn.__renderTarget),Wn=Pt.get(Ms.__renderTarget);Ct.bindFramebuffer(P.READ_FRAMEBUFFER,en.__webglFramebuffer),Ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<Et;Xn++)ys&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.get(M).__webglTexture,U,Vt+Xn),M.isDepthTexture?(ge&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.get(D).__webglTexture,U,pe+Xn),P.blitFramebuffer(Tt,Ft,nt,ft,wt,ne,nt,ft,P.DEPTH_BUFFER_BIT,P.NEAREST)):ge?P.copyTexSubImage3D(Rt,U,wt,ne,pe+Xn,Tt,Ft,nt,ft):P.copyTexSubImage2D(Rt,U,wt,ne,pe+Xn,Tt,Ft,nt,ft);Ct.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ge?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(Rt,U,wt,ne,pe,nt,ft,Et,We,se,me.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(Rt,U,wt,ne,pe,nt,ft,Et,We,me.data):P.texSubImage3D(Rt,U,wt,ne,pe,nt,ft,Et,We,se,me):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,wt,ne,nt,ft,We,se,me.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,wt,ne,me.width,me.height,We,me.data):P.texSubImage2D(P.TEXTURE_2D,U,wt,ne,nt,ft,We,se,me);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ln),P.pixelStorei(P.UNPACK_SKIP_ROWS,Di),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Je),U===0&&D.generateMipmaps&&P.generateMipmap(Rt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(M,D,V=null,W=null,U=0){return M.isTexture!==!0&&(Cs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,M=arguments[2],D=arguments[3],U=arguments[4]||0),Cs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,V,W,U)},this.initRenderTarget=function(M){Pt.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Ct.unbindTexture()},this.resetState=function(){w=0,A=0,R=null,Ct.reset(),fe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var zr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ol=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Oe=new N,Hr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ai=class extends En{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zi,ws=new N,Ji=new N,Ki=new N,$i=new Ut,As=new Ut,Sh=new xe,fr=new N,Rs=new N,pr=new N,Jc=new Ut,ea=new Ut,Kc=new Ut,Ti=class extends Ie{constructor(t=new ai){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ol(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new Hr(n,3,0,!1)),Zi.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new Ut(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Sh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Ki.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;mr(fr.set(-.5,-.5,0),Ki,o,Ji,s,r),mr(Rs.set(.5,-.5,0),Ki,o,Ji,s,r),mr(pr.set(.5,.5,0),Ki,o,Ji,s,r),Jc.set(0,0),ea.set(1,0),Kc.set(1,1);let a=t.ray.intersectTriangle(fr,Rs,pr,!1,ws);if(a===null&&(mr(Rs.set(-.5,.5,0),Ki,o,Ji,s,r),ea.set(0,1),a=t.ray.intersectTriangle(fr,pr,Rs,!1,ws),a===null))return;let l=t.ray.origin.distanceTo(ws);l<t.near||l>t.far||e.push({distance:l,point:ws.clone(),uv:jn.getInterpolation(ws,fr,Rs,pr,Jc,ea,Kc,new Ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mr(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(As.x=r*$i.x-s*$i.y,As.y=s*$i.x+r*$i.y):As.copy($i),i.copy(t),i.x+=As.x,i.y+=As.y,i.applyMatrix4(Sh)}var wi=class extends En{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$c=new xe,al=new Cr,gr=new ls,_r=new N,hs=class extends Ie{constructor(t=new Te,e=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),gr.radius+=r,t.ray.intersectsSphere(gr)===!1)return;$c.copy(s).invert(),al.copy(t.ray).applyMatrix4($c);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=c.getX(g);_r.fromBufferAttribute(h,m),Qc(_r,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++)_r.fromBufferAttribute(h,g),Qc(_r,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Qc(i,t,e,n,s,r,o){let a=al.distanceSqToPoint(i);if(a<e){let l=new N;al.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vr=class extends Qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,u=new Ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let p=n+h/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ce=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,x=[],m=n/2,d=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function E(){let _=new N,I=new N,w=0,A=(e-t)/n;for(let R=0;R<=r;R++){let S=[],y=R/r,C=y*(e-t)+t;for(let G=0;G<=s;G++){let z=G/s,B=z*l+a,X=Math.sin(B),k=Math.cos(B);I.x=C*X,I.y=-y*n+m,I.z=C*k,h.push(I.x,I.y,I.z),_.set(X,A,k).normalize(),f.push(_.x,_.y,_.z),p.push(z,1-y),S.push(g++)}x.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let y=x[S][R],C=x[S+1][R],G=x[S+1][R+1],z=x[S][R+1];(t>0||S!==0)&&(u.push(y,C,z),w+=3),(e>0||S!==r-1)&&(u.push(C,G,z),w+=3)}c.addGroup(d,w,0),d+=w}function b(_){let I=g,w=new Ut,A=new N,R=0,S=_===!0?t:e,y=_===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let C=g;for(let G=0;G<=s;G++){let B=G/s*l+a,X=Math.cos(B),k=Math.sin(B);A.x=S*k,A.y=m*y,A.z=S*X,h.push(A.x,A.y,A.z),f.push(0,y,0),w.x=X*.5+.5,w.y=k*.5*y+.5,p.push(w.x,w.y),g++}for(let G=0;G<s;G++){let z=I+G,B=C+G;_===!0?u.push(B,B+1,z):u.push(B+1,B,z),R+=3}c.addGroup(d,R,_===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gr=class i extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ns=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let b=new N,_=new N,I=new N;for(let w=0;w<e.length;w+=3)p(e[w+0],b),p(e[w+1],_),p(e[w+2],I),l(b,_,I,E)}function l(E,b,_,I){let w=I+1,A=[];for(let R=0;R<=w;R++){A[R]=[];let S=E.clone().lerp(_,R/w),y=b.clone().lerp(_,R/w),C=w-R;for(let G=0;G<=C;G++)G===0&&R===w?A[R][G]=S:A[R][G]=S.clone().lerp(y,G/C)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){let y=Math.floor(S/2);S%2===0?(f(A[R][y+1]),f(A[R+1][y]),f(A[R][y])):(f(A[R][y+1]),f(A[R+1][y+1]),f(A[R+1][y]))}}function c(E){let b=new N;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(E),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function u(){let E=new N;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];let _=m(E)/2/Math.PI+.5,I=d(E)/Math.PI+.5;o.push(_,1-I)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){let b=o[E+0],_=o[E+2],I=o[E+4],w=Math.max(b,_,I),A=Math.min(b,_,I);w>.9&&A<.1&&(b<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),I<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,b){let _=E*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function g(){let E=new N,b=new N,_=new N,I=new N,w=new Ut,A=new Ut,R=new Ut;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),w.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),R.set(o[y+4],o[y+5]),I.copy(E).add(b).add(_).divideScalar(3);let C=m(I);x(w,y+0,E,C),x(A,y+2,b,C),x(R,y+4,_,C)}}function x(E,b,_,I){I<0&&E.x===1&&(o[b]=E.x-1),_.x===0&&_.z===0&&(o[b]=I/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},li=class i extends Ns{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Wr=class i extends Ns{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Xr=class i extends Ns{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},qr=class i extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/s,p=new N,g=new Ut;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let d=r+m/n*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let d=0;d<n;d++){let E=d+m,b=E,_=E+n+1,I=E+n+2,w=E+1;a.push(b,_,w),a.push(_,I,w)}}this.setIndex(a),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ze=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new N,f=new N,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){let E=[],b=d/n,_=0;d===0&&o===0?_=.5/e:d===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){let w=I/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+b*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(w+_,1-b),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let b=u[d][E+1],_=u[d][E],I=u[d+1][E],w=u[d+1][E+1];(d!==0||o>0)&&p.push(b,_,w),(d!==n-1||l<Math.PI)&&p.push(_,I,w)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var sn=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new N,h=new N,f=new N;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(x,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Yr=class extends En{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ve=class extends En{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function t0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ec:r=t,a=2*e-n;break;case nc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:o=t,l=2*n-e;break;case nc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,b=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let I=0;I!==a;++I)r[I]=d*o[u+I]+E*o[c+I]+b*o[l+I]+_*o[h+I];return r}},cl=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},hl=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ll(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case Ha:e=this.InterpolantFactoryMethodLinear;break;case wo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return wo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&t0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===wo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let x=e[h+g];if(x!==e[f+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ha;var Ai=class extends gn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Er;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends gn{};ul.prototype.ValueTypeName="color";var dl=class extends gn{};dl.prototype.ValueTypeName="number";var fl=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)oi.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zr=class extends gn{InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends gn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Er;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends gn{};pl.prototype.ValueTypeName="vector";var ml=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},e0=new ml,gl=class{constructor(t){this.manager=t!==void 0?t:e0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};gl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Kr=class extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},na=new xe,jc=new N,th=new N,_l=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xl=class extends _l{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new xl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Pl="\\[\\]\\.:\\/",n0=new RegExp("["+Pl+"]","g"),Il="[^"+Pl+"]",i0="[^"+Pl.replace("\\.","")+"]",s0=/((?:WC+[\/:])*)/.source.replace("WC",Il),r0=/(WCOD+)?/.source.replace("WCOD",i0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),a0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),l0=new RegExp("^"+s0+r0+o0+a0+"$"),c0=["material","materials","bones","map"],vl=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(n0,"")}static parseTrackName(t){let e=l0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);c0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=vl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);var mt={PLASVORA_URL:"",ADMIN_PIN:"1234",BRAND:"PLASVORA",TAGLINE:"Recycle \u2022 Reuse \u2022 Reimagine",LIVES:3,WORLD:{GRAVITY:50,JUMP_V:19,FALL_MULT:1.85,BASE_SPEED:9,DISTANCE_PER_UNIT:2.8,SPAWN_X:28,DESPAWN_X:-12,JUMP_BUFFER:.12},PHASES:[{id:1,name:"ECO START",minDist:0,maxDist:500,speedMin:1,speedMax:1.1,gapMin:1.52,gapMax:1.76,comboChance:0,maxChain:1,obsTierWeights:{easy:92,medium:8,hard:0},slotWeights:{loot:44,obstacle:56,power:0},lootWeights:{normal:82,recycled:14,rare:3.5,gold:.5},bg:267538,hemi:10479871,edge:3800992},{id:2,name:"ECO RUN",minDist:500,maxDist:1500,speedMin:1.1,speedMax:1.25,gapMin:1.32,gapMax:1.54,comboChance:.28,maxChain:2,obsTierWeights:{easy:54,medium:40,hard:6},slotWeights:{loot:34,obstacle:58,power:8},lootWeights:{normal:74,recycled:18,rare:6.5,gold:1.5},bg:268824,hemi:10023160,edge:2945192},{id:3,name:"ECO CHALLENGE",minDist:1500,maxDist:3e3,speedMin:1.25,speedMax:1.45,gapMin:1.12,gapMax:1.32,comboChance:.48,maxChain:2,obsTierWeights:{easy:26,medium:52,hard:22},slotWeights:{loot:29,obstacle:63,power:8},lootWeights:{normal:68,recycled:20,rare:9.5,gold:2.5},bg:398882,hemi:9230591,edge:1692927},{id:4,name:"ECO DANGER",minDist:3e3,maxDist:5e3,speedMin:1.45,speedMax:1.65,gapMin:.98,gapMax:1.16,comboChance:.62,maxChain:3,obsTierWeights:{easy:12,medium:42,hard:46},slotWeights:{loot:26,obstacle:66,power:8},lootWeights:{normal:62,recycled:22,rare:12.5,gold:3.5},bg:1183778,hemi:12368127,edge:16757575},{id:5,name:"ECO EXTREME",minDist:5e3,maxDist:7500,speedMin:1.65,speedMax:1.8,gapMin:.88,gapMax:1.04,comboChance:.72,maxChain:3,obsTierWeights:{easy:6,medium:32,hard:62},slotWeights:{loot:24,obstacle:68,power:8},lootWeights:{normal:56,recycled:24,rare:15,gold:5},bg:1706774,hemi:16757960,edge:16732120}],SPEED:{MIN:1,MAX:1.8},SCORE:{normal:50,recycled:100,rare:150,gold:250,perMeter:.06,power:20,speedBoostBonus:50,smash:20,boostMult:1.25},COMBO:{thresholds:[0,5,10,15,20,25,30,40],mult:[1,1.08,1.16,1.26,1.38,1.52,1.68,1.9]},LOOT:{INTRO_SLOTS:3,POWER_MIN_DIST:460,POWER_CD_MIN:13.5,POWER_CD_MAX:21.5,POWER_WEIGHTS:{boost:36,magnet:34,shield:19,speed:11},POWER_SAFE_BEFORE:.7,POWER_SAFE_AFTER:.78,MIN_RECOVERY_AFTER_COMBO:1.18},BOSS:{FIRST_MIN_DIST:2500,FIRST_MAX_DIST:4e3,SECOND_MIN_DIST:5e3,SECOND_MAX_DIST:7e3,NEXT_GAP_MIN:2300,NEXT_GAP_MAX:3500,SKIP_CHANCE:.14,WARN:2.3,MAX_TOTAL_SPEED_MULT:2.02,VARIANTS:{trash_giant:{id:"trash_giant",name:"ECO TRASH GIANT",style:"heavy",bg:2361613,hemi:16749722,edge:16731501,color:16734815},plastic_monster:{id:"plastic_monster",name:"PLASTIC MONSTER",style:"swarm",bg:1771302,hemi:15113983,edge:16732120,color:16732120},waste_machine:{id:"waste_machine",name:"WASTE MACHINE",style:"industrial",bg:2232838,hemi:16760962,edge:16751918,color:16751918}},DIFFICULTIES:{easy:{id:"easy",label:"EASY",timeMin:9,timeMax:11,speedMult:1.07,gapMult:.9,comboChance:.35,bonus:200,comboGuard:4.5,rareDrops:1,goldChance:.15,grantShield:!1},normal:{id:"normal",label:"NORMAL",timeMin:11,timeMax:14,speedMult:1.13,gapMult:.83,comboChance:.55,bonus:275,comboGuard:5.5,rareDrops:1,goldChance:.35,grantShield:!1},hard:{id:"hard",label:"HARD",timeMin:14,timeMax:17,speedMult:1.19,gapMult:.77,comboChance:.72,bonus:375,comboGuard:6.5,rareDrops:2,goldChance:.65,grantShield:!1},ultimate:{id:"ultimate",label:"ULTIMATE",timeMin:16,timeMax:19,speedMult:1.23,gapMult:.73,comboChance:.84,bonus:500,comboGuard:8,rareDrops:2,goldChance:1,grantShield:!0}}},POWER:{boost:7.5,magnet:8,speed:4.2},OBSTACLES:{cone:{need:"jump",tier:"easy",size:"small",hitW:1.05,hitH:.9,hitY:.45,hitDx:0,warning:!1,name:"Kerucut kecil"},bin:{need:"jump",tier:"easy",size:"small",hitW:1.3,hitH:1.2,hitY:.6,hitDx:0,warning:!1,name:"Tong sampah"},box:{need:"jump",tier:"easy",size:"medium",hitW:1.75,hitH:1.55,hitY:.78,hitDx:0,warning:!1,name:"Kardus"},hole:{need:"jump",tier:"medium",size:"wide",hitW:2.5,hitH:.5,hitY:0,hitDx:0,warning:!1,name:"Lubang jalan"},barrier:{need:"jump",tier:"medium",size:"medium",hitW:2.05,hitH:1.15,hitY:.58,hitDx:0,warning:!1,name:"Road barrier"},pipe:{need:"slide",tier:"medium",size:"wide",hitW:3,hitH:.72,hitY:1.54,hitDx:0,warning:!1,name:"Pipa rendah"},trashPile:{need:"jump",tier:"medium",size:"large",hitW:2.35,hitH:1.52,hitY:.76,hitDx:0,warning:!1,name:"Tumpukan sampah"},lowBeam:{need:"slide",tier:"hard",size:"wide",hitW:2.8,hitH:1.55,hitY:1.98,hitDx:0,warning:!0,name:"Palang rendah"},dumpster:{need:"jump",tier:"hard",size:"tall",hitW:2.2,hitH:2,hitY:1,hitDx:0,warning:!0,name:"Kontainer tinggi"},car:{need:"jump",tier:"hard",size:"long",hitW:2.75,hitH:1.38,hitY:.69,hitDx:0,warning:!0,name:"Mobil bekas"}},REWARDS:{hero:{minScore:1e3,stock:30,rank:"ECO HERO",prize:"Stiker ECO HERO"},guardian:{minScore:2500,stock:15,rank:"ECO GUARDIAN",prize:"Stiker ECO GUARDIAN"},legend:{minScore:5e3,stock:6,rank:"ECO LEGEND",prize:"Stiker ECO LEGEND"},champion:{minScore:8e3,stock:2,rank:"ECO CHAMPION",prize:"STIKER ECO CHAMPION \u2014 HADIAH UTAMA"}},RANK_BASE:{id:"rookie",rank:"ECO ROOKIE",minScore:0},REWARD_CODE_PREFIX:"PLV"},xn=mt.OBSTACLES,_n=[{id:mt.RANK_BASE.id,name:mt.RANK_BASE.rank,minScore:0,prize:null},...Object.entries(mt.REWARDS).map(([i,t])=>({id:i,name:t.rank,minScore:t.minScore,prize:t.prize})).sort((i,t)=>i.minScore-t.minScore)];function Bs(i){let t=_n[0];for(let e of _n)i>=e.minScore&&(t=e);return t}function bh(i){let t=0;for(let r=0;r<_n.length;r++)i>=_n[r].minScore&&(t=r);let e=_n[t],n=_n[t+1]||null;if(!n)return{cur:e,next:null,pct:1};let s=Math.max(1,n.minScore-e.minScore);return{cur:e,next:n,pct:Math.max(0,Math.min(1,(i-e.minScore)/s))}}function Hn(i){let t=mt.PHASES;for(let e=t.length-1;e>=0;e--)if(i>=t[e].minDist)return t[e];return t[0]}function Eh(i){let t=Hn(i),e=Math.max(1,t.maxDist-t.minDist),n=Math.max(0,Math.min(1,(i-t.minDist)/e)),s=t.id===1?n*n*(3-2*n):n;return Math.min(mt.SPEED.MAX,t.speedMin+(t.speedMax-t.speedMin)*s)}var Ot={MENU:"MENU",HOW_TO_PLAY:"HOW_TO_PLAY",COUNTDOWN:"COUNTDOWN",PLAYING:"PLAYING",PAUSED:"PAUSED",BOSS:"BOSS",GAME_OVER:"GAME_OVER",REWARD:"REWARD",LEADERBOARD:"LEADERBOARD",SETTINGS:"SETTINGS"};var Ci=(i,t,e)=>i<t?t:i>e?e:i,Th=(i,t,e)=>i+(t-i)*e;function h0(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var je=class{constructor(t){this.seed=t>>>0,this.f=h0(this.seed)}next(){return this.f()}range(t,e){return t+(e-t)*this.f()}int(t,e){return Math.floor(t+(e-t+1)*this.f())}chance(t){return this.f()<t}pick(t){return t[Math.floor(this.f()*t.length)]}weighted(t){let e=0;for(let s in t)e+=t[s];let n=this.f()*e;for(let s in t)if(n-=t[s],n<0)return s;return Object.keys(t)[0]}},wh=()=>(Date.now()*2654435761^Math.floor(Math.random()*4294967296))>>>0,Ah=i=>(i>>>0).toString(36).toUpperCase().slice(-4).padStart(4,"0"),Vn=i=>Math.floor(i).toLocaleString("id-ID");var eo=i=>(i/1e3).toFixed(2);function vn(i,t,e,n={}){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Vr(s);return r.colorSpace=Xe,n.repeat&&(r.wrapS=r.wrapT=Ls),r.anisotropy=4,r}function gs(i,t,e,n,s,r){r=Math.min(r,n/2,s/2),i.beginPath(),i.moveTo(t+r,e),i.lineTo(t+n-r,e),i.quadraticCurveTo(t+n,e,t+n,e+r),i.lineTo(t+n,e+s-r),i.quadraticCurveTo(t+n,e+s,t+n-r,e+s),i.lineTo(t+r,e+s),i.quadraticCurveTo(t,e+s,t,e+s-r),i.lineTo(t,e+r),i.quadraticCurveTo(t,e,t+r,e),i.closePath()}var Ee={emerald:2080634,emeraldDark:1010504,neon:3800992,cyan:1692927,gold:16765503,danger:16731501,navy:402204,amber:16751918,magenta:16732120},Rh={},ci={},gt=(i,t)=>Rh[i]||(Rh[i]=t());function Wt(i,t={}){let e=i+JSON.stringify(t);return ci[e]||(ci[e]=new ve({color:i,flatShading:!0,...t}))}var st=(i,t)=>new jt(i,t),no=null;function io(){if(no)return no;let i=s=>vn(256,96,(r,o,a)=>{r.fillStyle="#021a12",gs(r,0,0,o,a,22),r.fill(),r.fillStyle="#19d4ff",r.strokeStyle="#19d4ff",r.lineCap="round",r.lineWidth=9,s==="hit"?(r.strokeStyle="#ff4d6d",[[.56,.5],[.82,.5]].forEach(([l,c])=>{let u=o*l,h=a*c;r.beginPath(),r.moveTo(u-14,h-14),r.lineTo(u+14,h+14),r.moveTo(u+14,h-14),r.lineTo(u-14,h+14),r.stroke()})):s==="happy"?(r.strokeStyle="#ffd23f",[[.56,.58],[.82,.58]].forEach(([l,c])=>{r.beginPath(),r.arc(o*l,a*c,15,Math.PI*1.1,Math.PI*1.9),r.stroke()})):[[.54,.5],[.8,.5]].forEach(([l,c])=>{gs(r,o*l-12,a*c-22,24,44,9),r.fill()})}),t=vn(128,128,(s,r,o)=>{s.fillStyle="#eafff6",s.font='900 104px "Segoe UI Symbol","Noto Sans Symbols2","DejaVu Sans",Arial,sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("\u267B",r/2,o/2+6)}),e=(s,r)=>vn(128,128,(o,a,l)=>{o.fillStyle=s,o.fillRect(0,0,a,l),o.fillStyle=r;for(let c=-2;c<6;c++)o.beginPath(),o.moveTo(c*32,0),o.lineTo(c*32+16,0),o.lineTo(c*32+48,l),o.lineTo(c*32+32,l),o.fill()},{repeat:!0}),n=s=>vn(64,64,(r,o,a)=>{let l=r.createRadialGradient(32,32,2,32,32,30);l.addColorStop(0,s),l.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=l,r.fillRect(0,0,o,a)});return no={visor:i("normal"),visorHit:i("hit"),visorHappy:i("happy"),recycle:t,redStripes:e("#e8e8e8","#e0334f"),orangeStripes:e("#1c1c1c","#ffb02e"),glowGreen:n("rgba(57,255,160,.7)"),glowEmerald:n("rgba(44,240,143,.88)"),glowCyan:n("rgba(25,212,255,.85)"),glowGold:n("rgba(255,210,63,.95)")},no}function Ih(){let i=io(),t=new le,e=new ve({color:Ee.emerald,flatShading:!0}),n=new ve({color:Ee.emeraldDark,flatShading:!0}),s=Wt(1519658),r=new le;r.position.y=.45,t.add(r);let o=st(gt("rb-body",()=>new ce(.52,.42,.9,10)),e);o.position.y=.45,r.add(o);let a=st(gt("rb-trim",()=>new sn(.47,.035,6,16)),new Jt({color:Ee.neon}));a.rotation.x=Math.PI/2,a.position.y=.16,r.add(a);let l=st(gt("rb-decal",()=>new ze(.5,.5)),new Jt({map:i.recycle,transparent:!0}));l.position.set(0,.52,.5),r.add(l);let c=new le;c.position.y=.92,r.add(c);let u=st(gt("rb-head",()=>new zt(1.04,.5,.88)),n);u.position.y=.26,c.add(u);let h=st(gt("rb-handle",()=>new zt(.36,.09,.22)),s);h.position.y=.55,c.add(h);let f=new Jt({map:i.visor,transparent:!0}),p=st(gt("rb-visor",()=>new ze(.8,.3)),f);p.position.set(0,.26,.445),c.add(p);let g=st(gt("rb-visor",()=>new ze(.8,.3)),f);g.position.set(.525,.26,0),g.rotation.y=Math.PI/2,c.add(g);let x=st(gt("rb-ant",()=>new ce(.02,.02,.3,5)),s);x.position.set(-.28,.66,0),c.add(x);let m=st(gt("rb-led",()=>new Ze(.07,8,6)),new Jt({color:16732120}));m.position.set(-.28,.84,0),c.add(m);let d=B=>{let X=new le;X.position.set(0,.72,B);let k=st(gt("rb-arm",()=>new ce(.075,.065,.46,6)),s);k.position.y=-.23,X.add(k);let $=st(gt("rb-hand",()=>new Ze(.1,8,6)),Wt(Ee.neon));return $.position.y=-.5,X.add($),r.add(X),X},E=d(.6),b=d(-.6),_=B=>{let X=new le;X.position.set(0,.45,B);let k=st(gt("rb-leg",()=>new ce(.09,.08,.28,6)),s);k.position.y=-.14,X.add(k);let $=st(gt("rb-boot",()=>new zt(.5,.17,.3)),Wt(Ee.neon,{emissive:678456}));return $.position.set(.08,-.36,0),X.add($),t.add(X),X},I=_(.24),w=_(-.24),A=st(gt("rb-shield",()=>new Ze(1.3,16,12)),new Jt({color:Ee.cyan,transparent:!0,opacity:.22,depthWrite:!1}));A.position.y=.95,A.visible=!1,t.add(A);let R=st(gt("rb-magnet",()=>new sn(1.15,.04,6,28)),new Jt({color:16732120,transparent:!0,opacity:.8}));R.position.y=.95,R.visible=!1,t.add(R);let S=st(gt("rb-shadow",()=>new us(.8,16)),new Jt({color:0,transparent:!0,opacity:.4,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.y=.03;let y=[e,n],C="normal";function G(B){B!==C&&(C=B,f.map=B==="hit"?i.visorHit:B==="happy"?i.visorHappy:i.visor,f.needsUpdate=!0)}function z(B,X,k){let $=B*13,H=0,it=0,at=0,vt=0,kt=0,$t=0,Y=0,tt=.45,_t=1;switch(X){case"run":H=Math.sin($)*.85,it=-H,at=-H*.9,vt=H*.9,kt=Math.abs(Math.sin($))*.07,$t=-.1;break;case"jump":H=-.6,it=.45,at=2.5,vt=2,$t=-.14,_t=1.05;break;case"fall":H=.5,it=-.3,at=1.3,vt=.9,$t=.05;break;case"slide":Y=1.2,tt=.38,H=1.15,it=1.3,at=-1.3,vt=-1.1;break;case"hit":Y=.4,$t=0,at=2.6+Math.sin(B*40)*.3,vt=2.3,H=.3,it=-.3;break;default:_t=1+Math.sin(B*3)*.015,at=Math.sin(B*2)*.1,vt=-at}I.rotation.z=H,w.rotation.z=it,E.rotation.z=at,b.rotation.z=vt,r.position.y=tt+kt,r.rotation.z=X==="slide"||X==="hit"?Y:$t,r.scale.set(1,_t,1),x.rotation.z=Math.sin(B*9)*(X==="run"?.25:.05),G(X==="hit"?"hit":k.happy?"happy":"normal");let ot=k.boost?7033344:k.speed?8008192:k.flash?10027008:0;for(let bt of y)bt.emissive.setHex(ot);if(A.visible=!!k.shield,k.shield){let bt=1+Math.sin(B*6)*.04;A.scale.set(bt,bt,bt)}if(R.visible=!!k.magnet,k.magnet){R.rotation.y=B*3,R.rotation.x=Math.PI/2+Math.sin(B*2)*.3;let bt=1+Math.sin(B*8)*.06;R.scale.set(bt,bt,bt)}}return{root:t,shadow:S,update:z}}var Ch={normal:{color:13628927,emissive:810558,ei:.65,ring:null,scale:.96,glow:"glowGreen",glowOp:.42,glowScale:1.65},recycled:{color:7208888,emissive:884039,ei:.92,ring:Ee.neon,scale:1.05,glow:"glowEmerald",glowOp:.65,glowScale:1.9},rare:{color:7531007,emissive:686745,ei:1.05,ring:Ee.cyan,scale:1.14,glow:"glowCyan",glowOp:.85,glowScale:2.15},gold:{color:16765503,emissive:10119680,ei:1.15,ring:Ee.gold,scale:1.28,glow:"glowGold",glowOp:.95,glowScale:2.6}};function u0(i,t){let e=new le;if(i===0){let n=st(gt("l-bot",()=>new ce(.27,.27,.78,10)),t);n.position.y=-.05,e.add(n);let s=st(gt("l-botn",()=>new ce(.11,.24,.26,10)),t);s.position.y=.47,e.add(s);let r=st(gt("l-botc",()=>new ce(.12,.12,.12,8)),Wt(16742959));r.position.y=.66,e.add(r)}else if(i===1){let n=st(gt("l-cup",()=>new ce(.34,.24,.66,10)),t);e.add(n);let s=st(gt("l-cupl",()=>new ce(.37,.37,.06,10)),Wt(16777215));s.position.y=.35,e.add(s);let r=st(gt("l-cups",()=>new ce(.025,.025,.4,5)),Wt(16742959));r.position.set(.06,.55,0),r.rotation.z=-.3,e.add(r)}else{let n=st(gt("l-bag",()=>new zt(.62,.7,.3)),t);e.add(n);let s=st(gt("l-bagh",()=>new sn(.13,.03,5,10,Math.PI)),Wt(16777215));s.position.set(-.17,.35,0),e.add(s);let r=s.clone();r.position.x=.17,e.add(r)}return e}function Lh(i,t){let e=io(),n=Ch[i]||Ch.normal,s=new le,r=i==="gold"?new Yr({color:n.color,emissive:n.emissive,emissiveIntensity:n.ei,metalness:.72,roughness:.32,flatShading:!0}):new ve({color:n.color,emissive:n.emissive,emissiveIntensity:n.ei,flatShading:!0,transparent:!0,opacity:.93}),o=u0(t,r);o.scale.setScalar(n.scale),s.add(o);let a=new Ti(new ai({map:e[n.glow],transparent:!0,depthWrite:!1,blending:si,opacity:n.glowOp}));if(a.scale.setScalar(n.glowScale),a.position.z=-.3,s.add(a),n.ring){let l=i==="gold"?.84:i==="rare"?.7:.62,c=st(gt("l-ring"+i,()=>new sn(l,.04,6,24)),new Jt({color:n.ring}));c.userData.ring=!0,s.add(c)}return s.userData={shape:o,tier:i},s}var d0={boost:"#ffd23f",magnet:"#ff4fd8",shield:"#19d4ff",speed:"#ff7a2f"};function f0(i){return vn(128,128,t=>{t.fillStyle="#06231c",t.beginPath(),t.arc(64,64,58,0,6.2832),t.fill();let e=t.createRadialGradient(64,64,6,64,64,56);if(e.addColorStop(0,d0[i]),e.addColorStop(1,"rgba(0,0,0,0)"),t.globalAlpha=.45,t.fillStyle=e,t.beginPath(),t.arc(64,64,56,0,6.2832),t.fill(),t.globalAlpha=1,t.strokeStyle="#19d4ff",t.lineWidth=6,t.beginPath(),t.arc(64,64,55,0,6.2832),t.stroke(),t.fillStyle="#ffffff",t.strokeStyle="#ffffff",t.lineJoin="round",t.lineCap="round",i==="boost")t.beginPath(),t.moveTo(72,24),t.lineTo(42,70),t.lineTo(62,70),t.lineTo(54,104),t.lineTo(88,56),t.lineTo(68,56),t.closePath(),t.fill();else if(i==="magnet")t.lineWidth=16,t.beginPath(),t.arc(64,62,24,Math.PI,0),t.lineTo(88,92),t.moveTo(40,62),t.lineTo(40,92),t.stroke(),t.fillStyle="#ff4d6d",t.fillRect(32,86,16,12),t.fillRect(80,86,16,12);else if(i==="shield")t.beginPath(),t.moveTo(64,24),t.lineTo(94,36),t.lineTo(90,70),t.quadraticCurveTo(82,92,64,102),t.quadraticCurveTo(46,92,38,70),t.lineTo(34,36),t.closePath(),t.fill(),t.strokeStyle="#0a5d78",t.lineWidth=8,t.beginPath(),t.moveTo(50,62),t.lineTo(60,74),t.lineTo(80,50),t.stroke();else for(let n=0;n<2;n++)t.beginPath(),t.moveTo(34+n*24,34),t.lineTo(58+n*24,64),t.lineTo(34+n*24,94),t.lineTo(46+n*24,94),t.lineTo(70+n*24,64),t.lineTo(46+n*24,34),t.closePath(),t.fill()})}var Ph={};function Dh(i){let t=new le,e=Ph[i]||(Ph[i]=f0(i)),n=new Ti(new ai({map:e,transparent:!0}));n.scale.setScalar(1.7),t.add(n);let s=st(gt("p-ring",()=>new sn(1,.04,6,28)),new Jt({color:Ee.cyan}));return s.userData.ring=!0,t.add(s),t}function Uh(i){let t=io(),e=new le,n=null;if(i==="cone")[-.28,.32].forEach((s,r)=>{let o=st(gt("o-coneb",()=>new zt(.54,.08,.54)),Wt(2304813));o.position.set(s,.04,r?-.25:.25),e.add(o);let a=st(gt("o-cone",()=>new Gr(.24,.88,8)),Wt(16739115,{emissive:3871232}));a.position.set(s,.48,r?-.25:.25),e.add(a);let l=st(gt("o-cones",()=>new ce(.11,.16,.18,8)),Wt(16056313));l.position.set(s,.56,r?-.25:.25),e.add(l)});else if(i==="bin"){let s=st(gt("o-bin",()=>new ce(.62,.5,1.1,10)),Wt(3964060));s.position.y=.62,s.rotation.z=.12,e.add(s);let r=st(gt("o-binl",()=>new ce(.7,.7,.12,10)),Wt(2909314));r.position.set(-.55,.15,0),r.rotation.z=-.5,e.add(r);let o=st(gt("o-binb",()=>new ce(.585,.55,.22,10)),Wt(14693199,{emissive:4852244}));o.position.set(.07,.6,0),o.rotation.z=.12,e.add(o)}else if(i==="box"){let s=st(gt("o-box",()=>new zt(1.9,1.65,1.6)),Wt(12158546));s.position.y=.825,e.add(s);let r=st(gt("o-boxt",()=>new zt(.32,1.67,1.62)),Wt(14693199,{emissive:4852244}));r.position.y=.825,e.add(r);let o=st(gt("o-boxtop",()=>new zt(1.94,.1,1.64)),Wt(13870444));o.position.y=1.65,e.add(o)}else if(i==="barrier"){let s=ci.redBar||(ci.redBar=new ve({map:t.redStripes,flatShading:!0})),r=st(gt("o-bar",()=>new zt(2.25,.7,.5)),s);r.position.y=.85,e.add(r),[-.85,.85].forEach(o=>{let a=st(gt("o-barl",()=>new zt(.18,.7,.4)),Wt(5594467));a.position.set(o,.35,0),e.add(a)}),n=st(gt("o-barlamp",()=>new Ze(.14,8,6)),new Jt({color:16726843})),n.position.set(-.95,1.3,0),e.add(n)}else if(i==="trashPile"){let s=Wt(2635828),r=Wt(3886406),o=Wt(10383942),a=st(gt("o-tp1",()=>new li(.75,0)),s);a.position.set(-.62,.62,.15),a.scale.set(1.1,.9,1),e.add(a);let l=st(gt("o-tp2",()=>new li(.78,0)),r);l.position.set(.42,.7,-.1),l.scale.set(1.15,1.05,1),e.add(l);let c=st(gt("o-tp3",()=>new li(.62,0)),Wt(2054470));c.position.set(-.08,1.24,.05),e.add(c);let u=st(gt("o-tpc",()=>new zt(.95,.75,.95)),o);u.position.set(.82,.42,.25),u.rotation.z=-.18,e.add(u);let h=st(gt("o-tpw",()=>new sn(.22,.05,6,12)),new Jt({color:16751918}));h.position.set(-.1,1.65,.35),e.add(h)}else if(i==="dumpster"){let s=st(gt("o-dmp",()=>new zt(2.3,1.9,1.65)),Wt(1920318));s.position.y=1.02,e.add(s);let r=ci.orgBar||(ci.orgBar=new ve({map:t.orangeStripes,flatShading:!0})),o=st(gt("o-dmps",()=>new zt(2.34,.36,1.68)),r);o.position.y=1.62,e.add(o);let a=st(gt("o-dmpl",()=>new zt(2.42,.18,1.76)),Wt(1058850));a.position.set(0,2.04,0),a.rotation.z=.05,e.add(a),[-.85,.85].forEach(l=>{let c=st(gt("o-dmpw",()=>new ce(.18,.18,1.6,8)),Wt(1119512));c.rotation.x=Math.PI/2,c.position.set(l,.18,0),e.add(c)}),n=st(gt("o-beacon",()=>new Ze(.18,8,6)),new Jt({color:16726876})),n.position.set(-.95,2.28,.4),e.add(n)}else if(i==="car"){let s=st(gt("o-car",()=>new zt(3.05,.75,1.5)),Wt(6967234));s.position.y=.6,e.add(s);let r=st(gt("o-carc",()=>new zt(1.6,.6,1.4)),Wt(8018648));r.position.set(-.1,1.2,0),e.add(r);let o=st(gt("o-carw",()=>new zt(1.45,.4,1.44)),Wt(10476799,{emissive:1722982}));o.position.set(-.1,1.22,0),e.add(o),n=st(gt("o-cart",()=>new zt(.1,.22,1.25)),new Jt({color:16726843})),n.position.set(-1.56,.76,0),e.add(n),[-.95,.95].forEach(a=>{[.76,-.76].forEach(l=>{let c=st(gt("o-carwh",()=>new ce(.32,.32,.22,10)),Wt(1382684));c.rotation.x=Math.PI/2,c.position.set(a,.32,l),e.add(c)})})}else if(i==="hole"){let s=st(gt("o-hole",()=>new zt(2.7,.06,5.4)),new Jt({color:133127}));s.position.set(0,.04,1.2),e.add(s);let r=st(gt("o-holer",()=>new zt(2.8,.05,.12)),new Jt({color:Ee.danger}));r.position.set(0,.08,-1.45),e.add(r);let o=r.clone();o.position.z=3.85,e.add(o),[-1.45,1.45].forEach(a=>{let l=st(gt("o-holep",()=>new ce(.06,.06,.9,5)),Wt(16756782));l.position.set(a,.45,-1.2),e.add(l);let c=st(gt("o-holel",()=>new Ze(.13,8,6)),new Jt({color:16726843}));c.position.set(a,.95,-1.2),e.add(c)})}else if(i==="pipe"){let s=st(gt("o-pipe",()=>new ce(.4,.4,3.2,12)),Wt(10465984));s.rotation.z=Math.PI/2,s.position.y=1.54,e.add(s),[-1.05,1.05].forEach(r=>{let o=st(gt("o-pipeb",()=>new ce(.43,.43,.3,12)),Wt(14693199,{emissive:4852244}));o.rotation.z=Math.PI/2,o.position.set(r,1.54,0),e.add(o)}),[-1.45,1.45].forEach(r=>{let o=st(gt("o-pipes",()=>new zt(.22,9,.22)),Wt(6056822));o.position.set(r,6.4,0),e.add(o)})}else if(i==="lowBeam"){let s=ci.orgBar||(ci.orgBar=new ve({map:t.orangeStripes,flatShading:!0})),r=st(gt("o-lbeam",()=>new zt(3,1.45,.65)),Wt(2629162));r.position.y=2.02,e.add(r);let o=st(gt("o-lbeams",()=>new zt(3.04,.36,.7)),s);o.position.y=1.48,e.add(o);let a=st(gt("o-lbeaml",()=>new zt(2.9,.08,.72)),new Jt({color:Ee.danger}));a.position.y=1.24,e.add(a),[-1.35,1.35].forEach(l=>{let c=st(gt("o-lbeamp",()=>new zt(.24,8,.24)),Wt(4871520));c.position.set(l,6.5,0),e.add(c)}),n=st(gt("o-lbeamb",()=>new Ze(.2,8,6)),new Jt({color:16726876})),n.position.set(-1.35,1.45,.45),e.add(n)}return e.userData.beacon=n,e}function Nh(i){let t=io(),e=new le;e.visible=!1,e.position.set(32,3.8,-.6),i.add(e);let n=new le,s=st(new li(2.2,0),Wt(3095349));n.add(s),[[-1.3,-.8,.4,1.15],[1.2,-.9,-.3,1.1],[.4,1.5,.2,1.25],[-.9,1.2,-.2,1]].forEach(([B,X,k,$])=>{let H=st(new li($,0),Wt(4280135));H.position.set(B,X,k),n.add(H)});let r=new Jt({color:16726876}),o=st(new zt(.55,.28,.3),r);o.position.set(-1.85,.45,.6),n.add(o);let a=st(new zt(.55,.28,.3),r);a.position.set(-1.85,.45,-.3),n.add(a);let l=st(new zt(.4,.35,1.3),new Jt({color:16751918}));l.position.set(-1.95,-.45,.15),n.add(l),e.add(n);let c=new le,u=st(new Xr(1.75,0),Wt(7021196,{emissive:3869778}));c.add(u);let h=st(new sn(2.45,.16,8,24),new Jt({color:Ee.magenta}));c.add(h);let f=st(new sn(2.05,.12,8,24),new Jt({color:Ee.cyan}));f.rotation.x=Math.PI/2,c.add(f);let p=st(new Ze(.55,10,8),new Jt({color:1692927}));p.position.set(-1.55,.1,0),c.add(p),e.add(c);let g=new le,x=st(new zt(3.4,2.8,2.2),Wt(3818058));g.add(x);let m=st(new zt(3.48,.55,2.26),new ve({map:t.orangeStripes,flatShading:!0}));m.position.y=-.8,g.add(m);let d=st(new ce(.35,.45,1.6,8),Wt(2304045));d.position.set(.6,2,0),g.add(d);let E=st(new ce(.48,.58,1.4,10),Wt(2106923));E.rotation.z=Math.PI/2,E.position.set(-2.1,-.35,0),g.add(E);let b=st(new Ze(.5,10,8),new Jt({color:16751918}));b.position.set(-1.72,.55,.4),g.add(b);let _=st(new sn(1.1,.15,6,12),Wt(8161942));_.position.set(.2,.2,1.2),g.add(_),e.add(g);let I={trash_giant:n,plastic_monster:c,waste_machine:g},w="trash_giant",A=32,R=0,S=1;function y(B,X){w=I[B]?B:"trash_giant";for(let k in I)I[k].visible=k===w;S=X==="ultimate"?1.18:X==="hard"?1.08:X==="easy"?.92:1,e.visible=!0,A=16.8,R=0}function C(){A=33}function G(){R=1}function z(B,X,k){if(!e.visible)return;let $=k?A:33;e.position.x+=($-e.position.x)*Math.min(1,B*3.2),R>0&&(R=Math.max(0,R-B*4.5));let H=Math.sin(R*Math.PI)*1.1;e.position.y=3.8+Math.sin(X*2.6)*.45,e.scale.setScalar(S*(1+H*.08)),w==="trash_giant"?n.rotation.z=Math.sin(X*2.2)*.1+H*.15:w==="plastic_monster"?(u.rotation.y=X*1.8,h.rotation.z=X*2.6,f.rotation.y=-X*3.1,c.position.x=-H*.7):(_.rotation.z=-X*3.4,g.position.x=-H*.6),!k&&e.position.x>31.5&&(e.visible=!1)}return{root:e,show:y,hide:C,pulseAttack:G,update:z}}var Oh=new Lt(267538),Bh=new Lt(10479871),p0=new Lt(Ee.neon),m0=new Lt(14286832),g0=new Lt(16756920);function Fh(i,t){let e=new je(i);return vn(256,512,(n,s,r)=>{n.fillStyle="#000",n.fillRect(0,0,s,r);let o=["#ffe59a","#9fffe0","#7fd8ff","#ffd27a"];for(let a=0;a<16;a++)for(let l=0;l<8;l++)e.next()<t&&(n.fillStyle=e.pick(o),n.globalAlpha=.6+e.next()*.4,n.fillRect(l*32+8,a*32+9,16,14));n.globalAlpha=1},{repeat:!0})}function zh(i,t,e,n,s,r){let o=new zt(t,e,n),a=o.attributes.uv;for(let u=0;u<a.count;u++)a.setXY(u,a.getX(u)*(t/6),a.getY(u)*(e/8));let l=new jt(o,s);l.position.y=e/2;let c=new le;if(c.add(l),r){let u=new jt(new zt(t+.1,.12,n+.1),new Jt({color:r}));u.position.y=e,c.add(u)}if(i.chance(.4)){let u=new jt(new zt(.12,i.range(1.5,3.5),.12),new ve({color:666154}));u.position.set(i.range(-t/3,t/3),e+1,0),c.add(u)}return c}function kh(i,t){return vn(256,128,(n,s,r)=>{n.fillStyle="#02130f",gs(n,4,4,s-8,r-8,16),n.fill(),n.strokeStyle=t,n.lineWidth=6,gs(n,4,4,s-8,r-8,16),n.stroke(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",i==="text"?(n.font='900 52px "Arial Black",Impact,sans-serif',n.fillText("PLASVORA",s/2,r/2-8),n.font="700 20px Arial",n.fillStyle="#d9fff0",n.fillText("Recycle \u2022 Reuse \u2022 Reimagine",s/2,r/2+34)):(n.font='900 86px "Segoe UI Symbol","DejaVu Sans",Arial,sans-serif',n.fillText("\u267B",s/2,r/2+4))})}var Fs=class{constructor(t,e,n,s,r,o=4){this.tileW=e,this.factor=n,this.n=o,this.scroll=0,this.tiles=[];for(let a=0;a<o;a++){let l=s(a);l.position.z=r,t.add(l),this.tiles.push(l)}this.place()}update(t){this.scroll+=t*this.factor,this.place()}place(){let t=Math.floor(this.scroll/this.tileW),e=this.scroll-t*this.tileW;for(let n=0;n<this.n;n++){let s=((t+n)%this.n+this.n)%this.n;this.tiles[s].position.x=-this.tileW+n*this.tileW-e}}},so=class{constructor(t){this.scene=t,this.dist=0,this.bossF=0,this.t=0,this._tgtBg=Oh.clone(),this._tgtHemi=Bh.clone(),this._tgtEdge=p0.clone();let e=Math.floor(Math.random()*1e9);t.background=Oh.clone(),t.fog=new zr(399124,55,170),this.hemi=new Kr(Bh.getHex(),731684,1.55),t.add(this.hemi);let n=new $r(13626111,1.7);n.position.set(-6,14,12),t.add(n),this.buildSky(e),this.buildLayers(e),this.buildRoad()}buildSky(t){let e=new je(t),n=260,s=new Float32Array(n*3);for(let l=0;l<n;l++)s[l*3]=e.range(-90,90),s[l*3+1]=e.range(6,55),s[l*3+2]=-110;let r=new Te;r.setAttribute("position",new Ce(s,3)),this.stars=new hs(r,new wi({color:16777215,size:.55,sizeAttenuation:!0,transparent:!0,opacity:.8,fog:!1})),this.stars.position.x=5,this.scene.add(this.stars),this.moon=new le;let o=new jt(new us(4.2,32),new Jt({color:14286832,fog:!1}));this.moon.add(o);let a=new Ti(new ai({map:vn(128,128,l=>{let c=l.createRadialGradient(64,64,8,64,64,62);c.addColorStop(0,"rgba(150,255,210,.55)"),c.addColorStop(1,"rgba(60,255,170,0)"),l.fillStyle=c,l.fillRect(0,0,128,128)}),transparent:!0,depthWrite:!1,blending:si,fog:!1}));a.scale.setScalar(22),a.position.z=-.1,this.moon.add(a),this.moonDisc=o,this.moon.position.set(25,11,-100),this.scene.add(this.moon)}buildLayers(t){let e=this.scene,n=new ve({color:535085,emissive:16777215,emissiveMap:Fh(t+1,.28),emissiveIntensity:.5,flatShading:!0}),s=new ve({color:735797,emissive:16777215,emissiveMap:Fh(t+2,.38),emissiveIntensity:.8,flatShading:!0});this.far=new Fs(e,40,.1,h=>{let f=new je(t+100+h),p=new le,g=0;for(;g<40;){let x=f.range(5,9),m=f.range(12,32),d=zh(f,x,m,6,n,f.chance(.4)?Ee.neon:0);d.position.x=g+x/2,p.add(d),g+=x+f.range(.5,2)}if(h===1){let x=new jt(new ze(14,7),new Jt({map:kh("text","#39ffa0"),transparent:!0,opacity:.9}));x.position.set(20,8,3.2),p.add(x)}return p},-52),this.mid=new le,this.midLayer=new Fs(e,30,.34,h=>{let f=new je(t+200+h),p=new le,g=0;for(;g<30;){let x=f.range(4,7),m=f.range(7,17),d=zh(f,x,m,5,s,f.chance(.5)?Ee.cyan:Ee.neon);if(d.position.x=g+x/2,p.add(d),g+=x+f.range(.4,1.5),f.chance(.3)){let E=new jt(new ze(2.4,1.2),new Jt({map:kh("icon",f.chance(.5)?"#39ffa0":"#19d4ff"),transparent:!0,opacity:.85}));E.position.set(d.position.x,f.range(3.5,5),2.6),p.add(E)}}return p},-24);let r=new ve({color:3877404}),o=[1740629,2274154,1341770].map(h=>new ve({color:h,flatShading:!0})),a=new ve({color:1196090}),l=new Jt({color:14090224}),c=[3116512,14726447,3126122],u=[13626098,16777215,16757611,9364385];this.near=new Fs(e,22,1,h=>{let f=new je(t+300+h),p=new le,g=E=>{let b=new jt(new ce(.07,.09,5,6),a);b.position.set(E,2.8,0),p.add(b);let _=new jt(new zt(1,.08,.08),a);_.position.set(E+.45,5.3,0),p.add(_);let I=new jt(new Ze(.22,8,6),l);I.position.set(E+.9,5.2,0),p.add(I)},x=E=>{let b=new jt(new ce(.15,.2,2,6),r);b.position.set(E,1.3,0),p.add(b);for(let _=0;_<3;_++){let I=new jt(new Wr(f.range(.9,1.3),0),o[_]);I.position.set(E+f.range(-.6,.6),2.8+f.range(0,1.1),f.range(-.3,.3)),p.add(I)}},m=E=>c.forEach((b,_)=>{let I=new jt(new ce(.4,.33,1,8),new ve({color:b,flatShading:!0}));I.position.set(E+_*.95,.7,0),p.add(I)}),d=E=>{for(let b=0;b<5;b++){let _=new jt(new zt(f.range(.2,.4),.15,.2),new ve({color:f.pick(u)}));_.position.set(E+f.range(-.8,.8),.38,f.range(-.6,1.2)),_.rotation.y=f.range(0,3),p.add(_)}};return g(2),g(13),x(6+f.range(-1,1)),x(17+f.range(-1,1)),h%2===0?m(8.5+f.range(0,1)):d(9+f.range(0,2)),d(15+f.range(0,2)),h%3===0&&d(20),p},-6.5)}buildRoad(){let t=this.scene,e=vn(512,256,(o,a,l)=>{o.fillStyle="#0d1f1d",o.fillRect(0,0,a,l);let c=new je(5);for(let u=0;u<700;u++)o.fillStyle="rgba(255,255,255,"+(.02+c.next()*.05)+")",o.fillRect(c.next()*a,c.next()*l,2,2);o.fillStyle="rgba(220,255,240,.5)",o.fillRect(0,118,230,8)},{repeat:!0});e.repeat.set(260/8,1),this.roadTex=e;let n=new jt(new ze(260,16),new ve({map:e}));n.rotation.x=-Math.PI/2,n.position.set(5,0,4),t.add(n);let s=new jt(new zt(260,.3,5.5),new ve({color:2059099}));s.position.set(5,.15,-6.55),t.add(s),this.edge=new jt(new zt(260,.06,.1),new Jt({color:Ee.neon})),this.edge.position.set(5,.33,-3.85),t.add(this.edge);let r=new jt(new ze(260,60),new ve({color:266767}));r.rotation.x=-Math.PI/2,r.position.set(5,-.03,-40),t.add(r)}update(t,e,n,s){this.t+=t,this.dist+=e,this.far.update(e),this.midLayer.update(e),this.near.update(e),this.roadTex.offset.x=this.dist/8%1;let r=n||s||mt.PHASES[0];this._tgtBg.setHex(r.bg),this._tgtHemi.setHex(r.hemi),this._tgtEdge.setHex(r.edge);let o=Math.min(1,t*2.2);this.scene.background.lerp(this._tgtBg,o),this.scene.fog.color.copy(this.scene.background),this.hemi.color.lerp(this._tgtHemi,o),this.edge.material.color.lerp(this._tgtEdge,o),this.bossF+=((n?1:0)-this.bossF)*Math.min(1,t*2.5),this.moonDisc.material.color.copy(m0).lerp(g0,this.bossF),this.moon.position.y=11+Math.sin(this.t*.3)*.3}};var ro=mt.WORLD,oo=class{constructor(t){this.robot=Ih(),t.add(this.robot.root),t.add(this.robot.shadow),this.reset()}reset(){this.x=0,this.y=0,this.vy=0,this.onGround=!0,this.sliding=!1,this.hitT=0,this.collectT=0,this.inv=0,this.knock=0,this.lock=0,this.buf=0,this.shield=!1,this.boost=0,this.magnet=0,this.speed=0,this.comboGuard=0,this.t=0,this.idle=!1,this.apply()}get state(){return this.idle?"idle":this.hitT>0?"hit":this.onGround?this.sliding?"slide":"run":this.vy>0?"jump":"fall"}hurt(){this.hitT=.5,this.inv=1.6,this.knock=1,this.lock=.14,this.sliding=!1}pickup(){this.collectT=.18}update(t,e,n){let s={jumped:!1,landed:!1,slideStart:!1};this.t+=t;for(let o of["hitT","collectT","inv","lock","boost","magnet","speed","comboGuard"])this[o]>0&&(this[o]=Math.max(0,this[o]-t));this.knock>0&&(this.knock=Math.max(0,this.knock-t/.5)),e?this.buf=ro.JUMP_BUFFER:this.buf>0&&(this.buf-=t);let r=this.lock>0;if(this.buf>0&&this.onGround&&!r&&(this.vy=ro.JUMP_V,this.onGround=!1,this.sliding=!1,this.buf=0,s.jumped=!0),this.onGround){let o=this.sliding;this.sliding=n&&!r,this.sliding&&!o&&(s.slideStart=!0)}else this.sliding=!1,this.vy-=ro.GRAVITY*(n?ro.FALL_MULT:1)*t,this.y+=this.vy*t,this.y<=0&&(this.y=0,this.vy=0,this.onGround=!0,s.landed=!0);return this.apply(),s}apply(){let t=-Math.sin(this.knock*Math.PI*.5)*.9*(this.knock>0?1:0),e=this.robot;e.root.position.set(this.x+t,this.y,0),e.root.visible=!(this.inv>0&&this.hitT<=0&&Math.floor(this.t*16)%2===0);let n=Math.max(.35,1-this.y/7);e.shadow.position.set(this.x+t,.04,.2),e.shadow.scale.set(n*(this.sliding?1.5:1),n,n),e.shadow.material.opacity=.42*n,e.update(this.t,this.state,{shield:this.shield,boost:this.boost>0||this.comboGuard>0,magnet:this.magnet>0,speed:this.speed>0,flash:this.hitT>0&&Math.floor(this.t*30)%2===0,happy:this.collectT>0})}center(t){return t.set(this.x,this.sliding?.5:this.y+.95,0),t}};var _0={easy:{cone:34,bin:34,box:32},medium:{hole:26,barrier:22,pipe:26,trashPile:26},hard:{dumpster:28,lowBeam:28,car:24,trashPile:20}},x0=[{id:"plastic_rush",label:"PLASTIC RUSH",lootBias:{normal:1.25,recycled:1.1,rare:.9,gold:.95},powerBias:{boost:1.35,magnet:1.15,shield:.9,speed:.95},obsBias:{jump:1,slide:.95},bossPref:"trash_giant"},{id:"rare_hunt",label:"RARE HUNT",lootBias:{normal:.85,recycled:1.15,rare:1.35,gold:1.25},powerBias:{boost:.95,magnet:1,shield:1.35,speed:.95},obsBias:{jump:1.05,slide:1.05},bossPref:"plastic_monster"},{id:"jump_gauntlet",label:"SKY HURDLE",lootBias:{normal:.95,recycled:1.05,rare:1.1,gold:1.1},powerBias:{boost:.95,magnet:1.35,shield:1.15,speed:.9},obsBias:{jump:1.35,slide:.78},bossPref:"waste_machine"},{id:"slide_sprint",label:"LOW DRIFT",lootBias:{normal:1,recycled:1.2,rare:1.05,gold:1.05},powerBias:{boost:1.1,magnet:.95,shield:.95,speed:1.35},obsBias:{jump:.85,slide:1.38},bossPref:"plastic_monster"},{id:"combo_master",label:"COMBO FLOW",lootBias:{normal:1.15,recycled:1.15,rare:1.1,gold:.9},powerBias:{boost:1.15,magnet:1.2,shield:1.15,speed:.85},obsBias:{jump:1,slide:1},bossPref:"trash_giant"}],Hh={easy:[["box","hole"],["bin","box"],["cone","bin"],["cone","box"],["bin","hole"],["cone","barrier"]],medium:[["hole","pipe"],["pipe","trashPile"],["cone","trashPile"],["barrier","pipe"],["box","pipe"],["bin","barrier"],["pipe","hole"],["cone","car"]],hard:[["cone","dumpster"],["pipe","dumpster"],["hole","lowBeam"],["trashPile","lowBeam"],["lowBeam","trashPile"],["lowBeam","bin"],["box","hole","pipe"],["cone","pipe","dumpster"],["bin","lowBeam","car"],["hole","pipe","trashPile"],["cone","lowBeam","dumpster"]]},ao={trash_giant:{singles:{trashPile:32,dumpster:28,box:20,hole:20},combos:[["box","trashPile"],["trashPile","hole"],["cone","dumpster"],["hole","trashPile"],["box","hole","dumpster"],["cone","trashPile","hole"]]},plastic_monster:{singles:{pipe:28,lowBeam:26,bin:24,cone:22},combos:[["pipe","bin"],["hole","pipe"],["lowBeam","bin"],["cone","lowBeam"],["pipe","hole","lowBeam"],["bin","pipe","trashPile"]]},waste_machine:{singles:{barrier:26,lowBeam:26,car:24,pipe:24},combos:[["barrier","pipe"],["lowBeam","car"],["hole","lowBeam"],["pipe","dumpster"],["barrier","lowBeam","car"],["cone","pipe","car"]]}};function Vh(i,t,e,n,s){let r=xn[i],o=xn[t],a=r?r.hitW:1.5,l=r?r.need:"jump",c=o?o.need:"jump",h=[.46,.38,.31,.25,.2][Ci((n||1)-1,0,4)];return s==="hard"?h=Math.max(.18,h-.03):s==="ultimate"&&(h=Math.max(.17,h-.04)),l==="jump"&&c==="jump"?Math.max(.18*e,.64*e-a)+(h+.14)*e+.9:l==="jump"&&c==="slide"?Math.max(.16*e,.58*e-a)+(h*.8+.12)*e+.85:l==="slide"&&c==="jump"?(h+.24)*e+1.1:(h+.3)*e+1.1}var lo=class{constructor(t){this.reset(t)}reset(t){this.seed=t>>>0,this.rng=new je(this.seed),this.profile=this.rng.pick(x0),this.slot=0,this.consecObs=0,this.lastObsKind="",this.lastComboKey="",this.lastLootTier="",this.lootStreak=0,this.sincePower=8,this.nextPowerCd=this.rng.range(mt.LOOT.POWER_CD_MIN,mt.LOOT.POWER_CD_MAX),this.prevWasObstacle=!1,this.prevWasPower=!1,this.bossCount=0,this.lastBossVariant="",this.nextBossDist=Math.round(this.rng.range(mt.BOSS.FIRST_MIN_DIST,mt.BOSS.FIRST_MAX_DIST)),this.bossPendingRollDist=this.nextBossDist}checkBossTrigger(t,e,n){if(t<this.nextBossDist)return null;let s=.86,r=n>=4?.08:0;if(this.rng.next()>Math.min(.96,s+r))return this.nextBossDist=Math.round(t+this.rng.range(900,1600)),null;let o=Object.keys(mt.BOSS.VARIANTS),a={};for(let x of o){let m=x===this.lastBossVariant?0:50;this.bossCount===0&&x===this.profile.bossPref&&(m+=20),a[x]=m}let l=this.rng.weighted(a);this.lastBossVariant=l;let c=Hn(t).id,u=c<=3?{easy:30,normal:44,hard:21,ultimate:5}:c===4?{easy:14,normal:36,hard:38,ultimate:12}:{easy:6,normal:24,hard:48,ultimate:22};n>=5&&(u.hard+=8);let h=this.rng.weighted(u),f=mt.BOSS.VARIANTS[l],p=mt.BOSS.DIFFICULTIES[h],g=Math.round(this.rng.range(p.timeMin,p.timeMax));return this.bossCount++,this.bossCount===1?this.nextBossDist=Math.round(Math.max(t+1700,this.rng.range(mt.BOSS.SECOND_MIN_DIST,mt.BOSS.SECOND_MAX_DIST))):this.nextBossDist=Math.round(t+this.rng.range(mt.BOSS.NEXT_GAP_MIN,mt.BOSS.NEXT_GAP_MAX)),{variant:f,diff:p,duration:g}}pickObstacleKind(t,e){let n=this.rng,s;if(e&&ao[e])s={...ao[e].singles};else{let o=n.weighted(t.obsTierWeights);s={..._0[o]}}for(let o in s){let a=xn[o];a&&(s[o]*=this.profile.obsBias[a.need]||1),o===this.lastObsKind&&(s[o]*=.18)}let r=n.weighted(s);return this.lastObsKind=r,r}pickCombo(t,e,n){let s=this.rng,r;if(e&&ao[e])r=ao[e].combos,n==="easy"&&(r=r.filter(l=>l.length===2));else{let l=t.id<=2?{easy:68,medium:32,hard:0}:t.id===3?{easy:24,medium:56,hard:20}:t.id===4?{easy:10,medium:38,hard:52}:{easy:5,medium:25,hard:70},c=s.weighted(l);r=Hh[c],t.maxChain<3&&(r=r.filter(u=>u.length<=t.maxChain))}r.length||(r=Hh.easy);let o=s.pick(r),a=o.join(">");return a===this.lastComboKey&&r.length>1&&(o=s.pick(r.filter(l=>l.join(">")!==this.lastComboKey)),a=o.join(">")),this.lastComboKey=a,this.lastObsKind=o[o.length-1],o}pickLootTier(t,e){let n=this.rng,s={...t.lootWeights};for(let o in s)s[o]*=this.profile.lootBias[o]||1;e&&(s.normal*=.65,s.recycled*=1.25,s.rare*=1.6,s.gold*=1.85),this.lootStreak>=2&&s[this.lastLootTier]&&(s[this.lastLootTier]*=.45);let r=n.weighted(s);return r===this.lastLootTier?this.lootStreak++:(this.lastLootTier=r,this.lootStreak=1),r}pickPowerKind(){let t={...mt.LOOT.POWER_WEIGHTS};for(let e in t)t[e]*=this.profile.powerBias[e]||1;return this.rng.weighted(t)}next(t,e){let n=mt.LOOT,s=this.rng,r=t.dist||0,o=t.speed||mt.WORLD.BASE_SPEED,a=Hn(r),l=!!t.boss,c=l?mt.BOSS.DIFFICULTIES[t.bossDiff]:null;this.sincePower+=e;let u={...a.slotWeights};l&&(u.obstacle=68,u.loot=27,u.power=5);let h=!1;this.slot<n.INTRO_SLOTS&&(u.obstacle=0,u.power=0,h=!0);let f=l?3:a.id>=2?2:1;this.consecObs>=f&&(u.obstacle=0,h=!0),(r<n.POWER_MIN_DIST||this.sincePower<this.nextPowerCd||this.prevWasPower)&&(u.power=0);let p=s.weighted(u);this.slot++;let g=Ci((r-a.minDist)/Math.max(1,a.maxDist-a.minDist),0,1),x=Th(a.gapMax,a.gapMin,g)*s.range(.88,1.14);l&&c&&(x*=c.gapMult);let m;if(p==="obstacle"){let d=l&&c?c.comboChance:a.comboChance;if(d>0&&s.chance(d)){let b=this.pickCombo(a,l?t.bossVariant:null,t.bossDiff),_=[];for(let I=0;I<b.length;I++){let w=b[I],A=I===0?0:Vh(b[I-1],w,o,a.id,t.bossDiff)*s.range(1,1.15),R=xn[w].need==="jump"&&s.chance(.16)?this.pickLootTier(a,!0):null;_.push({kind:w,edgeGap:A,arc:R})}m={type:"combo",items:_},this.consecObs+=2,m.gapAfter=Math.max(x*1.08,n.MIN_RECOVERY_AFTER_COMBO*(a.id>=4?.92:1))}else{let b=this.pickObstacleKind(a,l?t.bossVariant:null),_=xn[b].need,I=_==="jump"&&s.chance(.18)?this.pickLootTier(a,!0):null,w=_==="slide"&&s.chance(.42)?this.pickLootTier(a,!0):null;m={type:"obstacle",kind:b,arc:I,slideBonus:w},this.consecObs++;let A=Vh(b,b,o,a.id,t.bossDiff)/o;m.gapAfter=Math.max(x,A)}this.prevWasObstacle=!0,this.prevWasPower=!1}else if(p==="power")m={type:"power",kind:this.pickPowerKind()},this.sincePower=0,this.nextPowerCd=s.range(n.POWER_CD_MIN,n.POWER_CD_MAX),this.consecObs=0,m.leadPad=this.prevWasObstacle?n.POWER_SAFE_BEFORE*o:0,m.gapAfter=Math.max(x,n.POWER_SAFE_AFTER),this.prevWasObstacle=!1,this.prevWasPower=!0;else{let d=this.pickLootTier(a,!1),E=1;d==="normal"?E=s.weighted({1:78,2:20,3:2})|0:d==="recycled"&&(E=1);let b=s.chance(.24+.06*a.id),_=E>=2&&s.chance(.4)?"arc":"flat";m={type:"plastic",tier:d,count:E,high:b,pattern:_,variants:Array.from({length:E},()=>s.int(0,2))},this.consecObs=0,m.gapAfter=x*(E>=3?.92:.86),this.prevWasObstacle=!1,this.prevWasPower=!1}return m.forcedSafe=h,m}};var zs=class{constructor(t,e,n){this.free=[];for(let s=0;s<e;s++){let r=t(s);r.visible=!1,n.add(r),this.free.push(r)}}get(){let t=this.free.pop();return t&&(t.visible=!0),t||null}put(t){t.visible=!1,this.free.push(t)}},co=mt.WORLD,v0=.92,y0=2.72,ho=class{constructor(t){this.group=new le,t.add(this.group),this.director=new lo(1),this.obstacles=[],this.loot=[],this.powers=[],this.obsPools={},this.lootPools={},this.powerPools={};for(let e in xn)this.obsPools[e]=new zs(()=>Uh(e),6,this.group);for(let[e,n]of[["normal",10],["recycled",6],["rare",5],["gold",4]])for(let s=0;s<3;s++)this.lootPools[e+s]=new zs(()=>Lh(e,s),n,this.group);for(let e of["boost","magnet","shield","speed"])this.powerPools[e]=new zs(()=>Dh(e),2,this.group);this.distToNext=0,this.timeSince=0}reset(t){for(let e of this.obstacles)e.pool.put(e.mesh);for(let e of this.loot)e.pool.put(e.mesh);for(let e of this.powers)e.pool.put(e.mesh);this.obstacles.length=0,this.loot.length=0,this.powers.length=0,this.director.reset(t),this.distToNext=0,this.timeSince=0}clearAhead(t){this.obstacles=this.obstacles.filter(e=>e.x>t?(e.pool.put(e.mesh),!1):!0)}addLoot(t,e,n,s){let r=this.lootPools[t+e%3],o=r&&r.get();o&&(o.position.set(n,s,0),this.loot.push({mesh:o,pool:r,tier:t,x:n,y:s,ph:Math.random()*6.28,taken:!1}))}placeObstacle(t,e,n,s){let r=xn[t],o=this.obsPools[t],a=o&&o.get();if(!a)return r?r.hitW:1.8;if(a.position.set(e,0,0),this.obstacles.push({mesh:a,pool:o,kind:t,def:r,x:e,passed:!1,hit:!1}),r.need==="slide"&&s)this.addLoot(s,0,e,.58);else if(n){let l=r.hitY+r.hitH/2,c=Math.min(3.45,Math.max(2.65,l+1.35));this.addLoot(n,n==="normal"?0:1,e,c)}return r.hitW}spawnBossReward(t,e){this.clearAhead(12);let n=16.5;for(let s=0;s<t.rareDrops;s++)this.addLoot("rare",s%3,n,1.05),n+=2.2;e.chance(t.goldChance)&&(this.addLoot("gold",0,n+.3,1.35),n+=2.6),this.distToNext=Math.max(this.distToNext,14)}spawnSlot(t,e){let n=e+(t.leadPad||0),s=1.5;if(t.type==="obstacle")s=this.placeObstacle(t.kind,n,t.arc,t.slideBonus)+(t.leadPad||0);else if(t.type==="combo"){let r=n,o=0;for(let a=0;a<t.items.length;a++){let l=t.items[a],u=xn[l.kind].hitW/2;a>0&&(r+=o+l.edgeGap+u),this.placeObstacle(l.kind,r,l.arc,null),o=u}s=r+o-e}else if(t.type==="power"){let r=this.powerPools[t.kind],o=r&&r.get();if(!o)return 2;o.position.set(n,1.55,0),this.powers.push({mesh:o,pool:r,kind:t.kind,x:n,y:1.55,ph:Math.random()*6.28,taken:!1}),s=1.6+(t.leadPad||0)}else{let r=t.high?y0:v0;for(let o=0;o<t.count;o++){let a=t.pattern==="arc"&&t.count===3&&o===1?.65:t.pattern==="arc"&&t.count===2&&o===1?.45:0,l=t.variants?t.variants[o]:o%3;this.addLoot(t.tier,l,n+o*1.75,r+a)}s=t.count*1.75}return s}upcomingWarning(t){let e=null;for(let n of this.obstacles){if(n.hit||!n.def.warning)continue;let s=n.x-t;s>8&&s<25&&(!e||s<e.distX)&&(e={distX:s,need:n.def.need,name:n.def.name})}return e}update(t,e,n,s,r){this.timeSince+=t,this.distToNext-=e;let o=0;for(;this.distToNext<=0&&o++<3;){let l=this.director.next(n,this.timeSince);this.timeSince=0;let c=co.SPAWN_X-this.distToNext,u=this.spawnSlot(l,c);n.boss&&(l.type==="obstacle"||l.type==="combo")&&r&&r(),this.distToNext+=n.speed*l.gapAfter+u}let a=.85+Math.sin(s*14)*.35;for(let l of this.obstacles)l.x-=e,l.mesh.position.x=l.x,l.mesh.userData.beacon&&l.mesh.userData.beacon.scale.setScalar(a);for(let l of this.loot)l.x-=e,l.mesh.position.set(l.x,l.y+Math.sin(s*4+l.ph)*.12,0),l.mesh.userData.shape.rotation.y=s*2.2+l.ph,l.tier==="gold"&&(l.mesh.userData.shape.rotation.z=Math.sin(s*3+l.ph)*.15);for(let l of this.powers)l.x-=e,l.mesh.position.set(l.x,l.y+Math.sin(s*3+l.ph)*.18,0),l.mesh.children[1].rotation.x=s*2.5;this.obstacles=this.obstacles.filter(l=>l.x<co.DESPAWN_X?(l.pool.put(l.mesh),!1):!0),this.loot=this.loot.filter(l=>l.taken||l.x<co.DESPAWN_X?(l.pool.put(l.mesh),!1):!0),this.powers=this.powers.filter(l=>l.taken||l.x<co.DESPAWN_X?(l.pool.put(l.mesh),!1):!0)}};function Gh(i){let t=mt.COMBO.thresholds,e=0;for(let n=0;n<t.length;n++)i>=t[n]&&(e=n);return e}var uo=class{constructor(){this.reset()}reset(){this.score=0,this.combo=0,this.comboMax=0,this.plastic=0,this.meters=0,this.cleared=0,this._acc=0}get level(){return Gh(this.combo)}get multiplier(){return mt.COMBO.mult[this.level]}get maxLevel(){return Gh(this.comboMax)}collect(t,e){let n=this.level;this.combo++,this.plastic++,this.combo>this.comboMax&&(this.comboMax=this.combo);let s=mt.SCORE[t]||mt.SCORE.normal,r=Math.round(s*this.multiplier*(e?mt.SCORE.boostMult:1));return this.score+=r,{pts:r,levelUp:this.level>n,level:this.level,combo:this.combo}}breakCombo(){this.combo=0}addBonus(t,e){let n=Math.round(t*(e?mt.SCORE.boostMult:1));return this.score+=n,n}addDistance(t,e,n){let s=t*mt.WORLD.DISTANCE_PER_UNIT;this.meters+=s,this._acc+=s*mt.SCORE.perMeter*(e?mt.SCORE.boostMult:1)*(n?1.35:1);let r=Math.floor(this._acc);return r>0&&(this.score+=r,this._acc-=r),s}};var wn=320,fo=class{constructor(t,e){this.scene=t,this.flashEl=e,this.rng=new je(Math.floor(Math.random()*1e9)),this.pos=new Float32Array(wn*3),this.col=new Float32Array(wn*3),this.vel=new Float32Array(wn*3),this.life=new Float32Array(wn),this.max=new Float32Array(wn),this.base=new Float32Array(wn*3),this.next=0;let n=new Te;n.setAttribute("position",new Ce(this.pos,3)),n.setAttribute("color",new Ce(this.col,3)),this.points=new hs(n,new wi({size:.3,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:si,fog:!1})),this.points.frustumCulled=!1,t.add(this.points);for(let o=0;o<wn;o++)this.pos[o*3+1]=-999;this.rings=[];let s=new qr(.9,1,28);for(let o=0;o<6;o++){let a=new jt(s,new Jt({color:16777215,transparent:!0,depthWrite:!1,side:dn,fog:!1}));a.visible=!1,a.userData={t:0,max:.4,size:2},t.add(a),this.rings.push(a)}this.lines=[];let r=new ze(1,.035);for(let o=0;o<16;o++){let a=new jt(r,new Jt({color:12582888,transparent:!0,opacity:.25,depthWrite:!1,fog:!1}));a.visible=!1,a.userData={len:4,v:2},t.add(a),this.lines.push(a)}this.shakeT=0,this.shakeDur=.01,this.shakeMag=0,this.slowT=0,this.slowS=1,this.flashA=0}reset(){for(let t=0;t<wn;t++)this.life[t]=0,this.pos[t*3+1]=-999;this.points.geometry.attributes.position.needsUpdate=!0,this.rings.forEach(t=>{t.visible=!1}),this.lines.forEach(t=>{t.visible=!1}),this.shakeT=0,this.slowT=0,this.flashA=0,this.applyFlash()}burst(t,e,n,s,r,o=5,a={}){let l=new Lt(s),c=this.rng;for(let u=0;u<r;u++){let h=this.next;this.next=(this.next+1)%wn;let f=c.range(0,6.283),p=o*c.range(.3,1),g=a.up||0;this.pos[h*3]=t,this.pos[h*3+1]=e,this.pos[h*3+2]=n+c.range(-.2,.2),this.vel[h*3]=Math.cos(f)*p+(a.vx||0),this.vel[h*3+1]=Math.sin(f)*p+g,this.vel[h*3+2]=c.range(-1,1),this.base[h*3]=l.r,this.base[h*3+1]=l.g,this.base[h*3+2]=l.b,this.max[h]=this.life[h]=(a.life||.55)*c.range(.6,1.3)}}ring(t,e,n,s=2.5){let r=this.rings.find(o=>!o.visible)||this.rings[0];r.visible=!0,r.position.set(t,e,.5),r.material.color.setHex(n),r.userData.t=0,r.userData.size=s}shake(t,e){this.shakeMag=Math.max(this.shakeT>0?this.shakeMag:0,t),this.shakeT=e,this.shakeDur=e}flash(t,e){this.flashColor=t,this.flashA=e,this.applyFlash()}slowmo(t,e){this.slowS=t,this.slowT=e}timeScale(){return this.slowT<=0?1:this.slowS+(1-this.slowS)*(1-Math.min(1,this.slowT/.2))}shakeOffset(t){if(this.shakeT<=0)return t.set(0,0),t;let e=this.shakeMag*(this.shakeT/this.shakeDur);return t.set((Math.random()*2-1)*e,(Math.random()*2-1)*e),t}applyFlash(){this.flashEl&&(this.flashEl.style.background=this.flashColor||"#ff2a4d",this.flashEl.style.opacity=String(Ci(this.flashA,0,.55)))}update(t,e,n,s){this.shakeT>0&&(this.shakeT-=e),this.slowT>0&&(this.slowT-=e),this.flashA>0&&(this.flashA=Math.max(0,this.flashA-e*2.4),this.applyFlash());for(let r=0;r<wn;r++){if(this.life[r]<=0)continue;this.life[r]-=t;let o=Math.max(0,this.life[r]/this.max[r]);if(this.life[r]<=0){this.pos[r*3+1]=-999,this.col[r*3]=this.col[r*3+1]=this.col[r*3+2]=0;continue}this.vel[r*3+1]-=9*t,this.pos[r*3]+=this.vel[r*3]*t,this.pos[r*3+1]+=this.vel[r*3+1]*t,this.pos[r*3+2]+=this.vel[r*3+2]*t,this.col[r*3]=this.base[r*3]*o,this.col[r*3+1]=this.base[r*3+1]*o,this.col[r*3+2]=this.base[r*3+2]*o}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0;for(let r of this.rings){if(!r.visible)continue;let o=r.userData;o.t+=t;let a=o.t/o.max;if(a>=1){r.visible=!1;continue}r.scale.setScalar(.3+o.size*a),r.material.opacity=1-a}for(let r of this.lines){let o=r.userData;if(!r.visible){s>.05&&Math.random()<s*30*t&&(r.visible=!0,o.len=this.rng.range(3,8),o.v=this.rng.range(1.6,2.6),r.scale.x=o.len,r.position.set(24,this.rng.range(.5,9),this.rng.range(-3,5)),r.material.opacity=.12+.2*s);continue}r.position.x-=n*o.v*t,r.position.x+o.len<-12&&(r.visible=!1)}}};function Ll(i){let t=i.getContext("2d");i.width=i.clientWidth,i.height=i.clientHeight;let e=["#39ffa0","#ffd23f","#19d4ff","#ff4fd8","#ff7a2f","#ffffff"],n=[];for(let o=0;o<170;o++)n.push({x:Math.random()*i.width,y:-20-Math.random()*i.height*.6,vx:(Math.random()-.5)*120,vy:120+Math.random()*260,s:6+Math.random()*8,r:Math.random()*6,vr:(Math.random()-.5)*14,c:e[o%e.length]});let s=performance.now(),r=s;(function o(a){let l=Math.min(.05,(a-r)/1e3);r=a,t.clearRect(0,0,i.width,i.height);for(let c of n)c.x+=c.vx*l,c.y+=c.vy*l,c.r+=c.vr*l,c.vx+=Math.sin(c.r)*20*l,t.save(),t.translate(c.x,c.y),t.rotate(c.r),t.fillStyle=c.c,t.fillRect(-c.s/2,-c.s/4,c.s,c.s/2),t.restore();a-s<4800?requestAnimationFrame(o):t.clearRect(0,0,i.width,i.height)})(s)}var ks={},po=!1,mo=!1,Dl=!1,Wh={Space:1,ArrowUp:1,KeyW:1},qh={ArrowDown:1,KeyS:1},Xh={KeyP:1,Escape:1},M0=i=>i.target&&(i.target.tagName==="INPUT"||i.target.tagName==="TEXTAREA");window.addEventListener("keydown",i=>{M0(i)||(ks[i.code]=!0,Dl&&(Wh[i.code]||qh[i.code]||Xh[i.code])&&i.preventDefault(),!(i.repeat||!Dl)&&(Wh[i.code]&&(po=!0),Xh[i.code]&&(mo=!0)))});window.addEventListener("keyup",i=>{ks[i.code]=!1});window.addEventListener("blur",()=>{for(let i in ks)ks[i]=!1});var tn={setActive(i){Dl=i,i||this.clear()},clear(){po=!1,mo=!1},slideHeld(){for(let i in qh)if(ks[i])return!0;return!1},takeJump(){let i=po;return po=!1,i},takePause(){let i=mo;return mo=!1,i}};var ie=null,go,Gn,Hs,Nl,yo={music:.5,sfx:.8},_o=!1,xs="menu",Yh=null,xo=0,vo=0,S0=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],b0={0:1,3:1,6:1,8:1,11:1,14:1},Ul=i=>440*Math.pow(2,(i-69)/12);function E0(){if(ie)return;let i=window.AudioContext||window.webkitAudioContext;if(!i)return;ie=new i,go=ie.createGain(),go.connect(ie.destination),Gn=ie.createGain(),Gn.connect(go),Hs=ie.createGain(),Hs.connect(go),Nl=ie.createBuffer(1,ie.sampleRate,ie.sampleRate);let t=Nl.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;Zh()}function Zh(){ie&&(Gn.gain.value=yo.music*.3,Hs.gain.value=yo.sfx*.7)}function ke(i,t,e,n,s,r,o){if(!ie)return;s=s||ie.currentTime;let a=ie.createOscillator(),l=ie.createGain();a.type=e||"sine",a.frequency.setValueAtTime(i,s),r&&a.frequency.exponentialRampToValueAtTime(Math.max(20,r),s+t),l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(n||.2,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+t),a.connect(l),l.connect(o||Hs),a.start(s),a.stop(s+t+.02)}function _s(i,t,e,n,s){if(!ie)return;e=e||ie.currentTime;let r=ie.createBufferSource(),o=ie.createBiquadFilter(),a=ie.createGain();r.buffer=Nl,o.type="highpass",o.frequency.value=n||2e3,a.gain.setValueAtTime(t||.2,e),a.gain.exponentialRampToValueAtTime(1e-4,e+i),r.connect(o),o.connect(a),a.connect(s||Hs),r.start(e),r.stop(e+i+.02)}var hi=(i,t,e,n,s)=>{if(!ie)return;let r=ie.currentTime;i.forEach((o,a)=>ke(o,t,e,n,r+a*s))};function T0(i,t,e){let n=Math.floor(i/16)%4,s=i%16,r=S0[n],o=xs==="menu",a=xs==="boss";!o&&s%4===0&&ke(150,.16,"sine",.9,t,45,Gn),!o&&(s===4||s===12)&&_s(.1,.3,t,1500,Gn),(s%2===1||a&&s%2===0)&&_s(.04,o?.06:.13,t,7e3,Gn),b0[s]&&ke(Ul(r[0]-24),e*2.2,"sawtooth",o?.2:.3,t,null,Gn),s%2===0&&ke(Ul(r[s/2%3]+12),e*1.6,"square",o?.06:.09,t,null,Gn),a&&ke(Ul(r[(s+1)%3]+24),e*.9,"triangle",.09,t+e*.5,null,Gn)}function w0(){if(!ie||!_o)return;let t=60/(xs==="boss"?150:xs==="menu"?100:128)/4;for(;xo<ie.currentTime+.16;)T0(vo,xo,t),xo+=t,vo=(vo+1)%64}var Yt={unlock(){E0(),ie&&ie.state==="suspended"&&ie.resume()},setVolumes(i,t){yo.music=i,yo.sfx=t,Zh()},startMusic(i){this.unlock(),ie&&(xs=i||"run",!_o&&(_o=!0,vo=0,xo=ie.currentTime+.06,Yh=setInterval(w0,40)))},setMode(i){xs=i},stopMusic(){_o=!1,clearInterval(Yh)},click(){ke(660,.07,"square",.12)},jump(){ke(280,.16,"square",.14,0,620)},slide(){_s(.22,.16,0,1200)},land(){ke(120,.08,"sine",.25,0,70)},collect(i){let t=700+i*80;ke(t,.08,"square",.12),ke(t*1.5,.1,"square",.1,ie?ie.currentTime+.05:0)},rare(){hi([880,1175,1480],.11,"triangle",.18,.06)},gold(){hi([784,1047,1319,1568],.14,"square",.17,.07)},combo(i){let t=520+i*60;hi([t,t*1.25,t*1.5],.12,"triangle",.2,.07)},power(){hi([440,660,880,1320],.12,"sawtooth",.15,.08)},shield(){ke(900,.2,"triangle",.2,0,200),_s(.15,.14,0,3e3)},smash(){_s(.2,.28,0,600),ke(200,.15,"square",.14,0,80)},hit(){_s(.3,.42,0,300),ke(160,.3,"sawtooth",.28,0,40)},boss(){if(!ie)return;let i=ie.currentTime;for(let t=0;t<6;t++)ke(t%2?520:780,.22,"sawtooth",.18,i+t*.38)},bossWin(){hi([523,659,784,1047,1319],.2,"square",.17,.09)},gameOver(){hi([392,330,262,196],.35,"sawtooth",.19,.22)},reward(){hi([523,659,784,1047,784,1047,1319],.16,"square",.17,.1)},highScore(){hi([523,659,784,659,784,1047,1319],.2,"square",.19,.11)},tick(i){ke(i?880:520,i?.3:.1,"square",.16)}};var Ol={},He={LB:"plasvora3d_leaderboard_v1",SETTINGS:"plasvora3d_settings_v1",STOCK:"plasvora3d_stock_v1",CLAIMS:"plasvora3d_claims_v1"},Ve={get(i,t){try{let e=window.localStorage.getItem(i);if(e!==null)return JSON.parse(e)}catch{}return i in Ol?Ol[i]:t},set(i,t){Ol[i]=t;try{window.localStorage.setItem(i,JSON.stringify(t))}catch{}}},Pi={data:null,load(){let i=Ve.get(He.SETTINGS,{});return this.data={music:typeof i.music=="number"?i.music:.5,sfx:typeof i.sfx=="number"?i.sfx:.8},this.data},get(){return this.data||this.load()},save(){Ve.set(He.SETTINGS,this.get())}};var A0=10,vs={list(){let i=Ve.get(He.LB,[]);return Array.isArray(i)?i:[]},best(){let i=this.list();return i.length?i[0].score:0},add(i){let t=this.best(),e={id:Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36),name:i.name,score:Math.floor(i.score),distance:Math.round(i.distance),plastic:i.plastic,rank:i.rank,comboMax:i.comboMax,date:new Date().toISOString()},n=this.list().slice();n.push(e),n.sort((o,a)=>a.score-o.score);let s=n.slice(0,A0);Ve.set(He.LB,s);let r=s.findIndex(o=>o.id===e.id);return{entry:e,position:r+1,isTop1:r===0&&e.score>0&&e.score>t}},clear(){Ve.set(He.LB,[])}};var Jh="ABCDEFGHJKMNPQRSTUVWXYZ23456789";function Mo(){let i=Ve.get(He.STOCK,null),t={},e={};for(let s in mt.REWARDS)t[s]=mt.REWARDS[s].stock;if(!i){let s={base:t,rem:{...t}};return Ve.set(He.STOCK,s),s}let n=!1;for(let s in t){let r=i.base[s];r===void 0?(i.base[s]=t[s],i.rem[s]=t[s],n=!0):r!==t[s]&&(i.rem[s]=Math.max(0,(i.rem[s]||0)+t[s]-r),i.base[s]=t[s],n=!0)}return n&&Ve.set(He.STOCK,i),i}var Bl=()=>Ve.get(He.CLAIMS,[]);function R0(i){for(let t=0;t<50;t++){let e="";for(let s=0;s<4;s++)e+=Jh[Math.floor(Math.random()*Jh.length)];let n=mt.REWARD_CODE_PREFIX+"-"+e;if(!i.some(s=>s.code===n))return n}return mt.REWARD_CODE_PREFIX+"-"+Date.now().toString(36).toUpperCase().slice(-4)}var Ii={status(i,t){let e=Bs(i);if(!e.prize)return{rank:e,state:"none"};let n=t&&Bl().find(r=>r.runId===t);if(n)return{rank:e,state:"claimed",code:n.code,prize:e.prize};let s=Mo().rem[e.id]||0;return s>0?{rank:e,state:"available",left:s,prize:e.prize}:{rank:e,state:"soldout",prize:e.prize}},claim(i,t,e){let n=this.status(t,i);if(n.state==="claimed")return{ok:!1,reason:"claimed",code:n.code,rank:n.rank,prize:n.prize};if(n.state!=="available")return{ok:!1,reason:n.state,rank:n.rank};let s=Mo();s.rem[n.rank.id]=Math.max(0,(s.rem[n.rank.id]||0)-1),Ve.set(He.STOCK,s);let r=Bl(),o=R0(r);return r.push({runId:i,code:o,tier:n.rank.id,prize:n.prize,score:Math.floor(t),name:e,date:new Date().toISOString()}),Ve.set(He.CLAIMS,r),{ok:!0,code:o,rank:n.rank,prize:n.prize}},stockTable(){let i=Mo();return _n.filter(t=>t.prize).map(t=>({id:t.id,name:t.name,prize:t.prize,left:i.rem[t.id]||0,total:i.base[t.id]||0}))},claimCount(){return Bl().length},resetStock(){Ve.set(He.STOCK,null),Ve.set(He.CLAIMS,[]),Mo()}};var j=i=>document.getElementById(i),C0=["menu","name","how","set","admin","pause","over","claim","explore","lb","champ"],P0={explorer:"ECO ROOKIE",master:"ECO GUARDIAN"},Se=null,on="menu",Vl="over",Fl=null,zl=0,Gs=!1;function Le(i){on=i;for(let e of C0)j("scr-"+e).hidden=e!==i;if(i==="none")return;let t=j("scr-"+i);if(t){if(i==="name"){let e=j("nick");e.value="",setTimeout(()=>e.focus(),30)}else if(i==="admin")setTimeout(()=>j("adm-pin-in").focus(),30);else if(i!=="champ"){let e=[...t.querySelectorAll(".btn")].find(n=>!n.hidden&&n.classList.contains("primary"))||[...t.querySelectorAll(".btn")].find(n=>!n.hidden);e&&setTimeout(()=>e.focus(),30)}}}var Ge={};function rn(i,t){Ge[i]!==t&&(Ge[i]=t,j(i).textContent=t)}var Qh=[["boost","\u26A1","ECO BOOST"],["magnet","M","MAGNET"],["shield","S","SHIELD"],["speed","\xBB","SPEED"],["guard","G","COMBO GUARD"]],jh={};function I0(){let i=j("h-powers");for(let[e,n]of Qh){let s=document.createElement("div");s.className="pw"+(e==="guard"?" guard":""),s.hidden=!0,s.innerHTML='<span class="ic">'+n+"</span><i><u></u></i>",i.appendChild(s),jh[e]={el:s,bar:s.querySelector("u")}}let t=j("h-hearts");for(let e=0;e<mt.LIVES;e++){let n=document.createElement("i");n.textContent="\u2665",t.appendChild(n)}}function L0(i){if(rn("h-score",Vn(i.score)),rn("h-high",Vn(Math.max(i.high,i.score))),rn("h-dist",eo(i.meters)),rn("h-plastic",String(i.plastic)),rn("h-speed",i.speed.toFixed(2)),i.phase){let o="P"+i.phase.id+" \u2022 "+i.phase.name;rn("h-phase",o);let a=j("h-phase"),l="phase-pill p"+i.phase.id;Ge.phCls!==l&&(Ge.phCls=l,a.className=l)}if(i.tier){let{cur:o,next:a,pct:l}=i.tier;rn("h-tier-name",o.name);let c=a?"NEXT: "+a.name+" \u2014 "+Vn(a.minScore):"\u2605 HADIAH UTAMA TERBUKA \u2605";rn("h-tier-next",c);let u=Math.round(l*100);Ge.tierPct!==u&&(Ge.tierPct=u,j("h-tier-fill").style.width=u+"%");let h=j("h-tier-box"),f=!a;Ge.isChamp!==f&&(Ge.isChamp=f,h.classList.toggle("champ",f))}let t=j("h-hearts").children;for(let o=0;o<t.length;o++)t[o].className=o<i.lives?"":"off";let e=j("h-combo");if(i.level>=1){e.hidden&&(e.hidden=!1);let o="x"+(i.level+1);Ge.combo!==o&&(Ge.combo=o,j("h-combo-n").textContent=o,e.classList.remove("pulse"),e.offsetWidth,e.classList.add("pulse"))}else e.hidden||(e.hidden=!0,Ge.combo="");let n=j("h-boss");if(i.boss&&i.boss.active){n.hidden&&(n.hidden=!1);let o=i.boss.variant?i.boss.variant.name:"ECO BOSS",a=i.boss.diff?" ["+i.boss.diff.label+"]":"";rn("h-boss-name",o+a),rn("h-boss-t",String(Math.ceil(i.boss.left))),j("h-boss-fill").style.width=100*(1-i.boss.left/Math.max(1,i.boss.total))+"%"}else n.hidden||(n.hidden=!0);let s=j("h-warn");if(i.warn){s.hidden&&(s.hidden=!1);let o=i.warn.need==="slide";rn("h-warn-ic",o?"\u25BC":"\u25B2"),rn("h-warn-txt",o?"SLIDE":"JUMP"),Ge.warnSlide!==o&&(Ge.warnSlide=o,s.classList.toggle("slide",o))}else s.hidden||(s.hidden=!0);for(let[o]of Qh){let a=jh[o],l=i.powers[o],c=o==="shield"?!!l:l>0;if(a.el.hidden===c&&(a.el.hidden=!c),c){let u=o==="guard"?8:mt.POWER[o]||1;a.bar.style.width=(o==="shield"?100:Math.min(100,100*l/u))+"%"}}let r=j("h-hint");r.classList.contains("off")!==!i.hint&&r.classList.toggle("off",!i.hint)}function D0(){let i=j("h-score");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump")}var tu={active:null,t:0,queue:[],push(i){if(i.dur=i.dur||1.4,i.prio=i.prio||1,i.at=performance.now(),this.active&&this.active.text===i.text){this.t=0;return}if(!this.active||i.prio>this.active.prio){this.show(i);return}this.queue.length<3&&this.queue.push(i)},show(i){this.active=i,this.t=0;let t=j("fb-center");t.className="fb-center "+(i.cls||""),j("fb-text").textContent=i.text,j("fb-sub").textContent=i.sub||"",j("fb-sub").hidden=!i.sub,t.hidden=!1,t.style.animation="none",t.offsetWidth,t.style.animation=""},update(i){if(!this.active)return;this.t+=i;let t=j("fb-center");if(this.t>this.active.dur-.25&&!t.classList.contains("out")&&t.classList.add("out"),this.t>=this.active.dur){t.hidden=!0,this.active=null;let e=performance.now();this.queue=this.queue.filter(s=>e-s.at<1500).sort((s,r)=>r.prio-s.prio);let n=this.queue.shift();n&&this.show(n)}},clear(){this.active=null,this.queue.length=0,j("fb-center").hidden=!0}},Vs=[];function U0(i,t,e,n,s){let r=Vs.find(o=>!o.busy);if(!r)if(Vs.length>=3){if(t==="normal")return;r=Vs.sort((o,a)=>o.at-a.at)[0]}else{let o=document.createElement("div");j("floats").appendChild(o),r={el:o,busy:!1,at:0},Vs.push(r)}r.busy=!0,r.at=performance.now(),r.el.className="fl "+t,r.el.innerHTML=i+(s?"<small>"+s+"</small>":""),r.el.style.left=e+"%",r.el.style.top=n-Vs.filter(o=>o.busy&&o!==r).length*5+"%",r.el.style.animation="none",r.el.offsetWidth,r.el.style.animation="",clearTimeout(r.to),r.to=setTimeout(()=>{r.busy=!1,r.el.className="fl",r.el.textContent=""},820)}function N0(i){let t=j("countdown");t.hidden=!1,t.textContent=i,t.classList.toggle("go",i==="GO!"),t.style.animation="none",t.offsetWidth,t.style.animation=""}var O0=()=>{j("countdown").hidden=!0};function B0(i){let t=j("runtag");if(!i){t.hidden=!0;return}t.textContent=i,t.hidden=!1}function F0(i){j("hud").hidden=!i,i||(tu.clear(),j("countdown").hidden=!0,j("runtag").hidden=!0,j("h-warn").hidden=!0)}function z0(){for(let i in Ge)delete Ge[i];j("h-combo").hidden=!0,j("h-boss").hidden=!0,j("h-warn").hidden=!0,j("h-hint").classList.remove("off"),j("h-tier-box").classList.remove("champ")}function k0(i){let t=_n.find(e=>e.id===i);return t?t.name:P0[i]||""}function H0(i){Fl=i===void 0?Fl:i;let t=j("lb-list"),e=vs.list();if(t.innerHTML="",!e.length){let n=document.createElement("li");n.className="empty",n.textContent="Belum ada skor. Jadilah yang pertama!",t.appendChild(n);return}e.forEach((n,s)=>{let r=document.createElement("li");n.id===Fl&&(r.className="me");let o=new Date(n.date),a=isNaN(o)?"":("0"+o.getDate()).slice(-2)+"/"+("0"+(o.getMonth()+1)).slice(-2);[["n",s+1+"."],["nm",n.name],["sc",Vn(n.score)],["ds",eo(n.distance||0)+" KM "+a],["rk",k0(n.rank).replace("ECO ","")]].forEach(([l,c])=>{let u=document.createElement("span");u.className=l,u.textContent=c,r.appendChild(u)}),t.appendChild(r)})}function V0(i,t,e,n){if(clearInterval(zl),e<=0){i.textContent=Vn(t),n&&n();return}let s=performance.now();i.textContent="0",zl=setInterval(()=>{let r=Math.min(1,(performance.now()-s)/e);i.textContent=Vn(t*(1-Math.pow(1-r,3))),r>=1&&(clearInterval(zl),n&&n())},30)}function G0(i){let t=Ii.status(i.score,i.entry.id),e=j("o-reward");e.className="o-reward";let n=j("o-claim");if(n.hidden=!0,t.state==="available")e.innerHTML="REWARD UNLOCKED<br><b>"+t.prize+"</b>",n.hidden=!1;else if(t.state==="soldout")e.classList.add("out"),e.innerHTML="<b>REWARD HABIS</b><br>Tetap tercatat di leaderboard!";else if(t.state==="claimed")e.innerHTML="Reward sudah diklaim &bull; KODE <b>"+t.code+"</b>";else{let s=_n.find(r=>r.prize);e.innerHTML="Capai <b>"+Vn(s.minScore)+"</b> poin untuk reward pertama ("+s.name+")."}return t}function W0(i,t=!0){j("o-name").textContent=i.name,j("o-dist").textContent=eo(i.meters)+" KM",j("o-plastic").textContent=String(i.plastic),j("o-combo").textContent="x"+(i.maxLevel+1),j("o-rank-name").textContent=i.rank.name,j("o-rank-pos").textContent=i.position===1?"RANK #1":i.position?"GOOD RUN! RANK #"+i.position:"GOOD RUN!";let e=j("o-rank");e.classList.remove("show"),e.offsetWidth,G0(i),j("o-reward").style.visibility="hidden",Le("over"),V0(j("o-score"),i.score,t?1e3:0,()=>{e.classList.add("show"),j("o-reward").style.visibility="visible",t&&i.isTop1&&setTimeout(X0,700)})}function X0(){Le("champ"),Yt.highScore(),Ll(j("confetti"))}function q0(i,t){j("c-rank").textContent=i.rank.name,j("c-score").textContent=Vn(t.score),j("c-prize").textContent=i.prize,j("c-code").textContent=i.code,Le("claim"),Yt.reward(),Ll(j("confetti"))}function Hl(i){if(mt.PLASVORA_URL)try{window.open(mt.PLASVORA_URL,"_blank","noopener")}catch{}else Vl=i,Le("explore")}function eu(){let i=Pi.get();j("vol-music").value=Math.round(i.music*100),j("vol-sfx").value=Math.round(i.sfx*100),j("o-music").textContent=Math.round(i.music*100)+"%",j("o-sfx").textContent=Math.round(i.sfx*100)+"%"}function Kh(){let i=Pi.get();i.music=+j("vol-music").value/100,i.sfx=+j("vol-sfx").value/100,j("o-music").textContent=Math.round(i.music*100)+"%",j("o-sfx").textContent=Math.round(i.sfx*100)+"%",Gs||Yt.setVolumes(i.music,i.sfx),Pi.save()}function nu(){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch{}}function Y0(){Gs=!Gs;let i=Pi.get();Yt.setVolumes(Gs?0:i.music,Gs?0:i.sfx)}function iu(){let i=j("adm-stock");i.innerHTML='<tr><th>RANK</th><th>HADIAH</th><th style="text-align:right">SISA</th></tr>'+Ii.stockTable().map(t=>"<tr><td>"+t.name+"</td><td>"+t.prize+'</td><td class="n'+(t.left===0?" z":"")+'">'+t.left+" / "+t.total+"</td></tr>").join(""),j("adm-claims").textContent="Total klaim tercatat: "+Ii.claimCount()}function Z0(){j("adm-pin").hidden=!1,j("adm-panel").hidden=!0,j("adm-err").hidden=!0,j("adm-pin-in").value="",j("adm-ok").hidden=!1,j("adm-reset").hidden=!0,j("adm-clear").hidden=!0,Le("admin")}function su(){j("adm-pin-in").value===mt.ADMIN_PIN?(j("adm-pin").hidden=!0,j("adm-panel").hidden=!1,j("adm-ok").hidden=!0,j("adm-reset").hidden=!1,j("adm-clear").hidden=!1,iu(),j("adm-back").focus()):(j("adm-err").hidden=!1,j("adm-pin-in").select())}function $h(i,t,e){i.onclick=()=>{i.dataset.armed==="1"?(i.dataset.armed="0",i.textContent=t,e()):(i.dataset.armed="1",i.textContent="YAKIN? KLIK LAGI",setTimeout(()=>{i.dataset.armed="0",i.textContent=t},3500))}}function kl(){let i=j("scr-"+on);return i?[...i.querySelectorAll(".btn, .link")].filter(t=>!t.hidden&&t.offsetParent!==null):[]}function J0(){on==="name"?Le("menu"):on==="admin"?Le("set"):on==="explore"?Le(Vl):on==="pause"?Se.resume():(on==="how"||on==="set"||on==="lb")&&Se.back()}function K0(i){Yt.unlock();let t=i.key;if((i.target&&i.target.tagName)==="INPUT"){i.target.id==="nick"?t==="Enter"?(i.preventDefault(),Se.play(j("nick").value)):t==="Escape"&&(i.preventDefault(),Le("menu")):i.target.id==="adm-pin-in"&&(t==="Enter"?(i.preventDefault(),su()):t==="Escape"&&(i.preventDefault(),Le("set")));return}if(t==="f"||t==="F"){nu();return}if(t==="m"||t==="M"){Y0();return}let n=Se.getState();if(!(n===Ot.PLAYING||n===Ot.BOSS||n===Ot.COUNTDOWN)){if(on==="champ"){i.preventDefault(),Le("over");return}if(n===Ot.PAUSED&&(t==="p"||t==="P"||t==="Escape")){i.preventDefault(),Se.resume();return}if(t==="Escape"||t==="Backspace"){i.preventDefault(),J0();return}if(t==="ArrowDown"||t==="ArrowUp"){let s=kl();if(!s.length)return;i.preventDefault();let r=s.indexOf(document.activeElement);r=r<0?0:(r+(t==="ArrowDown"?1:-1)+s.length)%s.length,s[r].focus(),Yt.click();return}if(t==="ArrowRight"||t==="ArrowLeft"){let s=kl(),r=s.indexOf(document.activeElement);s.length>1&&r>=0&&on!=="menu"&&on!=="pause"&&(i.preventDefault(),s[(r+(t==="ArrowRight"?1:-1)+s.length)%s.length].focus());return}if(t==="Enter"&&!(document.activeElement&&/BUTTON/.test(document.activeElement.tagName))){let s=kl()[0];s&&(i.preventDefault(),s.click())}}}function $0(i){Se=i,I0(),eu();let t=(e,n)=>{j(e).onclick=()=>{Yt.click(),n()}};t("b-play",()=>Le("name")),t("b-lb",()=>Se.go(Ot.LEADERBOARD)),t("b-how",()=>Se.go(Ot.HOW_TO_PLAY)),t("b-set",()=>Se.go(Ot.SETTINGS)),t("b-start",()=>Se.play(j("nick").value)),t("b-name-back",()=>Le("menu")),t("how-back",()=>Se.back()),t("lb-back",()=>Se.back()),t("set-back",()=>Se.back()),t("b-full",nu),t("b-admin",Z0),t("adm-ok",su),t("adm-back",()=>Le("set")),$h(j("adm-reset"),"RESET STOK",()=>{Ii.resetStock(),iu()}),$h(j("adm-clear"),"HAPUS LEADERBOARD",()=>{vs.clear()}),j("vol-music").oninput=Kh,j("vol-sfx").oninput=Kh,t("p-resume",()=>Se.resume()),t("p-restart",()=>Se.restart()),t("p-set",()=>Se.go(Ot.SETTINGS)),t("p-menu",()=>Se.toMenu()),t("o-claim",()=>Se.claim()),t("o-again",()=>Se.playAgain()),t("o-lb",()=>Se.go(Ot.LEADERBOARD)),t("o-menu",()=>Se.toMenu()),t("o-explore",()=>Hl("over")),t("c-finish",()=>Se.toMenu()),t("c-explore",()=>Hl("claim")),t("x-back",()=>Le(Vl)),j("scr-champ").onclick=()=>Le("over"),document.addEventListener("keydown",K0),document.addEventListener("pointerdown",()=>Yt.unlock())}var Dt={init:$0,show:Le,hudShow:F0,setHud:L0,bumpScore:D0,resetHudCache:z0,feedback:tu,floatAt:U0,countdown:N0,hideCountdown:O0,runTag:B0,showOver:W0,showClaim:q0,renderLB:H0,syncSettings:eu,explore:Hl};function So(i,t){return Math.abs(i.x-t.x)<i.hw+t.hw&&Math.abs(i.y-t.y)<i.hh+t.hh}function ru(i,t){let e=i.def;return t.x=i.x+e.hitDx,t.y=e.hitY,t.hw=e.hitW/2,t.hh=e.hitH/2,t}function ou(i,t){return i.sliding?(t.x=i.x,t.y=.5,t.hw=.9,t.hh=.65):(t.x=i.x,t.y=i.y+.95,t.hw=.75,t.hh=1.05),t}function au(i,t){return i.sliding?(t.x=i.x,t.y=.4,t.hw=.62,t.hh=.4):(t.x=i.x,t.y=i.y+.82,t.hw=.34,t.hh=.82),t}var Li=mt.WORLD,bo=new N(5,3.6,20),lu={normal:8257438,recycled:2945167,rare:1692927,gold:16765503};function cu(){let i=document.getElementById("stage"),t=document.getElementById("gl"),e=new Fr({canvas:t,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2));let n=new kr,s=new Fe(40,16/9,.5,300);s.position.copy(bo);let r=new so(n),o=new oo(n),a=new ho(n),l=Nh(n),c=new uo,u=new fo(n,document.getElementById("flash")),h={state:Ot.MENU,prev:Ot.MENU,returnTo:"menu",t:0,lives:mt.LIVES,seed:0,name:"PLAYER",high:0,speedMult:1,curSpeed:0,phaseId:1,rankId:mt.RANK_BASE.id,boss:{active:!1,left:0,total:0,variant:null,diff:null},cdT:0,cdN:4,overT:0,tagT:0,pauseCd:0,last:null,res:null,tNow:0,hint:0},f=new N,p=new Ut,g={x:0,y:0,hw:0,hh:0},x={x:0,y:0,hw:0,hh:0},m={x:0,y:0,hw:0,hh:0},d={x:0,y:0,hw:.5,hh:.5};function E(){let O=i.clientWidth||1280,rt=i.clientHeight||720;e.setSize(O,rt,!1),s.aspect=O/rt,s.updateProjectionMatrix()}new ResizeObserver(E).observe(i),window.addEventListener("resize",E),E();let b=()=>h.state===Ot.PLAYING||h.state===Ot.BOSS,_=O=>{h.prev=h.state,h.state=O};function I(O,rt,ct){return f.set(O,rt,0).project(s),ct.x=(f.x*.5+.5)*100,ct.y=(-f.y*.5+.5)*100,ct}function w(O){h.name=String(O||"").trim().toUpperCase().slice(0,10)||"PLAYER",h.seed=wh(),a.reset(h.seed),c.reset(),o.reset(),u.reset(),l.hide(),h.t=0,h.lives=mt.LIVES,h.phaseId=1,h.rankId=mt.RANK_BASE.id,h.boss={active:!1,left:0,total:0,variant:null,diff:null},h.speedMult=1,h.curSpeed=Li.BASE_SPEED,h.high=vs.best(),h.res=null,h.hint=7,r.bossF=0,Dt.resetHudCache(),Dt.feedback.clear(),Dt.hudShow(!0),Dt.show("none"),Dt.runTag("NEW RUN \u2022 "+a.director.profile.label+" \u2022 #"+Ah(h.seed)),h.tagT=4,h.cdT=0,h.cdN=4,_(Ot.COUNTDOWN),tn.setActive(!1),Yt.startMusic("run"),Yt.setMode("run")}function A(O){h.cdT-=O,h.cdT<=0&&(h.cdN--,h.cdN>0?(Dt.countdown(String(h.cdN)),Yt.tick(!1),h.cdT=.8):h.cdN===0?(Dt.countdown("GO!"),Yt.tick(!0),h.cdT=.6,tn.setActive(!0),tn.clear()):(Dt.hideCountdown(),_(Ot.PLAYING)))}function R(){b()&&(_(Ot.PAUSED),tn.setActive(!1),Dt.show("pause"))}function S(){h.state!==Ot.PAUSED&&!(h.state===Ot.SETTINGS&&h.returnTo==="pause")||(h.state=h.boss.active?Ot.BOSS:Ot.PLAYING,Dt.show("none"),h.pauseCd=.3,tn.setActive(!0),tn.clear())}function y(O){h.boss={active:!0,left:O.duration,total:O.duration,variant:O.variant,diff:O.diff},a.clearAhead(14),a.distToNext=Math.max(a.distToNext,14),l.show(O.variant.id,O.diff.id),_(Ot.BOSS),Dt.feedback.push({text:O.variant.name+"!",sub:O.diff.label+" \u2022 BERTAHAN "+O.duration+" DETIK",cls:"boss",dur:mt.BOSS.WARN,prio:7}),Yt.boss(),Yt.setMode("boss"),u.shake(.25,.5),u.flash("#ff2a4d",.3)}function C(){let O=h.boss.diff||mt.BOSS.DIFFICULTIES.normal;h.boss.active=!1,l.hide(),_(Ot.PLAYING);let rt=c.addBonus(O.bonus,!1);o.comboGuard=Math.max(o.comboGuard,O.comboGuard),O.grantShield&&!o.shield&&(o.shield=!0),a.spawnBossReward(O,a.director.rng),Dt.bumpScore();let ct=["+"+rt+" BONUS","COMBO GUARD"];O.grantShield&&ct.push("+SHIELD"),Dt.feedback.push({text:"BOSS CLEARED!",sub:ct.join(" \u2022 "),cls:"gold",dur:2,prio:6}),Yt.bossWin(),Yt.setMode("run"),u.burst(1,2.5,1,16765503,40,8),u.ring(0,1.5,16765503,4)}function G(){let O=Hn(c.meters);if(O.id>h.phaseId){h.phaseId=O.id;let ct=O.id>=5?"boss":O.id>=4?"gold":"cyan";Dt.feedback.push({text:"PHASE "+O.id+" \u2022 "+O.name,sub:"SPEED "+O.speedMin.toFixed(2)+"x+",cls:ct,dur:1.7,prio:5}),Yt.combo(Math.min(7,O.id))}let rt=Bs(c.score);if(rt.id!==h.rankId&&(h.rankId=rt.id,rt.id!==mt.RANK_BASE.id)){let ct=rt.id==="champion";Dt.feedback.push({text:ct?"\u2605 ECO CHAMPION! \u2605":rt.name+" UNLOCKED!",sub:ct?"HADIAH UTAMA BOOTH TERBUKA!":rt.prize||"",cls:ct||rt.id==="legend"?"gold":"green",dur:ct?2.4:1.6,prio:ct?8:5}),ct?(Yt.highScore(),u.burst(o.x,2,.5,16765503,45,9),u.ring(o.x,1.4,16765503,4.5)):(Yt.reward(),u.ring(o.x,1.4,3800992,3.2))}}function z(){_(Ot.GAME_OVER),h.overT=1.1,tn.setActive(!1),h.boss.active=!1,l.hide(),Yt.stopMusic(),Yt.gameOver(),Dt.feedback.clear()}function B(){let O=Math.floor(c.score),rt=Bs(O),ct=vs.add({name:h.name,score:O,distance:c.meters,plastic:c.plastic,rank:rt.id,comboMax:c.comboMax});h.res={name:h.name,score:O,meters:c.meters,plastic:c.plastic,maxLevel:c.maxLevel,rank:rt,position:ct.position,isTop1:ct.isTop1,entry:ct.entry},Dt.hudShow(!1),Dt.show("none"),_(Ot.GAME_OVER),o.reset(),o.idle=!0,a.reset(1),l.hide(),u.reset(),Yt.startMusic("menu"),Yt.setMode("menu"),Dt.showOver(h.res)}function X(){let O=h.res;if(!O)return;let rt=Ii.claim(O.entry.id,O.score,O.name);rt.ok||rt.reason==="claimed"?(_(Ot.REWARD),Dt.showClaim({rank:rt.rank,prize:rt.prize,code:rt.code},O)):Dt.showOver(O,!1)}function k(){Dt.hudShow(!1),Dt.show("menu"),_(Ot.MENU),o.reset(),o.idle=!0,a.reset(1),l.hide(),u.reset(),tn.setActive(!1),Yt.startMusic("menu"),Yt.setMode("menu")}function $(O){let rt=h.state;rt===Ot.PAUSED?h.returnTo="pause":h.returnTo="menu",(rt===Ot.GAME_OVER||rt===Ot.REWARD)&&(h.returnTo="over"),_(O),O===Ot.LEADERBOARD?(Dt.renderLB(h.res?h.res.entry.id:null),Dt.show("lb")):O===Ot.HOW_TO_PLAY?Dt.show("how"):O===Ot.SETTINGS&&(Dt.syncSettings(),Dt.show("set"))}function H(){let O=h.returnTo;O==="pause"?(h.state=Ot.PAUSED,Dt.show("pause")):O==="over"&&h.res?(h.state=Ot.GAME_OVER,Dt.showOver(h.res,!1)):k()}function it(O){O.hit=!0;let rt=O.x+O.def.hitDx,ct=O.def.hitY;if(o.speed>0){O.x=Li.DESPAWN_X-1,c.addBonus(mt.SCORE.smash,o.boost>0),u.burst(rt,ct,.5,16757575,22,9),u.shake(.12,.15),Yt.smash();return}if(o.shield){o.shield=!1,o.inv=1.05,O.x=Li.DESPAWN_X-1,u.ring(o.x,1,1692927,4),u.burst(o.x,1,.5,1692927,26,8),u.shake(.12,.2),Yt.shield();let P=I(o.x,o.y+2.4,p);Dt.floatAt(c.combo>0?"SHIELD \u2022 COMBO SAVED!":"SHIELD BLOCK!","rare",P.x,P.y);return}h.lives--;let St=o.comboGuard>0&&c.combo>0;if(St?o.comboGuard=0:c.breakCombo(),o.hurt(),u.shake(.4,.4),u.flash("#ff2a4d",.4),u.burst(o.x,1,.5,16731486,24,7),Yt.hit(),h.lives<=0){z();return}Dt.feedback.push({text:St?"COMBO PROTECTED!":"OUCH!",sub:St?"Combo tetap terjaga":"",cls:St?"gold":"boss",dur:.95,prio:7})}function at(O){O.taken=!0,o.pickup();let rt=c.collect(O.tier,o.boost>0);Dt.bumpScore();let ct=lu[O.tier]||lu.normal,St=O.tier==="gold"?28:O.tier==="rare"?18:O.tier==="recycled"?14:10;u.burst(O.x,O.y,.5,ct,St,O.tier==="normal"?4:6);let P=I(o.x,o.y+2.4,p);O.tier==="normal"?(Yt.collect(rt.level),Dt.floatAt("+"+rt.pts+" PLASTIC","normal",P.x,P.y)):O.tier==="recycled"?(Yt.collect(rt.level+1),u.ring(O.x,O.y,ct,1.9),Dt.floatAt("+"+rt.pts+" RECYCLED","normal",P.x,P.y)):O.tier==="rare"?(Yt.rare(),u.ring(O.x,O.y,ct,2.5),Dt.floatAt("+"+rt.pts+" RARE","rare",P.x,P.y)):(Yt.gold(),u.ring(O.x,O.y,ct,3.5),u.slowmo(.48,.2),u.shake(.08,.15),Dt.feedback.push({text:"GOLDEN +"+rt.pts,cls:"gold",dur:.9,prio:3})),rt.levelUp&&(Yt.combo(rt.level),Dt.feedback.push({text:"COMBO x"+(rt.level+1),sub:rt.level>=7?"MAX MULTIPLIER!":"",cls:rt.level>=5?"gold":"green",dur:1,prio:4}))}let vt={boost:"ECO BOOST",magnet:"ECO MAGNET",shield:"ECO SHIELD",speed:"SPEED BOOST"};function kt(O){O.taken=!0,o.pickup(),O.kind==="boost"?o.boost=mt.POWER.boost:O.kind==="magnet"?o.magnet=mt.POWER.magnet:O.kind==="shield"?o.shield=!0:(o.speed=mt.POWER.speed,c.addBonus(mt.SCORE.speedBoostBonus,o.boost>0)),c.addBonus(mt.SCORE.power,!1),Yt.power(),u.ring(o.x,1,16765503,3.4),u.burst(o.x,1.2,.5,16777215,16,6);let rt=I(o.x,o.y+2.4,p);Dt.floatAt(vt[O.kind],"info",rt.x,rt.y)}function $t(O){if(au(o,g),o.inv<=0&&o.hitT<=0){for(let St of a.obstacles)if(!(St.hit||St.x>3||St.x<-3)&&So(g,ru(St,x))&&(it(St),!b()))return}for(let St of a.obstacles)!St.passed&&St.x+St.def.hitDx+St.def.hitW/2<o.x-.5&&(St.passed=!0,c.cleared++);ou(o,m);let rt=o.magnet>0,ct=o.y+1;for(let St of a.loot)if(!St.taken){if(rt&&St.x<12.5&&St.x>-1){let P=o.x-St.x,Pe=ct-St.y;if(Math.hypot(P,Pe)<8.5){let Zt=Math.min(1,O*9.5);St.x+=P*Zt,St.y+=Pe*Zt}}d.x=St.x,d.y=St.y,So(m,d)&&at(St)}for(let St of a.powers){if(St.taken)continue;d.x=St.x,d.y=St.y,d.hw=.75,d.hh=.75;let P=So(m,d);d.hw=.5,d.hh=.5,P&&kt(St)}}function Y(O,rt){let ct=h.tNow;s.position.x=bo.x+Math.sin(ct*.5)*.18,s.position.y=bo.y+o.y*.1+Math.sin(ct*.7)*.05,s.position.z=bo.z-(rt-1)*1.25,u.shakeOffset(p),s.position.x+=p.x,s.position.y+=p.y,s.lookAt(5.4,2.2+o.y*.12,0)}function tt(){let O=Hn(c.meters),rt=bh(c.score),ct=b()?a.upcomingWarning(o.x):null;Dt.setHud({score:c.score,high:h.high,meters:c.meters,plastic:c.plastic,speed:h.speedMult,lives:h.lives,level:c.level,combo:c.combo,phase:O,tier:rt,boss:h.boss,warn:ct,hint:h.hint>0&&b(),powers:{boost:o.boost,magnet:o.magnet,shield:o.shield,speed:o.speed,guard:o.comboGuard}})}function _t(O){requestAnimationFrame(_t);let rt=h.last===null?.016:Math.min(.05,(O-h.last)/1e3);h.last=O,ot(rt,!0)}function ot(O,rt){h.tNow+=O,h.pauseCd>0&&(h.pauseCd-=O);let ct=h.state,St=1;if(ct===Ot.PLAYING||ct===Ot.BOSS)if(h.pauseCd<=0&&tn.takePause())R();else{h.pauseCd>0&&tn.takePause();let P=O*u.timeScale();h.t+=P,h.hint>0&&(h.hint-=P),h.speedMult=Eh(c.meters);let Pe=h.boss.active&&h.boss.diff?h.boss.diff.speedMult:1,Kt=Math.min(mt.BOSS.MAX_TOTAL_SPEED_MULT,h.speedMult*Pe)*(o.speed>0?1.32:1),Zt=Li.BASE_SPEED*Kt;h.curSpeed+=(Zt-h.curSpeed)*Math.min(1,P*3.8);let Ct=h.curSpeed*P;St=h.curSpeed/Li.BASE_SPEED;let oe=o.update(P,tn.takeJump(),tn.slideHeld());if(oe.jumped&&(Yt.jump(),u.burst(o.x-.2,.1,.4,12582888,6,3)),oe.landed&&(Yt.land(),u.burst(o.x,.1,.4,12582888,6,3)),oe.slideStart&&Yt.slide(),c.addDistance(Ct,o.boost>0,o.speed>0),a.update(P,Ct,{dist:c.meters,t:h.t,speed:h.curSpeed,boss:h.boss.active,bossVariant:h.boss.variant?h.boss.variant.id:null,bossDiff:h.boss.diff?h.boss.diff.id:null},h.tNow,()=>l.pulseAttack()),$t(P),h.state!==Ot.GAME_OVER){if(G(),h.boss.active)h.boss.left-=P,h.boss.left<=0&&C();else{let v=a.director.checkBossTrigger(c.meters,c.score,c.level);v&&y(v)}l.update(P,h.tNow,h.boss.active);let Pt=Hn(c.meters);r.update(P,Ct,h.boss.active?h.boss.variant:null,Pt);let T=Ci((St-1.08)*1.15+(Pt.id-1)*.12+(h.boss.active?.25:0)+(o.speed>0?.55:0),0,1.3);u.update(P,O,h.curSpeed,T),tt()}h.tagT>0&&(h.tagT-=O,h.tagT<=0&&Dt.runTag(""))}else if(ct===Ot.COUNTDOWN){A(O);let P=Li.BASE_SPEED*.6*O;o.update(O,!1,!1),r.update(O,P,null,mt.PHASES[0]),u.update(O,O,Li.BASE_SPEED,0),tt(),h.tagT>0&&(h.tagT-=O,h.tagT<=0&&Dt.runTag(""))}else if(ct===Ot.GAME_OVER&&h.overT>0){h.overT-=O,h.curSpeed*=.94;let P=h.curSpeed*O;o.update(O,!1,!1),l.update(O,h.tNow,!1),r.update(O,P,null,Hn(c.meters)),a.update(0,P,{dist:c.meters,t:h.t,boss:!1,speed:1},h.tNow),u.update(O,O,0,0),h.overT<=0&&B()}else ct===Ot.PAUSED||ct===Ot.SETTINGS&&h.returnTo==="pause"?u.update(0,O,0,0):(o.idle=!0,o.update(O,!1,!1),l.update(O,h.tNow,!1),r.update(O,3.2*O,null,mt.PHASES[0]),u.update(O,O,0,0));Dt.feedback.update(O),Y(O,St),rt&&e.render(n,s)}document.addEventListener("visibilitychange",()=>{document.hidden&&R()}),window.addEventListener("blur",()=>R());let bt={getState:()=>h.state,play:O=>w(O),playAgain:()=>{Dt.show("name"),_(Ot.MENU)},restart:()=>w(h.name),resume:S,back:H,go:$,toMenu:k,claim:X};function Bt(){let O=Pi.get();Yt.setVolumes(O.music,O.sfx),Dt.init(bt),o.idle=!0,Dt.show("menu"),requestAnimationFrame(_t)}return window.__plv={step:ot,g:h,score:c,player:o,spawner:a,world:r,fx:u,startRun:w,STATE:Ot},{start:Bt}}function hu(){try{cu().start()}catch(i){console.error(i);let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:grid;place-items:center;background:#06100e;color:#fff;font:20px sans-serif;text-align:center;padding:24px",t.textContent="Game tidak bisa dimulai. Pastikan browser mendukung WebGL (Chrome/Edge terbaru).",document.body.appendChild(t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hu):hu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
