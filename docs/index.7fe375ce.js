function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},c=r.parcelRequire5d32;null==c&&((c=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){i[e]=t},r.parcelRequire5d32=c),c.register("d5gZm",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,c={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)c[t[r]]=e[t[r]]},i=function(e){var t=c[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),c("d5gZm").register(JSON.parse('{"bjFny":"index.7fe375ce.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","7kASp":"admin.1eb8766c.js"}'));var o={};o=new URL(c("d5gZm").resolve("3XKo6"),import.meta.url).toString();var d={};d=new URL(c("d5gZm").resolve("jyKjU"),import.meta.url).toString();class a{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="product-item__content";let c=document.createElement("h3");c.classList="product-item__content_desc",c.textContent=e.itemName;let o=document.createElement("p");o.classList="product-item__content_part-number",o.textContent=e.itemPN;let a=document.createElement("div");a.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(d),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),a.appendChild(l),a.appendChild(s),i.appendChild(c),i.appendChild(o),i.appendChild(a),r.appendChild(n),r.appendChild(i),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let i=document.createElement("div");i.classList="product-card__top-wrapper";let c=document.createElement("div");c.classList="product-card__img-wrapper";let d=document.createElement("img");d.classList="product-card__img",d.src=this.controller.getUrlByNameLocal(e.itemImg);let a=document.createElement("div");a.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let p=document.createElement("h3");p.classList="product-card__part-number",p.textContent=e.itemPN;let u=document.createElement("p");u.classList="product-card__support-txt",u.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="product-card__condition",g.textContent=e.itemCondition;let L=document.createElement("p");L.classList="product-card__support-txt",L.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let E=document.createElement("p");E.classList="product-card__support-txt",E.textContent="Availability: ";let y=document.createElement("h3");y.classList="product-card__availability",y.textContent=e.itemLeadTime;let f=document.createElement("button");f.classList="product-card__add-to-cart-btn";let I=document.createElement("img");// addToCartBtnImg.classList = "product-item__content_price-btn-img";
I.src=/*@__PURE__*/t(o),I.alt="Select";let v=document.createElement("span");v.innerText=" Add to Cart";let w=document.createElement("div");w.classList="product-card__bottom-wrapper";let b=document.createElement("h3");b.classList="product-card__description",b.textContent="Product Description";let k=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return k.classList="product-card__description-text",k.textContent=e.itemDescription,// TO-DO STARTED
c.appendChild(d),l.appendChild(s),l.appendChild(m),l.appendChild(p),l.appendChild(u),l.appendChild(h),l.appendChild(C),l.appendChild(g),l.appendChild(L),l.appendChild(_),l.appendChild(E),l.appendChild(y),f.appendChild(I),f.appendChild(v),a.appendChild(l),a.appendChild(f),i.appendChild(c),i.appendChild(a),w.appendChild(b),w.appendChild(k),r.appendChild(n),r.appendChild(i),r.appendChild(w),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=new URL(c("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Select";let i=document.createElement("span");return i.innerText=" Cart",// Append elemens to respective parents
r.appendChild(n),r.appendChild(i),e.appendChild(r),e};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// this.controller.clearContainerRight();
// Right Container - Render Cart Title
let t=this.createCartSummaryTitle(),r=document.createElement("div");// Right Container - Render Cart Icons
// console.log("Action: Right Container - Render Cart Icons");
for(let t of(r.classList="cart-links-wrapper",e)){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(t.itemId),n=this.controller.getUrlByNameLocal(e),i=this.createCartItemButton(n,t.docId);r.appendChild(i)}t.appendChild(r);// Right Container - Render Go-To-Cart Button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t;// this.controller.containerRightNode.appendChild(cartSummaryBlock);
};// Left Container - Create Product Item Card block
createProductCardForCart=e=>{// Create elements
let t=document.createElement("div");t.classList="cart-item",// TO-DO : verify if "itemId" is better to use instead of "docId" here:
t.id=`cart-item_${e.itemId}`;let r=document.createElement("div");r.classList="cart-item__img-wrapper";let n=document.createElement("img");n.classList="cart-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="cart-item__summary-wrapper";let c=document.createElement("div");c.classList="cart-item__summary";let o=document.createElement("div");o.classList="cart-item__element-wrapper";let d=document.createElement("h1");d.classList="cart-item__product-name",d.textContent=e.itemName;let a=document.createElement("div");a.classList="cart-item__element-wrapper";let l=document.createElement("p");l.classList="cart-item__support-txt",l.textContent="Part Number: ";let s=document.createElement("h3");s.classList="cart-item__part-number",s.textContent=e.itemPN;let m=document.createElement("div");m.classList="cart-item__element-wrapper";let p=document.createElement("p");p.classList="cart-item__support-txt",p.textContent="Condition: ";let u=document.createElement("h3");u.classList="cart-item__condition",u.textContent=e.itemCondition;let h=document.createElement("div");h.classList="cart-item__element-wrapper";let C=document.createElement("p");C.classList="cart-item__support-txt",C.textContent="Certification: ";let g=document.createElement("h3");g.classList="cart-item__certification",g.textContent=e.itemCertification;let L=document.createElement("div");L.classList="cart-item__element-wrapper";let _=document.createElement("p");_.classList="cart-item__support-txt",_.textContent="Availability: ";let E=document.createElement("h3");E.classList="cart-item__availability",E.textContent=e.itemLeadTime;let y=document.createElement("div");y.classList="cart-item__price-qty";let f=document.createElement("h3");f.classList="cart-item__product-price",f.textContent=`${e.itemCurrency} ${e.itemPrice} x ${e.itemQty}`;let I=document.createElement("div");I.classList="cart-element__qty-mod_wrapper";let v=document.createElement("button");v.classList="cart-element__qty-mod_deduct-btn",v.innerText=" - ";let w=document.createElement("button");w.classList="cart-element__qty-mod_qty",w.innerText=e.itemQty;let b=document.createElement("button");return b.classList="cart-element__qty-mod_add-btn",b.innerText=" + ",// Assembly HTML code:
r.appendChild(n),o.appendChild(d),c.appendChild(o),a.appendChild(l),a.appendChild(s),c.appendChild(a),m.appendChild(p),m.appendChild(u),c.appendChild(m),h.appendChild(C),h.appendChild(g),c.appendChild(h),L.appendChild(_),L.appendChild(E),c.appendChild(L),I.appendChild(v),I.appendChild(w),I.appendChild(b),y.appendChild(f),y.appendChild(I),c.appendChild(y),i.appendChild(c),t.appendChild(r),t.appendChild(i),console.log("productCardMain: ",t),t};// To-DO items:
createCartPage=e=>{let t=document.createElement("div");t.classList="product-card";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.innerText="Cart";let i=document.createElement("div");for(let t of(i.classList="cart-items-wrapper",e)){console.log("productItem to pass to getProductObjectById() function: ",t),console.log("productItem.itemID: ",t.itemId);let e=this.controller.getProductObjectById(t.itemId);console.log("productData: ",e),i.appendChild(this.createProductCardForCart(e))}return t.appendChild(r),t.appendChild(n),t.appendChild(i),t}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=c("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var E=c("1ggDV");// Init database instance (dataBase):
let y={},f="",I={},v={items:8e5,handling:8e3,total:808e3},w={};// Init HTML variables:
const b=document.createElement("div");b.innerHTML="";const k=document.createElement("div");k.innerHTML="";const P=document.createElement("div");P.innerHTML="";// Init cross-ref Map: image - url
const x=new Map,O=new class{constructor(){this.viewProducts=new a(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new p,this.viewSuperadmin=new u,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new g,this.modelOrders=new L,this.modelAdmin=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),E.dbCollectionNames))y[e]=await this.modelFirebase.get(e),console.log(`dataBase.${e}: `,y[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),y.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
x.set(e.itemImg,t)}console.log("Assigned to sessionId: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionId a first ID from DB
f=y.usersData[0].userId),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
// ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionId} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(y.productItems),// Get values to Sesstion Variables: 1-2
// 1. Get cart items by sesstion user ID:
I=this.getCartItemsByUserID(f),console.log(`Cart items (sessionIdCart) for User ID ${f}: `,I),// 2. Get orders list by user ID:
w=this.getOrdersByUserID(f),console.log(`Orders History (sessionIdOrders) for User ID ${f}: `,w),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(I,w),// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// TEST & TBS ITEMS
this.attachEventListenrs()};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>x.get(e);getCartItemsByUserID=e=>y.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>y.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=y.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject[0].itemImg: ", productObject[0].itemImg);
return t[0].itemImg};getProdIdFromElementId=e=>e.split("_")[1];getProductObjectById=e=>{// Filter product array => single object array
let t=y.productItems.filter(t=>t.itemId===e);// return object
return t[0]};// Left Container - Render product items
renderProductItemsList=e=>{let t=document.createElement("div");t.innerHTML="",t.appendChild(this.viewProducts.createProductItemsList(e)),// TEST-TBS - REMOVE FOR PROD
// Reset global variable:
// productsList.innerHTML = "";
// productsList.appendChild(productItemsList);
// TEST-TBS - REMOVE FOR PROD
// console.log("productsList: ", productsList);
// console.log("productsList: ", productsList.innerHTML);
this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Order CART
renderCartSummary=e=>{let t=this.viewCart.createCartPage(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// TEST-TBS - REMOVE FOR PROD
// Left Container - Re-Render product Items
// returnRenderProductsList = () => {
//     // TEST-TBS - REMOVE FOR PROD
//     console.log("productsList: ", productsList.innerHTML);
//     this.clearContainerLeft();
//     this.containerLeftNode.appendChild(productsList);
// };
// Right Container - Render Cart (no price) and Orders Summaries
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryNoTotal(e),i=this.viewOrders.createOrdersHistorySummary(t);// TEST-TBS - REMOVE IN PROD
console.log("cartSummaryNoTotal: ",n),console.log("ordersHistorySummary: ",i),r.appendChild(n),r.appendChild(i),this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Right Container - Render Cart (with price)
renderCartSummaryWithPrice=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryWithPrice(e,t);r.appendChild(n),// TEST-TBS - REMOVE IN PROD
console.log("cart Summary with Total: ",r),this.clearContainerRight(),this.containerRightNode.appendChild(r)};renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Support funtions for buttons handler:
// Handle click of complex element by picking it's parent element class
findAncestorByClass=(e,t)=>{let r=e;for(;r&&!r.classList.contains(t);)r=r.parentElement;return r};// "< Back to Products" button
handleGotoProductsBtn=()=>{this.renderProductItemsList(y.productItems),this.renderCartAndOrdersSummary(I,w)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=()=>{console.log("TO-DO: Add product to cart.")};// "Go to Cart" button at right panel
handleGotoCartBtn=()=>{console.log("Received command to display CART."),this.renderCartSummary(I),this.renderCartSummaryWithPrice(I,v)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT")};// "Add to Cart" button at short product card (main page)
handlePriceBtn=e=>{console.log("Button clicked"),console.log("Button id: ",e.id);let t=this.getProdIdFromElementId(e.id);console.log(`TO-DO: Add product with ID ${t} to cart.`)};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to display PRODUCT CARD with ID: ",e.id),console.log("Clicked inside product item");let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r),this.renderCartAndOrdersSummary(I,w)};handleDisplayHistoricalOrder=e=>{console.log("Received command to display ORDER with ID: ",e.id)};handleButtonsClickLeft=e=>{let t=e.target;// "< Back to Products" button
if(t.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "Add to Cart" button at detailed product card (page)
let r=t.closest(".product-card__add-to-cart-btn");if(r){this.handleAddToCartBtn();return}// "Add to Cart" button at short product card (main page)
let n=this.findAncestorByClass(t,"product-item__content_price-btn");if(n){this.handlePriceBtn(n);return}// Product card as "button" at main page
let i=this.findAncestorByClass(t,"product-item");i&&this.handleProductItem(i)};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn(I);// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn()};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)}};try{O.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.7fe375ce.js.map

//# sourceMappingURL=index.7fe375ce.js.map
