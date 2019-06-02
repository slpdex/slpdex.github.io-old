(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7Xm5":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultNetworkSettings={feeAddress:"bitcoincash:qp5x5tmxluwm62ny66zy9u4zuqvkmcv8sq2ceuxmwd",feeAddressSlp:"simpleledger:qp5x5tmxluwm62ny66zy9u4zuqvkmcv8sqxrj8nmsn",feeDivisor:500}},"88k+":function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{u(n.next(e))}catch(t){o(t)}}function a(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(s,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r("Mpt7"),a=r("J66h"),u=r("moT7"),l=i(r("2Qfn")),f=o(r("kB5k"));class c{constructor(e,t){this._offers=s.List(),this._receivedOfferListeners=[],this._tokenId=e,this._networkSettings=t,this._listenForOffers(),this._listenForCancels()}static create(e,t){return n(this,void 0,void 0,function*(){yield l.ready;const r=new c(e,t);return yield r._fetchOffers(),r})}_listenForOffers(){const e=a.Base64.encode(JSON.stringify({v:3,q:{find:{"in.b0":u.LOKAD_ID_BASE64,"in.b1":u.VERSION,"slp.valid":!0,"slp.detail.tokenIdHex":this._tokenId}}}));new EventSource("https://slpsocket.fountainhead.cash/s/"+e).onmessage=(e=>this._receivedTx(e))}_listenForCancels(){const e=a.Base64.encode(JSON.stringify({v:3,q:{find:{"in.b0":{$ne:u.LOKAD_ID_BASE64},"in.b1":{$ne:u.VERSION},"in.b2":{op:0},"slp.valid":!0,"slp.detail.tokenIdHex":this._tokenId}}}));new EventSource("https://slpsocket.fountainhead.cash/s/"+e).onmessage=(e=>this._receivedTx(e))}_receivedTx(e){const t=JSON.parse(e.data);if(c.debug&&console.log(e),"mempool"==t.type){for(const e of t.data){if(this._offers=this._offers.filter(t=>-1==e.in.findIndex(e=>t.utxoEntry.txid==e.e.h&&t.utxoEntry.vout==e.e.i)),void 0===this._findExchInput(e))continue;const t=this._transformTx(e);void 0!==t&&(this._offers=this._offers.push(t))}this._offers=this._offers.sortBy(e=>e.pricePerToken),this._receivedOfferListeners.forEach(e=>e())}}_fetchOffers(){return n(this,void 0,void 0,function*(){const e=a.Base64.encode(JSON.stringify({v:3,q:{db:["c","u"],aggregate:[{$match:{"in.b0":u.LOKAD_ID_BASE64,"in.b1":u.VERSION,"slp.valid":!0,"slp.detail.tokenIdHex":this._tokenId}},{$addFields:{utxoId:{$concat:["$tx.h",":1"]}}},{$lookup:{from:"utxos",localField:"utxoId",foreignField:"utxo",as:"foundUtxo"}},{$match:{foundUtxo:{$ne:[]}}}]}})),t=yield fetch("https://slpdb.fountainhead.cash/q/"+e),r=yield t.json(),n=r.u.concat(r.c);this._offers=s.List(n).flatMap(e=>{const t=this._transformTx(e);return void 0===t?s.List.of():s.List.of(t)}).sortBy(e=>e.pricePerToken.toNumber())})}_findExchInput(e){const t=e.in.filter(e=>e.b0==u.LOKAD_ID_BASE64&&"object"==typeof e.b1&&e.b1.op==u.VERSION.op);if(0!=t.length)return t[0]}_transformTx(e){const t=new f.default("10").pow(e.slp.detail.decimals),r=this._findExchInput(e);if(void 0!==r&&r.b2&&r.b3&&r.b4)try{const i={bchSatoshis:e.out[1].e.v,address:e.out[1].e.a,slpAmount:e.slp.detail.outputs[0].amount},o=u.decodePrice(e.slp.detail.decimals,{power:r.b2,price:r.b3}),s={timestamp:e.blk&&e.blk.t,utxoEntry:{txid:e.tx.h,vout:1,satoshis:new f.default(i.bchSatoshis),address:i.address},pricePerToken:o.pricePerToken,scriptPrice:o.scriptPrice,sellAmountToken:new f.default(i.slpAmount),receivingAddress:u.decodeAddress(r.b4),expectedAddress:""};if(s.expectedAddress=l.advancedTradeOfferAddress(t,{tokenId:e.slp.detail.tokenIdHex,sellAmountToken:s.sellAmountToken,pricePerToken:s.pricePerToken,receivingAddress:s.receivingAddress,feeAddress:this._networkSettings.feeAddress,feeDivisor:new f.default(this._networkSettings.feeDivisor)}),s.expectedAddress!=s.utxoEntry.address)return;return s}catch(n){return}}offers(){return this._offers}tokenId(){return this._tokenId}addReceivedOfferListener(e){this._receivedOfferListeners.push(e)}}c.debug=!1,t.MarketToken=c},Cchj:function(e,t,r){"use strict";var n=r("O2hg").validate,i={q:0,p:1,z:2,r:3,y:4,9:5,x:6,8:7,g:8,f:9,2:10,t:11,v:12,d:13,w:14,0:15,s:16,3:17,j:18,n:19,5:20,4:21,k:22,h:23,c:24,e:25,6:26,m:27,u:28,a:29,7:30,l:31};e.exports={encode:function(e){n(e instanceof Uint8Array,"Invalid data: "+e+".");for(var t="",r=0;r<e.length;++r){var i=e[r];n(0<=i&&i<32,"Invalid value: "+i+"."),t+="qpzry9x8gf2tvdw0s3jn54khce6mua7l"[i]}return t},decode:function(e){n("string"==typeof e,"Invalid base32-encoded string: "+e+".");for(var t=new Uint8Array(e.length),r=0;r<e.length;++r){var o=e[r];n(o in i,"Invalid value: "+o+"."),t[r]=i[o]}return t}}},MxGg:function(e,t,r){"use strict";var n=r("O2hg").validate;e.exports=function(e,t,r,i){for(var o=i?Math.floor(e.length*t/r):Math.ceil(e.length*t/r),s=(1<<r)-1,a=new Uint8Array(o),u=0,l=0,f=0,c=0;c<e.length;++c){var p=e[c];for(n(0<=p&&p>>t==0,"Invalid value: "+p+"."),l=l<<t|p,f+=t;f>=r;)a[u]=l>>(f-=r)&s,++u}return i?n(f<t&&0==(l<<r-f&s),"Input cannot be converted to "+r+" bits without padding, but strict mode was used."):f>0&&(a[u]=l<<r-f&s,++u),a}},O2hg:function(e,t,r){"use strict";function n(e){var t=new Error;this.name=t.name="ValidationError",this.message=t.message=e,this.stack=t.stack}n.prototype=Object.create(Error.prototype),e.exports={ValidationError:n,validate:function(e,t){if(!e)throw new n(t)}}},Rkdt:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r("uGzR")),n(r("88k+")),n(r("7Xm5"))},dAlA:function(e,t,r){(function(e){var r,n=function(e){"use strict";var t=1e7,r=7,i=9007199254740992,o=c(i),s=Math.log(i);function a(e,t){return void 0===e?a[0]:void 0!==t?10==+t?K(e):z(e,t):K(e)}function u(e,t){this.value=e,this.sign=t,this.isSmall=!1}function l(e){this.value=e,this.sign=e<0,this.isSmall=!0}function f(e){return-i<e&&e<i}function c(e){return e<1e7?[e]:e<1e14?[e%1e7,Math.floor(e/1e7)]:[e%1e7,Math.floor(e/1e7)%1e7,Math.floor(e/1e14)]}function p(e){d(e);var r=e.length;if(r<4&&A(e,o)<0)switch(r){case 0:return 0;case 1:return e[0];case 2:return e[0]+e[1]*t;default:return e[0]+(e[1]+e[2]*t)*t}return e}function d(e){for(var t=e.length;0===e[--t];);e.length=t+1}function h(e){for(var t=new Array(e),r=-1;++r<e;)t[r]=0;return t}function v(e){return e>0?Math.floor(e):Math.ceil(e)}function m(e,r){var n,i,o=e.length,s=r.length,a=new Array(o),u=0,l=t;for(i=0;i<s;i++)a[i]=(n=e[i]+r[i]+u)-(u=n>=l?1:0)*l;for(;i<o;)n=e[i]+u,a[i++]=n-(u=n===l?1:0)*l;return u>0&&a.push(u),a}function y(e,t){return e.length>=t.length?m(e,t):m(t,e)}function g(e,r){var n,i,o=e.length,s=new Array(o),a=t;for(i=0;i<o;i++)n=e[i]-a+r,r=Math.floor(n/a),s[i]=n-r*a,r+=1;for(;r>0;)s[i++]=r%a,r=Math.floor(r/a);return s}function b(e,r){var n,i,o=e.length,s=r.length,a=new Array(o),u=0,l=t;for(n=0;n<s;n++)(i=e[n]-u-r[n])<0?(i+=l,u=1):u=0,a[n]=i;for(n=s;n<o;n++){if(!((i=e[n]-u)<0)){a[n++]=i;break}a[n]=i+=l}for(;n<o;n++)a[n]=e[n];return d(a),a}function w(e,r,n){var i,o,s=e.length,a=new Array(s),f=-r,c=t;for(i=0;i<s;i++)o=e[i]+f,f=Math.floor(o/c),a[i]=(o%=c)<0?o+c:o;return"number"==typeof(a=p(a))?(n&&(a=-a),new l(a)):new u(a,n)}function k(e,r){var n,i,o,s,a=e.length,u=r.length,l=h(a+u),f=t;for(o=0;o<a;++o){s=e[o];for(var c=0;c<u;++c)n=s*r[c]+l[o+c],i=Math.floor(n/f),l[o+c]=n-i*f,l[o+c+1]+=i}return d(l),l}function O(e,r){var n,i,o=e.length,s=new Array(o),a=t,u=0;for(i=0;i<o;i++)n=e[i]*r+u,u=Math.floor(n/a),s[i]=n-u*a;for(;u>0;)s[i++]=u%a,u=Math.floor(u/a);return s}function _(e,t){for(var r=[];t-- >0;)r.push(0);return r.concat(e)}function S(e,r,n){return new u(e<t?O(r,e):k(r,c(e)),n)}function T(e){var r,n,i,o,s=e.length,a=h(s+s),u=t;for(i=0;i<s;i++){n=0-(o=e[i])*o;for(var l=i;l<s;l++)r=o*e[l]*2+a[i+l]+n,n=Math.floor(r/u),a[i+l]=r-n*u;a[i+s]=n}return d(a),a}function $(e,r){var n,i,o,s,a=e.length,u=h(a),l=t;for(o=0,n=a-1;n>=0;--n)o=(s=o*l+e[n])-(i=v(s/r))*r,u[n]=0|i;return[u,0|o]}function x(e,r){var n,i,o=K(r),s=e.value,f=o.value;if(0===f)throw new Error("Cannot divide by zero");if(e.isSmall)return o.isSmall?[new l(v(s/f)),new l(s%f)]:[a[0],e];if(o.isSmall){if(1===f)return[e,a[0]];if(-1==f)return[e.negate(),a[0]];var m=Math.abs(f);if(m<t){i=p((n=$(s,m))[0]);var y=n[1];return e.sign&&(y=-y),"number"==typeof i?(e.sign!==o.sign&&(i=-i),[new l(i),new l(y)]):[new u(i,e.sign!==o.sign),new l(y)]}f=c(m)}var g=A(s,f);if(-1===g)return[a[0],e];if(0===g)return[a[e.sign===o.sign?1:-1],a[0]];n=s.length+f.length<=200?function(e,r){var n,i,o,s,a,u,l,f=e.length,c=r.length,d=t,v=h(r.length),m=r[c-1],y=Math.ceil(d/(2*m)),g=O(e,y),b=O(r,y);for(g.length<=f&&g.push(0),b.push(0),m=b[c-1],i=f-c;i>=0;i--){for(n=d-1,g[i+c]!==m&&(n=Math.floor((g[i+c]*d+g[i+c-1])/m)),o=0,s=0,u=b.length,a=0;a<u;a++)o+=n*b[a],l=Math.floor(o/d),s+=g[i+a]-(o-l*d),o=l,s<0?(g[i+a]=s+d,s=-1):(g[i+a]=s,s=0);for(;0!==s;){for(n-=1,o=0,a=0;a<u;a++)(o+=g[i+a]-d+b[a])<0?(g[i+a]=o+d,o=0):(g[i+a]=o,o=1);s+=o}v[i]=n}return g=$(g,y)[0],[p(v),p(g)]}(s,f):function(e,r){for(var n,i,o,s,a=e.length,u=r.length,l=[],f=[],c=t;a;)if(f.unshift(e[--a]),d(f),A(f,r)<0)l.push(0);else{o=f[(i=f.length)-1]*c+f[i-2],i>u&&(o=(o+1)*c),n=Math.ceil(o/(r[u-1]*c+r[u-2]));do{if(A(s=O(r,n),f)<=0)break;n--}while(n);l.push(n),f=b(f,s)}return l.reverse(),[p(l),p(f)]}(s,f);var w=e.sign!==o.sign,k=n[1],_=e.sign;return"number"==typeof(i=n[0])?(w&&(i=-i),i=new l(i)):i=new u(i,w),"number"==typeof k?(_&&(k=-k),k=new l(k)):k=new u(k,_),[i,k]}function A(e,t){if(e.length!==t.length)return e.length>t.length?1:-1;for(var r=e.length-1;r>=0;r--)if(e[r]!==t[r])return e[r]>t[r]?1:-1;return 0}function M(e){var t=e.abs();return!t.isUnit()&&(!!(t.equals(2)||t.equals(3)||t.equals(5))||!(t.isEven()||t.isDivisibleBy(3)||t.isDivisibleBy(5))&&(!!t.lesser(49)||void 0))}function I(e,t){for(var r,i,o,s=e.prev(),u=s,l=0;u.isEven();)u=u.divide(2),l++;e:for(i=0;i<t.length;i++)if(!e.lesser(t[i])&&!(o=n(t[i]).modPow(u,e)).equals(a[1])&&!o.equals(s)){for(r=l-1;0!=r;r--){if((o=o.square().mod(e)).isUnit())return!1;if(o.equals(s))continue e}return!1}return!0}u.prototype=Object.create(a.prototype),l.prototype=Object.create(a.prototype),u.prototype.add=function(e){var t=K(e);if(this.sign!==t.sign)return this.subtract(t.negate());var r=this.value,n=t.value;return new u(t.isSmall?g(r,Math.abs(n)):y(r,n),this.sign)},u.prototype.plus=u.prototype.add,l.prototype.add=function(e){var t=K(e),r=this.value;if(r<0!==t.sign)return this.subtract(t.negate());var n=t.value;if(t.isSmall){if(f(r+n))return new l(r+n);n=c(Math.abs(n))}return new u(g(n,Math.abs(r)),r<0)},l.prototype.plus=l.prototype.add,u.prototype.subtract=function(e){var t=K(e);if(this.sign!==t.sign)return this.add(t.negate());var r=this.value,n=t.value;return t.isSmall?w(r,Math.abs(n),this.sign):function(e,t,r){var n;return A(e,t)>=0?n=b(e,t):(n=b(t,e),r=!r),"number"==typeof(n=p(n))?(r&&(n=-n),new l(n)):new u(n,r)}(r,n,this.sign)},u.prototype.minus=u.prototype.subtract,l.prototype.subtract=function(e){var t=K(e),r=this.value;if(r<0!==t.sign)return this.add(t.negate());var n=t.value;return t.isSmall?new l(r-n):w(n,Math.abs(r),r>=0)},l.prototype.minus=l.prototype.subtract,u.prototype.negate=function(){return new u(this.value,!this.sign)},l.prototype.negate=function(){var e=this.sign,t=new l(-this.value);return t.sign=!e,t},u.prototype.abs=function(){return new u(this.value,!1)},l.prototype.abs=function(){return new l(Math.abs(this.value))},u.prototype.multiply=function(e){var r,n,i,o=K(e),s=this.value,l=o.value,f=this.sign!==o.sign;if(o.isSmall){if(0===l)return a[0];if(1===l)return this;if(-1===l)return this.negate();if((r=Math.abs(l))<t)return new u(O(s,r),f);l=c(r)}return-.012*(n=s.length)-.012*(i=l.length)+15e-6*n*i>0?new u(function e(t,r){var n=Math.max(t.length,r.length);if(n<=30)return k(t,r);n=Math.ceil(n/2);var i=t.slice(n),o=t.slice(0,n),s=r.slice(n),a=r.slice(0,n),u=e(o,a),l=e(i,s),f=e(y(o,i),y(a,s)),c=y(y(u,_(b(b(f,u),l),n)),_(l,2*n));return d(c),c}(s,l),f):new u(k(s,l),f)},u.prototype.times=u.prototype.multiply,l.prototype._multiplyBySmall=function(e){return f(e.value*this.value)?new l(e.value*this.value):S(Math.abs(e.value),c(Math.abs(this.value)),this.sign!==e.sign)},u.prototype._multiplyBySmall=function(e){return 0===e.value?a[0]:1===e.value?this:-1===e.value?this.negate():S(Math.abs(e.value),this.value,this.sign!==e.sign)},l.prototype.times=l.prototype.multiply=function(e){return K(e)._multiplyBySmall(this)},u.prototype.square=function(){return new u(T(this.value),!1)},l.prototype.square=function(){var e=this.value*this.value;return f(e)?new l(e):new u(T(c(Math.abs(this.value))),!1)},l.prototype.divmod=u.prototype.divmod=function(e){var t=x(this,e);return{quotient:t[0],remainder:t[1]}},l.prototype.over=l.prototype.divide=u.prototype.over=u.prototype.divide=function(e){return x(this,e)[0]},l.prototype.remainder=l.prototype.mod=u.prototype.remainder=u.prototype.mod=function(e){return x(this,e)[1]},u.prototype.pow=function(e){var t,r,n,i=K(e),o=this.value,s=i.value;if(0===s)return a[1];if(0===o)return a[0];if(1===o)return a[1];if(-1===o)return i.isEven()?a[1]:a[-1];if(i.sign)return a[0];if(!i.isSmall)throw new Error("The exponent "+i.toString()+" is too large.");if(this.isSmall&&f(t=Math.pow(o,s)))return new l(v(t));for(r=this,n=a[1];!0&s&&(n=n.times(r),--s),0!==s;)s/=2,r=r.square();return n},l.prototype.pow=u.prototype.pow,l.prototype.modPow=u.prototype.modPow=function(e,t){if(e=K(e),(t=K(t)).isZero())throw new Error("Cannot take modPow with modulus 0");for(var r=a[1],n=this.mod(t);e.isPositive();){if(n.isZero())return a[0];e.isOdd()&&(r=r.multiply(n).mod(t)),e=e.divide(2),n=n.square().mod(t)}return r},u.prototype.compareAbs=function(e){var t=K(e);return t.isSmall?1:A(this.value,t.value)},l.prototype.compareAbs=function(e){var t=K(e),r=Math.abs(this.value),n=t.value;return t.isSmall?r===(n=Math.abs(n))?0:r>n?1:-1:-1},u.prototype.compareTo=u.prototype.compare=function(e){if(e===1/0)return-1;if(e===-1/0)return 1;var t=K(e);return this.sign!==t.sign?t.sign?1:-1:t.isSmall?this.sign?-1:1:A(this.value,t.value)*(this.sign?-1:1)},l.prototype.compareTo=l.prototype.compare=function(e){if(e===1/0)return-1;if(e===-1/0)return 1;var t=K(e),r=this.value,n=t.value;return t.isSmall?r==n?0:r>n?1:-1:r<0!==t.sign?r<0?-1:1:r<0?1:-1},l.prototype.eq=l.prototype.equals=u.prototype.eq=u.prototype.equals=function(e){return 0===this.compare(e)},l.prototype.neq=l.prototype.notEquals=u.prototype.neq=u.prototype.notEquals=function(e){return 0!==this.compare(e)},l.prototype.gt=l.prototype.greater=u.prototype.gt=u.prototype.greater=function(e){return this.compare(e)>0},l.prototype.lt=l.prototype.lesser=u.prototype.lt=u.prototype.lesser=function(e){return this.compare(e)<0},l.prototype.geq=l.prototype.greaterOrEquals=u.prototype.geq=u.prototype.greaterOrEquals=function(e){return this.compare(e)>=0},l.prototype.leq=l.prototype.lesserOrEquals=u.prototype.leq=u.prototype.lesserOrEquals=function(e){return this.compare(e)<=0},u.prototype.isEven=function(){return 0==(1&this.value[0])},l.prototype.isEven=function(){return 0==(1&this.value)},u.prototype.isOdd=function(){return 1==(1&this.value[0])},l.prototype.isOdd=function(){return 1==(1&this.value)},u.prototype.isPositive=function(){return!this.sign},l.prototype.isPositive=function(){return this.value>0},u.prototype.isNegative=function(){return this.sign},l.prototype.isNegative=function(){return this.value<0},u.prototype.isUnit=function(){return!1},l.prototype.isUnit=function(){return 1===Math.abs(this.value)},u.prototype.isZero=function(){return!1},l.prototype.isZero=function(){return 0===this.value},l.prototype.isDivisibleBy=u.prototype.isDivisibleBy=function(e){var t=K(e),r=t.value;return 0!==r&&(1===r||(2===r?this.isEven():this.mod(t).equals(a[0])))},l.prototype.isPrime=u.prototype.isPrime=function(e){var t=M(this);if(void 0!==t)return t;var r=this.abs(),i=r.bitLength();if(i<=64)return I(r,[2,325,9375,28178,450775,9780504,1795265022]);for(var o=Math.log(2)*i,s=Math.ceil(!0===e?2*Math.pow(o,2):o),a=[],u=0;u<s;u++)a.push(n(u+2));return I(r,a)},l.prototype.isProbablePrime=u.prototype.isProbablePrime=function(e){var t=M(this);if(void 0!==t)return t;for(var r=this.abs(),i=void 0===e?5:e,o=[],s=0;s<i;s++)o.push(n.randBetween(2,r.minus(2)));return I(r,o)},l.prototype.modInv=u.prototype.modInv=function(e){for(var t,r,i,o=n.zero,s=n.one,a=K(e),u=this.abs();!u.equals(n.zero);)t=a.divide(u),r=o,i=a,o=s,a=u,s=r.subtract(t.multiply(s)),u=i.subtract(t.multiply(u));if(!a.equals(1))throw new Error(this.toString()+" and "+e.toString()+" are not co-prime");return-1===o.compare(0)&&(o=o.add(e)),this.isNegative()?o.negate():o},u.prototype.next=function(){var e=this.value;return this.sign?w(e,1,this.sign):new u(g(e,1),this.sign)},l.prototype.next=function(){var e=this.value;return e+1<i?new l(e+1):new u(o,!1)},u.prototype.prev=function(){var e=this.value;return this.sign?new u(g(e,1),!0):w(e,1,this.sign)},l.prototype.prev=function(){var e=this.value;return e-1>-i?new l(e-1):new u(o,!0)};for(var E=[1];2*E[E.length-1]<=t;)E.push(2*E[E.length-1]);var P=E.length,q=E[P-1];function N(e){return("number"==typeof e||"string"==typeof e)&&+Math.abs(e)<=t||e instanceof u&&e.value.length<=1}function L(e,t,r){t=K(t);for(var i=e.isNegative(),o=t.isNegative(),s=i?e.not():e,a=o?t.not():t,u=0,l=0,f=null,c=null,p=[];!s.isZero()||!a.isZero();)u=(f=x(s,q))[1].toJSNumber(),i&&(u=q-1-u),l=(c=x(a,q))[1].toJSNumber(),o&&(l=q-1-l),s=f[0],a=c[0],p.push(r(u,l));for(var d=0!==r(i?1:0,o?1:0)?n(-1):n(0),h=p.length-1;h>=0;h-=1)d=d.multiply(q).add(n(p[h]));return d}l.prototype.shiftLeft=u.prototype.shiftLeft=function(e){if(!N(e))throw new Error(String(e)+" is too large for shifting.");if((e=+e)<0)return this.shiftRight(-e);var t=this;if(t.isZero())return t;for(;e>=P;)t=t.multiply(q),e-=P-1;return t.multiply(E[e])},l.prototype.shiftRight=u.prototype.shiftRight=function(e){var t;if(!N(e))throw new Error(String(e)+" is too large for shifting.");if((e=+e)<0)return this.shiftLeft(-e);for(var r=this;e>=P;){if(r.isZero()||r.isNegative()&&r.isUnit())return r;r=(t=x(r,q))[1].isNegative()?t[0].prev():t[0],e-=P-1}return(t=x(r,E[e]))[1].isNegative()?t[0].prev():t[0]},l.prototype.not=u.prototype.not=function(){return this.negate().prev()},l.prototype.and=u.prototype.and=function(e){return L(this,e,function(e,t){return e&t})},l.prototype.or=u.prototype.or=function(e){return L(this,e,function(e,t){return e|t})},l.prototype.xor=u.prototype.xor=function(e){return L(this,e,function(e,t){return e^t})};var D=1<<30,j=(t&-t)*(t&-t)|D;function C(e){var r=e.value,n="number"==typeof r?r|D:r[0]+r[1]*t|j;return n&-n}function B(e,t){return e=K(e),t=K(t),e.greater(t)?e:t}function U(e,t){return e=K(e),t=K(t),e.lesser(t)?e:t}function R(e,t){if(e=K(e).abs(),t=K(t).abs(),e.equals(t))return e;if(e.isZero())return t;if(t.isZero())return e;for(var r,n,i=a[1];e.isEven()&&t.isEven();)r=Math.min(C(e),C(t)),e=e.divide(r),t=t.divide(r),i=i.multiply(r);for(;e.isEven();)e=e.divide(C(e));do{for(;t.isEven();)t=t.divide(C(t));e.greater(t)&&(n=t,t=e,e=n),t=t.subtract(e)}while(!t.isZero());return i.isUnit()?e:e.multiply(i)}l.prototype.bitLength=u.prototype.bitLength=function(){var e=this;return e.compareTo(n(0))<0&&(e=e.negate().subtract(n(1))),0===e.compareTo(n(0))?n(0):n(function e(t,r){if(r.compareTo(t)<=0){var i=e(t,r.square(r)),o=i.p,s=i.e,a=o.multiply(r);return a.compareTo(t)<=0?{p:a,e:2*s+1}:{p:o,e:2*s}}return{p:n(1),e:0}}(e,n(2)).e).add(n(1))};var z=function(e,t){for(var r=e.length,n=Math.abs(t),i=0;i<r;i++)if("-"!==(f=e[i].toLowerCase())&&/[a-z0-9]/.test(f)){if(/[0-9]/.test(f)&&+f>=n){if("1"===f&&1===n)continue;throw new Error(f+" is not a valid digit in base "+t+".")}if(f.charCodeAt(0)-87>=n)throw new Error(f+" is not a valid digit in base "+t+".")}if(2<=t&&t<=36&&r<=s/Math.log(t)){var o=parseInt(e,t);if(isNaN(o))throw new Error(f+" is not a valid digit in base "+t+".");return new l(parseInt(e,t))}t=K(t);var a=[],u="-"===e[0];for(i=u?1:0;i<e.length;i++){var f,c=(f=e[i].toLowerCase()).charCodeAt(0);if(48<=c&&c<=57)a.push(K(f));else if(97<=c&&c<=122)a.push(K(f.charCodeAt(0)-87));else{if("<"!==f)throw new Error(f+" is not a valid character");var p=i;do{i++}while(">"!==e[i]);a.push(K(e.slice(p+1,i)))}}return J(a,t,u)};function J(e,t,r){var n,i=a[0],o=a[1];for(n=e.length-1;n>=0;n--)i=i.add(e[n].times(o)),o=o.times(t);return r?i.negate():i}function V(e){return e<=35?"0123456789abcdefghijklmnopqrstuvwxyz".charAt(e):"<"+e+">"}function Z(e,t){if((t=n(t)).isZero()){if(e.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(t.equals(-1)){if(e.isZero())return{value:[0],isNegative:!1};if(e.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-e)).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var r=Array.apply(null,Array(+e-1)).map(Array.prototype.valueOf,[0,1]);return r.unshift([1]),{value:[].concat.apply([],r),isNegative:!1}}var i=!1;if(e.isNegative()&&t.isPositive()&&(i=!0,e=e.abs()),t.equals(1))return e.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(+e)).map(Number.prototype.valueOf,1),isNegative:i};for(var o,s=[],a=e;a.isNegative()||a.compareAbs(t)>=0;){o=a.divmod(t),a=o.quotient;var u=o.remainder;u.isNegative()&&(u=t.minus(u).abs(),a=a.next()),s.push(u.toJSNumber())}return s.push(a.toJSNumber()),{value:s.reverse(),isNegative:i}}function F(e,t){var r=Z(e,t);return(r.isNegative?"-":"")+r.value.map(V).join("")}function H(e){if(f(+e)){var t=+e;if(t===v(t))return new l(t);throw new Error("Invalid integer: "+e)}var n="-"===e[0];n&&(e=e.slice(1));var i=e.split(/e/i);if(i.length>2)throw new Error("Invalid integer: "+i.join("e"));if(2===i.length){var o=i[1];if("+"===o[0]&&(o=o.slice(1)),(o=+o)!==v(o)||!f(o))throw new Error("Invalid integer: "+o+" is not a valid exponent.");var s=i[0],a=s.indexOf(".");if(a>=0&&(o-=s.length-a-1,s=s.slice(0,a)+s.slice(a+1)),o<0)throw new Error("Cannot include negative exponent part for integers");e=s+=new Array(o+1).join("0")}if(!/^([0-9][0-9]*)$/.test(e))throw new Error("Invalid integer: "+e);for(var c=[],p=e.length,h=r,m=p-h;p>0;)c.push(+e.slice(m,p)),(m-=h)<0&&(m=0),p-=h;return d(c),new u(c,n)}function K(e){return"number"==typeof e?function(e){if(f(e)){if(e!==v(e))throw new Error(e+" is not an integer.");return new l(e)}return H(e.toString())}(e):"string"==typeof e?H(e):e}u.prototype.toArray=function(e){return Z(this,e)},l.prototype.toArray=function(e){return Z(this,e)},u.prototype.toString=function(e){if(void 0===e&&(e=10),10!==e)return F(this,e);for(var t,r=this.value,n=r.length,i=String(r[--n]);--n>=0;)t=String(r[n]),i+="0000000".slice(t.length)+t;return(this.sign?"-":"")+i},l.prototype.toString=function(e){return void 0===e&&(e=10),10!=e?F(this,e):String(this.value)},u.prototype.toJSON=l.prototype.toJSON=function(){return this.toString()},u.prototype.toJSNumber=u.prototype.valueOf=function(){return parseInt(this.toString(),10)},l.prototype.toJSNumber=l.prototype.valueOf=function(){return this.value};for(var Q=0;Q<1e3;Q++)a[Q]=new l(Q),Q>0&&(a[-Q]=new l(-Q));return a.one=a[1],a.zero=a[0],a.minusOne=a[-1],a.max=B,a.min=U,a.gcd=R,a.lcm=function(e,t){return e=K(e).abs(),t=K(t).abs(),e.divide(R(e,t)).multiply(t)},a.isInstance=function(e){return e instanceof u||e instanceof l},a.randBetween=function(e,r){var n=U(e=K(e),r=K(r)),i=B(e,r).subtract(n).add(1);if(i.isSmall)return n.add(Math.floor(Math.random()*i));for(var o=[],s=!0,a=i.value.length-1;a>=0;a--){var f=s?i.value[a]:t,c=v(Math.random()*f);o.unshift(c),c<f&&(s=!1)}return o=p(o),n.add("number"==typeof o?new l(o):new u(o,!1))},a.fromArray=function(e,t,r){return J(e.map(K),K(t||10),r)},a}();e.hasOwnProperty("exports")&&(e.exports=n),void 0===(r=(function(){return n}).apply(t,[]))||(e.exports=r)}).call(this,r("YuTi")(e))},llEn:function(e,t,r){"use strict";var n=r("Cchj"),i=r("dAlA"),o=r("MxGg"),s=r("O2hg"),a=s.validate,u=s.ValidationError,l=["bitcoincash","bchtest","bchreg"];function f(e){for(var t=new Uint8Array(e.length),r=0;r<e.length;++r)t[r]=31&e[r].charCodeAt(0);return t}function c(e,t){var r=new Uint8Array(e.length+t.length);return r.set(e),r.set(t,e.length),r}function p(e){for(var t=[656907472481,522768456162,0xf33e5fb3c4,748107326120,130178868336],r=i(1),n=0;n<e.length;++n){var o=e[n],s=r.shiftRight(35);r=r.and(34359738367).shiftLeft(5).xor(o);for(var a=0;a<t.length;++a)s.shiftRight(a).and(1).equals(1)&&(r=r.xor(t[a]))}return r.xor(1)}function d(e){return e===e.toLowerCase()||e===e.toUpperCase()}e.exports={encode:function(e,t,r){a("string"==typeof e&&function(e){return d(e)&&-1!==l.indexOf(e.toLowerCase())}(e),"Invalid prefix: "+e+"."),a("string"==typeof t,"Invalid type: "+t+"."),a(r instanceof Uint8Array,"Invalid hash: "+r+".");var i,s=c(f(e),new Uint8Array(1)),h=function(e){switch(e){case"P2PKH":return 0;case"P2SH":return 8;default:throw new u("Invalid type: "+e+".")}}(t)+function(e){switch(8*e.length){case 160:return 0;case 192:return 1;case 224:return 2;case 256:return 3;case 320:return 4;case 384:return 5;case 448:return 6;case 512:return 7;default:throw new u("Invalid hash size: "+e.length+".")}}(r),v=(i=c(new Uint8Array([h]),r),o(i,8,5)),m=c(c(s,v),new Uint8Array(8)),y=c(v,function(e){for(var t=new Uint8Array(8),r=0;r<8;++r)t[7-r]=e.and(31).toJSNumber(),e=e.shiftRight(5);return t}(p(m)));return e+":"+n.encode(y)},decode:function(e){a("string"==typeof e&&d(e),"Invalid address: "+e+".");var t=e.toLowerCase().split(":");a(2===t.length,"Missing prefix: "+e+".");var r=t[0],i=n.decode(t[1]);a(function(e,t){var r=c(f(e),new Uint8Array(1));return p(c(r,t)).equals(0)}(r,i),"Invalid checksum: "+e+".");var s,l=(s=i.subarray(0,-8),o(s,5,8,!0)),h=l[0],v=l.subarray(1);return a(function(e){switch(7&e){case 0:return 160;case 1:return 192;case 2:return 224;case 3:return 256;case 4:return 320;case 5:return 384;case 6:return 448;case 7:return 512}}(h)===8*v.length,"Invalid hash size: "+e+"."),{prefix:r,type:function(e){switch(120&e){case 0:return"P2PKH";case 8:return"P2SH";default:throw new u("Invalid address type in version byte: "+e+".")}}(h),hash:v}},ValidationError:u}},moT7:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r("J66h"),s=n(r("llEn")),a=i(r("kB5k"));function u(e){return Uint8Array.from(atob(e),e=>e.charCodeAt(0))}t.LOKAD_ID_BASE64=o.Base64.encode("EXCH"),t.VERSION={op:82},t.decodePrice=function(e,t){const r=u(t.power),n=u(t.price),i=2==r.length&&1==r[1],o=new a.default(new DataView(n.buffer).getUint32(0,!1)),s=i?new a.default("1").div(o):o;return{pricePerToken:new a.default("10").pow(e).times(s),scriptPrice:o}},t.decodeAddress=function(e){return s.encode("bitcoincash","P2PKH",u(e))}},uGzR:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(e){try{u(n.next(e))}catch(t){o(t)}}function a(e){try{u(n.throw(e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new r(function(t){t(e.value)}).then(s,a)}u((n=n.apply(e,t||[])).next())})},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r("Mpt7"),s=r("J66h"),a=r("moT7"),u=r("7Xm5"),l=i(r("kB5k"));class f{constructor(){this._tokenDetails=o.Map(),this._tokenLastTrades=o.Map(),this._tokenVolumes=o.Map(),this._tokenPrices=o.Map(),this._tokenPriceIncreases=o.Map(),this._tokenOverview=o.Map()}static create(){return n(this,void 0,void 0,function*(){const e=new f,t=[e._fetchDetails(),e._fetchTokens(),e._fetchPrice24h(),e._fetchVolume24h()];for(const r of t)yield r;return e._updatePriceIncrease(),e._updateOverview(),e})}_fetchDetails(){return n(this,void 0,void 0,function*(){const e=yield fetch("https://rest.bitcoin.com/v2/slp/list"),t=yield e.json();this._tokenDetails=o.Map(t.map(e=>[e.id,e]))})}_fetchTokens(){return n(this,void 0,void 0,function*(){const e=s.Base64.encode(JSON.stringify({v:3,q:{db:["c","u"],aggregate:[{$match:{"in.b0":a.LOKAD_ID_BASE64,"in.b1":a.VERSION,"slp.valid":!0}},{$addFields:{utxoId:{$concat:["$tx.h",":1"]}}},{$lookup:{from:"utxos",localField:"utxoId",foreignField:"utxo",as:"foundUtxo"}},{$addFields:{exchInput:{$arrayElemAt:[{$filter:{input:"$in",as:"input",cond:{$and:[{$eq:["$$input.b0",a.LOKAD_ID_BASE64]},{$eq:["$$input.b1",a.VERSION]}]}}},0]},hasUtxo:{$size:"$foundUtxo"}}},{$sort:{hasUtxo:-1,"blk.t":-1}},{$group:{_id:"$slp.detail.tokenIdHex",decimals:{$first:"$slp.detail.decimals"},numberOfOpenOffers:{$sum:"$hasUtxo"},numberOfClosedOffers:{$sum:{$subtract:[1,"$hasUtxo"]}},lastTrade:{$first:{timestamp:"$blk.t",power:"$exchInput.b2",price:"$exchInput.b3",isAccepted:{$ne:["$foundUtxo",[]]}}}}}]}})),t=yield fetch("https://slpdb.fountainhead.cash/q/"+e),r=yield t.json(),n=o.List.of(r.u,r.c);this._tokenLastTrades=n.map(e=>o.Map(e.map(e=>[e._id,{numberOfOpenOffers:e.numberOfOpenOffers,numberOfClosedOffers:e.numberOfClosedOffers,lastTrade:{pricePerToken:a.decodePrice(e.decimals,e.lastTrade).pricePerToken,timestamp:e.lastTrade.timestamp,isAccepted:e.lastTrade.isAccepted}}]))).reduce((e,t)=>o.Map(o.Set(e.keySeq().concat(t.keySeq())).map(r=>{const n=e.get(r),i=t.get(r);let o=n||i;if(void 0!==n&&void 0!==i&&(o={numberOfClosedOffers:n.numberOfClosedOffers+i.numberOfClosedOffers,numberOfOpenOffers:n.numberOfOpenOffers+i.numberOfOpenOffers,lastTrade:void 0===n.lastTrade.timestamp?n.lastTrade:i.lastTrade}),void 0===o)throw"Impossible";return[r,o]})))})}_fetchVolume24h(){return n(this,void 0,void 0,function*(){const e={v:3,q:{db:["c","u"],aggregate:[{$match:{"in.b0":a.LOKAD_ID_BASE64,"in.b1":a.VERSION,"out.e.a":u.defaultNetworkSettings.feeAddressSlp,"slp.valid":!0,$and:[{$or:[{"slp.detail.outputs":{$size:2}},{"slp.detail.outputs":{$size:3}}]},{$or:[{blk:{$exists:!1}},{"blk.t":{$gt:(new Date).getTime()/1e3-86400}}]}]}},{$addFields:{tradedTokens:{$arrayElemAt:["$slp.detail.outputs",-1]},tradedSatoshis:{$arrayElemAt:["$out",{$subtract:[{$size:"$slp.detail.outputs"},1]}]}}},{$project:{txid:"$tx.h",tokenId:"$slp.detail.tokenIdHex",tradedTokens:{$toDecimal:"$tradedTokens.amount"},tradedSatoshis:"$tradedSatoshis.e.v",slp:"$slp"}},{$group:{_id:"$tokenId",volumeTokens:{$sum:"$tradedTokens"},volumeSatoshis:{$sum:"$tradedSatoshis"},numberOfTrades:{$sum:1},decimals:{$first:"$slp.detail.decimals"}}}]}},t=s.Base64.encode(JSON.stringify(e)),r=yield fetch("https://slpdb.fountainhead.cash/q/"+t),n=yield r.json(),i=o.List.of(n.u,n.c);this._tokenVolumes=i.map(e=>o.Map(e.map(e=>[e._id,{last24h:{numberOfTrades:e.numberOfTrades,volumeSatoshis:new l.default(e.volumeSatoshis),volumeTokens:new l.default(e.volumeTokens)}}]))).reduce((e,t)=>o.Map(o.Set(e.keySeq().concat(t.keySeq())).map(r=>{const n=e.get(r),i=t.get(r);let o=n||i;if(void 0!==n&&void 0!==i&&(o={last24h:{numberOfTrades:n.last24h.numberOfTrades+i.last24h.numberOfTrades,volumeTokens:n.last24h.volumeTokens.plus(i.last24h.volumeTokens),volumeSatoshis:n.last24h.volumeSatoshis.plus(i.last24h.volumeSatoshis)}}),void 0===o)throw"Impossible";return[r,o]})))})}_fetchPrice24h(){return n(this,void 0,void 0,function*(){const e={v:3,q:{db:["c","u"],aggregate:[{$match:{"in.b0":a.LOKAD_ID_BASE64,"in.b1":a.VERSION,"out.e.a":u.defaultNetworkSettings.feeAddressSlp,"slp.valid":!0,$or:[{"slp.detail.outputs":{$size:2}},{"slp.detail.outputs":{$size:3}}],"blk.t":{$lt:(new Date).getTime()/1e3-86400}}},{$sort:{"blk.t":-1}},{$unwind:"$in"},{$match:{"in.b0":a.LOKAD_ID_BASE64,"in.b1":a.VERSION}},{$group:{_id:"$slp.detail.tokenIdHex",price:{$first:"$in.b3"},power:{$first:"$in.b2"},decimals:{$first:"$slp.detail.decimals"}}}]}},t=s.Base64.encode(JSON.stringify(e)),r=yield fetch("https://slpdb.fountainhead.cash/q/"+t),n=yield r.json();this._tokenPrices=o.Map(n.c.map(e=>[e._id,{last24h:{pricePerToken:a.decodePrice(e.decimals,e).pricePerToken}}]))})}_updatePriceIncrease(){this._tokenPriceIncreases=o.Map(o.Set(this._tokenLastTrades.keySeq().concat(this._tokenPrices.keySeq())).map(e=>{const t=this._tokenLastTrades.get(e),r=this._tokenPrices.get(e);return[e,void 0!==t&&void 0!==r?{last24h:{priceIncrease:t.lastTrade.pricePerToken.div(r.last24h.pricePerToken).minus("1")}}:{last24h:{priceIncrease:void 0!==r?new l.default(0):void 0}}]}))}_updateOverview(){this._tokenOverview=o.Map(this._tokenDetails.entrySeq().map(([e,t])=>{const r=this._tokenLastTrades.get(e),n=this._tokenVolumes.get(e),i=this._tokenPrices.get(e),o=this._tokenPriceIncreases.get(e);return[e,{tokenId:e,decimals:t.decimals,name:t.name,symbol:t.symbol,totalNumberOfOpenOffers:r?r.numberOfOpenOffers:0,totalNumberOfClosedOffers:r?r.numberOfClosedOffers:0,totalSupplyToken:new l.default(t.circulatingSupply),marketCapSatoshis:r?r.lastTrade.pricePerToken.times(t.circulatingSupply):void 0,lastTrade:{isAccepted:r?r.lastTrade.isAccepted:void 0,pricePerToken:r?r.lastTrade.pricePerToken:void 0,timestamp:r?r.lastTrade.timestamp:void 0},last24h:{numberOfTrades:n?n.last24h.numberOfTrades:0,volumeSatoshis:n?n.last24h.volumeSatoshis:new l.default(0),volumeTokens:n?n.last24h.volumeTokens:new l.default(0),pricePerToken:i?i.last24h.pricePerToken:void 0,priceIncrease:o?o.last24h.priceIncrease:void 0}}]}))}tokens(e,t,r,n=!1){let i;switch(e){case"totalNumberOfOpenOffers":i=(e=>e.totalNumberOfOpenOffers);break;case"totalNumberOfClosedOffers":i=(e=>e.totalNumberOfClosedOffers);break;case"pricePerToken":i=(e=>e.lastTrade.pricePerToken);break;case"marketCapSatoshis":i=(e=>e.marketCapSatoshis);break;case"volumeTokens":i=(e=>e.last24h.volumeTokens);break;case"volumeSatoshis":i=(e=>e.last24h.volumeSatoshis);break;case"priceIncrease":i=(e=>e.last24h.priceIncrease);break;default:throw"Unknown sort key: "+e}const o=n?1:-1;return this._tokenOverview.valueSeq().sortBy(e=>{const t=i(e);if(void 0!==t)return new l.default(t).times(o).toNumber()}).skip(t).take(r).toList()}}t.MarketOverview=f},vTob:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r("26FU"),i=r("0/uQ"),o=r("t9fZ"),s=r("67Y/"),a=r("Rkdt"),u=r("CcnG"),l=function(){function e(){var e=this;this.marketToken$=new n.a(null),this.marketOverview$=new n.a([]),this.loadMarketOverview=function(t,r){e.marketOverview$.pipe(Object(o.a)(1)).subscribe(function(n){n.length?e.loadMarketOverviewAll(t,r):e.loadMarketOverviewSmartInit(t,r)})},this.loadOffersAndStartListener=function(t){Object(i.a)(a.MarketToken.create(t,a.defaultNetworkSettings)).pipe(Object(o.a)(1)).subscribe(function(t){e.marketTokenRef=t,e.marketToken$.next(e.marketTokenRef),e.startMarketTokenListener()})},this.unsubscribeMarketTokenListener=function(){e.marketTokenRef=null},this.loadMarketOverviewAll=function(t,r){e.loadMarketOverviewQuery().pipe(Object(o.a)(1),Object(s.a)(function(e){return e.tokens(t,0,100,r).toArray()})).subscribe(function(t){e.marketOverview$.next(t)})},this.loadMarketOverviewSmartInit=function(t,r){e.loadMarketOverviewQuery().pipe(Object(o.a)(1),Object(s.a)(function(e){return e.tokens(t,0,20,r).toArray()})).subscribe(function(n){e.marketOverview$.next(n),e.loadMarketOverviewSmartRemaining(t,r,n)})},this.loadMarketOverviewSmartRemaining=function(t,r,n){e.loadMarketOverviewQuery().pipe(Object(o.a)(1),Object(s.a)(function(e){return e.tokens(t,20,80,r).toArray()})).subscribe(function(t){e.marketOverview$.next(n.concat(t))})},this.loadMarketOverviewQuery=function(){return Object(i.a)(a.MarketOverview.create())},this.startMarketTokenListener=function(){e.marketTokenRef.addReceivedOfferListener(function(){e.marketToken$.next(e.marketTokenRef)})}}return Object.defineProperty(e.prototype,"marketToken",{get:function(){return this.marketToken$.asObservable()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"marketOverview",{get:function(){return this.marketOverview$.asObservable()},enumerable:!0,configurable:!0}),e.ngInjectableDef=u.Lb({factory:function(){return new e},token:e,providedIn:"root"}),e}()}}]);