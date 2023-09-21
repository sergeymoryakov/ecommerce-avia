!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},i=n.parcelRequire5d32;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in c){var t=c[e];delete c[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){c[e]=t},n.parcelRequire5d32=i),i.register("4G3qk",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return c},function(e){return c=e});var r,c,i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},c=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("260Jh",function(t,n){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,c={};r=function(e){var t=c[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),c[e]=t),t}}),i("4G3qk").register(JSON.parse('{"ceDhw":"index.057971bc.js","4M8Gf":"icon-add-order.d5dcde0a.png","kSZwU":"icon-cart.dd455062.png","8HtV0":"icon-order.5ea58f4f.png","baUMc":"admin.ed3ff856.js"}'));var o={};o=i("260Jh").getBundleURL("ceDhw")+i("4G3qk").resolve("4M8Gf");var a={};a=i("260Jh").getBundleURL("ceDhw")+i("4G3qk").resolve("kSZwU");class d{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let n=document.createElement("div");n.classList="product-item",n.id=`product-card_${e.docId}`;let r=document.createElement("img");r.classList="product-item__img",r.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="product-item__content";let i=document.createElement("h3");i.classList="product-item__content_desc",i.textContent=e.itemName;let o=document.createElement("p");o.classList="product-item__content_part-number",o.textContent=e.itemPN;let d=document.createElement("div");d.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.docId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(a),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),d.appendChild(l),d.appendChild(s),c.appendChild(i),c.appendChild(o),c.appendChild(d),n.appendChild(r),n.appendChild(c),n};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let n of(t.classList="product-list",e)){let e=this.createProductItemCard(n);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{// Create elements
let n=document.createElement("div");n.classList="product-card",n.id=`prodCard_${e.docId}`;let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let c=document.createElement("div");c.classList="product-card__top-wrapper";let i=document.createElement("div");i.classList="product-card__img-wrapper";let a=document.createElement("img");a.classList="product-card__img",a.src=this.controller.getUrlByNameLocal(e.itemImg);let d=document.createElement("div");d.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let p=document.createElement("h3");p.classList="product-card__part-number",p.textContent=e.itemPN;let u=document.createElement("p");u.classList="product-card__support-txt",u.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let L=document.createElement("h3");L.classList="product-card__condition",L.textContent=e.itemCondition;let g=document.createElement("p");g.classList="product-card__support-txt",g.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let E=document.createElement("p");E.classList="product-card__support-txt",E.textContent="Availability: ";let f=document.createElement("h3");f.classList="product-card__availability",f.textContent=e.itemLeadTime;let v=document.createElement("button");v.classList="product-card__add-to-cart-btn";let w=document.createElement("img");// addToCartBtnImg.classList = "product-item__content_price-btn-img";
w.src=/*@__PURE__*/t(o),w.alt="Select";let I=document.createElement("span");I.innerText=" Add to Cart";let k=document.createElement("div");k.classList="product-card__bottom-wrapper";let b=document.createElement("h3");b.classList="product-card__description",b.textContent="Product Description";let y=document.createElement("p");return y.classList="product-card__description-text",y.textContent=e.itemDescription,// TO-DO STARTED
i.appendChild(a),l.appendChild(s),l.appendChild(m),l.appendChild(p),l.appendChild(u),l.appendChild(h),l.appendChild(C),l.appendChild(L),l.appendChild(g),l.appendChild(_),l.appendChild(E),l.appendChild(f),v.appendChild(w),v.appendChild(I),d.appendChild(l),d.appendChild(v),c.appendChild(i),c.appendChild(d),k.appendChild(b),k.appendChild(y),n.appendChild(r),n.appendChild(c),n.appendChild(k),console.log("productCardMain: ",n),n}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=i("260Jh").getBundleURL("ceDhw")+i("4G3qk").resolve("8HtV0");class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let n=document.createElement("button");return n.classList="cart-link-btn",n.id=`cart-link-btn_${t}`,n.style=`background-image: url(${e});`,n};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let n=document.createElement("button");n.classList="cart-goto-btn";let r=document.createElement("img");r.src=/*@__PURE__*/t(l),r.alt="Select";let c=document.createElement("span");return c.innerText=" Cart",// Append elemens to respective parents
n.appendChild(r),n.appendChild(c),e.appendChild(n),e};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// this.controller.clearContainerRight();
// Right Container - Render Cart Title
let t=this.createCartSummaryTitle(),n=document.createElement("div");// Right Container - Render Cart Icons
// console.log("Action: Right Container - Render Cart Icons");
for(let t of(n.classList="cart-links-wrapper",e)){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(t.itemId),r=this.controller.getUrlByNameLocal(e),c=this.createCartItemButton(r,t.docId);n.appendChild(c)}t.appendChild(n);// Right Container - Render Go-To-Cart Button
let r=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(r),t;// this.controller.containerRightNode.appendChild(cartSummaryBlock);
};// Left Container - Create Product Item Card block
createProductCardForCart=e=>{// Create elements
let t=document.createElement("div");t.classList="cart-item",// TO-DO : verify if "itemId" is better to use instead of "docId" here:
t.id=`cart-item_${e.docId}`;let n=document.createElement("div");n.classList="cart-item__img-wrapper";let r=document.createElement("img");r.classList="cart-item__img",r.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="cart-item__summary-wrapper";let i=document.createElement("div");i.classList="cart-item__summary";let o=document.createElement("div");o.classList="cart-item__element-wrapper";let a=document.createElement("h1");a.classList="cart-item__product-name",a.textContent=e.itemName;let d=document.createElement("div");d.classList="cart-item__element-wrapper";let l=document.createElement("p");l.classList="cart-item__support-txt",l.textContent="Part Number: ";let s=document.createElement("h3");s.classList="cart-item__part-number",s.textContent=e.itemPN;let m=document.createElement("div");m.classList="cart-item__element-wrapper";let p=document.createElement("p");p.classList="cart-item__support-txt",p.textContent="Condition: ";let u=document.createElement("h3");u.classList="cart-item__condition",u.textContent=e.itemCondition;let h=document.createElement("div");h.classList="cart-item__element-wrapper";let C=document.createElement("p");C.classList="cart-item__support-txt",C.textContent="Certification: ";let L=document.createElement("h3");L.classList="cart-item__certification",L.textContent=e.itemCertification;let g=document.createElement("div");g.classList="cart-item__element-wrapper";let _=document.createElement("p");_.classList="cart-item__support-txt",_.textContent="Availability: ";let E=document.createElement("h3");E.classList="cart-item__availability",E.textContent=e.itemLeadTime;let f=document.createElement("div");f.classList="cart-item__price-qty";let v=document.createElement("h3");v.classList="cart-item__product-price",v.textContent=`${e.itemCurrency} ${e.itemPrice} x ${e.itemQty}`;let w=document.createElement("div");w.classList="cart-element__qty-mod_wrapper";let I=document.createElement("button");I.classList="cart-element__qty-mod_deduct-btn",I.innerText=" - ";let k=document.createElement("button");k.classList="cart-element__qty-mod_qty",k.innerText=e.itemQty;let b=document.createElement("button");return b.classList="cart-element__qty-mod_add-btn",b.innerText=" + ",// Assembly HTML code:
n.appendChild(r),o.appendChild(a),i.appendChild(o),d.appendChild(l),d.appendChild(s),i.appendChild(d),m.appendChild(p),m.appendChild(u),i.appendChild(m),h.appendChild(C),h.appendChild(L),i.appendChild(h),g.appendChild(_),g.appendChild(E),i.appendChild(g),w.appendChild(I),w.appendChild(k),w.appendChild(b),f.appendChild(v),f.appendChild(w),i.appendChild(f),c.appendChild(i),t.appendChild(n),t.appendChild(c),console.log("productCardMain: ",t),t}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),n=document.createElement("div");for(let t of(n.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,n.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(n),t}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=i("9zRuU");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var E=i("ljOiA");// Init database instance (dataBase):
let f={},v="",w={},I={},k=document.createElement("div");k.innerHTML="";let b=document.createElement("div");b.innerHTML="";let y=document.createElement("div");y.innerHTML="";// Init cross-ref Map: image - url
let x=new Map,O=new class{constructor(){this.viewProducts=new d(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new p,this.viewSuperadmin=new u,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new L,this.modelOrders=new g,this.modelAdmin=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),E.dbCollectionNames))f[e]=await this.modelFirebase.get(e),console.log(`dataBase.${e}: `,f[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),f.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
x.set(e.itemImg,t)}console.log("Assigned to sessionId: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionId a first ID from DB
v=f.usersData[0].userId),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
// ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionId} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(f.productItems),// Get values to Sesstion Variables: 1-2
// 1. Get cart items by sesstion user ID:
w=this.getCartItemsByUserID(v),console.log(`Cart items (sessionIdCart) for User ID ${v}: `,w),// 2. Get orders list by user ID:
I=this.getOrdersByUserID(v),console.log(`Orders History (sessionIdOrders) for User ID ${v}: `,I),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(w,I),// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// TEST & TBS ITEMS
this.attachEventListenrs()};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>x.get(e);getCartItemsByUserID=e=>f.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>f.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=f.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
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
this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Order CART
renderCartSummary=e=>{let t=this.viewCart.createProductCardForCart(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// TEST-TBS - REMOVE FOR PROD
// Left Container - Re-Render product Items
// returnRenderProductsList = () => {
//     // TEST-TBS - REMOVE FOR PROD
//     console.log("productsList: ", productsList.innerHTML);
//     this.clearContainerLeft();
//     this.containerLeftNode.appendChild(productsList);
// };
// Right Container - Render Cart (no price) and Orders Summaries
renderCartAndOrdersSummary=(e,t)=>{let n=document.createElement("div");n.innerHTML="",b.appendChild(this.viewCart.createNewCartSummaryNoTotal(e)),y.appendChild(this.viewOrders.createOrdersHistorySummary(t)),// TEST-TBS - REMOVE IN PROD
console.log("cartSummaryNoTotal: ",b),console.log("ordersHistorySummary: ",y),n.appendChild(b),n.appendChild(y),this.clearContainerRight(),this.containerRightNode.appendChild(n)};renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};handleButtonsClickLeft=e=>{let t=e.target;t.classList.contains("goto-products-btn")&&this.renderProductItemsList(f.productItems);// Add to cart button (from inside the detailed card)
// Get the closest parent with specific class name
let n=t.closest(".product-card__add-to-cart-btn");n&&console.log("TO-DO: Add product to cart.");// MAIN PAGE - Product Items Cards
// Check if require to add product to cart
// (if the clicked element or any of its parent elements
// have the class "product-item__content_price-btn")
let r=t;for(;null!==r&&!r.classList.contains("product-item__content_price-btn");)r=r.parentElement;if(null!==r){console.log("Button clicked"),console.log("Button id: ",r.id);// Identify Product to put add to cart
let e=this.getProdIdFromElementId(r.id);// TO-DO:
console.log(`TO-DO: Add product with ID ${e} to cart.`);return}for(// MAIN PAGE - Product Items Cards
// Action call: Render if product card clicked
// (Check if the clicked element or any of its parent elements have the class "product-item")
r=t;null!==r&&!r.classList.contains("product-item");)r=r.parentElement;if(null!==r){console.log("Clicked inside product item"),console.log("currentElement class: ",r.classList);// Identify Product to display / render card
let e=this.getProdIdFromElementId(r.id);console.log("Product ID to display: ",e);let t=this.getProductObjectById(e);this.renderProductCard(t)}};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&console.log("Received command to display PRODUCT CARD with ID: ",t.id),t.classList.contains("order-number-btn")&&console.log("Received command to display ORDER with ID: ",t.id);// TO-DO
// Display CART button (from right panel)
// Get the closest parent with specific class name
let n=t.closest(".cart-goto-btn");n&&(console.log("Received command to display CART."),this.renderCartSummary(f.productItems[0]));// if (target.classList.contains("")) {
//     console.log("clicked element with class: ", target.classList)
// }
};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)}};try{O.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.057971bc.js.map

//# sourceMappingURL=index.057971bc.js.map
