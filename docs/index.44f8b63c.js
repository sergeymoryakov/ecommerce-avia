!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},c=r.parcelRequire5d32;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},r.parcelRequire5d32=c),c.register("4G3qk",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var n,o,c={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)c[t[r]]=e[t[r]]},o=function(e){var t=c[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),c.register("260Jh",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,o={};n=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),c("4G3qk").register(JSON.parse('{"ceDhw":"index.44f8b63c.js","4M8Gf":"icon-add-order.d5dcde0a.png","kSZwU":"icon-cart.dd455062.png","8HtV0":"icon-order.5ea58f4f.png","baUMc":"admin.ed3ff856.js"}'));var i={};i=c("260Jh").getBundleURL("ceDhw")+c("4G3qk").resolve("4M8Gf");var d={};d=c("260Jh").getBundleURL("ceDhw")+c("4G3qk").resolve("kSZwU");class l{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.docId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let o=document.createElement("div");o.classList="product-item__content";let c=document.createElement("h3");c.classList="product-item__content_desc",c.textContent=e.itemName;let i=document.createElement("p");i.classList="product-item__content_part-number",i.textContent=e.itemPN;let l=document.createElement("div");l.classList="product-item__content_price-block";let a=document.createElement("h3");a.classList="product-item__content_price",a.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.docId}`;let u=document.createElement("img");return u.classList="product-item__content_price-btn-img",u.src=/*@__PURE__*/t(d),u.alt="Select",// Append elemens to respective parents
s.appendChild(u),l.appendChild(a),l.appendChild(s),o.appendChild(c),o.appendChild(i),o.appendChild(l),r.appendChild(n),r.appendChild(o),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.docId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let o=document.createElement("div");o.classList="product-card__top-wrapper";let c=document.createElement("div");c.classList="product-card__img-wrapper";let d=document.createElement("img");d.classList="product-card__img",d.src=this.controller.getUrlByNameLocal(e.itemImg);let l=document.createElement("div");l.classList="product-card__summary-wrapper";let a=document.createElement("div");a.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let u=document.createElement("p");u.classList="product-card__support-txt",u.textContent="Part Number: ";let m=document.createElement("h3");m.classList="product-card__part-number",m.textContent=e.itemPN;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let g=document.createElement("p");g.classList="product-card__support-txt",g.textContent="Condition: ";let L=document.createElement("h3");L.classList="product-card__condition",L.textContent=e.itemCondition;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let E=document.createElement("p");E.classList="product-card__support-txt",E.textContent="Availability: ";let f=document.createElement("h3");f.classList="product-card__availability",f.textContent=e.itemLeadTime;let I=document.createElement("button");I.classList="product-card__add-to-cart-btn";let k=document.createElement("img");// addToCartBtnImg.classList = "product-item__content_price-btn-img";
k.src=/*@__PURE__*/t(i),k.alt="Select";let w=document.createElement("span");w.innerText=" Add to Cart";let b=document.createElement("div");b.classList="product-card__bottom-wrapper";let v=document.createElement("h3");v.classList="product-card__description",v.textContent="Product Description";let y=document.createElement("p");return y.classList="product-card__description-text",y.textContent=e.itemDescription,// TO-DO STARTED
c.appendChild(d),a.appendChild(s),a.appendChild(u),a.appendChild(m),a.appendChild(p),a.appendChild(h),a.appendChild(g),a.appendChild(L),a.appendChild(C),a.appendChild(_),a.appendChild(E),a.appendChild(f),I.appendChild(k),I.appendChild(w),l.appendChild(a),l.appendChild(I),o.appendChild(c),o.appendChild(l),b.appendChild(v),b.appendChild(y),r.appendChild(n),r.appendChild(o),r.appendChild(b),console.log("productCardMain: ",r),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var a={};a=c("260Jh").getBundleURL("ceDhw")+c("4G3qk").resolve("8HtV0");class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(a),n.alt="Select";let o=document.createElement("span");return o.innerText=" Cart",// Append elemens to respective parents
r.appendChild(n),r.appendChild(o),e.appendChild(r),e};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// this.controller.clearContainerRight();
// Right Container - Render Cart Title
let t=this.createCartSummaryTitle(),r=document.createElement("div");for(let t of(r.classList="cart-links-wrapper",// Right Container - Render Cart Icons
console.log("Action: Right Container - Render Cart Icons"),e)){// TEST-TBS - REMOVE IN PROD
console.log("productObject: ",t),console.log("productObject.itemId: ",t.itemId);let e=this.controller.getImageByProductId(t.itemId);// FOR TEST-TBS
console.log("productImage: ",e);let n=this.controller.getUrlByNameLocal(e),o=this.createCartItemButton(n,t.docId);r.appendChild(o)}t.appendChild(r);// Right Container - Render Go-To-Cart Button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t;// this.controller.containerRightNode.appendChild(cartSummaryBlock);
}}class u{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t}}class m{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=c("9zRuU");class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var E=c("ljOiA");// Init database instance (dataBase):
let f={},I="",k={},w={},b=document.createElement("div");b.innerHTML="";let v=document.createElement("div");v.innerHTML="";let y=document.createElement("div");y.innerHTML="";// Init cross-ref Map: image - url
let O=new Map,M=new class{constructor(){this.viewProducts=new l(this),this.viewCart=new s(this),this.viewOrders=new u(this),this.viewAdmin=new m,this.viewSuperadmin=new p,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new g,this.modelCart=new L,this.modelOrders=new C,this.modelAdmin=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),E.dbCollectionNames))f[e]=await this.modelFirebase.get(e),console.log(`dataBase.${e}: `,f[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),f.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
O.set(e.itemImg,t)}console.log("Assigned to sessionId: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionId a first ID from DB
I=f.usersData[0].userId),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
// ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionId} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(f.productItems),// Get values to Sesstion Variables: 1-2
// 1. Get cart items by sesstion user ID:
k=this.getCartItemsByUserID(I),console.log(`Cart items (sessionIdCart) for User ID ${I}: `,k),// 2. Get orders list by user ID:
w=this.getOrdersByUserID(I),console.log(`Orders History (sessionIdOrders) for User ID ${I}: `,w),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(k,w),// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// TEST & TBS ITEMS
this.attachEventListenrs()};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>O.get(e);getCartItemsByUserID=e=>f.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>f.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=f.productItems.filter(t=>t.id===e);// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject[0].itemImg: ", productObject[0].itemImg);
return t[0].itemImg};getProdIdFromElementId=e=>e.split("_")[1];getProductObjectById=e=>{// Filter product array => single object array
let t=f.productItems.filter(t=>t.docId===e);// return object
return t[0]};// Left Container - Render product items
renderProductItemsList=e=>{let t=document.createElement("div");t.innerHTML="",t.appendChild(this.viewProducts.createProductItemsList(e)),// TEST-TBS - REMOVE FOR PROD
// Reset global variable:
// productsList.innerHTML = "";
// productsList.appendChild(productItemsList);
// TEST-TBS - REMOVE FOR PROD
// console.log("productsList: ", productsList);
// console.log("productsList: ", productsList.innerHTML);
this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// TEST-TBS - REMOVE FOR PROD
// Left Container - Re-Render product Items
// returnRenderProductsList = () => {
//     // TEST-TBS - REMOVE FOR PROD
//     console.log("productsList: ", productsList.innerHTML);
//     this.clearContainerLeft();
//     this.containerLeftNode.appendChild(productsList);
// };
// Right Container - Render Cart (no price) and Orders Summaries
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("div");r.innerHTML="",v.appendChild(this.viewCart.createNewCartSummaryNoTotal(e)),y.appendChild(this.viewOrders.createOrdersHistorySummary(t)),// TEST-TBS - REMOVE IN PROD
console.log("cartSummaryNoTotal: ",v),console.log("ordersHistorySummary: ",y),r.appendChild(v),r.appendChild(y),this.clearContainerRight(),this.containerRightNode.appendChild(r)};renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};handleButtonsClickLeft=e=>{let t=e.target;t.classList.contains("goto-products-btn")&&this.renderProductItemsList(f.productItems);// Add to cart button (from inside the detailed card)
// Get the closest parent with specific class name
let r=t.closest(".product-card__add-to-cart-btn");r&&console.log("TO-DO: Add product to cart.");// MAIN PAGE - Product Items Cards
// Check if require to add product to cart
// (if the clicked element or any of its parent elements
// have the class "product-item__content_price-btn")
let n=t;for(;null!==n&&!n.classList.contains("product-item__content_price-btn");)n=n.parentElement;if(null!==n){console.log("Button clicked"),console.log("Button id: ",n.id);// Identify Product to put add to cart
let e=this.getProdIdFromElementId(n.id);// TO-DO:
console.log(`TO-DO: Add product with ID ${e} to cart.`);return}for(// MAIN PAGE - Product Items Cards
// Action call: Render if product card clicked
// (Check if the clicked element or any of its parent elements have the class "product-item")
n=t;null!==n&&!n.classList.contains("product-item");)n=n.parentElement;if(null!==n){console.log("Clicked inside product item"),console.log("currentElement class: ",n.classList);// Identify Product to display / render card
let e=this.getProdIdFromElementId(n.id);console.log("Product ID to display: ",e);let t=this.getProductObjectById(e);this.renderProductCard(t)}};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&console.log("Received command to display PRODUCT CARD with ID: ",t.id),t.classList.contains("order-number-btn")&&console.log("Received command to display ORDER with ID: ",t.id);// TO-DO
// Display CART button (from right panel)
// Get the closest parent with specific class name
let r=t.closest(".cart-goto-btn");r&&console.log("Received command to display CART.");// if (target.classList.contains("")) {
//     console.log("clicked element with class: ", target.classList)
// }
};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)}};try{M.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.44f8b63c.js.map

//# sourceMappingURL=index.44f8b63c.js.map
