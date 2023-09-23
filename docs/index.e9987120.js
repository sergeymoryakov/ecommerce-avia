function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequire5d32;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequire5d32=o),o.register("d5gZm",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o("d5gZm").register(JSON.parse('{"bjFny":"index.e9987120.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","7kASp":"admin.5777f4fe.js"}'));var c={};c=new URL(o("d5gZm").resolve("3XKo6"),import.meta.url).toString();var d={};d=new URL(o("d5gZm").resolve("jyKjU"),import.meta.url).toString();class a{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="product-item__content";let o=document.createElement("h3");o.classList="product-item__content_desc",o.textContent=e.itemName;let c=document.createElement("p");c.classList="product-item__content_part-number",c.textContent=e.itemPN;let a=document.createElement("div");a.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(d),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),a.appendChild(l),a.appendChild(s),i.appendChild(o),i.appendChild(c),i.appendChild(a),r.appendChild(n),r.appendChild(i),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let i=document.createElement("div");i.classList="product-card__top-wrapper";let o=document.createElement("div");o.classList="product-card__img-wrapper";let d=document.createElement("img");d.classList="product-card__img",d.src=this.controller.getUrlByNameLocal(e.itemImg);let a=document.createElement("div");a.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let u=document.createElement("h3");u.classList="product-card__part-number",u.textContent=e.itemPN;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="product-card__condition",g.textContent=e.itemCondition;let L=document.createElement("p");L.classList="product-card__support-txt",L.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let E=document.createElement("p");E.classList="product-card__support-txt",E.textContent="Availability: ";let I=document.createElement("h3");I.classList="product-card__availability",I.textContent=e.itemLeadTime;let y=document.createElement("button");y.classList="product-card__add-to-cart-btn";let f=document.createElement("img");// addToCartBtnImg.classList = "product-item__content_price-btn-img";
f.src=/*@__PURE__*/t(c),f.alt="Select";let v=document.createElement("span");v.innerText=" Add to Cart";let b=document.createElement("div");b.classList="product-card__bottom-wrapper";let k=document.createElement("h3");k.classList="product-card__description",k.textContent="Product Description";let w=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return w.classList="product-card__description-text",w.textContent=e.itemDescription,// TO-DO STARTED
o.appendChild(d),l.appendChild(s),l.appendChild(m),l.appendChild(u),l.appendChild(p),l.appendChild(h),l.appendChild(C),l.appendChild(g),l.appendChild(L),l.appendChild(_),l.appendChild(E),l.appendChild(I),y.appendChild(f),y.appendChild(v),a.appendChild(l),a.appendChild(y),i.appendChild(o),i.appendChild(a),b.appendChild(k),b.appendChild(w),r.appendChild(n),r.appendChild(i),r.appendChild(b),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=new URL(o("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Cart Products Icons Block
createCartProductItemsBlock=e=>{let t=document.createElement("div");// Right Container - Render Cart Icons
// console.log("Action: Right Container - Render Cart Icons");
for(let r of(t.classList="cart-links-wrapper",e)){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(r.itemId),n=this.controller.getUrlByNameLocal(e),i=this.createCartItemButton(n,r.itemId);t.appendChild(i)}return t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Select";let i=document.createElement("span");return i.innerText=" Cart",// Append elemens to respective parents
r.appendChild(n),r.appendChild(i),e.appendChild(r),e};// Right Container - Create "Proceed To Checkout" button
createProceedToCheckoutBtn=()=>{let e=document.createElement("div");e.classList="cart-checkout-btn-wrapper";let r=document.createElement("button");r.classList="cart-checkout-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Checkout";let i=document.createElement("span");return i.innerText=" Checkout",// Append elemens to respective parents
r.appendChild(n),r.appendChild(i),e.appendChild(r),e};// Right Container - create total amount block
createTotalAmountBlock=e=>{let t=document.createElement("div");t.classList="cart-total-amount-wrapper";let r=document.createElement("p");return r.classList="cart-total-amount",r.innerText=`Total: $${e.total}`,t.appendChild(r),t};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// Create "Cart" title
let t=this.createCartSummaryTitle(),r=this.createCartProductItemsBlock(e);t.appendChild(r);// Create "Go To Cart" button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t};// Right Container - Render Cart Summaary
createNewCartSummaryWithPrice=(e,t)=>{// Create "Cart" title
let r=this.createCartSummaryTitle(),n=this.createCartProductItemsBlock(e),i=this.createTotalAmountBlock(t),o=this.createProceedToCheckoutBtn();// TEST-TBS - REMOVE FOR PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return r.appendChild(n),r.appendChild(i),r.appendChild(o),r};// Left Container - Create Product Item Card block
createProductCardForCart=(e,t)=>{// Create elements
let r=document.createElement("div");r.classList="cart-item",// TO-DO : verify if "itemId" is better to use instead of "docId" here:
r.id=`cart-item_${e.itemId}`;let n=document.createElement("div");n.classList="cart-item__img-wrapper";let i=document.createElement("img");i.classList="cart-item__img",i.src=this.controller.getUrlByNameLocal(e.itemImg);let o=document.createElement("div");o.classList="cart-item__summary-wrapper";let c=document.createElement("div");c.classList="cart-item__summary";let d=document.createElement("div");d.classList="cart-item__element-wrapper";let a=document.createElement("h1");a.classList="cart-item__product-name",a.textContent=e.itemName;let l=document.createElement("div");l.classList="cart-item__element-wrapper";let s=document.createElement("p");s.classList="cart-item__support-txt",s.textContent="Part Number: ";let m=document.createElement("h3");m.classList="cart-item__part-number",m.textContent=e.itemPN;let u=document.createElement("div");u.classList="cart-item__element-wrapper";let p=document.createElement("p");p.classList="cart-item__support-txt",p.textContent="Condition: ";let h=document.createElement("h3");h.classList="cart-item__condition",h.textContent=e.itemCondition;let C=document.createElement("div");C.classList="cart-item__element-wrapper";let g=document.createElement("p");g.classList="cart-item__support-txt",g.textContent="Certification: ";let L=document.createElement("h3");L.classList="cart-item__certification",L.textContent=e.itemCertification;let _=document.createElement("div");_.classList="cart-item__element-wrapper";let E=document.createElement("p");E.classList="cart-item__support-txt",E.textContent="Availability: ";let I=document.createElement("h3");I.classList="cart-item__availability",I.textContent=e.itemLeadTime;let y=document.createElement("div");y.classList="cart-item__price-qty";let f=document.createElement("h3");f.classList="cart-item__product-price",f.textContent=`${e.itemCurrency} ${e.itemPrice} x ${t}`;let v=document.createElement("div");v.classList="cart-element__qty-mod_wrapper",v.id=`qty-mod_${e.itemId}`;let b=document.createElement("button");b.classList="cart-element__qty-mod_deduct-btn",b.innerText=" - ",b.id=`qty-deduct-btn_${e.itemId}`;let k=document.createElement("button");k.classList="cart-element__qty-mod_qty",k.innerText=t;let w=document.createElement("button");// console.log("productCardMain: ", productCardMain);
return w.classList="cart-element__qty-mod_add-btn",w.innerText=" + ",w.id=`qty-add-btn_${e.itemId}`,// Assembly HTML code:
n.appendChild(i),d.appendChild(a),c.appendChild(d),l.appendChild(s),l.appendChild(m),c.appendChild(l),u.appendChild(p),u.appendChild(h),c.appendChild(u),C.appendChild(g),C.appendChild(L),c.appendChild(C),_.appendChild(E),_.appendChild(I),c.appendChild(_),v.appendChild(b),v.appendChild(k),v.appendChild(w),y.appendChild(f),y.appendChild(v),c.appendChild(y),o.appendChild(c),r.appendChild(n),r.appendChild(o),r};// To-DO items:
createCartPage=e=>{let t=document.createElement("div");t.classList="product-card";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.innerText="Cart";let i=document.createElement("div");for(let t of(i.classList="cart-items-wrapper",e)){// console.log(
//     "productItem to pass to getProductObjectById() function: ",
//     productItem
// );
// console.log("productItem.itemID: ", productItem.itemId);
let e=this.controller.getProductObjectById(t.itemId);// console.log("productData: ", productData);
i.appendChild(this.createProductCardForCart(e,t.qty))}return t.appendChild(r),t.appendChild(n),t.appendChild(i),t}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=o("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")};getPriceByProductId=(e,t)=>{let r=e.filter(e=>e.itemId===t);// console.log("productById: ", productById);
// console.log("productById[0]: ", productById[0]);
return r[0].itemPrice};updateCartPriceVariable=(e,t,r,n)=>{let i=0,o=0;for(let t of e)i+=t.qty*this.getPriceByProductId(r,t.itemId);return o=i*n,t.items=i,t.handling=o,t.total=i+o,console.log("new sessionIdCartPrice: ",t),t};changeQtyInCart=(e,t,r)=>{for(let n of e)n.itemId===t&&(n.qty+r<=0?(confirm("Hi there, do you like to delete item from cart?"),console.log(`ACTION NEEDED: DELETE PRODUCT WITH ID ${n.itemId} FROM CART.`)):n.qty+=r);return e}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelUser is connected!")};getSessionIdCustomerByCustomerId=(e,t)=>{let r=t.filter(t=>t.custId===e);return r[0]}}var E=o("1ggDV");// Init database instance (dataBase):
let I={},y="",f={},v={},b={},k={},w={items:8e5,handling:8e3,total:808e3};// Init HTML variables:
const P=document.createElement("div");P.innerHTML="";const T=document.createElement("div");T.innerHTML="";const B=document.createElement("div");B.innerHTML="";// Init cross-ref Map: image - url
const x=new Map,O=new class{constructor(){this.viewProducts=new a(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new u,this.viewSuperadmin=new p,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new g,this.modelOrders=new L,this.modelUser=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelUser.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),E.dbCollectionNames))I[e]=await this.modelFirebase.get(e),console.log(`[*** dataBase.${e} ***] :`,I[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),I.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
x.set(e.itemImg,t)}console.log("Assigned to [*** sessionIdNumber ***]: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionIdNumber a first ID from DB (usersData[0])
y=I.usersData[0].userId),console.log("[*** sessionIdUser ***] initiated: ",// Assign to sessionIdUser a first element of the usersData[0]
f=I.usersData[0]),// Get sessionIdCustomer data by customer's ID
this.getSessionIdCustomerData(),console.log("[*** sessionIdCustomer ***] initiated: ",v),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
// ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(I.productItems),// Get values to Sesstion Variables: 1-2
// 1. Get cart items by sesstion user ID:
k=this.getCartItemsByUserID(y),console.log(`Cart items [*** sessionIdCart ***] for User ID ${y}: `,k),// 2. Get orders list by user ID:
b=this.getOrdersByUserID(y),console.log(`Orders History [*** sessionIdOrders ***] for User ID ${y}: `,b),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(k,b),this.attachEventListenrs()};// Get sessionIdCustomer data by customer's ID
getSessionIdCustomerData=()=>{v=this.modelUser.getSessionIdCustomerByCustomerId(f.custId,I.customersData)};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>x.get(e);getCartItemsByUserID=e=>I.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>I.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=I.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject[0].itemImg: ", productObject[0].itemImg);
return t[0].itemImg};getProdIdFromElementId=e=>e.split("_")[1];getProductObjectById=e=>{// Filter product array => single object array
let t=I.productItems.filter(t=>t.itemId===e);// return object
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
handleGotoProductsBtn=()=>{this.renderProductItemsList(I.productItems),this.renderCartAndOrdersSummary(k,b)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=()=>{console.log("TO-DO: Add product to cart.")};// "Go to Cart" button at right panel
handleGotoCartBtn=()=>{console.log("Received command to display CART."),// TEST-TBD
this.modelCart.updateCartPriceVariable(k,w,I.productItems,v.custHandlingFee),this.renderCartSummary(k),this.renderCartSummaryWithPrice(k,w)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT")};// "Add to Cart" button at short product card (main page)
handlePriceBtn=e=>{console.log("Button clicked"),console.log("Button id: ",e.id);let t=this.getProdIdFromElementId(e.id);console.log(`TO-DO: Add product with ID ${t} to cart.`)};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to display PRODUCT CARD with ID: ",e.id),console.log("Clicked inside product item");let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r),this.renderCartAndOrdersSummary(k,b)};handleDisplayHistoricalOrder=e=>{console.log("Received command to display ORDER with ID: ",e.id)};handleQtyDeductBtn=(e,t)=>{console.log("Received command to deduct qty of product with ID: ",e.id);let r=this.getProdIdFromElementId(e.id);console.log("itemId: ",r),console.log("sessionIdCard: ",this.modelCart.changeQtyInCart(k,r,-1)),this.handleGotoCartBtn()};handleQtyAddBtn=(e,t)=>{console.log("Received command to add qty of product with ID: ",e.id);let r=this.getProdIdFromElementId(e.id);console.log("itemId: ",r),console.log("sessionIdCard: ",this.modelCart.changeQtyInCart(k,r,1)),this.handleGotoCartBtn()};handleButtonsClickLeft=(e,t)=>{let r=e.target;// "< Back to Products" button
if(r.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "Add to Cart" button at detailed product card (page)
let n=r.closest(".product-card__add-to-cart-btn");if(n){this.handleAddToCartBtn();return}// "Add to Cart" button at short product card (main page)
let i=this.findAncestorByClass(r,"product-item__content_price-btn");if(i){this.handlePriceBtn(i);return}// Product card as "button" at main page
let o=this.findAncestorByClass(r,"product-item");// Qty deduct button at Cart page
if(o&&this.handleProductItem(o),r.classList.contains("cart-element__qty-mod_deduct-btn")){this.handleQtyDeductBtn(r,t);return}// Qty add button at Cart page
if(r.classList.contains("cart-element__qty-mod_add-btn")){this.handleQtyAddBtn(r,t);return}};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn(k);// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn()};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)}};try{O.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.e9987120.js.map

//# sourceMappingURL=index.e9987120.js.map
