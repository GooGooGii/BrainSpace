(()=>{var tc=0,Fa=1,ec=2;var Oa=1,nc=2,An=3,kn=0,ke=1,Rn=2,Gn=0,Si=1,Ba=2,za=3,ka=4,ic=5,ri=100,sc=101,rc=102,oc=103,ac=104,lc=200,cc=201,hc=202,uc=203,Dr=204,Ur=205,dc=206,fc=207,pc=208,mc=209,gc=210,_c=211,xc=212,yc=213,vc=214,no=0,io=1,so=2,bi=3,ro=4,oo=5,ao=6,lo=7,Va=0,Mc=1,Sc=2,Wn=0,bc=1,Ec=2,Tc=3,wc=4,Ac=5,Rc=6,Cc=7;var Ha=300,Ci=301,Ii=302,co=303,ho=304,tr=306,Nr=1e3,si=1001,Fr=1002,rn=1003,Ic=1004;var er=1005;var gn=1006,uo=1007;var hi=1008;var Cn=1009,Ga=1010,Wa=1011,ds=1012,fo=1013,ui=1014,In=1015,fs=1016,po=1017,mo=1018,ps=1020,Xa=35902,qa=35899,Ya=1021,Za=1022,an=1023,rs=1026,ms=1027,$a=1028,go=1029,Ja=1030,_o=1031;var xo=1033,nr=33776,ir=33777,sr=33778,rr=33779,yo=35840,vo=35841,Mo=35842,So=35843,bo=36196,Eo=37492,To=37496,wo=37808,Ao=37809,Ro=37810,Co=37811,Io=37812,Po=37813,Lo=37814,Do=37815,Uo=37816,No=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,ko=36492,Vo=36494,Ho=36495,Go=36283,Wo=36284,Xo=36285,qo=36286;var Bs=2300,Or=2301,Lr=2302,Ia=2400,Pa=2401,La=2402;var Pc=3200,Lc=3201;var Dc=0,Uc=1,Xn="",ze="srgb",Ei="srgb-linear",zs="linear",jt="srgb";var Mi=7680;var Da=519,Nc=512,Fc=513,Oc=514,Ka=515,Bc=516,zc=517,kc=518,Vc=519,Ua=35044;var Qa="300 es",mn=2e3,ks=2001;var Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fl=1234567,Fs=Math.PI/180,os=180/Math.PI;function gs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Xt(n,t,e){return Math.max(t,Math.min(e,n))}function ja(n,t){return(n%t+t)%t}function du(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function fu(n,t,e){return n!==t?(e-n)/(t-n):0}function Os(n,t,e){return(1-e)*n+e*t}function pu(n,t,e,i){return Os(n,t,1-Math.exp(-e*i))}function mu(n,t=1){return t-Math.abs(ja(n,t*2)-t)}function gu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function _u(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function xu(n,t){return n+Math.floor(Math.random()*(t-n+1))}function yu(n,t){return n+Math.random()*(t-n)}function vu(n){return n*(.5-Math.random())}function Mu(n){n!==void 0&&(Fl=n);let t=Fl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Su(n){return n*Fs}function bu(n){return n*os}function Eu(n){return(n&n-1)===0&&n!==0}function Tu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function wu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Au(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var di={DEG2RAD:Fs,RAD2DEG:os,generateUUID:gs,clamp:Xt,euclideanModulo:ja,mapLinear:du,inverseLerp:fu,lerp:Os,damp:pu,pingpong:mu,smoothstep:gu,smootherstep:_u,randInt:xu,randFloat:yu,randFloatSpread:vu,seededRandom:Mu,degToRad:Su,radToDeg:bu,isPowerOfTwo:Eu,ceilPowerOfTwo:Tu,floorPowerOfTwo:wu,setQuaternionFromProperEuler:Au,normalize:Be,denormalize:is},et=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*x,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let R=Math.sqrt(E),A=Math.atan2(R,f*T);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let M=a*T;if(c=c*m+d*M,l=l*m+p*M,h=h*m+g*M,u=u*m+x*M,m===1-a){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ca.copy(this).projectOnVector(t),this.sub(ca)}reflect(t){return this.sub(ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ca=new F,Ol=new Hn,Ft=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],T=s[1],E=s[4],M=s[7],R=s[2],A=s[5],I=s[8];return r[0]=o*x+a*T+c*R,r[3]=o*m+a*E+c*A,r[6]=o*f+a*M+c*I,r[1]=l*x+h*T+u*R,r[4]=l*m+h*E+u*A,r[7]=l*f+h*M+u*I,r[2]=d*x+p*T+g*R,r[5]=d*m+p*E+g*A,r[8]=d*f+p*M+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ha=new Ft;function tl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hc(){let n=Vs("canvas");return n.style.display="block",n}var Bl={};function as(n){n in Bl||(Bl[n]=!0,console.warn(n))}function Gc(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var zl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ru(){let n={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===jt&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===jt&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ei]:{primaries:t,whitePoint:i,transfer:zs,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),n}var Yt=Ru();function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xi,Br=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Xi===void 0&&(Xi=Vs("canvas")),Xi.width=t.width,Xi.height=t.height;let s=Xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Xi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zn(e[i]/255)*255):e[i]=zn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cu=0,ls=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ua(s[o].image)):r.push(ua(s[o]))}else r=ua(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Br.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iu=0,da=new F,$e=class n extends Vn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=si,s=si,r=gn,o=hi,a=an,c=Cn,l=n.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=gs(),this.name="",this.source=new ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ha)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nr:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nr:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=Ha;$e.DEFAULT_ANISOTROPY=1;var _e=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,M=(p+1)/2,R=(f+1)/2,A=(h+d)/4,I=(u+x)/4,U=(g+m)/4;return E>M&&E>R?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=I/i):M>R?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=U/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=I/r,s=U/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zr=class extends Vn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new $e(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ls(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends zr{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Hs=class extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var kr=class extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),mr.subVectors(this.max,Ls),qi.subVectors(t.a,Ls),Yi.subVectors(t.b,Ls),Zi.subVectors(t.c,Ls),Kn.subVectors(Yi,qi),Qn.subVectors(Zi,Yi),_i.subVectors(qi,Zi);let e=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!fa(e,qi,Yi,Zi,mr)||(e=[1,0,0,0,1,0,0,0,1],!fa(e,qi,Yi,Zi,mr))?!1:(gr.crossVectors(Kn,Qn),e=[gr.x,gr.y,gr.z],fa(e,qi,Yi,Zi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Un=[new F,new F,new F,new F,new F,new F,new F,new F],dn=new F,pr=new oi,qi=new F,Yi=new F,Zi=new F,Kn=new F,Qn=new F,_i=new F,Ls=new F,mr=new F,gr=new F,xi=new F;function fa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xi.fromArray(n,r);let a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Pu=new oi,Ds=new F,pa=new F,cs=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Pu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(pa)),this.expandByPoint(Ds.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Nn=new F,ma=new F,_r=new F,jn=new F,ga=new F,xr=new F,_a=new F,Vr=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ma.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(ma);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=jn.dot(this.direction),c=-jn.dot(_r),l=jn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ma).addScaledVector(_r,d),p}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);let i=Nn.dot(this.direction),s=Nn.dot(Nn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,s,r){ga.subVectors(e,t),xr.subVectors(i,t),_a.crossVectors(ga,xr);let o=this.direction.dot(_a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;jn.subVectors(this.origin,t);let c=a*this.direction.dot(xr.crossVectors(jn,xr));if(c<0)return null;let l=a*this.direction.dot(ga.cross(jn));if(l<0||c+l>o)return null;let h=-a*jn.dot(_a);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(t,e,i,s,r,o,a,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Du)}lookAt(t,e,i){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),ti.crossVectors(i,qe),ti.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),ti.crossVectors(i,qe)),ti.normalize(),yr.crossVectors(qe,ti),s[0]=ti.x,s[4]=yr.x,s[8]=qe.x,s[1]=ti.y,s[5]=yr.y,s[9]=qe.y,s[2]=ti.z,s[6]=yr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],T=i[3],E=i[7],M=i[11],R=i[15],A=s[0],I=s[4],U=s[8],S=s[12],v=s[1],P=s[5],z=s[9],H=s[13],X=s[2],Z=s[6],W=s[10],nt=s[14],k=s[3],ot=s[7],ut=s[11],Tt=s[15];return r[0]=o*A+a*v+c*X+l*k,r[4]=o*I+a*P+c*Z+l*ot,r[8]=o*U+a*z+c*W+l*ut,r[12]=o*S+a*H+c*nt+l*Tt,r[1]=h*A+u*v+d*X+p*k,r[5]=h*I+u*P+d*Z+p*ot,r[9]=h*U+u*z+d*W+p*ut,r[13]=h*S+u*H+d*nt+p*Tt,r[2]=g*A+x*v+m*X+f*k,r[6]=g*I+x*P+m*Z+f*ot,r[10]=g*U+x*z+m*W+f*ut,r[14]=g*S+x*H+m*nt+f*Tt,r[3]=T*A+E*v+M*X+R*k,r[7]=T*I+E*P+M*Z+R*ot,r[11]=T*U+E*z+M*W+R*ut,r[15]=T*S+E*H+M*nt+R*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*p-i*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],T=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,E=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,M=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,R=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,A=e*T+i*E+s*M+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return t[0]=T*I,t[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*I,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*f+i*c*f)*I,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*p-i*c*p)*I,t[4]=E*I,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*I,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*I,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*I,t[8]=M*I,t[9]=(g*u*r-h*x*r-g*i*p+e*x*p+h*i*f-e*u*f)*I,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*f+e*a*f)*I,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*p-e*a*p)*I,t[12]=R*I,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*I,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*I,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*I,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,T=c*l,E=c*h,M=c*u,R=i.x,A=i.y,I=i.z;return s[0]=(1-(x+f))*R,s[1]=(p+M)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(d+f))*A,s[6]=(m+T)*A,s[7]=0,s[8]=(g+E)*I,s[9]=(m-T)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=$i.set(s[0],s[1],s[2]).length(),o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);let l=1/r,h=1/o,u=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=mn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),p=(i+s)/(i-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===mn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ks)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=mn,c=!1){let l=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),p=-(i+s)/(i-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===mn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ks)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},$i=new F,fn=new be,Lu=new F(0,0,0),Du=new F(1,1,1),ti=new F,yr=new F,qe=new F,Vl=new be,Hl=new Hn,Tn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hl.setFromEuler(this),this.setFromQuaternion(Hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uu=0,Gl=new F,Ji=new Hn,Fn=new be,vr=new F,Us=new F,Nu=new F,Fu=new Hn,Wl=new F(1,0,0),Xl=new F(0,1,0),ql=new F(0,0,1),Yl={type:"added"},Ou={type:"removed"},Ki={type:"childadded",child:null},xa={type:"childremoved",child:null},on=class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Tn,i=new Hn,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Ft}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vr.copy(t):vr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Us,vr,this.up):Fn.lookAt(vr,Us,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Fn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ou),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};on.DEFAULT_UP=new F(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pn=new F,On=new F,ya=new F,Bn=new F,Qi=new F,ji=new F,Zl=new F,va=new F,Ma=new F,Sa=new F,ba=new _e,Ea=new _e,Ta=new _e,ii=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),On.subVectors(i,e),ya.subVectors(t,e);let o=pn.dot(pn),a=pn.dot(On),c=pn.dot(ya),l=On.dot(On),h=On.dot(ya),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return ba.setScalar(0),Ea.setScalar(0),Ta.setScalar(0),ba.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,i),Ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ba,r.x),o.addScaledVector(Ea,r.y),o.addScaledVector(Ta,r.z),o}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),On.subVectors(t,e),pn.cross(On).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),pn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Qi.subVectors(s,i),ji.subVectors(r,i),va.subVectors(t,i);let c=Qi.dot(va),l=ji.dot(va);if(c<=0&&l<=0)return e.copy(i);Ma.subVectors(t,s);let h=Qi.dot(Ma),u=ji.dot(Ma);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Qi,o);Sa.subVectors(t,r);let p=Qi.dot(Sa),g=ji.dot(Sa);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ji,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Zl.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Zl,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(Qi,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function wa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var $t=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=ja(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let i=Wc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Yt.workingToColorSpace(De.copy(this),t),Math.round(Xt(De.r*255,0,255))*65536+Math.round(Xt(De.g*255,0,255))*256+Math.round(Xt(De.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(De.copy(this),e);let i=De.r,s=De.g,r=De.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ze){Yt.workingToColorSpace(De.copy(this),t);let e=De.r,i=De.g,s=De.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Mr);let i=Os(ei.h,Mr.h,e),s=Os(ei.s,Mr.s,e),r=Os(ei.l,Mr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},De=new $t;$t.NAMES=Wc;var Bu=0,Ti=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Si,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dr,this.blendDst=Ur,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(i.blending=this.blending),this.side!==kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dr&&(i.blendSrc=this.blendSrc),this.blendDst!==Ur&&(i.blendDst=this.blendDst),this.blendEquation!==ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Je=class extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new F,Sr=new et,zu=0,Ze=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ua,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=is(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ua&&(t.usage=this.usage),t}};var Ws=class extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Xs=class extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ue=class extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}},ku=0,sn=new be,Aa=new on,ts=new F,Ye=new oi,Ns=new oi,Re=new F,wn=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tl(t)?Xs:Ws)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,i){return sn.makeTranslation(t,e,i),this.applyMatrix4(sn),this}scale(t,e,i){return sn.makeScale(t,e,i),this.applyMatrix4(sn),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ye.min,Ns.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,Ns.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(Ns.min),Ye.expandByPoint(Ns.max))}Ye.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(t,l),Re.add(ts)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<i.count;U++)a[U]=new F,c[U]=new F;let l=new F,h=new F,u=new F,d=new et,p=new et,g=new et,x=new F,m=new F;function f(U,S,v){l.fromBufferAttribute(i,U),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[U].add(x),a[S].add(x),a[v].add(x),c[U].add(m),c[S].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let U=0,S=T.length;U<S;++U){let v=T[U],P=v.start,z=v.count;for(let H=P,X=P+z;H<X;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let E=new F,M=new F,R=new F,A=new F;function I(U){R.fromBufferAttribute(s,U),A.copy(R);let S=a[U];E.copy(S),E.sub(R.multiplyScalar(R.dot(S))).normalize(),M.crossVectors(A,S);let P=M.dot(c[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,P)}for(let U=0,S=T.length;U<S;++U){let v=T[U],P=v.start,z=v.count;for(let H=P,X=P+z;H<X;H+=3)I(t.getX(H+0)),I(t.getX(H+1)),I(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Ze(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$l=new be,yi=new Vr,br=new cs,Jl=new F,Er=new F,Tr=new F,wr=new F,Ra=new F,Ar=new F,Kl=new F,Rr=new F,ne=class extends on{constructor(t=new wn,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ra.fromBufferAttribute(u,t),o?Ar.addScaledVector(Ra,h):Ar.addScaledVector(Ra.sub(e),h))}e.add(Ar)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(r),yi.copy(t.ray).recast(t.near),!(br.containsPoint(yi.origin)===!1&&(yi.intersectSphere(br,Jl)===null||yi.origin.distanceToSquared(Jl)>(t.far-t.near)**2))&&($l.copy(r).invert(),yi.copy(t.ray).applyMatrix4($l),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,yi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,R=E;M<R;M+=3){let A=a.getX(M),I=a.getX(M+1),U=a.getX(M+2);s=Cr(this,f,t,i,l,h,u,A,I,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let T=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);s=Cr(this,o,t,i,l,h,u,T,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,R=E;M<R;M+=3){let A=M,I=M+1,U=M+2;s=Cr(this,f,t,i,l,h,u,A,I,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let T=m,E=m+1,M=m+2;s=Cr(this,o,t,i,l,h,u,T,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vu(n,t,e,i,s,r,o,a){let c;if(t.side===ke?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===kn,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Rr);return l<e.near||l>e.far?null:{distance:l,point:Rr.clone(),object:n}}function Cr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Er),n.getVertexPosition(c,Tr),n.getVertexPosition(l,wr);let h=Vu(n,t,e,i,Er,Tr,wr,Kl);if(h){let u=new F;ii.getBarycoord(Kl,Er,Tr,wr,u),s&&(h.uv=ii.getInterpolatedAttribute(s,a,c,l,u,new et)),r&&(h.uv1=ii.getInterpolatedAttribute(r,a,c,l,u,new et)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,c,l,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};ii.getNormal(Er,Tr,wr,d.normal),h.face=d,h.barycoord=u}return h}var Ke=class n extends wn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function g(x,m,f,T,E,M,R,A,I,U,S){let v=M/I,P=R/U,z=M/2,H=R/2,X=A/2,Z=I+1,W=U+1,nt=0,k=0,ot=new F;for(let ut=0;ut<W;ut++){let Tt=ut*P-H;for(let Ht=0;Ht<Z;Ht++){let se=Ht*v-z;ot[x]=se*T,ot[m]=Tt*E,ot[f]=X,l.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[f]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ht/I),u.push(1-ut/U),nt+=1}}for(let ut=0;ut<U;ut++)for(let Tt=0;Tt<I;Tt++){let Ht=d+Tt+Z*ut,se=d+Tt+Z*(ut+1),he=d+(Tt+1)+Z*(ut+1),Jt=d+(Tt+1)+Z*ut;c.push(Ht,se,Jt),c.push(se,he,Jt),k+=6}a.addGroup(p,k,S),p+=k,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Pi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ne(n){let t={};for(let e=0;e<n.length;e++){let i=Pi(n[e]);for(let s in i)t[s]=i[s]}return t}function Hu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function el(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Xc={clone:Pi,merge:Ne},Gu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gu,this.fragmentShader=Wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=Hu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},qs=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new F,Ql=new et,jl=new et,He=class extends qs{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,jl),e.subVectors(jl,Ql)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Fs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Hr=class extends on{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new He(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new He(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new He(es,ns,t,e);a.layers=this.layers,this.add(a);let c=new He(es,ns,t,e);c.layers=this.layers,this.add(c);let l=new He(es,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ys=class extends $e{constructor(t=[],e=Ci,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gr=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ys(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Pi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:Gn});r.uniforms.tEquirect.value=e;let o=new ne(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=gn),new Hr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ge=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xu={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Zs=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ca=new F,qu=new F,Yu=new Ft,bn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ca.subVectors(i,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Ca).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new cs,Zu=new et(.5,.5),Ir=new F,$s=class{constructor(t=new bn,e=new bn,i=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=mn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],T=r[12],E=r[13],M=r[14],R=r[15];if(s[0].setComponents(l-o,p-h,f-g,R-T).normalize(),s[1].setComponents(l+o,p+h,f+g,R+T).normalize(),s[2].setComponents(l+a,p+u,f+x,R+E).normalize(),s[3].setComponents(l-a,p-u,f-x,R-E).normalize(),i)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,p-d,f-m,R-M).normalize();else if(s[4].setComponents(l-c,p-d,f-m,R-M).normalize(),e===mn)s[5].setComponents(l+c,p+d,f+m,R+M).normalize();else if(e===ks)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){vi.center.set(0,0,0);let e=Zu.distanceTo(t.center);return vi.radius=.7071067811865476+e,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Js=class extends $e{constructor(t,e,i=ui,s,r,o,a=rn,c=rn,l,h=rs,u=1){if(h!==rs&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ks=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var wi=class n extends wn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new F,h=new et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=i+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var Ai=class n extends wn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let T=f*d-o;for(let E=0;E<l;E++){let M=E*u-r;g.push(M,-T,0),x.push(0,0,1),m.push(E/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<a;T++){let E=T+l*f,M=T+l*(f+1),R=T+1+l*(f+1),A=T+1+l*f;p.push(E,M,A),p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ai=class n extends wn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new F,g=new et;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let f=0;f<i;f++){let T=f+m,E=T,M=T+i+1,R=T+i+2,A=T+1;a.push(E,M,A),a.push(M,R,A)}}this.setIndex(a),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Wr=class extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xr=class extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function $u(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ri=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qr=class extends Ri{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ia,endingEnd:Ia}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pa:r=t,a=2*e-i;break;case La:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Pa:o=t,c=2*i-e;break;case La:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,E=(-1-p)*m+(1.5+p)*x+.5*g,M=p*m-p*x;for(let R=0;R!==a;++R)r[R]=f*o[h+R]+T*o[l+R]+E*o[c+R]+M*o[u+R];return r}},Yr=class extends Ri{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Zr=class extends Ri{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pr(e,this.TimeBufferType),this.values=Pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pr(t.times,Array),values:Pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case Or:e=this.InterpolantFactoryMethodLinear;break;case Lr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Or;case this.InterpolantFactoryMethodSmooth:return Lr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&$u(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Lr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let p=0;p!==i;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.ValueTypeName="";Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Or;var li=class extends Qe{constructor(t,e,i){super(t,e,i)}};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Bs;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};$r.prototype.ValueTypeName="color";var Jr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Jr.prototype.ValueTypeName="number";var Kr=class extends Ri{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Hn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Qs=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Kr(this.times,this.values,this.getValueSize(),t)}};Qs.prototype.ValueTypeName="quaternion";Qs.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends Qe{constructor(t,e,i){super(t,e,i)}};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Bs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Qe{constructor(t,e,i,s){super(t,e,i,s)}};Qr.prototype.ValueTypeName="vector";var jr=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},qc=new jr,to=class{constructor(t){this.manager=t!==void 0?t:qc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};to.DEFAULT_MATERIAL_NAME="__DEFAULT";var us=class extends qs{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var eo=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},js=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var nl="\\[\\]\\.:\\/",Ju=new RegExp("["+nl+"]","g"),il="[^"+nl+"]",Ku="[^"+nl.replace("\\.","")+"]",Qu=/((?:WC+[\/:])*)/.source.replace("WC",il),ju=/(WCOD+)?/.source.replace("WCOD",Ku),td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",il),ed=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",il),nd=new RegExp("^"+Qu+ju+td+ed+"$"),id=["material","materials","bones","map"],Na=class{constructor(t,e,i){let s=i||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ae=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ju,"")}static parseTrackName(t){let e=nd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);id.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Na;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w0=new Float32Array(1);function sl(n,t,e,i){let s=sd(i);switch(e){case Ya:return n*t;case $a:return n*t/s.components*s.byteLength;case go:return n*t/s.components*s.byteLength;case Ja:return n*t*2/s.components*s.byteLength;case _o:return n*t*2/s.components*s.byteLength;case Za:return n*t*3/s.components*s.byteLength;case an:return n*t*4/s.components*s.byteLength;case xo:return n*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vo:case So:return Math.max(n,16)*Math.max(t,8)/4;case yo:case Mo:return Math.max(n,8)*Math.max(t,8)/2;case bo:case Eo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ko:case Vo:case Ho:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Go:case Wo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xo:case qo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sd(n){switch(n){case Cn:case Ga:return{byteLength:1,components:1};case ds:case Wa:case fs:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case ui:case fo:case In:return{byteLength:4,components:1};case Xa:case qa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function gh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function od(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ld=`#ifdef USE_ALPHAHASH
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
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
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
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
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
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rf=`PhysicalMaterial material;
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
#endif`,of=`struct PhysicalMaterial {
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
}`,af=`
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_f=`#if defined( USE_POINTS_UV )
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
#endif`,xf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`#ifdef USE_MORPHTARGETS
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
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,If=`#ifdef USE_NORMALMAP
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
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qf=`float getShadowMask() {
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,Kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#ifdef USE_TRANSMISSION
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lp=`uniform sampler2D t2D;
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,pp=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mp=`#define DISTANCE
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
}`,gp=`#define DISTANCE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,Sp=`uniform vec3 diffuse;
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
}`,bp=`#define LAMBERT
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
}`,Ep=`#define LAMBERT
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
}`,Tp=`#define MATCAP
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
}`,wp=`#define MATCAP
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Ip=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Dp=`#define TOON
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
}`,Up=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Bp=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,kp=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:ad,alphahash_pars_fragment:ld,alphamap_fragment:cd,alphamap_pars_fragment:hd,alphatest_fragment:ud,alphatest_pars_fragment:dd,aomap_fragment:fd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:xd,bsdfs:yd,iridescence_fragment:vd,bumpmap_pars_fragment:Md,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:Td,color_fragment:wd,color_pars_fragment:Ad,color_pars_vertex:Rd,color_vertex:Cd,common:Id,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Dd,displacementmap_vertex:Ud,emissivemap_fragment:Nd,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:zd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Vd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:jd,envmap_vertex:Gd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:qd,fog_pars_fragment:Yd,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:$d,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Kd,lights_pars_begin:Qd,lights_toon_fragment:tf,lights_toon_pars_fragment:ef,lights_phong_fragment:nf,lights_phong_pars_fragment:sf,lights_physical_fragment:rf,lights_physical_pars_fragment:of,lights_fragment_begin:af,lights_fragment_maps:lf,lights_fragment_end:cf,logdepthbuf_fragment:hf,logdepthbuf_pars_fragment:uf,logdepthbuf_pars_vertex:df,logdepthbuf_vertex:ff,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:gf,map_particle_pars_fragment:_f,metalnessmap_fragment:xf,metalnessmap_pars_fragment:yf,morphinstance_vertex:vf,morphcolor_vertex:Mf,morphnormal_vertex:Sf,morphtarget_pars_vertex:bf,morphtarget_vertex:Ef,normal_fragment_begin:Tf,normal_fragment_maps:wf,normal_pars_fragment:Af,normal_pars_vertex:Rf,normal_vertex:Cf,normalmap_pars_fragment:If,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Lf,clearcoat_pars_fragment:Df,iridescence_pars_fragment:Uf,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:Bf,dithering_fragment:zf,dithering_pars_fragment:kf,roughnessmap_fragment:Vf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:Zf,skinning_vertex:$f,skinnormal_vertex:Jf,specularmap_fragment:Kf,specularmap_pars_fragment:Qf,tonemapping_fragment:jf,tonemapping_pars_fragment:tp,transmission_fragment:ep,transmission_pars_fragment:np,uv_pars_fragment:ip,uv_pars_vertex:sp,uv_vertex:rp,worldpos_vertex:op,background_vert:ap,background_frag:lp,backgroundCube_vert:cp,backgroundCube_frag:hp,cube_vert:up,cube_frag:dp,depth_vert:fp,depth_frag:pp,distanceRGBA_vert:mp,distanceRGBA_frag:gp,equirect_vert:_p,equirect_frag:xp,linedashed_vert:yp,linedashed_frag:vp,meshbasic_vert:Mp,meshbasic_frag:Sp,meshlambert_vert:bp,meshlambert_frag:Ep,meshmatcap_vert:Tp,meshmatcap_frag:wp,meshnormal_vert:Ap,meshnormal_frag:Rp,meshphong_vert:Cp,meshphong_frag:Ip,meshphysical_vert:Pp,meshphysical_frag:Lp,meshtoon_vert:Dp,meshtoon_frag:Up,points_vert:Np,points_frag:Fp,shadow_vert:Op,shadow_frag:Bp,sprite_vert:zp,sprite_frag:kp},rt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Pn={basic:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new $t(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ne([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ne([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ne([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new $t(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ne([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ne([rt.points,rt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ne([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ne([rt.common,rt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ne([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ne([rt.sprite,rt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ne([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ne([rt.lights,rt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Pn.physical={uniforms:Ne([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Yo={r:0,b:0,g:0},Li=new Tn,Vp=new be;function Hp(n,t,e,i,s,r,o){let a=new $t(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function x(E){let M=!1,R=g(E);R===null?f(a,c):R&&R.isColor&&(f(R,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){let R=g(M);R&&(R.isCubeTexture||R.mapping===tr)?(h===void 0&&(h=new ne(new Ke(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Pi(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,I,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Li.copy(M.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Li)),h.material.toneMapped=Yt.getTransfer(R.colorSpace)!==jt,(u!==R||d!==R.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new ne(new Ai(2,2),new _n({name:"BackgroundMaterial",uniforms:Pi(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(R.colorSpace)!==jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,M){E.getRGB(Yo,el(n)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,M,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:x,addToRenderList:m,dispose:T}}function Gp(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(v,P,z,H,X){let Z=!1,W=u(H,z,P);r!==W&&(r=W,l(r.object)),Z=p(v,H,z,X),Z&&g(v,H,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(v,P,z,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,P,z){let H=z.wireframe===!0,X=i[v.id];X===void 0&&(X={},i[v.id]=X);let Z=X[P.id];Z===void 0&&(Z={},X[P.id]=Z);let W=Z[H];return W===void 0&&(W=d(c()),Z[H]=W),W}function d(v){let P=[],z=[],H=[];for(let X=0;X<e;X++)P[X]=0,z[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:H,object:v,attributes:{},index:null}}function p(v,P,z,H){let X=r.attributes,Z=P.attributes,W=0,nt=z.getAttributes();for(let k in nt)if(nt[k].location>=0){let ut=X[k],Tt=Z[k];if(Tt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(Tt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(Tt=v.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;W++}return r.attributesNum!==W||r.index!==H}function g(v,P,z,H){let X={},Z=P.attributes,W=0,nt=z.getAttributes();for(let k in nt)if(nt[k].location>=0){let ut=Z[k];ut===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ut=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ut=v.instanceColor));let Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),X[k]=Tt,W++}r.attributes=X,r.attributesNum=W,r.index=H}function x(){let v=r.newAttributes;for(let P=0,z=v.length;P<z;P++)v[P]=0}function m(v){f(v,0)}function f(v,P){let z=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;z[v]=1,H[v]===0&&(n.enableVertexAttribArray(v),H[v]=1),X[v]!==P&&(n.vertexAttribDivisor(v,P),X[v]=P)}function T(){let v=r.newAttributes,P=r.enabledAttributes;for(let z=0,H=P.length;z<H;z++)P[z]!==v[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function E(v,P,z,H,X,Z,W){W===!0?n.vertexAttribIPointer(v,P,z,X,Z):n.vertexAttribPointer(v,P,z,H,X,Z)}function M(v,P,z,H){x();let X=H.attributes,Z=z.getAttributes(),W=P.defaultAttributeValues;for(let nt in Z){let k=Z[nt];if(k.location>=0){let ot=X[nt];if(ot===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){let ut=ot.normalized,Tt=ot.itemSize,Ht=t.get(ot);if(Ht===void 0)continue;let se=Ht.buffer,he=Ht.type,Jt=Ht.bytesPerElement,q=he===n.INT||he===n.UNSIGNED_INT||ot.gpuType===fo;if(ot.isInterleavedBufferAttribute){let J=ot.data,pt=J.stride,Dt=ot.offset;if(J.isInstancedInterleavedBuffer){for(let Et=0;Et<k.locationSize;Et++)f(k.location+Et,J.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Et=0;Et<k.locationSize;Et++)m(k.location+Et);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Et=0;Et<k.locationSize;Et++)E(k.location+Et,Tt/k.locationSize,he,ut,pt*Jt,(Dt+Tt/k.locationSize*Et)*Jt,q)}else{if(ot.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)f(k.location+J,ot.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);n.bindBuffer(n.ARRAY_BUFFER,se);for(let J=0;J<k.locationSize;J++)E(k.location+J,Tt/k.locationSize,he,ut,Tt*Jt,Tt/k.locationSize*J*Jt,q)}}else if(W!==void 0){let ut=W[nt];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(k.location,ut);break;case 3:n.vertexAttrib3fv(k.location,ut);break;case 4:n.vertexAttrib4fv(k.location,ut);break;default:n.vertexAttrib1fv(k.location,ut)}}}}T()}function R(){U();for(let v in i){let P=i[v];for(let z in P){let H=P[z];for(let X in H)h(H[X].object),delete H[X];delete P[z]}delete i[v]}}function A(v){if(i[v.id]===void 0)return;let P=i[v.id];for(let z in P){let H=P[z];for(let X in H)h(H[X].object),delete H[X];delete P[z]}delete i[v.id]}function I(v){for(let P in i){let z=i[P];if(z[v.id]===void 0)continue;let H=z[v.id];for(let X in H)h(H[X].object),delete H[X];delete z[v.id]}}function U(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Wp(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Xp(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==an&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let U=I===fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==In&&!U)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function qp(n){let t=this,e=null,i=0,s=!1,r=!1,o=new bn,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let T=r?0:i,E=T*4,M=f.clippingState||null;c.value=M,M=h(g,d,E,p);for(let R=0;R!==E;++R)M[R]=e[R];f.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,M=p;E!==x;++E,M+=4)o.copy(u[E]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Yp(n){let t=new WeakMap;function e(o,a){return a===co?o.mapping=Ci:a===ho&&(o.mapping=Ii),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===co||a===ho)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Gr(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var xs=4,Yc=[.125,.215,.35,.446,.526,.582],Ni=20,rl=new us,Zc=new $t,ol=null,al=0,ll=0,cl=!1,Ui=(1+Math.sqrt(5))/2,_s=1/Ui,$c=[new F(-Ui,_s,0),new F(Ui,_s,0),new F(-_s,0,Ui),new F(_s,0,Ui),new F(0,Ui,-_s),new F(0,Ui,_s),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Zp=new F,Jo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Zp}=r;ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ol,al,ll),this._renderer.xr.enabled=cl,t.scissorTest=!1,Zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ol=this._renderer.getRenderTarget(),al=this._renderer.getActiveCubeFace(),ll=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:fs,format:an,colorSpace:Ei,depthBuffer:!1},s=Jc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$p(r)),this._blurMaterial=Jp(r,t,e)}return s}_compileMaterial(t){let e=new ne(this._lodPlanes[0],t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,i,s,r){let c=new He(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Zc),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Je({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),m=new ne(new Ke,x),f=!1,T=t.background;T?T.isColor&&(x.color.copy(T),t.background=null,f=!0):(x.color.copy(Zc),f=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):M===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));let R=this._cubeSize;Zo(s,M*R,E>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ci||t.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Zo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,rl)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$c[(s-r-1)%$c.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ne(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ni;m>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);let f=[],T=0;for(let I=0;I<Ni;++I){let U=I/x,S=Math.exp(-U*U/2);f.push(S),I===0?T+=S:I<m&&(T+=2*S)}for(let I=0;I<f.length;I++)f[I]=f[I]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;let M=this._sizeLods[s],R=3*M*(s>E-xs?s-E+xs:0),A=4*(this._cubeSize-M);Zo(e,R,A,3*M,2*M),c.setRenderTarget(e),c.render(u,rl)}};function $p(n){let t=[],e=[],i=[],s=n,r=n-xs+1+Yc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-xs?c=Yc[o-n+xs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,T=new Float32Array(x*g*p),E=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let A=0;A<p;A++){let I=A%3*2/3-1,U=A>2?0:-1,S=[I,U,0,I+2/3,U,0,I+2/3,U+1,0,I,U,0,I+2/3,U+1,0,I,U+1,0];T.set(S,x*g*A),E.set(d,m*g*A);let v=[A,A,A,A,A,A];M.set(v,f*g*A)}let R=new wn;R.setAttribute("position",new Ze(T,x)),R.setAttribute("uv",new Ze(E,m)),R.setAttribute("faceIndex",new Ze(M,f)),t.push(R),s>xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Jc(n,t,e){let i=new En(n,t,e);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Jp(n,t,e){let i=new Float32Array(Ni),s=new F(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Kc(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Qc(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function yl(){return`

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
	`}function Kp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===co||c===ho,h=c===Ci||c===Ii;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Jo(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Jo(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Qp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jp(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)t.update(d[p],n.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let T=p.array;x=p.version;for(let E=0,M=T.length;E<M;E+=3){let R=T[E+0],A=T[E+1],I=T[E+2];d.push(R,A,A,I,I,R)}}else if(g!==void 0){let T=g.array;x=g.version;for(let E=0,M=T.length/3-1;E<M;E+=3){let R=E+0,A=E+1,I=E+2;d.push(R,A,A,I,I,R)}}else return;let m=new(tl(d)?Xs:Ws)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function tm(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*x[T];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function em(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function nm(n,t,e){let i=new WeakMap,s=new _e;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let M=a.attributes.position.count*E,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*R*4*u),I=new Hs(A,M,R,u);I.type=In,I.needsUpdate=!0;let U=E*4;for(let v=0;v<u;v++){let P=m[v],z=f[v],H=T[v],X=M*R*4*v;for(let Z=0;Z<P.count;Z++){let W=Z*U;p===!0&&(s.fromBufferAttribute(P,Z),A[X+W+0]=s.x,A[X+W+1]=s.y,A[X+W+2]=s.z,A[X+W+3]=0),g===!0&&(s.fromBufferAttribute(z,Z),A[X+W+4]=s.x,A[X+W+5]=s.y,A[X+W+6]=s.z,A[X+W+7]=0),x===!0&&(s.fromBufferAttribute(H,Z),A[X+W+8]=s.x,A[X+W+9]=s.y,A[X+W+10]=s.z,A[X+W+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new et(M,R)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function im(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var _h=new $e,jc=new Js(1,1),xh=new Hs,yh=new kr,vh=new Ys,th=[],eh=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function vs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=th[s];if(r===void 0&&(r=new Float32Array(s),th[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ee(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Te(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Qo(n,t){let e=eh[t];e===void 0&&(e=new Int32Array(t),eh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function sm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2fv(this.addr,t),Te(e,t)}}function om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;n.uniform3fv(this.addr,t),Te(e,t)}}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4fv(this.addr,t),Te(e,t)}}function lm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;sh.set(i),n.uniformMatrix2fv(this.addr,!1,sh),Te(e,i)}}function cm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;ih.set(i),n.uniformMatrix3fv(this.addr,!1,ih),Te(e,i)}}function hm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,i))return;nh.set(i),n.uniformMatrix4fv(this.addr,!1,nh),Te(e,i)}}function um(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2iv(this.addr,t),Te(e,t)}}function fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3iv(this.addr,t),Te(e,t)}}function pm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4iv(this.addr,t),Te(e,t)}}function mm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;n.uniform2uiv(this.addr,t),Te(e,t)}}function _m(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;n.uniform3uiv(this.addr,t),Te(e,t)}}function xm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;n.uniform4uiv(this.addr,t),Te(e,t)}}function ym(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=Ka,r=jc):r=_h,e.setTexture2D(t||r,s)}function vm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||yh,s)}function Mm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||vh,s)}function Sm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xh,s)}function bm(n){switch(n){case 5126:return sm;case 35664:return rm;case 35665:return om;case 35666:return am;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}function Em(n,t){n.uniform1fv(this.addr,t)}function Tm(n,t){let e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function wm(n,t){let e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function Am(n,t){let e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function Rm(n,t){let e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cm(n,t){let e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Im(n,t){let e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Pm(n,t){n.uniform1iv(this.addr,t)}function Lm(n,t){n.uniform2iv(this.addr,t)}function Dm(n,t){n.uniform3iv(this.addr,t)}function Um(n,t){n.uniform4iv(this.addr,t)}function Nm(n,t){n.uniform1uiv(this.addr,t)}function Fm(n,t){n.uniform2uiv(this.addr,t)}function Om(n,t){n.uniform3uiv(this.addr,t)}function Bm(n,t){n.uniform4uiv(this.addr,t)}function zm(n,t,e){let i=this.cache,s=t.length,r=Qo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||_h,r[o])}function km(n,t,e){let i=this.cache,s=t.length,r=Qo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yh,r[o])}function Vm(n,t,e){let i=this.cache,s=t.length,r=Qo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vh,r[o])}function Hm(n,t,e){let i=this.cache,s=t.length,r=Qo(e,s);Ee(i,r)||(n.uniform1iv(this.addr,r),Te(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xh,r[o])}function Gm(n){switch(n){case 5126:return Em;case 35664:return Tm;case 35665:return wm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Im;case 5124:case 35670:return Pm;case 35667:case 35671:return Lm;case 35668:case 35672:return Dm;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Hm}}var ul=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=bm(e.type)}},dl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gm(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},hl=/(\w+)(\])?(\[|\.)?/g;function rh(n,t){n.seq.push(t),n.map[t.id]=t}function Wm(n,t,e){let i=n.name,s=i.length;for(hl.lastIndex=0;;){let r=hl.exec(i),o=hl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rh(e,l===void 0?new ul(a,n,t):new dl(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new fl(a),rh(e,u)),e=u}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Wm(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function oh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Xm=37297,qm=0;function Ym(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ah=new Ft;function Zm(n){Yt._getMatrix(ah,Yt.workingColorSpace,n);let t=`mat3( ${ah.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case zs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ym(n.getShaderSource(t),a)}else return r}function $m(n,t){let e=Zm(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jm(n,t){let e;switch(t){case bc:e="Linear";break;case Ec:e="Reinhard";break;case Tc:e="Cineon";break;case wc:e="ACESFilmic";break;case Rc:e="AgX";break;case Cc:e="Neutral";break;case Ac:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $o=new F;function Km(){Yt.getLuminanceCoefficients($o);let n=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function jm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function or(n){return n!==""}function ch(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(eg,ig)}var ng=new Map;function ig(n,t){let e=zt[t];if(e===void 0){let i=ng.get(t);if(i!==void 0)e=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(n){return n.replace(sg,rg)}function rg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function og(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Oa?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function ag(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Ii:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function cg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Va:t="ENVMAP_BLENDING_MULTIPLY";break;case Mc:t="ENVMAP_BLENDING_MIX";break;case Sc:t="ENVMAP_BLENDING_ADD";break}return t}function hg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ug(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=og(e),l=ag(e),h=lg(e),u=cg(e),d=hg(e),p=Qm(e),g=jm(r),x=s.createProgram(),m,f,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),f.length>0&&(f+=`
`)):(m=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),f=[dh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,$m("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),o=pl(o),o=ch(o,e),o=hh(o,e),a=pl(a),a=ch(a,e),a=hh(a,e),o=uh(o),a=uh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=T+m+o,M=T+f+a,R=oh(s,s.VERTEX_SHADER,E),A=oh(s,s.FRAGMENT_SHADER,M);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(P){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(A)||"",Z=z.trim(),W=H.trim(),nt=X.trim(),k=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,A);else{let ut=lh(s,R,"vertex"),Tt=lh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+ut+`
`+Tt)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(W===""||nt==="")&&(ot=!1);ot&&(P.diagnostics={runnable:k,programLog:Z,vertexShader:{log:W,prefix:m},fragmentShader:{log:nt,prefix:f}})}s.deleteShader(R),s.deleteShader(A),U=new ys(s,x),S=tg(s,x)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Xm)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var dg=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new gl(t),e.set(t,i)),i}},gl=class{constructor(t){this.id=dg++,this.code=t,this.usedTimes=0}};function fg(n,t,e,i,s,r,o){let a=new Gs,c=new ml,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,z,H){let X=z.fog,Z=H.geometry,W=S.isMeshStandardMaterial?z.environment:null,nt=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),k=nt&&nt.mapping===tr?nt.image.height:null,ot=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Tt=ut!==void 0?ut.length:0,Ht=0;Z.morphAttributes.position!==void 0&&(Ht=1),Z.morphAttributes.normal!==void 0&&(Ht=2),Z.morphAttributes.color!==void 0&&(Ht=3);let se,he,Jt,q;if(ot){let Kt=Pn[ot];se=Kt.vertexShader,he=Kt.fragmentShader}else se=S.vertexShader,he=S.fragmentShader,c.update(S),Jt=c.getVertexShaderID(S),q=c.getFragmentShaderID(S);let J=n.getRenderTarget(),pt=n.state.buffers.depth.getReversed(),Dt=H.isInstancedMesh===!0,Et=H.isBatchedMesh===!0,qt=!!S.map,Pe=!!S.matcap,w=!!nt,ue=!!S.aoMap,Nt=!!S.lightMap,Pt=!!S.bumpMap,xt=!!S.normalMap,de=!!S.displacementMap,yt=!!S.emissiveMap,Bt=!!S.metalnessMap,Ae=!!S.roughnessMap,ye=S.anisotropy>0,b=S.clearcoat>0,_=S.dispersion>0,N=S.iridescence>0,G=S.sheen>0,$=S.transmission>0,V=ye&&!!S.anisotropyMap,bt=b&&!!S.clearcoatMap,it=b&&!!S.clearcoatNormalMap,vt=b&&!!S.clearcoatRoughnessMap,Mt=N&&!!S.iridescenceMap,j=N&&!!S.iridescenceThicknessMap,ct=G&&!!S.sheenColorMap,It=G&&!!S.sheenRoughnessMap,St=!!S.specularMap,at=!!S.specularColorMap,Ot=!!S.specularIntensityMap,C=$&&!!S.transmissionMap,tt=$&&!!S.thicknessMap,st=!!S.gradientMap,ft=!!S.alphaMap,K=S.alphaTest>0,Y=!!S.alphaHash,gt=!!S.extensions,Ut=Wn;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ut=n.toneMapping);let re={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:he,defines:S.defines,customVertexShaderID:Jt,customFragmentShaderID:q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Et,batchingColor:Et&&H._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&H.instanceColor!==null,instancingMorph:Dt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ei,alphaToCoverage:!!S.alphaToCoverage,map:qt,matcap:Pe,envMap:w,envMapMode:w&&nt.mapping,envMapCubeUVHeight:k,aoMap:ue,lightMap:Nt,bumpMap:Pt,normalMap:xt,displacementMap:d&&de,emissiveMap:yt,normalMapObjectSpace:xt&&S.normalMapType===Uc,normalMapTangentSpace:xt&&S.normalMapType===Dc,metalnessMap:Bt,roughnessMap:Ae,anisotropy:ye,anisotropyMap:V,clearcoat:b,clearcoatMap:bt,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,dispersion:_,iridescence:N,iridescenceMap:Mt,iridescenceThicknessMap:j,sheen:G,sheenColorMap:ct,sheenRoughnessMap:It,specularMap:St,specularColorMap:at,specularIntensityMap:Ot,transmission:$,transmissionMap:C,thicknessMap:tt,gradientMap:st,opaque:S.transparent===!1&&S.blending===Si&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:K,alphaHash:Y,combine:S.combine,mapUv:qt&&x(S.map.channel),aoMapUv:ue&&x(S.aoMap.channel),lightMapUv:Nt&&x(S.lightMap.channel),bumpMapUv:Pt&&x(S.bumpMap.channel),normalMapUv:xt&&x(S.normalMap.channel),displacementMapUv:de&&x(S.displacementMap.channel),emissiveMapUv:yt&&x(S.emissiveMap.channel),metalnessMapUv:Bt&&x(S.metalnessMap.channel),roughnessMapUv:Ae&&x(S.roughnessMap.channel),anisotropyMapUv:V&&x(S.anisotropyMap.channel),clearcoatMapUv:bt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:j&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(S.sheenRoughnessMap.channel),specularMapUv:St&&x(S.specularMap.channel),specularColorMapUv:at&&x(S.specularColorMap.channel),specularIntensityMapUv:Ot&&x(S.specularIntensityMap.channel),transmissionMapUv:C&&x(S.transmissionMap.channel),thicknessMapUv:tt&&x(S.thicknessMap.channel),alphaMapUv:ft&&x(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(xt||ye),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(qt||ft),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ht,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ut,decodeVideoTexture:qt&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===jt,decodeVideoTextureEmissive:yt&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rn,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||Et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function f(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(T(v,S),E(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function E(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let v=g[S.type],P;if(v){let z=Pn[v];P=Xc.clone(z.uniforms)}else P=S.uniforms;return P}function R(S,v){let P;for(let z=0,H=h.length;z<H;z++){let X=h[z];if(X.cacheKey===v){P=X,++P.usedTimes;break}}return P===void 0&&(P=new ug(n,v,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function I(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:U}}function pg(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function mg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ph(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,p,g,x,m){let f=n[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||mg),i.length>1&&i.sort(d||fh),s.length>1&&s.sort(d||fh)}function h(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function gg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ph,n.set(i,[o])):s>=r.length?(o=new ph,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function _g(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new $t};break;case"SpotLight":e={position:new F,direction:new F,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function xg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var yg=0;function vg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Mg(n){let t=new _g,e=xg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let s=new F,r=new be,o=new be;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,T=0,E=0,M=0,R=0,A=0,I=0;l.sort(vg);for(let S=0,v=l.length;S<v;S++){let P=l[S],z=P.color,H=P.intensity,X=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*H,u+=z.g*H,d+=z.b*H;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],H);I++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,k=e.get(P);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=W,p++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;let nt=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,nt.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=nt.matrix,P.castShadow){let k=e.get(P);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=Z,M++}x++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let nt=P.shadow,k=e.get(P);k.shadowIntensity=nt.intensity,k.shadowBias=nt.bias,k.shadowNormalBias=nt.normalBias,k.shadowRadius=nt.radius,k.shadowMapSize=nt.mapSize,k.shadowCameraNear=nt.camera.near,k.shadowCameraFar=nt.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=P.shadow.matrix,E++}i.point[g]=W,g++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(H),W.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[f]=W,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==E||U.numSpotShadows!==M||U.numSpotMaps!==R||U.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=E,U.numSpotShadows=M,U.numSpotMaps=R,U.numLightProbes=I,i.version=yg++)}function c(l,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){let E=l[f];if(E.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let M=i.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function mh(n){let t=new Mg(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Sg(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new mh(n),t.set(s,[a])):r>=o.length?(a=new mh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function Tg(n,t,e){let i=new $s,s=new et,r=new et,o=new _e,a=new Wr({depthPacking:Lc}),c=new Xr,l={},h=e.maxTextureSize,u={[kn]:ke,[ke]:kn,[Rn]:Rn},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:bg,fragmentShader:Eg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new wn;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oa;let f=this.type;this.render=function(A,I,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),v=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Gn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=f!==An&&this.type===An,X=f===An&&this.type!==An;for(let Z=0,W=A.length;Z<W;Z++){let nt=A[Z],k=nt.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ot=k.getFrameExtents();if(s.multiply(ot),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,k.mapSize.y=r.y)),k.map===null||H===!0||X===!0){let Tt=this.type!==An?{minFilter:rn,magFilter:rn}:{};k.map!==null&&k.map.dispose(),k.map=new En(s.x,s.y,Tt),k.map.texture.name=nt.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let ut=k.getViewportCount();for(let Tt=0;Tt<ut;Tt++){let Ht=k.getViewport(Tt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(o),k.updateMatrices(nt,Tt),i=k.getFrustum(),M(I,U,k.camera,nt,this.type)}k.isPointLightShadow!==!0&&this.type===An&&T(k,U),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,v,P)};function T(A,I){let U=t.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new En(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(I,null,U,d,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(I,null,U,p,x,null)}function E(A,I,U,S){let v=null,P=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)v=P;else if(v=U.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let z=v.uuid,H=I.uuid,X=l[z];X===void 0&&(X={},l[z]=X);let Z=X[H];Z===void 0&&(Z=v.clone(),X[H]=Z,I.addEventListener("dispose",R)),v=Z}if(v.visible=I.visible,v.wireframe=I.wireframe,S===An?v.side=I.shadowSide!==null?I.shadowSide:I.side:v.side=I.shadowSide!==null?I.shadowSide:u[I.side],v.alphaMap=I.alphaMap,v.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,v.map=I.map,v.clipShadows=I.clipShadows,v.clippingPlanes=I.clippingPlanes,v.clipIntersection=I.clipIntersection,v.displacementMap=I.displacementMap,v.displacementScale=I.displacementScale,v.displacementBias=I.displacementBias,v.wireframeLinewidth=I.wireframeLinewidth,v.linewidth=I.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=n.properties.get(v);z.light=U}return v}function M(A,I,U,S,v){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===An)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let H=t.update(A),X=A.material;if(Array.isArray(X)){let Z=H.groups;for(let W=0,nt=Z.length;W<nt;W++){let k=Z[W],ot=X[k.materialIndex];if(ot&&ot.visible){let ut=E(A,ot,S,v);A.onBeforeShadow(n,A,I,U,H,ut,k),n.renderBufferDirect(U,null,H,ut,A,k),A.onAfterShadow(n,A,I,U,H,ut,k)}}}else if(X.visible){let Z=E(A,X,S,v);A.onBeforeShadow(n,A,I,U,H,Z,null),n.renderBufferDirect(U,null,H,Z,A,null),A.onAfterShadow(n,A,I,U,H,Z,null)}}let z=A.children;for(let H=0,X=z.length;H<X;H++)M(z[H],I,U,S,v)}function R(A){A.target.removeEventListener("dispose",R);for(let U in l){let S=l[U],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var wg={[no]:io,[so]:ao,[ro]:lo,[bi]:oo,[io]:no,[ao]:so,[lo]:ro,[oo]:bi};function Ag(n,t){function e(){let C=!1,tt=new _e,st=null,ft=new _e(0,0,0,0);return{setMask:function(K){st!==K&&!C&&(n.colorMask(K,K,K,K),st=K)},setLocked:function(K){C=K},setClear:function(K,Y,gt,Ut,re){re===!0&&(K*=Ut,Y*=Ut,gt*=Ut),tt.set(K,Y,gt,Ut),ft.equals(tt)===!1&&(n.clearColor(K,Y,gt,Ut),ft.copy(tt))},reset:function(){C=!1,st=null,ft.set(-1,0,0,0)}}}function i(){let C=!1,tt=!1,st=null,ft=null,K=null;return{setReversed:function(Y){if(tt!==Y){let gt=t.get("EXT_clip_control");Y?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),tt=Y;let Ut=K;K=null,this.setClear(Ut)}},getReversed:function(){return tt},setTest:function(Y){Y?J(n.DEPTH_TEST):pt(n.DEPTH_TEST)},setMask:function(Y){st!==Y&&!C&&(n.depthMask(Y),st=Y)},setFunc:function(Y){if(tt&&(Y=wg[Y]),ft!==Y){switch(Y){case no:n.depthFunc(n.NEVER);break;case io:n.depthFunc(n.ALWAYS);break;case so:n.depthFunc(n.LESS);break;case bi:n.depthFunc(n.LEQUAL);break;case ro:n.depthFunc(n.EQUAL);break;case oo:n.depthFunc(n.GEQUAL);break;case ao:n.depthFunc(n.GREATER);break;case lo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=Y}},setLocked:function(Y){C=Y},setClear:function(Y){K!==Y&&(tt&&(Y=1-Y),n.clearDepth(Y),K=Y)},reset:function(){C=!1,st=null,ft=null,K=null,tt=!1}}}function s(){let C=!1,tt=null,st=null,ft=null,K=null,Y=null,gt=null,Ut=null,re=null;return{setTest:function(Kt){C||(Kt?J(n.STENCIL_TEST):pt(n.STENCIL_TEST))},setMask:function(Kt){tt!==Kt&&!C&&(n.stencilMask(Kt),tt=Kt)},setFunc:function(Kt,Dn,Sn){(st!==Kt||ft!==Dn||K!==Sn)&&(n.stencilFunc(Kt,Dn,Sn),st=Kt,ft=Dn,K=Sn)},setOp:function(Kt,Dn,Sn){(Y!==Kt||gt!==Dn||Ut!==Sn)&&(n.stencilOp(Kt,Dn,Sn),Y=Kt,gt=Dn,Ut=Sn)},setLocked:function(Kt){C=Kt},setClear:function(Kt){re!==Kt&&(n.clearStencil(Kt),re=Kt)},reset:function(){C=!1,tt=null,st=null,ft=null,K=null,Y=null,gt=null,Ut=null,re=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,T=null,E=null,M=null,R=null,A=null,I=new $t(0,0,0),U=0,S=!1,v=null,P=null,z=null,H=null,X=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=nt>=1):k.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=nt>=2);let ot=null,ut={},Tt=n.getParameter(n.SCISSOR_BOX),Ht=n.getParameter(n.VIEWPORT),se=new _e().fromArray(Tt),he=new _e().fromArray(Ht);function Jt(C,tt,st,ft){let K=new Uint8Array(4),Y=n.createTexture();n.bindTexture(C,Y),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<st;gt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(tt+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return Y}let q={};q[n.TEXTURE_2D]=Jt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(bi),Pt(!1),xt(Fa),J(n.CULL_FACE),ue(Gn);function J(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function pt(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function Dt(C,tt){return u[C]!==tt?(n.bindFramebuffer(C,tt),u[C]=tt,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=tt),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function Et(C,tt){let st=p,ft=!1;if(C){st=d.get(tt),st===void 0&&(st=[],d.set(tt,st));let K=C.textures;if(st.length!==K.length||st[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,gt=K.length;Y<gt;Y++)st[Y]=n.COLOR_ATTACHMENT0+Y;st.length=K.length,ft=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,ft=!0);ft&&n.drawBuffers(st)}function qt(C){return g!==C?(n.useProgram(C),g=C,!0):!1}let Pe={[ri]:n.FUNC_ADD,[sc]:n.FUNC_SUBTRACT,[rc]:n.FUNC_REVERSE_SUBTRACT};Pe[oc]=n.MIN,Pe[ac]=n.MAX;let w={[lc]:n.ZERO,[cc]:n.ONE,[hc]:n.SRC_COLOR,[Dr]:n.SRC_ALPHA,[gc]:n.SRC_ALPHA_SATURATE,[pc]:n.DST_COLOR,[dc]:n.DST_ALPHA,[uc]:n.ONE_MINUS_SRC_COLOR,[Ur]:n.ONE_MINUS_SRC_ALPHA,[mc]:n.ONE_MINUS_DST_COLOR,[fc]:n.ONE_MINUS_DST_ALPHA,[_c]:n.CONSTANT_COLOR,[xc]:n.ONE_MINUS_CONSTANT_COLOR,[yc]:n.CONSTANT_ALPHA,[vc]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(C,tt,st,ft,K,Y,gt,Ut,re,Kt){if(C===Gn){x===!0&&(pt(n.BLEND),x=!1);return}if(x===!1&&(J(n.BLEND),x=!0),C!==ic){if(C!==m||Kt!==S){if((f!==ri||M!==ri)&&(n.blendEquation(n.FUNC_ADD),f=ri,M=ri),Kt)switch(C){case Si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFunc(n.ONE,n.ONE);break;case za:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ka:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ba:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case za:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ka:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,E=null,R=null,A=null,I.set(0,0,0),U=0,m=C,S=Kt}return}K=K||tt,Y=Y||st,gt=gt||ft,(tt!==f||K!==M)&&(n.blendEquationSeparate(Pe[tt],Pe[K]),f=tt,M=K),(st!==T||ft!==E||Y!==R||gt!==A)&&(n.blendFuncSeparate(w[st],w[ft],w[Y],w[gt]),T=st,E=ft,R=Y,A=gt),(Ut.equals(I)===!1||re!==U)&&(n.blendColor(Ut.r,Ut.g,Ut.b,re),I.copy(Ut),U=re),m=C,S=!1}function Nt(C,tt){C.side===Rn?pt(n.CULL_FACE):J(n.CULL_FACE);let st=C.side===ke;tt&&(st=!st),Pt(st),C.blending===Si&&C.transparent===!1?ue(Gn):ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);let ft=C.stencilWrite;a.setTest(ft),ft&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),yt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(C){v!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),v=C)}function xt(C){C!==tc?(J(n.CULL_FACE),C!==P&&(C===Fa?n.cullFace(n.BACK):C===ec?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pt(n.CULL_FACE),P=C}function de(C){C!==z&&(W&&n.lineWidth(C),z=C)}function yt(C,tt,st){C?(J(n.POLYGON_OFFSET_FILL),(H!==tt||X!==st)&&(n.polygonOffset(tt,st),H=tt,X=st)):pt(n.POLYGON_OFFSET_FILL)}function Bt(C){C?J(n.SCISSOR_TEST):pt(n.SCISSOR_TEST)}function Ae(C){C===void 0&&(C=n.TEXTURE0+Z-1),ot!==C&&(n.activeTexture(C),ot=C)}function ye(C,tt,st){st===void 0&&(ot===null?st=n.TEXTURE0+Z-1:st=ot);let ft=ut[st];ft===void 0&&(ft={type:void 0,texture:void 0},ut[st]=ft),(ft.type!==C||ft.texture!==tt)&&(ot!==st&&(n.activeTexture(st),ot=st),n.bindTexture(C,tt||q[C]),ft.type=C,ft.texture=tt)}function b(){let C=ut[ot];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{n.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{n.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{n.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{n.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{n.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{n.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(C){se.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),se.copy(C))}function It(C){he.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),he.copy(C))}function St(C,tt){let st=l.get(tt);st===void 0&&(st=new WeakMap,l.set(tt,st));let ft=st.get(C);ft===void 0&&(ft=n.getUniformBlockIndex(tt,C.name),st.set(C,ft))}function at(C,tt){let ft=l.get(tt).get(C);c.get(tt)!==ft&&(n.uniformBlockBinding(tt,ft,C.__bindingPointIndex),c.set(tt,ft))}function Ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,ut={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,T=null,E=null,M=null,R=null,A=null,I=new $t(0,0,0),U=0,S=!1,v=null,P=null,z=null,H=null,X=null,se.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:pt,bindFramebuffer:Dt,drawBuffers:Et,useProgram:qt,setBlending:ue,setMaterial:Nt,setFlipSided:Pt,setCullFace:xt,setLineWidth:de,setPolygonOffset:yt,setScissorTest:Bt,activeTexture:Ae,bindTexture:ye,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Mt,texImage3D:j,updateUBOMapping:St,uniformBlockBinding:at,texStorage2D:it,texStorage3D:vt,texSubImage2D:G,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:bt,scissor:ct,viewport:It,reset:Ot}}function Rg(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Vs("canvas")}function x(b,_,N){let G=1,$=ye(b);if(($.width>N||$.height>N)&&(G=N/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let V=Math.floor(G*$.width),bt=Math.floor(G*$.height);u===void 0&&(u=g(V,bt));let it=_?g(V,bt):u;return it.width=V,it.height=bt,it.getContext("2d").drawImage(b,0,0,V,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+bt+")."),it}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(b,_,N,G,$=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=_;if(_===n.RED&&(N===n.FLOAT&&(V=n.R32F),N===n.HALF_FLOAT&&(V=n.R16F),N===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.R8UI),N===n.UNSIGNED_SHORT&&(V=n.R16UI),N===n.UNSIGNED_INT&&(V=n.R32UI),N===n.BYTE&&(V=n.R8I),N===n.SHORT&&(V=n.R16I),N===n.INT&&(V=n.R32I)),_===n.RG&&(N===n.FLOAT&&(V=n.RG32F),N===n.HALF_FLOAT&&(V=n.RG16F),N===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RG8UI),N===n.UNSIGNED_SHORT&&(V=n.RG16UI),N===n.UNSIGNED_INT&&(V=n.RG32UI),N===n.BYTE&&(V=n.RG8I),N===n.SHORT&&(V=n.RG16I),N===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGB8UI),N===n.UNSIGNED_SHORT&&(V=n.RGB16UI),N===n.UNSIGNED_INT&&(V=n.RGB32UI),N===n.BYTE&&(V=n.RGB8I),N===n.SHORT&&(V=n.RGB16I),N===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),N===n.UNSIGNED_INT&&(V=n.RGBA32UI),N===n.BYTE&&(V=n.RGBA8I),N===n.SHORT&&(V=n.RGBA16I),N===n.INT&&(V=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),_===n.RGBA){let bt=$?zs:Yt.getTransfer(G);N===n.FLOAT&&(V=n.RGBA32F),N===n.HALF_FLOAT&&(V=n.RGBA16F),N===n.UNSIGNED_BYTE&&(V=bt===jt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(b,_){let N;return b?_===null||_===ui||_===ps?N=n.DEPTH24_STENCIL8:_===In?N=n.DEPTH32F_STENCIL8:_===ds&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===ps?N=n.DEPTH_COMPONENT24:_===In?N=n.DEPTH_COMPONENT32F:_===ds&&(N=n.DEPTH_COMPONENT16),N}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==rn&&b.minFilter!==gn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){let _=b.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function I(b){let _=b.target;_.removeEventListener("dispose",I),v(_)}function U(b){let _=i.get(b);if(_.__webglInit===void 0)return;let N=b.source,G=d.get(N);if(G){let $=G[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(b),Object.keys(G).length===0&&d.delete(N)}i.remove(b)}function S(b){let _=i.get(b);n.deleteTexture(_.__webglTexture);let N=b.source,G=d.get(N);delete G[_.__cacheKey],o.memory.textures--}function v(b){let _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let $=0;$<_.__webglFramebuffer[G].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[G][$]);else n.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)n.deleteFramebuffer(_.__webglFramebuffer[G]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let N=b.textures;for(let G=0,$=N.length;G<$;G++){let V=i.get(N[G]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(N[G])}i.remove(b)}let P=0;function z(){P=0}function H(){let b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function X(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Z(b,_){let N=i.get(b);if(b.isVideoTexture&&Bt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&N.__version!==b.version){let G=b.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,b,_);return}}else b.isExternalTexture&&(N.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function W(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){q(N,b,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function nt(b,_){let N=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){q(N,b,_);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function k(b,_){let N=i.get(b);if(b.version>0&&N.__version!==b.version){J(N,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}let ot={[Nr]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Fr]:n.MIRRORED_REPEAT},ut={[rn]:n.NEAREST,[Ic]:n.NEAREST_MIPMAP_NEAREST,[er]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[hi]:n.LINEAR_MIPMAP_LINEAR},Tt={[Nc]:n.NEVER,[Vc]:n.ALWAYS,[Fc]:n.LESS,[Ka]:n.LEQUAL,[Oc]:n.EQUAL,[kc]:n.GEQUAL,[Bc]:n.GREATER,[zc]:n.NOTEQUAL};function Ht(b,_){if(_.type===In&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===gn||_.magFilter===uo||_.magFilter===er||_.magFilter===hi||_.minFilter===gn||_.minFilter===uo||_.minFilter===er||_.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ot[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ot[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ot[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,ut[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==er&&_.minFilter!==hi||_.type===In&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function se(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",A));let G=_.source,$=d.get(G);$===void 0&&($={},d.set(G,$));let V=X(_);if(V!==b.__cacheKey){$[V]===void 0&&($[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[V].usedTimes++;let bt=$[b.__cacheKey];bt!==void 0&&($[b.__cacheKey].usedTimes--,bt.usedTimes===0&&S(_)),b.__cacheKey=V,b.__webglTexture=$[V].texture}return N}function he(b,_,N){return Math.floor(Math.floor(b/N)/_)}function Jt(b,_,N,G){let V=b.updateRanges;if(V.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,G,_.data);else{V.sort((j,ct)=>j.start-ct.start);let bt=0;for(let j=1;j<V.length;j++){let ct=V[bt],It=V[j],St=ct.start+ct.count,at=he(It.start,_.width,4),Ot=he(ct.start,_.width,4);It.start<=St+1&&at===Ot&&he(It.start+It.count-1,_.width,4)===at?ct.count=Math.max(ct.count,It.start+It.count-ct.start):(++bt,V[bt]=It)}V.length=bt+1;let it=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),Mt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let j=0,ct=V.length;j<ct;j++){let It=V[j],St=Math.floor(It.start/4),at=Math.ceil(It.count/4),Ot=St%_.width,C=Math.floor(St/_.width),tt=at,st=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ot),n.pixelStorei(n.UNPACK_SKIP_ROWS,C),e.texSubImage2D(n.TEXTURE_2D,0,Ot,C,tt,st,N,G,_.data)}b.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,it),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Mt)}}function q(b,_,N){let G=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=n.TEXTURE_3D);let $=se(b,_),V=_.source;e.bindTexture(G,b.__webglTexture,n.TEXTURE0+N);let bt=i.get(V);if(V.version!==bt.__version||$===!0){e.activeTexture(n.TEXTURE0+N);let it=Yt.getPrimaries(Yt.workingColorSpace),vt=_.colorSpace===Xn?null:Yt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Xn||it===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let j=x(_.image,!1,s.maxTextureSize);j=Ae(_,j);let ct=r.convert(_.format,_.colorSpace),It=r.convert(_.type),St=E(_.internalFormat,ct,It,_.colorSpace,_.isVideoTexture);Ht(G,_);let at,Ot=_.mipmaps,C=_.isVideoTexture!==!0,tt=bt.__version===void 0||$===!0,st=V.dataReady,ft=R(_,j);if(_.isDepthTexture)St=M(_.format===ms,_.type),tt&&(C?e.texStorage2D(n.TEXTURE_2D,1,St,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,St,j.width,j.height,0,ct,It,null));else if(_.isDataTexture)if(Ot.length>0){C&&tt&&e.texStorage2D(n.TEXTURE_2D,ft,St,Ot[0].width,Ot[0].height);for(let K=0,Y=Ot.length;K<Y;K++)at=Ot[K],C?st&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,at.width,at.height,ct,It,at.data):e.texImage2D(n.TEXTURE_2D,K,St,at.width,at.height,0,ct,It,at.data);_.generateMipmaps=!1}else C?(tt&&e.texStorage2D(n.TEXTURE_2D,ft,St,j.width,j.height),st&&Jt(_,j,ct,It)):e.texImage2D(n.TEXTURE_2D,0,St,j.width,j.height,0,ct,It,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){C&&tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,St,Ot[0].width,Ot[0].height,j.depth);for(let K=0,Y=Ot.length;K<Y;K++)if(at=Ot[K],_.format!==an)if(ct!==null)if(C){if(st)if(_.layerUpdates.size>0){let gt=sl(at.width,at.height,_.format,_.type);for(let Ut of _.layerUpdates){let re=at.data.subarray(Ut*gt/at.data.BYTES_PER_ELEMENT,(Ut+1)*gt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,Ut,at.width,at.height,1,ct,re)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,j.depth,ct,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,St,at.width,at.height,j.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?st&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,at.width,at.height,j.depth,ct,It,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,St,at.width,at.height,j.depth,0,ct,It,at.data)}else{C&&tt&&e.texStorage2D(n.TEXTURE_2D,ft,St,Ot[0].width,Ot[0].height);for(let K=0,Y=Ot.length;K<Y;K++)at=Ot[K],_.format!==an?ct!==null?C?st&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,at.width,at.height,ct,at.data):e.compressedTexImage2D(n.TEXTURE_2D,K,St,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?st&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,at.width,at.height,ct,It,at.data):e.texImage2D(n.TEXTURE_2D,K,St,at.width,at.height,0,ct,It,at.data)}else if(_.isDataArrayTexture)if(C){if(tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,St,j.width,j.height,j.depth),st)if(_.layerUpdates.size>0){let K=sl(j.width,j.height,_.format,_.type);for(let Y of _.layerUpdates){let gt=j.data.subarray(Y*K/j.data.BYTES_PER_ELEMENT,(Y+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,j.width,j.height,1,ct,It,gt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ct,It,j.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,j.width,j.height,j.depth,0,ct,It,j.data);else if(_.isData3DTexture)C?(tt&&e.texStorage3D(n.TEXTURE_3D,ft,St,j.width,j.height,j.depth),st&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ct,It,j.data)):e.texImage3D(n.TEXTURE_3D,0,St,j.width,j.height,j.depth,0,ct,It,j.data);else if(_.isFramebufferTexture){if(tt)if(C)e.texStorage2D(n.TEXTURE_2D,ft,St,j.width,j.height);else{let K=j.width,Y=j.height;for(let gt=0;gt<ft;gt++)e.texImage2D(n.TEXTURE_2D,gt,St,K,Y,0,ct,It,null),K>>=1,Y>>=1}}else if(Ot.length>0){if(C&&tt){let K=ye(Ot[0]);e.texStorage2D(n.TEXTURE_2D,ft,St,K.width,K.height)}for(let K=0,Y=Ot.length;K<Y;K++)at=Ot[K],C?st&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,ct,It,at):e.texImage2D(n.TEXTURE_2D,K,St,ct,It,at);_.generateMipmaps=!1}else if(C){if(tt){let K=ye(j);e.texStorage2D(n.TEXTURE_2D,ft,St,K.width,K.height)}st&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ct,It,j)}else e.texImage2D(n.TEXTURE_2D,0,St,ct,It,j);m(_)&&f(G),bt.__version=V.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function J(b,_,N){if(_.image.length!==6)return;let G=se(b,_),$=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);let V=i.get($);if($.version!==V.__version||G===!0){e.activeTexture(n.TEXTURE0+N);let bt=Yt.getPrimaries(Yt.workingColorSpace),it=_.colorSpace===Xn?null:Yt.getPrimaries(_.colorSpace),vt=_.colorSpace===Xn||bt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,j=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let Y=0;Y<6;Y++)!Mt&&!j?ct[Y]=x(_.image[Y],!0,s.maxCubemapSize):ct[Y]=j?_.image[Y].image:_.image[Y],ct[Y]=Ae(_,ct[Y]);let It=ct[0],St=r.convert(_.format,_.colorSpace),at=r.convert(_.type),Ot=E(_.internalFormat,St,at,_.colorSpace),C=_.isVideoTexture!==!0,tt=V.__version===void 0||G===!0,st=$.dataReady,ft=R(_,It);Ht(n.TEXTURE_CUBE_MAP,_);let K;if(Mt){C&&tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ot,It.width,It.height);for(let Y=0;Y<6;Y++){K=ct[Y].mipmaps;for(let gt=0;gt<K.length;gt++){let Ut=K[gt];_.format!==an?St!==null?C?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,0,0,Ut.width,Ut.height,St,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,Ot,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,0,0,Ut.width,Ut.height,St,at,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,Ot,Ut.width,Ut.height,0,St,at,Ut.data)}}}else{if(K=_.mipmaps,C&&tt){K.length>0&&ft++;let Y=ye(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ot,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(j){C?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ct[Y].width,ct[Y].height,St,at,ct[Y].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,ct[Y].width,ct[Y].height,0,St,at,ct[Y].data);for(let gt=0;gt<K.length;gt++){let re=K[gt].image[Y].image;C?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,0,0,re.width,re.height,St,at,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,Ot,re.width,re.height,0,St,at,re.data)}}else{C?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,St,at,ct[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ot,St,at,ct[Y]);for(let gt=0;gt<K.length;gt++){let Ut=K[gt];C?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,0,0,St,at,Ut.image[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,Ot,St,at,Ut.image[Y])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),V.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function pt(b,_,N,G,$,V){let bt=r.convert(N.format,N.colorSpace),it=r.convert(N.type),vt=E(N.internalFormat,bt,it,N.colorSpace),Mt=i.get(_),j=i.get(N);if(j.__renderTarget=_,!Mt.__hasExternalTextures){let ct=Math.max(1,_.width>>V),It=Math.max(1,_.height>>V);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,V,vt,ct,It,_.depth,0,bt,it,null):e.texImage2D($,V,vt,ct,It,0,bt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),yt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,$,j.__webglTexture,0,de(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,$,j.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(b,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){let G=_.depthTexture,$=G&&G.isDepthTexture?G.type:null,V=M(_.stencilBuffer,$),bt=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=de(_);yt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,V,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,b)}else{let G=_.textures;for(let $=0;$<G.length;$++){let V=G[$],bt=r.convert(V.format,V.colorSpace),it=r.convert(V.type),vt=E(V.internalFormat,bt,it,V.colorSpace),Mt=de(_);N&&yt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,vt,_.width,_.height):yt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,vt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,vt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=i.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let $=G.__webglTexture,V=de(_);if(_.depthTexture.format===rs)yt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(_.depthTexture.format===ms)yt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function qt(b){let _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let G=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=G}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");let G=b.texture.mipmaps;G&&G.length>0?Et(_.__webglFramebuffer[0],b):Et(_.__webglFramebuffer,b)}else if(N){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=n.createRenderbuffer(),Dt(_.__webglDepthbuffer[G],b,!1);else{let $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,V)}}else{let G=b.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Dt(_.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,V)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(b,_,N){let G=i.get(b);_!==void 0&&pt(G.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&qt(b)}function w(b){let _=b.texture,N=i.get(b),G=i.get(_);b.addEventListener("dispose",I);let $=b.textures,V=b.isWebGLCubeRenderTarget===!0,bt=$.length>1;if(bt||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=_.version,o.memory.textures++),V){N.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[it]=[];for(let vt=0;vt<_.mipmaps.length;vt++)N.__webglFramebuffer[it][vt]=n.createFramebuffer()}else N.__webglFramebuffer[it]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)N.__webglFramebuffer[it]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(bt)for(let it=0,vt=$.length;it<vt;it++){let Mt=i.get($[it]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&yt(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){let vt=$[it];N.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[it]);let Mt=r.convert(vt.format,vt.colorSpace),j=r.convert(vt.type),ct=E(vt.internalFormat,Mt,j,vt.colorSpace,b.isXRRenderTarget===!0),It=de(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,It,ct,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,N.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Ht(n.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)pt(N.__webglFramebuffer[it][vt],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt);else pt(N.__webglFramebuffer[it],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let it=0,vt=$.length;it<vt;it++){let Mt=$[it],j=i.get(Mt),ct=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),Ht(ct,Mt),pt(N.__webglFramebuffer,b,Mt,n.COLOR_ATTACHMENT0+it,ct,0),m(Mt)&&f(ct)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(it=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,G.__webglTexture),Ht(it,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)pt(N.__webglFramebuffer[vt],b,_,n.COLOR_ATTACHMENT0,it,vt);else pt(N.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,it,0);m(_)&&f(it),e.unbindTexture()}b.depthBuffer&&qt(b)}function ue(b){let _=b.textures;for(let N=0,G=_.length;N<G;N++){let $=_[N];if(m($)){let V=T(b),bt=i.get($).__webglTexture;e.bindTexture(V,bt),f(V),e.unbindTexture()}}}let Nt=[],Pt=[];function xt(b){if(b.samples>0){if(yt(b)===!1){let _=b.textures,N=b.width,G=b.height,$=n.COLOR_BUFFER_BIT,V=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(b),it=_.length>1;if(it)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let vt=b.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);let j=i.get(_[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,N,G,0,0,N,G,$,n.NEAREST),c===!0&&(Nt.length=0,Pt.length=0,Nt.push(n.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Nt.push(V),Pt.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,bt.__webglColorRenderbuffer[Mt]);let j=i.get(_[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,j,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){let _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function de(b){return Math.min(s.maxSamples,b.samples)}function yt(b){let _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Bt(b){let _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Ae(b,_){let N=b.colorSpace,G=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Ei&&N!==Xn&&(Yt.getTransfer(N)===jt?(G!==an||$!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ye(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=k,this.rebindTextures=Pe,this.setupRenderTarget=w,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=yt}function Cg(n,t){function e(i,s=Xn){let r,o=Yt.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===po)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xa)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qa)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ga)return n.BYTE;if(i===Wa)return n.SHORT;if(i===ds)return n.UNSIGNED_SHORT;if(i===fo)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===fs)return n.HALF_FLOAT;if(i===Ya)return n.ALPHA;if(i===Za)return n.RGB;if(i===an)return n.RGBA;if(i===rs)return n.DEPTH_COMPONENT;if(i===ms)return n.DEPTH_STENCIL;if(i===$a)return n.RED;if(i===go)return n.RED_INTEGER;if(i===Ja)return n.RG;if(i===_o)return n.RG_INTEGER;if(i===xo)return n.RGBA_INTEGER;if(i===nr||i===ir||i===sr||i===rr)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yo||i===vo||i===Mo||i===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bo||i===Eo||i===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bo||i===Eo)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===To)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wo||i===Ao||i===Ro||i===Co||i===Io||i===Po||i===Lo||i===Do||i===Uo||i===No||i===Fo||i===Oo||i===Bo||i===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===wo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ao)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Co)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Io)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Po)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Do)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===No)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===Vo||i===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ko)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Go||i===Wo||i===Xo||i===qo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ps?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ig=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pg=`
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

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new _n({vertexShader:Ig,fragmentShader:Pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xl=class extends Vn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new _l,f={},T=e.getContextAttributes(),E=null,M=null,R=[],A=[],I=new et,U=null,S=new He;S.viewport=new _e;let v=new He;v.viewport=new _e;let P=[S,v],z=new eo,H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=R[q];return J===void 0&&(J=new hs,R[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=R[q];return J===void 0&&(J=new hs,R[q]=J),J.getGripSpace()},this.getHand=function(q){let J=R[q];return J===void 0&&(J=new hs,R[q]=J),J.getHandSpace()};function Z(q){let J=A.indexOf(q.inputSource);if(J===-1)return;let pt=R[J];pt!==void 0&&(pt.update(q.inputSource,q.frame,l||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",nt);for(let q=0;q<R.length;q++){let J=A[q];J!==null&&(A[q]=null,R[q].disconnect(J))}H=null,X=null,m.reset();for(let q in f)delete f[q];t.setRenderTarget(E),p=null,d=null,u=null,s=null,M=null,Jt.stop(),i.isPresenting=!1,t.setPixelRatio(U),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",nt),T.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,Et=null;T.depth&&(Et=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=T.stencil?ms:rs,Dt=T.stencil?ps:ui);let qt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new En(d.textureWidth,d.textureHeight,{format:an,type:Cn,depthTexture:new Js(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new En(p.framebufferWidth,p.framebufferHeight,{format:an,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(q){for(let J=0;J<q.removed.length;J++){let pt=q.removed[J],Dt=A.indexOf(pt);Dt>=0&&(A[Dt]=null,R[Dt].disconnect(pt))}for(let J=0;J<q.added.length;J++){let pt=q.added[J],Dt=A.indexOf(pt);if(Dt===-1){for(let qt=0;qt<R.length;qt++)if(qt>=A.length){A.push(pt),Dt=qt;break}else if(A[qt]===null){A[qt]=pt,Dt=qt;break}if(Dt===-1)break}let Et=R[Dt];Et&&Et.connect(pt)}}let k=new F,ot=new F;function ut(q,J,pt){k.setFromMatrixPosition(J.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);let Dt=k.distanceTo(ot),Et=J.projectionMatrix.elements,qt=pt.projectionMatrix.elements,Pe=Et[14]/(Et[10]-1),w=Et[14]/(Et[10]+1),ue=(Et[9]+1)/Et[5],Nt=(Et[9]-1)/Et[5],Pt=(Et[8]-1)/Et[0],xt=(qt[8]+1)/qt[0],de=Pe*Pt,yt=Pe*xt,Bt=Dt/(-Pt+xt),Ae=Bt*-Pt;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ae),q.translateZ(Bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let ye=Pe+Bt,b=w+Bt,_=de-Ae,N=yt+(Dt-Ae),G=ue*w/b*ye,$=Nt*w/b*ye;q.projectionMatrix.makePerspective(_,N,G,$,ye,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Tt(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,pt=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),z.near=v.near=S.near=J,z.far=v.far=S.far=pt,(H!==z.near||X!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,X=z.far),z.layers.mask=q.layers.mask|6,S.layers.mask=z.layers.mask&3,v.layers.mask=z.layers.mask&5;let Dt=q.parent,Et=z.cameras;Tt(z,Dt);for(let qt=0;qt<Et.length;qt++)Tt(Et[qt],Dt);Et.length===2?ut(z,S,v):z.projectionMatrix.copy(S.projectionMatrix),Ht(q,z,Dt)};function Ht(q,J,pt){pt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=os*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return f[q]};let se=null;function he(q,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Dt=!1;pt.length!==z.cameras.length&&(z.cameras.length=0,Dt=!0);for(let w=0;w<pt.length;w++){let ue=pt[w],Nt=null;if(p!==null)Nt=p.getViewport(ue);else{let xt=u.getViewSubImage(d,ue);Nt=xt.viewport,w===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let Pt=P[w];Pt===void 0&&(Pt=new He,Pt.layers.enable(w),Pt.viewport=new _e,P[w]=Pt),Pt.matrix.fromArray(ue.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(ue.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),w===0&&(z.matrix.copy(Pt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Dt===!0&&z.cameras.push(Pt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let w=u.getDepthInformation(pt[0]);w&&w.isValid&&w.texture&&m.init(w,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let w=0;w<pt.length;w++){let ue=pt[w].camera;if(ue){let Nt=f[ue];Nt||(Nt=new Ks,f[ue]=Nt);let Pt=u.getCameraImage(ue);Nt.sourceTexture=Pt}}}}for(let pt=0;pt<R.length;pt++){let Dt=A[pt],Et=R[pt];Dt!==null&&Et!==void 0&&Et.update(Dt,J,l||o)}se&&se(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let Jt=new gh;Jt.setAnimationLoop(he),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}},Di=new Tn,Lg=new be;function Dg(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,el(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,T,E,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,T,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let T=t.get(f),E=T.envMap,M=T.envMapRotation;E&&(m.envMap.value=E,Di.copy(M),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(Di)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let T=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ug(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){let M=E.program;i.uniformBlockBinding(T,M)}function l(T,E){let M=s[T.id];M===void 0&&(g(T),M=h(T),s[T.id]=M,T.addEventListener("dispose",m));let R=E.program;i.updateUBOMapping(T,R);let A=t.render.frame;r[T.id]!==A&&(d(T),r[T.id]=A)}function h(T){let E=u();T.__bindingPointIndex=E;let M=n.createBuffer(),R=T.__size,A=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,M),M}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let E=s[T.id],M=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let A=0,I=M.length;A<I;A++){let U=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,v=U.length;S<v;S++){let P=U[S];if(p(P,A,S,R)===!0){let z=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],X=0;for(let Z=0;Z<H.length;Z++){let W=H[Z],nt=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,E,M,R){let A=T.value,I=E+"_"+M;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{let U=R[I];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return R[I]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(T){let E=T.uniforms,M=0,R=16;for(let I=0,U=E.length;I<U;I++){let S=Array.isArray(E[I])?E[I]:[E[I]];for(let v=0,P=S.length;v<P;v++){let z=S[v],H=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Z=H.length;X<Z;X++){let W=H[X],nt=x(W),k=M%R,ot=k%nt.boundary,ut=k+ot;M+=ot,ut!==0&&R-ut<nt.storage&&(M+=R-ut),z.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=nt.storage}}}let A=M%R;return A>0&&(M+=R-A),T.__size=M,T.__cache={},this}function x(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Ko=class{constructor(t={}){let{canvas:e=Hc(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,R=!1;this._outputColorSpace=ze;let A=0,I=0,U=null,S=-1,v=null,P=new _e,z=new _e,H=null,X=new $t(0),Z=0,W=e.width,nt=e.height,k=1,ot=null,ut=null,Tt=new _e(0,0,W,nt),Ht=new _e(0,0,W,nt),se=!1,he=new $s,Jt=!1,q=!1,J=new be,pt=new F,Dt=new _e,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Pe(){return U===null?k:1}let w=i;function ue(y,L){return e.getContext(y,L)}try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",K,!1),w===null){let L="webgl2";if(w=ue(L,y),w===null)throw ue(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Nt,Pt,xt,de,yt,Bt,Ae,ye,b,_,N,G,$,V,bt,it,vt,Mt,j,ct,It,St,at,Ot;function C(){Nt=new Qp(w),Nt.init(),St=new Cg(w,Nt),Pt=new Xp(w,Nt,t,St),xt=new Ag(w,Nt),Pt.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),de=new em(w),yt=new pg,Bt=new Rg(w,Nt,xt,yt,Pt,St,de),Ae=new Yp(M),ye=new Kp(M),b=new od(w),at=new Gp(w,b),_=new jp(w,b,de,at),N=new im(w,_,b,de),j=new nm(w,Pt,Bt),it=new qp(yt),G=new fg(M,Ae,ye,Nt,Pt,at,it),$=new Dg(M,yt),V=new gg,bt=new Sg(Nt),Mt=new Hp(M,Ae,ye,xt,N,p,c),vt=new Tg(M,N,Pt),Ot=new Ug(w,de,Pt,xt),ct=new Wp(w,Nt,de),It=new tm(w,Nt,de),de.programs=G.programs,M.capabilities=Pt,M.extensions=Nt,M.properties=yt,M.renderLists=V,M.shadowMap=vt,M.state=xt,M.info=de}C();let tt=new xl(M,w);this.xr=tt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let y=Nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(y){y!==void 0&&(k=y,this.setSize(W,nt,!1))},this.getSize=function(y){return y.set(W,nt)},this.setSize=function(y,L,O=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,nt=L,e.width=Math.floor(y*k),e.height=Math.floor(L*k),O===!0&&(e.style.width=y+"px",e.style.height=L+"px"),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(W*k,nt*k).floor()},this.setDrawingBufferSize=function(y,L,O){W=y,nt=L,k=O,e.width=Math.floor(y*O),e.height=Math.floor(L*O),this.setViewport(0,0,y,L)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Tt)},this.setViewport=function(y,L,O,B){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,L,O,B),xt.viewport(P.copy(Tt).multiplyScalar(k).round())},this.getScissor=function(y){return y.copy(Ht)},this.setScissor=function(y,L,O,B){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,L,O,B),xt.scissor(z.copy(Ht).multiplyScalar(k).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(y){xt.setScissorTest(se=y)},this.setOpaqueSort=function(y){ot=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,O=!0){let B=0;if(y){let D=!1;if(U!==null){let Q=U.texture.format;D=Q===xo||Q===_o||Q===go}if(D){let Q=U.texture.type,lt=Q===Cn||Q===ui||Q===ds||Q===ps||Q===po||Q===mo,mt=Mt.getClearColor(),dt=Mt.getClearAlpha(),Ct=mt.r,Lt=mt.g,wt=mt.b;lt?(g[0]=Ct,g[1]=Lt,g[2]=wt,g[3]=dt,w.clearBufferuiv(w.COLOR,0,g)):(x[0]=Ct,x[1]=Lt,x[2]=wt,x[3]=dt,w.clearBufferiv(w.COLOR,0,x))}else B|=w.COLOR_BUFFER_BIT}L&&(B|=w.DEPTH_BUFFER_BIT),O&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",K,!1),Mt.dispose(),V.dispose(),bt.dispose(),yt.dispose(),Ae.dispose(),ye.dispose(),N.dispose(),at.dispose(),Ot.dispose(),G.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Sn),tt.removeEventListener("sessionend",Il),mi.stop()};function st(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let y=de.autoReset,L=vt.enabled,O=vt.autoUpdate,B=vt.needsUpdate,D=vt.type;C(),de.autoReset=y,vt.enabled=L,vt.autoUpdate=O,vt.needsUpdate=B,vt.type=D}function K(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Y(y){let L=y.target;L.removeEventListener("dispose",Y),gt(L)}function gt(y){Ut(y),yt.remove(y)}function Ut(y){let L=yt.get(y).programs;L!==void 0&&(L.forEach(function(O){G.releaseProgram(O)}),y.isShaderMaterial&&G.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,O,B,D,Q){L===null&&(L=Et);let lt=D.isMesh&&D.matrixWorld.determinant()<0,mt=ou(y,L,O,B,D);xt.setMaterial(B,lt);let dt=O.index,Ct=1;if(B.wireframe===!0){if(dt=_.getWireframeAttribute(O),dt===void 0)return;Ct=2}let Lt=O.drawRange,wt=O.attributes.position,Wt=Lt.start*Ct,te=(Lt.start+Lt.count)*Ct;Q!==null&&(Wt=Math.max(Wt,Q.start*Ct),te=Math.min(te,(Q.start+Q.count)*Ct)),dt!==null?(Wt=Math.max(Wt,0),te=Math.min(te,dt.count)):wt!=null&&(Wt=Math.max(Wt,0),te=Math.min(te,wt.count));let ge=te-Wt;if(ge<0||ge===1/0)return;at.setup(D,B,mt,O,dt);let oe,ee=ct;if(dt!==null&&(oe=b.get(dt),ee=It,ee.setIndex(oe)),D.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*Pe()),ee.setMode(w.LINES)):ee.setMode(w.TRIANGLES);else if(D.isLine){let Rt=B.linewidth;Rt===void 0&&(Rt=1),xt.setLineWidth(Rt*Pe()),D.isLineSegments?ee.setMode(w.LINES):D.isLineLoop?ee.setMode(w.LINE_LOOP):ee.setMode(w.LINE_STRIP)}else D.isPoints?ee.setMode(w.POINTS):D.isSprite&&ee.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))ee.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Rt=D._multiDrawStarts,pe=D._multiDrawCounts,Zt=D._multiDrawCount,We=dt?b.get(dt).bytesPerElement:1,Wi=yt.get(B).currentProgram.getUniforms();for(let Xe=0;Xe<Zt;Xe++)Wi.setValue(w,"_gl_DrawID",Xe),ee.render(Rt[Xe]/We,pe[Xe])}else if(D.isInstancedMesh)ee.renderInstances(Wt,ge,D.count);else if(O.isInstancedBufferGeometry){let Rt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,pe=Math.min(O.instanceCount,Rt);ee.renderInstances(Wt,ge,pe)}else ee.render(Wt,ge)};function re(y,L,O){y.transparent===!0&&y.side===Rn&&y.forceSinglePass===!1?(y.side=ke,y.needsUpdate=!0,fr(y,L,O),y.side=kn,y.needsUpdate=!0,fr(y,L,O),y.side=Rn):fr(y,L,O)}this.compile=function(y,L,O=null){O===null&&(O=y),f=bt.get(O),f.init(L),E.push(f),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),y!==O&&y.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();let B=new Set;return y.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let Q=D.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){let mt=Q[lt];re(mt,O,D),B.add(mt)}else re(Q,O,D),B.add(Q)}),f=E.pop(),B},this.compileAsync=function(y,L,O=null){let B=this.compile(y,L,O);return new Promise(D=>{function Q(){if(B.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){D(y);return}setTimeout(Q,10)}Nt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Kt=null;function Dn(y){Kt&&Kt(y)}function Sn(){mi.stop()}function Il(){mi.start()}let mi=new gh;mi.setAnimationLoop(Dn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(y){Kt=y,tt.setAnimationLoop(y),y===null?mi.stop():mi.start()},tt.addEventListener("sessionstart",Sn),tt.addEventListener("sessionend",Il),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(L),L=tt.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,L,U),f=bt.get(y,E.length),f.init(L),E.push(f),J.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),he.setFromProjectionMatrix(J,mn,L.reversedDepth),q=this.localClippingEnabled,Jt=it.init(this.clippingPlanes,q),m=V.get(y,T.length),m.init(),T.push(m),tt.enabled===!0&&tt.isPresenting===!0){let Q=M.xr.getDepthSensingMesh();Q!==null&&aa(Q,L,-1/0,M.sortObjects)}aa(y,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ot,ut),qt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,qt&&Mt.addToRenderList(m,y),this.info.render.frame++,Jt===!0&&it.beginShadows();let O=f.state.shadowsArray;vt.render(O,y,L),Jt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,D=m.transmissive;if(f.setupLights(),L.isArrayCamera){let Q=L.cameras;if(D.length>0)for(let lt=0,mt=Q.length;lt<mt;lt++){let dt=Q[lt];Ll(B,D,y,dt)}qt&&Mt.render(y);for(let lt=0,mt=Q.length;lt<mt;lt++){let dt=Q[lt];Pl(m,y,dt,dt.viewport)}}else D.length>0&&Ll(B,D,y,L),qt&&Mt.render(y),Pl(m,y,L);U!==null&&I===0&&(Bt.updateMultisampleRenderTarget(U),Bt.updateRenderTargetMipmap(U)),y.isScene===!0&&y.onAfterRender(M,y,L),at.resetDefaultState(),S=-1,v=null,E.pop(),E.length>0?(f=E[E.length-1],Jt===!0&&it.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function aa(y,L,O,B){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||he.intersectsSprite(y)){B&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);let lt=N.update(y),mt=y.material;mt.visible&&m.push(y,lt,mt,O,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||he.intersectsObject(y))){let lt=N.update(y),mt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Dt.copy(lt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(mt)){let dt=lt.groups;for(let Ct=0,Lt=dt.length;Ct<Lt;Ct++){let wt=dt[Ct],Wt=mt[wt.materialIndex];Wt&&Wt.visible&&m.push(y,lt,Wt,O,Dt.z,wt)}}else mt.visible&&m.push(y,lt,mt,O,Dt.z,null)}}let Q=y.children;for(let lt=0,mt=Q.length;lt<mt;lt++)aa(Q[lt],L,O,B)}function Pl(y,L,O,B){let D=y.opaque,Q=y.transmissive,lt=y.transparent;f.setupLightsView(O),Jt===!0&&it.setGlobalState(M.clippingPlanes,O),B&&xt.viewport(P.copy(B)),D.length>0&&dr(D,L,O),Q.length>0&&dr(Q,L,O),lt.length>0&&dr(lt,L,O),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ll(y,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new En(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?fs:Cn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let Q=f.state.transmissionRenderTarget[B.id],lt=B.viewport||P;Q.setSize(lt.z*M.transmissionResolutionScale,lt.w*M.transmissionResolutionScale);let mt=M.getRenderTarget(),dt=M.getActiveCubeFace(),Ct=M.getActiveMipmapLevel();M.setRenderTarget(Q),M.getClearColor(X),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),qt&&Mt.render(O);let Lt=M.toneMapping;M.toneMapping=Wn;let wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Jt===!0&&it.setGlobalState(M.clippingPlanes,B),dr(y,O,B),Bt.updateMultisampleRenderTarget(Q),Bt.updateRenderTargetMipmap(Q),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let te=0,ge=L.length;te<ge;te++){let oe=L[te],ee=oe.object,Rt=oe.geometry,pe=oe.material,Zt=oe.group;if(pe.side===Rn&&ee.layers.test(B.layers)){let We=pe.side;pe.side=ke,pe.needsUpdate=!0,Dl(ee,O,B,Rt,pe,Zt),pe.side=We,pe.needsUpdate=!0,Wt=!0}}Wt===!0&&(Bt.updateMultisampleRenderTarget(Q),Bt.updateRenderTargetMipmap(Q))}M.setRenderTarget(mt,dt,Ct),M.setClearColor(X,Z),wt!==void 0&&(B.viewport=wt),M.toneMapping=Lt}function dr(y,L,O){let B=L.isScene===!0?L.overrideMaterial:null;for(let D=0,Q=y.length;D<Q;D++){let lt=y[D],mt=lt.object,dt=lt.geometry,Ct=lt.group,Lt=lt.material;Lt.allowOverride===!0&&B!==null&&(Lt=B),mt.layers.test(O.layers)&&Dl(mt,L,O,dt,Lt,Ct)}}function Dl(y,L,O,B,D,Q){y.onBeforeRender(M,L,O,B,D,Q),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),D.onBeforeRender(M,L,O,B,y,Q),D.transparent===!0&&D.side===Rn&&D.forceSinglePass===!1?(D.side=ke,D.needsUpdate=!0,M.renderBufferDirect(O,L,B,D,y,Q),D.side=kn,D.needsUpdate=!0,M.renderBufferDirect(O,L,B,D,y,Q),D.side=Rn):M.renderBufferDirect(O,L,B,D,y,Q),y.onAfterRender(M,L,O,B,D,Q)}function fr(y,L,O){L.isScene!==!0&&(L=Et);let B=yt.get(y),D=f.state.lights,Q=f.state.shadowsArray,lt=D.state.version,mt=G.getParameters(y,D.state,Q,L,O),dt=G.getProgramCacheKey(mt),Ct=B.programs;B.environment=y.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(y.isMeshStandardMaterial?ye:Ae).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Ct===void 0&&(y.addEventListener("dispose",Y),Ct=new Map,B.programs=Ct);let Lt=Ct.get(dt);if(Lt!==void 0){if(B.currentProgram===Lt&&B.lightsStateVersion===lt)return Nl(y,mt),Lt}else mt.uniforms=G.getUniforms(y),y.onBeforeCompile(mt,M),Lt=G.acquireProgram(mt,dt),Ct.set(dt,Lt),B.uniforms=mt.uniforms;let wt=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(wt.clippingPlanes=it.uniform),Nl(y,mt),B.needsLights=lu(y),B.lightsStateVersion=lt,B.needsLights&&(wt.ambientLightColor.value=D.state.ambient,wt.lightProbe.value=D.state.probe,wt.directionalLights.value=D.state.directional,wt.directionalLightShadows.value=D.state.directionalShadow,wt.spotLights.value=D.state.spot,wt.spotLightShadows.value=D.state.spotShadow,wt.rectAreaLights.value=D.state.rectArea,wt.ltc_1.value=D.state.rectAreaLTC1,wt.ltc_2.value=D.state.rectAreaLTC2,wt.pointLights.value=D.state.point,wt.pointLightShadows.value=D.state.pointShadow,wt.hemisphereLights.value=D.state.hemi,wt.directionalShadowMap.value=D.state.directionalShadowMap,wt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,wt.spotShadowMap.value=D.state.spotShadowMap,wt.spotLightMatrix.value=D.state.spotLightMatrix,wt.spotLightMap.value=D.state.spotLightMap,wt.pointShadowMap.value=D.state.pointShadowMap,wt.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Lt,B.uniformsList=null,Lt}function Ul(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=ys.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Nl(y,L){let O=yt.get(y);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function ou(y,L,O,B,D){L.isScene!==!0&&(L=Et),Bt.resetTextureUnits();let Q=L.fog,lt=B.isMeshStandardMaterial?L.environment:null,mt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ei,dt=(B.isMeshStandardMaterial?ye:Ae).get(B.envMap||lt),Ct=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Lt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!O.morphAttributes.position,Wt=!!O.morphAttributes.normal,te=!!O.morphAttributes.color,ge=Wn;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ge=M.toneMapping);let oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=oe!==void 0?oe.length:0,Rt=yt.get(B),pe=f.state.lights;if(Jt===!0&&(q===!0||y!==v)){let Oe=y===v&&B.id===S;it.setState(B,y,Oe)}let Zt=!1;B.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==pe.state.version||Rt.outputColorSpace!==mt||D.isBatchedMesh&&Rt.batching===!1||!D.isBatchedMesh&&Rt.batching===!0||D.isBatchedMesh&&Rt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Rt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Rt.instancing===!1||!D.isInstancedMesh&&Rt.instancing===!0||D.isSkinnedMesh&&Rt.skinning===!1||!D.isSkinnedMesh&&Rt.skinning===!0||D.isInstancedMesh&&Rt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Rt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Rt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Rt.instancingMorph===!1&&D.morphTexture!==null||Rt.envMap!==dt||B.fog===!0&&Rt.fog!==Q||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==Ct||Rt.vertexTangents!==Lt||Rt.morphTargets!==wt||Rt.morphNormals!==Wt||Rt.morphColors!==te||Rt.toneMapping!==ge||Rt.morphTargetsCount!==ee)&&(Zt=!0):(Zt=!0,Rt.__version=B.version);let We=Rt.currentProgram;Zt===!0&&(We=fr(B,L,D));let Wi=!1,Xe=!1,Ps=!1,me=We.getUniforms(),en=Rt.uniforms;if(xt.useProgram(We.program)&&(Wi=!0,Xe=!0,Ps=!0),B.id!==S&&(S=B.id,Xe=!0),Wi||v!==y){xt.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),me.setValue(w,"projectionMatrix",y.projectionMatrix),me.setValue(w,"viewMatrix",y.matrixWorldInverse);let Ve=me.map.cameraPosition;Ve!==void 0&&Ve.setValue(w,pt.setFromMatrixPosition(y.matrixWorld)),Pt.logarithmicDepthBuffer&&me.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&me.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),v!==y&&(v=y,Xe=!0,Ps=!0)}if(D.isSkinnedMesh){me.setOptional(w,D,"bindMatrix"),me.setOptional(w,D,"bindMatrixInverse");let Oe=D.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),me.setValue(w,"boneTexture",Oe.boneTexture,Bt))}D.isBatchedMesh&&(me.setOptional(w,D,"batchingTexture"),me.setValue(w,"batchingTexture",D._matricesTexture,Bt),me.setOptional(w,D,"batchingIdTexture"),me.setValue(w,"batchingIdTexture",D._indirectTexture,Bt),me.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&me.setValue(w,"batchingColorTexture",D._colorsTexture,Bt));let nn=O.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&j.update(D,O,We),(Xe||Rt.receiveShadow!==D.receiveShadow)&&(Rt.receiveShadow=D.receiveShadow,me.setValue(w,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(en.envMap.value=dt,en.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(en.envMapIntensity.value=L.environmentIntensity),Xe&&(me.setValue(w,"toneMappingExposure",M.toneMappingExposure),Rt.needsLights&&au(en,Ps),Q&&B.fog===!0&&$.refreshFogUniforms(en,Q),$.refreshMaterialUniforms(en,B,k,nt,f.state.transmissionRenderTarget[y.id]),ys.upload(w,Ul(Rt),en,Bt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ys.upload(w,Ul(Rt),en,Bt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&me.setValue(w,"center",D.center),me.setValue(w,"modelViewMatrix",D.modelViewMatrix),me.setValue(w,"normalMatrix",D.normalMatrix),me.setValue(w,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Oe=B.uniformsGroups;for(let Ve=0,la=Oe.length;Ve<la;Ve++){let gi=Oe[Ve];Ot.update(gi,We),Ot.bind(gi,We)}}return We}function au(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function lu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(y,L,O){let B=yt.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),yt.get(y.texture).__webglTexture=L,yt.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let O=yt.get(y);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};let cu=w.createFramebuffer();this.setRenderTarget=function(y,L=0,O=0){U=y,A=L,I=O;let B=!0,D=null,Q=!1,lt=!1;if(y){let dt=yt.get(y);if(dt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(w.FRAMEBUFFER,null),B=!1;else if(dt.__webglFramebuffer===void 0)Bt.setupRenderTarget(y);else if(dt.__hasExternalTextures)Bt.rebindTextures(y,yt.get(y.texture).__webglTexture,yt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let wt=y.depthTexture;if(dt.__boundDepthTexture!==wt){if(wt!==null&&yt.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(y)}}let Ct=y.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);let Lt=yt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Lt[L])?D=Lt[L][O]:D=Lt[L],Q=!0):y.samples>0&&Bt.useMultisampledRTT(y)===!1?D=yt.get(y).__webglMultisampledFramebuffer:Array.isArray(Lt)?D=Lt[O]:D=Lt,P.copy(y.viewport),z.copy(y.scissor),H=y.scissorTest}else P.copy(Tt).multiplyScalar(k).floor(),z.copy(Ht).multiplyScalar(k).floor(),H=se;if(O!==0&&(D=cu),xt.bindFramebuffer(w.FRAMEBUFFER,D)&&B&&xt.drawBuffers(y,D),xt.viewport(P),xt.scissor(z),xt.setScissorTest(H),Q){let dt=yt.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,O)}else if(lt){let dt=L;for(let Ct=0;Ct<y.textures.length;Ct++){let Lt=yt.get(y.textures[Ct]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,O,dt)}}else if(y!==null&&O!==0){let dt=yt.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,dt.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(y,L,O,B,D,Q,lt,mt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=yt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt){xt.bindFramebuffer(w.FRAMEBUFFER,dt);try{let Ct=y.textures[mt],Lt=Ct.format,wt=Ct.type;if(!Pt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-B&&O>=0&&O<=y.height-D&&(y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),w.readPixels(L,O,B,D,St.convert(Lt),St.convert(wt),Q))}finally{let Ct=U!==null?yt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(w.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(y,L,O,B,D,Q,lt,mt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=yt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt)if(L>=0&&L<=y.width-B&&O>=0&&O<=y.height-D){xt.bindFramebuffer(w.FRAMEBUFFER,dt);let Ct=y.textures[mt],Lt=Ct.format,wt=Ct.type;if(!Pt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),y.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),w.readPixels(L,O,B,D,St.convert(Lt),St.convert(wt),0);let te=U!==null?yt.get(U).__webglFramebuffer:null;xt.bindFramebuffer(w.FRAMEBUFFER,te);let ge=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Gc(w,ge,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(Wt),w.deleteSync(ge),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,O=0){let B=Math.pow(2,-O),D=Math.floor(y.image.width*B),Q=Math.floor(y.image.height*B),lt=L!==null?L.x:0,mt=L!==null?L.y:0;Bt.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,lt,mt,D,Q),xt.unbindTexture()};let hu=w.createFramebuffer(),uu=w.createFramebuffer();this.copyTextureToTexture=function(y,L,O=null,B=null,D=0,Q=null){Q===null&&(D!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=D,D=0):Q=0);let lt,mt,dt,Ct,Lt,wt,Wt,te,ge,oe=y.isCompressedTexture?y.mipmaps[Q]:y.image;if(O!==null)lt=O.max.x-O.min.x,mt=O.max.y-O.min.y,dt=O.isBox3?O.max.z-O.min.z:1,Ct=O.min.x,Lt=O.min.y,wt=O.isBox3?O.min.z:0;else{let nn=Math.pow(2,-D);lt=Math.floor(oe.width*nn),mt=Math.floor(oe.height*nn),y.isDataArrayTexture?dt=oe.depth:y.isData3DTexture?dt=Math.floor(oe.depth*nn):dt=1,Ct=0,Lt=0,wt=0}B!==null?(Wt=B.x,te=B.y,ge=B.z):(Wt=0,te=0,ge=0);let ee=St.convert(L.format),Rt=St.convert(L.type),pe;L.isData3DTexture?(Bt.setTexture3D(L,0),pe=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Bt.setTexture2DArray(L,0),pe=w.TEXTURE_2D_ARRAY):(Bt.setTexture2D(L,0),pe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);let Zt=w.getParameter(w.UNPACK_ROW_LENGTH),We=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Wi=w.getParameter(w.UNPACK_SKIP_PIXELS),Xe=w.getParameter(w.UNPACK_SKIP_ROWS),Ps=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,oe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,oe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ct),w.pixelStorei(w.UNPACK_SKIP_ROWS,Lt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wt);let me=y.isDataArrayTexture||y.isData3DTexture,en=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let nn=yt.get(y),Oe=yt.get(L),Ve=yt.get(nn.__renderTarget),la=yt.get(Oe.__renderTarget);xt.bindFramebuffer(w.READ_FRAMEBUFFER,Ve.__webglFramebuffer),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let gi=0;gi<dt;gi++)me&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,yt.get(y).__webglTexture,D,wt+gi),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,yt.get(L).__webglTexture,Q,ge+gi)),w.blitFramebuffer(Ct,Lt,lt,mt,Wt,te,lt,mt,w.DEPTH_BUFFER_BIT,w.NEAREST);xt.bindFramebuffer(w.READ_FRAMEBUFFER,null),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(D!==0||y.isRenderTargetTexture||yt.has(y)){let nn=yt.get(y),Oe=yt.get(L);xt.bindFramebuffer(w.READ_FRAMEBUFFER,hu),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,uu);for(let Ve=0;Ve<dt;Ve++)me?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,nn.__webglTexture,D,wt+Ve):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,nn.__webglTexture,D),en?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Oe.__webglTexture,Q,ge+Ve):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Oe.__webglTexture,Q),D!==0?w.blitFramebuffer(Ct,Lt,lt,mt,Wt,te,lt,mt,w.COLOR_BUFFER_BIT,w.NEAREST):en?w.copyTexSubImage3D(pe,Q,Wt,te,ge+Ve,Ct,Lt,lt,mt):w.copyTexSubImage2D(pe,Q,Wt,te,Ct,Lt,lt,mt);xt.bindFramebuffer(w.READ_FRAMEBUFFER,null),xt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else en?y.isDataTexture||y.isData3DTexture?w.texSubImage3D(pe,Q,Wt,te,ge,lt,mt,dt,ee,Rt,oe.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(pe,Q,Wt,te,ge,lt,mt,dt,ee,oe.data):w.texSubImage3D(pe,Q,Wt,te,ge,lt,mt,dt,ee,Rt,oe):y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,Wt,te,lt,mt,ee,Rt,oe.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,Wt,te,oe.width,oe.height,ee,oe.data):w.texSubImage2D(w.TEXTURE_2D,Q,Wt,te,lt,mt,ee,Rt,oe);w.pixelStorei(w.UNPACK_ROW_LENGTH,Zt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,We),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Wi),w.pixelStorei(w.UNPACK_SKIP_ROWS,Xe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ps),Q===0&&L.generateMipmaps&&w.generateMipmap(pe),xt.unbindTexture()},this.initRenderTarget=function(y){yt.get(y).__webglFramebuffer===void 0&&Bt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Bt.setTextureCube(y,0):y.isData3DTexture?Bt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Bt.setTexture2DArray(y,0):Bt.setTexture2D(y,0),xt.unbindTexture()},this.resetState=function(){A=0,I=0,U=null,xt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Rh=document.querySelector("#canvasMount"),Fg=document.querySelector("#gameBoard"),Ch=document.querySelector("#timer"),Og=document.querySelector("#strokeCount"),$n=document.querySelector("#instruction"),cr=document.querySelector("#resultBanner"),Ih=document.querySelector("#undoButton"),Bg=document.querySelector("#dropButton"),zg=document.querySelector("#resetButton"),Tl=document.querySelector("#hintDialog"),Ph=document.querySelector("#levelSelect"),Lh=document.querySelector("#gameApp"),Sl=document.querySelector("#levelGrid"),kg=document.querySelector("#progressText"),Dh=document.querySelector("#levelMenuButton"),Vg=document.querySelector("#missionText"),Hg=document.querySelector("#hintTitle"),Gg=document.querySelector("#hintBody"),ce={left:-5,right:5,bottom:-7,top:7},Me=.28,bl=.55,Gt=.075,Mh=.85,Fi=1/120,cn=18,ia=192,hn=.75,hr=3,Uh=5.5,Nh=new Zs,ve=new us(ce.left,ce.right,ce.top,ce.bottom,.1,30);ve.position.z=10;var je=new Ko({antialias:!0,alpha:!0});je.setPixelRatio(Math.min(devicePixelRatio,2));je.outputColorSpace=ze;Rh.appendChild(je.domElement);var vn=new Ge,Jn=new Ge;Nh.add(vn,Jn);var Mn=new Je({color:16315883}),ln=new Je({color:16752412}),Fh=new Je({color:13396992}),Wg=new Je({color:16315883,transparent:!0,opacity:.22}),Xg=new Je({color:15158363,transparent:!0,opacity:.2}),qg=new Je({color:5021695}),Yg=new Je({color:15754340}),_t,fe=new et,ie=[],we=null,Vi=null,tn=!1,Ie=!1,Oh=0,Ts=0,Oi=0,El=0,Ce=0,xn=new et(-2.25,5.55),zi=!1,Es=!1,ws=[],As=[],yn=[],Gi=[],Rs=[],Cs=[],sa=[],ar=new Map,Zn=[],kt=null,qn=null,lr=new Set,oa=[],Zg=[{title:"\u91CD\u529B\u8207\u843D\u9EDE",names:["\u7B2C\u4E00\u9053\u659C\u5761","\u4E0B\u5761\u649E\u9776","\u5DE6\u7246\u6298\u8FD4","\u676F\u53E3\u5916\u6295\u653E","\u843D\u9EDE\u7A84\u9580","\u8DE8\u8D8A\u9AD8\u7246","\u96D9\u5C64\u5C0E\u8ECC","\u53F3\u7246\u56DE\u5F48","\u96D9\u9776\u63A5\u529B","\u7E5E\u904E\u77F3\u67F1"]},{title:"\u91CD\u5FC3\u8207\u8DEF\u7DDA",names:["\u504F\u5FC3\u63A8\u7403","\u7981\u5340\u6295\u676F","\u5169\u6BB5\u63A5\u529B","\u7A84\u5E36\u843D\u9EDE","\u501F\u7246\u5165\u9776","\u9AD8\u4F4E\u96D9\u53F0","\u67F1\u9593\u7A7F\u68AD","\u53CD\u5411\u6295\u653E","\u4E09\u9EDE\u9023\u7DDA","\u6700\u5F8C\u4E00\u500B\u652F\u9EDE"]},{title:"\u9F52\u8F2A\u521D\u9AD4\u9A57",names:["\u649E\u9192\u5927\u9F52\u8F2A","\u5916\u7DE3\u65BD\u529B","\u56FA\u5B9A\u8F2A\u8207\u6D3B\u8F2A","\u9806\u6642\u91DD\u63A8\u9032","\u8F2A\u5F8C\u85CF\u9776","\u96D9\u8F2A\u63A5\u529B","\u8F49\u8F2A\u6295\u676F","\u9F52\u9593\u843D\u7403","\u4E09\u7A2E\u8F2A\u901F","\u91CD\u9318\u50B3\u52D5"]},{title:"\u7BC0\u594F\u8207\u8B8A\u901F",names:["\u6162\u8F2A\u5165\u53E3","\u8B8A\u901F\u649E\u9776","\u7246\u9762\u6298\u8FD4","\u9806\u9006\u96D9\u8F2A","\u6293\u53CD\u8F49\u6642\u6A5F","\u5FEB\u6162\u5169\u5C64","\u52D5\u8F2A\u7A84\u9580","\u8F2A\u9593\u6295\u676F","\u4E09\u9776\u8A08\u6642","\u8B8A\u901F\u9577\u5ECA"]},{title:"\u6A5F\u95DC\u7D44\u5408\u8A66\u7149",names:["\u56DB\u8F2A\u8FF7\u9663","\u96D9\u9776\u72D9\u64CA","\u6975\u9650\u53CD\u5F48","\u7981\u5340\u7A7A\u6295","\u555F\u52D5\u518D\u63A5\u7403","\u9006\u6D41\u9577\u5ECA","\u504F\u5FC3\u5BC6\u5BA4","\u6A5F\u95DC\u9776\u5834","\u4E94\u6BB5\u63A5\u529B","\u6700\u5F8C\u4E00\u8F49"]},{title:"\u7CBE\u5BC6\u9023\u9396",names:["\u9F52\u8F2A\u968E\u68AF","\u4E09\u6B21\u53CD\u5F48","\u6D3B\u8F2A\u5B88\u9580","\u504F\u5FC3\u5165\u676F","\u5730\u9762\u7BC0\u9EDE","\u9023\u9396\u9776\u5FC3","\u9AD8\u901F\u8F49\u76E4","\u9006\u5411\u5C0E\u8ECC","\u8F2A\u4E0B\u843D\u9EDE","\u9577\u8DDD\u96E2\u63A5\u529B"]},{title:"\u5BB9\u5668\u8207\u53CD\u5F48",names:["\u676F\u53E3\u659C\u6295","\u7246\u89D2\u56DE\u5F48","\u7A84\u53E3\u9776\u5FC3","\u96D9\u7981\u5340\u7FFB\u8EAB","\u843D\u5730\u5206\u6D41","\u91CD\u5FC3\u7E5E\u67F1","\u649E\u8F2A\u5165\u676F","\u9AD8\u7246\u6295\u653E","\u4E09\u6BB5\u5F48\u8DF3","\u6700\u5F8C\u7684\u5BB9\u5668"]},{title:"\u6642\u9593\u6A5F\u95DC",names:["\u8B8A\u901F\u8D77\u9EDE","\u7B49\u5019\u7F3A\u53E3","\u9006\u8F49\u9776\u5FC3","\u5FEB\u8F2A\u4E0B\u676F","\u7BC0\u62CD\u843D\u5730","\u4EA4\u932F\u7BC0\u9EDE","\u8F49\u76E4\u7A97\u53E3","\u96D9\u901F\u9577\u5ECA","\u5EF6\u9072\u53CD\u5F48","\u6A5F\u95DC\u5012\u6578"]},{title:"\u767E\u95DC\u7D42\u6975\u8A66\u7149",names:["\u516B\u8F2A\u5165\u53E3","\u672B\u6BB5\u9776\u5FC3","\u7246\u908A\u6975\u9650","\u7981\u5340\u7FFB\u8D8A","\u5730\u9762\u72D9\u64CA","\u4E94\u9EDE\u8DEF\u7DDA","\u6700\u5F8C\u9F52\u8F2A","\u767E\u95DC\u5B8C\u6210"]}],ht=(n,t,e,i=0,s=.16)=>({x:n,y:t,length:e,thickness:s,rotation:i}),Qt=(n,t,e=.62,i="fixed",s={})=>({style:"cross",x:n,y:t,r:e,mode:i,...s}),At=(n,t,e=.76,i="constant",s=.8,r={})=>({style:"wheel",x:n,y:t,r:e,mode:i,speed:s,...r}),Bh=(n,t=-5.55,e=1.45,i=1.15)=>[n-e/2,n+e/2,t-i/2,t+i/2],Fe=(n,t,e=-5.55,i={})=>({...i,ball:n,basket:Bh(t,e),goal:{type:"ballBox"}}),Ln=(n,t,e,i={})=>({...i,ball:n,goal:{type:"target",x:t,y:e,r:.58}}),Ss=(n,t,e,i,s={})=>({...s,ball:n,goal:{type:"wall",side:t,minY:e,maxY:i}}),Bi=(n,t,e={})=>({...e,basket:Bh(n,t,1.6,1.2),goal:{type:"strokeBox"},noDraw:[{x:n,y:t+1,w:2.1,h:2.4},...e.noDraw??[]]}),bs=(n,t,e,i={})=>({...i,ball:n,goal:{type:"ground",minX:t,maxX:e}}),fi=(n,t,e={})=>({...e,ball:n,goal:{type:"checkpoints",targets:t.map(([i,s,r=.5])=>({x:i,y:s,r}))}}),na=(n,t,e={})=>({...e,goal:{type:"spinGear",speed:t},obstacles:[n,...e.obstacles??[]]}),le=(n,t,e,i=0,s=1)=>({x:n,y:t,length:e,rotation:i,mass:s}),zh=[[Fe([-3.25,5.25],3.25),Ln([-3.4,5.35],3.35,-3.85,{bars:[ht(0,1.25,4.4,-.1)]}),Ss([2.8,5.45],"left",-5.5,-2.8,{bars:[ht(-.1,-1.8,4.2,.18)]}),Bi(-3.2,-5.45),bs([-3.1,5.45],-.9,.9,{bars:[ht(-1.4,-2.3,3.2,-.12)]}),Fe([-3.25,5.45],3.25,-5.45,{bars:[ht(.2,-1.9,4.8,Math.PI/2)]}),Ln([3.15,5.2],-3.3,-2.5,{bars:[ht(.1,2.7,5,0),ht(-.2,-.1,4.1,.14)]}),Ss([-3.1,5.35],"right",-1.6,1.6,{obstacles:[Qt(.15,-1.1,.68)]}),fi([-3.25,5.4],[[-1.5,1],[2.4,-3.9]],{bars:[ht(.1,3,4.4,0),ht(-.4,-1,4,.12)]}),Fe([3.2,5.4],-3.25,-5.45,{obstacles:[Qt(-.9,0,.72)]})],[Fe([-3.3,5.25],3.25,-5.45,{bars:[ht(0,-.9,4.2,.12)],obstacles:[Qt(1.35,-3,.58)]}),Bi(3.2,-5.5,{bars:[ht(-.2,.1,4,-.22)]}),fi([3.2,5.25],[[1.3,1],[-1.6,-1.6],[-3.2,-4.65]],{bars:[ht(.3,3.05,4.1,0),ht(-.25,-.2,4.6,.1)]}),bs([-3.2,5.35],1.15,2,{bars:[ht(0,.7,4.2,-.16)],obstacles:[Qt(2.7,-2,.62)]}),Ln([-3.25,5.2],3.2,-5,{bars:[ht(-.1,2.8,4.5,0),ht(.2,-1.1,4.8,-.18)]}),Ss([3.1,5.25],"left",-5.2,-3.3,{obstacles:[Qt(-.4,.2,.72)],bars:[ht(-.2,-2.1,4,.12)]}),Fe([-3.25,5.4],3.15,-3.9,{obstacles:[Qt(-1.5,1.5,.65),Qt(1.5,-1.4,.65)],bars:[ht(0,-4.8,3.3,0)]}),Ln([3.15,5.2],-3.2,1.5,{obstacles:[Qt(-1.15,-1.5,.7)],bars:[ht(.15,2.4,4.1,.12),ht(0,-3.8,4.5,-.12)]}),Bi(-3.2,-5.5,{bars:[ht(.2,-2,4.6,.18)],noDraw:[{x:1.9,y:-3,w:1.4,h:2}]}),Fe([3.25,5.35],-3.2,-5.45,{obstacles:[Qt(-1.3,2,.6),Qt(1.4,-.5,.7)],bars:[ht(0,-3.4,3.6,.18)]})],[Fe([-3.25,5.35],3.2,-5.45,{obstacles:[At(-.6,1.1,.8,"impact",0,{damping:.7})]}),na(Qt(.3,-.6,.8,"impact",{damping:.65}),.58),Fe([3.2,5.3],-3.2,-5.45,{obstacles:[Qt(-1.3,.6,.65),At(1.2,-1.9,.72,"constant",-.78)]}),Ln([-3.3,5.4],3.1,-3.7,{obstacles:[At(.2,1.4,.78,"constant",.85)],bars:[ht(0,-2,4.8,-.15)]}),Bi(3.15,-5.45,{obstacles:[Qt(-.5,.2,.74,"fixed"),At(1.1,-2,.72,"impact",0,{damping:.75})]}),na(At(-.2,.8,.84,"impact",0,{damping:.6}),.72,{obstacles:[Qt(2.3,-2,.62)]}),Fe([-3.2,5.25],3.2,-5.4,{obstacles:[At(-1.4,1.2,.72,"constant",-.9),At(1.4,-1.5,.72,"impact",0,{damping:.7})],bars:[ht(0,-3.5,3.8,.12)]}),bs([3.2,5.3],-.65,.65,{obstacles:[Qt(-1.2,-.8,.66),At(1.3,1.4,.78,"constant",.9)]}),fi([-3.2,5.4],[[-1.6,2.3],[1.8,-.2],[3.2,-4.8]],{obstacles:[At(-1,.1,.74,"impact",0,{damping:.6}),Qt(1.1,-2.4,.6)],bars:[ht(.1,3.7,4.2,0)]}),Fe([3.2,5.35],-3.2,-5.45,{obstacles:[Qt(-1.9,2.4,.6),At(.1,.1,.78,"constant",-.82),At(1.7,-2.7,.68,"impact",0,{damping:.7})]})],[Fe([-3.2,5.3],3.2,-5.4,{obstacles:[At(-1.5,1.6,.76,"variable",0,{baseSpeed:.15,amplitude:1.05,frequency:1})]}),Ln([3.2,5.35],-3.2,-3.9,{obstacles:[At(-1.3,1,.74,"variable",0,{baseSpeed:-.25,amplitude:1.1,frequency:1.2}),Qt(1,-1.2,.62)],bars:[ht(0,2.5,4.5,.12)]}),Ss([-3.2,5.25],"right",-4.9,-2,{obstacles:[At(-.8,1.4,.78,"constant",.9),At(1.1,-1.8,.74,"variable",0,{baseSpeed:.05,amplitude:1,frequency:.85})]}),Fe([3.2,5.35],-3.2,-5.4,{obstacles:[At(-1.4,1.6,.75,"constant",-.9),At(1.3,-1.5,.75,"constant",.9)],bars:[ht(0,-3.6,4,-.14)]}),fi([-3.2,5.3],[[0,2.7],[2.8,-3.5]],{obstacles:[At(0,.2,.82,"variable",0,{baseSpeed:-.15,amplitude:1.15,frequency:1.25})],bars:[ht(-1.5,-2.2,3.2,.2)]}),bs([3.2,5.25],-.9,.9,{obstacles:[At(-1.7,1.7,.72,"variable",0,{baseSpeed:.1,amplitude:.9,frequency:.75}),At(1.6,-1.2,.76,"constant",-.85)],bars:[ht(0,-3.8,4.2,0)]}),Ln([-3.2,5.4],3.15,-4.8,{obstacles:[At(-1.7,1.3,.76,"variable",0,{baseSpeed:-.1,amplitude:1,frequency:1.1}),Qt(1.3,-1.5,.67)],bars:[ht(.1,3.2,4.3,0)]}),Bi(-3.2,-5.45,{obstacles:[At(0,.5,.8,"constant",.95),Qt(2,-2.6,.62)],bars:[ht(-1,-2,3.6,.18)]}),fi([3.2,5.4],[[1.3,1.7],[-1.6,-1],[-3.2,-4.9]],{obstacles:[At(-1.6,1.7,.72,"variable",0,{baseSpeed:0,amplitude:1.05,frequency:1.3}),At(1.4,-1.9,.72,"constant",-.95)],bars:[ht(0,3.4,4.2,0)]}),Fe([-3.2,5.3],3.2,-5.4,{obstacles:[At(-1.8,2.2,.72,"variable",0,{baseSpeed:.12,amplitude:1.05,frequency:1}),At(.1,-.1,.82,"constant",-1),At(1.8,-3,.72,"variable",0,{baseSpeed:-.08,amplitude:.95,frequency:1.4})],bars:[ht(-.5,-4.1,3.1,.2)]})],[fi([-3.2,5.4],[[-2,2.1],[.5,-.5],[3.15,-4.7]],{obstacles:[At(-1.4,2.1,.72,"variable",0,{baseSpeed:.1,amplitude:1,frequency:1.1}),At(1.2,-1.2,.78,"constant",-1)],bars:[ht(0,3.5,4.4,0),ht(-.1,-3.1,4.3,.12)]}),Ln([3.2,5.3],-3.15,-4.8,{obstacles:[Qt(-1.4,1,.64),At(.5,-.8,.8,"variable",0,{baseSpeed:0,amplitude:1.2,frequency:1.15}),Qt(1.8,-3,.6)],bars:[ht(.1,2.8,4,-.1)]}),Ss([-3.2,5.35],"right",-5.5,-2.6,{obstacles:[At(-1.7,1.7,.72,"constant",1),Qt(.1,-.2,.68),At(1.6,-2.3,.72,"variable",0,{baseSpeed:0,amplitude:1.1,frequency:1.3})]}),Bi(3.2,-5.4,{obstacles:[At(-1.2,1.4,.76,"variable",0,{baseSpeed:.1,amplitude:1,frequency:.9}),Qt(1,-1.3,.68),At(1.8,-3.1,.72,"constant",-.9)],bars:[ht(0,.3,4.8,.15)]}),na(At(.2,.2,.84,"impact",0,{damping:.55}),.78,{obstacles:[At(-2,2.3,.68,"variable",0,{baseSpeed:0,amplitude:.9,frequency:1.1}),Qt(2.1,-2.4,.62)]}),bs([3.2,5.3],-.7,.7,{obstacles:[At(-1.6,1.8,.72,"variable",0,{baseSpeed:-.1,amplitude:1.1,frequency:1}),At(.4,-.4,.8,"constant",1),Qt(2,-3.1,.62)],bars:[ht(-.2,-4.7,3.2,0)]}),Fe([-3.2,5.4],3.2,-5.4,{obstacles:[At(-1.6,1.8,.72,"constant",-.95),At(.5,0,.78,"impact",0,{damping:.65}),At(1.7,-2.4,.72,"variable",0,{baseSpeed:0,amplitude:1,frequency:1.2})],bars:[ht(-.1,3.5,4.2,0)]}),fi([-3.2,5.3],[[-1.7,2.4],[1.7,0],[3.2,-4.7]],{obstacles:[At(-1.2,1.3,.72,"variable",0,{baseSpeed:.05,amplitude:1,frequency:1.35}),Qt(.6,-1.2,.64),At(1.5,-2.8,.74,"constant",-1.05)],bars:[ht(0,3.7,4.1,0),ht(-.2,-3.5,3.8,.12)]}),Ln([3.2,5.3],-3.2,-4.9,{obstacles:[At(-1.8,2.2,.7,"variable",0,{baseSpeed:0,amplitude:1.1,frequency:1.4}),At(0,0,.84,"constant",.95),At(1.7,-2.6,.72,"variable",0,{baseSpeed:0,amplitude:.95,frequency:.85})],bars:[ht(.2,3.4,4.3,0)]}),Fe([-3.2,5.4],3.2,-5.4,{obstacles:[At(-1.9,2.4,.7,"variable",0,{baseSpeed:0,amplitude:1.1,frequency:1.2}),At(-.1,.3,.82,"constant",-1),Qt(1.8,-2,.63),At(0,-3.5,.7,"impact",0,{damping:.6})],bars:[ht(0,3.8,4.2,0),ht(0,-4.7,3.6,.1)]})]],Sh=[{start:[-3.55,5.45],cupX:3.45,cupY:-5.35,target:[3,-4.15],wall:[-5.3,-2.9],ground:[-2,-.6],checkpoints:[[-2.1,2.5,.52],[.3,-.25,.48]],first:[-1.9,2,.65],second:[1.4,-1.3,.58],bars:[ht(-1.2,3.3,3.3,-.18),ht(1.1,-2.9,2.8,.25)],dynamics:[le(-2.6,4,2.4,-.22,.9),le(.8,1.2,1.8,.15,1.1)],spin:[.2,-.7,.78]},{start:[-3.25,5.25],cupX:3.25,cupY:-4.95,target:[2.75,-3.35],wall:[-4.6,-1.2],ground:[.4,1.8],checkpoints:[[-.8,3,.5],[2,.1,.48]],first:[-.9,1,.72],second:[2,-2.4,.62],bars:[ht(.4,2.7,4.6,0),ht(-1.4,-1,2.7,-.3)],dynamics:[le(-1.9,3.5,3.1,.3,1),le(1.9,.4,1.6,-.22,.8)],spin:[-.8,.6,.82]},{start:[-3.7,5.5],cupX:3,cupY:-5.55,target:[3.35,-2.75],wall:[-5,-3.25],ground:[-1.1,.3],checkpoints:[[-2.7,1.2,.5],[1.2,-1.8,.5]],first:[-2.4,-.1,.6],second:[.2,-2.6,.72],bars:[ht(-2,1.7,2.4,.3),ht(1.3,-3.6,3.6,.1)],dynamics:[le(-2.3,3,2,.1,1.2),le(1.8,-.3,2.4,-.35,1),le(0,-4.2,2.2,.2,.85)],spin:[1.1,1.1,.72]},{start:[-3.15,5.35],cupX:3.55,cupY:-5.1,target:[2.6,-4.7],wall:[-3.8,-.7],ground:[-.4,1],checkpoints:[[-1.8,2.9,.5],[1.6,.2,.5]],first:[-1,2.7,.6],second:[2.3,0,.66],bars:[ht(-.8,3.6,3,-.24),ht(-1.2,-2.2,4,.18),ht(2,-4,1.8,0)],dynamics:[le(-2.2,4.25,2.6,.28,1),le(1,1.4,2.1,-.12,1.2)],spin:[-1,-.1,.86]},{start:[-3.45,5.2],cupX:2.85,cupY:-5.45,target:[3.45,-3.8],wall:[-5.5,-2.4],ground:[-2.5,-1.1],checkpoints:[[-1.2,2.2,.48],[2.3,-2.7,.5]],first:[-2.3,1,.68],second:[1,-1,.7],bars:[ht(-2,2.7,2,0),ht(0,.2,3,-.25),ht(1.8,-3.1,2.2,.35)],dynamics:[le(-2.6,3.7,2.5,-.18,.85),le(.3,1.6,2.8,.2,1.25)],spin:[.6,-1.7,.76]},{start:[-3.3,5.45],cupX:3.4,cupY:-4.8,target:[2.9,-2.9],wall:[-4.7,-1.8],ground:[1,2.4],checkpoints:[[-2.4,3.1,.5],[.5,-.8,.48]],first:[-.6,.5,.72],second:[2,-1.7,.62],bars:[ht(-2.5,3.8,2.5,.18),ht(0,1.4,4,.1),ht(-1,-3.8,2.4,-.15)],dynamics:[le(-1.6,4.4,3,.12,1.15),le(1.9,.7,1.9,-.25,.9),le(-.3,-2.5,2.1,.3,1)],spin:[-1.3,1.3,.8]},{start:[-3.6,5.3],cupX:3.05,cupY:-5.3,target:[3.25,-4.35],wall:[-5.1,-3.6],ground:[-.1,1.3],checkpoints:[[-2.6,1.8,.5],[1.8,-2.1,.52]],first:[-1.6,2.9,.58],second:[1.1,-2.8,.72],bars:[ht(-.5,4,4,0),ht(1.6,.3,2.6,-.3),ht(-1.8,-2.7,2,.28)],dynamics:[le(-2.7,3.1,1.9,-.4,.95),le(.9,2,3,.18,1.25)],spin:[.1,1.7,.74]},{start:[-3.2,5.5],cupX:3.6,cupY:-5,target:[2.7,-3.1],wall:[-4.4,-.8],ground:[-2.7,-1.3],checkpoints:[[-1.7,3.2,.48],[2.2,-.5,.5]],first:[-2.7,1.8,.64],second:[.3,-.6,.64],bars:[ht(-1.8,3.2,2,-.2),ht(.3,1,2.5,.25),ht(1.7,-2.5,3.4,-.12)],dynamics:[le(-2,4,2.7,.22,1.05),le(1.8,.1,2.4,-.3,1),le(-.6,-3.6,2.8,.16,.9)],spin:[1.3,-1,.84]},{start:[-3.5,5.25],cupX:3.3,cupY:-5.55,target:[3.1,-4.65],wall:[-5.4,-2.2],ground:[.8,2.2],checkpoints:[[-2.2,2.7,.5],[1,-1.3,.5]],first:[-.8,1.8,.7],second:[2.4,-.9,.58],bars:[ht(-2.2,2.4,3.2,.2),ht(-.1,-.7,3,-.18),ht(1.9,-3.6,1.8,.3)],dynamics:[le(-2.8,3.55,2.2,-.28,1.2),le(.7,1,3.2,.12,.9)],spin:[-.5,.4,.79]},{start:[-3.35,5.4],cupX:3.5,cupY:-5.2,target:[2.85,-2.4],wall:[-4.9,-1],ground:[-1.8,-.4],checkpoints:[[-2.5,1.4,.5],[1.6,-2.5,.48]],first:[-1.2,.2,.75],second:[1.5,-2.9,.62],bars:[ht(-1.8,3.5,3.2,-.1),ht(.8,.2,4.2,.22),ht(-1.2,-3.4,2.7,0)],dynamics:[le(-2.4,4.1,2.9,.34,1),le(1.4,1.1,2.2,-.2,1.3),le(-.2,-2.2,1.8,.3,.85)],spin:[.8,1,.81]}],$g=[[{x:-2.8,y:2.6,pull:1,strength:6.2},{x:2.7,y:-2.2,pull:-1,strength:5.5}],[{x:-1.6,y:1.2,pull:-1,strength:6},{x:2.4,y:1,pull:1,strength:5.8}],[{x:-2.7,y:-.5,pull:1,strength:5.6},{x:1.9,y:-2.9,pull:-1,strength:6.1}],[{x:-1,y:3,pull:-1,strength:6.4},{x:2.8,y:-.8,pull:1,strength:5.6}],[{x:-2.4,y:1,pull:1,strength:5.8},{x:.9,y:-3.3,pull:1,strength:5.5}],[{x:-.8,y:2.8,pull:-1,strength:6},{x:2.5,y:-1.2,pull:-1,strength:5.8}],[{x:-2.9,y:.4,pull:1,strength:6.4},{x:1.1,y:-2.7,pull:-1,strength:5.9}],[{x:-1.8,y:2.5,pull:-1,strength:5.7},{x:2.7,y:-2.7,pull:1,strength:6.3}],[{x:-2.5,y:-1.4,pull:1,strength:5.5},{x:1.6,y:2,pull:1,strength:6}],[{x:-1,y:1.4,pull:-1,strength:6.1},{x:2.6,y:-3.5,pull:1,strength:5.6}]],Jg=[{x:.2,y:5,pull:1,strength:4.2},{x:.3,y:4.8,pull:-1,strength:4.6},{x:.2,y:4.9,pull:1,strength:4.4},{x:.4,y:4.8,pull:-1,strength:4.3},{x:.3,y:5,pull:1,strength:4.5},{x:-.4,y:5.1,pull:-1,strength:4.7},{x:.3,y:5.1,pull:1,strength:4.2},{x:-.4,y:4.9,pull:-1,strength:4.6}],Kg=(n,t)=>({...n,x:n.x*t,rotation:n.rotation*t}),Qg=(n,t)=>({...n,x:n.x*t,rotation:n.rotation*t}),bh=(n,t)=>({...n,x:n.x*t}),Vt=(...n)=>n.map(([t,e,i,s])=>ht(t,e,i,s)),jg=[[Vt([-1.6,3.35,3.3,-.18],[1.35,.25,3.1,.22],[-.2,-2.65,2.6,-.1]),Vt([-.35,3.5,4.3,.04],[1.55,-1,3.1,-.38]),Vt([-2.2,3,2.3,.25],[0,1.2,2.8,1.42],[2,-1.7,2.2,.32]),Vt([1.2,3.65,3.8,-.07],[-1.75,.7,2.8,.28],[.6,-3.4,4,-.18]),Vt([-.9,2.8,4.5,-.05],[-1.4,-3.1,2.2,-.24]),Vt([2,3.3,2.1,-.28],[-1,1,4,.14],[1.8,-2.3,3,-.3]),Vt([-2.4,2.6,2.4,.16],[.45,.05,2.5,-.28],[2,-3.5,3.8,.12],[-.3,-.7,1.6,1.5]),Vt([-.15,3.8,4.7,0],[-1.8,.3,2.1,-.38],[2.1,.1,3.2,1.45]),Vt([1.85,3.25,3.1,.23],[1.5,-3.2,3.3,-.15]),Vt([-1.25,3.6,3.2,.31],[1.1,.15,4,-.12])],[Vt([-2,3.65,4.2,-.1],[1.3,.7,2.2,1.35],[-.4,-2.8,4.2,-.08]),Vt([.7,3.5,2.6,.32],[-1.4,.9,4.3,-.08],[1.9,-3.15,2.2,.25],[.25,-1.7,2.1,1.5]),Vt([-2.3,3.4,3,-.3],[.8,.5,3.8,.14],[2.1,-3.3,3.4,-.22]),Vt([1.6,3.75,4.4,-.02],[-.7,1,2.2,1.42],[1.3,-2.65,2.6,.28]),Vt([.1,.5,4.4,-.03],[-1.4,-3.6,3.8,.19]),Vt([.2,3.1,4.7,.1],[2.1,.2,2.4,-.33],[-2,-2.8,2.6,.24]),Vt([-2.5,3.75,2,-.15],[-.1,1.25,3.7,.3],[1.7,-2.35,4.2,-.08],[1.55,.7,2.1,1.48]),Vt([1.1,3.35,2.7,-.4],[-1.6,.15,3.1,.15],[.5,-3.3,4.6,.05]),Vt([-.3,3.7,4.1,-.22],[2,.7,2.2,.22]),Vt([-2.15,3.15,3,.27],[.9,.6,4.3,-.14],[1.9,-3.7,2.4,.2])],[Vt([-1.8,3.8,4.5,-.15],[1.6,.7,2.2,.36]),Vt([1.9,3.45,3.3,.1],[-1.1,.9,2.4,-.3],[1.45,-3.5,4.4,.18]),Vt([-2.2,3,2.5,.4],[.6,.65,4.6,-.12],[2,-2.75,2.5,-.3],[-1.6,-1.4,2,1.35]),Vt([.5,3.85,4.2,0],[-1.8,.8,2.4,.22],[1.3,-3.2,3.8,-.24]),Vt([-1,3.2,4.6,-.25],[1.9,0,3,.18],[-1.2,-3.7,2.5,.38],[.05,-1.9,1.7,0]),Vt([1.8,3.6,2.4,-.35],[-.25,.6,4.1,1.43],[1.75,-2.8,3.1,.23]),Vt([-2.4,3.55,2.8,.2],[1,.4,2.8,-.22]),Vt([0,3.45,3.4,.27],[-2,.25,2.6,-.18],[1.8,-3.65,3,.3]),Vt([-1.65,3.9,4,-.1],[1.7,.4,2.7,.4],[-2,-3,2.8,-.25],[.1,-1.8,2.3,1.48]),Vt([2.2,3.25,3.6,-.24],[-.6,.9,4,.06],[1,-3.2,2.6,-.42])],[Vt([-1.4,3.6,4.3,-.18],[1.9,.8,2.7,.3],[-.8,-2.7,3.9,-.1],[.2,-.9,1.6,0]),Vt([.8,3.25,2.4,.4],[-1.9,.9,4.1,-.18],[1.7,-3.4,3.6,.1],[1.1,-1.6,2.4,1.4]),Vt([-2.1,3.8,3.2,-.08],[.55,.25,2.9,1.48],[1.7,-3.6,4,-.26]),Vt([1.6,3.5,4.5,.08],[-.9,.55,2.6,-.45],[-1.6,-3.2,3.1,.2]),Vt([-.5,3.7,3.1,-.3],[2.1,.6,3.4,.16],[-1.9,-3.55,4.4,-.08]),Vt([2.1,3.85,2.3,.22],[-.4,.35,4.7,-.1]),Vt([-1.9,3.4,4.2,.12],[.9,.15,2.3,-.36],[2,-3.6,3.5,.25],[-.8,1.9,2.1,1.5]),Vt([.4,3.75,4.4,-.04],[-2.3,.7,2.5,.28],[1.8,-3.25,3,-.34],[-2,-1.2,1.8,0])]],jo=(n,t)=>{let e=(t*3+(n-5)*2)%Sh.length,i=Sh[e],s=t%2===0?1:-1,r=[i.start[0]*s,i.start[1]+(n-5)*.035],o=i.cupX*s,a=s*((i.ground[0]+i.ground[1])/2),c=n===5?"fixed":n===6?"constant":n===7?"variable":"impact",l=i.first,h=i.second,u=c==="fixed"?Qt(l[0]*s,l[1],l[2]):At(l[0]*s,l[1],l[2],c,c==="constant"?.82*s:0,{baseSpeed:.08*s,amplitude:1.05,frequency:.82+t*.045,damping:.62+t%3*.08}),d=n>=6?At(h[0]*s,h[1],h[2],n===8?"impact":"variable",0,{baseSpeed:-.1*s,amplitude:.95,frequency:.9+t%4*.1,damping:.68}):Qt(h[0]*s,h[1],h[2]),p=jg[n-5][t].map(U=>Kg(U,s)),g=[u,d],x=i.dynamics.map(U=>Qg(U,s));n>=7&&x.push(le(.25*s,-1.05+t%2*.55,2+t%3*.2,(t%2?-.2:.24)*s,1.1));let m=n>=6?$g[e].map((U,S)=>bh({...U,pull:n===7&&S===1?-U.pull:U.pull,strength:U.strength+(n===8?1.2:0)},s)):[];n===8&&m.push(bh(Jg[t],s));let f=n<6?"":n===6?"\u85CD\u8272\u78C1\u9435\u6703\u5438\u5F15\u3001\u7D05\u8272\u78C1\u9435\u6703\u6392\u65A5\uFF1B\u5148\u8B93\u7403\u9760\u8FD1\u6B63\u78BA\u7684\u78C1\u5834\u3002":n===7?"\u78C1\u5834\u6703\u6539\u8B8A\u901F\u5EA6\uFF0C\u5148\u89C0\u5BDF\u5438\u5F15\u8207\u6392\u65A5\u518D\u756B\u652F\u6490\u3002":"\u78C1\u5834\u3001\u91CD\u5FC3\u8207\u8F49\u8F2A\u6703\u540C\u6642\u904B\u4F5C\uFF0C\u5148\u5B89\u6392\u7403\u7684\u4E0B\u4E00\u6B21\u78B0\u649E\u3002",T={bars:p,obstacles:g,dynamics:x,magnets:m,magnetHint:f},E=["ballBox","target","wall","strokeBox","ground","checkpoints","spinGear"][(n*2+t)%7],M=[i.target[0]*s,i.target[1]+(n-5)*.08],R=i.wall,A=[i.ground[0]*s,i.ground[1]*s].sort((U,S)=>U-S),I=i.checkpoints.map(([U,S,v])=>[U*s,S+(n-5)*.06,v]);return E==="ballBox"?Fe(r,o,i.cupY,T):E==="target"?Ln(r,M[0],M[1],T):E==="wall"?Ss(r,s>0?"right":"left",R[0],R[1],T):E==="strokeBox"?Bi(o,i.cupY,{...T,noDraw:[{x:.4*s,y:-3,w:1.4+t%3*.3,h:2}]}):E==="ground"?bs(r,A[0],A[1],T):E==="checkpoints"?fi(r,[...I,[o,-4.75]],T):na(At(i.spin[0]*s,i.spin[1],i.spin[2],"impact",0,{damping:.55+t%3*.08}),.66+n*.025,T)},t0=[Array.from({length:10},(n,t)=>jo(5,t)),Array.from({length:10},(n,t)=>jo(6,t)),Array.from({length:10},(n,t)=>jo(7,t)),Array.from({length:8},(n,t)=>jo(8,t))];zh.push(...t0);function e0(){let n={ballBox:["\u5148\u642D\u4E00\u6BB5\u8DEF","\u63A5\u4F4F\u4E0B\u843D\u7684\u7403\uFF0C\u518D\u628A\u659C\u9762\u671D\u676F\u53E3\u50BE\u659C\uFF1B\u77ED\u7269\u4EF6\u4E5F\u80FD\u6539\u8B8A\u7403\u7684\u65B9\u5411\u3002","\u628A\u7403\u9001\u9032\u6A59\u8272\u76D2\u5B50"],target:["\u5148\u770B\u9776\u5FC3\u9AD8\u5EA6","\u76F4\u63A5\u843D\u4E0B\u4E0D\u4E00\u5B9A\u6703\u547D\u4E2D\uFF0C\u5229\u7528\u7246\u9762\u6216\u5C0E\u8ECC\u6539\u8B8A\u7403\u7684\u6C34\u5E73\u901F\u5EA6\u3002","\u8B93\u7403\u78B0\u5230\u6A59\u8272\u9776\u5FC3"],wall:["\u7246\u4E5F\u662F\u7D42\u9EDE","\u6A59\u8272\u6A19\u8A18\u53EA\u6DB5\u84CB\u7246\u9762\u7684\u4E00\u6BB5\uFF0C\u5148\u628A\u7403\u9001\u5230\u6B63\u78BA\u9AD8\u5EA6\u518D\u649E\u7246\u3002","\u8B93\u7403\u78B0\u5230\u6A59\u8272\u7246\u9762"],strokeBox:["\u7269\u4EF6\u4E5F\u6709\u91CD\u5FC3","\u7D05\u8272\u5340\u4E0D\u80FD\u4E0B\u7B46\u3002\u756B\u4E00\u500B\u6709\u9577\u77ED\u5DEE\u7684\u5F62\u72C0\uFF0C\u8B93\u5B83\u7FFB\u8F49\u5F8C\u843D\u5165\u676F\u4E2D\u3002","\u628A\u624B\u7E6A\u7269\u4EF6\u9001\u9032\u6A59\u8272\u676F\u5B50"],spinGear:["\u649E\u5916\u7DE3\u624D\u6703\u8F49","\u843D\u4E0B\u7684\u7269\u4EF6\u9700\u8981\u5728\u9F52\u8F2A\u4E2D\u5FC3\u4E4B\u5916\u63A5\u89F8\uFF0C\u624D\u80FD\u7522\u751F\u65CB\u8F49\u529B\u77E9\u3002","\u8B93\u767D\u8272\u8F49\u8F2A\u8F49\u8D77\u4F86"],ground:["\u7784\u6E96\u5730\u677F\u6A19\u8A18","\u5229\u7528\u4E00\u6B21\u78B0\u649E\u8ABF\u6574\u843D\u9EDE\uFF1B\u7403\u78B0\u5230\u6A59\u8272\u5730\u9762\u5340\u57DF\u5C31\u7B97\u5B8C\u6210\u3002","\u8B93\u7403\u843D\u5728\u6A59\u8272\u5730\u9762\u6A19\u8A18"],checkpoints:["\u6309\u9806\u5E8F\u4E32\u8D77\u8DEF\u7DDA","\u7403\u8981\u4F9D\u5E8F\u78B0\u904E\u6BCF\u500B\u6A59\u8272\u7BC0\u9EDE\u3002\u5148\u89C0\u5BDF\u7BC0\u9EDE\u9AD8\u5EA6\uFF0C\u518D\u6C7A\u5B9A\u8981\u501F\u54EA\u4E00\u9053\u7246\u3002","\u4F9D\u5E8F\u78B0\u904E\u6240\u6709\u6A59\u8272\u7BC0\u9EDE"]};return Zg.flatMap((t,e)=>zh[e].map((i,s)=>{let r=i.goal.type,[o,a,c]=n[r],l=i.magnetHint?`${a} ${i.magnetHint}`:a,h=e<2?2:e<4?3:4;return{chapter:t.title,name:t.names[s],difficulty:Math.min(4,1+e+Math.floor(s/5)),strokes:h,mission:c,hintTitle:o,hint:l,parTime:14+e*4+s,parStrokes:Math.max(1,h-1),obstacles:[],...i}}))}var xe=[{name:"\u7B2C\u4E00\u7B46",difficulty:1,strokes:1,mission:"\u756B\u51FA\u4EFB\u610F\u7269\u4EF6",hintTitle:"\u756B\u4EC0\u9EBC\u90FD\u53EF\u4EE5",hint:"\u5728\u6DF1\u8272\u5340\u57DF\u62D6\u52D5\u624B\u6307\uFF0C\u653E\u958B\u5F8C\u7269\u4EF6\u6703\u53D7\u5230\u91CD\u529B\u3002",ball:null,goal:{type:"draw"},parTime:6,parStrokes:1,obstacles:[]},{name:"\u63A8\u5411\u5DE6\u7246",difficulty:1,strokes:1,mission:"\u8B93\u7403\u78B0\u5230\u6A59\u8272\u7246\u9762",hintTitle:"\u7528\u91CD\u91CF\u63A8\u7403",hint:"\u5728\u7403\u7684\u53F3\u4E0A\u65B9\u756B\u4E00\u500B\u6709\u91CD\u91CF\u7684\u659C\u7269\u4EF6\u3002",ball:[1.8,3.8],goal:{type:"wall",side:"left",minY:-4.8,maxY:1.2},parTime:10,parStrokes:1,bars:[{x:-1.3,y:.8,length:4.6,thickness:.16,rotation:-.18}],obstacles:[]},{name:"\u7269\u4EF6\u5165\u676F",difficulty:1,strokes:1,mission:"\u628A\u624B\u7E6A\u7269\u4EF6\u653E\u9032\u6A59\u8272\u676F\u5B50",hintTitle:"\u7D05\u8272\u5340\u4E0D\u80FD\u756B",hint:"\u5728\u676F\u53E3\u4E0A\u65B9\u756B\u4E00\u500B\u5C0F\u7269\u4EF6\uFF0C\u5229\u7528\u91CD\u529B\u8B93\u5B83\u843D\u5165\u676F\u4E2D\u3002",ball:null,basket:[-.8,.8,-5.8,-4.2],goal:{type:"strokeBox"},noDraw:[{x:0,y:-5.1,w:2.3,h:2.7}],parTime:8,parStrokes:1,obstacles:[]},{name:"\u7B2C\u4E00\u9053\u659C\u5761",difficulty:1,strokes:1,mission:"\u628A\u7403\u9001\u9032\u53F3\u4E0B\u65B9\u76D2\u5B50",hintTitle:"\u4E00\u689D\u659C\u7DDA\u5C31\u5920",hint:"\u8B93\u7DDA\u689D\u843D\u4E0B\u5F8C\u5F62\u6210\u5F80\u53F3\u7684\u659C\u5761\u3002",ball:[-3.2,4.9],basket:[2.7,4.05,-6.2,-5],goal:{type:"ballBox"},parTime:12,parStrokes:1,obstacles:[]},{name:"\u8D8A\u904E\u9AD8\u7246",difficulty:2,strokes:2,mission:"\u8B93\u7403\u8D8A\u904E\u4E2D\u592E\u7246\u9032\u76D2\u5B50",hintTitle:"\u5148\u63A5\uFF0C\u518D\u5C0E\u5411",hint:"\u4E0D\u8981\u53EA\u756B\u4E00\u689D\u9577\u659C\u7DDA\uFF1B\u60F3\u60F3\u5982\u4F55\u8B93\u7269\u4EF6\u7684\u91CD\u5FC3\u66FF\u4F60\u6539\u8B8A\u89D2\u5EA6\u3002",ball:[-3.1,5.1],basket:[2.75,4.05,-6.2,-5],goal:{type:"ballBox"},parTime:15,parStrokes:2,bars:[{x:.3,y:-2.9,length:5.1,thickness:.18,rotation:Math.PI/2}],obstacles:[]},{name:"\u7A7F\u904E\u7A84\u9580",difficulty:2,strokes:2,mission:"\u8B93\u7403\u7A7F\u904E\u7F3A\u53E3\u78B0\u5230\u76EE\u6A19",hintTitle:"\u63A7\u5236\u843D\u4E0B\u7684\u65B9\u5411",hint:"\u4E0A\u4E0B\u5169\u9053\u7246\u4E4B\u9593\u53EA\u6709\u4E00\u500B\u5165\u53E3\uFF0C\u77ED\u800C\u91CD\u7684\u5F62\u72C0\u6BD4\u9577\u7DDA\u66F4\u597D\u63A7\u5236\u3002",ball:[-3.2,4.9],goal:{type:"target",x:3.4,y:-4.7,r:.58},parTime:16,parStrokes:2,bars:[{x:.5,y:2.8,length:5.2,thickness:.16,rotation:0},{x:-1.2,y:-1.3,length:5.4,thickness:.16,rotation:0}],obstacles:[{style:"cross",x:1.5,y:.5,r:.62,mode:"fixed"}]},{name:"\u559A\u9192\u8F49\u76E4",difficulty:2,strokes:1,mission:"\u8B93\u767D\u8272\u8F49\u76E4\u8F49\u8D77\u4F86",hintTitle:"\u649E\u504F\u4E00\u9EDE",hint:"\u649E\u4E2D\u5FC3\u53EA\u6703\u63A8\uFF0C\u4E0D\u6703\u8F49\uFF1B\u8B93\u91CD\u7269\u6253\u5728\u8F49\u76E4\u5916\u5074\u3002",ball:null,goal:{type:"spinGear",speed:.5},parTime:10,parStrokes:1,obstacles:[{style:"cross",x:0,y:-1.4,r:.9,mode:"impact",damping:.55}]},{name:"\u501F\u8F2A\u8F49\u5411",difficulty:3,strokes:2,mission:"\u649E\u52D5\u8F49\u76E4\uFF0C\u518D\u628A\u7403\u9001\u9032\u5DE6\u676F",hintTitle:"\u5148\u555F\u52D5\u6A5F\u95DC",hint:"\u5148\u8B93\u78B0\u649E\u5F0F\u8F49\u76E4\u9054\u5230\u555F\u52D5\u901F\u5EA6\uFF0C\u518D\u8B93\u7403\u9032\u5DE6\u5074\u6A59\u676F\uFF1B\u7403\u5FC5\u9808\u5728\u8F49\u76E4\u555F\u52D5\u5F8C\u9032\u676F\uFF0C\u55AE\u7368\u5165\u676F\u4E0D\u7B97\u3002",ball:[3,5.2],basket:[-4,-2.65,-6.2,-5],goal:{type:"ballBox",requiresGearSpin:.5},parTime:20,parStrokes:2,obstacles:[{style:"wheel",x:.8,y:.8,r:.88,mode:"impact",damping:.5},{style:"cross",x:-1.7,y:-2.5,r:.6,mode:"fixed"}]},{name:"\u9006\u5411\u8F38\u9001",difficulty:3,strokes:2,mission:"\u5229\u7528\u6046\u901F\u9F52\u8F2A\u628A\u7403\u9001\u5F80\u53F3\u5074",hintTitle:"\u78B0\u54EA\u4E00\u5074\u5F88\u91CD\u8981",hint:"\u9F52\u8F2A\u4E0A\u4E0B\u5169\u5074\u7684\u63A8\u52D5\u65B9\u5411\u76F8\u53CD\uFF0C\u5148\u89C0\u5BDF\u518D\u756B\u5C0E\u8ECC\u3002",ball:[-3.25,5.25],basket:[2.75,4.05,-6.2,-5],goal:{type:"ballBox"},parTime:18,parStrokes:2,obstacles:[{style:"wheel",x:-.8,y:.8,r:.9,mode:"constant",speed:-1.05},{style:"cross",x:1.8,y:-2.3,r:.62,mode:"fixed"}]},{name:"\u5F9E\u7981\u5340\u5916\u6295\u653E",difficulty:3,strokes:2,mission:"\u8B93\u624B\u7E6A\u7269\u7A7F\u904E\u969C\u7919\u843D\u5165\u676F\u4E2D",hintTitle:"\u756B\u4E00\u500B\u6703\u7FFB\u8EAB\u7684\u5F62\u72C0",hint:"\u7981\u756B\u5340\u5C01\u4F4F\u76F4\u7DDA\u8DEF\u5F91\uFF0C\u5229\u7528\u504F\u5FC3\u7269\u4EF6\u843D\u5730\u5F8C\u7684\u7FFB\u8F49\u3002",ball:null,basket:[2.7,4,-6.2,-5],goal:{type:"strokeBox"},noDraw:[{x:3.35,y:-4.8,w:2.1,h:3.2}],parTime:18,parStrokes:2,bars:[{x:1.1,y:-2.2,length:4.5,thickness:.16,rotation:-.25}],obstacles:[{style:"cross",x:-1.2,y:.4,r:.7,mode:"fixed"}]},{name:"\u6293\u6E96\u7BC0\u594F",difficulty:4,strokes:3,mission:"\u7A7F\u904E\u5FFD\u5FEB\u5FFD\u6162\u7684\u96D9\u8F2A",hintTitle:"\u7B49\u5F85\u4E5F\u662F\u89E3\u6CD5",hint:"\u8B8A\u901F\u9F52\u8F2A\u6703\u52A0\u901F\u3001\u6E1B\u901F\u751A\u81F3\u53CD\u8F49\uFF1B\u4E0B\u7B46\u7684\u6642\u6A5F\u4E5F\u662F\u89E3\u6CD5\u4E4B\u4E00\u3002",ball:[0,5.45],basket:[-.68,.68,-6.2,-5],goal:{type:"ballBox"},parTime:24,parStrokes:3,obstacles:[{style:"wheel",x:-1.8,y:1.3,r:.85,mode:"variable",baseSpeed:-.45,amplitude:1.1,frequency:1.25},{style:"wheel",x:1.8,y:-1.4,r:.85,mode:"variable",baseSpeed:.4,amplitude:1,frequency:.9}]},{name:"\u9F52\u8F2A\u5DE5\u623F",difficulty:4,strokes:3,mission:"\u7A7F\u8D8A\u56DB\u7A2E\u6A5F\u95DC\u628A\u7403\u9001\u9032\u76D2\u5B50",hintTitle:"\u9010\u6BB5\u89E3\u958B",hint:"\u56FA\u5B9A\u3001\u78B0\u649E\u9A45\u52D5\u3001\u6046\u901F\u8207\u8B8A\u901F\u9F52\u8F2A\u898F\u5247\u90FD\u4E0D\u540C\uFF1B\u5148\u66FF\u7403\u898F\u5283\u4E09\u6BB5\u8DEF\u3002",ball:[-3.2,5.5],basket:[2.75,4.05,-6.25,-5.08],goal:{type:"ballBox"},parTime:30,parStrokes:3,bars:[{x:.2,y:-4,length:3,thickness:.15,rotation:.12}],obstacles:[{style:"wheel",x:-2.2,y:3,r:.75,mode:"variable",baseSpeed:-.5,amplitude:.9,frequency:1.1},{style:"cross",x:1.5,y:3,r:.62,mode:"impact",damping:1.1},{style:"cross",x:-.7,y:.2,r:.6,mode:"fixed"},{style:"wheel",x:2,y:-1.1,r:.8,mode:"constant",speed:.85},{style:"cross",x:-1.3,y:-2.7,r:.58,mode:"impact",damping:.8}]},...e0()];function kh(){try{let n=Math.min(xe.length,Math.max(1,Number(localStorage.getItem("brain-physics-unlocked"))||1)),t=JSON.parse(localStorage.getItem("brain-physics-stars")||"{}");return n===12&&xe.length>12&&Number(t[11])>0&&(n=13,localStorage.setItem("brain-physics-unlocked","13")),n}catch{return 1}}function n0(n){try{localStorage.setItem("brain-physics-unlocked",String(n))}catch{}}function Vh(){try{return JSON.parse(localStorage.getItem("brain-physics-stars")||"{}")}catch{return{}}}function i0(n,t){try{let e=Vh();e[n]=Math.max(Number(e[n])||0,t),localStorage.setItem("brain-physics-stars",JSON.stringify(e))}catch{}}function ta(n,t,e,i=Mn,s=0){let r=new ne(new wi(e,48),i);return r.position.set(n,t,s),vn.add(r),r}function Eh(n,t,e,i,s=Mn){let r=new ne(new ai(i,e,48),s);return r.position.set(n,t,0),vn.add(r),r}function Ms(n,t,e,i,s=0,r=Mn,o=!1){let a=new ne(new Ke(e,i,.04),r);if(a.position.set(n,t,0),a.rotation.z=s,vn.add(a),o){let c=Math.cos(s)*e/2,l=Math.sin(s)*e/2;As.push({a:new et(n-c,t-l),b:new et(n+c,t+l),radius:i/2})}return a}function Hh(n,t,e,i,s,r){let o={x:n,y:t,r:e,group:i,localSegments:s,mode:r.mode,angularVelocity:r.speed??0,baseSpeed:r.baseSpeed??0,amplitude:r.amplitude??0,frequency:r.frequency??1,damping:r.damping??1.1,inertia:Math.max(.5,e*e*2.5)};return yn.push(o),o}function s0(n,t,e,i){let s=new Ge;s.position.set(n,t,0),vn.add(s),s.add(new ne(new wi(e,48),Mn)),ws.push({x:n,y:t,r:e});let r=[];for(let o=0;o<10;o++){let a=o/10*Math.PI*2,c=new et(Math.cos(a)*(e+.23),Math.sin(a)*(e+.23)),l=new et(Math.cos(a)*.24,Math.sin(a)*.24),h=new ne(new Ke(.48,.11,.04),Mn);h.position.set(c.x,c.y,0),h.rotation.z=a,s.add(h),r.push({a:c.clone().sub(l),b:c.clone().add(l),radius:.055})}Hh(n,t,e,s,r,i)}function r0(n,t,e,i){let s=new Ge;s.position.set(n,t,0),vn.add(s),s.add(new ne(new ai(e*.55,e,48),Mn));let r=[],o=40;for(let a=0;a<o;a++){let c=a/o*Math.PI*2,l=(a+1)/o*Math.PI*2;r.push({a:new et(Math.cos(c)*e,Math.sin(c)*e),b:new et(Math.cos(l)*e,Math.sin(l)*e),radius:.045})}for(let a of[0,Math.PI/2]){let c=e*2.7,l=new ne(new Ke(c,.09,.04),Mn);l.rotation.z=a,s.add(l);let h=new et(Math.cos(a)*c/2,Math.sin(a)*c/2);r.push({a:h.clone().multiplyScalar(-1),b:h,radius:.045})}Hh(n,t,e,s,r,i)}function o0(){vn.traverse(n=>{n.geometry&&n.geometry.dispose()}),vn.clear(),ws.length=0,As.length=0,yn.length=0,Gi.length=0,Rs.length=0,Cs=[],sa=[],ar=new Map,Zn.length=0,lr.clear(),oa=[]}function a0(n){if(_t=null,kt=n.basket?{left:n.basket[0],right:n.basket[1],bottom:n.basket[2],top:n.basket[3]}:null,qn=n.goal?.type==="target"?n.goal:null,n.ball&&(xn=new et(n.ball[0],n.ball[1])),(n.obstacles??[]).forEach(t=>{let e={mode:t.mode,speed:t.speed,baseSpeed:t.baseSpeed,amplitude:t.amplitude,frequency:t.frequency,damping:t.damping};t.style==="wheel"?s0(t.x,t.y,t.r,e):r0(t.x,t.y,t.r,e)}),(n.magnets??[]).forEach(d0),(n.bars??[]).forEach(t=>Ms(t.x,t.y,t.length,t.thickness,t.rotation??0,Mn,!0)),(n.dynamics??[]).forEach(u0),(n.noDraw??[]).forEach(t=>{let e=new ne(new Ai(t.w,t.h),Xg);e.position.set(t.x,t.y,-.15),vn.add(e)}),kt&&(Ms(kt.left,(kt.bottom+kt.top)/2,kt.top-kt.bottom,.12,Math.PI/2,ln,!0),Ms(kt.right,(kt.bottom+kt.top)/2,kt.top-kt.bottom,.12,Math.PI/2,ln,!0),Ms((kt.left+kt.right)/2,kt.bottom,kt.right-kt.left,.12,0,ln,!0)),qn&&(Eh(qn.x,qn.y,qn.r+.12,qn.r,ln),ta(qn.x,qn.y,qn.r*.32,ln,-.02)),n.goal?.type==="checkpoints"&&n.goal.targets.forEach((t,e)=>{oa.push({index:e,ring:Eh(t.x,t.y,t.r+.12,t.r,ln),dot:ta(t.x,t.y,t.r*.3,ln,-.02)})}),n.goal?.type==="ground"&&Ms((n.goal.minX+n.goal.maxX)/2,ce.bottom+.1,n.goal.maxX-n.goal.minX,.14,0,ln,!1),n.goal?.type==="wall"){let t=n.goal.side==="left"?ce.left+.08:ce.right-.08;Ms(t,(n.goal.minY+n.goal.maxY)/2,n.goal.maxY-n.goal.minY,.16,Math.PI/2,ln,!0)}if(n.ball){ta(xn.x,xn.y,Me+.09,Fh,-.02),_t=ta(xn.x,xn.y,Me,ln,.2);let t=new ne(new ai(.46,.5,40),Wg);t.position.set(xn.x,xn.y,0),vn.add(t)}}function wl(){return{left:ve.left,right:ve.right,bottom:ve.bottom,top:ve.top}}function Gh(n){let t=je.domElement.getBoundingClientRect();return new et(ve.left+(n.clientX-t.left)/t.width*(ve.right-ve.left),ve.top-(n.clientY-t.top)/t.height*(ve.top-ve.bottom))}function Wh(n){let t=wl();return n.x>t.left+.18&&n.x<t.right-.18&&n.y>t.bottom+.18&&n.y<t.top-.18}function Th(n,t,e=0,i=0){let s=Math.cos(t),r=Math.sin(t);return new et(e+n.x*s-n.y*r,i+n.x*r+n.y*s)}function Xh(n){return n.localSegments.map(t=>({a:Th(t.a,n.group.rotation.z,n.x,n.y),b:Th(t.b,n.group.rotation.z,n.x,n.y),radius:t.radius,gear:n}))}function vl(n,t,e){return n.distanceTo(ki(n,t,e))}function qh(n){if(!Wh(n)||_t&&n.distanceTo(new et(_t.position.x,_t.position.y))<Me+Gt+.045)return!1;for(let e of xe[Ce].noDraw??[])if(Math.abs(n.x-e.x)<e.w/2+Gt&&Math.abs(n.y-e.y)<e.h/2+Gt)return!1;for(let e of ws)if(n.distanceTo(new et(e.x,e.y))<e.r+Gt+.045)return!1;for(let e of As)if(vl(n,e.a,e.b)<e.radius+Gt+.045)return!1;for(let e of Cs)if(vl(n,e.a,e.b)<e.radius+Gt+.045)return!1;for(let e of ie.concat(Gi)){let i=Hi(e);for(let s=1;s<i.length;s++)if(vl(n,i[s-1],i[s])<Gt*2+.045)return!1}return!0}function l0(n,t){let e=n.distanceTo(t),i=Math.max(1,Math.ceil(e/.055));for(let s=1;s<=i;s++)if(!qh(n.clone().lerp(t,s/i)))return!1;return!0}function Yh(n,t){let e=t.clone().sub(n),i=e.length();if(i<.01)return null;let s=new ne(new Ke(i,Gt*2,.08),Mn);return s.position.set((n.x+t.x)/2,(n.y+t.y)/2,.12),s.rotation.z=Math.atan2(e.y,e.x),Jn.add(s),s}function c0(n){if(Ie||ie.length>=hr||Vi!==null)return;n.preventDefault(),Vi=n.pointerId;try{je.domElement.setPointerCapture(n.pointerId)}catch{}let t=Gh(n);if(!qh(t)){Vi=null,$n.textContent="\u4E0D\u80FD\u5F9E\u7403\u3001\u9F52\u8F2A\u6216\u65E2\u6709\u7DDA\u689D\u4E0A\u958B\u59CB\u7E6A\u88FD";return}we={points:[t],meshes:[]},$n.textContent="\u7E7C\u7E8C\u62D6\u52D5\uFF0C\u653E\u958B\u5F8C\u7DDA\u689D\u6703\u958B\u59CB\u6389\u843D"}function h0(n){if(n.pointerId!==Vi||!we)return;if(n.preventDefault(),we.points.length>=ia){$n.textContent="\u5DF2\u9054\u55AE\u7B46\u7DDA\u689D\u4E0A\u9650\uFF0C\u653E\u958B\u5373\u53EF\u958B\u59CB\u6A21\u64EC";return}let t=Gh(n);if(!Wh(t))return;let e=we.points[we.points.length-1];if(t.distanceTo(e)<.11)return;if(!l0(e,t)){$n.textContent="\u7DDA\u689D\u4E0D\u80FD\u7A7F\u904E\u65E2\u6709\u7269\u4EF6";return}let i=Yh(e,t);i&&we.meshes.push(i),we.points.push(t),we.points.length>=ia&&($n.textContent="\u5DF2\u9054\u55AE\u7B46\u7DDA\u689D\u4E0A\u9650\uFF0C\u653E\u958B\u5373\u53EF\u958B\u59CB\u6A21\u64EC")}function Al(n){let t=0,e=new et,i=[];for(let h=1;h<n.points.length;h++){let u=n.points[h-1],d=n.points[h],p=u.distanceTo(d);if(p<1e-4)continue;let g=u.clone().add(d).multiplyScalar(.5);i.push({length:p,midpoint:g}),e.addScaledVector(g,p),t+=p}let s=t>0?e.multiplyScalar(1/t):n.points[0].clone(),r=Math.max(.001,t*Mh),o=Math.max(.35,r),a=o/r,c=0;for(let h of i){let u=h.length*Mh*a,d=h.midpoint.distanceToSquared(s);c+=u*(d+h.length*h.length/12+Gt*Gt/2)}let l=new Ge;return l.position.set(s.x,s.y,0),Jn.add(l),n.meshes.forEach(h=>l.attach(h)),{group:l,meshes:n.meshes,localPoints:n.points.map(h=>h.clone().sub(s)),velocity:new et,angularVelocity:0,mass:o,inertia:Math.max(.02,c)}}function u0(n){let t=n.rotation??0,e=new et(Math.cos(t)*n.length/2,Math.sin(t)*n.length/2),i=new et(n.x,n.y).sub(e),s=new et(n.x,n.y).add(e),r=new ne(new Ke(n.length,n.thickness??Gt*2,.08),Mn);r.position.set(n.x,n.y,.12),r.rotation.z=t,Jn.add(r);let o=Al({points:[i,s],meshes:[r]});return o.mass*=Math.max(.35,n.mass??1),o.inertia*=Math.max(.35,n.mass??1),o.initialPosition=o.group.position.clone(),o.initialRotation=o.group.rotation.z,o.initialVelocity=new et,o.initialAngularVelocity=0,Gi.push(o),o}function d0(n){let t=n.r??.42,e=n.pull>=0?qg:Yg,i=new Ge;i.position.set(n.x,n.y,.08),vn.add(i),i.add(new ne(new wi(t,32),e)),i.add(new ne(new ai(t+.08,t+.14,32),e));let s=new ne(new Ke(t*1.55,.08,.04),Mn);i.add(s),Rs.push({x:n.x,y:n.y,r:t,pull:n.pull>=0?1:-1,strength:n.strength??6,range:n.range??4.5,group:i}),ws.push({x:n.x,y:n.y,r:t*.72,magnet:!0})}function Zh(n){n.pointerId===Vi&&(n.preventDefault(),we&&we.points.length>1?(ie.push(Al(we)),tn||p0(),pi()):we?.meshes.forEach(t=>Jn.remove(t)),we=null,Vi=null,Is(),Ie||($n.textContent=ie.length<hr?`\u7269\u4EF6\u6B63\u5728\u904B\u52D5\uFF0C\u9084\u53EF\u4EE5\u756B ${hr-ie.length} \u7B46`:"\u7B46\u6578\u7528\u5B8C\u4E86\uFF0C\u89C0\u5BDF\u7269\u7406\u7D50\u679C"))}je.domElement.addEventListener("pointerdown",c0,{passive:!1});je.domElement.addEventListener("pointermove",h0,{passive:!1});je.domElement.addEventListener("pointerup",Zh,{passive:!1});je.domElement.addEventListener("pointercancel",Zh,{passive:!1});je.domElement.addEventListener("contextmenu",n=>n.preventDefault());function Is(){Og.textContent=`${ie.length} / ${hr}`,Ih.disabled=tn||ie.length===0,Bg.disabled=!0}function Rl(n){Jn.remove(n.group),n.meshes.forEach(t=>t.geometry.dispose())}function f0(){tn||!ie.length||(Rl(ie.pop()),Is())}function Cl(){tn=!1,Ie=!1,zi=!1,Es=!1,Ts=0,Oi=0,Vi=null,we&&we.meshes.forEach(n=>Jn.remove(n)),we=null,_t&&_t.position.set(xn.x,xn.y,.2),fe.set(0,0),El=0,lr.clear(),oa.forEach(n=>{n.ring.material=ln,n.dot.material=ln}),yn.forEach(n=>{n.group.rotation.z=0,n.angularVelocity=n.mode==="constant"?n.angularVelocity:0}),Cs=yn.flatMap(Xh),jh(),Gi.forEach(n=>{n.group.position.copy(n.initialPosition),n.group.rotation.z=n.initialRotation,n.velocity.copy(n.initialVelocity),n.angularVelocity=n.initialAngularVelocity}),ie.forEach(Rl),ie=[],Ch.textContent="0.0",cr.className="result-banner",cr.textContent="",$n.textContent="\u756B\u7B2C\u4E00\u7B46\uFF0C\u653E\u958B\u5F8C\u7269\u7406\u7ACB\u5373\u958B\u59CB",Is()}function p0(){tn||Ie||(tn=!0,Oh=performance.now()-Ts*1e3,fe.set(.08,0),Is())}function ki(n,t,e){let i=e.clone().sub(t),s=i.lengthSq();if(!s)return t.clone();let r=di.clamp(n.clone().sub(t).dot(i)/s,0,1);return t.clone().addScaledVector(i,r)}function Hi(n){let t=n.group.rotation.z,e=Math.cos(t),i=Math.sin(t);return n.localPoints.map(s=>new et(n.group.position.x+s.x*e-s.y*i,n.group.position.y+s.x*i+s.y*e))}function un(n,t){return n.x*t.y-n.y*t.x}function ra(n,t){let e=t.clone().sub(new et(n.group.position.x,n.group.position.y));return n.velocity.clone().add(new et(-n.angularVelocity*e.y,n.angularVelocity*e.x))}function wh(n,t,e,i=new et,s=.16,r=.42){let o=e.clone().sub(new et(n.group.position.x,n.group.position.y)),a=ra(n,e).sub(i),c=a.dot(t);if(c>=0)return 0;let l=un(o,t),h=1/n.mass+l*l/n.inertia,u=-(1+s)*c/h;n.velocity.addScaledVector(t,u/n.mass),n.angularVelocity+=l*u/n.inertia,a=ra(n,e).sub(i);let d=a.clone().addScaledVector(t,-a.dot(t));if(d.lengthSq()>1e-6){d.normalize();let p=un(o,d),g=1/n.mass+p*p/n.inertia,x=-a.dot(d)/g,m=di.clamp(x,-r*u,r*u);n.velocity.addScaledVector(d,m/n.mass),n.angularVelocity+=p*m/n.inertia}return u}function $h(n,t,e,i){let s=t.clone().sub(n),r=i.clone().sub(e),o=e.clone().sub(n),a=un(s,r);if(Math.abs(a)>1e-6){let l=un(o,r)/a,h=un(o,s)/a;if(l>=0&&l<=1&&h>=0&&h<=1){let u=n.clone().addScaledVector(s,l);return{first:u,second:u.clone(),distanceSq:0}}}return[{first:n.clone(),second:ki(n,e,i)},{first:t.clone(),second:ki(t,e,i)},{first:ki(e,n,t),second:e.clone()},{first:ki(i,n,t),second:i.clone()}].reduce((l,h)=>{let u=h.first.distanceToSquared(h.second);return!l||u<l.distanceSq?{...h,distanceSq:u}:l},null)}function m0(n,t,e,i,s,r){let o=1/n.mass,a=1/t.mass,c=o+a,l=Math.max(0,r-.002)*.78/c;n.group.position.x+=s.x*l*o,n.group.position.y+=s.y*l*o,t.group.position.x-=s.x*l*a,t.group.position.y-=s.y*l*a;let h=e.clone().add(i).multiplyScalar(.5),u=h.clone().sub(new et(n.group.position.x,n.group.position.y)),d=h.clone().sub(new et(t.group.position.x,t.group.position.y)),p=ra(n,h).sub(ra(t,h)),g=p.dot(s);if(g>=0)return;let x=un(u,s),m=un(d,s),f=c+x*x/n.inertia+m*m/t.inertia,T=-(1+.18)*g/f;n.velocity.addScaledVector(s,T*o),t.velocity.addScaledVector(s,-T*a),n.angularVelocity+=x*T/n.inertia,t.angularVelocity-=m*T/t.inertia;let E=p.clone().addScaledVector(s,-g);if(E.lengthSq()>1e-6){E.normalize();let M=un(u,E),R=un(d,E),A=c+M*M/n.inertia+R*R/t.inertia,I=di.clamp(-p.dot(E)/A,-.42*T,.42*T);n.velocity.addScaledVector(E,I*o),t.velocity.addScaledVector(E,-I*a),n.angularVelocity+=M*I/n.inertia,t.angularVelocity-=R*I/t.inertia}}function ea(n,t){let e=n.localPoints[t],i=n.group.rotation.z,s=Math.cos(i),r=Math.sin(i);return new et(n.group.position.x+e.x*s-e.y*r,n.group.position.y+e.x*r+e.y*s)}function g0(n,t,e,i,s){let r=Gt*2;for(let o=0;o<4;o++){let a=null;for(let[c,l]of s){let h=e[c],u=i[l],d=h.a,p=h.b,g=u.a,x=u.b;if(o>0&&(d=ea(n,c),p=ea(n,c+1),g=ea(t,l),x=ea(t,l+1)),h.maxX+r<u.minX||u.maxX+r<h.minX||h.maxY+r<u.minY||u.maxY+r<h.minY)continue;let m=$h(d,p,g,x),f=Math.sqrt(m.distanceSq),T=Gt*2-f;if(T<=0||a&&T<=a.penetration)continue;let E=m.first.clone().sub(m.second);E.lengthSq()<1e-6&&(E.set(n.group.position.x-t.group.position.x,n.group.position.y-t.group.position.y),E.lengthSq()<1e-6&&E.set(0,1)),a={contactA:m.first,contactB:m.second,normal:E.normalize(),penetration:T}}if(!a)break;m0(n,t,a.contactA,a.contactB,a.normal,a.penetration)}}function _0(n){let t=n.map(s=>{let r=Hi(s),o=[],a=1/0,c=-1/0,l=1/0,h=-1/0;for(let u=1;u<r.length;u++){let d=r[u-1],p=r[u],g=Math.min(d.x,p.x),x=Math.max(d.x,p.x),m=Math.min(d.y,p.y),f=Math.max(d.y,p.y);a=Math.min(a,g),c=Math.max(c,x),l=Math.min(l,m),h=Math.max(h,f),o.push({a:d,b:p,minX:g,maxX:x,minY:m,maxY:f})}return{segments:o,minX:a,maxX:c,minY:l,maxY:h}}),e=new Map;for(let s=0;s<t.length;s++)t[s].segments.forEach((r,o)=>{let a=Math.floor((r.minX-Gt)/hn),c=Math.floor((r.maxX+Gt)/hn),l=Math.floor((r.minY-Gt)/hn),h=Math.floor((r.maxY+Gt)/hn);for(let u=a;u<=c;u++)for(let d=l;d<=h;d++){let p=`${u}:${d}`,g=e.get(p);g||e.set(p,g=[]),g.push({bodyIndex:s,segmentIndex:o})}});let i=new Map;for(let s of e.values())for(let r=0;r<s.length;r++)for(let o=r+1;o<s.length;o++){let a=s[r],c=s[o];if(a.bodyIndex===c.bodyIndex)continue;let l=Math.min(a.bodyIndex,c.bodyIndex),h=Math.max(a.bodyIndex,c.bodyIndex),u=a.bodyIndex===l?a.segmentIndex:c.segmentIndex,d=a.bodyIndex===l?c.segmentIndex:a.segmentIndex,p=t[l].segments[u],g=t[h].segments[d],x=Gt*2;if(p.maxX+x<g.minX||g.maxX+x<p.minX||p.maxY+x<g.minY||g.maxY+x<p.minY)continue;let m=l*n.length+h,f=i.get(m);f||(f={bodyAIndex:l,bodyBIndex:h,segmentPairs:[],seen:new Set},i.set(m,f));let T=u*ia+d;f.seen.has(T)||(f.seen.add(T),f.segmentPairs.push([u,d]))}i.forEach(s=>g0(n[s.bodyAIndex],n[s.bodyBIndex],t[s.bodyAIndex].segments,t[s.bodyBIndex].segments,s.segmentPairs))}function Jh(n,t){let e=t.clone().sub(new et(n.x,n.y));return new et(-n.angularVelocity*e.y,n.angularVelocity*e.x)}function Kh(n,t,e,i){if(n.mode!=="impact"||i<=0)return;let s=t.clone().sub(new et(n.x,n.y)),r=-e.x*i,o=-e.y*i;n.angularVelocity+=(s.x*o-s.y*r)/n.inertia*.55,n.angularVelocity=di.clamp(n.angularVelocity,-4.5,4.5)}function Qh(n){El+=n,yn.forEach(t=>{t.mode==="fixed"&&(t.angularVelocity=0),t.mode==="constant"&&(t.angularVelocity=t.angularVelocity||.82),t.mode==="variable"&&(t.angularVelocity=t.baseSpeed+Math.sin(El*t.frequency)*t.amplitude),t.mode==="impact"&&(t.angularVelocity*=Math.exp(-t.damping*n)),t.group.rotation.z+=t.angularVelocity*n}),Cs=yn.flatMap(Xh),jh()}function jh(){sa=As.concat(Cs),ar=new Map,sa.forEach((n,t)=>{let e=n.radius+Gt,i=Math.floor((Math.min(n.a.x,n.b.x)-e)/hn),s=Math.floor((Math.max(n.a.x,n.b.x)+e)/hn),r=Math.floor((Math.min(n.a.y,n.b.y)-e)/hn),o=Math.floor((Math.max(n.a.y,n.b.y)+e)/hn);for(let a=i;a<=s;a++)for(let c=r;c<=o;c++){let l=`${a}:${c}`,h=ar.get(l);h||ar.set(l,h=[]),h.push({segment:n,index:t})}})}function x0(n){let t=wl();for(let e=0;e<4;e++){let i=Hi(n),s=[{normal:new et(1,0),depthFor:h=>t.left+Gt-h.x},{normal:new et(-1,0),depthFor:h=>h.x+Gt-t.right},{normal:new et(0,1),depthFor:h=>t.bottom+Gt-h.y},{normal:new et(0,-1),depthFor:h=>h.y+Gt-t.top}];for(let h of s){let u=null;for(let d of i){let p=h.depthFor(d);p>0&&(!u||p>u.depth)&&(u={point:d,depth:p})}u&&(n.group.position.x+=h.normal.x*u.depth,n.group.position.y+=h.normal.y*u.depth,wh(n,h.normal,u.point,void 0,.12,.5))}let r=Hi(n),o=[];for(let h=1;h<r.length;h++){let u=r[h-1],d=r[h];o.push({a:u,b:d,minX:Math.min(u.x,d.x),maxX:Math.max(u.x,d.x),minY:Math.min(u.y,d.y),maxY:Math.max(u.y,d.y)})}let a=null;for(let h of ws)for(let u of o){let d=h.r+Gt;if(u.maxX+d<h.x||u.minX-d>h.x||u.maxY+d<h.y||u.minY-d>h.y)continue;let p=new et(h.x,h.y),g=ki(p,u.a,u.b),x=g.clone().sub(p),m=x.length(),f=d-m;f<=0||a&&f<=a.penetration||(m>1e-6?x.multiplyScalar(1/m):(x.set(n.group.position.x-h.x,n.group.position.y-h.y),x.lengthSq()<1e-6&&x.set(-(u.b.y-u.a.y),u.b.x-u.a.x),x.lengthSq()<1e-6&&x.set(1,0),x.normalize()),a={contactA:g,normal:x,penetration:f,gear:null})}let c=[],l=new Set;for(let h=0;h<o.length;h++){let u=o[h],d=Math.floor((u.minX-Gt)/hn),p=Math.floor((u.maxX+Gt)/hn),g=Math.floor((u.minY-Gt)/hn),x=Math.floor((u.maxY+Gt)/hn);for(let m=d;m<=p;m++)for(let f=g;f<=x;f++){let T=ar.get(`${m}:${f}`);if(T)for(let E of T){let M=E.segment,R=Gt+M.radius;if(u.maxX+R<Math.min(M.a.x,M.b.x)||Math.max(M.a.x,M.b.x)+R<u.minX||u.maxY+R<Math.min(M.a.y,M.b.y)||Math.max(M.a.y,M.b.y)+R<u.minY)continue;let A=h*Math.max(1,sa.length)+E.index;l.has(A)||(l.add(A),c.push({moving:u,obstacle:M}))}}}for(let{moving:h,obstacle:u}of c){let d=Gt+u.radius,p=$h(h.a,h.b,u.a,u.b),g=Math.sqrt(p.distanceSq),x=d-g;if(x<=0||a&&x<=a.penetration)continue;let m=p.first.clone().sub(p.second);if(g>1e-6)m.multiplyScalar(1/g);else{let f=(u.a.x+u.b.x)/2,T=(u.a.y+u.b.y)/2;m.set(n.group.position.x-f,n.group.position.y-T),m.lengthSq()<1e-6&&m.set(-(u.b.y-u.a.y),u.b.x-u.a.x),m.lengthSq()<1e-6&&m.set(1,0),m.normalize()}a={contactA:p.first,normal:m,penetration:x,gear:u.gear??null}}if(a){let h=Math.max(0,a.penetration-.002)*.82;n.group.position.x+=a.normal.x*h,n.group.position.y+=a.normal.y*h;let u=a.contactA,d=a.gear?Jh(a.gear,u):void 0,p=wh(n,a.normal,u,d,.12,.5);a.gear&&Kh(a.gear,u,a.normal,p)}}}function y0(n,t){n.velocity.y-=Uh*t,n.velocity.multiplyScalar(.999),n.angularVelocity*=.999,n.group.position.x+=n.velocity.x*t,n.group.position.y+=n.velocity.y*t,n.group.rotation.z+=n.angularVelocity*t,x0(n)}function Ml(n,t,e=Gt,i=.42,s=null,r=null){let o=new et(_t.position.x,_t.position.y),a=ki(o,n,t),c=o.clone().sub(a),l=Me+e,h=c.length();if(h>=l||h===0)return;let u=c.multiplyScalar(1/h);o.addScaledVector(u,l-h),_t.position.x=o.x,_t.position.y=o.y;let d=new et;if(s){let x=a.clone().sub(new et(s.group.position.x,s.group.position.y));d=s.velocity.clone().add(new et(-s.angularVelocity*x.y,s.angularVelocity*x.x))}r&&(d=Jh(r,a));let g=fe.clone().sub(d).dot(u);if(g<0){let x=s?a.clone().sub(new et(s.group.position.x,s.group.position.y)):null,m=s?Math.pow(un(x,u),2)/s.inertia:0,f=1/bl+(s?1/s.mass:0)+m,T=-(1+i)*g/f;fe.addScaledVector(u,T/bl),s&&(s.velocity.addScaledVector(u,-T/s.mass),s.angularVelocity-=un(x,u)*T/s.inertia),r&&Kh(r,a,u,T)}fe.multiplyScalar(.994)}function v0(n){let t=new et(_t.position.x-n.x,_t.position.y-n.y),e=Me+n.r,i=t.length();if(i>=e||i===0)return;let s=t.multiplyScalar(1/i);_t.position.x=n.x+s.x*e,_t.position.y=n.y+s.y*e;let r=fe.dot(s);r<0&&fe.addScaledVector(s,-1.48*r)}function M0(){let n=wl();_t.position.x-Me<n.left&&(_t.position.x=n.left+Me,fe.x=Math.abs(fe.x)*.55),_t.position.x+Me>n.right&&(_t.position.x=n.right-Me,fe.x=-Math.abs(fe.x)*.55),_t.position.y-Me<n.bottom&&(_t.position.y=n.bottom+Me,fe.y=Math.abs(fe.y)*.42,fe.x*=.96),_t.position.y+Me>n.top&&(_t.position.y=n.top-Me,fe.y=-Math.abs(fe.y)*.45)}function tu(n,t){return t.set(0,0),Rs.forEach(e=>{let i=e.x-n.x,s=e.y-n.y,r=Math.sqrt(i*i+s*s);if(r<1e-4||r>e.range)return;let o=Math.pow(1-r/e.range,2),a=e.pull*e.strength*o;t.x+=i/r*a,t.y+=s/r*a}),t}function S0(n,t,e,i){if(!Rs.length)return;let s=tu(n,new et);t.addScaledVector(s,i/Math.max(.25,e)),t.lengthSq()>cn*cn&&t.setLength(cn)}function b0(n,t){if(!Rs.length||n.localPoints.length===0)return;let e=n.group.rotation.z,i=Math.cos(e),s=Math.sin(e),r=new et,o=new et,a=new et,c=new et,l=new et,h=0;for(let d=1;d<n.localPoints.length;d++)h+=n.localPoints[d].distanceTo(n.localPoints[d-1]);if(h<1e-4)return;let u=0;for(let d=1;d<n.localPoints.length;d++){let p=n.localPoints[d-1],g=n.localPoints[d],x=p.distanceTo(g);if(x<1e-4)continue;let m=Math.max(1,Math.min(8,Math.ceil(x/.35))),f=x/(m*h);for(let T=0;T<m;T++){let E=(T+.5)/m;l.copy(p).lerp(g,E),c.set(n.group.position.x+l.x*i-l.y*s,n.group.position.y+l.x*s+l.y*i),tu(c,o),r.addScaledVector(o,f),a.set(c.x-n.group.position.x,c.y-n.group.position.y),u+=un(a,o)*f}}n.velocity.addScaledVector(r,t/Math.max(.25,n.mass)),n.angularVelocity+=u*t/n.inertia,n.velocity.lengthSq()>cn*cn&&n.velocity.setLength(cn),n.angularVelocity=di.clamp(n.angularVelocity,-16,16)}function eu(n){Zn.length=0,Gi.forEach(s=>Zn.push(s)),ie.forEach(s=>Zn.push(s));let t=_t?fe.length():0;Zn.forEach(s=>{t=Math.max(t,s.velocity.length())});let e=Math.min(4,Math.max(1,Math.ceil(t*n/Gt))),i=n/e;for(let s=0;s<e&&(E0(i),!Ie);s++);}function E0(n){Qh(n),Zn.forEach(t=>{b0(t,n),y0(t,n)}),_0(Zn),Zn.forEach(t=>{t.velocity.lengthSq()>cn*cn&&t.velocity.setLength(cn)}),_t&&(S0(_t.position,fe,bl,n),fe.y-=Uh*n,fe.multiplyScalar(.999),_t.position.x+=fe.x*n,_t.position.y+=fe.y*n,M0(),ws.forEach(v0),As.forEach(t=>Ml(t.a,t.b,t.radius,.4)),Cs.forEach(t=>Ml(t.a,t.b,t.radius,.4,null,t.gear)),Zn.forEach(t=>{let e=Hi(t);for(let i=1;i<e.length;i++)Ml(e[i-1],e[i],Gt,.32,t)}),fe.lengthSq()>cn*cn&&fe.setLength(cn)),pi()}function pi(){if(Ie)return;let n=xe[Ce].goal;if(n){if(n.type==="draw"&&ie.length>0)return Yn();if(n.type==="ballBox"&&_t&&kt){let t=_t.position.x>kt.left+Me&&_t.position.x<kt.right-Me&&_t.position.y<kt.top&&_t.position.y>kt.bottom;if(n.requiresGearSpin>0){if(!zi&&yn.some(e=>e.mode==="impact"&&Math.abs(e.angularVelocity)>=n.requiresGearSpin)&&(zi=!0,Es=!t,$n.textContent="\u8F49\u76E4\u5DF2\u555F\u52D5\uFF01\u63A5\u8457\u628A\u7403\u9001\u9032\u5DE6\u676F\u3002"),zi&&!t&&(Es=!0),t&&zi&&Es)return Yn()}else if(t)return Yn()}if(n.type==="strokeBox"&&kt&&ie.some(t=>Hi(t).every(e=>e.x>kt.left+Gt&&e.x<kt.right-Gt&&e.y>kt.bottom+Gt&&e.y<kt.top-Gt))||n.type==="target"&&_t&&new et(_t.position.x,_t.position.y).distanceTo(new et(n.x,n.y))<n.r)return Yn();if(n.type==="checkpoints"&&_t){let t=lr.size,e=n.targets[t];if(e&&new et(_t.position.x,_t.position.y).distanceTo(new et(e.x,e.y))<e.r){lr.add(t);let i=oa[t];i&&(i.ring.material=i.dot.material=Fh)}if(lr.size===n.targets.length)return Yn()}if(n.type==="ground"&&_t&&_t.position.y<=ce.bottom+Me+.12&&_t.position.x>=n.minX&&_t.position.x<=n.maxX||n.type==="wall"&&_t&&(n.side==="left"?_t.position.x<=ce.left+Me+.18:_t.position.x>=ce.right-Me-.18)&&_t.position.y>=n.minY&&_t.position.y<=n.maxY||n.type==="spinGear"&&yn.some(t=>t.mode==="impact"&&Math.abs(t.angularVelocity)>=n.speed))return Yn()}}function Yn(){if(Ie)return;tn=!1,Ie=!0;let n=Math.max(kh(),Math.min(xe.length,Ce+2));n0(n);let t=xe[Ce],e=1+(ie.length<=t.parStrokes?1:0)+(Ts<=t.parTime?1:0);i0(Ce,e),cr.innerHTML=`<div class="win-stars">${"\u2605".repeat(e)}${"\u2606".repeat(3-e)}</div><div>\u904E\u95DC\uFF01 ${Ts.toFixed(1)} \u79D2\u30FB${ie.length} \u7B46</div><div class="result-actions"><button data-result-action="levels">\u9078\u95DC</button><button data-result-action="next">${Ce===xe.length-1?"\u5B8C\u6210":"\u4E0B\u4E00\u95DC"}</button></div>`,cr.className="result-banner success show",$n.textContent="\u6F02\u4EAE\u7684\u7269\u7406\u89E3\u6CD5\uFF01",navigator.vibrate&&navigator.vibrate([40,40,100]),Is()}function nu(){let n=kh(),t=Vh(),e=Object.values(t).reduce((i,s)=>i+Number(s||0),0);kg.textContent=`\u5DF2\u89E3\u9396 ${n} / ${xe.length}\u3000\u2605 ${e} / ${xe.length*3}`,Sl.innerHTML=xe.map((i,s)=>{let r=s+1>n,o=Number(t[s])||0,a=i.chapter??"\u57FA\u790E\u8AB2\u7A0B",c=s?xe[s-1].chapter??"\u57FA\u790E\u8AB2\u7A0B":null,l=xe.findIndex((d,p)=>p>s&&(d.chapter??"\u57FA\u790E\u8AB2\u7A0B")!==a),h=l===-1?xe.length:l;return`${a!==c?`<h2 class="chapter-heading"><span>${a}</span><small>${String(s+1).padStart(2,"0")}\u2014${String(h).padStart(2,"0")}</small></h2>`:""}<button class="level-card" data-level="${s}" ${r?"disabled":""}>
      <span class="level-number">${String(s+1).padStart(2,"0")}</span>
      <span class="level-name">${i.name}</span>
      <span class="level-meta"><span class="difficulty">${"\u25CF".repeat(i.difficulty)}${"\u25CB".repeat(4-i.difficulty)}</span> \xB7 ${i.strokes} \u7B46\u3000<span class="card-stars">${"\u2605".repeat(o)}${"\u2606".repeat(3-o)}</span></span>
      ${r?'<span class="level-lock">\u{1F512}</span>':""}
    </button>`}).join(""),requestAnimationFrame(()=>Sl.querySelector(`[data-level="${Math.max(0,n-1)}"]`)?.scrollIntoView({block:"center"}))}function iu(){tn=!1,Ie=!1,Lh.classList.add("hidden"),Ph.classList.remove("hidden"),nu()}function ur(n){Ce=n;let t=xe[n];tn=!1,Ie=!1,we&&we.meshes.forEach(e=>Jn.remove(e)),we=null,ie.forEach(Rl),ie=[],Gi.forEach(e=>e.meshes.forEach(i=>i.geometry.dispose())),Jn.clear(),o0(),hr=t.strokes,a0(t),Dh.textContent=String(n+1).padStart(2,"0"),Vg.textContent=t.mission,Hg.textContent=t.hintTitle,Gg.textContent=t.hint,Ph.classList.add("hidden"),Lh.classList.remove("hidden"),Cl(),requestAnimationFrame(su)}Ih.addEventListener("click",f0);zg.addEventListener("click",Cl);Dh.addEventListener("click",iu);Sl.addEventListener("click",n=>{let t=n.target.closest("[data-level]");t&&!t.disabled&&ur(Number(t.dataset.level))});cr.addEventListener("click",n=>{let t=n.target.closest("[data-result-action]")?.dataset.resultAction;(t==="levels"||Ce===xe.length-1)&&iu(),t==="next"&&Ce<xe.length-1&&ur(Ce+1)});document.querySelector("#hintButton").addEventListener("click",()=>Tl.showModal());document.querySelector("#closeHint").addEventListener("click",()=>Tl.close());document.querySelector("#gotItButton").addEventListener("click",()=>Tl.close());function su(){let n=Rh.getBoundingClientRect();if(n.width<10||n.height<10)return;let t=n.width<600?1.5:2;je.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),je.setSize(n.width,n.height,!1);let e=n.width/Math.max(n.height,1),i=(ce.right-ce.left)/(ce.top-ce.bottom);if(e>i){let s=(ce.top-ce.bottom)*e;ve.left=-s/2,ve.right=s/2,ve.top=ce.top,ve.bottom=ce.bottom}else{let s=(ce.right-ce.left)/e;ve.left=ce.left,ve.right=ce.right,ve.top=s/2,ve.bottom=-s/2}ve.updateProjectionMatrix()}new ResizeObserver(su).observe(Fg);var T0=new js;function ru(){let n=Math.min(T0.getDelta(),.05);if(tn)for(Ts=(performance.now()-Oh)/1e3,Ch.textContent=Ts.toFixed(1),Oi+=n;Oi>=Fi&&tn;)eu(Fi),Oi-=Fi;else for(Oi+=n;Oi>=Fi;)Qh(Fi),Oi-=Fi;je.render(Nh,ve),requestAnimationFrame(ru)}var Ah=document.modelContext;if(Ah?.registerTool)try{Promise.resolve(Ah.registerTool({name:"reset_physics_puzzle",title:"\u91CD\u8A2D\u7269\u7406\u89E3\u8B0E",description:"\u6E05\u9664\u73A9\u5BB6\u756B\u7684\u8DEF\u7DDA\u4E26\u628A\u6A58\u7403\u653E\u56DE\u8D77\u9EDE\u3002",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!1,untrustedContentHint:!1},execute(){return _t?Cl():ur(Ce),{status:"ready",strokes:0}}})).catch(()=>{})}catch{}window.__gameDebug={loadLevel:ur,addTestStroke(n,t=[0,0]){if(!Array.isArray(n)||n.length<2||n.length>ia)throw new Error("test stroke points are out of range");let e=n.map(([r,o])=>new et(r,o)),i=[];for(let r=1;r<e.length;r++){let o=Yh(e[r-1],e[r]);o&&i.push(o)}let s=Al({points:e,meshes:i});return s.velocity.set(t[0]??0,t[1]??0),ie.push(s),Is(),ie.length-1},advancePhysics(n=1){let t=di.clamp(Math.floor(n),0,1200);tn=!0;for(let e=0;e<t;e++)eu(Fi);return this.getState()},triggerGoalForTest(){let n=xe[Ce].goal;if(!n)throw new Error("current level has no goal");if(n.type==="draw")this.addTestStroke([[-.8,0],[.8,0]]);else if(n.type==="ballBox")_t.position.set((kt.left+kt.right)/2,(kt.bottom+kt.top)/2,0);else if(n.type==="strokeBox"){let t=(kt.left+kt.right)/2,e=(kt.bottom+kt.top)/2;this.addTestStroke([[t-.16,e],[t+.16,e]])}else if(n.type==="target")_t.position.set(n.x,n.y,0);else if(n.type==="wall")_t.position.set(n.side==="left"?ce.left+Me+.1:ce.right-Me-.1,(n.minY+n.maxY)/2,0);else if(n.type==="ground")_t.position.set((n.minX+n.maxX)/2,ce.bottom+Me-.02,0);else if(n.type==="checkpoints"){for(let t of n.targets)if(_t.position.set(t.x,t.y,0),pi(),Ie)break}else if(n.type==="spinGear"){let t=yn.find(e=>e.mode==="impact");t&&(t.angularVelocity=n.speed+.1)}return Ie||pi(),{goal:n.type,finished:Ie}},testTurntableThenCupGoal(){let n=Ce,t=xe[n].goal;if(t?.type!=="ballBox"||!(t.requiresGearSpin>0))throw new Error("current level has no turntable-then-cup goal");let e=(kt.left+kt.right)/2,i=(kt.bottom+kt.top)/2;_t.position.set(e,i,0),pi();let s=Ie,r=yn.find(h=>h.mode==="impact");if(!r)throw new Error("compound goal has no impact-driven gear");r.angularVelocity=t.requiresGearSpin+.1,pi();let o=Ie,a=zi;_t.position.set(xn.x,xn.y,0),pi();let c=Es;_t.position.set(e,i,0),pi();let l=Ie;return ur(n),{cupAloneWon:s,spinAfterCupWon:o,spinRegistered:a,leftCupAfterSpin:c,bothInOrderWon:l}},getState(){let n=xe[Ce];return{running:tn,finished:Ie,strokes:ie.length,staticSegments:As.length,gears:yn.map(t=>({mode:t.mode,angle:t.group.rotation.z,speed:t.angularVelocity})),level:Ce+1,levelName:xe[Ce].name,chapter:xe[Ce].chapter??"\u57FA\u790E\u8AB2\u7A0B",goal:xe[Ce].goal?.type??null,objectiveProgress:{gearSpinSatisfied:zi,ballOutsideAfterGearSpin:Es},blueprint:{start:n.ball??null,basket:n.basket??null,goal:n.goal??null,routeBars:(n.bars??[]).map(({x:t,y:e,length:i,rotation:s=0})=>[t,e,i,s]),dynamics:n.dynamics??[],obstacles:n.obstacles??[],magnets:n.magnets??[],noDraw:n.noDraw??[],strokesAllowed:n.strokes},ball:_t?{x:_t.position.x,y:_t.position.y}:null,magnets:Rs.map(({x:t,y:e,pull:i,strength:s,range:r})=>({x:t,y:e,pull:i,strength:s,range:r})),bodies:Gi.concat(ie).map(t=>({x:t.group.position.x,y:t.group.position.y,vx:t.velocity.x,vy:t.velocity.y,angle:t.group.rotation.z,angularVelocity:t.angularVelocity,points:Hi(t).map(e=>({x:e.x,y:e.y}))})),firstStrokeY:ie[0]?.group.position.y??null,firstStrokeAngle:ie[0]?.group.rotation.z??null,firstStrokeAngularVelocity:ie[0]?.angularVelocity??null,firstStrokeMass:ie[0]?.mass??null,firstStrokeInertia:ie[0]?.inertia??null}}};nu();ru();document.documentElement.dataset.gameReady="true";})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
