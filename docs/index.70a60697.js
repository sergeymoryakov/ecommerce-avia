function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},d=r.parcelRequire5d32;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){i[e]=t},r.parcelRequire5d32=d),d.register("d5gZm",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,d={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)d[t[r]]=e[t[r]]},i=function(e){var t=d[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),d("d5gZm").register(JSON.parse('{"bjFny":"index.70a60697.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","1riji":"admin.b59ef8f1.js"}'));var a={};a=new URL(d("d5gZm").resolve("3XKo6"),import.meta.url).toString();var o={};o=new URL(d("d5gZm").resolve("jyKjU"),import.meta.url).toString();class c{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="product-item__content";let d=document.createElement("h3");d.classList="product-item__content_desc",d.textContent=e.itemName;let a=document.createElement("p");a.classList="product-item__content_part-number",a.textContent=e.itemPN;let c=document.createElement("div");c.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(o),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),c.appendChild(l),c.appendChild(s),i.appendChild(d),i.appendChild(a),i.appendChild(c),r.appendChild(n),r.appendChild(i),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let i=document.createElement("div");i.classList="product-card__top-wrapper";let d=document.createElement("div");d.classList="product-card__img-wrapper";let o=document.createElement("img");o.classList="product-card__img",o.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let u=document.createElement("h3");u.classList="product-card__part-number",u.textContent=e.itemPN;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="product-card__condition",g.textContent=e.itemCondition;let L=document.createElement("p");L.classList="product-card__support-txt",L.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let E=document.createElement("p");E.classList="product-card__support-txt",E.textContent="Availability: ";let I=document.createElement("h3");I.classList="product-card__availability",I.textContent=e.itemLeadTime;let y=document.createElement("button");y.classList="product-card__add-to-cart-btn",y.id=`add-to-cart-btn_${e.itemId}`;let f=document.createElement("img");f.src=/*@__PURE__*/t(a),f.alt="Select";let w=document.createElement("span");w.innerText=" Add to Cart";let P=document.createElement("div");P.classList="product-card__bottom-wrapper";let b=document.createElement("h3");b.classList="product-card__description",b.textContent="Product Description";let v=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return v.classList="product-card__description-text",v.textContent=e.itemDescription,// TO-DO STARTED
d.appendChild(o),l.appendChild(s),l.appendChild(m),l.appendChild(u),l.appendChild(p),l.appendChild(h),l.appendChild(C),l.appendChild(g),l.appendChild(L),l.appendChild(_),l.appendChild(E),l.appendChild(I),y.appendChild(f),y.appendChild(w),c.appendChild(l),c.appendChild(y),i.appendChild(d),i.appendChild(c),P.appendChild(b),P.appendChild(v),r.appendChild(n),r.appendChild(i),r.appendChild(P),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=new URL(d("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
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
createTotalAmountBlock=e=>{let t=document.createElement("div");t.classList="cart-total-amount-wrapper";let r=document.createElement("p");return r.classList="cart-total-amount",r.id="cart-total-amount",r.innerText=`Total: $${e.total}`,t.appendChild(r),t};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// Create "Cart" title
let t=this.createCartSummaryTitle(),r=this.createCartProductItemsBlock(e);t.appendChild(r);// Create "Go To Cart" button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t};// Right Container - Render Cart Summaary
createNewCartSummaryWithPrice=(e,t)=>{// Create "Cart" title
let r=this.createCartSummaryTitle(),n=this.createCartProductItemsBlock(e),i=this.createTotalAmountBlock(t),d=this.createProceedToCheckoutBtn();// TEST-TBS - REMOVE FOR PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return r.appendChild(n),r.appendChild(i),r.appendChild(d),r};// Left Container - Create Product Item Card block
createProductCardForCart=(e,t)=>{// Create elements
let r=document.createElement("div");r.classList="cart-item",// TO-DO : verify if "itemId" is better to use instead of "docId" here:
r.id=`cart-item_${e.itemId}`;let n=document.createElement("div");n.classList="cart-item__img-wrapper";let i=document.createElement("img");i.classList="cart-item__img",i.src=this.controller.getUrlByNameLocal(e.itemImg);let d=document.createElement("div");d.classList="cart-item__summary-wrapper";let a=document.createElement("div");a.classList="cart-item__summary";let o=document.createElement("div");o.classList="cart-item__element-wrapper";let c=document.createElement("h1");c.classList="cart-item__product-name",c.textContent=e.itemName;let l=document.createElement("div");l.classList="cart-item__element-wrapper";let s=document.createElement("p");s.classList="cart-item__support-txt",s.textContent="Part Number: ";let m=document.createElement("h3");m.classList="cart-item__part-number",m.textContent=e.itemPN;let u=document.createElement("div");u.classList="cart-item__element-wrapper";let p=document.createElement("p");p.classList="cart-item__support-txt",p.textContent="Condition: ";let h=document.createElement("h3");h.classList="cart-item__condition",h.textContent=e.itemCondition;let C=document.createElement("div");C.classList="cart-item__element-wrapper";let g=document.createElement("p");g.classList="cart-item__support-txt",g.textContent="Certification: ";let L=document.createElement("h3");L.classList="cart-item__certification",L.textContent=e.itemCertification;let _=document.createElement("div");_.classList="cart-item__element-wrapper";let E=document.createElement("p");E.classList="cart-item__support-txt",E.textContent="Availability: ";let I=document.createElement("h3");I.classList="cart-item__availability",I.textContent=e.itemLeadTime;let y=document.createElement("div");y.classList="cart-item__price-qty";let f=document.createElement("h3");f.classList="cart-item__product-price",f.setAttribute("data-price-qty-id",e.itemId),f.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`;let w=document.createElement("div");w.classList="cart-element__qty-mod_wrapper",w.id=`qty-mod_${e.itemId}`;let P=document.createElement("button");P.classList="cart-element__qty-mod_deduct-btn",P.innerText=" - ",P.id=`qty-deduct-btn_${e.itemId}`;let b=document.createElement("p");b.classList="cart-element__qty-mod_qty",b.id=`qty-indicator_${e.itemId}`,b.innerText=t;let v=document.createElement("button");// console.log("productCardMain: ", productCardMain);
return v.classList="cart-element__qty-mod_add-btn",v.innerText=" + ",v.id=`qty-add-btn_${e.itemId}`,// Assembly HTML code:
n.appendChild(i),o.appendChild(c),a.appendChild(o),l.appendChild(s),l.appendChild(m),a.appendChild(l),u.appendChild(p),u.appendChild(h),a.appendChild(u),C.appendChild(g),C.appendChild(L),a.appendChild(C),_.appendChild(E),_.appendChild(I),a.appendChild(_),w.appendChild(P),w.appendChild(b),w.appendChild(v),y.appendChild(f),y.appendChild(w),a.appendChild(y),d.appendChild(a),r.appendChild(n),r.appendChild(d),r};// To-DO items:
createCartPage=e=>{let t=document.createElement("div");t.classList="product-card";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.innerText="Cart";let i=document.createElement("div");for(let t of(i.classList="cart-items-wrapper",e)){// console.log(
//     "productItem to pass to getProductObjectById() function: ",
//     productItem
// );
// console.log("productItem.itemID: ", productItem.itemId);
let e=this.controller.getProductObjectById(t.itemId);// console.log("productData: ", productData);
i.appendChild(this.createProductCardForCart(e,t.qty))}return t.appendChild(r),t.appendChild(n),t.appendChild(i),t};updatePartQuantity=(e,t)=>{// Find "price x qty" element by attribute:
let r=document.querySelector(`[data-price-qty-id="${e.itemId}"]`);r&&(r.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`);// Find "qty indicator" element by id:
let n=document.getElementById(`qty-indicator_${e.itemId}`);n&&(n.innerText=t)};updateTotalPrice=e=>{// Find "Total price" element by ID
let t=document.getElementById("cart-total-amount");t&&(t.innerText=`Total: $${e}`)}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=d("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")};getPriceByProductId=(e,t)=>{let r=e.filter(e=>e.itemId===t);// console.log("productById: ", productById);
// console.log("productById[0]: ", productById[0]);
return r[0].itemPrice};updateCartPriceVariable=(e,t,r,n)=>{let i=0,d=0;for(let t of e)i+=t.qty*this.getPriceByProductId(r,t.itemId);return d=i*n,t.items=i,t.handling=d,t.total=i+d,console.log("new sessionIdCartPrice: ",t),this.controller.handleViewOfTotalPrceInCart(t.total),t};changeQtyInCart=(e,t,r)=>{for(let n of e)n.itemId===t&&(n.qty+r<=0?(confirm("Hi there, do you like to delete item from cart?"),// TO-DO: delete product from cart
console.log(`ACTION NEEDED: DELETE PRODUCT WITH ID ${n.itemId} FROM CART.`)):(n.qty+=r,this.controller.handleViewOfPartQty(t,n.qty)));return e};// Add new product to cart:
addProductToCart=(e,t,r)=>{// TO-DO: Check if ID is already in cart - add qty then
let n={docId:this.controller.handleNewIdGeneration(),itemId:t,qty:1,userId:r};return console.log("a newCartElement: ",n),e.push(n),console.log("an updated [*** sessionIdCart ***]: ",e),e}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelUser is connected!")};getSessionIdCustomerByCustomerId=(e,t)=>{let r=t.filter(t=>t.custId===e);return r[0]}}var E=d("1ggDV");// Init database instance (dataBase):
let I={},y="",f={},w={},P={},b={},v={items:8e5,handling:8e3,total:808e3};// Init HTML variables:
const T=document.createElement("div");T.innerHTML="";const k=document.createElement("div");k.innerHTML="";const x=document.createElement("div");x.innerHTML="";// Init cross-ref Map: image - url
const O=new Map,B=new class{constructor(){this.viewProducts=new c(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new u,this.viewSuperadmin=new p,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new g(this),this.modelOrders=new L,this.modelUser=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelUser.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),E.dbCollectionNames))I[e]=await this.modelFirebase.get(e),console.log(`[*** dataBase.${e} ***] :`,I[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),I.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
O.set(e.itemImg,t)}console.log("Assigned to [*** sessionIdNumber ***]: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionIdNumber a first ID from DB (usersData[0])
y=I.usersData[0].userId),console.log("[*** sessionIdUser ***] initiated: ",// Assign to sessionIdUser a first element of the usersData[0]
f=I.usersData[0]),// Get sessionIdCustomer data by customer's ID
this.getSessionIdCustomerData(),console.log("[*** sessionIdCustomer ***] initiated: ",w),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
// ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(I.productItems),// Get values to Sesstion Variables: 1-2
// 1. Get cart items by sesstion user ID:
b=this.getCartItemsByUserID(y),console.log(`Cart items [*** sessionIdCart ***] for User ID ${y}: `,b),// 2. Get orders list by user ID:
P=this.getOrdersByUserID(y),console.log(`Orders History [*** sessionIdOrders ***] for User ID ${y}: `,P),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(b,P),this.attachEventListenrs()};// Generate unique ID
handleNewIdGeneration=()=>this.modelFirebase.generateUniqueId();// Get sessionIdCustomer data by customer's ID
getSessionIdCustomerData=()=>{w=this.modelUser.getSessionIdCustomerByCustomerId(f.custId,I.customersData)};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>O.get(e);getCartItemsByUserID=e=>I.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>I.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=I.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
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
handleGotoProductsBtn=()=>{this.renderProductItemsList(I.productItems),this.renderCartAndOrdersSummary(b,P)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=e=>{console.log("TO-DO: Add product to cart.",e.id);let t=this.getProdIdFromElementId(e.id);console.log(`TO-DO: Add product with ID ${t} to cart.`),b=this.modelCart.addProductToCart(b,t,y),this.renderCartAndOrdersSummary(b,P)};// "Go to Cart" button at right panel
handleGotoCartBtn=()=>{console.log("Received command to display CART."),// TEST-TBD
this.modelCart.updateCartPriceVariable(b,v,I.productItems,w.custHandlingFee),this.renderCartSummary(b),this.renderCartSummaryWithPrice(b,v)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT")};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to display PRODUCT CARD with ID: ",e.id),console.log("Clicked inside product item");let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r),this.renderCartAndOrdersSummary(b,P)};handleDisplayHistoricalOrder=e=>{console.log("Received command to display ORDER with ID: ",e.id)};handleQtyChangeBtn=(e,t,r)=>{console.log("Received command to deduct qty of product with ID: ",e.id);let n=this.getProdIdFromElementId(e.id);console.log("itemId: ",n),console.log("sessionIdCard: ",this.modelCart.changeQtyInCart(b,n,r)),v=this.modelCart.updateCartPriceVariable(b,v,I.productItems,w.custHandlingFee);// this.handleGotoCartBtn();
};handleViewOfPartQty=(e,t)=>{console.log("Got comand to update product qty with:"),console.log("Product ID: ",e),console.log("New QTY: ",t);let r=this.getProductObjectById(e);this.viewCart.updatePartQuantity(r,t)};handleViewOfTotalPrceInCart=e=>{this.viewCart.updateTotalPrice(e)};handleButtonsClickLeft=(e,t)=>{let r=e.target;// "< Back to Products" button
if(r.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "Add to Cart" button at detailed product card (page)
let n=r.closest(".product-card__add-to-cart-btn");if(n){this.handleAddToCartBtn(n);return}// "Add to Cart" button at short product card (main page)
let i=this.findAncestorByClass(r,"product-item__content_price-btn");if(i){this.handleAddToCartBtn(i);return}// Product card as "button" at main page
let d=this.findAncestorByClass(r,"product-item");// Qty deduct button at Cart page
if(d&&this.handleProductItem(d),r.classList.contains("cart-element__qty-mod_deduct-btn")){this.handleQtyChangeBtn(r,t,-1);return}// Qty add button at Cart page
if(r.classList.contains("cart-element__qty-mod_add-btn")){this.handleQtyChangeBtn(r,t,1);return}};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn(b);// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn()};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)}};try{B.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.70a60697.js.map

//# sourceMappingURL=index.70a60697.js.map
