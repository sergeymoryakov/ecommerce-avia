!function(){let e,t;var i,n,r,s,a,o,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};// SET VIEW MODULE:
class u{constructor(){this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight"),// CHECK - WHERE IT HAS TO BE:
// this.docAddBtnNode = document.querySelectorAll(".add-btn");
// this.docUpdateBtnNode = document.querySelectorAll(".updt-btn");
// this.docDeleteBtnNode = document.querySelectorAll(".del-btn");
// For Test - TBS only:
this.testBtnNode=document.getElementById("testBtn")}checkModuleLinkage=()=>{console.log("HELLO, AdminView is connected!")};clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};createHeaderRow=e=>{let t=document.createElement("tr"),i=document.createElement("th");i.classList="db-section__table_cell",t.appendChild(i);let n=document.createElement("th");// create header cells in loop
for(let[i,r]of(n.classList="db-section__table_cell",t.appendChild(n),Object.entries(e))){let e=document.createElement("th");e.classList="db-section__table_cell",e.innerText=`${i}`,t.appendChild(e)}// Add another empty element at the end of the row:
let r=document.createElement("th");return r.classList="db-section__table_cell",t.appendChild(r),t};createDataRow=(e,t)=>{// FOR TBS ONLY:
// console.log("object.id: ", object.id);
// console.log("object.docId: ", object.docId);
let i=document.createElement("tr"),n=document.createElement("td");n.classList="db-section__table_cell";let r=document.createElement("button");r.classList="db-section__table_btn add-btn",r.id=`${t}_${e.docId}_addBtn`,r.innerText="+",n.appendChild(r),i.appendChild(n);let s=document.createElement("td");s.classList="db-section__table_cell";let a=document.createElement("button");for(let[n,r]of(a.classList="db-section__table_btn updt-btn",a.id=`${t}_${e.docId}_updtBtn`,a.innerText="u",s.appendChild(a),i.appendChild(s),Object.entries(e))){// Add table cell element, class and ID:
let s=document.createElement("td");s.classList="db-section__table_cell",s.id=`${t}_${e.docId}_${n}`;let a=document.createElement("input");a.type="text",a.id=`${t}_${e.docId}_${n}_input`,a.value=`${r}`,s.appendChild(a),i.appendChild(s)}// Add another button element to the end of row:
let o=document.createElement("td");o.classList="db-section__table_cell";let l=document.createElement("button");return l.classList="db-section__table_btn del-btn",l.id=`${t}_${e.docId}_delBtn`,l.innerText="-",o.appendChild(l),i.appendChild(o),i};createTable=(e,t)=>{// Create new Table
let i=document.createElement("table"),n=this.createHeaderRow(e[0]);// create Data Rows and add to Table
for(let r of(i.appendChild(n),e)){let e=this.createDataRow(r,t);i.appendChild(e)}return i};renderTable=(e,t)=>{let i=document.createElement("div");i.classList="db-section";let n=document.createElement("h2");n.classList="db-section__title",n.id=`${t}`,n.innerText=t;let r=this.createTable(e,t);r.classList="db-section__table",i.appendChild(n),i.appendChild(r),this.containerLeftNode.appendChild(i)};createMenuBtn=e=>{let t=document.createElement("li");t.classList="menu-btn-wrapper";let i=document.createElement("a");return i.classList="menu-btn",i.href=`#${e}`,i.innerText=`${e}`,t.appendChild(i),t};createMenu=(e,t,i,n,r)=>{// Init menu wrapper:
let s=document.createElement("div");s.classList="menu-section";// Add menu title:
let a=document.createElement("h2");a.classList="menu-title",a.innerText="Tables",s.appendChild(a);// Create menu list:
let o=document.createElement("ul"),l=this.createMenuBtn(i);o.appendChild(l);let u=this.createMenuBtn(e);o.appendChild(u);let h=this.createMenuBtn(r);o.appendChild(h);let c=this.createMenuBtn(n);o.appendChild(c);let d=this.createMenuBtn(t);return o.appendChild(d),// Add menu to wrapper:
s.appendChild(o),s};renderMenu=(e,t,i,n,r)=>{this.clearContainerRight();let s=this.createMenu(e,t,i,n,r);this.containerRightNode.appendChild(s)}}// SET MODEL MODULE:
class h{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, AdminModel is connected!")};// New ID Generator:
generateNewId(e){return[...Array(e)].map(()=>Math.floor(36*Math.random()).toString(36).toUpperCase()).join("")}}// Import the functions you need from the SDKs you need
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var c={},d=c={};function f(){throw Error("setTimeout has not been defined")}function m(){throw Error("clearTimeout has not been defined")}function p(e){if(eV===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((eV===f||!eV)&&setTimeout)return eV=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return eV(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return eV.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return eV.call(this,e,0)}}}!function(){try{eV="function"==typeof setTimeout?setTimeout:f}catch(e){eV=f}try{eU="function"==typeof clearTimeout?clearTimeout:m}catch(e){eU=m}}();var g=[],y=!1,v=-1;function w(){y&&eB&&(y=!1,eB.length?g=eB.concat(g):v=-1,g.length&&b())}function b(){if(!y){var e=p(w);y=!0;for(var t=g.length;t;){for(eB=g,g=[];++v<t;)eB&&eB[v].run();v=-1,t=g.length}eB=null,y=!1,function(e){if(eU===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((eU===m||!eU)&&clearTimeout)return eU=clearTimeout,clearTimeout(e);try{eU(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return eU.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return eU.call(this,e)}}}(e)}}// v8 likes predictible objects
function E(e,t){this.fun=e,this.array=t}function _(){}d.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];g.push(new E(e,t)),1!==g.length||y||p(b)},E.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=_,d.addListener=_,d.once=_,d.off=_,d.removeListener=_,d.removeAllListeners=_,d.emit=_,d.prependListener=_,d.prependOnceListener=_,d.listeners=function(e){return[]},d.binding=function(e){throw Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw Error("process.chdir is not supported")},d.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:(r<2048?t[i++]=r>>6|192:((64512&r)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128):t[i++]=r>>12|224,t[i++]=r>>6&63|128),t[i++]=63&r|128)}return t},I=function(e){// TODO(user): Use native implementations if/when available
let t=[],i=0,n=0;for(;i<e.length;){let r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){// Surrogate Pair
let s=e[i++],a=e[i++],o=e[i++],l=((7&r)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[i++],a=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")},C={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=r>>2,h=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),n.push(i[u],i[h],i[c],i[d])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(T(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):I(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let r=i[e.charAt(t++)],s=t<e.length,a=s?i[e.charAt(t)]:0;++t;let o=t<e.length,l=o?i[e.charAt(t)]:64;++t;let u=t<e.length,h=u?i[e.charAt(t)]:64;if(++t,null==r||null==a||null==l||null==h)throw new S;let c=r<<2|a>>4;if(n.push(c),64!==l){let e=a<<4&240|l>>2;if(n.push(e),64!==h){let e=l<<6&192|h;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */let A=function(e){let t=T(e);return C.encodeByteArray(t,!0)},D=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return A(e).replace(/\./g,"")},N=function(e){try{return C.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},k=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==l)return l;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,L=()=>{if(void 0===c||void 0===c.env)return;let e=void 0;if(e)return JSON.parse(e)},R=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&N(e[1]);return t&&JSON.parse(t)},x=()=>{try{return k()||L()||R()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},P=e=>{var t,i;return null===(i=null===(t=x())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},O=e=>{let t=P(e);if(!t)return;let i=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(i<=0||i+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]},M=()=>{var e;return null===(e=x())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,i))}}}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class V extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */i){super(t),this.code=e,this.customData=i,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,U.prototype.create)}}class U{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(B,(e,t)=>{let n=i[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`,o=new V(n,a,i);return o}}let B=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function j(e,t){if(e===t)return!0;let i=Object.keys(e),n=Object.keys(t);for(let r of i){if(!n.includes(r))return!1;let i=e[r],s=t[r];if(q(i)&&q(s)){if(!j(i,s))return!1}else if(i!==s)return!1}for(let e of n)if(!i.includes(e))return!1;return!0}function q(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class z{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class H{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new F;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:K})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=K){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=K){return this.instances.has(e)}getOptions(e=K){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:i,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);i===r&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var i;let n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);let s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let n of i)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:e===K?void 0:e,options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return i||null}normalizeInstanceIdentifier(e=K){return this.component?this.component.multipleInstances?e:K:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class G{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new H(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */let Q=[];(eF=ej||(ej={}))[eF.DEBUG=0]="DEBUG",eF[eF.VERBOSE=1]="VERBOSE",eF[eF.INFO=2]="INFO",eF[eF.WARN=3]="WARN",eF[eF.ERROR=4]="ERROR",eF[eF.SILENT=5]="SILENT";let W={debug:ej.DEBUG,verbose:ej.VERBOSE,info:ej.INFO,warn:ej.WARN,error:ej.ERROR,silent:ej.SILENT},Y=ej.INFO,X={[ej.DEBUG]:"log",[ej.VERBOSE]:"log",[ej.INFO]:"info",[ej.WARN]:"warn",[ej.ERROR]:"error"},J=(e,t,...i)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),r=X[t];if(r)console[r](`[${n}]  ${e.name}:`,...i);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Z{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=Y,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=J,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */Q.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ej))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?W[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,ej.DEBUG,...e),this._logHandler(this,ej.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ej.VERBOSE,...e),this._logHandler(this,ej.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ej.INFO,...e),this._logHandler(this,ej.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ej.WARN,...e),this._logHandler(this,ej.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ej.ERROR,...e),this._logHandler(this,ej.ERROR,...e)}}let ee=(e,t)=>t.some(t=>e instanceof t),et=new WeakMap,ei=new WeakMap,en=new WeakMap,er=new WeakMap,es=new WeakMap,ea={get(e,t,i){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return ei.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||en.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}// Else transform whatever we get back.
return eo(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eo(i){var n;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(i instanceof IDBRequest)return function(e){let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(eo(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&et.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
es.set(t,e),t}(i);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(er.has(i))return er.get(i);let r="function"==typeof(n=i)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
n.apply(el(this),e),eo(et.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return eo(n.apply(el(this),e))}:function(e,...t){let i=n.call(el(this),e,...t);return en.set(i,e.sort?e.sort():[e]),eo(i)}:(n instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(ei.has(e))return;let t=new Promise((t,i)=>{let n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
ei.set(e,t)}(n),ee(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,ea):n;return r!==i&&(er.set(i,r),es.set(r,i)),r}let el=e=>es.get(e),eu=["get","getKey","getAll","getAllKeys","count"],eh=["put","add","delete","clear"],ec=new Map;function ed(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ec.get(t))return ec.get(t);let i=t.replace(/FromIndex$/,""),n=t!==i,r=eh.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!(r||eu.includes(i)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,r?"readwrite":"readonly"),a=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(a=a.index(t.shift())),(await Promise.all([a[i](...t),r&&s.done]))[0]};return ec.set(t,s),s}ea={...eM=ea,get:(e,t,i)=>ed(e,t)||eM.get(e,t,i),has:(e,t)=>!!ed(e,t)||eM.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let em="@firebase/app",ep="0.9.18",eg=new Z("@firebase/app"),ey="[DEFAULT]",ev={[em]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ew=new Map,eb=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function eE(e){let t=e.name;if(eb.has(t))return eg.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let i of(eb.set(t,e),ew.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(i){eg.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}(i,e);return!0}let e_=new U("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new z("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw e_.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}function eI(e,t={}){let i=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:ey,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw e_.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(r)});if(i||(i=M()),!i)throw e_.create("no-options"/* AppError.NO_OPTIONS */);let s=ew.get(r);if(s){// return the existing app if options and config deep equal the ones in the existing app.
if(j(i,s.options)&&j(n,s.config))return s;throw e_.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:r})}let a=new G(r);for(let e of eb.values())a.addComponent(e);let o=new eT(i,n,a);return ew.set(r,o),o}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function eC(e,t,i){var n;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let r=null!==(n=ev[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);let s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eg.warn(e.join(" "));return}eE(new z(`${r}-version`,()=>({library:r,version:t}),"VERSION"/* ComponentType.VERSION */))}let eS="firebase-heartbeat-store",eA=null;function eD(){return eA||(eA=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){let a=indexedDB.open(e,1),o=eo(a);return n&&a.addEventListener("upgradeneeded",e=>{n(eo(a.result),e.oldVersion,e.newVersion,eo(a.transaction),e)}),i&&a.addEventListener("blocked",e=>i(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eS)}}).catch(e=>{throw e_.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),eA}async function eN(e){try{let t=await eD(),i=await t.transaction(eS).objectStore(eS).get(eL(e));return i}catch(e){if(e instanceof V)eg.warn(e.message);else{let t=e_.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});eg.warn(t.message)}}}async function ek(e,t){try{let i=await eD(),n=i.transaction(eS,"readwrite"),r=n.objectStore(eS);await r.put(t,eL(e)),await n.done}catch(e){if(e instanceof V)eg.warn(e.message);else{let t=e_.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});eg.warn(t.message)}}}function eL(e){return`${e.name}!${e.options.appId}`}class eR{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eP(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),i=ex();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(e=>e.date===i))?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),i=Date.now();return i-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=ex(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let i=[],n=e.slice();for(let r of e){// Look for an existing entry with the same user agent.
let e=i.find(e=>e.agent===r.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(r.date),eO(i)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
i.push({agent:r.agent,dates:[r.date]}),eO(i)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
i.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=D(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=i,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n)}}function ex(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class eP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let i=!0,n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eN(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return ek(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let i=await this._canUseIndexedDBPromise;if(i){let i=await this.read();return ek(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function eO(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return D(JSON.stringify({version:2,heartbeats:e})).length}eE(new z("platform-logger",e=>new ef(e),"PRIVATE"/* ComponentType.PRIVATE */)),eE(new z("heartbeat",e=>new eR(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
eC(em,ep,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
eC(em,ep,"esm2017"),// Register platform SDK identifier (no version).
eC("fire-js",""),eC("firebase","10.3.1","app");var eM,eF,eV,eU,eB,ej,eq,e$="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==l?l:"undefined"!=typeof self?self:{},ez={},eK=eK||{},eH=e$||self;function eG(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function eQ(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function eW(e,t,i){return e.call.apply(e.bind,arguments)}function eY(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function eX(e,t,i){return(eX=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?eW:eY).apply(null,arguments)}function eJ(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function eZ(e,t){function i(){}i.prototype=t.prototype,e.$=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.ac=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function e0(){this.s=this.s,this.o=this.o}e0.prototype.s=!1,e0.prototype.sa=function(){this.s||(this.s=!0,this.N())},e0.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let e1=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return -1};function e2(e){let t=e.length;if(0<t){let i=Array(t);for(let n=0;n<t;n++)i[n]=e[n];return i}return[]}function e9(e,t){for(let t=1;t<arguments.length;t++){let i=arguments[t];if(eG(i)){let t=e.length||0,n=i.length||0;e.length=t+n;for(let r=0;r<n;r++)e[t+r]=i[r]}else e.push(i)}}function e4(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}e4.prototype.h=function(){this.defaultPrevented=!0};var e6=function(){if(!eH.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{eH.addEventListener("test",()=>{},t),eH.removeEventListener("test",()=>{},t)}catch(e){}return e}();function e5(e){return/^[\s\xa0]*$/.test(e)}function e3(){var e=eH.navigator;return e&&(e=e.userAgent)?e:""}function e7(e){return -1!=e3().indexOf(e)}function e8(e){return e8[" "](e),e}e8[" "]=function(){};var te=e7("Opera"),tt=e7("Trident")||e7("MSIE"),ti=e7("Edge"),tn=ti||tt,tr=e7("Gecko")&&!(-1!=e3().toLowerCase().indexOf("webkit")&&!e7("Edge"))&&!(e7("Trident")||e7("MSIE"))&&!e7("Edge"),ts=-1!=e3().toLowerCase().indexOf("webkit")&&!e7("Edge");function ta(){var e=eH.document;return e?e.documentMode:void 0}e:{var to,tl="",tu=(to=e3(),tr?/rv:([^\);]+)(\)|;)/.exec(to):ti?/Edge\/([\d\.]+)/.exec(to):tt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(to):ts?/WebKit\/(\S+)/.exec(to):te?/(?:Version)[ \/]?(\S+)/.exec(to):void 0);if(tu&&(tl=tu?tu[1]:""),tt){var th=ta();if(null!=th&&th>parseFloat(tl)){n=String(th);break e}}n=tl}var tc=eH.document&&tt&&(ta()||parseInt(n,10))||void 0;function td(e,t){if(e4.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(tr){e:{try{e8(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&td.$.h.call(this)}}eZ(td,e4);var tf={2:"touch",3:"pen",4:"mouse"};td.prototype.h=function(){td.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tm="closure_listenable_"+(1e6*Math.random()|0),tp=0;function tg(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.la=r,this.key=++tp,this.fa=this.ia=!1}function ty(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tv(e,t,i){for(let n in e)t.call(i,e[n],n,e)}function tw(e){let t={};for(let i in e)t[i]=e[i];return t}let tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tE(e,t){let i,n;for(let t=1;t<arguments.length;t++){for(i in n=arguments[t])e[i]=n[i];for(let t=0;t<tb.length;t++)i=tb[t],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}function t_(e){this.src=e,this.g={},this.h=0}function tT(e,t){var i=t.type;if(i in e.g){var n,r=e.g[i],s=e1(r,t);(n=0<=s)&&Array.prototype.splice.call(r,s,1),n&&(ty(t),0==e.g[i].length&&(delete e.g[i],e.h--))}}function tI(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!i==s.capture&&s.la==n)return r}return -1}t_.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=tI(e,t,n,r);return -1<a?(t=e[a],i||(t.ia=!1)):((t=new tg(t,this.src,s,!!n,r)).ia=i,e.push(t)),t};var tC="closure_lm_"+(1e6*Math.random()|0),tS={};function tA(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var a=eQ(r)?!!r.capture:!!r,o=tL(e);if(o||(e[tC]=o=new t_(e)),(i=o.add(t,i,n,a,s)).proxy)return i;if(n=function e(t){return tk.call(e.src,e.listener,t)},i.proxy=n,n.src=e,n.listener=i,e.addEventListener)e6||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(tN(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return i}function tD(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[tm])tT(t.i,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(tN(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=tL(t))?(tT(i,e),0==i.h&&(i.src=null,t[tC]=null)):ty(e)}}}function tN(e){return e in tS?tS[e]:tS[e]="on"+e}function tk(e,t){if(e.fa)e=!0;else{t=new td(t,this);var i=e.listener,n=e.la||e.src;e.ia&&tD(e),e=i.call(n,t)}return e}function tL(e){return(e=e[tC])instanceof t_?e:null}var tR="__closure_events_fn_"+(1e9*Math.random()>>>0);function tx(e){return"function"==typeof e?e:(e[tR]||(e[tR]=function(t){return e.handleEvent(t)}),e[tR])}function tP(){e0.call(this),this.i=new t_(this),this.S=this,this.J=null}function tO(e,t){var i,n=e.J;if(n)for(i=[];n;n=n.J)i.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new e4(t,e);else if(t instanceof e4)t.target=t.target||e;else{var r=t;tE(t=new e4(n,e),r)}if(r=!0,i)for(var s=i.length-1;0<=s;s--){var a=t.g=i[s];r=tM(a,n,!0,t)&&r}if(r=tM(a=t.g=e,n,!0,t)&&r,r=tM(a,n,!1,t)&&r,i)for(s=0;s<i.length;s++)r=tM(a=t.g=i[s],n,!1,t)&&r}function tM(e,t,i,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==i){var o=a.listener,l=a.la||a.src;a.ia&&tT(e.i,a),r=!1!==o.call(l,n)&&r}}return r&&!n.defaultPrevented}eZ(tP,e0),tP.prototype[tm]=!0,tP.prototype.removeEventListener=function(e,t,i,n){!function e(t,i,n,r,s){if(Array.isArray(i))for(var a=0;a<i.length;a++)e(t,i[a],n,r,s);else(r=eQ(r)?!!r.capture:!!r,n=tx(n),t&&t[tm])?(t=t.i,(i=String(i).toString())in t.g&&-1<(n=tI(a=t.g[i],n,r,s))&&(ty(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[i],t.h--))):t&&(t=tL(t))&&(i=t.g[i.toString()],t=-1,i&&(t=tI(i,n,r,s)),(n=-1<t?i[t]:null)&&tD(n))}(this,e,t,i,n)},tP.prototype.N=function(){if(tP.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var i=t.g[e],n=0;n<i.length;n++)ty(i[n]);delete t.g[e],t.h--}}this.J=null},tP.prototype.O=function(e,t,i,n){return this.i.add(String(e),t,!1,i,n)},tP.prototype.P=function(e,t,i,n){return this.i.add(String(e),t,!0,i,n)};var tF=eH.JSON.stringify,tV=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tU,e=>e.reset());class tU{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let tB,tj=!1,tq=new class{constructor(){this.h=this.g=null}add(e,t){let i=tV.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}},t$=()=>{let e=eH.Promise.resolve(void 0);tB=()=>{e.then(tz)}};var tz=()=>{let e;for(var t;e=null,tq.g&&(e=tq.g,tq.g=tq.g.next,tq.g||(tq.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){eH.setTimeout(()=>{throw e},0)}(e)}tV.j(t),100>tV.h&&(tV.h++,t.next=tV.g,tV.g=t)}tj=!1};function tK(e,t){tP.call(this),this.h=e||1,this.g=t||eH,this.j=eX(this.qb,this),this.l=Date.now()}function tH(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function tG(e,t,i){if("function"==typeof e)i&&(e=eX(e,i));else if(e&&"function"==typeof e.handleEvent)e=eX(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:eH.setTimeout(e,t||0)}eZ(tK,tP),(eq=tK.prototype).ga=!1,eq.T=null,eq.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tO(this,"tick"),this.ga&&(tH(this),this.start()))}},eq.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eq.N=function(){tK.$.N.call(this),tH(this),delete this.g};class tQ extends e0{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=tG(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let i=t.h;t.h=null,t.m.apply(null,i)}(this)}N(){super.N(),this.g&&(eH.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tW(e){e0.call(this),this.h=e,this.g={}}eZ(tW,e0);var tY=[];function tX(e,t,i,n){Array.isArray(i)||(i&&(tY[0]=i.toString()),i=tY);for(var r=0;r<i.length;r++){var s=function e(t,i,n,r,s){if(r&&r.once)return function e(t,i,n,r,s){if(Array.isArray(i)){for(var a=0;a<i.length;a++)e(t,i[a],n,r,s);return null}return n=tx(n),t&&t[tm]?t.P(i,n,eQ(r)?!!r.capture:!!r,s):tA(t,i,n,!0,r,s)}(t,i,n,r,s);if(Array.isArray(i)){for(var a=0;a<i.length;a++)e(t,i[a],n,r,s);return null}return n=tx(n),t&&t[tm]?t.O(i,n,eQ(r)?!!r.capture:!!r,s):tA(t,i,n,!1,r,s)}(t,i[r],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function tJ(e){tv(e.g,function(e,t){this.g.hasOwnProperty(t)&&tD(e)},e),e.g={}}function tZ(){this.g=!0}function t0(e,t,i,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var i=JSON.parse(t);if(i){for(e=0;e<i.length;e++)if(Array.isArray(i[e])){var n=i[e];if(!(2>n.length)){var r=n[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return tF(i)}catch(e){return t}}(e,i)+(n?" "+n:"")})}tW.prototype.N=function(){tW.$.N.call(this),tJ(this)},tW.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tZ.prototype.Ea=function(){this.g=!1},tZ.prototype.info=function(){};var t1={},t2=null;function t9(){return t2=t2||new tP}function t4(e){e4.call(this,t1.Ta,e)}function t6(e){let t=t9();tO(t,new t4(t))}function t5(e,t){e4.call(this,t1.STAT_EVENT,e),this.stat=t}function t3(e){let t=t9();tO(t,new t5(t,e))}function t7(e,t){e4.call(this,t1.Ua,e),this.size=t}function t8(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return eH.setTimeout(function(){e()},t)}t1.Ta="serverreachability",eZ(t4,e4),t1.STAT_EVENT="statevent",eZ(t5,e4),t1.Ua="timingevent",eZ(t7,e4);var ie={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},it={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ii(){}function ir(e){return e.h||(e.h=e.i())}function is(){}ii.prototype.h=null;var ia={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function io(){e4.call(this,"d")}function il(){e4.call(this,"c")}function iu(){}function ih(e,t,i,n){this.l=e,this.j=t,this.m=i,this.W=n||1,this.U=new tW(this),this.P=id,e=tn?125:void 0,this.V=new tK(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}eZ(io,e4),eZ(il,e4),eZ(iu,ii),iu.prototype.g=function(){return new XMLHttpRequest},iu.prototype.i=function(){return{}},s=new iu;var id=45e3,im={},ip={};function ig(e,t,i){e.L=1,e.v=iP(iN(t)),e.s=i,e.S=!0,iy(e,null)}function iy(e,t){e.G=Date.now(),ib(e),e.A=iN(e.v);var i=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),iG(i.i,"t",n),e.C=0,i=e.l.J,e.h=new ic,e.g=nM(e.l,i?t:null,!e.s),0<e.O&&(e.M=new tQ(eX(e.Pa,e,e.g),e.O)),tX(e.U,e.g,"readystatechange",e.nb),t=e.I?tw(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),t6(),function(e,t,i,n,r,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");a=2<=c.length&&"type"==c[1]?a+(h+"=")+u+"&":a+(h+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+r+"]: "+t+"\n"+i+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function iv(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function iw(e,t,i){let n=!0,r;for(;!e.J&&e.C<i.length;)if((r=function(e,t){var i=e.C,n=t.indexOf("\n",i);return -1==n?ip:isNaN(i=Number(t.substring(i,n)))?im:(n+=1)+i>t.length?ip:(t=t.slice(n,n+i),e.C=n+i,t)}(e,i))==ip){4==t&&(e.o=4,t3(14),n=!1),t0(e.j,e.m,null,"[Incomplete Response]");break}else if(r==im){e.o=4,t3(15),t0(e.j,e.m,i,"[Invalid Chunk]"),n=!1;break}else t0(e.j,e.m,r,null),iC(e,r);iv(e)&&r!=ip&&r!=im&&(e.h.g="",e.C=0),4!=t||0!=i.length||e.h.h||(e.o=1,t3(16),n=!1),e.i=e.i&&n,n?0<i.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+i.length),nD(t),t.M=!0,t3(11))):(t0(e.j,e.m,i,"[Invalid Chunked Response]"),iI(e),iT(e))}function ib(e){e.Y=Date.now()+e.P,iE(e,e.P)}function iE(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=t8(eX(e.lb,e),t)}function i_(e){e.B&&(eH.clearTimeout(e.B),e.B=null)}function iT(e){0==e.l.H||e.J||nL(e.l,e)}function iI(e){i_(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,tH(e.V),tJ(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function iC(e,t){try{var i=e.l;if(0!=i.H&&(i.g==e||i0(i.i,e))){if(!e.K&&i0(i.i,e)&&3==i.H){try{var n=i.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var r=n;if(0==r[0]){e:if(!i.u){if(i.g){if(i.g.G+3e3<e.G)nk(i),nb(i);else break e}nA(i),t3(18)}}else i.Fa=r[1],0<i.Fa-i.V&&37500>r[2]&&i.G&&0==i.A&&!i.v&&(i.v=t8(eX(i.ib,i),6e3));if(1>=iZ(i.i)&&i.oa){try{i.oa()}catch(e){}i.oa=void 0}}else nx(i,11)}else if((e.K||i.g==e)&&nk(i),!e5(t))for(r=i.Ja.g.parse(t),t=0;t<r.length;t++){let o=r[t];if(i.V=o[0],o=o[1],2==i.H){if("c"==o[0]){i.K=o[1],i.pa=o[2];let t=o[3];null!=t&&(i.ra=t,i.l.info("VER="+i.ra));let r=o[4];null!=r&&(i.Ga=r,i.l.info("SVER="+i.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,i.L=n,i.l.info("backChannelRequestTimeoutMs_="+n)),n=i;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(i1(s,s.h),s.h=null))}if(n.F){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,ix(n.I,n.F,e))}}if(i.H=3,i.h&&i.h.Ba(),i.ca&&(i.S=Date.now()-e.G,i.l.info("Handshake RTT: "+i.S+"ms")),(n=i).wa=nO(n,n.J?n.pa:null,n.Y),e.K){i2(n.i,e);var a=n.L;a&&e.setTimeout(a),e.B&&(i_(e),ib(e)),n.g=e}else nS(n);0<i.j.length&&n_(i)}else"stop"!=o[0]&&"close"!=o[0]||nx(i,7)}else 3==i.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nx(i,7):nw(i):"noop"!=o[0]&&i.h&&i.h.Aa(o),i.A=0)}}t6(4)}catch(e){}}function iS(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(eG(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var i=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(eG(e)||"string"==typeof e){var t=[];e=e.length;for(var i=0;i<e;i++)t.push(i);return t}for(let n in t=[],i=0,e)t[i++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(eG(e)){for(var t=[],i=e.length,n=0;n<i;n++)t.push(e[n]);return t}for(n in t=[],i=0,e)t[i++]=e[n];return t}(e),r=n.length,s=0;s<r;s++)t.call(void 0,n[s],i&&i[s],e)}(eq=ih.prototype).setTimeout=function(e){this.P=e},eq.nb=function(e){e=e.target;let t=this.M;t&&3==nf(e)?t.l():this.Pa(e)},eq.Pa=function(e){try{if(e==this.g)e:{let h=nf(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>h)&&(3!=h||tn||this.g&&(this.h.h||this.g.ja()||nm(this.g)))){this.J||4!=h||7==t||(8==t||0>=c?t6(3):t6(2)),i_(this);var i=this.g.da();this.ca=i;t:if(iv(this)){var n=nm(this.g);e="";var r=n.length,s=4==nf(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){iI(this),iT(this);var a="";break t}this.h.i=new eH.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==r-1});n.splice(0,r),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==i,function(e,t,i,n,r,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+r+"]: "+t+"\n"+i+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,h,i),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!e5(o)){var u=o;break t}}u=null}if(i=u)t0(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,iC(this,i);else{this.i=!1,this.o=3,t3(12),iI(this),iT(this);break e}}this.S?(iw(this,h,a),tn&&this.i&&3==h&&(tX(this.U,this.V,"tick",this.mb),this.V.start())):(t0(this.j,this.m,a,null),iC(this,a)),4==h&&iI(this),this.i&&!this.J&&(4==h?nL(this.l,this):(this.i=!1,ib(this)))}else(function(e){let t={};e=(e.g&&2<=nf(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(e5(e[n]))continue;var i=function(e){var t=1;e=e.split(":");let i=[];for(;0<t&&e.length;)i.push(e.shift()),t--;return e.length&&i.push(e.join(":")),i}(e[n]);let r=i[0];if("string"!=typeof(i=i[1]))continue;i=i.trim();let s=t[r]||[];t[r]=s,s.push(i)}!function(e,t){for(let i in e)t.call(void 0,e[i],i,e)}(t,function(e){return e.join(", ")})})(this.g),400==i&&0<a.indexOf("Unknown SID")?(this.o=3,t3(12)):(this.o=0,t3(13)),iI(this),iT(this)}}}catch(e){}finally{}},eq.mb=function(){if(this.g){var e=nf(this.g),t=this.g.ja();this.C<t.length&&(i_(this),iw(this,e,t),this.i&&4!=e&&ib(this))}},eq.cancel=function(){this.J=!0,iI(this)},eq.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(t6(),t3(17)),iI(this),this.o=2,iT(this)):iE(this,this.Y-e)};var iA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iD(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof iD){this.h=e.h,ik(this,e.j),this.s=e.s,this.g=e.g,iL(this,e.m),this.l=e.l;var t=e.i,i=new i$;i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),iR(this,i),this.o=e.o}else e&&(t=String(e).match(iA))?(this.h=!1,ik(this,t[1]||"",!0),this.s=iO(t[2]||""),this.g=iO(t[3]||"",!0),iL(this,t[4]),this.l=iO(t[5]||"",!0),iR(this,t[6]||"",!0),this.o=iO(t[7]||"")):(this.h=!1,this.i=new i$(null,this.h))}function iN(e){return new iD(e)}function ik(e,t,i){e.j=i?iO(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function iL(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function iR(e,t,i){var n,r;t instanceof i$?(e.i=t,n=e.i,(r=e.h)&&!n.j&&(iz(n),n.i=null,n.g.forEach(function(e,t){var i=t.toLowerCase();t!=i&&(iK(this,t),iG(this,i,e))},n)),n.j=r):(i||(t=iM(t,ij)),e.i=new i$(t,e.h))}function ix(e,t,i){e.i.set(t,i)}function iP(e){return ix(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function iO(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function iM(e,t,i){return"string"==typeof e?(e=encodeURI(e).replace(t,iF),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function iF(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}iD.prototype.toString=function(){var e=[],t=this.j;t&&e.push(iM(t,iV,!0),":");var i=this.g;return(i||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(iM(t,iV,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.m)&&e.push(":",String(i))),(i=this.l)&&(this.g&&"/"!=i.charAt(0)&&e.push("/"),e.push(iM(i,"/"==i.charAt(0)?iB:iU,!0))),(i=this.i.toString())&&e.push("?",i),(i=this.o)&&e.push("#",iM(i,iq)),e.join("")};var iV=/[#\/\?@]/g,iU=/[#\?:]/g,iB=/[#\?]/g,ij=/[#\?@]/g,iq=/#/g;function i$(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function iz(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)}))}function iK(e,t){iz(e),t=iQ(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function iH(e,t){return iz(e),t=iQ(e,t),e.g.has(t)}function iG(e,t,i){iK(e,t),0<i.length&&(e.i=null,e.g.set(iQ(e,t),e2(i)),e.h+=i.length)}function iQ(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(eq=i$.prototype).add=function(e,t){iz(this),this.i=null,e=iQ(this,e);var i=this.g.get(e);return i||this.g.set(e,i=[]),i.push(t),this.h+=1,this},eq.forEach=function(e,t){iz(this),this.g.forEach(function(i,n){i.forEach(function(i){e.call(t,i,n,this)},this)},this)},eq.ta=function(){iz(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),i=[];for(let n=0;n<t.length;n++){let r=e[n];for(let e=0;e<r.length;e++)i.push(t[n])}return i},eq.Z=function(e){iz(this);let t=[];if("string"==typeof e)iH(this,e)&&(t=t.concat(this.g.get(iQ(this,e))));else{e=Array.from(this.g.values());for(let i=0;i<e.length;i++)t=t.concat(e[i])}return t},eq.set=function(e,t){return iz(this),this.i=null,iH(this,e=iQ(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},eq.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},eq.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var i=0;i<t.length;i++){var n=t[i];let s=encodeURIComponent(String(n)),a=this.Z(n);for(n=0;n<a.length;n++){var r=s;""!==a[n]&&(r+="="+encodeURIComponent(String(a[n]))),e.push(r)}}return this.i=e.join("&")};var iW=class{constructor(e,t){this.g=e,this.map=t}};function iY(e){this.l=e||iX,e=eH.PerformanceNavigationTiming?0<(e=eH.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(eH.g&&eH.g.Ka&&eH.g.Ka()&&eH.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iX=10;function iJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function iZ(e){return e.h?1:e.g?e.g.size:0}function i0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function i1(e,t){e.g?e.g.add(t):e.h=t}function i2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function i9(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let i of e.g.values())t=t.concat(i.F);return t}return e2(e.i)}iY.prototype.cancel=function(){if(this.i=i9(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var i4=class{stringify(e){return eH.JSON.stringify(e,void 0)}parse(e){return eH.JSON.parse(e,void 0)}};function i6(){this.g=new i4}function i5(e,t,i,n,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(n)}catch(e){}}function i3(e){this.l=e.fc||null,this.j=e.ob||!1}function i7(e,t){tP.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=i8,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}eZ(i3,ii),i3.prototype.g=function(){return new i7(this.l,this.j)},i3.prototype.i=(i={},function(){return i}),eZ(i7,tP);var i8=0;function ne(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function nt(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ni(e)}function ni(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(eq=i7.prototype).open=function(e,t){if(this.readyState!=i8)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ni(this)},eq.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||eH).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},eq.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,nt(this)),this.readyState=i8},eq.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==eH.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ne(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},eq.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?nt(this):ni(this),3==this.readyState&&ne(this)}},eq.Za=function(e){this.g&&(this.response=this.responseText=e,nt(this))},eq.Ya=function(e){this.g&&(this.response=e,nt(this))},eq.ka=function(){this.g&&nt(this)},eq.setRequestHeader=function(e,t){this.v.append(e,t)},eq.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},eq.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var i=t.next();!i.done;)e.push((i=i.value)[0]+": "+i[1]),i=t.next();return e.join("\r\n")},Object.defineProperty(i7.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var nn=eH.JSON.parse;function nr(e){tP.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ns,this.L=this.M=!1}eZ(nr,tP);var ns="",na=/^https?$/i,no=["POST","PUT"];function nl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nu(e),nc(e)}function nu(e){e.F||(e.F=!0,tO(e,"complete"),tO(e,"error"))}function nh(e){if(e.h&&void 0!==eK&&(!e.C[1]||4!=nf(e)||2!=e.da())){if(e.v&&4==nf(e))tG(e.La,0,e);else if(tO(e,"readystatechange"),4==nf(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,i,n=!0;break;default:n=!1}if(!(t=n)){if(i=0===a){var r=String(e.I).match(iA)[1]||null;!r&&eH.self&&eH.self.location&&(r=eH.self.location.protocol.slice(0,-1)),i=!na.test(r?r.toLowerCase():"")}t=i}if(t)tO(e,"complete"),tO(e,"success");else{e.m=6;try{var s=2<nf(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",nu(e)}}finally{nc(e)}}}}function nc(e,t){if(e.g){nd(e);let i=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||tO(e,"ready");try{i.onreadystatechange=n}catch(e){}}}function nd(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(eH.clearTimeout(e.A),e.A=null)}function nf(e){return e.g?e.g.readyState:0}function nm(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case ns:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function np(e){let t="";return tv(e,function(e,i){t+=i+":"+e+"\r\n"}),t}function ng(e,t,i){e:{for(n in i){var n=!1;break e}n=!0}n||(i=np(i),"string"==typeof e?null!=i&&encodeURIComponent(String(i)):ix(e,t,i))}function ny(e,t,i){return i&&i.internalChannelParams&&i.internalChannelParams[e]||t}function nv(e){this.Ga=0,this.j=[],this.l=new tZ,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ny("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ny("baseRetryDelayMs",5e3,e),this.hb=ny("retryDelaySeedMs",1e4,e),this.eb=ny("forwardChannelMaxRetries",2,e),this.xa=ny("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new iY(e&&e.concurrentRequestLimit),this.Ja=new i6,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function nw(e){if(nE(e),3==e.H){var t=e.W++,i=iN(e.I);if(ix(i,"SID",e.K),ix(i,"RID",t),ix(i,"TYPE","terminate"),nI(e,i),(t=new ih(e,e.l,t)).L=2,t.v=iP(iN(i)),i=!1,eH.navigator&&eH.navigator.sendBeacon)try{i=eH.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!i&&eH.Image&&((new Image).src=t.v,i=!0),i||(t.g=nM(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ib(t)}nP(e)}function nb(e){e.g&&(nD(e),e.g.cancel(),e.g=null)}function nE(e){nb(e),e.u&&(eH.clearTimeout(e.u),e.u=null),nk(e),e.i.cancel(),e.m&&("number"==typeof e.m&&eH.clearTimeout(e.m),e.m=null)}function n_(e){if(!iJ(e.i)&&!e.m){e.m=!0;var t=e.Na;tB||t$(),tj||(tB(),tj=!0),tq.add(t,e),e.C=0}}function nT(e,t){var i;i=t?t.m:e.W++;let n=iN(e.I);ix(n,"SID",e.K),ix(n,"RID",i),ix(n,"AID",e.V),nI(e,n),e.o&&e.s&&ng(n,e.o,e.s),i=new ih(e,e.l,i,e.C+1),null===e.o&&(i.I=e.s),t&&(e.j=t.F.concat(e.j)),t=nC(e,i,1e3),i.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),i1(e.i,i),ig(i,n,t)}function nI(e,t){e.na&&tv(e.na,function(e,i){ix(t,i,e)}),e.h&&iS({},function(e,i){ix(t,i,e)})}function nC(e,t,i){i=Math.min(e.j.length,i);var n=e.h?eX(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+i];-1==t?0<i?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<i;a++){let i=r[a].g,o=r[a].map;if(0>(i-=t))t=Math.max(0,r[a].g-100),s=!1;else try{!function(e,t,i){let n=i||"";try{iS(e,function(e,i){let r=e;eQ(e)&&(r=tF(e)),t.push(n+i+"="+encodeURIComponent(r))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+i+"_")}catch(e){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,i),t.F=e,n}function nS(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;tB||t$(),tj||(tB(),tj=!0),tq.add(t,e),e.A=0}}function nA(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=t8(eX(e.Ma,e),nR(e,e.A)),e.A++,!0)}function nD(e){null!=e.B&&(eH.clearTimeout(e.B),e.B=null)}function nN(e){e.g=new ih(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=iN(e.wa);ix(t,"RID","rpc"),ix(t,"SID",e.K),ix(t,"AID",e.V),ix(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ix(t,"TO",e.qa),ix(t,"TYPE","xmlhttp"),nI(e,t),e.o&&e.s&&ng(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var i=e.g;e=e.pa,i.L=1,i.v=iP(iN(t)),i.s=null,i.S=!0,iy(i,e)}function nk(e){null!=e.v&&(eH.clearTimeout(e.v),e.v=null)}function nL(e,t){var i=null;if(e.g==t){nk(e),nD(e),e.g=null;var n=2}else{if(!i0(e.i,t))return;i=t.F,i2(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){i=t.s?t.s.length:0,t=Date.now()-t.G;var r,s=e.C;tO(n=t9(),new t7(n,i)),n_(e)}else nS(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==n&&(r=t,!(iZ(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=t8(eX(e.Na,e,r),nR(e,e.C)),e.C++,!0)))||2==n&&nA(e)))switch(i&&0<i.length&&((t=e.i).i=t.i.concat(i)),s){case 1:nx(e,5);break;case 4:nx(e,10);break;case 3:nx(e,6);break;default:nx(e,2)}}}function nR(e,t){let i=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(i*=2),i*t}function nx(e,t){if(e.l.info("Error code "+t),2==t){var i=null;e.h&&(i=null);var n=eX(e.pb,e);i||(i=new iD("//www.google.com/images/cleardot.gif"),eH.location&&"http"==eH.location.protocol||ik(i,"https"),iP(i)),function(e,t){let i=new tZ;if(eH.Image){let n=new Image;n.onload=eJ(i5,i,n,"TestLoadImage: loaded",!0,t),n.onerror=eJ(i5,i,n,"TestLoadImage: error",!1,t),n.onabort=eJ(i5,i,n,"TestLoadImage: abort",!1,t),n.ontimeout=eJ(i5,i,n,"TestLoadImage: timeout",!1,t),eH.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(i.toString(),n)}else t3(2);e.H=0,e.h&&e.h.za(t),nP(e),nE(e)}function nP(e){if(e.H=0,e.ma=[],e.h){let t=i9(e.i);(0!=t.length||0!=e.j.length)&&(e9(e.ma,t),e9(e.ma,e.j),e.i.i.length=0,e2(e.j),e.j.length=0),e.h.ya()}}function nO(e,t,i){var n=i instanceof iD?iN(i):new iD(i);if(""!=n.g)t&&(n.g=t+"."+n.g),iL(n,n.m);else{var r=eH.location;n=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new iD(null);n&&ik(s,n),t&&(s.g=t),r&&iL(s,r),i&&(s.l=i),n=s}return i=e.F,t=e.Da,i&&t&&ix(n,i,t),ix(n,"VER",e.ra),nI(e,n),n}function nM(e,t,i){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new nr(i&&e.Ha&&!e.va?new i3({ob:!0}):e.va)).Oa(e.J),t}function nF(){}function nV(){if(tt&&!(10<=Number(tc)))throw Error("Environmental error: no available transport.")}function nU(e,t){tP.call(this),this.g=new nv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!e5(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!e5(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new nq(this)}function nB(e){io.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let i in t){e=i;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function nj(){il.call(this),this.status=1}function nq(e){this.g=e}function n$(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nz(e,t,i){i||(i=0);var n=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)n[r]=t.charCodeAt(i++)|t.charCodeAt(i++)<<8|t.charCodeAt(i++)<<16|t.charCodeAt(i++)<<24;else for(r=0;16>r;++r)n[r]=t[i++]|t[i++]<<8|t[i++]<<16|t[i++]<<24;t=e.g[0],i=e.g[1],r=e.g[2];var s=e.g[3],a=t+(s^i&(r^s))+n[0]+3614090360&4294967295;a=s+(r^(t=i+(a<<7&4294967295|a>>>25))&(i^r))+n[1]+3905402710&4294967295,a=r+(i^(s=t+(a<<12&4294967295|a>>>20))&(t^i))+n[2]+606105819&4294967295,a=i+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+n[3]+3250441966&4294967295,a=t+(s^(i=r+(a<<22&4294967295|a>>>10))&(r^s))+n[4]+4118548399&4294967295,a=s+(r^(t=i+(a<<7&4294967295|a>>>25))&(i^r))+n[5]+1200080426&4294967295,a=r+(i^(s=t+(a<<12&4294967295|a>>>20))&(t^i))+n[6]+2821735955&4294967295,a=i+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+n[7]+4249261313&4294967295,a=t+(s^(i=r+(a<<22&4294967295|a>>>10))&(r^s))+n[8]+1770035416&4294967295,a=s+(r^(t=i+(a<<7&4294967295|a>>>25))&(i^r))+n[9]+2336552879&4294967295,a=r+(i^(s=t+(a<<12&4294967295|a>>>20))&(t^i))+n[10]+4294925233&4294967295,a=i+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+n[11]+2304563134&4294967295,a=t+(s^(i=r+(a<<22&4294967295|a>>>10))&(r^s))+n[12]+1804603682&4294967295,a=s+(r^(t=i+(a<<7&4294967295|a>>>25))&(i^r))+n[13]+4254626195&4294967295,a=r+(i^(s=t+(a<<12&4294967295|a>>>20))&(t^i))+n[14]+2792965006&4294967295,a=i+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+n[15]+1236535329&4294967295,i=r+(a<<22&4294967295|a>>>10),a=t+(r^s&(i^r))+n[1]+4129170786&4294967295,t=i+(a<<5&4294967295|a>>>27),a=s+(i^r&(t^i))+n[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^i&(s^t))+n[11]+643717713&4294967295,r=s+(a<<14&4294967295|a>>>18),a=i+(s^t&(r^s))+n[0]+3921069994&4294967295,i=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(i^r))+n[5]+3593408605&4294967295,t=i+(a<<5&4294967295|a>>>27),a=s+(i^r&(t^i))+n[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^i&(s^t))+n[15]+3634488961&4294967295,r=s+(a<<14&4294967295|a>>>18),a=i+(s^t&(r^s))+n[4]+3889429448&4294967295,i=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(i^r))+n[9]+568446438&4294967295,t=i+(a<<5&4294967295|a>>>27),a=s+(i^r&(t^i))+n[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^i&(s^t))+n[3]+4107603335&4294967295,r=s+(a<<14&4294967295|a>>>18),a=i+(s^t&(r^s))+n[8]+1163531501&4294967295,i=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(i^r))+n[13]+2850285829&4294967295,t=i+(a<<5&4294967295|a>>>27),a=s+(i^r&(t^i))+n[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^i&(s^t))+n[7]+1735328473&4294967295,r=s+(a<<14&4294967295|a>>>18),a=i+(s^t&(r^s))+n[12]+2368359562&4294967295,a=t+((i=r+(a<<20&4294967295|a>>>12))^r^s)+n[5]+4294588738&4294967295,a=s+((t=i+(a<<4&4294967295|a>>>28))^i^r)+n[8]+2272392833&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^i)+n[11]+1839030562&4294967295,a=i+((r=s+(a<<16&4294967295|a>>>16))^s^t)+n[14]+4259657740&4294967295,a=t+((i=r+(a<<23&4294967295|a>>>9))^r^s)+n[1]+2763975236&4294967295,a=s+((t=i+(a<<4&4294967295|a>>>28))^i^r)+n[4]+1272893353&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^i)+n[7]+4139469664&4294967295,a=i+((r=s+(a<<16&4294967295|a>>>16))^s^t)+n[10]+3200236656&4294967295,a=t+((i=r+(a<<23&4294967295|a>>>9))^r^s)+n[13]+681279174&4294967295,a=s+((t=i+(a<<4&4294967295|a>>>28))^i^r)+n[0]+3936430074&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^i)+n[3]+3572445317&4294967295,a=i+((r=s+(a<<16&4294967295|a>>>16))^s^t)+n[6]+76029189&4294967295,a=t+((i=r+(a<<23&4294967295|a>>>9))^r^s)+n[9]+3654602809&4294967295,a=s+((t=i+(a<<4&4294967295|a>>>28))^i^r)+n[12]+3873151461&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^i)+n[15]+530742520&4294967295,a=i+((r=s+(a<<16&4294967295|a>>>16))^s^t)+n[2]+3299628645&4294967295,i=r+(a<<23&4294967295|a>>>9),a=t+(r^(i|~s))+n[0]+4096336452&4294967295,t=i+(a<<6&4294967295|a>>>26),a=s+(i^(t|~r))+n[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~i))+n[14]+2878612391&4294967295,r=s+(a<<15&4294967295|a>>>17),a=i+(s^(r|~t))+n[5]+4237533241&4294967295,i=r+(a<<21&4294967295|a>>>11),a=t+(r^(i|~s))+n[12]+1700485571&4294967295,t=i+(a<<6&4294967295|a>>>26),a=s+(i^(t|~r))+n[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~i))+n[10]+4293915773&4294967295,r=s+(a<<15&4294967295|a>>>17),a=i+(s^(r|~t))+n[1]+2240044497&4294967295,i=r+(a<<21&4294967295|a>>>11),a=t+(r^(i|~s))+n[8]+1873313359&4294967295,t=i+(a<<6&4294967295|a>>>26),a=s+(i^(t|~r))+n[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~i))+n[6]+2734768916&4294967295,r=s+(a<<15&4294967295|a>>>17),a=i+(s^(r|~t))+n[13]+1309151649&4294967295,i=r+(a<<21&4294967295|a>>>11),a=t+(r^(i|~s))+n[4]+4149444226&4294967295,t=i+(a<<6&4294967295|a>>>26),a=s+(i^(t|~r))+n[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~i))+n[2]+718787259&4294967295,r=s+(a<<15&4294967295|a>>>17),a=i+(s^(r|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function nK(e,t){this.h=t;for(var i=[],n=!0,r=e.length-1;0<=r;r--){var s=0|e[r];n&&s==t||(i[r]=s,n=!1)}this.g=i}(eq=nr.prototype).Oa=function(e){this.M=e},eq.ha=function(e,t,i,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():s.g(),this.C=this.u?ir(this.u):ir(s),this.g.onreadystatechange=eX(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){nl(this,e);return}if(e=i||"",i=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var r in n)i.set(r,n[r]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())i.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,a]of(n=Array.from(i.keys()).find(e=>"content-type"==e.toLowerCase()),r=eH.FormData&&e instanceof eH.FormData,!(0<=e1(no,t))||n||r||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var a;nd(this),0<this.B&&((this.L=(a=this.g,tt&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=eX(this.ua,this)):this.A=tG(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){nl(this,e)}},eq.ua=function(){void 0!==eK&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tO(this,"timeout"),this.abort(8))},eq.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tO(this,"complete"),tO(this,"abort"),nc(this))},eq.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nc(this,!0)),nr.$.N.call(this)},eq.La=function(){this.s||(this.G||this.v||this.l?nh(this):this.kb())},eq.kb=function(){nh(this)},eq.isActive=function(){return!!this.g},eq.da=function(){try{return 2<nf(this)?this.g.status:-1}catch(e){return -1}},eq.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},eq.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),nn(t)}},eq.Ia=function(){return this.m},eq.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eq=nv.prototype).ra=8,eq.H=1,eq.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new ih(this,this.l,e),s=this.s;if(this.U&&(s?tE(s=tw(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,i=0;i<this.j.length;i++){t:{var n=this.j[i];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=i;break e}if(4096===t||i===this.j.length-1){t=i+1;break e}}t=1e3}else t=1e3;t=nC(this,r,t),ix(i=iN(this.I),"RID",e),ix(i,"CVER",22),this.F&&ix(i,"X-HTTP-Session-Id",this.F),nI(this,i),s&&(this.O?t="headers="+encodeURIComponent(String(np(s)))+"&"+t:this.o&&ng(i,this.o,s)),i1(this.i,r),this.bb&&ix(i,"TYPE","init"),this.P?(ix(i,"$req",t),ix(i,"SID","null"),r.aa=!0,ig(r,i,null)):ig(r,i,t),this.H=2}}else 3==this.H&&(e?nT(this,e):0==this.j.length||iJ(this.i)||nT(this))}},eq.Ma=function(){if(this.u=null,nN(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=t8(eX(this.jb,this),e)}},eq.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,t3(10),nb(this),nN(this))},eq.ib=function(){null!=this.v&&(this.v=null,nb(this),nA(this),t3(19))},eq.pb=function(e){e?(this.l.info("Successfully pinged google.com"),t3(2)):(this.l.info("Failed to ping google.com"),t3(1))},eq.isActive=function(){return!!this.h&&this.h.isActive(this)},(eq=nF.prototype).Ba=function(){},eq.Aa=function(){},eq.za=function(){},eq.ya=function(){},eq.isActive=function(){return!0},eq.Va=function(){},nV.prototype.g=function(e,t){return new nU(e,t)},eZ(nU,tP),nU.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,i=this.h||void 0;t3(0),e.Y=t,e.na=i||{},e.G=e.aa,e.I=nO(e,null,e.Y),n_(e)},nU.prototype.close=function(){nw(this.g)},nU.prototype.u=function(e){var t=this.g;if("string"==typeof e){var i={};i.__data__=e,e=i}else this.v&&((i={}).__data__=tF(e),e=i);t.j.push(new iW(t.fb++,e)),3==t.H&&n_(t)},nU.prototype.N=function(){this.g.h=null,delete this.j,nw(this.g),delete this.g,nU.$.N.call(this)},eZ(nB,io),eZ(nj,il),eZ(nq,nF),nq.prototype.Ba=function(){tO(this.g,"a")},nq.prototype.Aa=function(e){tO(this.g,new nB(e))},nq.prototype.za=function(e){tO(this.g,new nj)},nq.prototype.ya=function(){tO(this.g,"b")},eZ(n$,function(){this.blockSize=-1}),n$.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},n$.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var i=t-this.blockSize,n=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=i;)nz(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[r++]=e.charCodeAt(s++),r==this.blockSize){nz(this,n),r=0;break}}else for(;s<t;)if(n[r++]=e[s++],r==this.blockSize){nz(this,n),r=0;break}}this.h=r,this.i+=t},n$.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var i=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&i,i/=256;for(this.j(e),e=Array(16),t=i=0;4>t;++t)for(var n=0;32>n;n+=8)e[i++]=this.g[t]>>>n&255;return e};var nH={};function nG(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(nH,e)?nH[e]:nH[e]=new nK([0|e],0>e?-1:0):new nK([0|e],0>e?-1:0)}function nQ(e){if(isNaN(e)||!isFinite(e))return nY;if(0>e)return n1(nQ(-e));for(var t=[],i=1,n=0;e>=i;n++)t[n]=e/i|0,i*=nW;return new nK(t,0)}var nW=4294967296,nY=nG(0),nX=nG(1),nJ=nG(16777216);function nZ(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function n0(e){return -1==e.h}function n1(e){for(var t=e.g.length,i=[],n=0;n<t;n++)i[n]=~e.g[n];return new nK(i,~e.h).add(nX)}function n2(e,t){return e.add(n1(t))}function n9(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function n4(e,t){this.g=e,this.h=t}function n6(e,t){if(nZ(t))throw Error("division by zero");if(nZ(e))return new n4(nY,nY);if(n0(e))return t=n6(n1(e),t),new n4(n1(t.g),n1(t.h));if(n0(t))return t=n6(e,n1(t)),new n4(n1(t.g),t.h);if(30<e.g.length){if(n0(e)||n0(t))throw Error("slowDivide_ only works with positive integers.");for(var i=nX,n=t;0>=n.X(e);)i=n5(i),n=n5(n);var r=n3(i,1),s=n3(n,1);for(n=n3(n,2),i=n3(i,2);!nZ(n);){var a=s.add(n);0>=a.X(e)&&(r=r.add(i),s=a),n=n3(n,1),i=n3(i,1)}return t=n2(e,r.R(t)),new n4(r,t)}for(r=nY;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(i=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),a=(s=nQ(i)).R(t);n0(a)||0<a.X(e);)i-=n,a=(s=nQ(i)).R(t);nZ(s)&&(s=nX),r=r.add(s),e=n2(e,a)}return new n4(r,e)}function n5(e){for(var t=e.g.length+1,i=[],n=0;n<t;n++)i[n]=e.D(n)<<1|e.D(n-1)>>>31;return new nK(i,e.h)}function n3(e,t){var i=t>>5;t%=32;for(var n=e.g.length-i,r=[],s=0;s<n;s++)r[s]=0<t?e.D(s+i)>>>t|e.D(s+i+1)<<32-t:e.D(s+i);return new nK(r,e.h)}(eq=nK.prototype).ea=function(){if(n0(this))return-n1(this).ea();for(var e=0,t=1,i=0;i<this.g.length;i++){var n=this.D(i);e+=(0<=n?n:nW+n)*t,t*=nW}return e},eq.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(nZ(this))return"0";if(n0(this))return"-"+n1(this).toString(e);for(var t=nQ(Math.pow(e,6)),i=this,n="";;){var r=n6(i,t).g,s=((0<(i=n2(i,r.R(t))).g.length?i.g[0]:i.h)>>>0).toString(e);if(nZ(i=r))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},eq.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},eq.X=function(e){return n0(e=n2(this,e))?-1:nZ(e)?0:1},eq.abs=function(){return n0(this)?n1(this):this},eq.add=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0,r=0;r<=t;r++){var s=n+(65535&this.D(r))+(65535&e.D(r)),a=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);n=a>>>16,s&=65535,a&=65535,i[r]=a<<16|s}return new nK(i,-2147483648&i[i.length-1]?-1:0)},eq.R=function(e){if(nZ(this)||nZ(e))return nY;if(n0(this))return n0(e)?n1(this).R(n1(e)):n1(n1(this).R(e));if(n0(e))return n1(this.R(n1(e)));if(0>this.X(nJ)&&0>e.X(nJ))return nQ(this.ea()*e.ea());for(var t=this.g.length+e.g.length,i=[],n=0;n<2*t;n++)i[n]=0;for(n=0;n<this.g.length;n++)for(var r=0;r<e.g.length;r++){var s=this.D(n)>>>16,a=65535&this.D(n),o=e.D(r)>>>16,l=65535&e.D(r);i[2*n+2*r]+=a*l,n9(i,2*n+2*r),i[2*n+2*r+1]+=s*l,n9(i,2*n+2*r+1),i[2*n+2*r+1]+=a*o,n9(i,2*n+2*r+1),i[2*n+2*r+2]+=s*o,n9(i,2*n+2*r+2)}for(n=0;n<t;n++)i[n]=i[2*n+1]<<16|i[2*n];for(n=t;n<2*t;n++)i[n]=0;return new nK(i,0)},eq.gb=function(e){return n6(this,e).h},eq.and=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)&e.D(n);return new nK(i,this.h&e.h)},eq.or=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)|e.D(n);return new nK(i,this.h|e.h)},eq.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),i=[],n=0;n<t;n++)i[n]=this.D(n)^e.D(n);return new nK(i,this.h^e.h)},nV.prototype.createWebChannel=nV.prototype.g,nU.prototype.send=nU.prototype.u,nU.prototype.open=nU.prototype.m,nU.prototype.close=nU.prototype.close,ie.NO_ERROR=0,ie.TIMEOUT=8,ie.HTTP_ERROR=6,it.COMPLETE="complete",is.EventType=ia,ia.OPEN="a",ia.CLOSE="b",ia.ERROR="c",ia.MESSAGE="d",tP.prototype.listen=tP.prototype.O,nr.prototype.listenOnce=nr.prototype.P,nr.prototype.getLastError=nr.prototype.Sa,nr.prototype.getLastErrorCode=nr.prototype.Ia,nr.prototype.getStatus=nr.prototype.da,nr.prototype.getResponseJson=nr.prototype.Wa,nr.prototype.getResponseText=nr.prototype.ja,nr.prototype.send=nr.prototype.ha,nr.prototype.setWithCredentials=nr.prototype.Oa,n$.prototype.digest=n$.prototype.l,n$.prototype.reset=n$.prototype.reset,n$.prototype.update=n$.prototype.j,nK.prototype.add=nK.prototype.add,nK.prototype.multiply=nK.prototype.R,nK.prototype.modulo=nK.prototype.gb,nK.prototype.compare=nK.prototype.X,nK.prototype.toNumber=nK.prototype.ea,nK.prototype.toString=nK.prototype.toString,nK.prototype.getBits=nK.prototype.D,nK.fromNumber=nQ,nK.fromString=function e(t,i){if(0==t.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==t.charAt(0))return n1(e(t.substring(1),i));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nQ(Math.pow(i,8)),r=nY,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),i);8>a?(a=nQ(Math.pow(i,a)),r=r.R(a).add(nQ(o))):r=(r=r.R(n)).add(nQ(o))}return r};var n7=ez.createWebChannelTransport=function(){return new nV},n8=ez.getStatEventTarget=function(){return t9()},re=ez.ErrorCode=ie,rt=ez.EventType=it,ri=ez.Event=t1,rn=ez.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};ez.FetchXmlHttpFactory=i3;var rr=ez.WebChannel=is,rs=ez.XhrIo=nr,ra=ez.Md5=n$,ro=ez.Integer=nK;let rl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */class ru{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}/** A user with a null UID. */ru.UNAUTHENTICATED=new ru(null),// non-FirebaseAuth providers.
ru.GOOGLE_CREDENTIALS=new ru("google-credentials-uid"),ru.FIRST_PARTY=new ru("first-party-uid"),ru.MOCK_USER=new ru("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh="10.3.1",rc=new Z("@firebase/firestore");// Helper methods are needed because variables can't be exported as read/write
function rd(){return rc.logLevel}function rf(e,...t){if(rc.logLevel<=ej.DEBUG){let i=t.map(rg);rc.debug(`Firestore (${rh}): ${e}`,...i)}}function rm(e,...t){if(rc.logLevel<=ej.ERROR){let i=t.map(rg);rc.error(`Firestore (${rh}): ${e}`,...i)}}/**
 * @internal
 */function rp(e,...t){if(rc.logLevel<=ej.WARN){let i=t.map(rg);rc.warn(`Firestore (${rh}): ${e}`,...i)}}/**
 * Converts an additional log parameter to a string representation.
 */function rg(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Formats an object as a JSON string, suitable for logging. */return JSON.stringify(e)}catch(t){// Converting to JSON failed, just log the object directly
return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */function ry(e="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t=`FIRESTORE (${rh}) INTERNAL ASSERTION FAILED: `+e;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw rm(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv={// Causes are copied from:
// https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
/** Not an error; returned on success. */OK:"ok",/** The operation was cancelled (typically by the caller). */CANCELLED:"cancelled",/** Unknown error or an error from a different error domain. */UNKNOWN:"unknown",/**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */INVALID_ARGUMENT:"invalid-argument",/**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */DEADLINE_EXCEEDED:"deadline-exceeded",/** Some requested entity (e.g., file or directory) was not found. */NOT_FOUND:"not-found",/**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */ALREADY_EXISTS:"already-exists",/**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */PERMISSION_DENIED:"permission-denied",/**
     * The request does not have valid authentication credentials for the
     * operation.
     */UNAUTHENTICATED:"unauthenticated",/**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */RESOURCE_EXHAUSTED:"resource-exhausted",/**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */FAILED_PRECONDITION:"failed-precondition",/**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */ABORTED:"aborted",/**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */OUT_OF_RANGE:"out-of-range",/** Operation is not implemented or not supported/enabled in this service. */UNIMPLEMENTED:"unimplemented",/**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */INTERNAL:"internal",/**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */UNAVAILABLE:"unavailable",/** Unrecoverable data loss or corruption. */DATA_LOSS:"data-loss"};/** An error returned by a Firestore operation. */class rw extends V{/** @hideconstructor */constructor(/**
     * The backend error code associated with this error.
     */e,/**
     * A custom error description.
     */t){super(e,t),this.code=e,this.message=t,// class and so inheritance does not work correctly. We could alternatively
// do the same "back-door inheritance" trick that FirebaseError does.
this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class r_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){// Fire with initial user.
e.enqueueRetryable(()=>t(ru.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class rT{constructor(e){this.token=e,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rI{constructor(e){this.t=e,/** Tracks the current User. */this.currentUser=ru.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i,n=e=>this.i!==i?(i=this.i,t(e)):Promise.resolve(),r=new rb;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new rb,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{rf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(rf("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new rb)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==e?(rf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||ry(),new rE(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||ry(),new ru(e)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class rC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=ru.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class rS{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new rC(this.l,this.h,this.P))}start(e,t){// Fire with initial uid.
e.enqueueRetryable(()=>t(ru.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let i=e=>{null!=e.error&&rf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let i=e.token!==this.R;return this.R=e.token,rf("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>i(t))};let n=e=>{rf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):rf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||ry(),this.R=e.token,new rA(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{static V(){// Alphanumeric characters
let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,i="";for(;i.length<20;){let n=/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */function(e){// Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),i=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(i);else for(let t=0;t<e;t++)i[t]=Math.floor(256*Math.random());return i}(40);for(let r=0;r<n.length;++r)// be evenly mapped to indices of `chars` via a modulo operation.
i.length<20&&n[r]<t&&(i+=e.charAt(n[r]%e.length))}return i}}function rk(e,t){return e<t?-1:e>t?1:0}/** Helper to compare arrays using isEqual(). */function rL(e,t,i){return e.length===t.length&&e.every((e,n)=>i(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */class rR{/**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */constructor(/**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */e,/**
     * The fractions of a second at nanosecond resolution.*
     */t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new rw(rv.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new rw(rv.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}/**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */static now(){return rR.fromMillis(Date.now())}/**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */static fromDate(e){return rR.fromMillis(e.getTime())}/**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */static fromMillis(e){let t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new rR(t,i)}/**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */toDate(){return new Date(this.toMillis())}/**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rk(this.nanoseconds,e.nanoseconds):rk(this.seconds,e.seconds)}/**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}/** Returns a textual representation of this `Timestamp`. */toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}/** Returns a JSON-serializable representation of this `Timestamp`. */toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}/**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */valueOf(){// This method returns a string of the form <seconds>.<nanoseconds> where
// <seconds> is translated to have a non-negative value and both <seconds>
// and <nanoseconds> are left-padded with zeroes to be a consistent length.
// Strings with this format then have a lexiographical ordering that matches
// the expected ordering. The <seconds> translation is done to avoid having
// a leading negative sign (i.e. a leading '-' character) in its string
// representation, which would affect its lexiographical ordering.
let e=this.seconds- -62135596800;// Note: Up to 12 decimal digits are required to represent all valid
// 'seconds' values.
return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */class rx{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rx(e)}static min(){return new rx(new rR(0,0))}static max(){return new rx(new rR(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}/** Returns a number representation of the version for use in spec tests. */toMicroseconds(){// Convert to microseconds.
return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Path represents an ordered sequence of string segments.
 */class rP{constructor(e,t,i){void 0===t?t=0:t>e.length&&ry(),void 0===i?i=e.length-t:i>e.length-t&&ry(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return 0===rP.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rP?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let i=Math.min(e.length,t.length);for(let n=0;n<i;n++){let i=e.get(n),r=t.get(n);if(i<r)return -1;if(i>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class rO extends rP{construct(e,t,i){return new rO(e,t,i)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...e){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let t=[];for(let i of e){if(i.indexOf("//")>=0)throw new rw(rv.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);// Strip leading and traling slashed.
t.push(...i.split("/").filter(e=>e.length>0))}return new rO(t)}static emptyPath(){return new rO([])}}let rM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */class rF extends rP{construct(e,t,i){return new rF(e,t,i)}/**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */static isValidIdentifier(e){return rM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rF.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}/**
     * Returns true if this field references the key of a document.
     */isKeyField(){return 1===this.length&&"__name__"===this.get(0)}/**
     * The field designating the key of a document.
     */static keyField(){return new rF(["__name__"])}/**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */static fromServerFormat(e){let t=[],i="",n=0,r=()=>{if(0===i.length)throw new rw(rv.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new rw(rv.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new rw(rv.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=t,n+=2}else"`"===t?s=!s:"."!==t||s?i+=t:r(),n++}if(r(),s)throw new rw(rv.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rF(t)}static emptyPath(){return new rF([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @internal
 */class rV{constructor(e){this.path=e}static fromPath(e){return new rV(rO.fromString(e))}static fromName(e){return new rV(rO.fromString(e).popFirst(5))}static empty(){return new rV(rO.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rO.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rO.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(e){return new rV(new rO(e.slice()))}}/**
 * Stores the latest read time, document and batch ID that were processed for an
 * index.
 */class rU{constructor(/**
     * The latest read time version that has been indexed by Firestore for this
     * field index.
     */e,/**
     * The key of the last document that was indexed for this query. Use
     * `DocumentKey.empty()` if no document has been indexed.
     */t,/*
     * The largest mutation batch id that's been processed by Firestore.
     */i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}/** Returns an offset that sorts before all regular offsets. */static min(){return new rU(rx.min(),rV.empty(),-1)}/** Returns an offset that sorts after all regular offsets. */static max(){return new rU(rx.max(),rV.empty(),-1)}}/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */class rB{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */async function rj(e){if(e.code!==rv.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;rf("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */class rq{constructor(e){// NOTE: next/catchCallback will always point to our own wrapper functions,
// not the user's raw next() or catch() callbacks.
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,// chaining.
this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&// value should be defined unless T is Void, but we can't express
// that in the type system.
this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ry(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rq((i,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(i,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(i,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rq?t:rq.resolve(t)}catch(e){return rq.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rq.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rq.reject(t)}static resolve(e){return new rq((t,i)=>{t(e)})}static reject(e){return new rq((t,i)=>{i(e)})}static waitFor(// eslint-disable-next-line @typescript-eslint/no-explicit-any
e){return new rq((t,i)=>{let n=0,r=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++r,s&&r===n&&t()},e=>i(e))}),s=!0,r===n&&t()})}/**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */static or(e){let t=rq.resolve(!1);for(let i of e)t=t.next(e=>e?rq.resolve(e):i());return t}static forEach(e,t){let i=[];return e.forEach((e,n)=>{i.push(t.call(this,e,n))}),this.waitFor(i)}/**
     * Concurrently map all array elements through asynchronous function.
     */static mapArray(e,t){return new rq((i,n)=>{let r=e.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===r&&i(s)},e=>n(e))}})}/**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */static doWhile(e,t){return new rq((i,n)=>{let r=()=>{!0===e()?t().next(()=>{r()},n):i()};r()})}}/** Verifies whether `e` is an IndexedDbTransactionError. */function r$(e){// Use name equality, as instanceof checks on errors don't work with errors
// that wrap other errors.
return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */class rz{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}/** Returns whether the value represents -0. */function rK(e){// Detect if the value is -0.0. Based on polyfill from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rH(e){let t=0;for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&t++;return t}function rG(e,t){for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&t(i,e[i])}function rQ(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rz.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class rW{constructor(e,t){this.comparator=e,this.root=t||rX.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(e,t){return new rW(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rX.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(e){return new rW(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rX.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(e){let t=this.root;for(;!t.isEmpty();){let i=this.comparator(e,t.key);if(0===i)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(e){// Number of nodes that were pruned when descending right
let t=0,i=this.root;for(;!i.isEmpty();){let n=this.comparator(e,i.key);if(0===n)return t+i.left.size;n<0?i=i.left:(t+=i.left.size+1,i=i.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){let e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.root.reverseTraversal(e)}// Returns an iterator over the SortedMap.
getIterator(){return new rY(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rY(this.root,e,this.comparator,!1)}getReverseIterator(){return new rY(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rY(this.root,e,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class rY{constructor(e,t,i,n){this.isReverse=n,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&n&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(e);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class rX{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:rX.RED,this.left=null!=n?n:rX.EMPTY,this.right=null!=r?r:rX.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(e,t,i,n,r){return new rX(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
// for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}// Traverses the tree in reverse key order and calls the specified action
// function for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}// Returns the minimum node in the tree.
min(){return this.left.isEmpty()?this:this.left.min()}// Returns the maximum key in the tree.
minKey(){return this.min().key}// Returns the maximum key in the tree.
maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}// Returns new tree, with the key/value added.
insert(e,t,i){let n=this,r=i(e,n.key);return(n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i))).fixUp()}removeMin(){if(this.left.isEmpty())return rX.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(e,t){let i,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return rX.EMPTY;i=n.right.min(),n=n.copy(i.key,i.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rX.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rX.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}// For testing.
checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ry();let e=this.left.check();if(e!==this.right.check())throw ry();return e+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
rX.EMPTY=null,rX.RED=!0,rX.BLACK=!1,// end LLRBEmptyNode
rX.EMPTY=new class{constructor(){this.size=0}get key(){throw ry()}get value(){throw ry()}get color(){throw ry()}get left(){throw ry()}get right(){throw ry()}// Returns a copy of the current node.
copy(e,t,i,n,r){return this}// Returns a copy of the tree, with the specified key/value added.
insert(e,t,i){return new rX(e,t)}// Returns a copy of the tree, with the specified key removed.
remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}// For testing.
checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */class rJ{constructor(e){this.comparator=e,this.data=new rW(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}/** Iterates elements in order defined by "comparator" */forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(e,t){let i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){let n=i.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(e,t){let i;for(i=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rZ(this.data.getIterator())}getIteratorFrom(e){return new rZ(this.data.getIteratorFrom(e))}/** Inserts or updates an element */add(e){return this.copy(this.data.remove(e).insert(e,!0))}/** Deletes an element */delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;// Make sure `result` always refers to the larger one of the two sets.
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rJ)||this.size!==e.size)return!1;let t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rJ(this.comparator);return t.data=e,t}}class rZ{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */class r0{constructor(e){this.fields=e,// Sort the field mask to support `FieldMask.isEqual()` and assert below.
e.sort(rF.comparator)}static empty(){return new r0([])}/**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */unionWith(e){let t=new rJ(rF.comparator);for(let e of this.fields)t=t.add(e);for(let i of e)t=t.add(i);return new r0(t.toArray())}/**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rL(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An error encountered while decoding base64 string.
 */class r1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */class r2{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&e instanceof DOMException?new r1("Invalid base64 string: "+e):e}}(e);return new r2(t)}static fromUint8Array(e){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let t=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(e){let t="";for(let i=0;i<e.length;++i)t+=String.fromCharCode(e[i]);return t}(e);return new r2(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rk(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}r2.EMPTY_BYTE_STRING=new r2("");let r9=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */function r4(e){// The json interface (for the browser) will return an iso timestamp string,
// while the proto js library (for node) will return a
// google.protobuf.Timestamp instance.
if(e||ry(),"string"==typeof e){// The date string can have higher precision (nanos) than the Date class
// (millis), so we do some custom parsing here.
// Parse the nanos right out of the string.
let t=0,i=r9.exec(e);if(i||ry(),i[1]){// Pad the fraction out to 9 digits (nanos).
let e=i[1];t=Number(e=(e+"000000000").substr(0,9))}// Parse the date to get the seconds.
let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:r6(e.seconds),nanos:r6(e.nanos)}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function r6(e){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof e?e:"string"==typeof e?Number(e):0}/** Converts the possible Proto types for Blobs into a ByteString. */function r5(e){return"string"==typeof e?r2.fromBase64String(e):r2.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */function r3(e){var t,i;return"server_timestamp"===(null===(i=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===i?void 0:i.stringValue)}/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 *//**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */function r7(e){let t=e.mapValue.fields.__previous_value__;return r3(t)?r7(t):t}/**
 * Returns the local time at which this timestamp was first set.
 */function r8(e){let t=r4(e.mapValue.fields.__local_write_time__.timestampValue);return new rR(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param longPollingOptions Options that configure long-polling.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */constructor(e,t,i,n,r,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=n,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class st{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new st("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof st&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};/** Extracts the backend's type order for the provided value. */function sn(e){return"nullValue"in e?0/* TypeOrder.NullValue */:"booleanValue"in e?1/* TypeOrder.BooleanValue */:"integerValue"in e||"doubleValue"in e?2/* TypeOrder.NumberValue */:"timestampValue"in e?3/* TypeOrder.TimestampValue */:"stringValue"in e?5/* TypeOrder.StringValue */:"bytesValue"in e?6/* TypeOrder.BlobValue */:"referenceValue"in e?7/* TypeOrder.RefValue */:"geoPointValue"in e?8/* TypeOrder.GeoPointValue */:"arrayValue"in e?9/* TypeOrder.ArrayValue */:"mapValue"in e?r3(e)?4/* TypeOrder.ServerTimestampValue */:sp(e)?9007199254740991/* TypeOrder.MaxValue */:10/* TypeOrder.ObjectValue */:ry()}/** Tests `left` and `right` for equality based on the backend semantics. */function sr(e,t){if(e===t)return!0;let i=sn(e);if(i!==sn(t))return!1;switch(i){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return!0;case 1/* TypeOrder.BooleanValue */:return e.booleanValue===t.booleanValue;case 4/* TypeOrder.ServerTimestampValue */:return r8(e).isEqual(r8(t));case 3/* TypeOrder.TimestampValue */:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let i=r4(e.timestampValue),n=r4(t.timestampValue);return i.seconds===n.seconds&&i.nanos===n.nanos}(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue===t.stringValue;case 6/* TypeOrder.BlobValue */:return r5(e.bytesValue).isEqual(r5(t.bytesValue));case 7/* TypeOrder.RefValue */:return e.referenceValue===t.referenceValue;case 8/* TypeOrder.GeoPointValue */:return r6(e.geoPointValue.latitude)===r6(t.geoPointValue.latitude)&&r6(e.geoPointValue.longitude)===r6(t.geoPointValue.longitude);case 2/* TypeOrder.NumberValue */:return function(e,t){if("integerValue"in e&&"integerValue"in t)return r6(e.integerValue)===r6(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let i=r6(e.doubleValue),n=r6(t.doubleValue);return i===n?rK(i)===rK(n):isNaN(i)&&isNaN(n)}return!1}(e,t);case 9/* TypeOrder.ArrayValue */:return rL(e.arrayValue.values||[],t.arrayValue.values||[],sr);case 10/* TypeOrder.ObjectValue */:return function(e,t){let i=e.mapValue.fields||{},n=t.mapValue.fields||{};if(rH(i)!==rH(n))return!1;for(let e in i)if(i.hasOwnProperty(e)&&(void 0===n[e]||!sr(i[e],n[e])))return!1;return!0}(e,t);default:return ry()}}function ss(e,t){return void 0!==(e.values||[]).find(e=>sr(e,t))}function sa(e,t){if(e===t)return 0;let i=sn(e),n=sn(t);if(i!==n)return rk(i,n);switch(i){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return 0;case 1/* TypeOrder.BooleanValue */:return rk(e.booleanValue,t.booleanValue);case 2/* TypeOrder.NumberValue */:return function(e,t){let i=r6(e.integerValue||e.doubleValue),n=r6(t.integerValue||t.doubleValue);return i<n?-1:i>n?1:i===n?0:isNaN(i)?isNaN(n)?0:-1:1}(e,t);case 3/* TypeOrder.TimestampValue */:return so(e.timestampValue,t.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return so(r8(e),r8(t));case 5/* TypeOrder.StringValue */:return rk(e.stringValue,t.stringValue);case 6/* TypeOrder.BlobValue */:return function(e,t){let i=r5(e),n=r5(t);return i.compareTo(n)}(e.bytesValue,t.bytesValue);case 7/* TypeOrder.RefValue */:return function(e,t){let i=e.split("/"),n=t.split("/");for(let e=0;e<i.length&&e<n.length;e++){let t=rk(i[e],n[e]);if(0!==t)return t}return rk(i.length,n.length)}(e.referenceValue,t.referenceValue);case 8/* TypeOrder.GeoPointValue */:return function(e,t){let i=rk(r6(e.latitude),r6(t.latitude));return 0!==i?i:rk(r6(e.longitude),r6(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9/* TypeOrder.ArrayValue */:return function(e,t){let i=e.values||[],n=t.values||[];for(let e=0;e<i.length&&e<n.length;++e){let t=sa(i[e],n[e]);if(t)return t}return rk(i.length,n.length)}(e.arrayValue,t.arrayValue);case 10/* TypeOrder.ObjectValue */:return function(e,t){if(e===si.mapValue&&t===si.mapValue)return 0;if(e===si.mapValue)return 1;if(t===si.mapValue)return -1;let i=e.fields||{},n=Object.keys(i),r=t.fields||{},s=Object.keys(r);// Even though MapValues are likely sorted correctly based on their insertion
// order (e.g. when received from the backend), local modifications can bring
// elements out of order. We need to re-sort the elements to ensure that
// canonical IDs are independent of insertion order.
n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=rk(n[e],s[e]);if(0!==t)return t;let a=sa(i[n[e]],r[s[e]]);if(0!==a)return a}return rk(n.length,s.length)}(e.mapValue,t.mapValue);default:throw ry()}}function so(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return rk(e,t);let i=r4(e),n=r4(t),r=rk(i.seconds,n.seconds);return 0!==r?r:rk(i.nanos,n.nanos)}function sl(e){var t,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=r4(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?r5(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,rV.fromName(t).toString()):"geoPointValue"in e?(i=e.geoPointValue,`geo(${i.latitude},${i.longitude})`):"arrayValue"in e?function(e){let t="[",i=!0;for(let n of e.values||[])i?i=!1:t+=",",t+=sl(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){// Iteration order in JavaScript is not guaranteed. To ensure that we generate
// matching canonical IDs for identical maps, we need to sort the keys.
let t=Object.keys(e.fields||{}).sort(),i="{",n=!0;for(let r of t)n?n=!1:i+=",",i+=`${r}:${sl(e.fields[r])}`;return i+"}"}(e.mapValue):ry()}/** Returns true if `value` is an IntegerValue . */function su(e){return!!e&&"integerValue"in e}/** Returns true if `value` is a DoubleValue. *//** Returns true if `value` is an ArrayValue. */function sh(e){return!!e&&"arrayValue"in e}/** Returns true if `value` is a NullValue. */function sc(e){return!!e&&"nullValue"in e}/** Returns true if `value` is NaN. */function sd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}/** Returns true if `value` is a MapValue. */function sf(e){return!!e&&"mapValue"in e}/** Creates a deep copy of `source`. */function sm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rG(e.mapValue.fields,(e,i)=>t.mapValue.fields[e]=sm(i)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let i=0;i<(e.arrayValue.values||[]).length;++i)t.arrayValue.values[i]=sm(e.arrayValue.values[i]);return t}return Object.assign({},e)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */function sp(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */class sg{constructor(e){this.value=e}static empty(){return new sg({mapValue:{}})}/**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(!sf(t=(t.mapValue.fields||{})[e.get(i)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}/**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sm(t)}/**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */setAll(e){let t=rF.emptyPath(),i={},n=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){// Insert the accumulated changes at this parent location
let e=this.getFieldsMap(t);this.applyChanges(e,i,n),i={},n=[],t=r.popLast()}e?i[r.lastSegment()]=sm(e):n.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,i,n)}/**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */delete(e){let t=this.field(e.popLast());sf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}/**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let n=t.mapValue.fields[e.get(i)];sf(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=n),t=n}return t.mapValue.fields}/**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */applyChanges(e,t,i){for(let n of(rG(t,(t,i)=>e[t]=i),i))delete e[n]}clone(){return new sg(sm(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */class sy{constructor(e,t,i,n,r,s,a){this.key=e,this.documentType=t,this.version=i,this.readTime=n,this.createTime=r,this.data=s,this.documentState=a}/**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */static newInvalidDocument(e){return new sy(e,0/* DocumentType.INVALID */,/* version */rx.min(),/* readTime */rx.min(),/* createTime */rx.min(),sg.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */static newFoundDocument(e,t,i,n){return new sy(e,1/* DocumentType.FOUND_DOCUMENT */,/* version */t,/* readTime */rx.min(),/* createTime */i,n,0/* DocumentState.SYNCED */)}/** Creates a new document that is known to not exist at the given version. */static newNoDocument(e,t){return new sy(e,2/* DocumentType.NO_DOCUMENT */,/* version */t,/* readTime */rx.min(),/* createTime */rx.min(),sg.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */static newUnknownDocument(e,t){return new sy(e,3/* DocumentType.UNKNOWN_DOCUMENT */,/* version */t,/* readTime */rx.min(),/* createTime */rx.min(),sg.empty(),2/* DocumentState.HAS_COMMITTED_MUTATIONS */)}/**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */convertToFoundDocument(e,t){// If a document is switching state from being an invalid or deleted
// document to a valid (FOUND_DOCUMENT) document, either due to receiving an
// update from Watch or due to applying a local set mutation on top
// of a deleted document, our best guess about its createTime would be the
// version at which the document transitioned to a FOUND_DOCUMENT.
return this.createTime.isEqual(rx.min())&&(2/* DocumentType.NO_DOCUMENT */===this.documentType||0/* DocumentType.INVALID */===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1/* DocumentType.FOUND_DOCUMENT */,this.data=t,this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */convertToNoDocument(e){return this.version=e,this.documentType=2/* DocumentType.NO_DOCUMENT */,this.data=sg.empty(),this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */convertToUnknownDocument(e){return this.version=e,this.documentType=3/* DocumentType.UNKNOWN_DOCUMENT */,this.data=sg.empty(),this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasCommittedMutations(){return this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasLocalMutations(){return this.documentState=1/* DocumentState.HAS_LOCAL_MUTATIONS */,this.version=rx.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1/* DocumentState.HAS_LOCAL_MUTATIONS */===this.documentState}get hasCommittedMutations(){return 2/* DocumentState.HAS_COMMITTED_MUTATIONS */===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0/* DocumentType.INVALID */!==this.documentType}isFoundDocument(){return 1/* DocumentType.FOUND_DOCUMENT */===this.documentType}isNoDocument(){return 2/* DocumentType.NO_DOCUMENT */===this.documentType}isUnknownDocument(){return 3/* DocumentType.UNKNOWN_DOCUMENT */===this.documentType}isEqual(e){return e instanceof sy&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sy(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */class sv{constructor(e,t){this.position=e,this.inclusive=t}}function sw(e,t,i){let n=0;for(let r=0;r<e.position.length;r++){let s=t[r],a=e.position[r];if(n=s.field.isKeyField()?rV.comparator(rV.fromName(a.referenceValue),i.key):sa(a,i.data.field(s.field)),"desc"/* Direction.DESCENDING */===s.dir&&(n*=-1),0!==n)break}return n}/**
 * Returns true if a document sorts after a bound using the provided sort
 * order.
 */function sb(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let i=0;i<e.position.length;i++)if(!sr(e.position[i],t.position[i]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */class sE{constructor(e,t="asc"/* Direction.ASCENDING */){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{}class sT extends s_{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t,i){return e.isKeyField()?"in"/* Operator.IN */===t||"not-in"/* Operator.NOT_IN */===t?this.createKeyFieldInFilter(e,t,i):new sA(e,t,i):"array-contains"/* Operator.ARRAY_CONTAINS */===t?new sL(e,i):"in"/* Operator.IN */===t?new sR(e,i):"not-in"/* Operator.NOT_IN */===t?new sx(e,i):"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===t?new sP(e,i):new sT(e,t,i)}static createKeyFieldInFilter(e,t,i){return"in"/* Operator.IN */===t?new sD(e,i):new sN(e,i)}matches(e){let t=e.data.field(this.field);// Types do not have to match in NOT_EQUAL filters.
return"!="/* Operator.NOT_EQUAL */===this.op?null!==t&&this.matchesComparison(sa(t,this.value)):null!==t&&sn(this.value)===sn(t)&&this.matchesComparison(sa(t,this.value));// Only compare types with matching backend order (such as double and int).
}matchesComparison(e){switch(this.op){case"<"/* Operator.LESS_THAN */:return e<0;case"<="/* Operator.LESS_THAN_OR_EQUAL */:return e<=0;case"=="/* Operator.EQUAL */:return 0===e;case"!="/* Operator.NOT_EQUAL */:return 0!==e;case">"/* Operator.GREATER_THAN */:return e>0;case">="/* Operator.GREATER_THAN_OR_EQUAL */:return e>=0;default:return ry()}}isInequality(){return["<"/* Operator.LESS_THAN */,"<="/* Operator.LESS_THAN_OR_EQUAL */,">"/* Operator.GREATER_THAN */,">="/* Operator.GREATER_THAN_OR_EQUAL */,"!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class sI extends s_{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t){return new sI(e,t)}matches(e){return sC(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}// Returns a mutable copy of `this.filters`
getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}// Performs a depth-first search to find and return the first FieldFilter in the composite filter
// that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
// predicate.
le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function sC(e){return"and"/* CompositeOperator.AND */===e.op}/**
 * Returns true if this filter does not contain any composite filters. Returns false otherwise.
 */function sS(e){for(let t of e.filters)if(t instanceof sI)return!1;return!0}class sA extends sT{constructor(e,t,i){super(e,t,i),this.key=rV.fromName(i.referenceValue)}matches(e){let t=rV.comparator(e.key,this.key);return this.matchesComparison(t)}}/** Filter that matches on key fields within an array. */class sD extends sT{constructor(e,t){super(e,"in"/* Operator.IN */,t),this.keys=sk("in"/* Operator.IN */,t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}/** Filter that matches on key fields not present within an array. */class sN extends sT{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t),this.keys=sk("not-in"/* Operator.NOT_IN */,t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sk(e,t){var i;return((null===(i=t.arrayValue)||void 0===i?void 0:i.values)||[]).map(e=>rV.fromName(e.referenceValue))}/** A Filter that implements the array-contains operator. */class sL extends sT{constructor(e,t){super(e,"array-contains"/* Operator.ARRAY_CONTAINS */,t)}matches(e){let t=e.data.field(this.field);return sh(t)&&ss(t.arrayValue,this.value)}}/** A Filter that implements the IN operator. */class sR extends sT{constructor(e,t){super(e,"in"/* Operator.IN */,t)}matches(e){let t=e.data.field(this.field);return null!==t&&ss(this.value.arrayValue,t)}}/** A Filter that implements the not-in operator. */class sx extends sT{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t)}matches(e){if(ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ss(this.value.arrayValue,t)}}/** A Filter that implements the array-contains-any operator. */class sP extends sT{constructor(e,t){super(e,"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,t)}matches(e){let t=e.data.field(this.field);return!(!sh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ss(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Visible for testing
class sO{constructor(e,t=null,i=[],n=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=n,this.limit=r,this.startAt=s,this.endAt=a,this.he=null}}/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */function sM(e,t=null,i=[],n=[],r=null,s=null,a=null){return new sO(e,t,i,n,r,s,a)}function sF(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof sT)// the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.canonicalString()+t.op.toString()+sl(t.value);if(sS(t)&&sC(t))// In the new SDK versions, the developer may use an explicit AND filter.
    // To stay consistent with the old usages, we add a special case to ensure
    // the canonical ID for these two are the same. For example:
    // `col.whereEquals("a", 1).whereEquals("b", 2)` should have the same
    // canonical ID as `col.where(and(equals("a",1), equals("b",2)))`.
    return t.filters.map(t=>e(t)).join(",");{// filter instanceof CompositeFilter
    let i=t.filters.map(t=>e(t)).join(",");return`${t.op}(${i})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>sl(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>sl(e)).join(",")),e.he=t}return e.he}function sV(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var i,n;if(i=e.orderBy[r],n=t.orderBy[r],!(i.dir===n.dir&&i.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(!function e(t,i){return t instanceof sT?i instanceof sT&&t.op===i.op&&t.field.isEqual(i.field)&&sr(t.value,i.value):t instanceof sI?i instanceof sI&&t.op===i.op&&t.filters.length===i.filters.length&&t.filters.reduce((t,n,r)=>t&&e(n,i.filters[r]),!0):void ry()}(e.filters[i],t.filters[i]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sb(e.startAt,t.startAt)&&sb(e.endAt,t.endAt)}function sU(e){return rV.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/** Returns the number of segments of a perfect index for this target. *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */class sB{/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */constructor(e,t=null,i=[],n=[],r=null,s="F"/* LimitType.First */,a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=n,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,// non-aggregate queries.
this.Ie=null,// aggregate queries. Unlike targets for non-aggregate queries,
// aggregate query targets do not contain normalized order-bys, they only
// contain explicit order-bys.
this.de=null,this.startAt,this.endAt}}/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 *//**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */function sj(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}/**
 * Returns the normalized order-by constraint that is used to execute the Query,
 * which can be different from the order-by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`). The normalized order-by
 * includes implicit order-bys in addition to the explicit user provided
 * order-bys.
 */function sq(e){if(null===e.Pe){e.Pe=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),i=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===i)// inequality filter field for it to be a valid query.
// Note that the default inequality field and key ordering is ascending.
t.isKeyField()||e.Pe.push(new sE(t)),e.Pe.push(new sE(rF.keyField(),"asc"/* Direction.ASCENDING */));else{let t=!1;for(let i of e.explicitOrderBy)e.Pe.push(i),i.field.isKeyField()&&(t=!0);if(!t){// The order of the implicit key ordering always matches the last
// explicit order-by
let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc"/* Direction.ASCENDING */;e.Pe.push(new sE(rF.keyField(),t))}}}return e.Pe}/**
 * Converts this `Query` instance to its corresponding `Target` representation.
 */function s$(e){return e.Ie||(e.Ie=/**
 * Converts this `Query` instance to its corresponding `Target` representation,
 * for use within an aggregate query. Unlike targets for non-aggregate queries,
 * aggregate query targets do not contain normalized order-bys, they only
 * contain explicit order-bys.
 */function(e,t){if("F"/* LimitType.First */===e.limitType)return sM(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{// Flip the orderBy directions since we want the last results
t=t.map(e=>{let t="desc"/* Direction.DESCENDING */===e.dir?"asc"/* Direction.ASCENDING */:"desc"/* Direction.DESCENDING */;return new sE(e.field,t)});// We need to swap the cursors to match the now-flipped query ordering.
let i=e.endAt?new sv(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new sv(e.startAt.position,e.startAt.inclusive):null;// Now return as a LimitType.First query.
return sM(e.path,e.collectionGroup,t,e.filters,e.limit,i,n)}}(e,sq(e))),e.Ie}function sz(e,t,i){return new sB(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,i,e.startAt,e.endAt)}function sK(e,t){return sV(s$(e),s$(t))&&e.limitType===t.limitType}// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function sH(e){return`${sF(s$(e))}|lt:${e.limitType}`}function sG(e){var t;let i;return`Query(target=${i=(t=s$(e)).path.canonicalString(),null!==t.collectionGroup&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(e=>/** Returns a debug description for `filter`. */(function e(t){return t instanceof sT?`${t.field.canonicalString()} ${t.op} ${sl(t.value)}`:t instanceof sI?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(i+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>sl(e)).join(",")),t.endAt&&(i+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>sl(e)).join(",")),`Target(${i})`}; limitType=${e.limitType})`}/** Returns whether `doc` matches the constraints of `query`. */function sQ(e,t){return t.isFoundDocument()&&function(e,t){let i=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(i):rV.isDocumentKey(e.path)?e.path.isEqual(i):e.path.isImmediateParentOf(i)}(e,t)&&function(e,t){// We must use `queryNormalizedOrderBy()` to get the list of all orderBys (both implicit and explicit).
// Note that for OR queries, orderBy applies to all disjunction terms and implicit orderBys must
// be taken into account. For example, the query "a > 1 || b==1" has an implicit "orderBy a" due
// to the inequality, and is evaluated as "a > 1 orderBy a || b==1 orderBy a".
// A document with content of {b:1} matches the filters, but does not match the orderBy because
// it's missing the field 'a'.
for(let i of sq(e))if(!i.field.isKeyField()&&null===t.data.field(i.field))return!1;return!0}(e,t)&&function(e,t){for(let i of e.filters)if(!i.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */function(e,t,i){let n=sw(e,t,i);return e.inclusive?n<=0:n<0}(e.startAt,sq(e),t))&&(!e.endAt||!!function(e,t,i){let n=sw(e,t,i);return e.inclusive?n>=0:n>0}(e.endAt,sq(e),t))}/**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */function sW(e){return(t,i)=>{let n=!1;for(let r of sq(e)){let e=function(e,t,i){let n=e.field.isKeyField()?rV.comparator(t.key,i.key):function(e,t,i){let n=t.data.field(e),r=i.data.field(e);return null!==n&&null!==r?sa(n,r):ry()}(e.field,t,i);switch(e.dir){case"asc"/* Direction.ASCENDING */:return n;case"desc"/* Direction.DESCENDING */:return -1*n;default:return ry()}}(r,t,i);if(0!==e)return e;n=n||r.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */class sY{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,/**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */this.inner={},/** The number of entries stored in the map */this.innerSize=0}/** Get a value for this key, or undefined if it does not exist. */get(e){let t=this.mapKeyFn(e),i=this.inner[t];if(void 0!==i){for(let[t,n]of i)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}/** Put this key and value in the map. */set(e,t){let i=this.mapKeyFn(e),n=this.inner[i];if(void 0===n)return this.inner[i]=[[e,t]],void this.innerSize++;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return void(n[i]=[e,t]);n.push([e,t]),this.innerSize++}/**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */delete(e){let t=this.mapKeyFn(e),i=this.inner[t];if(void 0===i)return!1;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return 1===i.length?delete this.inner[t]:i.splice(n,1),this.innerSize--,!0;return!1}forEach(e){rG(this.inner,(t,i)=>{for(let[t,n]of i)e(t,n)})}isEmpty(){return rQ(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sX=new rW(rV.comparator),sJ=new rW(rV.comparator);function sZ(...e){let t=sJ;for(let i of e)t=t.insert(i.key,i);return t}function s0(e){let t=sJ;return e.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function s1(){return new sY(e=>e.toString(),(e,t)=>e.isEqual(t))}let s2=new rW(rV.comparator),s9=new rJ(rV.comparator);function s4(...e){let t=s9;for(let i of e)t=t.add(i);return t}let s6=new rJ(rk);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */function s5(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rK(t)?"-0":t}}/**
 * Returns an IntegerValue for `value`.
 */function s3(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Used to represent a field transform on a mutation. */class s7{constructor(){// Make sure that the structural type of `TransformOperation` is unique.
// See https://github.com/microsoft/TypeScript/issues/5451
this._=void 0}}/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */function s8(e,t){return e instanceof as?/** Returns true if `value` is either an IntegerValue or a DoubleValue. */su(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}/** Transforms a value into a server-generated timestamp. */class ae extends s7{}/** Transforms an array value via a union operation. */class at extends s7{constructor(e){super(),this.elements=e}}function ai(e,t){let i=ao(t);for(let t of e.elements)i.some(e=>sr(e,t))||i.push(t);return{arrayValue:{values:i}}}/** Transforms an array value via a remove operation. */class an extends s7{constructor(e){super(),this.elements=e}}function ar(e,t){let i=ao(t);for(let t of e.elements)i=i.filter(e=>!sr(e,t));return{arrayValue:{values:i}}}/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */class as extends s7{constructor(e,t){super(),this.serializer=e,this.Te=t}}function aa(e){return r6(e.integerValue||e.doubleValue)}function ao(e){return sh(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/** The result of successfully applying a mutation to the backend. */class al{constructor(/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */e,/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */t){this.version=e,this.transformResults=t}}/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */class au{constructor(e,t){this.updateTime=e,this.exists=t}/** Creates a new empty Precondition. */static none(){return new au}/** Creates a new Precondition with an exists flag. */static exists(e){return new au(void 0,e)}/** Creates a new Precondition based on a version a document exists at. */static updateTime(e){return new au(e)}/** Returns whether this Precondition is empty. */get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}/** Returns true if the preconditions is valid for the given document. */function ah(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */class ac{}/**
 * A utility method to calculate a `Mutation` representing the overlay from the
 * final state of the document, and a `FieldMask` representing the fields that
 * are mutated by the local mutations.
 */function ad(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;// mask is null when sets or deletes are applied to the current document.
if(null===t)return e.isNoDocument()?new ab(e.key,au.none()):new ap(e.key,e.data,au.none());{let i=e.data,n=sg.empty(),r=new rJ(rF.comparator);for(let e of t.fields)if(!r.has(e)){let t=i.field(e);// If we are deleting a nested field, we take the immediate parent as
// the mask used to construct the resulting mutation.
// Justification: Nested fields can create parent fields implicitly. If
// only a leaf entry is deleted in later mutations, the parent field
// should still remain, but we may have lost this information.
// Consider mutation (foo.bar 1), then mutation (foo.bar delete()).
// This leaves the final result (foo, {}). Despite the fact that `doc`
// has the correct result, `foo` is not in `mask`, and the resulting
// mutation would miss `foo`.
null===t&&e.length>1&&(e=e.popLast(),t=i.field(e)),null===t?n.delete(e):n.set(e,t),r=r.add(e)}return new ag(e.key,n,new r0(r.toArray()),au.none())}}/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param previousMask - The fields that have been updated before applying this mutation.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns A `FieldMask` representing the fields that are changed by applying this mutation.
 */function af(e,t,i,n){return e instanceof ap?function(e,t,i,n){if(!ah(e.precondition,t))// caused a name collision).
return i;let r=e.value.clone(),s=aw(e.fieldTransforms,n,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null;// SetMutation overwrites all fields.
}(e,t,i,n):e instanceof ag?function(e,t,i,n){if(!ah(e.precondition,t))return i;let r=aw(e.fieldTransforms,n,t),s=t.data;return(s.setAll(ay(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===i)?null:i.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,i,n):ah(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):i}function am(e,t){var i,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(i=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===i&&void 0===n||!(!i||!n)&&rL(i,n,(e,t)=>{var i,n;return e.field.isEqual(t.field)&&(i=e.transform,n=t.transform,i instanceof at&&n instanceof at||i instanceof an&&n instanceof an?rL(i.elements,n.elements,sr):i instanceof as&&n instanceof as?sr(i.Te,n.Te):i instanceof ae&&n instanceof ae)})))&&(0/* MutationType.Set */===e.type?e.value.isEqual(t.value):1/* MutationType.Patch */!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */class ap extends ac{constructor(e,t,i,n=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=n,this.type=0/* MutationType.Set */}getFieldMask(){return null}}class ag extends ac{constructor(e,t,i,n,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=n,this.fieldTransforms=r,this.type=1/* MutationType.Patch */}getFieldMask(){return this.fieldMask}}function ay(e){let t=new Map;return e.fieldMask.fields.forEach(i=>{if(!i.isEmpty()){let n=e.data.field(i);t.set(i,n)}}),t}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */function av(e,t,i){var n;let r=new Map;e.length===i.length||ry();for(let s=0;s<i.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(n=i[s],o instanceof at?ai(o,l):o instanceof an?ar(o,l):n))}return r}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The document to apply transforms on.
 * @returns The transform results list.
 */function aw(e,t,i){let n=new Map;for(let r of e){let e=r.transform,s=i.data.field(r.field);n.set(r.field,e instanceof ae?function(e,t){let i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};// We should avoid storing deeply nested server timestamp map values
// because we never use the intermediate "previous values".
// For example:
// previous: 42L, add: t1, result: t1 -> 42L
// previous: t1,  add: t2, result: t2 -> 42L (NOT t2 -> t1 -> 42L)
// previous: t2,  add: t3, result: t3 -> 42L (NOT t3 -> t2 -> t1 -> 42L)
// `getPreviousValue` recursively traverses server timestamps to find the
// least recent Value.
return t&&r3(t)&&(t=r7(t)),t&&(i.fields.__previous_value__=t),{mapValue:i}}(t,s):e instanceof at?ai(e,s):e instanceof an?ar(e,s):function(e,t){// PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
// precision and resolves overflows by reducing precision, we do not
// manually cap overflows at 2^63.
let i=s8(e,t),n=aa(i)+aa(e.Te);return su(i)&&su(e.Te)?s3(n):s5(e.serializer,n)}(e,s))}return n}/** A mutation that deletes the document at the given key. */class ab extends ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2/* MutationType.Delete */,this.fieldTransforms=[]}getFieldMask(){return null}}class aE extends ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3/* MutationType.Verify */,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A batch of mutations that will be sent as one unit to the backend.
 */class a_{/**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */constructor(e,t,i,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=n}/**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */applyToRemoteDocument(e,t){let i=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var n;n=i[t],r instanceof ap?function(e,t,i){// Unlike setMutationApplyToLocalView, if we're applying a mutation to a
// remote document the server has accepted the mutation so the precondition
// must have held.
let n=e.value.clone(),r=av(e.fieldTransforms,t,i.transformResults);n.setAll(r),t.convertToFoundDocument(i.version,n).setHasCommittedMutations()}(r,e,n):r instanceof ag?function(e,t,i){if(!ah(e.precondition,t))// matched on the backend. We therefore must not have the expected version
// of the document in our cache and convert to an UnknownDocument with a
// known updateTime.
return void t.convertToUnknownDocument(i.version);let n=av(e.fieldTransforms,t,i.transformResults),r=t.data;r.setAll(ay(e)),r.setAll(n),t.convertToFoundDocument(i.version,r).setHasCommittedMutations()}(r,e,n):function(e,t,i){// Unlike applyToLocalView, if we're applying a mutation to a remote
// document the server has accepted the mutation so the precondition must
// have held.
t.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}}}/**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */applyToLocalView(e,t){// First, apply the base state. This allows us to apply non-idempotent
// transform against a consistent set of values.
for(let i of this.baseMutations)i.key.isEqual(e.key)&&(t=af(i,e,t,this.localWriteTime));// Second, apply all user-provided mutations.
for(let i of this.mutations)i.key.isEqual(e.key)&&(t=af(i,e,t,this.localWriteTime));return t}/**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */applyToLocalDocumentSet(e,t){// TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
// directly (as done in `applyToLocalView()`), we can reduce the complexity
// to O(n).
let i=s1();return this.mutations.forEach(n=>{let r=e.get(n.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields);// Set mutatedFields to null if the document is only from local mutations.
// This creates a Set or Delete mutation, instead of trying to create a
// patch mutation as the overlay.
a=t.has(n.key)?null:a;let o=ad(s,a);null!==o&&i.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(rx.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),s4())}isEqual(e){return this.batchId===e.batchId&&rL(this.mutations,e.mutations,(e,t)=>am(e,t))&&rL(this.baseMutations,e.baseMutations,(e,t)=>am(e,t))}}/** The result of applying a mutation batch to the backend. */class aT{constructor(e,t,i,/**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */n){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=n}/**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */static from(e,t,i){e.mutations.length===i.length||ry();let n=s2,r=e.mutations;for(let e=0;e<r.length;e++)n=n.insert(r[e].key,i[e].version);return new aT(e,t,i,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */class aI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 *//**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */function aS(e){if(void 0===e)// to send invalid proto messages) we may get an error with no GRPC code.
return rm("GRPC error has no .code"),rv.UNKNOWN;switch(e){case a.OK:return rv.OK;case a.CANCELLED:return rv.CANCELLED;case a.UNKNOWN:return rv.UNKNOWN;case a.DEADLINE_EXCEEDED:return rv.DEADLINE_EXCEEDED;case a.RESOURCE_EXHAUSTED:return rv.RESOURCE_EXHAUSTED;case a.INTERNAL:return rv.INTERNAL;case a.UNAVAILABLE:return rv.UNAVAILABLE;case a.UNAUTHENTICATED:return rv.UNAUTHENTICATED;case a.INVALID_ARGUMENT:return rv.INVALID_ARGUMENT;case a.NOT_FOUND:return rv.NOT_FOUND;case a.ALREADY_EXISTS:return rv.ALREADY_EXISTS;case a.PERMISSION_DENIED:return rv.PERMISSION_DENIED;case a.FAILED_PRECONDITION:return rv.FAILED_PRECONDITION;case a.ABORTED:return rv.ABORTED;case a.OUT_OF_RANGE:return rv.OUT_OF_RANGE;case a.UNIMPLEMENTED:return rv.UNIMPLEMENTED;case a.DATA_LOSS:return rv.DATA_LOSS;default:return ry()}}/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(o=a||(a={}))[o.OK=0]="OK",o[o.CANCELLED=1]="CANCELLED",o[o.UNKNOWN=2]="UNKNOWN",o[o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",o[o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",o[o.NOT_FOUND=5]="NOT_FOUND",o[o.ALREADY_EXISTS=6]="ALREADY_EXISTS",o[o.PERMISSION_DENIED=7]="PERMISSION_DENIED",o[o.UNAUTHENTICATED=16]="UNAUTHENTICATED",o[o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",o[o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",o[o.ABORTED=10]="ABORTED",o[o.OUT_OF_RANGE=11]="OUT_OF_RANGE",o[o.UNIMPLEMENTED=12]="UNIMPLEMENTED",o[o.INTERNAL=13]="INTERNAL",o[o.UNAVAILABLE=14]="UNAVAILABLE",o[o.DATA_LOSS=15]="DATA_LOSS";/**
 * An instance of the Platform's 'TextDecoder' implementation.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aA=new ro([4294967295,4294967295],0);// Hash a string using md5 hashing algorithm.
function aD(e){let t=(new TextEncoder).encode(e),i=new ra;return i.update(t),new Uint8Array(i.digest())}// Interpret the 16 bytes array as two 64-bit unsigned integers, encoded using
// 2’s complement using little endian.
function aN(e){let t=new DataView(e.buffer),i=t.getUint32(0,/* littleEndian= */!0),n=t.getUint32(4,/* littleEndian= */!0),r=t.getUint32(8,/* littleEndian= */!0),s=t.getUint32(12,/* littleEndian= */!0);return[new ro([i,n],0),new ro([r,s],0)]}class ak{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new aL(`Invalid padding: ${t}`);if(i<0||e.length>0&&0===this.hashCount)throw new aL(`Invalid hash count: ${i}`);if(0===e.length&&0!==t)throw new aL(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=ro.fromNumber(this.Ae)}// Calculate the ith hash value based on the hashed 64bit integers,
// and calculate its corresponding bit index in the bitmap to be checked.
Ve(e,t,i){// Calculate hashed value h(i) = h1 + (i * h2).
let n=e.add(t.multiply(ro.fromNumber(i)));// Wrap if hash value overflow 64bit.
return 1===n.compare(aA)&&(n=new ro([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Re).toNumber()}// Return whether the bit on the given index in the bitmap is set to 1.
me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){// Empty bitmap should always return false on membership check.
if(0===this.Ae)return!1;let t=aD(e),[i,n]=aN(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(i,n,e);if(!this.me(t))return!1}return!0}/** Create bloom filter for testing purposes only. */static create(e,t,i){let n=new Uint8Array(Math.ceil(e/8)),r=new ak(n,e%8==0?0:8-e%8,t);return i.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ae)return;let t=aD(e),[i,n]=aN(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(i,n,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class aL extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An event from the RemoteStore. It is split into targetChanges (changes to the
 * state or the set of documents in our watched targets) and documentUpdates
 * (changes to the actual documents).
 */class aR{constructor(/**
     * The snapshot version this event brings us up to, or MIN if not set.
     */e,/**
     * A map from target to changes to the target. See TargetChange.
     */t,/**
     * A map of targets that is known to be inconsistent, and the purpose for
     * re-listening. Listens for these targets should be re-established without
     * resume tokens.
     */i,/**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */n,/**
     * A set of which document updates are due only to limbo resolution targets.
     */r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=n,this.resolvedLimboDocuments=r}/**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */// PORTING NOTE: Multi-tab only
static createSynthesizedRemoteEventForCurrentChange(e,t,i){let n=new Map;return n.set(e,ax.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new aR(rx.min(),n,new rW(rk),sX,s4())}}/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */class ax{constructor(/**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */e,/**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */t,/**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */i,/**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */n,/**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=n,this.removedDocuments=r}/**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ax(i,t,s4(),s4(),s4())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a changed document and a list of target ids to which this change
 * applies.
 *
 * If document has been deleted NoDocument will be provided.
 */class aP{constructor(/** The new document applies to all of these targets. */e,/** The new document is removed from all of these targets. */t,/** The key of the document for this change. */i,/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */n){this.ge=e,this.removedTargetIds=t,this.key=i,this.pe=n}}class aO{constructor(e,t){this.targetId=e,this.ye=t}}class aM{constructor(/** What kind of change occurred to the watch target. */e,/** The target IDs that were added/removed/set. */t,/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */i=r2.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=n}}/** Tracks the internal state of a Watch target. */class aF{constructor(){/**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */this.we=0,/**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */this.Se=aB(),/** See public getters for explanations of these fields. */this.be=r2.EMPTY_BYTE_STRING,this.De=!1,/**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */this.Ce=!0}/**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */get current(){return this.De}/** The last resume token sent to us for this target. */get resumeToken(){return this.be}/** Whether this target has pending target adds or target removes. */get ve(){return 0!==this.we}/** Whether we have modified any state that should trigger a snapshot. */get Fe(){return this.Ce}/**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}/**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */xe(){let e=s4(),t=s4(),i=s4();return this.Se.forEach((n,r)=>{switch(r){case 0/* ChangeType.Added */:e=e.add(n);break;case 2/* ChangeType.Modified */:t=t.add(n);break;case 1/* ChangeType.Removed */:i=i.add(n);break;default:ry()}}),new ax(this.be,this.De,e,t,i)}/**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */Oe(){this.Ce=!1,this.Se=aB()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */class aV{constructor(e){this.Qe=e,/** The internal state of all tracked targets. */this.Ke=new Map,/** Keeps track of the documents to update since the last raised snapshot. */this.$e=sX,/** A mapping of document keys to their set of target IDs. */this.Ue=aU(),/**
         * A map of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */this.We=new rW(rk)}/**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}/** Processes and adds the WatchTargetChange to the current set of changes. */He(e){this.forEachTarget(e,t=>{let i=this.Je(t);switch(e.state){case 0/* WatchTargetChangeState.NoChange */:this.Ye(t)&&i.Me(e.resumeToken);break;case 1/* WatchTargetChangeState.Added */:// We need to decrement the number of pending acks needed from watch
// for this targetId.
i.ke(),i.ve||// We have a freshly added target, so we need to reset any state
// that we had previously. This can happen e.g. when remove and add
// back a target for existence filter mismatches.
i.Oe(),i.Me(e.resumeToken);break;case 2/* WatchTargetChangeState.Removed */:// We need to keep track of removed targets to we can post-filter and
// remove any target changes.
// We need to decrement the number of pending acks needed from watch
// for this targetId.
i.ke(),i.ve||this.removeTarget(t);break;case 3/* WatchTargetChangeState.Current */:this.Ye(t)&&(i.qe(),i.Me(e.resumeToken));break;case 4/* WatchTargetChangeState.Reset */:this.Ye(t)&&// Reset the target and synthesizes removes for all existing
// documents. The backend will re-add any documents that still
// match the target before it sends the next global snapshot.
(this.Ze(t),i.Me(e.resumeToken));break;default:ry()}})}/**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,i)=>{this.Ye(i)&&t(i)})}/**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */Xe(e){let t=e.targetId,i=e.ye.count,n=this.et(t);if(n){let r=n.target;if(sU(r)){if(0===i){// The existence filter told us the document does not exist. We deduce
// that this document does not exist and apply a deleted document to
// our updates. Without applying this deleted document there might be
// another query that will raise this document as part of a snapshot
// until it is resolved, essentially exposing inconsistency between
// queries.
let e=new rV(r.path);this.je(t,e,sy.newNoDocument(e,rx.min()))}else 1===i||ry()}else{let n=this.tt(t);// Existence filter mismatch. Mark the documents as being in limbo, and
// raise a snapshot with `isFromCache:true`.
if(n!==i){// Apply bloom filter to identify and mark removed documents.
let i=this.nt(e),r=i?this.rt(i,e,n):1/* BloomFilterApplicationStatus.Skipped */;0/* BloomFilterApplicationStatus.Success */!==r&&(// If bloom filter application fails, we reset the mapping and
// trigger re-run of the query.
this.Ze(t),this.We=this.We.insert(t,2/* BloomFilterApplicationStatus.FalsePositive */===r?"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */))}}}}/**
     * Parse the bloom filter from the "unchanged_names" field of an existence
     * filter.
     */nt(e){let t,i;let n=e.ye.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=n;try{t=r5(r).toUint8Array()}catch(e){if(e instanceof r1)return rp("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{// BloomFilter throws error if the inputs are invalid.
i=new ak(t,s,a)}catch(e){return rp(e instanceof aL?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===i.Ae?null:i}/**
     * Apply bloom filter to remove the deleted documents, and return the
     * application status.
     */rt(e,t,i){return t.ye.count===i-this.ot(e,t.targetId)?0/* BloomFilterApplicationStatus.Success */:2/* BloomFilterApplicationStatus.FalsePositive */}/**
     * Filter out removed documents based on bloom filter membership result and
     * return number of documents removed.
     */ot(e,t){let i=this.Qe.getRemoteKeysForTarget(t),n=0;return i.forEach(i=>{let r=this.Qe.st(),s=`projects/${r.projectId}/databases/${r.database}/documents/${i.path.canonicalString()}`;e.mightContain(s)||(this.je(t,i,/*updatedDocument=*/null),n++)}),n}/**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */_t(e){let t=new Map;this.Ke.forEach((i,n)=>{let r=this.et(n);if(r){if(i.current&&sU(r.target)){// Document queries for document that don't exist can produce an empty
// result set. To update our local cache, we synthesize a document
// delete if we have not previously received the document. This
// resolves the limbo state of the document, removing it from
// limboDocumentRefs.
// TODO(dimond): Ideally we would have an explicit lookup target
// instead resulting in an explicit delete message and we could
// remove this special logic.
let t=new rV(r.target.path);null!==this.$e.get(t)||this.ut(n,t)||this.je(n,t,sy.newNoDocument(t,e))}i.Fe&&(t.set(n,i.xe()),i.Oe())}});let i=s4();// We extract the set of limbo-only document updates as the GC logic
// special-cases documents that do not appear in the target cache.
// TODO(gsoltis): Expand on this comment once GC is available in the JS
// client.
this.Ue.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */===t.purpose||(n=!1,!1)}),n&&(i=i.add(e))}),this.$e.forEach((t,i)=>i.setReadTime(e));let n=new aR(e,t,this.We,this.$e,i);return this.$e=sX,this.Ue=aU(),this.We=new rW(rk),n}/**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */// Visible for testing.
ze(e,t){if(!this.Ye(e))return;let i=this.ut(e,t.key)?2/* ChangeType.Modified */:0/* ChangeType.Added */;this.Je(e).Ne(t.key,i),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}/**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */// Visible for testing.
je(e,t,i){if(!this.Ye(e))return;let n=this.Je(e);this.ut(e,t)?n.Ne(t,1/* ChangeType.Removed */):// snapshot, so we can just ignore the change.
n.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),i&&(this.$e=this.$e.insert(t,i))}removeTarget(e){this.Ke.delete(e)}/**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}/**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new aF,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new rJ(rk),this.Ue=this.Ue.insert(e,t)),t}/**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */Ye(e){let t=null!==this.et(e);return t||rf("WatchChangeAggregator","Detected inactive target",e),t}/**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}/**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */Ze(e){this.Ke.set(e,new aF),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,/*updatedDocument=*/null)})}/**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function aU(){return new rW(rV.comparator)}function aB(){return new rW(rV.comparator)}let aj={asc:"ASCENDING",desc:"DESCENDING"},aq={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a$={and:"AND",or:"OR"};/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */class az{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */function aK(e,t){return e.useProto3Json||null==t?t:{value:t}}/**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 *//**
 * Returns a value for a Date that's appropriate to put into a proto.
 */function aH(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */function aG(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function aQ(e){return e||ry(),rx.fromTimestamp(function(e){let t=r4(e);return new rR(t.seconds,t.nanos)}(e))}function aW(e,t){return new rO(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function aY(e){let t=rO.fromString(e);return a6(t)||ry(),t}function aX(e,t){return aW(e.databaseId,t.path)}function aJ(e,t){let i=aY(t);if(i.get(1)!==e.databaseId.projectId)throw new rw(rv.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+i.get(1)+" vs "+e.databaseId.projectId);if(i.get(3)!==e.databaseId.database)throw new rw(rv.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+i.get(3)+" vs "+e.databaseId.database);return new rV(a1(i))}function aZ(e,t){return aW(e.databaseId,t)}function a0(e){return new rO(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function a1(e){return e.length>4&&"documents"===e.get(4)||ry(),e.popFirst(5)}/** Creates a Document proto from key and fields (but no create/update time) */function a2(e,t,i){return{name:aX(e,t),fields:i.value.mapValue.fields}}function a9(e){return{fieldPath:e.canonicalString()}}function a4(e){return rF.fromServerFormat(e.fieldPath)}function a6(e){// Resource names have at least 4 components (project ID, database ID)
return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable set of metadata that the local store tracks for each target.
 */class a5{constructor(/** The target being listened to. */e,/**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */t,/** The purpose of the target. */i,/**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */n,/** The latest snapshot version seen for this target. */r=rx.min(),s=rx.min(),a=r2.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=n,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}/** Creates a new target data instance with an updated sequence number. */withSequenceNumber(e){return new a5(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}/**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */withResumeToken(e,t){return new a5(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,/* expectedCount= */null)}/**
     * Creates a new target data instance with an updated expected count.
     */withExpectedCount(e){return new a5(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}/**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */withLastLimboFreeSnapshotVersion(e){return new a5(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Serializer for values stored in the LocalStore. */class a3{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */class a7{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */dt(e,t){this.Tt(e,t),// (see go/firestore-storage-format#encodings).
t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(r6(e.integerValue));else if("doubleValue"in e){let i=r6(e.doubleValue);isNaN(i)?this.At(t,13):(this.At(t,15),rK(i)?t.Rt(0):t.Rt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.At(t,20),"string"==typeof i?t.Vt(i):(t.Vt(`${i.seconds||""}`),t.Rt(i.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(r5(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let i=e.geoPointValue;this.At(t,45),t.Rt(i.latitude||0),t.Rt(i.longitude||0)}else"mapValue"in e?sp(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):ry()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let i=e.fields||{};for(let e of(this.At(t,55),Object.keys(i)))this.ft(e,t),this.Tt(i[e],t)}bt(e,t){let i=e.values||[];for(let e of(this.At(t,50),i))this.Tt(e,t)}wt(e,t){this.At(t,37),rV.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
e.Rt(2)}}a7.Ct=new a7;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of IndexManager.
 */class a8{constructor(){this.an=new oe}addToCollectionParentIndex(e,t){return this.an.add(t),rq.resolve()}getCollectionParents(e,t){return rq.resolve(this.an.getEntries(t))}addFieldIndex(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}deleteFieldIndex(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}deleteAllFieldIndexes(e){// Field indices are not supported with memory persistence.
return rq.resolve()}createTargetIndexes(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}getDocumentsMatchingTarget(e,t){// Field indices are not supported with memory persistence.
return rq.resolve(null)}getIndexType(e,t){// Field indices are not supported with memory persistence.
return rq.resolve(0/* IndexType.NONE */)}getFieldIndexes(e,t){// Field indices are not supported with memory persistence.
return rq.resolve([])}getNextCollectionGroupToUpdate(e){// Field indices are not supported with memory persistence.
return rq.resolve(null)}getMinOffset(e,t){return rq.resolve(rU.min())}getMinOffsetFromCollectionGroup(e,t){return rq.resolve(rU.min())}updateCollectionGroup(e,t,i){// Field indices are not supported with memory persistence.
return rq.resolve()}updateIndexEntries(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}}/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */class oe{constructor(){this.index={}}// Returns false if the entry already existed.
add(e){let t=e.lastSegment(),i=e.popLast(),n=this.index[t]||new rJ(rO.comparator),r=!n.has(i);return this.index[t]=n.add(i),r}has(e){let t=e.lastSegment(),i=e.popLast(),n=this.index[t];return n&&n.has(i)}getEntries(e){return(this.index[e]||new rJ(rO.comparator)).toArray()}}new Uint8Array(0);class ot{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
e,t,// us from collecting a huge number of sequence numbers if the cache has grown very large.
i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** A mutation queue for a specific user, backed by IndexedDB. */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(41943040,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Offset to ensure non-overlapping target ids. *//**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */class oi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){// The target cache generator must return '2' in its first call to `next()`
// as there is no differentiation in the protocol layer between an unset
// number and the number '0'. If we were to sent a target with target ID
// '0', the backend would consider it unset and replace it with its own ID.
return new oi(0)}static Ln(){// Sync engine assigns target IDs for limbo document detection.
return new oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */class on{constructor(){// A mapping of document key to the new cache entry that should be written.
this.changes=new sY(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}/**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}/**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sy.newInvalidDocument(e).setReadTime(t))}/**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */getEntry(e,t){this.assertNotApplied();let i=this.changes.get(t);return void 0!==i?rq.resolve(i):this.getFromCache(e,t)}/**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */getEntries(e,t){return this.getAllFromCache(e,t)}/**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}/** Helper to assert this.changes is not null  */assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */class or{constructor(e,/**
     * The fields that are locally mutated by patch mutations.
     *
     * If the overlayed	document is from set or delete mutations, this is `null`.
     * If there is no overlay (mutation) for the document, this is an empty `FieldMask`.
     */t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */class os{constructor(e,t,i,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=n}/**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(i=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==i&&af(i.mutation,e,r0.empty(),rR.now()),e))}/**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,s4()).next(()=>t))}/**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */getLocalViewOfDocuments(e,t,i=s4()){let n=s1();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,i).next(e=>{let t=sZ();return e.forEach((e,i)=>{t=t.insert(e,i.overlayedDocument)}),t}))}/**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */getOverlayedDocuments(e,t){let i=s1();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s4()))}/**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */populateOverlays(e,t,i){let n=[];return i.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,i)=>{t.set(e,i)})})}/**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */computeViews(e,t,i,n){let r=sX,s=s1(),a=s1();return t.forEach((e,t)=>{let a=i.get(t.key);// Recalculate an overlay if the document's existence state changed due to
// a remote event *and* the overlay is a PatchMutation. This is because
// document existence state can change if some patch mutation's
// preconditions are met.
// NOTE: we recalculate when `overlay` is undefined as well, because there
// might be a patch mutation whose precondition does not match before the
// change (hence overlay is undefined), but would now match.
n.has(t.key)&&(void 0===a||a.mutation instanceof ag)?r=r.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),af(a.mutation,t,a.mutation.getFieldMask(),rR.now())):// Using EMPTY to indicate there is no overlay for the document.
s.set(t.key,r0.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var i;return a.set(e,new or(t,null!==(i=s.get(e))&&void 0!==i?i:null))}),a))}recalculateAndSaveOverlays(e,t){let i=s1(),n=new rW((e,t)=>e-t),r=s4();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=i.get(e)||r0.empty();a=r.applyToLocalView(s,a),i.set(e,a);let o=(n.get(r.batchId)||s4()).add(e);n=n.insert(r.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();// Iterate in descending order of batch IDs, and skip documents that are
// already saved.
for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=s1();l.forEach(e=>{if(!r.has(e)){let n=ad(t.get(e),i.get(e));null!==n&&u.set(e,n),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return rq.waitFor(s)}).next(()=>i)}/**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}/**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     * @param context - A optional tracker to keep a record of important details
     *   during database local query execution.
     */getDocumentsMatchingQuery(e,t,i,n){/**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */return rV.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,n):this.getDocumentsMatchingCollectionQuery(e,t,i,n)}/**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */getNextDocuments(e,t,i,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,n).next(r=>{let s=n-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,n-r.size):rq.resolve(s1()),a=-1,o=r;return s.next(t=>rq.forEach(t,(t,i)=>(a<i.largestBatchId&&(a=i.largestBatchId),r.get(t)?rq.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,s4())).next(e=>({batchId:a,changes:s0(e)})))})}getDocumentsMatchingDocumentQuery(e,t){// Just do a simple document lookup.
return this.getDocument(e,new rV(t)).next(e=>{let t=sZ();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,i,n){let r=t.collectionGroup,s=sZ();return this.indexManager.getCollectionParents(e,r).next(a=>rq.forEach(a,a=>{var o;let l=(o=a.child(r),new sB(o,/*collectionGroup=*/null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,i,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,i,n){// Query the remote documents and overlay mutations.
let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,n))).next(e=>{// As documents might match the query because of their overlay we need to
// include documents for all overlays in the initial document set.
r.forEach((t,i)=>{let n=i.getKey();null===e.get(n)&&(e=e.insert(n,sy.newInvalidDocument(n)))});// Apply the overlays and match against the query.
let i=sZ();return e.forEach((e,n)=>{let s=r.get(e);void 0!==s&&af(s.mutation,n,r0.empty(),rR.now()),sQ(t,n)&&(i=i.insert(e,n))}),i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return rq.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:aQ(t.createTime)}),rq.resolve()}getNamedQuery(e,t){return rq.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */function(e){let t=function(e){var t,i,n,r,s,a,o,l;let u,h=function(e){let t=aY(e);// In v1beta1 queries for collections at the root did not have a trailing
// "/documents". In v1 all resource paths contain "/documents". Preserve the
// ability to read the v1beta1 form for compatibility with queries persisted
// in the local target cache.
return 4===t.length?rO.emptyPath():a1(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||ry();let e=c.from[0];e.allDescendants?f=e.collectionId:h=h.child(e.collectionId)}let m=[];c.where&&(m=function(e){var t;let i=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=a4(e.unaryFilter.field);return sT.create(t,"=="/* Operator.EQUAL */,{doubleValue:NaN});case"IS_NULL":let i=a4(e.unaryFilter.field);return sT.create(i,"=="/* Operator.EQUAL */,{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=a4(e.unaryFilter.field);return sT.create(n,"!="/* Operator.NOT_EQUAL */,{doubleValue:NaN});case"IS_NOT_NULL":let r=a4(e.unaryFilter.field);return sT.create(r,"!="/* Operator.NOT_EQUAL */,{nullValue:"NULL_VALUE"});default:return ry()}}(t):void 0!==t.fieldFilter?sT.create(a4(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"=="/* Operator.EQUAL */;case"NOT_EQUAL":return"!="/* Operator.NOT_EQUAL */;case"GREATER_THAN":return">"/* Operator.GREATER_THAN */;case"GREATER_THAN_OR_EQUAL":return">="/* Operator.GREATER_THAN_OR_EQUAL */;case"LESS_THAN":return"<"/* Operator.LESS_THAN */;case"LESS_THAN_OR_EQUAL":return"<="/* Operator.LESS_THAN_OR_EQUAL */;case"ARRAY_CONTAINS":return"array-contains"/* Operator.ARRAY_CONTAINS */;case"IN":return"in"/* Operator.IN */;case"NOT_IN":return"not-in"/* Operator.NOT_IN */;case"ARRAY_CONTAINS_ANY":return"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */;default:return ry()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?sI.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and"/* CompositeOperator.AND */;case"OR":return"or"/* CompositeOperator.OR */;default:return ry()}}(t.compositeFilter.op)):ry()}(e);return i instanceof sI&&sS(t=i)&&sC(t)?i.getFilters():[i]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>new sE(a4(e.field),function(e){switch(e){case"ASCENDING":return"asc"/* Direction.ASCENDING */;case"DESCENDING":return"desc"/* Direction.DESCENDING */;default:return}}(e.direction))));let g=null;c.limit&&(g=null==(u="object"==typeof(t=c.limit)?t.value:t)?null:u);let y=null;c.startAt&&(y=function(e){let t=!!e.before,i=e.values||[];return new sv(i,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,i=e.values||[];return new sv(i,t)}(c.endAt)),i=h,n=f,r=p,s=m,a=g,o=y,l=v,new sB(i,n,r,s,a,"F"/* LimitType.First */,o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?sz(t,t.limit,"L"/* LimitType.Last */):t}(t.bundledQuery),readTime:aQ(t.readTime)}),rq.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An in-memory implementation of DocumentOverlayCache.
 */class oo{constructor(){// A map sorted by DocumentKey, whose value is a pair of the largest batch id
// for the overlay and the overlay itself.
this.overlays=new rW(rV.comparator),this.Pr=new Map}getOverlay(e,t){return rq.resolve(this.overlays.get(t))}getOverlays(e,t){let i=s1();return rq.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&i.set(t,e)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((i,n)=>{this.It(e,t,n)}),rq.resolve()}removeOverlaysForBatchId(e,t,i){let n=this.Pr.get(i);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(i)),rq.resolve()}getOverlaysForCollection(e,t,i){let n=s1(),r=t.length+1,s=new rV(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;// Documents from sub-collections
s.path.length===r&&e.largestBatchId>i&&n.set(e.getKey(),e)}return rq.resolve(n)}getOverlaysForCollectionGroup(e,t,i,n){let r=new rW((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>i){let t=r.get(e.largestBatchId);null===t&&(t=s1(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=s1(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return rq.resolve(a)}It(e,t,i){// Remove the association of the overlay to its batch id.
let n=this.overlays.get(i.key);if(null!==n){let e=this.Pr.get(n.largestBatchId).delete(i.key);this.Pr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(i.key,new aI(t,i));// Create the association of this overlay to the given largestBatchId.
let r=this.Pr.get(t);void 0===r&&(r=s4(),this.Pr.set(t,r)),this.Pr.set(t,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */class ol{constructor(){// A set of outstanding references to a document sorted by key.
this.Ir=new rJ(ou.dr),this.Tr=new rJ(ou.Er)}/** Returns true if the reference set contains no references. */isEmpty(){return this.Ir.isEmpty()}/** Adds a reference to the given document key for the given ID. */addReference(e,t){let i=new ou(e,t);this.Ir=this.Ir.add(i),this.Tr=this.Tr.add(i)}/** Add references to the given document keys for the given ID. */Ar(e,t){e.forEach(e=>this.addReference(e,t))}/**
     * Removes a reference to the given document key for the given
     * ID.
     */removeReference(e,t){this.Rr(new ou(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}/**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */mr(e){let t=new rV(new rO([])),i=new ou(t,e),n=new ou(t,e+1),r=[];return this.Tr.forEachInRange([i,n],e=>{this.Rr(e),r.push(e.key)}),r}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new rV(new rO([])),i=new ou(t,e),n=new ou(t,e+1),r=s4();return this.Tr.forEachInRange([i,n],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new ou(e,0),i=this.Ir.firstAfterOrEqual(t);return null!==i&&e.isEqual(i.key)}}class ou{constructor(e,t){this.key=e,this.yr=t}/** Compare by key then by ID */static dr(e,t){return rV.comparator(e.key,t.key)||rk(e.yr,t.yr)}/** Compare by ID then by key */static Er(e,t){return rk(e.yr,t.yr)||rV.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,/**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */this.mutationQueue=[],/** Next value to use when assigning sequential IDs to each mutation batch. */this.wr=1,/** An ordered mapping between documents and the mutations batch IDs. */this.Sr=new rJ(ou.dr)}checkEmpty(e){return rq.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,i,n){let r=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new a_(r,t,i,n);// Track references by document key and index collection parents.
for(let t of(this.mutationQueue.push(s),n))this.Sr=this.Sr.add(new ou(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rq.resolve(s)}lookupMutationBatch(e,t){return rq.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let i=this.Dr(t+1),n=i<0?0:i;// The requested batchId may still be out of range so normalize it to the
// start of the queue.
return rq.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return rq.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return rq.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let i=new ou(t,0),n=new ou(t,Number.POSITIVE_INFINITY),r=[];return this.Sr.forEachInRange([i,n],e=>{let t=this.br(e.yr);r.push(t)}),rq.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new rJ(rk);return t.forEach(e=>{let t=new ou(e,0),n=new ou(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,n],e=>{i=i.add(e.yr)})}),rq.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){// Use the query path as a prefix for testing if a document matches the
// query.
let i=t.path,n=i.length+1,r=i;rV.isDocumentKey(r)||(r=r.child(""));let s=new ou(new rV(r),0),a=new rJ(rk);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!i.isPrefixOf(t)&&// Rows with document keys more than one segment longer than the query
// path can't be matches. For example, a query on 'rooms' can't match
// the document /rooms/abc/messages/xyx.
// TODO(mcg): we'll need a different scanner when we implement
// ancestor queries.
(t.length===n&&(a=a.add(e.yr)),!0)},s),rq.resolve(this.Cr(a))}Cr(e){// Construct an array of matching batches, sorted by batchID to ensure that
// multiple mutations affecting the same document key are applied in order.
let t=[];return e.forEach(e=>{let i=this.br(e);null!==i&&t.push(i)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||ry(),this.mutationQueue.shift();let i=this.Sr;return rq.forEach(t.mutations,n=>{let r=new ou(n.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Sr=i})}xn(e){// No-op since the memory mutation queue does not maintain a separate cache.
}containsKey(e,t){let i=new ou(t,0),n=this.Sr.firstAfterOrEqual(i);return rq.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,rq.resolve()}/**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */vr(e,t){return this.Dr(e)}/**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}/**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */class oc{/**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */constructor(e){this.Fr=e,/** Underlying cache of documents and their read times. */this.docs=new rW(rV.comparator),/** Size of all cached documents. */this.size=0}setIndexManager(e){this.indexManager=e}/**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */addEntry(e,t){let i=t.key,n=this.docs.get(i),r=n?n.size:0,s=this.Fr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}/**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let i=this.docs.get(t);return rq.resolve(i?i.document.mutableCopy():sy.newInvalidDocument(t))}getEntries(e,t){let i=sX;return t.forEach(e=>{let t=this.docs.get(e);i=i.insert(e,t?t.document.mutableCopy():sy.newInvalidDocument(e))}),rq.resolve(i)}getDocumentsMatchingQuery(e,t,i,n){let r=sX,s=t.path,a=new rV(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let i=e.readTime.compareTo(t.readTime);return 0!==i?i:0!==(i=rV.comparator(e.documentKey,t.documentKey))?i:rk(e.largestBatchId,t.largestBatchId)}(new rU(a.readTime,a.key,-1),i)||(n.has(a.key)||sQ(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return rq.resolve(r)}getAllFromCollectionGroup(e,t,i,n){// This method should only be called from the IndexBackfiller if persistence
// is enabled.
ry()}Mr(e,t){return rq.forEach(this.docs,e=>t(e))}newChangeBuffer(e){// `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
// a separate changelog and does not need special handling for removals.
return new od(this)}getSize(e){return rq.resolve(this.size)}}/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 *//**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */class od extends on{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((i,n)=>{n.isValidDocument()?t.push(this.ur.addEntry(e,n)):this.ur.removeEntry(i)}),rq.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.persistence=e,/**
         * Maps a target to the data about that target
         */this.Or=new sY(e=>sF(e),sV),/** The last received snapshot version. */this.lastRemoteSnapshotVersion=rx.min(),/** The highest numbered target ID encountered. */this.highestTargetId=0,/** The highest sequence number encountered. */this.Nr=0,/**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */this.Br=new ol,this.targetCount=0,this.Lr=oi.Bn()}forEachTarget(e,t){return this.Or.forEach((e,i)=>t(i)),rq.resolve()}getLastRemoteSnapshotVersion(e){return rq.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rq.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),rq.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Nr&&(this.Nr=t),rq.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new oi(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,rq.resolve()}updateTargetData(e,t){return this.Qn(t),rq.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,rq.resolve()}removeTargets(e,t,i){let n=0,r=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===i.get(a.targetId)&&(this.Or.delete(s),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),rq.waitFor(r).next(()=>n)}getTargetCount(e){return rq.resolve(this.targetCount)}getTargetData(e,t){let i=this.Or.get(t)||null;return rq.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Ar(t,i),rq.resolve()}removeMatchingKeys(e,t,i){this.Br.Vr(t,i);let n=this.persistence.referenceDelegate,r=[];return n&&t.forEach(t=>{r.push(n.markPotentiallyOrphaned(e,t))}),rq.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),rq.resolve()}getMatchingKeysForTargetId(e,t){let i=this.Br.pr(t);return rq.resolve(i)}containsKey(e,t){return rq.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */class om{/**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */constructor(e,t){this.kr={},this.overlays={},this.qr=new rz(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new of(this),this.indexManager=new a8,this.remoteDocumentCache=new oc(e=>this.referenceDelegate.$r(e)),this.serializer=new a3(t),this.Ur=new oa(this.serializer)}start(){return Promise.resolve()}shutdown(){// No durable state to ensure is closed on shutdown.
return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){// No op.
}setNetworkEnabled(){// No op.
}getIndexManager(e){// We do not currently support indices for memory persistence, so we can
// return the same shared instance of the memory index manager.
return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oo,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.kr[e.toKey()];return i||(i=new oh(t,this.referenceDelegate),this.kr[e.toKey()]=i),i}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,i){rf("MemoryPersistence","Starting transaction:",e);let n=new op(this.qr.next());return this.referenceDelegate.Wr(),i(n).next(e=>this.referenceDelegate.Gr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}zr(e,t){return rq.or(Object.values(this.kr).map(i=>()=>i.containsKey(e,t)))}}/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */class op extends rB{constructor(e){super(),this.currentSequenceNumber=e}}class og{constructor(e){this.persistence=e,/** Tracks all documents that are active in Query views. */this.jr=new ol,/** The list of documents that are potentially GCed after each transaction. */this.Hr=null}static Jr(e){return new og(e)}get Yr(){if(this.Hr)return this.Hr;throw ry()}addReference(e,t,i){return this.jr.addReference(i,t),this.Yr.delete(i.toString()),rq.resolve()}removeReference(e,t,i){return this.jr.removeReference(i,t),this.Yr.add(i.toString()),rq.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),rq.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>i.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){// Remove newly orphaned documents.
let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rq.forEach(this.Yr,i=>{let n=rV.fromPath(i);return this.Zr(e,n).next(e=>{e||t.removeEntry(n,rx.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){// For eager GC, we don't care about the document size, there are no size thresholds.
return 0}Zr(e,t){return rq.or([()=>rq.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */class oy{constructor(e,t,i,n){this.targetId=e,this.fromCache=t,this.Qi=i,this.Ki=n}static $i(e,t){let i=s4(),n=s4();for(let e of t.docChanges)switch(e.type){case 0/* ChangeType.Added */:i=i.add(e.doc.key);break;case 1/* ChangeType.Removed */:n=n.add(e.doc.key)}return new oy(e,t.fromCache,i,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A tracker to keep a record of important details during database local query
 * execution.
 */class ov{constructor(){/**
         * Counts the number of documents passed through during local query execution.
         */this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */class ow{constructor(){this.Ui=!1,this.Wi=!1,/**
         * SDK only decides whether it should create index when collection size is
         * larger than this.
         */this.Gi=100,this.zi=2}/** Sets the document view to query against. */initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}/** Returns all local documents matching the specified query. */getDocumentsMatchingQuery(e,t,i,n){// Stores the result from executing the query; using this object is more
// convenient than passing the result between steps of the persistence
// transaction and improves readability comparatively.
let r={result:null};return this.Hi(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.Ji(e,t,n,i).next(e=>{r.result=e})}).next(()=>{if(r.result)return;let i=new ov;return this.Yi(e,t,i).next(n=>{if(r.result=n,this.Wi)return this.Zi(e,t,i,n.size)})}).next(()=>r.result)}Zi(e,t,i,n){return i.documentReadCount<this.Gi?(rd()<=ej.DEBUG&&rf("QueryEngine","SDK will not create cache indexes for query:",sG(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),rq.resolve()):(rd()<=ej.DEBUG&&rf("QueryEngine","Query:",sG(t),"scans",i.documentReadCount,"local documents and returns",n,"documents as results."),i.documentReadCount>this.zi*n?(rd()<=ej.DEBUG&&rf("QueryEngine","The SDK decides to create cache indexes for query:",sG(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,s$(t))):rq.resolve())}/**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */Hi(e,t){if(sj(t))// key-based lookups. It is more efficient to scan all documents in a
// collection, rather than to perform individual lookups.
return rq.resolve(null);let i=s$(t);return this.indexManager.getIndexType(e,i).next(n=>0/* IndexType.NONE */===n?null:(null!==t.limit&&1/* IndexType.PARTIAL */===n&&(i=s$(// We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    t=sz(t,null,"F"/* LimitType.First */))),this.indexManager.getDocumentsMatchingTarget(e,i).next(n=>{let r=s4(...n);return this.ji.getDocuments(e,r).next(n=>this.indexManager.getMinOffset(e,i).next(i=>{let s=this.Xi(t,n);return this.es(t,s,r,i.readTime)?this.Hi(e,sz(t,null,"F"/* LimitType.First */)):this.ts(e,s,t,i)}))})))}/**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */Ji(e,t,i,n){return sj(t)||n.isEqual(rx.min())?rq.resolve(null):this.ji.getDocuments(e,i).next(r=>{let s=this.Xi(t,r);return this.es(t,s,i,n)?rq.resolve(null):(rd()<=ej.DEBUG&&rf("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),sG(t)),this.ts(e,s,t,/**
 * Creates an offset that matches all documents with a read time higher than
 * `readTime`.
 */function(e,t){// We want to create an offset that matches all documents with a read time
// greater than the provided read time. To do so, we technically need to
// create an offset for `(readTime, MAX_DOCUMENT_KEY)`. While we could use
// Unicode codepoints to generate MAX_DOCUMENT_KEY, it is much easier to use
// `(readTime + 1, DocumentKey.empty())` since `> DocumentKey.empty()` matches
// all valid document IDs.
let i=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,r=rx.fromTimestamp(1e9===n?new rR(i+1,0):new rR(i,n));return new rU(r,rV.empty(),-1)}(n,0)).next(e=>e))});// Queries that have never seen a snapshot without limbo free documents
// should also be run as a full collection scan.
}/** Applies the query filter and sorting to the provided documents.  */Xi(e,t){// Sort the documents and re-apply the query filter since previously
// matching documents do not necessarily still match the query.
let i=new rJ(sW(e));return t.forEach((t,n)=>{sQ(e,n)&&(i=i.add(n))}),i}/**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param query - The query.
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */es(e,t,i,n){if(null===e.limit)return!1;if(i.size!==t.size)// longer matches.
return!0;// Limit queries are not eligible for index-free query execution if there is
// a potential that an older document from cache now sorts before a document
// that was previously part of the limit. This, however, can only happen if
// the document at the edge of the limit goes out of limit.
// If a document that is not the limit boundary sorts differently,
// the boundary of the limit itself did not change and documents from cache
// will continue to be "rejected" by this boundary. Therefore, we can ignore
// any modifications that don't affect the last document.
let r="F"/* LimitType.First */===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(n)>0)}Yi(e,t,i){return rd()<=ej.DEBUG&&rf("QueryEngine","Using full collection scan to execute query:",sG(t)),this.ji.getDocumentsMatchingQuery(e,t,rU.min(),i)}/**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */ts(e,t,i,n){// Retrieve all results for documents that were updated since the offset.
return this.ji.getDocumentsMatchingQuery(e,i,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class ob{constructor(/** Manages our in-memory or durable persistence. */e,t,i,n){this.persistence=e,this.ns=t,this.serializer=n,/**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */this.rs=new rW(rk),/** Maps a target to its targetID. */this.ss=new sY(e=>sF(e),sV),/**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(i)}us(e){// TODO(indexing): Add spec tests that test these components change after a
// user change
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new os(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function oE(e,t){return await e.persistence.runTransaction("Handle user change","readonly",i=>{// Swap out the mutation queue, grabbing the pending mutation batches
// before and after.
let n;return e.mutationQueue.getAllMutationBatches(i).next(r=>(n=r,e.us(t),e.mutationQueue.getAllMutationBatches(i))).next(t=>{let r=[],s=[],a=s4();for(let e of n)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);// Return the set of all (potentially) changed documents and the list
// of mutation batch IDs that were affected by change.
return e.localDocuments.getDocuments(i,a).next(e=>({cs:e,removedBatchIds:r,addedBatchIds:s}))})})}/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */function o_(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
async function oT(e,t,i){let n=e.rs.get(t);try{i||await e.persistence.runTransaction("Release target",i?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!r$(e))throw e;// All `releaseTarget` does is record the final metadata state for the
// target, but we've been recording this periodically during target
// activity. If we lose this write this could cause a very slight
// difference in the order of target deletion during GC, but we
// don't define exact LRU semantics so this is acceptable.
rf("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(n.target)}/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */function oI(e,t,i){let n=rx.min(),r=s4();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,i){let n=e.ss.get(i);return void 0!==n?rq.resolve(e.rs.get(n)):e.Kr.getTargetData(t,i)})(e,s,s$(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{r=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,i?n:rx.min(),i?r:s4())).next(i=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(n)||rx.min(),i.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(n,s),{documents:i,Ps:r}}))}/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */// Visible for testing.
class oC{constructor(){this.activeTargetIds=s6}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}/**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oS{constructor(){this.ro=new oC,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){// No op.
}updateMutationState(e,t,i){// No op.
}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,i){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new oC,Promise.resolve()}handleUserChange(e,t,i){// No op.
}setOnlineState(e){// No op.
}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){// No op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{so(e){// No-op.
}shutdown(){// No-op.
}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals *//**
 * Browser implementation of ConnectivityMonitor.
 */class oD{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(rf("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0/* NetworkStatus.AVAILABLE */)}uo(){for(let e of(rf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1/* NetworkStatus.UNAVAILABLE */)}// TODO(chenbrian): Consider passing in window either into this component or
// here for testing via FakeWindow.
/** Checks that all used attributes of window are available. */static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The value returned from the most recent invocation of
 * `generateUniqueDebugId()`, or null if it has never been invoked.
 */let oN=null;/**
 * Generates and returns an initial value for `lastUniqueDebugId`.
 *
 * The returned value is randomly selected from a range of integers that are
 * represented as 8 hexadecimal digits. This means that (within reason) any
 * numbers generated by incrementing the returned number by 1 will also be
 * represented by 8 hexadecimal digits. This leads to all "IDs" having the same
 * length when converted to a hexadecimal string, making reading logs containing
 * these IDs easier to follow. And since the return value is randomly selected
 * it will help to differentiate between logs from different executions.
 *//**
 * Generates and returns a unique ID as a hexadecimal string.
 *
 * The returned ID is intended to be used in debug logging messages to help
 * correlate log messages that may be spatially separated in the logs, but
 * logically related. For example, a network connection could include the same
 * "debug ID" string in all of its log messages to help trace a specific
 * connection over time.
 *
 * @return the 10-character generated ID (e.g. "0xa1b2c3d4").
 */function ok(){return null===oN?oN=268435456+Math.round(2147483648*Math.random()):oN++,"0x"+oN.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
 */class oR{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ox="WebChannelConnection";class oP extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${n}`,this.wo="(default)"===this.databaseId.database?`project_id=${i}`:`project_id=${i}&database_id=${n}`}get So(){// Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
// where to run the query, and expect the `request` to NOT specify the "path".
return!1}bo(e,t,i,n,r){let s=ok(),a=this.Do(e,t);rf("RestConnection",`Sending RPC '${e}' ${s}:`,a,i);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,n,r),this.vo(e,a,o,i).then(t=>(rf("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw rp("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",i),t})}Fo(e,t,i,n,r,s){// The REST API automatically aggregates all of the streamed results, so we
// can just use the normal invoke() method.
return this.bo(e,t,i,n,r)}/**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */Co(e,t,i){e["X-Goog-Api-Client"]=// so we need to get its value when we need it in a function.
function(){return"gl-js/ fire/"+rh}(),// mess with CORS and redirects by proxies. If we add custom headers
// we will need to change this code to potentially use the $httpOverwrite
// parameter supported by ESF to avoid triggering preflight requests.
e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,i)=>e[i]=t),i&&i.headers.forEach((t,i)=>e[i]=t)}Do(e,t){let i=oL[e];return`${this.po}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,n){let r=ok();return new Promise((s,a)=>{let o=new rs;o.setWithCredentials(!0),o.listenOnce(rt.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case re.NO_ERROR:let t=o.getResponseJson();rf(ox,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case re.TIMEOUT:rf(ox,`RPC '${e}' ${r} timed out`),a(new rw(rv.DEADLINE_EXCEEDED,"Request time out"));break;case re.HTTP_ERROR:let i=o.getStatus();if(rf(ox,`RPC '${e}' ${r} failed with status:`,i,"response text:",o.getResponseText()),i>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(rv).indexOf(t)>=0?t:rv.UNKNOWN}(t.status);a(new rw(e,t.message))}else a(new rw(rv.UNKNOWN,"Server responded with status "+o.getStatus()))}else // it's most probably a connection issue
a(new rw(rv.UNAVAILABLE,"Connection failed."));break;default:ry()}}finally{rf(ox,`RPC '${e}' ${r} completed.`)}});let l=JSON.stringify(n);rf(ox,`RPC '${e}' ${r} sending request:`,n),o.send(t,"POST",l,i,15)})}Mo(e,t,i){let n=ok(),r=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=n7(),o=n8(),l={// Required for backend stickiness, routing behavior is based on this
// parameter.
httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{// This param is used to improve routing and project isolation by the
// backend and must be included in every request.
database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{// Override the default timeout (randomized between 10-20 seconds) since
// a large write batch on a slow internet connection may take a long
// time to send to the backend. Rather than have WebChannel impose a
// tight timeout which could lead to infinite timeouts and retries, we
// set it very large (5-10 minutes) and rely on the browser's builtin
// timeouts to kick in if the request isn't working.
forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,i),// (Authorization, etc.) will trigger the browser to make a CORS preflight
// request because the XHR will no longer meet the criteria for a "simple"
// CORS request:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
// Therefore to avoid the CORS preflight request (an extra network
// roundtrip), we use the encodeInitMessageHeaders option to specify that
// the headers should instead be encoded in the request's POST payload,
// which is recognized by the webchannel backend.
l.encodeInitMessageHeaders=!0;let h=r.join("");rf(ox,`Creating RPC '${e}' stream ${n}: ${h}`,l);let c=s.createWebChannel(h,l),d=!1,f=!1,m=new oR({ho:t=>{f?rf(ox,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(rf(ox,`Opening RPC '${e}' stream ${n} transport.`),c.open(),d=!0),rf(ox,`RPC '${e}' stream ${n} sending:`,t),c.send(t))},Po:()=>c.close()}),p=(e,t,i)=>{// TODO(dimond): closure typing seems broken because WebChannel does
// not implement goog.events.Listenable
e.listen(t,e=>{try{i(e)}catch(e){setTimeout(()=>{throw e},0)}})};// Closure events are guarded and exceptions are swallowed, so catch any
// exception and rethrow using a setTimeout so they become visible again.
// Note that eventually this function could go away if we are confident
// enough the code is exception free.
return p(c,rr.EventType.OPEN,()=>{f||rf(ox,`RPC '${e}' stream ${n} transport opened.`)}),p(c,rr.EventType.CLOSE,()=>{f||(f=!0,rf(ox,`RPC '${e}' stream ${n} transport closed`),m.mo())}),p(c,rr.EventType.ERROR,t=>{f||(f=!0,rp(ox,`RPC '${e}' stream ${n} transport errored:`,t),m.mo(new rw(rv.UNAVAILABLE,"The operation could not be completed")))}),p(c,rr.EventType.MESSAGE,t=>{var i;if(!f){let r=t.data[0];r||ry();// TODO(b/35143891): There is a bug in One Platform that caused errors
// (and only errors) to be wrapped in an extra array. To be forward
// compatible with the bug we need to check either condition. The latter
// can be removed once the fix has been rolled out.
// Use any because msgData.error is not typed.
let s=r.error||(null===(i=r[0])||void 0===i?void 0:i.error);if(s){rf(ox,`RPC '${e}' stream ${n} received error:`,s);// error.status will be a string like 'OK' or 'NOT_FOUND'.
let t=s.status,i=/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */function(e){// lookup by string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=a[e];if(void 0!==t)return aS(t)}(t),r=s.message;void 0===i&&(i=rv.INTERNAL,r="Unknown error status: "+t+" with message "+s.message),f=!0,m.mo(new rw(i,r)),c.close()}else rf(ox,`RPC '${e}' stream ${n} received:`,r),m.fo(r)}}),p(o,ri.STAT_EVENT,t=>{t.stat===rn.PROXY?rf(ox,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===rn.NOPROXY&&rf(ox,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{// Technically we could/should wait for the WebChannel opened event,
// but because we want to send the first message with the WebChannel
// handshake we pretend the channel opened here (asynchronously), and
// then delay the actual open until the first message is sent.
m.Vo()},0),m}}/** The Platform's 'document' implementation or null if not available. */function oO(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
// eslint-disable-next-line no-restricted-globals
return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(e){return new az(e,/* useProto3Json= */!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */class oF{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */e,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */t,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */i=1e3,n=1.5,r=6e4){this._i=e,this.timerId=t,this.xo=i,this.Oo=n,this.No=r,this.Bo=0,this.Lo=null,/** The last backoff attempt, as epoch milliseconds. */this.ko=Date.now(),this.reset()}/**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */reset(){this.Bo=0}/**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */qo(){this.Bo=this.No}/**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */Qo(e){// Cancel any pending backoff operation.
this.cancel();// First schedule using the current base (which may be 0 and should be
// honored as such).
let t=Math.floor(this.Bo+this.Ko()),i=Math.max(0,Date.now()-this.ko),n=Math.max(0,t-i);// Guard against lastAttemptTime being in the future due to a clock change.
n>0&&rf("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,()=>(this.ko=Date.now(),e())),// bounds.
this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}/** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */class oV{constructor(e,t,i,n,r,s,a,o){this._i=e,this.Uo=i,this.Wo=n,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0/* PersistentStreamState.Initial */,/**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new oF(e,t)}/**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */Jo(){return 1/* PersistentStreamState.Starting */===this.state||5/* PersistentStreamState.Backoff */===this.state||this.Yo()}/**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */Yo(){return 2/* PersistentStreamState.Open */===this.state||3/* PersistentStreamState.Healthy */===this.state}/**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */start(){4/* PersistentStreamState.Error */!==this.state?this.auth():this.Zo()}/**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */async stop(){this.Jo()&&await this.close(0/* PersistentStreamState.Initial */)}/**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */Xo(){this.state=0/* PersistentStreamState.Initial */,this.Ho.reset()}/**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */e_(){// Starts the idle time if we are in state 'Open' and are not yet already
// running a timer (in which case the previous idle timeout still applies).
this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}/** Sends a message to the underlying stream. */n_(e){this.r_(),this.stream.send(e)}/** Called by the idle timer when the stream should close due to inactivity. */async t_(){if(this.Yo())// it restarts so set the stream state to Initial instead of Error.
return this.close(0/* PersistentStreamState.Initial */)}/** Marks the stream as active again. */r_(){this.zo&&(this.zo.cancel(),this.zo=null)}/** Cancels the health check delayed operation. */i_(){this.jo&&(this.jo.cancel(),this.jo=null)}/**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */async close(e,t){// Cancel any outstanding timers (they're guaranteed not to execute).
this.r_(),this.i_(),this.Ho.cancel(),// underlying stream), guaranteeing they won't execute.
this.Go++,4/* PersistentStreamState.Error */!==e?this.Ho.reset():t&&t.code===rv.RESOURCE_EXHAUSTED?(rm(t.toString()),rm("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===rv.UNAUTHENTICATED&&3/* PersistentStreamState.Healthy */!==this.state&&// "unauthenticated" error means the token was rejected. This should rarely
// happen since both Auth and AppCheck ensure a sufficient TTL when we
// request a token. If a user manually resets their system clock this can
// fail, however. In this case, we should get a Code.UNAUTHENTICATED error
// before we received the first message and we need to invalidate the token
// to ensure that we fetch a new token.
(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),// inhibit backoff or otherwise manipulate the state in its non-started state.
this.state=e,await this.listener.Eo(t)}/**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */s_(){}auth(){this.state=1/* PersistentStreamState.Starting */;let e=this.o_(this.Go),t=this.Go;// TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,i])=>{// Stream can be stopped while waiting for authentication.
// TODO(mikelehen): We really should just use dispatchIfNotClosed
// and let this dispatch onto the queue, but that opened a spec test can
// of worms that I don't want to deal with in this PR.
this.Go===t&&// Normally we'd have to schedule the callback on the AsyncQueue.
// However, the following calls are safe to be called outside the
// AsyncQueue since they don't chain asynchronous calls
this.__(e,i)},t=>{e(()=>{let e=new rw(rv.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let i=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{i(()=>(this.state=2/* PersistentStreamState.Open */,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3/* PersistentStreamState.Healthy */),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{i(()=>this.a_(e))}),this.stream.onMessage(e=>{i(()=>this.onMessage(e))})}Zo(){this.state=5/* PersistentStreamState.Backoff */,this.Ho.Qo(async()=>{this.state=0/* PersistentStreamState.Initial */,this.start()})}// Visible for tests
a_(e){// In theory the stream could close cleanly, however, in our current model
// we never expect this to happen because if we stop a stream ourselves,
// this callback will never be called. To prevent cases where we retry
// without a backoff accidentally, we set the stream to error in all cases.
return rf("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4/* PersistentStreamState.Error */,e)}/**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(rf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */class oU extends oV{constructor(e,t,i,n,r,s){super(e,"listen_stream_connection_backoff"/* TimerId.ListenStreamConnectionBackoff */,"listen_stream_idle"/* TimerId.ListenStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,i,n,s),this.serializer=r}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){// A successful response means the stream is healthy
this.Ho.reset();let t=function(e,t){let i;if("targetChange"in t){var n,r;t.targetChange;// proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
// if unset
let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0/* WatchTargetChangeState.NoChange */:"ADD"===n?1/* WatchTargetChangeState.Added */:"REMOVE"===n?2/* WatchTargetChangeState.Removed */:"CURRENT"===n?3/* WatchTargetChangeState.Current */:"RESET"===n?4/* WatchTargetChangeState.Reset */:ry(),a=t.targetChange.targetIds||[],o=(r=t.targetChange.resumeToken,e.useProto3Json?(void 0===r||"string"==typeof r||ry(),r2.fromBase64String(r||"")):(void 0===r||r instanceof Uint8Array||ry(),r2.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause,u=l&&function(e){let t=void 0===e.code?rv.UNKNOWN:aS(e.code);return new rw(t,e.message||"")}(l);i=new aM(s,a,o,u||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let r=aJ(e,n.document.name),s=aQ(n.document.updateTime),a=n.document.createTime?aQ(n.document.createTime):rx.min(),o=new sg({mapValue:{fields:n.document.fields}}),l=sy.newFoundDocument(r,s,a,o),u=n.targetIds||[],h=n.removedTargetIds||[];i=new aP(u,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let r=aJ(e,n.document),s=n.readTime?aQ(n.readTime):rx.min(),a=sy.newNoDocument(r,s),o=n.removedTargetIds||[];i=new aP([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let r=aJ(e,n.document),s=n.removedTargetIds||[];i=new aP([],s,r,null)}else{if(!("filter"in t))return ry();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:r}=e,s=new aC(n,r),a=e.targetId;i=new aO(a,s)}}return i}(this.serializer,e),i=function(e){// We have only reached a consistent snapshot for the entire stream if there
// is a read_time set and it applies to all targets (i.e. the list of
// targets is empty). The backend is guaranteed to send such responses.
if(!("targetChange"in e))return rx.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rx.min():t.readTime?aQ(t.readTime):rx.min()}(e);return this.listener.c_(t,i)}/**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */l_(e){let t={};t.database=a0(this.serializer),t.addTarget=function(e,t){let i;let n=t.target;if((i=sU(n)?{documents:{documents:[aZ(e,n.path)]}}:{query:function(e,t){var i,n;// Dissect the path into parent, collectionId, and optional key filter.
let r={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(r.parent=aZ(e,s),r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r.parent=aZ(e,s.popLast()),r.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof sT?function(e){if("=="/* Operator.EQUAL */===e.op){if(sd(e.value))return{unaryFilter:{field:a9(e.field),op:"IS_NAN"}};if(sc(e.value))return{unaryFilter:{field:a9(e.field),op:"IS_NULL"}}}else if("!="/* Operator.NOT_EQUAL */===e.op){if(sd(e.value))return{unaryFilter:{field:a9(e.field),op:"IS_NOT_NAN"}};if(sc(e.value))return{unaryFilter:{field:a9(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:a9(e.field),op:aq[e.op],value:e.value}}}(t):t instanceof sI?function(t){let i=t.getFilters().map(t=>e(t));return 1===i.length?i[0]:{compositeFilter:{op:a$[t.op],filters:i}}}(t):ry()}(sI.create(e,"and"/* CompositeOperator.AND */))}(t.filters);a&&(r.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:a9(e.field),direction:aj[e.dir]}))}(t.orderBy);o&&(r.structuredQuery.orderBy=o);let l=aK(e,t.limit);return null!==l&&(r.structuredQuery.limit=l),t.startAt&&(r.structuredQuery.startAt={before:(i=t.startAt).inclusive,values:i.position}),t.endAt&&(r.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),r}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){i.resumeToken=aG(e,t.resumeToken);let n=aK(e,t.expectedCount);null!==n&&(i.expectedCount=n)}else if(t.snapshotVersion.compareTo(rx.min())>0){// TODO(wuandy): Consider removing above check because it is most likely true.
// Right now, many tests depend on this behaviour though (leaving min() out
// of serialization).
i.readTime=aH(e,t.snapshotVersion.toTimestamp());let n=aK(e,t.expectedCount);null!==n&&(i.expectedCount=n)}return i}(this.serializer,e);let i=function(e,t){let i=function(e){switch(e){case"TargetPurposeListen"/* TargetPurpose.Listen */:return null;case"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */:return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */:return"limbo-document";default:return ry()}}(t.purpose);return null==i?null:{"goog-listen-tags":i}}(this.serializer,e);i&&(t.labels=i),this.n_(t)}/**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */h_(e){let t={};t.database=a0(this.serializer),t.removeTarget=e,this.n_(t)}}/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */class oB extends oV{constructor(e,t,i,n,r,s){super(e,"write_stream_connection_backoff"/* TimerId.WriteStreamConnectionBackoff */,"write_stream_idle"/* TimerId.WriteStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,i,n,s),this.serializer=r,this.P_=!1}/**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */get I_(){return this.P_}// Override of PersistentStream.start
start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,i;if(e.streamToken||ry(),this.lastStreamToken=e.streamToken,this.P_){// A successful first write response means the stream is healthy,
// Note, that we could consider a successful handshake healthy, however,
// the write itself might be causing an error we want to back off from.
this.Ho.reset();let n=(t=e.writeResults,i=e.commitTime,t&&t.length>0?(void 0!==i||ry(),t.map(e=>{let t;return(t=e.updateTime?aQ(e.updateTime):aQ(i)).isEqual(rx.min())&&// The Firestore Emulator currently returns an update time of 0 for
// deletes of non-existing documents (rather than null). This breaks the
// test "get deleted doc while offline with source=cache" as NoDocuments
// with version 0 are filtered by IndexedDb's RemoteDocumentCache.
// TODO(#2149): Remove this when Emulator is fixed
(t=aQ(i)),new al(t,e.transformResults||[])})):[]),r=aQ(e.commitTime);return this.listener.T_(r,n)}// The first response is always the handshake response
return e.writeResults&&0!==e.writeResults.length&&ry(),this.P_=!0,this.listener.E_()}/**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */A_(){// TODO(dimond): Support stream resumption. We intentionally do not set the
// stream token on the handshake, ignoring any stream token we might have.
let e={};e.database=a0(this.serializer),this.n_(e)}/** Sends a group of mutations to the Firestore backend to apply. */d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var i;let n;if(t instanceof ap)n={update:a2(e,t.key,t.value)};else if(t instanceof ab)n={delete:aX(e,t.key)};else if(t instanceof ag)n={update:a2(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof aE))return ry();n={verify:aX(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let i=t.transform;if(i instanceof ae)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(i instanceof at)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:i.elements}};if(i instanceof an)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:i.elements}};if(i instanceof as)return{fieldPath:t.field.canonicalString(),increment:i.Te};throw ry()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(i=t.precondition).updateTime?{updateTime:aH(e,i.updateTime.toTimestamp())}:void 0!==i.exists?{exists:i.exists}:ry()),n})(this.serializer,e))};this.n_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 *//**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */class oj extends class{}{constructor(e,t,i,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=n,this.R_=!1}V_(){if(this.R_)throw new rw(rv.FAILED_PRECONDITION,"The client has already been terminated.")}/** Invokes the provided RPC with auth and AppCheck tokens. */bo(e,t,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,r])=>this.connection.bo(e,t,i,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rw(rv.UNKNOWN,e.toString())})}/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */Fo(e,t,i,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Fo(e,t,i,r,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rv.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rw(rv.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */class oq{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,/** The current OnlineState. */this.state="Unknown"/* OnlineState.Unknown */,/**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */this.f_=0,/**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */this.g_=null,/**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */this.p_=!0}/**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */y_(){0===this.f_&&(this.w_("Unknown"/* OnlineState.Unknown */),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout"/* TimerId.OnlineStateTimeout */,1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"/* OnlineState.Offline */),Promise.resolve())))}/**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */b_(e){"Online"/* OnlineState.Online */===this.state?this.w_("Unknown"/* OnlineState.Unknown */):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.w_("Offline"/* OnlineState.Offline */)))}/**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */set(e){this.D_(),this.f_=0,"Online"/* OnlineState.Online */===e&&// We've connected to watch at least once. Don't warn the developer
// about being offline going forward.
(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(rm(t),this.p_=!1):rf("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */e,/** The client-side proxy for interacting with the backend. */t,i,n,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},/**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */this.C_=[],/**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */this.v_=new Map,/**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */this.F_=new Set,/**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */this.M_=[],this.x_=r,this.x_.so(e=>{i.enqueueAndForget(async()=>{// Porting Note: Unlike iOS, `restartNetwork()` is called even when the
// network becomes unreachable as we don't have any other way to tear
// down our streams.
oJ(this)&&(rf("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4/* OfflineCause.ConnectivityChange */),await oK(e),e.O_.set("Unknown"/* OnlineState.Unknown */),e.F_.delete(4/* OfflineCause.ConnectivityChange */),await oz(e)}(this))})}),this.O_=new oq(i,n)}}async function oz(e){if(oJ(e))for(let t of e.M_)await t(/* enabled= */!0)}/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */async function oK(e){for(let t of e.M_)await t(/* enabled= */!1)}/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */function oH(e,t){e.v_.has(t.targetId)||// Mark this as something the client is currently listening for.
(e.v_.set(t.targetId,t),oX(e)?oY(e):ln(e).Yo()&&oQ(e,t))}/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */function oG(e,t){let i=ln(e);e.v_.delete(t),i.Yo()&&oW(e,t),0===e.v_.size&&(i.Yo()?i.e_():oJ(e)&&// Revert to OnlineState.Unknown if the watch stream is not open and we
// have no listeners, since without any listens to send we cannot
// confirm if the stream is healthy and upgrade to OnlineState.Online.
e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */function oQ(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rx.min())>0){let i=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(i)}ln(e).l_(t)}/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */function oW(e,t){e.N_.Le(t),ln(e).h_(t)}function oY(e){e.N_=new aV({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),ln(e).start(),e.O_.y_()}/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */function oX(e){return oJ(e)&&!ln(e).Jo()&&e.v_.size>0}function oJ(e){return 0===e.F_.size}async function oZ(e){e.v_.forEach((t,i)=>{oQ(e,t)})}async function o0(e,t){e.N_=void 0,oX(e)?(e.O_.b_(t),oY(e)):// The online state is set to unknown because there is no active attempt
// at establishing a connection
e.O_.set("Unknown"/* OnlineState.Unknown */)}async function o1(e,t,i){if(e.O_.set("Online"/* OnlineState.Online */),t instanceof aM&&2/* WatchTargetChangeState.Removed */===t.state&&t.cause)// to raise events
try{await /** Handles an error on a target */async function(e,t){let i=t.cause;for(let n of t.targetIds)e.v_.has(n)&&(await e.remoteSyncer.rejectListen(n,i),e.v_.delete(n),e.N_.removeTarget(n))}(e,t)}catch(i){rf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await o2(e,i)}else if(t instanceof aP?e.N_.Ge(t):t instanceof aO?e.N_.Xe(t):e.N_.He(t),!i.isEqual(rx.min()))try{let t=await o_(e.localStore);i.compareTo(t)>=0&&// We have received a target change with a global snapshot if the snapshot
// version is not equal to SnapshotVersion.min().
await /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */function(e,t){let i=e.N_._t(t);// Update in-memory resume tokens. LocalStore will update the
// persistent view of these when applying the completed RemoteEvent.
return i.targetChanges.forEach((i,n)=>{if(i.resumeToken.approximateByteSize()>0){let r=e.v_.get(n);// A watched target might have been removed already.
r&&e.v_.set(n,r.withResumeToken(i.resumeToken,t))}}),// existence filter mismatches.
i.targetMismatches.forEach((t,i)=>{let n=e.v_.get(t);if(!n)return;// Clear the resume token for the target, since we're in a known mismatch
// state.
e.v_.set(t,n.withResumeToken(r2.EMPTY_BYTE_STRING,n.snapshotVersion)),// deliberately don't send a resume token so that we get a full update.
oW(e,t);// Mark the target we send as being on behalf of an existence filter
// mismatch, but don't actually retain that in listenTargets. This ensures
// that we flag the first re-listen this way without impacting future
// listens of this target (that might happen e.g. on reconnect).
let r=new a5(n.target,t,i,n.sequenceNumber);oQ(e,r)}),e.remoteSyncer.applyRemoteEvent(i)}(e,i)}catch(t){rf("RemoteStore","Failed to raise snapshot:",t),await o2(e,t)}}/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */async function o2(e,t,i){if(!r$(t))throw t;e.F_.add(1/* OfflineCause.IndexedDbFailed */),await oK(e),e.O_.set("Offline"/* OnlineState.Offline */),i||// Use a simple read operation to determine if IndexedDB recovered.
// Ideally, we would expose a health check directly on SimpleDb, but
// RemoteStore only has access to persistence through LocalStore.
(i=()=>o_(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{rf("RemoteStore","Retrying IndexedDB access"),await i(),e.F_.delete(1/* OfflineCause.IndexedDbFailed */),await oz(e)})}/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */function o9(e,t){return t().catch(i=>o2(e,i,t))}async function o4(e){let t=lr(e),i=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;oJ(e)&&e.C_.length<10;)try{let n=await /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}(e.localStore,i);if(null===n){0===e.C_.length&&t.e_();break}i=n.batchId,/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */function(e,t){e.C_.push(t);let i=lr(e);i.Yo()&&i.I_&&i.d_(t.mutations)}(e,n)}catch(t){await o2(e,t)}o6(e)&&o5(e)}function o6(e){return oJ(e)&&!lr(e).Jo()&&e.C_.length>0}function o5(e){lr(e).start()}async function o3(e){lr(e).A_()}async function o7(e){let t=lr(e);// Send the write pipeline now that the stream is established.
for(let i of e.C_)t.d_(i.mutations)}async function o8(e,t,i){let n=e.C_.shift(),r=aT.from(n,t,i);await o9(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),// slot has freed up.
await o4(e)}async function le(e,t){// If the write stream closed after the write handshake completes, a write
// operation failed and we fail the pending operation.
t&&lr(e).I_&&// This error affects the actual write.
await async function(e,t){var i;// Only handle permanent errors here. If it's transient, just let the retry
// logic kick in.
if(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */function(e){switch(e){default:return ry();case rv.CANCELLED:case rv.UNKNOWN:case rv.DEADLINE_EXCEEDED:case rv.RESOURCE_EXHAUSTED:case rv.INTERNAL:case rv.UNAVAILABLE:// Unauthenticated means something went wrong with our token and we need
// to retry with new credentials which will happen automatically.
case rv.UNAUTHENTICATED:return!1;case rv.INVALID_ARGUMENT:case rv.NOT_FOUND:case rv.ALREADY_EXISTS:case rv.PERMISSION_DENIED:case rv.FAILED_PRECONDITION:// Aborted might be retried in some scenarios, but that is dependant on
// the context and should handled individually by the calling code.
// See https://cloud.google.com/apis/design/errors.
case rv.ABORTED:case rv.OUT_OF_RANGE:case rv.UNIMPLEMENTED:case rv.DATA_LOSS:return!0}}(i=t.code)&&i!==rv.ABORTED){// This was a permanent error, the request itself was the problem
// so it's not going to succeed if we resend it.
let i=e.C_.shift();// In this case it's also unlikely that the server itself is melting
// down -- this was just a bad request so inhibit backoff on the next
// restart.
lr(e).Xo(),await o9(e,()=>e.remoteSyncer.rejectFailedWrite(i.batchId,t)),// another slot has freed up.
await o4(e)}}(e,t),// pipeline for failed writes
o6(e)&&o5(e)}async function lt(e,t){e.asyncQueue.verifyOperationInProgress(),rf("RemoteStore","RemoteStore received new credentials");let i=oJ(e);// Tear down and re-create our network streams. This will ensure we get a
// fresh auth token for the new user and re-fill the write pipeline with
// new mutations from the LocalStore (since mutations are per-user).
e.F_.add(3/* OfflineCause.CredentialChange */),await oK(e),i&&// Don't set the network status to Unknown if we are offline.
e.O_.set("Unknown"/* OnlineState.Unknown */),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3/* OfflineCause.CredentialChange */),await oz(e)}/**
 * Toggles the network state when the client gains or loses its primary lease.
 */async function li(e,t){t?(e.F_.delete(2/* OfflineCause.IsSecondary */),await oz(e)):t||(e.F_.add(2/* OfflineCause.IsSecondary */),await oK(e),e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function ln(e){var t,i,n;return e.B_||// Create stream (but note that it is not started yet).
(e.B_=(t=e.datastore,i=e.asyncQueue,n={Io:oZ.bind(null,e),Eo:o0.bind(null,e),c_:o1.bind(null,e)},t.V_(),new oU(i,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.B_.Xo(),oX(e)?oY(e):e.O_.set("Unknown"/* OnlineState.Unknown */)):(await e.B_.stop(),e.N_=void 0)})),e.B_}/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function lr(e){var t,i,n;return e.L_||// Create stream (but note that it is not started yet).
(e.L_=(t=e.datastore,i=e.asyncQueue,n={Io:o3.bind(null,e),Eo:le.bind(null,e),E_:o7.bind(null,e),T_:o8.bind(null,e)},t.V_(),new oB(i,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.L_.Xo(),await o4(e)):(await e.L_.stop(),e.C_.length>0&&(rf("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */class ls{constructor(e,t,i,n,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=n,this.removalCallback=r,this.deferred=new rb,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
// 'UnhandledPromiseRejectionWarning' log spam.
this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}/**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */static createAndSchedule(e,t,i,n,r){let s=Date.now()+i,a=new ls(e,t,s,n,r);return a.start(i),a}/**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}/**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */skipDelay(){return this.handleDelayElapsed()}/**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rw(rv.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function la(e,t){if(rm("AsyncQueue",`${t}: ${e}`),r$(e))return new rw(rv.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */class lo{/** The default ordering is by key if the comparator is omitted */constructor(e){// We are adding document key comparator to the end as it's the only
// guaranteed unique property of a document.
this.comparator=e?(t,i)=>e(t,i)||rV.comparator(t.key,i.key):(e,t)=>rV.comparator(e.key,t.key),this.keyedMap=sZ(),this.sortedSet=new rW(this.comparator)}/**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */static emptySet(e){return new lo(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}/**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}/** Iterates documents in order defined by "comparator" */forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}/** Inserts or updates a document with the same key */add(e){// First remove the element if we have it.
let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}/** Deletes a document with a given key */delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=i.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let i=new lo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */class ll{constructor(){this.k_=new rW(rV.comparator)}track(e){let t=e.doc.key,i=this.k_.get(t);i?0/* ChangeType.Added */!==e.type&&3/* ChangeType.Metadata */===i.type?this.k_=this.k_.insert(t,e):3/* ChangeType.Metadata */===e.type&&1/* ChangeType.Removed */!==i.type?this.k_=this.k_.insert(t,{type:i.type,doc:e.doc}):2/* ChangeType.Modified */===e.type&&2/* ChangeType.Modified */===i.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):2/* ChangeType.Modified */===e.type&&0/* ChangeType.Added */===i.type?this.k_=this.k_.insert(t,{type:0/* ChangeType.Added */,doc:e.doc}):1/* ChangeType.Removed */===e.type&&0/* ChangeType.Added */===i.type?this.k_=this.k_.remove(t):1/* ChangeType.Removed */===e.type&&2/* ChangeType.Modified */===i.type?this.k_=this.k_.insert(t,{type:1/* ChangeType.Removed */,doc:i.doc}):0/* ChangeType.Added */===e.type&&1/* ChangeType.Removed */===i.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):// Added->Added
// Removed->Removed
// Modified->Added
// Removed->Modified
// Metadata->Added
// Removed->Metadata
ry():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,i)=>{e.push(i)}),e}}class lu{constructor(e,t,i,n,r,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=n,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}/** Returns a view snapshot as if all documents in the snapshot were added. */static fromInitialDocuments(e,t,i,n,r){let s=[];return t.forEach(e=>{s.push({type:0/* ChangeType.Added */,doc:e})}),new lu(e,t,lo.emptySet(t),s,i,n,/* syncStateChanged= */!0,/* excludesMetadataChanges= */!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sK(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==i[e].type||!t[e].doc.isEqual(i[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */class lh{constructor(){this.Q_=void 0,this.listeners=[]}}class lc{constructor(){this.queries=new sY(e=>sH(e),sK),this.onlineState="Unknown"/* OnlineState.Unknown */,this.K_=new Set}}async function ld(e,t){let i=t.query,n=!1,r=e.queries.get(i);if(r||(n=!0,r=new lh),n)try{r.Q_=await e.onListen(i)}catch(i){let e=la(i,`Initialization of query '${sG(t.query)}' failed`);return void t.onError(e)}e.queries.set(i,r),r.listeners.push(t),t.U_(e.onlineState),r.Q_&&t.W_(r.Q_)&&lg(e)}async function lf(e,t){let i=t.query,n=!1,r=e.queries.get(i);if(r){let e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),n=0===r.listeners.length)}if(n)return e.queries.delete(i),e.onUnlisten(i)}function lm(e,t){let i=!1;for(let n of t){let t=n.query,r=e.queries.get(t);if(r){for(let e of r.listeners)e.W_(n)&&(i=!0);r.Q_=n}}i&&lg(e)}function lp(e,t,i){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(i);// Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
// after an error.
e.queries.delete(t)}// Call all global snapshot listeners that have been set.
function lg(e){e.K_.forEach(e=>{e.next()})}/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */class ly{constructor(e,t,i){this.query=e,this.G_=t,/**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */this.z_=!1,this.j_=null,this.onlineState="Unknown"/* OnlineState.Unknown */,this.options=i||{}}/**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */W_(e){if(!this.options.includeMetadataChanges){// Remove the metadata only changes.
let t=[];for(let i of e.docChanges)3/* ChangeType.Metadata */!==i.type&&t.push(i);e=new lu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,/* excludesMetadataChanges= */!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}/** Returns whether a snapshot was raised. */U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return(// Always raise the first event when we're synced
!e.fromCache||(!this.options.Z_||!("Offline"/* OnlineState.Offline */!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"/* OnlineState.Offline */===t));// Raise data from cache if we have any documents, have cached results before,
// or we are offline.
}H_(e){// We don't need to handle includeDocumentMetadataChanges here because
// the Metadata only changes have already been stripped out if needed.
// At this point the only changes we will see are the ones we should
// propagate.
if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges;// Generally we should have hit one of the cases above, but it's possible
// to get here if there were only metadata docChanges and they got
// stripped out.
}Y_(e){e=lu.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.key=e}}class lw{constructor(e){this.key=e}}/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */class lb{constructor(e,/** Documents included in the remote target */t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,/**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */this.current=!1,/** Documents in the view but not in the remote target */this.aa=s4(),/** Document Keys that have local changes */this.mutatedKeys=s4(),this.ua=sW(e),this.ca=new lo(this.ua)}/**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */get la(){return this.oa}/**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */ha(e,t){let i=t?t.Pa:new ll,n=t?t.ca:this.ca,r=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"/* LimitType.First */===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"/* LimitType.Last */===this.query.limitType&&n.size===this.query.limit?n.first():null;// Drop documents out to meet limit/limitToLast requirement.
if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=sQ(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||// We only consider committed mutations for documents that were
// mutated during the lifetime of the view.
this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(i.track({type:3/* ChangeType.Metadata */,doc:h}),f=!0):this.Ia(u,h)||(i.track({type:2/* ChangeType.Modified */,doc:h}),f=!0,(o&&this.ua(h,o)>0||l&&0>this.ua(h,l))&&// This doc moved from inside the limit to outside the limit.
// That means there may be some other doc in the local cache
// that should be included instead.
(a=!0)):!u&&h?(i.track({type:0/* ChangeType.Added */,doc:h}),f=!0):u&&!h&&(i.track({type:1/* ChangeType.Removed */,doc:u}),f=!0,(o||l)&&// A doc was removed from a full limit query. We'll need to
// requery from the local cache to see if we know about some other
// doc that should be in the results.
(a=!0)),f&&(h?(s=s.add(h),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"/* LimitType.First */===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),i.track({type:1/* ChangeType.Removed */,doc:e})}return{ca:s,Pa:i,es:a,mutatedKeys:r}}Ia(e,t){// We suppress the initial change event for documents that were modified as
// part of a write acknowledgment (e.g. when the value of a server transform
// is applied) as Watch will send us the same document again.
// By suppressing the event, we only raise two user visible events (one with
// `hasPendingWrites` and the final state of the document) instead of three
// (one with `hasPendingWrites`, the modified document with
// `hasPendingWrites` and the final state of the document).
return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}/**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */// PORTING NOTE: The iOS/Android clients always compute limbo document changes.
applyChanges(e,t,i){let n=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;// Sort changes based on type and query comparator
let r=e.Pa.q_();r.sort((e,t)=>(function(e,t){let i=e=>{switch(e){case 0/* ChangeType.Added */:return 1;case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:// A metadata change is converted to a modified change at the public
    // api layer.  Since we sort by document key and then change type,
    // metadata and modified changes must be sorted equivalently.
    return 2;case 1/* ChangeType.Removed */:return 0;default:return ry()}};return i(e)-i(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(i);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1/* SyncState.Synced */:0/* SyncState.Local */,o=a!==this._a;return(this._a=a,0!==r.length||o)?{snapshot:new lu(this.query,e.ca,n,r,e.mutatedKeys,0/* SyncState.Local */===a,o,/* excludesMetadataChanges= */!1,!!i&&i.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}/**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */U_(e){return this.current&&"Offline"/* OnlineState.Offline */===e?// to refresh our syncState and generate a ViewChange as appropriate. We
// are guaranteed to get a new TargetChange that sets `current` back to
// true once the client is back online.
(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ll,mutatedKeys:this.mutatedKeys,es:!1},/* updateLimboDocuments= */!1)):{Ea:[]}}/**
     * Returns whether the doc for the given key should be in limbo.
     */Aa(e){// If the remote end says it's part of this query, it's not in limbo.
return!this.oa.has(e)&&// The local store doesn't think it's a result, so it shouldn't be in limbo.
!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}/**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){// We can only determine limbo documents when we're in-sync with the server.
if(!this.current)return[];// TODO(klimt): Do this incrementally so that it's not quadratic when
// updating many documents.
let e=this.aa;this.aa=s4(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});// Diff the new limbo docs with the old limbo docs.
let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new lw(e))}),this.aa.forEach(i=>{e.has(i)||t.push(new lv(i))}),t}/**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */// PORTING NOTE: Multi-tab only.
Ra(e){this.oa=e.Ps,this.aa=s4();let t=this.ha(e.documents);return this.applyChanges(t,/*updateLimboDocuments=*/!0)}/**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */// PORTING NOTE: Multi-tab only.
Va(){return lu.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0/* SyncState.Local */===this._a,this.hasCachedResults)}}/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */class lE{constructor(/**
     * The query itself.
     */e,/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */t,/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */i){this.query=e,this.targetId=t,this.view=i}}/** Tracks a limbo resolution. */class l_{constructor(e){this.key=e,/**
         * Set to true once we've received a document. This is used in
         * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
         * decide whether it needs to manufacture a delete event for the target once
         * the target is CURRENT.
         */this.ma=!1}}/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class lT{constructor(e,t,i,n,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=n,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new sY(e=>sH(e),sK),this.pa=new Map,/**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */this.ya=new Set,/**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */this.wa=new rW(rV.comparator),/**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */this.Sa=new Map,this.ba=new ol,/** Stores user completion handlers, indexed by User and BatchId. */this.Da={},/** Stores user callbacks waiting for all pending writes to be acknowledged. */this.Ca=new Map,this.va=oi.Ln(),this.onlineState="Unknown"/* OnlineState.Unknown */,// startup. In the interim, a client should only be considered primary if
// `isPrimary` is true.
this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */async function lI(e,t){var i,n;let r,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=lD.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lk.bind(null,e),e.fa.c_=lm.bind(null,e.eventManager),e.fa.xa=lp.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)// already exists when EventManager calls us for the first time. This
// happens when the primary tab is already listening to this query on
// behalf of another tab and the user of the primary also starts listening
// to the query. EventManager will not have an assigned target ID in this
// case and calls `listen` to obtain this ID.
r=o.targetId,a.sharedClientState.addLocalQueryTarget(r),s=o.view.Va();else{let e=await (i=a.localStore,n=s$(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Kr.getTargetData(e,n).next(r=>r?// previous targetID.
    // TODO(mcg): freshen last accessed date?
    (t=r,rq.resolve(t)):i.Kr.allocateTargetId(e).next(r=>(t=new a5(n,r,"TargetPurposeListen"/* TargetPurpose.Listen */,e.currentSequenceNumber),i.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{// If Multi-Tab is enabled, the existing target data may be newer than
// the in-memory data
let t=i.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.rs=i.rs.insert(e.targetId,e),i.ss.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await lC(a,t,r,"current"===o,e.resumeToken),a.isPrimaryClient&&oH(a.remoteStore,e)}return s}/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */async function lC(e,t,i,n,r){// PORTING NOTE: On Web only, we inject the code that registers new Limbo
// targets based on view changes. This allows us to only depend on Limbo
// changes when user code includes queries.
e.Ma=(t,i,n)=>(async function(e,t,i,n){let r=t.view.ha(i);r.es&&// The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (r=await oI(e.localStore,t.query,/* usePreviousResults= */!1).then(({documents:e})=>t.view.ha(e,r)));let s=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(r,/* updateLimboDocuments= */e.isPrimaryClient,s);return lF(e,t.targetId,a.Ea),a.snapshot})(e,t,i,n);let s=await oI(e.localStore,t,/* usePreviousResults= */!0),a=new lb(t,s.Ps),o=a.ha(s.documents),l=ax.createSynthesizedTargetChangeForCurrentChange(i,n&&"Offline"/* OnlineState.Offline */!==e.onlineState,r),u=a.applyChanges(o,/* updateLimboDocuments= */e.isPrimaryClient,l);lF(e,i,u.Ea);let h=new lE(t,i,a);return e.ga.set(t,h),e.pa.has(i)?e.pa.get(i).push(t):e.pa.set(i,[t]),u.snapshot}/** Stops listening to the query. */async function lS(e,t){let i=e.ga.get(t),n=e.pa.get(i.targetId);if(n.length>1)return e.pa.set(i.targetId,n.filter(e=>!sK(e,t))),void e.ga.delete(t);e.isPrimaryClient?(// We need to remove the local query target first to allow us to verify
// whether any other client is still interested in this target.
e.sharedClientState.removeLocalQueryTarget(i.targetId),e.sharedClientState.isActiveQueryTarget(i.targetId)||await oT(e.localStore,i.targetId,/*keepPersistedTargetData=*/!1).then(()=>{e.sharedClientState.clearQueryState(i.targetId),oG(e.remoteStore,i.targetId),lO(e,i.targetId)}).catch(rj)):(lO(e,i.targetId),await oT(e.localStore,i.targetId,/*keepPersistedTargetData=*/!0))}/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */async function lA(e,t,i){var n;let r=(e.remoteStore.remoteSyncer.applySuccessfulWrite=lL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lR.bind(null,e),e);try{let e;let s=await function(e,t){let i,n;let r=rR.now(),s=t.reduce((e,t)=>e.add(t.key),s4());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{// Figure out which keys do not have a remote version in the cache, this
// is needed to create the right overlay mutation: if no remote version
// presents, we do not need to create overlays as patch mutations.
// TODO(Overlay): Is there a better way to determine this? Using the
//  document version does not work because local mutations set them back
//  to 0.
let o=sX,l=s4();return e._s.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{i=n;// For non-idempotent mutations (such as `FieldValue.increment()`),
// we record the base state in a separate patch mutation. This is
// later used to guarantee consistent values and prevents flicker
// even if the backend sends us an update that already includes our
// transform.
let s=[];for(let e of t){let t=/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */function(e,t){let i=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),r=s8(n.transform,e||null);null!=r&&(null===i&&(i=sg.empty()),i.set(n.field,r))}return i||null}(e,i.get(e.key).overlayedDocument);null!=t&&// NOTE: The base state should only be applied if there's some
// existing document to override, so use a Precondition of
// exists=true
s.push(new ag(e.key,t,/**
 * Returns a FieldMask built from all fields in a MapValue.
 */function e(t){let i=[];return rG(t.fields,(t,n)=>{let r=new rF([t]);if(sf(n)){let t=e(n.mapValue).fields;if(0===t.length)i.push(r);else // leaf nodes.
for(let e of t)i.push(r.child(e))}else // nodes.
i.push(r)}),new r0(i)}(t.value.mapValue),au.exists(!0)))}return e.mutationQueue.addMutationBatch(a,r,s,t)}).next(t=>{n=t;let r=t.applyToLocalDocumentSet(i,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,r)})}).then(()=>({batchId:n.batchId,changes:s0(i)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=r.Da[r.currentUser.toKey()])||(e=new rW(rk)),e=e.insert(n,i),r.Da[r.currentUser.toKey()]=e,await lU(r,s.changes),await o4(r.remoteStore)}catch(t){// If we can't persist the mutation, we reject the user callback and
// don't send the mutation. The user can then retry the write.
let e=la(t,"Failed to persist write");i.reject(e)}}/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */async function lD(e,t){try{let i=await /**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */function(e,t){let i=t.snapshotVersion,n=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{var s;let a,o;let l=e._s.newChangeBuffer({trackRemovals:!0});// Reset newTargetDataByTargetMap in case this transaction gets re-run.
n=e.rs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;// Only update the remote keys if the target is still active. This
// ensures that we can persist the updated target data along with
// the updated assignment.
u.push(e.Kr.removeMatchingKeys(r,s.removedDocuments,a).next(()=>e.Kr.addMatchingKeys(r,s.addedDocuments,a)));let h=l.withSequenceNumber(r.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(r2.EMPTY_BYTE_STRING,rx.min()).withLastLimboFreeSnapshotVersion(rx.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,i)),n=n.insert(a,h),o=h,// Always persist target data if we don't already have a resume token.
(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Kr.updateTargetData(r,h))});let h=sX,c=s4();// HACK: The only reason we allow a null snapshot version is so that we
// can synthesize remote events when we get permission denied errors while
// trying to resolve the state of a locally cached document that is in
// limbo.
if(t.documentUpdates.forEach(i=>{t.resolvedLimboDocuments.has(i)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(r,i))}),// the remote documents in advance in a single call.
u.push((s=t.documentUpdates,a=s4(),o=s4(),s.forEach(e=>a=a.add(e)),l.getEntries(r,a).next(e=>{let t=sX;return s.forEach((i,n)=>{let r=e.get(i);// Check if see if there is a existence state change for this document.
n.isFoundDocument()!==r.isFoundDocument()&&(o=o.add(i)),// to ensure that rejected limbo resolutions (which fabricate
// NoDocuments with SnapshotVersion.min()) never add documents to
// cache.
n.isNoDocument()&&n.version.isEqual(rx.min())?// events. We remove these documents from cache since we lost
// access.
(l.removeEntry(i,n.readTime),t=t.insert(i,n)):!r.isValidDocument()||n.version.compareTo(r.version)>0||0===n.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(n),t=t.insert(i,n)):rf("LocalStore","Ignoring outdated watch update for ",i,". Current version:",r.version," Watch version:",n.version)}),{ls:t,hs:o}})).next(e=>{h=e.ls,c=e.hs})),!i.isEqual(rx.min())){let t=e.Kr.getLastRemoteSnapshotVersion(r).next(t=>e.Kr.setTargetsMetadata(r,r.currentSequenceNumber,i));u.push(t)}return rq.waitFor(u).next(()=>l.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,h,c)).next(()=>h)}).then(t=>(e.rs=n,t))}(e.localStore,t);// Update `receivedDocument` as appropriate for any limbo targets.
t.targetChanges.forEach((t,i)=>{let n=e.Sa.get(i);n&&// Since this is a limbo resolution lookup, it's for a single document
// and it could be added, modified, or removed, but not a combination.
(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||ry(),t.addedDocuments.size>0?n.ma=!0:t.modifiedDocuments.size>0?n.ma||ry():t.removedDocuments.size>0&&(n.ma||ry(),n.ma=!1))}),await lU(e,i,t)}catch(e){await rj(e)}}/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */function lN(e,t,i){var n;// If we are the secondary client, we explicitly ignore the remote store's
// online state (the local client may go offline, even though the primary
// tab remains online) and only apply the primary tab's online state from
// SharedClientState.
if(e.isPrimaryClient&&0/* OnlineStateSource.RemoteStore */===i||!e.isPrimaryClient&&1/* OnlineStateSource.SharedClientState */===i){let i;let r=[];e.ga.forEach((e,i)=>{let n=i.view.U_(t);n.snapshot&&r.push(n.snapshot)}),(n=e.eventManager).onlineState=t,i=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.U_(t)&&(i=!0)}),i&&lg(n),r.length&&e.fa.c_(r),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */async function lk(e,t,i){// PORTING NOTE: Multi-tab only.
e.sharedClientState.updateQueryState(t,"rejected",i);let n=e.Sa.get(t),r=n&&n.key;if(r){// TODO(klimt): We really only should do the following on permission
// denied errors, but we don't have the cause code here.
// It's a limbo doc. Create a synthetic event saying it was deleted.
// This is kind of a hack. Ideally, we would have a method in the local
// store to purge a document. However, it would be tricky to keep all of
// the local store's invariants with another method.
let i=new rW(rV.comparator);// TODO(b/217189216): This limbo document should ideally have a read time,
// so that it is picked up by any read-time based scans. The backend,
// however, does not send a read time for target removals.
i=i.insert(r,sy.newNoDocument(r,rx.min()));let n=s4().add(r),s=new aR(rx.min(),/* targetChanges= */new Map,/* targetMismatches= */new rW(rk),i,n);await lD(e,s),// We only remove it from bookkeeping after we successfully applied the
// RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
// this query when the RemoteStore restarts the Watch stream, which should
// re-trigger the target failure.
e.wa=e.wa.remove(r),e.Sa.delete(t),lV(e)}else await oT(e.localStore,t,/* keepPersistedTargetData */!1).then(()=>lO(e,t,i)).catch(rj)}async function lL(e,t){var i;let n=t.batch.batchId;try{let r=await (i=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),r=i._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,i,n){let r=i.batch,s=r.keys(),a=rq.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=i.docVersions.get(e);null!==s||ry(),0>t.version.compareTo(s)&&(r.applyToRemoteDocument(t,i),t.isValidDocument()&&// We use the commitVersion as the readTime rather than the
// document's updateTime since the updateTime is not advanced
// for updates that do not modify the underlying document.
(t.setReadTime(i.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,r))})(i,e,t,r).next(()=>r.apply(e)).next(()=>i.mutationQueue.performConsistencyCheck(e)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=s4();for(let i=0;i<e.mutationResults.length;++i)e.mutationResults[i].transformResults.length>0&&(t=t.add(e.batch.mutations[i].key));return t}(t))).next(()=>i.localDocuments.getDocuments(e,n))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught
// up), so we raise user callbacks first so that they consistently happen
// before listen events.
lP(e,n,/*error=*/null),lx(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await lU(e,r)}catch(e){await rj(e)}}async function lR(e,t,i){var n;try{let r=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||ry(),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i)).next(()=>n.localDocuments.getDocuments(e,i))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught up),
// so we raise user callbacks first so that they consistently happen before
// listen events.
lP(e,t,i),lx(e,t),e.sharedClientState.updateMutationState(t,"rejected",i),await lU(e,r)}catch(e){await rj(e)}}/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */function lx(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}/** Reject all outstanding callbacks waiting for pending writes to complete. */function lP(e,t,i){let n=e.Da[e.currentUser.toKey()];// NOTE: Mutations restored from persistence won't have callbacks, so it's
// okay for there to be no callback for this ID.
if(n){let r=n.get(t);r&&(i?r.reject(i):r.resolve(),n=n.remove(t)),e.Da[e.currentUser.toKey()]=n}}function lO(e,t,i=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(n),i&&e.fa.xa(n,i);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||// We removed the last reference for this key
lM(e,t)})}function lM(e,t){e.ya.delete(t.path.canonicalString());// It's possible that the target already got removed because the query failed. In that case,
// the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
let i=e.wa.get(t);null!==i&&(oG(e.remoteStore,i),e.wa=e.wa.remove(t),e.Sa.delete(i),lV(e))}function lF(e,t,i){for(let n of i)n instanceof lv?(e.ba.addReference(n.key,t),function(e,t){let i=t.key,n=i.path.canonicalString();e.wa.get(i)||e.ya.has(n)||(rf("SyncEngine","New document in limbo: "+i),e.ya.add(n),lV(e))}(e,n)):n instanceof lw?(rf("SyncEngine","Document no longer in limbo: "+n.key),e.ba.removeReference(n.key,t),e.ba.containsKey(n.key)||// We removed the last reference for this key
lM(e,n.key)):ry()}/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */function lV(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t;let i=e.ya.values().next().value;e.ya.delete(i);let n=new rV(rO.fromString(i)),r=e.va.next();e.Sa.set(r,new l_(n)),e.wa=e.wa.insert(n,r),oH(e.remoteStore,new a5(s$((t=n.path,new sB(t))),r,"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */,rz.ae))}}async function lU(e,t,i){let n=[],r=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,i).then(t=>{// Update views if there are actual changes.
if(// secondary clients to update query state.
(t||i)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=oy.$i(o.targetId,t);r.push(e)}}))}),await Promise.all(s),e.fa.c_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",i=>rq.forEach(t,t=>rq.forEach(t.Qi,n=>e.persistence.referenceDelegate.addReference(i,t.targetId,n)).next(()=>rq.forEach(t.Ki,n=>e.persistence.referenceDelegate.removeReference(i,t.targetId,n)))))}catch(e){if(!r$(e))throw e;// If `notifyLocalViewChanges` fails, we did not advance the sequence
// number for the documents that were included in this transaction.
// This might trigger them to be deleted earlier than they otherwise
// would have, but it should not invalidate the integrity of the data.
rf("LocalStore","Failed to update sequence numbers: "+e)}for(let i of t){let t=i.targetId;if(!i.fromCache){let i=e.rs.get(t),n=i.snapshotVersion,r=i.withLastLimboFreeSnapshotVersion(n);// Advance the last limbo free snapshot version
e.rs=e.rs.insert(t,r)}}}(e.localStore,r))}async function lB(e,t){if(!e.currentUser.isEqual(t)){rf("SyncEngine","User change. New user:",t.toKey());let i=await oE(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new rw(rv.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await lU(e,i.cs)}}function lj(e,t){let i=e.Sa.get(t);if(i&&i.ma)return s4().add(i.key);{let i=s4(),n=e.pa.get(t);if(!n)return i;for(let t of n){let n=e.ga.get(t);i=i.unionWith(n.view.la)}return i}}class lq{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oM(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var /** Manages our in-memory or durable persistence. */t,i,n,r;return t=this.persistence,i=new ow,n=e.initialUser,r=this.serializer,new ob(t,i,n,r)}createPersistence(e){return new om(og.Jr,this.serializer)}createSharedClientState(e){return new oS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */class l${async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,/* startAsPrimary=*/!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lN(this.syncEngine,e,1/* OnlineStateSource.SharedClientState */),this.remoteStore.remoteSyncer.handleCredentialChange=lB.bind(null,this.syncEngine),await li(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lc}createDatastore(e){var t,i,n;let r=oM(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new oP(t));return i=e.authCredentials,n=e.appCheckCredentials,new oj(i,n,s,r)}createRemoteStore(e){var t,i,n,r;return t=this.localStore,i=this.datastore,n=e.asyncQueue,r=oD.C()?new oD:new oA,new o$(t,i,n,e=>lN(this.syncEngine,e,0/* OnlineStateSource.RemoteStore */),r)}createSyncEngine(e,t){return function(e,t,i,n,r,s,a){let o=new lT(e,t,i,n,r,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){rf("RemoteStore","RemoteStore shutting down."),e.F_.add(5/* OfflineCause.Shutdown */),await oK(e),e.x_.shutdown(),// triggering spurious listener events with cached data, etc.
e.O_.set("Unknown"/* OnlineState.Unknown */)}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */class lz{constructor(e){this.observer=e,/**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):rm("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * FirestoreClient is a top-level class that constructs and owns all of the //
 * pieces of the client SDK architecture. It is responsible for creating the //
 * async queue that is shared by all of the other components in the system. //
 */class lK{constructor(e,t,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */i,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=n,this.user=ru.UNAUTHENTICATED,this.clientId=rN.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async e=>{rf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(i,e=>(rf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rw(rv.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new rb;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(i){let t=la(i,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function lH(e,t){e.asyncQueue.verifyOperationInProgress(),rf("FirestoreClient","Initializing OfflineComponentProvider");let i=await e.getConfiguration();await t.initialize(i);let n=i.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await oE(t.localStore,e),n=e)}),// need to be terminated to allow the delete to succeed.
t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function lG(e,t){e.asyncQueue.verifyOperationInProgress();let i=await lQ(e);rf("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(i,n),// precedence over the offline component provider.
e.setCredentialChangeListener(e=>lt(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,i)=>lt(t.remoteStore,i)),e._onlineComponents=t}async function lQ(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){rf("FirestoreClient","Using user provided OfflineComponentProvider");try{await lH(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===rv.FAILED_PRECONDITION||t.code===rv.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||// When the browser is out of quota we could get either quota exceeded
// or an aborted error depending on whether the error happened during
// schema migration.
22===t.code||20===t.code||// Firefox Private Browsing mode disables IndexedDb and returns
// INVALID_STATE for any usage.
11===t.code))throw t;rp("Error using user provided cache. Falling back to memory cache: "+t),await lH(e,new lq)}}else rf("FirestoreClient","Using default OfflineComponentProvider"),await lH(e,new lq)}return e._offlineComponents}async function lW(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(rf("FirestoreClient","Using user provided OnlineComponentProvider"),await lG(e,e._uninitializedComponentsProvider._online)):(rf("FirestoreClient","Using default OnlineComponentProvider"),await lG(e,new l$))),e._onlineComponents}async function lY(e){let t=await lW(e),i=t.eventManager;return i.onListen=lI.bind(null,t.syncEngine),i.onUnlisten=lS.bind(null,t.syncEngine),i}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Compares two `ExperimentalLongPollingOptions` objects for equality.
 *//**
 * Creates and returns a new `ExperimentalLongPollingOptions` with the same
 * option values as the given instance.
 */function lX(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lJ=new Map;/**
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lZ(e,t,i){if(!i)throw new rw(rv.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */function l0(e){if(!rV.isDocumentKey(e))throw new rw(rv.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */function l1(e){if(rV.isDocumentKey(e))throw new rw(rv.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function l2(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let i=(t=e).constructor?t.constructor.name:null;return i?`a custom ${i} object`:"an object"}}return"function"==typeof e?"a function":ry()}function l9(e,t){if("_delegate"in e&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rw(rv.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let i=l2(e);throw new rw(rv.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${i}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */class l4{constructor(e){var t,i;if(void 0===e.host){if(void 0!==e.ssl)throw new rw(rv.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new rw(rv.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(e,t,i,n){if(!0===t&&!0===n)throw new rw(rv.INVALID_ARGUMENT,`${e} and ${i} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lX(null!==(i=e.experimentalLongPollingOptions)&&void 0!==i?i:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new rw(rv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new rw(rv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new rw(rv.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,i;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,t.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class l6{/** @hideconstructor */constructor(e,t,i,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=n,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l4({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new rw(rv.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new rw(rv.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l4(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new r_;switch(e.type){case"firstParty":return new rS(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new rw(rv.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(e){let t=lJ.get(e);t&&(rf("ComponentProvider","Removing Datastore"),lJ.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */class l5{// This is the lite version of the Query class in the main SDK.
/** @hideconstructor protected */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,i){this.converter=t,this._query=i,/** The type of this Firestore reference. */this.type="query",this.firestore=e}withConverter(e){return new l5(this.firestore,e,this._query)}}/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */class l3{/** @hideconstructor */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,i){this.converter=t,this._key=i,/** The type of this Firestore reference. */this.type="document",this.firestore=e}get _path(){return this._key.path}/**
     * The document's identifier within its collection.
     */get id(){return this._key.path.lastSegment()}/**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */get path(){return this._key.path.canonicalString()}/**
     * The collection this `DocumentReference` belongs to.
     */get parent(){return new l7(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new l3(this.firestore,e,this._key)}}/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */class l7 extends l5{/** @hideconstructor */constructor(e,t,i){super(e,t,new sB(i)),this._path=i,/** The type of this Firestore reference. */this.type="collection"}/** The collection's identifier. */get id(){return this._query.path.lastSegment()}/**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */get path(){return this._query.path.canonicalString()}/**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */get parent(){let e=this._path.popLast();return e.isEmpty()?null:new l3(this.firestore,/* converter= */null,new rV(e))}withConverter(e){return new l7(this.firestore,e,this._path)}}function l8(e,t,...i){if(e=$(e),// 'undefined' and 'null'.
1==arguments.length&&(t=rN.V()),lZ("doc","path",t),e instanceof l6){let n=rO.fromString(t,...i);return l0(n),new l3(e,/* converter= */null,new rV(n))}{if(!(e instanceof l3||e instanceof l7))throw new rw(rv.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(rO.fromString(t,...i));return l0(n),new l3(e.firestore,e instanceof l7?e.converter:null,new rV(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){// The last promise in the queue.
this.Za=Promise.resolve(),// retried with backoff.
this.Xa=[],// be changed again.
this.eu=!1,// automatically removed after they are run or canceled.
this.tu=[],this.nu=null,// assertion sanity-checks.
this.ru=!1,this.iu=!1,this.su=[],this.Ho=new oF(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.ou=()=>{let e=oO();e&&rf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=oO();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(e){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=oO();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let t=new rb;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!r$(e))throw e;// Failure will be handled by AsyncQueue
rf("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let i=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw rm("INTERNAL UNHANDLED ERROR: ",i),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,i){this._u(),this.su.indexOf(e)>-1&&(t=0);let n=ls.createAndSchedule(this,e,t,i,e=>this.cu(e));return this.tu.push(n),n}_u(){this.nu&&ry()}verifyOperationInProgress(){}/**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */async lu(){// Operations in the queue prior to draining may have enqueued additional
// operations. Keep draining the queue until the tail is no longer advanced,
// which indicates that no more new operations were enqueued and that all
// operations were executed.
let e;do e=this.Za,await e;while(e!==this.Za)}/**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}/**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */Pu(e){// Note that draining may generate more delayed ops, so we do that first.
return this.lu().then(()=>{for(let t of(// Run ops in the same order they'd run if they ran naturally.
this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"/* TimerId.All */!==e&&t.timerId===e)break;return this.lu()})}/**
     * For Tests: Skip all subsequent delays for a timer id.
     */Iu(e){this.su.push(e)}/** Called once a DelayedOperation is run or canceled. */cu(e){// NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
let t=this.tu.indexOf(e);this.tu.splice(t,1)}}/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */class ut extends l6{/** @hideconstructor */constructor(e,t,i,n){super(e,t,i,n),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new ue,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
un(this),this._firestoreClient.terminate()}}/**
 * @internal
 */function ui(e){return e._firestoreClient||un(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function un(e){var t,i,n,r,s,a;let o=e._freezeSettings(),l=(r=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new se(r,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,lX(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new lK(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(i=o.localCache)||void 0===i?void 0:i._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing an array of bytes.
 */class ur{/** @hideconstructor */constructor(e){this._byteString=e}/**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */static fromBase64String(e){try{return new ur(r2.fromBase64String(e))}catch(e){throw new rw(rv.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}/**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */static fromUint8Array(e){return new ur(r2.fromUint8Array(e))}/**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */toBase64(){return this._byteString.toBase64()}/**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */toUint8Array(){return this._byteString.toUint8Array()}/**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */toString(){return"Bytes(base64: "+this.toBase64()+")"}/**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */class us{/**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new rw(rv.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rF(e)}/**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */class ua{/**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */class uo{/**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new rw(rv.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new rw(rv.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}/**
     * The latitude of this `GeoPoint` instance.
     */get latitude(){return this._lat}/**
     * The longitude of this `GeoPoint` instance.
     */get longitude(){return this._long}/**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */isEqual(e){return this._lat===e._lat&&this._long===e._long}/** Returns a JSON-serializable representation of this GeoPoint. */toJSON(){return{latitude:this._lat,longitude:this._long}}/**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */_compareTo(e){return rk(this._lat,e._lat)||rk(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul=/^__.*__$/;/** The result of parsing document data (e.g. for a setData call). */class uu{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return null!==this.fieldMask?new ag(e,this.data,this.fieldMask,t,this.fieldTransforms):new ap(e,this.data,t,this.fieldTransforms)}}function uh(e){switch(e){case 0/* UserDataSource.Set */:// fall through
case 2/* UserDataSource.MergeSet */:// fall through
case 1/* UserDataSource.Update */:return!0;case 3/* UserDataSource.Argument */:case 4/* UserDataSource.ArrayArgument */:return!1;default:throw ry()}}/** A "context" object passed around while parsing user data. */class uc{/**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */constructor(e,t,i,n,r,s){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=n,// external call and we need to validate the entire path.
void 0===r&&this.du(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}/** Returns a new context with the specified settings overwritten. */Eu(e){return new uc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let i=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:i,Ru:!1});return n.Vu(e),n}mu(e){var t;let i=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:i,Ru:!1});return n.du(),n}fu(e){// TODO(b/34871131): We don't support array paths right now; so make path
// undefined.
return this.Eu({path:void 0,Ru:!0})}gu(e){return uy(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}/** Returns 'true' if 'fieldPath' was traversed when creating this context. */contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){// TODO(b/34871131): Remove null check once we have proper paths for fields
// within arrays.
if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(uh(this.Tu)&&ul.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */class ud{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||oM(e)}/** Creates a new top-level parse context. */wu(e,t,i,n=!1){return new uc({Tu:e,methodName:t,yu:i,path:rF.emptyPath(),Ru:!1,pu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rR||e instanceof uo||e instanceof ur||e instanceof l3||e instanceof ua)}function um(e,t,i){if(!uf(i)||!("object"==typeof i&&null!==i&&(Object.getPrototypeOf(i)===Object.prototype||null===Object.getPrototypeOf(i)))){let n=l2(i);throw"an object"===n?t.gu(e+" a custom object"):t.gu(e+" "+n)}}/**
 * Matches any characters in a field path string that are reserved.
 */let up=RegExp("[~\\*/\\[\\]]");/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */function ug(e,t,i){if(t.search(up)>=0)throw uy(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,/* hasConverter= */!1,/* path= */void 0,i);try{return new us(...t.split("."))._internalPath}catch(n){throw uy(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,/* hasConverter= */!1,/* path= */void 0,i)}}function uy(e,t,i,n,r){let s=n&&!n.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;i&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${r}`),l+=")"),new rw(rv.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */class uv{// Note: This class is stripped down version of the DocumentSnapshot in
// the legacy SDK. The changes are:
// - No support for SnapshotMetadata.
// - No support for SnapshotOptions.
/** @hideconstructor protected */constructor(e,t,i,n,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=n,this._converter=r}/** Property of the `DocumentSnapshot` that provides the document's ID. */get id(){return this._key.path.lastSegment()}/**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */get ref(){return new l3(this._firestore,this._converter,this._key)}/**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */exists(){return null!==this._document}/**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */data(){if(this._document){if(this._converter){// We only want to use the converter and create a new DocumentSnapshot
// if a converter has been provided.
let e=new uw(this._firestore,this._userDataWriter,this._key,this._document,/* converter= */null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e){if(this._document){let t=this._document.data.field(ub("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class uw extends uv{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */data(){return super.data()}}/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */function ub(e,t){return"string"==typeof t?ug(e,t):t instanceof us?t._internalPath:t._delegate._internalPath}class uE{convertValue(e,t="none"){switch(sn(e)){case 0/* TypeOrder.NullValue */:return null;case 1/* TypeOrder.BooleanValue */:return e.booleanValue;case 2/* TypeOrder.NumberValue */:return r6(e.integerValue||e.doubleValue);case 3/* TypeOrder.TimestampValue */:return this.convertTimestamp(e.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return this.convertServerTimestamp(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue;case 6/* TypeOrder.BlobValue */:return this.convertBytes(r5(e.bytesValue));case 7/* TypeOrder.RefValue */:return this.convertReference(e.referenceValue);case 8/* TypeOrder.GeoPointValue */:return this.convertGeoPoint(e.geoPointValue);case 9/* TypeOrder.ArrayValue */:return this.convertArray(e.arrayValue,t);case 10/* TypeOrder.ObjectValue */:return this.convertObject(e.mapValue,t);default:throw ry()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}/**
     * @internal
     */convertObjectMap(e,t="none"){let i={};return rG(e,(e,n)=>{i[e]=this.convertValue(n,t)}),i}convertGeoPoint(e){return new uo(r6(e.latitude),r6(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let i=r7(e);return null==i?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(r8(e));default:return null}}convertTimestamp(e){let t=r4(e);return new rR(t.seconds,t.nanos)}convertDocumentKey(e,t){let i=rO.fromString(e);a6(i)||ry();let n=new st(i.get(1),i.get(3)),r=new rV(i.popFirst(5));return n.isEqual(t)||// TODO(b/64130202): Somehow support foreign references.
rm(`Document ${r} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Metadata about a snapshot, describing the state of the snapshot.
 */class u_{/** @hideconstructor */constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}/**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */class uT extends uv{/** @hideconstructor protected */constructor(e,t,i,n,r,s){super(e,t,i,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}/**
     * Returns whether or not the data exists. True if the document exists.
     */exists(){return super.exists()}/**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */data(e={}){if(this._document){if(this._converter){// We only want to use the converter and create a new DocumentSnapshot
// if a converter has been provided.
let t=new uI(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,/* converter= */null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e,t={}){if(this._document){let i=this._document.data.field(ub("DocumentSnapshot.get",e));if(null!==i)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class uI extends uT{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */data(e={}){return super.data(e)}}/**
 * A `QuerySnapshot` contains zero or more `DocumentSnapshot` objects
 * representing the results of a query. The documents can be accessed as an
 * array via the `docs` property or enumerated using the `forEach` method. The
 * number of documents can be determined via the `empty` and `size`
 * properties.
 */class uC{/** @hideconstructor */constructor(e,t,i,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new u_(n.hasPendingWrites,n.fromCache),this.query=i}/** An array of all the documents in the `QuerySnapshot`. */get docs(){let e=[];return this.forEach(t=>e.push(t)),e}/** The number of documents in the `QuerySnapshot`. */get size(){return this._snapshot.docs.size}/** True if there are no documents in the `QuerySnapshot`. */get empty(){return 0===this.size}/**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new uI(this._firestore,this._userDataWriter,i.key,i,new u_(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}/**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new rw(rv.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=/** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(i=>{let n=new uI(e._firestore,e._userDataWriter,i.doc.key,i.doc,new u_(e._snapshot.mutatedKeys.has(i.doc.key),e._snapshot.fromCache),e.query.converter);return i.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{// A `DocumentSet` that is updated incrementally as changes are applied to use
// to lookup the index of a document.
let i=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3/* ChangeType.Metadata */!==e.type).map(t=>{let n=new uI(e._firestore,e._userDataWriter,t.doc.key,t.doc,new u_(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,s=-1;return 0/* ChangeType.Added */!==t.type&&(r=i.indexOf(t.doc.key),i=i.delete(t.doc.key)),1/* ChangeType.Removed */!==t.type&&(s=(i=i.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0/* ChangeType.Added */:return"added";case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:return"modified";case 1/* ChangeType.Removed */:return"removed";default:return ry()}}(t.type),doc:n,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class uS extends uE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ur(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new l3(this.firestore,/* converter= */null,t)}}/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */function uA(e,t){return function(e,t){let i=new rb;return e.asyncQueue.enqueueAndForget(async()=>lA(await lW(e).then(e=>e.syncEngine),t,i)),i.promise}(ui(e),t)}new WeakMap,function(e=!0){rh="10.3.1",eE(new z("firestore",(t,{instanceIdentifier:i,options:n})=>{let r=t.getProvider("app").getImmediate(),s=new ut(new rI(t.getProvider("auth-internal")),new rD(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new rw(rv.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new st(e.options.projectId,t)}(r,i),r);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),eC(rl,"4.1.3",void 0),eC(rl,"4.1.3","esm2017")}();let uD=eI({apiKey:"AIzaSyAaafzn29XLZBor7sXmsi3PMDsg_cxcakk",authDomain:"ecommerce-c2b5f.firebaseapp.com",projectId:"ecommerce-c2b5f",storageBucket:"ecommerce-c2b5f.appspot.com",messagingSenderId:"267989030227",appId:"1:267989030227:web:28088cbcc5c292d8eebda6"}),uN=function(e,t){let i="object"==typeof e?e:/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function(e=ey){let t=ew.get(e);if(!t&&e===ey&&M())return eI();if(!t)throw e_.create("no-app"/* AppError.NO_APP */,{appName:e});return t}(),n=/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */(function(e,t){let i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)})(i,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=O("firestore");e&&/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */function(e,t,i,n={}){var r;let s=(e=l9(e,l6))._getSettings(),a=`${t}:${i}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&rp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,i;if("string"==typeof n.mockUserToken)t=n.mockUserToken,i=ru.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
// invalid field "uid" and missing field "sub" / "user_id".)
t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[D(JSON.stringify({alg:"none",type:"JWT"})),D(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new rw(rv.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");i=new ru(s)}e._authCredentials=new rT(new rE(t,i))}}(n,...e)}return n}(uD);console.log(uD),console.log(uN);class uk{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, AdminFirebase is connected!")};get=async e=>{let t=await /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */function(e){e=l9(e,l5);let t=l9(e.firestore,ut),i=ui(t),n=new uS(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"/* LimitType.Last */===e.limitType&&0===e.explicitOrderBy.length)throw new rw(rv.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,i={}){let n=new rb;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,i,n,r){let s=new lz({next:i=>{// Remove query first before passing event to user to avoid
    // user actions affecting the now stale query.
    t.enqueueAndForget(()=>lf(e,a)),i.fromCache&&"server"===n.source?r.reject(new rw(rv.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(i)},error:e=>r.reject(e)}),a=new ly(i,s,{includeMetadataChanges:!0,Z_:!0});return ld(e,a)})(await lY(e),e.asyncQueue,t,i,n)),n.promise})(i,e._query).then(i=>new uC(t,n,e,i)))}(function(e,t,...i){if(e=$(e),lZ("collection","path",t),e instanceof l6){let n=rO.fromString(t,...i);return l1(n),new l7(e,/* converter= */null,n)}{if(!(e instanceof l3||e instanceof l7))throw new rw(rv.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(rO.fromString(t,...i));return l1(n),new l7(e.firestore,/* converter= */null,n)}}(uN,e)),i=[];// console.log(newCollection);
return t.forEach(e=>{// console.log(`docId: "${doc.id}"`);
let t={};t.docId=e.id;let n=e.data();for(let e in n)t[e]=n[e];i.push(t)}),i};addDocToFirestore=async(e,t)=>{try{let i=l8(uN,e,t.docId);await function(e,t,i){var n;e=l9(e,l3);let r=l9(e.firestore,ut),s=(n=e.converter)?i&&(i.merge||i.mergeFields)?n.toFirestore(t,i):n.toFirestore(t):t;return uA(r,[/** Parse document data from a set() call. */(function(e,t,i,n,r,s={}){let a,o;let l=e.wu(s.merge||s.mergeFields?2/* UserDataSource.MergeSet */:0/* UserDataSource.Set */,t,i,r);um("Data must be an object, but it was:",l,n);let u=function e(t,i){let n={};return rQ(t)?// mask to ensure that the server creates a map entry.
i.path&&i.path.length>0&&i.fieldMask.push(i.path):rG(t,(t,r)=>{let s=/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */function t(i,n){if(uf(// from firestore-exp.
i=$(i)))return um("Unsupported field value:",n,i),e(i,n);if(i instanceof ua)// in which case we do not want to include this field in our parsed data
// (as doing so will overwrite the field directly prior to the transform
// trying to transform it). So we don't add this location to
// context.fieldMask and we return null as our parsing result.
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */return function(e,t){// Sentinels are only supported with writes, and not within arrays.
if(!uh(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let i=e._toFieldTransform(t);i&&t.fieldTransforms.push(i)}(i,n),null;if(void 0===i&&n.ignoreUndefinedProperties)// don't handle this below. If `ignoreUndefinedProperties` is false,
// `parseScalarValue` will reject an undefined value.
return null;if(// field mask paths more granular than the top-level array.
n.path&&n.fieldMask.push(n.path),i instanceof Array){// TODO(b/34871131): Include the path containing the array in the error
// message.
// In the case of IN queries, the parsed data is an array (representing
// the set of values to be included for the IN query) that may directly
// contain additional arrays (each representing an individual field
// value), so we disable this validation.
if(n.settings.Ru&&4/* UserDataSource.ArrayArgument */!==n.Tu)throw n.gu("Nested arrays are not supported");return function(e,i){let n=[],r=0;for(let s of e){let e=t(s,i.fu(r));null==e&&// Just include nulls in the array for fields being replaced with a
// sentinel.
(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(i,n)}return function(e,t){if(null===(e=$(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var i,n,r;return i=t.serializer,"number"==typeof(r=n=e)&&Number.isInteger(r)&&!rK(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?s3(n):s5(i,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let i=rR.fromDate(e);return{timestampValue:aH(t.serializer,i)}}if(e instanceof rR){// Firestore backend truncates precision down to microseconds. To ensure
// offline mode works the same with regards to truncation, perform the
// truncation immediately without waiting for the backend to do that.
let i=new rR(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:aH(t.serializer,i)}}if(e instanceof uo)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ur)return{bytesValue:aG(t.serializer,e._byteString)};if(e instanceof l3){let i=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(i))throw t.gu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:aW(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${l2(e)}`)}(i,n)}(r,i.Au(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}(n,l);if(s.merge)a=new r0(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let r=/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */function(e,t,i){if(// FieldPath.
(t=$(t))instanceof us)return t._internalPath;if("string"==typeof t)return ug(e,t);throw uy("Field path arguments must be of type string or ",e,/* hasConverter= */!1,/* path= */void 0,i)}(t,n,i);if(!l.contains(r))throw new rw(rv.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */(function(e,t){return e.some(e=>e.isEqual(t))})(e,r)||e.push(r)}a=new r0(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new uu(new sg(u),a,o)})(function(e){let t=e._freezeSettings(),i=oM(e._databaseId);return new ud(e._databaseId,!!t.ignoreUndefinedProperties,i)}(r),"setDoc",e._key,s,null!==e.converter,i).toMutation(e._key,au.none())])}(i,t),console.log("Item/document succesfully added with docId: ",t.docId)}catch(e){console.error("Error adding document: ",e)}};updateDocInFirestore=async()=>{};deleteDocFromFirestore=async(e,t)=>{try{var i;await (i=l8(uN,e,t),uA(l9(i.firestore,ut),[new ab(i._key,au.none())]))}catch(e){console.error("Error deleting document: ",e)}}}// Preliminary Specification for Aviation Parts Marketplace
// Common keys for all DB elements:
// transDate: Transaction Date - set at the time of element creation,
// transId: Transaction ID - set at the time of element creation and
// used in Firestore two times for each document: as a Document ID
// and as a key (for convenience reading);
let uL=[// {
//     id: "User ID",
//     custId: "Customer ID",
//     userName: "User Name",
//     userSetDate: "Date Set",
//     userAddress: "User Address",
//     userPhone: "User Phone",
//     userEmail: "User Email",
//     userActive: "User Active",
//     userAdmin: "User Admin",
// },
{docId:"EOFDVDSDXC5Z",id:"1001",custId:"c001",userName:"Mattew Yampolski",userAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",userPhone:"+1 898 9289289",userEmail:"matt.y@aerosupplyplus.aero",userActive:!0,userAdmin:!0,transDate:"20230815",transId:"jkjur-tewvn-00001"}],uR=[// {
//     id: "Customer ID",
//     custCode: "Customer Code",
//     custSetDate: "Date Set",
//     custLegalName: "Legal Name",
//     custAddress: "Address",
//     custBillToAddress: "Bill-To-Address",
//     custPhone: "Customer Phone",
//     custEmail: "Customer Email",
//     custContactId: "User ID",
//     custKycChecked: "KYC Checked",
//     custKycDate: "Date KYC",
//     custPaymentTerms: "Payment Terms",
//     custPaymentMethod: "Payment Method",
//     custHandlingFee: "Handling Fee",
//     custActive: "Customer Active",
//     custOrders: "Customer Orders",
// },
{docId:"VP40CNM026NU",id:"c001",custCode:"aespl",custLegalName:"AeroSupplyPlus LLC",custAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero",custContactId:"1001",custKycChecked:!0,custKycDate:"20230812",custPaymentTerms:["wire","card","net30"],custPaymentMethod:"card",custHandlingFee:.015,custActive:!0,custOrders:["100001","100002","100003"],transDate:"20230812",transId:"jkjur-tewvn-00002"}],ux=[// {
//     id: "Item ID",
//     itemSetDate: "Set Date",
//     itemName: "Item Name",
//     itemCat: "Category",
//     itemImg: "Image",
//     itemPN: "Part Number",
//     itemSN: "Serial Number",
//     itemPrice: "Price",
//     itemQty: "Quantity",
//     itemCurrency: "Currency",
//     itemCondition: "Condition",
//     itemCertification: "Certification",
//     itemLeadTime: "Lead Time",
//     itemDescription: "Description",
// },
{docId:"PVU9AO4BUQ7Y",id:"0032-0001-000",itemName:"Wheel Main Assy",itemCat:"component",itemImg:"",itemPN:"BS30-737NG-3254",itemSN:"various",itemPrice:18130,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"on stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",transDate:"20230812",transId:"jkjur-tewvn-00003"},{docId:"BIQM1WV0SQQ4",id:"0032-0002-000",itemName:"Wheel Nose Assy",itemCat:"component",itemImg:"",itemPN:"BS30-737NG-3390",itemSN:"various",itemPrice:10680,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",transDate:"20230812",transId:"jkjur-tewvn-00004"},{docId:"89A1JPR1ND4E",id:"0032-0001-100",itemName:"Wheel Main Assy",itemCat:"component",itemImg:"",itemPN:"GY30-737NG-9001",itemSN:"various",itemPrice:18630,itemQty:1,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",transDate:"20230825",transId:"jkjur-tewvn-00005"},{docId:"GKC5O2J40K4U",id:"0079-0001-000",itemName:"Filter Assy Oil",itemCat:"component",itemImg:"",itemPN:"123-98418-2752",itemSN:"various",itemPrice:12690,itemQty:5,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",transDate:"20230815",transId:"jkjur-tewvn-00006"},{docId:"ZL5XAK95CY4R",id:"0079-0002-000",itemName:"Filter Element",itemCat:"part",itemImg:"",itemPN:"123-98418-9999",itemSN:"various",itemPrice:650,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",transDate:"20230815",transId:"jkjur-tewvn-00007"},{docId:"XP8TC8LW39BE",id:"0025-0001-000",itemName:"Seat Block Assy",itemCat:"component",itemImg:"",itemPN:"SA7428-777-3000",itemSN:"various",itemPrice:27490,itemQty:500,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC","UK CAA"],itemLeadTime:"60 Days",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",transDate:"20230816",transId:"jkjur-tewvn-00008"},{docId:"II96WJEU04JK",id:"1000-0001-000",itemName:"Handbook, Aviation Maintenance Technician - General",itemCat:"manual",itemImg:"",itemPN:"FAA-H-8083-30-ATB",itemSN:"not applicable",itemPrice:97,itemQty:50,itemCurrency:"$",itemCondition:"Serviceable",itemCertification:["FAA"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",transDate:"20230820",transId:"jkjur-tewvn-00009"}],uP=[{docId:"E8QWSKY5CVCA",id:"1001",itemId:"0032-0001-000",qty:2},{docId:"ZJ4TKGWEHR2D",id:"1001",itemId:"0079-0002-000",qty:3},{docId:"5UXYDBI2OD2D",id:"1001",itemId:"BS30-737NG-3254",qty:2},{docId:"5FKYXA6LWWOU",id:"1001",itemId:"GY30-737NG-9001",qty:4}],uO=[// {
//     id: "Order ID",
//     orderCustId: "Customer ID",
//     orderUserId: "User ID",
//     orderDateSet: "Date Set",
//     orderDatePlaced: "Date Placed",
//     orderDateReady: "Date Ready",
//     orderDateCompleted: "Date Completed",
//     orderBillTo: "Bill To",
//     orderPaymentMethod: "Payment Method",
//     orderPaymentDeadline: "Payment Deadline",
//     orderPaymentDone: "Payment Done",
//     orderCart: "Order Cart",
//     orderPriceItems: "Price Items",
//     orderPriceHandling: "Price Handling",
//     orderPriceTotal: "Price Total",
//     orderCurrency: "Currency",
// },
{docId:"44BI5T2JM2Q1",id:"100001",orderCustId:"c001",orderUserId:"1001",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$",transDate:"20230828",transId:"jkjur-tewvn-00011"},{docId:"T1V6FN5IAU41",id:"100002",orderCustId:"c001",orderUserId:"1001",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$",transDate:"20230828",transId:"jkjur-tewvn-00012"},{docId:"CZ193PBP4206",id:"100003",orderCustId:"c001",orderUserId:"1001",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$",transDate:"20230828",transId:"jkjur-tewvn-00013"}],uM=[{docId:"9CGGAEA9Z6Z6",id:"100001",orderId:"100001",itemId:"0032-0001-000",qty:2},{docId:"412KMYERYTGG",id:"100001",orderId:"100001",itemId:"0079-0002-000",qty:5},{docId:"ZYIF4ZAYRZLI",id:"100001",orderId:"100001",itemId:"0079-0002-000",qty:5}],uF="customersData",uV="productItems",uU="usersData",uB="ordersData",uj="orderItemsData",uq="cartsData",u$="customersDataDb",uz="productItemsDb",uK="usersDataDb",uH="ordersDataDb",uG="orderItemsDataDb",uQ="cartsDataDb",uW=[],uY=[],uX=[],uJ=[],uZ=[],u0=[],u1=new class{constructor(){this.adminView=new u,this.adminModel=new h,this.adminFirebase=new uk}initializeAppMain=async()=>{console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.adminView.checkModuleLinkage(),this.adminModel.checkModuleLinkage(),this.adminFirebase.checkModuleLinkage(),uW=await this.adminFirebase.get(uK),uY=await this.adminFirebase.get(u$),uX=await this.adminFirebase.get(uQ),uJ=await this.adminFirebase.get(uH),uZ=await this.adminFirebase.get(uG),u0=await this.adminFirebase.get(uz),// For TEST only:
// console.log("usersData: ", usersData);
// console.log("usersDataDb: ", usersDataDb);
// console.log("usersDataDb: ", usersDataDb[0]);
// console.log("usersDataDb: ", usersDataDb[1]);
this.displayTables(),this.adminView.renderMenu(uF,uV,uU,uB,uj,uq),this.attachEventListeners()};displayTables=async()=>{this.adminView.clearContainerLeft(),this.adminView.renderTable(uL,uU),this.adminView.renderTable(uW,uK),this.adminView.renderTable(uR,uF),this.adminView.renderTable(uY,u$),this.adminView.renderTable(uP,uq),this.adminView.renderTable(uX,uQ),this.adminView.renderTable(uO,uB),this.adminView.renderTable(uJ,uH),this.adminView.renderTable(uM,uj),this.adminView.renderTable(uZ,uG),this.adminView.renderTable(ux,uV),this.adminView.renderTable(u0,uz)};// Functions to split elemnt ID (${arrayName}_${object.docId}_${key})
// Get Collection (array name) - [0]-th element
getCollectionFromId=e=>e.split("_")[0];// Get Document ID (object) - [1]-st element
getDocFromId=e=>e.split("_")[1];// Get Field (key name) - [2]-nd element
getKeyFromId=e=>e.split("_")[2];// SUPPORT FUNCTION: GET ARRAY BY IT'S NAME:
getArrayByName(e){return"usersData"===e?uL:"usersDataDb"===e?uW:"customersData"===e?uR:"customersDataDb"===e?uY:"cartsData"===e?uP:"cartsDataDb"===e?uX:"ordersData"===e?uO:"ordersDataDb"===e?uJ:"orderItemsData"===e?uM:"orderItemsDataDb"===e?uZ:"productItems"===e?ux:"productItemsDb"===e?u0:null}// Add duplicate document (element/object)
duplicateDocument(e,t){// FOR TEST- TBS ONLY - REMOVE IN PROD:
// console.log(array[0]);
// console.log(array[1]);
// Find the object by ID
let i=e.find(e=>e.docId===t);if(!i){console.log("Object with provided ID is not located.");return}//  Clone object
let n=JSON.parse(JSON.stringify(i));// return cloned objc
return(// Modify / create unique ID
n.docId=this.adminModel.generateNewId(12),n)}handleAddBtnClick=e=>{let t=this.getCollectionFromId(e.id),i=this.getDocFromId(e.id);console.log(`Request to clone element in ${t}, docId: ${i}.`);let n=this.getArrayByName(t),r=this.duplicateDocument(n,i);console.log("clonedObject: ",r),[u$,uz,uK,uH,uG,uQ].includes(t)&&(console.log(`trying to include clonedObject: ${r} into Collection ${t}`),// try to add new doc (clonedObject) to Firestore (elementCollection):
this.adminFirebase.addDocToFirestore(t,r)),// Add cloned object/document to array/collection:
n.push(r),this.displayTables()};handleUpdateBtnClick=e=>{let t=this.getCollectionFromId(e.id),i=this.getDocFromId(e.id);console.log(`Request to update element in ${t}, docId: ${i}.`);let n=this.getArrayByName(t),r=n.find(e=>e.docId===i);if(!r){console.log("Not found element/document with docId = ",i);return}// Locate table row with clicked button
let s=e.closest("tr"),a=s.querySelectorAll("td");// Locate all input fields
a.forEach(e=>{let t=e.querySelector("input");if(t){let e=this.getKeyFromId(t.id),i=t.value;r[e]=i}}),this.displayTables()};handleDeleteBtnClick=e=>{let t=this.getCollectionFromId(e.id),i=this.getDocFromId(e.id);console.log(`Request to delete element in ${t}, docId: ${i}.`),[u$,uz,uK,uH,uG,uQ].includes(t)&&(console.log(`trying to delete element/doc with docId: ${i} from Collection ${t}`),// try to delete doc with elementId (docId) from Firestore collection:
this.adminFirebase.deleteDocFromFirestore(t,i));// Remove element/doc from affected array/collection using .splice() method
let n=this.getArrayByName(t),r=n.findIndex(e=>e.docId===i);-1!==r?(n.splice(r,1),console.log("Deleted element/document with docId = ",i)):console.log("Not found element/document with docId = ",i),this.displayTables()};handleButtonsClick=e=>{let t=e.target;t.classList.contains("add-btn")&&this.handleAddBtnClick(t),t.classList.contains("updt-btn")&&this.handleUpdateBtnClick(t),t.classList.contains("del-btn")&&this.handleDeleteBtnClick(t)};attachEventListeners(){this.adminView.containerLeftNode.addEventListener("click",this.handleButtonsClick),// FOR TEST- TBS ONLY - REMOVE IN PROD:
// console.log("this.adminView:", this.adminView);
// console.log("this.adminView.docAddBtn:", this.adminView.docAddBtnNode);
// REPLACED BELOW ITEMS BY COMMON PARRENT LISTENER
// this.adminView.docAddBtnNode.forEach((button) => {
//     button.addEventListener("click", (event) =>
//         this.handleAddBtnClick(event)
//     );
// });
// this.adminView.docUpdateBtnNode.forEach((button) => {
//     button.addEventListener("click", (event) =>
//         this.handleAddBtnClick(event)
//     );
// });
// this.adminView.docDeleteBtnNode.forEach((button) => {
//     button.addEventListener("click", (event) =>
//         this.handleAddBtnClick(event)
//     );
// });
// FOR TEST-TBS ONLY - REMOVE IN PROD:
this.adminView.testBtnNode.addEventListener("click",()=>{let e=this.adminModel.generateNewId(12);console.log("New randome id(12) =",e)})}}// // FUNCTIONS: SUPPORT AND TBS
;try{u1.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.bb5659d7.js.map

//# sourceMappingURL=index.bb5659d7.js.map
