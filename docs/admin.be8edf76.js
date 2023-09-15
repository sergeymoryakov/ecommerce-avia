let e,t,n;var i,r,s,a,o,l,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};// SET VIEW MODULE:
class u{constructor(){this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight"),// For Test - TBS only:
this.testBtnNode=document.getElementById("testBtn"),this.backupBtnNode=document.getElementById("backupBtn"),this.getServerBtnNode=document.getElementById("getServerBtn"),this.getLocalBtnNode=document.getElementById("getLocalBtn")}checkModuleLinkage=()=>{console.log("HELLO, AdminView is connected!")};clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};createHeaderRow=e=>{let t=document.createElement("tr"),n=document.createElement("th");n.classList="db-section__table_cell",t.appendChild(n);let i=document.createElement("th");i.classList="db-section__table_cell",t.appendChild(i);// Sort keys:
let r=Object.keys(e).sort();// create header cells in loop
for(let e of r){let n=document.createElement("th");n.classList="db-section__table_cell",n.innerText=`${e}`,t.appendChild(n)}// Add another empty element at the end of the row:
let s=document.createElement("th");return s.classList="db-section__table_cell",t.appendChild(s),t};// NOTE: isBackup - a backupInstancevalidator:
// 0 - dataInstance
// 1 - backupInstance
createDataRow=(e,t,n)=>{// FOR TBS ONLY:
// console.log("doc.id: ", doc.id);
// console.log("doc.docId: ", doc.docId);
let i=document.createElement("tr"),r=document.createElement("td");r.classList="db-section__table_cell";let s=document.createElement("button");s.classList="db-section__table_btn add-btn",s.id=`${n}_${t}_${e.docId}_addBtn`,s.innerText="+",r.appendChild(s),i.appendChild(r);let a=document.createElement("td");a.classList="db-section__table_cell";let o=document.createElement("button");o.classList="db-section__table_btn updt-btn",o.id=`${n}_${t}_${e.docId}_updtBtn`,o.innerText="u",a.appendChild(o),i.appendChild(a);// Sort keys
let l=Object.keys(e).sort();for(let r of l){let s=e[r],a=document.createElement("td");a.classList="db-section__table_cell",a.id=`${n}_${t}_${e.docId}_${r}`;let o=document.createElement("input");o.type="text",o.id=`${n}_${t}_${e.docId}_${r}_input`,o.value=`${s}`,a.appendChild(o),i.appendChild(a)}// Add another button element to the end of row:
let h=document.createElement("td");h.classList="db-section__table_cell";let u=document.createElement("button");return u.classList="db-section__table_btn del-btn",u.id=`${n}_${t}_${e.docId}_delBtn`,u.innerText="-",h.appendChild(u),i.appendChild(h),i};createTable=(e,t,n)=>{// Create new Table
let i=document.createElement("table"),r=this.createHeaderRow(e[0]);// create Data Rows and add to Table
for(let s of(i.appendChild(r),e)){let e=this.createDataRow(s,t,n);i.appendChild(e)}return i};renderTable=(e,t,n)=>{let i=document.createElement("div");i.classList="db-section";let r=document.createElement("h2");r.classList="db-section__title",r.id=`${n}_${t}`,r.innerText=t;let s=this.createTable(e,t,n);s.classList="db-section__table",i.appendChild(r),i.appendChild(s),this.containerLeftNode.appendChild(i)};createMenuBtn=e=>{let t=document.createElement("li");t.classList="menu-btn-wrapper";let n=document.createElement("a");return n.classList="menu-btn",n.href=`#0_${e}`,n.innerText=`${e}`,t.appendChild(n),t};createMenu=e=>{// Init menu wrapper:
let t=document.createElement("div");t.classList="menu-section";// Add menu title:
let n=document.createElement("h2");n.classList="menu-title",n.innerText="Tables",t.appendChild(n);// Create menu list:
let i=document.createElement("ul");for(let t of e){let e=this.createMenuBtn(t);i.appendChild(e)}return(// Add menu to wrapper:
t.appendChild(i),t)};renderMenu=e=>{this.clearContainerRight();let t=this.createMenu(e);this.containerRightNode.appendChild(t)}}// SET MODEL MODULE:
class c{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, AdminModel is connected!")};// New ID Generator:
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
 */var d={},f=d={};function p(){throw Error("setTimeout has not been defined")}function m(){throw Error("clearTimeout has not been defined")}function g(e){if(eU===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((eU===p||!eU)&&setTimeout)return eU=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return eU(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return eU.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return eU.call(this,e,0)}}}!function(){try{eU="function"==typeof setTimeout?setTimeout:p}catch(e){eU=p}try{eB="function"==typeof clearTimeout?clearTimeout:m}catch(e){eB=m}}();var y=[],v=!1,w=-1;function E(){v&&ej&&(v=!1,ej.length?y=ej.concat(y):w=-1,y.length&&b())}function b(){if(!v){var e=g(E);v=!0;for(var t=y.length;t;){for(ej=y,y=[];++w<t;)ej&&ej[w].run();w=-1,t=y.length}ej=null,v=!1,function(e){if(eB===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((eB===m||!eB)&&clearTimeout)return eB=clearTimeout,clearTimeout(e);try{eB(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return eB.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return eB.call(this,e)}}}(e)}}// v8 likes predictible objects
function _(e,t){this.fun=e,this.array=t}function T(){}f.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new _(e,t)),1!==y.length||v||g(b)},_.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=T,f.addListener=T,f.once=T,f.off=T,f.removeListener=T,f.removeAllListeners=T,f.emit=T,f.prependListener=T,f.prependOnceListener=T,f.listeners=function(e){return[]},f.binding=function(e){throw Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw Error("process.chdir is not supported")},f.umask=function(){return 0};/**
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
 */const I=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:(r<2048?t[n++]=r>>6|192:((64512&r)==55296&&i+1<e.length&&(64512&e.charCodeAt(i+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128):t[n++]=r>>12|224,t[n++]=r>>6&63|128),t[n++]=63&r|128)}return t},C=function(e){// TODO(user): Use native implementations if/when available
let t=[],n=0,i=0;for(;n<e.length;){let r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){// Surrogate Pair
let s=e[n++],a=e[n++],o=e[n++],l=((7&r)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(1023&l))}else{let s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")},S={/**
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
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){let r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=r>>2,u=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),i.push(n[h],n[u],n[c],n[d])}return i.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(I(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):C(this.decodeStringToByteArray(e,t)))},/**
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
     */decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){let r=n[e.charAt(t++)],s=t<e.length,a=s?n[e.charAt(t)]:0;++t;let o=t<e.length,l=o?n[e.charAt(t)]:64;++t;let h=t<e.length,u=h?n[e.charAt(t)]:64;if(++t,null==r||null==a||null==l||null==u)throw new A;let c=r<<2|a>>4;if(i.push(c),64!==l){let e=a<<4&240|l>>2;if(i.push(e),64!==u){let e=l<<6&192|u;i.push(e)}}}return i},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class A extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const D=function(e){let t=I(e);return S.encodeByteArray(t,!0)},k=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return D(e).replace(/\./g,"")},N=function(e){try{return S.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},L=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==h)return h;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,R=()=>{if(void 0===d||void 0===d.env)return;let e=void 0;if(e)return JSON.parse(e)},x=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&N(e[1]);return t&&JSON.parse(t)},O=()=>{try{return L()||R()||x()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},M=e=>{var t,n;return null===(n=null===(t=O())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},P=e=>{let t=M(e);if(!t)return;let n=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},F=()=>{var e;return null===(e=O())||void 0===e?void 0:e.config};/**
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
 */class V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class U extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */n){super(t),this.code=e,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,U.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,B.prototype.create)}}class B{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?r.replace(j,(e,t)=>{let i=n[t];return null!=i?String(i):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`,o=new U(i,a,n);return o}}const j=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function $(e,t){if(e===t)return!0;let n=Object.keys(e),i=Object.keys(t);for(let r of n){if(!i.includes(r))return!1;let n=e[r],s=t[r];if(q(n)&&q(s)){if(!$(n,s))return!1}else if(n!==s)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}function q(e){return null!==e&&"object"==typeof e}/**
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
 */function z(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class K{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,/**
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
 */const H="[DEFAULT]";/**
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
 */class G{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new V;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:H})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=H){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=H){return this.instances.has(e)}getOptions(e=H){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);n===r&&t.resolve(i)}return i}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var n;let i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let i of n)try{i(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:e===H?void 0:e,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(e=H){return this.component?this.component.multipleInstances?e:H:e// assume multiple instances are supported before the component is provided.
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
 */class Q{constructor(e){this.name=e,this.providers=new Map}/**
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
let t=new G(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const W=[];(eV=e$||(e$={}))[eV.DEBUG=0]="DEBUG",eV[eV.VERBOSE=1]="VERBOSE",eV[eV.INFO=2]="INFO",eV[eV.WARN=3]="WARN",eV[eV.ERROR=4]="ERROR",eV[eV.SILENT=5]="SILENT";const Y={debug:e$.DEBUG,verbose:e$.VERBOSE,info:e$.INFO,warn:e$.WARN,error:e$.ERROR,silent:e$.SILENT},X=e$.INFO,J={[e$.DEBUG]:"log",[e$.VERBOSE]:"log",[e$.INFO]:"info",[e$.WARN]:"warn",[e$.ERROR]:"error"},Z=(e,t,...n)=>{if(t<e.logLevel)return;let i=new Date().toISOString(),r=J[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ee{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=X,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=Z,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */W.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in e$))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?Y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,e$.DEBUG,...e),this._logHandler(this,e$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,e$.VERBOSE,...e),this._logHandler(this,e$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,e$.INFO,...e),this._logHandler(this,e$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,e$.WARN,...e),this._logHandler(this,e$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,e$.ERROR,...e),this._logHandler(this,e$.ERROR,...e)}}const et=(e,t)=>t.some(t=>e instanceof t),en=new WeakMap,ei=new WeakMap,er=new WeakMap,es=new WeakMap,ea=new WeakMap;let eo={get(e,t,n){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return ei.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||er.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return el(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function el(n){var i;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(n instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(el(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&en.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
ea.set(t,e),t}(n);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(es.has(n))return es.get(n);let r="function"==typeof(i=n)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
i.apply(eh(this),e),el(en.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return el(i.apply(eh(this),e))}:function(e,...t){let n=i.call(eh(this),e,...t);return er.set(n,e.sort?e.sort():[e]),el(n)}:(i instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(ei.has(e))return;let t=new Promise((t,n)=>{let i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
ei.set(e,t)}(i),et(i,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,eo):i;return r!==n&&(es.set(n,r),ea.set(r,n)),r}const eh=e=>ea.get(e),eu=["get","getKey","getAll","getAllKeys","count"],ec=["put","add","delete","clear"],ed=new Map;function ef(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ed.get(t))return ed.get(t);let n=t.replace(/FromIndex$/,""),i=t!==n,r=ec.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||eu.includes(n)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,r?"readwrite":"readonly"),a=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&s.done]))[0]};return ed.set(t,s),s}eo={...eF=eo,get:(e,t,n)=>ef(e,t)||eF.get(e,t,n),has:(e,t)=>!!ef(e,t)||eF.has(e,t)};/**
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
 */class ep{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
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
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const em="@firebase/app",eg="0.9.18",ey=new ee("@firebase/app"),ev="[DEFAULT]",ew={[em]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eE=new Map,eb=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function e_(e){let t=e.name;if(eb.has(t))return ey.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let n of(eb.set(t,e),eE.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(n){ey.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}(n,e);return!0}const eT=new B("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class eI{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new K("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw eT.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}function eC(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let i=Object.assign({name:ev,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw eT.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(r)});if(n||(n=F()),!n)throw eT.create("no-options"/* AppError.NO_OPTIONS */);let s=eE.get(r);if(s){// return the existing app if options and config deep equal the ones in the existing app.
if($(n,s.options)&&$(i,s.config))return s;throw eT.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:r})}let a=new Q(r);for(let e of eb.values())a.addComponent(e);let o=new eI(n,i,a);return eE.set(r,o),o}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function eS(e,t,n){var i;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let r=null!==(i=ew[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);let s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${r}" with version "${t}":`];s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ey.warn(e.join(" "));return}e_(new K(`${r}-version`,()=>({library:r,version:t}),"VERSION"/* ComponentType.VERSION */))}const eA="firebase-heartbeat-store";let eD=null;function ek(){return eD||(eD=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let a=indexedDB.open(e,1),o=el(a);return i&&a.addEventListener("upgradeneeded",e=>{i(el(a.result),e.oldVersion,e.newVersion,el(a.transaction),e)}),n&&a.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),r&&e.addEventListener("versionchange",e=>r(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eA)}}).catch(e=>{throw eT.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),eD}async function eN(e){try{let t=await ek(),n=await t.transaction(eA).objectStore(eA).get(eR(e));return n}catch(e){if(e instanceof U)ey.warn(e.message);else{let t=eT.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});ey.warn(t.message)}}}async function eL(e,t){try{let n=await ek(),i=n.transaction(eA,"readwrite"),r=i.objectStore(eA);await r.put(t,eR(e)),await i.done}catch(e){if(e instanceof U)ey.warn(e.message);else{let t=eT.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});ey.warn(t.message)}}}function eR(e){return`${e.name}!${e.options.appId}`}class ex{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eM(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=eO();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eO(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],i=e.slice();for(let r of e){// Look for an existing entry with the same user agent.
let e=n.find(e=>e.agent===r.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(r.date),eP(n)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:r.agent,dates:[r.date]}),eP(n)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=k(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=n,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i)}}function eO(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class eM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eN(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eL(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return eL(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function eP(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return k(JSON.stringify({version:2,heartbeats:e})).length}e_(new K("platform-logger",e=>new ep(e),"PRIVATE"/* ComponentType.PRIVATE */)),e_(new K("heartbeat",e=>new ex(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
eS(em,eg,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
eS(em,eg,"esm2017"),// Register platform SDK identifier (no version).
eS("fire-js",""),eS("firebase","10.3.1","app");var eF,eV,eU,eB,ej,e$,eq,ez="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==h?h:"undefined"!=typeof self?self:{},eK={},eH=eH||{},eG=ez||self;function eQ(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function eW(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function eY(e,t,n){return e.call.apply(e.bind,arguments)}function eX(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function eJ(e,t,n){return(eJ=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?eY:eX).apply(null,arguments)}function eZ(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function e0(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function e1(){this.s=this.s,this.o=this.o}e1.prototype.s=!1,e1.prototype.sa=function(){this.s||(this.s=!0,this.N())},e1.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const e2=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return -1};function e9(e){let t=e.length;if(0<t){let n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function e4(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];if(eQ(n)){let t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function e6(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}e6.prototype.h=function(){this.defaultPrevented=!0};var e5=function(){if(!eG.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{eG.addEventListener("test",()=>{},t),eG.removeEventListener("test",()=>{},t)}catch(e){}return e}();function e3(e){return/^[\s\xa0]*$/.test(e)}function e7(){var e=eG.navigator;return e&&(e=e.userAgent)?e:""}function e8(e){return -1!=e7().indexOf(e)}function te(e){return te[" "](e),e}te[" "]=function(){};var tt=e8("Opera"),tn=e8("Trident")||e8("MSIE"),ti=e8("Edge"),tr=ti||tn,ts=e8("Gecko")&&!(-1!=e7().toLowerCase().indexOf("webkit")&&!e8("Edge"))&&!(e8("Trident")||e8("MSIE"))&&!e8("Edge"),ta=-1!=e7().toLowerCase().indexOf("webkit")&&!e8("Edge");function to(){var e=eG.document;return e?e.documentMode:void 0}e:{var tl,th="",tu=(tl=e7(),ts?/rv:([^\);]+)(\)|;)/.exec(tl):ti?/Edge\/([\d\.]+)/.exec(tl):tn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(tl):ta?/WebKit\/(\S+)/.exec(tl):tt?/(?:Version)[ \/]?(\S+)/.exec(tl):void 0);if(tu&&(th=tu?tu[1]:""),tn){var tc=to();if(null!=tc&&tc>parseFloat(th)){r=String(tc);break e}}r=th}var td=eG.document&&tn&&(to()||parseInt(r,10))||void 0;function tf(e,t){if(e6.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ts){e:{try{te(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tp[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tf.$.h.call(this)}}e0(tf,e6);var tp={2:"touch",3:"pen",4:"mouse"};tf.prototype.h=function(){tf.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tm="closure_listenable_"+(1e6*Math.random()|0),tg=0;function ty(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++tg,this.fa=this.ia=!1}function tv(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tw(e,t,n){for(let i in e)t.call(n,e[i],i,e)}function tE(e){let t={};for(let n in e)t[n]=e[n];return t}const tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t_(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t])e[n]=i[n];for(let t=0;t<tb.length;t++)n=tb[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function tT(e){this.src=e,this.g={},this.h=0}function tI(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=e2(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(tv(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function tC(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&!!n==s.capture&&s.la==i)return r}return -1}tT.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=tC(e,t,i,r);return -1<a?(t=e[a],n||(t.ia=!1)):((t=new ty(t,this.src,s,!!i,r)).ia=n,e.push(t)),t};var tS="closure_lm_"+(1e6*Math.random()|0),tA={};function tD(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var a=eW(r)?!!r.capture:!!r,o=tR(e);if(o||(e[tS]=o=new tT(e)),(n=o.add(t,n,i,a,s)).proxy)return n;if(i=function e(t){return tL.call(e.src,e.listener,t)},n.proxy=i,i.src=e,i.listener=n,e.addEventListener)e5||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(tN(t.toString()),i);else if(e.addListener&&e.removeListener)e.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tk(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[tm])tI(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(tN(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=tR(t))?(tI(n,e),0==n.h&&(n.src=null,t[tS]=null)):tv(e)}}}function tN(e){return e in tA?tA[e]:tA[e]="on"+e}function tL(e,t){if(e.fa)e=!0;else{t=new tf(t,this);var n=e.listener,i=e.la||e.src;e.ia&&tk(e),e=n.call(i,t)}return e}function tR(e){return(e=e[tS])instanceof tT?e:null}var tx="__closure_events_fn_"+(1e9*Math.random()>>>0);function tO(e){return"function"==typeof e?e:(e[tx]||(e[tx]=function(t){return e.handleEvent(t)}),e[tx])}function tM(){e1.call(this),this.i=new tT(this),this.S=this,this.J=null}function tP(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new e6(t,e);else if(t instanceof e6)t.target=t.target||e;else{var r=t;t_(t=new e6(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];r=tF(a,i,!0,t)&&r}if(r=tF(a=t.g=e,i,!0,t)&&r,r=tF(a,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=tF(a=t.g=n[s],i,!1,t)&&r}function tF(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&tI(e.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}e0(tM,e1),tM.prototype[tm]=!0,tM.prototype.removeEventListener=function(e,t,n,i){!function e(t,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);else(r=eW(r)?!!r.capture:!!r,i=tO(i),t&&t[tm])?(t=t.i,(n=String(n).toString())in t.g&&-1<(i=tC(a=t.g[n],i,r,s))&&(tv(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete t.g[n],t.h--))):t&&(t=tR(t))&&(n=t.g[n.toString()],t=-1,n&&(t=tC(n,i,r,s)),(i=-1<t?n[t]:null)&&tk(i))}(this,e,t,n,i)},tM.prototype.N=function(){if(tM.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)tv(n[i]);delete t.g[e],t.h--}}this.J=null},tM.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},tM.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var tV=eG.JSON.stringify,tU=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new tB,e=>e.reset());class tB{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let tj,t$=!1,tq=new class{constructor(){this.h=this.g=null}add(e,t){let n=tU.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},tz=()=>{let e=eG.Promise.resolve(void 0);tj=()=>{e.then(tK)}};var tK=()=>{let e;for(var t;e=null,tq.g&&(e=tq.g,tq.g=tq.g.next,tq.g||(tq.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){eG.setTimeout(()=>{throw e},0)}(e)}tU.j(t),100>tU.h&&(tU.h++,t.next=tU.g,tU.g=t)}t$=!1};function tH(e,t){tM.call(this),this.h=e||1,this.g=t||eG,this.j=eJ(this.qb,this),this.l=Date.now()}function tG(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function tQ(e,t,n){if("function"==typeof e)n&&(e=eJ(e,n));else if(e&&"function"==typeof e.handleEvent)e=eJ(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:eG.setTimeout(e,t||0)}e0(tH,tM),(eq=tH.prototype).ga=!1,eq.T=null,eq.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tP(this,"tick"),this.ga&&(tG(this),this.start()))}},eq.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eq.N=function(){tH.$.N.call(this),tG(this),delete this.g};class tW extends e1{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=tQ(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let n=t.h;t.h=null,t.m.apply(null,n)}(this)}N(){super.N(),this.g&&(eG.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tY(e){e1.call(this),this.h=e,this.g={}}e0(tY,e1);var tX=[];function tJ(e,t,n,i){Array.isArray(n)||(n&&(tX[0]=n.toString()),n=tX);for(var r=0;r<n.length;r++){var s=function e(t,n,i,r,s){if(r&&r.once)return function e(t,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=tO(i),t&&t[tm]?t.P(n,i,eW(r)?!!r.capture:!!r,s):tD(t,n,i,!0,r,s)}(t,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)e(t,n[a],i,r,s);return null}return i=tO(i),t&&t[tm]?t.O(n,i,eW(r)?!!r.capture:!!r,s):tD(t,n,i,!1,r,s)}(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function tZ(e){tw(e.g,function(e,t){this.g.hasOwnProperty(t)&&tk(e)},e),e.g={}}function t0(){this.g=!0}function t1(e,t,n,i){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return tV(n)}catch(e){return t}}(e,n)+(i?" "+i:"")})}tY.prototype.N=function(){tY.$.N.call(this),tZ(this)},tY.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},t0.prototype.Ea=function(){this.g=!1},t0.prototype.info=function(){};var t2={},t9=null;function t4(){return t9=t9||new tM}function t6(e){e6.call(this,t2.Ta,e)}function t5(e){let t=t4();tP(t,new t6(t))}function t3(e,t){e6.call(this,t2.STAT_EVENT,e),this.stat=t}function t7(e){let t=t4();tP(t,new t3(t,e))}function t8(e,t){e6.call(this,t2.Ua,e),this.size=t}function ne(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return eG.setTimeout(function(){e()},t)}t2.Ta="serverreachability",e0(t6,e6),t2.STAT_EVENT="statevent",e0(t3,e6),t2.Ua="timingevent",e0(t8,e6);var nt={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},nn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ni(){}function nr(e){return e.h||(e.h=e.i())}function ns(){}ni.prototype.h=null;var na={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function no(){e6.call(this,"d")}function nl(){e6.call(this,"c")}function nh(){}function nu(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new tY(this),this.P=nd,e=tr?125:void 0,this.V=new tH(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nc}function nc(){this.i=null,this.g="",this.h=!1}e0(no,e6),e0(nl,e6),e0(nh,ni),nh.prototype.g=function(){return new XMLHttpRequest},nh.prototype.i=function(){return{}},a=new nh;var nd=45e3,nf={},np={};function nm(e,t,n){e.L=1,e.v=nx(nD(t)),e.s=n,e.S=!0,ng(e,null)}function ng(e,t){e.G=Date.now(),nw(e),e.A=nD(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),nH(n.i,"t",i),e.C=0,n=e.l.J,e.h=new nc,e.g=iF(e.l,n?t:null,!e.s),0<e.O&&(e.M=new tW(eJ(e.Pa,e,e.g),e.O)),tJ(e.U,e.g,"readystatechange",e.nb),t=e.I?tE(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),t5(),function(e,t,n,i,r,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function ny(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function nv(e,t,n){let i=!0,r;for(;!e.J&&e.C<n.length;)if((r=function(e,t){var n=e.C,i=t.indexOf("\n",n);return -1==i?np:isNaN(n=Number(t.substring(n,i)))?nf:(i+=1)+n>t.length?np:(t=t.slice(i,i+n),e.C=i+n,t)}(e,n))==np){4==t&&(e.o=4,t7(14),i=!1),t1(e.j,e.m,null,"[Incomplete Response]");break}else if(r==nf){e.o=4,t7(15),t1(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}else t1(e.j,e.m,r,null),nI(e,r);ny(e)&&r!=np&&r!=nf&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,t7(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ik(t),t.M=!0,t7(11))):(t1(e.j,e.m,n,"[Invalid Chunked Response]"),nT(e),n_(e))}function nw(e){e.Y=Date.now()+e.P,nE(e,e.P)}function nE(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ne(eJ(e.lb,e),t)}function nb(e){e.B&&(eG.clearTimeout(e.B),e.B=null)}function n_(e){0==e.l.H||e.J||iR(e.l,e)}function nT(e){nb(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,tG(e.V),tZ(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function nI(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||nZ(n.i,e))){if(!e.K&&nZ(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(n.g.G+3e3<e.G)iL(n),ib(n);else break e}iD(n),t7(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=ne(eJ(n.ib,n),6e3));if(1>=nJ(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else iO(n,11)}else if((e.K||n.g==e)&&iL(n),!e3(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let o=r[t];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let t=o[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));let r=o[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(n0(s,s.h),s.h=null))}if(i.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,nR(i.I,i.F,e))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),(i=n).wa=iP(i,i.J?i.pa:null,i.Y),e.K){n1(i.i,e);var a=i.L;a&&e.setTimeout(a),e.B&&(nb(e),nw(e)),i.g=e}else iA(i);0<n.j.length&&iT(n)}else"stop"!=o[0]&&"close"!=o[0]||iO(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?iO(n,7):iE(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}t5(4)}catch(e){}}function nC(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(eQ(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(eQ(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}for(let i in t=[],n=0,e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(eQ(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(eq=nu.prototype).setTimeout=function(e){this.P=e},eq.nb=function(e){e=e.target;let t=this.M;t&&3==ip(e)?t.l():this.Pa(e)},eq.Pa=function(e){try{if(e==this.g)e:{let u=ip(this.g);var t=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||tr||this.g&&(this.h.h||this.g.ja()||im(this.g)))){this.J||4!=u||7==t||(8==t||0>=c?t5(3):t5(2)),nb(this);var n=this.g.da();this.ca=n;t:if(ny(this)){var i=im(this.g);e="";var r=i.length,s=4==ip(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nT(this),n_(this);var a="";break t}this.h.i=new eG.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(e,t,n,i,r,s,a){e.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!e3(o)){var h=o;break t}}h=null}if(n=h)t1(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nI(this,n);else{this.i=!1,this.o=3,t7(12),nT(this),n_(this);break e}}this.S?(nv(this,u,a),tr&&this.i&&3==u&&(tJ(this.U,this.V,"tick",this.mb),this.V.start())):(t1(this.j,this.m,a,null),nI(this,a)),4==u&&nT(this),this.i&&!this.J&&(4==u?iR(this.l,this):(this.i=!1,nw(this)))}else(function(e){let t={};e=(e.g&&2<=ip(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(e3(e[i]))continue;var n=function(e){var t=1;e=e.split(":");let n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}(e[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=t[r]||[];t[r]=s,s.push(n)}!function(e,t){for(let n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.o=3,t7(12)):(this.o=0,t7(13)),nT(this),n_(this)}}}catch(e){}finally{}},eq.mb=function(){if(this.g){var e=ip(this.g),t=this.g.ja();this.C<t.length&&(nb(this),nv(this,e,t),this.i&&4!=e&&nw(this))}},eq.cancel=function(){this.J=!0,nT(this)},eq.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(t5(),t7(17)),nT(this),this.o=2,n_(this)):nE(this,this.Y-e)};var nS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nA(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof nA){this.h=e.h,nk(this,e.j),this.s=e.s,this.g=e.g,nN(this,e.m),this.l=e.l;var t=e.i,n=new n$;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),nL(this,n),this.o=e.o}else e&&(t=String(e).match(nS))?(this.h=!1,nk(this,t[1]||"",!0),this.s=nO(t[2]||""),this.g=nO(t[3]||"",!0),nN(this,t[4]),this.l=nO(t[5]||"",!0),nL(this,t[6]||"",!0),this.o=nO(t[7]||"")):(this.h=!1,this.i=new n$(null,this.h))}function nD(e){return new nA(e)}function nk(e,t,n){e.j=n?nO(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function nN(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function nL(e,t,n){var i,r;t instanceof n$?(e.i=t,i=e.i,(r=e.h)&&!i.j&&(nq(i),i.i=null,i.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(nz(this,t),nH(this,n,e))},i)),i.j=r):(n||(t=nM(t,nB)),e.i=new n$(t,e.h))}function nR(e,t,n){e.i.set(t,n)}function nx(e){return nR(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nO(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function nM(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,nP),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function nP(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}nA.prototype.toString=function(){var e=[],t=this.j;t&&e.push(nM(t,nF,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(nM(t,nF,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(nM(n,"/"==n.charAt(0)?nU:nV,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",nM(n,nj)),e.join("")};var nF=/[#\/\?@]/g,nV=/[#\?:]/g,nU=/[#\?]/g,nB=/[#\?@]/g,nj=/#/g;function n$(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function nq(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function nz(e,t){nq(e),t=nG(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nK(e,t){return nq(e),t=nG(e,t),e.g.has(t)}function nH(e,t,n){nz(e,t),0<n.length&&(e.i=null,e.g.set(nG(e,t),e9(n)),e.h+=n.length)}function nG(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(eq=n$.prototype).add=function(e,t){nq(this),this.i=null,e=nG(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},eq.forEach=function(e,t){nq(this),this.g.forEach(function(n,i){n.forEach(function(n){e.call(t,n,i,this)},this)},this)},eq.ta=function(){nq(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){let r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},eq.Z=function(e){nq(this);let t=[];if("string"==typeof e)nK(this,e)&&(t=t.concat(this.g.get(nG(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},eq.set=function(e,t){return nq(this),this.i=null,nK(this,e=nG(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},eq.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},eq.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];let s=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),e.push(r)}}return this.i=e.join("&")};var nQ=class{constructor(e,t){this.g=e,this.map=t}};function nW(e){this.l=e||nY,e=eG.PerformanceNavigationTiming?0<(e=eG.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(eG.g&&eG.g.Ka&&eG.g.Ka()&&eG.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nY=10;function nX(e){return!!e.h||!!e.g&&e.g.size>=e.j}function nJ(e){return e.h?1:e.g?e.g.size:0}function nZ(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function n0(e,t){e.g?e.g.add(t):e.h=t}function n1(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function n2(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let n of e.g.values())t=t.concat(n.F);return t}return e9(e.i)}nW.prototype.cancel=function(){if(this.i=n2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var n9=class{stringify(e){return eG.JSON.stringify(e,void 0)}parse(e){return eG.JSON.parse(e,void 0)}};function n4(){this.g=new n9}function n6(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function n5(e){this.l=e.fc||null,this.j=e.ob||!1}function n3(e,t){tM.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=n7,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}e0(n5,ni),n5.prototype.g=function(){return new n3(this.l,this.j)},n5.prototype.i=(i={},function(){return i}),e0(n3,tM);var n7=0;function n8(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ie(e){e.readyState=4,e.l=null,e.j=null,e.A=null,it(e)}function it(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(eq=n3.prototype).open=function(e,t){if(this.readyState!=n7)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,it(this)},eq.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||eG).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},eq.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ie(this)),this.readyState=n7},eq.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,it(this)),this.g&&(this.readyState=3,it(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==eG.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;n8(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},eq.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ie(this):it(this),3==this.readyState&&n8(this)}},eq.Za=function(e){this.g&&(this.response=this.responseText=e,ie(this))},eq.Ya=function(e){this.g&&(this.response=e,ie(this))},eq.ka=function(){this.g&&ie(this)},eq.setRequestHeader=function(e,t){this.v.append(e,t)},eq.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},eq.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var n=t.next();!n.done;)e.push((n=n.value)[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(n3.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var ii=eG.JSON.parse;function ir(e){tM.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=is,this.L=this.M=!1}e0(ir,tM);var is="",ia=/^https?$/i,io=["POST","PUT"];function il(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ih(e),ic(e)}function ih(e){e.F||(e.F=!0,tP(e,"complete"),tP(e,"error"))}function iu(e){if(e.h&&void 0!==eH&&(!e.C[1]||4!=ip(e)||2!=e.da())){if(e.v&&4==ip(e))tQ(e.La,0,e);else if(tP(e,"readystatechange"),4==ip(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,n,i=!0;break;default:i=!1}if(!(t=i)){if(n=0===a){var r=String(e.I).match(nS)[1]||null;!r&&eG.self&&eG.self.location&&(r=eG.self.location.protocol.slice(0,-1)),n=!ia.test(r?r.toLowerCase():"")}t=n}if(t)tP(e,"complete"),tP(e,"success");else{e.m=6;try{var s=2<ip(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",ih(e)}}finally{ic(e)}}}}function ic(e,t){if(e.g){id(e);let n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||tP(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function id(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(eG.clearTimeout(e.A),e.A=null)}function ip(e){return e.g?e.g.readyState:0}function im(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case is:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ig(e){let t="";return tw(e,function(e,n){t+=n+":"+e+"\r\n"}),t}function iy(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=ig(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):nR(e,t,n))}function iv(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function iw(e){this.Ga=0,this.j=[],this.l=new t0,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=iv("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=iv("baseRetryDelayMs",5e3,e),this.hb=iv("retryDelaySeedMs",1e4,e),this.eb=iv("forwardChannelMaxRetries",2,e),this.xa=iv("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new nW(e&&e.concurrentRequestLimit),this.Ja=new n4,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function iE(e){if(i_(e),3==e.H){var t=e.W++,n=nD(e.I);if(nR(n,"SID",e.K),nR(n,"RID",t),nR(n,"TYPE","terminate"),iC(e,n),(t=new nu(e,e.l,t)).L=2,t.v=nx(nD(n)),n=!1,eG.navigator&&eG.navigator.sendBeacon)try{n=eG.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&eG.Image&&((new Image).src=t.v,n=!0),n||(t.g=iF(t.l,null),t.g.ha(t.v)),t.G=Date.now(),nw(t)}iM(e)}function ib(e){e.g&&(ik(e),e.g.cancel(),e.g=null)}function i_(e){ib(e),e.u&&(eG.clearTimeout(e.u),e.u=null),iL(e),e.i.cancel(),e.m&&("number"==typeof e.m&&eG.clearTimeout(e.m),e.m=null)}function iT(e){if(!nX(e.i)&&!e.m){e.m=!0;var t=e.Na;tj||tz(),t$||(tj(),t$=!0),tq.add(t,e),e.C=0}}function iI(e,t){var n;n=t?t.m:e.W++;let i=nD(e.I);nR(i,"SID",e.K),nR(i,"RID",n),nR(i,"AID",e.V),iC(e,i),e.o&&e.s&&iy(i,e.o,e.s),n=new nu(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=iS(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),n0(e.i,n),nm(n,i,t)}function iC(e,t){e.na&&tw(e.na,function(e,n){nR(t,n,e)}),e.h&&nC({},function(e,n){nR(t,n,e)})}function iS(e,t,n){n=Math.min(e.j.length,n);var i=e.h?eJ(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){let e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<n;a++){let n=r[a].g,o=r[a].map;if(0>(n-=t))t=Math.max(0,r[a].g-100),s=!1;else try{!function(e,t,n){let i=n||"";try{nC(e,function(e,n){let r=e;eW(e)&&(r=tV(e)),t.push(i+n+"="+encodeURIComponent(r))})}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+n+"_")}catch(e){i&&i(o)}}if(s){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function iA(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;tj||tz(),t$||(tj(),t$=!0),tq.add(t,e),e.A=0}}function iD(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=ne(eJ(e.Ma,e),ix(e,e.A)),e.A++,!0)}function ik(e){null!=e.B&&(eG.clearTimeout(e.B),e.B=null)}function iN(e){e.g=new nu(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=nD(e.wa);nR(t,"RID","rpc"),nR(t,"SID",e.K),nR(t,"AID",e.V),nR(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&nR(t,"TO",e.qa),nR(t,"TYPE","xmlhttp"),iC(e,t),e.o&&e.s&&iy(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=nx(nD(t)),n.s=null,n.S=!0,ng(n,e)}function iL(e){null!=e.v&&(eG.clearTimeout(e.v),e.v=null)}function iR(e,t){var n=null;if(e.g==t){iL(e),ik(e),e.g=null;var i=2}else{if(!nZ(e.i,t))return;n=t.F,n1(e.i,t),i=1}if(0!=e.H){if(t.i){if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var r,s=e.C;tP(i=t4(),new t8(i,n)),iT(e)}else iA(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==i&&(r=t,!(nJ(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=r.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=ne(eJ(e.Na,e,r),ix(e,e.C)),e.C++,!0)))||2==i&&iD(e)))switch(n&&0<n.length&&((t=e.i).i=t.i.concat(n)),s){case 1:iO(e,5);break;case 4:iO(e,10);break;case 3:iO(e,6);break;default:iO(e,2)}}}function ix(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function iO(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=eJ(e.pb,e);n||(n=new nA("//www.google.com/images/cleardot.gif"),eG.location&&"http"==eG.location.protocol||nk(n,"https"),nx(n)),function(e,t){let n=new t0;if(eG.Image){let i=new Image;i.onload=eZ(n6,n,i,"TestLoadImage: loaded",!0,t),i.onerror=eZ(n6,n,i,"TestLoadImage: error",!1,t),i.onabort=eZ(n6,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=eZ(n6,n,i,"TestLoadImage: timeout",!1,t),eG.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=e}else t(!1)}(n.toString(),i)}else t7(2);e.H=0,e.h&&e.h.za(t),iM(e),i_(e)}function iM(e){if(e.H=0,e.ma=[],e.h){let t=n2(e.i);(0!=t.length||0!=e.j.length)&&(e4(e.ma,t),e4(e.ma,e.j),e.i.i.length=0,e9(e.j),e.j.length=0),e.h.ya()}}function iP(e,t,n){var i=n instanceof nA?nD(n):new nA(n);if(""!=i.g)t&&(i.g=t+"."+i.g),nN(i,i.m);else{var r=eG.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new nA(null);i&&nk(s,i),t&&(s.g=t),r&&nN(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&nR(i,n,t),nR(i,"VER",e.ra),iC(e,i),i}function iF(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new ir(n&&e.Ha&&!e.va?new n5({ob:!0}):e.va)).Oa(e.J),t}function iV(){}function iU(){if(tn&&!(10<=Number(td)))throw Error("Environmental error: no available transport.")}function iB(e,t){tM.call(this),this.g=new iw(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!e3(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!e3(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new iq(this)}function ij(e){no.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function i$(){nl.call(this),this.status=1}function iq(e){this.g=e}function iz(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function iK(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],a=t+(s^n&(r^s))+i[0]+3614090360&4294967295;a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[1]+3905402710&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[2]+606105819&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[3]+3250441966&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[4]+4118548399&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[5]+1200080426&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[6]+2821735955&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[7]+4249261313&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[8]+1770035416&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[9]+2336552879&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[10]+4294925233&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[11]+2304563134&4294967295,a=t+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[12]+1804603682&4294967295,a=s+(r^(t=n+(a<<7&4294967295|a>>>25))&(n^r))+i[13]+4254626195&4294967295,a=r+(n^(s=t+(a<<12&4294967295|a>>>20))&(t^n))+i[14]+2792965006&4294967295,a=n+(t^(r=s+(a<<17&4294967295|a>>>15))&(s^t))+i[15]+1236535329&4294967295,n=r+(a<<22&4294967295|a>>>10),a=t+(r^s&(n^r))+i[1]+4129170786&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[11]+643717713&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[0]+3921069994&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[5]+3593408605&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[15]+3634488961&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[4]+3889429448&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[9]+568446438&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[3]+4107603335&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[8]+1163531501&4294967295,n=r+(a<<20&4294967295|a>>>12),a=t+(r^s&(n^r))+i[13]+2850285829&4294967295,t=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(t^n))+i[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=r+(t^n&(s^t))+i[7]+1735328473&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^t&(r^s))+i[12]+2368359562&4294967295,a=t+((n=r+(a<<20&4294967295|a>>>12))^r^s)+i[5]+4294588738&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[8]+2272392833&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[11]+1839030562&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[14]+4259657740&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[1]+2763975236&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[4]+1272893353&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[7]+4139469664&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[10]+3200236656&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[13]+681279174&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[0]+3936430074&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[3]+3572445317&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[6]+76029189&4294967295,a=t+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[9]+3654602809&4294967295,a=s+((t=n+(a<<4&4294967295|a>>>28))^n^r)+i[12]+3873151461&4294967295,a=r+((s=t+(a<<11&4294967295|a>>>21))^t^n)+i[15]+530742520&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^t)+i[2]+3299628645&4294967295,n=r+(a<<23&4294967295|a>>>9),a=t+(r^(n|~s))+i[0]+4096336452&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[14]+2878612391&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[5]+4237533241&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[12]+1700485571&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[10]+4293915773&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[1]+2240044497&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[8]+1873313359&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[6]+2734768916&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[13]+1309151649&4294967295,n=r+(a<<21&4294967295|a>>>11),a=t+(r^(n|~s))+i[4]+4149444226&4294967295,t=n+(a<<6&4294967295|a>>>26),a=s+(n^(t|~r))+i[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=r+(t^(s|~n))+i[2]+718787259&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function iH(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}(eq=ir.prototype).Oa=function(e){this.M=e},eq.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?nr(this.u):nr(a),this.g.onreadystatechange=eJ(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){il(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),r=eG.FormData&&e instanceof eG.FormData,!(0<=e2(io,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;id(this),0<this.B&&((this.L=(s=this.g,tn&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=eJ(this.ua,this)):this.A=tQ(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){il(this,e)}},eq.ua=function(){void 0!==eH&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tP(this,"timeout"),this.abort(8))},eq.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tP(this,"complete"),tP(this,"abort"),ic(this))},eq.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ic(this,!0)),ir.$.N.call(this)},eq.La=function(){this.s||(this.G||this.v||this.l?iu(this):this.kb())},eq.kb=function(){iu(this)},eq.isActive=function(){return!!this.g},eq.da=function(){try{return 2<ip(this)?this.g.status:-1}catch(e){return -1}},eq.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},eq.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ii(t)}},eq.Ia=function(){return this.m},eq.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eq=iw.prototype).ra=8,eq.H=1,eq.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let r=new nu(this,this.l,e),s=this.s;if(this.U&&(s?t_(s=tE(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break t}i=void 0}if(void 0===i)break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=iS(this,r,t),nR(n=nD(this.I),"RID",e),nR(n,"CVER",22),this.F&&nR(n,"X-HTTP-Session-Id",this.F),iC(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(ig(s)))+"&"+t:this.o&&iy(n,this.o,s)),n0(this.i,r),this.bb&&nR(n,"TYPE","init"),this.P?(nR(n,"$req",t),nR(n,"SID","null"),r.aa=!0,nm(r,n,null)):nm(r,n,t),this.H=2}}else 3==this.H&&(e?iI(this,e):0==this.j.length||nX(this.i)||iI(this))}},eq.Ma=function(){if(this.u=null,iN(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ne(eJ(this.jb,this),e)}},eq.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,t7(10),ib(this),iN(this))},eq.ib=function(){null!=this.v&&(this.v=null,ib(this),iD(this),t7(19))},eq.pb=function(e){e?(this.l.info("Successfully pinged google.com"),t7(2)):(this.l.info("Failed to ping google.com"),t7(1))},eq.isActive=function(){return!!this.h&&this.h.isActive(this)},(eq=iV.prototype).Ba=function(){},eq.Aa=function(){},eq.za=function(){},eq.ya=function(){},eq.isActive=function(){return!0},eq.Va=function(){},iU.prototype.g=function(e,t){return new iB(e,t)},e0(iB,tM),iB.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;t7(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=iP(e,null,e.Y),iT(e)},iB.prototype.close=function(){iE(this.g)},iB.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=tV(e),e=n);t.j.push(new nQ(t.fb++,e)),3==t.H&&iT(t)},iB.prototype.N=function(){this.g.h=null,delete this.j,iE(this.g),delete this.g,iB.$.N.call(this)},e0(ij,no),e0(i$,nl),e0(iq,iV),iq.prototype.Ba=function(){tP(this.g,"a")},iq.prototype.Aa=function(e){tP(this.g,new ij(e))},iq.prototype.za=function(e){tP(this.g,new i$)},iq.prototype.ya=function(){tP(this.g,"b")},e0(iz,function(){this.blockSize=-1}),iz.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},iz.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=n;)iK(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){iK(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){iK(this,i),r=0;break}}this.h=r,this.i+=t},iz.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var iG={};function iQ(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(iG,e)?iG[e]:iG[e]=new iH([0|e],0>e?-1:0):new iH([0|e],0>e?-1:0)}function iW(e){if(isNaN(e)||!isFinite(e))return iX;if(0>e)return i2(iW(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=iY;return new iH(t,0)}var iY=4294967296,iX=iQ(0),iJ=iQ(1),iZ=iQ(16777216);function i0(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function i1(e){return -1==e.h}function i2(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new iH(n,~e.h).add(iJ)}function i9(e,t){return e.add(i2(t))}function i4(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function i6(e,t){this.g=e,this.h=t}function i5(e,t){if(i0(t))throw Error("division by zero");if(i0(e))return new i6(iX,iX);if(i1(e))return t=i5(i2(e),t),new i6(i2(t.g),i2(t.h));if(i1(t))return t=i5(e,i2(t)),new i6(i2(t.g),t.h);if(30<e.g.length){if(i1(e)||i1(t))throw Error("slowDivide_ only works with positive integers.");for(var n=iJ,i=t;0>=i.X(e);)n=i3(n),i=i3(i);var r=i7(n,1),s=i7(i,1);for(i=i7(i,2),n=i7(n,2);!i0(i);){var a=s.add(i);0>=a.X(e)&&(r=r.add(n),s=a),i=i7(i,1),n=i7(n,1)}return t=i9(e,r.R(t)),new i6(r,t)}for(r=iX;0<=e.X(t);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,i-48),a=(s=iW(n)).R(t);i1(a)||0<a.X(e);)n-=i,a=(s=iW(n)).R(t);i0(s)&&(s=iJ),r=r.add(s),e=i9(e,a)}return new i6(r,e)}function i3(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new iH(n,e.h)}function i7(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new iH(r,e.h)}(eq=iH.prototype).ea=function(){if(i1(this))return-i2(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:iY+i)*t,t*=iY}return e},eq.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(i0(this))return"0";if(i1(this))return"-"+i2(this).toString(e);for(var t=iW(Math.pow(e,6)),n=this,i="";;){var r=i5(n,t).g,s=((0<(n=i9(n,r.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(i0(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},eq.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},eq.X=function(e){return i1(e=i9(this,e))?-1:i0(e)?0:1},eq.abs=function(){return i1(this)?i2(this):this},eq.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.D(r))+(65535&e.D(r)),a=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=a>>>16,s&=65535,a&=65535,n[r]=a<<16|s}return new iH(n,-2147483648&n[n.length-1]?-1:0)},eq.R=function(e){if(i0(this)||i0(e))return iX;if(i1(this))return i1(e)?i2(this).R(i2(e)):i2(i2(this).R(e));if(i1(e))return i2(this.R(i2(e)));if(0>this.X(iZ)&&0>e.X(iZ))return iW(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,a=65535&this.D(i),o=e.D(r)>>>16,l=65535&e.D(r);n[2*i+2*r]+=a*l,i4(n,2*i+2*r),n[2*i+2*r+1]+=s*l,i4(n,2*i+2*r+1),n[2*i+2*r+1]+=a*o,i4(n,2*i+2*r+1),n[2*i+2*r+2]+=s*o,i4(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new iH(n,0)},eq.gb=function(e){return i5(this,e).h},eq.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new iH(n,this.h&e.h)},eq.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new iH(n,this.h|e.h)},eq.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new iH(n,this.h^e.h)},iU.prototype.createWebChannel=iU.prototype.g,iB.prototype.send=iB.prototype.u,iB.prototype.open=iB.prototype.m,iB.prototype.close=iB.prototype.close,nt.NO_ERROR=0,nt.TIMEOUT=8,nt.HTTP_ERROR=6,nn.COMPLETE="complete",ns.EventType=na,na.OPEN="a",na.CLOSE="b",na.ERROR="c",na.MESSAGE="d",tM.prototype.listen=tM.prototype.O,ir.prototype.listenOnce=ir.prototype.P,ir.prototype.getLastError=ir.prototype.Sa,ir.prototype.getLastErrorCode=ir.prototype.Ia,ir.prototype.getStatus=ir.prototype.da,ir.prototype.getResponseJson=ir.prototype.Wa,ir.prototype.getResponseText=ir.prototype.ja,ir.prototype.send=ir.prototype.ha,ir.prototype.setWithCredentials=ir.prototype.Oa,iz.prototype.digest=iz.prototype.l,iz.prototype.reset=iz.prototype.reset,iz.prototype.update=iz.prototype.j,iH.prototype.add=iH.prototype.add,iH.prototype.multiply=iH.prototype.R,iH.prototype.modulo=iH.prototype.gb,iH.prototype.compare=iH.prototype.X,iH.prototype.toNumber=iH.prototype.ea,iH.prototype.toString=iH.prototype.toString,iH.prototype.getBits=iH.prototype.D,iH.fromNumber=iW,iH.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return i2(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=iW(Math.pow(n,8)),r=iX,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),n);8>a?(a=iW(Math.pow(n,a)),r=r.R(a).add(iW(o))):r=(r=r.R(i)).add(iW(o))}return r};var i8=eK.createWebChannelTransport=function(){return new iU},re=eK.getStatEventTarget=function(){return t4()},rt=eK.ErrorCode=nt,rn=eK.EventType=nn,ri=eK.Event=t2,rr=eK.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};eK.FetchXmlHttpFactory=n5;var rs=eK.WebChannel=ns,ra=eK.XhrIo=ir,ro=eK.Md5=iz,rl=eK.Integer=iH;const rh="@firebase/firestore";/**
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
 */let rc="10.3.1";/**
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
 */const rd=new ee("@firebase/firestore");// Helper methods are needed because variables can't be exported as read/write
function rf(){return rd.logLevel}function rp(e,...t){if(rd.logLevel<=e$.DEBUG){let n=t.map(ry);rd.debug(`Firestore (${rc}): ${e}`,...n)}}function rm(e,...t){if(rd.logLevel<=e$.ERROR){let n=t.map(ry);rd.error(`Firestore (${rc}): ${e}`,...n)}}/**
 * @internal
 */function rg(e,...t){if(rd.logLevel<=e$.WARN){let n=t.map(ry);rd.warn(`Firestore (${rc}): ${e}`,...n)}}/**
 * Converts an additional log parameter to a string representation.
 */function ry(e){if("string"==typeof e)return e;try{/**
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
 */function rv(e="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t=`FIRESTORE (${rc}) INTERNAL ASSERTION FAILED: `+e;// NOTE: We don't use FirestoreError here because these are internal failures
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
 */const rw={// Causes are copied from:
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
     */UNAVAILABLE:"unavailable",/** Unrecoverable data loss or corruption. */DATA_LOSS:"data-loss"};/** An error returned by a Firestore operation. */class rE extends U{/** @hideconstructor */constructor(/**
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
 */class r_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class rT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){// Fire with initial user.
e.enqueueRetryable(()=>t(ru.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class rI{constructor(e){this.token=e,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class rC{constructor(e){this.t=e,/** Tracks the current User. */this.currentUser=ru.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i,i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),r=new rb;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new rb,e.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let t=r;e.enqueueRetryable(async()=>{await t.promise,await i(this.currentUser)})},a=e=>{rp("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(rp("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new rb)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==e?(rp("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||rv(),new r_(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||rv(),new ru(e)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class rS{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=ru.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class rA{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new rS(this.l,this.h,this.P))}start(e,t){// Fire with initial uid.
e.enqueueRetryable(()=>t(ru.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let n=e=>{null!=e.error&&rp("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.R;return this.R=e.token,rp("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let i=e=>{rp("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>i(e)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?i(e):rp("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||rv(),this.R=e.token,new rD(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let i=/**
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
let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<i.length;++r)// be evenly mapped to indices of `chars` via a modulo operation.
n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function rL(e,t){return e<t?-1:e>t?1:0}/** Helper to compare arrays using isEqual(). */function rR(e,t,n){return e.length===t.length&&e.every((e,i)=>n(e,t[i]))}/**
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
 */class rx{/**
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
     */t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new rE(rw.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new rE(rw.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}/**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */static now(){return rx.fromMillis(Date.now())}/**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */static fromDate(e){return rx.fromMillis(e.getTime())}/**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */static fromMillis(e){let t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new rx(t,n)}/**
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
     */toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?rL(this.nanoseconds,e.nanoseconds):rL(this.seconds,e.seconds)}/**
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
 */class rO{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rO(e)}static min(){return new rO(new rx(0,0))}static max(){return new rO(new rx(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}/** Returns a number representation of the version for use in spec tests. */toMicroseconds(){// Convert to microseconds.
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
 */class rM{constructor(e,t,n){void 0===t?t=0:t>e.length&&rv(),void 0===n?n=e.length-t:n>e.length-t&&rv(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===rM.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof rM?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let i=0;i<n;i++){let n=e.get(i),r=t.get(i);if(n<r)return -1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class rP extends rM{construct(e,t,n){return new rP(e,t,n)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...e){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new rE(rw.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);// Strip leading and traling slashed.
t.push(...n.split("/").filter(e=>e.length>0))}return new rP(t)}static emptyPath(){return new rP([])}}const rF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */class rV extends rM{construct(e,t,n){return new rV(e,t,n)}/**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */static isValidIdentifier(e){return rF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rV.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}/**
     * Returns true if this field references the key of a document.
     */isKeyField(){return 1===this.length&&"__name__"===this.get(0)}/**
     * The field designating the key of a document.
     */static keyField(){return new rV(["__name__"])}/**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */static fromServerFormat(e){let t=[],n="",i=0,r=()=>{if(0===n.length)throw new rE(rw.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;i<e.length;){let t=e[i];if("\\"===t){if(i+1===e.length)throw new rE(rw.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new rE(rw.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?s=!s:"."!==t||s?n+=t:r(),i++}if(r(),s)throw new rE(rw.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rV(t)}static emptyPath(){return new rV([])}}/**
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
 */class rU{constructor(e){this.path=e}static fromPath(e){return new rU(rP.fromString(e))}static fromName(e){return new rU(rP.fromString(e).popFirst(5))}static empty(){return new rU(rP.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===rP.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return rP.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(e){return new rU(new rP(e.slice()))}}/**
 * Stores the latest read time, document and batch ID that were processed for an
 * index.
 */class rB{constructor(/**
     * The latest read time version that has been indexed by Firestore for this
     * field index.
     */e,/**
     * The key of the last document that was indexed for this query. Use
     * `DocumentKey.empty()` if no document has been indexed.
     */t,/*
     * The largest mutation batch id that's been processed by Firestore.
     */n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}/** Returns an offset that sorts before all regular offsets. */static min(){return new rB(rO.min(),rU.empty(),-1)}/** Returns an offset that sorts after all regular offsets. */static max(){return new rB(rO.max(),rU.empty(),-1)}}/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */class rj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function r$(e){if(e.code!==rw.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;rp("LocalStore","Unexpectedly lost primary lease")}/**
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
this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&rv(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rq((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rq?t:rq.resolve(t)}catch(e){return rq.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rq.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rq.reject(t)}static resolve(e){return new rq((t,n)=>{t(e)})}static reject(e){return new rq((t,n)=>{n(e)})}static waitFor(// eslint-disable-next-line @typescript-eslint/no-explicit-any
e){return new rq((t,n)=>{let i=0,r=0,s=!1;e.forEach(e=>{++i,e.next(()=>{++r,s&&r===i&&t()},e=>n(e))}),s=!0,r===i&&t()})}/**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */static or(e){let t=rq.resolve(!1);for(let n of e)t=t.next(e=>e?rq.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,i)=>{n.push(t.call(this,e,i))}),this.waitFor(n)}/**
     * Concurrently map all array elements through asynchronous function.
     */static mapArray(e,t){return new rq((n,i)=>{let r=e.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===r&&n(s)},e=>i(e))}})}/**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */static doWhile(e,t){return new rq((n,i)=>{let r=()=>{!0===e()?t().next(()=>{r()},i):n()};r()})}}/** Verifies whether `e` is an IndexedDbTransactionError. */function rz(e){// Use name equality, as instanceof checks on errors don't work with errors
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
 */class rK{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}/** Returns whether the value represents -0. */function rH(e){// Detect if the value is -0.0. Based on polyfill from
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
 */function rG(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rQ(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function rW(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rK.ae=-1;/**
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
class rY{constructor(e,t){this.comparator=e,this.root=t||rJ.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(e,t){return new rY(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rJ.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(e){return new rY(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rJ.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(e){// Number of nodes that were pruned when descending right
let t=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.root.reverseTraversal(e)}// Returns an iterator over the SortedMap.
getIterator(){return new rX(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rX(this.root,e,this.comparator,!1)}getReverseIterator(){return new rX(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rX(this.root,e,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class rX{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(e);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class rJ{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:rJ.RED,this.left=null!=i?i:rJ.EMPTY,this.right=null!=r?r:rJ.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(e,t,n,i,r){return new rJ(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
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
insert(e,t,n){let i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rJ.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(e,t){let n,i=this;if(0>t(e,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return rJ.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rJ.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rJ.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}// For testing.
checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw rv();let e=this.left.check();if(e!==this.right.check())throw rv();return e+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
rJ.EMPTY=null,rJ.RED=!0,rJ.BLACK=!1,// end LLRBEmptyNode
rJ.EMPTY=new class{constructor(){this.size=0}get key(){throw rv()}get value(){throw rv()}get color(){throw rv()}get left(){throw rv()}get right(){throw rv()}// Returns a copy of the current node.
copy(e,t,n,i,r){return this}// Returns a copy of the tree, with the specified key/value added.
insert(e,t,n){return new rJ(e,t)}// Returns a copy of the tree, with the specified key removed.
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
 */class rZ{constructor(e){this.comparator=e,this.data=new rY(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}/** Iterates elements in order defined by "comparator" */forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new r0(this.data.getIterator())}getIteratorFrom(e){return new r0(this.data.getIteratorFrom(e))}/** Inserts or updates an element */add(e){return this.copy(this.data.remove(e).insert(e,!0))}/** Deletes an element */delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;// Make sure `result` always refers to the larger one of the two sets.
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rZ)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rZ(this.comparator);return t.data=e,t}}class r0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class r1{constructor(e){this.fields=e,// Sort the field mask to support `FieldMask.isEqual()` and assert below.
e.sort(rV.comparator)}static empty(){return new r1([])}/**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */unionWith(e){let t=new rZ(rV.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new r1(t.toArray())}/**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rR(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class r2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class r9{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&e instanceof DOMException?new r2("Invalid base64 string: "+e):e}}(e);return new r9(t)}static fromUint8Array(e){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let t=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new r9(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return rL(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}r9.EMPTY_BYTE_STRING=new r9("");const r4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */function r6(e){// The json interface (for the browser) will return an iso timestamp string,
// while the proto js library (for node) will return a
// google.protobuf.Timestamp instance.
if(e||rv(),"string"==typeof e){// The date string can have higher precision (nanos) than the Date class
// (millis), so we do some custom parsing here.
// Parse the nanos right out of the string.
let t=0,n=r4.exec(e);if(n||rv(),n[1]){// Pad the fraction out to 9 digits (nanos).
let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}// Parse the date to get the seconds.
let i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:r5(e.seconds),nanos:r5(e.nanos)}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function r5(e){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof e?e:"string"==typeof e?Number(e):0}/** Converts the possible Proto types for Blobs into a ByteString. */function r3(e){return"string"==typeof e?r9.fromBase64String(e):r9.fromUint8Array(e)}/**
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
 */function r7(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 *//**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */function r8(e){let t=e.mapValue.fields.__previous_value__;return r7(t)?r8(t):t}/**
 * Returns the local time at which this timestamp was first set.
 */function se(e){let t=r6(e.mapValue.fields.__local_write_time__.timestampValue);return new rx(t.seconds,t.nanos)}/**
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
 */class st{/**
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
     */constructor(e,t,n,i,r,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class sn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const si={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};/** Extracts the backend's type order for the provided value. */function sr(e){return"nullValue"in e?0/* TypeOrder.NullValue */:"booleanValue"in e?1/* TypeOrder.BooleanValue */:"integerValue"in e||"doubleValue"in e?2/* TypeOrder.NumberValue */:"timestampValue"in e?3/* TypeOrder.TimestampValue */:"stringValue"in e?5/* TypeOrder.StringValue */:"bytesValue"in e?6/* TypeOrder.BlobValue */:"referenceValue"in e?7/* TypeOrder.RefValue */:"geoPointValue"in e?8/* TypeOrder.GeoPointValue */:"arrayValue"in e?9/* TypeOrder.ArrayValue */:"mapValue"in e?r7(e)?4/* TypeOrder.ServerTimestampValue */:sg(e)?9007199254740991/* TypeOrder.MaxValue */:10/* TypeOrder.ObjectValue */:rv()}/** Tests `left` and `right` for equality based on the backend semantics. */function ss(e,t){if(e===t)return!0;let n=sr(e);if(n!==sr(t))return!1;switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return!0;case 1/* TypeOrder.BooleanValue */:return e.booleanValue===t.booleanValue;case 4/* TypeOrder.ServerTimestampValue */:return se(e).isEqual(se(t));case 3/* TypeOrder.TimestampValue */:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=r6(e.timestampValue),i=r6(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue===t.stringValue;case 6/* TypeOrder.BlobValue */:return r3(e.bytesValue).isEqual(r3(t.bytesValue));case 7/* TypeOrder.RefValue */:return e.referenceValue===t.referenceValue;case 8/* TypeOrder.GeoPointValue */:return r5(e.geoPointValue.latitude)===r5(t.geoPointValue.latitude)&&r5(e.geoPointValue.longitude)===r5(t.geoPointValue.longitude);case 2/* TypeOrder.NumberValue */:return function(e,t){if("integerValue"in e&&"integerValue"in t)return r5(e.integerValue)===r5(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=r5(e.doubleValue),i=r5(t.doubleValue);return n===i?rH(n)===rH(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9/* TypeOrder.ArrayValue */:return rR(e.arrayValue.values||[],t.arrayValue.values||[],ss);case 10/* TypeOrder.ObjectValue */:return function(e,t){let n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(rG(n)!==rG(i))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!ss(n[e],i[e])))return!1;return!0}(e,t);default:return rv()}}function sa(e,t){return void 0!==(e.values||[]).find(e=>ss(e,t))}function so(e,t){if(e===t)return 0;let n=sr(e),i=sr(t);if(n!==i)return rL(n,i);switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return 0;case 1/* TypeOrder.BooleanValue */:return rL(e.booleanValue,t.booleanValue);case 2/* TypeOrder.NumberValue */:return function(e,t){let n=r5(e.integerValue||e.doubleValue),i=r5(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3/* TypeOrder.TimestampValue */:return sl(e.timestampValue,t.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return sl(se(e),se(t));case 5/* TypeOrder.StringValue */:return rL(e.stringValue,t.stringValue);case 6/* TypeOrder.BlobValue */:return function(e,t){let n=r3(e),i=r3(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7/* TypeOrder.RefValue */:return function(e,t){let n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){let t=rL(n[e],i[e]);if(0!==t)return t}return rL(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8/* TypeOrder.GeoPointValue */:return function(e,t){let n=rL(r5(e.latitude),r5(t.latitude));return 0!==n?n:rL(r5(e.longitude),r5(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9/* TypeOrder.ArrayValue */:return function(e,t){let n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){let t=so(n[e],i[e]);if(t)return t}return rL(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10/* TypeOrder.ObjectValue */:return function(e,t){if(e===si.mapValue&&t===si.mapValue)return 0;if(e===si.mapValue)return 1;if(t===si.mapValue)return -1;let n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);// Even though MapValues are likely sorted correctly based on their insertion
// order (e.g. when received from the backend), local modifications can bring
// elements out of order. We need to re-sort the elements to ensure that
// canonical IDs are independent of insertion order.
i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){let t=rL(i[e],s[e]);if(0!==t)return t;let a=so(n[i[e]],r[s[e]]);if(0!==a)return a}return rL(i.length,s.length)}(e.mapValue,t.mapValue);default:throw rv()}}function sl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return rL(e,t);let n=r6(e),i=r6(t),r=rL(n.seconds,i.seconds);return 0!==r?r:rL(n.nanos,i.nanos)}function sh(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=r6(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?r3(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,rU.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let i of e.values||[])n?n=!1:t+=",",t+=sh(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){// Iteration order in JavaScript is not guaranteed. To ensure that we generate
// matching canonical IDs for identical maps, we need to sort the keys.
let t=Object.keys(e.fields||{}).sort(),n="{",i=!0;for(let r of t)i?i=!1:n+=",",n+=`${r}:${sh(e.fields[r])}`;return n+"}"}(e.mapValue):rv()}/** Returns true if `value` is an IntegerValue . */function su(e){return!!e&&"integerValue"in e}/** Returns true if `value` is a DoubleValue. *//** Returns true if `value` is an ArrayValue. */function sc(e){return!!e&&"arrayValue"in e}/** Returns true if `value` is a NullValue. */function sd(e){return!!e&&"nullValue"in e}/** Returns true if `value` is NaN. */function sf(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}/** Returns true if `value` is a MapValue. */function sp(e){return!!e&&"mapValue"in e}/** Creates a deep copy of `source`. */function sm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rQ(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=sm(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=sm(e.arrayValue.values[n]);return t}return Object.assign({},e)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */function sg(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class sy{constructor(e){this.value=e}static empty(){return new sy({mapValue:{}})}/**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!sp(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}/**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sm(t)}/**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */setAll(e){let t=rV.emptyPath(),n={},i=[];e.forEach((e,r)=>{if(!t.isImmediateParentOf(r)){// Insert the accumulated changes at this parent location
let e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=sm(e):i.push(r.lastSegment())});let r=this.getFieldsMap(t);this.applyChanges(r,n,i)}/**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */delete(e){let t=this.field(e.popLast());sp(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ss(this.value,e.value)}/**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];sp(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}/**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */applyChanges(e,t,n){for(let i of(rQ(t,(t,n)=>e[t]=n),n))delete e[i]}clone(){return new sy(sm(this.value))}}/**
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
 */class sv{constructor(e,t,n,i,r,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}/**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */static newInvalidDocument(e){return new sv(e,0/* DocumentType.INVALID */,/* version */rO.min(),/* readTime */rO.min(),/* createTime */rO.min(),sy.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */static newFoundDocument(e,t,n,i){return new sv(e,1/* DocumentType.FOUND_DOCUMENT */,/* version */t,/* readTime */rO.min(),/* createTime */n,i,0/* DocumentState.SYNCED */)}/** Creates a new document that is known to not exist at the given version. */static newNoDocument(e,t){return new sv(e,2/* DocumentType.NO_DOCUMENT */,/* version */t,/* readTime */rO.min(),/* createTime */rO.min(),sy.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */static newUnknownDocument(e,t){return new sv(e,3/* DocumentType.UNKNOWN_DOCUMENT */,/* version */t,/* readTime */rO.min(),/* createTime */rO.min(),sy.empty(),2/* DocumentState.HAS_COMMITTED_MUTATIONS */)}/**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */convertToFoundDocument(e,t){// If a document is switching state from being an invalid or deleted
// document to a valid (FOUND_DOCUMENT) document, either due to receiving an
// update from Watch or due to applying a local set mutation on top
// of a deleted document, our best guess about its createTime would be the
// version at which the document transitioned to a FOUND_DOCUMENT.
return this.createTime.isEqual(rO.min())&&(2/* DocumentType.NO_DOCUMENT */===this.documentType||0/* DocumentType.INVALID */===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1/* DocumentType.FOUND_DOCUMENT */,this.data=t,this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */convertToNoDocument(e){return this.version=e,this.documentType=2/* DocumentType.NO_DOCUMENT */,this.data=sy.empty(),this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */convertToUnknownDocument(e){return this.version=e,this.documentType=3/* DocumentType.UNKNOWN_DOCUMENT */,this.data=sy.empty(),this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasCommittedMutations(){return this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasLocalMutations(){return this.documentState=1/* DocumentState.HAS_LOCAL_MUTATIONS */,this.version=rO.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1/* DocumentState.HAS_LOCAL_MUTATIONS */===this.documentState}get hasCommittedMutations(){return 2/* DocumentState.HAS_COMMITTED_MUTATIONS */===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0/* DocumentType.INVALID */!==this.documentType}isFoundDocument(){return 1/* DocumentType.FOUND_DOCUMENT */===this.documentType}isNoDocument(){return 2/* DocumentType.NO_DOCUMENT */===this.documentType}isUnknownDocument(){return 3/* DocumentType.UNKNOWN_DOCUMENT */===this.documentType}isEqual(e){return e instanceof sv&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sv(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sw{constructor(e,t){this.position=e,this.inclusive=t}}function sE(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){let s=t[r],a=e.position[r];if(i=s.field.isKeyField()?rU.comparator(rU.fromName(a.referenceValue),n.key):so(a,n.data.field(s.field)),"desc"/* Direction.DESCENDING */===s.dir&&(i*=-1),0!==i)break}return i}/**
 * Returns true if a document sorts after a bound using the provided sort
 * order.
 */function sb(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ss(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class s_{constructor(e,t="asc"/* Direction.ASCENDING */){this.field=e,this.dir=t}}/**
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
 */class sT{}class sI extends sT{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t,n){return e.isKeyField()?"in"/* Operator.IN */===t||"not-in"/* Operator.NOT_IN */===t?this.createKeyFieldInFilter(e,t,n):new sD(e,t,n):"array-contains"/* Operator.ARRAY_CONTAINS */===t?new sR(e,n):"in"/* Operator.IN */===t?new sx(e,n):"not-in"/* Operator.NOT_IN */===t?new sO(e,n):"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===t?new sM(e,n):new sI(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"/* Operator.IN */===t?new sk(e,n):new sN(e,n)}matches(e){let t=e.data.field(this.field);// Types do not have to match in NOT_EQUAL filters.
return"!="/* Operator.NOT_EQUAL */===this.op?null!==t&&this.matchesComparison(so(t,this.value)):null!==t&&sr(this.value)===sr(t)&&this.matchesComparison(so(t,this.value));// Only compare types with matching backend order (such as double and int).
}matchesComparison(e){switch(this.op){case"<"/* Operator.LESS_THAN */:return e<0;case"<="/* Operator.LESS_THAN_OR_EQUAL */:return e<=0;case"=="/* Operator.EQUAL */:return 0===e;case"!="/* Operator.NOT_EQUAL */:return 0!==e;case">"/* Operator.GREATER_THAN */:return e>0;case">="/* Operator.GREATER_THAN_OR_EQUAL */:return e>=0;default:return rv()}}isInequality(){return["<"/* Operator.LESS_THAN */,"<="/* Operator.LESS_THAN_OR_EQUAL */,">"/* Operator.GREATER_THAN */,">="/* Operator.GREATER_THAN_OR_EQUAL */,"!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class sC extends sT{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t){return new sC(e,t)}matches(e){return sS(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}// Returns a mutable copy of `this.filters`
getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}// Performs a depth-first search to find and return the first FieldFilter in the composite filter
// that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
// predicate.
le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function sS(e){return"and"/* CompositeOperator.AND */===e.op}/**
 * Returns true if this filter does not contain any composite filters. Returns false otherwise.
 */function sA(e){for(let t of e.filters)if(t instanceof sC)return!1;return!0}class sD extends sI{constructor(e,t,n){super(e,t,n),this.key=rU.fromName(n.referenceValue)}matches(e){let t=rU.comparator(e.key,this.key);return this.matchesComparison(t)}}/** Filter that matches on key fields within an array. */class sk extends sI{constructor(e,t){super(e,"in"/* Operator.IN */,t),this.keys=sL("in"/* Operator.IN */,t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}/** Filter that matches on key fields not present within an array. */class sN extends sI{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t),this.keys=sL("not-in"/* Operator.NOT_IN */,t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sL(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>rU.fromName(e.referenceValue))}/** A Filter that implements the array-contains operator. */class sR extends sI{constructor(e,t){super(e,"array-contains"/* Operator.ARRAY_CONTAINS */,t)}matches(e){let t=e.data.field(this.field);return sc(t)&&sa(t.arrayValue,this.value)}}/** A Filter that implements the IN operator. */class sx extends sI{constructor(e,t){super(e,"in"/* Operator.IN */,t)}matches(e){let t=e.data.field(this.field);return null!==t&&sa(this.value.arrayValue,t)}}/** A Filter that implements the not-in operator. */class sO extends sI{constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!sa(this.value.arrayValue,t)}}/** A Filter that implements the array-contains-any operator. */class sM extends sI{constructor(e,t){super(e,"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,t)}matches(e){let t=e.data.field(this.field);return!(!sc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>sa(this.value.arrayValue,e))}}/**
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
class sP{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.he=null}}/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */function sF(e,t=null,n=[],i=[],r=null,s=null,a=null){return new sP(e,t,n,i,r,s,a)}function sV(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof sI)// the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.canonicalString()+t.op.toString()+sh(t.value);if(sA(t)&&sS(t))// In the new SDK versions, the developer may use an explicit AND filter.
    // To stay consistent with the old usages, we add a special case to ensure
    // the canonical ID for these two are the same. For example:
    // `col.whereEquals("a", 1).whereEquals("b", 2)` should have the same
    // canonical ID as `col.where(and(equals("a",1), equals("b",2)))`.
    return t.filters.map(t=>e(t)).join(",");{// filter instanceof CompositeFilter
    let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>sh(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>sh(e)).join(",")),e.he=t}return e.he}function sU(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++){var n,i;if(n=e.orderBy[r],i=t.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof sI?n instanceof sI&&t.op===n.op&&t.field.isEqual(n.field)&&ss(t.value,n.value):t instanceof sC?n instanceof sC&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,i,r)=>t&&e(i,n.filters[r]),!0):void rv()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sb(e.startAt,t.startAt)&&sb(e.endAt,t.endAt)}function sB(e){return rU.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/** Returns the number of segments of a perfect index for this target. *//**
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
 */class sj{/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */constructor(e,t=null,n=[],i=[],r=null,s="F"/* LimitType.First */,a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,// non-aggregate queries.
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
 */function s$(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}/**
 * Returns the normalized order-by constraint that is used to execute the Query,
 * which can be different from the order-by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`). The normalized order-by
 * includes implicit order-bys in addition to the explicit user provided
 * order-bys.
 */function sq(e){if(null===e.Pe){e.Pe=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),n=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===n)// inequality filter field for it to be a valid query.
// Note that the default inequality field and key ordering is ascending.
t.isKeyField()||e.Pe.push(new s_(t)),e.Pe.push(new s_(rV.keyField(),"asc"/* Direction.ASCENDING */));else{let t=!1;for(let n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){// The order of the implicit key ordering always matches the last
// explicit order-by
let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc"/* Direction.ASCENDING */;e.Pe.push(new s_(rV.keyField(),t))}}}return e.Pe}/**
 * Converts this `Query` instance to its corresponding `Target` representation.
 */function sz(e){return e.Ie||(e.Ie=/**
 * Converts this `Query` instance to its corresponding `Target` representation,
 * for use within an aggregate query. Unlike targets for non-aggregate queries,
 * aggregate query targets do not contain normalized order-bys, they only
 * contain explicit order-bys.
 */function(e,t){if("F"/* LimitType.First */===e.limitType)return sF(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{// Flip the orderBy directions since we want the last results
t=t.map(e=>{let t="desc"/* Direction.DESCENDING */===e.dir?"asc"/* Direction.ASCENDING */:"desc"/* Direction.DESCENDING */;return new s_(e.field,t)});// We need to swap the cursors to match the now-flipped query ordering.
let n=e.endAt?new sw(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new sw(e.startAt.position,e.startAt.inclusive):null;// Now return as a LimitType.First query.
return sF(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}(e,sq(e))),e.Ie}function sK(e,t,n){return new sj(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function sH(e,t){return sU(sz(e),sz(t))&&e.limitType===t.limitType}// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function sG(e){return`${sV(sz(e))}|lt:${e.limitType}`}function sQ(e){var t;let n;return`Query(target=${n=(t=sz(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>/** Returns a debug description for `filter`. */(function e(t){return t instanceof sI?`${t.field.canonicalString()} ${t.op} ${sh(t.value)}`:t instanceof sC?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>sh(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>sh(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}/** Returns whether `doc` matches the constraints of `query`. */function sW(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):rU.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){// We must use `queryNormalizedOrderBy()` to get the list of all orderBys (both implicit and explicit).
// Note that for OR queries, orderBy applies to all disjunction terms and implicit orderBys must
// be taken into account. For example, the query "a > 1 || b==1" has an implicit "orderBy a" due
// to the inequality, and is evaluated as "a > 1 orderBy a || b==1 orderBy a".
// A document with content of {b:1} matches the filters, but does not match the orderBy because
// it's missing the field 'a'.
for(let n of sq(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */function(e,t,n){let i=sE(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,sq(e),t))&&(!e.endAt||!!function(e,t,n){let i=sE(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,sq(e),t))}/**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */function sY(e){return(t,n)=>{let i=!1;for(let r of sq(e)){let e=function(e,t,n){let i=e.field.isKeyField()?rU.comparator(t.key,n.key):function(e,t,n){let i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?so(i,r):rv()}(e.field,t,n);switch(e.dir){case"asc"/* Direction.ASCENDING */:return i;case"desc"/* Direction.DESCENDING */:return -1*i;default:return rv()}}(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}/**
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
 */class sX{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,/**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */this.inner={},/** The number of entries stored in the map */this.innerSize=0}/** Get a value for this key, or undefined if it does not exist. */get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,i]of n)if(this.equalsFn(t,e))return i}}has(e){return void 0!==this.get(e)}/** Put this key and value in the map. */set(e,t){let n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}/**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){rQ(this.inner,(t,n)=>{for(let[t,i]of n)e(t,i)})}isEmpty(){return rW(this.inner)}size(){return this.innerSize}}/**
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
 */const sJ=new rY(rU.comparator),sZ=new rY(rU.comparator);function s0(...e){let t=sZ;for(let n of e)t=t.insert(n.key,n);return t}function s1(e){let t=sZ;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function s2(){return new sX(e=>e.toString(),(e,t)=>e.isEqual(t))}const s9=new rY(rU.comparator),s4=new rZ(rU.comparator);function s6(...e){let t=s4;for(let n of e)t=t.add(n);return t}const s5=new rZ(rL);/**
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
 */function s3(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rH(t)?"-0":t}}/**
 * Returns an IntegerValue for `value`.
 */function s7(e){return{integerValue:""+e}}/**
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
 *//** Used to represent a field transform on a mutation. */class s8{constructor(){// Make sure that the structural type of `TransformOperation` is unique.
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
 */function ae(e,t){return e instanceof aa?/** Returns true if `value` is either an IntegerValue or a DoubleValue. */su(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}/** Transforms a value into a server-generated timestamp. */class at extends s8{}/** Transforms an array value via a union operation. */class an extends s8{constructor(e){super(),this.elements=e}}function ai(e,t){let n=al(t);for(let t of e.elements)n.some(e=>ss(e,t))||n.push(t);return{arrayValue:{values:n}}}/** Transforms an array value via a remove operation. */class ar extends s8{constructor(e){super(),this.elements=e}}function as(e,t){let n=al(t);for(let t of e.elements)n=n.filter(e=>!ss(e,t));return{arrayValue:{values:n}}}/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */class aa extends s8{constructor(e,t){super(),this.serializer=e,this.Te=t}}function ao(e){return r5(e.integerValue||e.doubleValue)}function al(e){return sc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/** The result of successfully applying a mutation to the backend. */class ah{constructor(/**
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
 */class au{constructor(e,t){this.updateTime=e,this.exists=t}/** Creates a new empty Precondition. */static none(){return new au}/** Creates a new Precondition with an exists flag. */static exists(e){return new au(void 0,e)}/** Creates a new Precondition based on a version a document exists at. */static updateTime(e){return new au(e)}/** Returns whether this Precondition is empty. */get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}/** Returns true if the preconditions is valid for the given document. */function ac(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}/**
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
 */class ad{}/**
 * A utility method to calculate a `Mutation` representing the overlay from the
 * final state of the document, and a `FieldMask` representing the fields that
 * are mutated by the local mutations.
 */function af(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;// mask is null when sets or deletes are applied to the current document.
if(null===t)return e.isNoDocument()?new ab(e.key,au.none()):new ag(e.key,e.data,au.none());{let n=e.data,i=sy.empty(),r=new rZ(rV.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);// If we are deleting a nested field, we take the immediate parent as
// the mask used to construct the resulting mutation.
// Justification: Nested fields can create parent fields implicitly. If
// only a leaf entry is deleted in later mutations, the parent field
// should still remain, but we may have lost this information.
// Consider mutation (foo.bar 1), then mutation (foo.bar delete()).
// This leaves the final result (foo, {}). Despite the fact that `doc`
// has the correct result, `foo` is not in `mask`, and the resulting
// mutation would miss `foo`.
null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new ay(e.key,i,new r1(r.toArray()),au.none())}}/**
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
 */function ap(e,t,n,i){return e instanceof ag?function(e,t,n,i){if(!ac(e.precondition,t))// caused a name collision).
return n;let r=e.value.clone(),s=aE(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null;// SetMutation overwrites all fields.
}(e,t,n,i):e instanceof ay?function(e,t,n,i){if(!ac(e.precondition,t))return n;let r=aE(e.fieldTransforms,i,t),s=t.data;return(s.setAll(av(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,i):ac(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function am(e,t){var n,i;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&rR(n,i,(e,t)=>{var n,i;return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof an&&i instanceof an||n instanceof ar&&i instanceof ar?rR(n.elements,i.elements,ss):n instanceof aa&&i instanceof aa?ss(n.Te,i.Te):n instanceof at&&i instanceof at)})))&&(0/* MutationType.Set */===e.type?e.value.isEqual(t.value):1/* MutationType.Patch */!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */class ag extends ad{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0/* MutationType.Set */}getFieldMask(){return null}}class ay extends ad{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1/* MutationType.Patch */}getFieldMask(){return this.fieldMask}}function av(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=e.data.field(n);t.set(n,i)}}),t}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */function aw(e,t,n){var i;let r=new Map;e.length===n.length||rv();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof an?ai(o,l):o instanceof ar?as(o,l):i))}return r}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The document to apply transforms on.
 * @returns The transform results list.
 */function aE(e,t,n){let i=new Map;for(let r of e){let e=r.transform,s=n.data.field(r.field);i.set(r.field,e instanceof at?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};// We should avoid storing deeply nested server timestamp map values
// because we never use the intermediate "previous values".
// For example:
// previous: 42L, add: t1, result: t1 -> 42L
// previous: t1,  add: t2, result: t2 -> 42L (NOT t2 -> t1 -> 42L)
// previous: t2,  add: t3, result: t3 -> 42L (NOT t3 -> t2 -> t1 -> 42L)
// `getPreviousValue` recursively traverses server timestamps to find the
// least recent Value.
return t&&r7(t)&&(t=r8(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof an?ai(e,s):e instanceof ar?as(e,s):function(e,t){// PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
// precision and resolves overflows by reducing precision, we do not
// manually cap overflows at 2^63.
let n=ae(e,t),i=ao(n)+ao(e.Te);return su(n)&&su(e.Te)?s7(i):s3(e.serializer,i)}(e,s))}return i}/** A mutation that deletes the document at the given key. */class ab extends ad{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2/* MutationType.Delete */,this.fieldTransforms=[]}getFieldMask(){return null}}class a_ extends ad{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3/* MutationType.Verify */,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aT{/**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}/**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let r=this.mutations[t];if(r.key.isEqual(e.key)){var i;i=n[t],r instanceof ag?function(e,t,n){// Unlike setMutationApplyToLocalView, if we're applying a mutation to a
// remote document the server has accepted the mutation so the precondition
// must have held.
let i=e.value.clone(),r=aw(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,e,i):r instanceof ay?function(e,t,n){if(!ac(e.precondition,t))// matched on the backend. We therefore must not have the expected version
// of the document in our cache and convert to an UnknownDocument with a
// known updateTime.
return void t.convertToUnknownDocument(n.version);let i=aw(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(av(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,e,i):function(e,t,n){// Unlike applyToLocalView, if we're applying a mutation to a remote
// document the server has accepted the mutation so the precondition must
// have held.
t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,i)}}}/**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */applyToLocalView(e,t){// First, apply the base state. This allows us to apply non-idempotent
// transform against a consistent set of values.
for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=ap(n,e,t,this.localWriteTime));// Second, apply all user-provided mutations.
for(let n of this.mutations)n.key.isEqual(e.key)&&(t=ap(n,e,t,this.localWriteTime));return t}/**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */applyToLocalDocumentSet(e,t){// TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
// directly (as done in `applyToLocalView()`), we can reduce the complexity
// to O(n).
let n=s2();return this.mutations.forEach(i=>{let r=e.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields);// Set mutatedFields to null if the document is only from local mutations.
// This creates a Set or Delete mutation, instead of trying to create a
// patch mutation as the overlay.
a=t.has(i.key)?null:a;let o=af(s,a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(rO.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),s6())}isEqual(e){return this.batchId===e.batchId&&rR(this.mutations,e.mutations,(e,t)=>am(e,t))&&rR(this.baseMutations,e.baseMutations,(e,t)=>am(e,t))}}/** The result of applying a mutation batch to the backend. */class aI{constructor(e,t,n,/**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}/**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */static from(e,t,n){e.mutations.length===n.length||rv();let i=s9,r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new aI(e,t,n,i)}}/**
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
 */class aC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aS{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */function aA(e){if(void 0===e)// to send invalid proto messages) we may get an error with no GRPC code.
return rm("GRPC error has no .code"),rw.UNKNOWN;switch(e){case o.OK:return rw.OK;case o.CANCELLED:return rw.CANCELLED;case o.UNKNOWN:return rw.UNKNOWN;case o.DEADLINE_EXCEEDED:return rw.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return rw.RESOURCE_EXHAUSTED;case o.INTERNAL:return rw.INTERNAL;case o.UNAVAILABLE:return rw.UNAVAILABLE;case o.UNAUTHENTICATED:return rw.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return rw.INVALID_ARGUMENT;case o.NOT_FOUND:return rw.NOT_FOUND;case o.ALREADY_EXISTS:return rw.ALREADY_EXISTS;case o.PERMISSION_DENIED:return rw.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return rw.FAILED_PRECONDITION;case o.ABORTED:return rw.ABORTED;case o.OUT_OF_RANGE:return rw.OUT_OF_RANGE;case o.UNIMPLEMENTED:return rw.UNIMPLEMENTED;case o.DATA_LOSS:return rw.DATA_LOSS;default:return rv()}}/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const aD=new rl([4294967295,4294967295],0);// Hash a string using md5 hashing algorithm.
function ak(e){let t=(new TextEncoder).encode(e),n=new ro;return n.update(t),new Uint8Array(n.digest())}// Interpret the 16 bytes array as two 64-bit unsigned integers, encoded using
// 2’s complement using little endian.
function aN(e){let t=new DataView(e.buffer),n=t.getUint32(0,/* littleEndian= */!0),i=t.getUint32(4,/* littleEndian= */!0),r=t.getUint32(8,/* littleEndian= */!0),s=t.getUint32(12,/* littleEndian= */!0);return[new rl([n,i],0),new rl([r,s],0)]}class aL{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new aR(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new aR(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new aR(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=rl.fromNumber(this.Ae)}// Calculate the ith hash value based on the hashed 64bit integers,
// and calculate its corresponding bit index in the bitmap to be checked.
Ve(e,t,n){// Calculate hashed value h(i) = h1 + (i * h2).
let i=e.add(t.multiply(rl.fromNumber(n)));// Wrap if hash value overflow 64bit.
return 1===i.compare(aD)&&(i=new rl([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}// Return whether the bit on the given index in the bitmap is set to 1.
me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){// Empty bitmap should always return false on membership check.
if(0===this.Ae)return!1;let t=ak(e),[n,i]=aN(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,i,e);if(!this.me(t))return!1}return!0}/** Create bloom filter for testing purposes only. */static create(e,t,n){let i=new Uint8Array(Math.ceil(e/8)),r=new aL(i,e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ae)return;let t=ak(e),[n,i]=aN(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(n,i,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class aR extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ax{constructor(/**
     * The snapshot version this event brings us up to, or MIN if not set.
     */e,/**
     * A map from target to changes to the target. See TargetChange.
     */t,/**
     * A map of targets that is known to be inconsistent, and the purpose for
     * re-listening. Listens for these targets should be re-established without
     * resume tokens.
     */n,/**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */i,/**
     * A set of which document updates are due only to limbo resolution targets.
     */r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}/**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */// PORTING NOTE: Multi-tab only
static createSynthesizedRemoteEventForCurrentChange(e,t,n){let i=new Map;return i.set(e,aO.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ax(rO.min(),i,new rY(rL),sJ,s6())}}/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */class aO{constructor(/**
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
     */n,/**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */i,/**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}/**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new aO(n,t,s6(),s6(),s6())}}/**
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
 */class aM{constructor(/** The new document applies to all of these targets. */e,/** The new document is removed from all of these targets. */t,/** The key of the document for this change. */n,/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */i){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=i}}class aP{constructor(e,t){this.targetId=e,this.ye=t}}class aF{constructor(/** What kind of change occurred to the watch target. */e,/** The target IDs that were added/removed/set. */t,/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */n=r9.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}/** Tracks the internal state of a Watch target. */class aV{constructor(){/**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */this.we=0,/**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */this.Se=aj(),/** See public getters for explanations of these fields. */this.be=r9.EMPTY_BYTE_STRING,this.De=!1,/**
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
     */xe(){let e=s6(),t=s6(),n=s6();return this.Se.forEach((i,r)=>{switch(r){case 0/* ChangeType.Added */:e=e.add(i);break;case 2/* ChangeType.Modified */:t=t.add(i);break;case 1/* ChangeType.Removed */:n=n.add(i);break;default:rv()}}),new aO(this.be,this.De,e,t,n)}/**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */Oe(){this.Ce=!1,this.Se=aj()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */class aU{constructor(e){this.Qe=e,/** The internal state of all tracked targets. */this.Ke=new Map,/** Keeps track of the documents to update since the last raised snapshot. */this.$e=sJ,/** A mapping of document keys to their set of target IDs. */this.Ue=aB(),/**
         * A map of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */this.We=new rY(rL)}/**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}/** Processes and adds the WatchTargetChange to the current set of changes. */He(e){this.forEachTarget(e,t=>{let n=this.Je(t);switch(e.state){case 0/* WatchTargetChangeState.NoChange */:this.Ye(t)&&n.Me(e.resumeToken);break;case 1/* WatchTargetChangeState.Added */:// We need to decrement the number of pending acks needed from watch
// for this targetId.
n.ke(),n.ve||// We have a freshly added target, so we need to reset any state
// that we had previously. This can happen e.g. when remove and add
// back a target for existence filter mismatches.
n.Oe(),n.Me(e.resumeToken);break;case 2/* WatchTargetChangeState.Removed */:// We need to keep track of removed targets to we can post-filter and
// remove any target changes.
// We need to decrement the number of pending acks needed from watch
// for this targetId.
n.ke(),n.ve||this.removeTarget(t);break;case 3/* WatchTargetChangeState.Current */:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4/* WatchTargetChangeState.Reset */:this.Ye(t)&&// Reset the target and synthesizes removes for all existing
// documents. The backend will re-add any documents that still
// match the target before it sends the next global snapshot.
(this.Ze(t),n.Me(e.resumeToken));break;default:rv()}})}/**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,n)=>{this.Ye(n)&&t(n)})}/**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */Xe(e){let t=e.targetId,n=e.ye.count,i=this.et(t);if(i){let r=i.target;if(sB(r)){if(0===n){// The existence filter told us the document does not exist. We deduce
// that this document does not exist and apply a deleted document to
// our updates. Without applying this deleted document there might be
// another query that will raise this document as part of a snapshot
// until it is resolved, essentially exposing inconsistency between
// queries.
let e=new rU(r.path);this.je(t,e,sv.newNoDocument(e,rO.min()))}else 1===n||rv()}else{let i=this.tt(t);// Existence filter mismatch. Mark the documents as being in limbo, and
// raise a snapshot with `isFromCache:true`.
if(i!==n){// Apply bloom filter to identify and mark removed documents.
let n=this.nt(e),r=n?this.rt(n,e,i):1/* BloomFilterApplicationStatus.Skipped */;0/* BloomFilterApplicationStatus.Success */!==r&&(// If bloom filter application fails, we reset the mapping and
// trigger re-run of the query.
this.Ze(t),this.We=this.We.insert(t,2/* BloomFilterApplicationStatus.FalsePositive */===r?"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */))}}}}/**
     * Parse the bloom filter from the "unchanged_names" field of an existence
     * filter.
     */nt(e){let t,n;let i=e.ye.unchangedNames;if(!i||!i.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=i;try{t=r3(r).toUint8Array()}catch(e){if(e instanceof r2)return rg("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{// BloomFilter throws error if the inputs are invalid.
n=new aL(t,s,a)}catch(e){return rg(e instanceof aR?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ae?null:n}/**
     * Apply bloom filter to remove the deleted documents, and return the
     * application status.
     */rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0/* BloomFilterApplicationStatus.Success */:2/* BloomFilterApplicationStatus.FalsePositive */}/**
     * Filter out removed documents based on bloom filter membership result and
     * return number of documents removed.
     */ot(e,t){let n=this.Qe.getRemoteKeysForTarget(t),i=0;return n.forEach(n=>{let r=this.Qe.st(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.je(t,n,/*updatedDocument=*/null),i++)}),i}/**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */_t(e){let t=new Map;this.Ke.forEach((n,i)=>{let r=this.et(i);if(r){if(n.current&&sB(r.target)){// Document queries for document that don't exist can produce an empty
// result set. To update our local cache, we synthesize a document
// delete if we have not previously received the document. This
// resolves the limbo state of the document, removing it from
// limboDocumentRefs.
// TODO(dimond): Ideally we would have an explicit lookup target
// instead resulting in an explicit delete message and we could
// remove this special logic.
let t=new rU(r.target.path);null!==this.$e.get(t)||this.ut(i,t)||this.je(i,t,sv.newNoDocument(t,e))}n.Fe&&(t.set(i,n.xe()),n.Oe())}});let n=s6();// We extract the set of limbo-only document updates as the GC logic
// special-cases documents that do not appear in the target cache.
// TODO(gsoltis): Expand on this comment once GC is available in the JS
// client.
this.Ue.forEach((e,t)=>{let i=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */===t.purpose||(i=!1,!1)}),i&&(n=n.add(e))}),this.$e.forEach((t,n)=>n.setReadTime(e));let i=new ax(e,t,this.We,this.$e,n);return this.$e=sJ,this.Ue=aB(),this.We=new rY(rL),i}/**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */// Visible for testing.
ze(e,t){if(!this.Ye(e))return;let n=this.ut(e,t.key)?2/* ChangeType.Modified */:0/* ChangeType.Added */;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}/**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */// Visible for testing.
je(e,t,n){if(!this.Ye(e))return;let i=this.Je(e);this.ut(e,t)?i.Ne(t,1/* ChangeType.Removed */):// snapshot, so we can just ignore the change.
i.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}/**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}/**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new aV,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new rZ(rL),this.Ue=this.Ue.insert(e,t)),t}/**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */Ye(e){let t=null!==this.et(e);return t||rp("WatchChangeAggregator","Detected inactive target",e),t}/**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}/**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */Ze(e){this.Ke.set(e,new aV),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,/*updatedDocument=*/null)})}/**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function aB(){return new rY(rU.comparator)}function aj(){return new rY(rU.comparator)}const a$={asc:"ASCENDING",desc:"DESCENDING"},aq={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},az={and:"AND",or:"OR"};/**
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
 */class aK{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */function aH(e,t){return e.useProto3Json||null==t?t:{value:t}}/**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 *//**
 * Returns a value for a Date that's appropriate to put into a proto.
 */function aG(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */function aQ(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function aW(e){return e||rv(),rO.fromTimestamp(function(e){let t=r6(e);return new rx(t.seconds,t.nanos)}(e))}function aY(e,t){return new rP(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function aX(e){let t=rP.fromString(e);return a5(t)||rv(),t}function aJ(e,t){return aY(e.databaseId,t.path)}function aZ(e,t){let n=aX(t);if(n.get(1)!==e.databaseId.projectId)throw new rE(rw.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new rE(rw.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new rU(a2(n))}function a0(e,t){return aY(e.databaseId,t)}function a1(e){return new rP(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function a2(e){return e.length>4&&"documents"===e.get(4)||rv(),e.popFirst(5)}/** Creates a Document proto from key and fields (but no create/update time) */function a9(e,t,n){return{name:aJ(e,t),fields:n.value.mapValue.fields}}function a4(e){return{fieldPath:e.canonicalString()}}function a6(e){return rV.fromServerFormat(e.fieldPath)}function a5(e){// Resource names have at least 4 components (project ID, database ID)
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
 */class a3{constructor(/** The target being listened to. */e,/**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */t,/** The purpose of the target. */n,/**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */i,/** The latest snapshot version seen for this target. */r=rO.min(),s=rO.min(),a=r9.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}/** Creates a new target data instance with an updated sequence number. */withSequenceNumber(e){return new a3(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}/**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */withResumeToken(e,t){return new a3(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,/* expectedCount= */null)}/**
     * Creates a new target data instance with an updated expected count.
     */withExpectedCount(e){return new a3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}/**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */withLastLimboFreeSnapshotVersion(e){return new a3(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 *//** Serializer for values stored in the LocalStore. */class a7{constructor(e){this.ht=e}}/**
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
/** Firestore index value writer.  */class a8{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */dt(e,t){this.Tt(e,t),// (see go/firestore-storage-format#encodings).
t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(r5(e.integerValue));else if("doubleValue"in e){let n=r5(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),rH(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.At(t,20),"string"==typeof n?t.Vt(n):(t.Vt(`${n.seconds||""}`),t.Rt(n.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(r3(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.At(t,45),t.Rt(n.latitude||0),t.Rt(n.longitude||0)}else"mapValue"in e?sg(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):rv()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let n=e.fields||{};for(let e of(this.At(t,55),Object.keys(n)))this.ft(e,t),this.Tt(n[e],t)}bt(e,t){let n=e.values||[];for(let e of(this.At(t,50),n))this.Tt(e,t)}wt(e,t){this.At(t,37),rU.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
e.Rt(2)}}a8.Ct=new a8;/**
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
 */class oe{constructor(){this.an=new ot}addToCollectionParentIndex(e,t){return this.an.add(t),rq.resolve()}getCollectionParents(e,t){return rq.resolve(this.an.getEntries(t))}addFieldIndex(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}deleteFieldIndex(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}deleteAllFieldIndexes(e){// Field indices are not supported with memory persistence.
return rq.resolve()}createTargetIndexes(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}getDocumentsMatchingTarget(e,t){// Field indices are not supported with memory persistence.
return rq.resolve(null)}getIndexType(e,t){// Field indices are not supported with memory persistence.
return rq.resolve(0/* IndexType.NONE */)}getFieldIndexes(e,t){// Field indices are not supported with memory persistence.
return rq.resolve([])}getNextCollectionGroupToUpdate(e){// Field indices are not supported with memory persistence.
return rq.resolve(null)}getMinOffset(e,t){return rq.resolve(rB.min())}getMinOffsetFromCollectionGroup(e,t){return rq.resolve(rB.min())}updateCollectionGroup(e,t,n){// Field indices are not supported with memory persistence.
return rq.resolve()}updateIndexEntries(e,t){// Field indices are not supported with memory persistence.
return rq.resolve()}}/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */class ot{constructor(){this.index={}}// Returns false if the entry already existed.
add(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new rZ(rP.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){let t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new rZ(rP.comparator)).toArray()}}new Uint8Array(0);class on{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
e,t,// us from collecting a huge number of sequence numbers if the cache has grown very large.
n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 *//** A mutation queue for a specific user, backed by IndexedDB. */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(41943040,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
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
 */class or{constructor(){// A mapping of document key to the new cache entry that should be written.
this.changes=new sX(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}/**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}/**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sv.newInvalidDocument(e).setReadTime(t))}/**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?rq.resolve(n):this.getFromCache(e,t)}/**
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
 */class os{constructor(e,/**
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
 */class oa{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}/**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ap(n.mutation,e,r1.empty(),rx.now()),e))}/**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,s6()).next(()=>t))}/**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */getLocalViewOfDocuments(e,t,n=s6()){let i=s2();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(e=>{let t=s0();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}/**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */getOverlayedDocuments(e,t){let n=s2();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,s6()))}/**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */populateOverlays(e,t,n){let i=[];return n.forEach(e=>{t.has(e)||i.push(e)}),this.documentOverlayCache.getOverlays(e,i).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}/**
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
     */computeViews(e,t,n,i){let r=sJ,s=s2(),a=s2();return t.forEach((e,t)=>{let a=n.get(t.key);// Recalculate an overlay if the document's existence state changed due to
// a remote event *and* the overlay is a PatchMutation. This is because
// document existence state can change if some patch mutation's
// preconditions are met.
// NOTE: we recalculate when `overlay` is undefined as well, because there
// might be a patch mutation whose precondition does not match before the
// change (hence overlay is undefined), but would now match.
i.has(t.key)&&(void 0===a||a.mutation instanceof ay)?r=r.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),ap(a.mutation,t,a.mutation.getFieldMask(),rx.now())):// Using EMPTY to indicate there is no overlay for the document.
s.set(t.key,r1.empty())}),this.recalculateAndSaveOverlays(e,r).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new os(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=s2(),i=new rY((e,t)=>e-t),r=s6();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let r of e)r.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||r1.empty();a=r.applyToLocalView(s,a),n.set(e,a);let o=(i.get(r.batchId)||s6()).add(e);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();// Iterate in descending order of batch IDs, and skip documents that are
// already saved.
for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,h=s2();l.forEach(e=>{if(!r.has(e)){let i=af(t.get(e),n.get(e));null!==i&&h.set(e,i),r=r.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return rq.waitFor(s)}).next(()=>n)}/**
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
     */getDocumentsMatchingQuery(e,t,n,i){/**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */return rU.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}/**
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
     */getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):rq.resolve(s2()),a=-1,o=r;return s.next(t=>rq.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(t)?rq.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,r)).next(()=>this.computeViews(e,o,t,s6())).next(e=>({batchId:a,changes:s1(e)})))})}getDocumentsMatchingDocumentQuery(e,t){// Just do a simple document lookup.
return this.getDocument(e,new rU(t)).next(e=>{let t=s0();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){let r=t.collectionGroup,s=s0();return this.indexManager.getCollectionParents(e,r).next(a=>rq.forEach(a,a=>{var o;let l=(o=a.child(r),new sj(o,/*collectionGroup=*/null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,n,i).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,i){// Query the remote documents and overlay mutations.
let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i))).next(e=>{// As documents might match the query because of their overlay we need to
// include documents for all overlays in the initial document set.
r.forEach((t,n)=>{let i=n.getKey();null===e.get(i)&&(e=e.insert(i,sv.newInvalidDocument(i)))});// Apply the overlays and match against the query.
let n=s0();return e.forEach((e,i)=>{let s=r.get(e);void 0!==s&&ap(s.mutation,i,r1.empty(),rx.now()),sW(t,i)&&(n=n.insert(e,i))}),n})}}/**
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
 */class oo{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return rq.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:aW(t.createTime)}),rq.resolve()}getNamedQuery(e,t){return rq.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */function(e){let t=function(e){var t,n,i,r,s,a,o,l;let h,u=function(e){let t=aX(e);// In v1beta1 queries for collections at the root did not have a trailing
// "/documents". In v1 all resource paths contain "/documents". Preserve the
// ability to read the v1beta1 form for compatibility with queries persisted
// in the local target cache.
return 4===t.length?rP.emptyPath():a2(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){1===d||rv();let e=c.from[0];e.allDescendants?f=e.collectionId:u=u.child(e.collectionId)}let p=[];c.where&&(p=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=a6(e.unaryFilter.field);return sI.create(t,"=="/* Operator.EQUAL */,{doubleValue:NaN});case"IS_NULL":let n=a6(e.unaryFilter.field);return sI.create(n,"=="/* Operator.EQUAL */,{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=a6(e.unaryFilter.field);return sI.create(i,"!="/* Operator.NOT_EQUAL */,{doubleValue:NaN});case"IS_NOT_NULL":let r=a6(e.unaryFilter.field);return sI.create(r,"!="/* Operator.NOT_EQUAL */,{nullValue:"NULL_VALUE"});default:return rv()}}(t):void 0!==t.fieldFilter?sI.create(a6(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"=="/* Operator.EQUAL */;case"NOT_EQUAL":return"!="/* Operator.NOT_EQUAL */;case"GREATER_THAN":return">"/* Operator.GREATER_THAN */;case"GREATER_THAN_OR_EQUAL":return">="/* Operator.GREATER_THAN_OR_EQUAL */;case"LESS_THAN":return"<"/* Operator.LESS_THAN */;case"LESS_THAN_OR_EQUAL":return"<="/* Operator.LESS_THAN_OR_EQUAL */;case"ARRAY_CONTAINS":return"array-contains"/* Operator.ARRAY_CONTAINS */;case"IN":return"in"/* Operator.IN */;case"NOT_IN":return"not-in"/* Operator.NOT_IN */;case"ARRAY_CONTAINS_ANY":return"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */;default:return rv()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?sC.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and"/* CompositeOperator.AND */;case"OR":return"or"/* CompositeOperator.OR */;default:return rv()}}(t.compositeFilter.op)):rv()}(e);return n instanceof sC&&sA(t=n)&&sS(t)?n.getFilters():[n]}(c.where));let m=[];c.orderBy&&(m=c.orderBy.map(e=>new s_(a6(e.field),function(e){switch(e){case"ASCENDING":return"asc"/* Direction.ASCENDING */;case"DESCENDING":return"desc"/* Direction.DESCENDING */;default:return}}(e.direction))));let g=null;c.limit&&(g=null==(h="object"==typeof(t=c.limit)?t.value:t)?null:h);let y=null;c.startAt&&(y=function(e){let t=!!e.before,n=e.values||[];return new sw(n,t)}(c.startAt));let v=null;return c.endAt&&(v=function(e){let t=!e.before,n=e.values||[];return new sw(n,t)}(c.endAt)),n=u,i=f,r=m,s=p,a=g,o=y,l=v,new sj(n,i,r,s,a,"F"/* LimitType.First */,o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?sK(t,t.limit,"L"/* LimitType.Last */):t}(t.bundledQuery),readTime:aW(t.readTime)}),rq.resolve()}}/**
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
 */class ol{constructor(){// A map sorted by DocumentKey, whose value is a pair of the largest batch id
// for the overlay and the overlay itself.
this.overlays=new rY(rU.comparator),this.Pr=new Map}getOverlay(e,t){return rq.resolve(this.overlays.get(t))}getOverlays(e,t){let n=s2();return rq.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,i)=>{this.It(e,t,i)}),rq.resolve()}removeOverlaysForBatchId(e,t,n){let i=this.Pr.get(n);return void 0!==i&&(i.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(n)),rq.resolve()}getOverlaysForCollection(e,t,n){let i=s2(),r=t.length+1,s=new rU(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;// Documents from sub-collections
s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return rq.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new rY((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=s2(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=s2(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=i)););return rq.resolve(a)}It(e,t,n){// Remove the association of the overlay to its batch id.
let i=this.overlays.get(n.key);if(null!==i){let e=this.Pr.get(i.largestBatchId).delete(n.key);this.Pr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new aC(t,n));// Create the association of this overlay to the given largestBatchId.
let r=this.Pr.get(t);void 0===r&&(r=s6(),this.Pr.set(t,r)),this.Pr.set(t,r.add(n.key))}}/**
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
 */class oh{constructor(){// A set of outstanding references to a document sorted by key.
this.Ir=new rZ(ou.dr),this.Tr=new rZ(ou.Er)}/** Returns true if the reference set contains no references. */isEmpty(){return this.Ir.isEmpty()}/** Adds a reference to the given document key for the given ID. */addReference(e,t){let n=new ou(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}/** Add references to the given document keys for the given ID. */Ar(e,t){e.forEach(e=>this.addReference(e,t))}/**
     * Removes a reference to the given document key for the given
     * ID.
     */removeReference(e,t){this.Rr(new ou(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}/**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */mr(e){let t=new rU(new rP([])),n=new ou(t,e),i=new ou(t,e+1),r=[];return this.Tr.forEachInRange([n,i],e=>{this.Rr(e),r.push(e.key)}),r}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new rU(new rP([])),n=new ou(t,e),i=new ou(t,e+1),r=s6();return this.Tr.forEachInRange([n,i],e=>{r=r.add(e.key)}),r}containsKey(e){let t=new ou(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ou{constructor(e,t){this.key=e,this.yr=t}/** Compare by key then by ID */static dr(e,t){return rU.comparator(e.key,t.key)||rL(e.yr,t.yr)}/** Compare by ID then by key */static Er(e,t){return rL(e.yr,t.yr)||rU.comparator(e.key,t.key)}}/**
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
 */class oc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,/**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */this.mutationQueue=[],/** Next value to use when assigning sequential IDs to each mutation batch. */this.wr=1,/** An ordered mapping between documents and the mutations batch IDs. */this.Sr=new rZ(ou.dr)}checkEmpty(e){return rq.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){let r=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new aT(r,t,n,i);// Track references by document key and index collection parents.
for(let t of(this.mutationQueue.push(s),i))this.Sr=this.Sr.add(new ou(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rq.resolve(s)}lookupMutationBatch(e,t){return rq.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Dr(t+1),i=n<0?0:n;// The requested batchId may still be out of range so normalize it to the
// start of the queue.
return rq.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rq.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return rq.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new ou(t,0),i=new ou(t,Number.POSITIVE_INFINITY),r=[];return this.Sr.forEachInRange([n,i],e=>{let t=this.br(e.yr);r.push(t)}),rq.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new rZ(rL);return t.forEach(e=>{let t=new ou(e,0),i=new ou(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,i],e=>{n=n.add(e.yr)})}),rq.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){// Use the query path as a prefix for testing if a document matches the
// query.
let n=t.path,i=n.length+1,r=n;rU.isDocumentKey(r)||(r=r.child(""));let s=new ou(new rU(r),0),a=new rZ(rL);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&// Rows with document keys more than one segment longer than the query
// path can't be matches. For example, a query on 'rooms' can't match
// the document /rooms/abc/messages/xyx.
// TODO(mcg): we'll need a different scanner when we implement
// ancestor queries.
(t.length===i&&(a=a.add(e.yr)),!0)},s),rq.resolve(this.Cr(a))}Cr(e){// Construct an array of matching batches, sorted by batchID to ensure that
// multiple mutations affecting the same document key are applied in order.
let t=[];return e.forEach(e=>{let n=this.br(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||rv(),this.mutationQueue.shift();let n=this.Sr;return rq.forEach(t.mutations,i=>{let r=new ou(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=n})}xn(e){// No-op since the memory mutation queue does not maintain a separate cache.
}containsKey(e,t){let n=new ou(t,0),i=this.Sr.firstAfterOrEqual(n);return rq.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,rq.resolve()}/**
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
 */class od{/**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */constructor(e){this.Fr=e,/** Underlying cache of documents and their read times. */this.docs=new rY(rU.comparator),/** Size of all cached documents. */this.size=0}setIndexManager(e){this.indexManager=e}/**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */addEntry(e,t){let n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}/**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return rq.resolve(n?n.document.mutableCopy():sv.newInvalidDocument(t))}getEntries(e,t){let n=sJ;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():sv.newInvalidDocument(e))}),rq.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=sJ,s=t.path,a=new rU(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=rU.comparator(e.documentKey,t.documentKey))?n:rL(e.largestBatchId,t.largestBatchId)}(new rB(a.readTime,a.key,-1),n)||(i.has(a.key)||sW(t,a))&&(r=r.insert(a.key,a.mutableCopy()))}return rq.resolve(r)}getAllFromCollectionGroup(e,t,n,i){// This method should only be called from the IndexBackfiller if persistence
// is enabled.
rv()}Mr(e,t){return rq.forEach(this.docs,e=>t(e))}newChangeBuffer(e){// `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
// a separate changelog and does not need special handling for removals.
return new of(this)}getSize(e){return rq.resolve(this.size)}}/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 *//**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */class of extends or{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(n)}),rq.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
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
 */class op{constructor(e){this.persistence=e,/**
         * Maps a target to the data about that target
         */this.Or=new sX(e=>sV(e),sU),/** The last received snapshot version. */this.lastRemoteSnapshotVersion=rO.min(),/** The highest numbered target ID encountered. */this.highestTargetId=0,/** The highest sequence number encountered. */this.Nr=0,/**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */this.Br=new oh,this.targetCount=0,this.Lr=oi.Bn()}forEachTarget(e,t){return this.Or.forEach((e,n)=>t(n)),rq.resolve()}getLastRemoteSnapshotVersion(e){return rq.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rq.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),rq.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),rq.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new oi(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,rq.resolve()}updateTargetData(e,t){return this.Qn(t),rq.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,rq.resolve()}removeTargets(e,t,n){let i=0,r=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Or.delete(s),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),rq.waitFor(r).next(()=>i)}getTargetCount(e){return rq.resolve(this.targetCount)}getTargetData(e,t){let n=this.Or.get(t)||null;return rq.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Ar(t,n),rq.resolve()}removeMatchingKeys(e,t,n){this.Br.Vr(t,n);let i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(t=>{r.push(i.markPotentiallyOrphaned(e,t))}),rq.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),rq.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Br.pr(t);return rq.resolve(n)}containsKey(e,t){return rq.resolve(this.Br.containsKey(t))}}/**
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
     */constructor(e,t){this.kr={},this.overlays={},this.qr=new rK(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new op(this),this.indexManager=new oe,this.remoteDocumentCache=new od(e=>this.referenceDelegate.$r(e)),this.serializer=new a7(t),this.Ur=new oo(this.serializer)}start(){return Promise.resolve()}shutdown(){// No durable state to ensure is closed on shutdown.
return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){// No op.
}setNetworkEnabled(){// No op.
}getIndexManager(e){// We do not currently support indices for memory persistence, so we can
// return the same shared instance of the memory index manager.
return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ol,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new oc(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,n){rp("MemoryPersistence","Starting transaction:",e);let i=new og(this.qr.next());return this.referenceDelegate.Wr(),n(i).next(e=>this.referenceDelegate.Gr(i).next(()=>e)).toPromise().then(e=>(i.raiseOnCommittedEvent(),e))}zr(e,t){return rq.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}}/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */class og extends rj{constructor(e){super(),this.currentSequenceNumber=e}}class oy{constructor(e){this.persistence=e,/** Tracks all documents that are active in Query views. */this.jr=new oh,/** The list of documents that are potentially GCed after each transaction. */this.Hr=null}static Jr(e){return new oy(e)}get Yr(){if(this.Hr)return this.Hr;throw rv()}addReference(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),rq.resolve()}removeReference(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),rq.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),rq.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){// Remove newly orphaned documents.
let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rq.forEach(this.Yr,n=>{let i=rU.fromPath(n);return this.Zr(e,i).next(e=>{e||t.removeEntry(i,rO.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){// For eager GC, we don't care about the document size, there are no size thresholds.
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
 */class ov{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Qi=n,this.Ki=i}static $i(e,t){let n=s6(),i=s6();for(let e of t.docChanges)switch(e.type){case 0/* ChangeType.Added */:n=n.add(e.doc.key);break;case 1/* ChangeType.Removed */:i=i.add(e.doc.key)}return new ov(e,t.fromCache,n,i)}}/**
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
 */class ow{constructor(){/**
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
 */class oE{constructor(){this.Ui=!1,this.Wi=!1,/**
         * SDK only decides whether it should create index when collection size is
         * larger than this.
         */this.Gi=100,this.zi=2}/** Sets the document view to query against. */initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}/** Returns all local documents matching the specified query. */getDocumentsMatchingQuery(e,t,n,i){// Stores the result from executing the query; using this object is more
// convenient than passing the result between steps of the persistence
// transaction and improves readability comparatively.
let r={result:null};return this.Hi(e,t).next(e=>{r.result=e}).next(()=>{if(!r.result)return this.Ji(e,t,i,n).next(e=>{r.result=e})}).next(()=>{if(r.result)return;let n=new ow;return this.Yi(e,t,n).next(i=>{if(r.result=i,this.Wi)return this.Zi(e,t,n,i.size)})}).next(()=>r.result)}Zi(e,t,n,i){return n.documentReadCount<this.Gi?(rf()<=e$.DEBUG&&rp("QueryEngine","SDK will not create cache indexes for query:",sQ(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),rq.resolve()):(rf()<=e$.DEBUG&&rp("QueryEngine","Query:",sQ(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.zi*i?(rf()<=e$.DEBUG&&rp("QueryEngine","The SDK decides to create cache indexes for query:",sQ(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sz(t))):rq.resolve())}/**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */Hi(e,t){if(s$(t))// key-based lookups. It is more efficient to scan all documents in a
// collection, rather than to perform individual lookups.
return rq.resolve(null);let n=sz(t);return this.indexManager.getIndexType(e,n).next(i=>0/* IndexType.NONE */===i?null:(null!==t.limit&&1/* IndexType.PARTIAL */===i&&(n=sz(// We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    t=sK(t,null,"F"/* LimitType.First */))),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{let r=s6(...i);return this.ji.getDocuments(e,r).next(i=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Xi(t,i);return this.es(t,s,r,n.readTime)?this.Hi(e,sK(t,null,"F"/* LimitType.First */)):this.ts(e,s,t,n)}))})))}/**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */Ji(e,t,n,i){return s$(t)||i.isEqual(rO.min())?rq.resolve(null):this.ji.getDocuments(e,n).next(r=>{let s=this.Xi(t,r);return this.es(t,s,n,i)?rq.resolve(null):(rf()<=e$.DEBUG&&rp("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sQ(t)),this.ts(e,s,t,/**
 * Creates an offset that matches all documents with a read time higher than
 * `readTime`.
 */function(e,t){// We want to create an offset that matches all documents with a read time
// greater than the provided read time. To do so, we technically need to
// create an offset for `(readTime, MAX_DOCUMENT_KEY)`. While we could use
// Unicode codepoints to generate MAX_DOCUMENT_KEY, it is much easier to use
// `(readTime + 1, DocumentKey.empty())` since `> DocumentKey.empty()` matches
// all valid document IDs.
let n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=rO.fromTimestamp(1e9===i?new rx(n+1,0):new rx(n,i));return new rB(r,rU.empty(),-1)}(i,0)).next(e=>e))});// Queries that have never seen a snapshot without limbo free documents
// should also be run as a full collection scan.
}/** Applies the query filter and sorting to the provided documents.  */Xi(e,t){// Sort the documents and re-apply the query filter since previously
// matching documents do not necessarily still match the query.
let n=new rZ(sY(e));return t.forEach((t,i)=>{sW(e,i)&&(n=n.add(i))}),n}/**
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
     */es(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)// longer matches.
return!0;// Limit queries are not eligible for index-free query execution if there is
// a potential that an older document from cache now sorts before a document
// that was previously part of the limit. This, however, can only happen if
// the document at the edge of the limit goes out of limit.
// If a document that is not the limit boundary sorts differently,
// the boundary of the limit itself did not change and documents from cache
// will continue to be "rejected" by this boundary. Therefore, we can ignore
// any modifications that don't affect the last document.
let r="F"/* LimitType.First */===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Yi(e,t,n){return rf()<=e$.DEBUG&&rp("QueryEngine","Using full collection scan to execute query:",sQ(t)),this.ji.getDocumentsMatchingQuery(e,t,rB.min(),n)}/**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */ts(e,t,n,i){// Retrieve all results for documents that were updated since the offset.
return this.ji.getDocumentsMatchingQuery(e,n,i).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class ob{constructor(/** Manages our in-memory or durable persistence. */e,t,n,i){this.persistence=e,this.ns=t,this.serializer=i,/**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */this.rs=new rY(rL),/** Maps a target to its targetID. */this.ss=new sX(e=>sV(e),sU),/**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(n)}us(e){// TODO(indexing): Add spec tests that test these components change after a
// user change
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oa(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function o_(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{// Swap out the mutation queue, grabbing the pending mutation batches
// before and after.
let i;return e.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,e.us(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let r=[],s=[],a=s6();for(let e of i)for(let t of(r.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);// Return the set of all (potentially) changed documents and the list
// of mutation batch IDs that were affected by change.
return e.localDocuments.getDocuments(n,a).next(e=>({cs:e,removedBatchIds:r,addedBatchIds:s}))})})}/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */function oT(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}/**
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
async function oI(e,t,n){let i=e.rs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,i))}catch(e){if(!rz(e))throw e;// All `releaseTarget` does is record the final metadata state for the
// target, but we've been recording this periodically during target
// activity. If we lose this write this could cause a very slight
// difference in the order of target deletion during GC, but we
// don't define exact LRU semantics so this is acceptable.
rp("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(i.target)}/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */function oC(e,t,n){let i=rO.min(),r=s6();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let i=e.ss.get(n);return void 0!==i?rq.resolve(e.rs.get(i)):e.Kr.getTargetData(t,n)})(e,s,sz(t)).next(t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{r=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,n?i:rO.min(),n?r:s6())).next(n=>{var i;let s;return i=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(i)||rO.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(i,s),{documents:n,Ps:r}}))}/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */// Visible for testing.
class oS{constructor(){this.activeTargetIds=s5}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}/**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oA{constructor(){this.ro=new oS,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){// No op.
}updateMutationState(e,t,n){// No op.
}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,n){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new oS,Promise.resolve()}handleUserChange(e,t,n){// No op.
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
 */class oD{so(e){// No-op.
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
 */class ok{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(rp("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0/* NetworkStatus.AVAILABLE */)}uo(){for(let e of(rp("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1/* NetworkStatus.UNAVAILABLE */)}// TODO(chenbrian): Consider passing in window either into this component or
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
 */function oL(){return null===oN?oN=268435456+Math.round(2147483648*Math.random()):oN++,"0x"+oN.toString(16)}/**
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
 */const oR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ox{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */const oO="WebChannelConnection";class oM extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${i}`,this.wo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get So(){// Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
// where to run the query, and expect the `request` to NOT specify the "path".
return!1}bo(e,t,n,i,r){let s=oL(),a=this.Do(e,t);rp("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,i,r),this.vo(e,a,o,n).then(t=>(rp("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw rg("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}Fo(e,t,n,i,r,s){// The REST API automatically aggregates all of the streamed results, so we
// can just use the normal invoke() method.
return this.bo(e,t,n,i,r)}/**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */Co(e,t,n){e["X-Goog-Api-Client"]=// so we need to get its value when we need it in a function.
function(){return"gl-js/ fire/"+rc}(),// mess with CORS and redirects by proxies. If we add custom headers
// we will need to change this code to potentially use the $httpOverwrite
// parameter supported by ESF to avoid triggering preflight requests.
e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Do(e,t){let n=oR[e];return`${this.po}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,i){let r=oL();return new Promise((s,a)=>{let o=new ra;o.setWithCredentials(!0),o.listenOnce(rn.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case rt.NO_ERROR:let t=o.getResponseJson();rp(oO,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case rt.TIMEOUT:rp(oO,`RPC '${e}' ${r} timed out`),a(new rE(rw.DEADLINE_EXCEEDED,"Request time out"));break;case rt.HTTP_ERROR:let n=o.getStatus();if(rp(oO,`RPC '${e}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(rw).indexOf(t)>=0?t:rw.UNKNOWN}(t.status);a(new rE(e,t.message))}else a(new rE(rw.UNKNOWN,"Server responded with status "+o.getStatus()))}else // it's most probably a connection issue
a(new rE(rw.UNAVAILABLE,"Connection failed."));break;default:rv()}}finally{rp(oO,`RPC '${e}' ${r} completed.`)}});let l=JSON.stringify(i);rp(oO,`RPC '${e}' ${r} sending request:`,i),o.send(t,"POST",l,n,15)})}Mo(e,t,n){let i=oL(),r=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=i8(),a=re(),l={// Required for backend stickiness, routing behavior is based on this
// parameter.
httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{// This param is used to improve routing and project isolation by the
// backend and must be included in every request.
database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{// Override the default timeout (randomized between 10-20 seconds) since
// a large write batch on a slow internet connection may take a long
// time to send to the backend. Rather than have WebChannel impose a
// tight timeout which could lead to infinite timeouts and retries, we
// set it very large (5-10 minutes) and rely on the browser's builtin
// timeouts to kick in if the request isn't working.
forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,n),// (Authorization, etc.) will trigger the browser to make a CORS preflight
// request because the XHR will no longer meet the criteria for a "simple"
// CORS request:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
// Therefore to avoid the CORS preflight request (an extra network
// roundtrip), we use the encodeInitMessageHeaders option to specify that
// the headers should instead be encoded in the request's POST payload,
// which is recognized by the webchannel backend.
l.encodeInitMessageHeaders=!0;let u=r.join("");rp(oO,`Creating RPC '${e}' stream ${i}: ${u}`,l);let c=s.createWebChannel(u,l),d=!1,f=!1,p=new ox({ho:t=>{f?rp(oO,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(rp(oO,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),rp(oO,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Po:()=>c.close()}),m=(e,t,n)=>{// TODO(dimond): closure typing seems broken because WebChannel does
// not implement goog.events.Listenable
e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};// Closure events are guarded and exceptions are swallowed, so catch any
// exception and rethrow using a setTimeout so they become visible again.
// Note that eventually this function could go away if we are confident
// enough the code is exception free.
return m(c,rs.EventType.OPEN,()=>{f||rp(oO,`RPC '${e}' stream ${i} transport opened.`)}),m(c,rs.EventType.CLOSE,()=>{f||(f=!0,rp(oO,`RPC '${e}' stream ${i} transport closed`),p.mo())}),m(c,rs.EventType.ERROR,t=>{f||(f=!0,rg(oO,`RPC '${e}' stream ${i} transport errored:`,t),p.mo(new rE(rw.UNAVAILABLE,"The operation could not be completed")))}),m(c,rs.EventType.MESSAGE,t=>{var n;if(!f){let r=t.data[0];r||rv();// TODO(b/35143891): There is a bug in One Platform that caused errors
// (and only errors) to be wrapped in an extra array. To be forward
// compatible with the bug we need to check either condition. The latter
// can be removed once the fix has been rolled out.
// Use any because msgData.error is not typed.
let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){rp(oO,`RPC '${e}' stream ${i} received error:`,s);// error.status will be a string like 'OK' or 'NOT_FOUND'.
let t=s.status,n=/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */function(e){// lookup by string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=o[e];if(void 0!==t)return aA(t)}(t),r=s.message;void 0===n&&(n=rw.INTERNAL,r="Unknown error status: "+t+" with message "+s.message),f=!0,p.mo(new rE(n,r)),c.close()}else rp(oO,`RPC '${e}' stream ${i} received:`,r),p.fo(r)}}),m(a,ri.STAT_EVENT,t=>{t.stat===rr.PROXY?rp(oO,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===rr.NOPROXY&&rp(oO,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{// Technically we could/should wait for the WebChannel opened event,
// but because we want to send the first message with the WebChannel
// handshake we pretend the channel opened here (asynchronously), and
// then delay the actual open until the first message is sent.
p.Vo()},0),p}}/** The Platform's 'document' implementation or null if not available. */function oP(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
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
 */function oF(e){return new aK(e,/* useProto3Json= */!0)}/**
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
 */class oV{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */e,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */t,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */n=1e3,i=1.5,r=6e4){this._i=e,this.timerId=t,this.xo=n,this.Oo=i,this.No=r,this.Bo=0,this.Lo=null,/** The last backoff attempt, as epoch milliseconds. */this.ko=Date.now(),this.reset()}/**
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
let t=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),i=Math.max(0,t-n);// Guard against lastAttemptTime being in the future due to a clock change.
i>0&&rp("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),e())),// bounds.
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
 */class oU{constructor(e,t,n,i,r,s,a,o){this._i=e,this.Uo=n,this.Wo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0/* PersistentStreamState.Initial */,/**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new oV(e,t)}/**
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
this.Go++,4/* PersistentStreamState.Error */!==e?this.Ho.reset():t&&t.code===rw.RESOURCE_EXHAUSTED?(rm(t.toString()),rm("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===rw.UNAUTHENTICATED&&3/* PersistentStreamState.Healthy */!==this.state&&// "unauthenticated" error means the token was rejected. This should rarely
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
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{// Stream can be stopped while waiting for authentication.
// TODO(mikelehen): We really should just use dispatchIfNotClosed
// and let this dispatch onto the queue, but that opened a spec test can
// of worms that I don't want to deal with in this PR.
this.Go===t&&// Normally we'd have to schedule the callback on the AsyncQueue.
// However, the following calls are safe to be called outside the
// AsyncQueue since they don't chain asynchronous calls
this.__(e,n)},t=>{e(()=>{let e=new rE(rw.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let n=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{n(()=>(this.state=2/* PersistentStreamState.Open */,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3/* PersistentStreamState.Healthy */),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{n(()=>this.a_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Zo(){this.state=5/* PersistentStreamState.Backoff */,this.Ho.Qo(async()=>{this.state=0/* PersistentStreamState.Initial */,this.start()})}// Visible for tests
a_(e){// In theory the stream could close cleanly, however, in our current model
// we never expect this to happen because if we stop a stream ourselves,
// this callback will never be called. To prevent cases where we retry
// without a backoff accidentally, we set the stream to error in all cases.
return rp("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4/* PersistentStreamState.Error */,e)}/**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(rp("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */class oB extends oU{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff"/* TimerId.ListenStreamConnectionBackoff */,"listen_stream_idle"/* TimerId.ListenStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,n,i,s),this.serializer=r}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){// A successful response means the stream is healthy
this.Ho.reset();let t=function(e,t){let n;if("targetChange"in t){var i,r;t.targetChange;// proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
// if unset
let s="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0/* WatchTargetChangeState.NoChange */:"ADD"===i?1/* WatchTargetChangeState.Added */:"REMOVE"===i?2/* WatchTargetChangeState.Removed */:"CURRENT"===i?3/* WatchTargetChangeState.Current */:"RESET"===i?4/* WatchTargetChangeState.Reset */:rv(),a=t.targetChange.targetIds||[],o=(r=t.targetChange.resumeToken,e.useProto3Json?(void 0===r||"string"==typeof r||rv(),r9.fromBase64String(r||"")):(void 0===r||r instanceof Uint8Array||rv(),r9.fromUint8Array(r||new Uint8Array))),l=t.targetChange.cause,h=l&&function(e){let t=void 0===e.code?rw.UNKNOWN:aA(e.code);return new rE(t,e.message||"")}(l);n=new aF(s,a,o,h||null)}else if("documentChange"in t){t.documentChange;let i=t.documentChange;i.document,i.document.name,i.document.updateTime;let r=aZ(e,i.document.name),s=aW(i.document.updateTime),a=i.document.createTime?aW(i.document.createTime):rO.min(),o=new sy({mapValue:{fields:i.document.fields}}),l=sv.newFoundDocument(r,s,a,o),h=i.targetIds||[],u=i.removedTargetIds||[];n=new aM(h,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;let i=t.documentDelete;i.document;let r=aZ(e,i.document),s=i.readTime?aW(i.readTime):rO.min(),a=sv.newNoDocument(r,s),o=i.removedTargetIds||[];n=new aM([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let i=t.documentRemove;i.document;let r=aZ(e,i.document),s=i.removedTargetIds||[];n=new aM([],s,r,null)}else{if(!("filter"in t))return rv();{t.filter;let e=t.filter;e.targetId;let{count:i=0,unchangedNames:r}=e,s=new aS(i,r),a=e.targetId;n=new aP(a,s)}}return n}(this.serializer,e),n=function(e){// We have only reached a consistent snapshot for the entire stream if there
// is a read_time set and it applies to all targets (i.e. the list of
// targets is empty). The backend is guaranteed to send such responses.
if(!("targetChange"in e))return rO.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?rO.min():t.readTime?aW(t.readTime):rO.min()}(e);return this.listener.c_(t,n)}/**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */l_(e){let t={};t.database=a1(this.serializer),t.addTarget=function(e,t){let n;let i=t.target;if((n=sB(i)?{documents:{documents:[a0(e,i.path)]}}:{query:function(e,t){var n,i;// Dissect the path into parent, collectionId, and optional key filter.
let r={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(r.parent=a0(e,s),r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r.parent=a0(e,s.popLast()),r.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof sI?function(e){if("=="/* Operator.EQUAL */===e.op){if(sf(e.value))return{unaryFilter:{field:a4(e.field),op:"IS_NAN"}};if(sd(e.value))return{unaryFilter:{field:a4(e.field),op:"IS_NULL"}}}else if("!="/* Operator.NOT_EQUAL */===e.op){if(sf(e.value))return{unaryFilter:{field:a4(e.field),op:"IS_NOT_NAN"}};if(sd(e.value))return{unaryFilter:{field:a4(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:a4(e.field),op:aq[e.op],value:e.value}}}(t):t instanceof sC?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:az[t.op],filters:n}}}(t):rv()}(sC.create(e,"and"/* CompositeOperator.AND */))}(t.filters);a&&(r.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:a4(e.field),direction:a$[e.dir]}))}(t.orderBy);o&&(r.structuredQuery.orderBy=o);let l=aH(e,t.limit);return null!==l&&(r.structuredQuery.limit=l),t.startAt&&(r.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(r.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),r}(e,i)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=aQ(e,t.resumeToken);let i=aH(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(rO.min())>0){// TODO(wuandy): Consider removing above check because it is most likely true.
// Right now, many tests depend on this behaviour though (leaving min() out
// of serialization).
n.readTime=aG(e,t.snapshotVersion.toTimestamp());let i=aH(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen"/* TargetPurpose.Listen */:return null;case"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */:return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */:return"limbo-document";default:return rv()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.n_(t)}/**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */h_(e){let t={};t.database=a1(this.serializer),t.removeTarget=e,this.n_(t)}}/**
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
 */class oj extends oU{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff"/* TimerId.WriteStreamConnectionBackoff */,"write_stream_idle"/* TimerId.WriteStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,n,i,s),this.serializer=r,this.P_=!1}/**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */get I_(){return this.P_}// Override of PersistentStream.start
start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||rv(),this.lastStreamToken=e.streamToken,this.P_){// A successful first write response means the stream is healthy,
// Note, that we could consider a successful handshake healthy, however,
// the write itself might be causing an error we want to back off from.
this.Ho.reset();let i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||rv(),t.map(e=>{let t;return(t=e.updateTime?aW(e.updateTime):aW(n)).isEqual(rO.min())&&// The Firestore Emulator currently returns an update time of 0 for
// deletes of non-existing documents (rather than null). This breaks the
// test "get deleted doc while offline with source=cache" as NoDocuments
// with version 0 are filtered by IndexedDb's RemoteDocumentCache.
// TODO(#2149): Remove this when Emulator is fixed
(t=aW(n)),new ah(t,e.transformResults||[])})):[]),r=aW(e.commitTime);return this.listener.T_(r,i)}// The first response is always the handshake response
return e.writeResults&&0!==e.writeResults.length&&rv(),this.P_=!0,this.listener.E_()}/**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */A_(){// TODO(dimond): Support stream resumption. We intentionally do not set the
// stream token on the handshake, ignoring any stream token we might have.
let e={};e.database=a1(this.serializer),this.n_(e)}/** Sends a group of mutations to the Firestore backend to apply. */d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let i;if(t instanceof ag)i={update:a9(e,t.key,t.value)};else if(t instanceof ab)i={delete:aJ(e,t.key)};else if(t instanceof ay)i={update:a9(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof a_))return rv();i={verify:aJ(e,t.key)}}return t.fieldTransforms.length>0&&(i.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof at)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof an)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ar)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof aa)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw rv()})(0,e))),t.precondition.isNone||(i.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:aG(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:rv()),i})(this.serializer,e))};this.n_(t)}}/**
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
 */class o$ extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new rE(rw.FAILED_PRECONDITION,"The client has already been terminated.")}/** Invokes the provided RPC with auth and AppCheck tokens. */bo(e,t,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.bo(e,t,n,i,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rw.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rE(rw.UNKNOWN,e.toString())})}/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */Fo(e,t,n,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Fo(e,t,n,r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===rw.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new rE(rw.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}/**
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(rm(t),this.p_=!1):rp("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class oz{constructor(/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */e,/** The client-side proxy for interacting with the backend. */t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},/**
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
         */this.M_=[],this.x_=r,this.x_.so(e=>{n.enqueueAndForget(async()=>{// Porting Note: Unlike iOS, `restartNetwork()` is called even when the
// network becomes unreachable as we don't have any other way to tear
// down our streams.
oZ(this)&&(rp("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4/* OfflineCause.ConnectivityChange */),await oH(e),e.O_.set("Unknown"/* OnlineState.Unknown */),e.F_.delete(4/* OfflineCause.ConnectivityChange */),await oK(e)}(this))})}),this.O_=new oq(n,i)}}async function oK(e){if(oZ(e))for(let t of e.M_)await t(/* enabled= */!0)}/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */async function oH(e){for(let t of e.M_)await t(/* enabled= */!1)}/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */function oG(e,t){e.v_.has(t.targetId)||// Mark this as something the client is currently listening for.
(e.v_.set(t.targetId,t),oJ(e)?oX(e):lr(e).Yo()&&oW(e,t))}/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */function oQ(e,t){let n=lr(e);e.v_.delete(t),n.Yo()&&oY(e,t),0===e.v_.size&&(n.Yo()?n.e_():oZ(e)&&// Revert to OnlineState.Unknown if the watch stream is not open and we
// have no listeners, since without any listens to send we cannot
// confirm if the stream is healthy and upgrade to OnlineState.Online.
e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */function oW(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rO.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}lr(e).l_(t)}/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */function oY(e,t){e.N_.Le(t),lr(e).h_(t)}function oX(e){e.N_=new aU({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),lr(e).start(),e.O_.y_()}/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */function oJ(e){return oZ(e)&&!lr(e).Jo()&&e.v_.size>0}function oZ(e){return 0===e.F_.size}async function o0(e){e.v_.forEach((t,n)=>{oW(e,t)})}async function o1(e,t){e.N_=void 0,oJ(e)?(e.O_.b_(t),oX(e)):// The online state is set to unknown because there is no active attempt
// at establishing a connection
e.O_.set("Unknown"/* OnlineState.Unknown */)}async function o2(e,t,n){if(e.O_.set("Online"/* OnlineState.Online */),t instanceof aF&&2/* WatchTargetChangeState.Removed */===t.state&&t.cause)// to raise events
try{await /** Handles an error on a target */async function(e,t){let n=t.cause;for(let i of t.targetIds)e.v_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.v_.delete(i),e.N_.removeTarget(i))}(e,t)}catch(n){rp("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await o9(e,n)}else if(t instanceof aM?e.N_.Ge(t):t instanceof aP?e.N_.Xe(t):e.N_.He(t),!n.isEqual(rO.min()))try{let t=await oT(e.localStore);n.compareTo(t)>=0&&// We have received a target change with a global snapshot if the snapshot
// version is not equal to SnapshotVersion.min().
await /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */function(e,t){let n=e.N_._t(t);// Update in-memory resume tokens. LocalStore will update the
// persistent view of these when applying the completed RemoteEvent.
return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){let r=e.v_.get(i);// A watched target might have been removed already.
r&&e.v_.set(i,r.withResumeToken(n.resumeToken,t))}}),// existence filter mismatches.
n.targetMismatches.forEach((t,n)=>{let i=e.v_.get(t);if(!i)return;// Clear the resume token for the target, since we're in a known mismatch
// state.
e.v_.set(t,i.withResumeToken(r9.EMPTY_BYTE_STRING,i.snapshotVersion)),// deliberately don't send a resume token so that we get a full update.
oY(e,t);// Mark the target we send as being on behalf of an existence filter
// mismatch, but don't actually retain that in listenTargets. This ensures
// that we flag the first re-listen this way without impacting future
// listens of this target (that might happen e.g. on reconnect).
let r=new a3(i.target,t,n,i.sequenceNumber);oW(e,r)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){rp("RemoteStore","Failed to raise snapshot:",t),await o9(e,t)}}/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */async function o9(e,t,n){if(!rz(t))throw t;e.F_.add(1/* OfflineCause.IndexedDbFailed */),await oH(e),e.O_.set("Offline"/* OnlineState.Offline */),n||// Use a simple read operation to determine if IndexedDB recovered.
// Ideally, we would expose a health check directly on SimpleDb, but
// RemoteStore only has access to persistence through LocalStore.
(n=()=>oT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{rp("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1/* OfflineCause.IndexedDbFailed */),await oK(e)})}/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */function o4(e,t){return t().catch(n=>o9(e,n,t))}async function o6(e){let t=ls(e),n=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;oZ(e)&&e.C_.length<10;)try{let i=await /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===i){0===e.C_.length&&t.e_();break}n=i.batchId,/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */function(e,t){e.C_.push(t);let n=ls(e);n.Yo()&&n.I_&&n.d_(t.mutations)}(e,i)}catch(t){await o9(e,t)}o5(e)&&o3(e)}function o5(e){return oZ(e)&&!ls(e).Jo()&&e.C_.length>0}function o3(e){ls(e).start()}async function o7(e){ls(e).A_()}async function o8(e){let t=ls(e);// Send the write pipeline now that the stream is established.
for(let n of e.C_)t.d_(n.mutations)}async function le(e,t,n){let i=e.C_.shift(),r=aI.from(i,t,n);await o4(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),// slot has freed up.
await o6(e)}async function lt(e,t){// If the write stream closed after the write handshake completes, a write
// operation failed and we fail the pending operation.
t&&ls(e).I_&&// This error affects the actual write.
await async function(e,t){var n;// Only handle permanent errors here. If it's transient, just let the retry
// logic kick in.
if(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */function(e){switch(e){default:return rv();case rw.CANCELLED:case rw.UNKNOWN:case rw.DEADLINE_EXCEEDED:case rw.RESOURCE_EXHAUSTED:case rw.INTERNAL:case rw.UNAVAILABLE:// Unauthenticated means something went wrong with our token and we need
// to retry with new credentials which will happen automatically.
case rw.UNAUTHENTICATED:return!1;case rw.INVALID_ARGUMENT:case rw.NOT_FOUND:case rw.ALREADY_EXISTS:case rw.PERMISSION_DENIED:case rw.FAILED_PRECONDITION:// Aborted might be retried in some scenarios, but that is dependant on
// the context and should handled individually by the calling code.
// See https://cloud.google.com/apis/design/errors.
case rw.ABORTED:case rw.OUT_OF_RANGE:case rw.UNIMPLEMENTED:case rw.DATA_LOSS:return!0}}(n=t.code)&&n!==rw.ABORTED){// This was a permanent error, the request itself was the problem
// so it's not going to succeed if we resend it.
let n=e.C_.shift();// In this case it's also unlikely that the server itself is melting
// down -- this was just a bad request so inhibit backoff on the next
// restart.
ls(e).Xo(),await o4(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),// another slot has freed up.
await o6(e)}}(e,t),// pipeline for failed writes
o5(e)&&o3(e)}async function ln(e,t){e.asyncQueue.verifyOperationInProgress(),rp("RemoteStore","RemoteStore received new credentials");let n=oZ(e);// Tear down and re-create our network streams. This will ensure we get a
// fresh auth token for the new user and re-fill the write pipeline with
// new mutations from the LocalStore (since mutations are per-user).
e.F_.add(3/* OfflineCause.CredentialChange */),await oH(e),n&&// Don't set the network status to Unknown if we are offline.
e.O_.set("Unknown"/* OnlineState.Unknown */),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3/* OfflineCause.CredentialChange */),await oK(e)}/**
 * Toggles the network state when the client gains or loses its primary lease.
 */async function li(e,t){t?(e.F_.delete(2/* OfflineCause.IsSecondary */),await oK(e)):t||(e.F_.add(2/* OfflineCause.IsSecondary */),await oH(e),e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function lr(e){var t,n,i;return e.B_||// Create stream (but note that it is not started yet).
(e.B_=(t=e.datastore,n=e.asyncQueue,i={Io:o0.bind(null,e),Eo:o1.bind(null,e),c_:o2.bind(null,e)},t.V_(),new oB(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,i)),e.M_.push(async t=>{t?(e.B_.Xo(),oJ(e)?oX(e):e.O_.set("Unknown"/* OnlineState.Unknown */)):(await e.B_.stop(),e.N_=void 0)})),e.B_}/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function ls(e){var t,n,i;return e.L_||// Create stream (but note that it is not started yet).
(e.L_=(t=e.datastore,n=e.asyncQueue,i={Io:o7.bind(null,e),Eo:lt.bind(null,e),E_:o8.bind(null,e),T_:le.bind(null,e)},t.V_(),new oj(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,i)),e.M_.push(async t=>{t?(e.L_.Xo(),await o6(e)):(await e.L_.stop(),e.C_.length>0&&(rp("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
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
 */class la{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new rb,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
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
     */static createAndSchedule(e,t,n,i,r){let s=Date.now()+n,a=new la(e,t,s,i,r);return a.start(n),a}/**
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
     */cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rE(rw.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function lo(e,t){if(rm("AsyncQueue",`${t}: ${e}`),rz(e))return new rE(rw.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class ll{/** The default ordering is by key if the comparator is omitted */constructor(e){// We are adding document key comparator to the end as it's the only
// guaranteed unique property of a document.
this.comparator=e?(t,n)=>e(t,n)||rU.comparator(t.key,n.key):(e,t)=>rU.comparator(e.key,t.key),this.keyedMap=s0(),this.sortedSet=new rY(this.comparator)}/**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */static emptySet(e){return new ll(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}/**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}/** Iterates documents in order defined by "comparator" */forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}/** Inserts or updates a document with the same key */add(e){// First remove the element if we have it.
let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}/** Deletes a document with a given key */delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ll)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new ll;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class lh{constructor(){this.k_=new rY(rU.comparator)}track(e){let t=e.doc.key,n=this.k_.get(t);n?0/* ChangeType.Added */!==e.type&&3/* ChangeType.Metadata */===n.type?this.k_=this.k_.insert(t,e):3/* ChangeType.Metadata */===e.type&&1/* ChangeType.Removed */!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2/* ChangeType.Modified */===e.type&&2/* ChangeType.Modified */===n.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):2/* ChangeType.Modified */===e.type&&0/* ChangeType.Added */===n.type?this.k_=this.k_.insert(t,{type:0/* ChangeType.Added */,doc:e.doc}):1/* ChangeType.Removed */===e.type&&0/* ChangeType.Added */===n.type?this.k_=this.k_.remove(t):1/* ChangeType.Removed */===e.type&&2/* ChangeType.Modified */===n.type?this.k_=this.k_.insert(t,{type:1/* ChangeType.Removed */,doc:n.doc}):0/* ChangeType.Added */===e.type&&1/* ChangeType.Removed */===n.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):// Added->Added
// Removed->Removed
// Modified->Added
// Removed->Modified
// Metadata->Added
// Removed->Metadata
rv():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,n)=>{e.push(n)}),e}}class lu{constructor(e,t,n,i,r,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}/** Returns a view snapshot as if all documents in the snapshot were added. */static fromInitialDocuments(e,t,n,i,r){let s=[];return t.forEach(e=>{s.push({type:0/* ChangeType.Added */,doc:e})}),new lu(e,t,ll.emptySet(t),s,n,i,/* syncStateChanged= */!0,/* excludesMetadataChanges= */!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sH(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
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
 */class lc{constructor(){this.Q_=void 0,this.listeners=[]}}class ld{constructor(){this.queries=new sX(e=>sG(e),sH),this.onlineState="Unknown"/* OnlineState.Unknown */,this.K_=new Set}}async function lf(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r||(i=!0,r=new lc),i)try{r.Q_=await e.onListen(n)}catch(n){let e=lo(n,`Initialization of query '${sQ(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,r),r.listeners.push(t),t.U_(e.onlineState),r.Q_&&t.W_(r.Q_)&&ly(e)}async function lp(e,t){let n=t.query,i=!1,r=e.queries.get(n);if(r){let e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),i=0===r.listeners.length)}if(i)return e.queries.delete(n),e.onUnlisten(n)}function lm(e,t){let n=!1;for(let i of t){let t=i.query,r=e.queries.get(t);if(r){for(let e of r.listeners)e.W_(i)&&(n=!0);r.Q_=i}}n&&ly(e)}function lg(e,t,n){let i=e.queries.get(t);if(i)for(let e of i.listeners)e.onError(n);// Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
// after an error.
e.queries.delete(t)}// Call all global snapshot listeners that have been set.
function ly(e){e.K_.forEach(e=>{e.next()})}/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */class lv{constructor(e,t,n){this.query=e,this.G_=t,/**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */this.z_=!1,this.j_=null,this.onlineState="Unknown"/* OnlineState.Unknown */,this.options=n||{}}/**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */W_(e){if(!this.options.includeMetadataChanges){// Remove the metadata only changes.
let t=[];for(let n of e.docChanges)3/* ChangeType.Metadata */!==n.type&&t.push(n);e=new lu(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,/* excludesMetadataChanges= */!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}/** Returns whether a snapshot was raised. */U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return(// Always raise the first event when we're synced
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
 */class lw{constructor(e){this.key=e}}class lE{constructor(e){this.key=e}}/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */class lb{constructor(e,/** Documents included in the remote target */t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,/**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */this.current=!1,/** Documents in the view but not in the remote target */this.aa=s6(),/** Document Keys that have local changes */this.mutatedKeys=s6(),this.ua=sY(e),this.ca=new ll(this.ua)}/**
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
     */ha(e,t){let n=t?t.Pa:new lh,i=t?t.ca:this.ca,r=t?t.mutatedKeys:this.mutatedKeys,s=i,a=!1,o="F"/* LimitType.First */===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"/* LimitType.Last */===this.query.limitType&&i.size===this.query.limit?i.first():null;// Drop documents out to meet limit/limitToLast requirement.
if(e.inorderTraversal((e,t)=>{let h=i.get(e),u=sW(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||// We only consider committed mutations for documents that were
// mutated during the lifetime of the view.
this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(n.track({type:3/* ChangeType.Metadata */,doc:u}),f=!0):this.Ia(h,u)||(n.track({type:2/* ChangeType.Modified */,doc:u}),f=!0,(o&&this.ua(u,o)>0||l&&0>this.ua(u,l))&&// This doc moved from inside the limit to outside the limit.
// That means there may be some other doc in the local cache
// that should be included instead.
(a=!0)):!h&&u?(n.track({type:0/* ChangeType.Added */,doc:u}),f=!0):h&&!u&&(n.track({type:1/* ChangeType.Removed */,doc:h}),f=!0,(o||l)&&// A doc was removed from a full limit query. We'll need to
// requery from the local cache to see if we know about some other
// doc that should be in the results.
(a=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"/* LimitType.First */===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1/* ChangeType.Removed */,doc:e})}return{ca:s,Pa:n,es:a,mutatedKeys:r}}Ia(e,t){// We suppress the initial change event for documents that were modified as
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
applyChanges(e,t,n){let i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;// Sort changes based on type and query comparator
let r=e.Pa.q_();r.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0/* ChangeType.Added */:return 1;case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:// A metadata change is converted to a modified change at the public
    // api layer.  Since we sort by document key and then change type,
    // metadata and modified changes must be sorted equivalently.
    return 2;case 1/* ChangeType.Removed */:return 0;default:return rv()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(n);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1/* SyncState.Synced */:0/* SyncState.Local */,o=a!==this._a;return(this._a=a,0!==r.length||o)?{snapshot:new lu(this.query,e.ca,i,r,e.mutatedKeys,0/* SyncState.Local */===a,o,/* excludesMetadataChanges= */!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}/**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */U_(e){return this.current&&"Offline"/* OnlineState.Offline */===e?// to refresh our syncState and generate a ViewChange as appropriate. We
// are guaranteed to get a new TargetChange that sets `current` back to
// true once the client is back online.
(this.current=!1,this.applyChanges({ca:this.ca,Pa:new lh,mutatedKeys:this.mutatedKeys,es:!1},/* updateLimboDocuments= */!1)):{Ea:[]}}/**
     * Returns whether the doc for the given key should be in limbo.
     */Aa(e){// If the remote end says it's part of this query, it's not in limbo.
return!this.oa.has(e)&&// The local store doesn't think it's a result, so it shouldn't be in limbo.
!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}/**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){// We can only determine limbo documents when we're in-sync with the server.
if(!this.current)return[];// TODO(klimt): Do this incrementally so that it's not quadratic when
// updating many documents.
let e=this.aa;this.aa=s6(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});// Diff the new limbo docs with the old limbo docs.
let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new lE(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new lw(n))}),t}/**
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
Ra(e){this.oa=e.Ps,this.aa=s6();let t=this.ha(e.documents);return this.applyChanges(t,/*updateLimboDocuments=*/!0)}/**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */// PORTING NOTE: Multi-tab only.
Va(){return lu.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0/* SyncState.Local */===this._a,this.hasCachedResults)}}/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */class l_{constructor(/**
     * The query itself.
     */e,/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */t,/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */n){this.query=e,this.targetId=t,this.view=n}}/** Tracks a limbo resolution. */class lT{constructor(e){this.key=e,/**
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
 */class lI{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new sX(e=>sG(e),sH),this.pa=new Map,/**
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
         */this.wa=new rY(rU.comparator),/**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */this.Sa=new Map,this.ba=new oh,/** Stores user completion handlers, indexed by User and BatchId. */this.Da={},/** Stores user callbacks waiting for all pending writes to be acknowledged. */this.Ca=new Map,this.va=oi.Ln(),this.onlineState="Unknown"/* OnlineState.Unknown */,// startup. In the interim, a client should only be considered primary if
// `isPrimary` is true.
this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */async function lC(e,t){var n,i;let r,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=lk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=l$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lL.bind(null,e),e.fa.c_=lm.bind(null,e.eventManager),e.fa.xa=lg.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)// already exists when EventManager calls us for the first time. This
// happens when the primary tab is already listening to this query on
// behalf of another tab and the user of the primary also starts listening
// to the query. EventManager will not have an assigned target ID in this
// case and calls `listen` to obtain this ID.
r=o.targetId,a.sharedClientState.addLocalQueryTarget(r),s=o.view.Va();else{let e=await (n=a.localStore,i=sz(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Kr.getTargetData(e,i).next(r=>r?// previous targetID.
    // TODO(mcg): freshen last accessed date?
    (t=r,rq.resolve(t)):n.Kr.allocateTargetId(e).next(r=>(t=new a3(i,r,"TargetPurposeListen"/* TargetPurpose.Listen */,e.currentSequenceNumber),n.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{// If Multi-Tab is enabled, the existing target data may be newer than
// the in-memory data
let t=n.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.rs=n.rs.insert(e.targetId,e),n.ss.set(i,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await lS(a,t,r,"current"===o,e.resumeToken),a.isPrimaryClient&&oG(a.remoteStore,e)}return s}/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */async function lS(e,t,n,i,r){// PORTING NOTE: On Web only, we inject the code that registers new Limbo
// targets based on view changes. This allows us to only depend on Limbo
// changes when user code includes queries.
e.Ma=(t,n,i)=>(async function(e,t,n,i){let r=t.view.ha(n);r.es&&// The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (r=await oC(e.localStore,t.query,/* usePreviousResults= */!1).then(({documents:e})=>t.view.ha(e,r)));let s=i&&i.targetChanges.get(t.targetId),a=t.view.applyChanges(r,/* updateLimboDocuments= */e.isPrimaryClient,s);return lV(e,t.targetId,a.Ea),a.snapshot})(e,t,n,i);let s=await oC(e.localStore,t,/* usePreviousResults= */!0),a=new lb(t,s.Ps),o=a.ha(s.documents),l=aO.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"/* OnlineState.Offline */!==e.onlineState,r),h=a.applyChanges(o,/* updateLimboDocuments= */e.isPrimaryClient,l);lV(e,n,h.Ea);let u=new l_(t,n,a);return e.ga.set(t,u),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),h.snapshot}/** Stops listening to the query. */async function lA(e,t){let n=e.ga.get(t),i=e.pa.get(n.targetId);if(i.length>1)return e.pa.set(n.targetId,i.filter(e=>!sH(e,t))),void e.ga.delete(t);e.isPrimaryClient?(// We need to remove the local query target first to allow us to verify
// whether any other client is still interested in this target.
e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await oI(e.localStore,n.targetId,/*keepPersistedTargetData=*/!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),oQ(e.remoteStore,n.targetId),lP(e,n.targetId)}).catch(r$)):(lP(e,n.targetId),await oI(e.localStore,n.targetId,/*keepPersistedTargetData=*/!0))}/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */async function lD(e,t,n){var i;let r=(e.remoteStore.remoteSyncer.applySuccessfulWrite=lR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lx.bind(null,e),e);try{let e;let s=await function(e,t){let n,i;let r=rx.now(),s=t.reduce((e,t)=>e.add(t.key),s6());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{// Figure out which keys do not have a remote version in the cache, this
// is needed to create the right overlay mutation: if no remote version
// presents, we do not need to create overlays as patch mutations.
// TODO(Overlay): Is there a better way to determine this? Using the
//  document version does not work because local mutations set them back
//  to 0.
let o=sJ,l=s6();return e._s.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(i=>{n=i;// For non-idempotent mutations (such as `FieldValue.increment()`),
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
 */function(e,t){let n=null;for(let i of e.fieldTransforms){let e=t.data.field(i.field),r=ae(i.transform,e||null);null!=r&&(null===n&&(n=sy.empty()),n.set(i.field,r))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&// NOTE: The base state should only be applied if there's some
// existing document to override, so use a Precondition of
// exists=true
s.push(new ay(e.key,t,/**
 * Returns a FieldMask built from all fields in a MapValue.
 */function e(t){let n=[];return rQ(t.fields,(t,i)=>{let r=new rV([t]);if(sp(i)){let t=e(i.mapValue).fields;if(0===t.length)n.push(r);else // leaf nodes.
for(let e of t)n.push(r.child(e))}else // nodes.
n.push(r)}),new r1(n)}(t.value.mapValue),au.exists(!0)))}return e.mutationQueue.addMutationBatch(a,r,s,t)}).next(t=>{i=t;let r=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,r)})}).then(()=>({batchId:i.batchId,changes:s1(n)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=r.Da[r.currentUser.toKey()])||(e=new rY(rL)),e=e.insert(i,n),r.Da[r.currentUser.toKey()]=e,await lB(r,s.changes),await o6(r.remoteStore)}catch(t){// If we can't persist the mutation, we reject the user callback and
// don't send the mutation. The user can then retry the write.
let e=lo(t,"Failed to persist write");n.reject(e)}}/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */async function lk(e,t){try{let n=await /**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */function(e,t){let n=t.snapshotVersion,i=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{var s;let a,o;let l=e._s.newChangeBuffer({trackRemovals:!0});// Reset newTargetDataByTargetMap in case this transaction gets re-run.
i=e.rs;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=i.get(a);if(!l)return;// Only update the remote keys if the target is still active. This
// ensures that we can persist the updated target data along with
// the updated assignment.
h.push(e.Kr.removeMatchingKeys(r,s.removedDocuments,a).next(()=>e.Kr.addMatchingKeys(r,s.addedDocuments,a)));let u=l.withSequenceNumber(r.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(r9.EMPTY_BYTE_STRING,rO.min()).withLastLimboFreeSnapshotVersion(rO.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,n)),i=i.insert(a,u),o=u,// Always persist target data if we don't already have a resume token.
(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Kr.updateTargetData(r,u))});let u=sJ,c=s6();// HACK: The only reason we allow a null snapshot version is so that we
// can synthesize remote events when we get permission denied errors while
// trying to resolve the state of a locally cached document that is in
// limbo.
if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(r,n))}),// the remote documents in advance in a single call.
h.push((s=t.documentUpdates,a=s6(),o=s6(),s.forEach(e=>a=a.add(e)),l.getEntries(r,a).next(e=>{let t=sJ;return s.forEach((n,i)=>{let r=e.get(n);// Check if see if there is a existence state change for this document.
i.isFoundDocument()!==r.isFoundDocument()&&(o=o.add(n)),// to ensure that rejected limbo resolutions (which fabricate
// NoDocuments with SnapshotVersion.min()) never add documents to
// cache.
i.isNoDocument()&&i.version.isEqual(rO.min())?// events. We remove these documents from cache since we lost
// access.
(l.removeEntry(n,i.readTime),t=t.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(l.addEntry(i),t=t.insert(n,i)):rp("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)}),{ls:t,hs:o}})).next(e=>{u=e.ls,c=e.hs})),!n.isEqual(rO.min())){let t=e.Kr.getLastRemoteSnapshotVersion(r).next(t=>e.Kr.setTargetsMetadata(r,r.currentSequenceNumber,n));h.push(t)}return rq.waitFor(h).next(()=>l.apply(r)).next(()=>e.localDocuments.getLocalViewOfDocuments(r,u,c)).next(()=>u)}).then(t=>(e.rs=i,t))}(e.localStore,t);// Update `receivedDocument` as appropriate for any limbo targets.
t.targetChanges.forEach((t,n)=>{let i=e.Sa.get(n);i&&// Since this is a limbo resolution lookup, it's for a single document
// and it could be added, modified, or removed, but not a combination.
(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||rv(),t.addedDocuments.size>0?i.ma=!0:t.modifiedDocuments.size>0?i.ma||rv():t.removedDocuments.size>0&&(i.ma||rv(),i.ma=!1))}),await lB(e,n,t)}catch(e){await r$(e)}}/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */function lN(e,t,n){var i;// If we are the secondary client, we explicitly ignore the remote store's
// online state (the local client may go offline, even though the primary
// tab remains online) and only apply the primary tab's online state from
// SharedClientState.
if(e.isPrimaryClient&&0/* OnlineStateSource.RemoteStore */===n||!e.isPrimaryClient&&1/* OnlineStateSource.SharedClientState */===n){let n;let r=[];e.ga.forEach((e,n)=>{let i=n.view.U_(t);i.snapshot&&r.push(i.snapshot)}),(i=e.eventManager).onlineState=t,n=!1,i.queries.forEach((e,i)=>{for(let e of i.listeners)e.U_(t)&&(n=!0)}),n&&ly(i),r.length&&e.fa.c_(r),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */async function lL(e,t,n){// PORTING NOTE: Multi-tab only.
e.sharedClientState.updateQueryState(t,"rejected",n);let i=e.Sa.get(t),r=i&&i.key;if(r){// TODO(klimt): We really only should do the following on permission
// denied errors, but we don't have the cause code here.
// It's a limbo doc. Create a synthetic event saying it was deleted.
// This is kind of a hack. Ideally, we would have a method in the local
// store to purge a document. However, it would be tricky to keep all of
// the local store's invariants with another method.
let n=new rY(rU.comparator);// TODO(b/217189216): This limbo document should ideally have a read time,
// so that it is picked up by any read-time based scans. The backend,
// however, does not send a read time for target removals.
n=n.insert(r,sv.newNoDocument(r,rO.min()));let i=s6().add(r),s=new ax(rO.min(),/* targetChanges= */new Map,/* targetMismatches= */new rY(rL),n,i);await lk(e,s),// We only remove it from bookkeeping after we successfully applied the
// RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
// this query when the RemoteStore restarts the Watch stream, which should
// re-trigger the target failure.
e.wa=e.wa.remove(r),e.Sa.delete(t),lU(e)}else await oI(e.localStore,t,/* keepPersistedTargetData */!1).then(()=>lP(e,t,n)).catch(r$)}async function lR(e,t){var n;let i=t.batch.batchId;try{let r=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let i=t.batch.keys(),r=n._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,i){let r=n.batch,s=r.keys(),a=rq.resolve();return s.forEach(e=>{a=a.next(()=>i.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||rv(),0>t.version.compareTo(s)&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&// We use the commitVersion as the readTime rather than the
// document's updateTime since the updateTime is not advanced
// for updates that do not modify the underlying document.
(t.setReadTime(n.commitVersion),i.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,r))})(n,e,t,r).next(()=>r.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=s6();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,i))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught
// up), so we raise user callbacks first so that they consistently happen
// before listen events.
lM(e,i,/*error=*/null),lO(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await lB(e,r)}catch(e){await r$(e)}}async function lx(e,t,n){var i;try{let r=await (i=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return i.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||rv(),n=t.keys(),i.mutationQueue.removeMutationBatch(e,t))).next(()=>i.mutationQueue.performConsistencyCheck(e)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>i.localDocuments.getDocuments(e,n))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught up),
// so we raise user callbacks first so that they consistently happen before
// listen events.
lM(e,t,n),lO(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await lB(e,r)}catch(e){await r$(e)}}/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */function lO(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}/** Reject all outstanding callbacks waiting for pending writes to complete. */function lM(e,t,n){let i=e.Da[e.currentUser.toKey()];// NOTE: Mutations restored from persistence won't have callbacks, so it's
// okay for there to be no callback for this ID.
if(i){let r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),e.Da[e.currentUser.toKey()]=i}}function lP(e,t,n=null){for(let i of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(i),n&&e.fa.xa(i,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||// We removed the last reference for this key
lF(e,t)})}function lF(e,t){e.ya.delete(t.path.canonicalString());// It's possible that the target already got removed because the query failed. In that case,
// the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
let n=e.wa.get(t);null!==n&&(oQ(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),lU(e))}function lV(e,t,n){for(let i of n)i instanceof lw?(e.ba.addReference(i.key,t),function(e,t){let n=t.key,i=n.path.canonicalString();e.wa.get(n)||e.ya.has(i)||(rp("SyncEngine","New document in limbo: "+n),e.ya.add(i),lU(e))}(e,i)):i instanceof lE?(rp("SyncEngine","Document no longer in limbo: "+i.key),e.ba.removeReference(i.key,t),e.ba.containsKey(i.key)||// We removed the last reference for this key
lF(e,i.key)):rv()}/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */function lU(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t;let n=e.ya.values().next().value;e.ya.delete(n);let i=new rU(rP.fromString(n)),r=e.va.next();e.Sa.set(r,new lT(i)),e.wa=e.wa.insert(i,r),oG(e.remoteStore,new a3(sz((t=i.path,new sj(t))),r,"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */,rK.ae))}}async function lB(e,t,n){let i=[],r=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{// Update views if there are actual changes.
if(// secondary clients to update query state.
(t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);let e=ov.$i(o.targetId,t);r.push(e)}}))}),await Promise.all(s),e.fa.c_(i),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rq.forEach(t,t=>rq.forEach(t.Qi,i=>e.persistence.referenceDelegate.addReference(n,t.targetId,i)).next(()=>rq.forEach(t.Ki,i=>e.persistence.referenceDelegate.removeReference(n,t.targetId,i)))))}catch(e){if(!rz(e))throw e;// If `notifyLocalViewChanges` fails, we did not advance the sequence
// number for the documents that were included in this transaction.
// This might trigger them to be deleted earlier than they otherwise
// would have, but it should not invalidate the integrity of the data.
rp("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.rs.get(t),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);// Advance the last limbo free snapshot version
e.rs=e.rs.insert(t,r)}}}(e.localStore,r))}async function lj(e,t){if(!e.currentUser.isEqual(t)){rp("SyncEngine","User change. New user:",t.toKey());let n=await o_(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new rE(rw.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await lB(e,n.cs)}}function l$(e,t){let n=e.Sa.get(t);if(n&&n.ma)return s6().add(n.key);{let n=s6(),i=e.pa.get(t);if(!i)return n;for(let t of i){let i=e.ga.get(t);n=n.unionWith(i.view.la)}return n}}class lq{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oF(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var /** Manages our in-memory or durable persistence. */t,n,i,r;return t=this.persistence,n=new oE,i=e.initialUser,r=this.serializer,new ob(t,n,i,r)}createPersistence(e){return new om(oy.Jr,this.serializer)}createSharedClientState(e){return new oA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */class lz{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,/* startAsPrimary=*/!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lN(this.syncEngine,e,1/* OnlineStateSource.SharedClientState */),this.remoteStore.remoteSyncer.handleCredentialChange=lj.bind(null,this.syncEngine),await li(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ld}createDatastore(e){var t,n,i;let r=oF(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new oM(t));return n=e.authCredentials,i=e.appCheckCredentials,new o$(n,i,s,r)}createRemoteStore(e){var t,n,i,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=ok.C()?new ok:new oD,new oz(t,n,i,e=>lN(this.syncEngine,e,0/* OnlineStateSource.RemoteStore */),r)}createSyncEngine(e,t){return function(e,t,n,i,r,s,a){let o=new lI(e,t,n,i,r,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){rp("RemoteStore","RemoteStore shutting down."),e.F_.add(5/* OfflineCause.Shutdown */),await oH(e),e.x_.shutdown(),// triggering spurious listener events with cached data, etc.
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
 */class lK{constructor(e){this.observer=e,/**
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
 */class lH{constructor(e,t,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ru.UNAUTHENTICATED,this.clientId=rN.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{rp("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(rp("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rE(rw.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new rb;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=lo(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function lG(e,t){e.asyncQueue.verifyOperationInProgress(),rp("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async e=>{i.isEqual(e)||(await o_(t.localStore,e),i=e)}),// need to be terminated to allow the delete to succeed.
t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function lQ(e,t){e.asyncQueue.verifyOperationInProgress();let n=await lW(e);rp("FirestoreClient","Initializing OnlineComponentProvider");let i=await e.getConfiguration();await t.initialize(n,i),// precedence over the offline component provider.
e.setCredentialChangeListener(e=>ln(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ln(t.remoteStore,n)),e._onlineComponents=t}async function lW(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){rp("FirestoreClient","Using user provided OfflineComponentProvider");try{await lG(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===rw.FAILED_PRECONDITION||t.code===rw.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||// When the browser is out of quota we could get either quota exceeded
// or an aborted error depending on whether the error happened during
// schema migration.
22===t.code||20===t.code||// Firefox Private Browsing mode disables IndexedDb and returns
// INVALID_STATE for any usage.
11===t.code))throw t;rg("Error using user provided cache. Falling back to memory cache: "+t),await lG(e,new lq)}}else rp("FirestoreClient","Using default OfflineComponentProvider"),await lG(e,new lq)}return e._offlineComponents}async function lY(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(rp("FirestoreClient","Using user provided OnlineComponentProvider"),await lQ(e,e._uninitializedComponentsProvider._online)):(rp("FirestoreClient","Using default OnlineComponentProvider"),await lQ(e,new lz))),e._onlineComponents}async function lX(e){let t=await lY(e),n=t.eventManager;return n.onListen=lC.bind(null,t.syncEngine),n.onUnlisten=lA.bind(null,t.syncEngine),n}/**
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
 */function lJ(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const lZ=new Map;/**
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
 */function l0(e,t,n){if(!n)throw new rE(rw.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */function l1(e){if(!rU.isDocumentKey(e))throw new rE(rw.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */function l2(e){if(rU.isDocumentKey(e))throw new rE(rw.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function l9(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":rv()}function l4(e,t){if("_delegate"in e&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new rE(rw.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=l9(e);throw new rE(rw.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class l6{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new rE(rw.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new rE(rw.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(e,t,n,i){if(!0===t&&!0===i)throw new rE(rw.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lJ(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new rE(rw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new rE(rw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new rE(rw.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class l5{/** @hideconstructor */constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new l6({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new rE(rw.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new rE(rw.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new l6(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new rT;switch(e.type){case"firstParty":return new rA(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new rE(rw.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(e){let t=lZ.get(e);t&&(rp("ComponentProvider","Removing Datastore"),lZ.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class l3{// This is the lite version of the Query class in the main SDK.
/** @hideconstructor protected */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,n){this.converter=t,this._query=n,/** The type of this Firestore reference. */this.type="query",this.firestore=e}withConverter(e){return new l3(this.firestore,e,this._query)}}/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */class l7{/** @hideconstructor */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,n){this.converter=t,this._key=n,/** The type of this Firestore reference. */this.type="document",this.firestore=e}get _path(){return this._key.path}/**
     * The document's identifier within its collection.
     */get id(){return this._key.path.lastSegment()}/**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */get path(){return this._key.path.canonicalString()}/**
     * The collection this `DocumentReference` belongs to.
     */get parent(){return new l8(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new l7(this.firestore,e,this._key)}}/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */class l8 extends l3{/** @hideconstructor */constructor(e,t,n){super(e,t,new sj(n)),this._path=n,/** The type of this Firestore reference. */this.type="collection"}/** The collection's identifier. */get id(){return this._query.path.lastSegment()}/**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */get path(){return this._query.path.canonicalString()}/**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */get parent(){let e=this._path.popLast();return e.isEmpty()?null:new l7(this.firestore,/* converter= */null,new rU(e))}withConverter(e){return new l8(this.firestore,e,this._path)}}function he(e,t,...n){if(e=z(e),// 'undefined' and 'null'.
1==arguments.length&&(t=rN.V()),l0("doc","path",t),e instanceof l5){let i=rP.fromString(t,...n);return l1(i),new l7(e,/* converter= */null,new rU(i))}{if(!(e instanceof l7||e instanceof l8))throw new rE(rw.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(rP.fromString(t,...n));return l1(i),new l7(e.firestore,e instanceof l8?e.converter:null,new rU(i))}}/**
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
 */class ht{constructor(){// The last promise in the queue.
this.Za=Promise.resolve(),// retried with backoff.
this.Xa=[],// be changed again.
this.eu=!1,// automatically removed after they are run or canceled.
this.tu=[],this.nu=null,// assertion sanity-checks.
this.ru=!1,this.iu=!1,this.su=[],this.Ho=new oV(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.ou=()=>{let e=oP();e&&rp("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=oP();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(e){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=oP();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let t=new rb;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!rz(e))throw e;// Failure will be handled by AsyncQueue
rp("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let n=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw rm("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,n){this._u(),this.su.indexOf(e)>-1&&(t=0);let i=la.createAndSchedule(this,e,t,n,e=>this.cu(e));return this.tu.push(i),i}_u(){this.nu&&rv()}verifyOperationInProgress(){}/**
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
 */class hn extends l5{/** @hideconstructor */constructor(e,t,n,i){super(e,t,n,i),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new ht,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
hr(this),this._firestoreClient.terminate()}}/**
 * @internal
 */function hi(e){return e._firestoreClient||hr(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function hr(e){var t,n,i,r,s,a;let o=e._freezeSettings(),l=(r=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new st(r,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,lJ(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new lH(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=o.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
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
 */class hs{/** @hideconstructor */constructor(e){this._byteString=e}/**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */static fromBase64String(e){try{return new hs(r9.fromBase64String(e))}catch(e){throw new rE(rw.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}/**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */static fromUint8Array(e){return new hs(r9.fromUint8Array(e))}/**
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
 */class ha{/**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new rE(rw.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rV(e)}/**
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
 */class ho{/**
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
 */class hl{/**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new rE(rw.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new rE(rw.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}/**
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
     */_compareTo(e){return rL(this._lat,e._lat)||rL(this._long,e._long)}}/**
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
 */const hh=/^__.*__$/;/** The result of parsing document data (e.g. for a setData call). */class hu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ay(e,this.data,this.fieldMask,t,this.fieldTransforms):new ag(e,this.data,t,this.fieldTransforms)}}/** The result of parsing "update" data (i.e. for an updateData call). */class hc{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ay(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hd(e){switch(e){case 0/* UserDataSource.Set */:// fall through
case 2/* UserDataSource.MergeSet */:// fall through
case 1/* UserDataSource.Update */:return!0;case 3/* UserDataSource.Argument */:case 4/* UserDataSource.ArrayArgument */:return!1;default:throw rv()}}/** A "context" object passed around while parsing user data. */class hf{/**
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
     */constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,// external call and we need to validate the entire path.
void 0===r&&this.du(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}/** Returns a new context with the specified settings overwritten. */Eu(e){return new hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Eu({path:n,Ru:!1});return i.Vu(e),i}mu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Eu({path:n,Ru:!1});return i.du(),i}fu(e){// TODO(b/34871131): We don't support array paths right now; so make path
// undefined.
return this.Eu({path:void 0,Ru:!0})}gu(e){return hI(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}/** Returns 'true' if 'fieldPath' was traversed when creating this context. */contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){// TODO(b/34871131): Remove null check once we have proper paths for fields
// within arrays.
if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(hd(this.Tu)&&hh.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */class hp{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||oF(e)}/** Creates a new top-level parse context. */wu(e,t,n,i=!1){return new hf({Tu:e,methodName:t,yu:n,path:rV.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hm(e){let t=e._freezeSettings(),n=oF(e._databaseId);return new hp(e._databaseId,!!t.ignoreUndefinedProperties,n)}class hg extends ho{_toFieldTransform(e){if(2/* UserDataSource.MergeSet */!==e.Tu)throw 1/* UserDataSource.Update */===e.Tu?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);// No transform to add for a delete, but we need to add it to our
// fieldMask so it gets deleted.
return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hg}}/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */function hy(e,t){if(hw(// from firestore-exp.
e=z(e)))return hE("Unsupported field value:",t,e),hv(e,t);if(e instanceof ho)// in which case we do not want to include this field in our parsed data
// (as doing so will overwrite the field directly prior to the transform
// trying to transform it). So we don't add this location to
// context.fieldMask and we return null as our parsing result.
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */return function(e,t){// Sentinels are only supported with writes, and not within arrays.
if(!hd(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)// don't handle this below. If `ignoreUndefinedProperties` is false,
// `parseScalarValue` will reject an undefined value.
return null;if(// field mask paths more granular than the top-level array.
t.path&&t.fieldMask.push(t.path),e instanceof Array){// TODO(b/34871131): Include the path containing the array in the error
// message.
// In the case of IN queries, the parsed data is an array (representing
// the set of values to be included for the IN query) that may directly
// contain additional arrays (each representing an individual field
// value), so we disable this validation.
if(t.settings.Ru&&4/* UserDataSource.ArrayArgument */!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){let n=[],i=0;for(let r of e){let e=hy(r,t.fu(i));null==e&&// Just include nulls in the array for fields being replaced with a
// sentinel.
(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=z(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,i,r;return n=t.serializer,"number"==typeof(r=i=e)&&Number.isInteger(r)&&!rH(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER?s7(i):s3(n,i)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=rx.fromDate(e);return{timestampValue:aG(t.serializer,n)}}if(e instanceof rx){// Firestore backend truncates precision down to microseconds. To ensure
// offline mode works the same with regards to truncation, perform the
// truncation immediately without waiting for the backend to do that.
let n=new rx(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:aG(t.serializer,n)}}if(e instanceof hl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hs)return{bytesValue:aQ(t.serializer,e._byteString)};if(e instanceof l7){let n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.gu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:aY(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${l9(e)}`)}(e,t)}function hv(e,t){let n={};return rW(e)?// mask to ensure that the server creates a map entry.
t.path&&t.path.length>0&&t.fieldMask.push(t.path):rQ(e,(e,i)=>{let r=hy(i,t.Au(e));null!=r&&(n[e]=r)}),{mapValue:{fields:n}}}function hw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rx||e instanceof hl||e instanceof hs||e instanceof l7||e instanceof ho)}function hE(e,t,n){if(!hw(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=l9(n);throw"an object"===i?t.gu(e+" a custom object"):t.gu(e+" "+i)}}/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */function hb(e,t,n){if(// FieldPath.
(t=z(t))instanceof ha)return t._internalPath;if("string"==typeof t)return hT(e,t);throw hI("Field path arguments must be of type string or ",e,/* hasConverter= */!1,/* path= */void 0,n)}/**
 * Matches any characters in a field path string that are reserved.
 */const h_=RegExp("[~\\*/\\[\\]]");/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */function hT(e,t,n){if(t.search(h_)>=0)throw hI(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,/* hasConverter= */!1,/* path= */void 0,n);try{return new ha(...t.split("."))._internalPath}catch(i){throw hI(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,/* hasConverter= */!1,/* path= */void 0,n)}}function hI(e,t,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new rE(rw.INVALID_ARGUMENT,o+e+l)}/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */function hC(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class hS{// Note: This class is stripped down version of the DocumentSnapshot in
// the legacy SDK. The changes are:
// - No support for SnapshotMetadata.
// - No support for SnapshotOptions.
/** @hideconstructor protected */constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}/** Property of the `DocumentSnapshot` that provides the document's ID. */get id(){return this._key.path.lastSegment()}/**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */get ref(){return new l7(this._firestore,this._converter,this._key)}/**
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
let e=new hA(this._firestore,this._userDataWriter,this._key,this._document,/* converter= */null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e){if(this._document){let t=this._document.data.field(hD("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class hA extends hS{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */data(){return super.data()}}/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */function hD(e,t){return"string"==typeof t?hT(e,t):t instanceof ha?t._internalPath:t._delegate._internalPath}class hk{convertValue(e,t="none"){switch(sr(e)){case 0/* TypeOrder.NullValue */:return null;case 1/* TypeOrder.BooleanValue */:return e.booleanValue;case 2/* TypeOrder.NumberValue */:return r5(e.integerValue||e.doubleValue);case 3/* TypeOrder.TimestampValue */:return this.convertTimestamp(e.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return this.convertServerTimestamp(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue;case 6/* TypeOrder.BlobValue */:return this.convertBytes(r3(e.bytesValue));case 7/* TypeOrder.RefValue */:return this.convertReference(e.referenceValue);case 8/* TypeOrder.GeoPointValue */:return this.convertGeoPoint(e.geoPointValue);case 9/* TypeOrder.ArrayValue */:return this.convertArray(e.arrayValue,t);case 10/* TypeOrder.ObjectValue */:return this.convertObject(e.mapValue,t);default:throw rv()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}/**
     * @internal
     */convertObjectMap(e,t="none"){let n={};return rQ(e,(e,i)=>{n[e]=this.convertValue(i,t)}),n}convertGeoPoint(e){return new hl(r5(e.latitude),r5(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=r8(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(se(e));default:return null}}convertTimestamp(e){let t=r6(e);return new rx(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=rP.fromString(e);a5(n)||rv();let i=new sn(n.get(1),n.get(3)),r=new rU(n.popFirst(5));return i.isEqual(t)||// TODO(b/64130202): Somehow support foreign references.
rm(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class hN{/** @hideconstructor */constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}/**
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
 */class hL extends hS{/** @hideconstructor protected */constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}/**
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
let t=new hR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,/* converter= */null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}/**
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
get(e,t={}){if(this._document){let n=this._document.data.field(hD("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class hR extends hL{/**
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
 */class hx{/** @hideconstructor */constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new hN(i.hasPendingWrites,i.fromCache),this.query=n}/** An array of all the documents in the `QuerySnapshot`. */get docs(){let e=[];return this.forEach(t=>e.push(t)),e}/** The number of documents in the `QuerySnapshot`. */get size(){return this._snapshot.docs.size}/** True if there are no documents in the `QuerySnapshot`. */get empty(){return 0===this.size}/**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new hR(this._firestore,this._userDataWriter,n.key,n,new hN(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}/**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new rE(rw.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=/** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let i=new hR(e._firestore,e._userDataWriter,n.doc.key,n.doc,new hN(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}})}{// A `DocumentSet` that is updated incrementally as changes are applied to use
// to lookup the index of a document.
let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3/* ChangeType.Metadata */!==e.type).map(t=>{let i=new hR(e._firestore,e._userDataWriter,t.doc.key,t.doc,new hN(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),r=-1,s=-1;return 0/* ChangeType.Added */!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1/* ChangeType.Removed */!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0/* ChangeType.Added */:return"added";case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:return"modified";case 1/* ChangeType.Removed */:return"removed";default:return rv()}}(t.type),doc:i,oldIndex:r,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class hO extends hk{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new l7(this.firestore,/* converter= */null,t)}}/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */function hM(e,t){return function(e,t){let n=new rb;return e.asyncQueue.enqueueAndForget(async()=>lD(await lY(e).then(e=>e.syncEngine),t,n)),n.promise}(hi(e),t)}new WeakMap,function(e=!0){rc="10.3.1",e_(new K("firestore",(t,{instanceIdentifier:n,options:i})=>{let r=t.getProvider("app").getImmediate(),s=new hn(new rC(t.getProvider("auth-internal")),new rk(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new rE(rw.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),eS(rh,"4.1.3",void 0),eS(rh,"4.1.3","esm2017")}();const hP=["usersData","customersData","cartsData","ordersData","orderItemsData","productItems"],hF=eC({apiKey:"AIzaSyAaafzn29XLZBor7sXmsi3PMDsg_cxcakk",authDomain:"ecommerce-c2b5f.firebaseapp.com",projectId:"ecommerce-c2b5f",storageBucket:"ecommerce-c2b5f.appspot.com",messagingSenderId:"267989030227",appId:"1:267989030227:web:28088cbcc5c292d8eebda6"}),hV=function(e,t){let n="object"==typeof e?e:/**
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
 */function(e=ev){let t=eE.get(e);if(!t&&e===ev&&F())return eC();if(!t)throw eT.create("no-app"/* AppError.NO_APP */,{appName:e});return t}(),i=/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */(function(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)})(n,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!i._initialized){let e=P("firestore");e&&/**
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
 */function(e,t,n,i={}){var r;let s=(e=l4(e,l5))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&rg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=ru.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
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
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[k(JSON.stringify({alg:"none",type:"JWT"})),k(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new rE(rw.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ru(s)}e._authCredentials=new rI(new r_(t,n))}}(i,...e)}return i}(hF);class hU{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, AdminFirebase is connected!")};get=async e=>{let t=await /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */function(e){e=l4(e,l3);let t=l4(e.firestore,hn),n=hi(t),i=new hO(t);return(/**
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
 */function(e){if("L"/* LimitType.Last */===e.limitType&&0===e.explicitOrderBy.length)throw new rE(rw.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,n={}){let i=new rb;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,i,r){let s=new lK({next:n=>{// Remove query first before passing event to user to avoid
    // user actions affecting the now stale query.
    t.enqueueAndForget(()=>lp(e,a)),n.fromCache&&"server"===i.source?r.reject(new rE(rw.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),a=new lv(n,s,{includeMetadataChanges:!0,Z_:!0});return lf(e,a)})(await lX(e),e.asyncQueue,t,n,i)),i.promise})(n,e._query).then(n=>new hx(t,i,e,n)))}(function(e,t,...n){if(e=z(e),l0("collection","path",t),e instanceof l5){let i=rP.fromString(t,...n);return l2(i),new l8(e,/* converter= */null,i)}{if(!(e instanceof l7||e instanceof l8))throw new rE(rw.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=e._path.child(rP.fromString(t,...n));return l2(i),new l8(e.firestore,/* converter= */null,i)}}(hV,e)),n=[];// console.log(newCollection);
return t.forEach(e=>{// console.log(`docId: "${doc.id}"`);
let t={};t.docId=e.id;let i=e.data();for(let e in i)t[e]=i[e];n.push(t)}),n};addDocToFirestore=async(e,t)=>{try{let n=he(hV,e,t.docId);await function(e,t,n){var i;e=l4(e,l7);let r=l4(e.firestore,hn),s=(i=e.converter)?n&&(n.merge||n.mergeFields)?i.toFirestore(t,n):i.toFirestore(t):t;return hM(r,[/** Parse document data from a set() call. */(function(e,t,n,i,r,s={}){let a,o;let l=e.wu(s.merge||s.mergeFields?2/* UserDataSource.MergeSet */:0/* UserDataSource.Set */,t,n,r);hE("Data must be an object, but it was:",l,i);let h=hv(i,l);if(s.merge)a=new r1(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let i of s.mergeFields){let r=hb(t,i,n);if(!l.contains(r))throw new rE(rw.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);hC(e,r)||e.push(r)}a=new r1(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new hu(new sy(h),a,o)})(hm(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,au.none())])}(n,t),console.log("Item/document succesfully added with docId: ",t.docId)}catch(e){console.error("Error adding document: ",e)}};updateDocInFirestore=async(e,t)=>{try{let n=he(hV,e,t.docId);await function(e,t,n,...i){e=l4(e,l7);let r=l4(e.firestore,hn),s=hm(r);return hM(r,[("string"==typeof// performing validation.
(t=z(t))||t instanceof ha?/** Parse update data from a list of field/value arguments. */function(e,t,n,i,r,s){let a=e.wu(1/* UserDataSource.Update */,t,n),o=[hb(t,i,n)],l=[r];if(s.length%2!=0)throw new rE(rw.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(hb(t,s[e])),l.push(s[e+1]);let h=[],u=sy.empty();// We iterate in reverse order to pick the last value for a field if the
// user specified the field multiple times.
for(let e=o.length-1;e>=0;--e)if(!hC(h,o[e])){let t=o[e],n=l[e];// For Compat types, we have to "extract" the underlying types before
// performing validation.
n=z(n);let i=a.mu(t);if(n instanceof hg)h.push(t);else{let e=hy(n,i);null!=e&&(h.push(t),u.set(t,e))}}let c=new r1(h);return new hc(u,c,a.fieldTransforms)}(s,"updateDoc",e._key,t,void 0,i):/** Parse update data from an update() call. */function(e,t,n,i){let r=e.wu(1/* UserDataSource.Update */,t,n);hE("Data must be an object, but it was:",r,i);let s=[],a=sy.empty();rQ(i,(e,i)=>{let o=hT(t,e,n);// For Compat types, we have to "extract" the underlying types before
// performing validation.
i=z(i);let l=r.mu(o);if(i instanceof hg)s.push(o);else{let e=hy(i,l);null!=e&&(s.push(o),a.set(o,e))}});let o=new r1(s);return new hc(a,o,r.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,au.exists(!0))])}(n,t),console.log("Item/document succesfully updated in Firestore, docId: ",t.docId)}catch(e){console.error("Error updating document in Firestore: ",e)}};deleteDocFromFirestore=async(e,t)=>{try{var n;await (n=he(hV,e,t),hM(l4(n.firestore,hn),[new ab(n._key,au.none())]))}catch(e){console.error("Error deleting document: ",e)}}}const hB="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var hj={randomUUID:hB};const h$=new Uint8Array(16),hq=[];for(let e=0;e<256;++e)hq.push((e+256).toString(16).slice(1));var hz=function(e,t,i){if(hj.randomUUID&&!t&&!e)return hj.randomUUID();e=e||{};let r=e.random||(e.rng||function(){// lazy load so that environments that need to polyfill have a chance to do so
if(!n&&!// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(h$)})();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){i=i||0;for(let e=0;e<16;++e)t[i+e]=r[e];return t}return function(e,t=0){// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
return hq[e[t+0]]+hq[e[t+1]]+hq[e[t+2]]+hq[e[t+3]]+"-"+hq[e[t+4]]+hq[e[t+5]]+"-"+hq[e[t+6]]+hq[e[t+7]]+"-"+hq[e[t+8]]+hq[e[t+9]]+"-"+hq[e[t+10]]+hq[e[t+11]]+hq[e[t+12]]+hq[e[t+13]]+hq[e[t+14]]+hq[e[t+15]]}(r)};let hK={usersData:[{docId:"55EGDL6GNBL2",userPhone:"+1 898 9289289",userActive:!0,userAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",transId:"jkjur-tewvn-00001",custId:"c001",userAdmin:!0,userEmail:"matt.y@aerosupplyplus.aero",userName:"Mattew Yampolski",id:"1001",transDate:"20230815"},{docId:"76OFRV7ULWVW",custId:"c001",transDate:"20230815",userAdmin:!0,transId:"jkjur-tewvn-00001",userActive:!0,userAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",userPhone:"+1 898 9289289",userName:"Mattew Yampolski",id:"1001",userEmail:"matt.y@aerosupplyplus.aero"}],customersData:[{docId:"2X9D9SC4VWA1",custOrders:["100001","100002","100003"],custPaymentTerms:["wire","card","net30"],custLegalName:"AeroSupplyPlus LLC",custAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custHandlingFee:.015,custActive:!0,custPhone:"+1 898 9289289",custKycDate:"20230812",custCode:"aespl",transDate:"20230812",custContactId:"1001",transId:"jkjur-tewvn-00002",id:"c001",custKycChecked:!0,custEmail:"supply@aerosupplyplus.aero",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custPaymentMethod:"card"}],cartsData:[{docId:"M1EADW9GPWLS",qty:2,itemId:"0032-0001-000",id:"1001"}],ordersData:[{docId:"9UG3WA03ALRD",transDate:"20230828",id:"100003",orderDateCompleted:"20230829",orderCurrency:"$",transId:"jkjur-tewvn-00013",orderCustId:"c001",orderPaymentDone:"20230828",orderPaymentMethod:"card",orderPriceTotal:1375360,orderPaymentDeadline:"20230829",orderDatePlaced:"20230828",orderPriceHandling:378,orderDateReady:"20230828",orderPriceItems:1374982,orderUserId:"1001"}],orderItemsData:[{docId:"6OIZH5BEOT1N",orderId:"100001",itemId:"0032-0001-000",qty:2,id:"100001"}],productItems:[{docId:"4JNHU091B3U4",itemQty:"50",itemPN:"BS30-737NG-3254",itemSN:"various",itemCat:"component",itemCertification:"EASA, FAA, CAAC",transDate:"20230812",itemPrice:"18130",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",itemCondition:"New",id:"0032-0001-000",itemImg:"",itemCurrency:"$",itemLeadTime:"on stock",transId:"jkjur-tewvn-00003",itemName:"Wheel Main Assy"},{docId:"DIF5CWS50TES",itemCurrency:"$",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",itemCat:"component",id:"0032-0001-000",itemCertification:"EASA, FAA, CAAC",itemPrice:"18130",itemPN:"BS30-737NG-3254",itemImg:"",itemCondition:"New",itemQty:"50",itemName:"Wheel Main Assy",transId:"jkjur-tewvn-00003",itemLeadTime:"on stock",itemSN:"various",transDate:"20230812"},{docId:"QLKOPTEJJMBX",itemName:"Wheel Main Assy",itemCertification:"EASA, FAA, CAAC",itemQty:"50",itemSN:"various",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",itemPrice:"18130",transDate:"20230812",itemCat:"component",itemCondition:"New",id:"0032-0001-000",itemCurrency:"$",transId:"jkjur-tewvn-00003",itemLeadTime:"on stock",itemPN:"BS30-737NG-3254",itemImg:""}]},hH=!1,hG={};const hQ=new class{constructor(){this.adminView=new u,this.adminModel=new c,this.adminFirebase=new hU}initializeAppMain=async()=>{for(let e of(console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.adminView.checkModuleLinkage(),this.adminModel.checkModuleLinkage(),this.adminFirebase.checkModuleLinkage(),console.log("Action: Import from Firestore to dataInstance:"),hP))hG[e]=await this.adminFirebase.get(e);this.displayDataInstanceTables(),this.adminView.renderMenu(hP),this.attachEventListeners()};generateUniqueId(){return hz()}// NOTE: isBackup - a backupInstancevalidator:
// 0 - dataInstance
// 1 - backupInstance
displayDataInstanceTables=()=>{for(let e of(this.adminView.clearContainerLeft(),hP))this.adminView.renderTable(hG[e],e,0)};displayBackupAndInstanceTables=()=>{for(let e of(this.adminView.clearContainerLeft(),hP))this.adminView.renderTable(hK[e],e,1),this.adminView.renderTable(hG[e],e,0)};// Functions to split elemnt ID (${isBackup}_${arrayName}_${doc.docId}_${key})
// Get Collection (array name) - [0]-th element
getInstanceFromId=e=>e.split("_")[0];// Get Collection (array name) - [0]-th element
getCollectionFromId=e=>e.split("_")[1];// Get Document ID (object) - [1]-st element
getDocFromId=e=>e.split("_")[2];// Get Field (key name) - [2]-nd element
getKeyFromId=e=>e.split("_")[3];// Add duplicate document (element/object)
cloneDocument(e,t){// Find the object by ID
let n=e.find(e=>e.docId===t);if(!n){console.log("Object with provided ID is not located.");return}//  Clone object
let i=JSON.parse(JSON.stringify(n));// return cloned objc
return(// Modify / create unique ID
// clonedObject.docId = this.adminModel.generateNewId(12);
i.docId=this.generateUniqueId(),i)}handleAddBtnClick=e=>{let t=this.getInstanceFromId(e.id),n=this.getCollectionFromId(e.id),i=this.getDocFromId(e.id);console.log(`Request to clone element in ${n}, docId: ${i}.`);let r=[],s=[];"1"===t?(r=hK[n],s=hG[n]):r=hG[n];let a=this.cloneDocument(r,i);console.log("clonedObject: ",a),"1"===t&&s.push(a),console.log(`trying to include clonedObject: ${a} into Collection ${n}`),// try to add new doc (clonedObject) to Firestore (elementCollection):
this.adminFirebase.addDocToFirestore(n,a),r.push(a),hH?this.displayBackupAndInstanceTables():this.displayDataInstanceTables()};handleUpdateBtnClick=e=>{let t=this.getInstanceFromId(e.id),n=this.getCollectionFromId(e.id),i=this.getDocFromId(e.id);console.log(`Request to update element in ${n}, docId: ${i}.`);let r=[];r="1"===t?hK[n]:hG[n];// Locate the object/document to update:
let s=r.find(e=>e.docId===i);if(!s){console.log("Not found element/document with docId = ",i);return}// Locate table row with clicked button
let a=e.closest("tr"),o=a.querySelectorAll("td");// Locate all input fields
o.forEach(e=>{let t=e.querySelector("input");if(t){let e=this.getKeyFromId(t.id),n=t.value;s[e]=n}}),console.log("docToUpdate: ",s),"0"===t&&(console.log(`trying to update element/doc with docId: ${i} in Collection ${n}`),// try to update doc with elementId (docId) in Firestore collection:
this.adminFirebase.updateDocInFirestore(n,s)),hH?this.displayBackupAndInstanceTables():this.displayDataInstanceTables()};handleDeleteBtnClick=e=>{let t=this.getInstanceFromId(e.id),n=this.getCollectionFromId(e.id),i=this.getDocFromId(e.id),r=[];console.log(`Request to delete element in ${n}, docId: ${i}.`),"1"===t?r=hK[n]:(r=hG[n],// If not a backupInstance, remove document from Firestore:
console.log(`trying to delete element/doc with docId: ${i} from Collection ${n}`),// try to delete doc with elementId (docId) from Firestore collection:
this.adminFirebase.deleteDocFromFirestore(n,i));// Remove element/doc from affected array/collection using .splice() method
let s=r.findIndex(e=>e.docId===i);-1!==s?(r.splice(s,1),console.log("Deleted element/document with docId = ",i)):console.log("Not found element/document with docId = ",i),hH?this.displayBackupAndInstanceTables():this.displayDataInstanceTables()};handleButtonsClick=e=>{let t=e.target;t.classList.contains("add-btn")&&this.handleAddBtnClick(t),t.classList.contains("updt-btn")&&this.handleUpdateBtnClick(t),t.classList.contains("del-btn")&&this.handleDeleteBtnClick(t)};attachEventListeners(){this.adminView.containerLeftNode.addEventListener("click",this.handleButtonsClick),this.adminView.backupBtnNode.addEventListener("click",async()=>{console.log("call backupData function"),// // FUNCTIONS: SUPPORT AND TBS
function(e){// convert array to JSON format
let t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(n),r=Date.now(),s=document.createElement("a");s.href=i,s.download=`backup-${r}.json`,// display backup file name
console.log(`data saved to file 'backup-${r}.json'`),// Trigger the download
document.body.appendChild(s),s.click(),// clean up
window.URL.revokeObjectURL(i),document.body.removeChild(s)}(hG)}),this.adminView.getLocalBtnNode.addEventListener("click",async()=>{console.log("Action called: render backup and server data tables."),this.displayBackupAndInstanceTables(),hH=!0}),this.adminView.getServerBtnNode.addEventListener("click",async()=>{console.log("Action called: render server data tables."),this.displayDataInstanceTables(),hH=!1})}};try{hQ.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=admin.be8edf76.js.map

//# sourceMappingURL=admin.be8edf76.js.map
