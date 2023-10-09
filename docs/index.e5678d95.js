!function(){let e,t,r;function n(e){return e&&e.__esModule?e.default:e}var i,s,a,o,l,h,c,u,d,p,f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},m={},g={},y=f.parcelRequire5d32;null==y&&((y=function(e){if(e in m)return m[e].exports;if(e in g){var t=g[e];delete g[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){g[e]=t},f.parcelRequire5d32=y),y.register("260Jh",function(e,t){Object.defineProperty(e.exports,"getBundleURL",{get:function(){return r},set:function(e){return r=e},enumerable:!0,configurable:!0});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}});var v={};v=y("260Jh").getBundleURL("ceDhw")+y("4G3qk").resolve("4M8Gf");var w={};w=y("260Jh").getBundleURL("ceDhw")+y("4G3qk").resolve("kSZwU");class _{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let t=document.createElement("div");t.classList="product-item",t.id=`product-card_${e.itemId}`;let r=document.createElement("img");r.classList="product-item__img",r.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="product-item__content";let s=document.createElement("h3");s.classList="product-item__content_desc",s.textContent=e.itemName;let a=document.createElement("p");a.classList="product-item__content_part-number",a.textContent=e.itemPN;let o=document.createElement("div");o.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let h=document.createElement("button");h.classList="product-item__content_price-btn",h.id=`product-btn_${e.itemId}`;let c=document.createElement("img");return c.classList="product-item__content_price-btn-img",c.src=/*@__PURE__*/n(w),c.alt="Select",// Append elemens to respective parents
h.appendChild(c),o.appendChild(l),o.appendChild(h),i.appendChild(s),i.appendChild(a),i.appendChild(o),t.appendChild(r),t.appendChild(i),t};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return t};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let t=document.createElement("div");t.classList="product-card",t.id=`prodCard_${e.itemId}`;let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let i=document.createElement("div");i.classList="product-card__top-wrapper";let s=document.createElement("div");s.classList="product-card__img-wrapper";let a=document.createElement("img");a.classList="product-card__img",a.src=this.controller.getUrlByNameLocal(e.itemImg);let o=document.createElement("div");o.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let h=document.createElement("h1");h.classList="product-card__product-name",h.textContent=e.itemName;let c=document.createElement("p");c.classList="product-card__support-txt",c.textContent="Part Number: ";let u=document.createElement("h3");u.classList="product-card__part-number",u.textContent=e.itemPN;let d=document.createElement("p");d.classList="product-card__support-txt",d.textContent="Price Per Unit: ";let p=document.createElement("h3");p.classList="product-card__product-price",p.textContent=`${e.itemCurrency} ${e.itemPrice}`;let f=document.createElement("p");f.classList="product-card__support-txt",f.textContent="Condition: ";let m=document.createElement("h3");m.classList="product-card__condition",m.textContent=e.itemCondition;let g=document.createElement("p");g.classList="product-card__support-txt",g.textContent="Certification: ";let y=document.createElement("h3");y.classList="product-card__certification",y.textContent=e.itemCertification;let w=document.createElement("p");w.classList="product-card__support-txt",w.textContent="Availability: ";let _=document.createElement("h3");_.classList="product-card__availability",_.textContent=e.itemLeadTime;let E=document.createElement("button");E.classList="product-card__add-to-cart-btn",E.id=`add-to-cart-btn_${e.itemId}`;let C=document.createElement("img");C.src=/*@__PURE__*/n(v),C.alt="Select";let b=document.createElement("span");b.innerText=" Add to Cart";let T=document.createElement("div");T.classList="product-card__bottom-wrapper";let I=document.createElement("h3");I.classList="product-card__description",I.textContent="Product Description";let S=document.createElement("p");return S.classList="product-card__description-text",S.textContent=e.itemDescription,// TO-DO STARTED
s.appendChild(a),l.appendChild(h),l.appendChild(c),l.appendChild(u),l.appendChild(d),l.appendChild(p),l.appendChild(f),l.appendChild(m),l.appendChild(g),l.appendChild(y),l.appendChild(w),l.appendChild(_),E.appendChild(C),E.appendChild(b),o.appendChild(l),o.appendChild(E),i.appendChild(s),i.appendChild(o),T.appendChild(I),T.appendChild(S),t.appendChild(r),t.appendChild(i),t.appendChild(T),t}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var E={};E=y("260Jh").getBundleURL("ceDhw")+y("4G3qk").resolve("8HtV0");class C{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Cart Products Icons Block
createCartProductItemsBlock=e=>{let t=document.createElement("div");if(t.classList="cart-links-wrapper",0===e.length){let e=document.createElement("p");e.classList="cart-links-empty-msg",e.innerText="Cart is empty",t.appendChild(e)}else // console.log("Action: Right Container - Render Cart Icons");
for(let r of e){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(r.itemId),n=this.controller.getUrlByNameLocal(e),i=this.createCartItemButton(n,r.itemId);t.appendChild(i)}return t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let t=document.createElement("button");t.classList="cart-goto-btn";let r=document.createElement("img");r.src=/*@__PURE__*/n(E),r.alt="Select";let i=document.createElement("span");return i.innerText=" Cart",// Append elemens to respective parents
t.appendChild(r),t.appendChild(i),e.appendChild(t),e};// Right Container - Create "Proceed To Checkout" button
createProceedToCheckoutBtn=()=>{let e=document.createElement("div");e.classList="cart-checkout-btn-wrapper";let t=document.createElement("button");t.classList="cart-checkout-btn";let r=document.createElement("img");r.src=/*@__PURE__*/n(E),r.alt="Checkout";let i=document.createElement("span");return i.innerText=" Checkout",// Append elemens to respective parents
t.appendChild(r),t.appendChild(i),e.appendChild(t),e};// Right Container - create total amount block
createTotalAmountBlock=e=>{let t=document.createElement("div");t.classList="cart-total-amount-wrapper";let r=document.createElement("p");return r.classList="cart-total-amount",r.id="cart-total-amount",r.innerText=`Total: $${e.priceTotal}`,t.appendChild(r),t};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// Create "Cart" title
let t=this.createCartSummaryTitle(),r=this.createCartProductItemsBlock(e);t.appendChild(r);// Create "Go To Cart" button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t};// Right Container - Render Cart Summaary
createNewCartSummaryWithPrice=(e,t)=>{// Create "Cart" title
let r=this.createCartSummaryTitle(),n=this.createCartProductItemsBlock(e),i=this.createTotalAmountBlock(t),s=this.createProceedToCheckoutBtn();// TEST-TBS - REMOVE FOR PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return r.appendChild(n),r.appendChild(i),r.appendChild(s),r};// Left Container - Create Product Item Card block
// Third argument ("customClassList") is a classList to pass to 'div' element
// Fourth argument ("updateBlock") is to create an "update qty" feature
createProductCardForCart=(e,t,r,n)=>{// Create elements
let i=document.createElement("div");i.classList=r,// TO-DO : verify if "itemId" is better to use instead of "docId" here:
i.id=`cart-item_${e.itemId}`;let s=document.createElement("div");s.classList="cart-item__img-wrapper";let a=document.createElement("img");a.classList="cart-item__img",a.src=this.controller.getUrlByNameLocal(e.itemImg);let o=document.createElement("div");o.classList="cart-item__summary-wrapper";let l=document.createElement("div");l.classList="cart-item__summary";let h=document.createElement("div");h.classList="cart-item__element-wrapper";let c=document.createElement("h1");c.classList="cart-item__product-name",c.textContent=e.itemName;let u=document.createElement("div");u.classList="cart-item__element-wrapper";let d=document.createElement("p");d.classList="cart-item__support-txt",d.textContent="Part Number: ";let p=document.createElement("h3");p.classList="cart-item__part-number",p.textContent=e.itemPN;let f=document.createElement("div");f.classList="cart-item__element-wrapper";let m=document.createElement("p");m.classList="cart-item__support-txt",m.textContent="Condition: ";let g=document.createElement("h3");g.classList="cart-item__condition",g.textContent=e.itemCondition;let y=document.createElement("div");y.classList="cart-item__element-wrapper";let v=document.createElement("p");v.classList="cart-item__support-txt",v.textContent="Certification: ";let w=document.createElement("h3");w.classList="cart-item__certification",w.textContent=e.itemCertification;let _=document.createElement("div");_.classList="cart-item__element-wrapper";let E=document.createElement("p");E.classList="cart-item__support-txt",E.textContent="Availability: ";let C=document.createElement("h3");C.classList="cart-item__availability",C.textContent=e.itemLeadTime;let b=document.createElement("div");b.classList="cart-item__price-qty";let T=document.createElement("h3");T.classList="cart-item__product-price",T.setAttribute("data-price-qty-id",e.itemId),T.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`;let I=document.createElement("div");I.classList="cart-element__qty-mod_wrapper",I.id=`qty-mod_${e.itemId}`;let S=document.createElement("button");S.classList="cart-element__qty-mod_deduct-btn",S.innerText=" - ",S.id=`qty-deduct-btn_${e.itemId}`;let A=document.createElement("p");A.classList="cart-element__qty-mod_qty",A.id=`qty-indicator_${e.itemId}`,A.innerText=t;let D=document.createElement("button");// console.log("productCardMain: ", productCardMain);
return D.classList="cart-element__qty-mod_add-btn",D.innerText=" + ",D.id=`qty-add-btn_${e.itemId}`,// Assembly HTML code:
s.appendChild(a),h.appendChild(c),l.appendChild(h),u.appendChild(d),u.appendChild(p),l.appendChild(u),f.appendChild(m),f.appendChild(g),l.appendChild(f),y.appendChild(v),y.appendChild(w),l.appendChild(y),_.appendChild(E),_.appendChild(C),l.appendChild(_),n&&(I.appendChild(S),I.appendChild(A),I.appendChild(D)),b.appendChild(T),b.appendChild(I),l.appendChild(b),o.appendChild(l),i.appendChild(s),i.appendChild(o),i};// Left Container - Create Cart Page
createCartPage=e=>{let t=document.createElement("div");t.classList="cart-wrapper";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.classList="cart-title",n.innerText="Cart";let i=document.createElement("div");for(let t of(i.classList="cart-items-wrapper",e)){// console.log(
//     "productItem to pass to getProductObjectById() function: ",
//     productItem
// );
// console.log("productItem.itemID: ", productItem.itemId);
let e=this.controller.getProductObjectById(t.itemId);// console.log("productData: ", productData);
// Third argument ("cart-item") is a classList to pass to 'div' element
// Fourth argument ("true") is to create an "update" feature
i.appendChild(this.createProductCardForCart(e,t.qty,"cart-item",!0))}return t.appendChild(r),t.appendChild(n),t.appendChild(i),t};// Left Container - Create Empty Cart Page
createEmptyCartPage=()=>{let e=document.createElement("div");e.classList="cart-wrapper";let t=document.createElement("button");t.classList="goto-products-btn",t.innerText="< Back to Products";let r=document.createElement("h2");return r.classList="cart-title",r.innerText="Cart is empty",e.appendChild(t),e.appendChild(r),e};// Update total price (items + handling) in menu (right container)
updatePartQuantity=(e,t)=>{// Find "price x qty" element by attribute:
let r=document.querySelector(`[data-price-qty-id="${e.itemId}"]`);r&&(r.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`);// Find "qty indicator" element by id:
let n=document.getElementById(`qty-indicator_${e.itemId}`);n&&(n.innerText=t)};// Update total price (items + handling) in menu (right container)
updateTotalPrice=e=>{// Find "Total price" element by ID
let t=document.getElementById("cart-total-amount");t&&(t.innerText=`Total: $${e}`)}}class b{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders History",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle();// Sorting ORDER ID strings alphabetically
e.sort((e,t)=>e.orderId.localeCompare(t.orderId));let r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}return t.appendChild(r),t};// Right Container - Create OrderSummaryContentBlock
createOrderSummaryPriceBlock=(e,t)=>{let r=document.createElement("div");r.classList="order-summary";let n=document.createElement("h3");n.classList="order-summary-title",n.innerText="Order Summary";let i=document.createElement("div");i.classList="flex-between";let s=document.createElement("p");s.innerText="Items:";let a=document.createElement("p");a.innerText=`$${e.priceItems}`;let o=document.createElement("div");o.classList="flex-between";let l=document.createElement("p");l.innerText="Handling:";let h=document.createElement("p");h.innerText=`$${e.priceHandling}`;let c=document.createElement("div");c.classList="flex-between bold";let u=document.createElement("p");u.innerText="Total:";let d=document.createElement("p");return d.innerText=`$${e.priceTotal}`,i.appendChild(s),i.appendChild(a),o.appendChild(l),o.appendChild(h),c.appendChild(u),c.appendChild(d),r.appendChild(n),r.appendChild(i),r.appendChild(o),r.appendChild(c),t&&r.appendChild(this.createPlaceOrderButtonBlock()),r};// Right Container - Create PlaceOrderButtonBlock
createPlaceOrderButtonBlock=()=>{let e=document.createElement("div");e.classList="place-order-btn-wrapper";let t=document.createElement("button");return t.classList="place-order-btn",t.innerText="Place Order",e.appendChild(t),e};// Left Container - Create createCheckOutWrapper
createCheckOutWrapper=()=>{let e=document.createElement("div");e.classList="checkout-wrapper";let t=document.createElement("button");return t.classList="goto-cart-btn",t.innerText="< Back to Cart",e.appendChild(t),e};// Left Container - Create createOrderWrapper
createOrderWrapper=e=>{let t=document.createElement("div");t.classList="order-wrapper";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");return n.classList="order-number",n.innerText=`Order # ${e.orderId}`,t.appendChild(r),t.appendChild(n),t};// Left Container - Create BillToAddressContentBlock
createBillToAddressContentBlock=(e,t)=>{let r=document.createElement("div");r.classList="address-wrapper";let n=document.createElement("h3");n.classList="address-title",n.innerText="Bill to Address";let i=document.createElement("p");i.innerText=e.custLegalName;let s=document.createElement("p");s.innerText=e.custBillToAddress;let a=document.createElement("p");a.innerText=e.userName;let o=document.createElement("p");o.innerText=e.userPhone;let l=document.createElement("p");return l.innerText=e.userEmail,r.appendChild(n),r.appendChild(i),r.appendChild(s),r.appendChild(a),r.appendChild(o),r.appendChild(l),t&&r.appendChild(this.createUpdateButtonBlock()),r};// Left Container - Create PaymentMethodContentBlock
createPaymentMethodContentBlock=(e,t,r)=>{let n=document.createElement("div");n.classList="payment-method-wrapper";let i=document.createElement("h3");i.classList="payment-method-title",i.innerText="Payment Method";let s=document.createElement("p");return s.innerText=r[e.paymentMethod],n.appendChild(i),n.appendChild(s),t&&n.appendChild(this.createUpdateButtonBlock()),n};// Left Container - createCheckOutCartWrapper
createCheckOutCartWrapper=()=>{let e=document.createElement("div");e.classList="checkout-cart-wrapper";let t=document.createElement("h3");return t.classList="checkout-cart-title",t.innerText="Cart",e.appendChild(t),e};// Left Container - Create UpdateButtonBlock
createUpdateButtonBlock=()=>{let e=document.createElement("div");e.classList="update-btn-wrapper";let t=document.createElement("button");return t.classList="update-btn",t.innerText="Update",e.appendChild(t),e}}class T{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewPopup is connected!")};createPopupMessage=e=>{// Create main wrapper div
let t=document.createElement("div");t.classList.add("popup-welcome-wrapper"),// Use Object.entries to iterate over welcomeDisclamer object
e.forEach(e=>{let r=document.createElement("p");r.innerText=e,// Append para to the main wrapper
t.appendChild(r)});// Create and append AGREE button
let r=document.createElement("button");return r.classList.add("update-btn"),r.setAttribute("id","agreeBtn"),r.innerText="I Agree",t.appendChild(r),t};createPopupUpdateAddress=e=>{// Create the main wrapper div
let t=document.createElement("div");t.classList.add("popup-address");// Array containing the input fields and their properties
let r=[{label:"Company Name",name:"custLegalName",type:"text",placeholder:e.custLegalName},{label:"Company Address",name:"custBillToAddress",type:"text",placeholder:e.custBillToAddress},{label:"Company Contact",name:"userName",type:"text",placeholder:e.userName},{label:"Company Contact Phone",name:"userPhone",type:"tel",placeholder:e.userPhone},{label:"Company Contact Email",name:"userEmail",type:"email",placeholder:e.userEmail}];// Loop through the array and create each input field
r.forEach(e=>{let r=document.createElement("div");r.classList.add("popup-item-wrapper");let n=document.createElement("label");n.setAttribute("for",e.name),n.innerText=e.label;let i=document.createElement("input");i.setAttribute("type",e.type),i.setAttribute("name",e.name),i.setAttribute("placeholder",e.placeholder),// Append the label and input to the item wrapper
r.appendChild(n),r.appendChild(i),// Append the item wrapper to the main wrapper
t.appendChild(r)});// Create and append the update button
let n=document.createElement("button");return n.classList.add("update-btn"),n.setAttribute("id","updateAddressBtn"),n.innerText="Update",t.appendChild(n),t};createPopupUpdatePaymentMethod=e=>{// Create the main wrapper div
let t=document.createElement("div");t.classList.add("popup-payment-method"),// Use Object.entries to iterate over paymentMethods object
Object.entries(e).forEach(([e,r],n)=>{let i=document.createElement("div"),s=document.createElement("input");s.setAttribute("type","radio"),s.setAttribute("name","method"),s.setAttribute("id",e),s.setAttribute("value",r),0===n&&(s.checked=!0);let a=document.createElement("label");a.setAttribute("for",e),a.innerText=r,// Append the input and label to the div
i.appendChild(s),i.appendChild(a),// Append the div to the main wrapper
t.appendChild(i)});// Create and append the update button
let r=document.createElement("button");return r.classList.add("update-btn"),r.setAttribute("id","updatePaymentMethodBtn"),r.innerText="Update",t.appendChild(r),t}}// Import the functions you need from the SDKs you need
// REMOVED FOR TEST & TBS / FOR PROD USE CONST FILE
// import { firebaseConfig } from "./constants";
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
 */var I={},S=I={};function A(){throw Error("setTimeout has not been defined")}function D(){throw Error("clearTimeout has not been defined")}function k(e){if(e2===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((e2===A||!e2)&&setTimeout)return e2=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return e2(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return e2.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return e2.call(this,e,0)}}}!function(){try{e2="function"==typeof setTimeout?setTimeout:A}catch(e){e2=A}try{e9="function"==typeof clearTimeout?clearTimeout:D}catch(e){e9=D}}();var L=[],N=!1,R=-1;function O(){N&&e4&&(N=!1,e4.length?L=e4.concat(L):R=-1,L.length&&P())}function P(){if(!N){var e=k(O);N=!0;for(var t=L.length;t;){for(e4=L,L=[];++R<t;)e4&&e4[R].run();R=-1,t=L.length}e4=null,N=!1,function(e){if(e9===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((e9===D||!e9)&&clearTimeout)return e9=clearTimeout,clearTimeout(e);try{e9(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return e9.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return e9.call(this,e)}}}(e)}}// v8 likes predictible objects
function x(e,t){this.fun=e,this.array=t}function M(){}S.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];L.push(new x(e,t)),1!==L.length||N||k(P)},x.prototype.run=function(){this.fun.apply(null,this.array)},S.title="browser",S.browser=!0,S.env={},S.argv=[],S.version="",S.versions={},S.on=M,S.addListener=M,S.once=M,S.off=M,S.removeListener=M,S.removeAllListeners=M,S.emit=M,S.prependListener=M,S.prependOnceListener=M,S.listeners=function(e){return[]},S.binding=function(e){throw Error("process.binding is not supported")},S.cwd=function(){return"/"},S.chdir=function(e){throw Error("process.chdir is not supported")},S.umask=function(){return 0};/**
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
 */let F=function(e){// TODO(user): Use native implementations if/when available
let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},U=function(e){// TODO(user): Use native implementations if/when available
let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){// Surrogate Pair
let s=e[r++],a=e[r++],o=e[r++],l=((7&i)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},B={/**
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
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=i>>2,c=(3&i)<<4|a>>4,u=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(u=64)),n.push(r[h],r[c],r[u],r[d])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(F(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):U(this.decodeStringToByteArray(e,t)))},/**
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
     */decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length,a=s?r[e.charAt(t)]:0;++t;let o=t<e.length,l=o?r[e.charAt(t)]:64;++t;let h=t<e.length,c=h?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==l||null==c)throw new V;let u=i<<2|a>>4;if(n.push(u),64!==l){let e=a<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class V extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */let $=function(e){let t=F(e);return B.encodeByteArray(t,!0)},j=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return $(e).replace(/\./g,"")},q=function(e){try{return B.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},H=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==f)return f;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,z=()=>{if(void 0===I||void 0===I.env)return;let e=void 0;if(e)return JSON.parse(e)},K=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&q(e[1]);return t&&JSON.parse(t)},G=()=>{try{return H()||z()||K()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Q=e=>{var t,r;return null===(r=null===(t=G())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},W=e=>{let t=Q(e);if(!t)return;let r=t.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},X=()=>{var e;return null===(e=G())||void 0===e?void 0:e.config};/**
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
 */class Y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
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
 */function J(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[j(JSON.stringify({alg:"none",type:"JWT"})),j(JSON.stringify(s)),""].join(".")}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class Z extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */r){super(t),this.code=e,this.customData=r,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,Z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ee.prototype.create)}}class ee{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(et,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`,o=new Z(n,a,r);return o}}let et=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function er(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(en(r)&&en(s)){if(!er(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function en(e){return null!==e&&"object"==typeof e}/**
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
 */function ei(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class es{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,/**
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
 */let ea="[DEFAULT]";/**
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
 */class eo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new Y;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ea})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=ea){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ea){return this.instances.has(e)}getOptions(e=ea){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===ea?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return r||null}normalizeInstanceIdentifier(e=ea){return this.component?this.component.multipleInstances?e:ea:e// assume multiple instances are supported before the component is provided.
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
 */class el{constructor(e){this.name=e,this.providers=new Map}/**
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
let t=new eo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */let eh=[];(e1=e6||(e6={}))[e1.DEBUG=0]="DEBUG",e1[e1.VERBOSE=1]="VERBOSE",e1[e1.INFO=2]="INFO",e1[e1.WARN=3]="WARN",e1[e1.ERROR=4]="ERROR",e1[e1.SILENT=5]="SILENT";let ec={debug:e6.DEBUG,verbose:e6.VERBOSE,info:e6.INFO,warn:e6.WARN,error:e6.ERROR,silent:e6.SILENT},eu=e6.INFO,ed={[e6.DEBUG]:"log",[e6.VERBOSE]:"log",[e6.INFO]:"info",[e6.WARN]:"warn",[e6.ERROR]:"error"},ep=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=ed[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ef{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=eu,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=ep,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */eh.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in e6))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?ec[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,e6.DEBUG,...e),this._logHandler(this,e6.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,e6.VERBOSE,...e),this._logHandler(this,e6.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,e6.INFO,...e),this._logHandler(this,e6.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,e6.WARN,...e),this._logHandler(this,e6.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,e6.ERROR,...e),this._logHandler(this,e6.ERROR,...e)}}let em=(e,t)=>t.some(t=>e instanceof t),eg=new WeakMap,ey=new WeakMap,ev=new WeakMap,ew=new WeakMap,e_=new WeakMap,eE={get(e,t,r){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return ey.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||ev.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}// Else transform whatever we get back.
return eC(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eC(r){var n;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eC(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eg.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
e_.set(t,e),t}(r);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(ew.has(r))return ew.get(r);let i="function"==typeof(n=r)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
n.apply(eb(this),e),eC(eg.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return eC(n.apply(eb(this),e))}:function(e,...t){let r=n.call(eb(this),e,...t);return ev.set(r,e.sort?e.sort():[e]),eC(r)}:(n instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(ey.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});// Cache it for later retrieval.
ey.set(e,t)}(n),em(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eE):n;return i!==r&&(ew.set(r,i),e_.set(i,r)),i}let eb=e=>e_.get(e),eT=["get","getKey","getAll","getAllKeys","count"],eI=["put","add","delete","clear"],eS=new Map;function eA(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eS.get(t))return eS.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=eI.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||eT.includes(r)))return;let s=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&s.done]))[0]};return eS.set(t,s),s}eE={...e0=eE,get:(e,t,r)=>eA(e,t)||e0.get(e,t,r),has:(e,t)=>!!eA(e,t)||e0.has(e,t)};/**
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
 */class eD{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
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
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let ek="@firebase/app",eL="0.9.19",eN=new ef("@firebase/app"),eR="[DEFAULT]",eO={[ek]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eP=new Map,ex=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function eM(e){let t=e.name;if(ex.has(t))return eN.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let r of(ex.set(t,e),eP.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(r){eN.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function eF(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let eU=new ee("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class eB{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw eU.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
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
 * The current SDK version.
 *
 * @public
 */let eV="10.4.0";function e$(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:eR,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw eU.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(i)});if(r||(r=X()),!r)throw eU.create("no-options"/* AppError.NO_OPTIONS */);let s=eP.get(i);if(s){// return the existing app if options and config deep equal the ones in the existing app.
if(er(r,s.options)&&er(n,s.config))return s;throw eU.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:i})}let a=new el(i);for(let e of ex.values())a.addComponent(e);let o=new eB(r,n,a);return eP.set(i,o),o}/**
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
 */function ej(e=eR){let t=eP.get(e);if(!t&&e===eR&&X())return e$();if(!t)throw eU.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function eq(e,t,r){var n;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let i=null!==(n=eO[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eN.warn(e.join(" "));return}eM(new es(`${i}-version`,()=>({library:i,version:t}),"VERSION"/* ComponentType.VERSION */))}let eH="firebase-heartbeat-store",ez=null;function eK(){return ez||(ez=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=eC(a);return n&&a.addEventListener("upgradeneeded",e=>{n(eC(a.result),e.oldVersion,e.newVersion,eC(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eH)}}).catch(e=>{throw eU.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),ez}async function eG(e){try{let t=await eK(),r=await t.transaction(eH).objectStore(eH).get(eW(e));return r}catch(e){if(e instanceof Z)eN.warn(e.message);else{let t=eU.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});eN.warn(t.message)}}}async function eQ(e,t){try{let r=await eK(),n=r.transaction(eH,"readwrite"),i=n.objectStore(eH);await i.put(t,eW(e)),await n.done}catch(e){if(e instanceof Z)eN.warn(e.message);else{let t=eU.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});eN.warn(t.message)}}}function eW(e){return`${e.name}!${e.options.appId}`}class eX{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new eJ(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),r=eY();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(e=>e.date===r))?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let e=eY(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let r=[],n=e.slice();for(let i of e){// Look for an existing entry with the same user agent.
let e=r.find(e=>e.agent===i.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(i.date),eZ(r)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
r.push({agent:i.agent,dates:[i.date]}),eZ(r)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
r.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=j(JSON.stringify({version:2,heartbeats:t}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=r,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n)}}function eY(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class eJ{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await eG(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return eQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function eZ(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return j(JSON.stringify({version:2,heartbeats:e})).length}eM(new es("platform-logger",e=>new eD(e),"PRIVATE"/* ComponentType.PRIVATE */)),eM(new es("heartbeat",e=>new eX(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
eq(ek,eL,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
eq(ek,eL,"esm2017"),// Register platform SDK identifier (no version).
eq("fire-js",""),eq("firebase","10.4.0","app");var e0,e1,e2,e9,e4,e6,e5,e3="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==f?f:"undefined"!=typeof self?self:{},e7={},e8=e8||{},te=e3||self;function tt(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function tr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function tn(e,t,r){return e.call.apply(e.bind,arguments)}function ti(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function ts(e,t,r){return(ts=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tn:ti).apply(null,arguments)}function ta(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function to(e,t){function r(){}r.prototype=t.prototype,e.$=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.ac=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function tl(){this.s=this.s,this.o=this.o}tl.prototype.s=!1,tl.prototype.sa=function(){this.s||(this.s=!0,this.N())},tl.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let th=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let r=0;r<e.length;r++)if(r in e&&e[r]===t)return r;return -1};function tc(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function tu(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(tt(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function td(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}td.prototype.h=function(){this.defaultPrevented=!0};var tp=function(){if(!te.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{te.addEventListener("test",()=>{},t),te.removeEventListener("test",()=>{},t)}catch(e){}return e}();function tf(e){return/^[\s\xa0]*$/.test(e)}function tm(){var e=te.navigator;return e&&(e=e.userAgent)?e:""}function tg(e){return -1!=tm().indexOf(e)}function ty(e){return ty[" "](e),e}ty[" "]=function(){};var tv=tg("Opera"),tw=tg("Trident")||tg("MSIE"),t_=tg("Edge"),tE=t_||tw,tC=tg("Gecko")&&!(-1!=tm().toLowerCase().indexOf("webkit")&&!tg("Edge"))&&!(tg("Trident")||tg("MSIE"))&&!tg("Edge"),tb=-1!=tm().toLowerCase().indexOf("webkit")&&!tg("Edge");function tT(){var e=te.document;return e?e.documentMode:void 0}e:{var tI,tS="",tA=(tI=tm(),tC?/rv:([^\);]+)(\)|;)/.exec(tI):t_?/Edge\/([\d\.]+)/.exec(tI):tw?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(tI):tb?/WebKit\/(\S+)/.exec(tI):tv?/(?:Version)[ \/]?(\S+)/.exec(tI):void 0);if(tA&&(tS=tA?tA[1]:""),tw){var tD=tT();if(null!=tD&&tD>parseFloat(tS)){o=String(tD);break e}}o=tS}var tk=te.document&&tw&&(tT()||parseInt(o,10))||void 0;function tL(e,t){if(td.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(tC){e:{try{ty(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:tN[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&tL.$.h.call(this)}}to(tL,td);var tN={2:"touch",3:"pen",4:"mouse"};tL.prototype.h=function(){tL.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var tR="closure_listenable_"+(1e6*Math.random()|0),tO=0;function tP(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.la=i,this.key=++tO,this.fa=this.ia=!1}function tx(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function tM(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function tF(e){let t={};for(let r in e)t[r]=e[r];return t}let tU="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tB(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<tU.length;t++)r=tU[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function tV(e){this.src=e,this.g={},this.h=0}function t$(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=th(i,t);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(tx(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function tj(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&!!r==s.capture&&s.la==n)return i}return -1}tV.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=tj(e,t,n,i);return -1<a?(t=e[a],r||(t.ia=!1)):((t=new tP(t,this.src,s,!!n,i)).ia=r,e.push(t)),t};var tq="closure_lm_"+(1e6*Math.random()|0),tH={};function tz(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var a=tr(i)?!!i.capture:!!i,o=tW(e);if(o||(e[tq]=o=new tV(e)),(r=o.add(t,r,n,a,s)).proxy)return r;if(n=function e(t){return tQ.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)tp||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(tG(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function tK(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[tR])t$(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(tG(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=tW(t))?(t$(r,e),0==r.h&&(r.src=null,t[tq]=null)):tx(e)}}}function tG(e){return e in tH?tH[e]:tH[e]="on"+e}function tQ(e,t){if(e.fa)e=!0;else{t=new tL(t,this);var r=e.listener,n=e.la||e.src;e.ia&&tK(e),e=r.call(n,t)}return e}function tW(e){return(e=e[tq])instanceof tV?e:null}var tX="__closure_events_fn_"+(1e9*Math.random()>>>0);function tY(e){return"function"==typeof e?e:(e[tX]||(e[tX]=function(t){return e.handleEvent(t)}),e[tX])}function tJ(){tl.call(this),this.i=new tV(this),this.S=this,this.J=null}function tZ(e,t){var r,n=e.J;if(n)for(r=[];n;n=n.J)r.push(n);if(e=e.S,n=t.type||t,"string"==typeof t)t=new td(t,e);else if(t instanceof td)t.target=t.target||e;else{var i=t;tB(t=new td(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var a=t.g=r[s];i=t0(a,n,!0,t)&&i}if(i=t0(a=t.g=e,n,!0,t)&&i,i=t0(a,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=t0(a=t.g=r[s],n,!1,t)&&i}function t0(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.fa&&a.capture==r){var o=a.listener,l=a.la||a.src;a.ia&&t$(e.i,a),i=!1!==o.call(l,n)&&i}}return i&&!n.defaultPrevented}to(tJ,tl),tJ.prototype[tR]=!0,tJ.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);else(i=tr(i)?!!i.capture:!!i,n=tY(n),t&&t[tR])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=tj(a=t.g[r],n,i,s))&&(tx(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[r],t.h--))):t&&(t=tW(t))&&(r=t.g[r.toString()],t=-1,r&&(t=tj(r,n,i,s)),(n=-1<t?r[t]:null)&&tK(n))}(this,e,t,r,n)},tJ.prototype.N=function(){if(tJ.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)tx(r[n]);delete t.g[e],t.h--}}this.J=null},tJ.prototype.O=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},tJ.prototype.P=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};var t1=te.JSON.stringify,t2=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new t9,e=>e.reset());class t9{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let t4,t6=!1,t5=new class{constructor(){this.h=this.g=null}add(e,t){let r=t2.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},t3=()=>{let e=te.Promise.resolve(void 0);t4=()=>{e.then(t7)}};var t7=()=>{let e;for(var t;e=null,t5.g&&(e=t5.g,t5.g=t5.g.next,t5.g||(t5.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){te.setTimeout(()=>{throw e},0)}(e)}t2.j(t),100>t2.h&&(t2.h++,t.next=t2.g,t2.g=t)}t6=!1};function t8(e,t){tJ.call(this),this.h=e||1,this.g=t||te,this.j=ts(this.qb,this),this.l=Date.now()}function re(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function rt(e,t,r){if("function"==typeof e)r&&(e=ts(e,r));else if(e&&"function"==typeof e.handleEvent)e=ts(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:te.setTimeout(e,t||0)}to(t8,tJ),(e5=t8.prototype).ga=!1,e5.T=null,e5.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tZ(this,"tick"),this.ga&&(re(this),this.start()))}},e5.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},e5.N=function(){t8.$.N.call(this),re(this),delete this.g};class rr extends tl{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=rt(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.j);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(te.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rn(e){tl.call(this),this.h=e,this.g={}}to(rn,tl);var ri=[];function rs(e,t,r,n){Array.isArray(r)||(r&&(ri[0]=r.toString()),r=ri);for(var i=0;i<r.length;i++){var s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=tY(n),t&&t[tR]?t.P(r,n,tr(i)?!!i.capture:!!i,s):tz(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=tY(n),t&&t[tR]?t.O(r,n,tr(i)?!!i.capture:!!i,s):tz(t,r,n,!1,i,s)}(t,r[i],n||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ra(e){tM(e.g,function(e,t){this.g.hasOwnProperty(t)&&tK(e)},e),e.g={}}function ro(){this.g=!0}function rl(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return t1(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}rn.prototype.N=function(){rn.$.N.call(this),ra(this)},rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ro.prototype.Ea=function(){this.g=!1},ro.prototype.info=function(){};var rh={},rc=null;function ru(){return rc=rc||new tJ}function rd(e){td.call(this,rh.Ta,e)}function rp(e){let t=ru();tZ(t,new rd(t))}function rf(e,t){td.call(this,rh.STAT_EVENT,e),this.stat=t}function rm(e){let t=ru();tZ(t,new rf(t,e))}function rg(e,t){td.call(this,rh.Ua,e),this.size=t}function ry(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return te.setTimeout(function(){e()},t)}rh.Ta="serverreachability",to(rd,td),rh.STAT_EVENT="statevent",to(rf,td),rh.Ua="timingevent",to(rg,td);var rv={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function r_(){}function rE(e){return e.h||(e.h=e.i())}function rC(){}r_.prototype.h=null;var rb={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rT(){td.call(this,"d")}function rI(){td.call(this,"c")}function rS(){}function rA(e,t,r,n){this.l=e,this.j=t,this.m=r,this.W=n||1,this.U=new rn(this),this.P=rk,e=tE?125:void 0,this.V=new t8(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rD}function rD(){this.i=null,this.g="",this.h=!1}to(rT,td),to(rI,td),to(rS,r_),rS.prototype.g=function(){return new XMLHttpRequest},rS.prototype.i=function(){return{}},h=new rS;var rk=45e3,rL={},rN={};function rR(e,t,r){e.L=1,e.v=rX(rz(t)),e.s=r,e.S=!0,rO(e,null)}function rO(e,t){e.G=Date.now(),rM(e),e.A=rz(e.v);var r=e.A,n=e.W;Array.isArray(n)||(n=[String(n)]),r8(r.i,"t",n),e.C=0,r=e.l.J,e.h=new rD,e.g=nJ(e.l,r?t:null,!e.s),0<e.O&&(e.M=new rr(ts(e.Pa,e,e.g),e.O)),rs(e.U,e.g,"readystatechange",e.nb),t=e.I?tF(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),rp(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");a=2<=u.length&&"type"==u[1]?a+(c+"=")+h+"&":a+(c+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+a})}(e.j,e.u,e.A,e.m,e.W,e.s)}function rP(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.l.Ha}function rx(e,t,r){let n=!0,i;for(;!e.J&&e.C<r.length;)if((i=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?rN:isNaN(r=Number(t.substring(r,n)))?rL:(n+=1)+r>t.length?rN:(t=t.slice(n,n+r),e.C=n+r,t)}(e,r))==rN){4==t&&(e.o=4,rm(14),n=!1),rl(e.j,e.m,null,"[Incomplete Response]");break}else if(i==rL){e.o=4,rm(15),rl(e.j,e.m,r,"[Invalid Chunk]"),n=!1;break}else rl(e.j,e.m,i,null),r$(e,i);rP(e)&&i!=rN&&i!=rL&&(e.h.g="",e.C=0),4!=t||0!=r.length||e.h.h||(e.o=1,rm(16),n=!1),e.i=e.i&&n,n?0<r.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+r.length),nH(t),t.M=!0,rm(11))):(rl(e.j,e.m,r,"[Invalid Chunked Response]"),rV(e),rB(e))}function rM(e){e.Y=Date.now()+e.P,rF(e,e.P)}function rF(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ry(ts(e.lb,e),t)}function rU(e){e.B&&(te.clearTimeout(e.B),e.B=null)}function rB(e){0==e.l.H||e.J||nG(e.l,e)}function rV(e){rU(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,re(e.V),ra(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function r$(e,t){try{var r=e.l;if(0!=r.H&&(r.g==e||na(r.i,e))){if(!e.K&&na(r.i,e)&&3==r.H){try{var n=r.Ja.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.G+3e3<e.G)nK(r),nM(r);else break e}nq(r),rm(18)}}else r.Fa=i[1],0<r.Fa-r.V&&37500>i[2]&&r.G&&0==r.A&&!r.v&&(r.v=ry(ts(r.ib,r),6e3));if(1>=ns(r.i)&&r.oa){try{r.oa()}catch(e){}r.oa=void 0}}else nW(r,11)}else if((e.K||r.g==e)&&nK(r),!tf(t))for(i=r.Ja.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(r.V=o[0],o=o[1],2==r.H){if("c"==o[0]){r.K=o[1],r.pa=o[2];let t=o[3];null!=t&&(r.ra=t,r.l.info("VER="+r.ra));let i=o[4];null!=i&&(r.Ga=i,r.l.info("SVER="+r.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.l.info("backChannelRequestTimeoutMs_="+n)),n=r;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(no(s,s.h),s.h=null))}if(n.F){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.Da=e,rW(n.I,n.F,e))}}if(r.H=3,r.h&&r.h.Ba(),r.ca&&(r.S=Date.now()-e.G,r.l.info("Handshake RTT: "+r.S+"ms")),(n=r).wa=nY(n,n.J?n.pa:null,n.Y),e.K){nl(n.i,e);var a=n.L;a&&e.setTimeout(a),e.B&&(rU(e),rM(e)),n.g=e}else nj(n);0<r.j.length&&nU(r)}else"stop"!=o[0]&&"close"!=o[0]||nW(r,7)}else 3==r.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?nW(r,7):nx(r):"noop"!=o[0]&&r.h&&r.h.Aa(o),r.A=0)}}rp(4)}catch(e){}}function rj(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(tt(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(tt(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(tt(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}(e5=rA.prototype).setTimeout=function(e){this.P=e},e5.nb=function(e){e=e.target;let t=this.M;t&&3==nk(e)?t.l():this.Pa(e)},e5.Pa=function(e){try{if(e==this.g)e:{let c=nk(this.g);var t=this.g.Ia();let u=this.g.da();if(!(3>c)&&(3!=c||tE||this.g&&(this.h.h||this.g.ja()||nL(this.g)))){this.J||4!=c||7==t||(8==t||0>=u?rp(3):rp(2)),rU(this);var r=this.g.da();this.ca=r;t:if(rP(this)){var n=nL(this.g);e="";var i=n.length,s=4==nk(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rV(this),rB(this);var a="";break t}this.h.i=new te.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:s&&t==i-1});n.splice(0,i),this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==r,function(e,t,r,n,i,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,c,r),this.i){if(this.aa&&!this.K){t:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tf(o)){var h=o;break t}}h=null}if(r=h)rl(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,r$(this,r);else{this.i=!1,this.o=3,rm(12),rV(this),rB(this);break e}}this.S?(rx(this,c,a),tE&&this.i&&3==c&&(rs(this.U,this.V,"tick",this.mb),this.V.start())):(rl(this.j,this.m,a,null),r$(this,a)),4==c&&rV(this),this.i&&!this.J&&(4==c?nG(this.l,this):(this.i=!1,rM(this)))}else(function(e){let t={};e=(e.g&&2<=nk(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(tf(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.o=3,rm(12)):(this.o=0,rm(13)),rV(this),rB(this)}}}catch(e){}finally{}},e5.mb=function(){if(this.g){var e=nk(this.g),t=this.g.ja();this.C<t.length&&(rU(this),rx(this,e,t),this.i&&4!=e&&rM(this))}},e5.cancel=function(){this.J=!0,rV(this)},e5.lb=function(){this.B=null;let e=Date.now();0<=e-this.Y?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.j,this.A),2!=this.L&&(rp(),rm(17)),rV(this),this.o=2,rB(this)):rF(this,this.Y-e)};var rq=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rH(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof rH){this.h=e.h,rK(this,e.j),this.s=e.s,this.g=e.g,rG(this,e.m),this.l=e.l;var t=e.i,r=new r6;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),rQ(this,r),this.o=e.o}else e&&(t=String(e).match(rq))?(this.h=!1,rK(this,t[1]||"",!0),this.s=rY(t[2]||""),this.g=rY(t[3]||"",!0),rG(this,t[4]),this.l=rY(t[5]||"",!0),rQ(this,t[6]||"",!0),this.o=rY(t[7]||"")):(this.h=!1,this.i=new r6(null,this.h))}function rz(e){return new rH(e)}function rK(e,t,r){e.j=r?rY(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rG(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function rQ(e,t,r){var n,i;t instanceof r6?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(r5(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(r3(this,t),r8(this,r,e))},n)),n.j=i):(r||(t=rJ(t,r9)),e.i=new r6(t,e.h))}function rW(e,t,r){e.i.set(t,r)}function rX(e){return rW(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rY(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function rJ(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,rZ),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function rZ(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rH.prototype.toString=function(){var e=[],t=this.j;t&&e.push(rJ(t,r0,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(rJ(t,r0,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.m)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(rJ(r,"/"==r.charAt(0)?r2:r1,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.o)&&e.push("#",rJ(r,r4)),e.join("")};var r0=/[#\/\?@]/g,r1=/[#\?:]/g,r2=/[#\?]/g,r9=/[#\?@]/g,r4=/#/g;function r6(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function r5(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function r3(e,t){r5(e),t=ne(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function r7(e,t){return r5(e),t=ne(e,t),e.g.has(t)}function r8(e,t,r){r3(e,t),0<r.length&&(e.i=null,e.g.set(ne(e,t),tc(r)),e.h+=r.length)}function ne(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(e5=r6.prototype).add=function(e,t){r5(this),this.i=null,e=ne(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},e5.forEach=function(e,t){r5(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},e5.ta=function(){r5(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},e5.Z=function(e){r5(this);let t=[];if("string"==typeof e)r7(this,e)&&(t=t.concat(this.g.get(ne(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},e5.set=function(e,t){return r5(this),this.i=null,r7(this,e=ne(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e5.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},e5.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),a=this.Z(n);for(n=0;n<a.length;n++){var i=s;""!==a[n]&&(i+="="+encodeURIComponent(String(a[n]))),e.push(i)}}return this.i=e.join("&")};var nt=class{constructor(e,t){this.g=e,this.map=t}};function nr(e){this.l=e||nn,e=te.PerformanceNavigationTiming?0<(e=te.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(te.g&&te.g.Ka&&te.g.Ka()&&te.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function ni(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ns(e){return e.h?1:e.g?e.g.size:0}function na(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function no(e,t){e.g?e.g.add(t):e.h=t}function nl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function nh(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.F);return t}return tc(e.i)}nr.prototype.cancel=function(){if(this.i=nh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var nc=class{stringify(e){return te.JSON.stringify(e,void 0)}parse(e){return te.JSON.parse(e,void 0)}};function nu(){this.g=new nc}function nd(e,t,r,n,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(n)}catch(e){}}function np(e){this.l=e.ec||null,this.j=e.ob||!1}function nf(e,t){tJ.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=nm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}to(np,r_),np.prototype.g=function(){return new nf(this.l,this.j)},np.prototype.i=(i={},function(){return i}),to(nf,tJ);var nm=0;function ng(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function ny(e){e.readyState=4,e.l=null,e.j=null,e.A=null,nv(e)}function nv(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(e5=nf.prototype).open=function(e,t){if(this.readyState!=nm)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,nv(this)},e5.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||te).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},e5.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ny(this)),this.readyState=nm},e5.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,nv(this)),this.g&&(this.readyState=3,nv(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==te.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ng(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))}},e5.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ny(this):nv(this),3==this.readyState&&ng(this)}},e5.Za=function(e){this.g&&(this.response=this.responseText=e,ny(this))},e5.Ya=function(e){this.g&&(this.response=e,ny(this))},e5.ka=function(){this.g&&ny(this)},e5.setRequestHeader=function(e,t){this.v.append(e,t)},e5.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e5.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(nf.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var nw=te.JSON.parse;function n_(e){tJ.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=nE,this.L=this.M=!1}to(n_,tJ);var nE="",nC=/^https?$/i,nb=["POST","PUT"];function nT(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nI(e),nA(e)}function nI(e){e.F||(e.F=!0,tZ(e,"complete"),tZ(e,"error"))}function nS(e){if(e.h&&void 0!==e8&&(!e.C[1]||4!=nk(e)||2!=e.da())){if(e.v&&4==nk(e))rt(e.La,0,e);else if(tZ(e,"readystatechange"),4==nk(e)){e.h=!1;try{let a=e.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===a){var i=String(e.I).match(rq)[1]||null;!i&&te.self&&te.self.location&&(i=te.self.location.protocol.slice(0,-1)),r=!nC.test(i?i.toLowerCase():"")}t=r}if(t)tZ(e,"complete"),tZ(e,"success");else{e.m=6;try{var s=2<nk(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",nI(e)}}finally{nA(e)}}}}function nA(e,t){if(e.g){nD(e);let r=e.g,n=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||tZ(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function nD(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(te.clearTimeout(e.A),e.A=null)}function nk(e){return e.g?e.g.readyState:0}function nL(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case nE:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function nN(e){let t="";return tM(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function nR(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=nN(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):rW(e,t,r))}function nO(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function nP(e){this.Ga=0,this.j=[],this.l=new ro,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=nO("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=nO("baseRetryDelayMs",5e3,e),this.hb=nO("retryDelaySeedMs",1e4,e),this.eb=nO("forwardChannelMaxRetries",2,e),this.xa=nO("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new nr(e&&e.concurrentRequestLimit),this.Ja=new nu,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function nx(e){if(nF(e),3==e.H){var t=e.W++,r=rz(e.I);if(rW(r,"SID",e.K),rW(r,"RID",t),rW(r,"TYPE","terminate"),nV(e,r),(t=new rA(e,e.l,t)).L=2,t.v=rX(rz(r)),r=!1,te.navigator&&te.navigator.sendBeacon)try{r=te.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&te.Image&&((new Image).src=t.v,r=!0),r||(t.g=nJ(t.l,null),t.g.ha(t.v)),t.G=Date.now(),rM(t)}nX(e)}function nM(e){e.g&&(nH(e),e.g.cancel(),e.g=null)}function nF(e){nM(e),e.u&&(te.clearTimeout(e.u),e.u=null),nK(e),e.i.cancel(),e.m&&("number"==typeof e.m&&te.clearTimeout(e.m),e.m=null)}function nU(e){if(!ni(e.i)&&!e.m){e.m=!0;var t=e.Na;t4||t3(),t6||(t4(),t6=!0),t5.add(t,e),e.C=0}}function nB(e,t){var r;r=t?t.m:e.W++;let n=rz(e.I);rW(n,"SID",e.K),rW(n,"RID",r),rW(n,"AID",e.V),nV(e,n),e.o&&e.s&&nR(n,e.o,e.s),r=new rA(e,e.l,r,e.C+1),null===e.o&&(r.I=e.s),t&&(e.j=t.F.concat(e.j)),t=n$(e,r,1e3),r.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),no(e.i,r),rR(r,n,t)}function nV(e,t){e.na&&tM(e.na,function(e,r){rW(t,r,e)}),e.h&&rj({},function(e,r){rW(t,r,e)})}function n$(e,t,r){r=Math.min(e.j.length,r);var n=e.h?ts(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<r;a++){let r=i[a].g,o=i[a].map;if(0>(r-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{rj(e,function(e,r){let i=e;tr(e)&&(i=t1(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+r+"_")}catch(e){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.j.splice(0,r),t.F=e,n}function nj(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;t4||t3(),t6||(t4(),t6=!0),t5.add(t,e),e.A=0}}function nq(e){return!e.g&&!e.u&&!(3<=e.A)&&(e.ba++,e.u=ry(ts(e.Ma,e),nQ(e,e.A)),e.A++,!0)}function nH(e){null!=e.B&&(te.clearTimeout(e.B),e.B=null)}function nz(e){e.g=new rA(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=rz(e.wa);rW(t,"RID","rpc"),rW(t,"SID",e.K),rW(t,"AID",e.V),rW(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&rW(t,"TO",e.qa),rW(t,"TYPE","xmlhttp"),nV(e,t),e.o&&e.s&&nR(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var r=e.g;e=e.pa,r.L=1,r.v=rX(rz(t)),r.s=null,r.S=!0,rO(r,e)}function nK(e){null!=e.v&&(te.clearTimeout(e.v),e.v=null)}function nG(e,t){var r=null;if(e.g==t){nK(e),nH(e),e.g=null;var n=2}else{if(!na(e.i,t))return;r=t.F,nl(e.i,t),n=1}if(0!=e.H){if(t.i){if(1==n){r=t.s?t.s.length:0,t=Date.now()-t.G;var i,s=e.C;tZ(n=ru(),new rg(n,r)),nU(e)}else nj(e)}else if(3==(s=t.o)||0==s&&0<t.ca||!(1==n&&(i=t,!(ns(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=i.F.concat(e.j),!0):1!=e.H&&2!=e.H&&!(e.C>=(e.cb?0:e.eb))&&(e.m=ry(ts(e.Na,e,i),nQ(e,e.C)),e.C++,!0)))||2==n&&nq(e)))switch(r&&0<r.length&&((t=e.i).i=t.i.concat(r)),s){case 1:nW(e,5);break;case 4:nW(e,10);break;case 3:nW(e,6);break;default:nW(e,2)}}}function nQ(e,t){let r=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(r*=2),r*t}function nW(e,t){if(e.l.info("Error code "+t),2==t){var r=null;e.h&&(r=null);var n=ts(e.pb,e);r||(r=new rH("//www.google.com/images/cleardot.gif"),te.location&&"http"==te.location.protocol||rK(r,"https"),rX(r)),function(e,t){let r=new ro;if(te.Image){let n=new Image;n.onload=ta(nd,r,n,"TestLoadImage: loaded",!0,t),n.onerror=ta(nd,r,n,"TestLoadImage: error",!1,t),n.onabort=ta(nd,r,n,"TestLoadImage: abort",!1,t),n.ontimeout=ta(nd,r,n,"TestLoadImage: timeout",!1,t),te.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(r.toString(),n)}else rm(2);e.H=0,e.h&&e.h.za(t),nX(e),nF(e)}function nX(e){if(e.H=0,e.ma=[],e.h){let t=nh(e.i);(0!=t.length||0!=e.j.length)&&(tu(e.ma,t),tu(e.ma,e.j),e.i.i.length=0,tc(e.j),e.j.length=0),e.h.ya()}}function nY(e,t,r){var n=r instanceof rH?rz(r):new rH(r);if(""!=n.g)t&&(n.g=t+"."+n.g),rG(n,n.m);else{var i=te.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new rH(null);n&&rK(s,n),t&&(s.g=t),i&&rG(s,i),r&&(s.l=r),n=s}return r=e.F,t=e.Da,r&&t&&rW(n,r,t),rW(n,"VER",e.ra),nV(e,n),n}function nJ(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new n_(r&&e.Ha&&!e.va?new np({ob:!0}):e.va)).Oa(e.J),t}function nZ(){}function n0(){if(tw&&!(10<=Number(tk)))throw Error("Environmental error: no available transport.")}function n1(e,t){tJ.call(this),this.g=new nP(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!tf(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!tf(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new n4(this)}function n2(e){rT.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function n9(){rI.call(this),this.status=1}function n4(e){this.g=e}function n6(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function n5(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^r&(i^s))+n[0]+3614090360&4294967295;a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[1]+3905402710&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[2]+606105819&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[3]+3250441966&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[4]+4118548399&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[5]+1200080426&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[6]+2821735955&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[7]+4249261313&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[8]+1770035416&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[9]+2336552879&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[10]+4294925233&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[11]+2304563134&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[12]+1804603682&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[13]+4254626195&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[14]+2792965006&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[12]+2368359562&4294967295,a=t+((r=i+(a<<20&4294967295|a>>>12))^i^s)+n[5]+4294588738&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[11]+1839030562&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[14]+4259657740&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[1]+2763975236&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[7]+4139469664&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[10]+3200236656&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[13]+681279174&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[3]+3572445317&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[6]+76029189&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[9]+3654602809&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[15]+530742520&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(a<<23&4294967295|a>>>9),a=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function n3(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}(e5=n_.prototype).Oa=function(e){this.M=e},e5.ha=function(e,t,r,n){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():h.g(),this.C=this.u?rE(this.u):rE(h),this.g.onreadystatechange=ts(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){nT(this,e);return}if(e=r||"",r=new Map(this.headers),n){if(Object.getPrototypeOf(n)===Object.prototype)for(var i in n)r.set(i,n[i]);else if("function"==typeof n.keys&&"function"==typeof n.get)for(let e of n.keys())r.set(e,n.get(e));else throw Error("Unknown input type for opt_headers: "+String(n))}for(let[s,a]of(n=Array.from(r.keys()).find(e=>"content-type"==e.toLowerCase()),i=te.FormData&&e instanceof te.FormData,!(0<=th(nb,t))||n||i||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;nD(this),0<this.B&&((this.L=(s=this.g,tw&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=ts(this.ua,this)):this.A=rt(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){nT(this,e)}},e5.ua=function(){void 0!==e8&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tZ(this,"timeout"),this.abort(8))},e5.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tZ(this,"complete"),tZ(this,"abort"),nA(this))},e5.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nA(this,!0)),n_.$.N.call(this)},e5.La=function(){this.s||(this.G||this.v||this.l?nS(this):this.kb())},e5.kb=function(){nS(this)},e5.isActive=function(){return!!this.g},e5.da=function(){try{return 2<nk(this)?this.g.status:-1}catch(e){return -1}},e5.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e5.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),nw(t)}},e5.Ia=function(){return this.m},e5.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(e5=nP.prototype).ra=8,e5.H=1,e5.Na=function(e){if(this.m){if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;let i=new rA(this,this.l,e),s=this.s;if(this.U&&(s?tB(s=tF(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,r=0;r<this.j.length;r++){t:{var n=this.j[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.j.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=n$(this,i,t),rW(r=rz(this.I),"RID",e),rW(r,"CVER",22),this.F&&rW(r,"X-HTTP-Session-Id",this.F),nV(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(nN(s)))+"&"+t:this.o&&nR(r,this.o,s)),no(this.i,i),this.bb&&rW(r,"TYPE","init"),this.P?(rW(r,"$req",t),rW(r,"SID","null"),i.aa=!0,rR(i,r,null)):rR(i,r,t),this.H=2}}else 3==this.H&&(e?nB(this,e):0==this.j.length||ni(this.i)||nB(this))}},e5.Ma=function(){if(this.u=null,nz(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ry(ts(this.jb,this),e)}},e5.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rm(10),nM(this),nz(this))},e5.ib=function(){null!=this.v&&(this.v=null,nM(this),nq(this),rm(19))},e5.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rm(2)):(this.l.info("Failed to ping google.com"),rm(1))},e5.isActive=function(){return!!this.h&&this.h.isActive(this)},(e5=nZ.prototype).Ba=function(){},e5.Aa=function(){},e5.za=function(){},e5.ya=function(){},e5.isActive=function(){return!0},e5.Va=function(){},n0.prototype.g=function(e,t){return new n1(e,t)},to(n1,tJ),n1.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,r=this.h||void 0;rm(0),e.Y=t,e.na=r||{},e.G=e.aa,e.I=nY(e,null,e.Y),nU(e)},n1.prototype.close=function(){nx(this.g)},n1.prototype.u=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=t1(e),e=r);t.j.push(new nt(t.fb++,e)),3==t.H&&nU(t)},n1.prototype.N=function(){this.g.h=null,delete this.j,nx(this.g),delete this.g,n1.$.N.call(this)},to(n2,rT),to(n9,rI),to(n4,nZ),n4.prototype.Ba=function(){tZ(this.g,"a")},n4.prototype.Aa=function(e){tZ(this.g,new n2(e))},n4.prototype.za=function(e){tZ(this.g,new n9)},n4.prototype.ya=function(){tZ(this.g,"b")},to(n6,function(){this.blockSize=-1}),n6.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},n6.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,n=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=r;)n5(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(n[i++]=e.charCodeAt(s++),i==this.blockSize){n5(this,n),i=0;break}}else for(;s<t;)if(n[i++]=e[s++],i==this.blockSize){n5(this,n),i=0;break}}this.h=i,this.i+=t},n6.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.j(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n7={};function n8(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(n7,e)?n7[e]:n7[e]=new n3([0|e],0>e?-1:0):new n3([0|e],0>e?-1:0)}function ie(e){if(isNaN(e)||!isFinite(e))return ir;if(0>e)return il(ie(-e));for(var t=[],r=1,n=0;e>=r;n++)t[n]=e/r|0,r*=it;return new n3(t,0)}var it=4294967296,ir=n8(0),ii=n8(1),is=n8(16777216);function ia(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function io(e){return -1==e.h}function il(e){for(var t=e.g.length,r=[],n=0;n<t;n++)r[n]=~e.g[n];return new n3(r,~e.h).add(ii)}function ih(e,t){return e.add(il(t))}function ic(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function iu(e,t){this.g=e,this.h=t}function id(e,t){if(ia(t))throw Error("division by zero");if(ia(e))return new iu(ir,ir);if(io(e))return t=id(il(e),t),new iu(il(t.g),il(t.h));if(io(t))return t=id(e,il(t)),new iu(il(t.g),t.h);if(30<e.g.length){if(io(e)||io(t))throw Error("slowDivide_ only works with positive integers.");for(var r=ii,n=t;0>=n.X(e);)r=ip(r),n=ip(n);var i=im(r,1),s=im(n,1);for(n=im(n,2),r=im(r,2);!ia(n);){var a=s.add(n);0>=a.X(e)&&(i=i.add(r),s=a),n=im(n,1),r=im(r,1)}return t=ih(e,i.R(t)),new iu(i,t)}for(i=ir;0<=e.X(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.ea()/t.ea())))/Math.LN2))?1:Math.pow(2,n-48),a=(s=ie(r)).R(t);io(a)||0<a.X(e);)r-=n,a=(s=ie(r)).R(t);ia(s)&&(s=ii),i=i.add(s),e=ih(e,a)}return new iu(i,e)}function ip(e){for(var t=e.g.length+1,r=[],n=0;n<t;n++)r[n]=e.D(n)<<1|e.D(n-1)>>>31;return new n3(r,e.h)}function im(e,t){var r=t>>5;t%=32;for(var n=e.g.length-r,i=[],s=0;s<n;s++)i[s]=0<t?e.D(s+r)>>>t|e.D(s+r+1)<<32-t:e.D(s+r);return new n3(i,e.h)}(e5=n3.prototype).ea=function(){if(io(this))return-il(this).ea();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.D(r);e+=(0<=n?n:it+n)*t,t*=it}return e},e5.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(ia(this))return"0";if(io(this))return"-"+il(this).toString(e);for(var t=ie(Math.pow(e,6)),r=this,n="";;){var i=id(r,t).g,s=((0<(r=ih(r,i.R(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(ia(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},e5.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e5.X=function(e){return io(e=ih(this,e))?-1:ia(e)?0:1},e5.abs=function(){return io(this)?il(this):this},e5.add=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0,i=0;i<=t;i++){var s=n+(65535&this.D(i))+(65535&e.D(i)),a=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);n=a>>>16,s&=65535,a&=65535,r[i]=a<<16|s}return new n3(r,-2147483648&r[r.length-1]?-1:0)},e5.R=function(e){if(ia(this)||ia(e))return ir;if(io(this))return io(e)?il(this).R(il(e)):il(il(this).R(e));if(io(e))return il(this.R(il(e)));if(0>this.X(is)&&0>e.X(is))return ie(this.ea()*e.ea());for(var t=this.g.length+e.g.length,r=[],n=0;n<2*t;n++)r[n]=0;for(n=0;n<this.g.length;n++)for(var i=0;i<e.g.length;i++){var s=this.D(n)>>>16,a=65535&this.D(n),o=e.D(i)>>>16,l=65535&e.D(i);r[2*n+2*i]+=a*l,ic(r,2*n+2*i),r[2*n+2*i+1]+=s*l,ic(r,2*n+2*i+1),r[2*n+2*i+1]+=a*o,ic(r,2*n+2*i+1),r[2*n+2*i+2]+=s*o,ic(r,2*n+2*i+2)}for(n=0;n<t;n++)r[n]=r[2*n+1]<<16|r[2*n];for(n=t;n<2*t;n++)r[n]=0;return new n3(r,0)},e5.gb=function(e){return id(this,e).h},e5.and=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)&e.D(n);return new n3(r,this.h&e.h)},e5.or=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)|e.D(n);return new n3(r,this.h|e.h)},e5.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),r=[],n=0;n<t;n++)r[n]=this.D(n)^e.D(n);return new n3(r,this.h^e.h)},n0.prototype.createWebChannel=n0.prototype.g,n1.prototype.send=n1.prototype.u,n1.prototype.open=n1.prototype.m,n1.prototype.close=n1.prototype.close,rv.NO_ERROR=0,rv.TIMEOUT=8,rv.HTTP_ERROR=6,rw.COMPLETE="complete",rC.EventType=rb,rb.OPEN="a",rb.CLOSE="b",rb.ERROR="c",rb.MESSAGE="d",tJ.prototype.listen=tJ.prototype.O,n_.prototype.listenOnce=n_.prototype.P,n_.prototype.getLastError=n_.prototype.Sa,n_.prototype.getLastErrorCode=n_.prototype.Ia,n_.prototype.getStatus=n_.prototype.da,n_.prototype.getResponseJson=n_.prototype.Wa,n_.prototype.getResponseText=n_.prototype.ja,n_.prototype.send=n_.prototype.ha,n_.prototype.setWithCredentials=n_.prototype.Oa,n6.prototype.digest=n6.prototype.l,n6.prototype.reset=n6.prototype.reset,n6.prototype.update=n6.prototype.j,n3.prototype.add=n3.prototype.add,n3.prototype.multiply=n3.prototype.R,n3.prototype.modulo=n3.prototype.gb,n3.prototype.compare=n3.prototype.X,n3.prototype.toNumber=n3.prototype.ea,n3.prototype.toString=n3.prototype.toString,n3.prototype.getBits=n3.prototype.D,n3.fromNumber=ie,n3.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return il(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ie(Math.pow(r,8)),i=ir,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+a),r);8>a?(a=ie(Math.pow(r,a)),i=i.R(a).add(ie(o))):i=(i=i.R(n)).add(ie(o))}return i};var ig=e7.createWebChannelTransport=function(){return new n0},iy=e7.getStatEventTarget=function(){return ru()},iv=e7.ErrorCode=rv,iw=e7.EventType=rw,i_=e7.Event=rh,iE=e7.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};e7.FetchXmlHttpFactory=np;var iC=e7.WebChannel=rC,ib=e7.XhrIo=n_,iT=e7.Md5=n6,iI=e7.Integer=n3;let iS="@firebase/firestore";/**
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
 */class iA{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}/** A user with a null UID. */iA.UNAUTHENTICATED=new iA(null),// non-FirebaseAuth providers.
iA.GOOGLE_CREDENTIALS=new iA("google-credentials-uid"),iA.FIRST_PARTY=new iA("first-party-uid"),iA.MOCK_USER=new iA("mock-user");/**
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
 */let iD="10.4.0",ik=new ef("@firebase/firestore");// Helper methods are needed because variables can't be exported as read/write
function iL(){return ik.logLevel}function iN(e,...t){if(ik.logLevel<=e6.DEBUG){let r=t.map(iP);ik.debug(`Firestore (${iD}): ${e}`,...r)}}function iR(e,...t){if(ik.logLevel<=e6.ERROR){let r=t.map(iP);ik.error(`Firestore (${iD}): ${e}`,...r)}}/**
 * @internal
 */function iO(e,...t){if(ik.logLevel<=e6.WARN){let r=t.map(iP);ik.warn(`Firestore (${iD}): ${e}`,...r)}}/**
 * Converts an additional log parameter to a string representation.
 */function iP(e){if("string"==typeof e)return e;try{/**
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
 */function ix(e="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t=`FIRESTORE (${iD}) INTERNAL ASSERTION FAILED: `+e;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw iR(t),Error(t)}/**
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
 */let iM={// Causes are copied from:
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
     */UNAVAILABLE:"unavailable",/** Unrecoverable data loss or corruption. */DATA_LOSS:"data-loss"};/** An error returned by a Firestore operation. */class iF extends Z{/** @hideconstructor */constructor(/**
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
 */class iU{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class iB{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class iV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){// Fire with initial user.
e.enqueueRetryable(()=>t(iA.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class i${constructor(e){this.token=e,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ij{constructor(e){this.t=e,/** Tracks the current User. */this.currentUser=iA.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new iU;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new iU,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{iN("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(iN("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new iU)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==e?(iN("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||ix(),new iB(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||ix(),new iA(e)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class iq{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=iA.FIRST_PARTY,this.I=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);// Use array notation to prevent minification
let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class iH{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new iq(this.l,this.h,this.P))}start(e,t){// Fire with initial uid.
e.enqueueRetryable(()=>t(iA.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iz{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iK{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&iN("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,iN("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{iN("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):iN("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||ix(),this.R=e.token,new iz(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class iG{static V(){// Alphanumeric characters
let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
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
let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)// be evenly mapped to indices of `chars` via a modulo operation.
r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function iQ(e,t){return e<t?-1:e>t?1:0}/** Helper to compare arrays using isEqual(). */function iW(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
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
 */class iX{/**
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
     */t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new iF(iM.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new iF(iM.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}/**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */static now(){return iX.fromMillis(Date.now())}/**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */static fromDate(e){return iX.fromMillis(e.getTime())}/**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new iX(t,r)}/**
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
     */toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?iQ(this.nanoseconds,e.nanoseconds):iQ(this.seconds,e.seconds)}/**
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
 */class iY{constructor(e){this.timestamp=e}static fromTimestamp(e){return new iY(e)}static min(){return new iY(new iX(0,0))}static max(){return new iY(new iX(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}/** Returns a number representation of the version for use in spec tests. */toMicroseconds(){// Convert to microseconds.
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
 */class iJ{constructor(e,t,r){void 0===t?t=0:t>e.length&&ix(),void 0===r?r=e.length-t:r>e.length-t&&ix(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===iJ.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof iJ?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class iZ extends iJ{construct(e,t,r){return new iZ(e,t,r)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...e){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new iF(iM.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);// Strip leading and traling slashed.
t.push(...r.split("/").filter(e=>e.length>0))}return new iZ(t)}static emptyPath(){return new iZ([])}}let i0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */class i1 extends iJ{construct(e,t,r){return new i1(e,t,r)}/**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */static isValidIdentifier(e){return i0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),i1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}/**
     * Returns true if this field references the key of a document.
     */isKeyField(){return 1===this.length&&"__name__"===this.get(0)}/**
     * The field designating the key of a document.
     */static keyField(){return new i1(["__name__"])}/**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new iF(iM.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new iF(iM.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new iF(iM.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new iF(iM.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new i1(t)}static emptyPath(){return new i1([])}}/**
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
 */class i2{constructor(e){this.path=e}static fromPath(e){return new i2(iZ.fromString(e))}static fromName(e){return new i2(iZ.fromString(e).popFirst(5))}static empty(){return new i2(iZ.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===iZ.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return iZ.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(e){return new i2(new iZ(e.slice()))}}/**
 * Stores the latest read time, document and batch ID that were processed for an
 * index.
 */class i9{constructor(/**
     * The latest read time version that has been indexed by Firestore for this
     * field index.
     */e,/**
     * The key of the last document that was indexed for this query. Use
     * `DocumentKey.empty()` if no document has been indexed.
     */t,/*
     * The largest mutation batch id that's been processed by Firestore.
     */r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}/** Returns an offset that sorts before all regular offsets. */static min(){return new i9(iY.min(),i2.empty(),-1)}/** Returns an offset that sorts after all regular offsets. */static max(){return new i9(iY.max(),i2.empty(),-1)}}/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */class i4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function i6(e){if(e.code!==iM.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;iN("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class i5{constructor(e){// NOTE: next/catchCallback will always point to our own wrapper functions,
// not the user's raw next() or catch() callbacks.
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,// chaining.
this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&// value should be defined unless T is Void, but we can't express
// that in the type system.
this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ix(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new i5((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof i5?t:i5.resolve(t)}catch(e){return i5.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):i5.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):i5.reject(t)}static resolve(e){return new i5((t,r)=>{t(e)})}static reject(e){return new i5((t,r)=>{r(e)})}static waitFor(// eslint-disable-next-line @typescript-eslint/no-explicit-any
e){return new i5((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}/**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */static or(e){let t=i5.resolve(!1);for(let r of e)t=t.next(e=>e?i5.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}/**
     * Concurrently map all array elements through asynchronous function.
     */static mapArray(e,t){return new i5((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}/**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */static doWhile(e,t){return new i5((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}/** Verifies whether `e` is an IndexedDbTransactionError. */function i3(e){// Use name equality, as instanceof checks on errors don't work with errors
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
 */class i7{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}/** Returns whether the value represents -0. */function i8(e){// Detect if the value is -0.0. Based on polyfill from
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
 */function se(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function st(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function sr(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}i7.ae=-1;/**
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
class sn{constructor(e,t){this.comparator=e,this.root=t||ss.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(e,t){return new sn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ss.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(e){return new sn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ss.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(e){// Number of nodes that were pruned when descending right
let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(e){return this.root.reverseTraversal(e)}// Returns an iterator over the SortedMap.
getIterator(){return new si(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new si(this.root,e,this.comparator,!1)}getReverseIterator(){return new si(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new si(this.root,e,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class si{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(e);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class ss{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:ss.RED,this.left=null!=n?n:ss.EMPTY,this.right=null!=i?i:ss.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(e,t,r,n,i){return new ss(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
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
insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return ss.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return ss.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ss.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ss.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}// For testing.
checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ix();let e=this.left.check();if(e!==this.right.check())throw ix();return e+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
ss.EMPTY=null,ss.RED=!0,ss.BLACK=!1,// end LLRBEmptyNode
ss.EMPTY=new class{constructor(){this.size=0}get key(){throw ix()}get value(){throw ix()}get color(){throw ix()}get left(){throw ix()}get right(){throw ix()}// Returns a copy of the current node.
copy(e,t,r,n,i){return this}// Returns a copy of the tree, with the specified key/value added.
insert(e,t,r){return new ss(e,t)}// Returns a copy of the tree, with the specified key removed.
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
 */class sa{constructor(e){this.comparator=e,this.data=new sn(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}/** Iterates elements in order defined by "comparator" */forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new so(this.data.getIterator())}getIteratorFrom(e){return new so(this.data.getIteratorFrom(e))}/** Inserts or updates an element */add(e){return this.copy(this.data.remove(e).insert(e,!0))}/** Deletes an element */delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;// Make sure `result` always refers to the larger one of the two sets.
return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof sa)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new sa(this.comparator);return t.data=e,t}}class so{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class sl{constructor(e){this.fields=e,// Sort the field mask to support `FieldMask.isEqual()` and assert below.
e.sort(i1.comparator)}static empty(){return new sl([])}/**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */unionWith(e){let t=new sa(i1.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new sl(t.toArray())}/**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return iW(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class sh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class sc{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&e instanceof DOMException?new sh("Invalid base64 string: "+e):e}}(e);return new sc(t)}static fromUint8Array(e){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let t=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new sc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return iQ(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sc.EMPTY_BYTE_STRING=new sc("");let su=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */function sd(e){// The json interface (for the browser) will return an iso timestamp string,
// while the proto js library (for node) will return a
// google.protobuf.Timestamp instance.
if(e||ix(),"string"==typeof e){// The date string can have higher precision (nanos) than the Date class
// (millis), so we do some custom parsing here.
// Parse the nanos right out of the string.
let t=0,r=su.exec(e);if(r||ix(),r[1]){// Pad the fraction out to 9 digits (nanos).
let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}// Parse the date to get the seconds.
let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:sp(e.seconds),nanos:sp(e.nanos)}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function sp(e){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof e?e:"string"==typeof e?Number(e):0}/** Converts the possible Proto types for Blobs into a ByteString. */function sf(e){return"string"==typeof e?sc.fromBase64String(e):sc.fromUint8Array(e)}/**
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
 */function sm(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 *//**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */function sg(e){let t=e.mapValue.fields.__previous_value__;return sm(t)?sg(t):t}/**
 * Returns the local time at which this timestamp was first set.
 */function sy(e){let t=sd(e.mapValue.fields.__local_write_time__.timestampValue);return new iX(t.seconds,t.nanos)}/**
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
 */class sv{/**
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
     */constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class sw{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sw("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sw&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */let s_={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};/** Extracts the backend's type order for the provided value. */function sE(e){return"nullValue"in e?0/* TypeOrder.NullValue */:"booleanValue"in e?1/* TypeOrder.BooleanValue */:"integerValue"in e||"doubleValue"in e?2/* TypeOrder.NumberValue */:"timestampValue"in e?3/* TypeOrder.TimestampValue */:"stringValue"in e?5/* TypeOrder.StringValue */:"bytesValue"in e?6/* TypeOrder.BlobValue */:"referenceValue"in e?7/* TypeOrder.RefValue */:"geoPointValue"in e?8/* TypeOrder.GeoPointValue */:"arrayValue"in e?9/* TypeOrder.ArrayValue */:"mapValue"in e?sm(e)?4/* TypeOrder.ServerTimestampValue */:sO(e)?9007199254740991/* TypeOrder.MaxValue */:10/* TypeOrder.ObjectValue */:ix()}/** Tests `left` and `right` for equality based on the backend semantics. */function sC(e,t){if(e===t)return!0;let r=sE(e);if(r!==sE(t))return!1;switch(r){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return!0;case 1/* TypeOrder.BooleanValue */:return e.booleanValue===t.booleanValue;case 4/* TypeOrder.ServerTimestampValue */:return sy(e).isEqual(sy(t));case 3/* TypeOrder.TimestampValue */:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=sd(e.timestampValue),n=sd(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue===t.stringValue;case 6/* TypeOrder.BlobValue */:return sf(e.bytesValue).isEqual(sf(t.bytesValue));case 7/* TypeOrder.RefValue */:return e.referenceValue===t.referenceValue;case 8/* TypeOrder.GeoPointValue */:return sp(e.geoPointValue.latitude)===sp(t.geoPointValue.latitude)&&sp(e.geoPointValue.longitude)===sp(t.geoPointValue.longitude);case 2/* TypeOrder.NumberValue */:return function(e,t){if("integerValue"in e&&"integerValue"in t)return sp(e.integerValue)===sp(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=sp(e.doubleValue),n=sp(t.doubleValue);return r===n?i8(r)===i8(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9/* TypeOrder.ArrayValue */:return iW(e.arrayValue.values||[],t.arrayValue.values||[],sC);case 10/* TypeOrder.ObjectValue */:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(se(r)!==se(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!sC(r[e],n[e])))return!1;return!0}(e,t);default:return ix()}}function sb(e,t){return void 0!==(e.values||[]).find(e=>sC(e,t))}function sT(e,t){if(e===t)return 0;let r=sE(e),n=sE(t);if(r!==n)return iQ(r,n);switch(r){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return 0;case 1/* TypeOrder.BooleanValue */:return iQ(e.booleanValue,t.booleanValue);case 2/* TypeOrder.NumberValue */:return function(e,t){let r=sp(e.integerValue||e.doubleValue),n=sp(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3/* TypeOrder.TimestampValue */:return sI(e.timestampValue,t.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return sI(sy(e),sy(t));case 5/* TypeOrder.StringValue */:return iQ(e.stringValue,t.stringValue);case 6/* TypeOrder.BlobValue */:return function(e,t){let r=sf(e),n=sf(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7/* TypeOrder.RefValue */:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=iQ(r[e],n[e]);if(0!==t)return t}return iQ(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8/* TypeOrder.GeoPointValue */:return function(e,t){let r=iQ(sp(e.latitude),sp(t.latitude));return 0!==r?r:iQ(sp(e.longitude),sp(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9/* TypeOrder.ArrayValue */:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=sT(r[e],n[e]);if(t)return t}return iQ(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10/* TypeOrder.ObjectValue */:return function(e,t){if(e===s_.mapValue&&t===s_.mapValue)return 0;if(e===s_.mapValue)return 1;if(t===s_.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);// Even though MapValues are likely sorted correctly based on their insertion
// order (e.g. when received from the backend), local modifications can bring
// elements out of order. We need to re-sort the elements to ensure that
// canonical IDs are independent of insertion order.
n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=iQ(n[e],s[e]);if(0!==t)return t;let a=sT(r[n[e]],i[s[e]]);if(0!==a)return a}return iQ(n.length,s.length)}(e.mapValue,t.mapValue);default:throw ix()}}function sI(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return iQ(e,t);let r=sd(e),n=sd(t),i=iQ(r.seconds,n.seconds);return 0!==i?i:iQ(r.nanos,n.nanos)}function sS(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=sd(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?sf(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,i2.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=sS(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){// Iteration order in JavaScript is not guaranteed. To ensure that we generate
// matching canonical IDs for identical maps, we need to sort the keys.
let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${sS(e.fields[i])}`;return r+"}"}(e.mapValue):ix()}/** Returns true if `value` is an IntegerValue . */function sA(e){return!!e&&"integerValue"in e}/** Returns true if `value` is a DoubleValue. *//** Returns true if `value` is an ArrayValue. */function sD(e){return!!e&&"arrayValue"in e}/** Returns true if `value` is a NullValue. */function sk(e){return!!e&&"nullValue"in e}/** Returns true if `value` is NaN. */function sL(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}/** Returns true if `value` is a MapValue. */function sN(e){return!!e&&"mapValue"in e}/** Creates a deep copy of `source`. */function sR(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return st(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=sR(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=sR(e.arrayValue.values[r]);return t}return Object.assign({},e)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */function sO(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class sP{constructor(e){this.value=e}static empty(){return new sP({mapValue:{}})}/**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!sN(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}/**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sR(t)}/**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */setAll(e){let t=i1.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){// Insert the accumulated changes at this parent location
let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=sR(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}/**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */delete(e){let t=this.field(e.popLast());sN(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sC(this.value,e.value)}/**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];sN(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}/**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */applyChanges(e,t,r){for(let n of(st(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new sP(sR(this.value))}}/**
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
 */class sx{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}/**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */static newInvalidDocument(e){return new sx(e,0/* DocumentType.INVALID */,/* version */iY.min(),/* readTime */iY.min(),/* createTime */iY.min(),sP.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */static newFoundDocument(e,t,r,n){return new sx(e,1/* DocumentType.FOUND_DOCUMENT */,/* version */t,/* readTime */iY.min(),/* createTime */r,n,0/* DocumentState.SYNCED */)}/** Creates a new document that is known to not exist at the given version. */static newNoDocument(e,t){return new sx(e,2/* DocumentType.NO_DOCUMENT */,/* version */t,/* readTime */iY.min(),/* createTime */iY.min(),sP.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */static newUnknownDocument(e,t){return new sx(e,3/* DocumentType.UNKNOWN_DOCUMENT */,/* version */t,/* readTime */iY.min(),/* createTime */iY.min(),sP.empty(),2/* DocumentState.HAS_COMMITTED_MUTATIONS */)}/**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */convertToFoundDocument(e,t){// If a document is switching state from being an invalid or deleted
// document to a valid (FOUND_DOCUMENT) document, either due to receiving an
// update from Watch or due to applying a local set mutation on top
// of a deleted document, our best guess about its createTime would be the
// version at which the document transitioned to a FOUND_DOCUMENT.
return this.createTime.isEqual(iY.min())&&(2/* DocumentType.NO_DOCUMENT */===this.documentType||0/* DocumentType.INVALID */===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1/* DocumentType.FOUND_DOCUMENT */,this.data=t,this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */convertToNoDocument(e){return this.version=e,this.documentType=2/* DocumentType.NO_DOCUMENT */,this.data=sP.empty(),this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */convertToUnknownDocument(e){return this.version=e,this.documentType=3/* DocumentType.UNKNOWN_DOCUMENT */,this.data=sP.empty(),this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasCommittedMutations(){return this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasLocalMutations(){return this.documentState=1/* DocumentState.HAS_LOCAL_MUTATIONS */,this.version=iY.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1/* DocumentState.HAS_LOCAL_MUTATIONS */===this.documentState}get hasCommittedMutations(){return 2/* DocumentState.HAS_COMMITTED_MUTATIONS */===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0/* DocumentType.INVALID */!==this.documentType}isFoundDocument(){return 1/* DocumentType.FOUND_DOCUMENT */===this.documentType}isNoDocument(){return 2/* DocumentType.NO_DOCUMENT */===this.documentType}isUnknownDocument(){return 3/* DocumentType.UNKNOWN_DOCUMENT */===this.documentType}isEqual(e){return e instanceof sx&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sx(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sM{constructor(e,t){this.position=e,this.inclusive=t}}function sF(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?i2.comparator(i2.fromName(a.referenceValue),r.key):sT(a,r.data.field(s.field)),"desc"/* Direction.DESCENDING */===s.dir&&(n*=-1),0!==n)break}return n}/**
 * Returns true if a document sorts after a bound using the provided sort
 * order.
 */function sU(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!sC(e.position[r],t.position[r]))return!1;return!0}/**
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
 */class sB{constructor(e,t="asc"/* Direction.ASCENDING */){this.field=e,this.dir=t}}/**
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
 */class sV{}class s$ extends sV{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t,r){return e.isKeyField()?"in"/* Operator.IN */===t||"not-in"/* Operator.NOT_IN */===t?this.createKeyFieldInFilter(e,t,r):new sz(e,t,r):"array-contains"/* Operator.ARRAY_CONTAINS */===t?new sW(e,r):"in"/* Operator.IN */===t?new sX(e,r):"not-in"/* Operator.NOT_IN */===t?new sY(e,r):"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===t?new sJ(e,r):new s$(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"/* Operator.IN */===t?new sK(e,r):new sG(e,r)}matches(e){let t=e.data.field(this.field);// Types do not have to match in NOT_EQUAL filters.
return"!="/* Operator.NOT_EQUAL */===this.op?null!==t&&this.matchesComparison(sT(t,this.value)):null!==t&&sE(this.value)===sE(t)&&this.matchesComparison(sT(t,this.value));// Only compare types with matching backend order (such as double and int).
}matchesComparison(e){switch(this.op){case"<"/* Operator.LESS_THAN */:return e<0;case"<="/* Operator.LESS_THAN_OR_EQUAL */:return e<=0;case"=="/* Operator.EQUAL */:return 0===e;case"!="/* Operator.NOT_EQUAL */:return 0!==e;case">"/* Operator.GREATER_THAN */:return e>0;case">="/* Operator.GREATER_THAN_OR_EQUAL */:return e>=0;default:return ix()}}isInequality(){return["<"/* Operator.LESS_THAN */,"<="/* Operator.LESS_THAN_OR_EQUAL */,">"/* Operator.GREATER_THAN */,">="/* Operator.GREATER_THAN_OR_EQUAL */,"!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class sj extends sV{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}/**
     * Creates a filter based on the provided arguments.
     */static create(e,t){return new sj(e,t)}matches(e){return sq(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}// Returns a mutable copy of `this.filters`
getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}// Performs a depth-first search to find and return the first FieldFilter in the composite filter
// that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
// predicate.
le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}}function sq(e){return"and"/* CompositeOperator.AND */===e.op}/**
 * Returns true if this filter does not contain any composite filters. Returns false otherwise.
 */function sH(e){for(let t of e.filters)if(t instanceof sj)return!1;return!0}class sz extends s${constructor(e,t,r){super(e,t,r),this.key=i2.fromName(r.referenceValue)}matches(e){let t=i2.comparator(e.key,this.key);return this.matchesComparison(t)}}/** Filter that matches on key fields within an array. */class sK extends s${constructor(e,t){super(e,"in"/* Operator.IN */,t),this.keys=sQ("in"/* Operator.IN */,t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}/** Filter that matches on key fields not present within an array. */class sG extends s${constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t),this.keys=sQ("not-in"/* Operator.NOT_IN */,t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function sQ(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>i2.fromName(e.referenceValue))}/** A Filter that implements the array-contains operator. */class sW extends s${constructor(e,t){super(e,"array-contains"/* Operator.ARRAY_CONTAINS */,t)}matches(e){let t=e.data.field(this.field);return sD(t)&&sb(t.arrayValue,this.value)}}/** A Filter that implements the IN operator. */class sX extends s${constructor(e,t){super(e,"in"/* Operator.IN */,t)}matches(e){let t=e.data.field(this.field);return null!==t&&sb(this.value.arrayValue,t)}}/** A Filter that implements the not-in operator. */class sY extends s${constructor(e,t){super(e,"not-in"/* Operator.NOT_IN */,t)}matches(e){if(sb(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!sb(this.value.arrayValue,t)}}/** A Filter that implements the array-contains-any operator. */class sJ extends s${constructor(e,t){super(e,"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,t)}matches(e){let t=e.data.field(this.field);return!(!sD(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>sb(this.value.arrayValue,e))}}/**
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
class sZ{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */function s0(e,t=null,r=[],n=[],i=null,s=null,a=null){return new sZ(e,t,r,n,i,s,a)}function s1(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof s$)// the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return t.field.canonicalString()+t.op.toString()+sS(t.value);if(sH(t)&&sq(t))// In the new SDK versions, the developer may use an explicit AND filter.
    // To stay consistent with the old usages, we add a special case to ensure
    // the canonical ID for these two are the same. For example:
    // `col.whereEquals("a", 1).whereEquals("b", 2)` should have the same
    // canonical ID as `col.where(and(equals("a",1), equals("b",2)))`.
    return t.filters.map(t=>e(t)).join(",");{// filter instanceof CompositeFilter
    let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>sS(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>sS(e)).join(",")),e.he=t}return e.he}function s2(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof s$?r instanceof s$&&t.op===r.op&&t.field.isEqual(r.field)&&sC(t.value,r.value):t instanceof sj?r instanceof sj&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void ix()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!sU(e.startAt,t.startAt)&&sU(e.endAt,t.endAt)}function s9(e){return i2.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/** Returns the number of segments of a perfect index for this target. *//**
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
 */class s4{/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */constructor(e,t=null,r=[],n=[],i=null,s="F"/* LimitType.First */,a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,// non-aggregate queries.
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
 */function s6(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}/**
 * Returns the normalized order-by constraint that is used to execute the Query,
 * which can be different from the order-by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`). The normalized order-by
 * includes implicit order-bys in addition to the explicit user provided
 * order-bys.
 */function s5(e){if(null===e.Pe){e.Pe=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),r=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===r)// inequality filter field for it to be a valid query.
// Note that the default inequality field and key ordering is ascending.
t.isKeyField()||e.Pe.push(new sB(t)),e.Pe.push(new sB(i1.keyField(),"asc"/* Direction.ASCENDING */));else{let t=!1;for(let r of e.explicitOrderBy)e.Pe.push(r),r.field.isKeyField()&&(t=!0);if(!t){// The order of the implicit key ordering always matches the last
// explicit order-by
let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc"/* Direction.ASCENDING */;e.Pe.push(new sB(i1.keyField(),t))}}}return e.Pe}/**
 * Converts this `Query` instance to its corresponding `Target` representation.
 */function s3(e){return e.Ie||(e.Ie=/**
 * Converts this `Query` instance to its corresponding `Target` representation,
 * for use within an aggregate query. Unlike targets for non-aggregate queries,
 * aggregate query targets do not contain normalized order-bys, they only
 * contain explicit order-bys.
 */function(e,t){if("F"/* LimitType.First */===e.limitType)return s0(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{// Flip the orderBy directions since we want the last results
t=t.map(e=>{let t="desc"/* Direction.DESCENDING */===e.dir?"asc"/* Direction.ASCENDING */:"desc"/* Direction.DESCENDING */;return new sB(e.field,t)});// We need to swap the cursors to match the now-flipped query ordering.
let r=e.endAt?new sM(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new sM(e.startAt.position,e.startAt.inclusive):null;// Now return as a LimitType.First query.
return s0(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,s5(e))),e.Ie}function s7(e,t,r){return new s4(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function s8(e,t){return s2(s3(e),s3(t))&&e.limitType===t.limitType}// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function ae(e){return`${s1(s3(e))}|lt:${e.limitType}`}function at(e){var t;let r;return`Query(target=${r=(t=s3(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>/** Returns a debug description for `filter`. */(function e(t){return t instanceof s$?`${t.field.canonicalString()} ${t.op} ${sS(t.value)}`:t instanceof sj?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>sS(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>sS(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}/** Returns whether `doc` matches the constraints of `query`. */function ar(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):i2.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){// We must use `queryNormalizedOrderBy()` to get the list of all orderBys (both implicit and explicit).
// Note that for OR queries, orderBy applies to all disjunction terms and implicit orderBys must
// be taken into account. For example, the query "a > 1 || b==1" has an implicit "orderBy a" due
// to the inequality, and is evaluated as "a > 1 orderBy a || b==1 orderBy a".
// A document with content of {b:1} matches the filters, but does not match the orderBy because
// it's missing the field 'a'.
for(let r of s5(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */function(e,t,r){let n=sF(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,s5(e),t))&&(!e.endAt||!!function(e,t,r){let n=sF(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,s5(e),t))}/**
 * Returns a new comparator function that can be used to compare two documents
 * based on the Query's ordering constraint.
 */function an(e){return(t,r)=>{let n=!1;for(let i of s5(e)){let e=function(e,t,r){let n=e.field.isKeyField()?i2.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?sT(n,i):ix()}(e.field,t,r);switch(e.dir){case"asc"/* Direction.ASCENDING */:return n;case"desc"/* Direction.DESCENDING */:return -1*n;default:return ix()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
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
 */class ai{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,/**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */this.inner={},/** The number of entries stored in the map */this.innerSize=0}/** Get a value for this key, or undefined if it does not exist. */get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}/** Put this key and value in the map. */set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}/**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){st(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return sr(this.inner)}size(){return this.innerSize}}/**
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
 */let as=new sn(i2.comparator),aa=new sn(i2.comparator);function ao(...e){let t=aa;for(let r of e)t=t.insert(r.key,r);return t}function al(e){let t=aa;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ah(){return new ai(e=>e.toString(),(e,t)=>e.isEqual(t))}let ac=new sn(i2.comparator),au=new sa(i2.comparator);function ad(...e){let t=au;for(let r of e)t=t.add(r);return t}let ap=new sa(iQ);/**
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
 */function af(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:i8(t)?"-0":t}}/**
 * Returns an IntegerValue for `value`.
 */function am(e){return{integerValue:""+e}}/**
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
 *//** Used to represent a field transform on a mutation. */class ag{constructor(){// Make sure that the structural type of `TransformOperation` is unique.
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
 */function ay(e,t){return e instanceof ab?/** Returns true if `value` is either an IntegerValue or a DoubleValue. */sA(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}/** Transforms a value into a server-generated timestamp. */class av extends ag{}/** Transforms an array value via a union operation. */class aw extends ag{constructor(e){super(),this.elements=e}}function a_(e,t){let r=aI(t);for(let t of e.elements)r.some(e=>sC(e,t))||r.push(t);return{arrayValue:{values:r}}}/** Transforms an array value via a remove operation. */class aE extends ag{constructor(e){super(),this.elements=e}}function aC(e,t){let r=aI(t);for(let t of e.elements)r=r.filter(e=>!sC(e,t));return{arrayValue:{values:r}}}/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */class ab extends ag{constructor(e,t){super(),this.serializer=e,this.Te=t}}function aT(e){return sp(e.integerValue||e.doubleValue)}function aI(e){return sD(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/** The result of successfully applying a mutation to the backend. */class aS{constructor(/**
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
 */class aA{constructor(e,t){this.updateTime=e,this.exists=t}/** Creates a new empty Precondition. */static none(){return new aA}/** Creates a new Precondition with an exists flag. */static exists(e){return new aA(void 0,e)}/** Creates a new Precondition based on a version a document exists at. */static updateTime(e){return new aA(e)}/** Returns whether this Precondition is empty. */get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}/** Returns true if the preconditions is valid for the given document. */function aD(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}/**
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
 */class ak{}/**
 * A utility method to calculate a `Mutation` representing the overlay from the
 * final state of the document, and a `FieldMask` representing the fields that
 * are mutated by the local mutations.
 */function aL(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;// mask is null when sets or deletes are applied to the current document.
if(null===t)return e.isNoDocument()?new aU(e.key,aA.none()):new aO(e.key,e.data,aA.none());{let r=e.data,n=sP.empty(),i=new sa(i1.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);// If we are deleting a nested field, we take the immediate parent as
// the mask used to construct the resulting mutation.
// Justification: Nested fields can create parent fields implicitly. If
// only a leaf entry is deleted in later mutations, the parent field
// should still remain, but we may have lost this information.
// Consider mutation (foo.bar 1), then mutation (foo.bar delete()).
// This leaves the final result (foo, {}). Despite the fact that `doc`
// has the correct result, `foo` is not in `mask`, and the resulting
// mutation would miss `foo`.
null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new aP(e.key,n,new sl(i.toArray()),aA.none())}}/**
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
 */function aN(e,t,r,n){return e instanceof aO?function(e,t,r,n){if(!aD(e.precondition,t))// caused a name collision).
return r;let i=e.value.clone(),s=aF(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null;// SetMutation overwrites all fields.
}(e,t,r,n):e instanceof aP?function(e,t,r,n){if(!aD(e.precondition,t))return r;let i=aF(e.fieldTransforms,n,t),s=t.data;return(s.setAll(ax(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):aD(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function aR(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&iW(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof aw&&n instanceof aw||r instanceof aE&&n instanceof aE?iW(r.elements,n.elements,sC):r instanceof ab&&n instanceof ab?sC(r.Te,n.Te):r instanceof av&&n instanceof av)})))&&(0/* MutationType.Set */===e.type?e.value.isEqual(t.value):1/* MutationType.Patch */!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */class aO extends ak{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0/* MutationType.Set */}getFieldMask(){return null}}class aP extends ak{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1/* MutationType.Patch */}getFieldMask(){return this.fieldMask}}function ax(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */function aM(e,t,r){var n;let i=new Map;e.length===r.length||ix();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof aw?a_(o,l):o instanceof aE?aC(o,l):n))}return i}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The document to apply transforms on.
 * @returns The transform results list.
 */function aF(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof av?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};// We should avoid storing deeply nested server timestamp map values
// because we never use the intermediate "previous values".
// For example:
// previous: 42L, add: t1, result: t1 -> 42L
// previous: t1,  add: t2, result: t2 -> 42L (NOT t2 -> t1 -> 42L)
// previous: t2,  add: t3, result: t3 -> 42L (NOT t3 -> t2 -> t1 -> 42L)
// `getPreviousValue` recursively traverses server timestamps to find the
// least recent Value.
return t&&sm(t)&&(t=sg(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof aw?a_(e,s):e instanceof aE?aC(e,s):function(e,t){// PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
// precision and resolves overflows by reducing precision, we do not
// manually cap overflows at 2^63.
let r=ay(e,t),n=aT(r)+aT(e.Te);return sA(r)&&sA(e.Te)?am(n):af(e.serializer,n)}(e,s))}return n}/** A mutation that deletes the document at the given key. */class aU extends ak{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2/* MutationType.Delete */,this.fieldTransforms=[]}getFieldMask(){return null}}class aB extends ak{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3/* MutationType.Verify */,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aV{/**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}/**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof aO?function(e,t,r){// Unlike setMutationApplyToLocalView, if we're applying a mutation to a
// remote document the server has accepted the mutation so the precondition
// must have held.
let n=e.value.clone(),i=aM(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof aP?function(e,t,r){if(!aD(e.precondition,t))// matched on the backend. We therefore must not have the expected version
// of the document in our cache and convert to an UnknownDocument with a
// known updateTime.
return void t.convertToUnknownDocument(r.version);let n=aM(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(ax(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){// Unlike applyToLocalView, if we're applying a mutation to a remote
// document the server has accepted the mutation so the precondition must
// have held.
t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}/**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */applyToLocalView(e,t){// First, apply the base state. This allows us to apply non-idempotent
// transform against a consistent set of values.
for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=aN(r,e,t,this.localWriteTime));// Second, apply all user-provided mutations.
for(let r of this.mutations)r.key.isEqual(e.key)&&(t=aN(r,e,t,this.localWriteTime));return t}/**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */applyToLocalDocumentSet(e,t){// TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
// directly (as done in `applyToLocalView()`), we can reduce the complexity
// to O(n).
let r=ah();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields);// Set mutatedFields to null if the document is only from local mutations.
// This creates a Set or Delete mutation, instead of trying to create a
// patch mutation as the overlay.
a=t.has(n.key)?null:a;let o=aL(s,a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(iY.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ad())}isEqual(e){return this.batchId===e.batchId&&iW(this.mutations,e.mutations,(e,t)=>aR(e,t))&&iW(this.baseMutations,e.baseMutations,(e,t)=>aR(e,t))}}/** The result of applying a mutation batch to the backend. */class a${constructor(e,t,r,/**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}/**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */static from(e,t,r){e.mutations.length===r.length||ix();let n=ac,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new a$(e,t,r,n)}}/**
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
 */class aj{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class aq{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */function aH(e){if(void 0===e)// to send invalid proto messages) we may get an error with no GRPC code.
return iR("GRPC error has no .code"),iM.UNKNOWN;switch(e){case c.OK:return iM.OK;case c.CANCELLED:return iM.CANCELLED;case c.UNKNOWN:return iM.UNKNOWN;case c.DEADLINE_EXCEEDED:return iM.DEADLINE_EXCEEDED;case c.RESOURCE_EXHAUSTED:return iM.RESOURCE_EXHAUSTED;case c.INTERNAL:return iM.INTERNAL;case c.UNAVAILABLE:return iM.UNAVAILABLE;case c.UNAUTHENTICATED:return iM.UNAUTHENTICATED;case c.INVALID_ARGUMENT:return iM.INVALID_ARGUMENT;case c.NOT_FOUND:return iM.NOT_FOUND;case c.ALREADY_EXISTS:return iM.ALREADY_EXISTS;case c.PERMISSION_DENIED:return iM.PERMISSION_DENIED;case c.FAILED_PRECONDITION:return iM.FAILED_PRECONDITION;case c.ABORTED:return iM.ABORTED;case c.OUT_OF_RANGE:return iM.OUT_OF_RANGE;case c.UNIMPLEMENTED:return iM.UNIMPLEMENTED;case c.DATA_LOSS:return iM.DATA_LOSS;default:return ix()}}/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(u=c||(c={}))[u.OK=0]="OK",u[u.CANCELLED=1]="CANCELLED",u[u.UNKNOWN=2]="UNKNOWN",u[u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u[u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u[u.NOT_FOUND=5]="NOT_FOUND",u[u.ALREADY_EXISTS=6]="ALREADY_EXISTS",u[u.PERMISSION_DENIED=7]="PERMISSION_DENIED",u[u.UNAUTHENTICATED=16]="UNAUTHENTICATED",u[u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u[u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u[u.ABORTED=10]="ABORTED",u[u.OUT_OF_RANGE=11]="OUT_OF_RANGE",u[u.UNIMPLEMENTED=12]="UNIMPLEMENTED",u[u.INTERNAL=13]="INTERNAL",u[u.UNAVAILABLE=14]="UNAVAILABLE",u[u.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let az=new iI([4294967295,4294967295],0);// Hash a string using md5 hashing algorithm.
function aK(e){let t=(new TextEncoder).encode(e),r=new iT;return r.update(t),new Uint8Array(r.digest())}// Interpret the 16 bytes array as two 64-bit unsigned integers, encoded using
// 2’s complement using little endian.
function aG(e){let t=new DataView(e.buffer),r=t.getUint32(0,/* littleEndian= */!0),n=t.getUint32(4,/* littleEndian= */!0),i=t.getUint32(8,/* littleEndian= */!0),s=t.getUint32(12,/* littleEndian= */!0);return[new iI([r,n],0),new iI([i,s],0)]}class aQ{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new aW(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new aW(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new aW(`Invalid padding when bitmap length is 0: ${t}`);this.Ae=8*e.length-t,this.Re=iI.fromNumber(this.Ae)}// Calculate the ith hash value based on the hashed 64bit integers,
// and calculate its corresponding bit index in the bitmap to be checked.
Ve(e,t,r){// Calculate hashed value h(i) = h1 + (i * h2).
let n=e.add(t.multiply(iI.fromNumber(r)));// Wrap if hash value overflow 64bit.
return 1===n.compare(az)&&(n=new iI([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Re).toNumber()}// Return whether the bit on the given index in the bitmap is set to 1.
me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){// Empty bitmap should always return false on membership check.
if(0===this.Ae)return!1;let t=aK(e),[r,n]=aG(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);if(!this.me(t))return!1}return!0}/** Create bloom filter for testing purposes only. */static create(e,t,r){let n=new Uint8Array(Math.ceil(e/8)),i=new aQ(n,e%8==0?0:8-e%8,t);return r.forEach(e=>i.insert(e)),i}insert(e){if(0===this.Ae)return;let t=aK(e),[r,n]=aG(t);for(let e=0;e<this.hashCount;e++){let t=this.Ve(r,n,e);this.fe(t)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class aW extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class aX{constructor(/**
     * The snapshot version this event brings us up to, or MIN if not set.
     */e,/**
     * A map from target to changes to the target. See TargetChange.
     */t,/**
     * A map of targets that is known to be inconsistent, and the purpose for
     * re-listening. Listens for these targets should be re-established without
     * resume tokens.
     */r,/**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */n,/**
     * A set of which document updates are due only to limbo resolution targets.
     */i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}/**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */// PORTING NOTE: Multi-tab only
static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,aY.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new aX(iY.min(),n,new sn(iQ),as,ad())}}/**
 * A TargetChange specifies the set of changes for a specific target as part of
 * a RemoteEvent. These changes track which documents are added, modified or
 * removed, as well as the target's resume token and whether the target is
 * marked CURRENT.
 * The actual changes *to* documents are not part of the TargetChange since
 * documents may be part of multiple targets.
 */class aY{constructor(/**
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
     */r,/**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */n,/**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}/**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new aY(r,t,ad(),ad(),ad())}}/**
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
 */class aJ{constructor(/** The new document applies to all of these targets. */e,/** The new document is removed from all of these targets. */t,/** The key of the document for this change. */r,/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */n){this.ge=e,this.removedTargetIds=t,this.key=r,this.pe=n}}class aZ{constructor(e,t){this.targetId=e,this.ye=t}}class a0{constructor(/** What kind of change occurred to the watch target. */e,/** The target IDs that were added/removed/set. */t,/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */r=sc.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}/** Tracks the internal state of a Watch target. */class a1{constructor(){/**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */this.we=0,/**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */this.Se=a4(),/** See public getters for explanations of these fields. */this.be=sc.EMPTY_BYTE_STRING,this.De=!1,/**
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
     */xe(){let e=ad(),t=ad(),r=ad();return this.Se.forEach((n,i)=>{switch(i){case 0/* ChangeType.Added */:e=e.add(n);break;case 2/* ChangeType.Modified */:t=t.add(n);break;case 1/* ChangeType.Removed */:r=r.add(n);break;default:ix()}}),new aY(this.be,this.De,e,t,r)}/**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */Oe(){this.Ce=!1,this.Se=a4()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}}/**
 * A helper class to accumulate watch changes into a RemoteEvent.
 */class a2{constructor(e){this.Qe=e,/** The internal state of all tracked targets. */this.Ke=new Map,/** Keeps track of the documents to update since the last raised snapshot. */this.$e=as,/** A mapping of document keys to their set of target IDs. */this.Ue=a9(),/**
         * A map of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */this.We=new sn(iQ)}/**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}/** Processes and adds the WatchTargetChange to the current set of changes. */He(e){this.forEachTarget(e,t=>{let r=this.Je(t);switch(e.state){case 0/* WatchTargetChangeState.NoChange */:this.Ye(t)&&r.Me(e.resumeToken);break;case 1/* WatchTargetChangeState.Added */:// We need to decrement the number of pending acks needed from watch
// for this targetId.
r.ke(),r.ve||// We have a freshly added target, so we need to reset any state
// that we had previously. This can happen e.g. when remove and add
// back a target for existence filter mismatches.
r.Oe(),r.Me(e.resumeToken);break;case 2/* WatchTargetChangeState.Removed */:// We need to keep track of removed targets to we can post-filter and
// remove any target changes.
// We need to decrement the number of pending acks needed from watch
// for this targetId.
r.ke(),r.ve||this.removeTarget(t);break;case 3/* WatchTargetChangeState.Current */:this.Ye(t)&&(r.qe(),r.Me(e.resumeToken));break;case 4/* WatchTargetChangeState.Reset */:this.Ye(t)&&// Reset the target and synthesizes removes for all existing
// documents. The backend will re-add any documents that still
// match the target before it sends the next global snapshot.
(this.Ze(t),r.Me(e.resumeToken));break;default:ix()}})}/**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,r)=>{this.Ye(r)&&t(r)})}/**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */Xe(e){let t=e.targetId,r=e.ye.count,n=this.et(t);if(n){let i=n.target;if(s9(i)){if(0===r){// The existence filter told us the document does not exist. We deduce
// that this document does not exist and apply a deleted document to
// our updates. Without applying this deleted document there might be
// another query that will raise this document as part of a snapshot
// until it is resolved, essentially exposing inconsistency between
// queries.
let e=new i2(i.path);this.je(t,e,sx.newNoDocument(e,iY.min()))}else 1===r||ix()}else{let n=this.tt(t);// Existence filter mismatch. Mark the documents as being in limbo, and
// raise a snapshot with `isFromCache:true`.
if(n!==r){// Apply bloom filter to identify and mark removed documents.
let r=this.nt(e),i=r?this.rt(r,e,n):1/* BloomFilterApplicationStatus.Skipped */;0/* BloomFilterApplicationStatus.Success */!==i&&(// If bloom filter application fails, we reset the mapping and
// trigger re-run of the query.
this.Ze(t),this.We=this.We.insert(t,2/* BloomFilterApplicationStatus.FalsePositive */===i?"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */))}}}}/**
     * Parse the bloom filter from the "unchanged_names" field of an existence
     * filter.
     */nt(e){let t,r;let n=e.ye.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=sf(i).toUint8Array()}catch(e){if(e instanceof sh)return iO("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{// BloomFilter throws error if the inputs are invalid.
r=new aQ(t,s,a)}catch(e){return iO(e instanceof aW?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ae?null:r}/**
     * Apply bloom filter to remove the deleted documents, and return the
     * application status.
     */rt(e,t,r){return t.ye.count===r-this.ot(e,t.targetId)?0/* BloomFilterApplicationStatus.Success */:2/* BloomFilterApplicationStatus.FalsePositive */}/**
     * Filter out removed documents based on bloom filter membership result and
     * return number of documents removed.
     */ot(e,t){let r=this.Qe.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Qe.st(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.je(t,r,/*updatedDocument=*/null),n++)}),n}/**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */_t(e){let t=new Map;this.Ke.forEach((r,n)=>{let i=this.et(n);if(i){if(r.current&&s9(i.target)){// Document queries for document that don't exist can produce an empty
// result set. To update our local cache, we synthesize a document
// delete if we have not previously received the document. This
// resolves the limbo state of the document, removing it from
// limboDocumentRefs.
// TODO(dimond): Ideally we would have an explicit lookup target
// instead resulting in an explicit delete message and we could
// remove this special logic.
let t=new i2(i.target.path);null!==this.$e.get(t)||this.ut(n,t)||this.je(n,t,sx.newNoDocument(t,e))}r.Fe&&(t.set(n,r.xe()),r.Oe())}});let r=ad();// We extract the set of limbo-only document updates as the GC logic
// special-cases documents that do not appear in the target cache.
// TODO(gsoltis): Expand on this comment once GC is available in the JS
// client.
this.Ue.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.$e.forEach((t,r)=>r.setReadTime(e));let n=new aX(e,t,this.We,this.$e,r);return this.$e=as,this.Ue=a9(),this.We=new sn(iQ),n}/**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */// Visible for testing.
ze(e,t){if(!this.Ye(e))return;let r=this.ut(e,t.key)?2/* ChangeType.Modified */:0/* ChangeType.Added */;this.Je(e).Ne(t.key,r),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}/**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */// Visible for testing.
je(e,t,r){if(!this.Ye(e))return;let n=this.Je(e);this.ut(e,t)?n.Ne(t,1/* ChangeType.Removed */):// snapshot, so we can just ignore the change.
n.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),r&&(this.$e=this.$e.insert(t,r))}removeTarget(e){this.Ke.delete(e)}/**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}/**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new a1,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new sa(iQ),this.Ue=this.Ue.insert(e,t)),t}/**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */Ye(e){let t=null!==this.et(e);return t||iN("WatchChangeAggregator","Detected inactive target",e),t}/**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}/**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */Ze(e){this.Ke.set(e,new a1),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,/*updatedDocument=*/null)})}/**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}}function a9(){return new sn(i2.comparator)}function a4(){return new sn(i2.comparator)}let a6={asc:"ASCENDING",desc:"DESCENDING"},a5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},a3={and:"AND",or:"OR"};/**
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
 */class a7{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}/**
 * Returns a value for a number (or null) that's appropriate to put into
 * a google.protobuf.Int32Value proto.
 * DO NOT USE THIS FOR ANYTHING ELSE.
 * This method cheats. It's typed as returning "number" because that's what
 * our generated proto interfaces say Int32Value must be. But GRPC actually
 * expects a { value: <number> } struct.
 */function a8(e,t){return e.useProto3Json||null==t?t:{value:t}}/**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 *//**
 * Returns a value for a Date that's appropriate to put into a proto.
 */function oe(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */function ot(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function or(e){return e||ix(),iY.fromTimestamp(function(e){let t=sd(e);return new iX(t.seconds,t.nanos)}(e))}function on(e,t){return new iZ(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function oi(e){let t=iZ.fromString(e);return op(t)||ix(),t}function os(e,t){return on(e.databaseId,t.path)}function oa(e,t){let r=oi(t);if(r.get(1)!==e.databaseId.projectId)throw new iF(iM.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new iF(iM.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new i2(oh(r))}function oo(e,t){return on(e.databaseId,t)}function ol(e){return new iZ(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function oh(e){return e.length>4&&"documents"===e.get(4)||ix(),e.popFirst(5)}/** Creates a Document proto from key and fields (but no create/update time) */function oc(e,t,r){return{name:os(e,t),fields:r.value.mapValue.fields}}function ou(e){return{fieldPath:e.canonicalString()}}function od(e){return i1.fromServerFormat(e.fieldPath)}function op(e){// Resource names have at least 4 components (project ID, database ID)
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
 */class of{constructor(/** The target being listened to. */e,/**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */t,/** The purpose of the target. */r,/**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */n,/** The latest snapshot version seen for this target. */i=iY.min(),s=iY.min(),a=sc.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}/** Creates a new target data instance with an updated sequence number. */withSequenceNumber(e){return new of(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}/**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */withResumeToken(e,t){return new of(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,/* expectedCount= */null)}/**
     * Creates a new target data instance with an updated expected count.
     */withExpectedCount(e){return new of(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}/**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */withLastLimboFreeSnapshotVersion(e){return new of(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 *//** Serializer for values stored in the LocalStore. */class om{constructor(e){this.ht=e}}/**
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
/** Firestore index value writer.  */class og{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */dt(e,t){this.Tt(e,t),// (see go/firestore-storage-format#encodings).
t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(sp(e.integerValue));else if("doubleValue"in e){let r=sp(e.doubleValue);isNaN(r)?this.At(t,13):(this.At(t,15),i8(r)?t.Rt(0):t.Rt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.At(t,20),"string"==typeof r?t.Vt(r):(t.Vt(`${r.seconds||""}`),t.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(sf(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.At(t,45),t.Rt(r.latitude||0),t.Rt(r.longitude||0)}else"mapValue"in e?sO(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):ix()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let r=e.fields||{};for(let e of(this.At(t,55),Object.keys(r)))this.ft(e,t),this.Tt(r[e],t)}bt(e,t){let r=e.values||[];for(let e of(this.At(t,50),r))this.Tt(e,t)}wt(e,t){this.At(t,37),i2.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
e.Rt(2)}}og.Ct=new og;/**
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
 */class oy{constructor(){this.an=new ov}addToCollectionParentIndex(e,t){return this.an.add(t),i5.resolve()}getCollectionParents(e,t){return i5.resolve(this.an.getEntries(t))}addFieldIndex(e,t){// Field indices are not supported with memory persistence.
return i5.resolve()}deleteFieldIndex(e,t){// Field indices are not supported with memory persistence.
return i5.resolve()}deleteAllFieldIndexes(e){// Field indices are not supported with memory persistence.
return i5.resolve()}createTargetIndexes(e,t){// Field indices are not supported with memory persistence.
return i5.resolve()}getDocumentsMatchingTarget(e,t){// Field indices are not supported with memory persistence.
return i5.resolve(null)}getIndexType(e,t){// Field indices are not supported with memory persistence.
return i5.resolve(0/* IndexType.NONE */)}getFieldIndexes(e,t){// Field indices are not supported with memory persistence.
return i5.resolve([])}getNextCollectionGroupToUpdate(e){// Field indices are not supported with memory persistence.
return i5.resolve(null)}getMinOffset(e,t){return i5.resolve(i9.min())}getMinOffsetFromCollectionGroup(e,t){return i5.resolve(i9.min())}updateCollectionGroup(e,t,r){// Field indices are not supported with memory persistence.
return i5.resolve()}updateIndexEntries(e,t){// Field indices are not supported with memory persistence.
return i5.resolve()}}/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */class ov{constructor(){this.index={}}// Returns false if the entry already existed.
add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new sa(iZ.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new sa(iZ.comparator)).toArray()}}new Uint8Array(0);class ow{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
e,t,// us from collecting a huge number of sequence numbers if the cache has grown very large.
r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ow(e,ow.DEFAULT_COLLECTION_PERCENTILE,ow.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 *//** A mutation queue for a specific user, backed by IndexedDB. */ow.DEFAULT_COLLECTION_PERCENTILE=10,ow.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ow.DEFAULT=new ow(41943040,ow.DEFAULT_COLLECTION_PERCENTILE,ow.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ow.DISABLED=new ow(-1,0,0);/**
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
 */class o_{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Bn(){// The target cache generator must return '2' in its first call to `next()`
// as there is no differentiation in the protocol layer between an unset
// number and the number '0'. If we were to sent a target with target ID
// '0', the backend would consider it unset and replace it with its own ID.
return new o_(0)}static Ln(){// Sync engine assigns target IDs for limbo document detection.
return new o_(-1)}}/**
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
 */class oE{constructor(){// A mapping of document key to the new cache entry that should be written.
this.changes=new ai(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}/**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}/**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sx.newInvalidDocument(e).setReadTime(t))}/**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?i5.resolve(r):this.getFromCache(e,t)}/**
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
 */class oC{constructor(e,/**
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
 */class ob{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}/**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&aN(r.mutation,e,sl.empty(),iX.now()),e))}/**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ad()).next(()=>t))}/**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */getLocalViewOfDocuments(e,t,r=ad()){let n=ah();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=ao();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}/**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */getOverlayedDocuments(e,t){let r=ah();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ad()))}/**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}/**
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
     */computeViews(e,t,r,n){let i=as,s=ah(),a=ah();return t.forEach((e,t)=>{let a=r.get(t.key);// Recalculate an overlay if the document's existence state changed due to
// a remote event *and* the overlay is a PatchMutation. This is because
// document existence state can change if some patch mutation's
// preconditions are met.
// NOTE: we recalculate when `overlay` is undefined as well, because there
// might be a patch mutation whose precondition does not match before the
// change (hence overlay is undefined), but would now match.
n.has(t.key)&&(void 0===a||a.mutation instanceof aP)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),aN(a.mutation,t,a.mutation.getFieldMask(),iX.now())):// Using EMPTY to indicate there is no overlay for the document.
s.set(t.key,sl.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new oC(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=ah(),n=new sn((e,t)=>e-t),i=ad();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||sl.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||ad()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();// Iterate in descending order of batch IDs, and skip documents that are
// already saved.
for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,h=ah();l.forEach(e=>{if(!i.has(e)){let n=aL(t.get(e),r.get(e));null!==n&&h.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return i5.waitFor(s)}).next(()=>r)}/**
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
     */getDocumentsMatchingQuery(e,t,r,n){/**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */return i2.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}/**
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
     */getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):i5.resolve(ah()),a=-1,o=i;return s.next(t=>i5.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?i5.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ad())).next(e=>({batchId:a,changes:al(e)})))})}getDocumentsMatchingDocumentQuery(e,t){// Just do a simple document lookup.
return this.getDocument(e,new i2(t)).next(e=>{let t=ao();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=ao();return this.indexManager.getCollectionParents(e,i).next(a=>i5.forEach(a,a=>{var o;let l=(o=a.child(i),new s4(o,/*collectionGroup=*/null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){// Query the remote documents and overlay mutations.
let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{// As documents might match the query because of their overlay we need to
// include documents for all overlays in the initial document set.
i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,sx.newInvalidDocument(n)))});// Apply the overlays and match against the query.
let r=ao();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&aN(s.mutation,n,sl.empty(),iX.now()),ar(t,n)&&(r=r.insert(e,n))}),r})}}/**
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
 */class oT{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return i5.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:or(t.createTime)}),i5.resolve()}getNamedQuery(e,t){return i5.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */function(e){let t=function(e){var t,r,n,i,s,a,o,l;let h,c=function(e){let t=oi(e);// In v1beta1 queries for collections at the root did not have a trailing
// "/documents". In v1 all resource paths contain "/documents". Preserve the
// ability to read the v1beta1 form for compatibility with queries persisted
// in the local target cache.
return 4===t.length?iZ.emptyPath():oh(t)}(e.parent),u=e.structuredQuery,d=u.from?u.from.length:0,p=null;if(d>0){1===d||ix();let e=u.from[0];e.allDescendants?p=e.collectionId:c=c.child(e.collectionId)}let f=[];u.where&&(f=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=od(e.unaryFilter.field);return s$.create(t,"=="/* Operator.EQUAL */,{doubleValue:NaN});case"IS_NULL":let r=od(e.unaryFilter.field);return s$.create(r,"=="/* Operator.EQUAL */,{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=od(e.unaryFilter.field);return s$.create(n,"!="/* Operator.NOT_EQUAL */,{doubleValue:NaN});case"IS_NOT_NULL":let i=od(e.unaryFilter.field);return s$.create(i,"!="/* Operator.NOT_EQUAL */,{nullValue:"NULL_VALUE"});default:return ix()}}(t):void 0!==t.fieldFilter?s$.create(od(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"=="/* Operator.EQUAL */;case"NOT_EQUAL":return"!="/* Operator.NOT_EQUAL */;case"GREATER_THAN":return">"/* Operator.GREATER_THAN */;case"GREATER_THAN_OR_EQUAL":return">="/* Operator.GREATER_THAN_OR_EQUAL */;case"LESS_THAN":return"<"/* Operator.LESS_THAN */;case"LESS_THAN_OR_EQUAL":return"<="/* Operator.LESS_THAN_OR_EQUAL */;case"ARRAY_CONTAINS":return"array-contains"/* Operator.ARRAY_CONTAINS */;case"IN":return"in"/* Operator.IN */;case"NOT_IN":return"not-in"/* Operator.NOT_IN */;case"ARRAY_CONTAINS_ANY":return"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */;default:return ix()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?sj.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and"/* CompositeOperator.AND */;case"OR":return"or"/* CompositeOperator.OR */;default:return ix()}}(t.compositeFilter.op)):ix()}(e);return r instanceof sj&&sH(t=r)&&sq(t)?r.getFilters():[r]}(u.where));let m=[];u.orderBy&&(m=u.orderBy.map(e=>new sB(od(e.field),function(e){switch(e){case"ASCENDING":return"asc"/* Direction.ASCENDING */;case"DESCENDING":return"desc"/* Direction.DESCENDING */;default:return}}(e.direction))));let g=null;u.limit&&(g=null==(h="object"==typeof(t=u.limit)?t.value:t)?null:h);let y=null;u.startAt&&(y=function(e){let t=!!e.before,r=e.values||[];return new sM(r,t)}(u.startAt));let v=null;return u.endAt&&(v=function(e){let t=!e.before,r=e.values||[];return new sM(r,t)}(u.endAt)),r=c,n=p,i=m,s=f,a=g,o=y,l=v,new s4(r,n,i,s,a,"F"/* LimitType.First */,o,l)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?s7(t,t.limit,"L"/* LimitType.Last */):t}(t.bundledQuery),readTime:or(t.readTime)}),i5.resolve()}}/**
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
 */class oI{constructor(){// A map sorted by DocumentKey, whose value is a pair of the largest batch id
// for the overlay and the overlay itself.
this.overlays=new sn(i2.comparator),this.Pr=new Map}getOverlay(e,t){return i5.resolve(this.overlays.get(t))}getOverlays(e,t){let r=ah();return i5.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.It(e,t,n)}),i5.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Pr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(r)),i5.resolve()}getOverlaysForCollection(e,t,r){let n=ah(),i=t.length+1,s=new i2(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;// Documents from sub-collections
s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return i5.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new sn((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=ah(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ah(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return i5.resolve(a)}It(e,t,r){// Remove the association of the overlay to its batch id.
let n=this.overlays.get(r.key);if(null!==n){let e=this.Pr.get(n.largestBatchId).delete(r.key);this.Pr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new aj(t,r));// Create the association of this overlay to the given largestBatchId.
let i=this.Pr.get(t);void 0===i&&(i=ad(),this.Pr.set(t,i)),this.Pr.set(t,i.add(r.key))}}/**
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
 */class oS{constructor(){// A set of outstanding references to a document sorted by key.
this.Ir=new sa(oA.dr),this.Tr=new sa(oA.Er)}/** Returns true if the reference set contains no references. */isEmpty(){return this.Ir.isEmpty()}/** Adds a reference to the given document key for the given ID. */addReference(e,t){let r=new oA(e,t);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}/** Add references to the given document keys for the given ID. */Ar(e,t){e.forEach(e=>this.addReference(e,t))}/**
     * Removes a reference to the given document key for the given
     * ID.
     */removeReference(e,t){this.Rr(new oA(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}/**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */mr(e){let t=new i2(new iZ([])),r=new oA(t,e),n=new oA(t,e+1),i=[];return this.Tr.forEachInRange([r,n],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new i2(new iZ([])),r=new oA(t,e),n=new oA(t,e+1),i=ad();return this.Tr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new oA(e,0),r=this.Ir.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class oA{constructor(e,t){this.key=e,this.yr=t}/** Compare by key then by ID */static dr(e,t){return i2.comparator(e.key,t.key)||iQ(e.yr,t.yr)}/** Compare by ID then by key */static Er(e,t){return iQ(e.yr,t.yr)||i2.comparator(e.key,t.key)}}/**
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
 */class oD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,/**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */this.mutationQueue=[],/** Next value to use when assigning sequential IDs to each mutation batch. */this.wr=1,/** An ordered mapping between documents and the mutations batch IDs. */this.Sr=new sa(oA.dr)}checkEmpty(e){return i5.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new aV(i,t,r,n);// Track references by document key and index collection parents.
for(let t of(this.mutationQueue.push(s),n))this.Sr=this.Sr.add(new oA(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return i5.resolve(s)}lookupMutationBatch(e,t){return i5.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Dr(t+1),n=r<0?0:r;// The requested batchId may still be out of range so normalize it to the
// start of the queue.
return i5.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return i5.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return i5.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new oA(t,0),n=new oA(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([r,n],e=>{let t=this.br(e.yr);i.push(t)}),i5.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new sa(iQ);return t.forEach(e=>{let t=new oA(e,0),n=new oA(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,n],e=>{r=r.add(e.yr)})}),i5.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){// Use the query path as a prefix for testing if a document matches the
// query.
let r=t.path,n=r.length+1,i=r;i2.isDocumentKey(i)||(i=i.child(""));let s=new oA(new i2(i),0),a=new sa(iQ);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&// Rows with document keys more than one segment longer than the query
// path can't be matches. For example, a query on 'rooms' can't match
// the document /rooms/abc/messages/xyx.
// TODO(mcg): we'll need a different scanner when we implement
// ancestor queries.
(t.length===n&&(a=a.add(e.yr)),!0)},s),i5.resolve(this.Cr(a))}Cr(e){// Construct an array of matching batches, sorted by batchID to ensure that
// multiple mutations affecting the same document key are applied in order.
let t=[];return e.forEach(e=>{let r=this.br(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||ix(),this.mutationQueue.shift();let r=this.Sr;return i5.forEach(t.mutations,n=>{let i=new oA(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Sr=r})}xn(e){// No-op since the memory mutation queue does not maintain a separate cache.
}containsKey(e,t){let r=new oA(t,0),n=this.Sr.firstAfterOrEqual(r);return i5.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,i5.resolve()}/**
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
 */class ok{/**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */constructor(e){this.Fr=e,/** Underlying cache of documents and their read times. */this.docs=new sn(i2.comparator),/** Size of all cached documents. */this.size=0}setIndexManager(e){this.indexManager=e}/**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}/**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return i5.resolve(r?r.document.mutableCopy():sx.newInvalidDocument(t))}getEntries(e,t){let r=as;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():sx.newInvalidDocument(e))}),i5.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=as,s=t.path,a=new i2(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=i2.comparator(e.documentKey,t.documentKey))?r:iQ(e.largestBatchId,t.largestBatchId)}(new i9(a.readTime,a.key,-1),r)||(n.has(a.key)||ar(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return i5.resolve(i)}getAllFromCollectionGroup(e,t,r,n){// This method should only be called from the IndexBackfiller if persistence
// is enabled.
ix()}Mr(e,t){return i5.forEach(this.docs,e=>t(e))}newChangeBuffer(e){// `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
// a separate changelog and does not need special handling for removals.
return new oL(this)}getSize(e){return i5.resolve(this.size)}}/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 *//**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */class oL extends oE{constructor(e){super(),this.ur=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.ur.addEntry(e,n)):this.ur.removeEntry(r)}),i5.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
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
 */class oN{constructor(e){this.persistence=e,/**
         * Maps a target to the data about that target
         */this.Or=new ai(e=>s1(e),s2),/** The last received snapshot version. */this.lastRemoteSnapshotVersion=iY.min(),/** The highest numbered target ID encountered. */this.highestTargetId=0,/** The highest sequence number encountered. */this.Nr=0,/**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */this.Br=new oS,this.targetCount=0,this.Lr=o_.Bn()}forEachTarget(e,t){return this.Or.forEach((e,r)=>t(r)),i5.resolve()}getLastRemoteSnapshotVersion(e){return i5.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return i5.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),i5.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),i5.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new o_(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,i5.resolve()}updateTargetData(e,t){return this.Qn(t),i5.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,i5.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),i5.waitFor(i).next(()=>n)}getTargetCount(e){return i5.resolve(this.targetCount)}getTargetData(e,t){let r=this.Or.get(t)||null;return i5.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Ar(t,r),i5.resolve()}removeMatchingKeys(e,t,r){this.Br.Vr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),i5.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),i5.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Br.pr(t);return i5.resolve(r)}containsKey(e,t){return i5.resolve(this.Br.containsKey(t))}}/**
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
 */class oR{/**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */constructor(e,t){this.kr={},this.overlays={},this.qr=new i7(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new oN(this),this.indexManager=new oy,this.remoteDocumentCache=new ok(e=>this.referenceDelegate.$r(e)),this.serializer=new om(t),this.Ur=new oT(this.serializer)}start(){return Promise.resolve()}shutdown(){// No durable state to ensure is closed on shutdown.
return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){// No op.
}setNetworkEnabled(){// No op.
}getIndexManager(e){// We do not currently support indices for memory persistence, so we can
// return the same shared instance of the memory index manager.
return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new oD(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,r){iN("MemoryPersistence","Starting transaction:",e);let n=new oO(this.qr.next());return this.referenceDelegate.Wr(),r(n).next(e=>this.referenceDelegate.Gr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}zr(e,t){return i5.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */class oO extends i4{constructor(e){super(),this.currentSequenceNumber=e}}class oP{constructor(e){this.persistence=e,/** Tracks all documents that are active in Query views. */this.jr=new oS,/** The list of documents that are potentially GCed after each transaction. */this.Hr=null}static Jr(e){return new oP(e)}get Yr(){if(this.Hr)return this.Hr;throw ix()}addReference(e,t,r){return this.jr.addReference(r,t),this.Yr.delete(r.toString()),i5.resolve()}removeReference(e,t,r){return this.jr.removeReference(r,t),this.Yr.add(r.toString()),i5.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),i5.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){// Remove newly orphaned documents.
let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return i5.forEach(this.Yr,r=>{let n=i2.fromPath(r);return this.Zr(e,n).next(e=>{e||t.removeEntry(n,iY.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){// For eager GC, we don't care about the document size, there are no size thresholds.
return 0}Zr(e,t){return i5.or([()=>i5.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}}/**
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
 */class ox{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Qi=r,this.Ki=n}static $i(e,t){let r=ad(),n=ad();for(let e of t.docChanges)switch(e.type){case 0/* ChangeType.Added */:r=r.add(e.doc.key);break;case 1/* ChangeType.Removed */:n=n.add(e.doc.key)}return new ox(e,t.fromCache,r,n)}}/**
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
 */class oM{constructor(){/**
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
 */class oF{constructor(){this.Ui=!1,this.Wi=!1,/**
         * SDK only decides whether it should create index when collection size is
         * larger than this.
         */this.Gi=100,this.zi=8}/** Sets the document view to query against. */initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}/** Returns all local documents matching the specified query. */getDocumentsMatchingQuery(e,t,r,n){// Stores the result from executing the query; using this object is more
// convenient than passing the result between steps of the persistence
// transaction and improves readability comparatively.
let i={result:null};return this.Hi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ji(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new oM;return this.Yi(e,t,r).next(n=>{if(i.result=n,this.Wi)return this.Zi(e,t,r,n.size)})}).next(()=>i.result)}Zi(e,t,r,n){return r.documentReadCount<this.Gi?(iL()<=e6.DEBUG&&iN("QueryEngine","SDK will not create cache indexes for query:",at(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),i5.resolve()):(iL()<=e6.DEBUG&&iN("QueryEngine","Query:",at(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.zi*n?(iL()<=e6.DEBUG&&iN("QueryEngine","The SDK decides to create cache indexes for query:",at(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,s3(t))):i5.resolve())}/**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */Hi(e,t){if(s6(t))// key-based lookups. It is more efficient to scan all documents in a
// collection, rather than to perform individual lookups.
return i5.resolve(null);let r=s3(t);return this.indexManager.getIndexType(e,r).next(n=>0/* IndexType.NONE */===n?null:(null!==t.limit&&1/* IndexType.PARTIAL */===n&&(r=s3(// We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    t=s7(t,null,"F"/* LimitType.First */))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=ad(...n);return this.ji.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Xi(t,n);return this.es(t,s,i,r.readTime)?this.Hi(e,s7(t,null,"F"/* LimitType.First */)):this.ts(e,s,t,r)}))})))}/**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */Ji(e,t,r,n){return s6(t)||n.isEqual(iY.min())?i5.resolve(null):this.ji.getDocuments(e,r).next(i=>{let s=this.Xi(t,i);return this.es(t,s,r,n)?i5.resolve(null):(iL()<=e6.DEBUG&&iN("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),at(t)),this.ts(e,s,t,/**
 * Creates an offset that matches all documents with a read time higher than
 * `readTime`.
 */function(e,t){// We want to create an offset that matches all documents with a read time
// greater than the provided read time. To do so, we technically need to
// create an offset for `(readTime, MAX_DOCUMENT_KEY)`. While we could use
// Unicode codepoints to generate MAX_DOCUMENT_KEY, it is much easier to use
// `(readTime + 1, DocumentKey.empty())` since `> DocumentKey.empty()` matches
// all valid document IDs.
let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,i=iY.fromTimestamp(1e9===n?new iX(r+1,0):new iX(r,n));return new i9(i,i2.empty(),-1)}(n,0)).next(e=>e))});// Queries that have never seen a snapshot without limbo free documents
// should also be run as a full collection scan.
}/** Applies the query filter and sorting to the provided documents.  */Xi(e,t){// Sort the documents and re-apply the query filter since previously
// matching documents do not necessarily still match the query.
let r=new sa(an(e));return t.forEach((t,n)=>{ar(e,n)&&(r=r.add(n))}),r}/**
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
     */es(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)// longer matches.
return!0;// Limit queries are not eligible for index-free query execution if there is
// a potential that an older document from cache now sorts before a document
// that was previously part of the limit. This, however, can only happen if
// the document at the edge of the limit goes out of limit.
// If a document that is not the limit boundary sorts differently,
// the boundary of the limit itself did not change and documents from cache
// will continue to be "rejected" by this boundary. Therefore, we can ignore
// any modifications that don't affect the last document.
let i="F"/* LimitType.First */===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Yi(e,t,r){return iL()<=e6.DEBUG&&iN("QueryEngine","Using full collection scan to execute query:",at(t)),this.ji.getDocumentsMatchingQuery(e,t,i9.min(),r)}/**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */ts(e,t,r,n){// Retrieve all results for documents that were updated since the offset.
return this.ji.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class oU{constructor(/** Manages our in-memory or durable persistence. */e,t,r,n){this.persistence=e,this.ns=t,this.serializer=n,/**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */this.rs=new sn(iQ),/** Maps a target to its targetID. */this.ss=new ai(e=>s1(e),s2),/**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(r)}us(e){// TODO(indexing): Add spec tests that test these components change after a
// user change
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ob(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}}/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function oB(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{// Swap out the mutation queue, grabbing the pending mutation batches
// before and after.
let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.us(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=ad();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);// Return the set of all (potentially) changed documents and the list
// of mutation batch IDs that were affected by change.
return e.localDocuments.getDocuments(r,a).next(e=>({cs:e,removedBatchIds:i,addedBatchIds:s}))})})}/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */function oV(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}/**
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
async function o$(e,t,r){let n=e.rs.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!i3(e))throw e;// All `releaseTarget` does is record the final metadata state for the
// target, but we've been recording this periodically during target
// activity. If we lose this write this could cause a very slight
// difference in the order of target deletion during GC, but we
// don't define exact LRU semantics so this is acceptable.
iN("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.rs=e.rs.remove(t),e.ss.delete(n.target)}/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */function oj(e,t,r){let n=iY.min(),i=ad();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.ss.get(r);return void 0!==n?i5.resolve(e.rs.get(n)):e.Kr.getTargetData(t,r)})(e,s,s3(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,r?n:iY.min(),r?i:ad())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(n)||iY.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(n,s),{documents:r,Ps:i}}))}/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */// Visible for testing.
class oq{constructor(){this.activeTargetIds=ap}Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}/**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */As(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oH{constructor(){this.ro=new oq,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){// No op.
}updateMutationState(e,t,r){// No op.
}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,r){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new oq,Promise.resolve()}handleUserChange(e,t,r){// No op.
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
 */class oz{so(e){// No-op.
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
 */class oK{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(iN("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0/* NetworkStatus.AVAILABLE */)}uo(){for(let e of(iN("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1/* NetworkStatus.UNAVAILABLE */)}// TODO(chenbrian): Consider passing in window either into this component or
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
 */let oG=null;/**
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
 */function oQ(){return null===oG?oG=268435456+Math.round(2147483648*Math.random()):oG++,"0x"+oG.toString(16)}/**
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
 */let oW={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class oX{constructor(e){this.ho=e.ho,this.Po=e.Po}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}}/**
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
 */let oY="WebChannelConnection";class oJ extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get So(){// Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
// where to run the query, and expect the `request` to NOT specify the "path".
return!1}bo(e,t,r,n,i){let s=oQ(),a=this.Do(e,t);iN("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,n,i),this.vo(e,a,o,r).then(t=>(iN("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw iO("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Fo(e,t,r,n,i,s){// The REST API automatically aggregates all of the streamed results, so we
// can just use the normal invoke() method.
return this.bo(e,t,r,n,i)}/**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */Co(e,t,r){e["X-Goog-Api-Client"]=// so we need to get its value when we need it in a function.
function(){return"gl-js/ fire/"+iD}(),// mess with CORS and redirects by proxies. If we add custom headers
// we will need to change this code to potentially use the $httpOverwrite
// parameter supported by ESF to avoid triggering preflight requests.
e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}Do(e,t){let r=oW[e];return`${this.po}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=oQ();return new Promise((s,a)=>{let o=new ib;o.setWithCredentials(!0),o.listenOnce(iw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case iv.NO_ERROR:let t=o.getResponseJson();iN(oY,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case iv.TIMEOUT:iN(oY,`RPC '${e}' ${i} timed out`),a(new iF(iM.DEADLINE_EXCEEDED,"Request time out"));break;case iv.HTTP_ERROR:let r=o.getStatus();if(iN(oY,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(iM).indexOf(t)>=0?t:iM.UNKNOWN}(t.status);a(new iF(e,t.message))}else a(new iF(iM.UNKNOWN,"Server responded with status "+o.getStatus()))}else // it's most probably a connection issue
a(new iF(iM.UNAVAILABLE,"Connection failed."));break;default:ix()}}finally{iN(oY,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);iN(oY,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}Mo(e,t,r){let n=oQ(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ig(),a=iy(),o={// Required for backend stickiness, routing behavior is based on this
// parameter.
httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{// This param is used to improve routing and project isolation by the
// backend and must be included in every request.
database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{// Override the default timeout (randomized between 10-20 seconds) since
// a large write batch on a slow internet connection may take a long
// time to send to the backend. Rather than have WebChannel impose a
// tight timeout which could lead to infinite timeouts and retries, we
// set it very large (5-10 minutes) and rely on the browser's builtin
// timeouts to kick in if the request isn't working.
forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Co(o.initMessageHeaders,t,r),// (Authorization, etc.) will trigger the browser to make a CORS preflight
// request because the XHR will no longer meet the criteria for a "simple"
// CORS request:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
// Therefore to avoid the CORS preflight request (an extra network
// roundtrip), we use the encodeInitMessageHeaders option to specify that
// the headers should instead be encoded in the request's POST payload,
// which is recognized by the webchannel backend.
o.encodeInitMessageHeaders=!0;let h=i.join("");iN(oY,`Creating RPC '${e}' stream ${n}: ${h}`,o);let u=s.createWebChannel(h,o),d=!1,p=!1,f=new oX({ho:t=>{p?iN(oY,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(d||(iN(oY,`Opening RPC '${e}' stream ${n} transport.`),u.open(),d=!0),iN(oY,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},Po:()=>u.close()}),m=(e,t,r)=>{// TODO(dimond): closure typing seems broken because WebChannel does
// not implement goog.events.Listenable
e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};// Closure events are guarded and exceptions are swallowed, so catch any
// exception and rethrow using a setTimeout so they become visible again.
// Note that eventually this function could go away if we are confident
// enough the code is exception free.
return m(u,iC.EventType.OPEN,()=>{p||iN(oY,`RPC '${e}' stream ${n} transport opened.`)}),m(u,iC.EventType.CLOSE,()=>{p||(p=!0,iN(oY,`RPC '${e}' stream ${n} transport closed`),f.mo())}),m(u,iC.EventType.ERROR,t=>{p||(p=!0,iO(oY,`RPC '${e}' stream ${n} transport errored:`,t),f.mo(new iF(iM.UNAVAILABLE,"The operation could not be completed")))}),m(u,iC.EventType.MESSAGE,t=>{var r;if(!p){let i=t.data[0];i||ix();// TODO(b/35143891): There is a bug in One Platform that caused errors
// (and only errors) to be wrapped in an extra array. To be forward
// compatible with the bug we need to check either condition. The latter
// can be removed once the fix has been rolled out.
// Use any because msgData.error is not typed.
let s=i.error||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){iN(oY,`RPC '${e}' stream ${n} received error:`,s);// error.status will be a string like 'OK' or 'NOT_FOUND'.
let t=s.status,r=/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */function(e){// lookup by string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let t=c[e];if(void 0!==t)return aH(t)}(t),i=s.message;void 0===r&&(r=iM.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),p=!0,f.mo(new iF(r,i)),u.close()}else iN(oY,`RPC '${e}' stream ${n} received:`,i),f.fo(i)}}),m(a,i_.STAT_EVENT,t=>{t.stat===iE.PROXY?iN(oY,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===iE.NOPROXY&&iN(oY,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{// Technically we could/should wait for the WebChannel opened event,
// but because we want to send the first message with the WebChannel
// handshake we pretend the channel opened here (asynchronously), and
// then delay the actual open until the first message is sent.
f.Vo()},0),f}}/** The Platform's 'document' implementation or null if not available. */function oZ(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
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
 */function o0(e){return new a7(e,/* useProto3Json= */!0)}/**
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
 */class o1{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */e,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */t,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */r=1e3,n=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=r,this.Oo=n,this.No=i,this.Bo=0,this.Lo=null,/** The last backoff attempt, as epoch milliseconds. */this.ko=Date.now(),this.reset()}/**
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
let t=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),n=Math.max(0,t-r);// Guard against lastAttemptTime being in the future due to a clock change.
n>0&&iN("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Bo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,n,()=>(this.ko=Date.now(),e())),// bounds.
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
 */class o2{constructor(e,t,r,n,i,s,a,o){this._i=e,this.Uo=r,this.Wo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0/* PersistentStreamState.Initial */,/**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new o1(e,t)}/**
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
this.Go++,4/* PersistentStreamState.Error */!==e?this.Ho.reset():t&&t.code===iM.RESOURCE_EXHAUSTED?(iR(t.toString()),iR("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===iM.UNAUTHENTICATED&&3/* PersistentStreamState.Healthy */!==this.state&&// "unauthenticated" error means the token was rejected. This should rarely
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
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{// Stream can be stopped while waiting for authentication.
// TODO(mikelehen): We really should just use dispatchIfNotClosed
// and let this dispatch onto the queue, but that opened a spec test can
// of worms that I don't want to deal with in this PR.
this.Go===t&&// Normally we'd have to schedule the callback on the AsyncQueue.
// However, the following calls are safe to be called outside the
// AsyncQueue since they don't chain asynchronous calls
this.__(e,r)},t=>{e(()=>{let e=new iF(iM.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let r=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{r(()=>(this.state=2/* PersistentStreamState.Open */,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3/* PersistentStreamState.Healthy */),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{r(()=>this.a_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Zo(){this.state=5/* PersistentStreamState.Backoff */,this.Ho.Qo(async()=>{this.state=0/* PersistentStreamState.Initial */,this.start()})}// Visible for tests
a_(e){// In theory the stream could close cleanly, however, in our current model
// we never expect this to happen because if we stop a stream ourselves,
// this callback will never be called. To prevent cases where we retry
// without a backoff accidentally, we set the stream to error in all cases.
return iN("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4/* PersistentStreamState.Error */,e)}/**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(iN("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */class o9 extends o2{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff"/* TimerId.ListenStreamConnectionBackoff */,"listen_stream_idle"/* TimerId.ListenStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,r,n,s),this.serializer=i}u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){// A successful response means the stream is healthy
this.Ho.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;// proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
// if unset
let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0/* WatchTargetChangeState.NoChange */:"ADD"===n?1/* WatchTargetChangeState.Added */:"REMOVE"===n?2/* WatchTargetChangeState.Removed */:"CURRENT"===n?3/* WatchTargetChangeState.Current */:"RESET"===n?4/* WatchTargetChangeState.Reset */:ix(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||ix(),sc.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||ix(),sc.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause,h=l&&function(e){let t=void 0===e.code?iM.UNKNOWN:aH(e.code);return new iF(t,e.message||"")}(l);r=new a0(s,a,o,h||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=oa(e,n.document.name),s=or(n.document.updateTime),a=n.document.createTime?or(n.document.createTime):iY.min(),o=new sP({mapValue:{fields:n.document.fields}}),l=sx.newFoundDocument(i,s,a,o),h=n.targetIds||[],c=n.removedTargetIds||[];r=new aJ(h,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=oa(e,n.document),s=n.readTime?or(n.readTime):iY.min(),a=sx.newNoDocument(i,s),o=n.removedTargetIds||[];r=new aJ([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=oa(e,n.document),s=n.removedTargetIds||[];r=new aJ([],s,i,null)}else{if(!("filter"in t))return ix();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new aq(n,i),a=e.targetId;r=new aZ(a,s)}}return r}(this.serializer,e),r=function(e){// We have only reached a consistent snapshot for the entire stream if there
// is a read_time set and it applies to all targets (i.e. the list of
// targets is empty). The backend is guaranteed to send such responses.
if(!("targetChange"in e))return iY.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?iY.min():t.readTime?or(t.readTime):iY.min()}(e);return this.listener.c_(t,r)}/**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */l_(e){let t={};t.database=ol(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=s9(n)?{documents:{documents:[oo(e,n.path)]}}:{query:function(e,t){var r,n;// Dissect the path into parent, collectionId, and optional key filter.
let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=oo(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=oo(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof s$?function(e){if("=="/* Operator.EQUAL */===e.op){if(sL(e.value))return{unaryFilter:{field:ou(e.field),op:"IS_NAN"}};if(sk(e.value))return{unaryFilter:{field:ou(e.field),op:"IS_NULL"}}}else if("!="/* Operator.NOT_EQUAL */===e.op){if(sL(e.value))return{unaryFilter:{field:ou(e.field),op:"IS_NOT_NAN"}};if(sk(e.value))return{unaryFilter:{field:ou(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ou(e.field),op:a5[e.op],value:e.value}}}(t):t instanceof sj?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:a3[t.op],filters:r}}}(t):ix()}(sj.create(e,"and"/* CompositeOperator.AND */))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:ou(e.field),direction:a6[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=a8(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=ot(e,t.resumeToken);let n=a8(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(iY.min())>0){// TODO(wuandy): Consider removing above check because it is most likely true.
// Right now, many tests depend on this behaviour though (leaving min() out
// of serialization).
r.readTime=oe(e,t.snapshotVersion.toTimestamp());let n=a8(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen"/* TargetPurpose.Listen */:return null;case"TargetPurposeExistenceFilterMismatch"/* TargetPurpose.ExistenceFilterMismatch */:return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom"/* TargetPurpose.ExistenceFilterMismatchBloom */:return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */:return"limbo-document";default:return ix()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.n_(t)}/**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */h_(e){let t={};t.database=ol(this.serializer),t.removeTarget=e,this.n_(t)}}/**
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
 */class o4 extends o2{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff"/* TimerId.WriteStreamConnectionBackoff */,"write_stream_idle"/* TimerId.WriteStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,t,r,n,s),this.serializer=i,this.P_=!1}/**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */get I_(){return this.P_}// Override of PersistentStream.start
start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,r;if(e.streamToken||ix(),this.lastStreamToken=e.streamToken,this.P_){// A successful first write response means the stream is healthy,
// Note, that we could consider a successful handshake healthy, however,
// the write itself might be causing an error we want to back off from.
this.Ho.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||ix(),t.map(e=>{let t;return(t=e.updateTime?or(e.updateTime):or(r)).isEqual(iY.min())&&// The Firestore Emulator currently returns an update time of 0 for
// deletes of non-existing documents (rather than null). This breaks the
// test "get deleted doc while offline with source=cache" as NoDocuments
// with version 0 are filtered by IndexedDb's RemoteDocumentCache.
// TODO(#2149): Remove this when Emulator is fixed
(t=or(r)),new aS(t,e.transformResults||[])})):[]),i=or(e.commitTime);return this.listener.T_(i,n)}// The first response is always the handshake response
return e.writeResults&&0!==e.writeResults.length&&ix(),this.P_=!0,this.listener.E_()}/**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */A_(){// TODO(dimond): Support stream resumption. We intentionally do not set the
// stream token on the handshake, ignoring any stream token we might have.
let e={};e.database=ol(this.serializer),this.n_(e)}/** Sends a group of mutations to the Firestore backend to apply. */d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof aO)n={update:oc(e,t.key,t.value)};else if(t instanceof aU)n={delete:os(e,t.key)};else if(t instanceof aP)n={update:oc(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof aB))return ix();n={verify:os(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof av)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof aw)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof aE)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof ab)return{fieldPath:t.field.canonicalString(),increment:r.Te};throw ix()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:oe(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:ix()),n})(this.serializer,e))};this.n_(t)}}/**
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
 */class o6 extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.R_=!1}V_(){if(this.R_)throw new iF(iM.FAILED_PRECONDITION,"The client has already been terminated.")}/** Invokes the provided RPC with auth and AppCheck tokens. */bo(e,t,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.bo(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iM.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iF(iM.UNKNOWN,e.toString())})}/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */Fo(e,t,r,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Fo(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===iM.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new iF(iM.UNKNOWN,e.toString())})}terminate(){this.R_=!0}}/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */class o5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,/** The current OnlineState. */this.state="Unknown"/* OnlineState.Unknown */,/**
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(iR(t),this.p_=!1):iN("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}}/**
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
 */class o3{constructor(/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */e,/** The client-side proxy for interacting with the backend. */t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},/**
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
         */this.M_=[],this.x_=i,this.x_.so(e=>{r.enqueueAndForget(async()=>{// Porting Note: Unlike iOS, `restartNetwork()` is called even when the
// network becomes unreachable as we don't have any other way to tear
// down our streams.
la(this)&&(iN("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4/* OfflineCause.ConnectivityChange */),await o8(e),e.O_.set("Unknown"/* OnlineState.Unknown */),e.F_.delete(4/* OfflineCause.ConnectivityChange */),await o7(e)}(this))})}),this.O_=new o5(r,n)}}async function o7(e){if(la(e))for(let t of e.M_)await t(/* enabled= */!0)}/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */async function o8(e){for(let t of e.M_)await t(/* enabled= */!1)}/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */function le(e,t){e.v_.has(t.targetId)||// Mark this as something the client is currently listening for.
(e.v_.set(t.targetId,t),ls(e)?li(e):lE(e).Yo()&&lr(e,t))}/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */function lt(e,t){let r=lE(e);e.v_.delete(t),r.Yo()&&ln(e,t),0===e.v_.size&&(r.Yo()?r.e_():la(e)&&// Revert to OnlineState.Unknown if the watch stream is not open and we
// have no listeners, since without any listens to send we cannot
// confirm if the stream is healthy and upgrade to OnlineState.Online.
e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */function lr(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(iY.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}lE(e).l_(t)}/**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */function ln(e,t){e.N_.Le(t),lE(e).h_(t)}function li(e){e.N_=new a2({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),lE(e).start(),e.O_.y_()}/**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */function ls(e){return la(e)&&!lE(e).Jo()&&e.v_.size>0}function la(e){return 0===e.F_.size}async function lo(e){e.v_.forEach((t,r)=>{lr(e,t)})}async function ll(e,t){e.N_=void 0,ls(e)?(e.O_.b_(t),li(e)):// The online state is set to unknown because there is no active attempt
// at establishing a connection
e.O_.set("Unknown"/* OnlineState.Unknown */)}async function lh(e,t,r){if(e.O_.set("Online"/* OnlineState.Online */),t instanceof a0&&2/* WatchTargetChangeState.Removed */===t.state&&t.cause)// to raise events
try{await /** Handles an error on a target */async function(e,t){let r=t.cause;for(let n of t.targetIds)e.v_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.v_.delete(n),e.N_.removeTarget(n))}(e,t)}catch(r){iN("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await lc(e,r)}else if(t instanceof aJ?e.N_.Ge(t):t instanceof aZ?e.N_.Xe(t):e.N_.He(t),!r.isEqual(iY.min()))try{let t=await oV(e.localStore);r.compareTo(t)>=0&&// We have received a target change with a global snapshot if the snapshot
// version is not equal to SnapshotVersion.min().
await /**
 * Takes a batch of changes from the Datastore, repackages them as a
 * RemoteEvent, and passes that on to the listener, which is typically the
 * SyncEngine.
 */function(e,t){let r=e.N_._t(t);// Update in-memory resume tokens. LocalStore will update the
// persistent view of these when applying the completed RemoteEvent.
return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.v_.get(n);// A watched target might have been removed already.
i&&e.v_.set(n,i.withResumeToken(r.resumeToken,t))}}),// existence filter mismatches.
r.targetMismatches.forEach((t,r)=>{let n=e.v_.get(t);if(!n)return;// Clear the resume token for the target, since we're in a known mismatch
// state.
e.v_.set(t,n.withResumeToken(sc.EMPTY_BYTE_STRING,n.snapshotVersion)),// deliberately don't send a resume token so that we get a full update.
ln(e,t);// Mark the target we send as being on behalf of an existence filter
// mismatch, but don't actually retain that in listenTargets. This ensures
// that we flag the first re-listen this way without impacting future
// listens of this target (that might happen e.g. on reconnect).
let i=new of(n.target,t,r,n.sequenceNumber);lr(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){iN("RemoteStore","Failed to raise snapshot:",t),await lc(e,t)}}/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */async function lc(e,t,r){if(!i3(t))throw t;e.F_.add(1/* OfflineCause.IndexedDbFailed */),await o8(e),e.O_.set("Offline"/* OnlineState.Offline */),r||// Use a simple read operation to determine if IndexedDB recovered.
// Ideally, we would expose a health check directly on SimpleDb, but
// RemoteStore only has access to persistence through LocalStore.
(r=()=>oV(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{iN("RemoteStore","Retrying IndexedDB access"),await r(),e.F_.delete(1/* OfflineCause.IndexedDbFailed */),await o7(e)})}/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */function lu(e,t){return t().catch(r=>lc(e,r,t))}async function ld(e){let t=lC(e),r=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;la(e)&&e.C_.length<10;)try{let n=await /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.C_.length&&t.e_();break}r=n.batchId,/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */function(e,t){e.C_.push(t);let r=lC(e);r.Yo()&&r.I_&&r.d_(t.mutations)}(e,n)}catch(t){await lc(e,t)}lp(e)&&lf(e)}function lp(e){return la(e)&&!lC(e).Jo()&&e.C_.length>0}function lf(e){lC(e).start()}async function lm(e){lC(e).A_()}async function lg(e){let t=lC(e);// Send the write pipeline now that the stream is established.
for(let r of e.C_)t.d_(r.mutations)}async function ly(e,t,r){let n=e.C_.shift(),i=a$.from(n,t,r);await lu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),// slot has freed up.
await ld(e)}async function lv(e,t){// If the write stream closed after the write handshake completes, a write
// operation failed and we fail the pending operation.
t&&lC(e).I_&&// This error affects the actual write.
await async function(e,t){var r;// Only handle permanent errors here. If it's transient, just let the retry
// logic kick in.
if(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */function(e){switch(e){default:return ix();case iM.CANCELLED:case iM.UNKNOWN:case iM.DEADLINE_EXCEEDED:case iM.RESOURCE_EXHAUSTED:case iM.INTERNAL:case iM.UNAVAILABLE:// Unauthenticated means something went wrong with our token and we need
// to retry with new credentials which will happen automatically.
case iM.UNAUTHENTICATED:return!1;case iM.INVALID_ARGUMENT:case iM.NOT_FOUND:case iM.ALREADY_EXISTS:case iM.PERMISSION_DENIED:case iM.FAILED_PRECONDITION:// Aborted might be retried in some scenarios, but that is dependant on
// the context and should handled individually by the calling code.
// See https://cloud.google.com/apis/design/errors.
case iM.ABORTED:case iM.OUT_OF_RANGE:case iM.UNIMPLEMENTED:case iM.DATA_LOSS:return!0}}(r=t.code)&&r!==iM.ABORTED){// This was a permanent error, the request itself was the problem
// so it's not going to succeed if we resend it.
let r=e.C_.shift();// In this case it's also unlikely that the server itself is melting
// down -- this was just a bad request so inhibit backoff on the next
// restart.
lC(e).Xo(),await lu(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),// another slot has freed up.
await ld(e)}}(e,t),// pipeline for failed writes
lp(e)&&lf(e)}async function lw(e,t){e.asyncQueue.verifyOperationInProgress(),iN("RemoteStore","RemoteStore received new credentials");let r=la(e);// Tear down and re-create our network streams. This will ensure we get a
// fresh auth token for the new user and re-fill the write pipeline with
// new mutations from the LocalStore (since mutations are per-user).
e.F_.add(3/* OfflineCause.CredentialChange */),await o8(e),r&&// Don't set the network status to Unknown if we are offline.
e.O_.set("Unknown"/* OnlineState.Unknown */),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3/* OfflineCause.CredentialChange */),await o7(e)}/**
 * Toggles the network state when the client gains or loses its primary lease.
 */async function l_(e,t){t?(e.F_.delete(2/* OfflineCause.IsSecondary */),await o7(e)):t||(e.F_.add(2/* OfflineCause.IsSecondary */),await o8(e),e.O_.set("Unknown"/* OnlineState.Unknown */))}/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function lE(e){var t,r,n;return e.B_||// Create stream (but note that it is not started yet).
(e.B_=(t=e.datastore,r=e.asyncQueue,n={Io:lo.bind(null,e),Eo:ll.bind(null,e),c_:lh.bind(null,e)},t.V_(),new o9(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.B_.Xo(),ls(e)?li(e):e.O_.set("Unknown"/* OnlineState.Unknown */)):(await e.B_.stop(),e.N_=void 0)})),e.B_}/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function lC(e){var t,r,n;return e.L_||// Create stream (but note that it is not started yet).
(e.L_=(t=e.datastore,r=e.asyncQueue,n={Io:lm.bind(null,e),Eo:lv.bind(null,e),E_:lg.bind(null,e),T_:ly.bind(null,e)},t.V_(),new o4(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.M_.push(async t=>{t?(e.L_.Xo(),await ld(e)):(await e.L_.stop(),e.C_.length>0&&(iN("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
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
 */class lb{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new iU,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
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
     */static createAndSchedule(e,t,r,n,i){let s=Date.now()+r,a=new lb(e,t,s,n,i);return a.start(r),a}/**
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
     */cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new iF(iM.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function lT(e,t){if(iR("AsyncQueue",`${t}: ${e}`),i3(e))return new iF(iM.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class lI{/** The default ordering is by key if the comparator is omitted */constructor(e){// We are adding document key comparator to the end as it's the only
// guaranteed unique property of a document.
this.comparator=e?(t,r)=>e(t,r)||i2.comparator(t.key,r.key):(e,t)=>i2.comparator(e.key,t.key),this.keyedMap=ao(),this.sortedSet=new sn(this.comparator)}/**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */static emptySet(e){return new lI(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}/**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}/** Iterates documents in order defined by "comparator" */forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}/** Inserts or updates a document with the same key */add(e){// First remove the element if we have it.
let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}/** Deletes a document with a given key */delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof lI)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new lI;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class lS{constructor(){this.k_=new sn(i2.comparator)}track(e){let t=e.doc.key,r=this.k_.get(t);r?0/* ChangeType.Added */!==e.type&&3/* ChangeType.Metadata */===r.type?this.k_=this.k_.insert(t,e):3/* ChangeType.Metadata */===e.type&&1/* ChangeType.Removed */!==r.type?this.k_=this.k_.insert(t,{type:r.type,doc:e.doc}):2/* ChangeType.Modified */===e.type&&2/* ChangeType.Modified */===r.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):2/* ChangeType.Modified */===e.type&&0/* ChangeType.Added */===r.type?this.k_=this.k_.insert(t,{type:0/* ChangeType.Added */,doc:e.doc}):1/* ChangeType.Removed */===e.type&&0/* ChangeType.Added */===r.type?this.k_=this.k_.remove(t):1/* ChangeType.Removed */===e.type&&2/* ChangeType.Modified */===r.type?this.k_=this.k_.insert(t,{type:1/* ChangeType.Removed */,doc:r.doc}):0/* ChangeType.Added */===e.type&&1/* ChangeType.Removed */===r.type?this.k_=this.k_.insert(t,{type:2/* ChangeType.Modified */,doc:e.doc}):// Added->Added
// Removed->Removed
// Modified->Added
// Removed->Modified
// Metadata->Added
// Removed->Metadata
ix():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,r)=>{e.push(r)}),e}}class lA{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}/** Returns a view snapshot as if all documents in the snapshot were added. */static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0/* ChangeType.Added */,doc:e})}),new lA(e,t,lI.emptySet(t),s,r,n,/* syncStateChanged= */!0,/* excludesMetadataChanges= */!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&s8(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
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
 */class lD{constructor(){this.Q_=void 0,this.listeners=[]}}class lk{constructor(){this.queries=new ai(e=>ae(e),s8),this.onlineState="Unknown"/* OnlineState.Unknown */,this.K_=new Set}}async function lL(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new lD),n)try{i.Q_=await e.onListen(r)}catch(r){let e=lT(r,`Initialization of query '${at(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.U_(e.onlineState),i.Q_&&t.W_(i.Q_)&&lP(e)}async function lN(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function lR(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.W_(n)&&(r=!0);i.Q_=n}}r&&lP(e)}function lO(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);// Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
// after an error.
e.queries.delete(t)}// Call all global snapshot listeners that have been set.
function lP(e){e.K_.forEach(e=>{e.next()})}/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */class lx{constructor(e,t,r){this.query=e,this.G_=t,/**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */this.z_=!1,this.j_=null,this.onlineState="Unknown"/* OnlineState.Unknown */,this.options=r||{}}/**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */W_(e){if(!this.options.includeMetadataChanges){// Remove the metadata only changes.
let t=[];for(let r of e.docChanges)3/* ChangeType.Metadata */!==r.type&&t.push(r);e=new lA(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,/* excludesMetadataChanges= */!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}/** Returns whether a snapshot was raised. */U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return(// Always raise the first event when we're synced
!e.fromCache||(!this.options.Z_||!("Offline"/* OnlineState.Offline */!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"/* OnlineState.Offline */===t));// Raise data from cache if we have any documents, have cached results before,
// or we are offline.
}H_(e){// We don't need to handle includeDocumentMetadataChanges here because
// the Metadata only changes have already been stripped out if needed.
// At this point the only changes we will see are the ones we should
// propagate.
if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges;// Generally we should have hit one of the cases above, but it's possible
// to get here if there were only metadata docChanges and they got
// stripped out.
}Y_(e){e=lA.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class lM{constructor(e){this.key=e}}class lF{constructor(e){this.key=e}}/**
 * View is responsible for computing the final merged truth of what docs are in
 * a query. It gets notified of local and remote changes to docs, and applies
 * the query filters and limits to determine the most correct possible results.
 */class lU{constructor(e,/** Documents included in the remote target */t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,/**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */this.current=!1,/** Documents in the view but not in the remote target */this.aa=ad(),/** Document Keys that have local changes */this.mutatedKeys=ad(),this.ua=an(e),this.ca=new lI(this.ua)}/**
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
     */ha(e,t){let r=t?t.Pa:new lS,n=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"/* LimitType.First */===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"/* LimitType.Last */===this.query.limitType&&n.size===this.query.limit?n.first():null;// Drop documents out to meet limit/limitToLast requirement.
if(e.inorderTraversal((e,t)=>{let h=n.get(e),c=ar(this.query,t)?t:null,u=!!h&&this.mutatedKeys.has(h.key),d=!!c&&(c.hasLocalMutations||// We only consider committed mutations for documents that were
// mutated during the lifetime of the view.
this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),p=!1;h&&c?h.data.isEqual(c.data)?u!==d&&(r.track({type:3/* ChangeType.Metadata */,doc:c}),p=!0):this.Ia(h,c)||(r.track({type:2/* ChangeType.Modified */,doc:c}),p=!0,(o&&this.ua(c,o)>0||l&&0>this.ua(c,l))&&// This doc moved from inside the limit to outside the limit.
// That means there may be some other doc in the local cache
// that should be included instead.
(a=!0)):!h&&c?(r.track({type:0/* ChangeType.Added */,doc:c}),p=!0):h&&!c&&(r.track({type:1/* ChangeType.Removed */,doc:h}),p=!0,(o||l)&&// A doc was removed from a full limit query. We'll need to
// requery from the local cache to see if we know about some other
// doc that should be in the results.
(a=!0)),p&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"/* LimitType.First */===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1/* ChangeType.Removed */,doc:e})}return{ca:s,Pa:r,es:a,mutatedKeys:i}}Ia(e,t){// We suppress the initial change event for documents that were modified as
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
applyChanges(e,t,r){let n=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;// Sort changes based on type and query comparator
let i=e.Pa.q_();i.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0/* ChangeType.Added */:return 1;case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:// A metadata change is converted to a modified change at the public
    // api layer.  Since we sort by document key and then change type,
    // metadata and modified changes must be sorted equivalently.
    return 2;case 1/* ChangeType.Removed */:return 0;default:return ix()}};return r(e)-r(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(r);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1/* SyncState.Synced */:0/* SyncState.Local */,o=a!==this._a;return(this._a=a,0!==i.length||o)?{snapshot:new lA(this.query,e.ca,n,i,e.mutatedKeys,0/* SyncState.Local */===a,o,/* excludesMetadataChanges= */!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}/**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */U_(e){return this.current&&"Offline"/* OnlineState.Offline */===e?// to refresh our syncState and generate a ViewChange as appropriate. We
// are guaranteed to get a new TargetChange that sets `current` back to
// true once the client is back online.
(this.current=!1,this.applyChanges({ca:this.ca,Pa:new lS,mutatedKeys:this.mutatedKeys,es:!1},/* updateLimboDocuments= */!1)):{Ea:[]}}/**
     * Returns whether the doc for the given key should be in limbo.
     */Aa(e){// If the remote end says it's part of this query, it's not in limbo.
return!this.oa.has(e)&&// The local store doesn't think it's a result, so it shouldn't be in limbo.
!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}/**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){// We can only determine limbo documents when we're in-sync with the server.
if(!this.current)return[];// TODO(klimt): Do this incrementally so that it's not quadratic when
// updating many documents.
let e=this.aa;this.aa=ad(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});// Diff the new limbo docs with the old limbo docs.
let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new lF(e))}),this.aa.forEach(r=>{e.has(r)||t.push(new lM(r))}),t}/**
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
Ra(e){this.oa=e.Ps,this.aa=ad();let t=this.ha(e.documents);return this.applyChanges(t,/*updateLimboDocuments=*/!0)}/**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */// PORTING NOTE: Multi-tab only.
Va(){return lA.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0/* SyncState.Local */===this._a,this.hasCachedResults)}}/**
 * QueryView contains all of the data that SyncEngine needs to keep track of for
 * a particular query.
 */class lB{constructor(/**
     * The query itself.
     */e,/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */t,/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */r){this.query=e,this.targetId=t,this.view=r}}/** Tracks a limbo resolution. */class lV{constructor(e){this.key=e,/**
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
 */class l${constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new ai(e=>ae(e),s8),this.pa=new Map,/**
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
         */this.wa=new sn(i2.comparator),/**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */this.Sa=new Map,this.ba=new oS,/** Stores user completion handlers, indexed by User and BatchId. */this.Da={},/** Stores user callbacks waiting for all pending writes to be acknowledged. */this.Ca=new Map,this.va=o_.Ln(),this.onlineState="Unknown"/* OnlineState.Unknown */,// startup. In the interim, a client should only be considered primary if
// `isPrimary` is true.
this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */async function lj(e,t){var r,n;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=lK.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=l6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lQ.bind(null,e),e.fa.c_=lR.bind(null,e.eventManager),e.fa.xa=lO.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)// already exists when EventManager calls us for the first time. This
// happens when the primary tab is already listening to this query on
// behalf of another tab and the user of the primary also starts listening
// to the query. EventManager will not have an assigned target ID in this
// case and calls `listen` to obtain this ID.
i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Va();else{let e=await (r=a.localStore,n=s3(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.Kr.getTargetData(e,n).next(i=>i?// previous targetID.
    // TODO(mcg): freshen last accessed date?
    (t=i,i5.resolve(t)):r.Kr.allocateTargetId(e).next(i=>(t=new of(n,i,"TargetPurposeListen"/* TargetPurpose.Listen */,e.currentSequenceNumber),r.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{// If Multi-Tab is enabled, the existing target data may be newer than
// the in-memory data
let t=r.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.rs=r.rs.insert(e.targetId,e),r.ss.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await lq(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&le(a.remoteStore,e)}return s}/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */async function lq(e,t,r,n,i){// PORTING NOTE: On Web only, we inject the code that registers new Limbo
// targets based on view changes. This allows us to only depend on Limbo
// changes when user code includes queries.
e.Ma=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ha(r);i.es&&// The query has a limit and some docs were removed, so we need
    // to re-run the query against the local store to make sure we
    // didn't lose any good docs that had been past the limit.
    (i=await oj(e.localStore,t.query,/* usePreviousResults= */!1).then(({documents:e})=>t.view.ha(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(i,/* updateLimboDocuments= */e.isPrimaryClient,s);return l1(e,t.targetId,a.Ea),a.snapshot})(e,t,r,n);let s=await oj(e.localStore,t,/* usePreviousResults= */!0),a=new lU(t,s.Ps),o=a.ha(s.documents),l=aY.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"/* OnlineState.Offline */!==e.onlineState,i),h=a.applyChanges(o,/* updateLimboDocuments= */e.isPrimaryClient,l);l1(e,r,h.Ea);let c=new lB(t,r,a);return e.ga.set(t,c),e.pa.has(r)?e.pa.get(r).push(t):e.pa.set(r,[t]),h.snapshot}/** Stops listening to the query. */async function lH(e,t){let r=e.ga.get(t),n=e.pa.get(r.targetId);if(n.length>1)return e.pa.set(r.targetId,n.filter(e=>!s8(e,t))),void e.ga.delete(t);e.isPrimaryClient?(// We need to remove the local query target first to allow us to verify
// whether any other client is still interested in this target.
e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await o$(e.localStore,r.targetId,/*keepPersistedTargetData=*/!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),lt(e.remoteStore,r.targetId),lZ(e,r.targetId)}).catch(i6)):(lZ(e,r.targetId),await o$(e.localStore,r.targetId,/*keepPersistedTargetData=*/!0))}/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */async function lz(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=lW.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lX.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=iX.now(),s=t.reduce((e,t)=>e.add(t.key),ad());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{// Figure out which keys do not have a remote version in the cache, this
// is needed to create the right overlay mutation: if no remote version
// presents, we do not need to create overlays as patch mutations.
// TODO(Overlay): Is there a better way to determine this? Using the
//  document version does not work because local mutations set them back
//  to 0.
let o=as,l=ad();return e._s.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;// For non-idempotent mutations (such as `FieldValue.increment()`),
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
 */function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=ay(n.transform,e||null);null!=i&&(null===r&&(r=sP.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&// NOTE: The base state should only be applied if there's some
// existing document to override, so use a Precondition of
// exists=true
s.push(new aP(e.key,t,/**
 * Returns a FieldMask built from all fields in a MapValue.
 */function e(t){let r=[];return st(t.fields,(t,n)=>{let i=new i1([t]);if(sN(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else // leaf nodes.
for(let e of t)r.push(i.child(e))}else // nodes.
r.push(i)}),new sl(r)}(t.value.mapValue),aA.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:al(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.Da[i.currentUser.toKey()])||(e=new sn(iQ)),e=e.insert(n,r),i.Da[i.currentUser.toKey()]=e,await l9(i,s.changes),await ld(i.remoteStore)}catch(t){// If we can't persist the mutation, we reject the user callback and
// don't send the mutation. The user can then retry the write.
let e=lT(t,"Failed to persist write");r.reject(e)}}/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */async function lK(e,t){try{let r=await /**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */function(e,t){let r=t.snapshotVersion,n=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e._s.newChangeBuffer({trackRemovals:!0});// Reset newTargetDataByTargetMap in case this transaction gets re-run.
n=e.rs;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;// Only update the remote keys if the target is still active. This
// ensures that we can persist the updated target data along with
// the updated assignment.
h.push(e.Kr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Kr.addMatchingKeys(i,s.addedDocuments,a)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(sc.EMPTY_BYTE_STRING,iY.min()).withLastLimboFreeSnapshotVersion(iY.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),n=n.insert(a,c),o=c,// Always persist target data if we don't already have a resume token.
(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Kr.updateTargetData(i,c))});let c=as,u=ad();// HACK: The only reason we allow a null snapshot version is so that we
// can synthesize remote events when we get permission denied errors while
// trying to resolve the state of a locally cached document that is in
// limbo.
if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),// the remote documents in advance in a single call.
h.push((s=t.documentUpdates,a=ad(),o=ad(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=as;return s.forEach((r,n)=>{let i=e.get(r);// Check if see if there is a existence state change for this document.
n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),// to ensure that rejected limbo resolutions (which fabricate
// NoDocuments with SnapshotVersion.min()) never add documents to
// cache.
n.isNoDocument()&&n.version.isEqual(iY.min())?// events. We remove these documents from cache since we lost
// access.
(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):iN("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{ls:t,hs:o}})).next(e=>{c=e.ls,u=e.hs})),!r.isEqual(iY.min())){let t=e.Kr.getLastRemoteSnapshotVersion(i).next(t=>e.Kr.setTargetsMetadata(i,i.currentSequenceNumber,r));h.push(t)}return i5.waitFor(h).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(t=>(e.rs=n,t))}(e.localStore,t);// Update `receivedDocument` as appropriate for any limbo targets.
t.targetChanges.forEach((t,r)=>{let n=e.Sa.get(r);n&&// Since this is a limbo resolution lookup, it's for a single document
// and it could be added, modified, or removed, but not a combination.
(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||ix(),t.addedDocuments.size>0?n.ma=!0:t.modifiedDocuments.size>0?n.ma||ix():t.removedDocuments.size>0&&(n.ma||ix(),n.ma=!1))}),await l9(e,r,t)}catch(e){await i6(e)}}/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */function lG(e,t,r){var n;// If we are the secondary client, we explicitly ignore the remote store's
// online state (the local client may go offline, even though the primary
// tab remains online) and only apply the primary tab's online state from
// SharedClientState.
if(e.isPrimaryClient&&0/* OnlineStateSource.RemoteStore */===r||!e.isPrimaryClient&&1/* OnlineStateSource.SharedClientState */===r){let r;let i=[];e.ga.forEach((e,r)=>{let n=r.view.U_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.U_(t)&&(r=!0)}),r&&lP(n),i.length&&e.fa.c_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */async function lQ(e,t,r){// PORTING NOTE: Multi-tab only.
e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Sa.get(t),i=n&&n.key;if(i){// TODO(klimt): We really only should do the following on permission
// denied errors, but we don't have the cause code here.
// It's a limbo doc. Create a synthetic event saying it was deleted.
// This is kind of a hack. Ideally, we would have a method in the local
// store to purge a document. However, it would be tricky to keep all of
// the local store's invariants with another method.
let r=new sn(i2.comparator);// TODO(b/217189216): This limbo document should ideally have a read time,
// so that it is picked up by any read-time based scans. The backend,
// however, does not send a read time for target removals.
r=r.insert(i,sx.newNoDocument(i,iY.min()));let n=ad().add(i),s=new aX(iY.min(),/* targetChanges= */new Map,/* targetMismatches= */new sn(iQ),r,n);await lK(e,s),// We only remove it from bookkeeping after we successfully applied the
// RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
// this query when the RemoteStore restarts the Watch stream, which should
// re-trigger the target failure.
e.wa=e.wa.remove(i),e.Sa.delete(t),l2(e)}else await o$(e.localStore,t,/* keepPersistedTargetData */!1).then(()=>lZ(e,t,r)).catch(i6)}async function lW(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=i5.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||ix(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&// We use the commitVersion as the readTime rather than the
// document's updateTime since the updateTime is not advanced
// for updates that do not modify the underlying document.
(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ad();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught
// up), so we raise user callbacks first so that they consistently happen
// before listen events.
lJ(e,n,/*error=*/null),lY(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await l9(e,i)}catch(e){await i6(e)}}async function lX(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||ix(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught up),
// so we raise user callbacks first so that they consistently happen before
// listen events.
lJ(e,t,r),lY(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await l9(e,i)}catch(e){await i6(e)}}/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */function lY(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}/** Reject all outstanding callbacks waiting for pending writes to complete. */function lJ(e,t,r){let n=e.Da[e.currentUser.toKey()];// NOTE: Mutations restored from persistence won't have callbacks, so it's
// okay for there to be no callback for this ID.
if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Da[e.currentUser.toKey()]=n}}function lZ(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(n),r&&e.fa.xa(n,r);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||// We removed the last reference for this key
l0(e,t)})}function l0(e,t){e.ya.delete(t.path.canonicalString());// It's possible that the target already got removed because the query failed. In that case,
// the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
let r=e.wa.get(t);null!==r&&(lt(e.remoteStore,r),e.wa=e.wa.remove(t),e.Sa.delete(r),l2(e))}function l1(e,t,r){for(let n of r)n instanceof lM?(e.ba.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.wa.get(r)||e.ya.has(n)||(iN("SyncEngine","New document in limbo: "+r),e.ya.add(n),l2(e))}(e,n)):n instanceof lF?(iN("SyncEngine","Document no longer in limbo: "+n.key),e.ba.removeReference(n.key,t),e.ba.containsKey(n.key)||// We removed the last reference for this key
l0(e,n.key)):ix()}/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */function l2(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){var t;let r=e.ya.values().next().value;e.ya.delete(r);let n=new i2(iZ.fromString(r)),i=e.va.next();e.Sa.set(i,new lV(n)),e.wa=e.wa.insert(n,i),le(e.remoteStore,new of(s3((t=n.path,new s4(t))),i,"TargetPurposeLimboResolution"/* TargetPurpose.LimboResolution */,i7.ae))}}async function l9(e,t,r){let n=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,r).then(t=>{// Update views if there are actual changes.
if(// secondary clients to update query state.
(t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=ox.$i(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.c_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>i5.forEach(t,t=>i5.forEach(t.Qi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>i5.forEach(t.Ki,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!i3(e))throw e;// If `notifyLocalViewChanges` fails, we did not advance the sequence
// number for the documents that were included in this transaction.
// This might trigger them to be deleted earlier than they otherwise
// would have, but it should not invalidate the integrity of the data.
iN("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.rs.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);// Advance the last limbo free snapshot version
e.rs=e.rs.insert(t,i)}}}(e.localStore,i))}async function l4(e,t){if(!e.currentUser.isEqual(t)){iN("SyncEngine","User change. New user:",t.toKey());let r=await oB(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new iF(iM.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await l9(e,r.cs)}}function l6(e,t){let r=e.Sa.get(t);if(r&&r.ma)return ad().add(r.key);{let r=ad(),n=e.pa.get(t);if(!n)return r;for(let t of n){let n=e.ga.get(t);r=r.unionWith(n.view.la)}return r}}class l5{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=o0(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var /** Manages our in-memory or durable persistence. */t,r,n,i;return t=this.persistence,r=new oF,n=e.initialUser,i=this.serializer,new oU(t,r,n,i)}createPersistence(e){return new oR(oP.Jr,this.serializer)}createSharedClientState(e){return new oH}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */class l3{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,/* startAsPrimary=*/!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lG(this.syncEngine,e,1/* OnlineStateSource.SharedClientState */),this.remoteStore.remoteSyncer.handleCredentialChange=l4.bind(null,this.syncEngine),await l_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lk}createDatastore(e){var t,r,n;let i=o0(e.databaseInfo.databaseId),s=(t=e.databaseInfo,new oJ(t));return r=e.authCredentials,n=e.appCheckCredentials,new o6(r,n,s,i)}createRemoteStore(e){var t,r,n,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,i=oK.C()?new oK:new oz,new o3(t,r,n,e=>lG(this.syncEngine,e,0/* OnlineStateSource.RemoteStore */),i)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new l$(e,t,r,n,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){iN("RemoteStore","RemoteStore shutting down."),e.F_.add(5/* OfflineCause.Shutdown */),await o8(e),e.x_.shutdown(),// triggering spurious listener events with cached data, etc.
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
 */class l7{constructor(e){this.observer=e,/**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):iR("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class l8{constructor(e,t,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=iA.UNAUTHENTICATED,this.clientId=iG.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{iN("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(iN("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new iF(iM.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new iU;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=lT(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function he(e,t){e.asyncQueue.verifyOperationInProgress(),iN("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await oB(t.localStore,e),n=e)}),// need to be terminated to allow the delete to succeed.
t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ht(e,t){e.asyncQueue.verifyOperationInProgress();let r=await hr(e);iN("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),// precedence over the offline component provider.
e.setCredentialChangeListener(e=>lw(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>lw(t.remoteStore,r)),e._onlineComponents=t}async function hr(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){iN("FirestoreClient","Using user provided OfflineComponentProvider");try{await he(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===iM.FAILED_PRECONDITION||t.code===iM.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||// When the browser is out of quota we could get either quota exceeded
// or an aborted error depending on whether the error happened during
// schema migration.
22===t.code||20===t.code||// Firefox Private Browsing mode disables IndexedDb and returns
// INVALID_STATE for any usage.
11===t.code))throw t;iO("Error using user provided cache. Falling back to memory cache: "+t),await he(e,new l5)}}else iN("FirestoreClient","Using default OfflineComponentProvider"),await he(e,new l5)}return e._offlineComponents}async function hn(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(iN("FirestoreClient","Using user provided OnlineComponentProvider"),await ht(e,e._uninitializedComponentsProvider._online)):(iN("FirestoreClient","Using default OnlineComponentProvider"),await ht(e,new l3))),e._onlineComponents}async function hi(e){let t=await hn(e),r=t.eventManager;return r.onListen=lj.bind(null,t.syncEngine),r.onUnlisten=lH.bind(null,t.syncEngine),r}/**
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
 */function hs(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */let ha=new Map;/**
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
 */function ho(e,t,r){if(!r)throw new iF(iM.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */function hl(e){if(!i2.isDocumentKey(e))throw new iF(iM.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */function hh(e){if(i2.isDocumentKey(e))throw new iF(iM.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function hc(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":ix()}function hu(e,t){if("_delegate"in e&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new iF(iM.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=hc(e);throw new iF(iM.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
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
 */class hd{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new iF(iM.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new iF(iM.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(e,t,r,n){if(!0===t&&!0===n)throw new iF(iM.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hs(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new iF(iM.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new iF(iM.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new iF(iM.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hp{/** @hideconstructor */constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hd({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new iF(iM.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new iF(iM.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hd(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new iV;switch(e.type){case"firstParty":return new iH(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new iF(iM.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(e){let t=ha.get(e);t&&(iN("ComponentProvider","Removing Datastore"),ha.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class hf{// This is the lite version of the Query class in the main SDK.
/** @hideconstructor protected */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,r){this.converter=t,this._query=r,/** The type of this Firestore reference. */this.type="query",this.firestore=e}withConverter(e){return new hf(this.firestore,e,this._query)}}/**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */class hm{/** @hideconstructor */constructor(e,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */t,r){this.converter=t,this._key=r,/** The type of this Firestore reference. */this.type="document",this.firestore=e}get _path(){return this._key.path}/**
     * The document's identifier within its collection.
     */get id(){return this._key.path.lastSegment()}/**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */get path(){return this._key.path.canonicalString()}/**
     * The collection this `DocumentReference` belongs to.
     */get parent(){return new hg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hm(this.firestore,e,this._key)}}/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */class hg extends hf{/** @hideconstructor */constructor(e,t,r){super(e,t,new s4(r)),this._path=r,/** The type of this Firestore reference. */this.type="collection"}/** The collection's identifier. */get id(){return this._query.path.lastSegment()}/**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */get path(){return this._query.path.canonicalString()}/**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */get parent(){let e=this._path.popLast();return e.isEmpty()?null:new hm(this.firestore,/* converter= */null,new i2(e))}withConverter(e){return new hg(this.firestore,e,this._path)}}function hy(e,t,...r){if(e=ei(e),// 'undefined' and 'null'.
1==arguments.length&&(t=iG.V()),ho("doc","path",t),e instanceof hp){let n=iZ.fromString(t,...r);return hl(n),new hm(e,/* converter= */null,new i2(n))}{if(!(e instanceof hm||e instanceof hg))throw new iF(iM.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(iZ.fromString(t,...r));return hl(n),new hm(e.firestore,e instanceof hg?e.converter:null,new i2(n))}}/**
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
 */class hv{constructor(){// The last promise in the queue.
this.Za=Promise.resolve(),// retried with backoff.
this.Xa=[],// be changed again.
this.eu=!1,// automatically removed after they are run or canceled.
this.tu=[],this.nu=null,// assertion sanity-checks.
this.ru=!1,this.iu=!1,this.su=[],this.Ho=new o1(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.ou=()=>{let e=oZ();e&&iN("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=oZ();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(e){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=oZ();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let t=new iU;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!i3(e))throw e;// Failure will be handled by AsyncQueue
iN("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;this.nu=e,this.ru=!1;let r=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw iR("INTERNAL UNHANDLED ERROR: ",r),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,r){this._u(),this.su.indexOf(e)>-1&&(t=0);let n=lb.createAndSchedule(this,e,t,r,e=>this.cu(e));return this.tu.push(n),n}_u(){this.nu&&ix()}verifyOperationInProgress(){}/**
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
 */class hw extends hp{/** @hideconstructor */constructor(e,t,r,n){super(e,t,r,n),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new hv,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
hE(this),this._firestoreClient.terminate()}}/**
 * @internal
 */function h_(e){return e._firestoreClient||hE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function hE(e){var t,r,n,i,s,a;let o=e._freezeSettings(),l=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",a=e._persistenceKey,new sv(i,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,hs(o.experimentalLongPollingOptions),o.useFetchStreams));e._firestoreClient=new l8(e._authCredentials,e._appCheckCredentials,e._queue,l),(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}/**
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
 */class hC{/** @hideconstructor */constructor(e){this._byteString=e}/**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */static fromBase64String(e){try{return new hC(sc.fromBase64String(e))}catch(e){throw new iF(iM.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}/**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */static fromUint8Array(e){return new hC(sc.fromUint8Array(e))}/**
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
 */class hb{/**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new iF(iM.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new i1(e)}/**
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
 */class hT{/**
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
 */class hI{/**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new iF(iM.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new iF(iM.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}/**
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
     */_compareTo(e){return iQ(this._lat,e._lat)||iQ(this._long,e._long)}}/**
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
 */let hS=/^__.*__$/;/** The result of parsing document data (e.g. for a setData call). */class hA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new aP(e,this.data,this.fieldMask,t,this.fieldTransforms):new aO(e,this.data,t,this.fieldTransforms)}}/** The result of parsing "update" data (i.e. for an updateData call). */class hD{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new aP(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hk(e){switch(e){case 0/* UserDataSource.Set */:// fall through
case 2/* UserDataSource.MergeSet */:// fall through
case 1/* UserDataSource.Update */:return!0;case 3/* UserDataSource.Argument */:case 4/* UserDataSource.ArrayArgument */:return!1;default:throw ix()}}/** A "context" object passed around while parsing user data. */class hL{/**
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
     */constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,// external call and we need to validate the entire path.
void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}/** Returns a new context with the specified settings overwritten. */Eu(e){return new hL(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.Vu(e),n}mu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Eu({path:r,Ru:!1});return n.du(),n}fu(e){// TODO(b/34871131): We don't support array paths right now; so make path
// undefined.
return this.Eu({path:void 0,Ru:!0})}gu(e){return h$(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}/** Returns 'true' if 'fieldPath' was traversed when creating this context. */contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){// TODO(b/34871131): Remove null check once we have proper paths for fields
// within arrays.
if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(hk(this.Tu)&&hS.test(e))throw this.gu('Document fields cannot begin and end with "__"')}}/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */class hN{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||o0(e)}/** Creates a new top-level parse context. */wu(e,t,r,n=!1){return new hL({Tu:e,methodName:t,yu:r,path:i1.emptyPath(),Ru:!1,pu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hR(e){let t=e._freezeSettings(),r=o0(e._databaseId);return new hN(e._databaseId,!!t.ignoreUndefinedProperties,r)}class hO extends hT{_toFieldTransform(e){if(2/* UserDataSource.MergeSet */!==e.Tu)throw 1/* UserDataSource.Update */===e.Tu?e.gu(`${this._methodName}() can only appear at the top level of your update data`):e.gu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);// No transform to add for a delete, but we need to add it to our
// fieldMask so it gets deleted.
return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hO}}/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */function hP(e,t){if(hM(// from firestore-exp.
e=ei(e)))return hF("Unsupported field value:",t,e),hx(e,t);if(e instanceof hT)// in which case we do not want to include this field in our parsed data
// (as doing so will overwrite the field directly prior to the transform
// trying to transform it). So we don't add this location to
// context.fieldMask and we return null as our parsing result.
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */return function(e,t){// Sentinels are only supported with writes, and not within arrays.
if(!hk(t.Tu))throw t.gu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.gu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)// don't handle this below. If `ignoreUndefinedProperties` is false,
// `parseScalarValue` will reject an undefined value.
return null;if(// field mask paths more granular than the top-level array.
t.path&&t.fieldMask.push(t.path),e instanceof Array){// TODO(b/34871131): Include the path containing the array in the error
// message.
// In the case of IN queries, the parsed data is an array (representing
// the set of values to be included for the IN query) that may directly
// contain additional arrays (each representing an individual field
// value), so we disable this validation.
if(t.settings.Ru&&4/* UserDataSource.ArrayArgument */!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=hP(i,t.fu(n));null==e&&// Just include nulls in the array for fields being replaced with a
// sentinel.
(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=ei(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!i8(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?am(n):af(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=iX.fromDate(e);return{timestampValue:oe(t.serializer,r)}}if(e instanceof iX){// Firestore backend truncates precision down to microseconds. To ensure
// offline mode works the same with regards to truncation, perform the
// truncation immediately without waiting for the backend to do that.
let r=new iX(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:oe(t.serializer,r)}}if(e instanceof hI)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof hC)return{bytesValue:ot(t.serializer,e._byteString)};if(e instanceof hm){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.gu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:on(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu(`Unsupported field value: ${hc(e)}`)}(e,t)}function hx(e,t){let r={};return sr(e)?// mask to ensure that the server creates a map entry.
t.path&&t.path.length>0&&t.fieldMask.push(t.path):st(e,(e,n)=>{let i=hP(n,t.Au(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function hM(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof iX||e instanceof hI||e instanceof hC||e instanceof hm||e instanceof hT)}function hF(e,t,r){if(!hM(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=hc(r);throw"an object"===n?t.gu(e+" a custom object"):t.gu(e+" "+n)}}/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */function hU(e,t,r){if(// FieldPath.
(t=ei(t))instanceof hb)return t._internalPath;if("string"==typeof t)return hV(e,t);throw h$("Field path arguments must be of type string or ",e,/* hasConverter= */!1,/* path= */void 0,r)}/**
 * Matches any characters in a field path string that are reserved.
 */let hB=RegExp("[~\\*/\\[\\]]");/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */function hV(e,t,r){if(t.search(hB)>=0)throw h$(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,/* hasConverter= */!1,/* path= */void 0,r);try{return new hb(...t.split("."))._internalPath}catch(n){throw h$(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,/* hasConverter= */!1,/* path= */void 0,r)}}function h$(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new iF(iM.INVALID_ARGUMENT,o+e+l)}/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */function hj(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class hq{// Note: This class is stripped down version of the DocumentSnapshot in
// the legacy SDK. The changes are:
// - No support for SnapshotMetadata.
// - No support for SnapshotOptions.
/** @hideconstructor protected */constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}/** Property of the `DocumentSnapshot` that provides the document's ID. */get id(){return this._key.path.lastSegment()}/**
     * The `DocumentReference` for the document included in the `DocumentSnapshot`.
     */get ref(){return new hm(this._firestore,this._converter,this._key)}/**
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
let e=new hH(this._firestore,this._userDataWriter,this._key,this._document,/* converter= */null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}/**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */// We are using `any` here to avoid an explicit cast by our users.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
get(e){if(this._document){let t=this._document.data.field(hz("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class hH extends hq{/**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */data(){return super.data()}}/**
 * Helper that calls `fromDotSeparatedString()` but wraps any error thrown.
 */function hz(e,t){return"string"==typeof t?hV(e,t):t instanceof hb?t._internalPath:t._delegate._internalPath}class hK{convertValue(e,t="none"){switch(sE(e)){case 0/* TypeOrder.NullValue */:return null;case 1/* TypeOrder.BooleanValue */:return e.booleanValue;case 2/* TypeOrder.NumberValue */:return sp(e.integerValue||e.doubleValue);case 3/* TypeOrder.TimestampValue */:return this.convertTimestamp(e.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return this.convertServerTimestamp(e,t);case 5/* TypeOrder.StringValue */:return e.stringValue;case 6/* TypeOrder.BlobValue */:return this.convertBytes(sf(e.bytesValue));case 7/* TypeOrder.RefValue */:return this.convertReference(e.referenceValue);case 8/* TypeOrder.GeoPointValue */:return this.convertGeoPoint(e.geoPointValue);case 9/* TypeOrder.ArrayValue */:return this.convertArray(e.arrayValue,t);case 10/* TypeOrder.ObjectValue */:return this.convertObject(e.mapValue,t);default:throw ix()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}/**
     * @internal
     */convertObjectMap(e,t="none"){let r={};return st(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new hI(sp(e.latitude),sp(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=sg(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(sy(e));default:return null}}convertTimestamp(e){let t=sd(e);return new iX(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=iZ.fromString(e);op(r)||ix();let n=new sw(r.get(1),r.get(3)),i=new i2(r.popFirst(5));return n.isEqual(t)||// TODO(b/64130202): Somehow support foreign references.
iR(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class hG{/** @hideconstructor */constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}/**
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
 */class hQ extends hq{/** @hideconstructor protected */constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}/**
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
let t=new hW(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,/* converter= */null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}/**
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
get(e,t={}){if(this._document){let r=this._document.data.field(hz("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}/**
 * A `QueryDocumentSnapshot` contains data read from a document in your
 * Firestore database as part of a query. The document is guaranteed to exist
 * and its data can be extracted with `.data()` or `.get(<field>)` to get a
 * specific field.
 *
 * A `QueryDocumentSnapshot` offers the same API surface as a
 * `DocumentSnapshot`. Since query results contain only existing documents, the
 * `exists` property will always be true and `data()` will never return
 * 'undefined'.
 */class hW extends hQ{/**
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
 */class hX{/** @hideconstructor */constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new hG(n.hasPendingWrites,n.fromCache),this.query=r}/** An array of all the documents in the `QuerySnapshot`. */get docs(){let e=[];return this.forEach(t=>e.push(t)),e}/** The number of documents in the `QuerySnapshot`. */get size(){return this._snapshot.docs.size}/** True if there are no documents in the `QuerySnapshot`. */get empty(){return 0===this.size}/**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new hW(this._firestore,this._userDataWriter,r.key,r,new hG(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}/**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new iF(iM.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=/** Calculates the array of `DocumentChange`s for a given `ViewSnapshot`. */function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new hW(e._firestore,e._userDataWriter,r.doc.key,r.doc,new hG(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{// A `DocumentSet` that is updated incrementally as changes are applied to use
// to lookup the index of a document.
let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3/* ChangeType.Metadata */!==e.type).map(t=>{let n=new hW(e._firestore,e._userDataWriter,t.doc.key,t.doc,new hG(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0/* ChangeType.Added */!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1/* ChangeType.Removed */!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0/* ChangeType.Added */:return"added";case 2/* ChangeType.Modified */:case 3/* ChangeType.Metadata */:return"modified";case 1/* ChangeType.Removed */:return"removed";default:return ix()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class hY extends hK{constructor(e){super(),this.firestore=e}convertBytes(e){return new hC(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new hm(this.firestore,/* converter= */null,t)}}/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */function hJ(e,t){return function(e,t){let r=new iU;return e.asyncQueue.enqueueAndForget(async()=>lz(await hn(e).then(e=>e.syncEngine),t,r)),r.promise}(h_(e),t)}new WeakMap,function(e=!0){iD=eV,eM(new es("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new hw(new ij(t.getProvider("auth-internal")),new iK(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new iF(iM.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sw(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),eq(iS,"4.2.0",void 0),eq(iS,"4.2.0","esm2017")}();/**
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
 * @fileoverview Constants used in the Firebase Storage library.
 *//**
 * Domain name for firebase storage.
 */let hZ="firebasestorage.googleapis.com",h0="storageBucket";/**
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
 * An error returned by the Firebase Storage SDK.
 * @public
 */class h1 extends Z{/**
     * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     * @param status_ - Corresponding HTTP Status Code
     */constructor(e,t,r=0){super(h2(e),`Firebase Storage: ${t} (${h2(e)})`),this.status_=r,/**
         * Stores custom error data unique to the `StorageError`.
         */this.customData={serverResponse:null},this._baseMessage=this.message,// Without this, `instanceof StorageError`, in tests for example,
// returns false.
Object.setPrototypeOf(this,h1.prototype)}get status(){return this.status_}set status(e){this.status_=e}/**
     * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
     */_codeEquals(e){return h2(e)===this.code}/**
     * Optional response message that was added by the server.
     */get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function h2(e){return"storage/"+e}function h9(){return new h1(d.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}/**
 * @internal
 */function h4(e){return new h1(d.INVALID_ARGUMENT,e)}function h6(){return new h1(d.APP_DELETED,"The Firebase app was deleted.")}/**
 * @param message - A message describing the internal error.
 */function h5(e){throw new h1(d.INTERNAL_ERROR,"Internal error: "+e)}// Shared between all platforms
(s=d||(d={})).UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",// JS specific
s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
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
 * Firebase Storage location data.
 *
 * @internal
 */class h3{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=h3.makeFromUrl(e,t)}catch(t){// Not valid URL, use as-is. This lets you put bare bucket names in
// config.
return new h3(e,"")}if(""===r.path)return r;throw new h1(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let r=null,n="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+n+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}let a=t.replace(/[.]/g,"\\."),o=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${n}/o(/([^?#]*).*)?$`,"i"),l=RegExp(`^https?://${t===hZ?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${n}/([^?#]*)`,"i"),h=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:o,indices:{bucket:1,path:3},postModify:s},{regex:l,indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<h.length;t++){let n=h[t],i=n.regex.exec(e);if(i){let e=i[n.indices.bucket],t=i[n.indices.path];t||(t=""),r=new h3(e,t),n.postModify(r);break}}if(null==r)throw new h1(d.INVALID_URL,"Invalid URL '"+e+"'.");return r}}/**
 * A request whose promise always fails.
 */class h7{constructor(e){this.promise_=Promise.reject(e)}/** @inheritDoc */getPromise(){return this.promise_}/** @inheritDoc */cancel(e=!1){}}function h8(e){return"string"==typeof e||e instanceof String}function ce(e,t,r,n){if(n<t)throw h4(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>r)throw h4(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
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
 */function ct(e,t,r){let n=t;return null==r&&(n=`https://${t}`),`${r}://${n}/v0${e}`}function cr(e){let t=encodeURIComponent,r="?";for(let n in e)if(e.hasOwnProperty(n)){let i=t(n)+"="+t(e[n]);r=r+i+"&"}return r.slice(0,-1)}(a=p||(p={}))[a.NO_ERROR=0]="NO_ERROR",a[a.NETWORK_ERROR=1]="NETWORK_ERROR",a[a.ABORT=2]="ABORT";/**
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
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */class cn{constructor(e,t,r,n,i,s,a,o,l,h,c,u=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=c,this.retry=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}/**
     * Actually starts the retry loop.
     */start_(){/**
         * @param requestWentThrough - True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */let e=(e,t)=>{let r=this.resolve_,n=this.reject_,i=t.connection;if(t.wasSuccessCode)try{let e=this.callback_(i,i.getResponse());void 0!==e?r(e):r()}catch(e){n(e)}else if(null!==i){let e=h9();e.serverResponse=i.getErrorText(),n(this.errorCallback_?this.errorCallback_(i,e):e)}else if(t.canceled){let e=this.appDelete_?h6():new h1(d.CANCELED,"User canceled the upload/download.");n(e)}else{let e=new h1(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");n(e)}};this.canceled_?e(!1,new ci(!1,null,!0)):this.backoffId_=/**
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
 * Accepts a callback for an action to perform (`doRequest`),
 * and then a callback for when the backoff has completed (`backoffCompleteCb`).
 * The callback sent to start requires an argument to call (`onRequestComplete`).
 * When `start` calls `doRequest`, it passes a callback for when the request has
 * completed, `onRequestComplete`. Based on this, the backoff continues, with
 * another call to `doRequest` and the above loop continues until the timeout
 * is hit, or a successful response occurs.
 * @description
 * @param doRequest Callback to perform request
 * @param backoffCompleteCb Callback to call when backoff has been completed
 */function(e,t,r){// TODO(andysoto): make this code cleaner (probably refactor into an actual
// type instead of a bunch of functions with state shared in the closure)
let n=1,i=null,s=null,a=!1,o=0,l=!1;function h(...e){l||(l=!0,t.apply(null,e))}function c(t){i=setTimeout(()=>{i=null,e(d,2===o)},t)}function u(){s&&clearTimeout(s)}function d(e,...t){let r;if(l){u();return}if(e){u(),h.call(null,e,...t);return}let i=2===o||a;if(i){u(),h.call(null,e,...t);return}n<64&&/* TODO(andysoto): don't back off so quickly if we know we're offline. */(n*=2),1===o?(o=2,r=0):r=(n+Math.random())*1e3,c(r)}let p=!1;function f(e){!p&&(p=!0,u(),l||(null!==i?(e||(o=2),clearTimeout(i),c(0)):e||(o=1)))}return c(0),s=setTimeout(()=>{a=!0,f(!0)},r),f}((e,t)=>{if(t){e(!1,new ci(!1,null,!0));return}let r=this.connectionFactory_();this.pendingConnection_=r;let n=e=>{let t=e.loaded,r=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,r)};null!==this.progressCallback_&&r.addUploadProgressListener(n),// connection.send() never rejects, so we don't need to have a error handler or use catch on the returned promise.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&r.removeUploadProgressListener(n),this.pendingConnection_=null;let t=r.getErrorCode()===p.NO_ERROR,i=r.getStatus();if(!t||/**
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
 * Checks the status code to see if the action should be retried.
 *
 * @param status Current HTTP status code returned by server.
 * @param additionalRetryCodes additional retry codes to check against
 */function(e,t){// The codes for which to retry came from this page:
// https://cloud.google.com/storage/docs/exponential-backoff
let r=e>=500&&e<600,n=-1!==[// Request Timeout: web server didn't receive full request in time.
408,// Too Many Requests: you're getting rate-limited, basically.
429].indexOf(e),i=-1!==t.indexOf(e);return r||n||i}(i,this.additionalRetryCodes_)&&this.retry){let t=r.getErrorCode()===p.ABORT;e(!1,new ci(!1,null,t));return}let s=-1!==this.successCodes_.indexOf(i);e(!0,new ci(s,r))})},e,this.timeout_)}/** @inheritDoc */getPromise(){return this.promise_}/** @inheritDoc */cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */class ci{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}/**
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
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */function cs(e){var t;let r;try{r=JSON.parse(e)}catch(e){return null}return"object"!=typeof(t=r)||Array.isArray(t)?null:r}/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */function ca(e){let t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
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
 */function co(e,t){return t}class cl{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||co}}let ch=null;/**
 * Contains a fully specified request.
 *
 * @param I - the type of the backend's network response.
 * @param O - the output response type used by the rest of the SDK.
 */class cc{constructor(e,t,/**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,/**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * Network layer for browsers. We use this instead of goog.net.XhrIo because
 * goog.net.XhrIo is hyuuuuge and doesn't work in React Native on Android.
 */class cu{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=p.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=p.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n){if(this.sent_)throw h5("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(let e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw h5("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw h5("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}}getResponse(){if(!this.sent_)throw h5("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw h5("cannot .getErrorText() before sending");return this.xhr_.statusText}/** Aborts the request. */abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class cd extends cu{initXhr(){this.xhr_.responseType="text"}}function cp(){return new cd}/**
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
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */class cf{constructor(e,t){this._service=e,t instanceof h3?this._location=t:this._location=h3.makeFromUrl(t,e.host)}/**
     * Returns the URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new cf(e,t)}/**
     * A reference to the root of this object's bucket.
     */get root(){let e=new h3(this._location.bucket,"");return this._newRef(this._service,e)}/**
     * The name of the bucket containing this reference's object.
     */get bucket(){return this._location.bucket}/**
     * The full path of this object.
     */get fullPath(){return this._location.path}/**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */get name(){return ca(this._location.path)}/**
     * The `StorageService` instance this `StorageReference` is associated with.
     */get storage(){return this._service}/**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */get parent(){let e=/**
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
 * @fileoverview Contains helper methods for manipulating paths.
 *//**
 * @return Null if the path is already at the root.
 */function(e){if(0===e.length)return null;let t=e.lastIndexOf("/");if(-1===t)return"";let r=e.slice(0,t);return r}(this._location.path);if(null===e)return null;let t=new h3(this._location.bucket,e);return new cf(this._service,t)}/**
     * Utility function to throw an error in methods that do not accept a root reference.
     */_throwIfRoot(e){if(""===this._location.path)throw new h1(d.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function cm(e,t){let r=null==t?void 0:t[h0];return null==r?null:h3.makeFromBucketSpec(r,e)}/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 *
 * @internal
 */class cg{constructor(/**
     * FirebaseApp associated with this StorageService instance.
     */e,t,/**
     * @internal
     */r,/**
     * @internal
     */n,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=i,this._bucket=null,/**
         * This string can be in the formats:
         * - host
         * - host:port
         */this._host=hZ,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=n?this._bucket=h3.makeFromBucketSpec(n,this._host):this._bucket=cm(this._host,this.app.options)}/**
     * The host string for this service, in the form of `host` or
     * `host:port`.
     */get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=h3.makeFromBucketSpec(this._url,e):this._bucket=cm(e,this.app.options)}/**
     * The maximum time to retry uploads in milliseconds.
     */get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ce("time",/* minValue=*/0,/* maxValue= */Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}/**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ce("time",/* minValue=*/0,/* maxValue= */Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){let e=this._appCheckProvider.getImmediate({optional:!0});if(e){let t=await e.getToken();// TODO: What do we want to do if there is an error getting the token?
// Context: appCheck.getToken() will never throw even if an error happened. In the error case, a dummy token will be
// returned along with an error field describing the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
return t.token}return null}/**
     * Stop running requests and prevent more from being created.
     */_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}/**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */_makeStorageReference(e){return new cf(this,e)}/**
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */_makeRequest(e,t,r,n,i=!0){if(this._deleted)return new h7(h6());{let s=function(e,t,r,n,i,s,a=!0){let o=cr(e.urlParams),l=e.url+o,h=Object.assign({},e.headers);return t&&(h["X-Firebase-GMPID"]=t),null!==r&&r.length>0&&(h.Authorization="Firebase "+r),h["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==n&&(h["X-Firebase-AppCheck"]=n),new cn(l,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}(e,this._appId,r,n,t,this._firebaseVersion,i);return this._requests.add(s),// Request removes itself from set when complete.
s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){let[r,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()}}let cy="@firebase/storage",cv="0.11.2",cw="storage";function c_(e,t){return function(e,t){if(!(t&&/^[A-Za-z]+:\/\//.test(t)))return(/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */function e(t,r){if(t instanceof cg){if(null==t._bucket)throw new h1(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+h0+"' property when initializing the app?");let n=new cf(t,t._bucket);return null!=r?e(n,r):n}return(// ref is a Reference
void 0!==r?/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 *
 */function(e,t){let r=function(e,t){let r=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new h3(e._location.bucket,r);return new cf(e.storage,n)}(t,r):t)}(e,t));if(e instanceof cg)return new cf(e,t);throw h4("To use ref(service, url), the first argument must be a Storage instance.")}(e=ei(e),t)}eM(new es(cw,/**
 * Cloud Storage for Firebase
 *
 * @packageDocumentation
 */function(e,{instanceIdentifier:t}){let r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new cg(r,n,i,t,eV)},"PUBLIC"/* ComponentType.PUBLIC */).setMultipleInstances(!0)),eq(cy,cv,""),eq(cy,cv,"esm2017");let cE="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var cC={randomUUID:cE};let cb=new Uint8Array(16),cT=[];for(let e=0;e<256;++e)cT.push((e+256).toString(16).slice(1));var cI=function(e,t,n){if(cC.randomUUID&&!t&&!e)return cC.randomUUID();e=e||{};let i=e.random||(e.rng||function(){// lazy load so that environments that need to polyfill have a chance to do so
if(!r&&!// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(cb)})();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return function(e,t=0){// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
return cT[e[t+0]]+cT[e[t+1]]+cT[e[t+2]]+cT[e[t+3]]+"-"+cT[e[t+4]]+cT[e[t+5]]+"-"+cT[e[t+6]]+cT[e[t+7]]+"-"+cT[e[t+8]]+cT[e[t+9]]+"-"+cT[e[t+10]]+cT[e[t+11]]+cT[e[t+12]]+cT[e[t+13]]+cT[e[t+14]]+cT[e[t+15]]}(i)};let cS=e$({apiKey:"AIzaSyAaafzn29XLZBor7sXmsi3PMDsg_cxcakk",authDomain:"ecommerce-c2b5f.firebaseapp.com",projectId:"ecommerce-c2b5f",storageBucket:"ecommerce-c2b5f.appspot.com",messagingSenderId:"267989030227",appId:"1:267989030227:web:28088cbcc5c292d8eebda6"}),cA=function(e,t){let r="object"==typeof e?e:ej(),n=eF(r,"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!n._initialized){let e=W("firestore");e&&/**
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
 */function(e,t,r,n={}){var i;let s=(e=hu(e,hp))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&iO("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=iA.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
// invalid field "uid" and missing field "sub" / "user_id".)
t=J(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new iF(iM.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new iA(s)}e._authCredentials=new i$(new iB(t,r))}}(n,...e)}return n}(cS),cD=/**
 * Gets a {@link FirebaseStorage} instance for the given Firebase app.
 * @public
 * @param app - Firebase app to get {@link FirebaseStorage} instance for.
 * @param bucketUrl - The gs:// url to your Firebase Storage Bucket.
 * If not passed, uses the app's default Storage Bucket.
 * @returns A {@link FirebaseStorage} instance.
 */function(e=ej(),t){e=ei(e);let r=eF(e,cw),n=r.getImmediate({identifier:void 0}),i=W("storage");return i&&/**
 * Modify this {@link FirebaseStorage} instance to communicate with the Cloud Storage emulator.
 *
 * @param storage - The {@link FirebaseStorage} instance
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 5001)
 * @param options - Emulator options. `options.mockUserToken` is the mock auth
 * token to use for unit testing Security Rules.
 * @public
 */function(e,t,r,n={}){!function(e,t,r,n={}){e.host=`${t}:${r}`,e._protocol="http";let{mockUserToken:i}=n;i&&(e._overrideAuthToken="string"==typeof i?i:J(i,e.app.options.projectId))}(e,t,r,n)}(n,...i),n}(cS);c_(cD),c_(cD,"images");class ck{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelFirebase is connected!")};get=async e=>{let t=await /**
 * Executes the query and returns the results as a `QuerySnapshot`.
 *
 * Note: `getDocs()` attempts to provide up-to-date data when possible by
 * waiting for data from the server, but it may return cached data or fail if
 * you are offline and the server cannot be reached. To specify this behavior,
 * invoke {@link getDocsFromCache} or {@link getDocsFromServer}.
 *
 * @returns A `Promise` that will be resolved with the results of the query.
 */function(e){e=hu(e,hf);let t=hu(e.firestore,hw),r=h_(t),n=new hY(t);return(/**
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
 */function(e){if("L"/* LimitType.Last */===e.limitType&&0===e.explicitOrderBy.length)throw new iF(iM.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new iU;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new l7({next:r=>{// Remove query first before passing event to user to avoid
    // user actions affecting the now stale query.
    t.enqueueAndForget(()=>lN(e,a)),r.fromCache&&"server"===n.source?i.reject(new iF(iM.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new lx(r,s,{includeMetadataChanges:!0,Z_:!0});return lL(e,a)})(await hi(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new hX(t,n,e,r)))}(function(e,t,...r){if(e=ei(e),ho("collection","path",t),e instanceof hp){let n=iZ.fromString(t,...r);return hh(n),new hg(e,/* converter= */null,n)}{if(!(e instanceof hm||e instanceof hg))throw new iF(iM.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(iZ.fromString(t,...r));return hh(n),new hg(e.firestore,/* converter= */null,n)}}(cA,e)),r=[];// console.log(newCollection);
return t.forEach(e=>{// console.log(`docId: "${doc.id}"`);
let t={};t.docId=e.id;let n=e.data();for(let e in n)t[e]=n[e];r.push(t)}),"productItems"===e&&r.sort((e,t)=>e.itemName.localeCompare(t.itemName)),r};addDocToFirestore=async(e,t)=>{try{let r=hy(cA,e,t.docId);await function(e,t,r){var n;e=hu(e,hm);let i=hu(e.firestore,hw),s=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return hJ(i,[/** Parse document data from a set() call. */(function(e,t,r,n,i,s={}){let a,o;let l=e.wu(s.merge||s.mergeFields?2/* UserDataSource.MergeSet */:0/* UserDataSource.Set */,t,r,i);hF("Data must be an object, but it was:",l,n);let h=hx(n,l);if(s.merge)a=new sl(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=hU(t,n,r);if(!l.contains(i))throw new iF(iM.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);hj(e,i)||e.push(i)}a=new sl(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new hA(new sP(h),a,o)})(hR(i),"setDoc",e._key,s,null!==e.converter,r).toMutation(e._key,aA.none())])}(r,t),console.log("Item/document succesfully added with docId: ",t.docId)}catch(e){console.error("Error adding document: ",e)}};updateDocInFirestore=async(e,t)=>{try{let r=hy(cA,e,t.docId);await function(e,t,r,...n){e=hu(e,hm);let i=hu(e.firestore,hw),s=hR(i);return hJ(i,[("string"==typeof// performing validation.
(t=ei(t))||t instanceof hb?/** Parse update data from a list of field/value arguments. */function(e,t,r,n,i,s){let a=e.wu(1/* UserDataSource.Update */,t,r),o=[hU(t,n,r)],l=[i];if(s.length%2!=0)throw new iF(iM.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(hU(t,s[e])),l.push(s[e+1]);let h=[],c=sP.empty();// We iterate in reverse order to pick the last value for a field if the
// user specified the field multiple times.
for(let e=o.length-1;e>=0;--e)if(!hj(h,o[e])){let t=o[e],r=l[e];// For Compat types, we have to "extract" the underlying types before
// performing validation.
r=ei(r);let n=a.mu(t);if(r instanceof hO)h.push(t);else{let e=hP(r,n);null!=e&&(h.push(t),c.set(t,e))}}let u=new sl(h);return new hD(c,u,a.fieldTransforms)}(s,"updateDoc",e._key,t,void 0,n):/** Parse update data from an update() call. */function(e,t,r,n){let i=e.wu(1/* UserDataSource.Update */,t,r);hF("Data must be an object, but it was:",i,n);let s=[],a=sP.empty();st(n,(e,n)=>{let o=hV(t,e,r);// For Compat types, we have to "extract" the underlying types before
// performing validation.
n=ei(n);let l=i.mu(o);if(n instanceof hO)s.push(o);else{let e=hP(n,l);null!=e&&(s.push(o),a.set(o,e))}});let o=new sl(s);return new hD(a,o,i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,aA.exists(!0))])}(r,t),console.log("Item/document succesfully updated in Firestore, docId: ",t.docId)}catch(e){console.error("Error updating document in Firestore: ",e)}};deleteDocFromFirestore=async(e,t)=>{try{var r;await (r=hy(cA,e,t),hJ(hu(r.firestore,hw),[new aU(r._key,aA.none())]))}catch(e){console.error("Error deleting document: ",e)}};// Support Functions
// Generate unique ID
generateUniqueId=()=>cI();// Generate a unique alphanumeric Order Number array
generateOrderNumber=e=>{let t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r="";for(let n=0;n<e;n++){let e=Math.floor(Math.random()*t.length);r+=t[e]}return r};getLinkToImage=async e=>new Promise((t,r)=>{let n=c_(cD,`images/${e}`);/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */(function(e){e._throwIfRoot("getDownloadURL");let t=function(e,t,r){let n=t.fullServerUrl(),i=ct(n,e.host,e._protocol),s=e.maxOperationRetryTime,a=new cc(i,"GET",function(t,n){let i=function(e,t,r){let n=cs(t);return null===n?null:function(e,t,r){let n={};n.type="file";let i=r.length;for(let e=0;e<i;e++){let i=r[e];n[i.local]=i.xform(n,t[i.server])}return Object.defineProperty(n,"ref",{get:function(){let t=n.bucket,r=n.fullPath,i=new h3(t,r);return e._makeStorageReference(i)}}),n}(e,n,r)}(e,n,r);return(/**
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
 * Throws the UNKNOWN StorageError if cndn is false.
 */function(e){if(!e)throw h9()}(null!==i),function(e,t,r,n){let i=cs(t);if(null===i||!h8(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let a=encodeURIComponent,o=s.split(","),l=o.map(t=>{let i=e.bucket,s=e.fullPath,o="/b/"+a(i)+"/o/"+a(s),l=ct(o,r,n),h=cr({alt:"media",token:t});return l+h});return l[0]}(i,n,e.host,e._protocol))},s);return a.errorHandler=function(e){let t=function(t,r){var n,i;let s;return 401===t.getStatus()?s=// server's error response that identifies it as an App Check error.
    t.getErrorText().includes("Firebase App Check token is invalid")?new h1(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new h1(d.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(n=e.bucket,s=new h1(d.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,s=new h1(d.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s};return function(r,n){let i=t(r,n);if(404===r.getStatus()){var s;s=e.path,i=new h1(d.OBJECT_NOT_FOUND,"Object '"+s+"' does not exist.")}return i.serverResponse=n.serverResponse,i}}(t),a}(e.storage,e._location,function(){if(ch)return ch;let e=[];e.push(new cl("bucket")),e.push(new cl("generation")),e.push(new cl("metageneration")),e.push(new cl("name","fullPath",!0));let t=new cl("name");t.xform=function(e,t){return!h8(t)||t.length<2?t:ca(t)},e.push(t);let r=new cl("size");return r.xform=/**
     * Coerces the second param to a number, if it is defined.
     */function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new cl("timeCreated")),e.push(new cl("updated")),e.push(new cl("md5Hash",null,!0)),e.push(new cl("cacheControl",null,!0)),e.push(new cl("contentDisposition",null,!0)),e.push(new cl("contentEncoding",null,!0)),e.push(new cl("contentLanguage",null,!0)),e.push(new cl("contentType",null,!0)),e.push(new cl("metadata","customMetadata",!0)),ch=e}());return e.storage.makeRequestWithTokens(t,cp).then(e=>{if(null===e)throw new h1(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e})})(ei(n)).then(e=>{t(e)}).catch(e=>{r(e)})});// Set newOrderDetails variable
setNewOrderDetails=(e,t)=>{let r=Date.now(),n={userId:e.userId,userName:e.userName,userEmail:e.userEmail,userPhone:e.userPhone,custId:e.custId,custLegalName:e.custLegalName,custBillToAddress:e.custBillToAddress,custHandlingFee:e.custHandlingFee,paymentMethod:e.paymentMethod,priceItems:t.priceItems,priceHandling:t.priceHandling,priceTotal:t.priceTotal,orderCurrency:"$",orderId:this.generateOrderNumber(8),orderDate:r,paymentDate:r,docId:this.generateUniqueId()};return n}}class cL{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class cN{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class cR{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class cO{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelUser is connected!")};getSessionIdCustomerByCustomerId=(e,t)=>{let r=t.filter(t=>t.custId===e);return r[0]}}let cP=["usersData","customersData","cartsData","ordersData","orderItemsData","productItems"],cx={wire:"C.I.A. Wire transfer.",card:"C.I.A. Company credit card.",net30:"Net30. Pay within 30 calendar days."},cM=["Dear Guest,","Welcome to the Aviation eCommerce application. This project has been developed by Seppo.digital studio, utilizing plain JavaScript and Google Firestore for educational purposes.","Please note that all names, contacts, and products displayed are fictitious and do not represent real individuals, companies, or products.","You are welcome to browse, select products, interact with the cart, and even make test purchases for demonstration purposes.","For security and data protection reasons, the feature to update the 'Bill to Address' during the order placement stage has been deactivated. However, you can still experiment with selecting different payment methods at this stage.","If you have any comments or would like to share your experience with using this application, please feel free to contact the development team at https://github.com/sergeymoryakov or seppo.digital@gmail.com."],cF=["Oops, something went wrong!","It appears you have insufficient permission rights.","Please contact your organization's purchasing approver to resolve this issue.","We sincerely apologize for the inconvenience."],cU=["Hold on a moment!","It looks like your cart is empty.","Add some items to your cart to continue with the checkout process."],cB={},cV="",c$={},cj={},cq=[],cH=[],cz={},cK={},cG=document.createElement("div");cG.innerHTML="";let cQ=document.createElement("div");cQ.innerHTML="";let cW=document.createElement("div");cW.innerHTML="";// Init cross-ref Map: image - url
let cX=new Map,cY=new class{constructor(){this.viewProducts=new _(this),this.viewCart=new C(this),this.viewOrders=new b(this),this.viewPopup=new T,this.modelFirebase=new ck,this.modelProducts=new cL,this.modelCart=new cN(this),this.modelOrders=new cR,this.modelUser=new cO,this.bodyNode=document.querySelector("body"),this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight"),this.containerPupupNode=document.getElementById("containerPupup"),this.popupContentNode=document.getElementById("popupContent")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewPopup.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelUser.checkModuleLinkage(),// Get data from database (Firebase) and keep in local dataBase{}
await this.getUpdateLocalDataBase(),// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),cB.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
cX.set(e.itemImg,t)}// RUN DISCLAIMER FIRST
this.activatePopupWelcomeDisclaimer(),console.log("Assigned to [*** sessionIdNumber ***]: ",// Assign to sessionIdNumber a userId of the first user object/document from DB (usersData[0].userId)
cV=cB.usersData[0].userId),console.log("[*** sessionIdUser ***] initiated: ",// Assign to sessionIdUser a first object/document from DB (usersData[0])
c$=cB.usersData[0]),console.log("[*** sessionIdCustomer ***] initiated: ",// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
cj=this.getSessionIdCustomerData()),// GET VALUES TO CURRENT SESSION VARIABLES
// 1. Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
cH=this.getCartItemsByUserID(cV),console.log(`[*** sessionIdCartItems ***] for User ID ${cV}: `,cH),// 2. Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
cq=this.getOrdersByUserID(cV),console.log(`[*** sessionIdOrders ***] for User ID ${cV}: `,cq),// 3. Set "sessionIdCartDetails":
cK=this.getSessionIdCartDetails(),console.log(`[*** sessionIdCartDetails ***] for User ID ${cV}: `,cK),// Left Container - Render product items
this.renderProductItemsList(cB.productItems),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(cH,cq),this.attachEventListenrs()};// TO-DO: check where it is used?
askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};// Generate unique ID
handleNewIdGeneration=()=>this.modelFirebase.generateUniqueId();// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};// Get or Update data from Firebase and keep in local dataBase{}.
getUpdateLocalDataBase=async()=>{for(let e of(console.log("Get or Update data from Firebase and keep in local dataBase{}."),cP))cB[e]=await this.modelFirebase.get(e),console.log(`[*** dataBase.${e} ***] :`,cB[e])};deleteObjectFromArrayByDocId=(e,t)=>{let r=e.filter(e=>e.docId===t);return -1!==r?(e.splice(r,1),console.log("Deleted element/document with docId = ",t)):console.log("Not found element/document with docId = ",t),e};// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
getSessionIdCustomerData=()=>cj=this.modelUser.getSessionIdCustomerByCustomerId(c$.custId,cB.customersData);// Set "sessionIdCartDetails":
getSessionIdCartDetails=()=>{let e={userId:c$.userId,userName:c$.userName,userEmail:c$.userEmail,userPhone:c$.userPhone,custId:cj.custId,custLegalName:cj.custLegalName,custBillToAddress:cj.custBillToAddress,custHandlingFee:cj.custHandlingFee,paymentMethod:cj.paymentMethod};return e};// Reset Session Cart Items (when order placed)
resetSessionIdCartItems=()=>{cH=[]};// Revert back from map an image URL by image name
getUrlByNameLocal=e=>cX.get(e);// Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
getCartItemsByUserID=e=>cB.cartsData.filter(t=>t.userId===e);// Set "sessionIdOrders" by sesstion's userId and sorted by orderDate:
getOrdersByUserID=e=>cB.ordersData.filter(t=>t.userId===e).sort((e,t)=>e.orderDate-t.orderDate);// Get "orderDetailsToDisplay" by orderNumber:
getOrderDetailsToDisplay=e=>cB.ordersData.filter(t=>t.orderId===e)[0];// Get "orderItemsToDisplay" by orderNumber:
getOrderItemsToDisplay=e=>cB.orderItemsData.filter(t=>t.orderId===e);getImageByProductId=e=>{let t=cB.productItems.filter(t=>t.itemId===e);return t[0].itemImg};getPriceByProductId=(e,t)=>{let r=e.filter(e=>e.itemId===t);return r[0].itemPrice};getProdIdFromElementId=e=>e.split("_")[1];// Get product/object from "dataBase.productItems" product ID (itemId):
getProductObjectById=e=>{// Filter product array => single object array
let t=cB.productItems.filter(t=>t.itemId===e);return 0===t.length?null:t[0]};getDocIdFromArrayByItemId=(e,t)=>{let r=e.filter(e=>e.itemId===t);return(// TEST-TBS - REMOVE FOR PROD
console.log("[*** filteredArray ***]: ",r),0===r.length)?null:r[0].docId};callToUpdateCartPriceVariable=()=>{// TEST-TBD
console.log("Received command to call for Price Variable update"),this.updateCartPriceVariable(cH,cz,cB.productItems,cj.custHandlingFee)};// MIGHT BE A PART OF MODEL:
updateCartPriceVariable=(e,t,r,n)=>{let i=0,s=0;// TO-DO: CHECK, if it is required here. Delete for now:
// console.log(
//     "MODEL - [*** sessionIdCartItems ***]: ",
//     sessionIdCartItems
// );
// console.log(
//     "MODEL - [*** sessionIdCartPrice ***]: ",
//     sessionIdCartPrice
// );
// console.log(
//     "MODEL - [*** dataBase.productItems ***]: ",
//     dataBase.productItems
// );
// console.log("MODEL - [*** sessionIdCustome ***]: ", sessionIdCustomer);
for(let t of e)i+=t.qty*this.getPriceByProductId(r,t.itemId);return s=i*n/100,t.priceItems=i,t.priceHandling=s,t.priceTotal=i+s,console.log("new sessionIdCartPrice: ",t),console.log("for sessionIdCartItems: ",e),t};// Left Container - Render product items
renderProductItemsList=e=>{let t=document.createElement("div");t.innerHTML="",t.appendChild(this.viewProducts.createProductItemsList(e)),this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Order CART
renderCartSummary=e=>{let t;t=0===e.length?this.viewCart.createEmptyCartPage(e):this.viewCart.createCartPage(e),this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Product Card
renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Right Container - Render Cart (no price) and Orders Summaries
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryNoTotal(e),i=this.viewOrders.createOrdersHistorySummary(t);// TEST-TBS - REMOVE IN PROD
// console.log("cartSummaryNoTotal: ", cartItems);
// console.log("ordersHistorySummary: ", ordersHistory);
r.appendChild(n),r.appendChild(i),this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Right Container - Render Cart (with price)
renderCartSummaryWithPrice=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryWithPrice(e,t);r.appendChild(n),// TEST-TBS - REMOVE IN PROD
// console.log("cart Summary with Total: ", cartSummaryWrapper);
this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Left Container - Render Checkout Panel
renderCheckOutPanel=()=>{this.clearContainerLeft();let e=this.viewOrders.createCheckOutWrapper();// Second argument ("true") is to create "Update" button
e.appendChild(this.viewOrders.createBillToAddressContentBlock(cK,!0)),// Second argument ("true") is to create "Update" button
e.appendChild(this.viewOrders.createPaymentMethodContentBlock(cK,!0,cx));let t=this.viewOrders.createCheckOutCartWrapper(),r=document.createElement("div");for(let e of(r.classList="checkout-cart-items",cH)){let t=this.getProductObjectById(e.itemId);// Third argument ("checkout-cart-item") is a classList to pass to 'div' element
// Fourth argument ("true") is for not to create a "qty update" feature
r.appendChild(this.viewCart.createProductCardForCart(t,e.qty,"checkout-cart-item",!1))}t.appendChild(r),t.appendChild(this.viewOrders.createUpdateButtonBlock()),e.appendChild(t),this.containerLeftNode.appendChild(e)};// Left Container - Render Order Panel
renderOrderPanel=(e,t)=>{this.clearContainerLeft();let r=this.viewOrders.createOrderWrapper(e);// Second argument ("false") is to DO NOT create "Update" button
r.appendChild(this.viewOrders.createBillToAddressContentBlock(e,!1)),// Second argument ("false") is to DO NOT create "Update" button
r.appendChild(this.viewOrders.createPaymentMethodContentBlock(e,!1,cx));let n=this.viewOrders.createCheckOutCartWrapper(),i=document.createElement("div");for(let e of(i.classList="checkout-cart-items",t)){let t=this.getProductObjectById(e.itemId);// Third argument ("checkout-cart-item") is a classList to pass to 'div' element
// Fourth argument ("true") is for not to create a "qty update" feature
i.appendChild(this.viewCart.createProductCardForCart(t,e.qty,"checkout-cart-item",!1))}n.appendChild(i),r.appendChild(n),this.containerLeftNode.appendChild(r)};// Right Container - Render Checkout Price Panel
renderCheckOutPricePanel=()=>{this.clearContainerRight(),this.containerRightNode.appendChild(this.viewOrders.createOrderSummaryPriceBlock(cz,!0))};// Right Container - Render Order Price Panel
renderOrderPricePanel=e=>{this.clearContainerRight(),this.containerRightNode.appendChild(this.viewOrders.createOrderSummaryPriceBlock(e,!1))};// SUPPORT FUNCTIONS FOR BUTTON HANDLERS
// Handle click of complex element by picking it's parent element class
findAncestorByClass=(e,t)=>{let r=e;for(;r&&!r.classList.contains(t);)r=r.parentElement;return r};// "< Back to Products" button
handleGotoProductsBtn=()=>{this.renderProductItemsList(cB.productItems),// TO-DO: CHECK, if it is required here. Delete for now:
this.renderCartAndOrdersSummary(cH,cq)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=e=>{// TEST-TBS REMOVE IN PROD
console.log(`TO-DO: Add product with ID ${e.id} to cart.`);// Get product/object ID (itemId) from DOM element ID (string)
let t=this.getProdIdFromElementId(e.id),r=this.getDocIdFromArrayByItemId(cH,t);r?this.handleQtyChangeBtn(e,1):this.addProduct(t,cV),this.renderCartAndOrdersSummary(cH,cq)};// "Go to Cart" button at right panel or checkout panel
handleGotoCartBtn=()=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to display CART."),this.updateCartPriceVariable(cH,cz,cB.productItems,cj.custHandlingFee),this.renderCartSummary(cH),this.renderCartSummaryWithPrice(cH,cz)};// Handle Order Placement
handleOrderPlacement=async()=>{if(// TEST-TBS REMOVE IN PROD
console.log("Received command to PLACE ORDER (HANDLER CONNECTED)."),0===cz.priceTotal){this.activatePopupMessage(cU);return}// 1.A. Prepare newOrderDetails to pass to Firestore
let e=JSON.parse(JSON.stringify(this.modelFirebase.setNewOrderDetails(cK,cz)));// TEST-TBS REMOVE IN PROD
console.log("[*** newOrderDetails ***] set: ",e);// 1.B. Pass newOrderDetails to Firestore
try{this.handleAddDocToFirestore("ordersData",e)}catch(e){console.error("Error adding newOrderDetails to Firestore: ",e)}// 1.C. Push newOrderDetails to dataBase.ordersData
// dataBase.ordersData.push(newOrderDetails);
// 2.A. Prepare newOrderItems to pass to Firestore
let t=JSON.parse(JSON.stringify(cH)),r=JSON.parse(JSON.stringify(e.orderId));for(let e in // TEST-TBS REMOVE IN PROD
console.log("[*** newOrderItems ***] set: ",t),t){t[e].orderId=r,console.log("[*** productItem ***] set: ",t[e]);// 2.B. Pass productItem to Firestore
try{this.handleAddDocToFirestore("orderItemsData",t[e])}catch(e){console.error("Error adding productItem to Firestore: ",e)}// 2.C. Push productItem to dataBase.orderItemsData
// dataBase.orderItemsData.push(newOrderItems[productItem]);
}// 3.A. Clear sessionIdCartItems from Firestore
for(let e in cH){console.log("[*** sessionIdCartItems[cartItem].docId ***] to delete from cartsData: ",cH[e].docId);try{this.handleDeleteDocFromFirestore("cartsData",cH[e].docId)}catch(e){console.error("Error deleting sessionIdCartItems from Firestore: ",e)}}// 3.B. Reset sessionIdCartItems
this.resetSessionIdCartItems(),console.log("UPDATE LOCAL DATABASE VARIABLES HERE");try{await this.getUpdateLocalDataBase()}catch(e){console.error("Error updating local variables: ",e)}this.handleDisplayOrder(r)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT"),this.renderCheckOutPanel(),this.renderCheckOutPricePanel()};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display CARD for product ID: ",e.id);let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r)};// Display Order By Order Number
handleDisplayOrder=e=>{console.log("Received command DISPLAY ORDER:",e);// Get "orderDetailsToDisplay" by orderNumber:
let t=this.getOrderDetailsToDisplay(e);console.log("orderDetailsToDisplay: ",t);// Get "orderItemsToDisplay" by orderNumber:
let r=this.getOrderItemsToDisplay(e);console.log("orderItemsToDisplay: ",r),this.renderOrderPanel(t,r),this.renderOrderPricePanel(t)};handleDisplayHistoricalOrder=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display ORDER with ID: ",e.id);let t=this.getProdIdFromElementId(e.id);this.handleDisplayOrder(t)};handleQtyChangeBtn=(e,t)=>{let r=this.getProdIdFromElementId(e.id);// TEST-TBS REMOVE IN PROD
console.log("Function: 'handleQtyChangeBtn()': update QTY of prod ID: ",e.id),console.log("'sessionIdCartItems': ",cH),console.log("itemId: ",r);// product/object to update:
let n=JSON.parse(JSON.stringify(cH.find(e=>e.itemId===r)));if(!n){console.log("Product/object not found");return}// remove product from array:
let i=cH.filter(e=>e.itemId!==r);n.qty+t>0?(this.updateProduct(i,n,t),this.updateCartDOM(r,n)):(this.deleteProduct(i,n),this.handleGotoCartBtn())};// Update payment method if new one is selected by User
updatePaymentMethodInSession=()=>{let e=this.handleRadioButtonSelection();null!==e?cK.paymentMethod!==e?(// Compare with current value
cK.paymentMethod=e,console.log(`Updated paymentMethod to ${e}`)):console.log("paymentMethod is the same. No update needed."):console.log("No radio button selected. Cannot update paymentMethod.")};addProduct=(e,t)=>{let r={docId:this.handleNewIdGeneration(),itemId:e,qty:1,userId:t};console.log("MODEL: try to add to database.cartsData a [*** newProductToCart *** ]: ",r),this.handleAddDocToFirestore("cartsData",r),cH.push(r),console.log("Updated [*** sessionIdCartItems ***]: ",cH)};updateProduct=(e,t,r)=>{// Modify product/object
t.qty+=r,// Add product back to array
e.push(t),// Update Firestore
this.handleUpdateDocInFirestore("cartsData",t),// Update global variable
cH=e};deleteProduct=(e,t)=>{// Delete product from Firestore
this.handleDeleteDocFromFirestore("cartsData",t.docId),// Update global variable
cH=e};updateCartDOM=(e,t)=>{//  update/re-render 'qty' in user's cart (DOM)
this.handleViewOfPartQty(e,t.qty),//  update total price 'sessionIdCartPrice' (global variable)
this.callToUpdateCartPriceVariable(),//  update/re-render 'total price' in user's cart (DOM)
this.handleViewOfTotalPrceInCart(cz.priceTotal)};// Update product QTY in CART in 2 locations: price and selector
handleViewOfPartQty=(e,t)=>{// TEST-TBS REMOVE IN PROD
console.log("Got comand to update product qty with:"),console.log("Product ID: ",e),console.log("New QTY: ",t);let r=this.getProductObjectById(e);this.viewCart.updatePartQuantity(r,t)};// Update total price (items + handling) in menu (right container)
handleViewOfTotalPrceInCart=e=>{this.viewCart.updateTotalPrice(e)};// *** POPUP SECTION FUNCTIONS ***
activatePopupWelcomeDisclaimer=()=>{// Clear Popup Content
console.log("Got comand to ACTIVATE WELCOME DISCLAIMER"),this.popupContentNode.innerHTML="";let e=this.viewPopup.createPopupMessage(cM);this.popupContentNode.appendChild(e),this.togglePopup()};activatePopupMessage=e=>{// Clear Popup Content
console.log("Got comand to ACTIVATE CUSTOM MESSAGE"),this.popupContentNode.innerHTML="";let t=this.viewPopup.createPopupMessage(e);this.popupContentNode.appendChild(t),this.togglePopup()};activatePopupUpdateAddress=()=>{// Clear Popup Content
console.log("Got comand to ACTIVATE POPUP"),this.popupContentNode.innerHTML="";let e=this.viewPopup.createPopupUpdateAddress(cK);this.popupContentNode.appendChild(e),this.togglePopup()};activatePopupUpdatePaymentMethod=()=>{// Clear Popup Content
console.log("Got comand to ACTIVATE POPUP"),this.popupContentNode.innerHTML="",this.popupContentNode.appendChild(this.viewPopup.createPopupUpdatePaymentMethod(cx)),this.togglePopup()};togglePopup=()=>{this.bodyNode.classList.toggle("body-fixed"),this.containerPupupNode.classList.toggle("popup-container-open")};// Function to handle radio button selection in POPUP SECTION
handleRadioButtonSelection=()=>{let e=document.querySelectorAll('input[type="radio"][name="method"]'),t=null;return(e.forEach(e=>{e.checked&&(t=e.id)}),t)?(console.log("Selected radio button ID: ",t),t):(console.log("No radio button selected!"),null)};// *** BUTTON CLICK HANDLERS ***
handleButtonsClickLeft=e=>{let t=e.target;// "< Back to Products" button
if(t.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "< Back to Cart" button
if(t.classList.contains("goto-cart-btn")){this.handleGotoCartBtn();return}// "Add to Cart" button at detailed product card (page)
let r=t.closest(".product-card__add-to-cart-btn");if(r){this.handleAddToCartBtn(r);return}// "Add to Cart" button at short product card (main page)
let n=this.findAncestorByClass(t,"product-item__content_price-btn");if(n){this.handleAddToCartBtn(n);return}// Product card as "button" at main page
let i=this.findAncestorByClass(t,"product-item");// Qty deduct button at Cart page
if(i&&this.handleProductItem(i),t.classList.contains("cart-element__qty-mod_deduct-btn")){this.handleQtyChangeBtn(t,-1);return}// Qty add button at Cart page
if(t.classList.contains("cart-element__qty-mod_add-btn")){this.handleQtyChangeBtn(t,1);return}// "Update" button for Bill-to-Address at checkout
let s=this.findAncestorByClass(t,"address-wrapper");s&&(console.log("Got command to UPDATE ADDRESS"),this.activatePopupUpdateAddress());// "Update" button for Payment Method at checkout
let a=this.findAncestorByClass(t,"payment-method-wrapper");a&&(console.log("Got command to UPDATE PAYMENT METHOD"),this.activatePopupUpdatePaymentMethod());// "Update" button for Cart Items at checkout
let o=this.findAncestorByClass(t,"checkout-cart-wrapper");o&&(console.log("Got command to UPDATE CHECKOUT CART ITEMS"),this.handleGotoCartBtn())};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn();// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn();// "Place Order" button at right panel
let i=this.findAncestorByClass(t,"place-order-btn");i&&(console.log("Received PLACE ORDER command."),this.handleOrderPlacement())};handleButtonsClickPupup=e=>{let t=e.target;"agreeBtn"===t.id&&(console.log("clicked element with class: ",t.classList),this.togglePopup()),"updateAddressBtn"===t.id&&(console.log("clicked element with class: ",t.classList),this.togglePopup(),this.activatePopupMessage(cF)),"updatePaymentMethodBtn"===t.id&&(console.log("clicked element with class: ",t.classList),this.updatePaymentMethodInSession(),console.log("Check if sessionIdCartDetails updated: ",cK),this.renderCheckOutPanel(),this.togglePopup())};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight),this.containerPupupNode.addEventListener("click",this.handleButtonsClickPupup)};// DATABASE SUPPORT FUNCTIONS
handleAddDocToFirestore=(e,t)=>{console.log("Controller: got a requst to add [object]: ",t),console.log("to [collction]: ",e),this.modelFirebase.addDocToFirestore(e,t)};handleUpdateDocInFirestore=(e,t)=>{console.log("Controller: got a requst update [object]: ",t),console.log("in [collction]: ",e),this.modelFirebase.updateDocInFirestore(e,t)};handleDeleteDocFromFirestore=(e,t)=>{console.log("Controller: got a requst to delete [object]: ",t),console.log("from [collection]: ",e),this.modelFirebase.deleteDocFromFirestore(e,t)}};try{cY.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.e5678d95.js.map

//# sourceMappingURL=index.e5678d95.js.map
