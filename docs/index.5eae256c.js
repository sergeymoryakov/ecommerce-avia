function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},c={},i=r.parcelRequire5d32;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in c){var t=c[e];delete c[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){c[e]=t},r.parcelRequire5d32=i),i.register("d5gZm",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return c},function(e){return c=e});var n,c,i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},c=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("d5gZm").register(JSON.parse('{"bjFny":"index.5eae256c.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","7kASp":"admin.5777f4fe.js"}'));var a={};a=new URL(i("d5gZm").resolve("3XKo6"),import.meta.url).toString();var o={};o=new URL(i("d5gZm").resolve("jyKjU"),import.meta.url).toString();class d{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="product-item__content";let i=document.createElement("h3");i.classList="product-item__content_desc",i.textContent=e.itemName;let a=document.createElement("p");a.classList="product-item__content_part-number",a.textContent=e.itemPN;let d=document.createElement("div");d.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(o),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),d.appendChild(l),d.appendChild(s),c.appendChild(i),c.appendChild(a),c.appendChild(d),r.appendChild(n),r.appendChild(c),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let c=document.createElement("div");c.classList="product-card__top-wrapper";let i=document.createElement("div");i.classList="product-card__img-wrapper";let o=document.createElement("img");o.classList="product-card__img",o.src=this.controller.getUrlByNameLocal(e.itemImg);let d=document.createElement("div");d.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let u=document.createElement("h3");u.classList="product-card__part-number",u.textContent=e.itemPN;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let L=document.createElement("h3");L.classList="product-card__condition",L.textContent=e.itemCondition;let g=document.createElement("p");g.classList="product-card__support-txt",g.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let E=document.createElement("p");E.classList="product-card__support-txt",E.textContent="Availability: ";let y=document.createElement("h3");y.classList="product-card__availability",y.textContent=e.itemLeadTime;let f=document.createElement("button");f.classList="product-card__add-to-cart-btn";let v=document.createElement("img");// addToCartBtnImg.classList = "product-item__content_price-btn-img";
v.src=/*@__PURE__*/t(a),v.alt="Select";let k=document.createElement("span");k.innerText=" Add to Cart";let I=document.createElement("div");I.classList="product-card__bottom-wrapper";let w=document.createElement("h3");w.classList="product-card__description",w.textContent="Product Description";let b=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return b.classList="product-card__description-text",b.textContent=e.itemDescription,// TO-DO STARTED
i.appendChild(o),l.appendChild(s),l.appendChild(m),l.appendChild(u),l.appendChild(p),l.appendChild(h),l.appendChild(C),l.appendChild(L),l.appendChild(g),l.appendChild(_),l.appendChild(E),l.appendChild(y),f.appendChild(v),f.appendChild(k),d.appendChild(l),d.appendChild(f),c.appendChild(i),c.appendChild(d),I.appendChild(w),I.appendChild(b),r.appendChild(n),r.appendChild(c),r.appendChild(I),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=new URL(i("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Cart Products Icons Block
createCartProductItemsBlock=e=>{let t=document.createElement("div");// Right Container - Render Cart Icons
// console.log("Action: Right Container - Render Cart Icons");
for(let r of(t.classList="cart-links-wrapper",e)){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(r.itemId),n=this.controller.getUrlByNameLocal(e),c=this.createCartItemButton(n,r.itemId);t.appendChild(c)}return t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Select";let c=document.createElement("span");return c.innerText=" Cart",// Append elemens to respective parents
r.appendChild(n),r.appendChild(c),e.appendChild(r),e};// Right Container - Create "Proceed To Checkout" button
createProceedToCheckoutBtn=()=>{let e=document.createElement("div");e.classList="cart-checkout-btn-wrapper";let r=document.createElement("button");r.classList="cart-checkout-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Checkout";let c=document.createElement("span");return c.innerText=" Checkout",// Append elemens to respective parents
r.appendChild(n),r.appendChild(c),e.appendChild(r),e};// Right Container - create total amount block
createTotalAmountBlock=e=>{let t=document.createElement("div");t.classList="cart-total-amount-wrapper";let r=document.createElement("p");return r.classList="cart-total-amount",r.innerText=`Total: $${e.total}`,t.appendChild(r),t};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// Create "Cart" title
let t=this.createCartSummaryTitle(),r=this.createCartProductItemsBlock(e);t.appendChild(r);// Create "Go To Cart" button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t};// Right Container - Render Cart Summaary
createNewCartSummaryWithPrice=(e,t)=>{// Create "Cart" title
let r=this.createCartSummaryTitle(),n=this.createCartProductItemsBlock(e),c=this.createTotalAmountBlock(t),i=this.createProceedToCheckoutBtn();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return r.appendChild(n),r.appendChild(c),r.appendChild(i),r};// Left Container - Create Product Item Card block
createProductCardForCart=e=>{// Create elements
let t=document.createElement("div");t.classList="cart-item",// TO-DO : verify if "itemId" is better to use instead of "docId" here:
t.id=`cart-item_${e.itemId}`;let r=document.createElement("div");r.classList="cart-item__img-wrapper";let n=document.createElement("img");n.classList="cart-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="cart-item__summary-wrapper";let i=document.createElement("div");i.classList="cart-item__summary";let a=document.createElement("div");a.classList="cart-item__element-wrapper";let o=document.createElement("h1");o.classList="cart-item__product-name",o.textContent=e.itemName;let d=document.createElement("div");d.classList="cart-item__element-wrapper";let l=document.createElement("p");l.classList="cart-item__support-txt",l.textContent="Part Number: ";let s=document.createElement("h3");s.classList="cart-item__part-number",s.textContent=e.itemPN;let m=document.createElement("div");m.classList="cart-item__element-wrapper";let u=document.createElement("p");u.classList="cart-item__support-txt",u.textContent="Condition: ";let p=document.createElement("h3");p.classList="cart-item__condition",p.textContent=e.itemCondition;let h=document.createElement("div");h.classList="cart-item__element-wrapper";let C=document.createElement("p");C.classList="cart-item__support-txt",C.textContent="Certification: ";let L=document.createElement("h3");L.classList="cart-item__certification",L.textContent=e.itemCertification;let g=document.createElement("div");g.classList="cart-item__element-wrapper";let _=document.createElement("p");_.classList="cart-item__support-txt",_.textContent="Availability: ";let E=document.createElement("h3");E.classList="cart-item__availability",E.textContent=e.itemLeadTime;let y=document.createElement("div");y.classList="cart-item__price-qty";let f=document.createElement("h3");f.classList="cart-item__product-price",f.textContent=`${e.itemCurrency} ${e.itemPrice} x ${e.itemQty}`;let v=document.createElement("div");v.classList="cart-element__qty-mod_wrapper";let k=document.createElement("button");k.classList="cart-element__qty-mod_deduct-btn",k.innerText=" - ";let I=document.createElement("button");I.classList="cart-element__qty-mod_qty",I.innerText=e.itemQty;let w=document.createElement("button");return w.classList="cart-element__qty-mod_add-btn",w.innerText=" + ",// Assembly HTML code:
r.appendChild(n),a.appendChild(o),i.appendChild(a),d.appendChild(l),d.appendChild(s),i.appendChild(d),m.appendChild(u),m.appendChild(p),i.appendChild(m),h.appendChild(C),h.appendChild(L),i.appendChild(h),g.appendChild(_),g.appendChild(E),i.appendChild(g),v.appendChild(k),v.appendChild(I),v.appendChild(w),y.appendChild(f),y.appendChild(v),i.appendChild(y),c.appendChild(i),t.appendChild(r),t.appendChild(c),console.log("productCardMain: ",t),t};// To-DO items:
createCartPage=e=>{let t=document.createElement("div");t.classList="product-card";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.innerText="Cart";let c=document.createElement("div");for(let t of(c.classList="cart-items-wrapper",e)){// console.log(
//     "productItem to pass to getProductObjectById() function: ",
//     productItem
// );
// console.log("productItem.itemID: ", productItem.itemId);
let e=this.controller.getProductObjectById(t.itemId);// console.log("productData: ", productData);
c.appendChild(this.createProductCardForCart(e))}return t.appendChild(r),t.appendChild(n),t.appendChild(c),t}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=i("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var E=i("1ggDV");// Init database instance (dataBase):
let y={},f="",v={},k={items:8e5,handling:8e3,total:808e3},I={};// Init HTML variables:
const w=document.createElement("div");w.innerHTML="";const b=document.createElement("div");b.innerHTML="";const P=document.createElement("div");P.innerHTML="";// Init cross-ref Map: image - url
const T=new Map,x=new class{constructor(){this.viewProducts=new d(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new u,this.viewSuperadmin=new p,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new L,this.modelOrders=new g,this.modelAdmin=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),E.dbCollectionNames))y[e]=await this.modelFirebase.get(e),console.log(`dataBase.${e}: `,y[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),y.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
T.set(e.itemImg,t)}console.log("Assigned to sessionId: ",// FOR TEST AND TBS - REMOVE IN PROD:
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
v=this.getCartItemsByUserID(f),console.log(`Cart items (sessionIdCart) for User ID ${f}: `,v),// 2. Get orders list by user ID:
I=this.getOrdersByUserID(f),console.log(`Orders History (sessionIdOrders) for User ID ${f}: `,I),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(v,I),// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// TEST & TBS ITEMS
this.attachEventListenrs()};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>T.get(e);getCartItemsByUserID=e=>y.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>y.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=y.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
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
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryNoTotal(e),c=this.viewOrders.createOrdersHistorySummary(t);// TEST-TBS - REMOVE IN PROD
console.log("cartSummaryNoTotal: ",n),console.log("ordersHistorySummary: ",c),r.appendChild(n),r.appendChild(c),this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Right Container - Render Cart (with price)
renderCartSummaryWithPrice=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryWithPrice(e,t);r.appendChild(n),// TEST-TBS - REMOVE IN PROD
console.log("cart Summary with Total: ",r),this.clearContainerRight(),this.containerRightNode.appendChild(r)};renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Support funtions for buttons handler:
// Handle click of complex element by picking it's parent element class
findAncestorByClass=(e,t)=>{let r=e;for(;r&&!r.classList.contains(t);)r=r.parentElement;return r};// "< Back to Products" button
handleGotoProductsBtn=()=>{this.renderProductItemsList(y.productItems),this.renderCartAndOrdersSummary(v,I)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=()=>{console.log("TO-DO: Add product to cart.")};// "Go to Cart" button at right panel
handleGotoCartBtn=()=>{console.log("Received command to display CART."),this.renderCartSummary(v),this.renderCartSummaryWithPrice(v,k)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT")};// "Add to Cart" button at short product card (main page)
handlePriceBtn=e=>{console.log("Button clicked"),console.log("Button id: ",e.id);let t=this.getProdIdFromElementId(e.id);console.log(`TO-DO: Add product with ID ${t} to cart.`)};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to display PRODUCT CARD with ID: ",e.id),console.log("Clicked inside product item");let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r),this.renderCartAndOrdersSummary(v,I)};handleDisplayHistoricalOrder=e=>{console.log("Received command to display ORDER with ID: ",e.id)};handleButtonsClickLeft=e=>{let t=e.target;// "< Back to Products" button
if(t.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "Add to Cart" button at detailed product card (page)
let r=t.closest(".product-card__add-to-cart-btn");if(r){this.handleAddToCartBtn();return}// "Add to Cart" button at short product card (main page)
let n=this.findAncestorByClass(t,"product-item__content_price-btn");if(n){this.handlePriceBtn(n);return}// Product card as "button" at main page
let c=this.findAncestorByClass(t,"product-item");c&&this.handleProductItem(c)};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn(v);// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn()};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)}};try{x.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.5eae256c.js.map

//# sourceMappingURL=index.5eae256c.js.map
