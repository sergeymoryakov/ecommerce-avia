!function(){function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=r.parcelRequire5d32;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},r.parcelRequire5d32=c),c.register("4G3qk",function(t,r){e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var o,n,c={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)c[t[r]]=e[t[r]]},n=function(e){var t=c[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),c.register("260Jh",function(t,r){e(t.exports,"getBundleURL",function(){return o},function(e){return o=e});var o,n={};o=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),c("4G3qk").register(JSON.parse('{"ceDhw":"index.317d083e.js","kSZwU":"icon-cart.dd455062.png","8HtV0":"icon-order.5ea58f4f.png","5XZ8c":"admin.9b8fb189.js"}'));// import iconAddOrder from "../../other_assets/icon-add-order.png";
var i={};i=c("260Jh").getBundleURL("ceDhw")+c("4G3qk").resolve("kSZwU");class s{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=e.docId;let o=document.createElement("img");o.classList="product-item__img",o.src=this.controller.getUrlByNameLocal(e.itemImg);let n=document.createElement("div");n.classList="product-item__content";let c=document.createElement("h3");c.classList="product-item__content_desc",c.textContent=e.itemName;let s=document.createElement("p");s.classList="product-item__content_part-number",s.textContent=e.itemPN;let l=document.createElement("div");l.classList="product-item__content_price-block";let a=document.createElement("h3");a.classList="product-item__content_price",a.textContent=`$${e.itemPrice}`;let d=document.createElement("button");d.classList="product-item__content_price-btn";let u=document.createElement("img");return u.classList="product-item__content_price-btn-img",u.src=/*@__PURE__*/t(i),u.alt="Select",// Append elemens to respective parents
d.appendChild(u),l.appendChild(a),l.appendChild(d),n.appendChild(c),n.appendChild(s),n.appendChild(l),r.appendChild(o),r.appendChild(n),r};// Left Container - Render product items
renderProductItems=e=>{// Clear container
this.controller.clearContainerLeft();// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}// Render product list container
this.controller.containerLeftNode.appendChild(t)}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=c("260Jh").getBundleURL("ceDhw")+c("4G3qk").resolve("8HtV0");class a{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=e=>{let t=document.createElement("button");return t.classList="cart-link-btn",t.style=`background-image: url(${e});`,t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let o=document.createElement("img");o.src=/*@__PURE__*/t(l),o.alt="Select";let n=document.createElement("span");return n.innerText=" Cart",// Append elemens to respective parents
r.appendChild(o),r.appendChild(n),e.appendChild(r),e};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// this.controller.clearContainerRight();
// Right Container - Render Cart Title
let t=this.createCartSummaryTitle(),r=document.createElement("div");for(let t of(r.classList="cart-links-wrapper",// Right Container - Render Cart Icons
console.log("Action: Right Container - Render Cart Icons"),e)){console.log("productObject: ",t),console.log("productObject.itemId: ",t.itemId);let e=this.controller.getImageByProductId(t.itemId);// FOR TEST-TBS
console.log("productImage: ",e);let o=this.controller.getUrlByNameLocal(e);// FOR TEST-TBS
console.log("imageURL: ",o);let n=this.createCartItemButton(o);r.appendChild(n)}t.appendChild(r);// Right Container - Render Go-To-Cart Button
let o=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(o),t;// this.controller.containerRightNode.appendChild(cartSummaryBlock);
}}class d{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class m{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=c("9zRuU");class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class f{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var C=c("ljOiA");// Init database instance (dataBase):
let k={},w="",I={},E={},O="",b="",y=new Map,v=new class{constructor(){this.viewProducts=new s(this),this.viewCart=new a(this),this.viewOrders=new d(this),this.viewAdmin=new u,this.viewSuperadmin=new m,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new g,this.modelCart=new p,this.modelOrders=new L,this.modelAdmin=new f,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),C.dbCollectionNames))k[e]=await this.modelFirebase.get(e);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),k.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
y.set(e.itemImg,t)}console.log("Assigned to sessionId: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionId a first ID from DB
w=k.usersData[0].userId),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
// ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionId} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.viewProducts.renderProductItems(k.productItems),// Get values to Sesstion Variables: 1-2
// 1. Get cart items by sesstion user ID:
I=this.getCartItemsByUserID(w),console.log(`Cart items (sessionIdCart) for User ID ${w}: `,I),// 2. Get orders list by user ID:
E=this.getOrdersByUserID(w),console.log(`Orders History (sessionIdOrders) for User ID ${w}: `,E),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(I,E);// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// TEST & TBS ITEMS
};// NEED VERIFY
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("span");r.innerHTML="",O=this.viewCart.createNewCartSummaryNoTotal(e),b=this.viewOrders.createOrdersHistorySummary(t),// TEST-TBS - REMOVE FO PROD
console.log("cartSummaryNoTotal: ",O),console.log("ordersHistorySummary: ",b),this.clearContainerRight(),r.appendChild(O),r.appendChild(b),this.containerRightNode.appendChild(r)};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>y.get(e);getCartItemsByUserID=e=>k.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>k.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=k.productItems.filter(t=>t.id===e);return console.log("productObject: ",t),console.log("productObject[0].itemImg: ",t[0].itemImg),t[0].itemImg}};try{v.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.317d083e.js.map

//# sourceMappingURL=index.317d083e.js.map
