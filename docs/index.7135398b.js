function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},i=n.parcelRequire5d32;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in c){var t=c[e];delete c[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){c[e]=t},n.parcelRequire5d32=i),i.register("d5gZm",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return c},function(e){return c=e});var r,c,i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},c=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("d5gZm").register(JSON.parse('{"bjFny":"index.7135398b.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","7kASp":"admin.1eb8766c.js"}'));var o={};o=new URL(i("d5gZm").resolve("3XKo6"),import.meta.url).toString();var d={};d=new URL(i("d5gZm").resolve("jyKjU"),import.meta.url).toString();class a{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let n=document.createElement("div");n.classList="product-item",n.id=`product-card_${e.docId}`;let r=document.createElement("img");r.classList="product-item__img",r.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="product-item__content";let i=document.createElement("h3");i.classList="product-item__content_desc",i.textContent=e.itemName;let o=document.createElement("p");o.classList="product-item__content_part-number",o.textContent=e.itemPN;let a=document.createElement("div");a.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.docId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(d),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),a.appendChild(l),a.appendChild(s),c.appendChild(i),c.appendChild(o),c.appendChild(a),n.appendChild(r),n.appendChild(c),n};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let n of(t.classList="product-list",e)){let e=this.createProductItemCard(n);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{// Create elements
let n=document.createElement("div");n.classList="product-card",n.id=`prodCard_${e.docId}`;let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let c=document.createElement("div");c.classList="product-card__top-wrapper";let i=document.createElement("div");i.classList="product-card__img-wrapper";let d=document.createElement("img");d.classList="product-card__img",d.src=this.controller.getUrlByNameLocal(e.itemImg);let a=document.createElement("div");a.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let p=document.createElement("h3");p.classList="product-card__part-number",p.textContent=e.itemPN;let u=document.createElement("p");u.classList="product-card__support-txt",u.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let L=document.createElement("h3");L.classList="product-card__condition",L.textContent=e.itemCondition;let g=document.createElement("p");g.classList="product-card__support-txt",g.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let E=document.createElement("p");E.classList="product-card__support-txt",E.textContent="Availability: ";let f=document.createElement("h3");f.classList="product-card__availability",f.textContent=e.itemLeadTime;let v=document.createElement("button");v.classList="product-card__add-to-cart-btn";let I=document.createElement("img");// addToCartBtnImg.classList = "product-item__content_price-btn-img";
I.src=/*@__PURE__*/t(o),I.alt="Select";let y=document.createElement("span");y.innerText=" Add to Cart";let w=document.createElement("div");w.classList="product-card__bottom-wrapper";let b=document.createElement("h3");b.classList="product-card__description",b.textContent="Product Description";let k=document.createElement("p");return k.classList="product-card__description-text",k.textContent=e.itemDescription,// TO-DO STARTED
i.appendChild(d),l.appendChild(s),l.appendChild(m),l.appendChild(p),l.appendChild(u),l.appendChild(h),l.appendChild(C),l.appendChild(L),l.appendChild(g),l.appendChild(_),l.appendChild(E),l.appendChild(f),v.appendChild(I),v.appendChild(y),a.appendChild(l),a.appendChild(v),c.appendChild(i),c.appendChild(a),w.appendChild(b),w.appendChild(k),n.appendChild(r),n.appendChild(c),n.appendChild(w),console.log("productCardMain: ",n),n}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=new URL(i("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
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
t.id=`cart-item_${e.docId}`;let n=document.createElement("div");n.classList="cart-item__img-wrapper";let r=document.createElement("img");r.classList="cart-item__img",r.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="cart-item__summary-wrapper";let i=document.createElement("div");i.classList="cart-item__summary";let o=document.createElement("div");o.classList="cart-item__element-wrapper";let d=document.createElement("h1");d.classList="cart-item__product-name",d.textContent=e.itemName;let a=document.createElement("div");a.classList="cart-item__element-wrapper";let l=document.createElement("p");l.classList="cart-item__support-txt",l.textContent="Part Number: ";let s=document.createElement("h3");s.classList="cart-item__part-number",s.textContent=e.itemPN;let m=document.createElement("div");m.classList="cart-item__element-wrapper";let p=document.createElement("p");p.classList="cart-item__support-txt",p.textContent="Condition: ";let u=document.createElement("h3");u.classList="cart-item__condition",u.textContent=e.itemCondition;let h=document.createElement("div");h.classList="cart-item__element-wrapper";let C=document.createElement("p");C.classList="cart-item__support-txt",C.textContent="Certification: ";let L=document.createElement("h3");L.classList="cart-item__certification",L.textContent=e.itemCertification;let g=document.createElement("div");g.classList="cart-item__element-wrapper";let _=document.createElement("p");_.classList="cart-item__support-txt",_.textContent="Availability: ";let E=document.createElement("h3");E.classList="cart-item__availability",E.textContent=e.itemLeadTime;let f=document.createElement("div");f.classList="cart-item__price-qty";let v=document.createElement("h3");v.classList="cart-item__product-price",v.textContent=`${e.itemCurrency} ${e.itemPrice} x ${e.itemQty}`;let I=document.createElement("div");I.classList="cart-element__qty-mod_wrapper";let y=document.createElement("button");y.classList="cart-element__qty-mod_deduct-btn",y.innerText=" - ";let w=document.createElement("button");w.classList="cart-element__qty-mod_qty",w.innerText=e.itemQty;let b=document.createElement("button");return b.classList="cart-element__qty-mod_add-btn",b.innerText=" + ",// Assembly HTML code:
n.appendChild(r),o.appendChild(d),i.appendChild(o),a.appendChild(l),a.appendChild(s),i.appendChild(a),m.appendChild(p),m.appendChild(u),i.appendChild(m),h.appendChild(C),h.appendChild(L),i.appendChild(h),g.appendChild(_),g.appendChild(E),i.appendChild(g),I.appendChild(y),I.appendChild(w),I.appendChild(b),f.appendChild(v),f.appendChild(I),i.appendChild(f),c.appendChild(i),t.appendChild(n),t.appendChild(c),console.log("productCardMain: ",t),t}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),n=document.createElement("div");for(let t of(n.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,n.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(n),t}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=i("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var E=i("1ggDV");// Init database instance (dataBase):
let f={},v="",I={},y={};// Init HTML variables:
const w=document.createElement("div");w.innerHTML="";const b=document.createElement("div");b.innerHTML="";const k=document.createElement("div");k.innerHTML="";// Init cross-ref Map: image - url
const x=new Map,P=new class{constructor(){this.viewProducts=new a(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new p,this.viewSuperadmin=new u,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new L,this.modelOrders=new g,this.modelAdmin=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
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
I=this.getCartItemsByUserID(v),console.log(`Cart items (sessionIdCart) for User ID ${v}: `,I),// 2. Get orders list by user ID:
y=this.getOrdersByUserID(v),console.log(`Orders History (sessionIdOrders) for User ID ${v}: `,y),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(I,y),// Right Container - Render Cart Title
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
renderCartAndOrdersSummary=(e,t)=>{let n=document.createElement("div");n.innerHTML="",b.appendChild(this.viewCart.createNewCartSummaryNoTotal(e)),k.appendChild(this.viewOrders.createOrdersHistorySummary(t)),// TEST-TBS - REMOVE IN PROD
console.log("cartSummaryNoTotal: ",b),console.log("ordersHistorySummary: ",k),n.appendChild(b),n.appendChild(k),this.clearContainerRight(),this.containerRightNode.appendChild(n)};renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};handleButtonsClickLeft=e=>{let t=e.target;t.classList.contains("goto-products-btn")&&this.renderProductItemsList(f.productItems);// Add to cart button (from inside the detailed card)
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
};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)}};try{P.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.7135398b.js.map

//# sourceMappingURL=index.7135398b.js.map
